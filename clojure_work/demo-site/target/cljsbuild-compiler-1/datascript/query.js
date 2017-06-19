// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');
goog.require('clojure.set');
goog.require('clojure.walk');
goog.require('datascript.db');
goog.require('datascript.arrays');
goog.require('datascript.lru');
goog.require('datascript.impl.entity');
goog.require('datascript.parser');
goog.require('datascript.pull_api');
goog.require('datascript.pull_parser');
datascript.query.lru_cache_size = (100);

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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap,__hash){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37884,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37886 = (((k37884 instanceof cljs.core.Keyword))?k37884.fqn:null);
switch (G__37886) {
case "rels":
return self__.rels;

break;
case "sources":
return self__.sources;

break;
case "rules":
return self__.rules;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37884,else__8279__auto__);

}
});

datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.query.Context{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rels,self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sources,self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rules,self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.query.Context.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37883){
var self__ = this;
var G__37883__$1 = this;
return (new cljs.core.RecordIter((0),G__37883__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels,cljs.core.cst$kw$sources,cljs.core.cst$kw$rules], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
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

datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
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

datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$sources,null,cljs.core.cst$kw$rules,null,cljs.core.cst$kw$rels,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37883){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37887 = cljs.core.keyword_identical_QMARK_;
var expr__37888 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37890 = cljs.core.cst$kw$rels;
var G__37891 = expr__37888;
return (pred__37887.cljs$core$IFn$_invoke$arity$2 ? pred__37887.cljs$core$IFn$_invoke$arity$2(G__37890,G__37891) : pred__37887.call(null,G__37890,G__37891));
})())){
return (new datascript.query.Context(G__37883,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37892 = cljs.core.cst$kw$sources;
var G__37893 = expr__37888;
return (pred__37887.cljs$core$IFn$_invoke$arity$2 ? pred__37887.cljs$core$IFn$_invoke$arity$2(G__37892,G__37893) : pred__37887.call(null,G__37892,G__37893));
})())){
return (new datascript.query.Context(self__.rels,G__37883,self__.rules,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37894 = cljs.core.cst$kw$rules;
var G__37895 = expr__37888;
return (pred__37887.cljs$core$IFn$_invoke$arity$2 ? pred__37887.cljs$core$IFn$_invoke$arity$2(G__37894,G__37895) : pred__37887.call(null,G__37894,G__37895));
})())){
return (new datascript.query.Context(self__.rels,self__.sources,G__37883,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37883),null));
}
}
}
});

datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rels,self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$sources,self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rules,self__.rules],null))], null),self__.__extmap));
});

datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37883){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__37883,self__.__extmap,self__.__hash));
});

datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.query.Context.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$rels,cljs.core.cst$sym$sources,cljs.core.cst$sym$rules], null);
});

datascript.query.Context.cljs$lang$type = true;

datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Context");
});

datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.query/Context");
});

datascript.query.__GT_Context = (function datascript$query$__GT_Context(rels,sources,rules){
return (new datascript.query.Context(rels,sources,rules,null,null,null));
});

datascript.query.map__GT_Context = (function datascript$query$map__GT_Context(G__37885){
return (new datascript.query.Context(cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(G__37885),cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(G__37885),cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(G__37885),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37885,cljs.core.cst$kw$rels,cljs.core.array_seq([cljs.core.cst$kw$sources,cljs.core.cst$kw$rules], 0)),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap,__hash){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__8276__auto__,k__8277__auto__){
var self__ = this;
var this__8276__auto____$1 = this;
return this__8276__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__8277__auto__,null);
});

datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__8278__auto__,k37898,else__8279__auto__){
var self__ = this;
var this__8278__auto____$1 = this;
var G__37900 = (((k37898 instanceof cljs.core.Keyword))?k37898.fqn:null);
switch (G__37900) {
case "attrs":
return self__.attrs;

break;
case "tuples":
return self__.tuples;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37898,else__8279__auto__);

}
});

datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__8290__auto__,writer__8291__auto__,opts__8292__auto__){
var self__ = this;
var this__8290__auto____$1 = this;
var pr_pair__8293__auto__ = ((function (this__8290__auto____$1){
return (function (keyval__8294__auto__){
return cljs.core.pr_sequential_writer(writer__8291__auto__,cljs.core.pr_writer,""," ","",opts__8292__auto__,keyval__8294__auto__);
});})(this__8290__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__8291__auto__,pr_pair__8293__auto__,"#datascript.query.Relation{",", ","}",opts__8292__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tuples,self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.query.Relation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37897){
var self__ = this;
var G__37897__$1 = this;
return (new cljs.core.RecordIter((0),G__37897__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attrs,cljs.core.cst$kw$tuples], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__8274__auto__){
var self__ = this;
var this__8274__auto____$1 = this;
return self__.__meta;
});

datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__8270__auto__){
var self__ = this;
var this__8270__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__8280__auto__){
var self__ = this;
var this__8280__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__8271__auto__){
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

datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__8272__auto__,other__8273__auto__){
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

datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__8285__auto__,k__8286__auto__){
var self__ = this;
var this__8285__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tuples,null,cljs.core.cst$kw$attrs,null], null), null),k__8286__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__8285__auto____$1),self__.__meta),k__8286__auto__);
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__8286__auto__)),null));
}
});

datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__8283__auto__,k__8284__auto__,G__37897){
var self__ = this;
var this__8283__auto____$1 = this;
var pred__37901 = cljs.core.keyword_identical_QMARK_;
var expr__37902 = k__8284__auto__;
if(cljs.core.truth_((function (){var G__37904 = cljs.core.cst$kw$attrs;
var G__37905 = expr__37902;
return (pred__37901.cljs$core$IFn$_invoke$arity$2 ? pred__37901.cljs$core$IFn$_invoke$arity$2(G__37904,G__37905) : pred__37901.call(null,G__37904,G__37905));
})())){
return (new datascript.query.Relation(G__37897,self__.tuples,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37906 = cljs.core.cst$kw$tuples;
var G__37907 = expr__37902;
return (pred__37901.cljs$core$IFn$_invoke$arity$2 ? pred__37901.cljs$core$IFn$_invoke$arity$2(G__37906,G__37907) : pred__37901.call(null,G__37906,G__37907));
})())){
return (new datascript.query.Relation(self__.attrs,G__37897,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__8284__auto__,G__37897),null));
}
}
});

datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__8288__auto__){
var self__ = this;
var this__8288__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$attrs,self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$tuples,self__.tuples],null))], null),self__.__extmap));
});

datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__8275__auto__,G__37897){
var self__ = this;
var this__8275__auto____$1 = this;
return (new datascript.query.Relation(self__.attrs,self__.tuples,G__37897,self__.__extmap,self__.__hash));
});

datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__8281__auto__,entry__8282__auto__){
var self__ = this;
var this__8281__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__8282__auto__)){
return this__8281__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__8282__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__8281__auto____$1,entry__8282__auto__);
}
});

datascript.query.Relation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$attrs,cljs.core.cst$sym$tuples], null);
});

datascript.query.Relation.cljs$lang$type = true;

datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__8312__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"datascript.query/Relation");
});

datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__8312__auto__,writer__8313__auto__){
return cljs.core._write(writer__8313__auto__,"datascript.query/Relation");
});

datascript.query.__GT_Relation = (function datascript$query$__GT_Relation(attrs,tuples){
return (new datascript.query.Relation(attrs,tuples,null,null,null));
});

datascript.query.map__GT_Relation = (function datascript$query$map__GT_Relation(G__37899){
return (new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(G__37899),cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(G__37899),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37899,cljs.core.cst$kw$attrs,cljs.core.array_seq([cljs.core.cst$kw$tuples], 0)),null));
});

datascript.query.intersect_keys = (function datascript$query$intersect_keys(attrs1,attrs2){
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs1)),cljs.core.set(cljs.core.keys(attrs2)));
});
datascript.query.concatv = (function datascript$query$concatv(var_args){
var args__8829__auto__ = [];
var len__8822__auto___37910 = arguments.length;
var i__8823__auto___37911 = (0);
while(true){
if((i__8823__auto___37911 < len__8822__auto___37910)){
args__8829__auto__.push((arguments[i__8823__auto___37911]));

var G__37912 = (i__8823__auto___37911 + (1));
i__8823__auto___37911 = G__37912;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.cat,xs);
});

datascript.query.concatv.cljs$lang$maxFixedArity = (0);

datascript.query.concatv.cljs$lang$applyTo = (function (seq37909){
return datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37909));
});

datascript.query.looks_like_QMARK_ = (function datascript$query$looks_like_QMARK_(pattern,form){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,pattern)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),pattern)){
return cljs.core.sequential_QMARK_(form);
} else {
if((pattern instanceof cljs.core.Symbol)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,pattern);
} else {
if(cljs.core.sequential_QMARK_(pattern)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.last(pattern),cljs.core.cst$sym$_STAR_)){
return (cljs.core.sequential_QMARK_(form)) && (cljs.core.every_QMARK_((function (p__37933){
var vec__37934 = p__37933;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37934,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37934,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(pattern),form)));
} else {
return (cljs.core.sequential_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(form),cljs.core.count(pattern))) && (cljs.core.every_QMARK_((function (p__37941){
var vec__37942 = p__37941;
var pattern_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37942,(0),null);
var form_el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37942,(1),null);
return (datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2 ? datascript.query.looks_like_QMARK_.cljs$core$IFn$_invoke$arity$2(pattern_el,form_el) : datascript.query.looks_like_QMARK_.call(null,pattern_el,form_el));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,form)));
}
} else {
return (pattern.cljs$core$IFn$_invoke$arity$1 ? pattern.cljs$core$IFn$_invoke$arity$1(form) : pattern.call(null,form));

}
}
}
}
});
datascript.query.source_QMARK_ = (function datascript$query$source_QMARK_(sym){
return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("$",cljs.core.first(cljs.core.name(sym))));
});
datascript.query.free_var_QMARK_ = (function datascript$query$free_var_QMARK_(sym){
return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("?",cljs.core.first(cljs.core.name(sym))));
});
datascript.query.attr_QMARK_ = (function datascript$query$attr_QMARK_(form){
return ((form instanceof cljs.core.Keyword)) || (typeof form === 'string');
});
datascript.query.lookup_ref_QMARK_ = (function datascript$query$lookup_ref_QMARK_(form){
return datascript.query.looks_like_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query.attr_QMARK_,cljs.core.cst$sym$_], null),form);
});
datascript.query.join_tuples = (function datascript$query$join_tuples(t1,idxs1,t2,idxs2){
var l1 = idxs1.length;
var l2 = idxs2.length;
var res = (function (){var G__37946 = (l1 + l2);
return (datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1(G__37946) : datascript.arrays.make_array.call(null,G__37946));
})();
var n__8622__auto___37947 = l1;
var i_37948 = (0);
while(true){
if((i_37948 < n__8622__auto___37947)){
(res[i_37948] = (t1[(idxs1[i_37948])]));

var G__37949 = (i_37948 + (1));
i_37948 = G__37949;
continue;
} else {
}
break;
}

var n__8622__auto___37950 = l2;
var i_37951 = (0);
while(true){
if((i_37951 < n__8622__auto___37950)){
(res[(l1 + i_37951)] = (t2[(idxs2[i_37951])]));

var G__37952 = (i_37951 + (1));
i_37951 = G__37952;
continue;
} else {
}
break;
}

return res;
});
datascript.query.sum_rel = (function datascript$query$sum_rel(a,b){
return (new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(a),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(a),cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(b)),null,null,null));
});
datascript.query.prod_rel = (function datascript$query$prod_rel(var_args){
var args37953 = [];
var len__8822__auto___37956 = arguments.length;
var i__8823__auto___37957 = (0);
while(true){
if((i__8823__auto___37957 < len__8822__auto___37956)){
args37953.push((arguments[i__8823__auto___37957]));

var G__37958 = (i__8823__auto___37957 + (1));
i__8823__auto___37957 = G__37958;
continue;
} else {
}
break;
}

var G__37955 = args37953.length;
switch (G__37955) {
case 0:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37953.length)].join('')));

}
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1((0)) : datascript.arrays.make_array.call(null,(0)))], null),null,null,null));
});

datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2 = (function (rel1,rel2){
var attrs1 = cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1));
var attrs2 = cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2));
var idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1),attrs1));
var idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2),attrs2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(attrs1,attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc,t1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attrs1,attrs2,idxs1,idxs2){
return (function (acc__$1,t2){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(t1,idxs1,t2,idxs2));
});})(attrs1,attrs2,idxs1,idxs2))
,acc,cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel2));
});})(attrs1,attrs2,idxs1,idxs2))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel1))),null,null,null));
});

datascript.query.prod_rel.cljs$lang$maxFixedArity = 2;

datascript.query._differ_QMARK_ = (function datascript$query$_differ_QMARK_(var_args){
var args__8829__auto__ = [];
var len__8822__auto___37961 = arguments.length;
var i__8823__auto___37962 = (0);
while(true){
if((i__8823__auto___37962 < len__8822__auto___37961)){
args__8829__auto__.push((arguments[i__8823__auto___37962]));

var G__37963 = (i__8823__auto___37962 + (1));
i__8823__auto___37962 = G__37963;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var l = cljs.core.count(xs);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2((l / (2)),xs),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((l / (2)),xs));
});

datascript.query._differ_QMARK_.cljs$lang$maxFixedArity = (0);

datascript.query._differ_QMARK_.cljs$lang$applyTo = (function (seq37960){
return datascript.query._differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37960));
});

datascript.query._get_else = (function datascript$query$_get_else(db,e,a,else_val){
if((else_val == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("get-else: nil default value is not supported")].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where], null));
} else {
}

var temp__6736__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if(cljs.core.truth_(temp__6736__auto__)){
var datom = temp__6736__auto__;
return cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(datom);
} else {
return else_val;
}
});
datascript.query._get_some = (function datascript$query$_get_some(var_args){
var args__8829__auto__ = [];
var len__8822__auto___37967 = arguments.length;
var i__8823__auto___37968 = (0);
while(true){
if((i__8823__auto___37968 < len__8822__auto___37967)){
args__8829__auto__.push((arguments[i__8823__auto___37968]));

var G__37969 = (i__8823__auto___37968 + (1));
i__8823__auto___37968 = G__37969;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((2) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((2)),(0),null)):null);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8830__auto__);
});

datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic = (function (db,e,as){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,a){
var temp__6738__auto__ = cljs.core.first(datascript.db._search(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if(cljs.core.truth_(temp__6738__auto__)){
var datom = temp__6738__auto__;
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a.cljs$core$IFn$_invoke$arity$1(datom),cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(datom)], null));
} else {
return null;
}
}),null,as);
});

datascript.query._get_some.cljs$lang$maxFixedArity = (2);

datascript.query._get_some.cljs$lang$applyTo = (function (seq37964){
var G__37965 = cljs.core.first(seq37964);
var seq37964__$1 = cljs.core.next(seq37964);
var G__37966 = cljs.core.first(seq37964__$1);
var seq37964__$2 = cljs.core.next(seq37964__$1);
return datascript.query._get_some.cljs$core$IFn$_invoke$arity$variadic(G__37965,G__37966,seq37964__$2);
});

datascript.query._missing_QMARK_ = (function datascript$query$_missing_QMARK_(db,e,a){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.entity(db,e),a) == null);
});
datascript.query.and_fn = (function datascript$query$and_fn(var_args){
var args__8829__auto__ = [];
var len__8822__auto___37971 = arguments.length;
var i__8823__auto___37972 = (0);
while(true){
if((i__8823__auto___37972 < len__8822__auto___37971)){
args__8829__auto__.push((arguments[i__8823__auto___37972]));

var G__37973 = (i__8823__auto___37972 + (1));
i__8823__auto___37972 = G__37973;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return b;
} else {
return cljs.core.reduced(b);
}
}),true,args);
});

datascript.query.and_fn.cljs$lang$maxFixedArity = (0);

datascript.query.and_fn.cljs$lang$applyTo = (function (seq37970){
return datascript.query.and_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37970));
});

datascript.query.or_fn = (function datascript$query$or_fn(var_args){
var args__8829__auto__ = [];
var len__8822__auto___37975 = arguments.length;
var i__8823__auto___37976 = (0);
while(true){
if((i__8823__auto___37976 < len__8822__auto___37975)){
args__8829__auto__.push((arguments[i__8823__auto___37976]));

var G__37977 = (i__8823__auto___37976 + (1));
i__8823__auto___37976 = G__37977;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,b){
if(cljs.core.truth_(b)){
return cljs.core.reduced(b);
} else {
return b;
}
}),null,args);
});

datascript.query.or_fn.cljs$lang$maxFixedArity = (0);

datascript.query.or_fn.cljs$lang$applyTo = (function (seq37974){
return datascript.query.or_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37974));
});

datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$true_QMARK_,cljs.core.cst$sym$and,cljs.core.cst$sym$odd_QMARK_,cljs.core.cst$sym$get_DASH_else,cljs.core.cst$sym$_GT__EQ_,cljs.core.cst$sym$print_DASH_str,cljs.core.cst$sym$_GT_,cljs.core.cst$sym$count,cljs.core.cst$sym$get_DASH_some,cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$inc,cljs.core.cst$sym$_SLASH_,cljs.core.cst$sym$quot,cljs.core.cst$sym$false_QMARK_,cljs.core.cst$sym$not,cljs.core.cst$sym$identity,cljs.core.cst$sym$_DASH_differ_QMARK_,cljs.core.cst$sym$re_DASH_seq,cljs.core.cst$sym$_LT__EQ_,cljs.core.cst$sym$_EQ_,cljs.core.cst$sym$min,cljs.core.cst$sym$_PLUS_,cljs.core.cst$sym$name,cljs.core.cst$sym$missing_QMARK_,cljs.core.cst$sym$ground,cljs.core.cst$sym$rand_DASH_int,cljs.core.cst$sym$complement,cljs.core.cst$sym$_EQ__EQ_,cljs.core.cst$sym$hash_DASH_map,cljs.core.cst$sym$compare,cljs.core.cst$sym$range,cljs.core.cst$sym$max,cljs.core.cst$sym$empty_QMARK_,cljs.core.cst$sym$_STAR_,cljs.core.cst$sym$pr_DASH_str,cljs.core.cst$sym$println_DASH_str,cljs.core.cst$sym$meta,cljs.core.cst$sym$zero_QMARK_,cljs.core.cst$sym$_BANG__EQ_,cljs.core.cst$sym$prn_DASH_str,cljs.core.cst$sym$dec,cljs.core.cst$sym$vector,cljs.core.cst$sym$not_EQ_,cljs.core.cst$sym$str,cljs.core.cst$sym$_LT_,cljs.core.cst$sym$_DASH_,cljs.core.cst$sym$some_QMARK_,cljs.core.cst$sym$pos_QMARK_,cljs.core.cst$sym$rand,cljs.core.cst$sym$re_DASH_matches,cljs.core.cst$sym$list,cljs.core.cst$sym$subs,cljs.core.cst$sym$mod,cljs.core.cst$sym$array_DASH_map,cljs.core.cst$sym$rem,cljs.core.cst$sym$even_QMARK_,cljs.core.cst$sym$type,cljs.core.cst$sym$neg_QMARK_,cljs.core.cst$sym$not_DASH_empty,cljs.core.cst$sym$or,cljs.core.cst$sym$identical_QMARK_,cljs.core.cst$sym$set,cljs.core.cst$sym$re_DASH_find],[cljs.core.true_QMARK_,datascript.query.and_fn,cljs.core.odd_QMARK_,datascript.query._get_else,cljs.core._GT__EQ_,cljs.core.print_str,cljs.core._GT_,cljs.core.count,datascript.query._get_some,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.not,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core.re_seq,cljs.core._LT__EQ_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core.name,datascript.query._missing_QMARK_,cljs.core.identity,cljs.core.rand_int,cljs.core.complement,cljs.core._EQ__EQ_,cljs.core.hash_map,cljs.core.compare,cljs.core.range,cljs.core.max,cljs.core.empty,cljs.core._STAR_,cljs.core.pr_str,cljs.core.println_str,cljs.core.meta,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.prn_str,cljs.core.dec,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core._,cljs.core.some_QMARK_,cljs.core.pos_QMARK_,cljs.core.rand,cljs.core.re_matches,cljs.core.list,cljs.core.subs,cljs.core.mod,cljs.core.array_map,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.type,cljs.core.neg_QMARK_,cljs.core.not_empty,datascript.query.or_fn,cljs.core.identical_QMARK_,cljs.core.set,cljs.core.re_find]);
datascript.query.built_in_aggregates = (function (){var sum = (function datascript$query$sum(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),coll);
});
var avg = (function datascript$query$avg(coll){
return (sum(coll) / cljs.core.count(coll));
});
var median = (function datascript$query$median(coll){
var terms = cljs.core.sort.cljs$core$IFn$_invoke$arity$1(coll);
var size = cljs.core.count(coll);
var med = (size >> (1));
var G__37995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,med);
if(cljs.core.even_QMARK_(size)){
return ((G__37995 + cljs.core.nth.cljs$core$IFn$_invoke$arity$2(terms,(med - (1)))) / (2));
} else {
return G__37995;
}
});
var variance = (function datascript$query$variance(coll){
var mean = avg(coll);
var sum__$1 = sum((function (){var iter__8463__auto__ = ((function (mean){
return (function datascript$query$variance_$_iter__38002(s__38003){
return (new cljs.core.LazySeq(null,((function (mean){
return (function (){
var s__38003__$1 = s__38003;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__38003__$1);
if(temp__6738__auto__){
var s__38003__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38003__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__38003__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__38005 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__38004 = (0);
while(true){
if((i__38004 < size__8462__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__38004);
var delta = (x - mean);
cljs.core.chunk_append(b__38005,(delta * delta));

var G__38010 = (i__38004 + (1));
i__38004 = G__38010;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38005),datascript$query$variance_$_iter__38002(cljs.core.chunk_rest(s__38003__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38005),null);
}
} else {
var x = cljs.core.first(s__38003__$2);
var delta = (x - mean);
return cljs.core.cons((delta * delta),datascript$query$variance_$_iter__38002(cljs.core.rest(s__38003__$2)));
}
} else {
return null;
}
break;
}
});})(mean))
,null,null));
});})(mean))
;
return iter__8463__auto__(coll);
})());
return (sum__$1 / cljs.core.count(coll));
});
var stddev = (function datascript$query$stddev(coll){
var G__38009 = variance(coll);
return Math.sqrt(G__38009);
});
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$sym$variance,cljs.core.cst$sym$count,cljs.core.cst$sym$median,cljs.core.cst$sym$sum,cljs.core.cst$sym$min,cljs.core.cst$sym$max,cljs.core.cst$sym$count_DASH_distinct,cljs.core.cst$sym$distinct,cljs.core.cst$sym$avg,cljs.core.cst$sym$stddev,cljs.core.cst$sym$rand,cljs.core.cst$sym$sample],[variance,cljs.core.count,median,sum,(function() {
var G__38011 = null;
var G__38011__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) < (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__38011__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.last(acc)) < (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__38011 = function(n,coll){
switch(arguments.length){
case 1:
return G__38011__1.call(this,n);
case 2:
return G__38011__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__38011.cljs$core$IFn$_invoke$arity$1 = G__38011__1;
G__38011.cljs$core$IFn$_invoke$arity$2 = G__38011__2;
return G__38011;
})()
,(function() {
var G__38012 = null;
var G__38012__1 = (function (coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.compare(x,acc) > (0))){
return x;
} else {
return acc;
}
}),cljs.core.first(coll),cljs.core.next(coll));
});
var G__38012__2 = (function (n,coll){
return cljs.core.vec(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,x){
if((cljs.core.count(acc) < n)){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,x));
} else {
if((cljs.core.compare(x,cljs.core.first(acc)) > (0))){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2(cljs.core.compare,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.next(acc),x));
} else {
return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__38012 = function(n,coll){
switch(arguments.length){
case 1:
return G__38012__1.call(this,n);
case 2:
return G__38012__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__38012.cljs$core$IFn$_invoke$arity$1 = G__38012__1;
G__38012.cljs$core$IFn$_invoke$arity$2 = G__38012__2;
return G__38012;
})()
,(function (coll){
return cljs.core.count(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(coll));
}),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.distinct),avg,stddev,(function() {
var G__38013 = null;
var G__38013__1 = (function (coll){
return cljs.core.rand_nth(coll);
});
var G__38013__2 = (function (n,coll){
return cljs.core.vec(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(n,(function (){
return cljs.core.rand_nth(coll);
})));
});
G__38013 = function(n,coll){
switch(arguments.length){
case 1:
return G__38013__1.call(this,n);
case 2:
return G__38013__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__38013.cljs$core$IFn$_invoke$arity$1 = G__38013__1;
G__38013.cljs$core$IFn$_invoke$arity$2 = G__38013__2;
return G__38013;
})()
,(function (n,coll){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.shuffle(coll)));
})]);
})();
datascript.query.parse_rules = (function datascript$query$parse_rules(rules){
var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string(rules):rules);
return cljs.core.group_by(cljs.core.ffirst,rules__$1);
});
datascript.query.bindable_to_seq_QMARK_ = (function datascript$query$bindable_to_seq_QMARK_(x){
var or__7601__auto__ = (datascript.db.seqable_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.db.seqable_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : datascript.db.seqable_QMARK_.call(null,x));
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return (datascript.arrays.array_QMARK_.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.array_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : datascript.arrays.array_QMARK_.call(null,x));
}
});
datascript.query.empty_rel = (function datascript$query$empty_rel(binding){
var vars = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,datascript.parser.collect_vars_distinct(binding));
return (new datascript.query.Relation(cljs.core.zipmap(vars,cljs.core.range.cljs$core$IFn$_invoke$arity$0()),cljs.core.PersistentVector.EMPTY,null,null,null));
});

/**
 * @interface
 */
datascript.query.IBinding = function(){};

datascript.query.in__GT_rel = (function datascript$query$in__GT_rel(binding,value){
if((!((binding == null))) && (!((binding.datascript$query$IBinding$in__GT_rel$arity$2 == null)))){
return binding.datascript$query$IBinding$in__GT_rel$arity$2(binding,value);
} else {
var x__8319__auto__ = (((binding == null))?null:binding);
var m__8320__auto__ = (datascript.query.in__GT_rel[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$2(binding,value) : m__8320__auto__.call(null,binding,value));
} else {
var m__8320__auto____$1 = (datascript.query.in__GT_rel["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2(binding,value) : m__8320__auto____$1.call(null,binding,value));
} else {
throw cljs.core.missing_protocol("IBinding.in->rel",binding);
}
}
}
});

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindIgnore.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (_,___$1){
var ___$2 = this;
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$0();
});

datascript.parser.BindScalar.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindScalar.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,value){
var binding__$1 = this;
return (new datascript.query.Relation(cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$variable,cljs.core.cst$kw$symbol], null)),(0)]),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null))], null),null,null,null));
});

datascript.parser.BindColl.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindColl.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if(cljs.core.not(datascript.query.bindable_to_seq_QMARK_(coll))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot bind value "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([coll], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to collection "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([datascript.parser.source(binding__$1)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_binding,cljs.core.cst$kw$value,coll,cljs.core.cst$kw$binding,datascript.parser.source(binding__$1)], null));
} else {
if(cljs.core.empty_QMARK_(coll)){
return datascript.query.empty_rel(binding__$1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (binding__$1){
return (function (p1__38014_SHARP_){
return datascript.query.in__GT_rel(cljs.core.cst$kw$binding.cljs$core$IFn$_invoke$arity$1(binding__$1),p1__38014_SHARP_);
});})(binding__$1))
,coll));

}
}
});

