// Compiled by ClojureScript 1.9.518 {}
goog.provide('dat.reactor.dispatcher');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('com.stuartsierra.component');
goog.require('dat.spec.protocols');

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
 * @implements {dat.spec.protocols.PDispatcher}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.reactor.dispatcher.StrictlyOrderedDispatcher = (function (dispatch_chan,__meta,__extmap,__hash){
this.dispatch_chan = dispatch_chan;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29424__auto__,k__29425__auto__){
var self__ = this;
var this__29424__auto____$1 = this;
return this__29424__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29425__auto__,null);
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29426__auto__,k49927,else__29427__auto__){
var self__ = this;
var this__29426__auto____$1 = this;
var G__49929 = (((k49927 instanceof cljs.core.Keyword))?k49927.fqn:null);
switch (G__49929) {
case "dispatch-chan":
return self__.dispatch_chan;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49927,else__29427__auto__);

}
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29438__auto__,writer__29439__auto__,opts__29440__auto__){
var self__ = this;
var this__29438__auto____$1 = this;
var pr_pair__29441__auto__ = ((function (this__29438__auto____$1){
return (function (keyval__29442__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29439__auto__,cljs.core.pr_writer,""," ","",opts__29440__auto__,keyval__29442__auto__);
});})(this__29438__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29439__auto__,pr_pair__29441__auto__,"#dat.reactor.dispatcher.StrictlyOrderedDispatcher{",", ","}",opts__29440__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575),self__.dispatch_chan],null))], null),self__.__extmap));
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49926){
var self__ = this;
var G__49926__$1 = this;
return (new cljs.core.RecordIter((0),G__49926__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29422__auto__){
var self__ = this;
var this__29422__auto____$1 = this;
return self__.__meta;
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29418__auto__){
var self__ = this;
var this__29418__auto____$1 = this;
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(self__.dispatch_chan,self__.__meta,self__.__extmap,self__.__hash));
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29428__auto__){
var self__ = this;
var this__29428__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29419__auto__){
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

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__29420__auto__,other__29421__auto__){
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

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.dat$spec$protocols$PDispatcher$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$3 = (function (component,event,level){
var self__ = this;
var component__$1 = this;
var c__40635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto__,component__$1){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto__,component__$1){
return (function (state_49933){
var state_val_49934 = (state_49933[(1)]);
if((state_val_49934 === (1))){
var state_49933__$1 = state_49933;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49933__$1,(2),self__.dispatch_chan,event);
} else {
if((state_val_49934 === (2))){
var inst_49931 = (state_49933[(2)]);
var state_49933__$1 = state_49933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49933__$1,inst_49931);
} else {
return null;
}
}
});})(c__40635__auto__,component__$1))
;
return ((function (switch__40521__auto__,c__40635__auto__,component__$1){
return (function() {
var dat$reactor$dispatcher$state_machine__40522__auto__ = null;
var dat$reactor$dispatcher$state_machine__40522__auto____0 = (function (){
var statearr_49938 = [null,null,null,null,null,null,null];
(statearr_49938[(0)] = dat$reactor$dispatcher$state_machine__40522__auto__);

(statearr_49938[(1)] = (1));

return statearr_49938;
});
var dat$reactor$dispatcher$state_machine__40522__auto____1 = (function (state_49933){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_49933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e49939){if((e49939 instanceof Object)){
var ex__40525__auto__ = e49939;
var statearr_49940_49946 = state_49933;
(statearr_49940_49946[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49947 = state_49933;
state_49933 = G__49947;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
dat$reactor$dispatcher$state_machine__40522__auto__ = function(state_49933){
switch(arguments.length){
case 0:
return dat$reactor$dispatcher$state_machine__40522__auto____0.call(this);
case 1:
return dat$reactor$dispatcher$state_machine__40522__auto____1.call(this,state_49933);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$reactor$dispatcher$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = dat$reactor$dispatcher$state_machine__40522__auto____0;
dat$reactor$dispatcher$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = dat$reactor$dispatcher$state_machine__40522__auto____1;
return dat$reactor$dispatcher$state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto__,component__$1))
})();
var state__40637__auto__ = (function (){var statearr_49941 = f__40636__auto__.call(null);
(statearr_49941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto__);

return statearr_49941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto__,component__$1))
);

return c__40635__auto__;
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.dat$spec$protocols$PDispatcher$dispatcher_event_chan$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return self__.dispatch_chan;
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29433__auto__,k__29434__auto__){
var self__ = this;
var this__29433__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575),null], null), null),k__29434__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29433__auto____$1),self__.__meta),k__29434__auto__);
} else {
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(self__.dispatch_chan,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29434__auto__)),null));
}
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29431__auto__,k__29432__auto__,G__49926){
var self__ = this;
var this__29431__auto____$1 = this;
var pred__49942 = cljs.core.keyword_identical_QMARK_;
var expr__49943 = k__29432__auto__;
if(cljs.core.truth_(pred__49942.call(null,new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575),expr__49943))){
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(G__49926,self__.__meta,self__.__extmap,null));
} else {
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(self__.dispatch_chan,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29432__auto__,G__49926),null));
}
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29436__auto__){
var self__ = this;
var this__29436__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575),self__.dispatch_chan],null))], null),self__.__extmap));
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29423__auto__,G__49926){
var self__ = this;
var this__29423__auto____$1 = this;
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(self__.dispatch_chan,G__49926,self__.__extmap,self__.__hash));
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29429__auto__,entry__29430__auto__){
var self__ = this;
var this__29429__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29430__auto__)){
return this__29429__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29430__auto__,(0)),cljs.core._nth.call(null,entry__29430__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29429__auto____$1,entry__29430__auto__);
}
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.dispatcher","/tmp/form-init6286146101766555450.clj",45,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting StrictlyOrderedDispatcher"], null);
});})(component__$1))
,null)),null,1831619811);

