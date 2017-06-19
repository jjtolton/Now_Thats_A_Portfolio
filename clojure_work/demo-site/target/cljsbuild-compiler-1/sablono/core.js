// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__19950__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__19947 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__19948 = cljs.core.seq(vec__19947);
var first__19949 = cljs.core.first(seq__19948);
var seq__19948__$1 = cljs.core.next(seq__19948);
var tag = first__19949;
var body = seq__19948__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__19950 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19951__i = 0, G__19951__a = new Array(arguments.length -  0);
while (G__19951__i < G__19951__a.length) {G__19951__a[G__19951__i] = arguments[G__19951__i + 0]; ++G__19951__i;}
  args = new cljs.core.IndexedSeq(G__19951__a,0);
} 
return G__19950__delegate.call(this,args);};
G__19950.cljs$lang$maxFixedArity = 0;
G__19950.cljs$lang$applyTo = (function (arglist__19952){
var args = cljs.core.seq(arglist__19952);
return G__19950__delegate(args);
});
G__19950.cljs$core$IFn$_invoke$arity$variadic = G__19950__delegate;
return G__19950;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__8463__auto__ = (function sablono$core$update_arglists_$_iter__19959(s__19960){
return (new cljs.core.LazySeq(null,(function (){
var s__19960__$1 = s__19960;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__19960__$1);
if(temp__6738__auto__){
var s__19960__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19960__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__19960__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__19962 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__19961 = (0);
while(true){
if((i__19961 < size__8462__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__19961);
cljs.core.chunk_append(b__19962,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__19965 = (i__19961 + (1));
i__19961 = G__19965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19962),sablono$core$update_arglists_$_iter__19959(cljs.core.chunk_rest(s__19960__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19962),null);
}
} else {
var args = cljs.core.first(s__19960__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__19959(cljs.core.rest(s__19960__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8463__auto__(arglists);
});
/**
 * Render the React `component` as an HTML string.
 */
sablono.core.render = (function sablono$core$render(component){
return React.renderComponentToString(component);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__8829__auto__ = [];
var len__8822__auto___19973 = arguments.length;
var i__8823__auto___19974 = (0);
while(true){
if((i__8823__auto___19974 < len__8822__auto___19973)){
args__8829__auto__.push((arguments[i__8823__auto___19974]));

var G__19975 = (i__8823__auto___19974 + (1));
i__8823__auto___19974 = G__19975;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__8463__auto__ = (function sablono$core$iter__19967(s__19968){
return (new cljs.core.LazySeq(null,(function (){
var s__19968__$1 = s__19968;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__19968__$1);
if(temp__6738__auto__){
var s__19968__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19968__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__19968__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__19970 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__19969 = (0);
while(true){
if((i__19969 < size__8462__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__19969);
cljs.core.chunk_append(b__19970,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__19976 = (i__19969 + (1));
i__19969 = G__19976;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19970),sablono$core$iter__19967(cljs.core.chunk_rest(s__19968__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19970),null);
}
} else {
var style = cljs.core.first(s__19968__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__19967(cljs.core.rest(s__19968__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8463__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq19966){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19966));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__19981 = goog.dom.getDocument().body;
var G__19982 = (function (){var G__19983 = "script";
var G__19984 = ({"src": src});
return goog.dom.createDom(G__19983,G__19984);
})();
return goog.dom.appendChild(G__19981,G__19982);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.9.0.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to19985 = (function sablono$core$link_to19985(var_args){
var args__8829__auto__ = [];
var len__8822__auto___19988 = arguments.length;
var i__8823__auto___19989 = (0);
while(true){
if((i__8823__auto___19989 < len__8822__auto___19988)){
args__8829__auto__.push((arguments[i__8823__auto___19989]));

var G__19990 = (i__8823__auto___19989 + (1));
i__8823__auto___19989 = G__19990;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to19985.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

sablono.core.link_to19985.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to19985.cljs$lang$maxFixedArity = (1);

sablono.core.link_to19985.cljs$lang$applyTo = (function (seq19986){
var G__19987 = cljs.core.first(seq19986);
var seq19986__$1 = cljs.core.next(seq19986);
return sablono.core.link_to19985.cljs$core$IFn$_invoke$arity$variadic(G__19987,seq19986__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to19985);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to19991 = (function sablono$core$mail_to19991(var_args){
var args__8829__auto__ = [];
var len__8822__auto___19998 = arguments.length;
var i__8823__auto___19999 = (0);
while(true){
if((i__8823__auto___19999 < len__8822__auto___19998)){
args__8829__auto__.push((arguments[i__8823__auto___19999]));

var G__20000 = (i__8823__auto___19999 + (1));
i__8823__auto___19999 = G__20000;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to19991.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

sablono.core.mail_to19991.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__19994){
var vec__19995 = p__19994;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19995,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__7601__auto__ = content;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to19991.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to19991.cljs$lang$applyTo = (function (seq19992){
var G__19993 = cljs.core.first(seq19992);
var seq19992__$1 = cljs.core.next(seq19992);
return sablono.core.mail_to19991.cljs$core$IFn$_invoke$arity$variadic(G__19993,seq19992__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to19991);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list20001 = (function sablono$core$unordered_list20001(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__8463__auto__ = (function sablono$core$unordered_list20001_$_iter__20008(s__20009){
return (new cljs.core.LazySeq(null,(function (){
var s__20009__$1 = s__20009;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__20009__$1);
if(temp__6738__auto__){
var s__20009__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20009__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__20009__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__20011 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__20010 = (0);
while(true){
if((i__20010 < size__8462__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__20010);
cljs.core.chunk_append(b__20011,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__20014 = (i__20010 + (1));
i__20010 = G__20014;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20011),sablono$core$unordered_list20001_$_iter__20008(cljs.core.chunk_rest(s__20009__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20011),null);
}
} else {
var x = cljs.core.first(s__20009__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list20001_$_iter__20008(cljs.core.rest(s__20009__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8463__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list20001);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list20015 = (function sablono$core$ordered_list20015(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__8463__auto__ = (function sablono$core$ordered_list20015_$_iter__20022(s__20023){
return (new cljs.core.LazySeq(null,(function (){
var s__20023__$1 = s__20023;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__20023__$1);
if(temp__6738__auto__){
var s__20023__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20023__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__20023__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__20025 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__20024 = (0);
while(true){
if((i__20024 < size__8462__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__20024);
cljs.core.chunk_append(b__20025,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__20028 = (i__20024 + (1));
i__20024 = G__20028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20025),sablono$core$ordered_list20015_$_iter__20022(cljs.core.chunk_rest(s__20023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20025),null);
}
} else {
var x = cljs.core.first(s__20023__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list20015_$_iter__20022(cljs.core.rest(s__20023__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8463__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list20015);
/**
 * Create an image element.
 */
sablono.core.image20029 = (function sablono$core$image20029(var_args){
var args20030 = [];
var len__8822__auto___20033 = arguments.length;
var i__8823__auto___20034 = (0);
while(true){
if((i__8823__auto___20034 < len__8822__auto___20033)){
args20030.push((arguments[i__8823__auto___20034]));

var G__20035 = (i__8823__auto___20034 + (1));
i__8823__auto___20034 = G__20035;
continue;
} else {
}
break;
}

var G__20032 = args20030.length;
switch (G__20032) {
case 1:
return sablono.core.image20029.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image20029.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20030.length)].join('')));

}
});

sablono.core.image20029.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image20029.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image20029.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image20029);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__20037_SHARP_,p2__20038_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20037_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__20038_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__20039_SHARP_,p2__20040_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20039_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__20040_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field20041 = (function sablono$core$color_field20041(var_args){
var args20042 = [];
var len__8822__auto___20109 = arguments.length;
var i__8823__auto___20110 = (0);
while(true){
if((i__8823__auto___20110 < len__8822__auto___20109)){
args20042.push((arguments[i__8823__auto___20110]));

var G__20111 = (i__8823__auto___20110 + (1));
i__8823__auto___20110 = G__20111;
continue;
} else {
}
break;
}

var G__20044 = args20042.length;
switch (G__20044) {
case 1:
return sablono.core.color_field20041.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field20041.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20042.length)].join('')));

}
});

sablono.core.color_field20041.cljs$core$IFn$_invoke$arity$1 = (function (name__19858__auto__){
return sablono.core.color_field20041.cljs$core$IFn$_invoke$arity$2(name__19858__auto__,null);
});

sablono.core.color_field20041.cljs$core$IFn$_invoke$arity$2 = (function (name__19858__auto__,value__19859__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$color)].join(''),name__19858__auto__,value__19859__auto__);
});

sablono.core.color_field20041.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field20041);

/**
 * Creates a date input field.
 */
sablono.core.date_field20045 = (function sablono$core$date_field20045(var_args){
var args20046 = [];
var len__8822__auto___20113 = arguments.length;
var i__8823__auto___20114 = (0);
while(true){
if((i__8823__auto___20114 < len__8822__auto___20113)){
args20046.push((arguments[i__8823__auto___20114]));

var G__20115 = (i__8823__auto___20114 + (1));
i__8823__auto___20114 = G__20115;
continue;
} else {
}
break;
}

var G__20048 = args20046.length;
switch (G__20048) {
case 1:
return sablono.core.date_field20045.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field20045.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20046.length)].join('')));

}
});

sablono.core.date_field20045.cljs$core$IFn$_invoke$arity$1 = (function (name__19858__auto__){
return sablono.core.date_field20045.cljs$core$IFn$_invoke$arity$2(name__19858__auto__,null);
});

sablono.core.date_field20045.cljs$core$IFn$_invoke$arity$2 = (function (name__19858__auto__,value__19859__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$date)].join(''),name__19858__auto__,value__19859__auto__);
});

sablono.core.date_field20045.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field20045);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field20049 = (function sablono$core$datetime_field20049(var_args){
var args20050 = [];
var len__8822__auto___20117 = arguments.length;
var i__8823__auto___20118 = (0);
while(true){
if((i__8823__auto___20118 < len__8822__auto___20117)){
args20050.push((arguments[i__8823__auto___20118]));

var G__20119 = (i__8823__auto___20118 + (1));
i__8823__auto___20118 = G__20119;
continue;
} else {
}
break;
}

var G__20052 = args20050.length;
switch (G__20052) {
case 1:
return sablono.core.datetime_field20049.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field20049.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20050.length)].join('')));

}
});

sablono.core.datetime_field20049.cljs$core$IFn$_invoke$arity$1 = (function (name__19858__auto__){
return sablono.core.datetime_field20049.cljs$core$IFn$_invoke$arity$2(name__19858__auto__,null);
});

sablono.core.datetime_field20049.cljs$core$IFn$_invoke$arity$2 = (function (name__19858__auto__,value__19859__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime)].join(''),name__19858__auto__,value__19859__auto__);
});

sablono.core.datetime_field20049.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field20049);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field20053 = (function sablono$core$datetime_local_field20053(var_args){
var args20054 = [];
var len__8822__auto___20121 = arguments.length;
var i__8823__auto___20122 = (0);
while(true){
if((i__8823__auto___20122 < len__8822__auto___20121)){
args20054.push((arguments[i__8823__auto___20122]));

var G__20123 = (i__8823__auto___20122 + (1));
i__8823__auto___20122 = G__20123;
continue;
} else {
}
break;
}

var G__20056 = args20054.length;
switch (G__20056) {
case 1:
return sablono.core.datetime_local_field20053.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field20053.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20054.length)].join('')));

}
});

sablono.core.datetime_local_field20053.cljs$core$IFn$_invoke$arity$1 = (function (name__19858__auto__){
return sablono.core.datetime_local_field20053.cljs$core$IFn$_invoke$arity$2(name__19858__auto__,null);
});

sablono.core.datetime_local_field20053.cljs$core$IFn$_invoke$arity$2 = (function (name__19858__auto__,value__19859__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__19858__auto__,value__19859__auto__);
});

sablono.core.datetime_local_field20053.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field20053);

/**
 * Creates a email input field.
 */
sablono.core.email_field20057 = (function sablono$core$email_field20057(var_args){
var args20058 = [];
var len__8822__auto___20125 = arguments.length;
var i__8823__auto___20126 = (0);
while(true){
if((i__8823__auto___20126 < len__8822__auto___20125)){
args20058.push((arguments[i__8823__auto___20126]));

var G__20127 = (i__8823__auto___20126 + (1));
i__8823__auto___20126 = G__20127;
continue;
} else {
}
break;
}

var G__20060 = args20058.length;
switch (G__20060) {
case 1:
return sablono.core.email_field20057.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field20057.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20058.length)].join('')));

}
});

sablono.core.email_field20057.cljs$core$IFn$_invoke$arity$1 = (function (name__19858__auto__){
return sablono.core.email_field20057.cljs$core$IFn$_invoke$arity$2(name__19858__auto__,null);
});

sablono.core.email_field20057.cljs$core$IFn$_invoke$arity$2 = (function (name__19858__auto__,value__19859__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$email)].join(''),name__19858__auto__,value__19859__auto__);
});

sablono.core.email_field20057.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field20057);

/**
 * Creates a file input field.
 */
sablono.core.file_field20061 = (function sablono$core$file_field20061(var_args){
var args20062 = [];
var len__8822__auto___20129 = arguments.length;
var i__8823__auto___20130 = (0);
while(true){
if((i__8823__auto___20130 < len__8822__auto___20129)){
args20062.push((arguments[i__8823__auto___20130]));

var G__20131 = (i__8823__auto___20130 + (1));
i__8823__auto___20130 = G__20131;
continue;
} else {
}
break;
}

var G__20064 = args20062.length;
switch (G__20064) {
case 1:
return sablono.core.file_field20061.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field20061.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20062.length)].join('')));

}
});

sablono.core.file_field20061.cljs$core$IFn$_invoke$arity$1 = (function (name__19858__auto__){
return sablono.core.file_field20061.cljs$core$IFn$_invoke$arity$2(name__19858__auto__,null);
});

sablono.core.file_field20061.cljs$core$IFn$_invoke$arity$2 = (function (name__19858__auto__,value__19859__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$file)].join(''),name__19858__auto__,value__19859__auto__);
});

sablono.core.file_field20061.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field20061);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field20065 = (function sablono$core$hidden_field20065(var_args){
var args20066 = [];
var len__8822__auto___20133 = arguments.length;
var i__8823__auto___20134 = (0);
while(true){
if((i__8823__auto___20134 < len__8822__auto___20133)){
args20066.push((arguments[i__8823__auto___20134]));

var G__20135 = (i__8823__auto___20134 + (1));
i__8823__auto___20134 = G__20135;
continue;
} else {
}
break;
}

var G__20068 = args20066.length;
switch (G__20068) {
case 1:
return sablono.core.hidden_field20065.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field20065.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20066.length)].join('')));

}
});

