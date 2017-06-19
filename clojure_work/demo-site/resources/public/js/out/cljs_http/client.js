// Compiled by ClojureScript 1.9.518 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__28737__auto__ = v;
if(cljs.core.truth_(and__28737__auto__)){
return (v > (0));
} else {
return and__28737__auto__;
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
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__62084_SHARP_,p2__62083_SHARP_){
var vec__62088 = clojure.string.split.call(null,p2__62083_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__62088,(0),null);
var v = cljs.core.nth.call(null,vec__62088,(1),null);
return cljs.core.assoc.call(null,p1__62084_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("="),cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__62091_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__62091_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__62092){
var vec__62096 = p__62092;
var k = cljs.core.nth.call(null,vec__62096,(0),null);
var v = cljs.core.nth.call(null,vec__62096,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__62099_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__62099_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__28737__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__28737__auto__){
var and__28737__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__28737__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("(?i)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__28737__auto____$1;
}
} else {
return and__28737__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
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
var temp__6736__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6736__auto__)){
var params = temp__6736__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__62100_SHARP_){
return cljs_http.client.decode_body.call(null,p1__62100_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__29977__auto__ = [];
var len__29970__auto___62107 = arguments.length;
var i__29971__auto___62108 = (0);
while(true){
if((i__29971__auto___62108 < len__29970__auto___62107)){
args__29977__auto__.push((arguments[i__29971__auto___62108]));

var G__62109 = (i__29971__auto___62108 + (1));
i__29971__auto___62108 = G__62109;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__62103){
var vec__62104 = p__62103;
var default_headers = cljs.core.nth.call(null,vec__62104,(0),null);
return ((function (vec__62104,default_headers){
return (function (request){
var temp__6736__auto__ = (function (){var or__28749__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__6736__auto__)){
var default_headers__$1 = temp__6736__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__62104,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq62101){
var G__62102 = cljs.core.first.call(null,seq62101);
var seq62101__$1 = cljs.core.next.call(null,seq62101);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__62102,seq62101__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__29977__auto__ = [];
var len__29970__auto___62116 = arguments.length;
var i__29971__auto___62117 = (0);
while(true){
if((i__29971__auto___62117 < len__29970__auto___62116)){
args__29977__auto__.push((arguments[i__29971__auto___62117]));

var G__62118 = (i__29971__auto___62117 + (1));
i__29971__auto___62117 = G__62118;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__62112){
var vec__62113 = p__62112;
var accept = cljs.core.nth.call(null,vec__62113,(0),null);
return ((function (vec__62113,accept){
return (function (request){
var temp__6736__auto__ = (function (){var or__28749__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__6736__auto__)){
var accept__$1 = temp__6736__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__62113,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq62110){
var G__62111 = cljs.core.first.call(null,seq62110);
var seq62110__$1 = cljs.core.next.call(null,seq62110);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__62111,seq62110__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__29977__auto__ = [];
var len__29970__auto___62125 = arguments.length;
var i__29971__auto___62126 = (0);
while(true){
if((i__29971__auto___62126 < len__29970__auto___62125)){
args__29977__auto__.push((arguments[i__29971__auto___62126]));

var G__62127 = (i__29971__auto___62126 + (1));
i__29971__auto___62126 = G__62127;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__62121){
var vec__62122 = p__62121;
var content_type = cljs.core.nth.call(null,vec__62122,(0),null);
return ((function (vec__62122,content_type){
return (function (request){
var temp__6736__auto__ = (function (){var or__28749__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__6736__auto__)){
var content_type__$1 = temp__6736__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__62122,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq62119){
var G__62120 = cljs.core.first.call(null,seq62119);
var seq62119__$1 = cljs.core.next.call(null,seq62119);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__62120,seq62119__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
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
var temp__6736__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6736__auto__)){
var params = temp__6736__auto__;
var map__62130 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__62130__$1 = ((((!((map__62130 == null)))?((((map__62130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62130.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62130):map__62130);
var encoding = cljs.core.get.call(null,map__62130__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__62130__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__62136 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__62136__$1 = ((((!((map__62136 == null)))?((((map__62136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62136.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62136):map__62136);
var decoding = cljs.core.get.call(null,map__62136__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__62136__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__62136,map__62136__$1,decoding,decoding_opts){
return (function (p1__62132_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__62132_SHARP_,decoding,decoding_opts);
});})(map__62136,map__62136__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__62136,map__62136__$1,decoding,decoding_opts,transit_decode){
return (function (p1__62133_SHARP_){
return cljs_http.client.decode_body.call(null,p1__62133_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__62136,map__62136__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__6736__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6736__auto__)){
var params = temp__6736__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__62138_SHARP_){
return cljs_http.client.decode_body.call(null,p1__62138_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__62142){
var map__62143 = p__62142;
var map__62143__$1 = ((((!((map__62143 == null)))?((((map__62143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62143.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62143):map__62143);
var req = map__62143__$1;
var query_params = cljs.core.get.call(null,map__62143__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__62148){
var map__62149 = p__62148;
var map__62149__$1 = ((((!((map__62149 == null)))?((((map__62149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62149.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62149):map__62149);
var request = map__62149__$1;
var form_params = cljs.core.get.call(null,map__62149__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__62149__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__62149__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__28737__auto__ = form_params;
if(cljs.core.truth_(and__28737__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__28737__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__62161_62171 = cljs.core.seq.call(null,params);
var chunk__62162_62172 = null;
var count__62163_62173 = (0);
var i__62164_62174 = (0);
while(true){
if((i__62164_62174 < count__62163_62173)){
var vec__62165_62175 = cljs.core._nth.call(null,chunk__62162_62172,i__62164_62174);
var k_62176 = cljs.core.nth.call(null,vec__62165_62175,(0),null);
var v_62177 = cljs.core.nth.call(null,vec__62165_62175,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_62177)){
form_data.append(cljs.core.name.call(null,k_62176),cljs.core.first.call(null,v_62177),cljs.core.second.call(null,v_62177));
} else {
form_data.append(cljs.core.name.call(null,k_62176),v_62177);
}

var G__62178 = seq__62161_62171;
var G__62179 = chunk__62162_62172;
var G__62180 = count__62163_62173;
var G__62181 = (i__62164_62174 + (1));
seq__62161_62171 = G__62178;
chunk__62162_62172 = G__62179;
count__62163_62173 = G__62180;
i__62164_62174 = G__62181;
continue;
} else {
var temp__6738__auto___62182 = cljs.core.seq.call(null,seq__62161_62171);
if(temp__6738__auto___62182){
var seq__62161_62183__$1 = temp__6738__auto___62182;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62161_62183__$1)){
var c__29660__auto___62184 = cljs.core.chunk_first.call(null,seq__62161_62183__$1);
var G__62185 = cljs.core.chunk_rest.call(null,seq__62161_62183__$1);
var G__62186 = c__29660__auto___62184;
var G__62187 = cljs.core.count.call(null,c__29660__auto___62184);
var G__62188 = (0);
seq__62161_62171 = G__62185;
chunk__62162_62172 = G__62186;
count__62163_62173 = G__62187;
i__62164_62174 = G__62188;
continue;
} else {
var vec__62168_62189 = cljs.core.first.call(null,seq__62161_62183__$1);
var k_62190 = cljs.core.nth.call(null,vec__62168_62189,(0),null);
var v_62191 = cljs.core.nth.call(null,vec__62168_62189,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_62191)){
form_data.append(cljs.core.name.call(null,k_62190),cljs.core.first.call(null,v_62191),cljs.core.second.call(null,v_62191));
} else {
form_data.append(cljs.core.name.call(null,k_62190),v_62191);
}

var G__62192 = cljs.core.next.call(null,seq__62161_62183__$1);
var G__62193 = null;
var G__62194 = (0);
var G__62195 = (0);
seq__62161_62171 = G__62192;
chunk__62162_62172 = G__62193;
count__62163_62173 = G__62194;
i__62164_62174 = G__62195;
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
return (function (p__62199){
var map__62200 = p__62199;
var map__62200__$1 = ((((!((map__62200 == null)))?((((map__62200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62200):map__62200);
var request = map__62200__$1;
var multipart_params = cljs.core.get.call(null,map__62200__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__62200__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__28737__auto__ = multipart_params;
if(cljs.core.truth_(and__28737__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__28737__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__6736__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__6736__auto__)){
var m = temp__6736__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__62202_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__62202_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__62207){
var map__62208 = p__62207;
var map__62208__$1 = ((((!((map__62208 == null)))?((((map__62208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62208.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62208):map__62208);
var req = map__62208__$1;
var query_params = cljs.core.get.call(null,map__62208__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__6736__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__6736__auto__)){
var spec = temp__6736__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__6736__auto__,map__62208,map__62208__$1,req,query_params){
return (function (p1__62203_SHARP_){
return cljs.core.merge.call(null,p1__62203_SHARP_,query_params);
});})(spec,temp__6736__auto__,map__62208,map__62208__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__29977__auto__ = [];
var len__29970__auto___62216 = arguments.length;
var i__29971__auto___62217 = (0);
while(true){
if((i__29971__auto___62217 < len__29970__auto___62216)){
args__29977__auto__.push((arguments[i__29971__auto___62217]));

var G__62218 = (i__29971__auto___62217 + (1));
i__29971__auto___62217 = G__62218;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__62212){
var vec__62213 = p__62212;
var credentials = cljs.core.nth.call(null,vec__62213,(0),null);
return ((function (vec__62213,credentials){
return (function (req){
var credentials__$1 = (function (){var or__28749__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__62213,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq62210){
var G__62211 = cljs.core.first.call(null,seq62210);
var seq62210__$1 = cljs.core.next.call(null,seq62210);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__62211,seq62210__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__6736__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__6736__auto__)){
var oauth_token = temp__6736__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bearer "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__6736__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__6736__auto__)){
var custom_channel = temp__6736__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
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
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__29977__auto__ = [];
var len__29970__auto___62225 = arguments.length;
var i__29971__auto___62226 = (0);
while(true){
if((i__29971__auto___62226 < len__29970__auto___62225)){
args__29977__auto__.push((arguments[i__29971__auto___62226]));

var G__62227 = (i__29971__auto___62226 + (1));
i__29971__auto___62226 = G__62227;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__62221){
var vec__62222 = p__62221;
var req = cljs.core.nth.call(null,vec__62222,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq62219){
var G__62220 = cljs.core.first.call(null,seq62219);
var seq62219__$1 = cljs.core.next.call(null,seq62219);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__62220,seq62219__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__29977__auto__ = [];
var len__29970__auto___62234 = arguments.length;
var i__29971__auto___62235 = (0);
while(true){
if((i__29971__auto___62235 < len__29970__auto___62234)){
args__29977__auto__.push((arguments[i__29971__auto___62235]));

var G__62236 = (i__29971__auto___62235 + (1));
i__29971__auto___62235 = G__62236;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__62230){
var vec__62231 = p__62230;
var req = cljs.core.nth.call(null,vec__62231,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq62228){
var G__62229 = cljs.core.first.call(null,seq62228);
var seq62228__$1 = cljs.core.next.call(null,seq62228);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__62229,seq62228__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__29977__auto__ = [];
var len__29970__auto___62243 = arguments.length;
var i__29971__auto___62244 = (0);
while(true){
if((i__29971__auto___62244 < len__29970__auto___62243)){
args__29977__auto__.push((arguments[i__29971__auto___62244]));

var G__62245 = (i__29971__auto___62244 + (1));
i__29971__auto___62244 = G__62245;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__62239){
var vec__62240 = p__62239;
var req = cljs.core.nth.call(null,vec__62240,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq62237){
var G__62238 = cljs.core.first.call(null,seq62237);
var seq62237__$1 = cljs.core.next.call(null,seq62237);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__62238,seq62237__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__29977__auto__ = [];
var len__29970__auto___62252 = arguments.length;
var i__29971__auto___62253 = (0);
while(true){
if((i__29971__auto___62253 < len__29970__auto___62252)){
args__29977__auto__.push((arguments[i__29971__auto___62253]));

var G__62254 = (i__29971__auto___62253 + (1));
i__29971__auto___62253 = G__62254;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__62248){
var vec__62249 = p__62248;
var req = cljs.core.nth.call(null,vec__62249,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq62246){
var G__62247 = cljs.core.first.call(null,seq62246);
var seq62246__$1 = cljs.core.next.call(null,seq62246);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__62247,seq62246__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__29977__auto__ = [];
var len__29970__auto___62261 = arguments.length;
var i__29971__auto___62262 = (0);
while(true){
if((i__29971__auto___62262 < len__29970__auto___62261)){
args__29977__auto__.push((arguments[i__29971__auto___62262]));

var G__62263 = (i__29971__auto___62262 + (1));
i__29971__auto___62262 = G__62263;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__62257){
var vec__62258 = p__62257;
var req = cljs.core.nth.call(null,vec__62258,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq62255){
var G__62256 = cljs.core.first.call(null,seq62255);
var seq62255__$1 = cljs.core.next.call(null,seq62255);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__62256,seq62255__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__29977__auto__ = [];
var len__29970__auto___62270 = arguments.length;
var i__29971__auto___62271 = (0);
while(true){
if((i__29971__auto___62271 < len__29970__auto___62270)){
args__29977__auto__.push((arguments[i__29971__auto___62271]));

var G__62272 = (i__29971__auto___62271 + (1));
i__29971__auto___62271 = G__62272;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__62266){
var vec__62267 = p__62266;
var req = cljs.core.nth.call(null,vec__62267,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq62264){
var G__62265 = cljs.core.first.call(null,seq62264);
var seq62264__$1 = cljs.core.next.call(null,seq62264);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__62265,seq62264__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__29977__auto__ = [];
var len__29970__auto___62279 = arguments.length;
var i__29971__auto___62280 = (0);
while(true){
if((i__29971__auto___62280 < len__29970__auto___62279)){
args__29977__auto__.push((arguments[i__29971__auto___62280]));

var G__62281 = (i__29971__auto___62280 + (1));
i__29971__auto___62280 = G__62281;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__62275){
var vec__62276 = p__62275;
var req = cljs.core.nth.call(null,vec__62276,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq62273){
var G__62274 = cljs.core.first.call(null,seq62273);
var seq62273__$1 = cljs.core.next.call(null,seq62273);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__62274,seq62273__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__29977__auto__ = [];
var len__29970__auto___62288 = arguments.length;
var i__29971__auto___62289 = (0);
while(true){
if((i__29971__auto___62289 < len__29970__auto___62288)){
args__29977__auto__.push((arguments[i__29971__auto___62289]));

var G__62290 = (i__29971__auto___62289 + (1));
i__29971__auto___62289 = G__62290;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__62284){
var vec__62285 = p__62284;
var req = cljs.core.nth.call(null,vec__62285,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq62282){
var G__62283 = cljs.core.first.call(null,seq62282);
var seq62282__$1 = cljs.core.next.call(null,seq62282);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__62283,seq62282__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__29977__auto__ = [];
var len__29970__auto___62297 = arguments.length;
var i__29971__auto___62298 = (0);
while(true){
if((i__29971__auto___62298 < len__29970__auto___62297)){
args__29977__auto__.push((arguments[i__29971__auto___62298]));

var G__62299 = (i__29971__auto___62298 + (1));
i__29971__auto___62298 = G__62299;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__62293){
var vec__62294 = p__62293;
var req = cljs.core.nth.call(null,vec__62294,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq62291){
var G__62292 = cljs.core.first.call(null,seq62291);
var seq62291__$1 = cljs.core.next.call(null,seq62291);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__62292,seq62291__$1);
});


//# sourceMappingURL=client.js.map