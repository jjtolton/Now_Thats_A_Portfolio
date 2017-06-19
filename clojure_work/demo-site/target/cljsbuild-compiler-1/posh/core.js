// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('posh.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('posh.lib.q_analyze');
goog.require('posh.lib.update');
goog.require('posh.lib.db');
goog.require('posh.lib.graph');
posh.core.empty_tree = (function posh$core$empty_tree(p__45806,retrieve){
var map__45809 = p__45806;
var map__45809__$1 = ((((!((map__45809 == null)))?((((map__45809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45809.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45809):map__45809);
var dcfg = map__45809__$1;
var q = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45809__$1,cljs.core.cst$kw$q);
var pull = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45809__$1,cljs.core.cst$kw$pull);
var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45809__$1,cljs.core.cst$kw$filter);
var entid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45809__$1,cljs.core.cst$kw$entid);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45809__$1,cljs.core.cst$kw$db);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$filters,cljs.core.cst$kw$retrieve,cljs.core.cst$kw$txs,cljs.core.cst$kw$cache,cljs.core.cst$kw$dbs,cljs.core.cst$kw$schemas,cljs.core.cst$kw$graph,cljs.core.cst$kw$dcfg,cljs.core.cst$kw$conns],[cljs.core.PersistentArrayMap.EMPTY,retrieve,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,dcfg,cljs.core.PersistentArrayMap.EMPTY]);
});
posh.core.add_db = (function posh$core$add_db(var_args){
var args45811 = [];
var len__8822__auto___45817 = arguments.length;
var i__8823__auto___45818 = (0);
while(true){
if((i__8823__auto___45818 < len__8822__auto___45817)){
args45811.push((arguments[i__8823__auto___45818]));

var G__45819 = (i__8823__auto___45818 + (1));
i__8823__auto___45818 = G__45819;
continue;
} else {
}
break;
}

var G__45813 = args45811.length;
switch (G__45813) {
case 4:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45811.length)].join('')));

}
});

posh.core.add_db.cljs$core$IFn$_invoke$arity$4 = (function (posh_tree,db_id,conn,schema){
return posh.core.add_db.cljs$core$IFn$_invoke$arity$5(posh_tree,db_id,conn,schema,null);
});

posh.core.add_db.cljs$core$IFn$_invoke$arity$5 = (function (p__45814,db_id,conn,schema,base_filters){
var map__45815 = p__45814;
var map__45815__$1 = ((((!((map__45815 == null)))?((((map__45815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45815):map__45815);
var posh_tree = map__45815__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45815__$1,cljs.core.cst$kw$dcfg);
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45815__$1,cljs.core.cst$kw$conns);
var schemas = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45815__$1,cljs.core.cst$kw$schemas);
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45815__$1,cljs.core.cst$kw$dbs);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45815__$1,cljs.core.cst$kw$cache);
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45815__$1,cljs.core.cst$kw$graph);
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,db_id], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([posh_tree,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$conns,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(conns,db_id,conn),cljs.core.cst$kw$schemas,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(schemas,db_id,schema),cljs.core.cst$kw$filters,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$filters.cljs$core$IFn$_invoke$arity$1(posh_tree),db_id,base_filters),cljs.core.cst$kw$return,storage_key,cljs.core.cst$kw$dbs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dbs,db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3(dcfg,conn,base_filters)),cljs.core.cst$kw$cache,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pass_DASH_patterns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])], 0)),cljs.core.cst$kw$graph,posh.lib.graph.add_item_full(graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null)], 0));
});

posh.core.add_db.cljs$lang$maxFixedArity = 5;

posh.core.set_db = (function posh$core$set_db(var_args){
var args45821 = [];
var len__8822__auto___45827 = arguments.length;
var i__8823__auto___45828 = (0);
while(true){
if((i__8823__auto___45828 < len__8822__auto___45827)){
args45821.push((arguments[i__8823__auto___45828]));

var G__45829 = (i__8823__auto___45828 + (1));
i__8823__auto___45828 = G__45829;
continue;
} else {
}
break;
}

var G__45823 = args45821.length;
switch (G__45823) {
case 3:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45821.length)].join('')));

}
});

