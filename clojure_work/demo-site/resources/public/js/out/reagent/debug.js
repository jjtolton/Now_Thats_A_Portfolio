// Compiled by ClojureScript 1.9.518 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__31430__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__31430 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31431__i = 0, G__31431__a = new Array(arguments.length -  0);
while (G__31431__i < G__31431__a.length) {G__31431__a[G__31431__i] = arguments[G__31431__i + 0]; ++G__31431__i;}
  args = new cljs.core.IndexedSeq(G__31431__a,0);
} 
return G__31430__delegate.call(this,args);};
G__31430.cljs$lang$maxFixedArity = 0;
G__31430.cljs$lang$applyTo = (function (arglist__31432){
var args = cljs.core.seq(arglist__31432);
return G__31430__delegate(args);
});
G__31430.cljs$core$IFn$_invoke$arity$variadic = G__31430__delegate;
return G__31430;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__31433__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__31433 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31434__i = 0, G__31434__a = new Array(arguments.length -  0);
while (G__31434__i < G__31434__a.length) {G__31434__a[G__31434__i] = arguments[G__31434__i + 0]; ++G__31434__i;}
  args = new cljs.core.IndexedSeq(G__31434__a,0);
} 
return G__31433__delegate.call(this,args);};
G__31433.cljs$lang$maxFixedArity = 0;
G__31433.cljs$lang$applyTo = (function (arglist__31435){
var args = cljs.core.seq(arglist__31435);
return G__31433__delegate(args);
});
G__31433.cljs$core$IFn$_invoke$arity$variadic = G__31433__delegate;
return G__31433;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map