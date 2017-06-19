// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('taoensso.encore');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.reader');
goog.require('cljs.tools.reader.edn');
goog.require('cljs.test');
goog.require('goog.object');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.string.StringBuffer');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIoPool');
goog.require('goog.Uri.QueryData');
goog.require('goog.structs');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('taoensso.truss');
taoensso.encore.encore_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(88),(2)], null);
/**
 * Given a symbol and args, returns [<name-with-attrs-meta> <args>] with
 *   support for `defn` style `?docstring` and `?attrs-map`.
 */
taoensso.encore.name_with_attrs = (function taoensso$encore$name_with_attrs(var_args){
var args48814 = [];
var len__8822__auto___48823 = arguments.length;
var i__8823__auto___48824 = (0);
while(true){
if((i__8823__auto___48824 < len__8822__auto___48823)){
args48814.push((arguments[i__8823__auto___48824]));

var G__48825 = (i__8823__auto___48824 + (1));
i__8823__auto___48824 = G__48825;
continue;
} else {
}
break;
}

var G__48816 = args48814.length;
switch (G__48816) {
case 2:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48814.length)].join('')));

}
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$2 = (function (sym,args){
return taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3(sym,args,null);
});

taoensso.encore.name_with_attrs.cljs$core$IFn$_invoke$arity$3 = (function (sym,args,attrs_merge){
var vec__48817 = (((typeof cljs.core.first(args) === 'string') && (cljs.core.next(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null));
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48817,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48817,(1),null);
var vec__48820 = (((cljs.core.map_QMARK_(cljs.core.first(args__$1))) && (cljs.core.next(args__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$1),cljs.core.next(args__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args__$1], null));
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48820,(0),null);
var args__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48820,(1),null);
var attrs__$1 = (cljs.core.truth_(_QMARK_docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs,cljs.core.cst$kw$doc,_QMARK_docstring):attrs);
var attrs__$2 = (cljs.core.truth_(cljs.core.meta(sym))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(sym),attrs__$1):attrs__$1);
var attrs__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs__$2,attrs_merge);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(sym,attrs__$3),args__$2], null);
});

taoensso.encore.name_with_attrs.cljs$lang$maxFixedArity = 3;

taoensso.encore._core_merge = cljs.core.merge;
taoensso.encore._core_update_in = cljs.core.update_in;


/**
 * Attempts to pave over differences in:
 *  `clojure.edn/read-string`, `clojure.tools.edn/read-string`,
 *  `cljs.reader/read-string`, `cljs.tools.reader/read-string`.
 * `cljs.reader` in particular can be a pain.
 */
taoensso.encore.read_edn = (function taoensso$encore$read_edn(var_args){
var args48827 = [];
var len__8822__auto___48836 = arguments.length;
var i__8823__auto___48837 = (0);
while(true){
if((i__8823__auto___48837 < len__8822__auto___48836)){
args48827.push((arguments[i__8823__auto___48837]));

var G__48838 = (i__8823__auto___48837 + (1));
i__8823__auto___48837 = G__48838;
continue;
} else {
}
break;
}

var G__48829 = args48827.length;
switch (G__48829) {
case 1:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48827.length)].join('')));

}
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2(null,s);
});

taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
if(((s == null)) || ((s === ""))){
return null;
} else {
if(typeof s === 'string'){
var readers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$readers,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$default,cljs.core.cst$kw$taoensso$encore_SLASH_dynamic);
var readers__$1 = (cljs.core.truth_((function (){var G__48830 = readers;
var G__48831 = cljs.core.cst$kw$taoensso$encore_SLASH_dynamic;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__48830,G__48831) : taoensso.encore.kw_identical_QMARK_.call(null,G__48830,G__48831));
})())?(function (){var G__48832 = cljs.core.symbol;
var G__48833 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_tag_table_STAR_) : cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_));
return (taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.map_keys.cljs$core$IFn$_invoke$arity$2(G__48832,G__48833) : taoensso.encore.map_keys.call(null,G__48832,G__48833));
})():readers);
var default$__$1 = (cljs.core.truth_((function (){var G__48834 = default$;
var G__48835 = cljs.core.cst$kw$taoensso$encore_SLASH_dynamic;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__48834,G__48835) : taoensso.encore.kw_identical_QMARK_.call(null,G__48834,G__48835));
})())?(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.reader._STAR_default_data_reader_fn_STAR_) : cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)):default$);
var opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$readers,readers__$1,cljs.core.array_seq([cljs.core.cst$kw$default,default$__$1], 0));
return cljs.tools.reader.edn.read_string.cljs$core$IFn$_invoke$arity$2(opts__$1,s);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("`read-edn` attempt against non-nil, non-string arg",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,s,cljs.core.cst$kw$type,cljs.core.type(s)], null));
}
}
});

taoensso.encore.read_edn.cljs$lang$maxFixedArity = 2;

/**
 * Prints arg to an edn string readable with `read-edn`.
 */
taoensso.encore.pr_edn = (function taoensso$encore$pr_edn(var_args){
var args48840 = [];
var len__8822__auto___48845 = arguments.length;
var i__8823__auto___48846 = (0);
while(true){
if((i__8823__auto___48846 < len__8822__auto___48845)){
args48840.push((arguments[i__8823__auto___48846]));

var G__48847 = (i__8823__auto___48846 + (1));
i__8823__auto___48846 = G__48847;
continue;
} else {
}
break;
}

var G__48842 = args48840.length;
switch (G__48842) {
case 1:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48840.length)].join('')));

}
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2(null,x);
});

taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$2 = (function (_opts,x){
var _STAR_print_level_STAR_48843 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_48844 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = null;

cljs.core._STAR_print_length_STAR_ = null;

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_48844;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_48843;
}});

taoensso.encore.pr_edn.cljs$lang$maxFixedArity = 2;

/**
 * Returns data map iff `x` is an error of any type on platform.
 */
taoensso.encore.error_data = (function taoensso$encore$error_data(x){
var b2__47185__auto__ = (function (){var or__7601__auto__ = cljs.core.ex_data(x);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
if((x instanceof Error)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}
})();
if(cljs.core.truth_(b2__47185__auto__)){
var data_map = b2__47185__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var err = x;
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$err_DASH_type,cljs.core.type(err),cljs.core.cst$kw$err_DASH_msg,err.message,cljs.core.cst$kw$err_DASH_cause,err.cause], null);
})(),data_map);
} else {
return null;
}
});
taoensso.encore.some_QMARK_ = (function taoensso$encore$some_QMARK_(x){
if((x == null)){
return false;
} else {
return true;
}
});

taoensso.encore.stringy_QMARK_ = (function taoensso$encore$stringy_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || (typeof x === 'string');
});

taoensso.encore.ident_QMARK_ = (function taoensso$encore$ident_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol));
});

taoensso.encore.boolean_QMARK_ = (function taoensso$encore$boolean_QMARK_(x){
return (x === true) || (x === false);
});

taoensso.encore.indexed_QMARK_ = (function taoensso$encore$indexed_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IIndexed$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IIndexed,x);
}
});

taoensso.encore.named_QMARK_ = (function taoensso$encore$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$INamed$))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.editable_QMARK_ = (function taoensso$encore$editable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IEditableCollection$))){
return true;
} else {
return false;
}
} else {
return false;
}
});

taoensso.encore.derefable_QMARK_ = (function taoensso$encore$derefable_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x);
}
});

taoensso.encore.error_QMARK_ = (function taoensso$encore$error_QMARK_(x){
return (x instanceof Error);
});

taoensso.encore.atom_QMARK_ = (function taoensso$encore$atom_QMARK_(x){
return (x instanceof cljs.core.Atom);
});

taoensso.encore.lazy_seq_QMARK_ = (function taoensso$encore$lazy_seq_QMARK_(x){
return (x instanceof cljs.core.LazySeq);
});

taoensso.encore.re_pattern_QMARK_ = (function taoensso$encore$re_pattern_QMARK_(x){
return (x instanceof RegExp);
});

taoensso.encore.simple_ident_QMARK_ = (function taoensso$encore$simple_ident_QMARK_(x){
return (taoensso.encore.ident_QMARK_(x)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_ident_QMARK_ = (function taoensso$encore$qualified_ident_QMARK_(x){
var and__7589__auto__ = taoensso.encore.ident_QMARK_(x);
if(and__7589__auto__){
var and__7589__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__7589__auto____$1)){
return true;
} else {
return and__7589__auto____$1;
}
} else {
return and__7589__auto__;
}
});

taoensso.encore.simple_symbol_QMARK_ = (function taoensso$encore$simple_symbol_QMARK_(x){
return ((x instanceof cljs.core.Symbol)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_symbol_QMARK_ = (function taoensso$encore$qualified_symbol_QMARK_(x){
var and__7589__auto__ = (x instanceof cljs.core.Symbol);
if(and__7589__auto__){
var and__7589__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__7589__auto____$1)){
return true;
} else {
return and__7589__auto____$1;
}
} else {
return and__7589__auto__;
}
});

taoensso.encore.simple_keyword_QMARK_ = (function taoensso$encore$simple_keyword_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) && ((cljs.core.namespace(x) == null));
});

taoensso.encore.qualified_keyword_QMARK_ = (function taoensso$encore$qualified_keyword_QMARK_(x){
var and__7589__auto__ = (x instanceof cljs.core.Keyword);
if(and__7589__auto__){
var and__7589__auto____$1 = cljs.core.namespace(x);
if(cljs.core.truth_(and__7589__auto____$1)){
return true;
} else {
return and__7589__auto____$1;
}
} else {
return and__7589__auto__;
}
});

taoensso.encore.nempty_str_QMARK_ = (function taoensso$encore$nempty_str_QMARK_(x){
return (typeof x === 'string') && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")));
});

taoensso.encore.nblank_str_QMARK_ = (function taoensso$encore$nblank_str_QMARK_(x){
return (typeof x === 'string') && (!(clojure.string.blank_QMARK_(x)));
});

taoensso.encore.nblank_QMARK_ = (function taoensso$encore$nblank_QMARK_(x){
return !(clojure.string.blank_QMARK_(x));
});

taoensso.encore.vec2_QMARK_ = (function taoensso$encore$vec2_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(2)));
});

taoensso.encore.vec3_QMARK_ = (function taoensso$encore$vec3_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),(3)));
});
taoensso.encore.nneg_QMARK_ = (function taoensso$encore$nneg_QMARK_(x){
return !((x < (0)));
});

taoensso.encore.zero_num_QMARK_ = (function taoensso$encore$zero_num_QMARK_(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0));
});

taoensso.encore.regular_num_QMARK_ = (function taoensso$encore$regular_num_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity)));
});

taoensso.encore.float_QMARK_ = (function taoensso$encore$float_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && (!((parseFloat(x) === parseInt(x,(10)))));
});

taoensso.encore.int_QMARK_ = (function taoensso$encore$int_QMARK_(x){
return (typeof x === 'number') && (!(isNaN(x))) && (!((x === Infinity))) && ((parseFloat(x) === parseInt(x,(10))));
});

taoensso.encore.nat_num_QMARK_ = (function taoensso$encore$nat_num_QMARK_(x){
return (typeof x === 'number') && (!((x < (0))));
});

taoensso.encore.pos_num_QMARK_ = (function taoensso$encore$pos_num_QMARK_(x){
return (typeof x === 'number') && ((x > (0)));
});

taoensso.encore.neg_num_QMARK_ = (function taoensso$encore$neg_num_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});

taoensso.encore.nat_int_QMARK_ = (function taoensso$encore$nat_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pos_int_QMARK_ = (function taoensso$encore$pos_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && ((x > (0)));
});

taoensso.encore.neg_int_QMARK_ = (function taoensso$encore$neg_int_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && ((x < (0)));
});

taoensso.encore.nat_float_QMARK_ = (function taoensso$encore$nat_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pos_float_QMARK_ = (function taoensso$encore$pos_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && ((x > (0)));
});

taoensso.encore.neg_float_QMARK_ = (function taoensso$encore$neg_float_QMARK_(x){
return (taoensso.encore.float_QMARK_(x)) && ((x < (0)));
});

taoensso.encore.udt_QMARK_ = (function taoensso$encore$udt_QMARK_(x){
return (taoensso.encore.int_QMARK_(x)) && (!((x < (0))));
});

