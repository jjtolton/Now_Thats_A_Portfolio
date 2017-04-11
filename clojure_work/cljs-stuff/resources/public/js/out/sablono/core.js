// Compiled by ClojureScript 1.9.229 {}
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
var G__13384__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__13381 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__13382 = cljs.core.seq.call(null,vec__13381);
var first__13383 = cljs.core.first.call(null,seq__13382);
var seq__13382__$1 = cljs.core.next.call(null,seq__13382);
var tag = first__13383;
var body = seq__13382__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__13384 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13385__i = 0, G__13385__a = new Array(arguments.length -  0);
while (G__13385__i < G__13385__a.length) {G__13385__a[G__13385__i] = arguments[G__13385__i + 0]; ++G__13385__i;}
  args = new cljs.core.IndexedSeq(G__13385__a,0);
} 
return G__13384__delegate.call(this,args);};
G__13384.cljs$lang$maxFixedArity = 0;
G__13384.cljs$lang$applyTo = (function (arglist__13386){
var args = cljs.core.seq(arglist__13386);
return G__13384__delegate(args);
});
G__13384.cljs$core$IFn$_invoke$arity$variadic = G__13384__delegate;
return G__13384;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__7189__auto__ = (function sablono$core$update_arglists_$_iter__13391(s__13392){
return (new cljs.core.LazySeq(null,(function (){
var s__13392__$1 = s__13392;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13392__$1);
if(temp__4657__auto__){
var s__13392__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13392__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__13392__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__13394 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__13393 = (0);
while(true){
if((i__13393 < size__7188__auto__)){
var args = cljs.core._nth.call(null,c__7187__auto__,i__13393);
cljs.core.chunk_append.call(null,b__13394,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__13395 = (i__13393 + (1));
i__13393 = G__13395;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13394),sablono$core$update_arglists_$_iter__13391.call(null,cljs.core.chunk_rest.call(null,s__13392__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13394),null);
}
} else {
var args = cljs.core.first.call(null,s__13392__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__13391.call(null,cljs.core.rest.call(null,s__13392__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__.call(null,arglists);
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
var len__7484__auto___13401 = arguments.length;
var i__7485__auto___13402 = (0);
while(true){
if((i__7485__auto___13402 < len__7484__auto___13401)){
args__7491__auto__.push((arguments[i__7485__auto___13402]));

var G__13403 = (i__7485__auto___13402 + (1));
i__7485__auto___13402 = G__13403;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__7189__auto__ = (function sablono$core$iter__13397(s__13398){
return (new cljs.core.LazySeq(null,(function (){
var s__13398__$1 = s__13398;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13398__$1);
if(temp__4657__auto__){
var s__13398__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13398__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__13398__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__13400 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__13399 = (0);
while(true){
if((i__13399 < size__7188__auto__)){
var style = cljs.core._nth.call(null,c__7187__auto__,i__13399);
cljs.core.chunk_append.call(null,b__13400,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__13404 = (i__13399 + (1));
i__13399 = G__13404;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13400),sablono$core$iter__13397.call(null,cljs.core.chunk_rest.call(null,s__13398__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13400),null);
}
} else {
var style = cljs.core.first.call(null,s__13398__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__13397.call(null,cljs.core.rest.call(null,s__13398__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq13396){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13396));
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
sablono.core.link_to13405 = (function sablono$core$link_to13405(var_args){
var args__7491__auto__ = [];
var len__7484__auto___13408 = arguments.length;
var i__7485__auto___13409 = (0);
while(true){
if((i__7485__auto___13409 < len__7484__auto___13408)){
args__7491__auto__.push((arguments[i__7485__auto___13409]));

var G__13410 = (i__7485__auto___13409 + (1));
i__7485__auto___13409 = G__13410;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to13405.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

sablono.core.link_to13405.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to13405.cljs$lang$maxFixedArity = (1);

sablono.core.link_to13405.cljs$lang$applyTo = (function (seq13406){
var G__13407 = cljs.core.first.call(null,seq13406);
var seq13406__$1 = cljs.core.next.call(null,seq13406);
return sablono.core.link_to13405.cljs$core$IFn$_invoke$arity$variadic(G__13407,seq13406__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to13405);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to13411 = (function sablono$core$mail_to13411(var_args){
var args__7491__auto__ = [];
var len__7484__auto___13418 = arguments.length;
var i__7485__auto___13419 = (0);
while(true){
if((i__7485__auto___13419 < len__7484__auto___13418)){
args__7491__auto__.push((arguments[i__7485__auto___13419]));

var G__13420 = (i__7485__auto___13419 + (1));
i__7485__auto___13419 = G__13420;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to13411.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

sablono.core.mail_to13411.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__13414){
var vec__13415 = p__13414;
var content = cljs.core.nth.call(null,vec__13415,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__6409__auto__ = content;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to13411.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to13411.cljs$lang$applyTo = (function (seq13412){
var G__13413 = cljs.core.first.call(null,seq13412);
var seq13412__$1 = cljs.core.next.call(null,seq13412);
return sablono.core.mail_to13411.cljs$core$IFn$_invoke$arity$variadic(G__13413,seq13412__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to13411);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list13421 = (function sablono$core$unordered_list13421(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__7189__auto__ = (function sablono$core$unordered_list13421_$_iter__13426(s__13427){
return (new cljs.core.LazySeq(null,(function (){
var s__13427__$1 = s__13427;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13427__$1);
if(temp__4657__auto__){
var s__13427__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13427__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__13427__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__13429 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__13428 = (0);
while(true){
if((i__13428 < size__7188__auto__)){
var x = cljs.core._nth.call(null,c__7187__auto__,i__13428);
cljs.core.chunk_append.call(null,b__13429,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__13430 = (i__13428 + (1));
i__13428 = G__13430;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13429),sablono$core$unordered_list13421_$_iter__13426.call(null,cljs.core.chunk_rest.call(null,s__13427__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13429),null);
}
} else {
var x = cljs.core.first.call(null,s__13427__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list13421_$_iter__13426.call(null,cljs.core.rest.call(null,s__13427__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list13421);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list13431 = (function sablono$core$ordered_list13431(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__7189__auto__ = (function sablono$core$ordered_list13431_$_iter__13436(s__13437){
return (new cljs.core.LazySeq(null,(function (){
var s__13437__$1 = s__13437;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13437__$1);
if(temp__4657__auto__){
var s__13437__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13437__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__13437__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__13439 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__13438 = (0);
while(true){
if((i__13438 < size__7188__auto__)){
var x = cljs.core._nth.call(null,c__7187__auto__,i__13438);
cljs.core.chunk_append.call(null,b__13439,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__13440 = (i__13438 + (1));
i__13438 = G__13440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13439),sablono$core$ordered_list13431_$_iter__13436.call(null,cljs.core.chunk_rest.call(null,s__13437__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13439),null);
}
} else {
var x = cljs.core.first.call(null,s__13437__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list13431_$_iter__13436.call(null,cljs.core.rest.call(null,s__13437__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list13431);
/**
 * Create an image element.
 */
sablono.core.image13441 = (function sablono$core$image13441(var_args){
var args13442 = [];
var len__7484__auto___13445 = arguments.length;
var i__7485__auto___13446 = (0);
while(true){
if((i__7485__auto___13446 < len__7484__auto___13445)){
args13442.push((arguments[i__7485__auto___13446]));

var G__13447 = (i__7485__auto___13446 + (1));
i__7485__auto___13446 = G__13447;
continue;
} else {
}
break;
}

var G__13444 = args13442.length;
switch (G__13444) {
case 1:
return sablono.core.image13441.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image13441.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13442.length)].join('')));

}
});

sablono.core.image13441.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image13441.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image13441.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image13441);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__13449_SHARP_,p2__13450_SHARP_){
return [cljs.core.str(p1__13449_SHARP_),cljs.core.str("["),cljs.core.str(p2__13450_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__13451_SHARP_,p2__13452_SHARP_){
return [cljs.core.str(p1__13451_SHARP_),cljs.core.str("-"),cljs.core.str(p2__13452_SHARP_)].join('');
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
sablono.core.color_field13453 = (function sablono$core$color_field13453(var_args){
var args13454 = [];
var len__7484__auto___13521 = arguments.length;
var i__7485__auto___13522 = (0);
while(true){
if((i__7485__auto___13522 < len__7484__auto___13521)){
args13454.push((arguments[i__7485__auto___13522]));

var G__13523 = (i__7485__auto___13522 + (1));
i__7485__auto___13522 = G__13523;
continue;
} else {
}
break;
}

var G__13456 = args13454.length;
switch (G__13456) {
case 1:
return sablono.core.color_field13453.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field13453.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13454.length)].join('')));

}
});

sablono.core.color_field13453.cljs$core$IFn$_invoke$arity$1 = (function (name__13298__auto__){
return sablono.core.color_field13453.call(null,name__13298__auto__,null);
});

sablono.core.color_field13453.cljs$core$IFn$_invoke$arity$2 = (function (name__13298__auto__,value__13299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__13298__auto__,value__13299__auto__);
});

sablono.core.color_field13453.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field13453);

/**
 * Creates a date input field.
 */
sablono.core.date_field13457 = (function sablono$core$date_field13457(var_args){
var args13458 = [];
var len__7484__auto___13525 = arguments.length;
var i__7485__auto___13526 = (0);
while(true){
if((i__7485__auto___13526 < len__7484__auto___13525)){
args13458.push((arguments[i__7485__auto___13526]));

var G__13527 = (i__7485__auto___13526 + (1));
i__7485__auto___13526 = G__13527;
continue;
} else {
}
break;
}

var G__13460 = args13458.length;
switch (G__13460) {
case 1:
return sablono.core.date_field13457.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field13457.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13458.length)].join('')));

}
});

sablono.core.date_field13457.cljs$core$IFn$_invoke$arity$1 = (function (name__13298__auto__){
return sablono.core.date_field13457.call(null,name__13298__auto__,null);
});

sablono.core.date_field13457.cljs$core$IFn$_invoke$arity$2 = (function (name__13298__auto__,value__13299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__13298__auto__,value__13299__auto__);
});

sablono.core.date_field13457.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field13457);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field13461 = (function sablono$core$datetime_field13461(var_args){
var args13462 = [];
var len__7484__auto___13529 = arguments.length;
var i__7485__auto___13530 = (0);
while(true){
if((i__7485__auto___13530 < len__7484__auto___13529)){
args13462.push((arguments[i__7485__auto___13530]));

var G__13531 = (i__7485__auto___13530 + (1));
i__7485__auto___13530 = G__13531;
continue;
} else {
}
break;
}

var G__13464 = args13462.length;
switch (G__13464) {
case 1:
return sablono.core.datetime_field13461.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field13461.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13462.length)].join('')));

}
});

sablono.core.datetime_field13461.cljs$core$IFn$_invoke$arity$1 = (function (name__13298__auto__){
return sablono.core.datetime_field13461.call(null,name__13298__auto__,null);
});

sablono.core.datetime_field13461.cljs$core$IFn$_invoke$arity$2 = (function (name__13298__auto__,value__13299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__13298__auto__,value__13299__auto__);
});

sablono.core.datetime_field13461.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field13461);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field13465 = (function sablono$core$datetime_local_field13465(var_args){
var args13466 = [];
var len__7484__auto___13533 = arguments.length;
var i__7485__auto___13534 = (0);
while(true){
if((i__7485__auto___13534 < len__7484__auto___13533)){
args13466.push((arguments[i__7485__auto___13534]));

var G__13535 = (i__7485__auto___13534 + (1));
i__7485__auto___13534 = G__13535;
continue;
} else {
}
break;
}

var G__13468 = args13466.length;
switch (G__13468) {
case 1:
return sablono.core.datetime_local_field13465.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field13465.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13466.length)].join('')));

}
});

sablono.core.datetime_local_field13465.cljs$core$IFn$_invoke$arity$1 = (function (name__13298__auto__){
return sablono.core.datetime_local_field13465.call(null,name__13298__auto__,null);
});

sablono.core.datetime_local_field13465.cljs$core$IFn$_invoke$arity$2 = (function (name__13298__auto__,value__13299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__13298__auto__,value__13299__auto__);
});

sablono.core.datetime_local_field13465.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field13465);

/**
 * Creates a email input field.
 */
sablono.core.email_field13469 = (function sablono$core$email_field13469(var_args){
var args13470 = [];
var len__7484__auto___13537 = arguments.length;
var i__7485__auto___13538 = (0);
while(true){
if((i__7485__auto___13538 < len__7484__auto___13537)){
args13470.push((arguments[i__7485__auto___13538]));

var G__13539 = (i__7485__auto___13538 + (1));
i__7485__auto___13538 = G__13539;
continue;
} else {
}
break;
}

var G__13472 = args13470.length;
switch (G__13472) {
case 1:
return sablono.core.email_field13469.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field13469.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13470.length)].join('')));

}
});

sablono.core.email_field13469.cljs$core$IFn$_invoke$arity$1 = (function (name__13298__auto__){
return sablono.core.email_field13469.call(null,name__13298__auto__,null);
});

sablono.core.email_field13469.cljs$core$IFn$_invoke$arity$2 = (function (name__13298__auto__,value__13299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__13298__auto__,value__13299__auto__);
});

sablono.core.email_field13469.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field13469);

/**
 * Creates a file input field.
 */
sablono.core.file_field13473 = (function sablono$core$file_field13473(var_args){
var args13474 = [];
var len__7484__auto___13541 = arguments.length;
var i__7485__auto___13542 = (0);
while(true){
if((i__7485__auto___13542 < len__7484__auto___13541)){
args13474.push((arguments[i__7485__auto___13542]));

var G__13543 = (i__7485__auto___13542 + (1));
i__7485__auto___13542 = G__13543;
continue;
} else {
}
break;
}

var G__13476 = args13474.length;
switch (G__13476) {
case 1:
return sablono.core.file_field13473.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field13473.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13474.length)].join('')));

}
});

sablono.core.file_field13473.cljs$core$IFn$_invoke$arity$1 = (function (name__13298__auto__){
return sablono.core.file_field13473.call(null,name__13298__auto__,null);
});

sablono.core.file_field13473.cljs$core$IFn$_invoke$arity$2 = (function (name__13298__auto__,value__13299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__13298__auto__,value__13299__auto__);
});

sablono.core.file_field13473.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field13473);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field13477 = (function sablono$core$hidden_field13477(var_args){
var args13478 = [];
var len__7484__auto___13545 = arguments.length;
var i__7485__auto___13546 = (0);
while(true){
if((i__7485__auto___13546 < len__7484__auto___13545)){
args13478.push((arguments[i__7485__auto___13546]));

var G__13547 = (i__7485__auto___13546 + (1));
i__7485__auto___13546 = G__13547;
continue;
} else {
}
break;
}

var G__13480 = args13478.length;
switch (G__13480) {
case 1:
return sablono.core.hidden_field13477.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field13477.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13478.length)].join('')));

}
});

sablono.core.hidden_field13477.cljs$core$IFn$_invoke$arity$1 = (function (name__13298__auto__){
return sablono.core.hidden_field13477.call(null,name__13298__auto__,null);
});

sablono.core.hidden_field13477.cljs$core$IFn$_invoke$arity$2 = (function (name__13298__auto__,value__13299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__13298__auto__,value__13299__auto__);
});

sablono.core.hidden_field13477.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field13477);

/**
 * Creates a month input field.
 */
sablono.core.month_field13481 = (function sablono$core$month_field13481(var_args){
var args13482 = [];
var len__7484__auto___13549 = arguments.length;
var i__7485__auto___13550 = (0);
while(true){
if((i__7485__auto___13550 < len__7484__auto___13549)){
args13482.push((arguments[i__7485__auto___13550]));

var G__13551 = (i__7485__auto___13550 + (1));
i__7485__auto___13550 = G__13551;
continue;
} else {
}
break;
}

var G__13484 = args13482.length;
switch (G__13484) {
case 1:
return sablono.core.month_field13481.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field13481.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13482.length)].join('')));

}
});

sablono.core.month_field13481.cljs$core$IFn$_invoke$arity$1 = (function (name__13298__auto__){
return sablono.core.month_field13481.call(null,name__13298__auto__,null);
});

sablono.core.month_field13481.cljs$core$IFn$_invoke$arity$2 = (function (name__13298__auto__,value__13299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__13298__auto__,value__13299__auto__);
});

sablono.core.month_field13481.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field13481);

/**
 * Creates a number input field.
 */
sablono.core.number_field13485 = (function sablono$core$number_field13485(var_args){
var args13486 = [];
var len__7484__auto___13553 = arguments.length;
var i__7485__auto___13554 = (0);
while(true){
if((i__7485__auto___13554 < len__7484__auto___13553)){
args13486.push((arguments[i__7485__auto___13554]));

var G__13555 = (i__7485__auto___13554 + (1));
i__7485__auto___13554 = G__13555;
continue;
} else {
}
break;
}

var G__13488 = args13486.length;
switch (G__13488) {
case 1:
return sablono.core.number_field13485.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field13485.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13486.length)].join('')));

}
});

