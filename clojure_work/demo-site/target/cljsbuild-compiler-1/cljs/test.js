// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('cljs.test');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.pprint');
/**
 * Generates a testing environment with a reporter.
 * (empty-env) - uses the :cljs.test/default reporter.
 * (empty-env :cljs.test/pprint) - pretty prints all data structures. 
 * (empty-env reporter) - uses a reporter of your choosing.
 * 
 * To create your own reporter see cljs.test/report
 */
cljs.test.empty_env = (function cljs$test$empty_env(var_args){
var args46870 = [];
var len__8822__auto___46874 = arguments.length;
var i__8823__auto___46875 = (0);
while(true){
if((i__8823__auto___46875 < len__8822__auto___46874)){
args46870.push((arguments[i__8823__auto___46875]));

var G__46876 = (i__8823__auto___46875 + (1));
i__8823__auto___46875 = G__46876;
continue;
} else {
}
break;
}

var G__46872 = args46870.length;
switch (G__46872) {
case 0:
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args46870.length)].join('')));

}
});

cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$cljs$test_SLASH_default);
});

cljs.test.empty_env.cljs$core$IFn$_invoke$arity$1 = (function (reporter){
var G__46873 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$report_DASH_counters,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$test,(0),cljs.core.cst$kw$pass,(0),cljs.core.cst$kw$fail,(0),cljs.core.cst$kw$error,(0)], null),cljs.core.cst$kw$testing_DASH_vars,cljs.core.List.EMPTY,cljs.core.cst$kw$testing_DASH_contexts,cljs.core.List.EMPTY,cljs.core.cst$kw$formatter,cljs.core.pr_str,cljs.core.cst$kw$reporter,reporter], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cljs$test_SLASH_pprint,reporter)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__46873,cljs.core.cst$kw$reporter,cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.array_seq([cljs.core.cst$kw$formatter,cljs.pprint.pprint], 0));
} else {
return G__46873;
}
});

cljs.test.empty_env.cljs$lang$maxFixedArity = 1;

cljs.test._STAR_current_env_STAR_ = null;
cljs.test.get_current_env = (function cljs$test$get_current_env(){
var or__7601__auto__ = cljs.test._STAR_current_env_STAR_;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
}
});
cljs.test.update_current_env_BANG_ = (function cljs$test$update_current_env_BANG_(var_args){
var args__8829__auto__ = [];
var len__8822__auto___46881 = arguments.length;
var i__8823__auto___46882 = (0);
while(true){
if((i__8823__auto___46882 < len__8822__auto___46881)){
args__8829__auto__.push((arguments[i__8823__auto___46882]));

var G__46883 = (i__8823__auto___46882 + (1));
i__8823__auto___46882 = G__46883;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((2) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((2)),(0),null)):null);
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8830__auto__);
});

cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.test._STAR_current_env_STAR_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,cljs.test.get_current_env(),ks,f,args);
});

cljs.test.update_current_env_BANG_.cljs$lang$maxFixedArity = (2);

cljs.test.update_current_env_BANG_.cljs$lang$applyTo = (function (seq46878){
var G__46879 = cljs.core.first(seq46878);
var seq46878__$1 = cljs.core.next(seq46878);
var G__46880 = cljs.core.first(seq46878__$1);
var seq46878__$2 = cljs.core.next(seq46878__$1);
return cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__46879,G__46880,seq46878__$2);
});

cljs.test.set_env_BANG_ = (function cljs$test$set_env_BANG_(new_env){
return cljs.test._STAR_current_env_STAR_ = new_env;
});
cljs.test.clear_env_BANG_ = (function cljs$test$clear_env_BANG_(){
return cljs.test._STAR_current_env_STAR_ = null;
});
cljs.test.get_and_clear_env_BANG_ = (function cljs$test$get_and_clear_env_BANG_(){

var env = cljs.test.get_current_env();
cljs.test.clear_env_BANG_();

return env;
});
/**
 * Returns a string representation of the current test.  Renders names
 *   in *testing-vars* as a list, then the source file and line of
 *   current assertion.
 */