datascript.parser.BindTuple.prototype.datascript$query$IBinding$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.BindTuple.prototype.datascript$query$IBinding$in__GT_rel$arity$2 = (function (binding,coll){
var binding__$1 = this;
if(cljs.core.not(datascript.query.bindable_to_seq_QMARK_(coll))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot bind value "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([coll], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to tuple "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([datascript.parser.source(binding__$1)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_binding,cljs.core.cst$kw$value,coll,cljs.core.cst$kw$binding,datascript.parser.source(binding__$1)], null));
} else {
if((cljs.core.count(coll) < cljs.core.count(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(binding__$1)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not enough elements in a collection "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([coll], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" to bind tuple "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([datascript.parser.source(binding__$1)], 0)))].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_binding,cljs.core.cst$kw$value,coll,cljs.core.cst$kw$binding,datascript.parser.source(binding__$1)], null));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (binding__$1){
return (function (p1__38015_SHARP_,p2__38016_SHARP_){
return datascript.query.in__GT_rel(p1__38015_SHARP_,p2__38016_SHARP_);
});})(binding__$1))
,cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(binding__$1),coll));

}
}
});
datascript.query.resolve_in = (function datascript$query$resolve_in(context,p__38017){
var vec__38021 = p__38017;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38021,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38021,(1),null);
if(((binding instanceof datascript.parser.BindScalar)) && ((cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.SrcVar))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sources], null),cljs.core.assoc,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(binding,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$variable,cljs.core.cst$kw$symbol], null)),value);
} else {
if(((binding instanceof datascript.parser.BindScalar)) && ((cljs.core.cst$kw$variable.cljs$core$IFn$_invoke$arity$1(binding) instanceof datascript.parser.RulesVar))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$rules,datascript.query.parse_rules(value));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),cljs.core.conj,datascript.query.in__GT_rel(binding,value));

}
}
});
datascript.query.resolve_ins = (function datascript$query$resolve_ins(context,bindings,values){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_in,context,cljs.core.zipmap(bindings,values));
});
datascript.query._STAR_lookup_attrs_STAR_ = null;
datascript.query._STAR_lookup_source_STAR_ = null;
datascript.query.getter_fn = (function datascript$query$getter_fn(attrs,attr){
var idx = (attrs.cljs$core$IFn$_invoke$arity$1 ? attrs.cljs$core$IFn$_invoke$arity$1(attr) : attrs.call(null,attr));
if((!((datascript.query._STAR_lookup_attrs_STAR_ == null))) && (cljs.core.contains_QMARK_(datascript.query._STAR_lookup_attrs_STAR_,attr))){
return ((function (idx){
return (function (tuple){
var eid = (tuple[idx]);
if(typeof eid === 'number'){
return eid;
} else {
return datascript.db.entid(datascript.query._STAR_lookup_source_STAR_,eid);
}
});
;})(idx))
} else {
return ((function (idx){
return (function (tuple){
return (tuple[idx]);
});
;})(idx))
}
});
datascript.query.tuple_key_fn = (function datascript$query$tuple_key_fn(getters){
if((cljs.core.count(getters) === (1))){
return cljs.core.first(getters);
} else {
var getters__$1 = cljs.core.to_array(getters);
return ((function (getters__$1){
return (function (tuple){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(getters__$1.map(((function (getters__$1){
return (function (p1__38024_SHARP_){
return (p1__38024_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38024_SHARP_.cljs$core$IFn$_invoke$arity$1(tuple) : p1__38024_SHARP_.call(null,tuple));
});})(getters__$1))
));
});
;})(getters__$1))
}
});
datascript.query.hash_attrs = (function datascript$query$hash_attrs(key_fn,tuples){
var tuples__$1 = tuples;
var hash_table = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__6736__auto__ = cljs.core.first(tuples__$1);
if(cljs.core.truth_(temp__6736__auto__)){
var tuple = temp__6736__auto__;
var key = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(tuple) : key_fn.call(null,tuple));
var G__38026 = cljs.core.next(tuples__$1);
var G__38027 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__38026;
hash_table = G__38027;
continue;
} else {
return cljs.core.persistent_BANG_(hash_table);
}
break;
}
});
datascript.query.hash_join = (function datascript$query$hash_join(rel1,rel2){
var tuples1 = cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel1);
var tuples2 = cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel2);
var attrs1 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1);
var attrs2 = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2);
var common_attrs = cljs.core.vec(datascript.query.intersect_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel1),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel2)));
var common_gtrs1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tuples1,tuples2,attrs1,attrs2,common_attrs){
return (function (p1__38028_SHARP_){
return datascript.query.getter_fn(attrs1,p1__38028_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs))
,common_attrs);
var common_gtrs2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1){
return (function (p1__38029_SHARP_){
return datascript.query.getter_fn(attrs2,p1__38029_SHARP_);
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1))
,common_attrs);
var keep_attrs1 = cljs.core.keys(attrs1);
var keep_attrs2 = cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(attrs2)),cljs.core.set(cljs.core.keys(attrs1))));
var keep_idxs1 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs1,keep_attrs1));
var keep_idxs2 = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(attrs2,keep_attrs2));
var key_fn1 = datascript.query.tuple_key_fn(common_gtrs1);
var hash = datascript.query.hash_attrs(key_fn1,tuples1);
var key_fn2 = datascript.query.tuple_key_fn(common_gtrs2);
var new_tuples = cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc,tuple2){
var key = (key_fn2.cljs$core$IFn$_invoke$arity$1 ? key_fn2.cljs$core$IFn$_invoke$arity$1(tuple2) : key_fn2.call(null,tuple2));
var temp__6736__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(hash,key);
if(cljs.core.truth_(temp__6736__auto__)){
var tuples1__$1 = temp__6736__auto__;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (tuples1__$1,temp__6736__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2){
return (function (acc__$1,tuple1){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(acc__$1,datascript.query.join_tuples(tuple1,keep_idxs1,tuple2,keep_idxs2));
});})(tuples1__$1,temp__6736__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,acc,tuples1__$1);
} else {
return acc;
}
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_gtrs1,common_gtrs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,key_fn1,hash,key_fn2))
,cljs.core.transient$(cljs.core.PersistentVector.EMPTY),tuples2));
return (new datascript.query.Relation(cljs.core.zipmap(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keep_attrs1,keep_attrs2),cljs.core.range.cljs$core$IFn$_invoke$arity$0()),new_tuples,null,null,null));
});
datascript.query.lookup_pattern_db = (function datascript$query$lookup_pattern_db(db,pattern){
var search_pattern = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__38030_SHARP_){
if((p1__38030_SHARP_ instanceof cljs.core.Symbol)){
return null;
} else {
return p1__38030_SHARP_;
}
}),pattern);
var datoms = datascript.db._search(db,search_pattern);
var attr__GT_prop = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (search_pattern,datoms){
return (function (p__38035){
var vec__38036 = p__38035;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38036,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38036,(1),null);
return datascript.query.free_var_QMARK_(s);
});})(search_pattern,datoms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));
return (new datascript.query.Relation(attr__GT_prop,datoms,null,null,null));
});
datascript.query.matches_pattern_QMARK_ = (function datascript$query$matches_pattern_QMARK_(pattern,tuple){
var tuple__$1 = tuple;
var pattern__$1 = pattern;
while(true){
if(cljs.core.truth_((function (){var and__7589__auto__ = tuple__$1;
if(cljs.core.truth_(and__7589__auto__)){
return pattern__$1;
} else {
return and__7589__auto__;
}
})())){
var t = cljs.core.first(tuple__$1);
var p = cljs.core.first(pattern__$1);
if(((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,p))){
var G__38039 = cljs.core.next(tuple__$1);
var G__38040 = cljs.core.next(pattern__$1);
tuple__$1 = G__38039;
pattern__$1 = G__38040;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function datascript$query$lookup_pattern_coll(coll,pattern){
var data = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38041_SHARP_){
return datascript.query.matches_pattern_QMARK_(pattern,p1__38041_SHARP_);
}),coll);
var attr__GT_idx = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (data){
return (function (p__38046){
var vec__38047 = p__38046;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38047,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38047,(1),null);
return datascript.query.free_var_QMARK_(s);
});})(data))
,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,pattern,cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
return (new datascript.query.Relation(attr__GT_idx,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,data),null,null,null));
});
datascript.query.normalize_pattern_clause = (function datascript$query$normalize_pattern_clause(clause){
if(cljs.core.truth_(datascript.query.source_QMARK_(cljs.core.first(clause)))){
return clause;
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$], null),clause);
}
});
datascript.query.lookup_pattern = (function datascript$query$lookup_pattern(source,pattern){
if(((!((source == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$ISearch$)))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.ISearch,source))){
return datascript.query.lookup_pattern_db(source,pattern);
} else {
return datascript.query.lookup_pattern_coll(source,pattern);

}
});
datascript.query.collapse_rels = (function datascript$query$collapse_rels(rels,new_rel){
var rels__$1 = rels;
var new_rel__$1 = new_rel;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var temp__6736__auto__ = cljs.core.first(rels__$1);
if(cljs.core.truth_(temp__6736__auto__)){
var rel = temp__6736__auto__;
if(cljs.core.truth_(cljs.core.not_empty(datascript.query.intersect_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(new_rel__$1),cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel))))){
var G__38052 = cljs.core.next(rels__$1);
var G__38053 = datascript.query.hash_join(rel,new_rel__$1);
var G__38054 = acc;
rels__$1 = G__38052;
new_rel__$1 = G__38053;
acc = G__38054;
continue;
} else {
var G__38055 = cljs.core.next(rels__$1);
var G__38056 = new_rel__$1;
var G__38057 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,rel);
rels__$1 = G__38055;
new_rel__$1 = G__38056;
acc = G__38057;
continue;
}
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_rel__$1);
}
break;
}
});
datascript.query.rel_with_attr = (function datascript$query$rel_with_attr(context,sym){
return cljs.core.some((function (p1__38058_SHARP_){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(p1__38058_SHARP_),sym)){
return p1__38058_SHARP_;
} else {
return null;
}
}),cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context));
});
datascript.query.context_resolve_val = (function datascript$query$context_resolve_val(context,sym){
var temp__6738__auto__ = datascript.query.rel_with_attr(context,sym);
if(cljs.core.truth_(temp__6738__auto__)){
var rel = temp__6738__auto__;
var temp__6738__auto____$1 = cljs.core.first(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel));
if(cljs.core.truth_(temp__6738__auto____$1)){
var tuple = temp__6738__auto____$1;
return (tuple[cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
} else {
return null;
}
} else {
return null;
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function datascript$query$rel_contains_attrs_QMARK_(rel,attrs){
return !(cljs.core.empty_QMARK_(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(attrs),cljs.core.set(cljs.core.keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel))))));
});
datascript.query.rel_prod_by_attrs = (function datascript$query$rel_prod_by_attrs(context,attrs){
var rels = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__38059_SHARP_){
return datascript.query.rel_contains_attrs_QMARK_(p1__38059_SHARP_,attrs);
}),cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context));
var production = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.prod_rel,rels);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),((function (rels,production){
return (function (p1__38060_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(rels),p1__38060_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function datascript$query$_call_fn(context,rel,f,args){
var sources = cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context);
var attrs = cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel);
var len = cljs.core.count(args);
var static_args = (datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1(len) : datascript.arrays.make_array.call(null,len));
var tuples_args = (datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1(len) : datascript.arrays.make_array.call(null,len));
var n__8622__auto___38061 = len;
var i_38062 = (0);
while(true){
if((i_38062 < n__8622__auto___38061)){
var arg_38063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(args,i_38062);
if((arg_38063 instanceof cljs.core.Symbol)){
var temp__6736__auto___38064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(sources,arg_38063);
if(cljs.core.truth_(temp__6736__auto___38064)){
var source_38065 = temp__6736__auto___38064;
(static_args[i_38062] = source_38065);
} else {
(tuples_args[i_38062] = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,arg_38063));
}
} else {
(static_args[i_38062] = arg_38063);
}

var G__38066 = (i_38062 + (1));
i_38062 = G__38066;
continue;
} else {
}
break;
}

return ((function (sources,attrs,len,static_args,tuples_args){
return (function (tuple){
var n__8622__auto___38067 = len;
var i_38068 = (0);
while(true){
if((i_38068 < n__8622__auto___38067)){
var temp__6738__auto___38069 = (tuples_args[i_38068]);
if(cljs.core.truth_(temp__6738__auto___38069)){
var tuple_idx_38070 = temp__6738__auto___38069;
var v_38071 = (tuple[tuple_idx_38070]);
(static_args[i_38068] = v_38071);
} else {
}

var G__38072 = (i_38068 + (1));
i_38068 = G__38072;
continue;
} else {
}
break;
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,static_args);
});
;})(sources,attrs,len,static_args,tuples_args))
});
datascript.query.resolve_sym = (function datascript$query$resolve_sym(sym){
return null;
});
datascript.query.filter_by_pred = (function datascript$query$filter_by_pred(context,clause){
var vec__38083 = clause;
var vec__38086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38083,(0),null);
var seq__38087 = cljs.core.seq(vec__38086);
var first__38088 = cljs.core.first(seq__38087);
var seq__38087__$1 = cljs.core.next(seq__38087);
var f = first__38088;
var args = seq__38087__$1;
var pred = (function (){var or__7601__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
var or__7601__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__7601__auto____$2)){
return or__7601__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown predicate '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clause)].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where,cljs.core.cst$kw$form,clause,cljs.core.cst$kw$var,f], null));
} else {
return null;
}
}
}
}
})();
var vec__38089 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38089,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38089,(1),null);
var new_rel = (cljs.core.truth_(pred)?(function (){var tuple_pred = datascript.query._call_fn(context__$1,production,pred,args);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tuples], null),((function (tuple_pred,vec__38083,vec__38086,seq__38087,first__38088,seq__38087__$1,f,args,pred,vec__38089,context__$1,production){
return (function (p1__38073_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(tuple_pred,p1__38073_SHARP_);
});})(tuple_pred,vec__38083,vec__38086,seq__38087,first__38088,seq__38087__$1,f,args,pred,vec__38089,context__$1,production))
);
})():cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,cljs.core.cst$kw$tuples,cljs.core.PersistentVector.EMPTY));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function datascript$query$bind_by_fn(context,clause){
var vec__38107 = clause;
var vec__38110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38107,(0),null);
var seq__38111 = cljs.core.seq(vec__38110);
var first__38112 = cljs.core.first(seq__38111);
var seq__38111__$1 = cljs.core.next(seq__38111);
var f = first__38112;
var args = seq__38111__$1;
var out = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38107,(1),null);
var binding = datascript.parser.parse_binding(out);
var fun = (function (){var or__7601__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_ins,f);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = datascript.query.context_resolve_val(context,f);
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
var or__7601__auto____$2 = datascript.query.resolve_sym(f);
if(cljs.core.truth_(or__7601__auto____$2)){
return or__7601__auto____$2;
} else {
if((datascript.query.rel_with_attr(context,f) == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown function '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clause)].join(''),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$error,cljs.core.cst$kw$query_SLASH_where,cljs.core.cst$kw$form,clause,cljs.core.cst$kw$var,f], null));
} else {
return null;
}
}
}
}
})();
var vec__38113 = datascript.query.rel_prod_by_attrs(context,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,args));
var context__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38113,(0),null);
var production = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38113,(1),null);
var new_rel = (cljs.core.truth_(fun)?(function (){var tuple_fn = datascript.query._call_fn(context__$1,production,fun,args);
var rels = (function (){var iter__8463__auto__ = ((function (tuple_fn,vec__38107,vec__38110,seq__38111,first__38112,seq__38111__$1,f,args,out,binding,fun,vec__38113,context__$1,production){
return (function datascript$query$bind_by_fn_$_iter__38116(s__38117){
return (new cljs.core.LazySeq(null,((function (tuple_fn,vec__38107,vec__38110,seq__38111,first__38112,seq__38111__$1,f,args,out,binding,fun,vec__38113,context__$1,production){
return (function (){
var s__38117__$1 = s__38117;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__38117__$1);
if(temp__6738__auto__){
var s__38117__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38117__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__38117__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__38119 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__38118 = (0);
while(true){
if((i__38118 < size__8462__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__38118);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if(!((val == null))){
cljs.core.chunk_append(b__38119,datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)));

var G__38122 = (i__38118 + (1));
i__38118 = G__38122;
continue;
} else {
var G__38123 = (i__38118 + (1));
i__38118 = G__38123;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38119),datascript$query$bind_by_fn_$_iter__38116(cljs.core.chunk_rest(s__38117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38119),null);
}
} else {
var tuple = cljs.core.first(s__38117__$2);
var val = (tuple_fn.cljs$core$IFn$_invoke$arity$1 ? tuple_fn.cljs$core$IFn$_invoke$arity$1(tuple) : tuple_fn.call(null,tuple));
if(!((val == null))){
return cljs.core.cons(datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2((new datascript.query.Relation(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuple], null),null,null,null)),datascript.query.in__GT_rel(binding,val)),datascript$query$bind_by_fn_$_iter__38116(cljs.core.rest(s__38117__$2)));
} else {
var G__38124 = cljs.core.rest(s__38117__$2);
s__38117__$1 = G__38124;
continue;
}
}
} else {
return null;
}
break;
}
});})(tuple_fn,vec__38107,vec__38110,seq__38111,first__38112,seq__38111__$1,f,args,out,binding,fun,vec__38113,context__$1,production))
,null,null));
});})(tuple_fn,vec__38107,vec__38110,seq__38111,first__38112,seq__38111__$1,f,args,out,binding,fun,vec__38113,context__$1,production))
;
return iter__8463__auto__(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(production));
})();
if(cljs.core.empty_QMARK_(rels)){
return datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(production,datascript.query.empty_rel(binding));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(datascript.query.sum_rel,rels);
}
})():datascript.query.prod_rel.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(production,cljs.core.cst$kw$tuples,cljs.core.PersistentVector.EMPTY),datascript.query.empty_rel(binding)));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),datascript.query.collapse_rels,new_rel);
});
datascript.query.rule_QMARK_ = (function datascript$query$rule_QMARK_(context,clause){
return (cljs.core.sequential_QMARK_(clause)) && (cljs.core.contains_QMARK_(cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(context),(cljs.core.truth_(datascript.query.source_QMARK_(cljs.core.first(clause)))?cljs.core.second(clause):cljs.core.first(clause))));
});
datascript.query.rule_seqid = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
datascript.query.expand_rule = (function datascript$query$expand_rule(clause,context,used_args){
var vec__38159 = clause;
var seq__38160 = cljs.core.seq(vec__38159);
var first__38161 = cljs.core.first(seq__38160);
var seq__38160__$1 = cljs.core.next(seq__38160);
var rule = first__38161;
var call_args = seq__38160__$1;
var seqid = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.query.rule_seqid,cljs.core.inc);
var branches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$rules.cljs$core$IFn$_invoke$arity$1(context),rule);
var iter__8463__auto__ = ((function (vec__38159,seq__38160,first__38161,seq__38160__$1,rule,call_args,seqid,branches){
return (function datascript$query$expand_rule_$_iter__38162(s__38163){
return (new cljs.core.LazySeq(null,((function (vec__38159,seq__38160,first__38161,seq__38160__$1,rule,call_args,seqid,branches){
return (function (){
var s__38163__$1 = s__38163;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__38163__$1);
if(temp__6738__auto__){
var s__38163__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38163__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__38163__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__38165 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__38164 = (0);
while(true){
if((i__38164 < size__8462__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__38164);
var vec__38180 = branch;
var seq__38181 = cljs.core.seq(vec__38180);
var first__38182 = cljs.core.first(seq__38181);
var seq__38181__$1 = cljs.core.next(seq__38181);
var vec__38183 = first__38182;
var seq__38184 = cljs.core.seq(vec__38183);
var first__38185 = cljs.core.first(seq__38184);
var seq__38184__$1 = cljs.core.next(seq__38184);
var _ = first__38185;
var rule_args = seq__38184__$1;
var clauses = seq__38181__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
cljs.core.chunk_append(b__38165,clojure.walk.postwalk(((function (i__38164,vec__38180,seq__38181,first__38182,seq__38181__$1,vec__38183,seq__38184,first__38185,seq__38184__$1,_,rule_args,clauses,replacements,branch,c__8461__auto__,size__8462__auto__,b__38165,s__38163__$2,temp__6738__auto__,vec__38159,seq__38160,first__38161,seq__38160__$1,rule,call_args,seqid,branches){
return (function (p1__38125_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_(p1__38125_SHARP_))){
var or__7601__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__38125_SHARP_) : replacements.call(null,p1__38125_SHARP_));
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__38125_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__auto__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
}
} else {
return p1__38125_SHARP_;
}
});})(i__38164,vec__38180,seq__38181,first__38182,seq__38181__$1,vec__38183,seq__38184,first__38185,seq__38184__$1,_,rule_args,clauses,replacements,branch,c__8461__auto__,size__8462__auto__,b__38165,s__38163__$2,temp__6738__auto__,vec__38159,seq__38160,first__38161,seq__38160__$1,rule,call_args,seqid,branches))
,clauses));

var G__38192 = (i__38164 + (1));
i__38164 = G__38192;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38165),datascript$query$expand_rule_$_iter__38162(cljs.core.chunk_rest(s__38163__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38165),null);
}
} else {
var branch = cljs.core.first(s__38163__$2);
var vec__38186 = branch;
var seq__38187 = cljs.core.seq(vec__38186);
var first__38188 = cljs.core.first(seq__38187);
var seq__38187__$1 = cljs.core.next(seq__38187);
var vec__38189 = first__38188;
var seq__38190 = cljs.core.seq(vec__38189);
var first__38191 = cljs.core.first(seq__38190);
var seq__38190__$1 = cljs.core.next(seq__38190);
var _ = first__38191;
var rule_args = seq__38190__$1;
var clauses = seq__38187__$1;
var replacements = cljs.core.zipmap(rule_args,call_args);
return cljs.core.cons(clojure.walk.postwalk(((function (vec__38186,seq__38187,first__38188,seq__38187__$1,vec__38189,seq__38190,first__38191,seq__38190__$1,_,rule_args,clauses,replacements,branch,s__38163__$2,temp__6738__auto__,vec__38159,seq__38160,first__38161,seq__38160__$1,rule,call_args,seqid,branches){
return (function (p1__38125_SHARP_){
if(cljs.core.truth_(datascript.query.free_var_QMARK_(p1__38125_SHARP_))){
var or__7601__auto__ = (replacements.cljs$core$IFn$_invoke$arity$1 ? replacements.cljs$core$IFn$_invoke$arity$1(p1__38125_SHARP_) : replacements.call(null,p1__38125_SHARP_));
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__38125_SHARP_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("__auto__"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)].join(''));
}
} else {
return p1__38125_SHARP_;
}
});})(vec__38186,seq__38187,first__38188,seq__38187__$1,vec__38189,seq__38190,first__38191,seq__38190__$1,_,rule_args,clauses,replacements,branch,s__38163__$2,temp__6738__auto__,vec__38159,seq__38160,first__38161,seq__38160__$1,rule,call_args,seqid,branches))
,clauses),datascript$query$expand_rule_$_iter__38162(cljs.core.rest(s__38163__$2)));
}
} else {
return null;
}
break;
}
});})(vec__38159,seq__38160,first__38161,seq__38160__$1,rule,call_args,seqid,branches))
,null,null));
});})(vec__38159,seq__38160,first__38161,seq__38160__$1,rule,call_args,seqid,branches))
;
return iter__8463__auto__(branches);
});
datascript.query.remove_pairs = (function datascript$query$remove_pairs(xs,ys){
var pairs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38197){
var vec__38198 = p__38197;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38198,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38198,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,y);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,xs,ys));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function datascript$query$rule_gen_guards(rule_clause,used_args){
var vec__38222 = rule_clause;
var seq__38223 = cljs.core.seq(vec__38222);
var first__38224 = cljs.core.first(seq__38223);
var seq__38223__$1 = cljs.core.next(seq__38223);
var rule = first__38224;
var call_args = seq__38223__$1;
var prev_call_args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(used_args,rule);
var iter__8463__auto__ = ((function (vec__38222,seq__38223,first__38224,seq__38223__$1,rule,call_args,prev_call_args){
return (function datascript$query$rule_gen_guards_$_iter__38225(s__38226){
return (new cljs.core.LazySeq(null,((function (vec__38222,seq__38223,first__38224,seq__38223__$1,rule,call_args,prev_call_args){
return (function (){
var s__38226__$1 = s__38226;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__38226__$1);
if(temp__6738__auto__){
var s__38226__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38226__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__38226__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__38228 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__38227 = (0);
while(true){
if((i__38227 < size__8462__auto__)){
var prev_args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__38227);
var vec__38237 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38237,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38237,(1),null);
cljs.core.chunk_append(b__38228,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_DASH_differ_QMARK_], null),call_args__$1,cljs.core.array_seq([prev_args__$1], 0))], null));

var G__38243 = (i__38227 + (1));
i__38227 = G__38243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38228),datascript$query$rule_gen_guards_$_iter__38225(cljs.core.chunk_rest(s__38226__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38228),null);
}
} else {
var prev_args = cljs.core.first(s__38226__$2);
var vec__38240 = datascript.query.remove_pairs(call_args,prev_args);
var call_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38240,(0),null);
var prev_args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38240,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_DASH_differ_QMARK_], null),call_args__$1,cljs.core.array_seq([prev_args__$1], 0))], null),datascript$query$rule_gen_guards_$_iter__38225(cljs.core.rest(s__38226__$2)));
}
} else {
return null;
}
break;
}
});})(vec__38222,seq__38223,first__38224,seq__38223__$1,rule,call_args,prev_call_args))
,null,null));
});})(vec__38222,seq__38223,first__38224,seq__38223__$1,rule,call_args,prev_call_args))
;
return iter__8463__auto__(prev_call_args);
});
datascript.query.walk_collect = (function datascript$query$walk_collect(form,pred){
var res = (function (){var G__38246 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38246) : cljs.core.atom.call(null,G__38246));
})();
clojure.walk.postwalk(((function (res){
return (function (p1__38244_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__38244_SHARP_) : pred.call(null,p1__38244_SHARP_)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(res,cljs.core.conj,p1__38244_SHARP_);
} else {
}

return p1__38244_SHARP_;
});})(res))
,form);

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(res) : cljs.core.deref.call(null,res));
});
datascript.query.split_guards = (function datascript$query$split_guards(clauses,guards){
var bound_vars = cljs.core.set(datascript.query.walk_collect(clauses,datascript.query.free_var_QMARK_));
var pred = ((function (bound_vars){
return (function (p__38254){
var vec__38255 = p__38254;
var vec__38258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38255,(0),null);
var seq__38259 = cljs.core.seq(vec__38258);
var first__38260 = cljs.core.first(seq__38259);
var seq__38259__$1 = cljs.core.next(seq__38259);
var _ = first__38260;
var vars = seq__38259__$1;
return cljs.core.every_QMARK_(bound_vars,vars);
});})(bound_vars))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,guards),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pred,guards)], null);
});
datascript.query.solve_rule = (function datascript$query$solve_rule(context,clause){
var final_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(datascript.query.free_var_QMARK_,clause);
var final_attrs_map = cljs.core.zipmap(final_attrs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;
var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){
return cljs.core.some(((function (final_attrs,final_attrs_map,solve){
return (function (p1__38261_SHARP_){
return cljs.core.empty_QMARK_(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(p1__38261_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;
var stack = (function (){var x__8535__auto__ = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$prefix_DASH_context,context,cljs.core.cst$kw$clauses,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),cljs.core.cst$kw$used_DASH_args,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$pending_DASH_guards,cljs.core.PersistentArrayMap.EMPTY], null);
return cljs.core._conj(cljs.core.List.EMPTY,x__8535__auto__);
})();
var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY,null,null,null));
while(true){
var temp__6736__auto__ = cljs.core.first(stack);
if(cljs.core.truth_(temp__6736__auto__)){
var frame = temp__6736__auto__;
var vec__38282 = cljs.core.split_with(((function (stack,rel,frame,temp__6736__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__38262_SHARP_){
return cljs.core.not(datascript.query.rule_QMARK_(context,p1__38262_SHARP_));
});})(stack,rel,frame,temp__6736__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,cljs.core.cst$kw$clauses.cljs$core$IFn$_invoke$arity$1(frame));
var clauses = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38282,(0),null);
var vec__38285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38282,(1),null);
var seq__38286 = cljs.core.seq(vec__38285);
var first__38287 = cljs.core.first(seq__38286);
var seq__38286__$1 = cljs.core.next(seq__38286);
var rule_clause = first__38287;
var next_clauses = seq__38286__$1;
if((rule_clause == null)){
var context__$1 = solve(cljs.core.cst$kw$prefix_DASH_context.cljs$core$IFn$_invoke$arity$1(frame),clauses);
var tuples = (datascript.query._collect.cljs$core$IFn$_invoke$arity$2 ? datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context__$1,final_attrs) : datascript.query._collect.call(null,context__$1,final_attrs));
var new_rel = (new datascript.query.Relation(final_attrs_map,tuples,null,null,null));
var G__38300 = cljs.core.next(stack);
var G__38301 = datascript.query.sum_rel(rel,new_rel);
stack = G__38300;
rel = G__38301;
continue;
} else {
var vec__38288 = rule_clause;
var seq__38289 = cljs.core.seq(vec__38288);
var first__38290 = cljs.core.first(seq__38289);
var seq__38289__$1 = cljs.core.next(seq__38289);
var rule = first__38290;
var call_args = seq__38289__$1;
var guards = datascript.query.rule_gen_guards(rule_clause,cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame));
var vec__38291 = datascript.query.split_guards(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$prefix_DASH_clauses.cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(guards,cljs.core.cst$kw$pending_DASH_guards.cljs$core$IFn$_invoke$arity$1(frame)));
var active_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38291,(0),null);
var pending_gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38291,(1),null);
if(cljs.core.truth_(cljs.core.some(((function (stack,rel,vec__38288,seq__38289,first__38290,seq__38289__$1,rule,call_args,guards,vec__38291,active_gs,pending_gs,vec__38282,clauses,vec__38285,seq__38286,first__38287,seq__38286__$1,rule_clause,next_clauses,frame,temp__6736__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__38263_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__38263_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(cljs.core.cst$sym$_DASH_differ_QMARK_)], null));
});})(stack,rel,vec__38288,seq__38289,first__38290,seq__38289__$1,rule,call_args,guards,vec__38291,active_gs,pending_gs,vec__38282,clauses,vec__38285,seq__38286,first__38287,seq__38286__$1,rule_clause,next_clauses,frame,temp__6736__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs))){
var G__38302 = cljs.core.next(stack);
var G__38303 = rel;
stack = G__38302;
rel = G__38303;
continue;
} else {
var prefix_clauses = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clauses,active_gs);
var prefix_context = solve(cljs.core.cst$kw$prefix_DASH_context.cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);
if(cljs.core.truth_(empty_rels_QMARK_(prefix_context))){
var G__38304 = cljs.core.next(stack);
var G__38305 = rel;
stack = G__38304;
rel = G__38305;
continue;
} else {
var used_args = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$used_DASH_args.cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));
var branches = datascript.query.expand_rule(rule_clause,context,used_args);
var G__38306 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__8463__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__38288,seq__38289,first__38290,seq__38289__$1,rule,call_args,guards,vec__38291,active_gs,pending_gs,vec__38282,clauses,vec__38285,seq__38286,first__38287,seq__38286__$1,rule_clause,next_clauses,frame,temp__6736__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function datascript$query$solve_rule_$_iter__38294(s__38295){
return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__38288,seq__38289,first__38290,seq__38289__$1,rule,call_args,guards,vec__38291,active_gs,pending_gs,vec__38282,clauses,vec__38285,seq__38286,first__38287,seq__38286__$1,rule_clause,next_clauses,frame,temp__6736__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){
var s__38295__$1 = s__38295;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__38295__$1);
if(temp__6738__auto__){
var s__38295__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38295__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__38295__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__38297 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__38296 = (0);
while(true){
if((i__38296 < size__8462__auto__)){
var branch = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__38296);
cljs.core.chunk_append(b__38297,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,prefix_clauses,cljs.core.cst$kw$prefix_DASH_context,prefix_context,cljs.core.cst$kw$clauses,datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([branch,next_clauses], 0)),cljs.core.cst$kw$used_DASH_args,used_args,cljs.core.cst$kw$pending_DASH_guards,pending_gs], null));

