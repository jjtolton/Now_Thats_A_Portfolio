// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('datascript.parser');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
goog.require('datascript.db');

/**
 * @interface
 */
datascript.parser.ITraversable = function(){};

datascript.parser._collect = (function datascript$parser$_collect(_,pred,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect$arity$3 == null)))){
return _.datascript$parser$ITraversable$_collect$arity$3(_,pred,acc);
} else {
var x__8319__auto__ = (((_ == null))?null:_);
var m__8320__auto__ = (datascript.parser._collect[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$3(_,pred,acc) : m__8320__auto__.call(null,_,pred,acc));
} else {
var m__8320__auto____$1 = (datascript.parser._collect["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$3(_,pred,acc) : m__8320__auto____$1.call(null,_,pred,acc));
} else {
throw cljs.core.missing_protocol("ITraversable.-collect",_);
}
}
}
});

datascript.parser._collect_vars = (function datascript$parser$_collect_vars(_,acc){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_collect_vars$arity$2 == null)))){
return _.datascript$parser$ITraversable$_collect_vars$arity$2(_,acc);
} else {
var x__8319__auto__ = (((_ == null))?null:_);
var m__8320__auto__ = (datascript.parser._collect_vars[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$2(_,acc) : m__8320__auto__.call(null,_,acc));
} else {
var m__8320__auto____$1 = (datascript.parser._collect_vars["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2(_,acc) : m__8320__auto____$1.call(null,_,acc));
} else {
throw cljs.core.missing_protocol("ITraversable.-collect-vars",_);
}
}
}
});

datascript.parser._postwalk = (function datascript$parser$_postwalk(_,f){
if((!((_ == null))) && (!((_.datascript$parser$ITraversable$_postwalk$arity$2 == null)))){
return _.datascript$parser$ITraversable$_postwalk$arity$2(_,f);
} else {
var x__8319__auto__ = (((_ == null))?null:_);
var m__8320__auto__ = (datascript.parser._postwalk[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$2(_,f) : m__8320__auto__.call(null,_,f));
} else {
var m__8320__auto____$1 = (datascript.parser._postwalk["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2(_,f) : m__8320__auto____$1.call(null,_,f));
} else {
throw cljs.core.missing_protocol("ITraversable.-postwalk",_);
}
}
}
});

datascript.parser.of_size_QMARK_ = (function datascript$parser$of_size_QMARK_(form,size){
return (cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),size));
});
datascript.parser.parse_seq = (function datascript$parser$parse_seq(parse_el,form){
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__36741_SHARP_,p2__36740_SHARP_){
var temp__6736__auto__ = (parse_el.cljs$core$IFn$_invoke$arity$1 ? parse_el.cljs$core$IFn$_invoke$arity$1(p2__36740_SHARP_) : parse_el.call(null,p2__36740_SHARP_));
if(cljs.core.truth_(temp__6736__auto__)){
var parsed = temp__6736__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__36741_SHARP_,parsed);
} else {
return cljs.core.reduced(null);
}
}),cljs.core.PersistentVector.EMPTY,form);
} else {
return null;
}
});
datascript.parser.collect = (function datascript$parser$collect(var_args){
var args__8829__auto__ = [];
var len__8822__auto___36750 = arguments.length;
var i__8823__auto___36751 = (0);
while(true){
if((i__8823__auto___36751 < len__8822__auto___36750)){
args__8829__auto__.push((arguments[i__8823__auto___36751]));

var G__36752 = (i__8823__auto___36751 + (1));
i__8823__auto___36751 = G__36752;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((2) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((2)),(0),null)):null);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8830__auto__);
});

datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic = (function (pred,form,p__36745){
var vec__36746 = p__36745;
var acc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36746,(0),null);
var acc__$1 = (function (){var or__7601__auto__ = acc;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(form) : pred.call(null,form)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc__$1,form);
} else {
if(((!((form == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$)))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
return datascript.parser._collect(form,pred,acc__$1);
} else {
if(cljs.core.truth_((datascript.db.seqable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.db.seqable_QMARK_.cljs$core$IFn$_invoke$arity$1(form) : datascript.db.seqable_QMARK_.call(null,form)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (acc__$1,vec__36746,acc){
return (function (acc__$2,form__$1){
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred,form__$1,cljs.core.array_seq([acc__$2], 0));
});})(acc__$1,vec__36746,acc))
,acc__$1,form);
} else {
return acc__$1;

}
}
}
});

datascript.parser.collect.cljs$lang$maxFixedArity = (2);

datascript.parser.collect.cljs$lang$applyTo = (function (seq36742){
var G__36743 = cljs.core.first(seq36742);
var seq36742__$1 = cljs.core.next(seq36742);
var G__36744 = cljs.core.first(seq36742__$1);
var seq36742__$2 = cljs.core.next(seq36742__$1);
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(G__36743,G__36744,seq36742__$2);
});

datascript.parser.distinct_QMARK_ = (function datascript$parser$distinct_QMARK_(coll){
var or__7601__auto__ = cljs.core.empty_QMARK_(coll);
if(or__7601__auto__){
return or__7601__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,coll);
}
});
datascript.parser.postwalk = (function datascript$parser$postwalk(form,f){
if(((!((form == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$)))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
var G__36765 = datascript.parser._postwalk(form,f);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36765) : f.call(null,G__36765));
} else {
if(cljs.core.map_QMARK_(form)){
var G__36766 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (form__$1,p__36767){
var vec__36768 = p__36767;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36768,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36768,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form__$1,k,(datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(v,f) : datascript.parser.postwalk.call(null,v,f)));
}),form,form);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36766) : f.call(null,G__36766));
} else {
if(cljs.core.seq_QMARK_(form)){
var G__36771 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36753_SHARP_){
return (datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(p1__36753_SHARP_,f) : datascript.parser.postwalk.call(null,p1__36753_SHARP_,f));
}),form);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36771) : f.call(null,G__36771));
} else {
if(cljs.core.coll_QMARK_(form)){
var G__36772 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36754_SHARP_){
return (datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.postwalk.cljs$core$IFn$_invoke$arity$2(p1__36754_SHARP_,f) : datascript.parser.postwalk.call(null,p1__36754_SHARP_,f));
}),form));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__36772) : f.call(null,G__36772));
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(form) : f.call(null,form));

}
}
}
}
});
datascript.parser.with_source = (function datascript$parser$with_source(obj,source){
return cljs.core.with_meta(obj,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$source,source], null));
});
datascript.parser.source = (function datascript$parser$source(obj){
var or__7601__auto__ = cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(obj));
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return obj;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Placeholder = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.Placeholder.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k36777,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__36779 = k36777;
switch (G__36779) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36777,else__8279__auto__);

}
});

datascript.parser.Placeholder.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.Placeholder{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Placeholder.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36776){
var self__ = this;
var G__36776__$1 = this;
return (new cljs.core.RecordIter((0),G__36776__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Placeholder.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Placeholder.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.Placeholder(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Placeholder.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.Placeholder.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__36776){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__36780 = cljs.core.keyword_identical_QMARK_;
var expr__36781 = k__8284__auto__;
return (new datascript.parser.Placeholder(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__36776),null));
});

datascript.parser.Placeholder.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.Placeholder.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__36776){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.Placeholder(G__36776,self__.__extmap,self__.__hash));
});

datascript.parser.Placeholder.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f36773){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.Placeholder(null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred36774,acc36775){
var self__ = this;
var ___35551__auto____$1 = this;
return acc36775;
});

datascript.parser.Placeholder.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc36775){
var self__ = this;
var ___35551__auto____$1 = this;
return acc36775;
});

datascript.parser.Placeholder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.Placeholder.cljs$lang$type = true;

datascript.parser.Placeholder.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Placeholder");
});

datascript.parser.Placeholder.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/Placeholder");
});

datascript.parser.__GT_Placeholder = (function datascript$parser$__GT_Placeholder(){
return (new datascript.parser.Placeholder(null,null,null));
});

datascript.parser.map__GT_Placeholder = (function datascript$parser$map__GT_Placeholder(G__36778){
return (new datascript.parser.Placeholder(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__36778),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Variable = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.Variable.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k36788,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__36790 = (((k36788 instanceof cljs.core.Keyword))?k36788.fqn:null);
switch (G__36790) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36788,else__8279__auto__);

}
});

datascript.parser.Variable.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.Variable{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36787){
var self__ = this;
var G__36787__$1 = this;
return (new cljs.core.RecordIter((0),G__36787__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Variable.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Variable.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.Variable.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Variable.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$symbol,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.Variable.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__36787){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__36791 = cljs.core.keyword_identical_QMARK_;
var expr__36792 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__36794 = cljs.core.cst$kw$symbol;
var G__36795 = expr__36792;
return (pred__36791.cljs$core$IFn$_invoke$arity$2 ? pred__36791.cljs$core$IFn$_invoke$arity$2(G__36794,G__36795) : pred__36791.call(null,G__36794,G__36795));
})())){
return (new datascript.parser.Variable(G__36787,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Variable(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__36787),null));
}
});

datascript.parser.Variable.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.Variable.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__36787){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.Variable(self__.symbol,G__36787,self__.__extmap,self__.__hash));
});

datascript.parser.Variable.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f36784){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.Variable(datascript.parser.postwalk(self__.symbol,f36784),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred36785,acc36786){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred36785,self__.symbol,cljs.core.array_seq([acc36786], 0));
});

datascript.parser.Variable.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc36786){
var self__ = this;
var ___35551__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc36786,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc36786,self__.symbol));
});

datascript.parser.Variable.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$symbol], null);
});

datascript.parser.Variable.cljs$lang$type = true;

datascript.parser.Variable.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Variable");
});

datascript.parser.Variable.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/Variable");
});

datascript.parser.__GT_Variable = (function datascript$parser$__GT_Variable(symbol){
return (new datascript.parser.Variable(symbol,null,null,null));
});

datascript.parser.map__GT_Variable = (function datascript$parser$map__GT_Variable(G__36789){
return (new datascript.parser.Variable(cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(G__36789),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36789,cljs.core.cst$kw$symbol),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.SrcVar = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.SrcVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k36801,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__36803 = (((k36801 instanceof cljs.core.Keyword))?k36801.fqn:null);
switch (G__36803) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36801,else__8279__auto__);

}
});

datascript.parser.SrcVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.SrcVar{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.SrcVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36800){
var self__ = this;
var G__36800__$1 = this;
return (new cljs.core.RecordIter((0),G__36800__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.SrcVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.SrcVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.SrcVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$symbol,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__36800){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__36804 = cljs.core.keyword_identical_QMARK_;
var expr__36805 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__36807 = cljs.core.cst$kw$symbol;
var G__36808 = expr__36805;
return (pred__36804.cljs$core$IFn$_invoke$arity$2 ? pred__36804.cljs$core$IFn$_invoke$arity$2(G__36807,G__36808) : pred__36804.call(null,G__36807,G__36808));
})())){
return (new datascript.parser.SrcVar(G__36800,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.SrcVar(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__36800),null));
}
});

datascript.parser.SrcVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.SrcVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__36800){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.SrcVar(self__.symbol,G__36800,self__.__extmap,self__.__hash));
});

datascript.parser.SrcVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f36797){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.SrcVar(datascript.parser.postwalk(self__.symbol,f36797),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred36798,acc36799){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred36798,self__.symbol,cljs.core.array_seq([acc36799], 0));
});

datascript.parser.SrcVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc36799){
var self__ = this;
var ___35551__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc36799,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc36799,self__.symbol));
});

datascript.parser.SrcVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$symbol], null);
});

datascript.parser.SrcVar.cljs$lang$type = true;

datascript.parser.SrcVar.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/SrcVar");
});

datascript.parser.SrcVar.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/SrcVar");
});

datascript.parser.__GT_SrcVar = (function datascript$parser$__GT_SrcVar(symbol){
return (new datascript.parser.SrcVar(symbol,null,null,null));
});

datascript.parser.map__GT_SrcVar = (function datascript$parser$map__GT_SrcVar(G__36802){
return (new datascript.parser.SrcVar(cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(G__36802),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36802,cljs.core.cst$kw$symbol),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.DefaultSrc = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.DefaultSrc.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k36814,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__36816 = k36814;
switch (G__36816) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36814,else__8279__auto__);

}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.DefaultSrc{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.DefaultSrc.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36813){
var self__ = this;
var G__36813__$1 = this;
return (new cljs.core.RecordIter((0),G__36813__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.DefaultSrc(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.DefaultSrc.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__36813){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__36817 = cljs.core.keyword_identical_QMARK_;
var expr__36818 = k__8284__auto__;
return (new datascript.parser.DefaultSrc(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__36813),null));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.DefaultSrc.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__36813){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.DefaultSrc(G__36813,self__.__extmap,self__.__hash));
});

datascript.parser.DefaultSrc.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f36810){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.DefaultSrc(null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred36811,acc36812){
var self__ = this;
var ___35551__auto____$1 = this;
return acc36812;
});

datascript.parser.DefaultSrc.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc36812){
var self__ = this;
var ___35551__auto____$1 = this;
return acc36812;
});

datascript.parser.DefaultSrc.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.DefaultSrc.cljs$lang$type = true;

datascript.parser.DefaultSrc.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/DefaultSrc");
});

datascript.parser.DefaultSrc.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/DefaultSrc");
});

datascript.parser.__GT_DefaultSrc = (function datascript$parser$__GT_DefaultSrc(){
return (new datascript.parser.DefaultSrc(null,null,null));
});

datascript.parser.map__GT_DefaultSrc = (function datascript$parser$map__GT_DefaultSrc(G__36815){
return (new datascript.parser.DefaultSrc(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__36815),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RulesVar = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.RulesVar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k36825,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__36827 = k36825;
switch (G__36827) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36825,else__8279__auto__);

}
});

datascript.parser.RulesVar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.RulesVar{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RulesVar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36824){
var self__ = this;
var G__36824__$1 = this;
return (new cljs.core.RecordIter((0),G__36824__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.RulesVar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RulesVar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.RulesVar(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RulesVar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.RulesVar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__36824){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__36828 = cljs.core.keyword_identical_QMARK_;
var expr__36829 = k__8284__auto__;
return (new datascript.parser.RulesVar(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__36824),null));
});

datascript.parser.RulesVar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.RulesVar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__36824){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.RulesVar(G__36824,self__.__extmap,self__.__hash));
});

datascript.parser.RulesVar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f36821){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.RulesVar(null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred36822,acc36823){
var self__ = this;
var ___35551__auto____$1 = this;
return acc36823;
});

datascript.parser.RulesVar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc36823){
var self__ = this;
var ___35551__auto____$1 = this;
return acc36823;
});

datascript.parser.RulesVar.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.RulesVar.cljs$lang$type = true;

datascript.parser.RulesVar.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/RulesVar");
});

datascript.parser.RulesVar.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/RulesVar");
});

datascript.parser.__GT_RulesVar = (function datascript$parser$__GT_RulesVar(){
return (new datascript.parser.RulesVar(null,null,null));
});

datascript.parser.map__GT_RulesVar = (function datascript$parser$map__GT_RulesVar(G__36826){
return (new datascript.parser.RulesVar(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__36826),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Constant = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.Constant.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k36836,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__36838 = (((k36836 instanceof cljs.core.Keyword))?k36836.fqn:null);
switch (G__36838) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36836,else__8279__auto__);

}
});

datascript.parser.Constant.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.Constant{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Constant.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36835){
var self__ = this;
var G__36835__$1 = this;
return (new cljs.core.RecordIter((0),G__36835__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Constant.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Constant.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.Constant.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Constant.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.Constant.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__36835){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__36839 = cljs.core.keyword_identical_QMARK_;
var expr__36840 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__36842 = cljs.core.cst$kw$value;
var G__36843 = expr__36840;
return (pred__36839.cljs$core$IFn$_invoke$arity$2 ? pred__36839.cljs$core$IFn$_invoke$arity$2(G__36842,G__36843) : pred__36839.call(null,G__36842,G__36843));
})())){
return (new datascript.parser.Constant(G__36835,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Constant(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__36835),null));
}
});