var component__$2 = cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575),(function (){var or__28749__auto__ = self__.dispatch_chan;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return cljs.core.async.chan.call(null,(100));
}
})());
return component__$2;
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.dispatcher","/tmp/form-init6286146101766555450.clj",50,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stopping StrictlyOrderedDispatcher"], null);
});})(component__$1))
,null)),null,1189198866);

if(cljs.core.truth_(self__.dispatch_chan)){
cljs.core.async.close_BANG_.call(null,self__.dispatch_chan);
} else {
}

return cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575),null);
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-chan","dispatch-chan",-2025542194,null)], null);
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.cljs$lang$type = true;

dat.reactor.dispatcher.StrictlyOrderedDispatcher.cljs$lang$ctorPrSeq = (function (this__29460__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.reactor.dispatcher/StrictlyOrderedDispatcher");
});

dat.reactor.dispatcher.StrictlyOrderedDispatcher.cljs$lang$ctorPrWriter = (function (this__29460__auto__,writer__29461__auto__){
return cljs.core._write.call(null,writer__29461__auto__,"dat.reactor.dispatcher/StrictlyOrderedDispatcher");
});

dat.reactor.dispatcher.__GT_StrictlyOrderedDispatcher = (function dat$reactor$dispatcher$__GT_StrictlyOrderedDispatcher(dispatch_chan){
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(dispatch_chan,null,null,null));
});

dat.reactor.dispatcher.map__GT_StrictlyOrderedDispatcher = (function dat$reactor$dispatcher$map__GT_StrictlyOrderedDispatcher(G__49928){
return (new dat.reactor.dispatcher.StrictlyOrderedDispatcher(new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575).cljs$core$IFn$_invoke$arity$1(G__49928),null,cljs.core.dissoc.call(null,G__49928,new cljs.core.Keyword(null,"dispatch-chan","dispatch-chan",628893575)),null));
});

/**
 * Creates a new strictly ordered dispatcher. This is fine for most cases, and ensures that all events are
 *   handled in the order they were dispatched (or should...). Can specify `{:dispatch-chan your-chan}` to customize
 *   the flow.
 */
dat.reactor.dispatcher.new_strictly_ordered_dispatcher = (function dat$reactor$dispatcher$new_strictly_ordered_dispatcher(var_args){
var args49948 = [];
var len__29970__auto___49951 = arguments.length;
var i__29971__auto___49952 = (0);
while(true){
if((i__29971__auto___49952 < len__29970__auto___49951)){
args49948.push((arguments[i__29971__auto___49952]));

var G__49953 = (i__29971__auto___49952 + (1));
i__29971__auto___49952 = G__49953;
continue;
} else {
}
break;
}

var G__49950 = args49948.length;
switch (G__49950) {
case 1:
return dat.reactor.dispatcher.new_strictly_ordered_dispatcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dat.reactor.dispatcher.new_strictly_ordered_dispatcher.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args49948.length)].join('')));

}
});

