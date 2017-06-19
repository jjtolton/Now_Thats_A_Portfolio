// Compiled by ClojureScript 1.9.518 {}
goog.provide('dat.reactor');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('taoensso.timbre');
goog.require('dat.spec.protocols');
goog.require('dat.reactor.dispatcher');
goog.require('datascript.core');
goog.require('com.stuartsierra.component');
if(typeof dat.reactor.handle_event_BANG_ !== 'undefined'){
} else {
dat.reactor.handle_event_BANG_ = (function (){var method_table__29780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29783__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29784__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dat.reactor","handle-event!"),((function (method_table__29780__auto__,prefer_table__29781__auto__,method_cache__29782__auto__,cached_hierarchy__29783__auto__,hierarchy__29784__auto__){
return (function (_,___$1,p__50039){
var vec__50040 = p__50039;
var event_id = cljs.core.nth.call(null,vec__50040,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__50040,(1),null);
return event_id;
});})(method_table__29780__auto__,prefer_table__29781__auto__,method_cache__29782__auto__,cached_hierarchy__29783__auto__,hierarchy__29784__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29784__auto__,method_table__29780__auto__,prefer_table__29781__auto__,method_cache__29782__auto__,cached_hierarchy__29783__auto__));
})();
}
dat.reactor.dispatch_BANG_ = (function dat$reactor$dispatch_BANG_(var_args){
var args50043 = [];
var len__29970__auto___50046 = arguments.length;
var i__29971__auto___50047 = (0);
while(true){
if((i__29971__auto___50047 < len__29970__auto___50046)){
args50043.push((arguments[i__29971__auto___50047]));

var G__50048 = (i__29971__auto___50047 + (1));
i__29971__auto___50047 = G__50048;
continue;
} else {
}
break;
}

var G__50045 = args50043.length;
switch (G__50045) {
case 3:
return dat.reactor.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dat.reactor.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50043.length)].join('')));

}
});

dat.reactor.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reactor,message,level){
return dat.reactor.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(reactor),message,level);
});

dat.reactor.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reactor,message){
return dat.reactor.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(reactor),message);
});

dat.reactor.dispatch_BANG_.cljs$lang$maxFixedArity = 3;

dat.reactor.dispatch_error_BANG_ = (function dat$reactor$dispatch_error_BANG_(reactor,message){
return dat.reactor.dispatcher.dispatch_error_BANG_.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(reactor),message);
});
/**
 * Within a handle-event method implementation, you can call this function to resolve a single event to
 *   some sequence of more atomic (presumably; thought you could get recursive...) events. This is a little bit
 *   experimental at the moment, as there might be some gotchas with error handling flow. But for right now, you
 *   have the option of specifying :datview.resolver/catch?, which lets you decide whether events should continue
 *   getting processed if one of the events errors (if set to truthy, skips over the errored event). Note that
 *   presently, errors do not bubble up. The last successful state of the db will be returned. Errors will be passed
 *   through to the :datview/error.
 */
dat.reactor.resolve_to = (function dat$reactor$resolve_to(var_args){
var args50050 = [];
var len__29970__auto___50057 = arguments.length;
var i__29971__auto___50058 = (0);
while(true){
if((i__29971__auto___50058 < len__29970__auto___50057)){
args50050.push((arguments[i__29971__auto___50058]));

var G__50059 = (i__29971__auto___50058 + (1));
i__29971__auto___50058 = G__50059;
continue;
} else {
}
break;
}

var G__50052 = args50050.length;
switch (G__50052) {
case 4:
return dat.reactor.resolve_to.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return dat.reactor.resolve_to.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50050.length)].join('')));

}
});

dat.reactor.resolve_to.cljs$core$IFn$_invoke$arity$4 = (function (app,db,events,p__50053){
var map__50054 = p__50053;
var map__50054__$1 = ((((!((map__50054 == null)))?((((map__50054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50054):map__50054);
var options = map__50054__$1;
var catch_QMARK_ = cljs.core.get.call(null,map__50054__$1,new cljs.core.Keyword("datview.resolver","catch?","datview.resolver/catch?",2025040664));
return cljs.core.reduce.call(null,((function (map__50054,map__50054__$1,options,catch_QMARK_){
return (function (db_SINGLEQUOTE_,event){
try{return dat.reactor.handle_event_BANG_.call(null,app,db_SINGLEQUOTE_,event);
}catch (e50056){var e = e50056;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init6286146101766555450.clj",60,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,map__50054,map__50054__$1,options,catch_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Resolver exception:"], null);
});})(e,map__50054,map__50054__$1,options,catch_QMARK_))
,null)),null,1874533335);

console.log(e.stack);

if(cljs.core.truth_(catch_QMARK_)){
return db_SINGLEQUOTE_;
} else {
return cljs.core.reduced.call(null,cljs.core.with_meta.call(null,db_SINGLEQUOTE_,cljs.core.merge.call(null,cljs.core.meta.call(null,db_SINGLEQUOTE_),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("datview.resolver","error","datview.resolver/error",1263884080),e], null))));
}
}});})(map__50054,map__50054__$1,options,catch_QMARK_))
,db,cljs.core.remove.call(null,cljs.core.nil_QMARK_,events));
});

dat.reactor.resolve_to.cljs$core$IFn$_invoke$arity$3 = (function (app,db,events){
return dat.reactor.resolve_to.call(null,app,db,events,cljs.core.PersistentArrayMap.EMPTY);
});

dat.reactor.resolve_to.cljs$lang$maxFixedArity = 4;

dat.reactor.preserve_meta = (function dat$reactor$preserve_meta(handler_fn){
return (function (app,db,event){
var new_db = handler_fn.call(null,app,db,event);
if(cljs.core.truth_(cljs.core.meta.call(null,new_db))){
return new_db;
} else {
return cljs.core.with_meta.call(null,new_db,cljs.core.meta.call(null,db));
}
});
});
/**
 * Register an event handler. Optionally specify middleware as second arg. Can be a vector of such fns, as well.
 *   Middleware is typical in order; First in the sequence ends up being responsible for creating the handler function
 *   that actually returns the final value. Except... We have some default handlers (see implementation, for now, till
 *   we spec this out).
 */
dat.reactor.register_handler = (function dat$reactor$register_handler(var_args){
var args50061 = [];
var len__29970__auto___50064 = arguments.length;
var i__29971__auto___50065 = (0);
while(true){
if((i__29971__auto___50065 < len__29970__auto___50064)){
args50061.push((arguments[i__29971__auto___50065]));

var G__50066 = (i__29971__auto___50065 + (1));
i__29971__auto___50065 = G__50066;
continue;
} else {
}
break;
}

var G__50063 = args50061.length;
switch (G__50063) {
case 2:
return dat.reactor.register_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.reactor.register_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50061.length)].join('')));

}
});