var G__38308 = (i__38296 + (1));
i__38296 = G__38308;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38297),datascript$query$solve_rule_$_iter__38294(cljs.core.chunk_rest(s__38295__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38297),null);
}
} else {
var branch = cljs.core.first(s__38295__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$prefix_DASH_clauses,prefix_clauses,cljs.core.cst$kw$prefix_DASH_context,prefix_context,cljs.core.cst$kw$clauses,datascript.query.concatv.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([branch,next_clauses], 0)),cljs.core.cst$kw$used_DASH_args,used_args,cljs.core.cst$kw$pending_DASH_guards,pending_gs], null),datascript$query$solve_rule_$_iter__38294(cljs.core.rest(s__38295__$2)));
}
} else {
return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__38288,seq__38289,first__38290,seq__38289__$1,rule,call_args,guards,vec__38291,active_gs,pending_gs,vec__38282,clauses,vec__38285,seq__38286,first__38287,seq__38286__$1,rule_clause,next_clauses,frame,temp__6736__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__38288,seq__38289,first__38290,seq__38289__$1,rule,call_args,guards,vec__38291,active_gs,pending_gs,vec__38282,clauses,vec__38285,seq__38286,first__38287,seq__38286__$1,rule_clause,next_clauses,frame,temp__6736__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;
return iter__8463__auto__(branches);
})(),cljs.core.next(stack));
var G__38307 = rel;
stack = G__38306;
rel = G__38307;
continue;
}
}
}
} else {
return rel;
}
break;
}
});
datascript.query.resolve_pattern_lookup_refs = (function datascript$query$resolve_pattern_lookup_refs(source,pattern){
if(((!((source == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$)))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source))){
var vec__38314 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38314,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38314,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38314,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38314,(3),null);
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(e))?datascript.db.entid_strict(source,e):e),a,(cljs.core.truth_((function (){var and__7589__auto__ = v;
if(cljs.core.truth_(and__7589__auto__)){
var and__7589__auto____$1 = datascript.query.attr_QMARK_(a);
if(cljs.core.truth_(and__7589__auto____$1)){
var and__7589__auto____$2 = datascript.db.ref_QMARK_(source,a);
if(and__7589__auto____$2){
return datascript.query.lookup_ref_QMARK_(v);
} else {
return and__7589__auto____$2;
}
} else {
return and__7589__auto____$1;
}
} else {
return and__7589__auto__;
}
})())?datascript.db.entid_strict(source,v):v),(cljs.core.truth_(datascript.query.lookup_ref_QMARK_(tx))?datascript.db.entid_strict(source,tx):tx)], null),(0),cljs.core.count(pattern));
} else {
return pattern;
}
});
datascript.query.dynamic_lookup_attrs = (function datascript$query$dynamic_lookup_attrs(source,pattern){
var vec__38321 = pattern;
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38321,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38321,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38321,(2),null);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38321,(3),null);
var G__38324 = cljs.core.PersistentHashSet.EMPTY;
var G__38324__$1 = (cljs.core.truth_(datascript.query.free_var_QMARK_(e))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__38324,e):G__38324);
var G__38324__$2 = (cljs.core.truth_(datascript.query.free_var_QMARK_(tx))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__38324__$1,tx):G__38324__$1);
if(cljs.core.truth_((function (){var and__7589__auto__ = datascript.query.free_var_QMARK_(v);
if(cljs.core.truth_(and__7589__auto__)){
return (cljs.core.not(datascript.query.free_var_QMARK_(a))) && (datascript.db.ref_QMARK_(source,a));
} else {
return and__7589__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__38324__$2,v);
} else {
return G__38324__$2;
}
});
datascript.query._resolve_clause = (function datascript$query$_resolve_clause(context,clause){
var pred__38340 = datascript.query.looks_like_QMARK_;
var expr__38341 = clause;
if(cljs.core.truth_((function (){var G__38343 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.cst$sym$_STAR_], null)], null);
var G__38344 = expr__38341;
return (pred__38340.cljs$core$IFn$_invoke$arity$2 ? pred__38340.cljs$core$IFn$_invoke$arity$2(G__38343,G__38344) : pred__38340.call(null,G__38343,G__38344));
})())){
return datascript.query.filter_by_pred(context,clause);
} else {
if(cljs.core.truth_((function (){var G__38345 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.cst$sym$_STAR_], null),cljs.core.cst$sym$_], null);
var G__38346 = expr__38341;
return (pred__38340.cljs$core$IFn$_invoke$arity$2 ? pred__38340.cljs$core$IFn$_invoke$arity$2(G__38345,G__38346) : pred__38340.call(null,G__38345,G__38346));
})())){
return datascript.query.bind_by_fn(context,clause);
} else {
if(cljs.core.truth_((function (){var G__38347 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null);
var G__38348 = expr__38341;
return (pred__38340.cljs$core$IFn$_invoke$arity$2 ? pred__38340.cljs$core$IFn$_invoke$arity$2(G__38347,G__38348) : pred__38340.call(null,G__38347,G__38348));
})())){
var vec__38349 = datascript.query.normalize_pattern_clause(clause);
var seq__38350 = cljs.core.seq(vec__38349);
var first__38351 = cljs.core.first(seq__38350);
var seq__38350__$1 = cljs.core.next(seq__38350);
var source_sym = first__38351;
var pattern = seq__38350__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$sources.cljs$core$IFn$_invoke$arity$1(context),source_sym);
var pattern__$1 = datascript.query.resolve_pattern_lookup_refs(source,pattern);
var relation = datascript.query.lookup_pattern(source,pattern__$1);
var lookup_source_QMARK_ = ((!((source == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === source.datascript$db$IDB$)))?true:(((!source.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source):false)):cljs.core.native_satisfies_QMARK_(datascript.db.IDB,source));
var _STAR_lookup_source_STAR_38353 = datascript.query._STAR_lookup_source_STAR_;
var _STAR_lookup_attrs_STAR_38354 = datascript.query._STAR_lookup_attrs_STAR_;
datascript.query._STAR_lookup_source_STAR_ = ((lookup_source_QMARK_)?source:null);

