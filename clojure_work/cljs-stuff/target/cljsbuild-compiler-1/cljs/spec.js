// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__7072__auto__ = (((spec == null))?null:spec);
var m__7073__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(spec,x) : m__7073__auto__.call(null,spec,x));
} else {
var m__7073__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,x) : m__7073__auto____$1.call(null,spec,x));
} else {
throw cljs.core.missing_protocol("Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__7072__auto__ = (((spec == null))?null:spec);
var m__7073__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(spec,y) : m__7073__auto__.call(null,spec,y));
} else {
var m__7073__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,y) : m__7073__auto____$1.call(null,spec,y));
} else {
throw cljs.core.missing_protocol("Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__7072__auto__ = (((spec == null))?null:spec);
var m__7073__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$5 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__7073__auto__.call(null,spec,path,via,in$,x));
} else {
var m__7073__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__7073__auto____$1.call(null,spec,path,via,in$,x));
} else {
throw cljs.core.missing_protocol("Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__7072__auto__ = (((spec == null))?null:spec);
var m__7073__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__7073__auto__.call(null,spec,overrides,path,rmap));
} else {
var m__7073__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__7073__auto____$1.call(null,spec,overrides,path,rmap));
} else {
throw cljs.core.missing_protocol("Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__7072__auto__ = (((spec == null))?null:spec);
var m__7073__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__7073__auto__.call(null,spec,gfn));
} else {
var m__7073__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__7073__auto____$1.call(null,spec,gfn));
} else {
throw cljs.core.missing_protocol("Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__7072__auto__ = (((spec == null))?null:spec);
var m__7073__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$1(spec) : m__7073__auto__.call(null,spec));
} else {
var m__7073__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1(spec) : m__7073__auto____$1.call(null,spec));
} else {
throw cljs.core.missing_protocol("Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = (function (){var G__22280 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22280) : cljs.core.atom.call(null,G__22280));
})();
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta(spec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(spec),cljs.core.cst$kw$cljs$spec_SLASH_name,name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || (spec.cljs$core$IMeta$))?true:false):false)){
return cljs.core.cst$kw$cljs$spec_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_(k))){
var reg = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.registry_ref) : cljs.core.deref.call(null,cljs.spec.registry_ref));
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_(spec))){
var G__22285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,spec);
spec = G__22285;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name(spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_(k)){
var or__6409__auto__ = cljs.spec.reg_resolve(k);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__6397__auto__ = ((!((x == null)))?(((false) || (x.cljs$spec$Spec$))?true:false):false);
if(and__6397__auto__){
return x;
} else {
return and__6397__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__6397__auto__ = cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__6397__auto__)){
return x;
} else {
return and__6397__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__6409__auto__ = cljs.spec.spec_QMARK_(spec_or_k);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = cljs.spec.regex_QMARK_(spec_or_k);
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
var or__6409__auto____$2 = (function (){var and__6397__auto__ = cljs.spec.named_QMARK_(spec_or_k);
if(cljs.core.truth_(and__6397__auto__)){
return cljs.spec.reg_resolve(spec_or_k);
} else {
return and__6397__auto__;
}
})();
if(cljs.core.truth_(or__6409__auto____$2)){
return or__6409__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_(s))){
return cljs.spec.with_name((cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(s,null) : cljs.spec.regex_spec_impl.call(null,s,null)),cljs.spec.spec_name(s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__6409__auto__ = cljs.spec.maybe_spec(spec_or_k);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_(spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__6409__auto__ = cljs.spec.the_spec(s);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var G__22294 = cljs.core.cst$kw$cljs$spec_SLASH_unknown;
var G__22295 = s;
var G__22296 = null;
var G__22297 = null;
return (cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(G__22294,G__22295,G__22296,G__22297) : cljs.spec.spec_impl.call(null,G__22294,G__22295,G__22296,G__22297));
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_(cljs.spec.specize(spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_(cljs.spec.specize(spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_(cljs.spec.specize(spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_(form)){
return clojure.walk.postwalk((function (form__$1){
if(cljs.core.truth_((function (){var and__6397__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__6397__auto__){
return cljs.core.namespace(form__$1);
} else {
return and__6397__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form__$1));
} else {
if((cljs.core.seq_QMARK_(form__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$fn,cljs.core.first(form__$1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.second(form__$1)))){
return cljs.core.last(form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__6397__auto__ = (form instanceof cljs.core.Symbol);
if(and__6397__auto__){
return cljs.core.namespace(form);
} else {
return and__6397__auto__;
}
})())){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev(cljs.spec.form(spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.reg_resolve(spec);
if(cljs.core.truth_(cljs.spec.regex_QMARK_(spec__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec__$1,cljs.core.cst$kw$cljs$spec_SLASH_gfn,gen_fn);
} else {
return cljs.spec.with_gen_STAR_(cljs.spec.specize(spec__$1),gen_fn);
}
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__4657__auto__ = cljs.spec.explain_STAR_(cljs.spec.specize(spec),path,via,in$,x);
if(cljs.core.truth_(temp__4657__auto__)){
var probs = temp__4657__auto__;
if(cljs.core.empty_QMARK_(probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_problems,probs], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__4655__auto__ = cljs.spec.spec_name(spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * prints an explanation to *out*.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var sb__7395__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22338_22378 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22339_22379 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_22338_22378,_STAR_print_fn_STAR_22339_22379,sb__7395__auto__){
return (function (x__7396__auto__){
return sb__7395__auto__.append(x__7396__auto__);
});})(_STAR_print_newline_STAR_22338_22378,_STAR_print_fn_STAR_22339_22379,sb__7395__auto__))
;

try{var seq__22340_22380 = cljs.core.seq(cljs.core.cst$kw$cljs$spec_SLASH_problems.cljs$core$IFn$_invoke$arity$1(ed));
var chunk__22341_22381 = null;
var count__22342_22382 = (0);
var i__22343_22383 = (0);
while(true){
if((i__22343_22383 < count__22342_22382)){
var map__22344_22384 = chunk__22341_22381.cljs$core$IIndexed$_nth$arity$2(null,i__22343_22383);
var map__22344_22385__$1 = ((((!((map__22344_22384 == null)))?((((map__22344_22384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22344_22384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22344_22384):map__22344_22384);
var prob_22386 = map__22344_22385__$1;
var path_22387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22344_22385__$1,cljs.core.cst$kw$path);
var pred_22388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22344_22385__$1,cljs.core.cst$kw$pred);
var val_22389 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22344_22385__$1,cljs.core.cst$kw$val);
var reason_22390 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22344_22385__$1,cljs.core.cst$kw$reason);
var via_22391 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22344_22385__$1,cljs.core.cst$kw$via);
var in_22392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22344_22385__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_22392)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([in_22392], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([val_22389], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" fails"], 0));

if(cljs.core.empty_QMARK_(via_22391)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.last(via_22391)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_22387)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path_22387], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.abbrev(pred_22388)], 0));

if(cljs.core.truth_(reason_22390)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", ",reason_22390], 0));
} else {
}

var seq__22346_22393 = cljs.core.seq(prob_22386);
var chunk__22347_22394 = null;
var count__22348_22395 = (0);
var i__22349_22396 = (0);
while(true){
if((i__22349_22396 < count__22348_22395)){
var vec__22350_22397 = chunk__22347_22394.cljs$core$IIndexed$_nth$arity$2(null,i__22349_22396);
var k_22398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22350_22397,(0),null);
var v_22399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22350_22397,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_22398))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_22398], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_22399], 0));
}

var G__22400 = seq__22346_22393;
var G__22401 = chunk__22347_22394;
var G__22402 = count__22348_22395;
var G__22403 = (i__22349_22396 + (1));
seq__22346_22393 = G__22400;
chunk__22347_22394 = G__22401;
count__22348_22395 = G__22402;
i__22349_22396 = G__22403;
continue;
} else {
var temp__4657__auto___22404 = cljs.core.seq(seq__22346_22393);
if(temp__4657__auto___22404){
var seq__22346_22405__$1 = temp__4657__auto___22404;
if(cljs.core.chunked_seq_QMARK_(seq__22346_22405__$1)){
var c__7220__auto___22406 = cljs.core.chunk_first(seq__22346_22405__$1);
var G__22407 = cljs.core.chunk_rest(seq__22346_22405__$1);
var G__22408 = c__7220__auto___22406;
var G__22409 = cljs.core.count(c__7220__auto___22406);
var G__22410 = (0);
seq__22346_22393 = G__22407;
chunk__22347_22394 = G__22408;
count__22348_22395 = G__22409;
i__22349_22396 = G__22410;
continue;
} else {
var vec__22353_22411 = cljs.core.first(seq__22346_22405__$1);
var k_22412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22353_22411,(0),null);
var v_22413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22353_22411,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_22412))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_22412], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_22413], 0));
}

var G__22414 = cljs.core.next(seq__22346_22405__$1);
var G__22415 = null;
var G__22416 = (0);
var G__22417 = (0);
seq__22346_22393 = G__22414;
chunk__22347_22394 = G__22415;
count__22348_22395 = G__22416;
i__22349_22396 = G__22417;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__22418 = seq__22340_22380;
var G__22419 = chunk__22341_22381;
var G__22420 = count__22342_22382;
var G__22421 = (i__22343_22383 + (1));
seq__22340_22380 = G__22418;
chunk__22341_22381 = G__22419;
count__22342_22382 = G__22420;
i__22343_22383 = G__22421;
continue;
} else {
var temp__4657__auto___22422 = cljs.core.seq(seq__22340_22380);
if(temp__4657__auto___22422){
var seq__22340_22423__$1 = temp__4657__auto___22422;
if(cljs.core.chunked_seq_QMARK_(seq__22340_22423__$1)){
var c__7220__auto___22424 = cljs.core.chunk_first(seq__22340_22423__$1);
var G__22425 = cljs.core.chunk_rest(seq__22340_22423__$1);
var G__22426 = c__7220__auto___22424;
var G__22427 = cljs.core.count(c__7220__auto___22424);
var G__22428 = (0);
seq__22340_22380 = G__22425;
chunk__22341_22381 = G__22426;
count__22342_22382 = G__22427;
i__22343_22383 = G__22428;
continue;
} else {
var map__22356_22429 = cljs.core.first(seq__22340_22423__$1);
var map__22356_22430__$1 = ((((!((map__22356_22429 == null)))?((((map__22356_22429.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22356_22429.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22356_22429):map__22356_22429);
var prob_22431 = map__22356_22430__$1;
var path_22432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22356_22430__$1,cljs.core.cst$kw$path);
var pred_22433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22356_22430__$1,cljs.core.cst$kw$pred);
var val_22434 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22356_22430__$1,cljs.core.cst$kw$val);
var reason_22435 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22356_22430__$1,cljs.core.cst$kw$reason);
var via_22436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22356_22430__$1,cljs.core.cst$kw$via);
var in_22437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22356_22430__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_22437)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([in_22437], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([val_22434], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" fails"], 0));

if(cljs.core.empty_QMARK_(via_22436)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.last(via_22436)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_22432)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path_22432], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.abbrev(pred_22433)], 0));

if(cljs.core.truth_(reason_22435)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", ",reason_22435], 0));
} else {
}

var seq__22358_22438 = cljs.core.seq(prob_22431);
var chunk__22359_22439 = null;
var count__22360_22440 = (0);
var i__22361_22441 = (0);
while(true){
if((i__22361_22441 < count__22360_22440)){
var vec__22362_22442 = chunk__22359_22439.cljs$core$IIndexed$_nth$arity$2(null,i__22361_22441);
var k_22443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22362_22442,(0),null);
var v_22444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22362_22442,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_22443))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_22443], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_22444], 0));
}