dat.reactor.register_handler.cljs$core$IFn$_invoke$arity$2 = (function (event_id,handler_fn){
return dat.reactor.register_handler.call(null,event_id,cljs.core.PersistentVector.EMPTY,handler_fn);
});

dat.reactor.register_handler.cljs$core$IFn$_invoke$arity$3 = (function (event_id,middleware_fn,handler_fn){
var post_middleware = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dat.reactor.preserve_meta], null);
var pre_middleware = cljs.core.PersistentVector.EMPTY;
var middleware_fns = cljs.core.vec.call(null,cljs.core.concat.call(null,post_middleware,((cljs.core.sequential_QMARK_.call(null,middleware_fn))?middleware_fn:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware_fn], null)),pre_middleware));
var middleware_fn__$1 = cljs.core.apply.call(null,cljs.core.comp,middleware_fns);
var handler_fn__$1 = middleware_fn__$1.call(null,handler_fn);
return cljs.core._add_method.call(null,dat.reactor.handle_event_BANG_,event_id,((function (post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,handler_fn__$1){
return (function (app,db,event){
return handler_fn__$1.call(null,app,db,event);
});})(post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,handler_fn__$1))
);
});

dat.reactor.register_handler.cljs$lang$maxFixedArity = 3;

if(typeof dat.reactor.execute_effect_BANG_ !== 'undefined'){
} else {
dat.reactor.execute_effect_BANG_ = (function (){var method_table__29780__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29781__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29782__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29783__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29784__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"dat.reactor","execute-effect!"),((function (method_table__29780__auto__,prefer_table__29781__auto__,method_cache__29782__auto__,cached_hierarchy__29783__auto__,hierarchy__29784__auto__){
return (function (_,___$1,p__50068){
var vec__50069 = p__50068;
var effect_id = cljs.core.nth.call(null,vec__50069,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__50069,(1),null);
return effect_id;
});})(method_table__29780__auto__,prefer_table__29781__auto__,method_cache__29782__auto__,cached_hierarchy__29783__auto__,hierarchy__29784__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29784__auto__,method_table__29780__auto__,prefer_table__29781__auto__,method_cache__29782__auto__,cached_hierarchy__29783__auto__));
})();
}
dat.reactor.concatv = cljs.core.comp.call(null,cljs.core.vec,cljs.core.concat);
/**
 * Registers effects on the database value. This is the mode of communication for effect message which need to get processed.
 */
dat.reactor.with_effects = (function dat$reactor$with_effects(effects,db){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor","/tmp/form-init6286146101766555450.clj",127,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Adding effects for effect-ids:",cljs.core.map.call(null,cljs.core.first,effects)], null);
}),null)),null,-330833983);

return cljs.core.with_meta.call(null,db,cljs.core.update.call(null,cljs.core.meta.call(null,db),new cljs.core.Keyword("dat.reactor","effects","dat.reactor/effects",21173161),dat.reactor.concatv,cljs.core.map.call(null,(function (effect){
return cljs.core.with_meta.call(null,effect,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null));
}),effects)));
});
/**
 * Registers effect on the database value. This is the mode of communication for effect message which need to get processed.
 */
dat.reactor.with_effect = (function dat$reactor$with_effect(effect,db){
return dat.reactor.with_effects.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [effect], null),db);
});
/**
 * Register an event handler. Optionally specify middleware as second arg. Can be a vector of such fns, as well.
 *   Middleware is typical in order; First in the sequence ends up being responsible for creating the handler function
 *   we spec this out). Also, calling this function registers an _event_ handler by the same effect-id; This should
 *   eventually act as a default, but not override any event handler already set up with the same id, but for now avoid
 *   collisions between event and effect ids.
 */
dat.reactor.register_effect = (function dat$reactor$register_effect(var_args){
var args50072 = [];
var len__29970__auto___50076 = arguments.length;
var i__29971__auto___50077 = (0);
while(true){
if((i__29971__auto___50077 < len__29970__auto___50076)){
args50072.push((arguments[i__29971__auto___50077]));

var G__50078 = (i__29971__auto___50077 + (1));
i__29971__auto___50077 = G__50078;
continue;
} else {
}
break;
}

var G__50074 = args50072.length;
switch (G__50074) {
case 2:
return dat.reactor.register_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dat.reactor.register_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50072.length)].join('')));

}
});

dat.reactor.register_effect.cljs$core$IFn$_invoke$arity$2 = (function (effect_id,effect_fn){
return dat.reactor.register_effect.call(null,effect_id,cljs.core.PersistentVector.EMPTY,effect_fn);
});

dat.reactor.register_effect.cljs$core$IFn$_invoke$arity$3 = (function (effect_id,middleware_fn,effect_fn){
var post_middleware = cljs.core.PersistentVector.EMPTY;
var pre_middleware = cljs.core.PersistentVector.EMPTY;
var middleware_fns = cljs.core.vec.call(null,cljs.core.concat.call(null,post_middleware,((cljs.core.sequential_QMARK_.call(null,middleware_fn))?middleware_fn:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [middleware_fn], null)),pre_middleware));
var middleware_fn__$1 = cljs.core.apply.call(null,cljs.core.comp,middleware_fns);
var effect_fn__$1 = middleware_fn__$1.call(null,effect_fn);
cljs.core._add_method.call(null,dat.reactor.execute_effect_BANG_,effect_id,((function (post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,effect_fn__$1){
return (function (app,db,effect){
try{return effect_fn__$1.call(null,app,db,effect);
}catch (e50075){var e = e50075;
return taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init6286146101766555450.clj",171,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,effect_fn__$1){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error executing effect:",effect,e], null);
});})(e,post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,effect_fn__$1))
,null)),null,1166986126);
}});})(post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,effect_fn__$1))
);

return cljs.core._add_method.call(null,dat.reactor.handle_event_BANG_,effect_id,((function (post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,effect_fn__$1){
return (function (app,db,effect){
return dat.reactor.with_effect.call(null,effect,db);
});})(post_middleware,pre_middleware,middleware_fns,middleware_fn__$1,effect_fn__$1))
);
});

dat.reactor.register_effect.cljs$lang$maxFixedArity = 3;

dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.reactor","resolve-tx-report","dat.reactor/resolve-tx-report",-1394533746),(function (_,db,p__50080){
var vec__50081 = p__50080;
var ___$1 = cljs.core.nth.call(null,vec__50081,(0),null);
var tx_report = cljs.core.nth.call(null,vec__50081,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor","/tmp/form-init6286146101766555450.clj",187,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__50081,___$1,tx_report){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handler :dat.reactor/resolve-tx-report called."], null);
});})(vec__50081,___$1,tx_report))
,null)),null,-237699398);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report);
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.reactor","local-tx","dat.reactor/local-tx",-702931104),(function (app,db,p__50084){
var vec__50085 = p__50084;
var _ = cljs.core.nth.call(null,vec__50085,(0),null);
var tx_forms = cljs.core.nth.call(null,vec__50085,(1),null);
var tx_meta = cljs.core.nth.call(null,vec__50085,(2),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor","/tmp/form-init6286146101766555450.clj",193,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__50085,_,tx_forms,tx_meta){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handler :dat.reactor/local-tx called."], null);
});})(vec__50085,_,tx_forms,tx_meta))
,null)),null,992972345);

var tx_report = datascript.core.with$.call(null,db,tx_forms,tx_meta);
return dat.reactor.with_effect.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","execute-tx-report-handlers!","dat.reactor/execute-tx-report-handlers!",-1580532868),tx_report], null),dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.reactor","resolve-tx-report","dat.reactor/resolve-tx-report",-1394533746),tx_report], null)], null)));
}));
dat.reactor.register_effect.call(null,new cljs.core.Keyword("dat.reactor","execute-tx-report-handlers!","dat.reactor/execute-tx-report-handlers!",-1580532868),(function (app,db,p__50088){
var vec__50089 = p__50088;
var _ = cljs.core.nth.call(null,vec__50089,(0),null);
var tx_report = cljs.core.nth.call(null,vec__50089,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor","/tmp/form-init6286146101766555450.clj",205,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__50089,_,tx_report){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Effect handler :dat.reactor/fire-tx-report-handlers! called."], null);
});})(vec__50089,_,tx_report))
,null)),null,-1363246630);

var seq__50092 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(app)))));
var chunk__50093 = null;
var count__50094 = (0);
var i__50095 = (0);
while(true){
if((i__50095 < count__50094)){
var vec__50096 = cljs.core._nth.call(null,chunk__50093,i__50095);
var ___$1 = cljs.core.nth.call(null,vec__50096,(0),null);
var callback = cljs.core.nth.call(null,vec__50096,(1),null);
callback.call(null,tx_report);

var G__50102 = seq__50092;
var G__50103 = chunk__50093;
var G__50104 = count__50094;
var G__50105 = (i__50095 + (1));
seq__50092 = G__50102;
chunk__50093 = G__50103;
count__50094 = G__50104;
i__50095 = G__50105;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__50092);
if(temp__6738__auto__){
var seq__50092__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50092__$1)){
var c__29660__auto__ = cljs.core.chunk_first.call(null,seq__50092__$1);
var G__50106 = cljs.core.chunk_rest.call(null,seq__50092__$1);
var G__50107 = c__29660__auto__;
var G__50108 = cljs.core.count.call(null,c__29660__auto__);
var G__50109 = (0);
seq__50092 = G__50106;
chunk__50093 = G__50107;
count__50094 = G__50108;
i__50095 = G__50109;
continue;
} else {
var vec__50099 = cljs.core.first.call(null,seq__50092__$1);
var ___$1 = cljs.core.nth.call(null,vec__50099,(0),null);
var callback = cljs.core.nth.call(null,vec__50099,(1),null);
callback.call(null,tx_report);

var G__50110 = cljs.core.next.call(null,seq__50092__$1);
var G__50111 = null;
var G__50112 = (0);
var G__50113 = (0);
seq__50092 = G__50110;
chunk__50093 = G__50111;
count__50094 = G__50112;
i__50095 = G__50113;
continue;
}
} else {
return null;
}
}
break;
}
}));
dat.reactor.register_effect.call(null,new cljs.core.Keyword("dat.reactor","dispatch!","dat.reactor/dispatch!",2015016299),(function (app,db,p__50114){
var vec__50115 = p__50114;
var _ = cljs.core.nth.call(null,vec__50115,(0),null);
var dispatch_message = cljs.core.nth.call(null,vec__50115,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.reactor","/tmp/form-init6286146101766555450.clj",213,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__50115,_,dispatch_message){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Calling dispatch after effect for dispatch id:",cljs.core.first.call(null,dispatch_message)], null);
});})(vec__50115,_,dispatch_message))
,null)),null,-1865613977);

return dat.reactor.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(app),dispatch_message);
}));
dat.reactor.register_effect.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (app,db,event){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init6286146101766555450.clj",224,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No effect definition for event:",event,"You should probably go add one in your events ns"], null);
}),null)),null,-2031399858);

return db;
}));
dat.reactor.register_handler.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (app,db,event){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init6286146101766555450.clj",229,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["No handler definition for event:",event,"You should probably go add one in your events ns"], null);
}),null)),null,1092866413);

return db;
}));
/**
 * Starts a go loop that processes events and effects using the handle-event! and
 *   execute-effect! fns. Effects are executed in sequence after the transaction commits.
 *   If a handler fails, the effects will not fire (will eventually support control over
 *   this behavior).
 */