dat.reactor.dispatcher.new_strictly_ordered_dispatcher.cljs$core$IFn$_invoke$arity$1 = (function (options){
return dat.reactor.dispatcher.map__GT_StrictlyOrderedDispatcher.call(null,options);
});

dat.reactor.dispatcher.new_strictly_ordered_dispatcher.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.reactor.dispatcher.new_strictly_ordered_dispatcher.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

dat.reactor.dispatcher.new_strictly_ordered_dispatcher.cljs$lang$maxFixedArity = 1;


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
 * @implements {dat.spec.protocols.PDispatcher}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.reactor.dispatcher.ErrorPriorityDispatcher = (function (default_chan,error_chan,event_chan,__meta,__extmap,__hash){
this.default_chan = default_chan;
this.error_chan = error_chan;
this.event_chan = event_chan;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29424__auto__,k__29425__auto__){
var self__ = this;
var this__29424__auto____$1 = this;
return this__29424__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29425__auto__,null);
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29426__auto__,k49956,else__29427__auto__){
var self__ = this;
var this__29426__auto____$1 = this;
var G__49958 = (((k49956 instanceof cljs.core.Keyword))?k49956.fqn:null);
switch (G__49958) {
case "default-chan":
return self__.default_chan;

break;
case "error-chan":
return self__.error_chan;

break;
case "event-chan":
return self__.event_chan;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k49956,else__29427__auto__);

}
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29438__auto__,writer__29439__auto__,opts__29440__auto__){
var self__ = this;
var this__29438__auto____$1 = this;
var pr_pair__29441__auto__ = ((function (this__29438__auto____$1){
return (function (keyval__29442__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29439__auto__,cljs.core.pr_writer,""," ","",opts__29440__auto__,keyval__29442__auto__);
});})(this__29438__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29439__auto__,pr_pair__29441__auto__,"#dat.reactor.dispatcher.ErrorPriorityDispatcher{",", ","}",opts__29440__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default-chan","default-chan",-1967069873),self__.default_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-chan","error-chan",-642264783),self__.error_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),self__.event_chan],null))], null),self__.__extmap));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49955){
var self__ = this;
var G__49955__$1 = this;
return (new cljs.core.RecordIter((0),G__49955__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default-chan","default-chan",-1967069873),new cljs.core.Keyword(null,"error-chan","error-chan",-642264783),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29422__auto__){
var self__ = this;
var this__29422__auto____$1 = this;
return self__.__meta;
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29418__auto__){
var self__ = this;
var this__29418__auto____$1 = this;
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_chan,self__.error_chan,self__.event_chan,self__.__meta,self__.__extmap,self__.__hash));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29428__auto__){
var self__ = this;
var this__29428__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29419__auto__){
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

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__29420__auto__,other__29421__auto__){
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

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.dat$spec$protocols$PDispatcher$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$3 = (function (component,event,level){
var self__ = this;
var component__$1 = this;
var c__40635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto__,component__$1){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto__,component__$1){
return (function (state_49967){
var state_val_49968 = (state_49967[(1)]);
if((state_val_49968 === (1))){
var inst_49959 = cljs.core._EQ_.call(null,level,new cljs.core.Keyword(null,"error","error",-978969032));
var state_49967__$1 = state_49967;
if(inst_49959){
var statearr_49969_50012 = state_49967__$1;
(statearr_49969_50012[(1)] = (3));

} else {
var statearr_49970_50013 = state_49967__$1;
(statearr_49970_50013[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49968 === (2))){
var inst_49965 = (state_49967[(2)]);
var state_49967__$1 = state_49967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49967__$1,inst_49965);
} else {
if((state_val_49968 === (3))){
var state_49967__$1 = state_49967;
var statearr_49971_50014 = state_49967__$1;
(statearr_49971_50014[(2)] = self__.error_chan);

(statearr_49971_50014[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49968 === (4))){
var state_49967__$1 = state_49967;
var statearr_49972_50015 = state_49967__$1;
(statearr_49972_50015[(2)] = self__.default_chan);

(statearr_49972_50015[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49968 === (5))){
var inst_49963 = (state_49967[(2)]);
var state_49967__$1 = state_49967;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49967__$1,(2),inst_49963,event);
} else {
return null;
}
}
}
}
}
});})(c__40635__auto__,component__$1))
;
return ((function (switch__40521__auto__,c__40635__auto__,component__$1){
return (function() {
var dat$reactor$dispatcher$state_machine__40522__auto__ = null;
var dat$reactor$dispatcher$state_machine__40522__auto____0 = (function (){
var statearr_49976 = [null,null,null,null,null,null,null];
(statearr_49976[(0)] = dat$reactor$dispatcher$state_machine__40522__auto__);

(statearr_49976[(1)] = (1));

return statearr_49976;
});
var dat$reactor$dispatcher$state_machine__40522__auto____1 = (function (state_49967){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_49967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e49977){if((e49977 instanceof Object)){
var ex__40525__auto__ = e49977;
var statearr_49978_50016 = state_49967;
(statearr_49978_50016[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50017 = state_49967;
state_49967 = G__50017;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
dat$reactor$dispatcher$state_machine__40522__auto__ = function(state_49967){
switch(arguments.length){
case 0:
return dat$reactor$dispatcher$state_machine__40522__auto____0.call(this);
case 1:
return dat$reactor$dispatcher$state_machine__40522__auto____1.call(this,state_49967);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$reactor$dispatcher$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = dat$reactor$dispatcher$state_machine__40522__auto____0;
dat$reactor$dispatcher$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = dat$reactor$dispatcher$state_machine__40522__auto____1;
return dat$reactor$dispatcher$state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto__,component__$1))
})();
var state__40637__auto__ = (function (){var statearr_49979 = f__40636__auto__.call(null);
(statearr_49979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto__);

return statearr_49979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto__,component__$1))
);

return c__40635__auto__;
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.dat$spec$protocols$PDispatcher$dispatcher_event_chan$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
return self__.event_chan;
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29433__auto__,k__29434__auto__){
var self__ = this;
var this__29433__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),null,new cljs.core.Keyword(null,"default-chan","default-chan",-1967069873),null,new cljs.core.Keyword(null,"error-chan","error-chan",-642264783),null], null), null),k__29434__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29433__auto____$1),self__.__meta),k__29434__auto__);
} else {
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_chan,self__.error_chan,self__.event_chan,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29434__auto__)),null));
}
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29431__auto__,k__29432__auto__,G__49955){
var self__ = this;
var this__29431__auto____$1 = this;
var pred__49980 = cljs.core.keyword_identical_QMARK_;
var expr__49981 = k__29432__auto__;
if(cljs.core.truth_(pred__49980.call(null,new cljs.core.Keyword(null,"default-chan","default-chan",-1967069873),expr__49981))){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(G__49955,self__.error_chan,self__.event_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49980.call(null,new cljs.core.Keyword(null,"error-chan","error-chan",-642264783),expr__49981))){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_chan,G__49955,self__.event_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__49980.call(null,new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),expr__49981))){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_chan,self__.error_chan,G__49955,self__.__meta,self__.__extmap,null));
} else {
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_chan,self__.error_chan,self__.event_chan,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29432__auto__,G__49955),null));
}
}
}
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29436__auto__){
var self__ = this;
var this__29436__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default-chan","default-chan",-1967069873),self__.default_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error-chan","error-chan",-642264783),self__.error_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),self__.event_chan],null))], null),self__.__extmap));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29423__auto__,G__49955){
var self__ = this;
var this__29423__auto____$1 = this;
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(self__.default_chan,self__.error_chan,self__.event_chan,G__49955,self__.__extmap,self__.__hash));
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29429__auto__,entry__29430__auto__){
var self__ = this;
var this__29429__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29430__auto__)){
return this__29429__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29430__auto__,(0)),cljs.core._nth.call(null,entry__29430__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29429__auto____$1,entry__29430__auto__);
}
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.dispatcher","/tmp/form-init6286146101766555450.clj",76,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting ErrorPriorityDispatcher"], null);
});})(component__$1))
,null)),null,-1750494778);