datascript.query._STAR_lookup_attrs_STAR_ = ((lookup_source_QMARK_)?datascript.query.dynamic_lookup_attrs(source,pattern__$1):null);

try{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),datascript.query.collapse_rels,relation);
}finally {datascript.query._STAR_lookup_attrs_STAR_ = _STAR_lookup_attrs_STAR_38354;

datascript.query._STAR_lookup_source_STAR_ = _STAR_lookup_source_STAR_38353;
}} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__38341)].join('')));
}
}
}
});
datascript.query.resolve_clause = (function datascript$query$resolve_clause(context,clause){
if(cljs.core.truth_(datascript.query.rule_QMARK_(context,clause))){
var vec__38358 = (cljs.core.truth_(datascript.query.source_QMARK_(cljs.core.first(clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(clause),cljs.core.next(clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$$,clause], null));
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38358,(0),null);
var rule = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38358,(1),null);
var source__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sources,source], null));
var rel = datascript.query.solve_rule(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$sources,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$sym$$,source__$1], null)),rule);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rels], null),datascript.query.collapse_rels,rel);
} else {
return datascript.query._resolve_clause(context,clause);
}
});
datascript.query._q = (function datascript$query$_q(context,clauses){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(datascript.query.resolve_clause,context,clauses);
});
datascript.query._collect = (function datascript$query$_collect(var_args){
var args38362 = [];
var len__8822__auto___38377 = arguments.length;
var i__8823__auto___38378 = (0);
while(true){
if((i__8823__auto___38378 < len__8822__auto___38377)){
args38362.push((arguments[i__8823__auto___38378]));

var G__38379 = (i__8823__auto___38378 + (1));
i__8823__auto___38378 = G__38379;
continue;
} else {
}
break;
}

var G__38364 = args38362.length;
switch (G__38364) {
case 2:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38362.length)].join('')));

}
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$2 = (function (context,symbols){
var rels = cljs.core.cst$kw$rels.cljs$core$IFn$_invoke$arity$1(context);
return datascript.query._collect.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__38365 = cljs.core.count(symbols);
return (datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1 ? datascript.arrays.make_array.cljs$core$IFn$_invoke$arity$1(G__38365) : datascript.arrays.make_array.call(null,G__38365));
})()], null),rels,symbols);
});

