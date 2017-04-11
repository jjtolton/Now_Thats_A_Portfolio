// Compiled by ClojureScript 1.9.229 {}
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
var args18748 = [];
var len__7484__auto___18751 = arguments.length;
var i__7485__auto___18752 = (0);
while(true){
if((i__7485__auto___18752 < len__7484__auto___18751)){
args18748.push((arguments[i__7485__auto___18752]));

var G__18753 = (i__7485__auto___18752 + (1));
i__7485__auto___18752 = G__18753;
continue;
} else {
}
break;
}

var G__18750 = args18748.length;
switch (G__18750) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18748.length)].join('')));

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
var args__7491__auto__ = [];
var len__7484__auto___18756 = arguments.length;
var i__7485__auto___18757 = (0);
while(true){
if((i__7485__auto___18757 < len__7484__auto___18756)){
args__7491__auto__.push((arguments[i__7485__auto___18757]));

var G__18758 = (i__7485__auto___18757 + (1));
i__7485__auto___18757 = G__18758;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq18755){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18755));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__7491__auto__ = [];
var len__7484__auto___18760 = arguments.length;
var i__7485__auto___18761 = (0);
while(true){
if((i__7485__auto___18761 < len__7484__auto___18760)){
args__7491__auto__.push((arguments[i__7485__auto___18761]));

var G__18762 = (i__7485__auto___18761 + (1));
i__7485__auto___18761 = G__18762;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq18759){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18759));
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
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

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
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__18763){
var map__18766 = p__18763;
var map__18766__$1 = ((((!((map__18766 == null)))?((((map__18766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18766):map__18766);
var message = cljs.core.get.call(null,map__18766__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__18766__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__6409__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__6397__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__6397__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__6397__auto__;
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
var c__9355__auto___18928 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___18928,ch){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___18928,ch){
return (function (state_18897){
var state_val_18898 = (state_18897[(1)]);
if((state_val_18898 === (7))){
var inst_18893 = (state_18897[(2)]);
var state_18897__$1 = state_18897;
var statearr_18899_18929 = state_18897__$1;
(statearr_18899_18929[(2)] = inst_18893);

(statearr_18899_18929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (1))){
var state_18897__$1 = state_18897;
var statearr_18900_18930 = state_18897__$1;
(statearr_18900_18930[(2)] = null);

(statearr_18900_18930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (4))){
var inst_18850 = (state_18897[(7)]);
var inst_18850__$1 = (state_18897[(2)]);
var state_18897__$1 = (function (){var statearr_18901 = state_18897;
(statearr_18901[(7)] = inst_18850__$1);

return statearr_18901;
})();
if(cljs.core.truth_(inst_18850__$1)){
var statearr_18902_18931 = state_18897__$1;
(statearr_18902_18931[(1)] = (5));

} else {
var statearr_18903_18932 = state_18897__$1;
(statearr_18903_18932[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (15))){
var inst_18857 = (state_18897[(8)]);
var inst_18872 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_18857);
var inst_18873 = cljs.core.first.call(null,inst_18872);
var inst_18874 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_18873);
var inst_18875 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_18874)].join('');
var inst_18876 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_18875);
var state_18897__$1 = state_18897;
var statearr_18904_18933 = state_18897__$1;
(statearr_18904_18933[(2)] = inst_18876);

(statearr_18904_18933[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (13))){
var inst_18881 = (state_18897[(2)]);
var state_18897__$1 = state_18897;
var statearr_18905_18934 = state_18897__$1;
(statearr_18905_18934[(2)] = inst_18881);

(statearr_18905_18934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (6))){
var state_18897__$1 = state_18897;
var statearr_18906_18935 = state_18897__$1;
(statearr_18906_18935[(2)] = null);

(statearr_18906_18935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (17))){
var inst_18879 = (state_18897[(2)]);
var state_18897__$1 = state_18897;
var statearr_18907_18936 = state_18897__$1;
(statearr_18907_18936[(2)] = inst_18879);

(statearr_18907_18936[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (3))){
var inst_18895 = (state_18897[(2)]);
var state_18897__$1 = state_18897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18897__$1,inst_18895);
} else {
if((state_val_18898 === (12))){
var inst_18856 = (state_18897[(9)]);
var inst_18870 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_18856,opts);
var state_18897__$1 = state_18897;
if(cljs.core.truth_(inst_18870)){
var statearr_18908_18937 = state_18897__$1;
(statearr_18908_18937[(1)] = (15));

} else {
var statearr_18909_18938 = state_18897__$1;
(statearr_18909_18938[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (2))){
var state_18897__$1 = state_18897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18897__$1,(4),ch);
} else {
if((state_val_18898 === (11))){
var inst_18857 = (state_18897[(8)]);
var inst_18862 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18863 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_18857);
var inst_18864 = cljs.core.async.timeout.call(null,(1000));
var inst_18865 = [inst_18863,inst_18864];
var inst_18866 = (new cljs.core.PersistentVector(null,2,(5),inst_18862,inst_18865,null));
var state_18897__$1 = state_18897;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18897__$1,(14),inst_18866);
} else {
if((state_val_18898 === (9))){
var inst_18857 = (state_18897[(8)]);
var inst_18883 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_18884 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_18857);
var inst_18885 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_18884);
var inst_18886 = [cljs.core.str("Not loading: "),cljs.core.str(inst_18885)].join('');
var inst_18887 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_18886);
var state_18897__$1 = (function (){var statearr_18910 = state_18897;
(statearr_18910[(10)] = inst_18883);

return statearr_18910;
})();
var statearr_18911_18939 = state_18897__$1;
(statearr_18911_18939[(2)] = inst_18887);

(statearr_18911_18939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (5))){
var inst_18850 = (state_18897[(7)]);
var inst_18852 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_18853 = (new cljs.core.PersistentArrayMap(null,2,inst_18852,null));
var inst_18854 = (new cljs.core.PersistentHashSet(null,inst_18853,null));
var inst_18855 = figwheel.client.focus_msgs.call(null,inst_18854,inst_18850);
var inst_18856 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_18855);
var inst_18857 = cljs.core.first.call(null,inst_18855);
var inst_18858 = figwheel.client.autoload_QMARK_.call(null);
var state_18897__$1 = (function (){var statearr_18912 = state_18897;
(statearr_18912[(8)] = inst_18857);

(statearr_18912[(9)] = inst_18856);

return statearr_18912;
})();
if(cljs.core.truth_(inst_18858)){
var statearr_18913_18940 = state_18897__$1;
(statearr_18913_18940[(1)] = (8));

} else {
var statearr_18914_18941 = state_18897__$1;
(statearr_18914_18941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (14))){
var inst_18868 = (state_18897[(2)]);
var state_18897__$1 = state_18897;
var statearr_18915_18942 = state_18897__$1;
(statearr_18915_18942[(2)] = inst_18868);

(statearr_18915_18942[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (16))){
var state_18897__$1 = state_18897;
var statearr_18916_18943 = state_18897__$1;
(statearr_18916_18943[(2)] = null);

(statearr_18916_18943[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (10))){
var inst_18889 = (state_18897[(2)]);
var state_18897__$1 = (function (){var statearr_18917 = state_18897;
(statearr_18917[(11)] = inst_18889);

return statearr_18917;
})();
var statearr_18918_18944 = state_18897__$1;
(statearr_18918_18944[(2)] = null);

(statearr_18918_18944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18898 === (8))){
var inst_18856 = (state_18897[(9)]);
var inst_18860 = figwheel.client.reload_file_state_QMARK_.call(null,inst_18856,opts);
var state_18897__$1 = state_18897;
if(cljs.core.truth_(inst_18860)){
var statearr_18919_18945 = state_18897__$1;
(statearr_18919_18945[(1)] = (11));

} else {
var statearr_18920_18946 = state_18897__$1;
(statearr_18920_18946[(1)] = (12));

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
});})(c__9355__auto___18928,ch))
;
return ((function (switch__9243__auto__,c__9355__auto___18928,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__9244__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__9244__auto____0 = (function (){
var statearr_18924 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18924[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__9244__auto__);

(statearr_18924[(1)] = (1));

return statearr_18924;
});
var figwheel$client$file_reloader_plugin_$_state_machine__9244__auto____1 = (function (state_18897){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_18897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e18925){if((e18925 instanceof Object)){
var ex__9247__auto__ = e18925;
var statearr_18926_18947 = state_18897;
(statearr_18926_18947[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18948 = state_18897;
state_18897 = G__18948;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__9244__auto__ = function(state_18897){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__9244__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__9244__auto____1.call(this,state_18897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__9244__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__9244__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___18928,ch))
})();
var state__9357__auto__ = (function (){var statearr_18927 = f__9356__auto__.call(null);
(statearr_18927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___18928);

return statearr_18927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___18928,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__18949_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__18949_SHARP_));
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
var base_path_18952 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_18952){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e18951){if((e18951 instanceof Error)){
var e = e18951;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_18952], null));
} else {
var e = e18951;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_18952))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__18953){
var map__18962 = p__18953;
var map__18962__$1 = ((((!((map__18962 == null)))?((((map__18962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18962):map__18962);
var opts = map__18962__$1;
var build_id = cljs.core.get.call(null,map__18962__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__18962,map__18962__$1,opts,build_id){
return (function (p__18964){
var vec__18965 = p__18964;
var seq__18966 = cljs.core.seq.call(null,vec__18965);
var first__18967 = cljs.core.first.call(null,seq__18966);
var seq__18966__$1 = cljs.core.next.call(null,seq__18966);
var map__18968 = first__18967;
var map__18968__$1 = ((((!((map__18968 == null)))?((((map__18968.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18968.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18968):map__18968);
var msg = map__18968__$1;
var msg_name = cljs.core.get.call(null,map__18968__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__18966__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__18965,seq__18966,first__18967,seq__18966__$1,map__18968,map__18968__$1,msg,msg_name,_,map__18962,map__18962__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__18965,seq__18966,first__18967,seq__18966__$1,map__18968,map__18968__$1,msg,msg_name,_,map__18962,map__18962__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__18962,map__18962__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__18976){
var vec__18977 = p__18976;
var seq__18978 = cljs.core.seq.call(null,vec__18977);
var first__18979 = cljs.core.first.call(null,seq__18978);
var seq__18978__$1 = cljs.core.next.call(null,seq__18978);
var map__18980 = first__18979;
var map__18980__$1 = ((((!((map__18980 == null)))?((((map__18980.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18980.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18980):map__18980);
var msg = map__18980__$1;
var msg_name = cljs.core.get.call(null,map__18980__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__18978__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__18982){
var map__18994 = p__18982;
var map__18994__$1 = ((((!((map__18994 == null)))?((((map__18994.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18994.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18994):map__18994);
var on_compile_warning = cljs.core.get.call(null,map__18994__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__18994__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__18994,map__18994__$1,on_compile_warning,on_compile_fail){
return (function (p__18996){
var vec__18997 = p__18996;
var seq__18998 = cljs.core.seq.call(null,vec__18997);
var first__18999 = cljs.core.first.call(null,seq__18998);
var seq__18998__$1 = cljs.core.next.call(null,seq__18998);
var map__19000 = first__18999;
var map__19000__$1 = ((((!((map__19000 == null)))?((((map__19000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19000):map__19000);
var msg = map__19000__$1;
var msg_name = cljs.core.get.call(null,map__19000__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__18998__$1;
var pred__19002 = cljs.core._EQ_;
var expr__19003 = msg_name;
if(cljs.core.truth_(pred__19002.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__19003))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__19002.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__19003))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__18994,map__18994__$1,on_compile_warning,on_compile_fail))
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
var c__9355__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto__,msg_hist,msg_names,msg){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto__,msg_hist,msg_names,msg){
return (function (state_19231){
var state_val_19232 = (state_19231[(1)]);
if((state_val_19232 === (7))){
var inst_19151 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
if(cljs.core.truth_(inst_19151)){
var statearr_19233_19283 = state_19231__$1;
(statearr_19233_19283[(1)] = (8));

} else {
var statearr_19234_19284 = state_19231__$1;
(statearr_19234_19284[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (20))){
var inst_19225 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19235_19285 = state_19231__$1;
(statearr_19235_19285[(2)] = inst_19225);

(statearr_19235_19285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (27))){
var inst_19221 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19236_19286 = state_19231__$1;
(statearr_19236_19286[(2)] = inst_19221);

(statearr_19236_19286[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (1))){
var inst_19144 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_19231__$1 = state_19231;
if(cljs.core.truth_(inst_19144)){
var statearr_19237_19287 = state_19231__$1;
(statearr_19237_19287[(1)] = (2));

} else {
var statearr_19238_19288 = state_19231__$1;
(statearr_19238_19288[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (24))){
var inst_19223 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19239_19289 = state_19231__$1;
(statearr_19239_19289[(2)] = inst_19223);

(statearr_19239_19289[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (4))){
var inst_19229 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19231__$1,inst_19229);
} else {
if((state_val_19232 === (15))){
var inst_19227 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19240_19290 = state_19231__$1;
(statearr_19240_19290[(2)] = inst_19227);

(statearr_19240_19290[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (21))){
var inst_19180 = (state_19231[(2)]);
var inst_19181 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19182 = figwheel.client.auto_jump_to_error.call(null,opts,inst_19181);
var state_19231__$1 = (function (){var statearr_19241 = state_19231;
(statearr_19241[(7)] = inst_19180);

return statearr_19241;
})();
var statearr_19242_19291 = state_19231__$1;
(statearr_19242_19291[(2)] = inst_19182);

(statearr_19242_19291[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (31))){
var inst_19210 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_19231__$1 = state_19231;
if(cljs.core.truth_(inst_19210)){
var statearr_19243_19292 = state_19231__$1;
(statearr_19243_19292[(1)] = (34));

} else {
var statearr_19244_19293 = state_19231__$1;
(statearr_19244_19293[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (32))){
var inst_19219 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19245_19294 = state_19231__$1;
(statearr_19245_19294[(2)] = inst_19219);

(statearr_19245_19294[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (33))){
var inst_19206 = (state_19231[(2)]);
var inst_19207 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19208 = figwheel.client.auto_jump_to_error.call(null,opts,inst_19207);
var state_19231__$1 = (function (){var statearr_19246 = state_19231;
(statearr_19246[(8)] = inst_19206);

return statearr_19246;
})();
var statearr_19247_19295 = state_19231__$1;
(statearr_19247_19295[(2)] = inst_19208);

(statearr_19247_19295[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (13))){
var inst_19165 = figwheel.client.heads_up.clear.call(null);
var state_19231__$1 = state_19231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19231__$1,(16),inst_19165);
} else {
if((state_val_19232 === (22))){
var inst_19186 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19187 = figwheel.client.heads_up.append_warning_message.call(null,inst_19186);
var state_19231__$1 = state_19231;
var statearr_19248_19296 = state_19231__$1;
(statearr_19248_19296[(2)] = inst_19187);

(statearr_19248_19296[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (36))){
var inst_19217 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19249_19297 = state_19231__$1;
(statearr_19249_19297[(2)] = inst_19217);

(statearr_19249_19297[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (29))){
var inst_19197 = (state_19231[(2)]);
var inst_19198 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19199 = figwheel.client.auto_jump_to_error.call(null,opts,inst_19198);
var state_19231__$1 = (function (){var statearr_19250 = state_19231;
(statearr_19250[(9)] = inst_19197);

return statearr_19250;
})();
var statearr_19251_19298 = state_19231__$1;
(statearr_19251_19298[(2)] = inst_19199);

(statearr_19251_19298[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (6))){
var inst_19146 = (state_19231[(10)]);
var state_19231__$1 = state_19231;
var statearr_19252_19299 = state_19231__$1;
(statearr_19252_19299[(2)] = inst_19146);

(statearr_19252_19299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (28))){
var inst_19193 = (state_19231[(2)]);
var inst_19194 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19195 = figwheel.client.heads_up.display_warning.call(null,inst_19194);
var state_19231__$1 = (function (){var statearr_19253 = state_19231;
(statearr_19253[(11)] = inst_19193);

return statearr_19253;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19231__$1,(29),inst_19195);
} else {
if((state_val_19232 === (25))){
var inst_19191 = figwheel.client.heads_up.clear.call(null);
var state_19231__$1 = state_19231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19231__$1,(28),inst_19191);
} else {
if((state_val_19232 === (34))){
var inst_19212 = figwheel.client.heads_up.flash_loaded.call(null);
var state_19231__$1 = state_19231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19231__$1,(37),inst_19212);
} else {
if((state_val_19232 === (17))){
var inst_19171 = (state_19231[(2)]);
var inst_19172 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19173 = figwheel.client.auto_jump_to_error.call(null,opts,inst_19172);
var state_19231__$1 = (function (){var statearr_19254 = state_19231;
(statearr_19254[(12)] = inst_19171);

return statearr_19254;
})();
var statearr_19255_19300 = state_19231__$1;
(statearr_19255_19300[(2)] = inst_19173);

(statearr_19255_19300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (3))){
var inst_19163 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_19231__$1 = state_19231;
if(cljs.core.truth_(inst_19163)){
var statearr_19256_19301 = state_19231__$1;
(statearr_19256_19301[(1)] = (13));

} else {
var statearr_19257_19302 = state_19231__$1;
(statearr_19257_19302[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (12))){
var inst_19159 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19258_19303 = state_19231__$1;
(statearr_19258_19303[(2)] = inst_19159);

(statearr_19258_19303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (2))){
var inst_19146 = (state_19231[(10)]);
var inst_19146__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_19231__$1 = (function (){var statearr_19259 = state_19231;
(statearr_19259[(10)] = inst_19146__$1);

return statearr_19259;
})();
if(cljs.core.truth_(inst_19146__$1)){
var statearr_19260_19304 = state_19231__$1;
(statearr_19260_19304[(1)] = (5));

} else {
var statearr_19261_19305 = state_19231__$1;
(statearr_19261_19305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (23))){
var inst_19189 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_19231__$1 = state_19231;
if(cljs.core.truth_(inst_19189)){
var statearr_19262_19306 = state_19231__$1;
(statearr_19262_19306[(1)] = (25));

} else {
var statearr_19263_19307 = state_19231__$1;
(statearr_19263_19307[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (35))){
var state_19231__$1 = state_19231;
var statearr_19264_19308 = state_19231__$1;
(statearr_19264_19308[(2)] = null);

(statearr_19264_19308[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (19))){
var inst_19184 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_19231__$1 = state_19231;
if(cljs.core.truth_(inst_19184)){
var statearr_19265_19309 = state_19231__$1;
(statearr_19265_19309[(1)] = (22));

} else {
var statearr_19266_19310 = state_19231__$1;
(statearr_19266_19310[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (11))){
var inst_19155 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19267_19311 = state_19231__$1;
(statearr_19267_19311[(2)] = inst_19155);

(statearr_19267_19311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (9))){
var inst_19157 = figwheel.client.heads_up.clear.call(null);
var state_19231__$1 = state_19231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19231__$1,(12),inst_19157);
} else {
if((state_val_19232 === (5))){
var inst_19148 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_19231__$1 = state_19231;
var statearr_19268_19312 = state_19231__$1;
(statearr_19268_19312[(2)] = inst_19148);

(statearr_19268_19312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (14))){
var inst_19175 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_19231__$1 = state_19231;
if(cljs.core.truth_(inst_19175)){
var statearr_19269_19313 = state_19231__$1;
(statearr_19269_19313[(1)] = (18));

} else {
var statearr_19270_19314 = state_19231__$1;
(statearr_19270_19314[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (26))){
var inst_19201 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_19231__$1 = state_19231;
if(cljs.core.truth_(inst_19201)){
var statearr_19271_19315 = state_19231__$1;
(statearr_19271_19315[(1)] = (30));

} else {
var statearr_19272_19316 = state_19231__$1;
(statearr_19272_19316[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (16))){
var inst_19167 = (state_19231[(2)]);
var inst_19168 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19169 = figwheel.client.heads_up.display_exception.call(null,inst_19168);
var state_19231__$1 = (function (){var statearr_19273 = state_19231;
(statearr_19273[(13)] = inst_19167);

return statearr_19273;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19231__$1,(17),inst_19169);
} else {
if((state_val_19232 === (30))){
var inst_19203 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19204 = figwheel.client.heads_up.display_warning.call(null,inst_19203);
var state_19231__$1 = state_19231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19231__$1,(33),inst_19204);
} else {
if((state_val_19232 === (10))){
var inst_19161 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19274_19317 = state_19231__$1;
(statearr_19274_19317[(2)] = inst_19161);

(statearr_19274_19317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (18))){
var inst_19177 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_19178 = figwheel.client.heads_up.display_exception.call(null,inst_19177);
var state_19231__$1 = state_19231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19231__$1,(21),inst_19178);
} else {
if((state_val_19232 === (37))){
var inst_19214 = (state_19231[(2)]);
var state_19231__$1 = state_19231;
var statearr_19275_19318 = state_19231__$1;
(statearr_19275_19318[(2)] = inst_19214);

(statearr_19275_19318[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19232 === (8))){
var inst_19153 = figwheel.client.heads_up.flash_loaded.call(null);
var state_19231__$1 = state_19231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19231__$1,(11),inst_19153);
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
});})(c__9355__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__9243__auto__,c__9355__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9244__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9244__auto____0 = (function (){
var statearr_19279 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19279[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9244__auto__);

(statearr_19279[(1)] = (1));

return statearr_19279;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9244__auto____1 = (function (state_19231){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_19231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e19280){if((e19280 instanceof Object)){
var ex__9247__auto__ = e19280;
var statearr_19281_19319 = state_19231;
(statearr_19281_19319[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19320 = state_19231;
state_19231 = G__19320;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9244__auto__ = function(state_19231){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9244__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9244__auto____1.call(this,state_19231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9244__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9244__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto__,msg_hist,msg_names,msg))
})();
var state__9357__auto__ = (function (){var statearr_19282 = f__9356__auto__.call(null);
(statearr_19282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto__);

return statearr_19282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto__,msg_hist,msg_names,msg))
);

return c__9355__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__9355__auto___19383 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___19383,ch){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___19383,ch){
return (function (state_19366){
var state_val_19367 = (state_19366[(1)]);
if((state_val_19367 === (1))){
var state_19366__$1 = state_19366;
var statearr_19368_19384 = state_19366__$1;
(statearr_19368_19384[(2)] = null);

(statearr_19368_19384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (2))){
var state_19366__$1 = state_19366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19366__$1,(4),ch);
} else {
if((state_val_19367 === (3))){
var inst_19364 = (state_19366[(2)]);
var state_19366__$1 = state_19366;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19366__$1,inst_19364);
} else {
if((state_val_19367 === (4))){
var inst_19354 = (state_19366[(7)]);
var inst_19354__$1 = (state_19366[(2)]);
var state_19366__$1 = (function (){var statearr_19369 = state_19366;
(statearr_19369[(7)] = inst_19354__$1);

return statearr_19369;
})();
if(cljs.core.truth_(inst_19354__$1)){
var statearr_19370_19385 = state_19366__$1;
(statearr_19370_19385[(1)] = (5));

} else {
var statearr_19371_19386 = state_19366__$1;
(statearr_19371_19386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (5))){
var inst_19354 = (state_19366[(7)]);
var inst_19356 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_19354);
var state_19366__$1 = state_19366;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19366__$1,(8),inst_19356);
} else {
if((state_val_19367 === (6))){
var state_19366__$1 = state_19366;
var statearr_19372_19387 = state_19366__$1;
(statearr_19372_19387[(2)] = null);

(statearr_19372_19387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (7))){
var inst_19362 = (state_19366[(2)]);
var state_19366__$1 = state_19366;
var statearr_19373_19388 = state_19366__$1;
(statearr_19373_19388[(2)] = inst_19362);

(statearr_19373_19388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19367 === (8))){
var inst_19358 = (state_19366[(2)]);
var state_19366__$1 = (function (){var statearr_19374 = state_19366;
(statearr_19374[(8)] = inst_19358);

return statearr_19374;
})();
var statearr_19375_19389 = state_19366__$1;
(statearr_19375_19389[(2)] = null);

(statearr_19375_19389[(1)] = (2));


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
});})(c__9355__auto___19383,ch))
;
return ((function (switch__9243__auto__,c__9355__auto___19383,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__9244__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__9244__auto____0 = (function (){
var statearr_19379 = [null,null,null,null,null,null,null,null,null];
(statearr_19379[(0)] = figwheel$client$heads_up_plugin_$_state_machine__9244__auto__);

(statearr_19379[(1)] = (1));

return statearr_19379;
});
var figwheel$client$heads_up_plugin_$_state_machine__9244__auto____1 = (function (state_19366){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_19366);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e19380){if((e19380 instanceof Object)){
var ex__9247__auto__ = e19380;
var statearr_19381_19390 = state_19366;
(statearr_19381_19390[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19391 = state_19366;
state_19366 = G__19391;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__9244__auto__ = function(state_19366){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__9244__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__9244__auto____1.call(this,state_19366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__9244__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__9244__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___19383,ch))
})();
var state__9357__auto__ = (function (){var statearr_19382 = f__9356__auto__.call(null);
(statearr_19382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___19383);

return statearr_19382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___19383,ch))
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
var c__9355__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto__){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto__){
return (function (state_19412){
var state_val_19413 = (state_19412[(1)]);
if((state_val_19413 === (1))){
var inst_19407 = cljs.core.async.timeout.call(null,(3000));
var state_19412__$1 = state_19412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19412__$1,(2),inst_19407);
} else {
if((state_val_19413 === (2))){
var inst_19409 = (state_19412[(2)]);
var inst_19410 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_19412__$1 = (function (){var statearr_19414 = state_19412;
(statearr_19414[(7)] = inst_19409);

return statearr_19414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19412__$1,inst_19410);
} else {
return null;
}
}
});})(c__9355__auto__))
;
return ((function (switch__9243__auto__,c__9355__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__9244__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__9244__auto____0 = (function (){
var statearr_19418 = [null,null,null,null,null,null,null,null];
(statearr_19418[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__9244__auto__);

(statearr_19418[(1)] = (1));

return statearr_19418;
});
var figwheel$client$enforce_project_plugin_$_state_machine__9244__auto____1 = (function (state_19412){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_19412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e19419){if((e19419 instanceof Object)){
var ex__9247__auto__ = e19419;
var statearr_19420_19422 = state_19412;
(statearr_19420_19422[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19423 = state_19412;
state_19412 = G__19423;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__9244__auto__ = function(state_19412){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__9244__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__9244__auto____1.call(this,state_19412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__9244__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__9244__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto__))
})();
var state__9357__auto__ = (function (){var statearr_19421 = f__9356__auto__.call(null);
(statearr_19421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto__);

return statearr_19421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto__))
);

return c__9355__auto__;
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
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__9355__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto__,figwheel_version,temp__4657__auto__){
return (function (state_19446){
var state_val_19447 = (state_19446[(1)]);
if((state_val_19447 === (1))){
var inst_19440 = cljs.core.async.timeout.call(null,(2000));
var state_19446__$1 = state_19446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19446__$1,(2),inst_19440);
} else {
if((state_val_19447 === (2))){
var inst_19442 = (state_19446[(2)]);
var inst_19443 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_19444 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_19443);
var state_19446__$1 = (function (){var statearr_19448 = state_19446;
(statearr_19448[(7)] = inst_19442);

return statearr_19448;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19446__$1,inst_19444);
} else {
return null;
}
}
});})(c__9355__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__9243__auto__,c__9355__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9244__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9244__auto____0 = (function (){
var statearr_19452 = [null,null,null,null,null,null,null,null];
(statearr_19452[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9244__auto__);

(statearr_19452[(1)] = (1));

return statearr_19452;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9244__auto____1 = (function (state_19446){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_19446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e19453){if((e19453 instanceof Object)){
var ex__9247__auto__ = e19453;
var statearr_19454_19456 = state_19446;
(statearr_19454_19456[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19457 = state_19446;
state_19446 = G__19457;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9244__auto__ = function(state_19446){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9244__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9244__auto____1.call(this,state_19446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9244__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9244__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto__,figwheel_version,temp__4657__auto__))
})();
var state__9357__auto__ = (function (){var statearr_19455 = f__9356__auto__.call(null);
(statearr_19455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto__);

return statearr_19455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto__,figwheel_version,temp__4657__auto__))
);

return c__9355__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__19458){
var map__19462 = p__19458;
var map__19462__$1 = ((((!((map__19462 == null)))?((((map__19462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19462):map__19462);
var file = cljs.core.get.call(null,map__19462__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__19462__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__19462__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__19464 = "";
var G__19464__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__19464),cljs.core.str("file "),cljs.core.str(file)].join(''):G__19464);
var G__19464__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__19464__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__19464__$1);
if(cljs.core.truth_((function (){var and__6397__auto__ = line;
if(cljs.core.truth_(and__6397__auto__)){
return column;
} else {
return and__6397__auto__;
}
})())){
return [cljs.core.str(G__19464__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__19464__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__19465){
var map__19472 = p__19465;
var map__19472__$1 = ((((!((map__19472 == null)))?((((map__19472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19472):map__19472);
var ed = map__19472__$1;
var formatted_exception = cljs.core.get.call(null,map__19472__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__19472__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__19472__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__19474_19478 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__19475_19479 = null;
var count__19476_19480 = (0);
var i__19477_19481 = (0);
while(true){
if((i__19477_19481 < count__19476_19480)){
var msg_19482 = cljs.core._nth.call(null,chunk__19475_19479,i__19477_19481);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_19482);

var G__19483 = seq__19474_19478;
var G__19484 = chunk__19475_19479;
var G__19485 = count__19476_19480;
var G__19486 = (i__19477_19481 + (1));
seq__19474_19478 = G__19483;
chunk__19475_19479 = G__19484;
count__19476_19480 = G__19485;
i__19477_19481 = G__19486;
continue;
} else {
var temp__4657__auto___19487 = cljs.core.seq.call(null,seq__19474_19478);
if(temp__4657__auto___19487){
var seq__19474_19488__$1 = temp__4657__auto___19487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19474_19488__$1)){
var c__7220__auto___19489 = cljs.core.chunk_first.call(null,seq__19474_19488__$1);
var G__19490 = cljs.core.chunk_rest.call(null,seq__19474_19488__$1);
var G__19491 = c__7220__auto___19489;
var G__19492 = cljs.core.count.call(null,c__7220__auto___19489);
var G__19493 = (0);
seq__19474_19478 = G__19490;
chunk__19475_19479 = G__19491;
count__19476_19480 = G__19492;
i__19477_19481 = G__19493;
continue;
} else {
var msg_19494 = cljs.core.first.call(null,seq__19474_19488__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_19494);

var G__19495 = cljs.core.next.call(null,seq__19474_19488__$1);
var G__19496 = null;
var G__19497 = (0);
var G__19498 = (0);
seq__19474_19478 = G__19495;
chunk__19475_19479 = G__19496;
count__19476_19480 = G__19497;
i__19477_19481 = G__19498;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__19499){
var map__19502 = p__19499;
var map__19502__$1 = ((((!((map__19502 == null)))?((((map__19502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19502):map__19502);
var w = map__19502__$1;
var message = cljs.core.get.call(null,map__19502__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__6397__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__6397__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__6397__auto__;
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
var seq__19514 = cljs.core.seq.call(null,plugins);
var chunk__19515 = null;
var count__19516 = (0);
var i__19517 = (0);
while(true){
if((i__19517 < count__19516)){
var vec__19518 = cljs.core._nth.call(null,chunk__19515,i__19517);
var k = cljs.core.nth.call(null,vec__19518,(0),null);
var plugin = cljs.core.nth.call(null,vec__19518,(1),null);
if(cljs.core.truth_(plugin)){
var pl_19524 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__19514,chunk__19515,count__19516,i__19517,pl_19524,vec__19518,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_19524.call(null,msg_hist);
});})(seq__19514,chunk__19515,count__19516,i__19517,pl_19524,vec__19518,k,plugin))
);
} else {
}

var G__19525 = seq__19514;
var G__19526 = chunk__19515;
var G__19527 = count__19516;
var G__19528 = (i__19517 + (1));
seq__19514 = G__19525;
chunk__19515 = G__19526;
count__19516 = G__19527;
i__19517 = G__19528;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19514);
if(temp__4657__auto__){
var seq__19514__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19514__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__19514__$1);
var G__19529 = cljs.core.chunk_rest.call(null,seq__19514__$1);
var G__19530 = c__7220__auto__;
var G__19531 = cljs.core.count.call(null,c__7220__auto__);
var G__19532 = (0);
seq__19514 = G__19529;
chunk__19515 = G__19530;
count__19516 = G__19531;
i__19517 = G__19532;
continue;
} else {
var vec__19521 = cljs.core.first.call(null,seq__19514__$1);
var k = cljs.core.nth.call(null,vec__19521,(0),null);
var plugin = cljs.core.nth.call(null,vec__19521,(1),null);
if(cljs.core.truth_(plugin)){
var pl_19533 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__19514,chunk__19515,count__19516,i__19517,pl_19533,vec__19521,k,plugin,seq__19514__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_19533.call(null,msg_hist);
});})(seq__19514,chunk__19515,count__19516,i__19517,pl_19533,vec__19521,k,plugin,seq__19514__$1,temp__4657__auto__))
);
} else {
}

var G__19534 = cljs.core.next.call(null,seq__19514__$1);
var G__19535 = null;
var G__19536 = (0);
var G__19537 = (0);
seq__19514 = G__19534;
chunk__19515 = G__19535;
count__19516 = G__19536;
i__19517 = G__19537;
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
var args19538 = [];
var len__7484__auto___19545 = arguments.length;
var i__7485__auto___19546 = (0);
while(true){
if((i__7485__auto___19546 < len__7484__auto___19545)){
args19538.push((arguments[i__7485__auto___19546]));

var G__19547 = (i__7485__auto___19546 + (1));
i__7485__auto___19546 = G__19547;
continue;
} else {
}
break;
}

var G__19540 = args19538.length;
switch (G__19540) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19538.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__19541_19549 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__19542_19550 = null;
var count__19543_19551 = (0);
var i__19544_19552 = (0);
while(true){
if((i__19544_19552 < count__19543_19551)){
var msg_19553 = cljs.core._nth.call(null,chunk__19542_19550,i__19544_19552);
figwheel.client.socket.handle_incoming_message.call(null,msg_19553);

var G__19554 = seq__19541_19549;
var G__19555 = chunk__19542_19550;
var G__19556 = count__19543_19551;
var G__19557 = (i__19544_19552 + (1));
seq__19541_19549 = G__19554;
chunk__19542_19550 = G__19555;
count__19543_19551 = G__19556;
i__19544_19552 = G__19557;
continue;
} else {
var temp__4657__auto___19558 = cljs.core.seq.call(null,seq__19541_19549);
if(temp__4657__auto___19558){
var seq__19541_19559__$1 = temp__4657__auto___19558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19541_19559__$1)){
var c__7220__auto___19560 = cljs.core.chunk_first.call(null,seq__19541_19559__$1);
var G__19561 = cljs.core.chunk_rest.call(null,seq__19541_19559__$1);
var G__19562 = c__7220__auto___19560;
var G__19563 = cljs.core.count.call(null,c__7220__auto___19560);
var G__19564 = (0);
seq__19541_19549 = G__19561;
chunk__19542_19550 = G__19562;
count__19543_19551 = G__19563;
i__19544_19552 = G__19564;
continue;
} else {
var msg_19565 = cljs.core.first.call(null,seq__19541_19559__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_19565);

var G__19566 = cljs.core.next.call(null,seq__19541_19559__$1);
var G__19567 = null;
var G__19568 = (0);
var G__19569 = (0);
seq__19541_19549 = G__19566;
chunk__19542_19550 = G__19567;
count__19543_19551 = G__19568;
i__19544_19552 = G__19569;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__7491__auto__ = [];
var len__7484__auto___19574 = arguments.length;
var i__7485__auto___19575 = (0);
while(true){
if((i__7485__auto___19575 < len__7484__auto___19574)){
args__7491__auto__.push((arguments[i__7485__auto___19575]));

var G__19576 = (i__7485__auto___19575 + (1));
i__7485__auto___19575 = G__19576;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__19571){
var map__19572 = p__19571;
var map__19572__$1 = ((((!((map__19572 == null)))?((((map__19572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19572):map__19572);
var opts = map__19572__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq19570){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19570));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e19578){if((e19578 instanceof Error)){
var e = e19578;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e19578;

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
return (function (p__19582){
var map__19583 = p__19582;
var map__19583__$1 = ((((!((map__19583 == null)))?((((map__19583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19583):map__19583);
var msg_name = cljs.core.get.call(null,map__19583__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map