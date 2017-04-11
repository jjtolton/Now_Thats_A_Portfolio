// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args9400 = [];
var len__7484__auto___9406 = arguments.length;
var i__7485__auto___9407 = (0);
while(true){
if((i__7485__auto___9407 < len__7484__auto___9406)){
args9400.push((arguments[i__7485__auto___9407]));

var G__9408 = (i__7485__auto___9407 + (1));
i__7485__auto___9407 = G__9408;
continue;
} else {
}
break;
}

var G__9402 = args9400.length;
switch (G__9402) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9400.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async9403 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9403 = (function (f,blockable,meta9404){
this.f = f;
this.blockable = blockable;
this.meta9404 = meta9404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9405,meta9404__$1){
var self__ = this;
var _9405__$1 = this;
return (new cljs.core.async.t_cljs$core$async9403(self__.f,self__.blockable,meta9404__$1));
});

cljs.core.async.t_cljs$core$async9403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9405){
var self__ = this;
var _9405__$1 = this;
return self__.meta9404;
});

cljs.core.async.t_cljs$core$async9403.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9403.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9403.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9403.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9404","meta9404",1890855020,null)], null);
});

cljs.core.async.t_cljs$core$async9403.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9403.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9403";

cljs.core.async.t_cljs$core$async9403.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async9403");
});

cljs.core.async.__GT_t_cljs$core$async9403 = (function cljs$core$async$__GT_t_cljs$core$async9403(f__$1,blockable__$1,meta9404){
return (new cljs.core.async.t_cljs$core$async9403(f__$1,blockable__$1,meta9404));
});

}

return (new cljs.core.async.t_cljs$core$async9403(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args9412 = [];
var len__7484__auto___9415 = arguments.length;
var i__7485__auto___9416 = (0);
while(true){
if((i__7485__auto___9416 < len__7484__auto___9415)){
args9412.push((arguments[i__7485__auto___9416]));

var G__9417 = (i__7485__auto___9416 + (1));
i__7485__auto___9416 = G__9417;
continue;
} else {
}
break;
}

var G__9414 = args9412.length;
switch (G__9414) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9412.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args9419 = [];
var len__7484__auto___9422 = arguments.length;
var i__7485__auto___9423 = (0);
while(true){
if((i__7485__auto___9423 < len__7484__auto___9422)){
args9419.push((arguments[i__7485__auto___9423]));

var G__9424 = (i__7485__auto___9423 + (1));
i__7485__auto___9423 = G__9424;
continue;
} else {
}
break;
}

var G__9421 = args9419.length;
switch (G__9421) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9419.length)].join('')));

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
var args9426 = [];
var len__7484__auto___9429 = arguments.length;
var i__7485__auto___9430 = (0);
while(true){
if((i__7485__auto___9430 < len__7484__auto___9429)){
args9426.push((arguments[i__7485__auto___9430]));

var G__9431 = (i__7485__auto___9430 + (1));
i__7485__auto___9430 = G__9431;
continue;
} else {
}
break;
}

var G__9428 = args9426.length;
switch (G__9428) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9426.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9433 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9433);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9433,ret){
return (function (){
return fn1.call(null,val_9433);
});})(val_9433,ret))
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
var args9434 = [];
var len__7484__auto___9437 = arguments.length;
var i__7485__auto___9438 = (0);
while(true){
if((i__7485__auto___9438 < len__7484__auto___9437)){
args9434.push((arguments[i__7485__auto___9438]));

var G__9439 = (i__7485__auto___9438 + (1));
i__7485__auto___9438 = G__9439;
continue;
} else {
}
break;
}

var G__9436 = args9434.length;
switch (G__9436) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9434.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__7324__auto___9441 = n;
var x_9442 = (0);
while(true){
if((x_9442 < n__7324__auto___9441)){
(a[x_9442] = (0));

var G__9443 = (x_9442 + (1));
x_9442 = G__9443;
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

var G__9444 = (i + (1));
i = G__9444;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9448 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9448 = (function (alt_flag,flag,meta9449){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9449 = meta9449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9450,meta9449__$1){
var self__ = this;
var _9450__$1 = this;
return (new cljs.core.async.t_cljs$core$async9448(self__.alt_flag,self__.flag,meta9449__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9450){
var self__ = this;
var _9450__$1 = this;
return self__.meta9449;
});})(flag))
;

cljs.core.async.t_cljs$core$async9448.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9448.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9448.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9448.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9448.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9449","meta9449",-145929560,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9448.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9448.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9448";

cljs.core.async.t_cljs$core$async9448.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async9448");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9448 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9448(alt_flag__$1,flag__$1,meta9449){
return (new cljs.core.async.t_cljs$core$async9448(alt_flag__$1,flag__$1,meta9449));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9448(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9454 = (function (alt_handler,flag,cb,meta9455){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9455 = meta9455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9456,meta9455__$1){
var self__ = this;
var _9456__$1 = this;
return (new cljs.core.async.t_cljs$core$async9454(self__.alt_handler,self__.flag,self__.cb,meta9455__$1));
});

cljs.core.async.t_cljs$core$async9454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9456){
var self__ = this;
var _9456__$1 = this;
return self__.meta9455;
});

cljs.core.async.t_cljs$core$async9454.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9454.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9454.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9455","meta9455",335432550,null)], null);
});

cljs.core.async.t_cljs$core$async9454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9454";

cljs.core.async.t_cljs$core$async9454.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async9454");
});

cljs.core.async.__GT_t_cljs$core$async9454 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9454(alt_handler__$1,flag__$1,cb__$1,meta9455){
return (new cljs.core.async.t_cljs$core$async9454(alt_handler__$1,flag__$1,cb__$1,meta9455));
});

}