taoensso.encore.pval_QMARK_ = (function taoensso$encore$pval_QMARK_(x){
var and__7589__auto__ = typeof x === 'number';
if(and__7589__auto__){
var n = x;
return ((n >= 0.0)) && ((n <= 1.0));
} else {
return and__7589__auto__;
}
});
taoensso.encore.chan_QMARK_ = (function taoensso$encore$chan_QMARK_(x){
return (x instanceof cljs.core.async.impl.channels.ManyToManyChannel);
});
taoensso.encore.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
taoensso.encore.as__QMARK_nzero = (function taoensso$encore$as__QMARK_nzero(x){
if(typeof x === 'number'){
if((x === (0))){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nblank = (function taoensso$encore$as__QMARK_nblank(x){
if(typeof x === 'string'){
if(clojure.string.blank_QMARK_(x)){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_kw = (function taoensso$encore$as__QMARK_kw(x){
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_name = (function taoensso$encore$as__QMARK_name(x){
if(taoensso.encore.named_QMARK_(x)){
return cljs.core.name(x);
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_qname = (function taoensso$encore$as__QMARK_qname(x){
if(taoensso.encore.named_QMARK_(x)){
var n = cljs.core.name(x);
var b2__47185__auto__ = cljs.core.namespace(x);
if(cljs.core.truth_(b2__47185__auto__)){
var ns = b2__47185__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return n;
}
} else {
if(typeof x === 'string'){
return x;
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_nempty_str = (function taoensso$encore$as__QMARK_nempty_str(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"")){
return null;
} else {
return x;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_int = (function taoensso$encore$as__QMARK_int(x){
if(typeof x === 'number'){
return cljs.core.long$(x);
} else {
if(typeof x === 'string'){
var x__$1 = parseInt(x,(10));
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_float = (function taoensso$encore$as__QMARK_float(x){
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
var x__$1 = parseFloat(x);
if(cljs.core.truth_(isNaN(x__$1))){
return null;
} else {
return x__$1;
}
} else {
return null;
}
}
});

taoensso.encore.as__QMARK_udt = (function taoensso$encore$as__QMARK_udt(x){
var b2__47185__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__47185__auto__)){
var n = b2__47185__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_int = (function taoensso$encore$as__QMARK_nat_int(x){
var b2__47185__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__47185__auto__)){
var n = b2__47185__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_int = (function taoensso$encore$as__QMARK_pos_int(x){
var b2__47185__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(b2__47185__auto__)){
var n = b2__47185__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_nat_float = (function taoensso$encore$as__QMARK_nat_float(x){
var b2__47185__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__47185__auto__)){
var n = b2__47185__auto__;
if((n < (0))){
return null;
} else {
return n;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pos_float = (function taoensso$encore$as__QMARK_pos_float(x){
var b2__47185__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__47185__auto__)){
var n = b2__47185__auto__;
if((n > (0))){
return n;
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_pval = (function taoensso$encore$as__QMARK_pval(x){
var b2__47185__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(b2__47185__auto__)){
var f = b2__47185__auto__;
if((f > 1.0)){
return 1.0;
} else {
if((f < 0.0)){
return 0.0;
} else {
return f;
}
}
} else {
return null;
}
});

taoensso.encore.as__QMARK_bool = (function taoensso$encore$as__QMARK_bool(x){
if((x == null)){
return null;
} else {
if((x === true) || (x === false)){
return x;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"false")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"FALSE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"0"))){
return false;
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,(1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"true")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"TRUE")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"1"))){
return true;
} else {
return null;
}
}
}
}
});

taoensso.encore.as__QMARK_email = (function taoensso$encore$as__QMARK_email(_QMARK_s){
if(cljs.core.truth_(_QMARK_s)){
return cljs.core.re_find(/^[^\s@]+@[^\s@]+\.\S*[^\.]$/,clojure.string.trim(_QMARK_s));
} else {
return null;
}
});

taoensso.encore.as__QMARK_nemail = (function taoensso$encore$as__QMARK_nemail(_QMARK_s){
var b2__47185__auto__ = taoensso.encore.as__QMARK_email(_QMARK_s);
if(cljs.core.truth_(b2__47185__auto__)){
var email = b2__47185__auto__;
return clojure.string.lower_case(email);
} else {
return null;
}
});

taoensso.encore.try_pred = (function taoensso$encore$try_pred(pred,x){
try{return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}catch (e48858){if((e48858 instanceof Error)){
var _ = e48858;
return false;
} else {
throw e48858;

}
}});
taoensso.encore.when_QMARK_ = (function taoensso$encore$when_QMARK_(pred,x){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
return null;
}
});
/**
 * Cheaper `have!` that provides less diagnostic info.
 */
taoensso.encore.is_BANG_ = (function taoensso$encore$is_BANG_(var_args){
var args48859 = [];
var len__8822__auto___48862 = arguments.length;
var i__8823__auto___48863 = (0);
while(true){
if((i__8823__auto___48863 < len__8822__auto___48862)){
args48859.push((arguments[i__8823__auto___48863]));

var G__48864 = (i__8823__auto___48863 + (1));
i__8823__auto___48863 = G__48864;
continue;
} else {
}
break;
}

var G__48861 = args48859.length;
switch (G__48861) {
case 1:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48859.length)].join('')));

}
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pred,x){
return taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,x,null);
});

taoensso.encore.is_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,fail__QMARK_data){
if(cljs.core.truth_(taoensso.encore.try_pred(pred,x))){
return x;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("`is!` "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pred)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" failure against arg: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x),cljs.core.cst$kw$fail_DASH__QMARK_data,fail__QMARK_data], null));
}
});

taoensso.encore.is_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore._as_throw = (function taoensso$encore$_as_throw(as_name,x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("`as-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(as_name)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("` failed against: `"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("`")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
});
taoensso.encore.as_nzero = (function taoensso$encore$as_nzero(x){
var or__7601__auto__ = taoensso.encore.as__QMARK_nzero(x);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nzero,x);
}
});

taoensso.encore.as_nblank = (function taoensso$encore$as_nblank(x){
var or__7601__auto__ = taoensso.encore.as__QMARK_nblank(x);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nblank,x);
}
});

taoensso.encore.as_nempty_str = (function taoensso$encore$as_nempty_str(x){
var or__7601__auto__ = taoensso.encore.as__QMARK_nempty_str(x);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nempty_DASH_str,x);
}
});

taoensso.encore.as_kw = (function taoensso$encore$as_kw(x){
var or__7601__auto__ = taoensso.encore.as__QMARK_kw(x);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$kw,x);
}
});

taoensso.encore.as_name = (function taoensso$encore$as_name(x){
var or__7601__auto__ = taoensso.encore.as__QMARK_name(x);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$name,x);
}
});

taoensso.encore.as_qname = (function taoensso$encore$as_qname(x){
var or__7601__auto__ = taoensso.encore.as__QMARK_qname(x);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$qname,x);
}
});

taoensso.encore.as_email = (function taoensso$encore$as_email(x){
var or__7601__auto__ = taoensso.encore.as__QMARK_email(x);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$email,x);
}
});

taoensso.encore.as_nemail = (function taoensso$encore$as_nemail(x){
var or__7601__auto__ = taoensso.encore.as__QMARK_nemail(x);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nemail,x);
}
});

taoensso.encore.as_udt = (function taoensso$encore$as_udt(x){
var or__7601__auto__ = taoensso.encore.as__QMARK_udt(x);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$udt,x);
}
});

taoensso.encore.as_int = (function taoensso$encore$as_int(x){
var or__7601__auto__ = taoensso.encore.as__QMARK_int(x);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$int,x);
}
});

taoensso.encore.as_nat_int = (function taoensso$encore$as_nat_int(x){
var or__7601__auto__ = taoensso.encore.as__QMARK_nat_int(x);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nat_DASH_int,x);
}
});

taoensso.encore.as_pos_int = (function taoensso$encore$as_pos_int(x){
var or__7601__auto__ = taoensso.encore.as__QMARK_pos_int(x);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pos_DASH_int,x);
}
});

taoensso.encore.as_float = (function taoensso$encore$as_float(x){
var or__7601__auto__ = taoensso.encore.as__QMARK_float(x);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$float,x);
}
});

taoensso.encore.as_nat_float = (function taoensso$encore$as_nat_float(x){
var or__7601__auto__ = taoensso.encore.as__QMARK_nat_float(x);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$nat_DASH_float,x);
}
});

taoensso.encore.as_pos_float = (function taoensso$encore$as_pos_float(x){
var or__7601__auto__ = taoensso.encore.as__QMARK_pos_float(x);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pos_DASH_float,x);
}
});

taoensso.encore.as_pval = (function taoensso$encore$as_pval(x){
var or__7601__auto__ = taoensso.encore.as__QMARK_pval(x);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return taoensso.encore._as_throw(cljs.core.cst$kw$pval,x);
}
});

taoensso.encore.as_bool = (function taoensso$encore$as_bool(x){
var _QMARK_b = taoensso.encore.as__QMARK_bool(x);
if((_QMARK_b == null)){
return taoensso.encore._as_throw(cljs.core.cst$kw$bool,x);
} else {
return _QMARK_b;
}
});
taoensso.encore.explode_keyword = (function taoensso$encore$explode_keyword(k){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as_qname(k),/[\.\/]/);
});
taoensso.encore.merge_keywords = (function taoensso$encore$merge_keywords(var_args){
var args48866 = [];
var len__8822__auto___48869 = arguments.length;
var i__8823__auto___48870 = (0);
while(true){
if((i__8823__auto___48870 < len__8822__auto___48869)){
args48866.push((arguments[i__8823__auto___48870]));

var G__48871 = (i__8823__auto___48870 + (1));
i__8823__auto___48870 = G__48871;
continue;
} else {
}
break;
}

var G__48868 = args48866.length;
switch (G__48868) {
case 1:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48866.length)].join('')));

}
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$1 = (function (ks){
return taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2(ks,false);
});

taoensso.encore.merge_keywords.cljs$core$IFn$_invoke$arity$2 = (function (ks,omit_slash_QMARK_){
if(cljs.core.seq(ks)){
var parts = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,acc,taoensso.encore.explode_keyword(in$));
}
}),cljs.core.PersistentVector.EMPTY,ks);
if(cljs.core.seq(parts)){
if(cljs.core.truth_(omit_slash_QMARK_)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",parts));
} else {
var ppop = cljs.core.pop(parts);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(((cljs.core.seq(ppop))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ppop):null),cljs.core.peek(parts));
}
} else {
return null;
}
} else {
return null;
}
});

taoensso.encore.merge_keywords.cljs$lang$maxFixedArity = 2;

/**
 * As `core/preserving-reduced`.
 */
taoensso.encore.preserve_reduced = (function taoensso$encore$preserve_reduced(rf){
return (function (acc,in$){
var result = (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,in$) : rf.call(null,acc,in$));
if(cljs.core.reduced_QMARK_(result)){
return cljs.core.reduced(result);
} else {
return result;
}
});
});
/**
 * Like `reduce-kv` but takes a flat sequence of kv pairs.
 */
taoensso.encore.reduce_kvs = (function taoensso$encore$reduce_kvs(rf,init,kvs){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.completing.cljs$core$IFn$_invoke$arity$1((function (acc,p__48879){
var vec__48880 = p__48879;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48880,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48880,(1),null);
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(acc,k,v) : rf.call(null,acc,k,v));
})),init,kvs);
});
taoensso.encore.reduce_n = (function taoensso$encore$reduce_n(rf,init,n){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,init,cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
});
var inc_48889 = (function (n){
return (n + (1));
});
/**
 * Like `reduce` but takes (rf [acc idx in]) with idx as in `map-indexed`.
 */
taoensso.encore.reduce_indexed = ((function (inc_48889){
return (function taoensso$encore$reduce_indexed(rf,init,coll){
var i = cljs.core.volatile_BANG_((-1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,inc_48889){
return (function (acc,in$){
var G__48886 = acc;
var G__48887 = cljs.core._vreset_BANG_(i,inc_48889(cljs.core._deref(i)));
var G__48888 = in$;
return (rf.cljs$core$IFn$_invoke$arity$3 ? rf.cljs$core$IFn$_invoke$arity$3(G__48886,G__48887,G__48888) : rf.call(null,G__48886,G__48887,G__48888));
});})(i,inc_48889))
,init,coll);
});})(inc_48889))
;
/**
 * Like `reduce-kv` but for JavaScript objects.
 */
taoensso.encore.reduce_obj = (function taoensso$encore$reduce_obj(f,init,o){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var G__48893 = acc;
var G__48894 = k;
var G__48895 = goog.object.get(o,k,null);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__48893,G__48894,G__48895) : f.call(null,G__48893,G__48894,G__48895));
}),init,cljs.core.js_keys(o));
});
taoensso.encore.run_BANG_ = (function taoensso$encore$run_BANG_(proc,coll){
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__48897_SHARP_,p2__48896_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$1 ? proc.cljs$core$IFn$_invoke$arity$1(p2__48896_SHARP_) : proc.call(null,p2__48896_SHARP_));
}),null,coll);

return null;
});

taoensso.encore.run_kv_BANG_ = (function taoensso$encore$run_kv_BANG_(proc,m){
cljs.core.reduce_kv((function (p1__48900_SHARP_,p2__48898_SHARP_,p3__48899_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__48898_SHARP_,p3__48899_SHARP_) : proc.call(null,p2__48898_SHARP_,p3__48899_SHARP_));
}),null,m);

return null;
});

taoensso.encore.run_kvs_BANG_ = (function taoensso$encore$run_kvs_BANG_(proc,kvs){
taoensso.encore.reduce_kvs((function (p1__48903_SHARP_,p2__48901_SHARP_,p3__48902_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__48901_SHARP_,p3__48902_SHARP_) : proc.call(null,p2__48901_SHARP_,p3__48902_SHARP_));
}),null,kvs);

return null;
});

taoensso.encore.run_obj_BANG_ = (function taoensso$encore$run_obj_BANG_(proc,obj){
taoensso.encore.reduce_obj((function (p1__48906_SHARP_,p2__48904_SHARP_,p3__48905_SHARP_){
return (proc.cljs$core$IFn$_invoke$arity$2 ? proc.cljs$core$IFn$_invoke$arity$2(p2__48904_SHARP_,p3__48905_SHARP_) : proc.call(null,p2__48904_SHARP_,p3__48905_SHARP_));
}),null,obj);

return null;
});
taoensso.encore.rsome = (function taoensso$encore$rsome(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
var b2__47185__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$));
if(cljs.core.truth_(b2__47185__auto__)){
var p = b2__47185__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rsome_kv = (function taoensso$encore$rsome_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
var b2__47185__auto__ = (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v));
if(cljs.core.truth_(b2__47185__auto__)){
var p = b2__47185__auto__;
return cljs.core.reduced(p);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst = (function taoensso$encore$rfirst(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return cljs.core.reduced(in$);
} else {
return null;
}
}),null,coll);
});

taoensso.encore.rfirst_kv = (function taoensso$encore$rfirst_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
} else {
return null;
}
}),null,coll);
});

taoensso.encore.revery_QMARK_ = (function taoensso$encore$revery_QMARK_(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});

taoensso.encore.revery_kv_QMARK_ = (function taoensso$encore$revery_kv_QMARK_(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return true;
} else {
return cljs.core.reduced(false);
}
}),true,coll);
});

taoensso.encore.revery = (function taoensso$encore$revery(pred,coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(in$) : pred.call(null,in$)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});

taoensso.encore.revery_kv = (function taoensso$encore$revery_kv(pred,coll){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return coll;
} else {
return cljs.core.reduced(null);
}
}),coll,coll);
});
var inc_48908 = (function (n){
return (n + (1));
});
/**
 * Returns a new stateful index fn that returns: 0, 1, 2, ...
 */
taoensso.encore.idx_fn = ((function (inc_48908){
return (function taoensso$encore$idx_fn(){
var idx_ = cljs.core.volatile_BANG_((-1));
return ((function (idx_,inc_48908){
return (function (){
return cljs.core._vreset_BANG_(idx_,inc_48908(cljs.core._deref(idx_)));
});
;})(idx_,inc_48908))
});})(inc_48908))
;
taoensso.encore.max_long = (9007199254740991);
taoensso.encore.min_long = (-9007199254740991);
taoensso.encore.approx_EQ__EQ_ = (function taoensso$encore$approx_EQ__EQ_(var_args){
var args48909 = [];
var len__8822__auto___48914 = arguments.length;
var i__8823__auto___48915 = (0);
while(true){
if((i__8823__auto___48915 < len__8822__auto___48914)){
args48909.push((arguments[i__8823__auto___48915]));

var G__48916 = (i__8823__auto___48915 + (1));
i__8823__auto___48915 = G__48916;
continue;
} else {
}
break;
}

var G__48911 = args48909.length;
switch (G__48911) {
case 2:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48909.length)].join('')));

}
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return ((function (){var G__48912 = (x - y);
return Math.abs(G__48912);
})() < 0.001);
});

taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (signf,x,y){
return ((function (){var G__48913 = (x - y);
return Math.abs(G__48913);
})() < signf);
});

taoensso.encore.approx_EQ__EQ_.cljs$lang$maxFixedArity = 3;

taoensso.encore.clamp = (function taoensso$encore$clamp(nmin,nmax,n){
if((n < nmin)){
return nmin;
} else {
if((n > nmax)){
return nmax;
} else {
return n;
}
}
});
taoensso.encore.pow = (function taoensso$encore$pow(n,exp){
return Math.pow(n,exp);
});
taoensso.encore.abs = (function taoensso$encore$abs(n){
if((n < (0))){
return (- n);
} else {
return n;
}
});
taoensso.encore.round_STAR_ = (function taoensso$encore$round_STAR_(var_args){
var args48918 = [];
var len__8822__auto___48922 = arguments.length;
var i__8823__auto___48923 = (0);
while(true){
if((i__8823__auto___48923 < len__8822__auto___48922)){
args48918.push((arguments[i__8823__auto___48923]));

var G__48924 = (i__8823__auto___48923 + (1));
i__8823__auto___48923 = G__48924;
continue;
} else {
}
break;
}

var G__48920 = args48918.length;
switch (G__48920) {
case 1:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48918.length)].join('')));

}
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$round,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,n){
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3(type,null,n);
});

taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,nplaces,n){
var n__$1 = n;
var modifier = (cljs.core.truth_(nplaces)?Math.pow(10.0,nplaces):null);
var n_STAR_ = (cljs.core.truth_(modifier)?(n__$1 * modifier):n__$1);
var rounded = (function (){var G__48921 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__48921) {
case "round":
return Math.round(n_STAR_);

break;
case "floor":
return Math.floor(n_STAR_);

break;
case "ceil":
return Math.ceil(n_STAR_);

break;
case "trunc":
return cljs.core.long$(n_STAR_);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unrecognized round type",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$given,type], null));

}
})();
if(cljs.core.truth_(modifier)){
return (rounded / modifier);
} else {
return cljs.core.long$(rounded);
}
});

taoensso.encore.round_STAR_.cljs$lang$maxFixedArity = 3;

taoensso.encore.round0 = (function taoensso$encore$round0(n){
var G__48928 = n;
return Math.round(G__48928);
});

taoensso.encore.round1 = (function taoensso$encore$round1(n){
return ((function (){var G__48930 = (n * 10.0);
return Math.round(G__48930);
})() / 10.0);
});

taoensso.encore.round2 = (function taoensso$encore$round2(n){
return ((function (){var G__48932 = (n * 100.0);
return Math.round(G__48932);
})() / 100.0);
});
/**
 * Returns binary exponential backoff value for n<=36.
 */
taoensso.encore.exp_backoff = (function taoensso$encore$exp_backoff(var_args){
var args48933 = [];
var len__8822__auto___48939 = arguments.length;
var i__8823__auto___48940 = (0);
while(true){
if((i__8823__auto___48940 < len__8822__auto___48939)){
args48933.push((arguments[i__8823__auto___48940]));

var G__48941 = (i__8823__auto___48940 + (1));
i__8823__auto___48940 = G__48941;
continue;
} else {
}
break;
}

var G__48935 = args48933.length;
switch (G__48935) {
case 1:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48933.length)].join('')));

}
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1 = (function (n_attempt){
return taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2(n_attempt,null);
});

taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$2 = (function (n_attempt,p__48936){
var map__48937 = p__48936;
var map__48937__$1 = ((((!((map__48937 == null)))?((((map__48937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48937):map__48937);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48937__$1,cljs.core.cst$kw$min);
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48937__$1,cljs.core.cst$kw$max);
var factor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48937__$1,cljs.core.cst$kw$factor,(1000));
var n = (((n_attempt > (36)))?(36):n_attempt);
var b = Math.pow((2),n);
var t = cljs.core.long$((((b + cljs.core.rand.cljs$core$IFn$_invoke$arity$1(b)) * 0.5) * factor));
var t__$1 = cljs.core.long$((cljs.core.truth_(min)?(((t < min))?min:t):t));
var t__$2 = cljs.core.long$((cljs.core.truth_(max)?(((t__$1 > max))?max:t__$1):t__$1));
return t__$2;
});

taoensso.encore.exp_backoff.cljs$lang$maxFixedArity = 2;

taoensso.encore.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
taoensso.encore.js__QMARK_win = ((typeof window !== 'undefined')?window:null);
/**
 * Like `force` for refs.
 */
taoensso.encore.force_ref = (function taoensso$encore$force_ref(x){
if(taoensso.encore.derefable_QMARK_(x)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
taoensso.encore.merge_meta = (function taoensso$encore$merge_meta(x,m){
return cljs.core.with_meta(x,(function (){var G__48945 = cljs.core.meta(x);
var G__48946 = m;
return (taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.merge.cljs$core$IFn$_invoke$arity$2(G__48945,G__48946) : taoensso.encore.merge.call(null,G__48945,G__48946));
})());
});
taoensso.encore.without_meta = (function taoensso$encore$without_meta(x){
if(cljs.core.truth_(cljs.core.meta(x))){
return cljs.core.with_meta(x,null);
} else {
return x;
}
});
taoensso.encore.some_EQ_ = (function taoensso$encore$some_EQ_(var_args){
var args48948 = [];
var len__8822__auto___48954 = arguments.length;
var i__8823__auto___48955 = (0);
while(true){
if((i__8823__auto___48955 < len__8822__auto___48954)){
args48948.push((arguments[i__8823__auto___48955]));

var G__48956 = (i__8823__auto___48955 + (1));
i__8823__auto___48955 = G__48956;
continue;
} else {
}
break;
}

var G__48953 = args48948.length;
switch (G__48953) {
case 2:
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8845__auto__ = (new cljs.core.IndexedSeq(args48948.slice((2)),(0),null));
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8845__auto__);

}
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (taoensso.encore.some_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y));
});

taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var and__7589__auto__ = taoensso.encore.some_QMARK_(x);
if(and__7589__auto__){
var and__7589__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
if(and__7589__auto____$1){
return taoensso.encore.revery_QMARK_(((function (and__7589__auto____$1,and__7589__auto__){
return (function (p1__48947_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__48947_SHARP_,x);
});})(and__7589__auto____$1,and__7589__auto__))
,more);
} else {
return and__7589__auto____$1;
}
} else {
return and__7589__auto__;
}
});

taoensso.encore.some_EQ_.cljs$lang$applyTo = (function (seq48949){
var G__48950 = cljs.core.first(seq48949);
var seq48949__$1 = cljs.core.next(seq48949);
var G__48951 = cljs.core.first(seq48949__$1);
var seq48949__$2 = cljs.core.next(seq48949__$1);
return taoensso.encore.some_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__48950,G__48951,seq48949__$2);
});

taoensso.encore.some_EQ_.cljs$lang$maxFixedArity = (2);

/**
 * Returns first non-nil arg, or nil.
 */
taoensso.encore.nnil = (function taoensso$encore$nnil(var_args){
var args48958 = [];
var len__8822__auto___48965 = arguments.length;
var i__8823__auto___48966 = (0);
while(true){
if((i__8823__auto___48966 < len__8822__auto___48965)){
args48958.push((arguments[i__8823__auto___48966]));

var G__48967 = (i__8823__auto___48966 + (1));
i__8823__auto___48966 = G__48967;
continue;
} else {
}
break;
}

var G__48964 = args48958.length;
switch (G__48964) {
case 0:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__8845__auto__ = (new cljs.core.IndexedSeq(args48958.slice((3)),(0),null));
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8845__auto__);

}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if((x == null)){
return y;
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
if((x == null)){
if((y == null)){
return z;
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,z,more){
if((x == null)){
if((y == null)){
if((z == null)){
return taoensso.encore.rfirst(taoensso.encore.some_QMARK_,more);
} else {
return z;
}
} else {
return y;
}
} else {
return x;
}
});

taoensso.encore.nnil.cljs$lang$applyTo = (function (seq48959){
var G__48960 = cljs.core.first(seq48959);
var seq48959__$1 = cljs.core.next(seq48959);
var G__48961 = cljs.core.first(seq48959__$1);
var seq48959__$2 = cljs.core.next(seq48959__$1);
var G__48962 = cljs.core.first(seq48959__$2);
var seq48959__$3 = cljs.core.next(seq48959__$2);
return taoensso.encore.nnil.cljs$core$IFn$_invoke$arity$variadic(G__48960,G__48961,G__48962,seq48959__$3);
});

taoensso.encore.nnil.cljs$lang$maxFixedArity = (3);

taoensso.encore.parse_version = (function taoensso$encore$parse_version(x){
var vec__48972 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),/-/,(2));
var s_version = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48972,(0),null);
var _QMARK_s_qualifier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48972,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$version,(function (){var b2__47185__auto__ = cljs.core.re_seq(/\d+/,s_version);
if(cljs.core.truth_(b2__47185__auto__)){
var s = b2__47185__auto__;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_int,s);
} else {
return null;
}
})(),cljs.core.cst$kw$qualifier,(function (){var b2__47185__auto__ = _QMARK_s_qualifier;
if(cljs.core.truth_(b2__47185__auto__)){
var s = b2__47185__auto__;
return clojure.string.lower_case(s);
} else {
return null;
}
})()], null);
});
/**
 * Version check for dependency conflicts, etc.
 */
taoensso.encore.assert_min_encore_version = (function taoensso$encore$assert_min_encore_version(min_version){
var vec__48985 = taoensso.encore.encore_version;
var xc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48985,(0),null);
var yc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48985,(1),null);
var zc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48985,(2),null);
var vec__48988 = ((cljs.core.vector_QMARK_(min_version))?min_version:cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1(taoensso.encore.parse_version(min_version)));
var xm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48988,(0),null);
var ym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48988,(1),null);
var zm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48988,(2),null);
var vec__48991 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__48985,xc,yc,zc,vec__48988,xm,ym,zm){
return (function (p1__48975_SHARP_){
var or__7601__auto__ = p1__48975_SHARP_;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return (0);
}
});})(vec__48985,xc,yc,zc,vec__48988,xm,ym,zm))
,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm,ym,zm], null));
var xm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48991,(0),null);
var ym__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48991,(1),null);
var zm__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48991,(2),null);
if(((xc > xm__$1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xc,xm__$1)) && (((yc > ym__$1)) || ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(yc,ym__$1)) && ((zc >= zm__$1)))))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Insufficient `com.taoensso/encore` version, you may have a dependency conflict: see http://goo.gl/qBbLvC for solutions.",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xm__$1,ym__$1,zm__$1], null)),cljs.core.cst$kw$your_DASH_version,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xc,yc,zc], null))], null));
}
});
taoensso.encore.queue_QMARK_ = (function taoensso$encore$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns a PersistentQueue.
 */
taoensso.encore.queue = (function taoensso$encore$queue(var_args){
var args48994 = [];
var len__8822__auto___48997 = arguments.length;
var i__8823__auto___48998 = (0);
while(true){
if((i__8823__auto___48998 < len__8822__auto___48997)){
args48994.push((arguments[i__8823__auto___48998]));

var G__48999 = (i__8823__auto___48998 + (1));
i__8823__auto___48998 = G__48999;
continue;
} else {
}
break;
}

var G__48996 = args48994.length;
switch (G__48996) {
case 1:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args48994.length)].join('')));

}
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0(),coll);
});

taoensso.encore.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

taoensso.encore.queue.cljs$lang$maxFixedArity = 1;

taoensso.encore.queue_STAR_ = (function taoensso$encore$queue_STAR_(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49002 = arguments.length;
var i__8823__auto___49003 = (0);
while(true){
if((i__8823__auto___49003 < len__8822__auto___49002)){
args__8829__auto__.push((arguments[i__8823__auto___49003]));

var G__49004 = (i__8823__auto___49003 + (1));
i__8823__auto___49003 = G__49004;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return taoensso.encore.queue.cljs$core$IFn$_invoke$arity$1(items);
});

taoensso.encore.queue_STAR_.cljs$lang$maxFixedArity = (0);

taoensso.encore.queue_STAR_.cljs$lang$applyTo = (function (seq49001){
return taoensso.encore.queue_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49001));
});

taoensso.encore.vec_STAR_ = cljs.core.vec;

taoensso.encore.set_STAR_ = cljs.core.set;
/**
 * Like `get` for JS objects, Ref. https://goo.gl/eze8hY.
 */
taoensso.encore.oget = (function taoensso$encore$oget(var_args){
var args49005 = [];
var len__8822__auto___49008 = arguments.length;
var i__8823__auto___49009 = (0);
while(true){
if((i__8823__auto___49009 < len__8822__auto___49008)){
args49005.push((arguments[i__8823__auto___49009]));

var G__49010 = (i__8823__auto___49009 + (1));
i__8823__auto___49009 = G__49010;
continue;
} else {
}
break;
}

var G__49007 = args49005.length;
switch (G__49007) {
case 2:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49005.length)].join('')));

}
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2 = (function (o,k){
return goog.object.get(o,k,null);
});

taoensso.encore.oget.cljs$core$IFn$_invoke$arity$3 = (function (o,k,not_found){
return goog.object.get(o,k,not_found);
});

taoensso.encore.oget.cljs$lang$maxFixedArity = 3;

var sentinel_49020 = {};
/**
 * Like `get-in` for JS objects.
 */
taoensso.encore.oget_in = ((function (sentinel_49020){
return (function taoensso$encore$oget_in(var_args){
var args49014 = [];
var len__8822__auto___49021 = arguments.length;
var i__8823__auto___49022 = (0);
while(true){
if((i__8823__auto___49022 < len__8822__auto___49021)){
args49014.push((arguments[i__8823__auto___49022]));

var G__49023 = (i__8823__auto___49022 + (1));
i__8823__auto___49022 = G__49023;
continue;
} else {
}
break;
}

var G__49016 = args49014.length;
switch (G__49016) {
case 2:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49014.length)].join('')));

}
});})(sentinel_49020))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$2 = ((function (sentinel_49020){
return (function (o,ks){
return taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3(o,ks,null);
});})(sentinel_49020))
;

taoensso.encore.oget_in.cljs$core$IFn$_invoke$arity$3 = ((function (sentinel_49020){
return (function (o,ks,not_found){
var o__$1 = o;
var ks__$1 = cljs.core.seq(ks);
while(true){
if(ks__$1){
var o__$2 = (function (){var G__49017 = o__$1;
var G__49018 = cljs.core.first(ks__$1);
var G__49019 = sentinel_49020;
return goog.object.get(G__49017,G__49018,G__49019);
})();
if((o__$2 === sentinel_49020)){
return not_found;
} else {
var G__49025 = o__$2;
var G__49026 = cljs.core.next(ks__$1);
o__$1 = G__49025;
ks__$1 = G__49026;
continue;
}
} else {
return o__$1;
}
break;
}
});})(sentinel_49020))
;

taoensso.encore.oget_in.cljs$lang$maxFixedArity = 3;

/**
 * Conjoins each non-nil value.
 */
taoensso.encore.conj_some = (function taoensso$encore$conj_some(var_args){
var args49027 = [];
var len__8822__auto___49039 = arguments.length;
var i__8823__auto___49040 = (0);
while(true){
if((i__8823__auto___49040 < len__8822__auto___49039)){
args49027.push((arguments[i__8823__auto___49040]));

var G__49041 = (i__8823__auto___49040 + (1));
i__8823__auto___49040 = G__49041;
continue;
} else {
}
break;
}

var G__49032 = args49027.length;
switch (G__49032) {
case 0:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8845__auto__ = (new cljs.core.IndexedSeq(args49027.slice((2)),(0),null));
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8845__auto__);

}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if((x == null)){
return coll;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
}
});

taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_some,taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$2(coll,x),more);
});

taoensso.encore.conj_some.cljs$lang$applyTo = (function (seq49028){
var G__49029 = cljs.core.first(seq49028);
var seq49028__$1 = cljs.core.next(seq49028);
var G__49030 = cljs.core.first(seq49028__$1);
var seq49028__$2 = cljs.core.next(seq49028__$1);
return taoensso.encore.conj_some.cljs$core$IFn$_invoke$arity$variadic(G__49029,G__49030,seq49028__$2);
});

taoensso.encore.conj_some.cljs$lang$maxFixedArity = (2);


/**
 * Conjoins each truthy value.
 */
taoensso.encore.conj_when = (function taoensso$encore$conj_when(var_args){
var args49033 = [];
var len__8822__auto___49043 = arguments.length;
var i__8823__auto___49044 = (0);
while(true){
if((i__8823__auto___49044 < len__8822__auto___49043)){
args49033.push((arguments[i__8823__auto___49044]));

var G__49045 = (i__8823__auto___49044 + (1));
i__8823__auto___49044 = G__49045;
continue;
} else {
}
break;
}

var G__49038 = args49033.length;
switch (G__49038) {
case 0:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8845__auto__ = (new cljs.core.IndexedSeq(args49033.slice((2)),(0),null));
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8845__auto__);

}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return coll;
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});

taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.conj_when,taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x),more);
});

taoensso.encore.conj_when.cljs$lang$applyTo = (function (seq49034){
var G__49035 = cljs.core.first(seq49034);
var seq49034__$1 = cljs.core.next(seq49034);
var G__49036 = cljs.core.first(seq49034__$1);
var seq49034__$2 = cljs.core.next(seq49034__$1);
return taoensso.encore.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__49035,G__49036,seq49034__$2);
});

taoensso.encore.conj_when.cljs$lang$maxFixedArity = (2);

/**
 * Assocs each kv iff its value is not nil.
 */
taoensso.encore.assoc_some = (function taoensso$encore$assoc_some(var_args){
var args49047 = [];
var len__8822__auto___49068 = arguments.length;
var i__8823__auto___49069 = (0);
while(true){
if((i__8823__auto___49069 < len__8822__auto___49068)){
args49047.push((arguments[i__8823__auto___49069]));

var G__49070 = (i__8823__auto___49069 + (1));
i__8823__auto___49069 = G__49070;
continue;
} else {
}
break;
}

var G__49053 = args49047.length;
switch (G__49053) {
case 3:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8845__auto__ = (new cljs.core.IndexedSeq(args49047.slice((3)),(0),null));
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8845__auto__);

}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if((v__$1 == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
}
}),taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_some.cljs$lang$applyTo = (function (seq49048){
var G__49049 = cljs.core.first(seq49048);
var seq49048__$1 = cljs.core.next(seq49048);
var G__49050 = cljs.core.first(seq49048__$1);
var seq49048__$2 = cljs.core.next(seq49048__$1);
var G__49051 = cljs.core.first(seq49048__$2);
var seq49048__$3 = cljs.core.next(seq49048__$2);
return taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__49049,G__49050,G__49051,seq49048__$3);
});

taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if((v == null)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_some.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its val is truthy.
 */
taoensso.encore.assoc_when = (function taoensso$encore$assoc_when(var_args){
var args49054 = [];
var len__8822__auto___49072 = arguments.length;
var i__8823__auto___49073 = (0);
while(true){
if((i__8823__auto___49073 < len__8822__auto___49072)){
args49054.push((arguments[i__8823__auto___49073]));

var G__49074 = (i__8823__auto___49073 + (1));
i__8823__auto___49073 = G__49074;
continue;
} else {
}
break;
}

var G__49060 = args49054.length;
switch (G__49060) {
case 3:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8845__auto__ = (new cljs.core.IndexedSeq(args49054.slice((3)),(0),null));
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8845__auto__);

}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return m;
}
}
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs((function (m__$1,k__$1,v__$1){
if(cljs.core.truth_(v__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k__$1,v__$1);
} else {
return m__$1;
}
}),taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_when.cljs$lang$applyTo = (function (seq49055){
var G__49056 = cljs.core.first(seq49055);
var seq49055__$1 = cljs.core.next(seq49055);
var G__49057 = cljs.core.first(seq49055__$1);
var seq49055__$2 = cljs.core.next(seq49055__$1);
var G__49058 = cljs.core.first(seq49055__$2);
var seq49055__$3 = cljs.core.next(seq49055__$2);
return taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__49056,G__49057,G__49058,seq49055__$3);
});

taoensso.encore.assoc_when.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (acc,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
} else {
return m;
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_when.cljs$lang$maxFixedArity = (3);


/**
 * Assocs each kv iff its key doesn't already exist.
 */
taoensso.encore.assoc_nx = (function taoensso$encore$assoc_nx(var_args){
var args49061 = [];
var len__8822__auto___49076 = arguments.length;
var i__8823__auto___49077 = (0);
while(true){
if((i__8823__auto___49077 < len__8822__auto___49076)){
args49061.push((arguments[i__8823__auto___49077]));

var G__49078 = (i__8823__auto___49077 + (1));
i__8823__auto___49077 = G__49078;
continue;
} else {
}
break;
}

var G__49067 = args49061.length;
switch (G__49067) {
case 3:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8845__auto__ = (new cljs.core.IndexedSeq(args49061.slice((3)),(0),null));
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8845__auto__);

}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if(cljs.core.contains_QMARK_(m,k)){
return m;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return taoensso.encore.reduce_kvs(taoensso.encore.assoc_nx,taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$3(m,k,v),kvs);
});

taoensso.encore.assoc_nx.cljs$lang$applyTo = (function (seq49062){
var G__49063 = cljs.core.first(seq49062);
var seq49062__$1 = cljs.core.next(seq49062);
var G__49064 = cljs.core.first(seq49062__$1);
var seq49062__$2 = cljs.core.next(seq49062__$1);
var G__49065 = cljs.core.first(seq49062__$2);
var seq49062__$3 = cljs.core.next(seq49062__$2);
return taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$variadic(G__49063,G__49064,G__49065,seq49062__$3);
});

taoensso.encore.assoc_nx.cljs$core$IFn$_invoke$arity$2 = (function (m,kvs){
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.contains_QMARK_(m__$1,k)){
return m__$1;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,v);
}
}),(((m == null))?cljs.core.PersistentArrayMap.EMPTY:m),kvs);
});

taoensso.encore.assoc_nx.cljs$lang$maxFixedArity = (3);

/**
 * Like `subvec` but never throws (snaps to valid start and end indexes).
 */
taoensso.encore.get_subvec = (function taoensso$encore$get_subvec(var_args){
var args49080 = [];
var len__8822__auto___49083 = arguments.length;
var i__8823__auto___49084 = (0);
while(true){
if((i__8823__auto___49084 < len__8822__auto___49083)){
args49080.push((arguments[i__8823__auto___49084]));

var G__49085 = (i__8823__auto___49084 + (1));
i__8823__auto___49084 = G__49085;
continue;
} else {
}
break;
}

var G__49082 = args49080.length;
switch (G__49082) {
case 2:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49080.length)].join('')));

}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.count(v);
if((start__$1 >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,vlen);
}
});

taoensso.encore.get_subvec.cljs$core$IFn$_invoke$arity$3 = (function (v,start,end){
var start__$1 = (((start < (0)))?(0):start);
var vlen = cljs.core.long$(cljs.core.count(v));
var end__$1 = (((end > vlen))?vlen:end);
if((start__$1 >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$1,end__$1);
}
});

taoensso.encore.get_subvec.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-subvec` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of vector.
 */
taoensso.encore.get_subvector = (function taoensso$encore$get_subvector(var_args){
var args49087 = [];
var len__8822__auto___49090 = arguments.length;
var i__8823__auto___49091 = (0);
while(true){
if((i__8823__auto___49091 < len__8822__auto___49090)){
args49087.push((arguments[i__8823__auto___49091]));

var G__49092 = (i__8823__auto___49091 + (1));
i__8823__auto___49091 = G__49092;
continue;
} else {
}
break;
}

var G__49089 = args49087.length;
switch (G__49089) {
case 2:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49087.length)].join('')));

}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$2 = (function (v,start){
var vlen = cljs.core.count(v);
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,vlen);
} else {
if((start >= vlen)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,vlen);
}
}
});

taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3 = (function (v,start,length){
if((length <= (0))){
return cljs.core.PersistentVector.EMPTY;
} else {
var vlen = cljs.core.long$(cljs.core.count(v));
if((start < (0))){
var start__$1 = (start + vlen);
var start__$2 = (((start__$1 < (0)))?(0):start__$1);
var end = (start__$2 + length);
var end__$1 = (((end > vlen))?vlen:end);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start__$2,end__$1);
} else {
var end = (start + length);
var end__$1 = (((end > vlen))?vlen:end);
if((start >= end__$1)){
return cljs.core.PersistentVector.EMPTY;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start,end__$1);
}
}
}
});

taoensso.encore.get_subvector.cljs$lang$maxFixedArity = 3;

taoensso.encore.vnext = (function taoensso$encore$vnext(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return null;
}
});
taoensso.encore.vrest = (function taoensso$encore$vrest(v){
if((cljs.core.count(v) > (1))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
taoensso.encore.vsplit_last = (function taoensso$encore$vsplit_last(v){
var c = cljs.core.count(v);
if((c > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((c > (1)))?cljs.core.pop(v):null),cljs.core.peek(v)], null);
} else {
return null;
}
});
taoensso.encore.vsplit_first = (function taoensso$encore$vsplit_first(v){
var c = cljs.core.count(v);
if((c > (0))){
var vec__49097 = v;
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49097,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v1,(((c > (1)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(1)):null)], null);
} else {
return null;
}
});
/**
 * Faster (f (vec (butlast xs)) (last x)).
 */
taoensso.encore.fsplit_last = (function taoensso$encore$fsplit_last(f,xs){
var butlast = cljs.core.PersistentVector.EMPTY;
var xs__$1 = xs;
while(true){
var vec__49103 = xs__$1;
var seq__49104 = cljs.core.seq(vec__49103);
var first__49105 = cljs.core.first(seq__49104);
var seq__49104__$1 = cljs.core.next(seq__49104);
var x1 = first__49105;
var xn = seq__49104__$1;
if(xn){
var G__49106 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(butlast,x1);
var G__49107 = xn;
butlast = G__49106;
xs__$1 = G__49107;
continue;
} else {
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(butlast,x1) : f.call(null,butlast,x1));
}
break;
}
});
taoensso.encore.takev = (function taoensso$encore$takev(n,coll){
if(cljs.core.vector_QMARK_(coll)){
return taoensso.encore.get_subvector.cljs$core$IFn$_invoke$arity$3(coll,(0),n);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$1(n),coll);
}
});
taoensso.encore.distinct_elements_QMARK_ = (function taoensso$encore$distinct_elements_QMARK_(x){
return (cljs.core.set_QMARK_(x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count((taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(x) : taoensso.encore.set_STAR_.call(null,x)))));
});
/**
 * (seq-kvs {:a :A}) => (:a :A).
 */
taoensso.encore.seq_kvs = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.concat);
/**
 * Like `apply` but calls `seq-kvs` on final arg.
 */
taoensso.encore.mapply = (function taoensso$encore$mapply(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49110 = arguments.length;
var i__8823__auto___49111 = (0);
while(true){
if((i__8823__auto___49111 < len__8822__auto___49110)){
args__8829__auto__.push((arguments[i__8823__auto___49111]));

var G__49112 = (i__8823__auto___49111 + (1));
i__8823__auto___49111 = G__49112;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,taoensso.encore.fsplit_last((function (xs,lx){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,(taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.seq_kvs.cljs$core$IFn$_invoke$arity$1(lx) : taoensso.encore.seq_kvs.call(null,lx)));
}),args));
});

taoensso.encore.mapply.cljs$lang$maxFixedArity = (1);

taoensso.encore.mapply.cljs$lang$applyTo = (function (seq49108){
var G__49109 = cljs.core.first(seq49108);
var seq49108__$1 = cljs.core.next(seq49108);
return taoensso.encore.mapply.cljs$core$IFn$_invoke$arity$variadic(G__49109,seq49108__$1);
});

/**
 * Like `into` but supports multiple "from"s.
 */
taoensso.encore.into_all = (function taoensso$encore$into_all(var_args){
var args49113 = [];
var len__8822__auto___49119 = arguments.length;
var i__8823__auto___49120 = (0);
while(true){
if((i__8823__auto___49120 < len__8822__auto___49119)){
args49113.push((arguments[i__8823__auto___49120]));

var G__49121 = (i__8823__auto___49120 + (1));
i__8823__auto___49120 = G__49121;
continue;
} else {
}
break;
}

var G__49118 = args49113.length;
switch (G__49118) {
case 2:
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8845__auto__ = (new cljs.core.IndexedSeq(args49113.slice((2)),(0),null));
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8845__auto__);

}
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(to,from);
});

taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic = (function (to,from,more){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,acc,in$);
}),cljs.core.transient$(to),cljs.core.cons(from,more)));
});

taoensso.encore.into_all.cljs$lang$applyTo = (function (seq49114){
var G__49115 = cljs.core.first(seq49114);
var seq49114__$1 = cljs.core.next(seq49114);
var G__49116 = cljs.core.first(seq49114__$1);
var seq49114__$2 = cljs.core.next(seq49114__$1);
return taoensso.encore.into_all.cljs$core$IFn$_invoke$arity$variadic(G__49115,G__49116,seq49114__$2);
});

taoensso.encore.into_all.cljs$lang$maxFixedArity = (2);

