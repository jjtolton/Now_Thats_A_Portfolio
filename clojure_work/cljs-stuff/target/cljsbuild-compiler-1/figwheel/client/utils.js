// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.userAgent.product');
goog.require('goog.async.Deferred');
goog.require('cljs.pprint');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
goog.require('cljs.reader');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return !((goog.global.document == null));
});
figwheel.client.utils.react_native_env_QMARK_ = (function figwheel$client$utils$react_native_env_QMARK_(){
return (typeof goog.global.navigator !== 'undefined') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.global.navigator.product,"ReactNative"));
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.html_or_react_native_env_QMARK_ = (function figwheel$client$utils$html_or_react_native_env_QMARK_(){
var or__6409__auto__ = figwheel.client.utils.html_env_QMARK_();
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return figwheel.client.utils.react_native_env_QMARK_();
}
});
figwheel.client.utils.worker_env_QMARK_ = (function figwheel$client$utils$worker_env_QMARK_(){
return ((goog.global.document == null)) && (typeof self !== 'undefined') && (typeof self.importScripts !== 'undefined');
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_())){
return cljs.core.cst$kw$node;
} else {
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())){
return cljs.core.cst$kw$html;
} else {
if(cljs.core.truth_(figwheel.client.utils.react_native_env_QMARK_())){
return cljs.core.cst$kw$react_DASH_native;
} else {
if(cljs.core.truth_(figwheel.client.utils.worker_env_QMARK_())){
return cljs.core.cst$kw$worker;
} else {
return null;
}
}
}
}
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace(goog.basePath,/(.*)goog\//,"$1");
});
figwheel.client.utils.create_custom_event = (function figwheel$client$utils$create_custom_event(event_name,data){
if(cljs.core.not(goog.userAgent.product.IE)){
return (new CustomEvent(event_name,(function (){var obj20520 = {"detail":data};
return obj20520;
})()));
} else {
var event = document.createEvent("CustomEvent");
event.initCustomEvent(event_name,false,false,data);

return event;
}
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__6397__auto__ = figwheel.client.utils.html_env_QMARK_();
if(cljs.core.truth_(and__6397__auto__)){
var and__6397__auto____$1 = (window["CustomEvent"]);
if(cljs.core.truth_(and__6397__auto____$1)){
return typeof document !== 'undefined';
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
}
})())){
return document.body.dispatchEvent(figwheel.client.utils.create_custom_event(event_name,data));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_(o)) || (cljs.core.seq_QMARK_(o)))?cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([o], 0)):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args20525 = [];
var len__7484__auto___20537 = arguments.length;
var i__7485__auto___20538 = (0);
while(true){
if((i__7485__auto___20538 < len__7484__auto___20537)){
args20525.push((arguments[i__7485__auto___20538]));

var G__20539 = (i__7485__auto___20538 + (1));
i__7485__auto___20538 = G__20539;
continue;
} else {
}
break;
}

var G__20527 = args20525.length;
switch (G__20527) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20525.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__20528 = cljs.core._EQ_;
var expr__20529 = (cljs.core.truth_(figwheel.client.utils.html_or_react_native_env_QMARK_())?level:cljs.core.cst$kw$info);
if(cljs.core.truth_((function (){var G__20531 = cljs.core.cst$kw$warn;
var G__20532 = expr__20529;
return (pred__20528.cljs$core$IFn$_invoke$arity$2 ? pred__20528.cljs$core$IFn$_invoke$arity$2(G__20531,G__20532) : pred__20528.call(null,G__20531,G__20532));
})())){
return ((function (pred__20528,expr__20529){
return (function (p1__20521_SHARP_){
return console.warn(p1__20521_SHARP_);
});
;})(pred__20528,expr__20529))
} else {
if(cljs.core.truth_((function (){var G__20533 = cljs.core.cst$kw$debug;
var G__20534 = expr__20529;
return (pred__20528.cljs$core$IFn$_invoke$arity$2 ? pred__20528.cljs$core$IFn$_invoke$arity$2(G__20533,G__20534) : pred__20528.call(null,G__20533,G__20534));
})())){
return ((function (pred__20528,expr__20529){
return (function (p1__20522_SHARP_){
return console.debug(p1__20522_SHARP_);
});
;})(pred__20528,expr__20529))
} else {
if(cljs.core.truth_((function (){var G__20535 = cljs.core.cst$kw$error;
var G__20536 = expr__20529;
return (pred__20528.cljs$core$IFn$_invoke$arity$2 ? pred__20528.cljs$core$IFn$_invoke$arity$2(G__20535,G__20536) : pred__20528.call(null,G__20535,G__20536));
})())){
return ((function (pred__20528,expr__20529){
return (function (p1__20523_SHARP_){
return console.error(p1__20523_SHARP_);
});
;})(pred__20528,expr__20529))
} else {
return ((function (pred__20528,expr__20529){
return (function (p1__20524_SHARP_){
return console.log(p1__20524_SHARP_);
});
;})(pred__20528,expr__20529))
}
}
}
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg) : f.call(null,arg));
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;

figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__20541){
var map__20544 = p__20541;
var map__20544__$1 = ((((!((map__20544 == null)))?((((map__20544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20544):map__20544);
var opts = map__20544__$1;
var eval_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20544__$1,cljs.core.cst$kw$eval_DASH_fn);
if(cljs.core.truth_(eval_fn)){
return (eval_fn.cljs$core$IFn$_invoke$arity$2 ? eval_fn.cljs$core$IFn$_invoke$arity$2(code,opts) : eval_fn.call(null,code,opts));
} else {
return eval(code);
}
});
figwheel.client.utils.pprint_to_string = (function figwheel$client$utils$pprint_to_string(x){
var sb = (new goog.string.StringBuffer());
var sbw = (new cljs.core.StringBufferWriter(sb));
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(x,sbw);

var G__20547 = [cljs.core.str(sb)].join('');
return goog.string.trimRight(G__20547);
});
/**
 * chains an async action on to a deferred
 *   Must provide a goog.async.Deferred and action function that
 *   takes an initial value and a continuation fn to call with the result
 */
figwheel.client.utils.liftContD = (function figwheel$client$utils$liftContD(deferred,f){
return deferred.then((function (val){
var new_def = (new goog.async.Deferred());
var G__20551_20553 = val;
var G__20552_20554 = ((function (G__20551_20553,new_def){
return (function (p1__20548_SHARP_){
return new_def.callback(p1__20548_SHARP_);
});})(G__20551_20553,new_def))
;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20551_20553,G__20552_20554) : f.call(null,G__20551_20553,G__20552_20554));

return new_def;
}));
});
/**
 * maps an async action across a collection and chains the results
 *   onto a deferred
 */
figwheel.client.utils.mapConcatD = (function figwheel$client$utils$mapConcatD(deferred,f,coll){
var results = (function (){var G__20558 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20558) : cljs.core.atom.call(null,G__20558));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (results){
return (function (defr,v){
return figwheel.client.utils.liftContD(defr,((function (results){
return (function (_,fin){
var G__20559 = v;
var G__20560 = ((function (G__20559,results){
return (function (v__$1){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(results,cljs.core.conj,v__$1);

return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(v__$1) : fin.call(null,v__$1));
});})(G__20559,results))
;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20559,G__20560) : f.call(null,G__20559,G__20560));
});})(results))
);
});})(results))
,deferred,coll).then(((function (results){
return (function (_){
return goog.async.Deferred.succeed((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(results) : cljs.core.deref.call(null,results)));
});})(results))
);
});
if(typeof figwheel.client.utils.local_persistent_config !== 'undefined'){
} else {
figwheel.client.utils.local_persistent_config = (function (){var a = (function (){var G__20561 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20561) : cljs.core.atom.call(null,G__20561));
})();
if(typeof localStorage !== 'undefined'){
cljs.core.add_watch(a,cljs.core.cst$kw$sync_DASH_local_DASH_storage,((function (a){
return (function (_,___$1,___$2,n){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (a){
return (function (p__20562){
var vec__20563 = p__20562;
var ky = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20563,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20563,(1),null);
return localStorage.setItem(cljs.core.name(ky),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v], 0)));
});})(a))
,n);
});})(a))
);
} else {
}

return a;
})();
}
/**
 * Set a local value on a key that in a browser will persist even when 
 * the browser gets reloaded.
 */
figwheel.client.utils.persistent_config_set_BANG_ = (function figwheel$client$utils$persistent_config_set_BANG_(ky,v){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(figwheel.client.utils.local_persistent_config,cljs.core.assoc,ky,v);
});
figwheel.client.utils.persistent_config_get = (function figwheel$client$utils$persistent_config_get(var_args){
var args20566 = [];
var len__7484__auto___20569 = arguments.length;
var i__7485__auto___20570 = (0);
while(true){
if((i__7485__auto___20570 < len__7484__auto___20569)){
args20566.push((arguments[i__7485__auto___20570]));

var G__20571 = (i__7485__auto___20570 + (1));
i__7485__auto___20570 = G__20571;
continue;
} else {
}
break;
}

var G__20568 = args20566.length;
switch (G__20568) {
case 2:
return figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20566.length)].join('')));

}
});

figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$2 = (function (ky,not_found){
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.local_persistent_config) : cljs.core.deref.call(null,figwheel.client.utils.local_persistent_config)),ky)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.local_persistent_config) : cljs.core.deref.call(null,figwheel.client.utils.local_persistent_config)),ky);
} else {
if(cljs.core.truth_((function (){var and__6397__auto__ = typeof localStorage !== 'undefined';
if(and__6397__auto__){
return localStorage.getItem(cljs.core.name(ky));
} else {
return and__6397__auto__;
}
})())){
var v = cljs.reader.read_string(localStorage.getItem(cljs.core.name(ky)));
figwheel.client.utils.persistent_config_set_BANG_(ky,v);

return v;
} else {
return not_found;

}
}
});

figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$1 = (function (ky){
return figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$2(ky,null);
});

figwheel.client.utils.persistent_config_get.cljs$lang$maxFixedArity = 2;

