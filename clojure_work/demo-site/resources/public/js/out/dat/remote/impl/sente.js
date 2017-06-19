// Compiled by ClojureScript 1.9.518 {}
goog.provide('dat.remote.impl.sente');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('dat.sync.client');
goog.require('dat.reactor');
goog.require('dat.sync.utils');
goog.require('dat.spec.protocols');
goog.require('com.stuartsierra.component');
goog.require('taoensso.timbre');
goog.require('taoensso.sente');
goog.require('taoensso.sente.packers.transit');

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
dat.remote.impl.sente.DBFn = (function (lang,params,code,__meta,__extmap,__hash){
this.lang = lang;
this.params = params;
this.code = code;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.remote.impl.sente.DBFn.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29424__auto__,k__29425__auto__){
var self__ = this;
var this__29424__auto____$1 = this;
return this__29424__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29425__auto__,null);
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29426__auto__,k60987,else__29427__auto__){
var self__ = this;
var this__29426__auto____$1 = this;
var G__60989 = (((k60987 instanceof cljs.core.Keyword))?k60987.fqn:null);
switch (G__60989) {
case "lang":
return self__.lang;

break;
case "params":
return self__.params;

break;
case "code":
return self__.code;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k60987,else__29427__auto__);

}
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29438__auto__,writer__29439__auto__,opts__29440__auto__){
var self__ = this;
var this__29438__auto____$1 = this;
var pr_pair__29441__auto__ = ((function (this__29438__auto____$1){
return (function (keyval__29442__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29439__auto__,cljs.core.pr_writer,""," ","",opts__29440__auto__,keyval__29442__auto__);
});})(this__29438__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29439__auto__,pr_pair__29441__auto__,"#dat.remote.impl.sente.DBFn{",", ","}",opts__29440__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lang","lang",-1819677104),self__.lang],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.DBFn.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60986){
var self__ = this;
var G__60986__$1 = this;
return (new cljs.core.RecordIter((0),G__60986__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29422__auto__){
var self__ = this;
var this__29422__auto____$1 = this;
return self__.__meta;
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29418__auto__){
var self__ = this;
var this__29418__auto____$1 = this;
return (new dat.remote.impl.sente.DBFn(self__.lang,self__.params,self__.code,self__.__meta,self__.__extmap,self__.__hash));
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29428__auto__){
var self__ = this;
var this__29428__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29419__auto__){
var self__ = this;
var this__29419__auto____$1 = this;
var h__29191__auto__ = self__.__hash;
if(!((h__29191__auto__ == null))){
return h__29191__auto__;
} else {
var h__29191__auto____$1 = cljs.core.hash_imap.call(null,this__29419__auto____$1);
self__.__hash = h__29191__auto____$1;

return h__29191__auto____$1;
}
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__29420__auto__,other__29421__auto__){
var self__ = this;
var this__29420__auto____$1 = this;
if(cljs.core.truth_((function (){var and__28737__auto__ = other__29421__auto__;
if(cljs.core.truth_(and__28737__auto__)){
return ((this__29420__auto____$1.constructor === other__29421__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__29420__auto____$1,other__29421__auto__));
} else {
return and__28737__auto__;
}
})())){
return true;
} else {
return false;
}
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29433__auto__,k__29434__auto__){
var self__ = this;
var this__29433__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"lang","lang",-1819677104),null,new cljs.core.Keyword(null,"code","code",1586293142),null], null), null),k__29434__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29433__auto____$1),self__.__meta),k__29434__auto__);
} else {
return (new dat.remote.impl.sente.DBFn(self__.lang,self__.params,self__.code,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29434__auto__)),null));
}
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29431__auto__,k__29432__auto__,G__60986){
var self__ = this;
var this__29431__auto____$1 = this;
var pred__60990 = cljs.core.keyword_identical_QMARK_;
var expr__60991 = k__29432__auto__;
if(cljs.core.truth_(pred__60990.call(null,new cljs.core.Keyword(null,"lang","lang",-1819677104),expr__60991))){
return (new dat.remote.impl.sente.DBFn(G__60986,self__.params,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__60990.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__60991))){
return (new dat.remote.impl.sente.DBFn(self__.lang,G__60986,self__.code,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__60990.call(null,new cljs.core.Keyword(null,"code","code",1586293142),expr__60991))){
return (new dat.remote.impl.sente.DBFn(self__.lang,self__.params,G__60986,self__.__meta,self__.__extmap,null));
} else {
return (new dat.remote.impl.sente.DBFn(self__.lang,self__.params,self__.code,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29432__auto__,G__60986),null));
}
}
}
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29436__auto__){
var self__ = this;
var this__29436__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lang","lang",-1819677104),self__.lang],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"code","code",1586293142),self__.code],null))], null),self__.__extmap));
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29423__auto__,G__60986){
var self__ = this;
var this__29423__auto____$1 = this;
return (new dat.remote.impl.sente.DBFn(self__.lang,self__.params,self__.code,G__60986,self__.__extmap,self__.__hash));
});

