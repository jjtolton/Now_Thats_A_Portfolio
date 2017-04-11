// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
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
var G__18211__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__18208 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__18209 = cljs.core.seq(vec__18208);
var first__18210 = cljs.core.first(seq__18209);
var seq__18209__$1 = cljs.core.next(seq__18209);
var tag = first__18210;
var body = seq__18209__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__18211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18212__i = 0, G__18212__a = new Array(arguments.length -  0);
while (G__18212__i < G__18212__a.length) {G__18212__a[G__18212__i] = arguments[G__18212__i + 0]; ++G__18212__i;}
  args = new cljs.core.IndexedSeq(G__18212__a,0);
} 
return G__18211__delegate.call(this,args);};
G__18211.cljs$lang$maxFixedArity = 0;
G__18211.cljs$lang$applyTo = (function (arglist__18213){
var args = cljs.core.seq(arglist__18213);
return G__18211__delegate(args);
});
G__18211.cljs$core$IFn$_invoke$arity$variadic = G__18211__delegate;
return G__18211;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7189__auto__ = (function sablono$core$update_arglists_$_iter__18220(s__18221){
return (new cljs.core.LazySeq(null,(function (){
var s__18221__$1 = s__18221;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18221__$1);
if(temp__4657__auto__){
var s__18221__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18221__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__18221__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__18223 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__18222 = (0);
while(true){
if((i__18222 < size__7188__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__18222);
cljs.core.chunk_append(b__18223,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__18226 = (i__18222 + (1));
i__18222 = G__18226;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18223),sablono$core$update_arglists_$_iter__18220(cljs.core.chunk_rest(s__18221__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18223),null);
}
} else {
var args = cljs.core.first(s__18221__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__18220(cljs.core.rest(s__18221__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__(arglists);
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
var args__7491__auto__ = [];
var len__7484__auto___18234 = arguments.length;
var i__7485__auto___18235 = (0);
while(true){
if((i__7485__auto___18235 < len__7484__auto___18234)){
args__7491__auto__.push((arguments[i__7485__auto___18235]));

var G__18236 = (i__7485__auto___18235 + (1));
i__7485__auto___18235 = G__18236;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7189__auto__ = (function sablono$core$iter__18228(s__18229){
return (new cljs.core.LazySeq(null,(function (){
var s__18229__$1 = s__18229;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18229__$1);
if(temp__4657__auto__){
var s__18229__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18229__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__18229__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__18231 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__18230 = (0);
while(true){
if((i__18230 < size__7188__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__18230);
cljs.core.chunk_append(b__18231,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__18237 = (i__18230 + (1));
i__18230 = G__18237;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18231),sablono$core$iter__18228(cljs.core.chunk_rest(s__18229__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18231),null);
}
} else {
var style = cljs.core.first(s__18229__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__18228(cljs.core.rest(s__18229__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq18227){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18227));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__18242 = goog.dom.getDocument().body;
var G__18243 = (function (){var G__18244 = "script";
var G__18245 = ({"src": src});
return goog.dom.createDom(G__18244,G__18245);
})();
return goog.dom.appendChild(G__18242,G__18243);
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
sablono.core.link_to18246 = (function sablono$core$link_to18246(var_args){
var args__7491__auto__ = [];
var len__7484__auto___18249 = arguments.length;
var i__7485__auto___18250 = (0);
while(true){
if((i__7485__auto___18250 < len__7484__auto___18249)){
args__7491__auto__.push((arguments[i__7485__auto___18250]));

var G__18251 = (i__7485__auto___18250 + (1));
i__7485__auto___18250 = G__18251;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to18246.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

sablono.core.link_to18246.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to18246.cljs$lang$maxFixedArity = (1);

sablono.core.link_to18246.cljs$lang$applyTo = (function (seq18247){
var G__18248 = cljs.core.first(seq18247);
var seq18247__$1 = cljs.core.next(seq18247);
return sablono.core.link_to18246.cljs$core$IFn$_invoke$arity$variadic(G__18248,seq18247__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to18246);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to18252 = (function sablono$core$mail_to18252(var_args){
var args__7491__auto__ = [];
var len__7484__auto___18259 = arguments.length;
var i__7485__auto___18260 = (0);
while(true){
if((i__7485__auto___18260 < len__7484__auto___18259)){
args__7491__auto__.push((arguments[i__7485__auto___18260]));

var G__18261 = (i__7485__auto___18260 + (1));
i__7485__auto___18260 = G__18261;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to18252.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

sablono.core.mail_to18252.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__18255){
var vec__18256 = p__18255;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18256,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6409__auto__ = content;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to18252.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to18252.cljs$lang$applyTo = (function (seq18253){
var G__18254 = cljs.core.first(seq18253);
var seq18253__$1 = cljs.core.next(seq18253);
return sablono.core.mail_to18252.cljs$core$IFn$_invoke$arity$variadic(G__18254,seq18253__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to18252);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list18262 = (function sablono$core$unordered_list18262(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__7189__auto__ = (function sablono$core$unordered_list18262_$_iter__18269(s__18270){
return (new cljs.core.LazySeq(null,(function (){
var s__18270__$1 = s__18270;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18270__$1);
if(temp__4657__auto__){
var s__18270__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18270__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__18270__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__18272 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__18271 = (0);
while(true){
if((i__18271 < size__7188__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__18271);
cljs.core.chunk_append(b__18272,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__18275 = (i__18271 + (1));
i__18271 = G__18275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18272),sablono$core$unordered_list18262_$_iter__18269(cljs.core.chunk_rest(s__18270__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18272),null);
}
} else {
var x = cljs.core.first(s__18270__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list18262_$_iter__18269(cljs.core.rest(s__18270__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list18262);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list18276 = (function sablono$core$ordered_list18276(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__7189__auto__ = (function sablono$core$ordered_list18276_$_iter__18283(s__18284){
return (new cljs.core.LazySeq(null,(function (){
var s__18284__$1 = s__18284;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18284__$1);
if(temp__4657__auto__){
var s__18284__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18284__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__18284__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__18286 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__18285 = (0);
while(true){
if((i__18285 < size__7188__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__18285);
cljs.core.chunk_append(b__18286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__18289 = (i__18285 + (1));
i__18285 = G__18289;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18286),sablono$core$ordered_list18276_$_iter__18283(cljs.core.chunk_rest(s__18284__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18286),null);
}
} else {
var x = cljs.core.first(s__18284__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list18276_$_iter__18283(cljs.core.rest(s__18284__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list18276);
/**
 * Create an image element.
 */
sablono.core.image18290 = (function sablono$core$image18290(var_args){
var args18291 = [];
var len__7484__auto___18294 = arguments.length;
var i__7485__auto___18295 = (0);
while(true){
if((i__7485__auto___18295 < len__7484__auto___18294)){
args18291.push((arguments[i__7485__auto___18295]));

var G__18296 = (i__7485__auto___18295 + (1));
i__7485__auto___18295 = G__18296;
continue;
} else {
}
break;
}

var G__18293 = args18291.length;
switch (G__18293) {
case 1:
return sablono.core.image18290.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image18290.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18291.length)].join('')));

}
});

sablono.core.image18290.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image18290.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image18290.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image18290);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__18298_SHARP_,p2__18299_SHARP_){
return [cljs.core.str(p1__18298_SHARP_),cljs.core.str("["),cljs.core.str(p2__18299_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__18300_SHARP_,p2__18301_SHARP_){
return [cljs.core.str(p1__18300_SHARP_),cljs.core.str("-"),cljs.core.str(p2__18301_SHARP_)].join('');
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
sablono.core.color_field18302 = (function sablono$core$color_field18302(var_args){
var args18303 = [];
var len__7484__auto___18370 = arguments.length;
var i__7485__auto___18371 = (0);
while(true){
if((i__7485__auto___18371 < len__7484__auto___18370)){
args18303.push((arguments[i__7485__auto___18371]));

var G__18372 = (i__7485__auto___18371 + (1));
i__7485__auto___18371 = G__18372;
continue;
} else {
}
break;
}

var G__18305 = args18303.length;
switch (G__18305) {
case 1:
return sablono.core.color_field18302.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field18302.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18303.length)].join('')));

}
});

sablono.core.color_field18302.cljs$core$IFn$_invoke$arity$1 = (function (name__18125__auto__){
return sablono.core.color_field18302.cljs$core$IFn$_invoke$arity$2(name__18125__auto__,null);
});

sablono.core.color_field18302.cljs$core$IFn$_invoke$arity$2 = (function (name__18125__auto__,value__18126__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__18125__auto__,value__18126__auto__);
});

sablono.core.color_field18302.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field18302);

/**
 * Creates a date input field.
 */
sablono.core.date_field18306 = (function sablono$core$date_field18306(var_args){
var args18307 = [];
var len__7484__auto___18374 = arguments.length;
var i__7485__auto___18375 = (0);
while(true){
if((i__7485__auto___18375 < len__7484__auto___18374)){
args18307.push((arguments[i__7485__auto___18375]));

var G__18376 = (i__7485__auto___18375 + (1));
i__7485__auto___18375 = G__18376;
continue;
} else {
}
break;
}

var G__18309 = args18307.length;
switch (G__18309) {
case 1:
return sablono.core.date_field18306.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field18306.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18307.length)].join('')));

}
});

sablono.core.date_field18306.cljs$core$IFn$_invoke$arity$1 = (function (name__18125__auto__){
return sablono.core.date_field18306.cljs$core$IFn$_invoke$arity$2(name__18125__auto__,null);
});

sablono.core.date_field18306.cljs$core$IFn$_invoke$arity$2 = (function (name__18125__auto__,value__18126__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__18125__auto__,value__18126__auto__);
});

sablono.core.date_field18306.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field18306);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field18310 = (function sablono$core$datetime_field18310(var_args){
var args18311 = [];
var len__7484__auto___18378 = arguments.length;
var i__7485__auto___18379 = (0);
while(true){
if((i__7485__auto___18379 < len__7484__auto___18378)){
args18311.push((arguments[i__7485__auto___18379]));

var G__18380 = (i__7485__auto___18379 + (1));
i__7485__auto___18379 = G__18380;
continue;
} else {
}
break;
}

var G__18313 = args18311.length;
switch (G__18313) {
case 1:
return sablono.core.datetime_field18310.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field18310.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18311.length)].join('')));

}
});

sablono.core.datetime_field18310.cljs$core$IFn$_invoke$arity$1 = (function (name__18125__auto__){
return sablono.core.datetime_field18310.cljs$core$IFn$_invoke$arity$2(name__18125__auto__,null);
});

sablono.core.datetime_field18310.cljs$core$IFn$_invoke$arity$2 = (function (name__18125__auto__,value__18126__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__18125__auto__,value__18126__auto__);
});

sablono.core.datetime_field18310.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field18310);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field18314 = (function sablono$core$datetime_local_field18314(var_args){
var args18315 = [];
var len__7484__auto___18382 = arguments.length;
var i__7485__auto___18383 = (0);
while(true){
if((i__7485__auto___18383 < len__7484__auto___18382)){
args18315.push((arguments[i__7485__auto___18383]));

var G__18384 = (i__7485__auto___18383 + (1));
i__7485__auto___18383 = G__18384;
continue;
} else {
}
break;
}

var G__18317 = args18315.length;
switch (G__18317) {
case 1:
return sablono.core.datetime_local_field18314.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field18314.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18315.length)].join('')));

}
});

sablono.core.datetime_local_field18314.cljs$core$IFn$_invoke$arity$1 = (function (name__18125__auto__){
return sablono.core.datetime_local_field18314.cljs$core$IFn$_invoke$arity$2(name__18125__auto__,null);
});

sablono.core.datetime_local_field18314.cljs$core$IFn$_invoke$arity$2 = (function (name__18125__auto__,value__18126__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__18125__auto__,value__18126__auto__);
});

sablono.core.datetime_local_field18314.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field18314);

/**
 * Creates a email input field.
 */
sablono.core.email_field18318 = (function sablono$core$email_field18318(var_args){
var args18319 = [];
var len__7484__auto___18386 = arguments.length;
var i__7485__auto___18387 = (0);
while(true){
if((i__7485__auto___18387 < len__7484__auto___18386)){
args18319.push((arguments[i__7485__auto___18387]));

var G__18388 = (i__7485__auto___18387 + (1));
i__7485__auto___18387 = G__18388;
continue;
} else {
}
break;
}

var G__18321 = args18319.length;
switch (G__18321) {
case 1:
return sablono.core.email_field18318.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field18318.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18319.length)].join('')));

}
});

sablono.core.email_field18318.cljs$core$IFn$_invoke$arity$1 = (function (name__18125__auto__){
return sablono.core.email_field18318.cljs$core$IFn$_invoke$arity$2(name__18125__auto__,null);
});

sablono.core.email_field18318.cljs$core$IFn$_invoke$arity$2 = (function (name__18125__auto__,value__18126__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__18125__auto__,value__18126__auto__);
});

sablono.core.email_field18318.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field18318);

/**
 * Creates a file input field.
 */
sablono.core.file_field18322 = (function sablono$core$file_field18322(var_args){
var args18323 = [];
var len__7484__auto___18390 = arguments.length;
var i__7485__auto___18391 = (0);
while(true){
if((i__7485__auto___18391 < len__7484__auto___18390)){
args18323.push((arguments[i__7485__auto___18391]));

var G__18392 = (i__7485__auto___18391 + (1));
i__7485__auto___18391 = G__18392;
continue;
} else {
}
break;
}

var G__18325 = args18323.length;
switch (G__18325) {
case 1:
return sablono.core.file_field18322.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field18322.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18323.length)].join('')));

}
});

sablono.core.file_field18322.cljs$core$IFn$_invoke$arity$1 = (function (name__18125__auto__){
return sablono.core.file_field18322.cljs$core$IFn$_invoke$arity$2(name__18125__auto__,null);
});

sablono.core.file_field18322.cljs$core$IFn$_invoke$arity$2 = (function (name__18125__auto__,value__18126__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__18125__auto__,value__18126__auto__);
});

sablono.core.file_field18322.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field18322);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field18326 = (function sablono$core$hidden_field18326(var_args){
var args18327 = [];
var len__7484__auto___18394 = arguments.length;
var i__7485__auto___18395 = (0);
while(true){
if((i__7485__auto___18395 < len__7484__auto___18394)){
args18327.push((arguments[i__7485__auto___18395]));

var G__18396 = (i__7485__auto___18395 + (1));
i__7485__auto___18395 = G__18396;
continue;
} else {
}
break;
}

var G__18329 = args18327.length;
switch (G__18329) {
case 1:
return sablono.core.hidden_field18326.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field18326.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18327.length)].join('')));

}
});

sablono.core.hidden_field18326.cljs$core$IFn$_invoke$arity$1 = (function (name__18125__auto__){
return sablono.core.hidden_field18326.cljs$core$IFn$_invoke$arity$2(name__18125__auto__,null);
});

sablono.core.hidden_field18326.cljs$core$IFn$_invoke$arity$2 = (function (name__18125__auto__,value__18126__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__18125__auto__,value__18126__auto__);
});

sablono.core.hidden_field18326.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field18326);

/**
 * Creates a month input field.
 */
sablono.core.month_field18330 = (function sablono$core$month_field18330(var_args){
var args18331 = [];
var len__7484__auto___18398 = arguments.length;
var i__7485__auto___18399 = (0);
while(true){
if((i__7485__auto___18399 < len__7484__auto___18398)){
args18331.push((arguments[i__7485__auto___18399]));

var G__18400 = (i__7485__auto___18399 + (1));
i__7485__auto___18399 = G__18400;
continue;
} else {
}
break;
}

var G__18333 = args18331.length;
switch (G__18333) {
case 1:
return sablono.core.month_field18330.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field18330.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18331.length)].join('')));

}
});

sablono.core.month_field18330.cljs$core$IFn$_invoke$arity$1 = (function (name__18125__auto__){
return sablono.core.month_field18330.cljs$core$IFn$_invoke$arity$2(name__18125__auto__,null);
});

sablono.core.month_field18330.cljs$core$IFn$_invoke$arity$2 = (function (name__18125__auto__,value__18126__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__18125__auto__,value__18126__auto__);
});

sablono.core.month_field18330.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field18330);

/**
 * Creates a number input field.
 */
sablono.core.number_field18334 = (function sablono$core$number_field18334(var_args){
var args18335 = [];
var len__7484__auto___18402 = arguments.length;
var i__7485__auto___18403 = (0);
while(true){
if((i__7485__auto___18403 < len__7484__auto___18402)){
args18335.push((arguments[i__7485__auto___18403]));

var G__18404 = (i__7485__auto___18403 + (1));
i__7485__auto___18403 = G__18404;
continue;
} else {
}
break;
}

var G__18337 = args18335.length;
switch (G__18337) {
case 1:
return sablono.core.number_field18334.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field18334.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18335.length)].join('')));

}
});

