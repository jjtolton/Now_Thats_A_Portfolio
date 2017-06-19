// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('dirac.runtime.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('dirac.runtime.prefs');
goog.require('dirac.runtime.bootstrap');
goog.require('dirac.runtime.output');
goog.require('dirac.runtime.deps');
goog.require('dirac.runtime.util');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('goog.labs.userAgent.browser');
dirac.runtime.repl.available_QMARK_ = (function dirac$runtime$repl$available_QMARK_(){
var or__7601__auto__ = (dirac.runtime.util.in_node_context_QMARK_.cljs$core$IFn$_invoke$arity$0 ? dirac.runtime.util.in_node_context_QMARK_.cljs$core$IFn$_invoke$arity$0() : dirac.runtime.util.in_node_context_QMARK_.call(null));
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var and__7589__auto__ = goog.labs.userAgent.browser.isChrome();
if(cljs.core.truth_(and__7589__auto__)){
return goog.labs.userAgent.browser.isVersionOrHigher((47));
} else {
return and__7589__auto__;
}
}
});
dirac.runtime.repl._STAR_installed_QMARK__STAR_ = false;
dirac.runtime.repl._STAR_bootstrapped_QMARK__STAR_ = false;
dirac.runtime.repl.console_tunnel = (function dirac$runtime$repl$console_tunnel(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33076 = arguments.length;
var i__8823__auto___33077 = (0);
while(true){
if((i__8823__auto___33077 < len__8822__auto___33076)){
args__8829__auto__.push((arguments[i__8823__auto___33077]));

var G__33078 = (i__8823__auto___33077 + (1));
i__8823__auto___33077 = G__33078;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic = (function (method,args){
return goog.object.get(console,method).apply(console,cljs.core.to_array(args));
});

dirac.runtime.repl.console_tunnel.cljs$lang$maxFixedArity = (1);

dirac.runtime.repl.console_tunnel.cljs$lang$applyTo = (function (seq33074){
var G__33075 = cljs.core.first(seq33074);
var seq33074__$1 = cljs.core.next(seq33074);
return dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic(G__33075,seq33074__$1);
});

dirac.runtime.repl.dirac_msg_args = (function dirac$runtime$repl$dirac_msg_args(name,args){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-MSG$~~",name], null),args);
});
dirac.runtime.repl.dirac_log_args = (function dirac$runtime$repl$dirac_log_args(request_id,kind,args){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-LOG$~~",request_id,kind], null),args);
});
dirac.runtime.repl.call_dirac = (function dirac$runtime$repl$call_dirac(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33081 = arguments.length;
var i__8823__auto___33082 = (0);
while(true){
if((i__8823__auto___33082 < len__8822__auto___33081)){
args__8829__auto__.push((arguments[i__8823__auto___33082]));

var G__33083 = (i__8823__auto___33082 + (1));
i__8823__auto___33082 = G__33083;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((1) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((1)),(0),null)):null);
return dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8830__auto__);
});

dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic = (function (name,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dirac.runtime.repl.console_tunnel,"log",dirac.runtime.repl.dirac_msg_args(name,args));
});

dirac.runtime.repl.call_dirac.cljs$lang$maxFixedArity = (1);

dirac.runtime.repl.call_dirac.cljs$lang$applyTo = (function (seq33079){
var G__33080 = cljs.core.first(seq33079);
var seq33079__$1 = cljs.core.next(seq33079);
return dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic(G__33080,seq33079__$1);
});

dirac.runtime.repl.log = (function dirac$runtime$repl$log(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33087 = arguments.length;
var i__8823__auto___33088 = (0);
while(true){
if((i__8823__auto___33088 < len__8822__auto___33087)){
args__8829__auto__.push((arguments[i__8823__auto___33088]));

var G__33089 = (i__8823__auto___33088 + (1));
i__8823__auto___33088 = G__33089;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((2) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8830__auto__);
});

dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dirac.runtime.repl.console_tunnel,"log",dirac.runtime.repl.dirac_log_args(request_id,kind,args));
});

dirac.runtime.repl.log.cljs$lang$maxFixedArity = (2);

dirac.runtime.repl.log.cljs$lang$applyTo = (function (seq33084){
var G__33085 = cljs.core.first(seq33084);
var seq33084__$1 = cljs.core.next(seq33084);
var G__33086 = cljs.core.first(seq33084__$1);
var seq33084__$2 = cljs.core.next(seq33084__$1);
return dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic(G__33085,G__33086,seq33084__$2);
});

dirac.runtime.repl.warn = (function dirac$runtime$repl$warn(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33093 = arguments.length;
var i__8823__auto___33094 = (0);
while(true){
if((i__8823__auto___33094 < len__8822__auto___33093)){
args__8829__auto__.push((arguments[i__8823__auto___33094]));

var G__33095 = (i__8823__auto___33094 + (1));
i__8823__auto___33094 = G__33095;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((2) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8830__auto__);
});

dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dirac.runtime.repl.console_tunnel,"warn",dirac.runtime.repl.dirac_log_args(request_id,kind,args));
});