/**
 * Like `repeatedly` but faster and `conj`s items into given collection.
 */
taoensso.encore.repeatedly_into = (function taoensso$encore$repeatedly_into(coll,n,f){
if(((n > (10))) && (taoensso.encore.editable_QMARK_(coll))){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_n((function (acc,_){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),cljs.core.transient$(coll),n));
} else {
return taoensso.encore.reduce_n((function (acc,_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}),coll,n);
}
});
taoensso.encore.into_BANG_ = (function taoensso$encore$into_BANG_(var_args){
var args49123 = [];
var len__8822__auto___49126 = arguments.length;
var i__8823__auto___49127 = (0);
while(true){
if((i__8823__auto___49127 < len__8822__auto___49126)){
args49123.push((arguments[i__8823__auto___49127]));

var G__49128 = (i__8823__auto___49127 + (1));
i__8823__auto___49127 = G__49128;
continue;
} else {
}
break;
}

var G__49125 = args49123.length;
switch (G__49125) {
case 2:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49123.length)].join('')));

}
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (to,from){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (to,xform,from){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.conj_BANG_,to,from);
});

taoensso.encore.into_BANG_.cljs$lang$maxFixedArity = 3;

taoensso.encore.xdistinct = (function taoensso$encore$xdistinct(var_args){
var args49130 = [];
var len__8822__auto___49133 = arguments.length;
var i__8823__auto___49134 = (0);
while(true){
if((i__8823__auto___49134 < len__8822__auto___49133)){
args49130.push((arguments[i__8823__auto___49134]));

var G__49135 = (i__8823__auto___49134 + (1));
i__8823__auto___49134 = G__49135;
continue;
} else {
}
break;
}

var G__49132 = args49130.length;
switch (G__49132) {
case 0:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49130.length)].join('')));

}
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$0();
});

taoensso.encore.xdistinct.cljs$core$IFn$_invoke$arity$1 = (function (keyfn){
return (function (rf){
var seen_ = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
return ((function (seen_){
return (function() {
var G__49137 = null;
var G__49137__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__49137__1 = (function (acc){
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(acc) : rf.call(null,acc));
});
var G__49137__2 = (function (acc,input){
var k = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(input) : keyfn.call(null,input));
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(seen_) : cljs.core.deref.call(null,seen_)),k)){
return acc;
} else {
cljs.core._vreset_BANG_(seen_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(seen_),k));

return (rf.cljs$core$IFn$_invoke$arity$2 ? rf.cljs$core$IFn$_invoke$arity$2(acc,input) : rf.call(null,acc,input));
}
});
G__49137 = function(acc,input){
switch(arguments.length){
case 0:
return G__49137__0.call(this);
case 1:
return G__49137__1.call(this,acc);
case 2:
return G__49137__2.call(this,acc,input);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__49137.cljs$core$IFn$_invoke$arity$0 = G__49137__0;
G__49137.cljs$core$IFn$_invoke$arity$1 = G__49137__1;
G__49137.cljs$core$IFn$_invoke$arity$2 = G__49137__2;
return G__49137;
})()
;})(seen_))
});
});

taoensso.encore.xdistinct.cljs$lang$maxFixedArity = 1;

taoensso.encore.map_vals = (function taoensso$encore$map_vals(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v)));
}),m,m);
}
});

taoensso.encore.map_keys = (function taoensso$encore$map_keys(f,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
}
});

taoensso.encore.filter_keys = (function taoensso$encore$filter_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.filter_vals = (function taoensso$encore$filter_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_keys = (function taoensso$encore$remove_keys(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.remove_vals = (function taoensso$encore$remove_vals(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});
taoensso.encore.ks_EQ_ = (function taoensso$encore$ks_EQ_(ks,m){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_LT__EQ_ = (function taoensso$encore$ks_LT__EQ_(ks,m){
return clojure.set.subset_QMARK_(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_GT__EQ_ = (function taoensso$encore$ks_GT__EQ_(ks,m){
return clojure.set.superset_QMARK_(cljs.core.set(cljs.core.keys(m)),(taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(ks) : taoensso.encore.set_STAR_.call(null,ks)));
});

taoensso.encore.ks_nnil_QMARK_ = (function taoensso$encore$ks_nnil_QMARK_(ks,m){
return taoensso.encore.revery_QMARK_((function (p1__49138_SHARP_){
return taoensso.encore.some_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,p1__49138_SHARP_));
}),ks);
});
/**
 * Like `core/update-in` but resolves an ambiguity with empty `ks`,
 *   adds support for `not-found`, `:swap/dissoc` vals.
 */
taoensso.encore.update_in = (function taoensso$encore$update_in(var_args){
var args49139 = [];
var len__8822__auto___49147 = arguments.length;
var i__8823__auto___49148 = (0);
while(true){
if((i__8823__auto___49148 < len__8822__auto___49147)){
args49139.push((arguments[i__8823__auto___49148]));

var G__49149 = (i__8823__auto___49148 + (1));
i__8823__auto___49148 = G__49149;
continue;
} else {
}
break;
}

var G__49141 = args49139.length;
switch (G__49141) {
case 3:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49139.length)].join('')));

}
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,f){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,f);
});

taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4 = (function (m,ks,not_found,f){
var b2__47185__auto__ = cljs.core.seq(ks);
if(b2__47185__auto__){
var ks_seq = b2__47185__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0));
var b2__47185__auto____$1 = cljs.core.next(ks_seq);
if(b2__47185__auto____$1){
var ks__$1 = b2__47185__auto____$1;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks__$1,not_found,f));
} else {
if(cljs.core.truth_((function (){var G__49142 = f;
var G__49143 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49142,G__49143) : taoensso.encore.kw_identical_QMARK_.call(null,G__49142,G__49143));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
var v = (function (){var G__49144 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k,not_found);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__49144) : f.call(null,G__49144));
})();
if(cljs.core.truth_((function (){var G__49145 = v;
var G__49146 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49145,G__49146) : taoensso.encore.kw_identical_QMARK_.call(null,G__49145,G__49146));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,v);
}
}
}
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(m) : f.call(null,m));
}
});

taoensso.encore.update_in.cljs$lang$maxFixedArity = 4;

taoensso.encore.contains_in_QMARK_ = (function taoensso$encore$contains_in_QMARK_(var_args){
var args49151 = [];
var len__8822__auto___49154 = arguments.length;
var i__8823__auto___49155 = (0);
while(true){
if((i__8823__auto___49155 < len__8822__auto___49154)){
args49151.push((arguments[i__8823__auto___49155]));

var G__49156 = (i__8823__auto___49155 + (1));
i__8823__auto___49155 = G__49156;
continue;
} else {
}
break;
}

var G__49153 = args49151.length;
switch (G__49153) {
case 3:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49151.length)].join('')));

}
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (coll,ks,k){
return cljs.core.contains_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(coll,ks),k);
});

taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (coll,ks){
if(cljs.core.seq(ks)){
return taoensso.encore.fsplit_last((function (ks__$1,lk){
return taoensso.encore.contains_in_QMARK_.cljs$core$IFn$_invoke$arity$3(coll,ks__$1,lk);
}),ks);
} else {
return false;
}
});

taoensso.encore.contains_in_QMARK_.cljs$lang$maxFixedArity = 3;

taoensso.encore.dissoc_in = (function taoensso$encore$dissoc_in(var_args){
var args49158 = [];
var len__8822__auto___49165 = arguments.length;
var i__8823__auto___49166 = (0);
while(true){
if((i__8823__auto___49166 < len__8822__auto___49165)){
args49158.push((arguments[i__8823__auto___49166]));

var G__49167 = (i__8823__auto___49166 + (1));
i__8823__auto___49166 = G__49167;
continue;
} else {
}
break;
}

var G__49164 = args49158.length;
switch (G__49164) {
case 3:
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__8845__auto__ = (new cljs.core.IndexedSeq(args49158.slice((3)),(0),null));
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8845__auto__);

}
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3 = (function (m,ks,dissoc_k){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,dissoc_k);
}));
});

taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ks,dissoc_k,more){
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m,ks,null,(function (m__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.dissoc,m__$1,dissoc_k,more);
}));
});

taoensso.encore.dissoc_in.cljs$lang$applyTo = (function (seq49159){
var G__49160 = cljs.core.first(seq49159);
var seq49159__$1 = cljs.core.next(seq49159);
var G__49161 = cljs.core.first(seq49159__$1);
var seq49159__$2 = cljs.core.next(seq49159__$1);
var G__49162 = cljs.core.first(seq49159__$2);
var seq49159__$3 = cljs.core.next(seq49159__$2);
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$variadic(G__49160,G__49161,G__49162,seq49159__$3);
});

taoensso.encore.dissoc_in.cljs$lang$maxFixedArity = (3);

/**
 * Greedy version of `interleave`.
 */
taoensso.encore.interleave_all = (function taoensso$encore$interleave_all(var_args){
var args49169 = [];
var len__8822__auto___49175 = arguments.length;
var i__8823__auto___49176 = (0);
while(true){
if((i__8823__auto___49176 < len__8822__auto___49175)){
args49169.push((arguments[i__8823__auto___49176]));

var G__49177 = (i__8823__auto___49176 + (1));
i__8823__auto___49176 = G__49177;
continue;
} else {
}
break;
}

var G__49174 = args49169.length;
switch (G__49174) {
case 0:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8845__auto__ = (new cljs.core.IndexedSeq(args49169.slice((2)),(0),null));
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8845__auto__);

}
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
if((s1) && (s2)){
return cljs.core.cons(cljs.core.first(s1),cljs.core.cons(cljs.core.first(s2),taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(s1),cljs.core.rest(s2))));
} else {
if(s1){
return s1;
} else {
if(s2){
return s2;
} else {
return null;
}
}
}
}),null,null));
});

taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(colls,c2,cljs.core.array_seq([c1], 0))));
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,ss),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(taoensso.encore.interleave_all,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,ss)));
}),null,null));
});

taoensso.encore.interleave_all.cljs$lang$applyTo = (function (seq49170){
var G__49171 = cljs.core.first(seq49170);
var seq49170__$1 = cljs.core.next(seq49170);
var G__49172 = cljs.core.first(seq49170__$1);
var seq49170__$2 = cljs.core.next(seq49170__$1);
return taoensso.encore.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__49171,G__49172,seq49170__$2);
});

taoensso.encore.interleave_all.cljs$lang$maxFixedArity = (2);

taoensso.encore.vinterleave_all = (function taoensso$encore$vinterleave_all(c1,c2){
var v = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s1 = cljs.core.seq(c1);
var s2 = cljs.core.seq(c2);
while(true){
if((s1) && (s2)){
var G__49179 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.first(s1)),cljs.core.first(s2));
var G__49180 = cljs.core.next(s1);
var G__49181 = cljs.core.next(s2);
v = G__49179;
s1 = G__49180;
s2 = G__49181;
continue;
} else {
if(s1){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s1));
} else {
if(s2){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,v,s2));
} else {
return cljs.core.persistent_BANG_(v);
}
}
}
break;
}
});
var not_found_49200 = {};
taoensso.encore._merge_with = ((function (not_found_49200){
return (function taoensso$encore$_merge_with(nest_QMARK_,f,maps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (not_found_49200){
return (function (acc,in$){
if((in$ == null)){
return acc;
} else {
return cljs.core.reduce_kv(((function (not_found_49200){
return (function taoensso$encore$_merge_with_$_rf2(acc__$1,k,rv){
var lv = cljs.core.get.cljs$core$IFn$_invoke$arity$3(acc__$1,k,not_found_49200);
if((lv === not_found_49200)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,rv);
} else {
if(cljs.core.truth_((function (){var G__49196 = rv;
var G__49197 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49196,G__49197) : taoensso.encore.kw_identical_QMARK_.call(null,G__49196,G__49197));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
if(cljs.core.truth_((function (){var and__7589__auto__ = nest_QMARK_;
if(cljs.core.truth_(and__7589__auto__)){
return (cljs.core.map_QMARK_(rv)) && (cljs.core.map_QMARK_(lv));
} else {
return and__7589__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,cljs.core.reduce_kv(taoensso$encore$_merge_with_$_rf2,lv,rv));
} else {
var new_rv = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(lv,rv) : f.call(null,lv,rv));
if(cljs.core.truth_((function (){var G__49198 = new_rv;
var G__49199 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49198,G__49199) : taoensso.encore.kw_identical_QMARK_.call(null,G__49198,G__49199));
})())){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc__$1,k,new_rv);
}
}
}
}
});})(not_found_49200))
,(function (){var or__7601__auto__ = acc;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),in$);
}
});})(not_found_49200))
,null,maps);
});})(not_found_49200))
;
/**
 * Like `core/merge` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge = (function taoensso$encore$merge(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49207 = arguments.length;
var i__8823__auto___49208 = (0);
while(true){
if((i__8823__auto___49208 < len__8822__auto___49207)){
args__8829__auto__.push((arguments[i__8823__auto___49208]));

var G__49209 = (i__8823__auto___49208 + (1));
i__8823__auto___49208 = G__49209;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(false,(function (x,y){
return y;
}),maps);
});

taoensso.encore.merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.merge.cljs$lang$applyTo = (function (seq49201){
return taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49201));
});


/**
 * Like `core/merge-with` but faster, supports `:swap/dissoc` rvals.
 */
taoensso.encore.merge_with = (function taoensso$encore$merge_with(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49210 = arguments.length;
var i__8823__auto___49211 = (0);
while(true){
if((i__8823__auto___49211 < len__8822__auto___49210)){
args__8829__auto__.push((arguments[i__8823__auto___49211]));

var G__49212 = (i__8823__auto___49211 + (1));
i__8823__auto___49211 = G__49212;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(false,f,maps);
});

taoensso.encore.merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.merge_with.cljs$lang$applyTo = (function (seq49202){
var G__49203 = cljs.core.first(seq49202);
var seq49202__$1 = cljs.core.next(seq49202);
return taoensso.encore.merge_with.cljs$core$IFn$_invoke$arity$variadic(G__49203,seq49202__$1);
});


/**
 * Like `merge` but does nested merging.
 */
taoensso.encore.nested_merge = (function taoensso$encore$nested_merge(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49213 = arguments.length;
var i__8823__auto___49214 = (0);
while(true){
if((i__8823__auto___49214 < len__8822__auto___49213)){
args__8829__auto__.push((arguments[i__8823__auto___49214]));

var G__49215 = (i__8823__auto___49214 + (1));
i__8823__auto___49214 = G__49215;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return taoensso.encore._merge_with(cljs.core.cst$kw$nest,(function (x,y){
return y;
}),maps);
});

taoensso.encore.nested_merge.cljs$lang$maxFixedArity = (0);

taoensso.encore.nested_merge.cljs$lang$applyTo = (function (seq49204){
return taoensso.encore.nested_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49204));
});


/**
 * Like `merge-with` but does nested merging.
 */
taoensso.encore.nested_merge_with = (function taoensso$encore$nested_merge_with(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49216 = arguments.length;
var i__8823__auto___49217 = (0);
while(true){
if((i__8823__auto___49217 < len__8822__auto___49216)){
args__8829__auto__.push((arguments[i__8823__auto___49217]));

var G__49218 = (i__8823__auto___49217 + (1));
i__8823__auto___49217 = G__49218;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (f,maps){
return taoensso.encore._merge_with(cljs.core.cst$kw$nest,f,maps);
});

taoensso.encore.nested_merge_with.cljs$lang$maxFixedArity = (1);

taoensso.encore.nested_merge_with.cljs$lang$applyTo = (function (seq49205){
var G__49206 = cljs.core.first(seq49205);
var seq49205__$1 = cljs.core.next(seq49205);
return taoensso.encore.nested_merge_with.cljs$core$IFn$_invoke$arity$variadic(G__49206,seq49205__$1);
});


/**
* @constructor
*/
taoensso.encore.Swapped = (function (newv,returnv){
this.newv = newv;
this.returnv = returnv;
})

taoensso.encore.Swapped.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$newv,cljs.core.cst$sym$returnv], null);
});

taoensso.encore.Swapped.cljs$lang$type = true;

taoensso.encore.Swapped.cljs$lang$ctorStr = "taoensso.encore/Swapped";

taoensso.encore.Swapped.cljs$lang$ctorPrWriter = (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"taoensso.encore/Swapped");
});

taoensso.encore.__GT_Swapped = (function taoensso$encore$__GT_Swapped(newv,returnv){
return (new taoensso.encore.Swapped(newv,returnv));
});


taoensso.encore.swapped_QMARK_ = (function taoensso$encore$swapped_QMARK_(x){
return (x instanceof taoensso.encore.Swapped);
});

taoensso.encore.swapped = (function taoensso$encore$swapped(new_val,return_val){
return (new taoensso.encore.Swapped(new_val,return_val));
});

taoensso.encore.swapped_vec = (function taoensso$encore$swapped_vec(x){
if((x instanceof taoensso.encore.Swapped)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x.newv,x.returnv], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,x], null);
}
});

taoensso.encore.atom_tag = cljs.core.cst$sym$clojure$lang$IAtom;
/**
 * Used internally by memoization utils.
 */
taoensso.encore._swap_val_BANG_ = (function taoensso$encore$_swap_val_BANG_(atom_,k,f){
while(true){
var m0 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var v1 = (function (){var G__49220 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m0,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__49220) : f.call(null,G__49220));
})();
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,m1) : cljs.core.reset_BANG_.call(null,atom_,m1));

return true;
})()
){
return v1;
} else {
continue;
}
break;
}
});
taoensso.encore._swap_k0_BANG_ = (function taoensso$encore$_swap_k0_BANG_(return$,atom_,f){
while(true){
var v0 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,v1) : cljs.core.reset_BANG_.call(null,atom_,v1));

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
});

taoensso.encore._reset_k0_BANG_ = (function taoensso$encore$_reset_k0_BANG_(return$,atom_,v1){
while(true){
var v0 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,v1) : cljs.core.reset_BANG_.call(null,atom_,v1));

return true;
})()
){
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
} else {
continue;
}
break;
}
});

taoensso.encore._swap_k1_BANG_ = (function taoensso$encore$_swap_k1_BANG_(return$,atom_,k,not_found,f){
if(cljs.core.truth_((function (){var G__49227 = f;
var G__49228 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49227,G__49228) : taoensso.encore.kw_identical_QMARK_.call(null,G__49227,G__49228));
})())){
while(true){
var m0 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var m1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k);
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,m1) : cljs.core.reset_BANG_.call(null,atom_,m1));

return true;
})()
){
var G__49229 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__49230 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__49229,G__49230) : return$.call(null,G__49229,G__49230));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var v0 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_((function (){var G__49231 = v1;
var G__49232 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49231,G__49232) : taoensso.encore.kw_identical_QMARK_.call(null,G__49231,G__49232));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m0,k):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1));
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,m1) : cljs.core.reset_BANG_.call(null,atom_,m1));

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
}
});

taoensso.encore._reset_k1_BANG_ = (function taoensso$encore$_reset_k1_BANG_(return$,atom_,k,not_found,v1){
while(true){
var m0 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var m1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m0,k,v1);
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,m1) : cljs.core.reset_BANG_.call(null,atom_,m1));

return true;
})()
){
var G__49235 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m0,k,not_found);
var G__49236 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__49235,G__49236) : return$.call(null,G__49235,G__49236));
} else {
continue;
}
break;
}
});

taoensso.encore._swap_kn_BANG_ = (function taoensso$encore$_swap_kn_BANG_(return$,atom_,ks,not_found,f){
var b2__47185__auto__ = cljs.core.seq(ks);
if(b2__47185__auto__){
var ks_seq = b2__47185__auto__;
if(cljs.core.next(ks_seq)){
if(cljs.core.truth_((function (){var G__49243 = f;
var G__49244 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49243,G__49244) : taoensso.encore.kw_identical_QMARK_.call(null,G__49243,G__49244));
})())){
while(true){
var m0 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var m1 = taoensso.encore.fsplit_last(((function (m0,ks_seq,b2__47185__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,ks_seq,b2__47185__auto__))
,ks);
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,m1) : cljs.core.reset_BANG_.call(null,atom_,m1));

return true;
})()
){
var G__49245 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__49246 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__49245,G__49246) : return$.call(null,G__49245,G__49246));
} else {
continue;
}
break;
}
} else {
while(true){
var m0 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var v0 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var s1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v0) : f.call(null,v0));
var sw_QMARK_ = (s1 instanceof taoensso.encore.Swapped);
var v1 = ((sw_QMARK_)?s1.newv:s1);
var m1 = (cljs.core.truth_((function (){var G__49247 = v1;
var G__49248 = cljs.core.cst$kw$swap_SLASH_dissoc;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49247,G__49248) : taoensso.encore.kw_identical_QMARK_.call(null,G__49247,G__49248));
})())?taoensso.encore.fsplit_last(((function (m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__47185__auto__){
return (function (ks__$1,lk){
return taoensso.encore.dissoc_in.cljs$core$IFn$_invoke$arity$3(m0,ks__$1,lk);
});})(m0,v0,s1,sw_QMARK_,v1,ks_seq,b2__47185__auto__))
,ks):cljs.core.assoc_in(m0,ks,v1));
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,m1) : cljs.core.reset_BANG_.call(null,atom_,m1));

return true;
})()
){
if(sw_QMARK_){
return s1.returnv;
} else {
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(v0,v1) : return$.call(null,v0,v1));
}
} else {
continue;
}
break;
}
}
} else {
return taoensso.encore._swap_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,f);
}
} else {
return taoensso.encore._swap_k0_BANG_(return$,atom_,f);
}
});

taoensso.encore._reset_kn_BANG_ = (function taoensso$encore$_reset_kn_BANG_(return$,atom_,ks,not_found,v1){
var b2__47185__auto__ = cljs.core.seq(ks);
if(b2__47185__auto__){
var ks_seq = b2__47185__auto__;
if(cljs.core.next(ks_seq)){
while(true){
var m0 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom_) : cljs.core.deref.call(null,atom_));
var m1 = cljs.core.assoc_in(m0,ks,v1);
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(atom_,m1) : cljs.core.reset_BANG_.call(null,atom_,m1));

return true;
})()
){
var G__49251 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m0,ks,not_found);
var G__49252 = v1;
return (return$.cljs$core$IFn$_invoke$arity$2 ? return$.cljs$core$IFn$_invoke$arity$2(G__49251,G__49252) : return$.call(null,G__49251,G__49252));
} else {
continue;
}
break;
}
} else {
return taoensso.encore._reset_k1_BANG_(return$,atom_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ks,(0)),not_found,v1);
}
} else {
return taoensso.encore._reset_k0_BANG_(return$,atom_,v1);
}
});
var return_49256 = (function (v0,v1){
return v1;
});
/**
 * Low-level util, returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_val_BANG_ = ((function (return_49256){
return (function taoensso$encore$swap_val_BANG_(var_args){
var args49253 = [];
var len__8822__auto___49257 = arguments.length;
var i__8823__auto___49258 = (0);
while(true){
if((i__8823__auto___49258 < len__8822__auto___49257)){
args49253.push((arguments[i__8823__auto___49258]));

var G__49259 = (i__8823__auto___49258 + (1));
i__8823__auto___49258 = G__49259;
continue;
} else {
}
break;
}

var G__49255 = args49253.length;
switch (G__49255) {
case 3:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49253.length)].join('')));

}
});})(return_49256))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_49256){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_49256,atom_,k,null,f);
});})(return_49256))
;

taoensso.encore.swap_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_49256){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_49256,atom_,k,not_found,f);
});})(return_49256))
;

taoensso.encore.swap_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_49264 = (function (v0,v1){
return v0;
});
/**
 * Low-level util, returns <old-key-val>.
 */
taoensso.encore.reset_val_BANG_ = ((function (return_49264){
return (function taoensso$encore$reset_val_BANG_(var_args){
var args49261 = [];
var len__8822__auto___49265 = arguments.length;
var i__8823__auto___49266 = (0);
while(true){
if((i__8823__auto___49266 < len__8822__auto___49265)){
args49261.push((arguments[i__8823__auto___49266]));

var G__49267 = (i__8823__auto___49266 + (1));
i__8823__auto___49266 = G__49267;
continue;
} else {
}
break;
}

var G__49263 = args49261.length;
switch (G__49263) {
case 3:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49261.length)].join('')));

}
});})(return_49264))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_49264){
return (function (atom_,k,val){
return taoensso.encore._reset_k1_BANG_(return_49264,atom_,k,null,val);
});})(return_49264))
;

taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_49264){
return (function (atom_,k,not_found,val){
return taoensso.encore._reset_k1_BANG_(return_49264,atom_,k,not_found,val);
});})(return_49264))
;

taoensso.encore.reset_val_BANG_.cljs$lang$maxFixedArity = 4;

var return_49272 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Low-level util, returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_val_BANG__STAR_ = ((function (return_49272){
return (function taoensso$encore$swap_val_BANG__STAR_(var_args){
var args49269 = [];
var len__8822__auto___49273 = arguments.length;
var i__8823__auto___49274 = (0);
while(true){
if((i__8823__auto___49274 < len__8822__auto___49273)){
args49269.push((arguments[i__8823__auto___49274]));

var G__49275 = (i__8823__auto___49274 + (1));
i__8823__auto___49274 = G__49275;
continue;
} else {
}
break;
}

var G__49271 = args49269.length;
switch (G__49271) {
case 3:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49269.length)].join('')));

}
});})(return_49272))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_49272){
return (function (atom_,k,f){
return taoensso.encore._swap_k1_BANG_(return_49272,atom_,k,null,f);
});})(return_49272))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_49272){
return (function (atom_,k,not_found,f){
return taoensso.encore._swap_k1_BANG_(return_49272,atom_,k,not_found,f);
});})(return_49272))
;

taoensso.encore.swap_val_BANG__STAR_.cljs$lang$maxFixedArity = 4;

/**
 * Removes and returns value mapped to key.
 */
taoensso.encore.pull_val_BANG_ = (function taoensso$encore$pull_val_BANG_(var_args){
var args49277 = [];
var len__8822__auto___49283 = arguments.length;
var i__8823__auto___49284 = (0);
while(true){
if((i__8823__auto___49284 < len__8822__auto___49283)){
args49277.push((arguments[i__8823__auto___49284]));

var G__49285 = (i__8823__auto___49284 + (1));
i__8823__auto___49284 = G__49285;
continue;
} else {
}
break;
}

var G__49279 = args49277.length;
switch (G__49279) {
case 2:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49277.length)].join('')));

}
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom_,k){
return taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3(atom_,k,null);
});

taoensso.encore.pull_val_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (atom_,k,not_found){
var vec__49280 = taoensso.encore.swap_val_BANG__STAR_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found,cljs.core.cst$kw$swap_SLASH_dissoc);
var v0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49280,(0),null);
return v0;
});

taoensso.encore.pull_val_BANG_.cljs$lang$maxFixedArity = 3;

var not_found_49289 = {};
/**
 * Maps value to key and returns true iff the mapped value changed or
 *  was created.
 */
taoensso.encore.reset_val_BANG__QMARK_ = ((function (not_found_49289){
return (function taoensso$encore$reset_val_BANG__QMARK_(atom_,k,new_val){
var v0 = taoensso.encore.reset_val_BANG_.cljs$core$IFn$_invoke$arity$4(atom_,k,not_found_49289,new_val);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v0,new_val)){
return false;
} else {
return true;
}
});})(not_found_49289))
;
var return_49293 = (function (v0,v1){
return v1;
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns <new-key-val> or <swapped-return-val>.
 */
taoensso.encore.swap_in_BANG_ = ((function (return_49293){
return (function taoensso$encore$swap_in_BANG_(var_args){
var args49290 = [];
var len__8822__auto___49294 = arguments.length;
var i__8823__auto___49295 = (0);
while(true){
if((i__8823__auto___49295 < len__8822__auto___49294)){
args49290.push((arguments[i__8823__auto___49295]));

var G__49296 = (i__8823__auto___49295 + (1));
i__8823__auto___49295 = G__49296;
continue;
} else {
}
break;
}

var G__49292 = args49290.length;
switch (G__49292) {
case 2:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49290.length)].join('')));

}
});})(return_49293))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_49293){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_49293,atom_,f);
});})(return_49293))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_49293){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_49293,atom_,ks,null,f);
});})(return_49293))
;

taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_49293){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_49293,atom_,ks,not_found,f);
});})(return_49293))
;

taoensso.encore.swap_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_49301 = (function (v0,v1){
return v0;
});
/**
 * Like `reset!` but supports `update-in` semantics,
 *  returns <old-key-val>.
 */
taoensso.encore.reset_in_BANG_ = ((function (return_49301){
return (function taoensso$encore$reset_in_BANG_(var_args){
var args49298 = [];
var len__8822__auto___49302 = arguments.length;
var i__8823__auto___49303 = (0);
while(true){
if((i__8823__auto___49303 < len__8822__auto___49302)){
args49298.push((arguments[i__8823__auto___49303]));

var G__49304 = (i__8823__auto___49303 + (1));
i__8823__auto___49303 = G__49304;
continue;
} else {
}
break;
}

var G__49300 = args49298.length;
switch (G__49300) {
case 2:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49298.length)].join('')));

}
});})(return_49301))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$2 = ((function (return_49301){
return (function (atom_,val){
return taoensso.encore._reset_k0_BANG_(return_49301,atom_,val);
});})(return_49301))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3 = ((function (return_49301){
return (function (atom_,ks,val){
return taoensso.encore._reset_kn_BANG_(return_49301,atom_,ks,null,val);
});})(return_49301))
;

taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$4 = ((function (return_49301){
return (function (atom_,ks,not_found,val){
return taoensso.encore._reset_kn_BANG_(return_49301,atom_,ks,not_found,val);
});})(return_49301))
;

taoensso.encore.reset_in_BANG_.cljs$lang$maxFixedArity = 4;

var return_49309 = (function (v0,v1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v0,v1], null);
});
/**
 * Like `swap!` but supports `update-in` semantics,
 *  returns [<old-key-val> <new-key-val>].
 */
taoensso.encore.swap_in_BANG__STAR_ = ((function (return_49309){
return (function taoensso$encore$swap_in_BANG__STAR_(var_args){
var args49306 = [];
var len__8822__auto___49310 = arguments.length;
var i__8823__auto___49311 = (0);
while(true){
if((i__8823__auto___49311 < len__8822__auto___49310)){
args49306.push((arguments[i__8823__auto___49311]));

var G__49312 = (i__8823__auto___49311 + (1));
i__8823__auto___49311 = G__49312;
continue;
} else {
}
break;
}

var G__49308 = args49306.length;
switch (G__49308) {
case 2:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49306.length)].join('')));

}
});})(return_49309))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$2 = ((function (return_49309){
return (function (atom_,f){
return taoensso.encore._swap_k0_BANG_(return_49309,atom_,f);
});})(return_49309))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$3 = ((function (return_49309){
return (function (atom_,ks,f){
return taoensso.encore._swap_kn_BANG_(return_49309,atom_,ks,null,f);
});})(return_49309))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$core$IFn$_invoke$arity$4 = ((function (return_49309){
return (function (atom_,ks,not_found,f){
return taoensso.encore._swap_kn_BANG_(return_49309,atom_,ks,not_found,f);
});})(return_49309))
;

taoensso.encore.swap_in_BANG__STAR_.cljs$lang$maxFixedArity = 4;

taoensso.encore.now_dt = (function taoensso$encore$now_dt(){
return (new Date());
});

taoensso.encore.now_udt = (function taoensso$encore$now_udt(){
return (new Date()).getTime();
});

/**
 * Uses window context as epoch, Ref. http://goo.gl/mWZWnR
 */
taoensso.encore.now_nano = (function (){var b2__47185__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(taoensso.encore.js__QMARK_win,"performance");
if(cljs.core.truth_(b2__47185__auto__)){
var perf = b2__47185__auto__;
var b2__47185__auto____$1 = (function (){var or__7601__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"now");
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"mozNow");
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
var or__7601__auto____$2 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"msNow");
if(cljs.core.truth_(or__7601__auto____$2)){
return or__7601__auto____$2;
} else {
var or__7601__auto____$3 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"oNow");
if(cljs.core.truth_(or__7601__auto____$3)){
return or__7601__auto____$3;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(perf,"webkitNow");
}
}
}
}
})();
if(cljs.core.truth_(b2__47185__auto____$1)){
var f = b2__47185__auto____$1;
return ((function (f,b2__47185__auto____$1,perf,b2__47185__auto__){
return (function (){
return ((1000000) * cljs.core.long$(f.call(perf)));
});
;})(f,b2__47185__auto____$1,perf,b2__47185__auto__))
} else {
return ((function (b2__47185__auto____$1,perf,b2__47185__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__47185__auto____$1,perf,b2__47185__auto__))
}
} else {
return ((function (b2__47185__auto__){
return (function (){
return ((1000000) * (new Date()).getTime());
});
;})(b2__47185__auto__))
}
})();
/**
 * Like `core/memoize` but faster, non-racy, and supports invalidation.
 */
taoensso.encore.memoize_ = (function taoensso$encore$memoize_(f){
var cache_ = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var get_sentinel = {};
return ((function (cache_,get_sentinel){
return (function() { 
var G__49330__delegate = function (xs){
var x1 = cljs.core.first(xs);
if(cljs.core.truth_((function (){var G__49324 = x1;
var G__49325 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49324,G__49325) : taoensso.encore.kw_identical_QMARK_.call(null,G__49324,G__49325));
})())){
var xn = cljs.core.next(xs);
var x2 = cljs.core.first(xn);
if(cljs.core.truth_((function (){var G__49326 = x2;
var G__49327 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49326,G__49327) : taoensso.encore.kw_identical_QMARK_.call(null,G__49326,G__49327));
})())){
cljs.core.vreset_BANG_(cache_,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core._vreset_BANG_(cache_,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(cache_),xn));
}

return null;
} else {
if(cljs.core.truth_((function (){var G__49328 = x1;
var G__49329 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49328,G__49329) : taoensso.encore.kw_identical_QMARK_.call(null,G__49328,G__49329));
})())){
var xn = cljs.core.next(xs);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xn);
cljs.core._vreset_BANG_(cache_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_),xn,v));

return v;
} else {
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_)),xs,get_sentinel);
if((v === get_sentinel)){
var v__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,xs);
cljs.core._vreset_BANG_(cache_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(cache_),xs,v__$1));

return v__$1;
} else {
return v;
}
}
}
};
var G__49330 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__49331__i = 0, G__49331__a = new Array(arguments.length -  0);
while (G__49331__i < G__49331__a.length) {G__49331__a[G__49331__i] = arguments[G__49331__i + 0]; ++G__49331__i;}
  xs = new cljs.core.IndexedSeq(G__49331__a,0);
} 
return G__49330__delegate.call(this,xs);};
G__49330.cljs$lang$maxFixedArity = 0;
G__49330.cljs$lang$applyTo = (function (arglist__49332){
var xs = cljs.core.seq(arglist__49332);
return G__49330__delegate(xs);
});
G__49330.cljs$core$IFn$_invoke$arity$variadic = G__49330__delegate;
return G__49330;
})()
;
;})(cache_,get_sentinel))
});
/**
 * Like `memoize` but only caches the fn's most recent call.
 *   Great for Reactjs render op caching on mobile devices, etc.
 */
taoensso.encore.memoize_last = (function taoensso$encore$memoize_last(f){
var cache_ = (function (){var G__49335 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49335) : cljs.core.atom.call(null,G__49335));
})();
return ((function (cache_){
return (function() { 
var G__49337__delegate = function (args){
var G__49336 = (function (){var or__7601__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_)),args);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (or__7601__auto__,cache_){
return (function (cache){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cache,args))){
return cache;
} else {
return cljs.core.PersistentArrayMap.createAsIfByAssoc([args,(new cljs.core.Delay(((function (or__7601__auto__,cache_){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
});})(or__7601__auto__,cache_))
,null))]);
}
});})(or__7601__auto__,cache_))
),args);
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__49336) : cljs.core.deref.call(null,G__49336));
};
var G__49337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49338__i = 0, G__49338__a = new Array(arguments.length -  0);
while (G__49338__i < G__49338__a.length) {G__49338__a[G__49338__i] = arguments[G__49338__i + 0]; ++G__49338__i;}
  args = new cljs.core.IndexedSeq(G__49338__a,0);
} 
return G__49337__delegate.call(this,args);};
G__49337.cljs$lang$maxFixedArity = 0;
G__49337.cljs$lang$applyTo = (function (arglist__49339){
var args = cljs.core.seq(arglist__49339);
return G__49337__delegate(args);
});
G__49337.cljs$core$IFn$_invoke$arity$variadic = G__49337__delegate;
return G__49337;
})()
;
;})(cache_))
});

/**
* @constructor
*/
taoensso.encore.SimpleCacheEntry = (function (delay,udt){
this.delay = delay;
this.udt = udt;
})

taoensso.encore.SimpleCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$delay,cljs.core.with_meta(cljs.core.cst$sym$udt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.SimpleCacheEntry.cljs$lang$type = true;

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorStr = "taoensso.encore/SimpleCacheEntry";

taoensso.encore.SimpleCacheEntry.cljs$lang$ctorPrWriter = (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"taoensso.encore/SimpleCacheEntry");
});

taoensso.encore.__GT_SimpleCacheEntry = (function taoensso$encore$__GT_SimpleCacheEntry(delay,udt){
return (new taoensso.encore.SimpleCacheEntry(delay,udt));
});


/**
* @constructor
*/
taoensso.encore.TickedCacheEntry = (function (delay,udt,tick_lru,tick_lfu){
this.delay = delay;
this.udt = udt;
this.tick_lru = tick_lru;
this.tick_lfu = tick_lfu;
})

taoensso.encore.TickedCacheEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$delay,cljs.core.with_meta(cljs.core.cst$sym$udt,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$tick_DASH_lru,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$tick_DASH_lfu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.TickedCacheEntry.cljs$lang$type = true;

taoensso.encore.TickedCacheEntry.cljs$lang$ctorStr = "taoensso.encore/TickedCacheEntry";

taoensso.encore.TickedCacheEntry.cljs$lang$ctorPrWriter = (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"taoensso.encore/TickedCacheEntry");
});

taoensso.encore.__GT_TickedCacheEntry = (function taoensso$encore$__GT_TickedCacheEntry(delay,udt,tick_lru,tick_lfu){
return (new taoensso.encore.TickedCacheEntry(delay,udt,tick_lru,tick_lfu));
});

/**
 * Like `core/memoize` but:
 *  * Often faster, depending on opts.
 *  * Prevents race conditions on writes.
 *  * Supports auto invalidation & gc with `ttl-ms` opt.
 *  * Supports cache size limit & gc with `cache-size` opt.
 *  * Supports invalidation by prepending args with `:mem/del` or `:mem/fresh`.
 */
taoensso.encore.memoize_STAR_ = (function taoensso$encore$memoize_STAR_(var_args){
var args49340 = [];
var len__8822__auto___49362 = arguments.length;
var i__8823__auto___49363 = (0);
while(true){
if((i__8823__auto___49363 < len__8822__auto___49362)){
args49340.push((arguments[i__8823__auto___49363]));

var G__49364 = (i__8823__auto___49363 + (1));
i__8823__auto___49363 = G__49364;
continue;
} else {
}
break;
}

var G__49342 = args49340.length;
switch (G__49342) {
case 1:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49340.length)].join('')));

}
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (f){
return taoensso.encore.memoize_(f);
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (ttl_ms,f){
var e_49366 = (function (){try{if(taoensso.encore.pos_int_QMARK_(ttl_ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49343){if((e49343 instanceof Error)){
var e = e49343;
return e;
} else {
throw e49343;

}
}})();
if((e_49366 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1717,"(pos-int? ttl-ms)",ttl_ms,e_49366,null);
}

var cache_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var latch_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var ttl_ms__$1 = cljs.core.long$(ttl_ms);
return ((function (cache_,latch_,ttl_ms__$1){
return (function() { 
var G__49367__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__49344 = a1;
var G__49345 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49344,G__49345) : taoensso.encore.kw_identical_QMARK_.call(null,G__49344,G__49345));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__49346 = a2;
var G__49347 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49346,G__49347) : taoensso.encore.kw_identical_QMARK_.call(null,G__49346,G__49347));
})())){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,null) : cljs.core.reset_BANG_.call(null,cache_,null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = (new Date()).getTime();
if((Math.random() <= 6.25E-5)){
var latch_49368 = null;
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(latch_,latch_49368) : cljs.core.reset_BANG_.call(null,latch_,latch_49368));

return true;
})()
){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (latch_49368,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_49368,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(latch_49368,instant,a1,cache_,latch_,ttl_ms__$1))
,cljs.core.transient$((function (){var or__7601__auto__ = m;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_49368,instant,a1,cache_,latch_,ttl_ms__$1))
);
} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__49348 = a1;
var G__49349 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49348,G__49349) : taoensso.encore.kw_identical_QMARK_.call(null,G__49348,G__49349));
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__7601__auto__ = (_QMARK_e == null);
if(or__7601__auto__){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.SimpleCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
,null)),instant));
} else {
return _QMARK_e;
}
});})(fresh_QMARK_,args__$1,instant,a1,cache_,latch_,ttl_ms__$1))
);
var G__49350 = e.delay;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__49350) : cljs.core.deref.call(null,G__49350));
}
};
var G__49367 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49369__i = 0, G__49369__a = new Array(arguments.length -  0);
while (G__49369__i < G__49369__a.length) {G__49369__a[G__49369__i] = arguments[G__49369__i + 0]; ++G__49369__i;}
  args = new cljs.core.IndexedSeq(G__49369__a,0);
} 
return G__49367__delegate.call(this,args);};
G__49367.cljs$lang$maxFixedArity = 0;
G__49367.cljs$lang$applyTo = (function (arglist__49370){
var args = cljs.core.seq(arglist__49370);
return G__49367__delegate(args);
});
G__49367.cljs$core$IFn$_invoke$arity$variadic = G__49367__delegate;
return G__49367;
})()
;
;})(cache_,latch_,ttl_ms__$1))
});

taoensso.encore.memoize_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (cache_size,ttl_ms,f){
if(cljs.core.truth_((function (x){
var or__7601__auto__ = (x == null);
if(or__7601__auto__){
return or__7601__auto__;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.pos_int_QMARK_).call(null,x);
}
}).call(null,ttl_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1768,"([:or nil? pos-int?] ttl-ms)",ttl_ms,null,null);
}

var e_49371 = (function (){try{if(taoensso.encore.pos_int_QMARK_(cache_size)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49351){if((e49351 instanceof Error)){
var e = e49351;
return e;
} else {
throw e49351;

}
}})();
if((e_49371 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1769,"(pos-int? cache-size)",cache_size,e_49371,null);
}

var tick_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var cache_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var latch_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var ttl_ms__$1 = cljs.core.long$((function (){var or__7601__auto__ = ttl_ms;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return (0);
}
})());
var ttl_ms_QMARK_ = !((ttl_ms__$1 === (0)));
var cache_size__$1 = cljs.core.long$(cache_size);
return ((function (tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function() { 
var G__49372__delegate = function (args){
var a1 = cljs.core.first(args);
if(cljs.core.truth_((function (){var G__49352 = a1;
var G__49353 = cljs.core.cst$kw$mem_SLASH_del;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49352,G__49353) : taoensso.encore.kw_identical_QMARK_.call(null,G__49352,G__49353));
})())){
var argn = cljs.core.next(args);
var a2 = cljs.core.first(argn);
if(cljs.core.truth_((function (){var G__49354 = a2;
var G__49355 = cljs.core.cst$kw$mem_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49354,G__49355) : taoensso.encore.kw_identical_QMARK_.call(null,G__49354,G__49355));
})())){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,null) : cljs.core.reset_BANG_.call(null,cache_,null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cache_,cljs.core.dissoc,argn);
}

return null;
} else {
var instant = ((ttl_ms_QMARK_)?(new Date()).getTime():(0));
if((Math.random() <= 6.25E-5)){
var latch_49373 = null;
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(latch_,latch_49373) : cljs.core.reset_BANG_.call(null,latch_,latch_49373));

return true;
})()
){
if(ttl_ms_QMARK_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (latch_49373,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_49373,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,k,e){
if(((instant - e.udt) > ttl_ms__$1)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
});})(latch_49373,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$((function (){var or__7601__auto__ = m;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),m));
});})(latch_49373,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}

var snapshot_49374 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cache_) : cljs.core.deref.call(null,cache_));
var n_to_gc_49375 = (cljs.core.count(snapshot_49374) - cache_size__$1);
if((n_to_gc_49375 > (64))){
var ks_to_gc_49376 = (function (){var G__49356 = n_to_gc_49375;
var G__49357 = ((function (G__49356,snapshot_49374,n_to_gc_49375,latch_49373,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (k){
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(snapshot_49374,k);
return (e.tick_lru + e.tick_lfu);
});})(G__49356,snapshot_49374,n_to_gc_49375,latch_49373,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
;
var G__49358 = cljs.core.keys(snapshot_49374);
return (taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.top.cljs$core$IFn$_invoke$arity$3(G__49356,G__49357,G__49358) : taoensso.encore.top.call(null,G__49356,G__49357,G__49358));
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cache_,((function (ks_to_gc_49376,snapshot_49374,n_to_gc_49375,latch_49373,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (m){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks_to_gc_49376,snapshot_49374,n_to_gc_49375,latch_49373,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (acc,in$){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,in$);
});})(ks_to_gc_49376,snapshot_49374,n_to_gc_49375,latch_49373,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,cljs.core.transient$((function (){var or__7601__auto__ = m;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),ks_to_gc_49376));
});})(ks_to_gc_49376,snapshot_49374,n_to_gc_49375,latch_49373,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
} else {
}
} else {
}
} else {
}

var fresh_QMARK_ = (function (){var G__49359 = a1;
var G__49360 = cljs.core.cst$kw$mem_SLASH_fresh;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49359,G__49360) : taoensso.encore.kw_identical_QMARK_.call(null,G__49359,G__49360));
})();
var args__$1 = (cljs.core.truth_(fresh_QMARK_)?cljs.core.next(args):args);
var tick = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tick_,((function (fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (n){
return (n + (1));
});})(fresh_QMARK_,args__$1,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
var e = taoensso.encore._swap_val_BANG_(cache_,args__$1,((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (_QMARK_e){
if(cljs.core.truth_((function (){var or__7601__auto__ = (_QMARK_e == null);
if(or__7601__auto__){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = fresh_QMARK_;
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
return ((instant - _QMARK_e.udt) > ttl_ms__$1);
}
}
})())){
return (new taoensso.encore.TickedCacheEntry((new cljs.core.Delay(((function (fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
,null)),instant,tick,(1)));
} else {
var e = _QMARK_e;
return (new taoensso.encore.TickedCacheEntry(e.delay,e.udt,tick,(e.tick_lfu + (1))));
}
});})(fresh_QMARK_,args__$1,tick,instant,a1,tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
);
var G__49361 = e.delay;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__49361) : cljs.core.deref.call(null,G__49361));
}
};
var G__49372 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49377__i = 0, G__49377__a = new Array(arguments.length -  0);
while (G__49377__i < G__49377__a.length) {G__49377__a[G__49377__i] = arguments[G__49377__i + 0]; ++G__49377__i;}
  args = new cljs.core.IndexedSeq(G__49377__a,0);
} 
return G__49372__delegate.call(this,args);};
G__49372.cljs$lang$maxFixedArity = 0;
G__49372.cljs$lang$applyTo = (function (arglist__49378){
var args = cljs.core.seq(arglist__49378);
return G__49372__delegate(args);
});
G__49372.cljs$core$IFn$_invoke$arity$variadic = G__49372__delegate;
return G__49372;
})()
;
;})(tick_,cache_,latch_,ttl_ms__$1,ttl_ms_QMARK_,cache_size__$1))
});

taoensso.encore.memoize_STAR_.cljs$lang$maxFixedArity = 3;


/**
* @constructor
*/
taoensso.encore.LimitSpec = (function (n,ms){
this.n = n;
this.ms = ms;
})

taoensso.encore.LimitSpec.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$ms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.LimitSpec.cljs$lang$type = true;

taoensso.encore.LimitSpec.cljs$lang$ctorStr = "taoensso.encore/LimitSpec";

taoensso.encore.LimitSpec.cljs$lang$ctorPrWriter = (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"taoensso.encore/LimitSpec");
});

taoensso.encore.__GT_LimitSpec = (function taoensso$encore$__GT_LimitSpec(n,ms){
return (new taoensso.encore.LimitSpec(n,ms));
});


/**
* @constructor
*/
taoensso.encore.LimitEntry = (function (n,udt0){
this.n = n;
this.udt0 = udt0;
})

taoensso.encore.LimitEntry.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$n,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null)),cljs.core.with_meta(cljs.core.cst$sym$udt0,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.LimitEntry.cljs$lang$type = true;

taoensso.encore.LimitEntry.cljs$lang$ctorStr = "taoensso.encore/LimitEntry";

taoensso.encore.LimitEntry.cljs$lang$ctorPrWriter = (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"taoensso.encore/LimitEntry");
});

taoensso.encore.__GT_LimitEntry = (function taoensso$encore$__GT_LimitEntry(n,udt0){
return (new taoensso.encore.LimitEntry(n,udt0));
});


/**
* @constructor
*/
taoensso.encore.LimitHits = (function (m,worst_sid,worst_ms){
this.m = m;
this.worst_sid = worst_sid;
this.worst_ms = worst_ms;
})

taoensso.encore.LimitHits.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$m,cljs.core.cst$sym$worst_DASH_sid,cljs.core.with_meta(cljs.core.cst$sym$worst_DASH_ms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$long], null))], null);
});

taoensso.encore.LimitHits.cljs$lang$type = true;

taoensso.encore.LimitHits.cljs$lang$ctorStr = "taoensso.encore/LimitHits";

taoensso.encore.LimitHits.cljs$lang$ctorPrWriter = (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"taoensso.encore/LimitHits");
});

taoensso.encore.__GT_LimitHits = (function taoensso$encore$__GT_LimitHits(m,worst_sid,worst_ms){
return (new taoensso.encore.LimitHits(m,worst_sid,worst_ms));
});

var limit_spec_49397 = (function (n,ms){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(n)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49379){if((e49379 instanceof Error)){
var e = e49379;
return e;
} else {
throw e49379;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1869,"(pos-int? n)",n,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(ms)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49380){if((e49380 instanceof Error)){
var e = e49380;
return e;
} else {
throw e49380;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",1869,"(pos-int? ms)",ms,e,null);
}
})()], null);

return (new taoensso.encore.LimitSpec(n,ms));
});
taoensso.encore.coerce_limit_specs = ((function (limit_spec_49397){
return (function taoensso$encore$coerce_limit_specs(x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv(((function (limit_spec_49397){
return (function (acc,sid,p__49389){
var vec__49390 = p__49389;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49390,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49390,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,limit_spec_49397(n,ms));
});})(limit_spec_49397))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
if(cljs.core.vector_QMARK_(x)){
var i = cljs.core.volatile_BANG_((-1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (i,limit_spec_49397){
return (function (acc,p__49393){
var vec__49394 = p__49393;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49394,(0),null);
var ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49394,(1),null);
var _QMARK_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49394,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,(function (){var or__7601__auto__ = _QMARK_id;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core._vreset_BANG_(i,((function (or__7601__auto__,vec__49394,n,ms,_QMARK_id,i,limit_spec_49397){
return (function (i__$1){
return (i__$1 + (1));
});})(or__7601__auto__,vec__49394,n,ms,_QMARK_id,i,limit_spec_49397))
.call(null,cljs.core._deref(i)));
}
})(),limit_spec_49397(n,ms));
});})(i,limit_spec_49397))
,cljs.core.PersistentArrayMap.EMPTY,x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No matching `encore/cond!` clause",cljs.core.PersistentArrayMap.EMPTY);
}
}
});})(limit_spec_49397))
;
/**
 * Experimental. Like `limiter` but returns [<limiter> <state_>].
 */
taoensso.encore.limiter_STAR_ = (function taoensso$encore$limiter_STAR_(specs){
if(cljs.core.empty_QMARK_(specs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.constantly(null)], null);
} else {
var latch_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var reqs_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var specs__$1 = taoensso.encore.coerce_limit_specs(specs);
var f1 = ((function (latch_,reqs_,specs__$1){
return (function (rid,peek_QMARK_){
var instant = (new Date()).getTime();
if((cljs.core.not(peek_QMARK_)) && ((Math.random() <= 6.25E-5))){
var latch_49426 = null;
if((function (){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(latch_,latch_49426) : cljs.core.reset_BANG_.call(null,latch_,latch_49426));

return true;
})()
){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(reqs_,((function (latch_49426,instant,latch_,reqs_,specs__$1){
return (function (reqs){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (latch_49426,instant,latch_,reqs_,specs__$1){
return (function (acc,rid__$1,entries){
var new_entries = cljs.core.reduce_kv(((function (latch_49426,instant,latch_,reqs_,specs__$1){
return (function (acc__$1,sid,e){
var b2__47185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__47185__auto__)){
var s = b2__47185__auto__;
if((instant >= (e.udt0 + s.ms))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
} else {
return acc__$1;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc__$1,sid);
}
});})(latch_49426,instant,latch_,reqs_,specs__$1))
,entries,entries);
if(cljs.core.empty_QMARK_(new_entries)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,rid__$1);
} else {
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(acc,rid__$1,new_entries);
}
});})(latch_49426,instant,latch_,reqs_,specs__$1))
,cljs.core.transient$((function (){var or__7601__auto__ = reqs;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()),reqs));
});})(latch_49426,instant,latch_,reqs_,specs__$1))
);
} else {
}
} else {
}

while(true){
var reqs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reqs_) : cljs.core.deref.call(null,reqs_));
var entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(reqs,rid);
var _QMARK_hits = (((entries == null))?null:cljs.core.reduce_kv(((function (reqs,entries,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,e){
var b2__47185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(specs__$1,sid);
if(cljs.core.truth_(b2__47185__auto__)){
var s = b2__47185__auto__;
if((e.n < s.n)){
return acc;
} else {
var tdelta = ((e.udt0 + s.ms) - instant);
if((tdelta <= (0))){
return acc;
} else {
if((acc == null)){
return (new taoensso.encore.LimitHits(cljs.core.PersistentArrayMap.createAsIfByAssoc([sid,tdelta]),sid,tdelta));
} else {
if((tdelta > acc.worst_ms)){
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),sid,tdelta));
} else {
return (new taoensso.encore.LimitHits(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc.m,sid,tdelta),acc.worst_sid,acc.worst_ms));
}
}
}
}
} else {
return acc;
}
});})(reqs,entries,instant,latch_,reqs_,specs__$1))
,null,entries));
if(cljs.core.truth_((function (){var or__7601__auto__ = peek_QMARK_;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return _QMARK_hits;
}
})())){
var b2__47185__auto__ = _QMARK_hits;
if(cljs.core.truth_(b2__47185__auto__)){
var h = b2__47185__auto__;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h.worst_sid,h.worst_ms,h.m], null);
} else {
return null;
}
} else {
var b2__47185__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(latch_) : cljs.core.deref.call(null,latch_));
if(cljs.core.truth_(b2__47185__auto__)){
var l = b2__47185__auto__;
return null;
} else {
var new_entries = cljs.core.reduce_kv(((function (b2__47185__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1){
return (function (acc,sid,s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,sid,(function (){var b2__47185__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(entries,sid);
if(cljs.core.truth_(b2__47185__auto____$1)){
var e = b2__47185__auto____$1;
var udt0 = e.udt0;
if((instant >= (udt0 + s.ms))){
return (new taoensso.encore.LimitEntry((1),instant));
} else {
return (new taoensso.encore.LimitEntry((e.n + (1)),udt0));
}
} else {
return (new taoensso.encore.LimitEntry((1),instant));
}
})());
});})(b2__47185__auto__,reqs,entries,_QMARK_hits,instant,latch_,reqs_,specs__$1))
,entries,specs__$1);
if((function (){
var G__49412_49427 = reqs_;
var G__49413_49428 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reqs,rid,new_entries);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__49412_49427,G__49413_49428) : cljs.core.reset_BANG_.call(null,G__49412_49427,G__49413_49428));

return true;
})()
){
return null;
} else {
continue;
}
}
}
break;
}
});})(latch_,reqs_,specs__$1))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reqs_,((function (latch_,reqs_,specs__$1,f1){
return (function() {
var taoensso$encore$limiter_STAR__$_check_limits_BANG_ = null;
var taoensso$encore$limiter_STAR__$_check_limits_BANG___0 = (function (){
return f1(null,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___1 = (function (req_id){
return f1(req_id,false);
});
var taoensso$encore$limiter_STAR__$_check_limits_BANG___2 = (function (cmd,req_id){
if(cljs.core.truth_((function (){var G__49420 = cmd;
var G__49421 = cljs.core.cst$kw$rl_SLASH_reset;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49420,G__49421) : taoensso.encore.kw_identical_QMARK_.call(null,G__49420,G__49421));
})())){
if(cljs.core.truth_((function (){var G__49422 = req_id;
var G__49423 = cljs.core.cst$kw$rl_SLASH_all;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49422,G__49423) : taoensso.encore.kw_identical_QMARK_.call(null,G__49422,G__49423));
})())){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reqs_,null) : cljs.core.reset_BANG_.call(null,reqs_,null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reqs_,cljs.core.dissoc,req_id);
}

return null;
} else {
if(cljs.core.truth_((function (){var G__49424 = cmd;
var G__49425 = cljs.core.cst$kw$rl_SLASH_peek;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49424,G__49425) : taoensso.encore.kw_identical_QMARK_.call(null,G__49424,G__49425));
})())){
return f1(req_id,true);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unrecognized rate limiter command",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,cmd,cljs.core.cst$kw$req_DASH_id,req_id], null));
}
}
});
taoensso$encore$limiter_STAR__$_check_limits_BANG_ = function(cmd,req_id){
switch(arguments.length){
case 0:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___0.call(this);
case 1:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___1.call(this,cmd);
case 2:
return taoensso$encore$limiter_STAR__$_check_limits_BANG___2.call(this,cmd,req_id);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$limiter_STAR__$_check_limits_BANG___0;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$limiter_STAR__$_check_limits_BANG___1;
taoensso$encore$limiter_STAR__$_check_limits_BANG_.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$limiter_STAR__$_check_limits_BANG___2;
return taoensso$encore$limiter_STAR__$_check_limits_BANG_;
})()
;})(latch_,reqs_,specs__$1,f1))
], null);
}
});
/**
 * Takes {<spec-id> [<n-max-reqs> <msecs-window>]}, and returns a rate
 *   limiter (fn check-limits! [req-id]) -> nil (all limits pass), or
 *   [<worst-spec-id> <worst-backoff-msecs> {<spec-id> <backoff-msecs>}].
 * 
 *   Limiter fn commands:
 *  :rl/peek  <req-id> - Check limits w/o side effects.
 *  :rl/reset <req-id> - Reset all limits for given req-id.
 */
