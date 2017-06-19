// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core');
goog.require('datascript.db');




datascript.impl.entity.entid = (function datascript$impl$entity$entid(db,eid){
if((typeof eid === 'number') || (cljs.core.sequential_QMARK_(eid))){
return datascript.db.entid(db,eid);
} else {
return null;
}
});
datascript.impl.entity.entity = (function datascript$impl$entity$entity(db,eid){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var temp__6738__auto__ = datascript.impl.entity.entid(db,eid);
if(cljs.core.truth_(temp__6738__auto__)){
var e = temp__6738__auto__;
var G__37722 = db;
var G__37723 = e;
var G__37724 = cljs.core.volatile_BANG_(false);
var G__37725 = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
return (datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4 ? datascript.impl.entity.__GT_Entity.cljs$core$IFn$_invoke$arity$4(G__37722,G__37723,G__37724,G__37725) : datascript.impl.entity.__GT_Entity.call(null,G__37722,G__37723,G__37724,G__37725));
} else {
return null;
}
});
datascript.impl.entity.entity_attr = (function datascript$impl$entity$entity_attr(db,a,datoms){
if(datascript.db.multival_QMARK_(db,a)){
if(datascript.db.ref_QMARK_(db,a)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__37726_SHARP_,p2__37727_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__37726_SHARP_,datascript.impl.entity.entity(db,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p2__37727_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__37728_SHARP_,p2__37729_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__37728_SHARP_,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(p2__37729_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datascript.db.ref_QMARK_(db,a)){
return datascript.impl.entity.entity(db,cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)));
} else {
return cljs.core.cst$kw$v.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms));
}
}
});
datascript.impl.entity._lookup_backwards = (function datascript$impl$entity$_lookup_backwards(db,eid,attr,not_found){
var temp__6736__auto__ = cljs.core.not_empty(datascript.db._search(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__6736__auto__)){
var datoms = temp__6736__auto__;
if(datascript.db.component_QMARK_(db,attr)){
return datascript.impl.entity.entity(db,cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(cljs.core.first(datoms)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (datoms,temp__6736__auto__){
return (function (p1__37730_SHARP_,p2__37731_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__37730_SHARP_,datascript.impl.entity.entity(db,cljs.core.cst$kw$e.cljs$core$IFn$_invoke$arity$1(p2__37731_SHARP_)));
});})(datoms,temp__6736__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function datascript$impl$entity$multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array(val);
} else {
return null;
}
});
datascript.impl.entity.js_seq = (function datascript$impl$entity$js_seq(e){
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(e) : datascript.impl.entity.touch.call(null,e));

var iter__8463__auto__ = (function datascript$impl$entity$js_seq_$_iter__37751(s__37752){
return (new cljs.core.LazySeq(null,(function (){
var s__37752__$1 = s__37752;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__37752__$1);
if(temp__6738__auto__){
var s__37752__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__37752__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__37752__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__37754 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__37753 = (0);
while(true){
if((i__37753 < size__8462__auto__)){
var vec__37763 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__37753);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37763,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37763,(1),null);
cljs.core.chunk_append(b__37754,((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__37770 = (i__37753 + (1));
i__37753 = G__37770;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37754),datascript$impl$entity$js_seq_$_iter__37751(cljs.core.chunk_rest(s__37752__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37754),null);
}
} else {
var vec__37766 = cljs.core.first(s__37752__$2);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37766,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37766,(1),null);
return cljs.core.cons(((datascript.db.multival_QMARK_(e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js(v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datascript$impl$entity$js_seq_$_iter__37751(cljs.core.rest(s__37752__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8463__auto__((function (){var G__37769 = e.cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37769) : cljs.core.deref.call(null,G__37769));
})());
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {datascript.impl.entity.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.impl.entity.Entity.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.to_array,datascript.impl.entity.js_seq(this$)));
});

datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__37796 = null;
var G__37796__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__37772 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__37773 = null;
var count__37774 = (0);
var i__37775 = (0);
while(true){
if((i__37775 < count__37774)){
var vec__37776 = chunk__37773.cljs$core$IIndexed$_nth$arity$2(null,i__37775);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37776,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37776,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));

var G__37797 = seq__37772;
var G__37798 = chunk__37773;
var G__37799 = count__37774;
var G__37800 = (i__37775 + (1));
seq__37772 = G__37797;
chunk__37773 = G__37798;
count__37774 = G__37799;
i__37775 = G__37800;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__37772);
if(temp__6738__auto__){
var seq__37772__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37772__$1)){
var c__8512__auto__ = cljs.core.chunk_first(seq__37772__$1);
var G__37801 = cljs.core.chunk_rest(seq__37772__$1);
var G__37802 = c__8512__auto__;
var G__37803 = cljs.core.count(c__8512__auto__);
var G__37804 = (0);
seq__37772 = G__37801;
chunk__37773 = G__37802;
count__37774 = G__37803;
i__37775 = G__37804;
continue;
} else {
var vec__37779 = cljs.core.first(seq__37772__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37779,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37779,(1),null);
(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(v,a,this$) : f.call(null,v,a,this$));

var G__37805 = cljs.core.next(seq__37772__$1);
var G__37806 = null;
var G__37807 = (0);
var G__37808 = (0);
seq__37772 = G__37805;
chunk__37773 = G__37806;
count__37774 = G__37807;
i__37775 = G__37808;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__37796__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__37782 = cljs.core.seq(datascript.impl.entity.js_seq(this$));
var chunk__37783 = null;
var count__37784 = (0);
var i__37785 = (0);
while(true){
if((i__37785 < count__37784)){
var vec__37786 = chunk__37783.cljs$core$IIndexed$_nth$arity$2(null,i__37785);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37786,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37786,(1),null);
f.call(use_as_this,v,a,this$);

var G__37809 = seq__37782;
var G__37810 = chunk__37783;
var G__37811 = count__37784;
var G__37812 = (i__37785 + (1));
seq__37782 = G__37809;
chunk__37783 = G__37810;
count__37784 = G__37811;
i__37785 = G__37812;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__37782);
if(temp__6738__auto__){
var seq__37782__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37782__$1)){
var c__8512__auto__ = cljs.core.chunk_first(seq__37782__$1);
var G__37813 = cljs.core.chunk_rest(seq__37782__$1);
var G__37814 = c__8512__auto__;
var G__37815 = cljs.core.count(c__8512__auto__);
var G__37816 = (0);
seq__37782 = G__37813;
chunk__37783 = G__37814;
count__37784 = G__37815;
i__37785 = G__37816;
continue;
} else {
var vec__37789 = cljs.core.first(seq__37782__$1);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37789,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37789,(1),null);
f.call(use_as_this,v,a,this$);

var G__37817 = cljs.core.next(seq__37782__$1);
var G__37818 = null;
var G__37819 = (0);
var G__37820 = (0);
seq__37782 = G__37817;
chunk__37783 = G__37818;
count__37784 = G__37819;
i__37785 = G__37820;
continue;
}
} else {
return null;
}
}
break;
}
});
G__37796 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__37796__1.call(this,f);
case 2:
return G__37796__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__37796.cljs$core$IFn$_invoke$arity$1 = G__37796__1;
G__37796.cljs$core$IFn$_invoke$arity$2 = G__37796__2;
return G__37796;
})()
;

datascript.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,":db/id")){
return self__.eid;
} else {
if(datascript.db.reverse_ref_QMARK_(attr)){
return datascript.impl.entity.multival__GT_js(datascript.impl.entity._lookup_backwards(self__.db,self__.eid,datascript.db.reverse_ref(attr),null));
} else {
var G__37792 = (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,attr) : datascript.impl.entity.lookup_entity.call(null,this$,attr));
if(datascript.db.multival_QMARK_(self__.db,attr)){
return datascript.impl.entity.multival__GT_js(G__37792);
} else {
return G__37792;
}
}
}
});