dat.reactor.go_react_BANG_ = (function dat$reactor$go_react_BANG_(reactor,app){
var event_chan = dat.spec.protocols.dispatcher_event_chan.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(reactor));
var conn = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(reactor);
var kill_chan = cljs.core.async.chan.call(null);
var c__40635__auto___50450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___50450,event_chan,conn,kill_chan){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___50450,event_chan,conn,kill_chan){
return (function (state_50387){
var state_val_50388 = (state_50387[(1)]);
if((state_val_50388 === (7))){
var inst_50294 = (state_50387[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_50387,(6),new cljs.core.Keyword(null,"default","default",-1987822328),null,(5));
var inst_50305 = cljs.core._EQ_.call(null,inst_50294,kill_chan);
var state_50387__$1 = state_50387;
if(inst_50305){
var statearr_50389_50451 = state_50387__$1;
(statearr_50389_50451[(1)] = (8));

} else {
var statearr_50390_50452 = state_50387__$1;
(statearr_50390_50452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (20))){
var inst_50332 = cljs.core.deref.call(null,conn);
var state_50387__$1 = state_50387;
var statearr_50391_50453 = state_50387__$1;
(statearr_50391_50453[(2)] = inst_50332);

(statearr_50391_50453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (27))){
var inst_50360 = (state_50387[(2)]);
var state_50387__$1 = state_50387;
var statearr_50392_50454 = state_50387__$1;
(statearr_50392_50454[(2)] = inst_50360);

(statearr_50392_50454[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (1))){
var state_50387__$1 = state_50387;
var statearr_50393_50455 = state_50387__$1;
(statearr_50393_50455[(2)] = null);

(statearr_50393_50455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (24))){
var inst_50363 = (state_50387[(2)]);
var state_50387__$1 = state_50387;
var statearr_50394_50456 = state_50387__$1;
(statearr_50394_50456[(2)] = inst_50363);

(statearr_50394_50456[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (4))){
var inst_50292 = (state_50387[(8)]);
var inst_50292__$1 = (state_50387[(2)]);
var inst_50293 = cljs.core.nth.call(null,inst_50292__$1,(0),null);
var inst_50294 = cljs.core.nth.call(null,inst_50292__$1,(1),null);
var inst_50295 = cljs.core.atom.call(null,null);
var state_50387__$1 = (function (){var statearr_50398 = state_50387;
(statearr_50398[(9)] = inst_50295);

(statearr_50398[(7)] = inst_50294);

(statearr_50398[(10)] = inst_50293);

(statearr_50398[(8)] = inst_50292__$1);

return statearr_50398;
})();
var statearr_50399_50457 = state_50387__$1;
(statearr_50399_50457[(2)] = null);

(statearr_50399_50457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (15))){
var inst_50367 = (state_50387[(2)]);
var state_50387__$1 = state_50387;
var statearr_50400_50458 = state_50387__$1;
(statearr_50400_50458[(2)] = inst_50367);

(statearr_50400_50458[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (21))){
var inst_50319 = (state_50387[(11)]);
var inst_50322 = (state_50387[(12)]);
var inst_50327 = (state_50387[(13)]);
var inst_50321 = (state_50387[(14)]);
var inst_50320 = (state_50387[(15)]);
var inst_50334 = (state_50387[(2)]);
var inst_50335 = dat.reactor.execute_effect_BANG_.call(null,app,inst_50334,inst_50327);
var inst_50336 = (inst_50322 + (1));
var tmp50395 = inst_50319;
var tmp50396 = inst_50321;
var tmp50397 = inst_50320;
var inst_50319__$1 = tmp50395;
var inst_50320__$1 = tmp50397;
var inst_50321__$1 = tmp50396;
var inst_50322__$1 = inst_50336;
var state_50387__$1 = (function (){var statearr_50401 = state_50387;
(statearr_50401[(11)] = inst_50319__$1);

(statearr_50401[(16)] = inst_50335);

(statearr_50401[(12)] = inst_50322__$1);

(statearr_50401[(14)] = inst_50321__$1);

(statearr_50401[(15)] = inst_50320__$1);

return statearr_50401;
})();
var statearr_50402_50459 = state_50387__$1;
(statearr_50402_50459[(2)] = null);

(statearr_50402_50459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (31))){
var inst_50295 = (state_50387[(9)]);
var inst_50294 = (state_50387[(7)]);
var inst_50293 = (state_50387[(10)]);
var inst_50292 = (state_50387[(8)]);
var inst_50377 = (function (){var vec__50285 = inst_50292;
var event = inst_50293;
var port = inst_50294;
var final_meta = inst_50295;
return ((function (vec__50285,event,port,final_meta,inst_50295,inst_50294,inst_50293,inst_50292,state_val_50388,c__40635__auto___50450,event_chan,conn,kill_chan){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["go-react! process recieved kill-chan signal"], null);
});
;})(vec__50285,event,port,final_meta,inst_50295,inst_50294,inst_50293,inst_50292,state_val_50388,c__40635__auto___50450,event_chan,conn,kill_chan))
})();
var inst_50378 = (new cljs.core.Delay(inst_50377,null));
var inst_50379 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor","/tmp/form-init6286146101766555450.clj",276,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_50378,null,-310201048);
var state_50387__$1 = state_50387;
var statearr_50403_50460 = state_50387__$1;
(statearr_50403_50460[(2)] = inst_50379);

(statearr_50403_50460[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (32))){
var state_50387__$1 = state_50387;
var statearr_50404_50461 = state_50387__$1;
(statearr_50404_50461[(2)] = null);

(statearr_50404_50461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (33))){
var inst_50383 = (state_50387[(2)]);
var state_50387__$1 = state_50387;
var statearr_50405_50462 = state_50387__$1;
(statearr_50405_50462[(2)] = inst_50383);

(statearr_50405_50462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (13))){
var inst_50370 = (state_50387[(2)]);
var state_50387__$1 = state_50387;
var statearr_50406_50463 = state_50387__$1;
(statearr_50406_50463[(2)] = inst_50370);

(statearr_50406_50463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (22))){
var inst_50339 = (state_50387[(17)]);
var inst_50341 = cljs.core.chunked_seq_QMARK_.call(null,inst_50339);
var state_50387__$1 = state_50387;
if(inst_50341){
var statearr_50407_50464 = state_50387__$1;
(statearr_50407_50464[(1)] = (25));

} else {
var statearr_50408_50465 = state_50387__$1;
(statearr_50408_50465[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (29))){
var inst_50353 = cljs.core.deref.call(null,conn);
var state_50387__$1 = state_50387;
var statearr_50409_50466 = state_50387__$1;
(statearr_50409_50466[(2)] = inst_50353);

(statearr_50409_50466[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (6))){
var inst_50295 = (state_50387[(9)]);
var inst_50294 = (state_50387[(7)]);
var inst_50293 = (state_50387[(10)]);
var inst_50292 = (state_50387[(8)]);
var inst_50296 = (state_50387[(2)]);
var inst_50297 = (function (){var vec__50285 = inst_50292;
var event = inst_50293;
var port = inst_50294;
var final_meta = inst_50295;
var e = inst_50296;
return ((function (vec__50285,event,port,final_meta,e,inst_50295,inst_50294,inst_50293,inst_50292,inst_50296,state_val_50388,c__40635__auto___50450,event_chan,conn,kill_chan){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Exception in reactor go loop"], null);
});
;})(vec__50285,event,port,final_meta,e,inst_50295,inst_50294,inst_50293,inst_50292,inst_50296,state_val_50388,c__40635__auto___50450,event_chan,conn,kill_chan))
})();
var inst_50298 = (new cljs.core.Delay(inst_50297,null));
var inst_50299 = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init6286146101766555450.clj",273,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_50298,null,-685407482);
var inst_50300 = inst_50296.stack;
var inst_50301 = console.log(inst_50300);
var state_50387__$1 = (function (){var statearr_50410 = state_50387;
(statearr_50410[(18)] = inst_50299);

return statearr_50410;
})();
var statearr_50411_50467 = state_50387__$1;
(statearr_50411_50467[(2)] = inst_50301);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50387__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (28))){
var inst_50350 = (state_50387[(19)]);
var state_50387__$1 = state_50387;
var statearr_50412_50468 = state_50387__$1;
(statearr_50412_50468[(2)] = inst_50350);

(statearr_50412_50468[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (25))){
var inst_50339 = (state_50387[(17)]);
var inst_50343 = cljs.core.chunk_first.call(null,inst_50339);
var inst_50344 = cljs.core.chunk_rest.call(null,inst_50339);
var inst_50345 = cljs.core.count.call(null,inst_50343);
var inst_50319 = inst_50344;
var inst_50320 = inst_50343;
var inst_50321 = inst_50345;
var inst_50322 = (0);
var state_50387__$1 = (function (){var statearr_50413 = state_50387;
(statearr_50413[(11)] = inst_50319);

(statearr_50413[(12)] = inst_50322);

(statearr_50413[(14)] = inst_50321);

(statearr_50413[(15)] = inst_50320);

return statearr_50413;
})();
var statearr_50414_50469 = state_50387__$1;
(statearr_50414_50469[(2)] = null);

(statearr_50414_50469[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (17))){
var inst_50339 = (state_50387[(17)]);
var inst_50319 = (state_50387[(11)]);
var inst_50339__$1 = cljs.core.seq.call(null,inst_50319);
var state_50387__$1 = (function (){var statearr_50415 = state_50387;
(statearr_50415[(17)] = inst_50339__$1);

return statearr_50415;
})();
if(inst_50339__$1){
var statearr_50416_50470 = state_50387__$1;
(statearr_50416_50470[(1)] = (22));

} else {
var statearr_50417_50471 = state_50387__$1;
(statearr_50417_50471[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (3))){
var inst_50385 = (state_50387[(2)]);
var state_50387__$1 = state_50387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50387__$1,inst_50385);
} else {
if((state_val_50388 === (12))){
var state_50387__$1 = state_50387;
var statearr_50418_50472 = state_50387__$1;
(statearr_50418_50472[(2)] = null);

(statearr_50418_50472[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (2))){
var inst_50288 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50289 = [kill_chan,event_chan];
var inst_50290 = (new cljs.core.PersistentVector(null,2,(5),inst_50288,inst_50289,null));
var state_50387__$1 = state_50387;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50387__$1,(4),inst_50290,new cljs.core.Keyword(null,"priority","priority",1431093715),true);
} else {
if((state_val_50388 === (23))){
var state_50387__$1 = state_50387;
var statearr_50419_50473 = state_50387__$1;
(statearr_50419_50473[(2)] = null);

(statearr_50419_50473[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (19))){
var inst_50329 = (state_50387[(20)]);
var state_50387__$1 = state_50387;
var statearr_50420_50474 = state_50387__$1;
(statearr_50420_50474[(2)] = inst_50329);

(statearr_50420_50474[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (11))){
var inst_50312 = (state_50387[(21)]);
var inst_50318 = cljs.core.seq.call(null,inst_50312);
var inst_50319 = inst_50318;
var inst_50320 = null;
var inst_50321 = (0);
var inst_50322 = (0);
var state_50387__$1 = (function (){var statearr_50421 = state_50387;
(statearr_50421[(11)] = inst_50319);

(statearr_50421[(12)] = inst_50322);

(statearr_50421[(14)] = inst_50321);

(statearr_50421[(15)] = inst_50320);

return statearr_50421;
})();
var statearr_50422_50475 = state_50387__$1;
(statearr_50422_50475[(2)] = null);

(statearr_50422_50475[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (9))){
var inst_50295 = (state_50387[(9)]);
var inst_50312 = (state_50387[(21)]);
var inst_50294 = (state_50387[(7)]);
var inst_50293 = (state_50387[(10)]);
var inst_50292 = (state_50387[(8)]);
var inst_50308 = (function (){var vec__50285 = inst_50292;
var event = inst_50293;
var port = inst_50294;
var final_meta = inst_50295;
return ((function (vec__50285,event,port,final_meta,inst_50295,inst_50312,inst_50294,inst_50293,inst_50292,state_val_50388,c__40635__auto___50450,event_chan,conn,kill_chan){
return (function (current_db){
try{var new_db = dat.reactor.handle_event_BANG_.call(null,reactor,current_db,event);
cljs.core.reset_BANG_.call(null,final_meta,cljs.core.meta.call(null,new_db));

return cljs.core.with_meta.call(null,new_db,cljs.core.dissoc.call(null,cljs.core.meta.call(null,new_db),new cljs.core.Keyword("dat.reactor","effects","dat.reactor/effects",21173161)));
}catch (e50423){var e = e50423;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init6286146101766555450.clj",263,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,vec__50285,event,port,final_meta,inst_50295,inst_50312,inst_50294,inst_50293,inst_50292,state_val_50388,c__40635__auto___50450,event_chan,conn,kill_chan){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Exception in reactor swap for event: ",event], null);
});})(e,vec__50285,event,port,final_meta,inst_50295,inst_50312,inst_50294,inst_50293,inst_50292,state_val_50388,c__40635__auto___50450,event_chan,conn,kill_chan))
,null)),null,-980362424);

console.log(e.stack);

return current_db;
}});
;})(vec__50285,event,port,final_meta,inst_50295,inst_50312,inst_50294,inst_50293,inst_50292,state_val_50388,c__40635__auto___50450,event_chan,conn,kill_chan))
})();
var inst_50309 = cljs.core.swap_BANG_.call(null,conn,inst_50308);
var inst_50310 = cljs.core.deref.call(null,inst_50295);
var inst_50311 = new cljs.core.Keyword("dat.reactor","effects","dat.reactor/effects",21173161).cljs$core$IFn$_invoke$arity$1(inst_50310);
var inst_50312__$1 = cljs.core.seq.call(null,inst_50311);
var state_50387__$1 = (function (){var statearr_50424 = state_50387;
(statearr_50424[(21)] = inst_50312__$1);

(statearr_50424[(22)] = inst_50309);

return statearr_50424;
})();
if(inst_50312__$1){
var statearr_50425_50476 = state_50387__$1;
(statearr_50425_50476[(1)] = (11));

} else {
var statearr_50426_50477 = state_50387__$1;
(statearr_50426_50477[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (5))){
var inst_50294 = (state_50387[(7)]);
var inst_50374 = (state_50387[(2)]);
var inst_50375 = cljs.core._EQ_.call(null,inst_50294,kill_chan);
var state_50387__$1 = (function (){var statearr_50427 = state_50387;
(statearr_50427[(23)] = inst_50374);

return statearr_50427;
})();
if(inst_50375){
var statearr_50428_50478 = state_50387__$1;
(statearr_50428_50478[(1)] = (31));

} else {
var statearr_50429_50479 = state_50387__$1;
(statearr_50429_50479[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (14))){
var inst_50322 = (state_50387[(12)]);
var inst_50321 = (state_50387[(14)]);
var inst_50324 = (inst_50322 < inst_50321);
var inst_50325 = inst_50324;
var state_50387__$1 = state_50387;
if(cljs.core.truth_(inst_50325)){
var statearr_50430_50480 = state_50387__$1;
(statearr_50430_50480[(1)] = (16));

} else {
var statearr_50431_50481 = state_50387__$1;
(statearr_50431_50481[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (26))){
var inst_50339 = (state_50387[(17)]);
var inst_50350 = (state_50387[(19)]);
var inst_50348 = (state_50387[(24)]);
var inst_50348__$1 = cljs.core.first.call(null,inst_50339);
var inst_50349 = cljs.core.meta.call(null,inst_50348__$1);
var inst_50350__$1 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(inst_50349);
var state_50387__$1 = (function (){var statearr_50432 = state_50387;
(statearr_50432[(19)] = inst_50350__$1);

(statearr_50432[(24)] = inst_50348__$1);

return statearr_50432;
})();
if(cljs.core.truth_(inst_50350__$1)){
var statearr_50433_50482 = state_50387__$1;
(statearr_50433_50482[(1)] = (28));

} else {
var statearr_50434_50483 = state_50387__$1;
(statearr_50434_50483[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (16))){
var inst_50329 = (state_50387[(20)]);
var inst_50322 = (state_50387[(12)]);
var inst_50327 = (state_50387[(13)]);
var inst_50320 = (state_50387[(15)]);
var inst_50327__$1 = cljs.core._nth.call(null,inst_50320,inst_50322);
var inst_50328 = cljs.core.meta.call(null,inst_50327__$1);
var inst_50329__$1 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(inst_50328);
var state_50387__$1 = (function (){var statearr_50435 = state_50387;
(statearr_50435[(20)] = inst_50329__$1);

(statearr_50435[(13)] = inst_50327__$1);

return statearr_50435;
})();
if(cljs.core.truth_(inst_50329__$1)){
var statearr_50436_50484 = state_50387__$1;
(statearr_50436_50484[(1)] = (19));

} else {
var statearr_50437_50485 = state_50387__$1;
(statearr_50437_50485[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (30))){
var inst_50339 = (state_50387[(17)]);
var inst_50348 = (state_50387[(24)]);
var inst_50355 = (state_50387[(2)]);
var inst_50356 = dat.reactor.execute_effect_BANG_.call(null,app,inst_50355,inst_50348);
var inst_50357 = cljs.core.next.call(null,inst_50339);
var inst_50319 = inst_50357;
var inst_50320 = null;
var inst_50321 = (0);
var inst_50322 = (0);
var state_50387__$1 = (function (){var statearr_50438 = state_50387;
(statearr_50438[(11)] = inst_50319);

(statearr_50438[(25)] = inst_50356);

(statearr_50438[(12)] = inst_50322);

(statearr_50438[(14)] = inst_50321);

(statearr_50438[(15)] = inst_50320);

return statearr_50438;
})();
var statearr_50439_50486 = state_50387__$1;
(statearr_50439_50486[(2)] = null);

(statearr_50439_50486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (10))){
var inst_50372 = (state_50387[(2)]);
var state_50387__$1 = state_50387;
var statearr_50440_50487 = state_50387__$1;
(statearr_50440_50487[(2)] = inst_50372);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50387__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (18))){
var inst_50365 = (state_50387[(2)]);
var state_50387__$1 = state_50387;
var statearr_50441_50488 = state_50387__$1;
(statearr_50441_50488[(2)] = inst_50365);

(statearr_50441_50488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50388 === (8))){
var state_50387__$1 = state_50387;
var statearr_50442_50489 = state_50387__$1;
(statearr_50442_50489[(2)] = null);

(statearr_50442_50489[(1)] = (10));


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
});})(c__40635__auto___50450,event_chan,conn,kill_chan))
;
return ((function (switch__40521__auto__,c__40635__auto___50450,event_chan,conn,kill_chan){
return (function() {
var dat$reactor$go_react_BANG__$_state_machine__40522__auto__ = null;
var dat$reactor$go_react_BANG__$_state_machine__40522__auto____0 = (function (){
var statearr_50446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50446[(0)] = dat$reactor$go_react_BANG__$_state_machine__40522__auto__);

(statearr_50446[(1)] = (1));

return statearr_50446;
});
var dat$reactor$go_react_BANG__$_state_machine__40522__auto____1 = (function (state_50387){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_50387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e50447){if((e50447 instanceof Object)){
var ex__40525__auto__ = e50447;
var statearr_50448_50490 = state_50387;
(statearr_50448_50490[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50491 = state_50387;
state_50387 = G__50491;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
dat$reactor$go_react_BANG__$_state_machine__40522__auto__ = function(state_50387){
switch(arguments.length){
case 0:
return dat$reactor$go_react_BANG__$_state_machine__40522__auto____0.call(this);
case 1:
return dat$reactor$go_react_BANG__$_state_machine__40522__auto____1.call(this,state_50387);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$reactor$go_react_BANG__$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = dat$reactor$go_react_BANG__$_state_machine__40522__auto____0;
dat$reactor$go_react_BANG__$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = dat$reactor$go_react_BANG__$_state_machine__40522__auto____1;
return dat$reactor$go_react_BANG__$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___50450,event_chan,conn,kill_chan))
})();
var state__40637__auto__ = (function (){var statearr_50449 = f__40636__auto__.call(null);
(statearr_50449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___50450);

return statearr_50449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___50450,event_chan,conn,kill_chan))
);


return kill_chan;
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {com.stuartsierra.component.Lifecycle}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
dat.reactor.SimpleReactor = (function (app,dispatcher,reactor,conn,kill_chan,__meta,__extmap,__hash){
this.app = app;
this.dispatcher = dispatcher;
this.reactor = reactor;
this.conn = conn;
this.kill_chan = kill_chan;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
dat.reactor.SimpleReactor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29424__auto__,k__29425__auto__){
var self__ = this;
var this__29424__auto____$1 = this;
return this__29424__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29425__auto__,null);
});

dat.reactor.SimpleReactor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29426__auto__,k50493,else__29427__auto__){
var self__ = this;
var this__29426__auto____$1 = this;
var G__50495 = (((k50493 instanceof cljs.core.Keyword))?k50493.fqn:null);
switch (G__50495) {
case "app":
return self__.app;

break;
case "dispatcher":
return self__.dispatcher;

break;
case "reactor":
return self__.reactor;

break;
case "conn":
return self__.conn;

break;
case "kill-chan":
return self__.kill_chan;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k50493,else__29427__auto__);

}
});

dat.reactor.SimpleReactor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29438__auto__,writer__29439__auto__,opts__29440__auto__){
var self__ = this;
var this__29438__auto____$1 = this;
var pr_pair__29441__auto__ = ((function (this__29438__auto____$1){
return (function (keyval__29442__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29439__auto__,cljs.core.pr_writer,""," ","",opts__29440__auto__,keyval__29442__auto__);
});})(this__29438__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29439__auto__,pr_pair__29441__auto__,"#dat.reactor.SimpleReactor{",", ","}",opts__29440__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app","app",-560961707),self__.app],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reactor","reactor",535582272),self__.reactor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),self__.kill_chan],null))], null),self__.__extmap));
});

dat.reactor.SimpleReactor.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.SimpleReactor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50492){
var self__ = this;
var G__50492__$1 = this;
return (new cljs.core.RecordIter((0),G__50492__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"reactor","reactor",535582272),new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

dat.reactor.SimpleReactor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29422__auto__){
var self__ = this;
var this__29422__auto____$1 = this;
return self__.__meta;
});