dat.remote.impl.sente.DBFn.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29429__auto__,entry__29430__auto__){
var self__ = this;
var this__29429__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29430__auto__)){
return this__29429__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29430__auto__,(0)),cljs.core._nth.call(null,entry__29430__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29429__auto____$1,entry__29430__auto__);
}
});

dat.remote.impl.sente.DBFn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lang","lang",-179145577,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"code","code",-1068142627,null)], null);
});

dat.remote.impl.sente.DBFn.cljs$lang$type = true;

dat.remote.impl.sente.DBFn.cljs$lang$ctorPrSeq = (function (this__29460__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.remote.impl.sente/DBFn");
});

dat.remote.impl.sente.DBFn.cljs$lang$ctorPrWriter = (function (this__29460__auto__,writer__29461__auto__){
return cljs.core._write.call(null,writer__29461__auto__,"dat.remote.impl.sente/DBFn");
});

dat.remote.impl.sente.__GT_DBFn = (function dat$remote$impl$sente$__GT_DBFn(lang,params,code){
return (new dat.remote.impl.sente.DBFn(lang,params,code,null,null,null));
});

dat.remote.impl.sente.map__GT_DBFn = (function dat$remote$impl$sente$map__GT_DBFn(G__60988){
return (new dat.remote.impl.sente.DBFn(new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(G__60988),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__60988),new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(G__60988),null,cljs.core.dissoc.call(null,G__60988,new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"code","code",1586293142)),null));
});