datascript.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.keys(this$));
});

datascript.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator(datascript.impl.entity.js_seq(this$));
});

datascript.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
});

datascript.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_(this$);
});

datascript.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.keys(this$));
});

datascript.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,datascript.impl.entity.js_seq(this$)));
});

datascript.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2(this$,other) : datascript.impl.entity.equiv_entity.call(null,this$,other));
});

datascript.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return !((this$.get(attr) == null));
});

datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.equiv_entity.cljs$core$IFn$_invoke$arity$2(this$__$1,o) : datascript.impl.entity.equiv_entity.call(null,this$__$1,o));
});

datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.eid);
});

datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.impl.entity.touch.call(null,this$__$1));

return cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.cache) : cljs.core.deref.call(null,self__.cache)));
});

datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(this$__$1) : datascript.impl.entity.touch.call(null,this$__$1));

return cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.cache) : cljs.core.deref.call(null,self__.cache)));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$__$1,attr,null) : datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,null));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,attr,not_found){
var self__ = this;
var this$__$1 = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$__$1,attr,not_found) : datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,not_found));
});

datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$datascript$impl$entity_SLASH_nf,(function (){var G__37793 = this$__$1;
var G__37794 = k;
var G__37795 = cljs.core.cst$kw$datascript$impl$entity_SLASH_nf;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(G__37793,G__37794,G__37795) : datascript.impl.entity.lookup_entity.call(null,G__37793,G__37794,G__37795));
})());
});

