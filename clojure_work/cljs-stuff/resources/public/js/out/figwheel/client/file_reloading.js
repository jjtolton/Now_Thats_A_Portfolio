// Compiled by ClojureScript 1.9.229 {}
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
var or__6409__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__6409__auto__){
return or__6409__auto__;
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
var or__6409__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__15314_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__15314_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
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
var seq__15319 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__15320 = null;
var count__15321 = (0);
var i__15322 = (0);
while(true){
if((i__15322 < count__15321)){
var n = cljs.core._nth.call(null,chunk__15320,i__15322);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__15323 = seq__15319;
var G__15324 = chunk__15320;
var G__15325 = count__15321;
var G__15326 = (i__15322 + (1));
seq__15319 = G__15323;
chunk__15320 = G__15324;
count__15321 = G__15325;
i__15322 = G__15326;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15319);
if(temp__4657__auto__){
var seq__15319__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15319__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__15319__$1);
var G__15327 = cljs.core.chunk_rest.call(null,seq__15319__$1);
var G__15328 = c__7220__auto__;
var G__15329 = cljs.core.count.call(null,c__7220__auto__);
var G__15330 = (0);
seq__15319 = G__15327;
chunk__15320 = G__15328;
count__15321 = G__15329;
i__15322 = G__15330;
continue;
} else {
var n = cljs.core.first.call(null,seq__15319__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__15331 = cljs.core.next.call(null,seq__15319__$1);
var G__15332 = null;
var G__15333 = (0);
var G__15334 = (0);
seq__15319 = G__15331;
chunk__15320 = G__15332;
count__15321 = G__15333;
i__15322 = G__15334;
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

var seq__15385_15396 = cljs.core.seq.call(null,deps);
var chunk__15386_15397 = null;
var count__15387_15398 = (0);
var i__15388_15399 = (0);
while(true){
if((i__15388_15399 < count__15387_15398)){
var dep_15400 = cljs.core._nth.call(null,chunk__15386_15397,i__15388_15399);
topo_sort_helper_STAR_.call(null,dep_15400,(depth + (1)),state);

var G__15401 = seq__15385_15396;
var G__15402 = chunk__15386_15397;
var G__15403 = count__15387_15398;
var G__15404 = (i__15388_15399 + (1));
seq__15385_15396 = G__15401;
chunk__15386_15397 = G__15402;
count__15387_15398 = G__15403;
i__15388_15399 = G__15404;
continue;
} else {
var temp__4657__auto___15405 = cljs.core.seq.call(null,seq__15385_15396);
if(temp__4657__auto___15405){
var seq__15385_15406__$1 = temp__4657__auto___15405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15385_15406__$1)){
var c__7220__auto___15407 = cljs.core.chunk_first.call(null,seq__15385_15406__$1);
var G__15408 = cljs.core.chunk_rest.call(null,seq__15385_15406__$1);
var G__15409 = c__7220__auto___15407;
var G__15410 = cljs.core.count.call(null,c__7220__auto___15407);
var G__15411 = (0);
seq__15385_15396 = G__15408;
chunk__15386_15397 = G__15409;
count__15387_15398 = G__15410;
i__15388_15399 = G__15411;
continue;
} else {
var dep_15412 = cljs.core.first.call(null,seq__15385_15406__$1);
topo_sort_helper_STAR_.call(null,dep_15412,(depth + (1)),state);

var G__15413 = cljs.core.next.call(null,seq__15385_15406__$1);
var G__15414 = null;
var G__15415 = (0);
var G__15416 = (0);
seq__15385_15396 = G__15413;
chunk__15386_15397 = G__15414;
count__15387_15398 = G__15415;
i__15388_15399 = G__15416;
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
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__15389){
var vec__15393 = p__15389;
var seq__15394 = cljs.core.seq.call(null,vec__15393);
var first__15395 = cljs.core.first.call(null,seq__15394);
var seq__15394__$1 = cljs.core.next.call(null,seq__15394);
var x = first__15395;
var xs = seq__15394__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__15393,seq__15394,first__15395,seq__15394__$1,x,xs,get_deps__$1){
return (function (p1__15335_SHARP_){
return clojure.set.difference.call(null,p1__15335_SHARP_,x);
});})(vec__15393,seq__15394,first__15395,seq__15394__$1,x,xs,get_deps__$1))
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

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__15429 = cljs.core.seq.call(null,provides);
var chunk__15430 = null;
var count__15431 = (0);
var i__15432 = (0);
while(true){
if((i__15432 < count__15431)){
var prov = cljs.core._nth.call(null,chunk__15430,i__15432);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__15433_15441 = cljs.core.seq.call(null,requires);
var chunk__15434_15442 = null;
var count__15435_15443 = (0);
var i__15436_15444 = (0);
while(true){
if((i__15436_15444 < count__15435_15443)){
var req_15445 = cljs.core._nth.call(null,chunk__15434_15442,i__15436_15444);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_15445,prov);

var G__15446 = seq__15433_15441;
var G__15447 = chunk__15434_15442;
var G__15448 = count__15435_15443;
var G__15449 = (i__15436_15444 + (1));
seq__15433_15441 = G__15446;
chunk__15434_15442 = G__15447;
count__15435_15443 = G__15448;
i__15436_15444 = G__15449;
continue;
} else {
var temp__4657__auto___15450 = cljs.core.seq.call(null,seq__15433_15441);
if(temp__4657__auto___15450){
var seq__15433_15451__$1 = temp__4657__auto___15450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15433_15451__$1)){
var c__7220__auto___15452 = cljs.core.chunk_first.call(null,seq__15433_15451__$1);
var G__15453 = cljs.core.chunk_rest.call(null,seq__15433_15451__$1);
var G__15454 = c__7220__auto___15452;
var G__15455 = cljs.core.count.call(null,c__7220__auto___15452);
var G__15456 = (0);
seq__15433_15441 = G__15453;
chunk__15434_15442 = G__15454;
count__15435_15443 = G__15455;
i__15436_15444 = G__15456;
continue;
} else {
var req_15457 = cljs.core.first.call(null,seq__15433_15451__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_15457,prov);

var G__15458 = cljs.core.next.call(null,seq__15433_15451__$1);
var G__15459 = null;
var G__15460 = (0);
var G__15461 = (0);
seq__15433_15441 = G__15458;
chunk__15434_15442 = G__15459;
count__15435_15443 = G__15460;
i__15436_15444 = G__15461;
continue;
}
} else {
}
}
break;
}

var G__15462 = seq__15429;
var G__15463 = chunk__15430;
var G__15464 = count__15431;
var G__15465 = (i__15432 + (1));
seq__15429 = G__15462;
chunk__15430 = G__15463;
count__15431 = G__15464;
i__15432 = G__15465;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__15429);
if(temp__4657__auto__){
var seq__15429__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15429__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__15429__$1);
var G__15466 = cljs.core.chunk_rest.call(null,seq__15429__$1);
var G__15467 = c__7220__auto__;
var G__15468 = cljs.core.count.call(null,c__7220__auto__);
var G__15469 = (0);
seq__15429 = G__15466;
chunk__15430 = G__15467;
count__15431 = G__15468;
i__15432 = G__15469;
continue;
} else {
var prov = cljs.core.first.call(null,seq__15429__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__15437_15470 = cljs.core.seq.call(null,requires);
var chunk__15438_15471 = null;
var count__15439_15472 = (0);
var i__15440_15473 = (0);
while(true){
if((i__15440_15473 < count__15439_15472)){
var req_15474 = cljs.core._nth.call(null,chunk__15438_15471,i__15440_15473);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_15474,prov);

var G__15475 = seq__15437_15470;
var G__15476 = chunk__15438_15471;
var G__15477 = count__15439_15472;
var G__15478 = (i__15440_15473 + (1));
seq__15437_15470 = G__15475;
chunk__15438_15471 = G__15476;
count__15439_15472 = G__15477;
i__15440_15473 = G__15478;
continue;
} else {
var temp__4657__auto___15479__$1 = cljs.core.seq.call(null,seq__15437_15470);
if(temp__4657__auto___15479__$1){
var seq__15437_15480__$1 = temp__4657__auto___15479__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15437_15480__$1)){
var c__7220__auto___15481 = cljs.core.chunk_first.call(null,seq__15437_15480__$1);
var G__15482 = cljs.core.chunk_rest.call(null,seq__15437_15480__$1);
var G__15483 = c__7220__auto___15481;
var G__15484 = cljs.core.count.call(null,c__7220__auto___15481);
var G__15485 = (0);
seq__15437_15470 = G__15482;
chunk__15438_15471 = G__15483;
count__15439_15472 = G__15484;
i__15440_15473 = G__15485;
continue;
} else {
var req_15486 = cljs.core.first.call(null,seq__15437_15480__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_15486,prov);

var G__15487 = cljs.core.next.call(null,seq__15437_15480__$1);
var G__15488 = null;
var G__15489 = (0);
var G__15490 = (0);
seq__15437_15470 = G__15487;
chunk__15438_15471 = G__15488;
count__15439_15472 = G__15489;
i__15440_15473 = G__15490;
continue;
}
} else {
}
}
break;
}