dirac.runtime.repl.warn.cljs$lang$maxFixedArity = (2);

dirac.runtime.repl.warn.cljs$lang$applyTo = (function (seq33090){
var G__33091 = cljs.core.first(seq33090);
var seq33090__$1 = cljs.core.next(seq33090);
var G__33092 = cljs.core.first(seq33090__$1);
var seq33090__$2 = cljs.core.next(seq33090__$1);
return dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic(G__33091,G__33092,seq33090__$2);
});

dirac.runtime.repl.error = (function dirac$runtime$repl$error(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33099 = arguments.length;
var i__8823__auto___33100 = (0);
while(true){
if((i__8823__auto___33100 < len__8822__auto___33099)){
args__8829__auto__.push((arguments[i__8823__auto___33100]));

var G__33101 = (i__8823__auto___33100 + (1));
i__8823__auto___33100 = G__33101;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((2) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8830__auto__);
});

dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dirac.runtime.repl.console_tunnel,"error",dirac.runtime.repl.dirac_log_args(request_id,kind,args));
});

dirac.runtime.repl.error.cljs$lang$maxFixedArity = (2);

dirac.runtime.repl.error.cljs$lang$applyTo = (function (seq33096){
var G__33097 = cljs.core.first(seq33096);
var seq33096__$1 = cljs.core.next(seq33096);
var G__33098 = cljs.core.first(seq33096__$1);
var seq33096__$2 = cljs.core.next(seq33096__$1);
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic(G__33097,G__33098,seq33096__$2);
});

dirac.runtime.repl.group_STAR_ = (function dirac$runtime$repl$group_STAR_(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33106 = arguments.length;
var i__8823__auto___33107 = (0);
while(true){
if((i__8823__auto___33107 < len__8822__auto___33106)){
args__8829__auto__.push((arguments[i__8823__auto___33107]));

var G__33108 = (i__8823__auto___33107 + (1));
i__8823__auto___33107 = G__33108;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((3) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((3)),(0),null)):null);
return dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8830__auto__);
});

dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (collapsed_QMARK_,request_id,kind,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dirac.runtime.repl.console_tunnel,(cljs.core.truth_(collapsed_QMARK_)?"groupCollapsed":"group"),dirac.runtime.repl.dirac_log_args(request_id,kind,args));
});

dirac.runtime.repl.group_STAR_.cljs$lang$maxFixedArity = (3);

dirac.runtime.repl.group_STAR_.cljs$lang$applyTo = (function (seq33102){
var G__33103 = cljs.core.first(seq33102);
var seq33102__$1 = cljs.core.next(seq33102);
var G__33104 = cljs.core.first(seq33102__$1);
var seq33102__$2 = cljs.core.next(seq33102__$1);
var G__33105 = cljs.core.first(seq33102__$2);
var seq33102__$3 = cljs.core.next(seq33102__$2);
return dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33103,G__33104,G__33105,seq33102__$3);
});

