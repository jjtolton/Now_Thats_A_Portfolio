// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('cljs.core');
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
var x__8319__auto__ = (((spec == null))?null:spec);
var m__8320__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$2(spec,x) : m__8320__auto__.call(null,spec,x));
} else {
var m__8320__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,x) : m__8320__auto____$1.call(null,spec,x));
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
var x__8319__auto__ = (((spec == null))?null:spec);
var m__8320__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$2(spec,y) : m__8320__auto__.call(null,spec,y));
} else {
var m__8320__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,y) : m__8320__auto____$1.call(null,spec,y));
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
var x__8319__auto__ = (((spec == null))?null:spec);
var m__8320__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$5 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__8320__auto__.call(null,spec,path,via,in$,x));
} else {
var m__8320__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$5(spec,path,via,in$,x) : m__8320__auto____$1.call(null,spec,path,via,in$,x));
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
var x__8319__auto__ = (((spec == null))?null:spec);
var m__8320__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__8320__auto__.call(null,spec,overrides,path,rmap));
} else {
var m__8320__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$4(spec,overrides,path,rmap) : m__8320__auto____$1.call(null,spec,overrides,path,rmap));
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
var x__8319__auto__ = (((spec == null))?null:spec);
var m__8320__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__8320__auto__.call(null,spec,gfn));
} else {
var m__8320__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2(spec,gfn) : m__8320__auto____$1.call(null,spec,gfn));
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
var x__8319__auto__ = (((spec == null))?null:spec);
var m__8320__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$1(spec) : m__8320__auto__.call(null,spec));
} else {
var m__8320__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1(spec) : m__8320__auto____$1.call(null,spec));
} else {
throw cljs.core.missing_protocol("Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = (function (){var G__22879 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22879) : cljs.core.atom.call(null,G__22879));
})();
}
cljs.spec.deep_resolve = (function cljs$spec$deep_resolve(reg,k){
var spec = k;
while(true){
if(cljs.core.ident_QMARK_(spec)){
var G__22880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,spec);
spec = G__22880;
continue;
} else {
return spec;
}
break;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not ident
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.ident_QMARK_(k)){
var reg = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.registry_ref) : cljs.core.deref.call(null,cljs.spec.registry_ref));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,k);
if(!(cljs.core.ident_QMARK_(spec))){
return spec;
} else {
return cljs.spec.deep_resolve(reg,spec);
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
var or__7601__auto__ = cljs.spec.reg_resolve(k);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to resolve spec: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$spec$Spec$)))?true:false):false)){
return x;
} else {
return null;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__7589__auto__ = cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__7589__auto__)){
return x;
} else {
return and__7589__auto__;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_(spec))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.cst$kw$cljs$spec_SLASH_name,name);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.with_meta(spec,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(spec),cljs.core.cst$kw$cljs$spec_SLASH_name,name));
} else {
return null;
}
}
}
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if(cljs.core.ident_QMARK_(spec)){
return spec;
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_(spec))){
return cljs.core.cst$kw$cljs$spec_SLASH_name.cljs$core$IFn$_invoke$arity$1(spec);
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || ((cljs.core.PROTOCOL_SENTINEL === spec.cljs$core$IMeta$)))?true:false):false)){
return cljs.core.cst$kw$cljs$spec_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(spec));
} else {
return null;
}
}
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__7601__auto__ = (function (){var and__7589__auto__ = cljs.core.ident_QMARK_(spec_or_k);
if(and__7589__auto__){
return cljs.spec.reg_resolve(spec_or_k);
} else {
return and__7589__auto__;
}
})();
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = cljs.spec.spec_QMARK_(spec_or_k);
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
var or__7601__auto____$2 = cljs.spec.regex_QMARK_(spec_or_k);
if(cljs.core.truth_(or__7601__auto____$2)){
return or__7601__auto____$2;
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
var or__7601__auto__ = cljs.spec.maybe_spec(spec_or_k);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
if(cljs.core.ident_QMARK_(spec_or_k)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to resolve spec: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_or_k)].join('')));
} else {
return null;
}
}
});

/**
 * @interface
 */
cljs.spec.Specize = function(){};

cljs.spec.specize_STAR_ = (function cljs$spec$specize_STAR_(var_args){
var args22887 = [];
var len__8822__auto___22890 = arguments.length;
var i__8823__auto___22891 = (0);
while(true){
if((i__8823__auto___22891 < len__8822__auto___22890)){
args22887.push((arguments[i__8823__auto___22891]));

var G__22892 = (i__8823__auto___22891 + (1));
i__8823__auto___22891 = G__22892;
continue;
} else {
}
break;
}

var G__22889 = args22887.length;
switch (G__22889) {
case 1:
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22887.length)].join('')));

}
});

cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (_){
if((!((_ == null))) && (!((_.cljs$spec$Specize$specize_STAR_$arity$1 == null)))){
return _.cljs$spec$Specize$specize_STAR_$arity$1(_);
} else {
var x__8319__auto__ = (((_ == null))?null:_);
var m__8320__auto__ = (cljs.spec.specize_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8320__auto__.call(null,_));
} else {
var m__8320__auto____$1 = (cljs.spec.specize_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8320__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
}
});

cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_,form){
if((!((_ == null))) && (!((_.cljs$spec$Specize$specize_STAR_$arity$2 == null)))){
return _.cljs$spec$Specize$specize_STAR_$arity$2(_,form);
} else {
var x__8319__auto__ = (((_ == null))?null:_);
var m__8320__auto__ = (cljs.spec.specize_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$2(_,form) : m__8320__auto__.call(null,_,form));
} else {
var m__8320__auto____$1 = (cljs.spec.specize_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2(_,form) : m__8320__auto____$1.call(null,_,form));
} else {
throw cljs.core.missing_protocol("Specize.specize*",_);
}
}
}
});

cljs.spec.specize_STAR_.cljs$lang$maxFixedArity = 2;


cljs.core.Keyword.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (k){
var k__$1 = this;
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_(k__$1));
});

cljs.core.Keyword.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (k,_){
var k__$1 = this;
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_(k__$1));
});

cljs.core.Symbol.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Symbol.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var s__$1 = this;
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_(s__$1));
});

cljs.core.Symbol.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var s__$1 = this;
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_(s__$1));
});

(cljs.spec.Specize["_"] = true);

(cljs.spec.specize_STAR_["_"] = (function() {
var G__22898 = null;
var G__22898__1 = (function (o){
var G__22894 = cljs.core.cst$kw$cljs$spec_SLASH_unknown;
var G__22895 = o;
var G__22896 = null;
var G__22897 = null;
return (cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(G__22894,G__22895,G__22896,G__22897) : cljs.spec.spec_impl.call(null,G__22894,G__22895,G__22896,G__22897));
});
var G__22898__2 = (function (o,form){
return (cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(form,o,null,null) : cljs.spec.spec_impl.call(null,form,o,null,null));
});
G__22898 = function(o,form){
switch(arguments.length){
case 1:
return G__22898__1.call(this,o);
case 2:
return G__22898__2.call(this,o,form);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__22898.cljs$core$IFn$_invoke$arity$1 = G__22898__1;
G__22898.cljs$core$IFn$_invoke$arity$2 = G__22898__2;
return G__22898;
})()
);
cljs.spec.specize = (function cljs$spec$specize(var_args){
var args22899 = [];
var len__8822__auto___22902 = arguments.length;
var i__8823__auto___22903 = (0);
while(true){
if((i__8823__auto___22903 < len__8822__auto___22902)){
args22899.push((arguments[i__8823__auto___22903]));

var G__22904 = (i__8823__auto___22903 + (1));
i__8823__auto___22903 = G__22904;
continue;
} else {
}
break;
}

var G__22901 = args22899.length;
switch (G__22901) {
case 1:
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22899.length)].join('')));

}
});

cljs.spec.specize.cljs$core$IFn$_invoke$arity$1 = (function (s){
var or__7601__auto__ = cljs.spec.spec_QMARK_(s);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$1(s);
}
});

cljs.spec.specize.cljs$core$IFn$_invoke$arity$2 = (function (s,form){
var or__7601__auto__ = cljs.spec.spec_QMARK_(s);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.spec.specize_STAR_.cljs$core$IFn$_invoke$arity$2(s,form);
}
});

cljs.spec.specize.cljs$lang$maxFixedArity = 2;

/**
 * tests the validity of a conform return value
 */
cljs.spec.invalid_QMARK_ = (function cljs$spec$invalid_QMARK_(ret){
return cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$cljs$spec_SLASH_invalid,ret);
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_(cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_(cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_(cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_(form)){
return clojure.walk.postwalk((function (form__$1){
if(cljs.core.truth_((function (){var and__7589__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__7589__auto__){
return cljs.core.namespace(form__$1);
} else {
return and__7589__auto__;
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
if(cljs.core.truth_((function (){var and__7589__auto__ = (form instanceof cljs.core.Symbol);
if(and__7589__auto__){
return cljs.core.namespace(form);
} else {
return and__7589__auto__;
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
return cljs.spec.with_gen_STAR_(cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(spec__$1),gen_fn);
}
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__6738__auto__ = cljs.spec.explain_STAR_(cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(spec),path,via,in$,x);
if(cljs.core.truth_(temp__6738__auto__)){
var probs = temp__6738__auto__;
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
return cljs.spec.explain_data_STAR_(spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__6736__auto__ = cljs.spec.spec_name(spec);
if(cljs.core.truth_(temp__6736__auto__)){
var name = temp__6736__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * Default printer for explain-data. nil indicates a successful validation.
 */
cljs.spec.explain_printer = (function cljs$spec$explain_printer(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var sb__8693__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_22946_22986 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_22947_22987 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_22946_22986,_STAR_print_fn_STAR_22947_22987,sb__8693__auto__){
return (function (x__8694__auto__){
return sb__8693__auto__.append(x__8694__auto__);
});})(_STAR_print_newline_STAR_22946_22986,_STAR_print_fn_STAR_22947_22987,sb__8693__auto__))
;

try{var seq__22948_22988 = cljs.core.seq(cljs.core.cst$kw$cljs$spec_SLASH_problems.cljs$core$IFn$_invoke$arity$1(ed));
var chunk__22949_22989 = null;
var count__22950_22990 = (0);
var i__22951_22991 = (0);
while(true){
if((i__22951_22991 < count__22950_22990)){
var map__22952_22992 = chunk__22949_22989.cljs$core$IIndexed$_nth$arity$2(null,i__22951_22991);
var map__22952_22993__$1 = ((((!((map__22952_22992 == null)))?((((map__22952_22992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22952_22992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22952_22992):map__22952_22992);
var prob_22994 = map__22952_22993__$1;
var path_22995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22952_22993__$1,cljs.core.cst$kw$path);
var pred_22996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22952_22993__$1,cljs.core.cst$kw$pred);
var val_22997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22952_22993__$1,cljs.core.cst$kw$val);
var reason_22998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22952_22993__$1,cljs.core.cst$kw$reason);
var via_22999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22952_22993__$1,cljs.core.cst$kw$via);
var in_23000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22952_22993__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_23000)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([in_23000], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([val_22997], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" fails"], 0));

if(cljs.core.empty_QMARK_(via_22999)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.last(via_22999)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_22995)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path_22995], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.abbrev(pred_22996)], 0));

if(cljs.core.truth_(reason_22998)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", ",reason_22998], 0));
} else {
}

var seq__22954_23001 = cljs.core.seq(prob_22994);
var chunk__22955_23002 = null;
var count__22956_23003 = (0);
var i__22957_23004 = (0);
while(true){
if((i__22957_23004 < count__22956_23003)){
var vec__22958_23005 = chunk__22955_23002.cljs$core$IIndexed$_nth$arity$2(null,i__22957_23004);
var k_23006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22958_23005,(0),null);
var v_23007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22958_23005,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_23006))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_23006], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_23007], 0));
}

var G__23008 = seq__22954_23001;
var G__23009 = chunk__22955_23002;
var G__23010 = count__22956_23003;
var G__23011 = (i__22957_23004 + (1));
seq__22954_23001 = G__23008;
chunk__22955_23002 = G__23009;
count__22956_23003 = G__23010;
i__22957_23004 = G__23011;
continue;
} else {
var temp__6738__auto___23012 = cljs.core.seq(seq__22954_23001);
if(temp__6738__auto___23012){
var seq__22954_23013__$1 = temp__6738__auto___23012;
if(cljs.core.chunked_seq_QMARK_(seq__22954_23013__$1)){
var c__8512__auto___23014 = cljs.core.chunk_first(seq__22954_23013__$1);
var G__23015 = cljs.core.chunk_rest(seq__22954_23013__$1);
var G__23016 = c__8512__auto___23014;
var G__23017 = cljs.core.count(c__8512__auto___23014);
var G__23018 = (0);
seq__22954_23001 = G__23015;
chunk__22955_23002 = G__23016;
count__22956_23003 = G__23017;
i__22957_23004 = G__23018;
continue;
} else {
var vec__22961_23019 = cljs.core.first(seq__22954_23013__$1);
var k_23020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22961_23019,(0),null);
var v_23021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22961_23019,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_23020))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_23020], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_23021], 0));
}

var G__23022 = cljs.core.next(seq__22954_23013__$1);
var G__23023 = null;
var G__23024 = (0);
var G__23025 = (0);
seq__22954_23001 = G__23022;
chunk__22955_23002 = G__23023;
count__22956_23003 = G__23024;
i__22957_23004 = G__23025;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__23026 = seq__22948_22988;
var G__23027 = chunk__22949_22989;
var G__23028 = count__22950_22990;
var G__23029 = (i__22951_22991 + (1));
seq__22948_22988 = G__23026;
chunk__22949_22989 = G__23027;
count__22950_22990 = G__23028;
i__22951_22991 = G__23029;
continue;
} else {
var temp__6738__auto___23030 = cljs.core.seq(seq__22948_22988);
if(temp__6738__auto___23030){
var seq__22948_23031__$1 = temp__6738__auto___23030;
if(cljs.core.chunked_seq_QMARK_(seq__22948_23031__$1)){
var c__8512__auto___23032 = cljs.core.chunk_first(seq__22948_23031__$1);
var G__23033 = cljs.core.chunk_rest(seq__22948_23031__$1);
var G__23034 = c__8512__auto___23032;
var G__23035 = cljs.core.count(c__8512__auto___23032);
var G__23036 = (0);
seq__22948_22988 = G__23033;
chunk__22949_22989 = G__23034;
count__22950_22990 = G__23035;
i__22951_22991 = G__23036;
continue;
} else {
var map__22964_23037 = cljs.core.first(seq__22948_23031__$1);
var map__22964_23038__$1 = ((((!((map__22964_23037 == null)))?((((map__22964_23037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22964_23037.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22964_23037):map__22964_23037);
var prob_23039 = map__22964_23038__$1;
var path_23040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22964_23038__$1,cljs.core.cst$kw$path);
var pred_23041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22964_23038__$1,cljs.core.cst$kw$pred);
var val_23042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22964_23038__$1,cljs.core.cst$kw$val);
var reason_23043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22964_23038__$1,cljs.core.cst$kw$reason);
var via_23044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22964_23038__$1,cljs.core.cst$kw$via);
var in_23045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22964_23038__$1,cljs.core.cst$kw$in);
if(cljs.core.empty_QMARK_(in_23045)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["In:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([in_23045], 0)),""], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["val: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([val_23042], 0));

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" fails"], 0));

if(cljs.core.empty_QMARK_(via_23044)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" spec:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.last(via_23044)], 0))], 0));
}

if(cljs.core.empty_QMARK_(path_23040)){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" at:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([path_23040], 0))], 0));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" predicate: "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.abbrev(pred_23041)], 0));

if(cljs.core.truth_(reason_23043)){
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", ",reason_23043], 0));
} else {
}