cljs.test.testing_vars_str = (function cljs$test$testing_vars_str(m){
var map__46887 = m;
var map__46887__$1 = ((((!((map__46887 == null)))?((((map__46887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46887.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46887):map__46887);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46887__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46887__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46887__$1,cljs.core.cst$kw$column);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__46887,map__46887__$1,file,line,column){
return (function (p1__46884_SHARP_){
return cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__46884_SHARP_));
});})(map__46887,map__46887__$1,file,line,column))
,cljs.core.cst$kw$testing_DASH_vars.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env())))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
});
/**
 * Returns a string representation of the current test context. Joins
 *   strings in *testing-contexts* with spaces.
 */
cljs.test.testing_contexts_str = (function cljs$test$testing_contexts_str(){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.reverse(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))));
});
/**
 * Increments the named counter in *report-counters*, a ref to a map.
 *   Does nothing if *report-counters* is nil.
 */
cljs.test.inc_report_counter_BANG_ = (function cljs$test$inc_report_counter_BANG_(name){
if(cljs.core.truth_(cljs.core.cst$kw$report_DASH_counters.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$report_DASH_counters,name], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0)));
} else {
return null;
}
});
if(typeof cljs.test.report !== 'undefined'){
} else {
/**
 * Generic reporting function, may be overridden to plug in
 * different report formats (e.g., TAP, JUnit).  Assertions such as
 * 'is' call 'report' to indicate results.  The argument given to
 * 'report' will be a map with a :type key.
 */
cljs.test.report = (function (){var method_table__8632__auto__ = (function (){var G__46889 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46889) : cljs.core.atom.call(null,G__46889));
})();
var prefer_table__8633__auto__ = (function (){var G__46890 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46890) : cljs.core.atom.call(null,G__46890));
})();
var method_cache__8634__auto__ = (function (){var G__46891 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46891) : cljs.core.atom.call(null,G__46891));
})();
var cached_hierarchy__8635__auto__ = (function (){var G__46892 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__46892) : cljs.core.atom.call(null,G__46892));
})();
var hierarchy__8636__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.test","report"),((function (method_table__8632__auto__,prefer_table__8633__auto__,method_cache__8634__auto__,cached_hierarchy__8635__auto__,hierarchy__8636__auto__){
return (function (m){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$reporter.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()),cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(m)], null);
});})(method_table__8632__auto__,prefer_table__8633__auto__,method_cache__8634__auto__,cached_hierarchy__8635__auto__,hierarchy__8636__auto__))
,cljs.core.cst$kw$default,hierarchy__8636__auto__,method_table__8632__auto__,prefer_table__8633__auto__,method_cache__8634__auto__,cached_hierarchy__8635__auto__));
})();
}
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$pass], null),(function (m){
return cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$pass);
}));
cljs.test.print_comparison = (function cljs$test$print_comparison(m){
var formatter_fn = (function (){var or__7601__auto__ = cljs.core.cst$kw$formatter.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env());
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.pr_str;
}
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["expected:",(function (){var G__46895 = cljs.core.cst$kw$expected.cljs$core$IFn$_invoke$arity$1(m);
return (formatter_fn.cljs$core$IFn$_invoke$arity$1 ? formatter_fn.cljs$core$IFn$_invoke$arity$1(G__46895) : formatter_fn.call(null,G__46895));
})()], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  actual:",(function (){var G__46896 = cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m);
return (formatter_fn.cljs$core$IFn$_invoke$arity$1 ? formatter_fn.cljs$core$IFn$_invoke$arity$1(G__46896) : formatter_fn.call(null,G__46896));
})()], 0));
});
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$fail], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$fail);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nFAIL in",cljs.test.testing_vars_str(m)], 0));

if(cljs.core.seq(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.test.testing_contexts_str()], 0));
} else {
}

var temp__6738__auto___46897 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6738__auto___46897)){
var message_46898 = temp__6738__auto___46897;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message_46898], 0));
} else {
}

return cljs.test.print_comparison(m);
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$error], null),(function (m){
cljs.test.inc_report_counter_BANG_(cljs.core.cst$kw$error);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nERROR in",cljs.test.testing_vars_str(m)], 0));

if(cljs.core.seq(cljs.core.cst$kw$testing_DASH_contexts.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env()))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.test.testing_contexts_str()], 0));
} else {
}

var temp__6738__auto___46899 = cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6738__auto___46899)){
var message_46900 = temp__6738__auto___46899;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([message_46900], 0));
} else {
}

