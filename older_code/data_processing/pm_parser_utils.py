__author__ = 'jay'

import os
import re

from lib.utils.format_utils import kpi_to_regex, concat_lists, get_cell_uuid
from lib.utils import EricssonPmReader
from lib.utils.data_processing_utils import DataPipeline

class RelationNotFoundError(Exception):
    pass


class MultipleRelationError(Exception):
    pass


def make_src_id(obj_id):
    return obj_id.split('-')


def is_cell(bsc_name):
    assert isinstance(bsc_name, str)
    return bsc_name.count(':') == 1


def is_relation(obj_id):
    assert isinstance(obj_id, str)
    return '-' in obj_id or obj_id.count(':') > 1


def end():
    """
    This does nothing except pass data items through.  Used as a development tool
    to aid in DataProcess pipeline organization and testing.

    """
    def finish_stream(stream):
        for x in stream:
            yield x

    return finish_stream


def get_instid(tgt):
    assert isinstance(tgt, str)
    if ':' not in tgt:
        raise ValueError
    bsc, instid = tgt.split(':')
    return bsc, instid


def get_outlier_bsc(tgt, data):
    return data['BSC_NAME']

def restrict_tgt_data():
    def _get_instid(stream):
        for src, tgt_data in stream:
            while tgt_data:
                tgt, data = tgt_data.popitem()
                yield src, tgt, data

def process_normal_tgt_ids():
    def process_tgt_ids(stream):
        for src, tgt, data in stream:
            tgt_instid, tgt_bsc = get_instid(tgt)
            yield src, tgt_instid, tgt_bsc, data

def restrict_dict_items():
    def restrict(stream):
        while stream:
            yield stream.popitem()


def get_relations_map(cm_relations_data):
    # ('K01401:43131', {'K01401:42195': {'BSC_NAME': 'K01401'}, 'K01401:35233': {'BSC_NAME': 'K01401'}, 'K01401:42441': {'BSC_NAME': 'K01401'}, 'K01401:43133': {'BSC_NAME': 'K01401'}, 'K01401:42191': {'BSC_NAME': 'K01401'}, 'K01401:43135': {'BSC_NAME': 'K01401'}, 'K01401:42445': {'BSC_NAME': 'K01401'}, 'K01401:42192': {'BSC_NAME': 'K01401'}, 'K01401:43137': {'BSC_NAME': 'K01401'}, 'K01401:13796': {'BSC_NAME': 'K01401'}, 'K01401:13791': {'BSC_NAME': 'K01401'}, 'K01401:43132': {'BSC_NAME': 'K01401'}, 'K01401:13792': {'BSC_NAME': 'K01401'}, 'K01401:5986': {'BSC_NAME': 'K01401'}, 'K01401:5987': {'BSC_NAME': 'K01401'}, 'K01401:43142': {'BSC_NAME': 'K01401'}, 'K01401:5982': {'BSC_NAME': 'K01401'}, 'K01401:42447': {'BSC_NAME': 'K01401'}, 'K01401:42443': {'BSC_NAME': 'K01401'}})

    relation_map = {}
    pipeline = DataPipeline(source=cm_relations_data)

    pipeline.stream(
        restrict_dict_items(),
        restrict_tgt_data(),
        process_normal_tgt_ids(),
        # process_unusual_tgt_ids(),
        end(),
    )

    # for src, tgt_instid, tgt_bsc in pipeline():
    #     relation_map[src][tgt_instid] = tgt_bsc

    return pipeline()



def get_bsc_name(fname):
    p = re.compile('(?<=\d_).*?(?=:)')
    res = re.search(p, fname)
    return res.group()


def parse_binary_data_files(kpis):
    """
    Takes files from a grouped binary file stream and parses them, returning
    a stream of parsed binary data files with pm data mapped to obj_ids"
    :param binary_pm_file_stream:
    :param kpis:
    :return:
    """

    def parsed_binary_data_file_stream(stream):
        assert isinstance(kpis, dict)
        for val in kpis.values():
            assert isinstance(val, list)

        pm_set = concat_lists(kpis.values())
        for fname in stream:
            incomplete_pm_data_set = EricssonPmReader(fname, pm_set=pm_set).parse()
            assert isinstance(incomplete_pm_data_set, dict)  # {pm: val ...}
            for obj_id, pm_vals in incomplete_pm_data_set.items():
                assert isinstance(obj_id, str)
                assert isinstance(pm_vals, dict)

            yield fname, incomplete_pm_data_set

    return parsed_binary_data_file_stream


def extract_pm_data_objects():
    """
    Takes a set of pm data objects (dict) and yields one value at a time,
    along with its associated file name
    """

    def restrictor(stream):
        for fname, inc_pm_data_set in stream:

            assert isinstance(fname, str)
            assert isinstance(inc_pm_data_set, dict)
            for obj_id, pm_vals in inc_pm_data_set.items():
                assert isinstance(obj_id, str)
                assert isinstance(pm_vals, dict)

            while inc_pm_data_set:
                yield fname, inc_pm_data_set.popitem()

    return restrictor