datascript.parser.Constant.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

datascript.parser.Constant.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__36835){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.Constant(self__.value,G__36835,self__.__extmap,self__.__hash));
});

datascript.parser.Constant.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f36832){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.Constant(datascript.parser.postwalk(self__.value,f36832),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred36833,acc36834){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred36833,self__.value,cljs.core.array_seq([acc36834], 0));
});

datascript.parser.Constant.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc36834){
var self__ = this;
var ___35551__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc36834,self__.value) : datascript.parser.collect_vars_acc.call(null,acc36834,self__.value));
});

datascript.parser.Constant.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value], null);
});

datascript.parser.Constant.cljs$lang$type = true;

datascript.parser.Constant.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Constant");
});

datascript.parser.Constant.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/Constant");
});

datascript.parser.__GT_Constant = (function datascript$parser$__GT_Constant(value){
return (new datascript.parser.Constant(value,null,null,null));
});

datascript.parser.map__GT_Constant = (function datascript$parser$map__GT_Constant(G__36837){
return (new datascript.parser.Constant(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__36837),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36837,cljs.core.cst$kw$value),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.PlainSymbol = (function (symbol,__meta,__extmap,__hash){
this.symbol = symbol;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.PlainSymbol.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k36849,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__36851 = (((k36849 instanceof cljs.core.Keyword))?k36849.fqn:null);
switch (G__36851) {
case "symbol":
return self__.symbol;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36849,else__8279__auto__);

}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.PlainSymbol{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.PlainSymbol.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36848){
var self__ = this;
var G__36848__$1 = this;
return (new cljs.core.RecordIter((0),G__36848__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$symbol], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$symbol,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__36848){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__36852 = cljs.core.keyword_identical_QMARK_;
var expr__36853 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__36855 = cljs.core.cst$kw$symbol;
var G__36856 = expr__36853;
return (pred__36852.cljs$core$IFn$_invoke$arity$2 ? pred__36852.cljs$core$IFn$_invoke$arity$2(G__36855,G__36856) : pred__36852.call(null,G__36855,G__36856));
})())){
return (new datascript.parser.PlainSymbol(G__36848,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.PlainSymbol(self__.symbol,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__36848),null));
}
});

datascript.parser.PlainSymbol.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$symbol,self__.symbol],null))], null),self__.__extmap));
});

datascript.parser.PlainSymbol.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__36848){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.PlainSymbol(self__.symbol,G__36848,self__.__extmap,self__.__hash));
});

datascript.parser.PlainSymbol.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f36845){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.PlainSymbol(datascript.parser.postwalk(self__.symbol,f36845),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred36846,acc36847){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred36846,self__.symbol,cljs.core.array_seq([acc36847], 0));
});

datascript.parser.PlainSymbol.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc36847){
var self__ = this;
var ___35551__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc36847,self__.symbol) : datascript.parser.collect_vars_acc.call(null,acc36847,self__.symbol));
});

datascript.parser.PlainSymbol.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$symbol], null);
});

datascript.parser.PlainSymbol.cljs$lang$type = true;

datascript.parser.PlainSymbol.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/PlainSymbol");
});

datascript.parser.PlainSymbol.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/PlainSymbol");
});

datascript.parser.__GT_PlainSymbol = (function datascript$parser$__GT_PlainSymbol(symbol){
return (new datascript.parser.PlainSymbol(symbol,null,null,null));
});

datascript.parser.map__GT_PlainSymbol = (function datascript$parser$map__GT_PlainSymbol(G__36850){
return (new datascript.parser.PlainSymbol(cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(G__36850),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36850,cljs.core.cst$kw$symbol),null));
});

datascript.parser.parse_placeholder = (function datascript$parser$parse_placeholder(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,form)){
return (new datascript.parser.Placeholder(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_variable = (function datascript$parser$parse_variable(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(form)),"?"))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_src_var = (function datascript$parser$parse_src_var(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.name(form)),"$"))){
return (new datascript.parser.SrcVar(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_rules_var = (function datascript$parser$parse_rules_var(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_PERCENT_,form)){
return (new datascript.parser.RulesVar(null,null,null));
} else {
return null;
}
});
datascript.parser.parse_constant = (function datascript$parser$parse_constant(form){
if(!((form instanceof cljs.core.Symbol))){
return (new datascript.parser.Constant(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_symbol = (function datascript$parser$parse_plain_symbol(form){
if(((form instanceof cljs.core.Symbol)) && (cljs.core.not(datascript.parser.parse_variable(form))) && (cljs.core.not(datascript.parser.parse_src_var(form))) && (cljs.core.not(datascript.parser.parse_rules_var(form))) && (cljs.core.not(datascript.parser.parse_placeholder(form)))){
return (new datascript.parser.PlainSymbol(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_plain_variable = (function datascript$parser$parse_plain_variable(form){
if(cljs.core.truth_(datascript.parser.parse_plain_symbol(form))){
return (new datascript.parser.Variable(form,null,null,null));
} else {
return null;
}
});
datascript.parser.parse_fn_arg = (function datascript$parser$parse_fn_arg(form){
var or__7601__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = datascript.parser.parse_constant(form);
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
return datascript.parser.parse_src_var(form);
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleVars = (function (required,free,__meta,__extmap,__hash){
this.required = required;
this.free = free;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.RuleVars.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k36862,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__36864 = (((k36862 instanceof cljs.core.Keyword))?k36862.fqn:null);
switch (G__36864) {
case "required":
return self__.required;

break;
case "free":
return self__.free;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36862,else__8279__auto__);

}
});

datascript.parser.RuleVars.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.RuleVars{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$required,self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$free,self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleVars.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36861){
var self__ = this;
var G__36861__$1 = this;
return (new cljs.core.RecordIter((0),G__36861__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$required,cljs.core.cst$kw$free], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.RuleVars.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleVars.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleVars.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$free,null,cljs.core.cst$kw$required,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.RuleVars.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__36861){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__36865 = cljs.core.keyword_identical_QMARK_;
var expr__36866 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__36868 = cljs.core.cst$kw$required;
var G__36869 = expr__36866;
return (pred__36865.cljs$core$IFn$_invoke$arity$2 ? pred__36865.cljs$core$IFn$_invoke$arity$2(G__36868,G__36869) : pred__36865.call(null,G__36868,G__36869));
})())){
return (new datascript.parser.RuleVars(G__36861,self__.free,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36870 = cljs.core.cst$kw$free;
var G__36871 = expr__36866;
return (pred__36865.cljs$core$IFn$_invoke$arity$2 ? pred__36865.cljs$core$IFn$_invoke$arity$2(G__36870,G__36871) : pred__36865.call(null,G__36870,G__36871));
})())){
return (new datascript.parser.RuleVars(self__.required,G__36861,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleVars(self__.required,self__.free,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__36861),null));
}
}
});

datascript.parser.RuleVars.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$required,self__.required],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$free,self__.free],null))], null),self__.__extmap));
});

datascript.parser.RuleVars.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__36861){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.RuleVars(self__.required,self__.free,G__36861,self__.__extmap,self__.__hash));
});

datascript.parser.RuleVars.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f36858){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.RuleVars(datascript.parser.postwalk(self__.required,f36858),datascript.parser.postwalk(self__.free,f36858),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred36859,acc36860){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred36859,self__.free,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred36859,self__.required,cljs.core.array_seq([acc36860], 0))], 0));
});

datascript.parser.RuleVars.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc36860){
var self__ = this;
var ___35551__auto____$1 = this;
var G__36872 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc36860,self__.required) : datascript.parser.collect_vars_acc.call(null,acc36860,self__.required));
var G__36873 = self__.free;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__36872,G__36873) : datascript.parser.collect_vars_acc.call(null,G__36872,G__36873));
});

datascript.parser.RuleVars.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$required,cljs.core.cst$sym$free], null);
});

datascript.parser.RuleVars.cljs$lang$type = true;

datascript.parser.RuleVars.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/RuleVars");
});

datascript.parser.RuleVars.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/RuleVars");
});

datascript.parser.__GT_RuleVars = (function datascript$parser$__GT_RuleVars(required,free){
return (new datascript.parser.RuleVars(required,free,null,null,null));
});

datascript.parser.map__GT_RuleVars = (function datascript$parser$map__GT_RuleVars(G__36863){
return (new datascript.parser.RuleVars(cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(G__36863),cljs.core.cst$kw$free.cljs$core$IFn$_invoke$arity$1(G__36863),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36863,cljs.core.cst$kw$required,cljs.core.array_seq([cljs.core.cst$kw$free], 0)),null));
});

datascript.parser.parse_rule_vars = (function datascript$parser$parse_rule_vars(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__36878 = ((cljs.core.sequential_QMARK_(cljs.core.first(form)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(form),cljs.core.next(form)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,form], null));
var required = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36878,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36878,(1),null);
var required_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_variable,required);
var free_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_variable,rest);
if((cljs.core.empty_QMARK_(required_STAR_)) && (cljs.core.empty_QMARK_(free_STAR_))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule_DASH_vars,cljs.core.cst$kw$form,form], null));
} else {
}

if(cljs.core.truth_(datascript.parser.distinct_QMARK_(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required_STAR_,free_STAR_)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Rule variables should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule_DASH_vars,cljs.core.cst$kw$form,form], null));
}

return (new datascript.parser.RuleVars(required_STAR_,free_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule-vars, expected [ variable+ | ([ variable+ ] variable*) ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule_DASH_vars,cljs.core.cst$kw$form,form], null));
}
});
datascript.parser.flatten_rule_vars = (function datascript$parser$flatten_rule_vars(rule_vars){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(rule_vars))?(function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(rule_vars))], null);

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,cljs.core.cst$kw$free.cljs$core$IFn$_invoke$arity$1(rule_vars));
})()
:null));
});
datascript.parser.rule_vars_arity = (function datascript$parser$rule_vars_arity(rule_vars){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(cljs.core.cst$kw$required.cljs$core$IFn$_invoke$arity$1(rule_vars)),cljs.core.count(cljs.core.cst$kw$free.cljs$core$IFn$_invoke$arity$1(rule_vars))], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindIgnore = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.BindIgnore.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k36885,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__36887 = k36885;
switch (G__36887) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36885,else__8279__auto__);

}
});

datascript.parser.BindIgnore.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.BindIgnore{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindIgnore.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36884){
var self__ = this;
var G__36884__$1 = this;
return (new cljs.core.RecordIter((0),G__36884__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.BindIgnore.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindIgnore.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.BindIgnore(self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.BindIgnore.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__36884){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__36888 = cljs.core.keyword_identical_QMARK_;
var expr__36889 = k__8284__auto__;
return (new datascript.parser.BindIgnore(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__36884),null));
});

datascript.parser.BindIgnore.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

datascript.parser.BindIgnore.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__36884){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.BindIgnore(G__36884,self__.__extmap,self__.__hash));
});

datascript.parser.BindIgnore.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f36881){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.BindIgnore(null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred36882,acc36883){
var self__ = this;
var ___35551__auto____$1 = this;
return acc36883;
});

datascript.parser.BindIgnore.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc36883){
var self__ = this;
var ___35551__auto____$1 = this;
return acc36883;
});

datascript.parser.BindIgnore.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

datascript.parser.BindIgnore.cljs$lang$type = true;

datascript.parser.BindIgnore.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/BindIgnore");
});

datascript.parser.BindIgnore.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/BindIgnore");
});

datascript.parser.__GT_BindIgnore = (function datascript$parser$__GT_BindIgnore(){
return (new datascript.parser.BindIgnore(null,null,null));
});

datascript.parser.map__GT_BindIgnore = (function datascript$parser$map__GT_BindIgnore(G__36886){
return (new datascript.parser.BindIgnore(null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__36886),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindScalar = (function (variable,__meta,__extmap,__hash){
this.variable = variable;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.BindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k36896,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__36898 = (((k36896 instanceof cljs.core.Keyword))?k36896.fqn:null);
switch (G__36898) {
case "variable":
return self__.variable;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36896,else__8279__auto__);

}
});

datascript.parser.BindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.BindScalar{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$variable,self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36895){
var self__ = this;
var G__36895__$1 = this;
return (new cljs.core.RecordIter((0),G__36895__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$variable], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.BindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$variable,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__36895){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__36899 = cljs.core.keyword_identical_QMARK_;
var expr__36900 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__36902 = cljs.core.cst$kw$variable;
var G__36903 = expr__36900;
return (pred__36899.cljs$core$IFn$_invoke$arity$2 ? pred__36899.cljs$core$IFn$_invoke$arity$2(G__36902,G__36903) : pred__36899.call(null,G__36902,G__36903));
})())){
return (new datascript.parser.BindScalar(G__36895,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindScalar(self__.variable,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__36895),null));
}
});

datascript.parser.BindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$variable,self__.variable],null))], null),self__.__extmap));
});

datascript.parser.BindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__36895){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.BindScalar(self__.variable,G__36895,self__.__extmap,self__.__hash));
});

datascript.parser.BindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f36892){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.BindScalar(datascript.parser.postwalk(self__.variable,f36892),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred36893,acc36894){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred36893,self__.variable,cljs.core.array_seq([acc36894], 0));
});

datascript.parser.BindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc36894){
var self__ = this;
var ___35551__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc36894,self__.variable) : datascript.parser.collect_vars_acc.call(null,acc36894,self__.variable));
});

datascript.parser.BindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$variable], null);
});

datascript.parser.BindScalar.cljs$lang$type = true;

datascript.parser.BindScalar.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/BindScalar");
});

datascript.parser.BindScalar.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/BindScalar");
});

datascript.parser.__GT_BindScalar = (function datascript$parser$__GT_BindScalar(variable){
return (new datascript.parser.BindScalar(variable,null,null,null));
});

datascript.parser.map__GT_BindScalar = (function datascript$parser$map__GT_BindScalar(G__36897){
return (new datascript.parser.BindScalar(cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(G__36897),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36897,cljs.core.cst$kw$variable),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindTuple = (function (bindings,__meta,__extmap,__hash){
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.BindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k36909,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__36911 = (((k36909 instanceof cljs.core.Keyword))?k36909.fqn:null);
switch (G__36911) {
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36909,else__8279__auto__);

}
});

datascript.parser.BindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.BindTuple{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$bindings,self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36908){
var self__ = this;
var G__36908__$1 = this;
return (new cljs.core.RecordIter((0),G__36908__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.BindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$bindings,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__36908){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__36912 = cljs.core.keyword_identical_QMARK_;
var expr__36913 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__36915 = cljs.core.cst$kw$bindings;
var G__36916 = expr__36913;
return (pred__36912.cljs$core$IFn$_invoke$arity$2 ? pred__36912.cljs$core$IFn$_invoke$arity$2(G__36915,G__36916) : pred__36912.call(null,G__36915,G__36916));
})())){
return (new datascript.parser.BindTuple(G__36908,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindTuple(self__.bindings,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__36908),null));
}
});

datascript.parser.BindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$bindings,self__.bindings],null))], null),self__.__extmap));
});

datascript.parser.BindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__36908){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.BindTuple(self__.bindings,G__36908,self__.__extmap,self__.__hash));
});

datascript.parser.BindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f36905){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.BindTuple(datascript.parser.postwalk(self__.bindings,f36905),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred36906,acc36907){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred36906,self__.bindings,cljs.core.array_seq([acc36907], 0));
});

datascript.parser.BindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc36907){
var self__ = this;
var ___35551__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc36907,self__.bindings) : datascript.parser.collect_vars_acc.call(null,acc36907,self__.bindings));
});

datascript.parser.BindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$bindings], null);
});