datascript.query._collect.cljs$core$IFn$_invoke$arity$3 = (function (acc,rels,symbols){
while(true){
var temp__6736__auto__ = cljs.core.first(rels);
if(cljs.core.truth_(temp__6736__auto__)){
var rel = temp__6736__auto__;
var keep_attrs = cljs.core.select_keys(cljs.core.cst$kw$attrs.cljs$core$IFn$_invoke$arity$1(rel),symbols);
if(cljs.core.empty_QMARK_(keep_attrs)){
var G__38381 = acc;
var G__38382 = cljs.core.next(rels);
var G__38383 = symbols;
acc = G__38381;
rels = G__38382;
symbols = G__38383;
continue;
} else {
var copy_map = cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (acc,rels,symbols,keep_attrs,rel,temp__6736__auto__){
return (function (p1__38361_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keep_attrs,p1__38361_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__6736__auto__))
,symbols));
var len = cljs.core.count(symbols);
var G__38384 = (function (){var iter__8463__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__6736__auto__){
return (function datascript$query$iter__38366(s__38367){
return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__6736__auto__){
return (function (){
var s__38367__$1 = s__38367;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__38367__$1);
if(temp__6738__auto__){
var xs__7294__auto__ = temp__6738__auto__;
var t1 = cljs.core.first(xs__7294__auto__);
var iterys__8459__auto__ = ((function (s__38367__$1,acc,rels,symbols,t1,xs__7294__auto__,temp__6738__auto__,copy_map,len,keep_attrs,rel,temp__6736__auto__){
return (function datascript$query$iter__38366_$_iter__38368(s__38369){
return (new cljs.core.LazySeq(null,((function (s__38367__$1,acc,rels,symbols,t1,xs__7294__auto__,temp__6738__auto__,copy_map,len,keep_attrs,rel,temp__6736__auto__){
return (function (){
var s__38369__$1 = s__38369;
while(true){
var temp__6738__auto____$1 = cljs.core.seq(s__38369__$1);
if(temp__6738__auto____$1){
var s__38369__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38369__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__38369__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__38371 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__38370 = (0);
while(true){
if((i__38370 < size__8462__auto__)){
var t2 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__38370);
cljs.core.chunk_append(b__38371,(function (){var res = cljs.core.aclone(t1);
var n__8622__auto___38387 = len;
var i_38388 = (0);
while(true){
if((i_38388 < n__8622__auto___38387)){
var temp__6738__auto___38389__$2 = (copy_map[i_38388]);
if(cljs.core.truth_(temp__6738__auto___38389__$2)){
var idx_38390 = temp__6738__auto___38389__$2;
(res[i_38388] = (t2[idx_38390]));
} else {
}

var G__38391 = (i_38388 + (1));
i_38388 = G__38391;
continue;
} else {
}
break;
}

return res;
})());

var G__38392 = (i__38370 + (1));
i__38370 = G__38392;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38371),datascript$query$iter__38366_$_iter__38368(cljs.core.chunk_rest(s__38369__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38371),null);
}
} else {
var t2 = cljs.core.first(s__38369__$2);
return cljs.core.cons((function (){var res = cljs.core.aclone(t1);
var n__8622__auto___38393 = len;
var i_38394 = (0);
while(true){
if((i_38394 < n__8622__auto___38393)){
var temp__6738__auto___38395__$2 = (copy_map[i_38394]);
if(cljs.core.truth_(temp__6738__auto___38395__$2)){
var idx_38396 = temp__6738__auto___38395__$2;
(res[i_38394] = (t2[idx_38396]));
} else {
}

var G__38397 = (i_38394 + (1));
i_38394 = G__38397;
continue;
} else {
}
break;
}

return res;
})(),datascript$query$iter__38366_$_iter__38368(cljs.core.rest(s__38369__$2)));
}
} else {
return null;
}
break;
}
});})(s__38367__$1,acc,rels,symbols,t1,xs__7294__auto__,temp__6738__auto__,copy_map,len,keep_attrs,rel,temp__6736__auto__))
,null,null));
});})(s__38367__$1,acc,rels,symbols,t1,xs__7294__auto__,temp__6738__auto__,copy_map,len,keep_attrs,rel,temp__6736__auto__))
;
var fs__8460__auto__ = cljs.core.seq(iterys__8459__auto__(cljs.core.cst$kw$tuples.cljs$core$IFn$_invoke$arity$1(rel)));
if(fs__8460__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__8460__auto__,datascript$query$iter__38366(cljs.core.rest(s__38367__$1)));
} else {
var G__38398 = cljs.core.rest(s__38367__$1);
s__38367__$1 = G__38398;
continue;
}
} else {
return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__6736__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__6736__auto__))
;
return iter__8463__auto__(acc);
})();
var G__38385 = cljs.core.next(rels);
var G__38386 = symbols;
acc = G__38384;
rels = G__38385;
symbols = G__38386;
continue;
}
} else {
return acc;
}
break;
}
});

datascript.query._collect.cljs$lang$maxFixedArity = 3;

datascript.query.collect = (function datascript$query$collect(context,symbols){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,datascript.query._collect.cljs$core$IFn$_invoke$arity$2(context,symbols)));
});

/**
 * @interface
 */
datascript.query.IContextResolve = function(){};

datascript.query._context_resolve = (function datascript$query$_context_resolve(var$,context){
if((!((var$ == null))) && (!((var$.datascript$query$IContextResolve$_context_resolve$arity$2 == null)))){
return var$.datascript$query$IContextResolve$_context_resolve$arity$2(var$,context);
} else {
var x__8319__auto__ = (((var$ == null))?null:var$);
var m__8320__auto__ = (datascript.query._context_resolve[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$2(var$,context) : m__8320__auto__.call(null,var$,context));
} else {
var m__8320__auto____$1 = (datascript.query._context_resolve["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2(var$,context) : m__8320__auto____$1.call(null,var$,context));
} else {
throw cljs.core.missing_protocol("IContextResolve.-context-resolve",var$);
}
}
}
});

datascript.parser.Variable.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Variable.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return datascript.query.context_resolve_val(context,var$__$1.symbol);
});

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.SrcVar.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,context){
var var$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sources,var$__$1.symbol], null));
});

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.PlainSymbol.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
var or__7601__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(datascript.query.built_in_aggregates,var$__$1.symbol);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return datascript.query.resolve_sym(var$__$1.symbol);
}
});

