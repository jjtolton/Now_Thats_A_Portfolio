// Compiled by ClojureScript 1.9.518 {}
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
var G__51262__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__51259 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__51260 = cljs.core.seq.call(null,vec__51259);
var first__51261 = cljs.core.first.call(null,seq__51260);
var seq__51260__$1 = cljs.core.next.call(null,seq__51260);
var tag = first__51261;
var body = seq__51260__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__51262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51263__i = 0, G__51263__a = new Array(arguments.length -  0);
while (G__51263__i < G__51263__a.length) {G__51263__a[G__51263__i] = arguments[G__51263__i + 0]; ++G__51263__i;}
  args = new cljs.core.IndexedSeq(G__51263__a,0);
} 
return G__51262__delegate.call(this,args);};
G__51262.cljs$lang$maxFixedArity = 0;
G__51262.cljs$lang$applyTo = (function (arglist__51264){
var args = cljs.core.seq(arglist__51264);
return G__51262__delegate(args);
});
G__51262.cljs$core$IFn$_invoke$arity$variadic = G__51262__delegate;
return G__51262;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__29611__auto__ = (function sablono$core$update_arglists_$_iter__51269(s__51270){
return (new cljs.core.LazySeq(null,(function (){
var s__51270__$1 = s__51270;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__51270__$1);
if(temp__6738__auto__){
var s__51270__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51270__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__51270__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__51272 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__51271 = (0);
while(true){
if((i__51271 < size__29610__auto__)){
var args = cljs.core._nth.call(null,c__29609__auto__,i__51271);
cljs.core.chunk_append.call(null,b__51272,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__51273 = (i__51271 + (1));
i__51271 = G__51273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51272),sablono$core$update_arglists_$_iter__51269.call(null,cljs.core.chunk_rest.call(null,s__51270__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51272),null);
}
} else {
var args = cljs.core.first.call(null,s__51270__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__51269.call(null,cljs.core.rest.call(null,s__51270__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29611__auto__.call(null,arglists);
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
var args__29977__auto__ = [];
var len__29970__auto___51279 = arguments.length;
var i__29971__auto___51280 = (0);
while(true){
if((i__29971__auto___51280 < len__29970__auto___51279)){
args__29977__auto__.push((arguments[i__29971__auto___51280]));

var G__51281 = (i__29971__auto___51280 + (1));
i__29971__auto___51280 = G__51281;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__29611__auto__ = (function sablono$core$iter__51275(s__51276){
return (new cljs.core.LazySeq(null,(function (){
var s__51276__$1 = s__51276;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__51276__$1);
if(temp__6738__auto__){
var s__51276__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51276__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__51276__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__51278 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__51277 = (0);
while(true){
if((i__51277 < size__29610__auto__)){
var style = cljs.core._nth.call(null,c__29609__auto__,i__51277);
cljs.core.chunk_append.call(null,b__51278,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__51282 = (i__51277 + (1));
i__51277 = G__51282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51278),sablono$core$iter__51275.call(null,cljs.core.chunk_rest.call(null,s__51276__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51278),null);
}
} else {
var style = cljs.core.first.call(null,s__51276__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__51275.call(null,cljs.core.rest.call(null,s__51276__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29611__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq51274){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51274));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to51283 = (function sablono$core$link_to51283(var_args){
var args__29977__auto__ = [];
var len__29970__auto___51286 = arguments.length;
var i__29971__auto___51287 = (0);
while(true){
if((i__29971__auto___51287 < len__29970__auto___51286)){
args__29977__auto__.push((arguments[i__29971__auto___51287]));

var G__51288 = (i__29971__auto___51287 + (1));
i__29971__auto___51287 = G__51288;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to51283.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

sablono.core.link_to51283.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to51283.cljs$lang$maxFixedArity = (1);

sablono.core.link_to51283.cljs$lang$applyTo = (function (seq51284){
var G__51285 = cljs.core.first.call(null,seq51284);
var seq51284__$1 = cljs.core.next.call(null,seq51284);
return sablono.core.link_to51283.cljs$core$IFn$_invoke$arity$variadic(G__51285,seq51284__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to51283);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to51289 = (function sablono$core$mail_to51289(var_args){
var args__29977__auto__ = [];
var len__29970__auto___51296 = arguments.length;
var i__29971__auto___51297 = (0);
while(true){
if((i__29971__auto___51297 < len__29970__auto___51296)){
args__29977__auto__.push((arguments[i__29971__auto___51297]));

var G__51298 = (i__29971__auto___51297 + (1));
i__29971__auto___51297 = G__51298;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to51289.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

sablono.core.mail_to51289.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__51292){
var vec__51293 = p__51292;
var content = cljs.core.nth.call(null,vec__51293,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("mailto:"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__28749__auto__ = content;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to51289.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to51289.cljs$lang$applyTo = (function (seq51290){
var G__51291 = cljs.core.first.call(null,seq51290);
var seq51290__$1 = cljs.core.next.call(null,seq51290);
return sablono.core.mail_to51289.cljs$core$IFn$_invoke$arity$variadic(G__51291,seq51290__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to51289);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list51299 = (function sablono$core$unordered_list51299(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__29611__auto__ = (function sablono$core$unordered_list51299_$_iter__51304(s__51305){
return (new cljs.core.LazySeq(null,(function (){
var s__51305__$1 = s__51305;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__51305__$1);
if(temp__6738__auto__){
var s__51305__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51305__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__51305__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__51307 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__51306 = (0);
while(true){
if((i__51306 < size__29610__auto__)){
var x = cljs.core._nth.call(null,c__29609__auto__,i__51306);
cljs.core.chunk_append.call(null,b__51307,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__51308 = (i__51306 + (1));
i__51306 = G__51308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51307),sablono$core$unordered_list51299_$_iter__51304.call(null,cljs.core.chunk_rest.call(null,s__51305__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51307),null);
}
} else {
var x = cljs.core.first.call(null,s__51305__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list51299_$_iter__51304.call(null,cljs.core.rest.call(null,s__51305__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29611__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list51299);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list51309 = (function sablono$core$ordered_list51309(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__29611__auto__ = (function sablono$core$ordered_list51309_$_iter__51314(s__51315){
return (new cljs.core.LazySeq(null,(function (){
var s__51315__$1 = s__51315;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__51315__$1);
if(temp__6738__auto__){
var s__51315__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51315__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__51315__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__51317 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__51316 = (0);
while(true){
if((i__51316 < size__29610__auto__)){
var x = cljs.core._nth.call(null,c__29609__auto__,i__51316);
cljs.core.chunk_append.call(null,b__51317,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__51318 = (i__51316 + (1));
i__51316 = G__51318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51317),sablono$core$ordered_list51309_$_iter__51314.call(null,cljs.core.chunk_rest.call(null,s__51315__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51317),null);
}
} else {
var x = cljs.core.first.call(null,s__51315__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list51309_$_iter__51314.call(null,cljs.core.rest.call(null,s__51315__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29611__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list51309);
/**
 * Create an image element.
 */
sablono.core.image51319 = (function sablono$core$image51319(var_args){
var args51320 = [];
var len__29970__auto___51323 = arguments.length;
var i__29971__auto___51324 = (0);
while(true){
if((i__29971__auto___51324 < len__29970__auto___51323)){
args51320.push((arguments[i__29971__auto___51324]));

var G__51325 = (i__29971__auto___51324 + (1));
i__29971__auto___51324 = G__51325;
continue;
} else {
}
break;
}

var G__51322 = args51320.length;
switch (G__51322) {
case 1:
return sablono.core.image51319.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image51319.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51320.length)].join('')));

}
});

sablono.core.image51319.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image51319.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image51319.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image51319);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__51327_SHARP_,p2__51328_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51327_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__51328_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__51329_SHARP_,p2__51330_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51329_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__51330_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field51331 = (function sablono$core$color_field51331(var_args){
var args51332 = [];
var len__29970__auto___51399 = arguments.length;
var i__29971__auto___51400 = (0);
while(true){
if((i__29971__auto___51400 < len__29970__auto___51399)){
args51332.push((arguments[i__29971__auto___51400]));

var G__51401 = (i__29971__auto___51400 + (1));
i__29971__auto___51400 = G__51401;
continue;
} else {
}
break;
}

var G__51334 = args51332.length;
switch (G__51334) {
case 1:
return sablono.core.color_field51331.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field51331.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51332.length)].join('')));

}
});

sablono.core.color_field51331.cljs$core$IFn$_invoke$arity$1 = (function (name__51170__auto__){
return sablono.core.color_field51331.call(null,name__51170__auto__,null);
});

sablono.core.color_field51331.cljs$core$IFn$_invoke$arity$2 = (function (name__51170__auto__,value__51171__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__51170__auto__,value__51171__auto__);
});

sablono.core.color_field51331.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field51331);

/**
 * Creates a date input field.
 */
sablono.core.date_field51335 = (function sablono$core$date_field51335(var_args){
var args51336 = [];
var len__29970__auto___51403 = arguments.length;
var i__29971__auto___51404 = (0);
while(true){
if((i__29971__auto___51404 < len__29970__auto___51403)){
args51336.push((arguments[i__29971__auto___51404]));

var G__51405 = (i__29971__auto___51404 + (1));
i__29971__auto___51404 = G__51405;
continue;
} else {
}
break;
}

var G__51338 = args51336.length;
switch (G__51338) {
case 1:
return sablono.core.date_field51335.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field51335.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51336.length)].join('')));

}
});

sablono.core.date_field51335.cljs$core$IFn$_invoke$arity$1 = (function (name__51170__auto__){
return sablono.core.date_field51335.call(null,name__51170__auto__,null);
});

sablono.core.date_field51335.cljs$core$IFn$_invoke$arity$2 = (function (name__51170__auto__,value__51171__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__51170__auto__,value__51171__auto__);
});

sablono.core.date_field51335.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field51335);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field51339 = (function sablono$core$datetime_field51339(var_args){
var args51340 = [];
var len__29970__auto___51407 = arguments.length;
var i__29971__auto___51408 = (0);
while(true){
if((i__29971__auto___51408 < len__29970__auto___51407)){
args51340.push((arguments[i__29971__auto___51408]));

var G__51409 = (i__29971__auto___51408 + (1));
i__29971__auto___51408 = G__51409;
continue;
} else {
}
break;
}

var G__51342 = args51340.length;
switch (G__51342) {
case 1:
return sablono.core.datetime_field51339.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field51339.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51340.length)].join('')));

}
});

sablono.core.datetime_field51339.cljs$core$IFn$_invoke$arity$1 = (function (name__51170__auto__){
return sablono.core.datetime_field51339.call(null,name__51170__auto__,null);
});

sablono.core.datetime_field51339.cljs$core$IFn$_invoke$arity$2 = (function (name__51170__auto__,value__51171__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__51170__auto__,value__51171__auto__);
});

sablono.core.datetime_field51339.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field51339);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field51343 = (function sablono$core$datetime_local_field51343(var_args){
var args51344 = [];
var len__29970__auto___51411 = arguments.length;
var i__29971__auto___51412 = (0);
while(true){
if((i__29971__auto___51412 < len__29970__auto___51411)){
args51344.push((arguments[i__29971__auto___51412]));

var G__51413 = (i__29971__auto___51412 + (1));
i__29971__auto___51412 = G__51413;
continue;
} else {
}
break;
}

var G__51346 = args51344.length;
switch (G__51346) {
case 1:
return sablono.core.datetime_local_field51343.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field51343.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51344.length)].join('')));

}
});

sablono.core.datetime_local_field51343.cljs$core$IFn$_invoke$arity$1 = (function (name__51170__auto__){
return sablono.core.datetime_local_field51343.call(null,name__51170__auto__,null);
});

sablono.core.datetime_local_field51343.cljs$core$IFn$_invoke$arity$2 = (function (name__51170__auto__,value__51171__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__51170__auto__,value__51171__auto__);
});

sablono.core.datetime_local_field51343.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field51343);

/**
 * Creates a email input field.
 */
sablono.core.email_field51347 = (function sablono$core$email_field51347(var_args){
var args51348 = [];
var len__29970__auto___51415 = arguments.length;
var i__29971__auto___51416 = (0);
while(true){
if((i__29971__auto___51416 < len__29970__auto___51415)){
args51348.push((arguments[i__29971__auto___51416]));

var G__51417 = (i__29971__auto___51416 + (1));
i__29971__auto___51416 = G__51417;
continue;
} else {
}
break;
}

var G__51350 = args51348.length;
switch (G__51350) {
case 1:
return sablono.core.email_field51347.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field51347.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51348.length)].join('')));

}
});

sablono.core.email_field51347.cljs$core$IFn$_invoke$arity$1 = (function (name__51170__auto__){
return sablono.core.email_field51347.call(null,name__51170__auto__,null);
});

sablono.core.email_field51347.cljs$core$IFn$_invoke$arity$2 = (function (name__51170__auto__,value__51171__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__51170__auto__,value__51171__auto__);
});

sablono.core.email_field51347.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field51347);

/**
 * Creates a file input field.
 */
sablono.core.file_field51351 = (function sablono$core$file_field51351(var_args){
var args51352 = [];
var len__29970__auto___51419 = arguments.length;
var i__29971__auto___51420 = (0);
while(true){
if((i__29971__auto___51420 < len__29970__auto___51419)){
args51352.push((arguments[i__29971__auto___51420]));

var G__51421 = (i__29971__auto___51420 + (1));
i__29971__auto___51420 = G__51421;
continue;
} else {
}
break;
}

var G__51354 = args51352.length;
switch (G__51354) {
case 1:
return sablono.core.file_field51351.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field51351.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51352.length)].join('')));

}
});

sablono.core.file_field51351.cljs$core$IFn$_invoke$arity$1 = (function (name__51170__auto__){
return sablono.core.file_field51351.call(null,name__51170__auto__,null);
});

sablono.core.file_field51351.cljs$core$IFn$_invoke$arity$2 = (function (name__51170__auto__,value__51171__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__51170__auto__,value__51171__auto__);
});

sablono.core.file_field51351.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field51351);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field51355 = (function sablono$core$hidden_field51355(var_args){
var args51356 = [];
var len__29970__auto___51423 = arguments.length;
var i__29971__auto___51424 = (0);
while(true){
if((i__29971__auto___51424 < len__29970__auto___51423)){
args51356.push((arguments[i__29971__auto___51424]));

var G__51425 = (i__29971__auto___51424 + (1));
i__29971__auto___51424 = G__51425;
continue;
} else {
}
break;
}

var G__51358 = args51356.length;
switch (G__51358) {
case 1:
return sablono.core.hidden_field51355.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field51355.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51356.length)].join('')));

}
});

sablono.core.hidden_field51355.cljs$core$IFn$_invoke$arity$1 = (function (name__51170__auto__){
return sablono.core.hidden_field51355.call(null,name__51170__auto__,null);
});

sablono.core.hidden_field51355.cljs$core$IFn$_invoke$arity$2 = (function (name__51170__auto__,value__51171__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__51170__auto__,value__51171__auto__);
});

sablono.core.hidden_field51355.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field51355);

/**
 * Creates a month input field.
 */
sablono.core.month_field51359 = (function sablono$core$month_field51359(var_args){
var args51360 = [];
var len__29970__auto___51427 = arguments.length;
var i__29971__auto___51428 = (0);
while(true){
if((i__29971__auto___51428 < len__29970__auto___51427)){
args51360.push((arguments[i__29971__auto___51428]));

var G__51429 = (i__29971__auto___51428 + (1));
i__29971__auto___51428 = G__51429;
continue;
} else {
}
break;
}

var G__51362 = args51360.length;
switch (G__51362) {
case 1:
return sablono.core.month_field51359.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field51359.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51360.length)].join('')));

}
});

sablono.core.month_field51359.cljs$core$IFn$_invoke$arity$1 = (function (name__51170__auto__){
return sablono.core.month_field51359.call(null,name__51170__auto__,null);
});

sablono.core.month_field51359.cljs$core$IFn$_invoke$arity$2 = (function (name__51170__auto__,value__51171__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__51170__auto__,value__51171__auto__);
});

sablono.core.month_field51359.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field51359);

/**
 * Creates a number input field.
 */
sablono.core.number_field51363 = (function sablono$core$number_field51363(var_args){
var args51364 = [];
var len__29970__auto___51431 = arguments.length;
var i__29971__auto___51432 = (0);
while(true){
if((i__29971__auto___51432 < len__29970__auto___51431)){
args51364.push((arguments[i__29971__auto___51432]));

var G__51433 = (i__29971__auto___51432 + (1));
i__29971__auto___51432 = G__51433;
continue;
} else {
}
break;
}

var G__51366 = args51364.length;
switch (G__51366) {
case 1:
return sablono.core.number_field51363.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field51363.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51364.length)].join('')));

}
});

