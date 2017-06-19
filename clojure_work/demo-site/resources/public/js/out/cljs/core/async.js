// Compiled by ClojureScript 1.9.518 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args40694 = [];
var len__29970__auto___40700 = arguments.length;
var i__29971__auto___40701 = (0);
while(true){
if((i__29971__auto___40701 < len__29970__auto___40700)){
args40694.push((arguments[i__29971__auto___40701]));

var G__40702 = (i__29971__auto___40701 + (1));
i__29971__auto___40701 = G__40702;
continue;
} else {
}
break;
}

var G__40696 = args40694.length;
switch (G__40696) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40694.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async40697 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40697 = (function (f,blockable,meta40698){
this.f = f;
this.blockable = blockable;
this.meta40698 = meta40698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40699,meta40698__$1){
var self__ = this;
var _40699__$1 = this;
return (new cljs.core.async.t_cljs$core$async40697(self__.f,self__.blockable,meta40698__$1));
});

cljs.core.async.t_cljs$core$async40697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40699){
var self__ = this;
var _40699__$1 = this;
return self__.meta40698;
});

cljs.core.async.t_cljs$core$async40697.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40697.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40697.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async40697.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async40697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40698","meta40698",279624030,null)], null);
});

cljs.core.async.t_cljs$core$async40697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40697";

cljs.core.async.t_cljs$core$async40697.cljs$lang$ctorPrWriter = (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"cljs.core.async/t_cljs$core$async40697");
});

cljs.core.async.__GT_t_cljs$core$async40697 = (function cljs$core$async$__GT_t_cljs$core$async40697(f__$1,blockable__$1,meta40698){
return (new cljs.core.async.t_cljs$core$async40697(f__$1,blockable__$1,meta40698));
});

}

return (new cljs.core.async.t_cljs$core$async40697(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args40706 = [];
var len__29970__auto___40709 = arguments.length;
var i__29971__auto___40710 = (0);
while(true){
if((i__29971__auto___40710 < len__29970__auto___40709)){
args40706.push((arguments[i__29971__auto___40710]));

var G__40711 = (i__29971__auto___40710 + (1));
i__29971__auto___40710 = G__40711;
continue;
} else {
}
break;
}

var G__40708 = args40706.length;
switch (G__40708) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40706.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args40713 = [];
var len__29970__auto___40716 = arguments.length;
var i__29971__auto___40717 = (0);
while(true){
if((i__29971__auto___40717 < len__29970__auto___40716)){
args40713.push((arguments[i__29971__auto___40717]));

var G__40718 = (i__29971__auto___40717 + (1));
i__29971__auto___40717 = G__40718;
continue;
} else {
}
break;
}

var G__40715 = args40713.length;
switch (G__40715) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40713.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args40720 = [];
var len__29970__auto___40723 = arguments.length;
var i__29971__auto___40724 = (0);
while(true){
if((i__29971__auto___40724 < len__29970__auto___40723)){
args40720.push((arguments[i__29971__auto___40724]));

var G__40725 = (i__29971__auto___40724 + (1));
i__29971__auto___40724 = G__40725;
continue;
} else {
}
break;
}

var G__40722 = args40720.length;
switch (G__40722) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40720.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_40727 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_40727);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_40727,ret){
return (function (){
return fn1.call(null,val_40727);
});})(val_40727,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args40728 = [];
var len__29970__auto___40731 = arguments.length;
var i__29971__auto___40732 = (0);
while(true){
if((i__29971__auto___40732 < len__29970__auto___40731)){
args40728.push((arguments[i__29971__auto___40732]));

var G__40733 = (i__29971__auto___40732 + (1));
i__29971__auto___40732 = G__40733;
continue;
} else {
}
break;
}

var G__40730 = args40728.length;
switch (G__40730) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40728.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6736__auto__)){
var ret = temp__6736__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__6736__auto__)){
var retb = temp__6736__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__6736__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__6736__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29770__auto___40735 = n;
var x_40736 = (0);
while(true){
if((x_40736 < n__29770__auto___40735)){
(a[x_40736] = (0));

var G__40737 = (x_40736 + (1));
x_40736 = G__40737;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__40738 = (i + (1));
i = G__40738;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async40742 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40742 = (function (flag,meta40743){
this.flag = flag;
this.meta40743 = meta40743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_40744,meta40743__$1){
var self__ = this;
var _40744__$1 = this;
return (new cljs.core.async.t_cljs$core$async40742(self__.flag,meta40743__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_40744){
var self__ = this;
var _40744__$1 = this;
return self__.meta40743;
});})(flag))
;

cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40742.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async40742.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40743","meta40743",-737146789,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async40742.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40742";

cljs.core.async.t_cljs$core$async40742.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"cljs.core.async/t_cljs$core$async40742");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async40742 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async40742(flag__$1,meta40743){
return (new cljs.core.async.t_cljs$core$async40742(flag__$1,meta40743));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async40742(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async40748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40748 = (function (flag,cb,meta40749){
this.flag = flag;
this.cb = cb;
this.meta40749 = meta40749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40750,meta40749__$1){
var self__ = this;
var _40750__$1 = this;
return (new cljs.core.async.t_cljs$core$async40748(self__.flag,self__.cb,meta40749__$1));
});

cljs.core.async.t_cljs$core$async40748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40750){
var self__ = this;
var _40750__$1 = this;
return self__.meta40749;
});

cljs.core.async.t_cljs$core$async40748.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40748.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async40748.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async40748.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async40748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40749","meta40749",95565289,null)], null);
});

cljs.core.async.t_cljs$core$async40748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40748";

cljs.core.async.t_cljs$core$async40748.cljs$lang$ctorPrWriter = (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"cljs.core.async/t_cljs$core$async40748");
});

cljs.core.async.__GT_t_cljs$core$async40748 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async40748(flag__$1,cb__$1,meta40749){
return (new cljs.core.async.t_cljs$core$async40748(flag__$1,cb__$1,meta40749));
});

}

