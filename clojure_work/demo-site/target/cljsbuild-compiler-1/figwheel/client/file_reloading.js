// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = (function (){var G__40958 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__40958) : cljs.core.atom.call(null,G__40958));
})();
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event("figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event("figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event("figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__7601__auto__ = (cljs.core.map_QMARK_(m)) && (typeof cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$namespace));
if(or__7601__auto__){
return or__7601__auto__;
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Error not namespace-file-map",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m], 0))], 0));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path(ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__7601__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__40961_SHARP_){
return cljs.core.not(figwheel.client.file_reloading.immutable_ns_QMARK_(p1__40961_SHARP_));
}),(function (){var G__40963 = (goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path(ns)]);
return goog.object.getKeys(G__40963);
})()));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = (function (){var G__40964 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pathToName,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$dependents,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__40964) : cljs.core.atom.call(null,G__40964));
})();
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pathToName,path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([cljs.core.PersistentHashSet.createAsIfByAssoc([name], true)], 0));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = (function (){var G__40969 = goog.dependencies_.nameToPath;
var G__40970 = ((function (G__40969){
return (function (v,k,o){
return goog.string.startsWith(v,"../");
});})(G__40969))
;
return goog.object.filter(G__40969,G__40970);
})();
var G__40971 = nameToPath;
var G__40972 = ((function (G__40971,nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_(v,k);
});})(G__40971,nameToPath))
;
return goog.object.forEach(G__40971,G__40972);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.dependency_data) : cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pathToName,path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dependents,ns], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true)], 0));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = (function (){var G__40983 = goog.dependencies_.requires;
var G__40984 = ((function (G__40983){
return (function (v,k,o){
return goog.string.startsWith(k,"../");
});})(G__40983))
;
return goog.object.filter(G__40983,G__40984);
})();
var G__40985 = requires;
var G__40986 = ((function (G__40985,requires){
return (function (v,k,_){
var G__40987 = v;
var G__40988 = ((function (G__40987,G__40985,requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__40989 = cljs.core.seq(figwheel.client.file_reloading.path__GT_name(k));
var chunk__40990 = null;
var count__40991 = (0);
var i__40992 = (0);
while(true){
if((i__40992 < count__40991)){
var n = chunk__40990.cljs$core$IIndexed$_nth$arity$2(null,i__40992);
figwheel.client.file_reloading.name_to_parent_BANG_(k_SINGLEQUOTE_,n);

var G__40993 = seq__40989;
var G__40994 = chunk__40990;
var G__40995 = count__40991;
var G__40996 = (i__40992 + (1));
seq__40989 = G__40993;
chunk__40990 = G__40994;
count__40991 = G__40995;
i__40992 = G__40996;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__40989);
if(temp__6738__auto__){
var seq__40989__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40989__$1)){
var c__8512__auto__ = cljs.core.chunk_first(seq__40989__$1);
var G__40997 = cljs.core.chunk_rest(seq__40989__$1);
var G__40998 = c__8512__auto__;
var G__40999 = cljs.core.count(c__8512__auto__);
var G__41000 = (0);
seq__40989 = G__40997;
chunk__40990 = G__40998;
count__40991 = G__40999;
i__40992 = G__41000;
continue;
} else {
var n = cljs.core.first(seq__40989__$1);
figwheel.client.file_reloading.name_to_parent_BANG_(k_SINGLEQUOTE_,n);

var G__41001 = cljs.core.next(seq__40989__$1);
var G__41002 = null;
var G__41003 = (0);
var G__41004 = (0);
seq__40989 = G__41001;
chunk__40990 = G__41002;
count__40991 = G__41003;
i__40992 = G__41004;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__40987,G__40985,requires))
;
return goog.object.forEach(G__40987,G__40988);
});})(G__40985,requires))
;
return goog.object.forEach(G__40985,G__40986);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.dependency_data) : cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dependents,ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize(get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = (get_deps__$1.cljs$core$IFn$_invoke$arity$1 ? get_deps__$1.cljs$core$IFn$_invoke$arity$1(x) : get_deps__$1.call(null,x));
if(cljs.core.empty_QMARK_(deps)){
return null;
} else {
return topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3(deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3(deps,(0),(function (){var G__41081 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41081) : cljs.core.atom.call(null,G__41081));
})());
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([deps], 0));

var seq__41082_41094 = cljs.core.seq(deps);
var chunk__41083_41095 = null;
var count__41084_41096 = (0);
var i__41085_41097 = (0);
while(true){
if((i__41085_41097 < count__41084_41096)){
var dep_41098 = chunk__41083_41095.cljs$core$IIndexed$_nth$arity$2(null,i__41085_41097);
topo_sort_helper_STAR_(dep_41098,(depth + (1)),state);

var G__41099 = seq__41082_41094;
var G__41100 = chunk__41083_41095;
var G__41101 = count__41084_41096;
var G__41102 = (i__41085_41097 + (1));
seq__41082_41094 = G__41099;
chunk__41083_41095 = G__41100;
count__41084_41096 = G__41101;
i__41085_41097 = G__41102;
continue;
} else {
var temp__6738__auto___41103 = cljs.core.seq(seq__41082_41094);
if(temp__6738__auto___41103){
var seq__41082_41104__$1 = temp__6738__auto___41103;
if(cljs.core.chunked_seq_QMARK_(seq__41082_41104__$1)){
var c__8512__auto___41105 = cljs.core.chunk_first(seq__41082_41104__$1);
var G__41106 = cljs.core.chunk_rest(seq__41082_41104__$1);
var G__41107 = c__8512__auto___41105;
var G__41108 = cljs.core.count(c__8512__auto___41105);
var G__41109 = (0);
seq__41082_41094 = G__41106;
chunk__41083_41095 = G__41107;
count__41084_41096 = G__41108;
i__41085_41097 = G__41109;
continue;
} else {
var dep_41110 = cljs.core.first(seq__41082_41104__$1);
topo_sort_helper_STAR_(dep_41110,(depth + (1)),state);

var G__41111 = cljs.core.next(seq__41082_41104__$1);
var G__41112 = null;
var G__41113 = (0);
var G__41114 = (0);
seq__41082_41094 = G__41111;
chunk__41083_41095 = G__41112;
count__41084_41096 = G__41113;
i__41085_41097 = G__41114;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(depth,(0))){
return elim_dups_STAR_(cljs.core.reverse(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41086){
var vec__41091 = p__41086;
var seq__41092 = cljs.core.seq(vec__41091);
var first__41093 = cljs.core.first(seq__41092);
var seq__41092__$1 = cljs.core.next(seq__41092);
var x = first__41093;
var xs = seq__41092__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons(x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__41091,seq__41092,first__41093,seq__41092__$1,x,xs,get_deps__$1){
return (function (p1__41005_SHARP_){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(p1__41005_SHARP_,x);
});})(vec__41091,seq__41092,first__41093,seq__41092__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort(figwheel.client.file_reloading.get_requires);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__41116 = cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null));
return (topo_sort_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? topo_sort_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(G__41116) : topo_sort_SINGLEQUOTE_.call(null,G__41116));
})());
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort(figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__41118 = cljs.core.set(nss);
return (topo_sort_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? topo_sort_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(G__41118) : topo_sort_SINGLEQUOTE_.call(null,G__41118));
})())));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path(ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

var G__41121 = goog.dependencies_.written;
var G__41122 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
return goog.object.remove(G__41121,G__41122);
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path(ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__41135 = cljs.core.seq(provides);
var chunk__41136 = null;
var count__41137 = (0);
var i__41138 = (0);
while(true){
if((i__41138 < count__41137)){
var prov = chunk__41136.cljs$core$IIndexed$_nth$arity$2(null,i__41138);
figwheel.client.file_reloading.path_to_name_BANG_(path,prov);

var seq__41139_41147 = cljs.core.seq(requires);
var chunk__41140_41148 = null;
var count__41141_41149 = (0);
var i__41142_41150 = (0);
while(true){
if((i__41142_41150 < count__41141_41149)){
var req_41151 = chunk__41140_41148.cljs$core$IIndexed$_nth$arity$2(null,i__41142_41150);
figwheel.client.file_reloading.name_to_parent_BANG_(req_41151,prov);

var G__41152 = seq__41139_41147;
var G__41153 = chunk__41140_41148;
var G__41154 = count__41141_41149;
var G__41155 = (i__41142_41150 + (1));
seq__41139_41147 = G__41152;
chunk__41140_41148 = G__41153;
count__41141_41149 = G__41154;
i__41142_41150 = G__41155;
continue;
} else {
var temp__6738__auto___41156 = cljs.core.seq(seq__41139_41147);
if(temp__6738__auto___41156){
var seq__41139_41157__$1 = temp__6738__auto___41156;
if(cljs.core.chunked_seq_QMARK_(seq__41139_41157__$1)){
var c__8512__auto___41158 = cljs.core.chunk_first(seq__41139_41157__$1);
var G__41159 = cljs.core.chunk_rest(seq__41139_41157__$1);
var G__41160 = c__8512__auto___41158;
var G__41161 = cljs.core.count(c__8512__auto___41158);
var G__41162 = (0);
seq__41139_41147 = G__41159;
chunk__41140_41148 = G__41160;
count__41141_41149 = G__41161;
i__41142_41150 = G__41162;
continue;
} else {
var req_41163 = cljs.core.first(seq__41139_41157__$1);
figwheel.client.file_reloading.name_to_parent_BANG_(req_41163,prov);

var G__41164 = cljs.core.next(seq__41139_41157__$1);
var G__41165 = null;
var G__41166 = (0);
var G__41167 = (0);
seq__41139_41147 = G__41164;
chunk__41140_41148 = G__41165;
count__41141_41149 = G__41166;
i__41142_41150 = G__41167;
continue;
}
} else {
}
}
break;
}

var G__41168 = seq__41135;
var G__41169 = chunk__41136;
var G__41170 = count__41137;
var G__41171 = (i__41138 + (1));
seq__41135 = G__41168;
chunk__41136 = G__41169;
count__41137 = G__41170;
i__41138 = G__41171;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__41135);
if(temp__6738__auto__){
var seq__41135__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41135__$1)){
var c__8512__auto__ = cljs.core.chunk_first(seq__41135__$1);
var G__41172 = cljs.core.chunk_rest(seq__41135__$1);
var G__41173 = c__8512__auto__;
var G__41174 = cljs.core.count(c__8512__auto__);
var G__41175 = (0);
seq__41135 = G__41172;
chunk__41136 = G__41173;
count__41137 = G__41174;
i__41138 = G__41175;
continue;
} else {
var prov = cljs.core.first(seq__41135__$1);
figwheel.client.file_reloading.path_to_name_BANG_(path,prov);

var seq__41143_41176 = cljs.core.seq(requires);
var chunk__41144_41177 = null;
var count__41145_41178 = (0);
var i__41146_41179 = (0);
while(true){
if((i__41146_41179 < count__41145_41178)){
var req_41180 = chunk__41144_41177.cljs$core$IIndexed$_nth$arity$2(null,i__41146_41179);
figwheel.client.file_reloading.name_to_parent_BANG_(req_41180,prov);

var G__41181 = seq__41143_41176;
var G__41182 = chunk__41144_41177;
var G__41183 = count__41145_41178;
var G__41184 = (i__41146_41179 + (1));
seq__41143_41176 = G__41181;
chunk__41144_41177 = G__41182;
count__41145_41178 = G__41183;
i__41146_41179 = G__41184;
continue;
} else {
var temp__6738__auto___41185__$1 = cljs.core.seq(seq__41143_41176);
if(temp__6738__auto___41185__$1){
var seq__41143_41186__$1 = temp__6738__auto___41185__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41143_41186__$1)){
var c__8512__auto___41187 = cljs.core.chunk_first(seq__41143_41186__$1);
var G__41188 = cljs.core.chunk_rest(seq__41143_41186__$1);
var G__41189 = c__8512__auto___41187;
var G__41190 = cljs.core.count(c__8512__auto___41187);
var G__41191 = (0);
seq__41143_41176 = G__41188;
chunk__41144_41177 = G__41189;
count__41145_41178 = G__41190;
i__41146_41179 = G__41191;
continue;
} else {
var req_41192 = cljs.core.first(seq__41143_41186__$1);
figwheel.client.file_reloading.name_to_parent_BANG_(req_41192,prov);

var G__41193 = cljs.core.next(seq__41143_41186__$1);
var G__41194 = null;
var G__41195 = (0);
var G__41196 = (0);
seq__41143_41176 = G__41193;
chunk__41144_41177 = G__41194;
count__41145_41178 = G__41195;
i__41146_41179 = G__41196;
continue;
}
} else {
}
}
break;
}

var G__41197 = cljs.core.next(seq__41135__$1);
var G__41198 = null;
var G__41199 = (0);
var G__41200 = (0);
seq__41135 = G__41197;
chunk__41136 = G__41198;
count__41137 = G__41199;
i__41138 = G__41200;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reload,"reload-all")){
var seq__41205_41209 = cljs.core.seq(figwheel.client.file_reloading.get_all_dependencies(src));
var chunk__41206_41210 = null;
var count__41207_41211 = (0);
var i__41208_41212 = (0);
while(true){
if((i__41208_41212 < count__41207_41211)){
var ns_41213 = chunk__41206_41210.cljs$core$IIndexed$_nth$arity$2(null,i__41208_41212);
figwheel.client.file_reloading.unprovide_BANG_(ns_41213);

var G__41214 = seq__41205_41209;
var G__41215 = chunk__41206_41210;
var G__41216 = count__41207_41211;
var G__41217 = (i__41208_41212 + (1));
seq__41205_41209 = G__41214;
chunk__41206_41210 = G__41215;
count__41207_41211 = G__41216;
i__41208_41212 = G__41217;
continue;
} else {
var temp__6738__auto___41218 = cljs.core.seq(seq__41205_41209);
if(temp__6738__auto___41218){
var seq__41205_41219__$1 = temp__6738__auto___41218;
if(cljs.core.chunked_seq_QMARK_(seq__41205_41219__$1)){
var c__8512__auto___41220 = cljs.core.chunk_first(seq__41205_41219__$1);
var G__41221 = cljs.core.chunk_rest(seq__41205_41219__$1);
var G__41222 = c__8512__auto___41220;
var G__41223 = cljs.core.count(c__8512__auto___41220);
var G__41224 = (0);
seq__41205_41209 = G__41221;
chunk__41206_41210 = G__41222;
count__41207_41211 = G__41223;
i__41208_41212 = G__41224;
continue;
} else {
var ns_41225 = cljs.core.first(seq__41205_41219__$1);
figwheel.client.file_reloading.unprovide_BANG_(ns_41225);

var G__41226 = cljs.core.next(seq__41205_41219__$1);
var G__41227 = null;
var G__41228 = (0);
var G__41229 = (0);
seq__41205_41209 = G__41226;
chunk__41206_41210 = G__41227;
count__41207_41211 = G__41228;
i__41208_41212 = G__41229;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_(src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__7601__auto__ = goog.require__;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_();

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_();

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__41230__delegate = function (args){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.addDependency_figwheel_backup_,args);
};
var G__41230 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41231__i = 0, G__41231__a = new Array(arguments.length -  0);
while (G__41231__i < G__41231__a.length) {G__41231__a[G__41231__i] = arguments[G__41231__i + 0]; ++G__41231__i;}
  args = new cljs.core.IndexedSeq(G__41231__a,0);
} 
return G__41230__delegate.call(this,args);};
G__41230.cljs$lang$maxFixedArity = 0;
G__41230.cljs$lang$applyTo = (function (arglist__41232){
var args = cljs.core.seq(arglist__41232);
return G__41230__delegate(args);
});
G__41230.cljs$core$IFn$_invoke$arity$variadic = G__41230__delegate;
return G__41230;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base();

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = (function (){var G__41235 = figwheel.client.file_reloading.add_cache_buster(request_url);
var G__41236 = ({"cleanupWhenDone": true});
return goog.net.jsloader.load(G__41235,G__41236);
})();
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41237 = cljs.core._EQ_;
var expr__41238 = figwheel.client.utils.host_env_QMARK_();
if(cljs.core.truth_((function (){var G__41240 = cljs.core.cst$kw$node;
var G__41241 = expr__41238;
return (pred__41237.cljs$core$IFn$_invoke$arity$2 ? pred__41237.cljs$core$IFn$_invoke$arity$2(G__41240,G__41241) : pred__41237.call(null,G__41240,G__41241));
})())){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = (function (){var G__41242 = require.cache;
var G__41243 = ((function (G__41242,node_path_lib,util_pattern,pred__41237,expr__41238){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(G__41242,node_path_lib,util_pattern,pred__41237,expr__41238))
;
return goog.object.findKey(G__41242,G__41243);
})();
var parts = cljs.core.pop(cljs.core.pop(clojure.string.split.cljs$core$IFn$_invoke$arity$2(util_path,/[\/\\]/)));
var root_path = clojure.string.join.cljs$core$IFn$_invoke$arity$2(node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__41237,expr__41238){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
var G__41244_41256 = require.cache;
var G__41245_41257 = cache_path;
goog.object.remove(G__41244_41256,G__41245_41257);

var G__41246 = (function (){try{return require(cache_path);
}catch (e41247){if((e41247 instanceof Error)){
var e = e41247;
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,e.stack);

return false;
} else {
throw e41247;

}
}})();
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__41246) : callback.call(null,G__41246));
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__41237,expr__41238))
} else {
if(cljs.core.truth_((function (){var G__41248 = cljs.core.cst$kw$html;
var G__41249 = expr__41238;
return (pred__41237.cljs$core$IFn$_invoke$arity$2 ? pred__41237.cljs$core$IFn$_invoke$arity$2(G__41248,G__41249) : pred__41237.call(null,G__41248,G__41249));
})())){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_((function (){var G__41250 = cljs.core.cst$kw$react_DASH_native;
var G__41251 = expr__41238;
return (pred__41237.cljs$core$IFn$_invoke$arity$2 ? pred__41237.cljs$core$IFn$_invoke$arity$2(G__41250,G__41251) : pred__41237.call(null,G__41250,G__41251));
})())){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_((function (){var G__41252 = cljs.core.cst$kw$worker;
var G__41253 = expr__41238;
return (pred__41237.cljs$core$IFn$_invoke$arity$2 ? pred__41237.cljs$core$IFn$_invoke$arity$2(G__41252,G__41253) : pred__41237.call(null,G__41252,G__41253));
})())){
return ((function (pred__41237,expr__41238){
return (function (request_url,callback){

var G__41254 = (function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster(request_url));

return true;
}catch (e41255){if((e41255 instanceof Error)){
var e = e41255;
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,e.stack);

return false;
} else {
throw e41255;

}
}})();
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__41254) : callback.call(null,G__41254));
});
;})(pred__41237,expr__41238))
} else {
return ((function (pred__41237,expr__41238){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__41237,expr__41238))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41258,callback){
var map__41263 = p__41258;
var map__41263__$1 = ((((!((map__41263 == null)))?((((map__41263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41263.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41263):map__41263);
var file_msg = map__41263__$1;
var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41263__$1,cljs.core.cst$kw$request_DASH_url);

figwheel.client.utils.debug_prn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

var G__41265 = request_url;
var G__41266 = ((function (G__41265,map__41263,map__41263__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file_msg,cljs.core.cst$kw$loaded_DASH_file,true)], null));
} else {
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(G__41265,map__41263,map__41263__$1,file_msg,request_url))
;
return (figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 ? figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2(G__41265,G__41266) : figwheel.client.file_reloading.reload_file_STAR_.call(null,G__41265,G__41266));
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = (function (){var G__41267 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41267) : cljs.core.atom.call(null,G__41267));
})();
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = (function (){var G__41268 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__41268) : cljs.core.atom.call(null,G__41268));
})();
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
figwheel.client.file_reloading.reload_file(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$request_DASH_url,url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,file_msg);

