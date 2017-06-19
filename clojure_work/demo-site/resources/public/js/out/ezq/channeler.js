// Compiled by ClojureScript 1.9.518 {}
goog.provide('ezq.channeler');
goog.require('cljs.core');
goog.require('cljs.core.async');
ezq.channeler.cell_handler = (function ezq$channeler$cell_handler(winner,x,y,channels){
if(cljs.core.truth_(winner)){
return null;
} else {
var c__40635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto__){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto__){
return (function (state_51572){
var state_val_51573 = (state_51572[(1)]);
if((state_val_51573 === (1))){
var inst_51565 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(channels);
var inst_51566 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51567 = [x,y];
var inst_51568 = (new cljs.core.PersistentVector(null,2,(5),inst_51566,inst_51567,null));
var state_51572__$1 = state_51572;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51572__$1,(2),inst_51565,inst_51568);
} else {
if((state_val_51573 === (2))){
var inst_51570 = (state_51572[(2)]);
var state_51572__$1 = state_51572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51572__$1,inst_51570);
} else {
return null;
}
}
});})(c__40635__auto__))
;
return ((function (switch__40521__auto__,c__40635__auto__){
return (function() {
var ezq$channeler$cell_handler_$_state_machine__40522__auto__ = null;
var ezq$channeler$cell_handler_$_state_machine__40522__auto____0 = (function (){
var statearr_51577 = [null,null,null,null,null,null,null];
(statearr_51577[(0)] = ezq$channeler$cell_handler_$_state_machine__40522__auto__);

(statearr_51577[(1)] = (1));

return statearr_51577;
});
var ezq$channeler$cell_handler_$_state_machine__40522__auto____1 = (function (state_51572){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_51572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e51578){if((e51578 instanceof Object)){
var ex__40525__auto__ = e51578;
var statearr_51579_51581 = state_51572;
(statearr_51579_51581[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51582 = state_51572;
state_51572 = G__51582;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
ezq$channeler$cell_handler_$_state_machine__40522__auto__ = function(state_51572){
switch(arguments.length){
case 0:
return ezq$channeler$cell_handler_$_state_machine__40522__auto____0.call(this);
case 1:
return ezq$channeler$cell_handler_$_state_machine__40522__auto____1.call(this,state_51572);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$channeler$cell_handler_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$channeler$cell_handler_$_state_machine__40522__auto____0;
ezq$channeler$cell_handler_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$channeler$cell_handler_$_state_machine__40522__auto____1;
return ezq$channeler$cell_handler_$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto__))
})();
var state__40637__auto__ = (function (){var statearr_51580 = f__40636__auto__.call(null);
(statearr_51580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto__);

return statearr_51580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto__))
);

return c__40635__auto__;
}
});
ezq.channeler.show_state = (function ezq$channeler$show_state(){
var c__40635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto__){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto__){
return (function (state_51598){
var state_val_51599 = (state_51598[(1)]);
if((state_val_51599 === (1))){
var state_51598__$1 = state_51598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51598__$1,(2),ezq.channeler.show_state,true);
} else {
if((state_val_51599 === (2))){
var inst_51596 = (state_51598[(2)]);
var state_51598__$1 = state_51598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51598__$1,inst_51596);
} else {
return null;
}
}
});})(c__40635__auto__))
;
return ((function (switch__40521__auto__,c__40635__auto__){
return (function() {
var ezq$channeler$show_state_$_state_machine__40522__auto__ = null;
var ezq$channeler$show_state_$_state_machine__40522__auto____0 = (function (){
var statearr_51603 = [null,null,null,null,null,null,null];
(statearr_51603[(0)] = ezq$channeler$show_state_$_state_machine__40522__auto__);

(statearr_51603[(1)] = (1));

return statearr_51603;
});
var ezq$channeler$show_state_$_state_machine__40522__auto____1 = (function (state_51598){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_51598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e51604){if((e51604 instanceof Object)){
var ex__40525__auto__ = e51604;
var statearr_51605_51607 = state_51598;
(statearr_51605_51607[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51608 = state_51598;
state_51598 = G__51608;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
ezq$channeler$show_state_$_state_machine__40522__auto__ = function(state_51598){
switch(arguments.length){
case 0:
return ezq$channeler$show_state_$_state_machine__40522__auto____0.call(this);
case 1:
return ezq$channeler$show_state_$_state_machine__40522__auto____1.call(this,state_51598);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$channeler$show_state_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$channeler$show_state_$_state_machine__40522__auto____0;
ezq$channeler$show_state_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$channeler$show_state_$_state_machine__40522__auto____1;
return ezq$channeler$show_state_$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto__))
})();
var state__40637__auto__ = (function (){var statearr_51606 = f__40636__auto__.call(null);
(statearr_51606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto__);

return statearr_51606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto__))
);

return c__40635__auto__;
});
ezq.channeler.ticker_button = (function ezq$channeler$ticker_button(channels){
var seq__51639 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"ticker-switch","ticker-switch",-364567782)], null));
var chunk__51640 = null;
var count__51641 = (0);
var i__51642 = (0);
while(true){
if((i__51642 < count__51641)){
var chan = cljs.core._nth.call(null,chunk__51640,i__51642);
var c__40635__auto___51669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__51639,chunk__51640,count__51641,i__51642,c__40635__auto___51669,chan){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (seq__51639,chunk__51640,count__51641,i__51642,c__40635__auto___51669,chan){
return (function (state_51647){
var state_val_51648 = (state_51647[(1)]);
if((state_val_51648 === (1))){
var inst_51643 = cljs.core.get.call(null,channels,chan);
var state_51647__$1 = state_51647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51647__$1,(2),inst_51643,true);
} else {
if((state_val_51648 === (2))){
var inst_51645 = (state_51647[(2)]);
var state_51647__$1 = state_51647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51647__$1,inst_51645);
} else {
return null;
}
}
});})(seq__51639,chunk__51640,count__51641,i__51642,c__40635__auto___51669,chan))
;
return ((function (seq__51639,chunk__51640,count__51641,i__51642,switch__40521__auto__,c__40635__auto___51669,chan){
return (function() {
var ezq$channeler$ticker_button_$_state_machine__40522__auto__ = null;
var ezq$channeler$ticker_button_$_state_machine__40522__auto____0 = (function (){
var statearr_51652 = [null,null,null,null,null,null,null];
(statearr_51652[(0)] = ezq$channeler$ticker_button_$_state_machine__40522__auto__);

(statearr_51652[(1)] = (1));

return statearr_51652;
});
var ezq$channeler$ticker_button_$_state_machine__40522__auto____1 = (function (state_51647){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_51647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e51653){if((e51653 instanceof Object)){
var ex__40525__auto__ = e51653;
var statearr_51654_51670 = state_51647;
(statearr_51654_51670[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51671 = state_51647;
state_51647 = G__51671;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
ezq$channeler$ticker_button_$_state_machine__40522__auto__ = function(state_51647){
switch(arguments.length){
case 0:
return ezq$channeler$ticker_button_$_state_machine__40522__auto____0.call(this);
case 1:
return ezq$channeler$ticker_button_$_state_machine__40522__auto____1.call(this,state_51647);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$channeler$ticker_button_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$channeler$ticker_button_$_state_machine__40522__auto____0;
ezq$channeler$ticker_button_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$channeler$ticker_button_$_state_machine__40522__auto____1;
return ezq$channeler$ticker_button_$_state_machine__40522__auto__;
})()
;})(seq__51639,chunk__51640,count__51641,i__51642,switch__40521__auto__,c__40635__auto___51669,chan))
})();
var state__40637__auto__ = (function (){var statearr_51655 = f__40636__auto__.call(null);
(statearr_51655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___51669);

return statearr_51655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(seq__51639,chunk__51640,count__51641,i__51642,c__40635__auto___51669,chan))
);


var G__51672 = seq__51639;
var G__51673 = chunk__51640;
var G__51674 = count__51641;
var G__51675 = (i__51642 + (1));
seq__51639 = G__51672;
chunk__51640 = G__51673;
count__51641 = G__51674;
i__51642 = G__51675;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__51639);
if(temp__6738__auto__){
var seq__51639__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51639__$1)){
var c__29660__auto__ = cljs.core.chunk_first.call(null,seq__51639__$1);
var G__51676 = cljs.core.chunk_rest.call(null,seq__51639__$1);
var G__51677 = c__29660__auto__;
var G__51678 = cljs.core.count.call(null,c__29660__auto__);
var G__51679 = (0);
seq__51639 = G__51676;
chunk__51640 = G__51677;
count__51641 = G__51678;
i__51642 = G__51679;
continue;
} else {
var chan = cljs.core.first.call(null,seq__51639__$1);
var c__40635__auto___51680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__51639,chunk__51640,count__51641,i__51642,c__40635__auto___51680,chan,seq__51639__$1,temp__6738__auto__){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (seq__51639,chunk__51640,count__51641,i__51642,c__40635__auto___51680,chan,seq__51639__$1,temp__6738__auto__){
return (function (state_51660){
var state_val_51661 = (state_51660[(1)]);
if((state_val_51661 === (1))){
var inst_51656 = cljs.core.get.call(null,channels,chan);
var state_51660__$1 = state_51660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51660__$1,(2),inst_51656,true);
} else {
if((state_val_51661 === (2))){
var inst_51658 = (state_51660[(2)]);
var state_51660__$1 = state_51660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51660__$1,inst_51658);
} else {
return null;
}
}
});})(seq__51639,chunk__51640,count__51641,i__51642,c__40635__auto___51680,chan,seq__51639__$1,temp__6738__auto__))
;
return ((function (seq__51639,chunk__51640,count__51641,i__51642,switch__40521__auto__,c__40635__auto___51680,chan,seq__51639__$1,temp__6738__auto__){
return (function() {
var ezq$channeler$ticker_button_$_state_machine__40522__auto__ = null;
var ezq$channeler$ticker_button_$_state_machine__40522__auto____0 = (function (){
var statearr_51665 = [null,null,null,null,null,null,null];
(statearr_51665[(0)] = ezq$channeler$ticker_button_$_state_machine__40522__auto__);

(statearr_51665[(1)] = (1));

return statearr_51665;
});
var ezq$channeler$ticker_button_$_state_machine__40522__auto____1 = (function (state_51660){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_51660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e51666){if((e51666 instanceof Object)){
var ex__40525__auto__ = e51666;
var statearr_51667_51681 = state_51660;
(statearr_51667_51681[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51682 = state_51660;
state_51660 = G__51682;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
ezq$channeler$ticker_button_$_state_machine__40522__auto__ = function(state_51660){
switch(arguments.length){
case 0:
return ezq$channeler$ticker_button_$_state_machine__40522__auto____0.call(this);
case 1:
return ezq$channeler$ticker_button_$_state_machine__40522__auto____1.call(this,state_51660);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$channeler$ticker_button_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$channeler$ticker_button_$_state_machine__40522__auto____0;
ezq$channeler$ticker_button_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$channeler$ticker_button_$_state_machine__40522__auto____1;
return ezq$channeler$ticker_button_$_state_machine__40522__auto__;
})()
;})(seq__51639,chunk__51640,count__51641,i__51642,switch__40521__auto__,c__40635__auto___51680,chan,seq__51639__$1,temp__6738__auto__))
})();
var state__40637__auto__ = (function (){var statearr_51668 = f__40636__auto__.call(null);
(statearr_51668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___51680);

return statearr_51668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(seq__51639,chunk__51640,count__51641,i__51642,c__40635__auto___51680,chan,seq__51639__$1,temp__6738__auto__))
);


var G__51683 = cljs.core.next.call(null,seq__51639__$1);
var G__51684 = null;
var G__51685 = (0);
var G__51686 = (0);
seq__51639 = G__51683;
chunk__51640 = G__51684;
count__51641 = G__51685;
i__51642 = G__51686;
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
var args51687 = [];
var len__29970__auto___51719 = arguments.length;
var i__29971__auto___51720 = (0);
while(true){
if((i__29971__auto___51720 < len__29970__auto___51719)){
args51687.push((arguments[i__29971__auto___51720]));

var G__51721 = (i__29971__auto___51720 + (1));
i__29971__auto___51720 = G__51721;
continue;
} else {
}
break;
}

var G__51689 = args51687.length;
switch (G__51689) {
case 1:
return ezq.channeler.blog_post.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 5:
return ezq.channeler.blog_post.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args51687.length)].join('')));

}
});

ezq.channeler.blog_post.cljs$core$IFn$_invoke$arity$1 = (function (channels){
var c__40635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto__){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto__){
return (function (state_51694){
var state_val_51695 = (state_51694[(1)]);
if((state_val_51695 === (1))){
var inst_51690 = new cljs.core.Keyword(null,"new-entry","new-entry",1329281287).cljs$core$IFn$_invoke$arity$1(channels);
var state_51694__$1 = state_51694;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51694__$1,(2),inst_51690,true);
} else {
if((state_val_51695 === (2))){
var inst_51692 = (state_51694[(2)]);
var state_51694__$1 = state_51694;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51694__$1,inst_51692);
} else {
return null;
}
}
});})(c__40635__auto__))
;
return ((function (switch__40521__auto__,c__40635__auto__){
return (function() {
var ezq$channeler$state_machine__40522__auto__ = null;
var ezq$channeler$state_machine__40522__auto____0 = (function (){
var statearr_51699 = [null,null,null,null,null,null,null];
(statearr_51699[(0)] = ezq$channeler$state_machine__40522__auto__);

(statearr_51699[(1)] = (1));

return statearr_51699;
});
var ezq$channeler$state_machine__40522__auto____1 = (function (state_51694){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_51694);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e51700){if((e51700 instanceof Object)){
var ex__40525__auto__ = e51700;
var statearr_51701_51723 = state_51694;
(statearr_51701_51723[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51694);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51724 = state_51694;
state_51694 = G__51724;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
ezq$channeler$state_machine__40522__auto__ = function(state_51694){
switch(arguments.length){
case 0:
return ezq$channeler$state_machine__40522__auto____0.call(this);
case 1:
return ezq$channeler$state_machine__40522__auto____1.call(this,state_51694);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$channeler$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$channeler$state_machine__40522__auto____0;
ezq$channeler$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$channeler$state_machine__40522__auto____1;
return ezq$channeler$state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto__))
})();
var state__40637__auto__ = (function (){var statearr_51702 = f__40636__auto__.call(null);
(statearr_51702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto__);

return statearr_51702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto__))
);

return c__40635__auto__;
});

ezq.channeler.blog_post.cljs$core$IFn$_invoke$arity$5 = (function (idx,field,status,message,channels){
var c__40635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto__){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto__){
return (function (state_51710){
var state_val_51711 = (state_51710[(1)]);
if((state_val_51711 === (1))){
var inst_51703 = new cljs.core.Keyword(null,"blog-entries","blog-entries",-1298904592).cljs$core$IFn$_invoke$arity$1(channels);
var inst_51704 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51705 = [idx,field,status,message];
var inst_51706 = (new cljs.core.PersistentVector(null,4,(5),inst_51704,inst_51705,null));
var state_51710__$1 = state_51710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51710__$1,(2),inst_51703,inst_51706);
} else {
if((state_val_51711 === (2))){
var inst_51708 = (state_51710[(2)]);
var state_51710__$1 = state_51710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51710__$1,inst_51708);
} else {
return null;
}
}
});})(c__40635__auto__))
;
return ((function (switch__40521__auto__,c__40635__auto__){
return (function() {
var ezq$channeler$state_machine__40522__auto__ = null;
var ezq$channeler$state_machine__40522__auto____0 = (function (){
var statearr_51715 = [null,null,null,null,null,null,null];
(statearr_51715[(0)] = ezq$channeler$state_machine__40522__auto__);

(statearr_51715[(1)] = (1));

return statearr_51715;
});
var ezq$channeler$state_machine__40522__auto____1 = (function (state_51710){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_51710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e51716){if((e51716 instanceof Object)){
var ex__40525__auto__ = e51716;
var statearr_51717_51725 = state_51710;
(statearr_51717_51725[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51726 = state_51710;
state_51710 = G__51726;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
ezq$channeler$state_machine__40522__auto__ = function(state_51710){
switch(arguments.length){
case 0:
return ezq$channeler$state_machine__40522__auto____0.call(this);
case 1:
return ezq$channeler$state_machine__40522__auto____1.call(this,state_51710);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$channeler$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$channeler$state_machine__40522__auto____0;
ezq$channeler$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$channeler$state_machine__40522__auto____1;
return ezq$channeler$state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto__))
})();
var state__40637__auto__ = (function (){var statearr_51718 = f__40636__auto__.call(null);
(statearr_51718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto__);

return statearr_51718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto__))
);

return c__40635__auto__;
});

ezq.channeler.blog_post.cljs$lang$maxFixedArity = 5;

ezq.channeler.reset_button = (function ezq$channeler$reset_button(channels){
var c__40635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto__){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto__){
return (function (state_51744){
var state_val_51745 = (state_51744[(1)]);
if((state_val_51745 === (1))){
var inst_51740 = new cljs.core.Keyword(null,"restart","restart",-1779883612).cljs$core$IFn$_invoke$arity$1(channels);
var state_51744__$1 = state_51744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51744__$1,(2),inst_51740,true);
} else {
if((state_val_51745 === (2))){
var inst_51742 = (state_51744[(2)]);
var state_51744__$1 = state_51744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51744__$1,inst_51742);
} else {
return null;
}
}
});})(c__40635__auto__))
;
return ((function (switch__40521__auto__,c__40635__auto__){
return (function() {
var ezq$channeler$reset_button_$_state_machine__40522__auto__ = null;
var ezq$channeler$reset_button_$_state_machine__40522__auto____0 = (function (){
var statearr_51749 = [null,null,null,null,null,null,null];
(statearr_51749[(0)] = ezq$channeler$reset_button_$_state_machine__40522__auto__);

(statearr_51749[(1)] = (1));

return statearr_51749;
});
var ezq$channeler$reset_button_$_state_machine__40522__auto____1 = (function (state_51744){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_51744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e51750){if((e51750 instanceof Object)){
var ex__40525__auto__ = e51750;
var statearr_51751_51753 = state_51744;
(statearr_51751_51753[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51754 = state_51744;
state_51744 = G__51754;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
ezq$channeler$reset_button_$_state_machine__40522__auto__ = function(state_51744){
switch(arguments.length){
case 0:
return ezq$channeler$reset_button_$_state_machine__40522__auto____0.call(this);
case 1:
return ezq$channeler$reset_button_$_state_machine__40522__auto____1.call(this,state_51744);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$channeler$reset_button_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$channeler$reset_button_$_state_machine__40522__auto____0;
ezq$channeler$reset_button_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$channeler$reset_button_$_state_machine__40522__auto____1;
return ezq$channeler$reset_button_$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto__))
})();
var state__40637__auto__ = (function (){var statearr_51752 = f__40636__auto__.call(null);
(statearr_51752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto__);

return statearr_51752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto__))
);

return c__40635__auto__;
});
ezq.channeler.new_post = (function ezq$channeler$new_post(channels){
var c__40635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto__){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto__){
return (function (state_51772){
var state_val_51773 = (state_51772[(1)]);
if((state_val_51773 === (1))){
var inst_51768 = new cljs.core.Keyword(null,"blog-entries","blog-entries",-1298904592).cljs$core$IFn$_invoke$arity$1(channels);
var state_51772__$1 = state_51772;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51772__$1,(2),inst_51768,true);
} else {
if((state_val_51773 === (2))){
var inst_51770 = (state_51772[(2)]);
var state_51772__$1 = state_51772;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51772__$1,inst_51770);
} else {
return null;
}
}
});})(c__40635__auto__))
;
return ((function (switch__40521__auto__,c__40635__auto__){
return (function() {
var ezq$channeler$new_post_$_state_machine__40522__auto__ = null;
var ezq$channeler$new_post_$_state_machine__40522__auto____0 = (function (){
var statearr_51777 = [null,null,null,null,null,null,null];
(statearr_51777[(0)] = ezq$channeler$new_post_$_state_machine__40522__auto__);

(statearr_51777[(1)] = (1));

return statearr_51777;
});
var ezq$channeler$new_post_$_state_machine__40522__auto____1 = (function (state_51772){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_51772);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e51778){if((e51778 instanceof Object)){
var ex__40525__auto__ = e51778;
var statearr_51779_51781 = state_51772;
(statearr_51779_51781[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51782 = state_51772;
state_51772 = G__51782;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
ezq$channeler$new_post_$_state_machine__40522__auto__ = function(state_51772){
switch(arguments.length){
case 0:
return ezq$channeler$new_post_$_state_machine__40522__auto____0.call(this);
case 1:
return ezq$channeler$new_post_$_state_machine__40522__auto____1.call(this,state_51772);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$channeler$new_post_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$channeler$new_post_$_state_machine__40522__auto____0;
ezq$channeler$new_post_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$channeler$new_post_$_state_machine__40522__auto____1;
return ezq$channeler$new_post_$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto__))
})();
var state__40637__auto__ = (function (){var statearr_51780 = f__40636__auto__.call(null);
(statearr_51780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto__);

return statearr_51780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto__))
);

return c__40635__auto__;
});

//# sourceMappingURL=channeler.js.map