// Compiled by ClojureScript 1.9.229 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('om.dom');
/**
 * Converts kebab-case to camelCase
 */
om_tools.dom.camel_case = (function om_tools$dom$camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
 * Converts attributes that are kebab-case and should be camelCase
 */
om_tools.dom.opt_key_case = (function om_tools$dom$opt_key_case(attr){
if(cljs.core.truth_((function (){var or__25976__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__25976__auto__){
return or__25976__auto__;
} else {
var G__30776 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__30776) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
 * Converts aliased attributes
 */
om_tools.dom.opt_key_alias = (function om_tools$dom$opt_key_alias(opt){
var G__30779 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__30779) {
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
default:
return opt;

}
});
/**
 * Returns potentially formatted name for DOM element attribute.
 * Converts kebab-case to camelCase.
 */
om_tools.dom.format_opt_key = (function om_tools$dom$format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
 * Returns potentially modified value for DOM element attribute.
 * Recursively formats map values (ie :style attribute)
 */
om_tools.dom.format_opt_val = (function om_tools$dom$format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
 * Returns JavaScript object for React DOM attributes from opts map
 */
om_tools.dom.format_opts = (function om_tools$dom$format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__30785){
var vec__30786 = p__30785;
var k = cljs.core.nth.call(null,vec__30786,(0),null);
var v = cljs.core.nth.call(null,vec__30786,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function om_tools$dom$possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function om_tools$dom$valid_element_QMARK_(x){
return (function (){var or__25976__auto__ = React.isValidElement;
if(cljs.core.truth_(or__25976__auto__)){
return or__25976__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function om_tools$dom$js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
 * Returns a vector of [opts children] for from first and second
 *   argument given to DOM function
 */
om_tools.dom.element_args = (function om_tools$dom$element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(cljs.core.truth_(om_tools.dom.js_opts_QMARK_.call(null,opts))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function om_tools$dom$element(ctor,opts,children){
var vec__30792 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__30792,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__30792,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.a = (function om_tools$dom$a(var_args){
var args30795 = [];
var len__27051__auto___31440 = arguments.length;
var i__27052__auto___31441 = (0);
while(true){
if((i__27052__auto___31441 < len__27051__auto___31440)){
args30795.push((arguments[i__27052__auto___31441]));

var G__31442 = (i__27052__auto___31441 + (1));
i__27052__auto___31441 = G__31442;
continue;
} else {
}
break;
}

var G__30799 = args30795.length;
switch (G__30799) {
case 0:
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30795.slice((1)),(0),null));
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});

om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.a.cljs$lang$applyTo = (function (seq30796){
var G__30797 = cljs.core.first.call(null,seq30796);
var seq30796__$1 = cljs.core.next.call(null,seq30796);
return om_tools.dom.a.cljs$core$IFn$_invoke$arity$variadic(G__30797,seq30796__$1);
});

om_tools.dom.a.cljs$lang$maxFixedArity = (1);


om_tools.dom.abbr = (function om_tools$dom$abbr(var_args){
var args30800 = [];
var len__27051__auto___31444 = arguments.length;
var i__27052__auto___31445 = (0);
while(true){
if((i__27052__auto___31445 < len__27051__auto___31444)){
args30800.push((arguments[i__27052__auto___31445]));

var G__31446 = (i__27052__auto___31445 + (1));
i__27052__auto___31445 = G__31446;
continue;
} else {
}
break;
}

var G__30804 = args30800.length;
switch (G__30804) {
case 0:
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30800.slice((1)),(0),null));
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});

om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.abbr.cljs$lang$applyTo = (function (seq30801){
var G__30802 = cljs.core.first.call(null,seq30801);
var seq30801__$1 = cljs.core.next.call(null,seq30801);
return om_tools.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(G__30802,seq30801__$1);
});

om_tools.dom.abbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.address = (function om_tools$dom$address(var_args){
var args30805 = [];
var len__27051__auto___31448 = arguments.length;
var i__27052__auto___31449 = (0);
while(true){
if((i__27052__auto___31449 < len__27051__auto___31448)){
args30805.push((arguments[i__27052__auto___31449]));

var G__31450 = (i__27052__auto___31449 + (1));
i__27052__auto___31449 = G__31450;
continue;
} else {
}
break;
}

var G__30809 = args30805.length;
switch (G__30809) {
case 0:
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30805.slice((1)),(0),null));
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});

om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.address.cljs$lang$applyTo = (function (seq30806){
var G__30807 = cljs.core.first.call(null,seq30806);
var seq30806__$1 = cljs.core.next.call(null,seq30806);
return om_tools.dom.address.cljs$core$IFn$_invoke$arity$variadic(G__30807,seq30806__$1);
});

om_tools.dom.address.cljs$lang$maxFixedArity = (1);


om_tools.dom.area = (function om_tools$dom$area(var_args){
var args30810 = [];
var len__27051__auto___31452 = arguments.length;
var i__27052__auto___31453 = (0);
while(true){
if((i__27052__auto___31453 < len__27051__auto___31452)){
args30810.push((arguments[i__27052__auto___31453]));

var G__31454 = (i__27052__auto___31453 + (1));
i__27052__auto___31453 = G__31454;
continue;
} else {
}
break;
}

var G__30814 = args30810.length;
switch (G__30814) {
case 0:
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30810.slice((1)),(0),null));
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});

om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.area.cljs$lang$applyTo = (function (seq30811){
var G__30812 = cljs.core.first.call(null,seq30811);
var seq30811__$1 = cljs.core.next.call(null,seq30811);
return om_tools.dom.area.cljs$core$IFn$_invoke$arity$variadic(G__30812,seq30811__$1);
});

om_tools.dom.area.cljs$lang$maxFixedArity = (1);


om_tools.dom.article = (function om_tools$dom$article(var_args){
var args30815 = [];
var len__27051__auto___31456 = arguments.length;
var i__27052__auto___31457 = (0);
while(true){
if((i__27052__auto___31457 < len__27051__auto___31456)){
args30815.push((arguments[i__27052__auto___31457]));

var G__31458 = (i__27052__auto___31457 + (1));
i__27052__auto___31457 = G__31458;
continue;
} else {
}
break;
}

var G__30819 = args30815.length;
switch (G__30819) {
case 0:
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30815.slice((1)),(0),null));
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});

om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.article.cljs$lang$applyTo = (function (seq30816){
var G__30817 = cljs.core.first.call(null,seq30816);
var seq30816__$1 = cljs.core.next.call(null,seq30816);
return om_tools.dom.article.cljs$core$IFn$_invoke$arity$variadic(G__30817,seq30816__$1);
});

om_tools.dom.article.cljs$lang$maxFixedArity = (1);


om_tools.dom.aside = (function om_tools$dom$aside(var_args){
var args30820 = [];
var len__27051__auto___31460 = arguments.length;
var i__27052__auto___31461 = (0);
while(true){
if((i__27052__auto___31461 < len__27051__auto___31460)){
args30820.push((arguments[i__27052__auto___31461]));

var G__31462 = (i__27052__auto___31461 + (1));
i__27052__auto___31461 = G__31462;
continue;
} else {
}
break;
}

var G__30824 = args30820.length;
switch (G__30824) {
case 0:
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30820.slice((1)),(0),null));
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});

om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.aside.cljs$lang$applyTo = (function (seq30821){
var G__30822 = cljs.core.first.call(null,seq30821);
var seq30821__$1 = cljs.core.next.call(null,seq30821);
return om_tools.dom.aside.cljs$core$IFn$_invoke$arity$variadic(G__30822,seq30821__$1);
});

om_tools.dom.aside.cljs$lang$maxFixedArity = (1);


om_tools.dom.audio = (function om_tools$dom$audio(var_args){
var args30825 = [];
var len__27051__auto___31464 = arguments.length;
var i__27052__auto___31465 = (0);
while(true){
if((i__27052__auto___31465 < len__27051__auto___31464)){
args30825.push((arguments[i__27052__auto___31465]));

var G__31466 = (i__27052__auto___31465 + (1));
i__27052__auto___31465 = G__31466;
continue;
} else {
}
break;
}

var G__30829 = args30825.length;
switch (G__30829) {
case 0:
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30825.slice((1)),(0),null));
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});

om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.audio.cljs$lang$applyTo = (function (seq30826){
var G__30827 = cljs.core.first.call(null,seq30826);
var seq30826__$1 = cljs.core.next.call(null,seq30826);
return om_tools.dom.audio.cljs$core$IFn$_invoke$arity$variadic(G__30827,seq30826__$1);
});

om_tools.dom.audio.cljs$lang$maxFixedArity = (1);


om_tools.dom.b = (function om_tools$dom$b(var_args){
var args30830 = [];
var len__27051__auto___31468 = arguments.length;
var i__27052__auto___31469 = (0);
while(true){
if((i__27052__auto___31469 < len__27051__auto___31468)){
args30830.push((arguments[i__27052__auto___31469]));

var G__31470 = (i__27052__auto___31469 + (1));
i__27052__auto___31469 = G__31470;
continue;
} else {
}
break;
}

var G__30834 = args30830.length;
switch (G__30834) {
case 0:
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30830.slice((1)),(0),null));
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});

om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.b.cljs$lang$applyTo = (function (seq30831){
var G__30832 = cljs.core.first.call(null,seq30831);
var seq30831__$1 = cljs.core.next.call(null,seq30831);
return om_tools.dom.b.cljs$core$IFn$_invoke$arity$variadic(G__30832,seq30831__$1);
});

om_tools.dom.b.cljs$lang$maxFixedArity = (1);


om_tools.dom.base = (function om_tools$dom$base(var_args){
var args30835 = [];
var len__27051__auto___31472 = arguments.length;
var i__27052__auto___31473 = (0);
while(true){
if((i__27052__auto___31473 < len__27051__auto___31472)){
args30835.push((arguments[i__27052__auto___31473]));

var G__31474 = (i__27052__auto___31473 + (1));
i__27052__auto___31473 = G__31474;
continue;
} else {
}
break;
}

var G__30839 = args30835.length;
switch (G__30839) {
case 0:
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30835.slice((1)),(0),null));
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});

om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.base.cljs$lang$applyTo = (function (seq30836){
var G__30837 = cljs.core.first.call(null,seq30836);
var seq30836__$1 = cljs.core.next.call(null,seq30836);
return om_tools.dom.base.cljs$core$IFn$_invoke$arity$variadic(G__30837,seq30836__$1);
});

om_tools.dom.base.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdi = (function om_tools$dom$bdi(var_args){
var args30840 = [];
var len__27051__auto___31476 = arguments.length;
var i__27052__auto___31477 = (0);
while(true){
if((i__27052__auto___31477 < len__27051__auto___31476)){
args30840.push((arguments[i__27052__auto___31477]));

var G__31478 = (i__27052__auto___31477 + (1));
i__27052__auto___31477 = G__31478;
continue;
} else {
}
break;
}

var G__30844 = args30840.length;
switch (G__30844) {
case 0:
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30840.slice((1)),(0),null));
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});

om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.bdi.cljs$lang$applyTo = (function (seq30841){
var G__30842 = cljs.core.first.call(null,seq30841);
var seq30841__$1 = cljs.core.next.call(null,seq30841);
return om_tools.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(G__30842,seq30841__$1);
});

om_tools.dom.bdi.cljs$lang$maxFixedArity = (1);


om_tools.dom.bdo = (function om_tools$dom$bdo(var_args){
var args30845 = [];
var len__27051__auto___31480 = arguments.length;
var i__27052__auto___31481 = (0);
while(true){
if((i__27052__auto___31481 < len__27051__auto___31480)){
args30845.push((arguments[i__27052__auto___31481]));

var G__31482 = (i__27052__auto___31481 + (1));
i__27052__auto___31481 = G__31482;
continue;
} else {
}
break;
}

var G__30849 = args30845.length;
switch (G__30849) {
case 0:
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30845.slice((1)),(0),null));
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});

om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.bdo.cljs$lang$applyTo = (function (seq30846){
var G__30847 = cljs.core.first.call(null,seq30846);
var seq30846__$1 = cljs.core.next.call(null,seq30846);
return om_tools.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(G__30847,seq30846__$1);
});

om_tools.dom.bdo.cljs$lang$maxFixedArity = (1);


om_tools.dom.big = (function om_tools$dom$big(var_args){
var args30850 = [];
var len__27051__auto___31484 = arguments.length;
var i__27052__auto___31485 = (0);
while(true){
if((i__27052__auto___31485 < len__27051__auto___31484)){
args30850.push((arguments[i__27052__auto___31485]));

var G__31486 = (i__27052__auto___31485 + (1));
i__27052__auto___31485 = G__31486;
continue;
} else {
}
break;
}

var G__30854 = args30850.length;
switch (G__30854) {
case 0:
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30850.slice((1)),(0),null));
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});

om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.big.cljs$lang$applyTo = (function (seq30851){
var G__30852 = cljs.core.first.call(null,seq30851);
var seq30851__$1 = cljs.core.next.call(null,seq30851);
return om_tools.dom.big.cljs$core$IFn$_invoke$arity$variadic(G__30852,seq30851__$1);
});

om_tools.dom.big.cljs$lang$maxFixedArity = (1);


om_tools.dom.blockquote = (function om_tools$dom$blockquote(var_args){
var args30855 = [];
var len__27051__auto___31488 = arguments.length;
var i__27052__auto___31489 = (0);
while(true){
if((i__27052__auto___31489 < len__27051__auto___31488)){
args30855.push((arguments[i__27052__auto___31489]));

var G__31490 = (i__27052__auto___31489 + (1));
i__27052__auto___31489 = G__31490;
continue;
} else {
}
break;
}

var G__30859 = args30855.length;
switch (G__30859) {
case 0:
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30855.slice((1)),(0),null));
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});

om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.blockquote.cljs$lang$applyTo = (function (seq30856){
var G__30857 = cljs.core.first.call(null,seq30856);
var seq30856__$1 = cljs.core.next.call(null,seq30856);
return om_tools.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(G__30857,seq30856__$1);
});

om_tools.dom.blockquote.cljs$lang$maxFixedArity = (1);


om_tools.dom.body = (function om_tools$dom$body(var_args){
var args30860 = [];
var len__27051__auto___31492 = arguments.length;
var i__27052__auto___31493 = (0);
while(true){
if((i__27052__auto___31493 < len__27051__auto___31492)){
args30860.push((arguments[i__27052__auto___31493]));

var G__31494 = (i__27052__auto___31493 + (1));
i__27052__auto___31493 = G__31494;
continue;
} else {
}
break;
}

var G__30864 = args30860.length;
switch (G__30864) {
case 0:
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30860.slice((1)),(0),null));
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});

om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.body.cljs$lang$applyTo = (function (seq30861){
var G__30862 = cljs.core.first.call(null,seq30861);
var seq30861__$1 = cljs.core.next.call(null,seq30861);
return om_tools.dom.body.cljs$core$IFn$_invoke$arity$variadic(G__30862,seq30861__$1);
});

om_tools.dom.body.cljs$lang$maxFixedArity = (1);


om_tools.dom.br = (function om_tools$dom$br(var_args){
var args30865 = [];
var len__27051__auto___31496 = arguments.length;
var i__27052__auto___31497 = (0);
while(true){
if((i__27052__auto___31497 < len__27051__auto___31496)){
args30865.push((arguments[i__27052__auto___31497]));

var G__31498 = (i__27052__auto___31497 + (1));
i__27052__auto___31497 = G__31498;
continue;
} else {
}
break;
}

var G__30869 = args30865.length;
switch (G__30869) {
case 0:
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30865.slice((1)),(0),null));
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});

om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.br.cljs$lang$applyTo = (function (seq30866){
var G__30867 = cljs.core.first.call(null,seq30866);
var seq30866__$1 = cljs.core.next.call(null,seq30866);
return om_tools.dom.br.cljs$core$IFn$_invoke$arity$variadic(G__30867,seq30866__$1);
});

om_tools.dom.br.cljs$lang$maxFixedArity = (1);


om_tools.dom.button = (function om_tools$dom$button(var_args){
var args30870 = [];
var len__27051__auto___31500 = arguments.length;
var i__27052__auto___31501 = (0);
while(true){
if((i__27052__auto___31501 < len__27051__auto___31500)){
args30870.push((arguments[i__27052__auto___31501]));

var G__31502 = (i__27052__auto___31501 + (1));
i__27052__auto___31501 = G__31502;
continue;
} else {
}
break;
}

var G__30874 = args30870.length;
switch (G__30874) {
case 0:
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30870.slice((1)),(0),null));
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});

