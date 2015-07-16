from collections import deque

from lib.utils.format_utils import concat_lists
from lib.vendor.ericsson.pm_reader import cell_kpis, relation_kpis
from notes.scripts.par_parser_lib import get_lines, strip_header, get_num, get_name, strip_footer

__author__ = 'jay'




def parse(f):
    kpis = set(concat_lists(cell_kpis.values() + relation_kpis.values()))
    b = deque(bytearray(open(f, 'rb').read()))
    lns = get_lines(b)
    strip_header(lns)

    relevant_pm_data = {}
    while lns:
        oss_pm_data_items = []
        while lns:
            ln = lns.popleft()
            if ln[0] != 19:
                lns.appendleft(ln)
                break
            else:
                oss_pm_data_items.append(get_name(ln[2], human_readable=True))

        while True:
            if not lns or (len(lns) > 1 and lns[1][0] == 19):
                break
            ln = lns.popleft()
            name = get_name(tuple(ln[2]), human_readable=True)

            if name not in relevant_pm_data:
                relevant_pm_data[name] = {}

            if len(lns) < len(oss_pm_data_items):
                oss_pm_data_items = oss_pm_data_items[:len(lns)]

            for item in oss_pm_data_items:

                if item not in kpis:
                    lns.popleft()
                    continue

                if item not in relevant_pm_data[name]:
                    relevant_pm_data[name][item] = 0

                oss_pm_val = get_num(lns.popleft()[2], human_readable=True)
                relevant_pm_data[name][item] += oss_pm_val

        if lns:
            # granularity period
            lns.popleft()

    # readable_pm_data = make_readable(relevant_pm_data)
    return relevant_pm_data
