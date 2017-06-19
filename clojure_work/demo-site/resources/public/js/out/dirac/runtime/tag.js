// Compiled by ClojureScript 1.9.518 {}
goog.provide('dirac.runtime.tag');
goog.require('cljs.core');
goog.require('dirac.runtime.util');
goog.require('dirac.runtime.prefs');
dirac.runtime.tag.prepare_tag_line = (function dirac$runtime$tag$prepare_tag_line(items){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," | ",items));
});
dirac.runtime.tag.get_browser_tag_data = (function dirac$runtime$tag$get_browser_tag_data(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"runtime-tag","runtime-tag",-599299847)),new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location)].join(''),new cljs.core.Keyword(null,"browser","browser",828191719),dirac.runtime.util.get_browser_version_info.call(null),new cljs.core.Keyword(null,"platform","platform",-1086422114),dirac.runtime.util.get_browser_platform_info.call(null)], null);
});
dirac.runtime.tag.get_node_tag_data = (function dirac$runtime$tag$get_node_tag_data(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),dirac.runtime.prefs.pref.call(null,new cljs.core.Keyword(null,"runtime-tag","runtime-tag",-599299847)),new cljs.core.Keyword(null,"platform","platform",-1086422114),dirac.runtime.util.get_js_context_description.call(null)], null);
});
dirac.runtime.tag.get_tag = (function dirac$runtime$tag$get_tag(){
return dirac.runtime.tag.prepare_tag_line.call(null,(cljs.core.truth_(dirac.runtime.util.in_node_context_QMARK_.call(null))?cljs.core.juxt.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"platform","platform",-1086422114)).call(null,dirac.runtime.tag.get_node_tag_data.call(null)):cljs.core.juxt.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"platform","platform",-1086422114)).call(null,dirac.runtime.tag.get_browser_tag_data.call(null))));
});

//# sourceMappingURL=tag.js.map