cljs.reader.register_tag_parser_BANG_.call(null,new cljs.core.Symbol("db","fn","db/fn",465270057,null),cljs.core.pr_str);
dat.remote.impl.sente.default_sente_options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chsk-route","chsk-route",28990043),"/chsk",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"packer","packer",66077544),taoensso.sente.packers.transit.get_transit_packer.call(null)], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {dat.spec.protocols.PRemoteEventChan}
 * @implements {dat.spec.protocols.PRemoteSendEvent}
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
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.remote.impl.sente.SenteRemote = (function (chsk,ch_recv,out_chan,send_fn,state,open_QMARK_,sente_options,__meta,__extmap,__hash){
this.chsk = chsk;
this.ch_recv = ch_recv;
this.out_chan = out_chan;
this.send_fn = send_fn;
this.state = state;
this.open_QMARK_ = open_QMARK_;
this.sente_options = sente_options;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.remote.impl.sente.SenteRemote.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29424__auto__,k__29425__auto__){
var self__ = this;
var this__29424__auto____$1 = this;
return this__29424__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29425__auto__,null);
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29426__auto__,k60995,else__29427__auto__){
var self__ = this;
var this__29426__auto____$1 = this;
var G__60997 = (((k60995 instanceof cljs.core.Keyword))?k60995.fqn:null);
switch (G__60997) {
case "chsk":
return self__.chsk;

break;
case "ch-recv":
return self__.ch_recv;

break;
case "out-chan":
return self__.out_chan;

break;
case "send-fn":
return self__.send_fn;

break;
case "state":
return self__.state;

break;
case "open?":
return self__.open_QMARK_;

break;
case "sente-options":
return self__.sente_options;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k60995,else__29427__auto__);

}
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29438__auto__,writer__29439__auto__,opts__29440__auto__){
var self__ = this;
var this__29438__auto____$1 = this;
var pr_pair__29441__auto__ = ((function (this__29438__auto____$1){
return (function (keyval__29442__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29439__auto__,cljs.core.pr_writer,""," ","",opts__29440__auto__,keyval__29442__auto__);
});})(this__29438__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29439__auto__,pr_pair__29441__auto__,"#dat.remote.impl.sente.SenteRemote{",", ","}",opts__29440__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chsk","chsk",-863703081),self__.chsk],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),self__.ch_recv],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"out-chan","out-chan",384315017),self__.out_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send-fn","send-fn",351002041),self__.send_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),self__.sente_options],null))], null),self__.__extmap));
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60994){
var self__ = this;
var G__60994__$1 = this;
return (new cljs.core.RecordIter((0),G__60994__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),new cljs.core.Keyword(null,"out-chan","out-chan",384315017),new cljs.core.Keyword(null,"send-fn","send-fn",351002041),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"open?","open?",1238443125),new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29422__auto__){
var self__ = this;
var this__29422__auto____$1 = this;
return self__.__meta;
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29418__auto__){
var self__ = this;
var this__29418__auto____$1 = this;
return (new dat.remote.impl.sente.SenteRemote(self__.chsk,self__.ch_recv,self__.out_chan,self__.send_fn,self__.state,self__.open_QMARK_,self__.sente_options,self__.__meta,self__.__extmap,self__.__hash));
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29428__auto__){
var self__ = this;
var this__29428__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$PRemoteSendEvent$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$PRemoteSendEvent$send_event_BANG_$arity$2 = (function (component,event){
var self__ = this;
var component__$1 = this;
return self__.send_fn.call(null,event);
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29419__auto__){
var self__ = this;
var this__29419__auto____$1 = this;
var h__29191__auto__ = self__.__hash;
if(!((h__29191__auto__ == null))){
return h__29191__auto__;
} else {
var h__29191__auto____$1 = cljs.core.hash_imap.call(null,this__29419__auto____$1);
self__.__hash = h__29191__auto____$1;

return h__29191__auto____$1;
}
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__29420__auto__,other__29421__auto__){
var self__ = this;
var this__29420__auto____$1 = this;
if(cljs.core.truth_((function (){var and__28737__auto__ = other__29421__auto__;
if(cljs.core.truth_(and__28737__auto__)){
return ((this__29420__auto____$1.constructor === other__29421__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__29420__auto____$1,other__29421__auto__));
} else {
return and__28737__auto__;
}
})())){
return true;
} else {
return false;
}
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29433__auto__,k__29434__auto__){
var self__ = this;
var this__29433__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"out-chan","out-chan",384315017),null,new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"open?","open?",1238443125),null,new cljs.core.Keyword(null,"chsk","chsk",-863703081),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),k__29434__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29433__auto____$1),self__.__meta),k__29434__auto__);
} else {
return (new dat.remote.impl.sente.SenteRemote(self__.chsk,self__.ch_recv,self__.out_chan,self__.send_fn,self__.state,self__.open_QMARK_,self__.sente_options,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29434__auto__)),null));
}
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29431__auto__,k__29432__auto__,G__60994){
var self__ = this;
var this__29431__auto____$1 = this;
var pred__60998 = cljs.core.keyword_identical_QMARK_;
var expr__60999 = k__29432__auto__;
if(cljs.core.truth_(pred__60998.call(null,new cljs.core.Keyword(null,"chsk","chsk",-863703081),expr__60999))){
return (new dat.remote.impl.sente.SenteRemote(G__60994,self__.ch_recv,self__.out_chan,self__.send_fn,self__.state,self__.open_QMARK_,self__.sente_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__60998.call(null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),expr__60999))){
return (new dat.remote.impl.sente.SenteRemote(self__.chsk,G__60994,self__.out_chan,self__.send_fn,self__.state,self__.open_QMARK_,self__.sente_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__60998.call(null,new cljs.core.Keyword(null,"out-chan","out-chan",384315017),expr__60999))){
return (new dat.remote.impl.sente.SenteRemote(self__.chsk,self__.ch_recv,G__60994,self__.send_fn,self__.state,self__.open_QMARK_,self__.sente_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__60998.call(null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),expr__60999))){
return (new dat.remote.impl.sente.SenteRemote(self__.chsk,self__.ch_recv,self__.out_chan,G__60994,self__.state,self__.open_QMARK_,self__.sente_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__60998.call(null,new cljs.core.Keyword(null,"state","state",-1988618099),expr__60999))){
return (new dat.remote.impl.sente.SenteRemote(self__.chsk,self__.ch_recv,self__.out_chan,self__.send_fn,G__60994,self__.open_QMARK_,self__.sente_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__60998.call(null,new cljs.core.Keyword(null,"open?","open?",1238443125),expr__60999))){
return (new dat.remote.impl.sente.SenteRemote(self__.chsk,self__.ch_recv,self__.out_chan,self__.send_fn,self__.state,G__60994,self__.sente_options,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__60998.call(null,new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),expr__60999))){
return (new dat.remote.impl.sente.SenteRemote(self__.chsk,self__.ch_recv,self__.out_chan,self__.send_fn,self__.state,self__.open_QMARK_,G__60994,self__.__meta,self__.__extmap,null));
} else {
return (new dat.remote.impl.sente.SenteRemote(self__.chsk,self__.ch_recv,self__.out_chan,self__.send_fn,self__.state,self__.open_QMARK_,self__.sente_options,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29432__auto__,G__60994),null));
}
}
}
}
}
}
}
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29436__auto__){
var self__ = this;
var this__29436__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chsk","chsk",-863703081),self__.chsk],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),self__.ch_recv],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"out-chan","out-chan",384315017),self__.out_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"send-fn","send-fn",351002041),self__.send_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state","state",-1988618099),self__.state],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"open?","open?",1238443125),self__.open_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742),self__.sente_options],null))], null),self__.__extmap));
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29423__auto__,G__60994){
var self__ = this;
var this__29423__auto____$1 = this;
return (new dat.remote.impl.sente.SenteRemote(self__.chsk,self__.ch_recv,self__.out_chan,self__.send_fn,self__.state,self__.open_QMARK_,self__.sente_options,G__60994,self__.__extmap,self__.__hash));
});

