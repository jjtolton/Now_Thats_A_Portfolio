// Compiled by ClojureScript 1.9.518 {}
goog.provide('ezq.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('quiescent.core');
goog.require('cljs_http.client');
goog.require('goog.events');
goog.require('goog.History');
goog.require('sablono.core');
goog.require('figwheel.client');
goog.require('dirac.runtime');
goog.require('ezq.render');
goog.require('ezq.store');
goog.require('ezq.data');
goog.require('ezq.ttt');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * Set up Google Closure history management
 */
ezq.core.init_history = (function ezq$core$init_history(app){
var h = (new goog.History());
h.setEnabled(true);

return goog.events.listen(h,goog.History.EventType.NAVIGATE,((function (h){
return (function (evt){
var ch = new cljs.core.Keyword(null,"nav","nav",719540477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(app));
var token = evt.token;
h.setToken(token);

var c__9446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9446__auto__,ch,token,h){
return (function (){
var f__9447__auto__ = (function (){var switch__9425__auto__ = ((function (c__9446__auto__,ch,token,h){
return (function (state_19099){
var state_val_19100 = (state_19099[(1)]);
if((state_val_19100 === (1))){
var state_19099__$1 = state_19099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19099__$1,(2),ch,token);
} else {
if((state_val_19100 === (2))){
var inst_19097 = (state_19099[(2)]);
var state_19099__$1 = state_19099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19099__$1,inst_19097);
} else {
return null;
}
}
});})(c__9446__auto__,ch,token,h))
;
return ((function (switch__9425__auto__,c__9446__auto__,ch,token,h){
return (function() {
var ezq$core$init_history_$_state_machine__9426__auto__ = null;
var ezq$core$init_history_$_state_machine__9426__auto____0 = (function (){
var statearr_19104 = [null,null,null,null,null,null,null];
(statearr_19104[(0)] = ezq$core$init_history_$_state_machine__9426__auto__);

(statearr_19104[(1)] = (1));

return statearr_19104;
});
var ezq$core$init_history_$_state_machine__9426__auto____1 = (function (state_19099){
while(true){
var ret_value__9427__auto__ = (function (){try{while(true){
var result__9428__auto__ = switch__9425__auto__.call(null,state_19099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9428__auto__;
}
break;
}
}catch (e19105){if((e19105 instanceof Object)){
var ex__9429__auto__ = e19105;
var statearr_19106_19108 = state_19099;
(statearr_19106_19108[(5)] = ex__9429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19109 = state_19099;
state_19099 = G__19109;
continue;
} else {
return ret_value__9427__auto__;
}
break;
}
});
ezq$core$init_history_$_state_machine__9426__auto__ = function(state_19099){
switch(arguments.length){
case 0:
return ezq$core$init_history_$_state_machine__9426__auto____0.call(this);
case 1:
return ezq$core$init_history_$_state_machine__9426__auto____1.call(this,state_19099);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$core$init_history_$_state_machine__9426__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$core$init_history_$_state_machine__9426__auto____0;
ezq$core$init_history_$_state_machine__9426__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$core$init_history_$_state_machine__9426__auto____1;
return ezq$core$init_history_$_state_machine__9426__auto__;
})()
;})(switch__9425__auto__,c__9446__auto__,ch,token,h))
})();
var state__9448__auto__ = (function (){var statearr_19107 = f__9447__auto__.call(null);
(statearr_19107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9446__auto__);

return statearr_19107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9448__auto__);
});})(c__9446__auto__,ch,token,h))
);

return c__9446__auto__;
});})(h))
);
});
/**
 * For every entry in a map of channel identifiers to consumers,
 *   initiate a channel listener which will update the application state
 *   using the appropriate function whenever a value is recieved, as
 *   well as triggering a render.
 */
ezq.core.init_updates = (function ezq$core$init_updates(app){
var seq__19188 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"consumers","consumers",270616753).cljs$core$IFn$_invoke$arity$1(app));
var chunk__19189 = null;
var count__19190 = (0);
var i__19191 = (0);
while(true){
if((i__19191 < count__19190)){
var vec__19192 = cljs.core._nth.call(null,chunk__19189,i__19191);
var ch = cljs.core.nth.call(null,vec__19192,(0),null);
var update_fn = cljs.core.nth.call(null,vec__19192,(1),null);
var c__9446__auto___19266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__19188,chunk__19189,count__19190,i__19191,c__9446__auto___19266,vec__19192,ch,update_fn){
return (function (){
var f__9447__auto__ = (function (){var switch__9425__auto__ = ((function (seq__19188,chunk__19189,count__19190,i__19191,c__9446__auto___19266,vec__19192,ch,update_fn){
return (function (state_19213){
var state_val_19214 = (state_19213[(1)]);
if((state_val_19214 === (1))){
var state_19213__$1 = state_19213;
var statearr_19215_19267 = state_19213__$1;
(statearr_19215_19267[(2)] = null);

(statearr_19215_19267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (2))){
var state_19213__$1 = state_19213;
var statearr_19216_19268 = state_19213__$1;
(statearr_19216_19268[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (3))){
var inst_19211 = (state_19213[(2)]);
var state_19213__$1 = state_19213;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19213__$1,inst_19211);
} else {
if((state_val_19214 === (4))){
var inst_19197 = new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(app);
var inst_19198 = cljs.core.get.call(null,inst_19197,ch);
var state_19213__$1 = state_19213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19213__$1,(7),inst_19198);
} else {
if((state_val_19214 === (5))){
var state_19213__$1 = state_19213;
var statearr_19218_19269 = state_19213__$1;
(statearr_19218_19269[(2)] = null);

(statearr_19218_19269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (6))){
var inst_19209 = (state_19213[(2)]);
var state_19213__$1 = state_19213;
var statearr_19219_19270 = state_19213__$1;
(statearr_19219_19270[(2)] = inst_19209);

(statearr_19219_19270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19214 === (7))){
var inst_19200 = (state_19213[(2)]);
var inst_19201 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("on channel <"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">, recieved value <"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19200),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">")].join('');
var inst_19202 = console.log(inst_19201);
var inst_19203 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(app);
var inst_19204 = cljs.core.swap_BANG_.call(null,inst_19203,update_fn,inst_19200);
var inst_19205 = ezq.render.request_render.call(null,app);
var state_19213__$1 = (function (){var statearr_19220 = state_19213;
(statearr_19220[(7)] = inst_19204);

(statearr_19220[(8)] = inst_19202);

(statearr_19220[(9)] = inst_19205);

return statearr_19220;
})();
var statearr_19221_19271 = state_19213__$1;
(statearr_19221_19271[(2)] = null);

(statearr_19221_19271[(1)] = (2));


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
});})(seq__19188,chunk__19189,count__19190,i__19191,c__9446__auto___19266,vec__19192,ch,update_fn))
;
return ((function (seq__19188,chunk__19189,count__19190,i__19191,switch__9425__auto__,c__9446__auto___19266,vec__19192,ch,update_fn){
return (function() {
var ezq$core$init_updates_$_state_machine__9426__auto__ = null;
var ezq$core$init_updates_$_state_machine__9426__auto____0 = (function (){
var statearr_19225 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19225[(0)] = ezq$core$init_updates_$_state_machine__9426__auto__);

(statearr_19225[(1)] = (1));

return statearr_19225;
});
var ezq$core$init_updates_$_state_machine__9426__auto____1 = (function (state_19213){
while(true){
var ret_value__9427__auto__ = (function (){try{while(true){
var result__9428__auto__ = switch__9425__auto__.call(null,state_19213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9428__auto__;
}
break;
}
}catch (e19226){if((e19226 instanceof Object)){
var ex__9429__auto__ = e19226;
var statearr_19227_19272 = state_19213;
(statearr_19227_19272[(5)] = ex__9429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19273 = state_19213;
state_19213 = G__19273;
continue;
} else {
return ret_value__9427__auto__;
}
break;
}
});
ezq$core$init_updates_$_state_machine__9426__auto__ = function(state_19213){
switch(arguments.length){
case 0:
return ezq$core$init_updates_$_state_machine__9426__auto____0.call(this);
case 1:
return ezq$core$init_updates_$_state_machine__9426__auto____1.call(this,state_19213);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$core$init_updates_$_state_machine__9426__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$core$init_updates_$_state_machine__9426__auto____0;
ezq$core$init_updates_$_state_machine__9426__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$core$init_updates_$_state_machine__9426__auto____1;
return ezq$core$init_updates_$_state_machine__9426__auto__;
})()
;})(seq__19188,chunk__19189,count__19190,i__19191,switch__9425__auto__,c__9446__auto___19266,vec__19192,ch,update_fn))
})();
var state__9448__auto__ = (function (){var statearr_19228 = f__9447__auto__.call(null);
(statearr_19228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9446__auto___19266);

return statearr_19228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9448__auto__);
});})(seq__19188,chunk__19189,count__19190,i__19191,c__9446__auto___19266,vec__19192,ch,update_fn))
);


var G__19274 = seq__19188;
var G__19275 = chunk__19189;
var G__19276 = count__19190;
var G__19277 = (i__19191 + (1));
seq__19188 = G__19274;
chunk__19189 = G__19275;
count__19190 = G__19276;
i__19191 = G__19277;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19188);
if(temp__4657__auto__){
var seq__19188__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19188__$1)){
var c__7856__auto__ = cljs.core.chunk_first.call(null,seq__19188__$1);
var G__19278 = cljs.core.chunk_rest.call(null,seq__19188__$1);
var G__19279 = c__7856__auto__;
var G__19280 = cljs.core.count.call(null,c__7856__auto__);
var G__19281 = (0);
seq__19188 = G__19278;
chunk__19189 = G__19279;
count__19190 = G__19280;
i__19191 = G__19281;
continue;
} else {
var vec__19229 = cljs.core.first.call(null,seq__19188__$1);
var ch = cljs.core.nth.call(null,vec__19229,(0),null);
var update_fn = cljs.core.nth.call(null,vec__19229,(1),null);
var c__9446__auto___19282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__19188,chunk__19189,count__19190,i__19191,c__9446__auto___19282,vec__19229,ch,update_fn,seq__19188__$1,temp__4657__auto__){
return (function (){
var f__9447__auto__ = (function (){var switch__9425__auto__ = ((function (seq__19188,chunk__19189,count__19190,i__19191,c__9446__auto___19282,vec__19229,ch,update_fn,seq__19188__$1,temp__4657__auto__){
return (function (state_19250){
var state_val_19251 = (state_19250[(1)]);
if((state_val_19251 === (1))){
var state_19250__$1 = state_19250;
var statearr_19252_19283 = state_19250__$1;
(statearr_19252_19283[(2)] = null);

(statearr_19252_19283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19251 === (2))){
var state_19250__$1 = state_19250;
var statearr_19253_19284 = state_19250__$1;
(statearr_19253_19284[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19251 === (3))){
var inst_19248 = (state_19250[(2)]);
var state_19250__$1 = state_19250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19250__$1,inst_19248);
} else {
if((state_val_19251 === (4))){
var inst_19234 = new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(app);
var inst_19235 = cljs.core.get.call(null,inst_19234,ch);
var state_19250__$1 = state_19250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19250__$1,(7),inst_19235);
} else {
if((state_val_19251 === (5))){
var state_19250__$1 = state_19250;
var statearr_19255_19285 = state_19250__$1;
(statearr_19255_19285[(2)] = null);

(statearr_19255_19285[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19251 === (6))){
var inst_19246 = (state_19250[(2)]);
var state_19250__$1 = state_19250;
var statearr_19256_19286 = state_19250__$1;
(statearr_19256_19286[(2)] = inst_19246);

(statearr_19256_19286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19251 === (7))){
var inst_19237 = (state_19250[(2)]);
var inst_19238 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("on channel <"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">, recieved value <"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_19237),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">")].join('');
var inst_19239 = console.log(inst_19238);
var inst_19240 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(app);
var inst_19241 = cljs.core.swap_BANG_.call(null,inst_19240,update_fn,inst_19237);
var inst_19242 = ezq.render.request_render.call(null,app);
var state_19250__$1 = (function (){var statearr_19257 = state_19250;
(statearr_19257[(7)] = inst_19241);

(statearr_19257[(8)] = inst_19239);

(statearr_19257[(9)] = inst_19242);

return statearr_19257;
})();
var statearr_19258_19287 = state_19250__$1;
(statearr_19258_19287[(2)] = null);

(statearr_19258_19287[(1)] = (2));


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
});})(seq__19188,chunk__19189,count__19190,i__19191,c__9446__auto___19282,vec__19229,ch,update_fn,seq__19188__$1,temp__4657__auto__))
;
return ((function (seq__19188,chunk__19189,count__19190,i__19191,switch__9425__auto__,c__9446__auto___19282,vec__19229,ch,update_fn,seq__19188__$1,temp__4657__auto__){
return (function() {
var ezq$core$init_updates_$_state_machine__9426__auto__ = null;
var ezq$core$init_updates_$_state_machine__9426__auto____0 = (function (){
var statearr_19262 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19262[(0)] = ezq$core$init_updates_$_state_machine__9426__auto__);

(statearr_19262[(1)] = (1));

return statearr_19262;
});
var ezq$core$init_updates_$_state_machine__9426__auto____1 = (function (state_19250){
while(true){
var ret_value__9427__auto__ = (function (){try{while(true){
var result__9428__auto__ = switch__9425__auto__.call(null,state_19250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9428__auto__;
}
break;
}
}catch (e19263){if((e19263 instanceof Object)){
var ex__9429__auto__ = e19263;
var statearr_19264_19288 = state_19250;
(statearr_19264_19288[(5)] = ex__9429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19289 = state_19250;
state_19250 = G__19289;
continue;
} else {
return ret_value__9427__auto__;
}
break;
}
});
ezq$core$init_updates_$_state_machine__9426__auto__ = function(state_19250){
switch(arguments.length){
case 0:
return ezq$core$init_updates_$_state_machine__9426__auto____0.call(this);
case 1:
return ezq$core$init_updates_$_state_machine__9426__auto____1.call(this,state_19250);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$core$init_updates_$_state_machine__9426__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$core$init_updates_$_state_machine__9426__auto____0;
ezq$core$init_updates_$_state_machine__9426__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$core$init_updates_$_state_machine__9426__auto____1;
return ezq$core$init_updates_$_state_machine__9426__auto__;
})()
;})(seq__19188,chunk__19189,count__19190,i__19191,switch__9425__auto__,c__9446__auto___19282,vec__19229,ch,update_fn,seq__19188__$1,temp__4657__auto__))
})();
var state__9448__auto__ = (function (){var statearr_19265 = f__9447__auto__.call(null);
(statearr_19265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9446__auto___19282);

return statearr_19265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9448__auto__);
});})(seq__19188,chunk__19189,count__19190,i__19191,c__9446__auto___19282,vec__19229,ch,update_fn,seq__19188__$1,temp__4657__auto__))
);


var G__19290 = cljs.core.next.call(null,seq__19188__$1);
var G__19291 = null;
var G__19292 = (0);
var G__19293 = (0);
seq__19188 = G__19290;
chunk__19189 = G__19291;
count__19190 = G__19292;
i__19191 = G__19293;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Return a map containing the initial application
 */
ezq.core.load_app = (function ezq$core$load_app(){
var consumers = ezq.data.handlers.call(null);
var fresh = ezq.data.fresh.call(null);
var loaded = (function (){var stored = ezq.store.load.call(null);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.keys.call(null,fresh)),cljs.core.count.call(null,cljs.core.keys.call(null,stored)))){
return stored;
} else {
return null;
}
})();
var world = (function (){var or__7037__auto__ = loaded;
if(cljs.core.truth_(or__7037__auto__)){
return or__7037__auto__;
} else {
return fresh;
}
})();
var consumer_keys = cljs.core.keys.call(null,consumers);
var res = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"channels","channels",1132759174),cljs.core.zipmap.call(null,consumer_keys,(function (){var iter__7825__auto__ = ((function (consumers,fresh,loaded,world,consumer_keys){
return (function ezq$core$load_app_$_iter__19298(s__19299){
return (new cljs.core.LazySeq(null,((function (consumers,fresh,loaded,world,consumer_keys){
return (function (){
var s__19299__$1 = s__19299;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19299__$1);
if(temp__4657__auto__){
var s__19299__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19299__$2)){
var c__7823__auto__ = cljs.core.chunk_first.call(null,s__19299__$2);
var size__7824__auto__ = cljs.core.count.call(null,c__7823__auto__);
var b__19301 = cljs.core.chunk_buffer.call(null,size__7824__auto__);
if((function (){var i__19300 = (0);
while(true){
if((i__19300 < size__7824__auto__)){
var _ = cljs.core._nth.call(null,c__7823__auto__,i__19300);
cljs.core.chunk_append.call(null,b__19301,cljs.core.async.chan.call(null));

var G__19302 = (i__19300 + (1));
i__19300 = G__19302;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19301),ezq$core$load_app_$_iter__19298.call(null,cljs.core.chunk_rest.call(null,s__19299__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19301),null);
}
} else {
var _ = cljs.core.first.call(null,s__19299__$2);
return cljs.core.cons.call(null,cljs.core.async.chan.call(null),ezq$core$load_app_$_iter__19298.call(null,cljs.core.rest.call(null,s__19299__$2)));
}
} else {
return null;
}
break;
}
});})(consumers,fresh,loaded,world,consumer_keys))
,null,null));
});})(consumers,fresh,loaded,world,consumer_keys))
;
return iter__7825__auto__.call(null,consumer_keys);
})()),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.call(null,world),new cljs.core.Keyword(null,"consumers","consumers",270616753),consumers], null);
return res;
});
if(typeof ezq.core.app !== 'undefined'){
} else {
ezq.core.app = ezq.core.load_app.call(null);
}
if(typeof ezq.core.world !== 'undefined'){
} else {
ezq.core.world = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(ezq.core.app);
}
/**
 * Application entry point
 */
ezq.core.main = (function ezq$core$main(){
ezq.store.init_persistence.call(null,ezq.core.app);

ezq.core.init_history.call(null,ezq.core.app);

ezq.core.init_updates.call(null,ezq.core.app);

setInterval((function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ezq.core.world)))){
var c__9446__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9446__auto__){
return (function (){
var f__9447__auto__ = (function (){var switch__9425__auto__ = ((function (c__9446__auto__){
return (function (state_19322){
var state_val_19323 = (state_19322[(1)]);
if((state_val_19323 === (1))){
var inst_19317 = new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(ezq.core.app);
var inst_19318 = new cljs.core.Keyword(null,"ticker","ticker",214613162).cljs$core$IFn$_invoke$arity$1(inst_19317);
var state_19322__$1 = state_19322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19322__$1,(2),inst_19318,(1));
} else {
if((state_val_19323 === (2))){
var inst_19320 = (state_19322[(2)]);
var state_19322__$1 = state_19322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19322__$1,inst_19320);
} else {
return null;
}
}
});})(c__9446__auto__))
;
return ((function (switch__9425__auto__,c__9446__auto__){
return (function() {
var ezq$core$main_$_state_machine__9426__auto__ = null;
var ezq$core$main_$_state_machine__9426__auto____0 = (function (){
var statearr_19327 = [null,null,null,null,null,null,null];
(statearr_19327[(0)] = ezq$core$main_$_state_machine__9426__auto__);

(statearr_19327[(1)] = (1));

return statearr_19327;
});
var ezq$core$main_$_state_machine__9426__auto____1 = (function (state_19322){
while(true){
var ret_value__9427__auto__ = (function (){try{while(true){
var result__9428__auto__ = switch__9425__auto__.call(null,state_19322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9428__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9428__auto__;
}
break;
}
}catch (e19328){if((e19328 instanceof Object)){
var ex__9429__auto__ = e19328;
var statearr_19329_19331 = state_19322;
(statearr_19329_19331[(5)] = ex__9429__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19332 = state_19322;
state_19322 = G__19332;
continue;
} else {
return ret_value__9427__auto__;
}
break;
}
});
ezq$core$main_$_state_machine__9426__auto__ = function(state_19322){
switch(arguments.length){
case 0:
return ezq$core$main_$_state_machine__9426__auto____0.call(this);
case 1:
return ezq$core$main_$_state_machine__9426__auto____1.call(this,state_19322);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$core$main_$_state_machine__9426__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$core$main_$_state_machine__9426__auto____0;
ezq$core$main_$_state_machine__9426__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$core$main_$_state_machine__9426__auto____1;
return ezq$core$main_$_state_machine__9426__auto__;
})()
;})(switch__9425__auto__,c__9446__auto__))
})();
var state__9448__auto__ = (function (){var statearr_19330 = f__9447__auto__.call(null);
(statearr_19330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9446__auto__);

return statearr_19330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9448__auto__);
});})(c__9446__auto__))
);

return c__9446__auto__;
} else {
return null;
}
}),(1000));

return ezq.render.request_render.call(null,ezq.core.app);
});
goog.exportSymbol('ezq.core.main', ezq.core.main);
cljs.core.println.call(null,"running!");
ezq.core.main.call(null);

//# sourceMappingURL=core.js.map