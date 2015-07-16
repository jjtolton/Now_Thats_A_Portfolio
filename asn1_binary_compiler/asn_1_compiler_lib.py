from collections import deque
import binascii

def merge_processed_data(processed_cells, processed_relations):
    merged_data = {}
    for cell in processed_cells:
        merged_data[cell] = processed_cells[cell]

    for relation in processed_relations:
        merged_data[relation] = processed_relations[relation]

    return merged_data

do_nothing = {160, 161, 162, 163, 0x30, 0}
def readline(line_type, num_bits_ln, b_array):
    if line_type in do_nothing:
        return ()
    else:
        line = tuple([b_array.popleft() for b in xrange(num_bits_ln)])

    return line

def get_info(b_noheader):
    p, l = b_noheader.popleft(), b_noheader.popleft()
    return p, l

def get_pms(lns, pms):
    names = []
    for ln in lns[19:]:
        if ln == ():
            break
        else:
            name = get_name(ln, human_readable=True)
            names.append(name)
    return names

def strip_header(lns):
    """

    :type lns: deque
    :return:
    """
    while True:
        ln = lns.popleft()
        if ln[0] == 19:
            lns.appendleft(ln)
            break

def strip_footer(lns):
    while True:
        ln_type, ln_len, ln = ln_data = lns.pop()
        if (ln_type, ln_len) == (130, 1):
            lns.append(ln_data)
            break

def get_name(ln, human_readable=False):
    if human_readable is True:
        letters = ['{:02x}'.format(letter) for letter in ln]
        name = str(binascii.unhexlify(''.join(letters)))
    else:
        name = ln
    return name

def get_num(ln, human_readable=False):
    if human_readable is True:
        nums = map(hex, ln)
        nums = [num.replace('0x', '') for num in nums]
        num = '0x' + ''.join(nums) if nums else '0'
        num = int(num, 16)
    else:
        num = ln
    return num


def get_lines(b):
    lns = deque()
    while b:
        ln_type, ln_len = get_info(b)
        ln = readline(ln_type, ln_len, b)
        if ln_type == 19 or ln_type == 128:
            lns.append((ln_type, ln_len, ln))
    return lns


def get_pm_data_with_prefix_removed(pm_data):
    clean_data = {}
    for entry in pm_data:
        if entry and '.' in entry:
            new_entry = tuple(entry.split('.')[1:])[0]
            if new_entry not in clean_data:
                clean_data[new_entry] = pm_data[entry]
            else:
                for item in pm_data[entry]:
                    if item in clean_data[new_entry]:
                        clean_data[new_entry][item] += pm_data[entry][item]
                    else:
                        clean_data[new_entry][item] = pm_data[entry][item]
        else:
            new_entry = (entry,)
            clean_data[new_entry] = pm_data[entry]

    return clean_data

def is_relation(item, pm_data, relation_pms):
    for entry in pm_data[item]:
        if entry in relation_pms:
            return True
    else:
        return False

def is_format_ok_rel(item):
    return '-' in item and isinstance(item, str)

def is_cell(item, pm_data, cell_pms):
    for entry in pm_data[item]:
        if entry in cell_pms:
            break
    else:
        return False

def is_format_okay_cell(item):
    if item:
        return True
    return False

def get_formatted_relations(relations):
    formatted_relations = []
    for relation in relations:
        formatted_relation = tuple(relation.split('-'))

        if len(formatted_relation) == 2 and formatted_relation[0] and formatted_relation[1]:
            formatted_relations.append(formatted_relation)

    return formatted_relations

def seperate_cells_from_relations(pm_data):
    cells = []
    relations = []

    for _item in pm_data:
        is_relation_name = is_format_ok_rel(_item)
        is_cell_name = is_format_okay_cell(_item)
        if is_relation_name:
            relations.append(_item)
            continue
        if is_cell_name:
            cells.append(_item)
        elif not _item:
            continue

    return cells, relations

def get_processed_cells(cells, pm_data, processed_cm_cell_data):
    pm_data_uuids = {}
    for cell_name in cells:
        if cell_name in processed_cm_cell_data:
            cell_uuid = processed_cm_cell_data[cell_name]
            pm_data_uuids[cell_uuid] = pm_data[cell_name]
    return pm_data_uuids

def get_processed_relations(pm_data, processed_cm_cell_data, processed_cm_rel_data, relations):

    pm_relation_uuids_data = {}
    for relation in relations:
        src_name, dst_name = relation
        if src_name in processed_cm_cell_data:
            src_uuid = processed_cm_cell_data[src_name]
        else:
            continue

        if dst_name in processed_cm_rel_data[src_uuid]:
            dst_uuid = processed_cm_rel_data[src_uuid][dst_name]
        else:
            continue

        if dst_uuid:
            pm_data_relation = '-'.join(relation)
            pm_relation_uuids_data[(src_uuid, dst_uuid)] = pm_data[pm_data_relation]
        else:
            continue
    return pm_relation_uuids_data

def get_cell_uuid(item, bsc, cm_cell_data):
    if bsc + item in cm_cell_data:
        possible_cell_uuid = bsc + item
    else:
        possible_cell_uuid = ''

    return possible_cell_uuid


def get_processed_cm_rel_data(cm_cell_data, cm_rel_data):
    processed_cm_rel_data = {}

    # initialize dictionary
    for src_uuid in cm_rel_data:
        processed_cm_rel_data[src_uuid] = {}

        # reverse lookup cell_name matched to cell_uuid
        for dst_uuid in cm_rel_data[src_uuid]:

            # get cell name from
            if dst_uuid not in cm_cell_data:
                dst_name = ''
            else:
                dst_name = cm_cell_data[dst_uuid].cell_name

            processed_cm_rel_data[src_uuid][dst_name] = dst_uuid

    return processed_cm_rel_data


def get_processed_cm_cell_data(cm_cell_data):
    to_remove = set()
    processed_cm_cell_data = {}

    for cell_uuid in cm_cell_data:
        cell = cm_cell_data[cell_uuid]
        """@type cell: Cell"""
        if cell.cell_name is None:
            continue

        if cell.bsc_name is None:
            continue

        cell_name = cell.cell_name
        _bsc = cell.bsc_name

        if cell_name in processed_cm_cell_data:
            to_remove.add(cell_name)
            continue

        if cell_name:
            processed_cm_cell_data[cell_name] = cell_uuid

    for cell_name in to_remove:
        processed_cm_cell_data.pop(cell_name)

    return processed_cm_cell_data


def get_formatted_cells(cells):
    return cells




