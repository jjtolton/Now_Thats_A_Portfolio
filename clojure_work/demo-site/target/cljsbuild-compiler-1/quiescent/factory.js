// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('quiescent.factory');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
var G__20673__delegate = function (props,children){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,type,cljs.core.clj__GT_js(props),children);
};
var G__20673 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__20674__i = 0, G__20674__a = new Array(arguments.length -  1);
while (G__20674__i < G__20674__a.length) {G__20674__a[G__20674__i] = arguments[G__20674__i + 1]; ++G__20674__i;}
  children = new cljs.core.IndexedSeq(G__20674__a,0);
} 
return G__20673__delegate.call(this,props,children);};
G__20673.cljs$lang$maxFixedArity = 1;
G__20673.cljs$lang$applyTo = (function (arglist__20675){
var props = cljs.core.first(arglist__20675);
var children = cljs.core.rest(arglist__20675);
return G__20673__delegate(props,children);
});
G__20673.cljs$core$IFn$_invoke$arity$variadic = G__20673__delegate;
return G__20673;
})()
;
});
