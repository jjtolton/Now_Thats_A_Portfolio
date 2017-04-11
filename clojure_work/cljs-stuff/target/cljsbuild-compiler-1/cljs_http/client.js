// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__6397__auto__ = v;
if(cljs.core.truth_(and__6397__auto__)){
return (v > (0));
} else {
return and__6397__auto__;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__17072_SHARP_,p2__17071_SHARP_){
var vec__17076 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(p2__17071_SHARP_,/=/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17076,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17076,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17072_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(no.en.core.url_decode(k)),no.en.core.url_decode(v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(s)].join(''),/&/));
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
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$scheme,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(uri.getScheme()),cljs.core.cst$kw$server_DASH_name,uri.getDomain(),cljs.core.cst$kw$server_DASH_port,cljs_http.client.if_pos(uri.getPort()),cljs.core.cst$kw$uri,uri.getPath(),cljs.core.cst$kw$query_DASH_string,((cljs.core.not(query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),cljs.core.cst$kw$query_DASH_params,((cljs.core.not(query_data.isEmpty()))?cljs_http.client.parse_query_params([cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode(cljs.core.name(k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode([cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17079_SHARP_){
return cljs_http.client.encode_val(k,p1__17079_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__17080){
var vec__17084 = p__17080;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17084,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17084,(1),null);
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
return (function (p1__17087_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__17087_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__6397__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$head,request_method);
if(and__6397__auto__){
var and__6397__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((204),cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response));
if(and__6397__auto____$1){
return cljs.core.re_find(cljs.core.re_pattern([cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special(content_type))].join('')),[cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
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
var temp__4655__auto__ = cljs.core.cst$kw$edn_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__17089 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$edn_DASH_params),cljs.core.cst$kw$body,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([params], 0))),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17089) : client.call(null,G__17089));
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__17090_SHARP_){
return cljs_http.client.decode_body(p1__17090_SHARP_,cljs.reader.read_string,"application/edn",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__7491__auto__ = [];
var len__7484__auto___17098 = arguments.length;
var i__7485__auto___17099 = (0);
while(true){
if((i__7485__auto___17099 < len__7484__auto___17098)){
args__7491__auto__.push((arguments[i__7485__auto___17099]));

var G__17100 = (i__7485__auto___17099 + (1));
i__7485__auto___17099 = G__17100;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17093){
var vec__17094 = p__17093;
var default_headers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17094,(0),null);
return ((function (vec__17094,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__6409__auto__ = cljs.core.cst$kw$default_DASH_headers.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
var G__17097 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$default_DASH_headers,default_headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17097) : client.call(null,G__17097));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__17094,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq17091){
var G__17092 = cljs.core.first(seq17091);
var seq17091__$1 = cljs.core.next(seq17091);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__17092,seq17091__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__7491__auto__ = [];
var len__7484__auto___17108 = arguments.length;
var i__7485__auto___17109 = (0);
while(true){
if((i__7485__auto___17109 < len__7484__auto___17108)){
args__7491__auto__.push((arguments[i__7485__auto___17109]));

var G__17110 = (i__7485__auto___17109 + (1));
i__7485__auto___17109 = G__17110;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17103){
var vec__17104 = p__17103;
var accept = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17104,(0),null);
return ((function (vec__17104,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__6409__auto__ = cljs.core.cst$kw$accept.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
var G__17107 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"accept"], null),accept__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17107) : client.call(null,G__17107));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__17104,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq17101){
var G__17102 = cljs.core.first(seq17101);
var seq17101__$1 = cljs.core.next(seq17101);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__17102,seq17101__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__7491__auto__ = [];
var len__7484__auto___17118 = arguments.length;
var i__7485__auto___17119 = (0);
while(true){
if((i__7485__auto___17119 < len__7484__auto___17118)){
args__7491__auto__.push((arguments[i__7485__auto___17119]));

var G__17120 = (i__7485__auto___17119 + (1));
i__7485__auto___17119 = G__17120;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17113){
var vec__17114 = p__17113;
var content_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17114,(0),null);
return ((function (vec__17114,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__6409__auto__ = cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
var G__17117 = cljs.core.assoc_in(request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"content-type"], null),content_type__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17117) : client.call(null,G__17117));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
;})(vec__17114,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq17111){
var G__17112 = cljs.core.first(seq17111);
var seq17111__$1 = cljs.core.next(seq17111);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__17112,seq17111__$1);
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
var temp__4655__auto__ = cljs.core.cst$kw$transit_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__17124 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__17124__$1 = ((((!((map__17124 == null)))?((((map__17124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17124):map__17124);
var encoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17124__$1,cljs.core.cst$kw$encoding);
var encoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17124__$1,cljs.core.cst$kw$encoding_DASH_opts);
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__17126 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$transit_DASH_params),cljs.core.cst$kw$body,cljs_http.util.transit_encode(params,encoding,encoding_opts)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17126) : client.call(null,G__17126));
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
var map__17131 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs_http.client.default_transit_opts,cljs.core.cst$kw$transit_DASH_opts.cljs$core$IFn$_invoke$arity$1(request)], 0));
var map__17131__$1 = ((((!((map__17131 == null)))?((((map__17131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17131):map__17131);
var decoding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17131__$1,cljs.core.cst$kw$decoding);
var decoding_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17131__$1,cljs.core.cst$kw$decoding_DASH_opts);
var transit_decode = ((function (map__17131,map__17131__$1,decoding,decoding_opts){
return (function (p1__17127_SHARP_){
return cljs_http.util.transit_decode(p1__17127_SHARP_,decoding,decoding_opts);
});})(map__17131,map__17131__$1,decoding,decoding_opts))
;
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(((function (map__17131,map__17131__$1,decoding,decoding_opts,transit_decode){
return (function (p1__17128_SHARP_){
return cljs_http.client.decode_body(p1__17128_SHARP_,transit_decode,"application/transit+json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
});})(map__17131,map__17131__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = cljs.core.cst$kw$json_DASH_params.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var headers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(request)], 0));
var G__17134 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$json_DASH_params),cljs.core.cst$kw$body,cljs_http.util.json_encode(params)),cljs.core.cst$kw$headers,headers);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17134) : client.call(null,G__17134));
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (p1__17135_SHARP_){
return cljs_http.client.decode_body(p1__17135_SHARP_,cljs_http.util.json_decode,"application/json",cljs.core.cst$kw$request_DASH_method.cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request))], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__17140){
var map__17141 = p__17140;
var map__17141__$1 = ((((!((map__17141 == null)))?((((map__17141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17141):map__17141);
var req = map__17141__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17141__$1,cljs.core.cst$kw$query_DASH_params);
if(cljs.core.truth_(query_params)){
var G__17143 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$query_DASH_params),cljs.core.cst$kw$query_DASH_string,cljs_http.client.generate_query_string(query_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17143) : client.call(null,G__17143));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__17148){
var map__17149 = p__17148;
var map__17149__$1 = ((((!((map__17149 == null)))?((((map__17149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17149):map__17149);
var request = map__17149__$1;
var form_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17149__$1,cljs.core.cst$kw$form_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17149__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17149__$1,cljs.core.cst$kw$headers);
if(cljs.core.truth_((function (){var and__6397__auto__ = form_params;
if(cljs.core.truth_(and__6397__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__6397__auto__;
}
})())){
var headers__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers], 0));
var G__17151 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$form_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_query_string(form_params)),cljs.core.cst$kw$headers,headers__$1);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17151) : client.call(null,G__17151));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__17162_17172 = cljs.core.seq(params);
var chunk__17163_17173 = null;
var count__17164_17174 = (0);
var i__17165_17175 = (0);
while(true){
if((i__17165_17175 < count__17164_17174)){
var vec__17166_17176 = chunk__17163_17173.cljs$core$IIndexed$_nth$arity$2(null,i__17165_17175);
var k_17177 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17166_17176,(0),null);
var v_17178 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17166_17176,(1),null);
if(cljs.core.coll_QMARK_(v_17178)){
form_data.append(cljs.core.name(k_17177),cljs.core.first(v_17178),cljs.core.second(v_17178));
} else {
form_data.append(cljs.core.name(k_17177),v_17178);
}

var G__17179 = seq__17162_17172;
var G__17180 = chunk__17163_17173;
var G__17181 = count__17164_17174;
var G__17182 = (i__17165_17175 + (1));
seq__17162_17172 = G__17179;
chunk__17163_17173 = G__17180;
count__17164_17174 = G__17181;
i__17165_17175 = G__17182;
continue;
} else {
var temp__4657__auto___17183 = cljs.core.seq(seq__17162_17172);
if(temp__4657__auto___17183){
var seq__17162_17184__$1 = temp__4657__auto___17183;
if(cljs.core.chunked_seq_QMARK_(seq__17162_17184__$1)){
var c__7220__auto___17185 = cljs.core.chunk_first(seq__17162_17184__$1);
var G__17186 = cljs.core.chunk_rest(seq__17162_17184__$1);
var G__17187 = c__7220__auto___17185;
var G__17188 = cljs.core.count(c__7220__auto___17185);
var G__17189 = (0);
seq__17162_17172 = G__17186;
chunk__17163_17173 = G__17187;
count__17164_17174 = G__17188;
i__17165_17175 = G__17189;
continue;
} else {
var vec__17169_17190 = cljs.core.first(seq__17162_17184__$1);
var k_17191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17169_17190,(0),null);
var v_17192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17169_17190,(1),null);
if(cljs.core.coll_QMARK_(v_17192)){
form_data.append(cljs.core.name(k_17191),cljs.core.first(v_17192),cljs.core.second(v_17192));
} else {
form_data.append(cljs.core.name(k_17191),v_17192);
}

var G__17193 = cljs.core.next(seq__17162_17184__$1);
var G__17194 = null;
var G__17195 = (0);
var G__17196 = (0);
seq__17162_17172 = G__17193;
chunk__17163_17173 = G__17194;
count__17164_17174 = G__17195;
i__17165_17175 = G__17196;
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
return (function (p__17201){
var map__17202 = p__17201;
var map__17202__$1 = ((((!((map__17202 == null)))?((((map__17202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17202):map__17202);
var request = map__17202__$1;
var multipart_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17202__$1,cljs.core.cst$kw$multipart_DASH_params);
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17202__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core.truth_((function (){var and__6397__auto__ = multipart_params;
if(cljs.core.truth_(and__6397__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$patch,null,cljs.core.cst$kw$delete,null,cljs.core.cst$kw$post,null,cljs.core.cst$kw$put,null], null), null).call(null,request_method);
} else {
return and__6397__auto__;
}
})())){
var G__17204 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(request,cljs.core.cst$kw$multipart_DASH_params),cljs.core.cst$kw$body,cljs_http.client.generate_form_data(multipart_params));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17204) : client.call(null,G__17204));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(request) : client.call(null,request));
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4655__auto__ = cljs.core.cst$kw$method.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
var G__17206 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$method),cljs.core.cst$kw$request_DASH_method,m);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17206) : client.call(null,G__17206));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__17207_SHARP_){
var G__17209 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__17207_SHARP_,cljs.core.cst$kw$server_DASH_name,server_name);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17209) : client.call(null,G__17209));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__17215){
var map__17216 = p__17215;
var map__17216__$1 = ((((!((map__17216 == null)))?((((map__17216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17216):map__17216);
var req = map__17216__$1;
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17216__$1,cljs.core.cst$kw$query_DASH_params);
var temp__4655__auto__ = cljs_http.client.parse_url(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
var G__17218 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,spec], 0)),cljs.core.cst$kw$url),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_params], null),((function (spec,temp__4655__auto__,map__17216,map__17216__$1,req,query_params){
return (function (p1__17210_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p1__17210_SHARP_,query_params], 0));
});})(spec,temp__4655__auto__,map__17216,map__17216__$1,req,query_params))
);
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17218) : client.call(null,G__17218));
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
var args__7491__auto__ = [];
var len__7484__auto___17226 = arguments.length;
var i__7485__auto___17227 = (0);
while(true){
if((i__7485__auto___17227 < len__7484__auto___17226)){
args__7491__auto__.push((arguments[i__7485__auto___17227]));

var G__17228 = (i__7485__auto___17227 + (1));
i__7485__auto___17227 = G__17228;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__17221){
var vec__17222 = p__17221;
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17222,(0),null);
return ((function (vec__17222,credentials){
return (function (req){
var credentials__$1 = (function (){var or__6409__auto__ = cljs.core.cst$kw$basic_DASH_auth.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_(credentials__$1))){
var G__17225 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$basic_DASH_auth),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),cljs_http.util.basic_auth(credentials__$1));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17225) : client.call(null,G__17225));
} else {
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(req) : client.call(null,req));
}
});
;})(vec__17222,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq17219){
var G__17220 = cljs.core.first(seq17219);
var seq17219__$1 = cljs.core.next(seq17219);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__17220,seq17219__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = cljs.core.cst$kw$oauth_DASH_token.cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
var G__17230 = cljs.core.assoc_in(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(req,cljs.core.cst$kw$oauth_DASH_token),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$headers,"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join(''));
return (client.cljs$core$IFn$_invoke$arity$1 ? client.cljs$core$IFn$_invoke$arity$1(G__17230) : client.call(null,G__17230));
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
var temp__4655__auto__ = cljs.core.cst$kw$channel.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
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
var args__7491__auto__ = [];
var len__7484__auto___17238 = arguments.length;
var i__7485__auto___17239 = (0);
while(true){
if((i__7485__auto___17239 < len__7484__auto___17238)){
args__7491__auto__.push((arguments[i__7485__auto___17239]));

var G__17240 = (i__7485__auto___17239 + (1));
i__7485__auto___17239 = G__17240;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17233){
var vec__17234 = p__17233;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17234,(0),null);
var G__17237 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$delete,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17237) : cljs_http.client.request.call(null,G__17237));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq17231){
var G__17232 = cljs.core.first(seq17231);
var seq17231__$1 = cljs.core.next(seq17231);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__17232,seq17231__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__7491__auto__ = [];
var len__7484__auto___17248 = arguments.length;
var i__7485__auto___17249 = (0);
while(true){
if((i__7485__auto___17249 < len__7484__auto___17248)){
args__7491__auto__.push((arguments[i__7485__auto___17249]));

var G__17250 = (i__7485__auto___17249 + (1));
i__7485__auto___17249 = G__17250;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17243){
var vec__17244 = p__17243;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17244,(0),null);
var G__17247 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$get,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17247) : cljs_http.client.request.call(null,G__17247));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq17241){
var G__17242 = cljs.core.first(seq17241);
var seq17241__$1 = cljs.core.next(seq17241);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__17242,seq17241__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__7491__auto__ = [];
var len__7484__auto___17258 = arguments.length;
var i__7485__auto___17259 = (0);
while(true){
if((i__7485__auto___17259 < len__7484__auto___17258)){
args__7491__auto__.push((arguments[i__7485__auto___17259]));

var G__17260 = (i__7485__auto___17259 + (1));
i__7485__auto___17259 = G__17260;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17253){
var vec__17254 = p__17253;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17254,(0),null);
var G__17257 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$head,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17257) : cljs_http.client.request.call(null,G__17257));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq17251){
var G__17252 = cljs.core.first(seq17251);
var seq17251__$1 = cljs.core.next(seq17251);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__17252,seq17251__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__7491__auto__ = [];
var len__7484__auto___17268 = arguments.length;
var i__7485__auto___17269 = (0);
while(true){
if((i__7485__auto___17269 < len__7484__auto___17268)){
args__7491__auto__.push((arguments[i__7485__auto___17269]));

var G__17270 = (i__7485__auto___17269 + (1));
i__7485__auto___17269 = G__17270;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17263){
var vec__17264 = p__17263;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17264,(0),null);
var G__17267 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$jsonp,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17267) : cljs_http.client.request.call(null,G__17267));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq17261){
var G__17262 = cljs.core.first(seq17261);
var seq17261__$1 = cljs.core.next(seq17261);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__17262,seq17261__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__7491__auto__ = [];
var len__7484__auto___17278 = arguments.length;
var i__7485__auto___17279 = (0);
while(true){
if((i__7485__auto___17279 < len__7484__auto___17278)){
args__7491__auto__.push((arguments[i__7485__auto___17279]));

var G__17280 = (i__7485__auto___17279 + (1));
i__7485__auto___17279 = G__17280;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17273){
var vec__17274 = p__17273;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17274,(0),null);
var G__17277 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$move,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17277) : cljs_http.client.request.call(null,G__17277));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq17271){
var G__17272 = cljs.core.first(seq17271);
var seq17271__$1 = cljs.core.next(seq17271);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__17272,seq17271__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__7491__auto__ = [];
var len__7484__auto___17288 = arguments.length;
var i__7485__auto___17289 = (0);
while(true){
if((i__7485__auto___17289 < len__7484__auto___17288)){
args__7491__auto__.push((arguments[i__7485__auto___17289]));

var G__17290 = (i__7485__auto___17289 + (1));
i__7485__auto___17289 = G__17290;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17283){
var vec__17284 = p__17283;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17284,(0),null);
var G__17287 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$options,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17287) : cljs_http.client.request.call(null,G__17287));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq17281){
var G__17282 = cljs.core.first(seq17281);
var seq17281__$1 = cljs.core.next(seq17281);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__17282,seq17281__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__7491__auto__ = [];
var len__7484__auto___17298 = arguments.length;
var i__7485__auto___17299 = (0);
while(true){
if((i__7485__auto___17299 < len__7484__auto___17298)){
args__7491__auto__.push((arguments[i__7485__auto___17299]));

var G__17300 = (i__7485__auto___17299 + (1));
i__7485__auto___17299 = G__17300;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17293){
var vec__17294 = p__17293;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17294,(0),null);
var G__17297 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$patch,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17297) : cljs_http.client.request.call(null,G__17297));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq17291){
var G__17292 = cljs.core.first(seq17291);
var seq17291__$1 = cljs.core.next(seq17291);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__17292,seq17291__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__7491__auto__ = [];
var len__7484__auto___17308 = arguments.length;
var i__7485__auto___17309 = (0);
while(true){
if((i__7485__auto___17309 < len__7484__auto___17308)){
args__7491__auto__.push((arguments[i__7485__auto___17309]));

var G__17310 = (i__7485__auto___17309 + (1));
i__7485__auto___17309 = G__17310;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17303){
var vec__17304 = p__17303;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17304,(0),null);
var G__17307 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$post,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17307) : cljs_http.client.request.call(null,G__17307));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq17301){
var G__17302 = cljs.core.first(seq17301);
var seq17301__$1 = cljs.core.next(seq17301);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__17302,seq17301__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__7491__auto__ = [];
var len__7484__auto___17318 = arguments.length;
var i__7485__auto___17319 = (0);
while(true){
if((i__7485__auto___17319 < len__7484__auto___17318)){
args__7491__auto__.push((arguments[i__7485__auto___17319]));

var G__17320 = (i__7485__auto___17319 + (1));
i__7485__auto___17319 = G__17320;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__17313){
var vec__17314 = p__17313;
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17314,(0),null);
var G__17317 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([req,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,cljs.core.cst$kw$put,cljs.core.cst$kw$url,url], null)], 0));
return (cljs_http.client.request.cljs$core$IFn$_invoke$arity$1 ? cljs_http.client.request.cljs$core$IFn$_invoke$arity$1(G__17317) : cljs_http.client.request.call(null,G__17317));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq17311){
var G__17312 = cljs.core.first(seq17311);
var seq17311__$1 = cljs.core.next(seq17311);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__17312,seq17311__$1);
});

