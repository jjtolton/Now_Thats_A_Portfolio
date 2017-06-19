// Compiled by ClojureScript 1.9.518 {}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__29467__auto__ = (((obj == null))?null:obj);
var m__29468__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,obj);
} else {
var m__29468__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__54699 = millis;
if((G__54699 == null)){
return null;
} else {
return goog.date.UtcDateTime.fromTimestamp.call(null,G__54699);
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first.call(null,(function (){var iter__29611__auto__ = (function cljs_time$coerce$from_string_$_iter__54708(s__54709){
return (new cljs.core.LazySeq(null,(function (){
var s__54709__$1 = s__54709;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__54709__$1);
if(temp__6738__auto__){
var s__54709__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__54709__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__54709__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__54711 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__54710 = (0);
while(true){
if((i__54710 < size__29610__auto__)){
var f = cljs.core._nth.call(null,c__29609__auto__,i__54710);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e54714){if((e54714 instanceof Error)){
var _ = e54714;
return null;
} else {
throw e54714;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__54711,d);

var G__54716 = (i__54710 + (1));
i__54710 = G__54716;
continue;
} else {
var G__54717 = (i__54710 + (1));
i__54710 = G__54717;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54711),cljs_time$coerce$from_string_$_iter__54708.call(null,cljs.core.chunk_rest.call(null,s__54709__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__54711),null);
}
} else {
var f = cljs.core.first.call(null,s__54709__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e54715){if((e54715 instanceof Error)){
var _ = e54715;
return null;
} else {
throw e54715;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$coerce$from_string_$_iter__54708.call(null,cljs.core.rest.call(null,s__54709__$2)));
} else {
var G__54718 = cljs.core.rest.call(null,s__54709__$2);
s__54709__$1 = G__54718;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29611__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__54720 = date;
var G__54720__$1 = (((G__54720 == null))?null:G__54720.getTime());
if((G__54720__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long.call(null,G__54720__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__54722 = obj;
var G__54722__$1 = (((G__54722 == null))?null:cljs_time.coerce.to_date_time.call(null,G__54722));
if((G__54722__$1 == null)){
return null;
} else {
return G__54722__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var G__54724 = obj;
var G__54724__$1 = (((G__54724 == null))?null:cljs_time.coerce.to_long.call(null,G__54724));
if((G__54724__$1 == null)){
return null;
} else {
return (G__54724__$1 / (1000));
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__54726 = obj;
var G__54726__$1 = (((G__54726 == null))?null:cljs_time.coerce.to_date_time.call(null,G__54726));
var G__54726__$2 = (((G__54726__$1 == null))?null:G__54726__$1.getTime());
if((G__54726__$2 == null)){
return null;
} else {
return (new Date(G__54726__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__54728 = obj;
var G__54728__$1 = (((G__54728 == null))?null:cljs_time.coerce.to_date_time.call(null,G__54728));
if((G__54728__$1 == null)){
return null;
} else {
return cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__54728__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
var temp__6736__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__6736__auto__)){
var dt = temp__6736__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__6736__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__6736__auto__)){
var dt = temp__6736__auto__;
var G__54730 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__54730.setHours(dt.getHours());

G__54730.setMinutes(dt.getMinutes());

G__54730.setSeconds(dt.getSeconds());

G__54730.setMilliseconds(dt.getMilliseconds());

return G__54730;
} else {
return null;
}
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date.call(null,date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone.call(null,local_date__$1);
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone.call(null,local_date_time__$1);
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long.call(null,long$);
}));

(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string.call(null,string);
}));

//# sourceMappingURL=coerce.js.map