var seq__22966_23046 = cljs.core.seq(prob_23039);
var chunk__22967_23047 = null;
var count__22968_23048 = (0);
var i__22969_23049 = (0);
while(true){
if((i__22969_23049 < count__22968_23048)){
var vec__22970_23050 = chunk__22967_23047.cljs$core$IIndexed$_nth$arity$2(null,i__22969_23049);
var k_23051 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22970_23050,(0),null);
var v_23052 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22970_23050,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_23051))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_23051], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_23052], 0));
}

var G__23053 = seq__22966_23046;
var G__23054 = chunk__22967_23047;
var G__23055 = count__22968_23048;
var G__23056 = (i__22969_23049 + (1));
seq__22966_23046 = G__23053;
chunk__22967_23047 = G__23054;
count__22968_23048 = G__23055;
i__22969_23049 = G__23056;
continue;
} else {
var temp__6738__auto___23057__$1 = cljs.core.seq(seq__22966_23046);
if(temp__6738__auto___23057__$1){
var seq__22966_23058__$1 = temp__6738__auto___23057__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22966_23058__$1)){
var c__8512__auto___23059 = cljs.core.chunk_first(seq__22966_23058__$1);
var G__23060 = cljs.core.chunk_rest(seq__22966_23058__$1);
var G__23061 = c__8512__auto___23059;
var G__23062 = cljs.core.count(c__8512__auto___23059);
var G__23063 = (0);
seq__22966_23046 = G__23060;
chunk__22967_23047 = G__23061;
count__22968_23048 = G__23062;
i__22969_23049 = G__23063;
continue;
} else {
var vec__22973_23064 = cljs.core.first(seq__22966_23058__$1);
var k_23065 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22973_23064,(0),null);
var v_23066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22973_23064,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,null,cljs.core.cst$kw$pred,null,cljs.core.cst$kw$via,null,cljs.core.cst$kw$val,null,cljs.core.cst$kw$reason,null,cljs.core.cst$kw$in,null], null), null).call(null,k_23065))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\n\t",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_23065], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_23066], 0));
}

var G__23067 = cljs.core.next(seq__22966_23058__$1);
var G__23068 = null;
var G__23069 = (0);
var G__23070 = (0);
seq__22966_23046 = G__23067;
chunk__22967_23047 = G__23068;
count__22968_23048 = G__23069;
i__22969_23049 = G__23070;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

var G__23071 = cljs.core.next(seq__22948_23031__$1);
var G__23072 = null;
var G__23073 = (0);
var G__23074 = (0);
seq__22948_22988 = G__23071;
chunk__22949_22989 = G__23072;
count__22950_22990 = G__23073;
i__22951_22991 = G__23074;
continue;
}
} else {
}
}
break;
}

var seq__22976_23075 = cljs.core.seq(ed);
var chunk__22977_23076 = null;
var count__22978_23077 = (0);
var i__22979_23078 = (0);
while(true){
if((i__22979_23078 < count__22978_23077)){
var vec__22980_23079 = chunk__22977_23076.cljs$core$IIndexed$_nth$arity$2(null,i__22979_23078);
var k_23080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22980_23079,(0),null);
var v_23081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22980_23079,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_problems,null], null), null).call(null,k_23080))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_23080], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_23081], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__23082 = seq__22976_23075;
var G__23083 = chunk__22977_23076;
var G__23084 = count__22978_23077;
var G__23085 = (i__22979_23078 + (1));
seq__22976_23075 = G__23082;
chunk__22977_23076 = G__23083;
count__22978_23077 = G__23084;
i__22979_23078 = G__23085;
continue;
} else {
var temp__6738__auto___23086 = cljs.core.seq(seq__22976_23075);
if(temp__6738__auto___23086){
var seq__22976_23087__$1 = temp__6738__auto___23086;
if(cljs.core.chunked_seq_QMARK_(seq__22976_23087__$1)){
var c__8512__auto___23088 = cljs.core.chunk_first(seq__22976_23087__$1);
var G__23089 = cljs.core.chunk_rest(seq__22976_23087__$1);
var G__23090 = c__8512__auto___23088;
var G__23091 = cljs.core.count(c__8512__auto___23088);
var G__23092 = (0);
seq__22976_23075 = G__23089;
chunk__22977_23076 = G__23090;
count__22978_23077 = G__23091;
i__22979_23078 = G__23092;
continue;
} else {
var vec__22983_23093 = cljs.core.first(seq__22976_23087__$1);
var k_23094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22983_23093,(0),null);
var v_23095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22983_23093,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cljs$spec_SLASH_problems,null], null), null).call(null,k_23094))){
} else {
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k_23094], 0))," "], 0));

cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v_23095], 0));

cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}

var G__23096 = cljs.core.next(seq__22976_23087__$1);
var G__23097 = null;
var G__23098 = (0);
var G__23099 = (0);
seq__22976_23075 = G__23096;
chunk__22977_23076 = G__23097;
count__22978_23077 = G__23098;
i__22979_23078 = G__23099;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22947_22987;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22946_22986;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8693__auto__)].join('');
})()], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Success!"], 0));
}
});
cljs.spec._STAR_explain_out_STAR_ = cljs.spec.explain_printer;
/**
 * Prints explanation data (per 'explain-data') to *out* using the printer in *explain-out*,
 *  by default explain-printer.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
return (cljs.spec._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec._STAR_explain_out_STAR_.cljs$core$IFn$_invoke$arity$1(ed) : cljs.spec._STAR_explain_out_STAR_.call(null,ed));
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
var sb__8693__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23102_23104 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23103_23105 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_23102_23104,_STAR_print_fn_STAR_23103_23105,sb__8693__auto__){
return (function (x__8694__auto__){
return sb__8693__auto__.append(x__8694__auto__);
});})(_STAR_print_newline_STAR_23102_23104,_STAR_print_fn_STAR_23103_23105,sb__8693__auto__))
;

try{cljs.spec.explain(spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23103_23105;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23102_23104;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8693__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(spec);
var temp__6736__auto__ = (function (){var or__7601__auto__ = (function (){var temp__6738__auto__ = (function (){var or__7601__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,(function (){var or__7601__auto__ = cljs.spec.spec_name(spec__$1);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
}
})();
if(cljs.core.truth_(temp__6738__auto__)){
var gfn = temp__6738__auto__;
return (gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null));
} else {
return null;
}
})();
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.spec.gen_STAR_(spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__6736__auto__)){
var g = temp__6736__auto__;
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (g,temp__6736__auto__,spec__$1){
return (function (p1__23106_SHARP_){
return (cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,p1__23106_SHARP_) : cljs.spec.valid_QMARK_.call(null,spec__$1,p1__23106_SHARP_));
});})(g,temp__6736__auto__,spec__$1))
,g,(100)], 0));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to construct gen at: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.abbrev(form))].join('')));
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
var args23107 = [];
var len__8822__auto___23110 = arguments.length;
var i__8823__auto___23111 = (0);
while(true){
if((i__8823__auto___23111 < len__8822__auto___23110)){
args23107.push((arguments[i__8823__auto___23111]));

var G__23112 = (i__8823__auto___23111 + (1));
i__8823__auto___23111 = G__23112;
continue;
} else {
}
break;
}

var G__23109 = args23107.length;
switch (G__23109) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23107.length)].join('')));

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
if(cljs.core.truth_((function (){var and__7589__auto__ = cljs.core.ident_QMARK_(k);
if(and__7589__auto__){
return cljs.core.namespace(k);
} else {
return and__7589__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("k must be namespaced keyword or resolveable symbol"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(c/and (ident? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__7601__auto__ = cljs.spec.spec_QMARK_(spec);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = cljs.spec.regex_QMARK_(spec);
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.spec.registry_ref) : cljs.core.deref.call(null,cljs.spec.registry_ref)),spec);
}
}
})())?spec:(cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4(form,spec,null,null) : cljs.spec.spec_impl.call(null,form,spec,null,null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.spec.registry_ref,cljs.core.assoc,k,cljs.spec.with_name(spec__$1,k));

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
var temp__6738__auto__ = cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__6738__auto__)){
var arg_spec = temp__6738__auto__;
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(cljs.spec.conform(arg_spec,args)))){
var ed = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.spec.explain_data_STAR_(arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args], null),(function (){var temp__6736__auto__ = cljs.spec.spec_name(arg_spec);
if(cljs.core.truth_(temp__6736__auto__)){
var name = temp__6736__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),cljs.core.cst$kw$cljs$spec_SLASH_args,args);
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Call to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.spec.__GT_sym(v)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" did not conform to spec:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8693__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23116_23118 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23117_23119 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_23116_23118,_STAR_print_fn_STAR_23117_23119,sb__8693__auto__,ed,arg_spec,temp__6738__auto__,specs){
return (function (x__8694__auto__){
return sb__8693__auto__.append(x__8694__auto__);
});})(_STAR_print_newline_STAR_23116_23118,_STAR_print_fn_STAR_23117_23119,sb__8693__auto__,ed,arg_spec,temp__6738__auto__,specs))
;

try{cljs.spec.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23117_23119;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23116_23118;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8693__auto__)].join('');
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,((function (){var or__7601__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args23120 = [];
var len__8822__auto___23123 = arguments.length;
var i__8823__auto___23124 = (0);
while(true){
if((i__8823__auto___23124 < len__8822__auto___23123)){
args23120.push((arguments[i__8823__auto___23124]));

var G__23125 = (i__8823__auto___23124 + (1));
i__8823__auto___23124 = G__23125;
continue;
} else {
}
break;
}

var G__23122 = args23120.length;
switch (G__23122) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23120.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4(pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__6736__auto__ = cljs.spec.the_spec(pred);
if(cljs.core.truth_(temp__6736__auto__)){
var spec = temp__6736__auto__;
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([form], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is not a fn, expected predicate fn")].join('')));
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
var args23127 = [];
var len__8822__auto___23130 = arguments.length;
var i__8823__auto___23131 = (0);
while(true){
if((i__8823__auto___23131 < len__8822__auto___23130)){
args23127.push((arguments[i__8823__auto___23131]));

var G__23132 = (i__8823__auto___23131 + (1));
i__8823__auto___23131 = G__23132;
continue;
} else {
}
break;
}

var G__23129 = args23127.length;
switch (G__23129) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23127.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
var spec__$1 = cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(spec);
return cljs.core.not(cljs.spec.invalid_QMARK_(cljs.spec.conform_STAR_(spec__$1,x)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
var spec__$1 = cljs.spec.specize.cljs$core$IFn$_invoke$arity$2(spec,form);
return cljs.core.not(cljs.spec.invalid_QMARK_(cljs.spec.conform_STAR_(spec__$1,x)));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * internal helper function that returns true when x is valid for spec.
 */
cljs.spec.pvalid_QMARK_ = (function cljs$spec$pvalid_QMARK_(var_args){
var args23134 = [];
var len__8822__auto___23137 = arguments.length;
var i__8823__auto___23138 = (0);
while(true){
if((i__8823__auto___23138 < len__8822__auto___23137)){
args23134.push((arguments[i__8823__auto___23138]));

var G__23139 = (i__8823__auto___23138 + (1));
i__8823__auto___23138 = G__23139;
continue;
} else {
}
break;
}

var G__23136 = args23134.length;
switch (G__23136) {
case 2:
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23134.length)].join('')));

}
});

cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return cljs.core.not(cljs.spec.invalid_QMARK_(cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred,x,cljs.core.cst$kw$cljs$spec_SLASH_unknown)));
});

cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.core.not(cljs.spec.invalid_QMARK_(cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred,x,form)));
});