sablono.core.number_field51363.cljs$core$IFn$_invoke$arity$1 = (function (name__51170__auto__){
return sablono.core.number_field51363.call(null,name__51170__auto__,null);
});

sablono.core.number_field51363.cljs$core$IFn$_invoke$arity$2 = (function (name__51170__auto__,value__51171__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__51170__auto__,value__51171__auto__);
});

sablono.core.number_field51363.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field51363);

/**
 * Creates a password input field.
 */
sablono.core.password_field51367 = (function sablono$core$password_field51367(var_args){
var args51368 = [];
var len__29970__auto___51435 = arguments.length;
var i__29971__auto___51436 = (0);
while(true){
if((i__29971__auto___51436 < len__29970__auto___51435)){
args51368.push((arguments[i__29971__auto___51436]));

var G__51437 = (i__29971__auto___51436 + (1));
i__29971__auto___51436 = G__51437;
continue;
} else {
}
break;
}

var G__51370 = args51368.length;
switch (G__51370) {
case 1:
return sablono.core.password_field51367.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field51367.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51368.length)].join('')));

}
});

sablono.core.password_field51367.cljs$core$IFn$_invoke$arity$1 = (function (name__51170__auto__){
return sablono.core.password_field51367.call(null,name__51170__auto__,null);
});