dat.reactor.SimpleReactor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29418__auto__){
var self__ = this;
var this__29418__auto____$1 = this;
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,self__.reactor,self__.conn,self__.kill_chan,self__.__meta,self__.__extmap,self__.__hash));
});

dat.reactor.SimpleReactor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29428__auto__){
var self__ = this;
var this__29428__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

dat.reactor.SimpleReactor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29419__auto__){
var self__ = this;
var this__29419__auto____$1 = this;
var h__29191__auto__ = self__.__hash;
if(!((h__29191__auto__ == null))){
return h__29191__auto__;
} else {
var h__29191__auto____$1 = cljs.core.hash_imap.call(null,this__29419__auto____$1);
self__.__hash = h__29191__auto____$1;

return h__29191__auto____$1;
}
});

dat.reactor.SimpleReactor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__29420__auto__,other__29421__auto__){
var self__ = this;
var this__29420__auto____$1 = this;
if(cljs.core.truth_((function (){var and__28737__auto__ = other__29421__auto__;
if(cljs.core.truth_(and__28737__auto__)){
return ((this__29420__auto____$1.constructor === other__29421__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__29420__auto____$1,other__29421__auto__));
} else {
return and__28737__auto__;
}
})())){
return true;
} else {
return false;
}
});

dat.reactor.SimpleReactor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29433__auto__,k__29434__auto__){
var self__ = this;
var this__29433__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reactor","reactor",535582272),null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),null,new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),null,new cljs.core.Keyword(null,"app","app",-560961707),null,new cljs.core.Keyword(null,"conn","conn",278309663),null], null), null),k__29434__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29433__auto____$1),self__.__meta),k__29434__auto__);
} else {
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,self__.reactor,self__.conn,self__.kill_chan,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29434__auto__)),null));
}
});

