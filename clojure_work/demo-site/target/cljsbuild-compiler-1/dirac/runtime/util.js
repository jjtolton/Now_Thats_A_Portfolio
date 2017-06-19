// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('dirac.runtime.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Dirac Runtime "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dirac.runtime.util.make_version_info.cljs$core$IFn$_invoke$arity$1 ? dirac.runtime.util.make_version_info.cljs$core$IFn$_invoke$arity$1(version) : dirac.runtime.util.make_version_info.call(null,version)))].join('');
});
dirac.runtime.util.get_lib_info = (function dirac$runtime$util$get_lib_info(){
return (dirac.runtime.util.make_lib_info.cljs$core$IFn$_invoke$arity$1 ? dirac.runtime.util.make_lib_info.cljs$core$IFn$_invoke$arity$1("1.2.4") : dirac.runtime.util.make_lib_info.call(null,"1.2.4"));
});
dirac.runtime.util.str_or_placeholder = (function dirac$runtime$util$str_or_placeholder(val,placeholder){
if(cljs.core.empty_QMARK_(val)){
return placeholder;
} else {
return val;
}
});
dirac.runtime.util.platform_str = (function dirac$runtime$util$platform_str(name,name_placeholder,version,version_placeholder){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirac.runtime.util.str_or_placeholder(name,name_placeholder)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirac.runtime.util.str_or_placeholder(version,version_placeholder))].join('');
});
dirac.runtime.util.get_browser_version_info = (function dirac$runtime$util$get_browser_version_info(){
var browser_name = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(goog.labs.userAgent.browser.isOpera())?"Opera":null),(cljs.core.truth_(goog.labs.userAgent.browser.isIE())?"IE":null),(cljs.core.truth_(goog.labs.userAgent.browser.isEdge())?"Edge":null),(cljs.core.truth_(goog.labs.userAgent.browser.isFirefox())?"Firefox":null),(cljs.core.truth_(goog.labs.userAgent.browser.isSafari())?"Safari":null),(cljs.core.truth_(goog.labs.userAgent.browser.isCoast())?"Coast":null),(cljs.core.truth_(goog.labs.userAgent.browser.isChrome())?"Chrome":null),(cljs.core.truth_(goog.labs.userAgent.browser.isSilk())?"Silk":null)], null)));
var browser_version = goog.labs.userAgent.browser.getVersion();
return dirac.runtime.util.platform_str(browser_name,"?",browser_version,"?");
});
dirac.runtime.util.get_browser_platform_info = (function dirac$runtime$util$get_browser_platform_info(){
var platform_name = clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(goog.labs.userAgent.platform.isAndroid())?"Android":null),(cljs.core.truth_(goog.labs.userAgent.platform.isIpod())?"iPod":null),(cljs.core.truth_(goog.labs.userAgent.platform.isIphone())?"iPhone":null),(cljs.core.truth_(goog.labs.userAgent.platform.isIpad())?"iPad":null),(cljs.core.truth_(goog.labs.userAgent.platform.isMacintosh())?"Mac":null),(cljs.core.truth_(goog.labs.userAgent.platform.isLinux())?"Linux":null),(cljs.core.truth_(goog.labs.userAgent.platform.isWindows())?"Windows":null),(cljs.core.truth_(goog.labs.userAgent.platform.isChromeOS())?"ChromeOS":null)], null)));
var platform_version = goog.labs.userAgent.platform.getVersion();
return dirac.runtime.util.platform_str(platform_name,"?",platform_version,"?");
});
dirac.runtime.util.get_node_info = (function dirac$runtime$util$get_node_info(root){
try{var process = goog.object.get(root,"process");
var version = (cljs.core.truth_(process)?goog.object.get(process,"version"):null);
var platform = (cljs.core.truth_(process)?goog.object.get(process,"platform"):null);
if(cljs.core.truth_((function (){var and__7589__auto__ = version;
if(cljs.core.truth_(and__7589__auto__)){
return platform;
} else {
return and__7589__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$version,version,cljs.core.cst$kw$platform,platform], null);
} else {
return null;
}
}catch (e33041){var _ = e33041;
return null;
}});
dirac.runtime.util.get_node_description = (function dirac$runtime$util$get_node_description(node_info){
return dirac.runtime.util.platform_str(cljs.core.cst$kw$platform.cljs$core$IFn$_invoke$arity$1(node_info),"?",cljs.core.cst$kw$version.cljs$core$IFn$_invoke$arity$1(node_info),"?");
});
dirac.runtime.util.in_node_context_QMARK_ = (function dirac$runtime$util$in_node_context_QMARK_(){
return !(((dirac.runtime.util.get_node_info.cljs$core$IFn$_invoke$arity$1 ? dirac.runtime.util.get_node_info.cljs$core$IFn$_invoke$arity$1(goog.global) : dirac.runtime.util.get_node_info.call(null,goog.global)) == null));
});
dirac.runtime.util.get_js_context_description = (function dirac$runtime$util$get_js_context_description(){
var temp__6736__auto__ = (dirac.runtime.util.get_node_info.cljs$core$IFn$_invoke$arity$1 ? dirac.runtime.util.get_node_info.cljs$core$IFn$_invoke$arity$1(goog.global) : dirac.runtime.util.get_node_info.call(null,goog.global));
if(cljs.core.truth_(temp__6736__auto__)){
var node_info = temp__6736__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("node/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dirac.runtime.util.get_node_description.cljs$core$IFn$_invoke$arity$1 ? dirac.runtime.util.get_node_description.cljs$core$IFn$_invoke$arity$1(node_info) : dirac.runtime.util.get_node_description.call(null,node_info)))].join('');
} else {
var user_agent = goog.userAgent.getUserAgentString();
if(!(cljs.core.empty_QMARK_(user_agent))){
return user_agent;
} else {
return "<unknown context>";
}
}
});
dirac.runtime.util.unknown_feature_msg = (function dirac$runtime$util$unknown_feature_msg(feature,known_features,lib_info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("No such feature "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is currently available in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_info),cljs.core.str.cljs$core$IFn$_invoke$arity$1(". "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("The list of supported features is "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([known_features], 0)))].join('');
});
dirac.runtime.util.feature_not_available_msg = (function dirac$runtime$util$feature_not_available_msg(feature){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Feature "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" cannot be installed. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unsupported Javascript context: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((dirac.runtime.util.get_js_context_description.cljs$core$IFn$_invoke$arity$0 ? dirac.runtime.util.get_js_context_description.cljs$core$IFn$_invoke$arity$0() : dirac.runtime.util.get_js_context_description.call(null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('');
});
dirac.runtime.util.feature_for_display = (function dirac$runtime$util$feature_for_display(installed_features,feature){
var color = (cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature], true),installed_features))?"color:#0000ff":"color:#ccc");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%c%s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)].join('')], null)], null);
});
dirac.runtime.util.feature_list_display = (function dirac$runtime$util$feature_list_display(installed_features,feature_groups){
var labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(dirac.runtime.util.feature_for_display,installed_features),cljs.core.cst$kw$all.cljs$core$IFn$_invoke$arity$1(feature_groups));
var _STAR_ = ((function (labels){
return (function (accum,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(accum)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(val))].join(''),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.second(accum),cljs.core.second(val))], null);
});})(labels))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(_STAR_,cljs.core.first(labels),cljs.core.rest(labels));
});
dirac.runtime.util.display_banner_BANG_ = (function dirac$runtime$util$display_banner_BANG_(var_args){
var args__8829__auto__ = [];
var len__8822__auto___33049 = arguments.length;
var i__8823__auto___33050 = (0);
while(true){
if((i__8823__auto___33050 < len__8822__auto___33049)){
args__8829__auto__.push((arguments[i__8823__auto___33050]));

var G__33051 = (i__8823__auto___33050 + (1));
i__8823__auto___33050 = G__33051;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((3) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((3)),(0),null)):null);
return dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8830__auto__);
});

dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (installed_features,feature_groups,fmt,params){
var vec__33046 = dirac.runtime.util.feature_list_display(installed_features,feature_groups);
var fmt_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33046,(0),null);
var fmt_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33046,(1),null);
var items = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt_str)].join('')], null),params,cljs.core.array_seq([fmt_params], 0));
return console.info.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(items));
});

dirac.runtime.util.display_banner_BANG_.cljs$lang$maxFixedArity = (3);

dirac.runtime.util.display_banner_BANG_.cljs$lang$applyTo = (function (seq33042){
var G__33043 = cljs.core.first(seq33042);
var seq33042__$1 = cljs.core.next(seq33042);
var G__33044 = cljs.core.first(seq33042__$1);
var seq33042__$2 = cljs.core.next(seq33042__$1);
var G__33045 = cljs.core.first(seq33042__$2);
var seq33042__$3 = cljs.core.next(seq33042__$2);
return dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33043,G__33044,G__33045,seq33042__$3);
});

dirac.runtime.util.display_banner_if_needed_BANG_ = (function dirac$runtime$util$display_banner_if_needed_BANG_(features_to_install,feature_groups){
if(cljs.core.truth_(dirac.runtime.prefs.pref(cljs.core.cst$kw$dont_DASH_display_DASH_banner))){
return null;
} else {
var banner = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Installing %c%s%c and enabling features")].join('');
var lib_info_style = "color:black;font-weight:bold;";
var reset_style = "color:black";
return dirac.runtime.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic(features_to_install,feature_groups,banner,cljs.core.array_seq([lib_info_style,dirac.runtime.util.get_lib_info(),reset_style], 0));
}
});
dirac.runtime.util.report_unknown_features_BANG_ = (function dirac$runtime$util$report_unknown_features_BANG_(features,known_features){
var lib_info = dirac.runtime.util.get_lib_info();
var seq__33056 = cljs.core.seq(features);
var chunk__33057 = null;
var count__33058 = (0);
var i__33059 = (0);
while(true){
if((i__33059 < count__33058)){
var feature = chunk__33057.cljs$core$IIndexed$_nth$arity$2(null,i__33059);
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature], true),known_features))){
console.warn((dirac.runtime.util.unknown_feature_msg.cljs$core$IFn$_invoke$arity$3 ? dirac.runtime.util.unknown_feature_msg.cljs$core$IFn$_invoke$arity$3(feature,known_features,lib_info) : dirac.runtime.util.unknown_feature_msg.call(null,feature,known_features,lib_info)));
} else {
}