return cljs.test.print_comparison(m);
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$summary], null),(function (m){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nRan",cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(m),"tests containing",((cljs.core.cst$kw$pass.cljs$core$IFn$_invoke$arity$1(m) + cljs.core.cst$kw$fail.cljs$core$IFn$_invoke$arity$1(m)) + cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(m)),"assertions."], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$fail.cljs$core$IFn$_invoke$arity$1(m),"failures,",cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(m),"errors."], 0));
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$begin_DASH_test_DASH_ns], null),(function (m){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\nTesting",cljs.core.name(cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m))], 0));
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$end_DASH_test_DASH_ns], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$begin_DASH_test_DASH_var], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$end_DASH_test_DASH_var], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$end_DASH_run_DASH_tests], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$end_DASH_test_DASH_all_DASH_vars], null),(function (m){
return null;
}));
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$cljs$test_SLASH_default,cljs.core.cst$kw$end_DASH_test_DASH_vars], null),(function (m){
return null;
}));
cljs.test.js_line_and_column = (function cljs$test$js_line_and_column(stack_element){

var parts = stack_element.split(":");
var cnt = cljs.core.count(parts);
if((cnt > (1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__46905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(cnt - (2)));
var G__46906 = (10);
return parseInt(G__46905,G__46906);
})(),(function (){var G__46907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(parts,(cnt - (1)));
var G__46908 = (10);
return parseInt(G__46907,G__46908);
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [NaN,NaN], null);
}
});
cljs.test.js_filename = (function cljs$test$js_filename(stack_element){
return cljs.core.first(cljs.core.last(stack_element.split("/out/")).split(":"));
});
cljs.test.mapped_line_and_column = (function cljs$test$mapped_line_and_column(filename,line,column){
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,line,column], null);
var temp__6736__auto__ = cljs.core.cst$kw$source_DASH_map.cljs$core$IFn$_invoke$arity$1(cljs.test.get_current_env());
if(cljs.core.truth_(temp__6736__auto__)){
var source_map = temp__6736__auto__;
var temp__6736__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(source_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,(line - (1))], null));
if(cljs.core.truth_(temp__6736__auto____$1)){
var columns = temp__6736__auto____$1;
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first((function (){var temp__6736__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(columns,(column - (1)));
if(cljs.core.truth_(temp__6736__auto____$2)){
var mapping = temp__6736__auto____$2;
return mapping;
} else {
return cljs.core.second(cljs.core.first(columns));
}
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$source,cljs.core.cst$kw$line,cljs.core.cst$kw$col], null)));
} else {
return default$;
}
} else {
return default$;
}
});
cljs.test.file_and_line = (function cljs$test$file_and_line(exception,depth){
var temp__6736__auto__ = (function (){var and__7589__auto__ = typeof exception.stack === 'string';
if(and__7589__auto__){
var G__46918 = exception.stack;
var G__46918__$1 = (((G__46918 == null))?null:clojure.string.split_lines(G__46918));
var G__46918__$2 = (((G__46918__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__46918__$1,depth));
if((G__46918__$2 == null)){
return null;
} else {
return clojure.string.trim(G__46918__$2);
}
} else {
return and__7589__auto__;
}
})();
if(cljs.core.truth_(temp__6736__auto__)){
var stack_element = temp__6736__auto__;
var fname = cljs.test.js_filename(stack_element);
var vec__46919 = cljs.test.js_line_and_column(stack_element);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46919,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46919,(1),null);
var vec__46922 = cljs.test.mapped_line_and_column(fname,line,column);
var fname__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46922,(0),null);
var line__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46922,(1),null);
var column__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46922,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$file,fname__$1,cljs.core.cst$kw$line,line__$1,cljs.core.cst$kw$column,column__$1], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$file,exception.fileName,cljs.core.cst$kw$line,exception.lineNumber], null);
}
});
cljs.test.do_report = (function cljs$test$do_report(m){
var m__$1 = (function (){var G__46926 = (((cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(m) instanceof cljs.core.Keyword))?cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(m).fqn:null);
switch (G__46926) {
case "fail":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.test.file_and_line((new Error()),(4)),m], 0));

break;
case "error":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.test.file_and_line(cljs.core.cst$kw$actual.cljs$core$IFn$_invoke$arity$1(m),(0)),m], 0));

break;
default:
return m;

}
})();
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(m__$1) : cljs.test.report.call(null,m__$1));
});