dat.reactor.SimpleReactor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29431__auto__,k__29432__auto__,G__50492){
var self__ = this;
var this__29431__auto____$1 = this;
var pred__50496 = cljs.core.keyword_identical_QMARK_;
var expr__50497 = k__29432__auto__;
if(cljs.core.truth_(pred__50496.call(null,new cljs.core.Keyword(null,"app","app",-560961707),expr__50497))){
return (new dat.reactor.SimpleReactor(G__50492,self__.dispatcher,self__.reactor,self__.conn,self__.kill_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50496.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),expr__50497))){
return (new dat.reactor.SimpleReactor(self__.app,G__50492,self__.reactor,self__.conn,self__.kill_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50496.call(null,new cljs.core.Keyword(null,"reactor","reactor",535582272),expr__50497))){
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,G__50492,self__.conn,self__.kill_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50496.call(null,new cljs.core.Keyword(null,"conn","conn",278309663),expr__50497))){
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,self__.reactor,G__50492,self__.kill_chan,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__50496.call(null,new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),expr__50497))){
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,self__.reactor,self__.conn,G__50492,self__.__meta,self__.__extmap,null));
} else {
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,self__.reactor,self__.conn,self__.kill_chan,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29432__auto__,G__50492),null));
}
}
}
}
}
});