sablono.core.password_field51367.cljs$core$IFn$_invoke$arity$2 = (function (name__51170__auto__,value__51171__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__51170__auto__,value__51171__auto__);
});

sablono.core.password_field51367.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field51367);

/**
 * Creates a range input field.
 */
sablono.core.range_field51371 = (function sablono$core$range_field51371(var_args){
var args51372 = [];
var len__29970__auto___51439 = arguments.length;
var i__29971__auto___51440 = (0);
while(true){
if((i__29971__auto___51440 < len__29970__auto___51439)){
args51372.push((arguments[i__29971__auto___51440]));

var G__51441 = (i__29971__auto___51440 + (1));
i__29971__auto___51440 = G__51441;
continue;
} else {
}
break;
}

var G__51374 = args51372.length;
switch (G__51374) {
case 1:
return sablono.core.range_field51371.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field51371.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51372.length)].join('')));

}
});

sablono.core.range_field51371.cljs$core$IFn$_invoke$arity$1 = (function (name__51170__auto__){
return sablono.core.range_field51371.call(null,name__51170__auto__,null);
});

sablono.core.range_field51371.cljs$core$IFn$_invoke$arity$2 = (function (name__51170__auto__,value__51171__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__51170__auto__,value__51171__auto__);
});

sablono.core.range_field51371.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field51371);