datascript.parser.BindTuple.cljs$lang$type = true;

datascript.parser.BindTuple.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/BindTuple");
});

datascript.parser.BindTuple.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/BindTuple");
});

datascript.parser.__GT_BindTuple = (function datascript$parser$__GT_BindTuple(bindings){
return (new datascript.parser.BindTuple(bindings,null,null,null));
});

datascript.parser.map__GT_BindTuple = (function datascript$parser$map__GT_BindTuple(G__36910){
return (new datascript.parser.BindTuple(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(G__36910),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36910,cljs.core.cst$kw$bindings),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.BindColl = (function (binding,__meta,__extmap,__hash){
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.BindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k36922,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__36924 = (((k36922 instanceof cljs.core.Keyword))?k36922.fqn:null);
switch (G__36924) {
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36922,else__8279__auto__);

}
});

datascript.parser.BindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.BindColl{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$binding,self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36921){
var self__ = this;
var G__36921__$1 = this;
return (new cljs.core.RecordIter((0),G__36921__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$binding], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.BindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.BindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.BindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.BindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$binding,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__36921){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__36925 = cljs.core.keyword_identical_QMARK_;
var expr__36926 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__36928 = cljs.core.cst$kw$binding;
var G__36929 = expr__36926;
return (pred__36925.cljs$core$IFn$_invoke$arity$2 ? pred__36925.cljs$core$IFn$_invoke$arity$2(G__36928,G__36929) : pred__36925.call(null,G__36928,G__36929));
})())){
return (new datascript.parser.BindColl(G__36921,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.BindColl(self__.binding,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__36921),null));
}
});

datascript.parser.BindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$binding,self__.binding],null))], null),self__.__extmap));
});

datascript.parser.BindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__36921){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.BindColl(self__.binding,G__36921,self__.__extmap,self__.__hash));
});

datascript.parser.BindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f36918){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.BindColl(datascript.parser.postwalk(self__.binding,f36918),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred36919,acc36920){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred36919,self__.binding,cljs.core.array_seq([acc36920], 0));
});

datascript.parser.BindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc36920){
var self__ = this;
var ___35551__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc36920,self__.binding) : datascript.parser.collect_vars_acc.call(null,acc36920,self__.binding));
});

datascript.parser.BindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$binding], null);
});

datascript.parser.BindColl.cljs$lang$type = true;

datascript.parser.BindColl.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/BindColl");
});

datascript.parser.BindColl.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/BindColl");
});

datascript.parser.__GT_BindColl = (function datascript$parser$__GT_BindColl(binding){
return (new datascript.parser.BindColl(binding,null,null,null));
});

datascript.parser.map__GT_BindColl = (function datascript$parser$map__GT_BindColl(G__36923){
return (new datascript.parser.BindColl(cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(G__36923),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36923,cljs.core.cst$kw$binding),null));
});

datascript.parser.parse_bind_ignore = (function datascript$parser$parse_bind_ignore(form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,form)){
return datascript.parser.with_source((new datascript.parser.BindIgnore(null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_scalar = (function datascript$parser$parse_bind_scalar(form){
var temp__6738__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(temp__6738__auto__)){
var var$ = temp__6738__auto__;
return datascript.parser.with_source((new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_bind_coll = (function datascript$parser$parse_bind_coll(form){
if(cljs.core.truth_((function (){var and__7589__auto__ = datascript.parser.of_size_QMARK_(form,(2));
if(cljs.core.truth_(and__7589__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),cljs.core.cst$sym$$$$);
} else {
return and__7589__auto__;
}
})())){
var temp__6736__auto__ = (function (){var G__36932 = cljs.core.first(form);
return (datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1(G__36932) : datascript.parser.parse_binding.call(null,G__36932));
})();
if(cljs.core.truth_(temp__6736__auto__)){
var sub_bind = temp__6736__auto__;
return datascript.parser.with_source((new datascript.parser.BindColl(sub_bind,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse collection binding")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_binding,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_tuple_el = (function datascript$parser$parse_tuple_el(form){
var or__7601__auto__ = datascript.parser.parse_bind_ignore(form);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return (datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_binding.cljs$core$IFn$_invoke$arity$1(form) : datascript.parser.parse_binding.call(null,form));
}
});
datascript.parser.parse_bind_tuple = (function datascript$parser$parse_bind_tuple(form){
var temp__6738__auto__ = datascript.parser.parse_seq(datascript.parser.parse_tuple_el,form);
if(cljs.core.truth_(temp__6738__auto__)){
var sub_bindings = temp__6738__auto__;
if(!(cljs.core.empty_QMARK_(sub_bindings))){
return datascript.parser.with_source((new datascript.parser.BindTuple(sub_bindings,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Tuple binding cannot be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_binding,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_bind_rel = (function datascript$parser$parse_bind_rel(form){
if(cljs.core.truth_((function (){var and__7589__auto__ = datascript.parser.of_size_QMARK_(form,(1));
if(cljs.core.truth_(and__7589__auto__)){
return cljs.core.sequential_QMARK_(cljs.core.first(form));
} else {
return and__7589__auto__;
}
})())){
return datascript.parser.with_source((new datascript.parser.BindColl(datascript.parser.parse_bind_tuple(cljs.core.first(form)),null,null,null)),form);
} else {
return null;
}
});
datascript.parser.parse_binding = (function datascript$parser$parse_binding(form){
var or__7601__auto__ = datascript.parser.parse_bind_coll(form);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = datascript.parser.parse_bind_rel(form);
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
var or__7601__auto____$2 = datascript.parser.parse_bind_tuple(form);
if(cljs.core.truth_(or__7601__auto____$2)){
return or__7601__auto____$2;
} else {
var or__7601__auto____$3 = datascript.parser.parse_bind_ignore(form);
if(cljs.core.truth_(or__7601__auto____$3)){
return or__7601__auto____$3;
} else {
var or__7601__auto____$4 = datascript.parser.parse_bind_scalar(form);
if(cljs.core.truth_(or__7601__auto____$4)){
return or__7601__auto____$4;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse binding, expected (bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_binding,cljs.core.cst$kw$form,form], null));
}
}
}
}
}
});

/**
 * @interface
 */
datascript.parser.IFindVars = function(){};

datascript.parser._find_vars = (function datascript$parser$_find_vars(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindVars$_find_vars$arity$1 == null)))){
return this$.datascript$parser$IFindVars$_find_vars$arity$1(this$);
} else {
var x__8319__auto__ = (((this$ == null))?null:this$);
var m__8320__auto__ = (datascript.parser._find_vars[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8320__auto__.call(null,this$));
} else {
var m__8320__auto____$1 = (datascript.parser._find_vars["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8320__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFindVars.-find-vars",this$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1.symbol], null);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Aggregate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Aggregate.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars(cljs.core.last(self__.args));
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.Aggregate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k36937,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__36939 = (((k36937 instanceof cljs.core.Keyword))?k36937.fqn:null);
switch (G__36939) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36937,else__8279__auto__);

}
});

datascript.parser.Aggregate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.Aggregate{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Aggregate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36936){
var self__ = this;
var G__36936__$1 = this;
return (new cljs.core.RecordIter((0),G__36936__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Aggregate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Aggregate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Aggregate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$fn,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.Aggregate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__36936){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__36940 = cljs.core.keyword_identical_QMARK_;
var expr__36941 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__36943 = cljs.core.cst$kw$fn;
var G__36944 = expr__36941;
return (pred__36940.cljs$core$IFn$_invoke$arity$2 ? pred__36940.cljs$core$IFn$_invoke$arity$2(G__36943,G__36944) : pred__36940.call(null,G__36943,G__36944));
})())){
return (new datascript.parser.Aggregate(G__36936,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36945 = cljs.core.cst$kw$args;
var G__36946 = expr__36941;
return (pred__36940.cljs$core$IFn$_invoke$arity$2 ? pred__36940.cljs$core$IFn$_invoke$arity$2(G__36945,G__36946) : pred__36940.call(null,G__36945,G__36946));
})())){
return (new datascript.parser.Aggregate(self__.fn,G__36936,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Aggregate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__36936),null));
}
}
});

datascript.parser.Aggregate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.Aggregate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__36936){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.Aggregate(self__.fn,self__.args,G__36936,self__.__extmap,self__.__hash));
});

datascript.parser.Aggregate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f36933){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.Aggregate(datascript.parser.postwalk(self__.fn,f36933),datascript.parser.postwalk(self__.args,f36933),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred36934,acc36935){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred36934,self__.args,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred36934,self__.fn,cljs.core.array_seq([acc36935], 0))], 0));
});

datascript.parser.Aggregate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc36935){
var self__ = this;
var ___35551__auto____$1 = this;
var G__36947 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc36935,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc36935,self__.fn));
var G__36948 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__36947,G__36948) : datascript.parser.collect_vars_acc.call(null,G__36947,G__36948));
});

datascript.parser.Aggregate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$args], null);
});

datascript.parser.Aggregate.cljs$lang$type = true;

datascript.parser.Aggregate.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Aggregate");
});

datascript.parser.Aggregate.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/Aggregate");
});

datascript.parser.__GT_Aggregate = (function datascript$parser$__GT_Aggregate(fn,args){
return (new datascript.parser.Aggregate(fn,args,null,null,null));
});

datascript.parser.map__GT_Aggregate = (function datascript$parser$map__GT_Aggregate(G__36938){
return (new datascript.parser.Aggregate(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__36938),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__36938),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36938,cljs.core.cst$kw$fn,cljs.core.array_seq([cljs.core.cst$kw$args], 0)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {datascript.parser.IFindVars}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pull = (function (source,variable,pattern,__meta,__extmap,__hash){
this.source = source;
this.variable = variable;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pull.prototype.datascript$parser$IFindVars$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pull.prototype.datascript$parser$IFindVars$_find_vars$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.parser._find_vars(self__.variable);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.Pull.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k36954,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__36956 = (((k36954 instanceof cljs.core.Keyword))?k36954.fqn:null);
switch (G__36956) {
case "source":
return self__.source;

break;
case "variable":
return self__.variable;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36954,else__8279__auto__);

}
});

datascript.parser.Pull.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.Pull{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$variable,self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pattern,self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pull.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36953){
var self__ = this;
var G__36953__$1 = this;
return (new cljs.core.RecordIter((0),G__36953__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$variable,cljs.core.cst$kw$pattern], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Pull.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pull.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.Pull.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pull.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$variable,null,cljs.core.cst$kw$source,null,cljs.core.cst$kw$pattern,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.Pull.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__36953){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__36957 = cljs.core.keyword_identical_QMARK_;
var expr__36958 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__36960 = cljs.core.cst$kw$source;
var G__36961 = expr__36958;
return (pred__36957.cljs$core$IFn$_invoke$arity$2 ? pred__36957.cljs$core$IFn$_invoke$arity$2(G__36960,G__36961) : pred__36957.call(null,G__36960,G__36961));
})())){
return (new datascript.parser.Pull(G__36953,self__.variable,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36962 = cljs.core.cst$kw$variable;
var G__36963 = expr__36958;
return (pred__36957.cljs$core$IFn$_invoke$arity$2 ? pred__36957.cljs$core$IFn$_invoke$arity$2(G__36962,G__36963) : pred__36957.call(null,G__36962,G__36963));
})())){
return (new datascript.parser.Pull(self__.source,G__36953,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36964 = cljs.core.cst$kw$pattern;
var G__36965 = expr__36958;
return (pred__36957.cljs$core$IFn$_invoke$arity$2 ? pred__36957.cljs$core$IFn$_invoke$arity$2(G__36964,G__36965) : pred__36957.call(null,G__36964,G__36965));
})())){
return (new datascript.parser.Pull(self__.source,self__.variable,G__36953,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__36953),null));
}
}
}
});

datascript.parser.Pull.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$variable,self__.variable],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pattern,self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pull.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__36953){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.Pull(self__.source,self__.variable,self__.pattern,G__36953,self__.__extmap,self__.__hash));
});

datascript.parser.Pull.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f36950){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.Pull(datascript.parser.postwalk(self__.source,f36950),datascript.parser.postwalk(self__.variable,f36950),datascript.parser.postwalk(self__.pattern,f36950),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred36951,acc36952){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred36951,self__.pattern,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred36951,self__.variable,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred36951,self__.source,cljs.core.array_seq([acc36952], 0))], 0))], 0));
});

datascript.parser.Pull.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc36952){
var self__ = this;
var ___35551__auto____$1 = this;
var G__36966 = (function (){var G__36968 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc36952,self__.source) : datascript.parser.collect_vars_acc.call(null,acc36952,self__.source));
var G__36969 = self__.variable;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__36968,G__36969) : datascript.parser.collect_vars_acc.call(null,G__36968,G__36969));
})();
var G__36967 = self__.pattern;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__36966,G__36967) : datascript.parser.collect_vars_acc.call(null,G__36966,G__36967));
});

datascript.parser.Pull.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$variable,cljs.core.cst$sym$pattern], null);
});

datascript.parser.Pull.cljs$lang$type = true;

datascript.parser.Pull.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Pull");
});

datascript.parser.Pull.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/Pull");
});

datascript.parser.__GT_Pull = (function datascript$parser$__GT_Pull(source,variable,pattern){
return (new datascript.parser.Pull(source,variable,pattern,null,null,null));
});

datascript.parser.map__GT_Pull = (function datascript$parser$map__GT_Pull(G__36955){
return (new datascript.parser.Pull(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__36955),cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(G__36955),cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(G__36955),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36955,cljs.core.cst$kw$source,cljs.core.array_seq([cljs.core.cst$kw$variable,cljs.core.cst$kw$pattern], 0)),null));
});


/**
 * @interface
 */
datascript.parser.IFindElements = function(){};

datascript.parser.find_elements = (function datascript$parser$find_elements(this$){
if((!((this$ == null))) && (!((this$.datascript$parser$IFindElements$find_elements$arity$1 == null)))){
return this$.datascript$parser$IFindElements$find_elements$arity$1(this$);
} else {
var x__8319__auto__ = (((this$ == null))?null:this$);
var m__8320__auto__ = (datascript.parser.find_elements[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__8320__auto__.call(null,this$));
} else {
var m__8320__auto____$1 = (datascript.parser.find_elements["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__8320__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IFindElements.find-elements",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindRel = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.FindRel.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k36975,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__36977 = (((k36975 instanceof cljs.core.Keyword))?k36975.fqn:null);
switch (G__36977) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36975,else__8279__auto__);

}
});

datascript.parser.FindRel.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.FindRel{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36974){
var self__ = this;
var G__36974__$1 = this;
return (new cljs.core.RecordIter((0),G__36974__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elements], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.FindRel.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindRel.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.FindRel.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindRel.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elements,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindRel.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__36974){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__36978 = cljs.core.keyword_identical_QMARK_;
var expr__36979 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__36981 = cljs.core.cst$kw$elements;
var G__36982 = expr__36979;
return (pred__36978.cljs$core$IFn$_invoke$arity$2 ? pred__36978.cljs$core$IFn$_invoke$arity$2(G__36981,G__36982) : pred__36978.call(null,G__36981,G__36982));
})())){
return (new datascript.parser.FindRel(G__36974,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindRel(self__.elements,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__36974),null));
}
});

datascript.parser.FindRel.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindRel.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__36974){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.FindRel(self__.elements,G__36974,self__.__extmap,self__.__hash));
});

datascript.parser.FindRel.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f36971){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.FindRel(datascript.parser.postwalk(self__.elements,f36971),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred36972,acc36973){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred36972,self__.elements,cljs.core.array_seq([acc36973], 0));
});

datascript.parser.FindRel.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc36973){
var self__ = this;
var ___35551__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc36973,self__.elements) : datascript.parser.collect_vars_acc.call(null,acc36973,self__.elements));
});

datascript.parser.FindRel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elements], null);
});