var G__22445 = seq__22358_22438;
var G__22446 = chunk__22359_22439;
var G__22447 = count__22360_22440;
var G__22448 = (i__22361_22441 + (1));
seq__22358_22438 = G__22445;
chunk__22359_22439 = G__22446;
count__22360_22440 = G__22447;
i__22361_22441 = G__22448;
continue;
} else {
var temp__4657__auto___22449__$1 = cljs.core.seq(seq__22358_22438);
if(temp__4657__auto___22449__$1){
var seq__22358_22450__$1 = temp__4657__auto___22449__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22358_22450__$1)){
var c__7220__auto___22451 = cljs.core.chunk_first(seq__22358_22450__$1);
var G__22452 = cljs.core.chunk_rest(seq__22358_22450__$1);
var G__22453 = c__7220__auto___22451;
var G__22454 = cljs.core.count(c__7220__auto___22451);
var G__22455 = (0);
seq__22358_22438 = G__22452;
chunk__22359_22439 = G__22453;
count__22360_22440 = G__22454;
i__22361_22441 = G__22455;
continue;
} else {
var vec__22365_22456 = cljs.core.first(seq__22358_22450__$1);
var k_22457 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22365_22456,(0),null);
var v_22458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22365_22456,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_22457))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_22457], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_22458], 0));
}

var G__22459 = cljs.core.next(seq__22358_22450__$1);
var G__22460 = null;
var G__22461 = (0);
var G__22462 = (0);
seq__22358_22438 = G__22459;
chunk__22359_22439 = G__22460;
count__22360_22440 = G__22461;
i__22361_22441 = G__22462;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__22463 = cljs.core.next(seq__22340_22423__$1);
var G__22464 = null;
var G__22465 = (0);
var G__22466 = (0);
seq__22340_22380 = G__22463;
chunk__22341_22381 = G__22464;
count__22342_22382 = G__22465;
i__22343_22383 = G__22466;
continue;
}
} else {
}
}
break;
}

var seq__22368_22467 = cljs.core.seq(ed);
var chunk__22369_22468 = null;
var count__22370_22469 = (0);
var i__22371_22470 = (0);
while(true){
if((i__22371_22470 < count__22370_22469)){
var vec__22372_22471 = chunk__22369_22468.cljs$core$IIndexed$_nth$arity$2(null,i__22371_22470);
var k_22472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22372_22471,(0),null);
var v_22473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22372_22471,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_problems,null], null), null).call(null,k_22472))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_22472], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_22473], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__22474 = seq__22368_22467;
var G__22475 = chunk__22369_22468;
var G__22476 = count__22370_22469;
var G__22477 = (i__22371_22470 + (1));
seq__22368_22467 = G__22474;
chunk__22369_22468 = G__22475;
count__22370_22469 = G__22476;
i__22371_22470 = G__22477;
continue;
} else {
var temp__4657__auto___22478 = cljs.core.seq(seq__22368_22467);
if(temp__4657__auto___22478){
var seq__22368_22479__$1 = temp__4657__auto___22478;
if(cljs.core.chunked_seq_QMARK_(seq__22368_22479__$1)){
var c__7220__auto___22480 = cljs.core.chunk_first(seq__22368_22479__$1);
var G__22481 = cljs.core.chunk_rest(seq__22368_22479__$1);
var G__22482 = c__7220__auto___22480;
var G__22483 = cljs.core.count(c__7220__auto___22480);
var G__22484 = (0);
seq__22368_22467 = G__22481;
chunk__22369_22468 = G__22482;
count__22370_22469 = G__22483;
i__22371_22470 = G__22484;
continue;
} else {
var vec__22375_22485 = cljs.core.first(seq__22368_22479__$1);
var k_22486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22375_22485,(0),null);
var v_22487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22375_22485,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_problems,null], null), null).call(null,k_22486))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_22486], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_22487], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__22488 = cljs.core.next(seq__22368_22479__$1);
var G__22489 = null;
var G__22490 = (0);
var G__22491 = (0);
seq__22368_22467 = G__22488;
chunk__22369_22468 = G__22489;
count__22370_22469 = G__22490;
i__22371_22470 = G__22491;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22339_22379;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22338_22378;
}
return [cljs.core.str(sb__7395__auto__)].join('');
})()], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Success!"], 0));
}
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out(cljs.spec.explain_data(spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__7395__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22494_22496 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22495_22497 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_22494_22496,_STAR_print_fn_STAR_22495_22497,sb__7395__auto__){
return (function (x__7396__auto__){
return sb__7395__auto__.append(x__7396__auto__);
});})(_STAR_print_newline_STAR_22494_22496,_STAR_print_fn_STAR_22495_22497,sb__7395__auto__))
;

try{cljs.spec.explain(spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22495_22497;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22494_22496;
}
return [cljs.core.str(sb__7395__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize(spec);
var temp__4655__auto__ = (function (){var or__6409__auto__ = (function (){var temp__4657__auto__ = (function (){var or__6409__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,(function (){var or__6409__auto__ = cljs.spec.spec_name(spec__$1);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var gfn = temp__4657__auto__;
return (gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.spec.gen_STAR_(spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var g = temp__4655__auto__;
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (g,temp__4655__auto__,spec__$1){
return (function (p1__22498_SHARP_){
return (cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,p1__22498_SHARP_) : cljs.spec.valid_QMARK_.call(null,spec__$1,p1__22498_SHARP_));
});})(g,temp__4655__auto__,spec__$1))
,g,(100)], 0));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev(form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args22499 = [];
var len__7484__auto___22502 = arguments.length;
var i__7485__auto___22503 = (0);
while(true){
if((i__7485__auto___22503 < len__7484__auto___22502)){
args22499.push((arguments[i__7485__auto___22503]));

var G__22504 = (i__7485__auto___22503 + (1));
i__7485__auto___22503 = G__22504;
continue;
} else {
}
break;
}

var G__22501 = args22499.length;
switch (G__22501) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22499.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2(spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub(spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_recursion_DASH_limit,cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__6397__auto__ = cljs.spec.named_QMARK_(k);
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.namespace(k);
} else {
return and__6397__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword or resolveable symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__6409__auto__ = cljs.spec.spec_QMARK_(spec);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = cljs.spec.regex_QMARK_(spec);
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.registry_ref) : cljs.core.deref.call(null,cljs.spec.registry_ref)),spec);
}
}
})())?spec:(cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(form,spec,null,null) : cljs.spec.spec_impl.call(null,form,spec,null,null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.registry_ref) : cljs.core.deref.call(null,cljs.spec.registry_ref));
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_(x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.spec.registry(),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym(k)));
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec(v);
var temp__4657__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__4657__auto__)){
var arg_spec = temp__4657__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,cljs.spec.conform(arg_spec,args))){
var ed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.explain_data_STAR_(arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args], null),(function (){var temp__4655__auto__ = cljs.spec.spec_name(arg_spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),cljs.core.cst$kw$cljs$spec_SLASH_args,args);
throw (new Error([cljs.core.str("Call to "),cljs.core.str(cljs.spec.__GT_sym(v)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__7395__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22508_22510 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22509_22511 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_22508_22510,_STAR_print_fn_STAR_22509_22511,sb__7395__auto__,ed,arg_spec,temp__4657__auto__,specs){
return (function (x__7396__auto__){
return sb__7395__auto__.append(x__7396__auto__);
});})(_STAR_print_newline_STAR_22508_22510,_STAR_print_fn_STAR_22509_22511,sb__7395__auto__,ed,arg_spec,temp__4657__auto__,specs))
;

try{cljs.spec.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22509_22511;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22508_22510;
}
return [cljs.core.str(sb__7395__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(rmap,id) > cljs.core.cst$kw$cljs$spec_SLASH_recursion_DASH_limit.cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_(cljs.core.set(path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((function (){var or__6409__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args22512 = [];
var len__7484__auto___22515 = arguments.length;
var i__7485__auto___22516 = (0);
while(true){
if((i__7485__auto___22516 < len__7484__auto___22515)){
args22512.push((arguments[i__7485__auto___22516]));

var G__22517 = (i__7485__auto___22516 + (1));
i__7485__auto___22516 = G__22517;
continue;
} else {
}
break;
}

var G__22514 = args22512.length;
switch (G__22514) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22512.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4(pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__4655__auto__ = cljs.spec.the_spec(pred);
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return cljs.spec.conform(spec,x);
} else {
if(cljs.core.ifn_QMARK_(pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
} else {
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return x;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form], 0))),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args22519 = [];
var len__7484__auto___22522 = arguments.length;
var i__7485__auto___22523 = (0);
while(true){
if((i__7485__auto___22523 < len__7484__auto___22522)){
args22519.push((arguments[i__7485__auto___22523]));

var G__22524 = (i__7485__auto___22523 + (1));
i__7485__auto___22523 = G__22524;
continue;
} else {
}
break;
}

var G__22521 = args22519.length;
switch (G__22521) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22519.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(spec,x,cljs.core.cst$kw$cljs$spec_SLASH_unknown));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec(pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_(pred__$1))){
return cljs.spec.explain_STAR_(pred__$1,path,(function (){var temp__4655__auto__ = cljs.spec.spec_name(pred__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.spec.abbrev(form),cljs.core.cst$kw$val,v,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__22529){
var map__22561 = p__22529;
var map__22561__$1 = ((((!((map__22561 == null)))?((((map__22561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22561):map__22561);
var argm = map__22561__$1;
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,cljs.core.cst$kw$opt_DASH_un);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,cljs.core.cst$kw$gfn);
var pred_exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,cljs.core.cst$kw$pred_DASH_exprs);
var opt_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,cljs.core.cst$kw$opt_DASH_keys);
var req_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,cljs.core.cst$kw$req_DASH_specs);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,cljs.core.cst$kw$req);
var req_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,cljs.core.cst$kw$req_DASH_keys);
var opt_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,cljs.core.cst$kw$opt_DASH_specs);
var pred_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22561__$1,cljs.core.cst$kw$pred_DASH_forms);
var keys_pred = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_keys,opt_keys),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__22526_SHARP_){
var or__6409__auto__ = (k__GT_s.cljs$core$IFn$_invoke$arity$1 ? k__GT_s.cljs$core$IFn$_invoke$arity$1(p1__22526_SHARP_) : k__GT_s.call(null,p1__22526_SHARP_));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return p1__22526_SHARP_;
}
});})(keys_pred,k__GT_s,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid();
if(typeof cljs.spec.t_cljs$spec22563 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec22563 = (function (map__22561,opt,map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,p__22529,req_specs,keys__GT_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta22564){
this.map__22561 = map__22561;
this.opt = opt;
this.map_spec_impl = map_spec_impl;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.p__22529 = p__22529;
this.req_specs = req_specs;
this.keys__GT_specs = keys__GT_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta22564 = meta22564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec22563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_22565,meta22564__$1){
var self__ = this;
var _22565__$1 = this;
return (new cljs.spec.t_cljs$spec22563(self__.map__22561,self__.opt,self__.map_spec_impl,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.p__22529,self__.req_specs,self__.keys__GT_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta22564__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec22563.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_22565){
var self__ = this;
var _22565__$1 = this;
return self__.meta22564;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec22563.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec22563.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.keys_pred.cljs$core$IFn$_invoke$arity$1 ? self__.keys_pred.cljs$core$IFn$_invoke$arity$1(m) : self__.keys_pred.call(null,m)))){
var reg = cljs.spec.registry();
var ret = m;
var G__22569 = cljs.core.keys(m);
var vec__22570 = G__22569;
var seq__22571 = cljs.core.seq(vec__22570);
var first__22572 = cljs.core.first(seq__22571);
var seq__22571__$1 = cljs.core.next(seq__22571);
var k = first__22572;
var ks = seq__22571__$1;
var keys = vec__22570;
var ret__$1 = ret;
var G__22569__$1 = G__22569;
while(true){
var ret__$2 = ret__$1;
var vec__22573 = G__22569__$1;
var seq__22574 = cljs.core.seq(vec__22573);
var first__22575 = cljs.core.first(seq__22574);
var seq__22574__$1 = cljs.core.next(seq__22574);
var k__$1 = first__22575;
var ks__$1 = seq__22574__$1;
var keys__$1 = vec__22573;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specs.call(null,k__$1)))){
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var cv = cljs.spec.conform((self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specs.call(null,k__$1)),v);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cv,cljs.core.cst$kw$cljs$spec_SLASH_invalid)){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__22592 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,cv));
var G__22593 = ks__$1;
ret__$1 = G__22592;
G__22569__$1 = G__22593;
continue;
}
} else {
var G__22594 = ret__$2;
var G__22595 = ks__$1;
ret__$1 = G__22594;
G__22569__$1 = G__22595;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec22563.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry();
var ret = m;
var G__22579 = cljs.core.keys(m);
var vec__22580 = G__22579;
var seq__22581 = cljs.core.seq(vec__22580);
var first__22582 = cljs.core.first(seq__22581);
var seq__22581__$1 = cljs.core.next(seq__22581);
var k = first__22582;
var ks = seq__22581__$1;
var keys = vec__22580;
var ret__$1 = ret;
var G__22579__$1 = G__22579;
while(true){
var ret__$2 = ret__$1;
var vec__22583 = G__22579__$1;
var seq__22584 = cljs.core.seq(vec__22583);
var first__22585 = cljs.core.first(seq__22584);
var seq__22584__$1 = cljs.core.next(seq__22584);
var k__$1 = first__22585;
var ks__$1 = seq__22584__$1;
var keys__$1 = vec__22583;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specs.call(null,k__$1)))){
var cv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var v = cljs.spec.unform((self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specs.call(null,k__$1)),cv);
var G__22596 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,v));
var G__22597 = ks__$1;
ret__$1 = G__22596;
G__22579__$1 = G__22597;
continue;
} else {
var G__22598 = ret__$2;
var G__22599 = ks__$1;
ret__$1 = G__22598;
G__22579__$1 = G__22599;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec22563.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$map_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var reg = cljs.spec.registry();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(function (){var temp__4657__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return null;
} else {
return cljs.spec.abbrev(form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__4657__auto__){
var probs = temp__4657__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (probs,temp__4657__auto__,reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__22527_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,p1__22527_SHARP_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
});})(probs,temp__4657__auto__,reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__22586){
var vec__22587 = p__22586;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22587,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22587,(1),null);
if(cljs.core.truth_((function (){var or__6409__auto__ = !(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specs.call(null,k))));
if(or__6409__auto__){
return or__6409__auto__;
} else {
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specs.call(null,k)),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1((self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specs.call(null,k)),(self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specs.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specs.call(null,k)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq(x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec22563.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.cljs$core$IFn$_invoke$arity$3(gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_gens,opt_gens))){
var reqs = cljs.core.zipmap(self__.req_keys,req_gens);
var opts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0),cljs.core.count(opts)], 0)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__22528_SHARP_){
var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(reqs),((cljs.core.seq(opts))?cljs.core.shuffle(cljs.core.seq(opts)):null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.take.cljs$core$IFn$_invoke$arity$2((p1__22528_SHARP_ + cljs.core.count(reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
], 0));
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec22563.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
var G__22590 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.argm,cljs.core.cst$kw$gfn,gfn__$1);
return (self__.map_spec_impl.cljs$core$IFn$_invoke$arity$1 ? self__.map_spec_impl.cljs$core$IFn$_invoke$arity$1(G__22590) : self__.map_spec_impl.call(null,G__22590));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec22563.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cljs$spec_SLASH_keys,(function (){var G__22591 = cljs.core.PersistentVector.EMPTY;
var G__22591__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__22591,cljs.core.cst$kw$req,cljs.core.array_seq([self__.req], 0)):G__22591);
var G__22591__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__22591__$1,cljs.core.cst$kw$opt,cljs.core.array_seq([self__.opt], 0)):G__22591__$1);
var G__22591__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__22591__$2,cljs.core.cst$kw$req_DASH_un,cljs.core.array_seq([self__.req_un], 0)):G__22591__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__22591__$3,cljs.core.cst$kw$opt_DASH_un,cljs.core.array_seq([self__.opt_un], 0));
} else {
return G__22591__$3;
}
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec22563.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$map__22561,cljs.core.cst$sym$opt,cljs.core.with_meta(cljs.core.cst$sym$map_DASH_spec_DASH_impl,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$skip_DASH_wiki,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$req_DASH_un,cljs.core.cst$sym$opt_DASH_un,cljs.core.cst$sym$pred_DASH_exprs,cljs.core.cst$sym$opt_DASH_keys,cljs.core.cst$sym$req_DASH_specs,cljs.core.cst$sym$req,cljs.core.cst$sym$req_DASH_keys,cljs.core.cst$sym$opt_DASH_specs,cljs.core.cst$sym$pred_DASH_forms,cljs.core.cst$sym$opt,cljs.core.cst$sym$gfn], null),cljs.core.cst$kw$as,cljs.core.cst$sym$argm], null)], null))),cljs.core.cst$kw$doc,"Do not call this directly, use 'spec' with a map argument"], null)),cljs.core.cst$sym$req_DASH_un,cljs.core.cst$sym$opt_DASH_un,cljs.core.cst$sym$gfn,cljs.core.cst$sym$pred_DASH_exprs,cljs.core.cst$sym$keys_DASH_pred,cljs.core.cst$sym$argm,cljs.core.cst$sym$opt_DASH_keys,cljs.core.cst$sym$p__22529,cljs.core.cst$sym$req_DASH_specs,cljs.core.cst$sym$keys_DASH__GT_specs,cljs.core.cst$sym$req,cljs.core.cst$sym$id,cljs.core.cst$sym$req_DASH_keys,cljs.core.cst$sym$opt_DASH_specs,cljs.core.cst$sym$k_DASH__GT_s,cljs.core.cst$sym$pred_DASH_forms,cljs.core.cst$sym$meta22564], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec22563.cljs$lang$type = true;