om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.button.cljs$lang$applyTo = (function (seq30871){
var G__30872 = cljs.core.first.call(null,seq30871);
var seq30871__$1 = cljs.core.next.call(null,seq30871);
return om_tools.dom.button.cljs$core$IFn$_invoke$arity$variadic(G__30872,seq30871__$1);
});

om_tools.dom.button.cljs$lang$maxFixedArity = (1);


om_tools.dom.canvas = (function om_tools$dom$canvas(var_args){
var args30875 = [];
var len__27051__auto___31504 = arguments.length;
var i__27052__auto___31505 = (0);
while(true){
if((i__27052__auto___31505 < len__27051__auto___31504)){
args30875.push((arguments[i__27052__auto___31505]));

var G__31506 = (i__27052__auto___31505 + (1));
i__27052__auto___31505 = G__31506;
continue;
} else {
}
break;
}

var G__30879 = args30875.length;
switch (G__30879) {
case 0:
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30875.slice((1)),(0),null));
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});

om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.canvas.cljs$lang$applyTo = (function (seq30876){
var G__30877 = cljs.core.first.call(null,seq30876);
var seq30876__$1 = cljs.core.next.call(null,seq30876);
return om_tools.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(G__30877,seq30876__$1);
});

om_tools.dom.canvas.cljs$lang$maxFixedArity = (1);


om_tools.dom.caption = (function om_tools$dom$caption(var_args){
var args30880 = [];
var len__27051__auto___31508 = arguments.length;
var i__27052__auto___31509 = (0);
while(true){
if((i__27052__auto___31509 < len__27051__auto___31508)){
args30880.push((arguments[i__27052__auto___31509]));

var G__31510 = (i__27052__auto___31509 + (1));
i__27052__auto___31509 = G__31510;
continue;
} else {
}
break;
}

var G__30884 = args30880.length;
switch (G__30884) {
case 0:
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30880.slice((1)),(0),null));
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});

om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.caption.cljs$lang$applyTo = (function (seq30881){
var G__30882 = cljs.core.first.call(null,seq30881);
var seq30881__$1 = cljs.core.next.call(null,seq30881);
return om_tools.dom.caption.cljs$core$IFn$_invoke$arity$variadic(G__30882,seq30881__$1);
});

om_tools.dom.caption.cljs$lang$maxFixedArity = (1);


om_tools.dom.cite = (function om_tools$dom$cite(var_args){
var args30885 = [];
var len__27051__auto___31512 = arguments.length;
var i__27052__auto___31513 = (0);
while(true){
if((i__27052__auto___31513 < len__27051__auto___31512)){
args30885.push((arguments[i__27052__auto___31513]));

var G__31514 = (i__27052__auto___31513 + (1));
i__27052__auto___31513 = G__31514;
continue;
} else {
}
break;
}

var G__30889 = args30885.length;
switch (G__30889) {
case 0:
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30885.slice((1)),(0),null));
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});

om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.cite.cljs$lang$applyTo = (function (seq30886){
var G__30887 = cljs.core.first.call(null,seq30886);
var seq30886__$1 = cljs.core.next.call(null,seq30886);
return om_tools.dom.cite.cljs$core$IFn$_invoke$arity$variadic(G__30887,seq30886__$1);
});

om_tools.dom.cite.cljs$lang$maxFixedArity = (1);


om_tools.dom.code = (function om_tools$dom$code(var_args){
var args30890 = [];
var len__27051__auto___31516 = arguments.length;
var i__27052__auto___31517 = (0);
while(true){
if((i__27052__auto___31517 < len__27051__auto___31516)){
args30890.push((arguments[i__27052__auto___31517]));

var G__31518 = (i__27052__auto___31517 + (1));
i__27052__auto___31517 = G__31518;
continue;
} else {
}
break;
}

var G__30894 = args30890.length;
switch (G__30894) {
case 0:
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30890.slice((1)),(0),null));
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});

om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.code.cljs$lang$applyTo = (function (seq30891){
var G__30892 = cljs.core.first.call(null,seq30891);
var seq30891__$1 = cljs.core.next.call(null,seq30891);
return om_tools.dom.code.cljs$core$IFn$_invoke$arity$variadic(G__30892,seq30891__$1);
});

om_tools.dom.code.cljs$lang$maxFixedArity = (1);


om_tools.dom.col = (function om_tools$dom$col(var_args){
var args30895 = [];
var len__27051__auto___31520 = arguments.length;
var i__27052__auto___31521 = (0);
while(true){
if((i__27052__auto___31521 < len__27051__auto___31520)){
args30895.push((arguments[i__27052__auto___31521]));

var G__31522 = (i__27052__auto___31521 + (1));
i__27052__auto___31521 = G__31522;
continue;
} else {
}
break;
}

var G__30899 = args30895.length;
switch (G__30899) {
case 0:
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30895.slice((1)),(0),null));
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});

om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.col.cljs$lang$applyTo = (function (seq30896){
var G__30897 = cljs.core.first.call(null,seq30896);
var seq30896__$1 = cljs.core.next.call(null,seq30896);
return om_tools.dom.col.cljs$core$IFn$_invoke$arity$variadic(G__30897,seq30896__$1);
});

om_tools.dom.col.cljs$lang$maxFixedArity = (1);


om_tools.dom.colgroup = (function om_tools$dom$colgroup(var_args){
var args30900 = [];
var len__27051__auto___31524 = arguments.length;
var i__27052__auto___31525 = (0);
while(true){
if((i__27052__auto___31525 < len__27051__auto___31524)){
args30900.push((arguments[i__27052__auto___31525]));

var G__31526 = (i__27052__auto___31525 + (1));
i__27052__auto___31525 = G__31526;
continue;
} else {
}
break;
}

var G__30904 = args30900.length;
switch (G__30904) {
case 0:
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30900.slice((1)),(0),null));
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});

om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.colgroup.cljs$lang$applyTo = (function (seq30901){
var G__30902 = cljs.core.first.call(null,seq30901);
var seq30901__$1 = cljs.core.next.call(null,seq30901);
return om_tools.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(G__30902,seq30901__$1);
});

om_tools.dom.colgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.data = (function om_tools$dom$data(var_args){
var args30905 = [];
var len__27051__auto___31528 = arguments.length;
var i__27052__auto___31529 = (0);
while(true){
if((i__27052__auto___31529 < len__27051__auto___31528)){
args30905.push((arguments[i__27052__auto___31529]));

var G__31530 = (i__27052__auto___31529 + (1));
i__27052__auto___31529 = G__31530;
continue;
} else {
}
break;
}

var G__30909 = args30905.length;
switch (G__30909) {
case 0:
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30905.slice((1)),(0),null));
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});

om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.data.cljs$lang$applyTo = (function (seq30906){
var G__30907 = cljs.core.first.call(null,seq30906);
var seq30906__$1 = cljs.core.next.call(null,seq30906);
return om_tools.dom.data.cljs$core$IFn$_invoke$arity$variadic(G__30907,seq30906__$1);
});

om_tools.dom.data.cljs$lang$maxFixedArity = (1);


om_tools.dom.datalist = (function om_tools$dom$datalist(var_args){
var args30910 = [];
var len__27051__auto___31532 = arguments.length;
var i__27052__auto___31533 = (0);
while(true){
if((i__27052__auto___31533 < len__27051__auto___31532)){
args30910.push((arguments[i__27052__auto___31533]));

var G__31534 = (i__27052__auto___31533 + (1));
i__27052__auto___31533 = G__31534;
continue;
} else {
}
break;
}

var G__30914 = args30910.length;
switch (G__30914) {
case 0:
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30910.slice((1)),(0),null));
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});

om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.datalist.cljs$lang$applyTo = (function (seq30911){
var G__30912 = cljs.core.first.call(null,seq30911);
var seq30911__$1 = cljs.core.next.call(null,seq30911);
return om_tools.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(G__30912,seq30911__$1);
});

om_tools.dom.datalist.cljs$lang$maxFixedArity = (1);


om_tools.dom.dd = (function om_tools$dom$dd(var_args){
var args30915 = [];
var len__27051__auto___31536 = arguments.length;
var i__27052__auto___31537 = (0);
while(true){
if((i__27052__auto___31537 < len__27051__auto___31536)){
args30915.push((arguments[i__27052__auto___31537]));

var G__31538 = (i__27052__auto___31537 + (1));
i__27052__auto___31537 = G__31538;
continue;
} else {
}
break;
}

var G__30919 = args30915.length;
switch (G__30919) {
case 0:
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30915.slice((1)),(0),null));
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});

om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.dd.cljs$lang$applyTo = (function (seq30916){
var G__30917 = cljs.core.first.call(null,seq30916);
var seq30916__$1 = cljs.core.next.call(null,seq30916);
return om_tools.dom.dd.cljs$core$IFn$_invoke$arity$variadic(G__30917,seq30916__$1);
});

om_tools.dom.dd.cljs$lang$maxFixedArity = (1);


om_tools.dom.del = (function om_tools$dom$del(var_args){
var args30920 = [];
var len__27051__auto___31540 = arguments.length;
var i__27052__auto___31541 = (0);
while(true){
if((i__27052__auto___31541 < len__27051__auto___31540)){
args30920.push((arguments[i__27052__auto___31541]));

var G__31542 = (i__27052__auto___31541 + (1));
i__27052__auto___31541 = G__31542;
continue;
} else {
}
break;
}

var G__30924 = args30920.length;
switch (G__30924) {
case 0:
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30920.slice((1)),(0),null));
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});

om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.del.cljs$lang$applyTo = (function (seq30921){
var G__30922 = cljs.core.first.call(null,seq30921);
var seq30921__$1 = cljs.core.next.call(null,seq30921);
return om_tools.dom.del.cljs$core$IFn$_invoke$arity$variadic(G__30922,seq30921__$1);
});

om_tools.dom.del.cljs$lang$maxFixedArity = (1);


om_tools.dom.details = (function om_tools$dom$details(var_args){
var args30925 = [];
var len__27051__auto___31544 = arguments.length;
var i__27052__auto___31545 = (0);
while(true){
if((i__27052__auto___31545 < len__27051__auto___31544)){
args30925.push((arguments[i__27052__auto___31545]));

var G__31546 = (i__27052__auto___31545 + (1));
i__27052__auto___31545 = G__31546;
continue;
} else {
}
break;
}

var G__30929 = args30925.length;
switch (G__30929) {
case 0:
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30925.slice((1)),(0),null));
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.details,null,null);
});

om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.details,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.details.cljs$lang$applyTo = (function (seq30926){
var G__30927 = cljs.core.first.call(null,seq30926);
var seq30926__$1 = cljs.core.next.call(null,seq30926);
return om_tools.dom.details.cljs$core$IFn$_invoke$arity$variadic(G__30927,seq30926__$1);
});

om_tools.dom.details.cljs$lang$maxFixedArity = (1);


om_tools.dom.dfn = (function om_tools$dom$dfn(var_args){
var args30930 = [];
var len__27051__auto___31548 = arguments.length;
var i__27052__auto___31549 = (0);
while(true){
if((i__27052__auto___31549 < len__27051__auto___31548)){
args30930.push((arguments[i__27052__auto___31549]));

var G__31550 = (i__27052__auto___31549 + (1));
i__27052__auto___31549 = G__31550;
continue;
} else {
}
break;
}

var G__30934 = args30930.length;
switch (G__30934) {
case 0:
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30930.slice((1)),(0),null));
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});

om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.dfn.cljs$lang$applyTo = (function (seq30931){
var G__30932 = cljs.core.first.call(null,seq30931);
var seq30931__$1 = cljs.core.next.call(null,seq30931);
return om_tools.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(G__30932,seq30931__$1);
});

om_tools.dom.dfn.cljs$lang$maxFixedArity = (1);


om_tools.dom.dialog = (function om_tools$dom$dialog(var_args){
var args30935 = [];
var len__27051__auto___31552 = arguments.length;
var i__27052__auto___31553 = (0);
while(true){
if((i__27052__auto___31553 < len__27051__auto___31552)){
args30935.push((arguments[i__27052__auto___31553]));

var G__31554 = (i__27052__auto___31553 + (1));
i__27052__auto___31553 = G__31554;
continue;
} else {
}
break;
}

var G__30939 = args30935.length;
switch (G__30939) {
case 0:
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30935.slice((1)),(0),null));
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dialog,null,null);
});

om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.dialog,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.dialog.cljs$lang$applyTo = (function (seq30936){
var G__30937 = cljs.core.first.call(null,seq30936);
var seq30936__$1 = cljs.core.next.call(null,seq30936);
return om_tools.dom.dialog.cljs$core$IFn$_invoke$arity$variadic(G__30937,seq30936__$1);
});

om_tools.dom.dialog.cljs$lang$maxFixedArity = (1);


om_tools.dom.div = (function om_tools$dom$div(var_args){
var args30940 = [];
var len__27051__auto___31556 = arguments.length;
var i__27052__auto___31557 = (0);
while(true){
if((i__27052__auto___31557 < len__27051__auto___31556)){
args30940.push((arguments[i__27052__auto___31557]));

var G__31558 = (i__27052__auto___31557 + (1));
i__27052__auto___31557 = G__31558;
continue;
} else {
}
break;
}

var G__30944 = args30940.length;
switch (G__30944) {
case 0:
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30940.slice((1)),(0),null));
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});

om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.div.cljs$lang$applyTo = (function (seq30941){
var G__30942 = cljs.core.first.call(null,seq30941);
var seq30941__$1 = cljs.core.next.call(null,seq30941);
return om_tools.dom.div.cljs$core$IFn$_invoke$arity$variadic(G__30942,seq30941__$1);
});

om_tools.dom.div.cljs$lang$maxFixedArity = (1);


om_tools.dom.dl = (function om_tools$dom$dl(var_args){
var args30945 = [];
var len__27051__auto___31560 = arguments.length;
var i__27052__auto___31561 = (0);
while(true){
if((i__27052__auto___31561 < len__27051__auto___31560)){
args30945.push((arguments[i__27052__auto___31561]));

var G__31562 = (i__27052__auto___31561 + (1));
i__27052__auto___31561 = G__31562;
continue;
} else {
}
break;
}

var G__30949 = args30945.length;
switch (G__30949) {
case 0:
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30945.slice((1)),(0),null));
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});

om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.dl.cljs$lang$applyTo = (function (seq30946){
var G__30947 = cljs.core.first.call(null,seq30946);
var seq30946__$1 = cljs.core.next.call(null,seq30946);
return om_tools.dom.dl.cljs$core$IFn$_invoke$arity$variadic(G__30947,seq30946__$1);
});

om_tools.dom.dl.cljs$lang$maxFixedArity = (1);


