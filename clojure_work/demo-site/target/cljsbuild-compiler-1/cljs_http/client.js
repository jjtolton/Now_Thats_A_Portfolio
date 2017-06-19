// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__7589__auto__ = v;
if(cljs.core.truth_(and__7589__auto__)){
return (v > (0));
} else {
return and__7589__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_(s))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__33579_SHARP_,p2__33578_SHARP_){
var vec__33583 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__33578_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33583,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33583,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33579_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_(url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.cst$kw$server_DASH_name,uri.getDomain(),cljs.core.cst$kw$server_DASH_port,cljs_http.client.if_pos(uri.getPort()),cljs.core.cst$kw$uri,uri.getPath(),cljs.core.cst$kw$query_DASH_string,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),cljs.core.cst$kw$query_DASH_params,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33586_SHARP_){
return cljs_http.client.encode_val(k,p1__33586_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__33587){
var vec__33591 = p__33587;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33591,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33591,(1),null);
if(cljs.core.coll_QMARK_(v)){
return cljs_http.client.encode_vals(k,v);
} else {
return cljs_http.client.encode_val(k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap(esc_chars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (esc_chars){
return (function (p1__33594_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33594_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__7589__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method);
if(and__7589__auto__){
var and__7589__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
if(and__7589__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__7589__auto____$1;
}
} else {
return and__7589__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$body], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__6736__auto__ = cljs.core.cst$kw$edn_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6736__auto__)){
var params = temp__6736__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__33596 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__33596) : client.call(null,G__33596));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__33597_SHARP_){
return cljs_http.client.decode_body(p1__33597_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33605 = arguments.length;
var i__8823__auto___33606 = (0);
while(true){
if((i__8823__auto___33606 < len__8822__auto___33605)){
args__8829__auto__.push((arguments[i__8823__auto___33606]));

var G__33607 = (i__8823__auto___33606 + (1));
i__8823__auto___33606 = G__33607;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__33600){
var vec__33601 = p__33600;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33601,(0),null);
return ((function (vec__33601,default_headers){
return (function (request){
var temp__6736__auto__ = (function (){var or__7601__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__6736__auto__)){
var default_headers__$1 = temp__6736__auto__;
var G__33604 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__33604) : client.call(null,G__33604));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__33601,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq33598){
var G__33599 = cljs.core.first(seq33598);
var seq33598__$1 = cljs.core.next(seq33598);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__33599,seq33598__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33615 = arguments.length;
var i__8823__auto___33616 = (0);
while(true){
if((i__8823__auto___33616 < len__8822__auto___33615)){
args__8829__auto__.push((arguments[i__8823__auto___33616]));

var G__33617 = (i__8823__auto___33616 + (1));
i__8823__auto___33616 = G__33617;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__33610){
var vec__33611 = p__33610;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33611,(0),null);
return ((function (vec__33611,accept){
return (function (request){
var temp__6736__auto__ = (function (){var or__7601__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__6736__auto__)){
var accept__$1 = temp__6736__auto__;
var G__33614 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__33614) : client.call(null,G__33614));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__33611,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq33608){
var G__33609 = cljs.core.first(seq33608);
var seq33608__$1 = cljs.core.next(seq33608);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__33609,seq33608__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33625 = arguments.length;
var i__8823__auto___33626 = (0);
while(true){
if((i__8823__auto___33626 < len__8822__auto___33625)){
args__8829__auto__.push((arguments[i__8823__auto___33626]));

var G__33627 = (i__8823__auto___33626 + (1));
i__8823__auto___33626 = G__33627;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__33620){
var vec__33621 = p__33620;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33621,(0),null);
return ((function (vec__33621,content_type){
return (function (request){
var temp__6736__auto__ = (function (){var or__7601__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__6736__auto__)){
var content_type__$1 = temp__6736__auto__;
var G__33624 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__33624) : client.call(null,G__33624));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__33621,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq33618){
var G__33619 = cljs.core.first(seq33618);
var seq33618__$1 = cljs.core.next(seq33618);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__33619,seq33618__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$encoding,cljs.core.cst$kw$json,cljs.core.cst$kw$encoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$decoding,cljs.core.cst$kw$json,cljs.core.cst$kw$decoding_DASH_opts,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__6736__auto__ = cljs.core.cst$kw$transit_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6736__auto__)){
var params = temp__6736__auto__;
var map__33631 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__33631__$1 = ((((!((map__33631 == null)))?((((map__33631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33631.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33631):map__33631);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33631__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33631__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__33633 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__33633) : client.call(null,G__33633));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__33638 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__33638__$1 = ((((!((map__33638 == null)))?((((map__33638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33638):map__33638);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33638__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33638__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__33638,map__33638__$1,decoding,decoding_opts){
return (function (p1__33634_SHARP_){
return cljs_http.util.transit_decode(p1__33634_SHARP_,decoding,decoding_opts);
});})(map__33638,map__33638__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__33638,map__33638__$1,decoding,decoding_opts,transit_decode){
return (function (p1__33635_SHARP_){
return cljs_http.client.decode_body(p1__33635_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__33638,map__33638__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__6736__auto__ = cljs.core.cst$kw$json_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6736__auto__)){
var params = temp__6736__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__33641 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__33641) : client.call(null,G__33641));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__33642_SHARP_){
return cljs_http.client.decode_body(p1__33642_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__33647){
var map__33648 = p__33647;
var map__33648__$1 = ((((!((map__33648 == null)))?((((map__33648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33648.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33648):map__33648);
var req = map__33648__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33648__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__33650 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__33650) : client.call(null,G__33650));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__33655){
var map__33656 = p__33655;
var map__33656__$1 = ((((!((map__33656 == null)))?((((map__33656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33656.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33656):map__33656);
var request = map__33656__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33656__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33656__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33656__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__7589__auto__ = form_params;
if(cljs.core.truth_(and__7589__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__7589__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__33658 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__33658) : client.call(null,G__33658));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__33669_33679 = cljs.core.seq(params);
var chunk__33670_33680 = null;
var count__33671_33681 = (0);
var i__33672_33682 = (0);
while(true){
if((i__33672_33682 < count__33671_33681)){
var vec__33673_33683 = chunk__33670_33680.cljs$core$IIndexed$_nth$arity$2(null,i__33672_33682);
var k_33684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33673_33683,(0),null);
var v_33685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33673_33683,(1),null);
if(cljs.core.coll_QMARK_(v_33685)){
form_data.append(cljs.core.name(k_33684),cljs.core.first(v_33685),cljs.core.second(v_33685));
} else {
form_data.append(cljs.core.name(k_33684),v_33685);
}

var G__33686 = seq__33669_33679;
var G__33687 = chunk__33670_33680;
var G__33688 = count__33671_33681;
var G__33689 = (i__33672_33682 + (1));
seq__33669_33679 = G__33686;
chunk__33670_33680 = G__33687;
count__33671_33681 = G__33688;
i__33672_33682 = G__33689;
continue;
} else {
var temp__6738__auto___33690 = cljs.core.seq(seq__33669_33679);
if(temp__6738__auto___33690){
var seq__33669_33691__$1 = temp__6738__auto___33690;
if(cljs.core.chunked_seq_QMARK_(seq__33669_33691__$1)){
var c__8512__auto___33692 = cljs.core.chunk_first(seq__33669_33691__$1);
var G__33693 = cljs.core.chunk_rest(seq__33669_33691__$1);
var G__33694 = c__8512__auto___33692;
var G__33695 = cljs.core.count(c__8512__auto___33692);
var G__33696 = (0);
seq__33669_33679 = G__33693;
chunk__33670_33680 = G__33694;
count__33671_33681 = G__33695;
i__33672_33682 = G__33696;
continue;
} else {
var vec__33676_33697 = cljs.core.first(seq__33669_33691__$1);
var k_33698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33676_33697,(0),null);
var v_33699 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33676_33697,(1),null);
if(cljs.core.coll_QMARK_(v_33699)){
form_data.append(cljs.core.name(k_33698),cljs.core.first(v_33699),cljs.core.second(v_33699));
} else {
form_data.append(cljs.core.name(k_33698),v_33699);
}

var G__33700 = cljs.core.next(seq__33669_33691__$1);
var G__33701 = null;
var G__33702 = (0);
var G__33703 = (0);
seq__33669_33679 = G__33700;
chunk__33670_33680 = G__33701;
count__33671_33681 = G__33702;
i__33672_33682 = G__33703;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__33708){
var map__33709 = p__33708;
var map__33709__$1 = ((((!((map__33709 == null)))?((((map__33709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33709.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33709):map__33709);
var request = map__33709__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33709__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33709__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__7589__auto__ = multipart_params;
if(cljs.core.truth_(and__7589__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__7589__auto__;
}
})())){
var G__33711 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__33711) : client.call(null,G__33711));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__6736__auto__ = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__6736__auto__)){
var m = temp__6736__auto__;
var G__33713 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__33713) : client.call(null,G__33713));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__33714_SHARP_){
var G__33716 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33714_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__33716) : client.call(null,G__33716));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__33722){
var map__33723 = p__33722;
var map__33723__$1 = ((((!((map__33723 == null)))?((((map__33723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33723):map__33723);
var req = map__33723__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33723__$1,cljs.core.cst$kw$query_DASH_params);
var temp__6736__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__6736__auto__)){
var spec = temp__6736__auto__;
var G__33725 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__6736__auto__,map__33723,map__33723__$1,req,query_params){
return (function (p1__33717_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__33717_SHARP_,query_params], 0));
});})(spec,temp__6736__auto__,map__33723,map__33723__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__33725) : client.call(null,G__33725));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33733 = arguments.length;
var i__8823__auto___33734 = (0);
while(true){
if((i__8823__auto___33734 < len__8822__auto___33733)){
args__8829__auto__.push((arguments[i__8823__auto___33734]));

var G__33735 = (i__8823__auto___33734 + (1));
i__8823__auto___33734 = G__33735;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__33728){
var vec__33729 = p__33728;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33729,(0),null);
return ((function (vec__33729,credentials){
return (function (req){
var credentials__$1 = (function (){var or__7601__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__33732 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__33732) : client.call(null,G__33732));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__33729,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq33726){
var G__33727 = cljs.core.first(seq33726);
var seq33726__$1 = cljs.core.next(seq33726);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__33727,seq33726__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__6736__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__6736__auto__)){
var oauth_token = temp__6736__auto__;
var G__33737 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bearer "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__33737) : client.call(null,G__33737));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__6736__auto__ = cljs.core.cst$kw$channel.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6736__auto__)){
var custom_channel = temp__6736__auto__;
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request)),custom_channel);
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers(cljs_http.client.wrap_channel_from_request_map(cljs_http.client.wrap_url(cljs_http.client.wrap_method(cljs_http.client.wrap_oauth(cljs_http.client.wrap_basic_auth(cljs_http.client.wrap_query_params(cljs_http.client.wrap_content_type(cljs_http.client.wrap_json_response(cljs_http.client.wrap_json_params(cljs_http.client.wrap_transit_response(cljs_http.client.wrap_transit_params(cljs_http.client.wrap_edn_response(cljs_http.client.wrap_edn_params(cljs_http.client.wrap_multipart_params(cljs_http.client.wrap_form_params(cljs_http.client.wrap_accept(request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request(cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33745 = arguments.length;
var i__8823__auto___33746 = (0);
while(true){
if((i__8823__auto___33746 < len__8822__auto___33745)){
args__8829__auto__.push((arguments[i__8823__auto___33746]));

var G__33747 = (i__8823__auto___33746 + (1));
i__8823__auto___33746 = G__33747;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33740){
var vec__33741 = p__33740;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33741,(0),null);
var G__33744 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__33744) : cljs_http.client.request.call(null,G__33744));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq33738){
var G__33739 = cljs.core.first(seq33738);
var seq33738__$1 = cljs.core.next(seq33738);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__33739,seq33738__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33755 = arguments.length;
var i__8823__auto___33756 = (0);
while(true){
if((i__8823__auto___33756 < len__8822__auto___33755)){
args__8829__auto__.push((arguments[i__8823__auto___33756]));

var G__33757 = (i__8823__auto___33756 + (1));
i__8823__auto___33756 = G__33757;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33750){
var vec__33751 = p__33750;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33751,(0),null);
var G__33754 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__33754) : cljs_http.client.request.call(null,G__33754));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq33748){
var G__33749 = cljs.core.first(seq33748);
var seq33748__$1 = cljs.core.next(seq33748);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__33749,seq33748__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33765 = arguments.length;
var i__8823__auto___33766 = (0);
while(true){
if((i__8823__auto___33766 < len__8822__auto___33765)){
args__8829__auto__.push((arguments[i__8823__auto___33766]));

var G__33767 = (i__8823__auto___33766 + (1));
i__8823__auto___33766 = G__33767;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33760){
var vec__33761 = p__33760;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33761,(0),null);
var G__33764 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__33764) : cljs_http.client.request.call(null,G__33764));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq33758){
var G__33759 = cljs.core.first(seq33758);
var seq33758__$1 = cljs.core.next(seq33758);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__33759,seq33758__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33775 = arguments.length;
var i__8823__auto___33776 = (0);
while(true){
if((i__8823__auto___33776 < len__8822__auto___33775)){
args__8829__auto__.push((arguments[i__8823__auto___33776]));

var G__33777 = (i__8823__auto___33776 + (1));
i__8823__auto___33776 = G__33777;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33770){
var vec__33771 = p__33770;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33771,(0),null);
var G__33774 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__33774) : cljs_http.client.request.call(null,G__33774));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq33768){
var G__33769 = cljs.core.first(seq33768);
var seq33768__$1 = cljs.core.next(seq33768);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__33769,seq33768__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33785 = arguments.length;
var i__8823__auto___33786 = (0);
while(true){
if((i__8823__auto___33786 < len__8822__auto___33785)){
args__8829__auto__.push((arguments[i__8823__auto___33786]));

var G__33787 = (i__8823__auto___33786 + (1));
i__8823__auto___33786 = G__33787;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33780){
var vec__33781 = p__33780;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33781,(0),null);
var G__33784 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__33784) : cljs_http.client.request.call(null,G__33784));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq33778){
var G__33779 = cljs.core.first(seq33778);
var seq33778__$1 = cljs.core.next(seq33778);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__33779,seq33778__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33795 = arguments.length;
var i__8823__auto___33796 = (0);
while(true){
if((i__8823__auto___33796 < len__8822__auto___33795)){
args__8829__auto__.push((arguments[i__8823__auto___33796]));

var G__33797 = (i__8823__auto___33796 + (1));
i__8823__auto___33796 = G__33797;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33790){
var vec__33791 = p__33790;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33791,(0),null);
var G__33794 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__33794) : cljs_http.client.request.call(null,G__33794));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq33788){
var G__33789 = cljs.core.first(seq33788);
var seq33788__$1 = cljs.core.next(seq33788);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__33789,seq33788__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33805 = arguments.length;
var i__8823__auto___33806 = (0);
while(true){
if((i__8823__auto___33806 < len__8822__auto___33805)){
args__8829__auto__.push((arguments[i__8823__auto___33806]));

var G__33807 = (i__8823__auto___33806 + (1));
i__8823__auto___33806 = G__33807;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33800){
var vec__33801 = p__33800;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33801,(0),null);
var G__33804 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__33804) : cljs_http.client.request.call(null,G__33804));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq33798){
var G__33799 = cljs.core.first(seq33798);
var seq33798__$1 = cljs.core.next(seq33798);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__33799,seq33798__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33815 = arguments.length;
var i__8823__auto___33816 = (0);
while(true){
if((i__8823__auto___33816 < len__8822__auto___33815)){
args__8829__auto__.push((arguments[i__8823__auto___33816]));

var G__33817 = (i__8823__auto___33816 + (1));
i__8823__auto___33816 = G__33817;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33810){
var vec__33811 = p__33810;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33811,(0),null);
var G__33814 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__33814) : cljs_http.client.request.call(null,G__33814));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq33808){
var G__33809 = cljs.core.first(seq33808);
var seq33808__$1 = cljs.core.next(seq33808);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__33809,seq33808__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33825 = arguments.length;
var i__8823__auto___33826 = (0);
while(true){
if((i__8823__auto___33826 < len__8822__auto___33825)){
args__8829__auto__.push((arguments[i__8823__auto___33826]));

var G__33827 = (i__8823__auto___33826 + (1));
i__8823__auto___33826 = G__33827;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__33820){
var vec__33821 = p__33820;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33821,(0),null);
var G__33824 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__33824) : cljs_http.client.request.call(null,G__33824));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq33818){
var G__33819 = cljs.core.first(seq33818);
var seq33818__$1 = cljs.core.next(seq33818);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__33819,seq33818__$1);
});