return (new cljs.core.async.t_cljs$core$async9454(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__9457_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9457_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9458_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9458_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6409__auto__ = wport;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9459 = (i + (1));
i = G__9459;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6409__auto__ = ret;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__6397__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6397__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__7491__auto__ = [];
var len__7484__auto___9465 = arguments.length;
var i__7485__auto___9466 = (0);
while(true){
if((i__7485__auto___9466 < len__7484__auto___9465)){
args__7491__auto__.push((arguments[i__7485__auto___9466]));

var G__9467 = (i__7485__auto___9466 + (1));
i__7485__auto___9466 = G__9467;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9462){
var map__9463 = p__9462;
var map__9463__$1 = ((((!((map__9463 == null)))?((((map__9463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9463):map__9463);
var opts = map__9463__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9460){
var G__9461 = cljs.core.first.call(null,seq9460);
var seq9460__$1 = cljs.core.next.call(null,seq9460);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9461,seq9460__$1);
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
var args9468 = [];
var len__7484__auto___9518 = arguments.length;
var i__7485__auto___9519 = (0);
while(true){
if((i__7485__auto___9519 < len__7484__auto___9518)){
args9468.push((arguments[i__7485__auto___9519]));

var G__9520 = (i__7485__auto___9519 + (1));
i__7485__auto___9519 = G__9520;
continue;
} else {
}
break;
}

var G__9470 = args9468.length;
switch (G__9470) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9468.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9355__auto___9522 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___9522){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___9522){
return (function (state_9494){
var state_val_9495 = (state_9494[(1)]);
if((state_val_9495 === (7))){
var inst_9490 = (state_9494[(2)]);
var state_9494__$1 = state_9494;
var statearr_9496_9523 = state_9494__$1;
(statearr_9496_9523[(2)] = inst_9490);

(statearr_9496_9523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (1))){
var state_9494__$1 = state_9494;
var statearr_9497_9524 = state_9494__$1;
(statearr_9497_9524[(2)] = null);

(statearr_9497_9524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (4))){
var inst_9473 = (state_9494[(7)]);
var inst_9473__$1 = (state_9494[(2)]);
var inst_9474 = (inst_9473__$1 == null);
var state_9494__$1 = (function (){var statearr_9498 = state_9494;
(statearr_9498[(7)] = inst_9473__$1);

return statearr_9498;
})();
if(cljs.core.truth_(inst_9474)){
var statearr_9499_9525 = state_9494__$1;
(statearr_9499_9525[(1)] = (5));

} else {
var statearr_9500_9526 = state_9494__$1;
(statearr_9500_9526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (13))){
var state_9494__$1 = state_9494;
var statearr_9501_9527 = state_9494__$1;
(statearr_9501_9527[(2)] = null);

(statearr_9501_9527[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (6))){
var inst_9473 = (state_9494[(7)]);
var state_9494__$1 = state_9494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9494__$1,(11),to,inst_9473);
} else {
if((state_val_9495 === (3))){
var inst_9492 = (state_9494[(2)]);
var state_9494__$1 = state_9494;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9494__$1,inst_9492);
} else {
if((state_val_9495 === (12))){
var state_9494__$1 = state_9494;
var statearr_9502_9528 = state_9494__$1;
(statearr_9502_9528[(2)] = null);

(statearr_9502_9528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (2))){
var state_9494__$1 = state_9494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9494__$1,(4),from);
} else {
if((state_val_9495 === (11))){
var inst_9483 = (state_9494[(2)]);
var state_9494__$1 = state_9494;
if(cljs.core.truth_(inst_9483)){
var statearr_9503_9529 = state_9494__$1;
(statearr_9503_9529[(1)] = (12));

} else {
var statearr_9504_9530 = state_9494__$1;
(statearr_9504_9530[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (9))){
var state_9494__$1 = state_9494;
var statearr_9505_9531 = state_9494__$1;
(statearr_9505_9531[(2)] = null);

(statearr_9505_9531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (5))){
var state_9494__$1 = state_9494;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9506_9532 = state_9494__$1;
(statearr_9506_9532[(1)] = (8));

} else {
var statearr_9507_9533 = state_9494__$1;
(statearr_9507_9533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (14))){
var inst_9488 = (state_9494[(2)]);
var state_9494__$1 = state_9494;
var statearr_9508_9534 = state_9494__$1;
(statearr_9508_9534[(2)] = inst_9488);

(statearr_9508_9534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (10))){
var inst_9480 = (state_9494[(2)]);
var state_9494__$1 = state_9494;
var statearr_9509_9535 = state_9494__$1;
(statearr_9509_9535[(2)] = inst_9480);

(statearr_9509_9535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9495 === (8))){
var inst_9477 = cljs.core.async.close_BANG_.call(null,to);
var state_9494__$1 = state_9494;
var statearr_9510_9536 = state_9494__$1;
(statearr_9510_9536[(2)] = inst_9477);

(statearr_9510_9536[(1)] = (10));


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
});})(c__9355__auto___9522))
;
return ((function (switch__9243__auto__,c__9355__auto___9522){
return (function() {
var cljs$core$async$state_machine__9244__auto__ = null;
var cljs$core$async$state_machine__9244__auto____0 = (function (){
var statearr_9514 = [null,null,null,null,null,null,null,null];
(statearr_9514[(0)] = cljs$core$async$state_machine__9244__auto__);

(statearr_9514[(1)] = (1));

return statearr_9514;
});
var cljs$core$async$state_machine__9244__auto____1 = (function (state_9494){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_9494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e9515){if((e9515 instanceof Object)){
var ex__9247__auto__ = e9515;
var statearr_9516_9537 = state_9494;
(statearr_9516_9537[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9538 = state_9494;
state_9494 = G__9538;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$state_machine__9244__auto__ = function(state_9494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9244__auto____1.call(this,state_9494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9244__auto____0;
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9244__auto____1;
return cljs$core$async$state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___9522))
})();
var state__9357__auto__ = (function (){var statearr_9517 = f__9356__auto__.call(null);
(statearr_9517[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___9522);

return statearr_9517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___9522))
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
return (function (p__9726){
var vec__9727 = p__9726;
var v = cljs.core.nth.call(null,vec__9727,(0),null);
var p = cljs.core.nth.call(null,vec__9727,(1),null);
var job = vec__9727;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9355__auto___9913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___9913,res,vec__9727,v,p,job,jobs,results){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___9913,res,vec__9727,v,p,job,jobs,results){
return (function (state_9734){
var state_val_9735 = (state_9734[(1)]);
if((state_val_9735 === (1))){
var state_9734__$1 = state_9734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9734__$1,(2),res,v);
} else {
if((state_val_9735 === (2))){
var inst_9731 = (state_9734[(2)]);
var inst_9732 = cljs.core.async.close_BANG_.call(null,res);
var state_9734__$1 = (function (){var statearr_9736 = state_9734;
(statearr_9736[(7)] = inst_9731);

return statearr_9736;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9734__$1,inst_9732);
} else {
return null;
}
}
});})(c__9355__auto___9913,res,vec__9727,v,p,job,jobs,results))
;
return ((function (switch__9243__auto__,c__9355__auto___9913,res,vec__9727,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____0 = (function (){
var statearr_9740 = [null,null,null,null,null,null,null,null];
(statearr_9740[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__);

(statearr_9740[(1)] = (1));

return statearr_9740;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____1 = (function (state_9734){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_9734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e9741){if((e9741 instanceof Object)){
var ex__9247__auto__ = e9741;
var statearr_9742_9914 = state_9734;
(statearr_9742_9914[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9915 = state_9734;
state_9734 = G__9915;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__ = function(state_9734){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____1.call(this,state_9734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___9913,res,vec__9727,v,p,job,jobs,results))
})();
var state__9357__auto__ = (function (){var statearr_9743 = f__9356__auto__.call(null);
(statearr_9743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___9913);

return statearr_9743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___9913,res,vec__9727,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9744){
var vec__9745 = p__9744;
var v = cljs.core.nth.call(null,vec__9745,(0),null);
var p = cljs.core.nth.call(null,vec__9745,(1),null);
var job = vec__9745;
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
var n__7324__auto___9916 = n;
var __9917 = (0);
while(true){
if((__9917 < n__7324__auto___9916)){
var G__9748_9918 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9748_9918) {
case "compute":
var c__9355__auto___9920 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9917,c__9355__auto___9920,G__9748_9918,n__7324__auto___9916,jobs,results,process,async){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (__9917,c__9355__auto___9920,G__9748_9918,n__7324__auto___9916,jobs,results,process,async){
return (function (state_9761){
var state_val_9762 = (state_9761[(1)]);
if((state_val_9762 === (1))){
var state_9761__$1 = state_9761;
var statearr_9763_9921 = state_9761__$1;
(statearr_9763_9921[(2)] = null);

(statearr_9763_9921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9762 === (2))){
var state_9761__$1 = state_9761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9761__$1,(4),jobs);
} else {
if((state_val_9762 === (3))){
var inst_9759 = (state_9761[(2)]);
var state_9761__$1 = state_9761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9761__$1,inst_9759);
} else {
if((state_val_9762 === (4))){
var inst_9751 = (state_9761[(2)]);
var inst_9752 = process.call(null,inst_9751);
var state_9761__$1 = state_9761;
if(cljs.core.truth_(inst_9752)){
var statearr_9764_9922 = state_9761__$1;
(statearr_9764_9922[(1)] = (5));

} else {
var statearr_9765_9923 = state_9761__$1;
(statearr_9765_9923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9762 === (5))){
var state_9761__$1 = state_9761;
var statearr_9766_9924 = state_9761__$1;
(statearr_9766_9924[(2)] = null);

(statearr_9766_9924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9762 === (6))){
var state_9761__$1 = state_9761;
var statearr_9767_9925 = state_9761__$1;
(statearr_9767_9925[(2)] = null);

(statearr_9767_9925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9762 === (7))){
var inst_9757 = (state_9761[(2)]);
var state_9761__$1 = state_9761;
var statearr_9768_9926 = state_9761__$1;
(statearr_9768_9926[(2)] = inst_9757);

(statearr_9768_9926[(1)] = (3));


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
});})(__9917,c__9355__auto___9920,G__9748_9918,n__7324__auto___9916,jobs,results,process,async))
;
return ((function (__9917,switch__9243__auto__,c__9355__auto___9920,G__9748_9918,n__7324__auto___9916,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____0 = (function (){
var statearr_9772 = [null,null,null,null,null,null,null];
(statearr_9772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__);

(statearr_9772[(1)] = (1));

return statearr_9772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____1 = (function (state_9761){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_9761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e9773){if((e9773 instanceof Object)){
var ex__9247__auto__ = e9773;
var statearr_9774_9927 = state_9761;
(statearr_9774_9927[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9928 = state_9761;
state_9761 = G__9928;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__ = function(state_9761){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____1.call(this,state_9761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__;
})()
;})(__9917,switch__9243__auto__,c__9355__auto___9920,G__9748_9918,n__7324__auto___9916,jobs,results,process,async))
})();
var state__9357__auto__ = (function (){var statearr_9775 = f__9356__auto__.call(null);
(statearr_9775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___9920);

return statearr_9775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(__9917,c__9355__auto___9920,G__9748_9918,n__7324__auto___9916,jobs,results,process,async))
);


break;
case "async":
var c__9355__auto___9929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9917,c__9355__auto___9929,G__9748_9918,n__7324__auto___9916,jobs,results,process,async){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (__9917,c__9355__auto___9929,G__9748_9918,n__7324__auto___9916,jobs,results,process,async){
return (function (state_9788){
var state_val_9789 = (state_9788[(1)]);
if((state_val_9789 === (1))){
var state_9788__$1 = state_9788;
var statearr_9790_9930 = state_9788__$1;
(statearr_9790_9930[(2)] = null);

(statearr_9790_9930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9789 === (2))){
var state_9788__$1 = state_9788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9788__$1,(4),jobs);
} else {
if((state_val_9789 === (3))){
var inst_9786 = (state_9788[(2)]);
var state_9788__$1 = state_9788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9788__$1,inst_9786);
} else {
if((state_val_9789 === (4))){
var inst_9778 = (state_9788[(2)]);
var inst_9779 = async.call(null,inst_9778);
var state_9788__$1 = state_9788;
if(cljs.core.truth_(inst_9779)){
var statearr_9791_9931 = state_9788__$1;
(statearr_9791_9931[(1)] = (5));

} else {
var statearr_9792_9932 = state_9788__$1;
(statearr_9792_9932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9789 === (5))){
var state_9788__$1 = state_9788;
var statearr_9793_9933 = state_9788__$1;
(statearr_9793_9933[(2)] = null);

(statearr_9793_9933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9789 === (6))){
var state_9788__$1 = state_9788;
var statearr_9794_9934 = state_9788__$1;
(statearr_9794_9934[(2)] = null);

(statearr_9794_9934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9789 === (7))){
var inst_9784 = (state_9788[(2)]);
var state_9788__$1 = state_9788;
var statearr_9795_9935 = state_9788__$1;
(statearr_9795_9935[(2)] = inst_9784);

(statearr_9795_9935[(1)] = (3));


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
});})(__9917,c__9355__auto___9929,G__9748_9918,n__7324__auto___9916,jobs,results,process,async))
;
return ((function (__9917,switch__9243__auto__,c__9355__auto___9929,G__9748_9918,n__7324__auto___9916,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____0 = (function (){
var statearr_9799 = [null,null,null,null,null,null,null];
(statearr_9799[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__);

(statearr_9799[(1)] = (1));

return statearr_9799;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____1 = (function (state_9788){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_9788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e9800){if((e9800 instanceof Object)){
var ex__9247__auto__ = e9800;
var statearr_9801_9936 = state_9788;
(statearr_9801_9936[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9937 = state_9788;
state_9788 = G__9937;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__ = function(state_9788){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____1.call(this,state_9788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__;
})()
;})(__9917,switch__9243__auto__,c__9355__auto___9929,G__9748_9918,n__7324__auto___9916,jobs,results,process,async))
})();
var state__9357__auto__ = (function (){var statearr_9802 = f__9356__auto__.call(null);
(statearr_9802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___9929);

return statearr_9802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(__9917,c__9355__auto___9929,G__9748_9918,n__7324__auto___9916,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9938 = (__9917 + (1));
__9917 = G__9938;
continue;
} else {
}
break;
}

var c__9355__auto___9939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___9939,jobs,results,process,async){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___9939,jobs,results,process,async){
return (function (state_9824){
var state_val_9825 = (state_9824[(1)]);
if((state_val_9825 === (1))){
var state_9824__$1 = state_9824;
var statearr_9826_9940 = state_9824__$1;
(statearr_9826_9940[(2)] = null);

(statearr_9826_9940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9825 === (2))){
var state_9824__$1 = state_9824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9824__$1,(4),from);
} else {
if((state_val_9825 === (3))){
var inst_9822 = (state_9824[(2)]);
var state_9824__$1 = state_9824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9824__$1,inst_9822);
} else {
if((state_val_9825 === (4))){
var inst_9805 = (state_9824[(7)]);
var inst_9805__$1 = (state_9824[(2)]);
var inst_9806 = (inst_9805__$1 == null);
var state_9824__$1 = (function (){var statearr_9827 = state_9824;
(statearr_9827[(7)] = inst_9805__$1);

return statearr_9827;
})();
if(cljs.core.truth_(inst_9806)){
var statearr_9828_9941 = state_9824__$1;
(statearr_9828_9941[(1)] = (5));

} else {
var statearr_9829_9942 = state_9824__$1;
(statearr_9829_9942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9825 === (5))){
var inst_9808 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9824__$1 = state_9824;
var statearr_9830_9943 = state_9824__$1;
(statearr_9830_9943[(2)] = inst_9808);

(statearr_9830_9943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9825 === (6))){
var inst_9805 = (state_9824[(7)]);
var inst_9810 = (state_9824[(8)]);
var inst_9810__$1 = cljs.core.async.chan.call(null,(1));
var inst_9811 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9812 = [inst_9805,inst_9810__$1];
var inst_9813 = (new cljs.core.PersistentVector(null,2,(5),inst_9811,inst_9812,null));
var state_9824__$1 = (function (){var statearr_9831 = state_9824;
(statearr_9831[(8)] = inst_9810__$1);

return statearr_9831;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9824__$1,(8),jobs,inst_9813);
} else {
if((state_val_9825 === (7))){
var inst_9820 = (state_9824[(2)]);
var state_9824__$1 = state_9824;
var statearr_9832_9944 = state_9824__$1;
(statearr_9832_9944[(2)] = inst_9820);

(statearr_9832_9944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9825 === (8))){
var inst_9810 = (state_9824[(8)]);
var inst_9815 = (state_9824[(2)]);
var state_9824__$1 = (function (){var statearr_9833 = state_9824;
(statearr_9833[(9)] = inst_9815);

return statearr_9833;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9824__$1,(9),results,inst_9810);
} else {
if((state_val_9825 === (9))){
var inst_9817 = (state_9824[(2)]);
var state_9824__$1 = (function (){var statearr_9834 = state_9824;
(statearr_9834[(10)] = inst_9817);

return statearr_9834;
})();
var statearr_9835_9945 = state_9824__$1;
(statearr_9835_9945[(2)] = null);

(statearr_9835_9945[(1)] = (2));


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
});})(c__9355__auto___9939,jobs,results,process,async))
;
return ((function (switch__9243__auto__,c__9355__auto___9939,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____0 = (function (){
var statearr_9839 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__);

(statearr_9839[(1)] = (1));

return statearr_9839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____1 = (function (state_9824){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_9824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e9840){if((e9840 instanceof Object)){
var ex__9247__auto__ = e9840;
var statearr_9841_9946 = state_9824;
(statearr_9841_9946[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9947 = state_9824;
state_9824 = G__9947;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__ = function(state_9824){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____1.call(this,state_9824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___9939,jobs,results,process,async))
})();
var state__9357__auto__ = (function (){var statearr_9842 = f__9356__auto__.call(null);
(statearr_9842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___9939);

return statearr_9842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___9939,jobs,results,process,async))
);


var c__9355__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto__,jobs,results,process,async){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto__,jobs,results,process,async){
return (function (state_9880){
var state_val_9881 = (state_9880[(1)]);
if((state_val_9881 === (7))){
var inst_9876 = (state_9880[(2)]);
var state_9880__$1 = state_9880;
var statearr_9882_9948 = state_9880__$1;
(statearr_9882_9948[(2)] = inst_9876);

(statearr_9882_9948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9881 === (20))){
var state_9880__$1 = state_9880;
var statearr_9883_9949 = state_9880__$1;
(statearr_9883_9949[(2)] = null);

(statearr_9883_9949[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9881 === (1))){
var state_9880__$1 = state_9880;
var statearr_9884_9950 = state_9880__$1;
(statearr_9884_9950[(2)] = null);

(statearr_9884_9950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9881 === (4))){
var inst_9845 = (state_9880[(7)]);
var inst_9845__$1 = (state_9880[(2)]);
var inst_9846 = (inst_9845__$1 == null);
var state_9880__$1 = (function (){var statearr_9885 = state_9880;
(statearr_9885[(7)] = inst_9845__$1);

return statearr_9885;
})();
if(cljs.core.truth_(inst_9846)){
var statearr_9886_9951 = state_9880__$1;
(statearr_9886_9951[(1)] = (5));

} else {
var statearr_9887_9952 = state_9880__$1;
(statearr_9887_9952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9881 === (15))){
var inst_9858 = (state_9880[(8)]);
var state_9880__$1 = state_9880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9880__$1,(18),to,inst_9858);
} else {
if((state_val_9881 === (21))){
var inst_9871 = (state_9880[(2)]);
var state_9880__$1 = state_9880;
var statearr_9888_9953 = state_9880__$1;
(statearr_9888_9953[(2)] = inst_9871);

(statearr_9888_9953[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9881 === (13))){
var inst_9873 = (state_9880[(2)]);
var state_9880__$1 = (function (){var statearr_9889 = state_9880;
(statearr_9889[(9)] = inst_9873);

return statearr_9889;
})();
var statearr_9890_9954 = state_9880__$1;
(statearr_9890_9954[(2)] = null);

(statearr_9890_9954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9881 === (6))){
var inst_9845 = (state_9880[(7)]);
var state_9880__$1 = state_9880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9880__$1,(11),inst_9845);
} else {
if((state_val_9881 === (17))){
var inst_9866 = (state_9880[(2)]);
var state_9880__$1 = state_9880;
if(cljs.core.truth_(inst_9866)){
var statearr_9891_9955 = state_9880__$1;
(statearr_9891_9955[(1)] = (19));

} else {
var statearr_9892_9956 = state_9880__$1;
(statearr_9892_9956[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9881 === (3))){
var inst_9878 = (state_9880[(2)]);
var state_9880__$1 = state_9880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9880__$1,inst_9878);
} else {
if((state_val_9881 === (12))){
var inst_9855 = (state_9880[(10)]);
var state_9880__$1 = state_9880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9880__$1,(14),inst_9855);
} else {
if((state_val_9881 === (2))){
var state_9880__$1 = state_9880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9880__$1,(4),results);
} else {
if((state_val_9881 === (19))){
var state_9880__$1 = state_9880;
var statearr_9893_9957 = state_9880__$1;
(statearr_9893_9957[(2)] = null);

(statearr_9893_9957[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9881 === (11))){
var inst_9855 = (state_9880[(2)]);
var state_9880__$1 = (function (){var statearr_9894 = state_9880;
(statearr_9894[(10)] = inst_9855);

return statearr_9894;
})();
var statearr_9895_9958 = state_9880__$1;
(statearr_9895_9958[(2)] = null);

(statearr_9895_9958[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9881 === (9))){
var state_9880__$1 = state_9880;
var statearr_9896_9959 = state_9880__$1;
(statearr_9896_9959[(2)] = null);

(statearr_9896_9959[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9881 === (5))){
var state_9880__$1 = state_9880;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9897_9960 = state_9880__$1;
(statearr_9897_9960[(1)] = (8));

} else {
var statearr_9898_9961 = state_9880__$1;
(statearr_9898_9961[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9881 === (14))){
var inst_9860 = (state_9880[(11)]);
var inst_9858 = (state_9880[(8)]);
var inst_9858__$1 = (state_9880[(2)]);
var inst_9859 = (inst_9858__$1 == null);
var inst_9860__$1 = cljs.core.not.call(null,inst_9859);
var state_9880__$1 = (function (){var statearr_9899 = state_9880;
(statearr_9899[(11)] = inst_9860__$1);

(statearr_9899[(8)] = inst_9858__$1);

return statearr_9899;
})();
if(inst_9860__$1){
var statearr_9900_9962 = state_9880__$1;
(statearr_9900_9962[(1)] = (15));

} else {
var statearr_9901_9963 = state_9880__$1;
(statearr_9901_9963[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9881 === (16))){
var inst_9860 = (state_9880[(11)]);
var state_9880__$1 = state_9880;
var statearr_9902_9964 = state_9880__$1;
(statearr_9902_9964[(2)] = inst_9860);

(statearr_9902_9964[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9881 === (10))){
var inst_9852 = (state_9880[(2)]);
var state_9880__$1 = state_9880;
var statearr_9903_9965 = state_9880__$1;
(statearr_9903_9965[(2)] = inst_9852);

(statearr_9903_9965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9881 === (18))){
var inst_9863 = (state_9880[(2)]);
var state_9880__$1 = state_9880;
var statearr_9904_9966 = state_9880__$1;
(statearr_9904_9966[(2)] = inst_9863);

(statearr_9904_9966[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9881 === (8))){
var inst_9849 = cljs.core.async.close_BANG_.call(null,to);
var state_9880__$1 = state_9880;
var statearr_9905_9967 = state_9880__$1;
(statearr_9905_9967[(2)] = inst_9849);

(statearr_9905_9967[(1)] = (10));


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
});})(c__9355__auto__,jobs,results,process,async))
;
return ((function (switch__9243__auto__,c__9355__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____0 = (function (){
var statearr_9909 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9909[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__);

(statearr_9909[(1)] = (1));

return statearr_9909;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____1 = (function (state_9880){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_9880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e9910){if((e9910 instanceof Object)){
var ex__9247__auto__ = e9910;
var statearr_9911_9968 = state_9880;
(statearr_9911_9968[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9969 = state_9880;
state_9880 = G__9969;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__ = function(state_9880){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____1.call(this,state_9880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9244__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto__,jobs,results,process,async))
})();
var state__9357__auto__ = (function (){var statearr_9912 = f__9356__auto__.call(null);
(statearr_9912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto__);

return statearr_9912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto__,jobs,results,process,async))
);

return c__9355__auto__;
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
var args9970 = [];
var len__7484__auto___9973 = arguments.length;
var i__7485__auto___9974 = (0);
while(true){
if((i__7485__auto___9974 < len__7484__auto___9973)){
args9970.push((arguments[i__7485__auto___9974]));

var G__9975 = (i__7485__auto___9974 + (1));
i__7485__auto___9974 = G__9975;
continue;
} else {
}
break;
}

var G__9972 = args9970.length;
switch (G__9972) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9970.length)].join('')));

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
var args9977 = [];
var len__7484__auto___9980 = arguments.length;
var i__7485__auto___9981 = (0);
while(true){
if((i__7485__auto___9981 < len__7484__auto___9980)){
args9977.push((arguments[i__7485__auto___9981]));

var G__9982 = (i__7485__auto___9981 + (1));
i__7485__auto___9981 = G__9982;
continue;
} else {
}
break;
}

var G__9979 = args9977.length;
switch (G__9979) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9977.length)].join('')));

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
var args9984 = [];
var len__7484__auto___10037 = arguments.length;
var i__7485__auto___10038 = (0);
while(true){
if((i__7485__auto___10038 < len__7484__auto___10037)){
args9984.push((arguments[i__7485__auto___10038]));

var G__10039 = (i__7485__auto___10038 + (1));
i__7485__auto___10038 = G__10039;
continue;
} else {
}
break;
}

var G__9986 = args9984.length;
switch (G__9986) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9984.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9355__auto___10041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___10041,tc,fc){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___10041,tc,fc){
return (function (state_10012){
var state_val_10013 = (state_10012[(1)]);
if((state_val_10013 === (7))){
var inst_10008 = (state_10012[(2)]);
var state_10012__$1 = state_10012;
var statearr_10014_10042 = state_10012__$1;
(statearr_10014_10042[(2)] = inst_10008);

(statearr_10014_10042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10013 === (1))){
var state_10012__$1 = state_10012;
var statearr_10015_10043 = state_10012__$1;
(statearr_10015_10043[(2)] = null);

(statearr_10015_10043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10013 === (4))){
var inst_9989 = (state_10012[(7)]);
var inst_9989__$1 = (state_10012[(2)]);
var inst_9990 = (inst_9989__$1 == null);
var state_10012__$1 = (function (){var statearr_10016 = state_10012;
(statearr_10016[(7)] = inst_9989__$1);

return statearr_10016;
})();
if(cljs.core.truth_(inst_9990)){
var statearr_10017_10044 = state_10012__$1;
(statearr_10017_10044[(1)] = (5));

} else {
var statearr_10018_10045 = state_10012__$1;
(statearr_10018_10045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10013 === (13))){
var state_10012__$1 = state_10012;
var statearr_10019_10046 = state_10012__$1;
(statearr_10019_10046[(2)] = null);

(statearr_10019_10046[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10013 === (6))){
var inst_9989 = (state_10012[(7)]);
var inst_9995 = p.call(null,inst_9989);
var state_10012__$1 = state_10012;
if(cljs.core.truth_(inst_9995)){
var statearr_10020_10047 = state_10012__$1;
(statearr_10020_10047[(1)] = (9));

} else {
var statearr_10021_10048 = state_10012__$1;
(statearr_10021_10048[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10013 === (3))){
var inst_10010 = (state_10012[(2)]);
var state_10012__$1 = state_10012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10012__$1,inst_10010);
} else {
if((state_val_10013 === (12))){
var state_10012__$1 = state_10012;
var statearr_10022_10049 = state_10012__$1;
(statearr_10022_10049[(2)] = null);

(statearr_10022_10049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10013 === (2))){
var state_10012__$1 = state_10012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10012__$1,(4),ch);
} else {
if((state_val_10013 === (11))){
var inst_9989 = (state_10012[(7)]);
var inst_9999 = (state_10012[(2)]);
var state_10012__$1 = state_10012;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10012__$1,(8),inst_9999,inst_9989);
} else {
if((state_val_10013 === (9))){
var state_10012__$1 = state_10012;
var statearr_10023_10050 = state_10012__$1;
(statearr_10023_10050[(2)] = tc);

(statearr_10023_10050[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10013 === (5))){
var inst_9992 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9993 = cljs.core.async.close_BANG_.call(null,fc);
var state_10012__$1 = (function (){var statearr_10024 = state_10012;
(statearr_10024[(8)] = inst_9992);

return statearr_10024;
})();
var statearr_10025_10051 = state_10012__$1;
(statearr_10025_10051[(2)] = inst_9993);

(statearr_10025_10051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10013 === (14))){
var inst_10006 = (state_10012[(2)]);
var state_10012__$1 = state_10012;
var statearr_10026_10052 = state_10012__$1;
(statearr_10026_10052[(2)] = inst_10006);

(statearr_10026_10052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10013 === (10))){
var state_10012__$1 = state_10012;
var statearr_10027_10053 = state_10012__$1;
(statearr_10027_10053[(2)] = fc);

(statearr_10027_10053[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10013 === (8))){
var inst_10001 = (state_10012[(2)]);
var state_10012__$1 = state_10012;
if(cljs.core.truth_(inst_10001)){
var statearr_10028_10054 = state_10012__$1;
(statearr_10028_10054[(1)] = (12));

} else {
var statearr_10029_10055 = state_10012__$1;
(statearr_10029_10055[(1)] = (13));

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
});})(c__9355__auto___10041,tc,fc))
;
return ((function (switch__9243__auto__,c__9355__auto___10041,tc,fc){
return (function() {
var cljs$core$async$state_machine__9244__auto__ = null;
var cljs$core$async$state_machine__9244__auto____0 = (function (){
var statearr_10033 = [null,null,null,null,null,null,null,null,null];
(statearr_10033[(0)] = cljs$core$async$state_machine__9244__auto__);

(statearr_10033[(1)] = (1));

return statearr_10033;
});
var cljs$core$async$state_machine__9244__auto____1 = (function (state_10012){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_10012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e10034){if((e10034 instanceof Object)){
var ex__9247__auto__ = e10034;
var statearr_10035_10056 = state_10012;
(statearr_10035_10056[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10057 = state_10012;
state_10012 = G__10057;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$state_machine__9244__auto__ = function(state_10012){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9244__auto____1.call(this,state_10012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9244__auto____0;
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9244__auto____1;
return cljs$core$async$state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___10041,tc,fc))
})();
var state__9357__auto__ = (function (){var statearr_10036 = f__9356__auto__.call(null);
(statearr_10036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___10041);

return statearr_10036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___10041,tc,fc))
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
var c__9355__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto__){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto__){
return (function (state_10121){
var state_val_10122 = (state_10121[(1)]);
if((state_val_10122 === (7))){
var inst_10117 = (state_10121[(2)]);
var state_10121__$1 = state_10121;
var statearr_10123_10144 = state_10121__$1;
(statearr_10123_10144[(2)] = inst_10117);

(statearr_10123_10144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10122 === (1))){
var inst_10101 = init;
var state_10121__$1 = (function (){var statearr_10124 = state_10121;
(statearr_10124[(7)] = inst_10101);

return statearr_10124;
})();
var statearr_10125_10145 = state_10121__$1;
(statearr_10125_10145[(2)] = null);

(statearr_10125_10145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10122 === (4))){
var inst_10104 = (state_10121[(8)]);
var inst_10104__$1 = (state_10121[(2)]);
var inst_10105 = (inst_10104__$1 == null);
var state_10121__$1 = (function (){var statearr_10126 = state_10121;
(statearr_10126[(8)] = inst_10104__$1);

return statearr_10126;
})();
if(cljs.core.truth_(inst_10105)){
var statearr_10127_10146 = state_10121__$1;
(statearr_10127_10146[(1)] = (5));

} else {
var statearr_10128_10147 = state_10121__$1;
(statearr_10128_10147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10122 === (6))){
var inst_10108 = (state_10121[(9)]);
var inst_10101 = (state_10121[(7)]);
var inst_10104 = (state_10121[(8)]);
var inst_10108__$1 = f.call(null,inst_10101,inst_10104);
var inst_10109 = cljs.core.reduced_QMARK_.call(null,inst_10108__$1);
var state_10121__$1 = (function (){var statearr_10129 = state_10121;
(statearr_10129[(9)] = inst_10108__$1);

return statearr_10129;
})();
if(inst_10109){
var statearr_10130_10148 = state_10121__$1;
(statearr_10130_10148[(1)] = (8));

} else {
var statearr_10131_10149 = state_10121__$1;
(statearr_10131_10149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10122 === (3))){
var inst_10119 = (state_10121[(2)]);
var state_10121__$1 = state_10121;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10121__$1,inst_10119);
} else {
if((state_val_10122 === (2))){
var state_10121__$1 = state_10121;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10121__$1,(4),ch);
} else {
if((state_val_10122 === (9))){
var inst_10108 = (state_10121[(9)]);
var inst_10101 = inst_10108;
var state_10121__$1 = (function (){var statearr_10132 = state_10121;
(statearr_10132[(7)] = inst_10101);

return statearr_10132;
})();
var statearr_10133_10150 = state_10121__$1;
(statearr_10133_10150[(2)] = null);

(statearr_10133_10150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10122 === (5))){
var inst_10101 = (state_10121[(7)]);
var state_10121__$1 = state_10121;
var statearr_10134_10151 = state_10121__$1;
(statearr_10134_10151[(2)] = inst_10101);

(statearr_10134_10151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10122 === (10))){
var inst_10115 = (state_10121[(2)]);
var state_10121__$1 = state_10121;
var statearr_10135_10152 = state_10121__$1;
(statearr_10135_10152[(2)] = inst_10115);

(statearr_10135_10152[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10122 === (8))){
var inst_10108 = (state_10121[(9)]);
var inst_10111 = cljs.core.deref.call(null,inst_10108);
var state_10121__$1 = state_10121;
var statearr_10136_10153 = state_10121__$1;
(statearr_10136_10153[(2)] = inst_10111);

(statearr_10136_10153[(1)] = (10));


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
});})(c__9355__auto__))
;
return ((function (switch__9243__auto__,c__9355__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9244__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9244__auto____0 = (function (){
var statearr_10140 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10140[(0)] = cljs$core$async$reduce_$_state_machine__9244__auto__);

(statearr_10140[(1)] = (1));

return statearr_10140;
});
var cljs$core$async$reduce_$_state_machine__9244__auto____1 = (function (state_10121){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_10121);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e10141){if((e10141 instanceof Object)){
var ex__9247__auto__ = e10141;
var statearr_10142_10154 = state_10121;
(statearr_10142_10154[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10121);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10155 = state_10121;
state_10121 = G__10155;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9244__auto__ = function(state_10121){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9244__auto____1.call(this,state_10121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9244__auto____0;
cljs$core$async$reduce_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9244__auto____1;
return cljs$core$async$reduce_$_state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto__))
})();
var state__9357__auto__ = (function (){var statearr_10143 = f__9356__auto__.call(null);
(statearr_10143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto__);

return statearr_10143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto__))
);

return c__9355__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__9355__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto__,f__$1){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto__,f__$1){
return (function (state_10175){
var state_val_10176 = (state_10175[(1)]);
if((state_val_10176 === (1))){
var inst_10170 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_10175__$1 = state_10175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10175__$1,(2),inst_10170);
} else {
if((state_val_10176 === (2))){
var inst_10172 = (state_10175[(2)]);
var inst_10173 = f__$1.call(null,inst_10172);
var state_10175__$1 = state_10175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10175__$1,inst_10173);
} else {
return null;
}
}
});})(c__9355__auto__,f__$1))
;
return ((function (switch__9243__auto__,c__9355__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__9244__auto__ = null;
var cljs$core$async$transduce_$_state_machine__9244__auto____0 = (function (){
var statearr_10180 = [null,null,null,null,null,null,null];
(statearr_10180[(0)] = cljs$core$async$transduce_$_state_machine__9244__auto__);

(statearr_10180[(1)] = (1));

return statearr_10180;
});
var cljs$core$async$transduce_$_state_machine__9244__auto____1 = (function (state_10175){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_10175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e10181){if((e10181 instanceof Object)){
var ex__9247__auto__ = e10181;
var statearr_10182_10184 = state_10175;
(statearr_10182_10184[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10185 = state_10175;
state_10175 = G__10185;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__9244__auto__ = function(state_10175){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__9244__auto____1.call(this,state_10175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__9244__auto____0;
cljs$core$async$transduce_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__9244__auto____1;
return cljs$core$async$transduce_$_state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto__,f__$1))
})();
var state__9357__auto__ = (function (){var statearr_10183 = f__9356__auto__.call(null);
(statearr_10183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto__);

return statearr_10183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto__,f__$1))
);

return c__9355__auto__;
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
var args10186 = [];
var len__7484__auto___10238 = arguments.length;
var i__7485__auto___10239 = (0);
while(true){
if((i__7485__auto___10239 < len__7484__auto___10238)){
args10186.push((arguments[i__7485__auto___10239]));

var G__10240 = (i__7485__auto___10239 + (1));
i__7485__auto___10239 = G__10240;
continue;
} else {
}
break;
}

var G__10188 = args10186.length;
switch (G__10188) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10186.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9355__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto__){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto__){
return (function (state_10213){
var state_val_10214 = (state_10213[(1)]);
if((state_val_10214 === (7))){
var inst_10195 = (state_10213[(2)]);
var state_10213__$1 = state_10213;
var statearr_10215_10242 = state_10213__$1;
(statearr_10215_10242[(2)] = inst_10195);

(statearr_10215_10242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (1))){
var inst_10189 = cljs.core.seq.call(null,coll);
var inst_10190 = inst_10189;
var state_10213__$1 = (function (){var statearr_10216 = state_10213;
(statearr_10216[(7)] = inst_10190);

return statearr_10216;
})();
var statearr_10217_10243 = state_10213__$1;
(statearr_10217_10243[(2)] = null);

(statearr_10217_10243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (4))){
var inst_10190 = (state_10213[(7)]);
var inst_10193 = cljs.core.first.call(null,inst_10190);
var state_10213__$1 = state_10213;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10213__$1,(7),ch,inst_10193);
} else {
if((state_val_10214 === (13))){
var inst_10207 = (state_10213[(2)]);
var state_10213__$1 = state_10213;
var statearr_10218_10244 = state_10213__$1;
(statearr_10218_10244[(2)] = inst_10207);

(statearr_10218_10244[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (6))){
var inst_10198 = (state_10213[(2)]);
var state_10213__$1 = state_10213;
if(cljs.core.truth_(inst_10198)){
var statearr_10219_10245 = state_10213__$1;
(statearr_10219_10245[(1)] = (8));

} else {
var statearr_10220_10246 = state_10213__$1;
(statearr_10220_10246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (3))){
var inst_10211 = (state_10213[(2)]);
var state_10213__$1 = state_10213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10213__$1,inst_10211);
} else {
if((state_val_10214 === (12))){
var state_10213__$1 = state_10213;
var statearr_10221_10247 = state_10213__$1;
(statearr_10221_10247[(2)] = null);

(statearr_10221_10247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (2))){
var inst_10190 = (state_10213[(7)]);
var state_10213__$1 = state_10213;
if(cljs.core.truth_(inst_10190)){
var statearr_10222_10248 = state_10213__$1;
(statearr_10222_10248[(1)] = (4));

} else {
var statearr_10223_10249 = state_10213__$1;
(statearr_10223_10249[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (11))){
var inst_10204 = cljs.core.async.close_BANG_.call(null,ch);
var state_10213__$1 = state_10213;
var statearr_10224_10250 = state_10213__$1;
(statearr_10224_10250[(2)] = inst_10204);

(statearr_10224_10250[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (9))){
var state_10213__$1 = state_10213;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10225_10251 = state_10213__$1;
(statearr_10225_10251[(1)] = (11));

} else {
var statearr_10226_10252 = state_10213__$1;
(statearr_10226_10252[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (5))){
var inst_10190 = (state_10213[(7)]);
var state_10213__$1 = state_10213;
var statearr_10227_10253 = state_10213__$1;
(statearr_10227_10253[(2)] = inst_10190);

(statearr_10227_10253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (10))){
var inst_10209 = (state_10213[(2)]);
var state_10213__$1 = state_10213;
var statearr_10228_10254 = state_10213__$1;
(statearr_10228_10254[(2)] = inst_10209);

(statearr_10228_10254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10214 === (8))){
var inst_10190 = (state_10213[(7)]);
var inst_10200 = cljs.core.next.call(null,inst_10190);
var inst_10190__$1 = inst_10200;
var state_10213__$1 = (function (){var statearr_10229 = state_10213;
(statearr_10229[(7)] = inst_10190__$1);

return statearr_10229;
})();
var statearr_10230_10255 = state_10213__$1;
(statearr_10230_10255[(2)] = null);

(statearr_10230_10255[(1)] = (2));


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
});})(c__9355__auto__))
;
return ((function (switch__9243__auto__,c__9355__auto__){
return (function() {
var cljs$core$async$state_machine__9244__auto__ = null;
var cljs$core$async$state_machine__9244__auto____0 = (function (){
var statearr_10234 = [null,null,null,null,null,null,null,null];
(statearr_10234[(0)] = cljs$core$async$state_machine__9244__auto__);

(statearr_10234[(1)] = (1));

return statearr_10234;
});
var cljs$core$async$state_machine__9244__auto____1 = (function (state_10213){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_10213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e10235){if((e10235 instanceof Object)){
var ex__9247__auto__ = e10235;
var statearr_10236_10256 = state_10213;
(statearr_10236_10256[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10257 = state_10213;
state_10213 = G__10257;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$state_machine__9244__auto__ = function(state_10213){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9244__auto____1.call(this,state_10213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9244__auto____0;
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9244__auto____1;
return cljs$core$async$state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto__))
})();
var state__9357__auto__ = (function (){var statearr_10237 = f__9356__auto__.call(null);
(statearr_10237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto__);

return statearr_10237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto__))
);

return c__9355__auto__;
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
var x__7072__auto__ = (((_ == null))?null:_);
var m__7073__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,_);
} else {
var m__7073__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,_);
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7073__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m,ch);
} else {
var m__7073__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m,ch);
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m);
} else {
var m__7073__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async10483 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10483 = (function (mult,ch,cs,meta10484){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta10484 = meta10484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10485,meta10484__$1){
var self__ = this;
var _10485__$1 = this;
return (new cljs.core.async.t_cljs$core$async10483(self__.mult,self__.ch,self__.cs,meta10484__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10483.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10485){
var self__ = this;
var _10485__$1 = this;
return self__.meta10484;
});})(cs))
;

cljs.core.async.t_cljs$core$async10483.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10483.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10483.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async10483.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10483.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10483.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10483.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10484","meta10484",1949135383,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10483.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10483";

cljs.core.async.t_cljs$core$async10483.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async10483");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10483 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10483(mult__$1,ch__$1,cs__$1,meta10484){
return (new cljs.core.async.t_cljs$core$async10483(mult__$1,ch__$1,cs__$1,meta10484));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10483(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__9355__auto___10708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___10708,cs,m,dchan,dctr,done){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___10708,cs,m,dchan,dctr,done){
return (function (state_10620){
var state_val_10621 = (state_10620[(1)]);
if((state_val_10621 === (7))){
var inst_10616 = (state_10620[(2)]);
var state_10620__$1 = state_10620;
var statearr_10622_10709 = state_10620__$1;
(statearr_10622_10709[(2)] = inst_10616);

(statearr_10622_10709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (20))){
var inst_10519 = (state_10620[(7)]);
var inst_10531 = cljs.core.first.call(null,inst_10519);
var inst_10532 = cljs.core.nth.call(null,inst_10531,(0),null);
var inst_10533 = cljs.core.nth.call(null,inst_10531,(1),null);
var state_10620__$1 = (function (){var statearr_10623 = state_10620;
(statearr_10623[(8)] = inst_10532);

return statearr_10623;
})();
if(cljs.core.truth_(inst_10533)){
var statearr_10624_10710 = state_10620__$1;
(statearr_10624_10710[(1)] = (22));

} else {
var statearr_10625_10711 = state_10620__$1;
(statearr_10625_10711[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (27))){
var inst_10561 = (state_10620[(9)]);
var inst_10563 = (state_10620[(10)]);
var inst_10568 = (state_10620[(11)]);
var inst_10488 = (state_10620[(12)]);
var inst_10568__$1 = cljs.core._nth.call(null,inst_10561,inst_10563);
var inst_10569 = cljs.core.async.put_BANG_.call(null,inst_10568__$1,inst_10488,done);
var state_10620__$1 = (function (){var statearr_10626 = state_10620;
(statearr_10626[(11)] = inst_10568__$1);

return statearr_10626;
})();
if(cljs.core.truth_(inst_10569)){
var statearr_10627_10712 = state_10620__$1;
(statearr_10627_10712[(1)] = (30));

} else {
var statearr_10628_10713 = state_10620__$1;
(statearr_10628_10713[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (1))){
var state_10620__$1 = state_10620;
var statearr_10629_10714 = state_10620__$1;
(statearr_10629_10714[(2)] = null);

(statearr_10629_10714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (24))){
var inst_10519 = (state_10620[(7)]);
var inst_10538 = (state_10620[(2)]);
var inst_10539 = cljs.core.next.call(null,inst_10519);
var inst_10497 = inst_10539;
var inst_10498 = null;
var inst_10499 = (0);
var inst_10500 = (0);
var state_10620__$1 = (function (){var statearr_10630 = state_10620;
(statearr_10630[(13)] = inst_10497);

(statearr_10630[(14)] = inst_10538);

(statearr_10630[(15)] = inst_10500);

(statearr_10630[(16)] = inst_10498);

(statearr_10630[(17)] = inst_10499);

return statearr_10630;
})();
var statearr_10631_10715 = state_10620__$1;
(statearr_10631_10715[(2)] = null);

(statearr_10631_10715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (39))){
var state_10620__$1 = state_10620;
var statearr_10635_10716 = state_10620__$1;
(statearr_10635_10716[(2)] = null);

(statearr_10635_10716[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (4))){
var inst_10488 = (state_10620[(12)]);
var inst_10488__$1 = (state_10620[(2)]);
var inst_10489 = (inst_10488__$1 == null);
var state_10620__$1 = (function (){var statearr_10636 = state_10620;
(statearr_10636[(12)] = inst_10488__$1);

return statearr_10636;
})();
if(cljs.core.truth_(inst_10489)){
var statearr_10637_10717 = state_10620__$1;
(statearr_10637_10717[(1)] = (5));

} else {
var statearr_10638_10718 = state_10620__$1;
(statearr_10638_10718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (15))){
var inst_10497 = (state_10620[(13)]);
var inst_10500 = (state_10620[(15)]);
var inst_10498 = (state_10620[(16)]);
var inst_10499 = (state_10620[(17)]);
var inst_10515 = (state_10620[(2)]);
var inst_10516 = (inst_10500 + (1));
var tmp10632 = inst_10497;
var tmp10633 = inst_10498;
var tmp10634 = inst_10499;
var inst_10497__$1 = tmp10632;
var inst_10498__$1 = tmp10633;
var inst_10499__$1 = tmp10634;
var inst_10500__$1 = inst_10516;
var state_10620__$1 = (function (){var statearr_10639 = state_10620;
(statearr_10639[(13)] = inst_10497__$1);

(statearr_10639[(15)] = inst_10500__$1);

(statearr_10639[(16)] = inst_10498__$1);

(statearr_10639[(18)] = inst_10515);

(statearr_10639[(17)] = inst_10499__$1);

return statearr_10639;
})();
var statearr_10640_10719 = state_10620__$1;
(statearr_10640_10719[(2)] = null);

(statearr_10640_10719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (21))){
var inst_10542 = (state_10620[(2)]);
var state_10620__$1 = state_10620;
var statearr_10644_10720 = state_10620__$1;
(statearr_10644_10720[(2)] = inst_10542);

(statearr_10644_10720[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (31))){
var inst_10568 = (state_10620[(11)]);
var inst_10572 = done.call(null,null);
var inst_10573 = cljs.core.async.untap_STAR_.call(null,m,inst_10568);
var state_10620__$1 = (function (){var statearr_10645 = state_10620;
(statearr_10645[(19)] = inst_10572);

return statearr_10645;
})();
var statearr_10646_10721 = state_10620__$1;
(statearr_10646_10721[(2)] = inst_10573);

(statearr_10646_10721[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (32))){
var inst_10562 = (state_10620[(20)]);
var inst_10561 = (state_10620[(9)]);
var inst_10560 = (state_10620[(21)]);
var inst_10563 = (state_10620[(10)]);
var inst_10575 = (state_10620[(2)]);
var inst_10576 = (inst_10563 + (1));
var tmp10641 = inst_10562;
var tmp10642 = inst_10561;
var tmp10643 = inst_10560;
var inst_10560__$1 = tmp10643;
var inst_10561__$1 = tmp10642;
var inst_10562__$1 = tmp10641;
var inst_10563__$1 = inst_10576;
var state_10620__$1 = (function (){var statearr_10647 = state_10620;
(statearr_10647[(20)] = inst_10562__$1);

(statearr_10647[(9)] = inst_10561__$1);

(statearr_10647[(21)] = inst_10560__$1);

(statearr_10647[(22)] = inst_10575);

(statearr_10647[(10)] = inst_10563__$1);

return statearr_10647;
})();
var statearr_10648_10722 = state_10620__$1;
(statearr_10648_10722[(2)] = null);

(statearr_10648_10722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (40))){
var inst_10588 = (state_10620[(23)]);
var inst_10592 = done.call(null,null);
var inst_10593 = cljs.core.async.untap_STAR_.call(null,m,inst_10588);
var state_10620__$1 = (function (){var statearr_10649 = state_10620;
(statearr_10649[(24)] = inst_10592);

return statearr_10649;
})();
var statearr_10650_10723 = state_10620__$1;
(statearr_10650_10723[(2)] = inst_10593);

(statearr_10650_10723[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (33))){
var inst_10579 = (state_10620[(25)]);
var inst_10581 = cljs.core.chunked_seq_QMARK_.call(null,inst_10579);
var state_10620__$1 = state_10620;
if(inst_10581){
var statearr_10651_10724 = state_10620__$1;
(statearr_10651_10724[(1)] = (36));

} else {
var statearr_10652_10725 = state_10620__$1;
(statearr_10652_10725[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (13))){
var inst_10509 = (state_10620[(26)]);
var inst_10512 = cljs.core.async.close_BANG_.call(null,inst_10509);
var state_10620__$1 = state_10620;
var statearr_10653_10726 = state_10620__$1;
(statearr_10653_10726[(2)] = inst_10512);

(statearr_10653_10726[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (22))){
var inst_10532 = (state_10620[(8)]);
var inst_10535 = cljs.core.async.close_BANG_.call(null,inst_10532);
var state_10620__$1 = state_10620;
var statearr_10654_10727 = state_10620__$1;
(statearr_10654_10727[(2)] = inst_10535);

(statearr_10654_10727[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (36))){
var inst_10579 = (state_10620[(25)]);
var inst_10583 = cljs.core.chunk_first.call(null,inst_10579);
var inst_10584 = cljs.core.chunk_rest.call(null,inst_10579);
var inst_10585 = cljs.core.count.call(null,inst_10583);
var inst_10560 = inst_10584;
var inst_10561 = inst_10583;
var inst_10562 = inst_10585;
var inst_10563 = (0);
var state_10620__$1 = (function (){var statearr_10655 = state_10620;
(statearr_10655[(20)] = inst_10562);

(statearr_10655[(9)] = inst_10561);

(statearr_10655[(21)] = inst_10560);

(statearr_10655[(10)] = inst_10563);

return statearr_10655;
})();
var statearr_10656_10728 = state_10620__$1;
(statearr_10656_10728[(2)] = null);

(statearr_10656_10728[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (41))){
var inst_10579 = (state_10620[(25)]);
var inst_10595 = (state_10620[(2)]);
var inst_10596 = cljs.core.next.call(null,inst_10579);
var inst_10560 = inst_10596;
var inst_10561 = null;
var inst_10562 = (0);
var inst_10563 = (0);
var state_10620__$1 = (function (){var statearr_10657 = state_10620;
(statearr_10657[(20)] = inst_10562);

(statearr_10657[(9)] = inst_10561);

(statearr_10657[(21)] = inst_10560);

(statearr_10657[(27)] = inst_10595);

(statearr_10657[(10)] = inst_10563);

return statearr_10657;
})();
var statearr_10658_10729 = state_10620__$1;
(statearr_10658_10729[(2)] = null);

(statearr_10658_10729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (43))){
var state_10620__$1 = state_10620;
var statearr_10659_10730 = state_10620__$1;
(statearr_10659_10730[(2)] = null);

(statearr_10659_10730[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (29))){
var inst_10604 = (state_10620[(2)]);
var state_10620__$1 = state_10620;
var statearr_10660_10731 = state_10620__$1;
(statearr_10660_10731[(2)] = inst_10604);

(statearr_10660_10731[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (44))){
var inst_10613 = (state_10620[(2)]);
var state_10620__$1 = (function (){var statearr_10661 = state_10620;
(statearr_10661[(28)] = inst_10613);

return statearr_10661;
})();
var statearr_10662_10732 = state_10620__$1;
(statearr_10662_10732[(2)] = null);

(statearr_10662_10732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (6))){
var inst_10552 = (state_10620[(29)]);
var inst_10551 = cljs.core.deref.call(null,cs);
var inst_10552__$1 = cljs.core.keys.call(null,inst_10551);
var inst_10553 = cljs.core.count.call(null,inst_10552__$1);
var inst_10554 = cljs.core.reset_BANG_.call(null,dctr,inst_10553);
var inst_10559 = cljs.core.seq.call(null,inst_10552__$1);
var inst_10560 = inst_10559;
var inst_10561 = null;
var inst_10562 = (0);
var inst_10563 = (0);
var state_10620__$1 = (function (){var statearr_10663 = state_10620;
(statearr_10663[(20)] = inst_10562);

(statearr_10663[(9)] = inst_10561);

(statearr_10663[(21)] = inst_10560);

(statearr_10663[(29)] = inst_10552__$1);

(statearr_10663[(10)] = inst_10563);

(statearr_10663[(30)] = inst_10554);

return statearr_10663;
})();
var statearr_10664_10733 = state_10620__$1;
(statearr_10664_10733[(2)] = null);

(statearr_10664_10733[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (28))){
var inst_10579 = (state_10620[(25)]);
var inst_10560 = (state_10620[(21)]);
var inst_10579__$1 = cljs.core.seq.call(null,inst_10560);
var state_10620__$1 = (function (){var statearr_10665 = state_10620;
(statearr_10665[(25)] = inst_10579__$1);

return statearr_10665;
})();
if(inst_10579__$1){
var statearr_10666_10734 = state_10620__$1;
(statearr_10666_10734[(1)] = (33));

} else {
var statearr_10667_10735 = state_10620__$1;
(statearr_10667_10735[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (25))){
var inst_10562 = (state_10620[(20)]);
var inst_10563 = (state_10620[(10)]);
var inst_10565 = (inst_10563 < inst_10562);
var inst_10566 = inst_10565;
var state_10620__$1 = state_10620;
if(cljs.core.truth_(inst_10566)){
var statearr_10668_10736 = state_10620__$1;
(statearr_10668_10736[(1)] = (27));

} else {
var statearr_10669_10737 = state_10620__$1;
(statearr_10669_10737[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (34))){
var state_10620__$1 = state_10620;
var statearr_10670_10738 = state_10620__$1;
(statearr_10670_10738[(2)] = null);

(statearr_10670_10738[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (17))){
var state_10620__$1 = state_10620;
var statearr_10671_10739 = state_10620__$1;
(statearr_10671_10739[(2)] = null);

(statearr_10671_10739[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (3))){
var inst_10618 = (state_10620[(2)]);
var state_10620__$1 = state_10620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10620__$1,inst_10618);
} else {
if((state_val_10621 === (12))){
var inst_10547 = (state_10620[(2)]);
var state_10620__$1 = state_10620;
var statearr_10672_10740 = state_10620__$1;
(statearr_10672_10740[(2)] = inst_10547);

(statearr_10672_10740[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (2))){
var state_10620__$1 = state_10620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10620__$1,(4),ch);
} else {
if((state_val_10621 === (23))){
var state_10620__$1 = state_10620;
var statearr_10673_10741 = state_10620__$1;
(statearr_10673_10741[(2)] = null);

(statearr_10673_10741[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (35))){
var inst_10602 = (state_10620[(2)]);
var state_10620__$1 = state_10620;
var statearr_10674_10742 = state_10620__$1;
(statearr_10674_10742[(2)] = inst_10602);

(statearr_10674_10742[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (19))){
var inst_10519 = (state_10620[(7)]);
var inst_10523 = cljs.core.chunk_first.call(null,inst_10519);
var inst_10524 = cljs.core.chunk_rest.call(null,inst_10519);
var inst_10525 = cljs.core.count.call(null,inst_10523);
var inst_10497 = inst_10524;
var inst_10498 = inst_10523;
var inst_10499 = inst_10525;
var inst_10500 = (0);
var state_10620__$1 = (function (){var statearr_10675 = state_10620;
(statearr_10675[(13)] = inst_10497);

(statearr_10675[(15)] = inst_10500);

(statearr_10675[(16)] = inst_10498);

(statearr_10675[(17)] = inst_10499);

return statearr_10675;
})();
var statearr_10676_10743 = state_10620__$1;
(statearr_10676_10743[(2)] = null);

(statearr_10676_10743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (11))){
var inst_10497 = (state_10620[(13)]);
var inst_10519 = (state_10620[(7)]);
var inst_10519__$1 = cljs.core.seq.call(null,inst_10497);
var state_10620__$1 = (function (){var statearr_10677 = state_10620;
(statearr_10677[(7)] = inst_10519__$1);

return statearr_10677;
})();
if(inst_10519__$1){
var statearr_10678_10744 = state_10620__$1;
(statearr_10678_10744[(1)] = (16));

} else {
var statearr_10679_10745 = state_10620__$1;
(statearr_10679_10745[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (9))){
var inst_10549 = (state_10620[(2)]);
var state_10620__$1 = state_10620;
var statearr_10680_10746 = state_10620__$1;
(statearr_10680_10746[(2)] = inst_10549);

(statearr_10680_10746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (5))){
var inst_10495 = cljs.core.deref.call(null,cs);
var inst_10496 = cljs.core.seq.call(null,inst_10495);
var inst_10497 = inst_10496;
var inst_10498 = null;
var inst_10499 = (0);
var inst_10500 = (0);
var state_10620__$1 = (function (){var statearr_10681 = state_10620;
(statearr_10681[(13)] = inst_10497);

(statearr_10681[(15)] = inst_10500);

(statearr_10681[(16)] = inst_10498);

(statearr_10681[(17)] = inst_10499);

return statearr_10681;
})();
var statearr_10682_10747 = state_10620__$1;
(statearr_10682_10747[(2)] = null);

(statearr_10682_10747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (14))){
var state_10620__$1 = state_10620;
var statearr_10683_10748 = state_10620__$1;
(statearr_10683_10748[(2)] = null);

(statearr_10683_10748[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (45))){
var inst_10610 = (state_10620[(2)]);
var state_10620__$1 = state_10620;
var statearr_10684_10749 = state_10620__$1;
(statearr_10684_10749[(2)] = inst_10610);

(statearr_10684_10749[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (26))){
var inst_10552 = (state_10620[(29)]);
var inst_10606 = (state_10620[(2)]);
var inst_10607 = cljs.core.seq.call(null,inst_10552);
var state_10620__$1 = (function (){var statearr_10685 = state_10620;
(statearr_10685[(31)] = inst_10606);

return statearr_10685;
})();
if(inst_10607){
var statearr_10686_10750 = state_10620__$1;
(statearr_10686_10750[(1)] = (42));

} else {
var statearr_10687_10751 = state_10620__$1;
(statearr_10687_10751[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (16))){
var inst_10519 = (state_10620[(7)]);
var inst_10521 = cljs.core.chunked_seq_QMARK_.call(null,inst_10519);
var state_10620__$1 = state_10620;
if(inst_10521){
var statearr_10688_10752 = state_10620__$1;
(statearr_10688_10752[(1)] = (19));

} else {
var statearr_10689_10753 = state_10620__$1;
(statearr_10689_10753[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (38))){
var inst_10599 = (state_10620[(2)]);
var state_10620__$1 = state_10620;
var statearr_10690_10754 = state_10620__$1;
(statearr_10690_10754[(2)] = inst_10599);

(statearr_10690_10754[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (30))){
var state_10620__$1 = state_10620;
var statearr_10691_10755 = state_10620__$1;
(statearr_10691_10755[(2)] = null);

(statearr_10691_10755[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (10))){
var inst_10500 = (state_10620[(15)]);
var inst_10498 = (state_10620[(16)]);
var inst_10508 = cljs.core._nth.call(null,inst_10498,inst_10500);
var inst_10509 = cljs.core.nth.call(null,inst_10508,(0),null);
var inst_10510 = cljs.core.nth.call(null,inst_10508,(1),null);
var state_10620__$1 = (function (){var statearr_10692 = state_10620;
(statearr_10692[(26)] = inst_10509);

return statearr_10692;
})();
if(cljs.core.truth_(inst_10510)){
var statearr_10693_10756 = state_10620__$1;
(statearr_10693_10756[(1)] = (13));

} else {
var statearr_10694_10757 = state_10620__$1;
(statearr_10694_10757[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (18))){
var inst_10545 = (state_10620[(2)]);
var state_10620__$1 = state_10620;
var statearr_10695_10758 = state_10620__$1;
(statearr_10695_10758[(2)] = inst_10545);

(statearr_10695_10758[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (42))){
var state_10620__$1 = state_10620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10620__$1,(45),dchan);
} else {
if((state_val_10621 === (37))){
var inst_10579 = (state_10620[(25)]);
var inst_10588 = (state_10620[(23)]);
var inst_10488 = (state_10620[(12)]);
var inst_10588__$1 = cljs.core.first.call(null,inst_10579);
var inst_10589 = cljs.core.async.put_BANG_.call(null,inst_10588__$1,inst_10488,done);
var state_10620__$1 = (function (){var statearr_10696 = state_10620;
(statearr_10696[(23)] = inst_10588__$1);

return statearr_10696;
})();
if(cljs.core.truth_(inst_10589)){
var statearr_10697_10759 = state_10620__$1;
(statearr_10697_10759[(1)] = (39));

} else {
var statearr_10698_10760 = state_10620__$1;
(statearr_10698_10760[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10621 === (8))){
var inst_10500 = (state_10620[(15)]);
var inst_10499 = (state_10620[(17)]);
var inst_10502 = (inst_10500 < inst_10499);
var inst_10503 = inst_10502;
var state_10620__$1 = state_10620;
if(cljs.core.truth_(inst_10503)){
var statearr_10699_10761 = state_10620__$1;
(statearr_10699_10761[(1)] = (10));

} else {
var statearr_10700_10762 = state_10620__$1;
(statearr_10700_10762[(1)] = (11));

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
});})(c__9355__auto___10708,cs,m,dchan,dctr,done))
;
return ((function (switch__9243__auto__,c__9355__auto___10708,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9244__auto__ = null;
var cljs$core$async$mult_$_state_machine__9244__auto____0 = (function (){
var statearr_10704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10704[(0)] = cljs$core$async$mult_$_state_machine__9244__auto__);

(statearr_10704[(1)] = (1));

return statearr_10704;
});
var cljs$core$async$mult_$_state_machine__9244__auto____1 = (function (state_10620){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_10620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e10705){if((e10705 instanceof Object)){
var ex__9247__auto__ = e10705;
var statearr_10706_10763 = state_10620;
(statearr_10706_10763[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10764 = state_10620;
state_10620 = G__10764;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9244__auto__ = function(state_10620){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9244__auto____1.call(this,state_10620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9244__auto____0;
cljs$core$async$mult_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9244__auto____1;
return cljs$core$async$mult_$_state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___10708,cs,m,dchan,dctr,done))
})();
var state__9357__auto__ = (function (){var statearr_10707 = f__9356__auto__.call(null);
(statearr_10707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___10708);

return statearr_10707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___10708,cs,m,dchan,dctr,done))
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
var args10765 = [];
var len__7484__auto___10768 = arguments.length;
var i__7485__auto___10769 = (0);
while(true){
if((i__7485__auto___10769 < len__7484__auto___10768)){
args10765.push((arguments[i__7485__auto___10769]));

var G__10770 = (i__7485__auto___10769 + (1));
i__7485__auto___10769 = G__10770;
continue;
} else {
}
break;
}

var G__10767 = args10765.length;
switch (G__10767) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10765.length)].join('')));

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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m,ch);
} else {
var m__7073__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m,ch);
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m,ch);
} else {
var m__7073__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m,ch);
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m);
} else {
var m__7073__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m);
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m,state_map);
} else {
var m__7073__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m,state_map);
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,m,mode);
} else {
var m__7073__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___10782 = arguments.length;
var i__7485__auto___10783 = (0);
while(true){
if((i__7485__auto___10783 < len__7484__auto___10782)){
args__7491__auto__.push((arguments[i__7485__auto___10783]));

var G__10784 = (i__7485__auto___10783 + (1));
i__7485__auto___10783 = G__10784;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10776){
var map__10777 = p__10776;
var map__10777__$1 = ((((!((map__10777 == null)))?((((map__10777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10777):map__10777);
var opts = map__10777__$1;
var statearr_10779_10785 = state;
(statearr_10779_10785[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__10777,map__10777__$1,opts){
return (function (val){
var statearr_10780_10786 = state;
(statearr_10780_10786[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10777,map__10777__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_10781_10787 = state;
(statearr_10781_10787[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10772){
var G__10773 = cljs.core.first.call(null,seq10772);
var seq10772__$1 = cljs.core.next.call(null,seq10772);
var G__10774 = cljs.core.first.call(null,seq10772__$1);
var seq10772__$2 = cljs.core.next.call(null,seq10772__$1);
var G__10775 = cljs.core.first.call(null,seq10772__$2);
var seq10772__$3 = cljs.core.next.call(null,seq10772__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10773,G__10774,G__10775,seq10772__$3);
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
if(typeof cljs.core.async.t_cljs$core$async10953 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10953 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10954){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10954 = meta10954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10955,meta10954__$1){
var self__ = this;
var _10955__$1 = this;
return (new cljs.core.async.t_cljs$core$async10953(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10954__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10953.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10955){
var self__ = this;
var _10955__$1 = this;
return self__.meta10954;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10953.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10953.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10953.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async10953.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10953.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10953.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10953.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10953.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10953.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10954","meta10954",-1418290528,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10953.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10953.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10953";

cljs.core.async.t_cljs$core$async10953.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async10953");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10953 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10953(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10954){
return (new cljs.core.async.t_cljs$core$async10953(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10954));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10953(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9355__auto___11118 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___11118,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___11118,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11055){
var state_val_11056 = (state_11055[(1)]);
if((state_val_11056 === (7))){
var inst_10971 = (state_11055[(2)]);
var state_11055__$1 = state_11055;
var statearr_11057_11119 = state_11055__$1;
(statearr_11057_11119[(2)] = inst_10971);

(statearr_11057_11119[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (20))){
var inst_10983 = (state_11055[(7)]);
var state_11055__$1 = state_11055;
var statearr_11058_11120 = state_11055__$1;
(statearr_11058_11120[(2)] = inst_10983);

(statearr_11058_11120[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (27))){
var state_11055__$1 = state_11055;
var statearr_11059_11121 = state_11055__$1;
(statearr_11059_11121[(2)] = null);

(statearr_11059_11121[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (1))){
var inst_10959 = (state_11055[(8)]);
var inst_10959__$1 = calc_state.call(null);
var inst_10961 = (inst_10959__$1 == null);
var inst_10962 = cljs.core.not.call(null,inst_10961);
var state_11055__$1 = (function (){var statearr_11060 = state_11055;
(statearr_11060[(8)] = inst_10959__$1);

return statearr_11060;
})();
if(inst_10962){
var statearr_11061_11122 = state_11055__$1;
(statearr_11061_11122[(1)] = (2));

} else {
var statearr_11062_11123 = state_11055__$1;
(statearr_11062_11123[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (24))){
var inst_11029 = (state_11055[(9)]);
var inst_11006 = (state_11055[(10)]);
var inst_11015 = (state_11055[(11)]);
var inst_11029__$1 = inst_11006.call(null,inst_11015);
var state_11055__$1 = (function (){var statearr_11063 = state_11055;
(statearr_11063[(9)] = inst_11029__$1);

return statearr_11063;
})();
if(cljs.core.truth_(inst_11029__$1)){
var statearr_11064_11124 = state_11055__$1;
(statearr_11064_11124[(1)] = (29));

} else {
var statearr_11065_11125 = state_11055__$1;
(statearr_11065_11125[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (4))){
var inst_10974 = (state_11055[(2)]);
var state_11055__$1 = state_11055;
if(cljs.core.truth_(inst_10974)){
var statearr_11066_11126 = state_11055__$1;
(statearr_11066_11126[(1)] = (8));

} else {
var statearr_11067_11127 = state_11055__$1;
(statearr_11067_11127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (15))){
var inst_11000 = (state_11055[(2)]);
var state_11055__$1 = state_11055;
if(cljs.core.truth_(inst_11000)){
var statearr_11068_11128 = state_11055__$1;
(statearr_11068_11128[(1)] = (19));

} else {
var statearr_11069_11129 = state_11055__$1;
(statearr_11069_11129[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (21))){
var inst_11005 = (state_11055[(12)]);
var inst_11005__$1 = (state_11055[(2)]);
var inst_11006 = cljs.core.get.call(null,inst_11005__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11007 = cljs.core.get.call(null,inst_11005__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11008 = cljs.core.get.call(null,inst_11005__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11055__$1 = (function (){var statearr_11070 = state_11055;
(statearr_11070[(12)] = inst_11005__$1);

(statearr_11070[(13)] = inst_11007);

(statearr_11070[(10)] = inst_11006);

return statearr_11070;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11055__$1,(22),inst_11008);
} else {
if((state_val_11056 === (31))){
var inst_11037 = (state_11055[(2)]);
var state_11055__$1 = state_11055;
if(cljs.core.truth_(inst_11037)){
var statearr_11071_11130 = state_11055__$1;
(statearr_11071_11130[(1)] = (32));

} else {
var statearr_11072_11131 = state_11055__$1;
(statearr_11072_11131[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (32))){
var inst_11014 = (state_11055[(14)]);
var state_11055__$1 = state_11055;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11055__$1,(35),out,inst_11014);
} else {
if((state_val_11056 === (33))){
var inst_11005 = (state_11055[(12)]);
var inst_10983 = inst_11005;
var state_11055__$1 = (function (){var statearr_11073 = state_11055;
(statearr_11073[(7)] = inst_10983);

return statearr_11073;
})();
var statearr_11074_11132 = state_11055__$1;
(statearr_11074_11132[(2)] = null);

(statearr_11074_11132[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (13))){
var inst_10983 = (state_11055[(7)]);
var inst_10990 = inst_10983.cljs$lang$protocol_mask$partition0$;
var inst_10991 = (inst_10990 & (64));
var inst_10992 = inst_10983.cljs$core$ISeq$;
var inst_10993 = (inst_10991) || (inst_10992);
var state_11055__$1 = state_11055;
if(cljs.core.truth_(inst_10993)){
var statearr_11075_11133 = state_11055__$1;
(statearr_11075_11133[(1)] = (16));

} else {
var statearr_11076_11134 = state_11055__$1;
(statearr_11076_11134[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (22))){
var inst_11014 = (state_11055[(14)]);
var inst_11015 = (state_11055[(11)]);
var inst_11013 = (state_11055[(2)]);
var inst_11014__$1 = cljs.core.nth.call(null,inst_11013,(0),null);
var inst_11015__$1 = cljs.core.nth.call(null,inst_11013,(1),null);
var inst_11016 = (inst_11014__$1 == null);
var inst_11017 = cljs.core._EQ_.call(null,inst_11015__$1,change);
var inst_11018 = (inst_11016) || (inst_11017);
var state_11055__$1 = (function (){var statearr_11077 = state_11055;
(statearr_11077[(14)] = inst_11014__$1);

(statearr_11077[(11)] = inst_11015__$1);

return statearr_11077;
})();
if(cljs.core.truth_(inst_11018)){
var statearr_11078_11135 = state_11055__$1;
(statearr_11078_11135[(1)] = (23));

} else {
var statearr_11079_11136 = state_11055__$1;
(statearr_11079_11136[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (36))){
var inst_11005 = (state_11055[(12)]);
var inst_10983 = inst_11005;
var state_11055__$1 = (function (){var statearr_11080 = state_11055;
(statearr_11080[(7)] = inst_10983);

return statearr_11080;
})();
var statearr_11081_11137 = state_11055__$1;
(statearr_11081_11137[(2)] = null);

(statearr_11081_11137[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (29))){
var inst_11029 = (state_11055[(9)]);
var state_11055__$1 = state_11055;
var statearr_11082_11138 = state_11055__$1;
(statearr_11082_11138[(2)] = inst_11029);

(statearr_11082_11138[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (6))){
var state_11055__$1 = state_11055;
var statearr_11083_11139 = state_11055__$1;
(statearr_11083_11139[(2)] = false);

(statearr_11083_11139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (28))){
var inst_11025 = (state_11055[(2)]);
var inst_11026 = calc_state.call(null);
var inst_10983 = inst_11026;
var state_11055__$1 = (function (){var statearr_11084 = state_11055;
(statearr_11084[(7)] = inst_10983);

(statearr_11084[(15)] = inst_11025);

return statearr_11084;
})();
var statearr_11085_11140 = state_11055__$1;
(statearr_11085_11140[(2)] = null);

(statearr_11085_11140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (25))){
var inst_11051 = (state_11055[(2)]);
var state_11055__$1 = state_11055;
var statearr_11086_11141 = state_11055__$1;
(statearr_11086_11141[(2)] = inst_11051);

(statearr_11086_11141[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (34))){
var inst_11049 = (state_11055[(2)]);
var state_11055__$1 = state_11055;
var statearr_11087_11142 = state_11055__$1;
(statearr_11087_11142[(2)] = inst_11049);

(statearr_11087_11142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (17))){
var state_11055__$1 = state_11055;
var statearr_11088_11143 = state_11055__$1;
(statearr_11088_11143[(2)] = false);

(statearr_11088_11143[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (3))){
var state_11055__$1 = state_11055;
var statearr_11089_11144 = state_11055__$1;
(statearr_11089_11144[(2)] = false);

(statearr_11089_11144[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (12))){
var inst_11053 = (state_11055[(2)]);
var state_11055__$1 = state_11055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11055__$1,inst_11053);
} else {
if((state_val_11056 === (2))){
var inst_10959 = (state_11055[(8)]);
var inst_10964 = inst_10959.cljs$lang$protocol_mask$partition0$;
var inst_10965 = (inst_10964 & (64));
var inst_10966 = inst_10959.cljs$core$ISeq$;
var inst_10967 = (inst_10965) || (inst_10966);
var state_11055__$1 = state_11055;
if(cljs.core.truth_(inst_10967)){
var statearr_11090_11145 = state_11055__$1;
(statearr_11090_11145[(1)] = (5));

} else {
var statearr_11091_11146 = state_11055__$1;
(statearr_11091_11146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (23))){
var inst_11014 = (state_11055[(14)]);
var inst_11020 = (inst_11014 == null);
var state_11055__$1 = state_11055;
if(cljs.core.truth_(inst_11020)){
var statearr_11092_11147 = state_11055__$1;
(statearr_11092_11147[(1)] = (26));

} else {
var statearr_11093_11148 = state_11055__$1;
(statearr_11093_11148[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (35))){
var inst_11040 = (state_11055[(2)]);
var state_11055__$1 = state_11055;
if(cljs.core.truth_(inst_11040)){
var statearr_11094_11149 = state_11055__$1;
(statearr_11094_11149[(1)] = (36));

} else {
var statearr_11095_11150 = state_11055__$1;
(statearr_11095_11150[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (19))){
var inst_10983 = (state_11055[(7)]);
var inst_11002 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10983);
var state_11055__$1 = state_11055;
var statearr_11096_11151 = state_11055__$1;
(statearr_11096_11151[(2)] = inst_11002);

(statearr_11096_11151[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (11))){
var inst_10983 = (state_11055[(7)]);
var inst_10987 = (inst_10983 == null);
var inst_10988 = cljs.core.not.call(null,inst_10987);
var state_11055__$1 = state_11055;
if(inst_10988){
var statearr_11097_11152 = state_11055__$1;
(statearr_11097_11152[(1)] = (13));

} else {
var statearr_11098_11153 = state_11055__$1;
(statearr_11098_11153[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (9))){
var inst_10959 = (state_11055[(8)]);
var state_11055__$1 = state_11055;
var statearr_11099_11154 = state_11055__$1;
(statearr_11099_11154[(2)] = inst_10959);

(statearr_11099_11154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (5))){
var state_11055__$1 = state_11055;
var statearr_11100_11155 = state_11055__$1;
(statearr_11100_11155[(2)] = true);

(statearr_11100_11155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (14))){
var state_11055__$1 = state_11055;
var statearr_11101_11156 = state_11055__$1;
(statearr_11101_11156[(2)] = false);

(statearr_11101_11156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (26))){
var inst_11015 = (state_11055[(11)]);
var inst_11022 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11015);
var state_11055__$1 = state_11055;
var statearr_11102_11157 = state_11055__$1;
(statearr_11102_11157[(2)] = inst_11022);

(statearr_11102_11157[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (16))){
var state_11055__$1 = state_11055;
var statearr_11103_11158 = state_11055__$1;
(statearr_11103_11158[(2)] = true);

(statearr_11103_11158[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (38))){
var inst_11045 = (state_11055[(2)]);
var state_11055__$1 = state_11055;
var statearr_11104_11159 = state_11055__$1;
(statearr_11104_11159[(2)] = inst_11045);

(statearr_11104_11159[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (30))){
var inst_11007 = (state_11055[(13)]);
var inst_11006 = (state_11055[(10)]);
var inst_11015 = (state_11055[(11)]);
var inst_11032 = cljs.core.empty_QMARK_.call(null,inst_11006);
var inst_11033 = inst_11007.call(null,inst_11015);
var inst_11034 = cljs.core.not.call(null,inst_11033);
var inst_11035 = (inst_11032) && (inst_11034);
var state_11055__$1 = state_11055;
var statearr_11105_11160 = state_11055__$1;
(statearr_11105_11160[(2)] = inst_11035);

(statearr_11105_11160[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (10))){
var inst_10959 = (state_11055[(8)]);
var inst_10979 = (state_11055[(2)]);
var inst_10980 = cljs.core.get.call(null,inst_10979,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10981 = cljs.core.get.call(null,inst_10979,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10982 = cljs.core.get.call(null,inst_10979,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10983 = inst_10959;
var state_11055__$1 = (function (){var statearr_11106 = state_11055;
(statearr_11106[(16)] = inst_10980);

(statearr_11106[(17)] = inst_10981);

(statearr_11106[(7)] = inst_10983);

(statearr_11106[(18)] = inst_10982);

return statearr_11106;
})();
var statearr_11107_11161 = state_11055__$1;
(statearr_11107_11161[(2)] = null);

(statearr_11107_11161[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (18))){
var inst_10997 = (state_11055[(2)]);
var state_11055__$1 = state_11055;
var statearr_11108_11162 = state_11055__$1;
(statearr_11108_11162[(2)] = inst_10997);

(statearr_11108_11162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (37))){
var state_11055__$1 = state_11055;
var statearr_11109_11163 = state_11055__$1;
(statearr_11109_11163[(2)] = null);

(statearr_11109_11163[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11056 === (8))){
var inst_10959 = (state_11055[(8)]);
var inst_10976 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10959);
var state_11055__$1 = state_11055;
var statearr_11110_11164 = state_11055__$1;
(statearr_11110_11164[(2)] = inst_10976);

(statearr_11110_11164[(1)] = (10));


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
});})(c__9355__auto___11118,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9243__auto__,c__9355__auto___11118,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9244__auto__ = null;
var cljs$core$async$mix_$_state_machine__9244__auto____0 = (function (){
var statearr_11114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11114[(0)] = cljs$core$async$mix_$_state_machine__9244__auto__);

(statearr_11114[(1)] = (1));

return statearr_11114;
});
var cljs$core$async$mix_$_state_machine__9244__auto____1 = (function (state_11055){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_11055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e11115){if((e11115 instanceof Object)){
var ex__9247__auto__ = e11115;
var statearr_11116_11165 = state_11055;
(statearr_11116_11165[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11166 = state_11055;
state_11055 = G__11166;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9244__auto__ = function(state_11055){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9244__auto____1.call(this,state_11055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9244__auto____0;
cljs$core$async$mix_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9244__auto____1;
return cljs$core$async$mix_$_state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___11118,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9357__auto__ = (function (){var statearr_11117 = f__9356__auto__.call(null);
(statearr_11117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___11118);

return statearr_11117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___11118,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7073__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,p,v,ch);
} else {
var m__7073__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args11167 = [];
var len__7484__auto___11170 = arguments.length;
var i__7485__auto___11171 = (0);
while(true){
if((i__7485__auto___11171 < len__7484__auto___11170)){
args11167.push((arguments[i__7485__auto___11171]));

var G__11172 = (i__7485__auto___11171 + (1));
i__7485__auto___11171 = G__11172;
continue;
} else {
}
break;
}

var G__11169 = args11167.length;
switch (G__11169) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11167.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,p);
} else {
var m__7073__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,p);
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
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,p,v);
} else {
var m__7073__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,p,v);
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
var args11175 = [];
var len__7484__auto___11300 = arguments.length;
var i__7485__auto___11301 = (0);
while(true){
if((i__7485__auto___11301 < len__7484__auto___11300)){
args11175.push((arguments[i__7485__auto___11301]));

var G__11302 = (i__7485__auto___11301 + (1));
i__7485__auto___11301 = G__11302;
continue;
} else {
}
break;
}

var G__11177 = args11175.length;
switch (G__11177) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11175.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6409__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6409__auto__,mults){
return (function (p1__11174_SHARP_){
if(cljs.core.truth_(p1__11174_SHARP_.call(null,topic))){
return p1__11174_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11174_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6409__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11178 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11178 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11179){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11179 = meta11179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11180,meta11179__$1){
var self__ = this;
var _11180__$1 = this;
return (new cljs.core.async.t_cljs$core$async11178(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11179__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11178.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11180){
var self__ = this;
var _11180__$1 = this;
return self__.meta11179;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11178.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async11178.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11178.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async11178.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11178.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11178.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11178.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11178.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11179","meta11179",1175051852,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11178.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11178.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11178";

cljs.core.async.t_cljs$core$async11178.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async11178");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11178 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11178(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11179){
return (new cljs.core.async.t_cljs$core$async11178(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11179));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11178(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9355__auto___11304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___11304,mults,ensure_mult,p){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___11304,mults,ensure_mult,p){
return (function (state_11252){
var state_val_11253 = (state_11252[(1)]);
if((state_val_11253 === (7))){
var inst_11248 = (state_11252[(2)]);
var state_11252__$1 = state_11252;
var statearr_11254_11305 = state_11252__$1;
(statearr_11254_11305[(2)] = inst_11248);

(statearr_11254_11305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (20))){
var state_11252__$1 = state_11252;
var statearr_11255_11306 = state_11252__$1;
(statearr_11255_11306[(2)] = null);

(statearr_11255_11306[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (1))){
var state_11252__$1 = state_11252;
var statearr_11256_11307 = state_11252__$1;
(statearr_11256_11307[(2)] = null);

(statearr_11256_11307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (24))){
var inst_11231 = (state_11252[(7)]);
var inst_11240 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11231);
var state_11252__$1 = state_11252;
var statearr_11257_11308 = state_11252__$1;
(statearr_11257_11308[(2)] = inst_11240);

(statearr_11257_11308[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (4))){
var inst_11183 = (state_11252[(8)]);
var inst_11183__$1 = (state_11252[(2)]);
var inst_11184 = (inst_11183__$1 == null);
var state_11252__$1 = (function (){var statearr_11258 = state_11252;
(statearr_11258[(8)] = inst_11183__$1);

return statearr_11258;
})();
if(cljs.core.truth_(inst_11184)){
var statearr_11259_11309 = state_11252__$1;
(statearr_11259_11309[(1)] = (5));

} else {
var statearr_11260_11310 = state_11252__$1;
(statearr_11260_11310[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (15))){
var inst_11225 = (state_11252[(2)]);
var state_11252__$1 = state_11252;
var statearr_11261_11311 = state_11252__$1;
(statearr_11261_11311[(2)] = inst_11225);

(statearr_11261_11311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (21))){
var inst_11245 = (state_11252[(2)]);
var state_11252__$1 = (function (){var statearr_11262 = state_11252;
(statearr_11262[(9)] = inst_11245);

return statearr_11262;
})();
var statearr_11263_11312 = state_11252__$1;
(statearr_11263_11312[(2)] = null);

(statearr_11263_11312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (13))){
var inst_11207 = (state_11252[(10)]);
var inst_11209 = cljs.core.chunked_seq_QMARK_.call(null,inst_11207);
var state_11252__$1 = state_11252;
if(inst_11209){
var statearr_11264_11313 = state_11252__$1;
(statearr_11264_11313[(1)] = (16));

} else {
var statearr_11265_11314 = state_11252__$1;
(statearr_11265_11314[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (22))){
var inst_11237 = (state_11252[(2)]);
var state_11252__$1 = state_11252;
if(cljs.core.truth_(inst_11237)){
var statearr_11266_11315 = state_11252__$1;
(statearr_11266_11315[(1)] = (23));

} else {
var statearr_11267_11316 = state_11252__$1;
(statearr_11267_11316[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (6))){
var inst_11233 = (state_11252[(11)]);
var inst_11231 = (state_11252[(7)]);
var inst_11183 = (state_11252[(8)]);
var inst_11231__$1 = topic_fn.call(null,inst_11183);
var inst_11232 = cljs.core.deref.call(null,mults);
var inst_11233__$1 = cljs.core.get.call(null,inst_11232,inst_11231__$1);
var state_11252__$1 = (function (){var statearr_11268 = state_11252;
(statearr_11268[(11)] = inst_11233__$1);

(statearr_11268[(7)] = inst_11231__$1);

return statearr_11268;
})();
if(cljs.core.truth_(inst_11233__$1)){
var statearr_11269_11317 = state_11252__$1;
(statearr_11269_11317[(1)] = (19));

} else {
var statearr_11270_11318 = state_11252__$1;
(statearr_11270_11318[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (25))){
var inst_11242 = (state_11252[(2)]);
var state_11252__$1 = state_11252;
var statearr_11271_11319 = state_11252__$1;
(statearr_11271_11319[(2)] = inst_11242);

(statearr_11271_11319[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (17))){
var inst_11207 = (state_11252[(10)]);
var inst_11216 = cljs.core.first.call(null,inst_11207);
var inst_11217 = cljs.core.async.muxch_STAR_.call(null,inst_11216);
var inst_11218 = cljs.core.async.close_BANG_.call(null,inst_11217);
var inst_11219 = cljs.core.next.call(null,inst_11207);
var inst_11193 = inst_11219;
var inst_11194 = null;
var inst_11195 = (0);
var inst_11196 = (0);
var state_11252__$1 = (function (){var statearr_11272 = state_11252;
(statearr_11272[(12)] = inst_11196);

(statearr_11272[(13)] = inst_11195);

(statearr_11272[(14)] = inst_11194);

(statearr_11272[(15)] = inst_11218);

(statearr_11272[(16)] = inst_11193);

return statearr_11272;
})();
var statearr_11273_11320 = state_11252__$1;
(statearr_11273_11320[(2)] = null);

(statearr_11273_11320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (3))){
var inst_11250 = (state_11252[(2)]);
var state_11252__$1 = state_11252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11252__$1,inst_11250);
} else {
if((state_val_11253 === (12))){
var inst_11227 = (state_11252[(2)]);
var state_11252__$1 = state_11252;
var statearr_11274_11321 = state_11252__$1;
(statearr_11274_11321[(2)] = inst_11227);

(statearr_11274_11321[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (2))){
var state_11252__$1 = state_11252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11252__$1,(4),ch);
} else {
if((state_val_11253 === (23))){
var state_11252__$1 = state_11252;
var statearr_11275_11322 = state_11252__$1;
(statearr_11275_11322[(2)] = null);

(statearr_11275_11322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (19))){
var inst_11233 = (state_11252[(11)]);
var inst_11183 = (state_11252[(8)]);
var inst_11235 = cljs.core.async.muxch_STAR_.call(null,inst_11233);
var state_11252__$1 = state_11252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11252__$1,(22),inst_11235,inst_11183);
} else {
if((state_val_11253 === (11))){
var inst_11207 = (state_11252[(10)]);
var inst_11193 = (state_11252[(16)]);
var inst_11207__$1 = cljs.core.seq.call(null,inst_11193);
var state_11252__$1 = (function (){var statearr_11276 = state_11252;
(statearr_11276[(10)] = inst_11207__$1);

return statearr_11276;
})();
if(inst_11207__$1){
var statearr_11277_11323 = state_11252__$1;
(statearr_11277_11323[(1)] = (13));

} else {
var statearr_11278_11324 = state_11252__$1;
(statearr_11278_11324[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (9))){
var inst_11229 = (state_11252[(2)]);
var state_11252__$1 = state_11252;
var statearr_11279_11325 = state_11252__$1;
(statearr_11279_11325[(2)] = inst_11229);

(statearr_11279_11325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (5))){
var inst_11190 = cljs.core.deref.call(null,mults);
var inst_11191 = cljs.core.vals.call(null,inst_11190);
var inst_11192 = cljs.core.seq.call(null,inst_11191);
var inst_11193 = inst_11192;
var inst_11194 = null;
var inst_11195 = (0);
var inst_11196 = (0);
var state_11252__$1 = (function (){var statearr_11280 = state_11252;
(statearr_11280[(12)] = inst_11196);

(statearr_11280[(13)] = inst_11195);

(statearr_11280[(14)] = inst_11194);

(statearr_11280[(16)] = inst_11193);

return statearr_11280;
})();
var statearr_11281_11326 = state_11252__$1;
(statearr_11281_11326[(2)] = null);

(statearr_11281_11326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (14))){
var state_11252__$1 = state_11252;
var statearr_11285_11327 = state_11252__$1;
(statearr_11285_11327[(2)] = null);

(statearr_11285_11327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (16))){
var inst_11207 = (state_11252[(10)]);
var inst_11211 = cljs.core.chunk_first.call(null,inst_11207);
var inst_11212 = cljs.core.chunk_rest.call(null,inst_11207);
var inst_11213 = cljs.core.count.call(null,inst_11211);
var inst_11193 = inst_11212;
var inst_11194 = inst_11211;
var inst_11195 = inst_11213;
var inst_11196 = (0);
var state_11252__$1 = (function (){var statearr_11286 = state_11252;
(statearr_11286[(12)] = inst_11196);

(statearr_11286[(13)] = inst_11195);

(statearr_11286[(14)] = inst_11194);

(statearr_11286[(16)] = inst_11193);

return statearr_11286;
})();
var statearr_11287_11328 = state_11252__$1;
(statearr_11287_11328[(2)] = null);

(statearr_11287_11328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (10))){
var inst_11196 = (state_11252[(12)]);
var inst_11195 = (state_11252[(13)]);
var inst_11194 = (state_11252[(14)]);
var inst_11193 = (state_11252[(16)]);
var inst_11201 = cljs.core._nth.call(null,inst_11194,inst_11196);
var inst_11202 = cljs.core.async.muxch_STAR_.call(null,inst_11201);
var inst_11203 = cljs.core.async.close_BANG_.call(null,inst_11202);
var inst_11204 = (inst_11196 + (1));
var tmp11282 = inst_11195;
var tmp11283 = inst_11194;
var tmp11284 = inst_11193;
var inst_11193__$1 = tmp11284;
var inst_11194__$1 = tmp11283;
var inst_11195__$1 = tmp11282;
var inst_11196__$1 = inst_11204;
var state_11252__$1 = (function (){var statearr_11288 = state_11252;
(statearr_11288[(17)] = inst_11203);

(statearr_11288[(12)] = inst_11196__$1);

(statearr_11288[(13)] = inst_11195__$1);

(statearr_11288[(14)] = inst_11194__$1);

(statearr_11288[(16)] = inst_11193__$1);

return statearr_11288;
})();
var statearr_11289_11329 = state_11252__$1;
(statearr_11289_11329[(2)] = null);

(statearr_11289_11329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (18))){
var inst_11222 = (state_11252[(2)]);
var state_11252__$1 = state_11252;
var statearr_11290_11330 = state_11252__$1;
(statearr_11290_11330[(2)] = inst_11222);

(statearr_11290_11330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11253 === (8))){
var inst_11196 = (state_11252[(12)]);
var inst_11195 = (state_11252[(13)]);
var inst_11198 = (inst_11196 < inst_11195);
var inst_11199 = inst_11198;
var state_11252__$1 = state_11252;
if(cljs.core.truth_(inst_11199)){
var statearr_11291_11331 = state_11252__$1;
(statearr_11291_11331[(1)] = (10));

} else {
var statearr_11292_11332 = state_11252__$1;
(statearr_11292_11332[(1)] = (11));

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
});})(c__9355__auto___11304,mults,ensure_mult,p))
;
return ((function (switch__9243__auto__,c__9355__auto___11304,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9244__auto__ = null;
var cljs$core$async$state_machine__9244__auto____0 = (function (){
var statearr_11296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11296[(0)] = cljs$core$async$state_machine__9244__auto__);

(statearr_11296[(1)] = (1));

return statearr_11296;
});
var cljs$core$async$state_machine__9244__auto____1 = (function (state_11252){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_11252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e11297){if((e11297 instanceof Object)){
var ex__9247__auto__ = e11297;
var statearr_11298_11333 = state_11252;
(statearr_11298_11333[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11334 = state_11252;
state_11252 = G__11334;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$state_machine__9244__auto__ = function(state_11252){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9244__auto____1.call(this,state_11252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9244__auto____0;
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9244__auto____1;
return cljs$core$async$state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___11304,mults,ensure_mult,p))
})();
var state__9357__auto__ = (function (){var statearr_11299 = f__9356__auto__.call(null);
(statearr_11299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___11304);

return statearr_11299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___11304,mults,ensure_mult,p))
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
var args11335 = [];
var len__7484__auto___11338 = arguments.length;
var i__7485__auto___11339 = (0);
while(true){
if((i__7485__auto___11339 < len__7484__auto___11338)){
args11335.push((arguments[i__7485__auto___11339]));

var G__11340 = (i__7485__auto___11339 + (1));
i__7485__auto___11339 = G__11340;
continue;
} else {
}
break;
}

var G__11337 = args11335.length;
switch (G__11337) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11335.length)].join('')));

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
var args11342 = [];
var len__7484__auto___11345 = arguments.length;
var i__7485__auto___11346 = (0);
while(true){
if((i__7485__auto___11346 < len__7484__auto___11345)){
args11342.push((arguments[i__7485__auto___11346]));

var G__11347 = (i__7485__auto___11346 + (1));
i__7485__auto___11346 = G__11347;
continue;
} else {
}
break;
}

var G__11344 = args11342.length;
switch (G__11344) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11342.length)].join('')));

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
var args11349 = [];
var len__7484__auto___11420 = arguments.length;
var i__7485__auto___11421 = (0);
while(true){
if((i__7485__auto___11421 < len__7484__auto___11420)){
args11349.push((arguments[i__7485__auto___11421]));

var G__11422 = (i__7485__auto___11421 + (1));
i__7485__auto___11421 = G__11422;
continue;
} else {
}
break;
}

var G__11351 = args11349.length;
switch (G__11351) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11349.length)].join('')));

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
var c__9355__auto___11424 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___11424,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___11424,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11390){
var state_val_11391 = (state_11390[(1)]);
if((state_val_11391 === (7))){
var state_11390__$1 = state_11390;
var statearr_11392_11425 = state_11390__$1;
(statearr_11392_11425[(2)] = null);

(statearr_11392_11425[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (1))){
var state_11390__$1 = state_11390;
var statearr_11393_11426 = state_11390__$1;
(statearr_11393_11426[(2)] = null);

(statearr_11393_11426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (4))){
var inst_11354 = (state_11390[(7)]);
var inst_11356 = (inst_11354 < cnt);
var state_11390__$1 = state_11390;
if(cljs.core.truth_(inst_11356)){
var statearr_11394_11427 = state_11390__$1;
(statearr_11394_11427[(1)] = (6));

} else {
var statearr_11395_11428 = state_11390__$1;
(statearr_11395_11428[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (15))){
var inst_11386 = (state_11390[(2)]);
var state_11390__$1 = state_11390;
var statearr_11396_11429 = state_11390__$1;
(statearr_11396_11429[(2)] = inst_11386);

(statearr_11396_11429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (13))){
var inst_11379 = cljs.core.async.close_BANG_.call(null,out);
var state_11390__$1 = state_11390;
var statearr_11397_11430 = state_11390__$1;
(statearr_11397_11430[(2)] = inst_11379);

(statearr_11397_11430[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (6))){
var state_11390__$1 = state_11390;
var statearr_11398_11431 = state_11390__$1;
(statearr_11398_11431[(2)] = null);

(statearr_11398_11431[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (3))){
var inst_11388 = (state_11390[(2)]);
var state_11390__$1 = state_11390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11390__$1,inst_11388);
} else {
if((state_val_11391 === (12))){
var inst_11376 = (state_11390[(8)]);
var inst_11376__$1 = (state_11390[(2)]);
var inst_11377 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11376__$1);
var state_11390__$1 = (function (){var statearr_11399 = state_11390;
(statearr_11399[(8)] = inst_11376__$1);

return statearr_11399;
})();
if(cljs.core.truth_(inst_11377)){
var statearr_11400_11432 = state_11390__$1;
(statearr_11400_11432[(1)] = (13));

} else {
var statearr_11401_11433 = state_11390__$1;
(statearr_11401_11433[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (2))){
var inst_11353 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11354 = (0);
var state_11390__$1 = (function (){var statearr_11402 = state_11390;
(statearr_11402[(9)] = inst_11353);

(statearr_11402[(7)] = inst_11354);

return statearr_11402;
})();
var statearr_11403_11434 = state_11390__$1;
(statearr_11403_11434[(2)] = null);

(statearr_11403_11434[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (11))){
var inst_11354 = (state_11390[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11390,(10),Object,null,(9));
var inst_11363 = chs__$1.call(null,inst_11354);
var inst_11364 = done.call(null,inst_11354);
var inst_11365 = cljs.core.async.take_BANG_.call(null,inst_11363,inst_11364);
var state_11390__$1 = state_11390;
var statearr_11404_11435 = state_11390__$1;
(statearr_11404_11435[(2)] = inst_11365);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11390__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (9))){
var inst_11354 = (state_11390[(7)]);
var inst_11367 = (state_11390[(2)]);
var inst_11368 = (inst_11354 + (1));
var inst_11354__$1 = inst_11368;
var state_11390__$1 = (function (){var statearr_11405 = state_11390;
(statearr_11405[(7)] = inst_11354__$1);

(statearr_11405[(10)] = inst_11367);

return statearr_11405;
})();
var statearr_11406_11436 = state_11390__$1;
(statearr_11406_11436[(2)] = null);

(statearr_11406_11436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (5))){
var inst_11374 = (state_11390[(2)]);
var state_11390__$1 = (function (){var statearr_11407 = state_11390;
(statearr_11407[(11)] = inst_11374);

return statearr_11407;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11390__$1,(12),dchan);
} else {
if((state_val_11391 === (14))){
var inst_11376 = (state_11390[(8)]);
var inst_11381 = cljs.core.apply.call(null,f,inst_11376);
var state_11390__$1 = state_11390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11390__$1,(16),out,inst_11381);
} else {
if((state_val_11391 === (16))){
var inst_11383 = (state_11390[(2)]);
var state_11390__$1 = (function (){var statearr_11408 = state_11390;
(statearr_11408[(12)] = inst_11383);

return statearr_11408;
})();
var statearr_11409_11437 = state_11390__$1;
(statearr_11409_11437[(2)] = null);

(statearr_11409_11437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (10))){
var inst_11358 = (state_11390[(2)]);
var inst_11359 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11390__$1 = (function (){var statearr_11410 = state_11390;
(statearr_11410[(13)] = inst_11358);

return statearr_11410;
})();
var statearr_11411_11438 = state_11390__$1;
(statearr_11411_11438[(2)] = inst_11359);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11390__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11391 === (8))){
var inst_11372 = (state_11390[(2)]);
var state_11390__$1 = state_11390;
var statearr_11412_11439 = state_11390__$1;
(statearr_11412_11439[(2)] = inst_11372);

(statearr_11412_11439[(1)] = (5));


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
});})(c__9355__auto___11424,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9243__auto__,c__9355__auto___11424,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9244__auto__ = null;
var cljs$core$async$state_machine__9244__auto____0 = (function (){
var statearr_11416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11416[(0)] = cljs$core$async$state_machine__9244__auto__);

(statearr_11416[(1)] = (1));

return statearr_11416;
});
var cljs$core$async$state_machine__9244__auto____1 = (function (state_11390){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_11390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e11417){if((e11417 instanceof Object)){
var ex__9247__auto__ = e11417;
var statearr_11418_11440 = state_11390;
(statearr_11418_11440[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11441 = state_11390;
state_11390 = G__11441;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$state_machine__9244__auto__ = function(state_11390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9244__auto____1.call(this,state_11390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9244__auto____0;
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9244__auto____1;
return cljs$core$async$state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___11424,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9357__auto__ = (function (){var statearr_11419 = f__9356__auto__.call(null);
(statearr_11419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___11424);

return statearr_11419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___11424,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args11443 = [];
var len__7484__auto___11501 = arguments.length;
var i__7485__auto___11502 = (0);
while(true){
if((i__7485__auto___11502 < len__7484__auto___11501)){
args11443.push((arguments[i__7485__auto___11502]));

var G__11503 = (i__7485__auto___11502 + (1));
i__7485__auto___11502 = G__11503;
continue;
} else {
}
break;
}

var G__11445 = args11443.length;
switch (G__11445) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11443.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9355__auto___11505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___11505,out){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___11505,out){
return (function (state_11477){
var state_val_11478 = (state_11477[(1)]);
if((state_val_11478 === (7))){
var inst_11456 = (state_11477[(7)]);
var inst_11457 = (state_11477[(8)]);
var inst_11456__$1 = (state_11477[(2)]);
var inst_11457__$1 = cljs.core.nth.call(null,inst_11456__$1,(0),null);
var inst_11458 = cljs.core.nth.call(null,inst_11456__$1,(1),null);
var inst_11459 = (inst_11457__$1 == null);
var state_11477__$1 = (function (){var statearr_11479 = state_11477;
(statearr_11479[(9)] = inst_11458);

(statearr_11479[(7)] = inst_11456__$1);

(statearr_11479[(8)] = inst_11457__$1);

return statearr_11479;
})();
if(cljs.core.truth_(inst_11459)){
var statearr_11480_11506 = state_11477__$1;
(statearr_11480_11506[(1)] = (8));

} else {
var statearr_11481_11507 = state_11477__$1;
(statearr_11481_11507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11478 === (1))){
var inst_11446 = cljs.core.vec.call(null,chs);
var inst_11447 = inst_11446;
var state_11477__$1 = (function (){var statearr_11482 = state_11477;
(statearr_11482[(10)] = inst_11447);

return statearr_11482;
})();
var statearr_11483_11508 = state_11477__$1;
(statearr_11483_11508[(2)] = null);

(statearr_11483_11508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11478 === (4))){
var inst_11447 = (state_11477[(10)]);
var state_11477__$1 = state_11477;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11477__$1,(7),inst_11447);
} else {
if((state_val_11478 === (6))){
var inst_11473 = (state_11477[(2)]);
var state_11477__$1 = state_11477;
var statearr_11484_11509 = state_11477__$1;
(statearr_11484_11509[(2)] = inst_11473);

(statearr_11484_11509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11478 === (3))){
var inst_11475 = (state_11477[(2)]);
var state_11477__$1 = state_11477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11477__$1,inst_11475);
} else {
if((state_val_11478 === (2))){
var inst_11447 = (state_11477[(10)]);
var inst_11449 = cljs.core.count.call(null,inst_11447);
var inst_11450 = (inst_11449 > (0));
var state_11477__$1 = state_11477;
if(cljs.core.truth_(inst_11450)){
var statearr_11486_11510 = state_11477__$1;
(statearr_11486_11510[(1)] = (4));

} else {
var statearr_11487_11511 = state_11477__$1;
(statearr_11487_11511[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11478 === (11))){
var inst_11447 = (state_11477[(10)]);
var inst_11466 = (state_11477[(2)]);
var tmp11485 = inst_11447;
var inst_11447__$1 = tmp11485;
var state_11477__$1 = (function (){var statearr_11488 = state_11477;
(statearr_11488[(10)] = inst_11447__$1);

(statearr_11488[(11)] = inst_11466);

return statearr_11488;
})();
var statearr_11489_11512 = state_11477__$1;
(statearr_11489_11512[(2)] = null);

(statearr_11489_11512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11478 === (9))){
var inst_11457 = (state_11477[(8)]);
var state_11477__$1 = state_11477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11477__$1,(11),out,inst_11457);
} else {
if((state_val_11478 === (5))){
var inst_11471 = cljs.core.async.close_BANG_.call(null,out);
var state_11477__$1 = state_11477;
var statearr_11490_11513 = state_11477__$1;
(statearr_11490_11513[(2)] = inst_11471);

(statearr_11490_11513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11478 === (10))){
var inst_11469 = (state_11477[(2)]);
var state_11477__$1 = state_11477;
var statearr_11491_11514 = state_11477__$1;
(statearr_11491_11514[(2)] = inst_11469);

(statearr_11491_11514[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11478 === (8))){
var inst_11447 = (state_11477[(10)]);
var inst_11458 = (state_11477[(9)]);
var inst_11456 = (state_11477[(7)]);
var inst_11457 = (state_11477[(8)]);
var inst_11461 = (function (){var cs = inst_11447;
var vec__11452 = inst_11456;
var v = inst_11457;
var c = inst_11458;
return ((function (cs,vec__11452,v,c,inst_11447,inst_11458,inst_11456,inst_11457,state_val_11478,c__9355__auto___11505,out){
return (function (p1__11442_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11442_SHARP_);
});
;})(cs,vec__11452,v,c,inst_11447,inst_11458,inst_11456,inst_11457,state_val_11478,c__9355__auto___11505,out))
})();
var inst_11462 = cljs.core.filterv.call(null,inst_11461,inst_11447);
var inst_11447__$1 = inst_11462;
var state_11477__$1 = (function (){var statearr_11492 = state_11477;
(statearr_11492[(10)] = inst_11447__$1);

return statearr_11492;
})();
var statearr_11493_11515 = state_11477__$1;
(statearr_11493_11515[(2)] = null);

(statearr_11493_11515[(1)] = (2));


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
});})(c__9355__auto___11505,out))
;
return ((function (switch__9243__auto__,c__9355__auto___11505,out){
return (function() {
var cljs$core$async$state_machine__9244__auto__ = null;
var cljs$core$async$state_machine__9244__auto____0 = (function (){
var statearr_11497 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11497[(0)] = cljs$core$async$state_machine__9244__auto__);

(statearr_11497[(1)] = (1));

return statearr_11497;
});
var cljs$core$async$state_machine__9244__auto____1 = (function (state_11477){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_11477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e11498){if((e11498 instanceof Object)){
var ex__9247__auto__ = e11498;
var statearr_11499_11516 = state_11477;
(statearr_11499_11516[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11517 = state_11477;
state_11477 = G__11517;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$state_machine__9244__auto__ = function(state_11477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9244__auto____1.call(this,state_11477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9244__auto____0;
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9244__auto____1;
return cljs$core$async$state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___11505,out))
})();
var state__9357__auto__ = (function (){var statearr_11500 = f__9356__auto__.call(null);
(statearr_11500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___11505);

return statearr_11500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___11505,out))
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
var args11518 = [];
var len__7484__auto___11567 = arguments.length;
var i__7485__auto___11568 = (0);
while(true){
if((i__7485__auto___11568 < len__7484__auto___11567)){
args11518.push((arguments[i__7485__auto___11568]));

var G__11569 = (i__7485__auto___11568 + (1));
i__7485__auto___11568 = G__11569;
continue;
} else {
}
break;
}

var G__11520 = args11518.length;
switch (G__11520) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11518.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9355__auto___11571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___11571,out){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___11571,out){
return (function (state_11544){
var state_val_11545 = (state_11544[(1)]);
if((state_val_11545 === (7))){
var inst_11526 = (state_11544[(7)]);
var inst_11526__$1 = (state_11544[(2)]);
var inst_11527 = (inst_11526__$1 == null);
var inst_11528 = cljs.core.not.call(null,inst_11527);
var state_11544__$1 = (function (){var statearr_11546 = state_11544;
(statearr_11546[(7)] = inst_11526__$1);

return statearr_11546;
})();
if(inst_11528){
var statearr_11547_11572 = state_11544__$1;
(statearr_11547_11572[(1)] = (8));

} else {
var statearr_11548_11573 = state_11544__$1;
(statearr_11548_11573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11545 === (1))){
var inst_11521 = (0);
var state_11544__$1 = (function (){var statearr_11549 = state_11544;
(statearr_11549[(8)] = inst_11521);

return statearr_11549;
})();
var statearr_11550_11574 = state_11544__$1;
(statearr_11550_11574[(2)] = null);

(statearr_11550_11574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11545 === (4))){
var state_11544__$1 = state_11544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11544__$1,(7),ch);
} else {
if((state_val_11545 === (6))){
var inst_11539 = (state_11544[(2)]);
var state_11544__$1 = state_11544;
var statearr_11551_11575 = state_11544__$1;
(statearr_11551_11575[(2)] = inst_11539);

(statearr_11551_11575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11545 === (3))){
var inst_11541 = (state_11544[(2)]);
var inst_11542 = cljs.core.async.close_BANG_.call(null,out);
var state_11544__$1 = (function (){var statearr_11552 = state_11544;
(statearr_11552[(9)] = inst_11541);

return statearr_11552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11544__$1,inst_11542);
} else {
if((state_val_11545 === (2))){
var inst_11521 = (state_11544[(8)]);
var inst_11523 = (inst_11521 < n);
var state_11544__$1 = state_11544;
if(cljs.core.truth_(inst_11523)){
var statearr_11553_11576 = state_11544__$1;
(statearr_11553_11576[(1)] = (4));

} else {
var statearr_11554_11577 = state_11544__$1;
(statearr_11554_11577[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11545 === (11))){
var inst_11521 = (state_11544[(8)]);
var inst_11531 = (state_11544[(2)]);
var inst_11532 = (inst_11521 + (1));
var inst_11521__$1 = inst_11532;
var state_11544__$1 = (function (){var statearr_11555 = state_11544;
(statearr_11555[(8)] = inst_11521__$1);

(statearr_11555[(10)] = inst_11531);

return statearr_11555;
})();
var statearr_11556_11578 = state_11544__$1;
(statearr_11556_11578[(2)] = null);

(statearr_11556_11578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11545 === (9))){
var state_11544__$1 = state_11544;
var statearr_11557_11579 = state_11544__$1;
(statearr_11557_11579[(2)] = null);

(statearr_11557_11579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11545 === (5))){
var state_11544__$1 = state_11544;
var statearr_11558_11580 = state_11544__$1;
(statearr_11558_11580[(2)] = null);

(statearr_11558_11580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11545 === (10))){
var inst_11536 = (state_11544[(2)]);
var state_11544__$1 = state_11544;
var statearr_11559_11581 = state_11544__$1;
(statearr_11559_11581[(2)] = inst_11536);

(statearr_11559_11581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11545 === (8))){
var inst_11526 = (state_11544[(7)]);
var state_11544__$1 = state_11544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11544__$1,(11),out,inst_11526);
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
});})(c__9355__auto___11571,out))
;
return ((function (switch__9243__auto__,c__9355__auto___11571,out){
return (function() {
var cljs$core$async$state_machine__9244__auto__ = null;
var cljs$core$async$state_machine__9244__auto____0 = (function (){
var statearr_11563 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11563[(0)] = cljs$core$async$state_machine__9244__auto__);

(statearr_11563[(1)] = (1));

return statearr_11563;
});
var cljs$core$async$state_machine__9244__auto____1 = (function (state_11544){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_11544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e11564){if((e11564 instanceof Object)){
var ex__9247__auto__ = e11564;
var statearr_11565_11582 = state_11544;
(statearr_11565_11582[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11583 = state_11544;
state_11544 = G__11583;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$state_machine__9244__auto__ = function(state_11544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9244__auto____1.call(this,state_11544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9244__auto____0;
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9244__auto____1;
return cljs$core$async$state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___11571,out))
})();
var state__9357__auto__ = (function (){var statearr_11566 = f__9356__auto__.call(null);
(statearr_11566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___11571);

return statearr_11566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___11571,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11591 = (function (map_LT_,f,ch,meta11592){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11592 = meta11592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11593,meta11592__$1){
var self__ = this;
var _11593__$1 = this;
return (new cljs.core.async.t_cljs$core$async11591(self__.map_LT_,self__.f,self__.ch,meta11592__$1));
});

cljs.core.async.t_cljs$core$async11591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11593){
var self__ = this;
var _11593__$1 = this;
return self__.meta11592;
});

cljs.core.async.t_cljs$core$async11591.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11591.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11591.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11594 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11594 = (function (map_LT_,f,ch,meta11592,_,fn1,meta11595){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11592 = meta11592;
this._ = _;
this.fn1 = fn1;
this.meta11595 = meta11595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11596,meta11595__$1){
var self__ = this;
var _11596__$1 = this;
return (new cljs.core.async.t_cljs$core$async11594(self__.map_LT_,self__.f,self__.ch,self__.meta11592,self__._,self__.fn1,meta11595__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11596){
var self__ = this;
var _11596__$1 = this;
return self__.meta11595;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11594.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11594.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11594.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11594.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11584_SHARP_){
return f1.call(null,(((p1__11584_SHARP_ == null))?null:self__.f.call(null,p1__11584_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11594.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11592","meta11592",1279807411,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11591","cljs.core.async/t_cljs$core$async11591",744838463,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11595","meta11595",-571501425,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11594.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11594";

cljs.core.async.t_cljs$core$async11594.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async11594");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11594 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11594(map_LT___$1,f__$1,ch__$1,meta11592__$1,___$2,fn1__$1,meta11595){
return (new cljs.core.async.t_cljs$core$async11594(map_LT___$1,f__$1,ch__$1,meta11592__$1,___$2,fn1__$1,meta11595));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11594(self__.map_LT_,self__.f,self__.ch,self__.meta11592,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6397__auto__ = ret;
if(cljs.core.truth_(and__6397__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6397__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11591.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11592","meta11592",1279807411,null)], null);
});

cljs.core.async.t_cljs$core$async11591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11591";

cljs.core.async.t_cljs$core$async11591.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async11591");
});

cljs.core.async.__GT_t_cljs$core$async11591 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11591(map_LT___$1,f__$1,ch__$1,meta11592){
return (new cljs.core.async.t_cljs$core$async11591(map_LT___$1,f__$1,ch__$1,meta11592));
});

}

return (new cljs.core.async.t_cljs$core$async11591(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11600 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11600 = (function (map_GT_,f,ch,meta11601){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta11601 = meta11601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11602,meta11601__$1){
var self__ = this;
var _11602__$1 = this;
return (new cljs.core.async.t_cljs$core$async11600(self__.map_GT_,self__.f,self__.ch,meta11601__$1));
});

cljs.core.async.t_cljs$core$async11600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11602){
var self__ = this;
var _11602__$1 = this;
return self__.meta11601;
});

cljs.core.async.t_cljs$core$async11600.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11600.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11600.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11600.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11600.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11600.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11601","meta11601",12725965,null)], null);
});

cljs.core.async.t_cljs$core$async11600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11600";

cljs.core.async.t_cljs$core$async11600.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async11600");
});

cljs.core.async.__GT_t_cljs$core$async11600 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11600(map_GT___$1,f__$1,ch__$1,meta11601){
return (new cljs.core.async.t_cljs$core$async11600(map_GT___$1,f__$1,ch__$1,meta11601));
});

}

return (new cljs.core.async.t_cljs$core$async11600(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11606 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11606 = (function (filter_GT_,p,ch,meta11607){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta11607 = meta11607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11608,meta11607__$1){
var self__ = this;
var _11608__$1 = this;
return (new cljs.core.async.t_cljs$core$async11606(self__.filter_GT_,self__.p,self__.ch,meta11607__$1));
});

cljs.core.async.t_cljs$core$async11606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11608){
var self__ = this;
var _11608__$1 = this;
return self__.meta11607;
});

cljs.core.async.t_cljs$core$async11606.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11606.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11606.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11606.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11606.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11606.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11606.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11607","meta11607",301414183,null)], null);
});

cljs.core.async.t_cljs$core$async11606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11606";

cljs.core.async.t_cljs$core$async11606.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write.call(null,writer__7016__auto__,"cljs.core.async/t_cljs$core$async11606");
});

cljs.core.async.__GT_t_cljs$core$async11606 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11606(filter_GT___$1,p__$1,ch__$1,meta11607){
return (new cljs.core.async.t_cljs$core$async11606(filter_GT___$1,p__$1,ch__$1,meta11607));
});

}

return (new cljs.core.async.t_cljs$core$async11606(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args11609 = [];
var len__7484__auto___11653 = arguments.length;
var i__7485__auto___11654 = (0);
while(true){
if((i__7485__auto___11654 < len__7484__auto___11653)){
args11609.push((arguments[i__7485__auto___11654]));

var G__11655 = (i__7485__auto___11654 + (1));
i__7485__auto___11654 = G__11655;
continue;
} else {
}
break;
}

var G__11611 = args11609.length;
switch (G__11611) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11609.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9355__auto___11657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___11657,out){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___11657,out){
return (function (state_11632){
var state_val_11633 = (state_11632[(1)]);
if((state_val_11633 === (7))){
var inst_11628 = (state_11632[(2)]);
var state_11632__$1 = state_11632;
var statearr_11634_11658 = state_11632__$1;
(statearr_11634_11658[(2)] = inst_11628);

(statearr_11634_11658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11633 === (1))){
var state_11632__$1 = state_11632;
var statearr_11635_11659 = state_11632__$1;
(statearr_11635_11659[(2)] = null);

(statearr_11635_11659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11633 === (4))){
var inst_11614 = (state_11632[(7)]);
var inst_11614__$1 = (state_11632[(2)]);
var inst_11615 = (inst_11614__$1 == null);
var state_11632__$1 = (function (){var statearr_11636 = state_11632;
(statearr_11636[(7)] = inst_11614__$1);

return statearr_11636;
})();
if(cljs.core.truth_(inst_11615)){
var statearr_11637_11660 = state_11632__$1;
(statearr_11637_11660[(1)] = (5));

} else {
var statearr_11638_11661 = state_11632__$1;
(statearr_11638_11661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11633 === (6))){
var inst_11614 = (state_11632[(7)]);
var inst_11619 = p.call(null,inst_11614);
var state_11632__$1 = state_11632;
if(cljs.core.truth_(inst_11619)){
var statearr_11639_11662 = state_11632__$1;
(statearr_11639_11662[(1)] = (8));

} else {
var statearr_11640_11663 = state_11632__$1;
(statearr_11640_11663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11633 === (3))){
var inst_11630 = (state_11632[(2)]);
var state_11632__$1 = state_11632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11632__$1,inst_11630);
} else {
if((state_val_11633 === (2))){
var state_11632__$1 = state_11632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11632__$1,(4),ch);
} else {
if((state_val_11633 === (11))){
var inst_11622 = (state_11632[(2)]);
var state_11632__$1 = state_11632;
var statearr_11641_11664 = state_11632__$1;
(statearr_11641_11664[(2)] = inst_11622);

(statearr_11641_11664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11633 === (9))){
var state_11632__$1 = state_11632;
var statearr_11642_11665 = state_11632__$1;
(statearr_11642_11665[(2)] = null);

(statearr_11642_11665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11633 === (5))){
var inst_11617 = cljs.core.async.close_BANG_.call(null,out);
var state_11632__$1 = state_11632;
var statearr_11643_11666 = state_11632__$1;
(statearr_11643_11666[(2)] = inst_11617);

(statearr_11643_11666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11633 === (10))){
var inst_11625 = (state_11632[(2)]);
var state_11632__$1 = (function (){var statearr_11644 = state_11632;
(statearr_11644[(8)] = inst_11625);

return statearr_11644;
})();
var statearr_11645_11667 = state_11632__$1;
(statearr_11645_11667[(2)] = null);

(statearr_11645_11667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11633 === (8))){
var inst_11614 = (state_11632[(7)]);
var state_11632__$1 = state_11632;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11632__$1,(11),out,inst_11614);
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
});})(c__9355__auto___11657,out))
;
return ((function (switch__9243__auto__,c__9355__auto___11657,out){
return (function() {
var cljs$core$async$state_machine__9244__auto__ = null;
var cljs$core$async$state_machine__9244__auto____0 = (function (){
var statearr_11649 = [null,null,null,null,null,null,null,null,null];
(statearr_11649[(0)] = cljs$core$async$state_machine__9244__auto__);

(statearr_11649[(1)] = (1));

return statearr_11649;
});
var cljs$core$async$state_machine__9244__auto____1 = (function (state_11632){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_11632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e11650){if((e11650 instanceof Object)){
var ex__9247__auto__ = e11650;
var statearr_11651_11668 = state_11632;
(statearr_11651_11668[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11669 = state_11632;
state_11632 = G__11669;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$state_machine__9244__auto__ = function(state_11632){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9244__auto____1.call(this,state_11632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9244__auto____0;
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9244__auto____1;
return cljs$core$async$state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___11657,out))
})();
var state__9357__auto__ = (function (){var statearr_11652 = f__9356__auto__.call(null);
(statearr_11652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___11657);

return statearr_11652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___11657,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args11670 = [];
var len__7484__auto___11673 = arguments.length;
var i__7485__auto___11674 = (0);
while(true){
if((i__7485__auto___11674 < len__7484__auto___11673)){
args11670.push((arguments[i__7485__auto___11674]));

var G__11675 = (i__7485__auto___11674 + (1));
i__7485__auto___11674 = G__11675;
continue;
} else {
}
break;
}

var G__11672 = args11670.length;
switch (G__11672) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11670.length)].join('')));

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
var c__9355__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto__){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto__){
return (function (state_11842){
var state_val_11843 = (state_11842[(1)]);
if((state_val_11843 === (7))){
var inst_11838 = (state_11842[(2)]);
var state_11842__$1 = state_11842;
var statearr_11844_11885 = state_11842__$1;
(statearr_11844_11885[(2)] = inst_11838);

(statearr_11844_11885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (20))){
var inst_11808 = (state_11842[(7)]);
var inst_11819 = (state_11842[(2)]);
var inst_11820 = cljs.core.next.call(null,inst_11808);
var inst_11794 = inst_11820;
var inst_11795 = null;
var inst_11796 = (0);
var inst_11797 = (0);
var state_11842__$1 = (function (){var statearr_11845 = state_11842;
(statearr_11845[(8)] = inst_11795);

(statearr_11845[(9)] = inst_11794);

(statearr_11845[(10)] = inst_11797);

(statearr_11845[(11)] = inst_11796);

(statearr_11845[(12)] = inst_11819);

return statearr_11845;
})();
var statearr_11846_11886 = state_11842__$1;
(statearr_11846_11886[(2)] = null);

(statearr_11846_11886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (1))){
var state_11842__$1 = state_11842;
var statearr_11847_11887 = state_11842__$1;
(statearr_11847_11887[(2)] = null);

(statearr_11847_11887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (4))){
var inst_11783 = (state_11842[(13)]);
var inst_11783__$1 = (state_11842[(2)]);
var inst_11784 = (inst_11783__$1 == null);
var state_11842__$1 = (function (){var statearr_11848 = state_11842;
(statearr_11848[(13)] = inst_11783__$1);

return statearr_11848;
})();
if(cljs.core.truth_(inst_11784)){
var statearr_11849_11888 = state_11842__$1;
(statearr_11849_11888[(1)] = (5));

} else {
var statearr_11850_11889 = state_11842__$1;
(statearr_11850_11889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (15))){
var state_11842__$1 = state_11842;
var statearr_11854_11890 = state_11842__$1;
(statearr_11854_11890[(2)] = null);

(statearr_11854_11890[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (21))){
var state_11842__$1 = state_11842;
var statearr_11855_11891 = state_11842__$1;
(statearr_11855_11891[(2)] = null);

(statearr_11855_11891[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (13))){
var inst_11795 = (state_11842[(8)]);
var inst_11794 = (state_11842[(9)]);
var inst_11797 = (state_11842[(10)]);
var inst_11796 = (state_11842[(11)]);
var inst_11804 = (state_11842[(2)]);
var inst_11805 = (inst_11797 + (1));
var tmp11851 = inst_11795;
var tmp11852 = inst_11794;
var tmp11853 = inst_11796;
var inst_11794__$1 = tmp11852;
var inst_11795__$1 = tmp11851;
var inst_11796__$1 = tmp11853;
var inst_11797__$1 = inst_11805;
var state_11842__$1 = (function (){var statearr_11856 = state_11842;
(statearr_11856[(8)] = inst_11795__$1);

(statearr_11856[(9)] = inst_11794__$1);

(statearr_11856[(10)] = inst_11797__$1);

(statearr_11856[(11)] = inst_11796__$1);

(statearr_11856[(14)] = inst_11804);

return statearr_11856;
})();
var statearr_11857_11892 = state_11842__$1;
(statearr_11857_11892[(2)] = null);

(statearr_11857_11892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (22))){
var state_11842__$1 = state_11842;
var statearr_11858_11893 = state_11842__$1;
(statearr_11858_11893[(2)] = null);

(statearr_11858_11893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (6))){
var inst_11783 = (state_11842[(13)]);
var inst_11792 = f.call(null,inst_11783);
var inst_11793 = cljs.core.seq.call(null,inst_11792);
var inst_11794 = inst_11793;
var inst_11795 = null;
var inst_11796 = (0);
var inst_11797 = (0);
var state_11842__$1 = (function (){var statearr_11859 = state_11842;
(statearr_11859[(8)] = inst_11795);

(statearr_11859[(9)] = inst_11794);

(statearr_11859[(10)] = inst_11797);

(statearr_11859[(11)] = inst_11796);

return statearr_11859;
})();
var statearr_11860_11894 = state_11842__$1;
(statearr_11860_11894[(2)] = null);

(statearr_11860_11894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (17))){
var inst_11808 = (state_11842[(7)]);
var inst_11812 = cljs.core.chunk_first.call(null,inst_11808);
var inst_11813 = cljs.core.chunk_rest.call(null,inst_11808);
var inst_11814 = cljs.core.count.call(null,inst_11812);
var inst_11794 = inst_11813;
var inst_11795 = inst_11812;
var inst_11796 = inst_11814;
var inst_11797 = (0);
var state_11842__$1 = (function (){var statearr_11861 = state_11842;
(statearr_11861[(8)] = inst_11795);

(statearr_11861[(9)] = inst_11794);

(statearr_11861[(10)] = inst_11797);

(statearr_11861[(11)] = inst_11796);

return statearr_11861;
})();
var statearr_11862_11895 = state_11842__$1;
(statearr_11862_11895[(2)] = null);

(statearr_11862_11895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (3))){
var inst_11840 = (state_11842[(2)]);
var state_11842__$1 = state_11842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11842__$1,inst_11840);
} else {
if((state_val_11843 === (12))){
var inst_11828 = (state_11842[(2)]);
var state_11842__$1 = state_11842;
var statearr_11863_11896 = state_11842__$1;
(statearr_11863_11896[(2)] = inst_11828);

(statearr_11863_11896[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (2))){
var state_11842__$1 = state_11842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11842__$1,(4),in$);
} else {
if((state_val_11843 === (23))){
var inst_11836 = (state_11842[(2)]);
var state_11842__$1 = state_11842;
var statearr_11864_11897 = state_11842__$1;
(statearr_11864_11897[(2)] = inst_11836);

(statearr_11864_11897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (19))){
var inst_11823 = (state_11842[(2)]);
var state_11842__$1 = state_11842;
var statearr_11865_11898 = state_11842__$1;
(statearr_11865_11898[(2)] = inst_11823);

(statearr_11865_11898[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (11))){
var inst_11794 = (state_11842[(9)]);
var inst_11808 = (state_11842[(7)]);
var inst_11808__$1 = cljs.core.seq.call(null,inst_11794);
var state_11842__$1 = (function (){var statearr_11866 = state_11842;
(statearr_11866[(7)] = inst_11808__$1);

return statearr_11866;
})();
if(inst_11808__$1){
var statearr_11867_11899 = state_11842__$1;
(statearr_11867_11899[(1)] = (14));

} else {
var statearr_11868_11900 = state_11842__$1;
(statearr_11868_11900[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (9))){
var inst_11830 = (state_11842[(2)]);
var inst_11831 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11842__$1 = (function (){var statearr_11869 = state_11842;
(statearr_11869[(15)] = inst_11830);

return statearr_11869;
})();
if(cljs.core.truth_(inst_11831)){
var statearr_11870_11901 = state_11842__$1;
(statearr_11870_11901[(1)] = (21));

} else {
var statearr_11871_11902 = state_11842__$1;
(statearr_11871_11902[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (5))){
var inst_11786 = cljs.core.async.close_BANG_.call(null,out);
var state_11842__$1 = state_11842;
var statearr_11872_11903 = state_11842__$1;
(statearr_11872_11903[(2)] = inst_11786);

(statearr_11872_11903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (14))){
var inst_11808 = (state_11842[(7)]);
var inst_11810 = cljs.core.chunked_seq_QMARK_.call(null,inst_11808);
var state_11842__$1 = state_11842;
if(inst_11810){
var statearr_11873_11904 = state_11842__$1;
(statearr_11873_11904[(1)] = (17));

} else {
var statearr_11874_11905 = state_11842__$1;
(statearr_11874_11905[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (16))){
var inst_11826 = (state_11842[(2)]);
var state_11842__$1 = state_11842;
var statearr_11875_11906 = state_11842__$1;
(statearr_11875_11906[(2)] = inst_11826);

(statearr_11875_11906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11843 === (10))){
var inst_11795 = (state_11842[(8)]);
var inst_11797 = (state_11842[(10)]);
var inst_11802 = cljs.core._nth.call(null,inst_11795,inst_11797);
var state_11842__$1 = state_11842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11842__$1,(13),out,inst_11802);
} else {
if((state_val_11843 === (18))){
var inst_11808 = (state_11842[(7)]);
var inst_11817 = cljs.core.first.call(null,inst_11808);
var state_11842__$1 = state_11842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11842__$1,(20),out,inst_11817);
} else {
if((state_val_11843 === (8))){
var inst_11797 = (state_11842[(10)]);
var inst_11796 = (state_11842[(11)]);
var inst_11799 = (inst_11797 < inst_11796);
var inst_11800 = inst_11799;
var state_11842__$1 = state_11842;
if(cljs.core.truth_(inst_11800)){
var statearr_11876_11907 = state_11842__$1;
(statearr_11876_11907[(1)] = (10));

} else {
var statearr_11877_11908 = state_11842__$1;
(statearr_11877_11908[(1)] = (11));

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
});})(c__9355__auto__))
;
return ((function (switch__9243__auto__,c__9355__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9244__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9244__auto____0 = (function (){
var statearr_11881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11881[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9244__auto__);

(statearr_11881[(1)] = (1));

return statearr_11881;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9244__auto____1 = (function (state_11842){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_11842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e11882){if((e11882 instanceof Object)){
var ex__9247__auto__ = e11882;
var statearr_11883_11909 = state_11842;
(statearr_11883_11909[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11910 = state_11842;
state_11842 = G__11910;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9244__auto__ = function(state_11842){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9244__auto____1.call(this,state_11842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9244__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9244__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto__))
})();
var state__9357__auto__ = (function (){var statearr_11884 = f__9356__auto__.call(null);
(statearr_11884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto__);

return statearr_11884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto__))
);

return c__9355__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11911 = [];
var len__7484__auto___11914 = arguments.length;
var i__7485__auto___11915 = (0);
while(true){
if((i__7485__auto___11915 < len__7484__auto___11914)){
args11911.push((arguments[i__7485__auto___11915]));

var G__11916 = (i__7485__auto___11915 + (1));
i__7485__auto___11915 = G__11916;
continue;
} else {
}
break;
}

var G__11913 = args11911.length;
switch (G__11913) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11911.length)].join('')));

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
var args11918 = [];
var len__7484__auto___11921 = arguments.length;
var i__7485__auto___11922 = (0);
while(true){
if((i__7485__auto___11922 < len__7484__auto___11921)){
args11918.push((arguments[i__7485__auto___11922]));

var G__11923 = (i__7485__auto___11922 + (1));
i__7485__auto___11922 = G__11923;
continue;
} else {
}
break;
}

var G__11920 = args11918.length;
switch (G__11920) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11918.length)].join('')));

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
var args11925 = [];
var len__7484__auto___11976 = arguments.length;
var i__7485__auto___11977 = (0);
while(true){
if((i__7485__auto___11977 < len__7484__auto___11976)){
args11925.push((arguments[i__7485__auto___11977]));

var G__11978 = (i__7485__auto___11977 + (1));
i__7485__auto___11977 = G__11978;
continue;
} else {
}
break;
}

var G__11927 = args11925.length;
switch (G__11927) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11925.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9355__auto___11980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___11980,out){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___11980,out){
return (function (state_11951){
var state_val_11952 = (state_11951[(1)]);
if((state_val_11952 === (7))){
var inst_11946 = (state_11951[(2)]);
var state_11951__$1 = state_11951;
var statearr_11953_11981 = state_11951__$1;
(statearr_11953_11981[(2)] = inst_11946);

(statearr_11953_11981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11952 === (1))){
var inst_11928 = null;
var state_11951__$1 = (function (){var statearr_11954 = state_11951;
(statearr_11954[(7)] = inst_11928);

return statearr_11954;
})();
var statearr_11955_11982 = state_11951__$1;
(statearr_11955_11982[(2)] = null);

(statearr_11955_11982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11952 === (4))){
var inst_11931 = (state_11951[(8)]);
var inst_11931__$1 = (state_11951[(2)]);
var inst_11932 = (inst_11931__$1 == null);
var inst_11933 = cljs.core.not.call(null,inst_11932);
var state_11951__$1 = (function (){var statearr_11956 = state_11951;
(statearr_11956[(8)] = inst_11931__$1);

return statearr_11956;
})();
if(inst_11933){
var statearr_11957_11983 = state_11951__$1;
(statearr_11957_11983[(1)] = (5));

} else {
var statearr_11958_11984 = state_11951__$1;
(statearr_11958_11984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11952 === (6))){
var state_11951__$1 = state_11951;
var statearr_11959_11985 = state_11951__$1;
(statearr_11959_11985[(2)] = null);

(statearr_11959_11985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11952 === (3))){
var inst_11948 = (state_11951[(2)]);
var inst_11949 = cljs.core.async.close_BANG_.call(null,out);
var state_11951__$1 = (function (){var statearr_11960 = state_11951;
(statearr_11960[(9)] = inst_11948);

return statearr_11960;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11951__$1,inst_11949);
} else {
if((state_val_11952 === (2))){
var state_11951__$1 = state_11951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11951__$1,(4),ch);
} else {
if((state_val_11952 === (11))){
var inst_11931 = (state_11951[(8)]);
var inst_11940 = (state_11951[(2)]);
var inst_11928 = inst_11931;
var state_11951__$1 = (function (){var statearr_11961 = state_11951;
(statearr_11961[(10)] = inst_11940);

(statearr_11961[(7)] = inst_11928);

return statearr_11961;
})();
var statearr_11962_11986 = state_11951__$1;
(statearr_11962_11986[(2)] = null);

(statearr_11962_11986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11952 === (9))){
var inst_11931 = (state_11951[(8)]);
var state_11951__$1 = state_11951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11951__$1,(11),out,inst_11931);
} else {
if((state_val_11952 === (5))){
var inst_11928 = (state_11951[(7)]);
var inst_11931 = (state_11951[(8)]);
var inst_11935 = cljs.core._EQ_.call(null,inst_11931,inst_11928);
var state_11951__$1 = state_11951;
if(inst_11935){
var statearr_11964_11987 = state_11951__$1;
(statearr_11964_11987[(1)] = (8));

} else {
var statearr_11965_11988 = state_11951__$1;
(statearr_11965_11988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11952 === (10))){
var inst_11943 = (state_11951[(2)]);
var state_11951__$1 = state_11951;
var statearr_11966_11989 = state_11951__$1;
(statearr_11966_11989[(2)] = inst_11943);

(statearr_11966_11989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11952 === (8))){
var inst_11928 = (state_11951[(7)]);
var tmp11963 = inst_11928;
var inst_11928__$1 = tmp11963;
var state_11951__$1 = (function (){var statearr_11967 = state_11951;
(statearr_11967[(7)] = inst_11928__$1);

return statearr_11967;
})();
var statearr_11968_11990 = state_11951__$1;
(statearr_11968_11990[(2)] = null);

(statearr_11968_11990[(1)] = (2));


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
});})(c__9355__auto___11980,out))
;
return ((function (switch__9243__auto__,c__9355__auto___11980,out){
return (function() {
var cljs$core$async$state_machine__9244__auto__ = null;
var cljs$core$async$state_machine__9244__auto____0 = (function (){
var statearr_11972 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11972[(0)] = cljs$core$async$state_machine__9244__auto__);

(statearr_11972[(1)] = (1));

return statearr_11972;
});
var cljs$core$async$state_machine__9244__auto____1 = (function (state_11951){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_11951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e11973){if((e11973 instanceof Object)){
var ex__9247__auto__ = e11973;
var statearr_11974_11991 = state_11951;
(statearr_11974_11991[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11992 = state_11951;
state_11951 = G__11992;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$state_machine__9244__auto__ = function(state_11951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9244__auto____1.call(this,state_11951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9244__auto____0;
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9244__auto____1;
return cljs$core$async$state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___11980,out))
})();
var state__9357__auto__ = (function (){var statearr_11975 = f__9356__auto__.call(null);
(statearr_11975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___11980);

return statearr_11975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___11980,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11993 = [];
var len__7484__auto___12063 = arguments.length;
var i__7485__auto___12064 = (0);
while(true){
if((i__7485__auto___12064 < len__7484__auto___12063)){
args11993.push((arguments[i__7485__auto___12064]));

var G__12065 = (i__7485__auto___12064 + (1));
i__7485__auto___12064 = G__12065;
continue;
} else {
}
break;
}

var G__11995 = args11993.length;
switch (G__11995) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11993.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9355__auto___12067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___12067,out){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___12067,out){
return (function (state_12033){
var state_val_12034 = (state_12033[(1)]);
if((state_val_12034 === (7))){
var inst_12029 = (state_12033[(2)]);
var state_12033__$1 = state_12033;
var statearr_12035_12068 = state_12033__$1;
(statearr_12035_12068[(2)] = inst_12029);

(statearr_12035_12068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12034 === (1))){
var inst_11996 = (new Array(n));
var inst_11997 = inst_11996;
var inst_11998 = (0);
var state_12033__$1 = (function (){var statearr_12036 = state_12033;
(statearr_12036[(7)] = inst_11998);

(statearr_12036[(8)] = inst_11997);

return statearr_12036;
})();
var statearr_12037_12069 = state_12033__$1;
(statearr_12037_12069[(2)] = null);

(statearr_12037_12069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12034 === (4))){
var inst_12001 = (state_12033[(9)]);
var inst_12001__$1 = (state_12033[(2)]);
var inst_12002 = (inst_12001__$1 == null);
var inst_12003 = cljs.core.not.call(null,inst_12002);
var state_12033__$1 = (function (){var statearr_12038 = state_12033;
(statearr_12038[(9)] = inst_12001__$1);

return statearr_12038;
})();
if(inst_12003){
var statearr_12039_12070 = state_12033__$1;
(statearr_12039_12070[(1)] = (5));

} else {
var statearr_12040_12071 = state_12033__$1;
(statearr_12040_12071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12034 === (15))){
var inst_12023 = (state_12033[(2)]);
var state_12033__$1 = state_12033;
var statearr_12041_12072 = state_12033__$1;
(statearr_12041_12072[(2)] = inst_12023);

(statearr_12041_12072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12034 === (13))){
var state_12033__$1 = state_12033;
var statearr_12042_12073 = state_12033__$1;
(statearr_12042_12073[(2)] = null);

(statearr_12042_12073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12034 === (6))){
var inst_11998 = (state_12033[(7)]);
var inst_12019 = (inst_11998 > (0));
var state_12033__$1 = state_12033;
if(cljs.core.truth_(inst_12019)){
var statearr_12043_12074 = state_12033__$1;
(statearr_12043_12074[(1)] = (12));

} else {
var statearr_12044_12075 = state_12033__$1;
(statearr_12044_12075[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12034 === (3))){
var inst_12031 = (state_12033[(2)]);
var state_12033__$1 = state_12033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12033__$1,inst_12031);
} else {
if((state_val_12034 === (12))){
var inst_11997 = (state_12033[(8)]);
var inst_12021 = cljs.core.vec.call(null,inst_11997);
var state_12033__$1 = state_12033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12033__$1,(15),out,inst_12021);
} else {
if((state_val_12034 === (2))){
var state_12033__$1 = state_12033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12033__$1,(4),ch);
} else {
if((state_val_12034 === (11))){
var inst_12013 = (state_12033[(2)]);
var inst_12014 = (new Array(n));
var inst_11997 = inst_12014;
var inst_11998 = (0);
var state_12033__$1 = (function (){var statearr_12045 = state_12033;
(statearr_12045[(7)] = inst_11998);

(statearr_12045[(10)] = inst_12013);

(statearr_12045[(8)] = inst_11997);

return statearr_12045;
})();
var statearr_12046_12076 = state_12033__$1;
(statearr_12046_12076[(2)] = null);

(statearr_12046_12076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12034 === (9))){
var inst_11997 = (state_12033[(8)]);
var inst_12011 = cljs.core.vec.call(null,inst_11997);
var state_12033__$1 = state_12033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12033__$1,(11),out,inst_12011);
} else {
if((state_val_12034 === (5))){
var inst_11998 = (state_12033[(7)]);
var inst_11997 = (state_12033[(8)]);
var inst_12006 = (state_12033[(11)]);
var inst_12001 = (state_12033[(9)]);
var inst_12005 = (inst_11997[inst_11998] = inst_12001);
var inst_12006__$1 = (inst_11998 + (1));
var inst_12007 = (inst_12006__$1 < n);
var state_12033__$1 = (function (){var statearr_12047 = state_12033;
(statearr_12047[(11)] = inst_12006__$1);

(statearr_12047[(12)] = inst_12005);

return statearr_12047;
})();
if(cljs.core.truth_(inst_12007)){
var statearr_12048_12077 = state_12033__$1;
(statearr_12048_12077[(1)] = (8));

} else {
var statearr_12049_12078 = state_12033__$1;
(statearr_12049_12078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12034 === (14))){
var inst_12026 = (state_12033[(2)]);
var inst_12027 = cljs.core.async.close_BANG_.call(null,out);
var state_12033__$1 = (function (){var statearr_12051 = state_12033;
(statearr_12051[(13)] = inst_12026);

return statearr_12051;
})();
var statearr_12052_12079 = state_12033__$1;
(statearr_12052_12079[(2)] = inst_12027);

(statearr_12052_12079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12034 === (10))){
var inst_12017 = (state_12033[(2)]);
var state_12033__$1 = state_12033;
var statearr_12053_12080 = state_12033__$1;
(statearr_12053_12080[(2)] = inst_12017);

(statearr_12053_12080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12034 === (8))){
var inst_11997 = (state_12033[(8)]);
var inst_12006 = (state_12033[(11)]);
var tmp12050 = inst_11997;
var inst_11997__$1 = tmp12050;
var inst_11998 = inst_12006;
var state_12033__$1 = (function (){var statearr_12054 = state_12033;
(statearr_12054[(7)] = inst_11998);

(statearr_12054[(8)] = inst_11997__$1);

return statearr_12054;
})();
var statearr_12055_12081 = state_12033__$1;
(statearr_12055_12081[(2)] = null);

(statearr_12055_12081[(1)] = (2));


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
});})(c__9355__auto___12067,out))
;
return ((function (switch__9243__auto__,c__9355__auto___12067,out){
return (function() {
var cljs$core$async$state_machine__9244__auto__ = null;
var cljs$core$async$state_machine__9244__auto____0 = (function (){
var statearr_12059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12059[(0)] = cljs$core$async$state_machine__9244__auto__);

(statearr_12059[(1)] = (1));

return statearr_12059;
});
var cljs$core$async$state_machine__9244__auto____1 = (function (state_12033){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_12033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e12060){if((e12060 instanceof Object)){
var ex__9247__auto__ = e12060;
var statearr_12061_12082 = state_12033;
(statearr_12061_12082[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12083 = state_12033;
state_12033 = G__12083;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$state_machine__9244__auto__ = function(state_12033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9244__auto____1.call(this,state_12033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9244__auto____0;
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9244__auto____1;
return cljs$core$async$state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___12067,out))
})();
var state__9357__auto__ = (function (){var statearr_12062 = f__9356__auto__.call(null);
(statearr_12062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___12067);

return statearr_12062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___12067,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args12084 = [];
var len__7484__auto___12158 = arguments.length;
var i__7485__auto___12159 = (0);
while(true){
if((i__7485__auto___12159 < len__7484__auto___12158)){
args12084.push((arguments[i__7485__auto___12159]));

var G__12160 = (i__7485__auto___12159 + (1));
i__7485__auto___12159 = G__12160;
continue;
} else {
}
break;
}

var G__12086 = args12084.length;
switch (G__12086) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12084.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9355__auto___12162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___12162,out){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___12162,out){
return (function (state_12128){
var state_val_12129 = (state_12128[(1)]);
if((state_val_12129 === (7))){
var inst_12124 = (state_12128[(2)]);
var state_12128__$1 = state_12128;
var statearr_12130_12163 = state_12128__$1;
(statearr_12130_12163[(2)] = inst_12124);

(statearr_12130_12163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (1))){
var inst_12087 = [];
var inst_12088 = inst_12087;
var inst_12089 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12128__$1 = (function (){var statearr_12131 = state_12128;
(statearr_12131[(7)] = inst_12089);

(statearr_12131[(8)] = inst_12088);

return statearr_12131;
})();
var statearr_12132_12164 = state_12128__$1;
(statearr_12132_12164[(2)] = null);

(statearr_12132_12164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (4))){
var inst_12092 = (state_12128[(9)]);
var inst_12092__$1 = (state_12128[(2)]);
var inst_12093 = (inst_12092__$1 == null);
var inst_12094 = cljs.core.not.call(null,inst_12093);
var state_12128__$1 = (function (){var statearr_12133 = state_12128;
(statearr_12133[(9)] = inst_12092__$1);

return statearr_12133;
})();
if(inst_12094){
var statearr_12134_12165 = state_12128__$1;
(statearr_12134_12165[(1)] = (5));

} else {
var statearr_12135_12166 = state_12128__$1;
(statearr_12135_12166[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (15))){
var inst_12118 = (state_12128[(2)]);
var state_12128__$1 = state_12128;
var statearr_12136_12167 = state_12128__$1;
(statearr_12136_12167[(2)] = inst_12118);

(statearr_12136_12167[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (13))){
var state_12128__$1 = state_12128;
var statearr_12137_12168 = state_12128__$1;
(statearr_12137_12168[(2)] = null);

(statearr_12137_12168[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (6))){
var inst_12088 = (state_12128[(8)]);
var inst_12113 = inst_12088.length;
var inst_12114 = (inst_12113 > (0));
var state_12128__$1 = state_12128;
if(cljs.core.truth_(inst_12114)){
var statearr_12138_12169 = state_12128__$1;
(statearr_12138_12169[(1)] = (12));

} else {
var statearr_12139_12170 = state_12128__$1;
(statearr_12139_12170[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (3))){
var inst_12126 = (state_12128[(2)]);
var state_12128__$1 = state_12128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12128__$1,inst_12126);
} else {
if((state_val_12129 === (12))){
var inst_12088 = (state_12128[(8)]);
var inst_12116 = cljs.core.vec.call(null,inst_12088);
var state_12128__$1 = state_12128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12128__$1,(15),out,inst_12116);
} else {
if((state_val_12129 === (2))){
var state_12128__$1 = state_12128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12128__$1,(4),ch);
} else {
if((state_val_12129 === (11))){
var inst_12096 = (state_12128[(10)]);
var inst_12092 = (state_12128[(9)]);
var inst_12106 = (state_12128[(2)]);
var inst_12107 = [];
var inst_12108 = inst_12107.push(inst_12092);
var inst_12088 = inst_12107;
var inst_12089 = inst_12096;
var state_12128__$1 = (function (){var statearr_12140 = state_12128;
(statearr_12140[(11)] = inst_12106);

(statearr_12140[(7)] = inst_12089);

(statearr_12140[(12)] = inst_12108);

(statearr_12140[(8)] = inst_12088);

return statearr_12140;
})();
var statearr_12141_12171 = state_12128__$1;
(statearr_12141_12171[(2)] = null);

(statearr_12141_12171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (9))){
var inst_12088 = (state_12128[(8)]);
var inst_12104 = cljs.core.vec.call(null,inst_12088);
var state_12128__$1 = state_12128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12128__$1,(11),out,inst_12104);
} else {
if((state_val_12129 === (5))){
var inst_12089 = (state_12128[(7)]);
var inst_12096 = (state_12128[(10)]);
var inst_12092 = (state_12128[(9)]);
var inst_12096__$1 = f.call(null,inst_12092);
var inst_12097 = cljs.core._EQ_.call(null,inst_12096__$1,inst_12089);
var inst_12098 = cljs.core.keyword_identical_QMARK_.call(null,inst_12089,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12099 = (inst_12097) || (inst_12098);
var state_12128__$1 = (function (){var statearr_12142 = state_12128;
(statearr_12142[(10)] = inst_12096__$1);

return statearr_12142;
})();
if(cljs.core.truth_(inst_12099)){
var statearr_12143_12172 = state_12128__$1;
(statearr_12143_12172[(1)] = (8));

} else {
var statearr_12144_12173 = state_12128__$1;
(statearr_12144_12173[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (14))){
var inst_12121 = (state_12128[(2)]);
var inst_12122 = cljs.core.async.close_BANG_.call(null,out);
var state_12128__$1 = (function (){var statearr_12146 = state_12128;
(statearr_12146[(13)] = inst_12121);

return statearr_12146;
})();
var statearr_12147_12174 = state_12128__$1;
(statearr_12147_12174[(2)] = inst_12122);

(statearr_12147_12174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (10))){
var inst_12111 = (state_12128[(2)]);
var state_12128__$1 = state_12128;
var statearr_12148_12175 = state_12128__$1;
(statearr_12148_12175[(2)] = inst_12111);

(statearr_12148_12175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12129 === (8))){
var inst_12096 = (state_12128[(10)]);
var inst_12088 = (state_12128[(8)]);
var inst_12092 = (state_12128[(9)]);
var inst_12101 = inst_12088.push(inst_12092);
var tmp12145 = inst_12088;
var inst_12088__$1 = tmp12145;
var inst_12089 = inst_12096;
var state_12128__$1 = (function (){var statearr_12149 = state_12128;
(statearr_12149[(7)] = inst_12089);

(statearr_12149[(14)] = inst_12101);

(statearr_12149[(8)] = inst_12088__$1);

return statearr_12149;
})();
var statearr_12150_12176 = state_12128__$1;
(statearr_12150_12176[(2)] = null);

(statearr_12150_12176[(1)] = (2));


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
});})(c__9355__auto___12162,out))
;
return ((function (switch__9243__auto__,c__9355__auto___12162,out){
return (function() {
var cljs$core$async$state_machine__9244__auto__ = null;
var cljs$core$async$state_machine__9244__auto____0 = (function (){
var statearr_12154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12154[(0)] = cljs$core$async$state_machine__9244__auto__);

(statearr_12154[(1)] = (1));

return statearr_12154;
});
var cljs$core$async$state_machine__9244__auto____1 = (function (state_12128){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_12128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e12155){if((e12155 instanceof Object)){
var ex__9247__auto__ = e12155;
var statearr_12156_12177 = state_12128;
(statearr_12156_12177[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12178 = state_12128;
state_12128 = G__12178;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
cljs$core$async$state_machine__9244__auto__ = function(state_12128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9244__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9244__auto____1.call(this,state_12128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9244__auto____0;
cljs$core$async$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9244__auto____1;
return cljs$core$async$state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___12162,out))
})();
var state__9357__auto__ = (function (){var statearr_12157 = f__9356__auto__.call(null);
(statearr_12157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___12162);

return statearr_12157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___12162,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map