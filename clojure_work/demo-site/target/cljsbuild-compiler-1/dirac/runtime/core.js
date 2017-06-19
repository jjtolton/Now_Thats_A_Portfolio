// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('dirac.runtime.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('dirac.runtime.repl');
goog.require('dirac.runtime.util');
goog.require('dirac.runtime.prefs');
dirac.runtime.core.is_feature_available_QMARK_ = (function dirac$runtime$core$is_feature_available_QMARK_(feature){
var G__33146 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__33146) {
case "repl":
return (dirac.runtime.repl.available_QMARK_.cljs$core$IFn$_invoke$arity$0 ? dirac.runtime.repl.available_QMARK_.cljs$core$IFn$_invoke$arity$0() : dirac.runtime.repl.available_QMARK_.call(null));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)].join('')));

}
});
dirac.runtime.core.available_QMARK_ = (function dirac$runtime$core$available_QMARK_(var_args){
var args33148 = [];
var len__8822__auto___33151 = arguments.length;
var i__8823__auto___33152 = (0);
while(true){
if((i__8823__auto___33152 < len__8822__auto___33151)){
args33148.push((arguments[i__8823__auto___33152]));

var G__33153 = (i__8823__auto___33152 + (1));
i__8823__auto___33152 = G__33153;
continue;
} else {
}
break;
}

var G__33150 = args33148.length;
switch (G__33150) {
case 0:
return dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33148.length)].join('')));

}
});

dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1(dirac.runtime.prefs.pref(cljs.core.cst$kw$features_DASH_to_DASH_install));
});

dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = dirac.runtime.util.resolve_features_BANG_(features_desc,dirac.runtime.prefs.feature_groups);
if(cljs.core.empty_QMARK_(features)){
return false;
} else {
return cljs.core.every_QMARK_(dirac.runtime.core.is_feature_available_QMARK_,features);
}
});

dirac.runtime.core.available_QMARK_.cljs$lang$maxFixedArity = 1;

dirac.runtime.core.is_feature_installed_QMARK_ = (function dirac$runtime$core$is_feature_installed_QMARK_(feature){
var G__33156 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__33156) {
case "repl":
return dirac.runtime.repl.installed_QMARK_();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)].join('')));

}
});
dirac.runtime.core.installed_QMARK_ = (function dirac$runtime$core$installed_QMARK_(var_args){
var args33158 = [];
var len__8822__auto___33161 = arguments.length;
var i__8823__auto___33162 = (0);
while(true){
if((i__8823__auto___33162 < len__8822__auto___33161)){
args33158.push((arguments[i__8823__auto___33162]));

var G__33163 = (i__8823__auto___33162 + (1));
i__8823__auto___33162 = G__33163;
continue;
} else {
}
break;
}

var G__33160 = args33158.length;
switch (G__33160) {
case 0:
return dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33158.length)].join('')));

}
});

dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1(dirac.runtime.prefs.pref(cljs.core.cst$kw$features_DASH_to_DASH_install));
});

dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = dirac.runtime.util.resolve_features_BANG_(features_desc,dirac.runtime.prefs.feature_groups);
if(cljs.core.empty_QMARK_(features)){
return false;
} else {
return cljs.core.every_QMARK_(dirac.runtime.core.is_feature_installed_QMARK_,features);
}
});

dirac.runtime.core.installed_QMARK_.cljs$lang$maxFixedArity = 1;

dirac.runtime.core.install_BANG_ = (function dirac$runtime$core$install_BANG_(var_args){
var args33165 = [];
var len__8822__auto___33168 = arguments.length;
var i__8823__auto___33169 = (0);
while(true){
if((i__8823__auto___33169 < len__8822__auto___33168)){
args33165.push((arguments[i__8823__auto___33169]));

var G__33170 = (i__8823__auto___33169 + (1));
i__8823__auto___33169 = G__33170;
continue;
} else {
}
break;
}

var G__33167 = args33165.length;
switch (G__33167) {
case 0:
return dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33165.length)].join('')));

}
});

dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$1(dirac.runtime.prefs.pref(cljs.core.cst$kw$features_DASH_to_DASH_install));
});

dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = dirac.runtime.util.resolve_features_BANG_(features_desc,dirac.runtime.prefs.feature_groups);
dirac.runtime.util.display_banner_if_needed_BANG_(features,dirac.runtime.prefs.feature_groups);

return dirac.runtime.util.install_feature_BANG_(cljs.core.cst$kw$repl,features,dirac.runtime.core.is_feature_available_QMARK_,dirac.runtime.repl.install_BANG_);
});

dirac.runtime.core.install_BANG_.cljs$lang$maxFixedArity = 1;

dirac.runtime.core.uninstall_BANG_ = (function dirac$runtime$core$uninstall_BANG_(){
return dirac.runtime.repl.uninstall_BANG_();
});