datascript.impl.entity.Entity.prototype.call = (function() {
var G__37821 = null;
var G__37821__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,k) : datascript.impl.entity.lookup_entity.call(null,this$,k));
});
var G__37821__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : datascript.impl.entity.lookup_entity.call(null,this$,k,not_found));
});
G__37821 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__37821__2.call(this,self__,k);
case 3:
return G__37821__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__37821.cljs$core$IFn$_invoke$arity$2 = G__37821__2;
G__37821.cljs$core$IFn$_invoke$arity$3 = G__37821__3;
return G__37821;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args37771){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args37771)));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2(this$,k) : datascript.impl.entity.lookup_entity.call(null,this$,k));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return (datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 ? datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : datascript.impl.entity.lookup_entity.call(null,this$,k,not_found));
});

datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.cache) : cljs.core.deref.call(null,self__.cache)),cljs.core.cst$kw$db_SLASH_id,self__.eid),writer,opts);
});

datascript.impl.entity.Entity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$db,cljs.core.cst$sym$eid,cljs.core.cst$sym$touched,cljs.core.cst$sym$cache], null);
});

datascript.impl.entity.Entity.cljs$lang$type = true;

datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";

datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"datascript.impl.entity/Entity");
});

datascript.impl.entity.__GT_Entity = (function datascript$impl$entity$__GT_Entity(db,eid,touched,cache){
return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});

datascript.impl.entity.entity_QMARK_ = (function datascript$impl$entity$entity_QMARK_(x){
return (x instanceof datascript.impl.entity.Entity);
});
datascript.impl.entity.equiv_entity = (function datascript$impl$entity$equiv_entity(this$,that){
return ((that instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$.eid,that.eid));
});
datascript.impl.entity.lookup_entity = (function datascript$impl$entity$lookup_entity(var_args){
var args37822 = [];
var len__8822__auto___37829 = arguments.length;
var i__8823__auto___37830 = (0);
while(true){
if((i__8823__auto___37830 < len__8822__auto___37829)){
args37822.push((arguments[i__8823__auto___37830]));

var G__37831 = (i__8823__auto___37830 + (1));
i__8823__auto___37830 = G__37831;
continue;
} else {
}
break;
}

var G__37824 = args37822.length;
switch (G__37824) {
case 2:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37822.length)].join('')));

}
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 = (function (this$,attr){
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3(this$,attr,null);
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 = (function (this$,attr,not_found){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,cljs.core.cst$kw$db_SLASH_id)){
return this$.eid;
} else {
if(datascript.db.reverse_ref_QMARK_(attr)){
return datascript.impl.entity._lookup_backwards(this$.db,this$.eid,datascript.db.reverse_ref(attr),not_found);
} else {
var or__7601__auto__ = (function (){var G__37826 = this$.cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37826) : cljs.core.deref.call(null,G__37826));
})().call(null,attr);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
if(cljs.core.truth_((function (){var G__37827 = this$.touched;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37827) : cljs.core.deref.call(null,G__37827));
})())){
return not_found;
} else {
var temp__6736__auto__ = cljs.core.not_empty(datascript.db._search(this$.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.eid,attr], null)));
if(cljs.core.truth_(temp__6736__auto__)){
var datoms = temp__6736__auto__;
var value = datascript.impl.entity.entity_attr(this$.db,attr,datoms);
cljs.core.vreset_BANG_(this$.cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__37828 = this$.cache;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37828) : cljs.core.deref.call(null,G__37828));
})(),attr,value));

return value;
} else {
return not_found;
}
}
}
}
}
});