dat.remote.impl.sente.SenteRemote.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29429__auto__,entry__29430__auto__){
var self__ = this;
var this__29429__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29430__auto__)){
return this__29429__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29430__auto__,(0)),cljs.core._nth.call(null,entry__29430__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29429__auto____$1,entry__29430__auto__);
}
});

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$PRemoteEventChan$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.SenteRemote.prototype.dat$spec$protocols$PRemoteEventChan$remote_event_chan$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return self__.out_chan;
});

dat.remote.impl.sente.SenteRemote.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.remote.impl.sente.SenteRemote.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.remote.impl.sente","/tmp/form-init6286146101766555450.clj",34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting SenteRemote Component"], null);
});})(component__$1))
,null)),null,303595352);

var sente_options__$1 = cljs.core.merge.call(null,dat.remote.impl.sente.default_sente_options,self__.sente_options);
var out_chan__$1 = (function (){var or__28749__auto__ = self__.out_chan;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return cljs.core.async.chan.call(null,(100));
}
})();
var sente_fns = taoensso.sente.make_channel_socket_BANG_.call(null,new cljs.core.Keyword(null,"chsk-route","chsk-route",28990043).cljs$core$IFn$_invoke$arity$1(sente_options__$1),cljs.core.dissoc.call(null,sente_options__$1,new cljs.core.Keyword(null,"chsk-route","chsk-route",28990043)));
var ch_recv__$1 = new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(sente_fns);
cljs.core.async.pipeline.call(null,(1),out_chan__$1,cljs.core.map.call(null,((function (sente_options__$1,out_chan__$1,sente_fns,ch_recv__$1,component__$1){
return (function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote.impl.sente","event","dat.remote.impl.sente/event",1757332610),new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(x)], null);
});})(sente_options__$1,out_chan__$1,sente_fns,ch_recv__$1,component__$1))
),ch_recv__$1);

return cljs.core.merge.call(null,component__$1,sente_fns,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"out-chan","out-chan",384315017),out_chan__$1,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.atom.call(null,false)], null));
});

dat.remote.impl.sente.SenteRemote.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.remote.impl.sente","/tmp/form-init6286146101766555450.clj",50,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stopping SenteRemote component"], null);
});})(component__$1))
,null)),null,-2073434895);