sablono.core.number_field13485.cljs$core$IFn$_invoke$arity$1 = (function (name__13298__auto__){
return sablono.core.number_field13485.call(null,name__13298__auto__,null);
});

sablono.core.number_field13485.cljs$core$IFn$_invoke$arity$2 = (function (name__13298__auto__,value__13299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__13298__auto__,value__13299__auto__);
});

sablono.core.number_field13485.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field13485);

/**
 * Creates a password input field.
 */
sablono.core.password_field13489 = (function sablono$core$password_field13489(var_args){
var args13490 = [];
var len__7484__auto___13557 = arguments.length;
var i__7485__auto___13558 = (0);
while(true){
if((i__7485__auto___13558 < len__7484__auto___13557)){
args13490.push((arguments[i__7485__auto___13558]));

var G__13559 = (i__7485__auto___13558 + (1));
i__7485__auto___13558 = G__13559;
continue;
} else {
}
break;
}

var G__13492 = args13490.length;
switch (G__13492) {
case 1:
return sablono.core.password_field13489.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field13489.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13490.length)].join('')));

}
});

sablono.core.password_field13489.cljs$core$IFn$_invoke$arity$1 = (function (name__13298__auto__){
return sablono.core.password_field13489.call(null,name__13298__auto__,null);
});

