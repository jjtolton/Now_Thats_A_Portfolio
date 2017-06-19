// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('posh.lib.util');
goog.require('datascript.core');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__7601__auto__ = cljs.core.empty_QMARK_(ls);
if(or__7601__auto__){
return or__7601__auto__;
} else {
var G__44881 = cljs.core.first(ls);
return (stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? stop_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__44881) : stop_at_QMARK_.call(null,G__44881));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons(cljs.core.first(ls),(function (){var G__44882 = stop_at_QMARK_;
var G__44883 = cljs.core.rest(ls);
return (posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.take_until.cljs$core$IFn$_invoke$arity$2(G__44882,G__44883) : posh.lib.q_analyze.take_until.call(null,G__44882,G__44883));
})());
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__7601__auto__ = cljs.core.empty_QMARK_(ls);
if(or__7601__auto__){
return or__7601__auto__;
} else {
var G__44887 = cljs.core.first(ls);
return (rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rest_at_QMARK_.cljs$core$IFn$_invoke$arity$1(G__44887) : rest_at_QMARK_.call(null,G__44887));
}
})())){
return ls;
} else {
var G__44888 = rest_at_QMARK_;
var G__44889 = cljs.core.rest(ls);
rest_at_QMARK_ = G__44888;
ls = G__44889;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_(ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ls),posh.lib.q_analyze.take_until(split_at_QMARK_,posh.lib.q_analyze.take_until(split_at_QMARK_,cljs.core.rest(ls)))]),(function (){var G__44892 = split_at_QMARK_;
var G__44893 = posh.lib.q_analyze.rest_at(split_at_QMARK_,cljs.core.rest(ls));
return (posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.split_list_at.cljs$core$IFn$_invoke$arity$2(G__44892,G__44893) : posh.lib.q_analyze.split_list_at.call(null,G__44892,G__44893));
})()], 0));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if(!(cljs.core.map_QMARK_(query))){
return posh.lib.q_analyze.split_list_at(cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),"$"));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),"?"));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_(query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(query))){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var G__44898 = cljs.core.first(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__44898) : posh.lib.q_analyze.get_all_vars.call(null,G__44898));
})(),(function (){var G__44899 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__44899) : posh.lib.q_analyze.get_all_vars.call(null,G__44899));
})());
} else {
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(query)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__44900 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__44900) : posh.lib.q_analyze.get_all_vars.call(null,G__44900));
})(),cljs.core.first(query));
} else {
var G__44901 = cljs.core.rest(query);
return (posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_all_vars.cljs$core$IFn$_invoke$arity$1(G__44901) : posh.lib.q_analyze.get_all_vars.call(null,G__44901));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((3284832)) : cljs.core.atom.call(null,(3284832)));
return ((function (qvar_count){
return (function (){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("?var"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(qvar_count,cljs.core.inc))].join(''));
});
;})(qvar_count))
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return (cljs.core.vector_QMARK_(v)) && (cljs.core.not(cljs.core.some(cljs.core.coll_QMARK_,v)));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,cljs.core.cst$sym$_);
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$eav,neweav,cljs.core.cst$kw$vars,vars], null);
} else {
if(cljs.core.truth_((function (){var and__7589__auto__ = cljs.core.first(eav);
if(cljs.core.truth_(and__7589__auto__)){
return cljs.core.not(posh.lib.q_analyze.wildcard_QMARK_(cljs.core.first(eav)));
} else {
return and__7589__auto__;
}
})())){
var G__44910 = cljs.core.rest(eav);
var G__44911 = (n - (1));
var G__44912 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,cljs.core.first(eav));
var G__44913 = vars;
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__44910,G__44911,G__44912,G__44913) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__44910,G__44911,G__44912,G__44913));
} else {
var var$ = (posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0 ? posh.lib.q_analyze.qvar_gen.cljs$core$IFn$_invoke$arity$0() : posh.lib.q_analyze.qvar_gen.call(null));
var G__44914 = cljs.core.rest(eav);
var G__44915 = (n - (1));
var G__44916 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(neweav,var$);
var G__44917 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vars,var$);
return (posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4 ? posh.lib.q_analyze.normalize_eav_helper.cljs$core$IFn$_invoke$arity$4(G__44914,G__44915,G__44916,G__44917) : posh.lib.q_analyze.normalize_eav_helper.call(null,G__44914,G__44915,G__44916,G__44917));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = (cljs.core.truth_(posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(eav)))?eav:cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("$"),eav));
return cljs.core.vec(cljs.core.cons(cljs.core.first(dbeav),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$eav.cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper(cljs.core.rest(dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_(where)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(where)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$or_DASH_join,cljs.core.cst$sym$not_DASH_join], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(where),cljs.core.second(where)], null),(function (){var G__44920 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__44920) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__44920));
})());
} else {
return cljs.core.cons(cljs.core.first(where),(function (){var G__44921 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.normalize_all_eavs.cljs$core$IFn$_invoke$arity$1(G__44921) : posh.lib.q_analyze.normalize_all_eavs.call(null,G__44921));
})());
}
} else {
if(cljs.core.truth_(posh.lib.q_analyze.eav_QMARK_(where))){
return posh.lib.q_analyze.normalize_eav(where);
} else {
if((cljs.core.vector_QMARK_(where)) && (cljs.core.list_QMARK_(cljs.core.first(where)))){
return where;
} else {
if(cljs.core.coll_QMARK_(where)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_(where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first(where);
if(cljs.core.seq_QMARK_(item)){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first(item)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$or_DASH_join,cljs.core.cst$sym$not_DASH_join], null)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__44943 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__44943) : posh.lib.q_analyze.get_eavs.call(null,G__44943));
})(),(function (){var G__44944 = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__44944) : posh.lib.q_analyze.get_eavs.call(null,G__44944));
})());
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var G__44945 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__44945) : posh.lib.q_analyze.get_eavs.call(null,G__44945));
})(),(function (){var G__44946 = cljs.core.vec(cljs.core.rest(item));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__44946) : posh.lib.q_analyze.get_eavs.call(null,G__44946));
})());
}
} else {
if(cljs.core.truth_(posh.lib.q_analyze.eav_QMARK_(item))){
return cljs.core.cons(item,(function (){var G__44947 = cljs.core.rest(where);
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__44947) : posh.lib.q_analyze.get_eavs.call(null,G__44947));
})());
} else {
if((cljs.core.vector_QMARK_(item)) && (cljs.core.seq_QMARK_(cljs.core.first(item)))){
var ocr_44948 = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec(cljs.core.first(item))], null),cljs.core.rest(item)));
try{if((cljs.core.vector_QMARK_(ocr_44948)) && ((cljs.core.count(ocr_44948) === 2))){
try{var ocr_44948_0__44951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44948,(0));
if((cljs.core.vector_QMARK_(ocr_44948_0__44951)) && ((cljs.core.count(ocr_44948_0__44951) === 5))){
try{var ocr_44948_0__44951_0__44953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44948_0__44951,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_44948_0__44951_0__44953,cljs.core.cst$sym$get_DASH_else)){
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44948_0__44951,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44948_0__44951,(2));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44948_0__44951,(3));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_44948,(1));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),(function (){var G__44962 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__44962) : posh.lib.q_analyze.get_eavs.call(null,G__44962));
})());
} else {
throw cljs.core.match.backtrack;

}
}catch (e44961){if((e44961 instanceof Error)){
var e__43972__auto__ = e44961;
if((e__43972__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto__;
}
} else {
throw e44961;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44960){if((e44960 instanceof Error)){
var e__43972__auto__ = e44960;
if((e__43972__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto__;
}
} else {
throw e44960;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e44958){if((e44958 instanceof Error)){
var e__43972__auto__ = e44958;
if((e__43972__auto__ === cljs.core.match.backtrack)){
var G__44959 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__44959) : posh.lib.q_analyze.get_eavs.call(null,G__44959));
} else {
throw e__43972__auto__;
}
} else {
throw e44958;

}
}} else {
var G__44963 = cljs.core.vec(cljs.core.rest(where));
return (posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.get_eavs.cljs$core$IFn$_invoke$arity$1(G__44963) : posh.lib.q_analyze.get_eavs.call(null,G__44963));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (xs,p__44968){
var vec__44969 = p__44968;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44969,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44969,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.array_seq([v], 0));
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (r){
var vs = cljs.core.zipmap(vars,r);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs){
return (function (eav){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs){
return (function (p1__44972_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_(p1__44972_SHARP_))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vs,p1__44972_SHARP_);
} else {
return p1__44972_SHARP_;
}
});})(vs))
,eav));
});})(vs))
,eavs);
}),cljs.core.array_seq([results], 0)));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_(xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_(cljs.core.first(xs))){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.array_seq([(function (){var G__44976 = cljs.core.first(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__44976) : posh.lib.q_analyze.count_qvars.call(null,G__44976));
})(),(function (){var G__44977 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__44977) : posh.lib.q_analyze.count_qvars.call(null,G__44977));
})()], 0));
} else {
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core._PLUS_,cljs.core.array_seq([(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_(cljs.core.first(xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(xs),(1)]):null),(function (){var G__44978 = cljs.core.rest(xs);
return (posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1 ? posh.lib.q_analyze.count_qvars.cljs$core$IFn$_invoke$arity$1(G__44978) : posh.lib.q_analyze.count_qvars.call(null,G__44978));
})()], 0));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__8463__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__44985(s__44986){
return (new cljs.core.LazySeq(null,(function (){
var s__44986__$1 = s__44986;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__44986__$1);
if(temp__6738__auto__){
var s__44986__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44986__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__44986__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__44988 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__44987 = (0);
while(true){
if((i__44987 < size__8462__auto__)){
var r = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__44987);
cljs.core.chunk_append(b__44988,(function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})());

var G__44991 = (i__44987 + (1));
i__44987 = G__44991;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44988),posh$lib$q_analyze$fill_qvar_set_$_iter__44985(cljs.core.chunk_rest(s__44986__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44988),null);
}
} else {
var r = cljs.core.first(s__44986__$2);
return cljs.core.cons((function (){var vars = cljs.core.zipmap(where,r);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__44985(cljs.core.rest(s__44986__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8463__auto__(results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_(seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons((function (){var G__44997 = cljs.core.first(seq1);
var G__44998 = cljs.core.first(seq2);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__44997,G__44998) : f.call(null,G__44997,G__44998));
})(),(function (){var G__44999 = f;
var G__45000 = cljs.core.rest(seq1);
var G__45001 = cljs.core.rest(seq2);
return (posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.seq_merge_with.cljs$core$IFn$_invoke$arity$3(G__44999,G__45000,G__45001) : posh.lib.q_analyze.seq_merge_with.call(null,G__44999,G__45000,G__45001));
})());
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with(cljs.core.conj,stacked,eav);
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.first(vs)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__45004){
var vec__45094 = p__45004;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45094,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45094,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45094,(2),null);
var eav = vec__45094;
var vec__45097 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45097,(0),null);
var qa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45097,(1),null);
var qv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45097,(2),null);
var iter__8463__auto__ = ((function (vec__45097,qe,qa,qv,vec__45094,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__45100(s__45101){
return (new cljs.core.LazySeq(null,((function (vec__45097,qe,qa,qv,vec__45094,e,a,v,eav){
return (function (){
var s__45101__$1 = s__45101;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__45101__$1);
if(temp__6738__auto__){
var xs__7294__auto__ = temp__6738__auto__;
var ee = cljs.core.first(xs__7294__auto__);
var iterys__8459__auto__ = ((function (s__45101__$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__45100_$_iter__45102(s__45103){
return (new cljs.core.LazySeq(null,((function (s__45101__$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav){
return (function (){
var s__45103__$1 = s__45103;
while(true){
var temp__6738__auto____$1 = cljs.core.seq(s__45103__$1);
if(temp__6738__auto____$1){
var xs__7294__auto____$1 = temp__6738__auto____$1;
var aa = cljs.core.first(xs__7294__auto____$1);
var iterys__8459__auto__ = ((function (s__45103__$1,s__45101__$1,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__45100_$_iter__45102_$_iter__45104(s__45105){
return (new cljs.core.LazySeq(null,((function (s__45103__$1,s__45101__$1,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav){
return (function (){
var s__45105__$1 = s__45105;
while(true){
var temp__6738__auto____$2 = cljs.core.seq(s__45105__$1);
if(temp__6738__auto____$2){
var s__45105__$2 = temp__6738__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__45105__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__45105__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__45107 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__45106 = (0);
while(true){
if((i__45106 < size__8462__auto__)){
var vv = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__45106);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__45106,s__45105__$1,s__45103__$1,s__45101__$1,vv,c__8461__auto__,size__8462__auto__,b__45107,s__45105__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav){
return (function (p1__45002_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,p1__45002_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__45106,s__45105__$1,s__45103__$1,s__45101__$1,vv,c__8461__auto__,size__8462__auto__,b__45107,s__45105__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__45106,s__45105__$1,s__45103__$1,s__45101__$1,wildcard_count,vv,c__8461__auto__,size__8462__auto__,b__45107,s__45105__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav){
return (function (p__45175){
var vec__45176 = p__45175;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45176,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45176,(1),null);
if(cljs.core.truth_((function (){var and__7589__auto__ = var_QMARK_;
if(cljs.core.truth_(and__7589__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,cljs.core.cst$sym$_);
} else {
return and__7589__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__45106,s__45105__$1,s__45103__$1,s__45101__$1,wildcard_count,vv,c__8461__auto__,size__8462__auto__,b__45107,s__45105__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__45106,s__45105__$1,s__45103__$1,s__45101__$1,wildcard_count,exposed_qvars,vv,c__8461__auto__,size__8462__auto__,b__45107,s__45105__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav){
return (function (p1__45003_SHARP_){
if(cljs.core.truth_(p1__45003_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__45106,s__45105__$1,s__45103__$1,s__45101__$1,wildcard_count,exposed_qvars,vv,c__8461__auto__,size__8462__auto__,b__45107,s__45105__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return ((wildcard_count >= (1))) && ((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars))) || ((qvar_count <= (1)))) && ((wildcard_count <= qvar_count));
})()){
cljs.core.chunk_append(b__45107,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__45183 = (i__45106 + (1));
i__45106 = G__45183;
continue;
} else {
var G__45184 = (i__45106 + (1));
i__45106 = G__45184;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45107),posh$lib$q_analyze$pattern_from_eav__old_$_iter__45100_$_iter__45102_$_iter__45104(cljs.core.chunk_rest(s__45105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45107),null);
}
} else {
var vv = cljs.core.first(s__45105__$2);
if((function (){var wildcard_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__45105__$1,s__45103__$1,s__45101__$1,vv,s__45105__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav){
return (function (p1__45002_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,p1__45002_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__45105__$1,s__45103__$1,s__45101__$1,vv,s__45105__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__45105__$1,s__45103__$1,s__45101__$1,wildcard_count,vv,s__45105__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav){
return (function (p__45179){
var vec__45180 = p__45179;
var var_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45180,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45180,(1),null);
if(cljs.core.truth_((function (){var and__7589__auto__ = var_QMARK_;
if(cljs.core.truth_(and__7589__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,cljs.core.cst$sym$_);
} else {
return and__7589__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__45105__$1,s__45103__$1,s__45101__$1,wildcard_count,vv,s__45105__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (s__45105__$1,s__45103__$1,s__45101__$1,wildcard_count,exposed_qvars,vv,s__45105__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav){
return (function (p1__45003_SHARP_){
if(cljs.core.truth_(p1__45003_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__45105__$1,s__45103__$1,s__45101__$1,wildcard_count,exposed_qvars,vv,s__45105__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return ((wildcard_count >= (1))) && ((((qvar_count > (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),exposed_qvars))) || ((qvar_count <= (1)))) && ((wildcard_count <= qvar_count));
})()){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__45100_$_iter__45102_$_iter__45104(cljs.core.rest(s__45105__$2)));
} else {
var G__45185 = cljs.core.rest(s__45105__$2);
s__45105__$1 = G__45185;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__45103__$1,s__45101__$1,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav))
,null,null));
});})(s__45103__$1,s__45101__$1,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav))
;
var fs__8460__auto__ = cljs.core.seq(iterys__8459__auto__((cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__8460__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8460__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__45100_$_iter__45102(cljs.core.rest(s__45103__$1)));
} else {
var G__45186 = cljs.core.rest(s__45103__$1);
s__45103__$1 = G__45186;
continue;
}
} else {
return null;
}
break;
}
});})(s__45101__$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav))
,null,null));
});})(s__45101__$1,ee,xs__7294__auto__,temp__6738__auto__,vec__45097,qe,qa,qv,vec__45094,e,a,v,eav))
;
var fs__8460__auto__ = cljs.core.seq(iterys__8459__auto__((cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__8460__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8460__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__45100(cljs.core.rest(s__45101__$1)));
} else {
var G__45187 = cljs.core.rest(s__45101__$1);
s__45101__$1 = G__45187;
continue;
}
} else {
return null;
}
break;
}
});})(vec__45097,qe,qa,qv,vec__45094,e,a,v,eav))
,null,null));
});})(vec__45097,qe,qa,qv,vec__45094,e,a,v,eav))
;
return iter__8463__auto__((cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__7601__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.cst$sym$_;
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_45297 = cljs.core.vec(eav);
var ocr_45298 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if((cljs.core.vector_QMARK_(ocr_45297)) && ((cljs.core.count(ocr_45297) === 3))){
try{var ocr_45297_0__45326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45297_0__45326,cljs.core.cst$sym$_)){
try{var ocr_45297_1__45327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45297_1__45327,cljs.core.cst$sym$_)){
try{var ocr_45297_2__45328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45297_2__45328,cljs.core.cst$sym$_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45402){if((e45402 instanceof Error)){
var e__43972__auto__ = e45402;
if((e__43972__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_(ocr_45298)) && ((cljs.core.count(ocr_45298) === 3))){
try{var ocr_45298_2__45331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(2));
if((ocr_45298_2__45331 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45404){if((e45404 instanceof Error)){
var e__43972__auto____$1 = e45404;
if((e__43972__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_45298_2__45331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(2));
if((ocr_45298_2__45331 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45405){if((e45405 instanceof Error)){
var e__43972__auto____$2 = e45405;
if((e__43972__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$2;
}
} else {
throw e45405;

}
}} else {
throw e__43972__auto____$1;
}
} else {
throw e45404;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45403){if((e45403 instanceof Error)){
var e__43972__auto____$1 = e45403;
if((e__43972__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$1;
}
} else {
throw e45403;

}
}} else {
throw e__43972__auto__;
}
} else {
throw e45402;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45397){if((e45397 instanceof Error)){
var e__43972__auto__ = e45397;
if((e__43972__auto__ === cljs.core.match.backtrack)){
try{var ocr_45297_2__45328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45297_2__45328,cljs.core.cst$sym$_)){
try{if((cljs.core.vector_QMARK_(ocr_45298)) && ((cljs.core.count(ocr_45298) === 3))){
try{var ocr_45298_1__45333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(1));
if((ocr_45298_1__45333 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,a,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45400){if((e45400 instanceof Error)){
var e__43972__auto____$1 = e45400;
if((e__43972__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_45298_1__45333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(1));
if((ocr_45298_1__45333 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,a),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45401){if((e45401 instanceof Error)){
var e__43972__auto____$2 = e45401;
if((e__43972__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$2;
}
} else {
throw e45401;

}
}} else {
throw e__43972__auto____$1;
}
} else {
throw e45400;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45399){if((e45399 instanceof Error)){
var e__43972__auto____$1 = e45399;
if((e__43972__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$1;
}
} else {
throw e45399;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45398){if((e45398 instanceof Error)){
var e__43972__auto____$1 = e45398;
if((e__43972__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$1;
}
} else {
throw e45398;

}
}} else {
throw e__43972__auto__;
}
} else {
throw e45397;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45339){if((e45339 instanceof Error)){
var e__43972__auto__ = e45339;
if((e__43972__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_(ocr_45298)) && ((cljs.core.count(ocr_45298) === 3))){
try{var ocr_45298_0__45335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(0));
if((ocr_45298_0__45335 === false)){
try{var ocr_45297_1__45327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45297_1__45327,cljs.core.cst$sym$_)){
try{var ocr_45297_2__45328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45297_2__45328,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.cst$sym$_,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45396){if((e45396 instanceof Error)){
var e__43972__auto____$1 = e45396;
if((e__43972__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$1;
}
} else {
throw e45396;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45395){if((e45395 instanceof Error)){
var e__43972__auto____$1 = e45395;
if((e__43972__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$1;
}
} else {
throw e45395;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45341){if((e45341 instanceof Error)){
var e__43972__auto____$1 = e45341;
if((e__43972__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_45298_0__45335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(0));
if((ocr_45298_0__45335 === true)){
try{var ocr_45297_2__45328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45297_2__45328,cljs.core.cst$sym$_)){
try{var ocr_45297_1__45327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45297_1__45327,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),cljs.core.cst$sym$_,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45392){if((e45392 instanceof Error)){
var e__43972__auto____$2 = e45392;
if((e__43972__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_45298_1__45336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(1));
if((ocr_45298_1__45336 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),cljs.core.cst$sym$_,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,a),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45393){if((e45393 instanceof Error)){
var e__43972__auto____$3 = e45393;
if((e__43972__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_45298_1__45336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(1));
if((ocr_45298_1__45336 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45394){if((e45394 instanceof Error)){
var e__43972__auto____$4 = e45394;
if((e__43972__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$4;
}
} else {
throw e45394;

}
}} else {
throw e__43972__auto____$3;
}
} else {
throw e45393;

}
}} else {
throw e__43972__auto____$2;
}
} else {
throw e45392;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45391){if((e45391 instanceof Error)){
var e__43972__auto____$2 = e45391;
if((e__43972__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$2;
}
} else {
throw e45391;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45342){if((e45342 instanceof Error)){
var e__43972__auto____$2 = e45342;
if((e__43972__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_45298_0__45335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(0));
if((ocr_45298_0__45335 === false)){
try{var ocr_45298_1__45336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(1));
if((ocr_45298_1__45336 === true)){
try{var ocr_45297_2__45328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45297_2__45328,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45390){if((e45390 instanceof Error)){
var e__43972__auto____$3 = e45390;
if((e__43972__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$3;
}
} else {
throw e45390;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45387){if((e45387 instanceof Error)){
var e__43972__auto____$3 = e45387;
if((e__43972__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_45298_1__45336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(1));
if((ocr_45298_1__45336 === false)){
try{var ocr_45297_2__45328 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45297_2__45328,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45389){if((e45389 instanceof Error)){
var e__43972__auto____$4 = e45389;
if((e__43972__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$4;
}
} else {
throw e45389;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45388){if((e45388 instanceof Error)){
var e__43972__auto____$4 = e45388;
if((e__43972__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$4;
}
} else {
throw e45388;

}
}} else {
throw e__43972__auto____$3;
}
} else {
throw e45387;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45343){if((e45343 instanceof Error)){
var e__43972__auto____$3 = e45343;
if((e__43972__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_45298_2__45337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(2));
if((ocr_45298_2__45337 === true)){
try{var ocr_45298_0__45335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(0));
if((ocr_45298_0__45335 === true)){
try{var ocr_45297_1__45327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45297_1__45327,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),cljs.core.cst$sym$_,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45386){if((e45386 instanceof Error)){
var e__43972__auto____$4 = e45386;
if((e__43972__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$4;
}
} else {
throw e45386;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45385){if((e45385 instanceof Error)){
var e__43972__auto____$4 = e45385;
if((e__43972__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$4;
}
} else {
throw e45385;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45344){if((e45344 instanceof Error)){
var e__43972__auto____$4 = e45344;
if((e__43972__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_45298_2__45337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(2));
if((ocr_45298_2__45337 === false)){
try{var ocr_45298_0__45335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(0));
if((ocr_45298_0__45335 === true)){
try{var ocr_45297_1__45327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45297_1__45327,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),cljs.core.cst$sym$_,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45384){if((e45384 instanceof Error)){
var e__43972__auto____$5 = e45384;
if((e__43972__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$5;
}
} else {
throw e45384;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45383){if((e45383 instanceof Error)){
var e__43972__auto____$5 = e45383;
if((e__43972__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$5;
}
} else {
throw e45383;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45345){if((e45345 instanceof Error)){
var e__43972__auto____$5 = e45345;
if((e__43972__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_45298_2__45337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(2));
if((ocr_45298_2__45337 === true)){
try{var ocr_45298_0__45335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(0));
if((ocr_45298_0__45335 === false)){
try{var ocr_45297_1__45327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45297_1__45327,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45382){if((e45382 instanceof Error)){
var e__43972__auto____$6 = e45382;
if((e__43972__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$6;
}
} else {
throw e45382;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45381){if((e45381 instanceof Error)){
var e__43972__auto____$6 = e45381;
if((e__43972__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$6;
}
} else {
throw e45381;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45346){if((e45346 instanceof Error)){
var e__43972__auto____$6 = e45346;
if((e__43972__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_45298_2__45337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(2));
if((ocr_45298_2__45337 === false)){
try{var ocr_45298_0__45335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(0));
if((ocr_45298_0__45335 === false)){
try{var ocr_45297_1__45327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45297_1__45327,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.cst$sym$_,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45380){if((e45380 instanceof Error)){
var e__43972__auto____$7 = e45380;
if((e__43972__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$7;
}
} else {
throw e45380;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45379){if((e45379 instanceof Error)){
var e__43972__auto____$7 = e45379;
if((e__43972__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$7;
}
} else {
throw e45379;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45347){if((e45347 instanceof Error)){
var e__43972__auto____$7 = e45347;
if((e__43972__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_45298_2__45337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(2));
if((ocr_45298_2__45337 === true)){
try{var ocr_45298_1__45336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(1));
if((ocr_45298_1__45336 === true)){
try{var ocr_45297_0__45326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45297_0__45326,cljs.core.cst$sym$_)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,a),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45378){if((e45378 instanceof Error)){
var e__43972__auto____$8 = e45378;
if((e__43972__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$8;
}
} else {
throw e45378;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45377){if((e45377 instanceof Error)){
var e__43972__auto____$8 = e45377;
if((e__43972__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$8;
}
} else {
throw e45377;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45348){if((e45348 instanceof Error)){
var e__43972__auto____$8 = e45348;
if((e__43972__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_45298_2__45337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(2));
if((ocr_45298_2__45337 === false)){
try{var ocr_45298_1__45336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(1));
if((ocr_45298_1__45336 === true)){
try{var ocr_45297_0__45326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45297_0__45326,cljs.core.cst$sym$_)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45376){if((e45376 instanceof Error)){
var e__43972__auto____$9 = e45376;
if((e__43972__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$9;
}
} else {
throw e45376;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45375){if((e45375 instanceof Error)){
var e__43972__auto____$9 = e45375;
if((e__43972__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$9;
}
} else {
throw e45375;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45349){if((e45349 instanceof Error)){
var e__43972__auto____$9 = e45349;
if((e__43972__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_45298_2__45337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(2));
if((ocr_45298_2__45337 === true)){
try{var ocr_45298_1__45336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(1));
if((ocr_45298_1__45336 === false)){
try{var ocr_45297_0__45326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45297_0__45326,cljs.core.cst$sym$_)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,a,posh.lib.q_analyze.get_(vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45374){if((e45374 instanceof Error)){
var e__43972__auto____$10 = e45374;
if((e__43972__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$10;
}
} else {
throw e45374;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45373){if((e45373 instanceof Error)){
var e__43972__auto____$10 = e45373;
if((e__43972__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$10;
}
} else {
throw e45373;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45350){if((e45350 instanceof Error)){
var e__43972__auto____$10 = e45350;
if((e__43972__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_45298_2__45337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(2));
if((ocr_45298_2__45337 === false)){
try{var ocr_45298_1__45336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(1));
if((ocr_45298_1__45336 === false)){
try{var ocr_45297_0__45326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45297_0__45326,cljs.core.cst$sym$_)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45372){if((e45372 instanceof Error)){
var e__43972__auto____$11 = e45372;
if((e__43972__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$11;
}
} else {
throw e45372;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45371){if((e45371 instanceof Error)){
var e__43972__auto____$11 = e45371;
if((e__43972__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$11;
}
} else {
throw e45371;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45351){if((e45351 instanceof Error)){
var e__43972__auto____$11 = e45351;
if((e__43972__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_45298_2__45337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(2));
if((ocr_45298_2__45337 === true)){
try{var ocr_45298_0__45335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(0));
if((ocr_45298_0__45335 === true)){
try{var ocr_45298_1__45336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(1));
if((ocr_45298_1__45336 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,a),cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),cljs.core.cst$sym$_,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45370){if((e45370 instanceof Error)){
var e__43972__auto____$12 = e45370;
if((e__43972__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$12;
}
} else {
throw e45370;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45365){if((e45365 instanceof Error)){
var e__43972__auto____$12 = e45365;
if((e__43972__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_45298_0__45335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(0));
if((ocr_45298_0__45335 === false)){
try{var ocr_45298_1__45336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(1));
if((ocr_45298_1__45336 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_(vars,a),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45369){if((e45369 instanceof Error)){
var e__43972__auto____$13 = e45369;
if((e__43972__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$13;
}
} else {
throw e45369;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45366){if((e45366 instanceof Error)){
var e__43972__auto____$13 = e45366;
if((e__43972__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_45298_0__45335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(0));
if((ocr_45298_0__45335 === true)){
try{var ocr_45298_1__45336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(1));
if((ocr_45298_1__45336 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,a,posh.lib.q_analyze.get_(vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),a,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45368){if((e45368 instanceof Error)){
var e__43972__auto____$14 = e45368;
if((e__43972__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$14;
}
} else {
throw e45368;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45367){if((e45367 instanceof Error)){
var e__43972__auto____$14 = e45367;
if((e__43972__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$14;
}
} else {
throw e45367;

}
}} else {
throw e__43972__auto____$13;
}
} else {
throw e45366;

}
}} else {
throw e__43972__auto____$12;
}
} else {
throw e45365;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45352){if((e45352 instanceof Error)){
var e__43972__auto____$12 = e45352;
if((e__43972__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_45298_2__45337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(2));
if((ocr_45298_2__45337 === false)){
try{var ocr_45298_0__45335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(0));
if((ocr_45298_0__45335 === true)){
try{var ocr_45298_1__45336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(1));
if((ocr_45298_1__45336 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,posh.lib.q_analyze.get_(vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_(vars,e),cljs.core.cst$sym$_,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45364){if((e45364 instanceof Error)){
var e__43972__auto____$13 = e45364;
if((e__43972__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$13;
}
} else {
throw e45364;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45363){if((e45363 instanceof Error)){
var e__43972__auto____$13 = e45363;
if((e__43972__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$13;
}
} else {
throw e45363;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45353){if((e45353 instanceof Error)){
var e__43972__auto____$13 = e45353;
if((e__43972__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_45298_2__45337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(2));
if((ocr_45298_2__45337 === true)){
try{var ocr_45298_0__45335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(0));
if((ocr_45298_0__45335 === false)){
try{var ocr_45298_1__45336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(1));
if((ocr_45298_1__45336 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45362){if((e45362 instanceof Error)){
var e__43972__auto____$14 = e45362;
if((e__43972__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$14;
}
} else {
throw e45362;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45361){if((e45361 instanceof Error)){
var e__43972__auto____$14 = e45361;
if((e__43972__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$14;
}
} else {
throw e45361;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45354){if((e45354 instanceof Error)){
var e__43972__auto____$14 = e45354;
if((e__43972__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_45298_2__45337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(2));
if((ocr_45298_2__45337 === false)){
try{var ocr_45298_0__45335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(0));
if((ocr_45298_0__45335 === true)){
try{var ocr_45298_1__45336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(1));
if((ocr_45298_1__45336 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45360){if((e45360 instanceof Error)){
var e__43972__auto____$15 = e45360;
if((e__43972__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$15;
}
} else {
throw e45360;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45356){if((e45356 instanceof Error)){
var e__43972__auto____$15 = e45356;
if((e__43972__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_45298_0__45335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(0));
if((ocr_45298_0__45335 === false)){
try{var ocr_45298_1__45336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(1));
if((ocr_45298_1__45336 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.cst$sym$_,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45358){if((e45358 instanceof Error)){
var e__43972__auto____$16 = e45358;
if((e__43972__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_45298_1__45336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45298,(1));
if((ocr_45298_1__45336 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45297,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45359){if((e45359 instanceof Error)){
var e__43972__auto____$17 = e45359;
if((e__43972__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$17;
}
} else {
throw e45359;

}
}} else {
throw e__43972__auto____$16;
}
} else {
throw e45358;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45357){if((e45357 instanceof Error)){
var e__43972__auto____$16 = e45357;
if((e__43972__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$16;
}
} else {
throw e45357;

}
}} else {
throw e__43972__auto____$15;
}
} else {
throw e45356;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45355){if((e45355 instanceof Error)){
var e__43972__auto____$15 = e45355;
if((e__43972__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$15;
}
} else {
throw e45355;

}
}} else {
throw e__43972__auto____$14;
}
} else {
throw e45354;

}
}} else {
throw e__43972__auto____$13;
}
} else {
throw e45353;

}
}} else {
throw e__43972__auto____$12;
}
} else {
throw e45352;

}
}} else {
throw e__43972__auto____$11;
}
} else {
throw e45351;

}
}} else {
throw e__43972__auto____$10;
}
} else {
throw e45350;

}
}} else {
throw e__43972__auto____$9;
}
} else {
throw e45349;

}
}} else {
throw e__43972__auto____$8;
}
} else {
throw e45348;

}
}} else {
throw e__43972__auto____$7;
}
} else {
throw e45347;

}
}} else {
throw e__43972__auto____$6;
}
} else {
throw e45346;

}
}} else {
throw e__43972__auto____$5;
}
} else {
throw e45345;

}
}} else {
throw e__43972__auto____$4;
}
} else {
throw e45344;

}
}} else {
throw e__43972__auto____$3;
}
} else {
throw e45343;

}
}} else {
throw e__43972__auto____$2;
}
} else {
throw e45342;

}
}} else {
throw e__43972__auto____$1;
}
} else {
throw e45341;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45340){if((e45340 instanceof Error)){
var e__43972__auto____$1 = e45340;
if((e__43972__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$1;
}
} else {
throw e45340;

}
}} else {
throw e__43972__auto__;
}
} else {
throw e45339;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45338){if((e45338 instanceof Error)){
var e__43972__auto__ = e45338;
if((e__43972__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__43972__auto__;
}
} else {
throw e45338;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_45500 = cljs.core.vec(eav);
var ocr_45501 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.qvar_QMARK_,eav));
try{if((cljs.core.vector_QMARK_(ocr_45500)) && ((cljs.core.count(ocr_45500) === 3))){
try{var ocr_45500_0__45526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45500_0__45526,cljs.core.cst$sym$_)){
try{var ocr_45500_1__45527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45500_1__45527,cljs.core.cst$sym$_)){
try{var ocr_45500_2__45528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45500_2__45528,cljs.core.cst$sym$_)){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e45590){if((e45590 instanceof Error)){
var e__43972__auto__ = e45590;
if((e__43972__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_(ocr_45501)) && ((cljs.core.count(ocr_45501) === 3))){
try{var ocr_45501_2__45531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(2));
if((ocr_45501_2__45531 === false)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45592){if((e45592 instanceof Error)){
var e__43972__auto____$1 = e45592;
if((e__43972__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_45501_2__45531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(2));
if((ocr_45501_2__45531 === true)){
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45593){if((e45593 instanceof Error)){
var e__43972__auto____$2 = e45593;
if((e__43972__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$2;
}
} else {
throw e45593;

}
}} else {
throw e__43972__auto____$1;
}
} else {
throw e45592;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45591){if((e45591 instanceof Error)){
var e__43972__auto____$1 = e45591;
if((e__43972__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$1;
}
} else {
throw e45591;

}
}} else {
throw e__43972__auto__;
}
} else {
throw e45590;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45585){if((e45585 instanceof Error)){
var e__43972__auto__ = e45585;
if((e__43972__auto__ === cljs.core.match.backtrack)){
try{var ocr_45500_2__45528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45500_2__45528,cljs.core.cst$sym$_)){
try{if((cljs.core.vector_QMARK_(ocr_45501)) && ((cljs.core.count(ocr_45501) === 3))){
try{var ocr_45501_1__45533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(1));
if((ocr_45501_1__45533 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,a,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45588){if((e45588 instanceof Error)){
var e__43972__auto____$1 = e45588;
if((e__43972__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_45501_1__45533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(1));
if((ocr_45501_1__45533 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45589){if((e45589 instanceof Error)){
var e__43972__auto____$2 = e45589;
if((e__43972__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$2;
}
} else {
throw e45589;

}
}} else {
throw e__43972__auto____$1;
}
} else {
throw e45588;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45587){if((e45587 instanceof Error)){
var e__43972__auto____$1 = e45587;
if((e__43972__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$1;
}
} else {
throw e45587;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45586){if((e45586 instanceof Error)){
var e__43972__auto____$1 = e45586;
if((e__43972__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$1;
}
} else {
throw e45586;

}
}} else {
throw e__43972__auto__;
}
} else {
throw e45585;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45539){if((e45539 instanceof Error)){
var e__43972__auto__ = e45539;
if((e__43972__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_(ocr_45501)) && ((cljs.core.count(ocr_45501) === 3))){
try{var ocr_45501_0__45535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(0));
if((ocr_45501_0__45535 === false)){
try{var ocr_45500_1__45527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45500_1__45527,cljs.core.cst$sym$_)){
try{var ocr_45500_2__45528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45500_2__45528,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.cst$sym$_,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45584){if((e45584 instanceof Error)){
var e__43972__auto____$1 = e45584;
if((e__43972__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$1;
}
} else {
throw e45584;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45583){if((e45583 instanceof Error)){
var e__43972__auto____$1 = e45583;
if((e__43972__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$1;
}
} else {
throw e45583;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45541){if((e45541 instanceof Error)){
var e__43972__auto____$1 = e45541;
if((e__43972__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_45501_0__45535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(0));
if((ocr_45501_0__45535 === true)){
try{var ocr_45500_2__45528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45500_2__45528,cljs.core.cst$sym$_)){
try{var ocr_45500_1__45527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45500_1__45527,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),cljs.core.cst$sym$_,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45580){if((e45580 instanceof Error)){
var e__43972__auto____$2 = e45580;
if((e__43972__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_45501_1__45536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(1));
if((ocr_45501_1__45536 === true)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),cljs.core.cst$sym$_,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45581){if((e45581 instanceof Error)){
var e__43972__auto____$3 = e45581;
if((e__43972__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_45501_1__45536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(1));
if((ocr_45501_1__45536 === false)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45582){if((e45582 instanceof Error)){
var e__43972__auto____$4 = e45582;
if((e__43972__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$4;
}
} else {
throw e45582;

}
}} else {
throw e__43972__auto____$3;
}
} else {
throw e45581;

}
}} else {
throw e__43972__auto____$2;
}
} else {
throw e45580;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45579){if((e45579 instanceof Error)){
var e__43972__auto____$2 = e45579;
if((e__43972__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$2;
}
} else {
throw e45579;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45542){if((e45542 instanceof Error)){
var e__43972__auto____$2 = e45542;
if((e__43972__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_45501_0__45535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(0));
if((ocr_45501_0__45535 === false)){
try{var ocr_45501_1__45536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(1));
if((ocr_45501_1__45536 === true)){
try{var ocr_45500_2__45528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45500_2__45528,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45578){if((e45578 instanceof Error)){
var e__43972__auto____$3 = e45578;
if((e__43972__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$3;
}
} else {
throw e45578;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45577){if((e45577 instanceof Error)){
var e__43972__auto____$3 = e45577;
if((e__43972__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$3;
}
} else {
throw e45577;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45543){if((e45543 instanceof Error)){
var e__43972__auto____$3 = e45543;
if((e__43972__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_45501_2__45537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(2));
if((ocr_45501_2__45537 === true)){
try{var ocr_45501_0__45535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(0));
if((ocr_45501_0__45535 === true)){
try{var ocr_45500_1__45527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45500_1__45527,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),cljs.core.cst$sym$_,cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45576){if((e45576 instanceof Error)){
var e__43972__auto____$4 = e45576;
if((e__43972__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$4;
}
} else {
throw e45576;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45575){if((e45575 instanceof Error)){
var e__43972__auto____$4 = e45575;
if((e__43972__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$4;
}
} else {
throw e45575;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45544){if((e45544 instanceof Error)){
var e__43972__auto____$4 = e45544;
if((e__43972__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_45501_2__45537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(2));
if((ocr_45501_2__45537 === false)){
try{var ocr_45501_0__45535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(0));
if((ocr_45501_0__45535 === true)){
try{var ocr_45500_1__45527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45500_1__45527,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),cljs.core.cst$sym$_,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45574){if((e45574 instanceof Error)){
var e__43972__auto____$5 = e45574;
if((e__43972__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$5;
}
} else {
throw e45574;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45573){if((e45573 instanceof Error)){
var e__43972__auto____$5 = e45573;
if((e__43972__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$5;
}
} else {
throw e45573;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45545){if((e45545 instanceof Error)){
var e__43972__auto____$5 = e45545;
if((e__43972__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_45501_2__45537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(2));
if((ocr_45501_2__45537 === true)){
try{var ocr_45501_0__45535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(0));
if((ocr_45501_0__45535 === false)){
try{var ocr_45500_1__45527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45500_1__45527,cljs.core.cst$sym$_)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45572){if((e45572 instanceof Error)){
var e__43972__auto____$6 = e45572;
if((e__43972__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$6;
}
} else {
throw e45572;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45569){if((e45569 instanceof Error)){
var e__43972__auto____$6 = e45569;
if((e__43972__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_45501_1__45536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(1));
if((ocr_45501_1__45536 === true)){
try{var ocr_45500_0__45526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45500_0__45526,cljs.core.cst$sym$_)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45571){if((e45571 instanceof Error)){
var e__43972__auto____$7 = e45571;
if((e__43972__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$7;
}
} else {
throw e45571;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45570){if((e45570 instanceof Error)){
var e__43972__auto____$7 = e45570;
if((e__43972__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$7;
}
} else {
throw e45570;

}
}} else {
throw e__43972__auto____$6;
}
} else {
throw e45569;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45546){if((e45546 instanceof Error)){
var e__43972__auto____$6 = e45546;
if((e__43972__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_45501_2__45537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(2));
if((ocr_45501_2__45537 === false)){
try{var ocr_45501_1__45536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(1));
if((ocr_45501_1__45536 === true)){
try{var ocr_45500_0__45526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45500_0__45526,cljs.core.cst$sym$_)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45568){if((e45568 instanceof Error)){
var e__43972__auto____$7 = e45568;
if((e__43972__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$7;
}
} else {
throw e45568;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45567){if((e45567 instanceof Error)){
var e__43972__auto____$7 = e45567;
if((e__43972__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$7;
}
} else {
throw e45567;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45547){if((e45547 instanceof Error)){
var e__43972__auto____$7 = e45547;
if((e__43972__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_45501_2__45537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(2));
if((ocr_45501_2__45537 === true)){
try{var ocr_45501_1__45536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(1));
if((ocr_45501_1__45536 === false)){
try{var ocr_45500_0__45526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ocr_45500_0__45526,cljs.core.cst$sym$_)){
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45566){if((e45566 instanceof Error)){
var e__43972__auto____$8 = e45566;
if((e__43972__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$8;
}
} else {
throw e45566;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45560){if((e45560 instanceof Error)){
var e__43972__auto____$8 = e45560;
if((e__43972__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_45501_1__45536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(1));
if((ocr_45501_1__45536 === true)){
try{var ocr_45501_0__45535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(0));
if((ocr_45501_0__45535 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),cljs.core.cst$sym$_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),cljs.core.cst$sym$_,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45564){if((e45564 instanceof Error)){
var e__43972__auto____$9 = e45564;
if((e__43972__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_45501_0__45535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(0));
if((ocr_45501_0__45535 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45565){if((e45565 instanceof Error)){
var e__43972__auto____$10 = e45565;
if((e__43972__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$10;
}
} else {
throw e45565;

}
}} else {
throw e__43972__auto____$9;
}
} else {
throw e45564;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45561){if((e45561 instanceof Error)){
var e__43972__auto____$9 = e45561;
if((e__43972__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_45501_1__45536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(1));
if((ocr_45501_1__45536 === false)){
try{var ocr_45501_0__45535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(0));
if((ocr_45501_0__45535 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,a,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(v) : vars.call(null,v))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),a,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45563){if((e45563 instanceof Error)){
var e__43972__auto____$10 = e45563;
if((e__43972__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$10;
}
} else {
throw e45563;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45562){if((e45562 instanceof Error)){
var e__43972__auto____$10 = e45562;
if((e__43972__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$10;
}
} else {
throw e45562;

}
}} else {
throw e__43972__auto____$9;
}
} else {
throw e45561;

}
}} else {
throw e__43972__auto____$8;
}
} else {
throw e45560;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45548){if((e45548 instanceof Error)){
var e__43972__auto____$8 = e45548;
if((e__43972__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_45501_2__45537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(2));
if((ocr_45501_2__45537 === false)){
try{var ocr_45501_0__45535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(0));
if((ocr_45501_0__45535 === true)){
try{var ocr_45501_1__45536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(1));
if((ocr_45501_1__45536 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(a) : vars.call(null,a)),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vars.cljs$core$IFn$_invoke$arity$1 ? vars.cljs$core$IFn$_invoke$arity$1(e) : vars.call(null,e)),cljs.core.cst$sym$_,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45559){if((e45559 instanceof Error)){
var e__43972__auto____$9 = e45559;
if((e__43972__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$9;
}
} else {
throw e45559;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45558){if((e45558 instanceof Error)){
var e__43972__auto____$9 = e45558;
if((e__43972__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$9;
}
} else {
throw e45558;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45549){if((e45549 instanceof Error)){
var e__43972__auto____$9 = e45549;
if((e__43972__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_45501_2__45537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(2));
if((ocr_45501_2__45537 === true)){
try{var ocr_45501_0__45535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(0));
if((ocr_45501_0__45535 === false)){
try{var ocr_45501_1__45536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(1));
if((ocr_45501_1__45536 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,cljs.core.cst$sym$_], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45557){if((e45557 instanceof Error)){
var e__43972__auto____$10 = e45557;
if((e__43972__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$10;
}
} else {
throw e45557;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45556){if((e45556 instanceof Error)){
var e__43972__auto____$10 = e45556;
if((e__43972__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$10;
}
} else {
throw e45556;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45550){if((e45550 instanceof Error)){
var e__43972__auto____$10 = e45550;
if((e__43972__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_45501_2__45537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(2));
if((ocr_45501_2__45537 === false)){
try{var ocr_45501_0__45535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(0));
if((ocr_45501_0__45535 === true)){
try{var ocr_45501_1__45536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(1));
if((ocr_45501_1__45536 === false)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45555){if((e45555 instanceof Error)){
var e__43972__auto____$11 = e45555;
if((e__43972__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$11;
}
} else {
throw e45555;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45552){if((e45552 instanceof Error)){
var e__43972__auto____$11 = e45552;
if((e__43972__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_45501_0__45535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(0));
if((ocr_45501_0__45535 === false)){
try{var ocr_45501_1__45536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45501,(1));
if((ocr_45501_1__45536 === true)){
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(0));
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(1));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ocr_45500,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,cljs.core.cst$sym$_,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e45554){if((e45554 instanceof Error)){
var e__43972__auto____$12 = e45554;
if((e__43972__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$12;
}
} else {
throw e45554;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45553){if((e45553 instanceof Error)){
var e__43972__auto____$12 = e45553;
if((e__43972__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$12;
}
} else {
throw e45553;

}
}} else {
throw e__43972__auto____$11;
}
} else {
throw e45552;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45551){if((e45551 instanceof Error)){
var e__43972__auto____$11 = e45551;
if((e__43972__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$11;
}
} else {
throw e45551;

}
}} else {
throw e__43972__auto____$10;
}
} else {
throw e45550;

}
}} else {
throw e__43972__auto____$9;
}
} else {
throw e45549;

}
}} else {
throw e__43972__auto____$8;
}
} else {
throw e45548;

}
}} else {
throw e__43972__auto____$7;
}
} else {
throw e45547;

}
}} else {
throw e__43972__auto____$6;
}
} else {
throw e45546;

}
}} else {
throw e__43972__auto____$5;
}
} else {
throw e45545;

}
}} else {
throw e__43972__auto____$4;
}
} else {
throw e45544;

}
}} else {
throw e__43972__auto____$3;
}
} else {
throw e45543;

}
}} else {
throw e__43972__auto____$2;
}
} else {
throw e45542;

}
}} else {
throw e__43972__auto____$1;
}
} else {
throw e45541;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45540){if((e45540 instanceof Error)){
var e__43972__auto____$1 = e45540;
if((e__43972__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__43972__auto____$1;
}
} else {
throw e45540;

}
}} else {
throw e__43972__auto__;
}
} else {
throw e45539;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e45538){if((e45538 instanceof Error)){
var e__43972__auto__ = e45538;
if((e__43972__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__43972__auto__;
}
} else {
throw e45538;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45599){
var vec__45600 = p__45599;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45600,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45600,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$db_DASH_id.cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (vec__45600,k,v){
return (function (p1__45594_SHARP_){
return posh.lib.q_analyze.pattern_from_eav(vars,cljs.core.rest(p1__45594_SHARP_));
});})(vec__45600,k,v))
,cljs.core.array_seq([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45608){
var vec__45609 = p__45608;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45609,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45609,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$db_DASH_id.cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(k) : dbvarmap.call(null,k))),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (vec__45609,k,v){
return (function (p1__45603_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav(vars,cljs.core.rest(p1__45603_SHARP_));
});})(vec__45609,k,v))
,cljs.core.array_seq([v], 0))]);
}),cljs.core.group_by(cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((((cljs.core.first(ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ins))].join('')),"$")))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)])),(function (){var G__45614 = cljs.core.rest(ins);
var G__45615 = cljs.core.rest(args);
return (posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.just_qvars.cljs$core$IFn$_invoke$arity$2(G__45614,G__45615) : posh.lib.q_analyze.just_qvars.call(null,G__45614,G__45615));
})()], 0));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(ins,args){
var varmap = posh.lib.q_analyze.just_qvars(ins,args);
if(!(cljs.core.empty_QMARK_(varmap))){
var qvars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(cljs.core.keys(varmap)));
var varvals = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(datascript.core.q,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$find,qvars,cljs.core.cst$kw$in,cljs.core.keys(varmap)], null)),cljs.core.vals(varmap));
var varsets = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap(qvars,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (qvars,varvals,varmap){
return (function (p1__45616_SHARP_){
return cljs.core.zipmap(qvars,p1__45616_SHARP_);
});})(qvars,varvals,varmap))
,varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return (cljs.core.coll_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),cljs.core.cst$sym$pull)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(x)));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk((function (x){
if(cljs.core.truth_(posh.lib.q_analyze.pull_pattern_QMARK_(x))){
return cljs.core.second(x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_(qfind)){
if(cljs.core.empty_QMARK_(qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(posh.lib.q_analyze.pull_pattern_QMARK_(qfind))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second(qfind),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(qfind,(2))]);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_(dbeavs)){
return null;
} else {
var vec__45620 = cljs.core.first(dbeavs);
var db = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45620,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45620,(1),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45620,(2),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45620,(3),null);
if(cljs.core.truth_((function (){var or__7601__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,e);
if(or__7601__auto__){
return or__7601__auto__;
} else {
var and__7589__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(var$,v);
if(and__7589__auto__){
return posh.lib.pull_analyze.ref_QMARK_(cljs.core.cst$kw$schema.cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db))),a);
} else {
return and__7589__auto__;
}
}
})())){
return (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db) : dbvarmap.call(null,db));
} else {
var G__45623 = var$;
var G__45624 = dbvarmap;
var G__45625 = cljs.core.rest(dbeavs);
var$ = G__45623;
dbvarmap = G__45624;
dbeavs = G__45625;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_(vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(vars),posh.lib.q_analyze.match_var_to_db(cljs.core.first(vars),dbvarmap,dbeavs)]),(function (){var G__45629 = cljs.core.rest(vars);
var G__45630 = dbvarmap;
var G__45631 = dbeavs;
return (posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3 ? posh.lib.q_analyze.match_vars_to_dbs.cljs$core$IFn$_invoke$arity$3(G__45629,G__45630,G__45631) : posh.lib.q_analyze.match_vars_to_dbs.call(null,G__45629,G__45630,G__45631));
})()], 0));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_(xs__$1)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(xs__$1),x)){
return n;
} else {
var G__45632 = (n + (1));
var G__45633 = cljs.core.rest(xs__$1);
n = G__45632;
xs__$1 = G__45633;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
var and__7589__auto__ = cljs.core.map_QMARK_(arg);
if(and__7589__auto__){
var and__7589__auto____$1 = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__7589__auto____$1)){
return cljs.core.cst$kw$conn.cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__7589__auto____$1;
}
} else {
return and__7589__auto__;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__45634_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_(p1__45634_SHARP_))){
return (type.cljs$core$IFn$_invoke$arity$1 ? type.cljs$core$IFn$_invoke$arity$1(p1__45634_SHARP_) : type.call(null,p1__45634_SHARP_));
} else {
return p1__45634_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_(ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(posh.lib.q_analyze.dbvar_QMARK_(cljs.core.first(ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first(ins),cljs.core.first(args)]):null),(function (){var G__45637 = cljs.core.rest(ins);
var G__45638 = cljs.core.rest(args);
return (posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2 ? posh.lib.q_analyze.make_dbarg_map.cljs$core$IFn$_invoke$arity$2(G__45637,G__45638) : posh.lib.q_analyze.make_dbarg_map.call(null,G__45637,G__45638));
})()], 0));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45643){
var vec__45644 = p__45643;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45644,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45644,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by(cljs.core.first,datoms)));
});
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,input_set){
return cljs.core.set((function (){var iter__8463__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__45653(s__45654){
return (new cljs.core.LazySeq(null,(function (){
var s__45654__$1 = s__45654;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__45654__$1);
if(temp__6738__auto__){
var s__45654__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__45654__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__45654__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__45656 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__45655 = (0);
while(true){
if((i__45655 < size__8462__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__45655);
cljs.core.chunk_append(b__45656,((cljs.core.coll_QMARK_(x))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,x) : entid_fn.call(null,db,x)):x));

var G__45659 = (i__45655 + (1));
i__45655 = G__45659;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45656),posh$lib$q_analyze$resolve_any_idents_$_iter__45653(cljs.core.chunk_rest(s__45654__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45656),null);
}
} else {
var x = cljs.core.first(s__45654__$2);
return cljs.core.cons(((cljs.core.coll_QMARK_(x))?(entid_fn.cljs$core$IFn$_invoke$arity$2 ? entid_fn.cljs$core$IFn$_invoke$arity$2(db,x) : entid_fn.call(null,db,x)):x),posh$lib$q_analyze$resolve_any_idents_$_iter__45653(cljs.core.rest(s__45654__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8463__auto__(input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$], null)], null),posh.lib.q_analyze.query_to_map(query)], 0));
var where = posh.lib.q_analyze.normalize_all_eavs(cljs.core.vec(cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs(where);
var vars = cljs.core.vec(posh.lib.q_analyze.get_all_vars(eavs));
var newqm = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([qm,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$find,vars,cljs.core.cst$kw$where,where], null)], 0));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (qm,where,eavs,vars,newqm,dbvarmap){
return (function (p__45691){
var vec__45692 = p__45691;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45692,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45692,(1),null);
var or__7601__auto__ = cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,sym));
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return arg;
}
});})(qm,where,eavs,vars,newqm,dbvarmap))
,cljs.core.zipmap(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$q.cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r){
return (function (p__45695){
var vec__45696 = p__45695;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45696,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45696,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$,cljs.core.cst$sym$_,a,v], null);
});})(qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred.cljs$core$IFn$_invoke$arity$3(cljs.core.vector_QMARK_,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$datoms_DASH_t,null,cljs.core.cst$kw$datoms,null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms(posh.lib.q_analyze.create_q_datoms(r,eavs,vars));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datoms,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datoms,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__45699){
var vec__45700 = p__45699;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45700,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45700,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$db_DASH_id.cljs$core$IFn$_invoke$arity$1((dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym))),db_datoms]);
});})(datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,datoms))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datoms_DASH_t,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$datoms_DASH_t,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__45703){
var vec__45704 = p__45703;
var db_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45704,(0),null);
var db_datoms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45704,(1),null);
var db = (dbvarmap.cljs$core$IFn$_invoke$arity$1 ? dbvarmap.cljs$core$IFn$_invoke$arity$1(db_sym) : dbvarmap.call(null,db_sym));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.cst$kw$db_DASH_id.cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms(cljs.core.cst$kw$q.cljs$core$IFn$_invoke$arity$1(dcfg),cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
});})(datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,datoms))], null):null)], 0));
})():null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$results,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$results,(function (){var G__45707 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$find,cljs.core.vec(cljs.core.cst$kw$find.cljs$core$IFn$_invoke$arity$1(qm)),cljs.core.cst$kw$in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,cljs.core.cst$sym$$$$], null)], null)], null);
var G__45708 = cljs.core.vec(r);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__45707,G__45708) : datascript.core.q.call(null,G__45707,G__45708));
})()], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$filter_DASH_patterns,null,cljs.core.cst$kw$patterns,null,cljs.core.cst$kw$simple_DASH_patterns,null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__45709){
var vec__45710 = p__45709;
var seq__45711 = cljs.core.seq(vec__45710);
var first__45712 = cljs.core.first(seq__45711);
var seq__45711__$1 = cljs.core.next(seq__45711);
var db = first__45712;
var eav = seq__45711__$1;
return cljs.core.vec(cljs.core.cons(db,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__45710,seq__45711,first__45712,seq__45711__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__45662_SHARP_){
var temp__6736__auto__ = (in_vars.cljs$core$IFn$_invoke$arity$1 ? in_vars.cljs$core$IFn$_invoke$arity$1(p1__45662_SHARP_) : in_vars.call(null,p1__45662_SHARP_));
if(cljs.core.truth_(temp__6736__auto__)){
var v = temp__6736__auto__;
return posh.lib.q_analyze.resolve_any_idents(cljs.core.cst$kw$entid.cljs$core$IFn$_invoke$arity$1(dcfg),cljs.core.cst$kw$db.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(dbvarmap,db)),v);
} else {
return p1__45662_SHARP_;
}
});})(vec__45710,seq__45711,first__45712,seq__45711__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eav)));
});})(in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars(eavs_ins);
var linked_qvars = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__45713){
var vec__45714 = p__45713;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45714,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45714,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
});})(in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,qvar_count)));
var rvars = cljs.core.zipmap(vars,posh.lib.q_analyze.stack_vectors(r));
var prepped_eavs = clojure.walk.postwalk(((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__45663_SHARP_){
if(cljs.core.truth_((function (){var and__7589__auto__ = posh.lib.q_analyze.qvar_QMARK_(p1__45663_SHARP_);
if(cljs.core.truth_(and__7589__auto__)){
return cljs.core.not((linked_qvars.cljs$core$IFn$_invoke$arity$1 ? linked_qvars.cljs$core$IFn$_invoke$arity$1(p1__45663_SHARP_) : linked_qvars.call(null,p1__45663_SHARP_)));
} else {
return and__7589__auto__;
}
})())){
return cljs.core.cst$sym$_;
} else {
return p1__45663_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eavs_ins);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$simple_DASH_patterns,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$patterns,posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,clojure.walk.postwalk(((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__45664_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_(p1__45664_SHARP_))){
return cljs.core.cst$sym$_;
} else {
return p1__45664_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$patterns,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$patterns,posh.lib.q_analyze.patterns_from_eavs(dbvarmap,rvars,prepped_eavs),cljs.core.cst$kw$linked,linked_qvars], null):null),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter_DASH_patterns,null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filter_DASH_patterns,posh.lib.q_analyze.filter_patterns_from_eavs(dbvarmap,rvars,prepped_eavs)], null):null)], 0));
})():null)], 0));
});
