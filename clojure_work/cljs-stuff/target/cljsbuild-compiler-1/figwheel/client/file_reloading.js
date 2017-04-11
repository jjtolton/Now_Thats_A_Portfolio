// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = (function (){var G__20607 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20607) : cljs.core.atom.call(null,G__20607));
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
var or__6409__auto__ = (cljs.core.map_QMARK_(m)) && (typeof cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof cljs.core.cst$kw$file.cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(m),cljs.core.cst$kw$namespace));
if(or__6409__auto__){
return or__6409__auto__;
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
var or__6409__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.some(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__20610_SHARP_){
return cljs.core.not(figwheel.client.file_reloading.immutable_ns_QMARK_(p1__20610_SHARP_));
}),(function (){var G__20612 = (goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path(ns)]);
return goog.object.getKeys(G__20612);
})()));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = (function (){var G__20613 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pathToName,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$dependents,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20613) : cljs.core.atom.call(null,G__20613));
})();
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pathToName,path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([cljs.core.PersistentHashSet.fromArray([name], true)], 0));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = (function (){var G__20618 = goog.dependencies_.nameToPath;
var G__20619 = ((function (G__20618){
return (function (v,k,o){
return goog.string.startsWith(v,"../");
});})(G__20618))
;
return goog.object.filter(G__20618,G__20619);
})();
var G__20620 = nameToPath;
var G__20621 = ((function (G__20620,nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_(v,k);
});})(G__20620,nameToPath))
;
return goog.object.forEach(G__20620,G__20621);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.dependency_data) : cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$pathToName,path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$dependents,ns], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([cljs.core.PersistentHashSet.fromArray([parent_ns], true)], 0));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = (function (){var G__20632 = goog.dependencies_.requires;
var G__20633 = ((function (G__20632){
return (function (v,k,o){
return goog.string.startsWith(k,"../");
});})(G__20632))
;
return goog.object.filter(G__20632,G__20633);
})();
var G__20634 = requires;
var G__20635 = ((function (G__20634,requires){
return (function (v,k,_){
var G__20636 = v;
var G__20637 = ((function (G__20636,G__20634,requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__20638 = cljs.core.seq(figwheel.client.file_reloading.path__GT_name(k));
var chunk__20639 = null;
var count__20640 = (0);
var i__20641 = (0);
while(true){
if((i__20641 < count__20640)){
var n = chunk__20639.cljs$core$IIndexed$_nth$arity$2(null,i__20641);
figwheel.client.file_reloading.name_to_parent_BANG_(k_SINGLEQUOTE_,n);

var G__20642 = seq__20638;
var G__20643 = chunk__20639;
var G__20644 = count__20640;
var G__20645 = (i__20641 + (1));
seq__20638 = G__20642;
chunk__20639 = G__20643;
count__20640 = G__20644;
i__20641 = G__20645;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__20638);
if(temp__4657__auto__){
var seq__20638__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20638__$1)){
var c__7220__auto__ = cljs.core.chunk_first(seq__20638__$1);
var G__20646 = cljs.core.chunk_rest(seq__20638__$1);
var G__20647 = c__7220__auto__;
var G__20648 = cljs.core.count(c__7220__auto__);
var G__20649 = (0);
seq__20638 = G__20646;
chunk__20639 = G__20647;
count__20640 = G__20648;
i__20641 = G__20649;
continue;
} else {
var n = cljs.core.first(seq__20638__$1);
figwheel.client.file_reloading.name_to_parent_BANG_(k_SINGLEQUOTE_,n);

var G__20650 = cljs.core.next(seq__20638__$1);
var G__20651 = null;
var G__20652 = (0);
var G__20653 = (0);
seq__20638 = G__20650;
chunk__20639 = G__20651;
count__20640 = G__20652;
i__20641 = G__20653;
continue;
}
} else {
return null;
}
}
break;
}
});})(G__20636,G__20634,requires))
;
return goog.object.forEach(G__20636,G__20637);
});})(G__20634,requires))
;
return goog.object.forEach(G__20634,G__20635);
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
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3(deps,(0),(function (){var G__20730 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20730) : cljs.core.atom.call(null,G__20730));
})());
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([deps], 0));