sablono.core.hidden_field20065.cljs$core$IFn$_invoke$arity$1 = (function (name__19858__auto__){
return sablono.core.hidden_field20065.cljs$core$IFn$_invoke$arity$2(name__19858__auto__,null);
});

sablono.core.hidden_field20065.cljs$core$IFn$_invoke$arity$2 = (function (name__19858__auto__,value__19859__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$hidden)].join(''),name__19858__auto__,value__19859__auto__);
});

sablono.core.hidden_field20065.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field20065);

/**
 * Creates a month input field.
 */
sablono.core.month_field20069 = (function sablono$core$month_field20069(var_args){
var args20070 = [];
var len__8822__auto___20137 = arguments.length;
var i__8823__auto___20138 = (0);
while(true){
if((i__8823__auto___20138 < len__8822__auto___20137)){
args20070.push((arguments[i__8823__auto___20138]));

var G__20139 = (i__8823__auto___20138 + (1));
i__8823__auto___20138 = G__20139;
continue;
} else {
}
break;
}

var G__20072 = args20070.length;
switch (G__20072) {
case 1:
return sablono.core.month_field20069.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field20069.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20070.length)].join('')));

}
});

sablono.core.month_field20069.cljs$core$IFn$_invoke$arity$1 = (function (name__19858__auto__){
return sablono.core.month_field20069.cljs$core$IFn$_invoke$arity$2(name__19858__auto__,null);
});

