// Compiled by ClojureScript 1.9.518 {}
goog.provide('dirac.runtime.repl');
goog.require('cljs.core');
goog.require('dirac.runtime.prefs');
goog.require('dirac.runtime.bootstrap');
goog.require('dirac.runtime.output');
goog.require('dirac.runtime.deps');
goog.require('dirac.runtime.util');
goog.require('clojure.string');
goog.require('goog.object');
goog.require('goog.labs.userAgent.browser');
dirac.runtime.repl.available_QMARK_ = (function dirac$runtime$repl$available_QMARK_(){
var or__28749__auto__ = dirac.runtime.util.in_node_context_QMARK_.call(null);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
var and__28737__auto__ = goog.labs.userAgent.browser.isChrome();
if(cljs.core.truth_(and__28737__auto__)){
return goog.labs.userAgent.browser.isVersionOrHigher((47));
} else {
return and__28737__auto__;
}
}
});
dirac.runtime.repl._STAR_installed_QMARK__STAR_ = false;
dirac.runtime.repl._STAR_bootstrapped_QMARK__STAR_ = false;
dirac.runtime.repl.console_tunnel = (function dirac$runtime$repl$console_tunnel(var_args){
var args__29977__auto__ = [];
var len__29970__auto___61765 = arguments.length;
var i__29971__auto___61766 = (0);
while(true){
if((i__29971__auto___61766 < len__29970__auto___61765)){
args__29977__auto__.push((arguments[i__29971__auto___61766]));

var G__61767 = (i__29971__auto___61766 + (1));
i__29971__auto___61766 = G__61767;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic = (function (method,args){
return goog.object.get(console,method).apply(console,cljs.core.to_array.call(null,args));
});

dirac.runtime.repl.console_tunnel.cljs$lang$maxFixedArity = (1);

dirac.runtime.repl.console_tunnel.cljs$lang$applyTo = (function (seq61763){
var G__61764 = cljs.core.first.call(null,seq61763);
var seq61763__$1 = cljs.core.next.call(null,seq61763);
return dirac.runtime.repl.console_tunnel.cljs$core$IFn$_invoke$arity$variadic(G__61764,seq61763__$1);
});

dirac.runtime.repl.dirac_msg_args = (function dirac$runtime$repl$dirac_msg_args(name,args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-MSG$~~",name], null),args);
});
dirac.runtime.repl.dirac_log_args = (function dirac$runtime$repl$dirac_log_args(request_id,kind,args){
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~~$DIRAC-LOG$~~",request_id,kind], null),args);
});
dirac.runtime.repl.call_dirac = (function dirac$runtime$repl$call_dirac(var_args){
var args__29977__auto__ = [];
var len__29970__auto___61770 = arguments.length;
var i__29971__auto___61771 = (0);
while(true){
if((i__29971__auto___61771 < len__29970__auto___61770)){
args__29977__auto__.push((arguments[i__29971__auto___61771]));

var G__61772 = (i__29971__auto___61771 + (1));
i__29971__auto___61771 = G__61772;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic = (function (name,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"log",dirac.runtime.repl.dirac_msg_args.call(null,name,args));
});

dirac.runtime.repl.call_dirac.cljs$lang$maxFixedArity = (1);

dirac.runtime.repl.call_dirac.cljs$lang$applyTo = (function (seq61768){
var G__61769 = cljs.core.first.call(null,seq61768);
var seq61768__$1 = cljs.core.next.call(null,seq61768);
return dirac.runtime.repl.call_dirac.cljs$core$IFn$_invoke$arity$variadic(G__61769,seq61768__$1);
});

dirac.runtime.repl.log = (function dirac$runtime$repl$log(var_args){
var args__29977__auto__ = [];
var len__29970__auto___61776 = arguments.length;
var i__29971__auto___61777 = (0);
while(true){
if((i__29971__auto___61777 < len__29970__auto___61776)){
args__29977__auto__.push((arguments[i__29971__auto___61777]));

var G__61778 = (i__29971__auto___61777 + (1));
i__29971__auto___61777 = G__61778;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((2) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29978__auto__);
});

dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"log",dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.log.cljs$lang$maxFixedArity = (2);

dirac.runtime.repl.log.cljs$lang$applyTo = (function (seq61773){
var G__61774 = cljs.core.first.call(null,seq61773);
var seq61773__$1 = cljs.core.next.call(null,seq61773);
var G__61775 = cljs.core.first.call(null,seq61773__$1);
var seq61773__$2 = cljs.core.next.call(null,seq61773__$1);
return dirac.runtime.repl.log.cljs$core$IFn$_invoke$arity$variadic(G__61774,G__61775,seq61773__$2);
});

dirac.runtime.repl.warn = (function dirac$runtime$repl$warn(var_args){
var args__29977__auto__ = [];
var len__29970__auto___61782 = arguments.length;
var i__29971__auto___61783 = (0);
while(true){
if((i__29971__auto___61783 < len__29970__auto___61782)){
args__29977__auto__.push((arguments[i__29971__auto___61783]));

var G__61784 = (i__29971__auto___61783 + (1));
i__29971__auto___61783 = G__61784;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((2) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29978__auto__);
});

dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"warn",dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.warn.cljs$lang$maxFixedArity = (2);

dirac.runtime.repl.warn.cljs$lang$applyTo = (function (seq61779){
var G__61780 = cljs.core.first.call(null,seq61779);
var seq61779__$1 = cljs.core.next.call(null,seq61779);
var G__61781 = cljs.core.first.call(null,seq61779__$1);
var seq61779__$2 = cljs.core.next.call(null,seq61779__$1);
return dirac.runtime.repl.warn.cljs$core$IFn$_invoke$arity$variadic(G__61780,G__61781,seq61779__$2);
});

dirac.runtime.repl.error = (function dirac$runtime$repl$error(var_args){
var args__29977__auto__ = [];
var len__29970__auto___61788 = arguments.length;
var i__29971__auto___61789 = (0);
while(true){
if((i__29971__auto___61789 < len__29970__auto___61788)){
args__29977__auto__.push((arguments[i__29971__auto___61789]));

var G__61790 = (i__29971__auto___61789 + (1));
i__29971__auto___61789 = G__61790;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((2) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((2)),(0),null)):null);
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29978__auto__);
});

dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic = (function (request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,"error",dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.error.cljs$lang$maxFixedArity = (2);

dirac.runtime.repl.error.cljs$lang$applyTo = (function (seq61785){
var G__61786 = cljs.core.first.call(null,seq61785);
var seq61785__$1 = cljs.core.next.call(null,seq61785);
var G__61787 = cljs.core.first.call(null,seq61785__$1);
var seq61785__$2 = cljs.core.next.call(null,seq61785__$1);
return dirac.runtime.repl.error.cljs$core$IFn$_invoke$arity$variadic(G__61786,G__61787,seq61785__$2);
});

dirac.runtime.repl.group_STAR_ = (function dirac$runtime$repl$group_STAR_(var_args){
var args__29977__auto__ = [];
var len__29970__auto___61795 = arguments.length;
var i__29971__auto___61796 = (0);
while(true){
if((i__29971__auto___61796 < len__29970__auto___61795)){
args__29977__auto__.push((arguments[i__29971__auto___61796]));

var G__61797 = (i__29971__auto___61796 + (1));
i__29971__auto___61796 = G__61797;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((3) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((3)),(0),null)):null);
return dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29978__auto__);
});

dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (collapsed_QMARK_,request_id,kind,args){
return cljs.core.apply.call(null,dirac.runtime.repl.console_tunnel,(cljs.core.truth_(collapsed_QMARK_)?"groupCollapsed":"group"),dirac.runtime.repl.dirac_log_args.call(null,request_id,kind,args));
});

dirac.runtime.repl.group_STAR_.cljs$lang$maxFixedArity = (3);

dirac.runtime.repl.group_STAR_.cljs$lang$applyTo = (function (seq61791){
var G__61792 = cljs.core.first.call(null,seq61791);
var seq61791__$1 = cljs.core.next.call(null,seq61791);
var G__61793 = cljs.core.first.call(null,seq61791__$1);
var seq61791__$2 = cljs.core.next.call(null,seq61791__$1);
var G__61794 = cljs.core.first.call(null,seq61791__$2);
var seq61791__$3 = cljs.core.next.call(null,seq61791__$2);
return dirac.runtime.repl.group_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__61792,G__61793,G__61794,seq61791__$3);
});

dirac.runtime.repl.group_collapsed = (function dirac$runtime$repl$group_collapsed(var_args){
var args__29977__auto__ = [];
var len__29970__auto___61799 = arguments.length;
var i__29971__auto___61800 = (0);
while(true){
if((i__29971__auto___61800 < len__29970__auto___61799)){
args__29977__auto__.push((arguments[i__29971__auto___61800]));

var G__61801 = (i__29971__auto___61800 + (1));
i__29971__auto___61800 = G__61801;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,dirac.runtime.repl.group_STAR_,true,args);
});

dirac.runtime.repl.group_collapsed.cljs$lang$maxFixedArity = (0);

dirac.runtime.repl.group_collapsed.cljs$lang$applyTo = (function (seq61798){
return dirac.runtime.repl.group_collapsed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61798));
});

dirac.runtime.repl.group = (function dirac$runtime$repl$group(var_args){
var args__29977__auto__ = [];
var len__29970__auto___61803 = arguments.length;
var i__29971__auto___61804 = (0);
while(true){
if((i__29971__auto___61804 < len__29970__auto___61803)){
args__29977__auto__.push((arguments[i__29971__auto___61804]));

var G__61805 = (i__29971__auto___61804 + (1));
i__29971__auto___61804 = G__61805;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,dirac.runtime.repl.group_STAR_,false,args);
});

dirac.runtime.repl.group.cljs$lang$maxFixedArity = (0);

dirac.runtime.repl.group.cljs$lang$applyTo = (function (seq61802){
return dirac.runtime.repl.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61802));
});

dirac.runtime.repl.group_end = (function dirac$runtime$repl$group_end(){
return console.groupEnd();
});
dirac.runtime.repl.detect_and_strip = (function dirac$runtime$repl$detect_and_strip(prefix,text){
var prefix_len = cljs.core.count.call(null,prefix);
var s = cljs.core.subs.call(null,text,(0),prefix_len);
if(cljs.core._EQ_.call(null,s,prefix)){
return clojure.string.triml.call(null,cljs.core.subs.call(null,text,prefix_len));
} else {
return null;
}
});
dirac.runtime.repl.get_whitespace_prefix_length = (function dirac$runtime$repl$get_whitespace_prefix_length(line){
var temp__6736__auto__ = cljs.core.re_find.call(null,/^([ ]+)/,line);
if(cljs.core.truth_(temp__6736__auto__)){
var m = temp__6736__auto__;
return cljs.core.count.call(null,cljs.core.second.call(null,m));
} else {
return (0);
}
});
dirac.runtime.repl.remove_common_whitespace_prefix = (function dirac$runtime$repl$remove_common_whitespace_prefix(text){
var text_with_spaces = clojure.string.replace.call(null,text,"\t","  ");
var lines = clojure.string.split.call(null,text_with_spaces,/\n/);
var common_prefix_length = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,dirac.runtime.repl.get_whitespace_prefix_length,lines));
if((common_prefix_length > (0))){
return clojure.string.join.call(null,"\n",cljs.core.map.call(null,((function (text_with_spaces,lines,common_prefix_length){
return (function (p1__61806_SHARP_){
return cljs.core.subs.call(null,p1__61806_SHARP_,common_prefix_length);
});})(text_with_spaces,lines,common_prefix_length))
,lines));
} else {
return text;
}
});
dirac.runtime.repl.present_java_trace = (function dirac$runtime$repl$present_java_trace(request_id,text){
var lines = clojure.string.split.call(null,text,/\n/);
var first_line = cljs.core.first.call(null,lines);
var rest_content = clojure.string.join.call(null,"\n",cljs.core.rest.call(null,lines));
if(cljs.core.empty_QMARK_.call(null,rest_content)){
return dirac.runtime.repl.error.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),first_line);
} else {
dirac.runtime.repl.group_collapsed.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),"%c%s",dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"java-trace-header-style","java-trace-header-style",-1425214239)),first_line);

dirac.runtime.repl.log.call(null,request_id,new cljs.core.Keyword(null,"stderr","stderr",-1571650309),dirac.runtime.repl.remove_common_whitespace_prefix.call(null,rest_content));

return dirac.runtime.repl.group_end.call(null);
}
});
dirac.runtime.repl.should_silence_warning_QMARK_ = (function dirac$runtime$repl$should_silence_warning_QMARK_(message){
if(cljs.core.truth_((function (){var and__28737__auto__ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"silence-use-of-undeclared-var-warnings","silence-use-of-undeclared-var-warnings",341047901));
if(cljs.core.truth_(and__28737__auto__)){
return cljs.core.re_find.call(null,/^Use of undeclared Var/,message);
} else {
return and__28737__auto__;
}
})())){
return true;
} else {
if(cljs.core.truth_((function (){var and__28737__auto__ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"silence-no-such-namespace-warnings","silence-no-such-namespace-warnings",2078733745));
if(cljs.core.truth_(and__28737__auto__)){
return cljs.core.re_find.call(null,/^No such namespace/,message);
} else {
return and__28737__auto__;
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
if(cljs.core.truth_(dirac.runtime.repl.should_silence_warning_QMARK_.call(null,message))){
return null;
} else {
return dirac.runtime.repl.warn.call(null,request_id,"warning",message);
}
});
dirac.runtime.repl.emit_error_BANG_ = (function dirac$runtime$repl$emit_error_BANG_(request_id,message){
if(cljs.core.truth_(dirac.runtime.repl.should_silence_error_QMARK_.call(null,message))){
return null;
} else {
return dirac.runtime.repl.error.call(null,request_id,"error",message);
}
});
dirac.runtime.repl.formatted_log = (function dirac$runtime$repl$formatted_log(request_id,kind,format,text){
if(cljs.core.not.call(null,(function (){var and__28737__auto__ = cljs.core._EQ_.call(null,format,"rich-text");
if(and__28737__auto__){
return dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"rich-text-enabled","rich-text-enabled",1247614521));
} else {
return and__28737__auto__;
}
})())){
return dirac.runtime.repl.log.call(null,request_id,kind,text);
} else {
var soup = dirac.runtime.output.boil_rich_text.call(null,text);
return cljs.core.apply.call(null,dirac.runtime.repl.log,request_id,kind,soup);
}
});
dirac.runtime.repl.with_safe_printing = (function dirac$runtime$repl$with_safe_printing(f){
var _STAR_print_level_STAR_61809 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR_61810 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_level_STAR_ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"safe-print-level","safe-print-level",-1010991983));

