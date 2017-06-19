// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args16428 = [];
var len__8822__auto___16434 = arguments.length;
var i__8823__auto___16435 = (0);
while(true){
if((i__8823__auto___16435 < len__8822__auto___16434)){
args16428.push((arguments[i__8823__auto___16435]));

var G__16436 = (i__8823__auto___16435 + (1));
i__8823__auto___16435 = G__16436;
continue;
} else {
}
break;
}

var G__16430 = args16428.length;
switch (G__16430) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16428.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async16431 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16431 = (function (f,blockable,meta16432){
this.f = f;
this.blockable = blockable;
this.meta16432 = meta16432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16433,meta16432__$1){
var self__ = this;
var _16433__$1 = this;
return (new cljs.core.async.t_cljs$core$async16431(self__.f,self__.blockable,meta16432__$1));
});

cljs.core.async.t_cljs$core$async16431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16433){
var self__ = this;
var _16433__$1 = this;
return self__.meta16432;
});

cljs.core.async.t_cljs$core$async16431.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16431.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta16432], null);
});

cljs.core.async.t_cljs$core$async16431.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16431";

cljs.core.async.t_cljs$core$async16431.cljs$lang$ctorPrWriter = (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.core.async/t_cljs$core$async16431");
});

cljs.core.async.__GT_t_cljs$core$async16431 = (function cljs$core$async$__GT_t_cljs$core$async16431(f__$1,blockable__$1,meta16432){
return (new cljs.core.async.t_cljs$core$async16431(f__$1,blockable__$1,meta16432));
});

}

return (new cljs.core.async.t_cljs$core$async16431(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var args16440 = [];
var len__8822__auto___16443 = arguments.length;
var i__8823__auto___16444 = (0);
while(true){
if((i__8823__auto___16444 < len__8822__auto___16443)){
args16440.push((arguments[i__8823__auto___16444]));

var G__16445 = (i__8823__auto___16444 + (1));
i__8823__auto___16444 = G__16445;
continue;
} else {
}
break;
}

var G__16442 = args16440.length;
switch (G__16442) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16440.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var args16447 = [];
var len__8822__auto___16450 = arguments.length;
var i__8823__auto___16451 = (0);
while(true){
if((i__8823__auto___16451 < len__8822__auto___16450)){
args16447.push((arguments[i__8823__auto___16451]));

var G__16452 = (i__8823__auto___16451 + (1));
i__8823__auto___16451 = G__16452;
continue;
} else {
}
break;
}

var G__16449 = args16447.length;
switch (G__16449) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16447.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var args16454 = [];
var len__8822__auto___16457 = arguments.length;
var i__8823__auto___16458 = (0);
while(true){
if((i__8823__auto___16458 < len__8822__auto___16457)){
args16454.push((arguments[i__8823__auto___16458]));

var G__16459 = (i__8823__auto___16458 + (1));
i__8823__auto___16458 = G__16459;
continue;
} else {
}
break;
}

var G__16456 = args16454.length;
switch (G__16456) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16454.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16461 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16461) : fn1.call(null,val_16461));
} else {
cljs.core.async.impl.dispatch.run(((function (val_16461,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16461) : fn1.call(null,val_16461));
});})(val_16461,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var args16462 = [];
var len__8822__auto___16465 = arguments.length;
var i__8823__auto___16466 = (0);
while(true){
if((i__8823__auto___16466 < len__8822__auto___16465)){
args16462.push((arguments[i__8823__auto___16466]));

var G__16467 = (i__8823__auto___16466 + (1));
i__8823__auto___16466 = G__16467;
continue;
} else {
}
break;
}

var G__16464 = args16462.length;
switch (G__16464) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16462.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__6736__auto__)){
var ret = temp__6736__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__6736__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__6736__auto__)){
var retb = temp__6736__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__6736__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__8622__auto___16469 = n;
var x_16470 = (0);
while(true){
if((x_16470 < n__8622__auto___16469)){
(a[x_16470] = (0));

var G__16471 = (x_16470 + (1));
x_16470 = G__16471;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__16472 = (i + (1));
i = G__16472;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async16476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16476 = (function (flag,meta16477){
this.flag = flag;
this.meta16477 = meta16477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16478,meta16477__$1){
var self__ = this;
var _16478__$1 = this;
return (new cljs.core.async.t_cljs$core$async16476(self__.flag,meta16477__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16478){
var self__ = this;
var _16478__$1 = this;
return self__.meta16477;
});})(flag))
;

cljs.core.async.t_cljs$core$async16476.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async16476.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16476.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta16477], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16476";

cljs.core.async.t_cljs$core$async16476.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.core.async/t_cljs$core$async16476");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async16476 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16476(flag__$1,meta16477){
return (new cljs.core.async.t_cljs$core$async16476(flag__$1,meta16477));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16476(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16482 = (function (flag,cb,meta16483){
this.flag = flag;
this.cb = cb;
this.meta16483 = meta16483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16484,meta16483__$1){
var self__ = this;
var _16484__$1 = this;
return (new cljs.core.async.t_cljs$core$async16482(self__.flag,self__.cb,meta16483__$1));
});

cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16484){
var self__ = this;
var _16484__$1 = this;
return self__.meta16483;
});

cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta16483], null);
});

cljs.core.async.t_cljs$core$async16482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16482";

cljs.core.async.t_cljs$core$async16482.cljs$lang$ctorPrWriter = (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.core.async/t_cljs$core$async16482");
});

cljs.core.async.__GT_t_cljs$core$async16482 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16482(flag__$1,cb__$1,meta16483){
return (new cljs.core.async.t_cljs$core$async16482(flag__$1,cb__$1,meta16483));
});

}