om_tools.dom.dt = (function om_tools$dom$dt(var_args){
var args30950 = [];
var len__27051__auto___31564 = arguments.length;
var i__27052__auto___31565 = (0);
while(true){
if((i__27052__auto___31565 < len__27051__auto___31564)){
args30950.push((arguments[i__27052__auto___31565]));

var G__31566 = (i__27052__auto___31565 + (1));
i__27052__auto___31565 = G__31566;
continue;
} else {
}
break;
}

var G__30954 = args30950.length;
switch (G__30954) {
case 0:
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30950.slice((1)),(0),null));
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});

om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.dt.cljs$lang$applyTo = (function (seq30951){
var G__30952 = cljs.core.first.call(null,seq30951);
var seq30951__$1 = cljs.core.next.call(null,seq30951);
return om_tools.dom.dt.cljs$core$IFn$_invoke$arity$variadic(G__30952,seq30951__$1);
});

om_tools.dom.dt.cljs$lang$maxFixedArity = (1);


om_tools.dom.em = (function om_tools$dom$em(var_args){
var args30960 = [];
var len__27051__auto___31568 = arguments.length;
var i__27052__auto___31569 = (0);
while(true){
if((i__27052__auto___31569 < len__27051__auto___31568)){
args30960.push((arguments[i__27052__auto___31569]));

var G__31570 = (i__27052__auto___31569 + (1));
i__27052__auto___31569 = G__31570;
continue;
} else {
}
break;
}

var G__30964 = args30960.length;
switch (G__30964) {
case 0:
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30960.slice((1)),(0),null));
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});

om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.em.cljs$lang$applyTo = (function (seq30961){
var G__30962 = cljs.core.first.call(null,seq30961);
var seq30961__$1 = cljs.core.next.call(null,seq30961);
return om_tools.dom.em.cljs$core$IFn$_invoke$arity$variadic(G__30962,seq30961__$1);
});

om_tools.dom.em.cljs$lang$maxFixedArity = (1);


om_tools.dom.embed = (function om_tools$dom$embed(var_args){
var args30965 = [];
var len__27051__auto___31572 = arguments.length;
var i__27052__auto___31573 = (0);
while(true){
if((i__27052__auto___31573 < len__27051__auto___31572)){
args30965.push((arguments[i__27052__auto___31573]));

var G__31574 = (i__27052__auto___31573 + (1));
i__27052__auto___31573 = G__31574;
continue;
} else {
}
break;
}

var G__30969 = args30965.length;
switch (G__30969) {
case 0:
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30965.slice((1)),(0),null));
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});

om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.embed.cljs$lang$applyTo = (function (seq30966){
var G__30967 = cljs.core.first.call(null,seq30966);
var seq30966__$1 = cljs.core.next.call(null,seq30966);
return om_tools.dom.embed.cljs$core$IFn$_invoke$arity$variadic(G__30967,seq30966__$1);
});

om_tools.dom.embed.cljs$lang$maxFixedArity = (1);


om_tools.dom.fieldset = (function om_tools$dom$fieldset(var_args){
var args30970 = [];
var len__27051__auto___31576 = arguments.length;
var i__27052__auto___31577 = (0);
while(true){
if((i__27052__auto___31577 < len__27051__auto___31576)){
args30970.push((arguments[i__27052__auto___31577]));

var G__31578 = (i__27052__auto___31577 + (1));
i__27052__auto___31577 = G__31578;
continue;
} else {
}
break;
}

var G__30974 = args30970.length;
switch (G__30974) {
case 0:
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30970.slice((1)),(0),null));
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});

om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.fieldset.cljs$lang$applyTo = (function (seq30971){
var G__30972 = cljs.core.first.call(null,seq30971);
var seq30971__$1 = cljs.core.next.call(null,seq30971);
return om_tools.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(G__30972,seq30971__$1);
});

om_tools.dom.fieldset.cljs$lang$maxFixedArity = (1);


om_tools.dom.figcaption = (function om_tools$dom$figcaption(var_args){
var args30975 = [];
var len__27051__auto___31580 = arguments.length;
var i__27052__auto___31581 = (0);
while(true){
if((i__27052__auto___31581 < len__27051__auto___31580)){
args30975.push((arguments[i__27052__auto___31581]));

var G__31582 = (i__27052__auto___31581 + (1));
i__27052__auto___31581 = G__31582;
continue;
} else {
}
break;
}

var G__30979 = args30975.length;
switch (G__30979) {
case 0:
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30975.slice((1)),(0),null));
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});

om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.figcaption.cljs$lang$applyTo = (function (seq30976){
var G__30977 = cljs.core.first.call(null,seq30976);
var seq30976__$1 = cljs.core.next.call(null,seq30976);
return om_tools.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(G__30977,seq30976__$1);
});

om_tools.dom.figcaption.cljs$lang$maxFixedArity = (1);


om_tools.dom.figure = (function om_tools$dom$figure(var_args){
var args30980 = [];
var len__27051__auto___31584 = arguments.length;
var i__27052__auto___31585 = (0);
while(true){
if((i__27052__auto___31585 < len__27051__auto___31584)){
args30980.push((arguments[i__27052__auto___31585]));

var G__31586 = (i__27052__auto___31585 + (1));
i__27052__auto___31585 = G__31586;
continue;
} else {
}
break;
}

var G__30984 = args30980.length;
switch (G__30984) {
case 0:
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30980.slice((1)),(0),null));
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});

om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.figure.cljs$lang$applyTo = (function (seq30981){
var G__30982 = cljs.core.first.call(null,seq30981);
var seq30981__$1 = cljs.core.next.call(null,seq30981);
return om_tools.dom.figure.cljs$core$IFn$_invoke$arity$variadic(G__30982,seq30981__$1);
});

om_tools.dom.figure.cljs$lang$maxFixedArity = (1);


om_tools.dom.footer = (function om_tools$dom$footer(var_args){
var args30985 = [];
var len__27051__auto___31588 = arguments.length;
var i__27052__auto___31589 = (0);
while(true){
if((i__27052__auto___31589 < len__27051__auto___31588)){
args30985.push((arguments[i__27052__auto___31589]));

var G__31590 = (i__27052__auto___31589 + (1));
i__27052__auto___31589 = G__31590;
continue;
} else {
}
break;
}

var G__30989 = args30985.length;
switch (G__30989) {
case 0:
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30985.slice((1)),(0),null));
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});

om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.footer.cljs$lang$applyTo = (function (seq30986){
var G__30987 = cljs.core.first.call(null,seq30986);
var seq30986__$1 = cljs.core.next.call(null,seq30986);
return om_tools.dom.footer.cljs$core$IFn$_invoke$arity$variadic(G__30987,seq30986__$1);
});

om_tools.dom.footer.cljs$lang$maxFixedArity = (1);


om_tools.dom.form = (function om_tools$dom$form(var_args){
var args30990 = [];
var len__27051__auto___31592 = arguments.length;
var i__27052__auto___31593 = (0);
while(true){
if((i__27052__auto___31593 < len__27051__auto___31592)){
args30990.push((arguments[i__27052__auto___31593]));

var G__31594 = (i__27052__auto___31593 + (1));
i__27052__auto___31593 = G__31594;
continue;
} else {
}
break;
}

var G__30994 = args30990.length;
switch (G__30994) {
case 0:
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30990.slice((1)),(0),null));
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});

om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.form.cljs$lang$applyTo = (function (seq30991){
var G__30992 = cljs.core.first.call(null,seq30991);
var seq30991__$1 = cljs.core.next.call(null,seq30991);
return om_tools.dom.form.cljs$core$IFn$_invoke$arity$variadic(G__30992,seq30991__$1);
});

om_tools.dom.form.cljs$lang$maxFixedArity = (1);


om_tools.dom.h1 = (function om_tools$dom$h1(var_args){
var args30995 = [];
var len__27051__auto___31596 = arguments.length;
var i__27052__auto___31597 = (0);
while(true){
if((i__27052__auto___31597 < len__27051__auto___31596)){
args30995.push((arguments[i__27052__auto___31597]));

var G__31598 = (i__27052__auto___31597 + (1));
i__27052__auto___31597 = G__31598;
continue;
} else {
}
break;
}

var G__30999 = args30995.length;
switch (G__30999) {
case 0:
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30995.slice((1)),(0),null));
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});

om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.h1.cljs$lang$applyTo = (function (seq30996){
var G__30997 = cljs.core.first.call(null,seq30996);
var seq30996__$1 = cljs.core.next.call(null,seq30996);
return om_tools.dom.h1.cljs$core$IFn$_invoke$arity$variadic(G__30997,seq30996__$1);
});

om_tools.dom.h1.cljs$lang$maxFixedArity = (1);


om_tools.dom.h2 = (function om_tools$dom$h2(var_args){
var args31000 = [];
var len__27051__auto___31600 = arguments.length;
var i__27052__auto___31601 = (0);
while(true){
if((i__27052__auto___31601 < len__27051__auto___31600)){
args31000.push((arguments[i__27052__auto___31601]));

var G__31602 = (i__27052__auto___31601 + (1));
i__27052__auto___31601 = G__31602;
continue;
} else {
}
break;
}

var G__31004 = args31000.length;
switch (G__31004) {
case 0:
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31000.slice((1)),(0),null));
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});

om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.h2.cljs$lang$applyTo = (function (seq31001){
var G__31002 = cljs.core.first.call(null,seq31001);
var seq31001__$1 = cljs.core.next.call(null,seq31001);
return om_tools.dom.h2.cljs$core$IFn$_invoke$arity$variadic(G__31002,seq31001__$1);
});

om_tools.dom.h2.cljs$lang$maxFixedArity = (1);


om_tools.dom.h3 = (function om_tools$dom$h3(var_args){
var args31005 = [];
var len__27051__auto___31604 = arguments.length;
var i__27052__auto___31605 = (0);
while(true){
if((i__27052__auto___31605 < len__27051__auto___31604)){
args31005.push((arguments[i__27052__auto___31605]));

var G__31606 = (i__27052__auto___31605 + (1));
i__27052__auto___31605 = G__31606;
continue;
} else {
}
break;
}

var G__31009 = args31005.length;
switch (G__31009) {
case 0:
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31005.slice((1)),(0),null));
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});

om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.h3.cljs$lang$applyTo = (function (seq31006){
var G__31007 = cljs.core.first.call(null,seq31006);
var seq31006__$1 = cljs.core.next.call(null,seq31006);
return om_tools.dom.h3.cljs$core$IFn$_invoke$arity$variadic(G__31007,seq31006__$1);
});

om_tools.dom.h3.cljs$lang$maxFixedArity = (1);


om_tools.dom.h4 = (function om_tools$dom$h4(var_args){
var args31010 = [];
var len__27051__auto___31608 = arguments.length;
var i__27052__auto___31609 = (0);
while(true){
if((i__27052__auto___31609 < len__27051__auto___31608)){
args31010.push((arguments[i__27052__auto___31609]));

var G__31610 = (i__27052__auto___31609 + (1));
i__27052__auto___31609 = G__31610;
continue;
} else {
}
break;
}

var G__31014 = args31010.length;
switch (G__31014) {
case 0:
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31010.slice((1)),(0),null));
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});

om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.h4.cljs$lang$applyTo = (function (seq31011){
var G__31012 = cljs.core.first.call(null,seq31011);
var seq31011__$1 = cljs.core.next.call(null,seq31011);
return om_tools.dom.h4.cljs$core$IFn$_invoke$arity$variadic(G__31012,seq31011__$1);
});

om_tools.dom.h4.cljs$lang$maxFixedArity = (1);


om_tools.dom.h5 = (function om_tools$dom$h5(var_args){
var args31015 = [];
var len__27051__auto___31612 = arguments.length;
var i__27052__auto___31613 = (0);
while(true){
if((i__27052__auto___31613 < len__27051__auto___31612)){
args31015.push((arguments[i__27052__auto___31613]));

var G__31614 = (i__27052__auto___31613 + (1));
i__27052__auto___31613 = G__31614;
continue;
} else {
}
break;
}

var G__31019 = args31015.length;
switch (G__31019) {
case 0:
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31015.slice((1)),(0),null));
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});

om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.h5.cljs$lang$applyTo = (function (seq31016){
var G__31017 = cljs.core.first.call(null,seq31016);
var seq31016__$1 = cljs.core.next.call(null,seq31016);
return om_tools.dom.h5.cljs$core$IFn$_invoke$arity$variadic(G__31017,seq31016__$1);
});

om_tools.dom.h5.cljs$lang$maxFixedArity = (1);


om_tools.dom.h6 = (function om_tools$dom$h6(var_args){
var args31020 = [];
var len__27051__auto___31616 = arguments.length;
var i__27052__auto___31617 = (0);
while(true){
if((i__27052__auto___31617 < len__27051__auto___31616)){
args31020.push((arguments[i__27052__auto___31617]));

var G__31618 = (i__27052__auto___31617 + (1));
i__27052__auto___31617 = G__31618;
continue;
} else {
}
break;
}

var G__31024 = args31020.length;
switch (G__31024) {
case 0:
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31020.slice((1)),(0),null));
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});

om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.h6.cljs$lang$applyTo = (function (seq31021){
var G__31022 = cljs.core.first.call(null,seq31021);
var seq31021__$1 = cljs.core.next.call(null,seq31021);
return om_tools.dom.h6.cljs$core$IFn$_invoke$arity$variadic(G__31022,seq31021__$1);
});

om_tools.dom.h6.cljs$lang$maxFixedArity = (1);


om_tools.dom.head = (function om_tools$dom$head(var_args){
var args31025 = [];
var len__27051__auto___31620 = arguments.length;
var i__27052__auto___31621 = (0);
while(true){
if((i__27052__auto___31621 < len__27051__auto___31620)){
args31025.push((arguments[i__27052__auto___31621]));

var G__31622 = (i__27052__auto___31621 + (1));
i__27052__auto___31621 = G__31622;
continue;
} else {
}
break;
}

var G__31029 = args31025.length;
switch (G__31029) {
case 0:
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31025.slice((1)),(0),null));
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});

om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.head.cljs$lang$applyTo = (function (seq31026){
var G__31027 = cljs.core.first.call(null,seq31026);
var seq31026__$1 = cljs.core.next.call(null,seq31026);
return om_tools.dom.head.cljs$core$IFn$_invoke$arity$variadic(G__31027,seq31026__$1);
});

om_tools.dom.head.cljs$lang$maxFixedArity = (1);


om_tools.dom.header = (function om_tools$dom$header(var_args){
var args31030 = [];
var len__27051__auto___31624 = arguments.length;
var i__27052__auto___31625 = (0);
while(true){
if((i__27052__auto___31625 < len__27051__auto___31624)){
args31030.push((arguments[i__27052__auto___31625]));

var G__31626 = (i__27052__auto___31625 + (1));
i__27052__auto___31625 = G__31626;
continue;
} else {
}
break;
}

var G__31034 = args31030.length;
switch (G__31034) {
case 0:
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31030.slice((1)),(0),null));
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});

om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.header.cljs$lang$applyTo = (function (seq31031){
var G__31032 = cljs.core.first.call(null,seq31031);
var seq31031__$1 = cljs.core.next.call(null,seq31031);
return om_tools.dom.header.cljs$core$IFn$_invoke$arity$variadic(G__31032,seq31031__$1);
});

om_tools.dom.header.cljs$lang$maxFixedArity = (1);


om_tools.dom.hr = (function om_tools$dom$hr(var_args){
var args31035 = [];
var len__27051__auto___31628 = arguments.length;
var i__27052__auto___31629 = (0);
while(true){
if((i__27052__auto___31629 < len__27051__auto___31628)){
args31035.push((arguments[i__27052__auto___31629]));

var G__31630 = (i__27052__auto___31629 + (1));
i__27052__auto___31629 = G__31630;
continue;
} else {
}
break;
}

var G__31039 = args31035.length;
switch (G__31039) {
case 0:
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31035.slice((1)),(0),null));
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});