cljs.spec.t_cljs$spec22563.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec22563";

cljs.spec.t_cljs$spec22563.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.spec/t_cljs$spec22563");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec22563 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec22563(map__22561__$2,opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,p__22529__$1,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta22564){
return (new cljs.spec.t_cljs$spec22563(map__22561__$2,opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,p__22529__$1,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta22564));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__22561,map__22561__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec22563(map__22561__$1,opt,cljs$spec$map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,p__22529,req_specs,keys__GT_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args22600 = [];
var len__7484__auto___22608 = arguments.length;
var i__7485__auto___22609 = (0);
while(true){
if((i__7485__auto___22609 < len__7484__auto___22608)){
args22600.push((arguments[i__7485__auto___22609]));

var G__22610 = (i__7485__auto___22609 + (1));
i__7485__auto___22609 = G__22610;
continue;
} else {
}
break;
}

var G__22602 = args22600.length;
switch (G__22602) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22600.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5(form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_(pred))){
var G__22603 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen(G__22603,gfn);
} else {
return G__22603;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_(pred))){
return (cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(pred,gfn) : cljs.spec.regex_spec_impl.call(null,pred,gfn));
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_(pred))){
var G__22604 = cljs.spec.the_spec(pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen(G__22604,gfn);
} else {
return G__22604;
}
} else {
if(typeof cljs.spec.t_cljs$spec22605 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec22605 = (function (form,pred,gfn,cpred_QMARK_,unc,meta22606){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta22606 = meta22606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec22605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22607,meta22606__$1){
var self__ = this;
var _22607__$1 = this;
return (new cljs.spec.t_cljs$spec22605(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta22606__$1));
});

cljs.spec.t_cljs$spec22605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22607){
var self__ = this;
var _22607__$1 = this;
return self__.meta22606;
});

cljs.spec.t_cljs$spec22605.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec22605.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec22605.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return (self__.unc.cljs$core$IFn$_invoke$arity$1 ? self__.unc.cljs$core$IFn$_invoke$arity$1(x) : self__.unc.call(null,x));
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec22605.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,cljs.spec.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.spec.abbrev(self__.form),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return null;
}
});

cljs.spec.t_cljs$spec22605.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.gen_for_pred(self__.pred);
}
});

cljs.spec.t_cljs$spec22605.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5(self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.t_cljs$spec22605.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec22605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$cpred_QMARK_,cljs.core.cst$sym$unc,cljs.core.cst$sym$meta22606], null);
});

cljs.spec.t_cljs$spec22605.cljs$lang$type = true;

cljs.spec.t_cljs$spec22605.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec22605";

cljs.spec.t_cljs$spec22605.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.spec/t_cljs$spec22605");
});

cljs.spec.__GT_t_cljs$spec22605 = (function cljs$spec$__GT_t_cljs$spec22605(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta22606){
return (new cljs.spec.t_cljs$spec22605(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta22606));
});

}

return (new cljs.spec.t_cljs$spec22605(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args22617 = [];
var len__7484__auto___22631 = arguments.length;
var i__7485__auto___22632 = (0);
while(true){
if((i__7485__auto___22632 < len__7484__auto___22631)){
args22617.push((arguments[i__7485__auto___22632]));

var G__22633 = (i__7485__auto___22632 + (1));
i__7485__auto___22632 = G__22633;
continue;
} else {
}
break;
}

var G__22619 = args22617.length;
switch (G__22619) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22617.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid();
var predx = ((function (id){
return (function (p1__22612_SHARP_){
var mm = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mmvar) : cljs.core.deref.call(null,mmvar));
var and__6397__auto__ = cljs.core.contains_QMARK_(cljs.core.methods$(mm),cljs.core._dispatch_fn(mm).call(null,p1__22612_SHARP_));
if(and__6397__auto__){
return (mm.cljs$core$IFn$_invoke$arity$1 ? mm.cljs$core$IFn$_invoke$arity$1(p1__22612_SHARP_) : mm.call(null,p1__22612_SHARP_));
} else {
return and__6397__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__22613_SHARP_){
return cljs.core._dispatch_fn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mmvar) : cljs.core.deref.call(null,mmvar))).call(null,p1__22613_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__22614_SHARP_,p2__22615_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22614_SHARP_,retag,p2__22615_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec22620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec22620 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta22621){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta22621 = meta22621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec22620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_22622,meta22621__$1){
var self__ = this;
var _22622__$1 = this;
return (new cljs.spec.t_cljs$spec22620(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta22621__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec22620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_22622){
var self__ = this;
var _22622__$1 = this;
return self__.meta22621;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec22620.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec22620.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred,x,self__.form);
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec22620.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.unform(pred,x);
} else {
throw (new Error([cljs.core.str("No method of: "),cljs.core.str(self__.form),cljs.core.str(" for dispatch value: "),cljs.core.str((self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x)))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec22620.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = (self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x));
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,dv);
var temp__4655__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.explain_1(self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$pred,cljs.spec.abbrev(self__.form),cljs.core.cst$kw$val,x,cljs.core.cst$kw$reason,"no method",cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec22620.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__22623){
var vec__22624 = p__22623;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22624,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22624,(1),null);
var p = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,p,vec__22624,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (rmap__$1,p,vec__22624,k,f,___$1,id,predx,dval,tag){
return (function (p1__22616_SHARP_){
return (self__.tag.cljs$core$IFn$_invoke$arity$2 ? self__.tag.cljs$core$IFn$_invoke$arity$2(p1__22616_SHARP_,k) : self__.tag.call(null,p1__22616_SHARP_,k));
});})(rmap__$1,p,vec__22624,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,cljs.core._conj((function (){var x__7243__auto__ = self__.form;
return cljs.core._conj((function (){var x__7243__auto____$1 = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
})(),cljs.core.cst$sym$method))], 0));
});})(rmap__$1,p,vec__22624,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (gen,___$1,id,predx,dval,tag){
return (function (p__22627){
var vec__22628 = p__22627;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22628,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.cst$kw$cljs$spec_SLASH_invalid);
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mmvar) : cljs.core.deref.call(null,self__.mmvar))))));
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs], 0));
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec22620.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec22620.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_multi_DASH_spec),(function (){var x__7243__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec22620.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$mmvar,cljs.core.cst$sym$retag,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$predx,cljs.core.cst$sym$dval,cljs.core.cst$sym$tag,cljs.core.cst$sym$meta22621], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec22620.cljs$lang$type = true;

cljs.spec.t_cljs$spec22620.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec22620";

cljs.spec.t_cljs$spec22620.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.spec/t_cljs$spec22620");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec22620 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec22620(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta22621){
return (new cljs.spec.t_cljs$spec22620(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta22621));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec22620(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args22635 = [];
var len__7484__auto___22641 = arguments.length;
var i__7485__auto___22642 = (0);
while(true){
if((i__7485__auto___22642 < len__7484__auto___22641)){
args22635.push((arguments[i__7485__auto___22642]));

var G__22643 = (i__7485__auto___22642 + (1));
i__7485__auto___22642 = G__22643;
continue;
} else {
}
break;
}

var G__22637 = args22635.length;
switch (G__22637) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22635.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3(forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec22638 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec22638 = (function (forms,preds,gfn,meta22639){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta22639 = meta22639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec22638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22640,meta22639__$1){
var self__ = this;
var _22640__$1 = this;
return (new cljs.spec.t_cljs$spec22638(self__.forms,self__.preds,self__.gfn,meta22639__$1));
});

cljs.spec.t_cljs$spec22638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22640){
var self__ = this;
var _22640__$1 = this;
return self__.meta22639;
});

cljs.spec.t_cljs$spec22638.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec22638.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.count(x))){
return ret;
} else {
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var cv = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((self__.preds.cljs$core$IFn$_invoke$arity$1 ? self__.preds.cljs$core$IFn$_invoke$arity$1(i) : self__.preds.call(null,i)),v,(self__.forms.cljs$core$IFn$_invoke$arity$1 ? self__.forms.cljs$core$IFn$_invoke$arity$1(i) : self__.forms.call(null,i)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,cv)){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__22645 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv));
var G__22646 = (i + (1));
ret = G__22645;
i = G__22646;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec22638.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,cljs.core.count(x))){
return ret;
} else {
var cv = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var v = cljs.spec.unform((self__.preds.cljs$core$IFn$_invoke$arity$1 ? self__.preds.cljs$core$IFn$_invoke$arity$1(i) : self__.preds.call(null,i)),cv);
var G__22647 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,v));
var G__22648 = (i + (1));
ret = G__22647;
i = G__22648;
continue;
}
break;
}
});