datascript.parser.Constant.prototype.datascript$query$IContextResolve$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.Constant.prototype.datascript$query$IContextResolve$_context_resolve$arity$2 = (function (var$,_){
var var$__$1 = this;
return var$__$1.value;
});
datascript.query._aggregate = (function datascript$query$_aggregate(find_elements,context,tuples){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$4((function (element,fixed_value,i){
if(cljs.core.truth_(datascript.parser.aggregate_QMARK_(element))){
var f = datascript.query._context_resolve(cljs.core.cst$kw$fn.cljs$core$IFn$_invoke$arity$1(element),context);
var args = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (f){
return (function (p1__38399_SHARP_){
return datascript.query._context_resolve(p1__38399_SHARP_,context);
});})(f))
,cljs.core.butlast(cljs.core.cst$kw$args.cljs$core$IFn$_invoke$arity$1(element)));
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (f,args){
return (function (p1__38400_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__38400_SHARP_,i);
});})(f,args))
,tuples);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else {
return fixed_value;
}
}),find_elements,cljs.core.first(tuples),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
datascript.query.idxs_of = (function datascript$query$idxs_of(pred,coll){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__38401_SHARP_,p2__38402_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p1__38401_SHARP_) : pred.call(null,p1__38401_SHARP_)))){
return p2__38402_SHARP_;
} else {
return null;
}
}),coll,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
datascript.query.aggregate = (function datascript$query$aggregate(find_elements,context,resultset){
var group_idxs = datascript.query.idxs_of(cljs.core.complement(datascript.parser.aggregate_QMARK_),find_elements);
var group_fn = ((function (group_idxs){
return (function (tuple){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (group_idxs){
return (function (p1__38403_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tuple,p1__38403_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;
var grouped = cljs.core.group_by(group_fn,resultset);
var iter__8463__auto__ = ((function (group_idxs,group_fn,grouped){
return (function datascript$query$aggregate_$_iter__38422(s__38423){
return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){
var s__38423__$1 = s__38423;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__38423__$1);
if(temp__6738__auto__){
var s__38423__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38423__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__38423__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__38425 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__38424 = (0);
while(true){
if((i__38424 < size__8462__auto__)){
var vec__38434 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__38424);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38434,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38434,(1),null);
cljs.core.chunk_append(b__38425,datascript.query._aggregate(find_elements,context,tuples));

var G__38440 = (i__38424 + (1));
i__38424 = G__38440;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38425),datascript$query$aggregate_$_iter__38422(cljs.core.chunk_rest(s__38423__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38425),null);
}
} else {
var vec__38437 = cljs.core.first(s__38423__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38437,(0),null);
var tuples = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38437,(1),null);
return cljs.core.cons(datascript.query._aggregate(find_elements,context,tuples),datascript$query$aggregate_$_iter__38422(cljs.core.rest(s__38423__$2)));
}
} else {
return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;
return iter__8463__auto__(grouped);
});

/**
 * @interface
 */
datascript.query.IPostProcess = function(){};

datascript.query._post_process = (function datascript$query$_post_process(find,tuples){
if((!((find == null))) && (!((find.datascript$query$IPostProcess$_post_process$arity$2 == null)))){
return find.datascript$query$IPostProcess$_post_process$arity$2(find,tuples);
} else {
var x__8319__auto__ = (((find == null))?null:find);
var m__8320__auto__ = (datascript.query._post_process[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__8320__auto__.call(null,find,tuples));
} else {
var m__8320__auto____$1 = (datascript.query._post_process["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2(find,tuples) : m__8320__auto____$1.call(null,find,tuples));
} else {
throw cljs.core.missing_protocol("IPostProcess.-post-process",find);
}
}
}
});

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindRel.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return tuples;
});

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindColl.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),tuples);
});

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindScalar.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.ffirst(tuples);
});

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.parser.FindTuple.prototype.datascript$query$IPostProcess$_post_process$arity$2 = (function (_,tuples){
var ___$1 = this;
return cljs.core.first(tuples);
});
datascript.query.pull = (function datascript$query$pull(find_elements,context,resultset){
var resolved = (function (){var iter__8463__auto__ = (function datascript$query$pull_$_iter__38465(s__38466){
return (new cljs.core.LazySeq(null,(function (){
var s__38466__$1 = s__38466;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__38466__$1);
if(temp__6738__auto__){
var s__38466__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38466__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__38466__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__38468 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__38467 = (0);
while(true){
if((i__38467 < size__8462__auto__)){
var find = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__38467);
cljs.core.chunk_append(b__38468,(cljs.core.truth_(datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(find),context))], null):null));

var G__38489 = (i__38467 + (1));
i__38467 = G__38489;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38468),datascript$query$pull_$_iter__38465(cljs.core.chunk_rest(s__38466__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38468),null);
}
} else {
var find = cljs.core.first(s__38466__$2);
return cljs.core.cons((cljs.core.truth_(datascript.parser.pull_QMARK_(find))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.query._context_resolve(cljs.core.cst$kw$source.cljs$core$IFn$_invoke$arity$1(find),context),datascript.pull_parser.parse_pull(datascript.query._context_resolve(cljs.core.cst$kw$pattern.cljs$core$IFn$_invoke$arity$1(find),context))], null):null),datascript$query$pull_$_iter__38465(cljs.core.rest(s__38466__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8463__auto__(find_elements);
})();
var iter__8463__auto__ = ((function (resolved){
return (function datascript$query$pull_$_iter__38471(s__38472){
return (new cljs.core.LazySeq(null,((function (resolved){
return (function (){
var s__38472__$1 = s__38472;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__38472__$1);
if(temp__6738__auto__){
var s__38472__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38472__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__38472__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__38474 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__38473 = (0);
while(true){
if((i__38473 < size__8462__auto__)){
var tuple = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__38473);
cljs.core.chunk_append(b__38474,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (i__38473,tuple,c__8461__auto__,size__8462__auto__,b__38474,s__38472__$2,temp__6738__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__38483 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38483,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38483,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(i__38473,tuple,c__8461__auto__,size__8462__auto__,b__38474,s__38472__$2,temp__6738__auto__,resolved))
,resolved,tuple));

var G__38490 = (i__38473 + (1));
i__38473 = G__38490;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38474),datascript$query$pull_$_iter__38471(cljs.core.chunk_rest(s__38472__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38474),null);
}
} else {
var tuple = cljs.core.first(s__38472__$2);
return cljs.core.cons(cljs.core.mapv.cljs$core$IFn$_invoke$arity$3(((function (tuple,s__38472__$2,temp__6738__auto__,resolved){
return (function (env,el){
if(cljs.core.truth_(env)){
var vec__38486 = env;
var src = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38486,(0),null);
var spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38486,(1),null);
return datascript.pull_api.pull_spec(src,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [el], null),false);
} else {
return el;
}
});})(tuple,s__38472__$2,temp__6738__auto__,resolved))
,resolved,tuple),datascript$query$pull_$_iter__38471(cljs.core.rest(s__38472__$2)));
}
} else {
return null;
}
break;
}
});})(resolved))
,null,null));
});})(resolved))
;
return iter__8463__auto__(resultset);
});
datascript.query.query_cache = cljs.core.volatile_BANG_(datascript.lru.lru(datascript.query.lru_cache_size));
datascript.query.memoized_parse_query = (function datascript$query$memoized_parse_query(q){
var temp__6736__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(datascript.query.query_cache) : cljs.core.deref.call(null,datascript.query.query_cache)),q,null);
if(cljs.core.truth_(temp__6736__auto__)){
var cached = temp__6736__auto__;
return cached;
} else {
var qp = datascript.parser.parse_query(q);
cljs.core._vreset_BANG_(datascript.query.query_cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(datascript.query.query_cache),q,qp));

return qp;
}
});
datascript.query.q = (function datascript$query$q(var_args){
var args__8829__auto__ = [];
var len__8822__auto___38496 = arguments.length;
var i__8823__auto___38497 = (0);
while(true){
if((i__8823__auto___38497 < len__8822__auto___38496)){
args__8829__auto__.push((arguments[i__8823__auto___38497]));

var G__38498 = (i__8823__auto___38497 + (1));
i__8823__auto___38497 = G__38498;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

datascript.query.q.cljs$core$IFn$_invoke$arity$variadic = (function (q,inputs){
var parsed_q = datascript.query.memoized_parse_query(q);
var find = cljs.core.cst$kw$find.cljs$core$IFn$_invoke$arity$1(parsed_q);
var find_elements = datascript.parser.find_elements(find);
var find_vars = datascript.parser.find_vars(find);
var result_arity = cljs.core.count(find_elements);
var with$ = cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(parsed_q);
var all_vars = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(find_vars,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$symbol,with$));
var q__$1 = (function (){var G__38494 = q;
if(cljs.core.sequential_QMARK_(q)){
return datascript.parser.query__GT_map(G__38494);
} else {
return G__38494;
}
})();
var wheres = cljs.core.cst$kw$where.cljs$core$IFn$_invoke$arity$1(q__$1);
var context = datascript.query.resolve_ins((new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,null,null,null)),cljs.core.cst$kw$in.cljs$core$IFn$_invoke$arity$1(parsed_q),inputs);
var resultset = datascript.query.collect(datascript.query._q(context,wheres),all_vars);
var G__38495 = resultset;
var G__38495__$1 = (cljs.core.truth_(cljs.core.cst$kw$with.cljs$core$IFn$_invoke$arity$1(q__$1))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (G__38495,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset){
return (function (p1__38491_SHARP_){
return cljs.core.vec(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(p1__38491_SHARP_,(0),result_arity));
});})(G__38495,parsed_q,find,find_elements,find_vars,result_arity,with$,all_vars,q__$1,wheres,context,resultset))
,G__38495):G__38495);
var G__38495__$2 = (cljs.core.truth_(cljs.core.some(datascript.parser.aggregate_QMARK_,find_elements))?datascript.query.aggregate(find_elements,context,G__38495__$1):G__38495__$1);
var G__38495__$3 = (cljs.core.truth_(cljs.core.some(datascript.parser.pull_QMARK_,find_elements))?datascript.query.pull(find_elements,context,G__38495__$2):G__38495__$2);
return datascript.query._post_process(find,G__38495__$3);

});

datascript.query.q.cljs$lang$maxFixedArity = (1);

datascript.query.q.cljs$lang$applyTo = (function (seq38492){
var G__38493 = cljs.core.first(seq38492);
var seq38492__$1 = cljs.core.next(seq38492);
return datascript.query.q.cljs$core$IFn$_invoke$arity$variadic(G__38493,seq38492__$1);
});