/**
 * Creates a search input field.
 */
sablono.core.search_field51375 = (function sablono$core$search_field51375(var_args){
var args51376 = [];
var len__29970__auto___51443 = arguments.length;
var i__29971__auto___51444 = (0);
while(true){
if((i__29971__auto___51444 < len__29970__auto___51443)){
args51376.push((arguments[i__29971__auto___51444]));

var G__51445 = (i__29971__auto___51444 + (1));
i__29971__auto___51444 = G__51445;
continue;
} else {
}
break;
}

var G__51378 = args51376.length;
switch (G__51378) {
case 1:
return sablono.core.search_field51375.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field51375.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51376.length)].join('')));

}
});

sablono.core.search_field51375.cljs$core$IFn$_invoke$arity$1 = (function (name__51170__auto__){
return sablono.core.search_field51375.call(null,name__51170__auto__,null);
});

sablono.core.search_field51375.cljs$core$IFn$_invoke$arity$2 = (function (name__51170__auto__,value__51171__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__51170__auto__,value__51171__auto__);
});

sablono.core.search_field51375.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field51375);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field51379 = (function sablono$core$tel_field51379(var_args){
var args51380 = [];
var len__29970__auto___51447 = arguments.length;
var i__29971__auto___51448 = (0);
while(true){
if((i__29971__auto___51448 < len__29970__auto___51447)){
args51380.push((arguments[i__29971__auto___51448]));

var G__51449 = (i__29971__auto___51448 + (1));
i__29971__auto___51448 = G__51449;
continue;
} else {
}
break;
}

var G__51382 = args51380.length;
switch (G__51382) {
case 1:
return sablono.core.tel_field51379.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field51379.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51380.length)].join('')));

}
});