cljs.spec.t_cljs$spec22638.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__7243__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.array_seq([(function (){var x__7243__auto__ = cljs.core.count(self__.preds);
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (___$1){
return (function (i,form,pred){
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,v))){
return null;
} else {
return cljs.spec.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i),v);
}
});})(___$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec22638.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec22638.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec22638.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_tuple),self__.forms)));
});

cljs.spec.t_cljs$spec22638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta22639], null);
});

cljs.spec.t_cljs$spec22638.cljs$lang$type = true;

cljs.spec.t_cljs$spec22638.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec22638";

cljs.spec.t_cljs$spec22638.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.spec/t_cljs$spec22638");
});

cljs.spec.__GT_t_cljs$spec22638 = (function cljs$spec$__GT_t_cljs$spec22638(forms__$1,preds__$1,gfn__$1,meta22639){
return (new cljs.spec.t_cljs$spec22638(forms__$1,preds__$1,gfn__$1,meta22639));
});

}

return (new cljs.spec.t_cljs$spec22638(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x22650 = v;
x22650.cljs$core$IMapEntry$ = true;

x22650.cljs$core$IMapEntry$_key$arity$1 = ((function (x22650){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(0));
});})(x22650))
;

x22650.cljs$core$IMapEntry$_val$arity$1 = ((function (x22650){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(1));
});})(x22650))
;

return x22650;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid();
var kps = cljs.core.zipmap(keys,preds);
var cform = ((function (id,kps){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count(preds))){
var pred = (preds.cljs$core$IFn$_invoke$arity$1 ? preds.cljs$core$IFn$_invoke$arity$1(i) : preds.call(null,i));
var ret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred,x,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(forms,i));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,ret)){
var G__22665 = (i + (1));
i = G__22665;
continue;
} else {
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(i) : keys.call(null,i)),ret], null));
}
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
break;
}
});})(id,kps))
;
if(typeof cljs.spec.t_cljs$spec22658 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec22658 = (function (or_spec_impl,keys,forms,preds,gfn,id,kps,cform,meta22659){
this.or_spec_impl = or_spec_impl;
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.cform = cform;
this.meta22659 = meta22659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec22658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,cform){
return (function (_22660,meta22659__$1){
var self__ = this;
var _22660__$1 = this;
return (new cljs.spec.t_cljs$spec22658(self__.or_spec_impl,self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.cform,meta22659__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec22658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,cform){
return (function (_22660){
var self__ = this;
var _22660__$1 = this;
return self__.meta22659;
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec22658.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec22658.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec22658.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,p__22661){
var self__ = this;
var vec__22662 = p__22661;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22662,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22662,(1),null);
var ___$1 = this;
return cljs.spec.unform((self__.kps.cljs$core$IFn$_invoke$arity$1 ? self__.kps.cljs$core$IFn$_invoke$arity$1(k) : self__.kps.call(null,k)),x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec22658.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$__$1,x))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (this$__$1,id,kps,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return null;
} else {
return cljs.spec.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,in$,x);
}
});})(this$__$1,id,kps,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec22658.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,kps,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,cform){
return (function (){
return cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,cform))
,null)));
}
});})(___$1,id,kps,cform))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_(gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs], 0));
}
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec22658.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.or_spec_impl.cljs$core$IFn$_invoke$arity$4 ? self__.or_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.keys,self__.forms,self__.preds,gfn__$1) : self__.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec22658.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_or),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([self__.keys,self__.forms], 0)))));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec22658.getBasis = ((function (id,kps,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$or_DASH_spec_DASH_impl,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$skip_DASH_wiki,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys,cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn], null))),cljs.core.cst$kw$doc,"Do not call this directly, use 'or'"], null)),cljs.core.cst$sym$keys,cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$kps,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta22659], null);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec22658.cljs$lang$type = true;

cljs.spec.t_cljs$spec22658.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec22658";

cljs.spec.t_cljs$spec22658.cljs$lang$ctorPrWriter = ((function (id,kps,cform){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.spec/t_cljs$spec22658");
});})(id,kps,cform))
;

cljs.spec.__GT_t_cljs$spec22658 = ((function (id,kps,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec22658(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta22659){
return (new cljs.spec.t_cljs$spec22658(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta22659));
});})(id,kps,cform))
;

}

return (new cljs.spec.t_cljs$spec22658(cljs$spec$or_spec_impl,keys,forms,preds,gfn,id,kps,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__22692 = preds;
var vec__22694 = G__22692;
var seq__22695 = cljs.core.seq(vec__22694);
var first__22696 = cljs.core.first(seq__22695);
var seq__22695__$1 = cljs.core.next(seq__22695);
var pred = first__22696;
var preds__$1 = seq__22695__$1;
var G__22693 = forms;
var vec__22697 = G__22693;
var seq__22698 = cljs.core.seq(vec__22697);
var first__22699 = cljs.core.first(seq__22698);
var seq__22698__$1 = cljs.core.next(seq__22698);
var form = first__22699;
var forms__$1 = seq__22698__$1;
var ret__$1 = ret;
var G__22692__$1 = G__22692;
var G__22693__$1 = G__22693;
while(true){
var ret__$2 = ret__$1;
var vec__22700 = G__22692__$1;
var seq__22701 = cljs.core.seq(vec__22700);
var first__22702 = cljs.core.first(seq__22701);
var seq__22701__$1 = cljs.core.next(seq__22701);
var pred__$1 = first__22702;
var preds__$2 = seq__22701__$1;
var vec__22703 = G__22693__$1;
var seq__22704 = cljs.core.seq(vec__22703);
var first__22705 = cljs.core.first(seq__22704);
var seq__22704__$1 = cljs.core.next(seq__22704);
var form__$1 = first__22705;
var forms__$2 = seq__22704__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,nret)){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__22706 = nret;
var G__22707 = preds__$2;
var G__22708 = forms__$2;
ret__$1 = G__22706;
G__22692__$1 = G__22707;
G__22693__$1 = G__22708;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__22735 = forms;
var vec__22737 = G__22735;
var seq__22738 = cljs.core.seq(vec__22737);
var first__22739 = cljs.core.first(seq__22738);
var seq__22738__$1 = cljs.core.next(seq__22738);
var form = first__22739;
var forms__$1 = seq__22738__$1;
var G__22736 = preds;
var vec__22740 = G__22736;
var seq__22741 = cljs.core.seq(vec__22740);
var first__22742 = cljs.core.first(seq__22741);
var seq__22741__$1 = cljs.core.next(seq__22741);
var pred = first__22742;
var preds__$1 = seq__22741__$1;
var ret__$1 = ret;
var G__22735__$1 = G__22735;
var G__22736__$1 = G__22736;
while(true){
var ret__$2 = ret__$1;
var vec__22743 = G__22735__$1;
var seq__22744 = cljs.core.seq(vec__22743);
var first__22745 = cljs.core.first(seq__22744);
var seq__22744__$1 = cljs.core.next(seq__22744);
var form__$1 = first__22745;
var forms__$2 = seq__22744__$1;
var vec__22746 = G__22736__$1;
var seq__22747 = cljs.core.seq(vec__22746);
var first__22748 = cljs.core.first(seq__22747);
var seq__22747__$1 = cljs.core.next(seq__22747);
var pred__$1 = first__22748;
var preds__$2 = seq__22747__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,nret)){
var G__22749 = nret;
var G__22750 = forms__$2;
var G__22751 = preds__$2;
ret__$1 = G__22749;
G__22735__$1 = G__22750;
G__22736__$1 = G__22751;
continue;
} else {
return cljs.spec.explain_1(form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec22757 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec22757 = (function (and_spec_impl,forms,preds,gfn,meta22758){
this.and_spec_impl = and_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta22758 = meta22758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec22757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22759,meta22758__$1){
var self__ = this;
var _22759__$1 = this;
return (new cljs.spec.t_cljs$spec22757(self__.and_spec_impl,self__.forms,self__.preds,self__.gfn,meta22758__$1));
});

cljs.spec.t_cljs$spec22757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22759){
var self__ = this;
var _22759__$1 = this;
return self__.meta22758;
});

cljs.spec.t_cljs$spec22757.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec22757.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds(x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec22757.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__22753_SHARP_,p2__22752_SHARP_){
return cljs.spec.unform(p2__22752_SHARP_,p1__22753_SHARP_);
});})(___$1))
,x,cljs.core.reverse(self__.preds));
});

cljs.spec.t_cljs$spec22757.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list(self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec22757.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gensub(cljs.core.first(self__.preds),overrides,path,rmap,cljs.core.first(self__.forms));
}
});

cljs.spec.t_cljs$spec22757.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.and_spec_impl.cljs$core$IFn$_invoke$arity$3 ? self__.and_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : self__.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});

cljs.spec.t_cljs$spec22757.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_and),self__.forms)));
});

cljs.spec.t_cljs$spec22757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$and_DASH_spec_DASH_impl,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$skip_DASH_wiki,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn], null))),cljs.core.cst$kw$doc,"Do not call this directly, use 'and'"], null)),cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta22758], null);
});

cljs.spec.t_cljs$spec22757.cljs$lang$type = true;

cljs.spec.t_cljs$spec22757.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec22757";

cljs.spec.t_cljs$spec22757.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.spec/t_cljs$spec22757");
});

cljs.spec.__GT_t_cljs$spec22757 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec22757(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta22758){
return (new cljs.spec.t_cljs$spec22757(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta22758));
});

}

