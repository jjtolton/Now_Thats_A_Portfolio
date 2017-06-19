// Compiled by ClojureScript 1.9.518 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
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
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28749__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28749__auto__){
return or__28749__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

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
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28749__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__62377_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__62377_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__62382 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__62383 = null;
var count__62384 = (0);
var i__62385 = (0);
while(true){
if((i__62385 < count__62384)){
var n = cljs.core._nth.call(null,chunk__62383,i__62385);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__62386 = seq__62382;
var G__62387 = chunk__62383;
var G__62388 = count__62384;
var G__62389 = (i__62385 + (1));
seq__62382 = G__62386;
chunk__62383 = G__62387;
count__62384 = G__62388;
i__62385 = G__62389;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__62382);
if(temp__6738__auto__){
var seq__62382__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62382__$1)){
var c__29660__auto__ = cljs.core.chunk_first.call(null,seq__62382__$1);
var G__62390 = cljs.core.chunk_rest.call(null,seq__62382__$1);
var G__62391 = c__29660__auto__;
var G__62392 = cljs.core.count.call(null,c__29660__auto__);
var G__62393 = (0);
seq__62382 = G__62390;
chunk__62383 = G__62391;
count__62384 = G__62392;
i__62385 = G__62393;
continue;
} else {
var n = cljs.core.first.call(null,seq__62382__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__62394 = cljs.core.next.call(null,seq__62382__$1);
var G__62395 = null;
var G__62396 = (0);
var G__62397 = (0);
seq__62382 = G__62394;
chunk__62383 = G__62395;
count__62384 = G__62396;
i__62385 = G__62397;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__62448_62459 = cljs.core.seq.call(null,deps);
var chunk__62449_62460 = null;
var count__62450_62461 = (0);
var i__62451_62462 = (0);
while(true){
if((i__62451_62462 < count__62450_62461)){
var dep_62463 = cljs.core._nth.call(null,chunk__62449_62460,i__62451_62462);
topo_sort_helper_STAR_.call(null,dep_62463,(depth + (1)),state);

var G__62464 = seq__62448_62459;
var G__62465 = chunk__62449_62460;
var G__62466 = count__62450_62461;
var G__62467 = (i__62451_62462 + (1));
seq__62448_62459 = G__62464;
chunk__62449_62460 = G__62465;
count__62450_62461 = G__62466;
i__62451_62462 = G__62467;
continue;
} else {
var temp__6738__auto___62468 = cljs.core.seq.call(null,seq__62448_62459);
if(temp__6738__auto___62468){
var seq__62448_62469__$1 = temp__6738__auto___62468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62448_62469__$1)){
var c__29660__auto___62470 = cljs.core.chunk_first.call(null,seq__62448_62469__$1);
var G__62471 = cljs.core.chunk_rest.call(null,seq__62448_62469__$1);
var G__62472 = c__29660__auto___62470;
var G__62473 = cljs.core.count.call(null,c__29660__auto___62470);
var G__62474 = (0);
seq__62448_62459 = G__62471;
chunk__62449_62460 = G__62472;
count__62450_62461 = G__62473;
i__62451_62462 = G__62474;
continue;
} else {
var dep_62475 = cljs.core.first.call(null,seq__62448_62469__$1);
topo_sort_helper_STAR_.call(null,dep_62475,(depth + (1)),state);

var G__62476 = cljs.core.next.call(null,seq__62448_62469__$1);
var G__62477 = null;
var G__62478 = (0);
var G__62479 = (0);
seq__62448_62459 = G__62476;
chunk__62449_62460 = G__62477;
count__62450_62461 = G__62478;
i__62451_62462 = G__62479;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__62452){
var vec__62456 = p__62452;
var seq__62457 = cljs.core.seq.call(null,vec__62456);
var first__62458 = cljs.core.first.call(null,seq__62457);
var seq__62457__$1 = cljs.core.next.call(null,seq__62457);
var x = first__62458;
var xs = seq__62457__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__62456,seq__62457,first__62458,seq__62457__$1,x,xs,get_deps__$1){
return (function (p1__62398_SHARP_){
return clojure.set.difference.call(null,p1__62398_SHARP_,x);
});})(vec__62456,seq__62457,first__62458,seq__62457__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__62492 = cljs.core.seq.call(null,provides);
var chunk__62493 = null;
var count__62494 = (0);
var i__62495 = (0);
while(true){
if((i__62495 < count__62494)){
var prov = cljs.core._nth.call(null,chunk__62493,i__62495);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__62496_62504 = cljs.core.seq.call(null,requires);
var chunk__62497_62505 = null;
var count__62498_62506 = (0);
var i__62499_62507 = (0);
while(true){
if((i__62499_62507 < count__62498_62506)){
var req_62508 = cljs.core._nth.call(null,chunk__62497_62505,i__62499_62507);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_62508,prov);

var G__62509 = seq__62496_62504;
var G__62510 = chunk__62497_62505;
var G__62511 = count__62498_62506;
var G__62512 = (i__62499_62507 + (1));
seq__62496_62504 = G__62509;
chunk__62497_62505 = G__62510;
count__62498_62506 = G__62511;
i__62499_62507 = G__62512;
continue;
} else {
var temp__6738__auto___62513 = cljs.core.seq.call(null,seq__62496_62504);
if(temp__6738__auto___62513){
var seq__62496_62514__$1 = temp__6738__auto___62513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62496_62514__$1)){
var c__29660__auto___62515 = cljs.core.chunk_first.call(null,seq__62496_62514__$1);
var G__62516 = cljs.core.chunk_rest.call(null,seq__62496_62514__$1);
var G__62517 = c__29660__auto___62515;
var G__62518 = cljs.core.count.call(null,c__29660__auto___62515);
var G__62519 = (0);
seq__62496_62504 = G__62516;
chunk__62497_62505 = G__62517;
count__62498_62506 = G__62518;
i__62499_62507 = G__62519;
continue;
} else {
var req_62520 = cljs.core.first.call(null,seq__62496_62514__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_62520,prov);

var G__62521 = cljs.core.next.call(null,seq__62496_62514__$1);
var G__62522 = null;
var G__62523 = (0);
var G__62524 = (0);
seq__62496_62504 = G__62521;
chunk__62497_62505 = G__62522;
count__62498_62506 = G__62523;
i__62499_62507 = G__62524;
continue;
}
} else {
}
}
break;
}

var G__62525 = seq__62492;
var G__62526 = chunk__62493;
var G__62527 = count__62494;
var G__62528 = (i__62495 + (1));
seq__62492 = G__62525;
chunk__62493 = G__62526;
count__62494 = G__62527;
i__62495 = G__62528;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__62492);
if(temp__6738__auto__){
var seq__62492__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62492__$1)){
var c__29660__auto__ = cljs.core.chunk_first.call(null,seq__62492__$1);
var G__62529 = cljs.core.chunk_rest.call(null,seq__62492__$1);
var G__62530 = c__29660__auto__;
var G__62531 = cljs.core.count.call(null,c__29660__auto__);
var G__62532 = (0);
seq__62492 = G__62529;
chunk__62493 = G__62530;
count__62494 = G__62531;
i__62495 = G__62532;
continue;
} else {
var prov = cljs.core.first.call(null,seq__62492__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__62500_62533 = cljs.core.seq.call(null,requires);
var chunk__62501_62534 = null;
var count__62502_62535 = (0);
var i__62503_62536 = (0);
while(true){
if((i__62503_62536 < count__62502_62535)){
var req_62537 = cljs.core._nth.call(null,chunk__62501_62534,i__62503_62536);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_62537,prov);

var G__62538 = seq__62500_62533;
var G__62539 = chunk__62501_62534;
var G__62540 = count__62502_62535;
var G__62541 = (i__62503_62536 + (1));
seq__62500_62533 = G__62538;
chunk__62501_62534 = G__62539;
count__62502_62535 = G__62540;
i__62503_62536 = G__62541;
continue;
} else {
var temp__6738__auto___62542__$1 = cljs.core.seq.call(null,seq__62500_62533);
if(temp__6738__auto___62542__$1){
var seq__62500_62543__$1 = temp__6738__auto___62542__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62500_62543__$1)){
var c__29660__auto___62544 = cljs.core.chunk_first.call(null,seq__62500_62543__$1);
var G__62545 = cljs.core.chunk_rest.call(null,seq__62500_62543__$1);
var G__62546 = c__29660__auto___62544;
var G__62547 = cljs.core.count.call(null,c__29660__auto___62544);
var G__62548 = (0);
seq__62500_62533 = G__62545;
chunk__62501_62534 = G__62546;
count__62502_62535 = G__62547;
i__62503_62536 = G__62548;
continue;
} else {
var req_62549 = cljs.core.first.call(null,seq__62500_62543__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_62549,prov);

var G__62550 = cljs.core.next.call(null,seq__62500_62543__$1);
var G__62551 = null;
var G__62552 = (0);
var G__62553 = (0);
seq__62500_62533 = G__62550;
chunk__62501_62534 = G__62551;
count__62502_62535 = G__62552;
i__62503_62536 = G__62553;
continue;
}
} else {
}
}
break;
}