sablono.core.number_field18334.cljs$core$IFn$_invoke$arity$1 = (function (name__18125__auto__){
return sablono.core.number_field18334.cljs$core$IFn$_invoke$arity$2(name__18125__auto__,null);
});

sablono.core.number_field18334.cljs$core$IFn$_invoke$arity$2 = (function (name__18125__auto__,value__18126__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__18125__auto__,value__18126__auto__);
});

sablono.core.number_field18334.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field18334);

/**
 * Creates a password input field.
 */
sablono.core.password_field18338 = (function sablono$core$password_field18338(var_args){
var args18339 = [];
var len__7484__auto___18406 = arguments.length;
var i__7485__auto___18407 = (0);
while(true){
if((i__7485__auto___18407 < len__7484__auto___18406)){
args18339.push((arguments[i__7485__auto___18407]));

var G__18408 = (i__7485__auto___18407 + (1));
i__7485__auto___18407 = G__18408;
continue;
} else {
}
break;
}

var G__18341 = args18339.length;
switch (G__18341) {
case 1:
return sablono.core.password_field18338.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field18338.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18339.length)].join('')));

}
});

sablono.core.password_field18338.cljs$core$IFn$_invoke$arity$1 = (function (name__18125__auto__){
return sablono.core.password_field18338.cljs$core$IFn$_invoke$arity$2(name__18125__auto__,null);
});