sablono.core.password_field13489.cljs$core$IFn$_invoke$arity$2 = (function (name__13298__auto__,value__13299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__13298__auto__,value__13299__auto__);
});

sablono.core.password_field13489.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field13489);

/**
 * Creates a range input field.
 */
sablono.core.range_field13493 = (function sablono$core$range_field13493(var_args){
var args13494 = [];
var len__7484__auto___13561 = arguments.length;
var i__7485__auto___13562 = (0);
while(true){
if((i__7485__auto___13562 < len__7484__auto___13561)){
args13494.push((arguments[i__7485__auto___13562]));

var G__13563 = (i__7485__auto___13562 + (1));
i__7485__auto___13562 = G__13563;
continue;
} else {
}
break;
}

var G__13496 = args13494.length;
switch (G__13496) {
case 1:
return sablono.core.range_field13493.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field13493.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13494.length)].join('')));

}
});

sablono.core.range_field13493.cljs$core$IFn$_invoke$arity$1 = (function (name__13298__auto__){
return sablono.core.range_field13493.call(null,name__13298__auto__,null);
});

sablono.core.range_field13493.cljs$core$IFn$_invoke$arity$2 = (function (name__13298__auto__,value__13299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__13298__auto__,value__13299__auto__);
});

sablono.core.range_field13493.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field13493);