dirac.runtime.repl.group_collapsed = (function dirac$runtime$repl$group_collapsed(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33110 = arguments.length;
var i__8823__auto___33111 = (0);
while(true){
if((i__8823__auto___33111 < len__8822__auto___33110)){
args__8829__auto__.push((arguments[i__8823__auto___33111]));

var G__33112 = (i__8823__auto___33111 + (1));
i__8823__auto___33111 = G__33112;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dirac.runtime.repl.group_STAR_,true,args);
});

dirac.runtime.repl.group_collapsed.cljs$lang$maxFixedArity = (0);

dirac.runtime.repl.group_collapsed.cljs$lang$applyTo = (function (seq33109){
return dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33109));
});

dirac.runtime.repl.group = (function dirac$runtime$repl$group(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33114 = arguments.length;
var i__8823__auto___33115 = (0);
while(true){
if((i__8823__auto___33115 < len__8822__auto___33114)){
args__8829__auto__.push((arguments[i__8823__auto___33115]));

var G__33116 = (i__8823__auto___33115 + (1));
i__8823__auto___33115 = G__33116;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((0) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((0)),(0),null)):null);
return dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic(argseq__8830__auto__);
});

dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(dirac.runtime.repl.group_STAR_,false,args);
});

dirac.runtime.repl.group.cljs$lang$maxFixedArity = (0);

dirac.runtime.repl.group.cljs$lang$applyTo = (function (seq33113){
return dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33113));
});

