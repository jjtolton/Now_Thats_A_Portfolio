// Compiled by ClojureScript 1.9.518 {}
goog.provide('ezq.css');
goog.require('cljs.core');
goog.require('sablono.core');
ezq.css.container = (function ezq$css$container(elt){
return React.DOM.div(({"className": "container"}),sablono.interpreter.interpret.call(null,elt));
});
ezq.css.col = (function ezq$css$col(size,cols,elt){
return React.DOM.div(({"className": cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"-",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cols)].join('')], null)))}),sablono.interpreter.interpret.call(null,elt));
});
ezq.css.col_lg = (function ezq$css$col_lg(cols,elt){
return ezq.css.col.call(null,"lg",cols,elt);
});
ezq.css.col_md = (function ezq$css$col_md(cols,elt){
return ezq.css.col.call(null,"md",cols,elt);
});
ezq.css.col_sm = (function ezq$css$col_sm(cols,elt){
return ezq.css.col.call(null,"sm",cols,elt);
});
ezq.css.row = (function ezq$css$row(var_args){
var args__29977__auto__ = [];
var len__29970__auto___51540 = arguments.length;
var i__29971__auto___51541 = (0);
while(true){
if((i__29971__auto___51541 < len__29970__auto___51540)){
args__29977__auto__.push((arguments[i__29971__auto___51541]));

var G__51542 = (i__29971__auto___51541 + (1));
i__29971__auto___51541 = G__51542;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return ezq.css.row.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

ezq.css.row.cljs$core$IFn$_invoke$arity$variadic = (function (elt){
return sablono.interpreter.interpret.call(null,cljs.core.apply.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null)], null),elt));
});

ezq.css.row.cljs$lang$maxFixedArity = (0);

ezq.css.row.cljs$lang$applyTo = (function (seq51539){
return ezq.css.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51539));
});

ezq.css.flex_box = (function ezq$css$flex_box(elt){
return React.DOM.div(({"style": ({"display": "flex"})}),sablono.interpreter.interpret.call(null,elt));
});
ezq.css.flex_item = (function ezq$css$flex_item(elt){
return React.DOM.div(({"style": ({"margin": "auto"})}),sablono.interpreter.interpret.call(null,elt));
});
ezq.css.bold = (function ezq$css$bold(var_args){
var args__29977__auto__ = [];
var len__29970__auto___51544 = arguments.length;
var i__29971__auto___51545 = (0);
while(true){
if((i__29971__auto___51545 < len__29970__auto___51544)){
args__29977__auto__.push((arguments[i__29971__auto___51545]));

var G__51546 = (i__29971__auto___51545 + (1));
i__29971__auto___51545 = G__51546;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return ezq.css.bold.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

ezq.css.bold.cljs$core$IFn$_invoke$arity$variadic = (function (s){
return sablono.interpreter.interpret.call(null,cljs.core.apply.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470)], null),s));
});

ezq.css.bold.cljs$lang$maxFixedArity = (0);

ezq.css.bold.cljs$lang$applyTo = (function (seq51543){
return ezq.css.bold.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51543));
});


//# sourceMappingURL=css.js.map