om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.hr.cljs$lang$applyTo = (function (seq31036){
var G__31037 = cljs.core.first.call(null,seq31036);
var seq31036__$1 = cljs.core.next.call(null,seq31036);
return om_tools.dom.hr.cljs$core$IFn$_invoke$arity$variadic(G__31037,seq31036__$1);
});

om_tools.dom.hr.cljs$lang$maxFixedArity = (1);


om_tools.dom.html = (function om_tools$dom$html(var_args){
var args31040 = [];
var len__27051__auto___31632 = arguments.length;
var i__27052__auto___31633 = (0);
while(true){
if((i__27052__auto___31633 < len__27051__auto___31632)){
args31040.push((arguments[i__27052__auto___31633]));

var G__31634 = (i__27052__auto___31633 + (1));
i__27052__auto___31633 = G__31634;
continue;
} else {
}
break;
}

var G__31044 = args31040.length;
switch (G__31044) {
case 0:
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31040.slice((1)),(0),null));
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});

om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.html.cljs$lang$applyTo = (function (seq31041){
var G__31042 = cljs.core.first.call(null,seq31041);
var seq31041__$1 = cljs.core.next.call(null,seq31041);
return om_tools.dom.html.cljs$core$IFn$_invoke$arity$variadic(G__31042,seq31041__$1);
});

om_tools.dom.html.cljs$lang$maxFixedArity = (1);


om_tools.dom.i = (function om_tools$dom$i(var_args){
var args31045 = [];
var len__27051__auto___31636 = arguments.length;
var i__27052__auto___31637 = (0);
while(true){
if((i__27052__auto___31637 < len__27051__auto___31636)){
args31045.push((arguments[i__27052__auto___31637]));

var G__31638 = (i__27052__auto___31637 + (1));
i__27052__auto___31637 = G__31638;
continue;
} else {
}
break;
}

var G__31049 = args31045.length;
switch (G__31049) {
case 0:
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31045.slice((1)),(0),null));
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});

om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.i.cljs$lang$applyTo = (function (seq31046){
var G__31047 = cljs.core.first.call(null,seq31046);
var seq31046__$1 = cljs.core.next.call(null,seq31046);
return om_tools.dom.i.cljs$core$IFn$_invoke$arity$variadic(G__31047,seq31046__$1);
});

om_tools.dom.i.cljs$lang$maxFixedArity = (1);


om_tools.dom.iframe = (function om_tools$dom$iframe(var_args){
var args31050 = [];
var len__27051__auto___31640 = arguments.length;
var i__27052__auto___31641 = (0);
while(true){
if((i__27052__auto___31641 < len__27051__auto___31640)){
args31050.push((arguments[i__27052__auto___31641]));

var G__31642 = (i__27052__auto___31641 + (1));
i__27052__auto___31641 = G__31642;
continue;
} else {
}
break;
}

var G__31054 = args31050.length;
switch (G__31054) {
case 0:
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31050.slice((1)),(0),null));
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});

om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.iframe.cljs$lang$applyTo = (function (seq31051){
var G__31052 = cljs.core.first.call(null,seq31051);
var seq31051__$1 = cljs.core.next.call(null,seq31051);
return om_tools.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(G__31052,seq31051__$1);
});

om_tools.dom.iframe.cljs$lang$maxFixedArity = (1);


om_tools.dom.img = (function om_tools$dom$img(var_args){
var args31055 = [];
var len__27051__auto___31644 = arguments.length;
var i__27052__auto___31645 = (0);
while(true){
if((i__27052__auto___31645 < len__27051__auto___31644)){
args31055.push((arguments[i__27052__auto___31645]));

var G__31646 = (i__27052__auto___31645 + (1));
i__27052__auto___31645 = G__31646;
continue;
} else {
}
break;
}

var G__31059 = args31055.length;
switch (G__31059) {
case 0:
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31055.slice((1)),(0),null));
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});

om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.img.cljs$lang$applyTo = (function (seq31056){
var G__31057 = cljs.core.first.call(null,seq31056);
var seq31056__$1 = cljs.core.next.call(null,seq31056);
return om_tools.dom.img.cljs$core$IFn$_invoke$arity$variadic(G__31057,seq31056__$1);
});

om_tools.dom.img.cljs$lang$maxFixedArity = (1);


om_tools.dom.ins = (function om_tools$dom$ins(var_args){
var args31060 = [];
var len__27051__auto___31648 = arguments.length;
var i__27052__auto___31649 = (0);
while(true){
if((i__27052__auto___31649 < len__27051__auto___31648)){
args31060.push((arguments[i__27052__auto___31649]));

var G__31650 = (i__27052__auto___31649 + (1));
i__27052__auto___31649 = G__31650;
continue;
} else {
}
break;
}

var G__31064 = args31060.length;
switch (G__31064) {
case 0:
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31060.slice((1)),(0),null));
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});

om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.ins.cljs$lang$applyTo = (function (seq31061){
var G__31062 = cljs.core.first.call(null,seq31061);
var seq31061__$1 = cljs.core.next.call(null,seq31061);
return om_tools.dom.ins.cljs$core$IFn$_invoke$arity$variadic(G__31062,seq31061__$1);
});

om_tools.dom.ins.cljs$lang$maxFixedArity = (1);


om_tools.dom.kbd = (function om_tools$dom$kbd(var_args){
var args31065 = [];
var len__27051__auto___31652 = arguments.length;
var i__27052__auto___31653 = (0);
while(true){
if((i__27052__auto___31653 < len__27051__auto___31652)){
args31065.push((arguments[i__27052__auto___31653]));

var G__31654 = (i__27052__auto___31653 + (1));
i__27052__auto___31653 = G__31654;
continue;
} else {
}
break;
}

var G__31069 = args31065.length;
switch (G__31069) {
case 0:
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31065.slice((1)),(0),null));
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});

om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.kbd.cljs$lang$applyTo = (function (seq31066){
var G__31067 = cljs.core.first.call(null,seq31066);
var seq31066__$1 = cljs.core.next.call(null,seq31066);
return om_tools.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(G__31067,seq31066__$1);
});

om_tools.dom.kbd.cljs$lang$maxFixedArity = (1);


om_tools.dom.keygen = (function om_tools$dom$keygen(var_args){
var args31070 = [];
var len__27051__auto___31656 = arguments.length;
var i__27052__auto___31657 = (0);
while(true){
if((i__27052__auto___31657 < len__27051__auto___31656)){
args31070.push((arguments[i__27052__auto___31657]));

var G__31658 = (i__27052__auto___31657 + (1));
i__27052__auto___31657 = G__31658;
continue;
} else {
}
break;
}

var G__31074 = args31070.length;
switch (G__31074) {
case 0:
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31070.slice((1)),(0),null));
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});

om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.keygen.cljs$lang$applyTo = (function (seq31071){
var G__31072 = cljs.core.first.call(null,seq31071);
var seq31071__$1 = cljs.core.next.call(null,seq31071);
return om_tools.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(G__31072,seq31071__$1);
});

om_tools.dom.keygen.cljs$lang$maxFixedArity = (1);


om_tools.dom.label = (function om_tools$dom$label(var_args){
var args31075 = [];
var len__27051__auto___31660 = arguments.length;
var i__27052__auto___31661 = (0);
while(true){
if((i__27052__auto___31661 < len__27051__auto___31660)){
args31075.push((arguments[i__27052__auto___31661]));

var G__31662 = (i__27052__auto___31661 + (1));
i__27052__auto___31661 = G__31662;
continue;
} else {
}
break;
}

var G__31079 = args31075.length;
switch (G__31079) {
case 0:
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31075.slice((1)),(0),null));
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});

om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.label.cljs$lang$applyTo = (function (seq31076){
var G__31077 = cljs.core.first.call(null,seq31076);
var seq31076__$1 = cljs.core.next.call(null,seq31076);
return om_tools.dom.label.cljs$core$IFn$_invoke$arity$variadic(G__31077,seq31076__$1);
});

om_tools.dom.label.cljs$lang$maxFixedArity = (1);


om_tools.dom.legend = (function om_tools$dom$legend(var_args){
var args31080 = [];
var len__27051__auto___31664 = arguments.length;
var i__27052__auto___31665 = (0);
while(true){
if((i__27052__auto___31665 < len__27051__auto___31664)){
args31080.push((arguments[i__27052__auto___31665]));

var G__31666 = (i__27052__auto___31665 + (1));
i__27052__auto___31665 = G__31666;
continue;
} else {
}
break;
}

var G__31084 = args31080.length;
switch (G__31084) {
case 0:
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31080.slice((1)),(0),null));
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});

om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.legend.cljs$lang$applyTo = (function (seq31081){
var G__31082 = cljs.core.first.call(null,seq31081);
var seq31081__$1 = cljs.core.next.call(null,seq31081);
return om_tools.dom.legend.cljs$core$IFn$_invoke$arity$variadic(G__31082,seq31081__$1);
});

om_tools.dom.legend.cljs$lang$maxFixedArity = (1);


om_tools.dom.li = (function om_tools$dom$li(var_args){
var args31085 = [];
var len__27051__auto___31668 = arguments.length;
var i__27052__auto___31669 = (0);
while(true){
if((i__27052__auto___31669 < len__27051__auto___31668)){
args31085.push((arguments[i__27052__auto___31669]));

var G__31670 = (i__27052__auto___31669 + (1));
i__27052__auto___31669 = G__31670;
continue;
} else {
}
break;
}

var G__31089 = args31085.length;
switch (G__31089) {
case 0:
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31085.slice((1)),(0),null));
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});

om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.li.cljs$lang$applyTo = (function (seq31086){
var G__31087 = cljs.core.first.call(null,seq31086);
var seq31086__$1 = cljs.core.next.call(null,seq31086);
return om_tools.dom.li.cljs$core$IFn$_invoke$arity$variadic(G__31087,seq31086__$1);
});

om_tools.dom.li.cljs$lang$maxFixedArity = (1);


om_tools.dom.link = (function om_tools$dom$link(var_args){
var args31090 = [];
var len__27051__auto___31672 = arguments.length;
var i__27052__auto___31673 = (0);
while(true){
if((i__27052__auto___31673 < len__27051__auto___31672)){
args31090.push((arguments[i__27052__auto___31673]));

var G__31674 = (i__27052__auto___31673 + (1));
i__27052__auto___31673 = G__31674;
continue;
} else {
}
break;
}

var G__31094 = args31090.length;
switch (G__31094) {
case 0:
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31090.slice((1)),(0),null));
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});

om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.link.cljs$lang$applyTo = (function (seq31091){
var G__31092 = cljs.core.first.call(null,seq31091);
var seq31091__$1 = cljs.core.next.call(null,seq31091);
return om_tools.dom.link.cljs$core$IFn$_invoke$arity$variadic(G__31092,seq31091__$1);
});

om_tools.dom.link.cljs$lang$maxFixedArity = (1);


om_tools.dom.main = (function om_tools$dom$main(var_args){
var args31095 = [];
var len__27051__auto___31676 = arguments.length;
var i__27052__auto___31677 = (0);
while(true){
if((i__27052__auto___31677 < len__27051__auto___31676)){
args31095.push((arguments[i__27052__auto___31677]));

var G__31678 = (i__27052__auto___31677 + (1));
i__27052__auto___31677 = G__31678;
continue;
} else {
}
break;
}

var G__31099 = args31095.length;
switch (G__31099) {
case 0:
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31095.slice((1)),(0),null));
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});

om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.main.cljs$lang$applyTo = (function (seq31096){
var G__31097 = cljs.core.first.call(null,seq31096);
var seq31096__$1 = cljs.core.next.call(null,seq31096);
return om_tools.dom.main.cljs$core$IFn$_invoke$arity$variadic(G__31097,seq31096__$1);
});

om_tools.dom.main.cljs$lang$maxFixedArity = (1);


om_tools.dom.map = (function om_tools$dom$map(var_args){
var args31100 = [];
var len__27051__auto___31680 = arguments.length;
var i__27052__auto___31681 = (0);
while(true){
if((i__27052__auto___31681 < len__27051__auto___31680)){
args31100.push((arguments[i__27052__auto___31681]));

var G__31682 = (i__27052__auto___31681 + (1));
i__27052__auto___31681 = G__31682;
continue;
} else {
}
break;
}

var G__31104 = args31100.length;
switch (G__31104) {
case 0:
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31100.slice((1)),(0),null));
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});

om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.map.cljs$lang$applyTo = (function (seq31101){
var G__31102 = cljs.core.first.call(null,seq31101);
var seq31101__$1 = cljs.core.next.call(null,seq31101);
return om_tools.dom.map.cljs$core$IFn$_invoke$arity$variadic(G__31102,seq31101__$1);
});

om_tools.dom.map.cljs$lang$maxFixedArity = (1);


om_tools.dom.mark = (function om_tools$dom$mark(var_args){
var args31105 = [];
var len__27051__auto___31684 = arguments.length;
var i__27052__auto___31685 = (0);
while(true){
if((i__27052__auto___31685 < len__27051__auto___31684)){
args31105.push((arguments[i__27052__auto___31685]));

var G__31686 = (i__27052__auto___31685 + (1));
i__27052__auto___31685 = G__31686;
continue;
} else {
}
break;
}

var G__31109 = args31105.length;
switch (G__31109) {
case 0:
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31105.slice((1)),(0),null));
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});

om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.mark.cljs$lang$applyTo = (function (seq31106){
var G__31107 = cljs.core.first.call(null,seq31106);
var seq31106__$1 = cljs.core.next.call(null,seq31106);
return om_tools.dom.mark.cljs$core$IFn$_invoke$arity$variadic(G__31107,seq31106__$1);
});

om_tools.dom.mark.cljs$lang$maxFixedArity = (1);


om_tools.dom.menu = (function om_tools$dom$menu(var_args){
var args31110 = [];
var len__27051__auto___31688 = arguments.length;
var i__27052__auto___31689 = (0);
while(true){
if((i__27052__auto___31689 < len__27051__auto___31688)){
args31110.push((arguments[i__27052__auto___31689]));

var G__31690 = (i__27052__auto___31689 + (1));
i__27052__auto___31689 = G__31690;
continue;
} else {
}
break;
}

var G__31114 = args31110.length;
switch (G__31114) {
case 0:
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31110.slice((1)),(0),null));
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});

om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.menu.cljs$lang$applyTo = (function (seq31111){
var G__31112 = cljs.core.first.call(null,seq31111);
var seq31111__$1 = cljs.core.next.call(null,seq31111);
return om_tools.dom.menu.cljs$core$IFn$_invoke$arity$variadic(G__31112,seq31111__$1);
});

om_tools.dom.menu.cljs$lang$maxFixedArity = (1);


om_tools.dom.menuitem = (function om_tools$dom$menuitem(var_args){
var args31115 = [];
var len__27051__auto___31692 = arguments.length;
var i__27052__auto___31693 = (0);
while(true){
if((i__27052__auto___31693 < len__27051__auto___31692)){
args31115.push((arguments[i__27052__auto___31693]));

var G__31694 = (i__27052__auto___31693 + (1));
i__27052__auto___31693 = G__31694;
continue;
} else {
}
break;
}

var G__31119 = args31115.length;
switch (G__31119) {
case 0:
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31115.slice((1)),(0),null));
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});

om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.menuitem.cljs$lang$applyTo = (function (seq31116){
var G__31117 = cljs.core.first.call(null,seq31116);
var seq31116__$1 = cljs.core.next.call(null,seq31116);
return om_tools.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(G__31117,seq31116__$1);
});

om_tools.dom.menuitem.cljs$lang$maxFixedArity = (1);


