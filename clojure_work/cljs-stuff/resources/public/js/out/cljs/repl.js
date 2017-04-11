// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18309){
var map__18334 = p__18309;
var map__18334__$1 = ((((!((map__18334 == null)))?((((map__18334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18334):map__18334);
var m = map__18334__$1;
var n = cljs.core.get.call(null,map__18334__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18334__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18336_18358 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18337_18359 = null;
var count__18338_18360 = (0);
var i__18339_18361 = (0);
while(true){
if((i__18339_18361 < count__18338_18360)){
var f_18362 = cljs.core._nth.call(null,chunk__18337_18359,i__18339_18361);
cljs.core.println.call(null,"  ",f_18362);

var G__18363 = seq__18336_18358;
var G__18364 = chunk__18337_18359;
var G__18365 = count__18338_18360;
var G__18366 = (i__18339_18361 + (1));
seq__18336_18358 = G__18363;
chunk__18337_18359 = G__18364;
count__18338_18360 = G__18365;
i__18339_18361 = G__18366;
continue;
} else {
var temp__4657__auto___18367 = cljs.core.seq.call(null,seq__18336_18358);
if(temp__4657__auto___18367){
var seq__18336_18368__$1 = temp__4657__auto___18367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18336_18368__$1)){
var c__7220__auto___18369 = cljs.core.chunk_first.call(null,seq__18336_18368__$1);
var G__18370 = cljs.core.chunk_rest.call(null,seq__18336_18368__$1);
var G__18371 = c__7220__auto___18369;
var G__18372 = cljs.core.count.call(null,c__7220__auto___18369);
var G__18373 = (0);
seq__18336_18358 = G__18370;
chunk__18337_18359 = G__18371;
count__18338_18360 = G__18372;
i__18339_18361 = G__18373;
continue;
} else {
var f_18374 = cljs.core.first.call(null,seq__18336_18368__$1);
cljs.core.println.call(null,"  ",f_18374);

var G__18375 = cljs.core.next.call(null,seq__18336_18368__$1);
var G__18376 = null;
var G__18377 = (0);
var G__18378 = (0);
seq__18336_18358 = G__18375;
chunk__18337_18359 = G__18376;
count__18338_18360 = G__18377;
i__18339_18361 = G__18378;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18379 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6409__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18379);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18379)))?cljs.core.second.call(null,arglists_18379):arglists_18379));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18340_18380 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18341_18381 = null;
var count__18342_18382 = (0);
var i__18343_18383 = (0);
while(true){
if((i__18343_18383 < count__18342_18382)){
var vec__18344_18384 = cljs.core._nth.call(null,chunk__18341_18381,i__18343_18383);
var name_18385 = cljs.core.nth.call(null,vec__18344_18384,(0),null);
var map__18347_18386 = cljs.core.nth.call(null,vec__18344_18384,(1),null);
var map__18347_18387__$1 = ((((!((map__18347_18386 == null)))?((((map__18347_18386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18347_18386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18347_18386):map__18347_18386);
var doc_18388 = cljs.core.get.call(null,map__18347_18387__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18389 = cljs.core.get.call(null,map__18347_18387__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18385);

cljs.core.println.call(null," ",arglists_18389);

if(cljs.core.truth_(doc_18388)){
cljs.core.println.call(null," ",doc_18388);
} else {
}

var G__18390 = seq__18340_18380;
var G__18391 = chunk__18341_18381;
var G__18392 = count__18342_18382;
var G__18393 = (i__18343_18383 + (1));
seq__18340_18380 = G__18390;
chunk__18341_18381 = G__18391;
count__18342_18382 = G__18392;
i__18343_18383 = G__18393;
continue;
} else {
var temp__4657__auto___18394 = cljs.core.seq.call(null,seq__18340_18380);
if(temp__4657__auto___18394){
var seq__18340_18395__$1 = temp__4657__auto___18394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18340_18395__$1)){
var c__7220__auto___18396 = cljs.core.chunk_first.call(null,seq__18340_18395__$1);
var G__18397 = cljs.core.chunk_rest.call(null,seq__18340_18395__$1);
var G__18398 = c__7220__auto___18396;
var G__18399 = cljs.core.count.call(null,c__7220__auto___18396);
var G__18400 = (0);
seq__18340_18380 = G__18397;
chunk__18341_18381 = G__18398;
count__18342_18382 = G__18399;
i__18343_18383 = G__18400;
continue;
} else {
var vec__18349_18401 = cljs.core.first.call(null,seq__18340_18395__$1);
var name_18402 = cljs.core.nth.call(null,vec__18349_18401,(0),null);
var map__18352_18403 = cljs.core.nth.call(null,vec__18349_18401,(1),null);
var map__18352_18404__$1 = ((((!((map__18352_18403 == null)))?((((map__18352_18403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18352_18403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18352_18403):map__18352_18403);
var doc_18405 = cljs.core.get.call(null,map__18352_18404__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18406 = cljs.core.get.call(null,map__18352_18404__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18402);

cljs.core.println.call(null," ",arglists_18406);

if(cljs.core.truth_(doc_18405)){
cljs.core.println.call(null," ",doc_18405);
} else {
}

var G__18407 = cljs.core.next.call(null,seq__18340_18395__$1);
var G__18408 = null;
var G__18409 = (0);
var G__18410 = (0);
seq__18340_18380 = G__18407;
chunk__18341_18381 = G__18408;
count__18342_18382 = G__18409;
i__18343_18383 = G__18410;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__18354 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18355 = null;
var count__18356 = (0);
var i__18357 = (0);
while(true){
if((i__18357 < count__18356)){
var role = cljs.core._nth.call(null,chunk__18355,i__18357);
var temp__4657__auto___18411__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18411__$1)){
var spec_18412 = temp__4657__auto___18411__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_18412));
} else {
}

var G__18413 = seq__18354;
var G__18414 = chunk__18355;
var G__18415 = count__18356;
var G__18416 = (i__18357 + (1));
seq__18354 = G__18413;
chunk__18355 = G__18414;
count__18356 = G__18415;
i__18357 = G__18416;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__18354);
if(temp__4657__auto____$1){
var seq__18354__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18354__$1)){
var c__7220__auto__ = cljs.core.chunk_first.call(null,seq__18354__$1);
var G__18417 = cljs.core.chunk_rest.call(null,seq__18354__$1);
var G__18418 = c__7220__auto__;
var G__18419 = cljs.core.count.call(null,c__7220__auto__);
var G__18420 = (0);
seq__18354 = G__18417;
chunk__18355 = G__18418;
count__18356 = G__18419;
i__18357 = G__18420;
continue;
} else {
var role = cljs.core.first.call(null,seq__18354__$1);
var temp__4657__auto___18421__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___18421__$2)){
var spec_18422 = temp__4657__auto___18421__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_18422));
} else {
}

var G__18423 = cljs.core.next.call(null,seq__18354__$1);
var G__18424 = null;
var G__18425 = (0);
var G__18426 = (0);
seq__18354 = G__18423;
chunk__18355 = G__18424;
count__18356 = G__18425;
i__18357 = G__18426;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map