return (new cljs.core.async.t_cljs$core$async16482(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16485_SHARP_){
var G__16489 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16485_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16489) : fret.call(null,G__16489));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16486_SHARP_){
var G__16490 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16486_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__16490) : fret.call(null,G__16490));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__7601__auto__ = wport;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16491 = (i + (1));
i = G__16491;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7601__auto__ = ret;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__6738__auto__ = (function (){var and__7589__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__7589__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__7589__auto__;
}
})();
if(cljs.core.truth_(temp__6738__auto__)){
var got = temp__6738__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var args__8829__auto__ = [];
var len__8822__auto___16497 = arguments.length;
var i__8823__auto___16498 = (0);
while(true){
if((i__8823__auto___16498 < len__8822__auto___16497)){
args__8829__auto__.push((arguments[i__8823__auto___16498]));

var G__16499 = (i__8823__auto___16498 + (1));
i__8823__auto___16498 = G__16499;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16494){
var map__16495 = p__16494;
var map__16495__$1 = ((((!((map__16495 == null)))?((((map__16495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16495):map__16495);
var opts = map__16495__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16492){
var G__16493 = cljs.core.first(seq16492);
var seq16492__$1 = cljs.core.next(seq16492);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16493,seq16492__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
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
var args16500 = [];
var len__8822__auto___16550 = arguments.length;
var i__8823__auto___16551 = (0);
while(true){
if((i__8823__auto___16551 < len__8822__auto___16550)){
args16500.push((arguments[i__8823__auto___16551]));

var G__16552 = (i__8823__auto___16551 + (1));
i__8823__auto___16551 = G__16552;
continue;
} else {
}
break;
}

var G__16502 = args16500.length;
switch (G__16502) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16500.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16369__auto___16554 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___16554){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___16554){
return (function (state_16526){
var state_val_16527 = (state_16526[(1)]);
if((state_val_16527 === (7))){
var inst_16522 = (state_16526[(2)]);
var state_16526__$1 = state_16526;
var statearr_16528_16555 = state_16526__$1;
(statearr_16528_16555[(2)] = inst_16522);

(statearr_16528_16555[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (1))){
var state_16526__$1 = state_16526;
var statearr_16529_16556 = state_16526__$1;
(statearr_16529_16556[(2)] = null);

(statearr_16529_16556[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (4))){
var inst_16505 = (state_16526[(7)]);
var inst_16505__$1 = (state_16526[(2)]);
var inst_16506 = (inst_16505__$1 == null);
var state_16526__$1 = (function (){var statearr_16530 = state_16526;
(statearr_16530[(7)] = inst_16505__$1);

return statearr_16530;
})();
if(cljs.core.truth_(inst_16506)){
var statearr_16531_16557 = state_16526__$1;
(statearr_16531_16557[(1)] = (5));

} else {
var statearr_16532_16558 = state_16526__$1;
(statearr_16532_16558[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (13))){
var state_16526__$1 = state_16526;
var statearr_16533_16559 = state_16526__$1;
(statearr_16533_16559[(2)] = null);

(statearr_16533_16559[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (6))){
var inst_16505 = (state_16526[(7)]);
var state_16526__$1 = state_16526;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16526__$1,(11),to,inst_16505);
} else {
if((state_val_16527 === (3))){
var inst_16524 = (state_16526[(2)]);
var state_16526__$1 = state_16526;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16526__$1,inst_16524);
} else {
if((state_val_16527 === (12))){
var state_16526__$1 = state_16526;
var statearr_16534_16560 = state_16526__$1;
(statearr_16534_16560[(2)] = null);

(statearr_16534_16560[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (2))){
var state_16526__$1 = state_16526;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16526__$1,(4),from);
} else {
if((state_val_16527 === (11))){
var inst_16515 = (state_16526[(2)]);
var state_16526__$1 = state_16526;
if(cljs.core.truth_(inst_16515)){
var statearr_16535_16561 = state_16526__$1;
(statearr_16535_16561[(1)] = (12));

} else {
var statearr_16536_16562 = state_16526__$1;
(statearr_16536_16562[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (9))){
var state_16526__$1 = state_16526;
var statearr_16537_16563 = state_16526__$1;
(statearr_16537_16563[(2)] = null);

(statearr_16537_16563[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (5))){
var state_16526__$1 = state_16526;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16538_16564 = state_16526__$1;
(statearr_16538_16564[(1)] = (8));

} else {
var statearr_16539_16565 = state_16526__$1;
(statearr_16539_16565[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (14))){
var inst_16520 = (state_16526[(2)]);
var state_16526__$1 = state_16526;
var statearr_16540_16566 = state_16526__$1;
(statearr_16540_16566[(2)] = inst_16520);

(statearr_16540_16566[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (10))){
var inst_16512 = (state_16526[(2)]);
var state_16526__$1 = state_16526;
var statearr_16541_16567 = state_16526__$1;
(statearr_16541_16567[(2)] = inst_16512);

(statearr_16541_16567[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16527 === (8))){
var inst_16509 = cljs.core.async.close_BANG_(to);
var state_16526__$1 = state_16526;
var statearr_16542_16568 = state_16526__$1;
(statearr_16542_16568[(2)] = inst_16509);

(statearr_16542_16568[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16369__auto___16554))
;
return ((function (switch__16243__auto__,c__16369__auto___16554){
return (function() {
var cljs$core$async$state_machine__16244__auto__ = null;
var cljs$core$async$state_machine__16244__auto____0 = (function (){
var statearr_16546 = [null,null,null,null,null,null,null,null];
(statearr_16546[(0)] = cljs$core$async$state_machine__16244__auto__);

(statearr_16546[(1)] = (1));

return statearr_16546;
});
var cljs$core$async$state_machine__16244__auto____1 = (function (state_16526){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_16526);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e16547){if((e16547 instanceof Object)){
var ex__16247__auto__ = e16547;
var statearr_16548_16569 = state_16526;
(statearr_16548_16569[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16526);

return cljs.core.cst$kw$recur;
} else {
throw e16547;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__16570 = state_16526;
state_16526 = G__16570;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$state_machine__16244__auto__ = function(state_16526){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16244__auto____1.call(this,state_16526);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16244__auto____0;
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16244__auto____1;
return cljs$core$async$state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___16554))
})();
var state__16371__auto__ = (function (){var statearr_16549 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_16549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___16554);

return statearr_16549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___16554))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__16758){
var vec__16759 = p__16758;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16759,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16759,(1),null);
var job = vec__16759;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__16369__auto___16945 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___16945,res,vec__16759,v,p,job,jobs,results){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___16945,res,vec__16759,v,p,job,jobs,results){
return (function (state_16766){
var state_val_16767 = (state_16766[(1)]);
if((state_val_16767 === (1))){
var state_16766__$1 = state_16766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16766__$1,(2),res,v);
} else {
if((state_val_16767 === (2))){
var inst_16763 = (state_16766[(2)]);
var inst_16764 = cljs.core.async.close_BANG_(res);
var state_16766__$1 = (function (){var statearr_16768 = state_16766;
(statearr_16768[(7)] = inst_16763);

return statearr_16768;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16766__$1,inst_16764);
} else {
return null;
}
}
});})(c__16369__auto___16945,res,vec__16759,v,p,job,jobs,results))
;
return ((function (switch__16243__auto__,c__16369__auto___16945,res,vec__16759,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____0 = (function (){
var statearr_16772 = [null,null,null,null,null,null,null,null];
(statearr_16772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__);

(statearr_16772[(1)] = (1));

return statearr_16772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____1 = (function (state_16766){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_16766);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e16773){if((e16773 instanceof Object)){
var ex__16247__auto__ = e16773;
var statearr_16774_16946 = state_16766;
(statearr_16774_16946[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16766);

return cljs.core.cst$kw$recur;
} else {
throw e16773;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__16947 = state_16766;
state_16766 = G__16947;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__ = function(state_16766){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____1.call(this,state_16766);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___16945,res,vec__16759,v,p,job,jobs,results))
})();
var state__16371__auto__ = (function (){var statearr_16775 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_16775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___16945);

return statearr_16775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___16945,res,vec__16759,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16776){
var vec__16777 = p__16776;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16777,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16777,(1),null);
var job = vec__16777;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__8622__auto___16948 = n;
var __16949 = (0);
while(true){
if((__16949 < n__8622__auto___16948)){
var G__16780_16950 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16780_16950) {
case "compute":
var c__16369__auto___16952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16949,c__16369__auto___16952,G__16780_16950,n__8622__auto___16948,jobs,results,process,async){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (__16949,c__16369__auto___16952,G__16780_16950,n__8622__auto___16948,jobs,results,process,async){
return (function (state_16793){
var state_val_16794 = (state_16793[(1)]);
if((state_val_16794 === (1))){
var state_16793__$1 = state_16793;
var statearr_16795_16953 = state_16793__$1;
(statearr_16795_16953[(2)] = null);

(statearr_16795_16953[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16794 === (2))){
var state_16793__$1 = state_16793;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16793__$1,(4),jobs);
} else {
if((state_val_16794 === (3))){
var inst_16791 = (state_16793[(2)]);
var state_16793__$1 = state_16793;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16793__$1,inst_16791);
} else {
if((state_val_16794 === (4))){
var inst_16783 = (state_16793[(2)]);
var inst_16784 = process(inst_16783);
var state_16793__$1 = state_16793;
if(cljs.core.truth_(inst_16784)){
var statearr_16796_16954 = state_16793__$1;
(statearr_16796_16954[(1)] = (5));

} else {
var statearr_16797_16955 = state_16793__$1;
(statearr_16797_16955[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16794 === (5))){
var state_16793__$1 = state_16793;
var statearr_16798_16956 = state_16793__$1;
(statearr_16798_16956[(2)] = null);

(statearr_16798_16956[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16794 === (6))){
var state_16793__$1 = state_16793;
var statearr_16799_16957 = state_16793__$1;
(statearr_16799_16957[(2)] = null);

(statearr_16799_16957[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16794 === (7))){
var inst_16789 = (state_16793[(2)]);
var state_16793__$1 = state_16793;
var statearr_16800_16958 = state_16793__$1;
(statearr_16800_16958[(2)] = inst_16789);

(statearr_16800_16958[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16949,c__16369__auto___16952,G__16780_16950,n__8622__auto___16948,jobs,results,process,async))
;
return ((function (__16949,switch__16243__auto__,c__16369__auto___16952,G__16780_16950,n__8622__auto___16948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____0 = (function (){
var statearr_16804 = [null,null,null,null,null,null,null];
(statearr_16804[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__);

(statearr_16804[(1)] = (1));

return statearr_16804;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____1 = (function (state_16793){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_16793);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e16805){if((e16805 instanceof Object)){
var ex__16247__auto__ = e16805;
var statearr_16806_16959 = state_16793;
(statearr_16806_16959[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16793);

return cljs.core.cst$kw$recur;
} else {
throw e16805;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__16960 = state_16793;
state_16793 = G__16960;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__ = function(state_16793){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____1.call(this,state_16793);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__;
})()
;})(__16949,switch__16243__auto__,c__16369__auto___16952,G__16780_16950,n__8622__auto___16948,jobs,results,process,async))
})();
var state__16371__auto__ = (function (){var statearr_16807 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_16807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___16952);

return statearr_16807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(__16949,c__16369__auto___16952,G__16780_16950,n__8622__auto___16948,jobs,results,process,async))
);


break;
case "async":
var c__16369__auto___16961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16949,c__16369__auto___16961,G__16780_16950,n__8622__auto___16948,jobs,results,process,async){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (__16949,c__16369__auto___16961,G__16780_16950,n__8622__auto___16948,jobs,results,process,async){
return (function (state_16820){
var state_val_16821 = (state_16820[(1)]);
if((state_val_16821 === (1))){
var state_16820__$1 = state_16820;
var statearr_16822_16962 = state_16820__$1;
(statearr_16822_16962[(2)] = null);

(statearr_16822_16962[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16821 === (2))){
var state_16820__$1 = state_16820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16820__$1,(4),jobs);
} else {
if((state_val_16821 === (3))){
var inst_16818 = (state_16820[(2)]);
var state_16820__$1 = state_16820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16820__$1,inst_16818);
} else {
if((state_val_16821 === (4))){
var inst_16810 = (state_16820[(2)]);
var inst_16811 = async(inst_16810);
var state_16820__$1 = state_16820;
if(cljs.core.truth_(inst_16811)){
var statearr_16823_16963 = state_16820__$1;
(statearr_16823_16963[(1)] = (5));

} else {
var statearr_16824_16964 = state_16820__$1;
(statearr_16824_16964[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16821 === (5))){
var state_16820__$1 = state_16820;
var statearr_16825_16965 = state_16820__$1;
(statearr_16825_16965[(2)] = null);

(statearr_16825_16965[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16821 === (6))){
var state_16820__$1 = state_16820;
var statearr_16826_16966 = state_16820__$1;
(statearr_16826_16966[(2)] = null);

(statearr_16826_16966[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16821 === (7))){
var inst_16816 = (state_16820[(2)]);
var state_16820__$1 = state_16820;
var statearr_16827_16967 = state_16820__$1;
(statearr_16827_16967[(2)] = inst_16816);

(statearr_16827_16967[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__16949,c__16369__auto___16961,G__16780_16950,n__8622__auto___16948,jobs,results,process,async))
;
return ((function (__16949,switch__16243__auto__,c__16369__auto___16961,G__16780_16950,n__8622__auto___16948,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____0 = (function (){
var statearr_16831 = [null,null,null,null,null,null,null];
(statearr_16831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__);

(statearr_16831[(1)] = (1));

return statearr_16831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____1 = (function (state_16820){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_16820);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e16832){if((e16832 instanceof Object)){
var ex__16247__auto__ = e16832;
var statearr_16833_16968 = state_16820;
(statearr_16833_16968[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16820);

return cljs.core.cst$kw$recur;
} else {
throw e16832;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__16969 = state_16820;
state_16820 = G__16969;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__ = function(state_16820){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____1.call(this,state_16820);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__;
})()
;})(__16949,switch__16243__auto__,c__16369__auto___16961,G__16780_16950,n__8622__auto___16948,jobs,results,process,async))
})();
var state__16371__auto__ = (function (){var statearr_16834 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_16834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___16961);

return statearr_16834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(__16949,c__16369__auto___16961,G__16780_16950,n__8622__auto___16948,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__16970 = (__16949 + (1));
__16949 = G__16970;
continue;
} else {
}
break;
}

var c__16369__auto___16971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___16971,jobs,results,process,async){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___16971,jobs,results,process,async){
return (function (state_16856){
var state_val_16857 = (state_16856[(1)]);
if((state_val_16857 === (1))){
var state_16856__$1 = state_16856;
var statearr_16858_16972 = state_16856__$1;
(statearr_16858_16972[(2)] = null);

(statearr_16858_16972[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16857 === (2))){
var state_16856__$1 = state_16856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16856__$1,(4),from);
} else {
if((state_val_16857 === (3))){
var inst_16854 = (state_16856[(2)]);
var state_16856__$1 = state_16856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16856__$1,inst_16854);
} else {
if((state_val_16857 === (4))){
var inst_16837 = (state_16856[(7)]);
var inst_16837__$1 = (state_16856[(2)]);
var inst_16838 = (inst_16837__$1 == null);
var state_16856__$1 = (function (){var statearr_16859 = state_16856;
(statearr_16859[(7)] = inst_16837__$1);

return statearr_16859;
})();
if(cljs.core.truth_(inst_16838)){
var statearr_16860_16973 = state_16856__$1;
(statearr_16860_16973[(1)] = (5));

} else {
var statearr_16861_16974 = state_16856__$1;
(statearr_16861_16974[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16857 === (5))){
var inst_16840 = cljs.core.async.close_BANG_(jobs);
var state_16856__$1 = state_16856;
var statearr_16862_16975 = state_16856__$1;
(statearr_16862_16975[(2)] = inst_16840);

(statearr_16862_16975[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16857 === (6))){
var inst_16842 = (state_16856[(8)]);
var inst_16837 = (state_16856[(7)]);
var inst_16842__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_16843 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16844 = [inst_16837,inst_16842__$1];
var inst_16845 = (new cljs.core.PersistentVector(null,2,(5),inst_16843,inst_16844,null));
var state_16856__$1 = (function (){var statearr_16863 = state_16856;
(statearr_16863[(8)] = inst_16842__$1);

return statearr_16863;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16856__$1,(8),jobs,inst_16845);
} else {
if((state_val_16857 === (7))){
var inst_16852 = (state_16856[(2)]);
var state_16856__$1 = state_16856;
var statearr_16864_16976 = state_16856__$1;
(statearr_16864_16976[(2)] = inst_16852);

(statearr_16864_16976[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16857 === (8))){
var inst_16842 = (state_16856[(8)]);
var inst_16847 = (state_16856[(2)]);
var state_16856__$1 = (function (){var statearr_16865 = state_16856;
(statearr_16865[(9)] = inst_16847);

return statearr_16865;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16856__$1,(9),results,inst_16842);
} else {
if((state_val_16857 === (9))){
var inst_16849 = (state_16856[(2)]);
var state_16856__$1 = (function (){var statearr_16866 = state_16856;
(statearr_16866[(10)] = inst_16849);

return statearr_16866;
})();
var statearr_16867_16977 = state_16856__$1;
(statearr_16867_16977[(2)] = null);

(statearr_16867_16977[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16369__auto___16971,jobs,results,process,async))
;
return ((function (switch__16243__auto__,c__16369__auto___16971,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____0 = (function (){
var statearr_16871 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__);

(statearr_16871[(1)] = (1));

return statearr_16871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____1 = (function (state_16856){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_16856);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e16872){if((e16872 instanceof Object)){
var ex__16247__auto__ = e16872;
var statearr_16873_16978 = state_16856;
(statearr_16873_16978[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16856);

return cljs.core.cst$kw$recur;
} else {
throw e16872;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__16979 = state_16856;
state_16856 = G__16979;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__ = function(state_16856){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____1.call(this,state_16856);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___16971,jobs,results,process,async))
})();
var state__16371__auto__ = (function (){var statearr_16874 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_16874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___16971);

return statearr_16874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___16971,jobs,results,process,async))
);


var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__,jobs,results,process,async){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__,jobs,results,process,async){
return (function (state_16912){
var state_val_16913 = (state_16912[(1)]);
if((state_val_16913 === (7))){
var inst_16908 = (state_16912[(2)]);
var state_16912__$1 = state_16912;
var statearr_16914_16980 = state_16912__$1;
(statearr_16914_16980[(2)] = inst_16908);

(statearr_16914_16980[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16913 === (20))){
var state_16912__$1 = state_16912;
var statearr_16915_16981 = state_16912__$1;
(statearr_16915_16981[(2)] = null);

(statearr_16915_16981[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16913 === (1))){
var state_16912__$1 = state_16912;
var statearr_16916_16982 = state_16912__$1;
(statearr_16916_16982[(2)] = null);

(statearr_16916_16982[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16913 === (4))){
var inst_16877 = (state_16912[(7)]);
var inst_16877__$1 = (state_16912[(2)]);
var inst_16878 = (inst_16877__$1 == null);
var state_16912__$1 = (function (){var statearr_16917 = state_16912;
(statearr_16917[(7)] = inst_16877__$1);

return statearr_16917;
})();
if(cljs.core.truth_(inst_16878)){
var statearr_16918_16983 = state_16912__$1;
(statearr_16918_16983[(1)] = (5));

} else {
var statearr_16919_16984 = state_16912__$1;
(statearr_16919_16984[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16913 === (15))){
var inst_16890 = (state_16912[(8)]);
var state_16912__$1 = state_16912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16912__$1,(18),to,inst_16890);
} else {
if((state_val_16913 === (21))){
var inst_16903 = (state_16912[(2)]);
var state_16912__$1 = state_16912;
var statearr_16920_16985 = state_16912__$1;
(statearr_16920_16985[(2)] = inst_16903);

(statearr_16920_16985[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16913 === (13))){
var inst_16905 = (state_16912[(2)]);
var state_16912__$1 = (function (){var statearr_16921 = state_16912;
(statearr_16921[(9)] = inst_16905);

return statearr_16921;
})();
var statearr_16922_16986 = state_16912__$1;
(statearr_16922_16986[(2)] = null);

(statearr_16922_16986[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16913 === (6))){
var inst_16877 = (state_16912[(7)]);
var state_16912__$1 = state_16912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16912__$1,(11),inst_16877);
} else {
if((state_val_16913 === (17))){
var inst_16898 = (state_16912[(2)]);
var state_16912__$1 = state_16912;
if(cljs.core.truth_(inst_16898)){
var statearr_16923_16987 = state_16912__$1;
(statearr_16923_16987[(1)] = (19));

} else {
var statearr_16924_16988 = state_16912__$1;
(statearr_16924_16988[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16913 === (3))){
var inst_16910 = (state_16912[(2)]);
var state_16912__$1 = state_16912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16912__$1,inst_16910);
} else {
if((state_val_16913 === (12))){
var inst_16887 = (state_16912[(10)]);
var state_16912__$1 = state_16912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16912__$1,(14),inst_16887);
} else {
if((state_val_16913 === (2))){
var state_16912__$1 = state_16912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16912__$1,(4),results);
} else {
if((state_val_16913 === (19))){
var state_16912__$1 = state_16912;
var statearr_16925_16989 = state_16912__$1;
(statearr_16925_16989[(2)] = null);

(statearr_16925_16989[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16913 === (11))){
var inst_16887 = (state_16912[(2)]);
var state_16912__$1 = (function (){var statearr_16926 = state_16912;
(statearr_16926[(10)] = inst_16887);

return statearr_16926;
})();
var statearr_16927_16990 = state_16912__$1;
(statearr_16927_16990[(2)] = null);

(statearr_16927_16990[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16913 === (9))){
var state_16912__$1 = state_16912;
var statearr_16928_16991 = state_16912__$1;
(statearr_16928_16991[(2)] = null);

(statearr_16928_16991[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16913 === (5))){
var state_16912__$1 = state_16912;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16929_16992 = state_16912__$1;
(statearr_16929_16992[(1)] = (8));

} else {
var statearr_16930_16993 = state_16912__$1;
(statearr_16930_16993[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16913 === (14))){
var inst_16890 = (state_16912[(8)]);
var inst_16892 = (state_16912[(11)]);
var inst_16890__$1 = (state_16912[(2)]);
var inst_16891 = (inst_16890__$1 == null);
var inst_16892__$1 = cljs.core.not(inst_16891);
var state_16912__$1 = (function (){var statearr_16931 = state_16912;
(statearr_16931[(8)] = inst_16890__$1);

(statearr_16931[(11)] = inst_16892__$1);

return statearr_16931;
})();
if(inst_16892__$1){
var statearr_16932_16994 = state_16912__$1;
(statearr_16932_16994[(1)] = (15));

} else {
var statearr_16933_16995 = state_16912__$1;
(statearr_16933_16995[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16913 === (16))){
var inst_16892 = (state_16912[(11)]);
var state_16912__$1 = state_16912;
var statearr_16934_16996 = state_16912__$1;
(statearr_16934_16996[(2)] = inst_16892);

(statearr_16934_16996[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16913 === (10))){
var inst_16884 = (state_16912[(2)]);
var state_16912__$1 = state_16912;
var statearr_16935_16997 = state_16912__$1;
(statearr_16935_16997[(2)] = inst_16884);

(statearr_16935_16997[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16913 === (18))){
var inst_16895 = (state_16912[(2)]);
var state_16912__$1 = state_16912;
var statearr_16936_16998 = state_16912__$1;
(statearr_16936_16998[(2)] = inst_16895);

(statearr_16936_16998[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16913 === (8))){
var inst_16881 = cljs.core.async.close_BANG_(to);
var state_16912__$1 = state_16912;
var statearr_16937_16999 = state_16912__$1;
(statearr_16937_16999[(2)] = inst_16881);

(statearr_16937_16999[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16369__auto__,jobs,results,process,async))
;
return ((function (switch__16243__auto__,c__16369__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____0 = (function (){
var statearr_16941 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16941[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__);

(statearr_16941[(1)] = (1));

return statearr_16941;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____1 = (function (state_16912){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_16912);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e16942){if((e16942 instanceof Object)){
var ex__16247__auto__ = e16942;
var statearr_16943_17000 = state_16912;
(statearr_16943_17000[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16912);

return cljs.core.cst$kw$recur;
} else {
throw e16942;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__17001 = state_16912;
state_16912 = G__17001;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__ = function(state_16912){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____1.call(this,state_16912);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16244__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__,jobs,results,process,async))
})();
var state__16371__auto__ = (function (){var statearr_16944 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_16944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_16944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__,jobs,results,process,async))
);

return c__16369__auto__;
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
var args17002 = [];
var len__8822__auto___17005 = arguments.length;
var i__8823__auto___17006 = (0);
while(true){
if((i__8823__auto___17006 < len__8822__auto___17005)){
args17002.push((arguments[i__8823__auto___17006]));

var G__17007 = (i__8823__auto___17006 + (1));
i__8823__auto___17006 = G__17007;
continue;
} else {
}
break;
}

var G__17004 = args17002.length;
switch (G__17004) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17002.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var args17009 = [];
var len__8822__auto___17012 = arguments.length;
var i__8823__auto___17013 = (0);
while(true){
if((i__8823__auto___17013 < len__8822__auto___17012)){
args17009.push((arguments[i__8823__auto___17013]));

var G__17014 = (i__8823__auto___17013 + (1));
i__8823__auto___17013 = G__17014;
continue;
} else {
}
break;
}

var G__17011 = args17009.length;
switch (G__17011) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17009.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var args17016 = [];
var len__8822__auto___17069 = arguments.length;
var i__8823__auto___17070 = (0);
while(true){
if((i__8823__auto___17070 < len__8822__auto___17069)){
args17016.push((arguments[i__8823__auto___17070]));

var G__17071 = (i__8823__auto___17070 + (1));
i__8823__auto___17070 = G__17071;
continue;
} else {
}
break;
}

var G__17018 = args17016.length;
switch (G__17018) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17016.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__16369__auto___17073 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___17073,tc,fc){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___17073,tc,fc){
return (function (state_17044){
var state_val_17045 = (state_17044[(1)]);
if((state_val_17045 === (7))){
var inst_17040 = (state_17044[(2)]);
var state_17044__$1 = state_17044;
var statearr_17046_17074 = state_17044__$1;
(statearr_17046_17074[(2)] = inst_17040);

(statearr_17046_17074[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17045 === (1))){
var state_17044__$1 = state_17044;
var statearr_17047_17075 = state_17044__$1;
(statearr_17047_17075[(2)] = null);

(statearr_17047_17075[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17045 === (4))){
var inst_17021 = (state_17044[(7)]);
var inst_17021__$1 = (state_17044[(2)]);
var inst_17022 = (inst_17021__$1 == null);
var state_17044__$1 = (function (){var statearr_17048 = state_17044;
(statearr_17048[(7)] = inst_17021__$1);

return statearr_17048;
})();
if(cljs.core.truth_(inst_17022)){
var statearr_17049_17076 = state_17044__$1;
(statearr_17049_17076[(1)] = (5));

} else {
var statearr_17050_17077 = state_17044__$1;
(statearr_17050_17077[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17045 === (13))){
var state_17044__$1 = state_17044;
var statearr_17051_17078 = state_17044__$1;
(statearr_17051_17078[(2)] = null);

(statearr_17051_17078[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17045 === (6))){
var inst_17021 = (state_17044[(7)]);
var inst_17027 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17021) : p.call(null,inst_17021));
var state_17044__$1 = state_17044;
if(cljs.core.truth_(inst_17027)){
var statearr_17052_17079 = state_17044__$1;
(statearr_17052_17079[(1)] = (9));

} else {
var statearr_17053_17080 = state_17044__$1;
(statearr_17053_17080[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17045 === (3))){
var inst_17042 = (state_17044[(2)]);
var state_17044__$1 = state_17044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17044__$1,inst_17042);
} else {
if((state_val_17045 === (12))){
var state_17044__$1 = state_17044;
var statearr_17054_17081 = state_17044__$1;
(statearr_17054_17081[(2)] = null);

(statearr_17054_17081[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17045 === (2))){
var state_17044__$1 = state_17044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17044__$1,(4),ch);
} else {
if((state_val_17045 === (11))){
var inst_17021 = (state_17044[(7)]);
var inst_17031 = (state_17044[(2)]);
var state_17044__$1 = state_17044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17044__$1,(8),inst_17031,inst_17021);
} else {
if((state_val_17045 === (9))){
var state_17044__$1 = state_17044;
var statearr_17055_17082 = state_17044__$1;
(statearr_17055_17082[(2)] = tc);

(statearr_17055_17082[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17045 === (5))){
var inst_17024 = cljs.core.async.close_BANG_(tc);
var inst_17025 = cljs.core.async.close_BANG_(fc);
var state_17044__$1 = (function (){var statearr_17056 = state_17044;
(statearr_17056[(8)] = inst_17024);

return statearr_17056;
})();
var statearr_17057_17083 = state_17044__$1;
(statearr_17057_17083[(2)] = inst_17025);

(statearr_17057_17083[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17045 === (14))){
var inst_17038 = (state_17044[(2)]);
var state_17044__$1 = state_17044;
var statearr_17058_17084 = state_17044__$1;
(statearr_17058_17084[(2)] = inst_17038);

(statearr_17058_17084[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17045 === (10))){
var state_17044__$1 = state_17044;
var statearr_17059_17085 = state_17044__$1;
(statearr_17059_17085[(2)] = fc);

(statearr_17059_17085[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17045 === (8))){
var inst_17033 = (state_17044[(2)]);
var state_17044__$1 = state_17044;
if(cljs.core.truth_(inst_17033)){
var statearr_17060_17086 = state_17044__$1;
(statearr_17060_17086[(1)] = (12));

} else {
var statearr_17061_17087 = state_17044__$1;
(statearr_17061_17087[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__16369__auto___17073,tc,fc))
;
return ((function (switch__16243__auto__,c__16369__auto___17073,tc,fc){
return (function() {
var cljs$core$async$state_machine__16244__auto__ = null;
var cljs$core$async$state_machine__16244__auto____0 = (function (){
var statearr_17065 = [null,null,null,null,null,null,null,null,null];
(statearr_17065[(0)] = cljs$core$async$state_machine__16244__auto__);

(statearr_17065[(1)] = (1));

return statearr_17065;
});
var cljs$core$async$state_machine__16244__auto____1 = (function (state_17044){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_17044);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e17066){if((e17066 instanceof Object)){
var ex__16247__auto__ = e17066;
var statearr_17067_17088 = state_17044;
(statearr_17067_17088[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17044);

return cljs.core.cst$kw$recur;
} else {
throw e17066;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__17089 = state_17044;
state_17044 = G__17089;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$state_machine__16244__auto__ = function(state_17044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16244__auto____1.call(this,state_17044);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16244__auto____0;
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16244__auto____1;
return cljs$core$async$state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___17073,tc,fc))
})();
var state__16371__auto__ = (function (){var statearr_17068 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_17068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___17073);

return statearr_17068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___17073,tc,fc))
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
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__){
return (function (state_17153){
var state_val_17154 = (state_17153[(1)]);
if((state_val_17154 === (7))){
var inst_17149 = (state_17153[(2)]);
var state_17153__$1 = state_17153;
var statearr_17155_17176 = state_17153__$1;
(statearr_17155_17176[(2)] = inst_17149);

(statearr_17155_17176[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17154 === (1))){
var inst_17133 = init;
var state_17153__$1 = (function (){var statearr_17156 = state_17153;
(statearr_17156[(7)] = inst_17133);

return statearr_17156;
})();
var statearr_17157_17177 = state_17153__$1;
(statearr_17157_17177[(2)] = null);

(statearr_17157_17177[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17154 === (4))){
var inst_17136 = (state_17153[(8)]);
var inst_17136__$1 = (state_17153[(2)]);
var inst_17137 = (inst_17136__$1 == null);
var state_17153__$1 = (function (){var statearr_17158 = state_17153;
(statearr_17158[(8)] = inst_17136__$1);

return statearr_17158;
})();
if(cljs.core.truth_(inst_17137)){
var statearr_17159_17178 = state_17153__$1;
(statearr_17159_17178[(1)] = (5));

} else {
var statearr_17160_17179 = state_17153__$1;
(statearr_17160_17179[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17154 === (6))){
var inst_17140 = (state_17153[(9)]);
var inst_17133 = (state_17153[(7)]);
var inst_17136 = (state_17153[(8)]);
var inst_17140__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_17133,inst_17136) : f.call(null,inst_17133,inst_17136));
var inst_17141 = cljs.core.reduced_QMARK_(inst_17140__$1);
var state_17153__$1 = (function (){var statearr_17161 = state_17153;
(statearr_17161[(9)] = inst_17140__$1);

return statearr_17161;
})();
if(inst_17141){
var statearr_17162_17180 = state_17153__$1;
(statearr_17162_17180[(1)] = (8));

} else {
var statearr_17163_17181 = state_17153__$1;
(statearr_17163_17181[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17154 === (3))){
var inst_17151 = (state_17153[(2)]);
var state_17153__$1 = state_17153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17153__$1,inst_17151);
} else {
if((state_val_17154 === (2))){
var state_17153__$1 = state_17153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17153__$1,(4),ch);
} else {
if((state_val_17154 === (9))){
var inst_17140 = (state_17153[(9)]);
var inst_17133 = inst_17140;
var state_17153__$1 = (function (){var statearr_17164 = state_17153;
(statearr_17164[(7)] = inst_17133);

return statearr_17164;
})();
var statearr_17165_17182 = state_17153__$1;
(statearr_17165_17182[(2)] = null);

(statearr_17165_17182[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17154 === (5))){
var inst_17133 = (state_17153[(7)]);
var state_17153__$1 = state_17153;
var statearr_17166_17183 = state_17153__$1;
(statearr_17166_17183[(2)] = inst_17133);

(statearr_17166_17183[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17154 === (10))){
var inst_17147 = (state_17153[(2)]);
var state_17153__$1 = state_17153;
var statearr_17167_17184 = state_17153__$1;
(statearr_17167_17184[(2)] = inst_17147);

(statearr_17167_17184[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17154 === (8))){
var inst_17140 = (state_17153[(9)]);
var inst_17143 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_17140) : cljs.core.deref.call(null,inst_17140));
var state_17153__$1 = state_17153;
var statearr_17168_17185 = state_17153__$1;
(statearr_17168_17185[(2)] = inst_17143);

(statearr_17168_17185[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16369__auto__))
;
return ((function (switch__16243__auto__,c__16369__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16244__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16244__auto____0 = (function (){
var statearr_17172 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17172[(0)] = cljs$core$async$reduce_$_state_machine__16244__auto__);

(statearr_17172[(1)] = (1));

return statearr_17172;
});
var cljs$core$async$reduce_$_state_machine__16244__auto____1 = (function (state_17153){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_17153);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e17173){if((e17173 instanceof Object)){
var ex__16247__auto__ = e17173;
var statearr_17174_17186 = state_17153;
(statearr_17174_17186[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17153);

return cljs.core.cst$kw$recur;
} else {
throw e17173;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__17187 = state_17153;
state_17153 = G__17187;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16244__auto__ = function(state_17153){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16244__auto____1.call(this,state_17153);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16244__auto____0;
cljs$core$async$reduce_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16244__auto____1;
return cljs$core$async$reduce_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__))
})();
var state__16371__auto__ = (function (){var statearr_17175 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_17175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_17175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__))
);

return c__16369__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__,f__$1){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__,f__$1){
return (function (state_17207){
var state_val_17208 = (state_17207[(1)]);
if((state_val_17208 === (1))){
var inst_17202 = cljs.core.async.reduce(f__$1,init,ch);
var state_17207__$1 = state_17207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17207__$1,(2),inst_17202);
} else {
if((state_val_17208 === (2))){
var inst_17204 = (state_17207[(2)]);
var inst_17205 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_17204) : f__$1.call(null,inst_17204));
var state_17207__$1 = state_17207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17207__$1,inst_17205);
} else {
return null;
}
}
});})(c__16369__auto__,f__$1))
;
return ((function (switch__16243__auto__,c__16369__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__16244__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16244__auto____0 = (function (){
var statearr_17212 = [null,null,null,null,null,null,null];
(statearr_17212[(0)] = cljs$core$async$transduce_$_state_machine__16244__auto__);

(statearr_17212[(1)] = (1));

return statearr_17212;
});
var cljs$core$async$transduce_$_state_machine__16244__auto____1 = (function (state_17207){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_17207);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e17213){if((e17213 instanceof Object)){
var ex__16247__auto__ = e17213;
var statearr_17214_17216 = state_17207;
(statearr_17214_17216[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17207);

return cljs.core.cst$kw$recur;
} else {
throw e17213;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__17217 = state_17207;
state_17207 = G__17217;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16244__auto__ = function(state_17207){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16244__auto____1.call(this,state_17207);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16244__auto____0;
cljs$core$async$transduce_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16244__auto____1;
return cljs$core$async$transduce_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__,f__$1))
})();
var state__16371__auto__ = (function (){var statearr_17215 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_17215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_17215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__,f__$1))
);

return c__16369__auto__;
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
var args17218 = [];
var len__8822__auto___17270 = arguments.length;
var i__8823__auto___17271 = (0);
while(true){
if((i__8823__auto___17271 < len__8822__auto___17270)){
args17218.push((arguments[i__8823__auto___17271]));

var G__17272 = (i__8823__auto___17271 + (1));
i__8823__auto___17271 = G__17272;
continue;
} else {
}
break;
}

var G__17220 = args17218.length;
switch (G__17220) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17218.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__){
return (function (state_17245){
var state_val_17246 = (state_17245[(1)]);
if((state_val_17246 === (7))){
var inst_17227 = (state_17245[(2)]);
var state_17245__$1 = state_17245;
var statearr_17247_17274 = state_17245__$1;
(statearr_17247_17274[(2)] = inst_17227);

(statearr_17247_17274[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17246 === (1))){
var inst_17221 = cljs.core.seq(coll);
var inst_17222 = inst_17221;
var state_17245__$1 = (function (){var statearr_17248 = state_17245;
(statearr_17248[(7)] = inst_17222);

return statearr_17248;
})();
var statearr_17249_17275 = state_17245__$1;
(statearr_17249_17275[(2)] = null);

(statearr_17249_17275[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17246 === (4))){
var inst_17222 = (state_17245[(7)]);
var inst_17225 = cljs.core.first(inst_17222);
var state_17245__$1 = state_17245;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17245__$1,(7),ch,inst_17225);
} else {
if((state_val_17246 === (13))){
var inst_17239 = (state_17245[(2)]);
var state_17245__$1 = state_17245;
var statearr_17250_17276 = state_17245__$1;
(statearr_17250_17276[(2)] = inst_17239);

(statearr_17250_17276[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17246 === (6))){
var inst_17230 = (state_17245[(2)]);
var state_17245__$1 = state_17245;
if(cljs.core.truth_(inst_17230)){
var statearr_17251_17277 = state_17245__$1;
(statearr_17251_17277[(1)] = (8));

} else {
var statearr_17252_17278 = state_17245__$1;
(statearr_17252_17278[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17246 === (3))){
var inst_17243 = (state_17245[(2)]);
var state_17245__$1 = state_17245;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17245__$1,inst_17243);
} else {
if((state_val_17246 === (12))){
var state_17245__$1 = state_17245;
var statearr_17253_17279 = state_17245__$1;
(statearr_17253_17279[(2)] = null);

(statearr_17253_17279[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17246 === (2))){
var inst_17222 = (state_17245[(7)]);
var state_17245__$1 = state_17245;
if(cljs.core.truth_(inst_17222)){
var statearr_17254_17280 = state_17245__$1;
(statearr_17254_17280[(1)] = (4));

} else {
var statearr_17255_17281 = state_17245__$1;
(statearr_17255_17281[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17246 === (11))){
var inst_17236 = cljs.core.async.close_BANG_(ch);
var state_17245__$1 = state_17245;
var statearr_17256_17282 = state_17245__$1;
(statearr_17256_17282[(2)] = inst_17236);

(statearr_17256_17282[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17246 === (9))){
var state_17245__$1 = state_17245;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17257_17283 = state_17245__$1;
(statearr_17257_17283[(1)] = (11));

} else {
var statearr_17258_17284 = state_17245__$1;
(statearr_17258_17284[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17246 === (5))){
var inst_17222 = (state_17245[(7)]);
var state_17245__$1 = state_17245;
var statearr_17259_17285 = state_17245__$1;
(statearr_17259_17285[(2)] = inst_17222);

(statearr_17259_17285[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17246 === (10))){
var inst_17241 = (state_17245[(2)]);
var state_17245__$1 = state_17245;
var statearr_17260_17286 = state_17245__$1;
(statearr_17260_17286[(2)] = inst_17241);

(statearr_17260_17286[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17246 === (8))){
var inst_17222 = (state_17245[(7)]);
var inst_17232 = cljs.core.next(inst_17222);
var inst_17222__$1 = inst_17232;
var state_17245__$1 = (function (){var statearr_17261 = state_17245;
(statearr_17261[(7)] = inst_17222__$1);

return statearr_17261;
})();
var statearr_17262_17287 = state_17245__$1;
(statearr_17262_17287[(2)] = null);

(statearr_17262_17287[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16369__auto__))
;
return ((function (switch__16243__auto__,c__16369__auto__){
return (function() {
var cljs$core$async$state_machine__16244__auto__ = null;
var cljs$core$async$state_machine__16244__auto____0 = (function (){
var statearr_17266 = [null,null,null,null,null,null,null,null];
(statearr_17266[(0)] = cljs$core$async$state_machine__16244__auto__);

(statearr_17266[(1)] = (1));

return statearr_17266;
});
var cljs$core$async$state_machine__16244__auto____1 = (function (state_17245){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_17245);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e17267){if((e17267 instanceof Object)){
var ex__16247__auto__ = e17267;
var statearr_17268_17288 = state_17245;
(statearr_17268_17288[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17245);

return cljs.core.cst$kw$recur;
} else {
throw e17267;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__17289 = state_17245;
state_17245 = G__17289;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$state_machine__16244__auto__ = function(state_17245){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16244__auto____1.call(this,state_17245);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16244__auto____0;
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16244__auto____1;
return cljs$core$async$state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__))
})();
var state__16371__auto__ = (function (){var statearr_17269 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_17269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_17269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__))
);

return c__16369__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
var x__8319__auto__ = (((_ == null))?null:_);
var m__8320__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__8320__auto__.call(null,_));
} else {
var m__8320__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__8320__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
var x__8319__auto__ = (((m == null))?null:m);
var m__8320__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8320__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__8320__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__8320__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8319__auto__ = (((m == null))?null:m);
var m__8320__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8320__auto__.call(null,m,ch));
} else {
var m__8320__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8320__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8319__auto__ = (((m == null))?null:m);
var m__8320__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8320__auto__.call(null,m));
} else {
var m__8320__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8320__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = (function (){var G__17518 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17518) : cljs.core.atom.call(null,G__17518));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async17519 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17519 = (function (ch,cs,meta17520){
this.ch = ch;
this.cs = cs;
this.meta17520 = meta17520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17521,meta17520__$1){
var self__ = this;
var _17521__$1 = this;
return (new cljs.core.async.t_cljs$core$async17519(self__.ch,self__.cs,meta17520__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17521){
var self__ = this;
var _17521__$1 = this;
return self__.meta17520;
});})(cs))
;

cljs.core.async.t_cljs$core$async17519.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17519.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17519.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17519.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17519.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17519.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__17522_17746 = self__.cs;
var G__17523_17747 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__17522_17746,G__17523_17747) : cljs.core.reset_BANG_.call(null,G__17522_17746,G__17523_17747));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17519.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta17520], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17519.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17519";

cljs.core.async.t_cljs$core$async17519.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.core.async/t_cljs$core$async17519");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async17519 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17519(ch__$1,cs__$1,meta17520){
return (new cljs.core.async.t_cljs$core$async17519(ch__$1,cs__$1,meta17520));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17519(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16369__auto___17748 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___17748,cs,m,dchan,dctr,done){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___17748,cs,m,dchan,dctr,done){
return (function (state_17658){
var state_val_17659 = (state_17658[(1)]);
if((state_val_17659 === (7))){
var inst_17654 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
var statearr_17660_17749 = state_17658__$1;
(statearr_17660_17749[(2)] = inst_17654);

(statearr_17660_17749[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (20))){
var inst_17557 = (state_17658[(7)]);
var inst_17569 = cljs.core.first(inst_17557);
var inst_17570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17569,(0),null);
var inst_17571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17569,(1),null);
var state_17658__$1 = (function (){var statearr_17661 = state_17658;
(statearr_17661[(8)] = inst_17570);

return statearr_17661;
})();
if(cljs.core.truth_(inst_17571)){
var statearr_17662_17750 = state_17658__$1;
(statearr_17662_17750[(1)] = (22));

} else {
var statearr_17663_17751 = state_17658__$1;
(statearr_17663_17751[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (27))){
var inst_17601 = (state_17658[(9)]);
var inst_17606 = (state_17658[(10)]);
var inst_17599 = (state_17658[(11)]);
var inst_17526 = (state_17658[(12)]);
var inst_17606__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17599,inst_17601);
var inst_17607 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17606__$1,inst_17526,done);
var state_17658__$1 = (function (){var statearr_17664 = state_17658;
(statearr_17664[(10)] = inst_17606__$1);

return statearr_17664;
})();
if(cljs.core.truth_(inst_17607)){
var statearr_17665_17752 = state_17658__$1;
(statearr_17665_17752[(1)] = (30));

} else {
var statearr_17666_17753 = state_17658__$1;
(statearr_17666_17753[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (1))){
var state_17658__$1 = state_17658;
var statearr_17667_17754 = state_17658__$1;
(statearr_17667_17754[(2)] = null);

(statearr_17667_17754[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (24))){
var inst_17557 = (state_17658[(7)]);
var inst_17576 = (state_17658[(2)]);
var inst_17577 = cljs.core.next(inst_17557);
var inst_17535 = inst_17577;
var inst_17536 = null;
var inst_17537 = (0);
var inst_17538 = (0);
var state_17658__$1 = (function (){var statearr_17668 = state_17658;
(statearr_17668[(13)] = inst_17576);

(statearr_17668[(14)] = inst_17538);

(statearr_17668[(15)] = inst_17535);

(statearr_17668[(16)] = inst_17536);

(statearr_17668[(17)] = inst_17537);

return statearr_17668;
})();
var statearr_17669_17755 = state_17658__$1;
(statearr_17669_17755[(2)] = null);

(statearr_17669_17755[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (39))){
var state_17658__$1 = state_17658;
var statearr_17673_17756 = state_17658__$1;
(statearr_17673_17756[(2)] = null);

(statearr_17673_17756[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (4))){
var inst_17526 = (state_17658[(12)]);
var inst_17526__$1 = (state_17658[(2)]);
var inst_17527 = (inst_17526__$1 == null);
var state_17658__$1 = (function (){var statearr_17674 = state_17658;
(statearr_17674[(12)] = inst_17526__$1);

return statearr_17674;
})();
if(cljs.core.truth_(inst_17527)){
var statearr_17675_17757 = state_17658__$1;
(statearr_17675_17757[(1)] = (5));

} else {
var statearr_17676_17758 = state_17658__$1;
(statearr_17676_17758[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (15))){
var inst_17538 = (state_17658[(14)]);
var inst_17535 = (state_17658[(15)]);
var inst_17536 = (state_17658[(16)]);
var inst_17537 = (state_17658[(17)]);
var inst_17553 = (state_17658[(2)]);
var inst_17554 = (inst_17538 + (1));
var tmp17670 = inst_17535;
var tmp17671 = inst_17536;
var tmp17672 = inst_17537;
var inst_17535__$1 = tmp17670;
var inst_17536__$1 = tmp17671;
var inst_17537__$1 = tmp17672;
var inst_17538__$1 = inst_17554;
var state_17658__$1 = (function (){var statearr_17677 = state_17658;
(statearr_17677[(14)] = inst_17538__$1);

(statearr_17677[(15)] = inst_17535__$1);

(statearr_17677[(18)] = inst_17553);

(statearr_17677[(16)] = inst_17536__$1);

(statearr_17677[(17)] = inst_17537__$1);

return statearr_17677;
})();
var statearr_17678_17759 = state_17658__$1;
(statearr_17678_17759[(2)] = null);

(statearr_17678_17759[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (21))){
var inst_17580 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
var statearr_17682_17760 = state_17658__$1;
(statearr_17682_17760[(2)] = inst_17580);

(statearr_17682_17760[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (31))){
var inst_17606 = (state_17658[(10)]);
var inst_17610 = done(null);
var inst_17611 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17606);
var state_17658__$1 = (function (){var statearr_17683 = state_17658;
(statearr_17683[(19)] = inst_17610);

return statearr_17683;
})();
var statearr_17684_17761 = state_17658__$1;
(statearr_17684_17761[(2)] = inst_17611);

(statearr_17684_17761[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (32))){
var inst_17600 = (state_17658[(20)]);
var inst_17598 = (state_17658[(21)]);
var inst_17601 = (state_17658[(9)]);
var inst_17599 = (state_17658[(11)]);
var inst_17613 = (state_17658[(2)]);
var inst_17614 = (inst_17601 + (1));
var tmp17679 = inst_17600;
var tmp17680 = inst_17598;
var tmp17681 = inst_17599;
var inst_17598__$1 = tmp17680;
var inst_17599__$1 = tmp17681;
var inst_17600__$1 = tmp17679;
var inst_17601__$1 = inst_17614;
var state_17658__$1 = (function (){var statearr_17685 = state_17658;
(statearr_17685[(20)] = inst_17600__$1);

(statearr_17685[(21)] = inst_17598__$1);

(statearr_17685[(9)] = inst_17601__$1);

(statearr_17685[(22)] = inst_17613);

(statearr_17685[(11)] = inst_17599__$1);

return statearr_17685;
})();
var statearr_17686_17762 = state_17658__$1;
(statearr_17686_17762[(2)] = null);

(statearr_17686_17762[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (40))){
var inst_17626 = (state_17658[(23)]);
var inst_17630 = done(null);
var inst_17631 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_17626);
var state_17658__$1 = (function (){var statearr_17687 = state_17658;
(statearr_17687[(24)] = inst_17630);

return statearr_17687;
})();
var statearr_17688_17763 = state_17658__$1;
(statearr_17688_17763[(2)] = inst_17631);

(statearr_17688_17763[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (33))){
var inst_17617 = (state_17658[(25)]);
var inst_17619 = cljs.core.chunked_seq_QMARK_(inst_17617);
var state_17658__$1 = state_17658;
if(inst_17619){
var statearr_17689_17764 = state_17658__$1;
(statearr_17689_17764[(1)] = (36));

} else {
var statearr_17690_17765 = state_17658__$1;
(statearr_17690_17765[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (13))){
var inst_17547 = (state_17658[(26)]);
var inst_17550 = cljs.core.async.close_BANG_(inst_17547);
var state_17658__$1 = state_17658;
var statearr_17691_17766 = state_17658__$1;
(statearr_17691_17766[(2)] = inst_17550);

(statearr_17691_17766[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (22))){
var inst_17570 = (state_17658[(8)]);
var inst_17573 = cljs.core.async.close_BANG_(inst_17570);
var state_17658__$1 = state_17658;
var statearr_17692_17767 = state_17658__$1;
(statearr_17692_17767[(2)] = inst_17573);

(statearr_17692_17767[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (36))){
var inst_17617 = (state_17658[(25)]);
var inst_17621 = cljs.core.chunk_first(inst_17617);
var inst_17622 = cljs.core.chunk_rest(inst_17617);
var inst_17623 = cljs.core.count(inst_17621);
var inst_17598 = inst_17622;
var inst_17599 = inst_17621;
var inst_17600 = inst_17623;
var inst_17601 = (0);
var state_17658__$1 = (function (){var statearr_17693 = state_17658;
(statearr_17693[(20)] = inst_17600);

(statearr_17693[(21)] = inst_17598);

(statearr_17693[(9)] = inst_17601);

(statearr_17693[(11)] = inst_17599);

return statearr_17693;
})();
var statearr_17694_17768 = state_17658__$1;
(statearr_17694_17768[(2)] = null);

(statearr_17694_17768[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (41))){
var inst_17617 = (state_17658[(25)]);
var inst_17633 = (state_17658[(2)]);
var inst_17634 = cljs.core.next(inst_17617);
var inst_17598 = inst_17634;
var inst_17599 = null;
var inst_17600 = (0);
var inst_17601 = (0);
var state_17658__$1 = (function (){var statearr_17695 = state_17658;
(statearr_17695[(20)] = inst_17600);

(statearr_17695[(21)] = inst_17598);

(statearr_17695[(9)] = inst_17601);

(statearr_17695[(27)] = inst_17633);

(statearr_17695[(11)] = inst_17599);

return statearr_17695;
})();
var statearr_17696_17769 = state_17658__$1;
(statearr_17696_17769[(2)] = null);

(statearr_17696_17769[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (43))){
var state_17658__$1 = state_17658;
var statearr_17697_17770 = state_17658__$1;
(statearr_17697_17770[(2)] = null);

(statearr_17697_17770[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (29))){
var inst_17642 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
var statearr_17698_17771 = state_17658__$1;
(statearr_17698_17771[(2)] = inst_17642);

(statearr_17698_17771[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (44))){
var inst_17651 = (state_17658[(2)]);
var state_17658__$1 = (function (){var statearr_17699 = state_17658;
(statearr_17699[(28)] = inst_17651);

return statearr_17699;
})();
var statearr_17700_17772 = state_17658__$1;
(statearr_17700_17772[(2)] = null);

(statearr_17700_17772[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (6))){
var inst_17590 = (state_17658[(29)]);
var inst_17589 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17590__$1 = cljs.core.keys(inst_17589);
var inst_17591 = cljs.core.count(inst_17590__$1);
var inst_17592 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_17591) : cljs.core.reset_BANG_.call(null,dctr,inst_17591));
var inst_17597 = cljs.core.seq(inst_17590__$1);
var inst_17598 = inst_17597;
var inst_17599 = null;
var inst_17600 = (0);
var inst_17601 = (0);
var state_17658__$1 = (function (){var statearr_17701 = state_17658;
(statearr_17701[(20)] = inst_17600);

(statearr_17701[(21)] = inst_17598);

(statearr_17701[(9)] = inst_17601);

(statearr_17701[(30)] = inst_17592);

(statearr_17701[(11)] = inst_17599);

(statearr_17701[(29)] = inst_17590__$1);

return statearr_17701;
})();
var statearr_17702_17773 = state_17658__$1;
(statearr_17702_17773[(2)] = null);

(statearr_17702_17773[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (28))){
var inst_17598 = (state_17658[(21)]);
var inst_17617 = (state_17658[(25)]);
var inst_17617__$1 = cljs.core.seq(inst_17598);
var state_17658__$1 = (function (){var statearr_17703 = state_17658;
(statearr_17703[(25)] = inst_17617__$1);

return statearr_17703;
})();
if(inst_17617__$1){
var statearr_17704_17774 = state_17658__$1;
(statearr_17704_17774[(1)] = (33));

} else {
var statearr_17705_17775 = state_17658__$1;
(statearr_17705_17775[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (25))){
var inst_17600 = (state_17658[(20)]);
var inst_17601 = (state_17658[(9)]);
var inst_17603 = (inst_17601 < inst_17600);
var inst_17604 = inst_17603;
var state_17658__$1 = state_17658;
if(cljs.core.truth_(inst_17604)){
var statearr_17706_17776 = state_17658__$1;
(statearr_17706_17776[(1)] = (27));

} else {
var statearr_17707_17777 = state_17658__$1;
(statearr_17707_17777[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (34))){
var state_17658__$1 = state_17658;
var statearr_17708_17778 = state_17658__$1;
(statearr_17708_17778[(2)] = null);

(statearr_17708_17778[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (17))){
var state_17658__$1 = state_17658;
var statearr_17709_17779 = state_17658__$1;
(statearr_17709_17779[(2)] = null);

(statearr_17709_17779[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (3))){
var inst_17656 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17658__$1,inst_17656);
} else {
if((state_val_17659 === (12))){
var inst_17585 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
var statearr_17710_17780 = state_17658__$1;
(statearr_17710_17780[(2)] = inst_17585);

(statearr_17710_17780[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (2))){
var state_17658__$1 = state_17658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17658__$1,(4),ch);
} else {
if((state_val_17659 === (23))){
var state_17658__$1 = state_17658;
var statearr_17711_17781 = state_17658__$1;
(statearr_17711_17781[(2)] = null);

(statearr_17711_17781[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (35))){
var inst_17640 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
var statearr_17712_17782 = state_17658__$1;
(statearr_17712_17782[(2)] = inst_17640);

(statearr_17712_17782[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (19))){
var inst_17557 = (state_17658[(7)]);
var inst_17561 = cljs.core.chunk_first(inst_17557);
var inst_17562 = cljs.core.chunk_rest(inst_17557);
var inst_17563 = cljs.core.count(inst_17561);
var inst_17535 = inst_17562;
var inst_17536 = inst_17561;
var inst_17537 = inst_17563;
var inst_17538 = (0);
var state_17658__$1 = (function (){var statearr_17713 = state_17658;
(statearr_17713[(14)] = inst_17538);

(statearr_17713[(15)] = inst_17535);

(statearr_17713[(16)] = inst_17536);

(statearr_17713[(17)] = inst_17537);

return statearr_17713;
})();
var statearr_17714_17783 = state_17658__$1;
(statearr_17714_17783[(2)] = null);

(statearr_17714_17783[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (11))){
var inst_17535 = (state_17658[(15)]);
var inst_17557 = (state_17658[(7)]);
var inst_17557__$1 = cljs.core.seq(inst_17535);
var state_17658__$1 = (function (){var statearr_17715 = state_17658;
(statearr_17715[(7)] = inst_17557__$1);

return statearr_17715;
})();
if(inst_17557__$1){
var statearr_17716_17784 = state_17658__$1;
(statearr_17716_17784[(1)] = (16));

} else {
var statearr_17717_17785 = state_17658__$1;
(statearr_17717_17785[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (9))){
var inst_17587 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
var statearr_17718_17786 = state_17658__$1;
(statearr_17718_17786[(2)] = inst_17587);

(statearr_17718_17786[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (5))){
var inst_17533 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_17534 = cljs.core.seq(inst_17533);
var inst_17535 = inst_17534;
var inst_17536 = null;
var inst_17537 = (0);
var inst_17538 = (0);
var state_17658__$1 = (function (){var statearr_17719 = state_17658;
(statearr_17719[(14)] = inst_17538);

(statearr_17719[(15)] = inst_17535);

(statearr_17719[(16)] = inst_17536);

(statearr_17719[(17)] = inst_17537);

return statearr_17719;
})();
var statearr_17720_17787 = state_17658__$1;
(statearr_17720_17787[(2)] = null);

(statearr_17720_17787[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (14))){
var state_17658__$1 = state_17658;
var statearr_17721_17788 = state_17658__$1;
(statearr_17721_17788[(2)] = null);

(statearr_17721_17788[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (45))){
var inst_17648 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
var statearr_17722_17789 = state_17658__$1;
(statearr_17722_17789[(2)] = inst_17648);

(statearr_17722_17789[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (26))){
var inst_17590 = (state_17658[(29)]);
var inst_17644 = (state_17658[(2)]);
var inst_17645 = cljs.core.seq(inst_17590);
var state_17658__$1 = (function (){var statearr_17723 = state_17658;
(statearr_17723[(31)] = inst_17644);

return statearr_17723;
})();
if(inst_17645){
var statearr_17724_17790 = state_17658__$1;
(statearr_17724_17790[(1)] = (42));

} else {
var statearr_17725_17791 = state_17658__$1;
(statearr_17725_17791[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (16))){
var inst_17557 = (state_17658[(7)]);
var inst_17559 = cljs.core.chunked_seq_QMARK_(inst_17557);
var state_17658__$1 = state_17658;
if(inst_17559){
var statearr_17726_17792 = state_17658__$1;
(statearr_17726_17792[(1)] = (19));

} else {
var statearr_17727_17793 = state_17658__$1;
(statearr_17727_17793[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (38))){
var inst_17637 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
var statearr_17728_17794 = state_17658__$1;
(statearr_17728_17794[(2)] = inst_17637);

(statearr_17728_17794[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (30))){
var state_17658__$1 = state_17658;
var statearr_17729_17795 = state_17658__$1;
(statearr_17729_17795[(2)] = null);

(statearr_17729_17795[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (10))){
var inst_17538 = (state_17658[(14)]);
var inst_17536 = (state_17658[(16)]);
var inst_17546 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_17536,inst_17538);
var inst_17547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17546,(0),null);
var inst_17548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17546,(1),null);
var state_17658__$1 = (function (){var statearr_17730 = state_17658;
(statearr_17730[(26)] = inst_17547);

return statearr_17730;
})();
if(cljs.core.truth_(inst_17548)){
var statearr_17731_17796 = state_17658__$1;
(statearr_17731_17796[(1)] = (13));

} else {
var statearr_17732_17797 = state_17658__$1;
(statearr_17732_17797[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (18))){
var inst_17583 = (state_17658[(2)]);
var state_17658__$1 = state_17658;
var statearr_17733_17798 = state_17658__$1;
(statearr_17733_17798[(2)] = inst_17583);

(statearr_17733_17798[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (42))){
var state_17658__$1 = state_17658;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17658__$1,(45),dchan);
} else {
if((state_val_17659 === (37))){
var inst_17626 = (state_17658[(23)]);
var inst_17617 = (state_17658[(25)]);
var inst_17526 = (state_17658[(12)]);
var inst_17626__$1 = cljs.core.first(inst_17617);
var inst_17627 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_17626__$1,inst_17526,done);
var state_17658__$1 = (function (){var statearr_17734 = state_17658;
(statearr_17734[(23)] = inst_17626__$1);

return statearr_17734;
})();
if(cljs.core.truth_(inst_17627)){
var statearr_17735_17799 = state_17658__$1;
(statearr_17735_17799[(1)] = (39));

} else {
var statearr_17736_17800 = state_17658__$1;
(statearr_17736_17800[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_17659 === (8))){
var inst_17538 = (state_17658[(14)]);
var inst_17537 = (state_17658[(17)]);
var inst_17540 = (inst_17538 < inst_17537);
var inst_17541 = inst_17540;
var state_17658__$1 = state_17658;
if(cljs.core.truth_(inst_17541)){
var statearr_17737_17801 = state_17658__$1;
(statearr_17737_17801[(1)] = (10));

} else {
var statearr_17738_17802 = state_17658__$1;
(statearr_17738_17802[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__16369__auto___17748,cs,m,dchan,dctr,done))
;
return ((function (switch__16243__auto__,c__16369__auto___17748,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16244__auto__ = null;
var cljs$core$async$mult_$_state_machine__16244__auto____0 = (function (){
var statearr_17742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17742[(0)] = cljs$core$async$mult_$_state_machine__16244__auto__);

(statearr_17742[(1)] = (1));

return statearr_17742;
});
var cljs$core$async$mult_$_state_machine__16244__auto____1 = (function (state_17658){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_17658);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e17743){if((e17743 instanceof Object)){
var ex__16247__auto__ = e17743;
var statearr_17744_17803 = state_17658;
(statearr_17744_17803[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_17658);

return cljs.core.cst$kw$recur;
} else {
throw e17743;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__17804 = state_17658;
state_17658 = G__17804;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16244__auto__ = function(state_17658){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16244__auto____1.call(this,state_17658);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16244__auto____0;
cljs$core$async$mult_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16244__auto____1;
return cljs$core$async$mult_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___17748,cs,m,dchan,dctr,done))
})();
var state__16371__auto__ = (function (){var statearr_17745 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_17745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___17748);

return statearr_17745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___17748,cs,m,dchan,dctr,done))
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
var args17805 = [];
var len__8822__auto___17808 = arguments.length;
var i__8823__auto___17809 = (0);
while(true){
if((i__8823__auto___17809 < len__8822__auto___17808)){
args17805.push((arguments[i__8823__auto___17809]));

var G__17810 = (i__8823__auto___17809 + (1));
i__8823__auto___17809 = G__17810;
continue;
} else {
}
break;
}

var G__17807 = args17805.length;
switch (G__17807) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17805.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8319__auto__ = (((m == null))?null:m);
var m__8320__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8320__auto__.call(null,m,ch));
} else {
var m__8320__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8320__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8319__auto__ = (((m == null))?null:m);
var m__8320__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8320__auto__.call(null,m,ch));
} else {
var m__8320__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__8320__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8319__auto__ = (((m == null))?null:m);
var m__8320__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__8320__auto__.call(null,m));
} else {
var m__8320__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__8320__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8319__auto__ = (((m == null))?null:m);
var m__8320__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8320__auto__.call(null,m,state_map));
} else {
var m__8320__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__8320__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8319__auto__ = (((m == null))?null:m);
var m__8320__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8320__auto__.call(null,m,mode));
} else {
var m__8320__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__8320__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8829__auto__ = [];
var len__8822__auto___17822 = arguments.length;
var i__8823__auto___17823 = (0);
while(true){
if((i__8823__auto___17823 < len__8822__auto___17822)){
args__8829__auto__.push((arguments[i__8823__auto___17823]));

var G__17824 = (i__8823__auto___17823 + (1));
i__8823__auto___17823 = G__17824;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((3) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8830__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__17816){
var map__17817 = p__17816;
var map__17817__$1 = ((((!((map__17817 == null)))?((((map__17817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17817.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17817):map__17817);
var opts = map__17817__$1;
var statearr_17819_17825 = state;
(statearr_17819_17825[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__6738__auto__ = cljs.core.async.do_alts(((function (map__17817,map__17817__$1,opts){
return (function (val){
var statearr_17820_17826 = state;
(statearr_17820_17826[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__17817,map__17817__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__6738__auto__)){
var cb = temp__6738__auto__;
var statearr_17821_17827 = state;
(statearr_17821_17827[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq17812){
var G__17813 = cljs.core.first(seq17812);
var seq17812__$1 = cljs.core.next(seq17812);
var G__17814 = cljs.core.first(seq17812__$1);
var seq17812__$2 = cljs.core.next(seq17812__$1);
var G__17815 = cljs.core.first(seq17812__$2);
var seq17812__$3 = cljs.core.next(seq17812__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17813,G__17814,G__17815,seq17812__$3);
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
var cs = (function (){var G__17999 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17999) : cljs.core.atom.call(null,G__17999));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__18000 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18000) : cljs.core.atom.call(null,G__18000));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var mode = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(solo_mode) : cljs.core.deref.call(null,solo_mode));
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async18001 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18001 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18002){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18002 = meta18002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18003,meta18002__$1){
var self__ = this;
var _18003__$1 = this;
return (new cljs.core.async.t_cljs$core$async18001(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18002__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18001.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18003){
var self__ = this;
var _18003__$1 = this;
return self__.meta18002;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18001.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18001.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18001.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18001.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18001.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18001.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18004_18170 = self__.cs;
var G__18005_18171 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18004_18170,G__18005_18171) : cljs.core.reset_BANG_.call(null,G__18004_18170,G__18005_18171));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18001.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18001.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18001.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta18002], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18001.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18001";

cljs.core.async.t_cljs$core$async18001.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.core.async/t_cljs$core$async18001");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18001 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18001(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18002){
return (new cljs.core.async.t_cljs$core$async18001(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18002));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18001(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16369__auto___18172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___18172,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___18172,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18107){
var state_val_18108 = (state_18107[(1)]);
if((state_val_18108 === (7))){
var inst_18022 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
var statearr_18109_18173 = state_18107__$1;
(statearr_18109_18173[(2)] = inst_18022);

(statearr_18109_18173[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (20))){
var inst_18034 = (state_18107[(7)]);
var state_18107__$1 = state_18107;
var statearr_18110_18174 = state_18107__$1;
(statearr_18110_18174[(2)] = inst_18034);

(statearr_18110_18174[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (27))){
var state_18107__$1 = state_18107;
var statearr_18111_18175 = state_18107__$1;
(statearr_18111_18175[(2)] = null);

(statearr_18111_18175[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (1))){
var inst_18009 = (state_18107[(8)]);
var inst_18009__$1 = calc_state();
var inst_18011 = (inst_18009__$1 == null);
var inst_18012 = cljs.core.not(inst_18011);
var state_18107__$1 = (function (){var statearr_18112 = state_18107;
(statearr_18112[(8)] = inst_18009__$1);

return statearr_18112;
})();
if(inst_18012){
var statearr_18113_18176 = state_18107__$1;
(statearr_18113_18176[(1)] = (2));

} else {
var statearr_18114_18177 = state_18107__$1;
(statearr_18114_18177[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (24))){
var inst_18058 = (state_18107[(9)]);
var inst_18067 = (state_18107[(10)]);
var inst_18081 = (state_18107[(11)]);
var inst_18081__$1 = (inst_18058.cljs$core$IFn$_invoke$arity$1 ? inst_18058.cljs$core$IFn$_invoke$arity$1(inst_18067) : inst_18058.call(null,inst_18067));
var state_18107__$1 = (function (){var statearr_18115 = state_18107;
(statearr_18115[(11)] = inst_18081__$1);

return statearr_18115;
})();
if(cljs.core.truth_(inst_18081__$1)){
var statearr_18116_18178 = state_18107__$1;
(statearr_18116_18178[(1)] = (29));

} else {
var statearr_18117_18179 = state_18107__$1;
(statearr_18117_18179[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (4))){
var inst_18025 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
if(cljs.core.truth_(inst_18025)){
var statearr_18118_18180 = state_18107__$1;
(statearr_18118_18180[(1)] = (8));

} else {
var statearr_18119_18181 = state_18107__$1;
(statearr_18119_18181[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (15))){
var inst_18052 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
if(cljs.core.truth_(inst_18052)){
var statearr_18120_18182 = state_18107__$1;
(statearr_18120_18182[(1)] = (19));

} else {
var statearr_18121_18183 = state_18107__$1;
(statearr_18121_18183[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (21))){
var inst_18057 = (state_18107[(12)]);
var inst_18057__$1 = (state_18107[(2)]);
var inst_18058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18057__$1,cljs.core.cst$kw$solos);
var inst_18059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18057__$1,cljs.core.cst$kw$mutes);
var inst_18060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18057__$1,cljs.core.cst$kw$reads);
var state_18107__$1 = (function (){var statearr_18122 = state_18107;
(statearr_18122[(12)] = inst_18057__$1);

(statearr_18122[(9)] = inst_18058);

(statearr_18122[(13)] = inst_18059);

return statearr_18122;
})();
return cljs.core.async.ioc_alts_BANG_(state_18107__$1,(22),inst_18060);
} else {
if((state_val_18108 === (31))){
var inst_18089 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
if(cljs.core.truth_(inst_18089)){
var statearr_18123_18184 = state_18107__$1;
(statearr_18123_18184[(1)] = (32));

} else {
var statearr_18124_18185 = state_18107__$1;
(statearr_18124_18185[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (32))){
var inst_18066 = (state_18107[(14)]);
var state_18107__$1 = state_18107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18107__$1,(35),out,inst_18066);
} else {
if((state_val_18108 === (33))){
var inst_18057 = (state_18107[(12)]);
var inst_18034 = inst_18057;
var state_18107__$1 = (function (){var statearr_18125 = state_18107;
(statearr_18125[(7)] = inst_18034);

return statearr_18125;
})();
var statearr_18126_18186 = state_18107__$1;
(statearr_18126_18186[(2)] = null);

(statearr_18126_18186[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (13))){
var inst_18034 = (state_18107[(7)]);
var inst_18041 = inst_18034.cljs$lang$protocol_mask$partition0$;
var inst_18042 = (inst_18041 & (64));
var inst_18043 = inst_18034.cljs$core$ISeq$;
var inst_18044 = (cljs.core.PROTOCOL_SENTINEL === inst_18043);
var inst_18045 = (inst_18042) || (inst_18044);
var state_18107__$1 = state_18107;
if(cljs.core.truth_(inst_18045)){
var statearr_18127_18187 = state_18107__$1;
(statearr_18127_18187[(1)] = (16));

} else {
var statearr_18128_18188 = state_18107__$1;
(statearr_18128_18188[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (22))){
var inst_18066 = (state_18107[(14)]);
var inst_18067 = (state_18107[(10)]);
var inst_18065 = (state_18107[(2)]);
var inst_18066__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18065,(0),null);
var inst_18067__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18065,(1),null);
var inst_18068 = (inst_18066__$1 == null);
var inst_18069 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18067__$1,change);
var inst_18070 = (inst_18068) || (inst_18069);
var state_18107__$1 = (function (){var statearr_18129 = state_18107;
(statearr_18129[(14)] = inst_18066__$1);

(statearr_18129[(10)] = inst_18067__$1);

return statearr_18129;
})();
if(cljs.core.truth_(inst_18070)){
var statearr_18130_18189 = state_18107__$1;
(statearr_18130_18189[(1)] = (23));

} else {
var statearr_18131_18190 = state_18107__$1;
(statearr_18131_18190[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (36))){
var inst_18057 = (state_18107[(12)]);
var inst_18034 = inst_18057;
var state_18107__$1 = (function (){var statearr_18132 = state_18107;
(statearr_18132[(7)] = inst_18034);

return statearr_18132;
})();
var statearr_18133_18191 = state_18107__$1;
(statearr_18133_18191[(2)] = null);

(statearr_18133_18191[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (29))){
var inst_18081 = (state_18107[(11)]);
var state_18107__$1 = state_18107;
var statearr_18134_18192 = state_18107__$1;
(statearr_18134_18192[(2)] = inst_18081);

(statearr_18134_18192[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (6))){
var state_18107__$1 = state_18107;
var statearr_18135_18193 = state_18107__$1;
(statearr_18135_18193[(2)] = false);

(statearr_18135_18193[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (28))){
var inst_18077 = (state_18107[(2)]);
var inst_18078 = calc_state();
var inst_18034 = inst_18078;
var state_18107__$1 = (function (){var statearr_18136 = state_18107;
(statearr_18136[(15)] = inst_18077);

(statearr_18136[(7)] = inst_18034);

return statearr_18136;
})();
var statearr_18137_18194 = state_18107__$1;
(statearr_18137_18194[(2)] = null);

(statearr_18137_18194[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (25))){
var inst_18103 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
var statearr_18138_18195 = state_18107__$1;
(statearr_18138_18195[(2)] = inst_18103);

(statearr_18138_18195[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (34))){
var inst_18101 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
var statearr_18139_18196 = state_18107__$1;
(statearr_18139_18196[(2)] = inst_18101);

(statearr_18139_18196[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (17))){
var state_18107__$1 = state_18107;
var statearr_18140_18197 = state_18107__$1;
(statearr_18140_18197[(2)] = false);

(statearr_18140_18197[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (3))){
var state_18107__$1 = state_18107;
var statearr_18141_18198 = state_18107__$1;
(statearr_18141_18198[(2)] = false);

(statearr_18141_18198[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (12))){
var inst_18105 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18107__$1,inst_18105);
} else {
if((state_val_18108 === (2))){
var inst_18009 = (state_18107[(8)]);
var inst_18014 = inst_18009.cljs$lang$protocol_mask$partition0$;
var inst_18015 = (inst_18014 & (64));
var inst_18016 = inst_18009.cljs$core$ISeq$;
var inst_18017 = (cljs.core.PROTOCOL_SENTINEL === inst_18016);
var inst_18018 = (inst_18015) || (inst_18017);
var state_18107__$1 = state_18107;
if(cljs.core.truth_(inst_18018)){
var statearr_18142_18199 = state_18107__$1;
(statearr_18142_18199[(1)] = (5));

} else {
var statearr_18143_18200 = state_18107__$1;
(statearr_18143_18200[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (23))){
var inst_18066 = (state_18107[(14)]);
var inst_18072 = (inst_18066 == null);
var state_18107__$1 = state_18107;
if(cljs.core.truth_(inst_18072)){
var statearr_18144_18201 = state_18107__$1;
(statearr_18144_18201[(1)] = (26));

} else {
var statearr_18145_18202 = state_18107__$1;
(statearr_18145_18202[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (35))){
var inst_18092 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
if(cljs.core.truth_(inst_18092)){
var statearr_18146_18203 = state_18107__$1;
(statearr_18146_18203[(1)] = (36));

} else {
var statearr_18147_18204 = state_18107__$1;
(statearr_18147_18204[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (19))){
var inst_18034 = (state_18107[(7)]);
var inst_18054 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18034);
var state_18107__$1 = state_18107;
var statearr_18148_18205 = state_18107__$1;
(statearr_18148_18205[(2)] = inst_18054);

(statearr_18148_18205[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (11))){
var inst_18034 = (state_18107[(7)]);
var inst_18038 = (inst_18034 == null);
var inst_18039 = cljs.core.not(inst_18038);
var state_18107__$1 = state_18107;
if(inst_18039){
var statearr_18149_18206 = state_18107__$1;
(statearr_18149_18206[(1)] = (13));

} else {
var statearr_18150_18207 = state_18107__$1;
(statearr_18150_18207[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (9))){
var inst_18009 = (state_18107[(8)]);
var state_18107__$1 = state_18107;
var statearr_18151_18208 = state_18107__$1;
(statearr_18151_18208[(2)] = inst_18009);

(statearr_18151_18208[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (5))){
var state_18107__$1 = state_18107;
var statearr_18152_18209 = state_18107__$1;
(statearr_18152_18209[(2)] = true);

(statearr_18152_18209[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (14))){
var state_18107__$1 = state_18107;
var statearr_18153_18210 = state_18107__$1;
(statearr_18153_18210[(2)] = false);

(statearr_18153_18210[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (26))){
var inst_18067 = (state_18107[(10)]);
var inst_18074 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18067);
var state_18107__$1 = state_18107;
var statearr_18154_18211 = state_18107__$1;
(statearr_18154_18211[(2)] = inst_18074);

(statearr_18154_18211[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (16))){
var state_18107__$1 = state_18107;
var statearr_18155_18212 = state_18107__$1;
(statearr_18155_18212[(2)] = true);

(statearr_18155_18212[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (38))){
var inst_18097 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
var statearr_18156_18213 = state_18107__$1;
(statearr_18156_18213[(2)] = inst_18097);

(statearr_18156_18213[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (30))){
var inst_18058 = (state_18107[(9)]);
var inst_18067 = (state_18107[(10)]);
var inst_18059 = (state_18107[(13)]);
var inst_18084 = cljs.core.empty_QMARK_(inst_18058);
var inst_18085 = (inst_18059.cljs$core$IFn$_invoke$arity$1 ? inst_18059.cljs$core$IFn$_invoke$arity$1(inst_18067) : inst_18059.call(null,inst_18067));
var inst_18086 = cljs.core.not(inst_18085);
var inst_18087 = (inst_18084) && (inst_18086);
var state_18107__$1 = state_18107;
var statearr_18157_18214 = state_18107__$1;
(statearr_18157_18214[(2)] = inst_18087);

(statearr_18157_18214[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (10))){
var inst_18009 = (state_18107[(8)]);
var inst_18030 = (state_18107[(2)]);
var inst_18031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18030,cljs.core.cst$kw$solos);
var inst_18032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18030,cljs.core.cst$kw$mutes);
var inst_18033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18030,cljs.core.cst$kw$reads);
var inst_18034 = inst_18009;
var state_18107__$1 = (function (){var statearr_18158 = state_18107;
(statearr_18158[(16)] = inst_18031);

(statearr_18158[(7)] = inst_18034);

(statearr_18158[(17)] = inst_18033);

(statearr_18158[(18)] = inst_18032);

return statearr_18158;
})();
var statearr_18159_18215 = state_18107__$1;
(statearr_18159_18215[(2)] = null);

(statearr_18159_18215[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (18))){
var inst_18049 = (state_18107[(2)]);
var state_18107__$1 = state_18107;
var statearr_18160_18216 = state_18107__$1;
(statearr_18160_18216[(2)] = inst_18049);

(statearr_18160_18216[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (37))){
var state_18107__$1 = state_18107;
var statearr_18161_18217 = state_18107__$1;
(statearr_18161_18217[(2)] = null);

(statearr_18161_18217[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18108 === (8))){
var inst_18009 = (state_18107[(8)]);
var inst_18027 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_18009);
var state_18107__$1 = state_18107;
var statearr_18162_18218 = state_18107__$1;
(statearr_18162_18218[(2)] = inst_18027);

(statearr_18162_18218[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__16369__auto___18172,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16243__auto__,c__16369__auto___18172,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16244__auto__ = null;
var cljs$core$async$mix_$_state_machine__16244__auto____0 = (function (){
var statearr_18166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18166[(0)] = cljs$core$async$mix_$_state_machine__16244__auto__);

(statearr_18166[(1)] = (1));

return statearr_18166;
});
var cljs$core$async$mix_$_state_machine__16244__auto____1 = (function (state_18107){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_18107);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e18167){if((e18167 instanceof Object)){
var ex__16247__auto__ = e18167;
var statearr_18168_18219 = state_18107;
(statearr_18168_18219[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18107);

return cljs.core.cst$kw$recur;
} else {
throw e18167;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__18220 = state_18107;
state_18107 = G__18220;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16244__auto__ = function(state_18107){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16244__auto____1.call(this,state_18107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16244__auto____0;
cljs$core$async$mix_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16244__auto____1;
return cljs$core$async$mix_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___18172,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16371__auto__ = (function (){var statearr_18169 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_18169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___18172);

return statearr_18169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___18172,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8319__auto__ = (((p == null))?null:p);
var m__8320__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$4 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8320__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__8320__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__8320__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8319__auto__ = (((p == null))?null:p);
var m__8320__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$3 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8320__auto__.call(null,p,v,ch));
} else {
var m__8320__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__8320__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args18221 = [];
var len__8822__auto___18224 = arguments.length;
var i__8823__auto___18225 = (0);
while(true){
if((i__8823__auto___18225 < len__8822__auto___18224)){
args18221.push((arguments[i__8823__auto___18225]));

var G__18226 = (i__8823__auto___18225 + (1));
i__8823__auto___18225 = G__18226;
continue;
} else {
}
break;
}

var G__18223 = args18221.length;
switch (G__18223) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18221.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8319__auto__ = (((p == null))?null:p);
var m__8320__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__8320__auto__.call(null,p));
} else {
var m__8320__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__8320__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8319__auto__ = (((p == null))?null:p);
var m__8320__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8319__auto__)]);
if(!((m__8320__auto__ == null))){
return (m__8320__auto__.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__8320__auto__.call(null,p,v));
} else {
var m__8320__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__8320__auto____$1 == null))){
return (m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__8320__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__8320__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var args18229 = [];
var len__8822__auto___18357 = arguments.length;
var i__8823__auto___18358 = (0);
while(true){
if((i__8823__auto___18358 < len__8822__auto___18357)){
args18229.push((arguments[i__8823__auto___18358]));

var G__18359 = (i__8823__auto___18358 + (1));
i__8823__auto___18358 = G__18359;
continue;
} else {
}
break;
}

var G__18231 = args18229.length;
switch (G__18231) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18229.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__18232 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18232) : cljs.core.atom.call(null,G__18232));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__7601__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__7601__auto__,mults){
return (function (p1__18228_SHARP_){
if(cljs.core.truth_((p1__18228_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18228_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18228_SHARP_.call(null,topic)))){
return p1__18228_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18228_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__7601__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async18233 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18233 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18234){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18234 = meta18234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18235,meta18234__$1){
var self__ = this;
var _18235__$1 = this;
return (new cljs.core.async.t_cljs$core$async18233(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18234__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18233.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18235){
var self__ = this;
var _18235__$1 = this;
return self__.meta18234;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18233.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18233.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18233.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18233.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18233.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__6738__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__6738__auto__)){
var m = temp__6738__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18233.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__18236 = self__.mults;
var G__18237 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18236,G__18237) : cljs.core.reset_BANG_.call(null,G__18236,G__18237));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18233.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18233.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta18234], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18233.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18233";

cljs.core.async.t_cljs$core$async18233.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.core.async/t_cljs$core$async18233");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async18233 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18233(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18234){
return (new cljs.core.async.t_cljs$core$async18233(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18234));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18233(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16369__auto___18361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___18361,mults,ensure_mult,p){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___18361,mults,ensure_mult,p){
return (function (state_18309){
var state_val_18310 = (state_18309[(1)]);
if((state_val_18310 === (7))){
var inst_18305 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
var statearr_18311_18362 = state_18309__$1;
(statearr_18311_18362[(2)] = inst_18305);

(statearr_18311_18362[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (20))){
var state_18309__$1 = state_18309;
var statearr_18312_18363 = state_18309__$1;
(statearr_18312_18363[(2)] = null);

(statearr_18312_18363[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (1))){
var state_18309__$1 = state_18309;
var statearr_18313_18364 = state_18309__$1;
(statearr_18313_18364[(2)] = null);

(statearr_18313_18364[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (24))){
var inst_18288 = (state_18309[(7)]);
var inst_18297 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18288);
var state_18309__$1 = state_18309;
var statearr_18314_18365 = state_18309__$1;
(statearr_18314_18365[(2)] = inst_18297);

(statearr_18314_18365[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (4))){
var inst_18240 = (state_18309[(8)]);
var inst_18240__$1 = (state_18309[(2)]);
var inst_18241 = (inst_18240__$1 == null);
var state_18309__$1 = (function (){var statearr_18315 = state_18309;
(statearr_18315[(8)] = inst_18240__$1);

return statearr_18315;
})();
if(cljs.core.truth_(inst_18241)){
var statearr_18316_18366 = state_18309__$1;
(statearr_18316_18366[(1)] = (5));

} else {
var statearr_18317_18367 = state_18309__$1;
(statearr_18317_18367[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (15))){
var inst_18282 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
var statearr_18318_18368 = state_18309__$1;
(statearr_18318_18368[(2)] = inst_18282);

(statearr_18318_18368[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (21))){
var inst_18302 = (state_18309[(2)]);
var state_18309__$1 = (function (){var statearr_18319 = state_18309;
(statearr_18319[(9)] = inst_18302);

return statearr_18319;
})();
var statearr_18320_18369 = state_18309__$1;
(statearr_18320_18369[(2)] = null);

(statearr_18320_18369[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (13))){
var inst_18264 = (state_18309[(10)]);
var inst_18266 = cljs.core.chunked_seq_QMARK_(inst_18264);
var state_18309__$1 = state_18309;
if(inst_18266){
var statearr_18321_18370 = state_18309__$1;
(statearr_18321_18370[(1)] = (16));

} else {
var statearr_18322_18371 = state_18309__$1;
(statearr_18322_18371[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (22))){
var inst_18294 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
if(cljs.core.truth_(inst_18294)){
var statearr_18323_18372 = state_18309__$1;
(statearr_18323_18372[(1)] = (23));

} else {
var statearr_18324_18373 = state_18309__$1;
(statearr_18324_18373[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (6))){
var inst_18240 = (state_18309[(8)]);
var inst_18290 = (state_18309[(11)]);
var inst_18288 = (state_18309[(7)]);
var inst_18288__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18240) : topic_fn.call(null,inst_18240));
var inst_18289 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_18290__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18289,inst_18288__$1);
var state_18309__$1 = (function (){var statearr_18325 = state_18309;
(statearr_18325[(11)] = inst_18290__$1);

(statearr_18325[(7)] = inst_18288__$1);

return statearr_18325;
})();
if(cljs.core.truth_(inst_18290__$1)){
var statearr_18326_18374 = state_18309__$1;
(statearr_18326_18374[(1)] = (19));

} else {
var statearr_18327_18375 = state_18309__$1;
(statearr_18327_18375[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (25))){
var inst_18299 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
var statearr_18328_18376 = state_18309__$1;
(statearr_18328_18376[(2)] = inst_18299);

(statearr_18328_18376[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (17))){
var inst_18264 = (state_18309[(10)]);
var inst_18273 = cljs.core.first(inst_18264);
var inst_18274 = cljs.core.async.muxch_STAR_(inst_18273);
var inst_18275 = cljs.core.async.close_BANG_(inst_18274);
var inst_18276 = cljs.core.next(inst_18264);
var inst_18250 = inst_18276;
var inst_18251 = null;
var inst_18252 = (0);
var inst_18253 = (0);
var state_18309__$1 = (function (){var statearr_18329 = state_18309;
(statearr_18329[(12)] = inst_18250);

(statearr_18329[(13)] = inst_18252);

(statearr_18329[(14)] = inst_18253);

(statearr_18329[(15)] = inst_18275);

(statearr_18329[(16)] = inst_18251);

return statearr_18329;
})();
var statearr_18330_18377 = state_18309__$1;
(statearr_18330_18377[(2)] = null);

(statearr_18330_18377[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (3))){
var inst_18307 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18309__$1,inst_18307);
} else {
if((state_val_18310 === (12))){
var inst_18284 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
var statearr_18331_18378 = state_18309__$1;
(statearr_18331_18378[(2)] = inst_18284);

(statearr_18331_18378[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (2))){
var state_18309__$1 = state_18309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18309__$1,(4),ch);
} else {
if((state_val_18310 === (23))){
var state_18309__$1 = state_18309;
var statearr_18332_18379 = state_18309__$1;
(statearr_18332_18379[(2)] = null);

(statearr_18332_18379[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (19))){
var inst_18240 = (state_18309[(8)]);
var inst_18290 = (state_18309[(11)]);
var inst_18292 = cljs.core.async.muxch_STAR_(inst_18290);
var state_18309__$1 = state_18309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18309__$1,(22),inst_18292,inst_18240);
} else {
if((state_val_18310 === (11))){
var inst_18250 = (state_18309[(12)]);
var inst_18264 = (state_18309[(10)]);
var inst_18264__$1 = cljs.core.seq(inst_18250);
var state_18309__$1 = (function (){var statearr_18333 = state_18309;
(statearr_18333[(10)] = inst_18264__$1);

return statearr_18333;
})();
if(inst_18264__$1){
var statearr_18334_18380 = state_18309__$1;
(statearr_18334_18380[(1)] = (13));

} else {
var statearr_18335_18381 = state_18309__$1;
(statearr_18335_18381[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (9))){
var inst_18286 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
var statearr_18336_18382 = state_18309__$1;
(statearr_18336_18382[(2)] = inst_18286);

(statearr_18336_18382[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (5))){
var inst_18247 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_18248 = cljs.core.vals(inst_18247);
var inst_18249 = cljs.core.seq(inst_18248);
var inst_18250 = inst_18249;
var inst_18251 = null;
var inst_18252 = (0);
var inst_18253 = (0);
var state_18309__$1 = (function (){var statearr_18337 = state_18309;
(statearr_18337[(12)] = inst_18250);

(statearr_18337[(13)] = inst_18252);

(statearr_18337[(14)] = inst_18253);

(statearr_18337[(16)] = inst_18251);

return statearr_18337;
})();
var statearr_18338_18383 = state_18309__$1;
(statearr_18338_18383[(2)] = null);

(statearr_18338_18383[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (14))){
var state_18309__$1 = state_18309;
var statearr_18342_18384 = state_18309__$1;
(statearr_18342_18384[(2)] = null);

(statearr_18342_18384[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (16))){
var inst_18264 = (state_18309[(10)]);
var inst_18268 = cljs.core.chunk_first(inst_18264);
var inst_18269 = cljs.core.chunk_rest(inst_18264);
var inst_18270 = cljs.core.count(inst_18268);
var inst_18250 = inst_18269;
var inst_18251 = inst_18268;
var inst_18252 = inst_18270;
var inst_18253 = (0);
var state_18309__$1 = (function (){var statearr_18343 = state_18309;
(statearr_18343[(12)] = inst_18250);

(statearr_18343[(13)] = inst_18252);

(statearr_18343[(14)] = inst_18253);

(statearr_18343[(16)] = inst_18251);

return statearr_18343;
})();
var statearr_18344_18385 = state_18309__$1;
(statearr_18344_18385[(2)] = null);

(statearr_18344_18385[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (10))){
var inst_18250 = (state_18309[(12)]);
var inst_18252 = (state_18309[(13)]);
var inst_18253 = (state_18309[(14)]);
var inst_18251 = (state_18309[(16)]);
var inst_18258 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18251,inst_18253);
var inst_18259 = cljs.core.async.muxch_STAR_(inst_18258);
var inst_18260 = cljs.core.async.close_BANG_(inst_18259);
var inst_18261 = (inst_18253 + (1));
var tmp18339 = inst_18250;
var tmp18340 = inst_18252;
var tmp18341 = inst_18251;
var inst_18250__$1 = tmp18339;
var inst_18251__$1 = tmp18341;
var inst_18252__$1 = tmp18340;
var inst_18253__$1 = inst_18261;
var state_18309__$1 = (function (){var statearr_18345 = state_18309;
(statearr_18345[(12)] = inst_18250__$1);

(statearr_18345[(13)] = inst_18252__$1);

(statearr_18345[(14)] = inst_18253__$1);

(statearr_18345[(17)] = inst_18260);

(statearr_18345[(16)] = inst_18251__$1);

return statearr_18345;
})();
var statearr_18346_18386 = state_18309__$1;
(statearr_18346_18386[(2)] = null);

(statearr_18346_18386[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (18))){
var inst_18279 = (state_18309[(2)]);
var state_18309__$1 = state_18309;
var statearr_18347_18387 = state_18309__$1;
(statearr_18347_18387[(2)] = inst_18279);

(statearr_18347_18387[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18310 === (8))){
var inst_18252 = (state_18309[(13)]);
var inst_18253 = (state_18309[(14)]);
var inst_18255 = (inst_18253 < inst_18252);
var inst_18256 = inst_18255;
var state_18309__$1 = state_18309;
if(cljs.core.truth_(inst_18256)){
var statearr_18348_18388 = state_18309__$1;
(statearr_18348_18388[(1)] = (10));

} else {
var statearr_18349_18389 = state_18309__$1;
(statearr_18349_18389[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__16369__auto___18361,mults,ensure_mult,p))
;
return ((function (switch__16243__auto__,c__16369__auto___18361,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16244__auto__ = null;
var cljs$core$async$state_machine__16244__auto____0 = (function (){
var statearr_18353 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18353[(0)] = cljs$core$async$state_machine__16244__auto__);

(statearr_18353[(1)] = (1));

return statearr_18353;
});
var cljs$core$async$state_machine__16244__auto____1 = (function (state_18309){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_18309);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e18354){if((e18354 instanceof Object)){
var ex__16247__auto__ = e18354;
var statearr_18355_18390 = state_18309;
(statearr_18355_18390[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18309);

return cljs.core.cst$kw$recur;
} else {
throw e18354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__18391 = state_18309;
state_18309 = G__18391;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$state_machine__16244__auto__ = function(state_18309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16244__auto____1.call(this,state_18309);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16244__auto____0;
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16244__auto____1;
return cljs$core$async$state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___18361,mults,ensure_mult,p))
})();
var state__16371__auto__ = (function (){var statearr_18356 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_18356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___18361);

return statearr_18356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___18361,mults,ensure_mult,p))
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
var args18392 = [];
var len__8822__auto___18395 = arguments.length;
var i__8823__auto___18396 = (0);
while(true){
if((i__8823__auto___18396 < len__8822__auto___18395)){
args18392.push((arguments[i__8823__auto___18396]));

var G__18397 = (i__8823__auto___18396 + (1));
i__8823__auto___18396 = G__18397;
continue;
} else {
}
break;
}

var G__18394 = args18392.length;
switch (G__18394) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18392.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args18399 = [];
var len__8822__auto___18402 = arguments.length;
var i__8823__auto___18403 = (0);
while(true){
if((i__8823__auto___18403 < len__8822__auto___18402)){
args18399.push((arguments[i__8823__auto___18403]));

var G__18404 = (i__8823__auto___18403 + (1));
i__8823__auto___18403 = G__18404;
continue;
} else {
}
break;
}

var G__18401 = args18399.length;
switch (G__18401) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18399.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var args18406 = [];
var len__8822__auto___18477 = arguments.length;
var i__8823__auto___18478 = (0);
while(true){
if((i__8823__auto___18478 < len__8822__auto___18477)){
args18406.push((arguments[i__8823__auto___18478]));

var G__18479 = (i__8823__auto___18478 + (1));
i__8823__auto___18478 = G__18479;
continue;
} else {
}
break;
}

var G__18408 = args18406.length;
switch (G__18408) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18406.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__16369__auto___18481 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___18481,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___18481,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18447){
var state_val_18448 = (state_18447[(1)]);
if((state_val_18448 === (7))){
var state_18447__$1 = state_18447;
var statearr_18449_18482 = state_18447__$1;
(statearr_18449_18482[(2)] = null);

(statearr_18449_18482[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18448 === (1))){
var state_18447__$1 = state_18447;
var statearr_18450_18483 = state_18447__$1;
(statearr_18450_18483[(2)] = null);

(statearr_18450_18483[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18448 === (4))){
var inst_18411 = (state_18447[(7)]);
var inst_18413 = (inst_18411 < cnt);
var state_18447__$1 = state_18447;
if(cljs.core.truth_(inst_18413)){
var statearr_18451_18484 = state_18447__$1;
(statearr_18451_18484[(1)] = (6));

} else {
var statearr_18452_18485 = state_18447__$1;
(statearr_18452_18485[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18448 === (15))){
var inst_18443 = (state_18447[(2)]);
var state_18447__$1 = state_18447;
var statearr_18453_18486 = state_18447__$1;
(statearr_18453_18486[(2)] = inst_18443);

(statearr_18453_18486[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18448 === (13))){
var inst_18436 = cljs.core.async.close_BANG_(out);
var state_18447__$1 = state_18447;
var statearr_18454_18487 = state_18447__$1;
(statearr_18454_18487[(2)] = inst_18436);

(statearr_18454_18487[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18448 === (6))){
var state_18447__$1 = state_18447;
var statearr_18455_18488 = state_18447__$1;
(statearr_18455_18488[(2)] = null);

(statearr_18455_18488[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18448 === (3))){
var inst_18445 = (state_18447[(2)]);
var state_18447__$1 = state_18447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18447__$1,inst_18445);
} else {
if((state_val_18448 === (12))){
var inst_18433 = (state_18447[(8)]);
var inst_18433__$1 = (state_18447[(2)]);
var inst_18434 = cljs.core.some(cljs.core.nil_QMARK_,inst_18433__$1);
var state_18447__$1 = (function (){var statearr_18456 = state_18447;
(statearr_18456[(8)] = inst_18433__$1);

return statearr_18456;
})();
if(cljs.core.truth_(inst_18434)){
var statearr_18457_18489 = state_18447__$1;
(statearr_18457_18489[(1)] = (13));

} else {
var statearr_18458_18490 = state_18447__$1;
(statearr_18458_18490[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18448 === (2))){
var inst_18410 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_18411 = (0);
var state_18447__$1 = (function (){var statearr_18459 = state_18447;
(statearr_18459[(7)] = inst_18411);

(statearr_18459[(9)] = inst_18410);

return statearr_18459;
})();
var statearr_18460_18491 = state_18447__$1;
(statearr_18460_18491[(2)] = null);

(statearr_18460_18491[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18448 === (11))){
var inst_18411 = (state_18447[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_18447,(10),Object,null,(9));
var inst_18420 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_18411) : chs__$1.call(null,inst_18411));
var inst_18421 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_18411) : done.call(null,inst_18411));
var inst_18422 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_18420,inst_18421);
var state_18447__$1 = state_18447;
var statearr_18461_18492 = state_18447__$1;
(statearr_18461_18492[(2)] = inst_18422);


cljs.core.async.impl.ioc_helpers.process_exception(state_18447__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18448 === (9))){
var inst_18411 = (state_18447[(7)]);
var inst_18424 = (state_18447[(2)]);
var inst_18425 = (inst_18411 + (1));
var inst_18411__$1 = inst_18425;
var state_18447__$1 = (function (){var statearr_18462 = state_18447;
(statearr_18462[(7)] = inst_18411__$1);

(statearr_18462[(10)] = inst_18424);

return statearr_18462;
})();
var statearr_18463_18493 = state_18447__$1;
(statearr_18463_18493[(2)] = null);

(statearr_18463_18493[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18448 === (5))){
var inst_18431 = (state_18447[(2)]);
var state_18447__$1 = (function (){var statearr_18464 = state_18447;
(statearr_18464[(11)] = inst_18431);

return statearr_18464;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18447__$1,(12),dchan);
} else {
if((state_val_18448 === (14))){
var inst_18433 = (state_18447[(8)]);
var inst_18438 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_18433);
var state_18447__$1 = state_18447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18447__$1,(16),out,inst_18438);
} else {
if((state_val_18448 === (16))){
var inst_18440 = (state_18447[(2)]);
var state_18447__$1 = (function (){var statearr_18465 = state_18447;
(statearr_18465[(12)] = inst_18440);

return statearr_18465;
})();
var statearr_18466_18494 = state_18447__$1;
(statearr_18466_18494[(2)] = null);

(statearr_18466_18494[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18448 === (10))){
var inst_18415 = (state_18447[(2)]);
var inst_18416 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_18447__$1 = (function (){var statearr_18467 = state_18447;
(statearr_18467[(13)] = inst_18415);

return statearr_18467;
})();
var statearr_18468_18495 = state_18447__$1;
(statearr_18468_18495[(2)] = inst_18416);


cljs.core.async.impl.ioc_helpers.process_exception(state_18447__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_18448 === (8))){
var inst_18429 = (state_18447[(2)]);
var state_18447__$1 = state_18447;
var statearr_18469_18496 = state_18447__$1;
(statearr_18469_18496[(2)] = inst_18429);

(statearr_18469_18496[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__16369__auto___18481,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16243__auto__,c__16369__auto___18481,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16244__auto__ = null;
var cljs$core$async$state_machine__16244__auto____0 = (function (){
var statearr_18473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18473[(0)] = cljs$core$async$state_machine__16244__auto__);

(statearr_18473[(1)] = (1));

return statearr_18473;
});
var cljs$core$async$state_machine__16244__auto____1 = (function (state_18447){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_18447);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e18474){if((e18474 instanceof Object)){
var ex__16247__auto__ = e18474;
var statearr_18475_18497 = state_18447;
(statearr_18475_18497[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18447);

return cljs.core.cst$kw$recur;
} else {
throw e18474;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__18498 = state_18447;
state_18447 = G__18498;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$state_machine__16244__auto__ = function(state_18447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16244__auto____1.call(this,state_18447);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16244__auto____0;
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16244__auto____1;
return cljs$core$async$state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___18481,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16371__auto__ = (function (){var statearr_18476 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_18476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___18481);

return statearr_18476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___18481,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args18500 = [];
var len__8822__auto___18558 = arguments.length;
var i__8823__auto___18559 = (0);
while(true){
if((i__8823__auto___18559 < len__8822__auto___18558)){
args18500.push((arguments[i__8823__auto___18559]));

var G__18560 = (i__8823__auto___18559 + (1));
i__8823__auto___18559 = G__18560;
continue;
} else {
}
break;
}

var G__18502 = args18500.length;
switch (G__18502) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18500.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16369__auto___18562 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___18562,out){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___18562,out){
return (function (state_18534){
var state_val_18535 = (state_18534[(1)]);
if((state_val_18535 === (7))){
var inst_18514 = (state_18534[(7)]);
var inst_18513 = (state_18534[(8)]);
var inst_18513__$1 = (state_18534[(2)]);
var inst_18514__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18513__$1,(0),null);
var inst_18515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18513__$1,(1),null);
var inst_18516 = (inst_18514__$1 == null);
var state_18534__$1 = (function (){var statearr_18536 = state_18534;
(statearr_18536[(7)] = inst_18514__$1);

(statearr_18536[(8)] = inst_18513__$1);

(statearr_18536[(9)] = inst_18515);

return statearr_18536;
})();
if(cljs.core.truth_(inst_18516)){
var statearr_18537_18563 = state_18534__$1;
(statearr_18537_18563[(1)] = (8));

} else {
var statearr_18538_18564 = state_18534__$1;
(statearr_18538_18564[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18535 === (1))){
var inst_18503 = cljs.core.vec(chs);
var inst_18504 = inst_18503;
var state_18534__$1 = (function (){var statearr_18539 = state_18534;
(statearr_18539[(10)] = inst_18504);

return statearr_18539;
})();
var statearr_18540_18565 = state_18534__$1;
(statearr_18540_18565[(2)] = null);

(statearr_18540_18565[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18535 === (4))){
var inst_18504 = (state_18534[(10)]);
var state_18534__$1 = state_18534;
return cljs.core.async.ioc_alts_BANG_(state_18534__$1,(7),inst_18504);
} else {
if((state_val_18535 === (6))){
var inst_18530 = (state_18534[(2)]);
var state_18534__$1 = state_18534;
var statearr_18541_18566 = state_18534__$1;
(statearr_18541_18566[(2)] = inst_18530);

(statearr_18541_18566[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18535 === (3))){
var inst_18532 = (state_18534[(2)]);
var state_18534__$1 = state_18534;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18534__$1,inst_18532);
} else {
if((state_val_18535 === (2))){
var inst_18504 = (state_18534[(10)]);
var inst_18506 = cljs.core.count(inst_18504);
var inst_18507 = (inst_18506 > (0));
var state_18534__$1 = state_18534;
if(cljs.core.truth_(inst_18507)){
var statearr_18543_18567 = state_18534__$1;
(statearr_18543_18567[(1)] = (4));

} else {
var statearr_18544_18568 = state_18534__$1;
(statearr_18544_18568[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18535 === (11))){
var inst_18504 = (state_18534[(10)]);
var inst_18523 = (state_18534[(2)]);
var tmp18542 = inst_18504;
var inst_18504__$1 = tmp18542;
var state_18534__$1 = (function (){var statearr_18545 = state_18534;
(statearr_18545[(11)] = inst_18523);

(statearr_18545[(10)] = inst_18504__$1);

return statearr_18545;
})();
var statearr_18546_18569 = state_18534__$1;
(statearr_18546_18569[(2)] = null);

(statearr_18546_18569[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18535 === (9))){
var inst_18514 = (state_18534[(7)]);
var state_18534__$1 = state_18534;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18534__$1,(11),out,inst_18514);
} else {
if((state_val_18535 === (5))){
var inst_18528 = cljs.core.async.close_BANG_(out);
var state_18534__$1 = state_18534;
var statearr_18547_18570 = state_18534__$1;
(statearr_18547_18570[(2)] = inst_18528);

(statearr_18547_18570[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18535 === (10))){
var inst_18526 = (state_18534[(2)]);
var state_18534__$1 = state_18534;
var statearr_18548_18571 = state_18534__$1;
(statearr_18548_18571[(2)] = inst_18526);

(statearr_18548_18571[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18535 === (8))){
var inst_18514 = (state_18534[(7)]);
var inst_18513 = (state_18534[(8)]);
var inst_18504 = (state_18534[(10)]);
var inst_18515 = (state_18534[(9)]);
var inst_18518 = (function (){var cs = inst_18504;
var vec__18509 = inst_18513;
var v = inst_18514;
var c = inst_18515;
return ((function (cs,vec__18509,v,c,inst_18514,inst_18513,inst_18504,inst_18515,state_val_18535,c__16369__auto___18562,out){
return (function (p1__18499_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__18499_SHARP_);
});
;})(cs,vec__18509,v,c,inst_18514,inst_18513,inst_18504,inst_18515,state_val_18535,c__16369__auto___18562,out))
})();
var inst_18519 = cljs.core.filterv(inst_18518,inst_18504);
var inst_18504__$1 = inst_18519;
var state_18534__$1 = (function (){var statearr_18549 = state_18534;
(statearr_18549[(10)] = inst_18504__$1);

return statearr_18549;
})();
var statearr_18550_18572 = state_18534__$1;
(statearr_18550_18572[(2)] = null);

(statearr_18550_18572[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16369__auto___18562,out))
;
return ((function (switch__16243__auto__,c__16369__auto___18562,out){
return (function() {
var cljs$core$async$state_machine__16244__auto__ = null;
var cljs$core$async$state_machine__16244__auto____0 = (function (){
var statearr_18554 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18554[(0)] = cljs$core$async$state_machine__16244__auto__);

(statearr_18554[(1)] = (1));

return statearr_18554;
});
var cljs$core$async$state_machine__16244__auto____1 = (function (state_18534){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_18534);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e18555){if((e18555 instanceof Object)){
var ex__16247__auto__ = e18555;
var statearr_18556_18573 = state_18534;
(statearr_18556_18573[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18534);

return cljs.core.cst$kw$recur;
} else {
throw e18555;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__18574 = state_18534;
state_18534 = G__18574;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$state_machine__16244__auto__ = function(state_18534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16244__auto____1.call(this,state_18534);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16244__auto____0;
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16244__auto____1;
return cljs$core$async$state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___18562,out))
})();
var state__16371__auto__ = (function (){var statearr_18557 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_18557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___18562);

return statearr_18557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___18562,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args18575 = [];
var len__8822__auto___18624 = arguments.length;
var i__8823__auto___18625 = (0);
while(true){
if((i__8823__auto___18625 < len__8822__auto___18624)){
args18575.push((arguments[i__8823__auto___18625]));

var G__18626 = (i__8823__auto___18625 + (1));
i__8823__auto___18625 = G__18626;
continue;
} else {
}
break;
}

var G__18577 = args18575.length;
switch (G__18577) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18575.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16369__auto___18628 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___18628,out){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___18628,out){
return (function (state_18601){
var state_val_18602 = (state_18601[(1)]);
if((state_val_18602 === (7))){
var inst_18583 = (state_18601[(7)]);
var inst_18583__$1 = (state_18601[(2)]);
var inst_18584 = (inst_18583__$1 == null);
var inst_18585 = cljs.core.not(inst_18584);
var state_18601__$1 = (function (){var statearr_18603 = state_18601;
(statearr_18603[(7)] = inst_18583__$1);

return statearr_18603;
})();
if(inst_18585){
var statearr_18604_18629 = state_18601__$1;
(statearr_18604_18629[(1)] = (8));

} else {
var statearr_18605_18630 = state_18601__$1;
(statearr_18605_18630[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18602 === (1))){
var inst_18578 = (0);
var state_18601__$1 = (function (){var statearr_18606 = state_18601;
(statearr_18606[(8)] = inst_18578);

return statearr_18606;
})();
var statearr_18607_18631 = state_18601__$1;
(statearr_18607_18631[(2)] = null);

(statearr_18607_18631[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18602 === (4))){
var state_18601__$1 = state_18601;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18601__$1,(7),ch);
} else {
if((state_val_18602 === (6))){
var inst_18596 = (state_18601[(2)]);
var state_18601__$1 = state_18601;
var statearr_18608_18632 = state_18601__$1;
(statearr_18608_18632[(2)] = inst_18596);

(statearr_18608_18632[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18602 === (3))){
var inst_18598 = (state_18601[(2)]);
var inst_18599 = cljs.core.async.close_BANG_(out);
var state_18601__$1 = (function (){var statearr_18609 = state_18601;
(statearr_18609[(9)] = inst_18598);

return statearr_18609;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18601__$1,inst_18599);
} else {
if((state_val_18602 === (2))){
var inst_18578 = (state_18601[(8)]);
var inst_18580 = (inst_18578 < n);
var state_18601__$1 = state_18601;
if(cljs.core.truth_(inst_18580)){
var statearr_18610_18633 = state_18601__$1;
(statearr_18610_18633[(1)] = (4));

} else {
var statearr_18611_18634 = state_18601__$1;
(statearr_18611_18634[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18602 === (11))){
var inst_18578 = (state_18601[(8)]);
var inst_18588 = (state_18601[(2)]);
var inst_18589 = (inst_18578 + (1));
var inst_18578__$1 = inst_18589;
var state_18601__$1 = (function (){var statearr_18612 = state_18601;
(statearr_18612[(10)] = inst_18588);

(statearr_18612[(8)] = inst_18578__$1);

return statearr_18612;
})();
var statearr_18613_18635 = state_18601__$1;
(statearr_18613_18635[(2)] = null);

(statearr_18613_18635[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18602 === (9))){
var state_18601__$1 = state_18601;
var statearr_18614_18636 = state_18601__$1;
(statearr_18614_18636[(2)] = null);

(statearr_18614_18636[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18602 === (5))){
var state_18601__$1 = state_18601;
var statearr_18615_18637 = state_18601__$1;
(statearr_18615_18637[(2)] = null);

(statearr_18615_18637[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18602 === (10))){
var inst_18593 = (state_18601[(2)]);
var state_18601__$1 = state_18601;
var statearr_18616_18638 = state_18601__$1;
(statearr_18616_18638[(2)] = inst_18593);

(statearr_18616_18638[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18602 === (8))){
var inst_18583 = (state_18601[(7)]);
var state_18601__$1 = state_18601;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18601__$1,(11),out,inst_18583);
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
});})(c__16369__auto___18628,out))
;
return ((function (switch__16243__auto__,c__16369__auto___18628,out){
return (function() {
var cljs$core$async$state_machine__16244__auto__ = null;
var cljs$core$async$state_machine__16244__auto____0 = (function (){
var statearr_18620 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18620[(0)] = cljs$core$async$state_machine__16244__auto__);

(statearr_18620[(1)] = (1));

return statearr_18620;
});
var cljs$core$async$state_machine__16244__auto____1 = (function (state_18601){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_18601);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e18621){if((e18621 instanceof Object)){
var ex__16247__auto__ = e18621;
var statearr_18622_18639 = state_18601;
(statearr_18622_18639[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18601);

return cljs.core.cst$kw$recur;
} else {
throw e18621;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__18640 = state_18601;
state_18601 = G__18640;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$state_machine__16244__auto__ = function(state_18601){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16244__auto____1.call(this,state_18601);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16244__auto____0;
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16244__auto____1;
return cljs$core$async$state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___18628,out))
})();
var state__16371__auto__ = (function (){var statearr_18623 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_18623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___18628);

return statearr_18623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___18628,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18650 = (function (f,ch,meta18651){
this.f = f;
this.ch = ch;
this.meta18651 = meta18651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18652,meta18651__$1){
var self__ = this;
var _18652__$1 = this;
return (new cljs.core.async.t_cljs$core$async18650(self__.f,self__.ch,meta18651__$1));
});

cljs.core.async.t_cljs$core$async18650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18652){
var self__ = this;
var _18652__$1 = this;
return self__.meta18651;
});

cljs.core.async.t_cljs$core$async18650.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18650.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18650.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18650.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18650.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async18653 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18653 = (function (f,ch,meta18651,_,fn1,meta18654){
this.f = f;
this.ch = ch;
this.meta18651 = meta18651;
this._ = _;
this.fn1 = fn1;
this.meta18654 = meta18654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18655,meta18654__$1){
var self__ = this;
var _18655__$1 = this;
return (new cljs.core.async.t_cljs$core$async18653(self__.f,self__.ch,self__.meta18651,self__._,self__.fn1,meta18654__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18653.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18655){
var self__ = this;
var _18655__$1 = this;
return self__.meta18654;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18653.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18653.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18653.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18653.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18641_SHARP_){
var G__18656 = (((p1__18641_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__18641_SHARP_) : self__.f.call(null,p1__18641_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__18656) : f1.call(null,G__18656));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18653.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18651,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async18650], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta18654], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18653.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18653";

cljs.core.async.t_cljs$core$async18653.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.core.async/t_cljs$core$async18653");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async18653 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18653(f__$1,ch__$1,meta18651__$1,___$2,fn1__$1,meta18654){
return (new cljs.core.async.t_cljs$core$async18653(f__$1,ch__$1,meta18651__$1,___$2,fn1__$1,meta18654));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18653(self__.f,self__.ch,self__.meta18651,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7589__auto__ = ret;
if(cljs.core.truth_(and__7589__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__7589__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__18657 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__18657) : self__.f.call(null,G__18657));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18650.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18650.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18651], null);
});

cljs.core.async.t_cljs$core$async18650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18650";

cljs.core.async.t_cljs$core$async18650.cljs$lang$ctorPrWriter = (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.core.async/t_cljs$core$async18650");
});

cljs.core.async.__GT_t_cljs$core$async18650 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18650(f__$1,ch__$1,meta18651){
return (new cljs.core.async.t_cljs$core$async18650(f__$1,ch__$1,meta18651));
});

}

return (new cljs.core.async.t_cljs$core$async18650(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18661 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18661 = (function (f,ch,meta18662){
this.f = f;
this.ch = ch;
this.meta18662 = meta18662;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18663,meta18662__$1){
var self__ = this;
var _18663__$1 = this;
return (new cljs.core.async.t_cljs$core$async18661(self__.f,self__.ch,meta18662__$1));
});

cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18663){
var self__ = this;
var _18663__$1 = this;
return self__.meta18662;
});

cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18661.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async18661.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18662], null);
});

cljs.core.async.t_cljs$core$async18661.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18661.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18661";

cljs.core.async.t_cljs$core$async18661.cljs$lang$ctorPrWriter = (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.core.async/t_cljs$core$async18661");
});

cljs.core.async.__GT_t_cljs$core$async18661 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18661(f__$1,ch__$1,meta18662){
return (new cljs.core.async.t_cljs$core$async18661(f__$1,ch__$1,meta18662));
});

}

return (new cljs.core.async.t_cljs$core$async18661(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async18667 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18667 = (function (p,ch,meta18668){
this.p = p;
this.ch = ch;
this.meta18668 = meta18668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18669,meta18668__$1){
var self__ = this;
var _18669__$1 = this;
return (new cljs.core.async.t_cljs$core$async18667(self__.p,self__.ch,meta18668__$1));
});

cljs.core.async.t_cljs$core$async18667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18669){
var self__ = this;
var _18669__$1 = this;
return self__.meta18668;
});

cljs.core.async.t_cljs$core$async18667.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18667.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async18667.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async18667.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18667.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18667.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18667.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async18667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta18668], null);
});

cljs.core.async.t_cljs$core$async18667.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18667";

cljs.core.async.t_cljs$core$async18667.cljs$lang$ctorPrWriter = (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"cljs.core.async/t_cljs$core$async18667");
});

cljs.core.async.__GT_t_cljs$core$async18667 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async18667(p__$1,ch__$1,meta18668){
return (new cljs.core.async.t_cljs$core$async18667(p__$1,ch__$1,meta18668));
});

}

return (new cljs.core.async.t_cljs$core$async18667(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args18670 = [];
var len__8822__auto___18714 = arguments.length;
var i__8823__auto___18715 = (0);
while(true){
if((i__8823__auto___18715 < len__8822__auto___18714)){
args18670.push((arguments[i__8823__auto___18715]));

var G__18716 = (i__8823__auto___18715 + (1));
i__8823__auto___18715 = G__18716;
continue;
} else {
}
break;
}

var G__18672 = args18670.length;
switch (G__18672) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18670.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16369__auto___18718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___18718,out){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___18718,out){
return (function (state_18693){
var state_val_18694 = (state_18693[(1)]);
if((state_val_18694 === (7))){
var inst_18689 = (state_18693[(2)]);
var state_18693__$1 = state_18693;
var statearr_18695_18719 = state_18693__$1;
(statearr_18695_18719[(2)] = inst_18689);

(statearr_18695_18719[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18694 === (1))){
var state_18693__$1 = state_18693;
var statearr_18696_18720 = state_18693__$1;
(statearr_18696_18720[(2)] = null);

(statearr_18696_18720[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18694 === (4))){
var inst_18675 = (state_18693[(7)]);
var inst_18675__$1 = (state_18693[(2)]);
var inst_18676 = (inst_18675__$1 == null);
var state_18693__$1 = (function (){var statearr_18697 = state_18693;
(statearr_18697[(7)] = inst_18675__$1);

return statearr_18697;
})();
if(cljs.core.truth_(inst_18676)){
var statearr_18698_18721 = state_18693__$1;
(statearr_18698_18721[(1)] = (5));

} else {
var statearr_18699_18722 = state_18693__$1;
(statearr_18699_18722[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18694 === (6))){
var inst_18675 = (state_18693[(7)]);
var inst_18680 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18675) : p.call(null,inst_18675));
var state_18693__$1 = state_18693;
if(cljs.core.truth_(inst_18680)){
var statearr_18700_18723 = state_18693__$1;
(statearr_18700_18723[(1)] = (8));

} else {
var statearr_18701_18724 = state_18693__$1;
(statearr_18701_18724[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18694 === (3))){
var inst_18691 = (state_18693[(2)]);
var state_18693__$1 = state_18693;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18693__$1,inst_18691);
} else {
if((state_val_18694 === (2))){
var state_18693__$1 = state_18693;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18693__$1,(4),ch);
} else {
if((state_val_18694 === (11))){
var inst_18683 = (state_18693[(2)]);
var state_18693__$1 = state_18693;
var statearr_18702_18725 = state_18693__$1;
(statearr_18702_18725[(2)] = inst_18683);

(statearr_18702_18725[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18694 === (9))){
var state_18693__$1 = state_18693;
var statearr_18703_18726 = state_18693__$1;
(statearr_18703_18726[(2)] = null);

(statearr_18703_18726[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18694 === (5))){
var inst_18678 = cljs.core.async.close_BANG_(out);
var state_18693__$1 = state_18693;
var statearr_18704_18727 = state_18693__$1;
(statearr_18704_18727[(2)] = inst_18678);

(statearr_18704_18727[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18694 === (10))){
var inst_18686 = (state_18693[(2)]);
var state_18693__$1 = (function (){var statearr_18705 = state_18693;
(statearr_18705[(8)] = inst_18686);

return statearr_18705;
})();
var statearr_18706_18728 = state_18693__$1;
(statearr_18706_18728[(2)] = null);

(statearr_18706_18728[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18694 === (8))){
var inst_18675 = (state_18693[(7)]);
var state_18693__$1 = state_18693;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18693__$1,(11),out,inst_18675);
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
});})(c__16369__auto___18718,out))
;
return ((function (switch__16243__auto__,c__16369__auto___18718,out){
return (function() {
var cljs$core$async$state_machine__16244__auto__ = null;
var cljs$core$async$state_machine__16244__auto____0 = (function (){
var statearr_18710 = [null,null,null,null,null,null,null,null,null];
(statearr_18710[(0)] = cljs$core$async$state_machine__16244__auto__);

(statearr_18710[(1)] = (1));

return statearr_18710;
});
var cljs$core$async$state_machine__16244__auto____1 = (function (state_18693){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_18693);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e18711){if((e18711 instanceof Object)){
var ex__16247__auto__ = e18711;
var statearr_18712_18729 = state_18693;
(statearr_18712_18729[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18693);

return cljs.core.cst$kw$recur;
} else {
throw e18711;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__18730 = state_18693;
state_18693 = G__18730;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$state_machine__16244__auto__ = function(state_18693){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16244__auto____1.call(this,state_18693);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16244__auto____0;
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16244__auto____1;
return cljs$core$async$state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___18718,out))
})();
var state__16371__auto__ = (function (){var statearr_18713 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_18713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___18718);

return statearr_18713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___18718,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args18731 = [];
var len__8822__auto___18734 = arguments.length;
var i__8823__auto___18735 = (0);
while(true){
if((i__8823__auto___18735 < len__8822__auto___18734)){
args18731.push((arguments[i__8823__auto___18735]));

var G__18736 = (i__8823__auto___18735 + (1));
i__8823__auto___18735 = G__18736;
continue;
} else {
}
break;
}

var G__18733 = args18731.length;
switch (G__18733) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18731.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__){
return (function (state_18903){
var state_val_18904 = (state_18903[(1)]);
if((state_val_18904 === (7))){
var inst_18899 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18905_18946 = state_18903__$1;
(statearr_18905_18946[(2)] = inst_18899);

(statearr_18905_18946[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (20))){
var inst_18869 = (state_18903[(7)]);
var inst_18880 = (state_18903[(2)]);
var inst_18881 = cljs.core.next(inst_18869);
var inst_18855 = inst_18881;
var inst_18856 = null;
var inst_18857 = (0);
var inst_18858 = (0);
var state_18903__$1 = (function (){var statearr_18906 = state_18903;
(statearr_18906[(8)] = inst_18858);

(statearr_18906[(9)] = inst_18857);

(statearr_18906[(10)] = inst_18856);

(statearr_18906[(11)] = inst_18855);

(statearr_18906[(12)] = inst_18880);

return statearr_18906;
})();
var statearr_18907_18947 = state_18903__$1;
(statearr_18907_18947[(2)] = null);

(statearr_18907_18947[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (1))){
var state_18903__$1 = state_18903;
var statearr_18908_18948 = state_18903__$1;
(statearr_18908_18948[(2)] = null);

(statearr_18908_18948[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (4))){
var inst_18844 = (state_18903[(13)]);
var inst_18844__$1 = (state_18903[(2)]);
var inst_18845 = (inst_18844__$1 == null);
var state_18903__$1 = (function (){var statearr_18909 = state_18903;
(statearr_18909[(13)] = inst_18844__$1);

return statearr_18909;
})();
if(cljs.core.truth_(inst_18845)){
var statearr_18910_18949 = state_18903__$1;
(statearr_18910_18949[(1)] = (5));

} else {
var statearr_18911_18950 = state_18903__$1;
(statearr_18911_18950[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (15))){
var state_18903__$1 = state_18903;
var statearr_18915_18951 = state_18903__$1;
(statearr_18915_18951[(2)] = null);

(statearr_18915_18951[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (21))){
var state_18903__$1 = state_18903;
var statearr_18916_18952 = state_18903__$1;
(statearr_18916_18952[(2)] = null);

(statearr_18916_18952[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (13))){
var inst_18858 = (state_18903[(8)]);
var inst_18857 = (state_18903[(9)]);
var inst_18856 = (state_18903[(10)]);
var inst_18855 = (state_18903[(11)]);
var inst_18865 = (state_18903[(2)]);
var inst_18866 = (inst_18858 + (1));
var tmp18912 = inst_18857;
var tmp18913 = inst_18856;
var tmp18914 = inst_18855;
var inst_18855__$1 = tmp18914;
var inst_18856__$1 = tmp18913;
var inst_18857__$1 = tmp18912;
var inst_18858__$1 = inst_18866;
var state_18903__$1 = (function (){var statearr_18917 = state_18903;
(statearr_18917[(8)] = inst_18858__$1);

(statearr_18917[(9)] = inst_18857__$1);

(statearr_18917[(10)] = inst_18856__$1);

(statearr_18917[(14)] = inst_18865);

(statearr_18917[(11)] = inst_18855__$1);

return statearr_18917;
})();
var statearr_18918_18953 = state_18903__$1;
(statearr_18918_18953[(2)] = null);

(statearr_18918_18953[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (22))){
var state_18903__$1 = state_18903;
var statearr_18919_18954 = state_18903__$1;
(statearr_18919_18954[(2)] = null);

(statearr_18919_18954[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (6))){
var inst_18844 = (state_18903[(13)]);
var inst_18853 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18844) : f.call(null,inst_18844));
var inst_18854 = cljs.core.seq(inst_18853);
var inst_18855 = inst_18854;
var inst_18856 = null;
var inst_18857 = (0);
var inst_18858 = (0);
var state_18903__$1 = (function (){var statearr_18920 = state_18903;
(statearr_18920[(8)] = inst_18858);

(statearr_18920[(9)] = inst_18857);

(statearr_18920[(10)] = inst_18856);

(statearr_18920[(11)] = inst_18855);

return statearr_18920;
})();
var statearr_18921_18955 = state_18903__$1;
(statearr_18921_18955[(2)] = null);

(statearr_18921_18955[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (17))){
var inst_18869 = (state_18903[(7)]);
var inst_18873 = cljs.core.chunk_first(inst_18869);
var inst_18874 = cljs.core.chunk_rest(inst_18869);
var inst_18875 = cljs.core.count(inst_18873);
var inst_18855 = inst_18874;
var inst_18856 = inst_18873;
var inst_18857 = inst_18875;
var inst_18858 = (0);
var state_18903__$1 = (function (){var statearr_18922 = state_18903;
(statearr_18922[(8)] = inst_18858);

(statearr_18922[(9)] = inst_18857);

(statearr_18922[(10)] = inst_18856);

(statearr_18922[(11)] = inst_18855);

return statearr_18922;
})();
var statearr_18923_18956 = state_18903__$1;
(statearr_18923_18956[(2)] = null);

(statearr_18923_18956[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (3))){
var inst_18901 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18903__$1,inst_18901);
} else {
if((state_val_18904 === (12))){
var inst_18889 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18924_18957 = state_18903__$1;
(statearr_18924_18957[(2)] = inst_18889);

(statearr_18924_18957[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (2))){
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18903__$1,(4),in$);
} else {
if((state_val_18904 === (23))){
var inst_18897 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18925_18958 = state_18903__$1;
(statearr_18925_18958[(2)] = inst_18897);

(statearr_18925_18958[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (19))){
var inst_18884 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18926_18959 = state_18903__$1;
(statearr_18926_18959[(2)] = inst_18884);

(statearr_18926_18959[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (11))){
var inst_18855 = (state_18903[(11)]);
var inst_18869 = (state_18903[(7)]);
var inst_18869__$1 = cljs.core.seq(inst_18855);
var state_18903__$1 = (function (){var statearr_18927 = state_18903;
(statearr_18927[(7)] = inst_18869__$1);

return statearr_18927;
})();
if(inst_18869__$1){
var statearr_18928_18960 = state_18903__$1;
(statearr_18928_18960[(1)] = (14));

} else {
var statearr_18929_18961 = state_18903__$1;
(statearr_18929_18961[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (9))){
var inst_18891 = (state_18903[(2)]);
var inst_18892 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_18903__$1 = (function (){var statearr_18930 = state_18903;
(statearr_18930[(15)] = inst_18891);

return statearr_18930;
})();
if(cljs.core.truth_(inst_18892)){
var statearr_18931_18962 = state_18903__$1;
(statearr_18931_18962[(1)] = (21));

} else {
var statearr_18932_18963 = state_18903__$1;
(statearr_18932_18963[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (5))){
var inst_18847 = cljs.core.async.close_BANG_(out);
var state_18903__$1 = state_18903;
var statearr_18933_18964 = state_18903__$1;
(statearr_18933_18964[(2)] = inst_18847);

(statearr_18933_18964[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (14))){
var inst_18869 = (state_18903[(7)]);
var inst_18871 = cljs.core.chunked_seq_QMARK_(inst_18869);
var state_18903__$1 = state_18903;
if(inst_18871){
var statearr_18934_18965 = state_18903__$1;
(statearr_18934_18965[(1)] = (17));

} else {
var statearr_18935_18966 = state_18903__$1;
(statearr_18935_18966[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (16))){
var inst_18887 = (state_18903[(2)]);
var state_18903__$1 = state_18903;
var statearr_18936_18967 = state_18903__$1;
(statearr_18936_18967[(2)] = inst_18887);

(statearr_18936_18967[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_18904 === (10))){
var inst_18858 = (state_18903[(8)]);
var inst_18856 = (state_18903[(10)]);
var inst_18863 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_18856,inst_18858);
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18903__$1,(13),out,inst_18863);
} else {
if((state_val_18904 === (18))){
var inst_18869 = (state_18903[(7)]);
var inst_18878 = cljs.core.first(inst_18869);
var state_18903__$1 = state_18903;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18903__$1,(20),out,inst_18878);
} else {
if((state_val_18904 === (8))){
var inst_18858 = (state_18903[(8)]);
var inst_18857 = (state_18903[(9)]);
var inst_18860 = (inst_18858 < inst_18857);
var inst_18861 = inst_18860;
var state_18903__$1 = state_18903;
if(cljs.core.truth_(inst_18861)){
var statearr_18937_18968 = state_18903__$1;
(statearr_18937_18968[(1)] = (10));

} else {
var statearr_18938_18969 = state_18903__$1;
(statearr_18938_18969[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__16369__auto__))
;
return ((function (switch__16243__auto__,c__16369__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16244__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16244__auto____0 = (function (){
var statearr_18942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18942[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16244__auto__);

(statearr_18942[(1)] = (1));

return statearr_18942;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16244__auto____1 = (function (state_18903){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_18903);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e18943){if((e18943 instanceof Object)){
var ex__16247__auto__ = e18943;
var statearr_18944_18970 = state_18903;
(statearr_18944_18970[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_18903);

return cljs.core.cst$kw$recur;
} else {
throw e18943;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__18971 = state_18903;
state_18903 = G__18971;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16244__auto__ = function(state_18903){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16244__auto____1.call(this,state_18903);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16244__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16244__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__))
})();
var state__16371__auto__ = (function (){var statearr_18945 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_18945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_18945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__))
);

return c__16369__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args18972 = [];
var len__8822__auto___18975 = arguments.length;
var i__8823__auto___18976 = (0);
while(true){
if((i__8823__auto___18976 < len__8822__auto___18975)){
args18972.push((arguments[i__8823__auto___18976]));

var G__18977 = (i__8823__auto___18976 + (1));
i__8823__auto___18976 = G__18977;
continue;
} else {
}
break;
}

var G__18974 = args18972.length;
switch (G__18974) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18972.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args18979 = [];
var len__8822__auto___18982 = arguments.length;
var i__8823__auto___18983 = (0);
while(true){
if((i__8823__auto___18983 < len__8822__auto___18982)){
args18979.push((arguments[i__8823__auto___18983]));

var G__18984 = (i__8823__auto___18983 + (1));
i__8823__auto___18983 = G__18984;
continue;
} else {
}
break;
}

var G__18981 = args18979.length;
switch (G__18981) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18979.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args18986 = [];
var len__8822__auto___19037 = arguments.length;
var i__8823__auto___19038 = (0);
while(true){
if((i__8823__auto___19038 < len__8822__auto___19037)){
args18986.push((arguments[i__8823__auto___19038]));

var G__19039 = (i__8823__auto___19038 + (1));
i__8823__auto___19038 = G__19039;
continue;
} else {
}
break;
}

var G__18988 = args18986.length;
switch (G__18988) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18986.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16369__auto___19041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___19041,out){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___19041,out){
return (function (state_19012){
var state_val_19013 = (state_19012[(1)]);
if((state_val_19013 === (7))){
var inst_19007 = (state_19012[(2)]);
var state_19012__$1 = state_19012;
var statearr_19014_19042 = state_19012__$1;
(statearr_19014_19042[(2)] = inst_19007);

(statearr_19014_19042[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19013 === (1))){
var inst_18989 = null;
var state_19012__$1 = (function (){var statearr_19015 = state_19012;
(statearr_19015[(7)] = inst_18989);

return statearr_19015;
})();
var statearr_19016_19043 = state_19012__$1;
(statearr_19016_19043[(2)] = null);

(statearr_19016_19043[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19013 === (4))){
var inst_18992 = (state_19012[(8)]);
var inst_18992__$1 = (state_19012[(2)]);
var inst_18993 = (inst_18992__$1 == null);
var inst_18994 = cljs.core.not(inst_18993);
var state_19012__$1 = (function (){var statearr_19017 = state_19012;
(statearr_19017[(8)] = inst_18992__$1);

return statearr_19017;
})();
if(inst_18994){
var statearr_19018_19044 = state_19012__$1;
(statearr_19018_19044[(1)] = (5));

} else {
var statearr_19019_19045 = state_19012__$1;
(statearr_19019_19045[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19013 === (6))){
var state_19012__$1 = state_19012;
var statearr_19020_19046 = state_19012__$1;
(statearr_19020_19046[(2)] = null);

(statearr_19020_19046[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19013 === (3))){
var inst_19009 = (state_19012[(2)]);
var inst_19010 = cljs.core.async.close_BANG_(out);
var state_19012__$1 = (function (){var statearr_19021 = state_19012;
(statearr_19021[(9)] = inst_19009);

return statearr_19021;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19012__$1,inst_19010);
} else {
if((state_val_19013 === (2))){
var state_19012__$1 = state_19012;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19012__$1,(4),ch);
} else {
if((state_val_19013 === (11))){
var inst_18992 = (state_19012[(8)]);
var inst_19001 = (state_19012[(2)]);
var inst_18989 = inst_18992;
var state_19012__$1 = (function (){var statearr_19022 = state_19012;
(statearr_19022[(7)] = inst_18989);

(statearr_19022[(10)] = inst_19001);

return statearr_19022;
})();
var statearr_19023_19047 = state_19012__$1;
(statearr_19023_19047[(2)] = null);

(statearr_19023_19047[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19013 === (9))){
var inst_18992 = (state_19012[(8)]);
var state_19012__$1 = state_19012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19012__$1,(11),out,inst_18992);
} else {
if((state_val_19013 === (5))){
var inst_18989 = (state_19012[(7)]);
var inst_18992 = (state_19012[(8)]);
var inst_18996 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18992,inst_18989);
var state_19012__$1 = state_19012;
if(inst_18996){
var statearr_19025_19048 = state_19012__$1;
(statearr_19025_19048[(1)] = (8));

} else {
var statearr_19026_19049 = state_19012__$1;
(statearr_19026_19049[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19013 === (10))){
var inst_19004 = (state_19012[(2)]);
var state_19012__$1 = state_19012;
var statearr_19027_19050 = state_19012__$1;
(statearr_19027_19050[(2)] = inst_19004);

(statearr_19027_19050[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19013 === (8))){
var inst_18989 = (state_19012[(7)]);
var tmp19024 = inst_18989;
var inst_18989__$1 = tmp19024;
var state_19012__$1 = (function (){var statearr_19028 = state_19012;
(statearr_19028[(7)] = inst_18989__$1);

return statearr_19028;
})();
var statearr_19029_19051 = state_19012__$1;
(statearr_19029_19051[(2)] = null);

(statearr_19029_19051[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16369__auto___19041,out))
;
return ((function (switch__16243__auto__,c__16369__auto___19041,out){
return (function() {
var cljs$core$async$state_machine__16244__auto__ = null;
var cljs$core$async$state_machine__16244__auto____0 = (function (){
var statearr_19033 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19033[(0)] = cljs$core$async$state_machine__16244__auto__);

(statearr_19033[(1)] = (1));

return statearr_19033;
});
var cljs$core$async$state_machine__16244__auto____1 = (function (state_19012){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_19012);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e19034){if((e19034 instanceof Object)){
var ex__16247__auto__ = e19034;
var statearr_19035_19052 = state_19012;
(statearr_19035_19052[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19012);

return cljs.core.cst$kw$recur;
} else {
throw e19034;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__19053 = state_19012;
state_19012 = G__19053;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$state_machine__16244__auto__ = function(state_19012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16244__auto____1.call(this,state_19012);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16244__auto____0;
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16244__auto____1;
return cljs$core$async$state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___19041,out))
})();
var state__16371__auto__ = (function (){var statearr_19036 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_19036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___19041);

return statearr_19036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___19041,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19054 = [];
var len__8822__auto___19124 = arguments.length;
var i__8823__auto___19125 = (0);
while(true){
if((i__8823__auto___19125 < len__8822__auto___19124)){
args19054.push((arguments[i__8823__auto___19125]));

var G__19126 = (i__8823__auto___19125 + (1));
i__8823__auto___19125 = G__19126;
continue;
} else {
}
break;
}

var G__19056 = args19054.length;
switch (G__19056) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19054.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16369__auto___19128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___19128,out){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___19128,out){
return (function (state_19094){
var state_val_19095 = (state_19094[(1)]);
if((state_val_19095 === (7))){
var inst_19090 = (state_19094[(2)]);
var state_19094__$1 = state_19094;
var statearr_19096_19129 = state_19094__$1;
(statearr_19096_19129[(2)] = inst_19090);

(statearr_19096_19129[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19095 === (1))){
var inst_19057 = (new Array(n));
var inst_19058 = inst_19057;
var inst_19059 = (0);
var state_19094__$1 = (function (){var statearr_19097 = state_19094;
(statearr_19097[(7)] = inst_19058);

(statearr_19097[(8)] = inst_19059);

return statearr_19097;
})();
var statearr_19098_19130 = state_19094__$1;
(statearr_19098_19130[(2)] = null);

(statearr_19098_19130[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19095 === (4))){
var inst_19062 = (state_19094[(9)]);
var inst_19062__$1 = (state_19094[(2)]);
var inst_19063 = (inst_19062__$1 == null);
var inst_19064 = cljs.core.not(inst_19063);
var state_19094__$1 = (function (){var statearr_19099 = state_19094;
(statearr_19099[(9)] = inst_19062__$1);

return statearr_19099;
})();
if(inst_19064){
var statearr_19100_19131 = state_19094__$1;
(statearr_19100_19131[(1)] = (5));

} else {
var statearr_19101_19132 = state_19094__$1;
(statearr_19101_19132[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19095 === (15))){
var inst_19084 = (state_19094[(2)]);
var state_19094__$1 = state_19094;
var statearr_19102_19133 = state_19094__$1;
(statearr_19102_19133[(2)] = inst_19084);

(statearr_19102_19133[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19095 === (13))){
var state_19094__$1 = state_19094;
var statearr_19103_19134 = state_19094__$1;
(statearr_19103_19134[(2)] = null);

(statearr_19103_19134[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19095 === (6))){
var inst_19059 = (state_19094[(8)]);
var inst_19080 = (inst_19059 > (0));
var state_19094__$1 = state_19094;
if(cljs.core.truth_(inst_19080)){
var statearr_19104_19135 = state_19094__$1;
(statearr_19104_19135[(1)] = (12));

} else {
var statearr_19105_19136 = state_19094__$1;
(statearr_19105_19136[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19095 === (3))){
var inst_19092 = (state_19094[(2)]);
var state_19094__$1 = state_19094;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19094__$1,inst_19092);
} else {
if((state_val_19095 === (12))){
var inst_19058 = (state_19094[(7)]);
var inst_19082 = cljs.core.vec(inst_19058);
var state_19094__$1 = state_19094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19094__$1,(15),out,inst_19082);
} else {
if((state_val_19095 === (2))){
var state_19094__$1 = state_19094;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19094__$1,(4),ch);
} else {
if((state_val_19095 === (11))){
var inst_19074 = (state_19094[(2)]);
var inst_19075 = (new Array(n));
var inst_19058 = inst_19075;
var inst_19059 = (0);
var state_19094__$1 = (function (){var statearr_19106 = state_19094;
(statearr_19106[(7)] = inst_19058);

(statearr_19106[(8)] = inst_19059);

(statearr_19106[(10)] = inst_19074);

return statearr_19106;
})();
var statearr_19107_19137 = state_19094__$1;
(statearr_19107_19137[(2)] = null);

(statearr_19107_19137[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19095 === (9))){
var inst_19058 = (state_19094[(7)]);
var inst_19072 = cljs.core.vec(inst_19058);
var state_19094__$1 = state_19094;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19094__$1,(11),out,inst_19072);
} else {
if((state_val_19095 === (5))){
var inst_19058 = (state_19094[(7)]);
var inst_19062 = (state_19094[(9)]);
var inst_19067 = (state_19094[(11)]);
var inst_19059 = (state_19094[(8)]);
var inst_19066 = (inst_19058[inst_19059] = inst_19062);
var inst_19067__$1 = (inst_19059 + (1));
var inst_19068 = (inst_19067__$1 < n);
var state_19094__$1 = (function (){var statearr_19108 = state_19094;
(statearr_19108[(12)] = inst_19066);

(statearr_19108[(11)] = inst_19067__$1);

return statearr_19108;
})();
if(cljs.core.truth_(inst_19068)){
var statearr_19109_19138 = state_19094__$1;
(statearr_19109_19138[(1)] = (8));

} else {
var statearr_19110_19139 = state_19094__$1;
(statearr_19110_19139[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19095 === (14))){
var inst_19087 = (state_19094[(2)]);
var inst_19088 = cljs.core.async.close_BANG_(out);
var state_19094__$1 = (function (){var statearr_19112 = state_19094;
(statearr_19112[(13)] = inst_19087);

return statearr_19112;
})();
var statearr_19113_19140 = state_19094__$1;
(statearr_19113_19140[(2)] = inst_19088);

(statearr_19113_19140[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19095 === (10))){
var inst_19078 = (state_19094[(2)]);
var state_19094__$1 = state_19094;
var statearr_19114_19141 = state_19094__$1;
(statearr_19114_19141[(2)] = inst_19078);

(statearr_19114_19141[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19095 === (8))){
var inst_19058 = (state_19094[(7)]);
var inst_19067 = (state_19094[(11)]);
var tmp19111 = inst_19058;
var inst_19058__$1 = tmp19111;
var inst_19059 = inst_19067;
var state_19094__$1 = (function (){var statearr_19115 = state_19094;
(statearr_19115[(7)] = inst_19058__$1);

(statearr_19115[(8)] = inst_19059);

return statearr_19115;
})();
var statearr_19116_19142 = state_19094__$1;
(statearr_19116_19142[(2)] = null);

(statearr_19116_19142[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16369__auto___19128,out))
;
return ((function (switch__16243__auto__,c__16369__auto___19128,out){
return (function() {
var cljs$core$async$state_machine__16244__auto__ = null;
var cljs$core$async$state_machine__16244__auto____0 = (function (){
var statearr_19120 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19120[(0)] = cljs$core$async$state_machine__16244__auto__);

(statearr_19120[(1)] = (1));

return statearr_19120;
});
var cljs$core$async$state_machine__16244__auto____1 = (function (state_19094){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_19094);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e19121){if((e19121 instanceof Object)){
var ex__16247__auto__ = e19121;
var statearr_19122_19143 = state_19094;
(statearr_19122_19143[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19094);

return cljs.core.cst$kw$recur;
} else {
throw e19121;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__19144 = state_19094;
state_19094 = G__19144;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$state_machine__16244__auto__ = function(state_19094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16244__auto____1.call(this,state_19094);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16244__auto____0;
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16244__auto____1;
return cljs$core$async$state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___19128,out))
})();
var state__16371__auto__ = (function (){var statearr_19123 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_19123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___19128);

return statearr_19123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___19128,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args19145 = [];
var len__8822__auto___19219 = arguments.length;
var i__8823__auto___19220 = (0);
while(true){
if((i__8823__auto___19220 < len__8822__auto___19219)){
args19145.push((arguments[i__8823__auto___19220]));

var G__19221 = (i__8823__auto___19220 + (1));
i__8823__auto___19220 = G__19221;
continue;
} else {
}
break;
}

var G__19147 = args19145.length;
switch (G__19147) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19145.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__16369__auto___19223 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___19223,out){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___19223,out){
return (function (state_19189){
var state_val_19190 = (state_19189[(1)]);
if((state_val_19190 === (7))){
var inst_19185 = (state_19189[(2)]);
var state_19189__$1 = state_19189;
var statearr_19191_19224 = state_19189__$1;
(statearr_19191_19224[(2)] = inst_19185);

(statearr_19191_19224[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (1))){
var inst_19148 = [];
var inst_19149 = inst_19148;
var inst_19150 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_19189__$1 = (function (){var statearr_19192 = state_19189;
(statearr_19192[(7)] = inst_19150);

(statearr_19192[(8)] = inst_19149);

return statearr_19192;
})();
var statearr_19193_19225 = state_19189__$1;
(statearr_19193_19225[(2)] = null);

(statearr_19193_19225[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (4))){
var inst_19153 = (state_19189[(9)]);
var inst_19153__$1 = (state_19189[(2)]);
var inst_19154 = (inst_19153__$1 == null);
var inst_19155 = cljs.core.not(inst_19154);
var state_19189__$1 = (function (){var statearr_19194 = state_19189;
(statearr_19194[(9)] = inst_19153__$1);

return statearr_19194;
})();
if(inst_19155){
var statearr_19195_19226 = state_19189__$1;
(statearr_19195_19226[(1)] = (5));

} else {
var statearr_19196_19227 = state_19189__$1;
(statearr_19196_19227[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (15))){
var inst_19179 = (state_19189[(2)]);
var state_19189__$1 = state_19189;
var statearr_19197_19228 = state_19189__$1;
(statearr_19197_19228[(2)] = inst_19179);

(statearr_19197_19228[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (13))){
var state_19189__$1 = state_19189;
var statearr_19198_19229 = state_19189__$1;
(statearr_19198_19229[(2)] = null);

(statearr_19198_19229[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (6))){
var inst_19149 = (state_19189[(8)]);
var inst_19174 = inst_19149.length;
var inst_19175 = (inst_19174 > (0));
var state_19189__$1 = state_19189;
if(cljs.core.truth_(inst_19175)){
var statearr_19199_19230 = state_19189__$1;
(statearr_19199_19230[(1)] = (12));

} else {
var statearr_19200_19231 = state_19189__$1;
(statearr_19200_19231[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (3))){
var inst_19187 = (state_19189[(2)]);
var state_19189__$1 = state_19189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19189__$1,inst_19187);
} else {
if((state_val_19190 === (12))){
var inst_19149 = (state_19189[(8)]);
var inst_19177 = cljs.core.vec(inst_19149);
var state_19189__$1 = state_19189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19189__$1,(15),out,inst_19177);
} else {
if((state_val_19190 === (2))){
var state_19189__$1 = state_19189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19189__$1,(4),ch);
} else {
if((state_val_19190 === (11))){
var inst_19153 = (state_19189[(9)]);
var inst_19157 = (state_19189[(10)]);
var inst_19167 = (state_19189[(2)]);
var inst_19168 = [];
var inst_19169 = inst_19168.push(inst_19153);
var inst_19149 = inst_19168;
var inst_19150 = inst_19157;
var state_19189__$1 = (function (){var statearr_19201 = state_19189;
(statearr_19201[(7)] = inst_19150);

(statearr_19201[(11)] = inst_19167);

(statearr_19201[(8)] = inst_19149);

(statearr_19201[(12)] = inst_19169);

return statearr_19201;
})();
var statearr_19202_19232 = state_19189__$1;
(statearr_19202_19232[(2)] = null);

(statearr_19202_19232[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (9))){
var inst_19149 = (state_19189[(8)]);
var inst_19165 = cljs.core.vec(inst_19149);
var state_19189__$1 = state_19189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19189__$1,(11),out,inst_19165);
} else {
if((state_val_19190 === (5))){
var inst_19153 = (state_19189[(9)]);
var inst_19150 = (state_19189[(7)]);
var inst_19157 = (state_19189[(10)]);
var inst_19157__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19153) : f.call(null,inst_19153));
var inst_19158 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19157__$1,inst_19150);
var inst_19159 = cljs.core.keyword_identical_QMARK_(inst_19150,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_19160 = (inst_19158) || (inst_19159);
var state_19189__$1 = (function (){var statearr_19203 = state_19189;
(statearr_19203[(10)] = inst_19157__$1);

return statearr_19203;
})();
if(cljs.core.truth_(inst_19160)){
var statearr_19204_19233 = state_19189__$1;
(statearr_19204_19233[(1)] = (8));

} else {
var statearr_19205_19234 = state_19189__$1;
(statearr_19205_19234[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (14))){
var inst_19182 = (state_19189[(2)]);
var inst_19183 = cljs.core.async.close_BANG_(out);
var state_19189__$1 = (function (){var statearr_19207 = state_19189;
(statearr_19207[(13)] = inst_19182);

return statearr_19207;
})();
var statearr_19208_19235 = state_19189__$1;
(statearr_19208_19235[(2)] = inst_19183);

(statearr_19208_19235[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (10))){
var inst_19172 = (state_19189[(2)]);
var state_19189__$1 = state_19189;
var statearr_19209_19236 = state_19189__$1;
(statearr_19209_19236[(2)] = inst_19172);

(statearr_19209_19236[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19190 === (8))){
var inst_19153 = (state_19189[(9)]);
var inst_19157 = (state_19189[(10)]);
var inst_19149 = (state_19189[(8)]);
var inst_19162 = inst_19149.push(inst_19153);
var tmp19206 = inst_19149;
var inst_19149__$1 = tmp19206;
var inst_19150 = inst_19157;
var state_19189__$1 = (function (){var statearr_19210 = state_19189;
(statearr_19210[(14)] = inst_19162);

(statearr_19210[(7)] = inst_19150);

(statearr_19210[(8)] = inst_19149__$1);

return statearr_19210;
})();
var statearr_19211_19237 = state_19189__$1;
(statearr_19211_19237[(2)] = null);

(statearr_19211_19237[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__16369__auto___19223,out))
;
return ((function (switch__16243__auto__,c__16369__auto___19223,out){
return (function() {
var cljs$core$async$state_machine__16244__auto__ = null;
var cljs$core$async$state_machine__16244__auto____0 = (function (){
var statearr_19215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19215[(0)] = cljs$core$async$state_machine__16244__auto__);

(statearr_19215[(1)] = (1));

return statearr_19215;
});
var cljs$core$async$state_machine__16244__auto____1 = (function (state_19189){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_19189);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e19216){if((e19216 instanceof Object)){
var ex__16247__auto__ = e19216;
var statearr_19217_19238 = state_19189;
(statearr_19217_19238[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19189);

return cljs.core.cst$kw$recur;
} else {
throw e19216;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__19239 = state_19189;
state_19189 = G__19239;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
cljs$core$async$state_machine__16244__auto__ = function(state_19189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16244__auto____1.call(this,state_19189);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16244__auto____0;
cljs$core$async$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16244__auto____1;
return cljs$core$async$state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___19223,out))
})();
var state__16371__auto__ = (function (){var statearr_19218 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_19218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___19223);

return statearr_19218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___19223,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