sablono.core.month_field20069.cljs$core$IFn$_invoke$arity$2 = (function (name__19858__auto__,value__19859__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$month)].join(''),name__19858__auto__,value__19859__auto__);
});

sablono.core.month_field20069.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field20069);

/**
 * Creates a number input field.
 */
sablono.core.number_field20073 = (function sablono$core$number_field20073(var_args){
var args20074 = [];
var len__8822__auto___20141 = arguments.length;
var i__8823__auto___20142 = (0);
while(true){
if((i__8823__auto___20142 < len__8822__auto___20141)){
args20074.push((arguments[i__8823__auto___20142]));

var G__20143 = (i__8823__auto___20142 + (1));
i__8823__auto___20142 = G__20143;
continue;
} else {
}
break;
}

var G__20076 = args20074.length;
switch (G__20076) {
case 1:
return sablono.core.number_field20073.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field20073.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20074.length)].join('')));

}
});

sablono.core.number_field20073.cljs$core$IFn$_invoke$arity$1 = (function (name__19858__auto__){
return sablono.core.number_field20073.cljs$core$IFn$_invoke$arity$2(name__19858__auto__,null);
});

sablono.core.number_field20073.cljs$core$IFn$_invoke$arity$2 = (function (name__19858__auto__,value__19859__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$number)].join(''),name__19858__auto__,value__19859__auto__);
});