posh.core.set_db.cljs$core$IFn$_invoke$arity$3 = (function (posh_tree,db_id,db){
return posh.core.set_db.cljs$core$IFn$_invoke$arity$4(posh_tree,db_id,db,null);
});

posh.core.set_db.cljs$core$IFn$_invoke$arity$4 = (function (p__45824,db_id,db,filter_pred){
var map__45825 = p__45824;
var map__45825__$1 = ((((!((map__45825 == null)))?((((map__45825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45825):map__45825);
var posh_tree = map__45825__$1;
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45825__$1,cljs.core.cst$kw$dbs);
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45825__$1,cljs.core.cst$kw$graph);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45825__$1,cljs.core.cst$kw$cache);
var storage_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,db_id], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([posh_tree,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$dbs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dbs,db_id,db),cljs.core.cst$kw$cache,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cache,cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pass_DASH_patterns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null)])], 0)),cljs.core.cst$kw$graph,posh.lib.graph.add_item_full(graph,storage_key,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)], null)], 0));
});

posh.core.set_db.cljs$lang$maxFixedArity = 4;

posh.core.add_filter_tx = (function posh$core$add_filter_tx(p__45831,poshdb,tx_patterns){
var map__45834 = p__45831;
var map__45834__$1 = ((((!((map__45834 == null)))?((((map__45834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45834.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45834):map__45834);
var posh_tree = map__45834__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45834__$1,cljs.core.cst$kw$cache);
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45834__$1,cljs.core.cst$kw$graph);
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_tx,poshdb,tx_patterns], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$graph,posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),cljs.core.cst$kw$cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pass_DASH_patterns,tx_patterns], null))], null)], 0))),cljs.core.cst$kw$return,storage_key);
});
posh.core.add_filter_pull = (function posh$core$add_filter_pull(p__45836,poshdb,pull_pattern,eid){
var map__45839 = p__45836;
var map__45839__$1 = ((((!((map__45839 == null)))?((((map__45839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45839.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45839):map__45839);
var posh_tree = map__45839__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45839__$1,cljs.core.cst$kw$cache);
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45839__$1,cljs.core.cst$kw$graph);
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45839__$1,cljs.core.cst$kw$dcfg);
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45839__$1,cljs.core.cst$kw$conns);
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45839__$1,cljs.core.cst$kw$conns_DASH_by_DASH_id);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_pull,poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$graph,posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),cljs.core.cst$kw$cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,posh.lib.update.update_filter_pull(posh_tree,storage_key))], null)], 0))),cljs.core.cst$kw$return,storage_key);
});
posh.core.add_filter_q = (function posh$core$add_filter_q(var_args){
var args__8829__auto__ = [];
var len__8822__auto___45849 = arguments.length;
var i__8823__auto___45850 = (0);
while(true){
if((i__8823__auto___45850 < len__8822__auto___45849)){
args__8829__auto__.push((arguments[i__8823__auto___45850]));

var G__45851 = (i__8823__auto___45850 + (1));
i__8823__auto___45850 = G__45851;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((2) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((2)),(0),null)):null);
return posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8830__auto__);
});

posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__45844,query,args){
var map__45845 = p__45844;
var map__45845__$1 = ((((!((map__45845 == null)))?((((map__45845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45845.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45845):map__45845);
var posh_tree = map__45845__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45845__$1,cljs.core.cst$kw$graph);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45845__$1,cljs.core.cst$kw$cache);
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45845__$1,cljs.core.cst$kw$dcfg);
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45845__$1,cljs.core.cst$kw$retrieve);
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45845__$1,cljs.core.cst$kw$conns);
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45845__$1,cljs.core.cst$kw$conns_DASH_by_DASH_id);
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filter_DASH_q,query,args], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var map__45847 = posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key);
var map__45847__$1 = ((((!((map__45847 == null)))?((((map__45847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45847.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45847):map__45847);
var analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45847__$1,cljs.core.cst$kw$analysis);
var dbvarmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45847__$1,cljs.core.cst$kw$dbvarmap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$graph,posh.lib.graph.add_item_connect(graph,storage_key,cljs.core.vals(dbvarmap)),cljs.core.cst$kw$cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,posh.lib.update.filter_q_transform_analysis(analysis))], null)], 0));
})()),cljs.core.cst$kw$return,storage_key);
});