sablono.core.password_field18338.cljs$core$IFn$_invoke$arity$2 = (function (name__18125__auto__,value__18126__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__18125__auto__,value__18126__auto__);
});

sablono.core.password_field18338.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field18338);

/**
 * Creates a range input field.
 */
sablono.core.range_field18342 = (function sablono$core$range_field18342(var_args){
var args18343 = [];
var len__7484__auto___18410 = arguments.length;
var i__7485__auto___18411 = (0);
while(true){
if((i__7485__auto___18411 < len__7484__auto___18410)){
args18343.push((arguments[i__7485__auto___18411]));

var G__18412 = (i__7485__auto___18411 + (1));
i__7485__auto___18411 = G__18412;
continue;
} else {
}
break;
}

var G__18345 = args18343.length;
switch (G__18345) {
case 1:
return sablono.core.range_field18342.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field18342.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18343.length)].join('')));

}
});

sablono.core.range_field18342.cljs$core$IFn$_invoke$arity$1 = (function (name__18125__auto__){
return sablono.core.range_field18342.cljs$core$IFn$_invoke$arity$2(name__18125__auto__,null);
});

sablono.core.range_field18342.cljs$core$IFn$_invoke$arity$2 = (function (name__18125__auto__,value__18126__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__18125__auto__,value__18126__auto__);
});

