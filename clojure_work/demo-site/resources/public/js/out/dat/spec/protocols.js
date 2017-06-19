// Compiled by ClojureScript 1.9.518 {}
goog.provide('dat.spec.protocols');
goog.require('cljs.core');

/**
 * The abstract ability to send a event to a server
 * @interface
 */
dat.spec.protocols.PRemoteSendEvent = function(){};

dat.spec.protocols.send_event_BANG_ = (function dat$spec$protocols$send_event_BANG_(this$,event){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$PRemoteSendEvent$send_event_BANG_$arity$2 == null)))){
return this$.dat$spec$protocols$PRemoteSendEvent$send_event_BANG_$arity$2(this$,event);
} else {
var x__29467__auto__ = (((this$ == null))?null:this$);
var m__29468__auto__ = (dat.spec.protocols.send_event_BANG_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,this$,event);
} else {
var m__29468__auto____$1 = (dat.spec.protocols.send_event_BANG_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"PRemoteSendEvent.send-event!",this$);
}
}
}
});


/**
 * Implement this on your Remote component if you want to handle events using a core.async channel (preferred for pipelining).
 * An implementation should return a single event chan on which events can be recieved.
 * @interface
 */
dat.spec.protocols.PRemoteEventChan = function(){};

dat.spec.protocols.remote_event_chan = (function dat$spec$protocols$remote_event_chan(this$){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$PRemoteEventChan$remote_event_chan$arity$1 == null)))){
return this$.dat$spec$protocols$PRemoteEventChan$remote_event_chan$arity$1(this$);
} else {
var x__29467__auto__ = (((this$ == null))?null:this$);
var m__29468__auto__ = (dat.spec.protocols.remote_event_chan[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,this$);
} else {
var m__29468__auto____$1 = (dat.spec.protocols.remote_event_chan["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"PRemoteEventChan.remote-event-chan",this$);
}
}
}
});


/**
 * Implement this on your Remote component if you want to handle events directly via the implementation of the handle-event! method.
 * @interface
 */
dat.spec.protocols.PRemoteEventHandler = function(){};

dat.spec.protocols.handle_remote_event_BANG_ = (function dat$spec$protocols$handle_remote_event_BANG_(this$,event){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$PRemoteEventHandler$handle_remote_event_BANG_$arity$2 == null)))){
return this$.dat$spec$protocols$PRemoteEventHandler$handle_remote_event_BANG_$arity$2(this$,event);
} else {
var x__29467__auto__ = (((this$ == null))?null:this$);
var m__29468__auto__ = (dat.spec.protocols.handle_remote_event_BANG_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,this$,event);
} else {
var m__29468__auto____$1 = (dat.spec.protocols.handle_remote_event_BANG_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,this$,event);
} else {
throw cljs.core.missing_protocol.call(null,"PRemoteEventHandler.handle-remote-event!",this$);
}
}
}
});


/**
 * This is where
 * @interface
 */
dat.spec.protocols.PDispatcher = function(){};

/**
 * Recieves data from calls to dispatch and pipes through to a channel, from which events can be taken.
 *  The semantics of how different levels and events are handled differently as far as priority is entire up to you.
 */
dat.spec.protocols.dispatch_BANG_ = (function dat$spec$protocols$dispatch_BANG_(this$,event,level){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$3 == null)))){
return this$.dat$spec$protocols$PDispatcher$dispatch_BANG_$arity$3(this$,event,level);
} else {
var x__29467__auto__ = (((this$ == null))?null:this$);
var m__29468__auto__ = (dat.spec.protocols.dispatch_BANG_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,this$,event,level);
} else {
var m__29468__auto____$1 = (dat.spec.protocols.dispatch_BANG_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,this$,event,level);
} else {
throw cljs.core.missing_protocol.call(null,"PDispatcher.dispatch!",this$);
}
}
}
});

dat.spec.protocols.dispatcher_event_chan = (function dat$spec$protocols$dispatcher_event_chan(this$){
if((!((this$ == null))) && (!((this$.dat$spec$protocols$PDispatcher$dispatcher_event_chan$arity$1 == null)))){
return this$.dat$spec$protocols$PDispatcher$dispatcher_event_chan$arity$1(this$);
} else {
var x__29467__auto__ = (((this$ == null))?null:this$);
var m__29468__auto__ = (dat.spec.protocols.dispatcher_event_chan[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,this$);
} else {
var m__29468__auto____$1 = (dat.spec.protocols.dispatcher_event_chan["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"PDispatcher.dispatcher-event-chan",this$);
}
}
}
});


/**
 * @interface
 */
dat.spec.protocols.PReactor = function(){};


//# sourceMappingURL=protocols.js.map