// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args14133 = [];
var len__7484__auto___14139 = arguments.length;
var i__7485__auto___14140 = (0);
while(true){
if((i__7485__auto___14140 < len__7484__auto___14139)){
args14133.push((arguments[i__7485__auto___14140]));

var G__14141 = (i__7485__auto___14140 + (1));
i__7485__auto___14140 = G__14141;
continue;
} else {
}
break;
}

var G__14135 = args14133.length;
switch (G__14135) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14133.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async14136 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14136 = (function (f,blockable,meta14137){
this.f = f;
this.blockable = blockable;
this.meta14137 = meta14137;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14138,meta14137__$1){
var self__ = this;
var _14138__$1 = this;
return (new cljs.core.async.t_cljs$core$async14136(self__.f,self__.blockable,meta14137__$1));
});

cljs.core.async.t_cljs$core$async14136.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14138){
var self__ = this;
var _14138__$1 = this;
return self__.meta14137;
});

cljs.core.async.t_cljs$core$async14136.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14136.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14136.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async14136.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14136.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta14137], null);
});

cljs.core.async.t_cljs$core$async14136.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14136.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14136";

cljs.core.async.t_cljs$core$async14136.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async14136");
});

cljs.core.async.__GT_t_cljs$core$async14136 = (function cljs$core$async$__GT_t_cljs$core$async14136(f__$1,blockable__$1,meta14137){
return (new cljs.core.async.t_cljs$core$async14136(f__$1,blockable__$1,meta14137));
});

}

return (new cljs.core.async.t_cljs$core$async14136(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args14145 = [];
var len__7484__auto___14148 = arguments.length;
var i__7485__auto___14149 = (0);
while(true){
if((i__7485__auto___14149 < len__7484__auto___14148)){
args14145.push((arguments[i__7485__auto___14149]));

var G__14150 = (i__7485__auto___14149 + (1));
i__7485__auto___14149 = G__14150;
continue;
} else {
}
break;
}

var G__14147 = args14145.length;
switch (G__14147) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14145.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args14152 = [];
var len__7484__auto___14155 = arguments.length;
var i__7485__auto___14156 = (0);
while(true){
if((i__7485__auto___14156 < len__7484__auto___14155)){
args14152.push((arguments[i__7485__auto___14156]));

var G__14157 = (i__7485__auto___14156 + (1));
i__7485__auto___14156 = G__14157;
continue;
} else {
}
break;
}

var G__14154 = args14152.length;
switch (G__14154) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14152.length)].join('')));

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
var args14159 = [];
var len__7484__auto___14162 = arguments.length;
var i__7485__auto___14163 = (0);
while(true){
if((i__7485__auto___14163 < len__7484__auto___14162)){
args14159.push((arguments[i__7485__auto___14163]));

var G__14164 = (i__7485__auto___14163 + (1));
i__7485__auto___14163 = G__14164;
continue;
} else {
}
break;
}

var G__14161 = args14159.length;
switch (G__14161) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14159.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_14166 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14166) : fn1.call(null,val_14166));
} else {
cljs.core.async.impl.dispatch.run(((function (val_14166,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_14166) : fn1.call(null,val_14166));
});})(val_14166,ret))
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
var args14167 = [];
var len__7484__auto___14170 = arguments.length;
var i__7485__auto___14171 = (0);
while(true){
if((i__7485__auto___14171 < len__7484__auto___14170)){
args14167.push((arguments[i__7485__auto___14171]));

var G__14172 = (i__7485__auto___14171 + (1));
i__7485__auto___14171 = G__14172;
continue;
} else {
}
break;
}

var G__14169 = args14167.length;
switch (G__14169) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14167.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(retb) : cljs.core.deref.call(null,retb));
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4655__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
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
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7324__auto___14174 = n;
var x_14175 = (0);
while(true){
if((x_14175 < n__7324__auto___14174)){
(a[x_14175] = (0));

var G__14176 = (x_14175 + (1));
x_14175 = G__14176;
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

var G__14177 = (i + (1));
i = G__14177;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.core.async.t_cljs$core$async14181 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14181 = (function (alt_flag,flag,meta14182){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta14182 = meta14182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14183,meta14182__$1){
var self__ = this;
var _14183__$1 = this;
return (new cljs.core.async.t_cljs$core$async14181(self__.alt_flag,self__.flag,meta14182__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14181.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14183){
var self__ = this;
var _14183__$1 = this;
return self__.meta14182;
});})(flag))
;

cljs.core.async.t_cljs$core$async14181.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14181.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.flag) : cljs.core.deref.call(null,self__.flag));
});})(flag))
;

cljs.core.async.t_cljs$core$async14181.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14181.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.flag,null) : cljs.core.reset_BANG_.call(null,self__.flag,null));

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14181.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_flag,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$meta14182], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14181.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14181";

cljs.core.async.t_cljs$core$async14181.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async14181");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14181 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14181(alt_flag__$1,flag__$1,meta14182){
return (new cljs.core.async.t_cljs$core$async14181(alt_flag__$1,flag__$1,meta14182));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14181(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14187 = (function (alt_handler,flag,cb,meta14188){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta14188 = meta14188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14189,meta14188__$1){
var self__ = this;
var _14189__$1 = this;
return (new cljs.core.async.t_cljs$core$async14187(self__.alt_handler,self__.flag,self__.cb,meta14188__$1));
});

cljs.core.async.t_cljs$core$async14187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14189){
var self__ = this;
var _14189__$1 = this;
return self__.meta14188;
});

cljs.core.async.t_cljs$core$async14187.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14187.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async14187.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14187.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$alt_DASH_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$private,true,cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb], null)))], null)),cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta14188], null);
});

cljs.core.async.t_cljs$core$async14187.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14187.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14187";

cljs.core.async.t_cljs$core$async14187.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async14187");
});

cljs.core.async.__GT_t_cljs$core$async14187 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14187(alt_handler__$1,flag__$1,cb__$1,meta14188){
return (new cljs.core.async.t_cljs$core$async14187(alt_handler__$1,flag__$1,cb__$1,meta14188));
});

}