sablono.core.number_field20073.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field20073);

/**
 * Creates a password input field.
 */
sablono.core.password_field20077 = (function sablono$core$password_field20077(var_args){
var args20078 = [];
var len__8822__auto___20145 = arguments.length;
var i__8823__auto___20146 = (0);
while(true){
if((i__8823__auto___20146 < len__8822__auto___20145)){
args20078.push((arguments[i__8823__auto___20146]));

var G__20147 = (i__8823__auto___20146 + (1));
i__8823__auto___20146 = G__20147;
continue;
} else {
}
break;
}

var G__20080 = args20078.length;
switch (G__20080) {
case 1:
return sablono.core.password_field20077.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field20077.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20078.length)].join('')));

}
});

sablono.core.password_field20077.cljs$core$IFn$_invoke$arity$1 = (function (name__19858__auto__){
return sablono.core.password_field20077.cljs$core$IFn$_invoke$arity$2(name__19858__auto__,null);
});

sablono.core.password_field20077.cljs$core$IFn$_invoke$arity$2 = (function (name__19858__auto__,value__19859__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$password)].join(''),name__19858__auto__,value__19859__auto__);
});

sablono.core.password_field20077.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field20077);

/**
 * Creates a range input field.
 */
sablono.core.range_field20081 = (function sablono$core$range_field20081(var_args){
var args20082 = [];
var len__8822__auto___20149 = arguments.length;
var i__8823__auto___20150 = (0);
while(true){
if((i__8823__auto___20150 < len__8822__auto___20149)){
args20082.push((arguments[i__8823__auto___20150]));

var G__20151 = (i__8823__auto___20150 + (1));
i__8823__auto___20150 = G__20151;
continue;
} else {
}
break;
}

var G__20084 = args20082.length;
switch (G__20084) {
case 1:
return sablono.core.range_field20081.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field20081.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20082.length)].join('')));

}
});