sablono.core.range_field18342.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field18342);

/**
 * Creates a search input field.
 */
sablono.core.search_field18346 = (function sablono$core$search_field18346(var_args){
var args18347 = [];
var len__7484__auto___18414 = arguments.length;
var i__7485__auto___18415 = (0);
while(true){
if((i__7485__auto___18415 < len__7484__auto___18414)){
args18347.push((arguments[i__7485__auto___18415]));

var G__18416 = (i__7485__auto___18415 + (1));
i__7485__auto___18415 = G__18416;
continue;
} else {
}
break;
}

var G__18349 = args18347.length;
switch (G__18349) {
case 1:
return sablono.core.search_field18346.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field18346.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18347.length)].join('')));

}
});

sablono.core.search_field18346.cljs$core$IFn$_invoke$arity$1 = (function (name__18125__auto__){
return sablono.core.search_field18346.cljs$core$IFn$_invoke$arity$2(name__18125__auto__,null);
});

sablono.core.search_field18346.cljs$core$IFn$_invoke$arity$2 = (function (name__18125__auto__,value__18126__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__18125__auto__,value__18126__auto__);
});

sablono.core.search_field18346.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field18346);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field18350 = (function sablono$core$tel_field18350(var_args){
var args18351 = [];
var len__7484__auto___18418 = arguments.length;
var i__7485__auto___18419 = (0);
while(true){
if((i__7485__auto___18419 < len__7484__auto___18418)){
args18351.push((arguments[i__7485__auto___18419]));

var G__18420 = (i__7485__auto___18419 + (1));
i__7485__auto___18419 = G__18420;
continue;
} else {
}
break;
}

var G__18353 = args18351.length;
switch (G__18353) {
case 1:
return sablono.core.tel_field18350.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field18350.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18351.length)].join('')));

}
});

