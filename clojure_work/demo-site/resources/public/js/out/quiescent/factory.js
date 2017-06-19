// Compiled by ClojureScript 1.9.518 {}
goog.provide('quiescent.factory');
goog.require('cljs.core');
goog.require('cljsjs.react');
/**
 * Return a Component factory function. The argument may be any
 * value accepted by React.createElement (that is, the string name of a
 * HTML tag, or an instance of ReactClass).
 * 
 * Returns a function that takes props and children (the same as the
 * built-in ReactJS element constructors).
 */
quiescent.factory.factory = (function quiescent$factory$factory(type){
return (function() { 
var G__51934__delegate = function (props,children){
return cljs.core.apply.call(null,React.createElement,type,cljs.core.clj__GT_js.call(null,props),children);
};
var G__51934 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__51935__i = 0, G__51935__a = new Array(arguments.length -  1);
while (G__51935__i < G__51935__a.length) {G__51935__a[G__51935__i] = arguments[G__51935__i + 1]; ++G__51935__i;}
  children = new cljs.core.IndexedSeq(G__51935__a,0);
} 
return G__51934__delegate.call(this,props,children);};
G__51934.cljs$lang$maxFixedArity = 1;
G__51934.cljs$lang$applyTo = (function (arglist__51936){
var props = cljs.core.first(arglist__51936);
var children = cljs.core.rest(arglist__51936);
return G__51934__delegate(props,children);
});
G__51934.cljs$core$IFn$_invoke$arity$variadic = G__51934__delegate;
return G__51934;
})()
;
});

//# sourceMappingURL=factory.js.map