datascript.parser.FindRel.cljs$lang$type = true;

datascript.parser.FindRel.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/FindRel");
});

datascript.parser.FindRel.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/FindRel");
});

datascript.parser.__GT_FindRel = (function datascript$parser$__GT_FindRel(elements){
return (new datascript.parser.FindRel(elements,null,null,null));
});

datascript.parser.map__GT_FindRel = (function datascript$parser$map__GT_FindRel(G__36976){
return (new datascript.parser.FindRel(cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(G__36976),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36976,cljs.core.cst$kw$elements),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindColl = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.FindColl.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k36988,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__36990 = (((k36988 instanceof cljs.core.Keyword))?k36988.fqn:null);
switch (G__36990) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36988,else__8279__auto__);

}
});

datascript.parser.FindColl.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.FindColl{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$element,self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36987){
var self__ = this;
var G__36987__$1 = this;
return (new cljs.core.RecordIter((0),G__36987__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$element], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.FindColl.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindColl.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.FindColl.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindColl.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$element,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindColl.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__36987){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__36991 = cljs.core.keyword_identical_QMARK_;
var expr__36992 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__36994 = cljs.core.cst$kw$element;
var G__36995 = expr__36992;
return (pred__36991.cljs$core$IFn$_invoke$arity$2 ? pred__36991.cljs$core$IFn$_invoke$arity$2(G__36994,G__36995) : pred__36991.call(null,G__36994,G__36995));
})())){
return (new datascript.parser.FindColl(G__36987,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindColl(self__.element,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__36987),null));
}
});

datascript.parser.FindColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$element,self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindColl.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__36987){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.FindColl(self__.element,G__36987,self__.__extmap,self__.__hash));
});

datascript.parser.FindColl.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f36984){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.FindColl(datascript.parser.postwalk(self__.element,f36984),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred36985,acc36986){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred36985,self__.element,cljs.core.array_seq([acc36986], 0));
});

datascript.parser.FindColl.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc36986){
var self__ = this;
var ___35551__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc36986,self__.element) : datascript.parser.collect_vars_acc.call(null,acc36986,self__.element));
});

datascript.parser.FindColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$element], null);
});

datascript.parser.FindColl.cljs$lang$type = true;

datascript.parser.FindColl.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/FindColl");
});

datascript.parser.FindColl.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/FindColl");
});

datascript.parser.__GT_FindColl = (function datascript$parser$__GT_FindColl(element){
return (new datascript.parser.FindColl(element,null,null,null));
});

datascript.parser.map__GT_FindColl = (function datascript$parser$map__GT_FindColl(G__36989){
return (new datascript.parser.FindColl(cljs.core.cst$kw$element.cljs$core$IFn$_invoke$arity$1(G__36989),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36989,cljs.core.cst$kw$element),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindScalar = (function (element,__meta,__extmap,__hash){
this.element = element;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.FindScalar.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37001,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37003 = (((k37001 instanceof cljs.core.Keyword))?k37001.fqn:null);
switch (G__37003) {
case "element":
return self__.element;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37001,else__8279__auto__);

}
});

datascript.parser.FindScalar.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.FindScalar{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$element,self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37000){
var self__ = this;
var G__37000__$1 = this;
return (new cljs.core.RecordIter((0),G__37000__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$element], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.FindScalar.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindScalar.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindScalar.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$element,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.element], null);
});

datascript.parser.FindScalar.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37000){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37004 = cljs.core.keyword_identical_QMARK_;
var expr__37005 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37007 = cljs.core.cst$kw$element;
var G__37008 = expr__37005;
return (pred__37004.cljs$core$IFn$_invoke$arity$2 ? pred__37004.cljs$core$IFn$_invoke$arity$2(G__37007,G__37008) : pred__37004.call(null,G__37007,G__37008));
})())){
return (new datascript.parser.FindScalar(G__37000,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindScalar(self__.element,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37000),null));
}
});

datascript.parser.FindScalar.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$element,self__.element],null))], null),self__.__extmap));
});

datascript.parser.FindScalar.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37000){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.FindScalar(self__.element,G__37000,self__.__extmap,self__.__hash));
});

datascript.parser.FindScalar.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f36997){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.FindScalar(datascript.parser.postwalk(self__.element,f36997),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred36998,acc36999){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred36998,self__.element,cljs.core.array_seq([acc36999], 0));
});

datascript.parser.FindScalar.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc36999){
var self__ = this;
var ___35551__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc36999,self__.element) : datascript.parser.collect_vars_acc.call(null,acc36999,self__.element));
});

datascript.parser.FindScalar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$element], null);
});

datascript.parser.FindScalar.cljs$lang$type = true;

datascript.parser.FindScalar.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/FindScalar");
});

datascript.parser.FindScalar.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/FindScalar");
});

datascript.parser.__GT_FindScalar = (function datascript$parser$__GT_FindScalar(element){
return (new datascript.parser.FindScalar(element,null,null,null));
});

datascript.parser.map__GT_FindScalar = (function datascript$parser$map__GT_FindScalar(G__37002){
return (new datascript.parser.FindScalar(cljs.core.cst$kw$element.cljs$core$IFn$_invoke$arity$1(G__37002),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37002,cljs.core.cst$kw$element),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {datascript.parser.IFindElements}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.FindTuple = (function (elements,__meta,__extmap,__hash){
this.elements = elements;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.FindTuple.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37014,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37016 = (((k37014 instanceof cljs.core.Keyword))?k37014.fqn:null);
switch (G__37016) {
case "elements":
return self__.elements;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37014,else__8279__auto__);

}
});

datascript.parser.FindTuple.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.FindTuple{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37013){
var self__ = this;
var G__37013__$1 = this;
return (new cljs.core.RecordIter((0),G__37013__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elements], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.FindTuple.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.FindTuple.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.FindTuple.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$elements,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$parser$IFindElements$find_elements$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.elements;
});

datascript.parser.FindTuple.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37013){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37017 = cljs.core.keyword_identical_QMARK_;
var expr__37018 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37020 = cljs.core.cst$kw$elements;
var G__37021 = expr__37018;
return (pred__37017.cljs$core$IFn$_invoke$arity$2 ? pred__37017.cljs$core$IFn$_invoke$arity$2(G__37020,G__37021) : pred__37017.call(null,G__37020,G__37021));
})())){
return (new datascript.parser.FindTuple(G__37013,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.FindTuple(self__.elements,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37013),null));
}
});

datascript.parser.FindTuple.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$elements,self__.elements],null))], null),self__.__extmap));
});

datascript.parser.FindTuple.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37013){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.FindTuple(self__.elements,G__37013,self__.__extmap,self__.__hash));
});

datascript.parser.FindTuple.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f37010){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.FindTuple(datascript.parser.postwalk(self__.elements,f37010),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred37011,acc37012){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37011,self__.elements,cljs.core.array_seq([acc37012], 0));
});

datascript.parser.FindTuple.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc37012){
var self__ = this;
var ___35551__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc37012,self__.elements) : datascript.parser.collect_vars_acc.call(null,acc37012,self__.elements));
});

datascript.parser.FindTuple.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elements], null);
});

datascript.parser.FindTuple.cljs$lang$type = true;

datascript.parser.FindTuple.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/FindTuple");
});

datascript.parser.FindTuple.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/FindTuple");
});

datascript.parser.__GT_FindTuple = (function datascript$parser$__GT_FindTuple(elements){
return (new datascript.parser.FindTuple(elements,null,null,null));
});

datascript.parser.map__GT_FindTuple = (function datascript$parser$map__GT_FindTuple(G__37015){
return (new datascript.parser.FindTuple(cljs.core.cst$kw$elements.cljs$core$IFn$_invoke$arity$1(G__37015),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37015,cljs.core.cst$kw$elements),null));
});

datascript.parser.find_vars = (function datascript$parser$find_vars(find){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(datascript.parser._find_vars,cljs.core.array_seq([datascript.parser.find_elements(find)], 0));
});
datascript.parser.aggregate_QMARK_ = (function datascript$parser$aggregate_QMARK_(element){
return (element instanceof datascript.parser.Aggregate);
});
datascript.parser.pull_QMARK_ = (function datascript$parser$pull_QMARK_(element){
return (element instanceof datascript.parser.Pull);
});
datascript.parser.parse_aggregate = (function datascript$parser$parse_aggregate(form){
if((cljs.core.sequential_QMARK_(form)) && ((cljs.core.count(form) >= (2)))){
var vec__37026 = form;
var seq__37027 = cljs.core.seq(vec__37026);
var first__37028 = cljs.core.first(seq__37027);
var seq__37027__$1 = cljs.core.next(seq__37027);
var fn = first__37028;
var args = seq__37027__$1;
var fn_STAR_ = datascript.parser.parse_plain_symbol(fn);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__7589__auto__ = fn_STAR_;
if(cljs.core.truth_(and__7589__auto__)){
return args_STAR_;
} else {
return and__7589__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_aggregate_custom = (function datascript$parser$parse_aggregate_custom(form){
if((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),cljs.core.cst$sym$aggregate))){
if((cljs.core.count(form) >= (3))){
var vec__37032 = form;
var seq__37033 = cljs.core.seq(vec__37032);
var first__37034 = cljs.core.first(seq__37033);
var seq__37033__$1 = cljs.core.next(seq__37033);
var _ = first__37034;
var first__37034__$1 = cljs.core.first(seq__37033__$1);
var seq__37033__$2 = cljs.core.next(seq__37033__$1);
var fn = first__37034__$1;
var args = seq__37033__$2;
var fn_STAR_ = datascript.parser.parse_variable(fn);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args);
if(cljs.core.truth_((function (){var and__7589__auto__ = fn_STAR_;
if(cljs.core.truth_(and__7589__auto__)){
return args_STAR_;
} else {
return and__7589__auto__;
}
})())){
return (new datascript.parser.Aggregate(fn_STAR_,args_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse custom aggregate call, expect ['aggregate' variable fn-arg+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_pull_expr = (function datascript$parser$parse_pull_expr(form){
if((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(form),cljs.core.cst$sym$pull))){
if((((3) <= cljs.core.count(form))) && ((cljs.core.count(form) <= (4)))){
var long_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(4));
var src = ((long_QMARK_)?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)):cljs.core.cst$sym$$);
var vec__37038 = ((long_QMARK_)?cljs.core.nnext(form):cljs.core.next(form));
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37038,(0),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37038,(1),null);
var src_STAR_ = datascript.parser.parse_src_var(src);
var var_STAR_ = datascript.parser.parse_variable(var$);
var pattern_STAR_ = (function (){var or__7601__auto__ = datascript.parser.parse_variable(pattern);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = datascript.parser.parse_plain_variable(pattern);
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
return datascript.parser.parse_constant(pattern);
}
}
})();
if(cljs.core.truth_((function (){var and__7589__auto__ = src_STAR_;
if(cljs.core.truth_(and__7589__auto__)){
var and__7589__auto____$1 = var_STAR_;
if(cljs.core.truth_(and__7589__auto____$1)){
return pattern_STAR_;
} else {
return and__7589__auto____$1;
}
} else {
return and__7589__auto__;
}
})())){
return (new datascript.parser.Pull(src_STAR_,var_STAR_,pattern_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse pull expression, expect ['pull' src-var? variable (constant | variable | plain-symbol)]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_find_elem = (function datascript$parser$parse_find_elem(form){
var or__7601__auto__ = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = datascript.parser.parse_pull_expr(form);
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
var or__7601__auto____$2 = datascript.parser.parse_aggregate_custom(form);
if(cljs.core.truth_(or__7601__auto____$2)){
return or__7601__auto____$2;
} else {
return datascript.parser.parse_aggregate(form);
}
}
}
});
datascript.parser.parse_find_rel = (function datascript$parser$parse_find_rel(form){
var G__37042 = datascript.parser.parse_seq(datascript.parser.parse_find_elem,form);
if((G__37042 == null)){
return null;
} else {
return (new datascript.parser.FindRel(G__37042,null,null,null));
}
});
datascript.parser.parse_find_coll = (function datascript$parser$parse_find_coll(form){
if((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(1)))){
var inner = cljs.core.first(form);
if((cljs.core.sequential_QMARK_(inner)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(inner),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(inner),cljs.core.cst$sym$$$$))){
var G__37044 = datascript.parser.parse_find_elem(cljs.core.first(inner));
if((G__37044 == null)){
return null;
} else {
return (new datascript.parser.FindColl(G__37044,null,null,null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_find_scalar = (function datascript$parser$parse_find_scalar(form){
if((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(form),cljs.core.cst$sym$_DOT_))){
var G__37046 = datascript.parser.parse_find_elem(cljs.core.first(form));
if((G__37046 == null)){
return null;
} else {
return (new datascript.parser.FindScalar(G__37046,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find_tuple = (function datascript$parser$parse_find_tuple(form){
if((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),(1)))){
var inner = cljs.core.first(form);
var G__37048 = datascript.parser.parse_seq(datascript.parser.parse_find_elem,inner);
if((G__37048 == null)){
return null;
} else {
return (new datascript.parser.FindTuple(G__37048,null,null,null));
}
} else {
return null;
}
});
datascript.parser.parse_find = (function datascript$parser$parse_find(form){
var or__7601__auto__ = datascript.parser.parse_find_rel(form);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = datascript.parser.parse_find_coll(form);
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
var or__7601__auto____$2 = datascript.parser.parse_find_scalar(form);
if(cljs.core.truth_(or__7601__auto____$2)){
return or__7601__auto____$2;
} else {
var or__7601__auto____$3 = datascript.parser.parse_find_tuple(form);
if(cljs.core.truth_(or__7601__auto____$3)){
return or__7601__auto____$3;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse :find, expected: (find-rel | find-coll | find-tuple | find-scalar)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_find,cljs.core.cst$kw$fragment,form], null));
}
}
}
}
});
datascript.parser.parse_with = (function datascript$parser$parse_with(form){
var or__7601__auto__ = datascript.parser.parse_seq(datascript.parser.parse_variable,form);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse :with clause, expected [ variable+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_with,cljs.core.cst$kw$form,form], null));
}
});
datascript.parser.parse_in_binding = (function datascript$parser$parse_in_binding(form){
var temp__6736__auto__ = (function (){var or__7601__auto__ = datascript.parser.parse_src_var(form);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = datascript.parser.parse_rules_var(form);
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
return datascript.parser.parse_plain_variable(form);
}
}
})();
if(cljs.core.truth_(temp__6736__auto__)){
var var$ = temp__6736__auto__;
return datascript.parser.with_source((new datascript.parser.BindScalar(var$,null,null,null)),form);
} else {
return datascript.parser.parse_binding(form);
}
});
datascript.parser.parse_in = (function datascript$parser$parse_in(form){
var or__7601__auto__ = datascript.parser.parse_seq(datascript.parser.parse_in_binding,form);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse :in clause, expected (src-var | % | plain-symbol | bind-scalar | bind-tuple | bind-coll | bind-rel)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_in,cljs.core.cst$kw$form,form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Pattern = (function (source,pattern,__meta,__extmap,__hash){
this.source = source;
this.pattern = pattern;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.Pattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37053,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37055 = (((k37053 instanceof cljs.core.Keyword))?k37053.fqn:null);
switch (G__37055) {
case "source":
return self__.source;

break;
case "pattern":
return self__.pattern;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37053,else__8279__auto__);

}
});

datascript.parser.Pattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.Pattern{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pattern,self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37052){
var self__ = this;
var G__37052__$1 = this;
return (new cljs.core.RecordIter((0),G__37052__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$pattern], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Pattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Pattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.Pattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Pattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$source,null,cljs.core.cst$kw$pattern,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.Pattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37052){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37056 = cljs.core.keyword_identical_QMARK_;
var expr__37057 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37059 = cljs.core.cst$kw$source;
var G__37060 = expr__37057;
return (pred__37056.cljs$core$IFn$_invoke$arity$2 ? pred__37056.cljs$core$IFn$_invoke$arity$2(G__37059,G__37060) : pred__37056.call(null,G__37059,G__37060));
})())){
return (new datascript.parser.Pattern(G__37052,self__.pattern,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37061 = cljs.core.cst$kw$pattern;
var G__37062 = expr__37057;
return (pred__37056.cljs$core$IFn$_invoke$arity$2 ? pred__37056.cljs$core$IFn$_invoke$arity$2(G__37061,G__37062) : pred__37056.call(null,G__37061,G__37062));
})())){
return (new datascript.parser.Pattern(self__.source,G__37052,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Pattern(self__.source,self__.pattern,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37052),null));
}
}
});