return cljs.core.async.close_BANG_(out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__){
return (function (state_41291){
var state_val_41292 = (state_41291[(1)]);
if((state_val_41292 === (7))){
var inst_41287 = (state_41291[(2)]);
var state_41291__$1 = state_41291;
var statearr_41293_41313 = state_41291__$1;
(statearr_41293_41313[(2)] = inst_41287);

(statearr_41293_41313[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41292 === (1))){
var state_41291__$1 = state_41291;
var statearr_41294_41314 = state_41291__$1;
(statearr_41294_41314[(2)] = null);

(statearr_41294_41314[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41292 === (4))){
var inst_41271 = (state_41291[(7)]);
var inst_41271__$1 = (state_41291[(2)]);
var state_41291__$1 = (function (){var statearr_41295 = state_41291;
(statearr_41295[(7)] = inst_41271__$1);

return statearr_41295;
})();
if(cljs.core.truth_(inst_41271__$1)){
var statearr_41296_41315 = state_41291__$1;
(statearr_41296_41315[(1)] = (5));

} else {
var statearr_41297_41316 = state_41291__$1;
(statearr_41297_41316[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41292 === (6))){
var state_41291__$1 = state_41291;
var statearr_41298_41317 = state_41291__$1;
(statearr_41298_41317[(2)] = null);

(statearr_41298_41317[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41292 === (3))){
var inst_41289 = (state_41291[(2)]);
var state_41291__$1 = state_41291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41291__$1,inst_41289);
} else {
if((state_val_41292 === (2))){
var state_41291__$1 = state_41291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41291__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_41292 === (11))){
var inst_41283 = (state_41291[(2)]);
var state_41291__$1 = (function (){var statearr_41299 = state_41291;
(statearr_41299[(8)] = inst_41283);

return statearr_41299;
})();
var statearr_41300_41318 = state_41291__$1;
(statearr_41300_41318[(2)] = null);

(statearr_41300_41318[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41292 === (9))){
var inst_41275 = (state_41291[(9)]);
var inst_41277 = (state_41291[(10)]);
var inst_41279 = (inst_41277.cljs$core$IFn$_invoke$arity$1 ? inst_41277.cljs$core$IFn$_invoke$arity$1(inst_41275) : inst_41277.call(null,inst_41275));
var state_41291__$1 = state_41291;
var statearr_41301_41319 = state_41291__$1;
(statearr_41301_41319[(2)] = inst_41279);

(statearr_41301_41319[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41292 === (5))){
var inst_41271 = (state_41291[(7)]);
var inst_41273 = figwheel.client.file_reloading.blocking_load(inst_41271);
var state_41291__$1 = state_41291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41291__$1,(8),inst_41273);
} else {
if((state_val_41292 === (10))){
var inst_41275 = (state_41291[(9)]);
var inst_41281 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_41275);
var state_41291__$1 = state_41291;
var statearr_41302_41320 = state_41291__$1;
(statearr_41302_41320[(2)] = inst_41281);

(statearr_41302_41320[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41292 === (8))){
var inst_41271 = (state_41291[(7)]);
var inst_41277 = (state_41291[(10)]);
var inst_41275 = (state_41291[(2)]);
var inst_41276 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.on_load_callbacks) : cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks));
var inst_41277__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41276,inst_41271);
var state_41291__$1 = (function (){var statearr_41303 = state_41291;
(statearr_41303[(9)] = inst_41275);

(statearr_41303[(10)] = inst_41277__$1);

return statearr_41303;
})();
if(cljs.core.truth_(inst_41277__$1)){
var statearr_41304_41321 = state_41291__$1;
(statearr_41304_41321[(1)] = (9));

} else {
var statearr_41305_41322 = state_41291__$1;
(statearr_41305_41322[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16369__auto__))
;
return ((function (switch__16243__auto__,c__16369__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__16244__auto__ = null;
var figwheel$client$file_reloading$state_machine__16244__auto____0 = (function (){
var statearr_41309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41309[(0)] = figwheel$client$file_reloading$state_machine__16244__auto__);

(statearr_41309[(1)] = (1));

return statearr_41309;
});
var figwheel$client$file_reloading$state_machine__16244__auto____1 = (function (state_41291){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_41291);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e41310){if((e41310 instanceof Object)){
var ex__16247__auto__ = e41310;
var statearr_41311_41323 = state_41291;
(statearr_41311_41323[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41291);

return cljs.core.cst$kw$recur;
} else {
throw e41310;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__41324 = state_41291;
state_41291 = G__41324;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__16244__auto__ = function(state_41291){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__16244__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__16244__auto____1.call(this,state_41291);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__16244__auto____0;
figwheel$client$file_reloading$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__16244__auto____1;
return figwheel$client$file_reloading$state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__))
})();
var state__16371__auto__ = (function (){var statearr_41312 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_41312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_41312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__))
);

return c__16369__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__41325,callback){
var map__41328 = p__41325;
var map__41328__$1 = ((((!((map__41328 == null)))?((((map__41328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41328.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41328):map__41328);
var file_msg = map__41328__$1;
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41328__$1,cljs.core.cst$kw$namespace);
var request_url = figwheel.client.file_reloading.resolve_ns(namespace);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__41328,map__41328__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([file_msg,cljs.core.select_keys(file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loaded_DASH_file], null))], 0))], null));
});})(request_url,map__41328,map__41328__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require(cljs.core.name(namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__41330){
var map__41333 = p__41330;
var map__41333__$1 = ((((!((map__41333 == null)))?((((map__41333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41333):map__41333);
var file_msg = map__41333__$1;
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41333__$1,cljs.core.cst$kw$namespace);
var meta_pragmas = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.figwheel_meta_pragmas) : cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)),cljs.core.name(namespace));
return cljs.core.cst$kw$figwheel_DASH_no_DASH_load.cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41335){
var map__41338 = p__41335;
var map__41338__$1 = ((((!((map__41338 == null)))?((((map__41338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41338):map__41338);
var file_msg = map__41338__$1;
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41338__$1,cljs.core.cst$kw$namespace);

var meta_pragmas = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.figwheel_meta_pragmas) : cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)),cljs.core.name(namespace));
var and__7589__auto__ = cljs.core.not(figwheel.client.file_reloading.figwheel_no_load_QMARK_(file_msg));
if(and__7589__auto__){
var or__7601__auto__ = cljs.core.cst$kw$figwheel_DASH_always.cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
var or__7601__auto____$1 = cljs.core.cst$kw$figwheel_DASH_load.cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__7601__auto____$1)){
return or__7601__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_(cljs.core.name(namespace));
}
}
} else {
return and__7589__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41340,callback){
var map__41343 = p__41340;
var map__41343__$1 = ((((!((map__41343 == null)))?((((map__41343.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41343.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41343):map__41343);
var file_msg = map__41343__$1;
var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41343__$1,cljs.core.cst$kw$request_DASH_url);
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41343__$1,cljs.core.cst$kw$namespace);

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_(file_msg))){
return figwheel.client.file_reloading.require_with_callback(file_msg,callback);
} else {
figwheel.client.utils.debug_prn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
figwheel.client.file_reloading.js_reload(file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,url);

return cljs.core.async.close_BANG_(out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__16369__auto___41447 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto___41447,out){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto___41447,out){
return (function (state_41429){
var state_val_41430 = (state_41429[(1)]);
if((state_val_41430 === (1))){
var inst_41403 = cljs.core.seq(files);
var inst_41404 = cljs.core.first(inst_41403);
var inst_41405 = cljs.core.next(inst_41403);
var inst_41406 = files;
var state_41429__$1 = (function (){var statearr_41431 = state_41429;
(statearr_41431[(7)] = inst_41405);

(statearr_41431[(8)] = inst_41404);

(statearr_41431[(9)] = inst_41406);

return statearr_41431;
})();
var statearr_41432_41448 = state_41429__$1;
(statearr_41432_41448[(2)] = null);

(statearr_41432_41448[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41430 === (2))){
var inst_41412 = (state_41429[(10)]);
var inst_41406 = (state_41429[(9)]);
var inst_41411 = cljs.core.seq(inst_41406);
var inst_41412__$1 = cljs.core.first(inst_41411);
var inst_41413 = cljs.core.next(inst_41411);
var inst_41414 = (inst_41412__$1 == null);
var inst_41415 = cljs.core.not(inst_41414);
var state_41429__$1 = (function (){var statearr_41433 = state_41429;
(statearr_41433[(11)] = inst_41413);

(statearr_41433[(10)] = inst_41412__$1);

return statearr_41433;
})();
if(inst_41415){
var statearr_41434_41449 = state_41429__$1;
(statearr_41434_41449[(1)] = (4));

} else {
var statearr_41435_41450 = state_41429__$1;
(statearr_41435_41450[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41430 === (3))){
var inst_41427 = (state_41429[(2)]);
var state_41429__$1 = state_41429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41429__$1,inst_41427);
} else {
if((state_val_41430 === (4))){
var inst_41412 = (state_41429[(10)]);
var inst_41417 = figwheel.client.file_reloading.reload_js_file(inst_41412);
var state_41429__$1 = state_41429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41429__$1,(7),inst_41417);
} else {
if((state_val_41430 === (5))){
var inst_41423 = cljs.core.async.close_BANG_(out);
var state_41429__$1 = state_41429;
var statearr_41436_41451 = state_41429__$1;
(statearr_41436_41451[(2)] = inst_41423);

(statearr_41436_41451[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41430 === (6))){
var inst_41425 = (state_41429[(2)]);
var state_41429__$1 = state_41429;
var statearr_41437_41452 = state_41429__$1;
(statearr_41437_41452[(2)] = inst_41425);

(statearr_41437_41452[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41430 === (7))){
var inst_41413 = (state_41429[(11)]);
var inst_41419 = (state_41429[(2)]);
var inst_41420 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,inst_41419);
var inst_41406 = inst_41413;
var state_41429__$1 = (function (){var statearr_41438 = state_41429;
(statearr_41438[(12)] = inst_41420);

(statearr_41438[(9)] = inst_41406);

return statearr_41438;
})();
var statearr_41439_41453 = state_41429__$1;
(statearr_41439_41453[(2)] = null);

(statearr_41439_41453[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(c__16369__auto___41447,out))
;
return ((function (switch__16243__auto__,c__16369__auto___41447,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__16244__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__16244__auto____0 = (function (){
var statearr_41443 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41443[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__16244__auto__);

(statearr_41443[(1)] = (1));

return statearr_41443;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__16244__auto____1 = (function (state_41429){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_41429);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e41444){if((e41444 instanceof Object)){
var ex__16247__auto__ = e41444;
var statearr_41445_41454 = state_41429;
(statearr_41445_41454[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41429);

return cljs.core.cst$kw$recur;
} else {
throw e41444;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__41455 = state_41429;
state_41429 = G__41455;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__16244__auto__ = function(state_41429){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__16244__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__16244__auto____1.call(this,state_41429);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__16244__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__16244__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto___41447,out))
})();
var state__16371__auto__ = (function (){var statearr_41446 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_41446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___41447);

return statearr_41446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto___41447,out))
);


return cljs.core.async.into(cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41456,opts){
var map__41460 = p__41456;
var map__41460__$1 = ((((!((map__41460 == null)))?((((map__41460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41460.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41460):map__41460);
var eval_body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41460__$1,cljs.core.cst$kw$eval_DASH_body);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41460__$1,cljs.core.cst$kw$file);
if(cljs.core.truth_((function (){var and__7589__auto__ = eval_body;
if(cljs.core.truth_(and__7589__auto__)){
return typeof eval_body === 'string';
} else {
return and__7589__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper(code,opts);
}catch (e41462){var e = e41462;
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$namespace,files));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.re_matches,/figwheel\.connect.*/),cljs.core.cst$kw$namespace),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (deps){
return (function (n){
var temp__6736__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (deps){
return (function (p1__41463_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(p1__41463_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6736__auto__)){
var file_msg = temp__6736__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$namespace,cljs.core.cst$kw$namespace,n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count(files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$namespace,files));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(keep_files,cljs.core.cst$kw$namespace),figwheel.client.file_reloading.expand_files(files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41472){
var vec__41473 = p__41472;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41473,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41473,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$namespace,k,cljs.core.cst$kw$type,cljs.core.cst$kw$namespace], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__41476){
var vec__41477 = p__41476;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41477,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41477,(1),null);
return cljs.core.cst$kw$figwheel_DASH_always.cljs$core$IFn$_invoke$arity$1(v);
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.figwheel_meta_pragmas) : cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas))));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41483,p__41484){
var map__41733 = p__41483;
var map__41733__$1 = ((((!((map__41733 == null)))?((((map__41733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41733):map__41733);
var opts = map__41733__$1;
var before_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41733__$1,cljs.core.cst$kw$before_DASH_jsload);
var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41733__$1,cljs.core.cst$kw$on_DASH_jsload);
var reload_dependents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41733__$1,cljs.core.cst$kw$reload_DASH_dependents);
var map__41734 = p__41484;
var map__41734__$1 = ((((!((map__41734 == null)))?((((map__41734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41734.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41734):map__41734);
var msg = map__41734__$1;
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41734__$1,cljs.core.cst$kw$files);
var figwheel_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41734__$1,cljs.core.cst$kw$figwheel_DASH_meta);
var recompile_dependents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41734__$1,cljs.core.cst$kw$recompile_DASH_dependents);
if(cljs.core.empty_QMARK_(figwheel_meta)){
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta) : cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta));
}

var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41888){
var state_val_41889 = (state_41888[(1)]);
if((state_val_41889 === (7))){
var inst_41748 = (state_41888[(7)]);
var inst_41749 = (state_41888[(8)]);
var inst_41750 = (state_41888[(9)]);
var inst_41751 = (state_41888[(10)]);
var inst_41756 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_41749,inst_41751);
var inst_41757 = figwheel.client.file_reloading.eval_body(inst_41756,opts);
var inst_41758 = (inst_41751 + (1));
var tmp41890 = inst_41748;
var tmp41891 = inst_41749;
var tmp41892 = inst_41750;
var inst_41748__$1 = tmp41890;
var inst_41749__$1 = tmp41891;
var inst_41750__$1 = tmp41892;
var inst_41751__$1 = inst_41758;
var state_41888__$1 = (function (){var statearr_41893 = state_41888;
(statearr_41893[(7)] = inst_41748__$1);

(statearr_41893[(8)] = inst_41749__$1);

(statearr_41893[(9)] = inst_41750__$1);

(statearr_41893[(10)] = inst_41751__$1);

(statearr_41893[(11)] = inst_41757);

return statearr_41893;
})();
var statearr_41894_41981 = state_41888__$1;
(statearr_41894_41981[(2)] = null);

(statearr_41894_41981[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (20))){
var inst_41791 = (state_41888[(12)]);
var inst_41799 = figwheel.client.file_reloading.sort_files(inst_41791);
var state_41888__$1 = state_41888;
var statearr_41895_41982 = state_41888__$1;
(statearr_41895_41982[(2)] = inst_41799);

(statearr_41895_41982[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (27))){
var state_41888__$1 = state_41888;
var statearr_41896_41983 = state_41888__$1;
(statearr_41896_41983[(2)] = null);

(statearr_41896_41983[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (1))){
var inst_41740 = (state_41888[(13)]);
var inst_41737 = (before_jsload.cljs$core$IFn$_invoke$arity$1 ? before_jsload.cljs$core$IFn$_invoke$arity$1(files) : before_jsload.call(null,files));
var inst_41738 = figwheel.client.file_reloading.before_jsload_custom_event(files);
var inst_41739 = (function (){return ((function (inst_41740,inst_41737,inst_41738,state_val_41889,c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41480_SHARP_){
return cljs.core.cst$kw$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__41480_SHARP_);
});
;})(inst_41740,inst_41737,inst_41738,state_val_41889,c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41740__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_41739,files);
var inst_41741 = cljs.core.not_empty(inst_41740__$1);
var state_41888__$1 = (function (){var statearr_41897 = state_41888;
(statearr_41897[(14)] = inst_41737);

(statearr_41897[(13)] = inst_41740__$1);

(statearr_41897[(15)] = inst_41738);

return statearr_41897;
})();
if(cljs.core.truth_(inst_41741)){
var statearr_41898_41984 = state_41888__$1;
(statearr_41898_41984[(1)] = (2));

} else {
var statearr_41899_41985 = state_41888__$1;
(statearr_41899_41985[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (24))){
var state_41888__$1 = state_41888;
var statearr_41900_41986 = state_41888__$1;
(statearr_41900_41986[(2)] = null);

(statearr_41900_41986[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (39))){
var inst_41841 = (state_41888[(16)]);
var state_41888__$1 = state_41888;
var statearr_41901_41987 = state_41888__$1;
(statearr_41901_41987[(2)] = inst_41841);

(statearr_41901_41987[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (46))){
var inst_41883 = (state_41888[(2)]);
var state_41888__$1 = state_41888;
var statearr_41902_41988 = state_41888__$1;
(statearr_41902_41988[(2)] = inst_41883);

(statearr_41902_41988[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (4))){
var inst_41785 = (state_41888[(2)]);
var inst_41786 = cljs.core.List.EMPTY;
var inst_41787 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.dependencies_loaded,inst_41786) : cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41786));
var inst_41788 = (function (){return ((function (inst_41785,inst_41786,inst_41787,state_val_41889,c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41481_SHARP_){
var and__7589__auto__ = cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(p1__41481_SHARP_);
if(cljs.core.truth_(and__7589__auto__)){
return (cljs.core.not(cljs.core.cst$kw$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__41481_SHARP_))) && (cljs.core.not(figwheel.client.file_reloading.figwheel_no_load_QMARK_(p1__41481_SHARP_)));
} else {
return and__7589__auto__;
}
});
;})(inst_41785,inst_41786,inst_41787,state_val_41889,c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41789 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_41788,files);
var inst_41790 = figwheel.client.file_reloading.get_figwheel_always();
var inst_41791 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_41789,inst_41790);
var state_41888__$1 = (function (){var statearr_41903 = state_41888;
(statearr_41903[(17)] = inst_41787);

(statearr_41903[(12)] = inst_41791);

(statearr_41903[(18)] = inst_41785);

return statearr_41903;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41904_41989 = state_41888__$1;
(statearr_41904_41989[(1)] = (16));

} else {
var statearr_41905_41990 = state_41888__$1;
(statearr_41905_41990[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (15))){
var inst_41775 = (state_41888[(2)]);
var state_41888__$1 = state_41888;
var statearr_41906_41991 = state_41888__$1;
(statearr_41906_41991[(2)] = inst_41775);

(statearr_41906_41991[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (21))){
var inst_41801 = (state_41888[(19)]);
var inst_41801__$1 = (state_41888[(2)]);
var inst_41802 = figwheel.client.file_reloading.load_all_js_files(inst_41801__$1);
var state_41888__$1 = (function (){var statearr_41907 = state_41888;
(statearr_41907[(19)] = inst_41801__$1);

return statearr_41907;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41888__$1,(22),inst_41802);
} else {
if((state_val_41889 === (31))){
var inst_41886 = (state_41888[(2)]);
var state_41888__$1 = state_41888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41888__$1,inst_41886);
} else {
if((state_val_41889 === (32))){
var inst_41841 = (state_41888[(16)]);
var inst_41846 = inst_41841.cljs$lang$protocol_mask$partition0$;
var inst_41847 = (inst_41846 & (64));
var inst_41848 = inst_41841.cljs$core$ISeq$;
var inst_41849 = (cljs.core.PROTOCOL_SENTINEL === inst_41848);
var inst_41850 = (inst_41847) || (inst_41849);
var state_41888__$1 = state_41888;
if(cljs.core.truth_(inst_41850)){
var statearr_41908_41992 = state_41888__$1;
(statearr_41908_41992[(1)] = (35));

} else {
var statearr_41909_41993 = state_41888__$1;
(statearr_41909_41993[(1)] = (36));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (40))){
var inst_41863 = (state_41888[(20)]);
var inst_41862 = (state_41888[(2)]);
var inst_41863__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41862,cljs.core.cst$kw$figwheel_DASH_no_DASH_load);
var inst_41864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41862,cljs.core.cst$kw$not_DASH_required);
var inst_41865 = cljs.core.not_empty(inst_41863__$1);
var state_41888__$1 = (function (){var statearr_41910 = state_41888;
(statearr_41910[(20)] = inst_41863__$1);

(statearr_41910[(21)] = inst_41864);

return statearr_41910;
})();
if(cljs.core.truth_(inst_41865)){
var statearr_41911_41994 = state_41888__$1;
(statearr_41911_41994[(1)] = (41));

} else {
var statearr_41912_41995 = state_41888__$1;
(statearr_41912_41995[(1)] = (42));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (33))){
var state_41888__$1 = state_41888;
var statearr_41913_41996 = state_41888__$1;
(statearr_41913_41996[(2)] = false);

(statearr_41913_41996[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (13))){
var inst_41761 = (state_41888[(22)]);
var inst_41765 = cljs.core.chunk_first(inst_41761);
var inst_41766 = cljs.core.chunk_rest(inst_41761);
var inst_41767 = cljs.core.count(inst_41765);
var inst_41748 = inst_41766;
var inst_41749 = inst_41765;
var inst_41750 = inst_41767;
var inst_41751 = (0);
var state_41888__$1 = (function (){var statearr_41914 = state_41888;
(statearr_41914[(7)] = inst_41748);

(statearr_41914[(8)] = inst_41749);

(statearr_41914[(9)] = inst_41750);

(statearr_41914[(10)] = inst_41751);

return statearr_41914;
})();
var statearr_41915_41997 = state_41888__$1;
(statearr_41915_41997[(2)] = null);

(statearr_41915_41997[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (22))){
var inst_41805 = (state_41888[(23)]);
var inst_41809 = (state_41888[(24)]);
var inst_41801 = (state_41888[(19)]);
var inst_41804 = (state_41888[(25)]);
var inst_41804__$1 = (state_41888[(2)]);
var inst_41805__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$loaded_DASH_file,inst_41804__$1);
var inst_41806 = (function (){var all_files = inst_41801;
var res_SINGLEQUOTE_ = inst_41804__$1;
var res = inst_41805__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41805,inst_41809,inst_41801,inst_41804,inst_41804__$1,inst_41805__$1,state_val_41889,c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41482_SHARP_){
return cljs.core.not(cljs.core.cst$kw$loaded_DASH_file.cljs$core$IFn$_invoke$arity$1(p1__41482_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41805,inst_41809,inst_41801,inst_41804,inst_41804__$1,inst_41805__$1,state_val_41889,c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41807 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_41806,inst_41804__$1);
var inst_41808 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.dependencies_loaded) : cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded));
var inst_41809__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$loaded_DASH_file,inst_41808);
var inst_41810 = cljs.core.not_empty(inst_41809__$1);
var state_41888__$1 = (function (){var statearr_41916 = state_41888;
(statearr_41916[(23)] = inst_41805__$1);

(statearr_41916[(26)] = inst_41807);

(statearr_41916[(24)] = inst_41809__$1);

(statearr_41916[(25)] = inst_41804__$1);

return statearr_41916;
})();
if(cljs.core.truth_(inst_41810)){
var statearr_41917_41998 = state_41888__$1;
(statearr_41917_41998[(1)] = (23));

} else {
var statearr_41918_41999 = state_41888__$1;
(statearr_41918_41999[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (36))){
var state_41888__$1 = state_41888;
var statearr_41919_42000 = state_41888__$1;
(statearr_41919_42000[(2)] = false);

(statearr_41919_42000[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (41))){
var inst_41863 = (state_41888[(20)]);
var inst_41867 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.name__GT_path,cljs.core.cst$kw$namespace);
var inst_41868 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_41867,inst_41863);
var inst_41869 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_41868], 0));
var inst_41870 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41869)].join('');
var inst_41871 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_41870);
var state_41888__$1 = state_41888;
var statearr_41920_42001 = state_41888__$1;
(statearr_41920_42001[(2)] = inst_41871);

(statearr_41920_42001[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (43))){
var inst_41864 = (state_41888[(21)]);
var inst_41874 = (state_41888[(2)]);
var inst_41875 = cljs.core.not_empty(inst_41864);
var state_41888__$1 = (function (){var statearr_41921 = state_41888;
(statearr_41921[(27)] = inst_41874);

return statearr_41921;
})();
if(cljs.core.truth_(inst_41875)){
var statearr_41922_42002 = state_41888__$1;
(statearr_41922_42002[(1)] = (44));

} else {
var statearr_41923_42003 = state_41888__$1;
(statearr_41923_42003[(1)] = (45));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (29))){
var inst_41841 = (state_41888[(16)]);
var inst_41805 = (state_41888[(23)]);
var inst_41807 = (state_41888[(26)]);
var inst_41809 = (state_41888[(24)]);
var inst_41801 = (state_41888[(19)]);
var inst_41804 = (state_41888[(25)]);
var inst_41837 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: NOT loading these files ");
var inst_41840 = (function (){var all_files = inst_41801;
var res_SINGLEQUOTE_ = inst_41804;
var res = inst_41805;
var files_not_loaded = inst_41807;
var dependencies_that_loaded = inst_41809;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41841,inst_41805,inst_41807,inst_41809,inst_41801,inst_41804,inst_41837,state_val_41889,c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41839){
var map__41924 = p__41839;
var map__41924__$1 = ((((!((map__41924 == null)))?((((map__41924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41924):map__41924);
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41924__$1,cljs.core.cst$kw$namespace);
var meta_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.figwheel_meta_pragmas) : cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)),cljs.core.name(namespace));
if((meta_data == null)){
return cljs.core.cst$kw$not_DASH_required;
} else {
if(cljs.core.truth_((function (){var G__41926 = cljs.core.cst$kw$figwheel_DASH_no_DASH_load;
return (meta_data.cljs$core$IFn$_invoke$arity$1 ? meta_data.cljs$core$IFn$_invoke$arity$1(G__41926) : meta_data.call(null,G__41926));
})())){
return cljs.core.cst$kw$figwheel_DASH_no_DASH_load;
} else {
return cljs.core.cst$kw$not_DASH_required;

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41841,inst_41805,inst_41807,inst_41809,inst_41801,inst_41804,inst_41837,state_val_41889,c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41841__$1 = cljs.core.group_by(inst_41840,inst_41807);
var inst_41843 = (inst_41841__$1 == null);
var inst_41844 = cljs.core.not(inst_41843);
var state_41888__$1 = (function (){var statearr_41927 = state_41888;
(statearr_41927[(28)] = inst_41837);

(statearr_41927[(16)] = inst_41841__$1);

return statearr_41927;
})();
if(inst_41844){
var statearr_41928_42004 = state_41888__$1;
(statearr_41928_42004[(1)] = (32));

} else {
var statearr_41929_42005 = state_41888__$1;
(statearr_41929_42005[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (44))){
var inst_41864 = (state_41888[(21)]);
var inst_41877 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$file,inst_41864);
var inst_41878 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_41877], 0));
var inst_41879 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41878)].join('');
var inst_41880 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_41879);
var state_41888__$1 = state_41888;
var statearr_41930_42006 = state_41888__$1;
(statearr_41930_42006[(2)] = inst_41880);

(statearr_41930_42006[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (6))){
var inst_41782 = (state_41888[(2)]);
var state_41888__$1 = state_41888;
var statearr_41931_42007 = state_41888__$1;
(statearr_41931_42007[(2)] = inst_41782);

(statearr_41931_42007[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (28))){
var inst_41807 = (state_41888[(26)]);
var inst_41834 = (state_41888[(2)]);
var inst_41835 = cljs.core.not_empty(inst_41807);
var state_41888__$1 = (function (){var statearr_41932 = state_41888;
(statearr_41932[(29)] = inst_41834);

return statearr_41932;
})();
if(cljs.core.truth_(inst_41835)){
var statearr_41933_42008 = state_41888__$1;
(statearr_41933_42008[(1)] = (29));

} else {
var statearr_41934_42009 = state_41888__$1;
(statearr_41934_42009[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (25))){
var inst_41805 = (state_41888[(23)]);
var inst_41821 = (state_41888[(2)]);
var inst_41822 = cljs.core.not_empty(inst_41805);
var state_41888__$1 = (function (){var statearr_41935 = state_41888;
(statearr_41935[(30)] = inst_41821);

return statearr_41935;
})();
if(cljs.core.truth_(inst_41822)){
var statearr_41936_42010 = state_41888__$1;
(statearr_41936_42010[(1)] = (26));

} else {
var statearr_41937_42011 = state_41888__$1;
(statearr_41937_42011[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (34))){
var inst_41857 = (state_41888[(2)]);
var state_41888__$1 = state_41888;
if(cljs.core.truth_(inst_41857)){
var statearr_41938_42012 = state_41888__$1;
(statearr_41938_42012[(1)] = (38));

} else {
var statearr_41939_42013 = state_41888__$1;
(statearr_41939_42013[(1)] = (39));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (17))){
var state_41888__$1 = state_41888;
var statearr_41940_42014 = state_41888__$1;
(statearr_41940_42014[(2)] = recompile_dependents);

(statearr_41940_42014[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (3))){
var state_41888__$1 = state_41888;
var statearr_41941_42015 = state_41888__$1;
(statearr_41941_42015[(2)] = null);

(statearr_41941_42015[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (12))){
var inst_41778 = (state_41888[(2)]);
var state_41888__$1 = state_41888;
var statearr_41942_42016 = state_41888__$1;
(statearr_41942_42016[(2)] = inst_41778);

(statearr_41942_42016[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (2))){
var inst_41740 = (state_41888[(13)]);
var inst_41747 = cljs.core.seq(inst_41740);
var inst_41748 = inst_41747;
var inst_41749 = null;
var inst_41750 = (0);
var inst_41751 = (0);
var state_41888__$1 = (function (){var statearr_41943 = state_41888;
(statearr_41943[(7)] = inst_41748);

(statearr_41943[(8)] = inst_41749);

(statearr_41943[(9)] = inst_41750);

(statearr_41943[(10)] = inst_41751);

return statearr_41943;
})();
var statearr_41944_42017 = state_41888__$1;
(statearr_41944_42017[(2)] = null);

(statearr_41944_42017[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (23))){
var inst_41805 = (state_41888[(23)]);
var inst_41807 = (state_41888[(26)]);
var inst_41809 = (state_41888[(24)]);
var inst_41801 = (state_41888[(19)]);
var inst_41804 = (state_41888[(25)]);
var inst_41812 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: loaded these dependencies");
var inst_41814 = (function (){var all_files = inst_41801;
var res_SINGLEQUOTE_ = inst_41804;
var res = inst_41805;
var files_not_loaded = inst_41807;
var dependencies_that_loaded = inst_41809;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41805,inst_41807,inst_41809,inst_41801,inst_41804,inst_41812,state_val_41889,c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41813){
var map__41945 = p__41813;
var map__41945__$1 = ((((!((map__41945 == null)))?((((map__41945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41945.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41945):map__41945);
var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41945__$1,cljs.core.cst$kw$request_DASH_url);
return clojure.string.replace(request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41805,inst_41807,inst_41809,inst_41801,inst_41804,inst_41812,state_val_41889,c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41815 = cljs.core.reverse(inst_41809);
var inst_41816 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_41814,inst_41815);
var inst_41817 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_41816], 0));
var inst_41818 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_41817);
var state_41888__$1 = (function (){var statearr_41947 = state_41888;
(statearr_41947[(31)] = inst_41812);

return statearr_41947;
})();
var statearr_41948_42018 = state_41888__$1;
(statearr_41948_42018[(2)] = inst_41818);

(statearr_41948_42018[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (35))){
var state_41888__$1 = state_41888;
var statearr_41949_42019 = state_41888__$1;
(statearr_41949_42019[(2)] = true);

(statearr_41949_42019[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (19))){
var inst_41791 = (state_41888[(12)]);
var inst_41797 = figwheel.client.file_reloading.expand_files(inst_41791);
var state_41888__$1 = state_41888;
var statearr_41950_42020 = state_41888__$1;
(statearr_41950_42020[(2)] = inst_41797);

(statearr_41950_42020[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (11))){
var state_41888__$1 = state_41888;
var statearr_41951_42021 = state_41888__$1;
(statearr_41951_42021[(2)] = null);

(statearr_41951_42021[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (9))){
var inst_41780 = (state_41888[(2)]);
var state_41888__$1 = state_41888;
var statearr_41952_42022 = state_41888__$1;
(statearr_41952_42022[(2)] = inst_41780);

(statearr_41952_42022[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (5))){
var inst_41750 = (state_41888[(9)]);
var inst_41751 = (state_41888[(10)]);
var inst_41753 = (inst_41751 < inst_41750);
var inst_41754 = inst_41753;
var state_41888__$1 = state_41888;
if(cljs.core.truth_(inst_41754)){
var statearr_41953_42023 = state_41888__$1;
(statearr_41953_42023[(1)] = (7));

} else {
var statearr_41954_42024 = state_41888__$1;
(statearr_41954_42024[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (14))){
var inst_41761 = (state_41888[(22)]);
var inst_41770 = cljs.core.first(inst_41761);
var inst_41771 = figwheel.client.file_reloading.eval_body(inst_41770,opts);
var inst_41772 = cljs.core.next(inst_41761);
var inst_41748 = inst_41772;
var inst_41749 = null;
var inst_41750 = (0);
var inst_41751 = (0);
var state_41888__$1 = (function (){var statearr_41955 = state_41888;
(statearr_41955[(7)] = inst_41748);

(statearr_41955[(32)] = inst_41771);

(statearr_41955[(8)] = inst_41749);

(statearr_41955[(9)] = inst_41750);

(statearr_41955[(10)] = inst_41751);

return statearr_41955;
})();
var statearr_41956_42025 = state_41888__$1;
(statearr_41956_42025[(2)] = null);

(statearr_41956_42025[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (45))){
var state_41888__$1 = state_41888;
var statearr_41957_42026 = state_41888__$1;
(statearr_41957_42026[(2)] = null);

(statearr_41957_42026[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (26))){
var inst_41805 = (state_41888[(23)]);
var inst_41807 = (state_41888[(26)]);
var inst_41809 = (state_41888[(24)]);
var inst_41801 = (state_41888[(19)]);
var inst_41804 = (state_41888[(25)]);
var inst_41824 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: loaded these files");
var inst_41826 = (function (){var all_files = inst_41801;
var res_SINGLEQUOTE_ = inst_41804;
var res = inst_41805;
var files_not_loaded = inst_41807;
var dependencies_that_loaded = inst_41809;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41805,inst_41807,inst_41809,inst_41801,inst_41804,inst_41824,state_val_41889,c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41825){
var map__41958 = p__41825;
var map__41958__$1 = ((((!((map__41958 == null)))?((((map__41958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41958.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41958):map__41958);
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41958__$1,cljs.core.cst$kw$namespace);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41958__$1,cljs.core.cst$kw$file);
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path(cljs.core.name(namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41805,inst_41807,inst_41809,inst_41801,inst_41804,inst_41824,state_val_41889,c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41827 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_41826,inst_41805);
var inst_41828 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_41827], 0));
var inst_41829 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_41828);
var inst_41830 = (function (){var all_files = inst_41801;
var res_SINGLEQUOTE_ = inst_41804;
var res = inst_41805;
var files_not_loaded = inst_41807;
var dependencies_that_loaded = inst_41809;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41805,inst_41807,inst_41809,inst_41801,inst_41804,inst_41824,inst_41826,inst_41827,inst_41828,inst_41829,state_val_41889,c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event(res);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41805,inst_41807,inst_41809,inst_41801,inst_41804,inst_41824,inst_41826,inst_41827,inst_41828,inst_41829,state_val_41889,c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41831 = setTimeout(inst_41830,(10));
var state_41888__$1 = (function (){var statearr_41960 = state_41888;
(statearr_41960[(33)] = inst_41829);

(statearr_41960[(34)] = inst_41824);

return statearr_41960;
})();
var statearr_41961_42027 = state_41888__$1;
(statearr_41961_42027[(2)] = inst_41831);

(statearr_41961_42027[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (16))){
var state_41888__$1 = state_41888;
var statearr_41962_42028 = state_41888__$1;
(statearr_41962_42028[(2)] = reload_dependents);

(statearr_41962_42028[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (38))){
var inst_41841 = (state_41888[(16)]);
var inst_41859 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_41841);
var state_41888__$1 = state_41888;
var statearr_41963_42029 = state_41888__$1;
(statearr_41963_42029[(2)] = inst_41859);

(statearr_41963_42029[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (30))){
var state_41888__$1 = state_41888;
var statearr_41964_42030 = state_41888__$1;
(statearr_41964_42030[(2)] = null);

(statearr_41964_42030[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (10))){
var inst_41761 = (state_41888[(22)]);
var inst_41763 = cljs.core.chunked_seq_QMARK_(inst_41761);
var state_41888__$1 = state_41888;
if(inst_41763){
var statearr_41965_42031 = state_41888__$1;
(statearr_41965_42031[(1)] = (13));

} else {
var statearr_41966_42032 = state_41888__$1;
(statearr_41966_42032[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (18))){
var inst_41795 = (state_41888[(2)]);
var state_41888__$1 = state_41888;
if(cljs.core.truth_(inst_41795)){
var statearr_41967_42033 = state_41888__$1;
(statearr_41967_42033[(1)] = (19));

} else {
var statearr_41968_42034 = state_41888__$1;
(statearr_41968_42034[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (42))){
var state_41888__$1 = state_41888;
var statearr_41969_42035 = state_41888__$1;
(statearr_41969_42035[(2)] = null);

(statearr_41969_42035[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (37))){
var inst_41854 = (state_41888[(2)]);
var state_41888__$1 = state_41888;
var statearr_41970_42036 = state_41888__$1;
(statearr_41970_42036[(2)] = inst_41854);

(statearr_41970_42036[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_41889 === (8))){
var inst_41748 = (state_41888[(7)]);
var inst_41761 = (state_41888[(22)]);
var inst_41761__$1 = cljs.core.seq(inst_41748);
var state_41888__$1 = (function (){var statearr_41971 = state_41888;
(statearr_41971[(22)] = inst_41761__$1);

return statearr_41971;
})();
if(inst_41761__$1){
var statearr_41972_42037 = state_41888__$1;
(statearr_41972_42037[(1)] = (10));

} else {
var statearr_41973_42038 = state_41888__$1;
(statearr_41973_42038[(1)] = (11));

}

return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__16243__auto__,c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__16244__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__16244__auto____0 = (function (){
var statearr_41977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41977[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__16244__auto__);

(statearr_41977[(1)] = (1));

return statearr_41977;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__16244__auto____1 = (function (state_41888){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_41888);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e41978){if((e41978 instanceof Object)){
var ex__16247__auto__ = e41978;
var statearr_41979_42039 = state_41888;
(statearr_41979_42039[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41888);

return cljs.core.cst$kw$recur;
} else {
throw e41978;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__42040 = state_41888;
state_41888 = G__42040;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__16244__auto__ = function(state_41888){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__16244__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__16244__auto____1.call(this,state_41888);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__16244__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__16244__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__16371__auto__ = (function (){var statearr_41980 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_41980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_41980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__,map__41733,map__41733__$1,opts,before_jsload,on_jsload,reload_dependents,map__41734,map__41734__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__16369__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42043,link){
var map__42046 = p__42043;
var map__42046__$1 = ((((!((map__42046 == null)))?((((map__42046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42046):map__42046);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42046__$1,cljs.core.cst$kw$file);
var temp__6738__auto__ = link.href;
if(cljs.core.truth_(temp__6738__auto__)){
var link_href = temp__6738__auto__;
var match = clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (link_href,temp__6738__auto__,map__42046,map__42046__$1,file){
return (function (p1__42041_SHARP_,p2__42042_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__42041_SHARP_,p2__42042_SHARP_)){
return p1__42041_SHARP_;
} else {
return false;
}
});})(link_href,temp__6738__auto__,map__42046,map__42046__$1,file))
,cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(file,"/")),cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.truncate_url(link_href),"/")))));
var match_length = cljs.core.count(match);
var file_name_length = cljs.core.count(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$link,link,cljs.core.cst$kw$link_DASH_href,link_href,cljs.core.cst$kw$match_DASH_length,match_length,cljs.core.cst$kw$current_DASH_url_DASH_length,cljs.core.count(figwheel.client.file_reloading.truncate_url(link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6738__auto__ = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__42052){
var map__42053 = p__42052;
var map__42053__$1 = ((((!((map__42053 == null)))?((((map__42053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42053):map__42053);
var match_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42053__$1,cljs.core.cst$kw$match_DASH_length);
var current_url_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42053__$1,cljs.core.cst$kw$current_DASH_url_DASH_length);
return (current_url_length - match_length);
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__42048_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_(f_data,p1__42048_SHARP_);
}),figwheel.client.file_reloading.current_links())));
if(cljs.core.truth_(temp__6738__auto__)){
var res = temp__6738__auto__;
return cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster(url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster(url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__42055_SHARP_,p2__42056_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42055_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2__42056_SHARP_,key),p2__42056_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var G__42059 = ((function (parent){
return (function (){
parent.removeChild(orig_link);

return (finished_fn.cljs$core$IFn$_invoke$arity$0 ? finished_fn.cljs$core$IFn$_invoke$arity$0() : finished_fn.call(null));
});})(parent))
;
var G__42060 = (300);
return setTimeout(G__42059,G__42060);
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = (function (){var G__42061 = goog.async.Deferred.succeed();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42061) : cljs.core.atom.call(null,G__42061));
})();
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__6736__auto__ = figwheel.client.file_reloading.get_correct_link(f_data);
if(cljs.core.truth_(temp__6736__auto__)){
var link = temp__6736__auto__;
return figwheel.client.file_reloading.add_link_to_document(link,figwheel.client.file_reloading.clone_link(link,link.href),((function (link,temp__6736__auto__){
return (function (){
var G__42063 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f_data,cljs.core.cst$kw$loaded,true);
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__42063) : fin.call(null,G__42063));
});})(link,temp__6736__auto__))
);
} else {
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(f_data) : fin.call(null,f_data));
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD(figwheel.client.utils.mapConcatD(deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_42064 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$loaded,f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event(loaded_f_datas_42064);

if(cljs.core.fn_QMARK_(on_cssload)){
(on_cssload.cljs$core$IFn$_invoke$arity$1 ? on_cssload.cljs$core$IFn$_invoke$arity$1(loaded_f_datas_42064) : on_cssload.call(null,loaded_f_datas_42064));
} else {
}

return (fin.cljs$core$IFn$_invoke$arity$0 ? fin.cljs$core$IFn$_invoke$arity$0() : fin.call(null));
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42065,p__42066){
var map__42071 = p__42065;
var map__42071__$1 = ((((!((map__42071 == null)))?((((map__42071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42071):map__42071);
var on_cssload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42071__$1,cljs.core.cst$kw$on_DASH_cssload);
var map__42072 = p__42066;
var map__42072__$1 = ((((!((map__42072 == null)))?((((map__42072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42072.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42072):map__42072);
var files_msg = map__42072__$1;
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42072__$1,cljs.core.cst$kw$files);
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())){
var temp__6738__auto__ = cljs.core.not_empty(figwheel.client.file_reloading.distinctify(cljs.core.cst$kw$file,files));
if(cljs.core.truth_(temp__6738__auto__)){
var f_datas = temp__6738__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});