cljs.spec.pvalid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec(pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_(pred__$1))){
return cljs.spec.explain_STAR_(pred__$1,path,(function (){var temp__6736__auto__ = cljs.spec.spec_name(pred__$1);
if(cljs.core.truth_(temp__6736__auto__)){
var name = temp__6736__auto__;
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
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__23144){
var map__23185 = p__23144;
var map__23185__$1 = ((((!((map__23185 == null)))?((((map__23185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23185):map__23185);
var argm = map__23185__$1;
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,cljs.core.cst$kw$opt);
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,cljs.core.cst$kw$req_DASH_un);
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,cljs.core.cst$kw$opt_DASH_un);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,cljs.core.cst$kw$gfn);
var pred_exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,cljs.core.cst$kw$pred_DASH_exprs);
var keys_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,cljs.core.cst$kw$keys_DASH_pred);
var opt_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,cljs.core.cst$kw$opt_DASH_keys);
var req_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,cljs.core.cst$kw$req_DASH_specs);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,cljs.core.cst$kw$req);
var req_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,cljs.core.cst$kw$req_DASH_keys);
var opt_specs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,cljs.core.cst$kw$opt_DASH_specs);
var pred_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23185__$1,cljs.core.cst$kw$pred_DASH_forms);
var k__GT_s = cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_keys,opt_keys),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_specs,opt_specs));
var keys__GT_specnames = ((function (k__GT_s,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__23141_SHARP_){
var or__7601__auto__ = (k__GT_s.cljs$core$IFn$_invoke$arity$1 ? k__GT_s.cljs$core$IFn$_invoke$arity$1(p1__23141_SHARP_) : k__GT_s.call(null,p1__23141_SHARP_));
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return p1__23141_SHARP_;
}
});})(k__GT_s,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid();
if(typeof cljs.spec.t_cljs$spec23187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23187 = (function (p__23144,map__23185,keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta23188){
this.p__23144 = p__23144;
this.map__23185 = map__23185;
this.keys__GT_specnames = keys__GT_specnames;
this.opt = opt;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta23188 = meta23188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_23189,meta23188__$1){
var self__ = this;
var _23189__$1 = this;
return (new cljs.spec.t_cljs$spec23187(self__.p__23144,self__.map__23185,self__.keys__GT_specnames,self__.opt,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta23188__$1));
});})(k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23187.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_23189){
var self__ = this;
var _23189__$1 = this;
return self__.meta23188;
});})(k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23187.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23187.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23187.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23187.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23187.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.keys_pred.cljs$core$IFn$_invoke$arity$1 ? self__.keys_pred.cljs$core$IFn$_invoke$arity$1(m) : self__.keys_pred.call(null,m)))){
var reg = cljs.spec.registry();
var ret = m;
var G__23196 = m;
var vec__23197 = G__23196;
var seq__23198 = cljs.core.seq(vec__23197);
var first__23199 = cljs.core.first(seq__23198);
var seq__23198__$1 = cljs.core.next(seq__23198);
var vec__23200 = first__23199;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23200,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23200,(1),null);
var ks = seq__23198__$1;
var keys = vec__23197;
var ret__$1 = ret;
var G__23196__$1 = G__23196;
while(true){
var ret__$2 = ret__$1;
var vec__23203 = G__23196__$1;
var seq__23204 = cljs.core.seq(vec__23203);
var first__23205 = cljs.core.first(seq__23204);
var seq__23204__$1 = cljs.core.next(seq__23204);
var vec__23206 = first__23205;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23206,(0),null);
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23206,(1),null);
var ks__$1 = seq__23204__$1;
var keys__$1 = vec__23203;
if(cljs.core.truth_(keys__$1)){
var sname = (self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1));
var temp__6736__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reg,sname);
if(cljs.core.truth_(temp__6736__auto__)){
var s = temp__6736__auto__;
var cv = cljs.spec.conform(s,v__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__23225 = (((cv === v__$1))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,cv));
var G__23226 = ks__$1;
ret__$1 = G__23225;
G__23196__$1 = G__23226;
continue;
}
} else {
var G__23227 = ret__$2;
var G__23228 = ks__$1;
ret__$1 = G__23227;
G__23196__$1 = G__23228;
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
});})(k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23187.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry();
var ret = m;
var G__23212 = cljs.core.keys(m);
var vec__23213 = G__23212;
var seq__23214 = cljs.core.seq(vec__23213);
var first__23215 = cljs.core.first(seq__23214);
var seq__23214__$1 = cljs.core.next(seq__23214);
var k = first__23215;
var ks = seq__23214__$1;
var keys = vec__23213;
var ret__$1 = ret;
var G__23212__$1 = G__23212;
while(true){
var ret__$2 = ret__$1;
var vec__23216 = G__23212__$1;
var seq__23217 = cljs.core.seq(vec__23216);
var first__23218 = cljs.core.first(seq__23217);
var seq__23217__$1 = cljs.core.next(seq__23217);
var k__$1 = first__23218;
var ks__$1 = seq__23217__$1;
var keys__$1 = vec__23216;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)))){
var cv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k__$1);
var v = cljs.spec.unform((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k__$1) : self__.keys__GT_specnames.call(null,k__$1)),cv);
var G__23229 = (((cv === v))?ret__$2:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,k__$1,v));
var G__23230 = ks__$1;
ret__$1 = G__23229;
G__23212__$1 = G__23230;
continue;
} else {
var G__23231 = ret__$2;
var G__23232 = ks__$1;
ret__$1 = G__23231;
G__23212__$1 = G__23232;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23187.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$map_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var reg = cljs.spec.registry();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,(function (){var temp__6738__auto__ = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x)))){
return null;
} else {
return cljs.spec.abbrev(form);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__6738__auto__){
var probs = temp__6738__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (probs,temp__6738__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__23142_SHARP_){
return cljs.core.identity(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,p1__23142_SHARP_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
});})(probs,temp__6738__auto__,reg,___$1,k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (reg,___$1,k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__23219){
var vec__23220 = p__23219;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23220,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23220,(1),null);
if(cljs.core.truth_((function (){var or__7601__auto__ = !(cljs.core.contains_QMARK_(reg,(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k))));
if(or__7601__auto__){
return or__7601__auto__;
} else {
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$3((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1((self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),(self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1 ? self__.keys__GT_specnames.cljs$core$IFn$_invoke$arity$1(k) : self__.keys__GT_specnames.call(null,k)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
}
});})(reg,___$1,k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq(x)));
}
});})(k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23187.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
var gen = ((function (rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,___$1,k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub(s,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.cljs$core$IFn$_invoke$arity$3(gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_(cljs.core.identity,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(req_gens,opt_gens))){
var reqs = cljs.core.zipmap(self__.req_keys,req_gens);
var opts = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(0),cljs.core.count(opts)], 0)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__23143_SHARP_){
var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(reqs),((cljs.core.seq(opts))?cljs.core.shuffle(cljs.core.seq(opts)):null));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.hash_map,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.take.cljs$core$IFn$_invoke$arity$2((p1__23143_SHARP_ + cljs.core.count(reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
], 0));
} else {
return null;
}
}
});})(k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23187.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
var G__23223 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.argm,cljs.core.cst$kw$gfn,gfn__$1);
return (cljs.spec.map_spec_impl.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.map_spec_impl.cljs$core$IFn$_invoke$arity$1(G__23223) : cljs.spec.map_spec_impl.call(null,G__23223));
});})(k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23187.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons(cljs.core.cst$sym$cljs$spec_SLASH_keys,(function (){var G__23224 = cljs.core.PersistentVector.EMPTY;
var G__23224__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__23224,cljs.core.cst$kw$req,cljs.core.array_seq([self__.req], 0)):G__23224);
var G__23224__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__23224__$1,cljs.core.cst$kw$opt,cljs.core.array_seq([self__.opt], 0)):G__23224__$1);
var G__23224__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__23224__$2,cljs.core.cst$kw$req_DASH_un,cljs.core.array_seq([self__.req_un], 0)):G__23224__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__23224__$3,cljs.core.cst$kw$opt_DASH_un,cljs.core.array_seq([self__.opt_un], 0));
} else {
return G__23224__$3;
}
})());
});})(k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23187.getBasis = ((function (k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p__23144,cljs.core.cst$sym$map__23185,cljs.core.cst$sym$keys_DASH__GT_specnames,cljs.core.cst$sym$opt,cljs.core.cst$sym$req_DASH_un,cljs.core.cst$sym$opt_DASH_un,cljs.core.cst$sym$gfn,cljs.core.cst$sym$pred_DASH_exprs,cljs.core.cst$sym$keys_DASH_pred,cljs.core.cst$sym$argm,cljs.core.cst$sym$opt_DASH_keys,cljs.core.cst$sym$req_DASH_specs,cljs.core.cst$sym$req,cljs.core.cst$sym$id,cljs.core.cst$sym$req_DASH_keys,cljs.core.cst$sym$opt_DASH_specs,cljs.core.cst$sym$k_DASH__GT_s,cljs.core.cst$sym$pred_DASH_forms,cljs.core.cst$sym$meta23188], null);
});})(k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec23187.cljs$lang$type = true;

cljs.spec.t_cljs$spec23187.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23187";

cljs.spec.t_cljs$spec23187.cljs$lang$ctorPrWriter = ((function (k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.spec/t_cljs$spec23187");
});})(k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec23187 = ((function (k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec23187(p__23144__$1,map__23185__$2,keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta23188){
return (new cljs.spec.t_cljs$spec23187(p__23144__$1,map__23185__$2,keys__GT_specnames__$1,opt__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta23188));
});})(k__GT_s,keys__GT_specnames,id,map__23185,map__23185__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec23187(p__23144,map__23185__$1,keys__GT_specnames,opt,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args23233 = [];
var len__8822__auto___23241 = arguments.length;
var i__8823__auto___23242 = (0);
while(true){
if((i__8823__auto___23242 < len__8822__auto___23241)){
args23233.push((arguments[i__8823__auto___23242]));

var G__23243 = (i__8823__auto___23242 + (1));
i__8823__auto___23242 = G__23243;
continue;
} else {
}
break;
}

var G__23235 = args23233.length;
switch (G__23235) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23233.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5(form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_(pred))){
var G__23236 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen(G__23236,gfn);
} else {
return G__23236;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_(pred))){
return (cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(pred,gfn) : cljs.spec.regex_spec_impl.call(null,pred,gfn));
} else {
if(cljs.core.ident_QMARK_(pred)){
var G__23237 = cljs.spec.the_spec(pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen(G__23237,gfn);
} else {
return G__23237;
}
} else {
if(typeof cljs.spec.t_cljs$spec23238 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23238 = (function (form,pred,gfn,cpred_QMARK_,unc,meta23239){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta23239 = meta23239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23240,meta23239__$1){
var self__ = this;
var _23240__$1 = this;
return (new cljs.spec.t_cljs$spec23238(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta23239__$1));
});

cljs.spec.t_cljs$spec23238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23240){
var self__ = this;
var _23240__$1 = this;
return self__.meta23239;
});

cljs.spec.t_cljs$spec23238.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23238.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec23238.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec23238.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23238.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = (self__.pred.cljs$core$IFn$_invoke$arity$1 ? self__.pred.cljs$core$IFn$_invoke$arity$1(x) : self__.pred.call(null,x));
if(cljs.core.truth_(self__.cpred_QMARK_)){
return ret;
} else {
if(cljs.core.truth_(ret)){
return x;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
}
});

cljs.spec.t_cljs$spec23238.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
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

cljs.spec.t_cljs$spec23238.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(cljs.spec.dt.cljs$core$IFn$_invoke$arity$4(self__.pred,x,self__.form,self__.cpred_QMARK_)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.spec.abbrev(self__.form),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return null;
}
});

cljs.spec.t_cljs$spec23238.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.gen_for_pred(self__.pred);
}
});

cljs.spec.t_cljs$spec23238.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5(self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.t_cljs$spec23238.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec23238.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$cpred_QMARK_,cljs.core.cst$sym$unc,cljs.core.cst$sym$meta23239], null);
});

cljs.spec.t_cljs$spec23238.cljs$lang$type = true;

cljs.spec.t_cljs$spec23238.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23238";

cljs.spec.t_cljs$spec23238.cljs$lang$ctorPrWriter = (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.spec/t_cljs$spec23238");
});

cljs.spec.__GT_t_cljs$spec23238 = (function cljs$spec$__GT_t_cljs$spec23238(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta23239){
return (new cljs.spec.t_cljs$spec23238(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta23239));
});

}

return (new cljs.spec.t_cljs$spec23238(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args23250 = [];
var len__8822__auto___23264 = arguments.length;
var i__8823__auto___23265 = (0);
while(true){
if((i__8823__auto___23265 < len__8822__auto___23264)){
args23250.push((arguments[i__8823__auto___23265]));

var G__23266 = (i__8823__auto___23265 + (1));
i__8823__auto___23265 = G__23266;
continue;
} else {
}
break;
}

var G__23252 = args23250.length;
switch (G__23252) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23250.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid();
var predx = ((function (id){
return (function (p1__23245_SHARP_){
var mm = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mmvar) : cljs.core.deref.call(null,mmvar));
var and__7589__auto__ = cljs.core._get_method(mm,cljs.core._dispatch_fn(mm).call(null,p1__23245_SHARP_));
if(cljs.core.truth_(and__7589__auto__)){
return (mm.cljs$core$IFn$_invoke$arity$1 ? mm.cljs$core$IFn$_invoke$arity$1(p1__23245_SHARP_) : mm.call(null,p1__23245_SHARP_));
} else {
return and__7589__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__23246_SHARP_){
return cljs.core._dispatch_fn((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mmvar) : cljs.core.deref.call(null,mmvar))).call(null,p1__23246_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__23247_SHARP_,p2__23248_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23247_SHARP_,retag,p2__23248_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec23253 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23253 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta23254){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta23254 = meta23254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_23255,meta23254__$1){
var self__ = this;
var _23255__$1 = this;
return (new cljs.spec.t_cljs$spec23253(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta23254__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_23255){
var self__ = this;
var _23255__$1 = this;
return self__.meta23254;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23253.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23253.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23253.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23253.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23253.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6736__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__6736__auto__)){
var pred = temp__6736__auto__;
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred,x,self__.form);
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23253.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__6736__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__6736__auto__)){
var pred = temp__6736__auto__;
return cljs.spec.unform(pred,x);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No method of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" for dispatch value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x)))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23253.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = (self__.dval.cljs$core$IFn$_invoke$arity$1 ? self__.dval.cljs$core$IFn$_invoke$arity$1(x) : self__.dval.call(null,x));
var path__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,dv);
var temp__6736__auto__ = (self__.predx.cljs$core$IFn$_invoke$arity$1 ? self__.predx.cljs$core$IFn$_invoke$arity$1(x) : self__.predx.call(null,x));
if(cljs.core.truth_(temp__6736__auto__)){
var pred = temp__6736__auto__;
return cljs.spec.explain_1(self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$pred,cljs.spec.abbrev(self__.form),cljs.core.cst$kw$val,x,cljs.core.cst$kw$reason,"no method",cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23253.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__23256){
var vec__23257 = p__23256;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23257,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23257,(1),null);
var p = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(null) : f.call(null,null));
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,p,vec__23257,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (rmap__$1,p,vec__23257,k,f,___$1,id,predx,dval,tag){
return (function (p1__23249_SHARP_){
return (self__.tag.cljs$core$IFn$_invoke$arity$2 ? self__.tag.cljs$core$IFn$_invoke$arity$2(p1__23249_SHARP_,k) : self__.tag.call(null,p1__23249_SHARP_,k));
});})(rmap__$1,p,vec__23257,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,cljs.core._conj((function (){var x__8535__auto__ = self__.form;
return cljs.core._conj((function (){var x__8535__auto____$1 = k;
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto____$1);
})(),x__8535__auto__);
})(),cljs.core.cst$sym$method))], 0));
});})(rmap__$1,p,vec__23257,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (gen,___$1,id,predx,dval,tag){
return (function (p__23260){
var vec__23261 = p__23260;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23261,(0),null);
return cljs.spec.invalid_QMARK_(k);
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

cljs.spec.t_cljs$spec23253.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23253.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_multi_DASH_spec),(function (){var x__8535__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})(),cljs.core.array_seq([(function (){var x__8535__auto__ = self__.retag;
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})()], 0))));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23253.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$mmvar,cljs.core.cst$sym$retag,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$predx,cljs.core.cst$sym$dval,cljs.core.cst$sym$tag,cljs.core.cst$sym$meta23254], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec23253.cljs$lang$type = true;

cljs.spec.t_cljs$spec23253.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23253";

cljs.spec.t_cljs$spec23253.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.spec/t_cljs$spec23253");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec23253 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec23253(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta23254){
return (new cljs.spec.t_cljs$spec23253(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta23254));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec23253(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args23268 = [];
var len__8822__auto___23274 = arguments.length;
var i__8823__auto___23275 = (0);
while(true){
if((i__8823__auto___23275 < len__8822__auto___23274)){
args23268.push((arguments[i__8823__auto___23275]));

var G__23276 = (i__8823__auto___23275 + (1));
i__8823__auto___23275 = G__23276;
continue;
} else {
}
break;
}

var G__23270 = args23268.length;
switch (G__23270) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23268.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3(forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.specize,preds,forms);
}),null));
var cnt = cljs.core.count(preds);
if(typeof cljs.spec.t_cljs$spec23271 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23271 = (function (forms,preds,gfn,specs,cnt,meta23272){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cnt = cnt;
this.meta23272 = meta23272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cnt){
return (function (_23273,meta23272__$1){
var self__ = this;
var _23273__$1 = this;
return (new cljs.spec.t_cljs$spec23271(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cnt,meta23272__$1));
});})(specs,cnt))
;

cljs.spec.t_cljs$spec23271.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cnt){
return (function (_23273){
var self__ = this;
var _23273__$1 = this;
return self__.meta23272;
});})(specs,cnt))
;

cljs.spec.t_cljs$spec23271.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23271.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs,cnt){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.t_cljs$spec23271.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs,cnt){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cnt))
;

cljs.spec.t_cljs$spec23271.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23271.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.specs) : cljs.core.deref.call(null,self__.specs));
if(!((cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),self__.cnt)))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,self__.cnt)){
return ret;
} else {
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
var cv = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),v);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__23278 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv));
var G__23279 = (i + (1));
ret = G__23278;
i = G__23279;
continue;
}
}
break;
}
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec23271.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,x){
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
var G__23280 = (((cv === v))?ret:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,v));
var G__23281 = (i + (1));
ret = G__23280;
i = G__23281;
continue;
}
break;
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec23271.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs,cnt){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_(x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__8535__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})(),cljs.core.array_seq([(function (){var x__8535__auto__ = cljs.core.count(self__.preds);
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (___$1,specs,cnt){
return (function (i,form,pred){
var v = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(i) : x.call(null,i));
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,v))){
return null;
} else {
return cljs.spec.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i),v);
}
});})(___$1,specs,cnt))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.forms,self__.preds));

}
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec23271.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs,cnt){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,specs,cnt){
return (function (i,p,f){
return cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,i),rmap,f);
});})(___$1,specs,cnt))
;
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gs)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});})(specs,cnt))
;

cljs.spec.t_cljs$spec23271.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs,cnt){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1);
});})(specs,cnt))
;

cljs.spec.t_cljs$spec23271.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs,cnt){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_tuple),self__.forms)));
});})(specs,cnt))
;

cljs.spec.t_cljs$spec23271.getBasis = ((function (specs,cnt){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cnt,cljs.core.cst$sym$meta23272], null);
});})(specs,cnt))
;