om_tools.dom.meta = (function om_tools$dom$meta(var_args){
var args31120 = [];
var len__27051__auto___31696 = arguments.length;
var i__27052__auto___31697 = (0);
while(true){
if((i__27052__auto___31697 < len__27051__auto___31696)){
args31120.push((arguments[i__27052__auto___31697]));

var G__31698 = (i__27052__auto___31697 + (1));
i__27052__auto___31697 = G__31698;
continue;
} else {
}
break;
}

var G__31124 = args31120.length;
switch (G__31124) {
case 0:
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31120.slice((1)),(0),null));
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});

om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.meta.cljs$lang$applyTo = (function (seq31121){
var G__31122 = cljs.core.first.call(null,seq31121);
var seq31121__$1 = cljs.core.next.call(null,seq31121);
return om_tools.dom.meta.cljs$core$IFn$_invoke$arity$variadic(G__31122,seq31121__$1);
});

om_tools.dom.meta.cljs$lang$maxFixedArity = (1);


om_tools.dom.meter = (function om_tools$dom$meter(var_args){
var args31125 = [];
var len__27051__auto___31700 = arguments.length;
var i__27052__auto___31701 = (0);
while(true){
if((i__27052__auto___31701 < len__27051__auto___31700)){
args31125.push((arguments[i__27052__auto___31701]));

var G__31702 = (i__27052__auto___31701 + (1));
i__27052__auto___31701 = G__31702;
continue;
} else {
}
break;
}

var G__31129 = args31125.length;
switch (G__31129) {
case 0:
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31125.slice((1)),(0),null));
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});

om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.meter.cljs$lang$applyTo = (function (seq31126){
var G__31127 = cljs.core.first.call(null,seq31126);
var seq31126__$1 = cljs.core.next.call(null,seq31126);
return om_tools.dom.meter.cljs$core$IFn$_invoke$arity$variadic(G__31127,seq31126__$1);
});

om_tools.dom.meter.cljs$lang$maxFixedArity = (1);


om_tools.dom.nav = (function om_tools$dom$nav(var_args){
var args31130 = [];
var len__27051__auto___31704 = arguments.length;
var i__27052__auto___31705 = (0);
while(true){
if((i__27052__auto___31705 < len__27051__auto___31704)){
args31130.push((arguments[i__27052__auto___31705]));

var G__31706 = (i__27052__auto___31705 + (1));
i__27052__auto___31705 = G__31706;
continue;
} else {
}
break;
}

var G__31134 = args31130.length;
switch (G__31134) {
case 0:
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31130.slice((1)),(0),null));
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});

om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.nav.cljs$lang$applyTo = (function (seq31131){
var G__31132 = cljs.core.first.call(null,seq31131);
var seq31131__$1 = cljs.core.next.call(null,seq31131);
return om_tools.dom.nav.cljs$core$IFn$_invoke$arity$variadic(G__31132,seq31131__$1);
});

om_tools.dom.nav.cljs$lang$maxFixedArity = (1);


om_tools.dom.noscript = (function om_tools$dom$noscript(var_args){
var args31135 = [];
var len__27051__auto___31708 = arguments.length;
var i__27052__auto___31709 = (0);
while(true){
if((i__27052__auto___31709 < len__27051__auto___31708)){
args31135.push((arguments[i__27052__auto___31709]));

var G__31710 = (i__27052__auto___31709 + (1));
i__27052__auto___31709 = G__31710;
continue;
} else {
}
break;
}

var G__31139 = args31135.length;
switch (G__31139) {
case 0:
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31135.slice((1)),(0),null));
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});

om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.noscript.cljs$lang$applyTo = (function (seq31136){
var G__31137 = cljs.core.first.call(null,seq31136);
var seq31136__$1 = cljs.core.next.call(null,seq31136);
return om_tools.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(G__31137,seq31136__$1);
});

om_tools.dom.noscript.cljs$lang$maxFixedArity = (1);


om_tools.dom.object = (function om_tools$dom$object(var_args){
var args31140 = [];
var len__27051__auto___31712 = arguments.length;
var i__27052__auto___31713 = (0);
while(true){
if((i__27052__auto___31713 < len__27051__auto___31712)){
args31140.push((arguments[i__27052__auto___31713]));

var G__31714 = (i__27052__auto___31713 + (1));
i__27052__auto___31713 = G__31714;
continue;
} else {
}
break;
}

var G__31144 = args31140.length;
switch (G__31144) {
case 0:
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31140.slice((1)),(0),null));
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});

om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.object.cljs$lang$applyTo = (function (seq31141){
var G__31142 = cljs.core.first.call(null,seq31141);
var seq31141__$1 = cljs.core.next.call(null,seq31141);
return om_tools.dom.object.cljs$core$IFn$_invoke$arity$variadic(G__31142,seq31141__$1);
});

om_tools.dom.object.cljs$lang$maxFixedArity = (1);


om_tools.dom.ol = (function om_tools$dom$ol(var_args){
var args31145 = [];
var len__27051__auto___31716 = arguments.length;
var i__27052__auto___31717 = (0);
while(true){
if((i__27052__auto___31717 < len__27051__auto___31716)){
args31145.push((arguments[i__27052__auto___31717]));

var G__31718 = (i__27052__auto___31717 + (1));
i__27052__auto___31717 = G__31718;
continue;
} else {
}
break;
}

var G__31149 = args31145.length;
switch (G__31149) {
case 0:
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31145.slice((1)),(0),null));
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});

om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.ol.cljs$lang$applyTo = (function (seq31146){
var G__31147 = cljs.core.first.call(null,seq31146);
var seq31146__$1 = cljs.core.next.call(null,seq31146);
return om_tools.dom.ol.cljs$core$IFn$_invoke$arity$variadic(G__31147,seq31146__$1);
});

om_tools.dom.ol.cljs$lang$maxFixedArity = (1);


om_tools.dom.optgroup = (function om_tools$dom$optgroup(var_args){
var args31150 = [];
var len__27051__auto___31720 = arguments.length;
var i__27052__auto___31721 = (0);
while(true){
if((i__27052__auto___31721 < len__27051__auto___31720)){
args31150.push((arguments[i__27052__auto___31721]));

var G__31722 = (i__27052__auto___31721 + (1));
i__27052__auto___31721 = G__31722;
continue;
} else {
}
break;
}

var G__31154 = args31150.length;
switch (G__31154) {
case 0:
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31150.slice((1)),(0),null));
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});

om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.optgroup.cljs$lang$applyTo = (function (seq31151){
var G__31152 = cljs.core.first.call(null,seq31151);
var seq31151__$1 = cljs.core.next.call(null,seq31151);
return om_tools.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(G__31152,seq31151__$1);
});

om_tools.dom.optgroup.cljs$lang$maxFixedArity = (1);


om_tools.dom.output = (function om_tools$dom$output(var_args){
var args31155 = [];
var len__27051__auto___31724 = arguments.length;
var i__27052__auto___31725 = (0);
while(true){
if((i__27052__auto___31725 < len__27051__auto___31724)){
args31155.push((arguments[i__27052__auto___31725]));

var G__31726 = (i__27052__auto___31725 + (1));
i__27052__auto___31725 = G__31726;
continue;
} else {
}
break;
}

var G__31159 = args31155.length;
switch (G__31159) {
case 0:
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31155.slice((1)),(0),null));
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});

om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.output.cljs$lang$applyTo = (function (seq31156){
var G__31157 = cljs.core.first.call(null,seq31156);
var seq31156__$1 = cljs.core.next.call(null,seq31156);
return om_tools.dom.output.cljs$core$IFn$_invoke$arity$variadic(G__31157,seq31156__$1);
});

om_tools.dom.output.cljs$lang$maxFixedArity = (1);


om_tools.dom.p = (function om_tools$dom$p(var_args){
var args31160 = [];
var len__27051__auto___31728 = arguments.length;
var i__27052__auto___31729 = (0);
while(true){
if((i__27052__auto___31729 < len__27051__auto___31728)){
args31160.push((arguments[i__27052__auto___31729]));

var G__31730 = (i__27052__auto___31729 + (1));
i__27052__auto___31729 = G__31730;
continue;
} else {
}
break;
}

var G__31164 = args31160.length;
switch (G__31164) {
case 0:
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31160.slice((1)),(0),null));
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});

om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.p.cljs$lang$applyTo = (function (seq31161){
var G__31162 = cljs.core.first.call(null,seq31161);
var seq31161__$1 = cljs.core.next.call(null,seq31161);
return om_tools.dom.p.cljs$core$IFn$_invoke$arity$variadic(G__31162,seq31161__$1);
});

om_tools.dom.p.cljs$lang$maxFixedArity = (1);


om_tools.dom.param = (function om_tools$dom$param(var_args){
var args31165 = [];
var len__27051__auto___31732 = arguments.length;
var i__27052__auto___31733 = (0);
while(true){
if((i__27052__auto___31733 < len__27051__auto___31732)){
args31165.push((arguments[i__27052__auto___31733]));

var G__31734 = (i__27052__auto___31733 + (1));
i__27052__auto___31733 = G__31734;
continue;
} else {
}
break;
}

var G__31169 = args31165.length;
switch (G__31169) {
case 0:
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31165.slice((1)),(0),null));
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});

om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.param.cljs$lang$applyTo = (function (seq31166){
var G__31167 = cljs.core.first.call(null,seq31166);
var seq31166__$1 = cljs.core.next.call(null,seq31166);
return om_tools.dom.param.cljs$core$IFn$_invoke$arity$variadic(G__31167,seq31166__$1);
});

om_tools.dom.param.cljs$lang$maxFixedArity = (1);


om_tools.dom.picture = (function om_tools$dom$picture(var_args){
var args31170 = [];
var len__27051__auto___31736 = arguments.length;
var i__27052__auto___31737 = (0);
while(true){
if((i__27052__auto___31737 < len__27051__auto___31736)){
args31170.push((arguments[i__27052__auto___31737]));

var G__31738 = (i__27052__auto___31737 + (1));
i__27052__auto___31737 = G__31738;
continue;
} else {
}
break;
}

var G__31174 = args31170.length;
switch (G__31174) {
case 0:
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31170.slice((1)),(0),null));
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.picture,null,null);
});

om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.picture,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.picture.cljs$lang$applyTo = (function (seq31171){
var G__31172 = cljs.core.first.call(null,seq31171);
var seq31171__$1 = cljs.core.next.call(null,seq31171);
return om_tools.dom.picture.cljs$core$IFn$_invoke$arity$variadic(G__31172,seq31171__$1);
});

om_tools.dom.picture.cljs$lang$maxFixedArity = (1);


om_tools.dom.pre = (function om_tools$dom$pre(var_args){
var args31175 = [];
var len__27051__auto___31740 = arguments.length;
var i__27052__auto___31741 = (0);
while(true){
if((i__27052__auto___31741 < len__27051__auto___31740)){
args31175.push((arguments[i__27052__auto___31741]));

var G__31742 = (i__27052__auto___31741 + (1));
i__27052__auto___31741 = G__31742;
continue;
} else {
}
break;
}

var G__31179 = args31175.length;
switch (G__31179) {
case 0:
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31175.slice((1)),(0),null));
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});

om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.pre.cljs$lang$applyTo = (function (seq31176){
var G__31177 = cljs.core.first.call(null,seq31176);
var seq31176__$1 = cljs.core.next.call(null,seq31176);
return om_tools.dom.pre.cljs$core$IFn$_invoke$arity$variadic(G__31177,seq31176__$1);
});

om_tools.dom.pre.cljs$lang$maxFixedArity = (1);


om_tools.dom.progress = (function om_tools$dom$progress(var_args){
var args31180 = [];
var len__27051__auto___31744 = arguments.length;
var i__27052__auto___31745 = (0);
while(true){
if((i__27052__auto___31745 < len__27051__auto___31744)){
args31180.push((arguments[i__27052__auto___31745]));

var G__31746 = (i__27052__auto___31745 + (1));
i__27052__auto___31745 = G__31746;
continue;
} else {
}
break;
}

var G__31184 = args31180.length;
switch (G__31184) {
case 0:
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31180.slice((1)),(0),null));
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});

om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.progress.cljs$lang$applyTo = (function (seq31181){
var G__31182 = cljs.core.first.call(null,seq31181);
var seq31181__$1 = cljs.core.next.call(null,seq31181);
return om_tools.dom.progress.cljs$core$IFn$_invoke$arity$variadic(G__31182,seq31181__$1);
});

om_tools.dom.progress.cljs$lang$maxFixedArity = (1);


om_tools.dom.q = (function om_tools$dom$q(var_args){
var args31185 = [];
var len__27051__auto___31748 = arguments.length;
var i__27052__auto___31749 = (0);
while(true){
if((i__27052__auto___31749 < len__27051__auto___31748)){
args31185.push((arguments[i__27052__auto___31749]));

var G__31750 = (i__27052__auto___31749 + (1));
i__27052__auto___31749 = G__31750;
continue;
} else {
}
break;
}

var G__31189 = args31185.length;
switch (G__31189) {
case 0:
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31185.slice((1)),(0),null));
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});

om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.q.cljs$lang$applyTo = (function (seq31186){
var G__31187 = cljs.core.first.call(null,seq31186);
var seq31186__$1 = cljs.core.next.call(null,seq31186);
return om_tools.dom.q.cljs$core$IFn$_invoke$arity$variadic(G__31187,seq31186__$1);
});

om_tools.dom.q.cljs$lang$maxFixedArity = (1);


om_tools.dom.rp = (function om_tools$dom$rp(var_args){
var args31190 = [];
var len__27051__auto___31752 = arguments.length;
var i__27052__auto___31753 = (0);
while(true){
if((i__27052__auto___31753 < len__27051__auto___31752)){
args31190.push((arguments[i__27052__auto___31753]));

var G__31754 = (i__27052__auto___31753 + (1));
i__27052__auto___31753 = G__31754;
continue;
} else {
}
break;
}

var G__31194 = args31190.length;
switch (G__31194) {
case 0:
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31190.slice((1)),(0),null));
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});

om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.rp.cljs$lang$applyTo = (function (seq31191){
var G__31192 = cljs.core.first.call(null,seq31191);
var seq31191__$1 = cljs.core.next.call(null,seq31191);
return om_tools.dom.rp.cljs$core$IFn$_invoke$arity$variadic(G__31192,seq31191__$1);
});

om_tools.dom.rp.cljs$lang$maxFixedArity = (1);


om_tools.dom.rt = (function om_tools$dom$rt(var_args){
var args31195 = [];
var len__27051__auto___31756 = arguments.length;
var i__27052__auto___31757 = (0);
while(true){
if((i__27052__auto___31757 < len__27051__auto___31756)){
args31195.push((arguments[i__27052__auto___31757]));

var G__31758 = (i__27052__auto___31757 + (1));
i__27052__auto___31757 = G__31758;
continue;
} else {
}
break;
}

var G__31199 = args31195.length;
switch (G__31199) {
case 0:
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31195.slice((1)),(0),null));
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});

om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.rt.cljs$lang$applyTo = (function (seq31196){
var G__31197 = cljs.core.first.call(null,seq31196);
var seq31196__$1 = cljs.core.next.call(null,seq31196);
return om_tools.dom.rt.cljs$core$IFn$_invoke$arity$variadic(G__31197,seq31196__$1);
});

om_tools.dom.rt.cljs$lang$maxFixedArity = (1);


om_tools.dom.ruby = (function om_tools$dom$ruby(var_args){
var args31200 = [];
var len__27051__auto___31760 = arguments.length;
var i__27052__auto___31761 = (0);
while(true){
if((i__27052__auto___31761 < len__27051__auto___31760)){
args31200.push((arguments[i__27052__auto___31761]));

var G__31762 = (i__27052__auto___31761 + (1));
i__27052__auto___31761 = G__31762;
continue;
} else {
}
break;
}

var G__31204 = args31200.length;
switch (G__31204) {
case 0:
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31200.slice((1)),(0),null));
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});

