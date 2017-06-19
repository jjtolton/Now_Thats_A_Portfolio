// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('ezq.channeler');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
ezq.channeler.cell_handler = (function ezq$channeler$cell_handler(winner,x,y,channels){
if(cljs.core.truth_(winner)){
return null;
} else {
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__){
return (function (state_20300){
var state_val_20301 = (state_20300[(1)]);
if((state_val_20301 === (1))){
var inst_20293 = cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(channels);
var inst_20294 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20295 = [x,y];
var inst_20296 = (new cljs.core.PersistentVector(null,2,(5),inst_20294,inst_20295,null));
var state_20300__$1 = state_20300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20300__$1,(2),inst_20293,inst_20296);
} else {
if((state_val_20301 === (2))){
var inst_20298 = (state_20300[(2)]);
var state_20300__$1 = state_20300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20300__$1,inst_20298);
} else {
return null;
}
}
});})(c__16369__auto__))
;
return ((function (switch__16243__auto__,c__16369__auto__){
return (function() {
var ezq$channeler$cell_handler_$_state_machine__16244__auto__ = null;
var ezq$channeler$cell_handler_$_state_machine__16244__auto____0 = (function (){
var statearr_20305 = [null,null,null,null,null,null,null];
(statearr_20305[(0)] = ezq$channeler$cell_handler_$_state_machine__16244__auto__);

(statearr_20305[(1)] = (1));

return statearr_20305;
});
var ezq$channeler$cell_handler_$_state_machine__16244__auto____1 = (function (state_20300){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_20300);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e20306){if((e20306 instanceof Object)){
var ex__16247__auto__ = e20306;
var statearr_20307_20309 = state_20300;
(statearr_20307_20309[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20300);

return cljs.core.cst$kw$recur;
} else {
throw e20306;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__20310 = state_20300;
state_20300 = G__20310;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
ezq$channeler$cell_handler_$_state_machine__16244__auto__ = function(state_20300){
switch(arguments.length){
case 0:
return ezq$channeler$cell_handler_$_state_machine__16244__auto____0.call(this);
case 1:
return ezq$channeler$cell_handler_$_state_machine__16244__auto____1.call(this,state_20300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$channeler$cell_handler_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$channeler$cell_handler_$_state_machine__16244__auto____0;
ezq$channeler$cell_handler_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$channeler$cell_handler_$_state_machine__16244__auto____1;
return ezq$channeler$cell_handler_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__))
})();
var state__16371__auto__ = (function (){var statearr_20308 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_20308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_20308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__))
);

return c__16369__auto__;
}
});
ezq.channeler.show_state = (function ezq$channeler$show_state(){
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__){
return (function (state_20326){
var state_val_20327 = (state_20326[(1)]);
if((state_val_20327 === (1))){
var state_20326__$1 = state_20326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20326__$1,(2),ezq.channeler.show_state,true);
} else {
if((state_val_20327 === (2))){
var inst_20324 = (state_20326[(2)]);
var state_20326__$1 = state_20326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20326__$1,inst_20324);
} else {
return null;
}
}
});})(c__16369__auto__))
;
return ((function (switch__16243__auto__,c__16369__auto__){
return (function() {
var ezq$channeler$show_state_$_state_machine__16244__auto__ = null;
var ezq$channeler$show_state_$_state_machine__16244__auto____0 = (function (){
var statearr_20331 = [null,null,null,null,null,null,null];
(statearr_20331[(0)] = ezq$channeler$show_state_$_state_machine__16244__auto__);

(statearr_20331[(1)] = (1));

return statearr_20331;
});
var ezq$channeler$show_state_$_state_machine__16244__auto____1 = (function (state_20326){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_20326);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e20332){if((e20332 instanceof Object)){
var ex__16247__auto__ = e20332;
var statearr_20333_20335 = state_20326;
(statearr_20333_20335[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20326);

return cljs.core.cst$kw$recur;
} else {
throw e20332;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__20336 = state_20326;
state_20326 = G__20336;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
ezq$channeler$show_state_$_state_machine__16244__auto__ = function(state_20326){
switch(arguments.length){
case 0:
return ezq$channeler$show_state_$_state_machine__16244__auto____0.call(this);
case 1:
return ezq$channeler$show_state_$_state_machine__16244__auto____1.call(this,state_20326);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$channeler$show_state_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$channeler$show_state_$_state_machine__16244__auto____0;
ezq$channeler$show_state_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$channeler$show_state_$_state_machine__16244__auto____1;
return ezq$channeler$show_state_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__))
})();
var state__16371__auto__ = (function (){var statearr_20334 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_20334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_20334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__))
);

return c__16369__auto__;
});
ezq.channeler.ticker_button = (function ezq$channeler$ticker_button(channels){
var seq__20367 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tick,cljs.core.cst$kw$ticker_DASH_switch], null));
var chunk__20368 = null;
var count__20369 = (0);
var i__20370 = (0);
while(true){
if((i__20370 < count__20369)){
var chan = chunk__20368.cljs$core$IIndexed$_nth$arity$2(null,i__20370);
var c__16369__auto___20397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__20367,chunk__20368,count__20369,i__20370,c__16369__auto___20397,chan){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (seq__20367,chunk__20368,count__20369,i__20370,c__16369__auto___20397,chan){
return (function (state_20375){
var state_val_20376 = (state_20375[(1)]);
if((state_val_20376 === (1))){
var inst_20371 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(channels,chan);
var state_20375__$1 = state_20375;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20375__$1,(2),inst_20371,true);
} else {
if((state_val_20376 === (2))){
var inst_20373 = (state_20375[(2)]);
var state_20375__$1 = state_20375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20375__$1,inst_20373);
} else {
return null;
}
}
});})(seq__20367,chunk__20368,count__20369,i__20370,c__16369__auto___20397,chan))
;
return ((function (seq__20367,chunk__20368,count__20369,i__20370,switch__16243__auto__,c__16369__auto___20397,chan){
return (function() {
var ezq$channeler$ticker_button_$_state_machine__16244__auto__ = null;
var ezq$channeler$ticker_button_$_state_machine__16244__auto____0 = (function (){
var statearr_20380 = [null,null,null,null,null,null,null];
(statearr_20380[(0)] = ezq$channeler$ticker_button_$_state_machine__16244__auto__);

(statearr_20380[(1)] = (1));

return statearr_20380;
});
var ezq$channeler$ticker_button_$_state_machine__16244__auto____1 = (function (state_20375){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_20375);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e20381){if((e20381 instanceof Object)){
var ex__16247__auto__ = e20381;
var statearr_20382_20398 = state_20375;
(statearr_20382_20398[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20375);

return cljs.core.cst$kw$recur;
} else {
throw e20381;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__20399 = state_20375;
state_20375 = G__20399;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
ezq$channeler$ticker_button_$_state_machine__16244__auto__ = function(state_20375){
switch(arguments.length){
case 0:
return ezq$channeler$ticker_button_$_state_machine__16244__auto____0.call(this);
case 1:
return ezq$channeler$ticker_button_$_state_machine__16244__auto____1.call(this,state_20375);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$channeler$ticker_button_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$channeler$ticker_button_$_state_machine__16244__auto____0;
ezq$channeler$ticker_button_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$channeler$ticker_button_$_state_machine__16244__auto____1;
return ezq$channeler$ticker_button_$_state_machine__16244__auto__;
})()
;})(seq__20367,chunk__20368,count__20369,i__20370,switch__16243__auto__,c__16369__auto___20397,chan))
})();
var state__16371__auto__ = (function (){var statearr_20383 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_20383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___20397);

return statearr_20383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(seq__20367,chunk__20368,count__20369,i__20370,c__16369__auto___20397,chan))
);


var G__20400 = seq__20367;
var G__20401 = chunk__20368;
var G__20402 = count__20369;
var G__20403 = (i__20370 + (1));
seq__20367 = G__20400;
chunk__20368 = G__20401;
count__20369 = G__20402;
i__20370 = G__20403;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__20367);
if(temp__6738__auto__){
var seq__20367__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20367__$1)){
var c__8512__auto__ = cljs.core.chunk_first(seq__20367__$1);
var G__20404 = cljs.core.chunk_rest(seq__20367__$1);
var G__20405 = c__8512__auto__;
var G__20406 = cljs.core.count(c__8512__auto__);
var G__20407 = (0);
seq__20367 = G__20404;
chunk__20368 = G__20405;
count__20369 = G__20406;
i__20370 = G__20407;
continue;
} else {
var chan = cljs.core.first(seq__20367__$1);
var c__16369__auto___20408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__20367,chunk__20368,count__20369,i__20370,c__16369__auto___20408,chan,seq__20367__$1,temp__6738__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (seq__20367,chunk__20368,count__20369,i__20370,c__16369__auto___20408,chan,seq__20367__$1,temp__6738__auto__){
return (function (state_20388){
var state_val_20389 = (state_20388[(1)]);
if((state_val_20389 === (1))){
var inst_20384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(channels,chan);
var state_20388__$1 = state_20388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20388__$1,(2),inst_20384,true);
} else {
if((state_val_20389 === (2))){
var inst_20386 = (state_20388[(2)]);
var state_20388__$1 = state_20388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20388__$1,inst_20386);
} else {
return null;
}
}
});})(seq__20367,chunk__20368,count__20369,i__20370,c__16369__auto___20408,chan,seq__20367__$1,temp__6738__auto__))
;
return ((function (seq__20367,chunk__20368,count__20369,i__20370,switch__16243__auto__,c__16369__auto___20408,chan,seq__20367__$1,temp__6738__auto__){
return (function() {
var ezq$channeler$ticker_button_$_state_machine__16244__auto__ = null;
var ezq$channeler$ticker_button_$_state_machine__16244__auto____0 = (function (){
var statearr_20393 = [null,null,null,null,null,null,null];
(statearr_20393[(0)] = ezq$channeler$ticker_button_$_state_machine__16244__auto__);

(statearr_20393[(1)] = (1));

return statearr_20393;
});
var ezq$channeler$ticker_button_$_state_machine__16244__auto____1 = (function (state_20388){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_20388);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e20394){if((e20394 instanceof Object)){
var ex__16247__auto__ = e20394;
var statearr_20395_20409 = state_20388;
(statearr_20395_20409[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20388);

return cljs.core.cst$kw$recur;
} else {
throw e20394;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__20410 = state_20388;
state_20388 = G__20410;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
ezq$channeler$ticker_button_$_state_machine__16244__auto__ = function(state_20388){
switch(arguments.length){
case 0:
return ezq$channeler$ticker_button_$_state_machine__16244__auto____0.call(this);
case 1:
return ezq$channeler$ticker_button_$_state_machine__16244__auto____1.call(this,state_20388);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$channeler$ticker_button_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$channeler$ticker_button_$_state_machine__16244__auto____0;
ezq$channeler$ticker_button_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$channeler$ticker_button_$_state_machine__16244__auto____1;
return ezq$channeler$ticker_button_$_state_machine__16244__auto__;
})()
;})(seq__20367,chunk__20368,count__20369,i__20370,switch__16243__auto__,c__16369__auto___20408,chan,seq__20367__$1,temp__6738__auto__))
})();
var state__16371__auto__ = (function (){var statearr_20396 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_20396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___20408);

return statearr_20396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(seq__20367,chunk__20368,count__20369,i__20370,c__16369__auto___20408,chan,seq__20367__$1,temp__6738__auto__))
);


var G__20411 = cljs.core.next(seq__20367__$1);
var G__20412 = null;
var G__20413 = (0);
var G__20414 = (0);
seq__20367 = G__20411;
chunk__20368 = G__20412;
count__20369 = G__20413;
i__20370 = G__20414;
continue;
}
} else {
return null;
}
}
break;
}
});
ezq.channeler.blog_post = (function ezq$channeler$blog_post(var_args){
var args20415 = [];
var len__8822__auto___20447 = arguments.length;
var i__8823__auto___20448 = (0);
while(true){
if((i__8823__auto___20448 < len__8822__auto___20447)){
args20415.push((arguments[i__8823__auto___20448]));

var G__20449 = (i__8823__auto___20448 + (1));
i__8823__auto___20448 = G__20449;
continue;
} else {
}
break;
}

var G__20417 = args20415.length;
switch (G__20417) {
case 1:
return ezq.channeler.blog_post.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 5:
return ezq.channeler.blog_post.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args20415.length)].join('')));

}
});