/**
 * Creates a search input field.
 */
sablono.core.search_field13497 = (function sablono$core$search_field13497(var_args){
var args13498 = [];
var len__7484__auto___13565 = arguments.length;
var i__7485__auto___13566 = (0);
while(true){
if((i__7485__auto___13566 < len__7484__auto___13565)){
args13498.push((arguments[i__7485__auto___13566]));

var G__13567 = (i__7485__auto___13566 + (1));
i__7485__auto___13566 = G__13567;
continue;
} else {
}
break;
}

var G__13500 = args13498.length;
switch (G__13500) {
case 1:
return sablono.core.search_field13497.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field13497.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13498.length)].join('')));

}
});

sablono.core.search_field13497.cljs$core$IFn$_invoke$arity$1 = (function (name__13298__auto__){
return sablono.core.search_field13497.call(null,name__13298__auto__,null);
});

sablono.core.search_field13497.cljs$core$IFn$_invoke$arity$2 = (function (name__13298__auto__,value__13299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__13298__auto__,value__13299__auto__);
});

sablono.core.search_field13497.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field13497);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field13501 = (function sablono$core$tel_field13501(var_args){
var args13502 = [];
var len__7484__auto___13569 = arguments.length;
var i__7485__auto___13570 = (0);
while(true){
if((i__7485__auto___13570 < len__7484__auto___13569)){
args13502.push((arguments[i__7485__auto___13570]));

var G__13571 = (i__7485__auto___13570 + (1));
i__7485__auto___13570 = G__13571;
continue;
} else {
}
break;
}

var G__13504 = args13502.length;
switch (G__13504) {
case 1:
return sablono.core.tel_field13501.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field13501.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13502.length)].join('')));

}
});