taoensso.encore.limiter = (function taoensso$encore$limiter(specs){
var vec__49432 = taoensso.encore.limiter_STAR_(specs);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49432,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49432,(1),null);
return f;
});
taoensso.encore.str_builder_QMARK_ = (function taoensso$encore$str_builder_QMARK_(x){
return (x instanceof goog.string.StringBuffer);
});
/**
 * For cross-platform string building
 */
taoensso.encore.str_builder = (function() {
var taoensso$encore$str_builder = null;
var taoensso$encore$str_builder__0 = (function (){
return (new goog.string.StringBuffer());
});
var taoensso$encore$str_builder__1 = (function (s_init){
return (new goog.string.StringBuffer(s_init));
});
taoensso$encore$str_builder = function(s_init){
switch(arguments.length){
case 0:
return taoensso$encore$str_builder__0.call(this);
case 1:
return taoensso$encore$str_builder__1.call(this,s_init);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_builder__0;
taoensso$encore$str_builder.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_builder__1;
return taoensso$encore$str_builder;
})()
;
/**
 * For cross-platform string building
 */
taoensso.encore.sb_append = (function taoensso$encore$sb_append(var_args){
var args49435 = [];
var len__8822__auto___49441 = arguments.length;
var i__8823__auto___49442 = (0);
while(true){
if((i__8823__auto___49442 < len__8822__auto___49441)){
args49435.push((arguments[i__8823__auto___49442]));

var G__49443 = (i__8823__auto___49442 + (1));
i__8823__auto___49442 = G__49443;
continue;
} else {
}
break;
}

var G__49440 = args49435.length;
switch (G__49440) {
case 2:
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__8845__auto__ = (new cljs.core.IndexedSeq(args49435.slice((2)),(0),null));
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8845__auto__);

}
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2 = (function (str_builder,s){
return str_builder.append(s);
});

taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic = (function (str_builder,s,more){
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(str_builder,s);

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$);
}),str_builder,more);
});

taoensso.encore.sb_append.cljs$lang$applyTo = (function (seq49436){
var G__49437 = cljs.core.first(seq49436);
var seq49436__$1 = cljs.core.next(seq49436);
var G__49438 = cljs.core.first(seq49436__$1);
var seq49436__$2 = cljs.core.next(seq49436__$1);
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$variadic(G__49437,G__49438,seq49436__$2);
});

taoensso.encore.sb_append.cljs$lang$maxFixedArity = (2);

/**
 * String builder reducing fn
 */
taoensso.encore.str_rf = (function() {
var taoensso$encore$str_rf = null;
var taoensso$encore$str_rf__0 = (function (){
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0();
});
var taoensso$encore$str_rf__1 = (function (acc){
if(taoensso.encore.str_builder_QMARK_(acc)){
return acc;
} else {
return taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''));
}
});
var taoensso$encore$str_rf__2 = (function (acc,in$){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(((taoensso.encore.str_builder_QMARK_(acc))?acc:taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc)].join(''))),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join(''));
});
taoensso$encore$str_rf = function(acc,in$){
switch(arguments.length){
case 0:
return taoensso$encore$str_rf__0.call(this);
case 1:
return taoensso$encore$str_rf__1.call(this,acc);
case 2:
return taoensso$encore$str_rf__2.call(this,acc,in$);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$0 = taoensso$encore$str_rf__0;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$str_rf__1;
taoensso$encore$str_rf.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$str_rf__2;
return taoensso$encore$str_rf;
})()
;
/**
 * Faster, transducer-based generalization of `clojure.string/join` with `xform`
 *  support
 */
taoensso.encore.str_join = (function taoensso$encore$str_join(var_args){
var args49445 = [];
var len__8822__auto___49448 = arguments.length;
var i__8823__auto___49449 = (0);
while(true){
if((i__8823__auto___49449 < len__8822__auto___49448)){
args49445.push((arguments[i__8823__auto___49449]));

var G__49450 = (i__8823__auto___49449 + (1));
i__8823__auto___49449 = G__49450;
continue;
} else {
}
break;
}

var G__49447 = args49445.length;
switch (G__49447) {
case 1:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49445.length)].join('')));

}
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(null,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
return taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(separator,null,coll);
});

taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3 = (function (separator,xform,coll){
if(cljs.core.truth_((function (){var and__7589__auto__ = separator;
if(cljs.core.truth_(and__7589__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(separator,"");
} else {
return and__7589__auto__;
}
})())){
var sep_xform = cljs.core.interpose.cljs$core$IFn$_invoke$arity$1(separator);
var str_rf_STAR_ = cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str);
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(xform,sep_xform),str_rf_STAR_,coll);
} else {
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(sep_xform,str_rf_STAR_,coll);
}
} else {
if(cljs.core.truth_(xform)){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,cljs.core.str),coll);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(taoensso.encore.str_rf,coll))].join('');
}
}
});

taoensso.encore.str_join.cljs$lang$maxFixedArity = 3;

taoensso.encore.str_contains_QMARK_ = (function taoensso$encore$str_contains_QMARK_(s,substr){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr));
});
taoensso.encore.str_starts_with_QMARK_ = (function taoensso$encore$str_starts_with_QMARK_(s,substr){
return (s.indexOf(substr) === (0));
});
taoensso.encore.str_ends_with_QMARK_ = (function taoensso$encore$str_ends_with_QMARK_(s,substr){
var s_len = s.length;
var substr_len = substr.length;
if((s_len >= substr_len)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),s.indexOf(substr,(s_len - substr_len)));
} else {
return null;
}
});
taoensso.encore.str__QMARK_index = (function taoensso$encore$str__QMARK_index(var_args){
var args49452 = [];
var len__8822__auto___49455 = arguments.length;
var i__8823__auto___49456 = (0);
while(true){
if((i__8823__auto___49456 < len__8822__auto___49455)){
args49452.push((arguments[i__8823__auto___49456]));

var G__49457 = (i__8823__auto___49456 + (1));
i__8823__auto___49456 = G__49457;
continue;
} else {
}
break;
}

var G__49454 = args49452.length;
switch (G__49454) {
case 2:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49452.length)].join('')));

}
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$2 = (function (s,substr){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,(0),false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$3 = (function (s,substr,start_idx){
return taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4(s,substr,start_idx,false);
});

taoensso.encore.str__QMARK_index.cljs$core$IFn$_invoke$arity$4 = (function (s,substr,start_idx,last_QMARK_){
var result = (cljs.core.truth_(last_QMARK_)?s.lastIndexOf(substr,start_idx):s.indexOf(substr,start_idx));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(result,(-1))){
return result;
} else {
return null;
}
});

taoensso.encore.str__QMARK_index.cljs$lang$maxFixedArity = 4;

/**
 * Like `subs` but provides consistent clj/s behaviour and never throws
 *   (snaps to valid start and end indexes).
 */
taoensso.encore.get_substr = (function taoensso$encore$get_substr(var_args){
var args49459 = [];
var len__8822__auto___49462 = arguments.length;
var i__8823__auto___49463 = (0);
while(true){
if((i__8823__auto___49463 < len__8822__auto___49462)){
args49459.push((arguments[i__8823__auto___49463]));

var G__49464 = (i__8823__auto___49463 + (1));
i__8823__auto___49463 = G__49464;
continue;
} else {
}
break;
}

var G__49461 = args49459.length;
switch (G__49461) {
case 2:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49459.length)].join('')));

}
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return s.substring(start);
});

taoensso.encore.get_substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
if((start >= end)){
return "";
} else {
return s.substring(start,end);
}
});

taoensso.encore.get_substr.cljs$lang$maxFixedArity = 3;

/**
 * Like `get-substr` but:
 *  - Takes `length` instead of `end` (index).
 *  - -ive `start` => index from right of string.
 */
taoensso.encore.get_substring = (function taoensso$encore$get_substring(var_args){
var args49466 = [];
var len__8822__auto___49469 = arguments.length;
var i__8823__auto___49470 = (0);
while(true){
if((i__8823__auto___49470 < len__8822__auto___49469)){
args49466.push((arguments[i__8823__auto___49470]));

var G__49471 = (i__8823__auto___49470 + (1));
i__8823__auto___49470 = G__49471;
continue;
} else {
}
break;
}

var G__49468 = args49466.length;
switch (G__49468) {
case 2:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49466.length)].join('')));

}
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start));
});

taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3 = (function (s,start,length){
return taoensso.encore.as__QMARK_nempty_str(s.substr(start,length));
});

taoensso.encore.get_substring.cljs$lang$maxFixedArity = 3;

/**
 * Like `str/replace` but provides consistent clj/s behaviour.
 * 
 *   Workaround for http://dev.clojure.org/jira/browse/CLJS-794,
 *               http://dev.clojure.org/jira/browse/CLJS-911.
 * 
 *   Note that ClojureScript 1.7.145 introduced a partial fix for CLJS-911.
 *   A full fix could unfortunately not be introduced w/o breaking compatibility
 *   with the previously incorrect behaviour. CLJS-794 also remains unresolved.
 */
taoensso.encore.str_replace = (function taoensso$encore$str_replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
var flags = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("g"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.ignoreCase)?"i":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(match.multiline)?"m":null))].join('');
var replacement__$1 = ((typeof replacement === 'string')?replacement:((function (flags){
return (function() { 
var G__49475__delegate = function (args){
var G__49474 = cljs.core.vec(args);
return (replacement.cljs$core$IFn$_invoke$arity$1 ? replacement.cljs$core$IFn$_invoke$arity$1(G__49474) : replacement.call(null,G__49474));
};
var G__49475 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49476__i = 0, G__49476__a = new Array(arguments.length -  0);
while (G__49476__i < G__49476__a.length) {G__49476__a[G__49476__i] = arguments[G__49476__i + 0]; ++G__49476__i;}
  args = new cljs.core.IndexedSeq(G__49476__a,0);
} 
return G__49475__delegate.call(this,args);};
G__49475.cljs$lang$maxFixedArity = 0;
G__49475.cljs$lang$applyTo = (function (arglist__49477){
var args = cljs.core.seq(arglist__49477);
return G__49475__delegate(args);
});
G__49475.cljs$core$IFn$_invoke$arity$variadic = G__49475__delegate;
return G__49475;
})()
;})(flags))
);
return s.replace((new RegExp(match.source,flags)),replacement__$1);
} else {
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid match arg: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');
}
}
});
/**
 * nil/undefined -> "nil"
 */
taoensso.encore.nil__GT_str = (function taoensso$encore$nil__GT_str(x){
if(((void 0 === x)) || ((x == null))){
return "nil";
} else {
return x;
}
});

taoensso.encore.format_STAR_ = (function taoensso$encore$format_STAR_(fmt,args){
var fmt__$1 = (function (){var or__7601__auto__ = fmt;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return "";
}
})();
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt__$1,args__$1);
});

/**
 * Like `core/format` but:
 *    * Returns "" when fmt is nil rather than throwing an NPE.
 *    * Formats nil as "nil" rather than "null".
 *    * Provides ClojureScript support via goog.string.format (this has fewer
 *      formatting options than Clojure's `format`!).
 */
taoensso.encore.format = (function taoensso$encore$format(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49480 = arguments.length;
var i__8823__auto___49481 = (0);
while(true){
if((i__8823__auto___49481 < len__8822__auto___49480)){
args__8829__auto__.push((arguments[i__8823__auto___49481]));

var G__49482 = (i__8823__auto___49481 + (1));
i__8823__auto___49481 = G__49482;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return taoensso.encore.format_STAR_(fmt,args);
});

taoensso.encore.format.cljs$lang$maxFixedArity = (1);

taoensso.encore.format.cljs$lang$applyTo = (function (seq49478){
var G__49479 = cljs.core.first(seq49478);
var seq49478__$1 = cljs.core.next(seq49478);
return taoensso.encore.format.cljs$core$IFn$_invoke$arity$variadic(G__49479,seq49478__$1);
});

/**
 * Like `string/join` but skips duplicate separators.
 */
taoensso.encore.str_join_once = (function taoensso$encore$str_join_once(separator,coll){
var sep = separator;
if(clojure.string.blank_QMARK_(sep)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso.encore.str_rf,"",coll))].join('');
} else {
var acc_ends_with_sep_QMARK__ = cljs.core.volatile_BANG_(false);
var acc_empty_QMARK__ = cljs.core.volatile_BANG_(true);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep){
return (function (acc,in$){
var in$__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join('');
var in_empty_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in$__$1,"");
var in_starts_with_sep_QMARK_ = taoensso.encore.str_starts_with_QMARK_(in$__$1,sep);
var in_ends_with_sep_QMARK_ = taoensso.encore.str_ends_with_QMARK_(in$__$1,sep);
var acc_ends_with_sep_QMARK_ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(acc_ends_with_sep_QMARK__) : cljs.core.deref.call(null,acc_ends_with_sep_QMARK__));
var acc_empty_QMARK_ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(acc_empty_QMARK__) : cljs.core.deref.call(null,acc_empty_QMARK__));
cljs.core.vreset_BANG_(acc_ends_with_sep_QMARK__,in_ends_with_sep_QMARK_);

if(cljs.core.truth_(acc_empty_QMARK_)){
cljs.core.vreset_BANG_(acc_empty_QMARK__,in_empty_QMARK_);
} else {
}

if(cljs.core.truth_(acc_ends_with_sep_QMARK_)){
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1.substring((1)));
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
} else {
if(in_starts_with_sep_QMARK_){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
if(cljs.core.truth_((function (){var or__7601__auto__ = acc_empty_QMARK_;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return in_empty_QMARK_;
}
})())){
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
} else {
taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,sep);

return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,in$__$1);
}
}
}
});})(acc_ends_with_sep_QMARK__,acc_empty_QMARK__,sep))
,taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),coll))].join('');
}
});
taoensso.encore.path = (function taoensso$encore$path(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49484 = arguments.length;
var i__8823__auto___49485 = (0);
while(true){
if((i__8823__auto___49485 < len__8822__auto___49484)){
args__8829__auto__.push((arguments[i__8823__auto___49485]));

var G__49486 = (i__8823__auto___49485 + (1));
i__8823__auto___49485 = G__49486;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic = (function (parts){
return taoensso.encore.str_join_once("/",parts);
});

taoensso.encore.path.cljs$lang$maxFixedArity = (0);

taoensso.encore.path.cljs$lang$applyTo = (function (seq49483){
return taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49483));
});

/**
 * Converts all word breaks of any form and length (including line breaks of any
 *   form, tabs, spaces, etc.) to a single regular space.
 */
taoensso.encore.norm_word_breaks = (function taoensso$encore$norm_word_breaks(s){
return clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/\s+/," ");
});
taoensso.encore.count_words = (function taoensso$encore$count_words(s){
if(clojure.string.blank_QMARK_(s)){
return (0);
} else {
return cljs.core.count(clojure.string.split.cljs$core$IFn$_invoke$arity$2(s,/\s+/));
}
});
/**
 * Returns a UUIDv4 string of form "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".
 *   Ref. http://www.ietf.org/rfc/rfc4122.txt,
 *     https://gist.github.com/franks42/4159427
 */
taoensso.encore.uuid_str = (function taoensso$encore$uuid_str(var_args){
var args49487 = [];
var len__8822__auto___49490 = arguments.length;
var i__8823__auto___49491 = (0);
while(true){
if((i__8823__auto___49491 < len__8822__auto___49490)){
args49487.push((arguments[i__8823__auto___49491]));

var G__49492 = (i__8823__auto___49491 + (1));
i__8823__auto___49491 = G__49492;
continue;
} else {
}
break;
}

var G__49489 = args49487.length;
switch (G__49489) {
case 1:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49487.length)].join('')));

}
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1 = (function (max_length){
return taoensso.encore.get_substring.cljs$core$IFn$_invoke$arity$3(taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0(),(0),max_length);
});

taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0 = (function (){
var hex = (function (){
return cljs.core.rand_int((16)).toString((16));
});
var rhex = ((8) | ((3) & cljs.core.rand_int((16)))).toString((16));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("4"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex())].join('');
});

taoensso.encore.uuid_str.cljs$lang$maxFixedArity = 1;

/**
 * Simple Hiccup-like string templating to complement Tempura.
 */
taoensso.encore.into_str = (function taoensso$encore$into_str(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49495 = arguments.length;
var i__8823__auto___49496 = (0);
while(true){
if((i__8823__auto___49496 < len__8822__auto___49495)){
args__8829__auto__.push((arguments[i__8823__auto___49496]));

var G__49497 = (i__8823__auto___49496 + (1));
i__8823__auto___49496 = G__49497;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function taoensso$encore$rf(acc,in$){
if(cljs.core.sequential_QMARK_(in$)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(taoensso$encore$rf,acc,in$);
} else {
return taoensso.encore.sb_append.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(in$)].join(''));
}
}),taoensso.encore.str_builder.cljs$core$IFn$_invoke$arity$0(),xs))].join('');
});

taoensso.encore.into_str.cljs$lang$maxFixedArity = (0);

taoensso.encore.into_str.cljs$lang$applyTo = (function (seq49494){
return taoensso.encore.into_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49494));
});

/**
 * Reverse comparator.
 */
taoensso.encore.rcompare = (function taoensso$encore$rcompare(x,y){
return cljs.core.compare(y,x);
});
var sentinel_49503 = {};
var nil__GT_sentinel_49504 = ((function (sentinel_49503){
return (function (x){
if((x == null)){
return sentinel_49503;
} else {
return x;
}
});})(sentinel_49503))
;
var sentinel__GT_nil_49505 = ((function (sentinel_49503,nil__GT_sentinel_49504){
return (function (x){
if((x === sentinel_49503)){
return null;
} else {
return x;
}
});})(sentinel_49503,nil__GT_sentinel_49504))
;
/**
 * Reduces the top `n` items from `coll` of N items into in O(N.logn) time.
 *  For comparsion, (take n (sort-by ...)) is O(N.logN).
 */
taoensso.encore.reduce_top = ((function (sentinel_49503,nil__GT_sentinel_49504,sentinel__GT_nil_49505){
return (function taoensso$encore$reduce_top(var_args){
var args49500 = [];
var len__8822__auto___49506 = arguments.length;
var i__8823__auto___49507 = (0);
while(true){
if((i__8823__auto___49507 < len__8822__auto___49506)){
args49500.push((arguments[i__8823__auto___49507]));

var G__49508 = (i__8823__auto___49507 + (1));
i__8823__auto___49507 = G__49508;
continue;
} else {
}
break;
}

var G__49502 = args49500.length;
switch (G__49502) {
case 4:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49500.length)].join('')));

}
});})(sentinel_49503,nil__GT_sentinel_49504,sentinel__GT_nil_49505))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$4 = ((function (sentinel_49503,nil__GT_sentinel_49504,sentinel__GT_nil_49505){
return (function (n,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,cljs.core.identity,cljs.core.compare,rf,init,coll);
});})(sentinel_49503,nil__GT_sentinel_49504,sentinel__GT_nil_49505))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$5 = ((function (sentinel_49503,nil__GT_sentinel_49504,sentinel__GT_nil_49505){
return (function (n,keyfn,rf,init,coll){
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cljs.core.compare,rf,init,coll);
});})(sentinel_49503,nil__GT_sentinel_49504,sentinel__GT_nil_49505))
;

taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6 = ((function (sentinel_49503,nil__GT_sentinel_49504,sentinel__GT_nil_49505){
return (function (n,keyfn,cmp,rf,init,coll){
var coll_size = cljs.core.count(coll);
var n__$1 = cljs.core.long$((function (){var x__7946__auto__ = coll_size;
var y__7947__auto__ = cljs.core.long$(n);
return ((x__7946__auto__ < y__7947__auto__) ? x__7946__auto__ : y__7947__auto__);
})());
if((n__$1 > (0))){
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.take.cljs$core$IFn$_invoke$arity$1(n__$1),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(rf),init,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(keyfn,cmp,coll));
} else {
return init;
}
});})(sentinel_49503,nil__GT_sentinel_49504,sentinel__GT_nil_49505))
;

taoensso.encore.reduce_top.cljs$lang$maxFixedArity = 6;

/**
 * Conjoins the top `n` items from `coll` into `to` using `reduce-top`.
 */
taoensso.encore.top_into = (function taoensso$encore$top_into(var_args){
var args49510 = [];
var len__8822__auto___49513 = arguments.length;
var i__8823__auto___49514 = (0);
while(true){
if((i__8823__auto___49514 < len__8822__auto___49513)){
args49510.push((arguments[i__8823__auto___49514]));

var G__49515 = (i__8823__auto___49514 + (1));
i__8823__auto___49514 = G__49515;
continue;
} else {
}
break;
}

var G__49512 = args49510.length;
switch (G__49512) {
case 3:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49510.length)].join('')));

}
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$3 = (function (to,n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$4 = (function (to,n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(to,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5 = (function (to,n,keyfn,cmp,coll){
if(taoensso.encore.editable_QMARK_(to)){
return cljs.core.persistent_BANG_(taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj_BANG_,cljs.core.transient$(to),coll));
} else {
return taoensso.encore.reduce_top.cljs$core$IFn$_invoke$arity$6(n,keyfn,cmp,cljs.core.conj,to,coll);
}
});

taoensso.encore.top_into.cljs$lang$maxFixedArity = 5;

/**
 * Returns a sorted vector of the top `n` items from `coll` using `reduce-top`.
 */
taoensso.encore.top = (function taoensso$encore$top(var_args){
var args49517 = [];
var len__8822__auto___49520 = arguments.length;
var i__8823__auto___49521 = (0);
while(true){
if((i__8823__auto___49521 < len__8822__auto___49520)){
args49517.push((arguments[i__8823__auto___49521]));

var G__49522 = (i__8823__auto___49521 + (1));
i__8823__auto___49521 = G__49522;
continue;
} else {
}
break;
}

var G__49519 = args49517.length;
switch (G__49519) {
case 2:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return taoensso.encore.top.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49517.length)].join('')));

}
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,cljs.core.identity,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$3 = (function (n,keyfn,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cljs.core.compare,coll);
});

taoensso.encore.top.cljs$core$IFn$_invoke$arity$4 = (function (n,keyfn,cmp,coll){
return taoensso.encore.top_into.cljs$core$IFn$_invoke$arity$5(cljs.core.PersistentVector.EMPTY,n,keyfn,cmp,coll);
});

taoensso.encore.top.cljs$lang$maxFixedArity = 4;

taoensso.encore.secs__GT_ms = (function taoensso$encore$secs__GT_ms(secs){
return (cljs.core.long$(secs) * (1000));
});
taoensso.encore.ms__GT_secs = (function taoensso$encore$ms__GT_secs(ms){
return cljs.core.quot(cljs.core.long$(ms),(1000));
});
/**
 * Returns ~number of milliseconds in period defined by given args.
 */
taoensso.encore.ms = (function taoensso$encore$ms(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49540 = arguments.length;
var i__8823__auto___49541 = (0);
while(true){
if((i__8823__auto___49541 < len__8822__auto___49540)){
args__8829__auto__.push((arguments[i__8823__auto___49541]));

var G__49542 = (i__8823__auto___49541 + (1));
i__8823__auto___49541 = G__49542;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic = (function (p__49537){
var map__49538 = p__49537;
var map__49538__$1 = ((((!((map__49538 == null)))?((((map__49538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49538):map__49538);
var opts = map__49538__$1;
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,cljs.core.cst$kw$years);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,cljs.core.cst$kw$months);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,cljs.core.cst$kw$weeks);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,cljs.core.cst$kw$days);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,cljs.core.cst$kw$hours);
var mins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,cljs.core.cst$kw$mins);
var secs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,cljs.core.cst$kw$secs);
var msecs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,cljs.core.cst$kw$msecs);
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49538__$1,cljs.core.cst$kw$ms);
taoensso.truss.impl.revery_QMARK_(((function (map__49538,map__49538__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms){
return (function (__in){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [cljs.core.cst$kw$msecs,null,cljs.core.cst$kw$secs,null,cljs.core.cst$kw$months,null,cljs.core.cst$kw$days,null,cljs.core.cst$kw$mins,null,cljs.core.cst$kw$hours,null,cljs.core.cst$kw$years,null,cljs.core.cst$kw$ms,null,cljs.core.cst$kw$weeks,null], null), null).call(null,__in))){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2372,"(#{:msecs :secs :months :days :mins :hours :years :ms :weeks} __in)",__in,null,null);
}
});})(map__49538,map__49538__$1,opts,years,months,weeks,days,hours,mins,secs,msecs,ms))
,cljs.core.keys(opts));

return taoensso.encore.round0((((((((((cljs.core.truth_(years)?(years * (31536000000)):0.0) + (cljs.core.truth_(months)?(months * 2.551392E9):0.0)) + (cljs.core.truth_(weeks)?(weeks * (604800000)):0.0)) + (cljs.core.truth_(days)?(days * (86400000)):0.0)) + (cljs.core.truth_(hours)?(hours * (3600000)):0.0)) + (cljs.core.truth_(mins)?(mins * (60000)):0.0)) + (cljs.core.truth_(secs)?(secs * (1000)):0.0)) + (cljs.core.truth_(msecs)?msecs:0.0)) + (cljs.core.truth_(ms)?ms:0.0)));
});

taoensso.encore.ms.cljs$lang$maxFixedArity = (0);

taoensso.encore.ms.cljs$lang$applyTo = (function (seq49536){
return taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49536));
});

taoensso.encore.secs = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.ms__GT_secs,taoensso.encore.ms);
taoensso.encore.console_log = ((typeof console !== 'undefined')?(function() { 
var G__49557__delegate = function (xs){
var b2__47185__auto__ = console.log;
if(cljs.core.truth_(b2__47185__auto__)){
var f = b2__47185__auto__;
return f.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(xs));
} else {
return null;
}
};
var G__49557 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__49558__i = 0, G__49558__a = new Array(arguments.length -  0);
while (G__49558__i < G__49558__a.length) {G__49558__a[G__49558__i] = arguments[G__49558__i + 0]; ++G__49558__i;}
  xs = new cljs.core.IndexedSeq(G__49558__a,0);
} 
return G__49557__delegate.call(this,xs);};
G__49557.cljs$lang$maxFixedArity = 0;
G__49557.cljs$lang$applyTo = (function (arglist__49559){
var xs = cljs.core.seq(arglist__49559);
return G__49557__delegate(xs);
});
G__49557.cljs$core$IFn$_invoke$arity$variadic = G__49557__delegate;
return G__49557;
})()
:(function() { 
var G__49560__delegate = function (xs){
return null;
};
var G__49560 = function (var_args){
var xs = null;
if (arguments.length > 0) {
var G__49561__i = 0, G__49561__a = new Array(arguments.length -  0);
while (G__49561__i < G__49561__a.length) {G__49561__a[G__49561__i] = arguments[G__49561__i + 0]; ++G__49561__i;}
  xs = new cljs.core.IndexedSeq(G__49561__a,0);
} 
return G__49560__delegate.call(this,xs);};
G__49560.cljs$lang$maxFixedArity = 0;
G__49560.cljs$lang$applyTo = (function (arglist__49562){
var xs = cljs.core.seq(arglist__49562);
return G__49560__delegate(xs);
});
G__49560.cljs$core$IFn$_invoke$arity$variadic = G__49560__delegate;
return G__49560;
})()
);

taoensso.encore.log = taoensso.encore.console_log;

taoensso.encore.logp = (function taoensso$encore$logp(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49563 = arguments.length;
var i__8823__auto___49564 = (0);
while(true){
if((i__8823__auto___49564 < len__8822__auto___49563)){
args__8829__auto__.push((arguments[i__8823__auto___49564]));

var G__49565 = (i__8823__auto___49564 + (1));
i__8823__auto___49564 = G__49565;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__49548 = taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__49548) : taoensso.encore.console_log.call(null,G__49548));
});

taoensso.encore.logp.cljs$lang$maxFixedArity = (0);

taoensso.encore.logp.cljs$lang$applyTo = (function (seq49547){
return taoensso.encore.logp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49547));
});