var component__$2 = cljs.core.assoc.call(null,component__$1,new cljs.core.Keyword(null,"default-chan","default-chan",-1967069873),(function (){var or__28749__auto__ = self__.default_chan;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return cljs.core.async.chan.call(null,(100));
}
})(),new cljs.core.Keyword(null,"error-chan","error-chan",-642264783),(function (){var or__28749__auto__ = self__.error_chan;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return cljs.core.async.chan.call(null,(100));
}
})(),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912),cljs.core.async.chan.call(null));
var c__40635__auto___50018 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___50018,component__$2,component__$1){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___50018,component__$2,component__$1){
return (function (state_49999){
var state_val_50000 = (state_49999[(1)]);
if((state_val_50000 === (1))){
var state_49999__$1 = state_49999;
var statearr_50001_50019 = state_49999__$1;
(statearr_50001_50019[(2)] = null);

(statearr_50001_50019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50000 === (2))){
var inst_49987 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49988 = [self__.error_chan,self__.default_chan];
var inst_49989 = (new cljs.core.PersistentVector(null,2,(5),inst_49987,inst_49988,null));
var state_49999__$1 = state_49999;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49999__$1,(4),inst_49989);
} else {
if((state_val_50000 === (3))){
var inst_49997 = (state_49999[(2)]);
var state_49999__$1 = state_49999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49999__$1,inst_49997);
} else {
if((state_val_50000 === (4))){
var inst_49991 = (state_49999[(2)]);
var inst_49992 = cljs.core.nth.call(null,inst_49991,(0),null);
var inst_49993 = cljs.core.nth.call(null,inst_49991,(1),null);
var state_49999__$1 = (function (){var statearr_50002 = state_49999;
(statearr_50002[(7)] = inst_49993);

return statearr_50002;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49999__$1,(5),self__.event_chan,inst_49992);
} else {
if((state_val_50000 === (5))){
var inst_49995 = (state_49999[(2)]);
var state_49999__$1 = state_49999;
var statearr_50003_50020 = state_49999__$1;
(statearr_50003_50020[(2)] = inst_49995);

(statearr_50003_50020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__40635__auto___50018,component__$2,component__$1))
;
return ((function (switch__40521__auto__,c__40635__auto___50018,component__$2,component__$1){
return (function() {
var dat$reactor$dispatcher$state_machine__40522__auto__ = null;
var dat$reactor$dispatcher$state_machine__40522__auto____0 = (function (){
var statearr_50007 = [null,null,null,null,null,null,null,null];
(statearr_50007[(0)] = dat$reactor$dispatcher$state_machine__40522__auto__);

(statearr_50007[(1)] = (1));

return statearr_50007;
});
var dat$reactor$dispatcher$state_machine__40522__auto____1 = (function (state_49999){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_49999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e50008){if((e50008 instanceof Object)){
var ex__40525__auto__ = e50008;
var statearr_50009_50021 = state_49999;
(statearr_50009_50021[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50022 = state_49999;
state_49999 = G__50022;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
dat$reactor$dispatcher$state_machine__40522__auto__ = function(state_49999){
switch(arguments.length){
case 0:
return dat$reactor$dispatcher$state_machine__40522__auto____0.call(this);
case 1:
return dat$reactor$dispatcher$state_machine__40522__auto____1.call(this,state_49999);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$reactor$dispatcher$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = dat$reactor$dispatcher$state_machine__40522__auto____0;
dat$reactor$dispatcher$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = dat$reactor$dispatcher$state_machine__40522__auto____1;
return dat$reactor$dispatcher$state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___50018,component__$2,component__$1))
})();
var state__40637__auto__ = (function (){var statearr_50010 = f__40636__auto__.call(null);
(statearr_50010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___50018);

return statearr_50010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___50018,component__$2,component__$1))
);


return component__$2;
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (component){
var self__ = this;
var component__$1 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor.dispatcher","/tmp/form-init6286146101766555450.clj",90,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (component__$1){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Stopping ErrorPriorityDispatcher"], null);
});})(component__$1))
,null)),null,-986024592);

return component__$1;
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-chan","default-chan",-326538346,null),new cljs.core.Symbol(null,"error-chan","error-chan",998266744,null),new cljs.core.Symbol(null,"event-chan","event-chan",58153615,null)], null);
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.cljs$lang$type = true;

dat.reactor.dispatcher.ErrorPriorityDispatcher.cljs$lang$ctorPrSeq = (function (this__29460__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.reactor.dispatcher/ErrorPriorityDispatcher");
});

dat.reactor.dispatcher.ErrorPriorityDispatcher.cljs$lang$ctorPrWriter = (function (this__29460__auto__,writer__29461__auto__){
return cljs.core._write.call(null,writer__29461__auto__,"dat.reactor.dispatcher/ErrorPriorityDispatcher");
});

dat.reactor.dispatcher.__GT_ErrorPriorityDispatcher = (function dat$reactor$dispatcher$__GT_ErrorPriorityDispatcher(default_chan,error_chan,event_chan){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(default_chan,error_chan,event_chan,null,null,null));
});

dat.reactor.dispatcher.map__GT_ErrorPriorityDispatcher = (function dat$reactor$dispatcher$map__GT_ErrorPriorityDispatcher(G__49957){
return (new dat.reactor.dispatcher.ErrorPriorityDispatcher(new cljs.core.Keyword(null,"default-chan","default-chan",-1967069873).cljs$core$IFn$_invoke$arity$1(G__49957),new cljs.core.Keyword(null,"error-chan","error-chan",-642264783).cljs$core$IFn$_invoke$arity$1(G__49957),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912).cljs$core$IFn$_invoke$arity$1(G__49957),null,cljs.core.dissoc.call(null,G__49957,new cljs.core.Keyword(null,"default-chan","default-chan",-1967069873),new cljs.core.Keyword(null,"error-chan","error-chan",-642264783),new cljs.core.Keyword(null,"event-chan","event-chan",-1582377912)),null));
});

/**
 * Creates a new ErroPriorityDispatcher. Can customize :default-chan and :error-chan through options.
 *   Idea is that Reactor will get error events before other queued events, but the mechanism is a little flawed.
 *   Currently, it's still possible for a non error event to get through before the reactor is ready to consume from the event-chan.
 *   May need to adjust the protocols.
 */
dat.reactor.dispatcher.new_error_priority_dispatcher = (function dat$reactor$dispatcher$new_error_priority_dispatcher(var_args){
var args50023 = [];
var len__29970__auto___50026 = arguments.length;
var i__29971__auto___50027 = (0);
while(true){
if((i__29971__auto___50027 < len__29970__auto___50026)){
args50023.push((arguments[i__29971__auto___50027]));

var G__50028 = (i__29971__auto___50027 + (1));
i__29971__auto___50027 = G__50028;
continue;
} else {
}
break;
}

var G__50025 = args50023.length;
switch (G__50025) {
case 1:
return dat.reactor.dispatcher.new_error_priority_dispatcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dat.reactor.dispatcher.new_error_priority_dispatcher.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50023.length)].join('')));

}
});