return (new cljs.spec.t_cljs$spec22757(cljs$spec$and_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.coll_prob = (function cljs$spec$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__6409__auto__ = kfn;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__6409__auto__ = kform;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.cst$sym$cljs$core_SLASH_coll_QMARK_;
}
})();
if(cljs.core.not(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return cljs.spec.explain_1(kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__6397__auto__ = distinct;
if(cljs.core.truth_(and__6397__auto__)){
return (!(cljs.core.empty_QMARK_(x))) && (cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,x)));
} else {
return and__6397__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$distinct_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__6397__auto__ = count;
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(count,cljs.core.bounded_count(count,x));
} else {
return and__6397__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__7243__auto__ = count;
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.array_seq([(function (){var x__7243__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__6397__auto__ = (function (){var or__6409__auto__ = min_count;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__6397__auto__)){
return !((((function (){var or__6409__auto__ = min_count;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__6409__auto__ = max_count;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__6397__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_),(function (){var x__7243__auto__ = (function (){var or__6409__auto__ = min_count;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.array_seq([(function (){var x__7243__auto__ = cljs.core.count((function (){var G__22763 = cljs.core.cst$sym$_PERCENT_;
return (cljs.core.unquote.cljs$core$IFn$_invoke$arity$1 ? cljs.core.unquote.cljs$core$IFn$_invoke$arity$1(G__22763) : cljs.core.unquote.call(null,G__22763));
})());
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = (function (){var or__6409__auto__ = max_count;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.cst$sym$js_SLASH_Number$MAX_SAFE_INTEGER;
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.merge_spec_impl = (function cljs$spec$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec22775 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec22775 = (function (merge_spec_impl,forms,preds,gfn,meta22776){
this.merge_spec_impl = merge_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta22776 = meta22776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec22775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22777,meta22776__$1){
var self__ = this;
var _22777__$1 = this;
return (new cljs.spec.t_cljs$spec22775(self__.merge_spec_impl,self__.forms,self__.preds,self__.gfn,meta22776__$1));
});

cljs.spec.t_cljs$spec22775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22777){
var self__ = this;
var _22777__$1 = this;
return self__.meta22776;
});

cljs.spec.t_cljs$spec22775.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec22775.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__22764_SHARP_,p2__22765_SHARP_){
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(p1__22764_SHARP_,x,p2__22765_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_invalid,null], null), null),ms))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,ms);
}
});

cljs.spec.t_cljs$spec22775.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__22766_SHARP_){
return cljs.spec.unform(p1__22766_SHARP_,x);
});})(___$1))
,cljs.core.reverse(self__.preds)));
});

cljs.spec.t_cljs$spec22775.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__22767_SHARP_,p2__22768_SHARP_){
return cljs.spec.explain_1(p1__22767_SHARP_,p2__22768_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.t_cljs$spec22775.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (___$1){
return (function (p1__22769_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,p1__22769_SHARP_);
});})(___$1))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__22770_SHARP_,p2__22771_SHARP_){
return cljs.spec.gensub(p1__22770_SHARP_,overrides,path,rmap,p2__22771_SHARP_);
});})(___$1))
,self__.preds,self__.forms))], 0));
}
});

cljs.spec.t_cljs$spec22775.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.merge_spec_impl.cljs$core$IFn$_invoke$arity$3 ? self__.merge_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : self__.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});

cljs.spec.t_cljs$spec22775.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_merge),self__.forms)));
});

cljs.spec.t_cljs$spec22775.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$merge_DASH_spec_DASH_impl,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$skip_DASH_wiki,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn], null))),cljs.core.cst$kw$doc,"Do not call this directly, use 'merge'"], null)),cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta22776], null);
});

cljs.spec.t_cljs$spec22775.cljs$lang$type = true;

cljs.spec.t_cljs$spec22775.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec22775";

cljs.spec.t_cljs$spec22775.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.spec/t_cljs$spec22775");
});

cljs.spec.__GT_t_cljs$spec22775 = (function cljs$spec$merge_spec_impl_$___GT_t_cljs$spec22775(merge_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta22776){
return (new cljs.spec.t_cljs$spec22775(merge_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta22776));
});

}

return (new cljs.spec.t_cljs$spec22775(cljs$spec$merge_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args22782 = [];
var len__7484__auto___22808 = arguments.length;
var i__7485__auto___22809 = (0);
while(true){
if((i__7485__auto___22809 < len__7484__auto___22808)){
args22782.push((arguments[i__7485__auto___22809]));

var G__22810 = (i__7485__auto___22809 + (1));
i__7485__auto___22809 = G__22810;
continue;
} else {
}
break;
}

var G__22784 = args22782.length;
switch (G__22784) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22782.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4(form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__22785,gfn){
var map__22786 = p__22785;
var map__22786__$1 = ((((!((map__22786 == null)))?((((map__22786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22786):map__22786);
var opts = map__22786__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22786__$1,cljs.core.cst$kw$max_DASH_count);
var kfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22786__$1,cljs.core.cst$kw$cljs$spec_SLASH_kfn);
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22786__$1,cljs.core.cst$kw$gen_DASH_max,(20));
var conform_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22786__$1,cljs.core.cst$kw$cljs$spec_SLASH_conform_DASH_all);
var conform_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22786__$1,cljs.core.cst$kw$conform_DASH_keys);
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22786__$1,cljs.core.cst$kw$distinct);
var kind_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22786__$1,cljs.core.cst$kw$cljs$spec_SLASH_kind_DASH_form);
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__22786__$1,cljs.core.cst$kw$into,cljs.core.PersistentVector.EMPTY);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22786__$1,cljs.core.cst$kw$count);
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22786__$1,cljs.core.cst$kw$min_DASH_count);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22786__$1,cljs.core.cst$kw$kind);
var conform_into = gen_into;
var check_QMARK_ = ((function (conform_into,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__22778_SHARP_){
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,p1__22778_SHARP_);
});})(conform_into,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
var kfn__$1 = (function (){var or__6409__auto__ = kfn;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return ((function (or__6409__auto__,conform_into,check_QMARK_,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (i,v){
return i;
});
;})(or__6409__auto__,conform_into,check_QMARK_,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
}
})();
var addcv = ((function (conform_into,check_QMARK_,kfn__$1,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cv);
});})(conform_into,check_QMARK_,kfn__$1,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
var vec__22788 = ((cljs.core.map_QMARK_(kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_map_QMARK_], null):((cljs.core.vector_QMARK_(kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_vector_QMARK_], null):((cljs.core.list_QMARK_(kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_list_QMARK_], null):((cljs.core.set_QMARK_(kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_set_QMARK_], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seqable_QMARK_,cljs.core.cst$sym$cljs$core_SLASH_seqable_QMARK_], null)
))));
var kindfn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22788,(0),null);
var kindform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22788,(1),null);
var cfns = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (x){
if((cljs.core.vector_QMARK_(x)) && ((cljs.core.not(conform_into)) || (cljs.core.vector_QMARK_(conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv);
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__6397__auto__ = cljs.core.map_QMARK_(x);
if(and__6397__auto__){
var or__6409__auto__ = (function (){var and__6397__auto____$1 = kind;
if(cljs.core.truth_(and__6397__auto____$1)){
return cljs.core.not(conform_into);
} else {
return and__6397__auto____$1;
}
})();
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.map_QMARK_(conform_into);
}
} else {
return and__6397__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not(conform_keys))){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cv,(1)));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.identity], null);
} else {
if(cljs.core.list_QMARK_(x)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__22779_SHARP_){
return cljs.core.empty((function (){var or__6409__auto__ = conform_into;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return p1__22779_SHARP_;
}
})());
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
if(typeof cljs.spec.t_cljs$spec22791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec22791 = (function (form,max_count,check_QMARK_,p__22785,vec__22788,gfn,gen_max,pred,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,kfn,gen_into,count,min_count,opts,kind,conform_all,map__22786,conform_into,meta22792){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.p__22785 = p__22785;
this.vec__22788 = vec__22788;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.kindform = kindform;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.distinct = distinct;
this.kindfn = kindfn;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.map__22786 = map__22786;
this.conform_into = conform_into;
this.meta22792 = meta22792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec22791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_22793,meta22792__$1){
var self__ = this;
var _22793__$1 = this;
return (new cljs.spec.t_cljs$spec22791(self__.form,self__.max_count,self__.check_QMARK_,self__.p__22785,self__.vec__22788,self__.gfn,self__.gen_max,self__.pred,self__.kindform,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.distinct,self__.kindfn,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.map__22786,self__.conform_into,meta22792__$1));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec22791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_22793){
var self__ = this;
var _22793__$1 = this;
return self__.meta22792;
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec22791.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec22791.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.coll_prob(x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,null,null,null))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__22794 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22794,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22794,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22794,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__22800 = cljs.core.seq(x);
var vec__22801 = G__22800;
var seq__22802 = cljs.core.seq(vec__22801);
var first__22803 = cljs.core.first(seq__22802);
var seq__22802__$1 = cljs.core.next(seq__22802);
var v = first__22803;
var vs = seq__22802__$1;
var vseq = vec__22801;
var ret__$1 = ret;
var i__$1 = i;
var G__22800__$1 = G__22800;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__22804 = G__22800__$1;
var seq__22805 = cljs.core.seq(vec__22804);
var first__22806 = cljs.core.first(seq__22805);
var seq__22805__$1 = cljs.core.next(seq__22805);
var v__$1 = first__22806;
var vs__$1 = seq__22805__$1;
var vseq__$1 = vec__22804;
if(vseq__$1){
var cv = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(self__.pred,v__$1,null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,cv)){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__22812 = (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(ret__$2,i__$2,v__$1,cv) : add.call(null,ret__$2,i__$2,v__$1,cv));
var G__22813 = (i__$2 + (1));
var G__22814 = vs__$1;
ret__$1 = G__22812;
i__$1 = G__22813;
G__22800__$1 = G__22814;
continue;
}
} else {
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
}
break;
}
} else {
if(cljs.core.indexed_QMARK_(x)){
var step = (function (){var x__6740__auto__ = (1);
var y__6741__auto__ = cljs.core.long$((cljs.core.count(x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__6740__auto__ > y__6741__auto__) ? x__6740__auto__ : y__6741__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count(x))){
return x;
} else {
if(cljs.core.truth_((function (){var G__22807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i);
return (self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1(G__22807) : self__.check_QMARK_.call(null,G__22807));
})())){
var G__22815 = (i + step);
i = G__22815;
continue;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
}
break;
}
} else {
var or__6409__auto__ = (function (){var and__6397__auto__ = cljs.core.every_QMARK_(self__.check_QMARK_,cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.spec._STAR_coll_check_limit_STAR_,x));
if(and__6397__auto__){
return x;
} else {
return and__6397__auto__;
}
})();
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
}

}
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec22791.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec22791.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__6409__auto__ = cljs.spec.coll_prob(x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,cljs.spec._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (or__6409__auto__,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (i,v){
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$2 ? self__.kfn.cljs$core$IFn$_invoke$arity$2(i,v) : self__.kfn.call(null,i,v));
if(cljs.core.truth_((self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : self__.check_QMARK_.call(null,v)))){
return null;
} else {
var prob = cljs.spec.explain_1(self__.form,self__.pred,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
return prob;
}
});})(or__6409__auto__,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),x))));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec22791.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var pgen = cljs.spec.gensub(self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(self__.gen_into)?cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.empty(self__.gen_into)], 0)):(cljs.core.truth_(self__.kind)?cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__22780_SHARP_){
if(cljs.core.empty_QMARK_(p1__22780_SHARP_)){
return p1__22780_SHARP_;
} else {
return cljs.core.empty(p1__22780_SHARP_);
}
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.spec.gensub(self__.kind,overrides,path,rmap,self__.form)], 0)):cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0))
)),((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (init){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__22781_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__22781_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__22781_SHARP_);
}
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$num_DASH_elements,self__.count,cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0)):cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_elements,(function (){var or__6409__auto__ = self__.min_count;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})(),cljs.core.cst$kw$max_DASH_elements,(function (){var or__6409__auto__ = self__.max_count;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var x__6740__auto__ = self__.gen_max;
var y__6741__auto__ = ((2) * (function (){var or__6409__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return (0);
}
})());
return ((x__6740__auto__ > y__6741__auto__) ? x__6740__auto__ : y__6741__auto__);
}
})(),cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,self__.count], 0)):(cljs.core.truth_((function (){var or__6409__auto__ = self__.min_count;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,(function (){var or__6409__auto__ = self__.min_count;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})(),(function (){var or__6409__auto__ = self__.max_count;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var x__6740__auto__ = self__.gen_max;
var y__6741__auto__ = ((2) * (function (){var or__6409__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return (0);
}
})());
return ((x__6740__auto__ > y__6741__auto__) ? x__6740__auto__ : y__6741__auto__);
}
})()], 0)):cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,(0),self__.gen_max], 0))
)))], 0));
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
], 0));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec22791.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec22791.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_every),(function (){var x__7243__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([self__.opts], 0))], 0))));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec22791.getBasis = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$max_DASH_count,cljs.core.cst$sym$check_QMARK_,cljs.core.cst$sym$p__22785,cljs.core.cst$sym$vec__22788,cljs.core.cst$sym$gfn,cljs.core.cst$sym$gen_DASH_max,cljs.core.cst$sym$pred,cljs.core.cst$sym$kindform,cljs.core.cst$sym$conform_DASH_keys,cljs.core.cst$sym$kind_DASH_form,cljs.core.cst$sym$addcv,cljs.core.cst$sym$cfns,cljs.core.cst$sym$distinct,cljs.core.cst$sym$kindfn,cljs.core.cst$sym$kfn,cljs.core.cst$sym$gen_DASH_into,cljs.core.cst$sym$count,cljs.core.cst$sym$min_DASH_count,cljs.core.cst$sym$opts,cljs.core.cst$sym$kind,cljs.core.cst$sym$conform_DASH_all,cljs.core.cst$sym$map__22786,cljs.core.cst$sym$conform_DASH_into,cljs.core.cst$sym$meta22792], null);
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec22791.cljs$lang$type = true;