try{taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.remote.impl.sente","/tmp/form-init6286146101766555450.clj",54,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SenteRemote stopped successfully"], null);
});})(component__$1))
,null)),null,32223570);

return cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"out-chan","out-chan",384315017),null);
}catch (e61001){var e = e61001;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.remote.impl.sente","/tmp/form-init6286146101766555450.clj",57,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error stopping SenteRemote:",e], null);
});})(e,component__$1))
,null)),null,-1788131624);

return component__$1;
}});

dat.remote.impl.sente.SenteRemote.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"chsk","chsk",776828446,null),new cljs.core.Symbol(null,"ch-recv","ch-recv",649614666,null),new cljs.core.Symbol(null,"out-chan","out-chan",2024846544,null),new cljs.core.Symbol(null,"send-fn","send-fn",1991533568,null),new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"open?","open?",-1415992644,null),new cljs.core.Symbol(null,"sente-options","sente-options",436512785,null)], null);
});

dat.remote.impl.sente.SenteRemote.cljs$lang$type = true;

dat.remote.impl.sente.SenteRemote.cljs$lang$ctorPrSeq = (function (this__29460__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.remote.impl.sente/SenteRemote");
});

dat.remote.impl.sente.SenteRemote.cljs$lang$ctorPrWriter = (function (this__29460__auto__,writer__29461__auto__){
return cljs.core._write.call(null,writer__29461__auto__,"dat.remote.impl.sente/SenteRemote");
});

dat.remote.impl.sente.__GT_SenteRemote = (function dat$remote$impl$sente$__GT_SenteRemote(chsk,ch_recv,out_chan,send_fn,state,open_QMARK_,sente_options){
return (new dat.remote.impl.sente.SenteRemote(chsk,ch_recv,out_chan,send_fn,state,open_QMARK_,sente_options,null,null,null));
});

dat.remote.impl.sente.map__GT_SenteRemote = (function dat$remote$impl$sente$map__GT_SenteRemote(G__60996){
return (new dat.remote.impl.sente.SenteRemote(new cljs.core.Keyword(null,"chsk","chsk",-863703081).cljs$core$IFn$_invoke$arity$1(G__60996),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(G__60996),new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(G__60996),new cljs.core.Keyword(null,"send-fn","send-fn",351002041).cljs$core$IFn$_invoke$arity$1(G__60996),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(G__60996),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(G__60996),new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742).cljs$core$IFn$_invoke$arity$1(G__60996),null,cljs.core.dissoc.call(null,G__60996,new cljs.core.Keyword(null,"chsk","chsk",-863703081),new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),new cljs.core.Keyword(null,"out-chan","out-chan",384315017),new cljs.core.Keyword(null,"send-fn","send-fn",351002041),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"open?","open?",1238443125),new cljs.core.Keyword(null,"sente-options","sente-options",-1204018742)),null));
});

/**
 * Options include `:sente-options`, which is passed as the second argument to `sente/make-channel-socket!`.
 *   Additionally, the `:chsk-route` option of the `:sente-options` map is passed as the first argument to
 *   `sente/make-channel-socket!`, assuming you don't want to use the default (`"chsk"`). You can see all
 *   datsync defaults for these options in `default-sente-options`.
 * 
 *   Additionally, note that you can specify via the options map your own `:out-chan`, which is the channel on which
 *   output messages get put (the result of calling `dat.spec.protocols/remote-event-chan` on this system component).
 */
dat.remote.impl.sente.new_sente_remote = (function dat$remote$impl$sente$new_sente_remote(var_args){
var args61003 = [];
var len__29970__auto___61006 = arguments.length;
var i__29971__auto___61007 = (0);
while(true){
if((i__29971__auto___61007 < len__29970__auto___61006)){
args61003.push((arguments[i__29971__auto___61007]));

var G__61008 = (i__29971__auto___61007 + (1));
i__29971__auto___61007 = G__61008;
continue;
} else {
}
break;
}

var G__61005 = args61003.length;
switch (G__61005) {
case 0:
return dat.remote.impl.sente.new_sente_remote.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dat.remote.impl.sente.new_sente_remote.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args61003.length)].join('')));

}
});