sablono.core.tel_field13501.cljs$core$IFn$_invoke$arity$1 = (function (name__13298__auto__){
return sablono.core.tel_field13501.call(null,name__13298__auto__,null);
});

sablono.core.tel_field13501.cljs$core$IFn$_invoke$arity$2 = (function (name__13298__auto__,value__13299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__13298__auto__,value__13299__auto__);
});

sablono.core.tel_field13501.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field13501);

/**
 * Creates a text input field.
 */
sablono.core.text_field13505 = (function sablono$core$text_field13505(var_args){
var args13506 = [];
var len__7484__auto___13573 = arguments.length;
var i__7485__auto___13574 = (0);
while(true){
if((i__7485__auto___13574 < len__7484__auto___13573)){
args13506.push((arguments[i__7485__auto___13574]));

var G__13575 = (i__7485__auto___13574 + (1));
i__7485__auto___13574 = G__13575;
continue;
} else {
}
break;
}

var G__13508 = args13506.length;
switch (G__13508) {
case 1:
return sablono.core.text_field13505.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field13505.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13506.length)].join('')));

}
});

sablono.core.text_field13505.cljs$core$IFn$_invoke$arity$1 = (function (name__13298__auto__){
return sablono.core.text_field13505.call(null,name__13298__auto__,null);
});