cljs.core._STAR_print_length_STAR_ = dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"safe-print-length","safe-print-length",1870129082));

try{return f.call(null);
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_61810;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_61809;
}});
dirac.runtime.repl.safe_pr_str = (function dirac$runtime$repl$safe_pr_str(v){
return dirac.runtime.repl.with_safe_printing.call(null,(function (){
return cljs.core.pr_str.call(null,v);
}));
});
dirac.runtime.repl.api_version = (9);
dirac.runtime.repl.get_api_version = (function dirac$runtime$repl$get_api_version(){
return dirac.runtime.repl.api_version;
});
goog.exportSymbol('dirac.runtime.repl.get_api_version', dirac.runtime.repl.get_api_version);
dirac.runtime.repl.get_effective_config = (function dirac$runtime$repl$get_effective_config(){
return cljs.core.clj__GT_js.call(null,dirac.runtime.prefs.get_prefs.call(null));
});
goog.exportSymbol('dirac.runtime.repl.get_effective_config', dirac.runtime.repl.get_effective_config);
dirac.runtime.repl.get_serialized_config = (function dirac$runtime$repl$get_serialized_config(){
return cljs.core.pr_str.call(null,dirac.runtime.prefs.get_prefs.call(null));
});
goog.exportSymbol('dirac.runtime.repl.get_serialized_config', dirac.runtime.repl.get_serialized_config);
/**
 * Called by our nREPL boilerplate when we capture a REPL evaluation result.
 */