sablono.core.tel_field18350.cljs$core$IFn$_invoke$arity$1 = (function (name__18125__auto__){
return sablono.core.tel_field18350.cljs$core$IFn$_invoke$arity$2(name__18125__auto__,null);
});

sablono.core.tel_field18350.cljs$core$IFn$_invoke$arity$2 = (function (name__18125__auto__,value__18126__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__18125__auto__,value__18126__auto__);
});

sablono.core.tel_field18350.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field18350);

/**
 * Creates a text input field.
 */
sablono.core.text_field18354 = (function sablono$core$text_field18354(var_args){
var args18355 = [];
var len__7484__auto___18422 = arguments.length;
var i__7485__auto___18423 = (0);
while(true){
if((i__7485__auto___18423 < len__7484__auto___18422)){
args18355.push((arguments[i__7485__auto___18423]));

var G__18424 = (i__7485__auto___18423 + (1));
i__7485__auto___18423 = G__18424;
continue;
} else {
}
break;
}

var G__18357 = args18355.length;
switch (G__18357) {
case 1:
return sablono.core.text_field18354.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field18354.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18355.length)].join('')));

}
});

sablono.core.text_field18354.cljs$core$IFn$_invoke$arity$1 = (function (name__18125__auto__){
return sablono.core.text_field18354.cljs$core$IFn$_invoke$arity$2(name__18125__auto__,null);
});

