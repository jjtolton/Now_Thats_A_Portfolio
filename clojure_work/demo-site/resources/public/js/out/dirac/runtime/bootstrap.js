// Compiled by ClojureScript 1.9.518 {}
goog.provide('dirac.runtime.bootstrap');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
dirac.runtime.bootstrap._STAR_boostrapped_QMARK__STAR_ = false;
dirac.runtime.bootstrap._STAR_boostrap_timeout_STAR_ = (100);
dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_ = [];
dirac.runtime.bootstrap.notify_listeners_BANG_ = (function dirac$runtime$bootstrap$notify_listeners_BANG_(listeners){
var seq__61298 = cljs.core.seq.call(null,listeners);
var chunk__61299 = null;
var count__61300 = (0);
var i__61301 = (0);
while(true){
if((i__61301 < count__61300)){
var listener = cljs.core._nth.call(null,chunk__61299,i__61301);
listener.call(null);

var G__61302 = seq__61298;
var G__61303 = chunk__61299;
var G__61304 = count__61300;
var G__61305 = (i__61301 + (1));
seq__61298 = G__61302;
chunk__61299 = G__61303;
count__61300 = G__61304;
i__61301 = G__61305;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__61298);
if(temp__6738__auto__){
var seq__61298__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61298__$1)){
var c__29660__auto__ = cljs.core.chunk_first.call(null,seq__61298__$1);
var G__61306 = cljs.core.chunk_rest.call(null,seq__61298__$1);
var G__61307 = c__29660__auto__;
var G__61308 = cljs.core.count.call(null,c__29660__auto__);
var G__61309 = (0);
seq__61298 = G__61306;
chunk__61299 = G__61307;
count__61300 = G__61308;
i__61301 = G__61309;
continue;
} else {
var listener = cljs.core.first.call(null,seq__61298__$1);
listener.call(null);

var G__61310 = cljs.core.next.call(null,seq__61298__$1);
var G__61311 = null;
var G__61312 = (0);
var G__61313 = (0);
seq__61298 = G__61310;
chunk__61299 = G__61311;
count__61300 = G__61312;
i__61301 = G__61313;
continue;
}
} else {
return null;
}
}
break;
}
});
dirac.runtime.bootstrap.boostrap_if_needed_BANG_ = (function dirac$runtime$bootstrap$boostrap_if_needed_BANG_(){
if(dirac.runtime.bootstrap._STAR_boostrapped_QMARK__STAR_){
} else {
clojure.browser.repl.bootstrap.call(null);

dirac.runtime.bootstrap._STAR_boostrapped_QMARK__STAR_ = true;
}

dirac.runtime.bootstrap.notify_listeners_BANG_.call(null,dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_);

return dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_ = [];
});
dirac.runtime.bootstrap.call_after_document_finished_loading = (function dirac$runtime$bootstrap$call_after_document_finished_loading(f,timeout){
if(cljs.core._EQ_.call(null,document.readyState,"loading")){
return setTimeout((function (){
return dirac.runtime.bootstrap.call_after_document_finished_loading.call(null,f,dirac.runtime.bootstrap._STAR_boostrap_timeout_STAR_);
}),timeout);
} else {
return f.call(null);
}
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 * 
 *   Note that this function might do its job asynchronously if at the time of calling the document is still loading.
 *   You may provide a callback which will be called immediatelly after bootstrapping happens.
 *   It has no effect if called after bootstrapping has been already done. Only the callback is called immediatelly.
 */
dirac.runtime.bootstrap.bootstrap_BANG_ = (function dirac$runtime$bootstrap$bootstrap_BANG_(var_args){
var args61314 = [];
var len__29970__auto___61317 = arguments.length;
var i__29971__auto___61318 = (0);
while(true){
if((i__29971__auto___61318 < len__29970__auto___61317)){
args61314.push((arguments[i__29971__auto___61318]));

var G__61319 = (i__29971__auto___61318 + (1));
i__29971__auto___61318 = G__61319;
continue;
} else {
}
break;
}

var G__61316 = args61314.length;
switch (G__61316) {
case 0:
return dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args61314.length)].join('')));

}
});

dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.bootstrap.bootstrap_BANG_.call(null,null);
});

dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (callback){
if(!((callback == null))){
if(cljs.core.fn_QMARK_.call(null,callback)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("The callback parameter to clojure.browser.repl/bootstrap expected to be a function."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Got "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,callback)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" instead.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(fn? callback)")].join('')));
}

dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_.push(callback);
} else {
}

if(!(typeof document !== 'undefined')){
return dirac.runtime.bootstrap.boostrap_if_needed_BANG_.call(null);
} else {
return dirac.runtime.bootstrap.call_after_document_finished_loading.call(null,dirac.runtime.bootstrap.boostrap_if_needed_BANG_,(0));
}
});

dirac.runtime.bootstrap.bootstrap_BANG_.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=bootstrap.js.map