dirac.runtime.repl.group_end = (function dirac$runtime$repl$group_end(){
return console.groupEnd();
});
dirac.runtime.repl.detect_and_strip = (function dirac$runtime$repl$detect_and_strip(prefix,text){
var prefix_len = cljs.core.count(prefix);
var s = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),prefix_len);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,prefix)){
return clojure.string.triml(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,prefix_len));
} else {
return null;
}
});
dirac.runtime.repl.get_whitespace_prefix_length = (function dirac$runtime$repl$get_whitespace_prefix_length(line){
var temp__6736__auto__ = cljs.core.re_find(/^([ ]+)/,line);
if(cljs.core.truth_(temp__6736__auto__)){
var m = temp__6736__auto__;
return cljs.core.count(cljs.core.second(m));
} else {
return (0);
}
});
dirac.runtime.repl.remove_common_whitespace_prefix = (function dirac$runtime$repl$remove_common_whitespace_prefix(text){
var text_with_spaces = clojure.string.replace(text,"\t","  ");
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(text_with_spaces,/\n/);
var common_prefix_length = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(dirac.runtime.repl.get_whitespace_prefix_length,lines));
if((common_prefix_length > (0))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (text_with_spaces,lines,common_prefix_length){
return (function (p1__33117_SHARP_){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p1__33117_SHARP_,common_prefix_length);
});})(text_with_spaces,lines,common_prefix_length))
,lines));
} else {
return text;
}
});
dirac.runtime.repl.present_java_trace = (function dirac$runtime$repl$present_java_trace(request_id,text){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(text,/\n/);
var first_line = cljs.core.first(lines);
var rest_content = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.rest(lines));
if(cljs.core.empty_QMARK_(rest_content)){
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic(request_id,cljs.core.cst$kw$stderr,cljs.core.array_seq([first_line], 0));
} else {
dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([request_id,cljs.core.cst$kw$stderr,"%c%s",dirac.runtime.prefs.pref(cljs.core.cst$kw$java_DASH_trace_DASH_header_DASH_style),first_line], 0));

dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic(request_id,cljs.core.cst$kw$stderr,cljs.core.array_seq([dirac.runtime.repl.remove_common_whitespace_prefix(rest_content)], 0));

return dirac.runtime.repl.group_end();
}
});
dirac.runtime.repl.should_silence_warning_QMARK_ = (function dirac$runtime$repl$should_silence_warning_QMARK_(message){
if(cljs.core.truth_((function (){var and__7589__auto__ = dirac.runtime.prefs.pref(cljs.core.cst$kw$silence_DASH_use_DASH_of_DASH_undeclared_DASH_var_DASH_warnings);
if(cljs.core.truth_(and__7589__auto__)){
return cljs.core.re_find(/^Use of undeclared Var/,message);
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
if(cljs.core.truth_((function (){var and__7589__auto__ = dirac.runtime.prefs.pref(cljs.core.cst$kw$silence_DASH_no_DASH_such_DASH_namespace_DASH_warnings);
if(cljs.core.truth_(and__7589__auto__)){
return cljs.core.re_find(/^No such namespace/,message);
} else {
return and__7589__auto__;
}
})())){
return true;
} else {
return false;

}
}
});
dirac.runtime.repl.should_silence_error_QMARK_ = (function dirac$runtime$repl$should_silence_error_QMARK_(_message){
return false;

});
dirac.runtime.repl.emit_warning_BANG_ = (function dirac$runtime$repl$emit_warning_BANG_(request_id,message){
if(cljs.core.truth_(dirac.runtime.repl.should_silence_warning_QMARK_(message))){
return null;
} else {
return dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic(request_id,"warning",cljs.core.array_seq([message], 0));
}
});
dirac.runtime.repl.emit_error_BANG_ = (function dirac$runtime$repl$emit_error_BANG_(request_id,message){
if(cljs.core.truth_(dirac.runtime.repl.should_silence_error_QMARK_(message))){
return null;
} else {
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic(request_id,"error",cljs.core.array_seq([message], 0));
}
});
dirac.runtime.repl.formatted_log = (function dirac$runtime$repl$formatted_log(request_id,kind,format,text){
if(cljs.core.not((function (){var and__7589__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,"rich-text");
if(and__7589__auto__){
return dirac.runtime.prefs.pref(cljs.core.cst$kw$rich_DASH_text_DASH_enabled);
} else {
return and__7589__auto__;
}
})())){
return dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic(request_id,kind,cljs.core.array_seq([text], 0));
} else {
var soup = dirac.runtime.output.boil_rich_text(text);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(dirac.runtime.repl.log,request_id,kind,soup);
}
});
dirac.runtime.repl.with_safe_printing = (function dirac$runtime$repl$with_safe_printing(f){
var _STAR_print_level_STAR_33120 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_33121 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = dirac.runtime.prefs.pref(cljs.core.cst$kw$safe_DASH_print_DASH_level);

cljs.core._STAR_print_length_STAR_ = dirac.runtime.prefs.pref(cljs.core.cst$kw$safe_DASH_print_DASH_length);

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_33121;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_33120;
}});
dirac.runtime.repl.safe_pr_str = (function dirac$runtime$repl$safe_pr_str(v){
return dirac.runtime.repl.with_safe_printing((function (){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v], 0));
}));
});
dirac.runtime.repl.api_version = (9);
dirac.runtime.repl.get_api_version = (function dirac$runtime$repl$get_api_version(){
return dirac.runtime.repl.api_version;
});
goog.exportSymbol('dirac.runtime.repl.get_api_version', dirac.runtime.repl.get_api_version);
dirac.runtime.repl.get_effective_config = (function dirac$runtime$repl$get_effective_config(){
return cljs.core.clj__GT_js(dirac.runtime.prefs.get_prefs());
});
goog.exportSymbol('dirac.runtime.repl.get_effective_config', dirac.runtime.repl.get_effective_config);
dirac.runtime.repl.get_serialized_config = (function dirac$runtime$repl$get_serialized_config(){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([dirac.runtime.prefs.get_prefs()], 0));
});
goog.exportSymbol('dirac.runtime.repl.get_serialized_config', dirac.runtime.repl.get_serialized_config);
/**
 * Called by our nREPL boilerplate when we capture a REPL evaluation result.
 */