sablono.core.tel_field51379.cljs$core$IFn$_invoke$arity$1 = (function (name__51170__auto__){
return sablono.core.tel_field51379.call(null,name__51170__auto__,null);
});

sablono.core.tel_field51379.cljs$core$IFn$_invoke$arity$2 = (function (name__51170__auto__,value__51171__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__51170__auto__,value__51171__auto__);
});

sablono.core.tel_field51379.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field51379);

/**
 * Creates a text input field.
 */
sablono.core.text_field51383 = (function sablono$core$text_field51383(var_args){
var args51384 = [];
var len__29970__auto___51451 = arguments.length;
var i__29971__auto___51452 = (0);
while(true){
if((i__29971__auto___51452 < len__29970__auto___51451)){
args51384.push((arguments[i__29971__auto___51452]));

var G__51453 = (i__29971__auto___51452 + (1));
i__29971__auto___51452 = G__51453;
continue;
} else {
}
break;
}

var G__51386 = args51384.length;
switch (G__51386) {
case 1:
return sablono.core.text_field51383.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field51383.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51384.length)].join('')));

}
});

sablono.core.text_field51383.cljs$core$IFn$_invoke$arity$1 = (function (name__51170__auto__){
return sablono.core.text_field51383.call(null,name__51170__auto__,null);
});