datascript.parser.Pattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$pattern,self__.pattern],null))], null),self__.__extmap));
});

datascript.parser.Pattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37052){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.Pattern(self__.source,self__.pattern,G__37052,self__.__extmap,self__.__hash));
});

datascript.parser.Pattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f37049){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.Pattern(datascript.parser.postwalk(self__.source,f37049),datascript.parser.postwalk(self__.pattern,f37049),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred37050,acc37051){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37050,self__.pattern,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37050,self__.source,cljs.core.array_seq([acc37051], 0))], 0));
});

datascript.parser.Pattern.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc37051){
var self__ = this;
var ___35551__auto____$1 = this;
var G__37063 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc37051,self__.source) : datascript.parser.collect_vars_acc.call(null,acc37051,self__.source));
var G__37064 = self__.pattern;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__37063,G__37064) : datascript.parser.collect_vars_acc.call(null,G__37063,G__37064));
});

datascript.parser.Pattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$pattern], null);
});

datascript.parser.Pattern.cljs$lang$type = true;

datascript.parser.Pattern.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Pattern");
});

datascript.parser.Pattern.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/Pattern");
});

datascript.parser.__GT_Pattern = (function datascript$parser$__GT_Pattern(source,pattern){
return (new datascript.parser.Pattern(source,pattern,null,null,null));
});

datascript.parser.map__GT_Pattern = (function datascript$parser$map__GT_Pattern(G__37054){
return (new datascript.parser.Pattern(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__37054),cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(G__37054),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37054,cljs.core.cst$kw$source,cljs.core.array_seq([cljs.core.cst$kw$pattern], 0)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Predicate = (function (fn,args,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.Predicate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37070,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37072 = (((k37070 instanceof cljs.core.Keyword))?k37070.fqn:null);
switch (G__37072) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37070,else__8279__auto__);

}
});

datascript.parser.Predicate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.Predicate{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Predicate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37069){
var self__ = this;
var G__37069__$1 = this;
return (new cljs.core.RecordIter((0),G__37069__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Predicate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Predicate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.Predicate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Predicate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$fn,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.Predicate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37069){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37073 = cljs.core.keyword_identical_QMARK_;
var expr__37074 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37076 = cljs.core.cst$kw$fn;
var G__37077 = expr__37074;
return (pred__37073.cljs$core$IFn$_invoke$arity$2 ? pred__37073.cljs$core$IFn$_invoke$arity$2(G__37076,G__37077) : pred__37073.call(null,G__37076,G__37077));
})())){
return (new datascript.parser.Predicate(G__37069,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37078 = cljs.core.cst$kw$args;
var G__37079 = expr__37074;
return (pred__37073.cljs$core$IFn$_invoke$arity$2 ? pred__37073.cljs$core$IFn$_invoke$arity$2(G__37078,G__37079) : pred__37073.call(null,G__37078,G__37079));
})())){
return (new datascript.parser.Predicate(self__.fn,G__37069,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Predicate(self__.fn,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37069),null));
}
}
});

datascript.parser.Predicate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.Predicate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37069){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.Predicate(self__.fn,self__.args,G__37069,self__.__extmap,self__.__hash));
});

datascript.parser.Predicate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f37066){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.Predicate(datascript.parser.postwalk(self__.fn,f37066),datascript.parser.postwalk(self__.args,f37066),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred37067,acc37068){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37067,self__.args,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37067,self__.fn,cljs.core.array_seq([acc37068], 0))], 0));
});

datascript.parser.Predicate.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc37068){
var self__ = this;
var ___35551__auto____$1 = this;
var G__37080 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc37068,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc37068,self__.fn));
var G__37081 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__37080,G__37081) : datascript.parser.collect_vars_acc.call(null,G__37080,G__37081));
});

datascript.parser.Predicate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$args], null);
});

datascript.parser.Predicate.cljs$lang$type = true;

datascript.parser.Predicate.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Predicate");
});

datascript.parser.Predicate.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/Predicate");
});

datascript.parser.__GT_Predicate = (function datascript$parser$__GT_Predicate(fn,args){
return (new datascript.parser.Predicate(fn,args,null,null,null));
});

datascript.parser.map__GT_Predicate = (function datascript$parser$map__GT_Predicate(G__37071){
return (new datascript.parser.Predicate(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__37071),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__37071),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37071,cljs.core.cst$kw$fn,cljs.core.array_seq([cljs.core.cst$kw$args], 0)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Function = (function (fn,args,binding,__meta,__extmap,__hash){
this.fn = fn;
this.args = args;
this.binding = binding;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.Function.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37087,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37089 = (((k37087 instanceof cljs.core.Keyword))?k37087.fqn:null);
switch (G__37089) {
case "fn":
return self__.fn;

break;
case "args":
return self__.args;

break;
case "binding":
return self__.binding;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37087,else__8279__auto__);

}
});

datascript.parser.Function.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.Function{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$binding,self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Function.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37086){
var self__ = this;
var G__37086__$1 = this;
return (new cljs.core.RecordIter((0),G__37086__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fn,cljs.core.cst$kw$args,cljs.core.cst$kw$binding], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Function.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Function.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.Function.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Function.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$binding,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.Function.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37086){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37090 = cljs.core.keyword_identical_QMARK_;
var expr__37091 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37093 = cljs.core.cst$kw$fn;
var G__37094 = expr__37091;
return (pred__37090.cljs$core$IFn$_invoke$arity$2 ? pred__37090.cljs$core$IFn$_invoke$arity$2(G__37093,G__37094) : pred__37090.call(null,G__37093,G__37094));
})())){
return (new datascript.parser.Function(G__37086,self__.args,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37095 = cljs.core.cst$kw$args;
var G__37096 = expr__37091;
return (pred__37090.cljs$core$IFn$_invoke$arity$2 ? pred__37090.cljs$core$IFn$_invoke$arity$2(G__37095,G__37096) : pred__37090.call(null,G__37095,G__37096));
})())){
return (new datascript.parser.Function(self__.fn,G__37086,self__.binding,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37097 = cljs.core.cst$kw$binding;
var G__37098 = expr__37091;
return (pred__37090.cljs$core$IFn$_invoke$arity$2 ? pred__37090.cljs$core$IFn$_invoke$arity$2(G__37097,G__37098) : pred__37090.call(null,G__37097,G__37098));
})())){
return (new datascript.parser.Function(self__.fn,self__.args,G__37086,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37086),null));
}
}
}
});

datascript.parser.Function.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$fn,self__.fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$binding,self__.binding],null))], null),self__.__extmap));
});

datascript.parser.Function.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37086){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.Function(self__.fn,self__.args,self__.binding,G__37086,self__.__extmap,self__.__hash));
});

datascript.parser.Function.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Function.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f37083){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.Function(datascript.parser.postwalk(self__.fn,f37083),datascript.parser.postwalk(self__.args,f37083),datascript.parser.postwalk(self__.binding,f37083),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred37084,acc37085){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37084,self__.binding,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37084,self__.args,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37084,self__.fn,cljs.core.array_seq([acc37085], 0))], 0))], 0));
});

datascript.parser.Function.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc37085){
var self__ = this;
var ___35551__auto____$1 = this;
var G__37099 = (function (){var G__37101 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc37085,self__.fn) : datascript.parser.collect_vars_acc.call(null,acc37085,self__.fn));
var G__37102 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__37101,G__37102) : datascript.parser.collect_vars_acc.call(null,G__37101,G__37102));
})();
var G__37100 = self__.binding;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__37099,G__37100) : datascript.parser.collect_vars_acc.call(null,G__37099,G__37100));
});

datascript.parser.Function.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$fn,cljs.core.cst$sym$args,cljs.core.cst$sym$binding], null);
});

datascript.parser.Function.cljs$lang$type = true;

datascript.parser.Function.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Function");
});

datascript.parser.Function.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/Function");
});

datascript.parser.__GT_Function = (function datascript$parser$__GT_Function(fn,args,binding){
return (new datascript.parser.Function(fn,args,binding,null,null,null));
});

datascript.parser.map__GT_Function = (function datascript$parser$map__GT_Function(G__37088){
return (new datascript.parser.Function(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(G__37088),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__37088),cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(G__37088),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37088,cljs.core.cst$kw$fn,cljs.core.array_seq([cljs.core.cst$kw$args,cljs.core.cst$kw$binding], 0)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleExpr = (function (source,name,args,__meta,__extmap,__hash){
this.source = source;
this.name = name;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.RuleExpr.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37108,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37110 = (((k37108 instanceof cljs.core.Keyword))?k37108.fqn:null);
switch (G__37110) {
case "source":
return self__.source;

break;
case "name":
return self__.name;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37108,else__8279__auto__);

}
});

datascript.parser.RuleExpr.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.RuleExpr{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleExpr.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37107){
var self__ = this;
var G__37107__$1 = this;
return (new cljs.core.RecordIter((0),G__37107__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$name,cljs.core.cst$kw$args], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.RuleExpr.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleExpr.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$args,null,cljs.core.cst$kw$name,null,cljs.core.cst$kw$source,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.RuleExpr.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37107){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37111 = cljs.core.keyword_identical_QMARK_;
var expr__37112 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37114 = cljs.core.cst$kw$source;
var G__37115 = expr__37112;
return (pred__37111.cljs$core$IFn$_invoke$arity$2 ? pred__37111.cljs$core$IFn$_invoke$arity$2(G__37114,G__37115) : pred__37111.call(null,G__37114,G__37115));
})())){
return (new datascript.parser.RuleExpr(G__37107,self__.name,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37116 = cljs.core.cst$kw$name;
var G__37117 = expr__37112;
return (pred__37111.cljs$core$IFn$_invoke$arity$2 ? pred__37111.cljs$core$IFn$_invoke$arity$2(G__37116,G__37117) : pred__37111.call(null,G__37116,G__37117));
})())){
return (new datascript.parser.RuleExpr(self__.source,G__37107,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37118 = cljs.core.cst$kw$args;
var G__37119 = expr__37112;
return (pred__37111.cljs$core$IFn$_invoke$arity$2 ? pred__37111.cljs$core$IFn$_invoke$arity$2(G__37118,G__37119) : pred__37111.call(null,G__37118,G__37119));
})())){
return (new datascript.parser.RuleExpr(self__.source,self__.name,G__37107,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37107),null));
}
}
}
});

datascript.parser.RuleExpr.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$args,self__.args],null))], null),self__.__extmap));
});

datascript.parser.RuleExpr.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37107){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.RuleExpr(self__.source,self__.name,self__.args,G__37107,self__.__extmap,self__.__hash));
});

datascript.parser.RuleExpr.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f37104){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.RuleExpr(datascript.parser.postwalk(self__.source,f37104),datascript.parser.postwalk(self__.name,f37104),datascript.parser.postwalk(self__.args,f37104),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred37105,acc37106){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37105,self__.args,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37105,self__.name,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37105,self__.source,cljs.core.array_seq([acc37106], 0))], 0))], 0));
});

datascript.parser.RuleExpr.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc37106){
var self__ = this;
var ___35551__auto____$1 = this;
var G__37120 = (function (){var G__37122 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc37106,self__.source) : datascript.parser.collect_vars_acc.call(null,acc37106,self__.source));
var G__37123 = self__.name;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__37122,G__37123) : datascript.parser.collect_vars_acc.call(null,G__37122,G__37123));
})();
var G__37121 = self__.args;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__37120,G__37121) : datascript.parser.collect_vars_acc.call(null,G__37120,G__37121));
});

datascript.parser.RuleExpr.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$name,cljs.core.cst$sym$args], null);
});

datascript.parser.RuleExpr.cljs$lang$type = true;

datascript.parser.RuleExpr.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/RuleExpr");
});

datascript.parser.RuleExpr.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/RuleExpr");
});

datascript.parser.__GT_RuleExpr = (function datascript$parser$__GT_RuleExpr(source,name,args){
return (new datascript.parser.RuleExpr(source,name,args,null,null,null));
});

datascript.parser.map__GT_RuleExpr = (function datascript$parser$map__GT_RuleExpr(G__37109){
return (new datascript.parser.RuleExpr(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__37109),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__37109),cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(G__37109),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37109,cljs.core.cst$kw$source,cljs.core.array_seq([cljs.core.cst$kw$name,cljs.core.cst$kw$args], 0)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Not = (function (source,vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.Not.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37129,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37131 = (((k37129 instanceof cljs.core.Keyword))?k37129.fqn:null);
switch (G__37131) {
case "source":
return self__.source;

break;
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37129,else__8279__auto__);

}
});

datascript.parser.Not.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.Not{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vars,self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Not.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37128){
var self__ = this;
var G__37128__$1 = this;
return (new cljs.core.RecordIter((0),G__37128__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$vars,cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Not.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Not.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.Not.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Not.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$source,null,cljs.core.cst$kw$clauses,null,cljs.core.cst$kw$vars,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.Not.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37128){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37132 = cljs.core.keyword_identical_QMARK_;
var expr__37133 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37135 = cljs.core.cst$kw$source;
var G__37136 = expr__37133;
return (pred__37132.cljs$core$IFn$_invoke$arity$2 ? pred__37132.cljs$core$IFn$_invoke$arity$2(G__37135,G__37136) : pred__37132.call(null,G__37135,G__37136));
})())){
return (new datascript.parser.Not(G__37128,self__.vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37137 = cljs.core.cst$kw$vars;
var G__37138 = expr__37133;
return (pred__37132.cljs$core$IFn$_invoke$arity$2 ? pred__37132.cljs$core$IFn$_invoke$arity$2(G__37137,G__37138) : pred__37132.call(null,G__37137,G__37138));
})())){
return (new datascript.parser.Not(self__.source,G__37128,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37139 = cljs.core.cst$kw$clauses;
var G__37140 = expr__37133;
return (pred__37132.cljs$core$IFn$_invoke$arity$2 ? pred__37132.cljs$core$IFn$_invoke$arity$2(G__37139,G__37140) : pred__37132.call(null,G__37139,G__37140));
})())){
return (new datascript.parser.Not(self__.source,self__.vars,G__37128,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37128),null));
}
}
}
});

datascript.parser.Not.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vars,self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Not.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37128){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.Not(self__.source,self__.vars,self__.clauses,G__37128,self__.__extmap,self__.__hash));
});

datascript.parser.Not.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Not.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f37125){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.Not(datascript.parser.postwalk(self__.source,f37125),datascript.parser.postwalk(self__.vars,f37125),datascript.parser.postwalk(self__.clauses,f37125),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred37126,acc37127){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37126,self__.clauses,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37126,self__.vars,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37126,self__.source,cljs.core.array_seq([acc37127], 0))], 0))], 0));
});

datascript.parser.Not.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc37127){
var self__ = this;
var ___35551__auto____$1 = this;
var G__37141 = (function (){var G__37143 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc37127,self__.source) : datascript.parser.collect_vars_acc.call(null,acc37127,self__.source));
var G__37144 = self__.vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__37143,G__37144) : datascript.parser.collect_vars_acc.call(null,G__37143,G__37144));
})();
var G__37142 = self__.clauses;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__37141,G__37142) : datascript.parser.collect_vars_acc.call(null,G__37141,G__37142));
});