var G__33060 = seq__33056;
var G__33061 = chunk__33057;
var G__33062 = count__33058;
var G__33063 = (i__33059 + (1));
seq__33056 = G__33060;
chunk__33057 = G__33061;
count__33058 = G__33062;
i__33059 = G__33063;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__33056);
if(temp__6738__auto__){
var seq__33056__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33056__$1)){
var c__8512__auto__ = cljs.core.chunk_first(seq__33056__$1);
var G__33064 = cljs.core.chunk_rest(seq__33056__$1);
var G__33065 = c__8512__auto__;
var G__33066 = cljs.core.count(c__8512__auto__);
var G__33067 = (0);
seq__33056 = G__33064;
chunk__33057 = G__33065;
count__33058 = G__33066;
i__33059 = G__33067;
continue;
} else {
var feature = cljs.core.first(seq__33056__$1);
if(cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature], true),known_features))){
console.warn((dirac.runtime.util.unknown_feature_msg.cljs$core$IFn$_invoke$arity$3 ? dirac.runtime.util.unknown_feature_msg.cljs$core$IFn$_invoke$arity$3(feature,known_features,lib_info) : dirac.runtime.util.unknown_feature_msg.call(null,feature,known_features,lib_info)));
} else {
}

var G__33068 = cljs.core.next(seq__33056__$1);
var G__33069 = null;
var G__33070 = (0);
var G__33071 = (0);
seq__33056 = G__33068;
chunk__33057 = G__33069;
count__33058 = G__33070;
i__33059 = G__33071;
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
return cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature], true),known_features));
});
dirac.runtime.util.sanititze_features_BANG_ = (function dirac$runtime$util$sanititze_features_BANG_(features,feature_groups){
var known_features = cljs.core.cst$kw$all.cljs$core$IFn$_invoke$arity$1(feature_groups);
dirac.runtime.util.report_unknown_features_BANG_(features,known_features);

return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(dirac.runtime.util.is_known_feature_QMARK_,known_features),features);
});
dirac.runtime.util.resolve_features_BANG_ = (function dirac$runtime$util$resolve_features_BANG_(features_desc,feature_groups){
var features = (cljs.core.truth_((function (){var and__7589__auto__ = (features_desc instanceof cljs.core.Keyword);
if(and__7589__auto__){
return (features_desc.cljs$core$IFn$_invoke$arity$1 ? features_desc.cljs$core$IFn$_invoke$arity$1(feature_groups) : features_desc.call(null,feature_groups));
} else {
return and__7589__auto__;
}
})())?(features_desc.cljs$core$IFn$_invoke$arity$1 ? features_desc.cljs$core$IFn$_invoke$arity$1(feature_groups) : features_desc.call(null,feature_groups)):(((features_desc == null))?cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(feature_groups):((cljs.core.seqable_QMARK_(features_desc))?features_desc:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features_desc], null)
)));
return dirac.runtime.util.sanititze_features_BANG_(features,feature_groups);
});
dirac.runtime.util.install_feature_BANG_ = (function dirac$runtime$util$install_feature_BANG_(feature,features_to_install,available_fn,install_fn){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([feature], true),features_to_install))){
if(cljs.core.truth_((available_fn.cljs$core$IFn$_invoke$arity$1 ? available_fn.cljs$core$IFn$_invoke$arity$1(feature) : available_fn.call(null,feature)))){
return (install_fn.cljs$core$IFn$_invoke$arity$0 ? install_fn.cljs$core$IFn$_invoke$arity$0() : install_fn.call(null));
} else {
return console.warn((dirac.runtime.util.feature_not_available_msg.cljs$core$IFn$_invoke$arity$1 ? dirac.runtime.util.feature_not_available_msg.cljs$core$IFn$_invoke$arity$1(feature) : dirac.runtime.util.feature_not_available_msg.call(null,feature)));
}
} else {
return null;
}
});
