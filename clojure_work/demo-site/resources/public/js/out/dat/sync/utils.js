// Compiled by ClojureScript 1.9.518 {}
goog.provide('dat.sync.utils');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('cljs.pprint');
goog.require('taoensso.timbre');
dat.sync.utils.deep_merge = (function dat$sync$utils$deep_merge(var_args){
var args57068 = [];
var len__29970__auto___57071 = arguments.length;
var i__29971__auto___57072 = (0);
while(true){
if((i__29971__auto___57072 < len__29970__auto___57071)){
args57068.push((arguments[i__29971__auto___57072]));

var G__57073 = (i__29971__auto___57072 + (1));
i__29971__auto___57072 = G__57073;
continue;
} else {
}
break;
}

var G__57070 = args57068.length;
switch (G__57070) {
case 1:
return dat.sync.utils.deep_merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dat.sync.utils.deep_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57068.length)].join('')));

}
});

dat.sync.utils.deep_merge.cljs$core$IFn$_invoke$arity$1 = (function (map1){
return map1;
});

dat.sync.utils.deep_merge.cljs$core$IFn$_invoke$arity$2 = (function (map1,map2){
return cljs.core.merge_with.call(null,dat.sync.utils.inner_merge,map1,map2);
});

dat.sync.utils.deep_merge.cljs$lang$maxFixedArity = 2;

dat.sync.utils.inner_merge_dispatch_signature = (function dat$sync$utils$inner_merge_dispatch_signature(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seq?","seq?",702501050),cljs.core.seq_QMARK_.call(null,x),new cljs.core.Keyword(null,"map?","map?",873867235),cljs.core.map_QMARK_.call(null,x)], null);
});
dat.sync.utils.merge_zip = (function dat$sync$utils$merge_zip(xs,ys){
return cljs.core.mapv.call(null,dat.sync.utils.deep_merge,xs,ys);
});
dat.sync.utils.default_inner_merge_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"coll-merge","coll-merge",1132683306),cljs.core.concat], null);
dat.sync.utils.inner_merge = (function dat$sync$utils$inner_merge(var_args){
var args57075 = [];
var len__29970__auto___57104 = arguments.length;
var i__29971__auto___57105 = (0);
while(true){
if((i__29971__auto___57105 < len__29970__auto___57104)){
args57075.push((arguments[i__29971__auto___57105]));

var G__57106 = (i__29971__auto___57105 + (1));
i__29971__auto___57105 = G__57106;
continue;
} else {
}
break;
}

var G__57077 = args57075.length;
switch (G__57077) {
case 2:
return dat.sync.utils.inner_merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.sync.utils.inner_merge.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57075.length)].join('')));

}
});

dat.sync.utils.inner_merge.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return dat.sync.utils.inner_merge.call(null,dat.sync.utils.default_inner_merge_opts,x,y);
});

