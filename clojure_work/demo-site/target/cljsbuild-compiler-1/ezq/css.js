// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('ezq.css');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('sablono.core');
ezq.css.container = (function ezq$css$container(elt){
var G__20253 = ({"className": "container"});
var G__20254 = sablono.interpreter.interpret(elt);
return React.DOM.div(G__20253,G__20254);
});
ezq.css.col = (function ezq$css$col(size,cols,elt){
var G__20257 = ({"className": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cols)].join('')], null)))});
var G__20258 = sablono.interpreter.interpret(elt);
return React.DOM.div(G__20257,G__20258);
});
ezq.css.col_lg = (function ezq$css$col_lg(cols,elt){
return ezq.css.col("lg",cols,elt);
});
ezq.css.col_md = (function ezq$css$col_md(cols,elt){
return ezq.css.col("md",cols,elt);
});
ezq.css.col_sm = (function ezq$css$col_sm(cols,elt){
return ezq.css.col("sm",cols,elt);
});
ezq.css.row = (function ezq$css$row(var_args){
var args__8829__auto__ = [];
var len__8822__auto___20260 = arguments.length;
var i__8823__auto___20261 = (0);
while(true){
if((i__8823__auto___20261 < len__8822__auto___20260)){
args__8829__auto__.push((arguments[i__8823__auto___20261]));

var G__20262 = (i__8823__auto___20261 + (1));
i__8823__auto___20261 = G__20262;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return ezq.css.row.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

ezq.css.row.cljs$core$IFn$_invoke$arity$variadic = (function (elt){
return sablono.interpreter.interpret(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"row"], null)], null),elt));
});

ezq.css.row.cljs$lang$maxFixedArity = (0);

ezq.css.row.cljs$lang$applyTo = (function (seq20259){
return ezq.css.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20259));
});

ezq.css.flex_box = (function ezq$css$flex_box(elt){
var G__20265 = ({"style": ({"display": "flex"})});
var G__20266 = sablono.interpreter.interpret(elt);
return React.DOM.div(G__20265,G__20266);
});
ezq.css.flex_item = (function ezq$css$flex_item(elt){
var G__20269 = ({"style": ({"margin": "auto"})});
var G__20270 = sablono.interpreter.interpret(elt);
return React.DOM.div(G__20269,G__20270);
});
ezq.css.bold = (function ezq$css$bold(var_args){
var args__8829__auto__ = [];
var len__8822__auto___20272 = arguments.length;
var i__8823__auto___20273 = (0);
while(true){
if((i__8823__auto___20273 < len__8822__auto___20272)){
args__8829__auto__.push((arguments[i__8823__auto___20273]));

var G__20274 = (i__8823__auto___20273 + (1));
i__8823__auto___20273 = G__20274;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return ezq.css.bold.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

ezq.css.bold.cljs$core$IFn$_invoke$arity$variadic = (function (s){
return sablono.interpreter.interpret(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$b], null),s));
});

ezq.css.bold.cljs$lang$maxFixedArity = (0);

ezq.css.bold.cljs$lang$applyTo = (function (seq20271){
return ezq.css.bold.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20271));
});

