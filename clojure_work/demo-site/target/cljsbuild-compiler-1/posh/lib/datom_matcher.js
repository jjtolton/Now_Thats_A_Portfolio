// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('posh.lib.datom_matcher');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
posh.lib.datom_matcher.datom_match_pattern_QMARK_ = (function posh$lib$datom_matcher$datom_match_pattern_QMARK_(pattern,datom){
while(true){
if(cljs.core.empty_QMARK_(pattern)){
return true;
} else {
if(cljs.core.truth_((function (){var p = cljs.core.first(pattern);
var or__7601__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.cst$sym$_);
if(or__7601__auto__){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = (function (){var and__7589__auto__ = cljs.core.set_QMARK_(p);
if(and__7589__auto__){
var G__43350 = cljs.core.first(datom);
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__43350) : p.call(null,G__43350));
} else {
return and__7589__auto__;
}
})();
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,cljs.core.first(datom));
}
}
})())){
var G__43351 = cljs.core.rest(pattern);
var G__43352 = cljs.core.rest(datom);
pattern = G__43351;
datom = G__43352;
continue;
} else {
return null;
}
}
break;
}
});
posh.lib.datom_matcher.datom_match_QMARK_ = (function posh$lib$datom_matcher$datom_match_QMARK_(patterns,datom){
return cljs.core.some((function (p1__43353_SHARP_){
return posh.lib.datom_matcher.datom_match_pattern_QMARK_(p1__43353_SHARP_,datom);
}),patterns);
});
posh.lib.datom_matcher.any_datoms_match_QMARK_ = (function posh$lib$datom_matcher$any_datoms_match_QMARK_(patterns,datoms){
var G__43356 = patterns;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__43356)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,G__43356)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),G__43356)){
return true;
} else {
return cljs.core.some(((function (G__43356){
return (function (p1__43354_SHARP_){
return posh.lib.datom_matcher.datom_match_QMARK_(patterns,p1__43354_SHARP_);
});})(G__43356))
,datoms);

}
}
}
});
posh.lib.datom_matcher.matching_datoms = (function posh$lib$datom_matcher$matching_datoms(patterns,datoms){
var G__43359 = patterns;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,G__43359)){
return datoms;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null),G__43359)){
return datoms;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__43359)){
return null;
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__43359){
return (function (p1__43357_SHARP_){
return posh.lib.datom_matcher.datom_match_QMARK_(patterns,p1__43357_SHARP_);
});})(G__43359))
,datoms);

}
}
}
});
posh.lib.datom_matcher.combine_entids = (function posh$lib$datom_matcher$combine_entids(entids,rest_datom,patterns,new_patterns,leftover_patterns){
while(true){
if(cljs.core.empty_QMARK_(patterns)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$new_DASH_patterns,cljs.core.cons(cljs.core.vec(cljs.core.cons(entids,rest_datom)),new_patterns),cljs.core.cst$kw$leftover_DASH_patterns,leftover_patterns], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rest_datom,cljs.core.rest(cljs.core.first(patterns)))){
var G__43360 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(entids,((cljs.core.set_QMARK_(cljs.core.ffirst(patterns)))?cljs.core.ffirst(patterns):cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst(patterns)], null))));
var G__43361 = rest_datom;
var G__43362 = cljs.core.rest(patterns);
var G__43363 = new_patterns;
var G__43364 = leftover_patterns;
entids = G__43360;
rest_datom = G__43361;
patterns = G__43362;
new_patterns = G__43363;
leftover_patterns = G__43364;
continue;
} else {
var G__43365 = entids;
var G__43366 = rest_datom;
var G__43367 = cljs.core.rest(patterns);
var G__43368 = new_patterns;
var G__43369 = cljs.core.cons(cljs.core.first(patterns),leftover_patterns);
entids = G__43365;
rest_datom = G__43366;
patterns = G__43367;
new_patterns = G__43368;
leftover_patterns = G__43369;
continue;
}
}
break;
}
});
posh.lib.datom_matcher.reduce_patterns = (function posh$lib$datom_matcher$reduce_patterns(patterns){
var new_patterns = cljs.core.PersistentVector.EMPTY;
var leftover_patterns = patterns;
while(true){
if(cljs.core.empty_QMARK_(leftover_patterns)){
return new_patterns;
} else {
if((function (){var id = cljs.core.ffirst(leftover_patterns);
return (cljs.core.set_QMARK_(id)) || (typeof id === 'number');
})()){
var r = posh.lib.datom_matcher.combine_entids(cljs.core.PersistentHashSet.EMPTY,cljs.core.rest(cljs.core.first(leftover_patterns)),leftover_patterns,new_patterns,cljs.core.PersistentVector.EMPTY);
var G__43370 = cljs.core.cst$kw$new_DASH_patterns.cljs$core$IFn$_invoke$arity$1(r);
var G__43371 = cljs.core.cst$kw$leftover_DASH_patterns.cljs$core$IFn$_invoke$arity$1(r);
new_patterns = G__43370;
leftover_patterns = G__43371;
continue;
} else {
var G__43372 = cljs.core.cons(cljs.core.first(leftover_patterns),new_patterns);
var G__43373 = cljs.core.rest(leftover_patterns);
new_patterns = G__43372;
leftover_patterns = G__43373;
continue;
}
}
break;
}
});
