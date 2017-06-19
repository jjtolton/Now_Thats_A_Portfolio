// Compiled by ClojureScript 1.9.518 {}
goog.provide('posh.lib.q_analyze');
goog.require('cljs.core');
goog.require('posh.lib.util');
goog.require('datascript.core');
goog.require('posh.lib.datom_matcher');
goog.require('posh.lib.pull_analyze');
goog.require('cljs.core.match');
posh.lib.q_analyze.take_until = (function posh$lib$q_analyze$take_until(stop_at_QMARK_,ls){
if(cljs.core.truth_((function (){var or__28749__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__28749__auto__){
return or__28749__auto__;
} else {
return stop_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,ls),posh.lib.q_analyze.take_until.call(null,stop_at_QMARK_,cljs.core.rest.call(null,ls)));
}
});
posh.lib.q_analyze.rest_at = (function posh$lib$q_analyze$rest_at(rest_at_QMARK_,ls){
while(true){
if(cljs.core.truth_((function (){var or__28749__auto__ = cljs.core.empty_QMARK_.call(null,ls);
if(or__28749__auto__){
return or__28749__auto__;
} else {
return rest_at_QMARK_.call(null,cljs.core.first.call(null,ls));
}
})())){
return ls;
} else {
var G__38203 = rest_at_QMARK_;
var G__38204 = cljs.core.rest.call(null,ls);
rest_at_QMARK_ = G__38203;
ls = G__38204;
continue;
}
break;
}
});
posh.lib.q_analyze.split_list_at = (function posh$lib$q_analyze$split_list_at(split_at_QMARK_,ls){
if(cljs.core.empty_QMARK_.call(null,ls)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ls),posh.lib.q_analyze.take_until.call(null,split_at_QMARK_,posh.lib.q_analyze.take_until.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls)))]),posh.lib.q_analyze.split_list_at.call(null,split_at_QMARK_,posh.lib.q_analyze.rest_at.call(null,split_at_QMARK_,cljs.core.rest.call(null,ls))));
}
});
posh.lib.q_analyze.query_to_map = (function posh$lib$q_analyze$query_to_map(query){
if(!(cljs.core.map_QMARK_.call(null,query))){
return posh.lib.q_analyze.split_list_at.call(null,cljs.core.keyword_QMARK_,query);
} else {
return query;
}
});
posh.lib.q_analyze.dbvar_QMARK_ = (function posh$lib$q_analyze$dbvar_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),"$"));
});
posh.lib.q_analyze.qvar_QMARK_ = (function posh$lib$q_analyze$qvar_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')),"?"));
});
posh.lib.q_analyze.get_all_vars = (function posh$lib$q_analyze$get_all_vars(query){
if(cljs.core.empty_QMARK_.call(null,query)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,query))){
return clojure.set.union.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.first.call(null,query)),posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query)));
} else {
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,cljs.core.first.call(null,query)))){
return cljs.core.conj.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query)),cljs.core.first.call(null,query));
} else {
return posh.lib.q_analyze.get_all_vars.call(null,cljs.core.rest.call(null,query));

}
}
}
});
posh.lib.q_analyze.qvar_gen = (function (){var qvar_count = cljs.core.atom.call(null,(3284832));
return ((function (qvar_count){
return (function (){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("?var"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,qvar_count,cljs.core.inc))].join(''));
});
;})(qvar_count))
})();
posh.lib.q_analyze.eav_QMARK_ = (function posh$lib$q_analyze$eav_QMARK_(v){
return (cljs.core.vector_QMARK_.call(null,v)) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.coll_QMARK_,v)));
});
posh.lib.q_analyze.wildcard_QMARK_ = (function posh$lib$q_analyze$wildcard_QMARK_(s){
return cljs.core._EQ_.call(null,s,new cljs.core.Symbol(null,"_","_",-1201019570,null));
});
posh.lib.q_analyze.normalize_eav_helper = (function posh$lib$q_analyze$normalize_eav_helper(eav,n,neweav,vars){
if(cljs.core._EQ_.call(null,n,(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"eav","eav",-1118737308),neweav,new cljs.core.Keyword(null,"vars","vars",-2046957217),vars], null);
} else {
if(cljs.core.truth_((function (){var and__28737__auto__ = cljs.core.first.call(null,eav);
if(cljs.core.truth_(and__28737__auto__)){
return cljs.core.not.call(null,posh.lib.q_analyze.wildcard_QMARK_.call(null,cljs.core.first.call(null,eav)));
} else {
return and__28737__auto__;
}
})())){
return posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,eav),(n - (1)),cljs.core.conj.call(null,neweav,cljs.core.first.call(null,eav)),vars);
} else {
var var$ = posh.lib.q_analyze.qvar_gen.call(null);
return posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,eav),(n - (1)),cljs.core.conj.call(null,neweav,var$),cljs.core.conj.call(null,vars,var$));
}
}
});
posh.lib.q_analyze.normalize_eav = (function posh$lib$q_analyze$normalize_eav(eav){
var dbeav = (cljs.core.truth_(posh.lib.q_analyze.dbvar_QMARK_.call(null,cljs.core.first.call(null,eav)))?eav:cljs.core.cons.call(null,cljs.core.symbol.call(null,"$"),eav));
return cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.first.call(null,dbeav),cljs.core.concat.call(null,new cljs.core.Keyword(null,"eav","eav",-1118737308).cljs$core$IFn$_invoke$arity$1(posh.lib.q_analyze.normalize_eav_helper.call(null,cljs.core.rest.call(null,dbeav),(3),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY)),cljs.core.drop.call(null,(4),dbeav))));
});
posh.lib.q_analyze.normalize_all_eavs = (function posh$lib$q_analyze$normalize_all_eavs(where){
if(cljs.core.empty_QMARK_.call(null,where)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core.list_QMARK_.call(null,where)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,where)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,where),cljs.core.second.call(null,where)], null),posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,(2),where))));
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,where),posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))));
}
} else {
if(cljs.core.truth_(posh.lib.q_analyze.eav_QMARK_.call(null,where))){
return posh.lib.q_analyze.normalize_eav.call(null,where);
} else {
if((cljs.core.vector_QMARK_.call(null,where)) && (cljs.core.list_QMARK_.call(null,cljs.core.first.call(null,where)))){
return where;
} else {
if(cljs.core.coll_QMARK_.call(null,where)){
return cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.normalize_all_eavs,where));
} else {
return where;

}
}
}
}
}
});
posh.lib.q_analyze.get_eavs = (function posh$lib$q_analyze$get_eavs(where){
if(cljs.core.empty_QMARK_.call(null,where)){
return cljs.core.PersistentVector.EMPTY;
} else {
var item = cljs.core.first.call(null,where);
if(cljs.core.seq_QMARK_.call(null,item)){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.first.call(null,item)], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"or-join","or-join",591375469,null),new cljs.core.Symbol(null,"not-join","not-join",-645515756,null)], null)))){
return cljs.core.concat.call(null,posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.drop.call(null,(2),item))));
} else {
return cljs.core.concat.call(null,posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,item))));
}
} else {
if(cljs.core.truth_(posh.lib.q_analyze.eav_QMARK_.call(null,item))){
return cljs.core.cons.call(null,item,posh.lib.q_analyze.get_eavs.call(null,cljs.core.rest.call(null,where)));
} else {
if((cljs.core.vector_QMARK_.call(null,item)) && (cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,item)))){
var ocr_38218 = cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vec.call(null,cljs.core.first.call(null,item))], null),cljs.core.rest.call(null,item)));
try{if((cljs.core.vector_QMARK_.call(null,ocr_38218)) && ((cljs.core.count.call(null,ocr_38218) === 2))){
try{var ocr_38218_0__38221 = cljs.core.nth.call(null,ocr_38218,(0));
if((cljs.core.vector_QMARK_.call(null,ocr_38218_0__38221)) && ((cljs.core.count.call(null,ocr_38218_0__38221) === 5))){
try{var ocr_38218_0__38221_0__38223 = cljs.core.nth.call(null,ocr_38218_0__38221,(0));
if(cljs.core._EQ_.call(null,ocr_38218_0__38221_0__38223,new cljs.core.Symbol(null,"get-else","get-else",1312024065,null))){
var db = cljs.core.nth.call(null,ocr_38218_0__38221,(1));
var e = cljs.core.nth.call(null,ocr_38218_0__38221,(2));
var a = cljs.core.nth.call(null,ocr_38218_0__38221,(3));
var v = cljs.core.nth.call(null,ocr_38218,(1));
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [db,e,a,v], null)], null),posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where))));
} else {
throw cljs.core.match.backtrack;

}
}catch (e38230){if((e38230 instanceof Error)){
var e__37299__auto__ = e38230;
if((e__37299__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto__;
}
} else {
throw e38230;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38229){if((e38229 instanceof Error)){
var e__37299__auto__ = e38229;
if((e__37299__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto__;
}
} else {
throw e38229;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38228){if((e38228 instanceof Error)){
var e__37299__auto__ = e38228;
if((e__37299__auto__ === cljs.core.match.backtrack)){
return posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where)));
} else {
throw e__37299__auto__;
}
} else {
throw e38228;

}
}} else {
return posh.lib.q_analyze.get_eavs.call(null,cljs.core.vec.call(null,cljs.core.rest.call(null,where)));

}
}
}
}
});
posh.lib.q_analyze.qm_to_query = (function posh$lib$q_analyze$qm_to_query(qm){
return cljs.core.reduce.call(null,(function (xs,p__38235){
var vec__38236 = p__38235;
var k = cljs.core.nth.call(null,vec__38236,(0),null);
var v = cljs.core.nth.call(null,vec__38236,(1),null);
return cljs.core.concat.call(null,xs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),v);
}),cljs.core.PersistentVector.EMPTY,qm);
});
posh.lib.q_analyze.create_q_datoms = (function posh$lib$q_analyze$create_q_datoms(results,eavs,vars){
return cljs.core.set.call(null,cljs.core.mapcat.call(null,(function (r){
var vs = cljs.core.zipmap.call(null,vars,r);
return cljs.core.map.call(null,((function (vs){
return (function (eav){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (vs){
return (function (p1__38239_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,p1__38239_SHARP_))){
return cljs.core.get.call(null,vs,p1__38239_SHARP_);
} else {
return p1__38239_SHARP_;
}
});})(vs))
,eav));
});})(vs))
,eavs);
}),results));
});
posh.lib.q_analyze.count_qvars = (function posh$lib$q_analyze$count_qvars(xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.coll_QMARK_.call(null,cljs.core.first.call(null,xs))){
return cljs.core.merge_with.call(null,cljs.core._PLUS_,posh.lib.q_analyze.count_qvars.call(null,cljs.core.first.call(null,xs)),posh.lib.q_analyze.count_qvars.call(null,cljs.core.rest.call(null,xs)));
} else {
return cljs.core.merge_with.call(null,cljs.core._PLUS_,(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,cljs.core.first.call(null,xs)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,xs),(1)]):null),posh.lib.q_analyze.count_qvars.call(null,cljs.core.rest.call(null,xs)));

}
}
});
posh.lib.q_analyze.fill_qvar_set = (function posh$lib$q_analyze$fill_qvar_set(qvar,results,where){
var iter__29611__auto__ = (function posh$lib$q_analyze$fill_qvar_set_$_iter__38244(s__38245){
return (new cljs.core.LazySeq(null,(function (){
var s__38245__$1 = s__38245;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__38245__$1);
if(temp__6738__auto__){
var s__38245__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38245__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__38245__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__38247 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__38246 = (0);
while(true){
if((i__38246 < size__29610__auto__)){
var r = cljs.core._nth.call(null,c__29609__auto__,i__38246);
cljs.core.chunk_append.call(null,b__38247,(function (){var vars = cljs.core.zipmap.call(null,where,r);
return cljs.core.get.call(null,vars,qvar);
})());

var G__38248 = (i__38246 + (1));
i__38246 = G__38248;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38247),posh$lib$q_analyze$fill_qvar_set_$_iter__38244.call(null,cljs.core.chunk_rest.call(null,s__38245__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38247),null);
}
} else {
var r = cljs.core.first.call(null,s__38245__$2);
return cljs.core.cons.call(null,(function (){var vars = cljs.core.zipmap.call(null,where,r);
return cljs.core.get.call(null,vars,qvar);
})(),posh$lib$q_analyze$fill_qvar_set_$_iter__38244.call(null,cljs.core.rest.call(null,s__38245__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29611__auto__.call(null,results);
});
posh.lib.q_analyze.seq_merge_with = (function posh$lib$q_analyze$seq_merge_with(f,seq1,seq2){
if(cljs.core.empty_QMARK_.call(null,seq1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,seq1),cljs.core.first.call(null,seq2)),posh.lib.q_analyze.seq_merge_with.call(null,f,cljs.core.rest.call(null,seq1),cljs.core.rest.call(null,seq2)));
}
});
posh.lib.q_analyze.stack_vectors = (function posh$lib$q_analyze$stack_vectors(vs){
return cljs.core.reduce.call(null,(function (stacked,eav){
return posh.lib.q_analyze.seq_merge_with.call(null,cljs.core.conj,stacked,eav);
}),cljs.core.take.call(null,cljs.core.count.call(null,cljs.core.first.call(null,vs)),cljs.core.repeat.call(null,cljs.core.PersistentHashSet.EMPTY)),vs);
});
posh.lib.q_analyze.pattern_from_eav__old = (function posh$lib$q_analyze$pattern_from_eav__old(vars,p__38251){
var vec__38330 = p__38251;
var e = cljs.core.nth.call(null,vec__38330,(0),null);
var a = cljs.core.nth.call(null,vec__38330,(1),null);
var v = cljs.core.nth.call(null,vec__38330,(2),null);
var eav = vec__38330;
var vec__38333 = cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav);
var qe = cljs.core.nth.call(null,vec__38333,(0),null);
var qa = cljs.core.nth.call(null,vec__38333,(1),null);
var qv = cljs.core.nth.call(null,vec__38333,(2),null);
var iter__29611__auto__ = ((function (vec__38333,qe,qa,qv,vec__38330,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__38336(s__38337){
return (new cljs.core.LazySeq(null,((function (vec__38333,qe,qa,qv,vec__38330,e,a,v,eav){
return (function (){
var s__38337__$1 = s__38337;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__38337__$1);
if(temp__6738__auto__){
var xs__7294__auto__ = temp__6738__auto__;
var ee = cljs.core.first.call(null,xs__7294__auto__);
var iterys__29607__auto__ = ((function (s__38337__$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__38336_$_iter__38338(s__38339){
return (new cljs.core.LazySeq(null,((function (s__38337__$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav){
return (function (){
var s__38339__$1 = s__38339;
while(true){
var temp__6738__auto____$1 = cljs.core.seq.call(null,s__38339__$1);
if(temp__6738__auto____$1){
var xs__7294__auto____$1 = temp__6738__auto____$1;
var aa = cljs.core.first.call(null,xs__7294__auto____$1);
var iterys__29607__auto__ = ((function (s__38339__$1,s__38337__$1,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav){
return (function posh$lib$q_analyze$pattern_from_eav__old_$_iter__38336_$_iter__38338_$_iter__38340(s__38341){
return (new cljs.core.LazySeq(null,((function (s__38339__$1,s__38337__$1,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav){
return (function (){
var s__38341__$1 = s__38341;
while(true){
var temp__6738__auto____$2 = cljs.core.seq.call(null,s__38341__$1);
if(temp__6738__auto____$2){
var s__38341__$2 = temp__6738__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38341__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__38341__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__38343 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__38342 = (0);
while(true){
if((i__38342 < size__29610__auto__)){
var vv = cljs.core._nth.call(null,c__29609__auto__,i__38342);
if((function (){var wildcard_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__38342,s__38341__$1,s__38339__$1,s__38337__$1,vv,c__29609__auto__,size__29610__auto__,b__38343,s__38341__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav){
return (function (p1__38249_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__38249_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__38342,s__38341__$1,s__38339__$1,s__38337__$1,vv,c__29609__auto__,size__29610__auto__,b__38343,s__38341__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__38342,s__38341__$1,s__38339__$1,s__38337__$1,wildcard_count,vv,c__29609__auto__,size__29610__auto__,b__38343,s__38341__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav){
return (function (p__38400){
var vec__38401 = p__38400;
var var_QMARK_ = cljs.core.nth.call(null,vec__38401,(0),null);
var val = cljs.core.nth.call(null,vec__38401,(1),null);
if(cljs.core.truth_((function (){var and__28737__auto__ = var_QMARK_;
if(cljs.core.truth_(and__28737__auto__)){
return cljs.core.not_EQ_.call(null,val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__28737__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(i__38342,s__38341__$1,s__38339__$1,s__38337__$1,wildcard_count,vv,c__29609__auto__,size__29610__auto__,b__38343,s__38341__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (i__38342,s__38341__$1,s__38339__$1,s__38337__$1,wildcard_count,exposed_qvars,vv,c__29609__auto__,size__29610__auto__,b__38343,s__38341__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav){
return (function (p1__38250_SHARP_){
if(cljs.core.truth_(p1__38250_SHARP_)){
return (1);
} else {
return (0);
}
});})(i__38342,s__38341__$1,s__38339__$1,s__38337__$1,wildcard_count,exposed_qvars,vv,c__29609__auto__,size__29610__auto__,b__38343,s__38341__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return ((wildcard_count >= (1))) && ((((qvar_count > (1))) && (cljs.core._EQ_.call(null,(1),exposed_qvars))) || ((qvar_count <= (1)))) && ((wildcard_count <= qvar_count));
})()){
cljs.core.chunk_append.call(null,b__38343,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null));

var G__38408 = (i__38342 + (1));
i__38342 = G__38408;
continue;
} else {
var G__38409 = (i__38342 + (1));
i__38342 = G__38409;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38343),posh$lib$q_analyze$pattern_from_eav__old_$_iter__38336_$_iter__38338_$_iter__38340.call(null,cljs.core.chunk_rest.call(null,s__38341__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38343),null);
}
} else {
var vv = cljs.core.first.call(null,s__38341__$2);
if((function (){var wildcard_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__38341__$1,s__38339__$1,s__38337__$1,vv,s__38341__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav){
return (function (p1__38249_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),p1__38249_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__38341__$1,s__38339__$1,s__38337__$1,vv,s__38341__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null)));
var exposed_qvars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__38341__$1,s__38339__$1,s__38337__$1,wildcard_count,vv,s__38341__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav){
return (function (p__38404){
var vec__38405 = p__38404;
var var_QMARK_ = cljs.core.nth.call(null,vec__38405,(0),null);
var val = cljs.core.nth.call(null,vec__38405,(1),null);
if(cljs.core.truth_((function (){var and__28737__auto__ = var_QMARK_;
if(cljs.core.truth_(and__28737__auto__)){
return cljs.core.not_EQ_.call(null,val,new cljs.core.Symbol(null,"_","_",-1201019570,null));
} else {
return and__28737__auto__;
}
})())){
return (1);
} else {
return (0);
}
});})(s__38341__$1,s__38339__$1,s__38337__$1,wildcard_count,vv,s__38341__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,ee], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qa,aa], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [qv,vv], null)], null)));
var qvar_count = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (s__38341__$1,s__38339__$1,s__38337__$1,wildcard_count,exposed_qvars,vv,s__38341__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav){
return (function (p1__38250_SHARP_){
if(cljs.core.truth_(p1__38250_SHARP_)){
return (1);
} else {
return (0);
}
});})(s__38341__$1,s__38339__$1,s__38337__$1,wildcard_count,exposed_qvars,vv,s__38341__$2,temp__6738__auto____$2,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [qe,qa,qv], null)));
return ((wildcard_count >= (1))) && ((((qvar_count > (1))) && (cljs.core._EQ_.call(null,(1),exposed_qvars))) || ((qvar_count <= (1)))) && ((wildcard_count <= qvar_count));
})()){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ee,aa,vv], null),posh$lib$q_analyze$pattern_from_eav__old_$_iter__38336_$_iter__38338_$_iter__38340.call(null,cljs.core.rest.call(null,s__38341__$2)));
} else {
var G__38410 = cljs.core.rest.call(null,s__38341__$2);
s__38341__$1 = G__38410;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__38339__$1,s__38337__$1,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav))
,null,null));
});})(s__38339__$1,s__38337__$1,aa,xs__7294__auto____$1,temp__6738__auto____$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav))
;
var fs__29608__auto__ = cljs.core.seq.call(null,iterys__29607__auto__.call(null,(cljs.core.truth_(qv)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,v)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null))));
if(fs__29608__auto__){
return cljs.core.concat.call(null,fs__29608__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__38336_$_iter__38338.call(null,cljs.core.rest.call(null,s__38339__$1)));
} else {
var G__38411 = cljs.core.rest.call(null,s__38339__$1);
s__38339__$1 = G__38411;
continue;
}
} else {
return null;
}
break;
}
});})(s__38337__$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav))
,null,null));
});})(s__38337__$1,ee,xs__7294__auto__,temp__6738__auto__,vec__38333,qe,qa,qv,vec__38330,e,a,v,eav))
;
var fs__29608__auto__ = cljs.core.seq.call(null,iterys__29607__auto__.call(null,(cljs.core.truth_(qa)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,a)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null))));
if(fs__29608__auto__){
return cljs.core.concat.call(null,fs__29608__auto__,posh$lib$q_analyze$pattern_from_eav__old_$_iter__38336.call(null,cljs.core.rest.call(null,s__38337__$1)));
} else {
var G__38412 = cljs.core.rest.call(null,s__38337__$1);
s__38337__$1 = G__38412;
continue;
}
} else {
return null;
}
break;
}
});})(vec__38333,qe,qa,qv,vec__38330,e,a,v,eav))
,null,null));
});})(vec__38333,qe,qa,qv,vec__38330,e,a,v,eav))
;
return iter__29611__auto__.call(null,(cljs.core.truth_(qe)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),cljs.core.get.call(null,vars,e)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null)));
});
posh.lib.q_analyze.get_ = (function posh$lib$q_analyze$get_(m,k){

var or__28749__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
}
});
posh.lib.q_analyze.pattern_from_eav = (function posh$lib$q_analyze$pattern_from_eav(vars,eav){
var ocr_38522 = cljs.core.vec.call(null,eav);
var ocr_38523 = cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav));
try{if((cljs.core.vector_QMARK_.call(null,ocr_38522)) && ((cljs.core.count.call(null,ocr_38522) === 3))){
try{var ocr_38522_0__38551 = cljs.core.nth.call(null,ocr_38522,(0));
if(cljs.core._EQ_.call(null,ocr_38522_0__38551,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_38522_1__38552 = cljs.core.nth.call(null,ocr_38522,(1));
if(cljs.core._EQ_.call(null,ocr_38522_1__38552,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_38522_2__38553 = cljs.core.nth.call(null,ocr_38522,(2));
if(cljs.core._EQ_.call(null,ocr_38522_2__38553,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38627){if((e38627 instanceof Error)){
var e__37299__auto__ = e38627;
if((e__37299__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_38523)) && ((cljs.core.count.call(null,ocr_38523) === 3))){
try{var ocr_38523_2__38556 = cljs.core.nth.call(null,ocr_38523,(2));
if((ocr_38523_2__38556 === false)){
var v = cljs.core.nth.call(null,ocr_38522,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38629){if((e38629 instanceof Error)){
var e__37299__auto____$1 = e38629;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_38523_2__38556 = cljs.core.nth.call(null,ocr_38523,(2));
if((ocr_38523_2__38556 === true)){
var v = cljs.core.nth.call(null,ocr_38522,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38630){if((e38630 instanceof Error)){
var e__37299__auto____$2 = e38630;
if((e__37299__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$2;
}
} else {
throw e38630;

}
}} else {
throw e__37299__auto____$1;
}
} else {
throw e38629;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38628){if((e38628 instanceof Error)){
var e__37299__auto____$1 = e38628;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$1;
}
} else {
throw e38628;

}
}} else {
throw e__37299__auto__;
}
} else {
throw e38627;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38622){if((e38622 instanceof Error)){
var e__37299__auto__ = e38622;
if((e__37299__auto__ === cljs.core.match.backtrack)){
try{var ocr_38522_2__38553 = cljs.core.nth.call(null,ocr_38522,(2));
if(cljs.core._EQ_.call(null,ocr_38522_2__38553,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if((cljs.core.vector_QMARK_.call(null,ocr_38523)) && ((cljs.core.count.call(null,ocr_38523) === 3))){
try{var ocr_38523_1__38558 = cljs.core.nth.call(null,ocr_38523,(1));
if((ocr_38523_1__38558 === false)){
var a = cljs.core.nth.call(null,ocr_38522,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38625){if((e38625 instanceof Error)){
var e__37299__auto____$1 = e38625;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_38523_1__38558 = cljs.core.nth.call(null,ocr_38523,(1));
if((ocr_38523_1__38558 === true)){
var a = cljs.core.nth.call(null,ocr_38522,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38626){if((e38626 instanceof Error)){
var e__37299__auto____$2 = e38626;
if((e__37299__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$2;
}
} else {
throw e38626;

}
}} else {
throw e__37299__auto____$1;
}
} else {
throw e38625;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38624){if((e38624 instanceof Error)){
var e__37299__auto____$1 = e38624;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$1;
}
} else {
throw e38624;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38623){if((e38623 instanceof Error)){
var e__37299__auto____$1 = e38623;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$1;
}
} else {
throw e38623;

}
}} else {
throw e__37299__auto__;
}
} else {
throw e38622;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38564){if((e38564 instanceof Error)){
var e__37299__auto__ = e38564;
if((e__37299__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_38523)) && ((cljs.core.count.call(null,ocr_38523) === 3))){
try{var ocr_38523_0__38560 = cljs.core.nth.call(null,ocr_38523,(0));
if((ocr_38523_0__38560 === false)){
try{var ocr_38522_1__38552 = cljs.core.nth.call(null,ocr_38522,(1));
if(cljs.core._EQ_.call(null,ocr_38522_1__38552,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_38522_2__38553 = cljs.core.nth.call(null,ocr_38522,(2));
if(cljs.core._EQ_.call(null,ocr_38522_2__38553,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_38522,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38621){if((e38621 instanceof Error)){
var e__37299__auto____$1 = e38621;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$1;
}
} else {
throw e38621;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38620){if((e38620 instanceof Error)){
var e__37299__auto____$1 = e38620;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$1;
}
} else {
throw e38620;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38566){if((e38566 instanceof Error)){
var e__37299__auto____$1 = e38566;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_38523_0__38560 = cljs.core.nth.call(null,ocr_38523,(0));
if((ocr_38523_0__38560 === true)){
try{var ocr_38522_2__38553 = cljs.core.nth.call(null,ocr_38522,(2));
if(cljs.core._EQ_.call(null,ocr_38522_2__38553,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_38522_1__38552 = cljs.core.nth.call(null,ocr_38522,(1));
if(cljs.core._EQ_.call(null,ocr_38522_1__38552,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_38522,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38617){if((e38617 instanceof Error)){
var e__37299__auto____$2 = e38617;
if((e__37299__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_38523_1__38561 = cljs.core.nth.call(null,ocr_38523,(1));
if((ocr_38523_1__38561 === true)){
var a = cljs.core.nth.call(null,ocr_38522,(1));
var e = cljs.core.nth.call(null,ocr_38522,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38618){if((e38618 instanceof Error)){
var e__37299__auto____$3 = e38618;
if((e__37299__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_38523_1__38561 = cljs.core.nth.call(null,ocr_38523,(1));
if((ocr_38523_1__38561 === false)){
var a = cljs.core.nth.call(null,ocr_38522,(1));
var e = cljs.core.nth.call(null,ocr_38522,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38619){if((e38619 instanceof Error)){
var e__37299__auto____$4 = e38619;
if((e__37299__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$4;
}
} else {
throw e38619;

}
}} else {
throw e__37299__auto____$3;
}
} else {
throw e38618;

}
}} else {
throw e__37299__auto____$2;
}
} else {
throw e38617;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38616){if((e38616 instanceof Error)){
var e__37299__auto____$2 = e38616;
if((e__37299__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$2;
}
} else {
throw e38616;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38567){if((e38567 instanceof Error)){
var e__37299__auto____$2 = e38567;
if((e__37299__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_38523_0__38560 = cljs.core.nth.call(null,ocr_38523,(0));
if((ocr_38523_0__38560 === false)){
try{var ocr_38523_1__38561 = cljs.core.nth.call(null,ocr_38523,(1));
if((ocr_38523_1__38561 === true)){
try{var ocr_38522_2__38553 = cljs.core.nth.call(null,ocr_38522,(2));
if(cljs.core._EQ_.call(null,ocr_38522_2__38553,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_38522,(0));
var a = cljs.core.nth.call(null,ocr_38522,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38615){if((e38615 instanceof Error)){
var e__37299__auto____$3 = e38615;
if((e__37299__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$3;
}
} else {
throw e38615;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38612){if((e38612 instanceof Error)){
var e__37299__auto____$3 = e38612;
if((e__37299__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_38523_1__38561 = cljs.core.nth.call(null,ocr_38523,(1));
if((ocr_38523_1__38561 === false)){
try{var ocr_38522_2__38553 = cljs.core.nth.call(null,ocr_38522,(2));
if(cljs.core._EQ_.call(null,ocr_38522_2__38553,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_38522,(0));
var a = cljs.core.nth.call(null,ocr_38522,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38614){if((e38614 instanceof Error)){
var e__37299__auto____$4 = e38614;
if((e__37299__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$4;
}
} else {
throw e38614;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38613){if((e38613 instanceof Error)){
var e__37299__auto____$4 = e38613;
if((e__37299__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$4;
}
} else {
throw e38613;

}
}} else {
throw e__37299__auto____$3;
}
} else {
throw e38612;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38568){if((e38568 instanceof Error)){
var e__37299__auto____$3 = e38568;
if((e__37299__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_38523_2__38562 = cljs.core.nth.call(null,ocr_38523,(2));
if((ocr_38523_2__38562 === true)){
try{var ocr_38523_0__38560 = cljs.core.nth.call(null,ocr_38523,(0));
if((ocr_38523_0__38560 === true)){
try{var ocr_38522_1__38552 = cljs.core.nth.call(null,ocr_38522,(1));
if(cljs.core._EQ_.call(null,ocr_38522_1__38552,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_38522,(0));
var v = cljs.core.nth.call(null,ocr_38522,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38611){if((e38611 instanceof Error)){
var e__37299__auto____$4 = e38611;
if((e__37299__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$4;
}
} else {
throw e38611;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38610){if((e38610 instanceof Error)){
var e__37299__auto____$4 = e38610;
if((e__37299__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$4;
}
} else {
throw e38610;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38569){if((e38569 instanceof Error)){
var e__37299__auto____$4 = e38569;
if((e__37299__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_38523_2__38562 = cljs.core.nth.call(null,ocr_38523,(2));
if((ocr_38523_2__38562 === false)){
try{var ocr_38523_0__38560 = cljs.core.nth.call(null,ocr_38523,(0));
if((ocr_38523_0__38560 === true)){
try{var ocr_38522_1__38552 = cljs.core.nth.call(null,ocr_38522,(1));
if(cljs.core._EQ_.call(null,ocr_38522_1__38552,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_38522,(0));
var v = cljs.core.nth.call(null,ocr_38522,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38609){if((e38609 instanceof Error)){
var e__37299__auto____$5 = e38609;
if((e__37299__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$5;
}
} else {
throw e38609;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38608){if((e38608 instanceof Error)){
var e__37299__auto____$5 = e38608;
if((e__37299__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$5;
}
} else {
throw e38608;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38570){if((e38570 instanceof Error)){
var e__37299__auto____$5 = e38570;
if((e__37299__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_38523_2__38562 = cljs.core.nth.call(null,ocr_38523,(2));
if((ocr_38523_2__38562 === true)){
try{var ocr_38523_0__38560 = cljs.core.nth.call(null,ocr_38523,(0));
if((ocr_38523_0__38560 === false)){
try{var ocr_38522_1__38552 = cljs.core.nth.call(null,ocr_38522,(1));
if(cljs.core._EQ_.call(null,ocr_38522_1__38552,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_38522,(0));
var v = cljs.core.nth.call(null,ocr_38522,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38607){if((e38607 instanceof Error)){
var e__37299__auto____$6 = e38607;
if((e__37299__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$6;
}
} else {
throw e38607;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38606){if((e38606 instanceof Error)){
var e__37299__auto____$6 = e38606;
if((e__37299__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$6;
}
} else {
throw e38606;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38571){if((e38571 instanceof Error)){
var e__37299__auto____$6 = e38571;
if((e__37299__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_38523_2__38562 = cljs.core.nth.call(null,ocr_38523,(2));
if((ocr_38523_2__38562 === false)){
try{var ocr_38523_0__38560 = cljs.core.nth.call(null,ocr_38523,(0));
if((ocr_38523_0__38560 === false)){
try{var ocr_38522_1__38552 = cljs.core.nth.call(null,ocr_38522,(1));
if(cljs.core._EQ_.call(null,ocr_38522_1__38552,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_38522,(0));
var v = cljs.core.nth.call(null,ocr_38522,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38605){if((e38605 instanceof Error)){
var e__37299__auto____$7 = e38605;
if((e__37299__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$7;
}
} else {
throw e38605;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38604){if((e38604 instanceof Error)){
var e__37299__auto____$7 = e38604;
if((e__37299__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$7;
}
} else {
throw e38604;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38572){if((e38572 instanceof Error)){
var e__37299__auto____$7 = e38572;
if((e__37299__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_38523_2__38562 = cljs.core.nth.call(null,ocr_38523,(2));
if((ocr_38523_2__38562 === true)){
try{var ocr_38523_1__38561 = cljs.core.nth.call(null,ocr_38523,(1));
if((ocr_38523_1__38561 === true)){
try{var ocr_38522_0__38551 = cljs.core.nth.call(null,ocr_38522,(0));
if(cljs.core._EQ_.call(null,ocr_38522_0__38551,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_38522,(1));
var v = cljs.core.nth.call(null,ocr_38522,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38603){if((e38603 instanceof Error)){
var e__37299__auto____$8 = e38603;
if((e__37299__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$8;
}
} else {
throw e38603;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38602){if((e38602 instanceof Error)){
var e__37299__auto____$8 = e38602;
if((e__37299__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$8;
}
} else {
throw e38602;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38573){if((e38573 instanceof Error)){
var e__37299__auto____$8 = e38573;
if((e__37299__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_38523_2__38562 = cljs.core.nth.call(null,ocr_38523,(2));
if((ocr_38523_2__38562 === false)){
try{var ocr_38523_1__38561 = cljs.core.nth.call(null,ocr_38523,(1));
if((ocr_38523_1__38561 === true)){
try{var ocr_38522_0__38551 = cljs.core.nth.call(null,ocr_38522,(0));
if(cljs.core._EQ_.call(null,ocr_38522_0__38551,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_38522,(1));
var v = cljs.core.nth.call(null,ocr_38522,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38601){if((e38601 instanceof Error)){
var e__37299__auto____$9 = e38601;
if((e__37299__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$9;
}
} else {
throw e38601;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38600){if((e38600 instanceof Error)){
var e__37299__auto____$9 = e38600;
if((e__37299__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$9;
}
} else {
throw e38600;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38574){if((e38574 instanceof Error)){
var e__37299__auto____$9 = e38574;
if((e__37299__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_38523_2__38562 = cljs.core.nth.call(null,ocr_38523,(2));
if((ocr_38523_2__38562 === true)){
try{var ocr_38523_1__38561 = cljs.core.nth.call(null,ocr_38523,(1));
if((ocr_38523_1__38561 === false)){
try{var ocr_38522_0__38551 = cljs.core.nth.call(null,ocr_38522,(0));
if(cljs.core._EQ_.call(null,ocr_38522_0__38551,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_38522,(1));
var v = cljs.core.nth.call(null,ocr_38522,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_.call(null,vars,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38599){if((e38599 instanceof Error)){
var e__37299__auto____$10 = e38599;
if((e__37299__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$10;
}
} else {
throw e38599;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38598){if((e38598 instanceof Error)){
var e__37299__auto____$10 = e38598;
if((e__37299__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$10;
}
} else {
throw e38598;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38575){if((e38575 instanceof Error)){
var e__37299__auto____$10 = e38575;
if((e__37299__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_38523_2__38562 = cljs.core.nth.call(null,ocr_38523,(2));
if((ocr_38523_2__38562 === false)){
try{var ocr_38523_1__38561 = cljs.core.nth.call(null,ocr_38523,(1));
if((ocr_38523_1__38561 === false)){
try{var ocr_38522_0__38551 = cljs.core.nth.call(null,ocr_38522,(0));
if(cljs.core._EQ_.call(null,ocr_38522_0__38551,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_38522,(1));
var v = cljs.core.nth.call(null,ocr_38522,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38597){if((e38597 instanceof Error)){
var e__37299__auto____$11 = e38597;
if((e__37299__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$11;
}
} else {
throw e38597;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38596){if((e38596 instanceof Error)){
var e__37299__auto____$11 = e38596;
if((e__37299__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$11;
}
} else {
throw e38596;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38576){if((e38576 instanceof Error)){
var e__37299__auto____$11 = e38576;
if((e__37299__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_38523_2__38562 = cljs.core.nth.call(null,ocr_38523,(2));
if((ocr_38523_2__38562 === true)){
try{var ocr_38523_0__38560 = cljs.core.nth.call(null,ocr_38523,(0));
if((ocr_38523_0__38560 === true)){
try{var ocr_38523_1__38561 = cljs.core.nth.call(null,ocr_38523,(1));
if((ocr_38523_1__38561 === true)){
var e = cljs.core.nth.call(null,ocr_38522,(0));
var a = cljs.core.nth.call(null,ocr_38522,(1));
var v = cljs.core.nth.call(null,ocr_38522,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38595){if((e38595 instanceof Error)){
var e__37299__auto____$12 = e38595;
if((e__37299__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$12;
}
} else {
throw e38595;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38590){if((e38590 instanceof Error)){
var e__37299__auto____$12 = e38590;
if((e__37299__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_38523_0__38560 = cljs.core.nth.call(null,ocr_38523,(0));
if((ocr_38523_0__38560 === false)){
try{var ocr_38523_1__38561 = cljs.core.nth.call(null,ocr_38523,(1));
if((ocr_38523_1__38561 === true)){
var e = cljs.core.nth.call(null,ocr_38522,(0));
var a = cljs.core.nth.call(null,ocr_38522,(1));
var v = cljs.core.nth.call(null,ocr_38522,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,posh.lib.q_analyze.get_.call(null,vars,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38594){if((e38594 instanceof Error)){
var e__37299__auto____$13 = e38594;
if((e__37299__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$13;
}
} else {
throw e38594;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38591){if((e38591 instanceof Error)){
var e__37299__auto____$13 = e38591;
if((e__37299__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_38523_0__38560 = cljs.core.nth.call(null,ocr_38523,(0));
if((ocr_38523_0__38560 === true)){
try{var ocr_38523_1__38561 = cljs.core.nth.call(null,ocr_38523,(1));
if((ocr_38523_1__38561 === false)){
var e = cljs.core.nth.call(null,ocr_38522,(0));
var a = cljs.core.nth.call(null,ocr_38522,(1));
var v = cljs.core.nth.call(null,ocr_38522,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,posh.lib.q_analyze.get_.call(null,vars,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38593){if((e38593 instanceof Error)){
var e__37299__auto____$14 = e38593;
if((e__37299__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$14;
}
} else {
throw e38593;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38592){if((e38592 instanceof Error)){
var e__37299__auto____$14 = e38592;
if((e__37299__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$14;
}
} else {
throw e38592;

}
}} else {
throw e__37299__auto____$13;
}
} else {
throw e38591;

}
}} else {
throw e__37299__auto____$12;
}
} else {
throw e38590;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38577){if((e38577 instanceof Error)){
var e__37299__auto____$12 = e38577;
if((e__37299__auto____$12 === cljs.core.match.backtrack)){
try{var ocr_38523_2__38562 = cljs.core.nth.call(null,ocr_38523,(2));
if((ocr_38523_2__38562 === false)){
try{var ocr_38523_0__38560 = cljs.core.nth.call(null,ocr_38523,(0));
if((ocr_38523_0__38560 === true)){
try{var ocr_38523_1__38561 = cljs.core.nth.call(null,ocr_38523,(1));
if((ocr_38523_1__38561 === true)){
var e = cljs.core.nth.call(null,ocr_38522,(0));
var a = cljs.core.nth.call(null,ocr_38522,(1));
var v = cljs.core.nth.call(null,ocr_38522,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),posh.lib.q_analyze.get_.call(null,vars,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [posh.lib.q_analyze.get_.call(null,vars,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38589){if((e38589 instanceof Error)){
var e__37299__auto____$13 = e38589;
if((e__37299__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$13;
}
} else {
throw e38589;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38588){if((e38588 instanceof Error)){
var e__37299__auto____$13 = e38588;
if((e__37299__auto____$13 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$13;
}
} else {
throw e38588;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38578){if((e38578 instanceof Error)){
var e__37299__auto____$13 = e38578;
if((e__37299__auto____$13 === cljs.core.match.backtrack)){
try{var ocr_38523_2__38562 = cljs.core.nth.call(null,ocr_38523,(2));
if((ocr_38523_2__38562 === true)){
try{var ocr_38523_0__38560 = cljs.core.nth.call(null,ocr_38523,(0));
if((ocr_38523_0__38560 === false)){
try{var ocr_38523_1__38561 = cljs.core.nth.call(null,ocr_38523,(1));
if((ocr_38523_1__38561 === false)){
var e = cljs.core.nth.call(null,ocr_38522,(0));
var a = cljs.core.nth.call(null,ocr_38522,(1));
var v = cljs.core.nth.call(null,ocr_38522,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38587){if((e38587 instanceof Error)){
var e__37299__auto____$14 = e38587;
if((e__37299__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$14;
}
} else {
throw e38587;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38586){if((e38586 instanceof Error)){
var e__37299__auto____$14 = e38586;
if((e__37299__auto____$14 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$14;
}
} else {
throw e38586;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38579){if((e38579 instanceof Error)){
var e__37299__auto____$14 = e38579;
if((e__37299__auto____$14 === cljs.core.match.backtrack)){
try{var ocr_38523_2__38562 = cljs.core.nth.call(null,ocr_38523,(2));
if((ocr_38523_2__38562 === false)){
try{var ocr_38523_0__38560 = cljs.core.nth.call(null,ocr_38523,(0));
if((ocr_38523_0__38560 === true)){
try{var ocr_38523_1__38561 = cljs.core.nth.call(null,ocr_38523,(1));
if((ocr_38523_1__38561 === false)){
var e = cljs.core.nth.call(null,ocr_38522,(0));
var a = cljs.core.nth.call(null,ocr_38522,(1));
var v = cljs.core.nth.call(null,ocr_38522,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38585){if((e38585 instanceof Error)){
var e__37299__auto____$15 = e38585;
if((e__37299__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$15;
}
} else {
throw e38585;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38581){if((e38581 instanceof Error)){
var e__37299__auto____$15 = e38581;
if((e__37299__auto____$15 === cljs.core.match.backtrack)){
try{var ocr_38523_0__38560 = cljs.core.nth.call(null,ocr_38523,(0));
if((ocr_38523_0__38560 === false)){
try{var ocr_38523_1__38561 = cljs.core.nth.call(null,ocr_38523,(1));
if((ocr_38523_1__38561 === true)){
var e = cljs.core.nth.call(null,ocr_38522,(0));
var a = cljs.core.nth.call(null,ocr_38522,(1));
var v = cljs.core.nth.call(null,ocr_38522,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38583){if((e38583 instanceof Error)){
var e__37299__auto____$16 = e38583;
if((e__37299__auto____$16 === cljs.core.match.backtrack)){
try{var ocr_38523_1__38561 = cljs.core.nth.call(null,ocr_38523,(1));
if((ocr_38523_1__38561 === false)){
var e = cljs.core.nth.call(null,ocr_38522,(0));
var a = cljs.core.nth.call(null,ocr_38522,(1));
var v = cljs.core.nth.call(null,ocr_38522,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38584){if((e38584 instanceof Error)){
var e__37299__auto____$17 = e38584;
if((e__37299__auto____$17 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$17;
}
} else {
throw e38584;

}
}} else {
throw e__37299__auto____$16;
}
} else {
throw e38583;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38582){if((e38582 instanceof Error)){
var e__37299__auto____$16 = e38582;
if((e__37299__auto____$16 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$16;
}
} else {
throw e38582;

}
}} else {
throw e__37299__auto____$15;
}
} else {
throw e38581;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38580){if((e38580 instanceof Error)){
var e__37299__auto____$15 = e38580;
if((e__37299__auto____$15 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$15;
}
} else {
throw e38580;

}
}} else {
throw e__37299__auto____$14;
}
} else {
throw e38579;

}
}} else {
throw e__37299__auto____$13;
}
} else {
throw e38578;

}
}} else {
throw e__37299__auto____$12;
}
} else {
throw e38577;

}
}} else {
throw e__37299__auto____$11;
}
} else {
throw e38576;

}
}} else {
throw e__37299__auto____$10;
}
} else {
throw e38575;

}
}} else {
throw e__37299__auto____$9;
}
} else {
throw e38574;

}
}} else {
throw e__37299__auto____$8;
}
} else {
throw e38573;

}
}} else {
throw e__37299__auto____$7;
}
} else {
throw e38572;

}
}} else {
throw e__37299__auto____$6;
}
} else {
throw e38571;

}
}} else {
throw e__37299__auto____$5;
}
} else {
throw e38570;

}
}} else {
throw e__37299__auto____$4;
}
} else {
throw e38569;

}
}} else {
throw e__37299__auto____$3;
}
} else {
throw e38568;

}
}} else {
throw e__37299__auto____$2;
}
} else {
throw e38567;

}
}} else {
throw e__37299__auto____$1;
}
} else {
throw e38566;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38565){if((e38565 instanceof Error)){
var e__37299__auto____$1 = e38565;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$1;
}
} else {
throw e38565;

}
}} else {
throw e__37299__auto__;
}
} else {
throw e38564;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38563){if((e38563 instanceof Error)){
var e__37299__auto__ = e38563;
if((e__37299__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__37299__auto__;
}
} else {
throw e38563;

}
}});
posh.lib.q_analyze.filter_pattern_from_eav = (function posh$lib$q_analyze$filter_pattern_from_eav(vars,eav){
var ocr_38725 = cljs.core.vec.call(null,eav);
var ocr_38726 = cljs.core.vec.call(null,cljs.core.map.call(null,posh.lib.q_analyze.qvar_QMARK_,eav));
try{if((cljs.core.vector_QMARK_.call(null,ocr_38725)) && ((cljs.core.count.call(null,ocr_38725) === 3))){
try{var ocr_38725_0__38751 = cljs.core.nth.call(null,ocr_38725,(0));
if(cljs.core._EQ_.call(null,ocr_38725_0__38751,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_38725_1__38752 = cljs.core.nth.call(null,ocr_38725,(1));
if(cljs.core._EQ_.call(null,ocr_38725_1__38752,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_38725_2__38753 = cljs.core.nth.call(null,ocr_38725,(2));
if(cljs.core._EQ_.call(null,ocr_38725_2__38753,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return cljs.core.PersistentVector.EMPTY;
} else {
throw cljs.core.match.backtrack;

}
}catch (e38815){if((e38815 instanceof Error)){
var e__37299__auto__ = e38815;
if((e__37299__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_38726)) && ((cljs.core.count.call(null,ocr_38726) === 3))){
try{var ocr_38726_2__38756 = cljs.core.nth.call(null,ocr_38726,(2));
if((ocr_38726_2__38756 === false)){
var v = cljs.core.nth.call(null,ocr_38725,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38817){if((e38817 instanceof Error)){
var e__37299__auto____$1 = e38817;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_38726_2__38756 = cljs.core.nth.call(null,ocr_38726,(2));
if((ocr_38726_2__38756 === true)){
var v = cljs.core.nth.call(null,ocr_38725,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38818){if((e38818 instanceof Error)){
var e__37299__auto____$2 = e38818;
if((e__37299__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$2;
}
} else {
throw e38818;

}
}} else {
throw e__37299__auto____$1;
}
} else {
throw e38817;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38816){if((e38816 instanceof Error)){
var e__37299__auto____$1 = e38816;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$1;
}
} else {
throw e38816;

}
}} else {
throw e__37299__auto__;
}
} else {
throw e38815;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38810){if((e38810 instanceof Error)){
var e__37299__auto__ = e38810;
if((e__37299__auto__ === cljs.core.match.backtrack)){
try{var ocr_38725_2__38753 = cljs.core.nth.call(null,ocr_38725,(2));
if(cljs.core._EQ_.call(null,ocr_38725_2__38753,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{if((cljs.core.vector_QMARK_.call(null,ocr_38726)) && ((cljs.core.count.call(null,ocr_38726) === 3))){
try{var ocr_38726_1__38758 = cljs.core.nth.call(null,ocr_38726,(1));
if((ocr_38726_1__38758 === false)){
var a = cljs.core.nth.call(null,ocr_38725,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38813){if((e38813 instanceof Error)){
var e__37299__auto____$1 = e38813;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_38726_1__38758 = cljs.core.nth.call(null,ocr_38726,(1));
if((ocr_38726_1__38758 === true)){
var a = cljs.core.nth.call(null,ocr_38725,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38814){if((e38814 instanceof Error)){
var e__37299__auto____$2 = e38814;
if((e__37299__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$2;
}
} else {
throw e38814;

}
}} else {
throw e__37299__auto____$1;
}
} else {
throw e38813;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38812){if((e38812 instanceof Error)){
var e__37299__auto____$1 = e38812;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$1;
}
} else {
throw e38812;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38811){if((e38811 instanceof Error)){
var e__37299__auto____$1 = e38811;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$1;
}
} else {
throw e38811;

}
}} else {
throw e__37299__auto__;
}
} else {
throw e38810;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38764){if((e38764 instanceof Error)){
var e__37299__auto__ = e38764;
if((e__37299__auto__ === cljs.core.match.backtrack)){
try{if((cljs.core.vector_QMARK_.call(null,ocr_38726)) && ((cljs.core.count.call(null,ocr_38726) === 3))){
try{var ocr_38726_0__38760 = cljs.core.nth.call(null,ocr_38726,(0));
if((ocr_38726_0__38760 === false)){
try{var ocr_38725_1__38752 = cljs.core.nth.call(null,ocr_38725,(1));
if(cljs.core._EQ_.call(null,ocr_38725_1__38752,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_38725_2__38753 = cljs.core.nth.call(null,ocr_38725,(2));
if(cljs.core._EQ_.call(null,ocr_38725_2__38753,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_38725,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38809){if((e38809 instanceof Error)){
var e__37299__auto____$1 = e38809;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$1;
}
} else {
throw e38809;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38808){if((e38808 instanceof Error)){
var e__37299__auto____$1 = e38808;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$1;
}
} else {
throw e38808;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38766){if((e38766 instanceof Error)){
var e__37299__auto____$1 = e38766;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
try{var ocr_38726_0__38760 = cljs.core.nth.call(null,ocr_38726,(0));
if((ocr_38726_0__38760 === true)){
try{var ocr_38725_2__38753 = cljs.core.nth.call(null,ocr_38725,(2));
if(cljs.core._EQ_.call(null,ocr_38725_2__38753,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
try{var ocr_38725_1__38752 = cljs.core.nth.call(null,ocr_38725,(1));
if(cljs.core._EQ_.call(null,ocr_38725_1__38752,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_38725,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38805){if((e38805 instanceof Error)){
var e__37299__auto____$2 = e38805;
if((e__37299__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_38726_1__38761 = cljs.core.nth.call(null,ocr_38726,(1));
if((ocr_38726_1__38761 === true)){
var a = cljs.core.nth.call(null,ocr_38725,(1));
var e = cljs.core.nth.call(null,ocr_38725,(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38806){if((e38806 instanceof Error)){
var e__37299__auto____$3 = e38806;
if((e__37299__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_38726_1__38761 = cljs.core.nth.call(null,ocr_38726,(1));
if((ocr_38726_1__38761 === false)){
var a = cljs.core.nth.call(null,ocr_38725,(1));
var e = cljs.core.nth.call(null,ocr_38725,(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38807){if((e38807 instanceof Error)){
var e__37299__auto____$4 = e38807;
if((e__37299__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$4;
}
} else {
throw e38807;

}
}} else {
throw e__37299__auto____$3;
}
} else {
throw e38806;

}
}} else {
throw e__37299__auto____$2;
}
} else {
throw e38805;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38804){if((e38804 instanceof Error)){
var e__37299__auto____$2 = e38804;
if((e__37299__auto____$2 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$2;
}
} else {
throw e38804;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38767){if((e38767 instanceof Error)){
var e__37299__auto____$2 = e38767;
if((e__37299__auto____$2 === cljs.core.match.backtrack)){
try{var ocr_38726_0__38760 = cljs.core.nth.call(null,ocr_38726,(0));
if((ocr_38726_0__38760 === false)){
try{var ocr_38726_1__38761 = cljs.core.nth.call(null,ocr_38726,(1));
if((ocr_38726_1__38761 === true)){
try{var ocr_38725_2__38753 = cljs.core.nth.call(null,ocr_38725,(2));
if(cljs.core._EQ_.call(null,ocr_38725_2__38753,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_38725,(0));
var a = cljs.core.nth.call(null,ocr_38725,(1));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38803){if((e38803 instanceof Error)){
var e__37299__auto____$3 = e38803;
if((e__37299__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$3;
}
} else {
throw e38803;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38802){if((e38802 instanceof Error)){
var e__37299__auto____$3 = e38802;
if((e__37299__auto____$3 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$3;
}
} else {
throw e38802;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38768){if((e38768 instanceof Error)){
var e__37299__auto____$3 = e38768;
if((e__37299__auto____$3 === cljs.core.match.backtrack)){
try{var ocr_38726_2__38762 = cljs.core.nth.call(null,ocr_38726,(2));
if((ocr_38726_2__38762 === true)){
try{var ocr_38726_0__38760 = cljs.core.nth.call(null,ocr_38726,(0));
if((ocr_38726_0__38760 === true)){
try{var ocr_38725_1__38752 = cljs.core.nth.call(null,ocr_38725,(1));
if(cljs.core._EQ_.call(null,ocr_38725_1__38752,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_38725,(0));
var v = cljs.core.nth.call(null,ocr_38725,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38801){if((e38801 instanceof Error)){
var e__37299__auto____$4 = e38801;
if((e__37299__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$4;
}
} else {
throw e38801;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38800){if((e38800 instanceof Error)){
var e__37299__auto____$4 = e38800;
if((e__37299__auto____$4 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$4;
}
} else {
throw e38800;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38769){if((e38769 instanceof Error)){
var e__37299__auto____$4 = e38769;
if((e__37299__auto____$4 === cljs.core.match.backtrack)){
try{var ocr_38726_2__38762 = cljs.core.nth.call(null,ocr_38726,(2));
if((ocr_38726_2__38762 === false)){
try{var ocr_38726_0__38760 = cljs.core.nth.call(null,ocr_38726,(0));
if((ocr_38726_0__38760 === true)){
try{var ocr_38725_1__38752 = cljs.core.nth.call(null,ocr_38725,(1));
if(cljs.core._EQ_.call(null,ocr_38725_1__38752,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_38725,(0));
var v = cljs.core.nth.call(null,ocr_38725,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38799){if((e38799 instanceof Error)){
var e__37299__auto____$5 = e38799;
if((e__37299__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$5;
}
} else {
throw e38799;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38798){if((e38798 instanceof Error)){
var e__37299__auto____$5 = e38798;
if((e__37299__auto____$5 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$5;
}
} else {
throw e38798;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38770){if((e38770 instanceof Error)){
var e__37299__auto____$5 = e38770;
if((e__37299__auto____$5 === cljs.core.match.backtrack)){
try{var ocr_38726_2__38762 = cljs.core.nth.call(null,ocr_38726,(2));
if((ocr_38726_2__38762 === true)){
try{var ocr_38726_0__38760 = cljs.core.nth.call(null,ocr_38726,(0));
if((ocr_38726_0__38760 === false)){
try{var ocr_38725_1__38752 = cljs.core.nth.call(null,ocr_38725,(1));
if(cljs.core._EQ_.call(null,ocr_38725_1__38752,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var e = cljs.core.nth.call(null,ocr_38725,(0));
var v = cljs.core.nth.call(null,ocr_38725,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38797){if((e38797 instanceof Error)){
var e__37299__auto____$6 = e38797;
if((e__37299__auto____$6 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$6;
}
} else {
throw e38797;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38794){if((e38794 instanceof Error)){
var e__37299__auto____$6 = e38794;
if((e__37299__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_38726_1__38761 = cljs.core.nth.call(null,ocr_38726,(1));
if((ocr_38726_1__38761 === true)){
try{var ocr_38725_0__38751 = cljs.core.nth.call(null,ocr_38725,(0));
if(cljs.core._EQ_.call(null,ocr_38725_0__38751,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_38725,(1));
var v = cljs.core.nth.call(null,ocr_38725,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38796){if((e38796 instanceof Error)){
var e__37299__auto____$7 = e38796;
if((e__37299__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$7;
}
} else {
throw e38796;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38795){if((e38795 instanceof Error)){
var e__37299__auto____$7 = e38795;
if((e__37299__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$7;
}
} else {
throw e38795;

}
}} else {
throw e__37299__auto____$6;
}
} else {
throw e38794;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38771){if((e38771 instanceof Error)){
var e__37299__auto____$6 = e38771;
if((e__37299__auto____$6 === cljs.core.match.backtrack)){
try{var ocr_38726_2__38762 = cljs.core.nth.call(null,ocr_38726,(2));
if((ocr_38726_2__38762 === false)){
try{var ocr_38726_1__38761 = cljs.core.nth.call(null,ocr_38726,(1));
if((ocr_38726_1__38761 === true)){
try{var ocr_38725_0__38751 = cljs.core.nth.call(null,ocr_38725,(0));
if(cljs.core._EQ_.call(null,ocr_38725_0__38751,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_38725,(1));
var v = cljs.core.nth.call(null,ocr_38725,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38793){if((e38793 instanceof Error)){
var e__37299__auto____$7 = e38793;
if((e__37299__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$7;
}
} else {
throw e38793;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38792){if((e38792 instanceof Error)){
var e__37299__auto____$7 = e38792;
if((e__37299__auto____$7 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$7;
}
} else {
throw e38792;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38772){if((e38772 instanceof Error)){
var e__37299__auto____$7 = e38772;
if((e__37299__auto____$7 === cljs.core.match.backtrack)){
try{var ocr_38726_2__38762 = cljs.core.nth.call(null,ocr_38726,(2));
if((ocr_38726_2__38762 === true)){
try{var ocr_38726_1__38761 = cljs.core.nth.call(null,ocr_38726,(1));
if((ocr_38726_1__38761 === false)){
try{var ocr_38725_0__38751 = cljs.core.nth.call(null,ocr_38725,(0));
if(cljs.core._EQ_.call(null,ocr_38725_0__38751,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
var a = cljs.core.nth.call(null,ocr_38725,(1));
var v = cljs.core.nth.call(null,ocr_38725,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,vars.call(null,v)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38791){if((e38791 instanceof Error)){
var e__37299__auto____$8 = e38791;
if((e__37299__auto____$8 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$8;
}
} else {
throw e38791;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38785){if((e38785 instanceof Error)){
var e__37299__auto____$8 = e38785;
if((e__37299__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_38726_1__38761 = cljs.core.nth.call(null,ocr_38726,(1));
if((ocr_38726_1__38761 === true)){
try{var ocr_38726_0__38760 = cljs.core.nth.call(null,ocr_38726,(0));
if((ocr_38726_0__38760 === true)){
var e = cljs.core.nth.call(null,ocr_38725,(0));
var a = cljs.core.nth.call(null,ocr_38725,(1));
var v = cljs.core.nth.call(null,ocr_38725,(2));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38789){if((e38789 instanceof Error)){
var e__37299__auto____$9 = e38789;
if((e__37299__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_38726_0__38760 = cljs.core.nth.call(null,ocr_38726,(0));
if((ocr_38726_0__38760 === false)){
var e = cljs.core.nth.call(null,ocr_38725,(0));
var a = cljs.core.nth.call(null,ocr_38725,(1));
var v = cljs.core.nth.call(null,ocr_38725,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,vars.call(null,a),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38790){if((e38790 instanceof Error)){
var e__37299__auto____$10 = e38790;
if((e__37299__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$10;
}
} else {
throw e38790;

}
}} else {
throw e__37299__auto____$9;
}
} else {
throw e38789;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38786){if((e38786 instanceof Error)){
var e__37299__auto____$9 = e38786;
if((e__37299__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_38726_1__38761 = cljs.core.nth.call(null,ocr_38726,(1));
if((ocr_38726_1__38761 === false)){
try{var ocr_38726_0__38760 = cljs.core.nth.call(null,ocr_38726,(0));
if((ocr_38726_0__38760 === true)){
var e = cljs.core.nth.call(null,ocr_38725,(0));
var a = cljs.core.nth.call(null,ocr_38725,(1));
var v = cljs.core.nth.call(null,ocr_38725,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,vars.call(null,v)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38788){if((e38788 instanceof Error)){
var e__37299__auto____$10 = e38788;
if((e__37299__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$10;
}
} else {
throw e38788;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38787){if((e38787 instanceof Error)){
var e__37299__auto____$10 = e38787;
if((e__37299__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$10;
}
} else {
throw e38787;

}
}} else {
throw e__37299__auto____$9;
}
} else {
throw e38786;

}
}} else {
throw e__37299__auto____$8;
}
} else {
throw e38785;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38773){if((e38773 instanceof Error)){
var e__37299__auto____$8 = e38773;
if((e__37299__auto____$8 === cljs.core.match.backtrack)){
try{var ocr_38726_2__38762 = cljs.core.nth.call(null,ocr_38726,(2));
if((ocr_38726_2__38762 === false)){
try{var ocr_38726_0__38760 = cljs.core.nth.call(null,ocr_38726,(0));
if((ocr_38726_0__38760 === true)){
try{var ocr_38726_1__38761 = cljs.core.nth.call(null,ocr_38726,(1));
if((ocr_38726_1__38761 === true)){
var e = cljs.core.nth.call(null,ocr_38725,(0));
var a = cljs.core.nth.call(null,ocr_38725,(1));
var v = cljs.core.nth.call(null,ocr_38725,(2));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),vars.call(null,a),v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars.call(null,e),new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38784){if((e38784 instanceof Error)){
var e__37299__auto____$9 = e38784;
if((e__37299__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$9;
}
} else {
throw e38784;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38783){if((e38783 instanceof Error)){
var e__37299__auto____$9 = e38783;
if((e__37299__auto____$9 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$9;
}
} else {
throw e38783;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38774){if((e38774 instanceof Error)){
var e__37299__auto____$9 = e38774;
if((e__37299__auto____$9 === cljs.core.match.backtrack)){
try{var ocr_38726_2__38762 = cljs.core.nth.call(null,ocr_38726,(2));
if((ocr_38726_2__38762 === true)){
try{var ocr_38726_0__38760 = cljs.core.nth.call(null,ocr_38726,(0));
if((ocr_38726_0__38760 === false)){
try{var ocr_38726_1__38761 = cljs.core.nth.call(null,ocr_38726,(1));
if((ocr_38726_1__38761 === false)){
var e = cljs.core.nth.call(null,ocr_38725,(0));
var a = cljs.core.nth.call(null,ocr_38725,(1));
var v = cljs.core.nth.call(null,ocr_38725,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38782){if((e38782 instanceof Error)){
var e__37299__auto____$10 = e38782;
if((e__37299__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$10;
}
} else {
throw e38782;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38781){if((e38781 instanceof Error)){
var e__37299__auto____$10 = e38781;
if((e__37299__auto____$10 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$10;
}
} else {
throw e38781;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38775){if((e38775 instanceof Error)){
var e__37299__auto____$10 = e38775;
if((e__37299__auto____$10 === cljs.core.match.backtrack)){
try{var ocr_38726_2__38762 = cljs.core.nth.call(null,ocr_38726,(2));
if((ocr_38726_2__38762 === false)){
try{var ocr_38726_0__38760 = cljs.core.nth.call(null,ocr_38726,(0));
if((ocr_38726_0__38760 === true)){
try{var ocr_38726_1__38761 = cljs.core.nth.call(null,ocr_38726,(1));
if((ocr_38726_1__38761 === false)){
var e = cljs.core.nth.call(null,ocr_38725,(0));
var a = cljs.core.nth.call(null,ocr_38725,(1));
var v = cljs.core.nth.call(null,ocr_38725,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38780){if((e38780 instanceof Error)){
var e__37299__auto____$11 = e38780;
if((e__37299__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$11;
}
} else {
throw e38780;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38777){if((e38777 instanceof Error)){
var e__37299__auto____$11 = e38777;
if((e__37299__auto____$11 === cljs.core.match.backtrack)){
try{var ocr_38726_0__38760 = cljs.core.nth.call(null,ocr_38726,(0));
if((ocr_38726_0__38760 === false)){
try{var ocr_38726_1__38761 = cljs.core.nth.call(null,ocr_38726,(1));
if((ocr_38726_1__38761 === true)){
var e = cljs.core.nth.call(null,ocr_38725,(0));
var a = cljs.core.nth.call(null,ocr_38725,(1));
var v = cljs.core.nth.call(null,ocr_38725,(2));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,new cljs.core.Symbol(null,"_","_",-1201019570,null),v], null)], null);
} else {
throw cljs.core.match.backtrack;

}
}catch (e38779){if((e38779 instanceof Error)){
var e__37299__auto____$12 = e38779;
if((e__37299__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$12;
}
} else {
throw e38779;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38778){if((e38778 instanceof Error)){
var e__37299__auto____$12 = e38778;
if((e__37299__auto____$12 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$12;
}
} else {
throw e38778;

}
}} else {
throw e__37299__auto____$11;
}
} else {
throw e38777;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38776){if((e38776 instanceof Error)){
var e__37299__auto____$11 = e38776;
if((e__37299__auto____$11 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$11;
}
} else {
throw e38776;

}
}} else {
throw e__37299__auto____$10;
}
} else {
throw e38775;

}
}} else {
throw e__37299__auto____$9;
}
} else {
throw e38774;

}
}} else {
throw e__37299__auto____$8;
}
} else {
throw e38773;

}
}} else {
throw e__37299__auto____$7;
}
} else {
throw e38772;

}
}} else {
throw e__37299__auto____$6;
}
} else {
throw e38771;

}
}} else {
throw e__37299__auto____$5;
}
} else {
throw e38770;

}
}} else {
throw e__37299__auto____$4;
}
} else {
throw e38769;

}
}} else {
throw e__37299__auto____$3;
}
} else {
throw e38768;

}
}} else {
throw e__37299__auto____$2;
}
} else {
throw e38767;

}
}} else {
throw e__37299__auto____$1;
}
} else {
throw e38766;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38765){if((e38765 instanceof Error)){
var e__37299__auto____$1 = e38765;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$1;
}
} else {
throw e38765;

}
}} else {
throw e__37299__auto__;
}
} else {
throw e38764;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e38763){if((e38763 instanceof Error)){
var e__37299__auto__ = e38763;
if((e__37299__auto__ === cljs.core.match.backtrack)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
throw e__37299__auto__;
}
} else {
throw e38763;

}
}});
posh.lib.q_analyze.patterns_from_eavs = (function posh$lib$q_analyze$patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__38824){
var vec__38825 = p__38824;
var k = cljs.core.nth.call(null,vec__38825,(0),null);
var v = cljs.core.nth.call(null,vec__38825,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,k)),cljs.core.mapcat.call(null,((function (vec__38825,k,v){
return (function (p1__38819_SHARP_){
return posh.lib.q_analyze.pattern_from_eav.call(null,vars,cljs.core.rest.call(null,p1__38819_SHARP_));
});})(vec__38825,k,v))
,v)]);
}),cljs.core.group_by.call(null,cljs.core.first,patterns)));
});
posh.lib.q_analyze.filter_patterns_from_eavs = (function posh$lib$q_analyze$filter_patterns_from_eavs(dbvarmap,vars,patterns){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__38833){
var vec__38834 = p__38833;
var k = cljs.core.nth.call(null,vec__38834,(0),null);
var v = cljs.core.nth.call(null,vec__38834,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,k)),cljs.core.mapcat.call(null,((function (vec__38834,k,v){
return (function (p1__38828_SHARP_){
return posh.lib.q_analyze.filter_pattern_from_eav.call(null,vars,cljs.core.rest.call(null,p1__38828_SHARP_));
});})(vec__38834,k,v))
,v)]);
}),cljs.core.group_by.call(null,cljs.core.first,patterns)));
});
posh.lib.q_analyze.just_qvars = (function posh$lib$q_analyze$just_qvars(ins,args){
if(cljs.core.empty_QMARK_.call(null,ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,((((cljs.core.first.call(null,ins) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,ins))].join('')),"$")))?null:cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ins),cljs.core.first.call(null,args)])),posh.lib.q_analyze.just_qvars.call(null,cljs.core.rest.call(null,ins),cljs.core.rest.call(null,args)));
}
});
posh.lib.q_analyze.get_input_sets = (function posh$lib$q_analyze$get_input_sets(ins,args){
var varmap = posh.lib.q_analyze.just_qvars.call(null,ins,args);
if(!(cljs.core.empty_QMARK_.call(null,varmap))){
var qvars = cljs.core.vec.call(null,posh.lib.q_analyze.get_all_vars.call(null,cljs.core.keys.call(null,varmap)));
var varvals = cljs.core.apply.call(null,cljs.core.partial.call(null,datascript.core.q,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),qvars,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.keys.call(null,varmap)], null)),cljs.core.vals.call(null,varmap));
var varsets = cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.conj),cljs.core.zipmap.call(null,qvars,cljs.core.repeat.call(null,cljs.core.PersistentHashSet.EMPTY)),cljs.core.map.call(null,((function (qvars,varvals,varmap){
return (function (p1__38837_SHARP_){
return cljs.core.zipmap.call(null,qvars,p1__38837_SHARP_);
});})(qvars,varvals,varmap))
,varvals));
return varsets;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.pull_pattern_QMARK_ = (function posh$lib$q_analyze$pull_pattern_QMARK_(x){
return (cljs.core.coll_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,x),new cljs.core.Symbol(null,"pull","pull",779986722,null))) && (cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,x)));
});
posh.lib.q_analyze.replace_find_pulls = (function posh$lib$q_analyze$replace_find_pulls(qfind){

return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.truth_(posh.lib.q_analyze.pull_pattern_QMARK_.call(null,x))){
return cljs.core.second.call(null,x);
} else {
return x;
}
}),qfind);
});
posh.lib.q_analyze.get_pull_var_pairs = (function posh$lib$q_analyze$get_pull_var_pairs(qfind){

if(cljs.core.coll_QMARK_.call(null,qfind)){
if(cljs.core.empty_QMARK_.call(null,qfind)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(posh.lib.q_analyze.pull_pattern_QMARK_.call(null,qfind))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.second.call(null,qfind),cljs.core.nth.call(null,qfind,(2))]);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,posh.lib.q_analyze.get_pull_var_pairs,qfind));

}
}
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
posh.lib.q_analyze.match_var_to_db = (function posh$lib$q_analyze$match_var_to_db(var$,dbvarmap,dbeavs){
while(true){
if(cljs.core.empty_QMARK_.call(null,dbeavs)){
return null;
} else {
var vec__38841 = cljs.core.first.call(null,dbeavs);
var db = cljs.core.nth.call(null,vec__38841,(0),null);
var e = cljs.core.nth.call(null,vec__38841,(1),null);
var a = cljs.core.nth.call(null,vec__38841,(2),null);
var v = cljs.core.nth.call(null,vec__38841,(3),null);
if(cljs.core.truth_((function (){var or__28749__auto__ = cljs.core._EQ_.call(null,var$,e);
if(or__28749__auto__){
return or__28749__auto__;
} else {
var and__28737__auto__ = cljs.core._EQ_.call(null,var$,v);
if(and__28737__auto__){
return posh.lib.pull_analyze.ref_QMARK_.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,db)),a);
} else {
return and__28737__auto__;
}
}
})())){
return dbvarmap.call(null,db);
} else {
var G__38844 = var$;
var G__38845 = dbvarmap;
var G__38846 = cljs.core.rest.call(null,dbeavs);
var$ = G__38844;
dbvarmap = G__38845;
dbeavs = G__38846;
continue;
}
}
break;
}
});
posh.lib.q_analyze.match_vars_to_dbs = (function posh$lib$q_analyze$match_vars_to_dbs(vars,dbvarmap,dbeavs){
if(cljs.core.empty_QMARK_.call(null,vars)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,vars),posh.lib.q_analyze.match_var_to_db.call(null,cljs.core.first.call(null,vars),dbvarmap,dbeavs)]),posh.lib.q_analyze.match_vars_to_dbs.call(null,cljs.core.rest.call(null,vars),dbvarmap,dbeavs));
}
});
posh.lib.q_analyze.index_of = (function posh$lib$q_analyze$index_of(xs,x){
var n = (0);
var xs__$1 = xs;
while(true){
if(cljs.core.empty_QMARK_.call(null,xs__$1)){
return null;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__$1),x)){
return n;
} else {
var G__38847 = (n + (1));
var G__38848 = cljs.core.rest.call(null,xs__$1);
n = G__38847;
xs__$1 = G__38848;
continue;

}
}
break;
}
});
posh.lib.q_analyze.db_arg_QMARK_ = (function posh$lib$q_analyze$db_arg_QMARK_(arg){
var and__28737__auto__ = cljs.core.map_QMARK_.call(null,arg);
if(and__28737__auto__){
var and__28737__auto____$1 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(arg);
if(cljs.core.truth_(and__28737__auto____$1)){
return new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return and__28737__auto____$1;
}
} else {
return and__28737__auto__;
}
});
posh.lib.q_analyze.convert_args_to = (function posh$lib$q_analyze$convert_args_to(type,args){
return cljs.core.map.call(null,(function (p1__38849_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.db_arg_QMARK_.call(null,p1__38849_SHARP_))){
return type.call(null,p1__38849_SHARP_);
} else {
return p1__38849_SHARP_;
}
}),args);
});
posh.lib.q_analyze.make_dbarg_map = (function posh$lib$q_analyze$make_dbarg_map(ins,args){
if(cljs.core.empty_QMARK_.call(null,ins)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.merge.call(null,(cljs.core.truth_(posh.lib.q_analyze.dbvar_QMARK_.call(null,cljs.core.first.call(null,ins)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,ins),cljs.core.first.call(null,args)]):null),posh.lib.q_analyze.make_dbarg_map.call(null,cljs.core.rest.call(null,ins),cljs.core.rest.call(null,args)));
}
});
posh.lib.q_analyze.split_datoms = (function posh$lib$q_analyze$split_datoms(datoms){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p__38854){
var vec__38855 = p__38854;
var db_sym = cljs.core.nth.call(null,vec__38855,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__38855,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([db_sym,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.rest),db_datoms)]);
}),cljs.core.group_by.call(null,cljs.core.first,datoms)));
});
posh.lib.q_analyze.resolve_any_idents = (function posh$lib$q_analyze$resolve_any_idents(entid_fn,db,input_set){
return cljs.core.set.call(null,(function (){var iter__29611__auto__ = (function posh$lib$q_analyze$resolve_any_idents_$_iter__38862(s__38863){
return (new cljs.core.LazySeq(null,(function (){
var s__38863__$1 = s__38863;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__38863__$1);
if(temp__6738__auto__){
var s__38863__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38863__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__38863__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__38865 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__38864 = (0);
while(true){
if((i__38864 < size__29610__auto__)){
var x = cljs.core._nth.call(null,c__29609__auto__,i__38864);
cljs.core.chunk_append.call(null,b__38865,((cljs.core.coll_QMARK_.call(null,x))?entid_fn.call(null,db,x):x));

var G__38866 = (i__38864 + (1));
i__38864 = G__38866;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38865),posh$lib$q_analyze$resolve_any_idents_$_iter__38862.call(null,cljs.core.chunk_rest.call(null,s__38863__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38865),null);
}
} else {
var x = cljs.core.first.call(null,s__38863__$2);
return cljs.core.cons.call(null,((cljs.core.coll_QMARK_.call(null,x))?entid_fn.call(null,db,x):x),posh$lib$q_analyze$resolve_any_idents_$_iter__38862.call(null,cljs.core.rest.call(null,s__38863__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29611__auto__.call(null,input_set);
})());
});
posh.lib.q_analyze.q_analyze = (function posh$lib$q_analyze$q_analyze(dcfg,retrieve,query,args){
var qm = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null)], null),posh.lib.q_analyze.query_to_map.call(null,query));
var where = posh.lib.q_analyze.normalize_all_eavs.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(qm)));
var eavs = posh.lib.q_analyze.get_eavs.call(null,where);
var vars = cljs.core.vec.call(null,posh.lib.q_analyze.get_all_vars.call(null,eavs));
var newqm = cljs.core.merge.call(null,qm,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),vars,new cljs.core.Keyword(null,"where","where",-2044795965),where], null));
var dbvarmap = posh.lib.q_analyze.make_dbarg_map.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var fixed_args = cljs.core.map.call(null,((function (qm,where,eavs,vars,newqm,dbvarmap){
return (function (p__38896){
var vec__38897 = p__38896;
var sym = cljs.core.nth.call(null,vec__38897,(0),null);
var arg = cljs.core.nth.call(null,vec__38897,(1),null);
var or__28749__auto__ = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,dbvarmap,sym));
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return arg;
}
});})(qm,where,eavs,vars,newqm,dbvarmap))
,cljs.core.zipmap.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args));
var r = cljs.core.apply.call(null,cljs.core.partial.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),newqm),fixed_args);
var lookup_ref_patterns = cljs.core.map.call(null,((function (qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r){
return (function (p__38900){
var vec__38901 = p__38900;
var a = cljs.core.nth.call(null,vec__38901,(0),null);
var v = cljs.core.nth.call(null,vec__38901,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),a,v], null);
});})(qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r))
,cljs.core.filter.call(null,cljs.core.every_pred.call(null,cljs.core.vector_QMARK_,cljs.core.comp.call(null,cljs.core.keyword_QMARK_,cljs.core.first),cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,(2)),cljs.core.count)),args));
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null,new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?(function (){var datoms = posh.lib.q_analyze.split_datoms.call(null,posh.lib.q_analyze.create_q_datoms.call(null,r,eavs,vars));
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms","datoms",-290874434),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__38904){
var vec__38905 = p__38904;
var db_sym = cljs.core.nth.call(null,vec__38905,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__38905,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(dbvarmap.call(null,db_sym)),db_datoms]);
});})(datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,datoms))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"datoms-t","datoms-t",1641690868),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__38908){
var vec__38909 = p__38908;
var db_sym = cljs.core.nth.call(null,vec__38909,(0),null);
var db_datoms = cljs.core.nth.call(null,vec__38909,(1),null);
var db = dbvarmap.call(null,db_sym);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"db-id","db-id",747248515).cljs$core$IFn$_invoke$arity$1(db),posh.lib.util.t_for_datoms.call(null,new cljs.core.Keyword(null,"q","q",689001697).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(db),db_datoms)]);
});})(datoms,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,datoms))], null):null));
})():null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"results","results",-1134170113),datascript.core.q.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.vec.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(qm)),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,new cljs.core.Symbol(null,"...","...",-1926939749,null)], null)], null)], null),cljs.core.vec.call(null,r))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null,new cljs.core.Keyword(null,"patterns","patterns",1164082024),null,new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?(function (){var in_vars = posh.lib.q_analyze.get_input_sets.call(null,new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(qm),args);
var eavs_ins = cljs.core.map.call(null,((function (in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__38912){
var vec__38913 = p__38912;
var seq__38914 = cljs.core.seq.call(null,vec__38913);
var first__38915 = cljs.core.first.call(null,seq__38914);
var seq__38914__$1 = cljs.core.next.call(null,seq__38914);
var db = first__38915;
var eav = seq__38914__$1;
return cljs.core.vec.call(null,cljs.core.cons.call(null,db,cljs.core.map.call(null,((function (vec__38913,seq__38914,first__38915,seq__38914__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__38869_SHARP_){
var temp__6736__auto__ = in_vars.call(null,p1__38869_SHARP_);
if(cljs.core.truth_(temp__6736__auto__)){
var v = temp__6736__auto__;
return posh.lib.q_analyze.resolve_any_idents.call(null,new cljs.core.Keyword(null,"entid","entid",1720688982).cljs$core$IFn$_invoke$arity$1(dcfg),new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,dbvarmap,db)),v);
} else {
return p1__38869_SHARP_;
}
});})(vec__38913,seq__38914,first__38915,seq__38914__$1,db,eav,in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eav)));
});})(in_vars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,cljs.core.concat.call(null,lookup_ref_patterns,eavs));
var qvar_count = posh.lib.q_analyze.count_qvars.call(null,eavs_ins);
var linked_qvars = cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p__38916){
var vec__38917 = p__38916;
var k = cljs.core.nth.call(null,vec__38917,(0),null);
var v = cljs.core.nth.call(null,vec__38917,(1),null);
if((v > (1))){
return k;
} else {
return null;
}
});})(in_vars,eavs_ins,qvar_count,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,qvar_count)));
var rvars = cljs.core.zipmap.call(null,vars,posh.lib.q_analyze.stack_vectors.call(null,r));
var prepped_eavs = clojure.walk.postwalk.call(null,((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__38870_SHARP_){
if(cljs.core.truth_((function (){var and__28737__auto__ = posh.lib.q_analyze.qvar_QMARK_.call(null,p1__38870_SHARP_);
if(cljs.core.truth_(and__28737__auto__)){
return cljs.core.not.call(null,linked_qvars.call(null,p1__38870_SHARP_));
} else {
return and__28737__auto__;
}
})())){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__38870_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eavs_ins);
return cljs.core.merge.call(null,(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"simple-patterns","simple-patterns",788142763),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs.call(null,dbvarmap,rvars,clojure.walk.postwalk.call(null,((function (in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns){
return (function (p1__38871_SHARP_){
if(cljs.core.truth_(posh.lib.q_analyze.qvar_QMARK_.call(null,p1__38871_SHARP_))){
return new cljs.core.Symbol(null,"_","_",-1201019570,null);
} else {
return p1__38871_SHARP_;
}
});})(in_vars,eavs_ins,qvar_count,linked_qvars,rvars,prepped_eavs,qm,where,eavs,vars,newqm,dbvarmap,fixed_args,r,lookup_ref_patterns))
,eavs_ins))], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"patterns","patterns",1164082024),posh.lib.q_analyze.patterns_from_eavs.call(null,dbvarmap,rvars,prepped_eavs),new cljs.core.Keyword(null,"linked","linked",-1703156372),linked_qvars], null):null),(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),null], null), null),retrieve))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-patterns","filter-patterns",-1388353466),posh.lib.q_analyze.filter_patterns_from_eavs.call(null,dbvarmap,rvars,prepped_eavs)], null):null));
})():null));
});

//# sourceMappingURL=q_analyze.js.map