dat.reactor.dispatcher.new_error_priority_dispatcher.cljs$core$IFn$_invoke$arity$1 = (function (options){
return dat.reactor.dispatcher.map__GT_ErrorPriorityDispatcher.call(null,options);
});

dat.reactor.dispatcher.new_error_priority_dispatcher.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.reactor.dispatcher.new_error_priority_dispatcher.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

dat.reactor.dispatcher.new_error_priority_dispatcher.cljs$lang$maxFixedArity = 1;

/**
 * Dispatches event on the dispatcher component at the given level (:default if unspecified).
 */
dat.reactor.dispatcher.dispatch_BANG_ = (function dat$reactor$dispatcher$dispatch_BANG_(var_args){
var args50030 = [];
var len__29970__auto___50033 = arguments.length;
var i__29971__auto___50034 = (0);
while(true){
if((i__29971__auto___50034 < len__29970__auto___50033)){
args50030.push((arguments[i__29971__auto___50034]));

var G__50035 = (i__29971__auto___50034 + (1));
i__29971__auto___50034 = G__50035;
continue;
} else {
}
break;
}

var G__50032 = args50030.length;
switch (G__50032) {
case 3:
return dat.reactor.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dat.reactor.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50030.length)].join('')));

}
});

dat.reactor.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatcher,event,level){
return dat.spec.protocols.dispatch_BANG_.call(null,dispatcher,event,level);
});

dat.reactor.dispatcher.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatcher,event){
return dat.spec.protocols.dispatch_BANG_.call(null,dispatcher,event,new cljs.core.Keyword(null,"default","default",-1987822328));
});

dat.reactor.dispatcher.dispatch_BANG_.cljs$lang$maxFixedArity = 3;

dat.reactor.dispatcher.dispatch_error_BANG_ = (function dat$reactor$dispatcher$dispatch_error_BANG_(datview,event){
return dat.reactor.dispatcher.dispatch_BANG_.call(null,datview,event,new cljs.core.Keyword(null,"error","error",-978969032));
});
dat.reactor.dispatcher.event_chan = (function dat$reactor$dispatcher$event_chan(dispatcher){

return dat.spec.protocols.dispatcher_event_chan.call(null,dispatcher);
});

//# sourceMappingURL=dispatcher.js.map