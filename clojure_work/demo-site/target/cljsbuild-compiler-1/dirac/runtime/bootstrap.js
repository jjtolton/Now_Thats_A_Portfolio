// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('dirac.runtime.bootstrap');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.browser.repl');
dirac.runtime.bootstrap._STAR_boostrapped_QMARK__STAR_ = false;
dirac.runtime.bootstrap._STAR_boostrap_timeout_STAR_ = (100);
dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_ = [];
dirac.runtime.bootstrap.notify_listeners_BANG_ = (function dirac$runtime$bootstrap$notify_listeners_BANG_(listeners){
var seq__24641 = cljs.core.seq(listeners);
var chunk__24642 = null;
var count__24643 = (0);
var i__24644 = (0);
while(true){
if((i__24644 < count__24643)){
var listener = chunk__24642.cljs$core$IIndexed$_nth$arity$2(null,i__24644);
(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null));

var G__24645 = seq__24641;
var G__24646 = chunk__24642;
var G__24647 = count__24643;
var G__24648 = (i__24644 + (1));
seq__24641 = G__24645;
chunk__24642 = G__24646;
count__24643 = G__24647;
i__24644 = G__24648;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__24641);
if(temp__6738__auto__){
var seq__24641__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24641__$1)){
var c__8512__auto__ = cljs.core.chunk_first(seq__24641__$1);
var G__24649 = cljs.core.chunk_rest(seq__24641__$1);
var G__24650 = c__8512__auto__;
var G__24651 = cljs.core.count(c__8512__auto__);
var G__24652 = (0);
seq__24641 = G__24649;
chunk__24642 = G__24650;
count__24643 = G__24651;
i__24644 = G__24652;
continue;
} else {
var listener = cljs.core.first(seq__24641__$1);
(listener.cljs$core$IFn$_invoke$arity$0 ? listener.cljs$core$IFn$_invoke$arity$0() : listener.call(null));

var G__24653 = cljs.core.next(seq__24641__$1);
var G__24654 = null;
var G__24655 = (0);
var G__24656 = (0);
seq__24641 = G__24653;
chunk__24642 = G__24654;
count__24643 = G__24655;
i__24644 = G__24656;
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
clojure.browser.repl.bootstrap();

dirac.runtime.bootstrap._STAR_boostrapped_QMARK__STAR_ = true;
}

dirac.runtime.bootstrap.notify_listeners_BANG_(dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_);

return dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_ = [];
});
dirac.runtime.bootstrap.call_after_document_finished_loading = (function dirac$runtime$bootstrap$call_after_document_finished_loading(f,timeout){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"loading")){
var G__24659 = (function (){
return (dirac.runtime.bootstrap.call_after_document_finished_loading.cljs$core$IFn$_invoke$arity$2 ? dirac.runtime.bootstrap.call_after_document_finished_loading.cljs$core$IFn$_invoke$arity$2(f,dirac.runtime.bootstrap._STAR_boostrap_timeout_STAR_) : dirac.runtime.bootstrap.call_after_document_finished_loading.call(null,f,dirac.runtime.bootstrap._STAR_boostrap_timeout_STAR_));
});
var G__24660 = timeout;
return setTimeout(G__24659,G__24660);
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
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
var args24661 = [];
var len__8822__auto___24664 = arguments.length;
var i__8823__auto___24665 = (0);
while(true){
if((i__8823__auto___24665 < len__8822__auto___24664)){
args24661.push((arguments[i__8823__auto___24665]));

var G__24666 = (i__8823__auto___24665 + (1));
i__8823__auto___24665 = G__24666;
continue;
} else {
}
break;
}

var G__24663 = args24661.length;
switch (G__24663) {
case 0:
return dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24661.length)].join('')));

}
});

dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$1(null);
});

dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (callback){
if(!((callback == null))){
if(cljs.core.fn_QMARK_(callback)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("The callback parameter to clojure.browser.repl/bootstrap expected to be a function."),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Got "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(callback)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" instead.")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(fn? callback)")].join('')));
}

dirac.runtime.bootstrap._STAR_boostrap_listeners_STAR_.push(callback);
} else {
}

if(!(typeof document !== 'undefined')){
return dirac.runtime.bootstrap.boostrap_if_needed_BANG_();
} else {
return dirac.runtime.bootstrap.call_after_document_finished_loading(dirac.runtime.bootstrap.boostrap_if_needed_BANG_,(0));
}
});

dirac.runtime.bootstrap.bootstrap_BANG_.cljs$lang$maxFixedArity = 1;

