// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('ezq.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
cljs.core.enable_console_print_BANG_();
/**
 * Set up Google Closure history management
 */
ezq.core.init_history = (function ezq$core$init_history(app){
var h = (new goog.History());
h.setEnabled(true);

var G__29775 = h;
var G__29776 = goog.History.EventType.NAVIGATE;
var G__29777 = ((function (G__29775,G__29776,h){
return (function (evt){
var ch = cljs.core.cst$kw$nav.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$channels.cljs$core$IFn$_invoke$arity$1(app));
var token = evt.token;
h.setToken(token);

var c__11772__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11772__auto__,ch,token,G__29775,G__29776,h){
return (function (){
var f__11773__auto__ = (function (){var switch__11695__auto__ = ((function (c__11772__auto__,ch,token,G__29775,G__29776,h){
return (function (state_29781){
var state_val_29782 = (state_29781[(1)]);
if((state_val_29782 === (1))){
var state_29781__$1 = state_29781;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29781__$1,(2),ch,token);
} else {
if((state_val_29782 === (2))){
var inst_29779 = (state_29781[(2)]);
var state_29781__$1 = state_29781;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29781__$1,inst_29779);
} else {
return null;
}
}
});})(c__11772__auto__,ch,token,G__29775,G__29776,h))
;
return ((function (switch__11695__auto__,c__11772__auto__,ch,token,G__29775,G__29776,h){
return (function() {
var ezq$core$init_history_$_state_machine__11696__auto__ = null;
var ezq$core$init_history_$_state_machine__11696__auto____0 = (function (){
var statearr_29786 = [null,null,null,null,null,null,null];
(statearr_29786[(0)] = ezq$core$init_history_$_state_machine__11696__auto__);

(statearr_29786[(1)] = (1));

return statearr_29786;
});
var ezq$core$init_history_$_state_machine__11696__auto____1 = (function (state_29781){
while(true){
var ret_value__11697__auto__ = (function (){try{while(true){
var result__11698__auto__ = switch__11695__auto__(state_29781);
if(cljs.core.keyword_identical_QMARK_(result__11698__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11698__auto__;
}
break;
}
}catch (e29787){if((e29787 instanceof Object)){
var ex__11699__auto__ = e29787;
var statearr_29788_29790 = state_29781;
(statearr_29788_29790[(5)] = ex__11699__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29781);

return cljs.core.cst$kw$recur;
} else {
throw e29787;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11697__auto__,cljs.core.cst$kw$recur)){
var G__29791 = state_29781;
state_29781 = G__29791;
continue;
} else {
return ret_value__11697__auto__;
}
break;
}
});
ezq$core$init_history_$_state_machine__11696__auto__ = function(state_29781){
switch(arguments.length){
case 0:
return ezq$core$init_history_$_state_machine__11696__auto____0.call(this);
case 1:
return ezq$core$init_history_$_state_machine__11696__auto____1.call(this,state_29781);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$core$init_history_$_state_machine__11696__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$core$init_history_$_state_machine__11696__auto____0;
ezq$core$init_history_$_state_machine__11696__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$core$init_history_$_state_machine__11696__auto____1;
return ezq$core$init_history_$_state_machine__11696__auto__;
})()
;})(switch__11695__auto__,c__11772__auto__,ch,token,G__29775,G__29776,h))
})();
var state__11774__auto__ = (function (){var statearr_29789 = (f__11773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11773__auto__.cljs$core$IFn$_invoke$arity$0() : f__11773__auto__.call(null));
(statearr_29789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11772__auto__);

return statearr_29789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11774__auto__);
});})(c__11772__auto__,ch,token,G__29775,G__29776,h))
);

return c__11772__auto__;
});})(G__29775,G__29776,h))
;
return goog.events.listen(G__29775,G__29776,G__29777);
});
/**
 * For every entry in a map of channel identifiers to consumers,
 *   initiate a channel listener which will update the application state
 *   using the appropriate function whenever a value is recieved, as
 *   well as triggering a render.
 */
