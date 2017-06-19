// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24460){
var map__24485 = p__24460;
var map__24485__$1 = ((((!((map__24485 == null)))?((((map__24485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24485):map__24485);
var m = map__24485__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24485__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24485__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6738__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6738__auto__)){
var ns = temp__6738__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__24487_24509 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__24488_24510 = null;
var count__24489_24511 = (0);
var i__24490_24512 = (0);
while(true){
if((i__24490_24512 < count__24489_24511)){
var f_24513 = chunk__24488_24510.cljs$core$IIndexed$_nth$arity$2(null,i__24490_24512);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_24513], 0));

var G__24514 = seq__24487_24509;
var G__24515 = chunk__24488_24510;
var G__24516 = count__24489_24511;
var G__24517 = (i__24490_24512 + (1));
seq__24487_24509 = G__24514;
chunk__24488_24510 = G__24515;
count__24489_24511 = G__24516;
i__24490_24512 = G__24517;
continue;
} else {
var temp__6738__auto___24518 = cljs.core.seq(seq__24487_24509);
if(temp__6738__auto___24518){
var seq__24487_24519__$1 = temp__6738__auto___24518;
if(cljs.core.chunked_seq_QMARK_(seq__24487_24519__$1)){
var c__8512__auto___24520 = cljs.core.chunk_first(seq__24487_24519__$1);
var G__24521 = cljs.core.chunk_rest(seq__24487_24519__$1);
var G__24522 = c__8512__auto___24520;
var G__24523 = cljs.core.count(c__8512__auto___24520);
var G__24524 = (0);
seq__24487_24509 = G__24521;
chunk__24488_24510 = G__24522;
count__24489_24511 = G__24523;
i__24490_24512 = G__24524;
continue;
} else {
var f_24525 = cljs.core.first(seq__24487_24519__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_24525], 0));

var G__24526 = cljs.core.next(seq__24487_24519__$1);
var G__24527 = null;
var G__24528 = (0);
var G__24529 = (0);
seq__24487_24509 = G__24526;
chunk__24488_24510 = G__24527;
count__24489_24511 = G__24528;
i__24490_24512 = G__24529;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24530 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7601__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_24530], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_24530)))?cljs.core.second(arglists_24530):arglists_24530)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Macro"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
var seq__24491_24531 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__24492_24532 = null;
var count__24493_24533 = (0);
var i__24494_24534 = (0);
while(true){
if((i__24494_24534 < count__24493_24533)){
var vec__24495_24535 = chunk__24492_24532.cljs$core$IIndexed$_nth$arity$2(null,i__24494_24534);
var name_24536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24495_24535,(0),null);
var map__24498_24537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24495_24535,(1),null);
var map__24498_24538__$1 = ((((!((map__24498_24537 == null)))?((((map__24498_24537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24498_24537.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24498_24537):map__24498_24537);
var doc_24539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24498_24538__$1,cljs.core.cst$kw$doc);
var arglists_24540 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24498_24538__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_24536], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_24540], 0));

if(cljs.core.truth_(doc_24539)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_24539], 0));
} else {
}

var G__24541 = seq__24491_24531;
var G__24542 = chunk__24492_24532;
var G__24543 = count__24493_24533;
var G__24544 = (i__24494_24534 + (1));
seq__24491_24531 = G__24541;
chunk__24492_24532 = G__24542;
count__24493_24533 = G__24543;
i__24494_24534 = G__24544;
continue;
} else {
var temp__6738__auto___24545 = cljs.core.seq(seq__24491_24531);
if(temp__6738__auto___24545){
var seq__24491_24546__$1 = temp__6738__auto___24545;
if(cljs.core.chunked_seq_QMARK_(seq__24491_24546__$1)){
var c__8512__auto___24547 = cljs.core.chunk_first(seq__24491_24546__$1);
var G__24548 = cljs.core.chunk_rest(seq__24491_24546__$1);
var G__24549 = c__8512__auto___24547;
var G__24550 = cljs.core.count(c__8512__auto___24547);
var G__24551 = (0);
seq__24491_24531 = G__24548;
chunk__24492_24532 = G__24549;
count__24493_24533 = G__24550;
i__24494_24534 = G__24551;
continue;
} else {
var vec__24500_24552 = cljs.core.first(seq__24491_24546__$1);
var name_24553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24500_24552,(0),null);
var map__24503_24554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24500_24552,(1),null);
var map__24503_24555__$1 = ((((!((map__24503_24554 == null)))?((((map__24503_24554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24503_24554.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24503_24554):map__24503_24554);
var doc_24556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24503_24555__$1,cljs.core.cst$kw$doc);
var arglists_24557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24503_24555__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_24553], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_24557], 0));

if(cljs.core.truth_(doc_24556)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_24556], 0));
} else {
}

var G__24558 = cljs.core.next(seq__24491_24546__$1);
var G__24559 = null;
var G__24560 = (0);
var G__24561 = (0);
seq__24491_24531 = G__24558;
chunk__24492_24532 = G__24559;
count__24493_24533 = G__24560;
i__24494_24534 = G__24561;
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
var temp__6738__auto__ = cljs.spec.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__6738__auto__)){
var fnspec = temp__6738__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Spec"], 0));

var seq__24505 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__24506 = null;
var count__24507 = (0);
var i__24508 = (0);
while(true){
if((i__24508 < count__24507)){
var role = chunk__24506.cljs$core$IIndexed$_nth$arity$2(null,i__24508);
var temp__6738__auto___24562__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__6738__auto___24562__$1)){
var spec_24563 = temp__6738__auto___24562__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe(spec_24563)], 0));
} else {
}

var G__24564 = seq__24505;
var G__24565 = chunk__24506;
var G__24566 = count__24507;
var G__24567 = (i__24508 + (1));
seq__24505 = G__24564;
chunk__24506 = G__24565;
count__24507 = G__24566;
i__24508 = G__24567;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq(seq__24505);
if(temp__6738__auto____$1){
var seq__24505__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__24505__$1)){
var c__8512__auto__ = cljs.core.chunk_first(seq__24505__$1);
var G__24568 = cljs.core.chunk_rest(seq__24505__$1);
var G__24569 = c__8512__auto__;
var G__24570 = cljs.core.count(c__8512__auto__);
var G__24571 = (0);
seq__24505 = G__24568;
chunk__24506 = G__24569;
count__24507 = G__24570;
i__24508 = G__24571;
continue;
} else {
var role = cljs.core.first(seq__24505__$1);
var temp__6738__auto___24572__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__6738__auto___24572__$2)){
var spec_24573 = temp__6738__auto___24572__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe(spec_24573)], 0));
} else {
}

var G__24574 = cljs.core.next(seq__24505__$1);
var G__24575 = null;
var G__24576 = (0);
var G__24577 = (0);
seq__24505 = G__24574;
chunk__24506 = G__24575;
count__24507 = G__24576;
i__24508 = G__24577;
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