dirac.runtime.repl.present_repl_result = (function dirac$runtime$repl$present_repl_result(request_id,value){
dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic(request_id,"result",cljs.core.array_seq([value], 0));

return value;
});
goog.exportSymbol('dirac.runtime.repl.present_repl_result', dirac.runtime.repl.present_repl_result);
/**
 * Called by our nREPL boilerplate when we capture a REPL evaluation exception.
 */
dirac.runtime.repl.present_repl_exception = (function dirac$runtime$repl$present_repl_exception(request_id,exception){
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic(request_id,"exception",cljs.core.array_seq([exception], 0));
});
goog.exportSymbol('dirac.runtime.repl.present_repl_exception', dirac.runtime.repl.present_repl_exception);
dirac.runtime.repl.present_output = (function dirac$runtime$repl$present_output(request_id,kind,format,text){
var G__33123 = kind;
switch (G__33123) {
case "java-trace":
return dirac.runtime.repl.present_java_trace(request_id,text);

break;
default:
var temp__6736__auto__ = dirac.runtime.repl.detect_and_strip("WARNING:",text);
if(cljs.core.truth_(temp__6736__auto__)){
var warning_msg = temp__6736__auto__;
return dirac.runtime.repl.emit_warning_BANG_(request_id,warning_msg);
} else {
var temp__6736__auto____$1 = dirac.runtime.repl.detect_and_strip("ERROR:",text);
if(cljs.core.truth_(temp__6736__auto____$1)){
var error_msg = temp__6736__auto____$1;
return dirac.runtime.repl.emit_error_BANG_(request_id,error_msg);
} else {
return dirac.runtime.repl.formatted_log(request_id,kind,format,text);
}
}

}
});
goog.exportSymbol('dirac.runtime.repl.present_output', dirac.runtime.repl.present_output);
dirac.runtime.repl.bootstrapped_QMARK_ = (function dirac$runtime$repl$bootstrapped_QMARK_(){
return dirac.runtime.repl._STAR_bootstrapped_QMARK__STAR_;
});
goog.exportSymbol('dirac.runtime.repl.bootstrapped_QMARK_', dirac.runtime.repl.bootstrapped_QMARK_);
/**
 * A printing wrapper responsible for capturing printed output and presenting it via `present-output`.
 */
dirac.runtime.repl.capture_output = (function dirac$runtime$repl$capture_output(job_id,f){
var _STAR_print_newline_STAR_33128 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_33129 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_err_fn_STAR_33130 = cljs.core._STAR_print_err_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(dirac.runtime.repl.present_output,job_id,"stdout","plain-text");

cljs.core._STAR_print_err_fn_STAR_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$4(dirac.runtime.repl.present_output,job_id,"stderr","plain-text");

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {cljs.core._STAR_print_err_fn_STAR_ = _STAR_print_err_fn_STAR_33130;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_33129;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_33128;
}});
goog.exportSymbol('dirac.runtime.repl.capture_output', dirac.runtime.repl.capture_output);
/**
 * A presentation wrapper which takes care of presenting REPL evaluation to Dirac user.
 *   We short-circuit nREPL feedback mechanism and display REPL results immediatelly to the user as native data.
 *   This especially important for cljs-devtools.
 * 
 *   Please note that for traditional nREPL clients we still serialize the result, send it over the wire to nREPL server and
 *   in turn that result is sent back to a client and presented. The Dirac client has just special logic and ignores this echoed
 *   output because it was already presented directly.
 * 
 *   See https://github.com/binaryage/dirac/blob/master/docs/about-repls.md for conceptual overview.
 */
dirac.runtime.repl.present = (function dirac$runtime$repl$present(job_id,job_fn){
try{return dirac.runtime.repl.present_repl_result(job_id,dirac.runtime.repl.capture_output(job_id,job_fn));
}catch (e33132){var e = e33132;
dirac.runtime.repl.present_repl_exception(job_id,e);

throw e;
}});
goog.exportSymbol('dirac.runtime.repl.present', dirac.runtime.repl.present);
/**
 * Execute a REPL job by optionally wrapping it in a requested wrapper.
 */