sablono.core.range_field20081.cljs$core$IFn$_invoke$arity$1 = (function (name__19858__auto__){
return sablono.core.range_field20081.cljs$core$IFn$_invoke$arity$2(name__19858__auto__,null);
});

sablono.core.range_field20081.cljs$core$IFn$_invoke$arity$2 = (function (name__19858__auto__,value__19859__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$range)].join(''),name__19858__auto__,value__19859__auto__);
});

sablono.core.range_field20081.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field20081);

/**
 * Creates a search input field.
 */
sablono.core.search_field20085 = (function sablono$core$search_field20085(var_args){
var args20086 = [];
var len__8822__auto___20153 = arguments.length;
var i__8823__auto___20154 = (0);
while(true){
if((i__8823__auto___20154 < len__8822__auto___20153)){
args20086.push((arguments[i__8823__auto___20154]));

var G__20155 = (i__8823__auto___20154 + (1));
i__8823__auto___20154 = G__20155;
continue;
} else {
}
break;
}

var G__20088 = args20086.length;
switch (G__20088) {
case 1:
return sablono.core.search_field20085.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field20085.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20086.length)].join('')));

}
});

sablono.core.search_field20085.cljs$core$IFn$_invoke$arity$1 = (function (name__19858__auto__){
return sablono.core.search_field20085.cljs$core$IFn$_invoke$arity$2(name__19858__auto__,null);
});