dat.reactor.SimpleReactor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29436__auto__){
var self__ = this;
var this__29436__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app","app",-560961707),self__.app],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"reactor","reactor",535582272),self__.reactor],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"conn","conn",278309663),self__.conn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),self__.kill_chan],null))], null),self__.__extmap));
});

dat.reactor.SimpleReactor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29423__auto__,G__50492){
var self__ = this;
var this__29423__auto____$1 = this;
return (new dat.reactor.SimpleReactor(self__.app,self__.dispatcher,self__.reactor,self__.conn,self__.kill_chan,G__50492,self__.__extmap,self__.__hash));
});

dat.reactor.SimpleReactor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29429__auto__,entry__29430__auto__){
var self__ = this;
var this__29429__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29430__auto__)){
return this__29429__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29430__auto__,(0)),cljs.core._nth.call(null,entry__29430__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29429__auto____$1,entry__29430__auto__);
}
});

dat.reactor.SimpleReactor.prototype.com$stuartsierra$component$Lifecycle$ = cljs.core.PROTOCOL_SENTINEL;

dat.reactor.SimpleReactor.prototype.com$stuartsierra$component$Lifecycle$start$arity$1 = (function (reactor__$1){
var self__ = this;
var reactor__$2 = this;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.reactor","/tmp/form-init6286146101766555450.clj",284,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (reactor__$2){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Starting SimpleReactor Component"], null);
});})(reactor__$2))
,null)),null,226257103);