ezq.channeler.blog_post.cljs$core$IFn$_invoke$arity$1 = (function (channels){
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__){
return (function (state_20422){
var state_val_20423 = (state_20422[(1)]);
if((state_val_20423 === (1))){
var inst_20418 = cljs.core.cst$kw$new_DASH_entry.cljs$core$IFn$_invoke$arity$1(channels);
var state_20422__$1 = state_20422;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20422__$1,(2),inst_20418,true);
} else {
if((state_val_20423 === (2))){
var inst_20420 = (state_20422[(2)]);
var state_20422__$1 = state_20422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20422__$1,inst_20420);
} else {
return null;
}
}
});})(c__16369__auto__))
;
return ((function (switch__16243__auto__,c__16369__auto__){
return (function() {
var ezq$channeler$state_machine__16244__auto__ = null;
var ezq$channeler$state_machine__16244__auto____0 = (function (){
var statearr_20427 = [null,null,null,null,null,null,null];
(statearr_20427[(0)] = ezq$channeler$state_machine__16244__auto__);

(statearr_20427[(1)] = (1));

return statearr_20427;
});
var ezq$channeler$state_machine__16244__auto____1 = (function (state_20422){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_20422);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e20428){if((e20428 instanceof Object)){
var ex__16247__auto__ = e20428;
var statearr_20429_20451 = state_20422;
(statearr_20429_20451[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20422);

return cljs.core.cst$kw$recur;
} else {
throw e20428;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__20452 = state_20422;
state_20422 = G__20452;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
ezq$channeler$state_machine__16244__auto__ = function(state_20422){
switch(arguments.length){
case 0:
return ezq$channeler$state_machine__16244__auto____0.call(this);
case 1:
return ezq$channeler$state_machine__16244__auto____1.call(this,state_20422);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$channeler$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$channeler$state_machine__16244__auto____0;
ezq$channeler$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$channeler$state_machine__16244__auto____1;
return ezq$channeler$state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__))
})();
var state__16371__auto__ = (function (){var statearr_20430 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_20430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_20430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__))
);

return c__16369__auto__;
});

ezq.channeler.blog_post.cljs$core$IFn$_invoke$arity$5 = (function (idx,field,status,message,channels){
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__){
return (function (state_20438){
var state_val_20439 = (state_20438[(1)]);
if((state_val_20439 === (1))){
var inst_20431 = cljs.core.cst$kw$blog_DASH_entries.cljs$core$IFn$_invoke$arity$1(channels);
var inst_20432 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20433 = [idx,field,status,message];
var inst_20434 = (new cljs.core.PersistentVector(null,4,(5),inst_20432,inst_20433,null));
var state_20438__$1 = state_20438;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20438__$1,(2),inst_20431,inst_20434);
} else {
if((state_val_20439 === (2))){
var inst_20436 = (state_20438[(2)]);
var state_20438__$1 = state_20438;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20438__$1,inst_20436);
} else {
return null;
}
}
});})(c__16369__auto__))
;
return ((function (switch__16243__auto__,c__16369__auto__){
return (function() {
var ezq$channeler$state_machine__16244__auto__ = null;
var ezq$channeler$state_machine__16244__auto____0 = (function (){
var statearr_20443 = [null,null,null,null,null,null,null];
(statearr_20443[(0)] = ezq$channeler$state_machine__16244__auto__);

(statearr_20443[(1)] = (1));

return statearr_20443;
});
var ezq$channeler$state_machine__16244__auto____1 = (function (state_20438){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_20438);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e20444){if((e20444 instanceof Object)){
var ex__16247__auto__ = e20444;
var statearr_20445_20453 = state_20438;
(statearr_20445_20453[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20438);

return cljs.core.cst$kw$recur;
} else {
throw e20444;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__20454 = state_20438;
state_20438 = G__20454;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
ezq$channeler$state_machine__16244__auto__ = function(state_20438){
switch(arguments.length){
case 0:
return ezq$channeler$state_machine__16244__auto____0.call(this);
case 1:
return ezq$channeler$state_machine__16244__auto____1.call(this,state_20438);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$channeler$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$channeler$state_machine__16244__auto____0;
ezq$channeler$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$channeler$state_machine__16244__auto____1;
return ezq$channeler$state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__))
})();
var state__16371__auto__ = (function (){var statearr_20446 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_20446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_20446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__))
);

return c__16369__auto__;
});

ezq.channeler.blog_post.cljs$lang$maxFixedArity = 5;

ezq.channeler.reset_button = (function ezq$channeler$reset_button(channels){
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__){
return (function (state_20472){
var state_val_20473 = (state_20472[(1)]);
if((state_val_20473 === (1))){
var inst_20468 = cljs.core.cst$kw$restart.cljs$core$IFn$_invoke$arity$1(channels);
var state_20472__$1 = state_20472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20472__$1,(2),inst_20468,true);
} else {
if((state_val_20473 === (2))){
var inst_20470 = (state_20472[(2)]);
var state_20472__$1 = state_20472;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20472__$1,inst_20470);
} else {
return null;
}
}
});})(c__16369__auto__))
;
return ((function (switch__16243__auto__,c__16369__auto__){
return (function() {
var ezq$channeler$reset_button_$_state_machine__16244__auto__ = null;
var ezq$channeler$reset_button_$_state_machine__16244__auto____0 = (function (){
var statearr_20477 = [null,null,null,null,null,null,null];
(statearr_20477[(0)] = ezq$channeler$reset_button_$_state_machine__16244__auto__);

(statearr_20477[(1)] = (1));

return statearr_20477;
});
var ezq$channeler$reset_button_$_state_machine__16244__auto____1 = (function (state_20472){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_20472);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e20478){if((e20478 instanceof Object)){
var ex__16247__auto__ = e20478;
var statearr_20479_20481 = state_20472;
(statearr_20479_20481[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20472);

return cljs.core.cst$kw$recur;
} else {
throw e20478;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__20482 = state_20472;
state_20472 = G__20482;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
ezq$channeler$reset_button_$_state_machine__16244__auto__ = function(state_20472){
switch(arguments.length){
case 0:
return ezq$channeler$reset_button_$_state_machine__16244__auto____0.call(this);
case 1:
return ezq$channeler$reset_button_$_state_machine__16244__auto____1.call(this,state_20472);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$channeler$reset_button_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$channeler$reset_button_$_state_machine__16244__auto____0;
ezq$channeler$reset_button_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$channeler$reset_button_$_state_machine__16244__auto____1;
return ezq$channeler$reset_button_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__))
})();
var state__16371__auto__ = (function (){var statearr_20480 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_20480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_20480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__))
);

return c__16369__auto__;
});
ezq.channeler.new_post = (function ezq$channeler$new_post(channels){
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__){
return (function (state_20500){
var state_val_20501 = (state_20500[(1)]);
if((state_val_20501 === (1))){
var inst_20496 = cljs.core.cst$kw$blog_DASH_entries.cljs$core$IFn$_invoke$arity$1(channels);
var state_20500__$1 = state_20500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20500__$1,(2),inst_20496,true);
} else {
if((state_val_20501 === (2))){
var inst_20498 = (state_20500[(2)]);
var state_20500__$1 = state_20500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20500__$1,inst_20498);
} else {
return null;
}
}
});})(c__16369__auto__))
;
return ((function (switch__16243__auto__,c__16369__auto__){
return (function() {
var ezq$channeler$new_post_$_state_machine__16244__auto__ = null;
var ezq$channeler$new_post_$_state_machine__16244__auto____0 = (function (){
var statearr_20505 = [null,null,null,null,null,null,null];
(statearr_20505[(0)] = ezq$channeler$new_post_$_state_machine__16244__auto__);

(statearr_20505[(1)] = (1));

return statearr_20505;
});
var ezq$channeler$new_post_$_state_machine__16244__auto____1 = (function (state_20500){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_20500);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e20506){if((e20506 instanceof Object)){
var ex__16247__auto__ = e20506;
var statearr_20507_20509 = state_20500;
(statearr_20507_20509[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20500);

return cljs.core.cst$kw$recur;
} else {
throw e20506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__20510 = state_20500;
state_20500 = G__20510;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
ezq$channeler$new_post_$_state_machine__16244__auto__ = function(state_20500){
switch(arguments.length){
case 0:
return ezq$channeler$new_post_$_state_machine__16244__auto____0.call(this);
case 1:
return ezq$channeler$new_post_$_state_machine__16244__auto____1.call(this,state_20500);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$channeler$new_post_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$channeler$new_post_$_state_machine__16244__auto____0;
ezq$channeler$new_post_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$channeler$new_post_$_state_machine__16244__auto____1;
return ezq$channeler$new_post_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__))
})();
var state__16371__auto__ = (function (){var statearr_20508 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_20508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_20508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__))
);

return c__16369__auto__;
});