cljs.spec.t_cljs$spec23271.cljs$lang$type = true;

cljs.spec.t_cljs$spec23271.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23271";

cljs.spec.t_cljs$spec23271.cljs$lang$ctorPrWriter = ((function (specs,cnt){
return (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.spec/t_cljs$spec23271");
});})(specs,cnt))
;

cljs.spec.__GT_t_cljs$spec23271 = ((function (specs,cnt){
return (function cljs$spec$__GT_t_cljs$spec23271(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta23272){
return (new cljs.spec.t_cljs$spec23271(forms__$1,preds__$1,gfn__$1,specs__$1,cnt__$1,meta23272));
});})(specs,cnt))
;

}

return (new cljs.spec.t_cljs$spec23271(forms,preds,gfn,specs,cnt,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x23283 = v;
x23283.cljs$core$IMapEntry$ = cljs.core.PROTOCOL_SENTINEL;

x23283.cljs$core$IMapEntry$_key$arity$1 = ((function (x23283){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(0));
});})(x23283))
;

x23283.cljs$core$IMapEntry$_val$arity$1 = ((function (x23283){
return (function (_){
var ___$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$2(v,(1));
});})(x23283))
;

return x23283;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid();
var kps = cljs.core.zipmap(keys,preds);
var specs = (new cljs.core.Delay(((function (id,kps){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.specize,preds,forms);
});})(id,kps))
,null));
var cform = (function (){var G__23292 = cljs.core.count(preds);
switch (G__23292) {
case (2):
return ((function (G__23292,id,kps,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var ret = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret))){
var ret__$1 = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret__$1))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1], null));
}
} else {
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret], null));
}
});
;})(G__23292,id,kps,specs))

break;
case (3):
return ((function (G__23292,id,kps,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var ret = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret))){
var ret__$1 = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret__$1))){
var ret__$2 = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret__$2))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((2)) : keys.call(null,(2))),ret__$2], null));
}
} else {
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((1)) : keys.call(null,(1))),ret__$1], null));
}
} else {
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1((0)) : keys.call(null,(0))),ret], null));
}
});
;})(G__23292,id,kps,specs))

break;
default:
return ((function (G__23292,id,kps,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var spec = (specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i));
var ret = cljs.spec.conform_STAR_(spec,x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret))){
var G__23301 = (i + (1));
i = G__23301;
continue;
} else {
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(keys.cljs$core$IFn$_invoke$arity$1 ? keys.cljs$core$IFn$_invoke$arity$1(i) : keys.call(null,i)),ret], null));
}
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
break;
}
});
;})(G__23292,id,kps,specs))

}
})();
if(typeof cljs.spec.t_cljs$spec23293 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23293 = (function (keys,forms,preds,gfn,id,kps,specs,cform,meta23294){
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.specs = specs;
this.cform = cform;
this.meta23294 = meta23294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,specs,cform){
return (function (_23295,meta23294__$1){
var self__ = this;
var _23295__$1 = this;
return (new cljs.spec.t_cljs$spec23293(self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.specs,self__.cform,meta23294__$1));
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec23293.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,specs,cform){
return (function (_23295){
var self__ = this;
var _23295__$1 = this;
return self__.meta23294;
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec23293.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23293.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec23293.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec23293.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23293.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec23293.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,p__23296){
var self__ = this;
var vec__23297 = p__23296;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23297,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23297,(1),null);
var ___$1 = this;
return cljs.spec.unform((self__.kps.cljs$core$IFn$_invoke$arity$1 ? self__.kps.cljs$core$IFn$_invoke$arity$1(k) : self__.kps.call(null,k)),x);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec23293.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,specs,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(this$__$1,x))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (this$__$1,id,kps,specs,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return null;
} else {
return cljs.spec.explain_1(form,pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),via,in$,x);
}
});})(this$__$1,id,kps,specs,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec23293.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var gen = ((function (___$1,id,kps,specs,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck(rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,specs,cform){
return (function (){
return cljs.spec.gensub(p,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,specs,cform))
,null)));
}
});})(___$1,id,kps,specs,cform))
;
var gs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_(gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs], 0));
}
}
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec23293.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.or_spec_impl.cljs$core$IFn$_invoke$arity$4 ? cljs.spec.or_spec_impl.cljs$core$IFn$_invoke$arity$4(self__.keys,self__.forms,self__.preds,gfn__$1) : cljs.spec.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1));
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec23293.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_or),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([self__.keys,self__.forms], 0)))));
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec23293.getBasis = ((function (id,kps,specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$keys,cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$id,cljs.core.cst$sym$kps,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta23294], null);
});})(id,kps,specs,cform))
;

cljs.spec.t_cljs$spec23293.cljs$lang$type = true;

cljs.spec.t_cljs$spec23293.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23293";

cljs.spec.t_cljs$spec23293.cljs$lang$ctorPrWriter = ((function (id,kps,specs,cform){
return (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.spec/t_cljs$spec23293");
});})(id,kps,specs,cform))
;

cljs.spec.__GT_t_cljs$spec23293 = ((function (id,kps,specs,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec23293(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta23294){
return (new cljs.spec.t_cljs$spec23293(keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,specs__$1,cform__$1,meta23294));
});})(id,kps,specs,cform))
;

}

return (new cljs.spec.t_cljs$spec23293(keys,forms,preds,gfn,id,kps,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__23328 = preds;
var vec__23330 = G__23328;
var seq__23331 = cljs.core.seq(vec__23330);
var first__23332 = cljs.core.first(seq__23331);
var seq__23331__$1 = cljs.core.next(seq__23331);
var pred = first__23332;
var preds__$1 = seq__23331__$1;
var G__23329 = forms;
var vec__23333 = G__23329;
var seq__23334 = cljs.core.seq(vec__23333);
var first__23335 = cljs.core.first(seq__23334);
var seq__23334__$1 = cljs.core.next(seq__23334);
var form = first__23335;
var forms__$1 = seq__23334__$1;
var ret__$1 = ret;
var G__23328__$1 = G__23328;
var G__23329__$1 = G__23329;
while(true){
var ret__$2 = ret__$1;
var vec__23336 = G__23328__$1;
var seq__23337 = cljs.core.seq(vec__23336);
var first__23338 = cljs.core.first(seq__23337);
var seq__23337__$1 = cljs.core.next(seq__23337);
var pred__$1 = first__23338;
var preds__$2 = seq__23337__$1;
var vec__23339 = G__23329__$1;
var seq__23340 = cljs.core.seq(vec__23339);
var first__23341 = cljs.core.first(seq__23340);
var seq__23340__$1 = cljs.core.next(seq__23340);
var form__$1 = first__23341;
var forms__$2 = seq__23340__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(nret))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__23342 = nret;
var G__23343 = preds__$2;
var G__23344 = forms__$2;
ret__$1 = G__23342;
G__23328__$1 = G__23343;
G__23329__$1 = G__23344;
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
var G__23371 = forms;
var vec__23373 = G__23371;
var seq__23374 = cljs.core.seq(vec__23373);
var first__23375 = cljs.core.first(seq__23374);
var seq__23374__$1 = cljs.core.next(seq__23374);
var form = first__23375;
var forms__$1 = seq__23374__$1;
var G__23372 = preds;
var vec__23376 = G__23372;
var seq__23377 = cljs.core.seq(vec__23376);
var first__23378 = cljs.core.first(seq__23377);
var seq__23377__$1 = cljs.core.next(seq__23377);
var pred = first__23378;
var preds__$1 = seq__23377__$1;
var ret__$1 = ret;
var G__23371__$1 = G__23371;
var G__23372__$1 = G__23372;
while(true){
var ret__$2 = ret__$1;
var vec__23379 = G__23371__$1;
var seq__23380 = cljs.core.seq(vec__23379);
var first__23381 = cljs.core.first(seq__23380);
var seq__23380__$1 = cljs.core.next(seq__23380);
var form__$1 = first__23381;
var forms__$2 = seq__23380__$1;
var vec__23382 = G__23372__$1;
var seq__23383 = cljs.core.seq(vec__23382);
var first__23384 = cljs.core.first(seq__23383);
var seq__23383__$1 = cljs.core.next(seq__23383);
var pred__$1 = first__23384;
var preds__$2 = seq__23383__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(pred__$1,ret__$2,form__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(nret))){
return cljs.spec.explain_1(form__$1,pred__$1,path,via,in$,ret__$2);
} else {
var G__23385 = nret;
var G__23386 = forms__$2;
var G__23387 = preds__$2;
ret__$1 = G__23385;
G__23371__$1 = G__23386;
G__23372__$1 = G__23387;
continue;
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
var specs = (new cljs.core.Delay((function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(cljs.spec.specize,preds,forms);
}),null));
var cform = (function (){var G__23394 = cljs.core.count(preds);
switch (G__23394) {
case (2):
return ((function (G__23394,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var ret = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
return cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
}
});
;})(G__23394,specs))

break;
case (3):
return ((function (G__23394,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var ret = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((0)) : specs__$1.call(null,(0))),x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var ret__$1 = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((1)) : specs__$1.call(null,(1))),ret);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret__$1))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
return cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1((2)) : specs__$1.call(null,(2))),ret__$1);
}
}
});
;})(G__23394,specs))

break;
default:
return ((function (G__23394,specs){
return (function (x){
var specs__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(specs) : cljs.core.deref.call(null,specs));
var ret = x;
var i = (0);
while(true){
if((i < cljs.core.count(specs__$1))){
var nret = cljs.spec.conform_STAR_((specs__$1.cljs$core$IFn$_invoke$arity$1 ? specs__$1.cljs$core$IFn$_invoke$arity$1(i) : specs__$1.call(null,i)),ret);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(nret))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__23399 = nret;
var G__23400 = (i + (1));
ret = G__23399;
i = G__23400;
continue;
}
} else {
return ret;
}
break;
}
});
;})(G__23394,specs))

}
})();
if(typeof cljs.spec.t_cljs$spec23395 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23395 = (function (forms,preds,gfn,specs,cform,meta23396){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.specs = specs;
this.cform = cform;
this.meta23396 = meta23396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs,cform){
return (function (_23397,meta23396__$1){
var self__ = this;
var _23397__$1 = this;
return (new cljs.spec.t_cljs$spec23395(self__.forms,self__.preds,self__.gfn,self__.specs,self__.cform,meta23396__$1));
});})(specs,cform))
;

cljs.spec.t_cljs$spec23395.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs,cform){
return (function (_23397){
var self__ = this;
var _23397__$1 = this;
return self__.meta23396;
});})(specs,cform))
;

cljs.spec.t_cljs$spec23395.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23395.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs,cform){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.t_cljs$spec23395.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs,cform){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs,cform))
;

cljs.spec.t_cljs$spec23395.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23395.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return (self__.cform.cljs$core$IFn$_invoke$arity$1 ? self__.cform.cljs$core$IFn$_invoke$arity$1(x) : self__.cform.call(null,x));
});})(specs,cform))
;

cljs.spec.t_cljs$spec23395.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (___$1,specs,cform){
return (function (p1__23389_SHARP_,p2__23388_SHARP_){
return cljs.spec.unform(p2__23388_SHARP_,p1__23389_SHARP_);
});})(___$1,specs,cform))
,x,cljs.core.reverse(self__.preds));
});})(specs,cform))
;

cljs.spec.t_cljs$spec23395.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs,cform){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list(self__.forms,self__.preds,path,via,in$,x);
});})(specs,cform))
;

cljs.spec.t_cljs$spec23395.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.gensub(cljs.core.first(self__.preds),overrides,path,rmap,cljs.core.first(self__.forms));
}
});})(specs,cform))
;

cljs.spec.t_cljs$spec23395.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.and_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.and_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});})(specs,cform))
;

cljs.spec.t_cljs$spec23395.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_and),self__.forms)));
});})(specs,cform))
;

cljs.spec.t_cljs$spec23395.getBasis = ((function (specs,cform){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$cform,cljs.core.cst$sym$meta23396], null);
});})(specs,cform))
;

cljs.spec.t_cljs$spec23395.cljs$lang$type = true;

cljs.spec.t_cljs$spec23395.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23395";

cljs.spec.t_cljs$spec23395.cljs$lang$ctorPrWriter = ((function (specs,cform){
return (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.spec/t_cljs$spec23395");
});})(specs,cform))
;

cljs.spec.__GT_t_cljs$spec23395 = ((function (specs,cform){
return (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec23395(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta23396){
return (new cljs.spec.t_cljs$spec23395(forms__$1,preds__$1,gfn__$1,specs__$1,cform__$1,meta23396));
});})(specs,cform))
;

}

return (new cljs.spec.t_cljs$spec23395(forms,preds,gfn,specs,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.coll_prob = (function cljs$spec$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__7601__auto__ = kfn;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__7601__auto__ = kform;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.cst$sym$cljs$core_SLASH_coll_QMARK_;
}
})();
if(cljs.core.not(cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(pred,x))){
return cljs.spec.explain_1(kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__7589__auto__ = count;
if(cljs.core.truth_(and__7589__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(count,cljs.core.bounded_count(count,x));
} else {
return and__7589__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__EQ_),(function (){var x__8535__auto__ = count;
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})(),cljs.core.array_seq([(function (){var x__8535__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__7589__auto__ = (function (){var or__7601__auto__ = min_count;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__7589__auto__)){
return !((((function (){var or__7601__auto__ = min_count;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count((cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__7601__auto__ = max_count;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__7589__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH__LT__EQ_),(function (){var x__8535__auto__ = (function (){var or__7601__auto__ = min_count;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return (0);
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})(),cljs.core.array_seq([(function (){var x__8535__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_count),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$_PERCENT_))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})(),(function (){var x__8535__auto__ = (function (){var or__7601__auto__ = max_count;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.spec.MAX_INT;
}
})();
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})()], 0)))),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__7589__auto__ = distinct;
if(cljs.core.truth_(and__7589__auto__)){
return (!(cljs.core.empty_QMARK_(x))) && (cljs.core.not(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,x)));
} else {
return and__7589__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.cst$sym$distinct_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
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
if(typeof cljs.spec.t_cljs$spec23412 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23412 = (function (forms,preds,gfn,meta23413){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta23413 = meta23413;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23414,meta23413__$1){
var self__ = this;
var _23414__$1 = this;
return (new cljs.spec.t_cljs$spec23412(self__.forms,self__.preds,self__.gfn,meta23413__$1));
});

cljs.spec.t_cljs$spec23412.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23414){
var self__ = this;
var _23414__$1 = this;
return self__.meta23413;
});

cljs.spec.t_cljs$spec23412.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23412.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec23412.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec23412.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23412.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__23401_SHARP_,p2__23402_SHARP_){
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(p1__23401_SHARP_,x,p2__23402_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some(cljs.spec.invalid_QMARK_,ms))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,ms);
}
});

cljs.spec.t_cljs$spec23412.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (___$1){
return (function (p1__23403_SHARP_){
return cljs.spec.unform(p1__23403_SHARP_,x);
});})(___$1))
,cljs.core.reverse(self__.preds)));
});

cljs.spec.t_cljs$spec23412.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__23404_SHARP_,p2__23405_SHARP_){
return cljs.spec.explain_1(p1__23404_SHARP_,p2__23405_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.t_cljs$spec23412.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (___$1){
return (function (p1__23406_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,p1__23406_SHARP_);
});})(___$1))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.tuple,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (___$1){
return (function (p1__23407_SHARP_,p2__23408_SHARP_){
return cljs.spec.gensub(p1__23407_SHARP_,overrides,path,rmap,p2__23408_SHARP_);
});})(___$1))
,self__.preds,self__.forms))], 0));
}
});

