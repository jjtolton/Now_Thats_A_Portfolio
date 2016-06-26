__author__ = 'jay'
from asn1_binary_compiler.asn_1_compiler_lib import get_processed_cm_cell_data, get_processed_cm_rel_data, \
    get_pm_data_with_prefix_removed, seperate_cells_from_relations, get_formatted_relations, get_processed_relations, \
    get_formatted_cells, get_processed_cells, merge_processed_data

from python_code.older_code.asn1_binary_compiler import parse


def compile_asn1(import_file_path, cm_cell_data, cm_rel_data):
    processed_cm_cell_data = get_processed_cm_cell_data(cm_cell_data)
    processed_cm_rel_data = get_processed_cm_rel_data(cm_cell_data, cm_rel_data)

    pm_data = parse(import_file_path)
    pm_data = get_pm_data_with_prefix_removed(pm_data)

    cells, relations = seperate_cells_from_relations(pm_data)

    formatted_relations = get_formatted_relations(relations)
    processed_relations = get_processed_relations(pm_data, processed_cm_cell_data, processed_cm_rel_data,
                                                  formatted_relations)

    formatted_cells = get_formatted_cells(cells)
    processed_cells = get_processed_cells(formatted_cells, pm_data, processed_cm_cell_data)

    processed_data = merge_processed_data(processed_cells, processed_relations)

    return processed_data