ezq.core.init_updates = (function ezq$core$init_updates(app){
var seq__29870 = cljs.core.seq(cljs.core.cst$kw$consumers.cljs$core$IFn$_invoke$arity$1(app));
var chunk__29871 = null;
var count__29872 = (0);
var i__29873 = (0);
while(true){
if((i__29873 < count__29872)){
var vec__29874 = chunk__29871.cljs$core$IIndexed$_nth$arity$2(null,i__29873);
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29874,(0),null);
var update_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29874,(1),null);
var c__11772__auto___29948 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__29870,chunk__29871,count__29872,i__29873,c__11772__auto___29948,vec__29874,ch,update_fn){
return (function (){
var f__11773__auto__ = (function (){var switch__11695__auto__ = ((function (seq__29870,chunk__29871,count__29872,i__29873,c__11772__auto___29948,vec__29874,ch,update_fn){
return (function (state_29895){
var state_val_29896 = (state_29895[(1)]);
if((state_val_29896 === (1))){
var state_29895__$1 = state_29895;
var statearr_29897_29949 = state_29895__$1;
(statearr_29897_29949[(2)] = null);

(statearr_29897_29949[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29896 === (2))){
var state_29895__$1 = state_29895;
var statearr_29898_29950 = state_29895__$1;
(statearr_29898_29950[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_29896 === (3))){
var inst_29893 = (state_29895[(2)]);
var state_29895__$1 = state_29895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29895__$1,inst_29893);
} else {
if((state_val_29896 === (4))){
var inst_29879 = cljs.core.cst$kw$channels.cljs$core$IFn$_invoke$arity$1(app);
var inst_29880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29879,ch);
var state_29895__$1 = state_29895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29895__$1,(7),inst_29880);
} else {
if((state_val_29896 === (5))){
var state_29895__$1 = state_29895;
var statearr_29900_29951 = state_29895__$1;
(statearr_29900_29951[(2)] = null);

(statearr_29900_29951[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29896 === (6))){
var inst_29891 = (state_29895[(2)]);
var state_29895__$1 = state_29895;
var statearr_29901_29952 = state_29895__$1;
(statearr_29901_29952[(2)] = inst_29891);

(statearr_29901_29952[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29896 === (7))){
var inst_29882 = (state_29895[(2)]);
var inst_29883 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("on channel <"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">, recieved value <"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29882),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">")].join('');
var inst_29884 = console.log(inst_29883);
var inst_29885 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(app);
var inst_29886 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29885,update_fn,inst_29882);
var inst_29887 = ezq.render.request_render(app);
var state_29895__$1 = (function (){var statearr_29902 = state_29895;
(statearr_29902[(7)] = inst_29887);

(statearr_29902[(8)] = inst_29884);

(statearr_29902[(9)] = inst_29886);

return statearr_29902;
})();
var statearr_29903_29953 = state_29895__$1;
(statearr_29903_29953[(2)] = null);

(statearr_29903_29953[(1)] = (2));


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
});})(seq__29870,chunk__29871,count__29872,i__29873,c__11772__auto___29948,vec__29874,ch,update_fn))
;
return ((function (seq__29870,chunk__29871,count__29872,i__29873,switch__11695__auto__,c__11772__auto___29948,vec__29874,ch,update_fn){
return (function() {
var ezq$core$init_updates_$_state_machine__11696__auto__ = null;
var ezq$core$init_updates_$_state_machine__11696__auto____0 = (function (){
var statearr_29907 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29907[(0)] = ezq$core$init_updates_$_state_machine__11696__auto__);

(statearr_29907[(1)] = (1));

return statearr_29907;
});
var ezq$core$init_updates_$_state_machine__11696__auto____1 = (function (state_29895){
while(true){
var ret_value__11697__auto__ = (function (){try{while(true){
var result__11698__auto__ = switch__11695__auto__(state_29895);
if(cljs.core.keyword_identical_QMARK_(result__11698__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11698__auto__;
}
break;
}
}catch (e29908){if((e29908 instanceof Object)){
var ex__11699__auto__ = e29908;
var statearr_29909_29954 = state_29895;
(statearr_29909_29954[(5)] = ex__11699__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29895);

return cljs.core.cst$kw$recur;
} else {
throw e29908;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11697__auto__,cljs.core.cst$kw$recur)){
var G__29955 = state_29895;
state_29895 = G__29955;
continue;
} else {
return ret_value__11697__auto__;
}
break;
}
});
ezq$core$init_updates_$_state_machine__11696__auto__ = function(state_29895){
switch(arguments.length){
case 0:
return ezq$core$init_updates_$_state_machine__11696__auto____0.call(this);
case 1:
return ezq$core$init_updates_$_state_machine__11696__auto____1.call(this,state_29895);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$core$init_updates_$_state_machine__11696__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$core$init_updates_$_state_machine__11696__auto____0;
ezq$core$init_updates_$_state_machine__11696__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$core$init_updates_$_state_machine__11696__auto____1;
return ezq$core$init_updates_$_state_machine__11696__auto__;
})()
;})(seq__29870,chunk__29871,count__29872,i__29873,switch__11695__auto__,c__11772__auto___29948,vec__29874,ch,update_fn))
})();
var state__11774__auto__ = (function (){var statearr_29910 = (f__11773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11773__auto__.cljs$core$IFn$_invoke$arity$0() : f__11773__auto__.call(null));
(statearr_29910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11772__auto___29948);

return statearr_29910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11774__auto__);
});})(seq__29870,chunk__29871,count__29872,i__29873,c__11772__auto___29948,vec__29874,ch,update_fn))
);


var G__29956 = seq__29870;
var G__29957 = chunk__29871;
var G__29958 = count__29872;
var G__29959 = (i__29873 + (1));
seq__29870 = G__29956;
chunk__29871 = G__29957;
count__29872 = G__29958;
i__29873 = G__29959;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__29870);
if(temp__4657__auto__){
var seq__29870__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29870__$1)){
var c__7856__auto__ = cljs.core.chunk_first(seq__29870__$1);
var G__29960 = cljs.core.chunk_rest(seq__29870__$1);
var G__29961 = c__7856__auto__;
var G__29962 = cljs.core.count(c__7856__auto__);
var G__29963 = (0);
seq__29870 = G__29960;
chunk__29871 = G__29961;
count__29872 = G__29962;
i__29873 = G__29963;
continue;
} else {
var vec__29911 = cljs.core.first(seq__29870__$1);
var ch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29911,(0),null);
var update_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29911,(1),null);
var c__11772__auto___29964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__29870,chunk__29871,count__29872,i__29873,c__11772__auto___29964,vec__29911,ch,update_fn,seq__29870__$1,temp__4657__auto__){
return (function (){
var f__11773__auto__ = (function (){var switch__11695__auto__ = ((function (seq__29870,chunk__29871,count__29872,i__29873,c__11772__auto___29964,vec__29911,ch,update_fn,seq__29870__$1,temp__4657__auto__){
return (function (state_29932){
var state_val_29933 = (state_29932[(1)]);
if((state_val_29933 === (1))){
var state_29932__$1 = state_29932;
var statearr_29934_29965 = state_29932__$1;
(statearr_29934_29965[(2)] = null);

(statearr_29934_29965[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29933 === (2))){
var state_29932__$1 = state_29932;
var statearr_29935_29966 = state_29932__$1;
(statearr_29935_29966[(1)] = (4));



return cljs.core.cst$kw$recur;
} else {
if((state_val_29933 === (3))){
var inst_29930 = (state_29932[(2)]);
var state_29932__$1 = state_29932;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29932__$1,inst_29930);
} else {
if((state_val_29933 === (4))){
var inst_29916 = cljs.core.cst$kw$channels.cljs$core$IFn$_invoke$arity$1(app);
var inst_29917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_29916,ch);
var state_29932__$1 = state_29932;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29932__$1,(7),inst_29917);
} else {
if((state_val_29933 === (5))){
var state_29932__$1 = state_29932;
var statearr_29937_29967 = state_29932__$1;
(statearr_29937_29967[(2)] = null);

(statearr_29937_29967[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29933 === (6))){
var inst_29928 = (state_29932[(2)]);
var state_29932__$1 = state_29932;
var statearr_29938_29968 = state_29932__$1;
(statearr_29938_29968[(2)] = inst_29928);

(statearr_29938_29968[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_29933 === (7))){
var inst_29919 = (state_29932[(2)]);
var inst_29920 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("on channel <"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ch),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">, recieved value <"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29919),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">")].join('');
var inst_29921 = console.log(inst_29920);
var inst_29922 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(app);
var inst_29923 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(inst_29922,update_fn,inst_29919);
var inst_29924 = ezq.render.request_render(app);
var state_29932__$1 = (function (){var statearr_29939 = state_29932;
(statearr_29939[(7)] = inst_29923);

(statearr_29939[(8)] = inst_29924);

(statearr_29939[(9)] = inst_29921);

return statearr_29939;
})();
var statearr_29940_29969 = state_29932__$1;
(statearr_29940_29969[(2)] = null);

(statearr_29940_29969[(1)] = (2));


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
});})(seq__29870,chunk__29871,count__29872,i__29873,c__11772__auto___29964,vec__29911,ch,update_fn,seq__29870__$1,temp__4657__auto__))
;
return ((function (seq__29870,chunk__29871,count__29872,i__29873,switch__11695__auto__,c__11772__auto___29964,vec__29911,ch,update_fn,seq__29870__$1,temp__4657__auto__){
return (function() {
var ezq$core$init_updates_$_state_machine__11696__auto__ = null;
var ezq$core$init_updates_$_state_machine__11696__auto____0 = (function (){
var statearr_29944 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29944[(0)] = ezq$core$init_updates_$_state_machine__11696__auto__);

(statearr_29944[(1)] = (1));

return statearr_29944;
});
var ezq$core$init_updates_$_state_machine__11696__auto____1 = (function (state_29932){
while(true){
var ret_value__11697__auto__ = (function (){try{while(true){
var result__11698__auto__ = switch__11695__auto__(state_29932);
if(cljs.core.keyword_identical_QMARK_(result__11698__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11698__auto__;
}
break;
}
}catch (e29945){if((e29945 instanceof Object)){
var ex__11699__auto__ = e29945;
var statearr_29946_29970 = state_29932;
(statearr_29946_29970[(5)] = ex__11699__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29932);

return cljs.core.cst$kw$recur;
} else {
throw e29945;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11697__auto__,cljs.core.cst$kw$recur)){
var G__29971 = state_29932;
state_29932 = G__29971;
continue;
} else {
return ret_value__11697__auto__;
}
break;
}
});
ezq$core$init_updates_$_state_machine__11696__auto__ = function(state_29932){
switch(arguments.length){
case 0:
return ezq$core$init_updates_$_state_machine__11696__auto____0.call(this);
case 1:
return ezq$core$init_updates_$_state_machine__11696__auto____1.call(this,state_29932);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$core$init_updates_$_state_machine__11696__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$core$init_updates_$_state_machine__11696__auto____0;
ezq$core$init_updates_$_state_machine__11696__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$core$init_updates_$_state_machine__11696__auto____1;
return ezq$core$init_updates_$_state_machine__11696__auto__;
})()
;})(seq__29870,chunk__29871,count__29872,i__29873,switch__11695__auto__,c__11772__auto___29964,vec__29911,ch,update_fn,seq__29870__$1,temp__4657__auto__))
})();
var state__11774__auto__ = (function (){var statearr_29947 = (f__11773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11773__auto__.cljs$core$IFn$_invoke$arity$0() : f__11773__auto__.call(null));
(statearr_29947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11772__auto___29964);

return statearr_29947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11774__auto__);
});})(seq__29870,chunk__29871,count__29872,i__29873,c__11772__auto___29964,vec__29911,ch,update_fn,seq__29870__$1,temp__4657__auto__))
);


var G__29972 = cljs.core.next(seq__29870__$1);
var G__29973 = null;
var G__29974 = (0);
var G__29975 = (0);
seq__29870 = G__29972;
chunk__29871 = G__29973;
count__29872 = G__29974;
i__29873 = G__29975;
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
var consumers = ezq.data.handlers();
var fresh = ezq.data.fresh();
var loaded = (function (){var stored = ezq.store.load();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.keys(fresh)),cljs.core.count(cljs.core.keys(stored)))){
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
var consumer_keys = cljs.core.keys(consumers);
var res = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$channels,cljs.core.zipmap(consumer_keys,(function (){var iter__7825__auto__ = ((function (consumers,fresh,loaded,world,consumer_keys){
return (function ezq$core$load_app_$_iter__29982(s__29983){
return (new cljs.core.LazySeq(null,((function (consumers,fresh,loaded,world,consumer_keys){
return (function (){
var s__29983__$1 = s__29983;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__29983__$1);
if(temp__4657__auto__){
var s__29983__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29983__$2)){
var c__7823__auto__ = cljs.core.chunk_first(s__29983__$2);
var size__7824__auto__ = cljs.core.count(c__7823__auto__);
var b__29985 = cljs.core.chunk_buffer(size__7824__auto__);
if((function (){var i__29984 = (0);
while(true){
if((i__29984 < size__7824__auto__)){
var _ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7823__auto__,i__29984);
cljs.core.chunk_append(b__29985,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());

var G__29988 = (i__29984 + (1));
i__29984 = G__29988;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29985),ezq$core$load_app_$_iter__29982(cljs.core.chunk_rest(s__29983__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29985),null);
}
} else {
var _ = cljs.core.first(s__29983__$2);
return cljs.core.cons(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0(),ezq$core$load_app_$_iter__29982(cljs.core.rest(s__29983__$2)));
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
return iter__7825__auto__(consumer_keys);
})()),cljs.core.cst$kw$state,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(world) : cljs.core.atom.call(null,world)),cljs.core.cst$kw$consumers,consumers], null);
return res;
});
if(typeof ezq.core.app !== 'undefined'){
} else {
ezq.core.app = ezq.core.load_app();
}
if(typeof ezq.core.world !== 'undefined'){
} else {
ezq.core.world = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(ezq.core.app);
}
/**
 * Application entry point
 */
ezq.core.main = (function ezq$core$main(){
ezq.store.init_persistence(ezq.core.app);

ezq.core.init_history(ezq.core.app);

ezq.core.init_updates(ezq.core.app);

var G__30005_30021 = (function (){
if(cljs.core.truth_(cljs.core.cst$kw$tick.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ezq.core.world) : cljs.core.deref.call(null,ezq.core.world))))){
var c__11772__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__11772__auto__){
return (function (){
var f__11773__auto__ = (function (){var switch__11695__auto__ = ((function (c__11772__auto__){
return (function (state_30012){
var state_val_30013 = (state_30012[(1)]);
if((state_val_30013 === (1))){
var inst_30007 = cljs.core.cst$kw$channels.cljs$core$IFn$_invoke$arity$1(ezq.core.app);
var inst_30008 = cljs.core.cst$kw$ticker.cljs$core$IFn$_invoke$arity$1(inst_30007);
var state_30012__$1 = state_30012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30012__$1,(2),inst_30008,(1));
} else {
if((state_val_30013 === (2))){
var inst_30010 = (state_30012[(2)]);
var state_30012__$1 = state_30012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30012__$1,inst_30010);
} else {
return null;
}
}
});})(c__11772__auto__))
;
return ((function (switch__11695__auto__,c__11772__auto__){
return (function() {
var ezq$core$main_$_state_machine__11696__auto__ = null;
var ezq$core$main_$_state_machine__11696__auto____0 = (function (){
var statearr_30017 = [null,null,null,null,null,null,null];
(statearr_30017[(0)] = ezq$core$main_$_state_machine__11696__auto__);

(statearr_30017[(1)] = (1));

return statearr_30017;
});
var ezq$core$main_$_state_machine__11696__auto____1 = (function (state_30012){
while(true){
var ret_value__11697__auto__ = (function (){try{while(true){
var result__11698__auto__ = switch__11695__auto__(state_30012);
if(cljs.core.keyword_identical_QMARK_(result__11698__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__11698__auto__;
}
break;
}
}catch (e30018){if((e30018 instanceof Object)){
var ex__11699__auto__ = e30018;
var statearr_30019_30023 = state_30012;
(statearr_30019_30023[(5)] = ex__11699__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30012);

return cljs.core.cst$kw$recur;
} else {
throw e30018;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__11697__auto__,cljs.core.cst$kw$recur)){
var G__30024 = state_30012;
state_30012 = G__30024;
continue;
} else {
return ret_value__11697__auto__;
}
break;
}
});
ezq$core$main_$_state_machine__11696__auto__ = function(state_30012){
switch(arguments.length){
case 0:
return ezq$core$main_$_state_machine__11696__auto____0.call(this);
case 1:
return ezq$core$main_$_state_machine__11696__auto____1.call(this,state_30012);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$core$main_$_state_machine__11696__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$core$main_$_state_machine__11696__auto____0;
ezq$core$main_$_state_machine__11696__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$core$main_$_state_machine__11696__auto____1;
return ezq$core$main_$_state_machine__11696__auto__;
})()
;})(switch__11695__auto__,c__11772__auto__))
})();
var state__11774__auto__ = (function (){var statearr_30020 = (f__11773__auto__.cljs$core$IFn$_invoke$arity$0 ? f__11773__auto__.cljs$core$IFn$_invoke$arity$0() : f__11773__auto__.call(null));
(statearr_30020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__11772__auto__);

return statearr_30020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__11774__auto__);
});})(c__11772__auto__))
);

return c__11772__auto__;
} else {
return null;
}
});
var G__30006_30022 = (1000);
setInterval(G__30005_30021,G__30006_30022);

return ezq.render.request_render(ezq.core.app);
});
goog.exportSymbol('ezq.core.main', ezq.core.main);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["running!"], 0));
ezq.core.main();