sablono.core.text_field13505.cljs$core$IFn$_invoke$arity$2 = (function (name__13298__auto__,value__13299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__13298__auto__,value__13299__auto__);
});

sablono.core.text_field13505.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field13505);

/**
 * Creates a time input field.
 */
sablono.core.time_field13509 = (function sablono$core$time_field13509(var_args){
var args13510 = [];
var len__7484__auto___13577 = arguments.length;
var i__7485__auto___13578 = (0);
while(true){
if((i__7485__auto___13578 < len__7484__auto___13577)){
args13510.push((arguments[i__7485__auto___13578]));

var G__13579 = (i__7485__auto___13578 + (1));
i__7485__auto___13578 = G__13579;
continue;
} else {
}
break;
}

var G__13512 = args13510.length;
switch (G__13512) {
case 1:
return sablono.core.time_field13509.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field13509.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13510.length)].join('')));

}
});

sablono.core.time_field13509.cljs$core$IFn$_invoke$arity$1 = (function (name__13298__auto__){
return sablono.core.time_field13509.call(null,name__13298__auto__,null);
});

sablono.core.time_field13509.cljs$core$IFn$_invoke$arity$2 = (function (name__13298__auto__,value__13299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__13298__auto__,value__13299__auto__);
});

sablono.core.time_field13509.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field13509);

/**
 * Creates a url input field.
 */
sablono.core.url_field13513 = (function sablono$core$url_field13513(var_args){
var args13514 = [];
var len__7484__auto___13581 = arguments.length;
var i__7485__auto___13582 = (0);
while(true){
if((i__7485__auto___13582 < len__7484__auto___13581)){
args13514.push((arguments[i__7485__auto___13582]));

var G__13583 = (i__7485__auto___13582 + (1));
i__7485__auto___13582 = G__13583;
continue;
} else {
}
break;
}

var G__13516 = args13514.length;
switch (G__13516) {
case 1:
return sablono.core.url_field13513.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field13513.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13514.length)].join('')));

}
});