def kpi_object_file_source(path, kpis):
    """
    Looks through a directory of mixed pm data and returns files containing
    the listed kpis
    """
    assert isinstance(path, str)
    assert '/' in path
    assert isinstance(kpis, dict)
    for val in kpis.values():
        assert isinstance(val, list)
        for pm in val:
            assert isinstance(pm, str)

    # create search expression from KPIS
    search = re.compile(kpi_to_regex(kpis))  # THNCALLS | HOVERSUC | WHATEVER

    for file in os.listdir(path):
        fname = os.path.join(path, file)
        try:
            with open(fname) as f:
                if re.search(search, f.read()):
                    yield fname
        except IOError:
            continue


def aggregate_pm_data():
    """
    Accepts a stream of parsed binary data files containing
    incomplete pm data object and returns a stream of
    consolidated pm data objects with complete pm data information
    """

    def pm_data_object_accumulator(stream):
        d = {}
        for obj_id, obj_data in stream:
            assert isinstance(obj_id, str)
            assert isinstance(obj_data, dict)  # pm data... eg {'THCASSALL': 26, 'THNDROP': 0, 'THNDROPSUB': 0}

            # aggregate pms
            if obj_id in d:
                d[obj_id].update(obj_data)
            else:
                d[obj_id] = obj_data
        while d:
            yield d.popitem()

    return pm_data_object_accumulator


def normalize_fnames():
    """
    Takes the file name of a binary pm data file and returns the bsc name
    """

    def normalized_fname_stream(stream):
        for fname, incomplete_pm_data_obj in stream:
            assert isinstance(fname, str)
            assert '/' in fname  # it's a file or path
            assert isinstance(incomplete_pm_data_obj, tuple)
            assert isinstance(incomplete_pm_data_obj[0], str);  # instid
            assert isinstance(incomplete_pm_data_obj[1], dict)  # pms {pm: val ...}
            yield get_bsc_name(fname), incomplete_pm_data_obj

    return normalized_fname_stream


def normalize_cell_ids():
    """
    If the data item is a cell, the data item is yielded with a normalized cell name.  Otherwise
    it is passed on to the next data process
    :return:
    """

    def normalized_cell_id_stream(stream):
        for bsc_name, incomplete_pm_data_object in stream:
            assert isinstance(bsc_name, str)
            assert isinstance(incomplete_pm_data_object, tuple)
            assert isinstance(incomplete_pm_data_object[0], str)  # instid
            assert isinstance(incomplete_pm_data_object[1], dict)  # pm data {pm: val ...}
            obj_id, data = incomplete_pm_data_object
            if not is_relation(obj_id):
                yield get_cell_uuid(bsc_name, obj_id), data
            else:  # is a relation
                yield bsc_name, incomplete_pm_data_object

    return normalized_cell_id_stream


def normalize_rel_ids(rel_map, num_rel_not_found, num_mul_rel_found):
    def normalized_rel_id_stream(stream):
        assert isinstance(rel_map, dict)  # ('K01421', ('11936-42535', {'HOVERSUC': 18, 'HOVERCNT': 18}))
        for bsc_name, incomplete_pm_data_object in stream:
            assert isinstance(bsc_name, str)
            assert isinstance(incomplete_pm_data_object, dict)
            for obj_id, pm_vals in incomplete_pm_data_object.items():
                assert isinstance(obj_id, str)
                assert isinstance(pm_vals, dict)
            if is_cell(bsc_name):
                yield bsc_name, incomplete_pm_data_object
                continue
            obj_id, data = incomplete_pm_data_object
            if is_relation(obj_id):
                src, tgt_instid = make_src_id(obj_id)
                src = get_cell_uuid(bsc_name, src)
                assert ':' in src
                assert '-' not in src
                if src not in rel_map or tgt_instid not in rel_map[
                    src]:  # Note:  This step filters out any pm relations
                    num_rel_not_found[0] += 1  # not in cm relations data, thus
                    continue  # after this step len(pm_rels) = len(cm_rels)
                tgt_bsc = rel_map[src]
                ot in cm
                relations
                data, thus[tgt_instid]
                tgt = get_cell_uuid(tgt_bsc, tgt_instid)
                yield (src, tgt), data

    return normalized_rel_id_stream


def convert_pm_data_to_kpi_data(kpis):
    """
    Accepts a stream of pm data objects and returns a stream of kpi data objects.
    """

    def kpi_obj_stream(stream):
        for pm_data_obj in stream:
            assert isinstance(pm_data_obj[0], str)  # obj_id
            assert isinstance(pm_data_obj[1], dict)  # pm_data
            obj_id, pm_data = pm_data_obj
            kpi_data = {}
            for kpi, pm_vals in kpis.iteritems():
                kpi_val = sum(pm_data[pm_val] if pm_val in pm_data else 0 for pm_val in pm_vals)
                kpi_data[kpi] = kpi_val

            assert isinstance(kpi_data, dict)
            yield obj_id, kpi_data

    return kpi_obj_stream

if __name__ == '__main__':
    from lib.vendor.ericsson import cm_reader
    cell_data = 'data/2g_relations.txt'
    rel_data = 'data/2g_relations.txt'
    cm_cell_data = cm_reader.parse_cells(cell_data)
    cm_rel_data = cm_reader.parse_relations(cm_cell_data)
    rel_map = get_relations_map(cm_rel_data)
    print(list(rel_map))