datascript.parser.Not.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$vars,cljs.core.cst$sym$clauses], null);
});

datascript.parser.Not.cljs$lang$type = true;

datascript.parser.Not.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Not");
});

datascript.parser.Not.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/Not");
});

datascript.parser.__GT_Not = (function datascript$parser$__GT_Not(source,vars,clauses){
return (new datascript.parser.Not(source,vars,clauses,null,null,null));
});

datascript.parser.map__GT_Not = (function datascript$parser$map__GT_Not(G__37130){
return (new datascript.parser.Not(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__37130),cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(G__37130),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__37130),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37130,cljs.core.cst$kw$source,cljs.core.array_seq([cljs.core.cst$kw$vars,cljs.core.cst$kw$clauses], 0)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Or = (function (source,rule_vars,clauses,__meta,__extmap,__hash){
this.source = source;
this.rule_vars = rule_vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.Or.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37150,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37152 = (((k37150 instanceof cljs.core.Keyword))?k37150.fqn:null);
switch (G__37152) {
case "source":
return self__.source;

break;
case "rule-vars":
return self__.rule_vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37150,else__8279__auto__);

}
});

datascript.parser.Or.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.Or{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rule_DASH_vars,self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Or.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37149){
var self__ = this;
var G__37149__$1 = this;
return (new cljs.core.RecordIter((0),G__37149__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$rule_DASH_vars,cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Or.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Or.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.Or.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Or.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$rule_DASH_vars,null,cljs.core.cst$kw$source,null,cljs.core.cst$kw$clauses,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.Or.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37149){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37153 = cljs.core.keyword_identical_QMARK_;
var expr__37154 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37156 = cljs.core.cst$kw$source;
var G__37157 = expr__37154;
return (pred__37153.cljs$core$IFn$_invoke$arity$2 ? pred__37153.cljs$core$IFn$_invoke$arity$2(G__37156,G__37157) : pred__37153.call(null,G__37156,G__37157));
})())){
return (new datascript.parser.Or(G__37149,self__.rule_vars,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37158 = cljs.core.cst$kw$rule_DASH_vars;
var G__37159 = expr__37154;
return (pred__37153.cljs$core$IFn$_invoke$arity$2 ? pred__37153.cljs$core$IFn$_invoke$arity$2(G__37158,G__37159) : pred__37153.call(null,G__37158,G__37159));
})())){
return (new datascript.parser.Or(self__.source,G__37149,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37160 = cljs.core.cst$kw$clauses;
var G__37161 = expr__37154;
return (pred__37153.cljs$core$IFn$_invoke$arity$2 ? pred__37153.cljs$core$IFn$_invoke$arity$2(G__37160,G__37161) : pred__37153.call(null,G__37160,G__37161));
})())){
return (new datascript.parser.Or(self__.source,self__.rule_vars,G__37149,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37149),null));
}
}
}
});

datascript.parser.Or.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$source,self__.source],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rule_DASH_vars,self__.rule_vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.Or.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37149){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.Or(self__.source,self__.rule_vars,self__.clauses,G__37149,self__.__extmap,self__.__hash));
});

datascript.parser.Or.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Or.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f37146){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.Or(datascript.parser.postwalk(self__.source,f37146),datascript.parser.postwalk(self__.rule_vars,f37146),datascript.parser.postwalk(self__.clauses,f37146),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred37147,acc37148){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37147,self__.clauses,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37147,self__.rule_vars,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37147,self__.source,cljs.core.array_seq([acc37148], 0))], 0))], 0));
});

datascript.parser.Or.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc37148){
var self__ = this;
var ___35551__auto____$1 = this;
var G__37162 = (function (){var G__37164 = (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc37148,self__.source) : datascript.parser.collect_vars_acc.call(null,acc37148,self__.source));
var G__37165 = self__.rule_vars;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__37164,G__37165) : datascript.parser.collect_vars_acc.call(null,G__37164,G__37165));
})();
var G__37163 = self__.clauses;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__37162,G__37163) : datascript.parser.collect_vars_acc.call(null,G__37162,G__37163));
});

datascript.parser.Or.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$source,cljs.core.cst$sym$rule_DASH_vars,cljs.core.cst$sym$clauses], null);
});

datascript.parser.Or.cljs$lang$type = true;

datascript.parser.Or.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Or");
});

datascript.parser.Or.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/Or");
});

datascript.parser.__GT_Or = (function datascript$parser$__GT_Or(source,rule_vars,clauses){
return (new datascript.parser.Or(source,rule_vars,clauses,null,null,null));
});

datascript.parser.map__GT_Or = (function datascript$parser$map__GT_Or(G__37151){
return (new datascript.parser.Or(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(G__37151),cljs.core.cst$kw$rule_DASH_vars.cljs$core$IFn$_invoke$arity$1(G__37151),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__37151),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37151,cljs.core.cst$kw$source,cljs.core.array_seq([cljs.core.cst$kw$rule_DASH_vars,cljs.core.cst$kw$clauses], 0)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.And = (function (clauses,__meta,__extmap,__hash){
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.And.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37171,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37173 = (((k37171 instanceof cljs.core.Keyword))?k37171.fqn:null);
switch (G__37173) {
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37171,else__8279__auto__);

}
});

datascript.parser.And.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.And{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.And.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37170){
var self__ = this;
var G__37170__$1 = this;
return (new cljs.core.RecordIter((0),G__37170__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.And.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.And.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.And.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.And.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$clauses,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.And.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37170){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37174 = cljs.core.keyword_identical_QMARK_;
var expr__37175 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37177 = cljs.core.cst$kw$clauses;
var G__37178 = expr__37175;
return (pred__37174.cljs$core$IFn$_invoke$arity$2 ? pred__37174.cljs$core$IFn$_invoke$arity$2(G__37177,G__37178) : pred__37174.call(null,G__37177,G__37178));
})())){
return (new datascript.parser.And(G__37170,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.And(self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37170),null));
}
});

datascript.parser.And.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.And.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37170){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.And(self__.clauses,G__37170,self__.__extmap,self__.__hash));
});

datascript.parser.And.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.And.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f37167){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.And(datascript.parser.postwalk(self__.clauses,f37167),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred37168,acc37169){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37168,self__.clauses,cljs.core.array_seq([acc37169], 0));
});

datascript.parser.And.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc37169){
var self__ = this;
var ___35551__auto____$1 = this;
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(acc37169,self__.clauses) : datascript.parser.collect_vars_acc.call(null,acc37169,self__.clauses));
});

datascript.parser.And.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$clauses], null);
});

datascript.parser.And.cljs$lang$type = true;

datascript.parser.And.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/And");
});

datascript.parser.And.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/And");
});

datascript.parser.__GT_And = (function datascript$parser$__GT_And(clauses){
return (new datascript.parser.And(clauses,null,null,null));
});

datascript.parser.map__GT_And = (function datascript$parser$map__GT_And(G__37172){
return (new datascript.parser.And(cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__37172),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37172,cljs.core.cst$kw$clauses),null));
});