cljs.spec.t_cljs$spec22791.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec22791";

cljs.spec.t_cljs$spec22791.cljs$lang$ctorPrWriter = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.spec/t_cljs$spec22791");
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.__GT_t_cljs$spec22791 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function cljs$spec$__GT_t_cljs$spec22791(form__$1,max_count__$1,check_QMARK___$1,p__22785__$1,vec__22788__$1,gfn__$1,gen_max__$1,pred__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,map__22786__$2,conform_into__$1,meta22792){
return (new cljs.spec.t_cljs$spec22791(form__$1,max_count__$1,check_QMARK___$1,p__22785__$1,vec__22788__$1,gfn__$1,gen_max__$1,pred__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,map__22786__$2,conform_into__$1,meta22792));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__22788,kindfn,kindform,cfns,map__22786,map__22786__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

}

return (new cljs.spec.t_cljs$spec22791(form,max_count,check_QMARK_,p__22785,vec__22788,gfn,gen_max,pred,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,map__22786__$1,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_accept,cljs.core.cst$kw$ret,x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__22816){
var map__22819 = p__22816;
var map__22819__$1 = ((((!((map__22819 == null)))?((((map__22819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22819):map__22819);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22819__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__22821){
var map__22834 = p__22821;
var map__22834__$1 = ((((!((map__22834 == null)))?((((map__22834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22834):map__22834);
var vec__22835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22834__$1,cljs.core.cst$kw$ps);
var seq__22836 = cljs.core.seq(vec__22835);
var first__22837 = cljs.core.first(seq__22836);
var seq__22836__$1 = cljs.core.next(seq__22836);
var p1 = first__22837;
var pr = seq__22836__$1;
var ps = vec__22835;
var vec__22838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22834__$1,cljs.core.cst$kw$ks);
var seq__22839 = cljs.core.seq(vec__22838);
var first__22840 = cljs.core.first(seq__22839);
var seq__22839__$1 = cljs.core.next(seq__22839);
var k1 = first__22840;
var kr = seq__22839__$1;
var ks = vec__22838;
var vec__22841 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22834__$1,cljs.core.cst$kw$forms);
var seq__22842 = cljs.core.seq(vec__22841);
var first__22843 = cljs.core.first(seq__22842);
var seq__22842__$1 = cljs.core.next(seq__22842);
var f1 = first__22843;
var fr = seq__22842__$1;
var forms = vec__22841;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22834__$1,cljs.core.cst$kw$ret);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22834__$1,cljs.core.cst$kw$rep_PLUS_);
if(cljs.core.every_QMARK_(cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p1))){
var rp = cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs$spec$pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,fr,cljs.core.cst$kw$ret,ret__$1], null));
} else {
return cljs.spec.accept(ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_pcat,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,ret,cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$rep_PLUS_,rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__7491__auto__ = [];
var len__7484__auto___22846 = arguments.length;
var i__7485__auto___22847 = (0);
while(true){
if((i__7485__auto___22847 < len__7484__auto___22846)){
args__7491__auto__.push((arguments[i__7485__auto___22847]));

var G__22848 = (i__7485__auto___22847 + (1));
i__7485__auto___22847 = G__22848;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq22845){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22845));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_rep,cljs.core.cst$kw$p2,p2,cljs.core.cst$kw$splice,splice,cljs.core.cst$kw$forms,form,cljs.core.cst$kw$id,cljs.core.random_uuid()], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$p1,p2,cljs.core.array_seq([cljs.core.cst$kw$ret,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(r,cljs.core.cst$kw$p1,p1,cljs.core.array_seq([cljs.core.cst$kw$ret,ret], 0));
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),cljs.core.cst$kw$forms,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__7243__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})(),(function (){var x__7243__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH__STAR_),(function (){var x__7243__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})())))),cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$rep_PLUS_,form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_amp,cljs.core.cst$kw$p1,re,cljs.core.cst$kw$ps,preds,cljs.core.cst$kw$forms,pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__6409__auto__ = ks;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__22849_SHARP_){
var G__22852 = cljs.core.first(p1__22849_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__22852) : f.call(null,G__22852));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__6409__auto__ = cljs.core.seq(ks);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__6409__auto__ = cljs.core.seq(forms);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pks){
return (function (p1__22850_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__22850_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__22862 = cljs.spec.filter_alt(ps,ks,forms,cljs.core.identity);
var vec__22865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22862,(0),null);
var seq__22866 = cljs.core.seq(vec__22865);
var first__22867 = cljs.core.first(seq__22866);
var seq__22866__$1 = cljs.core.next(seq__22866);
var p1 = first__22867;
var pr = seq__22866__$1;
var ps__$1 = vec__22865;
var vec__22868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22862,(1),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22868,(0),null);
var ks__$1 = vec__22868;
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22862,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_alt,cljs.core.cst$kw$ps,ps__$1,cljs.core.cst$kw$ks,ks__$1,cljs.core.cst$kw$forms,forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p1))){
return cljs.spec.accept(cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__7491__auto__ = [];
var len__7484__auto___22872 = arguments.length;
var i__7485__auto___22873 = (0);
while(true){
if((i__7485__auto___22873 < len__7484__auto___22872)){
args__7491__auto__.push((arguments[i__7485__auto___22873]));

var G__22874 = (i__7485__auto___22873 + (1));
i__7485__auto___22873 = G__22874;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_(ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq22871){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22871));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__6397__auto__ = p1;
if(cljs.core.truth_(and__6397__auto__)){
return p2;
} else {
return and__6397__auto__;
}
})())){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0));
} else {
var or__6409__auto__ = p1;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alt_STAR_(ps,ks,forms),cljs.core.cst$kw$id,cljs.core.random_uuid());
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.alt_STAR_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept(cljs.core.cst$kw$cljs$spec_SLASH_nil)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,cljs.core.cst$kw$cljs$spec_SLASH_nil], null)),cljs.core.cst$kw$maybe,form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__6409__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pret,cljs.core.cst$kw$cljs$spec_SLASH_nil);
if(or__6409__auto__){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = (function (){var and__6397__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_pcat,null,cljs.core.cst$kw$cljs$spec_SLASH_rep,null], null), null).call(null,cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_(p1)));
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.empty_QMARK_(pret);
} else {
return and__6397__auto__;
}
})();
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__22878 = cljs.spec.reg_resolve_BANG_(p);
var map__22878__$1 = ((((!((map__22878 == null)))?((((map__22878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22878):map__22878);
var p__$1 = map__22878__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22878__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22878__$1,cljs.core.cst$kw$ps);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22878__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22878__$1,cljs.core.cst$kw$p2);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22878__$1,cljs.core.cst$kw$forms);
var G__22880 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__22880)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__22880)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__22880)){
var and__6397__auto__ = cljs$spec$accept_nil_QMARK_(p1);
if(cljs.core.truth_(and__6397__auto__)){
var or__6409__auto__ = cljs.spec.noret_QMARK_(p1,(cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.preturn.call(null,p1)));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var ret = cljs.spec.and_preds((cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.preturn.call(null,p1)),ps,cljs.core.next(forms));
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_invalid);
}
} else {
return and__6397__auto__;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__22880)){
var or__6409__auto__ = (p1 === p2);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return cljs$spec$accept_nil_QMARK_(p1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__22880)){
return cljs.core.every_QMARK_(cljs$spec$accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__22880)){
return cljs.core.some(cljs$spec$accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__22899 = cljs.spec.reg_resolve_BANG_(p);
var map__22899__$1 = ((((!((map__22899 == null)))?((((map__22899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22899):map__22899);
var p__$1 = map__22899__$1;
var vec__22900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22899__$1,cljs.core.cst$kw$ps);
var seq__22901 = cljs.core.seq(vec__22900);
var first__22902 = cljs.core.first(seq__22901);
var seq__22901__$1 = cljs.core.next(seq__22901);
var p0 = first__22902;
var pr = seq__22901__$1;
var ps = vec__22900;
var vec__22903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22899__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22903,(0),null);
var ks = vec__22903;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22899__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22899__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22899__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22899__$1,cljs.core.cst$kw$forms);
var G__22907 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__22907)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__22907)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__22907)){
var pret = cljs$spec$preturn(p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_(p1,pret))){
return cljs.core.cst$kw$cljs$spec_SLASH_nil;
} else {
return cljs.spec.and_preds(pret,ps,forms);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__22907)){
return (cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3(p1,ret,k) : cljs.spec.add_ret.call(null,p1,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__22907)){
return (cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3(p0,ret,k) : cljs.spec.add_ret.call(null,p0,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__22907)){
var vec__22908 = cljs.spec.filter_alt(ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__22911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22908,(0),null);
var p0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22911,(0),null);
var vec__22914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22908,(1),null);
var k0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22914,(0),null);
var r = (((p0__$1 == null))?cljs.core.cst$kw$cljs$spec_SLASH_nil:cljs$spec$preturn(p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__22937 = cljs.spec.reg_resolve_BANG_(p);
var map__22937__$1 = ((((!((map__22937 == null)))?((((map__22937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22937):map__22937);
var p__$1 = map__22937__$1;
var vec__22938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22937__$1,cljs.core.cst$kw$ps);
var seq__22939 = cljs.core.seq(vec__22938);
var first__22940 = cljs.core.first(seq__22939);
var seq__22939__$1 = cljs.core.next(seq__22939);
var p0 = first__22940;
var pr = seq__22939__$1;
var ps = vec__22938;
var vec__22941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22937__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22941,(0),null);
var ks = vec__22941;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22937__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22937__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22937__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22937__$1,cljs.core.cst$kw$forms);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22937__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22937__$1,cljs.core.cst$kw$maybe);
var kps = cljs.core.zipmap(ks,ps);
var G__22945 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__22945)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__22945)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform(p__$1,x)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__22945)){
var px = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__22945,map__22937,map__22937__$1,p__$1,vec__22938,seq__22939,first__22940,seq__22939__$1,p0,pr,ps,vec__22941,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__22918_SHARP_,p2__22917_SHARP_){
return cljs.spec.unform(p2__22917_SHARP_,p1__22918_SHARP_);
});})(G__22945,map__22937,map__22937__$1,p__$1,vec__22938,seq__22939,first__22940,seq__22939__$1,p0,pr,ps,vec__22941,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse(ps));
return cljs$spec$op_unform(p1,px);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__22945)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__22945,map__22937,map__22937__$1,p__$1,vec__22938,seq__22939,first__22940,seq__22939__$1,p0,pr,ps,vec__22941,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__22919_SHARP_){
return cljs$spec$op_unform(p1,p1__22919_SHARP_);
});})(G__22945,map__22937,map__22937__$1,p__$1,vec__22938,seq__22939,first__22940,seq__22939__$1,p0,pr,ps,vec__22941,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([x], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__22945)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__22945,map__22937,map__22937__$1,p__$1,vec__22938,seq__22939,first__22940,seq__22939__$1,p0,pr,ps,vec__22941,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__22920_SHARP_){
return cljs$spec$op_unform(p0,p1__22920_SHARP_);
});})(G__22945,map__22937,map__22937__$1,p__$1,vec__22938,seq__22939,first__22940,seq__22939__$1,p0,pr,ps,vec__22941,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([x], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__22945,map__22937,map__22937__$1,p__$1,vec__22938,seq__22939,first__22940,seq__22939__$1,p0,pr,ps,vec__22941,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_(x,k__$1)){
return cljs$spec$op_unform((kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k__$1));
} else {
return null;
}
});})(G__22945,map__22937,map__22937__$1,p__$1,vec__22938,seq__22939,first__22940,seq__22939__$1,p0,pr,ps,vec__22941,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([ks], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__22945)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform(p0,x)], null);
} else {
var vec__22946 = x;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22946,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22946,(1),null);
return cljs$spec$op_unform((kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1)),v);
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__22952 = cljs.spec.reg_resolve_BANG_(p);
var map__22952__$1 = ((((!((map__22952 == null)))?((((map__22952.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22952.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22952):map__22952);
var p__$1 = map__22952__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22952__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22952__$1,cljs.core.cst$kw$ps);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22952__$1,cljs.core.cst$kw$splice);
var prop = ((function (map__22952,map__22952__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core.empty_QMARK_(ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__22952,map__22952__$1,p__$1,op,ps,splice))
;
var G__22954 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__22954)){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__22954)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__22954)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__22954)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__22954)){
return prop();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__22954)){
return prop();
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__22969 = cljs.spec.reg_resolve_BANG_(p);
var map__22969__$1 = ((((!((map__22969 == null)))?((((map__22969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22969):map__22969);
var p__$1 = map__22969__$1;
var vec__22970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,cljs.core.cst$kw$ps);
var seq__22971 = cljs.core.seq(vec__22970);
var first__22972 = cljs.core.first(seq__22971);
var seq__22971__$1 = cljs.core.next(seq__22971);
var p0 = first__22972;
var pr = seq__22971__$1;
var ps = vec__22970;
var vec__22973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,cljs.core.cst$kw$ks);
var seq__22974 = cljs.core.seq(vec__22973);
var first__22975 = cljs.core.first(seq__22974);
var seq__22974__$1 = cljs.core.next(seq__22974);
var k0 = first__22975;
var kr = seq__22974__$1;
var ks = vec__22973;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,cljs.core.cst$kw$ret);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,cljs.core.cst$kw$splice);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,cljs.core.cst$kw$forms);
if(cljs.core.truth_(p__$1)){
var G__22977 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__22977)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__22977)){
var ret__$1 = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(p__$1,x,p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,ret__$1)){
return null;
} else {
return cljs.spec.accept(ret__$1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__22977)){
var temp__4657__auto__ = cljs$spec$deriv(p1,x);
if(cljs.core.truth_(temp__4657__auto__)){
var p1__$1 = temp__4657__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds(cljs.spec.preturn(p1__$1),ps,cljs.core.next(forms));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret__$1,cljs.core.cst$kw$cljs$spec_SLASH_invalid)){
return null;
} else {
return cljs.spec.accept(ret__$1);
}
} else {
return cljs.spec.amp_impl(p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__22977)){
return cljs.spec.alt2(cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,cljs.core.cons(cljs$spec$deriv(p0,x),pr),cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p0))?cljs$spec$deriv(cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,cljs.core.next(forms),cljs.core.cst$kw$ret,cljs.spec.add_ret(p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__22977)){
return cljs.spec.alt_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__22977,map__22969,map__22969__$1,p__$1,vec__22970,seq__22971,first__22972,seq__22971__$1,p0,pr,ps,vec__22973,seq__22974,first__22975,seq__22974__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__22955_SHARP_){
return cljs$spec$deriv(p1__22955_SHARP_,x);
});})(G__22977,map__22969,map__22969__$1,p__$1,vec__22970,seq__22971,first__22972,seq__22971__$1,p0,pr,ps,vec__22973,seq__22974,first__22975,seq__22974__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__22977)){
return cljs.spec.alt2(cljs.spec.rep_STAR_(cljs$spec$deriv(p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p1))?cljs$spec$deriv(cljs.spec.rep_STAR_(p2,p2,cljs.spec.add_ret(p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__22981 = cljs.spec.reg_resolve_BANG_(p);
var map__22981__$1 = ((((!((map__22981 == null)))?((((map__22981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22981):map__22981);
var p__$1 = map__22981__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22981__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22981__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22981__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22981__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22981__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22981__$1,cljs.core.cst$kw$p1);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22981__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22981__$1,cljs.core.cst$kw$maybe);
if(cljs.core.truth_(p__$1)){
var G__22983 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__22983)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__22983)){
return p__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__22983)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$clojure$spec_SLASH__AMPERSAND_,cljs$spec$op_describe(p1),forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__22983)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj((function (){var x__7243__auto__ = rep_PLUS_;
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$cljs$spec_SLASH__PLUS_);
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec_SLASH_cat,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([(function (){var or__6409__auto__ = cljs.core.seq(ks);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$_);
}
})(),forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__22983)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj((function (){var x__7243__auto__ = maybe;
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core.cst$sym$cljs$spec_SLASH__QMARK_);
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec_SLASH_alt,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([ks,forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__22983)){
var x__7243__auto__ = (cljs.core.truth_(splice)?cljs.core.cst$sym$cljs$spec_SLASH__PLUS_:cljs.core.cst$sym$cljs$spec_SLASH__STAR_);
return cljs.core._conj((function (){var x__7243__auto____$1 = forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto____$1);
})(),x__7243__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__23015 = input;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23015,(0),null);
var input__$1 = vec__23015;
var map__23018 = cljs.spec.reg_resolve_BANG_(p);
var map__23018__$1 = ((((!((map__23018 == null)))?((((map__23018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23018):map__23018);
var p__$1 = map__23018__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,cljs.core.cst$kw$p2);
var via__$1 = (function (){var temp__4655__auto__ = cljs.spec.spec_name(p__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__23015,x,input__$1,map__23018,map__23018__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$reason,"Insufficient input",cljs.core.cst$kw$pred,cljs.spec.abbrev(form__$1),cljs.core.cst$kw$val,cljs.core.List.EMPTY,cljs.core.cst$kw$via,via__$1,cljs.core.cst$kw$in,in$], null)], null);
});})(vec__23015,x,input__$1,map__23018,map__23018__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__23020 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__23020)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__23020)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,form);
} else {
return cljs.spec.explain_1(form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__23020)){
if(cljs.core.empty_QMARK_(input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p1))){
return cljs.spec.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.preturn(p1));
} else {
return insufficient(path,cljs.spec.op_describe(p1));
}
} else {
var temp__4655__auto__ = cljs.spec.deriv(p1,x);
if(cljs.core.truth_(temp__4655__auto__)){
var p1__$1 = temp__4655__auto__;
return cljs.spec.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.preturn(p1__$1));
} else {
return cljs$spec$op_explain(cljs.spec.op_describe(p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__23020)){
var pkfs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__6409__auto__ = cljs.core.seq(ks);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__6409__auto__ = cljs.core.seq(forms);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
var vec__23021 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pkfs)))?cljs.core.first(pkfs):cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (pkfs,G__23020,vec__23015,x,input__$1,map__23018,map__23018__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__23024){
var vec__23025 = p__23024;
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23025,(0),null);
return cljs.spec.accept_nil_QMARK_(p__$2);
});})(pkfs,G__23020,vec__23015,x,input__$1,map__23018,map__23018__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23021,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23021,(1),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23021,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var form__$2 = (function (){var or__6409__auto__ = form__$1;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.spec.op_describe(pred);
}
})();
if((cljs.core.empty_QMARK_(input__$1)) && (cljs.core.not(pred))){
return insufficient(path__$1,form__$2);
} else {
return cljs$spec$op_explain(form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__23020)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,cljs.spec.op_describe(p__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (G__23020,vec__23015,x,input__$1,map__23018,map__23018__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs$spec$op_explain((function (){var or__6409__auto__ = form__$1;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.spec.op_describe(pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path),via__$1,in$,input__$1);
});})(G__23020,vec__23015,x,input__$1,map__23018,map__23018__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__6409__auto__ = cljs.core.seq(ks);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__6409__auto__ = cljs.core.seq(forms);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__23020)){
return cljs$spec$op_explain((((p1 === p2))?forms:cljs.spec.op_describe(p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__23049 = cljs.spec.reg_resolve_BANG_(p);
var map__23049__$1 = ((((!((map__23049 == null)))?((((map__23049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23049):map__23049);
var p__$1 = map__23049__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23049__$1,cljs.core.cst$kw$ps);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23049__$1,cljs.core.cst$kw$forms);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23049__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23049__$1,cljs.core.cst$kw$ret);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23049__$1,cljs.core.cst$kw$splice);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23049__$1,cljs.core.cst$kw$ks);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23049__$1,cljs.core.cst$kw$p1);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23049__$1,cljs.core.cst$kw$cljs$spec_SLASH_gfn);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23049__$1,cljs.core.cst$kw$id);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23049__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck(rmap,id):rmap);
var ggens = ((function (map__23049,map__23049__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__23049,map__23049__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__6397__auto__ = rmap__$1;
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = id;
if(cljs.core.truth_(and__6397__auto____$1)){
var and__6397__auto____$2 = k;
if(cljs.core.truth_(and__6397__auto____$2)){
return cljs.spec.recur_limit_QMARK_(rmap__$1,id,path,k);
} else {
return and__6397__auto____$2;
}
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (map__23049,map__23049__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (){
return cljs$spec$re_gen(p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path),rmap__$1,(function (){var or__6409__auto__ = f__$1;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return p__$2;
}
})());
});})(map__23049,map__23049__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
,null)));
} else {
return cljs$spec$re_gen(p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path),rmap__$1,(function (){var or__6409__auto__ = f__$1;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__23049,map__23049__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,ps__$1,(function (){var or__6409__auto__ = cljs.core.seq(ks__$1);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__6409__auto__ = cljs.core.seq(forms__$1);
if(or__6409__auto__){
return or__6409__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(map__23049,map__23049__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
var or__6409__auto__ = (function (){var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
var G__23052 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$accept,G__23052)){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__23052)){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = (cljs.core.truth_(gfn)?(gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null)):null);
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__23053 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__23053)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0));
} else {
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__23053)){
var temp__4657__auto__ = cljs.spec.gensub(p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__23053)){
return cljs$spec$re_gen(p1,overrides,path,rmap__$1,cljs.spec.op_describe(p1));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__23053)){
var gens = ggens(ps,ks,forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gens)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__23053)){
var gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,ggens(ps,ks,forms));
if(cljs.core.empty_QMARK_(gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gens], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__23053)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0));
} else {
var temp__4657__auto__ = cljs$spec$re_gen(p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (g,temp__4657__auto__,G__23053,or__6409__auto____$1,or__6409__auto__,map__23049,map__23049__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens){
return (function (p1__23028_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__23028_SHARP_);
});})(g,temp__4657__auto__,G__23053,or__6409__auto____$1,or__6409__auto__,map__23049,map__23049__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([g], 0))], 0));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__23054){
while(true){
var vec__23058 = p__23054;
var seq__23059 = cljs.core.seq(vec__23058);
var first__23060 = cljs.core.first(seq__23059);
var seq__23059__$1 = cljs.core.next(seq__23059);
var x = first__23060;
var xs = seq__23059__$1;
var data = vec__23058;
if(cljs.core.empty_QMARK_(data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p))){
var ret = cljs.spec.preturn(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return null;
} else {
return ret;
}
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
} else {
var temp__4655__auto__ = cljs.spec.deriv(p,x);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__23061 = dp;
var G__23062 = xs;
p = G__23061;
p__23054 = G__23062;
continue;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__23076 = input;
var vec__23077 = G__23076;
var seq__23078 = cljs.core.seq(vec__23077);
var first__23079 = cljs.core.first(seq__23078);
var seq__23078__$1 = cljs.core.next(seq__23078);
var x = first__23079;
var xs = seq__23078__$1;
var data = vec__23077;
var i = (0);
var p__$1 = p;
var G__23076__$1 = G__23076;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__23080 = G__23076__$1;
var seq__23081 = cljs.core.seq(vec__23080);
var first__23082 = cljs.core.first(seq__23081);
var seq__23081__$1 = cljs.core.next(seq__23081);
var x__$1 = first__23082;
var xs__$1 = seq__23081__$1;
var data__$1 = vec__23080;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_(data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p__$2))){
return null;
} else {
return cljs.spec.op_explain(cljs.spec.op_describe(p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv(p__$2,x__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__23083 = dp;
var G__23084 = xs__$1;
var G__23085 = (i__$2 + (1));
p__$1 = G__23083;
G__23076__$1 = G__23084;
i__$1 = G__23085;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p__$2))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(p__$2),cljs.core.cst$kw$cljs$spec_SLASH_pcat)){
return cljs.spec.op_explain(cljs.spec.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.abbrev(cljs.spec.op_describe(re)),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
} else {
var or__6409__auto__ = cljs.spec.op_explain(cljs.spec.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.abbrev(cljs.spec.op_describe(p__$2)),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec23089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23089 = (function (regex_spec_impl,re,gfn,meta23090){
this.regex_spec_impl = regex_spec_impl;
this.re = re;
this.gfn = gfn;
this.meta23090 = meta23090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23091,meta23090__$1){
var self__ = this;
var _23091__$1 = this;
return (new cljs.spec.t_cljs$spec23089(self__.regex_spec_impl,self__.re,self__.gfn,meta23090__$1));
});

cljs.spec.t_cljs$spec23089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23091){
var self__ = this;
var _23091__$1 = this;
return self__.meta23090;
});

cljs.spec.t_cljs$spec23089.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec23089.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.re_conform(self__.re,cljs.core.seq(x));
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});

