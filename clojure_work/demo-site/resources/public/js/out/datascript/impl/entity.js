// Compiled by ClojureScript 1.9.518 {}
goog.provide('datascript.impl.entity');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('datascript.db');




datascript.impl.entity.entid = (function datascript$impl$entity$entid(db,eid){
if((typeof eid === 'number') || (cljs.core.sequential_QMARK_.call(null,eid))){
return datascript.db.entid.call(null,db,eid);
} else {
return null;
}
});
datascript.impl.entity.entity = (function datascript$impl$entity$entity(db,eid){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

var temp__6738__auto__ = datascript.impl.entity.entid.call(null,db,eid);
if(cljs.core.truth_(temp__6738__auto__)){
var e = temp__6738__auto__;
return datascript.impl.entity.__GT_Entity.call(null,db,e,cljs.core.volatile_BANG_.call(null,false),cljs.core.volatile_BANG_.call(null,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
});
datascript.impl.entity.entity_attr = (function datascript$impl$entity$entity_attr(db,a,datoms){
if(datascript.db.multival_QMARK_.call(null,db,a)){
if(datascript.db.ref_QMARK_.call(null,db,a)){
return cljs.core.reduce.call(null,(function (p1__35891_SHARP_,p2__35892_SHARP_){
return cljs.core.conj.call(null,p1__35891_SHARP_,datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p2__35892_SHARP_)));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.call(null,(function (p1__35893_SHARP_,p2__35894_SHARP_){
return cljs.core.conj.call(null,p1__35893_SHARP_,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p2__35894_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datascript.db.ref_QMARK_.call(null,db,a)){
return datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms)));
} else {
return new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms));
}
}
});
datascript.impl.entity._lookup_backwards = (function datascript$impl$entity$_lookup_backwards(db,eid,attr,not_found){
var temp__6736__auto__ = cljs.core.not_empty.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__6736__auto__)){
var datoms = temp__6736__auto__;
if(datascript.db.component_QMARK_.call(null,db,attr)){
return datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms)));
} else {
return cljs.core.reduce.call(null,((function (datoms,temp__6736__auto__){
return (function (p1__35895_SHARP_,p2__35896_SHARP_){
return cljs.core.conj.call(null,p1__35895_SHARP_,datascript.impl.entity.entity.call(null,db,new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(p2__35896_SHARP_)));
});})(datoms,temp__6736__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function datascript$impl$entity$multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array.call(null,val);
} else {
return null;
}
});
datascript.impl.entity.js_seq = (function datascript$impl$entity$js_seq(e){
datascript.impl.entity.touch.call(null,e);

var iter__29611__auto__ = (function datascript$impl$entity$js_seq_$_iter__35913(s__35914){
return (new cljs.core.LazySeq(null,(function (){
var s__35914__$1 = s__35914;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__35914__$1);
if(temp__6738__auto__){
var s__35914__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35914__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__35914__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__35916 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__35915 = (0);
while(true){
if((i__35915 < size__29610__auto__)){
var vec__35923 = cljs.core._nth.call(null,c__29609__auto__,i__35915);
var a = cljs.core.nth.call(null,vec__35923,(0),null);
var v = cljs.core.nth.call(null,vec__35923,(1),null);
cljs.core.chunk_append.call(null,b__35916,((datascript.db.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__35929 = (i__35915 + (1));
i__35915 = G__35929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35916),datascript$impl$entity$js_seq_$_iter__35913.call(null,cljs.core.chunk_rest.call(null,s__35914__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35916),null);
}
} else {
var vec__35926 = cljs.core.first.call(null,s__35914__$2);
var a = cljs.core.nth.call(null,vec__35926,(0),null);
var v = cljs.core.nth.call(null,vec__35926,(1),null);
return cljs.core.cons.call(null,((datascript.db.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),datascript$impl$entity$js_seq_$_iter__35913.call(null,cljs.core.rest.call(null,s__35914__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29611__auto__.call(null,cljs.core.deref.call(null,e.cache));
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
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.to_array,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__35952 = null;
var G__35952__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__35931 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__35932 = null;
var count__35933 = (0);
var i__35934 = (0);
while(true){
if((i__35934 < count__35933)){
var vec__35935 = cljs.core._nth.call(null,chunk__35932,i__35934);
var a = cljs.core.nth.call(null,vec__35935,(0),null);
var v = cljs.core.nth.call(null,vec__35935,(1),null);
f.call(null,v,a,this$);

var G__35953 = seq__35931;
var G__35954 = chunk__35932;
var G__35955 = count__35933;
var G__35956 = (i__35934 + (1));
seq__35931 = G__35953;
chunk__35932 = G__35954;
count__35933 = G__35955;
i__35934 = G__35956;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__35931);
if(temp__6738__auto__){
var seq__35931__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35931__$1)){
var c__29660__auto__ = cljs.core.chunk_first.call(null,seq__35931__$1);
var G__35957 = cljs.core.chunk_rest.call(null,seq__35931__$1);
var G__35958 = c__29660__auto__;
var G__35959 = cljs.core.count.call(null,c__29660__auto__);
var G__35960 = (0);
seq__35931 = G__35957;
chunk__35932 = G__35958;
count__35933 = G__35959;
i__35934 = G__35960;
continue;
} else {
var vec__35938 = cljs.core.first.call(null,seq__35931__$1);
var a = cljs.core.nth.call(null,vec__35938,(0),null);
var v = cljs.core.nth.call(null,vec__35938,(1),null);
f.call(null,v,a,this$);

var G__35961 = cljs.core.next.call(null,seq__35931__$1);
var G__35962 = null;
var G__35963 = (0);
var G__35964 = (0);
seq__35931 = G__35961;
chunk__35932 = G__35962;
count__35933 = G__35963;
i__35934 = G__35964;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__35952__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__35941 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__35942 = null;
var count__35943 = (0);
var i__35944 = (0);
while(true){
if((i__35944 < count__35943)){
var vec__35945 = cljs.core._nth.call(null,chunk__35942,i__35944);
var a = cljs.core.nth.call(null,vec__35945,(0),null);
var v = cljs.core.nth.call(null,vec__35945,(1),null);
f.call(use_as_this,v,a,this$);

var G__35965 = seq__35941;
var G__35966 = chunk__35942;
var G__35967 = count__35943;
var G__35968 = (i__35944 + (1));
seq__35941 = G__35965;
chunk__35942 = G__35966;
count__35943 = G__35967;
i__35944 = G__35968;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__35941);
if(temp__6738__auto__){
var seq__35941__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35941__$1)){
var c__29660__auto__ = cljs.core.chunk_first.call(null,seq__35941__$1);
var G__35969 = cljs.core.chunk_rest.call(null,seq__35941__$1);
var G__35970 = c__29660__auto__;
var G__35971 = cljs.core.count.call(null,c__29660__auto__);
var G__35972 = (0);
seq__35941 = G__35969;
chunk__35942 = G__35970;
count__35943 = G__35971;
i__35944 = G__35972;
continue;
} else {
var vec__35948 = cljs.core.first.call(null,seq__35941__$1);
var a = cljs.core.nth.call(null,vec__35948,(0),null);
var v = cljs.core.nth.call(null,vec__35948,(1),null);
f.call(use_as_this,v,a,this$);

var G__35973 = cljs.core.next.call(null,seq__35941__$1);
var G__35974 = null;
var G__35975 = (0);
var G__35976 = (0);
seq__35941 = G__35973;
chunk__35942 = G__35974;
count__35943 = G__35975;
i__35944 = G__35976;
continue;
}
} else {
return null;
}
}
break;
}
});
G__35952 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__35952__1.call(this,f);
case 2:
return G__35952__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__35952.cljs$core$IFn$_invoke$arity$1 = G__35952__1;
G__35952.cljs$core$IFn$_invoke$arity$2 = G__35952__2;
return G__35952;
})()
;

datascript.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.call(null,attr,":db/id")){
return self__.eid;
} else {
if(datascript.db.reverse_ref_QMARK_.call(null,attr)){
return datascript.impl.entity.multival__GT_js.call(null,datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,datascript.db.reverse_ref.call(null,attr),null));
} else {
var G__35951 = datascript.impl.entity.lookup_entity.call(null,this$,attr);
if(datascript.db.multival_QMARK_.call(null,self__.db,attr)){
return datascript.impl.entity.multival__GT_js.call(null,G__35951);
} else {
return G__35951;
}
}
}
});

datascript.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator.call(null,datascript.impl.entity.js_seq.call(null,this$));
});

datascript.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return datascript.impl.entity.equiv_entity.call(null,this$,other);
});

datascript.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return !((this$.get(attr) == null));
});

datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,o){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.equiv_entity.call(null,this$__$1,o);
});

datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.eid);
});

datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.seq.call(null,cljs.core.deref.call(null,self__.cache));
});

datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.count.call(null,cljs.core.deref.call(null,self__.cache));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,null);
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,attr,not_found){
var self__ = this;
var this$__$1 = this;
return datascript.impl.entity.lookup_entity.call(null,this$__$1,attr,not_found);
});

datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353),datascript.impl.entity.lookup_entity.call(null,this$__$1,k,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353)));
});

datascript.impl.entity.Entity.prototype.call = (function() {
var G__35977 = null;
var G__35977__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return datascript.impl.entity.lookup_entity.call(null,this$,k);
});
var G__35977__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return datascript.impl.entity.lookup_entity.call(null,this$,k,not_found);
});
G__35977 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__35977__2.call(this,self__,k);
case 3:
return G__35977__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__35977.cljs$core$IFn$_invoke$arity$2 = G__35977__2;
G__35977.cljs$core$IFn$_invoke$arity$3 = G__35977__3;
return G__35977;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args35930){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args35930)));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return datascript.impl.entity.lookup_entity.call(null,this$,k);
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return datascript.impl.entity.lookup_entity.call(null,this$,k,not_found);
});

datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,self__.cache),new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});

datascript.impl.entity.Entity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"eid","eid",-2094915839,null),new cljs.core.Symbol(null,"touched","touched",1031397108,null),new cljs.core.Symbol(null,"cache","cache",403508473,null)], null);
});