taoensso.encore.sayp = (function taoensso$encore$sayp(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49566 = arguments.length;
var i__8823__auto___49567 = (0);
while(true){
if((i__8823__auto___49567 < len__8822__auto___49566)){
args__8829__auto__.push((arguments[i__8823__auto___49567]));

var G__49568 = (i__8823__auto___49567 + (1));
i__8823__auto___49567 = G__49568;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var G__49550 = taoensso.encore.str_join.cljs$core$IFn$_invoke$arity$3(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$1(taoensso.encore.nil__GT_str),xs);
return alert(G__49550);
});

taoensso.encore.sayp.cljs$lang$maxFixedArity = (0);

taoensso.encore.sayp.cljs$lang$applyTo = (function (seq49549){
return taoensso.encore.sayp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49549));
});


taoensso.encore.logf = (function taoensso$encore$logf(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49569 = arguments.length;
var i__8823__auto___49570 = (0);
while(true){
if((i__8823__auto___49570 < len__8822__auto___49569)){
args__8829__auto__.push((arguments[i__8823__auto___49570]));

var G__49571 = (i__8823__auto___49570 + (1));
i__8823__auto___49570 = G__49571;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__49553 = taoensso.encore.format_STAR_(fmt,xs);
return (taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.console_log.cljs$core$IFn$_invoke$arity$1(G__49553) : taoensso.encore.console_log.call(null,G__49553));
});

taoensso.encore.logf.cljs$lang$maxFixedArity = (1);

taoensso.encore.logf.cljs$lang$applyTo = (function (seq49551){
var G__49552 = cljs.core.first(seq49551);
var seq49551__$1 = cljs.core.next(seq49551);
return taoensso.encore.logf.cljs$core$IFn$_invoke$arity$variadic(G__49552,seq49551__$1);
});


taoensso.encore.sayf = (function taoensso$encore$sayf(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49572 = arguments.length;
var i__8823__auto___49573 = (0);
while(true){
if((i__8823__auto___49573 < len__8822__auto___49572)){
args__8829__auto__.push((arguments[i__8823__auto___49573]));

var G__49574 = (i__8823__auto___49573 + (1));
i__8823__auto___49573 = G__49574;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
var G__49556 = taoensso.encore.format_STAR_(fmt,xs);
return alert(G__49556);
});

taoensso.encore.sayf.cljs$lang$maxFixedArity = (1);

taoensso.encore.sayf.cljs$lang$applyTo = (function (seq49554){
var G__49555 = cljs.core.first(seq49554);
var seq49554__$1 = cljs.core.next(seq49554);
return taoensso.encore.sayf.cljs$core$IFn$_invoke$arity$variadic(G__49555,seq49554__$1);
});

/**
 * Returns `js/window`'s current location as a map.
 */
taoensso.encore.get_win_loc = (function taoensso$encore$get_win_loc(){
var b2__47185__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__47185__auto__)){
var js_win = b2__47185__auto__;
var b2__47185__auto____$1 = js_win.location;
if(cljs.core.truth_(b2__47185__auto____$1)){
var loc = b2__47185__auto____$1;
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$href,loc.href,cljs.core.cst$kw$protocol,loc.protocol,cljs.core.cst$kw$hostname,loc.hostname,cljs.core.cst$kw$host,loc.host,cljs.core.cst$kw$pathname,loc.pathname,cljs.core.cst$kw$search,loc.search,cljs.core.cst$kw$hash,loc.hash], null);
} else {
return null;
}
} else {
return null;
}
});
taoensso.encore.xhr_pool_ = (new cljs.core.Delay((function (){
return (new goog.net.XhrIoPool());
}),null));

/**
 * Returns an immediately available XhrIo instance, or nil. The instance must
 *  be released back to pool manually.
 */
taoensso.encore.get_pooled_xhr_BANG_ = (function taoensso$encore$get_pooled_xhr_BANG_(){
var result = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.encore.xhr_pool_) : cljs.core.deref.call(null,taoensso.encore.xhr_pool_)).getObject();
if((void 0 === result)){
return null;
} else {
return result;
}
});

taoensso.encore.js_form_data_QMARK_ = ((typeof FormData !== 'undefined')?(function (x){
return (x instanceof FormData);
}):(function (x){
return null;
}));

taoensso.encore.js_file_QMARK_ = ((typeof File !== 'undefined')?(function (x){
return (x instanceof File);
}):(function (x){
return null;
}));

/**
 * Returns [<uri> <?data>]
 */
taoensso.encore.coerce_xhr_params = (function (){var url_encode = (function() {
var taoensso$encore$url_encode = null;
var taoensso$encore$url_encode__1 = (function (params){
if(cljs.core.seq(params)){
return (function (){var G__49576 = (new goog.structs.Map(cljs.core.clj__GT_js(params)));
return goog.Uri.QueryData.createFromMap(G__49576);
})().toString();
} else {
return null;
}
});
var taoensso$encore$url_encode__2 = (function (uri,params){
var qstr = taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1(params);
var uri_with_query = ((clojure.string.blank_QMARK_(qstr))?uri:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri_with_query,null], null);
});
taoensso$encore$url_encode = function(uri,params){
switch(arguments.length){
case 1:
return taoensso$encore$url_encode__1.call(this,uri);
case 2:
return taoensso$encore$url_encode__2.call(this,uri,params);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$url_encode__1;
taoensso$encore$url_encode.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$url_encode__2;
return taoensso$encore$url_encode;
})()
;
var adaptive_encode = ((function (url_encode){
return (function (uri,params){
if(cljs.core.truth_((taoensso.encore.js_form_data_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.js_form_data_QMARK_.cljs$core$IFn$_invoke$arity$1(params) : taoensso.encore.js_form_data_QMARK_.call(null,params)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,params], null);
} else {
var e_49589 = (function (){try{if(cljs.core.map_QMARK_(params)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e49577){if((e49577 instanceof Error)){
var e = e49577;
return e;
} else {
throw e49577;

}
}})();
if((e_49589 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2675,"(map? params)",params,e_49589,null);
}

if(cljs.core.truth_((function (){var and__7589__auto__ = typeof FormData !== 'undefined';
if(and__7589__auto__){
return taoensso.encore.rsome(taoensso.encore.js_file_QMARK_,cljs.core.vals(params));
} else {
return and__7589__auto__;
}
})())){
var form_data = (new FormData());
var seq__49578_49590 = cljs.core.seq(params);
var chunk__49579_49591 = null;
var count__49580_49592 = (0);
var i__49581_49593 = (0);
while(true){
if((i__49581_49593 < count__49580_49592)){
var vec__49582_49594 = chunk__49579_49591.cljs$core$IIndexed$_nth$arity$2(null,i__49581_49593);
var k_49595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49582_49594,(0),null);
var v_49596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49582_49594,(1),null);
form_data.append(cljs.core.name(k_49595),v_49596);

var G__49597 = seq__49578_49590;
var G__49598 = chunk__49579_49591;
var G__49599 = count__49580_49592;
var G__49600 = (i__49581_49593 + (1));
seq__49578_49590 = G__49597;
chunk__49579_49591 = G__49598;
count__49580_49592 = G__49599;
i__49581_49593 = G__49600;
continue;
} else {
var temp__6738__auto___49601 = cljs.core.seq(seq__49578_49590);
if(temp__6738__auto___49601){
var seq__49578_49602__$1 = temp__6738__auto___49601;
if(cljs.core.chunked_seq_QMARK_(seq__49578_49602__$1)){
var c__8512__auto___49603 = cljs.core.chunk_first(seq__49578_49602__$1);
var G__49604 = cljs.core.chunk_rest(seq__49578_49602__$1);
var G__49605 = c__8512__auto___49603;
var G__49606 = cljs.core.count(c__8512__auto___49603);
var G__49607 = (0);
seq__49578_49590 = G__49604;
chunk__49579_49591 = G__49605;
count__49580_49592 = G__49606;
i__49581_49593 = G__49607;
continue;
} else {
var vec__49585_49608 = cljs.core.first(seq__49578_49602__$1);
var k_49609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49585_49608,(0),null);
var v_49610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49585_49608,(1),null);
form_data.append(cljs.core.name(k_49609),v_49610);

var G__49611 = cljs.core.next(seq__49578_49602__$1);
var G__49612 = null;
var G__49613 = (0);
var G__49614 = (0);
seq__49578_49590 = G__49611;
chunk__49579_49591 = G__49612;
count__49580_49592 = G__49613;
i__49581_49593 = G__49614;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,form_data], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,url_encode.cljs$core$IFn$_invoke$arity$1(params)], null);
}
}
});})(url_encode))
;
return ((function (url_encode,adaptive_encode){
return (function (uri,method,params){
if(cljs.core.truth_(((function (url_encode,adaptive_encode){
return (function (x){
var or__7601__auto__ = (x == null);
if(or__7601__auto__){
return or__7601__auto__;
} else {
return taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_).call(null,x);
}
});})(url_encode,adaptive_encode))
.call(null,params))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2687,"([:or nil? map?] params)",params,null,null);
}

var G__49588 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__49588) {
case "get":
return url_encode.cljs$core$IFn$_invoke$arity$2(uri,params);

break;
case "post":
return adaptive_encode(uri,params);

break;
case "put":
return adaptive_encode(uri,params);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)].join('')));

}
});
;})(url_encode,adaptive_encode))
})();
/**
 * Alpha, subject to change. Simple, lightweight Ajax via Google Closure.
 *   Returns the resulting XhrIo[1] instance, or nil.
 * 
 *   (ajax-lite "/my-post-route"
 *  {:method     :post
 *   :params     {:username "Rich Hickey" :type "Awesome"}
 *   :headers    {"Foo" "Bar"}
 *   :resp-type  :text
 *   :timeout-ms 7000
 *   :with-credentials? false ; Enable if using CORS (requires xhr v2+)
 *  }
 *  (fn async-callback-fn [resp-map]
 *    (let [{:keys [success? ?status ?error ?content ?content-type]} resp-map]
 *      ;; ?status - e/o #{nil 200 404 ...}, non-nil iff server responded
 *      ;; ?error  - e/o #{nil <http-error-status-code> <exception> :timeout
 *                         :abort :http-error :exception :xhr-pool-depleted}
 *      (js/alert (str "Ajax response: " resp-map)))))
 * 
 *   [1] Ref. https://developers.google.com/closure/library/docs/xhrio
 */
taoensso.encore.ajax_lite = (function taoensso$encore$ajax_lite(uri,p__49617,callback_fn){
var map__49650 = p__49617;
var map__49650__$1 = ((((!((map__49650 == null)))?((((map__49650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49650):map__49650);
var opts = map__49650__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49650__$1,cljs.core.cst$kw$method,cljs.core.cst$kw$get);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49650__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49650__$1,cljs.core.cst$kw$headers);
var timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49650__$1,cljs.core.cst$kw$timeout_DASH_ms,(10000));
var resp_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49650__$1,cljs.core.cst$kw$resp_DASH_type,cljs.core.cst$kw$auto);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49650__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
if(cljs.core.truth_(((function (map__49650,map__49650__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (x){
var or__7601__auto__ = (x == null);
if(or__7601__auto__){
return or__7601__auto__;
} else {
return taoensso.truss.impl.non_throwing(taoensso.encore.nat_int_QMARK_).call(null,x);
}
});})(map__49650,map__49650__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
.call(null,timeout_ms))){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.encore",2719,"([:or nil? nat-int?] timeout-ms)",timeout_ms,null,null);
}

var b2__47185__auto__ = taoensso.encore.get_pooled_xhr_BANG_();
if(cljs.core.truth_(b2__47185__auto__)){
var xhr = b2__47185__auto__;
try{var timeout_ms__$1 = (function (){var or__7601__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return timeout_ms;
}
})();
var xhr_method = (function (){var G__49657 = (((method instanceof cljs.core.Keyword))?method.fqn:null);
switch (G__49657) {
case "get":
return "GET";

break;
case "post":
return "POST";

break;
case "put":
return "PUT";

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(method)].join('')));

}
})();
var vec__49654 = (taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3 ? taoensso.encore.coerce_xhr_params.cljs$core$IFn$_invoke$arity$3(uri,method,params) : taoensso.encore.coerce_xhr_params.call(null,uri,method,params));
var xhr_uri = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49654,(0),null);
var xhr__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49654,(1),null);
var xhr_headers = (function (){var headers__$1 = taoensso.encore.map_keys(((function (timeout_ms__$1,xhr_method,vec__49654,xhr_uri,xhr__QMARK_data,xhr,b2__47185__auto__,map__49650,map__49650__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (p1__49616_SHARP_){
return clojure.string.lower_case(cljs.core.name(p1__49616_SHARP_));
});})(timeout_ms__$1,xhr_method,vec__49654,xhr_uri,xhr__QMARK_data,xhr,b2__47185__auto__,map__49650,map__49650__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
,headers);
var headers__$2 = taoensso.encore.assoc_some.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with",cljs.core.get.cljs$core$IFn$_invoke$arity$3(headers__$1,"x-requested-with","XMLHTTPRequest"));
return cljs.core.clj__GT_js(headers__$2);
})();
var G__49658_49683 = xhr;
var G__49659_49684 = G__49658_49683;
var G__49660_49685 = goog.net.EventType.READY;
var G__49661_49686 = ((function (G__49659_49684,G__49660_49685,G__49658_49683,timeout_ms__$1,xhr_method,vec__49654,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__47185__auto__,map__49650,map__49650__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (_){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.encore.xhr_pool_) : cljs.core.deref.call(null,taoensso.encore.xhr_pool_)).releaseObject(xhr);
});})(G__49659_49684,G__49660_49685,G__49658_49683,timeout_ms__$1,xhr_method,vec__49654,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__47185__auto__,map__49650,map__49650__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listenOnce(G__49659_49684,G__49660_49685,G__49661_49686);

var G__49662_49687 = G__49658_49683;
var G__49663_49688 = goog.net.EventType.COMPLETE;
var G__49664_49689 = ((function (G__49662_49687,G__49663_49688,G__49658_49683,timeout_ms__$1,xhr_method,vec__49654,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__47185__auto__,map__49650,map__49650__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function taoensso$encore$ajax_lite_$_wrapped_callback_fn(resp){
var success_QMARK_ = xhr.isSuccess();
var _status = xhr.getStatus();
var vec__49671 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(_status,(-1)))?(function (){var _QMARK_content_type = xhr.getResponseHeader("content-type");
var _QMARK_content = (function (){var resp_type__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_type,cljs.core.cst$kw$auto))?resp_type:(((_QMARK_content_type == null))?cljs.core.cst$kw$text:(function (){var cts = clojure.string.lower_case([cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_content_type)].join(''));
var match_QMARK_ = ((function (cts,_QMARK_content_type,success_QMARK_,_status,G__49662_49687,G__49663_49688,G__49658_49683,timeout_ms__$1,xhr_method,vec__49654,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__47185__auto__,map__49650,map__49650__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (s){
return taoensso.encore.str_contains_QMARK_(cts,s);
});})(cts,_QMARK_content_type,success_QMARK_,_status,G__49662_49687,G__49663_49688,G__49658_49683,timeout_ms__$1,xhr_method,vec__49654,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__47185__auto__,map__49650,map__49650__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
if(cljs.core.truth_(match_QMARK_("/edn"))){
return cljs.core.cst$kw$edn;
} else {
if(cljs.core.truth_(match_QMARK_("/json"))){
return cljs.core.cst$kw$json;
} else {
if(cljs.core.truth_(match_QMARK_("/xml"))){
return cljs.core.cst$kw$xml;
} else {
return cljs.core.cst$kw$text;
}
}
}
})()));
try{var G__49675 = (((resp_type__$1 instanceof cljs.core.Keyword))?resp_type__$1.fqn:null);
switch (G__49675) {
case "edn":
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(xhr.getResponseText());

break;
case "json":
return xhr.getResponseJson();

break;
case "xml":
return xhr.getResponseXml();

break;
case "text":
return xhr.getResponseText();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(resp_type__$1)].join('')));

}
}catch (e49674){if((e49674 instanceof Error)){
var _e = e49674;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$ajax_SLASH_bad_DASH_response_DASH_type,resp_type__$1,cljs.core.cst$kw$ajax_SLASH_resp_DASH_as_DASH_text,xhr.getResponseText()], null);
} else {
throw e49674;

}
}})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_status,_QMARK_content_type,_QMARK_content], null);
})():null);
var _QMARK_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49671,(0),null);
var _QMARK_content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49671,(1),null);
var _QMARK_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49671,(2),null);
var G__49676 = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$raw_DASH_resp,resp,cljs.core.cst$kw$xhr,xhr,cljs.core.cst$kw$success_QMARK_,success_QMARK_,cljs.core.cst$kw$_QMARK_status,_QMARK_status,cljs.core.cst$kw$_QMARK_content_DASH_type,_QMARK_content_type,cljs.core.cst$kw$_QMARK_content,_QMARK_content,cljs.core.cst$kw$_QMARK_error,(cljs.core.truth_(success_QMARK_)?null:(cljs.core.truth_(_QMARK_status)?_QMARK_status:cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.net.ErrorCode.NO_ERROR,null,goog.net.ErrorCode.EXCEPTION,cljs.core.cst$kw$exception,goog.net.ErrorCode.HTTP_ERROR,cljs.core.cst$kw$http_DASH_error,goog.net.ErrorCode.ABORT,cljs.core.cst$kw$abort,goog.net.ErrorCode.TIMEOUT,cljs.core.cst$kw$timeout]),xhr.getLastErrorCode(),cljs.core.cst$kw$unknown)))], null);
return (callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__49676) : callback_fn.call(null,G__49676));
});})(G__49662_49687,G__49663_49688,G__49658_49683,timeout_ms__$1,xhr_method,vec__49654,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__47185__auto__,map__49650,map__49650__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listenOnce(G__49662_49687,G__49663_49688,G__49664_49689);


var b2__47185__auto___49691__$1 = cljs.core.cst$kw$progress_DASH_fn.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(b2__47185__auto___49691__$1)){
var pf_49692 = b2__47185__auto___49691__$1;
var G__49677_49693 = xhr;
var G__49678_49694 = goog.net.EventType.PROGRESS;
var G__49679_49695 = ((function (G__49677_49693,G__49678_49694,pf_49692,b2__47185__auto___49691__$1,timeout_ms__$1,xhr_method,vec__49654,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__47185__auto__,map__49650,map__49650__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_){
return (function (ev){
var length_computable_QMARK_ = ev.lengthComputable;
var loaded = ev.loaded;
var total = ev.total;
var _QMARK_ratio = (cljs.core.truth_((function (){var and__7589__auto__ = length_computable_QMARK_;
if(cljs.core.truth_(and__7589__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(total,(0));
} else {
return and__7589__auto__;
}
})())?(loaded / total):null);
var G__49680 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$_QMARK_ratio,_QMARK_ratio,cljs.core.cst$kw$length_DASH_computable_QMARK_,length_computable_QMARK_,cljs.core.cst$kw$loaded,loaded,cljs.core.cst$kw$total,total,cljs.core.cst$kw$ev,ev], null);
return (pf_49692.cljs$core$IFn$_invoke$arity$1 ? pf_49692.cljs$core$IFn$_invoke$arity$1(G__49680) : pf_49692.call(null,G__49680));
});})(G__49677_49693,G__49678_49694,pf_49692,b2__47185__auto___49691__$1,timeout_ms__$1,xhr_method,vec__49654,xhr_uri,xhr__QMARK_data,xhr_headers,xhr,b2__47185__auto__,map__49650,map__49650__$1,opts,method,params,headers,timeout_ms,resp_type,with_credentials_QMARK_))
;
goog.events.listen(G__49677_49693,G__49678_49694,G__49679_49695);
} else {
}

xhr.setTimeoutInterval((function (){var or__7601__auto__ = timeout_ms__$1;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return (0);
}
})());

if(cljs.core.truth_(with_credentials_QMARK_)){
xhr.setWithCredentials(true);
} else {
}

xhr.send(xhr_uri,xhr_method,xhr__QMARK_data,xhr_headers);

return xhr;
}catch (e49652){if((e49652 instanceof Error)){
var e = e49652;
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(taoensso.encore.xhr_pool_) : cljs.core.deref.call(null,taoensso.encore.xhr_pool_)).releaseObject(xhr);

var G__49653_49696 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,e], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__49653_49696) : callback_fn.call(null,G__49653_49696));

return null;
} else {
throw e49652;

}
}} else {
var G__49681_49697 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$_QMARK_error,cljs.core.cst$kw$xhr_DASH_pool_DASH_depleted], null);
(callback_fn.cljs$core$IFn$_invoke$arity$1 ? callback_fn.cljs$core$IFn$_invoke$arity$1(G__49681_49697) : callback_fn.call(null,G__49681_49697));

return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_encode = (function taoensso$encore$url_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(clojure.string.replace((function (){var G__49700 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
var G__49701 = s;
return encodeURIComponent(G__49700,G__49701);
})(),"*","%2A"),"'","%27");
} else {
return null;
}
});
/**
 * Stolen from http://goo.gl/99NSR1
 */
taoensso.encore.url_decode = (function taoensso$encore$url_decode(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49708 = arguments.length;
var i__8823__auto___49709 = (0);
while(true){
if((i__8823__auto___49709 < len__8822__auto___49708)){
args__8829__auto__.push((arguments[i__8823__auto___49709]));

var G__49710 = (i__8823__auto___49709 + (1));
i__8823__auto___49709 = G__49710;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__49704){
var vec__49705 = p__49704;
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49705,(0),null);
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});

taoensso.encore.url_decode.cljs$lang$maxFixedArity = (1);

taoensso.encore.url_decode.cljs$lang$applyTo = (function (seq49702){
var G__49703 = cljs.core.first(seq49702);
var seq49702__$1 = cljs.core.next(seq49702);
return taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(G__49703,seq49702__$1);
});

taoensso.encore.format_query_string = (function taoensso$encore$format_query_string(m){
var param = (function (k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode(taoensso.encore.as_qname(k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.encore.url_encode((function (){var or__7601__auto__ = taoensso.encore.as__QMARK_qname(v);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
}
})()))].join('');
});
var join = ((function (param){
return (function (strs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",strs);
});})(param))
;
if(cljs.core.empty_QMARK_(m)){
return "";
} else {
return join((function (){var iter__8463__auto__ = ((function (param,join){
return (function taoensso$encore$format_query_string_$_iter__49729(s__49730){
return (new cljs.core.LazySeq(null,((function (param,join){
return (function (){
var s__49730__$1 = s__49730;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__49730__$1);
if(temp__6738__auto__){
var s__49730__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49730__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__49730__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__49732 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__49731 = (0);
while(true){
if((i__49731 < size__8462__auto__)){
var vec__49741 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__49731);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49741,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49741,(1),null);
if(taoensso.encore.some_QMARK_(v)){
cljs.core.chunk_append(b__49732,((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__7601__auto__ = cljs.core.seq(v);
if(or__7601__auto__){
return or__7601__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)));

var G__49747 = (i__49731 + (1));
i__49731 = G__49747;
continue;
} else {
var G__49748 = (i__49731 + (1));
i__49731 = G__49748;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49732),taoensso$encore$format_query_string_$_iter__49729(cljs.core.chunk_rest(s__49730__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49732),null);
}
} else {
var vec__49744 = cljs.core.first(s__49730__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49744,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49744,(1),null);
if(taoensso.encore.some_QMARK_(v)){
return cljs.core.cons(((cljs.core.sequential_QMARK_(v))?join(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(param,k),(function (){var or__7601__auto__ = cljs.core.seq(v);
if(or__7601__auto__){
return or__7601__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
})())):param(k,v)),taoensso$encore$format_query_string_$_iter__49729(cljs.core.rest(s__49730__$2)));
} else {
var G__49749 = cljs.core.rest(s__49730__$2);
s__49730__$1 = G__49749;
continue;
}
}
} else {
return null;
}
break;
}
});})(param,join))
,null,null));
});})(param,join))
;
return iter__8463__auto__(m);
})());
}
});
taoensso.encore.assoc_conj = (function taoensso$encore$assoc_conj(m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var b2__47185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(b2__47185__auto__)){
var cur = b2__47185__auto__;
if(cljs.core.vector_QMARK_(cur)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cur,v);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cur,v], null);
}
} else {
return v;
}
})());
});
/**
 * Based on `ring-codec/form-decode`.
 */
taoensso.encore.parse_query_params = (function taoensso$encore$parse_query_params(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49759 = arguments.length;
var i__8823__auto___49760 = (0);
while(true){
if((i__8823__auto___49760 < len__8822__auto___49759)){
args__8829__auto__.push((arguments[i__8823__auto___49760]));

var G__49761 = (i__8823__auto___49760 + (1));
i__8823__auto___49760 = G__49761;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__49752){
var vec__49753 = p__49752;
var keywordize_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49753,(0),null);
var encoding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49753,(1),null);
if((clojure.string.blank_QMARK_(s)) || (!(taoensso.encore.str_contains_QMARK_(s,"=")))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var s__$1 = ((taoensso.encore.str_starts_with_QMARK_(s,"?"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)):s);
var m = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s__$1,vec__49753,keywordize_QMARK_,encoding){
return (function (m,param){
var b2__47185__auto__ = clojure.string.split.cljs$core$IFn$_invoke$arity$3(param,/=/,(2));
if(cljs.core.truth_(b2__47185__auto__)){
var vec__49756 = b2__47185__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49756,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49756,(1),null);
return taoensso.encore.assoc_conj(m,taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(k,cljs.core.array_seq([encoding], 0)),taoensso.encore.url_decode.cljs$core$IFn$_invoke$arity$variadic(v,cljs.core.array_seq([encoding], 0)));
} else {
return m;
}
});})(s__$1,vec__49753,keywordize_QMARK_,encoding))
,cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2(s__$1,/&/));
if(cljs.core.truth_(keywordize_QMARK_)){
return taoensso.encore.map_keys(cljs.core.keyword,m);
} else {
return m;
}
}
});

taoensso.encore.parse_query_params.cljs$lang$maxFixedArity = (1);

taoensso.encore.parse_query_params.cljs$lang$applyTo = (function (seq49750){
var G__49751 = cljs.core.first(seq49750);
var seq49750__$1 = cljs.core.next(seq49750);
return taoensso.encore.parse_query_params.cljs$core$IFn$_invoke$arity$variadic(G__49751,seq49750__$1);
});

taoensso.encore.merge_url_with_query_string = (function taoensso$encore$merge_url_with_query_string(url,m){
var vec__49765 = clojure.string.split.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join(''),/\?/,(2));
var url__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49765,(0),null);
var _QMARK_qstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49765,(1),null);
var qmap = taoensso.encore.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(_QMARK_qstr)?taoensso.encore.map_keys(cljs.core.keyword,taoensso.encore.parse_query_params(_QMARK_qstr)):null),taoensso.encore.map_keys(cljs.core.keyword,m)], 0));
var _QMARK_qstr__$1 = taoensso.encore.as__QMARK_nblank(taoensso.encore.format_query_string(qmap));
var b2__47185__auto__ = _QMARK_qstr__$1;
if(cljs.core.truth_(b2__47185__auto__)){
var qstr = b2__47185__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(url__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("?"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(qstr)].join('');
} else {
return url__$1;
}
});
taoensso.encore._new_stubfn_ = (function taoensso$encore$_new_stubfn_(name){
return cljs.core.volatile_BANG_((function() { 
var G__49768__delegate = function (args){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Attempting to call uninitialized stub fn",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stub,name,cljs.core.cst$kw$args,args], null));
};
var G__49768 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49769__i = 0, G__49769__a = new Array(arguments.length -  0);
while (G__49769__i < G__49769__a.length) {G__49769__a[G__49769__i] = arguments[G__49769__i + 0]; ++G__49769__i;}
  args = new cljs.core.IndexedSeq(G__49769__a,0);
} 
return G__49768__delegate.call(this,args);};
G__49768.cljs$lang$maxFixedArity = 0;
G__49768.cljs$lang$applyTo = (function (arglist__49770){
var args = cljs.core.seq(arglist__49770);
return G__49768__delegate(args);
});
G__49768.cljs$core$IFn$_invoke$arity$variadic = G__49768__delegate;
return G__49768;
})()
);
});

taoensso.encore._assert_unstub_val = (function taoensso$encore$_assert_unstub_val(f){
if(cljs.core.fn_QMARK_(f)){
return f;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unstub value must be a fn",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,f,cljs.core.cst$kw$type,cljs.core.type(f)], null));
}
});
/**
 * Returns (fn [?ns]) -> truthy.
 */