cljs.spec.t_cljs$spec23089.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform(self__.re,x);
});

cljs.spec.t_cljs$spec23089.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.re_explain(path,via,in$,self__.re,cljs.core.seq(x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.spec.abbrev(cljs.spec.op_describe(self__.re)),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});

cljs.spec.t_cljs$spec23089.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.re_gen(self__.re,overrides,path,rmap,cljs.spec.op_describe(self__.re));
}
});

cljs.spec.t_cljs$spec23089.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? self__.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(self__.re,gfn__$1) : self__.regex_spec_impl.call(null,self__.re,gfn__$1));
});

cljs.spec.t_cljs$spec23089.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe(self__.re);
});

cljs.spec.t_cljs$spec23089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$regex_DASH_spec_DASH_impl,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$skip_DASH_wiki,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$re,cljs.core.cst$sym$gfn], null))),cljs.core.cst$kw$doc,"Do not call this directly, use 'spec' with a regex op argument"], null)),cljs.core.cst$sym$re,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta23090], null);
});

cljs.spec.t_cljs$spec23089.cljs$lang$type = true;

cljs.spec.t_cljs$spec23089.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23089";

cljs.spec.t_cljs$spec23089.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.spec/t_cljs$spec23089");
});

cljs.spec.__GT_t_cljs$spec23089 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec23089(regex_spec_impl__$1,re__$1,gfn__$1,meta23090){
return (new cljs.spec.t_cljs$spec23089(regex_spec_impl__$1,re__$1,gfn__$1,meta23090));
});

}

