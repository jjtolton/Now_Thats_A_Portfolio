// Compiled by ClojureScript 1.9.518 {}
goog.provide('ezq.store');
goog.require('cljs.core');
goog.require('cljs.reader');
/**
 * Save the given application state in HTML5 localstorage
 */
ezq.store.store = (function ezq$store$store(state){
return localStorage.setItem("app.data",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(state)].join(''));
});
/**
 * Load the application state from HTML5 localstorage, nil if it doesn't exist
 */
ezq.store.load = (function ezq$store$load(){
var temp__6738__auto__ = localStorage.getItem("app.data");
if(cljs.core.truth_(temp__6738__auto__)){
var s = temp__6738__auto__;
return cljs.reader.read_string.call(null,s);
} else {
return null;
}
});
goog.exportSymbol('ezq.store.load', ezq.store.load);
/**
 * Given an application, watch it for changes and persist via localstorage
 */
ezq.store.init_persistence = (function ezq$store$init_persistence(app){
return cljs.core.add_watch.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.Keyword(null,"persistence","persistence",-203044807),(function (_,___$1,___$2,new_state){
return ezq.store.store.call(null,new_state);
}));
});

//# sourceMappingURL=store.js.map