/**
 * Marker protocol denoting CPS function to begin asynchronous
 *   testing.
 * @interface
 */
cljs.test.IAsyncTest = function(){};

/**
 * Returns whether x implements IAsyncTest.
 */
cljs.test.async_QMARK_ = (function cljs$test$async_QMARK_(x){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$test$IAsyncTest$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.test.IAsyncTest,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.test.IAsyncTest,x);
}
});
/**
 * Invoke all functions in fns with no arguments. A fn can optionally
 *   return
 *   
 *   an async test - is invoked with a continuation running left fns
 * 
 *   a seq of fns tagged per block - are invoked immediately after fn
 */
cljs.test.run_block = (function cljs$test$run_block(fns){
while(true){
var temp__6738__auto__ = cljs.core.seq(fns);
if(temp__6738__auto__){
var xs__7294__auto__ = temp__6738__auto__;
var f = cljs.core.first(xs__7294__auto__);
var obj = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.core.truth_(cljs.test.async_QMARK_(obj))){
var G__46933 = (function (){var d = (new cljs.core.Delay(((function (fns,obj,f,xs__7294__auto__,temp__6738__auto__){
return (function (){
var G__46934 = cljs.core.rest(fns);
return (cljs.test.run_block.cljs$core$IFn$_invoke$arity$1 ? cljs.test.run_block.cljs$core$IFn$_invoke$arity$1(G__46934) : cljs.test.run_block.call(null,G__46934));
});})(fns,obj,f,xs__7294__auto__,temp__6738__auto__))
,null));
return ((function (fns,d,obj,f,xs__7294__auto__,temp__6738__auto__){
return (function (){
if(cljs.core.realized_QMARK_(d)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["WARNING: Async test called done more than one time."], 0));
} else {
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(d) : cljs.core.deref.call(null,d));
}
});
;})(fns,d,obj,f,xs__7294__auto__,temp__6738__auto__))
})();
return (obj.cljs$core$IFn$_invoke$arity$1 ? obj.cljs$core$IFn$_invoke$arity$1(G__46933) : obj.call(null,G__46933));
} else {
var G__46936 = (function (){var G__46935 = cljs.core.rest(fns);
if(cljs.core.truth_(cljs.core.cst$kw$cljs$test_SLASH_block_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(obj)))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(obj,G__46935);
} else {
return G__46935;
}
})();
fns = G__46936;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Tag a seq of fns to be picked up by run-block as injected
 *   continuation.  See run-block.
 */
cljs.test.block = (function cljs$test$block(fns){
var G__46938 = fns;
if((G__46938 == null)){
return null;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__46938,cljs.core.assoc,cljs.core.cst$kw$cljs$test_SLASH_block_QMARK_,true);
}
});
cljs.test.test_var_block_STAR_ = (function cljs$test$test_var_block_STAR_(v,t){
if((v instanceof cljs.core.Var)){
} else {
throw (new Error("Assert failed: (instance? Var v)"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_vars], null),cljs.core.conj,cljs.core.array_seq([v], 0));

cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$report_DASH_counters,cljs.core.cst$kw$test], null),cljs.core.inc);

cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$begin_DASH_test_DASH_var,cljs.core.cst$kw$var,v], null));

try{return (t.cljs$core$IFn$_invoke$arity$0 ? t.cljs$core$IFn$_invoke$arity$0() : t.call(null));
}catch (e46941){var e = e46941;
var G__46942 = (((e instanceof cljs.core.Keyword))?e.fqn:null);
switch (G__46942) {
case "cljs.test/async-disabled":
throw "Async tests require fixtures to be specified as maps.  Testing aborted.";

break;
default:
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$error,cljs.core.cst$kw$message,"Uncaught exception, not in assertion.",cljs.core.cst$kw$expected,null,cljs.core.cst$kw$actual,e], null));

}
}}),(function (){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_test_DASH_var,cljs.core.cst$kw$var,v], null));

return cljs.test.update_current_env_BANG_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$testing_DASH_vars], null),cljs.core.rest);
})], null);
});
/**
 * Like test-var, but returns a block for further composition and
 *   later execution.
 */
cljs.test.test_var_block = (function cljs$test$test_var_block(v){
var temp__6736__auto__ = cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__6736__auto__)){
var t = temp__6736__auto__;
return cljs.test.test_var_block_STAR_(v,t);
} else {
return null;
}
});
/**
 * If v has a function in its :test metadata, calls that function,
 *   add v to :testing-vars property of env.
 */
