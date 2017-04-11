// Compiled by ClojureScript 1.9.229 {}
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
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__12307_SHARP_,p2__12306_SHARP_){
var vec__12311 = clojure.string.split.call(null,p2__12306_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__12311,(0),null);
var v = cljs.core.nth.call(null,vec__12311,(1),null);
return cljs.core.assoc.call(null,p1__12307_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
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
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__12314_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__12314_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__12315){
var vec__12319 = p__12315;
var k = cljs.core.nth.call(null,vec__12319,(0),null);
var v = cljs.core.nth.call(null,vec__12319,(1),null);
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
return (function (p1__12322_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__12322_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__6397__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__6397__auto__){
var and__6397__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__6397__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__6397__auto____$1;
}
} else {
return and__6397__auto__;
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
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
return cljs.core.async.map.call(null,(function (p1__12323_SHARP_){
return cljs_http.client.decode_body.call(null,p1__12323_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12330 = arguments.length;
var i__7485__auto___12331 = (0);
while(true){
if((i__7485__auto___12331 < len__7484__auto___12330)){
args__7491__auto__.push((arguments[i__7485__auto___12331]));

var G__12332 = (i__7485__auto___12331 + (1));
i__7485__auto___12331 = G__12332;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__12326){
var vec__12327 = p__12326;
var default_headers = cljs.core.nth.call(null,vec__12327,(0),null);
return ((function (vec__12327,default_headers){
return (function (request){
var temp__4655__auto__ = (function (){var or__6409__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var default_headers__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__12327,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq12324){
var G__12325 = cljs.core.first.call(null,seq12324);
var seq12324__$1 = cljs.core.next.call(null,seq12324);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__12325,seq12324__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12339 = arguments.length;
var i__7485__auto___12340 = (0);
while(true){
if((i__7485__auto___12340 < len__7484__auto___12339)){
args__7491__auto__.push((arguments[i__7485__auto___12340]));

var G__12341 = (i__7485__auto___12340 + (1));
i__7485__auto___12340 = G__12341;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__12335){
var vec__12336 = p__12335;
var accept = cljs.core.nth.call(null,vec__12336,(0),null);
return ((function (vec__12336,accept){
return (function (request){
var temp__4655__auto__ = (function (){var or__6409__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var accept__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__12336,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq12333){
var G__12334 = cljs.core.first.call(null,seq12333);
var seq12333__$1 = cljs.core.next.call(null,seq12333);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__12334,seq12333__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12348 = arguments.length;
var i__7485__auto___12349 = (0);
while(true){
if((i__7485__auto___12349 < len__7484__auto___12348)){
args__7491__auto__.push((arguments[i__7485__auto___12349]));

var G__12350 = (i__7485__auto___12349 + (1));
i__7485__auto___12349 = G__12350;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__12344){
var vec__12345 = p__12344;
var content_type = cljs.core.nth.call(null,vec__12345,(0),null);
return ((function (vec__12345,content_type){
return (function (request){
var temp__4655__auto__ = (function (){var or__6409__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var content_type__$1 = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__12345,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq12342){
var G__12343 = cljs.core.first.call(null,seq12342);
var seq12342__$1 = cljs.core.next.call(null,seq12342);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__12343,seq12342__$1);
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
var map__12353 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__12353__$1 = ((((!((map__12353 == null)))?((((map__12353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12353):map__12353);
var encoding = cljs.core.get.call(null,map__12353__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__12353__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__12359 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__12359__$1 = ((((!((map__12359 == null)))?((((map__12359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12359):map__12359);
var decoding = cljs.core.get.call(null,map__12359__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__12359__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__12359,map__12359__$1,decoding,decoding_opts){
return (function (p1__12355_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__12355_SHARP_,decoding,decoding_opts);
});})(map__12359,map__12359__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__12359,map__12359__$1,decoding,decoding_opts,transit_decode){
return (function (p1__12356_SHARP_){
return cljs_http.client.decode_body.call(null,p1__12356_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__12359,map__12359__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4655__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var params = temp__4655__auto__;
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
return cljs.core.async.map.call(null,(function (p1__12361_SHARP_){
return cljs_http.client.decode_body.call(null,p1__12361_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__12365){
var map__12366 = p__12365;
var map__12366__$1 = ((((!((map__12366 == null)))?((((map__12366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12366):map__12366);
var req = map__12366__$1;
var query_params = cljs.core.get.call(null,map__12366__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__12371){
var map__12372 = p__12371;
var map__12372__$1 = ((((!((map__12372 == null)))?((((map__12372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12372):map__12372);
var request = map__12372__$1;
var form_params = cljs.core.get.call(null,map__12372__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__12372__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__12372__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__6397__auto__ = form_params;
if(cljs.core.truth_(and__6397__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6397__auto__;
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
var seq__12384_12394 = cljs.core.seq.call(null,params);
var chunk__12385_12395 = null;
var count__12386_12396 = (0);
var i__12387_12397 = (0);
while(true){
if((i__12387_12397 < count__12386_12396)){
var vec__12388_12398 = cljs.core._nth.call(null,chunk__12385_12395,i__12387_12397);
var k_12399 = cljs.core.nth.call(null,vec__12388_12398,(0),null);
var v_12400 = cljs.core.nth.call(null,vec__12388_12398,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_12400)){
form_data.append(cljs.core.name.call(null,k_12399),cljs.core.first.call(null,v_12400),cljs.core.second.call(null,v_12400));
} else {
form_data.append(cljs.core.name.call(null,k_12399),v_12400);
}

var G__12401 = seq__12384_12394;
var G__12402 = chunk__12385_12395;
var G__12403 = count__12386_12396;
var G__12404 = (i__12387_12397 + (1));
seq__12384_12394 = G__12401;
chunk__12385_12395 = G__12402;
count__12386_12396 = G__12403;
i__12387_12397 = G__12404;
continue;
} else {
var temp__4657__auto___12405 = cljs.core.seq.call(null,seq__12384_12394);
if(temp__4657__auto___12405){
var seq__12384_12406__$1 = temp__4657__auto___12405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12384_12406__$1)){
var c__7220__auto___12407 = cljs.core.chunk_first.call(null,seq__12384_12406__$1);
var G__12408 = cljs.core.chunk_rest.call(null,seq__12384_12406__$1);
var G__12409 = c__7220__auto___12407;
var G__12410 = cljs.core.count.call(null,c__7220__auto___12407);
var G__12411 = (0);
seq__12384_12394 = G__12408;
chunk__12385_12395 = G__12409;
count__12386_12396 = G__12410;
i__12387_12397 = G__12411;
continue;
} else {
var vec__12391_12412 = cljs.core.first.call(null,seq__12384_12406__$1);
var k_12413 = cljs.core.nth.call(null,vec__12391_12412,(0),null);
var v_12414 = cljs.core.nth.call(null,vec__12391_12412,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_12414)){
form_data.append(cljs.core.name.call(null,k_12413),cljs.core.first.call(null,v_12414),cljs.core.second.call(null,v_12414));
} else {
form_data.append(cljs.core.name.call(null,k_12413),v_12414);
}

var G__12415 = cljs.core.next.call(null,seq__12384_12406__$1);
var G__12416 = null;
var G__12417 = (0);
var G__12418 = (0);
seq__12384_12394 = G__12415;
chunk__12385_12395 = G__12416;
count__12386_12396 = G__12417;
i__12387_12397 = G__12418;
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
return (function (p__12422){
var map__12423 = p__12422;
var map__12423__$1 = ((((!((map__12423 == null)))?((((map__12423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12423):map__12423);
var request = map__12423__$1;
var multipart_params = cljs.core.get.call(null,map__12423__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__12423__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__6397__auto__ = multipart_params;
if(cljs.core.truth_(and__6397__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__6397__auto__;
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__12425_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__12425_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__12430){
var map__12431 = p__12430;
var map__12431__$1 = ((((!((map__12431 == null)))?((((map__12431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12431):map__12431);
var req = map__12431__$1;
var query_params = cljs.core.get.call(null,map__12431__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4655__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4655__auto__,map__12431,map__12431__$1,req,query_params){
return (function (p1__12426_SHARP_){
return cljs.core.merge.call(null,p1__12426_SHARP_,query_params);
});})(spec,temp__4655__auto__,map__12431,map__12431__$1,req,query_params))
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
var args__7491__auto__ = [];
var len__7484__auto___12439 = arguments.length;
var i__7485__auto___12440 = (0);
while(true){
if((i__7485__auto___12440 < len__7484__auto___12439)){
args__7491__auto__.push((arguments[i__7485__auto___12440]));

var G__12441 = (i__7485__auto___12440 + (1));
i__7485__auto___12440 = G__12441;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__12435){
var vec__12436 = p__12435;
var credentials = cljs.core.nth.call(null,vec__12436,(0),null);
return ((function (vec__12436,credentials){
return (function (req){
var credentials__$1 = (function (){var or__6409__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
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
;})(vec__12436,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq12433){
var G__12434 = cljs.core.first.call(null,seq12433);
var seq12433__$1 = cljs.core.next.call(null,seq12433);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__12434,seq12433__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4655__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4655__auto__)){
var oauth_token = temp__4655__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
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
var temp__4655__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4655__auto__)){
var custom_channel = temp__4655__auto__;
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
var args__7491__auto__ = [];
var len__7484__auto___12448 = arguments.length;
var i__7485__auto___12449 = (0);
while(true){
if((i__7485__auto___12449 < len__7484__auto___12448)){
args__7491__auto__.push((arguments[i__7485__auto___12449]));

var G__12450 = (i__7485__auto___12449 + (1));
i__7485__auto___12449 = G__12450;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12444){
var vec__12445 = p__12444;
var req = cljs.core.nth.call(null,vec__12445,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq12442){
var G__12443 = cljs.core.first.call(null,seq12442);
var seq12442__$1 = cljs.core.next.call(null,seq12442);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__12443,seq12442__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12457 = arguments.length;
var i__7485__auto___12458 = (0);
while(true){
if((i__7485__auto___12458 < len__7484__auto___12457)){
args__7491__auto__.push((arguments[i__7485__auto___12458]));

var G__12459 = (i__7485__auto___12458 + (1));
i__7485__auto___12458 = G__12459;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12453){
var vec__12454 = p__12453;
var req = cljs.core.nth.call(null,vec__12454,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq12451){
var G__12452 = cljs.core.first.call(null,seq12451);
var seq12451__$1 = cljs.core.next.call(null,seq12451);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__12452,seq12451__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12466 = arguments.length;
var i__7485__auto___12467 = (0);
while(true){
if((i__7485__auto___12467 < len__7484__auto___12466)){
args__7491__auto__.push((arguments[i__7485__auto___12467]));

var G__12468 = (i__7485__auto___12467 + (1));
i__7485__auto___12467 = G__12468;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12462){
var vec__12463 = p__12462;
var req = cljs.core.nth.call(null,vec__12463,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq12460){
var G__12461 = cljs.core.first.call(null,seq12460);
var seq12460__$1 = cljs.core.next.call(null,seq12460);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__12461,seq12460__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12475 = arguments.length;
var i__7485__auto___12476 = (0);
while(true){
if((i__7485__auto___12476 < len__7484__auto___12475)){
args__7491__auto__.push((arguments[i__7485__auto___12476]));

var G__12477 = (i__7485__auto___12476 + (1));
i__7485__auto___12476 = G__12477;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12471){
var vec__12472 = p__12471;
var req = cljs.core.nth.call(null,vec__12472,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq12469){
var G__12470 = cljs.core.first.call(null,seq12469);
var seq12469__$1 = cljs.core.next.call(null,seq12469);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__12470,seq12469__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12484 = arguments.length;
var i__7485__auto___12485 = (0);
while(true){
if((i__7485__auto___12485 < len__7484__auto___12484)){
args__7491__auto__.push((arguments[i__7485__auto___12485]));

var G__12486 = (i__7485__auto___12485 + (1));
i__7485__auto___12485 = G__12486;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12480){
var vec__12481 = p__12480;
var req = cljs.core.nth.call(null,vec__12481,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq12478){
var G__12479 = cljs.core.first.call(null,seq12478);
var seq12478__$1 = cljs.core.next.call(null,seq12478);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__12479,seq12478__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12493 = arguments.length;
var i__7485__auto___12494 = (0);
while(true){
if((i__7485__auto___12494 < len__7484__auto___12493)){
args__7491__auto__.push((arguments[i__7485__auto___12494]));

var G__12495 = (i__7485__auto___12494 + (1));
i__7485__auto___12494 = G__12495;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12489){
var vec__12490 = p__12489;
var req = cljs.core.nth.call(null,vec__12490,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq12487){
var G__12488 = cljs.core.first.call(null,seq12487);
var seq12487__$1 = cljs.core.next.call(null,seq12487);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__12488,seq12487__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12502 = arguments.length;
var i__7485__auto___12503 = (0);
while(true){
if((i__7485__auto___12503 < len__7484__auto___12502)){
args__7491__auto__.push((arguments[i__7485__auto___12503]));

var G__12504 = (i__7485__auto___12503 + (1));
i__7485__auto___12503 = G__12504;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12498){
var vec__12499 = p__12498;
var req = cljs.core.nth.call(null,vec__12499,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq12496){
var G__12497 = cljs.core.first.call(null,seq12496);
var seq12496__$1 = cljs.core.next.call(null,seq12496);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__12497,seq12496__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12511 = arguments.length;
var i__7485__auto___12512 = (0);
while(true){
if((i__7485__auto___12512 < len__7484__auto___12511)){
args__7491__auto__.push((arguments[i__7485__auto___12512]));

var G__12513 = (i__7485__auto___12512 + (1));
i__7485__auto___12512 = G__12513;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12507){
var vec__12508 = p__12507;
var req = cljs.core.nth.call(null,vec__12508,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq12505){
var G__12506 = cljs.core.first.call(null,seq12505);
var seq12505__$1 = cljs.core.next.call(null,seq12505);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__12506,seq12505__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12520 = arguments.length;
var i__7485__auto___12521 = (0);
while(true){
if((i__7485__auto___12521 < len__7484__auto___12520)){
args__7491__auto__.push((arguments[i__7485__auto___12521]));

var G__12522 = (i__7485__auto___12521 + (1));
i__7485__auto___12521 = G__12522;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__12516){
var vec__12517 = p__12516;
var req = cljs.core.nth.call(null,vec__12517,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq12514){
var G__12515 = cljs.core.first.call(null,seq12514);
var seq12514__$1 = cljs.core.next.call(null,seq12514);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__12515,seq12514__$1);
});


//# sourceMappingURL=client.js.map