dat.sync.utils.inner_merge.cljs$core$IFn$_invoke$arity$3 = (function (p__57078,x,y){
var map__57079 = p__57078;
var map__57079__$1 = ((((!((map__57079 == null)))?((((map__57079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__57079.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57079):map__57079);
var opts = map__57079__$1;
var coll_merge = cljs.core.get.call(null,map__57079__$1,new cljs.core.Keyword(null,"coll-merge","coll-merge",1132683306));
var ocr_57081 = cljs.core.mapv.call(null,dat.sync.utils.inner_merge_dispatch_signature,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
try{if((cljs.core.vector_QMARK_.call(null,ocr_57081)) && ((cljs.core.count.call(null,ocr_57081) === 2))){
try{var ocr_57081_0__57083 = cljs.core.nth.call(null,ocr_57081,(0));
if(((!((ocr_57081_0__57083 == null)))?((((ocr_57081_0__57083.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === ocr_57081_0__57083.cljs$core$ILookup$)))?true:(((!ocr_57081_0__57083.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,ocr_57081_0__57083):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,ocr_57081_0__57083))){
try{var ocr_57081_1__57084 = cljs.core.nth.call(null,ocr_57081,(1));
if(((!((ocr_57081_1__57084 == null)))?((((ocr_57081_1__57084.cljs$lang$protocol_mask$partition0$ & (256))) || ((cljs.core.PROTOCOL_SENTINEL === ocr_57081_1__57084.cljs$core$ILookup$)))?true:(((!ocr_57081_1__57084.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,ocr_57081_1__57084):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,ocr_57081_1__57084))){
try{var ocr_57081_1__57084_map_QMARK___57093 = cljs.core.get.call(null,ocr_57081_1__57084,new cljs.core.Keyword(null,"map?","map?",873867235),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_57081_1__57084_map_QMARK___57093 === true)){
try{var ocr_57081_0__57083_map_QMARK___57088 = cljs.core.get.call(null,ocr_57081_0__57083,new cljs.core.Keyword(null,"map?","map?",873867235),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_57081_0__57083_map_QMARK___57088 === true)){
return dat.sync.utils.deep_merge.call(null,x,y);
} else {
throw cljs.core.match.backtrack;

}
}catch (e57103){if((e57103 instanceof Error)){
var e__37299__auto__ = e57103;
if((e__37299__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto__;
}
} else {
throw e57103;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e57100){if((e57100 instanceof Error)){
var e__37299__auto__ = e57100;
if((e__37299__auto__ === cljs.core.match.backtrack)){
try{var ocr_57081_1__57084_col_QMARK___57094 = cljs.core.get.call(null,ocr_57081_1__57084,new cljs.core.Keyword(null,"col?","col?",370873178),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_57081_1__57084_col_QMARK___57094 === true)){
try{var ocr_57081_0__57083_col_QMARK___57089 = cljs.core.get.call(null,ocr_57081_0__57083,new cljs.core.Keyword(null,"col?","col?",370873178),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));
if((ocr_57081_0__57083_col_QMARK___57089 === true)){
return coll_merge.call(null,x,y);
} else {
throw cljs.core.match.backtrack;

}
}catch (e57102){if((e57102 instanceof Error)){
var e__37299__auto____$1 = e57102;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$1;
}
} else {
throw e57102;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e57101){if((e57101 instanceof Error)){
var e__37299__auto____$1 = e57101;
if((e__37299__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto____$1;
}
} else {
throw e57101;

}
}} else {
throw e__37299__auto__;
}
} else {
throw e57100;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e57098){if((e57098 instanceof Error)){
var e__37299__auto__ = e57098;
if((e__37299__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto__;
}
} else {
throw e57098;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e57096){if((e57096 instanceof Error)){
var e__37299__auto__ = e57096;
if((e__37299__auto__ === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__37299__auto__;
}
} else {
throw e57096;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e57095){if((e57095 instanceof Error)){
var e__37299__auto__ = e57095;
if((e__37299__auto__ === cljs.core.match.backtrack)){
return y;
} else {
throw e__37299__auto__;
}
} else {
throw e57095;

}
}});

dat.sync.utils.inner_merge.cljs$lang$maxFixedArity = 3;

dat.sync.utils.log = (function dat$sync$utils$log(var_args){
var args__29977__auto__ = [];
var len__29970__auto___57109 = arguments.length;
var i__29971__auto___57110 = (0);
while(true){
if((i__29971__auto___57110 < len__29970__auto___57109)){
args__29977__auto__.push((arguments[i__29971__auto___57110]));

var G__57111 = (i__29971__auto___57110 + (1));
i__29971__auto___57110 = G__57111;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return dat.sync.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

dat.sync.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,console.log,args);
});

dat.sync.utils.log.cljs$lang$maxFixedArity = (0);

dat.sync.utils.log.cljs$lang$applyTo = (function (seq57108){
return dat.sync.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57108));
});

dat.sync.utils.tr = (function dat$sync$utils$tr(var_args){
var args57112 = [];
var len__29970__auto___57117 = arguments.length;
var i__29971__auto___57118 = (0);
while(true){
if((i__29971__auto___57118 < len__29970__auto___57117)){
args57112.push((arguments[i__29971__auto___57118]));

var G__57119 = (i__29971__auto___57118 + (1));
i__29971__auto___57118 = G__57119;
continue;
} else {
}
break;
}

var G__57114 = args57112.length;
switch (G__57114) {
case 2:
return dat.sync.utils.tr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dat.sync.utils.tr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args57112.length)].join('')));

}
});

dat.sync.utils.tr.cljs$core$IFn$_invoke$arity$2 = (function (message,x){
dat.sync.utils.log.call(null,message,(function (){var sb__29841__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_57115_57121 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_57116_57122 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_57115_57121,_STAR_print_fn_STAR_57116_57122,sb__29841__auto__){
return (function (x__29842__auto__){
return sb__29841__auto__.append(x__29842__auto__);
});})(_STAR_print_newline_STAR_57115_57121,_STAR_print_fn_STAR_57116_57122,sb__29841__auto__))
;

try{cljs.pprint.pprint.call(null,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_57116_57122;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_57115_57121;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__29841__auto__)].join('');
})());

return x;
});

dat.sync.utils.tr.cljs$core$IFn$_invoke$arity$1 = (function (x){
return dat.sync.utils.tr.call(null,"",x);
});

dat.sync.utils.tr.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=utils.js.map