cljs.test.test_var = (function cljs$test$test_var(v){
return cljs.test.run_block(cljs.test.test_var_block(v));
});
/**
 * The default, empty, fixture function.  Just calls its argument.
 * 
 *   NOTE: Incompatible with map fixtures.
 */
cljs.test.default_fixture = (function cljs$test$default_fixture(f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
/**
 * Composes two fixture functions, creating a new fixture function
 *   that combines their behavior.
 * 
 *   NOTE: Incompatible with map fixtures.
 */
cljs.test.compose_fixtures = (function cljs$test$compose_fixtures(f1,f2){
return (function (g){
var G__46945 = (function (){
return (f2.cljs$core$IFn$_invoke$arity$1 ? f2.cljs$core$IFn$_invoke$arity$1(g) : f2.call(null,g));
});
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46945) : f1.call(null,G__46945));
});
});
/**
 * Composes a collection of fixtures, in order.  Always returns a valid
 *   fixture function, even if the collection is empty.
 * 
 *   NOTE: Incompatible with map fixtures.
 */
cljs.test.join_fixtures = (function cljs$test$join_fixtures(fixtures){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.test.compose_fixtures,cljs.test.default_fixture,fixtures);
});
/**
 * Wraps block in map-fixtures.
 */
cljs.test.wrap_map_fixtures = (function cljs$test$wrap_map_fixtures(map_fixtures,block){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$before,map_fixtures),block,cljs.core.array_seq([cljs.core.reverse(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$after,map_fixtures))], 0));
});
cljs.test.execution_strategy = (function cljs$test$execution_strategy(once,each){
var fixtures_type = (function cljs$test$execution_strategy_$_fixtures_type(coll){
if(cljs.core.empty_QMARK_(coll)){
return cljs.core.cst$kw$none;
} else {
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,coll)){
return cljs.core.cst$kw$map;
} else {
if(cljs.core.every_QMARK_(cljs.core.fn_QMARK_,coll)){
return cljs.core.cst$kw$fn;
} else {
return null;
}
}
}
});
var fixtures_types = (function cljs$test$execution_strategy_$_fixtures_types(){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$none,null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(fixtures_type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [once,each], null))));
});
var vec__46949 = fixtures_types();
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46949,(0),null);
var types = vec__46949;
if(cljs.core.not_any_QMARK_(cljs.core.nil_QMARK_,types)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Fixtures may not be of mixed types"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(not-any? nil? types)")].join('')));
}

if(((2) > cljs.core.count(types))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("fixtures specified in :once and :each must be of the same type"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(> 2 (count types))")].join('')));
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$map,cljs.core.cst$kw$async,cljs.core.cst$kw$fn,cljs.core.cst$kw$sync], null).call(null,type,cljs.core.cst$kw$async);
});
cljs.test.disable_async = (function cljs$test$disable_async(f){
return (function (){
var obj = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.core.truth_(cljs.test.async_QMARK_(obj))){
throw cljs.core.cst$kw$cljs$test_SLASH_async_DASH_disabled;
} else {
}

return obj;
});
});
/**
 * Like test-vars, but returns a block for further composition and
 *   later execution.
 */
