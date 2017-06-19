// Compiled by ClojureScript 1.9.229 {}
goog.provide('ezq.chan_handler');
goog.require('cljs.core');
goog.require('cljs.core.async');
ezq.chan_handler.cell_handler = (function ezq$chan_handler$cell_handler(winner,x,y,channels){
debugger;


if(cljs.core.truth_(winner)){
return null;
} else {
return (function (){
var c__28673__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28673__auto__){
return (function (){
var f__28674__auto__ = (function (){var switch__28652__auto__ = ((function (c__28673__auto__){
return (function (state_28741){
var state_val_28742 = (state_28741[(1)]);
if((state_val_28742 === (1))){
var inst_28734 = new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(channels);
var inst_28735 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28736 = [x,y];
var inst_28737 = (new cljs.core.PersistentVector(null,2,(5),inst_28735,inst_28736,null));
var state_28741__$1 = state_28741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28741__$1,(2),inst_28734,inst_28737);
} else {
if((state_val_28742 === (2))){
var inst_28739 = (state_28741[(2)]);
var state_28741__$1 = state_28741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28741__$1,inst_28739);
} else {
return null;
}
}
});})(c__28673__auto__))
;
return ((function (switch__28652__auto__,c__28673__auto__){
return (function() {
var ezq$chan_handler$cell_handler_$_state_machine__28653__auto__ = null;
var ezq$chan_handler$cell_handler_$_state_machine__28653__auto____0 = (function (){
var statearr_28746 = [null,null,null,null,null,null,null];
(statearr_28746[(0)] = ezq$chan_handler$cell_handler_$_state_machine__28653__auto__);

(statearr_28746[(1)] = (1));

return statearr_28746;
});
var ezq$chan_handler$cell_handler_$_state_machine__28653__auto____1 = (function (state_28741){
while(true){
var ret_value__28654__auto__ = (function (){try{while(true){
var result__28655__auto__ = switch__28652__auto__.call(null,state_28741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28655__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28655__auto__;
}
break;
}
}catch (e28747){if((e28747 instanceof Object)){
var ex__28656__auto__ = e28747;
var statearr_28748_28750 = state_28741;
(statearr_28748_28750[(5)] = ex__28656__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28654__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28751 = state_28741;
state_28741 = G__28751;
continue;
} else {
return ret_value__28654__auto__;
}
break;
}
});
ezq$chan_handler$cell_handler_$_state_machine__28653__auto__ = function(state_28741){
switch(arguments.length){
case 0:
return ezq$chan_handler$cell_handler_$_state_machine__28653__auto____0.call(this);
case 1:
return ezq$chan_handler$cell_handler_$_state_machine__28653__auto____1.call(this,state_28741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ezq$chan_handler$cell_handler_$_state_machine__28653__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$chan_handler$cell_handler_$_state_machine__28653__auto____0;
ezq$chan_handler$cell_handler_$_state_machine__28653__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$chan_handler$cell_handler_$_state_machine__28653__auto____1;
return ezq$chan_handler$cell_handler_$_state_machine__28653__auto__;
})()
;})(switch__28652__auto__,c__28673__auto__))
})();
var state__28675__auto__ = (function (){var statearr_28749 = f__28674__auto__.call(null);
(statearr_28749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28673__auto__);

return statearr_28749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28675__auto__);
});})(c__28673__auto__))
);

return c__28673__auto__;
});
}
});

//# sourceMappingURL=chan_handler.js.map