dirac.runtime.repl.present_repl_result = (function dirac$runtime$repl$present_repl_result(request_id,value){
dirac.runtime.repl.log.call(null,request_id,"result",value);

return value;
});
goog.exportSymbol('dirac.runtime.repl.present_repl_result', dirac.runtime.repl.present_repl_result);
/**
 * Called by our nREPL boilerplate when we capture a REPL evaluation exception.
 */
dirac.runtime.repl.present_repl_exception = (function dirac$runtime$repl$present_repl_exception(request_id,exception){
return dirac.runtime.repl.error.call(null,request_id,"exception",exception);
});
goog.exportSymbol('dirac.runtime.repl.present_repl_exception', dirac.runtime.repl.present_repl_exception);
dirac.runtime.repl.present_output = (function dirac$runtime$repl$present_output(request_id,kind,format,text){
var G__61812 = kind;
switch (G__61812) {
case "java-trace":
return dirac.runtime.repl.present_java_trace.call(null,request_id,text);

break;
default:
var temp__6736__auto__ = dirac.runtime.repl.detect_and_strip.call(null,"WARNING:",text);
if(cljs.core.truth_(temp__6736__auto__)){
var warning_msg = temp__6736__auto__;
return dirac.runtime.repl.emit_warning_BANG_.call(null,request_id,warning_msg);
} else {
var temp__6736__auto____$1 = dirac.runtime.repl.detect_and_strip.call(null,"ERROR:",text);
if(cljs.core.truth_(temp__6736__auto____$1)){
var error_msg = temp__6736__auto____$1;
return dirac.runtime.repl.emit_error_BANG_.call(null,request_id,error_msg);
} else {
return dirac.runtime.repl.formatted_log.call(null,request_id,kind,format,text);
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
var _STAR_print_newline_STAR_61817 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_61818 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_err_fn_STAR_61819 = cljs.core._STAR_print_err_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = cljs.core.partial.call(null,dirac.runtime.repl.present_output,job_id,"stdout","plain-text");

cljs.core._STAR_print_err_fn_STAR_ = cljs.core.partial.call(null,dirac.runtime.repl.present_output,job_id,"stderr","plain-text");

try{return f.call(null);
}finally {cljs.core._STAR_print_err_fn_STAR_ = _STAR_print_err_fn_STAR_61819;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_61818;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_61817;
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
try{return dirac.runtime.repl.present_repl_result.call(null,job_id,dirac.runtime.repl.capture_output.call(null,job_id,job_fn));
}catch (e61821){var e = e61821;
dirac.runtime.repl.present_repl_exception.call(null,job_id,e);

throw e;
}});
goog.exportSymbol('dirac.runtime.repl.present', dirac.runtime.repl.present);
/**
 * Execute a REPL job by optionally wrapping it in a requested wrapper.
 */
dirac.runtime.repl.execute_job = (function dirac$runtime$repl$execute_job(job_id,wrap_mode,job_fn){
var G__61823 = wrap_mode;
switch (G__61823) {
case "short-circuit-presentation":
return dirac.runtime.repl.present.call(null,job_id,job_fn);

break;
default:
return job_fn.call(null);

}
});
goog.exportSymbol('dirac.runtime.repl.execute_job', dirac.runtime.repl.execute_job);
/**
 * Evaluates a REPL job in the captured mode. Compare it to eval-special.
 *   Captured mode keeps track of *1 *2 *3 and *e REPL specials.
 */
dirac.runtime.repl.eval_captured = (function dirac$runtime$repl$eval_captured(job_id,wrap_mode,job_fn){
try{var result = dirac.runtime.repl.execute_job.call(null,job_id,wrap_mode,job_fn);
cljs.core._STAR_3 = cljs.core._STAR_2;

cljs.core._STAR_2 = cljs.core._STAR_1;

cljs.core._STAR_1 = result;

return dirac.runtime.repl.safe_pr_str.call(null,result);
}catch (e61826){var e = e61826;
cljs.core._STAR_e = e;

throw e;
}});
goog.exportSymbol('dirac.runtime.repl.eval_captured', dirac.runtime.repl.eval_captured);
/**
 * Evaluates a REPL job in the special mode. Compare it to eval-captured.
 */
dirac.runtime.repl.eval_special = (function dirac$runtime$repl$eval_special(job_id,wrap_mode,job_fn){
var result = dirac.runtime.repl.execute_job.call(null,job_id,wrap_mode,job_fn);
return dirac.runtime.repl.safe_pr_str.call(null,result);
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
return ({"status": "success", "value": dirac.runtime.repl.with_safe_printing.call(null,(function (){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
}))});
});
goog.exportSymbol('dirac.runtime.repl.postprocess_successful_eval', dirac.runtime.repl.postprocess_successful_eval);
dirac.runtime.repl.postprocess_unsuccessful_eval = (function dirac$runtime$repl$postprocess_unsuccessful_eval(ex){

return ({"status": "exception", "value": dirac.runtime.repl.safe_pr_str.call(null,ex), "stacktrace": (cljs.core.truth_(ex.hasOwnProperty("stack"))?(ex["stack"]):"No stacktrace available.")});
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
var eval_fn = (function (){var G__61829 = eval_mode;
switch (G__61829) {
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
try{return dirac.runtime.repl.postprocess_successful_eval.call(null,eval_fn.call(null,job_id,wrap_mode,job_fn));
}catch (e61830){var e = e61830;
return dirac.runtime.repl.postprocess_unsuccessful_eval.call(null,e);
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

return dirac.runtime.repl.call_dirac.call(null,"eval-cljs",code);
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

return dirac.runtime.repl.call_dirac.call(null,"eval-js",code);
});
goog.exportSymbol('dirac.runtime.repl.request_eval_js', dirac.runtime.repl.request_eval_js);
dirac.runtime.repl.installed_QMARK_ = (function dirac$runtime$repl$installed_QMARK_(){
return dirac.runtime.repl._STAR_installed_QMARK__STAR_;
});
goog.exportSymbol('dirac.runtime.repl.installed_QMARK_', dirac.runtime.repl.installed_QMARK_);
dirac.runtime.repl.install_BANG_ = (function dirac$runtime$repl$install_BANG_(){
if(cljs.core.not.call(null,dirac.runtime.repl.installed_QMARK_.call(null))){
dirac.runtime.bootstrap.bootstrap_BANG_.call(null,(function (){
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
if(cljs.core.truth_(dirac.runtime.repl.installed_QMARK_.call(null))){
return dirac.runtime.repl._STAR_installed_QMARK__STAR_ = false;
} else {
return null;
}
});
goog.exportSymbol('dirac.runtime.repl.uninstall_BANG_', dirac.runtime.repl.uninstall_BANG_);

//# sourceMappingURL=repl.js.map