sablono.core.search_field20085.cljs$core$IFn$_invoke$arity$2 = (function (name__19858__auto__,value__19859__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$search)].join(''),name__19858__auto__,value__19859__auto__);
});

sablono.core.search_field20085.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field20085);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field20089 = (function sablono$core$tel_field20089(var_args){
var args20090 = [];
var len__8822__auto___20157 = arguments.length;
var i__8823__auto___20158 = (0);
while(true){
if((i__8823__auto___20158 < len__8822__auto___20157)){
args20090.push((arguments[i__8823__auto___20158]));

var G__20159 = (i__8823__auto___20158 + (1));
i__8823__auto___20158 = G__20159;
continue;
} else {
}
break;
}

var G__20092 = args20090.length;
switch (G__20092) {
case 1:
return sablono.core.tel_field20089.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field20089.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20090.length)].join('')));

}
});

sablono.core.tel_field20089.cljs$core$IFn$_invoke$arity$1 = (function (name__19858__auto__){
return sablono.core.tel_field20089.cljs$core$IFn$_invoke$arity$2(name__19858__auto__,null);
});

sablono.core.tel_field20089.cljs$core$IFn$_invoke$arity$2 = (function (name__19858__auto__,value__19859__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$tel)].join(''),name__19858__auto__,value__19859__auto__);
});

sablono.core.tel_field20089.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field20089);

/**
 * Creates a text input field.
 */
sablono.core.text_field20093 = (function sablono$core$text_field20093(var_args){
var args20094 = [];
var len__8822__auto___20161 = arguments.length;
var i__8823__auto___20162 = (0);
while(true){
if((i__8823__auto___20162 < len__8822__auto___20161)){
args20094.push((arguments[i__8823__auto___20162]));

var G__20163 = (i__8823__auto___20162 + (1));
i__8823__auto___20162 = G__20163;
continue;
} else {
}
break;
}

var G__20096 = args20094.length;
switch (G__20096) {
case 1:
return sablono.core.text_field20093.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field20093.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20094.length)].join('')));

}
});

sablono.core.text_field20093.cljs$core$IFn$_invoke$arity$1 = (function (name__19858__auto__){
return sablono.core.text_field20093.cljs$core$IFn$_invoke$arity$2(name__19858__auto__,null);
});

sablono.core.text_field20093.cljs$core$IFn$_invoke$arity$2 = (function (name__19858__auto__,value__19859__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$text)].join(''),name__19858__auto__,value__19859__auto__);
});

sablono.core.text_field20093.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field20093);

/**
 * Creates a time input field.
 */
sablono.core.time_field20097 = (function sablono$core$time_field20097(var_args){
var args20098 = [];
var len__8822__auto___20165 = arguments.length;
var i__8823__auto___20166 = (0);
while(true){
if((i__8823__auto___20166 < len__8822__auto___20165)){
args20098.push((arguments[i__8823__auto___20166]));

var G__20167 = (i__8823__auto___20166 + (1));
i__8823__auto___20166 = G__20167;
continue;
} else {
}
break;
}

var G__20100 = args20098.length;
switch (G__20100) {
case 1:
return sablono.core.time_field20097.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field20097.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20098.length)].join('')));

}
});

sablono.core.time_field20097.cljs$core$IFn$_invoke$arity$1 = (function (name__19858__auto__){
return sablono.core.time_field20097.cljs$core$IFn$_invoke$arity$2(name__19858__auto__,null);
});

sablono.core.time_field20097.cljs$core$IFn$_invoke$arity$2 = (function (name__19858__auto__,value__19859__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$time)].join(''),name__19858__auto__,value__19859__auto__);
});

sablono.core.time_field20097.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field20097);

/**
 * Creates a url input field.
 */