sablono.core.url_field13513.cljs$core$IFn$_invoke$arity$1 = (function (name__13298__auto__){
return sablono.core.url_field13513.call(null,name__13298__auto__,null);
});

sablono.core.url_field13513.cljs$core$IFn$_invoke$arity$2 = (function (name__13298__auto__,value__13299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__13298__auto__,value__13299__auto__);
});

sablono.core.url_field13513.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field13513);

/**
 * Creates a week input field.
 */
sablono.core.week_field13517 = (function sablono$core$week_field13517(var_args){
var args13518 = [];
var len__7484__auto___13585 = arguments.length;
var i__7485__auto___13586 = (0);
while(true){
if((i__7485__auto___13586 < len__7484__auto___13585)){
args13518.push((arguments[i__7485__auto___13586]));

var G__13587 = (i__7485__auto___13586 + (1));
i__7485__auto___13586 = G__13587;
continue;
} else {
}
break;
}

var G__13520 = args13518.length;
switch (G__13520) {
case 1:
return sablono.core.week_field13517.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field13517.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13518.length)].join('')));

}
});

sablono.core.week_field13517.cljs$core$IFn$_invoke$arity$1 = (function (name__13298__auto__){
return sablono.core.week_field13517.call(null,name__13298__auto__,null);
});

sablono.core.week_field13517.cljs$core$IFn$_invoke$arity$2 = (function (name__13298__auto__,value__13299__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__13298__auto__,value__13299__auto__);
});

sablono.core.week_field13517.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field13517);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box13589 = (function sablono$core$check_box13589(var_args){
var args13590 = [];
var len__7484__auto___13593 = arguments.length;
var i__7485__auto___13594 = (0);
while(true){
if((i__7485__auto___13594 < len__7484__auto___13593)){
args13590.push((arguments[i__7485__auto___13594]));

var G__13595 = (i__7485__auto___13594 + (1));
i__7485__auto___13594 = G__13595;
continue;
} else {
}
break;
}

var G__13592 = args13590.length;
switch (G__13592) {
case 1:
return sablono.core.check_box13589.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box13589.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box13589.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13590.length)].join('')));

}
});

sablono.core.check_box13589.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box13589.call(null,name,null);
});

sablono.core.check_box13589.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box13589.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box13589.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box13589.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box13589);
/**
 * Creates a radio button.
 */
sablono.core.radio_button13597 = (function sablono$core$radio_button13597(var_args){
var args13598 = [];
var len__7484__auto___13601 = arguments.length;
var i__7485__auto___13602 = (0);
while(true){
if((i__7485__auto___13602 < len__7484__auto___13601)){
args13598.push((arguments[i__7485__auto___13602]));

var G__13603 = (i__7485__auto___13602 + (1));
i__7485__auto___13602 = G__13603;
continue;
} else {
}
break;
}

var G__13600 = args13598.length;
switch (G__13600) {
case 1:
return sablono.core.radio_button13597.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button13597.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button13597.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13598.length)].join('')));

}
});

sablono.core.radio_button13597.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button13597.call(null,group,null);
});

sablono.core.radio_button13597.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button13597.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button13597.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button13597.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button13597);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options13605 = (function sablono$core$select_options13605(var_args){
var args13606 = [];
var len__7484__auto___13625 = arguments.length;
var i__7485__auto___13626 = (0);
while(true){
if((i__7485__auto___13626 < len__7484__auto___13625)){
args13606.push((arguments[i__7485__auto___13626]));

var G__13627 = (i__7485__auto___13626 + (1));
i__7485__auto___13626 = G__13627;
continue;
} else {
}
break;
}

var G__13608 = args13606.length;
switch (G__13608) {
case 1:
return sablono.core.select_options13605.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options13605.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13606.length)].join('')));

}
});

sablono.core.select_options13605.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options13605.call(null,coll,null);
});

