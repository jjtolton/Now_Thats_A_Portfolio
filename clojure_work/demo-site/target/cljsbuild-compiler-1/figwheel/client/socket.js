// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('figwheel.client.socket');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('figwheel.client.utils');
goog.require('cljs.reader');
figwheel.client.socket.get_websocket_imp = (function figwheel$client$socket$get_websocket_imp(){
if(cljs.core.truth_(figwheel.client.utils.html_or_react_native_env_QMARK_())){
return (window["WebSocket"]);
} else {
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_())){
try{return require("ws");
}catch (e42078){if((e42078 instanceof Error)){
var e = e42078;
return null;
} else {
throw e42078;

}
}} else {
if(cljs.core.truth_(figwheel.client.utils.worker_env_QMARK_())){
return (self["WebSocket"]);
} else {
return null;

}
}
}
});
if(typeof figwheel.client.socket.message_history_atom !== 'undefined'){
} else {
figwheel.client.socket.message_history_atom = (function (){var G__42079 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42079) : cljs.core.atom.call(null,G__42079));
})();
}
if(typeof figwheel.client.socket.socket_atom !== 'undefined'){
} else {
figwheel.client.socket.socket_atom = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
}
/**
 * Send a end message to the server.
 */
figwheel.client.socket.send_BANG_ = (function figwheel$client$socket$send_BANG_(msg){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.socket.socket_atom) : cljs.core.deref.call(null,figwheel.client.socket.socket_atom)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.socket.socket_atom) : cljs.core.deref.call(null,figwheel.client.socket.socket_atom)).send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([msg], 0)));
} else {
return null;
}
});
figwheel.client.socket.close_BANG_ = (function figwheel$client$socket$close_BANG_(){
(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.socket.socket_atom) : cljs.core.deref.call(null,figwheel.client.socket.socket_atom)).onclose = cljs.core.identity;

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.socket.socket_atom) : cljs.core.deref.call(null,figwheel.client.socket.socket_atom)).close();
});
figwheel.client.socket.handle_incoming_message = (function figwheel$client$socket$handle_incoming_message(msg){
figwheel.client.utils.debug_prn(msg);

var and__7589__auto__ = cljs.core.map_QMARK_(msg);
if(and__7589__auto__){
var and__7589__auto____$1 = cljs.core.cst$kw$msg_DASH_name.cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(and__7589__auto____$1)){
var and__7589__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$msg_DASH_name.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.cst$kw$ping);
if(and__7589__auto____$2){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(figwheel.client.socket.message_history_atom,cljs.core.conj,msg);
} else {
return and__7589__auto____$2;
}
} else {
return and__7589__auto____$1;
}
} else {
return and__7589__auto__;
}
});
figwheel.client.socket.open = (function figwheel$client$socket$open(p__42080){
var map__42086 = p__42080;
var map__42086__$1 = ((((!((map__42086 == null)))?((((map__42086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42086):map__42086);
var opts = map__42086__$1;
var retry_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42086__$1,cljs.core.cst$kw$retry_DASH_count);
var retried_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42086__$1,cljs.core.cst$kw$retried_DASH_count);
var websocket_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42086__$1,cljs.core.cst$kw$websocket_DASH_url);
var build_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42086__$1,cljs.core.cst$kw$build_DASH_id);
var temp__6736__auto__ = figwheel.client.socket.get_websocket_imp();
if(cljs.core.truth_(temp__6736__auto__)){
var WebSocket = temp__6736__auto__;
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: trying to open cljs reload socket");

var url = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(websocket_url),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(build_id)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(build_id)].join(''):""))].join('');
var socket = (new WebSocket(url));
socket.onmessage = ((function (url,socket,WebSocket,temp__6736__auto__,map__42086,map__42086__$1,opts,retry_count,retried_count,websocket_url,build_id){
return (function (msg_str){
var temp__6738__auto__ = cljs.reader.read_string(msg_str.data);
if(cljs.core.truth_(temp__6738__auto__)){
var msg = temp__6738__auto__;
return new cljs.core.Var(function(){return figwheel.client.socket.handle_incoming_message;},cljs.core.cst$sym$figwheel$client$socket_SLASH_handle_DASH_incoming_DASH_message,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$figwheel$client$socket,cljs.core.cst$sym$handle_DASH_incoming_DASH_message,"/home/jay/_project/personal/demo/clsj/qdemo/snakeq/target/cljsbuild-compiler-1/figwheel/client/socket.cljs",30,1,50,50,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$msg], null)),null,(cljs.core.truth_(figwheel.client.socket.handle_incoming_message)?figwheel.client.socket.handle_incoming_message.cljs$lang$test:null)])).call(null,msg);
} else {
return null;
}
});})(url,socket,WebSocket,temp__6736__auto__,map__42086,map__42086__$1,opts,retry_count,retried_count,websocket_url,build_id))
;

socket.onopen = ((function (url,socket,WebSocket,temp__6736__auto__,map__42086,map__42086__$1,opts,retry_count,retried_count,websocket_url,build_id){
return (function (x){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(figwheel.client.socket.socket_atom,socket) : cljs.core.reset_BANG_.call(null,figwheel.client.socket.socket_atom,socket));

if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())){
window.addEventListener("beforeunload",figwheel.client.socket.close_BANG_);
} else {
}

return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: socket connection established");
});})(url,socket,WebSocket,temp__6736__auto__,map__42086,map__42086__$1,opts,retry_count,retried_count,websocket_url,build_id))
;

socket.onclose = ((function (url,socket,WebSocket,temp__6736__auto__,map__42086,map__42086__$1,opts,retry_count,retried_count,websocket_url,build_id){
return (function (x){
var retried_count__$1 = (function (){var or__7601__auto__ = retried_count;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return (0);
}
})();
figwheel.client.utils.debug_prn("Figwheel: socket closed or failed to open");

if((retry_count > retried_count__$1)){
var G__42088 = ((function (retried_count__$1,url,socket,WebSocket,temp__6736__auto__,map__42086,map__42086__$1,opts,retry_count,retried_count,websocket_url,build_id){
return (function (){
var G__42090 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$retried_DASH_count,(retried_count__$1 + (1)));
return (figwheel.client.socket.open.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.socket.open.cljs$core$IFn$_invoke$arity$1(G__42090) : figwheel.client.socket.open.call(null,G__42090));
});})(retried_count__$1,url,socket,WebSocket,temp__6736__auto__,map__42086,map__42086__$1,opts,retry_count,retried_count,websocket_url,build_id))
;
var G__42089 = (function (){var x__7946__auto__ = (10000);
var y__7947__auto__ = ((2000) + ((500) * retried_count__$1));
return ((x__7946__auto__ < y__7947__auto__) ? x__7946__auto__ : y__7947__auto__);
})();
return setTimeout(G__42088,G__42089);
} else {
return null;
}
});})(url,socket,WebSocket,temp__6736__auto__,map__42086,map__42086__$1,opts,retry_count,retried_count,websocket_url,build_id))
;

socket.onerror = ((function (url,socket,WebSocket,temp__6736__auto__,map__42086,map__42086__$1,opts,retry_count,retried_count,websocket_url,build_id){
return (function (x){
return figwheel.client.utils.debug_prn("Figwheel: socket error ");
});})(url,socket,WebSocket,temp__6736__auto__,map__42086,map__42086__$1,opts,retry_count,retried_count,websocket_url,build_id))
;

return socket;
} else {
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_())?"Figwheel: Can't start Figwheel!! Please make sure ws is installed\n do -> 'npm install ws'":"Figwheel: Can't start Figwheel!! This browser doesn't support WebSockets"));
}
});