sablono.core.url_field20101 = (function sablono$core$url_field20101(var_args){
var args20102 = [];
var len__8822__auto___20169 = arguments.length;
var i__8823__auto___20170 = (0);
while(true){
if((i__8823__auto___20170 < len__8822__auto___20169)){
args20102.push((arguments[i__8823__auto___20170]));

var G__20171 = (i__8823__auto___20170 + (1));
i__8823__auto___20170 = G__20171;
continue;
} else {
}
break;
}

var G__20104 = args20102.length;
switch (G__20104) {
case 1:
return sablono.core.url_field20101.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field20101.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20102.length)].join('')));

}
});

sablono.core.url_field20101.cljs$core$IFn$_invoke$arity$1 = (function (name__19858__auto__){
return sablono.core.url_field20101.cljs$core$IFn$_invoke$arity$2(name__19858__auto__,null);
});

sablono.core.url_field20101.cljs$core$IFn$_invoke$arity$2 = (function (name__19858__auto__,value__19859__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$url)].join(''),name__19858__auto__,value__19859__auto__);
});

sablono.core.url_field20101.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field20101);

/**
 * Creates a week input field.
 */
sablono.core.week_field20105 = (function sablono$core$week_field20105(var_args){
var args20106 = [];
var len__8822__auto___20173 = arguments.length;
var i__8823__auto___20174 = (0);
while(true){
if((i__8823__auto___20174 < len__8822__auto___20173)){
args20106.push((arguments[i__8823__auto___20174]));

var G__20175 = (i__8823__auto___20174 + (1));
i__8823__auto___20174 = G__20175;
continue;
} else {
}
break;
}

var G__20108 = args20106.length;
switch (G__20108) {
case 1:
return sablono.core.week_field20105.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field20105.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20106.length)].join('')));

}
});

sablono.core.week_field20105.cljs$core$IFn$_invoke$arity$1 = (function (name__19858__auto__){
return sablono.core.week_field20105.cljs$core$IFn$_invoke$arity$2(name__19858__auto__,null);
});

sablono.core.week_field20105.cljs$core$IFn$_invoke$arity$2 = (function (name__19858__auto__,value__19859__auto__){
return sablono.core.input_field_STAR_([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$sym$week)].join(''),name__19858__auto__,value__19859__auto__);
});

sablono.core.week_field20105.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field20105);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box20177 = (function sablono$core$check_box20177(var_args){
var args20178 = [];
var len__8822__auto___20181 = arguments.length;
var i__8823__auto___20182 = (0);
while(true){
if((i__8823__auto___20182 < len__8822__auto___20181)){
args20178.push((arguments[i__8823__auto___20182]));

var G__20183 = (i__8823__auto___20182 + (1));
i__8823__auto___20182 = G__20183;
continue;
} else {
}
break;
}

var G__20180 = args20178.length;
switch (G__20180) {
case 1:
return sablono.core.check_box20177.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box20177.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box20177.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20178.length)].join('')));

}
});

sablono.core.check_box20177.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box20177.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box20177.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box20177.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box20177.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box20177.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box20177);
/**
 * Creates a radio button.
 */
sablono.core.radio_button20185 = (function sablono$core$radio_button20185(var_args){
var args20186 = [];
var len__8822__auto___20189 = arguments.length;
var i__8823__auto___20190 = (0);
while(true){
if((i__8823__auto___20190 < len__8822__auto___20189)){
args20186.push((arguments[i__8823__auto___20190]));

var G__20191 = (i__8823__auto___20190 + (1));
i__8823__auto___20190 = G__20191;
continue;
} else {
}
break;
}

var G__20188 = args20186.length;
switch (G__20188) {
case 1:
return sablono.core.radio_button20185.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button20185.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button20185.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20186.length)].join('')));

}
});

sablono.core.radio_button20185.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button20185.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button20185.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button20185.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button20185.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button20185.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button20185);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options20193 = (function sablono$core$select_options20193(var_args){
var args20194 = [];
var len__8822__auto___20215 = arguments.length;
var i__8823__auto___20216 = (0);
while(true){
if((i__8823__auto___20216 < len__8822__auto___20215)){
args20194.push((arguments[i__8823__auto___20216]));

var G__20217 = (i__8823__auto___20216 + (1));
i__8823__auto___20216 = G__20217;
continue;
} else {
}
break;
}

var G__20196 = args20194.length;
switch (G__20196) {
case 1:
return sablono.core.select_options20193.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options20193.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20194.length)].join('')));

}
});