cljs.spec.t_cljs$spec23412.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.merge_spec_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.merge_spec_impl.cljs$core$IFn$_invoke$arity$3(self__.forms,self__.preds,gfn__$1) : cljs.spec.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1));
});

cljs.spec.t_cljs$spec23412.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_merge),self__.forms)));
});

cljs.spec.t_cljs$spec23412.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$forms,cljs.core.cst$sym$preds,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta23413], null);
});

cljs.spec.t_cljs$spec23412.cljs$lang$type = true;

cljs.spec.t_cljs$spec23412.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23412";

cljs.spec.t_cljs$spec23412.cljs$lang$ctorPrWriter = (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.spec/t_cljs$spec23412");
});

cljs.spec.__GT_t_cljs$spec23412 = (function cljs$spec$merge_spec_impl_$___GT_t_cljs$spec23412(forms__$1,preds__$1,gfn__$1,meta23413){
return (new cljs.spec.t_cljs$spec23412(forms__$1,preds__$1,gfn__$1,meta23413));
});

}

return (new cljs.spec.t_cljs$spec23412(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args23419 = [];
var len__8822__auto___23451 = arguments.length;
var i__8823__auto___23452 = (0);
while(true){
if((i__8823__auto___23452 < len__8822__auto___23451)){
args23419.push((arguments[i__8823__auto___23452]));

var G__23453 = (i__8823__auto___23452 + (1));
i__8823__auto___23452 = G__23453;
continue;
} else {
}
break;
}

var G__23421 = args23419.length;
switch (G__23421) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23419.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4(form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__23422,gfn){
var map__23423 = p__23422;
var map__23423__$1 = ((((!((map__23423 == null)))?((((map__23423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23423.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23423):map__23423);
var opts = map__23423__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23423__$1,cljs.core.cst$kw$max_DASH_count);
var kfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23423__$1,cljs.core.cst$kw$cljs$spec_SLASH_kfn);
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23423__$1,cljs.core.cst$kw$gen_DASH_max,(20));
var conform_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23423__$1,cljs.core.cst$kw$cljs$spec_SLASH_conform_DASH_all);
var conform_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23423__$1,cljs.core.cst$kw$conform_DASH_keys);
var describe_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23423__$1,cljs.core.cst$kw$cljs$spec_SLASH_describe);
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23423__$1,cljs.core.cst$kw$distinct);
var kind_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23423__$1,cljs.core.cst$kw$cljs$spec_SLASH_kind_DASH_form);
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23423__$1,cljs.core.cst$kw$into);
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23423__$1,cljs.core.cst$kw$count);
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23423__$1,cljs.core.cst$kw$min_DASH_count);
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23423__$1,cljs.core.cst$kw$kind);
var cpred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23423__$1,cljs.core.cst$kw$cljs$spec_SLASH_cpred);
var conform_into = gen_into;
var spec = (new cljs.core.Delay(((function (conform_into,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (){
return cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(pred);
});})(conform_into,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,null));
var check_QMARK_ = ((function (conform_into,spec,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__23415_SHARP_){
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(spec) : cljs.core.deref.call(null,spec)),p1__23415_SHARP_);
});})(conform_into,spec,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
var kfn__$1 = (function (){var or__7601__auto__ = kfn;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return ((function (or__7601__auto__,conform_into,spec,check_QMARK_,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (i,v){
return i;
});
;})(or__7601__auto__,conform_into,spec,check_QMARK_,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
}
})();
var addcv = ((function (conform_into,spec,check_QMARK_,kfn__$1,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,cv);
});})(conform_into,spec,check_QMARK_,kfn__$1,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
var cfns = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (x){
if((cljs.core.vector_QMARK_(x)) && ((cljs.core.not(conform_into)) || (cljs.core.vector_QMARK_(conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,i,cv);
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__7589__auto__ = cljs.core.map_QMARK_(x);
if(and__7589__auto__){
var or__7601__auto__ = (function (){var and__7589__auto____$1 = kind;
if(cljs.core.truth_(and__7589__auto____$1)){
return cljs.core.not(conform_into);
} else {
return and__7589__auto____$1;
}
})();
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.map_QMARK_(conform_into);
}
} else {
return and__7589__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not(conform_keys))){
return ret;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.nth.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cv,(1)));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.identity], null);
} else {
if((cljs.core.list_QMARK_(conform_into)) || (cljs.core.seq_QMARK_(conform_into)) || ((cljs.core.not(conform_into)) && ((cljs.core.list_QMARK_(x)) || (cljs.core.seq_QMARK_(x))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__23416_SHARP_){
return cljs.core.empty((function (){var or__7601__auto__ = conform_into;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return p1__23416_SHARP_;
}
})());
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;
if(typeof cljs.spec.t_cljs$spec23425 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23425 = (function (form,max_count,check_QMARK_,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,p__23422,kfn,gen_into,count,min_count,opts,kind,conform_all,map__23423,conform_into,meta23426){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.cpred = cpred;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.describe_form = describe_form;
this.distinct = distinct;
this.spec = spec;
this.p__23422 = p__23422;
this.kfn = kfn;
this.gen_into = gen_into;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.conform_all = conform_all;
this.map__23423 = map__23423;
this.conform_into = conform_into;
this.meta23426 = meta23426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_23427,meta23426__$1){
var self__ = this;
var _23427__$1 = this;
return (new cljs.spec.t_cljs$spec23425(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.cpred,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.describe_form,self__.distinct,self__.spec,self__.p__23422,self__.kfn,self__.gen_into,self__.count,self__.min_count,self__.opts,self__.kind,self__.conform_all,self__.map__23423,self__.conform_into,meta23426__$1));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec23425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_23427){
var self__ = this;
var _23427__$1 = this;
return self__.meta23426;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec23425.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23425.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec23425.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec23425.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23425.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var spec__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.spec) : cljs.core.deref.call(null,self__.spec));
if(cljs.core.not((self__.cpred.cljs$core$IFn$_invoke$arity$1 ? self__.cpred.cljs$core$IFn$_invoke$arity$1(x) : self__.cpred.call(null,x)))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__23428 = (self__.cfns.cljs$core$IFn$_invoke$arity$1 ? self__.cfns.cljs$core$IFn$_invoke$arity$1(x) : self__.cfns.call(null,x));
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23428,(0),null);
var add = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23428,(1),null);
var complete = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23428,(2),null);
var ret = (init.cljs$core$IFn$_invoke$arity$1 ? init.cljs$core$IFn$_invoke$arity$1(x) : init.call(null,x));
var i = (0);
var G__23434 = cljs.core.seq(x);
var vec__23435 = G__23434;
var seq__23436 = cljs.core.seq(vec__23435);
var first__23437 = cljs.core.first(seq__23436);
var seq__23436__$1 = cljs.core.next(seq__23436);
var v = first__23437;
var vs = seq__23436__$1;
var vseq = vec__23435;
var ret__$1 = ret;
var i__$1 = i;
var G__23434__$1 = G__23434;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__23438 = G__23434__$1;
var seq__23439 = cljs.core.seq(vec__23438);
var first__23440 = cljs.core.first(seq__23439);
var seq__23439__$1 = cljs.core.next(seq__23439);
var v__$1 = first__23440;
var vs__$1 = seq__23439__$1;
var vseq__$1 = vec__23438;
if(vseq__$1){
var cv = cljs.spec.conform_STAR_(spec__$1,v__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(cv))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
var G__23455 = (add.cljs$core$IFn$_invoke$arity$4 ? add.cljs$core$IFn$_invoke$arity$4(ret__$2,i__$2,v__$1,cv) : add.call(null,ret__$2,i__$2,v__$1,cv));
var G__23456 = (i__$2 + (1));
var G__23457 = vs__$1;
ret__$1 = G__23455;
i__$1 = G__23456;
G__23434__$1 = G__23457;
continue;
}
} else {
return (complete.cljs$core$IFn$_invoke$arity$1 ? complete.cljs$core$IFn$_invoke$arity$1(ret__$2) : complete.call(null,ret__$2));
}
break;
}
} else {
if(cljs.core.indexed_QMARK_(x)){
var step = (function (){var x__7939__auto__ = (1);
var y__7940__auto__ = cljs.core.long$((cljs.core.count(x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__7939__auto__ > y__7940__auto__) ? x__7939__auto__ : y__7940__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count(x))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,i)))){
var G__23458 = (i + step);
i = G__23458;
continue;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
}
break;
}
} else {
var limit = cljs.spec._STAR_coll_check_limit_STAR_;
var i = (0);
var G__23444 = cljs.core.seq(x);
var vec__23445 = G__23444;
var seq__23446 = cljs.core.seq(vec__23445);
var first__23447 = cljs.core.first(seq__23446);
var seq__23446__$1 = cljs.core.next(seq__23446);
var v = first__23447;
var vs = seq__23446__$1;
var vseq = vec__23445;
var i__$1 = i;
var G__23444__$1 = G__23444;
while(true){
var i__$2 = i__$1;
var vec__23448 = G__23444__$1;
var seq__23449 = cljs.core.seq(vec__23448);
var first__23450 = cljs.core.first(seq__23449);
var seq__23449__$1 = cljs.core.next(seq__23449);
var v__$1 = first__23450;
var vs__$1 = seq__23449__$1;
var vseq__$1 = vec__23448;
if(((vseq__$1 == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i__$2,limit))){
return x;
} else {
if(cljs.core.truth_(cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec__$1,v__$1))){
var G__23459 = (i__$2 + (1));
var G__23460 = vs__$1;
i__$1 = G__23459;
G__23444__$1 = G__23460;
continue;
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;

}
}
break;
}
}

}
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec23425.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec23425.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__7601__auto__ = cljs.spec.coll_prob(x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,cljs.spec._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (or__7601__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (i,v){
var k = (self__.kfn.cljs$core$IFn$_invoke$arity$2 ? self__.kfn.cljs$core$IFn$_invoke$arity$2(i,v) : self__.kfn.call(null,i,v));
if(cljs.core.truth_((self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.check_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : self__.check_QMARK_.call(null,v)))){
return null;
} else {
var prob = cljs.spec.explain_1(self__.form,self__.pred,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,k),v);
return prob;
}
});})(or__7601__auto__,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0(),x))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec23425.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
var pgen = cljs.spec.gensub(self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(self__.gen_into)?cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.empty(self__.gen_into)], 0)):(cljs.core.truth_(self__.kind)?cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__23417_SHARP_){
if(cljs.core.empty_QMARK_(p1__23417_SHARP_)){
return p1__23417_SHARP_;
} else {
return cljs.core.empty(p1__23417_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,cljs.spec.gensub(self__.kind,overrides,path,rmap,self__.form)], 0)):cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0))
)),((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (init){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (p1__23418_SHARP_){
if(cljs.core.vector_QMARK_(init)){
return p1__23418_SHARP_;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(init,p1__23418_SHARP_);
}
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$num_DASH_elements,self__.count,cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0)):cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$min_DASH_elements,(function (){var or__7601__auto__ = self__.min_count;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return (0);
}
})(),cljs.core.cst$kw$max_DASH_elements,(function (){var or__7601__auto__ = self__.max_count;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var x__7939__auto__ = self__.gen_max;
var y__7940__auto__ = ((2) * (function (){var or__7601__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
return (0);
}
})());
return ((x__7939__auto__ > y__7940__auto__) ? x__7939__auto__ : y__7940__auto__);
}
})(),cljs.core.cst$kw$max_DASH_tries,(100)], null)], 0))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,self__.count], 0)):(cljs.core.truth_((function (){var or__7601__auto__ = self__.min_count;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,(function (){var or__7601__auto__ = self__.min_count;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return (0);
}
})(),(function (){var or__7601__auto__ = self__.max_count;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var x__7939__auto__ = self__.gen_max;
var y__7940__auto__ = ((2) * (function (){var or__7601__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
return (0);
}
})());
return ((x__7939__auto__ > y__7940__auto__) ? x__7939__auto__ : y__7940__auto__);
}
})()], 0)):cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pgen,(0),self__.gen_max], 0))
)))], 0));
});})(pgen,___$1,conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
], 0));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec23425.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4(self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec23425.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (_){
var self__ = this;
var ___$1 = this;
var or__7601__auto__ = self__.describe_form;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_every),(function (){var x__8535__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})(),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([self__.opts], 0))], 0))));
}
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec23425.getBasis = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$max_DASH_count,cljs.core.cst$sym$check_QMARK_,cljs.core.cst$sym$gfn,cljs.core.cst$sym$gen_DASH_max,cljs.core.cst$sym$pred,cljs.core.cst$sym$cpred,cljs.core.cst$sym$conform_DASH_keys,cljs.core.cst$sym$kind_DASH_form,cljs.core.cst$sym$addcv,cljs.core.cst$sym$cfns,cljs.core.cst$sym$describe_DASH_form,cljs.core.cst$sym$distinct,cljs.core.cst$sym$spec,cljs.core.cst$sym$p__23422,cljs.core.cst$sym$kfn,cljs.core.cst$sym$gen_DASH_into,cljs.core.cst$sym$count,cljs.core.cst$sym$min_DASH_count,cljs.core.cst$sym$opts,cljs.core.cst$sym$kind,cljs.core.cst$sym$conform_DASH_all,cljs.core.cst$sym$map__23423,cljs.core.cst$sym$conform_DASH_into,cljs.core.cst$sym$meta23426], null);
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.t_cljs$spec23425.cljs$lang$type = true;

cljs.spec.t_cljs$spec23425.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23425";

cljs.spec.t_cljs$spec23425.cljs$lang$ctorPrWriter = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.spec/t_cljs$spec23425");
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

cljs.spec.__GT_t_cljs$spec23425 = ((function (conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred){
return (function cljs$spec$__GT_t_cljs$spec23425(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,p__23422__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,map__23423__$2,conform_into__$1,meta23426){
return (new cljs.spec.t_cljs$spec23425(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,cpred__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,describe_form__$1,distinct__$1,spec__$1,p__23422__$1,kfn__$2,gen_into__$1,count__$1,min_count__$1,opts__$1,kind__$1,conform_all__$1,map__23423__$2,conform_into__$1,meta23426));
});})(conform_into,spec,check_QMARK_,kfn__$1,addcv,cfns,map__23423,map__23423__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,describe_form,distinct,kind_form,gen_into,count,min_count,kind,cpred))
;

}

