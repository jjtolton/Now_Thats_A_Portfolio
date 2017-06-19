// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args42473 = [];
var len__8822__auto___42476 = arguments.length;
var i__8823__auto___42477 = (0);
while(true){
if((i__8823__auto___42477 < len__8822__auto___42476)){
args42473.push((arguments[i__8823__auto___42477]));

var G__42478 = (i__8823__auto___42477 + (1));
i__8823__auto___42477 = G__42478;
continue;
} else {
}
break;
}

var G__42475 = args42473.length;
switch (G__42475) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42473.length)].join('')));

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
var args__8829__auto__ = [];
var len__8822__auto___42481 = arguments.length;
var i__8823__auto___42482 = (0);
while(true){
if((i__8823__auto___42482 < len__8822__auto___42481)){
args__8829__auto__.push((arguments[i__8823__auto___42482]));

var G__42483 = (i__8823__auto___42482 + (1));
i__8823__auto___42482 = G__42483;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print(args);

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$out,args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq42480){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42480));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__8829__auto__ = [];
var len__8822__auto___42485 = arguments.length;
var i__8823__auto___42486 = (0);
while(true){
if((i__8823__auto___42486 < len__8822__auto___42485)){
args__8829__auto__.push((arguments[i__8823__auto___42486]));

var G__42487 = (i__8823__auto___42486 + (1));
i__8823__auto___42486 = G__42487;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print(args);

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$err,args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq42484){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42484));
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
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_())?"ON":"OFF"))].join(''));

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
return cljs.core.cons(cljs.core.select_keys(ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$message,cljs.core.cst$kw$class], null)),(function (){var G__42489 = cljs.core.cst$kw$cause.cljs$core$IFn$_invoke$arity$1(ed);
return (figwheel.client.get_essential_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.get_essential_messages.cljs$core$IFn$_invoke$arity$1(G__42489) : figwheel.client.get_essential_messages.call(null,G__42489));
})());
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42490){
var map__42493 = p__42490;
var map__42493__$1 = ((((!((map__42493 == null)))?((((map__42493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42493):map__42493);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42493__$1,cljs.core.cst$kw$message);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42493__$1,cljs.core.cst$kw$class);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons(cljs.core.first(msg_hist),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(name_set,cljs.core.cst$kw$msg_DASH_name),cljs.core.rest(msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__7601__auto__ = cljs.core.cst$kw$load_DASH_warninged_DASH_code.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(msg_name,cljs.core.cst$kw$compile_DASH_warning);
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__7589__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(msg_names),cljs.core.cst$kw$files_DASH_changed);
if(and__7589__auto__){
return figwheel.client.reload_file_QMARK__STAR_(cljs.core.second(msg_names),opts);
} else {
return and__7589__auto__;
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
var c__16369__auto___42655 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___42655,ch){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___42655,ch){
return (function (state_42624){
var state_val_42625 = (state_42624[(1)]);
if((state_val_42625 === (7))){
var inst_42620 = (state_42624[(2)]);
var state_42624__$1 = state_42624;
var statearr_42626_42656 = state_42624__$1;
(statearr_42626_42656[(2)] = inst_42620);

(statearr_42626_42656[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42625 === (1))){
var state_42624__$1 = state_42624;
var statearr_42627_42657 = state_42624__$1;
(statearr_42627_42657[(2)] = null);

(statearr_42627_42657[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42625 === (4))){
var inst_42577 = (state_42624[(7)]);
var inst_42577__$1 = (state_42624[(2)]);
var state_42624__$1 = (function (){var statearr_42628 = state_42624;
(statearr_42628[(7)] = inst_42577__$1);

return statearr_42628;
})();
if(cljs.core.truth_(inst_42577__$1)){
var statearr_42629_42658 = state_42624__$1;
(statearr_42629_42658[(1)] = (5));

} else {
var statearr_42630_42659 = state_42624__$1;
(statearr_42630_42659[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42625 === (15))){
var inst_42584 = (state_42624[(8)]);
var inst_42599 = cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(inst_42584);
var inst_42600 = cljs.core.first(inst_42599);
var inst_42601 = cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(inst_42600);
var inst_42602 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42601)].join('');
var inst_42603 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warn,inst_42602);
var state_42624__$1 = state_42624;
var statearr_42631_42660 = state_42624__$1;
(statearr_42631_42660[(2)] = inst_42603);

(statearr_42631_42660[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42625 === (13))){
var inst_42608 = (state_42624[(2)]);
var state_42624__$1 = state_42624;
var statearr_42632_42661 = state_42624__$1;
(statearr_42632_42661[(2)] = inst_42608);

(statearr_42632_42661[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42625 === (6))){
var state_42624__$1 = state_42624;
var statearr_42633_42662 = state_42624__$1;
(statearr_42633_42662[(2)] = null);

(statearr_42633_42662[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42625 === (17))){
var inst_42606 = (state_42624[(2)]);
var state_42624__$1 = state_42624;
var statearr_42634_42663 = state_42624__$1;
(statearr_42634_42663[(2)] = inst_42606);

(statearr_42634_42663[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42625 === (3))){
var inst_42622 = (state_42624[(2)]);
var state_42624__$1 = state_42624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42624__$1,inst_42622);
} else {
if((state_val_42625 === (12))){
var inst_42583 = (state_42624[(9)]);
var inst_42597 = figwheel.client.block_reload_file_state_QMARK_(inst_42583,opts);
var state_42624__$1 = state_42624;
if(cljs.core.truth_(inst_42597)){
var statearr_42635_42664 = state_42624__$1;
(statearr_42635_42664[(1)] = (15));

} else {
var statearr_42636_42665 = state_42624__$1;
(statearr_42636_42665[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42625 === (2))){
var state_42624__$1 = state_42624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42624__$1,(4),ch);
} else {
if((state_val_42625 === (11))){
var inst_42584 = (state_42624[(8)]);
var inst_42589 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42590 = figwheel.client.file_reloading.reload_js_files(opts,inst_42584);
var inst_42591 = cljs.core.async.timeout((1000));
var inst_42592 = [inst_42590,inst_42591];
var inst_42593 = (new cljs.core.PersistentVector(null,2,(5),inst_42589,inst_42592,null));
var state_42624__$1 = state_42624;
return cljs.core.async.ioc_alts_BANG_(state_42624__$1,(14),inst_42593);
} else {
if((state_val_42625 === (9))){
var inst_42584 = (state_42624[(8)]);
var inst_42610 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warn,"Figwheel: code autoloading is OFF");
var inst_42611 = cljs.core.cst$kw$files.cljs$core$IFn$_invoke$arity$1(inst_42584);
var inst_42612 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$file,inst_42611);
var inst_42613 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42612)].join('');
var inst_42614 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,inst_42613);
var state_42624__$1 = (function (){var statearr_42637 = state_42624;
(statearr_42637[(10)] = inst_42610);

return statearr_42637;
})();
var statearr_42638_42666 = state_42624__$1;
(statearr_42638_42666[(2)] = inst_42614);

(statearr_42638_42666[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42625 === (5))){
var inst_42577 = (state_42624[(7)]);
var inst_42579 = [cljs.core.cst$kw$compile_DASH_warning,null,cljs.core.cst$kw$files_DASH_changed,null];
var inst_42580 = (new cljs.core.PersistentArrayMap(null,2,inst_42579,null));
var inst_42581 = (new cljs.core.PersistentHashSet(null,inst_42580,null));
var inst_42582 = figwheel.client.focus_msgs(inst_42581,inst_42577);
var inst_42583 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$msg_DASH_name,inst_42582);
var inst_42584 = cljs.core.first(inst_42582);
var inst_42585 = figwheel.client.autoload_QMARK_();
var state_42624__$1 = (function (){var statearr_42639 = state_42624;
(statearr_42639[(8)] = inst_42584);

(statearr_42639[(9)] = inst_42583);

return statearr_42639;
})();
if(cljs.core.truth_(inst_42585)){
var statearr_42640_42667 = state_42624__$1;
(statearr_42640_42667[(1)] = (8));

} else {
var statearr_42641_42668 = state_42624__$1;
(statearr_42641_42668[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42625 === (14))){
var inst_42595 = (state_42624[(2)]);
var state_42624__$1 = state_42624;
var statearr_42642_42669 = state_42624__$1;
(statearr_42642_42669[(2)] = inst_42595);

(statearr_42642_42669[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42625 === (16))){
var state_42624__$1 = state_42624;
var statearr_42643_42670 = state_42624__$1;
(statearr_42643_42670[(2)] = null);

(statearr_42643_42670[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42625 === (10))){
var inst_42616 = (state_42624[(2)]);
var state_42624__$1 = (function (){var statearr_42644 = state_42624;
(statearr_42644[(11)] = inst_42616);

return statearr_42644;
})();
var statearr_42645_42671 = state_42624__$1;
(statearr_42645_42671[(2)] = null);

(statearr_42645_42671[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42625 === (8))){
var inst_42583 = (state_42624[(9)]);
var inst_42587 = figwheel.client.reload_file_state_QMARK_(inst_42583,opts);
var state_42624__$1 = state_42624;
if(cljs.core.truth_(inst_42587)){
var statearr_42646_42672 = state_42624__$1;
(statearr_42646_42672[(1)] = (11));

} else {
var statearr_42647_42673 = state_42624__$1;
(statearr_42647_42673[(1)] = (12));

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
});})(c__16369__auto___42655,ch))
;
return ((function (switch__16243__auto__,c__16369__auto___42655,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__16244__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__16244__auto____0 = (function (){
var statearr_42651 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42651[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__16244__auto__);

(statearr_42651[(1)] = (1));

return statearr_42651;
});
var figwheel$client$file_reloader_plugin_$_state_machine__16244__auto____1 = (function (state_42624){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_42624);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e42652){if((e42652 instanceof Object)){
var ex__16247__auto__ = e42652;
var statearr_42653_42674 = state_42624;
(statearr_42653_42674[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42624);

return cljs.core.cst$kw$recur;
} else {
throw e42652;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__42675 = state_42624;
state_42624 = G__42675;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__16244__auto__ = function(state_42624){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__16244__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__16244__auto____1.call(this,state_42624);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__16244__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__16244__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___42655,ch))
})();
var state__16371__auto__ = (function (){var statearr_42654 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_42654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___42655);

return statearr_42654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___42655,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__42676_SHARP_){
return cljs.core.not(cljs.core.re_matches(/.*eval_javascript_STAR__STAR_.*/,p1__42676_SHARP_));
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
var base_path_42685 = figwheel.client.utils.base_url_path();
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42685){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_();

var result_value = figwheel.client.utils.eval_helper(code,opts);
var G__42684 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,cljs.core.cst$kw$success,cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product(),cljs.core.cst$kw$value,result_value], null);
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__42684) : result_handler.call(null,G__42684));
}catch (e42681){if((e42681 instanceof Error)){
var e = e42681;
var G__42682 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product(),cljs.core.cst$kw$stacktrace,clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",figwheel.client.truncate_stack_trace(e.stack)),cljs.core.cst$kw$base_DASH_path,base_path_42685], null);
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__42682) : result_handler.call(null,G__42682));
} else {
var e = e42681;
var G__42683 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$status,cljs.core.cst$kw$exception,cljs.core.cst$kw$ua_DASH_product,figwheel.client.get_ua_product(),cljs.core.cst$kw$value,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e], 0)),cljs.core.cst$kw$stacktrace,"No stacktrace available."], null);
return (result_handler.cljs$core$IFn$_invoke$arity$1 ? result_handler.cljs$core$IFn$_invoke$arity$1(G__42683) : result_handler.call(null,G__42683));

}
}finally {figwheel.client.enable_repl_print_BANG_();
}});})(base_path_42685))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42686){
var map__42695 = p__42686;
var map__42695__$1 = ((((!((map__42695 == null)))?((((map__42695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42695):map__42695);
var opts = map__42695__$1;
var build_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42695__$1,cljs.core.cst$kw$build_DASH_id);
return ((function (map__42695,map__42695__$1,opts,build_id){
return (function (p__42697){
var vec__42698 = p__42697;
var seq__42699 = cljs.core.seq(vec__42698);
var first__42700 = cljs.core.first(seq__42699);
var seq__42699__$1 = cljs.core.next(seq__42699);
var map__42701 = first__42700;
var map__42701__$1 = ((((!((map__42701 == null)))?((((map__42701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42701.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42701):map__42701);
var msg = map__42701__$1;
var msg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42701__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__42699__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$repl_DASH_eval,msg_name)){
figwheel.client.ensure_cljs_user();

return figwheel.client.eval_javascript_STAR__STAR_(cljs.core.cst$kw$code.cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42698,seq__42699,first__42700,seq__42699__$1,map__42701,map__42701__$1,msg,msg_name,_,map__42695,map__42695__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$figwheel_DASH_event,"callback",cljs.core.cst$kw$callback_DASH_name,cljs.core.cst$kw$callback_DASH_name.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.cst$kw$content,res], null));
});})(vec__42698,seq__42699,first__42700,seq__42699__$1,map__42701,map__42701__$1,msg,msg_name,_,map__42695,map__42695__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42695,map__42695__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42709){
var vec__42710 = p__42709;
var seq__42711 = cljs.core.seq(vec__42710);
var first__42712 = cljs.core.first(seq__42711);
var seq__42711__$1 = cljs.core.next(seq__42711);
var map__42713 = first__42712;
var map__42713__$1 = ((((!((map__42713 == null)))?((((map__42713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42713.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42713):map__42713);
var msg = map__42713__$1;
var msg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42713__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__42711__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(msg_name,cljs.core.cst$kw$css_DASH_files_DASH_changed)){
return figwheel.client.file_reloading.reload_css_files(opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42715){
var map__42731 = p__42715;
var map__42731__$1 = ((((!((map__42731 == null)))?((((map__42731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42731.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42731):map__42731);
var on_compile_warning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42731__$1,cljs.core.cst$kw$on_DASH_compile_DASH_warning);
var on_compile_fail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42731__$1,cljs.core.cst$kw$on_DASH_compile_DASH_fail);
return ((function (map__42731,map__42731__$1,on_compile_warning,on_compile_fail){
return (function (p__42733){
var vec__42734 = p__42733;
var seq__42735 = cljs.core.seq(vec__42734);
var first__42736 = cljs.core.first(seq__42735);
var seq__42735__$1 = cljs.core.next(seq__42735);
var map__42737 = first__42736;
var map__42737__$1 = ((((!((map__42737 == null)))?((((map__42737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42737):map__42737);
var msg = map__42737__$1;
var msg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42737__$1,cljs.core.cst$kw$msg_DASH_name);
var _ = seq__42735__$1;
var pred__42739 = cljs.core._EQ_;
var expr__42740 = msg_name;
if(cljs.core.truth_((function (){var G__42742 = cljs.core.cst$kw$compile_DASH_warning;
var G__42743 = expr__42740;
return (pred__42739.cljs$core$IFn$_invoke$arity$2 ? pred__42739.cljs$core$IFn$_invoke$arity$2(G__42742,G__42743) : pred__42739.call(null,G__42742,G__42743));
})())){
return (on_compile_warning.cljs$core$IFn$_invoke$arity$1 ? on_compile_warning.cljs$core$IFn$_invoke$arity$1(msg) : on_compile_warning.call(null,msg));
} else {
if(cljs.core.truth_((function (){var G__42744 = cljs.core.cst$kw$compile_DASH_failed;
var G__42745 = expr__42740;
return (pred__42739.cljs$core$IFn$_invoke$arity$2 ? pred__42739.cljs$core$IFn$_invoke$arity$2(G__42744,G__42745) : pred__42739.call(null,G__42744,G__42745));
})())){
return (on_compile_fail.cljs$core$IFn$_invoke$arity$1 ? on_compile_fail.cljs$core$IFn$_invoke$arity$1(msg) : on_compile_fail.call(null,msg));
} else {
return null;
}
}
});
;})(map__42731,map__42731__$1,on_compile_warning,on_compile_fail))
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
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__,msg_hist,msg_names,msg){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__,msg_hist,msg_names,msg){
return (function (state_42972){
var state_val_42973 = (state_42972[(1)]);
if((state_val_42973 === (7))){
var inst_42892 = (state_42972[(2)]);
var state_42972__$1 = state_42972;
if(cljs.core.truth_(inst_42892)){
var statearr_42974_43024 = state_42972__$1;
(statearr_42974_43024[(1)] = (8));

} else {
var statearr_42975_43025 = state_42972__$1;
(statearr_42975_43025[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (20))){
var inst_42966 = (state_42972[(2)]);
var state_42972__$1 = state_42972;
var statearr_42976_43026 = state_42972__$1;
(statearr_42976_43026[(2)] = inst_42966);

(statearr_42976_43026[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (27))){
var inst_42962 = (state_42972[(2)]);
var state_42972__$1 = state_42972;
var statearr_42977_43027 = state_42972__$1;
(statearr_42977_43027[(2)] = inst_42962);

(statearr_42977_43027[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (1))){
var inst_42885 = figwheel.client.reload_file_state_QMARK_(msg_names,opts);
var state_42972__$1 = state_42972;
if(cljs.core.truth_(inst_42885)){
var statearr_42978_43028 = state_42972__$1;
(statearr_42978_43028[(1)] = (2));

} else {
var statearr_42979_43029 = state_42972__$1;
(statearr_42979_43029[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (24))){
var inst_42964 = (state_42972[(2)]);
var state_42972__$1 = state_42972;
var statearr_42980_43030 = state_42972__$1;
(statearr_42980_43030[(2)] = inst_42964);

(statearr_42980_43030[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (4))){
var inst_42970 = (state_42972[(2)]);
var state_42972__$1 = state_42972;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42972__$1,inst_42970);
} else {
if((state_val_42973 === (15))){
var inst_42968 = (state_42972[(2)]);
var state_42972__$1 = state_42972;
var statearr_42981_43031 = state_42972__$1;
(statearr_42981_43031[(2)] = inst_42968);

(statearr_42981_43031[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (21))){
var inst_42921 = (state_42972[(2)]);
var inst_42922 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_42923 = figwheel.client.auto_jump_to_error(opts,inst_42922);
var state_42972__$1 = (function (){var statearr_42982 = state_42972;
(statearr_42982[(7)] = inst_42921);

return statearr_42982;
})();
var statearr_42983_43032 = state_42972__$1;
(statearr_42983_43032[(2)] = inst_42923);

(statearr_42983_43032[(1)] = (20));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (31))){
var inst_42951 = figwheel.client.css_loaded_state_QMARK_(msg_names);
var state_42972__$1 = state_42972;
if(cljs.core.truth_(inst_42951)){
var statearr_42984_43033 = state_42972__$1;
(statearr_42984_43033[(1)] = (34));

} else {
var statearr_42985_43034 = state_42972__$1;
(statearr_42985_43034[(1)] = (35));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (32))){
var inst_42960 = (state_42972[(2)]);
var state_42972__$1 = state_42972;
var statearr_42986_43035 = state_42972__$1;
(statearr_42986_43035[(2)] = inst_42960);

(statearr_42986_43035[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (33))){
var inst_42947 = (state_42972[(2)]);
var inst_42948 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_42949 = figwheel.client.auto_jump_to_error(opts,inst_42948);
var state_42972__$1 = (function (){var statearr_42987 = state_42972;
(statearr_42987[(8)] = inst_42947);

return statearr_42987;
})();
var statearr_42988_43036 = state_42972__$1;
(statearr_42988_43036[(2)] = inst_42949);

(statearr_42988_43036[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (13))){
var inst_42906 = figwheel.client.heads_up.clear();
var state_42972__$1 = state_42972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42972__$1,(16),inst_42906);
} else {
if((state_val_42973 === (22))){
var inst_42927 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_42928 = figwheel.client.heads_up.append_warning_message(inst_42927);
var state_42972__$1 = state_42972;
var statearr_42989_43037 = state_42972__$1;
(statearr_42989_43037[(2)] = inst_42928);

(statearr_42989_43037[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (36))){
var inst_42958 = (state_42972[(2)]);
var state_42972__$1 = state_42972;
var statearr_42990_43038 = state_42972__$1;
(statearr_42990_43038[(2)] = inst_42958);

(statearr_42990_43038[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (29))){
var inst_42938 = (state_42972[(2)]);
var inst_42939 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_42940 = figwheel.client.auto_jump_to_error(opts,inst_42939);
var state_42972__$1 = (function (){var statearr_42991 = state_42972;
(statearr_42991[(9)] = inst_42938);

return statearr_42991;
})();
var statearr_42992_43039 = state_42972__$1;
(statearr_42992_43039[(2)] = inst_42940);

(statearr_42992_43039[(1)] = (27));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (6))){
var inst_42887 = (state_42972[(10)]);
var state_42972__$1 = state_42972;
var statearr_42993_43040 = state_42972__$1;
(statearr_42993_43040[(2)] = inst_42887);

(statearr_42993_43040[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (28))){
var inst_42934 = (state_42972[(2)]);
var inst_42935 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_42936 = figwheel.client.heads_up.display_warning(inst_42935);
var state_42972__$1 = (function (){var statearr_42994 = state_42972;
(statearr_42994[(11)] = inst_42934);

return statearr_42994;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42972__$1,(29),inst_42936);
} else {
if((state_val_42973 === (25))){
var inst_42932 = figwheel.client.heads_up.clear();
var state_42972__$1 = state_42972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42972__$1,(28),inst_42932);
} else {
if((state_val_42973 === (34))){
var inst_42953 = figwheel.client.heads_up.flash_loaded();
var state_42972__$1 = state_42972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42972__$1,(37),inst_42953);
} else {
if((state_val_42973 === (17))){
var inst_42912 = (state_42972[(2)]);
var inst_42913 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_42914 = figwheel.client.auto_jump_to_error(opts,inst_42913);
var state_42972__$1 = (function (){var statearr_42995 = state_42972;
(statearr_42995[(12)] = inst_42912);

return statearr_42995;
})();
var statearr_42996_43041 = state_42972__$1;
(statearr_42996_43041[(2)] = inst_42914);

(statearr_42996_43041[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (3))){
var inst_42904 = figwheel.client.compile_refail_state_QMARK_(msg_names);
var state_42972__$1 = state_42972;
if(cljs.core.truth_(inst_42904)){
var statearr_42997_43042 = state_42972__$1;
(statearr_42997_43042[(1)] = (13));

} else {
var statearr_42998_43043 = state_42972__$1;
(statearr_42998_43043[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (12))){
var inst_42900 = (state_42972[(2)]);
var state_42972__$1 = state_42972;
var statearr_42999_43044 = state_42972__$1;
(statearr_42999_43044[(2)] = inst_42900);

(statearr_42999_43044[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (2))){
var inst_42887 = (state_42972[(10)]);
var inst_42887__$1 = figwheel.client.autoload_QMARK_();
var state_42972__$1 = (function (){var statearr_43000 = state_42972;
(statearr_43000[(10)] = inst_42887__$1);

return statearr_43000;
})();
if(cljs.core.truth_(inst_42887__$1)){
var statearr_43001_43045 = state_42972__$1;
(statearr_43001_43045[(1)] = (5));

} else {
var statearr_43002_43046 = state_42972__$1;
(statearr_43002_43046[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (23))){
var inst_42930 = figwheel.client.rewarning_state_QMARK_(msg_names);
var state_42972__$1 = state_42972;
if(cljs.core.truth_(inst_42930)){
var statearr_43003_43047 = state_42972__$1;
(statearr_43003_43047[(1)] = (25));

} else {
var statearr_43004_43048 = state_42972__$1;
(statearr_43004_43048[(1)] = (26));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (35))){
var state_42972__$1 = state_42972;
var statearr_43005_43049 = state_42972__$1;
(statearr_43005_43049[(2)] = null);

(statearr_43005_43049[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (19))){
var inst_42925 = figwheel.client.warning_append_state_QMARK_(msg_names);
var state_42972__$1 = state_42972;
if(cljs.core.truth_(inst_42925)){
var statearr_43006_43050 = state_42972__$1;
(statearr_43006_43050[(1)] = (22));

} else {
var statearr_43007_43051 = state_42972__$1;
(statearr_43007_43051[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (11))){
var inst_42896 = (state_42972[(2)]);
var state_42972__$1 = state_42972;
var statearr_43008_43052 = state_42972__$1;
(statearr_43008_43052[(2)] = inst_42896);

(statearr_43008_43052[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (9))){
var inst_42898 = figwheel.client.heads_up.clear();
var state_42972__$1 = state_42972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42972__$1,(12),inst_42898);
} else {
if((state_val_42973 === (5))){
var inst_42889 = cljs.core.cst$kw$autoload.cljs$core$IFn$_invoke$arity$1(opts);
var state_42972__$1 = state_42972;
var statearr_43009_43053 = state_42972__$1;
(statearr_43009_43053[(2)] = inst_42889);

(statearr_43009_43053[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (14))){
var inst_42916 = figwheel.client.compile_fail_state_QMARK_(msg_names);
var state_42972__$1 = state_42972;
if(cljs.core.truth_(inst_42916)){
var statearr_43010_43054 = state_42972__$1;
(statearr_43010_43054[(1)] = (18));

} else {
var statearr_43011_43055 = state_42972__$1;
(statearr_43011_43055[(1)] = (19));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (26))){
var inst_42942 = figwheel.client.warning_state_QMARK_(msg_names);
var state_42972__$1 = state_42972;
if(cljs.core.truth_(inst_42942)){
var statearr_43012_43056 = state_42972__$1;
(statearr_43012_43056[(1)] = (30));

} else {
var statearr_43013_43057 = state_42972__$1;
(statearr_43013_43057[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (16))){
var inst_42908 = (state_42972[(2)]);
var inst_42909 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_42910 = figwheel.client.heads_up.display_exception(inst_42909);
var state_42972__$1 = (function (){var statearr_43014 = state_42972;
(statearr_43014[(13)] = inst_42908);

return statearr_43014;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42972__$1,(17),inst_42910);
} else {
if((state_val_42973 === (30))){
var inst_42944 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(msg);
var inst_42945 = figwheel.client.heads_up.display_warning(inst_42944);
var state_42972__$1 = state_42972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42972__$1,(33),inst_42945);
} else {
if((state_val_42973 === (10))){
var inst_42902 = (state_42972[(2)]);
var state_42972__$1 = state_42972;
var statearr_43015_43058 = state_42972__$1;
(statearr_43015_43058[(2)] = inst_42902);

(statearr_43015_43058[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (18))){
var inst_42918 = cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(msg);
var inst_42919 = figwheel.client.heads_up.display_exception(inst_42918);
var state_42972__$1 = state_42972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42972__$1,(21),inst_42919);
} else {
if((state_val_42973 === (37))){
var inst_42955 = (state_42972[(2)]);
var state_42972__$1 = state_42972;
var statearr_43016_43059 = state_42972__$1;
(statearr_43016_43059[(2)] = inst_42955);

(statearr_43016_43059[(1)] = (36));


return cljs.core.cst$kw$recur;
} else {
if((state_val_42973 === (8))){
var inst_42894 = figwheel.client.heads_up.flash_loaded();
var state_42972__$1 = state_42972;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42972__$1,(11),inst_42894);
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
});})(c__16369__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__16243__auto__,c__16369__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16244__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16244__auto____0 = (function (){
var statearr_43020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43020[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16244__auto__);

(statearr_43020[(1)] = (1));

return statearr_43020;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16244__auto____1 = (function (state_42972){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_42972);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e43021){if((e43021 instanceof Object)){
var ex__16247__auto__ = e43021;
var statearr_43022_43060 = state_42972;
(statearr_43022_43060[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42972);

return cljs.core.cst$kw$recur;
} else {
throw e43021;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__43061 = state_42972;
state_42972 = G__43061;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16244__auto__ = function(state_42972){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16244__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16244__auto____1.call(this,state_42972);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16244__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16244__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__,msg_hist,msg_names,msg))
})();
var state__16371__auto__ = (function (){var statearr_43023 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_43023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_43023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__,msg_hist,msg_names,msg))
);

return c__16369__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__16369__auto___43124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___43124,ch){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___43124,ch){
return (function (state_43107){
var state_val_43108 = (state_43107[(1)]);
if((state_val_43108 === (1))){
var state_43107__$1 = state_43107;
var statearr_43109_43125 = state_43107__$1;
(statearr_43109_43125[(2)] = null);

(statearr_43109_43125[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43108 === (2))){
var state_43107__$1 = state_43107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43107__$1,(4),ch);
} else {
if((state_val_43108 === (3))){
var inst_43105 = (state_43107[(2)]);
var state_43107__$1 = state_43107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43107__$1,inst_43105);
} else {
if((state_val_43108 === (4))){
var inst_43095 = (state_43107[(7)]);
var inst_43095__$1 = (state_43107[(2)]);
var state_43107__$1 = (function (){var statearr_43110 = state_43107;
(statearr_43110[(7)] = inst_43095__$1);

return statearr_43110;
})();
if(cljs.core.truth_(inst_43095__$1)){
var statearr_43111_43126 = state_43107__$1;
(statearr_43111_43126[(1)] = (5));

} else {
var statearr_43112_43127 = state_43107__$1;
(statearr_43112_43127[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_43108 === (5))){
var inst_43095 = (state_43107[(7)]);
var inst_43097 = figwheel.client.heads_up_plugin_msg_handler(opts,inst_43095);
var state_43107__$1 = state_43107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43107__$1,(8),inst_43097);
} else {
if((state_val_43108 === (6))){
var state_43107__$1 = state_43107;
var statearr_43113_43128 = state_43107__$1;
(statearr_43113_43128[(2)] = null);

(statearr_43113_43128[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43108 === (7))){
var inst_43103 = (state_43107[(2)]);
var state_43107__$1 = state_43107;
var statearr_43114_43129 = state_43107__$1;
(statearr_43114_43129[(2)] = inst_43103);

(statearr_43114_43129[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_43108 === (8))){
var inst_43099 = (state_43107[(2)]);
var state_43107__$1 = (function (){var statearr_43115 = state_43107;
(statearr_43115[(8)] = inst_43099);

return statearr_43115;
})();
var statearr_43116_43130 = state_43107__$1;
(statearr_43116_43130[(2)] = null);

(statearr_43116_43130[(1)] = (2));


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
});})(c__16369__auto___43124,ch))
;
return ((function (switch__16243__auto__,c__16369__auto___43124,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__16244__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__16244__auto____0 = (function (){
var statearr_43120 = [null,null,null,null,null,null,null,null,null];
(statearr_43120[(0)] = figwheel$client$heads_up_plugin_$_state_machine__16244__auto__);

(statearr_43120[(1)] = (1));

return statearr_43120;
});
var figwheel$client$heads_up_plugin_$_state_machine__16244__auto____1 = (function (state_43107){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_43107);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e43121){if((e43121 instanceof Object)){
var ex__16247__auto__ = e43121;
var statearr_43122_43131 = state_43107;
(statearr_43122_43131[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43107);

return cljs.core.cst$kw$recur;
} else {
throw e43121;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__43132 = state_43107;
state_43107 = G__43132;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__16244__auto__ = function(state_43107){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__16244__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__16244__auto____1.call(this,state_43107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__16244__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__16244__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___43124,ch))
})();
var state__16371__auto__ = (function (){var statearr_43123 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_43123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___43124);

return statearr_43123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___43124,ch))
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
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__){
return (function (state_43153){
var state_val_43154 = (state_43153[(1)]);
if((state_val_43154 === (1))){
var inst_43148 = cljs.core.async.timeout((3000));
var state_43153__$1 = state_43153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43153__$1,(2),inst_43148);
} else {
if((state_val_43154 === (2))){
var inst_43150 = (state_43153[(2)]);
var inst_43151 = figwheel.client.heads_up.display_system_warning("Connection from different project","Shutting connection down!!!!!");
var state_43153__$1 = (function (){var statearr_43155 = state_43153;
(statearr_43155[(7)] = inst_43150);

return statearr_43155;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43153__$1,inst_43151);
} else {
return null;
}
}
});})(c__16369__auto__))
;
return ((function (switch__16243__auto__,c__16369__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__16244__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__16244__auto____0 = (function (){
var statearr_43159 = [null,null,null,null,null,null,null,null];
(statearr_43159[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__16244__auto__);

(statearr_43159[(1)] = (1));

return statearr_43159;
});
var figwheel$client$enforce_project_plugin_$_state_machine__16244__auto____1 = (function (state_43153){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_43153);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e43160){if((e43160 instanceof Object)){
var ex__16247__auto__ = e43160;
var statearr_43161_43163 = state_43153;
(statearr_43161_43163[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43153);

return cljs.core.cst$kw$recur;
} else {
throw e43160;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__43164 = state_43153;
state_43153 = G__43164;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__16244__auto__ = function(state_43153){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__16244__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__16244__auto____1.call(this,state_43153);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__16244__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__16244__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__))
})();
var state__16371__auto__ = (function (){var statearr_43162 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_43162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_43162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__))
);

return c__16369__auto__;
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
var temp__6738__auto__ = cljs.core.cst$kw$figwheel_DASH_version.cljs$core$IFn$_invoke$arity$1(cljs.core.first(msg_hist));
if(cljs.core.truth_(temp__6738__auto__)){
var figwheel_version = temp__6738__auto__;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_();

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(cljs.core.cst$kw$heads_DASH_up_DASH_display.cljs$core$IFn$_invoke$arity$1(opts))){
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__,figwheel_version,temp__6738__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__,figwheel_version,temp__6738__auto__){
return (function (state_43187){
var state_val_43188 = (state_43187[(1)]);
if((state_val_43188 === (1))){
var inst_43181 = cljs.core.async.timeout((2000));
var state_43187__$1 = state_43187;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43187__$1,(2),inst_43181);
} else {
if((state_val_43188 === (2))){
var inst_43183 = (state_43187[(2)]);
var inst_43184 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_43185 = figwheel.client.heads_up.display_system_warning("Figwheel Client and Server have different versions!!",inst_43184);
var state_43187__$1 = (function (){var statearr_43189 = state_43187;
(statearr_43189[(7)] = inst_43183);

return statearr_43189;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43187__$1,inst_43185);
} else {
return null;
}
}
});})(c__16369__auto__,figwheel_version,temp__6738__auto__))
;
return ((function (switch__16243__auto__,c__16369__auto__,figwheel_version,temp__6738__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16244__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16244__auto____0 = (function (){
var statearr_43193 = [null,null,null,null,null,null,null,null];
(statearr_43193[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16244__auto__);

(statearr_43193[(1)] = (1));

return statearr_43193;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16244__auto____1 = (function (state_43187){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_43187);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e43194){if((e43194 instanceof Object)){
var ex__16247__auto__ = e43194;
var statearr_43195_43197 = state_43187;
(statearr_43195_43197[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43187);

return cljs.core.cst$kw$recur;
} else {
throw e43194;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__43198 = state_43187;
state_43187 = G__43198;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16244__auto__ = function(state_43187){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16244__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16244__auto____1.call(this,state_43187);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16244__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16244__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__,figwheel_version,temp__6738__auto__))
})();
var state__16371__auto__ = (function (){var statearr_43196 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_43196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_43196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__,figwheel_version,temp__6738__auto__))
);

return c__16369__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__43199){
var map__43203 = p__43199;
var map__43203__$1 = ((((!((map__43203 == null)))?((((map__43203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43203.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43203):map__43203);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43203__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43203__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43203__$1,cljs.core.cst$kw$column);
var G__43205 = "";
var G__43205__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43205),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__43205);
var G__43205__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43205__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__43205__$1);
if(cljs.core.truth_((function (){var and__7589__auto__ = line;
if(cljs.core.truth_(and__7589__auto__)){
return column;
} else {
return and__7589__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43205__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__43205__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__43206){
var map__43213 = p__43206;
var map__43213__$1 = ((((!((map__43213 == null)))?((((map__43213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43213.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43213):map__43213);
var ed = map__43213__$1;
var formatted_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43213__$1,cljs.core.cst$kw$formatted_DASH_exception);
var exception_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43213__$1,cljs.core.cst$kw$exception_DASH_data);
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43213__$1,cljs.core.cst$kw$cause);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: Compile Exception");

var seq__43215_43219 = cljs.core.seq((figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.format_messages.cljs$core$IFn$_invoke$arity$1(exception_data) : figwheel.client.format_messages.call(null,exception_data)));
var chunk__43216_43220 = null;
var count__43217_43221 = (0);
var i__43218_43222 = (0);
while(true){
if((i__43218_43222 < count__43217_43221)){
var msg_43223 = chunk__43216_43220.cljs$core$IIndexed$_nth$arity$2(null,i__43218_43222);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,msg_43223);

var G__43224 = seq__43215_43219;
var G__43225 = chunk__43216_43220;
var G__43226 = count__43217_43221;
var G__43227 = (i__43218_43222 + (1));
seq__43215_43219 = G__43224;
chunk__43216_43220 = G__43225;
count__43217_43221 = G__43226;
i__43218_43222 = G__43227;
continue;
} else {
var temp__6738__auto___43228 = cljs.core.seq(seq__43215_43219);
if(temp__6738__auto___43228){
var seq__43215_43229__$1 = temp__6738__auto___43228;
if(cljs.core.chunked_seq_QMARK_(seq__43215_43229__$1)){
var c__8512__auto___43230 = cljs.core.chunk_first(seq__43215_43229__$1);
var G__43231 = cljs.core.chunk_rest(seq__43215_43229__$1);
var G__43232 = c__8512__auto___43230;
var G__43233 = cljs.core.count(c__8512__auto___43230);
var G__43234 = (0);
seq__43215_43219 = G__43231;
chunk__43216_43220 = G__43232;
count__43217_43221 = G__43233;
i__43218_43222 = G__43234;
continue;
} else {
var msg_43235 = cljs.core.first(seq__43215_43229__$1);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,msg_43235);

var G__43236 = cljs.core.next(seq__43215_43229__$1);
var G__43237 = null;
var G__43238 = (0);
var G__43239 = (0);
seq__43215_43219 = G__43236;
chunk__43216_43220 = G__43237;
count__43217_43221 = G__43238;
i__43218_43222 = G__43239;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$info,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column(ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__43240){
var map__43243 = p__43240;
var map__43243__$1 = ((((!((map__43243 == null)))?((((map__43243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43243.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43243):map__43243);
var w = map__43243__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43243__$1,cljs.core.cst$kw$message);
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$warn,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column(message))].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$on_DASH_compile_DASH_warning,cljs.core.cst$kw$on_DASH_jsload,cljs.core.cst$kw$reload_DASH_dependents,cljs.core.cst$kw$on_DASH_compile_DASH_fail,cljs.core.cst$kw$debug,cljs.core.cst$kw$heads_DASH_up_DASH_display,cljs.core.cst$kw$websocket_DASH_url,cljs.core.cst$kw$auto_DASH_jump_DASH_to_DASH_source_DASH_on_DASH_error,cljs.core.cst$kw$before_DASH_jsload,cljs.core.cst$kw$load_DASH_warninged_DASH_code,cljs.core.cst$kw$eval_DASH_fn,cljs.core.cst$kw$retry_DASH_count,cljs.core.cst$kw$autoload,cljs.core.cst$kw$on_DASH_cssload],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},cljs.core.cst$sym$figwheel$client_SLASH_default_DASH_on_DASH_compile_DASH_warning,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$figwheel$client,cljs.core.cst$sym$default_DASH_on_DASH_compile_DASH_warning,"/home/jay/_project/personal/demo/clsj/qdemo/snakeq/target/cljsbuild-compiler-1/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$message], null),cljs.core.cst$kw$as,cljs.core.cst$sym$w], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},cljs.core.cst$sym$figwheel$client_SLASH_default_DASH_on_DASH_compile_DASH_fail,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$figwheel$client,cljs.core.cst$sym$default_DASH_on_DASH_compile_DASH_fail,"/home/jay/_project/personal/demo/clsj/qdemo/snakeq/target/cljsbuild-compiler-1/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$formatted_DASH_exception,cljs.core.cst$sym$exception_DASH_data,cljs.core.cst$sym$cause], null),cljs.core.cst$kw$as,cljs.core.cst$sym$ed], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__7589__auto__ = cljs.core.cst$kw$heads_DASH_up_DASH_display.cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__7589__auto__)){
return figwheel.client.utils.html_env_QMARK_();
} else {
return and__7589__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base__$2,cljs.core.cst$kw$heads_DASH_up_DASH_display_DASH_plugin,figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch(figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
var G__43246 = cljs.core.first(msg_hist);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__43246) : callback.call(null,G__43246));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__43257 = cljs.core.seq(plugins);
var chunk__43258 = null;
var count__43259 = (0);
var i__43260 = (0);
while(true){
if((i__43260 < count__43259)){
var vec__43261 = chunk__43258.cljs$core$IIndexed$_nth$arity$2(null,i__43260);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43261,(0),null);
var plugin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43261,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43267 = (plugin.cljs$core$IFn$_invoke$arity$1 ? plugin.cljs$core$IFn$_invoke$arity$1(system_options) : plugin.call(null,system_options));
cljs.core.add_watch(figwheel.client.socket.message_history_atom,k,((function (seq__43257,chunk__43258,count__43259,i__43260,pl_43267,vec__43261,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return (pl_43267.cljs$core$IFn$_invoke$arity$1 ? pl_43267.cljs$core$IFn$_invoke$arity$1(msg_hist) : pl_43267.call(null,msg_hist));
});})(seq__43257,chunk__43258,count__43259,i__43260,pl_43267,vec__43261,k,plugin))
);
} else {
}

var G__43268 = seq__43257;
var G__43269 = chunk__43258;
var G__43270 = count__43259;
var G__43271 = (i__43260 + (1));
seq__43257 = G__43268;
chunk__43258 = G__43269;
count__43259 = G__43270;
i__43260 = G__43271;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__43257);
if(temp__6738__auto__){
var seq__43257__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43257__$1)){
var c__8512__auto__ = cljs.core.chunk_first(seq__43257__$1);
var G__43272 = cljs.core.chunk_rest(seq__43257__$1);
var G__43273 = c__8512__auto__;
var G__43274 = cljs.core.count(c__8512__auto__);
var G__43275 = (0);
seq__43257 = G__43272;
chunk__43258 = G__43273;
count__43259 = G__43274;
i__43260 = G__43275;
continue;
} else {
var vec__43264 = cljs.core.first(seq__43257__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43264,(0),null);
var plugin = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43264,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43276 = (plugin.cljs$core$IFn$_invoke$arity$1 ? plugin.cljs$core$IFn$_invoke$arity$1(system_options) : plugin.call(null,system_options));
cljs.core.add_watch(figwheel.client.socket.message_history_atom,k,((function (seq__43257,chunk__43258,count__43259,i__43260,pl_43276,vec__43264,k,plugin,seq__43257__$1,temp__6738__auto__){
return (function (_,___$1,___$2,msg_hist){
return (pl_43276.cljs$core$IFn$_invoke$arity$1 ? pl_43276.cljs$core$IFn$_invoke$arity$1(msg_hist) : pl_43276.call(null,msg_hist));
});})(seq__43257,chunk__43258,count__43259,i__43260,pl_43276,vec__43264,k,plugin,seq__43257__$1,temp__6738__auto__))
);
} else {
}

var G__43277 = cljs.core.next(seq__43257__$1);
var G__43278 = null;
var G__43279 = (0);
var G__43280 = (0);
seq__43257 = G__43277;
chunk__43258 = G__43278;
count__43259 = G__43279;
i__43260 = G__43280;
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
var args43281 = [];
var len__8822__auto___43289 = arguments.length;
var i__8823__auto___43290 = (0);
while(true){
if((i__8823__auto___43290 < len__8822__auto___43289)){
args43281.push((arguments[i__8823__auto___43290]));

var G__43291 = (i__8823__auto___43290 + (1));
i__8823__auto___43290 = G__43291;
continue;
} else {
}
break;
}

var G__43283 = args43281.length;
switch (G__43283) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args43281.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = (function (){var G__43284 = (function (){
var plugins_SINGLEQUOTE_ = cljs.core.cst$kw$plugins.cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = cljs.core.cst$kw$merge_DASH_plugins.cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template(figwheel.client.handle_deprecated_jsload_callback(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([figwheel.client.config_defaults,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.cst$kw$plugins,cljs.core.array_seq([cljs.core.cst$kw$merge_DASH_plugins], 0))], 0))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([figwheel.client.base_plugins(system_options),merge_plugins], 0)));
figwheel.client.utils._STAR_print_debug_STAR_ = cljs.core.cst$kw$debug.cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_();

figwheel.client.add_plugins(plugins,system_options);

figwheel.client.file_reloading.patch_goog_base();

var seq__43285_43293 = cljs.core.seq(cljs.core.cst$kw$initial_DASH_messages.cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__43286_43294 = null;
var count__43287_43295 = (0);
var i__43288_43296 = (0);
while(true){
if((i__43288_43296 < count__43287_43295)){
var msg_43297 = chunk__43286_43294.cljs$core$IIndexed$_nth$arity$2(null,i__43288_43296);
figwheel.client.socket.handle_incoming_message(msg_43297);

var G__43298 = seq__43285_43293;
var G__43299 = chunk__43286_43294;
var G__43300 = count__43287_43295;
var G__43301 = (i__43288_43296 + (1));
seq__43285_43293 = G__43298;
chunk__43286_43294 = G__43299;
count__43287_43295 = G__43300;
i__43288_43296 = G__43301;
continue;
} else {
var temp__6738__auto___43302 = cljs.core.seq(seq__43285_43293);
if(temp__6738__auto___43302){
var seq__43285_43303__$1 = temp__6738__auto___43302;
if(cljs.core.chunked_seq_QMARK_(seq__43285_43303__$1)){
var c__8512__auto___43304 = cljs.core.chunk_first(seq__43285_43303__$1);
var G__43305 = cljs.core.chunk_rest(seq__43285_43303__$1);
var G__43306 = c__8512__auto___43304;
var G__43307 = cljs.core.count(c__8512__auto___43304);
var G__43308 = (0);
seq__43285_43293 = G__43305;
chunk__43286_43294 = G__43306;
count__43287_43295 = G__43307;
i__43288_43296 = G__43308;
continue;
} else {
var msg_43309 = cljs.core.first(seq__43285_43303__$1);
figwheel.client.socket.handle_incoming_message(msg_43309);

var G__43310 = cljs.core.next(seq__43285_43303__$1);
var G__43311 = null;
var G__43312 = (0);
var G__43313 = (0);
seq__43285_43293 = G__43310;
chunk__43286_43294 = G__43311;
count__43287_43295 = G__43312;
i__43288_43296 = G__43313;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open(system_options);
});
return setTimeout(G__43284);
})())
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__8829__auto__ = [];
var len__8822__auto___43318 = arguments.length;
var i__8823__auto___43319 = (0);
while(true){
if((i__8823__auto___43319 < len__8822__auto___43318)){
args__8829__auto__.push((arguments[i__8823__auto___43319]));

var G__43320 = (i__8823__auto___43319 + (1));
i__8823__auto___43319 = G__43320;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43315){
var map__43316 = p__43315;
var map__43316__$1 = ((((!((map__43316 == null)))?((((map__43316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43316):map__43316);
var opts = map__43316__$1;
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1(opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43314){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq43314));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string(goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e43322){if((e43322 instanceof Error)){
var e = e43322;
(cljs.core._STAR_print_err_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_err_fn_STAR_.cljs$core$IFn$_invoke$arity$1("Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment") : cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment"));

return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$autoload,false], null);
} else {
throw e43322;

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
return (function (p__43326){
var map__43327 = p__43326;
var map__43327__$1 = ((((!((map__43327 == null)))?((((map__43327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43327.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43327):map__43327);
var msg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43327__$1,cljs.core.cst$kw$msg_DASH_name);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(msg_name,cljs.core.cst$kw$files_DASH_changed)){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});