sablono.core.text_field51383.cljs$core$IFn$_invoke$arity$2 = (function (name__51170__auto__,value__51171__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__51170__auto__,value__51171__auto__);
});

sablono.core.text_field51383.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field51383);

/**
 * Creates a time input field.
 */
sablono.core.time_field51387 = (function sablono$core$time_field51387(var_args){
var args51388 = [];
var len__29970__auto___51455 = arguments.length;
var i__29971__auto___51456 = (0);
while(true){
if((i__29971__auto___51456 < len__29970__auto___51455)){
args51388.push((arguments[i__29971__auto___51456]));

var G__51457 = (i__29971__auto___51456 + (1));
i__29971__auto___51456 = G__51457;
continue;
} else {
}
break;
}

var G__51390 = args51388.length;
switch (G__51390) {
case 1:
return sablono.core.time_field51387.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field51387.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51388.length)].join('')));

}
});

sablono.core.time_field51387.cljs$core$IFn$_invoke$arity$1 = (function (name__51170__auto__){
return sablono.core.time_field51387.call(null,name__51170__auto__,null);
});

sablono.core.time_field51387.cljs$core$IFn$_invoke$arity$2 = (function (name__51170__auto__,value__51171__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__51170__auto__,value__51171__auto__);
});

sablono.core.time_field51387.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field51387);

/**
 * Creates a url input field.
 */
sablono.core.url_field51391 = (function sablono$core$url_field51391(var_args){
var args51392 = [];
var len__29970__auto___51459 = arguments.length;
var i__29971__auto___51460 = (0);
while(true){
if((i__29971__auto___51460 < len__29970__auto___51459)){
args51392.push((arguments[i__29971__auto___51460]));

var G__51461 = (i__29971__auto___51460 + (1));
i__29971__auto___51460 = G__51461;
continue;
} else {
}
break;
}

var G__51394 = args51392.length;
switch (G__51394) {
case 1:
return sablono.core.url_field51391.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field51391.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51392.length)].join('')));

}
});