taoensso.encore.compile_ns_filter = (function (){var compile1 = (function (x){
if(taoensso.encore.re_pattern_QMARK_(x)){
return (function (ns_str){
return cljs.core.re_find(x,ns_str);
});
} else {
if(typeof x === 'string'){
if(taoensso.encore.str_contains_QMARK_(x,"*")){
var re = cljs.core.re_pattern(clojure.string.replace(clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1("^"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''),".","\\."),"*","(.*)"));
return ((function (re){
return (function (ns_str){
return cljs.core.re_find(re,ns_str);
});
;})(re))
} else {
return (function (ns_str){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_str,x);
});
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected ns-pattern type",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$given,x,cljs.core.cst$kw$type,cljs.core.type(x)], null));
}
}
});
return ((function (compile1){
return (function() {
var taoensso$encore$self = null;
var taoensso$encore$self__1 = (function (ns_pattern){
var x = ns_pattern;
if(cljs.core.map_QMARK_(x)){
return taoensso$encore$self.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$whitelist.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$blacklist.cljs$core$IFn$_invoke$arity$1(x));
} else {
if((cljs.core.vector_QMARK_(x)) || (cljs.core.set_QMARK_(x))){
return taoensso$encore$self.cljs$core$IFn$_invoke$arity$2(x,null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,"*")){
return ((function (x,compile1){
return (function (_QMARK_ns){
return true;
});
;})(x,compile1))
} else {
var match_QMARK_ = compile1(x);
return ((function (match_QMARK_,x,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__49784 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
return (match_QMARK_.cljs$core$IFn$_invoke$arity$1 ? match_QMARK_.cljs$core$IFn$_invoke$arity$1(G__49784) : match_QMARK_.call(null,G__49784));
})())){
return true;
} else {
return null;
}
});
;})(match_QMARK_,x,compile1))
}
}
}
});
var taoensso$encore$self__2 = (function (whitelist,blacklist){
var white = ((cljs.core.seq(whitelist))?(function (){var match_fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(compile1,whitelist);
var vec__49785 = match_fns;
var seq__49786 = cljs.core.seq(vec__49785);
var first__49787 = cljs.core.first(seq__49786);
var seq__49786__$1 = cljs.core.next(seq__49786);
var m1 = first__49787;
var mn = seq__49786__$1;
if(mn){
return ((function (match_fns,vec__49785,seq__49786,first__49787,seq__49786__$1,m1,mn,compile1){
return (function (ns_str){
return taoensso.encore.rsome(((function (match_fns,vec__49785,seq__49786,first__49787,seq__49786__$1,m1,mn,compile1){
return (function (p1__49771_SHARP_){
return (p1__49771_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__49771_SHARP_.cljs$core$IFn$_invoke$arity$1(ns_str) : p1__49771_SHARP_.call(null,ns_str));
});})(match_fns,vec__49785,seq__49786,first__49787,seq__49786__$1,m1,mn,compile1))
,match_fns);
});
;})(match_fns,vec__49785,seq__49786,first__49787,seq__49786__$1,m1,mn,compile1))
} else {
return ((function (match_fns,vec__49785,seq__49786,first__49787,seq__49786__$1,m1,mn,compile1){
return (function (ns_str){
return (m1.cljs$core$IFn$_invoke$arity$1 ? m1.cljs$core$IFn$_invoke$arity$1(ns_str) : m1.call(null,ns_str));
});
;})(match_fns,vec__49785,seq__49786,first__49787,seq__49786__$1,m1,mn,compile1))
}
})():null);
var black = ((cljs.core.seq(blacklist))?(function (){var match_fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(compile1,blacklist);
var vec__49788 = match_fns;
var seq__49789 = cljs.core.seq(vec__49788);
var first__49790 = cljs.core.first(seq__49789);
var seq__49789__$1 = cljs.core.next(seq__49789);
var m1 = first__49790;
var mn = seq__49789__$1;
if(mn){
return ((function (match_fns,vec__49788,seq__49789,first__49790,seq__49789__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not(taoensso.encore.rsome(((function (match_fns,vec__49788,seq__49789,first__49790,seq__49789__$1,m1,mn,white,compile1){
return (function (p1__49772_SHARP_){
return (p1__49772_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__49772_SHARP_.cljs$core$IFn$_invoke$arity$1(ns_str) : p1__49772_SHARP_.call(null,ns_str));
});})(match_fns,vec__49788,seq__49789,first__49790,seq__49789__$1,m1,mn,white,compile1))
,match_fns));
});
;})(match_fns,vec__49788,seq__49789,first__49790,seq__49789__$1,m1,mn,white,compile1))
} else {
return ((function (match_fns,vec__49788,seq__49789,first__49790,seq__49789__$1,m1,mn,white,compile1){
return (function (ns_str){
return cljs.core.not((m1.cljs$core$IFn$_invoke$arity$1 ? m1.cljs$core$IFn$_invoke$arity$1(ns_str) : m1.call(null,ns_str)));
});
;})(match_fns,vec__49788,seq__49789,first__49790,seq__49789__$1,m1,mn,white,compile1))
}
})():null);
if(cljs.core.truth_((function (){var and__7589__auto__ = white;
if(cljs.core.truth_(and__7589__auto__)){
return black;
} else {
return and__7589__auto__;
}
})())){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
var ns_str = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
if(cljs.core.truth_((white.cljs$core$IFn$_invoke$arity$1 ? white.cljs$core$IFn$_invoke$arity$1(ns_str) : white.call(null,ns_str)))){
if(cljs.core.truth_((black.cljs$core$IFn$_invoke$arity$1 ? black.cljs$core$IFn$_invoke$arity$1(ns_str) : black.call(null,ns_str)))){
return true;
} else {
return null;
}
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(white)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__49791 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
return (white.cljs$core$IFn$_invoke$arity$1 ? white.cljs$core$IFn$_invoke$arity$1(G__49791) : white.call(null,G__49791));
})())){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
if(cljs.core.truth_(black)){
return ((function (white,black,compile1){
return (function (_QMARK_ns){
if(cljs.core.truth_((function (){var G__49792 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_ns)].join('');
return (black.cljs$core$IFn$_invoke$arity$1 ? black.cljs$core$IFn$_invoke$arity$1(G__49792) : black.call(null,G__49792));
})())){
return true;
} else {
return null;
}
});
;})(white,black,compile1))
} else {
return ((function (white,black,compile1){
return (function (_QMARK_ns){
return true;
});
;})(white,black,compile1))
}
}
}
});
taoensso$encore$self = function(whitelist,blacklist){
switch(arguments.length){
case 1:
return taoensso$encore$self__1.call(this,whitelist);
case 2:
return taoensso$encore$self__2.call(this,whitelist,blacklist);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
taoensso$encore$self.cljs$core$IFn$_invoke$arity$1 = taoensso$encore$self__1;
taoensso$encore$self.cljs$core$IFn$_invoke$arity$2 = taoensso$encore$self__2;
return taoensso$encore$self;
})()
;})(compile1))
})();

/**
 * @interface
 */
taoensso.encore.ITimeoutImpl = function(){};

taoensso.encore._schedule_timeout = (function taoensso$encore$_schedule_timeout(_,msecs,f){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 == null)))){
return _.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3(_,msecs,f);
} else {
var x__8319__auto__ = (((_ == null))?null:_);
var m__8320__auto__ = (taoensso.encore._schedule_timeout[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__8320__auto__.call(null,_,msecs,f));
} else {
var m__8320__auto____$1 = (taoensso.encore._schedule_timeout["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$3(_,msecs,f) : m__8320__auto____$1.call(null,_,msecs,f));
} else {
throw cljs.core.missing_protocol("ITimeoutImpl.-schedule-timeout",_);
}
}
}
});



/**
* @constructor
 * @implements {taoensso.encore.ITimeoutImpl}
*/
taoensso.encore.DefaultTimeoutImpl = (function (){
})
taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.encore.DefaultTimeoutImpl.prototype.taoensso$encore$ITimeoutImpl$_schedule_timeout$arity$3 = (function (_,msecs,f){
var self__ = this;
var ___$1 = this;
return window.setTimeout(f,msecs);
});

taoensso.encore.DefaultTimeoutImpl.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

taoensso.encore.DefaultTimeoutImpl.cljs$lang$type = true;

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorStr = "taoensso.encore/DefaultTimeoutImpl";

taoensso.encore.DefaultTimeoutImpl.cljs$lang$ctorPrWriter = (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"taoensso.encore/DefaultTimeoutImpl");
});

taoensso.encore.__GT_DefaultTimeoutImpl = (function taoensso$encore$__GT_DefaultTimeoutImpl(){
return (new taoensso.encore.DefaultTimeoutImpl());
});


if(typeof taoensso.encore.default_timeout_impl_ !== 'undefined'){
} else {
/**
 * Simple one-timeout timeout implementation provided by platform timer.
 *  O(logn) add, O(1) cancel, O(1) tick. Fns must be non-blocking or cheap.
 *  Similar efficiency to core.async timers (binary heap vs DelayQueue).
 */
taoensso.encore.default_timeout_impl_ = (new cljs.core.Delay((function (){
return (new taoensso.encore.DefaultTimeoutImpl());
}),null));
}

taoensso.encore._tout_pending = {};

taoensso.encore._tout_cancelled = {};

taoensso.encore.tout_result = (function taoensso$encore$tout_result(result_){
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_pending) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_pending)))){
return cljs.core.cst$kw$timeout_SLASH_pending;
} else {
if(cljs.core.truth_((taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(result_,taoensso.encore._tout_cancelled) : taoensso.encore.kw_identical_QMARK_.call(null,result_,taoensso.encore._tout_cancelled)))){
return cljs.core.cst$kw$timeout_SLASH_cancelled;
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(result_) : cljs.core.deref.call(null,result_));
}
}
});

/**
 * @interface
 */
taoensso.encore.ITimeoutFuture = function(){};

/**
 * Returns a map of timeout's public state.
 */
taoensso.encore.tf_state = (function taoensso$encore$tf_state(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_state$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_state$arity$1(_);
} else {
var x__8319__auto__ = (((_ == null))?null:_);
var m__8320__auto__ = (taoensso.encore.tf_state[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8320__auto__.call(null,_));
} else {
var m__8320__auto____$1 = (taoensso.encore.tf_state["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8320__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-state",_);
}
}
}
});

/**
 * Returns :timeout/pending, :timeout/cancelled, or the timeout's completed result.
 */
taoensso.encore.tf_poll = (function taoensso$encore$tf_poll(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(_);
} else {
var x__8319__auto__ = (((_ == null))?null:_);
var m__8320__auto__ = (taoensso.encore.tf_poll[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8320__auto__.call(null,_));
} else {
var m__8320__auto____$1 = (taoensso.encore.tf_poll["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8320__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-poll",_);
}
}
}
});

/**
 * Returns true iff the timeout is not pending (i.e. has a completed result or is cancelled).
 */
taoensso.encore.tf_done_QMARK_ = (function taoensso$encore$tf_done_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(_);
} else {
var x__8319__auto__ = (((_ == null))?null:_);
var m__8320__auto__ = (taoensso.encore.tf_done_QMARK_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8320__auto__.call(null,_));
} else {
var m__8320__auto____$1 = (taoensso.encore.tf_done_QMARK_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8320__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-done?",_);
}
}
}
});

/**
 * Returns true iff the timeout is pending.
 */
taoensso.encore.tf_pending_QMARK_ = (function taoensso$encore$tf_pending_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1(_);
} else {
var x__8319__auto__ = (((_ == null))?null:_);
var m__8320__auto__ = (taoensso.encore.tf_pending_QMARK_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8320__auto__.call(null,_));
} else {
var m__8320__auto____$1 = (taoensso.encore.tf_pending_QMARK_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8320__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-pending?",_);
}
}
}
});

/**
 * Returns true iff the timeout is cancelled.
 */
taoensso.encore.tf_cancelled_QMARK_ = (function taoensso$encore$tf_cancelled_QMARK_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1(_);
} else {
var x__8319__auto__ = (((_ == null))?null:_);
var m__8320__auto__ = (taoensso.encore.tf_cancelled_QMARK_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8320__auto__.call(null,_));
} else {
var m__8320__auto____$1 = (taoensso.encore.tf_cancelled_QMARK_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8320__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancelled?",_);
}
}
}
});

/**
 * Returns true iff the timeout was successfully cancelled (i.e. was previously pending).
 */
taoensso.encore.tf_cancel_BANG_ = (function taoensso$encore$tf_cancel_BANG_(_){
if((!((_ == null))) && (!((_.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 == null)))){
return _.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1(_);
} else {
var x__8319__auto__ = (((_ == null))?null:_);
var m__8320__auto__ = (taoensso.encore.tf_cancel_BANG_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8320__auto__.call(null,_));
} else {
var m__8320__auto____$1 = (taoensso.encore.tf_cancel_BANG_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8320__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeoutFuture.tf-cancel!",_);
}
}
}
});


/**
* @constructor
 * @implements {taoensso.encore.ITimeoutFuture}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IDeref}
*/
taoensso.encore.TimeoutFuture = (function (f,result__,udt){
this.f = f;
this.result__ = result__;
this.udt = udt;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 32768;
})
taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$ = cljs.core.PROTOCOL_SENTINEL;

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fn,self__.f,cljs.core.cst$kw$udt,self__.udt], null);
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_poll$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return taoensso.encore.tout_result((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.result__) : cljs.core.deref.call(null,self__.result__)));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.not((function (){var G__49797 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.result__) : cljs.core.deref.call(null,self__.result__));
var G__49798 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49797,G__49798) : taoensso.encore.kw_identical_QMARK_.call(null,G__49797,G__49798));
})());
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_pending_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__49799 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.result__) : cljs.core.deref.call(null,self__.result__));
var G__49800 = taoensso.encore._tout_pending;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49799,G__49800) : taoensso.encore.kw_identical_QMARK_.call(null,G__49799,G__49800));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancelled_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var G__49801 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.result__) : cljs.core.deref.call(null,self__.result__));
var G__49802 = taoensso.encore._tout_cancelled;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49801,G__49802) : taoensso.encore.kw_identical_QMARK_.call(null,G__49801,G__49802));
});

taoensso.encore.TimeoutFuture.prototype.taoensso$encore$ITimeoutFuture$tf_cancel_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.compare_and_set_BANG_(self__.result__,taoensso.encore._tout_pending,taoensso.encore._tout_cancelled);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_done_QMARK_$arity$1(null);
});

taoensso.encore.TimeoutFuture.prototype.cljs$core$IDeref$_deref$arity$1 = (function (t){
var self__ = this;
var t__$1 = this;
return t__$1.taoensso$encore$ITimeoutFuture$tf_poll$arity$1(null);
});

taoensso.encore.TimeoutFuture.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$result__,cljs.core.cst$sym$udt], null);
});

taoensso.encore.TimeoutFuture.cljs$lang$type = true;

taoensso.encore.TimeoutFuture.cljs$lang$ctorStr = "taoensso.encore/TimeoutFuture";

taoensso.encore.TimeoutFuture.cljs$lang$ctorPrWriter = (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"taoensso.encore/TimeoutFuture");
});

taoensso.encore.__GT_TimeoutFuture = (function taoensso$encore$__GT_TimeoutFuture(f,result__,udt){
return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.timeout_future_QMARK_ = (function taoensso$encore$timeout_future_QMARK_(x){
return (x instanceof taoensso.encore.TimeoutFuture);
});
/**
 * Alpha, subject to change.
 *   Returns a TimeoutFuture that will execute `f` after given msecs.
 * 
 *   Does NOT do any automatic binding conveyance.
 * 
 *   Performance depends on the provided timer implementation (`impl_`).
 *   The default implementation offers O(logn) add, O(1) cancel, O(1) tick.
 * 
 *   See `ITimeoutImpl` for extending to arbitrary timer implementations.
 */
taoensso.encore.call_after_timeout = (function taoensso$encore$call_after_timeout(var_args){
var args49803 = [];
var len__8822__auto___49806 = arguments.length;
var i__8823__auto___49807 = (0);
while(true){
if((i__8823__auto___49807 < len__8822__auto___49806)){
args49803.push((arguments[i__8823__auto___49807]));

var G__49808 = (i__8823__auto___49807 + (1));
i__8823__auto___49807 = G__49808;
continue;
} else {
}
break;
}

var G__49805 = args49803.length;
switch (G__49805) {
case 2:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49803.length)].join('')));

}
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$2 = (function (msecs,f){
return taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3(taoensso.encore.default_timeout_impl_,msecs,f);
});

taoensso.encore.call_after_timeout.cljs$core$IFn$_invoke$arity$3 = (function (impl_,msecs,f){
var msecs__$1 = cljs.core.long$(msecs);
var udt = ((new Date()).getTime() + msecs__$1);
var result__ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(taoensso.encore._tout_pending) : cljs.core.atom.call(null,taoensso.encore._tout_pending));
var cas_f = ((function (msecs__$1,udt,result__){
return (function (){
var result_ = (new cljs.core.Delay(((function (msecs__$1,udt,result__){
return (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});})(msecs__$1,udt,result__))
,null));
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(result__,taoensso.encore._tout_pending,result_))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(result_) : cljs.core.deref.call(null,result_));
} else {
return null;
}
});})(msecs__$1,udt,result__))
;
var impl_49810 = cljs.core.force(impl_);
taoensso.encore._schedule_timeout(impl_49810,msecs__$1,cas_f);

return (new taoensso.encore.TimeoutFuture(f,result__,udt));
});

taoensso.encore.call_after_timeout.cljs$lang$maxFixedArity = 3;

taoensso.encore.fixture_map__GT_fn = (function taoensso$encore$fixture_map__GT_fn(p__49812){
var map__49815 = p__49812;
var map__49815__$1 = ((((!((map__49815 == null)))?((((map__49815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49815.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49815):map__49815);
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49815__$1,cljs.core.cst$kw$before,cljs.core.cst$sym$do);
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49815__$1,cljs.core.cst$kw$after,cljs.core.cst$sym$do);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$cljs$core_SLASH_fn),(function (){var x__8535__auto__ = cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f__49811__auto__)))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})(),cljs.core.array_seq([(function (){var x__8535__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8535__auto__ = before;
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})(),(function (){var x__8535__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cst$sym$f__49811__auto__))));
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})(),(function (){var x__8535__auto__ = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((function (){var x__8535__auto__ = after;
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})())));
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})()], 0))));
});
taoensso.encore.get_window_location = taoensso.encore.get_win_loc;

taoensso.encore.backport_run_BANG_ = taoensso.encore.run_BANG_;

taoensso.encore.fq_name = taoensso.encore.as_qname;

taoensso.encore.qname = taoensso.encore.as_qname;

taoensso.encore.merge_deep_with = taoensso.encore.nested_merge_with;

taoensso.encore.merge_deep = taoensso.encore.nested_merge;

taoensso.encore.parse_bool = taoensso.encore.as__QMARK_bool;

taoensso.encore.parse_int = taoensso.encore.as__QMARK_int;

taoensso.encore.parse_float = taoensso.encore.as__QMARK_float;

taoensso.encore.swapped_STAR_ = taoensso.encore.swapped;

taoensso.encore.memoize_a0_ = taoensso.encore.memoize_;

taoensso.encore.memoize_a1_ = taoensso.encore.memoize_;

taoensso.encore.a0_memoize_ = taoensso.encore.memoize_;

taoensso.encore.a1_memoize_ = taoensso.encore.memoize_;

taoensso.encore.memoize_1 = taoensso.encore.memoize_last;

taoensso.encore.memoize1 = taoensso.encore.memoize_last;

taoensso.encore.nnil_QMARK_ = taoensso.encore.some_QMARK_;

taoensso.encore.nneg_num_QMARK_ = taoensso.encore.nat_num_QMARK_;

taoensso.encore.nneg_int_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.nneg_float_QMARK_ = taoensso.encore.nat_float_QMARK_;

taoensso.encore.uint_QMARK_ = taoensso.encore.nat_int_QMARK_;

taoensso.encore.pint_QMARK_ = taoensso.encore.pos_int_QMARK_;

taoensso.encore.nnil_EQ_ = taoensso.encore.some_EQ_;

taoensso.encore.as__QMARK_uint = taoensso.encore.as__QMARK_nat_int;

taoensso.encore.as__QMARK_pint = taoensso.encore.as__QMARK_pos_int;

taoensso.encore.as__QMARK_ufloat = taoensso.encore.as__QMARK_nat_float;

taoensso.encore.as__QMARK_pfloat = taoensso.encore.as__QMARK_pos_float;

taoensso.encore.as_uint = taoensso.encore.as_nat_int;

taoensso.encore.as_pint = taoensso.encore.as_pos_int;

taoensso.encore.as_ufloat = taoensso.encore.as_nat_float;

taoensso.encore.as_pfloat = taoensso.encore.as_pos_float;

taoensso.encore.run_BANG__STAR_ = taoensso.encore.run_BANG_;

taoensso.encore.every = taoensso.encore.revery;

taoensso.encore._QMARK_subvec_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvec);

taoensso.encore._QMARK_subvec_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,taoensso.encore.get_subvector);

taoensso.encore._QMARK_substr_LT_idx = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substr);

taoensso.encore._QMARK_substr_LT_len = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(taoensso.encore.as__QMARK_nempty_str,taoensso.encore.get_substring);

taoensso.encore.dswap_BANG_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore.nano_time = taoensso.encore.now_nano;

taoensso.encore.swap_BANG__STAR_ = taoensso.encore.swap_in_BANG__STAR_;

taoensso.encore._swap_cache_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore._unswapped = taoensso.encore.swapped_vec;

taoensso.encore._vswapped = taoensso.encore.swapped_vec;

taoensso.encore._swap_k_BANG_ = taoensso.encore._swap_val_BANG_;

taoensso.encore.update_in_STAR_ = taoensso.encore.update_in;

taoensso.encore.undefined__GT_nil = (function taoensso$encore$undefined__GT_nil(x){
if((void 0 === x)){
return null;
} else {
return x;
}
});

taoensso.encore.spaced_str_with_nils = (function taoensso$encore$spaced_str_with_nils(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.nil__GT_str,xs));
});

taoensso.encore.spaced_str = (function taoensso$encore$spaced_str(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(taoensso.encore.undefined__GT_nil,xs));
});

taoensso.encore.round = (function taoensso$encore$round(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49970 = arguments.length;
var i__8823__auto___49971 = (0);
while(true){
if((i__8823__auto___49971 < len__8822__auto___49970)){
args__8829__auto__.push((arguments[i__8823__auto___49971]));

var G__49972 = (i__8823__auto___49971 + (1));
i__8823__auto___49971 = G__49972;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic = (function (n,p__49830){
var vec__49831 = p__49830;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49831,(0),null);
var nplaces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49831,(1),null);
return taoensso.encore.round_STAR_.cljs$core$IFn$_invoke$arity$3((function (){var or__7601__auto__ = type;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.cst$kw$round;
}
})(),nplaces,n);
});

taoensso.encore.round.cljs$lang$maxFixedArity = (1);

taoensso.encore.round.cljs$lang$applyTo = (function (seq49828){
var G__49829 = cljs.core.first(seq49828);
var seq49828__$1 = cljs.core.next(seq49828);
return taoensso.encore.round.cljs$core$IFn$_invoke$arity$variadic(G__49829,seq49828__$1);
});


taoensso.encore.approx_EQ_ = (function taoensso$encore$approx_EQ_(var_args){
var args49834 = [];
var len__8822__auto___49973 = arguments.length;
var i__8823__auto___49974 = (0);
while(true){
if((i__8823__auto___49974 < len__8822__auto___49973)){
args49834.push((arguments[i__8823__auto___49974]));

var G__49975 = (i__8823__auto___49974 + (1));
i__8823__auto___49974 = G__49975;
continue;
} else {
}
break;
}

var G__49836 = args49834.length;
switch (G__49836) {
case 2:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49834.length)].join('')));

}
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
});

taoensso.encore.approx_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,signf){
return taoensso.encore.approx_EQ__EQ_.cljs$core$IFn$_invoke$arity$3(signf,x,y);
});

taoensso.encore.approx_EQ_.cljs$lang$maxFixedArity = 3;


taoensso.encore.join_once = (function taoensso$encore$join_once(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49977 = arguments.length;
var i__8823__auto___49978 = (0);
while(true){
if((i__8823__auto___49978 < len__8822__auto___49977)){
args__8829__auto__.push((arguments[i__8823__auto___49978]));

var G__49979 = (i__8823__auto___49978 + (1));
i__8823__auto___49978 = G__49979;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic = (function (sep,coll){
return taoensso.encore.str_join_once(sep,coll);
});

taoensso.encore.join_once.cljs$lang$maxFixedArity = (1);

taoensso.encore.join_once.cljs$lang$applyTo = (function (seq49837){
var G__49838 = cljs.core.first(seq49837);
var seq49837__$1 = cljs.core.next(seq49837);
return taoensso.encore.join_once.cljs$core$IFn$_invoke$arity$variadic(G__49838,seq49837__$1);
});


taoensso.encore.nnil_set = (function taoensso$encore$nnil_set(x){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2((taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.set_STAR_.cljs$core$IFn$_invoke$arity$1(x) : taoensso.encore.set_STAR_.call(null,x)),null);
});

taoensso.encore.keys_EQ_ = (function taoensso$encore$keys_EQ_(m,ks){
return taoensso.encore.ks_EQ_(ks,m);
});

taoensso.encore.keys_LT__EQ_ = (function taoensso$encore$keys_LT__EQ_(m,ks){
return taoensso.encore.ks_LT__EQ_(ks,m);
});

taoensso.encore.keys_GT__EQ_ = (function taoensso$encore$keys_GT__EQ_(m,ks){
return taoensso.encore.ks_GT__EQ_(ks,m);
});

taoensso.encore.keys_EQ_nnil_QMARK_ = (function taoensso$encore$keys_EQ_nnil_QMARK_(m,ks){
return taoensso.encore.ks_nnil_QMARK_(ks,m);
});

/**
 * Deprecated, prefer `limiter`
 */
taoensso.encore.rate_limiter_STAR_ = (function taoensso$encore$rate_limiter_STAR_(specs){
var ids_QMARK_ = taoensso.encore.rsome((function (p__49846){
var vec__49847 = p__49846;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49847,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49847,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49847,(2),null);
return id;
}),specs);
var lfn = taoensso.encore.limiter(specs);
return ((function (ids_QMARK_,lfn){
return (function() { 
var G__49980__delegate = function (args){
var b2__47185__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(lfn,args);
if(cljs.core.truth_(b2__47185__auto__)){
var vec__49850 = b2__47185__auto__;
var worst_sid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49850,(0),null);
var backoff_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49850,(1),null);
if(cljs.core.truth_(ids_QMARK_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backoff_ms,worst_sid], null);
} else {
return backoff_ms;
}
} else {
return null;
}
};
var G__49980 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49981__i = 0, G__49981__a = new Array(arguments.length -  0);
while (G__49981__i < G__49981__a.length) {G__49981__a[G__49981__i] = arguments[G__49981__i + 0]; ++G__49981__i;}
  args = new cljs.core.IndexedSeq(G__49981__a,0);
} 
return G__49980__delegate.call(this,args);};
G__49980.cljs$lang$maxFixedArity = 0;
G__49980.cljs$lang$applyTo = (function (arglist__49982){
var args = cljs.core.seq(arglist__49982);
return G__49980__delegate(args);
});
G__49980.cljs$core$IFn$_invoke$arity$variadic = G__49980__delegate;
return G__49980;
})()
;
;})(ids_QMARK_,lfn))
});

taoensso.encore.rate_limit = (function taoensso$encore$rate_limit(specs,f){
var rl = taoensso.encore.rate_limiter_STAR_(specs);
return ((function (rl){
return (function() { 
var G__49983__delegate = function (args){
var b2__47185__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__47185__auto__)){
var backoff = b2__47185__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,backoff], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)),null], null);
}
};
var G__49983 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49984__i = 0, G__49984__a = new Array(arguments.length -  0);
while (G__49984__i < G__49984__a.length) {G__49984__a[G__49984__i] = arguments[G__49984__i + 0]; ++G__49984__i;}
  args = new cljs.core.IndexedSeq(G__49984__a,0);
} 
return G__49983__delegate.call(this,args);};
G__49983.cljs$lang$maxFixedArity = 0;
G__49983.cljs$lang$applyTo = (function (arglist__49985){
var args = cljs.core.seq(arglist__49985);
return G__49983__delegate(args);
});
G__49983.cljs$core$IFn$_invoke$arity$variadic = G__49983__delegate;
return G__49983;
})()
;
;})(rl))
});

taoensso.encore.rate_limiter = (function taoensso$encore$rate_limiter(ncalls_limit,window_ms){
return taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
});

taoensso.encore.rate_limited = (function taoensso$encore$rate_limited(ncalls_limit,window_ms,f){
var rl = taoensso.encore.rate_limiter_STAR_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ncalls_limit,window_ms], null)], null));
return ((function (rl){
return (function() { 
var G__49986__delegate = function (args){
var b2__47185__auto__ = (rl.cljs$core$IFn$_invoke$arity$0 ? rl.cljs$core$IFn$_invoke$arity$0() : rl.call(null));
if(cljs.core.truth_(b2__47185__auto__)){
var backoff_ms = b2__47185__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backoff_DASH_ms,backoff_ms], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$result,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null))], null);
}
};
var G__49986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49987__i = 0, G__49987__a = new Array(arguments.length -  0);
while (G__49987__i < G__49987__a.length) {G__49987__a[G__49987__i] = arguments[G__49987__i + 0]; ++G__49987__i;}
  args = new cljs.core.IndexedSeq(G__49987__a,0);
} 
return G__49986__delegate.call(this,args);};
G__49986.cljs$lang$maxFixedArity = 0;
G__49986.cljs$lang$applyTo = (function (arglist__49988){
var args = cljs.core.seq(arglist__49988);
return G__49986__delegate(args);
});
G__49986.cljs$core$IFn$_invoke$arity$variadic = G__49986__delegate;
return G__49986;
})()
;
;})(rl))
});