return (new cljs.spec.t_cljs$spec23425(form,max_count,check_QMARK_,gfn,gen_max,pred,cpred,conform_keys,kind_form,addcv,cfns,describe_form,distinct,spec,p__23422,kfn__$1,gen_into,count,min_count,opts,kind,conform_all,map__23423__$1,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_accept,cljs.core.cst$kw$ret,x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__23461){
var map__23464 = p__23461;
var map__23464__$1 = ((((!((map__23464 == null)))?((((map__23464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23464.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23464):map__23464);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23464__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__23466){
var map__23479 = p__23466;
var map__23479__$1 = ((((!((map__23479 == null)))?((((map__23479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23479.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23479):map__23479);
var vec__23480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23479__$1,cljs.core.cst$kw$ps);
var seq__23481 = cljs.core.seq(vec__23480);
var first__23482 = cljs.core.first(seq__23481);
var seq__23481__$1 = cljs.core.next(seq__23481);
var p1 = first__23482;
var pr = seq__23481__$1;
var ps = vec__23480;
var vec__23483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23479__$1,cljs.core.cst$kw$ks);
var seq__23484 = cljs.core.seq(vec__23483);
var first__23485 = cljs.core.first(seq__23484);
var seq__23484__$1 = cljs.core.next(seq__23484);
var k1 = first__23485;
var kr = seq__23484__$1;
var ks = vec__23483;
var vec__23486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23479__$1,cljs.core.cst$kw$forms);
var seq__23487 = cljs.core.seq(vec__23486);
var first__23488 = cljs.core.first(seq__23487);
var seq__23487__$1 = cljs.core.next(seq__23487);
var f1 = first__23488;
var fr = seq__23487__$1;
var forms = vec__23486;
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23479__$1,cljs.core.cst$kw$ret);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23479__$1,cljs.core.cst$kw$rep_PLUS_);
if(cljs.core.every_QMARK_(cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p1))){
var rp = cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,rp]):rp));
if(pr){
var G__23490 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,fr,cljs.core.cst$kw$ret,ret__$1], null);
return (cljs.spec.pcat_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.pcat_STAR_.cljs$core$IFn$_invoke$arity$1(G__23490) : cljs.spec.pcat_STAR_.call(null,G__23490));
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
var args__8829__auto__ = [];
var len__8822__auto___23492 = arguments.length;
var i__8823__auto___23493 = (0);
while(true){
if((i__8823__auto___23493 < len__8822__auto___23492)){
args__8829__auto__.push((arguments[i__8823__auto___23493]));

var G__23494 = (i__8823__auto___23493 + (1));
i__8823__auto___23493 = G__23494;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ps,ps,cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq23491){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23491));
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
return cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_(p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),cljs.core.cst$kw$forms,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var x__8535__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})(),(function (){var x__8535__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH__STAR_),(function (){var x__8535__auto__ = form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})())))),cljs.core.cst$kw$ret,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$rep_PLUS_,form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cljs$spec_SLASH_op,cljs.core.cst$kw$cljs$spec_SLASH_amp,cljs.core.cst$kw$p1,re,cljs.core.cst$kw$ps,preds,cljs.core.cst$kw$forms,pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__7601__auto__ = ks;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__23495_SHARP_){
var G__23498 = cljs.core.first(p1__23495_SHARP_);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__23498) : f.call(null,G__23498));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__7601__auto__ = cljs.core.seq(ks);
if(or__7601__auto__){
return or__7601__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__7601__auto__ = cljs.core.seq(forms);
if(or__7601__auto__){
return or__7601__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pks){
return (function (p1__23496_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__23496_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__23508 = cljs.spec.filter_alt(ps,ks,forms,cljs.core.identity);
var vec__23511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23508,(0),null);
var seq__23512 = cljs.core.seq(vec__23511);
var first__23513 = cljs.core.first(seq__23512);
var seq__23512__$1 = cljs.core.next(seq__23512);
var p1 = first__23513;
var pr = seq__23512__$1;
var ps__$1 = vec__23511;
var vec__23514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23508,(1),null);
var k1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23514,(0),null);
var ks__$1 = vec__23514;
var forms__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23508,(2),null);
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
var args__8829__auto__ = [];
var len__8822__auto___23518 = arguments.length;
var i__8823__auto___23519 = (0);
while(true){
if((i__8823__auto___23519 < len__8822__auto___23518)){
args__8829__auto__.push((arguments[i__8823__auto___23519]));

var G__23520 = (i__8823__auto___23519 + (1));
i__8823__auto___23519 = G__23520;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_(ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq23517){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq23517));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__7589__auto__ = p1;
if(cljs.core.truth_(and__7589__auto__)){
return p2;
} else {
return and__7589__auto__;
}
})())){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1,p2], 0));
} else {
var or__7601__auto__ = p1;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
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
var or__7601__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pret,cljs.core.cst$kw$cljs$spec_SLASH_nil);
if(or__7601__auto__){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = (function (){var and__7589__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_pcat,null,cljs.core.cst$kw$cljs$spec_SLASH_rep,null], null), null).call(null,cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_(p1)));
if(cljs.core.truth_(and__7589__auto__)){
return cljs.core.empty_QMARK_(pret);
} else {
return and__7589__auto__;
}
})();
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__23524 = cljs.spec.reg_resolve_BANG_(p);
var map__23524__$1 = ((((!((map__23524 == null)))?((((map__23524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23524):map__23524);
var p__$1 = map__23524__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23524__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23524__$1,cljs.core.cst$kw$ps);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23524__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23524__$1,cljs.core.cst$kw$p2);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23524__$1,cljs.core.cst$kw$forms);
var G__23526 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__23526)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__23526)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__23526)){
var and__7589__auto__ = (cljs.spec.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.accept_nil_QMARK_.call(null,p1));
if(cljs.core.truth_(and__7589__auto__)){
var or__7601__auto__ = cljs.spec.noret_QMARK_(p1,(cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.preturn.call(null,p1)));
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var ret = cljs.spec.and_preds((cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.preturn.call(null,p1)),ps,cljs.core.next(forms));
return cljs.core.not(cljs.spec.invalid_QMARK_(ret));
}
} else {
return and__7589__auto__;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__23526)){
var or__7601__auto__ = (p1 === p2);
if(or__7601__auto__){
return or__7601__auto__;
} else {
return (cljs.spec.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.accept_nil_QMARK_.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.accept_nil_QMARK_.call(null,p1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__23526)){
return cljs.core.every_QMARK_(cljs.spec.accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__23526)){
return cljs.core.some(cljs.spec.accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__23545 = cljs.spec.reg_resolve_BANG_(p);
var map__23545__$1 = ((((!((map__23545 == null)))?((((map__23545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23545.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23545):map__23545);
var p__$1 = map__23545__$1;
var vec__23546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23545__$1,cljs.core.cst$kw$ps);
var seq__23547 = cljs.core.seq(vec__23546);
var first__23548 = cljs.core.first(seq__23547);
var seq__23547__$1 = cljs.core.next(seq__23547);
var p0 = first__23548;
var pr = seq__23547__$1;
var ps = vec__23546;
var vec__23549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23545__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23549,(0),null);
var ks = vec__23549;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23545__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23545__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23545__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23545__$1,cljs.core.cst$kw$forms);
var G__23553 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__23553)){
return ret;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__23553)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__23553)){
var pret = (cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(cljs.spec.noret_QMARK_(p1,pret))){
return cljs.core.cst$kw$cljs$spec_SLASH_nil;
} else {
return cljs.spec.and_preds(pret,ps,forms);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__23553)){
return (cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3(p1,ret,k) : cljs.spec.add_ret.call(null,p1,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__23553)){
return (cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.add_ret.cljs$core$IFn$_invoke$arity$3(p0,ret,k) : cljs.spec.add_ret.call(null,p0,ret,k));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__23553)){
var vec__23554 = cljs.spec.filter_alt(ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__23557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23554,(0),null);
var p0__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23557,(0),null);
var vec__23560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23554,(1),null);
var k0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23560,(0),null);
var r = (((p0__$1 == null))?cljs.core.cst$kw$cljs$spec_SLASH_nil:(cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.preturn.cljs$core$IFn$_invoke$arity$1(p0__$1) : cljs.spec.preturn.call(null,p0__$1)));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__23583 = cljs.spec.reg_resolve_BANG_(p);
var map__23583__$1 = ((((!((map__23583 == null)))?((((map__23583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23583):map__23583);
var p__$1 = map__23583__$1;
var vec__23584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23583__$1,cljs.core.cst$kw$ps);
var seq__23585 = cljs.core.seq(vec__23584);
var first__23586 = cljs.core.first(seq__23585);
var seq__23585__$1 = cljs.core.next(seq__23585);
var p0 = first__23586;
var pr = seq__23585__$1;
var ps = vec__23584;
var vec__23587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23583__$1,cljs.core.cst$kw$ks);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23587,(0),null);
var ks = vec__23587;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23583__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23583__$1,cljs.core.cst$kw$p1);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23583__$1,cljs.core.cst$kw$ret);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23583__$1,cljs.core.cst$kw$forms);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23583__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23583__$1,cljs.core.cst$kw$maybe);
var kps = cljs.core.zipmap(ks,ps);
var G__23591 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__23591)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__23591)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform(p__$1,x)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__23591)){
var px = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (G__23591,map__23583,map__23583__$1,p__$1,vec__23584,seq__23585,first__23586,seq__23585__$1,p0,pr,ps,vec__23587,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__23564_SHARP_,p2__23563_SHARP_){
return cljs.spec.unform(p2__23563_SHARP_,p1__23564_SHARP_);
});})(G__23591,map__23583,map__23583__$1,p__$1,vec__23584,seq__23585,first__23586,seq__23585__$1,p0,pr,ps,vec__23587,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse(ps));
return (cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2(p1,px) : cljs.spec.op_unform.call(null,p1,px));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__23591)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__23591,map__23583,map__23583__$1,p__$1,vec__23584,seq__23585,first__23586,seq__23585__$1,p0,pr,ps,vec__23587,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__23565_SHARP_){
return (cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2(p1,p1__23565_SHARP_) : cljs.spec.op_unform.call(null,p1,p1__23565_SHARP_));
});})(G__23591,map__23583,map__23583__$1,p__$1,vec__23584,seq__23585,first__23586,seq__23585__$1,p0,pr,ps,vec__23587,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([x], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__23591)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__23591,map__23583,map__23583__$1,p__$1,vec__23584,seq__23585,first__23586,seq__23585__$1,p0,pr,ps,vec__23587,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__23566_SHARP_){
return (cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2(p0,p1__23566_SHARP_) : cljs.spec.op_unform.call(null,p0,p1__23566_SHARP_));
});})(G__23591,map__23583,map__23583__$1,p__$1,vec__23584,seq__23585,first__23586,seq__23585__$1,p0,pr,ps,vec__23587,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([x], 0));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (G__23591,map__23583,map__23583__$1,p__$1,vec__23584,seq__23585,first__23586,seq__23585__$1,p0,pr,ps,vec__23587,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_(x,k__$1)){
var G__23592 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__23593 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,k__$1);
return (cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2(G__23592,G__23593) : cljs.spec.op_unform.call(null,G__23592,G__23593));
} else {
return null;
}
});})(G__23591,map__23583,map__23583__$1,p__$1,vec__23584,seq__23585,first__23586,seq__23585__$1,p0,pr,ps,vec__23587,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,cljs.core.array_seq([ks], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__23591)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform(p0,x)], null);
} else {
var vec__23594 = x;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23594,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23594,(1),null);
var G__23597 = (kps.cljs$core$IFn$_invoke$arity$1 ? kps.cljs$core$IFn$_invoke$arity$1(k__$1) : kps.call(null,k__$1));
var G__23598 = v;
return (cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.op_unform.cljs$core$IFn$_invoke$arity$2(G__23597,G__23598) : cljs.spec.op_unform.call(null,G__23597,G__23598));
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__23602 = cljs.spec.reg_resolve_BANG_(p);
var map__23602__$1 = ((((!((map__23602 == null)))?((((map__23602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23602):map__23602);
var p__$1 = map__23602__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23602__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23602__$1,cljs.core.cst$kw$ps);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23602__$1,cljs.core.cst$kw$splice);
var prop = ((function (map__23602,map__23602__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core.empty_QMARK_(ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
});})(map__23602,map__23602__$1,p__$1,op,ps,splice))
;
var G__23604 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__23604)){
return r;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__23604)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__23604)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__23604)){
var ret = cljs.spec.preturn(p__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return r;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ret]):ret));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__23604)){
return prop();
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__23604)){
return prop();
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__23619 = cljs.spec.reg_resolve_BANG_(p);
var map__23619__$1 = ((((!((map__23619 == null)))?((((map__23619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23619):map__23619);
var p__$1 = map__23619__$1;
var vec__23620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23619__$1,cljs.core.cst$kw$ps);
var seq__23621 = cljs.core.seq(vec__23620);
var first__23622 = cljs.core.first(seq__23621);
var seq__23621__$1 = cljs.core.next(seq__23621);
var p0 = first__23622;
var pr = seq__23621__$1;
var ps = vec__23620;
var vec__23623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23619__$1,cljs.core.cst$kw$ks);
var seq__23624 = cljs.core.seq(vec__23623);
var first__23625 = cljs.core.first(seq__23624);
var seq__23624__$1 = cljs.core.next(seq__23624);
var k0 = first__23625;
var kr = seq__23624__$1;
var ks = vec__23623;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23619__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23619__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23619__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23619__$1,cljs.core.cst$kw$ret);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23619__$1,cljs.core.cst$kw$splice);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23619__$1,cljs.core.cst$kw$forms);
if(cljs.core.truth_(p__$1)){
var G__23627 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__23627)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__23627)){
var ret__$1 = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(p__$1,x,p__$1);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret__$1))){
return null;
} else {
return cljs.spec.accept(ret__$1);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__23627)){
var temp__6738__auto__ = (cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.deriv.call(null,p1,x));
if(cljs.core.truth_(temp__6738__auto__)){
var p1__$1 = temp__6738__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds(cljs.spec.preturn(p1__$1),ps,cljs.core.next(forms));
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret__$1))){
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
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__23627)){
return cljs.spec.alt2(cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,cljs.core.cons((cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2(p0,x) : cljs.spec.deriv.call(null,p0,x)),pr),cljs.core.cst$kw$ks,ks,cljs.core.cst$kw$forms,forms,cljs.core.cst$kw$ret,ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p0))?(function (){var G__23628 = cljs.spec.pcat_STAR_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$ps,pr,cljs.core.cst$kw$ks,kr,cljs.core.cst$kw$forms,cljs.core.next(forms),cljs.core.cst$kw$ret,cljs.spec.add_ret(p0,ret,k0)], null));
var G__23629 = x;
return (cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2(G__23628,G__23629) : cljs.spec.deriv.call(null,G__23628,G__23629));
})():null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__23627)){
return cljs.spec.alt_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__23627,map__23619,map__23619__$1,p__$1,vec__23620,seq__23621,first__23622,seq__23621__$1,p0,pr,ps,vec__23623,seq__23624,first__23625,seq__23624__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__23605_SHARP_){
return (cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2(p1__23605_SHARP_,x) : cljs.spec.deriv.call(null,p1__23605_SHARP_,x));
});})(G__23627,map__23619,map__23619__$1,p__$1,vec__23620,seq__23621,first__23622,seq__23621__$1,p0,pr,ps,vec__23623,seq__23624,first__23625,seq__23624__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__23627)){
return cljs.spec.alt2(cljs.spec.rep_STAR_((cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2(p1,x) : cljs.spec.deriv.call(null,p1,x)),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p1))?(function (){var G__23630 = cljs.spec.rep_STAR_(p2,p2,cljs.spec.add_ret(p1,ret,null),splice,forms);
var G__23631 = x;
return (cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.deriv.cljs$core$IFn$_invoke$arity$2(G__23630,G__23631) : cljs.spec.deriv.call(null,G__23630,G__23631));
})():null));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

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
var map__23635 = cljs.spec.reg_resolve_BANG_(p);
var map__23635__$1 = ((((!((map__23635 == null)))?((((map__23635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23635):map__23635);
var p__$1 = map__23635__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23635__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23635__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23635__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23635__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23635__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23635__$1,cljs.core.cst$kw$p1);
var rep_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23635__$1,cljs.core.cst$kw$rep_PLUS_);
var maybe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23635__$1,cljs.core.cst$kw$maybe);
if(cljs.core.truth_(p__$1)){
var G__23637 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__23637)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__23637)){
return p__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__23637)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$sym$clojure$spec_SLASH__AMPERSAND_,(cljs.spec.op_describe.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.op_describe.cljs$core$IFn$_invoke$arity$1(p1) : cljs.spec.op_describe.call(null,p1)),forms);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__23637)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj((function (){var x__8535__auto__ = rep_PLUS_;
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})(),cljs.core.cst$sym$cljs$spec_SLASH__PLUS_);
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec_SLASH_cat,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([(function (){var or__7601__auto__ = cljs.core.seq(ks);
if(or__7601__auto__){
return or__7601__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$_);
}
})(),forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__23637)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj((function (){var x__8535__auto__ = maybe;
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})(),cljs.core.cst$sym$cljs$spec_SLASH__QMARK_);
} else {
return cljs.core.cons(cljs.core.cst$sym$cljs$spec_SLASH_alt,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([ks,forms], 0)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__23637)){
var x__8535__auto__ = (cljs.core.truth_(splice)?cljs.core.cst$sym$cljs$spec_SLASH__PLUS_:cljs.core.cst$sym$cljs$spec_SLASH__STAR_);
return cljs.core._conj((function (){var x__8535__auto____$1 = forms;
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto____$1);
})(),x__8535__auto__);
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

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
var vec__23669 = input;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23669,(0),null);
var input__$1 = vec__23669;
var map__23672 = cljs.spec.reg_resolve_BANG_(p);
var map__23672__$1 = ((((!((map__23672 == null)))?((((map__23672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23672.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23672):map__23672);
var p__$1 = map__23672__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23672__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23672__$1,cljs.core.cst$kw$ps);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23672__$1,cljs.core.cst$kw$ks);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23672__$1,cljs.core.cst$kw$forms);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23672__$1,cljs.core.cst$kw$splice);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23672__$1,cljs.core.cst$kw$p1);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23672__$1,cljs.core.cst$kw$p2);
var via__$1 = (function (){var temp__6736__auto__ = cljs.spec.spec_name(p__$1);
if(cljs.core.truth_(temp__6736__auto__)){
var name = temp__6736__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__23669,x,input__$1,map__23672,map__23672__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path__$1,cljs.core.cst$kw$reason,"Insufficient input",cljs.core.cst$kw$pred,cljs.spec.abbrev(form__$1),cljs.core.cst$kw$val,cljs.core.List.EMPTY,cljs.core.cst$kw$via,via__$1,cljs.core.cst$kw$in,in$], null)], null);
});})(vec__23669,x,input__$1,map__23672,map__23672__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__23674 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__23674)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__23674)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,form);
} else {
return cljs.spec.explain_1(form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__23674)){
if(cljs.core.empty_QMARK_(input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p1))){
return cljs.spec.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.preturn(p1));
} else {
return insufficient(path,cljs.spec.op_describe(p1));
}
} else {
var temp__6736__auto__ = cljs.spec.deriv(p1,x);
if(cljs.core.truth_(temp__6736__auto__)){
var p1__$1 = temp__6736__auto__;
return cljs.spec.explain_pred_list(forms,ps,path,via__$1,in$,cljs.spec.preturn(p1__$1));
} else {
var G__23675 = cljs.spec.op_describe(p1);
var G__23676 = p1;
var G__23677 = path;
var G__23678 = via__$1;
var G__23679 = in$;
var G__23680 = input__$1;
return (cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6(G__23675,G__23676,G__23677,G__23678,G__23679,G__23680) : cljs.spec.op_explain.call(null,G__23675,G__23676,G__23677,G__23678,G__23679,G__23680));
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__23674)){
var pkfs = cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,ps,(function (){var or__7601__auto__ = cljs.core.seq(ks);
if(or__7601__auto__){
return or__7601__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__7601__auto__ = cljs.core.seq(forms);
if(or__7601__auto__){
return or__7601__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
var vec__23681 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pkfs)))?cljs.core.first(pkfs):cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (pkfs,G__23674,vec__23669,x,input__$1,map__23672,map__23672__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__23684){
var vec__23685 = p__23684;
var p__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23685,(0),null);
return cljs.spec.accept_nil_QMARK_(p__$2);
});})(pkfs,G__23674,vec__23669,x,input__$1,map__23672,map__23672__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23681,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23681,(1),null);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23681,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var form__$2 = (function (){var or__7601__auto__ = form__$1;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.spec.op_describe(pred);
}
})();
if((cljs.core.empty_QMARK_(input__$1)) && (cljs.core.not(pred))){
return insufficient(path__$1,form__$2);
} else {
return (cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6(form__$2,pred,path__$1,via__$1,in$,input__$1) : cljs.spec.op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__23674)){
if(cljs.core.empty_QMARK_(input__$1)){
return insufficient(path,cljs.spec.op_describe(p__$1));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$4(((function (G__23674,vec__23669,x,input__$1,map__23672,map__23672__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
var G__23688 = (function (){var or__7601__auto__ = form__$1;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.spec.op_describe(pred);
}
})();
var G__23689 = pred;
var G__23690 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__23691 = via__$1;
var G__23692 = in$;
var G__23693 = input__$1;
return (cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6(G__23688,G__23689,G__23690,G__23691,G__23692,G__23693) : cljs.spec.op_explain.call(null,G__23688,G__23689,G__23690,G__23691,G__23692,G__23693));
});})(G__23674,vec__23669,x,input__$1,map__23672,map__23672__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__7601__auto__ = cljs.core.seq(ks);
if(or__7601__auto__){
return or__7601__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__7601__auto__ = cljs.core.seq(forms);
if(or__7601__auto__){
return or__7601__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__23674)){
var G__23694 = (((p1 === p2))?forms:cljs.spec.op_describe(p1));
var G__23695 = p1;
var G__23696 = path;
var G__23697 = via__$1;
var G__23698 = in$;
var G__23699 = input__$1;
return (cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6 ? cljs.spec.op_explain.cljs$core$IFn$_invoke$arity$6(G__23694,G__23695,G__23696,G__23697,G__23698,G__23699) : cljs.spec.op_explain.call(null,G__23694,G__23695,G__23696,G__23697,G__23698,G__23699));
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

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
var map__23721 = cljs.spec.reg_resolve_BANG_(p);
var map__23721__$1 = ((((!((map__23721 == null)))?((((map__23721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23721.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23721):map__23721);
var p__$1 = map__23721__$1;
var ps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23721__$1,cljs.core.cst$kw$ps);
var forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23721__$1,cljs.core.cst$kw$forms);
var p2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23721__$1,cljs.core.cst$kw$p2);
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23721__$1,cljs.core.cst$kw$ret);
var splice = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23721__$1,cljs.core.cst$kw$splice);
var ks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23721__$1,cljs.core.cst$kw$ks);
var p1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23721__$1,cljs.core.cst$kw$p1);
var gfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23721__$1,cljs.core.cst$kw$cljs$spec_SLASH_gfn);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23721__$1,cljs.core.cst$kw$id);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23721__$1,cljs.core.cst$kw$cljs$spec_SLASH_op);
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck(rmap,id):rmap);
var ggens = ((function (map__23721,map__23721__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__23721,map__23721__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__7589__auto__ = rmap__$1;
if(cljs.core.truth_(and__7589__auto__)){
var and__7589__auto____$1 = id;
if(cljs.core.truth_(and__7589__auto____$1)){
var and__7589__auto____$2 = k;
if(cljs.core.truth_(and__7589__auto____$2)){
return cljs.spec.recur_limit_QMARK_(rmap__$1,id,path,k);
} else {
return and__7589__auto____$2;
}
} else {
return and__7589__auto____$1;
}
} else {
return and__7589__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (map__23721,map__23721__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (){
var G__23723 = p__$2;
var G__23724 = overrides;
var G__23725 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__23726 = rmap__$1;
var G__23727 = (function (){var or__7601__auto__ = f__$1;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5(G__23723,G__23724,G__23725,G__23726,G__23727) : cljs.spec.re_gen.call(null,G__23723,G__23724,G__23725,G__23726,G__23727));
});})(map__23721,map__23721__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
,null)));
} else {
var G__23728 = p__$2;
var G__23729 = overrides;
var G__23730 = (cljs.core.truth_(k)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k):path);
var G__23731 = rmap__$1;
var G__23732 = (function (){var or__7601__auto__ = f__$1;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return p__$2;
}
})();
return (cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5(G__23728,G__23729,G__23730,G__23731,G__23732) : cljs.spec.re_gen.call(null,G__23728,G__23729,G__23730,G__23731,G__23732));
}
}
});})(map__23721,map__23721__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$4(gen,ps__$1,(function (){var or__7601__auto__ = cljs.core.seq(ks__$1);
if(or__7601__auto__){
return or__7601__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})(),(function (){var or__7601__auto__ = cljs.core.seq(forms__$1);
if(or__7601__auto__){
return or__7601__auto__;
} else {
return cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null);
}
})());
});})(map__23721,map__23721__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
var or__7601__auto__ = (function (){var temp__6738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(overrides,path);
if(cljs.core.truth_(temp__6738__auto__)){
var g = temp__6738__auto__;
var G__23734 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$accept,G__23734)){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__23734)){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = (cljs.core.truth_(gfn)?(gfn.cljs$core$IFn$_invoke$arity$0 ? gfn.cljs$core$IFn$_invoke$arity$0() : gfn.call(null)):null);
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__23735 = op;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_accept,G__23735)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$cljs$spec_SLASH_nil)){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0));
} else {
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null)], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__23735)){
var temp__6738__auto__ = cljs.spec.gensub(p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__6738__auto__)){
var g = temp__6738__auto__;
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.vector,g], 0));
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_amp,G__23735)){
var G__23736 = p1;
var G__23737 = overrides;
var G__23738 = path;
var G__23739 = rmap__$1;
var G__23740 = cljs.spec.op_describe(p1);
return (cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5(G__23736,G__23737,G__23738,G__23739,G__23740) : cljs.spec.re_gen.call(null,G__23736,G__23737,G__23738,G__23739,G__23740));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_pcat,G__23735)){
var gens = ggens(ps,ks,forms);
if(cljs.core.every_QMARK_(cljs.core.identity,gens)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_alt,G__23735)){
var gens = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,ggens(ps,ks,forms));
if(cljs.core.empty_QMARK_(gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gens], 0));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_rep,G__23735)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_(rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentVector.EMPTY], 0));
} else {
var temp__6738__auto__ = (cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5 ? cljs.spec.re_gen.cljs$core$IFn$_invoke$arity$5(p2,overrides,path,rmap__$1,forms) : cljs.spec.re_gen.call(null,p2,overrides,path,rmap__$1,forms));
if(cljs.core.truth_(temp__6738__auto__)){
var g = temp__6738__auto__;
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (g,temp__6738__auto__,G__23735,or__7601__auto____$1,or__7601__auto__,map__23721,map__23721__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens){
return (function (p1__23700_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,p1__23700_SHARP_);
});})(g,temp__6738__auto__,G__23735,or__7601__auto____$1,or__7601__auto__,map__23721,map__23721__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([g], 0))], 0));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(op)].join('')));

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
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__23741){
while(true){
var vec__23745 = p__23741;
var seq__23746 = cljs.core.seq(vec__23745);
var first__23747 = cljs.core.first(seq__23746);
var seq__23746__$1 = cljs.core.next(seq__23746);
var x = first__23747;
var xs = seq__23746__$1;
var data = vec__23745;
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
var temp__6736__auto__ = cljs.spec.deriv(p,x);
if(cljs.core.truth_(temp__6736__auto__)){
var dp = temp__6736__auto__;
var G__23748 = dp;
var G__23749 = xs;
p = G__23748;
p__23741 = G__23749;
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
var G__23763 = input;
var vec__23764 = G__23763;
var seq__23765 = cljs.core.seq(vec__23764);
var first__23766 = cljs.core.first(seq__23765);
var seq__23765__$1 = cljs.core.next(seq__23765);
var x = first__23766;
var xs = seq__23765__$1;
var data = vec__23764;
var i = (0);
var p__$1 = p;
var G__23763__$1 = G__23763;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__23767 = G__23763__$1;
var seq__23768 = cljs.core.seq(vec__23767);
var first__23769 = cljs.core.first(seq__23768);
var seq__23768__$1 = cljs.core.next(seq__23768);
var x__$1 = first__23769;
var xs__$1 = seq__23768__$1;
var data__$1 = vec__23767;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_(data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_(p__$2))){
return null;
} else {
return cljs.spec.op_explain(cljs.spec.op_describe(p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__6736__auto__ = cljs.spec.deriv(p__$2,x__$1);
if(cljs.core.truth_(temp__6736__auto__)){
var dp = temp__6736__auto__;
var G__23770 = dp;
var G__23771 = xs__$1;
var G__23772 = (i__$2 + (1));
p__$1 = G__23770;
G__23763__$1 = G__23771;
i__$1 = G__23772;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_(p__$2))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_op.cljs$core$IFn$_invoke$arity$1(p__$2),cljs.core.cst$kw$cljs$spec_SLASH_pcat)){
return cljs.spec.op_explain(cljs.spec.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$reason,"Extra input",cljs.core.cst$kw$pred,cljs.spec.abbrev(cljs.spec.op_describe(re)),cljs.core.cst$kw$val,data__$1,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2)], null)], null);
}
} else {
var or__7601__auto__ = cljs.spec.op_explain(cljs.spec.op_describe(p__$2),p__$2,path,via,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(in$,i__$2),cljs.core.seq(data__$1));
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
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
if(typeof cljs.spec.t_cljs$spec23776 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23776 = (function (re,gfn,meta23777){
this.re = re;
this.gfn = gfn;
this.meta23777 = meta23777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23778,meta23777__$1){
var self__ = this;
var _23778__$1 = this;
return (new cljs.spec.t_cljs$spec23776(self__.re,self__.gfn,meta23777__$1));
});

cljs.spec.t_cljs$spec23776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23778){
var self__ = this;
var _23778__$1 = this;
return self__.meta23777;
});