sablono.core.text_field18354.cljs$core$IFn$_invoke$arity$2 = (function (name__18125__auto__,value__18126__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__18125__auto__,value__18126__auto__);
});

sablono.core.text_field18354.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field18354);

/**
 * Creates a time input field.
 */
sablono.core.time_field18358 = (function sablono$core$time_field18358(var_args){
var args18359 = [];
var len__7484__auto___18426 = arguments.length;
var i__7485__auto___18427 = (0);
while(true){
if((i__7485__auto___18427 < len__7484__auto___18426)){
args18359.push((arguments[i__7485__auto___18427]));

var G__18428 = (i__7485__auto___18427 + (1));
i__7485__auto___18427 = G__18428;
continue;
} else {
}
break;
}

var G__18361 = args18359.length;
switch (G__18361) {
case 1:
return sablono.core.time_field18358.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field18358.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18359.length)].join('')));

}
});

sablono.core.time_field18358.cljs$core$IFn$_invoke$arity$1 = (function (name__18125__auto__){
return sablono.core.time_field18358.cljs$core$IFn$_invoke$arity$2(name__18125__auto__,null);
});

sablono.core.time_field18358.cljs$core$IFn$_invoke$arity$2 = (function (name__18125__auto__,value__18126__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__18125__auto__,value__18126__auto__);
});

sablono.core.time_field18358.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field18358);

/**
 * Creates a url input field.
 */
sablono.core.url_field18362 = (function sablono$core$url_field18362(var_args){
var args18363 = [];
var len__7484__auto___18430 = arguments.length;
var i__7485__auto___18431 = (0);
while(true){
if((i__7485__auto___18431 < len__7484__auto___18430)){
args18363.push((arguments[i__7485__auto___18431]));

var G__18432 = (i__7485__auto___18431 + (1));
i__7485__auto___18431 = G__18432;
continue;
} else {
}
break;
}

var G__18365 = args18363.length;
switch (G__18365) {
case 1:
return sablono.core.url_field18362.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field18362.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18363.length)].join('')));

}
});

