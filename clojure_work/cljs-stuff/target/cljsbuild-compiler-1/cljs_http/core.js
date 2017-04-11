// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = (function (){var G__16943 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__16943) : cljs.core.atom.call(null,G__16943));
})();
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs_http.core.pending_requests) : cljs.core.deref.call(null,cljs_http.core.pending_requests)).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
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
return (function (p__16948){
var vec__16949 = p__16948;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16949,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16949,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__16953 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__16953)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__16953)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__16953)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__16953)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__16953)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__16953)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__16954){
var map__16958 = p__16954;
var map__16958__$1 = ((((!((map__16958 == null)))?((((map__16958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16958):map__16958);
var request = map__16958__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16958__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16958__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16958__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__6409__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__16960 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__16960,default_headers);

cljs_http.core.apply_response_type_BANG_(G__16960,response_type);

G__16960.setTimeoutInterval(timeout);

G__16960.setWithCredentials(send_credentials);

return G__16960;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__16961){
var map__16990 = p__16961;
var map__16990__$1 = ((((!((map__16990 == null)))?((((map__16990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16990):map__16990);
var request = map__16990__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16990__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16990__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16990__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16990__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16990__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16990__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__6409__auto__ = request_method;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr__$1 = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__16990,map__16990__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__16992 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__16992) : cljs_http.core.error_kw.call(null,G__16992));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr__$1))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__16990,map__16990__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_17018 = ((function (channel,request_url,method,headers__$1,xhr__$1,map__16990,map__16990__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr__$1,map__16990,map__16990__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__16993_17019 = xhr__$1;
G__16993_17019.setProgressEventsEnabled(true);

G__16993_17019.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_17018,cljs.core.cst$kw$upload));

G__16993_17019.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_17018,cljs.core.cst$kw$download));

} else {
}

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__14088__auto___17020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___17020,channel,request_url,method,headers__$1,xhr__$1,map__16990,map__16990__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___17020,channel,request_url,method,headers__$1,xhr__$1,map__16990,map__16990__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_17004){
var state_val_17005 = (state_17004[(1)]);
if((state_val_17005 === (1))){
var state_17004__$1 = state_17004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17004__$1,(2),cancel);
} else {
if((state_val_17005 === (2))){
var inst_16995 = (state_17004[(2)]);
var inst_16996 = xhr__$1.isComplete();
var inst_16997 = cljs.core.not(inst_16996);
var state_17004__$1 = (function (){var statearr_17006 = state_17004;
(statearr_17006[(7)] = inst_16995);

return statearr_17006;
})();
if(inst_16997){
var statearr_17007_17021 = state_17004__$1;
(statearr_17007_17021[(1)] = (3));

} else {
var statearr_17008_17022 = state_17004__$1;
(statearr_17008_17022[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17005 === (3))){
var inst_16999 = xhr__$1.abort();
var state_17004__$1 = state_17004;
var statearr_17009_17023 = state_17004__$1;
(statearr_17009_17023[(2)] = inst_16999);

(statearr_17009_17023[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17005 === (4))){
var state_17004__$1 = state_17004;
var statearr_17010_17024 = state_17004__$1;
(statearr_17010_17024[(2)] = null);

(statearr_17010_17024[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17005 === (5))){
var inst_17002 = (state_17004[(2)]);
var state_17004__$1 = state_17004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17004__$1,inst_17002);
} else {
return null;
}
}
}
}
}
});})(c__14088__auto___17020,channel,request_url,method,headers__$1,xhr__$1,map__16990,map__16990__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__13964__auto__,c__14088__auto___17020,channel,request_url,method,headers__$1,xhr__$1,map__16990,map__16990__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__13965__auto__ = null;
var cljs_http$core$xhr_$_state_machine__13965__auto____0 = (function (){
var statearr_17014 = [null,null,null,null,null,null,null,null];
(statearr_17014[(0)] = cljs_http$core$xhr_$_state_machine__13965__auto__);

(statearr_17014[(1)] = (1));

return statearr_17014;
});
var cljs_http$core$xhr_$_state_machine__13965__auto____1 = (function (state_17004){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_17004);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e17015){if((e17015 instanceof Object)){
var ex__13968__auto__ = e17015;
var statearr_17016_17025 = state_17004;
(statearr_17016_17025[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17004);

return cljs.core.cst$kw$recur;
} else {
throw e17015;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__17026 = state_17004;
state_17004 = G__17026;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__13965__auto__ = function(state_17004){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__13965__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__13965__auto____1.call(this,state_17004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__13965__auto____0;
cljs_http$core$xhr_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__13965__auto____1;
return cljs_http$core$xhr_$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___17020,channel,request_url,method,headers__$1,xhr__$1,map__16990,map__16990__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__14090__auto__ = (function (){var statearr_17017 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_17017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___17020);

return statearr_17017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___17020,channel,request_url,method,headers__$1,xhr__$1,map__16990,map__16990__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__17027){
var map__17044 = p__17027;
var map__17044__$1 = ((((!((map__17044 == null)))?((((map__17044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17044):map__17044);
var request = map__17044__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17044__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17044__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17044__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17044__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_17060 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__17044,map__17044__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.array_seq([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__17044,map__17044__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__17044,map__17044__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp__$1,map__17044,map__17044__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp__$1,cljs.core.cst$kw$request,req_17060], null));

if(cljs.core.truth_(cancel)){
var c__14088__auto___17061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___17061,req_17060,channel,jsonp__$1,map__17044,map__17044__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___17061,req_17060,channel,jsonp__$1,map__17044,map__17044__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_17050){
var state_val_17051 = (state_17050[(1)]);
if((state_val_17051 === (1))){
var state_17050__$1 = state_17050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17050__$1,(2),cancel);
} else {
if((state_val_17051 === (2))){
var inst_17047 = (state_17050[(2)]);
var inst_17048 = jsonp__$1.cancel(req_17060);
var state_17050__$1 = (function (){var statearr_17052 = state_17050;
(statearr_17052[(7)] = inst_17047);

return statearr_17052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17050__$1,inst_17048);
} else {
return null;
}
}
});})(c__14088__auto___17061,req_17060,channel,jsonp__$1,map__17044,map__17044__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__13964__auto__,c__14088__auto___17061,req_17060,channel,jsonp__$1,map__17044,map__17044__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__13965__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__13965__auto____0 = (function (){
var statearr_17056 = [null,null,null,null,null,null,null,null];
(statearr_17056[(0)] = cljs_http$core$jsonp_$_state_machine__13965__auto__);

(statearr_17056[(1)] = (1));

return statearr_17056;
});
var cljs_http$core$jsonp_$_state_machine__13965__auto____1 = (function (state_17050){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_17050);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e17057){if((e17057 instanceof Object)){
var ex__13968__auto__ = e17057;
var statearr_17058_17062 = state_17050;
(statearr_17058_17062[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17050);

return cljs.core.cst$kw$recur;
} else {
throw e17057;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__17063 = state_17050;
state_17050 = G__17063;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__13965__auto__ = function(state_17050){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__13965__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__13965__auto____1.call(this,state_17050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__13965__auto____0;
cljs_http$core$jsonp_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__13965__auto____1;
return cljs_http$core$jsonp_$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___17061,req_17060,channel,jsonp__$1,map__17044,map__17044__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__14090__auto__ = (function (){var statearr_17059 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_17059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___17061);

return statearr_17059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___17061,req_17060,channel,jsonp__$1,map__17044,map__17044__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__17064){
var map__17067 = p__17064;
var map__17067__$1 = ((((!((map__17067 == null)))?((((map__17067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17067):map__17067);
var request__$1 = map__17067__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17067__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request__$1);
} else {
return cljs_http.core.xhr(request__$1);
}
});