return (new cljs.core.async.t_cljs$core$async14187(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__14190_SHARP_){
var G__14194 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14190_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14194) : fret.call(null,G__14194));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14191_SHARP_){
var G__14195 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14191_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14195) : fret.call(null,G__14195));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(vbox) : cljs.core.deref.call(null,vbox)),(function (){var or__6409__auto__ = wport;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14196 = (i + (1));
i = G__14196;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__4657__auto__ = (function (){var and__6397__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__6397__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__6397__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__7491__auto__ = [];
var len__7484__auto___14202 = arguments.length;
var i__7485__auto___14203 = (0);
while(true){
if((i__7485__auto___14203 < len__7484__auto___14202)){
args__7491__auto__.push((arguments[i__7485__auto___14203]));

var G__14204 = (i__7485__auto___14203 + (1));
i__7485__auto___14203 = G__14204;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14199){
var map__14200 = p__14199;
var map__14200__$1 = ((((!((map__14200 == null)))?((((map__14200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14200):map__14200);
var opts = map__14200__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14197){
var G__14198 = cljs.core.first(seq14197);
var seq14197__$1 = cljs.core.next(seq14197);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14198,seq14197__$1);
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
var args14205 = [];
var len__7484__auto___14255 = arguments.length;
var i__7485__auto___14256 = (0);
while(true){
if((i__7485__auto___14256 < len__7484__auto___14255)){
args14205.push((arguments[i__7485__auto___14256]));

var G__14257 = (i__7485__auto___14256 + (1));
i__7485__auto___14256 = G__14257;
continue;
} else {
}
break;
}

var G__14207 = args14205.length;
switch (G__14207) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14205.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14088__auto___14259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___14259){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___14259){
return (function (state_14231){
var state_val_14232 = (state_14231[(1)]);
if((state_val_14232 === (7))){
var inst_14227 = (state_14231[(2)]);
var state_14231__$1 = state_14231;
var statearr_14233_14260 = state_14231__$1;
(statearr_14233_14260[(2)] = inst_14227);

(statearr_14233_14260[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14232 === (1))){
var state_14231__$1 = state_14231;
var statearr_14234_14261 = state_14231__$1;
(statearr_14234_14261[(2)] = null);

(statearr_14234_14261[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14232 === (4))){
var inst_14210 = (state_14231[(7)]);
var inst_14210__$1 = (state_14231[(2)]);
var inst_14211 = (inst_14210__$1 == null);
var state_14231__$1 = (function (){var statearr_14235 = state_14231;
(statearr_14235[(7)] = inst_14210__$1);

return statearr_14235;
})();
if(cljs.core.truth_(inst_14211)){
var statearr_14236_14262 = state_14231__$1;
(statearr_14236_14262[(1)] = (5));

} else {
var statearr_14237_14263 = state_14231__$1;
(statearr_14237_14263[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14232 === (13))){
var state_14231__$1 = state_14231;
var statearr_14238_14264 = state_14231__$1;
(statearr_14238_14264[(2)] = null);

(statearr_14238_14264[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14232 === (6))){
var inst_14210 = (state_14231[(7)]);
var state_14231__$1 = state_14231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14231__$1,(11),to,inst_14210);
} else {
if((state_val_14232 === (3))){
var inst_14229 = (state_14231[(2)]);
var state_14231__$1 = state_14231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14231__$1,inst_14229);
} else {
if((state_val_14232 === (12))){
var state_14231__$1 = state_14231;
var statearr_14239_14265 = state_14231__$1;
(statearr_14239_14265[(2)] = null);

(statearr_14239_14265[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14232 === (2))){
var state_14231__$1 = state_14231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14231__$1,(4),from);
} else {
if((state_val_14232 === (11))){
var inst_14220 = (state_14231[(2)]);
var state_14231__$1 = state_14231;
if(cljs.core.truth_(inst_14220)){
var statearr_14240_14266 = state_14231__$1;
(statearr_14240_14266[(1)] = (12));

} else {
var statearr_14241_14267 = state_14231__$1;
(statearr_14241_14267[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14232 === (9))){
var state_14231__$1 = state_14231;
var statearr_14242_14268 = state_14231__$1;
(statearr_14242_14268[(2)] = null);

(statearr_14242_14268[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14232 === (5))){
var state_14231__$1 = state_14231;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14243_14269 = state_14231__$1;
(statearr_14243_14269[(1)] = (8));

} else {
var statearr_14244_14270 = state_14231__$1;
(statearr_14244_14270[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14232 === (14))){
var inst_14225 = (state_14231[(2)]);
var state_14231__$1 = state_14231;
var statearr_14245_14271 = state_14231__$1;
(statearr_14245_14271[(2)] = inst_14225);

(statearr_14245_14271[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14232 === (10))){
var inst_14217 = (state_14231[(2)]);
var state_14231__$1 = state_14231;
var statearr_14246_14272 = state_14231__$1;
(statearr_14246_14272[(2)] = inst_14217);

(statearr_14246_14272[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14232 === (8))){
var inst_14214 = cljs.core.async.close_BANG_(to);
var state_14231__$1 = state_14231;
var statearr_14247_14273 = state_14231__$1;
(statearr_14247_14273[(2)] = inst_14214);

(statearr_14247_14273[(1)] = (10));


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
});})(c__14088__auto___14259))
;
return ((function (switch__13964__auto__,c__14088__auto___14259){
return (function() {
var cljs$core$async$state_machine__13965__auto__ = null;
var cljs$core$async$state_machine__13965__auto____0 = (function (){
var statearr_14251 = [null,null,null,null,null,null,null,null];
(statearr_14251[(0)] = cljs$core$async$state_machine__13965__auto__);

(statearr_14251[(1)] = (1));

return statearr_14251;
});
var cljs$core$async$state_machine__13965__auto____1 = (function (state_14231){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_14231);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e14252){if((e14252 instanceof Object)){
var ex__13968__auto__ = e14252;
var statearr_14253_14274 = state_14231;
(statearr_14253_14274[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14231);

return cljs.core.cst$kw$recur;
} else {
throw e14252;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__14275 = state_14231;
state_14231 = G__14275;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$state_machine__13965__auto__ = function(state_14231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13965__auto____1.call(this,state_14231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13965__auto____0;
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13965__auto____1;
return cljs$core$async$state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___14259))
})();
var state__14090__auto__ = (function (){var statearr_14254 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_14254[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___14259);

return statearr_14254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___14259))
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
return (function (p__14463){
var vec__14464 = p__14463;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14464,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14464,(1),null);
var job = vec__14464;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14088__auto___14650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___14650,res,vec__14464,v,p,job,jobs,results){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___14650,res,vec__14464,v,p,job,jobs,results){
return (function (state_14471){
var state_val_14472 = (state_14471[(1)]);
if((state_val_14472 === (1))){
var state_14471__$1 = state_14471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14471__$1,(2),res,v);
} else {
if((state_val_14472 === (2))){
var inst_14468 = (state_14471[(2)]);
var inst_14469 = cljs.core.async.close_BANG_(res);
var state_14471__$1 = (function (){var statearr_14473 = state_14471;
(statearr_14473[(7)] = inst_14468);

return statearr_14473;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14471__$1,inst_14469);
} else {
return null;
}
}
});})(c__14088__auto___14650,res,vec__14464,v,p,job,jobs,results))
;
return ((function (switch__13964__auto__,c__14088__auto___14650,res,vec__14464,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____0 = (function (){
var statearr_14477 = [null,null,null,null,null,null,null,null];
(statearr_14477[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__);

(statearr_14477[(1)] = (1));

return statearr_14477;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____1 = (function (state_14471){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_14471);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e14478){if((e14478 instanceof Object)){
var ex__13968__auto__ = e14478;
var statearr_14479_14651 = state_14471;
(statearr_14479_14651[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14471);

return cljs.core.cst$kw$recur;
} else {
throw e14478;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__14652 = state_14471;
state_14471 = G__14652;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__ = function(state_14471){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____1.call(this,state_14471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___14650,res,vec__14464,v,p,job,jobs,results))
})();
var state__14090__auto__ = (function (){var statearr_14480 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_14480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___14650);

return statearr_14480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___14650,res,vec__14464,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14481){
var vec__14482 = p__14481;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14482,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14482,(1),null);
var job = vec__14482;
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
var n__7324__auto___14653 = n;
var __14654 = (0);
while(true){
if((__14654 < n__7324__auto___14653)){
var G__14485_14655 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14485_14655) {
case "compute":
var c__14088__auto___14657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14654,c__14088__auto___14657,G__14485_14655,n__7324__auto___14653,jobs,results,process,async){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (__14654,c__14088__auto___14657,G__14485_14655,n__7324__auto___14653,jobs,results,process,async){
return (function (state_14498){
var state_val_14499 = (state_14498[(1)]);
if((state_val_14499 === (1))){
var state_14498__$1 = state_14498;
var statearr_14500_14658 = state_14498__$1;
(statearr_14500_14658[(2)] = null);

(statearr_14500_14658[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14499 === (2))){
var state_14498__$1 = state_14498;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14498__$1,(4),jobs);
} else {
if((state_val_14499 === (3))){
var inst_14496 = (state_14498[(2)]);
var state_14498__$1 = state_14498;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14498__$1,inst_14496);
} else {
if((state_val_14499 === (4))){
var inst_14488 = (state_14498[(2)]);
var inst_14489 = process(inst_14488);
var state_14498__$1 = state_14498;
if(cljs.core.truth_(inst_14489)){
var statearr_14501_14659 = state_14498__$1;
(statearr_14501_14659[(1)] = (5));

} else {
var statearr_14502_14660 = state_14498__$1;
(statearr_14502_14660[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14499 === (5))){
var state_14498__$1 = state_14498;
var statearr_14503_14661 = state_14498__$1;
(statearr_14503_14661[(2)] = null);

(statearr_14503_14661[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14499 === (6))){
var state_14498__$1 = state_14498;
var statearr_14504_14662 = state_14498__$1;
(statearr_14504_14662[(2)] = null);

(statearr_14504_14662[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14499 === (7))){
var inst_14494 = (state_14498[(2)]);
var state_14498__$1 = state_14498;
var statearr_14505_14663 = state_14498__$1;
(statearr_14505_14663[(2)] = inst_14494);

(statearr_14505_14663[(1)] = (3));


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
});})(__14654,c__14088__auto___14657,G__14485_14655,n__7324__auto___14653,jobs,results,process,async))
;
return ((function (__14654,switch__13964__auto__,c__14088__auto___14657,G__14485_14655,n__7324__auto___14653,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____0 = (function (){
var statearr_14509 = [null,null,null,null,null,null,null];
(statearr_14509[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__);

(statearr_14509[(1)] = (1));

return statearr_14509;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____1 = (function (state_14498){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_14498);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e14510){if((e14510 instanceof Object)){
var ex__13968__auto__ = e14510;
var statearr_14511_14664 = state_14498;
(statearr_14511_14664[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14498);

return cljs.core.cst$kw$recur;
} else {
throw e14510;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__14665 = state_14498;
state_14498 = G__14665;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__ = function(state_14498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____1.call(this,state_14498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__;
})()
;})(__14654,switch__13964__auto__,c__14088__auto___14657,G__14485_14655,n__7324__auto___14653,jobs,results,process,async))
})();
var state__14090__auto__ = (function (){var statearr_14512 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_14512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___14657);

return statearr_14512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(__14654,c__14088__auto___14657,G__14485_14655,n__7324__auto___14653,jobs,results,process,async))
);


break;
case "async":
var c__14088__auto___14666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__14654,c__14088__auto___14666,G__14485_14655,n__7324__auto___14653,jobs,results,process,async){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (__14654,c__14088__auto___14666,G__14485_14655,n__7324__auto___14653,jobs,results,process,async){
return (function (state_14525){
var state_val_14526 = (state_14525[(1)]);
if((state_val_14526 === (1))){
var state_14525__$1 = state_14525;
var statearr_14527_14667 = state_14525__$1;
(statearr_14527_14667[(2)] = null);

(statearr_14527_14667[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14526 === (2))){
var state_14525__$1 = state_14525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14525__$1,(4),jobs);
} else {
if((state_val_14526 === (3))){
var inst_14523 = (state_14525[(2)]);
var state_14525__$1 = state_14525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14525__$1,inst_14523);
} else {
if((state_val_14526 === (4))){
var inst_14515 = (state_14525[(2)]);
var inst_14516 = async(inst_14515);
var state_14525__$1 = state_14525;
if(cljs.core.truth_(inst_14516)){
var statearr_14528_14668 = state_14525__$1;
(statearr_14528_14668[(1)] = (5));

} else {
var statearr_14529_14669 = state_14525__$1;
(statearr_14529_14669[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14526 === (5))){
var state_14525__$1 = state_14525;
var statearr_14530_14670 = state_14525__$1;
(statearr_14530_14670[(2)] = null);

(statearr_14530_14670[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14526 === (6))){
var state_14525__$1 = state_14525;
var statearr_14531_14671 = state_14525__$1;
(statearr_14531_14671[(2)] = null);

(statearr_14531_14671[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14526 === (7))){
var inst_14521 = (state_14525[(2)]);
var state_14525__$1 = state_14525;
var statearr_14532_14672 = state_14525__$1;
(statearr_14532_14672[(2)] = inst_14521);

(statearr_14532_14672[(1)] = (3));


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
});})(__14654,c__14088__auto___14666,G__14485_14655,n__7324__auto___14653,jobs,results,process,async))
;
return ((function (__14654,switch__13964__auto__,c__14088__auto___14666,G__14485_14655,n__7324__auto___14653,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____0 = (function (){
var statearr_14536 = [null,null,null,null,null,null,null];
(statearr_14536[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__);

(statearr_14536[(1)] = (1));

return statearr_14536;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____1 = (function (state_14525){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_14525);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e14537){if((e14537 instanceof Object)){
var ex__13968__auto__ = e14537;
var statearr_14538_14673 = state_14525;
(statearr_14538_14673[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14525);

return cljs.core.cst$kw$recur;
} else {
throw e14537;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__14674 = state_14525;
state_14525 = G__14674;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__ = function(state_14525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____1.call(this,state_14525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__;
})()
;})(__14654,switch__13964__auto__,c__14088__auto___14666,G__14485_14655,n__7324__auto___14653,jobs,results,process,async))
})();
var state__14090__auto__ = (function (){var statearr_14539 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_14539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___14666);

return statearr_14539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(__14654,c__14088__auto___14666,G__14485_14655,n__7324__auto___14653,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14675 = (__14654 + (1));
__14654 = G__14675;
continue;
} else {
}
break;
}

var c__14088__auto___14676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___14676,jobs,results,process,async){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___14676,jobs,results,process,async){
return (function (state_14561){
var state_val_14562 = (state_14561[(1)]);
if((state_val_14562 === (1))){
var state_14561__$1 = state_14561;
var statearr_14563_14677 = state_14561__$1;
(statearr_14563_14677[(2)] = null);

(statearr_14563_14677[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14562 === (2))){
var state_14561__$1 = state_14561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14561__$1,(4),from);
} else {
if((state_val_14562 === (3))){
var inst_14559 = (state_14561[(2)]);
var state_14561__$1 = state_14561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14561__$1,inst_14559);
} else {
if((state_val_14562 === (4))){
var inst_14542 = (state_14561[(7)]);
var inst_14542__$1 = (state_14561[(2)]);
var inst_14543 = (inst_14542__$1 == null);
var state_14561__$1 = (function (){var statearr_14564 = state_14561;
(statearr_14564[(7)] = inst_14542__$1);

return statearr_14564;
})();
if(cljs.core.truth_(inst_14543)){
var statearr_14565_14678 = state_14561__$1;
(statearr_14565_14678[(1)] = (5));

} else {
var statearr_14566_14679 = state_14561__$1;
(statearr_14566_14679[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14562 === (5))){
var inst_14545 = cljs.core.async.close_BANG_(jobs);
var state_14561__$1 = state_14561;
var statearr_14567_14680 = state_14561__$1;
(statearr_14567_14680[(2)] = inst_14545);

(statearr_14567_14680[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14562 === (6))){
var inst_14542 = (state_14561[(7)]);
var inst_14547 = (state_14561[(8)]);
var inst_14547__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14548 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14549 = [inst_14542,inst_14547__$1];
var inst_14550 = (new cljs.core.PersistentVector(null,2,(5),inst_14548,inst_14549,null));
var state_14561__$1 = (function (){var statearr_14568 = state_14561;
(statearr_14568[(8)] = inst_14547__$1);

return statearr_14568;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14561__$1,(8),jobs,inst_14550);
} else {
if((state_val_14562 === (7))){
var inst_14557 = (state_14561[(2)]);
var state_14561__$1 = state_14561;
var statearr_14569_14681 = state_14561__$1;
(statearr_14569_14681[(2)] = inst_14557);

(statearr_14569_14681[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14562 === (8))){
var inst_14547 = (state_14561[(8)]);
var inst_14552 = (state_14561[(2)]);
var state_14561__$1 = (function (){var statearr_14570 = state_14561;
(statearr_14570[(9)] = inst_14552);

return statearr_14570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14561__$1,(9),results,inst_14547);
} else {
if((state_val_14562 === (9))){
var inst_14554 = (state_14561[(2)]);
var state_14561__$1 = (function (){var statearr_14571 = state_14561;
(statearr_14571[(10)] = inst_14554);

return statearr_14571;
})();
var statearr_14572_14682 = state_14561__$1;
(statearr_14572_14682[(2)] = null);

(statearr_14572_14682[(1)] = (2));


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
});})(c__14088__auto___14676,jobs,results,process,async))
;
return ((function (switch__13964__auto__,c__14088__auto___14676,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____0 = (function (){
var statearr_14576 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14576[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__);

(statearr_14576[(1)] = (1));

return statearr_14576;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____1 = (function (state_14561){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_14561);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e14577){if((e14577 instanceof Object)){
var ex__13968__auto__ = e14577;
var statearr_14578_14683 = state_14561;
(statearr_14578_14683[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14561);

return cljs.core.cst$kw$recur;
} else {
throw e14577;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__14684 = state_14561;
state_14561 = G__14684;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__ = function(state_14561){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____1.call(this,state_14561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___14676,jobs,results,process,async))
})();
var state__14090__auto__ = (function (){var statearr_14579 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_14579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___14676);

return statearr_14579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___14676,jobs,results,process,async))
);


var c__14088__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto__,jobs,results,process,async){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto__,jobs,results,process,async){
return (function (state_14617){
var state_val_14618 = (state_14617[(1)]);
if((state_val_14618 === (7))){
var inst_14613 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
var statearr_14619_14685 = state_14617__$1;
(statearr_14619_14685[(2)] = inst_14613);

(statearr_14619_14685[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14618 === (20))){
var state_14617__$1 = state_14617;
var statearr_14620_14686 = state_14617__$1;
(statearr_14620_14686[(2)] = null);

(statearr_14620_14686[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14618 === (1))){
var state_14617__$1 = state_14617;
var statearr_14621_14687 = state_14617__$1;
(statearr_14621_14687[(2)] = null);

(statearr_14621_14687[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14618 === (4))){
var inst_14582 = (state_14617[(7)]);
var inst_14582__$1 = (state_14617[(2)]);
var inst_14583 = (inst_14582__$1 == null);
var state_14617__$1 = (function (){var statearr_14622 = state_14617;
(statearr_14622[(7)] = inst_14582__$1);

return statearr_14622;
})();
if(cljs.core.truth_(inst_14583)){
var statearr_14623_14688 = state_14617__$1;
(statearr_14623_14688[(1)] = (5));

} else {
var statearr_14624_14689 = state_14617__$1;
(statearr_14624_14689[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14618 === (15))){
var inst_14595 = (state_14617[(8)]);
var state_14617__$1 = state_14617;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14617__$1,(18),to,inst_14595);
} else {
if((state_val_14618 === (21))){
var inst_14608 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
var statearr_14625_14690 = state_14617__$1;
(statearr_14625_14690[(2)] = inst_14608);

(statearr_14625_14690[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14618 === (13))){
var inst_14610 = (state_14617[(2)]);
var state_14617__$1 = (function (){var statearr_14626 = state_14617;
(statearr_14626[(9)] = inst_14610);

return statearr_14626;
})();
var statearr_14627_14691 = state_14617__$1;
(statearr_14627_14691[(2)] = null);

(statearr_14627_14691[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14618 === (6))){
var inst_14582 = (state_14617[(7)]);
var state_14617__$1 = state_14617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14617__$1,(11),inst_14582);
} else {
if((state_val_14618 === (17))){
var inst_14603 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
if(cljs.core.truth_(inst_14603)){
var statearr_14628_14692 = state_14617__$1;
(statearr_14628_14692[(1)] = (19));

} else {
var statearr_14629_14693 = state_14617__$1;
(statearr_14629_14693[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14618 === (3))){
var inst_14615 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14617__$1,inst_14615);
} else {
if((state_val_14618 === (12))){
var inst_14592 = (state_14617[(10)]);
var state_14617__$1 = state_14617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14617__$1,(14),inst_14592);
} else {
if((state_val_14618 === (2))){
var state_14617__$1 = state_14617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14617__$1,(4),results);
} else {
if((state_val_14618 === (19))){
var state_14617__$1 = state_14617;
var statearr_14630_14694 = state_14617__$1;
(statearr_14630_14694[(2)] = null);

(statearr_14630_14694[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14618 === (11))){
var inst_14592 = (state_14617[(2)]);
var state_14617__$1 = (function (){var statearr_14631 = state_14617;
(statearr_14631[(10)] = inst_14592);

return statearr_14631;
})();
var statearr_14632_14695 = state_14617__$1;
(statearr_14632_14695[(2)] = null);

(statearr_14632_14695[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14618 === (9))){
var state_14617__$1 = state_14617;
var statearr_14633_14696 = state_14617__$1;
(statearr_14633_14696[(2)] = null);

(statearr_14633_14696[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14618 === (5))){
var state_14617__$1 = state_14617;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14634_14697 = state_14617__$1;
(statearr_14634_14697[(1)] = (8));

} else {
var statearr_14635_14698 = state_14617__$1;
(statearr_14635_14698[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14618 === (14))){
var inst_14595 = (state_14617[(8)]);
var inst_14597 = (state_14617[(11)]);
var inst_14595__$1 = (state_14617[(2)]);
var inst_14596 = (inst_14595__$1 == null);
var inst_14597__$1 = cljs.core.not(inst_14596);
var state_14617__$1 = (function (){var statearr_14636 = state_14617;
(statearr_14636[(8)] = inst_14595__$1);

(statearr_14636[(11)] = inst_14597__$1);

return statearr_14636;
})();
if(inst_14597__$1){
var statearr_14637_14699 = state_14617__$1;
(statearr_14637_14699[(1)] = (15));

} else {
var statearr_14638_14700 = state_14617__$1;
(statearr_14638_14700[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14618 === (16))){
var inst_14597 = (state_14617[(11)]);
var state_14617__$1 = state_14617;
var statearr_14639_14701 = state_14617__$1;
(statearr_14639_14701[(2)] = inst_14597);

(statearr_14639_14701[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14618 === (10))){
var inst_14589 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
var statearr_14640_14702 = state_14617__$1;
(statearr_14640_14702[(2)] = inst_14589);

(statearr_14640_14702[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14618 === (18))){
var inst_14600 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
var statearr_14641_14703 = state_14617__$1;
(statearr_14641_14703[(2)] = inst_14600);

(statearr_14641_14703[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14618 === (8))){
var inst_14586 = cljs.core.async.close_BANG_(to);
var state_14617__$1 = state_14617;
var statearr_14642_14704 = state_14617__$1;
(statearr_14642_14704[(2)] = inst_14586);

(statearr_14642_14704[(1)] = (10));


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
});})(c__14088__auto__,jobs,results,process,async))
;
return ((function (switch__13964__auto__,c__14088__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____0 = (function (){
var statearr_14646 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14646[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__);

(statearr_14646[(1)] = (1));

return statearr_14646;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____1 = (function (state_14617){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_14617);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e14647){if((e14647 instanceof Object)){
var ex__13968__auto__ = e14647;
var statearr_14648_14705 = state_14617;
(statearr_14648_14705[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14617);

return cljs.core.cst$kw$recur;
} else {
throw e14647;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__14706 = state_14617;
state_14617 = G__14706;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__ = function(state_14617){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____1.call(this,state_14617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13965__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto__,jobs,results,process,async))
})();
var state__14090__auto__ = (function (){var statearr_14649 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_14649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto__);

return statearr_14649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto__,jobs,results,process,async))
);

return c__14088__auto__;
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
var args14707 = [];
var len__7484__auto___14710 = arguments.length;
var i__7485__auto___14711 = (0);
while(true){
if((i__7485__auto___14711 < len__7484__auto___14710)){
args14707.push((arguments[i__7485__auto___14711]));

var G__14712 = (i__7485__auto___14711 + (1));
i__7485__auto___14711 = G__14712;
continue;
} else {
}
break;
}

var G__14709 = args14707.length;
switch (G__14709) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14707.length)].join('')));

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
var args14714 = [];
var len__7484__auto___14717 = arguments.length;
var i__7485__auto___14718 = (0);
while(true){
if((i__7485__auto___14718 < len__7484__auto___14717)){
args14714.push((arguments[i__7485__auto___14718]));

var G__14719 = (i__7485__auto___14718 + (1));
i__7485__auto___14718 = G__14719;
continue;
} else {
}
break;
}

var G__14716 = args14714.length;
switch (G__14716) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14714.length)].join('')));

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
var args14721 = [];
var len__7484__auto___14774 = arguments.length;
var i__7485__auto___14775 = (0);
while(true){
if((i__7485__auto___14775 < len__7484__auto___14774)){
args14721.push((arguments[i__7485__auto___14775]));

var G__14776 = (i__7485__auto___14775 + (1));
i__7485__auto___14775 = G__14776;
continue;
} else {
}
break;
}

var G__14723 = args14721.length;
switch (G__14723) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14721.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14088__auto___14778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___14778,tc,fc){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___14778,tc,fc){
return (function (state_14749){
var state_val_14750 = (state_14749[(1)]);
if((state_val_14750 === (7))){
var inst_14745 = (state_14749[(2)]);
var state_14749__$1 = state_14749;
var statearr_14751_14779 = state_14749__$1;
(statearr_14751_14779[(2)] = inst_14745);

(statearr_14751_14779[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14750 === (1))){
var state_14749__$1 = state_14749;
var statearr_14752_14780 = state_14749__$1;
(statearr_14752_14780[(2)] = null);

(statearr_14752_14780[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14750 === (4))){
var inst_14726 = (state_14749[(7)]);
var inst_14726__$1 = (state_14749[(2)]);
var inst_14727 = (inst_14726__$1 == null);
var state_14749__$1 = (function (){var statearr_14753 = state_14749;
(statearr_14753[(7)] = inst_14726__$1);

return statearr_14753;
})();
if(cljs.core.truth_(inst_14727)){
var statearr_14754_14781 = state_14749__$1;
(statearr_14754_14781[(1)] = (5));

} else {
var statearr_14755_14782 = state_14749__$1;
(statearr_14755_14782[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14750 === (13))){
var state_14749__$1 = state_14749;
var statearr_14756_14783 = state_14749__$1;
(statearr_14756_14783[(2)] = null);

(statearr_14756_14783[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14750 === (6))){
var inst_14726 = (state_14749[(7)]);
var inst_14732 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14726) : p.call(null,inst_14726));
var state_14749__$1 = state_14749;
if(cljs.core.truth_(inst_14732)){
var statearr_14757_14784 = state_14749__$1;
(statearr_14757_14784[(1)] = (9));

} else {
var statearr_14758_14785 = state_14749__$1;
(statearr_14758_14785[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14750 === (3))){
var inst_14747 = (state_14749[(2)]);
var state_14749__$1 = state_14749;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14749__$1,inst_14747);
} else {
if((state_val_14750 === (12))){
var state_14749__$1 = state_14749;
var statearr_14759_14786 = state_14749__$1;
(statearr_14759_14786[(2)] = null);

(statearr_14759_14786[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14750 === (2))){
var state_14749__$1 = state_14749;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14749__$1,(4),ch);
} else {
if((state_val_14750 === (11))){
var inst_14726 = (state_14749[(7)]);
var inst_14736 = (state_14749[(2)]);
var state_14749__$1 = state_14749;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14749__$1,(8),inst_14736,inst_14726);
} else {
if((state_val_14750 === (9))){
var state_14749__$1 = state_14749;
var statearr_14760_14787 = state_14749__$1;
(statearr_14760_14787[(2)] = tc);

(statearr_14760_14787[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14750 === (5))){
var inst_14729 = cljs.core.async.close_BANG_(tc);
var inst_14730 = cljs.core.async.close_BANG_(fc);
var state_14749__$1 = (function (){var statearr_14761 = state_14749;
(statearr_14761[(8)] = inst_14729);

return statearr_14761;
})();
var statearr_14762_14788 = state_14749__$1;
(statearr_14762_14788[(2)] = inst_14730);

(statearr_14762_14788[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14750 === (14))){
var inst_14743 = (state_14749[(2)]);
var state_14749__$1 = state_14749;
var statearr_14763_14789 = state_14749__$1;
(statearr_14763_14789[(2)] = inst_14743);

(statearr_14763_14789[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14750 === (10))){
var state_14749__$1 = state_14749;
var statearr_14764_14790 = state_14749__$1;
(statearr_14764_14790[(2)] = fc);

(statearr_14764_14790[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14750 === (8))){
var inst_14738 = (state_14749[(2)]);
var state_14749__$1 = state_14749;
if(cljs.core.truth_(inst_14738)){
var statearr_14765_14791 = state_14749__$1;
(statearr_14765_14791[(1)] = (12));

} else {
var statearr_14766_14792 = state_14749__$1;
(statearr_14766_14792[(1)] = (13));

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
});})(c__14088__auto___14778,tc,fc))
;
return ((function (switch__13964__auto__,c__14088__auto___14778,tc,fc){
return (function() {
var cljs$core$async$state_machine__13965__auto__ = null;
var cljs$core$async$state_machine__13965__auto____0 = (function (){
var statearr_14770 = [null,null,null,null,null,null,null,null,null];
(statearr_14770[(0)] = cljs$core$async$state_machine__13965__auto__);

(statearr_14770[(1)] = (1));

return statearr_14770;
});
var cljs$core$async$state_machine__13965__auto____1 = (function (state_14749){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_14749);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e14771){if((e14771 instanceof Object)){
var ex__13968__auto__ = e14771;
var statearr_14772_14793 = state_14749;
(statearr_14772_14793[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14749);

return cljs.core.cst$kw$recur;
} else {
throw e14771;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__14794 = state_14749;
state_14749 = G__14794;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$state_machine__13965__auto__ = function(state_14749){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13965__auto____1.call(this,state_14749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13965__auto____0;
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13965__auto____1;
return cljs$core$async$state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___14778,tc,fc))
})();
var state__14090__auto__ = (function (){var statearr_14773 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_14773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___14778);

return statearr_14773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___14778,tc,fc))
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
var c__14088__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto__){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto__){
return (function (state_14858){
var state_val_14859 = (state_14858[(1)]);
if((state_val_14859 === (7))){
var inst_14854 = (state_14858[(2)]);
var state_14858__$1 = state_14858;
var statearr_14860_14881 = state_14858__$1;
(statearr_14860_14881[(2)] = inst_14854);

(statearr_14860_14881[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14859 === (1))){
var inst_14838 = init;
var state_14858__$1 = (function (){var statearr_14861 = state_14858;
(statearr_14861[(7)] = inst_14838);

return statearr_14861;
})();
var statearr_14862_14882 = state_14858__$1;
(statearr_14862_14882[(2)] = null);

(statearr_14862_14882[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14859 === (4))){
var inst_14841 = (state_14858[(8)]);
var inst_14841__$1 = (state_14858[(2)]);
var inst_14842 = (inst_14841__$1 == null);
var state_14858__$1 = (function (){var statearr_14863 = state_14858;
(statearr_14863[(8)] = inst_14841__$1);

return statearr_14863;
})();
if(cljs.core.truth_(inst_14842)){
var statearr_14864_14883 = state_14858__$1;
(statearr_14864_14883[(1)] = (5));

} else {
var statearr_14865_14884 = state_14858__$1;
(statearr_14865_14884[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14859 === (6))){
var inst_14845 = (state_14858[(9)]);
var inst_14841 = (state_14858[(8)]);
var inst_14838 = (state_14858[(7)]);
var inst_14845__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14838,inst_14841) : f.call(null,inst_14838,inst_14841));
var inst_14846 = cljs.core.reduced_QMARK_(inst_14845__$1);
var state_14858__$1 = (function (){var statearr_14866 = state_14858;
(statearr_14866[(9)] = inst_14845__$1);

return statearr_14866;
})();
if(inst_14846){
var statearr_14867_14885 = state_14858__$1;
(statearr_14867_14885[(1)] = (8));

} else {
var statearr_14868_14886 = state_14858__$1;
(statearr_14868_14886[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14859 === (3))){
var inst_14856 = (state_14858[(2)]);
var state_14858__$1 = state_14858;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14858__$1,inst_14856);
} else {
if((state_val_14859 === (2))){
var state_14858__$1 = state_14858;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14858__$1,(4),ch);
} else {
if((state_val_14859 === (9))){
var inst_14845 = (state_14858[(9)]);
var inst_14838 = inst_14845;
var state_14858__$1 = (function (){var statearr_14869 = state_14858;
(statearr_14869[(7)] = inst_14838);

return statearr_14869;
})();
var statearr_14870_14887 = state_14858__$1;
(statearr_14870_14887[(2)] = null);

(statearr_14870_14887[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14859 === (5))){
var inst_14838 = (state_14858[(7)]);
var state_14858__$1 = state_14858;
var statearr_14871_14888 = state_14858__$1;
(statearr_14871_14888[(2)] = inst_14838);

(statearr_14871_14888[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14859 === (10))){
var inst_14852 = (state_14858[(2)]);
var state_14858__$1 = state_14858;
var statearr_14872_14889 = state_14858__$1;
(statearr_14872_14889[(2)] = inst_14852);

(statearr_14872_14889[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14859 === (8))){
var inst_14845 = (state_14858[(9)]);
var inst_14848 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inst_14845) : cljs.core.deref.call(null,inst_14845));
var state_14858__$1 = state_14858;
var statearr_14873_14890 = state_14858__$1;
(statearr_14873_14890[(2)] = inst_14848);

(statearr_14873_14890[(1)] = (10));


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
});})(c__14088__auto__))
;
return ((function (switch__13964__auto__,c__14088__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__13965__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13965__auto____0 = (function (){
var statearr_14877 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14877[(0)] = cljs$core$async$reduce_$_state_machine__13965__auto__);

(statearr_14877[(1)] = (1));

return statearr_14877;
});
var cljs$core$async$reduce_$_state_machine__13965__auto____1 = (function (state_14858){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_14858);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e14878){if((e14878 instanceof Object)){
var ex__13968__auto__ = e14878;
var statearr_14879_14891 = state_14858;
(statearr_14879_14891[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14858);

return cljs.core.cst$kw$recur;
} else {
throw e14878;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__14892 = state_14858;
state_14858 = G__14892;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13965__auto__ = function(state_14858){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13965__auto____1.call(this,state_14858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13965__auto____0;
cljs$core$async$reduce_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13965__auto____1;
return cljs$core$async$reduce_$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto__))
})();
var state__14090__auto__ = (function (){var statearr_14880 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_14880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto__);

return statearr_14880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto__))
);

return c__14088__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14088__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto__,f__$1){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto__,f__$1){
return (function (state_14912){
var state_val_14913 = (state_14912[(1)]);
if((state_val_14913 === (1))){
var inst_14907 = cljs.core.async.reduce(f__$1,init,ch);
var state_14912__$1 = state_14912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14912__$1,(2),inst_14907);
} else {
if((state_val_14913 === (2))){
var inst_14909 = (state_14912[(2)]);
var inst_14910 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14909) : f__$1.call(null,inst_14909));
var state_14912__$1 = state_14912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14912__$1,inst_14910);
} else {
return null;
}
}
});})(c__14088__auto__,f__$1))
;
return ((function (switch__13964__auto__,c__14088__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__13965__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13965__auto____0 = (function (){
var statearr_14917 = [null,null,null,null,null,null,null];
(statearr_14917[(0)] = cljs$core$async$transduce_$_state_machine__13965__auto__);

(statearr_14917[(1)] = (1));

return statearr_14917;
});
var cljs$core$async$transduce_$_state_machine__13965__auto____1 = (function (state_14912){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_14912);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e14918){if((e14918 instanceof Object)){
var ex__13968__auto__ = e14918;
var statearr_14919_14921 = state_14912;
(statearr_14919_14921[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14912);

return cljs.core.cst$kw$recur;
} else {
throw e14918;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__14922 = state_14912;
state_14912 = G__14922;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13965__auto__ = function(state_14912){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13965__auto____1.call(this,state_14912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13965__auto____0;
cljs$core$async$transduce_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13965__auto____1;
return cljs$core$async$transduce_$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto__,f__$1))
})();
var state__14090__auto__ = (function (){var statearr_14920 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_14920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto__);

return statearr_14920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto__,f__$1))
);

return c__14088__auto__;
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
var args14923 = [];
var len__7484__auto___14975 = arguments.length;
var i__7485__auto___14976 = (0);
while(true){
if((i__7485__auto___14976 < len__7484__auto___14975)){
args14923.push((arguments[i__7485__auto___14976]));

var G__14977 = (i__7485__auto___14976 + (1));
i__7485__auto___14976 = G__14977;
continue;
} else {
}
break;
}

var G__14925 = args14923.length;
switch (G__14925) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14923.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14088__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto__){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto__){
return (function (state_14950){
var state_val_14951 = (state_14950[(1)]);
if((state_val_14951 === (7))){
var inst_14932 = (state_14950[(2)]);
var state_14950__$1 = state_14950;
var statearr_14952_14979 = state_14950__$1;
(statearr_14952_14979[(2)] = inst_14932);

(statearr_14952_14979[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14951 === (1))){
var inst_14926 = cljs.core.seq(coll);
var inst_14927 = inst_14926;
var state_14950__$1 = (function (){var statearr_14953 = state_14950;
(statearr_14953[(7)] = inst_14927);

return statearr_14953;
})();
var statearr_14954_14980 = state_14950__$1;
(statearr_14954_14980[(2)] = null);

(statearr_14954_14980[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14951 === (4))){
var inst_14927 = (state_14950[(7)]);
var inst_14930 = cljs.core.first(inst_14927);
var state_14950__$1 = state_14950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14950__$1,(7),ch,inst_14930);
} else {
if((state_val_14951 === (13))){
var inst_14944 = (state_14950[(2)]);
var state_14950__$1 = state_14950;
var statearr_14955_14981 = state_14950__$1;
(statearr_14955_14981[(2)] = inst_14944);

(statearr_14955_14981[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14951 === (6))){
var inst_14935 = (state_14950[(2)]);
var state_14950__$1 = state_14950;
if(cljs.core.truth_(inst_14935)){
var statearr_14956_14982 = state_14950__$1;
(statearr_14956_14982[(1)] = (8));

} else {
var statearr_14957_14983 = state_14950__$1;
(statearr_14957_14983[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14951 === (3))){
var inst_14948 = (state_14950[(2)]);
var state_14950__$1 = state_14950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14950__$1,inst_14948);
} else {
if((state_val_14951 === (12))){
var state_14950__$1 = state_14950;
var statearr_14958_14984 = state_14950__$1;
(statearr_14958_14984[(2)] = null);

(statearr_14958_14984[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14951 === (2))){
var inst_14927 = (state_14950[(7)]);
var state_14950__$1 = state_14950;
if(cljs.core.truth_(inst_14927)){
var statearr_14959_14985 = state_14950__$1;
(statearr_14959_14985[(1)] = (4));

} else {
var statearr_14960_14986 = state_14950__$1;
(statearr_14960_14986[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14951 === (11))){
var inst_14941 = cljs.core.async.close_BANG_(ch);
var state_14950__$1 = state_14950;
var statearr_14961_14987 = state_14950__$1;
(statearr_14961_14987[(2)] = inst_14941);

(statearr_14961_14987[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14951 === (9))){
var state_14950__$1 = state_14950;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14962_14988 = state_14950__$1;
(statearr_14962_14988[(1)] = (11));

} else {
var statearr_14963_14989 = state_14950__$1;
(statearr_14963_14989[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_14951 === (5))){
var inst_14927 = (state_14950[(7)]);
var state_14950__$1 = state_14950;
var statearr_14964_14990 = state_14950__$1;
(statearr_14964_14990[(2)] = inst_14927);

(statearr_14964_14990[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14951 === (10))){
var inst_14946 = (state_14950[(2)]);
var state_14950__$1 = state_14950;
var statearr_14965_14991 = state_14950__$1;
(statearr_14965_14991[(2)] = inst_14946);

(statearr_14965_14991[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_14951 === (8))){
var inst_14927 = (state_14950[(7)]);
var inst_14937 = cljs.core.next(inst_14927);
var inst_14927__$1 = inst_14937;
var state_14950__$1 = (function (){var statearr_14966 = state_14950;
(statearr_14966[(7)] = inst_14927__$1);

return statearr_14966;
})();
var statearr_14967_14992 = state_14950__$1;
(statearr_14967_14992[(2)] = null);

(statearr_14967_14992[(1)] = (2));


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
});})(c__14088__auto__))
;
return ((function (switch__13964__auto__,c__14088__auto__){
return (function() {
var cljs$core$async$state_machine__13965__auto__ = null;
var cljs$core$async$state_machine__13965__auto____0 = (function (){
var statearr_14971 = [null,null,null,null,null,null,null,null];
(statearr_14971[(0)] = cljs$core$async$state_machine__13965__auto__);

(statearr_14971[(1)] = (1));

return statearr_14971;
});
var cljs$core$async$state_machine__13965__auto____1 = (function (state_14950){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_14950);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e14972){if((e14972 instanceof Object)){
var ex__13968__auto__ = e14972;
var statearr_14973_14993 = state_14950;
(statearr_14973_14993[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_14950);

return cljs.core.cst$kw$recur;
} else {
throw e14972;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__14994 = state_14950;
state_14950 = G__14994;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$state_machine__13965__auto__ = function(state_14950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13965__auto____1.call(this,state_14950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13965__auto____0;
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13965__auto____1;
return cljs$core$async$state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto__))
})();
var state__14090__auto__ = (function (){var statearr_14974 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_14974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto__);

return statearr_14974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto__))
);

return c__14088__auto__;
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
var x__7072__auto__ = (((_ == null))?null:_);
var m__7073__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__7073__auto__.call(null,_));
} else {
var m__7073__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__7073__auto____$1.call(null,_));
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7073__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__7073__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__7073__auto____$1.call(null,m,ch,close_QMARK_));
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7073__auto__.call(null,m,ch));
} else {
var m__7073__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7073__auto____$1.call(null,m,ch));
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7073__auto__.call(null,m));
} else {
var m__7073__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7073__auto____$1.call(null,m));
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
var cs = (function (){var G__15223 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15223) : cljs.core.atom.call(null,G__15223));
})();
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15224 = (function (mult,ch,cs,meta15225){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta15225 = meta15225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15226,meta15225__$1){
var self__ = this;
var _15226__$1 = this;
return (new cljs.core.async.t_cljs$core$async15224(self__.mult,self__.ch,self__.cs,meta15225__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15224.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15226){
var self__ = this;
var _15226__$1 = this;
return self__.meta15225;
});})(cs))
;

cljs.core.async.t_cljs$core$async15224.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15224.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15224.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async15224.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15224.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15224.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15227_15451 = self__.cs;
var G__15228_15452 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15227_15451,G__15228_15452) : cljs.core.reset_BANG_.call(null,G__15227_15451,G__15228_15452));

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15224.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$mult,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta15225], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15224";

cljs.core.async.t_cljs$core$async15224.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async15224");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15224 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15224(mult__$1,ch__$1,cs__$1,meta15225){
return (new cljs.core.async.t_cljs$core$async15224(mult__$1,ch__$1,cs__$1,meta15225));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15224(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__14088__auto___15453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___15453,cs,m,dchan,dctr,done){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___15453,cs,m,dchan,dctr,done){
return (function (state_15363){
var state_val_15364 = (state_15363[(1)]);
if((state_val_15364 === (7))){
var inst_15359 = (state_15363[(2)]);
var state_15363__$1 = state_15363;
var statearr_15365_15454 = state_15363__$1;
(statearr_15365_15454[(2)] = inst_15359);

(statearr_15365_15454[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (20))){
var inst_15262 = (state_15363[(7)]);
var inst_15274 = cljs.core.first(inst_15262);
var inst_15275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15274,(0),null);
var inst_15276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15274,(1),null);
var state_15363__$1 = (function (){var statearr_15366 = state_15363;
(statearr_15366[(8)] = inst_15275);

return statearr_15366;
})();
if(cljs.core.truth_(inst_15276)){
var statearr_15367_15455 = state_15363__$1;
(statearr_15367_15455[(1)] = (22));

} else {
var statearr_15368_15456 = state_15363__$1;
(statearr_15368_15456[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (27))){
var inst_15304 = (state_15363[(9)]);
var inst_15311 = (state_15363[(10)]);
var inst_15231 = (state_15363[(11)]);
var inst_15306 = (state_15363[(12)]);
var inst_15311__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15304,inst_15306);
var inst_15312 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15311__$1,inst_15231,done);
var state_15363__$1 = (function (){var statearr_15369 = state_15363;
(statearr_15369[(10)] = inst_15311__$1);

return statearr_15369;
})();
if(cljs.core.truth_(inst_15312)){
var statearr_15370_15457 = state_15363__$1;
(statearr_15370_15457[(1)] = (30));

} else {
var statearr_15371_15458 = state_15363__$1;
(statearr_15371_15458[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (1))){
var state_15363__$1 = state_15363;
var statearr_15372_15459 = state_15363__$1;
(statearr_15372_15459[(2)] = null);

(statearr_15372_15459[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (24))){
var inst_15262 = (state_15363[(7)]);
var inst_15281 = (state_15363[(2)]);
var inst_15282 = cljs.core.next(inst_15262);
var inst_15240 = inst_15282;
var inst_15241 = null;
var inst_15242 = (0);
var inst_15243 = (0);
var state_15363__$1 = (function (){var statearr_15373 = state_15363;
(statearr_15373[(13)] = inst_15281);

(statearr_15373[(14)] = inst_15241);

(statearr_15373[(15)] = inst_15240);

(statearr_15373[(16)] = inst_15243);

(statearr_15373[(17)] = inst_15242);

return statearr_15373;
})();
var statearr_15374_15460 = state_15363__$1;
(statearr_15374_15460[(2)] = null);

(statearr_15374_15460[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (39))){
var state_15363__$1 = state_15363;
var statearr_15378_15461 = state_15363__$1;
(statearr_15378_15461[(2)] = null);

(statearr_15378_15461[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (4))){
var inst_15231 = (state_15363[(11)]);
var inst_15231__$1 = (state_15363[(2)]);
var inst_15232 = (inst_15231__$1 == null);
var state_15363__$1 = (function (){var statearr_15379 = state_15363;
(statearr_15379[(11)] = inst_15231__$1);

return statearr_15379;
})();
if(cljs.core.truth_(inst_15232)){
var statearr_15380_15462 = state_15363__$1;
(statearr_15380_15462[(1)] = (5));

} else {
var statearr_15381_15463 = state_15363__$1;
(statearr_15381_15463[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (15))){
var inst_15241 = (state_15363[(14)]);
var inst_15240 = (state_15363[(15)]);
var inst_15243 = (state_15363[(16)]);
var inst_15242 = (state_15363[(17)]);
var inst_15258 = (state_15363[(2)]);
var inst_15259 = (inst_15243 + (1));
var tmp15375 = inst_15241;
var tmp15376 = inst_15240;
var tmp15377 = inst_15242;
var inst_15240__$1 = tmp15376;
var inst_15241__$1 = tmp15375;
var inst_15242__$1 = tmp15377;
var inst_15243__$1 = inst_15259;
var state_15363__$1 = (function (){var statearr_15382 = state_15363;
(statearr_15382[(18)] = inst_15258);

(statearr_15382[(14)] = inst_15241__$1);

(statearr_15382[(15)] = inst_15240__$1);

(statearr_15382[(16)] = inst_15243__$1);

(statearr_15382[(17)] = inst_15242__$1);

return statearr_15382;
})();
var statearr_15383_15464 = state_15363__$1;
(statearr_15383_15464[(2)] = null);

(statearr_15383_15464[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (21))){
var inst_15285 = (state_15363[(2)]);
var state_15363__$1 = state_15363;
var statearr_15387_15465 = state_15363__$1;
(statearr_15387_15465[(2)] = inst_15285);

(statearr_15387_15465[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (31))){
var inst_15311 = (state_15363[(10)]);
var inst_15315 = done(null);
var inst_15316 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15311);
var state_15363__$1 = (function (){var statearr_15388 = state_15363;
(statearr_15388[(19)] = inst_15315);

return statearr_15388;
})();
var statearr_15389_15466 = state_15363__$1;
(statearr_15389_15466[(2)] = inst_15316);

(statearr_15389_15466[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (32))){
var inst_15304 = (state_15363[(9)]);
var inst_15305 = (state_15363[(20)]);
var inst_15306 = (state_15363[(12)]);
var inst_15303 = (state_15363[(21)]);
var inst_15318 = (state_15363[(2)]);
var inst_15319 = (inst_15306 + (1));
var tmp15384 = inst_15304;
var tmp15385 = inst_15305;
var tmp15386 = inst_15303;
var inst_15303__$1 = tmp15386;
var inst_15304__$1 = tmp15384;
var inst_15305__$1 = tmp15385;
var inst_15306__$1 = inst_15319;
var state_15363__$1 = (function (){var statearr_15390 = state_15363;
(statearr_15390[(9)] = inst_15304__$1);

(statearr_15390[(22)] = inst_15318);

(statearr_15390[(20)] = inst_15305__$1);

(statearr_15390[(12)] = inst_15306__$1);

(statearr_15390[(21)] = inst_15303__$1);

return statearr_15390;
})();
var statearr_15391_15467 = state_15363__$1;
(statearr_15391_15467[(2)] = null);

(statearr_15391_15467[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (40))){
var inst_15331 = (state_15363[(23)]);
var inst_15335 = done(null);
var inst_15336 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15331);
var state_15363__$1 = (function (){var statearr_15392 = state_15363;
(statearr_15392[(24)] = inst_15335);

return statearr_15392;
})();
var statearr_15393_15468 = state_15363__$1;
(statearr_15393_15468[(2)] = inst_15336);

(statearr_15393_15468[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (33))){
var inst_15322 = (state_15363[(25)]);
var inst_15324 = cljs.core.chunked_seq_QMARK_(inst_15322);
var state_15363__$1 = state_15363;
if(inst_15324){
var statearr_15394_15469 = state_15363__$1;
(statearr_15394_15469[(1)] = (36));

} else {
var statearr_15395_15470 = state_15363__$1;
(statearr_15395_15470[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (13))){
var inst_15252 = (state_15363[(26)]);
var inst_15255 = cljs.core.async.close_BANG_(inst_15252);
var state_15363__$1 = state_15363;
var statearr_15396_15471 = state_15363__$1;
(statearr_15396_15471[(2)] = inst_15255);

(statearr_15396_15471[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (22))){
var inst_15275 = (state_15363[(8)]);
var inst_15278 = cljs.core.async.close_BANG_(inst_15275);
var state_15363__$1 = state_15363;
var statearr_15397_15472 = state_15363__$1;
(statearr_15397_15472[(2)] = inst_15278);

(statearr_15397_15472[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (36))){
var inst_15322 = (state_15363[(25)]);
var inst_15326 = cljs.core.chunk_first(inst_15322);
var inst_15327 = cljs.core.chunk_rest(inst_15322);
var inst_15328 = cljs.core.count(inst_15326);
var inst_15303 = inst_15327;
var inst_15304 = inst_15326;
var inst_15305 = inst_15328;
var inst_15306 = (0);
var state_15363__$1 = (function (){var statearr_15398 = state_15363;
(statearr_15398[(9)] = inst_15304);

(statearr_15398[(20)] = inst_15305);

(statearr_15398[(12)] = inst_15306);

(statearr_15398[(21)] = inst_15303);

return statearr_15398;
})();
var statearr_15399_15473 = state_15363__$1;
(statearr_15399_15473[(2)] = null);

(statearr_15399_15473[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (41))){
var inst_15322 = (state_15363[(25)]);
var inst_15338 = (state_15363[(2)]);
var inst_15339 = cljs.core.next(inst_15322);
var inst_15303 = inst_15339;
var inst_15304 = null;
var inst_15305 = (0);
var inst_15306 = (0);
var state_15363__$1 = (function (){var statearr_15400 = state_15363;
(statearr_15400[(9)] = inst_15304);

(statearr_15400[(27)] = inst_15338);

(statearr_15400[(20)] = inst_15305);

(statearr_15400[(12)] = inst_15306);

(statearr_15400[(21)] = inst_15303);

return statearr_15400;
})();
var statearr_15401_15474 = state_15363__$1;
(statearr_15401_15474[(2)] = null);

(statearr_15401_15474[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (43))){
var state_15363__$1 = state_15363;
var statearr_15402_15475 = state_15363__$1;
(statearr_15402_15475[(2)] = null);

(statearr_15402_15475[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (29))){
var inst_15347 = (state_15363[(2)]);
var state_15363__$1 = state_15363;
var statearr_15403_15476 = state_15363__$1;
(statearr_15403_15476[(2)] = inst_15347);

(statearr_15403_15476[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (44))){
var inst_15356 = (state_15363[(2)]);
var state_15363__$1 = (function (){var statearr_15404 = state_15363;
(statearr_15404[(28)] = inst_15356);

return statearr_15404;
})();
var statearr_15405_15477 = state_15363__$1;
(statearr_15405_15477[(2)] = null);

(statearr_15405_15477[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (6))){
var inst_15295 = (state_15363[(29)]);
var inst_15294 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15295__$1 = cljs.core.keys(inst_15294);
var inst_15296 = cljs.core.count(inst_15295__$1);
var inst_15297 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,inst_15296) : cljs.core.reset_BANG_.call(null,dctr,inst_15296));
var inst_15302 = cljs.core.seq(inst_15295__$1);
var inst_15303 = inst_15302;
var inst_15304 = null;
var inst_15305 = (0);
var inst_15306 = (0);
var state_15363__$1 = (function (){var statearr_15406 = state_15363;
(statearr_15406[(9)] = inst_15304);

(statearr_15406[(30)] = inst_15297);

(statearr_15406[(20)] = inst_15305);

(statearr_15406[(12)] = inst_15306);

(statearr_15406[(29)] = inst_15295__$1);

(statearr_15406[(21)] = inst_15303);

return statearr_15406;
})();
var statearr_15407_15478 = state_15363__$1;
(statearr_15407_15478[(2)] = null);

(statearr_15407_15478[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (28))){
var inst_15322 = (state_15363[(25)]);
var inst_15303 = (state_15363[(21)]);
var inst_15322__$1 = cljs.core.seq(inst_15303);
var state_15363__$1 = (function (){var statearr_15408 = state_15363;
(statearr_15408[(25)] = inst_15322__$1);

return statearr_15408;
})();
if(inst_15322__$1){
var statearr_15409_15479 = state_15363__$1;
(statearr_15409_15479[(1)] = (33));

} else {
var statearr_15410_15480 = state_15363__$1;
(statearr_15410_15480[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (25))){
var inst_15305 = (state_15363[(20)]);
var inst_15306 = (state_15363[(12)]);
var inst_15308 = (inst_15306 < inst_15305);
var inst_15309 = inst_15308;
var state_15363__$1 = state_15363;
if(cljs.core.truth_(inst_15309)){
var statearr_15411_15481 = state_15363__$1;
(statearr_15411_15481[(1)] = (27));

} else {
var statearr_15412_15482 = state_15363__$1;
(statearr_15412_15482[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (34))){
var state_15363__$1 = state_15363;
var statearr_15413_15483 = state_15363__$1;
(statearr_15413_15483[(2)] = null);

(statearr_15413_15483[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (17))){
var state_15363__$1 = state_15363;
var statearr_15414_15484 = state_15363__$1;
(statearr_15414_15484[(2)] = null);

(statearr_15414_15484[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (3))){
var inst_15361 = (state_15363[(2)]);
var state_15363__$1 = state_15363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15363__$1,inst_15361);
} else {
if((state_val_15364 === (12))){
var inst_15290 = (state_15363[(2)]);
var state_15363__$1 = state_15363;
var statearr_15415_15485 = state_15363__$1;
(statearr_15415_15485[(2)] = inst_15290);

(statearr_15415_15485[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (2))){
var state_15363__$1 = state_15363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15363__$1,(4),ch);
} else {
if((state_val_15364 === (23))){
var state_15363__$1 = state_15363;
var statearr_15416_15486 = state_15363__$1;
(statearr_15416_15486[(2)] = null);

(statearr_15416_15486[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (35))){
var inst_15345 = (state_15363[(2)]);
var state_15363__$1 = state_15363;
var statearr_15417_15487 = state_15363__$1;
(statearr_15417_15487[(2)] = inst_15345);

(statearr_15417_15487[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (19))){
var inst_15262 = (state_15363[(7)]);
var inst_15266 = cljs.core.chunk_first(inst_15262);
var inst_15267 = cljs.core.chunk_rest(inst_15262);
var inst_15268 = cljs.core.count(inst_15266);
var inst_15240 = inst_15267;
var inst_15241 = inst_15266;
var inst_15242 = inst_15268;
var inst_15243 = (0);
var state_15363__$1 = (function (){var statearr_15418 = state_15363;
(statearr_15418[(14)] = inst_15241);

(statearr_15418[(15)] = inst_15240);

(statearr_15418[(16)] = inst_15243);

(statearr_15418[(17)] = inst_15242);

return statearr_15418;
})();
var statearr_15419_15488 = state_15363__$1;
(statearr_15419_15488[(2)] = null);

(statearr_15419_15488[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (11))){
var inst_15240 = (state_15363[(15)]);
var inst_15262 = (state_15363[(7)]);
var inst_15262__$1 = cljs.core.seq(inst_15240);
var state_15363__$1 = (function (){var statearr_15420 = state_15363;
(statearr_15420[(7)] = inst_15262__$1);

return statearr_15420;
})();
if(inst_15262__$1){
var statearr_15421_15489 = state_15363__$1;
(statearr_15421_15489[(1)] = (16));

} else {
var statearr_15422_15490 = state_15363__$1;
(statearr_15422_15490[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (9))){
var inst_15292 = (state_15363[(2)]);
var state_15363__$1 = state_15363;
var statearr_15423_15491 = state_15363__$1;
(statearr_15423_15491[(2)] = inst_15292);

(statearr_15423_15491[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (5))){
var inst_15238 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs) : cljs.core.deref.call(null,cs));
var inst_15239 = cljs.core.seq(inst_15238);
var inst_15240 = inst_15239;
var inst_15241 = null;
var inst_15242 = (0);
var inst_15243 = (0);
var state_15363__$1 = (function (){var statearr_15424 = state_15363;
(statearr_15424[(14)] = inst_15241);

(statearr_15424[(15)] = inst_15240);

(statearr_15424[(16)] = inst_15243);

(statearr_15424[(17)] = inst_15242);

return statearr_15424;
})();
var statearr_15425_15492 = state_15363__$1;
(statearr_15425_15492[(2)] = null);

(statearr_15425_15492[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (14))){
var state_15363__$1 = state_15363;
var statearr_15426_15493 = state_15363__$1;
(statearr_15426_15493[(2)] = null);

(statearr_15426_15493[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (45))){
var inst_15353 = (state_15363[(2)]);
var state_15363__$1 = state_15363;
var statearr_15427_15494 = state_15363__$1;
(statearr_15427_15494[(2)] = inst_15353);

(statearr_15427_15494[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (26))){
var inst_15295 = (state_15363[(29)]);
var inst_15349 = (state_15363[(2)]);
var inst_15350 = cljs.core.seq(inst_15295);
var state_15363__$1 = (function (){var statearr_15428 = state_15363;
(statearr_15428[(31)] = inst_15349);

return statearr_15428;
})();
if(inst_15350){
var statearr_15429_15495 = state_15363__$1;
(statearr_15429_15495[(1)] = (42));

} else {
var statearr_15430_15496 = state_15363__$1;
(statearr_15430_15496[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (16))){
var inst_15262 = (state_15363[(7)]);
var inst_15264 = cljs.core.chunked_seq_QMARK_(inst_15262);
var state_15363__$1 = state_15363;
if(inst_15264){
var statearr_15431_15497 = state_15363__$1;
(statearr_15431_15497[(1)] = (19));

} else {
var statearr_15432_15498 = state_15363__$1;
(statearr_15432_15498[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (38))){
var inst_15342 = (state_15363[(2)]);
var state_15363__$1 = state_15363;
var statearr_15433_15499 = state_15363__$1;
(statearr_15433_15499[(2)] = inst_15342);

(statearr_15433_15499[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (30))){
var state_15363__$1 = state_15363;
var statearr_15434_15500 = state_15363__$1;
(statearr_15434_15500[(2)] = null);

(statearr_15434_15500[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (10))){
var inst_15241 = (state_15363[(14)]);
var inst_15243 = (state_15363[(16)]);
var inst_15251 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15241,inst_15243);
var inst_15252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15251,(0),null);
var inst_15253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15251,(1),null);
var state_15363__$1 = (function (){var statearr_15435 = state_15363;
(statearr_15435[(26)] = inst_15252);

return statearr_15435;
})();
if(cljs.core.truth_(inst_15253)){
var statearr_15436_15501 = state_15363__$1;
(statearr_15436_15501[(1)] = (13));

} else {
var statearr_15437_15502 = state_15363__$1;
(statearr_15437_15502[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (18))){
var inst_15288 = (state_15363[(2)]);
var state_15363__$1 = state_15363;
var statearr_15438_15503 = state_15363__$1;
(statearr_15438_15503[(2)] = inst_15288);

(statearr_15438_15503[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (42))){
var state_15363__$1 = state_15363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15363__$1,(45),dchan);
} else {
if((state_val_15364 === (37))){
var inst_15231 = (state_15363[(11)]);
var inst_15322 = (state_15363[(25)]);
var inst_15331 = (state_15363[(23)]);
var inst_15331__$1 = cljs.core.first(inst_15322);
var inst_15332 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15331__$1,inst_15231,done);
var state_15363__$1 = (function (){var statearr_15439 = state_15363;
(statearr_15439[(23)] = inst_15331__$1);

return statearr_15439;
})();
if(cljs.core.truth_(inst_15332)){
var statearr_15440_15504 = state_15363__$1;
(statearr_15440_15504[(1)] = (39));

} else {
var statearr_15441_15505 = state_15363__$1;
(statearr_15441_15505[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15364 === (8))){
var inst_15243 = (state_15363[(16)]);
var inst_15242 = (state_15363[(17)]);
var inst_15245 = (inst_15243 < inst_15242);
var inst_15246 = inst_15245;
var state_15363__$1 = state_15363;
if(cljs.core.truth_(inst_15246)){
var statearr_15442_15506 = state_15363__$1;
(statearr_15442_15506[(1)] = (10));

} else {
var statearr_15443_15507 = state_15363__$1;
(statearr_15443_15507[(1)] = (11));

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
});})(c__14088__auto___15453,cs,m,dchan,dctr,done))
;
return ((function (switch__13964__auto__,c__14088__auto___15453,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__13965__auto__ = null;
var cljs$core$async$mult_$_state_machine__13965__auto____0 = (function (){
var statearr_15447 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15447[(0)] = cljs$core$async$mult_$_state_machine__13965__auto__);

(statearr_15447[(1)] = (1));

return statearr_15447;
});
var cljs$core$async$mult_$_state_machine__13965__auto____1 = (function (state_15363){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_15363);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e15448){if((e15448 instanceof Object)){
var ex__13968__auto__ = e15448;
var statearr_15449_15508 = state_15363;
(statearr_15449_15508[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15363);

return cljs.core.cst$kw$recur;
} else {
throw e15448;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__15509 = state_15363;
state_15363 = G__15509;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13965__auto__ = function(state_15363){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13965__auto____1.call(this,state_15363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13965__auto____0;
cljs$core$async$mult_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13965__auto____1;
return cljs$core$async$mult_$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___15453,cs,m,dchan,dctr,done))
})();
var state__14090__auto__ = (function (){var statearr_15450 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_15450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___15453);

return statearr_15450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___15453,cs,m,dchan,dctr,done))
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
var args15510 = [];
var len__7484__auto___15513 = arguments.length;
var i__7485__auto___15514 = (0);
while(true){
if((i__7485__auto___15514 < len__7484__auto___15513)){
args15510.push((arguments[i__7485__auto___15514]));

var G__15515 = (i__7485__auto___15514 + (1));
i__7485__auto___15514 = G__15515;
continue;
} else {
}
break;
}

var G__15512 = args15510.length;
switch (G__15512) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15510.length)].join('')));

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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7073__auto__.call(null,m,ch));
} else {
var m__7073__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7073__auto____$1.call(null,m,ch));
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7073__auto__.call(null,m,ch));
} else {
var m__7073__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__7073__auto____$1.call(null,m,ch));
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__7073__auto__.call(null,m));
} else {
var m__7073__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__7073__auto____$1.call(null,m));
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7073__auto__.call(null,m,state_map));
} else {
var m__7073__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__7073__auto____$1.call(null,m,state_map));
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
var x__7072__auto__ = (((m == null))?null:m);
var m__7073__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7073__auto__.call(null,m,mode));
} else {
var m__7073__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__7073__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7491__auto__ = [];
var len__7484__auto___15527 = arguments.length;
var i__7485__auto___15528 = (0);
while(true){
if((i__7485__auto___15528 < len__7484__auto___15527)){
args__7491__auto__.push((arguments[i__7485__auto___15528]));

var G__15529 = (i__7485__auto___15528 + (1));
i__7485__auto___15528 = G__15529;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((3) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7492__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15521){
var map__15522 = p__15521;
var map__15522__$1 = ((((!((map__15522 == null)))?((((map__15522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15522):map__15522);
var opts = map__15522__$1;
var statearr_15524_15530 = state;
(statearr_15524_15530[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts(((function (map__15522,map__15522__$1,opts){
return (function (val){
var statearr_15525_15531 = state;
(statearr_15525_15531[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__15522,map__15522__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_15526_15532 = state;
(statearr_15526_15532[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cb) : cljs.core.deref.call(null,cb)));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15517){
var G__15518 = cljs.core.first(seq15517);
var seq15517__$1 = cljs.core.next(seq15517);
var G__15519 = cljs.core.first(seq15517__$1);
var seq15517__$2 = cljs.core.next(seq15517__$1);
var G__15520 = cljs.core.first(seq15517__$2);
var seq15517__$3 = cljs.core.next(seq15517__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15518,G__15519,G__15520,seq15517__$3);
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
var cs = (function (){var G__15702 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15702) : cljs.core.atom.call(null,G__15702));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = (function (){var G__15703 = cljs.core.cst$kw$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15703) : cljs.core.atom.call(null,G__15703));
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
if(typeof cljs.core.async.t_cljs$core$async15704 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15704 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15705){
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
this.meta15705 = meta15705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15706,meta15705__$1){
var self__ = this;
var _15706__$1 = this;
return (new cljs.core.async.t_cljs$core$async15704(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15705__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15706){
var self__ = this;
var _15706__$1 = this;
return self__.meta15705;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15707_15871 = self__.cs;
var G__15708_15872 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15707_15871,G__15708_15872) : cljs.core.reset_BANG_.call(null,G__15707_15871,G__15708_15872));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15704.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.solo_mode,mode) : cljs.core.reset_BANG_.call(null,self__.solo_mode,mode));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15704.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.with_meta(cljs.core.cst$sym$mix,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out], null))),cljs.core.cst$kw$doc,"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta15705], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15704.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15704";

cljs.core.async.t_cljs$core$async15704.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async15704");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15704 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15704(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15705){
return (new cljs.core.async.t_cljs$core$async15704(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15705));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15704(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14088__auto___15873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___15873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___15873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15808){
var state_val_15809 = (state_15808[(1)]);
if((state_val_15809 === (7))){
var inst_15724 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
var statearr_15810_15874 = state_15808__$1;
(statearr_15810_15874[(2)] = inst_15724);

(statearr_15810_15874[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (20))){
var inst_15736 = (state_15808[(7)]);
var state_15808__$1 = state_15808;
var statearr_15811_15875 = state_15808__$1;
(statearr_15811_15875[(2)] = inst_15736);

(statearr_15811_15875[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (27))){
var state_15808__$1 = state_15808;
var statearr_15812_15876 = state_15808__$1;
(statearr_15812_15876[(2)] = null);

(statearr_15812_15876[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (1))){
var inst_15712 = (state_15808[(8)]);
var inst_15712__$1 = calc_state();
var inst_15714 = (inst_15712__$1 == null);
var inst_15715 = cljs.core.not(inst_15714);
var state_15808__$1 = (function (){var statearr_15813 = state_15808;
(statearr_15813[(8)] = inst_15712__$1);

return statearr_15813;
})();
if(inst_15715){
var statearr_15814_15877 = state_15808__$1;
(statearr_15814_15877[(1)] = (2));

} else {
var statearr_15815_15878 = state_15808__$1;
(statearr_15815_15878[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (24))){
var inst_15782 = (state_15808[(9)]);
var inst_15759 = (state_15808[(10)]);
var inst_15768 = (state_15808[(11)]);
var inst_15782__$1 = (inst_15759.cljs$core$IFn$_invoke$arity$1 ? inst_15759.cljs$core$IFn$_invoke$arity$1(inst_15768) : inst_15759.call(null,inst_15768));
var state_15808__$1 = (function (){var statearr_15816 = state_15808;
(statearr_15816[(9)] = inst_15782__$1);

return statearr_15816;
})();
if(cljs.core.truth_(inst_15782__$1)){
var statearr_15817_15879 = state_15808__$1;
(statearr_15817_15879[(1)] = (29));

} else {
var statearr_15818_15880 = state_15808__$1;
(statearr_15818_15880[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (4))){
var inst_15727 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
if(cljs.core.truth_(inst_15727)){
var statearr_15819_15881 = state_15808__$1;
(statearr_15819_15881[(1)] = (8));

} else {
var statearr_15820_15882 = state_15808__$1;
(statearr_15820_15882[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (15))){
var inst_15753 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
if(cljs.core.truth_(inst_15753)){
var statearr_15821_15883 = state_15808__$1;
(statearr_15821_15883[(1)] = (19));

} else {
var statearr_15822_15884 = state_15808__$1;
(statearr_15822_15884[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (21))){
var inst_15758 = (state_15808[(12)]);
var inst_15758__$1 = (state_15808[(2)]);
var inst_15759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15758__$1,cljs.core.cst$kw$solos);
var inst_15760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15758__$1,cljs.core.cst$kw$mutes);
var inst_15761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15758__$1,cljs.core.cst$kw$reads);
var state_15808__$1 = (function (){var statearr_15823 = state_15808;
(statearr_15823[(10)] = inst_15759);

(statearr_15823[(12)] = inst_15758__$1);

(statearr_15823[(13)] = inst_15760);

return statearr_15823;
})();
return cljs.core.async.ioc_alts_BANG_(state_15808__$1,(22),inst_15761);
} else {
if((state_val_15809 === (31))){
var inst_15790 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
if(cljs.core.truth_(inst_15790)){
var statearr_15824_15885 = state_15808__$1;
(statearr_15824_15885[(1)] = (32));

} else {
var statearr_15825_15886 = state_15808__$1;
(statearr_15825_15886[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (32))){
var inst_15767 = (state_15808[(14)]);
var state_15808__$1 = state_15808;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15808__$1,(35),out,inst_15767);
} else {
if((state_val_15809 === (33))){
var inst_15758 = (state_15808[(12)]);
var inst_15736 = inst_15758;
var state_15808__$1 = (function (){var statearr_15826 = state_15808;
(statearr_15826[(7)] = inst_15736);

return statearr_15826;
})();
var statearr_15827_15887 = state_15808__$1;
(statearr_15827_15887[(2)] = null);

(statearr_15827_15887[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (13))){
var inst_15736 = (state_15808[(7)]);
var inst_15743 = inst_15736.cljs$lang$protocol_mask$partition0$;
var inst_15744 = (inst_15743 & (64));
var inst_15745 = inst_15736.cljs$core$ISeq$;
var inst_15746 = (inst_15744) || (inst_15745);
var state_15808__$1 = state_15808;
if(cljs.core.truth_(inst_15746)){
var statearr_15828_15888 = state_15808__$1;
(statearr_15828_15888[(1)] = (16));

} else {
var statearr_15829_15889 = state_15808__$1;
(statearr_15829_15889[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (22))){
var inst_15768 = (state_15808[(11)]);
var inst_15767 = (state_15808[(14)]);
var inst_15766 = (state_15808[(2)]);
var inst_15767__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15766,(0),null);
var inst_15768__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15766,(1),null);
var inst_15769 = (inst_15767__$1 == null);
var inst_15770 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15768__$1,change);
var inst_15771 = (inst_15769) || (inst_15770);
var state_15808__$1 = (function (){var statearr_15830 = state_15808;
(statearr_15830[(11)] = inst_15768__$1);

(statearr_15830[(14)] = inst_15767__$1);

return statearr_15830;
})();
if(cljs.core.truth_(inst_15771)){
var statearr_15831_15890 = state_15808__$1;
(statearr_15831_15890[(1)] = (23));

} else {
var statearr_15832_15891 = state_15808__$1;
(statearr_15832_15891[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (36))){
var inst_15758 = (state_15808[(12)]);
var inst_15736 = inst_15758;
var state_15808__$1 = (function (){var statearr_15833 = state_15808;
(statearr_15833[(7)] = inst_15736);

return statearr_15833;
})();
var statearr_15834_15892 = state_15808__$1;
(statearr_15834_15892[(2)] = null);

(statearr_15834_15892[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (29))){
var inst_15782 = (state_15808[(9)]);
var state_15808__$1 = state_15808;
var statearr_15835_15893 = state_15808__$1;
(statearr_15835_15893[(2)] = inst_15782);

(statearr_15835_15893[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (6))){
var state_15808__$1 = state_15808;
var statearr_15836_15894 = state_15808__$1;
(statearr_15836_15894[(2)] = false);

(statearr_15836_15894[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (28))){
var inst_15778 = (state_15808[(2)]);
var inst_15779 = calc_state();
var inst_15736 = inst_15779;
var state_15808__$1 = (function (){var statearr_15837 = state_15808;
(statearr_15837[(15)] = inst_15778);

(statearr_15837[(7)] = inst_15736);

return statearr_15837;
})();
var statearr_15838_15895 = state_15808__$1;
(statearr_15838_15895[(2)] = null);

(statearr_15838_15895[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (25))){
var inst_15804 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
var statearr_15839_15896 = state_15808__$1;
(statearr_15839_15896[(2)] = inst_15804);

(statearr_15839_15896[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (34))){
var inst_15802 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
var statearr_15840_15897 = state_15808__$1;
(statearr_15840_15897[(2)] = inst_15802);

(statearr_15840_15897[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (17))){
var state_15808__$1 = state_15808;
var statearr_15841_15898 = state_15808__$1;
(statearr_15841_15898[(2)] = false);

(statearr_15841_15898[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (3))){
var state_15808__$1 = state_15808;
var statearr_15842_15899 = state_15808__$1;
(statearr_15842_15899[(2)] = false);

(statearr_15842_15899[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (12))){
var inst_15806 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15808__$1,inst_15806);
} else {
if((state_val_15809 === (2))){
var inst_15712 = (state_15808[(8)]);
var inst_15717 = inst_15712.cljs$lang$protocol_mask$partition0$;
var inst_15718 = (inst_15717 & (64));
var inst_15719 = inst_15712.cljs$core$ISeq$;
var inst_15720 = (inst_15718) || (inst_15719);
var state_15808__$1 = state_15808;
if(cljs.core.truth_(inst_15720)){
var statearr_15843_15900 = state_15808__$1;
(statearr_15843_15900[(1)] = (5));

} else {
var statearr_15844_15901 = state_15808__$1;
(statearr_15844_15901[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (23))){
var inst_15767 = (state_15808[(14)]);
var inst_15773 = (inst_15767 == null);
var state_15808__$1 = state_15808;
if(cljs.core.truth_(inst_15773)){
var statearr_15845_15902 = state_15808__$1;
(statearr_15845_15902[(1)] = (26));

} else {
var statearr_15846_15903 = state_15808__$1;
(statearr_15846_15903[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (35))){
var inst_15793 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
if(cljs.core.truth_(inst_15793)){
var statearr_15847_15904 = state_15808__$1;
(statearr_15847_15904[(1)] = (36));

} else {
var statearr_15848_15905 = state_15808__$1;
(statearr_15848_15905[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (19))){
var inst_15736 = (state_15808[(7)]);
var inst_15755 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15736);
var state_15808__$1 = state_15808;
var statearr_15849_15906 = state_15808__$1;
(statearr_15849_15906[(2)] = inst_15755);

(statearr_15849_15906[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (11))){
var inst_15736 = (state_15808[(7)]);
var inst_15740 = (inst_15736 == null);
var inst_15741 = cljs.core.not(inst_15740);
var state_15808__$1 = state_15808;
if(inst_15741){
var statearr_15850_15907 = state_15808__$1;
(statearr_15850_15907[(1)] = (13));

} else {
var statearr_15851_15908 = state_15808__$1;
(statearr_15851_15908[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (9))){
var inst_15712 = (state_15808[(8)]);
var state_15808__$1 = state_15808;
var statearr_15852_15909 = state_15808__$1;
(statearr_15852_15909[(2)] = inst_15712);

(statearr_15852_15909[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (5))){
var state_15808__$1 = state_15808;
var statearr_15853_15910 = state_15808__$1;
(statearr_15853_15910[(2)] = true);

(statearr_15853_15910[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (14))){
var state_15808__$1 = state_15808;
var statearr_15854_15911 = state_15808__$1;
(statearr_15854_15911[(2)] = false);

(statearr_15854_15911[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (26))){
var inst_15768 = (state_15808[(11)]);
var inst_15775 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15768);
var state_15808__$1 = state_15808;
var statearr_15855_15912 = state_15808__$1;
(statearr_15855_15912[(2)] = inst_15775);

(statearr_15855_15912[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (16))){
var state_15808__$1 = state_15808;
var statearr_15856_15913 = state_15808__$1;
(statearr_15856_15913[(2)] = true);

(statearr_15856_15913[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (38))){
var inst_15798 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
var statearr_15857_15914 = state_15808__$1;
(statearr_15857_15914[(2)] = inst_15798);

(statearr_15857_15914[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (30))){
var inst_15759 = (state_15808[(10)]);
var inst_15768 = (state_15808[(11)]);
var inst_15760 = (state_15808[(13)]);
var inst_15785 = cljs.core.empty_QMARK_(inst_15759);
var inst_15786 = (inst_15760.cljs$core$IFn$_invoke$arity$1 ? inst_15760.cljs$core$IFn$_invoke$arity$1(inst_15768) : inst_15760.call(null,inst_15768));
var inst_15787 = cljs.core.not(inst_15786);
var inst_15788 = (inst_15785) && (inst_15787);
var state_15808__$1 = state_15808;
var statearr_15858_15915 = state_15808__$1;
(statearr_15858_15915[(2)] = inst_15788);

(statearr_15858_15915[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (10))){
var inst_15712 = (state_15808[(8)]);
var inst_15732 = (state_15808[(2)]);
var inst_15733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15732,cljs.core.cst$kw$solos);
var inst_15734 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15732,cljs.core.cst$kw$mutes);
var inst_15735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15732,cljs.core.cst$kw$reads);
var inst_15736 = inst_15712;
var state_15808__$1 = (function (){var statearr_15859 = state_15808;
(statearr_15859[(16)] = inst_15734);

(statearr_15859[(7)] = inst_15736);

(statearr_15859[(17)] = inst_15733);

(statearr_15859[(18)] = inst_15735);

return statearr_15859;
})();
var statearr_15860_15916 = state_15808__$1;
(statearr_15860_15916[(2)] = null);

(statearr_15860_15916[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (18))){
var inst_15750 = (state_15808[(2)]);
var state_15808__$1 = state_15808;
var statearr_15861_15917 = state_15808__$1;
(statearr_15861_15917[(2)] = inst_15750);

(statearr_15861_15917[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (37))){
var state_15808__$1 = state_15808;
var statearr_15862_15918 = state_15808__$1;
(statearr_15862_15918[(2)] = null);

(statearr_15862_15918[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_15809 === (8))){
var inst_15712 = (state_15808[(8)]);
var inst_15729 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_15712);
var state_15808__$1 = state_15808;
var statearr_15863_15919 = state_15808__$1;
(statearr_15863_15919[(2)] = inst_15729);

(statearr_15863_15919[(1)] = (10));


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
});})(c__14088__auto___15873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__13964__auto__,c__14088__auto___15873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__13965__auto__ = null;
var cljs$core$async$mix_$_state_machine__13965__auto____0 = (function (){
var statearr_15867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15867[(0)] = cljs$core$async$mix_$_state_machine__13965__auto__);

(statearr_15867[(1)] = (1));

return statearr_15867;
});
var cljs$core$async$mix_$_state_machine__13965__auto____1 = (function (state_15808){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_15808);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e15868){if((e15868 instanceof Object)){
var ex__13968__auto__ = e15868;
var statearr_15869_15920 = state_15808;
(statearr_15869_15920[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_15808);

return cljs.core.cst$kw$recur;
} else {
throw e15868;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__15921 = state_15808;
state_15808 = G__15921;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13965__auto__ = function(state_15808){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13965__auto____1.call(this,state_15808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13965__auto____0;
cljs$core$async$mix_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13965__auto____1;
return cljs$core$async$mix_$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___15873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__14090__auto__ = (function (){var statearr_15870 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_15870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___15873);

return statearr_15870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___15873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$4 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7073__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__7073__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__7073__auto____$1.call(null,p,v,ch,close_QMARK_));
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
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7073__auto__.call(null,p,v,ch));
} else {
var m__7073__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__7073__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args15922 = [];
var len__7484__auto___15925 = arguments.length;
var i__7485__auto___15926 = (0);
while(true){
if((i__7485__auto___15926 < len__7484__auto___15925)){
args15922.push((arguments[i__7485__auto___15926]));

var G__15927 = (i__7485__auto___15926 + (1));
i__7485__auto___15926 = G__15927;
continue;
} else {
}
break;
}

var G__15924 = args15922.length;
switch (G__15924) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15922.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__7073__auto__.call(null,p));
} else {
var m__7073__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__7073__auto____$1.call(null,p));
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
var x__7072__auto__ = (((p == null))?null:p);
var m__7073__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return (m__7073__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__7073__auto__.call(null,p,v));
} else {
var m__7073__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7073__auto____$1 == null))){
return (m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7073__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__7073__auto____$1.call(null,p,v));
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
var args15930 = [];
var len__7484__auto___16058 = arguments.length;
var i__7485__auto___16059 = (0);
while(true){
if((i__7485__auto___16059 < len__7484__auto___16058)){
args15930.push((arguments[i__7485__auto___16059]));

var G__16060 = (i__7485__auto___16059 + (1));
i__7485__auto___16059 = G__16060;
continue;
} else {
}
break;
}

var G__15932 = args15930.length;
switch (G__15932) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15930.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__15933 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__15933) : cljs.core.atom.call(null,G__15933));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__6409__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults)),topic);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__6409__auto__,mults){
return (function (p1__15929_SHARP_){
if(cljs.core.truth_((p1__15929_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15929_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15929_SHARP_.call(null,topic)))){
return p1__15929_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15929_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__6409__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15934 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15934 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15935){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15935 = meta15935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15936,meta15935__$1){
var self__ = this;
var _15936__$1 = this;
return (new cljs.core.async.t_cljs$core$async15934(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15935__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15936){
var self__ = this;
var _15936__$1 = this;
return self__.meta15935;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.mults) : cljs.core.deref.call(null,self__.mults)),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__15937 = self__.mults;
var G__15938 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15937,G__15938) : cljs.core.reset_BANG_.call(null,G__15937,G__15938));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15934.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15934.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta15935], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15934";

cljs.core.async.t_cljs$core$async15934.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async15934");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15934 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15934(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15935){
return (new cljs.core.async.t_cljs$core$async15934(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15935));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15934(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14088__auto___16062 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___16062,mults,ensure_mult,p){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___16062,mults,ensure_mult,p){
return (function (state_16010){
var state_val_16011 = (state_16010[(1)]);
if((state_val_16011 === (7))){
var inst_16006 = (state_16010[(2)]);
var state_16010__$1 = state_16010;
var statearr_16012_16063 = state_16010__$1;
(statearr_16012_16063[(2)] = inst_16006);

(statearr_16012_16063[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (20))){
var state_16010__$1 = state_16010;
var statearr_16013_16064 = state_16010__$1;
(statearr_16013_16064[(2)] = null);

(statearr_16013_16064[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (1))){
var state_16010__$1 = state_16010;
var statearr_16014_16065 = state_16010__$1;
(statearr_16014_16065[(2)] = null);

(statearr_16014_16065[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (24))){
var inst_15989 = (state_16010[(7)]);
var inst_15998 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15989);
var state_16010__$1 = state_16010;
var statearr_16015_16066 = state_16010__$1;
(statearr_16015_16066[(2)] = inst_15998);

(statearr_16015_16066[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (4))){
var inst_15941 = (state_16010[(8)]);
var inst_15941__$1 = (state_16010[(2)]);
var inst_15942 = (inst_15941__$1 == null);
var state_16010__$1 = (function (){var statearr_16016 = state_16010;
(statearr_16016[(8)] = inst_15941__$1);

return statearr_16016;
})();
if(cljs.core.truth_(inst_15942)){
var statearr_16017_16067 = state_16010__$1;
(statearr_16017_16067[(1)] = (5));

} else {
var statearr_16018_16068 = state_16010__$1;
(statearr_16018_16068[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (15))){
var inst_15983 = (state_16010[(2)]);
var state_16010__$1 = state_16010;
var statearr_16019_16069 = state_16010__$1;
(statearr_16019_16069[(2)] = inst_15983);

(statearr_16019_16069[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (21))){
var inst_16003 = (state_16010[(2)]);
var state_16010__$1 = (function (){var statearr_16020 = state_16010;
(statearr_16020[(9)] = inst_16003);

return statearr_16020;
})();
var statearr_16021_16070 = state_16010__$1;
(statearr_16021_16070[(2)] = null);

(statearr_16021_16070[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (13))){
var inst_15965 = (state_16010[(10)]);
var inst_15967 = cljs.core.chunked_seq_QMARK_(inst_15965);
var state_16010__$1 = state_16010;
if(inst_15967){
var statearr_16022_16071 = state_16010__$1;
(statearr_16022_16071[(1)] = (16));

} else {
var statearr_16023_16072 = state_16010__$1;
(statearr_16023_16072[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (22))){
var inst_15995 = (state_16010[(2)]);
var state_16010__$1 = state_16010;
if(cljs.core.truth_(inst_15995)){
var statearr_16024_16073 = state_16010__$1;
(statearr_16024_16073[(1)] = (23));

} else {
var statearr_16025_16074 = state_16010__$1;
(statearr_16025_16074[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (6))){
var inst_15991 = (state_16010[(11)]);
var inst_15989 = (state_16010[(7)]);
var inst_15941 = (state_16010[(8)]);
var inst_15989__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15941) : topic_fn.call(null,inst_15941));
var inst_15990 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15991__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15990,inst_15989__$1);
var state_16010__$1 = (function (){var statearr_16026 = state_16010;
(statearr_16026[(11)] = inst_15991__$1);

(statearr_16026[(7)] = inst_15989__$1);

return statearr_16026;
})();
if(cljs.core.truth_(inst_15991__$1)){
var statearr_16027_16075 = state_16010__$1;
(statearr_16027_16075[(1)] = (19));

} else {
var statearr_16028_16076 = state_16010__$1;
(statearr_16028_16076[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (25))){
var inst_16000 = (state_16010[(2)]);
var state_16010__$1 = state_16010;
var statearr_16029_16077 = state_16010__$1;
(statearr_16029_16077[(2)] = inst_16000);

(statearr_16029_16077[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (17))){
var inst_15965 = (state_16010[(10)]);
var inst_15974 = cljs.core.first(inst_15965);
var inst_15975 = cljs.core.async.muxch_STAR_(inst_15974);
var inst_15976 = cljs.core.async.close_BANG_(inst_15975);
var inst_15977 = cljs.core.next(inst_15965);
var inst_15951 = inst_15977;
var inst_15952 = null;
var inst_15953 = (0);
var inst_15954 = (0);
var state_16010__$1 = (function (){var statearr_16030 = state_16010;
(statearr_16030[(12)] = inst_15953);

(statearr_16030[(13)] = inst_15976);

(statearr_16030[(14)] = inst_15954);

(statearr_16030[(15)] = inst_15951);

(statearr_16030[(16)] = inst_15952);

return statearr_16030;
})();
var statearr_16031_16078 = state_16010__$1;
(statearr_16031_16078[(2)] = null);

(statearr_16031_16078[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (3))){
var inst_16008 = (state_16010[(2)]);
var state_16010__$1 = state_16010;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16010__$1,inst_16008);
} else {
if((state_val_16011 === (12))){
var inst_15985 = (state_16010[(2)]);
var state_16010__$1 = state_16010;
var statearr_16032_16079 = state_16010__$1;
(statearr_16032_16079[(2)] = inst_15985);

(statearr_16032_16079[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (2))){
var state_16010__$1 = state_16010;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16010__$1,(4),ch);
} else {
if((state_val_16011 === (23))){
var state_16010__$1 = state_16010;
var statearr_16033_16080 = state_16010__$1;
(statearr_16033_16080[(2)] = null);

(statearr_16033_16080[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (19))){
var inst_15991 = (state_16010[(11)]);
var inst_15941 = (state_16010[(8)]);
var inst_15993 = cljs.core.async.muxch_STAR_(inst_15991);
var state_16010__$1 = state_16010;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16010__$1,(22),inst_15993,inst_15941);
} else {
if((state_val_16011 === (11))){
var inst_15951 = (state_16010[(15)]);
var inst_15965 = (state_16010[(10)]);
var inst_15965__$1 = cljs.core.seq(inst_15951);
var state_16010__$1 = (function (){var statearr_16034 = state_16010;
(statearr_16034[(10)] = inst_15965__$1);

return statearr_16034;
})();
if(inst_15965__$1){
var statearr_16035_16081 = state_16010__$1;
(statearr_16035_16081[(1)] = (13));

} else {
var statearr_16036_16082 = state_16010__$1;
(statearr_16036_16082[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (9))){
var inst_15987 = (state_16010[(2)]);
var state_16010__$1 = state_16010;
var statearr_16037_16083 = state_16010__$1;
(statearr_16037_16083[(2)] = inst_15987);

(statearr_16037_16083[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (5))){
var inst_15948 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mults) : cljs.core.deref.call(null,mults));
var inst_15949 = cljs.core.vals(inst_15948);
var inst_15950 = cljs.core.seq(inst_15949);
var inst_15951 = inst_15950;
var inst_15952 = null;
var inst_15953 = (0);
var inst_15954 = (0);
var state_16010__$1 = (function (){var statearr_16038 = state_16010;
(statearr_16038[(12)] = inst_15953);

(statearr_16038[(14)] = inst_15954);

(statearr_16038[(15)] = inst_15951);

(statearr_16038[(16)] = inst_15952);

return statearr_16038;
})();
var statearr_16039_16084 = state_16010__$1;
(statearr_16039_16084[(2)] = null);

(statearr_16039_16084[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (14))){
var state_16010__$1 = state_16010;
var statearr_16043_16085 = state_16010__$1;
(statearr_16043_16085[(2)] = null);

(statearr_16043_16085[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (16))){
var inst_15965 = (state_16010[(10)]);
var inst_15969 = cljs.core.chunk_first(inst_15965);
var inst_15970 = cljs.core.chunk_rest(inst_15965);
var inst_15971 = cljs.core.count(inst_15969);
var inst_15951 = inst_15970;
var inst_15952 = inst_15969;
var inst_15953 = inst_15971;
var inst_15954 = (0);
var state_16010__$1 = (function (){var statearr_16044 = state_16010;
(statearr_16044[(12)] = inst_15953);

(statearr_16044[(14)] = inst_15954);

(statearr_16044[(15)] = inst_15951);

(statearr_16044[(16)] = inst_15952);

return statearr_16044;
})();
var statearr_16045_16086 = state_16010__$1;
(statearr_16045_16086[(2)] = null);

(statearr_16045_16086[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (10))){
var inst_15953 = (state_16010[(12)]);
var inst_15954 = (state_16010[(14)]);
var inst_15951 = (state_16010[(15)]);
var inst_15952 = (state_16010[(16)]);
var inst_15959 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_15952,inst_15954);
var inst_15960 = cljs.core.async.muxch_STAR_(inst_15959);
var inst_15961 = cljs.core.async.close_BANG_(inst_15960);
var inst_15962 = (inst_15954 + (1));
var tmp16040 = inst_15953;
var tmp16041 = inst_15951;
var tmp16042 = inst_15952;
var inst_15951__$1 = tmp16041;
var inst_15952__$1 = tmp16042;
var inst_15953__$1 = tmp16040;
var inst_15954__$1 = inst_15962;
var state_16010__$1 = (function (){var statearr_16046 = state_16010;
(statearr_16046[(12)] = inst_15953__$1);

(statearr_16046[(14)] = inst_15954__$1);

(statearr_16046[(15)] = inst_15951__$1);

(statearr_16046[(16)] = inst_15952__$1);

(statearr_16046[(17)] = inst_15961);

return statearr_16046;
})();
var statearr_16047_16087 = state_16010__$1;
(statearr_16047_16087[(2)] = null);

(statearr_16047_16087[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (18))){
var inst_15980 = (state_16010[(2)]);
var state_16010__$1 = state_16010;
var statearr_16048_16088 = state_16010__$1;
(statearr_16048_16088[(2)] = inst_15980);

(statearr_16048_16088[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16011 === (8))){
var inst_15953 = (state_16010[(12)]);
var inst_15954 = (state_16010[(14)]);
var inst_15956 = (inst_15954 < inst_15953);
var inst_15957 = inst_15956;
var state_16010__$1 = state_16010;
if(cljs.core.truth_(inst_15957)){
var statearr_16049_16089 = state_16010__$1;
(statearr_16049_16089[(1)] = (10));

} else {
var statearr_16050_16090 = state_16010__$1;
(statearr_16050_16090[(1)] = (11));

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
});})(c__14088__auto___16062,mults,ensure_mult,p))
;
return ((function (switch__13964__auto__,c__14088__auto___16062,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__13965__auto__ = null;
var cljs$core$async$state_machine__13965__auto____0 = (function (){
var statearr_16054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16054[(0)] = cljs$core$async$state_machine__13965__auto__);

(statearr_16054[(1)] = (1));

return statearr_16054;
});
var cljs$core$async$state_machine__13965__auto____1 = (function (state_16010){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_16010);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e16055){if((e16055 instanceof Object)){
var ex__13968__auto__ = e16055;
var statearr_16056_16091 = state_16010;
(statearr_16056_16091[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16010);

return cljs.core.cst$kw$recur;
} else {
throw e16055;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__16092 = state_16010;
state_16010 = G__16092;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$state_machine__13965__auto__ = function(state_16010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13965__auto____1.call(this,state_16010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13965__auto____0;
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13965__auto____1;
return cljs$core$async$state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___16062,mults,ensure_mult,p))
})();
var state__14090__auto__ = (function (){var statearr_16057 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_16057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___16062);

return statearr_16057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___16062,mults,ensure_mult,p))
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
var args16093 = [];
var len__7484__auto___16096 = arguments.length;
var i__7485__auto___16097 = (0);
while(true){
if((i__7485__auto___16097 < len__7484__auto___16096)){
args16093.push((arguments[i__7485__auto___16097]));

var G__16098 = (i__7485__auto___16097 + (1));
i__7485__auto___16097 = G__16098;
continue;
} else {
}
break;
}

var G__16095 = args16093.length;
switch (G__16095) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16093.length)].join('')));

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
var args16100 = [];
var len__7484__auto___16103 = arguments.length;
var i__7485__auto___16104 = (0);
while(true){
if((i__7485__auto___16104 < len__7484__auto___16103)){
args16100.push((arguments[i__7485__auto___16104]));

var G__16105 = (i__7485__auto___16104 + (1));
i__7485__auto___16104 = G__16105;
continue;
} else {
}
break;
}

var G__16102 = args16100.length;
switch (G__16102) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16100.length)].join('')));

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
var args16107 = [];
var len__7484__auto___16178 = arguments.length;
var i__7485__auto___16179 = (0);
while(true){
if((i__7485__auto___16179 < len__7484__auto___16178)){
args16107.push((arguments[i__7485__auto___16179]));

var G__16180 = (i__7485__auto___16179 + (1));
i__7485__auto___16179 = G__16180;
continue;
} else {
}
break;
}

var G__16109 = args16107.length;
switch (G__16109) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16107.length)].join('')));

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
var c__14088__auto___16182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___16182,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___16182,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16148){
var state_val_16149 = (state_16148[(1)]);
if((state_val_16149 === (7))){
var state_16148__$1 = state_16148;
var statearr_16150_16183 = state_16148__$1;
(statearr_16150_16183[(2)] = null);

(statearr_16150_16183[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16149 === (1))){
var state_16148__$1 = state_16148;
var statearr_16151_16184 = state_16148__$1;
(statearr_16151_16184[(2)] = null);

(statearr_16151_16184[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16149 === (4))){
var inst_16112 = (state_16148[(7)]);
var inst_16114 = (inst_16112 < cnt);
var state_16148__$1 = state_16148;
if(cljs.core.truth_(inst_16114)){
var statearr_16152_16185 = state_16148__$1;
(statearr_16152_16185[(1)] = (6));

} else {
var statearr_16153_16186 = state_16148__$1;
(statearr_16153_16186[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16149 === (15))){
var inst_16144 = (state_16148[(2)]);
var state_16148__$1 = state_16148;
var statearr_16154_16187 = state_16148__$1;
(statearr_16154_16187[(2)] = inst_16144);

(statearr_16154_16187[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16149 === (13))){
var inst_16137 = cljs.core.async.close_BANG_(out);
var state_16148__$1 = state_16148;
var statearr_16155_16188 = state_16148__$1;
(statearr_16155_16188[(2)] = inst_16137);

(statearr_16155_16188[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16149 === (6))){
var state_16148__$1 = state_16148;
var statearr_16156_16189 = state_16148__$1;
(statearr_16156_16189[(2)] = null);

(statearr_16156_16189[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16149 === (3))){
var inst_16146 = (state_16148[(2)]);
var state_16148__$1 = state_16148;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16148__$1,inst_16146);
} else {
if((state_val_16149 === (12))){
var inst_16134 = (state_16148[(8)]);
var inst_16134__$1 = (state_16148[(2)]);
var inst_16135 = cljs.core.some(cljs.core.nil_QMARK_,inst_16134__$1);
var state_16148__$1 = (function (){var statearr_16157 = state_16148;
(statearr_16157[(8)] = inst_16134__$1);

return statearr_16157;
})();
if(cljs.core.truth_(inst_16135)){
var statearr_16158_16190 = state_16148__$1;
(statearr_16158_16190[(1)] = (13));

} else {
var statearr_16159_16191 = state_16148__$1;
(statearr_16159_16191[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16149 === (2))){
var inst_16111 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cnt) : cljs.core.reset_BANG_.call(null,dctr,cnt));
var inst_16112 = (0);
var state_16148__$1 = (function (){var statearr_16160 = state_16148;
(statearr_16160[(7)] = inst_16112);

(statearr_16160[(9)] = inst_16111);

return statearr_16160;
})();
var statearr_16161_16192 = state_16148__$1;
(statearr_16161_16192[(2)] = null);

(statearr_16161_16192[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16149 === (11))){
var inst_16112 = (state_16148[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_16148,(10),Object,null,(9));
var inst_16121 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16112) : chs__$1.call(null,inst_16112));
var inst_16122 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16112) : done.call(null,inst_16112));
var inst_16123 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16121,inst_16122);
var state_16148__$1 = state_16148;
var statearr_16162_16193 = state_16148__$1;
(statearr_16162_16193[(2)] = inst_16123);


cljs.core.async.impl.ioc_helpers.process_exception(state_16148__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16149 === (9))){
var inst_16112 = (state_16148[(7)]);
var inst_16125 = (state_16148[(2)]);
var inst_16126 = (inst_16112 + (1));
var inst_16112__$1 = inst_16126;
var state_16148__$1 = (function (){var statearr_16163 = state_16148;
(statearr_16163[(10)] = inst_16125);

(statearr_16163[(7)] = inst_16112__$1);

return statearr_16163;
})();
var statearr_16164_16194 = state_16148__$1;
(statearr_16164_16194[(2)] = null);

(statearr_16164_16194[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16149 === (5))){
var inst_16132 = (state_16148[(2)]);
var state_16148__$1 = (function (){var statearr_16165 = state_16148;
(statearr_16165[(11)] = inst_16132);

return statearr_16165;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16148__$1,(12),dchan);
} else {
if((state_val_16149 === (14))){
var inst_16134 = (state_16148[(8)]);
var inst_16139 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16134);
var state_16148__$1 = state_16148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16148__$1,(16),out,inst_16139);
} else {
if((state_val_16149 === (16))){
var inst_16141 = (state_16148[(2)]);
var state_16148__$1 = (function (){var statearr_16166 = state_16148;
(statearr_16166[(12)] = inst_16141);

return statearr_16166;
})();
var statearr_16167_16195 = state_16148__$1;
(statearr_16167_16195[(2)] = null);

(statearr_16167_16195[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16149 === (10))){
var inst_16116 = (state_16148[(2)]);
var inst_16117 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16148__$1 = (function (){var statearr_16168 = state_16148;
(statearr_16168[(13)] = inst_16116);

return statearr_16168;
})();
var statearr_16169_16196 = state_16148__$1;
(statearr_16169_16196[(2)] = inst_16117);


cljs.core.async.impl.ioc_helpers.process_exception(state_16148__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_16149 === (8))){
var inst_16130 = (state_16148[(2)]);
var state_16148__$1 = state_16148;
var statearr_16170_16197 = state_16148__$1;
(statearr_16170_16197[(2)] = inst_16130);

(statearr_16170_16197[(1)] = (5));


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
});})(c__14088__auto___16182,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__13964__auto__,c__14088__auto___16182,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__13965__auto__ = null;
var cljs$core$async$state_machine__13965__auto____0 = (function (){
var statearr_16174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16174[(0)] = cljs$core$async$state_machine__13965__auto__);

(statearr_16174[(1)] = (1));

return statearr_16174;
});
var cljs$core$async$state_machine__13965__auto____1 = (function (state_16148){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_16148);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e16175){if((e16175 instanceof Object)){
var ex__13968__auto__ = e16175;
var statearr_16176_16198 = state_16148;
(statearr_16176_16198[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16148);

return cljs.core.cst$kw$recur;
} else {
throw e16175;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__16199 = state_16148;
state_16148 = G__16199;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$state_machine__13965__auto__ = function(state_16148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13965__auto____1.call(this,state_16148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13965__auto____0;
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13965__auto____1;
return cljs$core$async$state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___16182,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__14090__auto__ = (function (){var statearr_16177 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_16177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___16182);

return statearr_16177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___16182,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args16201 = [];
var len__7484__auto___16259 = arguments.length;
var i__7485__auto___16260 = (0);
while(true){
if((i__7485__auto___16260 < len__7484__auto___16259)){
args16201.push((arguments[i__7485__auto___16260]));

var G__16261 = (i__7485__auto___16260 + (1));
i__7485__auto___16260 = G__16261;
continue;
} else {
}
break;
}

var G__16203 = args16201.length;
switch (G__16203) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16201.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14088__auto___16263 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___16263,out){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___16263,out){
return (function (state_16235){
var state_val_16236 = (state_16235[(1)]);
if((state_val_16236 === (7))){
var inst_16215 = (state_16235[(7)]);
var inst_16214 = (state_16235[(8)]);
var inst_16214__$1 = (state_16235[(2)]);
var inst_16215__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16214__$1,(0),null);
var inst_16216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16214__$1,(1),null);
var inst_16217 = (inst_16215__$1 == null);
var state_16235__$1 = (function (){var statearr_16237 = state_16235;
(statearr_16237[(7)] = inst_16215__$1);

(statearr_16237[(9)] = inst_16216);

(statearr_16237[(8)] = inst_16214__$1);

return statearr_16237;
})();
if(cljs.core.truth_(inst_16217)){
var statearr_16238_16264 = state_16235__$1;
(statearr_16238_16264[(1)] = (8));

} else {
var statearr_16239_16265 = state_16235__$1;
(statearr_16239_16265[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16236 === (1))){
var inst_16204 = cljs.core.vec(chs);
var inst_16205 = inst_16204;
var state_16235__$1 = (function (){var statearr_16240 = state_16235;
(statearr_16240[(10)] = inst_16205);

return statearr_16240;
})();
var statearr_16241_16266 = state_16235__$1;
(statearr_16241_16266[(2)] = null);

(statearr_16241_16266[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16236 === (4))){
var inst_16205 = (state_16235[(10)]);
var state_16235__$1 = state_16235;
return cljs.core.async.ioc_alts_BANG_(state_16235__$1,(7),inst_16205);
} else {
if((state_val_16236 === (6))){
var inst_16231 = (state_16235[(2)]);
var state_16235__$1 = state_16235;
var statearr_16242_16267 = state_16235__$1;
(statearr_16242_16267[(2)] = inst_16231);

(statearr_16242_16267[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16236 === (3))){
var inst_16233 = (state_16235[(2)]);
var state_16235__$1 = state_16235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16235__$1,inst_16233);
} else {
if((state_val_16236 === (2))){
var inst_16205 = (state_16235[(10)]);
var inst_16207 = cljs.core.count(inst_16205);
var inst_16208 = (inst_16207 > (0));
var state_16235__$1 = state_16235;
if(cljs.core.truth_(inst_16208)){
var statearr_16244_16268 = state_16235__$1;
(statearr_16244_16268[(1)] = (4));

} else {
var statearr_16245_16269 = state_16235__$1;
(statearr_16245_16269[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16236 === (11))){
var inst_16205 = (state_16235[(10)]);
var inst_16224 = (state_16235[(2)]);
var tmp16243 = inst_16205;
var inst_16205__$1 = tmp16243;
var state_16235__$1 = (function (){var statearr_16246 = state_16235;
(statearr_16246[(10)] = inst_16205__$1);

(statearr_16246[(11)] = inst_16224);

return statearr_16246;
})();
var statearr_16247_16270 = state_16235__$1;
(statearr_16247_16270[(2)] = null);

(statearr_16247_16270[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16236 === (9))){
var inst_16215 = (state_16235[(7)]);
var state_16235__$1 = state_16235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16235__$1,(11),out,inst_16215);
} else {
if((state_val_16236 === (5))){
var inst_16229 = cljs.core.async.close_BANG_(out);
var state_16235__$1 = state_16235;
var statearr_16248_16271 = state_16235__$1;
(statearr_16248_16271[(2)] = inst_16229);

(statearr_16248_16271[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16236 === (10))){
var inst_16227 = (state_16235[(2)]);
var state_16235__$1 = state_16235;
var statearr_16249_16272 = state_16235__$1;
(statearr_16249_16272[(2)] = inst_16227);

(statearr_16249_16272[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16236 === (8))){
var inst_16215 = (state_16235[(7)]);
var inst_16216 = (state_16235[(9)]);
var inst_16205 = (state_16235[(10)]);
var inst_16214 = (state_16235[(8)]);
var inst_16219 = (function (){var cs = inst_16205;
var vec__16210 = inst_16214;
var v = inst_16215;
var c = inst_16216;
return ((function (cs,vec__16210,v,c,inst_16215,inst_16216,inst_16205,inst_16214,state_val_16236,c__14088__auto___16263,out){
return (function (p1__16200_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16200_SHARP_);
});
;})(cs,vec__16210,v,c,inst_16215,inst_16216,inst_16205,inst_16214,state_val_16236,c__14088__auto___16263,out))
})();
var inst_16220 = cljs.core.filterv(inst_16219,inst_16205);
var inst_16205__$1 = inst_16220;
var state_16235__$1 = (function (){var statearr_16250 = state_16235;
(statearr_16250[(10)] = inst_16205__$1);

return statearr_16250;
})();
var statearr_16251_16273 = state_16235__$1;
(statearr_16251_16273[(2)] = null);

(statearr_16251_16273[(1)] = (2));


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
});})(c__14088__auto___16263,out))
;
return ((function (switch__13964__auto__,c__14088__auto___16263,out){
return (function() {
var cljs$core$async$state_machine__13965__auto__ = null;
var cljs$core$async$state_machine__13965__auto____0 = (function (){
var statearr_16255 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16255[(0)] = cljs$core$async$state_machine__13965__auto__);

(statearr_16255[(1)] = (1));

return statearr_16255;
});
var cljs$core$async$state_machine__13965__auto____1 = (function (state_16235){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_16235);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e16256){if((e16256 instanceof Object)){
var ex__13968__auto__ = e16256;
var statearr_16257_16274 = state_16235;
(statearr_16257_16274[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16235);

return cljs.core.cst$kw$recur;
} else {
throw e16256;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__16275 = state_16235;
state_16235 = G__16275;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$state_machine__13965__auto__ = function(state_16235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13965__auto____1.call(this,state_16235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13965__auto____0;
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13965__auto____1;
return cljs$core$async$state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___16263,out))
})();
var state__14090__auto__ = (function (){var statearr_16258 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_16258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___16263);

return statearr_16258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___16263,out))
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
var args16276 = [];
var len__7484__auto___16325 = arguments.length;
var i__7485__auto___16326 = (0);
while(true){
if((i__7485__auto___16326 < len__7484__auto___16325)){
args16276.push((arguments[i__7485__auto___16326]));

var G__16327 = (i__7485__auto___16326 + (1));
i__7485__auto___16326 = G__16327;
continue;
} else {
}
break;
}

var G__16278 = args16276.length;
switch (G__16278) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16276.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14088__auto___16329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___16329,out){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___16329,out){
return (function (state_16302){
var state_val_16303 = (state_16302[(1)]);
if((state_val_16303 === (7))){
var inst_16284 = (state_16302[(7)]);
var inst_16284__$1 = (state_16302[(2)]);
var inst_16285 = (inst_16284__$1 == null);
var inst_16286 = cljs.core.not(inst_16285);
var state_16302__$1 = (function (){var statearr_16304 = state_16302;
(statearr_16304[(7)] = inst_16284__$1);

return statearr_16304;
})();
if(inst_16286){
var statearr_16305_16330 = state_16302__$1;
(statearr_16305_16330[(1)] = (8));

} else {
var statearr_16306_16331 = state_16302__$1;
(statearr_16306_16331[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16303 === (1))){
var inst_16279 = (0);
var state_16302__$1 = (function (){var statearr_16307 = state_16302;
(statearr_16307[(8)] = inst_16279);

return statearr_16307;
})();
var statearr_16308_16332 = state_16302__$1;
(statearr_16308_16332[(2)] = null);

(statearr_16308_16332[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16303 === (4))){
var state_16302__$1 = state_16302;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16302__$1,(7),ch);
} else {
if((state_val_16303 === (6))){
var inst_16297 = (state_16302[(2)]);
var state_16302__$1 = state_16302;
var statearr_16309_16333 = state_16302__$1;
(statearr_16309_16333[(2)] = inst_16297);

(statearr_16309_16333[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16303 === (3))){
var inst_16299 = (state_16302[(2)]);
var inst_16300 = cljs.core.async.close_BANG_(out);
var state_16302__$1 = (function (){var statearr_16310 = state_16302;
(statearr_16310[(9)] = inst_16299);

return statearr_16310;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16302__$1,inst_16300);
} else {
if((state_val_16303 === (2))){
var inst_16279 = (state_16302[(8)]);
var inst_16281 = (inst_16279 < n);
var state_16302__$1 = state_16302;
if(cljs.core.truth_(inst_16281)){
var statearr_16311_16334 = state_16302__$1;
(statearr_16311_16334[(1)] = (4));

} else {
var statearr_16312_16335 = state_16302__$1;
(statearr_16312_16335[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16303 === (11))){
var inst_16279 = (state_16302[(8)]);
var inst_16289 = (state_16302[(2)]);
var inst_16290 = (inst_16279 + (1));
var inst_16279__$1 = inst_16290;
var state_16302__$1 = (function (){var statearr_16313 = state_16302;
(statearr_16313[(8)] = inst_16279__$1);

(statearr_16313[(10)] = inst_16289);

return statearr_16313;
})();
var statearr_16314_16336 = state_16302__$1;
(statearr_16314_16336[(2)] = null);

(statearr_16314_16336[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16303 === (9))){
var state_16302__$1 = state_16302;
var statearr_16315_16337 = state_16302__$1;
(statearr_16315_16337[(2)] = null);

(statearr_16315_16337[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16303 === (5))){
var state_16302__$1 = state_16302;
var statearr_16316_16338 = state_16302__$1;
(statearr_16316_16338[(2)] = null);

(statearr_16316_16338[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16303 === (10))){
var inst_16294 = (state_16302[(2)]);
var state_16302__$1 = state_16302;
var statearr_16317_16339 = state_16302__$1;
(statearr_16317_16339[(2)] = inst_16294);

(statearr_16317_16339[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16303 === (8))){
var inst_16284 = (state_16302[(7)]);
var state_16302__$1 = state_16302;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16302__$1,(11),out,inst_16284);
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
});})(c__14088__auto___16329,out))
;
return ((function (switch__13964__auto__,c__14088__auto___16329,out){
return (function() {
var cljs$core$async$state_machine__13965__auto__ = null;
var cljs$core$async$state_machine__13965__auto____0 = (function (){
var statearr_16321 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16321[(0)] = cljs$core$async$state_machine__13965__auto__);

(statearr_16321[(1)] = (1));

return statearr_16321;
});
var cljs$core$async$state_machine__13965__auto____1 = (function (state_16302){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_16302);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e16322){if((e16322 instanceof Object)){
var ex__13968__auto__ = e16322;
var statearr_16323_16340 = state_16302;
(statearr_16323_16340[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16302);

return cljs.core.cst$kw$recur;
} else {
throw e16322;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__16341 = state_16302;
state_16302 = G__16341;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$state_machine__13965__auto__ = function(state_16302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13965__auto____1.call(this,state_16302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13965__auto____0;
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13965__auto____1;
return cljs$core$async$state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___16329,out))
})();
var state__14090__auto__ = (function (){var statearr_16324 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_16324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___16329);

return statearr_16324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___16329,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16351 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16351 = (function (map_LT_,f,ch,meta16352){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16352 = meta16352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16353,meta16352__$1){
var self__ = this;
var _16353__$1 = this;
return (new cljs.core.async.t_cljs$core$async16351(self__.map_LT_,self__.f,self__.ch,meta16352__$1));
});

cljs.core.async.t_cljs$core$async16351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16353){
var self__ = this;
var _16353__$1 = this;
return self__.meta16352;
});

cljs.core.async.t_cljs$core$async16351.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16351.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16351.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16351.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16351.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16354 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16354 = (function (map_LT_,f,ch,meta16352,_,fn1,meta16355){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16352 = meta16352;
this._ = _;
this.fn1 = fn1;
this.meta16355 = meta16355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16356,meta16355__$1){
var self__ = this;
var _16356__$1 = this;
return (new cljs.core.async.t_cljs$core$async16354(self__.map_LT_,self__.f,self__.ch,self__.meta16352,self__._,self__.fn1,meta16355__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16356){
var self__ = this;
var _16356__$1 = this;
return self__.meta16355;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16354.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16354.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16342_SHARP_){
var G__16357 = (((p1__16342_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16342_SHARP_) : self__.f.call(null,p1__16342_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16357) : f1.call(null,G__16357));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16354.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16352,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async16351], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta16355], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16354.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16354";

cljs.core.async.t_cljs$core$async16354.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async16354");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16354 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16354(map_LT___$1,f__$1,ch__$1,meta16352__$1,___$2,fn1__$1,meta16355){
return (new cljs.core.async.t_cljs$core$async16354(map_LT___$1,f__$1,ch__$1,meta16352__$1,___$2,fn1__$1,meta16355));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16354(self__.map_LT_,self__.f,self__.ch,self__.meta16352,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6397__auto__ = ret;
if(cljs.core.truth_(and__6397__auto__)){
return !(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null));
} else {
return and__6397__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16358 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16358) : self__.f.call(null,G__16358));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16351.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16351.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_LT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16352], null);
});

cljs.core.async.t_cljs$core$async16351.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16351";

cljs.core.async.t_cljs$core$async16351.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async16351");
});

cljs.core.async.__GT_t_cljs$core$async16351 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16351(map_LT___$1,f__$1,ch__$1,meta16352){
return (new cljs.core.async.t_cljs$core$async16351(map_LT___$1,f__$1,ch__$1,meta16352));
});

}

return (new cljs.core.async.t_cljs$core$async16351(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16362 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16362 = (function (map_GT_,f,ch,meta16363){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta16363 = meta16363;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16364,meta16363__$1){
var self__ = this;
var _16364__$1 = this;
return (new cljs.core.async.t_cljs$core$async16362(self__.map_GT_,self__.f,self__.ch,meta16363__$1));
});

cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16364){
var self__ = this;
var _16364__$1 = this;
return self__.meta16363;
});

cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16362.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async16362.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$map_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16363], null);
});

cljs.core.async.t_cljs$core$async16362.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16362.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16362";

cljs.core.async.t_cljs$core$async16362.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async16362");
});

cljs.core.async.__GT_t_cljs$core$async16362 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16362(map_GT___$1,f__$1,ch__$1,meta16363){
return (new cljs.core.async.t_cljs$core$async16362(map_GT___$1,f__$1,ch__$1,meta16363));
});

}

return (new cljs.core.async.t_cljs$core$async16362(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16368 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16368 = (function (filter_GT_,p,ch,meta16369){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta16369 = meta16369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16370,meta16369__$1){
var self__ = this;
var _16370__$1 = this;
return (new cljs.core.async.t_cljs$core$async16368(self__.filter_GT_,self__.p,self__.ch,meta16369__$1));
});

cljs.core.async.t_cljs$core$async16368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16370){
var self__ = this;
var _16370__$1 = this;
return self__.meta16369;
});

cljs.core.async.t_cljs$core$async16368.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16368.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async16368.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async16368.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16368.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16368.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16368.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$filter_GT_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch], null))),cljs.core.cst$kw$doc,"Deprecated - this function will be removed. Use transducer instead"], null)),cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta16369], null);
});

cljs.core.async.t_cljs$core$async16368.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16368";

cljs.core.async.t_cljs$core$async16368.cljs$lang$ctorPrWriter = (function (this__7015__auto__,writer__7016__auto__,opt__7017__auto__){
return cljs.core._write(writer__7016__auto__,"cljs.core.async/t_cljs$core$async16368");
});

cljs.core.async.__GT_t_cljs$core$async16368 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16368(filter_GT___$1,p__$1,ch__$1,meta16369){
return (new cljs.core.async.t_cljs$core$async16368(filter_GT___$1,p__$1,ch__$1,meta16369));
});

}

return (new cljs.core.async.t_cljs$core$async16368(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args16371 = [];
var len__7484__auto___16415 = arguments.length;
var i__7485__auto___16416 = (0);
while(true){
if((i__7485__auto___16416 < len__7484__auto___16415)){
args16371.push((arguments[i__7485__auto___16416]));

var G__16417 = (i__7485__auto___16416 + (1));
i__7485__auto___16416 = G__16417;
continue;
} else {
}
break;
}

var G__16373 = args16371.length;
switch (G__16373) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16371.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14088__auto___16419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___16419,out){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___16419,out){
return (function (state_16394){
var state_val_16395 = (state_16394[(1)]);
if((state_val_16395 === (7))){
var inst_16390 = (state_16394[(2)]);
var state_16394__$1 = state_16394;
var statearr_16396_16420 = state_16394__$1;
(statearr_16396_16420[(2)] = inst_16390);

(statearr_16396_16420[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16395 === (1))){
var state_16394__$1 = state_16394;
var statearr_16397_16421 = state_16394__$1;
(statearr_16397_16421[(2)] = null);

(statearr_16397_16421[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16395 === (4))){
var inst_16376 = (state_16394[(7)]);
var inst_16376__$1 = (state_16394[(2)]);
var inst_16377 = (inst_16376__$1 == null);
var state_16394__$1 = (function (){var statearr_16398 = state_16394;
(statearr_16398[(7)] = inst_16376__$1);

return statearr_16398;
})();
if(cljs.core.truth_(inst_16377)){
var statearr_16399_16422 = state_16394__$1;
(statearr_16399_16422[(1)] = (5));

} else {
var statearr_16400_16423 = state_16394__$1;
(statearr_16400_16423[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16395 === (6))){
var inst_16376 = (state_16394[(7)]);
var inst_16381 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16376) : p.call(null,inst_16376));
var state_16394__$1 = state_16394;
if(cljs.core.truth_(inst_16381)){
var statearr_16401_16424 = state_16394__$1;
(statearr_16401_16424[(1)] = (8));

} else {
var statearr_16402_16425 = state_16394__$1;
(statearr_16402_16425[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16395 === (3))){
var inst_16392 = (state_16394[(2)]);
var state_16394__$1 = state_16394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16394__$1,inst_16392);
} else {
if((state_val_16395 === (2))){
var state_16394__$1 = state_16394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16394__$1,(4),ch);
} else {
if((state_val_16395 === (11))){
var inst_16384 = (state_16394[(2)]);
var state_16394__$1 = state_16394;
var statearr_16403_16426 = state_16394__$1;
(statearr_16403_16426[(2)] = inst_16384);

(statearr_16403_16426[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16395 === (9))){
var state_16394__$1 = state_16394;
var statearr_16404_16427 = state_16394__$1;
(statearr_16404_16427[(2)] = null);

(statearr_16404_16427[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16395 === (5))){
var inst_16379 = cljs.core.async.close_BANG_(out);
var state_16394__$1 = state_16394;
var statearr_16405_16428 = state_16394__$1;
(statearr_16405_16428[(2)] = inst_16379);

(statearr_16405_16428[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16395 === (10))){
var inst_16387 = (state_16394[(2)]);
var state_16394__$1 = (function (){var statearr_16406 = state_16394;
(statearr_16406[(8)] = inst_16387);

return statearr_16406;
})();
var statearr_16407_16429 = state_16394__$1;
(statearr_16407_16429[(2)] = null);

(statearr_16407_16429[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16395 === (8))){
var inst_16376 = (state_16394[(7)]);
var state_16394__$1 = state_16394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16394__$1,(11),out,inst_16376);
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
});})(c__14088__auto___16419,out))
;
return ((function (switch__13964__auto__,c__14088__auto___16419,out){
return (function() {
var cljs$core$async$state_machine__13965__auto__ = null;
var cljs$core$async$state_machine__13965__auto____0 = (function (){
var statearr_16411 = [null,null,null,null,null,null,null,null,null];
(statearr_16411[(0)] = cljs$core$async$state_machine__13965__auto__);

(statearr_16411[(1)] = (1));

return statearr_16411;
});
var cljs$core$async$state_machine__13965__auto____1 = (function (state_16394){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_16394);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e16412){if((e16412 instanceof Object)){
var ex__13968__auto__ = e16412;
var statearr_16413_16430 = state_16394;
(statearr_16413_16430[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16394);

return cljs.core.cst$kw$recur;
} else {
throw e16412;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__16431 = state_16394;
state_16394 = G__16431;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$state_machine__13965__auto__ = function(state_16394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13965__auto____1.call(this,state_16394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13965__auto____0;
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13965__auto____1;
return cljs$core$async$state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___16419,out))
})();
var state__14090__auto__ = (function (){var statearr_16414 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_16414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___16419);

return statearr_16414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___16419,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16432 = [];
var len__7484__auto___16435 = arguments.length;
var i__7485__auto___16436 = (0);
while(true){
if((i__7485__auto___16436 < len__7484__auto___16435)){
args16432.push((arguments[i__7485__auto___16436]));

var G__16437 = (i__7485__auto___16436 + (1));
i__7485__auto___16436 = G__16437;
continue;
} else {
}
break;
}

var G__16434 = args16432.length;
switch (G__16434) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16432.length)].join('')));

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
var c__14088__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto__){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto__){
return (function (state_16604){
var state_val_16605 = (state_16604[(1)]);
if((state_val_16605 === (7))){
var inst_16600 = (state_16604[(2)]);
var state_16604__$1 = state_16604;
var statearr_16606_16647 = state_16604__$1;
(statearr_16606_16647[(2)] = inst_16600);

(statearr_16606_16647[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16605 === (20))){
var inst_16570 = (state_16604[(7)]);
var inst_16581 = (state_16604[(2)]);
var inst_16582 = cljs.core.next(inst_16570);
var inst_16556 = inst_16582;
var inst_16557 = null;
var inst_16558 = (0);
var inst_16559 = (0);
var state_16604__$1 = (function (){var statearr_16607 = state_16604;
(statearr_16607[(8)] = inst_16558);

(statearr_16607[(9)] = inst_16557);

(statearr_16607[(10)] = inst_16556);

(statearr_16607[(11)] = inst_16581);

(statearr_16607[(12)] = inst_16559);

return statearr_16607;
})();
var statearr_16608_16648 = state_16604__$1;
(statearr_16608_16648[(2)] = null);

(statearr_16608_16648[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16605 === (1))){
var state_16604__$1 = state_16604;
var statearr_16609_16649 = state_16604__$1;
(statearr_16609_16649[(2)] = null);

(statearr_16609_16649[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16605 === (4))){
var inst_16545 = (state_16604[(13)]);
var inst_16545__$1 = (state_16604[(2)]);
var inst_16546 = (inst_16545__$1 == null);
var state_16604__$1 = (function (){var statearr_16610 = state_16604;
(statearr_16610[(13)] = inst_16545__$1);

return statearr_16610;
})();
if(cljs.core.truth_(inst_16546)){
var statearr_16611_16650 = state_16604__$1;
(statearr_16611_16650[(1)] = (5));

} else {
var statearr_16612_16651 = state_16604__$1;
(statearr_16612_16651[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16605 === (15))){
var state_16604__$1 = state_16604;
var statearr_16616_16652 = state_16604__$1;
(statearr_16616_16652[(2)] = null);

(statearr_16616_16652[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16605 === (21))){
var state_16604__$1 = state_16604;
var statearr_16617_16653 = state_16604__$1;
(statearr_16617_16653[(2)] = null);

(statearr_16617_16653[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16605 === (13))){
var inst_16558 = (state_16604[(8)]);
var inst_16557 = (state_16604[(9)]);
var inst_16556 = (state_16604[(10)]);
var inst_16559 = (state_16604[(12)]);
var inst_16566 = (state_16604[(2)]);
var inst_16567 = (inst_16559 + (1));
var tmp16613 = inst_16558;
var tmp16614 = inst_16557;
var tmp16615 = inst_16556;
var inst_16556__$1 = tmp16615;
var inst_16557__$1 = tmp16614;
var inst_16558__$1 = tmp16613;
var inst_16559__$1 = inst_16567;
var state_16604__$1 = (function (){var statearr_16618 = state_16604;
(statearr_16618[(8)] = inst_16558__$1);

(statearr_16618[(14)] = inst_16566);

(statearr_16618[(9)] = inst_16557__$1);

(statearr_16618[(10)] = inst_16556__$1);

(statearr_16618[(12)] = inst_16559__$1);

return statearr_16618;
})();
var statearr_16619_16654 = state_16604__$1;
(statearr_16619_16654[(2)] = null);

(statearr_16619_16654[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16605 === (22))){
var state_16604__$1 = state_16604;
var statearr_16620_16655 = state_16604__$1;
(statearr_16620_16655[(2)] = null);

(statearr_16620_16655[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16605 === (6))){
var inst_16545 = (state_16604[(13)]);
var inst_16554 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16545) : f.call(null,inst_16545));
var inst_16555 = cljs.core.seq(inst_16554);
var inst_16556 = inst_16555;
var inst_16557 = null;
var inst_16558 = (0);
var inst_16559 = (0);
var state_16604__$1 = (function (){var statearr_16621 = state_16604;
(statearr_16621[(8)] = inst_16558);

(statearr_16621[(9)] = inst_16557);

(statearr_16621[(10)] = inst_16556);

(statearr_16621[(12)] = inst_16559);

return statearr_16621;
})();
var statearr_16622_16656 = state_16604__$1;
(statearr_16622_16656[(2)] = null);

(statearr_16622_16656[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16605 === (17))){
var inst_16570 = (state_16604[(7)]);
var inst_16574 = cljs.core.chunk_first(inst_16570);
var inst_16575 = cljs.core.chunk_rest(inst_16570);
var inst_16576 = cljs.core.count(inst_16574);
var inst_16556 = inst_16575;
var inst_16557 = inst_16574;
var inst_16558 = inst_16576;
var inst_16559 = (0);
var state_16604__$1 = (function (){var statearr_16623 = state_16604;
(statearr_16623[(8)] = inst_16558);

(statearr_16623[(9)] = inst_16557);

(statearr_16623[(10)] = inst_16556);

(statearr_16623[(12)] = inst_16559);

return statearr_16623;
})();
var statearr_16624_16657 = state_16604__$1;
(statearr_16624_16657[(2)] = null);

(statearr_16624_16657[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16605 === (3))){
var inst_16602 = (state_16604[(2)]);
var state_16604__$1 = state_16604;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16604__$1,inst_16602);
} else {
if((state_val_16605 === (12))){
var inst_16590 = (state_16604[(2)]);
var state_16604__$1 = state_16604;
var statearr_16625_16658 = state_16604__$1;
(statearr_16625_16658[(2)] = inst_16590);

(statearr_16625_16658[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16605 === (2))){
var state_16604__$1 = state_16604;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16604__$1,(4),in$);
} else {
if((state_val_16605 === (23))){
var inst_16598 = (state_16604[(2)]);
var state_16604__$1 = state_16604;
var statearr_16626_16659 = state_16604__$1;
(statearr_16626_16659[(2)] = inst_16598);

(statearr_16626_16659[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16605 === (19))){
var inst_16585 = (state_16604[(2)]);
var state_16604__$1 = state_16604;
var statearr_16627_16660 = state_16604__$1;
(statearr_16627_16660[(2)] = inst_16585);

(statearr_16627_16660[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16605 === (11))){
var inst_16570 = (state_16604[(7)]);
var inst_16556 = (state_16604[(10)]);
var inst_16570__$1 = cljs.core.seq(inst_16556);
var state_16604__$1 = (function (){var statearr_16628 = state_16604;
(statearr_16628[(7)] = inst_16570__$1);

return statearr_16628;
})();
if(inst_16570__$1){
var statearr_16629_16661 = state_16604__$1;
(statearr_16629_16661[(1)] = (14));

} else {
var statearr_16630_16662 = state_16604__$1;
(statearr_16630_16662[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16605 === (9))){
var inst_16592 = (state_16604[(2)]);
var inst_16593 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16604__$1 = (function (){var statearr_16631 = state_16604;
(statearr_16631[(15)] = inst_16592);

return statearr_16631;
})();
if(cljs.core.truth_(inst_16593)){
var statearr_16632_16663 = state_16604__$1;
(statearr_16632_16663[(1)] = (21));

} else {
var statearr_16633_16664 = state_16604__$1;
(statearr_16633_16664[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16605 === (5))){
var inst_16548 = cljs.core.async.close_BANG_(out);
var state_16604__$1 = state_16604;
var statearr_16634_16665 = state_16604__$1;
(statearr_16634_16665[(2)] = inst_16548);

(statearr_16634_16665[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16605 === (14))){
var inst_16570 = (state_16604[(7)]);
var inst_16572 = cljs.core.chunked_seq_QMARK_(inst_16570);
var state_16604__$1 = state_16604;
if(inst_16572){
var statearr_16635_16666 = state_16604__$1;
(statearr_16635_16666[(1)] = (17));

} else {
var statearr_16636_16667 = state_16604__$1;
(statearr_16636_16667[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16605 === (16))){
var inst_16588 = (state_16604[(2)]);
var state_16604__$1 = state_16604;
var statearr_16637_16668 = state_16604__$1;
(statearr_16637_16668[(2)] = inst_16588);

(statearr_16637_16668[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16605 === (10))){
var inst_16557 = (state_16604[(9)]);
var inst_16559 = (state_16604[(12)]);
var inst_16564 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_16557,inst_16559);
var state_16604__$1 = state_16604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16604__$1,(13),out,inst_16564);
} else {
if((state_val_16605 === (18))){
var inst_16570 = (state_16604[(7)]);
var inst_16579 = cljs.core.first(inst_16570);
var state_16604__$1 = state_16604;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16604__$1,(20),out,inst_16579);
} else {
if((state_val_16605 === (8))){
var inst_16558 = (state_16604[(8)]);
var inst_16559 = (state_16604[(12)]);
var inst_16561 = (inst_16559 < inst_16558);
var inst_16562 = inst_16561;
var state_16604__$1 = state_16604;
if(cljs.core.truth_(inst_16562)){
var statearr_16638_16669 = state_16604__$1;
(statearr_16638_16669[(1)] = (10));

} else {
var statearr_16639_16670 = state_16604__$1;
(statearr_16639_16670[(1)] = (11));

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
});})(c__14088__auto__))
;
return ((function (switch__13964__auto__,c__14088__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13965__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13965__auto____0 = (function (){
var statearr_16643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16643[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13965__auto__);

(statearr_16643[(1)] = (1));

return statearr_16643;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13965__auto____1 = (function (state_16604){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_16604);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e16644){if((e16644 instanceof Object)){
var ex__13968__auto__ = e16644;
var statearr_16645_16671 = state_16604;
(statearr_16645_16671[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16604);

return cljs.core.cst$kw$recur;
} else {
throw e16644;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__16672 = state_16604;
state_16604 = G__16672;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13965__auto__ = function(state_16604){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13965__auto____1.call(this,state_16604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13965__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13965__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto__))
})();
var state__14090__auto__ = (function (){var statearr_16646 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_16646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto__);

return statearr_16646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto__))
);

return c__14088__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16673 = [];
var len__7484__auto___16676 = arguments.length;
var i__7485__auto___16677 = (0);
while(true){
if((i__7485__auto___16677 < len__7484__auto___16676)){
args16673.push((arguments[i__7485__auto___16677]));

var G__16678 = (i__7485__auto___16677 + (1));
i__7485__auto___16677 = G__16678;
continue;
} else {
}
break;
}

var G__16675 = args16673.length;
switch (G__16675) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16673.length)].join('')));

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
var args16680 = [];
var len__7484__auto___16683 = arguments.length;
var i__7485__auto___16684 = (0);
while(true){
if((i__7485__auto___16684 < len__7484__auto___16683)){
args16680.push((arguments[i__7485__auto___16684]));

var G__16685 = (i__7485__auto___16684 + (1));
i__7485__auto___16684 = G__16685;
continue;
} else {
}
break;
}

var G__16682 = args16680.length;
switch (G__16682) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16680.length)].join('')));

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
var args16687 = [];
var len__7484__auto___16738 = arguments.length;
var i__7485__auto___16739 = (0);
while(true){
if((i__7485__auto___16739 < len__7484__auto___16738)){
args16687.push((arguments[i__7485__auto___16739]));

var G__16740 = (i__7485__auto___16739 + (1));
i__7485__auto___16739 = G__16740;
continue;
} else {
}
break;
}

var G__16689 = args16687.length;
switch (G__16689) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16687.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14088__auto___16742 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___16742,out){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___16742,out){
return (function (state_16713){
var state_val_16714 = (state_16713[(1)]);
if((state_val_16714 === (7))){
var inst_16708 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
var statearr_16715_16743 = state_16713__$1;
(statearr_16715_16743[(2)] = inst_16708);

(statearr_16715_16743[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16714 === (1))){
var inst_16690 = null;
var state_16713__$1 = (function (){var statearr_16716 = state_16713;
(statearr_16716[(7)] = inst_16690);

return statearr_16716;
})();
var statearr_16717_16744 = state_16713__$1;
(statearr_16717_16744[(2)] = null);

(statearr_16717_16744[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16714 === (4))){
var inst_16693 = (state_16713[(8)]);
var inst_16693__$1 = (state_16713[(2)]);
var inst_16694 = (inst_16693__$1 == null);
var inst_16695 = cljs.core.not(inst_16694);
var state_16713__$1 = (function (){var statearr_16718 = state_16713;
(statearr_16718[(8)] = inst_16693__$1);

return statearr_16718;
})();
if(inst_16695){
var statearr_16719_16745 = state_16713__$1;
(statearr_16719_16745[(1)] = (5));

} else {
var statearr_16720_16746 = state_16713__$1;
(statearr_16720_16746[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16714 === (6))){
var state_16713__$1 = state_16713;
var statearr_16721_16747 = state_16713__$1;
(statearr_16721_16747[(2)] = null);

(statearr_16721_16747[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16714 === (3))){
var inst_16710 = (state_16713[(2)]);
var inst_16711 = cljs.core.async.close_BANG_(out);
var state_16713__$1 = (function (){var statearr_16722 = state_16713;
(statearr_16722[(9)] = inst_16710);

return statearr_16722;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16713__$1,inst_16711);
} else {
if((state_val_16714 === (2))){
var state_16713__$1 = state_16713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16713__$1,(4),ch);
} else {
if((state_val_16714 === (11))){
var inst_16693 = (state_16713[(8)]);
var inst_16702 = (state_16713[(2)]);
var inst_16690 = inst_16693;
var state_16713__$1 = (function (){var statearr_16723 = state_16713;
(statearr_16723[(7)] = inst_16690);

(statearr_16723[(10)] = inst_16702);

return statearr_16723;
})();
var statearr_16724_16748 = state_16713__$1;
(statearr_16724_16748[(2)] = null);

(statearr_16724_16748[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16714 === (9))){
var inst_16693 = (state_16713[(8)]);
var state_16713__$1 = state_16713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16713__$1,(11),out,inst_16693);
} else {
if((state_val_16714 === (5))){
var inst_16693 = (state_16713[(8)]);
var inst_16690 = (state_16713[(7)]);
var inst_16697 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16693,inst_16690);
var state_16713__$1 = state_16713;
if(inst_16697){
var statearr_16726_16749 = state_16713__$1;
(statearr_16726_16749[(1)] = (8));

} else {
var statearr_16727_16750 = state_16713__$1;
(statearr_16727_16750[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16714 === (10))){
var inst_16705 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
var statearr_16728_16751 = state_16713__$1;
(statearr_16728_16751[(2)] = inst_16705);

(statearr_16728_16751[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16714 === (8))){
var inst_16690 = (state_16713[(7)]);
var tmp16725 = inst_16690;
var inst_16690__$1 = tmp16725;
var state_16713__$1 = (function (){var statearr_16729 = state_16713;
(statearr_16729[(7)] = inst_16690__$1);

return statearr_16729;
})();
var statearr_16730_16752 = state_16713__$1;
(statearr_16730_16752[(2)] = null);

(statearr_16730_16752[(1)] = (2));


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
});})(c__14088__auto___16742,out))
;
return ((function (switch__13964__auto__,c__14088__auto___16742,out){
return (function() {
var cljs$core$async$state_machine__13965__auto__ = null;
var cljs$core$async$state_machine__13965__auto____0 = (function (){
var statearr_16734 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16734[(0)] = cljs$core$async$state_machine__13965__auto__);

(statearr_16734[(1)] = (1));

return statearr_16734;
});
var cljs$core$async$state_machine__13965__auto____1 = (function (state_16713){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_16713);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e16735){if((e16735 instanceof Object)){
var ex__13968__auto__ = e16735;
var statearr_16736_16753 = state_16713;
(statearr_16736_16753[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16713);

return cljs.core.cst$kw$recur;
} else {
throw e16735;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__16754 = state_16713;
state_16713 = G__16754;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$state_machine__13965__auto__ = function(state_16713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13965__auto____1.call(this,state_16713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13965__auto____0;
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13965__auto____1;
return cljs$core$async$state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___16742,out))
})();
var state__14090__auto__ = (function (){var statearr_16737 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_16737[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___16742);

return statearr_16737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___16742,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16755 = [];
var len__7484__auto___16825 = arguments.length;
var i__7485__auto___16826 = (0);
while(true){
if((i__7485__auto___16826 < len__7484__auto___16825)){
args16755.push((arguments[i__7485__auto___16826]));

var G__16827 = (i__7485__auto___16826 + (1));
i__7485__auto___16826 = G__16827;
continue;
} else {
}
break;
}

var G__16757 = args16755.length;
switch (G__16757) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16755.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14088__auto___16829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___16829,out){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___16829,out){
return (function (state_16795){
var state_val_16796 = (state_16795[(1)]);
if((state_val_16796 === (7))){
var inst_16791 = (state_16795[(2)]);
var state_16795__$1 = state_16795;
var statearr_16797_16830 = state_16795__$1;
(statearr_16797_16830[(2)] = inst_16791);

(statearr_16797_16830[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16796 === (1))){
var inst_16758 = (new Array(n));
var inst_16759 = inst_16758;
var inst_16760 = (0);
var state_16795__$1 = (function (){var statearr_16798 = state_16795;
(statearr_16798[(7)] = inst_16759);

(statearr_16798[(8)] = inst_16760);

return statearr_16798;
})();
var statearr_16799_16831 = state_16795__$1;
(statearr_16799_16831[(2)] = null);

(statearr_16799_16831[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16796 === (4))){
var inst_16763 = (state_16795[(9)]);
var inst_16763__$1 = (state_16795[(2)]);
var inst_16764 = (inst_16763__$1 == null);
var inst_16765 = cljs.core.not(inst_16764);
var state_16795__$1 = (function (){var statearr_16800 = state_16795;
(statearr_16800[(9)] = inst_16763__$1);

return statearr_16800;
})();
if(inst_16765){
var statearr_16801_16832 = state_16795__$1;
(statearr_16801_16832[(1)] = (5));

} else {
var statearr_16802_16833 = state_16795__$1;
(statearr_16802_16833[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16796 === (15))){
var inst_16785 = (state_16795[(2)]);
var state_16795__$1 = state_16795;
var statearr_16803_16834 = state_16795__$1;
(statearr_16803_16834[(2)] = inst_16785);

(statearr_16803_16834[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16796 === (13))){
var state_16795__$1 = state_16795;
var statearr_16804_16835 = state_16795__$1;
(statearr_16804_16835[(2)] = null);

(statearr_16804_16835[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16796 === (6))){
var inst_16760 = (state_16795[(8)]);
var inst_16781 = (inst_16760 > (0));
var state_16795__$1 = state_16795;
if(cljs.core.truth_(inst_16781)){
var statearr_16805_16836 = state_16795__$1;
(statearr_16805_16836[(1)] = (12));

} else {
var statearr_16806_16837 = state_16795__$1;
(statearr_16806_16837[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16796 === (3))){
var inst_16793 = (state_16795[(2)]);
var state_16795__$1 = state_16795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16795__$1,inst_16793);
} else {
if((state_val_16796 === (12))){
var inst_16759 = (state_16795[(7)]);
var inst_16783 = cljs.core.vec(inst_16759);
var state_16795__$1 = state_16795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16795__$1,(15),out,inst_16783);
} else {
if((state_val_16796 === (2))){
var state_16795__$1 = state_16795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16795__$1,(4),ch);
} else {
if((state_val_16796 === (11))){
var inst_16775 = (state_16795[(2)]);
var inst_16776 = (new Array(n));
var inst_16759 = inst_16776;
var inst_16760 = (0);
var state_16795__$1 = (function (){var statearr_16807 = state_16795;
(statearr_16807[(7)] = inst_16759);

(statearr_16807[(8)] = inst_16760);

(statearr_16807[(10)] = inst_16775);

return statearr_16807;
})();
var statearr_16808_16838 = state_16795__$1;
(statearr_16808_16838[(2)] = null);

(statearr_16808_16838[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16796 === (9))){
var inst_16759 = (state_16795[(7)]);
var inst_16773 = cljs.core.vec(inst_16759);
var state_16795__$1 = state_16795;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16795__$1,(11),out,inst_16773);
} else {
if((state_val_16796 === (5))){
var inst_16759 = (state_16795[(7)]);
var inst_16760 = (state_16795[(8)]);
var inst_16768 = (state_16795[(11)]);
var inst_16763 = (state_16795[(9)]);
var inst_16767 = (inst_16759[inst_16760] = inst_16763);
var inst_16768__$1 = (inst_16760 + (1));
var inst_16769 = (inst_16768__$1 < n);
var state_16795__$1 = (function (){var statearr_16809 = state_16795;
(statearr_16809[(12)] = inst_16767);

(statearr_16809[(11)] = inst_16768__$1);

return statearr_16809;
})();
if(cljs.core.truth_(inst_16769)){
var statearr_16810_16839 = state_16795__$1;
(statearr_16810_16839[(1)] = (8));

} else {
var statearr_16811_16840 = state_16795__$1;
(statearr_16811_16840[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16796 === (14))){
var inst_16788 = (state_16795[(2)]);
var inst_16789 = cljs.core.async.close_BANG_(out);
var state_16795__$1 = (function (){var statearr_16813 = state_16795;
(statearr_16813[(13)] = inst_16788);

return statearr_16813;
})();
var statearr_16814_16841 = state_16795__$1;
(statearr_16814_16841[(2)] = inst_16789);

(statearr_16814_16841[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16796 === (10))){
var inst_16779 = (state_16795[(2)]);
var state_16795__$1 = state_16795;
var statearr_16815_16842 = state_16795__$1;
(statearr_16815_16842[(2)] = inst_16779);

(statearr_16815_16842[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16796 === (8))){
var inst_16759 = (state_16795[(7)]);
var inst_16768 = (state_16795[(11)]);
var tmp16812 = inst_16759;
var inst_16759__$1 = tmp16812;
var inst_16760 = inst_16768;
var state_16795__$1 = (function (){var statearr_16816 = state_16795;
(statearr_16816[(7)] = inst_16759__$1);

(statearr_16816[(8)] = inst_16760);

return statearr_16816;
})();
var statearr_16817_16843 = state_16795__$1;
(statearr_16817_16843[(2)] = null);

(statearr_16817_16843[(1)] = (2));


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
});})(c__14088__auto___16829,out))
;
return ((function (switch__13964__auto__,c__14088__auto___16829,out){
return (function() {
var cljs$core$async$state_machine__13965__auto__ = null;
var cljs$core$async$state_machine__13965__auto____0 = (function (){
var statearr_16821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16821[(0)] = cljs$core$async$state_machine__13965__auto__);

(statearr_16821[(1)] = (1));

return statearr_16821;
});
var cljs$core$async$state_machine__13965__auto____1 = (function (state_16795){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_16795);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e16822){if((e16822 instanceof Object)){
var ex__13968__auto__ = e16822;
var statearr_16823_16844 = state_16795;
(statearr_16823_16844[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16795);

return cljs.core.cst$kw$recur;
} else {
throw e16822;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__16845 = state_16795;
state_16795 = G__16845;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$state_machine__13965__auto__ = function(state_16795){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13965__auto____1.call(this,state_16795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13965__auto____0;
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13965__auto____1;
return cljs$core$async$state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___16829,out))
})();
var state__14090__auto__ = (function (){var statearr_16824 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_16824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___16829);

return statearr_16824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___16829,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16846 = [];
var len__7484__auto___16920 = arguments.length;
var i__7485__auto___16921 = (0);
while(true){
if((i__7485__auto___16921 < len__7484__auto___16920)){
args16846.push((arguments[i__7485__auto___16921]));

var G__16922 = (i__7485__auto___16921 + (1));
i__7485__auto___16921 = G__16922;
continue;
} else {
}
break;
}

var G__16848 = args16846.length;
switch (G__16848) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16846.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14088__auto___16924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___16924,out){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___16924,out){
return (function (state_16890){
var state_val_16891 = (state_16890[(1)]);
if((state_val_16891 === (7))){
var inst_16886 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
var statearr_16892_16925 = state_16890__$1;
(statearr_16892_16925[(2)] = inst_16886);

(statearr_16892_16925[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16891 === (1))){
var inst_16849 = [];
var inst_16850 = inst_16849;
var inst_16851 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_16890__$1 = (function (){var statearr_16893 = state_16890;
(statearr_16893[(7)] = inst_16851);

(statearr_16893[(8)] = inst_16850);

return statearr_16893;
})();
var statearr_16894_16926 = state_16890__$1;
(statearr_16894_16926[(2)] = null);

(statearr_16894_16926[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16891 === (4))){
var inst_16854 = (state_16890[(9)]);
var inst_16854__$1 = (state_16890[(2)]);
var inst_16855 = (inst_16854__$1 == null);
var inst_16856 = cljs.core.not(inst_16855);
var state_16890__$1 = (function (){var statearr_16895 = state_16890;
(statearr_16895[(9)] = inst_16854__$1);

return statearr_16895;
})();
if(inst_16856){
var statearr_16896_16927 = state_16890__$1;
(statearr_16896_16927[(1)] = (5));

} else {
var statearr_16897_16928 = state_16890__$1;
(statearr_16897_16928[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16891 === (15))){
var inst_16880 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
var statearr_16898_16929 = state_16890__$1;
(statearr_16898_16929[(2)] = inst_16880);

(statearr_16898_16929[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16891 === (13))){
var state_16890__$1 = state_16890;
var statearr_16899_16930 = state_16890__$1;
(statearr_16899_16930[(2)] = null);

(statearr_16899_16930[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16891 === (6))){
var inst_16850 = (state_16890[(8)]);
var inst_16875 = inst_16850.length;
var inst_16876 = (inst_16875 > (0));
var state_16890__$1 = state_16890;
if(cljs.core.truth_(inst_16876)){
var statearr_16900_16931 = state_16890__$1;
(statearr_16900_16931[(1)] = (12));

} else {
var statearr_16901_16932 = state_16890__$1;
(statearr_16901_16932[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16891 === (3))){
var inst_16888 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16890__$1,inst_16888);
} else {
if((state_val_16891 === (12))){
var inst_16850 = (state_16890[(8)]);
var inst_16878 = cljs.core.vec(inst_16850);
var state_16890__$1 = state_16890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16890__$1,(15),out,inst_16878);
} else {
if((state_val_16891 === (2))){
var state_16890__$1 = state_16890;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16890__$1,(4),ch);
} else {
if((state_val_16891 === (11))){
var inst_16858 = (state_16890[(10)]);
var inst_16854 = (state_16890[(9)]);
var inst_16868 = (state_16890[(2)]);
var inst_16869 = [];
var inst_16870 = inst_16869.push(inst_16854);
var inst_16850 = inst_16869;
var inst_16851 = inst_16858;
var state_16890__$1 = (function (){var statearr_16902 = state_16890;
(statearr_16902[(7)] = inst_16851);

(statearr_16902[(11)] = inst_16868);

(statearr_16902[(12)] = inst_16870);

(statearr_16902[(8)] = inst_16850);

return statearr_16902;
})();
var statearr_16903_16933 = state_16890__$1;
(statearr_16903_16933[(2)] = null);

(statearr_16903_16933[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16891 === (9))){
var inst_16850 = (state_16890[(8)]);
var inst_16866 = cljs.core.vec(inst_16850);
var state_16890__$1 = state_16890;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16890__$1,(11),out,inst_16866);
} else {
if((state_val_16891 === (5))){
var inst_16851 = (state_16890[(7)]);
var inst_16858 = (state_16890[(10)]);
var inst_16854 = (state_16890[(9)]);
var inst_16858__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16854) : f.call(null,inst_16854));
var inst_16859 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16858__$1,inst_16851);
var inst_16860 = cljs.core.keyword_identical_QMARK_(inst_16851,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_16861 = (inst_16859) || (inst_16860);
var state_16890__$1 = (function (){var statearr_16904 = state_16890;
(statearr_16904[(10)] = inst_16858__$1);

return statearr_16904;
})();
if(cljs.core.truth_(inst_16861)){
var statearr_16905_16934 = state_16890__$1;
(statearr_16905_16934[(1)] = (8));

} else {
var statearr_16906_16935 = state_16890__$1;
(statearr_16906_16935[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_16891 === (14))){
var inst_16883 = (state_16890[(2)]);
var inst_16884 = cljs.core.async.close_BANG_(out);
var state_16890__$1 = (function (){var statearr_16908 = state_16890;
(statearr_16908[(13)] = inst_16883);

return statearr_16908;
})();
var statearr_16909_16936 = state_16890__$1;
(statearr_16909_16936[(2)] = inst_16884);

(statearr_16909_16936[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16891 === (10))){
var inst_16873 = (state_16890[(2)]);
var state_16890__$1 = state_16890;
var statearr_16910_16937 = state_16890__$1;
(statearr_16910_16937[(2)] = inst_16873);

(statearr_16910_16937[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_16891 === (8))){
var inst_16858 = (state_16890[(10)]);
var inst_16850 = (state_16890[(8)]);
var inst_16854 = (state_16890[(9)]);
var inst_16863 = inst_16850.push(inst_16854);
var tmp16907 = inst_16850;
var inst_16850__$1 = tmp16907;
var inst_16851 = inst_16858;
var state_16890__$1 = (function (){var statearr_16911 = state_16890;
(statearr_16911[(7)] = inst_16851);

(statearr_16911[(14)] = inst_16863);

(statearr_16911[(8)] = inst_16850__$1);

return statearr_16911;
})();
var statearr_16912_16938 = state_16890__$1;
(statearr_16912_16938[(2)] = null);

(statearr_16912_16938[(1)] = (2));


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
});})(c__14088__auto___16924,out))
;
return ((function (switch__13964__auto__,c__14088__auto___16924,out){
return (function() {
var cljs$core$async$state_machine__13965__auto__ = null;
var cljs$core$async$state_machine__13965__auto____0 = (function (){
var statearr_16916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16916[(0)] = cljs$core$async$state_machine__13965__auto__);

(statearr_16916[(1)] = (1));

return statearr_16916;
});
var cljs$core$async$state_machine__13965__auto____1 = (function (state_16890){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_16890);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e16917){if((e16917 instanceof Object)){
var ex__13968__auto__ = e16917;
var statearr_16918_16939 = state_16890;
(statearr_16918_16939[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_16890);

return cljs.core.cst$kw$recur;
} else {
throw e16917;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__16940 = state_16890;
state_16890 = G__16940;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
cljs$core$async$state_machine__13965__auto__ = function(state_16890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13965__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13965__auto____1.call(this,state_16890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13965__auto____0;
cljs$core$async$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13965__auto____1;
return cljs$core$async$state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___16924,out))
})();
var state__14090__auto__ = (function (){var statearr_16919 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_16919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___16924);

return statearr_16919;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___16924,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

