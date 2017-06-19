// Compiled by ClojureScript 1.9.518 {}
goog.provide('dat.view.router');
goog.require('cljs.core');
goog.require('bidi.bidi');
goog.require('dat.view.settings');
goog.require('dat.reactor.dispatcher');
goog.require('dat.view.routes');
goog.require('datascript.core');
goog.require('reagent.ratom');
goog.require('goog.events');
goog.require('dat.reactor');
goog.require('dat.view.utils');
goog.require('taoensso.timbre');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
dat.view.router.make_history = (function dat$view$router$make_history(){
var G__55120 = (new goog.history.Html5History());
G__55120.setPathPrefix([cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.host)].join(''));

G__55120.setUseFragment(false);

return G__55120;
});
dat.view.router.attach_history_handler_BANG_ = (function dat$view$router$attach_history_handler_BANG_(history,handler_fn){
var G__55123 = history;
goog.events.listen(G__55123,goog.history.EventType.NAVIGATE,((function (G__55123){
return (function (p1__55121_SHARP_){
return handler_fn.call(null,p1__55121_SHARP_);
});})(G__55123))
);

G__55123.setEnabled(true);

return G__55123;
});
dat.view.router.update_route_BANG_ = (function dat$view$router$update_route_BANG_(app){
return dat.reactor.dispatcher.dispatch_BANG_.call(null,new cljs.core.Keyword(null,"dispatcher","dispatcher",453221132).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view.router","path-change","dat.view.router/path-change",391116151),window.location.pathname], null));
});
dat.reactor.register_handler.call(null,new cljs.core.Keyword("dat.view.router","path-change","dat.view.router/path-change",391116151),(function (app,db,p__55124){
var vec__55125 = p__55124;
var _ = cljs.core.nth.call(null,vec__55125,(0),null);
var new_path = cljs.core.nth.call(null,vec__55125,(1),null);
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.view.router","/tmp/form-init6286146101766555450.clj",52,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (vec__55125,_,new_path){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Routing path change",new_path], null);
});})(vec__55125,_,new_path))
,null)),null,1704420544);

return dat.reactor.resolve_to.call(null,app,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view.settings","update","dat.view.settings/update",-1733360771),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dat.view.router","current-path","dat.view.router/current-path",1076946889),new_path], null)], null)], null));
}));
dat.view.router.make_handler_fn = (function dat$view$router$make_handler_fn(app){
return (function (_){
return dat.view.router.update_route_BANG_.call(null,app);
});
});
dat.view.router.current_route = cljs.core.memoize.call(null,(function (app){
return reagent.ratom.make_reaction.call(null,(function (){
return bidi.bidi.match_route.call(null,dat.view.utils.deref_or_value.call(null,new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(app)),(function (){var or__28749__auto__ = cljs.core.deref.call(null,dat.view.settings.get_setting.call(null,app,new cljs.core.Keyword("dat.view.router","current-path","dat.view.router/current-path",1076946889)));
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return "/";
}
})());
}));
}));
dat.view.router.set_route_BANG_ = (function dat$view$router$set_route_BANG_(app,p__55128){
var map__55133 = p__55128;
var map__55133__$1 = ((((!((map__55133 == null)))?((((map__55133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__55133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55133):map__55133);
var route = map__55133__$1;
var handler = cljs.core.get.call(null,map__55133__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.call(null,map__55133__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055));
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"dat.view.router","/tmp/form-init6286146101766555450.clj",75,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (map__55133,map__55133__$1,route,handler,route_params){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["set-route! to route:",route], null);
});})(map__55133,map__55133__$1,route,handler,route_params))
,null)),null,741308235);

var flattened_params = cljs.core.vec.call(null,cljs.core.flatten.call(null,cljs.core.seq.call(null,route_params)));
var _ = taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"dat.view.router","/tmp/form-init6286146101766555450.clj",77,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (flattened_params,map__55133,map__55133__$1,route,handler,route_params){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["flattened-params:",flattened_params], null);
});})(flattened_params,map__55133,map__55133__$1,route,handler,route_params))
,null)),null,266395266);
var path_for_route = cljs.core.apply.call(null,bidi.bidi.path_for,dat.view.utils.deref_or_value.call(null,(function (){var or__28749__auto__ = new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(app);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return dat.view.routes.routes;
}
})()),handler,flattened_params);
if(cljs.core.not.call(null,path_for_route)){
taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.view.router","/tmp/form-init6286146101766555450.clj",84,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (flattened_params,_,path_for_route,map__55133,map__55133__$1,route,handler,route_params){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Hit bad route with params:",(function (){var sb__29841__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_55135_55137 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_55136_55138 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_55135_55137,_STAR_print_fn_STAR_55136_55138,sb__29841__auto__,flattened_params,_,path_for_route,map__55133,map__55133__$1,route,handler,route_params){
return (function (x__29842__auto__){
return sb__29841__auto__.append(x__29842__auto__);
});})(_STAR_print_newline_STAR_55135_55137,_STAR_print_fn_STAR_55136_55138,sb__29841__auto__,flattened_params,_,path_for_route,map__55133,map__55133__$1,route,handler,route_params))
;

try{cljs.core.pr_str.call(null,flattened_params);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_55136_55138;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_55135_55137;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__29841__auto__)].join('');
})()], null);
});})(flattened_params,_,path_for_route,map__55133,map__55133__$1,route,handler,route_params))
,null)),null,1259768742);

taoensso.timbre._log_BANG_.call(null,taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"dat.view.router","/tmp/form-init6286146101766555450.clj",85,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay(((function (flattened_params,_,path_for_route,map__55133,map__55133__$1,route,handler,route_params){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad route path:",path_for_route], null);
});})(flattened_params,_,path_for_route,map__55133,map__55133__$1,route,handler,route_params))
,null)),null,-605718528);

return alert("Hit a bad route: ",cljs.core.pr_str.call(null,route_params));
} else {
return new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(app).setToken(path_for_route);
}
});

//# sourceMappingURL=router.js.map