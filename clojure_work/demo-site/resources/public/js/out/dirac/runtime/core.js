// Compiled by ClojureScript 1.9.518 {}
goog.provide('dirac.runtime.core');
goog.require('cljs.core');
goog.require('dirac.runtime.repl');
goog.require('dirac.runtime.util');
goog.require('dirac.runtime.prefs');
dirac.runtime.core.is_feature_available_QMARK_ = (function dirac$runtime$core$is_feature_available_QMARK_(feature){
var G__61835 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__61835) {
case "repl":
return dirac.runtime.repl.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)].join('')));

}
});
dirac.runtime.core.available_QMARK_ = (function dirac$runtime$core$available_QMARK_(var_args){
var args61837 = [];
var len__29970__auto___61840 = arguments.length;
var i__29971__auto___61841 = (0);
while(true){
if((i__29971__auto___61841 < len__29970__auto___61840)){
args61837.push((arguments[i__29971__auto___61841]));

var G__61842 = (i__29971__auto___61841 + (1));
i__29971__auto___61841 = G__61842;
continue;
} else {
}
break;
}

var G__61839 = args61837.length;
switch (G__61839) {
case 0:
return dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args61837.length)].join('')));

}
});

dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.available_QMARK_.call(null,dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

dirac.runtime.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = dirac.runtime.util.resolve_features_BANG_.call(null,features_desc,dirac.runtime.prefs.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,dirac.runtime.core.is_feature_available_QMARK_,features);
}
});

dirac.runtime.core.available_QMARK_.cljs$lang$maxFixedArity = 1;

dirac.runtime.core.is_feature_installed_QMARK_ = (function dirac$runtime$core$is_feature_installed_QMARK_(feature){
var G__61845 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__61845) {
case "repl":
return dirac.runtime.repl.installed_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)].join('')));

}
});
dirac.runtime.core.installed_QMARK_ = (function dirac$runtime$core$installed_QMARK_(var_args){
var args61847 = [];
var len__29970__auto___61850 = arguments.length;
var i__29971__auto___61851 = (0);
while(true){
if((i__29971__auto___61851 < len__29970__auto___61850)){
args61847.push((arguments[i__29971__auto___61851]));

var G__61852 = (i__29971__auto___61851 + (1));
i__29971__auto___61851 = G__61852;
continue;
} else {
}
break;
}

var G__61849 = args61847.length;
switch (G__61849) {
case 0:
return dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args61847.length)].join('')));

}
});

dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.installed_QMARK_.call(null,dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

dirac.runtime.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = dirac.runtime.util.resolve_features_BANG_.call(null,features_desc,dirac.runtime.prefs.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,dirac.runtime.core.is_feature_installed_QMARK_,features);
}
});

dirac.runtime.core.installed_QMARK_.cljs$lang$maxFixedArity = 1;

dirac.runtime.core.install_BANG_ = (function dirac$runtime$core$install_BANG_(var_args){
var args61854 = [];
var len__29970__auto___61857 = arguments.length;
var i__29971__auto___61858 = (0);
while(true){
if((i__29971__auto___61858 < len__29970__auto___61857)){
args61854.push((arguments[i__29971__auto___61858]));

var G__61859 = (i__29971__auto___61858 + (1));
i__29971__auto___61858 = G__61859;
continue;
} else {
}
break;
}

var G__61856 = args61854.length;
switch (G__61856) {
case 0:
return dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args61854.length)].join('')));

}
});

dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return dirac.runtime.core.install_BANG_.call(null,dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

dirac.runtime.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = dirac.runtime.util.resolve_features_BANG_.call(null,features_desc,dirac.runtime.prefs.feature_groups);
dirac.runtime.util.display_banner_if_needed_BANG_.call(null,features,dirac.runtime.prefs.feature_groups);

return dirac.runtime.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"repl","repl",-35398667),features,dirac.runtime.core.is_feature_available_QMARK_,dirac.runtime.repl.install_BANG_);
});

dirac.runtime.core.install_BANG_.cljs$lang$maxFixedArity = 1;

dirac.runtime.core.uninstall_BANG_ = (function dirac$runtime$core$uninstall_BANG_(){
return dirac.runtime.repl.uninstall_BANG_.call(null);
});

//# sourceMappingURL=core.js.map