cljs.test.test_vars_block = (function cljs$test$test_vars_block(vars){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46963){
var vec__46964 = p__46963;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46964,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46964,(1),null);
return ((function (vec__46964,ns,vars__$1){
return (function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$once_DASH_fixtures,ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$each_DASH_fixtures,ns], null));
var G__46967 = (((cljs.test.execution_strategy(once_fixtures,each_fixtures) instanceof cljs.core.Keyword))?cljs.test.execution_strategy(once_fixtures,each_fixtures).fqn:null);
switch (G__46967) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$test,cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (each_fixture_fn,G__46967,env,once_fixtures,each_fixtures,vec__46964,ns,vars__$1){
return (function (){
return cljs.test.join_fixtures(once_fixtures).call(null,((function (each_fixture_fn,G__46967,env,once_fixtures,each_fixtures,vec__46964,ns,vars__$1){
return (function (){
var seq__46968 = cljs.core.seq(vars__$1);
var chunk__46969 = null;
var count__46970 = (0);
var i__46971 = (0);
while(true){
if((i__46971 < count__46970)){
var v = chunk__46969.cljs$core$IIndexed$_nth$arity$2(null,i__46971);
var temp__6738__auto___46975 = cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__6738__auto___46975)){
var t_46976 = temp__6738__auto___46975;
var G__46972_46977 = ((function (seq__46968,chunk__46969,count__46970,i__46971,t_46976,temp__6738__auto___46975,v,each_fixture_fn,G__46967,env,once_fixtures,each_fixtures,vec__46964,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_46976)));
});})(seq__46968,chunk__46969,count__46970,i__46971,t_46976,temp__6738__auto___46975,v,each_fixture_fn,G__46967,env,once_fixtures,each_fixtures,vec__46964,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__46972_46977) : each_fixture_fn.call(null,G__46972_46977));
} else {
}

var G__46978 = seq__46968;
var G__46979 = chunk__46969;
var G__46980 = count__46970;
var G__46981 = (i__46971 + (1));
seq__46968 = G__46978;
chunk__46969 = G__46979;
count__46970 = G__46980;
i__46971 = G__46981;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__46968);
if(temp__6738__auto__){
var seq__46968__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46968__$1)){
var c__8512__auto__ = cljs.core.chunk_first(seq__46968__$1);
var G__46982 = cljs.core.chunk_rest(seq__46968__$1);
var G__46983 = c__8512__auto__;
var G__46984 = cljs.core.count(c__8512__auto__);
var G__46985 = (0);
seq__46968 = G__46982;
chunk__46969 = G__46983;
count__46970 = G__46984;
i__46971 = G__46985;
continue;
} else {
var v = cljs.core.first(seq__46968__$1);
var temp__6738__auto___46986__$1 = cljs.core.cst$kw$test.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__6738__auto___46986__$1)){
var t_46987 = temp__6738__auto___46986__$1;
var G__46973_46988 = ((function (seq__46968,chunk__46969,count__46970,i__46971,t_46987,temp__6738__auto___46986__$1,v,seq__46968__$1,temp__6738__auto__,each_fixture_fn,G__46967,env,once_fixtures,each_fixtures,vec__46964,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_46987)));
});})(seq__46968,chunk__46969,count__46970,i__46971,t_46987,temp__6738__auto___46986__$1,v,seq__46968__$1,temp__6738__auto__,each_fixture_fn,G__46967,env,once_fixtures,each_fixtures,vec__46964,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__46973_46988) : each_fixture_fn.call(null,G__46973_46988));
} else {
}

var G__46989 = cljs.core.next(seq__46968__$1);
var G__46990 = null;
var G__46991 = (0);
var G__46992 = (0);
seq__46968 = G__46989;
chunk__46969 = G__46990;
count__46970 = G__46991;
i__46971 = G__46992;
continue;
}
} else {
return null;
}
}
break;
}
});})(each_fixture_fn,G__46967,env,once_fixtures,each_fixtures,vec__46964,ns,vars__$1))
);
});})(each_fixture_fn,G__46967,env,once_fixtures,each_fixtures,vec__46964,ns,vars__$1))
], null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.test.execution_strategy(once_fixtures,each_fixtures))].join('')));

}
})());
});
;})(vec__46964,ns,vars__$1))
}),cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$ns,cljs.core.meta),vars));
});
/**
 * Groups vars by their namespace and runs test-vars on them with
 *   appropriate fixtures assuming they are present in the current
 *   testing environment.
 */
cljs.test.test_vars = (function cljs$test$test_vars(vars){
return cljs.test.run_block(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.test.test_vars_block(vars),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__46994 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$end_DASH_test_DASH_vars,cljs.core.cst$kw$vars,vars], null);
return (cljs.test.report.cljs$core$IFn$_invoke$arity$1 ? cljs.test.report.cljs$core$IFn$_invoke$arity$1(G__46994) : cljs.test.report.call(null,G__46994));
})], null)));
});
/**
 * Returns true if the given test summary indicates all tests
 *   were successful, false otherwise.
 */
cljs.test.successful_QMARK_ = (function cljs$test$successful_QMARK_(summary){
return ((cljs.core.cst$kw$fail.cljs$core$IFn$_invoke$arity$2(summary,(0)) === (0))) && ((cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$2(summary,(0)) === (0)));
});