taoensso.encore.logging_level = (function (){var G__49853 = cljs.core.cst$kw$debug;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__49853) : cljs.core.atom.call(null,G__49853));
})();

taoensso.encore.set_exp_backoff_timeout_BANG_ = (function taoensso$encore$set_exp_backoff_timeout_BANG_(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49989 = arguments.length;
var i__8823__auto___49990 = (0);
while(true){
if((i__8823__auto___49990 < len__8822__auto___49989)){
args__8829__auto__.push((arguments[i__8823__auto___49990]));

var G__49991 = (i__8823__auto___49990 + (1));
i__8823__auto___49990 = G__49991;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (nullary_f,p__49856){
var vec__49857 = p__49856;
var nattempt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49857,(0),null);
var b2__47185__auto__ = taoensso.encore.js__QMARK_win;
if(cljs.core.truth_(b2__47185__auto__)){
var js_win = b2__47185__auto__;
return js_win.setTimeout(nullary_f,taoensso.encore.exp_backoff.cljs$core$IFn$_invoke$arity$1((function (){var or__7601__auto__ = nattempt;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return (0);
}
})()));
} else {
return null;
}
});

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$maxFixedArity = (1);

taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$lang$applyTo = (function (seq49854){
var G__49855 = cljs.core.first(seq49854);
var seq49854__$1 = cljs.core.next(seq49854);
return taoensso.encore.set_exp_backoff_timeout_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__49855,seq49854__$1);
});


if(typeof taoensso.encore._STAR_log_level_STAR_ !== 'undefined'){
} else {
/**
 * DEPRECATED
 */
taoensso.encore._STAR_log_level_STAR_ = cljs.core.cst$kw$debug;
}

taoensso.encore.log_QMARK_ = (function (){var __GT_n = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$trace,(1),cljs.core.cst$kw$debug,(2),cljs.core.cst$kw$info,(3),cljs.core.cst$kw$warn,(4),cljs.core.cst$kw$error,(5),cljs.core.cst$kw$fatal,(6),cljs.core.cst$kw$report,(7)], null);
return ((function (__GT_n){
return (function (level){
return ((__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(level) : __GT_n.call(null,level)) >= (__GT_n.cljs$core$IFn$_invoke$arity$1 ? __GT_n.cljs$core$IFn$_invoke$arity$1(taoensso.encore._STAR_log_level_STAR_) : __GT_n.call(null,taoensso.encore._STAR_log_level_STAR_)));
});
;})(__GT_n))
})();

taoensso.encore.tracef = (function taoensso$encore$tracef(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49992 = arguments.length;
var i__8823__auto___49993 = (0);
while(true){
if((i__8823__auto___49993 < len__8822__auto___49992)){
args__8829__auto__.push((arguments[i__8823__auto___49993]));

var G__49994 = (i__8823__auto___49993 + (1));
i__8823__auto___49993 = G__49994;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__49862 = cljs.core.cst$kw$trace;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__49862) : taoensso.encore.log_QMARK_.call(null,G__49862));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.tracef.cljs$lang$maxFixedArity = (1);

taoensso.encore.tracef.cljs$lang$applyTo = (function (seq49860){
var G__49861 = cljs.core.first(seq49860);
var seq49860__$1 = cljs.core.next(seq49860);
return taoensso.encore.tracef.cljs$core$IFn$_invoke$arity$variadic(G__49861,seq49860__$1);
});


taoensso.encore.debugf = (function taoensso$encore$debugf(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49995 = arguments.length;
var i__8823__auto___49996 = (0);
while(true){
if((i__8823__auto___49996 < len__8822__auto___49995)){
args__8829__auto__.push((arguments[i__8823__auto___49996]));

var G__49997 = (i__8823__auto___49996 + (1));
i__8823__auto___49996 = G__49997;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__49865 = cljs.core.cst$kw$debug;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__49865) : taoensso.encore.log_QMARK_.call(null,G__49865));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.debugf.cljs$lang$maxFixedArity = (1);

taoensso.encore.debugf.cljs$lang$applyTo = (function (seq49863){
var G__49864 = cljs.core.first(seq49863);
var seq49863__$1 = cljs.core.next(seq49863);
return taoensso.encore.debugf.cljs$core$IFn$_invoke$arity$variadic(G__49864,seq49863__$1);
});


taoensso.encore.infof = (function taoensso$encore$infof(var_args){
var args__8829__auto__ = [];
var len__8822__auto___49998 = arguments.length;
var i__8823__auto___49999 = (0);
while(true){
if((i__8823__auto___49999 < len__8822__auto___49998)){
args__8829__auto__.push((arguments[i__8823__auto___49999]));

var G__50000 = (i__8823__auto___49999 + (1));
i__8823__auto___49999 = G__50000;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__49868 = cljs.core.cst$kw$info;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__49868) : taoensso.encore.log_QMARK_.call(null,G__49868));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.infof.cljs$lang$maxFixedArity = (1);

taoensso.encore.infof.cljs$lang$applyTo = (function (seq49866){
var G__49867 = cljs.core.first(seq49866);
var seq49866__$1 = cljs.core.next(seq49866);
return taoensso.encore.infof.cljs$core$IFn$_invoke$arity$variadic(G__49867,seq49866__$1);
});


taoensso.encore.warnf = (function taoensso$encore$warnf(var_args){
var args__8829__auto__ = [];
var len__8822__auto___50001 = arguments.length;
var i__8823__auto___50002 = (0);
while(true){
if((i__8823__auto___50002 < len__8822__auto___50001)){
args__8829__auto__.push((arguments[i__8823__auto___50002]));

var G__50003 = (i__8823__auto___50002 + (1));
i__8823__auto___50002 = G__50003;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__49871 = cljs.core.cst$kw$warn;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__49871) : taoensso.encore.log_QMARK_.call(null,G__49871));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("WARN: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.warnf.cljs$lang$maxFixedArity = (1);

taoensso.encore.warnf.cljs$lang$applyTo = (function (seq49869){
var G__49870 = cljs.core.first(seq49869);
var seq49869__$1 = cljs.core.next(seq49869);
return taoensso.encore.warnf.cljs$core$IFn$_invoke$arity$variadic(G__49870,seq49869__$1);
});


taoensso.encore.errorf = (function taoensso$encore$errorf(var_args){
var args__8829__auto__ = [];
var len__8822__auto___50004 = arguments.length;
var i__8823__auto___50005 = (0);
while(true){
if((i__8823__auto___50005 < len__8822__auto___50004)){
args__8829__auto__.push((arguments[i__8823__auto___50005]));

var G__50006 = (i__8823__auto___50005 + (1));
i__8823__auto___50005 = G__50006;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__49874 = cljs.core.cst$kw$error;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__49874) : taoensso.encore.log_QMARK_.call(null,G__49874));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ERROR: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.errorf.cljs$lang$maxFixedArity = (1);

taoensso.encore.errorf.cljs$lang$applyTo = (function (seq49872){
var G__49873 = cljs.core.first(seq49872);
var seq49872__$1 = cljs.core.next(seq49872);
return taoensso.encore.errorf.cljs$core$IFn$_invoke$arity$variadic(G__49873,seq49872__$1);
});


taoensso.encore.fatalf = (function taoensso$encore$fatalf(var_args){
var args__8829__auto__ = [];
var len__8822__auto___50007 = arguments.length;
var i__8823__auto___50008 = (0);
while(true){
if((i__8823__auto___50008 < len__8822__auto___50007)){
args__8829__auto__.push((arguments[i__8823__auto___50008]));

var G__50009 = (i__8823__auto___50008 + (1));
i__8823__auto___50008 = G__50009;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__49877 = cljs.core.cst$kw$fatal;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__49877) : taoensso.encore.log_QMARK_.call(null,G__49877));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FATAL: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt)].join(''),xs);
} else {
return null;
}
});

taoensso.encore.fatalf.cljs$lang$maxFixedArity = (1);

taoensso.encore.fatalf.cljs$lang$applyTo = (function (seq49875){
var G__49876 = cljs.core.first(seq49875);
var seq49875__$1 = cljs.core.next(seq49875);
return taoensso.encore.fatalf.cljs$core$IFn$_invoke$arity$variadic(G__49876,seq49875__$1);
});


taoensso.encore.reportf = (function taoensso$encore$reportf(var_args){
var args__8829__auto__ = [];
var len__8822__auto___50010 = arguments.length;
var i__8823__auto___50011 = (0);
while(true){
if((i__8823__auto___50011 < len__8822__auto___50010)){
args__8829__auto__.push((arguments[i__8823__auto___50011]));

var G__50012 = (i__8823__auto___50011 + (1));
i__8823__auto___50011 = G__50012;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,xs){
if(cljs.core.truth_((function (){var G__49880 = cljs.core.cst$kw$report;
return (taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.log_QMARK_.cljs$core$IFn$_invoke$arity$1(G__49880) : taoensso.encore.log_QMARK_.call(null,G__49880));
})())){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(taoensso.encore.logf,fmt,xs);
} else {
return null;
}
});

taoensso.encore.reportf.cljs$lang$maxFixedArity = (1);

taoensso.encore.reportf.cljs$lang$applyTo = (function (seq49878){
var G__49879 = cljs.core.first(seq49878);
var seq49878__$1 = cljs.core.next(seq49878);
return taoensso.encore.reportf.cljs$core$IFn$_invoke$arity$variadic(G__49879,seq49878__$1);
});


taoensso.encore.greatest = (function taoensso$encore$greatest(var_args){
var args__8829__auto__ = [];
var len__8822__auto___50013 = arguments.length;
var i__8823__auto___50014 = (0);
while(true){
if((i__8823__auto___50014 < len__8822__auto___50013)){
args__8829__auto__.push((arguments[i__8823__auto___50014]));

var G__50015 = (i__8823__auto___50014 + (1));
i__8823__auto___50014 = G__50015;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__49883){
var vec__49884 = p__49883;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49884,(0),null);
var comparator = (function (){var or__7601__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__49884,_QMARK_comparator){
return (function (p1__49817_SHARP_,p2__49818_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__49817_SHARP_,p2__49818_SHARP_) : comparator.call(null,p1__49817_SHARP_,p2__49818_SHARP_)) > (0))){
return p2__49818_SHARP_;
} else {
return p1__49817_SHARP_;
}
});})(comparator,vec__49884,_QMARK_comparator))
,coll);
});

taoensso.encore.greatest.cljs$lang$maxFixedArity = (1);

taoensso.encore.greatest.cljs$lang$applyTo = (function (seq49881){
var G__49882 = cljs.core.first(seq49881);
var seq49881__$1 = cljs.core.next(seq49881);
return taoensso.encore.greatest.cljs$core$IFn$_invoke$arity$variadic(G__49882,seq49881__$1);
});


taoensso.encore.least = (function taoensso$encore$least(var_args){
var args__8829__auto__ = [];
var len__8822__auto___50016 = arguments.length;
var i__8823__auto___50017 = (0);
while(true){
if((i__8823__auto___50017 < len__8822__auto___50016)){
args__8829__auto__.push((arguments[i__8823__auto___50017]));

var G__50018 = (i__8823__auto___50017 + (1));
i__8823__auto___50017 = G__50018;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic = (function (coll,p__49889){
var vec__49890 = p__49889;
var _QMARK_comparator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49890,(0),null);
var comparator = (function (){var or__7601__auto__ = _QMARK_comparator;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return taoensso.encore.rcompare;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(((function (comparator,vec__49890,_QMARK_comparator){
return (function (p1__49819_SHARP_,p2__49820_SHARP_){
if(((comparator.cljs$core$IFn$_invoke$arity$2 ? comparator.cljs$core$IFn$_invoke$arity$2(p1__49819_SHARP_,p2__49820_SHARP_) : comparator.call(null,p1__49819_SHARP_,p2__49820_SHARP_)) < (0))){
return p2__49820_SHARP_;
} else {
return p1__49819_SHARP_;
}
});})(comparator,vec__49890,_QMARK_comparator))
,coll);
});

taoensso.encore.least.cljs$lang$maxFixedArity = (1);

taoensso.encore.least.cljs$lang$applyTo = (function (seq49887){
var G__49888 = cljs.core.first(seq49887);
var seq49887__$1 = cljs.core.next(seq49887);
return taoensso.encore.least.cljs$core$IFn$_invoke$arity$variadic(G__49888,seq49887__$1);
});


/**
 * Ref. http://goo.gl/0GzRuz
 */
taoensso.encore.clj1098 = (function taoensso$encore$clj1098(x){
var or__7601__auto__ = x;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinct_by = (function taoensso$encore$distinct_by(keyfn,coll){
var step = (function taoensso$encore$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__49909,seen__$1){
while(true){
var vec__49910 = p__49909;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49910,(0),null);
var xs__$1 = vec__49910;
var b2__47185__auto__ = cljs.core.seq(xs__$1);
if(b2__47185__auto__){
var s = b2__47185__auto__;
var v_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(v) : keyfn.call(null,v));
if(cljs.core.contains_QMARK_(seen__$1,v_STAR_)){
var G__50019 = cljs.core.rest(s);
var G__50020 = seen__$1;
p__49909 = G__50019;
seen__$1 = G__50020;
continue;
} else {
return cljs.core.cons(v,taoensso$encore$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,v_STAR_)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});

/**
 * Deprecated, prefer `xdistinct`
 */
taoensso.encore.distinctv = (function taoensso$encore$distinctv(var_args){
var args49913 = [];
var len__8822__auto___50021 = arguments.length;
var i__8823__auto___50022 = (0);
while(true){
if((i__8823__auto___50022 < len__8822__auto___50021)){
args49913.push((arguments[i__8823__auto___50022]));

var G__50023 = (i__8823__auto___50022 + (1));
i__8823__auto___50022 = G__50023;
continue;
} else {
}
break;
}

var G__49915 = args49913.length;
switch (G__49915) {
case 1:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49913.length)].join('')));

}
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,coll);
});

taoensso.encore.distinctv.cljs$core$IFn$_invoke$arity$2 = (function (keyfn,coll){
var tr = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__49916,in$){
var vec__49917 = p__49916;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49917,(0),null);
var seen = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49917,(1),null);
var in_STAR_ = (keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(in$) : keyfn.call(null,in$));
if(cljs.core.contains_QMARK_(seen,in_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,seen], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,in$),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,in_STAR_)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.PersistentHashSet.EMPTY], null),coll);
return cljs.core.persistent_BANG_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tr,(0)));
});

taoensso.encore.distinctv.cljs$lang$maxFixedArity = 2;


/**
 * Deprecated, prefer `reduce-kv`
 */
taoensso.encore.map_kvs = (function taoensso$encore$map_kvs(kf,vf,m){
if(cljs.core.truth_(m)){
var vf__$1 = (((vf == null))?(function (_,v){
return v;
}):vf);
var kf__$1 = (((kf == null))?((function (vf__$1){
return (function (k,_){
return k;
});})(vf__$1))
:(cljs.core.truth_((function (){var G__49922 = kf;
var G__49923 = cljs.core.cst$kw$keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49922,G__49923) : taoensso.encore.kw_identical_QMARK_.call(null,G__49922,G__49923));
})())?((function (vf__$1){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1))
:kf));
return cljs.core.persistent_BANG_(cljs.core.reduce_kv(((function (vf__$1,kf__$1){
return (function (m__$1,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m__$1,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
 * Deprecated, prefer `reduce-kvs`
 */
taoensso.encore.as_map = (function taoensso$encore$as_map(var_args){
var args__8829__auto__ = [];
var len__8822__auto___50025 = arguments.length;
var i__8823__auto___50026 = (0);
while(true){
if((i__8823__auto___50026 < len__8822__auto___50025)){
args__8829__auto__.push((arguments[i__8823__auto___50026]));

var G__50027 = (i__8823__auto___50026 + (1));
i__8823__auto___50026 = G__50027;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs,p__49926){
var vec__49927 = p__49926;
var kf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49927,(0),null);
var vf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49927,(1),null);
if(cljs.core.empty_QMARK_(kvs)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var vf__$1 = (((vf == null))?((function (vec__49927,kf,vf){
return (function (_,v){
return v;
});})(vec__49927,kf,vf))
:vf);
var kf__$1 = (((kf == null))?((function (vf__$1,vec__49927,kf,vf){
return (function (k,_){
return k;
});})(vf__$1,vec__49927,kf,vf))
:(cljs.core.truth_((function (){var G__49930 = kf;
var G__49931 = cljs.core.cst$kw$keywordize;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49930,G__49931) : taoensso.encore.kw_identical_QMARK_.call(null,G__49930,G__49931));
})())?((function (vf__$1,vec__49927,kf,vf){
return (function (k,_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
});})(vf__$1,vec__49927,kf,vf))
:kf));
return cljs.core.persistent_BANG_(taoensso.encore.reduce_kvs(((function (vf__$1,kf__$1,vec__49927,kf,vf){
return (function (m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,(kf__$1.cljs$core$IFn$_invoke$arity$2 ? kf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : kf__$1.call(null,k,v)),(vf__$1.cljs$core$IFn$_invoke$arity$2 ? vf__$1.cljs$core$IFn$_invoke$arity$2(k,v) : vf__$1.call(null,k,v)));
});})(vf__$1,kf__$1,vec__49927,kf,vf))
,cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),kvs));
}
});

taoensso.encore.as_map.cljs$lang$maxFixedArity = (1);

taoensso.encore.as_map.cljs$lang$applyTo = (function (seq49924){
var G__49925 = cljs.core.first(seq49924);
var seq49924__$1 = cljs.core.next(seq49924);
return taoensso.encore.as_map.cljs$core$IFn$_invoke$arity$variadic(G__49925,seq49924__$1);
});


taoensso.encore.keywordize_map = (function taoensso$encore$keywordize_map(m){
return taoensso.encore.map_keys(cljs.core.keyword,m);
});

taoensso.encore.removev = (function taoensso$encore$removev(pred,coll){
return cljs.core.filterv(cljs.core.complement(pred),coll);
});

taoensso.encore.nvec_QMARK_ = (function taoensso$encore$nvec_QMARK_(n,x){
return (cljs.core.vector_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),n));
});

taoensso.encore.memoized = (function taoensso$encore$memoized(var_args){
var args__8829__auto__ = [];
var len__8822__auto___50028 = arguments.length;
var i__8823__auto___50029 = (0);
while(true){
if((i__8823__auto___50029 < len__8822__auto___50028)){
args__8829__auto__.push((arguments[i__8823__auto___50029]));

var G__50030 = (i__8823__auto___50029 + (1));
i__8823__auto___50029 = G__50030;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((2) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((2)),(0),null)):null);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8830__auto__);
});

taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic = (function (cache,f,args){
if(cljs.core.truth_(cache)){
var G__49935 = taoensso.encore._swap_val_BANG_(cache,args,(function (_QMARK_dv){
if(cljs.core.truth_(_QMARK_dv)){
return _QMARK_dv;
} else {
return (new cljs.core.Delay((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),null));
}
}));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__49935) : cljs.core.deref.call(null,G__49935));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}
});

taoensso.encore.memoized.cljs$lang$maxFixedArity = (2);

taoensso.encore.memoized.cljs$lang$applyTo = (function (seq49932){
var G__49933 = cljs.core.first(seq49932);
var seq49932__$1 = cljs.core.next(seq49932);
var G__49934 = cljs.core.first(seq49932__$1);
var seq49932__$2 = cljs.core.next(seq49932__$1);
return taoensso.encore.memoized.cljs$core$IFn$_invoke$arity$variadic(G__49933,G__49934,seq49932__$2);
});


taoensso.encore.translate_signed_idx = (function taoensso$encore$translate_signed_idx(signed_idx,max_idx){
if((signed_idx >= (0))){
var x__7946__auto__ = signed_idx;
var y__7947__auto__ = max_idx;
return ((x__7946__auto__ < y__7947__auto__) ? x__7946__auto__ : y__7947__auto__);
} else {
var x__7939__auto__ = (0);
var y__7940__auto__ = (signed_idx + max_idx);
return ((x__7939__auto__ > y__7940__auto__) ? x__7939__auto__ : y__7940__auto__);
}
});


taoensso.encore.sub_indexes = (function taoensso$encore$sub_indexes(var_args){
var args__8829__auto__ = [];
var len__8822__auto___50031 = arguments.length;
var i__8823__auto___50032 = (0);
while(true){
if((i__8823__auto___50032 < len__8822__auto___50031)){
args__8829__auto__.push((arguments[i__8823__auto___50032]));

var G__50033 = (i__8823__auto___50032 + (1));
i__8823__auto___50032 = G__50033;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((2) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((2)),(0),null)):null);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8830__auto__);
});

taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic = (function (x,start_idx,p__49939){
var map__49940 = p__49939;
var map__49940__$1 = ((((!((map__49940 == null)))?((((map__49940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49940):map__49940);
var max_len = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49940__$1,cljs.core.cst$kw$max_DASH_len);
var end_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49940__$1,cljs.core.cst$kw$end_DASH_idx);
var start_idx__$1 = start_idx;
var xlen = cljs.core.count(x);
var start_idx_STAR_ = taoensso.encore.translate_signed_idx(start_idx__$1,xlen);
var end_idx_STAR_ = cljs.core.long$((cljs.core.truth_(max_len)?(function (){var n1__47641__auto__ = (start_idx_STAR_ + max_len);
var n2__47642__auto__ = xlen;
if((n1__47641__auto__ > n2__47642__auto__)){
return n2__47642__auto__;
} else {
return n1__47641__auto__;
}
})():(cljs.core.truth_(end_idx)?(taoensso.encore.translate_signed_idx(end_idx,xlen) + (1)):xlen)));
if((start_idx_STAR_ > end_idx_STAR_)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_idx_STAR_,end_idx_STAR_], null);
}
});

taoensso.encore.sub_indexes.cljs$lang$maxFixedArity = (2);

taoensso.encore.sub_indexes.cljs$lang$applyTo = (function (seq49936){
var G__49937 = cljs.core.first(seq49936);
var seq49936__$1 = cljs.core.next(seq49936);
var G__49938 = cljs.core.first(seq49936__$1);
var seq49936__$2 = cljs.core.next(seq49936__$1);
return taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(G__49937,G__49938,seq49936__$2);
});


/**
 * Deprecated, prefer `get-substr` or `get-substring`
 */
taoensso.encore.substr = (function taoensso$encore$substr(var_args){
var args__8829__auto__ = [];
var len__8822__auto___50034 = arguments.length;
var i__8823__auto___50035 = (0);
while(true){
if((i__8823__auto___50035 < len__8822__auto___50034)){
args__8829__auto__.push((arguments[i__8823__auto___50035]));

var G__50036 = (i__8823__auto___50035 + (1));
i__8823__auto___50035 = G__50036;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((2) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((2)),(0),null)):null);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8830__auto__);
});

taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic = (function (s,start_idx,p__49945){
var vec__49946 = p__49945;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49946,(0),null);
var vec__49949 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(s,start_idx,cljs.core.array_seq([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49949,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49949,(1),null);
return s.substring(start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.substr.cljs$lang$maxFixedArity = (2);

taoensso.encore.substr.cljs$lang$applyTo = (function (seq49942){
var G__49943 = cljs.core.first(seq49942);
var seq49942__$1 = cljs.core.next(seq49942);
var G__49944 = cljs.core.first(seq49942__$1);
var seq49942__$2 = cljs.core.next(seq49942__$1);
return taoensso.encore.substr.cljs$core$IFn$_invoke$arity$variadic(G__49943,G__49944,seq49942__$2);
});



/**
 * Deprecated, prefer `get-subvec` or `get-subvector`
 */
taoensso.encore.subvec_STAR_ = (function taoensso$encore$subvec_STAR_(var_args){
var args__8829__auto__ = [];
var len__8822__auto___50037 = arguments.length;
var i__8823__auto___50038 = (0);
while(true){
if((i__8823__auto___50038 < len__8822__auto___50037)){
args__8829__auto__.push((arguments[i__8823__auto___50038]));

var G__50039 = (i__8823__auto___50038 + (1));
i__8823__auto___50038 = G__50039;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((2) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((2)),(0),null)):null);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8830__auto__);
});

taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (v,start_idx,p__49955){
var vec__49956 = p__49955;
var _QMARK_max_len = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49956,(0),null);
var vec__49959 = taoensso.encore.sub_indexes.cljs$core$IFn$_invoke$arity$variadic(v,start_idx,cljs.core.array_seq([cljs.core.cst$kw$max_DASH_len,_QMARK_max_len], 0));
var start_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49959,(0),null);
var end_idx_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49959,(1),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,start_idx_STAR_,end_idx_STAR_);
});

taoensso.encore.subvec_STAR_.cljs$lang$maxFixedArity = (2);

taoensso.encore.subvec_STAR_.cljs$lang$applyTo = (function (seq49952){
var G__49953 = cljs.core.first(seq49952);
var seq49952__$1 = cljs.core.next(seq49952);
var G__49954 = cljs.core.first(seq49952__$1);
var seq49952__$2 = cljs.core.next(seq49952__$1);
return taoensso.encore.subvec_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__49953,G__49954,seq49952__$2);
});


taoensso.encore.sentinel = {};

taoensso.encore.sentinel_QMARK_ = (function taoensso$encore$sentinel_QMARK_(x){
return (x === taoensso.encore.sentinel);
});

taoensso.encore.nil__GT_sentinel = (function taoensso$encore$nil__GT_sentinel(x){
if((x == null)){
return taoensso.encore.sentinel;
} else {
return x;
}
});

taoensso.encore.sentinel__GT_nil = (function taoensso$encore$sentinel__GT_nil(x){
if(cljs.core.truth_(taoensso.encore.sentinel_QMARK_(x))){
return null;
} else {
return x;
}
});

taoensso.encore.singleton_QMARK_ = (function taoensso$encore$singleton_QMARK_(coll){
if(cljs.core.counted_QMARK_(coll)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(coll),(1));
} else {
return cljs.core.not(cljs.core.next(coll));
}
});

taoensso.encore.__GT__QMARK_singleton = (function taoensso$encore$__GT__QMARK_singleton(coll){
if(cljs.core.truth_(taoensso.encore.singleton_QMARK_(coll))){
var vec__49967 = coll;
var c1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49967,(0),null);
return c1;
} else {
return null;
}
});

taoensso.encore.__GT_vec = (function taoensso$encore$__GT_vec(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}
});

taoensso.encore.fzipmap = (function taoensso$encore$fzipmap(ks,vs){
var m = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var ks__$1 = cljs.core.seq(ks);
var vs__$1 = cljs.core.seq(vs);
while(true){
if((ks__$1) && (vs__$1)){
var G__50040 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,cljs.core.first(ks__$1),cljs.core.first(vs__$1));
var G__50041 = cljs.core.next(ks__$1);
var G__50042 = cljs.core.next(vs__$1);
m = G__50040;
ks__$1 = G__50041;
vs__$1 = G__50042;
continue;
} else {
return cljs.core.persistent_BANG_(m);
}
break;
}
});

taoensso.encore.filter_kvs = (function taoensso$encore$filter_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return m__$1;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
}
}),m,m);
}
});

taoensso.encore.remove_kvs = (function taoensso$encore$remove_kvs(pred,m){
if((m == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return cljs.core.reduce_kv((function (m__$1,k,v){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(k,v) : pred.call(null,k,v)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m__$1,k);
} else {
return m__$1;
}
}),m,m);
}
});

taoensso.encore.replace_in = (function taoensso$encore$replace_in(var_args){
var args__8829__auto__ = [];
var len__8822__auto___50043 = arguments.length;
var i__8823__auto___50044 = (0);
while(true){
if((i__8823__auto___50044 < len__8822__auto___50043)){
args__8829__auto__.push((arguments[i__8823__auto___50044]));

var G__50045 = (i__8823__auto___50044 + (1));
i__8823__auto___50044 = G__50045;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,ops){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,_QMARK_op){
if(cljs.core.truth_(_QMARK_op)){
var vec__49823 = _QMARK_op;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49823,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49823,(1),null);
var valf = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49823,(2),null);
var f = (cljs.core.truth_((function (){var G__49826 = type;
var G__49827 = cljs.core.cst$kw$reset;
return (taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? taoensso.encore.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__49826,G__49827) : taoensso.encore.kw_identical_QMARK_.call(null,G__49826,G__49827));
})())?((function (vec__49823,type,ks,valf){
return (function (_){
return valf;
});})(vec__49823,type,ks,valf))
:valf);
return taoensso.encore.update_in.cljs$core$IFn$_invoke$arity$4(m__$1,ks,null,f);
} else {
return m__$1;
}
}),m,ops);
});

taoensso.encore.replace_in.cljs$lang$maxFixedArity = (1);

taoensso.encore.replace_in.cljs$lang$applyTo = (function (seq49821){
var G__49822 = cljs.core.first(seq49821);
var seq49821__$1 = cljs.core.next(seq49821);
return taoensso.encore.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__49822,seq49821__$1);
});

