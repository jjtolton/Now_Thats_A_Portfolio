// Compiled by ClojureScript 1.9.518 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
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
var args63718 = [];
var len__29970__auto___63721 = arguments.length;
var i__29971__auto___63722 = (0);
while(true){
if((i__29971__auto___63722 < len__29970__auto___63721)){
args63718.push((arguments[i__29971__auto___63722]));

var G__63723 = (i__29971__auto___63722 + (1));
i__29971__auto___63722 = G__63723;
continue;
} else {
}
break;
}

var G__63720 = args63718.length;
switch (G__63720) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args63718.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29977__auto__ = [];
var len__29970__auto___63726 = arguments.length;
var i__29971__auto___63727 = (0);
while(true){
if((i__29971__auto___63727 < len__29970__auto___63726)){
args__29977__auto__.push((arguments[i__29971__auto___63727]));

var G__63728 = (i__29971__auto___63727 + (1));
i__29971__auto___63727 = G__63728;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq63725){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq63725));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29977__auto__ = [];
var len__29970__auto___63730 = arguments.length;
var i__29971__auto___63731 = (0);
while(true){
if((i__29971__auto___63731 < len__29970__auto___63730)){
args__29977__auto__.push((arguments[i__29971__auto___63731]));

var G__63732 = (i__29971__auto___63731 + (1));
i__29971__auto___63731 = G__63732;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq63729){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq63729));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

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

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
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

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__63733){
var map__63736 = p__63733;
var map__63736__$1 = ((((!((map__63736 == null)))?((((map__63736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63736):map__63736);
var message = cljs.core.get.call(null,map__63736__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__63736__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28749__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28737__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28737__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28737__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__40635__auto___63898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___63898,ch){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___63898,ch){
return (function (state_63867){
var state_val_63868 = (state_63867[(1)]);
if((state_val_63868 === (7))){
var inst_63863 = (state_63867[(2)]);
var state_63867__$1 = state_63867;
var statearr_63869_63899 = state_63867__$1;
(statearr_63869_63899[(2)] = inst_63863);

(statearr_63869_63899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63868 === (1))){
var state_63867__$1 = state_63867;
var statearr_63870_63900 = state_63867__$1;
(statearr_63870_63900[(2)] = null);

(statearr_63870_63900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63868 === (4))){
var inst_63820 = (state_63867[(7)]);
var inst_63820__$1 = (state_63867[(2)]);
var state_63867__$1 = (function (){var statearr_63871 = state_63867;
(statearr_63871[(7)] = inst_63820__$1);

return statearr_63871;
})();
if(cljs.core.truth_(inst_63820__$1)){
var statearr_63872_63901 = state_63867__$1;
(statearr_63872_63901[(1)] = (5));

} else {
var statearr_63873_63902 = state_63867__$1;
(statearr_63873_63902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63868 === (15))){
var inst_63827 = (state_63867[(8)]);
var inst_63842 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_63827);
var inst_63843 = cljs.core.first.call(null,inst_63842);
var inst_63844 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_63843);
var inst_63845 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_63844)].join('');
var inst_63846 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_63845);
var state_63867__$1 = state_63867;
var statearr_63874_63903 = state_63867__$1;
(statearr_63874_63903[(2)] = inst_63846);

(statearr_63874_63903[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63868 === (13))){
var inst_63851 = (state_63867[(2)]);
var state_63867__$1 = state_63867;
var statearr_63875_63904 = state_63867__$1;
(statearr_63875_63904[(2)] = inst_63851);

(statearr_63875_63904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63868 === (6))){
var state_63867__$1 = state_63867;
var statearr_63876_63905 = state_63867__$1;
(statearr_63876_63905[(2)] = null);

(statearr_63876_63905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63868 === (17))){
var inst_63849 = (state_63867[(2)]);
var state_63867__$1 = state_63867;
var statearr_63877_63906 = state_63867__$1;
(statearr_63877_63906[(2)] = inst_63849);

(statearr_63877_63906[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63868 === (3))){
var inst_63865 = (state_63867[(2)]);
var state_63867__$1 = state_63867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63867__$1,inst_63865);
} else {
if((state_val_63868 === (12))){
var inst_63826 = (state_63867[(9)]);
var inst_63840 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_63826,opts);
var state_63867__$1 = state_63867;
if(cljs.core.truth_(inst_63840)){
var statearr_63878_63907 = state_63867__$1;
(statearr_63878_63907[(1)] = (15));

} else {
var statearr_63879_63908 = state_63867__$1;
(statearr_63879_63908[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63868 === (2))){
var state_63867__$1 = state_63867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63867__$1,(4),ch);
} else {
if((state_val_63868 === (11))){
var inst_63827 = (state_63867[(8)]);
var inst_63832 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_63833 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_63827);
var inst_63834 = cljs.core.async.timeout.call(null,(1000));
var inst_63835 = [inst_63833,inst_63834];
var inst_63836 = (new cljs.core.PersistentVector(null,2,(5),inst_63832,inst_63835,null));
var state_63867__$1 = state_63867;
return cljs.core.async.ioc_alts_BANG_.call(null,state_63867__$1,(14),inst_63836);
} else {
if((state_val_63868 === (9))){
var inst_63827 = (state_63867[(8)]);
var inst_63853 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_63854 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_63827);
var inst_63855 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_63854);
var inst_63856 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_63855)].join('');
var inst_63857 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_63856);
var state_63867__$1 = (function (){var statearr_63880 = state_63867;
(statearr_63880[(10)] = inst_63853);

return statearr_63880;
})();
var statearr_63881_63909 = state_63867__$1;
(statearr_63881_63909[(2)] = inst_63857);

(statearr_63881_63909[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63868 === (5))){
var inst_63820 = (state_63867[(7)]);
var inst_63822 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_63823 = (new cljs.core.PersistentArrayMap(null,2,inst_63822,null));
var inst_63824 = (new cljs.core.PersistentHashSet(null,inst_63823,null));
var inst_63825 = figwheel.client.focus_msgs.call(null,inst_63824,inst_63820);
var inst_63826 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_63825);
var inst_63827 = cljs.core.first.call(null,inst_63825);
var inst_63828 = figwheel.client.autoload_QMARK_.call(null);
var state_63867__$1 = (function (){var statearr_63882 = state_63867;
(statearr_63882[(9)] = inst_63826);

(statearr_63882[(8)] = inst_63827);

return statearr_63882;
})();
if(cljs.core.truth_(inst_63828)){
var statearr_63883_63910 = state_63867__$1;
(statearr_63883_63910[(1)] = (8));

} else {
var statearr_63884_63911 = state_63867__$1;
(statearr_63884_63911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63868 === (14))){
var inst_63838 = (state_63867[(2)]);
var state_63867__$1 = state_63867;
var statearr_63885_63912 = state_63867__$1;
(statearr_63885_63912[(2)] = inst_63838);

(statearr_63885_63912[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63868 === (16))){
var state_63867__$1 = state_63867;
var statearr_63886_63913 = state_63867__$1;
(statearr_63886_63913[(2)] = null);

(statearr_63886_63913[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63868 === (10))){
var inst_63859 = (state_63867[(2)]);
var state_63867__$1 = (function (){var statearr_63887 = state_63867;
(statearr_63887[(11)] = inst_63859);

return statearr_63887;
})();
var statearr_63888_63914 = state_63867__$1;
(statearr_63888_63914[(2)] = null);

(statearr_63888_63914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63868 === (8))){
var inst_63826 = (state_63867[(9)]);
var inst_63830 = figwheel.client.reload_file_state_QMARK_.call(null,inst_63826,opts);
var state_63867__$1 = state_63867;
if(cljs.core.truth_(inst_63830)){
var statearr_63889_63915 = state_63867__$1;
(statearr_63889_63915[(1)] = (11));

} else {
var statearr_63890_63916 = state_63867__$1;
(statearr_63890_63916[(1)] = (12));

}

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
});})(c__40635__auto___63898,ch))
;
return ((function (switch__40521__auto__,c__40635__auto___63898,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__40522__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__40522__auto____0 = (function (){
var statearr_63894 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63894[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__40522__auto__);

(statearr_63894[(1)] = (1));

return statearr_63894;
});
var figwheel$client$file_reloader_plugin_$_state_machine__40522__auto____1 = (function (state_63867){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_63867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e63895){if((e63895 instanceof Object)){
var ex__40525__auto__ = e63895;
var statearr_63896_63917 = state_63867;
(statearr_63896_63917[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63918 = state_63867;
state_63867 = G__63918;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__40522__auto__ = function(state_63867){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__40522__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__40522__auto____1.call(this,state_63867);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__40522__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__40522__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___63898,ch))
})();
var state__40637__auto__ = (function (){var statearr_63897 = f__40636__auto__.call(null);
(statearr_63897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___63898);

return statearr_63897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___63898,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__63919_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__63919_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_63922 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_63922){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e63921){if((e63921 instanceof Error)){
var e = e63921;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_63922], null));
} else {
var e = e63921;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_63922))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__63923){
var map__63932 = p__63923;
var map__63932__$1 = ((((!((map__63932 == null)))?((((map__63932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63932):map__63932);
var opts = map__63932__$1;
var build_id = cljs.core.get.call(null,map__63932__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__63932,map__63932__$1,opts,build_id){
return (function (p__63934){
var vec__63935 = p__63934;
var seq__63936 = cljs.core.seq.call(null,vec__63935);
var first__63937 = cljs.core.first.call(null,seq__63936);
var seq__63936__$1 = cljs.core.next.call(null,seq__63936);
var map__63938 = first__63937;
var map__63938__$1 = ((((!((map__63938 == null)))?((((map__63938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63938.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63938):map__63938);
var msg = map__63938__$1;
var msg_name = cljs.core.get.call(null,map__63938__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__63936__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__63935,seq__63936,first__63937,seq__63936__$1,map__63938,map__63938__$1,msg,msg_name,_,map__63932,map__63932__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__63935,seq__63936,first__63937,seq__63936__$1,map__63938,map__63938__$1,msg,msg_name,_,map__63932,map__63932__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__63932,map__63932__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__63946){
var vec__63947 = p__63946;
var seq__63948 = cljs.core.seq.call(null,vec__63947);
var first__63949 = cljs.core.first.call(null,seq__63948);
var seq__63948__$1 = cljs.core.next.call(null,seq__63948);
var map__63950 = first__63949;
var map__63950__$1 = ((((!((map__63950 == null)))?((((map__63950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63950.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63950):map__63950);
var msg = map__63950__$1;
var msg_name = cljs.core.get.call(null,map__63950__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__63948__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__63952){
var map__63964 = p__63952;
var map__63964__$1 = ((((!((map__63964 == null)))?((((map__63964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63964):map__63964);
var on_compile_warning = cljs.core.get.call(null,map__63964__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__63964__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__63964,map__63964__$1,on_compile_warning,on_compile_fail){
return (function (p__63966){
var vec__63967 = p__63966;
var seq__63968 = cljs.core.seq.call(null,vec__63967);
var first__63969 = cljs.core.first.call(null,seq__63968);
var seq__63968__$1 = cljs.core.next.call(null,seq__63968);
var map__63970 = first__63969;
var map__63970__$1 = ((((!((map__63970 == null)))?((((map__63970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63970):map__63970);
var msg = map__63970__$1;
var msg_name = cljs.core.get.call(null,map__63970__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__63968__$1;
var pred__63972 = cljs.core._EQ_;
var expr__63973 = msg_name;
if(cljs.core.truth_(pred__63972.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__63973))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__63972.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__63973))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__63964,map__63964__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__40635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto__,msg_hist,msg_names,msg){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto__,msg_hist,msg_names,msg){
return (function (state_64201){
var state_val_64202 = (state_64201[(1)]);
if((state_val_64202 === (7))){
var inst_64121 = (state_64201[(2)]);
var state_64201__$1 = state_64201;
if(cljs.core.truth_(inst_64121)){
var statearr_64203_64253 = state_64201__$1;
(statearr_64203_64253[(1)] = (8));

} else {
var statearr_64204_64254 = state_64201__$1;
(statearr_64204_64254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (20))){
var inst_64195 = (state_64201[(2)]);
var state_64201__$1 = state_64201;
var statearr_64205_64255 = state_64201__$1;
(statearr_64205_64255[(2)] = inst_64195);

(statearr_64205_64255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (27))){
var inst_64191 = (state_64201[(2)]);
var state_64201__$1 = state_64201;
var statearr_64206_64256 = state_64201__$1;
(statearr_64206_64256[(2)] = inst_64191);

(statearr_64206_64256[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (1))){
var inst_64114 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_64201__$1 = state_64201;
if(cljs.core.truth_(inst_64114)){
var statearr_64207_64257 = state_64201__$1;
(statearr_64207_64257[(1)] = (2));

} else {
var statearr_64208_64258 = state_64201__$1;
(statearr_64208_64258[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (24))){
var inst_64193 = (state_64201[(2)]);
var state_64201__$1 = state_64201;
var statearr_64209_64259 = state_64201__$1;
(statearr_64209_64259[(2)] = inst_64193);

(statearr_64209_64259[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (4))){
var inst_64199 = (state_64201[(2)]);
var state_64201__$1 = state_64201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64201__$1,inst_64199);
} else {
if((state_val_64202 === (15))){
var inst_64197 = (state_64201[(2)]);
var state_64201__$1 = state_64201;
var statearr_64210_64260 = state_64201__$1;
(statearr_64210_64260[(2)] = inst_64197);

(statearr_64210_64260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (21))){
var inst_64150 = (state_64201[(2)]);
var inst_64151 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64152 = figwheel.client.auto_jump_to_error.call(null,opts,inst_64151);
var state_64201__$1 = (function (){var statearr_64211 = state_64201;
(statearr_64211[(7)] = inst_64150);

return statearr_64211;
})();
var statearr_64212_64261 = state_64201__$1;
(statearr_64212_64261[(2)] = inst_64152);

(statearr_64212_64261[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (31))){
var inst_64180 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_64201__$1 = state_64201;
if(cljs.core.truth_(inst_64180)){
var statearr_64213_64262 = state_64201__$1;
(statearr_64213_64262[(1)] = (34));

} else {
var statearr_64214_64263 = state_64201__$1;
(statearr_64214_64263[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (32))){
var inst_64189 = (state_64201[(2)]);
var state_64201__$1 = state_64201;
var statearr_64215_64264 = state_64201__$1;
(statearr_64215_64264[(2)] = inst_64189);

(statearr_64215_64264[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (33))){
var inst_64176 = (state_64201[(2)]);
var inst_64177 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64178 = figwheel.client.auto_jump_to_error.call(null,opts,inst_64177);
var state_64201__$1 = (function (){var statearr_64216 = state_64201;
(statearr_64216[(8)] = inst_64176);

return statearr_64216;
})();
var statearr_64217_64265 = state_64201__$1;
(statearr_64217_64265[(2)] = inst_64178);

(statearr_64217_64265[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (13))){
var inst_64135 = figwheel.client.heads_up.clear.call(null);
var state_64201__$1 = state_64201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64201__$1,(16),inst_64135);
} else {
if((state_val_64202 === (22))){
var inst_64156 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64157 = figwheel.client.heads_up.append_warning_message.call(null,inst_64156);
var state_64201__$1 = state_64201;
var statearr_64218_64266 = state_64201__$1;
(statearr_64218_64266[(2)] = inst_64157);

(statearr_64218_64266[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (36))){
var inst_64187 = (state_64201[(2)]);
var state_64201__$1 = state_64201;
var statearr_64219_64267 = state_64201__$1;
(statearr_64219_64267[(2)] = inst_64187);

(statearr_64219_64267[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (29))){
var inst_64167 = (state_64201[(2)]);
var inst_64168 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64169 = figwheel.client.auto_jump_to_error.call(null,opts,inst_64168);
var state_64201__$1 = (function (){var statearr_64220 = state_64201;
(statearr_64220[(9)] = inst_64167);

return statearr_64220;
})();
var statearr_64221_64268 = state_64201__$1;
(statearr_64221_64268[(2)] = inst_64169);

(statearr_64221_64268[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (6))){
var inst_64116 = (state_64201[(10)]);
var state_64201__$1 = state_64201;
var statearr_64222_64269 = state_64201__$1;
(statearr_64222_64269[(2)] = inst_64116);

(statearr_64222_64269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (28))){
var inst_64163 = (state_64201[(2)]);
var inst_64164 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64165 = figwheel.client.heads_up.display_warning.call(null,inst_64164);
var state_64201__$1 = (function (){var statearr_64223 = state_64201;
(statearr_64223[(11)] = inst_64163);

return statearr_64223;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64201__$1,(29),inst_64165);
} else {
if((state_val_64202 === (25))){
var inst_64161 = figwheel.client.heads_up.clear.call(null);
var state_64201__$1 = state_64201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64201__$1,(28),inst_64161);
} else {
if((state_val_64202 === (34))){
var inst_64182 = figwheel.client.heads_up.flash_loaded.call(null);
var state_64201__$1 = state_64201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64201__$1,(37),inst_64182);
} else {
if((state_val_64202 === (17))){
var inst_64141 = (state_64201[(2)]);
var inst_64142 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64143 = figwheel.client.auto_jump_to_error.call(null,opts,inst_64142);
var state_64201__$1 = (function (){var statearr_64224 = state_64201;
(statearr_64224[(12)] = inst_64141);

return statearr_64224;
})();
var statearr_64225_64270 = state_64201__$1;
(statearr_64225_64270[(2)] = inst_64143);

(statearr_64225_64270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (3))){
var inst_64133 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_64201__$1 = state_64201;
if(cljs.core.truth_(inst_64133)){
var statearr_64226_64271 = state_64201__$1;
(statearr_64226_64271[(1)] = (13));

} else {
var statearr_64227_64272 = state_64201__$1;
(statearr_64227_64272[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (12))){
var inst_64129 = (state_64201[(2)]);
var state_64201__$1 = state_64201;
var statearr_64228_64273 = state_64201__$1;
(statearr_64228_64273[(2)] = inst_64129);

(statearr_64228_64273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (2))){
var inst_64116 = (state_64201[(10)]);
var inst_64116__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_64201__$1 = (function (){var statearr_64229 = state_64201;
(statearr_64229[(10)] = inst_64116__$1);

return statearr_64229;
})();
if(cljs.core.truth_(inst_64116__$1)){
var statearr_64230_64274 = state_64201__$1;
(statearr_64230_64274[(1)] = (5));

} else {
var statearr_64231_64275 = state_64201__$1;
(statearr_64231_64275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (23))){
var inst_64159 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_64201__$1 = state_64201;
if(cljs.core.truth_(inst_64159)){
var statearr_64232_64276 = state_64201__$1;
(statearr_64232_64276[(1)] = (25));

} else {
var statearr_64233_64277 = state_64201__$1;
(statearr_64233_64277[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (35))){
var state_64201__$1 = state_64201;
var statearr_64234_64278 = state_64201__$1;
(statearr_64234_64278[(2)] = null);

(statearr_64234_64278[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (19))){
var inst_64154 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_64201__$1 = state_64201;
if(cljs.core.truth_(inst_64154)){
var statearr_64235_64279 = state_64201__$1;
(statearr_64235_64279[(1)] = (22));

} else {
var statearr_64236_64280 = state_64201__$1;
(statearr_64236_64280[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (11))){
var inst_64125 = (state_64201[(2)]);
var state_64201__$1 = state_64201;
var statearr_64237_64281 = state_64201__$1;
(statearr_64237_64281[(2)] = inst_64125);

(statearr_64237_64281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (9))){
var inst_64127 = figwheel.client.heads_up.clear.call(null);
var state_64201__$1 = state_64201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64201__$1,(12),inst_64127);
} else {
if((state_val_64202 === (5))){
var inst_64118 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_64201__$1 = state_64201;
var statearr_64238_64282 = state_64201__$1;
(statearr_64238_64282[(2)] = inst_64118);

(statearr_64238_64282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (14))){
var inst_64145 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_64201__$1 = state_64201;
if(cljs.core.truth_(inst_64145)){
var statearr_64239_64283 = state_64201__$1;
(statearr_64239_64283[(1)] = (18));

} else {
var statearr_64240_64284 = state_64201__$1;
(statearr_64240_64284[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (26))){
var inst_64171 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_64201__$1 = state_64201;
if(cljs.core.truth_(inst_64171)){
var statearr_64241_64285 = state_64201__$1;
(statearr_64241_64285[(1)] = (30));

} else {
var statearr_64242_64286 = state_64201__$1;
(statearr_64242_64286[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (16))){
var inst_64137 = (state_64201[(2)]);
var inst_64138 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64139 = figwheel.client.heads_up.display_exception.call(null,inst_64138);
var state_64201__$1 = (function (){var statearr_64243 = state_64201;
(statearr_64243[(13)] = inst_64137);

return statearr_64243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64201__$1,(17),inst_64139);
} else {
if((state_val_64202 === (30))){
var inst_64173 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64174 = figwheel.client.heads_up.display_warning.call(null,inst_64173);
var state_64201__$1 = state_64201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64201__$1,(33),inst_64174);
} else {
if((state_val_64202 === (10))){
var inst_64131 = (state_64201[(2)]);
var state_64201__$1 = state_64201;
var statearr_64244_64287 = state_64201__$1;
(statearr_64244_64287[(2)] = inst_64131);

(statearr_64244_64287[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (18))){
var inst_64147 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_64148 = figwheel.client.heads_up.display_exception.call(null,inst_64147);
var state_64201__$1 = state_64201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64201__$1,(21),inst_64148);
} else {
if((state_val_64202 === (37))){
var inst_64184 = (state_64201[(2)]);
var state_64201__$1 = state_64201;
var statearr_64245_64288 = state_64201__$1;
(statearr_64245_64288[(2)] = inst_64184);

(statearr_64245_64288[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64202 === (8))){
var inst_64123 = figwheel.client.heads_up.flash_loaded.call(null);
var state_64201__$1 = state_64201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64201__$1,(11),inst_64123);
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
});})(c__40635__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__40521__auto__,c__40635__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40522__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40522__auto____0 = (function (){
var statearr_64249 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64249[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40522__auto__);

(statearr_64249[(1)] = (1));

return statearr_64249;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40522__auto____1 = (function (state_64201){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_64201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e64250){if((e64250 instanceof Object)){
var ex__40525__auto__ = e64250;
var statearr_64251_64289 = state_64201;
(statearr_64251_64289[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64290 = state_64201;
state_64201 = G__64290;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40522__auto__ = function(state_64201){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40522__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40522__auto____1.call(this,state_64201);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40522__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40522__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto__,msg_hist,msg_names,msg))
})();
var state__40637__auto__ = (function (){var statearr_64252 = f__40636__auto__.call(null);
(statearr_64252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto__);

return statearr_64252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto__,msg_hist,msg_names,msg))
);

return c__40635__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__40635__auto___64353 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___64353,ch){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___64353,ch){
return (function (state_64336){
var state_val_64337 = (state_64336[(1)]);
if((state_val_64337 === (1))){
var state_64336__$1 = state_64336;
var statearr_64338_64354 = state_64336__$1;
(statearr_64338_64354[(2)] = null);

(statearr_64338_64354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64337 === (2))){
var state_64336__$1 = state_64336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64336__$1,(4),ch);
} else {
if((state_val_64337 === (3))){
var inst_64334 = (state_64336[(2)]);
var state_64336__$1 = state_64336;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64336__$1,inst_64334);
} else {
if((state_val_64337 === (4))){
var inst_64324 = (state_64336[(7)]);
var inst_64324__$1 = (state_64336[(2)]);
var state_64336__$1 = (function (){var statearr_64339 = state_64336;
(statearr_64339[(7)] = inst_64324__$1);

return statearr_64339;
})();
if(cljs.core.truth_(inst_64324__$1)){
var statearr_64340_64355 = state_64336__$1;
(statearr_64340_64355[(1)] = (5));

} else {
var statearr_64341_64356 = state_64336__$1;
(statearr_64341_64356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64337 === (5))){
var inst_64324 = (state_64336[(7)]);
var inst_64326 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_64324);
var state_64336__$1 = state_64336;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64336__$1,(8),inst_64326);
} else {
if((state_val_64337 === (6))){
var state_64336__$1 = state_64336;
var statearr_64342_64357 = state_64336__$1;
(statearr_64342_64357[(2)] = null);

(statearr_64342_64357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64337 === (7))){
var inst_64332 = (state_64336[(2)]);
var state_64336__$1 = state_64336;
var statearr_64343_64358 = state_64336__$1;
(statearr_64343_64358[(2)] = inst_64332);

(statearr_64343_64358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64337 === (8))){
var inst_64328 = (state_64336[(2)]);
var state_64336__$1 = (function (){var statearr_64344 = state_64336;
(statearr_64344[(8)] = inst_64328);

return statearr_64344;
})();
var statearr_64345_64359 = state_64336__$1;
(statearr_64345_64359[(2)] = null);

(statearr_64345_64359[(1)] = (2));


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
});})(c__40635__auto___64353,ch))
;
return ((function (switch__40521__auto__,c__40635__auto___64353,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__40522__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__40522__auto____0 = (function (){
var statearr_64349 = [null,null,null,null,null,null,null,null,null];
(statearr_64349[(0)] = figwheel$client$heads_up_plugin_$_state_machine__40522__auto__);

(statearr_64349[(1)] = (1));

return statearr_64349;
});
var figwheel$client$heads_up_plugin_$_state_machine__40522__auto____1 = (function (state_64336){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_64336);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e64350){if((e64350 instanceof Object)){
var ex__40525__auto__ = e64350;
var statearr_64351_64360 = state_64336;
(statearr_64351_64360[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64361 = state_64336;
state_64336 = G__64361;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__40522__auto__ = function(state_64336){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__40522__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__40522__auto____1.call(this,state_64336);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__40522__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__40522__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___64353,ch))
})();
var state__40637__auto__ = (function (){var statearr_64352 = f__40636__auto__.call(null);
(statearr_64352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___64353);

return statearr_64352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___64353,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__40635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto__){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto__){
return (function (state_64382){
var state_val_64383 = (state_64382[(1)]);
if((state_val_64383 === (1))){
var inst_64377 = cljs.core.async.timeout.call(null,(3000));
var state_64382__$1 = state_64382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64382__$1,(2),inst_64377);
} else {
if((state_val_64383 === (2))){
var inst_64379 = (state_64382[(2)]);
var inst_64380 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_64382__$1 = (function (){var statearr_64384 = state_64382;
(statearr_64384[(7)] = inst_64379);

return statearr_64384;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64382__$1,inst_64380);
} else {
return null;
}
}
});})(c__40635__auto__))
;
return ((function (switch__40521__auto__,c__40635__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__40522__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__40522__auto____0 = (function (){
var statearr_64388 = [null,null,null,null,null,null,null,null];
(statearr_64388[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__40522__auto__);

(statearr_64388[(1)] = (1));

return statearr_64388;
});
var figwheel$client$enforce_project_plugin_$_state_machine__40522__auto____1 = (function (state_64382){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_64382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e64389){if((e64389 instanceof Object)){
var ex__40525__auto__ = e64389;
var statearr_64390_64392 = state_64382;
(statearr_64390_64392[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64389;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64393 = state_64382;
state_64382 = G__64393;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__40522__auto__ = function(state_64382){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__40522__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__40522__auto____1.call(this,state_64382);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__40522__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__40522__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto__))
})();
var state__40637__auto__ = (function (){var statearr_64391 = f__40636__auto__.call(null);
(statearr_64391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto__);

return statearr_64391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto__))
);

return c__40635__auto__;
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
var temp__6738__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__6738__auto__)){
var figwheel_version = temp__6738__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__40635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto__,figwheel_version,temp__6738__auto__){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto__,figwheel_version,temp__6738__auto__){
return (function (state_64416){
var state_val_64417 = (state_64416[(1)]);
if((state_val_64417 === (1))){
var inst_64410 = cljs.core.async.timeout.call(null,(2000));
var state_64416__$1 = state_64416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64416__$1,(2),inst_64410);
} else {
if((state_val_64417 === (2))){
var inst_64412 = (state_64416[(2)]);
var inst_64413 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_64414 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_64413);
var state_64416__$1 = (function (){var statearr_64418 = state_64416;
(statearr_64418[(7)] = inst_64412);

return statearr_64418;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64416__$1,inst_64414);
} else {
return null;
}
}
});})(c__40635__auto__,figwheel_version,temp__6738__auto__))
;
return ((function (switch__40521__auto__,c__40635__auto__,figwheel_version,temp__6738__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40522__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40522__auto____0 = (function (){
var statearr_64422 = [null,null,null,null,null,null,null,null];
(statearr_64422[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40522__auto__);

(statearr_64422[(1)] = (1));

return statearr_64422;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40522__auto____1 = (function (state_64416){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_64416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e64423){if((e64423 instanceof Object)){
var ex__40525__auto__ = e64423;
var statearr_64424_64426 = state_64416;
(statearr_64424_64426[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64427 = state_64416;
state_64416 = G__64427;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40522__auto__ = function(state_64416){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40522__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40522__auto____1.call(this,state_64416);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40522__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40522__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto__,figwheel_version,temp__6738__auto__))
})();
var state__40637__auto__ = (function (){var statearr_64425 = f__40636__auto__.call(null);
(statearr_64425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto__);

return statearr_64425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto__,figwheel_version,temp__6738__auto__))
);

return c__40635__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__64428){
var map__64432 = p__64428;
var map__64432__$1 = ((((!((map__64432 == null)))?((((map__64432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64432):map__64432);
var file = cljs.core.get.call(null,map__64432__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__64432__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__64432__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__64434 = "";
var G__64434__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64434),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__64434);
var G__64434__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64434__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__64434__$1);
if(cljs.core.truth_((function (){var and__28737__auto__ = line;
if(cljs.core.truth_(and__28737__auto__)){
return column;
} else {
return and__28737__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64434__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__64434__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__64435){
var map__64442 = p__64435;
var map__64442__$1 = ((((!((map__64442 == null)))?((((map__64442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64442):map__64442);
var ed = map__64442__$1;
var formatted_exception = cljs.core.get.call(null,map__64442__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__64442__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__64442__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__64444_64448 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__64445_64449 = null;
var count__64446_64450 = (0);
var i__64447_64451 = (0);
while(true){
if((i__64447_64451 < count__64446_64450)){
var msg_64452 = cljs.core._nth.call(null,chunk__64445_64449,i__64447_64451);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_64452);

var G__64453 = seq__64444_64448;
var G__64454 = chunk__64445_64449;
var G__64455 = count__64446_64450;
var G__64456 = (i__64447_64451 + (1));
seq__64444_64448 = G__64453;
chunk__64445_64449 = G__64454;
count__64446_64450 = G__64455;
i__64447_64451 = G__64456;
continue;
} else {
var temp__6738__auto___64457 = cljs.core.seq.call(null,seq__64444_64448);
if(temp__6738__auto___64457){
var seq__64444_64458__$1 = temp__6738__auto___64457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64444_64458__$1)){
var c__29660__auto___64459 = cljs.core.chunk_first.call(null,seq__64444_64458__$1);
var G__64460 = cljs.core.chunk_rest.call(null,seq__64444_64458__$1);
var G__64461 = c__29660__auto___64459;
var G__64462 = cljs.core.count.call(null,c__29660__auto___64459);
var G__64463 = (0);
seq__64444_64448 = G__64460;
chunk__64445_64449 = G__64461;
count__64446_64450 = G__64462;
i__64447_64451 = G__64463;
continue;
} else {
var msg_64464 = cljs.core.first.call(null,seq__64444_64458__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_64464);

var G__64465 = cljs.core.next.call(null,seq__64444_64458__$1);
var G__64466 = null;
var G__64467 = (0);
var G__64468 = (0);
seq__64444_64448 = G__64465;
chunk__64445_64449 = G__64466;
count__64446_64450 = G__64467;
i__64447_64451 = G__64468;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__64469){
var map__64472 = p__64469;
var map__64472__$1 = ((((!((map__64472 == null)))?((((map__64472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64472):map__64472);
var w = map__64472__$1;
var message = cljs.core.get.call(null,map__64472__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28737__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28737__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28737__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__64484 = cljs.core.seq.call(null,plugins);
var chunk__64485 = null;
var count__64486 = (0);
var i__64487 = (0);
while(true){
if((i__64487 < count__64486)){
var vec__64488 = cljs.core._nth.call(null,chunk__64485,i__64487);
var k = cljs.core.nth.call(null,vec__64488,(0),null);
var plugin = cljs.core.nth.call(null,vec__64488,(1),null);
if(cljs.core.truth_(plugin)){
var pl_64494 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__64484,chunk__64485,count__64486,i__64487,pl_64494,vec__64488,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_64494.call(null,msg_hist);
});})(seq__64484,chunk__64485,count__64486,i__64487,pl_64494,vec__64488,k,plugin))
);
} else {
}

var G__64495 = seq__64484;
var G__64496 = chunk__64485;
var G__64497 = count__64486;
var G__64498 = (i__64487 + (1));
seq__64484 = G__64495;
chunk__64485 = G__64496;
count__64486 = G__64497;
i__64487 = G__64498;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__64484);
if(temp__6738__auto__){
var seq__64484__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64484__$1)){
var c__29660__auto__ = cljs.core.chunk_first.call(null,seq__64484__$1);
var G__64499 = cljs.core.chunk_rest.call(null,seq__64484__$1);
var G__64500 = c__29660__auto__;
var G__64501 = cljs.core.count.call(null,c__29660__auto__);
var G__64502 = (0);
seq__64484 = G__64499;
chunk__64485 = G__64500;
count__64486 = G__64501;
i__64487 = G__64502;
continue;
} else {
var vec__64491 = cljs.core.first.call(null,seq__64484__$1);
var k = cljs.core.nth.call(null,vec__64491,(0),null);
var plugin = cljs.core.nth.call(null,vec__64491,(1),null);
if(cljs.core.truth_(plugin)){
var pl_64503 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__64484,chunk__64485,count__64486,i__64487,pl_64503,vec__64491,k,plugin,seq__64484__$1,temp__6738__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_64503.call(null,msg_hist);
});})(seq__64484,chunk__64485,count__64486,i__64487,pl_64503,vec__64491,k,plugin,seq__64484__$1,temp__6738__auto__))
);
} else {
}

var G__64504 = cljs.core.next.call(null,seq__64484__$1);
var G__64505 = null;
var G__64506 = (0);
var G__64507 = (0);
seq__64484 = G__64504;
chunk__64485 = G__64505;
count__64486 = G__64506;
i__64487 = G__64507;
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
var args64508 = [];
var len__29970__auto___64515 = arguments.length;
var i__29971__auto___64516 = (0);
while(true){
if((i__29971__auto___64516 < len__29970__auto___64515)){
args64508.push((arguments[i__29971__auto___64516]));

var G__64517 = (i__29971__auto___64516 + (1));
i__29971__auto___64516 = G__64517;
continue;
} else {
}
break;
}

var G__64510 = args64508.length;
switch (G__64510) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args64508.length)].join('')));

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
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__64511_64519 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__64512_64520 = null;
var count__64513_64521 = (0);
var i__64514_64522 = (0);
while(true){
if((i__64514_64522 < count__64513_64521)){
var msg_64523 = cljs.core._nth.call(null,chunk__64512_64520,i__64514_64522);
figwheel.client.socket.handle_incoming_message.call(null,msg_64523);

var G__64524 = seq__64511_64519;
var G__64525 = chunk__64512_64520;
var G__64526 = count__64513_64521;
var G__64527 = (i__64514_64522 + (1));
seq__64511_64519 = G__64524;
chunk__64512_64520 = G__64525;
count__64513_64521 = G__64526;
i__64514_64522 = G__64527;
continue;
} else {
var temp__6738__auto___64528 = cljs.core.seq.call(null,seq__64511_64519);
if(temp__6738__auto___64528){
var seq__64511_64529__$1 = temp__6738__auto___64528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__64511_64529__$1)){
var c__29660__auto___64530 = cljs.core.chunk_first.call(null,seq__64511_64529__$1);
var G__64531 = cljs.core.chunk_rest.call(null,seq__64511_64529__$1);
var G__64532 = c__29660__auto___64530;
var G__64533 = cljs.core.count.call(null,c__29660__auto___64530);
var G__64534 = (0);
seq__64511_64519 = G__64531;
chunk__64512_64520 = G__64532;
count__64513_64521 = G__64533;
i__64514_64522 = G__64534;
continue;
} else {
var msg_64535 = cljs.core.first.call(null,seq__64511_64529__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_64535);

var G__64536 = cljs.core.next.call(null,seq__64511_64529__$1);
var G__64537 = null;
var G__64538 = (0);
var G__64539 = (0);
seq__64511_64519 = G__64536;
chunk__64512_64520 = G__64537;
count__64513_64521 = G__64538;
i__64514_64522 = G__64539;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29977__auto__ = [];
var len__29970__auto___64544 = arguments.length;
var i__29971__auto___64545 = (0);
while(true){
if((i__29971__auto___64545 < len__29970__auto___64544)){
args__29977__auto__.push((arguments[i__29971__auto___64545]));

var G__64546 = (i__29971__auto___64545 + (1));
i__29971__auto___64545 = G__64546;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__64541){
var map__64542 = p__64541;
var map__64542__$1 = ((((!((map__64542 == null)))?((((map__64542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64542):map__64542);
var opts = map__64542__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq64540){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq64540));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e64548){if((e64548 instanceof Error)){
var e = e64548;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e64548;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__64552){
var map__64553 = p__64552;
var map__64553__$1 = ((((!((map__64553 == null)))?((((map__64553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__64553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64553):map__64553);
var msg_name = cljs.core.get.call(null,map__64553__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map