// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('dirac.runtime.tag');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('dirac.runtime.util');
goog.require('dirac.runtime.prefs');
dirac.runtime.tag.prepare_tag_line = (function dirac$runtime$tag$prepare_tag_line(items){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" | ",items));
});
dirac.runtime.tag.get_browser_tag_data = (function dirac$runtime$tag$get_browser_tag_data(){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$tag,dirac.runtime.prefs.pref(cljs.core.cst$kw$runtime_DASH_tag),cljs.core.cst$kw$url,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location)].join(''),cljs.core.cst$kw$browser,dirac.runtime.util.get_browser_version_info(),cljs.core.cst$kw$platform,dirac.runtime.util.get_browser_platform_info()], null);
});
dirac.runtime.tag.get_node_tag_data = (function dirac$runtime$tag$get_node_tag_data(){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tag,dirac.runtime.prefs.pref(cljs.core.cst$kw$runtime_DASH_tag),cljs.core.cst$kw$platform,(dirac.runtime.util.get_js_context_description.cljs$core$IFn$_invoke$arity$0 ? dirac.runtime.util.get_js_context_description.cljs$core$IFn$_invoke$arity$0() : dirac.runtime.util.get_js_context_description.call(null))], null);
});
dirac.runtime.tag.get_tag = (function dirac$runtime$tag$get_tag(){
return dirac.runtime.tag.prepare_tag_line((cljs.core.truth_((dirac.runtime.util.in_node_context_QMARK_.cljs$core$IFn$_invoke$arity$0 ? dirac.runtime.util.in_node_context_QMARK_.cljs$core$IFn$_invoke$arity$0() : dirac.runtime.util.in_node_context_QMARK_.call(null)))?cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tag,cljs.core.cst$kw$platform).call(null,dirac.runtime.tag.get_node_tag_data()):cljs.core.juxt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$tag,cljs.core.cst$kw$url,cljs.core.cst$kw$browser,cljs.core.array_seq([cljs.core.cst$kw$platform], 0)).call(null,dirac.runtime.tag.get_browser_tag_data())));
});