var seq__20731_20743 = cljs.core.seq(deps);
var chunk__20732_20744 = null;
var count__20733_20745 = (0);
var i__20734_20746 = (0);
while(true){
if((i__20734_20746 < count__20733_20745)){
var dep_20747 = chunk__20732_20744.cljs$core$IIndexed$_nth$arity$2(null,i__20734_20746);
topo_sort_helper_STAR_(dep_20747,(depth + (1)),state);

var G__20748 = seq__20731_20743;
var G__20749 = chunk__20732_20744;
var G__20750 = count__20733_20745;
var G__20751 = (i__20734_20746 + (1));
seq__20731_20743 = G__20748;
chunk__20732_20744 = G__20749;
count__20733_20745 = G__20750;
i__20734_20746 = G__20751;
continue;
} else {
var temp__4657__auto___20752 = cljs.core.seq(seq__20731_20743);
if(temp__4657__auto___20752){
var seq__20731_20753__$1 = temp__4657__auto___20752;
if(cljs.core.chunked_seq_QMARK_(seq__20731_20753__$1)){
var c__7220__auto___20754 = cljs.core.chunk_first(seq__20731_20753__$1);
var G__20755 = cljs.core.chunk_rest(seq__20731_20753__$1);
var G__20756 = c__7220__auto___20754;
var G__20757 = cljs.core.count(c__7220__auto___20754);
var G__20758 = (0);
seq__20731_20743 = G__20755;
chunk__20732_20744 = G__20756;
count__20733_20745 = G__20757;
i__20734_20746 = G__20758;
continue;
} else {
var dep_20759 = cljs.core.first(seq__20731_20753__$1);
topo_sort_helper_STAR_(dep_20759,(depth + (1)),state);

var G__20760 = cljs.core.next(seq__20731_20753__$1);
var G__20761 = null;
var G__20762 = (0);
var G__20763 = (0);
seq__20731_20743 = G__20760;
chunk__20732_20744 = G__20761;
count__20733_20745 = G__20762;
i__20734_20746 = G__20763;
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
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__20735){
var vec__20740 = p__20735;
var seq__20741 = cljs.core.seq(vec__20740);
var first__20742 = cljs.core.first(seq__20741);
var seq__20741__$1 = cljs.core.next(seq__20741);
var x = first__20742;
var xs = seq__20741__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons(x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__20740,seq__20741,first__20742,seq__20741__$1,x,xs,get_deps__$1){
return (function (p1__20654_SHARP_){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(p1__20654_SHARP_,x);
});})(vec__20740,seq__20741,first__20742,seq__20741__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort(figwheel.client.file_reloading.get_requires);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__20765 = cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null));
return (topo_sort_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? topo_sort_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(G__20765) : topo_sort_SINGLEQUOTE_.call(null,G__20765));
})());
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort(figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var G__20767 = cljs.core.set(nss);
return (topo_sort_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 ? topo_sort_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(G__20767) : topo_sort_SINGLEQUOTE_.call(null,G__20767));
})())));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path(ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

var G__20770 = goog.dependencies_.written;
var G__20771 = [cljs.core.str(goog.basePath),cljs.core.str(path)].join('');
return goog.object.remove(G__20770,G__20771);
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path(ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__20784 = cljs.core.seq(provides);
var chunk__20785 = null;
var count__20786 = (0);
var i__20787 = (0);
while(true){
if((i__20787 < count__20786)){
var prov = chunk__20785.cljs$core$IIndexed$_nth$arity$2(null,i__20787);
figwheel.client.file_reloading.path_to_name_BANG_(path,prov);

var seq__20788_20796 = cljs.core.seq(requires);
var chunk__20789_20797 = null;
var count__20790_20798 = (0);
var i__20791_20799 = (0);
while(true){
if((i__20791_20799 < count__20790_20798)){
var req_20800 = chunk__20789_20797.cljs$core$IIndexed$_nth$arity$2(null,i__20791_20799);
figwheel.client.file_reloading.name_to_parent_BANG_(req_20800,prov);

var G__20801 = seq__20788_20796;
var G__20802 = chunk__20789_20797;
var G__20803 = count__20790_20798;
var G__20804 = (i__20791_20799 + (1));
seq__20788_20796 = G__20801;
chunk__20789_20797 = G__20802;
count__20790_20798 = G__20803;
i__20791_20799 = G__20804;
continue;
} else {
var temp__4657__auto___20805 = cljs.core.seq(seq__20788_20796);
if(temp__4657__auto___20805){
var seq__20788_20806__$1 = temp__4657__auto___20805;
if(cljs.core.chunked_seq_QMARK_(seq__20788_20806__$1)){
var c__7220__auto___20807 = cljs.core.chunk_first(seq__20788_20806__$1);
var G__20808 = cljs.core.chunk_rest(seq__20788_20806__$1);
var G__20809 = c__7220__auto___20807;
var G__20810 = cljs.core.count(c__7220__auto___20807);
var G__20811 = (0);
seq__20788_20796 = G__20808;
chunk__20789_20797 = G__20809;
count__20790_20798 = G__20810;
i__20791_20799 = G__20811;
continue;
} else {
var req_20812 = cljs.core.first(seq__20788_20806__$1);
figwheel.client.file_reloading.name_to_parent_BANG_(req_20812,prov);

var G__20813 = cljs.core.next(seq__20788_20806__$1);
var G__20814 = null;
var G__20815 = (0);
var G__20816 = (0);
seq__20788_20796 = G__20813;
chunk__20789_20797 = G__20814;
count__20790_20798 = G__20815;
i__20791_20799 = G__20816;
continue;
}
} else {
}
}
break;
}

var G__20817 = seq__20784;
var G__20818 = chunk__20785;
var G__20819 = count__20786;
var G__20820 = (i__20787 + (1));
seq__20784 = G__20817;
chunk__20785 = G__20818;
count__20786 = G__20819;
i__20787 = G__20820;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__20784);
if(temp__4657__auto__){
var seq__20784__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20784__$1)){
var c__7220__auto__ = cljs.core.chunk_first(seq__20784__$1);
var G__20821 = cljs.core.chunk_rest(seq__20784__$1);
var G__20822 = c__7220__auto__;
var G__20823 = cljs.core.count(c__7220__auto__);
var G__20824 = (0);
seq__20784 = G__20821;
chunk__20785 = G__20822;
count__20786 = G__20823;
i__20787 = G__20824;
continue;
} else {
var prov = cljs.core.first(seq__20784__$1);
figwheel.client.file_reloading.path_to_name_BANG_(path,prov);

var seq__20792_20825 = cljs.core.seq(requires);
var chunk__20793_20826 = null;
var count__20794_20827 = (0);
var i__20795_20828 = (0);
while(true){
if((i__20795_20828 < count__20794_20827)){
var req_20829 = chunk__20793_20826.cljs$core$IIndexed$_nth$arity$2(null,i__20795_20828);
figwheel.client.file_reloading.name_to_parent_BANG_(req_20829,prov);

var G__20830 = seq__20792_20825;
var G__20831 = chunk__20793_20826;
var G__20832 = count__20794_20827;
var G__20833 = (i__20795_20828 + (1));
seq__20792_20825 = G__20830;
chunk__20793_20826 = G__20831;
count__20794_20827 = G__20832;
i__20795_20828 = G__20833;
continue;
} else {
var temp__4657__auto___20834__$1 = cljs.core.seq(seq__20792_20825);
if(temp__4657__auto___20834__$1){
var seq__20792_20835__$1 = temp__4657__auto___20834__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20792_20835__$1)){
var c__7220__auto___20836 = cljs.core.chunk_first(seq__20792_20835__$1);
var G__20837 = cljs.core.chunk_rest(seq__20792_20835__$1);
var G__20838 = c__7220__auto___20836;
var G__20839 = cljs.core.count(c__7220__auto___20836);
var G__20840 = (0);
seq__20792_20825 = G__20837;
chunk__20793_20826 = G__20838;
count__20794_20827 = G__20839;
i__20795_20828 = G__20840;
continue;
} else {
var req_20841 = cljs.core.first(seq__20792_20835__$1);
figwheel.client.file_reloading.name_to_parent_BANG_(req_20841,prov);

var G__20842 = cljs.core.next(seq__20792_20835__$1);
var G__20843 = null;
var G__20844 = (0);
var G__20845 = (0);
seq__20792_20825 = G__20842;
chunk__20793_20826 = G__20843;
count__20794_20827 = G__20844;
i__20795_20828 = G__20845;
continue;
}
} else {
}
}
break;
}

var G__20846 = cljs.core.next(seq__20784__$1);
var G__20847 = null;
var G__20848 = (0);
var G__20849 = (0);
seq__20784 = G__20846;
chunk__20785 = G__20847;
count__20786 = G__20848;
i__20787 = G__20849;
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
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(reload,"reload-all")){
var seq__20854_20858 = cljs.core.seq(figwheel.client.file_reloading.get_all_dependencies(src));
var chunk__20855_20859 = null;
var count__20856_20860 = (0);
var i__20857_20861 = (0);
while(true){
if((i__20857_20861 < count__20856_20860)){
var ns_20862 = chunk__20855_20859.cljs$core$IIndexed$_nth$arity$2(null,i__20857_20861);
figwheel.client.file_reloading.unprovide_BANG_(ns_20862);

var G__20863 = seq__20854_20858;
var G__20864 = chunk__20855_20859;
var G__20865 = count__20856_20860;
var G__20866 = (i__20857_20861 + (1));
seq__20854_20858 = G__20863;
chunk__20855_20859 = G__20864;
count__20856_20860 = G__20865;
i__20857_20861 = G__20866;
continue;
} else {
var temp__4657__auto___20867 = cljs.core.seq(seq__20854_20858);
if(temp__4657__auto___20867){
var seq__20854_20868__$1 = temp__4657__auto___20867;
if(cljs.core.chunked_seq_QMARK_(seq__20854_20868__$1)){
var c__7220__auto___20869 = cljs.core.chunk_first(seq__20854_20868__$1);
var G__20870 = cljs.core.chunk_rest(seq__20854_20868__$1);
var G__20871 = c__7220__auto___20869;
var G__20872 = cljs.core.count(c__7220__auto___20869);
var G__20873 = (0);
seq__20854_20858 = G__20870;
chunk__20855_20859 = G__20871;
count__20856_20860 = G__20872;
i__20857_20861 = G__20873;
continue;
} else {
var ns_20874 = cljs.core.first(seq__20854_20868__$1);
figwheel.client.file_reloading.unprovide_BANG_(ns_20874);

var G__20875 = cljs.core.next(seq__20854_20868__$1);
var G__20876 = null;
var G__20877 = (0);
var G__20878 = (0);
seq__20854_20858 = G__20875;
chunk__20855_20859 = G__20876;
count__20856_20860 = G__20877;
i__20857_20861 = G__20878;
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
goog.require_figwheel_backup_ = (function (){var or__6409__auto__ = goog.require__;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
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
var G__20879__delegate = function (args){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.addDependency_figwheel_backup_,args);
};
var G__20879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20880__i = 0, G__20880__a = new Array(arguments.length -  0);
while (G__20880__i < G__20880__a.length) {G__20880__a[G__20880__i] = arguments[G__20880__i + 0]; ++G__20880__i;}
  args = new cljs.core.IndexedSeq(G__20880__a,0);
} 
return G__20879__delegate.call(this,args);};
G__20879.cljs$lang$maxFixedArity = 0;
G__20879.cljs$lang$applyTo = (function (arglist__20881){
var args = cljs.core.seq(arglist__20881);
return G__20879__delegate(args);
});
G__20879.cljs$core$IFn$_invoke$arity$variadic = G__20879__delegate;
return G__20879;
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
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base();

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = (function (){var G__20884 = figwheel.client.file_reloading.add_cache_buster(request_url);
var G__20885 = ({"cleanupWhenDone": true});
return goog.net.jsloader.load(G__20884,G__20885);
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__20886 = cljs.core._EQ_;
var expr__20887 = figwheel.client.utils.host_env_QMARK_();
if(cljs.core.truth_((function (){var G__20889 = cljs.core.cst$kw$node;
var G__20890 = expr__20887;
return (pred__20886.cljs$core$IFn$_invoke$arity$2 ? pred__20886.cljs$core$IFn$_invoke$arity$2(G__20889,G__20890) : pred__20886.call(null,G__20889,G__20890));
})())){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = (function (){var G__20891 = require.cache;
var G__20892 = ((function (G__20891,node_path_lib,util_pattern,pred__20886,expr__20887){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(G__20891,node_path_lib,util_pattern,pred__20886,expr__20887))
;
return goog.object.findKey(G__20891,G__20892);
})();
var parts = cljs.core.pop(cljs.core.pop(clojure.string.split.cljs$core$IFn$_invoke$arity$2(util_path,/[\/\\]/)));
var root_path = clojure.string.join.cljs$core$IFn$_invoke$arity$2(node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__20886,expr__20887){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
var G__20893_20905 = require.cache;
var G__20894_20906 = cache_path;
goog.object.remove(G__20893_20905,G__20894_20906);

var G__20895 = (function (){try{return require(cache_path);
}catch (e20896){if((e20896 instanceof Error)){
var e = e20896;
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,e.stack);

return false;
} else {
throw e20896;

}
}})();
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__20895) : callback.call(null,G__20895));
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__20886,expr__20887))
} else {
if(cljs.core.truth_((function (){var G__20897 = cljs.core.cst$kw$html;
var G__20898 = expr__20887;
return (pred__20886.cljs$core$IFn$_invoke$arity$2 ? pred__20886.cljs$core$IFn$_invoke$arity$2(G__20897,G__20898) : pred__20886.call(null,G__20897,G__20898));
})())){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_((function (){var G__20899 = cljs.core.cst$kw$react_DASH_native;
var G__20900 = expr__20887;
return (pred__20886.cljs$core$IFn$_invoke$arity$2 ? pred__20886.cljs$core$IFn$_invoke$arity$2(G__20899,G__20900) : pred__20886.call(null,G__20899,G__20900));
})())){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_((function (){var G__20901 = cljs.core.cst$kw$worker;
var G__20902 = expr__20887;
return (pred__20886.cljs$core$IFn$_invoke$arity$2 ? pred__20886.cljs$core$IFn$_invoke$arity$2(G__20901,G__20902) : pred__20886.call(null,G__20901,G__20902));
})())){
return ((function (pred__20886,expr__20887){
return (function (request_url,callback){

var G__20903 = (function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster(request_url));

return true;
}catch (e20904){if((e20904 instanceof Error)){
var e = e20904;
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,e.stack);

return false;
} else {
throw e20904;

}
}})();
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__20903) : callback.call(null,G__20903));
});
;})(pred__20886,expr__20887))
} else {
return ((function (pred__20886,expr__20887){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__20886,expr__20887))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__20907,callback){
var map__20912 = p__20907;
var map__20912__$1 = ((((!((map__20912 == null)))?((((map__20912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20912):map__20912);
var file_msg = map__20912__$1;
var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20912__$1,cljs.core.cst$kw$request_DASH_url);

figwheel.client.utils.debug_prn([cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

var G__20914 = request_url;
var G__20915 = ((function (G__20914,map__20912,map__20912__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn([cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file_msg,cljs.core.cst$kw$loaded_DASH_file,true)], null));
} else {
figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(G__20914,map__20912,map__20912__$1,file_msg,request_url))
;
return (figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 ? figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2(G__20914,G__20915) : figwheel.client.file_reloading.reload_file_STAR_.call(null,G__20914,G__20915));
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = (function (){var G__20916 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20916) : cljs.core.atom.call(null,G__20916));
})();
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = (function (){var G__20917 = cljs.core.PersistentVector.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20917) : cljs.core.atom.call(null,G__20917));
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__14088__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto__){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto__){
return (function (state_20940){
var state_val_20941 = (state_20940[(1)]);
if((state_val_20941 === (7))){
var inst_20936 = (state_20940[(2)]);
var state_20940__$1 = state_20940;
var statearr_20942_20962 = state_20940__$1;
(statearr_20942_20962[(2)] = inst_20936);

(statearr_20942_20962[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20941 === (1))){
var state_20940__$1 = state_20940;
var statearr_20943_20963 = state_20940__$1;
(statearr_20943_20963[(2)] = null);

(statearr_20943_20963[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20941 === (4))){
var inst_20920 = (state_20940[(7)]);
var inst_20920__$1 = (state_20940[(2)]);
var state_20940__$1 = (function (){var statearr_20944 = state_20940;
(statearr_20944[(7)] = inst_20920__$1);

return statearr_20944;
})();
if(cljs.core.truth_(inst_20920__$1)){
var statearr_20945_20964 = state_20940__$1;
(statearr_20945_20964[(1)] = (5));

} else {
var statearr_20946_20965 = state_20940__$1;
(statearr_20946_20965[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_20941 === (6))){
var state_20940__$1 = state_20940;
var statearr_20947_20966 = state_20940__$1;
(statearr_20947_20966[(2)] = null);

(statearr_20947_20966[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20941 === (3))){
var inst_20938 = (state_20940[(2)]);
var state_20940__$1 = state_20940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20940__$1,inst_20938);
} else {
if((state_val_20941 === (2))){
var state_20940__$1 = state_20940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20940__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_20941 === (11))){
var inst_20932 = (state_20940[(2)]);
var state_20940__$1 = (function (){var statearr_20948 = state_20940;
(statearr_20948[(8)] = inst_20932);

return statearr_20948;
})();
var statearr_20949_20967 = state_20940__$1;
(statearr_20949_20967[(2)] = null);

(statearr_20949_20967[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20941 === (9))){
var inst_20924 = (state_20940[(9)]);
var inst_20926 = (state_20940[(10)]);
var inst_20928 = (inst_20926.cljs$core$IFn$_invoke$arity$1 ? inst_20926.cljs$core$IFn$_invoke$arity$1(inst_20924) : inst_20926.call(null,inst_20924));
var state_20940__$1 = state_20940;
var statearr_20950_20968 = state_20940__$1;
(statearr_20950_20968[(2)] = inst_20928);

(statearr_20950_20968[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20941 === (5))){
var inst_20920 = (state_20940[(7)]);
var inst_20922 = figwheel.client.file_reloading.blocking_load(inst_20920);
var state_20940__$1 = state_20940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20940__$1,(8),inst_20922);
} else {
if((state_val_20941 === (10))){
var inst_20924 = (state_20940[(9)]);
var inst_20930 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_20924);
var state_20940__$1 = state_20940;
var statearr_20951_20969 = state_20940__$1;
(statearr_20951_20969[(2)] = inst_20930);

(statearr_20951_20969[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_20941 === (8))){
var inst_20920 = (state_20940[(7)]);
var inst_20926 = (state_20940[(10)]);
var inst_20924 = (state_20940[(2)]);
var inst_20925 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.on_load_callbacks) : cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks));
var inst_20926__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20925,inst_20920);
var state_20940__$1 = (function (){var statearr_20952 = state_20940;
(statearr_20952[(9)] = inst_20924);

(statearr_20952[(10)] = inst_20926__$1);

return statearr_20952;
})();
if(cljs.core.truth_(inst_20926__$1)){
var statearr_20953_20970 = state_20940__$1;
(statearr_20953_20970[(1)] = (9));

} else {
var statearr_20954_20971 = state_20940__$1;
(statearr_20954_20971[(1)] = (10));

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
});})(c__14088__auto__))
;
return ((function (switch__13964__auto__,c__14088__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__13965__auto__ = null;
var figwheel$client$file_reloading$state_machine__13965__auto____0 = (function (){
var statearr_20958 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20958[(0)] = figwheel$client$file_reloading$state_machine__13965__auto__);

(statearr_20958[(1)] = (1));

return statearr_20958;
});
var figwheel$client$file_reloading$state_machine__13965__auto____1 = (function (state_20940){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_20940);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e20959){if((e20959 instanceof Object)){
var ex__13968__auto__ = e20959;
var statearr_20960_20972 = state_20940;
(statearr_20960_20972[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20940);

return cljs.core.cst$kw$recur;
} else {
throw e20959;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__20973 = state_20940;
state_20940 = G__20973;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__13965__auto__ = function(state_20940){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__13965__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__13965__auto____1.call(this,state_20940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__13965__auto____0;
figwheel$client$file_reloading$state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__13965__auto____1;
return figwheel$client$file_reloading$state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto__))
})();
var state__14090__auto__ = (function (){var statearr_20961 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_20961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto__);

return statearr_20961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto__))
);

return c__14088__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__20974,callback){
var map__20977 = p__20974;
var map__20977__$1 = ((((!((map__20977 == null)))?((((map__20977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20977):map__20977);
var file_msg = map__20977__$1;
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20977__$1,cljs.core.cst$kw$namespace);
var request_url = figwheel.client.file_reloading.resolve_ns(namespace);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__20977,map__20977__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([file_msg,cljs.core.select_keys(file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$loaded_DASH_file], null))], 0))], null));
});})(request_url,map__20977,map__20977__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require(cljs.core.name(namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__20979){
var map__20982 = p__20979;
var map__20982__$1 = ((((!((map__20982 == null)))?((((map__20982.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20982.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20982):map__20982);
var file_msg = map__20982__$1;
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20982__$1,cljs.core.cst$kw$namespace);
var meta_pragmas = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.figwheel_meta_pragmas) : cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)),cljs.core.name(namespace));
return cljs.core.cst$kw$figwheel_DASH_no_DASH_load.cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__20984){
var map__20987 = p__20984;
var map__20987__$1 = ((((!((map__20987 == null)))?((((map__20987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20987):map__20987);
var file_msg = map__20987__$1;
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20987__$1,cljs.core.cst$kw$namespace);

var meta_pragmas = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.figwheel_meta_pragmas) : cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)),cljs.core.name(namespace));
var and__6397__auto__ = cljs.core.not(figwheel.client.file_reloading.figwheel_no_load_QMARK_(file_msg));
if(and__6397__auto__){
var or__6409__auto__ = cljs.core.cst$kw$figwheel_DASH_always.cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = cljs.core.cst$kw$figwheel_DASH_load.cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_(cljs.core.name(namespace));
}
}
} else {
return and__6397__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__20989,callback){
var map__20992 = p__20989;
var map__20992__$1 = ((((!((map__20992 == null)))?((((map__20992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20992):map__20992);
var file_msg = map__20992__$1;
var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20992__$1,cljs.core.cst$kw$request_DASH_url);
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20992__$1,cljs.core.cst$kw$namespace);

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_(file_msg))){
return figwheel.client.file_reloading.require_with_callback(file_msg,callback);
} else {
figwheel.client.utils.debug_prn([cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

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
var c__14088__auto___21096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto___21096,out){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto___21096,out){
return (function (state_21078){
var state_val_21079 = (state_21078[(1)]);
if((state_val_21079 === (1))){
var inst_21052 = cljs.core.seq(files);
var inst_21053 = cljs.core.first(inst_21052);
var inst_21054 = cljs.core.next(inst_21052);
var inst_21055 = files;
var state_21078__$1 = (function (){var statearr_21080 = state_21078;
(statearr_21080[(7)] = inst_21054);

(statearr_21080[(8)] = inst_21055);

(statearr_21080[(9)] = inst_21053);

return statearr_21080;
})();
var statearr_21081_21097 = state_21078__$1;
(statearr_21081_21097[(2)] = null);

(statearr_21081_21097[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21079 === (2))){
var inst_21061 = (state_21078[(10)]);
var inst_21055 = (state_21078[(8)]);
var inst_21060 = cljs.core.seq(inst_21055);
var inst_21061__$1 = cljs.core.first(inst_21060);
var inst_21062 = cljs.core.next(inst_21060);
var inst_21063 = (inst_21061__$1 == null);
var inst_21064 = cljs.core.not(inst_21063);
var state_21078__$1 = (function (){var statearr_21082 = state_21078;
(statearr_21082[(10)] = inst_21061__$1);

(statearr_21082[(11)] = inst_21062);

return statearr_21082;
})();
if(inst_21064){
var statearr_21083_21098 = state_21078__$1;
(statearr_21083_21098[(1)] = (4));

} else {
var statearr_21084_21099 = state_21078__$1;
(statearr_21084_21099[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21079 === (3))){
var inst_21076 = (state_21078[(2)]);
var state_21078__$1 = state_21078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21078__$1,inst_21076);
} else {
if((state_val_21079 === (4))){
var inst_21061 = (state_21078[(10)]);
var inst_21066 = figwheel.client.file_reloading.reload_js_file(inst_21061);
var state_21078__$1 = state_21078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21078__$1,(7),inst_21066);
} else {
if((state_val_21079 === (5))){
var inst_21072 = cljs.core.async.close_BANG_(out);
var state_21078__$1 = state_21078;
var statearr_21085_21100 = state_21078__$1;
(statearr_21085_21100[(2)] = inst_21072);

(statearr_21085_21100[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21079 === (6))){
var inst_21074 = (state_21078[(2)]);
var state_21078__$1 = state_21078;
var statearr_21086_21101 = state_21078__$1;
(statearr_21086_21101[(2)] = inst_21074);

(statearr_21086_21101[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21079 === (7))){
var inst_21062 = (state_21078[(11)]);
var inst_21068 = (state_21078[(2)]);
var inst_21069 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,inst_21068);
var inst_21055 = inst_21062;
var state_21078__$1 = (function (){var statearr_21087 = state_21078;
(statearr_21087[(8)] = inst_21055);

(statearr_21087[(12)] = inst_21069);

return statearr_21087;
})();
var statearr_21088_21102 = state_21078__$1;
(statearr_21088_21102[(2)] = null);

(statearr_21088_21102[(1)] = (2));


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
});})(c__14088__auto___21096,out))
;
return ((function (switch__13964__auto__,c__14088__auto___21096,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__13965__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__13965__auto____0 = (function (){
var statearr_21092 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21092[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__13965__auto__);

(statearr_21092[(1)] = (1));

return statearr_21092;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__13965__auto____1 = (function (state_21078){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_21078);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e21093){if((e21093 instanceof Object)){
var ex__13968__auto__ = e21093;
var statearr_21094_21103 = state_21078;
(statearr_21094_21103[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21078);

return cljs.core.cst$kw$recur;
} else {
throw e21093;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__21104 = state_21078;
state_21078 = G__21104;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__13965__auto__ = function(state_21078){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__13965__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__13965__auto____1.call(this,state_21078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__13965__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__13965__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto___21096,out))
})();
var state__14090__auto__ = (function (){var statearr_21095 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_21095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto___21096);

return statearr_21095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto___21096,out))
);


return cljs.core.async.into(cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__21105,opts){
var map__21109 = p__21105;
var map__21109__$1 = ((((!((map__21109 == null)))?((((map__21109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21109):map__21109);
var eval_body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21109__$1,cljs.core.cst$kw$eval_DASH_body);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21109__$1,cljs.core.cst$kw$file);
if(cljs.core.truth_((function (){var and__6397__auto__ = eval_body__$1;
if(cljs.core.truth_(and__6397__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__6397__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn([cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper(code,opts);
}catch (e21111){var e = e21111;
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$namespace,files));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.re_matches,/figwheel\.connect.*/),cljs.core.cst$kw$namespace),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (deps){
return (function (p1__21112_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(p1__21112_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
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
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21121){
var vec__21122 = p__21121;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21122,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21122,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$namespace,k,cljs.core.cst$kw$type,cljs.core.cst$kw$namespace], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__21125){
var vec__21126 = p__21125;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21126,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21126,(1),null);
return cljs.core.cst$kw$figwheel_DASH_always.cljs$core$IFn$_invoke$arity$1(v);
}),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.figwheel_meta_pragmas) : cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas))));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__21132,p__21133){
var map__21381 = p__21132;
var map__21381__$1 = ((((!((map__21381 == null)))?((((map__21381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21381):map__21381);
var opts = map__21381__$1;
var before_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21381__$1,cljs.core.cst$kw$before_DASH_jsload);
var on_jsload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21381__$1,cljs.core.cst$kw$on_DASH_jsload);
var reload_dependents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21381__$1,cljs.core.cst$kw$reload_DASH_dependents);
var map__21382 = p__21133;
var map__21382__$1 = ((((!((map__21382 == null)))?((((map__21382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21382):map__21382);
var msg = map__21382__$1;
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382__$1,cljs.core.cst$kw$files);
var figwheel_meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382__$1,cljs.core.cst$kw$figwheel_DASH_meta);
var recompile_dependents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382__$1,cljs.core.cst$kw$recompile_DASH_dependents);
if(cljs.core.empty_QMARK_(figwheel_meta)){
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta) : cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta));
}

var c__14088__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_21535){
var state_val_21536 = (state_21535[(1)]);
if((state_val_21536 === (7))){
var inst_21398 = (state_21535[(7)]);
var inst_21399 = (state_21535[(8)]);
var inst_21397 = (state_21535[(9)]);
var inst_21396 = (state_21535[(10)]);
var inst_21404 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_21397,inst_21399);
var inst_21405 = figwheel.client.file_reloading.eval_body(inst_21404,opts);
var inst_21406 = (inst_21399 + (1));
var tmp21537 = inst_21398;
var tmp21538 = inst_21397;
var tmp21539 = inst_21396;
var inst_21396__$1 = tmp21539;
var inst_21397__$1 = tmp21538;
var inst_21398__$1 = tmp21537;
var inst_21399__$1 = inst_21406;
var state_21535__$1 = (function (){var statearr_21540 = state_21535;
(statearr_21540[(7)] = inst_21398__$1);

(statearr_21540[(8)] = inst_21399__$1);

(statearr_21540[(9)] = inst_21397__$1);

(statearr_21540[(11)] = inst_21405);

(statearr_21540[(10)] = inst_21396__$1);

return statearr_21540;
})();
var statearr_21541_21628 = state_21535__$1;
(statearr_21541_21628[(2)] = null);

(statearr_21541_21628[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (20))){
var inst_21439 = (state_21535[(12)]);
var inst_21447 = figwheel.client.file_reloading.sort_files(inst_21439);
var state_21535__$1 = state_21535;
var statearr_21542_21629 = state_21535__$1;
(statearr_21542_21629[(2)] = inst_21447);

(statearr_21542_21629[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (27))){
var state_21535__$1 = state_21535;
var statearr_21543_21630 = state_21535__$1;
(statearr_21543_21630[(2)] = null);

(statearr_21543_21630[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (1))){
var inst_21388 = (state_21535[(13)]);
var inst_21385 = (before_jsload.cljs$core$IFn$_invoke$arity$1 ? before_jsload.cljs$core$IFn$_invoke$arity$1(files) : before_jsload.call(null,files));
var inst_21386 = figwheel.client.file_reloading.before_jsload_custom_event(files);
var inst_21387 = (function (){return ((function (inst_21388,inst_21385,inst_21386,state_val_21536,c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21129_SHARP_){
return cljs.core.cst$kw$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__21129_SHARP_);
});
;})(inst_21388,inst_21385,inst_21386,state_val_21536,c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21388__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_21387,files);
var inst_21389 = cljs.core.not_empty(inst_21388__$1);
var state_21535__$1 = (function (){var statearr_21544 = state_21535;
(statearr_21544[(14)] = inst_21386);

(statearr_21544[(15)] = inst_21385);

(statearr_21544[(13)] = inst_21388__$1);

return statearr_21544;
})();
if(cljs.core.truth_(inst_21389)){
var statearr_21545_21631 = state_21535__$1;
(statearr_21545_21631[(1)] = (2));

} else {
var statearr_21546_21632 = state_21535__$1;
(statearr_21546_21632[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (24))){
var state_21535__$1 = state_21535;
var statearr_21547_21633 = state_21535__$1;
(statearr_21547_21633[(2)] = null);

(statearr_21547_21633[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (39))){
var inst_21489 = (state_21535[(16)]);
var state_21535__$1 = state_21535;
var statearr_21548_21634 = state_21535__$1;
(statearr_21548_21634[(2)] = inst_21489);

(statearr_21548_21634[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (46))){
var inst_21530 = (state_21535[(2)]);
var state_21535__$1 = state_21535;
var statearr_21549_21635 = state_21535__$1;
(statearr_21549_21635[(2)] = inst_21530);

(statearr_21549_21635[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (4))){
var inst_21433 = (state_21535[(2)]);
var inst_21434 = cljs.core.List.EMPTY;
var inst_21435 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.dependencies_loaded,inst_21434) : cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_21434));
var inst_21436 = (function (){return ((function (inst_21433,inst_21434,inst_21435,state_val_21536,c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21130_SHARP_){
var and__6397__auto__ = cljs.core.cst$kw$namespace.cljs$core$IFn$_invoke$arity$1(p1__21130_SHARP_);
if(cljs.core.truth_(and__6397__auto__)){
return (cljs.core.not(cljs.core.cst$kw$eval_DASH_body.cljs$core$IFn$_invoke$arity$1(p1__21130_SHARP_))) && (cljs.core.not(figwheel.client.file_reloading.figwheel_no_load_QMARK_(p1__21130_SHARP_)));
} else {
return and__6397__auto__;
}
});
;})(inst_21433,inst_21434,inst_21435,state_val_21536,c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21437 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_21436,files);
var inst_21438 = figwheel.client.file_reloading.get_figwheel_always();
var inst_21439 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(inst_21437,inst_21438);
var state_21535__$1 = (function (){var statearr_21550 = state_21535;
(statearr_21550[(12)] = inst_21439);

(statearr_21550[(17)] = inst_21433);

(statearr_21550[(18)] = inst_21435);

return statearr_21550;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_21551_21636 = state_21535__$1;
(statearr_21551_21636[(1)] = (16));

} else {
var statearr_21552_21637 = state_21535__$1;
(statearr_21552_21637[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (15))){
var inst_21423 = (state_21535[(2)]);
var state_21535__$1 = state_21535;
var statearr_21553_21638 = state_21535__$1;
(statearr_21553_21638[(2)] = inst_21423);

(statearr_21553_21638[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (21))){
var inst_21449 = (state_21535[(19)]);
var inst_21449__$1 = (state_21535[(2)]);
var inst_21450 = figwheel.client.file_reloading.load_all_js_files(inst_21449__$1);
var state_21535__$1 = (function (){var statearr_21554 = state_21535;
(statearr_21554[(19)] = inst_21449__$1);

return statearr_21554;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21535__$1,(22),inst_21450);
} else {
if((state_val_21536 === (31))){
var inst_21533 = (state_21535[(2)]);
var state_21535__$1 = state_21535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21535__$1,inst_21533);
} else {
if((state_val_21536 === (32))){
var inst_21489 = (state_21535[(16)]);
var inst_21494 = inst_21489.cljs$lang$protocol_mask$partition0$;
var inst_21495 = (inst_21494 & (64));
var inst_21496 = inst_21489.cljs$core$ISeq$;
var inst_21497 = (inst_21495) || (inst_21496);
var state_21535__$1 = state_21535;
if(cljs.core.truth_(inst_21497)){
var statearr_21555_21639 = state_21535__$1;
(statearr_21555_21639[(1)] = (35));

} else {
var statearr_21556_21640 = state_21535__$1;
(statearr_21556_21640[(1)] = (36));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (40))){
var inst_21510 = (state_21535[(20)]);
var inst_21509 = (state_21535[(2)]);
var inst_21510__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21509,cljs.core.cst$kw$figwheel_DASH_no_DASH_load);
var inst_21511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_21509,cljs.core.cst$kw$not_DASH_required);
var inst_21512 = cljs.core.not_empty(inst_21510__$1);
var state_21535__$1 = (function (){var statearr_21557 = state_21535;
(statearr_21557[(20)] = inst_21510__$1);

(statearr_21557[(21)] = inst_21511);

return statearr_21557;
})();
if(cljs.core.truth_(inst_21512)){
var statearr_21558_21641 = state_21535__$1;
(statearr_21558_21641[(1)] = (41));

} else {
var statearr_21559_21642 = state_21535__$1;
(statearr_21559_21642[(1)] = (42));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (33))){
var state_21535__$1 = state_21535;
var statearr_21560_21643 = state_21535__$1;
(statearr_21560_21643[(2)] = false);

(statearr_21560_21643[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (13))){
var inst_21409 = (state_21535[(22)]);
var inst_21413 = cljs.core.chunk_first(inst_21409);
var inst_21414 = cljs.core.chunk_rest(inst_21409);
var inst_21415 = cljs.core.count(inst_21413);
var inst_21396 = inst_21414;
var inst_21397 = inst_21413;
var inst_21398 = inst_21415;
var inst_21399 = (0);
var state_21535__$1 = (function (){var statearr_21561 = state_21535;
(statearr_21561[(7)] = inst_21398);

(statearr_21561[(8)] = inst_21399);

(statearr_21561[(9)] = inst_21397);

(statearr_21561[(10)] = inst_21396);

return statearr_21561;
})();
var statearr_21562_21644 = state_21535__$1;
(statearr_21562_21644[(2)] = null);

(statearr_21562_21644[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (22))){
var inst_21457 = (state_21535[(23)]);
var inst_21449 = (state_21535[(19)]);
var inst_21453 = (state_21535[(24)]);
var inst_21452 = (state_21535[(25)]);
var inst_21452__$1 = (state_21535[(2)]);
var inst_21453__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$loaded_DASH_file,inst_21452__$1);
var inst_21454 = (function (){var all_files = inst_21449;
var res_SINGLEQUOTE_ = inst_21452__$1;
var res = inst_21453__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_21457,inst_21449,inst_21453,inst_21452,inst_21452__$1,inst_21453__$1,state_val_21536,c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21131_SHARP_){
return cljs.core.not(cljs.core.cst$kw$loaded_DASH_file.cljs$core$IFn$_invoke$arity$1(p1__21131_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_21457,inst_21449,inst_21453,inst_21452,inst_21452__$1,inst_21453__$1,state_val_21536,c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21455 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_21454,inst_21452__$1);
var inst_21456 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.dependencies_loaded) : cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded));
var inst_21457__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$loaded_DASH_file,inst_21456);
var inst_21458 = cljs.core.not_empty(inst_21457__$1);
var state_21535__$1 = (function (){var statearr_21563 = state_21535;
(statearr_21563[(23)] = inst_21457__$1);

(statearr_21563[(24)] = inst_21453__$1);

(statearr_21563[(26)] = inst_21455);

(statearr_21563[(25)] = inst_21452__$1);

return statearr_21563;
})();
if(cljs.core.truth_(inst_21458)){
var statearr_21564_21645 = state_21535__$1;
(statearr_21564_21645[(1)] = (23));

} else {
var statearr_21565_21646 = state_21535__$1;
(statearr_21565_21646[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (36))){
var state_21535__$1 = state_21535;
var statearr_21566_21647 = state_21535__$1;
(statearr_21566_21647[(2)] = false);

(statearr_21566_21647[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (41))){
var inst_21510 = (state_21535[(20)]);
var inst_21514 = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(figwheel.client.file_reloading.name__GT_path,cljs.core.cst$kw$namespace);
var inst_21515 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_21514,inst_21510);
var inst_21516 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_21515], 0));
var inst_21517 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_21516)].join('');
var inst_21518 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_21517);
var state_21535__$1 = state_21535;
var statearr_21567_21648 = state_21535__$1;
(statearr_21567_21648[(2)] = inst_21518);

(statearr_21567_21648[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (43))){
var inst_21511 = (state_21535[(21)]);
var inst_21521 = (state_21535[(2)]);
var inst_21522 = cljs.core.not_empty(inst_21511);
var state_21535__$1 = (function (){var statearr_21568 = state_21535;
(statearr_21568[(27)] = inst_21521);

return statearr_21568;
})();
if(cljs.core.truth_(inst_21522)){
var statearr_21569_21649 = state_21535__$1;
(statearr_21569_21649[(1)] = (44));

} else {
var statearr_21570_21650 = state_21535__$1;
(statearr_21570_21650[(1)] = (45));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (29))){
var inst_21457 = (state_21535[(23)]);
var inst_21489 = (state_21535[(16)]);
var inst_21449 = (state_21535[(19)]);
var inst_21453 = (state_21535[(24)]);
var inst_21455 = (state_21535[(26)]);
var inst_21452 = (state_21535[(25)]);
var inst_21485 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: NOT loading these files ");
var inst_21488 = (function (){var all_files = inst_21449;
var res_SINGLEQUOTE_ = inst_21452;
var res = inst_21453;
var files_not_loaded = inst_21455;
var dependencies_that_loaded = inst_21457;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21457,inst_21489,inst_21449,inst_21453,inst_21455,inst_21452,inst_21485,state_val_21536,c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21487){
var map__21571 = p__21487;
var map__21571__$1 = ((((!((map__21571 == null)))?((((map__21571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21571):map__21571);
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21571__$1,cljs.core.cst$kw$namespace);
var meta_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.figwheel_meta_pragmas) : cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)),cljs.core.name(namespace));
if((meta_data == null)){
return cljs.core.cst$kw$not_DASH_required;
} else {
if(cljs.core.truth_((function (){var G__21573 = cljs.core.cst$kw$figwheel_DASH_no_DASH_load;
return (meta_data.cljs$core$IFn$_invoke$arity$1 ? meta_data.cljs$core$IFn$_invoke$arity$1(G__21573) : meta_data.call(null,G__21573));
})())){
return cljs.core.cst$kw$figwheel_DASH_no_DASH_load;
} else {
return cljs.core.cst$kw$not_DASH_required;

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21457,inst_21489,inst_21449,inst_21453,inst_21455,inst_21452,inst_21485,state_val_21536,c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21489__$1 = cljs.core.group_by(inst_21488,inst_21455);
var inst_21491 = (inst_21489__$1 == null);
var inst_21492 = cljs.core.not(inst_21491);
var state_21535__$1 = (function (){var statearr_21574 = state_21535;
(statearr_21574[(16)] = inst_21489__$1);

(statearr_21574[(28)] = inst_21485);

return statearr_21574;
})();
if(inst_21492){
var statearr_21575_21651 = state_21535__$1;
(statearr_21575_21651[(1)] = (32));

} else {
var statearr_21576_21652 = state_21535__$1;
(statearr_21576_21652[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (44))){
var inst_21511 = (state_21535[(21)]);
var inst_21524 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$file,inst_21511);
var inst_21525 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_21524], 0));
var inst_21526 = [cljs.core.str("not required: "),cljs.core.str(inst_21525)].join('');
var inst_21527 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_21526);
var state_21535__$1 = state_21535;
var statearr_21577_21653 = state_21535__$1;
(statearr_21577_21653[(2)] = inst_21527);

(statearr_21577_21653[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (6))){
var inst_21430 = (state_21535[(2)]);
var state_21535__$1 = state_21535;
var statearr_21578_21654 = state_21535__$1;
(statearr_21578_21654[(2)] = inst_21430);

(statearr_21578_21654[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (28))){
var inst_21455 = (state_21535[(26)]);
var inst_21482 = (state_21535[(2)]);
var inst_21483 = cljs.core.not_empty(inst_21455);
var state_21535__$1 = (function (){var statearr_21579 = state_21535;
(statearr_21579[(29)] = inst_21482);

return statearr_21579;
})();
if(cljs.core.truth_(inst_21483)){
var statearr_21580_21655 = state_21535__$1;
(statearr_21580_21655[(1)] = (29));

} else {
var statearr_21581_21656 = state_21535__$1;
(statearr_21581_21656[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (25))){
var inst_21453 = (state_21535[(24)]);
var inst_21469 = (state_21535[(2)]);
var inst_21470 = cljs.core.not_empty(inst_21453);
var state_21535__$1 = (function (){var statearr_21582 = state_21535;
(statearr_21582[(30)] = inst_21469);

return statearr_21582;
})();
if(cljs.core.truth_(inst_21470)){
var statearr_21583_21657 = state_21535__$1;
(statearr_21583_21657[(1)] = (26));

} else {
var statearr_21584_21658 = state_21535__$1;
(statearr_21584_21658[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (34))){
var inst_21504 = (state_21535[(2)]);
var state_21535__$1 = state_21535;
if(cljs.core.truth_(inst_21504)){
var statearr_21585_21659 = state_21535__$1;
(statearr_21585_21659[(1)] = (38));

} else {
var statearr_21586_21660 = state_21535__$1;
(statearr_21586_21660[(1)] = (39));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (17))){
var state_21535__$1 = state_21535;
var statearr_21587_21661 = state_21535__$1;
(statearr_21587_21661[(2)] = recompile_dependents);

(statearr_21587_21661[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (3))){
var state_21535__$1 = state_21535;
var statearr_21588_21662 = state_21535__$1;
(statearr_21588_21662[(2)] = null);

(statearr_21588_21662[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (12))){
var inst_21426 = (state_21535[(2)]);
var state_21535__$1 = state_21535;
var statearr_21589_21663 = state_21535__$1;
(statearr_21589_21663[(2)] = inst_21426);

(statearr_21589_21663[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (2))){
var inst_21388 = (state_21535[(13)]);
var inst_21395 = cljs.core.seq(inst_21388);
var inst_21396 = inst_21395;
var inst_21397 = null;
var inst_21398 = (0);
var inst_21399 = (0);
var state_21535__$1 = (function (){var statearr_21590 = state_21535;
(statearr_21590[(7)] = inst_21398);

(statearr_21590[(8)] = inst_21399);

(statearr_21590[(9)] = inst_21397);

(statearr_21590[(10)] = inst_21396);

return statearr_21590;
})();
var statearr_21591_21664 = state_21535__$1;
(statearr_21591_21664[(2)] = null);

(statearr_21591_21664[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (23))){
var inst_21457 = (state_21535[(23)]);
var inst_21449 = (state_21535[(19)]);
var inst_21453 = (state_21535[(24)]);
var inst_21455 = (state_21535[(26)]);
var inst_21452 = (state_21535[(25)]);
var inst_21460 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: loaded these dependencies");
var inst_21462 = (function (){var all_files = inst_21449;
var res_SINGLEQUOTE_ = inst_21452;
var res = inst_21453;
var files_not_loaded = inst_21455;
var dependencies_that_loaded = inst_21457;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21457,inst_21449,inst_21453,inst_21455,inst_21452,inst_21460,state_val_21536,c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21461){
var map__21592 = p__21461;
var map__21592__$1 = ((((!((map__21592 == null)))?((((map__21592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21592):map__21592);
var request_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21592__$1,cljs.core.cst$kw$request_DASH_url);
return clojure.string.replace(request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21457,inst_21449,inst_21453,inst_21455,inst_21452,inst_21460,state_val_21536,c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21463 = cljs.core.reverse(inst_21457);
var inst_21464 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_21462,inst_21463);
var inst_21465 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_21464], 0));
var inst_21466 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_21465);
var state_21535__$1 = (function (){var statearr_21594 = state_21535;
(statearr_21594[(31)] = inst_21460);

return statearr_21594;
})();
var statearr_21595_21665 = state_21535__$1;
(statearr_21595_21665[(2)] = inst_21466);

(statearr_21595_21665[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (35))){
var state_21535__$1 = state_21535;
var statearr_21596_21666 = state_21535__$1;
(statearr_21596_21666[(2)] = true);

(statearr_21596_21666[(1)] = (37));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (19))){
var inst_21439 = (state_21535[(12)]);
var inst_21445 = figwheel.client.file_reloading.expand_files(inst_21439);
var state_21535__$1 = state_21535;
var statearr_21597_21667 = state_21535__$1;
(statearr_21597_21667[(2)] = inst_21445);

(statearr_21597_21667[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (11))){
var state_21535__$1 = state_21535;
var statearr_21598_21668 = state_21535__$1;
(statearr_21598_21668[(2)] = null);

(statearr_21598_21668[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (9))){
var inst_21428 = (state_21535[(2)]);
var state_21535__$1 = state_21535;
var statearr_21599_21669 = state_21535__$1;
(statearr_21599_21669[(2)] = inst_21428);

(statearr_21599_21669[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (5))){
var inst_21398 = (state_21535[(7)]);
var inst_21399 = (state_21535[(8)]);
var inst_21401 = (inst_21399 < inst_21398);
var inst_21402 = inst_21401;
var state_21535__$1 = state_21535;
if(cljs.core.truth_(inst_21402)){
var statearr_21600_21670 = state_21535__$1;
(statearr_21600_21670[(1)] = (7));

} else {
var statearr_21601_21671 = state_21535__$1;
(statearr_21601_21671[(1)] = (8));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (14))){
var inst_21409 = (state_21535[(22)]);
var inst_21418 = cljs.core.first(inst_21409);
var inst_21419 = figwheel.client.file_reloading.eval_body(inst_21418,opts);
var inst_21420 = cljs.core.next(inst_21409);
var inst_21396 = inst_21420;
var inst_21397 = null;
var inst_21398 = (0);
var inst_21399 = (0);
var state_21535__$1 = (function (){var statearr_21602 = state_21535;
(statearr_21602[(7)] = inst_21398);

(statearr_21602[(8)] = inst_21399);

(statearr_21602[(9)] = inst_21397);

(statearr_21602[(32)] = inst_21419);

(statearr_21602[(10)] = inst_21396);

return statearr_21602;
})();
var statearr_21603_21672 = state_21535__$1;
(statearr_21603_21672[(2)] = null);

(statearr_21603_21672[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (45))){
var state_21535__$1 = state_21535;
var statearr_21604_21673 = state_21535__$1;
(statearr_21604_21673[(2)] = null);

(statearr_21604_21673[(1)] = (46));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (26))){
var inst_21457 = (state_21535[(23)]);
var inst_21449 = (state_21535[(19)]);
var inst_21453 = (state_21535[(24)]);
var inst_21455 = (state_21535[(26)]);
var inst_21452 = (state_21535[(25)]);
var inst_21472 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$debug,"Figwheel: loaded these files");
var inst_21474 = (function (){var all_files = inst_21449;
var res_SINGLEQUOTE_ = inst_21452;
var res = inst_21453;
var files_not_loaded = inst_21455;
var dependencies_that_loaded = inst_21457;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21457,inst_21449,inst_21453,inst_21455,inst_21452,inst_21472,state_val_21536,c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__21473){
var map__21605 = p__21473;
var map__21605__$1 = ((((!((map__21605 == null)))?((((map__21605.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21605.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21605):map__21605);
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21605__$1,cljs.core.cst$kw$namespace);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21605__$1,cljs.core.cst$kw$file);
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path(cljs.core.name(namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21457,inst_21449,inst_21453,inst_21455,inst_21452,inst_21472,state_val_21536,c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21475 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(inst_21474,inst_21453);
var inst_21476 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_21475], 0));
var inst_21477 = figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1(inst_21476);
var inst_21478 = (function (){var all_files = inst_21449;
var res_SINGLEQUOTE_ = inst_21452;
var res = inst_21453;
var files_not_loaded = inst_21455;
var dependencies_that_loaded = inst_21457;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21457,inst_21449,inst_21453,inst_21455,inst_21452,inst_21472,inst_21474,inst_21475,inst_21476,inst_21477,state_val_21536,c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event(res);

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_21457,inst_21449,inst_21453,inst_21455,inst_21452,inst_21472,inst_21474,inst_21475,inst_21476,inst_21477,state_val_21536,c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_21479 = setTimeout(inst_21478,(10));
var state_21535__$1 = (function (){var statearr_21607 = state_21535;
(statearr_21607[(33)] = inst_21477);

(statearr_21607[(34)] = inst_21472);

return statearr_21607;
})();
var statearr_21608_21674 = state_21535__$1;
(statearr_21608_21674[(2)] = inst_21479);

(statearr_21608_21674[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (16))){
var state_21535__$1 = state_21535;
var statearr_21609_21675 = state_21535__$1;
(statearr_21609_21675[(2)] = reload_dependents);

(statearr_21609_21675[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (38))){
var inst_21489 = (state_21535[(16)]);
var inst_21506 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_21489);
var state_21535__$1 = state_21535;
var statearr_21610_21676 = state_21535__$1;
(statearr_21610_21676[(2)] = inst_21506);

(statearr_21610_21676[(1)] = (40));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (30))){
var state_21535__$1 = state_21535;
var statearr_21611_21677 = state_21535__$1;
(statearr_21611_21677[(2)] = null);

(statearr_21611_21677[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (10))){
var inst_21409 = (state_21535[(22)]);
var inst_21411 = cljs.core.chunked_seq_QMARK_(inst_21409);
var state_21535__$1 = state_21535;
if(inst_21411){
var statearr_21612_21678 = state_21535__$1;
(statearr_21612_21678[(1)] = (13));

} else {
var statearr_21613_21679 = state_21535__$1;
(statearr_21613_21679[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (18))){
var inst_21443 = (state_21535[(2)]);
var state_21535__$1 = state_21535;
if(cljs.core.truth_(inst_21443)){
var statearr_21614_21680 = state_21535__$1;
(statearr_21614_21680[(1)] = (19));

} else {
var statearr_21615_21681 = state_21535__$1;
(statearr_21615_21681[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (42))){
var state_21535__$1 = state_21535;
var statearr_21616_21682 = state_21535__$1;
(statearr_21616_21682[(2)] = null);

(statearr_21616_21682[(1)] = (43));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (37))){
var inst_21501 = (state_21535[(2)]);
var state_21535__$1 = state_21535;
var statearr_21617_21683 = state_21535__$1;
(statearr_21617_21683[(2)] = inst_21501);

(statearr_21617_21683[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21536 === (8))){
var inst_21409 = (state_21535[(22)]);
var inst_21396 = (state_21535[(10)]);
var inst_21409__$1 = cljs.core.seq(inst_21396);
var state_21535__$1 = (function (){var statearr_21618 = state_21535;
(statearr_21618[(22)] = inst_21409__$1);

return statearr_21618;
})();
if(inst_21409__$1){
var statearr_21619_21684 = state_21535__$1;
(statearr_21619_21684[(1)] = (10));

} else {
var statearr_21620_21685 = state_21535__$1;
(statearr_21620_21685[(1)] = (11));

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
});})(c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__13964__auto__,c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__13965__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__13965__auto____0 = (function (){
var statearr_21624 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21624[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__13965__auto__);

(statearr_21624[(1)] = (1));

return statearr_21624;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__13965__auto____1 = (function (state_21535){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_21535);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e21625){if((e21625 instanceof Object)){
var ex__13968__auto__ = e21625;
var statearr_21626_21686 = state_21535;
(statearr_21626_21686[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21535);

return cljs.core.cst$kw$recur;
} else {
throw e21625;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__21687 = state_21535;
state_21535 = G__21687;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__13965__auto__ = function(state_21535){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__13965__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__13965__auto____1.call(this,state_21535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__13965__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__13965__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__14090__auto__ = (function (){var statearr_21627 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_21627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto__);

return statearr_21627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto__,map__21381,map__21381__$1,opts,before_jsload,on_jsload,reload_dependents,map__21382,map__21382__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__14088__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(clojure.string.replace_first(cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__21690,link){
var map__21693 = p__21690;
var map__21693__$1 = ((((!((map__21693 == null)))?((((map__21693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21693):map__21693);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21693__$1,cljs.core.cst$kw$file);
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (link_href,temp__4657__auto__,map__21693,map__21693__$1,file){
return (function (p1__21688_SHARP_,p2__21689_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__21688_SHARP_,p2__21689_SHARP_)){
return p1__21688_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__21693,map__21693__$1,file))
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
var temp__4657__auto__ = cljs.core.first(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__21699){
var map__21700 = p__21699;
var map__21700__$1 = ((((!((map__21700 == null)))?((((map__21700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21700):map__21700);
var match_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21700__$1,cljs.core.cst$kw$match_DASH_length);
var current_url_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21700__$1,cljs.core.cst$kw$current_DASH_url_DASH_length);
return (current_url_length - match_length);
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__21695_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_(f_data,p1__21695_SHARP_);
}),figwheel.client.file_reloading.current_links())));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
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
return cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__21702_SHARP_,p2__21703_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21702_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p2__21703_SHARP_,key),p2__21703_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var G__21706 = ((function (parent){
return (function (){
parent.removeChild(orig_link);

return (finished_fn.cljs$core$IFn$_invoke$arity$0 ? finished_fn.cljs$core$IFn$_invoke$arity$0() : finished_fn.call(null));
});})(parent))
;
var G__21707 = (300);
return setTimeout(G__21706,G__21707);
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = (function (){var G__21708 = goog.async.Deferred.succeed();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21708) : cljs.core.atom.call(null,G__21708));
})();
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link(f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document(link,figwheel.client.file_reloading.clone_link(link,link.href),((function (link,temp__4655__auto__){
return (function (){
var G__21710 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f_data,cljs.core.cst$kw$loaded,true);
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(G__21710) : fin.call(null,G__21710));
});})(link,temp__4655__auto__))
);
} else {
return (fin.cljs$core$IFn$_invoke$arity$1 ? fin.cljs$core$IFn$_invoke$arity$1(f_data) : fin.call(null,f_data));
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD(figwheel.client.utils.mapConcatD(deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_21711 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$loaded,f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event(loaded_f_datas_21711);

if(cljs.core.fn_QMARK_(on_cssload)){
(on_cssload.cljs$core$IFn$_invoke$arity$1 ? on_cssload.cljs$core$IFn$_invoke$arity$1(loaded_f_datas_21711) : on_cssload.call(null,loaded_f_datas_21711));
} else {
}

return (fin.cljs$core$IFn$_invoke$arity$0 ? fin.cljs$core$IFn$_invoke$arity$0() : fin.call(null));
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__21712,p__21713){
var map__21718 = p__21712;
var map__21718__$1 = ((((!((map__21718 == null)))?((((map__21718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21718):map__21718);
var on_cssload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21718__$1,cljs.core.cst$kw$on_DASH_cssload);
var map__21719 = p__21713;
var map__21719__$1 = ((((!((map__21719 == null)))?((((map__21719.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21719.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21719):map__21719);
var files_msg = map__21719__$1;
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21719__$1,cljs.core.cst$kw$files);
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_())){
var temp__4657__auto__ = cljs.core.not_empty(figwheel.client.file_reloading.distinctify(cljs.core.cst$kw$file,files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});