datascript.parser.parse_pattern_el = (function datascript$parser$parse_pattern_el(form){
var or__7601__auto__ = datascript.parser.parse_placeholder(form);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = datascript.parser.parse_variable(form);
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
return datascript.parser.parse_constant(form);
}
}
});
datascript.parser.take_source = (function datascript$parser$take_source(form){
if(cljs.core.sequential_QMARK_(form)){
var temp__6736__auto__ = datascript.parser.parse_src_var(cljs.core.first(form));
if(cljs.core.truth_(temp__6736__auto__)){
var source_STAR_ = temp__6736__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [source_STAR_,cljs.core.next(form)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new datascript.parser.DefaultSrc(null,null,null)),form], null);
}
} else {
return null;
}
});
datascript.parser.parse_pattern = (function datascript$parser$parse_pattern(form){
var temp__6738__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__6738__auto__)){
var vec__37183 = temp__6738__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37183,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37183,(1),null);
var temp__6738__auto____$1 = datascript.parser.parse_seq(datascript.parser.parse_pattern_el,next_form);
if(cljs.core.truth_(temp__6738__auto____$1)){
var pattern_STAR_ = temp__6738__auto____$1;
if(!(cljs.core.empty_QMARK_(pattern_STAR_))){
return datascript.parser.with_source((new datascript.parser.Pattern(source_STAR_,pattern_STAR_,null,null,null)),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Pattern could not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_call = (function datascript$parser$parse_call(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__37189 = form;
var seq__37190 = cljs.core.seq(vec__37189);
var first__37191 = cljs.core.first(seq__37190);
var seq__37190__$1 = cljs.core.next(seq__37190);
var fn = first__37191;
var args = seq__37190__$1;
var args__$1 = (((args == null))?cljs.core.PersistentVector.EMPTY:args);
var fn_STAR_ = (function (){var or__7601__auto__ = datascript.parser.parse_plain_symbol(fn);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return datascript.parser.parse_variable(fn);
}
})();
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_fn_arg,args__$1);
if(cljs.core.truth_((function (){var and__7589__auto__ = fn_STAR_;
if(cljs.core.truth_(and__7589__auto__)){
return args_STAR_;
} else {
return and__7589__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fn_STAR_,args_STAR_], null);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_pred = (function datascript$parser$parse_pred(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_(form,(1)))){
var temp__6738__auto__ = datascript.parser.parse_call(cljs.core.first(form));
if(cljs.core.truth_(temp__6738__auto__)){
var vec__37195 = temp__6738__auto__;
var fn_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37195,(0),null);
var args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37195,(1),null);
return datascript.parser.with_source((new datascript.parser.Predicate(fn_STAR_,args_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_fn = (function datascript$parser$parse_fn(form){
if(cljs.core.truth_(datascript.parser.of_size_QMARK_(form,(2)))){
var vec__37204 = form;
var call = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37204,(0),null);
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37204,(1),null);
var temp__6738__auto__ = datascript.parser.parse_call(call);
if(cljs.core.truth_(temp__6738__auto__)){
var vec__37207 = temp__6738__auto__;
var fn_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207,(0),null);
var args_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37207,(1),null);
var temp__6738__auto____$1 = datascript.parser.parse_binding(binding);
if(cljs.core.truth_(temp__6738__auto____$1)){
var binding_STAR_ = temp__6738__auto____$1;
return datascript.parser.with_source((new datascript.parser.Function(fn_STAR_,args_STAR_,binding_STAR_,null,null,null)),form);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_rule_expr = (function datascript$parser$parse_rule_expr(form){
var temp__6738__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__6738__auto__)){
var vec__37216 = temp__6738__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37216,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37216,(1),null);
var vec__37219 = next_form;
var seq__37220 = cljs.core.seq(vec__37219);
var first__37221 = cljs.core.first(seq__37220);
var seq__37220__$1 = cljs.core.next(seq__37220);
var name = first__37221;
var args = seq__37220__$1;
var name_STAR_ = datascript.parser.parse_plain_symbol(name);
var args_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_pattern_el,args);
if(cljs.core.truth_(name_STAR_)){
if(cljs.core.empty_QMARK_(args)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("rule-expr requires at least one argument")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
} else {
if((args_STAR_ == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule-expr arguments, expected [ (variable | constant | '_')+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
} else {
return (new datascript.parser.RuleExpr(source_STAR_,name_STAR_,args_STAR_,null,null,null));

}
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.collect_vars_acc = (function datascript$parser$collect_vars_acc(acc,form){
if((form instanceof datascript.parser.Variable)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,form);
} else {
if((form instanceof datascript.parser.Not)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(form));
} else {
if((form instanceof datascript.parser.Or)){
var G__37225 = acc;
var G__37226 = cljs.core.cst$kw$rule_DASH_vars.cljs$core$IFn$_invoke$arity$1(form);
return (datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2 ? datascript.parser.collect_vars_acc.cljs$core$IFn$_invoke$arity$2(G__37225,G__37226) : datascript.parser.collect_vars_acc.call(null,G__37225,G__37226));
} else {
if(((!((form == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === form.datascript$parser$ITraversable$)))?true:(((!form.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form):false)):cljs.core.native_satisfies_QMARK_(datascript.parser.ITraversable,form))){
return datascript.parser._collect_vars(form,acc);
} else {
if(cljs.core.sequential_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.parser.collect_vars_acc,acc,form);
} else {
return acc;

}
}
}
}
}
});
datascript.parser.collect_vars = (function datascript$parser$collect_vars(form){
return datascript.parser.collect_vars_acc(cljs.core.PersistentVector.EMPTY,form);
});
datascript.parser.collect_vars_distinct = (function datascript$parser$collect_vars_distinct(form){
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(datascript.parser.collect_vars(form)));
});
datascript.parser.validate_join_vars = (function datascript$parser$validate_join_vars(vars,clauses,form){
var undeclared_37228 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(vars),cljs.core.set(datascript.parser.collect_vars(clauses)));
if(cljs.core.empty_QMARK_(undeclared_37228)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Join variable not declared inside clauses: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,undeclared_37228)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}

if(cljs.core.empty_QMARK_(vars)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Join variables should not be empty")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
} else {
return null;
}
});
datascript.parser.validate_not = (function datascript$parser$validate_not(clause,form){
datascript.parser.validate_join_vars(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(clause),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(clause),form);

return clause;
});
datascript.parser.parse_not = (function datascript$parser$parse_not(form){
var temp__6738__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__6738__auto__)){
var vec__37235 = temp__6738__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37235,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37235,(1),null);
var vec__37238 = next_form;
var seq__37239 = cljs.core.seq(vec__37238);
var first__37240 = cljs.core.first(seq__37239);
var seq__37239__$1 = cljs.core.next(seq__37239);
var sym = first__37240;
var clauses = seq__37239__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$not,sym)){
var temp__6736__auto__ = (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(clauses) : datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_(temp__6736__auto__)){
var clauses_STAR_ = temp__6736__auto__;
return datascript.parser.validate_not(datascript.parser.with_source((new datascript.parser.Not(source_STAR_,datascript.parser.collect_vars_distinct(clauses_STAR_),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'not' clause, expected [ src-var? 'not' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_not_join = (function datascript$parser$parse_not_join(form){
var temp__6738__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__6738__auto__)){
var vec__37247 = temp__6738__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37247,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37247,(1),null);
var vec__37250 = next_form;
var seq__37251 = cljs.core.seq(vec__37250);
var first__37252 = cljs.core.first(seq__37251);
var seq__37251__$1 = cljs.core.next(seq__37251);
var sym = first__37252;
var first__37252__$1 = cljs.core.first(seq__37251__$1);
var seq__37251__$2 = cljs.core.next(seq__37251__$1);
var vars = first__37252__$1;
var clauses = seq__37251__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$not_DASH_join,sym)){
var vars_STAR_ = datascript.parser.parse_seq(datascript.parser.parse_variable,vars);
var clauses_STAR_ = (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(clauses) : datascript.parser.parse_clauses.call(null,clauses));
if(cljs.core.truth_((function (){var and__7589__auto__ = vars_STAR_;
if(cljs.core.truth_(and__7589__auto__)){
return clauses_STAR_;
} else {
return and__7589__auto__;
}
})())){
return datascript.parser.validate_not(datascript.parser.with_source((new datascript.parser.Not(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'not-join' clause, expected [ src-var? 'not-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.validate_or = (function datascript$parser$validate_or(clause,form){
var map__37261 = clause;
var map__37261__$1 = ((((!((map__37261 == null)))?((((map__37261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37261.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37261):map__37261);
var map__37262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37261__$1,cljs.core.cst$kw$rule_DASH_vars);
var map__37262__$1 = ((((!((map__37262 == null)))?((((map__37262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37262):map__37262);
var required = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37262__$1,cljs.core.cst$kw$required);
var free = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37262__$1,cljs.core.cst$kw$free);
var clauses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37261__$1,cljs.core.cst$kw$clauses);
var vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(required,free);
var seq__37265_37269 = cljs.core.seq(clauses);
var chunk__37266_37270 = null;
var count__37267_37271 = (0);
var i__37268_37272 = (0);
while(true){
if((i__37268_37272 < count__37267_37271)){
var clause_37273__$1 = chunk__37266_37270.cljs$core$IIndexed$_nth$arity$2(null,i__37268_37272);
datascript.parser.validate_join_vars(vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_37273__$1], null),form);

var G__37274 = seq__37265_37269;
var G__37275 = chunk__37266_37270;
var G__37276 = count__37267_37271;
var G__37277 = (i__37268_37272 + (1));
seq__37265_37269 = G__37274;
chunk__37266_37270 = G__37275;
count__37267_37271 = G__37276;
i__37268_37272 = G__37277;
continue;
} else {
var temp__6738__auto___37278 = cljs.core.seq(seq__37265_37269);
if(temp__6738__auto___37278){
var seq__37265_37279__$1 = temp__6738__auto___37278;
if(cljs.core.chunked_seq_QMARK_(seq__37265_37279__$1)){
var c__8512__auto___37280 = cljs.core.chunk_first(seq__37265_37279__$1);
var G__37281 = cljs.core.chunk_rest(seq__37265_37279__$1);
var G__37282 = c__8512__auto___37280;
var G__37283 = cljs.core.count(c__8512__auto___37280);
var G__37284 = (0);
seq__37265_37269 = G__37281;
chunk__37266_37270 = G__37282;
count__37267_37271 = G__37283;
i__37268_37272 = G__37284;
continue;
} else {
var clause_37285__$1 = cljs.core.first(seq__37265_37279__$1);
datascript.parser.validate_join_vars(vars,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause_37285__$1], null),form);

var G__37286 = cljs.core.next(seq__37265_37279__$1);
var G__37287 = null;
var G__37288 = (0);
var G__37289 = (0);
seq__37265_37269 = G__37286;
chunk__37266_37270 = G__37287;
count__37267_37271 = G__37288;
i__37268_37272 = G__37289;
continue;
}
} else {
}
}
break;
}

return clause;
});
datascript.parser.parse_and = (function datascript$parser$parse_and(form){
if((cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$and,cljs.core.first(form)))){
var clauses_STAR_ = (function (){var G__37291 = cljs.core.next(form);
return (datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1 ? datascript.parser.parse_clauses.cljs$core$IFn$_invoke$arity$1(G__37291) : datascript.parser.parse_clauses.call(null,G__37291));
})();
if(cljs.core.truth_(cljs.core.not_empty(clauses_STAR_))){
return (new datascript.parser.And(clauses_STAR_,null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'and' clause, expected [ 'and' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
});
datascript.parser.parse_or = (function datascript$parser$parse_or(form){
var temp__6738__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__6738__auto__)){
var vec__37298 = temp__6738__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37298,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37298,(1),null);
var vec__37301 = next_form;
var seq__37302 = cljs.core.seq(vec__37301);
var first__37303 = cljs.core.first(seq__37302);
var seq__37302__$1 = cljs.core.next(seq__37302);
var sym = first__37303;
var clauses = seq__37302__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or,sym)){
var temp__6736__auto__ = datascript.parser.parse_seq(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_(temp__6736__auto__)){
var clauses_STAR_ = temp__6736__auto__;
return datascript.parser.validate_or(datascript.parser.with_source((new datascript.parser.Or(source_STAR_,(new datascript.parser.RuleVars(null,datascript.parser.collect_vars_distinct(clauses_STAR_),null,null,null)),clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'or' clause, expected [ src-var? 'or' clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_or_join = (function datascript$parser$parse_or_join(form){
var temp__6738__auto__ = datascript.parser.take_source(form);
if(cljs.core.truth_(temp__6738__auto__)){
var vec__37310 = temp__6738__auto__;
var source_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37310,(0),null);
var next_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37310,(1),null);
var vec__37313 = next_form;
var seq__37314 = cljs.core.seq(vec__37313);
var first__37315 = cljs.core.first(seq__37314);
var seq__37314__$1 = cljs.core.next(seq__37314);
var sym = first__37315;
var first__37315__$1 = cljs.core.first(seq__37314__$1);
var seq__37314__$2 = cljs.core.next(seq__37314__$1);
var vars = first__37315__$1;
var clauses = seq__37314__$2;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$or_DASH_join,sym)){
var vars_STAR_ = datascript.parser.parse_rule_vars(vars);
var clauses_STAR_ = datascript.parser.parse_seq(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(datascript.parser.parse_and,datascript.parser.parse_clause),clauses);
if(cljs.core.truth_((function (){var and__7589__auto__ = vars_STAR_;
if(cljs.core.truth_(and__7589__auto__)){
return clauses_STAR_;
} else {
return and__7589__auto__;
}
})())){
return datascript.parser.validate_or(datascript.parser.with_source((new datascript.parser.Or(source_STAR_,vars_STAR_,clauses_STAR_,null,null,null)),form),form);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse 'or-join' clause, expected [ src-var? 'or-join' [variable+] clause+ ]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
} else {
return null;
}
} else {
return null;
}
});
datascript.parser.parse_clause = (function datascript$parser$parse_clause(form){
var or__7601__auto__ = datascript.parser.parse_not(form);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = datascript.parser.parse_not_join(form);
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
var or__7601__auto____$2 = datascript.parser.parse_or(form);
if(cljs.core.truth_(or__7601__auto____$2)){
return or__7601__auto____$2;
} else {
var or__7601__auto____$3 = datascript.parser.parse_or_join(form);
if(cljs.core.truth_(or__7601__auto____$3)){
return or__7601__auto____$3;
} else {
var or__7601__auto____$4 = datascript.parser.parse_pred(form);
if(cljs.core.truth_(or__7601__auto____$4)){
return or__7601__auto____$4;
} else {
var or__7601__auto____$5 = datascript.parser.parse_fn(form);
if(cljs.core.truth_(or__7601__auto____$5)){
return or__7601__auto____$5;
} else {
var or__7601__auto____$6 = datascript.parser.parse_rule_expr(form);
if(cljs.core.truth_(or__7601__auto____$6)){
return or__7601__auto____$6;
} else {
var or__7601__auto____$7 = datascript.parser.parse_pattern(form);
if(cljs.core.truth_(or__7601__auto____$7)){
return or__7601__auto____$7;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse clause, expected (data-pattern | pred-expr | fn-expr | rule-expr | not-clause | not-join-clause | or-clause | or-join-clause)")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
}
}
}
}
}
}
}
});
datascript.parser.parse_clauses = (function datascript$parser$parse_clauses(clauses){
return datascript.parser.parse_seq(datascript.parser.parse_clause,clauses);
});
datascript.parser.parse_where = (function datascript$parser$parse_where(form){
var or__7601__auto__ = datascript.parser.parse_clauses(form);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse :where clause, expected [clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_where,cljs.core.cst$kw$form,form], null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.RuleBranch = (function (vars,clauses,__meta,__extmap,__hash){
this.vars = vars;
this.clauses = clauses;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.RuleBranch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37321,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37323 = (((k37321 instanceof cljs.core.Keyword))?k37321.fqn:null);
switch (G__37323) {
case "vars":
return self__.vars;

break;
case "clauses":
return self__.clauses;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37321,else__8279__auto__);

}
});

datascript.parser.RuleBranch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.RuleBranch{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vars,self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleBranch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37320){
var self__ = this;
var G__37320__$1 = this;
return (new cljs.core.RecordIter((0),G__37320__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$vars,cljs.core.cst$kw$clauses], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.RuleBranch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.RuleBranch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$clauses,null,cljs.core.cst$kw$vars,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.RuleBranch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37320){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37324 = cljs.core.keyword_identical_QMARK_;
var expr__37325 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37327 = cljs.core.cst$kw$vars;
var G__37328 = expr__37325;
return (pred__37324.cljs$core$IFn$_invoke$arity$2 ? pred__37324.cljs$core$IFn$_invoke$arity$2(G__37327,G__37328) : pred__37324.call(null,G__37327,G__37328));
})())){
return (new datascript.parser.RuleBranch(G__37320,self__.clauses,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37329 = cljs.core.cst$kw$clauses;
var G__37330 = expr__37325;
return (pred__37324.cljs$core$IFn$_invoke$arity$2 ? pred__37324.cljs$core$IFn$_invoke$arity$2(G__37329,G__37330) : pred__37324.call(null,G__37329,G__37330));
})())){
return (new datascript.parser.RuleBranch(self__.vars,G__37320,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37320),null));
}
}
});

datascript.parser.RuleBranch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$vars,self__.vars],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$clauses,self__.clauses],null))], null),self__.__extmap));
});

datascript.parser.RuleBranch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37320){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.RuleBranch(self__.vars,self__.clauses,G__37320,self__.__extmap,self__.__hash));
});

datascript.parser.RuleBranch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f37317){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.RuleBranch(datascript.parser.postwalk(self__.vars,f37317),datascript.parser.postwalk(self__.clauses,f37317),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred37318,acc37319){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37318,self__.clauses,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37318,self__.vars,cljs.core.array_seq([acc37319], 0))], 0));
});

datascript.parser.RuleBranch.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc37319){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc37319,self__.vars),self__.clauses);
});

datascript.parser.RuleBranch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$vars,cljs.core.cst$sym$clauses], null);
});

datascript.parser.RuleBranch.cljs$lang$type = true;

datascript.parser.RuleBranch.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/RuleBranch");
});

datascript.parser.RuleBranch.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/RuleBranch");
});

datascript.parser.__GT_RuleBranch = (function datascript$parser$__GT_RuleBranch(vars,clauses){
return (new datascript.parser.RuleBranch(vars,clauses,null,null,null));
});

datascript.parser.map__GT_RuleBranch = (function datascript$parser$map__GT_RuleBranch(G__37322){
return (new datascript.parser.RuleBranch(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(G__37322),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(G__37322),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37322,cljs.core.cst$kw$vars,cljs.core.array_seq([cljs.core.cst$kw$clauses], 0)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Rule = (function (name,branches,__meta,__extmap,__hash){
this.name = name;
this.branches = branches;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.Rule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37336,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37338 = (((k37336 instanceof cljs.core.Keyword))?k37336.fqn:null);
switch (G__37338) {
case "name":
return self__.name;

break;
case "branches":
return self__.branches;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37336,else__8279__auto__);

}
});

datascript.parser.Rule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.Rule{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$branches,self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Rule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37335){
var self__ = this;
var G__37335__$1 = this;
return (new cljs.core.RecordIter((0),G__37335__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$branches], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Rule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Rule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.Rule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Rule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$branches,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.Rule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37335){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37339 = cljs.core.keyword_identical_QMARK_;
var expr__37340 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37342 = cljs.core.cst$kw$name;
var G__37343 = expr__37340;
return (pred__37339.cljs$core$IFn$_invoke$arity$2 ? pred__37339.cljs$core$IFn$_invoke$arity$2(G__37342,G__37343) : pred__37339.call(null,G__37342,G__37343));
})())){
return (new datascript.parser.Rule(G__37335,self__.branches,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37344 = cljs.core.cst$kw$branches;
var G__37345 = expr__37340;
return (pred__37339.cljs$core$IFn$_invoke$arity$2 ? pred__37339.cljs$core$IFn$_invoke$arity$2(G__37344,G__37345) : pred__37339.call(null,G__37344,G__37345));
})())){
return (new datascript.parser.Rule(self__.name,G__37335,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Rule(self__.name,self__.branches,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37335),null));
}
}
});

datascript.parser.Rule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$branches,self__.branches],null))], null),self__.__extmap));
});

datascript.parser.Rule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37335){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.Rule(self__.name,self__.branches,G__37335,self__.__extmap,self__.__hash));
});

datascript.parser.Rule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f37332){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.Rule(datascript.parser.postwalk(self__.name,f37332),datascript.parser.postwalk(self__.branches,f37332),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred37333,acc37334){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37333,self__.branches,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37333,self__.name,cljs.core.array_seq([acc37334], 0))], 0));
});

datascript.parser.Rule.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc37334){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc37334,self__.name),self__.branches);
});

datascript.parser.Rule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$branches], null);
});

datascript.parser.Rule.cljs$lang$type = true;

datascript.parser.Rule.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Rule");
});

datascript.parser.Rule.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/Rule");
});

datascript.parser.__GT_Rule = (function datascript$parser$__GT_Rule(name,branches){
return (new datascript.parser.Rule(name,branches,null,null,null));
});

datascript.parser.map__GT_Rule = (function datascript$parser$map__GT_Rule(G__37337){
return (new datascript.parser.Rule(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__37337),cljs.core.cst$kw$branches.cljs$core$IFn$_invoke$arity$1(G__37337),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37337,cljs.core.cst$kw$name,cljs.core.array_seq([cljs.core.cst$kw$branches], 0)),null));
});

datascript.parser.validate_vars = (function datascript$parser$validate_vars(vars,clauses,form){
var declared_vars = datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((function (p1__37347_SHARP_){
return (p1__37347_SHARP_ instanceof datascript.parser.Variable);
}),vars,cljs.core.array_seq([cljs.core.PersistentHashSet.EMPTY], 0));
var used_vars = datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(((function (declared_vars){
return (function (p1__37348_SHARP_){
return (p1__37348_SHARP_ instanceof datascript.parser.Variable);
});})(declared_vars))
,clauses,cljs.core.array_seq([cljs.core.PersistentHashSet.EMPTY], 0));
var undeclared_vars = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(used_vars,declared_vars);
if(cljs.core.empty_QMARK_(undeclared_vars)){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Reference to the unknown variables: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,undeclared_vars)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form,cljs.core.cst$kw$vars,undeclared_vars], null));
}
});
datascript.parser.parse_rule = (function datascript$parser$parse_rule(form){
if(cljs.core.sequential_QMARK_(form)){
var vec__37355 = form;
var seq__37356 = cljs.core.seq(vec__37355);
var first__37357 = cljs.core.first(seq__37356);
var seq__37356__$1 = cljs.core.next(seq__37356);
var head = first__37357;
var clauses = seq__37356__$1;
if(cljs.core.sequential_QMARK_(head)){
var vec__37358 = head;
var seq__37359 = cljs.core.seq(vec__37358);
var first__37360 = cljs.core.first(seq__37359);
var seq__37359__$1 = cljs.core.next(seq__37359);
var name = first__37360;
var vars = seq__37359__$1;
var name_STAR_ = (function (){var or__7601__auto__ = datascript.parser.parse_plain_symbol(name);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule name, expected plain-symbol")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form], null));
}
})();
var vars_STAR_ = datascript.parser.parse_rule_vars(vars);
var clauses_STAR_ = (function (){var or__7601__auto__ = cljs.core.not_empty(datascript.parser.parse_clauses(clauses));
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Rule branch should have clauses")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form], null));
}
})();
datascript.parser.validate_vars(vars_STAR_,clauses_STAR_,form);

return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,name_STAR_,cljs.core.cst$kw$vars,vars_STAR_,cljs.core.cst$kw$clauses,clauses_STAR_], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule head, expected [rule-name rule-vars]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot parse rule, expected [rule-head clause+]")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$form,form], null));
}
});
datascript.parser.validate_arity = (function datascript$parser$validate_arity(name,branches){
var vars0 = cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(cljs.core.first(branches));
var arity0 = datascript.parser.rule_vars_arity(vars0);
var seq__37367 = cljs.core.seq(cljs.core.next(branches));
var chunk__37369 = null;
var count__37370 = (0);
var i__37371 = (0);
while(true){
if((i__37371 < count__37370)){
var b = chunk__37369.cljs$core$IIndexed$_nth$arity$2(null,i__37371);
var vars_37373 = cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arity0,datascript.parser.rule_vars_arity(vars_37373))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Arity mismatch for rule '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(name)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("': "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([datascript.parser.flatten_rule_vars(vars0)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" vs. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([datascript.parser.flatten_rule_vars(vars_37373)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$rule,name], null));
} else {
}

var G__37374 = seq__37367;
var G__37375 = chunk__37369;
var G__37376 = count__37370;
var G__37377 = (i__37371 + (1));
seq__37367 = G__37374;
chunk__37369 = G__37375;
count__37370 = G__37376;
i__37371 = G__37377;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__37367);
if(temp__6738__auto__){
var seq__37367__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37367__$1)){
var c__8512__auto__ = cljs.core.chunk_first(seq__37367__$1);
var G__37378 = cljs.core.chunk_rest(seq__37367__$1);
var G__37379 = c__8512__auto__;
var G__37380 = cljs.core.count(c__8512__auto__);
var G__37381 = (0);
seq__37367 = G__37378;
chunk__37369 = G__37379;
count__37370 = G__37380;
i__37371 = G__37381;
continue;
} else {
var b = cljs.core.first(seq__37367__$1);
var vars_37382 = cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(arity0,datascript.parser.rule_vars_arity(vars_37382))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Arity mismatch for rule '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$symbol.cljs$core$IFn$_invoke$arity$1(name)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("': "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([datascript.parser.flatten_rule_vars(vars0)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" vs. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([datascript.parser.flatten_rule_vars(vars_37382)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_rule,cljs.core.cst$kw$rule,name], null));
} else {
}

