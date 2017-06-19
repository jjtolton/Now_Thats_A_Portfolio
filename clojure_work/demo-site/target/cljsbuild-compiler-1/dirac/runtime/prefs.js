// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('dirac.runtime.prefs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
dirac.runtime.prefs.known_features = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$repl], null);
dirac.runtime.prefs.default_features = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$repl], null);
dirac.runtime.prefs.feature_groups = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$all,dirac.runtime.prefs.known_features,cljs.core.cst$kw$default,dirac.runtime.prefs.default_features], null);
dirac.runtime.prefs.reset_styles = "color:inherit;background-color:none;font-weight:normal;text-decoration:none;font-style:normal";
dirac.runtime.prefs.default_prefs = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_46,cljs.core.cst$kw$weasel_DASH_auto_DASH_reconnect,cljs.core.cst$kw$java_DASH_trace_DASH_header_DASH_style,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_37,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_36,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_43,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_35,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_47,cljs.core.cst$kw$eval_DASH_time_DASH_limit,cljs.core.cst$kw$agent_DASH_verbose,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_3,cljs.core.cst$kw$agent_DASH_response_DASH_timeout,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_31,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_45,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_40,cljs.core.cst$kw$context_DASH_availability_DASH_total_DASH_time_DASH_limit,cljs.core.cst$kw$rich_DASH_text_DASH_reset_DASH_style,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_29,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_1,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_42,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_32,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_24,cljs.core.cst$kw$context_DASH_availability_DASH_next_DASH_trial_DASH_waiting_DASH_time,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_4,cljs.core.cst$kw$safe_DASH_print_DASH_level,cljs.core.cst$kw$silence_DASH_no_DASH_such_DASH_namespace_DASH_warnings,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_30,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_34,cljs.core.cst$kw$agent_DASH_host,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_9,cljs.core.cst$kw$weasel_DASH_verbose,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_0,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_22,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_33,cljs.core.cst$kw$runtime_DASH_tag,cljs.core.cst$kw$rich_DASH_text_DASH_enabled,cljs.core.cst$kw$nrepl_DASH_config,cljs.core.cst$kw$safe_DASH_print_DASH_length,cljs.core.cst$kw$weasel_DASH_pre_DASH_eval_DASH_delay,cljs.core.cst$kw$rich_DASH_text_DASH_code_DASH_style,cljs.core.cst$kw$features_DASH_to_DASH_install,cljs.core.cst$kw$silence_DASH_use_DASH_of_DASH_undeclared_DASH_var_DASH_warnings,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_44,cljs.core.cst$kw$install_DASH_check_DASH_next_DASH_trial_DASH_waiting_DASH_time,cljs.core.cst$kw$install_DASH_check_DASH_eval_DASH_time_DASH_limit,cljs.core.cst$kw$agent_DASH_port,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_41,cljs.core.cst$kw$dont_DASH_display_DASH_banner,cljs.core.cst$kw$agent_DASH_auto_DASH_reconnect,cljs.core.cst$kw$install_DASH_check_DASH_total_DASH_time_DASH_limit,cljs.core.cst$kw$rich_DASH_text_DASH_ansi_DASH_style_DASH_23],["background-color: rgba(0, 128, 128, 0.2)",false,"color:red","color: rgb(128, 128, 128)","color: rgb(0, 128, 128)","background-color: rgba(128, 128, 0, 0.2)","color: rgb(128, 0, 128)","background-color: rgba(128, 128, 128, 0.2)",(10000),false,"font-style: italic",(30000),"color: rgb(128, 0, 0)","background-color: rgba(128, 0, 128, 0.2)","background-color: rgba(0, 0, 0, 0.2)",(3000),dirac.runtime.prefs.reset_styles,"text-decoration:none;","font-weight:bold","background-color: rgba(0, 128, 0, 0.2)","color: rgb(0, 128, 0)","text-decoration:none;",(10),"text-decoration: underline",(1),true,"color: rgb(0, 0, 0)","color: rgb(0, 0, 128)","localhost","text-decoration: line-through",false,dirac.runtime.prefs.reset_styles,"font-weight:normal;","color: rgb(128, 128, 0)","unidentified",true,null,(10),(100),"color:#666; background-color:rgba(198, 198, 198, 0.3)",cljs.core.cst$kw$default,true,"background-color: rgba(0, 0, 128, 0.2)",(500),(300),"8231","background-color: rgba(128, 0, 0, 0.2)",false,true,(3000),"font-style:normal"]);
dirac.runtime.prefs.static_prefs = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$runtime_DASH_tag,"ezq"], null);
dirac.runtime.prefs.current_prefs = (function (){var G__32940 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([dirac.runtime.prefs.default_prefs,dirac.runtime.prefs.static_prefs], 0));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__32940) : cljs.core.atom.call(null,G__32940));
})();
dirac.runtime.prefs.get_prefs = (function dirac$runtime$prefs$get_prefs(){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(dirac.runtime.prefs.current_prefs) : cljs.core.deref.call(null,dirac.runtime.prefs.current_prefs));
});
dirac.runtime.prefs.pref = (function dirac$runtime$prefs$pref(key){
var G__32942 = dirac.runtime.prefs.get_prefs();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__32942) : key.call(null,G__32942));
});
dirac.runtime.prefs.set_prefs_BANG_ = (function dirac$runtime$prefs$set_prefs_BANG_(new_prefs){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(dirac.runtime.prefs.current_prefs,new_prefs) : cljs.core.reset_BANG_.call(null,dirac.runtime.prefs.current_prefs,new_prefs));
});
dirac.runtime.prefs.set_pref_BANG_ = (function dirac$runtime$prefs$set_pref_BANG_(key,val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(dirac.runtime.prefs.current_prefs,cljs.core.assoc,key,val);
});
dirac.runtime.prefs.merge_prefs_BANG_ = (function dirac$runtime$prefs$merge_prefs_BANG_(m){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(dirac.runtime.prefs.current_prefs,cljs.core.merge,m);
});
dirac.runtime.prefs.update_pref_BANG_ = (function dirac$runtime$prefs$update_pref_BANG_(var_args){
var args__8829__auto__ = [];
var len__8822__auto___32946 = arguments.length;
var i__8823__auto___32947 = (0);
while(true){
if((i__8823__auto___32947 < len__8822__auto___32946)){
args__8829__auto__.push((arguments[i__8823__auto___32947]));

var G__32948 = (i__8823__auto___32947 + (1));
i__8823__auto___32947 = G__32948;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((2) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((2)),(0),null)):null);
return dirac.runtime.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8830__auto__);
});

dirac.runtime.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (key,f,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.swap_BANG_,dirac.runtime.prefs.current_prefs,cljs.core.update,key,f,cljs.core.array_seq([args], 0));
});

dirac.runtime.prefs.update_pref_BANG_.cljs$lang$maxFixedArity = (2);

dirac.runtime.prefs.update_pref_BANG_.cljs$lang$applyTo = (function (seq32943){
var G__32944 = cljs.core.first(seq32943);
var seq32943__$1 = cljs.core.next(seq32943);
var G__32945 = cljs.core.first(seq32943__$1);
var seq32943__$2 = cljs.core.next(seq32943__$1);
return dirac.runtime.prefs.update_pref_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32944,G__32945,seq32943__$2);
});