om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.ruby.cljs$lang$applyTo = (function (seq31201){
var G__31202 = cljs.core.first.call(null,seq31201);
var seq31201__$1 = cljs.core.next.call(null,seq31201);
return om_tools.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(G__31202,seq31201__$1);
});

om_tools.dom.ruby.cljs$lang$maxFixedArity = (1);


om_tools.dom.s = (function om_tools$dom$s(var_args){
var args31205 = [];
var len__27051__auto___31764 = arguments.length;
var i__27052__auto___31765 = (0);
while(true){
if((i__27052__auto___31765 < len__27051__auto___31764)){
args31205.push((arguments[i__27052__auto___31765]));

var G__31766 = (i__27052__auto___31765 + (1));
i__27052__auto___31765 = G__31766;
continue;
} else {
}
break;
}

var G__31209 = args31205.length;
switch (G__31209) {
case 0:
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31205.slice((1)),(0),null));
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});

om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.s.cljs$lang$applyTo = (function (seq31206){
var G__31207 = cljs.core.first.call(null,seq31206);
var seq31206__$1 = cljs.core.next.call(null,seq31206);
return om_tools.dom.s.cljs$core$IFn$_invoke$arity$variadic(G__31207,seq31206__$1);
});

om_tools.dom.s.cljs$lang$maxFixedArity = (1);


om_tools.dom.samp = (function om_tools$dom$samp(var_args){
var args31210 = [];
var len__27051__auto___31768 = arguments.length;
var i__27052__auto___31769 = (0);
while(true){
if((i__27052__auto___31769 < len__27051__auto___31768)){
args31210.push((arguments[i__27052__auto___31769]));

var G__31770 = (i__27052__auto___31769 + (1));
i__27052__auto___31769 = G__31770;
continue;
} else {
}
break;
}

var G__31214 = args31210.length;
switch (G__31214) {
case 0:
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31210.slice((1)),(0),null));
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});

om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.samp.cljs$lang$applyTo = (function (seq31211){
var G__31212 = cljs.core.first.call(null,seq31211);
var seq31211__$1 = cljs.core.next.call(null,seq31211);
return om_tools.dom.samp.cljs$core$IFn$_invoke$arity$variadic(G__31212,seq31211__$1);
});

om_tools.dom.samp.cljs$lang$maxFixedArity = (1);


om_tools.dom.script = (function om_tools$dom$script(var_args){
var args31215 = [];
var len__27051__auto___31772 = arguments.length;
var i__27052__auto___31773 = (0);
while(true){
if((i__27052__auto___31773 < len__27051__auto___31772)){
args31215.push((arguments[i__27052__auto___31773]));

var G__31774 = (i__27052__auto___31773 + (1));
i__27052__auto___31773 = G__31774;
continue;
} else {
}
break;
}

var G__31219 = args31215.length;
switch (G__31219) {
case 0:
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31215.slice((1)),(0),null));
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});

om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.script.cljs$lang$applyTo = (function (seq31216){
var G__31217 = cljs.core.first.call(null,seq31216);
var seq31216__$1 = cljs.core.next.call(null,seq31216);
return om_tools.dom.script.cljs$core$IFn$_invoke$arity$variadic(G__31217,seq31216__$1);
});

om_tools.dom.script.cljs$lang$maxFixedArity = (1);


om_tools.dom.section = (function om_tools$dom$section(var_args){
var args31220 = [];
var len__27051__auto___31776 = arguments.length;
var i__27052__auto___31777 = (0);
while(true){
if((i__27052__auto___31777 < len__27051__auto___31776)){
args31220.push((arguments[i__27052__auto___31777]));

var G__31778 = (i__27052__auto___31777 + (1));
i__27052__auto___31777 = G__31778;
continue;
} else {
}
break;
}

var G__31224 = args31220.length;
switch (G__31224) {
case 0:
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31220.slice((1)),(0),null));
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});

om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.section.cljs$lang$applyTo = (function (seq31221){
var G__31222 = cljs.core.first.call(null,seq31221);
var seq31221__$1 = cljs.core.next.call(null,seq31221);
return om_tools.dom.section.cljs$core$IFn$_invoke$arity$variadic(G__31222,seq31221__$1);
});

om_tools.dom.section.cljs$lang$maxFixedArity = (1);


om_tools.dom.small = (function om_tools$dom$small(var_args){
var args31225 = [];
var len__27051__auto___31780 = arguments.length;
var i__27052__auto___31781 = (0);
while(true){
if((i__27052__auto___31781 < len__27051__auto___31780)){
args31225.push((arguments[i__27052__auto___31781]));

var G__31782 = (i__27052__auto___31781 + (1));
i__27052__auto___31781 = G__31782;
continue;
} else {
}
break;
}

var G__31229 = args31225.length;
switch (G__31229) {
case 0:
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31225.slice((1)),(0),null));
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});

om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.small.cljs$lang$applyTo = (function (seq31226){
var G__31227 = cljs.core.first.call(null,seq31226);
var seq31226__$1 = cljs.core.next.call(null,seq31226);
return om_tools.dom.small.cljs$core$IFn$_invoke$arity$variadic(G__31227,seq31226__$1);
});

om_tools.dom.small.cljs$lang$maxFixedArity = (1);


om_tools.dom.source = (function om_tools$dom$source(var_args){
var args31230 = [];
var len__27051__auto___31784 = arguments.length;
var i__27052__auto___31785 = (0);
while(true){
if((i__27052__auto___31785 < len__27051__auto___31784)){
args31230.push((arguments[i__27052__auto___31785]));

var G__31786 = (i__27052__auto___31785 + (1));
i__27052__auto___31785 = G__31786;
continue;
} else {
}
break;
}

var G__31234 = args31230.length;
switch (G__31234) {
case 0:
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31230.slice((1)),(0),null));
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});

om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.source.cljs$lang$applyTo = (function (seq31231){
var G__31232 = cljs.core.first.call(null,seq31231);
var seq31231__$1 = cljs.core.next.call(null,seq31231);
return om_tools.dom.source.cljs$core$IFn$_invoke$arity$variadic(G__31232,seq31231__$1);
});

om_tools.dom.source.cljs$lang$maxFixedArity = (1);


om_tools.dom.span = (function om_tools$dom$span(var_args){
var args31235 = [];
var len__27051__auto___31788 = arguments.length;
var i__27052__auto___31789 = (0);
while(true){
if((i__27052__auto___31789 < len__27051__auto___31788)){
args31235.push((arguments[i__27052__auto___31789]));

var G__31790 = (i__27052__auto___31789 + (1));
i__27052__auto___31789 = G__31790;
continue;
} else {
}
break;
}

var G__31239 = args31235.length;
switch (G__31239) {
case 0:
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31235.slice((1)),(0),null));
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});

om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.span.cljs$lang$applyTo = (function (seq31236){
var G__31237 = cljs.core.first.call(null,seq31236);
var seq31236__$1 = cljs.core.next.call(null,seq31236);
return om_tools.dom.span.cljs$core$IFn$_invoke$arity$variadic(G__31237,seq31236__$1);
});

om_tools.dom.span.cljs$lang$maxFixedArity = (1);


om_tools.dom.strong = (function om_tools$dom$strong(var_args){
var args31240 = [];
var len__27051__auto___31792 = arguments.length;
var i__27052__auto___31793 = (0);
while(true){
if((i__27052__auto___31793 < len__27051__auto___31792)){
args31240.push((arguments[i__27052__auto___31793]));

var G__31794 = (i__27052__auto___31793 + (1));
i__27052__auto___31793 = G__31794;
continue;
} else {
}
break;
}

var G__31244 = args31240.length;
switch (G__31244) {
case 0:
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31240.slice((1)),(0),null));
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});

om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.strong.cljs$lang$applyTo = (function (seq31241){
var G__31242 = cljs.core.first.call(null,seq31241);
var seq31241__$1 = cljs.core.next.call(null,seq31241);
return om_tools.dom.strong.cljs$core$IFn$_invoke$arity$variadic(G__31242,seq31241__$1);
});

om_tools.dom.strong.cljs$lang$maxFixedArity = (1);


om_tools.dom.style = (function om_tools$dom$style(var_args){
var args31245 = [];
var len__27051__auto___31796 = arguments.length;
var i__27052__auto___31797 = (0);
while(true){
if((i__27052__auto___31797 < len__27051__auto___31796)){
args31245.push((arguments[i__27052__auto___31797]));

var G__31798 = (i__27052__auto___31797 + (1));
i__27052__auto___31797 = G__31798;
continue;
} else {
}
break;
}

var G__31249 = args31245.length;
switch (G__31249) {
case 0:
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31245.slice((1)),(0),null));
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});

om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.style.cljs$lang$applyTo = (function (seq31246){
var G__31247 = cljs.core.first.call(null,seq31246);
var seq31246__$1 = cljs.core.next.call(null,seq31246);
return om_tools.dom.style.cljs$core$IFn$_invoke$arity$variadic(G__31247,seq31246__$1);
});

om_tools.dom.style.cljs$lang$maxFixedArity = (1);


om_tools.dom.sub = (function om_tools$dom$sub(var_args){
var args31250 = [];
var len__27051__auto___31800 = arguments.length;
var i__27052__auto___31801 = (0);
while(true){
if((i__27052__auto___31801 < len__27051__auto___31800)){
args31250.push((arguments[i__27052__auto___31801]));

var G__31802 = (i__27052__auto___31801 + (1));
i__27052__auto___31801 = G__31802;
continue;
} else {
}
break;
}

var G__31254 = args31250.length;
switch (G__31254) {
case 0:
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31250.slice((1)),(0),null));
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});

om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.sub.cljs$lang$applyTo = (function (seq31251){
var G__31252 = cljs.core.first.call(null,seq31251);
var seq31251__$1 = cljs.core.next.call(null,seq31251);
return om_tools.dom.sub.cljs$core$IFn$_invoke$arity$variadic(G__31252,seq31251__$1);
});

om_tools.dom.sub.cljs$lang$maxFixedArity = (1);


om_tools.dom.summary = (function om_tools$dom$summary(var_args){
var args31255 = [];
var len__27051__auto___31804 = arguments.length;
var i__27052__auto___31805 = (0);
while(true){
if((i__27052__auto___31805 < len__27051__auto___31804)){
args31255.push((arguments[i__27052__auto___31805]));

var G__31806 = (i__27052__auto___31805 + (1));
i__27052__auto___31805 = G__31806;
continue;
} else {
}
break;
}

var G__31259 = args31255.length;
switch (G__31259) {
case 0:
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31255.slice((1)),(0),null));
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});

om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.summary.cljs$lang$applyTo = (function (seq31256){
var G__31257 = cljs.core.first.call(null,seq31256);
var seq31256__$1 = cljs.core.next.call(null,seq31256);
return om_tools.dom.summary.cljs$core$IFn$_invoke$arity$variadic(G__31257,seq31256__$1);
});

om_tools.dom.summary.cljs$lang$maxFixedArity = (1);


om_tools.dom.sup = (function om_tools$dom$sup(var_args){
var args31260 = [];
var len__27051__auto___31808 = arguments.length;
var i__27052__auto___31809 = (0);
while(true){
if((i__27052__auto___31809 < len__27051__auto___31808)){
args31260.push((arguments[i__27052__auto___31809]));

var G__31810 = (i__27052__auto___31809 + (1));
i__27052__auto___31809 = G__31810;
continue;
} else {
}
break;
}

var G__31264 = args31260.length;
switch (G__31264) {
case 0:
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31260.slice((1)),(0),null));
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});

om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.sup.cljs$lang$applyTo = (function (seq31261){
var G__31262 = cljs.core.first.call(null,seq31261);
var seq31261__$1 = cljs.core.next.call(null,seq31261);
return om_tools.dom.sup.cljs$core$IFn$_invoke$arity$variadic(G__31262,seq31261__$1);
});

om_tools.dom.sup.cljs$lang$maxFixedArity = (1);


om_tools.dom.table = (function om_tools$dom$table(var_args){
var args31265 = [];
var len__27051__auto___31812 = arguments.length;
var i__27052__auto___31813 = (0);
while(true){
if((i__27052__auto___31813 < len__27051__auto___31812)){
args31265.push((arguments[i__27052__auto___31813]));

var G__31814 = (i__27052__auto___31813 + (1));
i__27052__auto___31813 = G__31814;
continue;
} else {
}
break;
}

var G__31269 = args31265.length;
switch (G__31269) {
case 0:
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31265.slice((1)),(0),null));
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});

om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.table.cljs$lang$applyTo = (function (seq31266){
var G__31267 = cljs.core.first.call(null,seq31266);
var seq31266__$1 = cljs.core.next.call(null,seq31266);
return om_tools.dom.table.cljs$core$IFn$_invoke$arity$variadic(G__31267,seq31266__$1);
});

om_tools.dom.table.cljs$lang$maxFixedArity = (1);


om_tools.dom.tbody = (function om_tools$dom$tbody(var_args){
var args31270 = [];
var len__27051__auto___31816 = arguments.length;
var i__27052__auto___31817 = (0);
while(true){
if((i__27052__auto___31817 < len__27051__auto___31816)){
args31270.push((arguments[i__27052__auto___31817]));

var G__31818 = (i__27052__auto___31817 + (1));
i__27052__auto___31817 = G__31818;
continue;
} else {
}
break;
}

var G__31274 = args31270.length;
switch (G__31274) {
case 0:
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31270.slice((1)),(0),null));
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});

om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.tbody.cljs$lang$applyTo = (function (seq31271){
var G__31272 = cljs.core.first.call(null,seq31271);
var seq31271__$1 = cljs.core.next.call(null,seq31271);
return om_tools.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(G__31272,seq31271__$1);
});

om_tools.dom.tbody.cljs$lang$maxFixedArity = (1);


om_tools.dom.td = (function om_tools$dom$td(var_args){
var args31275 = [];
var len__27051__auto___31820 = arguments.length;
var i__27052__auto___31821 = (0);
while(true){
if((i__27052__auto___31821 < len__27051__auto___31820)){
args31275.push((arguments[i__27052__auto___31821]));

var G__31822 = (i__27052__auto___31821 + (1));
i__27052__auto___31821 = G__31822;
continue;
} else {
}
break;
}

var G__31279 = args31275.length;
switch (G__31279) {
case 0:
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31275.slice((1)),(0),null));
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});

om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.td.cljs$lang$applyTo = (function (seq31276){
var G__31277 = cljs.core.first.call(null,seq31276);
var seq31276__$1 = cljs.core.next.call(null,seq31276);
return om_tools.dom.td.cljs$core$IFn$_invoke$arity$variadic(G__31277,seq31276__$1);
});

om_tools.dom.td.cljs$lang$maxFixedArity = (1);


om_tools.dom.tfoot = (function om_tools$dom$tfoot(var_args){
var args31280 = [];
var len__27051__auto___31824 = arguments.length;
var i__27052__auto___31825 = (0);
while(true){
if((i__27052__auto___31825 < len__27051__auto___31824)){
args31280.push((arguments[i__27052__auto___31825]));

var G__31826 = (i__27052__auto___31825 + (1));
i__27052__auto___31825 = G__31826;
continue;
} else {
}
break;
}

var G__31284 = args31280.length;
switch (G__31284) {
case 0:
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31280.slice((1)),(0),null));
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});