var G__37383 = cljs.core.next(seq__37367__$1);
var G__37384 = null;
var G__37385 = (0);
var G__37386 = (0);
seq__37367 = G__37383;
chunk__37369 = G__37384;
count__37370 = G__37385;
i__37371 = G__37386;
continue;
}
} else {
return null;
}
}
break;
}
});
datascript.parser.parse_rules = (function datascript$parser$parse_rules(form){
return cljs.core.vec((function (){var iter__8463__auto__ = (function datascript$parser$parse_rules_$_iter__37406(s__37407){
return (new cljs.core.LazySeq(null,(function (){
var s__37407__$1 = s__37407;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__37407__$1);
if(temp__6738__auto__){
var s__37407__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37407__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__37407__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__37409 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__37408 = (0);
while(true){
if((i__37408 < size__8462__auto__)){
var vec__37418 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__37408);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37418,(0),null);
var branches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37418,(1),null);
var branches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (i__37408,vec__37418,name,branches,c__8461__auto__,size__8462__auto__,b__37409,s__37407__$2,temp__6738__auto__){
return (function (p1__37387_SHARP_){
return (new datascript.parser.RuleBranch(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(p1__37387_SHARP_),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(p1__37387_SHARP_),null,null,null));
});})(i__37408,vec__37418,name,branches,c__8461__auto__,size__8462__auto__,b__37409,s__37407__$2,temp__6738__auto__))
,branches);
cljs.core.chunk_append(b__37409,(function (){
datascript.parser.validate_arity(name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
);

var G__37424 = (i__37408 + (1));
i__37408 = G__37424;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37409),datascript$parser$parse_rules_$_iter__37406(cljs.core.chunk_rest(s__37407__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37409),null);
}
} else {
var vec__37421 = cljs.core.first(s__37407__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37421,(0),null);
var branches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37421,(1),null);
var branches__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__37421,name,branches,s__37407__$2,temp__6738__auto__){
return (function (p1__37387_SHARP_){
return (new datascript.parser.RuleBranch(cljs.core.cst$kw$vars.cljs$core$IFn$_invoke$arity$1(p1__37387_SHARP_),cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(p1__37387_SHARP_),null,null,null));
});})(vec__37421,name,branches,s__37407__$2,temp__6738__auto__))
,branches);
return cljs.core.cons((function (){
datascript.parser.validate_arity(name,branches__$1);

return (new datascript.parser.Rule(name,branches__$1,null,null,null));
})()
,datascript$parser$parse_rules_$_iter__37406(cljs.core.rest(s__37407__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8463__auto__(cljs.core.group_by(cljs.core.cst$kw$name,datascript.parser.parse_seq(datascript.parser.parse_rule,form)));
})());
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {datascript.parser.ITraversable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.parser.Query = (function (find,with$,in$,where,__meta,__extmap,__hash){
this.find = find;
this.with$ = with$;
this.in$ = in$;
this.where = where;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.parser.Query.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37429,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37431 = (((k37429 instanceof cljs.core.Keyword))?k37429.fqn:null);
switch (G__37431) {
case "find":
return self__.find;

break;
case "with":
return self__.with$;

break;
case "in":
return self__.in$;

break;
case "where":
return self__.where;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37429,else__8279__auto__);

}
});

datascript.parser.Query.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.parser.Query{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$find,self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$with,self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$in,self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$where,self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Query.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37428){
var self__ = this;
var G__37428__$1 = this;
return (new cljs.core.RecordIter((0),G__37428__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$find,cljs.core.cst$kw$with,cljs.core.cst$kw$in,cljs.core.cst$kw$where], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.parser.Query.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.parser.Query.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
var self__ = this;
var this__8271__auto____$1 = this;
var h__8043__auto__ = self__.__hash;
if(!((h__8043__auto__ == null))){
return h__8043__auto__;
} else {
var h__8043__auto____$1 = cljs.core.hash_imap(this__8271__auto____$1);
self__.__hash = h__8043__auto____$1;

return h__8043__auto____$1;
}
});

datascript.parser.Query.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
var self__ = this;
var this__8272__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7589__auto__ = other__8273__auto__;
if(cljs.core.truth_(and__7589__auto__)){
return ((this__8272__auto____$1.constructor === other__8273__auto__.constructor)) && (cljs.core.equiv_map(this__8272__auto____$1,other__8273__auto__));
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.parser.Query.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$find,null,cljs.core.cst$kw$where,null,cljs.core.cst$kw$with,null,cljs.core.cst$kw$in,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.parser.Query.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37428){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37432 = cljs.core.keyword_identical_QMARK_;
var expr__37433 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37435 = cljs.core.cst$kw$find;
var G__37436 = expr__37433;
return (pred__37432.cljs$core$IFn$_invoke$arity$2 ? pred__37432.cljs$core$IFn$_invoke$arity$2(G__37435,G__37436) : pred__37432.call(null,G__37435,G__37436));
})())){
return (new datascript.parser.Query(G__37428,self__.with$,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37437 = cljs.core.cst$kw$with;
var G__37438 = expr__37433;
return (pred__37432.cljs$core$IFn$_invoke$arity$2 ? pred__37432.cljs$core$IFn$_invoke$arity$2(G__37437,G__37438) : pred__37432.call(null,G__37437,G__37438));
})())){
return (new datascript.parser.Query(self__.find,G__37428,self__.in$,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37439 = cljs.core.cst$kw$in;
var G__37440 = expr__37433;
return (pred__37432.cljs$core$IFn$_invoke$arity$2 ? pred__37432.cljs$core$IFn$_invoke$arity$2(G__37439,G__37440) : pred__37432.call(null,G__37439,G__37440));
})())){
return (new datascript.parser.Query(self__.find,self__.with$,G__37428,self__.where,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37441 = cljs.core.cst$kw$where;
var G__37442 = expr__37433;
return (pred__37432.cljs$core$IFn$_invoke$arity$2 ? pred__37432.cljs$core$IFn$_invoke$arity$2(G__37441,G__37442) : pred__37432.call(null,G__37441,G__37442));
})())){
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,G__37428,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37428),null));
}
}
}
}
});

datascript.parser.Query.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$find,self__.find],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$with,self__.with$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$in,self__.in$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$where,self__.where],null))], null),self__.__extmap));
});

datascript.parser.Query.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37428){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.parser.Query(self__.find,self__.with$,self__.in$,self__.where,G__37428,self__.__extmap,self__.__hash));
});

datascript.parser.Query.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Query.prototype.datascript$parser$ITraversable$_postwalk$arity$2 = (function (this__35548__auto__,f37425){
var self__ = this;
var this__35548__auto____$1 = this;
var new__35549__auto__ = (new datascript.parser.Query(datascript.parser.postwalk(self__.find,f37425),datascript.parser.postwalk(self__.with$,f37425),datascript.parser.postwalk(self__.in$,f37425),datascript.parser.postwalk(self__.where,f37425),null,null,null));
var temp__6736__auto__ = cljs.core.meta(this__35548__auto____$1);
if(cljs.core.truth_(temp__6736__auto__)){
var meta__35550__auto__ = temp__6736__auto__;
return cljs.core.with_meta(new__35549__auto__,meta__35550__auto__);
} else {
return new__35549__auto__;
}
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect$arity$3 = (function (___35551__auto__,pred37426,acc37427){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37426,self__.where,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37426,self__.in$,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37426,self__.with$,cljs.core.array_seq([datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(pred37426,self__.find,cljs.core.array_seq([acc37427], 0))], 0))], 0))], 0));
});

datascript.parser.Query.prototype.datascript$parser$ITraversable$_collect_vars$arity$2 = (function (___35551__auto__,acc37427){
var self__ = this;
var ___35551__auto____$1 = this;
return datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(datascript.parser.collect_vars_acc(acc37427,self__.find),self__.with$),self__.in$),self__.where);
});

datascript.parser.Query.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$find,cljs.core.cst$sym$with,cljs.core.cst$sym$in,cljs.core.cst$sym$where], null);
});

datascript.parser.Query.cljs$lang$type = true;

datascript.parser.Query.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.parser/Query");
});

datascript.parser.Query.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.parser/Query");
});

datascript.parser.__GT_Query = (function datascript$parser$__GT_Query(find,with$,in$,where){
return (new datascript.parser.Query(find,with$,in$,where,null,null,null));
});

datascript.parser.map__GT_Query = (function datascript$parser$map__GT_Query(G__37430){
return (new datascript.parser.Query(cljs.core.cst$kw$find.cljs$core$IFn$_invoke$arity$1(G__37430),cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(G__37430),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(G__37430),cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(G__37430),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37430,cljs.core.cst$kw$find,cljs.core.array_seq([cljs.core.cst$kw$with,cljs.core.cst$kw$in,cljs.core.cst$kw$where], 0)),null));
});

datascript.parser.query__GT_map = (function datascript$parser$query__GT_map(query){
var parsed = cljs.core.PersistentArrayMap.EMPTY;
var key = null;
var qs = query;
while(true){
var temp__6736__auto__ = cljs.core.first(qs);
if(cljs.core.truth_(temp__6736__auto__)){
var q = temp__6736__auto__;
if((q instanceof cljs.core.Keyword)){
var G__37444 = parsed;
var G__37445 = q;
var G__37446 = cljs.core.next(qs);
parsed = G__37444;
key = G__37445;
qs = G__37446;
continue;
} else {
var G__37447 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__37448 = key;
var G__37449 = cljs.core.next(qs);
parsed = G__37447;
key = G__37448;
qs = G__37449;
continue;
}
} else {
return parsed;
}
break;
}
});
datascript.parser.validate_query = (function datascript$parser$validate_query(q,form){
var find_vars_37456 = cljs.core.set(datascript.parser.collect_vars(cljs.core.cst$kw$find.cljs$core$IFn$_invoke$arity$1(q)));
var with_vars_37457 = cljs.core.set(cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(q));
var in_vars_37458 = cljs.core.set(datascript.parser.collect_vars(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(q)));
var where_vars_37459 = cljs.core.set(datascript.parser.collect_vars(cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q)));
var unknown_37460 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(find_vars_37456,with_vars_37457),clojure.set.union.cljs$core$IFn$_invoke$arity$2(where_vars_37459,in_vars_37458));
var shared_37461 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(find_vars_37456,with_vars_37457);
if(cljs.core.empty_QMARK_(unknown_37460)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Query for unknown vars: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,unknown_37460)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$vars,unknown_37460,cljs.core.cst$kw$form,form], null));
}

if(cljs.core.empty_QMARK_(shared_37461)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(":in and :with should not use same variables: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,shared_37461)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$vars,shared_37461,cljs.core.cst$kw$form,form], null));
}

var in_vars_37462 = datascript.parser.collect_vars(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(q));
var in_sources_37463 = datascript.parser.collect(((function (in_vars_37462){
return (function (p1__37450_SHARP_){
return (p1__37450_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_vars_37462))
,cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(q));
var in_rules_37464 = datascript.parser.collect(((function (in_vars_37462,in_sources_37463){
return (function (p1__37451_SHARP_){
return (p1__37451_SHARP_ instanceof datascript.parser.RulesVar);
});})(in_vars_37462,in_sources_37463))
,cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_((function (){var and__7589__auto__ = datascript.parser.distinct_QMARK_(in_vars_37462);
if(cljs.core.truth_(and__7589__auto__)){
var and__7589__auto____$1 = datascript.parser.distinct_QMARK_(in_sources_37463);
if(cljs.core.truth_(and__7589__auto____$1)){
return datascript.parser.distinct_QMARK_(in_rules_37464);
} else {
return and__7589__auto____$1;
}
} else {
return and__7589__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Vars used in :in should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,form], null));
}

var with_vars_37465 = datascript.parser.collect_vars(cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(datascript.parser.distinct_QMARK_(with_vars_37465))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Vars used in :with should be distinct")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,form], null));
}

var in_sources_37466 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic((function (p1__37452_SHARP_){
return (p1__37452_SHARP_ instanceof datascript.parser.SrcVar);
}),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(q),cljs.core.array_seq([cljs.core.PersistentHashSet.EMPTY], 0));
var where_sources_37467 = datascript.parser.collect.cljs$core$IFn$_invoke$arity$variadic(((function (in_sources_37466){
return (function (p1__37453_SHARP_){
return (p1__37453_SHARP_ instanceof datascript.parser.SrcVar);
});})(in_sources_37466))
,cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q),cljs.core.array_seq([cljs.core.PersistentHashSet.EMPTY], 0));
var unknown_37468 = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(where_sources_37467,in_sources_37466);
if(cljs.core.empty_QMARK_(unknown_37468)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Where uses unknown source vars: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,unknown_37468)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$vars,unknown_37468,cljs.core.cst$kw$form,form], null));
}

var rule_exprs = datascript.parser.collect((function (p1__37454_SHARP_){
return (p1__37454_SHARP_ instanceof datascript.parser.RuleExpr);
}),cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q));
var rules_vars = datascript.parser.collect(((function (rule_exprs){
return (function (p1__37455_SHARP_){
return (p1__37455_SHARP_ instanceof datascript.parser.RulesVar);
});})(rule_exprs))
,cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(q));
if((!(cljs.core.empty_QMARK_(rule_exprs))) && (cljs.core.empty_QMARK_(rules_vars))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Missing rules var '%' in :in")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,form], null));
} else {
return null;
}
});
datascript.parser.parse_query = (function datascript$parser$parse_query(q){
var qm = ((cljs.core.map_QMARK_(q))?q:((cljs.core.sequential_QMARK_(q))?datascript.parser.query__GT_map(q):(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Query should be a vector or a map")].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$error,cljs.core.cst$kw$parser_SLASH_query,cljs.core.cst$kw$form,q], null))})()
));
var res = datascript.parser.map__GT_Query(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$find,datascript.parser.parse_find(cljs.core.cst$kw$find.cljs$core$IFn$_invoke$arity$1(qm)),cljs.core.cst$kw$with,(function (){var temp__6738__auto__ = cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(qm);
if(cljs.core.truth_(temp__6738__auto__)){
var with$ = temp__6738__auto__;
return datascript.parser.parse_with(with$);
} else {
return null;
}
})(),cljs.core.cst$kw$in,datascript.parser.parse_in(cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$2(qm,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$], null))),cljs.core.cst$kw$where,datascript.parser.parse_where(cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$2(qm,cljs.core.PersistentVector.EMPTY))], null));
datascript.parser.validate_query(res,q);

return res;
});