datascript.impl.entity.Entity.cljs$lang$type = true;

datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";

datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"datascript.impl.entity/Entity");
});

datascript.impl.entity.__GT_Entity = (function datascript$impl$entity$__GT_Entity(db,eid,touched,cache){
return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});

datascript.impl.entity.entity_QMARK_ = (function datascript$impl$entity$entity_QMARK_(x){
return (x instanceof datascript.impl.entity.Entity);
});
datascript.impl.entity.equiv_entity = (function datascript$impl$entity$equiv_entity(this$,that){
return ((that instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.call(null,this$.eid,that.eid));
});
datascript.impl.entity.lookup_entity = (function datascript$impl$entity$lookup_entity(var_args){
var args35978 = [];
var len__29970__auto___35981 = arguments.length;
var i__29971__auto___35982 = (0);
while(true){
if((i__29971__auto___35982 < len__29970__auto___35981)){
args35978.push((arguments[i__29971__auto___35982]));

var G__35983 = (i__29971__auto___35982 + (1));
i__29971__auto___35982 = G__35983;
continue;
} else {
}
break;
}

var G__35980 = args35978.length;
switch (G__35980) {
case 2:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35978.length)].join('')));

}
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$2 = (function (this$,attr){
return datascript.impl.entity.lookup_entity.call(null,this$,attr,null);
});