var G__62554 = cljs.core.next.call(null,seq__62492__$1);
var G__62555 = null;
var G__62556 = (0);
var G__62557 = (0);
seq__62492 = G__62554;
chunk__62493 = G__62555;
count__62494 = G__62556;
i__62495 = G__62557;
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

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__62562_62566 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__62563_62567 = null;
var count__62564_62568 = (0);
var i__62565_62569 = (0);
while(true){
if((i__62565_62569 < count__62564_62568)){
var ns_62570 = cljs.core._nth.call(null,chunk__62563_62567,i__62565_62569);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_62570);

var G__62571 = seq__62562_62566;
var G__62572 = chunk__62563_62567;
var G__62573 = count__62564_62568;
var G__62574 = (i__62565_62569 + (1));
seq__62562_62566 = G__62571;
chunk__62563_62567 = G__62572;
count__62564_62568 = G__62573;
i__62565_62569 = G__62574;
continue;
} else {
var temp__6738__auto___62575 = cljs.core.seq.call(null,seq__62562_62566);
if(temp__6738__auto___62575){
var seq__62562_62576__$1 = temp__6738__auto___62575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__62562_62576__$1)){
var c__29660__auto___62577 = cljs.core.chunk_first.call(null,seq__62562_62576__$1);
var G__62578 = cljs.core.chunk_rest.call(null,seq__62562_62576__$1);
var G__62579 = c__29660__auto___62577;
var G__62580 = cljs.core.count.call(null,c__29660__auto___62577);
var G__62581 = (0);
seq__62562_62566 = G__62578;
chunk__62563_62567 = G__62579;
count__62564_62568 = G__62580;
i__62565_62569 = G__62581;
continue;
} else {
var ns_62582 = cljs.core.first.call(null,seq__62562_62576__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_62582);

var G__62583 = cljs.core.next.call(null,seq__62562_62576__$1);
var G__62584 = null;
var G__62585 = (0);
var G__62586 = (0);
seq__62562_62566 = G__62583;
chunk__62563_62567 = G__62584;
count__62564_62568 = G__62585;
i__62565_62569 = G__62586;
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
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
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
goog.require_figwheel_backup_ = (function (){var or__28749__auto__ = goog.require__;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__62587__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__62587 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62588__i = 0, G__62588__a = new Array(arguments.length -  0);
while (G__62588__i < G__62588__a.length) {G__62588__a[G__62588__i] = arguments[G__62588__i + 0]; ++G__62588__i;}
  args = new cljs.core.IndexedSeq(G__62588__a,0);
} 
return G__62587__delegate.call(this,args);};
G__62587.cljs$lang$maxFixedArity = 0;
G__62587.cljs$lang$applyTo = (function (arglist__62589){
var args = cljs.core.seq(arglist__62589);
return G__62587__delegate(args);
});
G__62587.cljs$core$IFn$_invoke$arity$variadic = G__62587__delegate;
return G__62587;
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
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__62590 = cljs.core._EQ_;
var expr__62591 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__62590.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__62591))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__62590,expr__62591){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__62590,expr__62591))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__62590,expr__62591){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e62593){if((e62593 instanceof Error)){
var e = e62593;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e62593;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__62590,expr__62591))
} else {
if(cljs.core.truth_(pred__62590.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__62591))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__62590.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__62591))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__62590.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__62591))){
return ((function (pred__62590,expr__62591){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e62594){if((e62594 instanceof Error)){
var e = e62594;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e62594;

}
}})());
});
;})(pred__62590,expr__62591))
} else {
return ((function (pred__62590,expr__62591){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__62590,expr__62591))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__62595,callback){
var map__62598 = p__62595;
var map__62598__$1 = ((((!((map__62598 == null)))?((((map__62598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62598.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62598):map__62598);
var file_msg = map__62598__$1;
var request_url = cljs.core.get.call(null,map__62598__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__62598,map__62598__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__62598,map__62598__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__40635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto__){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto__){
return (function (state_62622){
var state_val_62623 = (state_62622[(1)]);
if((state_val_62623 === (7))){
var inst_62618 = (state_62622[(2)]);
var state_62622__$1 = state_62622;
var statearr_62624_62644 = state_62622__$1;
(statearr_62624_62644[(2)] = inst_62618);

(statearr_62624_62644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62623 === (1))){
var state_62622__$1 = state_62622;
var statearr_62625_62645 = state_62622__$1;
(statearr_62625_62645[(2)] = null);

(statearr_62625_62645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62623 === (4))){
var inst_62602 = (state_62622[(7)]);
var inst_62602__$1 = (state_62622[(2)]);
var state_62622__$1 = (function (){var statearr_62626 = state_62622;
(statearr_62626[(7)] = inst_62602__$1);

return statearr_62626;
})();
if(cljs.core.truth_(inst_62602__$1)){
var statearr_62627_62646 = state_62622__$1;
(statearr_62627_62646[(1)] = (5));

} else {
var statearr_62628_62647 = state_62622__$1;
(statearr_62628_62647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62623 === (6))){
var state_62622__$1 = state_62622;
var statearr_62629_62648 = state_62622__$1;
(statearr_62629_62648[(2)] = null);

(statearr_62629_62648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62623 === (3))){
var inst_62620 = (state_62622[(2)]);
var state_62622__$1 = state_62622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62622__$1,inst_62620);
} else {
if((state_val_62623 === (2))){
var state_62622__$1 = state_62622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62622__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_62623 === (11))){
var inst_62614 = (state_62622[(2)]);
var state_62622__$1 = (function (){var statearr_62630 = state_62622;
(statearr_62630[(8)] = inst_62614);

return statearr_62630;
})();
var statearr_62631_62649 = state_62622__$1;
(statearr_62631_62649[(2)] = null);

(statearr_62631_62649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62623 === (9))){
var inst_62608 = (state_62622[(9)]);
var inst_62606 = (state_62622[(10)]);
var inst_62610 = inst_62608.call(null,inst_62606);
var state_62622__$1 = state_62622;
var statearr_62632_62650 = state_62622__$1;
(statearr_62632_62650[(2)] = inst_62610);

(statearr_62632_62650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62623 === (5))){
var inst_62602 = (state_62622[(7)]);
var inst_62604 = figwheel.client.file_reloading.blocking_load.call(null,inst_62602);
var state_62622__$1 = state_62622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62622__$1,(8),inst_62604);
} else {
if((state_val_62623 === (10))){
var inst_62606 = (state_62622[(10)]);
var inst_62612 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_62606);
var state_62622__$1 = state_62622;
var statearr_62633_62651 = state_62622__$1;
(statearr_62633_62651[(2)] = inst_62612);

(statearr_62633_62651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62623 === (8))){
var inst_62608 = (state_62622[(9)]);
var inst_62602 = (state_62622[(7)]);
var inst_62606 = (state_62622[(2)]);
var inst_62607 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_62608__$1 = cljs.core.get.call(null,inst_62607,inst_62602);
var state_62622__$1 = (function (){var statearr_62634 = state_62622;
(statearr_62634[(9)] = inst_62608__$1);

(statearr_62634[(10)] = inst_62606);

return statearr_62634;
})();
if(cljs.core.truth_(inst_62608__$1)){
var statearr_62635_62652 = state_62622__$1;
(statearr_62635_62652[(1)] = (9));

} else {
var statearr_62636_62653 = state_62622__$1;
(statearr_62636_62653[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__40635__auto__))
;
return ((function (switch__40521__auto__,c__40635__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__40522__auto__ = null;
var figwheel$client$file_reloading$state_machine__40522__auto____0 = (function (){
var statearr_62640 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62640[(0)] = figwheel$client$file_reloading$state_machine__40522__auto__);

(statearr_62640[(1)] = (1));

return statearr_62640;
});
var figwheel$client$file_reloading$state_machine__40522__auto____1 = (function (state_62622){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_62622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e62641){if((e62641 instanceof Object)){
var ex__40525__auto__ = e62641;
var statearr_62642_62654 = state_62622;
(statearr_62642_62654[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62655 = state_62622;
state_62622 = G__62655;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__40522__auto__ = function(state_62622){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__40522__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__40522__auto____1.call(this,state_62622);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__40522__auto____0;
figwheel$client$file_reloading$state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__40522__auto____1;
return figwheel$client$file_reloading$state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto__))
})();
var state__40637__auto__ = (function (){var statearr_62643 = f__40636__auto__.call(null);
(statearr_62643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto__);

return statearr_62643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto__))
);

return c__40635__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__62656,callback){
var map__62659 = p__62656;
var map__62659__$1 = ((((!((map__62659 == null)))?((((map__62659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62659):map__62659);
var file_msg = map__62659__$1;
var namespace = cljs.core.get.call(null,map__62659__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__62659,map__62659__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__62659,map__62659__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__62661){
var map__62664 = p__62661;
var map__62664__$1 = ((((!((map__62664 == null)))?((((map__62664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62664.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62664):map__62664);
var file_msg = map__62664__$1;
var namespace = cljs.core.get.call(null,map__62664__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__62666){
var map__62669 = p__62666;
var map__62669__$1 = ((((!((map__62669 == null)))?((((map__62669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62669):map__62669);
var file_msg = map__62669__$1;
var namespace = cljs.core.get.call(null,map__62669__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28737__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28737__auto__){
var or__28749__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
var or__28749__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28749__auto____$1)){
return or__28749__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28737__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__62671,callback){
var map__62674 = p__62671;
var map__62674__$1 = ((((!((map__62674 == null)))?((((map__62674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62674):map__62674);
var file_msg = map__62674__$1;
var request_url = cljs.core.get.call(null,map__62674__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__62674__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__40635__auto___62778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto___62778,out){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto___62778,out){
return (function (state_62760){
var state_val_62761 = (state_62760[(1)]);
if((state_val_62761 === (1))){
var inst_62734 = cljs.core.seq.call(null,files);
var inst_62735 = cljs.core.first.call(null,inst_62734);
var inst_62736 = cljs.core.next.call(null,inst_62734);
var inst_62737 = files;
var state_62760__$1 = (function (){var statearr_62762 = state_62760;
(statearr_62762[(7)] = inst_62735);

(statearr_62762[(8)] = inst_62736);

(statearr_62762[(9)] = inst_62737);

return statearr_62762;
})();
var statearr_62763_62779 = state_62760__$1;
(statearr_62763_62779[(2)] = null);

(statearr_62763_62779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62761 === (2))){
var inst_62737 = (state_62760[(9)]);
var inst_62743 = (state_62760[(10)]);
var inst_62742 = cljs.core.seq.call(null,inst_62737);
var inst_62743__$1 = cljs.core.first.call(null,inst_62742);
var inst_62744 = cljs.core.next.call(null,inst_62742);
var inst_62745 = (inst_62743__$1 == null);
var inst_62746 = cljs.core.not.call(null,inst_62745);
var state_62760__$1 = (function (){var statearr_62764 = state_62760;
(statearr_62764[(11)] = inst_62744);

(statearr_62764[(10)] = inst_62743__$1);

return statearr_62764;
})();
if(inst_62746){
var statearr_62765_62780 = state_62760__$1;
(statearr_62765_62780[(1)] = (4));

} else {
var statearr_62766_62781 = state_62760__$1;
(statearr_62766_62781[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62761 === (3))){
var inst_62758 = (state_62760[(2)]);
var state_62760__$1 = state_62760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62760__$1,inst_62758);
} else {
if((state_val_62761 === (4))){
var inst_62743 = (state_62760[(10)]);
var inst_62748 = figwheel.client.file_reloading.reload_js_file.call(null,inst_62743);
var state_62760__$1 = state_62760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62760__$1,(7),inst_62748);
} else {
if((state_val_62761 === (5))){
var inst_62754 = cljs.core.async.close_BANG_.call(null,out);
var state_62760__$1 = state_62760;
var statearr_62767_62782 = state_62760__$1;
(statearr_62767_62782[(2)] = inst_62754);

(statearr_62767_62782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62761 === (6))){
var inst_62756 = (state_62760[(2)]);
var state_62760__$1 = state_62760;
var statearr_62768_62783 = state_62760__$1;
(statearr_62768_62783[(2)] = inst_62756);

(statearr_62768_62783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62761 === (7))){
var inst_62744 = (state_62760[(11)]);
var inst_62750 = (state_62760[(2)]);
var inst_62751 = cljs.core.async.put_BANG_.call(null,out,inst_62750);
var inst_62737 = inst_62744;
var state_62760__$1 = (function (){var statearr_62769 = state_62760;
(statearr_62769[(12)] = inst_62751);

(statearr_62769[(9)] = inst_62737);

return statearr_62769;
})();
var statearr_62770_62784 = state_62760__$1;
(statearr_62770_62784[(2)] = null);

(statearr_62770_62784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__40635__auto___62778,out))
;
return ((function (switch__40521__auto__,c__40635__auto___62778,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40522__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40522__auto____0 = (function (){
var statearr_62774 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62774[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40522__auto__);

(statearr_62774[(1)] = (1));

return statearr_62774;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__40522__auto____1 = (function (state_62760){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_62760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e62775){if((e62775 instanceof Object)){
var ex__40525__auto__ = e62775;
var statearr_62776_62785 = state_62760;
(statearr_62776_62785[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62786 = state_62760;
state_62760 = G__62786;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40522__auto__ = function(state_62760){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40522__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40522__auto____1.call(this,state_62760);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40522__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__40522__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto___62778,out))
})();
var state__40637__auto__ = (function (){var statearr_62777 = f__40636__auto__.call(null);
(statearr_62777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto___62778);

return statearr_62777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto___62778,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__62787,opts){
var map__62791 = p__62787;
var map__62791__$1 = ((((!((map__62791 == null)))?((((map__62791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62791):map__62791);
var eval_body = cljs.core.get.call(null,map__62791__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__62791__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28737__auto__ = eval_body;
if(cljs.core.truth_(and__28737__auto__)){
return typeof eval_body === 'string';
} else {
return and__28737__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e62793){var e = e62793;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__6736__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__62794_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__62794_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__6736__auto__)){
var file_msg = temp__6736__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__62803){
var vec__62804 = p__62803;
var k = cljs.core.nth.call(null,vec__62804,(0),null);
var v = cljs.core.nth.call(null,vec__62804,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__62807){
var vec__62808 = p__62807;
var k = cljs.core.nth.call(null,vec__62808,(0),null);
var v = cljs.core.nth.call(null,vec__62808,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__62814,p__62815){
var map__63063 = p__62814;
var map__63063__$1 = ((((!((map__63063 == null)))?((((map__63063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63063.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63063):map__63063);
var opts = map__63063__$1;
var before_jsload = cljs.core.get.call(null,map__63063__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__63063__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__63063__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__63064 = p__62815;
var map__63064__$1 = ((((!((map__63064 == null)))?((((map__63064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63064.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63064):map__63064);
var msg = map__63064__$1;
var files = cljs.core.get.call(null,map__63064__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__63064__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__63064__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__40635__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__40636__auto__ = (function (){var switch__40521__auto__ = ((function (c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_63218){
var state_val_63219 = (state_63218[(1)]);
if((state_val_63219 === (7))){
var inst_63078 = (state_63218[(7)]);
var inst_63079 = (state_63218[(8)]);
var inst_63080 = (state_63218[(9)]);
var inst_63081 = (state_63218[(10)]);
var inst_63086 = cljs.core._nth.call(null,inst_63079,inst_63081);
var inst_63087 = figwheel.client.file_reloading.eval_body.call(null,inst_63086,opts);
var inst_63088 = (inst_63081 + (1));
var tmp63220 = inst_63078;
var tmp63221 = inst_63079;
var tmp63222 = inst_63080;
var inst_63078__$1 = tmp63220;
var inst_63079__$1 = tmp63221;
var inst_63080__$1 = tmp63222;
var inst_63081__$1 = inst_63088;
var state_63218__$1 = (function (){var statearr_63223 = state_63218;
(statearr_63223[(7)] = inst_63078__$1);

(statearr_63223[(8)] = inst_63079__$1);

(statearr_63223[(11)] = inst_63087);

(statearr_63223[(9)] = inst_63080__$1);

(statearr_63223[(10)] = inst_63081__$1);

return statearr_63223;
})();
var statearr_63224_63310 = state_63218__$1;
(statearr_63224_63310[(2)] = null);

(statearr_63224_63310[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (20))){
var inst_63121 = (state_63218[(12)]);
var inst_63129 = figwheel.client.file_reloading.sort_files.call(null,inst_63121);
var state_63218__$1 = state_63218;
var statearr_63225_63311 = state_63218__$1;
(statearr_63225_63311[(2)] = inst_63129);

(statearr_63225_63311[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (27))){
var state_63218__$1 = state_63218;
var statearr_63226_63312 = state_63218__$1;
(statearr_63226_63312[(2)] = null);

(statearr_63226_63312[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (1))){
var inst_63070 = (state_63218[(13)]);
var inst_63067 = before_jsload.call(null,files);
var inst_63068 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_63069 = (function (){return ((function (inst_63070,inst_63067,inst_63068,state_val_63219,c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__62811_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__62811_SHARP_);
});
;})(inst_63070,inst_63067,inst_63068,state_val_63219,c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63070__$1 = cljs.core.filter.call(null,inst_63069,files);
var inst_63071 = cljs.core.not_empty.call(null,inst_63070__$1);
var state_63218__$1 = (function (){var statearr_63227 = state_63218;
(statearr_63227[(13)] = inst_63070__$1);

(statearr_63227[(14)] = inst_63068);

(statearr_63227[(15)] = inst_63067);

return statearr_63227;
})();
if(cljs.core.truth_(inst_63071)){
var statearr_63228_63313 = state_63218__$1;
(statearr_63228_63313[(1)] = (2));

} else {
var statearr_63229_63314 = state_63218__$1;
(statearr_63229_63314[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (24))){
var state_63218__$1 = state_63218;
var statearr_63230_63315 = state_63218__$1;
(statearr_63230_63315[(2)] = null);

(statearr_63230_63315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (39))){
var inst_63171 = (state_63218[(16)]);
var state_63218__$1 = state_63218;
var statearr_63231_63316 = state_63218__$1;
(statearr_63231_63316[(2)] = inst_63171);

(statearr_63231_63316[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (46))){
var inst_63213 = (state_63218[(2)]);
var state_63218__$1 = state_63218;
var statearr_63232_63317 = state_63218__$1;
(statearr_63232_63317[(2)] = inst_63213);

(statearr_63232_63317[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (4))){
var inst_63115 = (state_63218[(2)]);
var inst_63116 = cljs.core.List.EMPTY;
var inst_63117 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_63116);
var inst_63118 = (function (){return ((function (inst_63115,inst_63116,inst_63117,state_val_63219,c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__62812_SHARP_){
var and__28737__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__62812_SHARP_);
if(cljs.core.truth_(and__28737__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__62812_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__62812_SHARP_)));
} else {
return and__28737__auto__;
}
});
;})(inst_63115,inst_63116,inst_63117,state_val_63219,c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63119 = cljs.core.filter.call(null,inst_63118,files);
var inst_63120 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_63121 = cljs.core.concat.call(null,inst_63119,inst_63120);
var state_63218__$1 = (function (){var statearr_63233 = state_63218;
(statearr_63233[(17)] = inst_63117);

(statearr_63233[(18)] = inst_63115);

(statearr_63233[(12)] = inst_63121);

return statearr_63233;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_63234_63318 = state_63218__$1;
(statearr_63234_63318[(1)] = (16));

} else {
var statearr_63235_63319 = state_63218__$1;
(statearr_63235_63319[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (15))){
var inst_63105 = (state_63218[(2)]);
var state_63218__$1 = state_63218;
var statearr_63236_63320 = state_63218__$1;
(statearr_63236_63320[(2)] = inst_63105);

(statearr_63236_63320[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (21))){
var inst_63131 = (state_63218[(19)]);
var inst_63131__$1 = (state_63218[(2)]);
var inst_63132 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_63131__$1);
var state_63218__$1 = (function (){var statearr_63237 = state_63218;
(statearr_63237[(19)] = inst_63131__$1);

return statearr_63237;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63218__$1,(22),inst_63132);
} else {
if((state_val_63219 === (31))){
var inst_63216 = (state_63218[(2)]);
var state_63218__$1 = state_63218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63218__$1,inst_63216);
} else {
if((state_val_63219 === (32))){
var inst_63171 = (state_63218[(16)]);
var inst_63176 = inst_63171.cljs$lang$protocol_mask$partition0$;
var inst_63177 = (inst_63176 & (64));
var inst_63178 = inst_63171.cljs$core$ISeq$;
var inst_63179 = (cljs.core.PROTOCOL_SENTINEL === inst_63178);
var inst_63180 = (inst_63177) || (inst_63179);
var state_63218__$1 = state_63218;
if(cljs.core.truth_(inst_63180)){
var statearr_63238_63321 = state_63218__$1;
(statearr_63238_63321[(1)] = (35));

} else {
var statearr_63239_63322 = state_63218__$1;
(statearr_63239_63322[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (40))){
var inst_63193 = (state_63218[(20)]);
var inst_63192 = (state_63218[(2)]);
var inst_63193__$1 = cljs.core.get.call(null,inst_63192,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_63194 = cljs.core.get.call(null,inst_63192,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_63195 = cljs.core.not_empty.call(null,inst_63193__$1);
var state_63218__$1 = (function (){var statearr_63240 = state_63218;
(statearr_63240[(20)] = inst_63193__$1);

(statearr_63240[(21)] = inst_63194);

return statearr_63240;
})();
if(cljs.core.truth_(inst_63195)){
var statearr_63241_63323 = state_63218__$1;
(statearr_63241_63323[(1)] = (41));

} else {
var statearr_63242_63324 = state_63218__$1;
(statearr_63242_63324[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (33))){
var state_63218__$1 = state_63218;
var statearr_63243_63325 = state_63218__$1;
(statearr_63243_63325[(2)] = false);

(statearr_63243_63325[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (13))){
var inst_63091 = (state_63218[(22)]);
var inst_63095 = cljs.core.chunk_first.call(null,inst_63091);
var inst_63096 = cljs.core.chunk_rest.call(null,inst_63091);
var inst_63097 = cljs.core.count.call(null,inst_63095);
var inst_63078 = inst_63096;
var inst_63079 = inst_63095;
var inst_63080 = inst_63097;
var inst_63081 = (0);
var state_63218__$1 = (function (){var statearr_63244 = state_63218;
(statearr_63244[(7)] = inst_63078);

(statearr_63244[(8)] = inst_63079);

(statearr_63244[(9)] = inst_63080);

(statearr_63244[(10)] = inst_63081);

return statearr_63244;
})();
var statearr_63245_63326 = state_63218__$1;
(statearr_63245_63326[(2)] = null);

(statearr_63245_63326[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (22))){
var inst_63134 = (state_63218[(23)]);
var inst_63131 = (state_63218[(19)]);
var inst_63139 = (state_63218[(24)]);
var inst_63135 = (state_63218[(25)]);
var inst_63134__$1 = (state_63218[(2)]);
var inst_63135__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_63134__$1);
var inst_63136 = (function (){var all_files = inst_63131;
var res_SINGLEQUOTE_ = inst_63134__$1;
var res = inst_63135__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_63134,inst_63131,inst_63139,inst_63135,inst_63134__$1,inst_63135__$1,state_val_63219,c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__62813_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__62813_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_63134,inst_63131,inst_63139,inst_63135,inst_63134__$1,inst_63135__$1,state_val_63219,c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63137 = cljs.core.filter.call(null,inst_63136,inst_63134__$1);
var inst_63138 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_63139__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_63138);
var inst_63140 = cljs.core.not_empty.call(null,inst_63139__$1);
var state_63218__$1 = (function (){var statearr_63246 = state_63218;
(statearr_63246[(26)] = inst_63137);

(statearr_63246[(23)] = inst_63134__$1);

(statearr_63246[(24)] = inst_63139__$1);

(statearr_63246[(25)] = inst_63135__$1);

return statearr_63246;
})();
if(cljs.core.truth_(inst_63140)){
var statearr_63247_63327 = state_63218__$1;
(statearr_63247_63327[(1)] = (23));

} else {
var statearr_63248_63328 = state_63218__$1;
(statearr_63248_63328[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (36))){
var state_63218__$1 = state_63218;
var statearr_63249_63329 = state_63218__$1;
(statearr_63249_63329[(2)] = false);

(statearr_63249_63329[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (41))){
var inst_63193 = (state_63218[(20)]);
var inst_63197 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_63198 = cljs.core.map.call(null,inst_63197,inst_63193);
var inst_63199 = cljs.core.pr_str.call(null,inst_63198);
var inst_63200 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_63199)].join('');
var inst_63201 = figwheel.client.utils.log.call(null,inst_63200);
var state_63218__$1 = state_63218;
var statearr_63250_63330 = state_63218__$1;
(statearr_63250_63330[(2)] = inst_63201);

(statearr_63250_63330[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (43))){
var inst_63194 = (state_63218[(21)]);
var inst_63204 = (state_63218[(2)]);
var inst_63205 = cljs.core.not_empty.call(null,inst_63194);
var state_63218__$1 = (function (){var statearr_63251 = state_63218;
(statearr_63251[(27)] = inst_63204);

return statearr_63251;
})();
if(cljs.core.truth_(inst_63205)){
var statearr_63252_63331 = state_63218__$1;
(statearr_63252_63331[(1)] = (44));

} else {
var statearr_63253_63332 = state_63218__$1;
(statearr_63253_63332[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (29))){
var inst_63137 = (state_63218[(26)]);
var inst_63134 = (state_63218[(23)]);
var inst_63131 = (state_63218[(19)]);
var inst_63139 = (state_63218[(24)]);
var inst_63171 = (state_63218[(16)]);
var inst_63135 = (state_63218[(25)]);
var inst_63167 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_63170 = (function (){var all_files = inst_63131;
var res_SINGLEQUOTE_ = inst_63134;
var res = inst_63135;
var files_not_loaded = inst_63137;
var dependencies_that_loaded = inst_63139;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63137,inst_63134,inst_63131,inst_63139,inst_63171,inst_63135,inst_63167,state_val_63219,c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__63169){
var map__63254 = p__63169;
var map__63254__$1 = ((((!((map__63254 == null)))?((((map__63254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63254.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63254):map__63254);
var namespace = cljs.core.get.call(null,map__63254__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63137,inst_63134,inst_63131,inst_63139,inst_63171,inst_63135,inst_63167,state_val_63219,c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63171__$1 = cljs.core.group_by.call(null,inst_63170,inst_63137);
var inst_63173 = (inst_63171__$1 == null);
var inst_63174 = cljs.core.not.call(null,inst_63173);
var state_63218__$1 = (function (){var statearr_63256 = state_63218;
(statearr_63256[(16)] = inst_63171__$1);

(statearr_63256[(28)] = inst_63167);

return statearr_63256;
})();
if(inst_63174){
var statearr_63257_63333 = state_63218__$1;
(statearr_63257_63333[(1)] = (32));

} else {
var statearr_63258_63334 = state_63218__$1;
(statearr_63258_63334[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (44))){
var inst_63194 = (state_63218[(21)]);
var inst_63207 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_63194);
var inst_63208 = cljs.core.pr_str.call(null,inst_63207);
var inst_63209 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_63208)].join('');
var inst_63210 = figwheel.client.utils.log.call(null,inst_63209);
var state_63218__$1 = state_63218;
var statearr_63259_63335 = state_63218__$1;
(statearr_63259_63335[(2)] = inst_63210);

(statearr_63259_63335[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (6))){
var inst_63112 = (state_63218[(2)]);
var state_63218__$1 = state_63218;
var statearr_63260_63336 = state_63218__$1;
(statearr_63260_63336[(2)] = inst_63112);

(statearr_63260_63336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (28))){
var inst_63137 = (state_63218[(26)]);
var inst_63164 = (state_63218[(2)]);
var inst_63165 = cljs.core.not_empty.call(null,inst_63137);
var state_63218__$1 = (function (){var statearr_63261 = state_63218;
(statearr_63261[(29)] = inst_63164);

return statearr_63261;
})();
if(cljs.core.truth_(inst_63165)){
var statearr_63262_63337 = state_63218__$1;
(statearr_63262_63337[(1)] = (29));

} else {
var statearr_63263_63338 = state_63218__$1;
(statearr_63263_63338[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (25))){
var inst_63135 = (state_63218[(25)]);
var inst_63151 = (state_63218[(2)]);
var inst_63152 = cljs.core.not_empty.call(null,inst_63135);
var state_63218__$1 = (function (){var statearr_63264 = state_63218;
(statearr_63264[(30)] = inst_63151);

return statearr_63264;
})();
if(cljs.core.truth_(inst_63152)){
var statearr_63265_63339 = state_63218__$1;
(statearr_63265_63339[(1)] = (26));

} else {
var statearr_63266_63340 = state_63218__$1;
(statearr_63266_63340[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (34))){
var inst_63187 = (state_63218[(2)]);
var state_63218__$1 = state_63218;
if(cljs.core.truth_(inst_63187)){
var statearr_63267_63341 = state_63218__$1;
(statearr_63267_63341[(1)] = (38));

} else {
var statearr_63268_63342 = state_63218__$1;
(statearr_63268_63342[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (17))){
var state_63218__$1 = state_63218;
var statearr_63269_63343 = state_63218__$1;
(statearr_63269_63343[(2)] = recompile_dependents);

(statearr_63269_63343[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (3))){
var state_63218__$1 = state_63218;
var statearr_63270_63344 = state_63218__$1;
(statearr_63270_63344[(2)] = null);

(statearr_63270_63344[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (12))){
var inst_63108 = (state_63218[(2)]);
var state_63218__$1 = state_63218;
var statearr_63271_63345 = state_63218__$1;
(statearr_63271_63345[(2)] = inst_63108);

(statearr_63271_63345[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (2))){
var inst_63070 = (state_63218[(13)]);
var inst_63077 = cljs.core.seq.call(null,inst_63070);
var inst_63078 = inst_63077;
var inst_63079 = null;
var inst_63080 = (0);
var inst_63081 = (0);
var state_63218__$1 = (function (){var statearr_63272 = state_63218;
(statearr_63272[(7)] = inst_63078);

(statearr_63272[(8)] = inst_63079);

(statearr_63272[(9)] = inst_63080);

(statearr_63272[(10)] = inst_63081);

return statearr_63272;
})();
var statearr_63273_63346 = state_63218__$1;
(statearr_63273_63346[(2)] = null);

(statearr_63273_63346[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (23))){
var inst_63137 = (state_63218[(26)]);
var inst_63134 = (state_63218[(23)]);
var inst_63131 = (state_63218[(19)]);
var inst_63139 = (state_63218[(24)]);
var inst_63135 = (state_63218[(25)]);
var inst_63142 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_63144 = (function (){var all_files = inst_63131;
var res_SINGLEQUOTE_ = inst_63134;
var res = inst_63135;
var files_not_loaded = inst_63137;
var dependencies_that_loaded = inst_63139;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63137,inst_63134,inst_63131,inst_63139,inst_63135,inst_63142,state_val_63219,c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__63143){
var map__63274 = p__63143;
var map__63274__$1 = ((((!((map__63274 == null)))?((((map__63274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63274.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63274):map__63274);
var request_url = cljs.core.get.call(null,map__63274__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63137,inst_63134,inst_63131,inst_63139,inst_63135,inst_63142,state_val_63219,c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63145 = cljs.core.reverse.call(null,inst_63139);
var inst_63146 = cljs.core.map.call(null,inst_63144,inst_63145);
var inst_63147 = cljs.core.pr_str.call(null,inst_63146);
var inst_63148 = figwheel.client.utils.log.call(null,inst_63147);
var state_63218__$1 = (function (){var statearr_63276 = state_63218;
(statearr_63276[(31)] = inst_63142);

return statearr_63276;
})();
var statearr_63277_63347 = state_63218__$1;
(statearr_63277_63347[(2)] = inst_63148);

(statearr_63277_63347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (35))){
var state_63218__$1 = state_63218;
var statearr_63278_63348 = state_63218__$1;
(statearr_63278_63348[(2)] = true);

(statearr_63278_63348[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (19))){
var inst_63121 = (state_63218[(12)]);
var inst_63127 = figwheel.client.file_reloading.expand_files.call(null,inst_63121);
var state_63218__$1 = state_63218;
var statearr_63279_63349 = state_63218__$1;
(statearr_63279_63349[(2)] = inst_63127);

(statearr_63279_63349[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (11))){
var state_63218__$1 = state_63218;
var statearr_63280_63350 = state_63218__$1;
(statearr_63280_63350[(2)] = null);

(statearr_63280_63350[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (9))){
var inst_63110 = (state_63218[(2)]);
var state_63218__$1 = state_63218;
var statearr_63281_63351 = state_63218__$1;
(statearr_63281_63351[(2)] = inst_63110);

(statearr_63281_63351[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (5))){
var inst_63080 = (state_63218[(9)]);
var inst_63081 = (state_63218[(10)]);
var inst_63083 = (inst_63081 < inst_63080);
var inst_63084 = inst_63083;
var state_63218__$1 = state_63218;
if(cljs.core.truth_(inst_63084)){
var statearr_63282_63352 = state_63218__$1;
(statearr_63282_63352[(1)] = (7));

} else {
var statearr_63283_63353 = state_63218__$1;
(statearr_63283_63353[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (14))){
var inst_63091 = (state_63218[(22)]);
var inst_63100 = cljs.core.first.call(null,inst_63091);
var inst_63101 = figwheel.client.file_reloading.eval_body.call(null,inst_63100,opts);
var inst_63102 = cljs.core.next.call(null,inst_63091);
var inst_63078 = inst_63102;
var inst_63079 = null;
var inst_63080 = (0);
var inst_63081 = (0);
var state_63218__$1 = (function (){var statearr_63284 = state_63218;
(statearr_63284[(7)] = inst_63078);

(statearr_63284[(8)] = inst_63079);

(statearr_63284[(32)] = inst_63101);

(statearr_63284[(9)] = inst_63080);

(statearr_63284[(10)] = inst_63081);

return statearr_63284;
})();
var statearr_63285_63354 = state_63218__$1;
(statearr_63285_63354[(2)] = null);

(statearr_63285_63354[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (45))){
var state_63218__$1 = state_63218;
var statearr_63286_63355 = state_63218__$1;
(statearr_63286_63355[(2)] = null);

(statearr_63286_63355[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (26))){
var inst_63137 = (state_63218[(26)]);
var inst_63134 = (state_63218[(23)]);
var inst_63131 = (state_63218[(19)]);
var inst_63139 = (state_63218[(24)]);
var inst_63135 = (state_63218[(25)]);
var inst_63154 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_63156 = (function (){var all_files = inst_63131;
var res_SINGLEQUOTE_ = inst_63134;
var res = inst_63135;
var files_not_loaded = inst_63137;
var dependencies_that_loaded = inst_63139;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63137,inst_63134,inst_63131,inst_63139,inst_63135,inst_63154,state_val_63219,c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__63155){
var map__63287 = p__63155;
var map__63287__$1 = ((((!((map__63287 == null)))?((((map__63287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63287):map__63287);
var namespace = cljs.core.get.call(null,map__63287__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__63287__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63137,inst_63134,inst_63131,inst_63139,inst_63135,inst_63154,state_val_63219,c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63157 = cljs.core.map.call(null,inst_63156,inst_63135);
var inst_63158 = cljs.core.pr_str.call(null,inst_63157);
var inst_63159 = figwheel.client.utils.log.call(null,inst_63158);
var inst_63160 = (function (){var all_files = inst_63131;
var res_SINGLEQUOTE_ = inst_63134;
var res = inst_63135;
var files_not_loaded = inst_63137;
var dependencies_that_loaded = inst_63139;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63137,inst_63134,inst_63131,inst_63139,inst_63135,inst_63154,inst_63156,inst_63157,inst_63158,inst_63159,state_val_63219,c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_63137,inst_63134,inst_63131,inst_63139,inst_63135,inst_63154,inst_63156,inst_63157,inst_63158,inst_63159,state_val_63219,c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_63161 = setTimeout(inst_63160,(10));
var state_63218__$1 = (function (){var statearr_63289 = state_63218;
(statearr_63289[(33)] = inst_63159);

(statearr_63289[(34)] = inst_63154);

return statearr_63289;
})();
var statearr_63290_63356 = state_63218__$1;
(statearr_63290_63356[(2)] = inst_63161);

(statearr_63290_63356[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (16))){
var state_63218__$1 = state_63218;
var statearr_63291_63357 = state_63218__$1;
(statearr_63291_63357[(2)] = reload_dependents);

(statearr_63291_63357[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (38))){
var inst_63171 = (state_63218[(16)]);
var inst_63189 = cljs.core.apply.call(null,cljs.core.hash_map,inst_63171);
var state_63218__$1 = state_63218;
var statearr_63292_63358 = state_63218__$1;
(statearr_63292_63358[(2)] = inst_63189);

(statearr_63292_63358[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (30))){
var state_63218__$1 = state_63218;
var statearr_63293_63359 = state_63218__$1;
(statearr_63293_63359[(2)] = null);

(statearr_63293_63359[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (10))){
var inst_63091 = (state_63218[(22)]);
var inst_63093 = cljs.core.chunked_seq_QMARK_.call(null,inst_63091);
var state_63218__$1 = state_63218;
if(inst_63093){
var statearr_63294_63360 = state_63218__$1;
(statearr_63294_63360[(1)] = (13));

} else {
var statearr_63295_63361 = state_63218__$1;
(statearr_63295_63361[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (18))){
var inst_63125 = (state_63218[(2)]);
var state_63218__$1 = state_63218;
if(cljs.core.truth_(inst_63125)){
var statearr_63296_63362 = state_63218__$1;
(statearr_63296_63362[(1)] = (19));

} else {
var statearr_63297_63363 = state_63218__$1;
(statearr_63297_63363[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (42))){
var state_63218__$1 = state_63218;
var statearr_63298_63364 = state_63218__$1;
(statearr_63298_63364[(2)] = null);

(statearr_63298_63364[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (37))){
var inst_63184 = (state_63218[(2)]);
var state_63218__$1 = state_63218;
var statearr_63299_63365 = state_63218__$1;
(statearr_63299_63365[(2)] = inst_63184);

(statearr_63299_63365[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63219 === (8))){
var inst_63078 = (state_63218[(7)]);
var inst_63091 = (state_63218[(22)]);
var inst_63091__$1 = cljs.core.seq.call(null,inst_63078);
var state_63218__$1 = (function (){var statearr_63300 = state_63218;
(statearr_63300[(22)] = inst_63091__$1);

return statearr_63300;
})();
if(inst_63091__$1){
var statearr_63301_63366 = state_63218__$1;
(statearr_63301_63366[(1)] = (10));

} else {
var statearr_63302_63367 = state_63218__$1;
(statearr_63302_63367[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__40521__auto__,c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40522__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40522__auto____0 = (function (){
var statearr_63306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63306[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__40522__auto__);

(statearr_63306[(1)] = (1));

return statearr_63306;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__40522__auto____1 = (function (state_63218){
while(true){
var ret_value__40523__auto__ = (function (){try{while(true){
var result__40524__auto__ = switch__40521__auto__.call(null,state_63218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__40524__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40524__auto__;
}
break;
}
}catch (e63307){if((e63307 instanceof Object)){
var ex__40525__auto__ = e63307;
var statearr_63308_63368 = state_63218;
(statearr_63308_63368[(5)] = ex__40525__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__40523__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63369 = state_63218;
state_63218 = G__63369;
continue;
} else {
return ret_value__40523__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__40522__auto__ = function(state_63218){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40522__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40522__auto____1.call(this,state_63218);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40522__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__40522__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__40522__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__40522__auto__;
})()
;})(switch__40521__auto__,c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__40637__auto__ = (function (){var statearr_63309 = f__40636__auto__.call(null);
(statearr_63309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__40635__auto__);

return statearr_63309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__40637__auto__);
});})(c__40635__auto__,map__63063,map__63063__$1,opts,before_jsload,on_jsload,reload_dependents,map__63064,map__63064__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__40635__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__63372,link){
var map__63375 = p__63372;
var map__63375__$1 = ((((!((map__63375 == null)))?((((map__63375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63375.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63375):map__63375);
var file = cljs.core.get.call(null,map__63375__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__6738__auto__ = link.href;
if(cljs.core.truth_(temp__6738__auto__)){
var link_href = temp__6738__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__6738__auto__,map__63375,map__63375__$1,file){
return (function (p1__63370_SHARP_,p2__63371_SHARP_){
if(cljs.core._EQ_.call(null,p1__63370_SHARP_,p2__63371_SHARP_)){
return p1__63370_SHARP_;
} else {
return false;
}
});})(link_href,temp__6738__auto__,map__63375,map__63375__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__6738__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__63381){
var map__63382 = p__63381;
var map__63382__$1 = ((((!((map__63382 == null)))?((((map__63382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63382.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63382):map__63382);
var match_length = cljs.core.get.call(null,map__63382__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__63382__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__63377_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__63377_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__6738__auto__)){
var res = temp__6738__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__63384_SHARP_,p2__63385_SHARP_){
return cljs.core.assoc.call(null,p1__63384_SHARP_,cljs.core.get.call(null,p2__63385_SHARP_,key),p2__63385_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__6736__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__6736__auto__)){
var link = temp__6736__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__6736__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__6736__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_63386 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_63386);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_63386);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__63387,p__63388){
var map__63393 = p__63387;
var map__63393__$1 = ((((!((map__63393 == null)))?((((map__63393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63393.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63393):map__63393);
var on_cssload = cljs.core.get.call(null,map__63393__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__63394 = p__63388;
var map__63394__$1 = ((((!((map__63394 == null)))?((((map__63394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63394.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63394):map__63394);
var files_msg = map__63394__$1;
var files = cljs.core.get.call(null,map__63394__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__6738__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__6738__auto__)){
var f_datas = temp__6738__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map