cljs.spec.t_cljs$spec23776.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23776.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec23776.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});

cljs.spec.t_cljs$spec23776.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23776.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.re_conform(self__.re,cljs.core.seq(x));
} else {
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
}
});

cljs.spec.t_cljs$spec23776.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform(self__.re,x);
});

cljs.spec.t_cljs$spec23776.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_(x))){
return cljs.spec.re_explain(path,via,in$,self__.re,cljs.core.seq(x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.spec.abbrev(cljs.spec.op_describe(self__.re)),cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
}
});

cljs.spec.t_cljs$spec23776.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.re_gen(self__.re,overrides,path,rmap,cljs.spec.op_describe(self__.re));
}
});

cljs.spec.t_cljs$spec23776.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.regex_spec_impl.cljs$core$IFn$_invoke$arity$2(self__.re,gfn__$1) : cljs.spec.regex_spec_impl.call(null,self__.re,gfn__$1));
});

cljs.spec.t_cljs$spec23776.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe(self__.re);
});

cljs.spec.t_cljs$spec23776.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$re,cljs.core.cst$sym$gfn,cljs.core.cst$sym$meta23777], null);
});

cljs.spec.t_cljs$spec23776.cljs$lang$type = true;

cljs.spec.t_cljs$spec23776.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23776";

cljs.spec.t_cljs$spec23776.cljs$lang$ctorPrWriter = (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.spec/t_cljs$spec23776");
});

cljs.spec.__GT_t_cljs$spec23776 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec23776(re__$1,gfn__$1,meta23777){
return (new cljs.spec.t_cljs$spec23776(re__$1,gfn__$1,meta23777));
});

}