sablono.core.url_field18362.cljs$core$IFn$_invoke$arity$1 = (function (name__18125__auto__){
return sablono.core.url_field18362.cljs$core$IFn$_invoke$arity$2(name__18125__auto__,null);
});

sablono.core.url_field18362.cljs$core$IFn$_invoke$arity$2 = (function (name__18125__auto__,value__18126__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__18125__auto__,value__18126__auto__);
});

sablono.core.url_field18362.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field18362);

/**
 * Creates a week input field.
 */
sablono.core.week_field18366 = (function sablono$core$week_field18366(var_args){
var args18367 = [];
var len__7484__auto___18434 = arguments.length;
var i__7485__auto___18435 = (0);
while(true){
if((i__7485__auto___18435 < len__7484__auto___18434)){
args18367.push((arguments[i__7485__auto___18435]));

var G__18436 = (i__7485__auto___18435 + (1));
i__7485__auto___18435 = G__18436;
continue;
} else {
}
break;
}

var G__18369 = args18367.length;
switch (G__18369) {
case 1:
return sablono.core.week_field18366.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field18366.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18367.length)].join('')));

}
});

sablono.core.week_field18366.cljs$core$IFn$_invoke$arity$1 = (function (name__18125__auto__){
return sablono.core.week_field18366.cljs$core$IFn$_invoke$arity$2(name__18125__auto__,null);
});

sablono.core.week_field18366.cljs$core$IFn$_invoke$arity$2 = (function (name__18125__auto__,value__18126__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__18125__auto__,value__18126__auto__);
});

sablono.core.week_field18366.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field18366);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box18438 = (function sablono$core$check_box18438(var_args){
var args18439 = [];
var len__7484__auto___18442 = arguments.length;
var i__7485__auto___18443 = (0);
while(true){
if((i__7485__auto___18443 < len__7484__auto___18442)){
args18439.push((arguments[i__7485__auto___18443]));

var G__18444 = (i__7485__auto___18443 + (1));
i__7485__auto___18443 = G__18444;
continue;
} else {
}
break;
}

var G__18441 = args18439.length;
switch (G__18441) {
case 1:
return sablono.core.check_box18438.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box18438.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box18438.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18439.length)].join('')));

}
});

sablono.core.check_box18438.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box18438.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box18438.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box18438.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box18438.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box18438.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box18438);
/**
 * Creates a radio button.
 */
sablono.core.radio_button18446 = (function sablono$core$radio_button18446(var_args){
var args18447 = [];
var len__7484__auto___18450 = arguments.length;
var i__7485__auto___18451 = (0);
while(true){
if((i__7485__auto___18451 < len__7484__auto___18450)){
args18447.push((arguments[i__7485__auto___18451]));

var G__18452 = (i__7485__auto___18451 + (1));
i__7485__auto___18451 = G__18452;
continue;
} else {
}
break;
}

var G__18449 = args18447.length;
switch (G__18449) {
case 1:
return sablono.core.radio_button18446.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button18446.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button18446.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18447.length)].join('')));

}
});

sablono.core.radio_button18446.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button18446.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button18446.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button18446.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button18446.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button18446.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button18446);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options18454 = (function sablono$core$select_options18454(var_args){
var args18455 = [];
var len__7484__auto___18476 = arguments.length;
var i__7485__auto___18477 = (0);
while(true){
if((i__7485__auto___18477 < len__7484__auto___18476)){
args18455.push((arguments[i__7485__auto___18477]));

var G__18478 = (i__7485__auto___18477 + (1));
i__7485__auto___18477 = G__18478;
continue;
} else {
}
break;
}

var G__18457 = args18455.length;
switch (G__18457) {
case 1:
return sablono.core.select_options18454.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options18454.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18455.length)].join('')));

}
});

sablono.core.select_options18454.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options18454.cljs$core$IFn$_invoke$arity$2(coll,null);
});