sablono.core.select_options20193.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options20193.cljs$core$IFn$_invoke$arity$2(coll,null);
});

sablono.core.select_options20193.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__8463__auto__ = (function sablono$core$iter__20197(s__20198){
return (new cljs.core.LazySeq(null,(function (){
var s__20198__$1 = s__20198;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__20198__$1);
if(temp__6738__auto__){
var s__20198__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20198__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__20198__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__20200 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__20199 = (0);
while(true){
if((i__20199 < size__8462__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__20199);
cljs.core.chunk_append(b__20200,((cljs.core.sequential_QMARK_(x))?(function (){var vec__20209 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20209,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20209,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20209,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,text], null),sablono.core.select_options20193.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,val,cljs.core.cst$kw$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.cst$kw$disabled,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__20219 = (i__20199 + (1));
i__20199 = G__20219;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20200),sablono$core$iter__20197(cljs.core.chunk_rest(s__20198__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20200),null);
}
} else {
var x = cljs.core.first(s__20198__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__20212 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20212,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20212,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20212,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,text], null),sablono.core.select_options20193.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,val,cljs.core.cst$kw$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.cst$kw$disabled,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),sablono$core$iter__20197(cljs.core.rest(s__20198__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8463__auto__(coll);
});

sablono.core.select_options20193.cljs$lang$maxFixedArity = 2;


sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options20193);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down20220 = (function sablono$core$drop_down20220(var_args){
var args20221 = [];
var len__8822__auto___20224 = arguments.length;
var i__8823__auto___20225 = (0);
while(true){
if((i__8823__auto___20225 < len__8822__auto___20224)){
args20221.push((arguments[i__8823__auto___20225]));

var G__20226 = (i__8823__auto___20225 + (1));
i__8823__auto___20225 = G__20226;
continue;
} else {
}
break;
}

var G__20223 = args20221.length;
switch (G__20223) {
case 2:
return sablono.core.drop_down20220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down20220.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20221.length)].join('')));

}
});

sablono.core.drop_down20220.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down20220.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down20220.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down20220.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down20220);
/**
 * Creates a text area element.
 */
sablono.core.text_area20228 = (function sablono$core$text_area20228(var_args){
var args20229 = [];
var len__8822__auto___20232 = arguments.length;
var i__8823__auto___20233 = (0);
while(true){
if((i__8823__auto___20233 < len__8822__auto___20232)){
args20229.push((arguments[i__8823__auto___20233]));

var G__20234 = (i__8823__auto___20233 + (1));
i__8823__auto___20233 = G__20234;
continue;
} else {
}
break;
}

var G__20231 = args20229.length;
switch (G__20231) {
case 1:
return sablono.core.text_area20228.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area20228.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20229.length)].join('')));

}
});

sablono.core.text_area20228.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area20228.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area20228.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area20228.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area20228);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label20236 = (function sablono$core$label20236(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label20236);
/**
 * Creates a submit button.
 */
sablono.core.submit_button20237 = (function sablono$core$submit_button20237(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button20237);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button20238 = (function sablono$core$reset_button20238(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button20238);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to20239 = (function sablono$core$form_to20239(var_args){
var args__8829__auto__ = [];
var len__8822__auto___20246 = arguments.length;
var i__8823__auto___20247 = (0);
while(true){
if((i__8823__auto___20247 < len__8822__auto___20246)){
args__8829__auto__.push((arguments[i__8823__auto___20247]));

var G__20248 = (i__8823__auto___20247 + (1));
i__8823__auto___20247 = G__20248;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to20239.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

sablono.core.form_to20239.cljs$core$IFn$_invoke$arity$variadic = (function (p__20242,body){
var vec__20243 = p__20242;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20243,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20243,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
});

sablono.core.form_to20239.cljs$lang$maxFixedArity = (1);

sablono.core.form_to20239.cljs$lang$applyTo = (function (seq20240){
var G__20241 = cljs.core.first(seq20240);
var seq20240__$1 = cljs.core.next(seq20240);
return sablono.core.form_to20239.cljs$core$IFn$_invoke$arity$variadic(G__20241,seq20240__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to20239);