sablono.core.url_field51391.cljs$core$IFn$_invoke$arity$1 = (function (name__51170__auto__){
return sablono.core.url_field51391.call(null,name__51170__auto__,null);
});

sablono.core.url_field51391.cljs$core$IFn$_invoke$arity$2 = (function (name__51170__auto__,value__51171__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__51170__auto__,value__51171__auto__);
});

sablono.core.url_field51391.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field51391);

/**
 * Creates a week input field.
 */
sablono.core.week_field51395 = (function sablono$core$week_field51395(var_args){
var args51396 = [];
var len__29970__auto___51463 = arguments.length;
var i__29971__auto___51464 = (0);
while(true){
if((i__29971__auto___51464 < len__29970__auto___51463)){
args51396.push((arguments[i__29971__auto___51464]));

var G__51465 = (i__29971__auto___51464 + (1));
i__29971__auto___51464 = G__51465;
continue;
} else {
}
break;
}

var G__51398 = args51396.length;
switch (G__51398) {
case 1:
return sablono.core.week_field51395.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field51395.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51396.length)].join('')));

}
});

sablono.core.week_field51395.cljs$core$IFn$_invoke$arity$1 = (function (name__51170__auto__){
return sablono.core.week_field51395.call(null,name__51170__auto__,null);
});

sablono.core.week_field51395.cljs$core$IFn$_invoke$arity$2 = (function (name__51170__auto__,value__51171__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__51170__auto__,value__51171__auto__);
});

sablono.core.week_field51395.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field51395);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box51467 = (function sablono$core$check_box51467(var_args){
var args51468 = [];
var len__29970__auto___51471 = arguments.length;
var i__29971__auto___51472 = (0);
while(true){
if((i__29971__auto___51472 < len__29970__auto___51471)){
args51468.push((arguments[i__29971__auto___51472]));

var G__51473 = (i__29971__auto___51472 + (1));
i__29971__auto___51472 = G__51473;
continue;
} else {
}
break;
}

var G__51470 = args51468.length;
switch (G__51470) {
case 1:
return sablono.core.check_box51467.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box51467.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box51467.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51468.length)].join('')));

}
});

sablono.core.check_box51467.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box51467.call(null,name,null);
});

sablono.core.check_box51467.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box51467.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box51467.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box51467.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box51467);
/**
 * Creates a radio button.
 */
sablono.core.radio_button51475 = (function sablono$core$radio_button51475(var_args){
var args51476 = [];
var len__29970__auto___51479 = arguments.length;
var i__29971__auto___51480 = (0);
while(true){
if((i__29971__auto___51480 < len__29970__auto___51479)){
args51476.push((arguments[i__29971__auto___51480]));

var G__51481 = (i__29971__auto___51480 + (1));
i__29971__auto___51480 = G__51481;
continue;
} else {
}
break;
}

var G__51478 = args51476.length;
switch (G__51478) {
case 1:
return sablono.core.radio_button51475.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button51475.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button51475.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51476.length)].join('')));

}
});

sablono.core.radio_button51475.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button51475.call(null,group,null);
});

sablono.core.radio_button51475.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button51475.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button51475.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button51475.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button51475);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options51483 = (function sablono$core$select_options51483(var_args){
var args51484 = [];
var len__29970__auto___51503 = arguments.length;
var i__29971__auto___51504 = (0);
while(true){
if((i__29971__auto___51504 < len__29970__auto___51503)){
args51484.push((arguments[i__29971__auto___51504]));

var G__51505 = (i__29971__auto___51504 + (1));
i__29971__auto___51504 = G__51505;
continue;
} else {
}
break;
}

var G__51486 = args51484.length;
switch (G__51486) {
case 1:
return sablono.core.select_options51483.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options51483.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51484.length)].join('')));

}
});

sablono.core.select_options51483.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options51483.call(null,coll,null);
});