dirac.runtime.repl.execute_job = (function dirac$runtime$repl$execute_job(job_id,wrap_mode,job_fn){
var G__33134 = wrap_mode;
switch (G__33134) {
case "short-circuit-presentation":
return dirac.runtime.repl.present(job_id,job_fn);

break;
default:
return (job_fn.cljs$core$IFn$_invoke$arity$0 ? job_fn.cljs$core$IFn$_invoke$arity$0() : job_fn.call(null));

}
});
goog.exportSymbol('dirac.runtime.repl.execute_job', dirac.runtime.repl.execute_job);
/**
 * Evaluates a REPL job in the captured mode. Compare it to eval-special.
 *   Captured mode keeps track of *1 *2 *3 and *e REPL specials.
 */
dirac.runtime.repl.eval_captured = (function dirac$runtime$repl$eval_captured(job_id,wrap_mode,job_fn){
try{var result = dirac.runtime.repl.execute_job(job_id,wrap_mode,job_fn);
cljs.core._STAR_3 = cljs.core._STAR_2;

cljs.core._STAR_2 = cljs.core._STAR_1;

cljs.core._STAR_1 = result;

return dirac.runtime.repl.safe_pr_str(result);
}catch (e33137){var e = e33137;
cljs.core._STAR_e = e;

throw e;
}});
goog.exportSymbol('dirac.runtime.repl.eval_captured', dirac.runtime.repl.eval_captured);
/**
 * Evaluates a REPL job in the special mode. Compare it to eval-captured.
 */
dirac.runtime.repl.eval_special = (function dirac$runtime$repl$eval_special(job_id,wrap_mode,job_fn){
var result = dirac.runtime.repl.execute_job(job_id,wrap_mode,job_fn);
return dirac.runtime.repl.safe_pr_str(result);
});
goog.exportSymbol('dirac.runtime.repl.eval_special', dirac.runtime.repl.eval_special);
/**
 * This is a postprocessing function wrapping Weasel's Javascript evaluation attempt.
 *   This structure is needed for building response to nREPL server (see dirac.implant.weasel in Dirac project)
 *   In our case weasel is running in the context of Dirac DevTools and could potentially have different version of cljs runtime.
 *   To be correct we have to do this post-processing in app's context to use the same cljs runtime as app evaluating the code.
 * 
 *   Also we have to be careful to not enter into infinite printing with cyclic data structures.
 *   We limit printing level and length via with-safe-printing.
 */
dirac.runtime.repl.postprocess_successful_eval = (function dirac$runtime$repl$postprocess_successful_eval(value){
return ({"status": "success", "value": dirac.runtime.repl.with_safe_printing((function (){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
}))});
});
goog.exportSymbol('dirac.runtime.repl.postprocess_successful_eval', dirac.runtime.repl.postprocess_successful_eval);
dirac.runtime.repl.postprocess_unsuccessful_eval = (function dirac$runtime$repl$postprocess_unsuccessful_eval(ex){

return ({"status": "exception", "value": dirac.runtime.repl.safe_pr_str(ex), "stacktrace": (cljs.core.truth_(ex.hasOwnProperty("stack"))?(ex["stack"]):"No stacktrace available.")});
});
goog.exportSymbol('dirac.runtime.repl.postprocess_unsuccessful_eval', dirac.runtime.repl.postprocess_unsuccessful_eval);
/**
 * This is the main entrypoint for evaluation of a snippet of code in the context of REPL.
 * Please note that this code runs in the context of the app and uses ClojureScript runtime built together with the app.
 * 
 *  job-id    - a numeric id of the REPL job
 *  eval-mode - 'captured' or 'special'
 *  wrap-mode - 'short-circuit-presentation' or nil
 *  job-fn    - code to be executed in the form of function
 * 
 *   Note that normally we want to support capturing REPL specials *1 *2 *3 and *e. Only when we are executing their retrieval
 *   we don't want to capture them and we want to use the 'special' path.
 * 
 *   Also normally we want to wrap our code in a supporting wrapper which will present results directly via cljs-devtools,
 *   or present exceptions in a friendly way. Also we want to capture any printing which might occur during evaluation.
 *   In some special cases we might not want to do that.
 * 
 *   Finally we want to postprocess evaluation result and prepare Weasel's nREPL response.
 * 
 *   See https://github.com/binaryage/dirac/blob/master/docs/about-repls.md for conceptual overview.
 */
