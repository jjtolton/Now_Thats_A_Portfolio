// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('posh.lib.db');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('posh.lib.datom_matcher');
posh.lib.db.get_parent_db = (function posh$lib$db$get_parent_db(poshdb){
var G__45720 = (((cljs.core.first(poshdb) instanceof cljs.core.Keyword))?cljs.core.first(poshdb).fqn:null);
switch (G__45720) {
case "db":
return null;

break;
case "filter-tx":
return cljs.core.second(poshdb);

break;
case "filter-pull":
return cljs.core.second(poshdb);

break;
case "filter-q":
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(poshdb,(2)));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(poshdb))].join('')));

}
});
posh.lib.db.get_db_path = (function posh$lib$db$get_db_path(poshdb){
var path = cljs.core.PersistentVector.EMPTY;
var pdb = poshdb;
while(true){
if(cljs.core.truth_(pdb)){
var G__45722 = cljs.core.cons(pdb,path);
var G__45723 = posh.lib.db.get_parent_db(pdb);
path = G__45722;
pdb = G__45723;
continue;
} else {
return path;
}
break;
}
});
posh.lib.db.db_id__GT_conn = (function posh$lib$db$db_id__GT_conn(posh_tree,db_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$conns.cljs$core$IFn$_invoke$arity$1(posh_tree),db_id);
});
posh.lib.db.db_id__GT_schema = (function posh$lib$db$db_id__GT_schema(posh_tree,db_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$schemas.cljs$core$IFn$_invoke$arity$1(posh_tree),db_id);
});
posh.lib.db.db_id__GT_db = (function posh$lib$db$db_id__GT_db(posh_tree,db_id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dbs.cljs$core$IFn$_invoke$arity$1(posh_tree),db_id);
});
posh.lib.db.poshdb__GT_db_id = (function posh$lib$db$poshdb__GT_db_id(poshdb){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(poshdb),cljs.core.cst$kw$db)){
return cljs.core.second(poshdb);
} else {
var G__45724 = posh.lib.db.get_parent_db(poshdb);
poshdb = G__45724;
continue;
}
break;
}
});
posh.lib.db.db_id__GT_attrs = (function posh$lib$db$db_id__GT_attrs(posh_tree,db_id){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$conn,posh.lib.db.db_id__GT_conn(posh_tree,db_id),cljs.core.cst$kw$schema,posh.lib.db.db_id__GT_schema(posh_tree,db_id),cljs.core.cst$kw$db,posh.lib.db.db_id__GT_db(posh_tree,db_id),cljs.core.cst$kw$db_DASH_id,db_id], null);
});
posh.lib.db.poshdb__GT_attrs = (function posh$lib$db$poshdb__GT_attrs(posh_tree,poshdb){
return posh.lib.db.db_id__GT_attrs(posh_tree,posh.lib.db.poshdb__GT_db_id(poshdb));
});
posh.lib.db.make_filter_pred = (function posh$lib$db$make_filter_pred(tx_patterns){
return (function (_,datom){
return posh.lib.datom_matcher.datom_match_QMARK_(tx_patterns,datom);
});
});
posh.lib.db.generate_initial_db = (function posh$lib$db$generate_initial_db(var_args){
var args45725 = [];
var len__8822__auto___45730 = arguments.length;
var i__8823__auto___45731 = (0);
while(true){
if((i__8823__auto___45731 < len__8822__auto___45730)){
args45725.push((arguments[i__8823__auto___45731]));

var G__45732 = (i__8823__auto___45731 + (1));
i__8823__auto___45731 = G__45732;
continue;
} else {
}
break;
}

var G__45727 = args45725.length;
switch (G__45727) {
case 3:
return posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args45725.length)].join('')));

}
});

posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$3 = (function (dcfg,conn,filters){
return posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4(dcfg,conn,filters,null);
});

posh.lib.db.generate_initial_db.cljs$core$IFn$_invoke$arity$4 = (function (dcfg,conn,filters,db){
var map__45728 = filters;
var map__45728__$1 = ((((!((map__45728 == null)))?((((map__45728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45728):map__45728);
var filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45728__$1,cljs.core.cst$kw$filter);
var as_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45728__$1,cljs.core.cst$kw$as_DASH_of);
var since = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45728__$1,cljs.core.cst$kw$since);
var with$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45728__$1,cljs.core.cst$kw$with);
var db__$1 = (function (){var or__7601__auto__ = db;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(dcfg).call(null,conn);
}
})();
var db__$2 = (cljs.core.truth_(since)?cljs.core.cst$kw$since.cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db__$1,since):db__$1);
var db__$3 = (cljs.core.truth_(as_of)?cljs.core.cst$kw$as_DASH_of.cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db__$2,as_of):db__$2);
var db__$4 = (cljs.core.truth_(with$)?cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db__$3,with$)):db__$3);
var db__$5 = (cljs.core.truth_(filter)?cljs.core.cst$kw$filter.cljs$core$IFn$_invoke$arity$1(dcfg).call(null,db__$4,(((filter instanceof cljs.core.Symbol))?null:filter)):db__$4);
return db__$5;
});

posh.lib.db.generate_initial_db.cljs$lang$maxFixedArity = 4;

posh.lib.db.poshdb__GT_db = (function posh$lib$db$poshdb__GT_db(p__45734,poshdb){
var map__45739 = p__45734;
var map__45739__$1 = ((((!((map__45739 == null)))?((((map__45739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45739.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45739):map__45739);
var posh_tree = map__45739__$1;
var dcfg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45739__$1,cljs.core.cst$kw$dcfg);
var cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45739__$1,cljs.core.cst$kw$cache);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(poshdb),cljs.core.cst$kw$db)){
return posh.lib.db.db_id__GT_db(posh_tree,cljs.core.second(poshdb));
} else {
return cljs.core.cst$kw$filter.cljs$core$IFn$_invoke$arity$1(dcfg).call(null,(function (){var G__45741 = posh_tree;
var G__45742 = posh.lib.db.get_parent_db(poshdb);
return (posh.lib.db.poshdb__GT_db.cljs$core$IFn$_invoke$arity$2 ? posh.lib.db.poshdb__GT_db.cljs$core$IFn$_invoke$arity$2(G__45741,G__45742) : posh.lib.db.poshdb__GT_db.call(null,G__45741,G__45742));
})(),posh.lib.db.make_filter_pred(cljs.core.cst$kw$pass_DASH_patterns.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,poshdb))));
}
});
posh.lib.db.poshdb__GT_analyze_db = (function posh$lib$db$poshdb__GT_analyze_db(posh_tree,poshdb){
var db_id = posh.lib.db.poshdb__GT_db_id(poshdb);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$db,posh.lib.db.poshdb__GT_db(posh_tree,poshdb),cljs.core.cst$kw$conn,posh.lib.db.db_id__GT_conn(posh_tree,db_id),cljs.core.cst$kw$schema,posh.lib.db.db_id__GT_schema(posh_tree,db_id),cljs.core.cst$kw$db_DASH_id,db_id], null);
});