var G__15491 = cljs.core.next.call(null,seq__15429__$1);
var G__15492 = null;
var G__15493 = (0);
var G__15494 = (0);
seq__15429 = G__15491;
chunk__15430 = G__15492;
count__15431 = G__15493;
i__15432 = G__15494;
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

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__15499_15503 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__15500_15504 = null;
var count__15501_15505 = (0);
var i__15502_15506 = (0);
while(true){
if((i__15502_15506 < count__15501_15505)){
var ns_15507 = cljs.core._nth.call(null,chunk__15500_15504,i__15502_15506);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_15507);

var G__15508 = seq__15499_15503;
var G__15509 = chunk__15500_15504;
var G__15510 = count__15501_15505;
var G__15511 = (i__15502_15506 + (1));
seq__15499_15503 = G__15508;
chunk__15500_15504 = G__15509;
count__15501_15505 = G__15510;
i__15502_15506 = G__15511;
continue;
} else {
var temp__4657__auto___15512 = cljs.core.seq.call(null,seq__15499_15503);
if(temp__4657__auto___15512){
var seq__15499_15513__$1 = temp__4657__auto___15512;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15499_15513__$1)){
var c__7220__auto___15514 = cljs.core.chunk_first.call(null,seq__15499_15513__$1);
var G__15515 = cljs.core.chunk_rest.call(null,seq__15499_15513__$1);
var G__15516 = c__7220__auto___15514;
var G__15517 = cljs.core.count.call(null,c__7220__auto___15514);
var G__15518 = (0);
seq__15499_15503 = G__15515;
chunk__15500_15504 = G__15516;
count__15501_15505 = G__15517;
i__15502_15506 = G__15518;
continue;
} else {
var ns_15519 = cljs.core.first.call(null,seq__15499_15513__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_15519);

var G__15520 = cljs.core.next.call(null,seq__15499_15513__$1);
var G__15521 = null;
var G__15522 = (0);
var G__15523 = (0);
seq__15499_15503 = G__15520;
chunk__15500_15504 = G__15521;
count__15501_15505 = G__15522;
i__15502_15506 = G__15523;
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

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__15524__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__15524 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15525__i = 0, G__15525__a = new Array(arguments.length -  0);
while (G__15525__i < G__15525__a.length) {G__15525__a[G__15525__i] = arguments[G__15525__i + 0]; ++G__15525__i;}
  args = new cljs.core.IndexedSeq(G__15525__a,0);
} 
return G__15524__delegate.call(this,args);};
G__15524.cljs$lang$maxFixedArity = 0;
G__15524.cljs$lang$applyTo = (function (arglist__15526){
var args = cljs.core.seq(arglist__15526);
return G__15524__delegate(args);
});
G__15524.cljs$core$IFn$_invoke$arity$variadic = G__15524__delegate;
return G__15524;
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
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__15527 = cljs.core._EQ_;
var expr__15528 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__15527.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__15528))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__15527,expr__15528){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__15527,expr__15528))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__15527,expr__15528){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e15530){if((e15530 instanceof Error)){
var e = e15530;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e15530;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__15527,expr__15528))
} else {
if(cljs.core.truth_(pred__15527.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__15528))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__15527.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__15528))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__15527.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__15528))){
return ((function (pred__15527,expr__15528){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e15531){if((e15531 instanceof Error)){
var e = e15531;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e15531;

}
}})());
});
;})(pred__15527,expr__15528))
} else {
return ((function (pred__15527,expr__15528){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__15527,expr__15528))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__15532,callback){
var map__15535 = p__15532;
var map__15535__$1 = ((((!((map__15535 == null)))?((((map__15535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15535):map__15535);
var file_msg = map__15535__$1;
var request_url = cljs.core.get.call(null,map__15535__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__15535,map__15535__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__15535,map__15535__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__9355__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto__){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto__){
return (function (state_15559){
var state_val_15560 = (state_15559[(1)]);
if((state_val_15560 === (7))){
var inst_15555 = (state_15559[(2)]);
var state_15559__$1 = state_15559;
var statearr_15561_15581 = state_15559__$1;
(statearr_15561_15581[(2)] = inst_15555);

(statearr_15561_15581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15560 === (1))){
var state_15559__$1 = state_15559;
var statearr_15562_15582 = state_15559__$1;
(statearr_15562_15582[(2)] = null);

(statearr_15562_15582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15560 === (4))){
var inst_15539 = (state_15559[(7)]);
var inst_15539__$1 = (state_15559[(2)]);
var state_15559__$1 = (function (){var statearr_15563 = state_15559;
(statearr_15563[(7)] = inst_15539__$1);

return statearr_15563;
})();
if(cljs.core.truth_(inst_15539__$1)){
var statearr_15564_15583 = state_15559__$1;
(statearr_15564_15583[(1)] = (5));

} else {
var statearr_15565_15584 = state_15559__$1;
(statearr_15565_15584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15560 === (6))){
var state_15559__$1 = state_15559;
var statearr_15566_15585 = state_15559__$1;
(statearr_15566_15585[(2)] = null);

(statearr_15566_15585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15560 === (3))){
var inst_15557 = (state_15559[(2)]);
var state_15559__$1 = state_15559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15559__$1,inst_15557);
} else {
if((state_val_15560 === (2))){
var state_15559__$1 = state_15559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15559__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_15560 === (11))){
var inst_15551 = (state_15559[(2)]);
var state_15559__$1 = (function (){var statearr_15567 = state_15559;
(statearr_15567[(8)] = inst_15551);

return statearr_15567;
})();
var statearr_15568_15586 = state_15559__$1;
(statearr_15568_15586[(2)] = null);

(statearr_15568_15586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15560 === (9))){
var inst_15545 = (state_15559[(9)]);
var inst_15543 = (state_15559[(10)]);
var inst_15547 = inst_15545.call(null,inst_15543);
var state_15559__$1 = state_15559;
var statearr_15569_15587 = state_15559__$1;
(statearr_15569_15587[(2)] = inst_15547);

(statearr_15569_15587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15560 === (5))){
var inst_15539 = (state_15559[(7)]);
var inst_15541 = figwheel.client.file_reloading.blocking_load.call(null,inst_15539);
var state_15559__$1 = state_15559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15559__$1,(8),inst_15541);
} else {
if((state_val_15560 === (10))){
var inst_15543 = (state_15559[(10)]);
var inst_15549 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_15543);
var state_15559__$1 = state_15559;
var statearr_15570_15588 = state_15559__$1;
(statearr_15570_15588[(2)] = inst_15549);

(statearr_15570_15588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15560 === (8))){
var inst_15545 = (state_15559[(9)]);
var inst_15539 = (state_15559[(7)]);
var inst_15543 = (state_15559[(2)]);
var inst_15544 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_15545__$1 = cljs.core.get.call(null,inst_15544,inst_15539);
var state_15559__$1 = (function (){var statearr_15571 = state_15559;
(statearr_15571[(9)] = inst_15545__$1);

(statearr_15571[(10)] = inst_15543);

return statearr_15571;
})();
if(cljs.core.truth_(inst_15545__$1)){
var statearr_15572_15589 = state_15559__$1;
(statearr_15572_15589[(1)] = (9));

} else {
var statearr_15573_15590 = state_15559__$1;
(statearr_15573_15590[(1)] = (10));

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
});})(c__9355__auto__))
;
return ((function (switch__9243__auto__,c__9355__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__9244__auto__ = null;
var figwheel$client$file_reloading$state_machine__9244__auto____0 = (function (){
var statearr_15577 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15577[(0)] = figwheel$client$file_reloading$state_machine__9244__auto__);

(statearr_15577[(1)] = (1));

return statearr_15577;
});
var figwheel$client$file_reloading$state_machine__9244__auto____1 = (function (state_15559){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_15559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e15578){if((e15578 instanceof Object)){
var ex__9247__auto__ = e15578;
var statearr_15579_15591 = state_15559;
(statearr_15579_15591[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15592 = state_15559;
state_15559 = G__15592;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__9244__auto__ = function(state_15559){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__9244__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__9244__auto____1.call(this,state_15559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__9244__auto____0;
figwheel$client$file_reloading$state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__9244__auto____1;
return figwheel$client$file_reloading$state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto__))
})();
var state__9357__auto__ = (function (){var statearr_15580 = f__9356__auto__.call(null);
(statearr_15580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto__);

return statearr_15580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto__))
);

return c__9355__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__15593,callback){
var map__15596 = p__15593;
var map__15596__$1 = ((((!((map__15596 == null)))?((((map__15596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15596):map__15596);
var file_msg = map__15596__$1;
var namespace = cljs.core.get.call(null,map__15596__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__15596,map__15596__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__15596,map__15596__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__15598){
var map__15601 = p__15598;
var map__15601__$1 = ((((!((map__15601 == null)))?((((map__15601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15601):map__15601);
var file_msg = map__15601__$1;
var namespace = cljs.core.get.call(null,map__15601__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__15603){
var map__15606 = p__15603;
var map__15606__$1 = ((((!((map__15606 == null)))?((((map__15606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15606):map__15606);
var file_msg = map__15606__$1;
var namespace = cljs.core.get.call(null,map__15606__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__6397__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__6397__auto__){
var or__6409__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
var or__6409__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__6409__auto____$1)){
return or__6409__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__6397__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__15608,callback){
var map__15611 = p__15608;
var map__15611__$1 = ((((!((map__15611 == null)))?((((map__15611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15611):map__15611);
var file_msg = map__15611__$1;
var request_url = cljs.core.get.call(null,map__15611__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__15611__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

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
var c__9355__auto___15715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto___15715,out){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto___15715,out){
return (function (state_15697){
var state_val_15698 = (state_15697[(1)]);
if((state_val_15698 === (1))){
var inst_15671 = cljs.core.seq.call(null,files);
var inst_15672 = cljs.core.first.call(null,inst_15671);
var inst_15673 = cljs.core.next.call(null,inst_15671);
var inst_15674 = files;
var state_15697__$1 = (function (){var statearr_15699 = state_15697;
(statearr_15699[(7)] = inst_15673);

(statearr_15699[(8)] = inst_15674);

(statearr_15699[(9)] = inst_15672);

return statearr_15699;
})();
var statearr_15700_15716 = state_15697__$1;
(statearr_15700_15716[(2)] = null);

(statearr_15700_15716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15698 === (2))){
var inst_15680 = (state_15697[(10)]);
var inst_15674 = (state_15697[(8)]);
var inst_15679 = cljs.core.seq.call(null,inst_15674);
var inst_15680__$1 = cljs.core.first.call(null,inst_15679);
var inst_15681 = cljs.core.next.call(null,inst_15679);
var inst_15682 = (inst_15680__$1 == null);
var inst_15683 = cljs.core.not.call(null,inst_15682);
var state_15697__$1 = (function (){var statearr_15701 = state_15697;
(statearr_15701[(11)] = inst_15681);

(statearr_15701[(10)] = inst_15680__$1);

return statearr_15701;
})();
if(inst_15683){
var statearr_15702_15717 = state_15697__$1;
(statearr_15702_15717[(1)] = (4));

} else {
var statearr_15703_15718 = state_15697__$1;
(statearr_15703_15718[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15698 === (3))){
var inst_15695 = (state_15697[(2)]);
var state_15697__$1 = state_15697;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15697__$1,inst_15695);
} else {
if((state_val_15698 === (4))){
var inst_15680 = (state_15697[(10)]);
var inst_15685 = figwheel.client.file_reloading.reload_js_file.call(null,inst_15680);
var state_15697__$1 = state_15697;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15697__$1,(7),inst_15685);
} else {
if((state_val_15698 === (5))){
var inst_15691 = cljs.core.async.close_BANG_.call(null,out);
var state_15697__$1 = state_15697;
var statearr_15704_15719 = state_15697__$1;
(statearr_15704_15719[(2)] = inst_15691);

(statearr_15704_15719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15698 === (6))){
var inst_15693 = (state_15697[(2)]);
var state_15697__$1 = state_15697;
var statearr_15705_15720 = state_15697__$1;
(statearr_15705_15720[(2)] = inst_15693);

(statearr_15705_15720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15698 === (7))){
var inst_15681 = (state_15697[(11)]);
var inst_15687 = (state_15697[(2)]);
var inst_15688 = cljs.core.async.put_BANG_.call(null,out,inst_15687);
var inst_15674 = inst_15681;
var state_15697__$1 = (function (){var statearr_15706 = state_15697;
(statearr_15706[(12)] = inst_15688);

(statearr_15706[(8)] = inst_15674);

return statearr_15706;
})();
var statearr_15707_15721 = state_15697__$1;
(statearr_15707_15721[(2)] = null);

(statearr_15707_15721[(1)] = (2));


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
});})(c__9355__auto___15715,out))
;
return ((function (switch__9243__auto__,c__9355__auto___15715,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__9244__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__9244__auto____0 = (function (){
var statearr_15711 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15711[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__9244__auto__);

(statearr_15711[(1)] = (1));

return statearr_15711;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__9244__auto____1 = (function (state_15697){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_15697);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e15712){if((e15712 instanceof Object)){
var ex__9247__auto__ = e15712;
var statearr_15713_15722 = state_15697;
(statearr_15713_15722[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15723 = state_15697;
state_15697 = G__15723;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__9244__auto__ = function(state_15697){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__9244__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__9244__auto____1.call(this,state_15697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__9244__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__9244__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto___15715,out))
})();
var state__9357__auto__ = (function (){var statearr_15714 = f__9356__auto__.call(null);
(statearr_15714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto___15715);

return statearr_15714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto___15715,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__15724,opts){
var map__15728 = p__15724;
var map__15728__$1 = ((((!((map__15728 == null)))?((((map__15728.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15728.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15728):map__15728);
var eval_body__$1 = cljs.core.get.call(null,map__15728__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__15728__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__6397__auto__ = eval_body__$1;
if(cljs.core.truth_(and__6397__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__6397__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e15730){var e = e15730;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__15731_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__15731_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
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
return cljs.core.map.call(null,(function (p__15740){
var vec__15741 = p__15740;
var k = cljs.core.nth.call(null,vec__15741,(0),null);
var v = cljs.core.nth.call(null,vec__15741,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__15744){
var vec__15745 = p__15744;
var k = cljs.core.nth.call(null,vec__15745,(0),null);
var v = cljs.core.nth.call(null,vec__15745,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__15751,p__15752){
var map__15999 = p__15751;
var map__15999__$1 = ((((!((map__15999 == null)))?((((map__15999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15999):map__15999);
var opts = map__15999__$1;
var before_jsload = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__15999__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__16000 = p__15752;
var map__16000__$1 = ((((!((map__16000 == null)))?((((map__16000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16000):map__16000);
var msg = map__16000__$1;
var files = cljs.core.get.call(null,map__16000__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__16000__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__16000__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__9355__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__9356__auto__ = (function (){var switch__9243__auto__ = ((function (c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_16153){
var state_val_16154 = (state_16153[(1)]);
if((state_val_16154 === (7))){
var inst_16016 = (state_16153[(7)]);
var inst_16017 = (state_16153[(8)]);
var inst_16014 = (state_16153[(9)]);
var inst_16015 = (state_16153[(10)]);
var inst_16022 = cljs.core._nth.call(null,inst_16015,inst_16017);
var inst_16023 = figwheel.client.file_reloading.eval_body.call(null,inst_16022,opts);
var inst_16024 = (inst_16017 + (1));
var tmp16155 = inst_16016;
var tmp16156 = inst_16014;
var tmp16157 = inst_16015;
var inst_16014__$1 = tmp16156;
var inst_16015__$1 = tmp16157;
var inst_16016__$1 = tmp16155;
var inst_16017__$1 = inst_16024;
var state_16153__$1 = (function (){var statearr_16158 = state_16153;
(statearr_16158[(7)] = inst_16016__$1);

(statearr_16158[(8)] = inst_16017__$1);

(statearr_16158[(11)] = inst_16023);

(statearr_16158[(9)] = inst_16014__$1);

(statearr_16158[(10)] = inst_16015__$1);

return statearr_16158;
})();
var statearr_16159_16245 = state_16153__$1;
(statearr_16159_16245[(2)] = null);

(statearr_16159_16245[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (20))){
var inst_16057 = (state_16153[(12)]);
var inst_16065 = figwheel.client.file_reloading.sort_files.call(null,inst_16057);
var state_16153__$1 = state_16153;
var statearr_16160_16246 = state_16153__$1;
(statearr_16160_16246[(2)] = inst_16065);

(statearr_16160_16246[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (27))){
var state_16153__$1 = state_16153;
var statearr_16161_16247 = state_16153__$1;
(statearr_16161_16247[(2)] = null);

(statearr_16161_16247[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (1))){
var inst_16006 = (state_16153[(13)]);
var inst_16003 = before_jsload.call(null,files);
var inst_16004 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_16005 = (function (){return ((function (inst_16006,inst_16003,inst_16004,state_val_16154,c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__15748_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__15748_SHARP_);
});
;})(inst_16006,inst_16003,inst_16004,state_val_16154,c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_16006__$1 = cljs.core.filter.call(null,inst_16005,files);
var inst_16007 = cljs.core.not_empty.call(null,inst_16006__$1);
var state_16153__$1 = (function (){var statearr_16162 = state_16153;
(statearr_16162[(14)] = inst_16004);

(statearr_16162[(15)] = inst_16003);

(statearr_16162[(13)] = inst_16006__$1);

return statearr_16162;
})();
if(cljs.core.truth_(inst_16007)){
var statearr_16163_16248 = state_16153__$1;
(statearr_16163_16248[(1)] = (2));

} else {
var statearr_16164_16249 = state_16153__$1;
(statearr_16164_16249[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (24))){
var state_16153__$1 = state_16153;
var statearr_16165_16250 = state_16153__$1;
(statearr_16165_16250[(2)] = null);

(statearr_16165_16250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (39))){
var inst_16107 = (state_16153[(16)]);
var state_16153__$1 = state_16153;
var statearr_16166_16251 = state_16153__$1;
(statearr_16166_16251[(2)] = inst_16107);

(statearr_16166_16251[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (46))){
var inst_16148 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
var statearr_16167_16252 = state_16153__$1;
(statearr_16167_16252[(2)] = inst_16148);

(statearr_16167_16252[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (4))){
var inst_16051 = (state_16153[(2)]);
var inst_16052 = cljs.core.List.EMPTY;
var inst_16053 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_16052);
var inst_16054 = (function (){return ((function (inst_16051,inst_16052,inst_16053,state_val_16154,c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__15749_SHARP_){
var and__6397__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__15749_SHARP_);
if(cljs.core.truth_(and__6397__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__15749_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__15749_SHARP_)));
} else {
return and__6397__auto__;
}
});
;})(inst_16051,inst_16052,inst_16053,state_val_16154,c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_16055 = cljs.core.filter.call(null,inst_16054,files);
var inst_16056 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_16057 = cljs.core.concat.call(null,inst_16055,inst_16056);
var state_16153__$1 = (function (){var statearr_16168 = state_16153;
(statearr_16168[(12)] = inst_16057);

(statearr_16168[(17)] = inst_16053);

(statearr_16168[(18)] = inst_16051);

return statearr_16168;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_16169_16253 = state_16153__$1;
(statearr_16169_16253[(1)] = (16));

} else {
var statearr_16170_16254 = state_16153__$1;
(statearr_16170_16254[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (15))){
var inst_16041 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
var statearr_16171_16255 = state_16153__$1;
(statearr_16171_16255[(2)] = inst_16041);

(statearr_16171_16255[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (21))){
var inst_16067 = (state_16153[(19)]);
var inst_16067__$1 = (state_16153[(2)]);
var inst_16068 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_16067__$1);
var state_16153__$1 = (function (){var statearr_16172 = state_16153;
(statearr_16172[(19)] = inst_16067__$1);

return statearr_16172;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16153__$1,(22),inst_16068);
} else {
if((state_val_16154 === (31))){
var inst_16151 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16153__$1,inst_16151);
} else {
if((state_val_16154 === (32))){
var inst_16107 = (state_16153[(16)]);
var inst_16112 = inst_16107.cljs$lang$protocol_mask$partition0$;
var inst_16113 = (inst_16112 & (64));
var inst_16114 = inst_16107.cljs$core$ISeq$;
var inst_16115 = (inst_16113) || (inst_16114);
var state_16153__$1 = state_16153;
if(cljs.core.truth_(inst_16115)){
var statearr_16173_16256 = state_16153__$1;
(statearr_16173_16256[(1)] = (35));

} else {
var statearr_16174_16257 = state_16153__$1;
(statearr_16174_16257[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (40))){
var inst_16128 = (state_16153[(20)]);
var inst_16127 = (state_16153[(2)]);
var inst_16128__$1 = cljs.core.get.call(null,inst_16127,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_16129 = cljs.core.get.call(null,inst_16127,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_16130 = cljs.core.not_empty.call(null,inst_16128__$1);
var state_16153__$1 = (function (){var statearr_16175 = state_16153;
(statearr_16175[(20)] = inst_16128__$1);

(statearr_16175[(21)] = inst_16129);

return statearr_16175;
})();
if(cljs.core.truth_(inst_16130)){
var statearr_16176_16258 = state_16153__$1;
(statearr_16176_16258[(1)] = (41));

} else {
var statearr_16177_16259 = state_16153__$1;
(statearr_16177_16259[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (33))){
var state_16153__$1 = state_16153;
var statearr_16178_16260 = state_16153__$1;
(statearr_16178_16260[(2)] = false);

(statearr_16178_16260[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (13))){
var inst_16027 = (state_16153[(22)]);
var inst_16031 = cljs.core.chunk_first.call(null,inst_16027);
var inst_16032 = cljs.core.chunk_rest.call(null,inst_16027);
var inst_16033 = cljs.core.count.call(null,inst_16031);
var inst_16014 = inst_16032;
var inst_16015 = inst_16031;
var inst_16016 = inst_16033;
var inst_16017 = (0);
var state_16153__$1 = (function (){var statearr_16179 = state_16153;
(statearr_16179[(7)] = inst_16016);

(statearr_16179[(8)] = inst_16017);

(statearr_16179[(9)] = inst_16014);

(statearr_16179[(10)] = inst_16015);

return statearr_16179;
})();
var statearr_16180_16261 = state_16153__$1;
(statearr_16180_16261[(2)] = null);

(statearr_16180_16261[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (22))){
var inst_16071 = (state_16153[(23)]);
var inst_16070 = (state_16153[(24)]);
var inst_16075 = (state_16153[(25)]);
var inst_16067 = (state_16153[(19)]);
var inst_16070__$1 = (state_16153[(2)]);
var inst_16071__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_16070__$1);
var inst_16072 = (function (){var all_files = inst_16067;
var res_SINGLEQUOTE_ = inst_16070__$1;
var res = inst_16071__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_16071,inst_16070,inst_16075,inst_16067,inst_16070__$1,inst_16071__$1,state_val_16154,c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__15750_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__15750_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_16071,inst_16070,inst_16075,inst_16067,inst_16070__$1,inst_16071__$1,state_val_16154,c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_16073 = cljs.core.filter.call(null,inst_16072,inst_16070__$1);
var inst_16074 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_16075__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_16074);
var inst_16076 = cljs.core.not_empty.call(null,inst_16075__$1);
var state_16153__$1 = (function (){var statearr_16181 = state_16153;
(statearr_16181[(23)] = inst_16071__$1);

(statearr_16181[(24)] = inst_16070__$1);

(statearr_16181[(25)] = inst_16075__$1);

(statearr_16181[(26)] = inst_16073);

return statearr_16181;
})();
if(cljs.core.truth_(inst_16076)){
var statearr_16182_16262 = state_16153__$1;
(statearr_16182_16262[(1)] = (23));

} else {
var statearr_16183_16263 = state_16153__$1;
(statearr_16183_16263[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (36))){
var state_16153__$1 = state_16153;
var statearr_16184_16264 = state_16153__$1;
(statearr_16184_16264[(2)] = false);

(statearr_16184_16264[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (41))){
var inst_16128 = (state_16153[(20)]);
var inst_16132 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_16133 = cljs.core.map.call(null,inst_16132,inst_16128);
var inst_16134 = cljs.core.pr_str.call(null,inst_16133);
var inst_16135 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_16134)].join('');
var inst_16136 = figwheel.client.utils.log.call(null,inst_16135);
var state_16153__$1 = state_16153;
var statearr_16185_16265 = state_16153__$1;
(statearr_16185_16265[(2)] = inst_16136);

(statearr_16185_16265[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (43))){
var inst_16129 = (state_16153[(21)]);
var inst_16139 = (state_16153[(2)]);
var inst_16140 = cljs.core.not_empty.call(null,inst_16129);
var state_16153__$1 = (function (){var statearr_16186 = state_16153;
(statearr_16186[(27)] = inst_16139);

return statearr_16186;
})();
if(cljs.core.truth_(inst_16140)){
var statearr_16187_16266 = state_16153__$1;
(statearr_16187_16266[(1)] = (44));

} else {
var statearr_16188_16267 = state_16153__$1;
(statearr_16188_16267[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (29))){
var inst_16071 = (state_16153[(23)]);
var inst_16070 = (state_16153[(24)]);
var inst_16075 = (state_16153[(25)]);
var inst_16073 = (state_16153[(26)]);
var inst_16067 = (state_16153[(19)]);
var inst_16107 = (state_16153[(16)]);
var inst_16103 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_16106 = (function (){var all_files = inst_16067;
var res_SINGLEQUOTE_ = inst_16070;
var res = inst_16071;
var files_not_loaded = inst_16073;
var dependencies_that_loaded = inst_16075;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_16071,inst_16070,inst_16075,inst_16073,inst_16067,inst_16107,inst_16103,state_val_16154,c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__16105){
var map__16189 = p__16105;
var map__16189__$1 = ((((!((map__16189 == null)))?((((map__16189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16189):map__16189);
var namespace = cljs.core.get.call(null,map__16189__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_16071,inst_16070,inst_16075,inst_16073,inst_16067,inst_16107,inst_16103,state_val_16154,c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_16107__$1 = cljs.core.group_by.call(null,inst_16106,inst_16073);
var inst_16109 = (inst_16107__$1 == null);
var inst_16110 = cljs.core.not.call(null,inst_16109);
var state_16153__$1 = (function (){var statearr_16191 = state_16153;
(statearr_16191[(28)] = inst_16103);

(statearr_16191[(16)] = inst_16107__$1);

return statearr_16191;
})();
if(inst_16110){
var statearr_16192_16268 = state_16153__$1;
(statearr_16192_16268[(1)] = (32));

} else {
var statearr_16193_16269 = state_16153__$1;
(statearr_16193_16269[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (44))){
var inst_16129 = (state_16153[(21)]);
var inst_16142 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_16129);
var inst_16143 = cljs.core.pr_str.call(null,inst_16142);
var inst_16144 = [cljs.core.str("not required: "),cljs.core.str(inst_16143)].join('');
var inst_16145 = figwheel.client.utils.log.call(null,inst_16144);
var state_16153__$1 = state_16153;
var statearr_16194_16270 = state_16153__$1;
(statearr_16194_16270[(2)] = inst_16145);

(statearr_16194_16270[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (6))){
var inst_16048 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
var statearr_16195_16271 = state_16153__$1;
(statearr_16195_16271[(2)] = inst_16048);

(statearr_16195_16271[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (28))){
var inst_16073 = (state_16153[(26)]);
var inst_16100 = (state_16153[(2)]);
var inst_16101 = cljs.core.not_empty.call(null,inst_16073);
var state_16153__$1 = (function (){var statearr_16196 = state_16153;
(statearr_16196[(29)] = inst_16100);

return statearr_16196;
})();
if(cljs.core.truth_(inst_16101)){
var statearr_16197_16272 = state_16153__$1;
(statearr_16197_16272[(1)] = (29));

} else {
var statearr_16198_16273 = state_16153__$1;
(statearr_16198_16273[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (25))){
var inst_16071 = (state_16153[(23)]);
var inst_16087 = (state_16153[(2)]);
var inst_16088 = cljs.core.not_empty.call(null,inst_16071);
var state_16153__$1 = (function (){var statearr_16199 = state_16153;
(statearr_16199[(30)] = inst_16087);

return statearr_16199;
})();
if(cljs.core.truth_(inst_16088)){
var statearr_16200_16274 = state_16153__$1;
(statearr_16200_16274[(1)] = (26));

} else {
var statearr_16201_16275 = state_16153__$1;
(statearr_16201_16275[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (34))){
var inst_16122 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
if(cljs.core.truth_(inst_16122)){
var statearr_16202_16276 = state_16153__$1;
(statearr_16202_16276[(1)] = (38));

} else {
var statearr_16203_16277 = state_16153__$1;
(statearr_16203_16277[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (17))){
var state_16153__$1 = state_16153;
var statearr_16204_16278 = state_16153__$1;
(statearr_16204_16278[(2)] = recompile_dependents);

(statearr_16204_16278[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (3))){
var state_16153__$1 = state_16153;
var statearr_16205_16279 = state_16153__$1;
(statearr_16205_16279[(2)] = null);

(statearr_16205_16279[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (12))){
var inst_16044 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
var statearr_16206_16280 = state_16153__$1;
(statearr_16206_16280[(2)] = inst_16044);

(statearr_16206_16280[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (2))){
var inst_16006 = (state_16153[(13)]);
var inst_16013 = cljs.core.seq.call(null,inst_16006);
var inst_16014 = inst_16013;
var inst_16015 = null;
var inst_16016 = (0);
var inst_16017 = (0);
var state_16153__$1 = (function (){var statearr_16207 = state_16153;
(statearr_16207[(7)] = inst_16016);

(statearr_16207[(8)] = inst_16017);

(statearr_16207[(9)] = inst_16014);

(statearr_16207[(10)] = inst_16015);

return statearr_16207;
})();
var statearr_16208_16281 = state_16153__$1;
(statearr_16208_16281[(2)] = null);

(statearr_16208_16281[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (23))){
var inst_16071 = (state_16153[(23)]);
var inst_16070 = (state_16153[(24)]);
var inst_16075 = (state_16153[(25)]);
var inst_16073 = (state_16153[(26)]);
var inst_16067 = (state_16153[(19)]);
var inst_16078 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_16080 = (function (){var all_files = inst_16067;
var res_SINGLEQUOTE_ = inst_16070;
var res = inst_16071;
var files_not_loaded = inst_16073;
var dependencies_that_loaded = inst_16075;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_16071,inst_16070,inst_16075,inst_16073,inst_16067,inst_16078,state_val_16154,c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__16079){
var map__16209 = p__16079;
var map__16209__$1 = ((((!((map__16209 == null)))?((((map__16209.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16209.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16209):map__16209);
var request_url = cljs.core.get.call(null,map__16209__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_16071,inst_16070,inst_16075,inst_16073,inst_16067,inst_16078,state_val_16154,c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_16081 = cljs.core.reverse.call(null,inst_16075);
var inst_16082 = cljs.core.map.call(null,inst_16080,inst_16081);
var inst_16083 = cljs.core.pr_str.call(null,inst_16082);
var inst_16084 = figwheel.client.utils.log.call(null,inst_16083);
var state_16153__$1 = (function (){var statearr_16211 = state_16153;
(statearr_16211[(31)] = inst_16078);

return statearr_16211;
})();
var statearr_16212_16282 = state_16153__$1;
(statearr_16212_16282[(2)] = inst_16084);

(statearr_16212_16282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (35))){
var state_16153__$1 = state_16153;
var statearr_16213_16283 = state_16153__$1;
(statearr_16213_16283[(2)] = true);

(statearr_16213_16283[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (19))){
var inst_16057 = (state_16153[(12)]);
var inst_16063 = figwheel.client.file_reloading.expand_files.call(null,inst_16057);
var state_16153__$1 = state_16153;
var statearr_16214_16284 = state_16153__$1;
(statearr_16214_16284[(2)] = inst_16063);

(statearr_16214_16284[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (11))){
var state_16153__$1 = state_16153;
var statearr_16215_16285 = state_16153__$1;
(statearr_16215_16285[(2)] = null);

(statearr_16215_16285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (9))){
var inst_16046 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
var statearr_16216_16286 = state_16153__$1;
(statearr_16216_16286[(2)] = inst_16046);

(statearr_16216_16286[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (5))){
var inst_16016 = (state_16153[(7)]);
var inst_16017 = (state_16153[(8)]);
var inst_16019 = (inst_16017 < inst_16016);
var inst_16020 = inst_16019;
var state_16153__$1 = state_16153;
if(cljs.core.truth_(inst_16020)){
var statearr_16217_16287 = state_16153__$1;
(statearr_16217_16287[(1)] = (7));

} else {
var statearr_16218_16288 = state_16153__$1;
(statearr_16218_16288[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (14))){
var inst_16027 = (state_16153[(22)]);
var inst_16036 = cljs.core.first.call(null,inst_16027);
var inst_16037 = figwheel.client.file_reloading.eval_body.call(null,inst_16036,opts);
var inst_16038 = cljs.core.next.call(null,inst_16027);
var inst_16014 = inst_16038;
var inst_16015 = null;
var inst_16016 = (0);
var inst_16017 = (0);
var state_16153__$1 = (function (){var statearr_16219 = state_16153;
(statearr_16219[(7)] = inst_16016);

(statearr_16219[(8)] = inst_16017);

(statearr_16219[(9)] = inst_16014);

(statearr_16219[(10)] = inst_16015);

(statearr_16219[(32)] = inst_16037);

return statearr_16219;
})();
var statearr_16220_16289 = state_16153__$1;
(statearr_16220_16289[(2)] = null);

(statearr_16220_16289[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (45))){
var state_16153__$1 = state_16153;
var statearr_16221_16290 = state_16153__$1;
(statearr_16221_16290[(2)] = null);

(statearr_16221_16290[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (26))){
var inst_16071 = (state_16153[(23)]);
var inst_16070 = (state_16153[(24)]);
var inst_16075 = (state_16153[(25)]);
var inst_16073 = (state_16153[(26)]);
var inst_16067 = (state_16153[(19)]);
var inst_16090 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_16092 = (function (){var all_files = inst_16067;
var res_SINGLEQUOTE_ = inst_16070;
var res = inst_16071;
var files_not_loaded = inst_16073;
var dependencies_that_loaded = inst_16075;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_16071,inst_16070,inst_16075,inst_16073,inst_16067,inst_16090,state_val_16154,c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__16091){
var map__16222 = p__16091;
var map__16222__$1 = ((((!((map__16222 == null)))?((((map__16222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16222):map__16222);
var namespace = cljs.core.get.call(null,map__16222__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__16222__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_16071,inst_16070,inst_16075,inst_16073,inst_16067,inst_16090,state_val_16154,c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_16093 = cljs.core.map.call(null,inst_16092,inst_16071);
var inst_16094 = cljs.core.pr_str.call(null,inst_16093);
var inst_16095 = figwheel.client.utils.log.call(null,inst_16094);
var inst_16096 = (function (){var all_files = inst_16067;
var res_SINGLEQUOTE_ = inst_16070;
var res = inst_16071;
var files_not_loaded = inst_16073;
var dependencies_that_loaded = inst_16075;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_16071,inst_16070,inst_16075,inst_16073,inst_16067,inst_16090,inst_16092,inst_16093,inst_16094,inst_16095,state_val_16154,c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_16071,inst_16070,inst_16075,inst_16073,inst_16067,inst_16090,inst_16092,inst_16093,inst_16094,inst_16095,state_val_16154,c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_16097 = setTimeout(inst_16096,(10));
var state_16153__$1 = (function (){var statearr_16224 = state_16153;
(statearr_16224[(33)] = inst_16095);

(statearr_16224[(34)] = inst_16090);

return statearr_16224;
})();
var statearr_16225_16291 = state_16153__$1;
(statearr_16225_16291[(2)] = inst_16097);

(statearr_16225_16291[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (16))){
var state_16153__$1 = state_16153;
var statearr_16226_16292 = state_16153__$1;
(statearr_16226_16292[(2)] = reload_dependents);

(statearr_16226_16292[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (38))){
var inst_16107 = (state_16153[(16)]);
var inst_16124 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16107);
var state_16153__$1 = state_16153;
var statearr_16227_16293 = state_16153__$1;
(statearr_16227_16293[(2)] = inst_16124);

(statearr_16227_16293[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (30))){
var state_16153__$1 = state_16153;
var statearr_16228_16294 = state_16153__$1;
(statearr_16228_16294[(2)] = null);

(statearr_16228_16294[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (10))){
var inst_16027 = (state_16153[(22)]);
var inst_16029 = cljs.core.chunked_seq_QMARK_.call(null,inst_16027);
var state_16153__$1 = state_16153;
if(inst_16029){
var statearr_16229_16295 = state_16153__$1;
(statearr_16229_16295[(1)] = (13));

} else {
var statearr_16230_16296 = state_16153__$1;
(statearr_16230_16296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (18))){
var inst_16061 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
if(cljs.core.truth_(inst_16061)){
var statearr_16231_16297 = state_16153__$1;
(statearr_16231_16297[(1)] = (19));

} else {
var statearr_16232_16298 = state_16153__$1;
(statearr_16232_16298[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (42))){
var state_16153__$1 = state_16153;
var statearr_16233_16299 = state_16153__$1;
(statearr_16233_16299[(2)] = null);

(statearr_16233_16299[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (37))){
var inst_16119 = (state_16153[(2)]);
var state_16153__$1 = state_16153;
var statearr_16234_16300 = state_16153__$1;
(statearr_16234_16300[(2)] = inst_16119);

(statearr_16234_16300[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16154 === (8))){
var inst_16027 = (state_16153[(22)]);
var inst_16014 = (state_16153[(9)]);
var inst_16027__$1 = cljs.core.seq.call(null,inst_16014);
var state_16153__$1 = (function (){var statearr_16235 = state_16153;
(statearr_16235[(22)] = inst_16027__$1);

return statearr_16235;
})();
if(inst_16027__$1){
var statearr_16236_16301 = state_16153__$1;
(statearr_16236_16301[(1)] = (10));

} else {
var statearr_16237_16302 = state_16153__$1;
(statearr_16237_16302[(1)] = (11));

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
});})(c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__9243__auto__,c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__9244__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__9244__auto____0 = (function (){
var statearr_16241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16241[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__9244__auto__);

(statearr_16241[(1)] = (1));

return statearr_16241;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__9244__auto____1 = (function (state_16153){
while(true){
var ret_value__9245__auto__ = (function (){try{while(true){
var result__9246__auto__ = switch__9243__auto__.call(null,state_16153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9246__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9246__auto__;
}
break;
}
}catch (e16242){if((e16242 instanceof Object)){
var ex__9247__auto__ = e16242;
var statearr_16243_16303 = state_16153;
(statearr_16243_16303[(5)] = ex__9247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9245__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16304 = state_16153;
state_16153 = G__16304;
continue;
} else {
return ret_value__9245__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__9244__auto__ = function(state_16153){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__9244__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__9244__auto____1.call(this,state_16153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__9244__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__9244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__9244__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__9244__auto__;
})()
;})(switch__9243__auto__,c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__9357__auto__ = (function (){var statearr_16244 = f__9356__auto__.call(null);
(statearr_16244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9355__auto__);

return statearr_16244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9357__auto__);
});})(c__9355__auto__,map__15999,map__15999__$1,opts,before_jsload,on_jsload,reload_dependents,map__16000,map__16000__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__9355__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__16307,link){
var map__16310 = p__16307;
var map__16310__$1 = ((((!((map__16310 == null)))?((((map__16310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16310):map__16310);
var file = cljs.core.get.call(null,map__16310__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__16310,map__16310__$1,file){
return (function (p1__16305_SHARP_,p2__16306_SHARP_){
if(cljs.core._EQ_.call(null,p1__16305_SHARP_,p2__16306_SHARP_)){
return p1__16305_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__16310,map__16310__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__16316){
var map__16317 = p__16316;
var map__16317__$1 = ((((!((map__16317 == null)))?((((map__16317.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16317.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16317):map__16317);
var match_length = cljs.core.get.call(null,map__16317__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__16317__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__16312_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__16312_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__16319_SHARP_,p2__16320_SHARP_){
return cljs.core.assoc.call(null,p1__16319_SHARP_,cljs.core.get.call(null,p2__16320_SHARP_,key),p2__16320_SHARP_);
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
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_16321 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_16321);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_16321);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__16322,p__16323){
var map__16328 = p__16322;
var map__16328__$1 = ((((!((map__16328 == null)))?((((map__16328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16328):map__16328);
var on_cssload = cljs.core.get.call(null,map__16328__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__16329 = p__16323;
var map__16329__$1 = ((((!((map__16329 == null)))?((((map__16329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16329):map__16329);
var files_msg = map__16329__$1;
var files = cljs.core.get.call(null,map__16329__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map