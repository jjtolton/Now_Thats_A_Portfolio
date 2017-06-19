// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = (function (){var G__33448 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__33448) : cljs.core.atom.call(null,G__33448));
})();
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__6738__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_http.core.pending_requests) : cljs.core.deref.call(null,cljs_http.core.pending_requests)).call(null,channel);
if(cljs.core.truth_(temp__6738__auto__)){
var req = temp__6738__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__33453){
var vec__33454 = p__33453;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33454,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33454,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__33458 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__33458)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__33458)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__33458)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__33458)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__33458)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__33458)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__33459){
var map__33463 = p__33459;
var map__33463__$1 = ((((!((map__33463 == null)))?((((map__33463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33463.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33463):map__33463);
var request = map__33463__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33463__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33463__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33463__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__7601__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__33465 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__33465,default_headers);

cljs_http.core.apply_response_type_BANG_(G__33465,response_type);

G__33465.setTimeoutInterval(timeout);

G__33465.setWithCredentials(send_credentials);

return G__33465;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__33466){
var map__33495 = p__33466;
var map__33495__$1 = ((((!((map__33495 == null)))?((((map__33495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33495):map__33495);
var request = map__33495__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33495__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33495__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33495__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33495__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33495__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33495__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__7601__auto__ = request_method;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__33495,map__33495__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__33497 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__33497) : cljs_http.core.error_kw.call(null,G__33497));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__33495,map__33495__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_33523 = ((function (channel,request_url,method,headers__$1,xhr,map__33495,map__33495__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__33495,map__33495__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__33498_33524 = xhr;
G__33498_33524.setProgressEventsEnabled(true);

G__33498_33524.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_33523,cljs.core.cst$kw$upload));

G__33498_33524.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_33523,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__16369__auto___33525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___33525,channel,request_url,method,headers__$1,xhr,map__33495,map__33495__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___33525,channel,request_url,method,headers__$1,xhr,map__33495,map__33495__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_33509){
var state_val_33510 = (state_33509[(1)]);
if((state_val_33510 === (1))){
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33509__$1,(2),cancel);
} else {
if((state_val_33510 === (2))){
var inst_33500 = (state_33509[(2)]);
var inst_33501 = xhr.isComplete();
var inst_33502 = cljs.core.not(inst_33501);
var state_33509__$1 = (function (){var statearr_33511 = state_33509;
(statearr_33511[(7)] = inst_33500);

return statearr_33511;
})();
if(inst_33502){
var statearr_33512_33526 = state_33509__$1;
(statearr_33512_33526[(1)] = (3));

} else {
var statearr_33513_33527 = state_33509__$1;
(statearr_33513_33527[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_33510 === (3))){
var inst_33504 = xhr.abort();
var state_33509__$1 = state_33509;
var statearr_33514_33528 = state_33509__$1;
(statearr_33514_33528[(2)] = inst_33504);

(statearr_33514_33528[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33510 === (4))){
var state_33509__$1 = state_33509;
var statearr_33515_33529 = state_33509__$1;
(statearr_33515_33529[(2)] = null);

(statearr_33515_33529[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_33510 === (5))){
var inst_33507 = (state_33509[(2)]);
var state_33509__$1 = state_33509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33509__$1,inst_33507);
} else {
return null;
}
}
}
}
}
});})(c__16369__auto___33525,channel,request_url,method,headers__$1,xhr,map__33495,map__33495__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__16243__auto__,c__16369__auto___33525,channel,request_url,method,headers__$1,xhr,map__33495,map__33495__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__16244__auto__ = null;
var cljs_http$core$xhr_$_state_machine__16244__auto____0 = (function (){
var statearr_33519 = [null,null,null,null,null,null,null,null];
(statearr_33519[(0)] = cljs_http$core$xhr_$_state_machine__16244__auto__);

(statearr_33519[(1)] = (1));

return statearr_33519;
});
var cljs_http$core$xhr_$_state_machine__16244__auto____1 = (function (state_33509){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_33509);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e33520){if((e33520 instanceof Object)){
var ex__16247__auto__ = e33520;
var statearr_33521_33530 = state_33509;
(statearr_33521_33530[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33509);

return cljs.core.cst$kw$recur;
} else {
throw e33520;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__33531 = state_33509;
state_33509 = G__33531;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__16244__auto__ = function(state_33509){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__16244__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__16244__auto____1.call(this,state_33509);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$xhr_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__16244__auto____0;
cljs_http$core$xhr_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__16244__auto____1;
return cljs_http$core$xhr_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___33525,channel,request_url,method,headers__$1,xhr,map__33495,map__33495__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__16371__auto__ = (function (){var statearr_33522 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_33522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___33525);

return statearr_33522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___33525,channel,request_url,method,headers__$1,xhr,map__33495,map__33495__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__33532){
var map__33549 = p__33532;
var map__33549__$1 = ((((!((map__33549 == null)))?((((map__33549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33549.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33549):map__33549);
var request = map__33549__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33549__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33549__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33549__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__33549__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_33565 = jsonp.send(null,((function (channel,jsonp,map__33549,map__33549__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__33549,map__33549__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__33549,map__33549__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__33549,map__33549__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_33565], null));

if(cljs.core.truth_(cancel)){
var c__16369__auto___33566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___33566,req_33565,channel,jsonp,map__33549,map__33549__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___33566,req_33565,channel,jsonp,map__33549,map__33549__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_33555){
var state_val_33556 = (state_33555[(1)]);
if((state_val_33556 === (1))){
var state_33555__$1 = state_33555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33555__$1,(2),cancel);
} else {
if((state_val_33556 === (2))){
var inst_33552 = (state_33555[(2)]);
var inst_33553 = jsonp.cancel(req_33565);
var state_33555__$1 = (function (){var statearr_33557 = state_33555;
(statearr_33557[(7)] = inst_33552);

return statearr_33557;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33555__$1,inst_33553);
} else {
return null;
}
}
});})(c__16369__auto___33566,req_33565,channel,jsonp,map__33549,map__33549__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__16243__auto__,c__16369__auto___33566,req_33565,channel,jsonp,map__33549,map__33549__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__16244__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__16244__auto____0 = (function (){
var statearr_33561 = [null,null,null,null,null,null,null,null];
(statearr_33561[(0)] = cljs_http$core$jsonp_$_state_machine__16244__auto__);

(statearr_33561[(1)] = (1));

return statearr_33561;
});
var cljs_http$core$jsonp_$_state_machine__16244__auto____1 = (function (state_33555){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_33555);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e33562){if((e33562 instanceof Object)){
var ex__16247__auto__ = e33562;
var statearr_33563_33567 = state_33555;
(statearr_33563_33567[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33555);

return cljs.core.cst$kw$recur;
} else {
throw e33562;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__33568 = state_33555;
state_33555 = G__33568;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__16244__auto__ = function(state_33555){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__16244__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__16244__auto____1.call(this,state_33555);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs_http$core$jsonp_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__16244__auto____0;
cljs_http$core$jsonp_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__16244__auto____1;
return cljs_http$core$jsonp_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___33566,req_33565,channel,jsonp,map__33549,map__33549__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__16371__auto__ = (function (){var statearr_33564 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_33564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___33566);

return statearr_33564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___33566,req_33565,channel,jsonp,map__33549,map__33549__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__33569){
var map__33572 = p__33569;
var map__33572__$1 = ((((!((map__33572 == null)))?((((map__33572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33572):map__33572);
var request = map__33572__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33572__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