return (new cljs.spec.t_cljs$spec23089(cljs$spec$regex_spec_impl,re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cargs,cljs.core.cst$kw$cljs$spec_SLASH_invalid)){
return null;
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = cljs.spec.conform(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__6397__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cret,cljs.core.cst$kw$cljs$spec_SLASH_invalid);
if(and__6397__auto__){
if(cljs.core.truth_(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return true;
}
} else {
return and__6397__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__23092_SHARP_){
return cljs.spec.call_valid_QMARK_(f,specs,p1__23092_SHARP_);
});})(g))
], 0));
var ret = cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([iters,prop], 0));
var temp__4655__auto__ = cljs.core.cst$kw$smallest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$shrunk.cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__23096 = temp__4655__auto__;
var smallest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23096,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,argspec,cljs.core.cst$kw$ret,retspec,cljs.core.cst$kw$fn,fnspec], null);
if(typeof cljs.spec.t_cljs$spec23105 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec23105 = (function (fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta23106){
this.fspec_impl = fspec_impl;
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta23106 = meta23106;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_23107,meta23106__$1){
var self__ = this;
var _23107__$1 = this;
return (new cljs.spec.t_cljs$spec23105(self__.fspec_impl,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta23106__$1));
});})(specs))
;

cljs.spec.t_cljs$spec23105.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_23107){
var self__ = this;
var _23107__$1 = this;
return self__.meta23106;
});})(specs))
;

cljs.spec.t_cljs$spec23105.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec23105.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec23105.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec23105.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
if((f === cljs.spec.validate_fn(f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});})(specs))
;

cljs.spec.t_cljs$spec23105.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec23105.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
var args = cljs.spec.validate_fn(f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e23108){if((e23108 instanceof Error)){
var t = e23108;
return t;
} else {
throw e23108;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.list(cljs.core.cst$sym$apply,cljs.core.cst$sym$fn),cljs.core.cst$kw$val,args,cljs.core.cst$kw$reason,ret.message,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var cret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_invalid,cret)){
return cljs.spec.explain_1(self__.rform,self__.retspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$ret),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform(self__.argspec,args);
return cljs.spec.explain_1(self__.fform,self__.fnspec,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$fn),via,in$,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$kw$val,f,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});})(specs))
;

cljs.spec.t_cljs$spec23105.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (___$3,specs){
return (function() { 
var G__23111__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__7395__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23109_23112 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23110_23113 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_23109_23112,_STAR_print_fn_STAR_23110_23113,sb__7395__auto__,___$3,specs){
return (function (x__7396__auto__){
return sb__7395__auto__.append(x__7396__auto__);
});})(_STAR_print_newline_STAR_23109_23112,_STAR_print_fn_STAR_23110_23113,sb__7395__auto__,___$3,specs))
;

try{cljs.spec.explain(self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23110_23113;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23109_23112;
}
return [cljs.core.str(sb__7395__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate(cljs.spec.gen.cljs$core$IFn$_invoke$arity$2(self__.retspec,overrides));
};
var G__23111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23114__i = 0, G__23114__a = new Array(arguments.length -  0);
while (G__23114__i < G__23114__a.length) {G__23114__a[G__23114__i] = arguments[G__23114__i + 0]; ++G__23114__i;}
  args = new cljs.core.IndexedSeq(G__23114__a,0);
} 
return G__23111__delegate.call(this,args);};
G__23111.cljs$lang$maxFixedArity = 0;
G__23111.cljs$lang$applyTo = (function (arglist__23115){
var args = cljs.core.seq(arglist__23115);
return G__23111__delegate(args);
});
G__23111.cljs$core$IFn$_invoke$arity$variadic = G__23111__delegate;
return G__23111;
})()
;})(___$3,specs))
], 0));
}
});})(specs))
;

cljs.spec.t_cljs$spec23105.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (self__.fspec_impl.cljs$core$IFn$_invoke$arity$7 ? self__.fspec_impl.cljs$core$IFn$_invoke$arity$7(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1) : self__.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1));
});})(specs))
;

cljs.spec.t_cljs$spec23105.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_fspec),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$args),cljs.core.array_seq([(function (){var x__7243__auto__ = self__.aform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ret),(function (){var x__7243__auto__ = self__.rform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$fn),(function (){var x__7243__auto__ = self__.fform;
return cljs.core._conj(cljs.core.List.EMPTY,x__7243__auto__);
})()], 0))));
});})(specs))
;

cljs.spec.t_cljs$spec23105.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$fspec_DASH_impl,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$skip_DASH_wiki,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$argspec,cljs.core.cst$sym$aform,cljs.core.cst$sym$retspec,cljs.core.cst$sym$rform,cljs.core.cst$sym$fnspec,cljs.core.cst$sym$fform,cljs.core.cst$sym$gfn], null))),cljs.core.cst$kw$doc,"Do not call this directly, use 'fspec'"], null)),cljs.core.cst$sym$argspec,cljs.core.cst$sym$aform,cljs.core.cst$sym$retspec,cljs.core.cst$sym$rform,cljs.core.cst$sym$fnspec,cljs.core.cst$sym$fform,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$meta23106], null);
});})(specs))
;

cljs.spec.t_cljs$spec23105.cljs$lang$type = true;

cljs.spec.t_cljs$spec23105.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23105";

cljs.spec.t_cljs$spec23105.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.spec/t_cljs$spec23105");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec23105 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec23105(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta23106){
return (new cljs.spec.t_cljs$spec23105(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta23106));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec23105(cljs$spec$fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl(cljs.core.cst$kw$cljs$spec_SLASH_kvs_DASH__GT_map,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__23116_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec_SLASH_k,cljs.core.cst$sym$p1__23116_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec_SLASH_v,cljs.core.cst$sym$p1__23116_SHARP_))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__23117_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$p1__23117_SHARP_))),cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__23116_SHARP_], null),cljs.core.list(cljs.core.cst$sym$zipmap,cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$cljs$spec_SLASH_k,cljs.core.cst$sym$p1__23116_SHARP_),cljs.core.list(cljs.core.cst$sym$map,cljs.core.cst$kw$cljs$spec_SLASH_v,cljs.core.cst$sym$p1__23116_SHARP_))),(function (p1__23116_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_k,p1__23116_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_v,p1__23116_SHARP_));
}),null,true,(function (p1__23117_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23118){
var vec__23119 = p__23118;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23119,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23119,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_k,k,cljs.core.cst$kw$cljs$spec_SLASH_v,v], null);
}),p1__23117_SHARP_);
})));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args23123 = [];
var len__7484__auto___23126 = arguments.length;
var i__7485__auto___23127 = (0);
while(true){
if((i__7485__auto___23127 < len__7484__auto___23126)){
args23123.push((arguments[i__7485__auto___23127]));

var G__23128 = (i__7485__auto___23127 + (1));
i__7485__auto___23127 = G__23128;
continue;
} else {
}
break;
}

var G__23125 = args23123.length;
switch (G__23125) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23123.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2(spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3(spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23122_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__23122_SHARP_,cljs.spec.conform(spec,p1__23122_SHARP_)],null));
}),cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.gen.cljs$core$IFn$_invoke$arity$2(spec,overrides),n], 0)));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__6397__auto__ = cljs.core.inst_QMARK_(inst);
if(and__6397__auto__){
var t = cljs.core.inst_ms(inst);
return ((cljs.core.inst_ms(start) <= t)) && ((t < cljs.core.inst_ms(end)));
} else {
return and__6397__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_(val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__6397__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__6397__auto__)){
return val.lessThan(end);
} else {
return and__6397__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__6397__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__6397__auto__)){
return val.lessThan(end);
} else {
return and__6397__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.check_asserts_QMARK_ = (function cljs$spec$check_asserts_QMARK_(){
return cljs.spec._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.check_asserts = (function cljs$spec$check_asserts(flag){
return cljs.spec._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.assert_STAR_ = (function cljs$spec$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,x))){
return x;
} else {
var ed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),cljs.core.cst$kw$cljs$spec_SLASH_failure,cljs.core.cst$kw$assertion_DASH_failed)], 0));
throw (new Error([cljs.core.str("Spec assertion failed\n"),cljs.core.str((function (){var sb__7395__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23132_23134 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23133_23135 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_23132_23134,_STAR_print_fn_STAR_23133_23135,sb__7395__auto__,ed){
return (function (x__7396__auto__){
return sb__7395__auto__.append(x__7396__auto__);
});})(_STAR_print_newline_STAR_23132_23134,_STAR_print_fn_STAR_23133_23135,sb__7395__auto__,ed))
;

try{cljs.spec.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23133_23135;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23132_23134;
}
return [cljs.core.str(sb__7395__auto__)].join('');
})())].join('')));
}
});