posh.core.add_filter_q.cljs$lang$maxFixedArity = (2);

posh.core.add_filter_q.cljs$lang$applyTo = (function (seq45841){
var G__45842 = cljs.core.first(seq45841);
var seq45841__$1 = cljs.core.next(seq45841);
var G__45843 = cljs.core.first(seq45841__$1);
var seq45841__$2 = cljs.core.next(seq45841__$1);
return posh.core.add_filter_q.cljs$core$IFn$_invoke$arity$variadic(G__45842,G__45843,seq45841__$2);
});

posh.core.add_pull = (function posh$core$add_pull(p__45852,poshdb,pull_pattern,eid){
var map__45855 = p__45852;
var map__45855__$1 = ((((!((map__45855 == null)))?((((map__45855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45855.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45855):map__45855);
var posh_tree = map__45855__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45855__$1,cljs.core.cst$kw$graph);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45855__$1,cljs.core.cst$kw$cache);
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45855__$1,cljs.core.cst$kw$dcfg);
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45855__$1,cljs.core.cst$kw$conns);
var conns_by_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45855__$1,cljs.core.cst$kw$conns_DASH_by_DASH_id);
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45855__$1,cljs.core.cst$kw$retrieve);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pull,poshdb,pull_pattern,eid], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(cached)?posh_tree:(function (){var analysis = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tx_DASH_t,(0)], null),posh.lib.update.update_pull(posh_tree,storage_key)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$graph,posh.lib.graph.add_item_connect(graph,storage_key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [poshdb], null)),cljs.core.cst$kw$cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
})()),cljs.core.cst$kw$return,storage_key);
});
posh.core.add_q = (function posh$core$add_q(var_args){
var args__8829__auto__ = [];
var len__8822__auto___45865 = arguments.length;
var i__8823__auto___45866 = (0);
while(true){
if((i__8823__auto___45866 < len__8822__auto___45865)){
args__8829__auto__.push((arguments[i__8823__auto___45866]));

var G__45867 = (i__8823__auto___45866 + (1));
i__8823__auto___45866 = G__45867;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((2) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((2)),(0),null)):null);
return posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8830__auto__);
});

posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic = (function (p__45860,query,args){
var map__45861 = p__45860;
var map__45861__$1 = ((((!((map__45861 == null)))?((((map__45861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45861.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45861):map__45861);
var posh_tree = map__45861__$1;
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45861__$1,cljs.core.cst$kw$cache);
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45861__$1,cljs.core.cst$kw$graph);
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45861__$1,cljs.core.cst$kw$dcfg);
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45861__$1,cljs.core.cst$kw$conns);
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45861__$1,cljs.core.cst$kw$retrieve);
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$q,query,args], null);
var cached = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__7601__auto__ = cached;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var map__45863 = posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key);
var map__45863__$1 = ((((!((map__45863 == null)))?((((map__45863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45863):map__45863);
var analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45863__$1,cljs.core.cst$kw$analysis);
var dbvarmap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45863__$1,cljs.core.cst$kw$dbvarmap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([posh_tree,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$graph,posh.lib.graph.add_item_connect(graph,storage_key,cljs.core.vals(dbvarmap)),cljs.core.cst$kw$cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cache,storage_key,analysis)], null)], 0));
}
})(),cljs.core.cst$kw$return,storage_key);
});

posh.core.add_q.cljs$lang$maxFixedArity = (2);

posh.core.add_q.cljs$lang$applyTo = (function (seq45857){
var G__45858 = cljs.core.first(seq45857);
var seq45857__$1 = cljs.core.next(seq45857);
var G__45859 = cljs.core.first(seq45857__$1);
var seq45857__$2 = cljs.core.next(seq45857__$1);
return posh.core.add_q.cljs$core$IFn$_invoke$arity$variadic(G__45858,G__45859,seq45857__$2);
});

