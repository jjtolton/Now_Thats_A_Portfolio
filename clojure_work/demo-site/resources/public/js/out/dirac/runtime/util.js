// Compiled by ClojureScript 1.9.518 {}
goog.provide('dirac.runtime.util');
goog.require('cljs.core');
goog.require('goog.userAgent');
goog.require('goog.object');
goog.require('goog.labs.userAgent.browser');
goog.require('goog.labs.userAgent.platform');
goog.require('dirac.project');
goog.require('dirac.runtime.prefs');
dirac.runtime.util.make_version_info = (function dirac$runtime$util$make_version_info(version){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(version)].join('');
});
dirac.runtime.util.make_lib_info = (function dirac$runtime$util$make_lib_info(version){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Dirac Runtime "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirac.runtime.util.make_version_info.call(null,version))].join('');
});
dirac.runtime.util.get_lib_info = (function dirac$runtime$util$get_lib_info(){
return dirac.runtime.util.make_lib_info.call(null,"1.2.4");
});
dirac.runtime.util.str_or_placeholder = (function dirac$runtime$util$str_or_placeholder(val,placeholder){
if(cljs.core.empty_QMARK_.call(null,val)){
return placeholder;
} else {
return val;
}
});
dirac.runtime.util.platform_str = (function dirac$runtime$util$platform_str(name,name_placeholder,version,version_placeholder){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirac.runtime.util.str_or_placeholder.call(null,name,name_placeholder)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirac.runtime.util.str_or_placeholder.call(null,version,version_placeholder))].join('');
});
dirac.runtime.util.get_browser_version_info = (function dirac$runtime$util$get_browser_version_info(){
var browser_name = clojure.string.join.call(null,", ",cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(goog.labs.userAgent.browser.isOpera())?"Opera":null),(cljs.core.truth_(goog.labs.userAgent.browser.isIE())?"IE":null),(cljs.core.truth_(goog.labs.userAgent.browser.isEdge())?"Edge":null),(cljs.core.truth_(goog.labs.userAgent.browser.isFirefox())?"Firefox":null),(cljs.core.truth_(goog.labs.userAgent.browser.isSafari())?"Safari":null),(cljs.core.truth_(goog.labs.userAgent.browser.isCoast())?"Coast":null),(cljs.core.truth_(goog.labs.userAgent.browser.isChrome())?"Chrome":null),(cljs.core.truth_(goog.labs.userAgent.browser.isSilk())?"Silk":null)], null)));
var browser_version = goog.labs.userAgent.browser.getVersion();
return dirac.runtime.util.platform_str.call(null,browser_name,"?",browser_version,"?");
});
dirac.runtime.util.get_browser_platform_info = (function dirac$runtime$util$get_browser_platform_info(){
var platform_name = clojure.string.join.call(null,", ",cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(goog.labs.userAgent.platform.isAndroid())?"Android":null),(cljs.core.truth_(goog.labs.userAgent.platform.isIpod())?"iPod":null),(cljs.core.truth_(goog.labs.userAgent.platform.isIphone())?"iPhone":null),(cljs.core.truth_(goog.labs.userAgent.platform.isIpad())?"iPad":null),(cljs.core.truth_(goog.labs.userAgent.platform.isMacintosh())?"Mac":null),(cljs.core.truth_(goog.labs.userAgent.platform.isLinux())?"Linux":null),(cljs.core.truth_(goog.labs.userAgent.platform.isWindows())?"Windows":null),(cljs.core.truth_(goog.labs.userAgent.platform.isChromeOS())?"ChromeOS":null)], null)));
var platform_version = goog.labs.userAgent.platform.getVersion();
return dirac.runtime.util.platform_str.call(null,platform_name,"?",platform_version,"?");
});
dirac.runtime.util.get_node_info = (function dirac$runtime$util$get_node_info(root){
try{var process = goog.object.get(root,"process");
var version = (cljs.core.truth_(process)?goog.object.get(process,"version"):null);
var platform = (cljs.core.truth_(process)?goog.object.get(process,"platform"):null);
if(cljs.core.truth_((function (){var and__28737__auto__ = version;
if(cljs.core.truth_(and__28737__auto__)){
return platform;
} else {
return and__28737__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"version","version",425292698),version,new cljs.core.Keyword(null,"platform","platform",-1086422114),platform], null);
} else {
return null;
}
}catch (e61730){var _ = e61730;
return null;
}});
dirac.runtime.util.get_node_description = (function dirac$runtime$util$get_node_description(node_info){
return dirac.runtime.util.platform_str.call(null,new cljs.core.Keyword(null,"platform","platform",-1086422114).cljs$core$IFn$_invoke$arity$1(node_info),"?",new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(node_info),"?");
});
dirac.runtime.util.in_node_context_QMARK_ = (function dirac$runtime$util$in_node_context_QMARK_(){
return !((dirac.runtime.util.get_node_info.call(null,goog.global) == null));
});
dirac.runtime.util.get_js_context_description = (function dirac$runtime$util$get_js_context_description(){
var temp__6736__auto__ = dirac.runtime.util.get_node_info.call(null,goog.global);
if(cljs.core.truth_(temp__6736__auto__)){
var node_info = temp__6736__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("node/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirac.runtime.util.get_node_description.call(null,node_info))].join('');
} else {
var user_agent = goog.userAgent.getUserAgentString();
if(!(cljs.core.empty_QMARK_.call(null,user_agent))){
return user_agent;
} else {
return "<unknown context>";
}
}
});
dirac.runtime.util.unknown_feature_msg = (function dirac$runtime$util$unknown_feature_msg(feature,known_features,lib_info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("No such feature "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is currently available in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_info),cljs.core.str.cljs$core$IFn$_invoke$arity$1(". "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("The list of supported features is "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,known_features))].join('');
});
dirac.runtime.util.feature_not_available_msg = (function dirac$runtime$util$feature_not_available_msg(feature){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Feature "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" cannot be installed. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unsupported Javascript context: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirac.runtime.util.get_js_context_description.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('');
});
dirac.runtime.util.feature_for_display = (function dirac$runtime$util$feature_for_display(installed_features,feature){
var color = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature], true),installed_features))?"color:#0000ff":"color:#ccc");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%c%s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)].join('')], null)], null);
});
dirac.runtime.util.feature_list_display = (function dirac$runtime$util$feature_list_display(installed_features,feature_groups){
var labels = cljs.core.map.call(null,cljs.core.partial.call(null,dirac.runtime.util.feature_for_display,installed_features),new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups));
var _STAR_ = ((function (labels){
return (function (accum,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,accum)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,val))].join(''),cljs.core.concat.call(null,cljs.core.second.call(null,accum),cljs.core.second.call(null,val))], null);
});})(labels))
;
return cljs.core.reduce.call(null,_STAR_,cljs.core.first.call(null,labels),cljs.core.rest.call(null,labels));
});
dirac.runtime.util.display_banner_BANG_ = (function dirac$runtime$util$display_banner_BANG_(var_args){
var args__29977__auto__ = [];
var len__29970__auto___61738 = arguments.length;
var i__29971__auto___61739 = (0);
while(true){
if((i__29971__auto___61739 < len__29970__auto___61738)){
args__29977__auto__.push((arguments[i__29971__auto___61739]));

var G__61740 = (i__29971__auto___61739 + (1));
i__29971__auto___61739 = G__61740;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((3) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((3)),(0),null)):null);
return dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29978__auto__);
});

dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (installed_features,feature_groups,fmt,params){
var vec__61735 = dirac.runtime.util.feature_list_display.call(null,installed_features,feature_groups);
var fmt_str = cljs.core.nth.call(null,vec__61735,(0),null);
var fmt_params = cljs.core.nth.call(null,vec__61735,(1),null);
var items = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt_str)].join('')], null),params,fmt_params);
return console.info.apply(console,cljs.core.into_array.call(null,items));
});

dirac.runtime.util.display_banner_BANG_.cljs$lang$maxFixedArity = (3);

dirac.runtime.util.display_banner_BANG_.cljs$lang$applyTo = (function (seq61731){
var G__61732 = cljs.core.first.call(null,seq61731);
var seq61731__$1 = cljs.core.next.call(null,seq61731);
var G__61733 = cljs.core.first.call(null,seq61731__$1);
var seq61731__$2 = cljs.core.next.call(null,seq61731__$1);
var G__61734 = cljs.core.first.call(null,seq61731__$2);
var seq61731__$3 = cljs.core.next.call(null,seq61731__$2);
return dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__61732,G__61733,G__61734,seq61731__$3);
});

dirac.runtime.util.display_banner_if_needed_BANG_ = (function dirac$runtime$util$display_banner_if_needed_BANG_(features_to_install,feature_groups){
if(cljs.core.truth_(dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-display-banner","dont-display-banner",-1175550370)))){
return null;
} else {
var banner = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Installing %c%s%c and enabling features")].join('');
var lib_info_style = "color:black;font-weight:bold;";
var reset_style = "color:black";
return dirac.runtime.util.display_banner_BANG_.call(null,features_to_install,feature_groups,banner,lib_info_style,dirac.runtime.util.get_lib_info.call(null),reset_style);
}
});
dirac.runtime.util.report_unknown_features_BANG_ = (function dirac$runtime$util$report_unknown_features_BANG_(features,known_features){
var lib_info = dirac.runtime.util.get_lib_info.call(null);
var seq__61745 = cljs.core.seq.call(null,features);
var chunk__61746 = null;
var count__61747 = (0);
var i__61748 = (0);
while(true){
if((i__61748 < count__61747)){
var feature = cljs.core._nth.call(null,chunk__61746,i__61748);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature], true),known_features))){
console.warn(dirac.runtime.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}

var G__61749 = seq__61745;
var G__61750 = chunk__61746;
var G__61751 = count__61747;
var G__61752 = (i__61748 + (1));
seq__61745 = G__61749;
chunk__61746 = G__61750;
count__61747 = G__61751;
i__61748 = G__61752;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__61745);
if(temp__6738__auto__){
var seq__61745__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61745__$1)){
var c__29660__auto__ = cljs.core.chunk_first.call(null,seq__61745__$1);
var G__61753 = cljs.core.chunk_rest.call(null,seq__61745__$1);
var G__61754 = c__29660__auto__;
var G__61755 = cljs.core.count.call(null,c__29660__auto__);
var G__61756 = (0);
seq__61745 = G__61753;
chunk__61746 = G__61754;
count__61747 = G__61755;
i__61748 = G__61756;
continue;
} else {
var feature = cljs.core.first.call(null,seq__61745__$1);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature], true),known_features))){
console.warn(dirac.runtime.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}

var G__61757 = cljs.core.next.call(null,seq__61745__$1);
var G__61758 = null;
var G__61759 = (0);
var G__61760 = (0);
seq__61745 = G__61757;
chunk__61746 = G__61758;
count__61747 = G__61759;
i__61748 = G__61760;
continue;
}
} else {
return null;
}
}
break;
}
});
dirac.runtime.util.is_known_feature_QMARK_ = (function dirac$runtime$util$is_known_feature_QMARK_(known_features,feature){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature], true),known_features));
});
dirac.runtime.util.sanititze_features_BANG_ = (function dirac$runtime$util$sanititze_features_BANG_(features,feature_groups){
var known_features = new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups);
dirac.runtime.util.report_unknown_features_BANG_.call(null,features,known_features);

return cljs.core.filter.call(null,cljs.core.partial.call(null,dirac.runtime.util.is_known_feature_QMARK_,known_features),features);
});
dirac.runtime.util.resolve_features_BANG_ = (function dirac$runtime$util$resolve_features_BANG_(features_desc,feature_groups){
var features = (cljs.core.truth_((function (){var and__28737__auto__ = (features_desc instanceof cljs.core.Keyword);
if(and__28737__auto__){
return features_desc.call(null,feature_groups);
} else {
return and__28737__auto__;
}
})())?features_desc.call(null,feature_groups):(((features_desc == null))?new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(feature_groups):((cljs.core.seqable_QMARK_.call(null,features_desc))?features_desc:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features_desc], null)
)));
return dirac.runtime.util.sanititze_features_BANG_.call(null,features,feature_groups);
});
dirac.runtime.util.install_feature_BANG_ = (function dirac$runtime$util$install_feature_BANG_(feature,features_to_install,available_fn,install_fn){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature], true),features_to_install))){
if(cljs.core.truth_(available_fn.call(null,feature))){
return install_fn.call(null);
} else {
return console.warn(dirac.runtime.util.feature_not_available_msg.call(null,feature));
}
} else {
return null;
}
});

//# sourceMappingURL=util.js.map