datascript.impl.entity.lookup_entity.cljs$lang$maxFixedArity = 3;

datascript.impl.entity.touch_components = (function datascript$impl$entity$touch_components(db,a__GT_v){
return cljs.core.reduce_kv((function (acc,a,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,a,((datascript.db.component_QMARK_(db,a))?((datascript.db.multival_QMARK_(db,a))?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(datascript.impl.entity.touch,v)):(datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1 ? datascript.impl.entity.touch.cljs$core$IFn$_invoke$arity$1(v) : datascript.impl.entity.touch.call(null,v))):v));
}),cljs.core.PersistentArrayMap.EMPTY,a__GT_v);
});
datascript.impl.entity.datoms__GT_cache = (function datascript$impl$entity$datoms__GT_cache(db,datoms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){
var a = cljs.core.cst$kw$a.cljs$core$IFn$_invoke$arity$1(cljs.core.first(part));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,a,datascript.impl.entity.entity_attr(db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$a,datoms));
});
datascript.impl.entity.touch = (function datascript$impl$entity$touch(e){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_(e))){
} else {
throw (new Error("Assert failed: (entity? e)"));
}

if(cljs.core.truth_((function (){var G__37834 = e.touched;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__37834) : cljs.core.deref.call(null,G__37834));
})())){
} else {
var temp__6738__auto___37835 = cljs.core.not_empty(datascript.db._search(e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__6738__auto___37835)){
var datoms_37836 = temp__6738__auto___37835;
cljs.core.vreset_BANG_(e.cache,datascript.impl.entity.touch_components(e.db,datascript.impl.entity.datoms__GT_cache(e.db,datoms_37836)));

cljs.core.vreset_BANG_(e.touched,true);
} else {
}
}

return e;
});
var G__37837_37859 = "datascript.impl.entity.Entity.prototype.get";
var G__37838_37860 = datascript.impl.entity.Entity.prototype.get;
goog.exportSymbol(G__37837_37859,G__37838_37860);

var G__37839_37861 = "datascript.impl.entity.Entity.prototype.has";
var G__37840_37862 = datascript.impl.entity.Entity.prototype.has;
goog.exportSymbol(G__37839_37861,G__37840_37862);

var G__37841_37863 = "datascript.impl.entity.Entity.prototype.forEach";
var G__37842_37864 = datascript.impl.entity.Entity.prototype.forEach;
goog.exportSymbol(G__37841_37863,G__37842_37864);

var G__37843_37865 = "datascript.impl.entity.Entity.prototype.key_set";
var G__37844_37866 = datascript.impl.entity.Entity.prototype.key_set;
goog.exportSymbol(G__37843_37865,G__37844_37866);

var G__37845_37867 = "datascript.impl.entity.Entity.prototype.value_set";
var G__37846_37868 = datascript.impl.entity.Entity.prototype.value_set;
goog.exportSymbol(G__37845_37867,G__37846_37868);

var G__37847_37869 = "datascript.impl.entity.Entity.prototype.entry_set";
var G__37848_37870 = datascript.impl.entity.Entity.prototype.entry_set;
goog.exportSymbol(G__37847_37869,G__37848_37870);

var G__37849_37871 = "datascript.impl.entity.Entity.prototype.keys";
var G__37850_37872 = datascript.impl.entity.Entity.prototype.keys;
goog.exportSymbol(G__37849_37871,G__37850_37872);

var G__37851_37873 = "datascript.impl.entity.Entity.prototype.values";
var G__37852_37874 = datascript.impl.entity.Entity.prototype.values;
goog.exportSymbol(G__37851_37873,G__37852_37874);

var G__37853_37875 = "datascript.impl.entity.Entity.prototype.entries";
var G__37854_37876 = datascript.impl.entity.Entity.prototype.entries;
goog.exportSymbol(G__37853_37875,G__37854_37876);

var G__37855_37877 = "cljs.core.ES6Iterator.prototype.next";
var G__37856_37878 = cljs.core.ES6Iterator.prototype.next;
goog.exportSymbol(G__37855_37877,G__37856_37878);

var G__37857_37879 = "cljs.core.ES6EntriesIterator.prototype.next";
var G__37858_37880 = cljs.core.ES6EntriesIterator.prototype.next;
goog.exportSymbol(G__37857_37879,G__37858_37880);