return (new cljs.spec.t_cljs$spec23776(re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(cargs))){
return null;
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cret = cljs.spec.conform(cljs.core.cst$kw$ret.cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__7589__auto__ = cljs.core.not(cljs.spec.invalid_QMARK_(cret));
if(and__7589__auto__){
if(cljs.core.truth_(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,cargs,cljs.core.cst$kw$ret,cret], null));
} else {
return true;
}
} else {
return and__7589__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__23779_SHARP_){
return cljs.spec.call_valid_QMARK_(f,specs,p1__23779_SHARP_);
});})(g))
], 0));
var ret = cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([iters,prop], 0));
var temp__6736__auto__ = cljs.core.cst$kw$smallest.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$shrunk.cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__6736__auto__)){
var vec__23783 = temp__6736__auto__;
var smallest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23783,(0),null);
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
if(typeof cljs.spec.t_cljs$spec23792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec23792 = (function (argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta23793){
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta23793 = meta23793;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_23794,meta23793__$1){
var self__ = this;
var _23794__$1 = this;
return (new cljs.spec.t_cljs$spec23792(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta23793__$1));
});})(specs))
;

cljs.spec.t_cljs$spec23792.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_23794){
var self__ = this;
var _23794__$1 = this;
return self__.meta23793;
});})(specs))
;

cljs.spec.t_cljs$spec23792.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec23792.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec23792.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23792.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (specs){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.t_cljs$spec23792.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (specs){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(specs))
;

cljs.spec.t_cljs$spec23792.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23792.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
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

cljs.spec.t_cljs$spec23792.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec23792.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_(f)){
var args = cljs.spec.validate_fn(f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e23795){if((e23795 instanceof Error)){
var t = e23795;
return t;
} else {
throw e23795;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$pred,cljs.core.list(cljs.core.cst$sym$apply,cljs.core.cst$sym$fn),cljs.core.cst$kw$val,args,cljs.core.cst$kw$reason,ret.message,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null)], null);
} else {
var cret = cljs.spec.dt.cljs$core$IFn$_invoke$arity$3(self__.retspec,ret,self__.rform);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(cret))){
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

cljs.spec.t_cljs$spec23792.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((function (___$3,specs){
return (function() { 
var G__23798__delegate = function (args){
if(cljs.core.truth_(cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.argspec,args))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8693__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23796_23799 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23797_23800 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_23796_23799,_STAR_print_fn_STAR_23797_23800,sb__8693__auto__,___$3,specs){
return (function (x__8694__auto__){
return sb__8693__auto__.append(x__8694__auto__);
});})(_STAR_print_newline_STAR_23796_23799,_STAR_print_fn_STAR_23797_23800,sb__8693__auto__,___$3,specs))
;

try{cljs.spec.explain(self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23797_23800;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23796_23799;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8693__auto__)].join('');
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(pvalid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate(cljs.spec.gen.cljs$core$IFn$_invoke$arity$2(self__.retspec,overrides));
};
var G__23798 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23801__i = 0, G__23801__a = new Array(arguments.length -  0);
while (G__23801__i < G__23801__a.length) {G__23801__a[G__23801__i] = arguments[G__23801__i + 0]; ++G__23801__i;}
  args = new cljs.core.IndexedSeq(G__23801__a,0);
} 
return G__23798__delegate.call(this,args);};
G__23798.cljs$lang$maxFixedArity = 0;
G__23798.cljs$lang$applyTo = (function (arglist__23802){
var args = cljs.core.seq(arglist__23802);
return G__23798__delegate(args);
});
G__23798.cljs$core$IFn$_invoke$arity$variadic = G__23798__delegate;
return G__23798;
})()
;})(___$3,specs))
], 0));
}
});})(specs))
;

cljs.spec.t_cljs$spec23792.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.fspec_impl.cljs$core$IFn$_invoke$arity$7 ? cljs.spec.fspec_impl.cljs$core$IFn$_invoke$arity$7(self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1) : cljs.spec.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1));
});})(specs))
;

cljs.spec.t_cljs$spec23792.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_fspec),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$args),cljs.core.array_seq([(function (){var x__8535__auto__ = self__.aform;
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$ret),(function (){var x__8535__auto__ = self__.rform;
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})(),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$kw$fn),(function (){var x__8535__auto__ = self__.fform;
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})()], 0))));
});})(specs))
;

cljs.spec.t_cljs$spec23792.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$argspec,cljs.core.cst$sym$aform,cljs.core.cst$sym$retspec,cljs.core.cst$sym$rform,cljs.core.cst$sym$fnspec,cljs.core.cst$sym$fform,cljs.core.cst$sym$gfn,cljs.core.cst$sym$specs,cljs.core.cst$sym$meta23793], null);
});})(specs))
;

cljs.spec.t_cljs$spec23792.cljs$lang$type = true;

cljs.spec.t_cljs$spec23792.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23792";

cljs.spec.t_cljs$spec23792.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.spec/t_cljs$spec23792");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec23792 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec23792(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta23793){
return (new cljs.spec.t_cljs$spec23792(argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta23793));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec23792(argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl(cljs.core.cst$kw$cljs$spec_SLASH_kvs_DASH__GT_map,cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__23803_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec_SLASH_k,cljs.core.cst$sym$p1__23803_SHARP_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec_SLASH_v,cljs.core.cst$sym$p1__23803_SHARP_))),cljs.core.list(cljs.core.cst$sym$fn_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p1__23804_SHARP_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$p1__23804_SHARP_))),cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5(cljs.core.list(cljs.core.cst$sym$cljs$spec_SLASH_conformer,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_zipmap,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec_SLASH_k,cljs.core.cst$sym$_PERCENT_),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.cst$kw$cljs$spec_SLASH_v,cljs.core.cst$sym$_PERCENT_))),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_PERCENT_], null),cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_map,cljs.core.list(cljs.core.cst$sym$cljs$core_SLASH_fn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$k,cljs.core.cst$sym$v], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_k,cljs.core.cst$sym$k,cljs.core.cst$kw$cljs$spec_SLASH_v,cljs.core.cst$sym$v], null)),cljs.core.cst$sym$_PERCENT_))),(function (p1__23803_SHARP_){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_k,p1__23803_SHARP_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$spec_SLASH_v,p1__23803_SHARP_));
}),null,true,(function (p1__23804_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__23805){
var vec__23806 = p__23805;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23806,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23806,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$cljs$spec_SLASH_k,k,cljs.core.cst$kw$cljs$spec_SLASH_v,v], null);
}),p1__23804_SHARP_);
})));
/**
 * takes a spec and returns a spec that has the same properties except
 *   'conform' returns the original (not the conformed) value. Note, will specize regex ops.
 */
cljs.spec.nonconforming = (function cljs$spec$nonconforming(spec){
var spec__$1 = cljs.spec.specize.cljs$core$IFn$_invoke$arity$1(spec);
if(typeof cljs.spec.t_cljs$spec23813 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23813 = (function (spec,meta23814){
this.spec = spec;
this.meta23814 = meta23814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec__$1){
return (function (_23815,meta23814__$1){
var self__ = this;
var _23815__$1 = this;
return (new cljs.spec.t_cljs$spec23813(self__.spec,meta23814__$1));
});})(spec__$1))
;

cljs.spec.t_cljs$spec23813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec__$1){
return (function (_23815){
var self__ = this;
var _23815__$1 = this;
return self__.meta23814;
});})(spec__$1))
;

cljs.spec.t_cljs$spec23813.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23813.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (spec__$1){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.t_cljs$spec23813.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (spec__$1){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec__$1))
;

cljs.spec.t_cljs$spec23813.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23813.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var ret = cljs.spec.conform_STAR_(self__.spec,x);
if(cljs.core.truth_(cljs.spec.invalid_QMARK_(ret))){
return cljs.core.cst$kw$cljs$spec_SLASH_invalid;
} else {
return x;
}
});})(spec__$1))
;

cljs.spec.t_cljs$spec23813.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (spec__$1){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.unform_STAR_(self__.spec,x);
});})(spec__$1))
;

cljs.spec.t_cljs$spec23813.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (spec__$1){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_STAR_(self__.spec,path,via,in$,x);
});})(spec__$1))
;

cljs.spec.t_cljs$spec23813.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (spec__$1){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
return cljs.spec.gen_STAR_(self__.spec,overrides,path,rmap);
});})(spec__$1))
;

cljs.spec.t_cljs$spec23813.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (spec__$1){
return (function (_,gfn){
var self__ = this;
var ___$1 = this;
var G__23816 = cljs.spec.with_gen_STAR_(self__.spec,gfn);
return (cljs.spec.nonconforming.cljs$core$IFn$_invoke$arity$1 ? cljs.spec.nonconforming.cljs$core$IFn$_invoke$arity$1(G__23816) : cljs.spec.nonconforming.call(null,G__23816));
});})(spec__$1))
;

cljs.spec.t_cljs$spec23813.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (spec__$1){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_nonconforming),(function (){var x__8535__auto__ = cljs.spec.describe_STAR_(self__.spec);
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})())));
});})(spec__$1))
;

cljs.spec.t_cljs$spec23813.getBasis = ((function (spec__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$spec,cljs.core.cst$sym$meta23814], null);
});})(spec__$1))
;

cljs.spec.t_cljs$spec23813.cljs$lang$type = true;

cljs.spec.t_cljs$spec23813.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23813";

cljs.spec.t_cljs$spec23813.cljs$lang$ctorPrWriter = ((function (spec__$1){
return (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.spec/t_cljs$spec23813");
});})(spec__$1))
;

cljs.spec.__GT_t_cljs$spec23813 = ((function (spec__$1){
return (function cljs$spec$nonconforming_$___GT_t_cljs$spec23813(spec__$2,meta23814){
return (new cljs.spec.t_cljs$spec23813(spec__$2,meta23814));
});})(spec__$1))
;

}

return (new cljs.spec.t_cljs$spec23813(spec__$1,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'nilable'
 */
cljs.spec.nilable_impl = (function cljs$spec$nilable_impl(form,pred,gfn){
var spec = cljs.spec.specize.cljs$core$IFn$_invoke$arity$2(pred,form);
if(typeof cljs.spec.t_cljs$spec23820 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.spec.Specize}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec23820 = (function (form,pred,gfn,spec,meta23821){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.spec = spec;
this.meta23821 = meta23821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec23820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (spec){
return (function (_23822,meta23821__$1){
var self__ = this;
var _23822__$1 = this;
return (new cljs.spec.t_cljs$spec23820(self__.form,self__.pred,self__.gfn,self__.spec,meta23821__$1));
});})(spec))
;

cljs.spec.t_cljs$spec23820.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (spec){
return (function (_23822){
var self__ = this;
var _23822__$1 = this;
return self__.meta23821;
});})(spec))
;

cljs.spec.t_cljs$spec23820.prototype.cljs$spec$Specize$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23820.prototype.cljs$spec$Specize$specize_STAR_$arity$1 = ((function (spec){
return (function (s){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.t_cljs$spec23820.prototype.cljs$spec$Specize$specize_STAR_$arity$2 = ((function (spec){
return (function (s,_){
var self__ = this;
var s__$1 = this;
return s__$1;
});})(spec))
;

cljs.spec.t_cljs$spec23820.prototype.cljs$spec$Spec$ = cljs.core.PROTOCOL_SENTINEL;

cljs.spec.t_cljs$spec23820.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.conform_STAR_(self__.spec,x);
}
});})(spec))
;

cljs.spec.t_cljs$spec23820.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (spec){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if((x == null)){
return null;
} else {
return cljs.spec.unform_STAR_(self__.spec,x);
}
});})(spec))
;

cljs.spec.t_cljs$spec23820.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (spec){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var or__7601__auto__ = cljs.spec.pvalid_QMARK_.cljs$core$IFn$_invoke$arity$2(self__.spec,x);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return (x == null);
}
})())){
return null;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.spec.explain_1(self__.form,self__.pred,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec_SLASH_pred),via,in$,x),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec_SLASH_nil),cljs.core.cst$kw$pred,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$kw$val,x,cljs.core.cst$kw$via,via,cljs.core.cst$kw$in,in$], null));
}
});})(spec))
;

cljs.spec.t_cljs$spec23820.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (spec){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return (self__.gfn.cljs$core$IFn$_invoke$arity$0 ? self__.gfn.cljs$core$IFn$_invoke$arity$0() : self__.gfn.call(null));
} else {
return cljs.spec.impl.gen.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0));
});})(___$1,spec))
,null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),cljs.spec.impl.gen.delay_impl((new cljs.core.Delay(((function (___$1,spec){
return (function (){
return cljs.spec.gensub(self__.pred,overrides,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,cljs.core.cst$kw$cljs$spec_SLASH_pred),rmap,self__.form);
});})(___$1,spec))
,null)))], null)], null)], 0));
}
});})(spec))
;

cljs.spec.t_cljs$spec23820.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (spec){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return (cljs.spec.nilable_impl.cljs$core$IFn$_invoke$arity$3 ? cljs.spec.nilable_impl.cljs$core$IFn$_invoke$arity$3(self__.form,self__.pred,gfn__$1) : cljs.spec.nilable_impl.call(null,self__.form,self__.pred,gfn__$1));
});})(spec))
;

cljs.spec.t_cljs$spec23820.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (spec){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$spec_SLASH_nilable),(function (){var x__8535__auto__ = self__.form;
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})())));
});})(spec))
;

cljs.spec.t_cljs$spec23820.getBasis = ((function (spec){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$form,cljs.core.cst$sym$pred,cljs.core.cst$sym$gfn,cljs.core.cst$sym$spec,cljs.core.cst$sym$meta23821], null);
});})(spec))
;

cljs.spec.t_cljs$spec23820.cljs$lang$type = true;

cljs.spec.t_cljs$spec23820.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec23820";

cljs.spec.t_cljs$spec23820.cljs$lang$ctorPrWriter = ((function (spec){
return (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.spec/t_cljs$spec23820");
});})(spec))
;

cljs.spec.__GT_t_cljs$spec23820 = ((function (spec){
return (function cljs$spec$nilable_impl_$___GT_t_cljs$spec23820(form__$1,pred__$1,gfn__$1,spec__$1,meta23821){
return (new cljs.spec.t_cljs$spec23820(form__$1,pred__$1,gfn__$1,spec__$1,meta23821));
});})(spec))
;

}

return (new cljs.spec.t_cljs$spec23820(form,pred,gfn,spec,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args23824 = [];
var len__8822__auto___23827 = arguments.length;
var i__8823__auto___23828 = (0);
while(true){
if((i__8823__auto___23828 < len__8822__auto___23827)){
args23824.push((arguments[i__8823__auto___23828]));

var G__23829 = (i__8823__auto___23828 + (1));
i__8823__auto___23828 = G__23829;
continue;
} else {
}
break;
}

var G__23826 = args23824.length;
switch (G__23826) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args23824.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2(spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3(spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23823_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__23823_SHARP_,cljs.spec.conform(spec,p1__23823_SHARP_)],null));
}),cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.spec.gen.cljs$core$IFn$_invoke$arity$2(spec,overrides),n], 0)));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__7589__auto__ = cljs.core.inst_QMARK_(inst);
if(and__7589__auto__){
var t = cljs.core.inst_ms(inst);
return ((cljs.core.inst_ms(start) <= t)) && ((t < cljs.core.inst_ms(end)));
} else {
return and__7589__auto__;
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
var and__7589__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__7589__auto__)){
return val.lessThan(end);
} else {
return and__7589__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__7589__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__7589__auto__)){
return val.lessThan(end);
} else {
return and__7589__auto__;
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Spec assertion failed\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var sb__8693__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_23833_23835 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_23834_23836 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_23833_23835,_STAR_print_fn_STAR_23834_23836,sb__8693__auto__,ed){
return (function (x__8694__auto__){
return sb__8693__auto__.append(x__8694__auto__);
});})(_STAR_print_newline_STAR_23833_23835,_STAR_print_fn_STAR_23834_23836,sb__8693__auto__,ed))
;

try{cljs.spec.explain_out(ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_23834_23836;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_23833_23835;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8693__auto__)].join('');
})())].join('')));
}
});