sablono.core.select_options13605.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__7189__auto__ = (function sablono$core$iter__13609(s__13610){
return (new cljs.core.LazySeq(null,(function (){
var s__13610__$1 = s__13610;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__13610__$1);
if(temp__4657__auto__){
var s__13610__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__13610__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__13610__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__13612 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__13611 = (0);
while(true){
if((i__13611 < size__7188__auto__)){
var x = cljs.core._nth.call(null,c__7187__auto__,i__13611);
cljs.core.chunk_append.call(null,b__13612,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__13619 = x;
var text = cljs.core.nth.call(null,vec__13619,(0),null);
var val = cljs.core.nth.call(null,vec__13619,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__13619,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options13605.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__13629 = (i__13611 + (1));
i__13611 = G__13629;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13612),sablono$core$iter__13609.call(null,cljs.core.chunk_rest.call(null,s__13610__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13612),null);
}
} else {
var x = cljs.core.first.call(null,s__13610__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__13622 = x;
var text = cljs.core.nth.call(null,vec__13622,(0),null);
var val = cljs.core.nth.call(null,vec__13622,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__13622,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options13605.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__13609.call(null,cljs.core.rest.call(null,s__13610__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__.call(null,coll);
});

sablono.core.select_options13605.cljs$lang$maxFixedArity = 2;


sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options13605);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down13630 = (function sablono$core$drop_down13630(var_args){
var args13631 = [];
var len__7484__auto___13634 = arguments.length;
var i__7485__auto___13635 = (0);
while(true){
if((i__7485__auto___13635 < len__7484__auto___13634)){
args13631.push((arguments[i__7485__auto___13635]));

var G__13636 = (i__7485__auto___13635 + (1));
i__7485__auto___13635 = G__13636;
continue;
} else {
}
break;
}

var G__13633 = args13631.length;
switch (G__13633) {
case 2:
return sablono.core.drop_down13630.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down13630.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13631.length)].join('')));

}
});

sablono.core.drop_down13630.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down13630.call(null,name,options,null);
});

sablono.core.drop_down13630.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down13630.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down13630);
/**
 * Creates a text area element.
 */
sablono.core.text_area13638 = (function sablono$core$text_area13638(var_args){
var args13639 = [];
var len__7484__auto___13642 = arguments.length;
var i__7485__auto___13643 = (0);
while(true){
if((i__7485__auto___13643 < len__7484__auto___13642)){
args13639.push((arguments[i__7485__auto___13643]));

var G__13644 = (i__7485__auto___13643 + (1));
i__7485__auto___13643 = G__13644;
continue;
} else {
}
break;
}

var G__13641 = args13639.length;
switch (G__13641) {
case 1:
return sablono.core.text_area13638.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area13638.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13639.length)].join('')));

}
});

sablono.core.text_area13638.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area13638.call(null,name,null);
});

sablono.core.text_area13638.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area13638.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area13638);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label13646 = (function sablono$core$label13646(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label13646);
/**
 * Creates a submit button.
 */
sablono.core.submit_button13647 = (function sablono$core$submit_button13647(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button13647);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button13648 = (function sablono$core$reset_button13648(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button13648);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to13649 = (function sablono$core$form_to13649(var_args){
var args__7491__auto__ = [];
var len__7484__auto___13656 = arguments.length;
var i__7485__auto___13657 = (0);
while(true){
if((i__7485__auto___13657 < len__7484__auto___13656)){
args__7491__auto__.push((arguments[i__7485__auto___13657]));

var G__13658 = (i__7485__auto___13657 + (1));
i__7485__auto___13657 = G__13658;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to13649.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

sablono.core.form_to13649.cljs$core$IFn$_invoke$arity$variadic = (function (p__13652,body){
var vec__13653 = p__13652;
var method = cljs.core.nth.call(null,vec__13653,(0),null);
var action = cljs.core.nth.call(null,vec__13653,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to13649.cljs$lang$maxFixedArity = (1);

sablono.core.form_to13649.cljs$lang$applyTo = (function (seq13650){
var G__13651 = cljs.core.first.call(null,seq13650);
var seq13650__$1 = cljs.core.next.call(null,seq13650);
return sablono.core.form_to13649.cljs$core$IFn$_invoke$arity$variadic(G__13651,seq13650__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to13649);

//# sourceMappingURL=core.js.map