try{var conn__$1 = (function (){var or__28749__auto__ = self__.conn;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
var or__28749__auto____$1 = new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(self__.app);
if(cljs.core.truth_(or__28749__auto____$1)){
return or__28749__auto____$1;
} else {
return datascript.core.create_conn.call(null);
}
}
})();
var app__$1 = (function (){var or__28749__auto__ = self__.app;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"conn","conn",278309663),conn__$1,new cljs.core.Keyword(null,"reactor","reactor",535582272),reactor__$2,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),self__.dispatcher], null);
}
})();
var reactor__$3 = cljs.core.assoc.call(null,reactor__$2,new cljs.core.Keyword(null,"app","app",-560961707),app__$1,new cljs.core.Keyword(null,"conn","conn",278309663),conn__$1);
var kill_chan__$1 = dat.reactor.go_react_BANG_.call(null,reactor__$3,app__$1);
var reactor__$4 = cljs.core.assoc.call(null,reactor__$3,new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254),kill_chan__$1);
return reactor__$4;
}catch (e50499){var e = e50499;
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.reactor","/tmp/form-init6286146101766555450.clj",297,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (e,reactor__$2){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Error starting SimpleReactor:",e], null);
});})(e,reactor__$2))
,null)),null,1558576944);

console.log(e.stack);

return reactor__$2;
}});

dat.reactor.SimpleReactor.prototype.com$stuartsierra$component$Lifecycle$stop$arity$1 = (function (reactor__$1){
var self__ = this;
var reactor__$2 = this;
if(cljs.core.truth_(self__.kill_chan)){
var c__40635__auto___50513 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___50513,reactor__$2){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___50513,reactor__$2){
return (function (state_50503){
var state_val_50504 = (state_50503[(1)]);
if((state_val_50504 === (1))){
var state_50503__$1 = state_50503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50503__$1,(2),self__.kill_chan,new cljs.core.Keyword(null,"kill","kill",-12335575));
} else {
if((state_val_50504 === (2))){
var inst_50501 = (state_50503[(2)]);
var state_50503__$1 = state_50503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50503__$1,inst_50501);
} else {
return null;
}
}
});})(c__40635__auto___50513,reactor__$2))
;
return ((function (switch__40521__auto__,c__40635__auto___50513,reactor__$2){
return (function() {
var dat$reactor$state_machine__40522__auto__ = null;
var dat$reactor$state_machine__40522__auto____0 = (function (){
var statearr_50508 = [null,null,null,null,null,null,null];
(statearr_50508[(0)] = dat$reactor$state_machine__40522__auto__);

(statearr_50508[(1)] = (1));

return statearr_50508;
});
var dat$reactor$state_machine__40522__auto____1 = (function (state_50503){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_50503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e50509){if((e50509 instanceof Object)){
var ex__40525__auto__ = e50509;
var statearr_50510_50514 = state_50503;
(statearr_50510_50514[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50515 = state_50503;
state_50503 = G__50515;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
dat$reactor$state_machine__40522__auto__ = function(state_50503){
switch(arguments.length){
case 0:
return dat$reactor$state_machine__40522__auto____0.call(this);
case 1:
return dat$reactor$state_machine__40522__auto____1.call(this,state_50503);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
dat$reactor$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = dat$reactor$state_machine__40522__auto____0;
dat$reactor$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = dat$reactor$state_machine__40522__auto____1;
return dat$reactor$state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___50513,reactor__$2))
})();
var state__40637__auto__ = (function (){var statearr_50511 = f__40636__auto__.call(null);
(statearr_50511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___50513);

return statearr_50511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___50513,reactor__$2))
);

} else {
}

return reactor__$2;
});

dat.reactor.SimpleReactor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"dispatcher","dispatcher",2093752659,null),new cljs.core.Symbol(null,"reactor","reactor",-2118853497,null),new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"kill-chan","kill-chan",76861273,null)], null);
});

dat.reactor.SimpleReactor.cljs$lang$type = true;

dat.reactor.SimpleReactor.cljs$lang$ctorPrSeq = (function (this__29460__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"dat.reactor/SimpleReactor");
});

dat.reactor.SimpleReactor.cljs$lang$ctorPrWriter = (function (this__29460__auto__,writer__29461__auto__){
return cljs.core._write.call(null,writer__29461__auto__,"dat.reactor/SimpleReactor");
});

dat.reactor.__GT_SimpleReactor = (function dat$reactor$__GT_SimpleReactor(app,dispatcher,reactor,conn,kill_chan){
return (new dat.reactor.SimpleReactor(app,dispatcher,reactor,conn,kill_chan,null,null,null));
});

dat.reactor.map__GT_SimpleReactor = (function dat$reactor$map__GT_SimpleReactor(G__50494){
return (new dat.reactor.SimpleReactor(new cljs.core.Keyword(null,"app","app",-560961707).cljs$core$IFn$_invoke$arity$1(G__50494),new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(G__50494),new cljs.core.Keyword(null,"reactor","reactor",535582272).cljs$core$IFn$_invoke$arity$1(G__50494),new cljs.core.Keyword(null,"conn","conn",278309663).cljs$core$IFn$_invoke$arity$1(G__50494),new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254).cljs$core$IFn$_invoke$arity$1(G__50494),null,cljs.core.dissoc.call(null,G__50494,new cljs.core.Keyword(null,"app","app",-560961707),new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132),new cljs.core.Keyword(null,"reactor","reactor",535582272),new cljs.core.Keyword(null,"conn","conn",278309663),new cljs.core.Keyword(null,"kill-chan","kill-chan",-1563670254)),null));
});

/**
 * If :app is specified, it is reacted on. If not, it is computed as a map of {:dispatcher :reactor :conn}
 */
dat.reactor.new_simple_reactor = (function dat$reactor$new_simple_reactor(var_args){
var args50516 = [];
var len__29970__auto___50519 = arguments.length;
var i__29971__auto___50520 = (0);
while(true){
if((i__29971__auto___50520 < len__29970__auto___50519)){
args50516.push((arguments[i__29971__auto___50520]));

var G__50521 = (i__29971__auto___50520 + (1));
i__29971__auto___50520 = G__50521;
continue;
} else {
}
break;
}

var G__50518 = args50516.length;
switch (G__50518) {
case 1:
return dat.reactor.new_simple_reactor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return dat.reactor.new_simple_reactor.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args50516.length)].join('')));

}
});

dat.reactor.new_simple_reactor.cljs$core$IFn$_invoke$arity$1 = (function (options){
return dat.reactor.map__GT_SimpleReactor.call(null,options);
});

dat.reactor.new_simple_reactor.cljs$core$IFn$_invoke$arity$0 = (function (){
return dat.reactor.new_simple_reactor.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

dat.reactor.new_simple_reactor.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=reactor.js.map