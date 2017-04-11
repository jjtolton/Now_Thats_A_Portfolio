// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args24274 = [];
var len__7484__auto___24277 = arguments.length;
var i__7485__auto___24278 = (0);
while(true){
if((i__7485__auto___24278 < len__7484__auto___24277)){
args24274.push((arguments[i__7485__auto___24278]));

var G__24279 = (i__7485__auto___24278 + (1));
i__7485__auto___24278 = G__24279;
continue;
} else {
}
break;
}

var G__24276 = args24274.length;
switch (G__24276) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24274.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$figwheel_DASH_event,"callback",cljs.core.cst$kw$callback_DASH_name,"figwheel-repl-print",cljs.core.cst$kw$content,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stream,stream,cljs.core.cst$kw$args,args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$out,args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__7491__auto__ = [];
var len__7484__auto___24282 = arguments.length;
var i__7485__auto___24283 = (0);
while(true){
if((i__7485__auto___24283 < len__7484__auto___24282)){
args__7491__auto__.push((arguments[i__7485__auto___24283]));

var G__24284 = (i__7485__auto___24283 + (1));
i__7485__auto___24283 = G__24284;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print(args);

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$out,args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq24281){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24281));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__7491__auto__ = [];
var len__7484__auto___24286 = arguments.length;
var i__7485__auto___24287 = (0);
while(true){
if((i__7485__auto___24287 < len__7484__auto___24286)){
args__7491__auto__.push((arguments[i__7485__auto___24287]));

var G__24288 = (i__7485__auto___24287 + (1));
i__7485__auto___24287 = G__24288;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print(args);

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$err,args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq24285){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq24285));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_(figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_(figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$figwheel_DASH_autoload,true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_(cljs.core.cst$kw$figwheel_DASH_autoload,cljs.core.not(figwheel.client.autoload_QMARK_()));
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_())?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_(cljs.core.cst$kw$figwheel_DASH_autoload,b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$figwheel_DASH_repl_DASH_pprint,true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_(cljs.core.cst$kw$figwheel_DASH_repl_DASH_pprint,b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint())){
return figwheel.client.utils.pprint_to_string(v);
} else {
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v], 0));
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons(cljs.core.select_keys(ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$message,cljs.core.cst$kw$class], null)),figwheel$client$get_essential_messages(cljs.core.cst$kw$cause.cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24290){
var map__24293 = p__24290;
var map__24293__$1 = ((((!((map__24293 == null)))?((((map__24293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24293):map__24293);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24293__$1,cljs.core.cst$kw$message);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24293__$1,cljs.core.cst$kw$class);
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons(cljs.core.first(msg_hist),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(name_set,cljs.core.cst$kw$msg_DASH_name),cljs.core.rest(msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__6409__auto__ = cljs.core.cst$kw$load_DASH_warninged_DASH_code.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(msg_name,cljs.core.cst$kw$compile_DASH_warning);
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__6397__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(msg_names),cljs.core.cst$kw$files_DASH_changed);
if(and__6397__auto__){
return figwheel.client.reload_file_QMARK__STAR_(cljs.core.second(msg_names),opts);
} else {
return and__6397__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(msg_names),cljs.core.cst$kw$files_DASH_changed)) && (cljs.core.not(figwheel.client.reload_file_QMARK__STAR_(cljs.core.second(msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$compile_DASH_warning,cljs.core.cst$kw$compile_DASH_warning], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$compile_DASH_warning,cljs.core.first(msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$compile_DASH_warning,cljs.core.cst$kw$files_DASH_changed,cljs.core.cst$kw$compile_DASH_warning], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$compile_DASH_failed,cljs.core.first(msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$compile_DASH_failed,cljs.core.cst$kw$compile_DASH_failed], null),cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$css_DASH_files_DASH_changed,cljs.core.first(msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__14088__auto___24455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___24455,ch){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___24455,ch){
return (function (state_24424){
var state_val_24425 = (state_24424[(1)]);
if((state_val_24425 === (7))){
var inst_24420 = (state_24424[(2)]);
var state_24424__$1 = state_24424;
var statearr_24426_24456 = state_24424__$1;
(statearr_24426_24456[(2)] = inst_24420);

(statearr_24426_24456[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24425 === (1))){
var state_24424__$1 = state_24424;
var statearr_24427_24457 = state_24424__$1;
(statearr_24427_24457[(2)] = null);

(statearr_24427_24457[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24425 === (4))){
var inst_24377 = (state_24424[(7)]);
var inst_24377__$1 = (state_24424[(2)]);
var state_24424__$1 = (function (){var statearr_24428 = state_24424;
(statearr_24428[(7)] = inst_24377__$1);

return statearr_24428;
})();
if(cljs.core.truth_(inst_24377__$1)){
var statearr_24429_24458 = state_24424__$1;
(statearr_24429_24458[(1)] = (5));

} else {
var statearr_24430_24459 = state_24424__$1;
(statearr_24430_24459[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24425 === (15))){
var inst_24384 = (state_24424[(8)]);
var inst_24399 = cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(inst_24384);
var inst_24400 = cljs.core.first(inst_24399);
var inst_24401 = cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(inst_24400);
var inst_24402 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24401)].join('');
var inst_24403 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warn,inst_24402);
var state_24424__$1 = state_24424;
var statearr_24431_24460 = state_24424__$1;
(statearr_24431_24460[(2)] = inst_24403);

(statearr_24431_24460[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24425 === (13))){
var inst_24408 = (state_24424[(2)]);
var state_24424__$1 = state_24424;
var statearr_24432_24461 = state_24424__$1;
(statearr_24432_24461[(2)] = inst_24408);

(statearr_24432_24461[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24425 === (6))){
var state_24424__$1 = state_24424;
var statearr_24433_24462 = state_24424__$1;
(statearr_24433_24462[(2)] = null);

(statearr_24433_24462[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24425 === (17))){
var inst_24406 = (state_24424[(2)]);
var state_24424__$1 = state_24424;
var statearr_24434_24463 = state_24424__$1;
(statearr_24434_24463[(2)] = inst_24406);

(statearr_24434_24463[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24425 === (3))){
var inst_24422 = (state_24424[(2)]);
var state_24424__$1 = state_24424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24424__$1,inst_24422);
} else {
if((state_val_24425 === (12))){
var inst_24383 = (state_24424[(9)]);
var inst_24397 = figwheel.client.block_reload_file_state_QMARK_(inst_24383,opts);
var state_24424__$1 = state_24424;
if(cljs.core.truth_(inst_24397)){
var statearr_24435_24464 = state_24424__$1;
(statearr_24435_24464[(1)] = (15));

} else {
var statearr_24436_24465 = state_24424__$1;
(statearr_24436_24465[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24425 === (2))){
var state_24424__$1 = state_24424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24424__$1,(4),ch);
} else {
if((state_val_24425 === (11))){
var inst_24384 = (state_24424[(8)]);
var inst_24389 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24390 = figwheel.client.file_reloading.reload_js_files(opts,inst_24384);
var inst_24391 = cljs.core.async.timeout((1000));
var inst_24392 = [inst_24390,inst_24391];
var inst_24393 = (new cljs.core.PersistentVector(null,2,(5),inst_24389,inst_24392,null));
var state_24424__$1 = state_24424;
return cljs.core.async.ioc_alts_BANG_(state_24424__$1,(14),inst_24393);
} else {
if((state_val_24425 === (9))){
var inst_24384 = (state_24424[(8)]);
var inst_24410 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warn,"Figwheel: code autoloading is OFF");
var inst_24411 = cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(inst_24384);
var inst_24412 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$file,inst_24411);
var inst_24413 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24412)].join('');
var inst_24414 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,inst_24413);
var state_24424__$1 = (function (){var statearr_24437 = state_24424;
(statearr_24437[(10)] = inst_24410);

return statearr_24437;
})();
var statearr_24438_24466 = state_24424__$1;
(statearr_24438_24466[(2)] = inst_24414);

(statearr_24438_24466[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24425 === (5))){
var inst_24377 = (state_24424[(7)]);
var inst_24379 = [cljs.core.cst$kw$compile_DASH_warning,null,cljs.core.cst$kw$files_DASH_changed,null];
var inst_24380 = (new cljs.core.PersistentArrayMap(null,2,inst_24379,null));
var inst_24381 = (new cljs.core.PersistentHashSet(null,inst_24380,null));
var inst_24382 = figwheel.client.focus_msgs(inst_24381,inst_24377);
var inst_24383 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$msg_DASH_name,inst_24382);
var inst_24384 = cljs.core.first(inst_24382);
var inst_24385 = figwheel.client.autoload_QMARK_();
var state_24424__$1 = (function (){var statearr_24439 = state_24424;
(statearr_24439[(8)] = inst_24384);

(statearr_24439[(9)] = inst_24383);

return statearr_24439;
})();
if(cljs.core.truth_(inst_24385)){
var statearr_24440_24467 = state_24424__$1;
(statearr_24440_24467[(1)] = (8));

} else {
var statearr_24441_24468 = state_24424__$1;
(statearr_24441_24468[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24425 === (14))){
var inst_24395 = (state_24424[(2)]);
var state_24424__$1 = state_24424;
var statearr_24442_24469 = state_24424__$1;
(statearr_24442_24469[(2)] = inst_24395);

(statearr_24442_24469[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24425 === (16))){
var state_24424__$1 = state_24424;
var statearr_24443_24470 = state_24424__$1;
(statearr_24443_24470[(2)] = null);

(statearr_24443_24470[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24425 === (10))){
var inst_24416 = (state_24424[(2)]);
var state_24424__$1 = (function (){var statearr_24444 = state_24424;
(statearr_24444[(11)] = inst_24416);

return statearr_24444;
})();
var statearr_24445_24471 = state_24424__$1;
(statearr_24445_24471[(2)] = null);

(statearr_24445_24471[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24425 === (8))){
var inst_24383 = (state_24424[(9)]);
var inst_24387 = figwheel.client.reload_file_state_QMARK_(inst_24383,opts);
var state_24424__$1 = state_24424;
if(cljs.core.truth_(inst_24387)){
var statearr_24446_24472 = state_24424__$1;
(statearr_24446_24472[(1)] = (11));

} else {
var statearr_24447_24473 = state_24424__$1;
(statearr_24447_24473[(1)] = (12));

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
});})(c__14088__auto___24455,ch))
;
return ((function (switch__13964__auto__,c__14088__auto___24455,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__13965__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__13965__auto____0 = (function (){
var statearr_24451 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24451[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__13965__auto__);

(statearr_24451[(1)] = (1));

return statearr_24451;
});
var figwheel$client$file_reloader_plugin_$_state_machine__13965__auto____1 = (function (state_24424){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_24424);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e24452){if((e24452 instanceof Object)){
var ex__13968__auto__ = e24452;
var statearr_24453_24474 = state_24424;
(statearr_24453_24474[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24424);

return cljs.core.cst$kw$recur;
} else {
throw e24452;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__24475 = state_24424;
state_24424 = G__24475;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__13965__auto__ = function(state_24424){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__13965__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__13965__auto____1.call(this,state_24424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__13965__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__13965__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___24455,ch))
})();
var state__14090__auto__ = (function (){var statearr_24454 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_24454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___24455);

return statearr_24454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___24455,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__24476_SHARP_){
return cljs.core.not(cljs.core.re_matches(/.*eval_javascript_STAR__STAR_.*/,p1__24476_SHARP_));
}),clojure.string.split_lines(stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_())){
return cljs.core.cst$kw$chrome;
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return cljs.core.cst$kw$safari;
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return cljs.core.cst$kw$chrome;
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return cljs.core.cst$kw$firefox;
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return cljs.core.cst$kw$ie;
} else {
return null;
}
}
}
}
}
});
var base_path_24485 = figwheel.client.utils.base_url_path();
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24485){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_();

var result_value = figwheel.client.utils.eval_helper(code,opts);
var G__24484 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,cljs.core.cst$kw$success,cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product(),cljs.core.cst$kw$value,result_value], null);
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__24484) : result_handler.call(null,G__24484));
}catch (e24481){if((e24481 instanceof Error)){
var e = e24481;
var G__24482 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product(),cljs.core.cst$kw$stacktrace,clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",figwheel.client.truncate_stack_trace(e.stack)),cljs.core.cst$kw$base_DASH_path,base_path_24485], null);
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__24482) : result_handler.call(null,G__24482));
} else {
var e = e24481;
var G__24483 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product(),cljs.core.cst$kw$value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.cst$kw$stacktrace,"No stacktrace available."], null);
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__24483) : result_handler.call(null,G__24483));

}
}finally {figwheel.client.enable_repl_print_BANG_();
}});})(base_path_24485))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24486){
var map__24495 = p__24486;
var map__24495__$1 = ((((!((map__24495 == null)))?((((map__24495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24495):map__24495);
var opts = map__24495__$1;
var build_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24495__$1,cljs.core.cst$kw$build_DASH_id);
return ((function (map__24495,map__24495__$1,opts,build_id){
return (function (p__24497){
var vec__24498 = p__24497;
var seq__24499 = cljs.core.seq(vec__24498);
var first__24500 = cljs.core.first(seq__24499);
var seq__24499__$1 = cljs.core.next(seq__24499);
var map__24501 = first__24500;
var map__24501__$1 = ((((!((map__24501 == null)))?((((map__24501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24501):map__24501);
var msg = map__24501__$1;
var msg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24501__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__24499__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$repl_DASH_eval,msg_name)){
figwheel.client.ensure_cljs_user();

return figwheel.client.eval_javascript_STAR__STAR_(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24498,seq__24499,first__24500,seq__24499__$1,map__24501,map__24501__$1,msg,msg_name,_,map__24495,map__24495__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$figwheel_DASH_event,"callback",cljs.core.cst$kw$callback_DASH_name,cljs.core.cst$kw$callback_DASH_name.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.cst$kw$content,res], null));
});})(vec__24498,seq__24499,first__24500,seq__24499__$1,map__24501,map__24501__$1,msg,msg_name,_,map__24495,map__24495__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24495,map__24495__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24509){
var vec__24510 = p__24509;
var seq__24511 = cljs.core.seq(vec__24510);
var first__24512 = cljs.core.first(seq__24511);
var seq__24511__$1 = cljs.core.next(seq__24511);
var map__24513 = first__24512;
var map__24513__$1 = ((((!((map__24513 == null)))?((((map__24513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24513):map__24513);
var msg = map__24513__$1;
var msg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24513__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__24511__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(msg_name,cljs.core.cst$kw$css_DASH_files_DASH_changed)){
return figwheel.client.file_reloading.reload_css_files(opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24515){
var map__24531 = p__24515;
var map__24531__$1 = ((((!((map__24531 == null)))?((((map__24531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24531):map__24531);
var on_compile_warning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24531__$1,cljs.core.cst$kw$on_DASH_compile_DASH_warning);
var on_compile_fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24531__$1,cljs.core.cst$kw$on_DASH_compile_DASH_fail);
return ((function (map__24531,map__24531__$1,on_compile_warning,on_compile_fail){
return (function (p__24533){
var vec__24534 = p__24533;
var seq__24535 = cljs.core.seq(vec__24534);
var first__24536 = cljs.core.first(seq__24535);
var seq__24535__$1 = cljs.core.next(seq__24535);
var map__24537 = first__24536;
var map__24537__$1 = ((((!((map__24537 == null)))?((((map__24537.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24537.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24537):map__24537);
var msg = map__24537__$1;
var msg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24537__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__24535__$1;
var pred__24539 = cljs.core._EQ_;
var expr__24540 = msg_name;
if(cljs.core.truth_((function (){var G__24542 = cljs.core.cst$kw$compile_DASH_warning;
var G__24543 = expr__24540;
return (pred__24539.cljs$core$IFn$_invoke$arity$2 ? pred__24539.cljs$core$IFn$_invoke$arity$2(G__24542,G__24543) : pred__24539.call(null,G__24542,G__24543));
})())){
return (on_compile_warning.cljs$core$IFn$_invoke$arity$1 ? on_compile_warning.cljs$core$IFn$_invoke$arity$1(msg) : on_compile_warning.call(null,msg));
} else {
if(cljs.core.truth_((function (){var G__24544 = cljs.core.cst$kw$compile_DASH_failed;
var G__24545 = expr__24540;
return (pred__24539.cljs$core$IFn$_invoke$arity$2 ? pred__24539.cljs$core$IFn$_invoke$arity$2(G__24544,G__24545) : pred__24539.call(null,G__24544,G__24545));
})())){
return (on_compile_fail.cljs$core$IFn$_invoke$arity$1 ? on_compile_fail.cljs$core$IFn$_invoke$arity$1(msg) : on_compile_fail.call(null,msg));
} else {
return null;
}
}
});
;})(map__24531,map__24531__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(cljs.core.cst$kw$auto_DASH_jump_DASH_to_DASH_source_DASH_on_DASH_error.cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line(error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$compile_DASH_failed,null,cljs.core.cst$kw$compile_DASH_warning,null,cljs.core.cst$kw$files_DASH_changed,null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$msg_DASH_name,msg_hist);
var msg = cljs.core.first(msg_hist);
var c__14088__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto__,msg_hist,msg_names,msg){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto__,msg_hist,msg_names,msg){
return (function (state_24772){
var state_val_24773 = (state_24772[(1)]);
if((state_val_24773 === (7))){
var inst_24692 = (state_24772[(2)]);
var state_24772__$1 = state_24772;
if(cljs.core.truth_(inst_24692)){
var statearr_24774_24824 = state_24772__$1;
(statearr_24774_24824[(1)] = (8));

} else {
var statearr_24775_24825 = state_24772__$1;
(statearr_24775_24825[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (20))){
var inst_24766 = (state_24772[(2)]);
var state_24772__$1 = state_24772;
var statearr_24776_24826 = state_24772__$1;
(statearr_24776_24826[(2)] = inst_24766);

(statearr_24776_24826[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (27))){
var inst_24762 = (state_24772[(2)]);
var state_24772__$1 = state_24772;
var statearr_24777_24827 = state_24772__$1;
(statearr_24777_24827[(2)] = inst_24762);

(statearr_24777_24827[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (1))){
var inst_24685 = figwheel.client.reload_file_state_QMARK_(msg_names,opts);
var state_24772__$1 = state_24772;
if(cljs.core.truth_(inst_24685)){
var statearr_24778_24828 = state_24772__$1;
(statearr_24778_24828[(1)] = (2));

} else {
var statearr_24779_24829 = state_24772__$1;
(statearr_24779_24829[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (24))){
var inst_24764 = (state_24772[(2)]);
var state_24772__$1 = state_24772;
var statearr_24780_24830 = state_24772__$1;
(statearr_24780_24830[(2)] = inst_24764);

(statearr_24780_24830[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (4))){
var inst_24770 = (state_24772[(2)]);
var state_24772__$1 = state_24772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24772__$1,inst_24770);
} else {
if((state_val_24773 === (15))){
var inst_24768 = (state_24772[(2)]);
var state_24772__$1 = state_24772;
var statearr_24781_24831 = state_24772__$1;
(statearr_24781_24831[(2)] = inst_24768);

(statearr_24781_24831[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (21))){
var inst_24721 = (state_24772[(2)]);
var inst_24722 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_24723 = figwheel.client.auto_jump_to_error(opts,inst_24722);
var state_24772__$1 = (function (){var statearr_24782 = state_24772;
(statearr_24782[(7)] = inst_24721);

return statearr_24782;
})();
var statearr_24783_24832 = state_24772__$1;
(statearr_24783_24832[(2)] = inst_24723);

(statearr_24783_24832[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (31))){
var inst_24751 = figwheel.client.css_loaded_state_QMARK_(msg_names);
var state_24772__$1 = state_24772;
if(cljs.core.truth_(inst_24751)){
var statearr_24784_24833 = state_24772__$1;
(statearr_24784_24833[(1)] = (34));

} else {
var statearr_24785_24834 = state_24772__$1;
(statearr_24785_24834[(1)] = (35));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (32))){
var inst_24760 = (state_24772[(2)]);
var state_24772__$1 = state_24772;
var statearr_24786_24835 = state_24772__$1;
(statearr_24786_24835[(2)] = inst_24760);

(statearr_24786_24835[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (33))){
var inst_24747 = (state_24772[(2)]);
var inst_24748 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_24749 = figwheel.client.auto_jump_to_error(opts,inst_24748);
var state_24772__$1 = (function (){var statearr_24787 = state_24772;
(statearr_24787[(8)] = inst_24747);

return statearr_24787;
})();
var statearr_24788_24836 = state_24772__$1;
(statearr_24788_24836[(2)] = inst_24749);

(statearr_24788_24836[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (13))){
var inst_24706 = figwheel.client.heads_up.clear();
var state_24772__$1 = state_24772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24772__$1,(16),inst_24706);
} else {
if((state_val_24773 === (22))){
var inst_24727 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_24728 = figwheel.client.heads_up.append_warning_message(inst_24727);
var state_24772__$1 = state_24772;
var statearr_24789_24837 = state_24772__$1;
(statearr_24789_24837[(2)] = inst_24728);

(statearr_24789_24837[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (36))){
var inst_24758 = (state_24772[(2)]);
var state_24772__$1 = state_24772;
var statearr_24790_24838 = state_24772__$1;
(statearr_24790_24838[(2)] = inst_24758);

(statearr_24790_24838[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (29))){
var inst_24738 = (state_24772[(2)]);
var inst_24739 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_24740 = figwheel.client.auto_jump_to_error(opts,inst_24739);
var state_24772__$1 = (function (){var statearr_24791 = state_24772;
(statearr_24791[(9)] = inst_24738);

return statearr_24791;
})();
var statearr_24792_24839 = state_24772__$1;
(statearr_24792_24839[(2)] = inst_24740);

(statearr_24792_24839[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (6))){
var inst_24687 = (state_24772[(10)]);
var state_24772__$1 = state_24772;
var statearr_24793_24840 = state_24772__$1;
(statearr_24793_24840[(2)] = inst_24687);

(statearr_24793_24840[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (28))){
var inst_24734 = (state_24772[(2)]);
var inst_24735 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_24736 = figwheel.client.heads_up.display_warning(inst_24735);
var state_24772__$1 = (function (){var statearr_24794 = state_24772;
(statearr_24794[(11)] = inst_24734);

return statearr_24794;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24772__$1,(29),inst_24736);
} else {
if((state_val_24773 === (25))){
var inst_24732 = figwheel.client.heads_up.clear();
var state_24772__$1 = state_24772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24772__$1,(28),inst_24732);
} else {
if((state_val_24773 === (34))){
var inst_24753 = figwheel.client.heads_up.flash_loaded();
var state_24772__$1 = state_24772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24772__$1,(37),inst_24753);
} else {
if((state_val_24773 === (17))){
var inst_24712 = (state_24772[(2)]);
var inst_24713 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_24714 = figwheel.client.auto_jump_to_error(opts,inst_24713);
var state_24772__$1 = (function (){var statearr_24795 = state_24772;
(statearr_24795[(12)] = inst_24712);

return statearr_24795;
})();
var statearr_24796_24841 = state_24772__$1;
(statearr_24796_24841[(2)] = inst_24714);

(statearr_24796_24841[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (3))){
var inst_24704 = figwheel.client.compile_refail_state_QMARK_(msg_names);
var state_24772__$1 = state_24772;
if(cljs.core.truth_(inst_24704)){
var statearr_24797_24842 = state_24772__$1;
(statearr_24797_24842[(1)] = (13));

} else {
var statearr_24798_24843 = state_24772__$1;
(statearr_24798_24843[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (12))){
var inst_24700 = (state_24772[(2)]);
var state_24772__$1 = state_24772;
var statearr_24799_24844 = state_24772__$1;
(statearr_24799_24844[(2)] = inst_24700);

(statearr_24799_24844[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (2))){
var inst_24687 = (state_24772[(10)]);
var inst_24687__$1 = figwheel.client.autoload_QMARK_();
var state_24772__$1 = (function (){var statearr_24800 = state_24772;
(statearr_24800[(10)] = inst_24687__$1);

return statearr_24800;
})();
if(cljs.core.truth_(inst_24687__$1)){
var statearr_24801_24845 = state_24772__$1;
(statearr_24801_24845[(1)] = (5));

} else {
var statearr_24802_24846 = state_24772__$1;
(statearr_24802_24846[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (23))){
var inst_24730 = figwheel.client.rewarning_state_QMARK_(msg_names);
var state_24772__$1 = state_24772;
if(cljs.core.truth_(inst_24730)){
var statearr_24803_24847 = state_24772__$1;
(statearr_24803_24847[(1)] = (25));

} else {
var statearr_24804_24848 = state_24772__$1;
(statearr_24804_24848[(1)] = (26));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (35))){
var state_24772__$1 = state_24772;
var statearr_24805_24849 = state_24772__$1;
(statearr_24805_24849[(2)] = null);

(statearr_24805_24849[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (19))){
var inst_24725 = figwheel.client.warning_append_state_QMARK_(msg_names);
var state_24772__$1 = state_24772;
if(cljs.core.truth_(inst_24725)){
var statearr_24806_24850 = state_24772__$1;
(statearr_24806_24850[(1)] = (22));

} else {
var statearr_24807_24851 = state_24772__$1;
(statearr_24807_24851[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (11))){
var inst_24696 = (state_24772[(2)]);
var state_24772__$1 = state_24772;
var statearr_24808_24852 = state_24772__$1;
(statearr_24808_24852[(2)] = inst_24696);

(statearr_24808_24852[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (9))){
var inst_24698 = figwheel.client.heads_up.clear();
var state_24772__$1 = state_24772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24772__$1,(12),inst_24698);
} else {
if((state_val_24773 === (5))){
var inst_24689 = cljs.core.cst$kw$autoload.cljs$core$IFn$_invoke$arity$1(opts);
var state_24772__$1 = state_24772;
var statearr_24809_24853 = state_24772__$1;
(statearr_24809_24853[(2)] = inst_24689);

(statearr_24809_24853[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (14))){
var inst_24716 = figwheel.client.compile_fail_state_QMARK_(msg_names);
var state_24772__$1 = state_24772;
if(cljs.core.truth_(inst_24716)){
var statearr_24810_24854 = state_24772__$1;
(statearr_24810_24854[(1)] = (18));

} else {
var statearr_24811_24855 = state_24772__$1;
(statearr_24811_24855[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (26))){
var inst_24742 = figwheel.client.warning_state_QMARK_(msg_names);
var state_24772__$1 = state_24772;
if(cljs.core.truth_(inst_24742)){
var statearr_24812_24856 = state_24772__$1;
(statearr_24812_24856[(1)] = (30));

} else {
var statearr_24813_24857 = state_24772__$1;
(statearr_24813_24857[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (16))){
var inst_24708 = (state_24772[(2)]);
var inst_24709 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_24710 = figwheel.client.heads_up.display_exception(inst_24709);
var state_24772__$1 = (function (){var statearr_24814 = state_24772;
(statearr_24814[(13)] = inst_24708);

return statearr_24814;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24772__$1,(17),inst_24710);
} else {
if((state_val_24773 === (30))){
var inst_24744 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_24745 = figwheel.client.heads_up.display_warning(inst_24744);
var state_24772__$1 = state_24772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24772__$1,(33),inst_24745);
} else {
if((state_val_24773 === (10))){
var inst_24702 = (state_24772[(2)]);
var state_24772__$1 = state_24772;
var statearr_24815_24858 = state_24772__$1;
(statearr_24815_24858[(2)] = inst_24702);

(statearr_24815_24858[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (18))){
var inst_24718 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_24719 = figwheel.client.heads_up.display_exception(inst_24718);
var state_24772__$1 = state_24772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24772__$1,(21),inst_24719);
} else {
if((state_val_24773 === (37))){
var inst_24755 = (state_24772[(2)]);
var state_24772__$1 = state_24772;
var statearr_24816_24859 = state_24772__$1;
(statearr_24816_24859[(2)] = inst_24755);

(statearr_24816_24859[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24773 === (8))){
var inst_24694 = figwheel.client.heads_up.flash_loaded();
var state_24772__$1 = state_24772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24772__$1,(11),inst_24694);
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
});})(c__14088__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__13964__auto__,c__14088__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13965__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13965__auto____0 = (function (){
var statearr_24820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24820[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13965__auto__);

(statearr_24820[(1)] = (1));

return statearr_24820;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13965__auto____1 = (function (state_24772){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_24772);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e24821){if((e24821 instanceof Object)){
var ex__13968__auto__ = e24821;
var statearr_24822_24860 = state_24772;
(statearr_24822_24860[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24772);

return cljs.core.cst$kw$recur;
} else {
throw e24821;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__24861 = state_24772;
state_24772 = G__24861;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13965__auto__ = function(state_24772){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13965__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13965__auto____1.call(this,state_24772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13965__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13965__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto__,msg_hist,msg_names,msg))
})();
var state__14090__auto__ = (function (){var statearr_24823 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_24823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto__);

return statearr_24823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto__,msg_hist,msg_names,msg))
);

return c__14088__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__14088__auto___24924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___24924,ch){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___24924,ch){
return (function (state_24907){
var state_val_24908 = (state_24907[(1)]);
if((state_val_24908 === (1))){
var state_24907__$1 = state_24907;
var statearr_24909_24925 = state_24907__$1;
(statearr_24909_24925[(2)] = null);

(statearr_24909_24925[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24908 === (2))){
var state_24907__$1 = state_24907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24907__$1,(4),ch);
} else {
if((state_val_24908 === (3))){
var inst_24905 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24907__$1,inst_24905);
} else {
if((state_val_24908 === (4))){
var inst_24895 = (state_24907[(7)]);
var inst_24895__$1 = (state_24907[(2)]);
var state_24907__$1 = (function (){var statearr_24910 = state_24907;
(statearr_24910[(7)] = inst_24895__$1);

return statearr_24910;
})();
if(cljs.core.truth_(inst_24895__$1)){
var statearr_24911_24926 = state_24907__$1;
(statearr_24911_24926[(1)] = (5));

} else {
var statearr_24912_24927 = state_24907__$1;
(statearr_24912_24927[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24908 === (5))){
var inst_24895 = (state_24907[(7)]);
var inst_24897 = figwheel.client.heads_up_plugin_msg_handler(opts,inst_24895);
var state_24907__$1 = state_24907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24907__$1,(8),inst_24897);
} else {
if((state_val_24908 === (6))){
var state_24907__$1 = state_24907;
var statearr_24913_24928 = state_24907__$1;
(statearr_24913_24928[(2)] = null);

(statearr_24913_24928[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24908 === (7))){
var inst_24903 = (state_24907[(2)]);
var state_24907__$1 = state_24907;
var statearr_24914_24929 = state_24907__$1;
(statearr_24914_24929[(2)] = inst_24903);

(statearr_24914_24929[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24908 === (8))){
var inst_24899 = (state_24907[(2)]);
var state_24907__$1 = (function (){var statearr_24915 = state_24907;
(statearr_24915[(8)] = inst_24899);

return statearr_24915;
})();
var statearr_24916_24930 = state_24907__$1;
(statearr_24916_24930[(2)] = null);

(statearr_24916_24930[(1)] = (2));


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
});})(c__14088__auto___24924,ch))
;
return ((function (switch__13964__auto__,c__14088__auto___24924,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__13965__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__13965__auto____0 = (function (){
var statearr_24920 = [null,null,null,null,null,null,null,null,null];
(statearr_24920[(0)] = figwheel$client$heads_up_plugin_$_state_machine__13965__auto__);

(statearr_24920[(1)] = (1));

return statearr_24920;
});
var figwheel$client$heads_up_plugin_$_state_machine__13965__auto____1 = (function (state_24907){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_24907);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e24921){if((e24921 instanceof Object)){
var ex__13968__auto__ = e24921;
var statearr_24922_24931 = state_24907;
(statearr_24922_24931[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24907);

return cljs.core.cst$kw$recur;
} else {
throw e24921;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__24932 = state_24907;
state_24907 = G__24932;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__13965__auto__ = function(state_24907){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__13965__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__13965__auto____1.call(this,state_24907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__13965__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__13965__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___24924,ch))
})();
var state__14090__auto__ = (function (){var statearr_24923 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_24923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___24924);

return statearr_24923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___24924,ch))
);


figwheel.client.heads_up.ensure_container();

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count(cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$project_DASH_id,cljs.core.take.cljs$core$IFn$_invoke$arity$2((5),msg_hist)))))){
figwheel.client.socket.close_BANG_();

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(cljs.core.cst$kw$heads_DASH_up_DASH_display.cljs$core$IFn$_invoke$arity$1(opts))){
var c__14088__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto__){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto__){
return (function (state_24953){
var state_val_24954 = (state_24953[(1)]);
if((state_val_24954 === (1))){
var inst_24948 = cljs.core.async.timeout((3000));
var state_24953__$1 = state_24953;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24953__$1,(2),inst_24948);
} else {
if((state_val_24954 === (2))){
var inst_24950 = (state_24953[(2)]);
var inst_24951 = figwheel.client.heads_up.display_system_warning("Connection from different project","Shutting connection down!!!!!");
var state_24953__$1 = (function (){var statearr_24955 = state_24953;
(statearr_24955[(7)] = inst_24950);

return statearr_24955;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24953__$1,inst_24951);
} else {
return null;
}
}
});})(c__14088__auto__))
;
return ((function (switch__13964__auto__,c__14088__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__13965__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__13965__auto____0 = (function (){
var statearr_24959 = [null,null,null,null,null,null,null,null];
(statearr_24959[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__13965__auto__);

(statearr_24959[(1)] = (1));

return statearr_24959;
});
var figwheel$client$enforce_project_plugin_$_state_machine__13965__auto____1 = (function (state_24953){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_24953);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e24960){if((e24960 instanceof Object)){
var ex__13968__auto__ = e24960;
var statearr_24961_24963 = state_24953;
(statearr_24961_24963[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24953);

return cljs.core.cst$kw$recur;
} else {
throw e24960;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__24964 = state_24953;
state_24953 = G__24964;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__13965__auto__ = function(state_24953){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__13965__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__13965__auto____1.call(this,state_24953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__13965__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__13965__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto__))
})();
var state__14090__auto__ = (function (){var statearr_24962 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_24962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto__);

return statearr_24962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto__))
);

return c__14088__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = cljs.core.cst$kw$figwheel_DASH_version.cljs$core$IFn$_invoke$arity$1(cljs.core.first(msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_();

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(cljs.core.cst$kw$heads_DASH_up_DASH_display.cljs$core$IFn$_invoke$arity$1(opts))){
var c__14088__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto__,figwheel_version,temp__4657__auto__){
return (function (state_24987){
var state_val_24988 = (state_24987[(1)]);
if((state_val_24988 === (1))){
var inst_24981 = cljs.core.async.timeout((2000));
var state_24987__$1 = state_24987;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24987__$1,(2),inst_24981);
} else {
if((state_val_24988 === (2))){
var inst_24983 = (state_24987[(2)]);
var inst_24984 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_24985 = figwheel.client.heads_up.display_system_warning("Figwheel Client and Server have different versions!!",inst_24984);
var state_24987__$1 = (function (){var statearr_24989 = state_24987;
(statearr_24989[(7)] = inst_24983);

return statearr_24989;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24987__$1,inst_24985);
} else {
return null;
}
}
});})(c__14088__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__13964__auto__,c__14088__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13965__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13965__auto____0 = (function (){
var statearr_24993 = [null,null,null,null,null,null,null,null];
(statearr_24993[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13965__auto__);

(statearr_24993[(1)] = (1));

return statearr_24993;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13965__auto____1 = (function (state_24987){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_24987);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e24994){if((e24994 instanceof Object)){
var ex__13968__auto__ = e24994;
var statearr_24995_24997 = state_24987;
(statearr_24995_24997[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24987);

return cljs.core.cst$kw$recur;
} else {
throw e24994;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__24998 = state_24987;
state_24987 = G__24998;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13965__auto__ = function(state_24987){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13965__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13965__auto____1.call(this,state_24987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13965__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13965__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto__,figwheel_version,temp__4657__auto__))
})();
var state__14090__auto__ = (function (){var statearr_24996 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_24996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto__);

return statearr_24996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto__,figwheel_version,temp__4657__auto__))
);

return c__14088__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__24999){
var map__25003 = p__24999;
var map__25003__$1 = ((((!((map__25003 == null)))?((((map__25003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25003):map__25003);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25003__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25003__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25003__$1,cljs.core.cst$kw$column);
var G__25005 = "";
var G__25005__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__25005),cljs.core.str("file "),cljs.core.str(file)].join(''):G__25005);
var G__25005__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__25005__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__25005__$1);
if(cljs.core.truth_((function (){var and__6397__auto__ = line;
if(cljs.core.truth_(and__6397__auto__)){
return column;
} else {
return and__6397__auto__;
}
})())){
return [cljs.core.str(G__25005__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__25005__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25006){
var map__25013 = p__25006;
var map__25013__$1 = ((((!((map__25013 == null)))?((((map__25013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25013):map__25013);
var ed = map__25013__$1;
var formatted_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25013__$1,cljs.core.cst$kw$formatted_DASH_exception);
var exception_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25013__$1,cljs.core.cst$kw$exception_DASH_data);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25013__$1,cljs.core.cst$kw$cause);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: Compile Exception");

var seq__25015_25019 = cljs.core.seq((figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(exception_data) : figwheel.client.format_messages.call(null,exception_data)));
var chunk__25016_25020 = null;
var count__25017_25021 = (0);
var i__25018_25022 = (0);
while(true){
if((i__25018_25022 < count__25017_25021)){
var msg_25023 = chunk__25016_25020.cljs$core$IIndexed$_nth$arity$2(null,i__25018_25022);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,msg_25023);

var G__25024 = seq__25015_25019;
var G__25025 = chunk__25016_25020;
var G__25026 = count__25017_25021;
var G__25027 = (i__25018_25022 + (1));
seq__25015_25019 = G__25024;
chunk__25016_25020 = G__25025;
count__25017_25021 = G__25026;
i__25018_25022 = G__25027;
continue;
} else {
var temp__4657__auto___25028 = cljs.core.seq(seq__25015_25019);
if(temp__4657__auto___25028){
var seq__25015_25029__$1 = temp__4657__auto___25028;
if(cljs.core.chunked_seq_QMARK_(seq__25015_25029__$1)){
var c__7220__auto___25030 = cljs.core.chunk_first(seq__25015_25029__$1);
var G__25031 = cljs.core.chunk_rest(seq__25015_25029__$1);
var G__25032 = c__7220__auto___25030;
var G__25033 = cljs.core.count(c__7220__auto___25030);
var G__25034 = (0);
seq__25015_25019 = G__25031;
chunk__25016_25020 = G__25032;
count__25017_25021 = G__25033;
i__25018_25022 = G__25034;
continue;
} else {
var msg_25035 = cljs.core.first(seq__25015_25029__$1);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,msg_25035);

var G__25036 = cljs.core.next(seq__25015_25029__$1);
var G__25037 = null;
var G__25038 = (0);
var G__25039 = (0);
seq__25015_25019 = G__25036;
chunk__25016_25020 = G__25037;
count__25017_25021 = G__25038;
i__25018_25022 = G__25039;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column(ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25040){
var map__25043 = p__25040;
var map__25043__$1 = ((((!((map__25043 == null)))?((((map__25043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25043):map__25043);
var w = map__25043__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25043__$1,cljs.core.cst$kw$message);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warn,[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column(message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: loaded CSS files");

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$file,files)], 0)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$on_DASH_compile_DASH_warning,cljs.core.cst$kw$on_DASH_jsload,cljs.core.cst$kw$reload_DASH_dependents,cljs.core.cst$kw$on_DASH_compile_DASH_fail,cljs.core.cst$kw$debug,cljs.core.cst$kw$heads_DASH_up_DASH_display,cljs.core.cst$kw$websocket_DASH_url,cljs.core.cst$kw$auto_DASH_jump_DASH_to_DASH_source_DASH_on_DASH_error,cljs.core.cst$kw$before_DASH_jsload,cljs.core.cst$kw$load_DASH_warninged_DASH_code,cljs.core.cst$kw$eval_DASH_fn,cljs.core.cst$kw$retry_DASH_count,cljs.core.cst$kw$autoload,cljs.core.cst$kw$on_DASH_cssload],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},cljs.core.cst$sym$figwheel$client_SLASH_default_DASH_on_DASH_compile_DASH_warning,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$figwheel$client,cljs.core.cst$sym$default_DASH_on_DASH_compile_DASH_warning,"/home/jay/_project/personal/demo/clsj/qdemo/snakeq/target/cljsbuild-compiler-1/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$message], null),cljs.core.cst$kw$as,cljs.core.cst$sym$w], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},cljs.core.cst$sym$figwheel$client_SLASH_default_DASH_on_DASH_compile_DASH_fail,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$figwheel$client,cljs.core.cst$sym$default_DASH_on_DASH_compile_DASH_fail,"/home/jay/_project/personal/demo/clsj/qdemo/snakeq/target/cljsbuild-compiler-1/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$formatted_DASH_exception,cljs.core.cst$sym$exception_DASH_data,cljs.core.cst$sym$cause], null),cljs.core.cst$kw$as,cljs.core.cst$sym$ed], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(cljs.core.cst$kw$jsload_DASH_callback.cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,cljs.core.cst$kw$on_DASH_jsload,cljs.core.cst$kw$jsload_DASH_callback.cljs$core$IFn$_invoke$arity$1(config)),cljs.core.cst$kw$jsload_DASH_callback);
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$websocket_DASH_url], null),(function (x){
return clojure.string.replace(clojure.string.replace(x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$enforce_DASH_project_DASH_plugin,figwheel.client.enforce_project_plugin,cljs.core.cst$kw$enforce_DASH_figwheel_DASH_version_DASH_plugin,figwheel.client.enforce_figwheel_version_plugin,cljs.core.cst$kw$file_DASH_reloader_DASH_plugin,figwheel.client.file_reloader_plugin,cljs.core.cst$kw$comp_DASH_fail_DASH_warning_DASH_plugin,figwheel.client.compile_fail_warning_plugin,cljs.core.cst$kw$css_DASH_reloader_DASH_plugin,figwheel.client.css_reloader_plugin,cljs.core.cst$kw$repl_DASH_plugin,figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not(figwheel.client.utils.html_env_QMARK_()))?cljs.core.select_keys(base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$file_DASH_reloader_DASH_plugin,cljs.core.cst$kw$comp_DASH_fail_DASH_warning_DASH_plugin,cljs.core.cst$kw$repl_DASH_plugin], null)):base);
var base__$2 = ((cljs.core.cst$kw$autoload.cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(base__$1,cljs.core.cst$kw$file_DASH_reloader_DASH_plugin):base__$1);
if(cljs.core.truth_((function (){var and__6397__auto__ = cljs.core.cst$kw$heads_DASH_up_DASH_display.cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__6397__auto__)){
return figwheel.client.utils.html_env_QMARK_();
} else {
return and__6397__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base__$2,cljs.core.cst$kw$heads_DASH_up_DASH_display_DASH_plugin,figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch(figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
var G__25046 = cljs.core.first(msg_hist);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__25046) : callback.call(null,G__25046));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25057 = cljs.core.seq(plugins);
var chunk__25058 = null;
var count__25059 = (0);
var i__25060 = (0);
while(true){
if((i__25060 < count__25059)){
var vec__25061 = chunk__25058.cljs$core$IIndexed$_nth$arity$2(null,i__25060);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25061,(0),null);
var plugin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25061,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25067 = (plugin.cljs$core$IFn$_invoke$arity$1 ? plugin.cljs$core$IFn$_invoke$arity$1(system_options) : plugin.call(null,system_options));
cljs.core.add_watch(figwheel.client.socket.message_history_atom,k,((function (seq__25057,chunk__25058,count__25059,i__25060,pl_25067,vec__25061,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return (pl_25067.cljs$core$IFn$_invoke$arity$1 ? pl_25067.cljs$core$IFn$_invoke$arity$1(msg_hist) : pl_25067.call(null,msg_hist));
});})(seq__25057,chunk__25058,count__25059,i__25060,pl_25067,vec__25061,k,plugin))
);
} else {
}

var G__25068 = seq__25057;
var G__25069 = chunk__25058;
var G__25070 = count__25059;
var G__25071 = (i__25060 + (1));
seq__25057 = G__25068;
chunk__25058 = G__25069;
count__25059 = G__25070;
i__25060 = G__25071;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__25057);
if(temp__4657__auto__){
var seq__25057__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__25057__$1)){
var c__7220__auto__ = cljs.core.chunk_first(seq__25057__$1);
var G__25072 = cljs.core.chunk_rest(seq__25057__$1);
var G__25073 = c__7220__auto__;
var G__25074 = cljs.core.count(c__7220__auto__);
var G__25075 = (0);
seq__25057 = G__25072;
chunk__25058 = G__25073;
count__25059 = G__25074;
i__25060 = G__25075;
continue;
} else {
var vec__25064 = cljs.core.first(seq__25057__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25064,(0),null);
var plugin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25064,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25076 = (plugin.cljs$core$IFn$_invoke$arity$1 ? plugin.cljs$core$IFn$_invoke$arity$1(system_options) : plugin.call(null,system_options));
cljs.core.add_watch(figwheel.client.socket.message_history_atom,k,((function (seq__25057,chunk__25058,count__25059,i__25060,pl_25076,vec__25064,k,plugin,seq__25057__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return (pl_25076.cljs$core$IFn$_invoke$arity$1 ? pl_25076.cljs$core$IFn$_invoke$arity$1(msg_hist) : pl_25076.call(null,msg_hist));
});})(seq__25057,chunk__25058,count__25059,i__25060,pl_25076,vec__25064,k,plugin,seq__25057__$1,temp__4657__auto__))
);
} else {
}

var G__25077 = cljs.core.next(seq__25057__$1);
var G__25078 = null;
var G__25079 = (0);
var G__25080 = (0);
seq__25057 = G__25077;
chunk__25058 = G__25078;
count__25059 = G__25079;
i__25060 = G__25080;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25081 = [];
var len__7484__auto___25089 = arguments.length;
var i__7485__auto___25090 = (0);
while(true){
if((i__7485__auto___25090 < len__7484__auto___25089)){
args25081.push((arguments[i__7485__auto___25090]));

var G__25091 = (i__7485__auto___25090 + (1));
i__7485__auto___25090 = G__25091;
continue;
} else {
}
break;
}

var G__25083 = args25081.length;
switch (G__25083) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25081.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = (function (){var G__25084 = (function (){
var plugins_SINGLEQUOTE_ = cljs.core.cst$kw$plugins.cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = cljs.core.cst$kw$merge_DASH_plugins.cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template(figwheel.client.handle_deprecated_jsload_callback(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([figwheel.client.config_defaults,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$plugins,cljs.core.array_seq([cljs.core.cst$kw$merge_DASH_plugins], 0))], 0))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([figwheel.client.base_plugins(system_options),merge_plugins], 0)));
figwheel.client.utils._STAR_print_debug_STAR_ = cljs.core.cst$kw$debug.cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_();

figwheel.client.add_plugins(plugins,system_options);

figwheel.client.file_reloading.patch_goog_base();

var seq__25085_25093 = cljs.core.seq(cljs.core.cst$kw$initial_DASH_messages.cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__25086_25094 = null;
var count__25087_25095 = (0);
var i__25088_25096 = (0);
while(true){
if((i__25088_25096 < count__25087_25095)){
var msg_25097 = chunk__25086_25094.cljs$core$IIndexed$_nth$arity$2(null,i__25088_25096);
figwheel.client.socket.handle_incoming_message(msg_25097);

var G__25098 = seq__25085_25093;
var G__25099 = chunk__25086_25094;
var G__25100 = count__25087_25095;
var G__25101 = (i__25088_25096 + (1));
seq__25085_25093 = G__25098;
chunk__25086_25094 = G__25099;
count__25087_25095 = G__25100;
i__25088_25096 = G__25101;
continue;
} else {
var temp__4657__auto___25102 = cljs.core.seq(seq__25085_25093);
if(temp__4657__auto___25102){
var seq__25085_25103__$1 = temp__4657__auto___25102;
if(cljs.core.chunked_seq_QMARK_(seq__25085_25103__$1)){
var c__7220__auto___25104 = cljs.core.chunk_first(seq__25085_25103__$1);
var G__25105 = cljs.core.chunk_rest(seq__25085_25103__$1);
var G__25106 = c__7220__auto___25104;
var G__25107 = cljs.core.count(c__7220__auto___25104);
var G__25108 = (0);
seq__25085_25093 = G__25105;
chunk__25086_25094 = G__25106;
count__25087_25095 = G__25107;
i__25088_25096 = G__25108;
continue;
} else {
var msg_25109 = cljs.core.first(seq__25085_25103__$1);
figwheel.client.socket.handle_incoming_message(msg_25109);

var G__25110 = cljs.core.next(seq__25085_25103__$1);
var G__25111 = null;
var G__25112 = (0);
var G__25113 = (0);
seq__25085_25093 = G__25110;
chunk__25086_25094 = G__25111;
count__25087_25095 = G__25112;
i__25088_25096 = G__25113;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open(system_options);
});
return setTimeout(G__25084);
})();
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__7491__auto__ = [];
var len__7484__auto___25118 = arguments.length;
var i__7485__auto___25119 = (0);
while(true){
if((i__7485__auto___25119 < len__7484__auto___25118)){
args__7491__auto__.push((arguments[i__7485__auto___25119]));

var G__25120 = (i__7485__auto___25119 + (1));
i__7485__auto___25119 = G__25120;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25115){
var map__25116 = p__25115;
var map__25116__$1 = ((((!((map__25116 == null)))?((((map__25116.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25116.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25116):map__25116);
var opts = map__25116__$1;
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1(opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25114){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25114));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string(goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e25122){if((e25122 instanceof Error)){
var e = e25122;
(cljs.core._STAR_print_err_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_err_fn_STAR_.cljs$core$IFn$_invoke$arity$1("Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment") : cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment"));

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$autoload,false], null);
} else {
throw e25122;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_();

var config = figwheel.client.fetch_data_from_env();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([figwheel.client.console_intro_message], 0));

figwheel.client.heads_up.bad_compile_screen();

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.cljs$core$IFn$_invoke$arity$1(config);

return figwheel.client.add_message_watch(cljs.core.cst$kw$listen_DASH_for_DASH_successful_DASH_compile,((function (config){
return (function (p__25126){
var map__25127 = p__25126;
var map__25127__$1 = ((((!((map__25127 == null)))?((((map__25127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25127):map__25127);
var msg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25127__$1,cljs.core.cst$kw$msg_DASH_name);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(msg_name,cljs.core.cst$kw$files_DASH_changed)){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});