dat.remote.impl.sente.new_sente_remote.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.remote.impl.sente.new_sente_remote.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

dat.remote.impl.sente.new_sente_remote.cljs$core$IFn$_invoke$arity$1 = (function (options){
return dat.remote.impl.sente.map__GT_SenteRemote.call(null,options);
});

dat.remote.impl.sente.new_sente_remote.cljs$lang$maxFixedArity = 1;

dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.remote.impl.sente","event","dat.remote.impl.sente/event",1757332610),(function (app,db,p__61010){
var vec__61011 = p__61010;
var _ = cljs.core.nth.call(null,vec__61011,(0),null);
var sente_message = cljs.core.nth.call(null,vec__61011,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.remote.impl.sente","/tmp/form-init6286146101766555450.clj",89,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__61011,_,sente_message){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sente message recieved:",cljs.core.first.call(null,sente_message)], null);
});})(vec__61011,_,sente_message))
,null)),null,995070526);

return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sente_message], null));
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),(function (app,db,p__61014){
var vec__61015 = p__61014;
var _ = cljs.core.nth.call(null,vec__61015,(0),null);
var message = cljs.core.nth.call(null,vec__61015,(1),null);
try{if(cljs.core.truth_((function (){var or__28749__auto__ = new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,message));
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(message);
}
})())){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.remote.impl.sente","/tmp/form-init6286146101766555450.clj",113,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__61015,_,message){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["First channel socket open; Sending bootstrap message"], null);
});})(vec__61015,_,message))
,null)),null,-615389631);

return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.remote","connected","dat.remote/connected",-95364560),true], null)], null));
} else {
return db;
}
}catch (e61018){var e = e61018;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.remote.impl.sente","/tmp/form-init6286146101766555450.clj",119,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,vec__61015,_,message){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Exception handling :chsk/state:",e], null);
});})(e,vec__61015,_,message))
,null)),null,1701991318);
}}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304),(function() { 
var G__61019__delegate = function (args){
return true;
};
var G__61019 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__61020__i = 0, G__61020__a = new Array(arguments.length -  0);
while (G__61020__i < G__61020__a.length) {G__61020__a[G__61020__i] = arguments[G__61020__i + 0]; ++G__61020__i;}
  args = new cljs.core.IndexedSeq(G__61020__a,0);
} 
return G__61019__delegate.call(this,args);};
G__61019.cljs$lang$maxFixedArity = 0;
G__61019.cljs$lang$applyTo = (function (arglist__61021){
var args = cljs.core.seq(arglist__61021);
return G__61019__delegate(args);
});
G__61019.cljs$core$IFn$_invoke$arity$variadic = G__61019__delegate;
return G__61019;
})()
);
dat.reactor.register_handler.call(null,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),(function (app,db,p__61022){
var vec__61023 = p__61022;
var _ = cljs.core.nth.call(null,vec__61023,(0),null);
var map__61026 = cljs.core.nth.call(null,vec__61023,(1),null);
var map__61026__$1 = ((((!((map__61026 == null)))?((((map__61026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61026.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61026):map__61026);
var ev_msg = map__61026__$1;
var _QMARK_data = cljs.core.get.call(null,map__61026__$1,new cljs.core.Keyword(null,"?data","?data",-9471433));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"dat.remote.impl.sente","/tmp/form-init6286146101766555450.clj",127,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__61023,_,map__61026,map__61026__$1,ev_msg,_QMARK_data){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Calling :chsk/handshare! You should probably write something here! (reactor/register-handler :chsk/handshake (fn [app db [_ hs-msg]] ...))"], null);
});})(vec__61023,_,map__61026,map__61026__$1,ev_msg,_QMARK_data))
,null)),null,784293576);

return db;
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),(function (app,db,p__61028){
var vec__61029 = p__61028;
var _ = cljs.core.nth.call(null,vec__61029,(0),null);
var event = cljs.core.nth.call(null,vec__61029,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.remote.impl.sente","/tmp/form-init6286146101766555450.clj",136,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__61029,_,event){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":chsk/recv for event-id:",cljs.core.first.call(null,event)], null);
});})(vec__61029,_,event))
,null)),null,238476697);

return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [event], null));
}));

//# sourceMappingURL=sente.js.map