om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.tfoot.cljs$lang$applyTo = (function (seq31281){
var G__31282 = cljs.core.first.call(null,seq31281);
var seq31281__$1 = cljs.core.next.call(null,seq31281);
return om_tools.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(G__31282,seq31281__$1);
});

om_tools.dom.tfoot.cljs$lang$maxFixedArity = (1);


om_tools.dom.th = (function om_tools$dom$th(var_args){
var args31285 = [];
var len__27051__auto___31828 = arguments.length;
var i__27052__auto___31829 = (0);
while(true){
if((i__27052__auto___31829 < len__27051__auto___31828)){
args31285.push((arguments[i__27052__auto___31829]));

var G__31830 = (i__27052__auto___31829 + (1));
i__27052__auto___31829 = G__31830;
continue;
} else {
}
break;
}

var G__31289 = args31285.length;
switch (G__31289) {
case 0:
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31285.slice((1)),(0),null));
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});

om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.th.cljs$lang$applyTo = (function (seq31286){
var G__31287 = cljs.core.first.call(null,seq31286);
var seq31286__$1 = cljs.core.next.call(null,seq31286);
return om_tools.dom.th.cljs$core$IFn$_invoke$arity$variadic(G__31287,seq31286__$1);
});

om_tools.dom.th.cljs$lang$maxFixedArity = (1);


om_tools.dom.thead = (function om_tools$dom$thead(var_args){
var args31290 = [];
var len__27051__auto___31832 = arguments.length;
var i__27052__auto___31833 = (0);
while(true){
if((i__27052__auto___31833 < len__27051__auto___31832)){
args31290.push((arguments[i__27052__auto___31833]));

var G__31834 = (i__27052__auto___31833 + (1));
i__27052__auto___31833 = G__31834;
continue;
} else {
}
break;
}

var G__31294 = args31290.length;
switch (G__31294) {
case 0:
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31290.slice((1)),(0),null));
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});

om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.thead.cljs$lang$applyTo = (function (seq31291){
var G__31292 = cljs.core.first.call(null,seq31291);
var seq31291__$1 = cljs.core.next.call(null,seq31291);
return om_tools.dom.thead.cljs$core$IFn$_invoke$arity$variadic(G__31292,seq31291__$1);
});

om_tools.dom.thead.cljs$lang$maxFixedArity = (1);


om_tools.dom.time = (function om_tools$dom$time(var_args){
var args31295 = [];
var len__27051__auto___31836 = arguments.length;
var i__27052__auto___31837 = (0);
while(true){
if((i__27052__auto___31837 < len__27051__auto___31836)){
args31295.push((arguments[i__27052__auto___31837]));

var G__31838 = (i__27052__auto___31837 + (1));
i__27052__auto___31837 = G__31838;
continue;
} else {
}
break;
}

var G__31299 = args31295.length;
switch (G__31299) {
case 0:
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31295.slice((1)),(0),null));
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});

om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.time.cljs$lang$applyTo = (function (seq31296){
var G__31297 = cljs.core.first.call(null,seq31296);
var seq31296__$1 = cljs.core.next.call(null,seq31296);
return om_tools.dom.time.cljs$core$IFn$_invoke$arity$variadic(G__31297,seq31296__$1);
});

om_tools.dom.time.cljs$lang$maxFixedArity = (1);


om_tools.dom.title = (function om_tools$dom$title(var_args){
var args31300 = [];
var len__27051__auto___31840 = arguments.length;
var i__27052__auto___31841 = (0);
while(true){
if((i__27052__auto___31841 < len__27051__auto___31840)){
args31300.push((arguments[i__27052__auto___31841]));

var G__31842 = (i__27052__auto___31841 + (1));
i__27052__auto___31841 = G__31842;
continue;
} else {
}
break;
}

var G__31304 = args31300.length;
switch (G__31304) {
case 0:
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31300.slice((1)),(0),null));
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});

om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.title.cljs$lang$applyTo = (function (seq31301){
var G__31302 = cljs.core.first.call(null,seq31301);
var seq31301__$1 = cljs.core.next.call(null,seq31301);
return om_tools.dom.title.cljs$core$IFn$_invoke$arity$variadic(G__31302,seq31301__$1);
});

om_tools.dom.title.cljs$lang$maxFixedArity = (1);


om_tools.dom.tr = (function om_tools$dom$tr(var_args){
var args31305 = [];
var len__27051__auto___31844 = arguments.length;
var i__27052__auto___31845 = (0);
while(true){
if((i__27052__auto___31845 < len__27051__auto___31844)){
args31305.push((arguments[i__27052__auto___31845]));

var G__31846 = (i__27052__auto___31845 + (1));
i__27052__auto___31845 = G__31846;
continue;
} else {
}
break;
}

var G__31309 = args31305.length;
switch (G__31309) {
case 0:
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31305.slice((1)),(0),null));
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});

om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.tr.cljs$lang$applyTo = (function (seq31306){
var G__31307 = cljs.core.first.call(null,seq31306);
var seq31306__$1 = cljs.core.next.call(null,seq31306);
return om_tools.dom.tr.cljs$core$IFn$_invoke$arity$variadic(G__31307,seq31306__$1);
});

om_tools.dom.tr.cljs$lang$maxFixedArity = (1);


om_tools.dom.track = (function om_tools$dom$track(var_args){
var args31310 = [];
var len__27051__auto___31848 = arguments.length;
var i__27052__auto___31849 = (0);
while(true){
if((i__27052__auto___31849 < len__27051__auto___31848)){
args31310.push((arguments[i__27052__auto___31849]));

var G__31850 = (i__27052__auto___31849 + (1));
i__27052__auto___31849 = G__31850;
continue;
} else {
}
break;
}

var G__31314 = args31310.length;
switch (G__31314) {
case 0:
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31310.slice((1)),(0),null));
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});

om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.track.cljs$lang$applyTo = (function (seq31311){
var G__31312 = cljs.core.first.call(null,seq31311);
var seq31311__$1 = cljs.core.next.call(null,seq31311);
return om_tools.dom.track.cljs$core$IFn$_invoke$arity$variadic(G__31312,seq31311__$1);
});

om_tools.dom.track.cljs$lang$maxFixedArity = (1);


om_tools.dom.u = (function om_tools$dom$u(var_args){
var args31315 = [];
var len__27051__auto___31852 = arguments.length;
var i__27052__auto___31853 = (0);
while(true){
if((i__27052__auto___31853 < len__27051__auto___31852)){
args31315.push((arguments[i__27052__auto___31853]));

var G__31854 = (i__27052__auto___31853 + (1));
i__27052__auto___31853 = G__31854;
continue;
} else {
}
break;
}

var G__31319 = args31315.length;
switch (G__31319) {
case 0:
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31315.slice((1)),(0),null));
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});

om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.u.cljs$lang$applyTo = (function (seq31316){
var G__31317 = cljs.core.first.call(null,seq31316);
var seq31316__$1 = cljs.core.next.call(null,seq31316);
return om_tools.dom.u.cljs$core$IFn$_invoke$arity$variadic(G__31317,seq31316__$1);
});

om_tools.dom.u.cljs$lang$maxFixedArity = (1);


om_tools.dom.ul = (function om_tools$dom$ul(var_args){
var args31320 = [];
var len__27051__auto___31856 = arguments.length;
var i__27052__auto___31857 = (0);
while(true){
if((i__27052__auto___31857 < len__27051__auto___31856)){
args31320.push((arguments[i__27052__auto___31857]));

var G__31858 = (i__27052__auto___31857 + (1));
i__27052__auto___31857 = G__31858;
continue;
} else {
}
break;
}

var G__31324 = args31320.length;
switch (G__31324) {
case 0:
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31320.slice((1)),(0),null));
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});

om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.ul.cljs$lang$applyTo = (function (seq31321){
var G__31322 = cljs.core.first.call(null,seq31321);
var seq31321__$1 = cljs.core.next.call(null,seq31321);
return om_tools.dom.ul.cljs$core$IFn$_invoke$arity$variadic(G__31322,seq31321__$1);
});

om_tools.dom.ul.cljs$lang$maxFixedArity = (1);


om_tools.dom.var$ = (function om_tools$dom$var(var_args){
var args31325 = [];
var len__27051__auto___31860 = arguments.length;
var i__27052__auto___31861 = (0);
while(true){
if((i__27052__auto___31861 < len__27051__auto___31860)){
args31325.push((arguments[i__27052__auto___31861]));

var G__31862 = (i__27052__auto___31861 + (1));
i__27052__auto___31861 = G__31862;
continue;
} else {
}
break;
}

var G__31329 = args31325.length;
switch (G__31329) {
case 0:
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31325.slice((1)),(0),null));
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});

om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.var$.cljs$lang$applyTo = (function (seq31326){
var G__31327 = cljs.core.first.call(null,seq31326);
var seq31326__$1 = cljs.core.next.call(null,seq31326);
return om_tools.dom.var$.cljs$core$IFn$_invoke$arity$variadic(G__31327,seq31326__$1);
});

om_tools.dom.var$.cljs$lang$maxFixedArity = (1);


om_tools.dom.video = (function om_tools$dom$video(var_args){
var args31330 = [];
var len__27051__auto___31864 = arguments.length;
var i__27052__auto___31865 = (0);
while(true){
if((i__27052__auto___31865 < len__27051__auto___31864)){
args31330.push((arguments[i__27052__auto___31865]));

var G__31866 = (i__27052__auto___31865 + (1));
i__27052__auto___31865 = G__31866;
continue;
} else {
}
break;
}

var G__31334 = args31330.length;
switch (G__31334) {
case 0:
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31330.slice((1)),(0),null));
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});

om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.video.cljs$lang$applyTo = (function (seq31331){
var G__31332 = cljs.core.first.call(null,seq31331);
var seq31331__$1 = cljs.core.next.call(null,seq31331);
return om_tools.dom.video.cljs$core$IFn$_invoke$arity$variadic(G__31332,seq31331__$1);
});

om_tools.dom.video.cljs$lang$maxFixedArity = (1);


om_tools.dom.wbr = (function om_tools$dom$wbr(var_args){
var args31335 = [];
var len__27051__auto___31868 = arguments.length;
var i__27052__auto___31869 = (0);
while(true){
if((i__27052__auto___31869 < len__27051__auto___31868)){
args31335.push((arguments[i__27052__auto___31869]));

var G__31870 = (i__27052__auto___31869 + (1));
i__27052__auto___31869 = G__31870;
continue;
} else {
}
break;
}

var G__31339 = args31335.length;
switch (G__31339) {
case 0:
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31335.slice((1)),(0),null));
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});

om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.wbr.cljs$lang$applyTo = (function (seq31336){
var G__31337 = cljs.core.first.call(null,seq31336);
var seq31336__$1 = cljs.core.next.call(null,seq31336);
return om_tools.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(G__31337,seq31336__$1);
});

om_tools.dom.wbr.cljs$lang$maxFixedArity = (1);


om_tools.dom.circle = (function om_tools$dom$circle(var_args){
var args31340 = [];
var len__27051__auto___31872 = arguments.length;
var i__27052__auto___31873 = (0);
while(true){
if((i__27052__auto___31873 < len__27051__auto___31872)){
args31340.push((arguments[i__27052__auto___31873]));

var G__31874 = (i__27052__auto___31873 + (1));
i__27052__auto___31873 = G__31874;
continue;
} else {
}
break;
}

var G__31344 = args31340.length;
switch (G__31344) {
case 0:
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31340.slice((1)),(0),null));
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});

om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.circle.cljs$lang$applyTo = (function (seq31341){
var G__31342 = cljs.core.first.call(null,seq31341);
var seq31341__$1 = cljs.core.next.call(null,seq31341);
return om_tools.dom.circle.cljs$core$IFn$_invoke$arity$variadic(G__31342,seq31341__$1);
});

om_tools.dom.circle.cljs$lang$maxFixedArity = (1);


om_tools.dom.clipPath = (function om_tools$dom$clipPath(var_args){
var args31345 = [];
var len__27051__auto___31876 = arguments.length;
var i__27052__auto___31877 = (0);
while(true){
if((i__27052__auto___31877 < len__27051__auto___31876)){
args31345.push((arguments[i__27052__auto___31877]));

var G__31878 = (i__27052__auto___31877 + (1));
i__27052__auto___31877 = G__31878;
continue;
} else {
}
break;
}

var G__31349 = args31345.length;
switch (G__31349) {
case 0:
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31345.slice((1)),(0),null));
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.clipPath,null,null);
});

om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.clipPath,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.clipPath.cljs$lang$applyTo = (function (seq31346){
var G__31347 = cljs.core.first.call(null,seq31346);
var seq31346__$1 = cljs.core.next.call(null,seq31346);
return om_tools.dom.clipPath.cljs$core$IFn$_invoke$arity$variadic(G__31347,seq31346__$1);
});

om_tools.dom.clipPath.cljs$lang$maxFixedArity = (1);


om_tools.dom.ellipse = (function om_tools$dom$ellipse(var_args){
var args31350 = [];
var len__27051__auto___31880 = arguments.length;
var i__27052__auto___31881 = (0);
while(true){
if((i__27052__auto___31881 < len__27051__auto___31880)){
args31350.push((arguments[i__27052__auto___31881]));

var G__31882 = (i__27052__auto___31881 + (1));
i__27052__auto___31881 = G__31882;
continue;
} else {
}
break;
}

var G__31354 = args31350.length;
switch (G__31354) {
case 0:
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31350.slice((1)),(0),null));
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});

om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.ellipse.cljs$lang$applyTo = (function (seq31351){
var G__31352 = cljs.core.first.call(null,seq31351);
var seq31351__$1 = cljs.core.next.call(null,seq31351);
return om_tools.dom.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__31352,seq31351__$1);
});

om_tools.dom.ellipse.cljs$lang$maxFixedArity = (1);


om_tools.dom.g = (function om_tools$dom$g(var_args){
var args31355 = [];
var len__27051__auto___31884 = arguments.length;
var i__27052__auto___31885 = (0);
while(true){
if((i__27052__auto___31885 < len__27051__auto___31884)){
args31355.push((arguments[i__27052__auto___31885]));

var G__31886 = (i__27052__auto___31885 + (1));
i__27052__auto___31885 = G__31886;
continue;
} else {
}
break;
}

var G__31359 = args31355.length;
switch (G__31359) {
case 0:
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31355.slice((1)),(0),null));
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});

om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.g.cljs$lang$applyTo = (function (seq31356){
var G__31357 = cljs.core.first.call(null,seq31356);
var seq31356__$1 = cljs.core.next.call(null,seq31356);
return om_tools.dom.g.cljs$core$IFn$_invoke$arity$variadic(G__31357,seq31356__$1);
});

om_tools.dom.g.cljs$lang$maxFixedArity = (1);


om_tools.dom.line = (function om_tools$dom$line(var_args){
var args31360 = [];
var len__27051__auto___31888 = arguments.length;
var i__27052__auto___31889 = (0);
while(true){
if((i__27052__auto___31889 < len__27051__auto___31888)){
args31360.push((arguments[i__27052__auto___31889]));

var G__31890 = (i__27052__auto___31889 + (1));
i__27052__auto___31889 = G__31890;
continue;
} else {
}
break;
}

var G__31364 = args31360.length;
switch (G__31364) {
case 0:
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31360.slice((1)),(0),null));
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});

om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.line.cljs$lang$applyTo = (function (seq31361){
var G__31362 = cljs.core.first.call(null,seq31361);
var seq31361__$1 = cljs.core.next.call(null,seq31361);
return om_tools.dom.line.cljs$core$IFn$_invoke$arity$variadic(G__31362,seq31361__$1);
});

om_tools.dom.line.cljs$lang$maxFixedArity = (1);


