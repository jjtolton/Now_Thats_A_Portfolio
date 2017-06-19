// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('posh.lib.update');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('datascript.core');
goog.require('posh.lib.util');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('posh.lib.q_analyze');
goog.require('posh.lib.db');
posh.lib.update.update_pull = (function posh$lib$update$update_pull(p__45752,storage_key){
var map__45758 = p__45752;
var map__45758__$1 = ((((!((map__45758 == null)))?((((map__45758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45758.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45758):map__45758);
var posh_tree = map__45758__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45758__$1,cljs.core.cst$kw$dcfg);
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45758__$1,cljs.core.cst$kw$retrieve);
var vec__45760 = storage_key;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45760,(0),null);
var poshdb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45760,(1),null);
var pull_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45760,(2),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45760,(3),null);
var analysis = posh.lib.pull_analyze.pull_analyze(dcfg,cljs.core.cons(cljs.core.cst$kw$patterns,retrieve),posh.lib.db.poshdb__GT_analyze_db(posh_tree,poshdb),pull_pattern,eid);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([analysis,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reload_DASH_patterns,cljs.core.cst$kw$patterns.cljs$core$IFn$_invoke$arity$1(analysis),cljs.core.cst$kw$reload_DASH_fn,posh.lib.update.update_pull], null)], 0)),cljs.core.cst$kw$patterns);
});
posh.lib.update.update_filter_pull = (function posh$lib$update$update_filter_pull(p__45763,storage_key){
var map__45769 = p__45763;
var map__45769__$1 = ((((!((map__45769 == null)))?((((map__45769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45769):map__45769);
var posh_tree = map__45769__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45769__$1,cljs.core.cst$kw$dcfg);
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45769__$1,cljs.core.cst$kw$retrieve);
var vec__45771 = storage_key;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45771,(0),null);
var poshdb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45771,(1),null);
var pull_pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45771,(2),null);
var eid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45771,(3),null);
var analysis = posh.lib.pull_analyze.pull_analyze(dcfg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$patterns,cljs.core.cst$kw$ref_DASH_patterns], null),retrieve),posh.lib.db.poshdb__GT_analyze_db(posh_tree,poshdb),pull_pattern,eid);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([analysis,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pass_DASH_patterns,cljs.core.first(cljs.core.vals(cljs.core.cst$kw$patterns.cljs$core$IFn$_invoke$arity$1(analysis))),cljs.core.cst$kw$reload_DASH_patterns,cljs.core.cst$kw$ref_DASH_patterns.cljs$core$IFn$_invoke$arity$1(analysis),cljs.core.cst$kw$reload_DASH_fn,posh.lib.update.update_filter_pull], null)], 0)),cljs.core.cst$kw$patterns,cljs.core.array_seq([cljs.core.cst$kw$ref_DASH_patterns], 0));
});
posh.lib.update.update_q_with_dbvarmap = (function posh$lib$update$update_q_with_dbvarmap(p__45774,storage_key){
var map__45788 = p__45774;
var map__45788__$1 = ((((!((map__45788 == null)))?((((map__45788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45788):map__45788);
var posh_tree = map__45788__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45788__$1,cljs.core.cst$kw$dcfg);
var retrieve = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45788__$1,cljs.core.cst$kw$retrieve);

var vec__45790 = storage_key;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45790,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45790,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45790,(2),null);
var retrieve__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$results,cljs.core.cst$kw$simple_DASH_patterns], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$patterns,null], null), null),retrieve));
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(qm),args);
var poshdbmap = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__45790,_,query,args,retrieve__$1,qm,dbvarmap,map__45788,map__45788__$1,posh_tree,dcfg,retrieve){
return (function (p__45793){
var vec__45794 = p__45793;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45794,(0),null);
var poshdb = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45794,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,posh.lib.db.poshdb__GT_analyze_db(posh_tree,poshdb)]);
});})(vec__45790,_,query,args,retrieve__$1,qm,dbvarmap,map__45788,map__45788__$1,posh_tree,dcfg,retrieve))
,dbvarmap));
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__45790,_,query,args,retrieve__$1,qm,dbvarmap,poshdbmap,map__45788,map__45788__$1,posh_tree,dcfg,retrieve){
return (function (p__45797){
var vec__45798 = p__45797;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45798,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45798,(1),null);
var or__7601__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(poshdbmap,sym);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return arg;
}
});})(vec__45790,_,query,args,retrieve__$1,qm,dbvarmap,poshdbmap,map__45788,map__45788__$1,posh_tree,dcfg,retrieve))
,cljs.core.zipmap(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(qm),args));
var analysis = posh.lib.q_analyze.q_analyze(dcfg,retrieve__$1,query,fixed_args);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dbvarmap,dbvarmap,cljs.core.cst$kw$analysis,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([analysis,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reload_DASH_patterns,cljs.core.cst$kw$patterns.cljs$core$IFn$_invoke$arity$1(analysis),cljs.core.cst$kw$reload_DASH_fn,posh.lib.update.update_q], null)], 0)),cljs.core.cst$kw$patterns)], null);
});
posh.lib.update.update_q = (function posh$lib$update$update_q(posh_tree,storage_key){
return cljs.core.cst$kw$analysis.cljs$core$IFn$_invoke$arity$1(posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key));
});
posh.lib.update.reduce_entities = (function posh$lib$update$reduce_entities(r){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc__$1,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$1,x);
}),acc,xs);
}),cljs.core.PersistentHashSet.EMPTY,r);
});
posh.lib.update.filter_q_transform_analysis = (function posh$lib$update$filter_q_transform_analysis(analysis){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([analysis,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pass_DASH_patterns,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.update.reduce_entities(cljs.core.cst$kw$results.cljs$core$IFn$_invoke$arity$1(analysis))], null)], null),cljs.core.cst$kw$reload_DASH_patterns,cljs.core.cst$kw$patterns.cljs$core$IFn$_invoke$arity$1(analysis),cljs.core.cst$kw$reload_DASH_fn,posh.lib.update.update_filter_q], null)], 0)),cljs.core.cst$kw$results,cljs.core.array_seq([cljs.core.cst$kw$patterns], 0));
});
posh.lib.update.update_filter_q = (function posh$lib$update$update_filter_q(posh_tree,storage_key){
return posh.lib.update.filter_q_transform_analysis(cljs.core.cst$kw$analysis.cljs$core$IFn$_invoke$arity$1(posh.lib.update.update_q_with_dbvarmap(posh_tree,storage_key)));
});
posh.lib.update.update_posh_item = (function posh$lib$update$update_posh_item(posh_tree,storage_key){
var G__45802 = (((cljs.core.first(storage_key) instanceof cljs.core.Keyword))?cljs.core.first(storage_key).fqn:null);
switch (G__45802) {
case "pull":
return posh.lib.update.update_pull(posh_tree,storage_key);

break;
case "q":
return cljs.core.cst$kw$analysis.cljs$core$IFn$_invoke$arity$1(posh.lib.update.update_q(posh_tree,storage_key));

break;
case "filter-pull":
return posh.lib.update.update_filter_pull(posh_tree,storage_key);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(storage_key))].join('')));

}
});