sablono.core.select_options51483.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__29611__auto__ = (function sablono$core$iter__51487(s__51488){
return (new cljs.core.LazySeq(null,(function (){
var s__51488__$1 = s__51488;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__51488__$1);
if(temp__6738__auto__){
var s__51488__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__51488__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__51488__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__51490 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__51489 = (0);
while(true){
if((i__51489 < size__29610__auto__)){
var x = cljs.core._nth.call(null,c__29609__auto__,i__51489);
cljs.core.chunk_append.call(null,b__51490,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__51497 = x;
var text = cljs.core.nth.call(null,vec__51497,(0),null);
var val = cljs.core.nth.call(null,vec__51497,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__51497,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options51483.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__51507 = (i__51489 + (1));
i__51489 = G__51507;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51490),sablono$core$iter__51487.call(null,cljs.core.chunk_rest.call(null,s__51488__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51490),null);
}
} else {
var x = cljs.core.first.call(null,s__51488__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__51500 = x;
var text = cljs.core.nth.call(null,vec__51500,(0),null);
var val = cljs.core.nth.call(null,vec__51500,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__51500,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options51483.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__51487.call(null,cljs.core.rest.call(null,s__51488__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29611__auto__.call(null,coll);
});

sablono.core.select_options51483.cljs$lang$maxFixedArity = 2;


sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options51483);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down51508 = (function sablono$core$drop_down51508(var_args){
var args51509 = [];
var len__29970__auto___51512 = arguments.length;
var i__29971__auto___51513 = (0);
while(true){
if((i__29971__auto___51513 < len__29970__auto___51512)){
args51509.push((arguments[i__29971__auto___51513]));

var G__51514 = (i__29971__auto___51513 + (1));
i__29971__auto___51513 = G__51514;
continue;
} else {
}
break;
}

var G__51511 = args51509.length;
switch (G__51511) {
case 2:
return sablono.core.drop_down51508.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down51508.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51509.length)].join('')));

}
});

sablono.core.drop_down51508.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down51508.call(null,name,options,null);
});

sablono.core.drop_down51508.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down51508.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down51508);
/**
 * Creates a text area element.
 */
sablono.core.text_area51516 = (function sablono$core$text_area51516(var_args){
var args51517 = [];
var len__29970__auto___51520 = arguments.length;
var i__29971__auto___51521 = (0);
while(true){
if((i__29971__auto___51521 < len__29970__auto___51520)){
args51517.push((arguments[i__29971__auto___51521]));

var G__51522 = (i__29971__auto___51521 + (1));
i__29971__auto___51521 = G__51522;
continue;
} else {
}
break;
}

var G__51519 = args51517.length;
switch (G__51519) {
case 1:
return sablono.core.text_area51516.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area51516.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51517.length)].join('')));

}
});

sablono.core.text_area51516.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area51516.call(null,name,null);
});

sablono.core.text_area51516.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area51516.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area51516);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label51524 = (function sablono$core$label51524(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label51524);
/**
 * Creates a submit button.
 */
sablono.core.submit_button51525 = (function sablono$core$submit_button51525(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button51525);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button51526 = (function sablono$core$reset_button51526(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button51526);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to51527 = (function sablono$core$form_to51527(var_args){
var args__29977__auto__ = [];
var len__29970__auto___51534 = arguments.length;
var i__29971__auto___51535 = (0);
while(true){
if((i__29971__auto___51535 < len__29970__auto___51534)){
args__29977__auto__.push((arguments[i__29971__auto___51535]));

var G__51536 = (i__29971__auto___51535 + (1));
i__29971__auto___51535 = G__51536;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to51527.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

sablono.core.form_to51527.cljs$core$IFn$_invoke$arity$variadic = (function (p__51530,body){
var vec__51531 = p__51530;
var method = cljs.core.nth.call(null,vec__51531,(0),null);
var action = cljs.core.nth.call(null,vec__51531,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to51527.cljs$lang$maxFixedArity = (1);

sablono.core.form_to51527.cljs$lang$applyTo = (function (seq51528){
var G__51529 = cljs.core.first.call(null,seq51528);
var seq51528__$1 = cljs.core.next.call(null,seq51528);
return sablono.core.form_to51527.cljs$core$IFn$_invoke$arity$variadic(G__51529,seq51528__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to51527);

//# sourceMappingURL=core.js.map