dirac.runtime.repl.eval = (function dirac$runtime$repl$eval(job_id,eval_mode,wrap_mode,job_fn){
var eval_fn = (function (){var G__33140 = eval_mode;
switch (G__33140) {
case "special":
return dirac.runtime.repl.eval_special;

break;
case "captured":
return dirac.runtime.repl.eval_captured;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(eval_mode)].join('')));

}
})();
try{return dirac.runtime.repl.postprocess_successful_eval((eval_fn.cljs$core$IFn$_invoke$arity$3 ? eval_fn.cljs$core$IFn$_invoke$arity$3(job_id,wrap_mode,job_fn) : eval_fn.call(null,job_id,wrap_mode,job_fn)));
}catch (e33141){var e = e33141;
return dirac.runtime.repl.postprocess_unsuccessful_eval(e);
}});
goog.exportSymbol('dirac.runtime.repl.eval', dirac.runtime.repl.eval);
/**
 * Automates Dirac REPL from the app. This way you can request evaluation of ClojureScript code as it would be entered
 *   directly by the user.
 */
dirac.runtime.repl.request_eval_cljs = (function dirac$runtime$repl$request_eval_cljs(code){
if(typeof code === 'string'){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Code passed for evaluation must be a string"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(string? code)")].join('')));
}

return dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic("eval-cljs",cljs.core.array_seq([code], 0));
});
goog.exportSymbol('dirac.runtime.repl.request_eval_cljs', dirac.runtime.repl.request_eval_cljs);
/**
 * Automates Dirac REPL from the app. This way you can request evaluation of Javascript code as it would be entered
 *   directly by the user.
 */
dirac.runtime.repl.request_eval_js = (function dirac$runtime$repl$request_eval_js(code){
if(typeof code === 'string'){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Code passed for evaluation must be a string"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(string? code)")].join('')));
}

return dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic("eval-js",cljs.core.array_seq([code], 0));
});
goog.exportSymbol('dirac.runtime.repl.request_eval_js', dirac.runtime.repl.request_eval_js);
dirac.runtime.repl.installed_QMARK_ = (function dirac$runtime$repl$installed_QMARK_(){
return dirac.runtime.repl._STAR_installed_QMARK__STAR_;
});
goog.exportSymbol('dirac.runtime.repl.installed_QMARK_', dirac.runtime.repl.installed_QMARK_);
dirac.runtime.repl.install_BANG_ = (function dirac$runtime$repl$install_BANG_(){
if(cljs.core.not(dirac.runtime.repl.installed_QMARK_())){
dirac.runtime.bootstrap.bootstrap_BANG_.cljs$core$IFn$_invoke$arity$1((function (){
return dirac.runtime.repl._STAR_bootstrapped_QMARK__STAR_ = true;
}));

dirac.runtime.repl._STAR_installed_QMARK__STAR_ = true;

return true;
} else {
return null;
}
});
goog.exportSymbol('dirac.runtime.repl.install_BANG_', dirac.runtime.repl.install_BANG_);
dirac.runtime.repl.uninstall_BANG_ = (function dirac$runtime$repl$uninstall_BANG_(){
if(cljs.core.truth_(dirac.runtime.repl.installed_QMARK_())){
return dirac.runtime.repl._STAR_installed_QMARK__STAR_ = false;
} else {
return null;
}
});
goog.exportSymbol('dirac.runtime.repl.uninstall_BANG_', dirac.runtime.repl.uninstall_BANG_);
