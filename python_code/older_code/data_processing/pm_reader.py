# --- builtin libraries
from lib.utils.data_processing_utils import DataPipeline
from lib.utils.pm_parser_utils import *
from time import time
from data.ericsson.kpi_data import cell_kpis, relation_kpis


def calculate_kpis(path, kpis, cm_cell_data=None, cm_rel_data=None):
    """Legacy api --> returns generator of pm_data key to kpis"""

    # cm_rel_map = get_relations_map(cm_rel_data)
    # num_rel_not_found = [0]
    # mul_rel_found = [0]
    source = kpi_object_file_source(path, kpis)
    pm_data_pipeline = DataPipeline(source)
    pm_data_pipeline.stream(

        parse_binary_data_files(kpis),
        extract_pm_data_objects(),
        normalize_fnames(),
        normalize_cell_ids(),
        # normalize_rel_ids(cm_rel_map, num_rel_not_found, mul_rel_found),
        aggregate_pm_data(),
        convert_pm_data_to_kpi_data(kpis),
        end()

    )

    return pm_data_pipeline

# HO params: ./data/ericsson/pm/C20150225.0400-20150225.0500_K01421:1008
# call params: ./data/ericsson/pm/C20150225.0400-20150225.0500_K01421:1006
if __name__ == '__main__':
    import cm_reader

    f_3 = './data/ericsson/pm/C20150225.0400-20150225.0500_K01421:1003'
    f_4 = './data/ericsson/pm/C20150225.0400-20150225.0500_K01421:1004'
    f_6 = './data/ericsson/pm/C20150225.0400-20150225.0500_K01421:1006'
    f_8 = './data/ericsson/pm/C20150225.0400-20150225.0500_K01421:1008'
    f_12 = './data/ericsson/pm/C20150225.0400-20150225.0500_K01421:1012'
    cm_cell_data = 'data/2g_cell_data.txt'
    cm_rel_data = 'data/2g_rel_data.txt'
    pm_cell_path = 'data/ericsson/vimpelcom/pm'
    pm_rel_path = pm_cell_path
    # cm_cell_data = cm_reader.parse_cells(cm_cell_data)
    # cm_rel_data = cm_reader.parse_relations(cm_cell_data)

    t0 = time()
    pstuff = calculate_kpis(pm_cell_path, cell_kpis, cm_cell_data, cm_rel_data)()
    t1 = time()

    print type(pstuff)

    for x in range(10):
        print next(pstuff)
    print t1 - t0