om_tools.dom.mask = (function om_tools$dom$mask(var_args){
var args31365 = [];
var len__27051__auto___31892 = arguments.length;
var i__27052__auto___31893 = (0);
while(true){
if((i__27052__auto___31893 < len__27051__auto___31892)){
args31365.push((arguments[i__27052__auto___31893]));

var G__31894 = (i__27052__auto___31893 + (1));
i__27052__auto___31893 = G__31894;
continue;
} else {
}
break;
}

var G__31369 = args31365.length;
switch (G__31369) {
case 0:
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31365.slice((1)),(0),null));
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mask,null,null);
});

om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.mask,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.mask.cljs$lang$applyTo = (function (seq31366){
var G__31367 = cljs.core.first.call(null,seq31366);
var seq31366__$1 = cljs.core.next.call(null,seq31366);
return om_tools.dom.mask.cljs$core$IFn$_invoke$arity$variadic(G__31367,seq31366__$1);
});

om_tools.dom.mask.cljs$lang$maxFixedArity = (1);


om_tools.dom.path = (function om_tools$dom$path(var_args){
var args31370 = [];
var len__27051__auto___31896 = arguments.length;
var i__27052__auto___31897 = (0);
while(true){
if((i__27052__auto___31897 < len__27051__auto___31896)){
args31370.push((arguments[i__27052__auto___31897]));

var G__31898 = (i__27052__auto___31897 + (1));
i__27052__auto___31897 = G__31898;
continue;
} else {
}
break;
}

var G__31374 = args31370.length;
switch (G__31374) {
case 0:
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31370.slice((1)),(0),null));
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});

om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.path.cljs$lang$applyTo = (function (seq31371){
var G__31372 = cljs.core.first.call(null,seq31371);
var seq31371__$1 = cljs.core.next.call(null,seq31371);
return om_tools.dom.path.cljs$core$IFn$_invoke$arity$variadic(G__31372,seq31371__$1);
});

om_tools.dom.path.cljs$lang$maxFixedArity = (1);


om_tools.dom.pattern = (function om_tools$dom$pattern(var_args){
var args31375 = [];
var len__27051__auto___31900 = arguments.length;
var i__27052__auto___31901 = (0);
while(true){
if((i__27052__auto___31901 < len__27051__auto___31900)){
args31375.push((arguments[i__27052__auto___31901]));

var G__31902 = (i__27052__auto___31901 + (1));
i__27052__auto___31901 = G__31902;
continue;
} else {
}
break;
}

var G__31379 = args31375.length;
switch (G__31379) {
case 0:
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31375.slice((1)),(0),null));
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pattern,null,null);
});

om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.pattern,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.pattern.cljs$lang$applyTo = (function (seq31376){
var G__31377 = cljs.core.first.call(null,seq31376);
var seq31376__$1 = cljs.core.next.call(null,seq31376);
return om_tools.dom.pattern.cljs$core$IFn$_invoke$arity$variadic(G__31377,seq31376__$1);
});

om_tools.dom.pattern.cljs$lang$maxFixedArity = (1);


om_tools.dom.polyline = (function om_tools$dom$polyline(var_args){
var args31380 = [];
var len__27051__auto___31904 = arguments.length;
var i__27052__auto___31905 = (0);
while(true){
if((i__27052__auto___31905 < len__27051__auto___31904)){
args31380.push((arguments[i__27052__auto___31905]));

var G__31906 = (i__27052__auto___31905 + (1));
i__27052__auto___31905 = G__31906;
continue;
} else {
}
break;
}

var G__31384 = args31380.length;
switch (G__31384) {
case 0:
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31380.slice((1)),(0),null));
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});

om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.polyline.cljs$lang$applyTo = (function (seq31381){
var G__31382 = cljs.core.first.call(null,seq31381);
var seq31381__$1 = cljs.core.next.call(null,seq31381);
return om_tools.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(G__31382,seq31381__$1);
});

om_tools.dom.polyline.cljs$lang$maxFixedArity = (1);


om_tools.dom.rect = (function om_tools$dom$rect(var_args){
var args31385 = [];
var len__27051__auto___31908 = arguments.length;
var i__27052__auto___31909 = (0);
while(true){
if((i__27052__auto___31909 < len__27051__auto___31908)){
args31385.push((arguments[i__27052__auto___31909]));

var G__31910 = (i__27052__auto___31909 + (1));
i__27052__auto___31909 = G__31910;
continue;
} else {
}
break;
}

var G__31389 = args31385.length;
switch (G__31389) {
case 0:
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31385.slice((1)),(0),null));
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});

om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.rect.cljs$lang$applyTo = (function (seq31386){
var G__31387 = cljs.core.first.call(null,seq31386);
var seq31386__$1 = cljs.core.next.call(null,seq31386);
return om_tools.dom.rect.cljs$core$IFn$_invoke$arity$variadic(G__31387,seq31386__$1);
});

om_tools.dom.rect.cljs$lang$maxFixedArity = (1);


om_tools.dom.svg = (function om_tools$dom$svg(var_args){
var args31390 = [];
var len__27051__auto___31912 = arguments.length;
var i__27052__auto___31913 = (0);
while(true){
if((i__27052__auto___31913 < len__27051__auto___31912)){
args31390.push((arguments[i__27052__auto___31913]));

var G__31914 = (i__27052__auto___31913 + (1));
i__27052__auto___31913 = G__31914;
continue;
} else {
}
break;
}

var G__31394 = args31390.length;
switch (G__31394) {
case 0:
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31390.slice((1)),(0),null));
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});

om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.svg.cljs$lang$applyTo = (function (seq31391){
var G__31392 = cljs.core.first.call(null,seq31391);
var seq31391__$1 = cljs.core.next.call(null,seq31391);
return om_tools.dom.svg.cljs$core$IFn$_invoke$arity$variadic(G__31392,seq31391__$1);
});

om_tools.dom.svg.cljs$lang$maxFixedArity = (1);


om_tools.dom.text = (function om_tools$dom$text(var_args){
var args31395 = [];
var len__27051__auto___31916 = arguments.length;
var i__27052__auto___31917 = (0);
while(true){
if((i__27052__auto___31917 < len__27051__auto___31916)){
args31395.push((arguments[i__27052__auto___31917]));

var G__31918 = (i__27052__auto___31917 + (1));
i__27052__auto___31917 = G__31918;
continue;
} else {
}
break;
}

var G__31399 = args31395.length;
switch (G__31399) {
case 0:
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31395.slice((1)),(0),null));
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});

om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.text.cljs$lang$applyTo = (function (seq31396){
var G__31397 = cljs.core.first.call(null,seq31396);
var seq31396__$1 = cljs.core.next.call(null,seq31396);
return om_tools.dom.text.cljs$core$IFn$_invoke$arity$variadic(G__31397,seq31396__$1);
});

om_tools.dom.text.cljs$lang$maxFixedArity = (1);


om_tools.dom.defs = (function om_tools$dom$defs(var_args){
var args31400 = [];
var len__27051__auto___31920 = arguments.length;
var i__27052__auto___31921 = (0);
while(true){
if((i__27052__auto___31921 < len__27051__auto___31920)){
args31400.push((arguments[i__27052__auto___31921]));

var G__31922 = (i__27052__auto___31921 + (1));
i__27052__auto___31921 = G__31922;
continue;
} else {
}
break;
}

var G__31404 = args31400.length;
switch (G__31404) {
case 0:
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31400.slice((1)),(0),null));
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});

om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.defs.cljs$lang$applyTo = (function (seq31401){
var G__31402 = cljs.core.first.call(null,seq31401);
var seq31401__$1 = cljs.core.next.call(null,seq31401);
return om_tools.dom.defs.cljs$core$IFn$_invoke$arity$variadic(G__31402,seq31401__$1);
});

om_tools.dom.defs.cljs$lang$maxFixedArity = (1);


om_tools.dom.linearGradient = (function om_tools$dom$linearGradient(var_args){
var args31405 = [];
var len__27051__auto___31924 = arguments.length;
var i__27052__auto___31925 = (0);
while(true){
if((i__27052__auto___31925 < len__27051__auto___31924)){
args31405.push((arguments[i__27052__auto___31925]));

var G__31926 = (i__27052__auto___31925 + (1));
i__27052__auto___31925 = G__31926;
continue;
} else {
}
break;
}

var G__31409 = args31405.length;
switch (G__31409) {
case 0:
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31405.slice((1)),(0),null));
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});

om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.linearGradient.cljs$lang$applyTo = (function (seq31406){
var G__31407 = cljs.core.first.call(null,seq31406);
var seq31406__$1 = cljs.core.next.call(null,seq31406);
return om_tools.dom.linearGradient.cljs$core$IFn$_invoke$arity$variadic(G__31407,seq31406__$1);
});

om_tools.dom.linearGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.polygon = (function om_tools$dom$polygon(var_args){
var args31410 = [];
var len__27051__auto___31928 = arguments.length;
var i__27052__auto___31929 = (0);
while(true){
if((i__27052__auto___31929 < len__27051__auto___31928)){
args31410.push((arguments[i__27052__auto___31929]));

var G__31930 = (i__27052__auto___31929 + (1));
i__27052__auto___31929 = G__31930;
continue;
} else {
}
break;
}

var G__31414 = args31410.length;
switch (G__31414) {
case 0:
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31410.slice((1)),(0),null));
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});

om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.polygon.cljs$lang$applyTo = (function (seq31411){
var G__31412 = cljs.core.first.call(null,seq31411);
var seq31411__$1 = cljs.core.next.call(null,seq31411);
return om_tools.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(G__31412,seq31411__$1);
});

om_tools.dom.polygon.cljs$lang$maxFixedArity = (1);


om_tools.dom.radialGradient = (function om_tools$dom$radialGradient(var_args){
var args31415 = [];
var len__27051__auto___31932 = arguments.length;
var i__27052__auto___31933 = (0);
while(true){
if((i__27052__auto___31933 < len__27051__auto___31932)){
args31415.push((arguments[i__27052__auto___31933]));

var G__31934 = (i__27052__auto___31933 + (1));
i__27052__auto___31933 = G__31934;
continue;
} else {
}
break;
}

var G__31419 = args31415.length;
switch (G__31419) {
case 0:
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31415.slice((1)),(0),null));
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});

om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.radialGradient.cljs$lang$applyTo = (function (seq31416){
var G__31417 = cljs.core.first.call(null,seq31416);
var seq31416__$1 = cljs.core.next.call(null,seq31416);
return om_tools.dom.radialGradient.cljs$core$IFn$_invoke$arity$variadic(G__31417,seq31416__$1);
});

om_tools.dom.radialGradient.cljs$lang$maxFixedArity = (1);


om_tools.dom.stop = (function om_tools$dom$stop(var_args){
var args31420 = [];
var len__27051__auto___31936 = arguments.length;
var i__27052__auto___31937 = (0);
while(true){
if((i__27052__auto___31937 < len__27051__auto___31936)){
args31420.push((arguments[i__27052__auto___31937]));

var G__31938 = (i__27052__auto___31937 + (1));
i__27052__auto___31937 = G__31938;
continue;
} else {
}
break;
}

var G__31424 = args31420.length;
switch (G__31424) {
case 0:
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31420.slice((1)),(0),null));
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});

om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.stop.cljs$lang$applyTo = (function (seq31421){
var G__31422 = cljs.core.first.call(null,seq31421);
var seq31421__$1 = cljs.core.next.call(null,seq31421);
return om_tools.dom.stop.cljs$core$IFn$_invoke$arity$variadic(G__31422,seq31421__$1);
});

om_tools.dom.stop.cljs$lang$maxFixedArity = (1);


om_tools.dom.tspan = (function om_tools$dom$tspan(var_args){
var args31425 = [];
var len__27051__auto___31940 = arguments.length;
var i__27052__auto___31941 = (0);
while(true){
if((i__27052__auto___31941 < len__27051__auto___31940)){
args31425.push((arguments[i__27052__auto___31941]));

var G__31942 = (i__27052__auto___31941 + (1));
i__27052__auto___31941 = G__31942;
continue;
} else {
}
break;
}

var G__31429 = args31425.length;
switch (G__31429) {
case 0:
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31425.slice((1)),(0),null));
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});

om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.tspan.cljs$lang$applyTo = (function (seq31426){
var G__31427 = cljs.core.first.call(null,seq31426);
var seq31426__$1 = cljs.core.next.call(null,seq31426);
return om_tools.dom.tspan.cljs$core$IFn$_invoke$arity$variadic(G__31427,seq31426__$1);
});

om_tools.dom.tspan.cljs$lang$maxFixedArity = (1);


om_tools.dom.input = (function om_tools$dom$input(var_args){
var args31430 = [];
var len__27051__auto___31944 = arguments.length;
var i__27052__auto___31945 = (0);
while(true){
if((i__27052__auto___31945 < len__27051__auto___31944)){
args31430.push((arguments[i__27052__auto___31945]));

var G__31946 = (i__27052__auto___31945 + (1));
i__27052__auto___31945 = G__31946;
continue;
} else {
}
break;
}

var G__31434 = args31430.length;
switch (G__31434) {
case 0:
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31430.slice((1)),(0),null));
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});

om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.input.cljs$lang$applyTo = (function (seq31431){
var G__31432 = cljs.core.first.call(null,seq31431);
var seq31431__$1 = cljs.core.next.call(null,seq31431);
return om_tools.dom.input.cljs$core$IFn$_invoke$arity$variadic(G__31432,seq31431__$1);
});

om_tools.dom.input.cljs$lang$maxFixedArity = (1);


om_tools.dom.textarea = (function om_tools$dom$textarea(var_args){
var args31435 = [];
var len__27051__auto___31948 = arguments.length;
var i__27052__auto___31949 = (0);
while(true){
if((i__27052__auto___31949 < len__27051__auto___31948)){
args31435.push((arguments[i__27052__auto___31949]));

var G__31950 = (i__27052__auto___31949 + (1));
i__27052__auto___31949 = G__31950;
continue;
} else {
}
break;
}

var G__31439 = args31435.length;
switch (G__31439) {
case 0:
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args31435.slice((1)),(0),null));
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});

om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.textarea.cljs$lang$applyTo = (function (seq31436){
var G__31437 = cljs.core.first.call(null,seq31436);
var seq31436__$1 = cljs.core.next.call(null,seq31436);
return om_tools.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(G__31437,seq31436__$1);
});

om_tools.dom.textarea.cljs$lang$maxFixedArity = (1);


om_tools.dom.option = (function om_tools$dom$option(var_args){
var args30955 = [];
var len__27051__auto___31952 = arguments.length;
var i__27052__auto___31953 = (0);
while(true){
if((i__27052__auto___31953 < len__27051__auto___31952)){
args30955.push((arguments[i__27052__auto___31953]));

var G__31954 = (i__27052__auto___31953 + (1));
i__27052__auto___31953 = G__31954;
continue;
} else {
}
break;
}

var G__30959 = args30955.length;
switch (G__30959) {
case 0:
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$0();

break;
default:
var argseq__27070__auto__ = (new cljs.core.IndexedSeq(args30955.slice((1)),(0),null));
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27070__auto__);

}
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});

om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic = (function (opts__30763__auto__,children__30764__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__30763__auto__,children__30764__auto__);
});

om_tools.dom.option.cljs$lang$applyTo = (function (seq30956){
var G__30957 = cljs.core.first.call(null,seq30956);
var seq30956__$1 = cljs.core.next.call(null,seq30956);
return om_tools.dom.option.cljs$core$IFn$_invoke$arity$variadic(G__30957,seq30956__$1);
});

om_tools.dom.option.cljs$lang$maxFixedArity = (1);

om_tools.dom.class_set = (function om_tools$dom$class_set(m){

var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4657__auto__){
var ks = temp__4657__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map