sablono.core.select_options18454.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__7189__auto__ = (function sablono$core$iter__18458(s__18459){
return (new cljs.core.LazySeq(null,(function (){
var s__18459__$1 = s__18459;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__18459__$1);
if(temp__4657__auto__){
var s__18459__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18459__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__18459__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__18461 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__18460 = (0);
while(true){
if((i__18460 < size__7188__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__18460);
cljs.core.chunk_append(b__18461,((cljs.core.sequential_QMARK_(x))?(function (){var vec__18470 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18470,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18470,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18470,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,text], null),sablono.core.select_options18454.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,val,cljs.core.cst$kw$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.cst$kw$disabled,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)));

var G__18480 = (i__18460 + (1));
i__18460 = G__18480;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18461),sablono$core$iter__18458(cljs.core.chunk_rest(s__18459__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18461),null);
}
} else {
var x = cljs.core.first(s__18459__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__18473 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18473,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18473,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18473,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$label,text], null),sablono.core.select_options18454.cljs$core$IFn$_invoke$arity$2(val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$value,val,cljs.core.cst$kw$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,selected),cljs.core.cst$kw$disabled,disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$selected,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,selected)], null),x], null)),sablono$core$iter__18458(cljs.core.rest(s__18459__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__(coll);
});

sablono.core.select_options18454.cljs$lang$maxFixedArity = 2;


sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options18454);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down18481 = (function sablono$core$drop_down18481(var_args){
var args18482 = [];
var len__7484__auto___18485 = arguments.length;
var i__7485__auto___18486 = (0);
while(true){
if((i__7485__auto___18486 < len__7484__auto___18485)){
args18482.push((arguments[i__7485__auto___18486]));

var G__18487 = (i__7485__auto___18486 + (1));
i__7485__auto___18486 = G__18487;
continue;
} else {
}
break;
}

var G__18484 = args18482.length;
switch (G__18484) {
case 2:
return sablono.core.drop_down18481.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down18481.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18482.length)].join('')));

}
});

sablono.core.drop_down18481.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down18481.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down18481.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down18481.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down18481);
/**
 * Creates a text area element.
 */
sablono.core.text_area18489 = (function sablono$core$text_area18489(var_args){
var args18490 = [];
var len__7484__auto___18493 = arguments.length;
var i__7485__auto___18494 = (0);
while(true){
if((i__7485__auto___18494 < len__7484__auto___18493)){
args18490.push((arguments[i__7485__auto___18494]));

var G__18495 = (i__7485__auto___18494 + (1));
i__7485__auto___18494 = G__18495;
continue;
} else {
}
break;
}

var G__18492 = args18490.length;
switch (G__18492) {
case 1:
return sablono.core.text_area18489.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area18489.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18490.length)].join('')));

}
});

sablono.core.text_area18489.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area18489.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area18489.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area18489.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area18489);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label18497 = (function sablono$core$label18497(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label18497);
/**
 * Creates a submit button.
 */
sablono.core.submit_button18498 = (function sablono$core$submit_button18498(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button18498);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button18499 = (function sablono$core$reset_button18499(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button18499);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to18500 = (function sablono$core$form_to18500(var_args){
var args__7491__auto__ = [];
var len__7484__auto___18507 = arguments.length;
var i__7485__auto___18508 = (0);
while(true){
if((i__7485__auto___18508 < len__7484__auto___18507)){
args__7491__auto__.push((arguments[i__7485__auto___18508]));

var G__18509 = (i__7485__auto___18508 + (1));
i__7485__auto___18508 = G__18509;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to18500.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

sablono.core.form_to18500.cljs$core$IFn$_invoke$arity$variadic = (function (p__18503,body){
var vec__18504 = p__18503;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18504,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18504,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$2("_method",method_str) : sablono.core.hidden_field.call(null,"_method",method_str))], null)),body));
});

sablono.core.form_to18500.cljs$lang$maxFixedArity = (1);

sablono.core.form_to18500.cljs$lang$applyTo = (function (seq18501){
var G__18502 = cljs.core.first(seq18501);
var seq18501__$1 = cljs.core.next(seq18501);
return sablono.core.form_to18500.cljs$core$IFn$_invoke$arity$variadic(G__18502,seq18501__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to18500);