datascript.impl.entity.lookup_entity.cljs$core$IFn$_invoke$arity$3 = (function (this$,attr,not_found){
if(cljs.core._EQ_.call(null,attr,new cljs.core.Keyword("db","id","db/id",-1388397098))){
return this$.eid;
} else {
if(datascript.db.reverse_ref_QMARK_.call(null,attr)){
return datascript.impl.entity._lookup_backwards.call(null,this$.db,this$.eid,datascript.db.reverse_ref.call(null,attr),not_found);
} else {
var or__28749__auto__ = cljs.core.deref.call(null,this$.cache).call(null,attr);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
if(cljs.core.truth_(cljs.core.deref.call(null,this$.touched))){
return not_found;
} else {
var temp__6736__auto__ = cljs.core.not_empty.call(null,datascript.db._search.call(null,this$.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$.eid,attr], null)));
if(cljs.core.truth_(temp__6736__auto__)){
var datoms = temp__6736__auto__;
var value = datascript.impl.entity.entity_attr.call(null,this$.db,attr,datoms);
cljs.core.vreset_BANG_.call(null,this$.cache,cljs.core.assoc.call(null,cljs.core.deref.call(null,this$.cache),attr,value));

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
return cljs.core.reduce_kv.call(null,(function (acc,a,v){
return cljs.core.assoc.call(null,acc,a,((datascript.db.component_QMARK_.call(null,db,a))?((datascript.db.multival_QMARK_.call(null,db,a))?cljs.core.set.call(null,cljs.core.map.call(null,datascript.impl.entity.touch,v)):datascript.impl.entity.touch.call(null,v)):v));
}),cljs.core.PersistentArrayMap.EMPTY,a__GT_v);
});
datascript.impl.entity.datoms__GT_cache = (function datascript$impl$entity$datoms__GT_cache(db,datoms){
return cljs.core.reduce.call(null,(function (acc,part){
var a = new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,part));
return cljs.core.assoc.call(null,acc,a,datascript.impl.entity.entity_attr.call(null,db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),datoms));
});
datascript.impl.entity.touch = (function datascript$impl$entity$touch(e){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,e))){
} else {
throw (new Error("Assert failed: (entity? e)"));
}

if(cljs.core.truth_(cljs.core.deref.call(null,e.touched))){
} else {
var temp__6738__auto___35985 = cljs.core.not_empty.call(null,datascript.db._search.call(null,e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__6738__auto___35985)){
var datoms_35986 = temp__6738__auto___35985;
cljs.core.vreset_BANG_.call(null,e.cache,datascript.impl.entity.touch_components.call(null,e.db,datascript.impl.entity.datoms__GT_cache.call(null,e.db,datoms_35986)));

cljs.core.vreset_BANG_.call(null,e.touched,true);
} else {
}
}

return e;
});
goog.exportSymbol("datascript.impl.entity.Entity.prototype.get",datascript.impl.entity.Entity.prototype.get);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.has",datascript.impl.entity.Entity.prototype.has);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.forEach",datascript.impl.entity.Entity.prototype.forEach);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.key_set",datascript.impl.entity.Entity.prototype.key_set);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.value_set",datascript.impl.entity.Entity.prototype.value_set);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.entry_set",datascript.impl.entity.Entity.prototype.entry_set);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.keys",datascript.impl.entity.Entity.prototype.keys);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.values",datascript.impl.entity.Entity.prototype.values);

goog.exportSymbol("datascript.impl.entity.Entity.prototype.entries",datascript.impl.entity.Entity.prototype.entries);

goog.exportSymbol("cljs.core.ES6Iterator.prototype.next",cljs.core.ES6Iterator.prototype.next);

goog.exportSymbol("cljs.core.ES6EntriesIterator.prototype.next",cljs.core.ES6EntriesIterator.prototype.next);

//# sourceMappingURL=entity.js.map