return (new cljs.core.async.t_cljs$core$async40748(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40751_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40751_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40752_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40752_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28749__auto__ = wport;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return port;
}
})()], null));
} else {
var G__40753 = (i + (1));
i = G__40753;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28749__auto__ = ret;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__6738__auto__ = (function (){var and__28737__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28737__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28737__auto__;
}
})();
if(cljs.core.truth_(temp__6738__auto__)){
var got = temp__6738__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29977__auto__ = [];
var len__29970__auto___40759 = arguments.length;
var i__29971__auto___40760 = (0);
while(true){
if((i__29971__auto___40760 < len__29970__auto___40759)){
args__29977__auto__.push((arguments[i__29971__auto___40760]));

var G__40761 = (i__29971__auto___40760 + (1));
i__29971__auto___40760 = G__40761;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40756){
var map__40757 = p__40756;
var map__40757__$1 = ((((!((map__40757 == null)))?((((map__40757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40757.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40757):map__40757);
var opts = map__40757__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40754){
var G__40755 = cljs.core.first.call(null,seq40754);
var seq40754__$1 = cljs.core.next.call(null,seq40754);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40755,seq40754__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args40762 = [];
var len__29970__auto___40812 = arguments.length;
var i__29971__auto___40813 = (0);
while(true){
if((i__29971__auto___40813 < len__29970__auto___40812)){
args40762.push((arguments[i__29971__auto___40813]));

var G__40814 = (i__29971__auto___40813 + (1));
i__29971__auto___40813 = G__40814;
continue;
} else {
}
break;
}

var G__40764 = args40762.length;
switch (G__40764) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args40762.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__40635__auto___40816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___40816){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___40816){
return (function (state_40788){
var state_val_40789 = (state_40788[(1)]);
if((state_val_40789 === (7))){
var inst_40784 = (state_40788[(2)]);
var state_40788__$1 = state_40788;
var statearr_40790_40817 = state_40788__$1;
(statearr_40790_40817[(2)] = inst_40784);

(statearr_40790_40817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40789 === (1))){
var state_40788__$1 = state_40788;
var statearr_40791_40818 = state_40788__$1;
(statearr_40791_40818[(2)] = null);

(statearr_40791_40818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40789 === (4))){
var inst_40767 = (state_40788[(7)]);
var inst_40767__$1 = (state_40788[(2)]);
var inst_40768 = (inst_40767__$1 == null);
var state_40788__$1 = (function (){var statearr_40792 = state_40788;
(statearr_40792[(7)] = inst_40767__$1);

return statearr_40792;
})();
if(cljs.core.truth_(inst_40768)){
var statearr_40793_40819 = state_40788__$1;
(statearr_40793_40819[(1)] = (5));

} else {
var statearr_40794_40820 = state_40788__$1;
(statearr_40794_40820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40789 === (13))){
var state_40788__$1 = state_40788;
var statearr_40795_40821 = state_40788__$1;
(statearr_40795_40821[(2)] = null);

(statearr_40795_40821[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40789 === (6))){
var inst_40767 = (state_40788[(7)]);
var state_40788__$1 = state_40788;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40788__$1,(11),to,inst_40767);
} else {
if((state_val_40789 === (3))){
var inst_40786 = (state_40788[(2)]);
var state_40788__$1 = state_40788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40788__$1,inst_40786);
} else {
if((state_val_40789 === (12))){
var state_40788__$1 = state_40788;
var statearr_40796_40822 = state_40788__$1;
(statearr_40796_40822[(2)] = null);

(statearr_40796_40822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40789 === (2))){
var state_40788__$1 = state_40788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40788__$1,(4),from);
} else {
if((state_val_40789 === (11))){
var inst_40777 = (state_40788[(2)]);
var state_40788__$1 = state_40788;
if(cljs.core.truth_(inst_40777)){
var statearr_40797_40823 = state_40788__$1;
(statearr_40797_40823[(1)] = (12));

} else {
var statearr_40798_40824 = state_40788__$1;
(statearr_40798_40824[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40789 === (9))){
var state_40788__$1 = state_40788;
var statearr_40799_40825 = state_40788__$1;
(statearr_40799_40825[(2)] = null);

(statearr_40799_40825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40789 === (5))){
var state_40788__$1 = state_40788;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40800_40826 = state_40788__$1;
(statearr_40800_40826[(1)] = (8));

} else {
var statearr_40801_40827 = state_40788__$1;
(statearr_40801_40827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40789 === (14))){
var inst_40782 = (state_40788[(2)]);
var state_40788__$1 = state_40788;
var statearr_40802_40828 = state_40788__$1;
(statearr_40802_40828[(2)] = inst_40782);

(statearr_40802_40828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40789 === (10))){
var inst_40774 = (state_40788[(2)]);
var state_40788__$1 = state_40788;
var statearr_40803_40829 = state_40788__$1;
(statearr_40803_40829[(2)] = inst_40774);

(statearr_40803_40829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40789 === (8))){
var inst_40771 = cljs.core.async.close_BANG_.call(null,to);
var state_40788__$1 = state_40788;
var statearr_40804_40830 = state_40788__$1;
(statearr_40804_40830[(2)] = inst_40771);

(statearr_40804_40830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40635__auto___40816))
;
return ((function (switch__40521__auto__,c__40635__auto___40816){
return (function() {
var cljs$core$async$state_machine__40522__auto__ = null;
var cljs$core$async$state_machine__40522__auto____0 = (function (){
var statearr_40808 = [null,null,null,null,null,null,null,null];
(statearr_40808[(0)] = cljs$core$async$state_machine__40522__auto__);

(statearr_40808[(1)] = (1));

return statearr_40808;
});
var cljs$core$async$state_machine__40522__auto____1 = (function (state_40788){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_40788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e40809){if((e40809 instanceof Object)){
var ex__40525__auto__ = e40809;
var statearr_40810_40831 = state_40788;
(statearr_40810_40831[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40809;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40832 = state_40788;
state_40788 = G__40832;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$state_machine__40522__auto__ = function(state_40788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40522__auto____1.call(this,state_40788);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40522__auto____0;
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40522__auto____1;
return cljs$core$async$state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___40816))
})();
var state__40637__auto__ = (function (){var statearr_40811 = f__40636__auto__.call(null);
(statearr_40811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___40816);

return statearr_40811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___40816))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__41020){
var vec__41021 = p__41020;
var v = cljs.core.nth.call(null,vec__41021,(0),null);
var p = cljs.core.nth.call(null,vec__41021,(1),null);
var job = vec__41021;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__40635__auto___41207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___41207,res,vec__41021,v,p,job,jobs,results){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___41207,res,vec__41021,v,p,job,jobs,results){
return (function (state_41028){
var state_val_41029 = (state_41028[(1)]);
if((state_val_41029 === (1))){
var state_41028__$1 = state_41028;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41028__$1,(2),res,v);
} else {
if((state_val_41029 === (2))){
var inst_41025 = (state_41028[(2)]);
var inst_41026 = cljs.core.async.close_BANG_.call(null,res);
var state_41028__$1 = (function (){var statearr_41030 = state_41028;
(statearr_41030[(7)] = inst_41025);

return statearr_41030;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41028__$1,inst_41026);
} else {
return null;
}
}
});})(c__40635__auto___41207,res,vec__41021,v,p,job,jobs,results))
;
return ((function (switch__40521__auto__,c__40635__auto___41207,res,vec__41021,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____0 = (function (){
var statearr_41034 = [null,null,null,null,null,null,null,null];
(statearr_41034[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__);

(statearr_41034[(1)] = (1));

return statearr_41034;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____1 = (function (state_41028){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_41028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e41035){if((e41035 instanceof Object)){
var ex__40525__auto__ = e41035;
var statearr_41036_41208 = state_41028;
(statearr_41036_41208[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41209 = state_41028;
state_41028 = G__41209;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__ = function(state_41028){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____1.call(this,state_41028);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___41207,res,vec__41021,v,p,job,jobs,results))
})();
var state__40637__auto__ = (function (){var statearr_41037 = f__40636__auto__.call(null);
(statearr_41037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___41207);

return statearr_41037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___41207,res,vec__41021,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41038){
var vec__41039 = p__41038;
var v = cljs.core.nth.call(null,vec__41039,(0),null);
var p = cljs.core.nth.call(null,vec__41039,(1),null);
var job = vec__41039;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29770__auto___41210 = n;
var __41211 = (0);
while(true){
if((__41211 < n__29770__auto___41210)){
var G__41042_41212 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__41042_41212) {
case "compute":
var c__40635__auto___41214 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41211,c__40635__auto___41214,G__41042_41212,n__29770__auto___41210,jobs,results,process,async){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (__41211,c__40635__auto___41214,G__41042_41212,n__29770__auto___41210,jobs,results,process,async){
return (function (state_41055){
var state_val_41056 = (state_41055[(1)]);
if((state_val_41056 === (1))){
var state_41055__$1 = state_41055;
var statearr_41057_41215 = state_41055__$1;
(statearr_41057_41215[(2)] = null);

(statearr_41057_41215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (2))){
var state_41055__$1 = state_41055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41055__$1,(4),jobs);
} else {
if((state_val_41056 === (3))){
var inst_41053 = (state_41055[(2)]);
var state_41055__$1 = state_41055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41055__$1,inst_41053);
} else {
if((state_val_41056 === (4))){
var inst_41045 = (state_41055[(2)]);
var inst_41046 = process.call(null,inst_41045);
var state_41055__$1 = state_41055;
if(cljs.core.truth_(inst_41046)){
var statearr_41058_41216 = state_41055__$1;
(statearr_41058_41216[(1)] = (5));

} else {
var statearr_41059_41217 = state_41055__$1;
(statearr_41059_41217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (5))){
var state_41055__$1 = state_41055;
var statearr_41060_41218 = state_41055__$1;
(statearr_41060_41218[(2)] = null);

(statearr_41060_41218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (6))){
var state_41055__$1 = state_41055;
var statearr_41061_41219 = state_41055__$1;
(statearr_41061_41219[(2)] = null);

(statearr_41061_41219[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41056 === (7))){
var inst_41051 = (state_41055[(2)]);
var state_41055__$1 = state_41055;
var statearr_41062_41220 = state_41055__$1;
(statearr_41062_41220[(2)] = inst_41051);

(statearr_41062_41220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41211,c__40635__auto___41214,G__41042_41212,n__29770__auto___41210,jobs,results,process,async))
;
return ((function (__41211,switch__40521__auto__,c__40635__auto___41214,G__41042_41212,n__29770__auto___41210,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____0 = (function (){
var statearr_41066 = [null,null,null,null,null,null,null];
(statearr_41066[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__);

(statearr_41066[(1)] = (1));

return statearr_41066;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____1 = (function (state_41055){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_41055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e41067){if((e41067 instanceof Object)){
var ex__40525__auto__ = e41067;
var statearr_41068_41221 = state_41055;
(statearr_41068_41221[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41222 = state_41055;
state_41055 = G__41222;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__ = function(state_41055){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____1.call(this,state_41055);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__;
})()
;})(__41211,switch__40521__auto__,c__40635__auto___41214,G__41042_41212,n__29770__auto___41210,jobs,results,process,async))
})();
var state__40637__auto__ = (function (){var statearr_41069 = f__40636__auto__.call(null);
(statearr_41069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___41214);

return statearr_41069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(__41211,c__40635__auto___41214,G__41042_41212,n__29770__auto___41210,jobs,results,process,async))
);


break;
case "async":
var c__40635__auto___41223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__41211,c__40635__auto___41223,G__41042_41212,n__29770__auto___41210,jobs,results,process,async){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (__41211,c__40635__auto___41223,G__41042_41212,n__29770__auto___41210,jobs,results,process,async){
return (function (state_41082){
var state_val_41083 = (state_41082[(1)]);
if((state_val_41083 === (1))){
var state_41082__$1 = state_41082;
var statearr_41084_41224 = state_41082__$1;
(statearr_41084_41224[(2)] = null);

(statearr_41084_41224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41083 === (2))){
var state_41082__$1 = state_41082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41082__$1,(4),jobs);
} else {
if((state_val_41083 === (3))){
var inst_41080 = (state_41082[(2)]);
var state_41082__$1 = state_41082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41082__$1,inst_41080);
} else {
if((state_val_41083 === (4))){
var inst_41072 = (state_41082[(2)]);
var inst_41073 = async.call(null,inst_41072);
var state_41082__$1 = state_41082;
if(cljs.core.truth_(inst_41073)){
var statearr_41085_41225 = state_41082__$1;
(statearr_41085_41225[(1)] = (5));

} else {
var statearr_41086_41226 = state_41082__$1;
(statearr_41086_41226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41083 === (5))){
var state_41082__$1 = state_41082;
var statearr_41087_41227 = state_41082__$1;
(statearr_41087_41227[(2)] = null);

(statearr_41087_41227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41083 === (6))){
var state_41082__$1 = state_41082;
var statearr_41088_41228 = state_41082__$1;
(statearr_41088_41228[(2)] = null);

(statearr_41088_41228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41083 === (7))){
var inst_41078 = (state_41082[(2)]);
var state_41082__$1 = state_41082;
var statearr_41089_41229 = state_41082__$1;
(statearr_41089_41229[(2)] = inst_41078);

(statearr_41089_41229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__41211,c__40635__auto___41223,G__41042_41212,n__29770__auto___41210,jobs,results,process,async))
;
return ((function (__41211,switch__40521__auto__,c__40635__auto___41223,G__41042_41212,n__29770__auto___41210,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____0 = (function (){
var statearr_41093 = [null,null,null,null,null,null,null];
(statearr_41093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__);

(statearr_41093[(1)] = (1));

return statearr_41093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____1 = (function (state_41082){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_41082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e41094){if((e41094 instanceof Object)){
var ex__40525__auto__ = e41094;
var statearr_41095_41230 = state_41082;
(statearr_41095_41230[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41231 = state_41082;
state_41082 = G__41231;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__ = function(state_41082){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____1.call(this,state_41082);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__;
})()
;})(__41211,switch__40521__auto__,c__40635__auto___41223,G__41042_41212,n__29770__auto___41210,jobs,results,process,async))
})();
var state__40637__auto__ = (function (){var statearr_41096 = f__40636__auto__.call(null);
(statearr_41096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___41223);

return statearr_41096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(__41211,c__40635__auto___41223,G__41042_41212,n__29770__auto___41210,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__41232 = (__41211 + (1));
__41211 = G__41232;
continue;
} else {
}
break;
}

var c__40635__auto___41233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___41233,jobs,results,process,async){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___41233,jobs,results,process,async){
return (function (state_41118){
var state_val_41119 = (state_41118[(1)]);
if((state_val_41119 === (1))){
var state_41118__$1 = state_41118;
var statearr_41120_41234 = state_41118__$1;
(statearr_41120_41234[(2)] = null);

(statearr_41120_41234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (2))){
var state_41118__$1 = state_41118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41118__$1,(4),from);
} else {
if((state_val_41119 === (3))){
var inst_41116 = (state_41118[(2)]);
var state_41118__$1 = state_41118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41118__$1,inst_41116);
} else {
if((state_val_41119 === (4))){
var inst_41099 = (state_41118[(7)]);
var inst_41099__$1 = (state_41118[(2)]);
var inst_41100 = (inst_41099__$1 == null);
var state_41118__$1 = (function (){var statearr_41121 = state_41118;
(statearr_41121[(7)] = inst_41099__$1);

return statearr_41121;
})();
if(cljs.core.truth_(inst_41100)){
var statearr_41122_41235 = state_41118__$1;
(statearr_41122_41235[(1)] = (5));

} else {
var statearr_41123_41236 = state_41118__$1;
(statearr_41123_41236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (5))){
var inst_41102 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41118__$1 = state_41118;
var statearr_41124_41237 = state_41118__$1;
(statearr_41124_41237[(2)] = inst_41102);

(statearr_41124_41237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (6))){
var inst_41104 = (state_41118[(8)]);
var inst_41099 = (state_41118[(7)]);
var inst_41104__$1 = cljs.core.async.chan.call(null,(1));
var inst_41105 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41106 = [inst_41099,inst_41104__$1];
var inst_41107 = (new cljs.core.PersistentVector(null,2,(5),inst_41105,inst_41106,null));
var state_41118__$1 = (function (){var statearr_41125 = state_41118;
(statearr_41125[(8)] = inst_41104__$1);

return statearr_41125;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41118__$1,(8),jobs,inst_41107);
} else {
if((state_val_41119 === (7))){
var inst_41114 = (state_41118[(2)]);
var state_41118__$1 = state_41118;
var statearr_41126_41238 = state_41118__$1;
(statearr_41126_41238[(2)] = inst_41114);

(statearr_41126_41238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41119 === (8))){
var inst_41104 = (state_41118[(8)]);
var inst_41109 = (state_41118[(2)]);
var state_41118__$1 = (function (){var statearr_41127 = state_41118;
(statearr_41127[(9)] = inst_41109);

return statearr_41127;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41118__$1,(9),results,inst_41104);
} else {
if((state_val_41119 === (9))){
var inst_41111 = (state_41118[(2)]);
var state_41118__$1 = (function (){var statearr_41128 = state_41118;
(statearr_41128[(10)] = inst_41111);

return statearr_41128;
})();
var statearr_41129_41239 = state_41118__$1;
(statearr_41129_41239[(2)] = null);

(statearr_41129_41239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__40635__auto___41233,jobs,results,process,async))
;
return ((function (switch__40521__auto__,c__40635__auto___41233,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____0 = (function (){
var statearr_41133 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41133[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__);

(statearr_41133[(1)] = (1));

return statearr_41133;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____1 = (function (state_41118){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_41118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e41134){if((e41134 instanceof Object)){
var ex__40525__auto__ = e41134;
var statearr_41135_41240 = state_41118;
(statearr_41135_41240[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41241 = state_41118;
state_41118 = G__41241;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__ = function(state_41118){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____1.call(this,state_41118);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___41233,jobs,results,process,async))
})();
var state__40637__auto__ = (function (){var statearr_41136 = f__40636__auto__.call(null);
(statearr_41136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___41233);

return statearr_41136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___41233,jobs,results,process,async))
);


var c__40635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto__,jobs,results,process,async){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto__,jobs,results,process,async){
return (function (state_41174){
var state_val_41175 = (state_41174[(1)]);
if((state_val_41175 === (7))){
var inst_41170 = (state_41174[(2)]);
var state_41174__$1 = state_41174;
var statearr_41176_41242 = state_41174__$1;
(statearr_41176_41242[(2)] = inst_41170);

(statearr_41176_41242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41175 === (20))){
var state_41174__$1 = state_41174;
var statearr_41177_41243 = state_41174__$1;
(statearr_41177_41243[(2)] = null);

(statearr_41177_41243[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41175 === (1))){
var state_41174__$1 = state_41174;
var statearr_41178_41244 = state_41174__$1;
(statearr_41178_41244[(2)] = null);

(statearr_41178_41244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41175 === (4))){
var inst_41139 = (state_41174[(7)]);
var inst_41139__$1 = (state_41174[(2)]);
var inst_41140 = (inst_41139__$1 == null);
var state_41174__$1 = (function (){var statearr_41179 = state_41174;
(statearr_41179[(7)] = inst_41139__$1);

return statearr_41179;
})();
if(cljs.core.truth_(inst_41140)){
var statearr_41180_41245 = state_41174__$1;
(statearr_41180_41245[(1)] = (5));

} else {
var statearr_41181_41246 = state_41174__$1;
(statearr_41181_41246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41175 === (15))){
var inst_41152 = (state_41174[(8)]);
var state_41174__$1 = state_41174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41174__$1,(18),to,inst_41152);
} else {
if((state_val_41175 === (21))){
var inst_41165 = (state_41174[(2)]);
var state_41174__$1 = state_41174;
var statearr_41182_41247 = state_41174__$1;
(statearr_41182_41247[(2)] = inst_41165);

(statearr_41182_41247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41175 === (13))){
var inst_41167 = (state_41174[(2)]);
var state_41174__$1 = (function (){var statearr_41183 = state_41174;
(statearr_41183[(9)] = inst_41167);

return statearr_41183;
})();
var statearr_41184_41248 = state_41174__$1;
(statearr_41184_41248[(2)] = null);

(statearr_41184_41248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41175 === (6))){
var inst_41139 = (state_41174[(7)]);
var state_41174__$1 = state_41174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41174__$1,(11),inst_41139);
} else {
if((state_val_41175 === (17))){
var inst_41160 = (state_41174[(2)]);
var state_41174__$1 = state_41174;
if(cljs.core.truth_(inst_41160)){
var statearr_41185_41249 = state_41174__$1;
(statearr_41185_41249[(1)] = (19));

} else {
var statearr_41186_41250 = state_41174__$1;
(statearr_41186_41250[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41175 === (3))){
var inst_41172 = (state_41174[(2)]);
var state_41174__$1 = state_41174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41174__$1,inst_41172);
} else {
if((state_val_41175 === (12))){
var inst_41149 = (state_41174[(10)]);
var state_41174__$1 = state_41174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41174__$1,(14),inst_41149);
} else {
if((state_val_41175 === (2))){
var state_41174__$1 = state_41174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41174__$1,(4),results);
} else {
if((state_val_41175 === (19))){
var state_41174__$1 = state_41174;
var statearr_41187_41251 = state_41174__$1;
(statearr_41187_41251[(2)] = null);

(statearr_41187_41251[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41175 === (11))){
var inst_41149 = (state_41174[(2)]);
var state_41174__$1 = (function (){var statearr_41188 = state_41174;
(statearr_41188[(10)] = inst_41149);

return statearr_41188;
})();
var statearr_41189_41252 = state_41174__$1;
(statearr_41189_41252[(2)] = null);

(statearr_41189_41252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41175 === (9))){
var state_41174__$1 = state_41174;
var statearr_41190_41253 = state_41174__$1;
(statearr_41190_41253[(2)] = null);

(statearr_41190_41253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41175 === (5))){
var state_41174__$1 = state_41174;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41191_41254 = state_41174__$1;
(statearr_41191_41254[(1)] = (8));

} else {
var statearr_41192_41255 = state_41174__$1;
(statearr_41192_41255[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41175 === (14))){
var inst_41154 = (state_41174[(11)]);
var inst_41152 = (state_41174[(8)]);
var inst_41152__$1 = (state_41174[(2)]);
var inst_41153 = (inst_41152__$1 == null);
var inst_41154__$1 = cljs.core.not.call(null,inst_41153);
var state_41174__$1 = (function (){var statearr_41193 = state_41174;
(statearr_41193[(11)] = inst_41154__$1);

(statearr_41193[(8)] = inst_41152__$1);

return statearr_41193;
})();
if(inst_41154__$1){
var statearr_41194_41256 = state_41174__$1;
(statearr_41194_41256[(1)] = (15));

} else {
var statearr_41195_41257 = state_41174__$1;
(statearr_41195_41257[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41175 === (16))){
var inst_41154 = (state_41174[(11)]);
var state_41174__$1 = state_41174;
var statearr_41196_41258 = state_41174__$1;
(statearr_41196_41258[(2)] = inst_41154);

(statearr_41196_41258[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41175 === (10))){
var inst_41146 = (state_41174[(2)]);
var state_41174__$1 = state_41174;
var statearr_41197_41259 = state_41174__$1;
(statearr_41197_41259[(2)] = inst_41146);

(statearr_41197_41259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41175 === (18))){
var inst_41157 = (state_41174[(2)]);
var state_41174__$1 = state_41174;
var statearr_41198_41260 = state_41174__$1;
(statearr_41198_41260[(2)] = inst_41157);

(statearr_41198_41260[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41175 === (8))){
var inst_41143 = cljs.core.async.close_BANG_.call(null,to);
var state_41174__$1 = state_41174;
var statearr_41199_41261 = state_41174__$1;
(statearr_41199_41261[(2)] = inst_41143);

(statearr_41199_41261[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40635__auto__,jobs,results,process,async))
;
return ((function (switch__40521__auto__,c__40635__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____0 = (function (){
var statearr_41203 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__);

(statearr_41203[(1)] = (1));

return statearr_41203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____1 = (function (state_41174){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_41174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e41204){if((e41204 instanceof Object)){
var ex__40525__auto__ = e41204;
var statearr_41205_41262 = state_41174;
(statearr_41205_41262[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41263 = state_41174;
state_41174 = G__41263;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__ = function(state_41174){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____1.call(this,state_41174);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40522__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto__,jobs,results,process,async))
})();
var state__40637__auto__ = (function (){var statearr_41206 = f__40636__auto__.call(null);
(statearr_41206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto__);

return statearr_41206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto__,jobs,results,process,async))
);

return c__40635__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args41264 = [];
var len__29970__auto___41267 = arguments.length;
var i__29971__auto___41268 = (0);
while(true){
if((i__29971__auto___41268 < len__29970__auto___41267)){
args41264.push((arguments[i__29971__auto___41268]));

var G__41269 = (i__29971__auto___41268 + (1));
i__29971__auto___41268 = G__41269;
continue;
} else {
}
break;
}

var G__41266 = args41264.length;
switch (G__41266) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41264.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args41271 = [];
var len__29970__auto___41274 = arguments.length;
var i__29971__auto___41275 = (0);
while(true){
if((i__29971__auto___41275 < len__29970__auto___41274)){
args41271.push((arguments[i__29971__auto___41275]));

var G__41276 = (i__29971__auto___41275 + (1));
i__29971__auto___41275 = G__41276;
continue;
} else {
}
break;
}

var G__41273 = args41271.length;
switch (G__41273) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41271.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args41278 = [];
var len__29970__auto___41331 = arguments.length;
var i__29971__auto___41332 = (0);
while(true){
if((i__29971__auto___41332 < len__29970__auto___41331)){
args41278.push((arguments[i__29971__auto___41332]));

var G__41333 = (i__29971__auto___41332 + (1));
i__29971__auto___41332 = G__41333;
continue;
} else {
}
break;
}

var G__41280 = args41278.length;
switch (G__41280) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41278.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__40635__auto___41335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___41335,tc,fc){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___41335,tc,fc){
return (function (state_41306){
var state_val_41307 = (state_41306[(1)]);
if((state_val_41307 === (7))){
var inst_41302 = (state_41306[(2)]);
var state_41306__$1 = state_41306;
var statearr_41308_41336 = state_41306__$1;
(statearr_41308_41336[(2)] = inst_41302);

(statearr_41308_41336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41307 === (1))){
var state_41306__$1 = state_41306;
var statearr_41309_41337 = state_41306__$1;
(statearr_41309_41337[(2)] = null);

(statearr_41309_41337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41307 === (4))){
var inst_41283 = (state_41306[(7)]);
var inst_41283__$1 = (state_41306[(2)]);
var inst_41284 = (inst_41283__$1 == null);
var state_41306__$1 = (function (){var statearr_41310 = state_41306;
(statearr_41310[(7)] = inst_41283__$1);

return statearr_41310;
})();
if(cljs.core.truth_(inst_41284)){
var statearr_41311_41338 = state_41306__$1;
(statearr_41311_41338[(1)] = (5));

} else {
var statearr_41312_41339 = state_41306__$1;
(statearr_41312_41339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41307 === (13))){
var state_41306__$1 = state_41306;
var statearr_41313_41340 = state_41306__$1;
(statearr_41313_41340[(2)] = null);

(statearr_41313_41340[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41307 === (6))){
var inst_41283 = (state_41306[(7)]);
var inst_41289 = p.call(null,inst_41283);
var state_41306__$1 = state_41306;
if(cljs.core.truth_(inst_41289)){
var statearr_41314_41341 = state_41306__$1;
(statearr_41314_41341[(1)] = (9));

} else {
var statearr_41315_41342 = state_41306__$1;
(statearr_41315_41342[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41307 === (3))){
var inst_41304 = (state_41306[(2)]);
var state_41306__$1 = state_41306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41306__$1,inst_41304);
} else {
if((state_val_41307 === (12))){
var state_41306__$1 = state_41306;
var statearr_41316_41343 = state_41306__$1;
(statearr_41316_41343[(2)] = null);

(statearr_41316_41343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41307 === (2))){
var state_41306__$1 = state_41306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41306__$1,(4),ch);
} else {
if((state_val_41307 === (11))){
var inst_41283 = (state_41306[(7)]);
var inst_41293 = (state_41306[(2)]);
var state_41306__$1 = state_41306;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41306__$1,(8),inst_41293,inst_41283);
} else {
if((state_val_41307 === (9))){
var state_41306__$1 = state_41306;
var statearr_41317_41344 = state_41306__$1;
(statearr_41317_41344[(2)] = tc);

(statearr_41317_41344[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41307 === (5))){
var inst_41286 = cljs.core.async.close_BANG_.call(null,tc);
var inst_41287 = cljs.core.async.close_BANG_.call(null,fc);
var state_41306__$1 = (function (){var statearr_41318 = state_41306;
(statearr_41318[(8)] = inst_41286);

return statearr_41318;
})();
var statearr_41319_41345 = state_41306__$1;
(statearr_41319_41345[(2)] = inst_41287);

(statearr_41319_41345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41307 === (14))){
var inst_41300 = (state_41306[(2)]);
var state_41306__$1 = state_41306;
var statearr_41320_41346 = state_41306__$1;
(statearr_41320_41346[(2)] = inst_41300);

(statearr_41320_41346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41307 === (10))){
var state_41306__$1 = state_41306;
var statearr_41321_41347 = state_41306__$1;
(statearr_41321_41347[(2)] = fc);

(statearr_41321_41347[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41307 === (8))){
var inst_41295 = (state_41306[(2)]);
var state_41306__$1 = state_41306;
if(cljs.core.truth_(inst_41295)){
var statearr_41322_41348 = state_41306__$1;
(statearr_41322_41348[(1)] = (12));

} else {
var statearr_41323_41349 = state_41306__$1;
(statearr_41323_41349[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40635__auto___41335,tc,fc))
;
return ((function (switch__40521__auto__,c__40635__auto___41335,tc,fc){
return (function() {
var cljs$core$async$state_machine__40522__auto__ = null;
var cljs$core$async$state_machine__40522__auto____0 = (function (){
var statearr_41327 = [null,null,null,null,null,null,null,null,null];
(statearr_41327[(0)] = cljs$core$async$state_machine__40522__auto__);

(statearr_41327[(1)] = (1));

return statearr_41327;
});
var cljs$core$async$state_machine__40522__auto____1 = (function (state_41306){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_41306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e41328){if((e41328 instanceof Object)){
var ex__40525__auto__ = e41328;
var statearr_41329_41350 = state_41306;
(statearr_41329_41350[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41351 = state_41306;
state_41306 = G__41351;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$state_machine__40522__auto__ = function(state_41306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40522__auto____1.call(this,state_41306);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40522__auto____0;
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40522__auto____1;
return cljs$core$async$state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___41335,tc,fc))
})();
var state__40637__auto__ = (function (){var statearr_41330 = f__40636__auto__.call(null);
(statearr_41330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___41335);

return statearr_41330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___41335,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__40635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto__){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto__){
return (function (state_41415){
var state_val_41416 = (state_41415[(1)]);
if((state_val_41416 === (7))){
var inst_41411 = (state_41415[(2)]);
var state_41415__$1 = state_41415;
var statearr_41417_41438 = state_41415__$1;
(statearr_41417_41438[(2)] = inst_41411);

(statearr_41417_41438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41416 === (1))){
var inst_41395 = init;
var state_41415__$1 = (function (){var statearr_41418 = state_41415;
(statearr_41418[(7)] = inst_41395);

return statearr_41418;
})();
var statearr_41419_41439 = state_41415__$1;
(statearr_41419_41439[(2)] = null);

(statearr_41419_41439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41416 === (4))){
var inst_41398 = (state_41415[(8)]);
var inst_41398__$1 = (state_41415[(2)]);
var inst_41399 = (inst_41398__$1 == null);
var state_41415__$1 = (function (){var statearr_41420 = state_41415;
(statearr_41420[(8)] = inst_41398__$1);

return statearr_41420;
})();
if(cljs.core.truth_(inst_41399)){
var statearr_41421_41440 = state_41415__$1;
(statearr_41421_41440[(1)] = (5));

} else {
var statearr_41422_41441 = state_41415__$1;
(statearr_41422_41441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41416 === (6))){
var inst_41395 = (state_41415[(7)]);
var inst_41402 = (state_41415[(9)]);
var inst_41398 = (state_41415[(8)]);
var inst_41402__$1 = f.call(null,inst_41395,inst_41398);
var inst_41403 = cljs.core.reduced_QMARK_.call(null,inst_41402__$1);
var state_41415__$1 = (function (){var statearr_41423 = state_41415;
(statearr_41423[(9)] = inst_41402__$1);

return statearr_41423;
})();
if(inst_41403){
var statearr_41424_41442 = state_41415__$1;
(statearr_41424_41442[(1)] = (8));

} else {
var statearr_41425_41443 = state_41415__$1;
(statearr_41425_41443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41416 === (3))){
var inst_41413 = (state_41415[(2)]);
var state_41415__$1 = state_41415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41415__$1,inst_41413);
} else {
if((state_val_41416 === (2))){
var state_41415__$1 = state_41415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41415__$1,(4),ch);
} else {
if((state_val_41416 === (9))){
var inst_41402 = (state_41415[(9)]);
var inst_41395 = inst_41402;
var state_41415__$1 = (function (){var statearr_41426 = state_41415;
(statearr_41426[(7)] = inst_41395);

return statearr_41426;
})();
var statearr_41427_41444 = state_41415__$1;
(statearr_41427_41444[(2)] = null);

(statearr_41427_41444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41416 === (5))){
var inst_41395 = (state_41415[(7)]);
var state_41415__$1 = state_41415;
var statearr_41428_41445 = state_41415__$1;
(statearr_41428_41445[(2)] = inst_41395);

(statearr_41428_41445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41416 === (10))){
var inst_41409 = (state_41415[(2)]);
var state_41415__$1 = state_41415;
var statearr_41429_41446 = state_41415__$1;
(statearr_41429_41446[(2)] = inst_41409);

(statearr_41429_41446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41416 === (8))){
var inst_41402 = (state_41415[(9)]);
var inst_41405 = cljs.core.deref.call(null,inst_41402);
var state_41415__$1 = state_41415;
var statearr_41430_41447 = state_41415__$1;
(statearr_41430_41447[(2)] = inst_41405);

(statearr_41430_41447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__40635__auto__))
;
return ((function (switch__40521__auto__,c__40635__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__40522__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40522__auto____0 = (function (){
var statearr_41434 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41434[(0)] = cljs$core$async$reduce_$_state_machine__40522__auto__);

(statearr_41434[(1)] = (1));

return statearr_41434;
});
var cljs$core$async$reduce_$_state_machine__40522__auto____1 = (function (state_41415){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_41415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e41435){if((e41435 instanceof Object)){
var ex__40525__auto__ = e41435;
var statearr_41436_41448 = state_41415;
(statearr_41436_41448[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41449 = state_41415;
state_41415 = G__41449;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40522__auto__ = function(state_41415){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40522__auto____1.call(this,state_41415);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40522__auto____0;
cljs$core$async$reduce_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40522__auto____1;
return cljs$core$async$reduce_$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto__))
})();
var state__40637__auto__ = (function (){var statearr_41437 = f__40636__auto__.call(null);
(statearr_41437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto__);

return statearr_41437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto__))
);

return c__40635__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__40635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto__,f__$1){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto__,f__$1){
return (function (state_41469){
var state_val_41470 = (state_41469[(1)]);
if((state_val_41470 === (1))){
var inst_41464 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_41469__$1 = state_41469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41469__$1,(2),inst_41464);
} else {
if((state_val_41470 === (2))){
var inst_41466 = (state_41469[(2)]);
var inst_41467 = f__$1.call(null,inst_41466);
var state_41469__$1 = state_41469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41469__$1,inst_41467);
} else {
return null;
}
}
});})(c__40635__auto__,f__$1))
;
return ((function (switch__40521__auto__,c__40635__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__40522__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40522__auto____0 = (function (){
var statearr_41474 = [null,null,null,null,null,null,null];
(statearr_41474[(0)] = cljs$core$async$transduce_$_state_machine__40522__auto__);

(statearr_41474[(1)] = (1));

return statearr_41474;
});
var cljs$core$async$transduce_$_state_machine__40522__auto____1 = (function (state_41469){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_41469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e41475){if((e41475 instanceof Object)){
var ex__40525__auto__ = e41475;
var statearr_41476_41478 = state_41469;
(statearr_41476_41478[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41479 = state_41469;
state_41469 = G__41479;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40522__auto__ = function(state_41469){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40522__auto____1.call(this,state_41469);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40522__auto____0;
cljs$core$async$transduce_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40522__auto____1;
return cljs$core$async$transduce_$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto__,f__$1))
})();
var state__40637__auto__ = (function (){var statearr_41477 = f__40636__auto__.call(null);
(statearr_41477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto__);

return statearr_41477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto__,f__$1))
);

return c__40635__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args41480 = [];
var len__29970__auto___41532 = arguments.length;
var i__29971__auto___41533 = (0);
while(true){
if((i__29971__auto___41533 < len__29970__auto___41532)){
args41480.push((arguments[i__29971__auto___41533]));

var G__41534 = (i__29971__auto___41533 + (1));
i__29971__auto___41533 = G__41534;
continue;
} else {
}
break;
}

var G__41482 = args41480.length;
switch (G__41482) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41480.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__40635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto__){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto__){
return (function (state_41507){
var state_val_41508 = (state_41507[(1)]);
if((state_val_41508 === (7))){
var inst_41489 = (state_41507[(2)]);
var state_41507__$1 = state_41507;
var statearr_41509_41536 = state_41507__$1;
(statearr_41509_41536[(2)] = inst_41489);

(statearr_41509_41536[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41508 === (1))){
var inst_41483 = cljs.core.seq.call(null,coll);
var inst_41484 = inst_41483;
var state_41507__$1 = (function (){var statearr_41510 = state_41507;
(statearr_41510[(7)] = inst_41484);

return statearr_41510;
})();
var statearr_41511_41537 = state_41507__$1;
(statearr_41511_41537[(2)] = null);

(statearr_41511_41537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41508 === (4))){
var inst_41484 = (state_41507[(7)]);
var inst_41487 = cljs.core.first.call(null,inst_41484);
var state_41507__$1 = state_41507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41507__$1,(7),ch,inst_41487);
} else {
if((state_val_41508 === (13))){
var inst_41501 = (state_41507[(2)]);
var state_41507__$1 = state_41507;
var statearr_41512_41538 = state_41507__$1;
(statearr_41512_41538[(2)] = inst_41501);

(statearr_41512_41538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41508 === (6))){
var inst_41492 = (state_41507[(2)]);
var state_41507__$1 = state_41507;
if(cljs.core.truth_(inst_41492)){
var statearr_41513_41539 = state_41507__$1;
(statearr_41513_41539[(1)] = (8));

} else {
var statearr_41514_41540 = state_41507__$1;
(statearr_41514_41540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41508 === (3))){
var inst_41505 = (state_41507[(2)]);
var state_41507__$1 = state_41507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41507__$1,inst_41505);
} else {
if((state_val_41508 === (12))){
var state_41507__$1 = state_41507;
var statearr_41515_41541 = state_41507__$1;
(statearr_41515_41541[(2)] = null);

(statearr_41515_41541[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41508 === (2))){
var inst_41484 = (state_41507[(7)]);
var state_41507__$1 = state_41507;
if(cljs.core.truth_(inst_41484)){
var statearr_41516_41542 = state_41507__$1;
(statearr_41516_41542[(1)] = (4));

} else {
var statearr_41517_41543 = state_41507__$1;
(statearr_41517_41543[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41508 === (11))){
var inst_41498 = cljs.core.async.close_BANG_.call(null,ch);
var state_41507__$1 = state_41507;
var statearr_41518_41544 = state_41507__$1;
(statearr_41518_41544[(2)] = inst_41498);

(statearr_41518_41544[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41508 === (9))){
var state_41507__$1 = state_41507;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41519_41545 = state_41507__$1;
(statearr_41519_41545[(1)] = (11));

} else {
var statearr_41520_41546 = state_41507__$1;
(statearr_41520_41546[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41508 === (5))){
var inst_41484 = (state_41507[(7)]);
var state_41507__$1 = state_41507;
var statearr_41521_41547 = state_41507__$1;
(statearr_41521_41547[(2)] = inst_41484);

(statearr_41521_41547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41508 === (10))){
var inst_41503 = (state_41507[(2)]);
var state_41507__$1 = state_41507;
var statearr_41522_41548 = state_41507__$1;
(statearr_41522_41548[(2)] = inst_41503);

(statearr_41522_41548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41508 === (8))){
var inst_41484 = (state_41507[(7)]);
var inst_41494 = cljs.core.next.call(null,inst_41484);
var inst_41484__$1 = inst_41494;
var state_41507__$1 = (function (){var statearr_41523 = state_41507;
(statearr_41523[(7)] = inst_41484__$1);

return statearr_41523;
})();
var statearr_41524_41549 = state_41507__$1;
(statearr_41524_41549[(2)] = null);

(statearr_41524_41549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40635__auto__))
;
return ((function (switch__40521__auto__,c__40635__auto__){
return (function() {
var cljs$core$async$state_machine__40522__auto__ = null;
var cljs$core$async$state_machine__40522__auto____0 = (function (){
var statearr_41528 = [null,null,null,null,null,null,null,null];
(statearr_41528[(0)] = cljs$core$async$state_machine__40522__auto__);

(statearr_41528[(1)] = (1));

return statearr_41528;
});
var cljs$core$async$state_machine__40522__auto____1 = (function (state_41507){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_41507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e41529){if((e41529 instanceof Object)){
var ex__40525__auto__ = e41529;
var statearr_41530_41550 = state_41507;
(statearr_41530_41550[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41551 = state_41507;
state_41507 = G__41551;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$state_machine__40522__auto__ = function(state_41507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40522__auto____1.call(this,state_41507);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40522__auto____0;
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40522__auto____1;
return cljs$core$async$state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto__))
})();
var state__40637__auto__ = (function (){var statearr_41531 = f__40636__auto__.call(null);
(statearr_41531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto__);

return statearr_41531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto__))
);

return c__40635__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__29467__auto__ = (((_ == null))?null:_);
var m__29468__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,_);
} else {
var m__29468__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__29467__auto__ = (((m == null))?null:m);
var m__29468__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29468__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__29467__auto__ = (((m == null))?null:m);
var m__29468__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,m,ch);
} else {
var m__29468__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__29467__auto__ = (((m == null))?null:m);
var m__29468__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,m);
} else {
var m__29468__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async41777 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41777 = (function (ch,cs,meta41778){
this.ch = ch;
this.cs = cs;
this.meta41778 = meta41778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_41779,meta41778__$1){
var self__ = this;
var _41779__$1 = this;
return (new cljs.core.async.t_cljs$core$async41777(self__.ch,self__.cs,meta41778__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async41777.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_41779){
var self__ = this;
var _41779__$1 = this;
return self__.meta41778;
});})(cs))
;

cljs.core.async.t_cljs$core$async41777.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41777.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async41777.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41777.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41777.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41777.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async41777.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41778","meta41778",1161242079,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async41777.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41777.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41777";

cljs.core.async.t_cljs$core$async41777.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"cljs.core.async/t_cljs$core$async41777");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async41777 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async41777(ch__$1,cs__$1,meta41778){
return (new cljs.core.async.t_cljs$core$async41777(ch__$1,cs__$1,meta41778));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async41777(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__40635__auto___42002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___42002,cs,m,dchan,dctr,done){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___42002,cs,m,dchan,dctr,done){
return (function (state_41914){
var state_val_41915 = (state_41914[(1)]);
if((state_val_41915 === (7))){
var inst_41910 = (state_41914[(2)]);
var state_41914__$1 = state_41914;
var statearr_41916_42003 = state_41914__$1;
(statearr_41916_42003[(2)] = inst_41910);

(statearr_41916_42003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (20))){
var inst_41813 = (state_41914[(7)]);
var inst_41825 = cljs.core.first.call(null,inst_41813);
var inst_41826 = cljs.core.nth.call(null,inst_41825,(0),null);
var inst_41827 = cljs.core.nth.call(null,inst_41825,(1),null);
var state_41914__$1 = (function (){var statearr_41917 = state_41914;
(statearr_41917[(8)] = inst_41826);

return statearr_41917;
})();
if(cljs.core.truth_(inst_41827)){
var statearr_41918_42004 = state_41914__$1;
(statearr_41918_42004[(1)] = (22));

} else {
var statearr_41919_42005 = state_41914__$1;
(statearr_41919_42005[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (27))){
var inst_41862 = (state_41914[(9)]);
var inst_41855 = (state_41914[(10)]);
var inst_41857 = (state_41914[(11)]);
var inst_41782 = (state_41914[(12)]);
var inst_41862__$1 = cljs.core._nth.call(null,inst_41855,inst_41857);
var inst_41863 = cljs.core.async.put_BANG_.call(null,inst_41862__$1,inst_41782,done);
var state_41914__$1 = (function (){var statearr_41920 = state_41914;
(statearr_41920[(9)] = inst_41862__$1);

return statearr_41920;
})();
if(cljs.core.truth_(inst_41863)){
var statearr_41921_42006 = state_41914__$1;
(statearr_41921_42006[(1)] = (30));

} else {
var statearr_41922_42007 = state_41914__$1;
(statearr_41922_42007[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (1))){
var state_41914__$1 = state_41914;
var statearr_41923_42008 = state_41914__$1;
(statearr_41923_42008[(2)] = null);

(statearr_41923_42008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (24))){
var inst_41813 = (state_41914[(7)]);
var inst_41832 = (state_41914[(2)]);
var inst_41833 = cljs.core.next.call(null,inst_41813);
var inst_41791 = inst_41833;
var inst_41792 = null;
var inst_41793 = (0);
var inst_41794 = (0);
var state_41914__$1 = (function (){var statearr_41924 = state_41914;
(statearr_41924[(13)] = inst_41832);

(statearr_41924[(14)] = inst_41791);

(statearr_41924[(15)] = inst_41794);

(statearr_41924[(16)] = inst_41792);

(statearr_41924[(17)] = inst_41793);

return statearr_41924;
})();
var statearr_41925_42009 = state_41914__$1;
(statearr_41925_42009[(2)] = null);

(statearr_41925_42009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (39))){
var state_41914__$1 = state_41914;
var statearr_41929_42010 = state_41914__$1;
(statearr_41929_42010[(2)] = null);

(statearr_41929_42010[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (4))){
var inst_41782 = (state_41914[(12)]);
var inst_41782__$1 = (state_41914[(2)]);
var inst_41783 = (inst_41782__$1 == null);
var state_41914__$1 = (function (){var statearr_41930 = state_41914;
(statearr_41930[(12)] = inst_41782__$1);

return statearr_41930;
})();
if(cljs.core.truth_(inst_41783)){
var statearr_41931_42011 = state_41914__$1;
(statearr_41931_42011[(1)] = (5));

} else {
var statearr_41932_42012 = state_41914__$1;
(statearr_41932_42012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (15))){
var inst_41791 = (state_41914[(14)]);
var inst_41794 = (state_41914[(15)]);
var inst_41792 = (state_41914[(16)]);
var inst_41793 = (state_41914[(17)]);
var inst_41809 = (state_41914[(2)]);
var inst_41810 = (inst_41794 + (1));
var tmp41926 = inst_41791;
var tmp41927 = inst_41792;
var tmp41928 = inst_41793;
var inst_41791__$1 = tmp41926;
var inst_41792__$1 = tmp41927;
var inst_41793__$1 = tmp41928;
var inst_41794__$1 = inst_41810;
var state_41914__$1 = (function (){var statearr_41933 = state_41914;
(statearr_41933[(14)] = inst_41791__$1);

(statearr_41933[(15)] = inst_41794__$1);

(statearr_41933[(18)] = inst_41809);

(statearr_41933[(16)] = inst_41792__$1);

(statearr_41933[(17)] = inst_41793__$1);

return statearr_41933;
})();
var statearr_41934_42013 = state_41914__$1;
(statearr_41934_42013[(2)] = null);

(statearr_41934_42013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (21))){
var inst_41836 = (state_41914[(2)]);
var state_41914__$1 = state_41914;
var statearr_41938_42014 = state_41914__$1;
(statearr_41938_42014[(2)] = inst_41836);

(statearr_41938_42014[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (31))){
var inst_41862 = (state_41914[(9)]);
var inst_41866 = done.call(null,null);
var inst_41867 = cljs.core.async.untap_STAR_.call(null,m,inst_41862);
var state_41914__$1 = (function (){var statearr_41939 = state_41914;
(statearr_41939[(19)] = inst_41866);

return statearr_41939;
})();
var statearr_41940_42015 = state_41914__$1;
(statearr_41940_42015[(2)] = inst_41867);

(statearr_41940_42015[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (32))){
var inst_41856 = (state_41914[(20)]);
var inst_41855 = (state_41914[(10)]);
var inst_41857 = (state_41914[(11)]);
var inst_41854 = (state_41914[(21)]);
var inst_41869 = (state_41914[(2)]);
var inst_41870 = (inst_41857 + (1));
var tmp41935 = inst_41856;
var tmp41936 = inst_41855;
var tmp41937 = inst_41854;
var inst_41854__$1 = tmp41937;
var inst_41855__$1 = tmp41936;
var inst_41856__$1 = tmp41935;
var inst_41857__$1 = inst_41870;
var state_41914__$1 = (function (){var statearr_41941 = state_41914;
(statearr_41941[(22)] = inst_41869);

(statearr_41941[(20)] = inst_41856__$1);

(statearr_41941[(10)] = inst_41855__$1);

(statearr_41941[(11)] = inst_41857__$1);

(statearr_41941[(21)] = inst_41854__$1);

return statearr_41941;
})();
var statearr_41942_42016 = state_41914__$1;
(statearr_41942_42016[(2)] = null);

(statearr_41942_42016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (40))){
var inst_41882 = (state_41914[(23)]);
var inst_41886 = done.call(null,null);
var inst_41887 = cljs.core.async.untap_STAR_.call(null,m,inst_41882);
var state_41914__$1 = (function (){var statearr_41943 = state_41914;
(statearr_41943[(24)] = inst_41886);

return statearr_41943;
})();
var statearr_41944_42017 = state_41914__$1;
(statearr_41944_42017[(2)] = inst_41887);

(statearr_41944_42017[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (33))){
var inst_41873 = (state_41914[(25)]);
var inst_41875 = cljs.core.chunked_seq_QMARK_.call(null,inst_41873);
var state_41914__$1 = state_41914;
if(inst_41875){
var statearr_41945_42018 = state_41914__$1;
(statearr_41945_42018[(1)] = (36));

} else {
var statearr_41946_42019 = state_41914__$1;
(statearr_41946_42019[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (13))){
var inst_41803 = (state_41914[(26)]);
var inst_41806 = cljs.core.async.close_BANG_.call(null,inst_41803);
var state_41914__$1 = state_41914;
var statearr_41947_42020 = state_41914__$1;
(statearr_41947_42020[(2)] = inst_41806);

(statearr_41947_42020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (22))){
var inst_41826 = (state_41914[(8)]);
var inst_41829 = cljs.core.async.close_BANG_.call(null,inst_41826);
var state_41914__$1 = state_41914;
var statearr_41948_42021 = state_41914__$1;
(statearr_41948_42021[(2)] = inst_41829);

(statearr_41948_42021[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (36))){
var inst_41873 = (state_41914[(25)]);
var inst_41877 = cljs.core.chunk_first.call(null,inst_41873);
var inst_41878 = cljs.core.chunk_rest.call(null,inst_41873);
var inst_41879 = cljs.core.count.call(null,inst_41877);
var inst_41854 = inst_41878;
var inst_41855 = inst_41877;
var inst_41856 = inst_41879;
var inst_41857 = (0);
var state_41914__$1 = (function (){var statearr_41949 = state_41914;
(statearr_41949[(20)] = inst_41856);

(statearr_41949[(10)] = inst_41855);

(statearr_41949[(11)] = inst_41857);

(statearr_41949[(21)] = inst_41854);

return statearr_41949;
})();
var statearr_41950_42022 = state_41914__$1;
(statearr_41950_42022[(2)] = null);

(statearr_41950_42022[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (41))){
var inst_41873 = (state_41914[(25)]);
var inst_41889 = (state_41914[(2)]);
var inst_41890 = cljs.core.next.call(null,inst_41873);
var inst_41854 = inst_41890;
var inst_41855 = null;
var inst_41856 = (0);
var inst_41857 = (0);
var state_41914__$1 = (function (){var statearr_41951 = state_41914;
(statearr_41951[(20)] = inst_41856);

(statearr_41951[(10)] = inst_41855);

(statearr_41951[(11)] = inst_41857);

(statearr_41951[(27)] = inst_41889);

(statearr_41951[(21)] = inst_41854);

return statearr_41951;
})();
var statearr_41952_42023 = state_41914__$1;
(statearr_41952_42023[(2)] = null);

(statearr_41952_42023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (43))){
var state_41914__$1 = state_41914;
var statearr_41953_42024 = state_41914__$1;
(statearr_41953_42024[(2)] = null);

(statearr_41953_42024[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (29))){
var inst_41898 = (state_41914[(2)]);
var state_41914__$1 = state_41914;
var statearr_41954_42025 = state_41914__$1;
(statearr_41954_42025[(2)] = inst_41898);

(statearr_41954_42025[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (44))){
var inst_41907 = (state_41914[(2)]);
var state_41914__$1 = (function (){var statearr_41955 = state_41914;
(statearr_41955[(28)] = inst_41907);

return statearr_41955;
})();
var statearr_41956_42026 = state_41914__$1;
(statearr_41956_42026[(2)] = null);

(statearr_41956_42026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (6))){
var inst_41846 = (state_41914[(29)]);
var inst_41845 = cljs.core.deref.call(null,cs);
var inst_41846__$1 = cljs.core.keys.call(null,inst_41845);
var inst_41847 = cljs.core.count.call(null,inst_41846__$1);
var inst_41848 = cljs.core.reset_BANG_.call(null,dctr,inst_41847);
var inst_41853 = cljs.core.seq.call(null,inst_41846__$1);
var inst_41854 = inst_41853;
var inst_41855 = null;
var inst_41856 = (0);
var inst_41857 = (0);
var state_41914__$1 = (function (){var statearr_41957 = state_41914;
(statearr_41957[(20)] = inst_41856);

(statearr_41957[(29)] = inst_41846__$1);

(statearr_41957[(10)] = inst_41855);

(statearr_41957[(11)] = inst_41857);

(statearr_41957[(30)] = inst_41848);

(statearr_41957[(21)] = inst_41854);

return statearr_41957;
})();
var statearr_41958_42027 = state_41914__$1;
(statearr_41958_42027[(2)] = null);

(statearr_41958_42027[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (28))){
var inst_41873 = (state_41914[(25)]);
var inst_41854 = (state_41914[(21)]);
var inst_41873__$1 = cljs.core.seq.call(null,inst_41854);
var state_41914__$1 = (function (){var statearr_41959 = state_41914;
(statearr_41959[(25)] = inst_41873__$1);

return statearr_41959;
})();
if(inst_41873__$1){
var statearr_41960_42028 = state_41914__$1;
(statearr_41960_42028[(1)] = (33));

} else {
var statearr_41961_42029 = state_41914__$1;
(statearr_41961_42029[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (25))){
var inst_41856 = (state_41914[(20)]);
var inst_41857 = (state_41914[(11)]);
var inst_41859 = (inst_41857 < inst_41856);
var inst_41860 = inst_41859;
var state_41914__$1 = state_41914;
if(cljs.core.truth_(inst_41860)){
var statearr_41962_42030 = state_41914__$1;
(statearr_41962_42030[(1)] = (27));

} else {
var statearr_41963_42031 = state_41914__$1;
(statearr_41963_42031[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (34))){
var state_41914__$1 = state_41914;
var statearr_41964_42032 = state_41914__$1;
(statearr_41964_42032[(2)] = null);

(statearr_41964_42032[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (17))){
var state_41914__$1 = state_41914;
var statearr_41965_42033 = state_41914__$1;
(statearr_41965_42033[(2)] = null);

(statearr_41965_42033[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (3))){
var inst_41912 = (state_41914[(2)]);
var state_41914__$1 = state_41914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41914__$1,inst_41912);
} else {
if((state_val_41915 === (12))){
var inst_41841 = (state_41914[(2)]);
var state_41914__$1 = state_41914;
var statearr_41966_42034 = state_41914__$1;
(statearr_41966_42034[(2)] = inst_41841);

(statearr_41966_42034[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (2))){
var state_41914__$1 = state_41914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41914__$1,(4),ch);
} else {
if((state_val_41915 === (23))){
var state_41914__$1 = state_41914;
var statearr_41967_42035 = state_41914__$1;
(statearr_41967_42035[(2)] = null);

(statearr_41967_42035[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (35))){
var inst_41896 = (state_41914[(2)]);
var state_41914__$1 = state_41914;
var statearr_41968_42036 = state_41914__$1;
(statearr_41968_42036[(2)] = inst_41896);

(statearr_41968_42036[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (19))){
var inst_41813 = (state_41914[(7)]);
var inst_41817 = cljs.core.chunk_first.call(null,inst_41813);
var inst_41818 = cljs.core.chunk_rest.call(null,inst_41813);
var inst_41819 = cljs.core.count.call(null,inst_41817);
var inst_41791 = inst_41818;
var inst_41792 = inst_41817;
var inst_41793 = inst_41819;
var inst_41794 = (0);
var state_41914__$1 = (function (){var statearr_41969 = state_41914;
(statearr_41969[(14)] = inst_41791);

(statearr_41969[(15)] = inst_41794);

(statearr_41969[(16)] = inst_41792);

(statearr_41969[(17)] = inst_41793);

return statearr_41969;
})();
var statearr_41970_42037 = state_41914__$1;
(statearr_41970_42037[(2)] = null);

(statearr_41970_42037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (11))){
var inst_41813 = (state_41914[(7)]);
var inst_41791 = (state_41914[(14)]);
var inst_41813__$1 = cljs.core.seq.call(null,inst_41791);
var state_41914__$1 = (function (){var statearr_41971 = state_41914;
(statearr_41971[(7)] = inst_41813__$1);

return statearr_41971;
})();
if(inst_41813__$1){
var statearr_41972_42038 = state_41914__$1;
(statearr_41972_42038[(1)] = (16));

} else {
var statearr_41973_42039 = state_41914__$1;
(statearr_41973_42039[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (9))){
var inst_41843 = (state_41914[(2)]);
var state_41914__$1 = state_41914;
var statearr_41974_42040 = state_41914__$1;
(statearr_41974_42040[(2)] = inst_41843);

(statearr_41974_42040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (5))){
var inst_41789 = cljs.core.deref.call(null,cs);
var inst_41790 = cljs.core.seq.call(null,inst_41789);
var inst_41791 = inst_41790;
var inst_41792 = null;
var inst_41793 = (0);
var inst_41794 = (0);
var state_41914__$1 = (function (){var statearr_41975 = state_41914;
(statearr_41975[(14)] = inst_41791);

(statearr_41975[(15)] = inst_41794);

(statearr_41975[(16)] = inst_41792);

(statearr_41975[(17)] = inst_41793);

return statearr_41975;
})();
var statearr_41976_42041 = state_41914__$1;
(statearr_41976_42041[(2)] = null);

(statearr_41976_42041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (14))){
var state_41914__$1 = state_41914;
var statearr_41977_42042 = state_41914__$1;
(statearr_41977_42042[(2)] = null);

(statearr_41977_42042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (45))){
var inst_41904 = (state_41914[(2)]);
var state_41914__$1 = state_41914;
var statearr_41978_42043 = state_41914__$1;
(statearr_41978_42043[(2)] = inst_41904);

(statearr_41978_42043[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (26))){
var inst_41846 = (state_41914[(29)]);
var inst_41900 = (state_41914[(2)]);
var inst_41901 = cljs.core.seq.call(null,inst_41846);
var state_41914__$1 = (function (){var statearr_41979 = state_41914;
(statearr_41979[(31)] = inst_41900);

return statearr_41979;
})();
if(inst_41901){
var statearr_41980_42044 = state_41914__$1;
(statearr_41980_42044[(1)] = (42));

} else {
var statearr_41981_42045 = state_41914__$1;
(statearr_41981_42045[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (16))){
var inst_41813 = (state_41914[(7)]);
var inst_41815 = cljs.core.chunked_seq_QMARK_.call(null,inst_41813);
var state_41914__$1 = state_41914;
if(inst_41815){
var statearr_41982_42046 = state_41914__$1;
(statearr_41982_42046[(1)] = (19));

} else {
var statearr_41983_42047 = state_41914__$1;
(statearr_41983_42047[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (38))){
var inst_41893 = (state_41914[(2)]);
var state_41914__$1 = state_41914;
var statearr_41984_42048 = state_41914__$1;
(statearr_41984_42048[(2)] = inst_41893);

(statearr_41984_42048[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (30))){
var state_41914__$1 = state_41914;
var statearr_41985_42049 = state_41914__$1;
(statearr_41985_42049[(2)] = null);

(statearr_41985_42049[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (10))){
var inst_41794 = (state_41914[(15)]);
var inst_41792 = (state_41914[(16)]);
var inst_41802 = cljs.core._nth.call(null,inst_41792,inst_41794);
var inst_41803 = cljs.core.nth.call(null,inst_41802,(0),null);
var inst_41804 = cljs.core.nth.call(null,inst_41802,(1),null);
var state_41914__$1 = (function (){var statearr_41986 = state_41914;
(statearr_41986[(26)] = inst_41803);

return statearr_41986;
})();
if(cljs.core.truth_(inst_41804)){
var statearr_41987_42050 = state_41914__$1;
(statearr_41987_42050[(1)] = (13));

} else {
var statearr_41988_42051 = state_41914__$1;
(statearr_41988_42051[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (18))){
var inst_41839 = (state_41914[(2)]);
var state_41914__$1 = state_41914;
var statearr_41989_42052 = state_41914__$1;
(statearr_41989_42052[(2)] = inst_41839);

(statearr_41989_42052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (42))){
var state_41914__$1 = state_41914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41914__$1,(45),dchan);
} else {
if((state_val_41915 === (37))){
var inst_41873 = (state_41914[(25)]);
var inst_41882 = (state_41914[(23)]);
var inst_41782 = (state_41914[(12)]);
var inst_41882__$1 = cljs.core.first.call(null,inst_41873);
var inst_41883 = cljs.core.async.put_BANG_.call(null,inst_41882__$1,inst_41782,done);
var state_41914__$1 = (function (){var statearr_41990 = state_41914;
(statearr_41990[(23)] = inst_41882__$1);

return statearr_41990;
})();
if(cljs.core.truth_(inst_41883)){
var statearr_41991_42053 = state_41914__$1;
(statearr_41991_42053[(1)] = (39));

} else {
var statearr_41992_42054 = state_41914__$1;
(statearr_41992_42054[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41915 === (8))){
var inst_41794 = (state_41914[(15)]);
var inst_41793 = (state_41914[(17)]);
var inst_41796 = (inst_41794 < inst_41793);
var inst_41797 = inst_41796;
var state_41914__$1 = state_41914;
if(cljs.core.truth_(inst_41797)){
var statearr_41993_42055 = state_41914__$1;
(statearr_41993_42055[(1)] = (10));

} else {
var statearr_41994_42056 = state_41914__$1;
(statearr_41994_42056[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40635__auto___42002,cs,m,dchan,dctr,done))
;
return ((function (switch__40521__auto__,c__40635__auto___42002,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__40522__auto__ = null;
var cljs$core$async$mult_$_state_machine__40522__auto____0 = (function (){
var statearr_41998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41998[(0)] = cljs$core$async$mult_$_state_machine__40522__auto__);

(statearr_41998[(1)] = (1));

return statearr_41998;
});
var cljs$core$async$mult_$_state_machine__40522__auto____1 = (function (state_41914){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_41914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e41999){if((e41999 instanceof Object)){
var ex__40525__auto__ = e41999;
var statearr_42000_42057 = state_41914;
(statearr_42000_42057[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42058 = state_41914;
state_41914 = G__42058;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40522__auto__ = function(state_41914){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40522__auto____1.call(this,state_41914);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40522__auto____0;
cljs$core$async$mult_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40522__auto____1;
return cljs$core$async$mult_$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___42002,cs,m,dchan,dctr,done))
})();
var state__40637__auto__ = (function (){var statearr_42001 = f__40636__auto__.call(null);
(statearr_42001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___42002);

return statearr_42001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___42002,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args42059 = [];
var len__29970__auto___42062 = arguments.length;
var i__29971__auto___42063 = (0);
while(true){
if((i__29971__auto___42063 < len__29970__auto___42062)){
args42059.push((arguments[i__29971__auto___42063]));

var G__42064 = (i__29971__auto___42063 + (1));
i__29971__auto___42063 = G__42064;
continue;
} else {
}
break;
}

var G__42061 = args42059.length;
switch (G__42061) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42059.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__29467__auto__ = (((m == null))?null:m);
var m__29468__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,m,ch);
} else {
var m__29468__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__29467__auto__ = (((m == null))?null:m);
var m__29468__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,m,ch);
} else {
var m__29468__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__29467__auto__ = (((m == null))?null:m);
var m__29468__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,m);
} else {
var m__29468__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__29467__auto__ = (((m == null))?null:m);
var m__29468__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,m,state_map);
} else {
var m__29468__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__29467__auto__ = (((m == null))?null:m);
var m__29468__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,m,mode);
} else {
var m__29468__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29977__auto__ = [];
var len__29970__auto___42076 = arguments.length;
var i__29971__auto___42077 = (0);
while(true){
if((i__29971__auto___42077 < len__29970__auto___42076)){
args__29977__auto__.push((arguments[i__29971__auto___42077]));

var G__42078 = (i__29971__auto___42077 + (1));
i__29971__auto___42077 = G__42078;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((3) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29978__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42070){
var map__42071 = p__42070;
var map__42071__$1 = ((((!((map__42071 == null)))?((((map__42071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42071):map__42071);
var opts = map__42071__$1;
var statearr_42073_42079 = state;
(statearr_42073_42079[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6738__auto__ = cljs.core.async.do_alts.call(null,((function (map__42071,map__42071__$1,opts){
return (function (val){
var statearr_42074_42080 = state;
(statearr_42074_42080[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42071,map__42071__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6738__auto__)){
var cb = temp__6738__auto__;
var statearr_42075_42081 = state;
(statearr_42075_42081[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42066){
var G__42067 = cljs.core.first.call(null,seq42066);
var seq42066__$1 = cljs.core.next.call(null,seq42066);
var G__42068 = cljs.core.first.call(null,seq42066__$1);
var seq42066__$2 = cljs.core.next.call(null,seq42066__$1);
var G__42069 = cljs.core.first.call(null,seq42066__$2);
var seq42066__$3 = cljs.core.next.call(null,seq42066__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42067,G__42068,G__42069,seq42066__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async42249 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42249 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta42250){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta42250 = meta42250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42251,meta42250__$1){
var self__ = this;
var _42251__$1 = this;
return (new cljs.core.async.t_cljs$core$async42249(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta42250__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42249.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42251){
var self__ = this;
var _42251__$1 = this;
return self__.meta42250;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42249.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42249.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42249.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42249.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42249.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42249.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42249.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42249.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42249.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta42250","meta42250",-2046419123,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42249.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42249";

cljs.core.async.t_cljs$core$async42249.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"cljs.core.async/t_cljs$core$async42249");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42249 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42249(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42250){
return (new cljs.core.async.t_cljs$core$async42249(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta42250));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42249(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40635__auto___42416 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___42416,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___42416,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_42353){
var state_val_42354 = (state_42353[(1)]);
if((state_val_42354 === (7))){
var inst_42268 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
var statearr_42355_42417 = state_42353__$1;
(statearr_42355_42417[(2)] = inst_42268);

(statearr_42355_42417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (20))){
var inst_42280 = (state_42353[(7)]);
var state_42353__$1 = state_42353;
var statearr_42356_42418 = state_42353__$1;
(statearr_42356_42418[(2)] = inst_42280);

(statearr_42356_42418[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (27))){
var state_42353__$1 = state_42353;
var statearr_42357_42419 = state_42353__$1;
(statearr_42357_42419[(2)] = null);

(statearr_42357_42419[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (1))){
var inst_42255 = (state_42353[(8)]);
var inst_42255__$1 = calc_state.call(null);
var inst_42257 = (inst_42255__$1 == null);
var inst_42258 = cljs.core.not.call(null,inst_42257);
var state_42353__$1 = (function (){var statearr_42358 = state_42353;
(statearr_42358[(8)] = inst_42255__$1);

return statearr_42358;
})();
if(inst_42258){
var statearr_42359_42420 = state_42353__$1;
(statearr_42359_42420[(1)] = (2));

} else {
var statearr_42360_42421 = state_42353__$1;
(statearr_42360_42421[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (24))){
var inst_42313 = (state_42353[(9)]);
var inst_42304 = (state_42353[(10)]);
var inst_42327 = (state_42353[(11)]);
var inst_42327__$1 = inst_42304.call(null,inst_42313);
var state_42353__$1 = (function (){var statearr_42361 = state_42353;
(statearr_42361[(11)] = inst_42327__$1);

return statearr_42361;
})();
if(cljs.core.truth_(inst_42327__$1)){
var statearr_42362_42422 = state_42353__$1;
(statearr_42362_42422[(1)] = (29));

} else {
var statearr_42363_42423 = state_42353__$1;
(statearr_42363_42423[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (4))){
var inst_42271 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
if(cljs.core.truth_(inst_42271)){
var statearr_42364_42424 = state_42353__$1;
(statearr_42364_42424[(1)] = (8));

} else {
var statearr_42365_42425 = state_42353__$1;
(statearr_42365_42425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (15))){
var inst_42298 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
if(cljs.core.truth_(inst_42298)){
var statearr_42366_42426 = state_42353__$1;
(statearr_42366_42426[(1)] = (19));

} else {
var statearr_42367_42427 = state_42353__$1;
(statearr_42367_42427[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (21))){
var inst_42303 = (state_42353[(12)]);
var inst_42303__$1 = (state_42353[(2)]);
var inst_42304 = cljs.core.get.call(null,inst_42303__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42305 = cljs.core.get.call(null,inst_42303__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42306 = cljs.core.get.call(null,inst_42303__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42353__$1 = (function (){var statearr_42368 = state_42353;
(statearr_42368[(10)] = inst_42304);

(statearr_42368[(13)] = inst_42305);

(statearr_42368[(12)] = inst_42303__$1);

return statearr_42368;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_42353__$1,(22),inst_42306);
} else {
if((state_val_42354 === (31))){
var inst_42335 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
if(cljs.core.truth_(inst_42335)){
var statearr_42369_42428 = state_42353__$1;
(statearr_42369_42428[(1)] = (32));

} else {
var statearr_42370_42429 = state_42353__$1;
(statearr_42370_42429[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (32))){
var inst_42312 = (state_42353[(14)]);
var state_42353__$1 = state_42353;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42353__$1,(35),out,inst_42312);
} else {
if((state_val_42354 === (33))){
var inst_42303 = (state_42353[(12)]);
var inst_42280 = inst_42303;
var state_42353__$1 = (function (){var statearr_42371 = state_42353;
(statearr_42371[(7)] = inst_42280);

return statearr_42371;
})();
var statearr_42372_42430 = state_42353__$1;
(statearr_42372_42430[(2)] = null);

(statearr_42372_42430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (13))){
var inst_42280 = (state_42353[(7)]);
var inst_42287 = inst_42280.cljs$lang$protocol_mask$partition0$;
var inst_42288 = (inst_42287 & (64));
var inst_42289 = inst_42280.cljs$core$ISeq$;
var inst_42290 = (cljs.core.PROTOCOL_SENTINEL === inst_42289);
var inst_42291 = (inst_42288) || (inst_42290);
var state_42353__$1 = state_42353;
if(cljs.core.truth_(inst_42291)){
var statearr_42373_42431 = state_42353__$1;
(statearr_42373_42431[(1)] = (16));

} else {
var statearr_42374_42432 = state_42353__$1;
(statearr_42374_42432[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (22))){
var inst_42313 = (state_42353[(9)]);
var inst_42312 = (state_42353[(14)]);
var inst_42311 = (state_42353[(2)]);
var inst_42312__$1 = cljs.core.nth.call(null,inst_42311,(0),null);
var inst_42313__$1 = cljs.core.nth.call(null,inst_42311,(1),null);
var inst_42314 = (inst_42312__$1 == null);
var inst_42315 = cljs.core._EQ_.call(null,inst_42313__$1,change);
var inst_42316 = (inst_42314) || (inst_42315);
var state_42353__$1 = (function (){var statearr_42375 = state_42353;
(statearr_42375[(9)] = inst_42313__$1);

(statearr_42375[(14)] = inst_42312__$1);

return statearr_42375;
})();
if(cljs.core.truth_(inst_42316)){
var statearr_42376_42433 = state_42353__$1;
(statearr_42376_42433[(1)] = (23));

} else {
var statearr_42377_42434 = state_42353__$1;
(statearr_42377_42434[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (36))){
var inst_42303 = (state_42353[(12)]);
var inst_42280 = inst_42303;
var state_42353__$1 = (function (){var statearr_42378 = state_42353;
(statearr_42378[(7)] = inst_42280);

return statearr_42378;
})();
var statearr_42379_42435 = state_42353__$1;
(statearr_42379_42435[(2)] = null);

(statearr_42379_42435[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (29))){
var inst_42327 = (state_42353[(11)]);
var state_42353__$1 = state_42353;
var statearr_42380_42436 = state_42353__$1;
(statearr_42380_42436[(2)] = inst_42327);

(statearr_42380_42436[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (6))){
var state_42353__$1 = state_42353;
var statearr_42381_42437 = state_42353__$1;
(statearr_42381_42437[(2)] = false);

(statearr_42381_42437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (28))){
var inst_42323 = (state_42353[(2)]);
var inst_42324 = calc_state.call(null);
var inst_42280 = inst_42324;
var state_42353__$1 = (function (){var statearr_42382 = state_42353;
(statearr_42382[(15)] = inst_42323);

(statearr_42382[(7)] = inst_42280);

return statearr_42382;
})();
var statearr_42383_42438 = state_42353__$1;
(statearr_42383_42438[(2)] = null);

(statearr_42383_42438[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (25))){
var inst_42349 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
var statearr_42384_42439 = state_42353__$1;
(statearr_42384_42439[(2)] = inst_42349);

(statearr_42384_42439[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (34))){
var inst_42347 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
var statearr_42385_42440 = state_42353__$1;
(statearr_42385_42440[(2)] = inst_42347);

(statearr_42385_42440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (17))){
var state_42353__$1 = state_42353;
var statearr_42386_42441 = state_42353__$1;
(statearr_42386_42441[(2)] = false);

(statearr_42386_42441[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (3))){
var state_42353__$1 = state_42353;
var statearr_42387_42442 = state_42353__$1;
(statearr_42387_42442[(2)] = false);

(statearr_42387_42442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (12))){
var inst_42351 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42353__$1,inst_42351);
} else {
if((state_val_42354 === (2))){
var inst_42255 = (state_42353[(8)]);
var inst_42260 = inst_42255.cljs$lang$protocol_mask$partition0$;
var inst_42261 = (inst_42260 & (64));
var inst_42262 = inst_42255.cljs$core$ISeq$;
var inst_42263 = (cljs.core.PROTOCOL_SENTINEL === inst_42262);
var inst_42264 = (inst_42261) || (inst_42263);
var state_42353__$1 = state_42353;
if(cljs.core.truth_(inst_42264)){
var statearr_42388_42443 = state_42353__$1;
(statearr_42388_42443[(1)] = (5));

} else {
var statearr_42389_42444 = state_42353__$1;
(statearr_42389_42444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (23))){
var inst_42312 = (state_42353[(14)]);
var inst_42318 = (inst_42312 == null);
var state_42353__$1 = state_42353;
if(cljs.core.truth_(inst_42318)){
var statearr_42390_42445 = state_42353__$1;
(statearr_42390_42445[(1)] = (26));

} else {
var statearr_42391_42446 = state_42353__$1;
(statearr_42391_42446[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (35))){
var inst_42338 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
if(cljs.core.truth_(inst_42338)){
var statearr_42392_42447 = state_42353__$1;
(statearr_42392_42447[(1)] = (36));

} else {
var statearr_42393_42448 = state_42353__$1;
(statearr_42393_42448[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (19))){
var inst_42280 = (state_42353[(7)]);
var inst_42300 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42280);
var state_42353__$1 = state_42353;
var statearr_42394_42449 = state_42353__$1;
(statearr_42394_42449[(2)] = inst_42300);

(statearr_42394_42449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (11))){
var inst_42280 = (state_42353[(7)]);
var inst_42284 = (inst_42280 == null);
var inst_42285 = cljs.core.not.call(null,inst_42284);
var state_42353__$1 = state_42353;
if(inst_42285){
var statearr_42395_42450 = state_42353__$1;
(statearr_42395_42450[(1)] = (13));

} else {
var statearr_42396_42451 = state_42353__$1;
(statearr_42396_42451[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (9))){
var inst_42255 = (state_42353[(8)]);
var state_42353__$1 = state_42353;
var statearr_42397_42452 = state_42353__$1;
(statearr_42397_42452[(2)] = inst_42255);

(statearr_42397_42452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (5))){
var state_42353__$1 = state_42353;
var statearr_42398_42453 = state_42353__$1;
(statearr_42398_42453[(2)] = true);

(statearr_42398_42453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (14))){
var state_42353__$1 = state_42353;
var statearr_42399_42454 = state_42353__$1;
(statearr_42399_42454[(2)] = false);

(statearr_42399_42454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (26))){
var inst_42313 = (state_42353[(9)]);
var inst_42320 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42313);
var state_42353__$1 = state_42353;
var statearr_42400_42455 = state_42353__$1;
(statearr_42400_42455[(2)] = inst_42320);

(statearr_42400_42455[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (16))){
var state_42353__$1 = state_42353;
var statearr_42401_42456 = state_42353__$1;
(statearr_42401_42456[(2)] = true);

(statearr_42401_42456[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (38))){
var inst_42343 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
var statearr_42402_42457 = state_42353__$1;
(statearr_42402_42457[(2)] = inst_42343);

(statearr_42402_42457[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (30))){
var inst_42313 = (state_42353[(9)]);
var inst_42304 = (state_42353[(10)]);
var inst_42305 = (state_42353[(13)]);
var inst_42330 = cljs.core.empty_QMARK_.call(null,inst_42304);
var inst_42331 = inst_42305.call(null,inst_42313);
var inst_42332 = cljs.core.not.call(null,inst_42331);
var inst_42333 = (inst_42330) && (inst_42332);
var state_42353__$1 = state_42353;
var statearr_42403_42458 = state_42353__$1;
(statearr_42403_42458[(2)] = inst_42333);

(statearr_42403_42458[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (10))){
var inst_42255 = (state_42353[(8)]);
var inst_42276 = (state_42353[(2)]);
var inst_42277 = cljs.core.get.call(null,inst_42276,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42278 = cljs.core.get.call(null,inst_42276,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42279 = cljs.core.get.call(null,inst_42276,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42280 = inst_42255;
var state_42353__$1 = (function (){var statearr_42404 = state_42353;
(statearr_42404[(16)] = inst_42278);

(statearr_42404[(17)] = inst_42279);

(statearr_42404[(18)] = inst_42277);

(statearr_42404[(7)] = inst_42280);

return statearr_42404;
})();
var statearr_42405_42459 = state_42353__$1;
(statearr_42405_42459[(2)] = null);

(statearr_42405_42459[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (18))){
var inst_42295 = (state_42353[(2)]);
var state_42353__$1 = state_42353;
var statearr_42406_42460 = state_42353__$1;
(statearr_42406_42460[(2)] = inst_42295);

(statearr_42406_42460[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (37))){
var state_42353__$1 = state_42353;
var statearr_42407_42461 = state_42353__$1;
(statearr_42407_42461[(2)] = null);

(statearr_42407_42461[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42354 === (8))){
var inst_42255 = (state_42353[(8)]);
var inst_42273 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42255);
var state_42353__$1 = state_42353;
var statearr_42408_42462 = state_42353__$1;
(statearr_42408_42462[(2)] = inst_42273);

(statearr_42408_42462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40635__auto___42416,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__40521__auto__,c__40635__auto___42416,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__40522__auto__ = null;
var cljs$core$async$mix_$_state_machine__40522__auto____0 = (function (){
var statearr_42412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42412[(0)] = cljs$core$async$mix_$_state_machine__40522__auto__);

(statearr_42412[(1)] = (1));

return statearr_42412;
});
var cljs$core$async$mix_$_state_machine__40522__auto____1 = (function (state_42353){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_42353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e42413){if((e42413 instanceof Object)){
var ex__40525__auto__ = e42413;
var statearr_42414_42463 = state_42353;
(statearr_42414_42463[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42464 = state_42353;
state_42353 = G__42464;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40522__auto__ = function(state_42353){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40522__auto____1.call(this,state_42353);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40522__auto____0;
cljs$core$async$mix_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40522__auto____1;
return cljs$core$async$mix_$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___42416,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__40637__auto__ = (function (){var statearr_42415 = f__40636__auto__.call(null);
(statearr_42415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___42416);

return statearr_42415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___42416,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__29467__auto__ = (((p == null))?null:p);
var m__29468__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29468__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__29467__auto__ = (((p == null))?null:p);
var m__29468__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,p,v,ch);
} else {
var m__29468__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args42465 = [];
var len__29970__auto___42468 = arguments.length;
var i__29971__auto___42469 = (0);
while(true){
if((i__29971__auto___42469 < len__29970__auto___42468)){
args42465.push((arguments[i__29971__auto___42469]));

var G__42470 = (i__29971__auto___42469 + (1));
i__29971__auto___42469 = G__42470;
continue;
} else {
}
break;
}

var G__42467 = args42465.length;
switch (G__42467) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42465.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29467__auto__ = (((p == null))?null:p);
var m__29468__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,p);
} else {
var m__29468__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__29467__auto__ = (((p == null))?null:p);
var m__29468__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,p,v);
} else {
var m__29468__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args42473 = [];
var len__29970__auto___42598 = arguments.length;
var i__29971__auto___42599 = (0);
while(true){
if((i__29971__auto___42599 < len__29970__auto___42598)){
args42473.push((arguments[i__29971__auto___42599]));

var G__42600 = (i__29971__auto___42599 + (1));
i__29971__auto___42599 = G__42600;
continue;
} else {
}
break;
}

var G__42475 = args42473.length;
switch (G__42475) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42473.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28749__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28749__auto__,mults){
return (function (p1__42472_SHARP_){
if(cljs.core.truth_(p1__42472_SHARP_.call(null,topic))){
return p1__42472_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__42472_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28749__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async42476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42476 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42477){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42477 = meta42477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42478,meta42477__$1){
var self__ = this;
var _42478__$1 = this;
return (new cljs.core.async.t_cljs$core$async42476(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42477__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42478){
var self__ = this;
var _42478__$1 = this;
return self__.meta42477;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42476.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42476.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42476.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42476.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42476.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6738__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__6738__auto__)){
var m = temp__6738__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42476.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42476.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42476.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42477","meta42477",-455090477,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async42476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42476";

cljs.core.async.t_cljs$core$async42476.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"cljs.core.async/t_cljs$core$async42476");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async42476 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async42476(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42477){
return (new cljs.core.async.t_cljs$core$async42476(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42477));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async42476(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__40635__auto___42602 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___42602,mults,ensure_mult,p){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___42602,mults,ensure_mult,p){
return (function (state_42550){
var state_val_42551 = (state_42550[(1)]);
if((state_val_42551 === (7))){
var inst_42546 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42552_42603 = state_42550__$1;
(statearr_42552_42603[(2)] = inst_42546);

(statearr_42552_42603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (20))){
var state_42550__$1 = state_42550;
var statearr_42553_42604 = state_42550__$1;
(statearr_42553_42604[(2)] = null);

(statearr_42553_42604[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (1))){
var state_42550__$1 = state_42550;
var statearr_42554_42605 = state_42550__$1;
(statearr_42554_42605[(2)] = null);

(statearr_42554_42605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (24))){
var inst_42529 = (state_42550[(7)]);
var inst_42538 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42529);
var state_42550__$1 = state_42550;
var statearr_42555_42606 = state_42550__$1;
(statearr_42555_42606[(2)] = inst_42538);

(statearr_42555_42606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (4))){
var inst_42481 = (state_42550[(8)]);
var inst_42481__$1 = (state_42550[(2)]);
var inst_42482 = (inst_42481__$1 == null);
var state_42550__$1 = (function (){var statearr_42556 = state_42550;
(statearr_42556[(8)] = inst_42481__$1);

return statearr_42556;
})();
if(cljs.core.truth_(inst_42482)){
var statearr_42557_42607 = state_42550__$1;
(statearr_42557_42607[(1)] = (5));

} else {
var statearr_42558_42608 = state_42550__$1;
(statearr_42558_42608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (15))){
var inst_42523 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42559_42609 = state_42550__$1;
(statearr_42559_42609[(2)] = inst_42523);

(statearr_42559_42609[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (21))){
var inst_42543 = (state_42550[(2)]);
var state_42550__$1 = (function (){var statearr_42560 = state_42550;
(statearr_42560[(9)] = inst_42543);

return statearr_42560;
})();
var statearr_42561_42610 = state_42550__$1;
(statearr_42561_42610[(2)] = null);

(statearr_42561_42610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (13))){
var inst_42505 = (state_42550[(10)]);
var inst_42507 = cljs.core.chunked_seq_QMARK_.call(null,inst_42505);
var state_42550__$1 = state_42550;
if(inst_42507){
var statearr_42562_42611 = state_42550__$1;
(statearr_42562_42611[(1)] = (16));

} else {
var statearr_42563_42612 = state_42550__$1;
(statearr_42563_42612[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (22))){
var inst_42535 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
if(cljs.core.truth_(inst_42535)){
var statearr_42564_42613 = state_42550__$1;
(statearr_42564_42613[(1)] = (23));

} else {
var statearr_42565_42614 = state_42550__$1;
(statearr_42565_42614[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (6))){
var inst_42531 = (state_42550[(11)]);
var inst_42481 = (state_42550[(8)]);
var inst_42529 = (state_42550[(7)]);
var inst_42529__$1 = topic_fn.call(null,inst_42481);
var inst_42530 = cljs.core.deref.call(null,mults);
var inst_42531__$1 = cljs.core.get.call(null,inst_42530,inst_42529__$1);
var state_42550__$1 = (function (){var statearr_42566 = state_42550;
(statearr_42566[(11)] = inst_42531__$1);

(statearr_42566[(7)] = inst_42529__$1);

return statearr_42566;
})();
if(cljs.core.truth_(inst_42531__$1)){
var statearr_42567_42615 = state_42550__$1;
(statearr_42567_42615[(1)] = (19));

} else {
var statearr_42568_42616 = state_42550__$1;
(statearr_42568_42616[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (25))){
var inst_42540 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42569_42617 = state_42550__$1;
(statearr_42569_42617[(2)] = inst_42540);

(statearr_42569_42617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (17))){
var inst_42505 = (state_42550[(10)]);
var inst_42514 = cljs.core.first.call(null,inst_42505);
var inst_42515 = cljs.core.async.muxch_STAR_.call(null,inst_42514);
var inst_42516 = cljs.core.async.close_BANG_.call(null,inst_42515);
var inst_42517 = cljs.core.next.call(null,inst_42505);
var inst_42491 = inst_42517;
var inst_42492 = null;
var inst_42493 = (0);
var inst_42494 = (0);
var state_42550__$1 = (function (){var statearr_42570 = state_42550;
(statearr_42570[(12)] = inst_42491);

(statearr_42570[(13)] = inst_42494);

(statearr_42570[(14)] = inst_42492);

(statearr_42570[(15)] = inst_42493);

(statearr_42570[(16)] = inst_42516);

return statearr_42570;
})();
var statearr_42571_42618 = state_42550__$1;
(statearr_42571_42618[(2)] = null);

(statearr_42571_42618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (3))){
var inst_42548 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42550__$1,inst_42548);
} else {
if((state_val_42551 === (12))){
var inst_42525 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42572_42619 = state_42550__$1;
(statearr_42572_42619[(2)] = inst_42525);

(statearr_42572_42619[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (2))){
var state_42550__$1 = state_42550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42550__$1,(4),ch);
} else {
if((state_val_42551 === (23))){
var state_42550__$1 = state_42550;
var statearr_42573_42620 = state_42550__$1;
(statearr_42573_42620[(2)] = null);

(statearr_42573_42620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (19))){
var inst_42531 = (state_42550[(11)]);
var inst_42481 = (state_42550[(8)]);
var inst_42533 = cljs.core.async.muxch_STAR_.call(null,inst_42531);
var state_42550__$1 = state_42550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42550__$1,(22),inst_42533,inst_42481);
} else {
if((state_val_42551 === (11))){
var inst_42491 = (state_42550[(12)]);
var inst_42505 = (state_42550[(10)]);
var inst_42505__$1 = cljs.core.seq.call(null,inst_42491);
var state_42550__$1 = (function (){var statearr_42574 = state_42550;
(statearr_42574[(10)] = inst_42505__$1);

return statearr_42574;
})();
if(inst_42505__$1){
var statearr_42575_42621 = state_42550__$1;
(statearr_42575_42621[(1)] = (13));

} else {
var statearr_42576_42622 = state_42550__$1;
(statearr_42576_42622[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (9))){
var inst_42527 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42577_42623 = state_42550__$1;
(statearr_42577_42623[(2)] = inst_42527);

(statearr_42577_42623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (5))){
var inst_42488 = cljs.core.deref.call(null,mults);
var inst_42489 = cljs.core.vals.call(null,inst_42488);
var inst_42490 = cljs.core.seq.call(null,inst_42489);
var inst_42491 = inst_42490;
var inst_42492 = null;
var inst_42493 = (0);
var inst_42494 = (0);
var state_42550__$1 = (function (){var statearr_42578 = state_42550;
(statearr_42578[(12)] = inst_42491);

(statearr_42578[(13)] = inst_42494);

(statearr_42578[(14)] = inst_42492);

(statearr_42578[(15)] = inst_42493);

return statearr_42578;
})();
var statearr_42579_42624 = state_42550__$1;
(statearr_42579_42624[(2)] = null);

(statearr_42579_42624[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (14))){
var state_42550__$1 = state_42550;
var statearr_42583_42625 = state_42550__$1;
(statearr_42583_42625[(2)] = null);

(statearr_42583_42625[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (16))){
var inst_42505 = (state_42550[(10)]);
var inst_42509 = cljs.core.chunk_first.call(null,inst_42505);
var inst_42510 = cljs.core.chunk_rest.call(null,inst_42505);
var inst_42511 = cljs.core.count.call(null,inst_42509);
var inst_42491 = inst_42510;
var inst_42492 = inst_42509;
var inst_42493 = inst_42511;
var inst_42494 = (0);
var state_42550__$1 = (function (){var statearr_42584 = state_42550;
(statearr_42584[(12)] = inst_42491);

(statearr_42584[(13)] = inst_42494);

(statearr_42584[(14)] = inst_42492);

(statearr_42584[(15)] = inst_42493);

return statearr_42584;
})();
var statearr_42585_42626 = state_42550__$1;
(statearr_42585_42626[(2)] = null);

(statearr_42585_42626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (10))){
var inst_42491 = (state_42550[(12)]);
var inst_42494 = (state_42550[(13)]);
var inst_42492 = (state_42550[(14)]);
var inst_42493 = (state_42550[(15)]);
var inst_42499 = cljs.core._nth.call(null,inst_42492,inst_42494);
var inst_42500 = cljs.core.async.muxch_STAR_.call(null,inst_42499);
var inst_42501 = cljs.core.async.close_BANG_.call(null,inst_42500);
var inst_42502 = (inst_42494 + (1));
var tmp42580 = inst_42491;
var tmp42581 = inst_42492;
var tmp42582 = inst_42493;
var inst_42491__$1 = tmp42580;
var inst_42492__$1 = tmp42581;
var inst_42493__$1 = tmp42582;
var inst_42494__$1 = inst_42502;
var state_42550__$1 = (function (){var statearr_42586 = state_42550;
(statearr_42586[(12)] = inst_42491__$1);

(statearr_42586[(13)] = inst_42494__$1);

(statearr_42586[(14)] = inst_42492__$1);

(statearr_42586[(15)] = inst_42493__$1);

(statearr_42586[(17)] = inst_42501);

return statearr_42586;
})();
var statearr_42587_42627 = state_42550__$1;
(statearr_42587_42627[(2)] = null);

(statearr_42587_42627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (18))){
var inst_42520 = (state_42550[(2)]);
var state_42550__$1 = state_42550;
var statearr_42588_42628 = state_42550__$1;
(statearr_42588_42628[(2)] = inst_42520);

(statearr_42588_42628[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42551 === (8))){
var inst_42494 = (state_42550[(13)]);
var inst_42493 = (state_42550[(15)]);
var inst_42496 = (inst_42494 < inst_42493);
var inst_42497 = inst_42496;
var state_42550__$1 = state_42550;
if(cljs.core.truth_(inst_42497)){
var statearr_42589_42629 = state_42550__$1;
(statearr_42589_42629[(1)] = (10));

} else {
var statearr_42590_42630 = state_42550__$1;
(statearr_42590_42630[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40635__auto___42602,mults,ensure_mult,p))
;
return ((function (switch__40521__auto__,c__40635__auto___42602,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__40522__auto__ = null;
var cljs$core$async$state_machine__40522__auto____0 = (function (){
var statearr_42594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42594[(0)] = cljs$core$async$state_machine__40522__auto__);

(statearr_42594[(1)] = (1));

return statearr_42594;
});
var cljs$core$async$state_machine__40522__auto____1 = (function (state_42550){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_42550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e42595){if((e42595 instanceof Object)){
var ex__40525__auto__ = e42595;
var statearr_42596_42631 = state_42550;
(statearr_42596_42631[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42632 = state_42550;
state_42550 = G__42632;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$state_machine__40522__auto__ = function(state_42550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40522__auto____1.call(this,state_42550);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40522__auto____0;
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40522__auto____1;
return cljs$core$async$state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___42602,mults,ensure_mult,p))
})();
var state__40637__auto__ = (function (){var statearr_42597 = f__40636__auto__.call(null);
(statearr_42597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___42602);

return statearr_42597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___42602,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args42633 = [];
var len__29970__auto___42636 = arguments.length;
var i__29971__auto___42637 = (0);
while(true){
if((i__29971__auto___42637 < len__29970__auto___42636)){
args42633.push((arguments[i__29971__auto___42637]));

var G__42638 = (i__29971__auto___42637 + (1));
i__29971__auto___42637 = G__42638;
continue;
} else {
}
break;
}

var G__42635 = args42633.length;
switch (G__42635) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42633.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args42640 = [];
var len__29970__auto___42643 = arguments.length;
var i__29971__auto___42644 = (0);
while(true){
if((i__29971__auto___42644 < len__29970__auto___42643)){
args42640.push((arguments[i__29971__auto___42644]));

var G__42645 = (i__29971__auto___42644 + (1));
i__29971__auto___42644 = G__42645;
continue;
} else {
}
break;
}

var G__42642 = args42640.length;
switch (G__42642) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42640.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args42647 = [];
var len__29970__auto___42718 = arguments.length;
var i__29971__auto___42719 = (0);
while(true){
if((i__29971__auto___42719 < len__29970__auto___42718)){
args42647.push((arguments[i__29971__auto___42719]));

var G__42720 = (i__29971__auto___42719 + (1));
i__29971__auto___42719 = G__42720;
continue;
} else {
}
break;
}

var G__42649 = args42647.length;
switch (G__42649) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42647.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__40635__auto___42722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___42722,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___42722,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_42688){
var state_val_42689 = (state_42688[(1)]);
if((state_val_42689 === (7))){
var state_42688__$1 = state_42688;
var statearr_42690_42723 = state_42688__$1;
(statearr_42690_42723[(2)] = null);

(statearr_42690_42723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (1))){
var state_42688__$1 = state_42688;
var statearr_42691_42724 = state_42688__$1;
(statearr_42691_42724[(2)] = null);

(statearr_42691_42724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (4))){
var inst_42652 = (state_42688[(7)]);
var inst_42654 = (inst_42652 < cnt);
var state_42688__$1 = state_42688;
if(cljs.core.truth_(inst_42654)){
var statearr_42692_42725 = state_42688__$1;
(statearr_42692_42725[(1)] = (6));

} else {
var statearr_42693_42726 = state_42688__$1;
(statearr_42693_42726[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (15))){
var inst_42684 = (state_42688[(2)]);
var state_42688__$1 = state_42688;
var statearr_42694_42727 = state_42688__$1;
(statearr_42694_42727[(2)] = inst_42684);

(statearr_42694_42727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (13))){
var inst_42677 = cljs.core.async.close_BANG_.call(null,out);
var state_42688__$1 = state_42688;
var statearr_42695_42728 = state_42688__$1;
(statearr_42695_42728[(2)] = inst_42677);

(statearr_42695_42728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (6))){
var state_42688__$1 = state_42688;
var statearr_42696_42729 = state_42688__$1;
(statearr_42696_42729[(2)] = null);

(statearr_42696_42729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (3))){
var inst_42686 = (state_42688[(2)]);
var state_42688__$1 = state_42688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42688__$1,inst_42686);
} else {
if((state_val_42689 === (12))){
var inst_42674 = (state_42688[(8)]);
var inst_42674__$1 = (state_42688[(2)]);
var inst_42675 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_42674__$1);
var state_42688__$1 = (function (){var statearr_42697 = state_42688;
(statearr_42697[(8)] = inst_42674__$1);

return statearr_42697;
})();
if(cljs.core.truth_(inst_42675)){
var statearr_42698_42730 = state_42688__$1;
(statearr_42698_42730[(1)] = (13));

} else {
var statearr_42699_42731 = state_42688__$1;
(statearr_42699_42731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (2))){
var inst_42651 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_42652 = (0);
var state_42688__$1 = (function (){var statearr_42700 = state_42688;
(statearr_42700[(7)] = inst_42652);

(statearr_42700[(9)] = inst_42651);

return statearr_42700;
})();
var statearr_42701_42732 = state_42688__$1;
(statearr_42701_42732[(2)] = null);

(statearr_42701_42732[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (11))){
var inst_42652 = (state_42688[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42688,(10),Object,null,(9));
var inst_42661 = chs__$1.call(null,inst_42652);
var inst_42662 = done.call(null,inst_42652);
var inst_42663 = cljs.core.async.take_BANG_.call(null,inst_42661,inst_42662);
var state_42688__$1 = state_42688;
var statearr_42702_42733 = state_42688__$1;
(statearr_42702_42733[(2)] = inst_42663);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42688__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (9))){
var inst_42652 = (state_42688[(7)]);
var inst_42665 = (state_42688[(2)]);
var inst_42666 = (inst_42652 + (1));
var inst_42652__$1 = inst_42666;
var state_42688__$1 = (function (){var statearr_42703 = state_42688;
(statearr_42703[(7)] = inst_42652__$1);

(statearr_42703[(10)] = inst_42665);

return statearr_42703;
})();
var statearr_42704_42734 = state_42688__$1;
(statearr_42704_42734[(2)] = null);

(statearr_42704_42734[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (5))){
var inst_42672 = (state_42688[(2)]);
var state_42688__$1 = (function (){var statearr_42705 = state_42688;
(statearr_42705[(11)] = inst_42672);

return statearr_42705;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42688__$1,(12),dchan);
} else {
if((state_val_42689 === (14))){
var inst_42674 = (state_42688[(8)]);
var inst_42679 = cljs.core.apply.call(null,f,inst_42674);
var state_42688__$1 = state_42688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42688__$1,(16),out,inst_42679);
} else {
if((state_val_42689 === (16))){
var inst_42681 = (state_42688[(2)]);
var state_42688__$1 = (function (){var statearr_42706 = state_42688;
(statearr_42706[(12)] = inst_42681);

return statearr_42706;
})();
var statearr_42707_42735 = state_42688__$1;
(statearr_42707_42735[(2)] = null);

(statearr_42707_42735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (10))){
var inst_42656 = (state_42688[(2)]);
var inst_42657 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_42688__$1 = (function (){var statearr_42708 = state_42688;
(statearr_42708[(13)] = inst_42656);

return statearr_42708;
})();
var statearr_42709_42736 = state_42688__$1;
(statearr_42709_42736[(2)] = inst_42657);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42688__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42689 === (8))){
var inst_42670 = (state_42688[(2)]);
var state_42688__$1 = state_42688;
var statearr_42710_42737 = state_42688__$1;
(statearr_42710_42737[(2)] = inst_42670);

(statearr_42710_42737[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40635__auto___42722,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__40521__auto__,c__40635__auto___42722,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__40522__auto__ = null;
var cljs$core$async$state_machine__40522__auto____0 = (function (){
var statearr_42714 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42714[(0)] = cljs$core$async$state_machine__40522__auto__);

(statearr_42714[(1)] = (1));

return statearr_42714;
});
var cljs$core$async$state_machine__40522__auto____1 = (function (state_42688){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_42688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e42715){if((e42715 instanceof Object)){
var ex__40525__auto__ = e42715;
var statearr_42716_42738 = state_42688;
(statearr_42716_42738[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42739 = state_42688;
state_42688 = G__42739;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$state_machine__40522__auto__ = function(state_42688){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40522__auto____1.call(this,state_42688);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40522__auto____0;
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40522__auto____1;
return cljs$core$async$state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___42722,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__40637__auto__ = (function (){var statearr_42717 = f__40636__auto__.call(null);
(statearr_42717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___42722);

return statearr_42717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___42722,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args42741 = [];
var len__29970__auto___42799 = arguments.length;
var i__29971__auto___42800 = (0);
while(true){
if((i__29971__auto___42800 < len__29970__auto___42799)){
args42741.push((arguments[i__29971__auto___42800]));

var G__42801 = (i__29971__auto___42800 + (1));
i__29971__auto___42800 = G__42801;
continue;
} else {
}
break;
}

var G__42743 = args42741.length;
switch (G__42743) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42741.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40635__auto___42803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___42803,out){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___42803,out){
return (function (state_42775){
var state_val_42776 = (state_42775[(1)]);
if((state_val_42776 === (7))){
var inst_42755 = (state_42775[(7)]);
var inst_42754 = (state_42775[(8)]);
var inst_42754__$1 = (state_42775[(2)]);
var inst_42755__$1 = cljs.core.nth.call(null,inst_42754__$1,(0),null);
var inst_42756 = cljs.core.nth.call(null,inst_42754__$1,(1),null);
var inst_42757 = (inst_42755__$1 == null);
var state_42775__$1 = (function (){var statearr_42777 = state_42775;
(statearr_42777[(7)] = inst_42755__$1);

(statearr_42777[(9)] = inst_42756);

(statearr_42777[(8)] = inst_42754__$1);

return statearr_42777;
})();
if(cljs.core.truth_(inst_42757)){
var statearr_42778_42804 = state_42775__$1;
(statearr_42778_42804[(1)] = (8));

} else {
var statearr_42779_42805 = state_42775__$1;
(statearr_42779_42805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (1))){
var inst_42744 = cljs.core.vec.call(null,chs);
var inst_42745 = inst_42744;
var state_42775__$1 = (function (){var statearr_42780 = state_42775;
(statearr_42780[(10)] = inst_42745);

return statearr_42780;
})();
var statearr_42781_42806 = state_42775__$1;
(statearr_42781_42806[(2)] = null);

(statearr_42781_42806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (4))){
var inst_42745 = (state_42775[(10)]);
var state_42775__$1 = state_42775;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42775__$1,(7),inst_42745);
} else {
if((state_val_42776 === (6))){
var inst_42771 = (state_42775[(2)]);
var state_42775__$1 = state_42775;
var statearr_42782_42807 = state_42775__$1;
(statearr_42782_42807[(2)] = inst_42771);

(statearr_42782_42807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (3))){
var inst_42773 = (state_42775[(2)]);
var state_42775__$1 = state_42775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42775__$1,inst_42773);
} else {
if((state_val_42776 === (2))){
var inst_42745 = (state_42775[(10)]);
var inst_42747 = cljs.core.count.call(null,inst_42745);
var inst_42748 = (inst_42747 > (0));
var state_42775__$1 = state_42775;
if(cljs.core.truth_(inst_42748)){
var statearr_42784_42808 = state_42775__$1;
(statearr_42784_42808[(1)] = (4));

} else {
var statearr_42785_42809 = state_42775__$1;
(statearr_42785_42809[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (11))){
var inst_42745 = (state_42775[(10)]);
var inst_42764 = (state_42775[(2)]);
var tmp42783 = inst_42745;
var inst_42745__$1 = tmp42783;
var state_42775__$1 = (function (){var statearr_42786 = state_42775;
(statearr_42786[(11)] = inst_42764);

(statearr_42786[(10)] = inst_42745__$1);

return statearr_42786;
})();
var statearr_42787_42810 = state_42775__$1;
(statearr_42787_42810[(2)] = null);

(statearr_42787_42810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (9))){
var inst_42755 = (state_42775[(7)]);
var state_42775__$1 = state_42775;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42775__$1,(11),out,inst_42755);
} else {
if((state_val_42776 === (5))){
var inst_42769 = cljs.core.async.close_BANG_.call(null,out);
var state_42775__$1 = state_42775;
var statearr_42788_42811 = state_42775__$1;
(statearr_42788_42811[(2)] = inst_42769);

(statearr_42788_42811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (10))){
var inst_42767 = (state_42775[(2)]);
var state_42775__$1 = state_42775;
var statearr_42789_42812 = state_42775__$1;
(statearr_42789_42812[(2)] = inst_42767);

(statearr_42789_42812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42776 === (8))){
var inst_42755 = (state_42775[(7)]);
var inst_42745 = (state_42775[(10)]);
var inst_42756 = (state_42775[(9)]);
var inst_42754 = (state_42775[(8)]);
var inst_42759 = (function (){var cs = inst_42745;
var vec__42750 = inst_42754;
var v = inst_42755;
var c = inst_42756;
return ((function (cs,vec__42750,v,c,inst_42755,inst_42745,inst_42756,inst_42754,state_val_42776,c__40635__auto___42803,out){
return (function (p1__42740_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__42740_SHARP_);
});
;})(cs,vec__42750,v,c,inst_42755,inst_42745,inst_42756,inst_42754,state_val_42776,c__40635__auto___42803,out))
})();
var inst_42760 = cljs.core.filterv.call(null,inst_42759,inst_42745);
var inst_42745__$1 = inst_42760;
var state_42775__$1 = (function (){var statearr_42790 = state_42775;
(statearr_42790[(10)] = inst_42745__$1);

return statearr_42790;
})();
var statearr_42791_42813 = state_42775__$1;
(statearr_42791_42813[(2)] = null);

(statearr_42791_42813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__40635__auto___42803,out))
;
return ((function (switch__40521__auto__,c__40635__auto___42803,out){
return (function() {
var cljs$core$async$state_machine__40522__auto__ = null;
var cljs$core$async$state_machine__40522__auto____0 = (function (){
var statearr_42795 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42795[(0)] = cljs$core$async$state_machine__40522__auto__);

(statearr_42795[(1)] = (1));

return statearr_42795;
});
var cljs$core$async$state_machine__40522__auto____1 = (function (state_42775){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_42775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e42796){if((e42796 instanceof Object)){
var ex__40525__auto__ = e42796;
var statearr_42797_42814 = state_42775;
(statearr_42797_42814[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42815 = state_42775;
state_42775 = G__42815;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$state_machine__40522__auto__ = function(state_42775){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40522__auto____1.call(this,state_42775);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40522__auto____0;
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40522__auto____1;
return cljs$core$async$state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___42803,out))
})();
var state__40637__auto__ = (function (){var statearr_42798 = f__40636__auto__.call(null);
(statearr_42798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___42803);

return statearr_42798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___42803,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args42816 = [];
var len__29970__auto___42865 = arguments.length;
var i__29971__auto___42866 = (0);
while(true){
if((i__29971__auto___42866 < len__29970__auto___42865)){
args42816.push((arguments[i__29971__auto___42866]));

var G__42867 = (i__29971__auto___42866 + (1));
i__29971__auto___42866 = G__42867;
continue;
} else {
}
break;
}

var G__42818 = args42816.length;
switch (G__42818) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42816.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40635__auto___42869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___42869,out){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___42869,out){
return (function (state_42842){
var state_val_42843 = (state_42842[(1)]);
if((state_val_42843 === (7))){
var inst_42824 = (state_42842[(7)]);
var inst_42824__$1 = (state_42842[(2)]);
var inst_42825 = (inst_42824__$1 == null);
var inst_42826 = cljs.core.not.call(null,inst_42825);
var state_42842__$1 = (function (){var statearr_42844 = state_42842;
(statearr_42844[(7)] = inst_42824__$1);

return statearr_42844;
})();
if(inst_42826){
var statearr_42845_42870 = state_42842__$1;
(statearr_42845_42870[(1)] = (8));

} else {
var statearr_42846_42871 = state_42842__$1;
(statearr_42846_42871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (1))){
var inst_42819 = (0);
var state_42842__$1 = (function (){var statearr_42847 = state_42842;
(statearr_42847[(8)] = inst_42819);

return statearr_42847;
})();
var statearr_42848_42872 = state_42842__$1;
(statearr_42848_42872[(2)] = null);

(statearr_42848_42872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (4))){
var state_42842__$1 = state_42842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42842__$1,(7),ch);
} else {
if((state_val_42843 === (6))){
var inst_42837 = (state_42842[(2)]);
var state_42842__$1 = state_42842;
var statearr_42849_42873 = state_42842__$1;
(statearr_42849_42873[(2)] = inst_42837);

(statearr_42849_42873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (3))){
var inst_42839 = (state_42842[(2)]);
var inst_42840 = cljs.core.async.close_BANG_.call(null,out);
var state_42842__$1 = (function (){var statearr_42850 = state_42842;
(statearr_42850[(9)] = inst_42839);

return statearr_42850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42842__$1,inst_42840);
} else {
if((state_val_42843 === (2))){
var inst_42819 = (state_42842[(8)]);
var inst_42821 = (inst_42819 < n);
var state_42842__$1 = state_42842;
if(cljs.core.truth_(inst_42821)){
var statearr_42851_42874 = state_42842__$1;
(statearr_42851_42874[(1)] = (4));

} else {
var statearr_42852_42875 = state_42842__$1;
(statearr_42852_42875[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (11))){
var inst_42819 = (state_42842[(8)]);
var inst_42829 = (state_42842[(2)]);
var inst_42830 = (inst_42819 + (1));
var inst_42819__$1 = inst_42830;
var state_42842__$1 = (function (){var statearr_42853 = state_42842;
(statearr_42853[(10)] = inst_42829);

(statearr_42853[(8)] = inst_42819__$1);

return statearr_42853;
})();
var statearr_42854_42876 = state_42842__$1;
(statearr_42854_42876[(2)] = null);

(statearr_42854_42876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (9))){
var state_42842__$1 = state_42842;
var statearr_42855_42877 = state_42842__$1;
(statearr_42855_42877[(2)] = null);

(statearr_42855_42877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (5))){
var state_42842__$1 = state_42842;
var statearr_42856_42878 = state_42842__$1;
(statearr_42856_42878[(2)] = null);

(statearr_42856_42878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (10))){
var inst_42834 = (state_42842[(2)]);
var state_42842__$1 = state_42842;
var statearr_42857_42879 = state_42842__$1;
(statearr_42857_42879[(2)] = inst_42834);

(statearr_42857_42879[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (8))){
var inst_42824 = (state_42842[(7)]);
var state_42842__$1 = state_42842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42842__$1,(11),out,inst_42824);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__40635__auto___42869,out))
;
return ((function (switch__40521__auto__,c__40635__auto___42869,out){
return (function() {
var cljs$core$async$state_machine__40522__auto__ = null;
var cljs$core$async$state_machine__40522__auto____0 = (function (){
var statearr_42861 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42861[(0)] = cljs$core$async$state_machine__40522__auto__);

(statearr_42861[(1)] = (1));

return statearr_42861;
});
var cljs$core$async$state_machine__40522__auto____1 = (function (state_42842){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_42842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e42862){if((e42862 instanceof Object)){
var ex__40525__auto__ = e42862;
var statearr_42863_42880 = state_42842;
(statearr_42863_42880[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42881 = state_42842;
state_42842 = G__42881;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$state_machine__40522__auto__ = function(state_42842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40522__auto____1.call(this,state_42842);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40522__auto____0;
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40522__auto____1;
return cljs$core$async$state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___42869,out))
})();
var state__40637__auto__ = (function (){var statearr_42864 = f__40636__auto__.call(null);
(statearr_42864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___42869);

return statearr_42864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___42869,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42889 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42889 = (function (f,ch,meta42890){
this.f = f;
this.ch = ch;
this.meta42890 = meta42890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42891,meta42890__$1){
var self__ = this;
var _42891__$1 = this;
return (new cljs.core.async.t_cljs$core$async42889(self__.f,self__.ch,meta42890__$1));
});

cljs.core.async.t_cljs$core$async42889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42891){
var self__ = this;
var _42891__$1 = this;
return self__.meta42890;
});

cljs.core.async.t_cljs$core$async42889.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42889.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42889.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42889.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42889.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async42892 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42892 = (function (f,ch,meta42890,_,fn1,meta42893){
this.f = f;
this.ch = ch;
this.meta42890 = meta42890;
this._ = _;
this.fn1 = fn1;
this.meta42893 = meta42893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_42894,meta42893__$1){
var self__ = this;
var _42894__$1 = this;
return (new cljs.core.async.t_cljs$core$async42892(self__.f,self__.ch,self__.meta42890,self__._,self__.fn1,meta42893__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async42892.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_42894){
var self__ = this;
var _42894__$1 = this;
return self__.meta42893;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42892.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42892.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42892.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async42892.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__42882_SHARP_){
return f1.call(null,(((p1__42882_SHARP_ == null))?null:self__.f.call(null,p1__42882_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async42892.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42890","meta42890",-446027559,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42889","cljs.core.async/t_cljs$core$async42889",486874051,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42893","meta42893",-1990497006,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async42892.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42892";

cljs.core.async.t_cljs$core$async42892.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"cljs.core.async/t_cljs$core$async42892");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async42892 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42892(f__$1,ch__$1,meta42890__$1,___$2,fn1__$1,meta42893){
return (new cljs.core.async.t_cljs$core$async42892(f__$1,ch__$1,meta42890__$1,___$2,fn1__$1,meta42893));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async42892(self__.f,self__.ch,self__.meta42890,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28737__auto__ = ret;
if(cljs.core.truth_(and__28737__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28737__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async42889.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42889.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async42889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42890","meta42890",-446027559,null)], null);
});

cljs.core.async.t_cljs$core$async42889.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42889";

cljs.core.async.t_cljs$core$async42889.cljs$lang$ctorPrWriter = (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"cljs.core.async/t_cljs$core$async42889");
});

cljs.core.async.__GT_t_cljs$core$async42889 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async42889(f__$1,ch__$1,meta42890){
return (new cljs.core.async.t_cljs$core$async42889(f__$1,ch__$1,meta42890));
});

}

return (new cljs.core.async.t_cljs$core$async42889(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async42898 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42898 = (function (f,ch,meta42899){
this.f = f;
this.ch = ch;
this.meta42899 = meta42899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42900,meta42899__$1){
var self__ = this;
var _42900__$1 = this;
return (new cljs.core.async.t_cljs$core$async42898(self__.f,self__.ch,meta42899__$1));
});

cljs.core.async.t_cljs$core$async42898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42900){
var self__ = this;
var _42900__$1 = this;
return self__.meta42899;
});

cljs.core.async.t_cljs$core$async42898.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42898.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42898.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42898.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42898.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42898.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async42898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42899","meta42899",-434882936,null)], null);
});

cljs.core.async.t_cljs$core$async42898.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42898";

cljs.core.async.t_cljs$core$async42898.cljs$lang$ctorPrWriter = (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"cljs.core.async/t_cljs$core$async42898");
});

cljs.core.async.__GT_t_cljs$core$async42898 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async42898(f__$1,ch__$1,meta42899){
return (new cljs.core.async.t_cljs$core$async42898(f__$1,ch__$1,meta42899));
});

}

return (new cljs.core.async.t_cljs$core$async42898(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async42904 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42904 = (function (p,ch,meta42905){
this.p = p;
this.ch = ch;
this.meta42905 = meta42905;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42904.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42906,meta42905__$1){
var self__ = this;
var _42906__$1 = this;
return (new cljs.core.async.t_cljs$core$async42904(self__.p,self__.ch,meta42905__$1));
});

cljs.core.async.t_cljs$core$async42904.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42906){
var self__ = this;
var _42906__$1 = this;
return self__.meta42905;
});

cljs.core.async.t_cljs$core$async42904.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42904.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42904.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async42904.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42904.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async42904.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async42904.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async42904.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42905","meta42905",1103084261,null)], null);
});

cljs.core.async.t_cljs$core$async42904.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42904.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42904";

cljs.core.async.t_cljs$core$async42904.cljs$lang$ctorPrWriter = (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"cljs.core.async/t_cljs$core$async42904");
});

cljs.core.async.__GT_t_cljs$core$async42904 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async42904(p__$1,ch__$1,meta42905){
return (new cljs.core.async.t_cljs$core$async42904(p__$1,ch__$1,meta42905));
});

}

return (new cljs.core.async.t_cljs$core$async42904(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args42907 = [];
var len__29970__auto___42951 = arguments.length;
var i__29971__auto___42952 = (0);
while(true){
if((i__29971__auto___42952 < len__29970__auto___42951)){
args42907.push((arguments[i__29971__auto___42952]));

var G__42953 = (i__29971__auto___42952 + (1));
i__29971__auto___42952 = G__42953;
continue;
} else {
}
break;
}

var G__42909 = args42907.length;
switch (G__42909) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42907.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40635__auto___42955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___42955,out){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___42955,out){
return (function (state_42930){
var state_val_42931 = (state_42930[(1)]);
if((state_val_42931 === (7))){
var inst_42926 = (state_42930[(2)]);
var state_42930__$1 = state_42930;
var statearr_42932_42956 = state_42930__$1;
(statearr_42932_42956[(2)] = inst_42926);

(statearr_42932_42956[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (1))){
var state_42930__$1 = state_42930;
var statearr_42933_42957 = state_42930__$1;
(statearr_42933_42957[(2)] = null);

(statearr_42933_42957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (4))){
var inst_42912 = (state_42930[(7)]);
var inst_42912__$1 = (state_42930[(2)]);
var inst_42913 = (inst_42912__$1 == null);
var state_42930__$1 = (function (){var statearr_42934 = state_42930;
(statearr_42934[(7)] = inst_42912__$1);

return statearr_42934;
})();
if(cljs.core.truth_(inst_42913)){
var statearr_42935_42958 = state_42930__$1;
(statearr_42935_42958[(1)] = (5));

} else {
var statearr_42936_42959 = state_42930__$1;
(statearr_42936_42959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (6))){
var inst_42912 = (state_42930[(7)]);
var inst_42917 = p.call(null,inst_42912);
var state_42930__$1 = state_42930;
if(cljs.core.truth_(inst_42917)){
var statearr_42937_42960 = state_42930__$1;
(statearr_42937_42960[(1)] = (8));

} else {
var statearr_42938_42961 = state_42930__$1;
(statearr_42938_42961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (3))){
var inst_42928 = (state_42930[(2)]);
var state_42930__$1 = state_42930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42930__$1,inst_42928);
} else {
if((state_val_42931 === (2))){
var state_42930__$1 = state_42930;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42930__$1,(4),ch);
} else {
if((state_val_42931 === (11))){
var inst_42920 = (state_42930[(2)]);
var state_42930__$1 = state_42930;
var statearr_42939_42962 = state_42930__$1;
(statearr_42939_42962[(2)] = inst_42920);

(statearr_42939_42962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (9))){
var state_42930__$1 = state_42930;
var statearr_42940_42963 = state_42930__$1;
(statearr_42940_42963[(2)] = null);

(statearr_42940_42963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (5))){
var inst_42915 = cljs.core.async.close_BANG_.call(null,out);
var state_42930__$1 = state_42930;
var statearr_42941_42964 = state_42930__$1;
(statearr_42941_42964[(2)] = inst_42915);

(statearr_42941_42964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (10))){
var inst_42923 = (state_42930[(2)]);
var state_42930__$1 = (function (){var statearr_42942 = state_42930;
(statearr_42942[(8)] = inst_42923);

return statearr_42942;
})();
var statearr_42943_42965 = state_42930__$1;
(statearr_42943_42965[(2)] = null);

(statearr_42943_42965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (8))){
var inst_42912 = (state_42930[(7)]);
var state_42930__$1 = state_42930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42930__$1,(11),out,inst_42912);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__40635__auto___42955,out))
;
return ((function (switch__40521__auto__,c__40635__auto___42955,out){
return (function() {
var cljs$core$async$state_machine__40522__auto__ = null;
var cljs$core$async$state_machine__40522__auto____0 = (function (){
var statearr_42947 = [null,null,null,null,null,null,null,null,null];
(statearr_42947[(0)] = cljs$core$async$state_machine__40522__auto__);

(statearr_42947[(1)] = (1));

return statearr_42947;
});
var cljs$core$async$state_machine__40522__auto____1 = (function (state_42930){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_42930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e42948){if((e42948 instanceof Object)){
var ex__40525__auto__ = e42948;
var statearr_42949_42966 = state_42930;
(statearr_42949_42966[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42967 = state_42930;
state_42930 = G__42967;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$state_machine__40522__auto__ = function(state_42930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40522__auto____1.call(this,state_42930);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40522__auto____0;
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40522__auto____1;
return cljs$core$async$state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___42955,out))
})();
var state__40637__auto__ = (function (){var statearr_42950 = f__40636__auto__.call(null);
(statearr_42950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___42955);

return statearr_42950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___42955,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args42968 = [];
var len__29970__auto___42971 = arguments.length;
var i__29971__auto___42972 = (0);
while(true){
if((i__29971__auto___42972 < len__29970__auto___42971)){
args42968.push((arguments[i__29971__auto___42972]));

var G__42973 = (i__29971__auto___42972 + (1));
i__29971__auto___42972 = G__42973;
continue;
} else {
}
break;
}

var G__42970 = args42968.length;
switch (G__42970) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42968.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__40635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto__){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto__){
return (function (state_43140){
var state_val_43141 = (state_43140[(1)]);
if((state_val_43141 === (7))){
var inst_43136 = (state_43140[(2)]);
var state_43140__$1 = state_43140;
var statearr_43142_43183 = state_43140__$1;
(statearr_43142_43183[(2)] = inst_43136);

(statearr_43142_43183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (20))){
var inst_43106 = (state_43140[(7)]);
var inst_43117 = (state_43140[(2)]);
var inst_43118 = cljs.core.next.call(null,inst_43106);
var inst_43092 = inst_43118;
var inst_43093 = null;
var inst_43094 = (0);
var inst_43095 = (0);
var state_43140__$1 = (function (){var statearr_43143 = state_43140;
(statearr_43143[(8)] = inst_43117);

(statearr_43143[(9)] = inst_43095);

(statearr_43143[(10)] = inst_43093);

(statearr_43143[(11)] = inst_43094);

(statearr_43143[(12)] = inst_43092);

return statearr_43143;
})();
var statearr_43144_43184 = state_43140__$1;
(statearr_43144_43184[(2)] = null);

(statearr_43144_43184[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (1))){
var state_43140__$1 = state_43140;
var statearr_43145_43185 = state_43140__$1;
(statearr_43145_43185[(2)] = null);

(statearr_43145_43185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (4))){
var inst_43081 = (state_43140[(13)]);
var inst_43081__$1 = (state_43140[(2)]);
var inst_43082 = (inst_43081__$1 == null);
var state_43140__$1 = (function (){var statearr_43146 = state_43140;
(statearr_43146[(13)] = inst_43081__$1);

return statearr_43146;
})();
if(cljs.core.truth_(inst_43082)){
var statearr_43147_43186 = state_43140__$1;
(statearr_43147_43186[(1)] = (5));

} else {
var statearr_43148_43187 = state_43140__$1;
(statearr_43148_43187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (15))){
var state_43140__$1 = state_43140;
var statearr_43152_43188 = state_43140__$1;
(statearr_43152_43188[(2)] = null);

(statearr_43152_43188[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (21))){
var state_43140__$1 = state_43140;
var statearr_43153_43189 = state_43140__$1;
(statearr_43153_43189[(2)] = null);

(statearr_43153_43189[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (13))){
var inst_43095 = (state_43140[(9)]);
var inst_43093 = (state_43140[(10)]);
var inst_43094 = (state_43140[(11)]);
var inst_43092 = (state_43140[(12)]);
var inst_43102 = (state_43140[(2)]);
var inst_43103 = (inst_43095 + (1));
var tmp43149 = inst_43093;
var tmp43150 = inst_43094;
var tmp43151 = inst_43092;
var inst_43092__$1 = tmp43151;
var inst_43093__$1 = tmp43149;
var inst_43094__$1 = tmp43150;
var inst_43095__$1 = inst_43103;
var state_43140__$1 = (function (){var statearr_43154 = state_43140;
(statearr_43154[(9)] = inst_43095__$1);

(statearr_43154[(10)] = inst_43093__$1);

(statearr_43154[(11)] = inst_43094__$1);

(statearr_43154[(12)] = inst_43092__$1);

(statearr_43154[(14)] = inst_43102);

return statearr_43154;
})();
var statearr_43155_43190 = state_43140__$1;
(statearr_43155_43190[(2)] = null);

(statearr_43155_43190[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (22))){
var state_43140__$1 = state_43140;
var statearr_43156_43191 = state_43140__$1;
(statearr_43156_43191[(2)] = null);

(statearr_43156_43191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (6))){
var inst_43081 = (state_43140[(13)]);
var inst_43090 = f.call(null,inst_43081);
var inst_43091 = cljs.core.seq.call(null,inst_43090);
var inst_43092 = inst_43091;
var inst_43093 = null;
var inst_43094 = (0);
var inst_43095 = (0);
var state_43140__$1 = (function (){var statearr_43157 = state_43140;
(statearr_43157[(9)] = inst_43095);

(statearr_43157[(10)] = inst_43093);

(statearr_43157[(11)] = inst_43094);

(statearr_43157[(12)] = inst_43092);

return statearr_43157;
})();
var statearr_43158_43192 = state_43140__$1;
(statearr_43158_43192[(2)] = null);

(statearr_43158_43192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (17))){
var inst_43106 = (state_43140[(7)]);
var inst_43110 = cljs.core.chunk_first.call(null,inst_43106);
var inst_43111 = cljs.core.chunk_rest.call(null,inst_43106);
var inst_43112 = cljs.core.count.call(null,inst_43110);
var inst_43092 = inst_43111;
var inst_43093 = inst_43110;
var inst_43094 = inst_43112;
var inst_43095 = (0);
var state_43140__$1 = (function (){var statearr_43159 = state_43140;
(statearr_43159[(9)] = inst_43095);

(statearr_43159[(10)] = inst_43093);

(statearr_43159[(11)] = inst_43094);

(statearr_43159[(12)] = inst_43092);

return statearr_43159;
})();
var statearr_43160_43193 = state_43140__$1;
(statearr_43160_43193[(2)] = null);

(statearr_43160_43193[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (3))){
var inst_43138 = (state_43140[(2)]);
var state_43140__$1 = state_43140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43140__$1,inst_43138);
} else {
if((state_val_43141 === (12))){
var inst_43126 = (state_43140[(2)]);
var state_43140__$1 = state_43140;
var statearr_43161_43194 = state_43140__$1;
(statearr_43161_43194[(2)] = inst_43126);

(statearr_43161_43194[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (2))){
var state_43140__$1 = state_43140;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43140__$1,(4),in$);
} else {
if((state_val_43141 === (23))){
var inst_43134 = (state_43140[(2)]);
var state_43140__$1 = state_43140;
var statearr_43162_43195 = state_43140__$1;
(statearr_43162_43195[(2)] = inst_43134);

(statearr_43162_43195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (19))){
var inst_43121 = (state_43140[(2)]);
var state_43140__$1 = state_43140;
var statearr_43163_43196 = state_43140__$1;
(statearr_43163_43196[(2)] = inst_43121);

(statearr_43163_43196[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (11))){
var inst_43106 = (state_43140[(7)]);
var inst_43092 = (state_43140[(12)]);
var inst_43106__$1 = cljs.core.seq.call(null,inst_43092);
var state_43140__$1 = (function (){var statearr_43164 = state_43140;
(statearr_43164[(7)] = inst_43106__$1);

return statearr_43164;
})();
if(inst_43106__$1){
var statearr_43165_43197 = state_43140__$1;
(statearr_43165_43197[(1)] = (14));

} else {
var statearr_43166_43198 = state_43140__$1;
(statearr_43166_43198[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (9))){
var inst_43128 = (state_43140[(2)]);
var inst_43129 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43140__$1 = (function (){var statearr_43167 = state_43140;
(statearr_43167[(15)] = inst_43128);

return statearr_43167;
})();
if(cljs.core.truth_(inst_43129)){
var statearr_43168_43199 = state_43140__$1;
(statearr_43168_43199[(1)] = (21));

} else {
var statearr_43169_43200 = state_43140__$1;
(statearr_43169_43200[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (5))){
var inst_43084 = cljs.core.async.close_BANG_.call(null,out);
var state_43140__$1 = state_43140;
var statearr_43170_43201 = state_43140__$1;
(statearr_43170_43201[(2)] = inst_43084);

(statearr_43170_43201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (14))){
var inst_43106 = (state_43140[(7)]);
var inst_43108 = cljs.core.chunked_seq_QMARK_.call(null,inst_43106);
var state_43140__$1 = state_43140;
if(inst_43108){
var statearr_43171_43202 = state_43140__$1;
(statearr_43171_43202[(1)] = (17));

} else {
var statearr_43172_43203 = state_43140__$1;
(statearr_43172_43203[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (16))){
var inst_43124 = (state_43140[(2)]);
var state_43140__$1 = state_43140;
var statearr_43173_43204 = state_43140__$1;
(statearr_43173_43204[(2)] = inst_43124);

(statearr_43173_43204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43141 === (10))){
var inst_43095 = (state_43140[(9)]);
var inst_43093 = (state_43140[(10)]);
var inst_43100 = cljs.core._nth.call(null,inst_43093,inst_43095);
var state_43140__$1 = state_43140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43140__$1,(13),out,inst_43100);
} else {
if((state_val_43141 === (18))){
var inst_43106 = (state_43140[(7)]);
var inst_43115 = cljs.core.first.call(null,inst_43106);
var state_43140__$1 = state_43140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43140__$1,(20),out,inst_43115);
} else {
if((state_val_43141 === (8))){
var inst_43095 = (state_43140[(9)]);
var inst_43094 = (state_43140[(11)]);
var inst_43097 = (inst_43095 < inst_43094);
var inst_43098 = inst_43097;
var state_43140__$1 = state_43140;
if(cljs.core.truth_(inst_43098)){
var statearr_43174_43205 = state_43140__$1;
(statearr_43174_43205[(1)] = (10));

} else {
var statearr_43175_43206 = state_43140__$1;
(statearr_43175_43206[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40635__auto__))
;
return ((function (switch__40521__auto__,c__40635__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40522__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40522__auto____0 = (function (){
var statearr_43179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43179[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40522__auto__);

(statearr_43179[(1)] = (1));

return statearr_43179;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40522__auto____1 = (function (state_43140){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_43140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e43180){if((e43180 instanceof Object)){
var ex__40525__auto__ = e43180;
var statearr_43181_43207 = state_43140;
(statearr_43181_43207[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43208 = state_43140;
state_43140 = G__43208;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40522__auto__ = function(state_43140){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40522__auto____1.call(this,state_43140);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40522__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40522__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto__))
})();
var state__40637__auto__ = (function (){var statearr_43182 = f__40636__auto__.call(null);
(statearr_43182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto__);

return statearr_43182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto__))
);

return c__40635__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args43209 = [];
var len__29970__auto___43212 = arguments.length;
var i__29971__auto___43213 = (0);
while(true){
if((i__29971__auto___43213 < len__29970__auto___43212)){
args43209.push((arguments[i__29971__auto___43213]));

var G__43214 = (i__29971__auto___43213 + (1));
i__29971__auto___43213 = G__43214;
continue;
} else {
}
break;
}

var G__43211 = args43209.length;
switch (G__43211) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43209.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args43216 = [];
var len__29970__auto___43219 = arguments.length;
var i__29971__auto___43220 = (0);
while(true){
if((i__29971__auto___43220 < len__29970__auto___43219)){
args43216.push((arguments[i__29971__auto___43220]));

var G__43221 = (i__29971__auto___43220 + (1));
i__29971__auto___43220 = G__43221;
continue;
} else {
}
break;
}

var G__43218 = args43216.length;
switch (G__43218) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43216.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args43223 = [];
var len__29970__auto___43274 = arguments.length;
var i__29971__auto___43275 = (0);
while(true){
if((i__29971__auto___43275 < len__29970__auto___43274)){
args43223.push((arguments[i__29971__auto___43275]));

var G__43276 = (i__29971__auto___43275 + (1));
i__29971__auto___43275 = G__43276;
continue;
} else {
}
break;
}

var G__43225 = args43223.length;
switch (G__43225) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43223.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40635__auto___43278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___43278,out){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___43278,out){
return (function (state_43249){
var state_val_43250 = (state_43249[(1)]);
if((state_val_43250 === (7))){
var inst_43244 = (state_43249[(2)]);
var state_43249__$1 = state_43249;
var statearr_43251_43279 = state_43249__$1;
(statearr_43251_43279[(2)] = inst_43244);

(statearr_43251_43279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43250 === (1))){
var inst_43226 = null;
var state_43249__$1 = (function (){var statearr_43252 = state_43249;
(statearr_43252[(7)] = inst_43226);

return statearr_43252;
})();
var statearr_43253_43280 = state_43249__$1;
(statearr_43253_43280[(2)] = null);

(statearr_43253_43280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43250 === (4))){
var inst_43229 = (state_43249[(8)]);
var inst_43229__$1 = (state_43249[(2)]);
var inst_43230 = (inst_43229__$1 == null);
var inst_43231 = cljs.core.not.call(null,inst_43230);
var state_43249__$1 = (function (){var statearr_43254 = state_43249;
(statearr_43254[(8)] = inst_43229__$1);

return statearr_43254;
})();
if(inst_43231){
var statearr_43255_43281 = state_43249__$1;
(statearr_43255_43281[(1)] = (5));

} else {
var statearr_43256_43282 = state_43249__$1;
(statearr_43256_43282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43250 === (6))){
var state_43249__$1 = state_43249;
var statearr_43257_43283 = state_43249__$1;
(statearr_43257_43283[(2)] = null);

(statearr_43257_43283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43250 === (3))){
var inst_43246 = (state_43249[(2)]);
var inst_43247 = cljs.core.async.close_BANG_.call(null,out);
var state_43249__$1 = (function (){var statearr_43258 = state_43249;
(statearr_43258[(9)] = inst_43246);

return statearr_43258;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43249__$1,inst_43247);
} else {
if((state_val_43250 === (2))){
var state_43249__$1 = state_43249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43249__$1,(4),ch);
} else {
if((state_val_43250 === (11))){
var inst_43229 = (state_43249[(8)]);
var inst_43238 = (state_43249[(2)]);
var inst_43226 = inst_43229;
var state_43249__$1 = (function (){var statearr_43259 = state_43249;
(statearr_43259[(7)] = inst_43226);

(statearr_43259[(10)] = inst_43238);

return statearr_43259;
})();
var statearr_43260_43284 = state_43249__$1;
(statearr_43260_43284[(2)] = null);

(statearr_43260_43284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43250 === (9))){
var inst_43229 = (state_43249[(8)]);
var state_43249__$1 = state_43249;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43249__$1,(11),out,inst_43229);
} else {
if((state_val_43250 === (5))){
var inst_43226 = (state_43249[(7)]);
var inst_43229 = (state_43249[(8)]);
var inst_43233 = cljs.core._EQ_.call(null,inst_43229,inst_43226);
var state_43249__$1 = state_43249;
if(inst_43233){
var statearr_43262_43285 = state_43249__$1;
(statearr_43262_43285[(1)] = (8));

} else {
var statearr_43263_43286 = state_43249__$1;
(statearr_43263_43286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43250 === (10))){
var inst_43241 = (state_43249[(2)]);
var state_43249__$1 = state_43249;
var statearr_43264_43287 = state_43249__$1;
(statearr_43264_43287[(2)] = inst_43241);

(statearr_43264_43287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43250 === (8))){
var inst_43226 = (state_43249[(7)]);
var tmp43261 = inst_43226;
var inst_43226__$1 = tmp43261;
var state_43249__$1 = (function (){var statearr_43265 = state_43249;
(statearr_43265[(7)] = inst_43226__$1);

return statearr_43265;
})();
var statearr_43266_43288 = state_43249__$1;
(statearr_43266_43288[(2)] = null);

(statearr_43266_43288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__40635__auto___43278,out))
;
return ((function (switch__40521__auto__,c__40635__auto___43278,out){
return (function() {
var cljs$core$async$state_machine__40522__auto__ = null;
var cljs$core$async$state_machine__40522__auto____0 = (function (){
var statearr_43270 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43270[(0)] = cljs$core$async$state_machine__40522__auto__);

(statearr_43270[(1)] = (1));

return statearr_43270;
});
var cljs$core$async$state_machine__40522__auto____1 = (function (state_43249){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_43249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e43271){if((e43271 instanceof Object)){
var ex__40525__auto__ = e43271;
var statearr_43272_43289 = state_43249;
(statearr_43272_43289[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43290 = state_43249;
state_43249 = G__43290;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$state_machine__40522__auto__ = function(state_43249){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40522__auto____1.call(this,state_43249);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40522__auto____0;
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40522__auto____1;
return cljs$core$async$state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___43278,out))
})();
var state__40637__auto__ = (function (){var statearr_43273 = f__40636__auto__.call(null);
(statearr_43273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___43278);

return statearr_43273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___43278,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args43291 = [];
var len__29970__auto___43361 = arguments.length;
var i__29971__auto___43362 = (0);
while(true){
if((i__29971__auto___43362 < len__29970__auto___43361)){
args43291.push((arguments[i__29971__auto___43362]));

var G__43363 = (i__29971__auto___43362 + (1));
i__29971__auto___43362 = G__43363;
continue;
} else {
}
break;
}

var G__43293 = args43291.length;
switch (G__43293) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43291.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40635__auto___43365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___43365,out){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___43365,out){
return (function (state_43331){
var state_val_43332 = (state_43331[(1)]);
if((state_val_43332 === (7))){
var inst_43327 = (state_43331[(2)]);
var state_43331__$1 = state_43331;
var statearr_43333_43366 = state_43331__$1;
(statearr_43333_43366[(2)] = inst_43327);

(statearr_43333_43366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (1))){
var inst_43294 = (new Array(n));
var inst_43295 = inst_43294;
var inst_43296 = (0);
var state_43331__$1 = (function (){var statearr_43334 = state_43331;
(statearr_43334[(7)] = inst_43296);

(statearr_43334[(8)] = inst_43295);

return statearr_43334;
})();
var statearr_43335_43367 = state_43331__$1;
(statearr_43335_43367[(2)] = null);

(statearr_43335_43367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (4))){
var inst_43299 = (state_43331[(9)]);
var inst_43299__$1 = (state_43331[(2)]);
var inst_43300 = (inst_43299__$1 == null);
var inst_43301 = cljs.core.not.call(null,inst_43300);
var state_43331__$1 = (function (){var statearr_43336 = state_43331;
(statearr_43336[(9)] = inst_43299__$1);

return statearr_43336;
})();
if(inst_43301){
var statearr_43337_43368 = state_43331__$1;
(statearr_43337_43368[(1)] = (5));

} else {
var statearr_43338_43369 = state_43331__$1;
(statearr_43338_43369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (15))){
var inst_43321 = (state_43331[(2)]);
var state_43331__$1 = state_43331;
var statearr_43339_43370 = state_43331__$1;
(statearr_43339_43370[(2)] = inst_43321);

(statearr_43339_43370[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (13))){
var state_43331__$1 = state_43331;
var statearr_43340_43371 = state_43331__$1;
(statearr_43340_43371[(2)] = null);

(statearr_43340_43371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (6))){
var inst_43296 = (state_43331[(7)]);
var inst_43317 = (inst_43296 > (0));
var state_43331__$1 = state_43331;
if(cljs.core.truth_(inst_43317)){
var statearr_43341_43372 = state_43331__$1;
(statearr_43341_43372[(1)] = (12));

} else {
var statearr_43342_43373 = state_43331__$1;
(statearr_43342_43373[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (3))){
var inst_43329 = (state_43331[(2)]);
var state_43331__$1 = state_43331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43331__$1,inst_43329);
} else {
if((state_val_43332 === (12))){
var inst_43295 = (state_43331[(8)]);
var inst_43319 = cljs.core.vec.call(null,inst_43295);
var state_43331__$1 = state_43331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43331__$1,(15),out,inst_43319);
} else {
if((state_val_43332 === (2))){
var state_43331__$1 = state_43331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43331__$1,(4),ch);
} else {
if((state_val_43332 === (11))){
var inst_43311 = (state_43331[(2)]);
var inst_43312 = (new Array(n));
var inst_43295 = inst_43312;
var inst_43296 = (0);
var state_43331__$1 = (function (){var statearr_43343 = state_43331;
(statearr_43343[(7)] = inst_43296);

(statearr_43343[(10)] = inst_43311);

(statearr_43343[(8)] = inst_43295);

return statearr_43343;
})();
var statearr_43344_43374 = state_43331__$1;
(statearr_43344_43374[(2)] = null);

(statearr_43344_43374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (9))){
var inst_43295 = (state_43331[(8)]);
var inst_43309 = cljs.core.vec.call(null,inst_43295);
var state_43331__$1 = state_43331;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43331__$1,(11),out,inst_43309);
} else {
if((state_val_43332 === (5))){
var inst_43299 = (state_43331[(9)]);
var inst_43296 = (state_43331[(7)]);
var inst_43295 = (state_43331[(8)]);
var inst_43304 = (state_43331[(11)]);
var inst_43303 = (inst_43295[inst_43296] = inst_43299);
var inst_43304__$1 = (inst_43296 + (1));
var inst_43305 = (inst_43304__$1 < n);
var state_43331__$1 = (function (){var statearr_43345 = state_43331;
(statearr_43345[(12)] = inst_43303);

(statearr_43345[(11)] = inst_43304__$1);

return statearr_43345;
})();
if(cljs.core.truth_(inst_43305)){
var statearr_43346_43375 = state_43331__$1;
(statearr_43346_43375[(1)] = (8));

} else {
var statearr_43347_43376 = state_43331__$1;
(statearr_43347_43376[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (14))){
var inst_43324 = (state_43331[(2)]);
var inst_43325 = cljs.core.async.close_BANG_.call(null,out);
var state_43331__$1 = (function (){var statearr_43349 = state_43331;
(statearr_43349[(13)] = inst_43324);

return statearr_43349;
})();
var statearr_43350_43377 = state_43331__$1;
(statearr_43350_43377[(2)] = inst_43325);

(statearr_43350_43377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (10))){
var inst_43315 = (state_43331[(2)]);
var state_43331__$1 = state_43331;
var statearr_43351_43378 = state_43331__$1;
(statearr_43351_43378[(2)] = inst_43315);

(statearr_43351_43378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43332 === (8))){
var inst_43295 = (state_43331[(8)]);
var inst_43304 = (state_43331[(11)]);
var tmp43348 = inst_43295;
var inst_43295__$1 = tmp43348;
var inst_43296 = inst_43304;
var state_43331__$1 = (function (){var statearr_43352 = state_43331;
(statearr_43352[(7)] = inst_43296);

(statearr_43352[(8)] = inst_43295__$1);

return statearr_43352;
})();
var statearr_43353_43379 = state_43331__$1;
(statearr_43353_43379[(2)] = null);

(statearr_43353_43379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40635__auto___43365,out))
;
return ((function (switch__40521__auto__,c__40635__auto___43365,out){
return (function() {
var cljs$core$async$state_machine__40522__auto__ = null;
var cljs$core$async$state_machine__40522__auto____0 = (function (){
var statearr_43357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43357[(0)] = cljs$core$async$state_machine__40522__auto__);

(statearr_43357[(1)] = (1));

return statearr_43357;
});
var cljs$core$async$state_machine__40522__auto____1 = (function (state_43331){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_43331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e43358){if((e43358 instanceof Object)){
var ex__40525__auto__ = e43358;
var statearr_43359_43380 = state_43331;
(statearr_43359_43380[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43381 = state_43331;
state_43331 = G__43381;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$state_machine__40522__auto__ = function(state_43331){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40522__auto____1.call(this,state_43331);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40522__auto____0;
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40522__auto____1;
return cljs$core$async$state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___43365,out))
})();
var state__40637__auto__ = (function (){var statearr_43360 = f__40636__auto__.call(null);
(statearr_43360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___43365);

return statearr_43360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___43365,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args43382 = [];
var len__29970__auto___43456 = arguments.length;
var i__29971__auto___43457 = (0);
while(true){
if((i__29971__auto___43457 < len__29970__auto___43456)){
args43382.push((arguments[i__29971__auto___43457]));

var G__43458 = (i__29971__auto___43457 + (1));
i__29971__auto___43457 = G__43458;
continue;
} else {
}
break;
}

var G__43384 = args43382.length;
switch (G__43384) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43382.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__40635__auto___43460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___43460,out){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___43460,out){
return (function (state_43426){
var state_val_43427 = (state_43426[(1)]);
if((state_val_43427 === (7))){
var inst_43422 = (state_43426[(2)]);
var state_43426__$1 = state_43426;
var statearr_43428_43461 = state_43426__$1;
(statearr_43428_43461[(2)] = inst_43422);

(statearr_43428_43461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (1))){
var inst_43385 = [];
var inst_43386 = inst_43385;
var inst_43387 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43426__$1 = (function (){var statearr_43429 = state_43426;
(statearr_43429[(7)] = inst_43387);

(statearr_43429[(8)] = inst_43386);

return statearr_43429;
})();
var statearr_43430_43462 = state_43426__$1;
(statearr_43430_43462[(2)] = null);

(statearr_43430_43462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (4))){
var inst_43390 = (state_43426[(9)]);
var inst_43390__$1 = (state_43426[(2)]);
var inst_43391 = (inst_43390__$1 == null);
var inst_43392 = cljs.core.not.call(null,inst_43391);
var state_43426__$1 = (function (){var statearr_43431 = state_43426;
(statearr_43431[(9)] = inst_43390__$1);

return statearr_43431;
})();
if(inst_43392){
var statearr_43432_43463 = state_43426__$1;
(statearr_43432_43463[(1)] = (5));

} else {
var statearr_43433_43464 = state_43426__$1;
(statearr_43433_43464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (15))){
var inst_43416 = (state_43426[(2)]);
var state_43426__$1 = state_43426;
var statearr_43434_43465 = state_43426__$1;
(statearr_43434_43465[(2)] = inst_43416);

(statearr_43434_43465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (13))){
var state_43426__$1 = state_43426;
var statearr_43435_43466 = state_43426__$1;
(statearr_43435_43466[(2)] = null);

(statearr_43435_43466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (6))){
var inst_43386 = (state_43426[(8)]);
var inst_43411 = inst_43386.length;
var inst_43412 = (inst_43411 > (0));
var state_43426__$1 = state_43426;
if(cljs.core.truth_(inst_43412)){
var statearr_43436_43467 = state_43426__$1;
(statearr_43436_43467[(1)] = (12));

} else {
var statearr_43437_43468 = state_43426__$1;
(statearr_43437_43468[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (3))){
var inst_43424 = (state_43426[(2)]);
var state_43426__$1 = state_43426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43426__$1,inst_43424);
} else {
if((state_val_43427 === (12))){
var inst_43386 = (state_43426[(8)]);
var inst_43414 = cljs.core.vec.call(null,inst_43386);
var state_43426__$1 = state_43426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43426__$1,(15),out,inst_43414);
} else {
if((state_val_43427 === (2))){
var state_43426__$1 = state_43426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43426__$1,(4),ch);
} else {
if((state_val_43427 === (11))){
var inst_43394 = (state_43426[(10)]);
var inst_43390 = (state_43426[(9)]);
var inst_43404 = (state_43426[(2)]);
var inst_43405 = [];
var inst_43406 = inst_43405.push(inst_43390);
var inst_43386 = inst_43405;
var inst_43387 = inst_43394;
var state_43426__$1 = (function (){var statearr_43438 = state_43426;
(statearr_43438[(11)] = inst_43404);

(statearr_43438[(12)] = inst_43406);

(statearr_43438[(7)] = inst_43387);

(statearr_43438[(8)] = inst_43386);

return statearr_43438;
})();
var statearr_43439_43469 = state_43426__$1;
(statearr_43439_43469[(2)] = null);

(statearr_43439_43469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (9))){
var inst_43386 = (state_43426[(8)]);
var inst_43402 = cljs.core.vec.call(null,inst_43386);
var state_43426__$1 = state_43426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43426__$1,(11),out,inst_43402);
} else {
if((state_val_43427 === (5))){
var inst_43394 = (state_43426[(10)]);
var inst_43390 = (state_43426[(9)]);
var inst_43387 = (state_43426[(7)]);
var inst_43394__$1 = f.call(null,inst_43390);
var inst_43395 = cljs.core._EQ_.call(null,inst_43394__$1,inst_43387);
var inst_43396 = cljs.core.keyword_identical_QMARK_.call(null,inst_43387,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_43397 = (inst_43395) || (inst_43396);
var state_43426__$1 = (function (){var statearr_43440 = state_43426;
(statearr_43440[(10)] = inst_43394__$1);

return statearr_43440;
})();
if(cljs.core.truth_(inst_43397)){
var statearr_43441_43470 = state_43426__$1;
(statearr_43441_43470[(1)] = (8));

} else {
var statearr_43442_43471 = state_43426__$1;
(statearr_43442_43471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (14))){
var inst_43419 = (state_43426[(2)]);
var inst_43420 = cljs.core.async.close_BANG_.call(null,out);
var state_43426__$1 = (function (){var statearr_43444 = state_43426;
(statearr_43444[(13)] = inst_43419);

return statearr_43444;
})();
var statearr_43445_43472 = state_43426__$1;
(statearr_43445_43472[(2)] = inst_43420);

(statearr_43445_43472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (10))){
var inst_43409 = (state_43426[(2)]);
var state_43426__$1 = state_43426;
var statearr_43446_43473 = state_43426__$1;
(statearr_43446_43473[(2)] = inst_43409);

(statearr_43446_43473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43427 === (8))){
var inst_43394 = (state_43426[(10)]);
var inst_43390 = (state_43426[(9)]);
var inst_43386 = (state_43426[(8)]);
var inst_43399 = inst_43386.push(inst_43390);
var tmp43443 = inst_43386;
var inst_43386__$1 = tmp43443;
var inst_43387 = inst_43394;
var state_43426__$1 = (function (){var statearr_43447 = state_43426;
(statearr_43447[(7)] = inst_43387);

(statearr_43447[(14)] = inst_43399);

(statearr_43447[(8)] = inst_43386__$1);

return statearr_43447;
})();
var statearr_43448_43474 = state_43426__$1;
(statearr_43448_43474[(2)] = null);

(statearr_43448_43474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__40635__auto___43460,out))
;
return ((function (switch__40521__auto__,c__40635__auto___43460,out){
return (function() {
var cljs$core$async$state_machine__40522__auto__ = null;
var cljs$core$async$state_machine__40522__auto____0 = (function (){
var statearr_43452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43452[(0)] = cljs$core$async$state_machine__40522__auto__);

(statearr_43452[(1)] = (1));

return statearr_43452;
});
var cljs$core$async$state_machine__40522__auto____1 = (function (state_43426){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_43426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e43453){if((e43453 instanceof Object)){
var ex__40525__auto__ = e43453;
var statearr_43454_43475 = state_43426;
(statearr_43454_43475[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43476 = state_43426;
state_43426 = G__43476;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
cljs$core$async$state_machine__40522__auto__ = function(state_43426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40522__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40522__auto____1.call(this,state_43426);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40522__auto____0;
cljs$core$async$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40522__auto____1;
return cljs$core$async$state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___43460,out))
})();
var state__40637__auto__ = (function (){var statearr_43455 = f__40636__auto__.call(null);
(statearr_43455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___43460);

return statearr_43455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___43460,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map