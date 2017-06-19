// Compiled by ClojureScript 1.9.518 {}
goog.provide('dat.view.utils');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('posh.reagent');
goog.require('taoensso.timbre');
dat.view.utils.deref_or_value = (function dat$view$utils$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$)))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Like merge, but merges maps recursively.
 */
dat.view.utils.deep_merge = (function dat$view$utils$deep_merge(var_args){
var args__29977__auto__ = [];
var len__29970__auto___50529 = arguments.length;
var i__29971__auto___50530 = (0);
while(true){
if((i__29971__auto___50530 < len__29970__auto___50529)){
args__29977__auto__.push((arguments[i__29971__auto___50530]));

var G__50531 = (i__29971__auto___50530 + (1));
i__29971__auto___50530 = G__50531;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return dat.view.utils.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

dat.view.utils.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
if(cljs.core.every_QMARK_.call(null,(function (p1__50527_SHARP_){
return (cljs.core.map_QMARK_.call(null,p1__50527_SHARP_)) || ((p1__50527_SHARP_ == null));
}),maps)){
return cljs.core.apply.call(null,cljs.core.merge_with,dat.view.utils.deep_merge,maps);
} else {
return cljs.core.last.call(null,maps);
}
});

dat.view.utils.deep_merge.cljs$lang$maxFixedArity = (0);

dat.view.utils.deep_merge.cljs$lang$applyTo = (function (seq50528){
return dat.view.utils.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50528));
});

dat.view.utils.ratom = reagent.core.atom;
/**
 * Treat a regular atom as though it were a reaction; Be careful, memoizes (we might end up using a dispensor trick
 *   like posh does to avoid this, but that limits us to using conns; can't get listeners/watches with regular atoms...)
 */
dat.view.utils.as_reaction = cljs.core.memoize.call(null,(function (vanilla_atom){
var trigger = dat.view.utils.ratom.call(null,(0));
cljs.core.add_watch.call(null,vanilla_atom,new cljs.core.Keyword(null,"as-reaction-trigger","as-reaction-trigger",718960944),((function (trigger){
return (function() { 
var G__50532__delegate = function (_){
return cljs.core.swap_BANG_.call(null,trigger,cljs.core.inc);
};
var G__50532 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__50533__i = 0, G__50533__a = new Array(arguments.length -  0);
while (G__50533__i < G__50533__a.length) {G__50533__a[G__50533__i] = arguments[G__50533__i + 0]; ++G__50533__i;}
  _ = new cljs.core.IndexedSeq(G__50533__a,0);
} 
return G__50532__delegate.call(this,_);};
G__50532.cljs$lang$maxFixedArity = 0;
G__50532.cljs$lang$applyTo = (function (arglist__50534){
var _ = cljs.core.seq(arglist__50534);
return G__50532__delegate(_);
});
G__50532.cljs$core$IFn$_invoke$arity$variadic = G__50532__delegate;
return G__50532;
})()
;})(trigger))
);

return reagent.ratom.make_reaction.call(null,((function (trigger){
return (function (){
cljs.core.deref.call(null,trigger);

return cljs.core.deref.call(null,vanilla_atom);
});})(trigger))
);
}));
/**
 * A version of posh/q without any transaction pattern matching filters (al a posh) that delegates directly to d/q, and
 *   wraps in a reaction
 */
dat.view.utils.safe_q = cljs.core.memoize.call(null,(function() { 
var G__50535__delegate = function (query,conn,args){
return reagent.ratom.make_reaction.call(null,(function (){
var conn__$1 = dat.view.utils.as_reaction.call(null,conn);
var db = dat.view.utils.deref_or_value.call(null,conn__$1);
var args__$1 = cljs.core.mapv.call(null,dat.view.utils.deref_or_value,args);
return cljs.core.apply.call(null,datascript.core.q,query,db,args__$1);
}));
};
var G__50535 = function (query,conn,var_args){
var args = null;
if (arguments.length > 2) {
var G__50536__i = 0, G__50536__a = new Array(arguments.length -  2);
while (G__50536__i < G__50536__a.length) {G__50536__a[G__50536__i] = arguments[G__50536__i + 2]; ++G__50536__i;}
  args = new cljs.core.IndexedSeq(G__50536__a,0);
} 
return G__50535__delegate.call(this,query,conn,args);};
G__50535.cljs$lang$maxFixedArity = 2;
G__50535.cljs$lang$applyTo = (function (arglist__50537){
var query = cljs.core.first(arglist__50537);
arglist__50537 = cljs.core.next(arglist__50537);
var conn = cljs.core.first(arglist__50537);
var args = cljs.core.rest(arglist__50537);
return G__50535__delegate(query,conn,args);
});
G__50535.cljs$core$IFn$_invoke$arity$variadic = G__50535__delegate;
return G__50535;
})()
);
dat.view.utils.pull_many = (function dat$view$utils$pull_many(app,pattern,eids){
return cljs.core.map.call(null,cljs.core.partial.call(null,posh.reagent.pull,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app),pattern),dat.view.utils.deref_or_value.call(null,eids));
});
/**
 * Wraps safe pull, and etracts the results for a given attr
 */
dat.view.utils.pull_attr = cljs.core.memoize.call(null,(function() {
var G__50538 = null;
var G__50538__3 = (function (conn,eid,attr_ident){
return dat.view.utils.pull_attr.call(null,conn,eid,attr_ident,cljs.core.PersistentArrayMap.EMPTY);
});
var G__50538__4 = (function (conn,eid,attr_ident,options){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get.call(null,cljs.core.deref.call(null,posh.reagent.pull.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr_ident], null),eid,options)),attr_ident);
}));
});
G__50538 = function(conn,eid,attr_ident,options){
switch(arguments.length){
case 3:
return G__50538__3.call(this,conn,eid,attr_ident);
case 4:
return G__50538__4.call(this,conn,eid,attr_ident,options);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__50538.cljs$core$IFn$_invoke$arity$3 = G__50538__3;
G__50538.cljs$core$IFn$_invoke$arity$4 = G__50538__4;
return G__50538;
})()
);
dat.view.utils.pull_path = cljs.core.memoize.call(null,(function() {
var G__50539 = null;
var G__50539__3 = (function (conn,eid,attr_path){
return dat.view.utils.pull_path.call(null,conn,eid,attr_path,cljs.core.PersistentArrayMap.EMPTY);
});
var G__50539__4 = (function (conn,eid,attr_path,options){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,posh.reagent.pull.call(null,conn,cljs.core.vec.call(null,cljs.core.filter.call(null,cljs.core.keyword_QMARK_,attr_path)),eid,options)),attr_path);
}));
});
G__50539 = function(conn,eid,attr_path,options){
switch(arguments.length){
case 3:
return G__50539__3.call(this,conn,eid,attr_path);
case 4:
return G__50539__4.call(this,conn,eid,attr_path,options);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__50539.cljs$core$IFn$_invoke$arity$3 = G__50539__3;
G__50539.cljs$core$IFn$_invoke$arity$4 = G__50539__4;
return G__50539;
})()
);

//# sourceMappingURL=utils.js.map