posh.core.remove_item = (function posh$core$remove_item(p__45868,storage_key){
var map__45871 = p__45868;
var map__45871__$1 = ((((!((map__45871 == null)))?((((map__45871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45871.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45871):map__45871);
var posh_tree = map__45871__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45871__$1,cljs.core.cst$kw$graph);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45871__$1,cljs.core.cst$kw$cache);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(posh_tree,cljs.core.cst$kw$graph,posh.lib.graph.remove_item(graph,storage_key),cljs.core.array_seq([cljs.core.cst$kw$cache,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cache,storage_key)], 0));
});
posh.core.cache_changes = (function posh$core$cache_changes(p__45873,db_id,tx,new_cache,storage_key){
var map__45878 = p__45873;
var map__45878__$1 = ((((!((map__45878 == null)))?((((map__45878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45878):map__45878);
var posh_tree = map__45878__$1;
var graph = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45878__$1,cljs.core.cst$kw$graph);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45878__$1,cljs.core.cst$kw$cache);
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_cache,storage_key))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var current_analysis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,storage_key);
var reloaded = (cljs.core.truth_(posh.lib.datom_matcher.any_datoms_match_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$reload_DASH_patterns.cljs$core$IFn$_invoke$arity$1(current_analysis),db_id),tx))?cljs.core.cst$kw$reload_DASH_fn.cljs$core$IFn$_invoke$arity$1(current_analysis).call(null,posh_tree,storage_key):null);
var analysis = (function (){var or__7601__auto__ = reloaded;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return current_analysis;
}
})();
var map__45880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph,storage_key);
var map__45880__$1 = ((((!((map__45880 == null)))?((((map__45880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45880.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45880):map__45880);
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45880__$1,cljs.core.cst$kw$outputs);
var children_cache = (function (){var temp__6738__auto__ = (function (){var and__7589__auto__ = !(cljs.core.empty_QMARK_(outputs));
if(and__7589__auto__){
var and__7589__auto____$1 = cljs.core.cst$kw$pass_DASH_patterns.cljs$core$IFn$_invoke$arity$1(analysis);
if(cljs.core.truth_(and__7589__auto____$1)){
return posh.lib.datom_matcher.matching_datoms(cljs.core.cst$kw$pass_DASH_patterns.cljs$core$IFn$_invoke$arity$1(analysis),tx);
} else {
return and__7589__auto____$1;
}
} else {
return and__7589__auto__;
}
})();
if(cljs.core.truth_(temp__6738__auto__)){
var pass_tx = temp__6738__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pass_tx,temp__6738__auto__,current_analysis,reloaded,analysis,map__45880,map__45880__$1,outputs,map__45878,map__45878__$1,posh_tree,graph,cache){
return (function (acc,k){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([acc,(posh.core.cache_changes.cljs$core$IFn$_invoke$arity$5 ? posh.core.cache_changes.cljs$core$IFn$_invoke$arity$5(posh_tree,db_id,pass_tx,acc,k) : posh.core.cache_changes.call(null,posh_tree,db_id,pass_tx,acc,k))], 0));
});})(pass_tx,temp__6738__auto__,current_analysis,reloaded,analysis,map__45880,map__45880__$1,outputs,map__45878,map__45878__$1,posh_tree,graph,cache))
,new_cache,outputs);
} else {
return null;
}
})();
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([children_cache,(cljs.core.truth_(reloaded)?cljs.core.PersistentArrayMap.createAsIfByAssoc([storage_key,reloaded]):null),cljs.core.PersistentArrayMap.EMPTY], 0));
}
});
posh.core.merge_txs = (function posh$core$merge_txs(oldtx,newtx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(newtx,oldtx);
});
posh.core.add_tx = (function posh$core$add_tx(p__45882,poshdb,tx){
var map__45885 = p__45882;
var map__45885__$1 = ((((!((map__45885 == null)))?((((map__45885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45885):map__45885);
var posh_tree = map__45885__$1;
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45885__$1,cljs.core.cst$kw$txs);
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45885__$1,cljs.core.cst$kw$conns);
var conn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns,posh.lib.db.poshdb__GT_db_id(poshdb));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,cljs.core.cst$kw$txs,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(txs,conn,posh.core.merge_txs(cljs.core.get.cljs$core$IFn$_invoke$arity$2(txs,conn),tx)));
});
posh.core.group_db_ids_by_conn = (function posh$core$group_db_ids_by_conn(conns){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.group_by(cljs.core.second,conns));
});
posh.core.after_transact = (function posh$core$after_transact(p__45887,conns_results){
var map__45912 = p__45887;
var map__45912__$1 = ((((!((map__45912 == null)))?((((map__45912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45912):map__45912);
var posh_tree = map__45912__$1;
var conns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45912__$1,cljs.core.cst$kw$conns);
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45912__$1,cljs.core.cst$kw$dcfg);
var dbs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45912__$1,cljs.core.cst$kw$dbs);
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45912__$1,cljs.core.cst$kw$filters);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45912__$1,cljs.core.cst$kw$cache);
var new_dbs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,(function (){var iter__8463__auto__ = ((function (map__45912,map__45912__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function posh$core$after_transact_$_iter__45914(s__45915){
return (new cljs.core.LazySeq(null,((function (map__45912,map__45912__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (){
var s__45915__$1 = s__45915;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__45915__$1);
if(temp__6738__auto__){
var s__45915__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45915__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__45915__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__45917 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__45916 = (0);
while(true){
if((i__45916 < size__8462__auto__)){
var vec__45926 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__45916);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45926,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45926,(1),null);
cljs.core.chunk_append(b__45917,(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4(dcfg,conn,cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,db_id),cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbs,db_id)])));

var G__45936 = (i__45916 + (1));
i__45916 = G__45936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45917),posh$core$after_transact_$_iter__45914(cljs.core.chunk_rest(s__45915__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45917),null);
}
} else {
var vec__45929 = cljs.core.first(s__45915__$2);
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45929,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45929,(1),null);
return cljs.core.cons((cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn))?cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4(dcfg,conn,cljs.core.get.cljs$core$IFn$_invoke$arity$2(filters,db_id),cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)))]):cljs.core.PersistentArrayMap.createAsIfByAssoc([db_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbs,db_id)])),posh$core$after_transact_$_iter__45914(cljs.core.rest(s__45915__$2)));
}
} else {
return null;
}
break;
}
});})(map__45912,map__45912__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,null,null));
});})(map__45912,map__45912__$1,posh_tree,conns,dcfg,dbs,filters,cache))
;
return iter__8463__auto__(conns);
})());
var new_posh_tree = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,cljs.core.cst$kw$dbs,new_dbs);
var changed_cache = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (new_dbs,new_posh_tree,map__45912,map__45912__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (changed,p__45932){
var vec__45933 = p__45932;
var db_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45933,(0),null);
var conn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45933,(1),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([changed,posh.core.cache_changes(new_posh_tree,db_id,cljs.core.cst$kw$tx_DASH_data.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(conns_results,conn)),changed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$db,db_id], null))], 0));
});})(new_dbs,new_posh_tree,map__45912,map__45912__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,cljs.core.PersistentArrayMap.EMPTY,conns);
var really_changed = cljs.core.reduce_kv(((function (new_dbs,new_posh_tree,changed_cache,map__45912,map__45912__$1,posh_tree,conns,dcfg,dbs,filters,cache){
return (function (m,k,v){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,k))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
});})(new_dbs,new_posh_tree,changed_cache,map__45912,map__45912__$1,posh_tree,conns,dcfg,dbs,filters,cache))
,cljs.core.PersistentArrayMap.EMPTY,changed_cache);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new_posh_tree,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cache,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cache,really_changed], 0)),cljs.core.cst$kw$changed,really_changed], null)], 0));
});
posh.core.process_tx_BANG_ = (function posh$core$process_tx_BANG_(p__45937){
var map__45940 = p__45937;
var map__45940__$1 = ((((!((map__45940 == null)))?((((map__45940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45940):map__45940);
var posh_tree = map__45940__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45940__$1,cljs.core.cst$kw$dcfg);
var txs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45940__$1,cljs.core.cst$kw$txs);
var conns_results = cljs.core.reduce_kv(((function (map__45940,map__45940__$1,posh_tree,dcfg,txs){
return (function (m,conn,tx){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,conn,cljs.core.cst$kw$transact_BANG_.cljs$core$IFn$_invoke$arity$1(dcfg).call(null,conn,tx));
});})(map__45940,map__45940__$1,posh_tree,dcfg,txs))
,cljs.core.PersistentArrayMap.EMPTY,txs);
return posh.core.after_transact(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(posh_tree,cljs.core.cst$kw$txs,cljs.core.PersistentArrayMap.EMPTY),conns_results);
});
