// Compiled by ClojureScript 1.9.518 {}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__29611__auto__ = (function re_com$util$fmap_$_iter__31263(s__31264){
return (new cljs.core.LazySeq(null,(function (){
var s__31264__$1 = s__31264;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__31264__$1);
if(temp__6738__auto__){
var s__31264__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__31264__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__31264__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__31266 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__31265 = (0);
while(true){
if((i__31265 < size__29610__auto__)){
var vec__31273 = cljs.core._nth.call(null,c__29609__auto__,i__31265);
var k = cljs.core.nth.call(null,vec__31273,(0),null);
var val = cljs.core.nth.call(null,vec__31273,(1),null);
cljs.core.chunk_append.call(null,b__31266,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__31279 = (i__31265 + (1));
i__31265 = G__31279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31266),re_com$util$fmap_$_iter__31263.call(null,cljs.core.chunk_rest.call(null,s__31264__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31266),null);
}
} else {
var vec__31276 = cljs.core.first.call(null,s__31264__$2);
var k = cljs.core.nth.call(null,vec__31276,(0),null);
var val = cljs.core.nth.call(null,vec__31276,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__31263.call(null,cljs.core.rest.call(null,s__31264__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29611__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__29977__auto__ = [];
var len__29970__auto___31281 = arguments.length;
var i__29971__auto___31282 = (0);
while(true){
if((i__29971__auto___31282 < len__29970__auto___31281)){
args__29977__auto__.push((arguments[i__29971__auto___31282]));

var G__31283 = (i__29971__auto___31282 + (1));
i__29971__auto___31282 = G__31283;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq31280){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31280));
});

re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count.call(null,s) < len)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join(''),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__29977__auto__ = [];
var len__29970__auto___31288 = arguments.length;
var i__29971__auto___31289 = (0);
while(true){
if((i__29971__auto___31289 < len__29970__auto___31288)){
args__29977__auto__.push((arguments[i__29971__auto___31289]));

var G__31290 = (i__29971__auto___31289 + (1));
i__29971__auto___31289 = G__31290;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

re_com.util.px.cljs$lang$applyTo = (function (seq31286){
var G__31287 = cljs.core.first.call(null,seq31286);
var seq31286__$1 = cljs.core.next.call(null,seq31286);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__31287,seq31286__$1);
});

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__29977__auto__ = [];
var len__29970__auto___31297 = arguments.length;
var i__29971__auto___31298 = (0);
while(true){
if((i__29971__auto___31298 < len__29970__auto___31297)){
args__29977__auto__.push((arguments[i__29971__auto___31298]));

var G__31299 = (i__29971__auto___31298 + (1));
i__29971__auto___31298 = G__31299;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((2) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29978__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__31294){
var map__31295 = p__31294;
var map__31295__$1 = ((((!((map__31295 == null)))?((((map__31295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31295):map__31295);
var id_fn = cljs.core.get.call(null,map__31295__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__31295,map__31295__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__31295,map__31295__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq31291){
var G__31292 = cljs.core.first.call(null,seq31291);
var seq31291__$1 = cljs.core.next.call(null,seq31291);
var G__31293 = cljs.core.first.call(null,seq31291__$1);
var seq31291__$2 = cljs.core.next.call(null,seq31291__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__31292,G__31293,seq31291__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__29977__auto__ = [];
var len__29970__auto___31307 = arguments.length;
var i__29971__auto___31308 = (0);
while(true){
if((i__29971__auto___31308 < len__29970__auto___31307)){
args__29977__auto__.push((arguments[i__29971__auto___31308]));

var G__31309 = (i__29971__auto___31308 + (1));
i__29971__auto___31308 = G__31309;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((2) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29978__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__31304){
var map__31305 = p__31304;
var map__31305__$1 = ((((!((map__31305 == null)))?((((map__31305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31305):map__31305);
var id_fn = cljs.core.get.call(null,map__31305__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__31305,map__31305__$1,id_fn){
return (function (p1__31300_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__31300_SHARP_),id);
});})(map__31305,map__31305__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq31301){
var G__31302 = cljs.core.first.call(null,seq31301);
var seq31301__$1 = cljs.core.next.call(null,seq31301);
var G__31303 = cljs.core.first.call(null,seq31301__$1);
var seq31301__$2 = cljs.core.next.call(null,seq31301__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__31302,G__31303,seq31301__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__29977__auto__ = [];
var len__29970__auto___31317 = arguments.length;
var i__29971__auto___31318 = (0);
while(true){
if((i__29971__auto___31318 < len__29970__auto___31317)){
args__29977__auto__.push((arguments[i__29971__auto___31318]));

var G__31319 = (i__29971__auto___31318 + (1));
i__29971__auto___31318 = G__31319;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((2) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29978__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__31314){
var map__31315 = p__31314;
var map__31315__$1 = ((((!((map__31315 == null)))?((((map__31315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31315.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31315):map__31315);
var id_fn = cljs.core.get.call(null,map__31315__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__31315,map__31315__$1,id_fn){
return (function (p1__31310_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__31310_SHARP_),id);
});})(map__31315,map__31315__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq31311){
var G__31312 = cljs.core.first.call(null,seq31311);
var seq31311__$1 = cljs.core.next.call(null,seq31311);
var G__31313 = cljs.core.first.call(null,seq31311__$1);
var seq31311__$2 = cljs.core.next.call(null,seq31311__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__31312,G__31313,seq31311__$2);
});

/**
 * (for [[index item first? last?] (enumerate coll)] ...)  
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count.call(null,coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});})(c))
;
return cljs.core.map_indexed.call(null,f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY")){
var G__31320 = current_node.parentNode;
var G__31321 = (sum_scroll_left + current_node.scrollLeft);
var G__31322 = (sum_scroll_top + current_node.scrollTop);
current_node = G__31320;
sum_scroll_left = G__31321;
sum_scroll_top = G__31322;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Answer a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date.getYear(),local_date.getMonth(),local_date.getDate(),(0),(0),(0),(0)));
});

//# sourceMappingURL=util.js.map