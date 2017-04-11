// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23759){
var map__23784 = p__23759;
var map__23784__$1 = ((((!((map__23784 == null)))?((((map__23784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23784):map__23784);
var m = map__23784__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23784__$1,cljs.core.cst$kw$ns);
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23784__$1,cljs.core.cst$kw$name);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((function (){var temp__4657__auto__ = cljs.core.cst$kw$ns.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(cljs.core.cst$kw$protocol.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m))){
var seq__23786_23808 = cljs.core.seq(cljs.core.cst$kw$forms.cljs$core$IFn$_invoke$arity$1(m));
var chunk__23787_23809 = null;
var count__23788_23810 = (0);
var i__23789_23811 = (0);
while(true){
if((i__23789_23811 < count__23788_23810)){
var f_23812 = chunk__23787_23809.cljs$core$IIndexed$_nth$arity$2(null,i__23789_23811);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_23812], 0));

var G__23813 = seq__23786_23808;
var G__23814 = chunk__23787_23809;
var G__23815 = count__23788_23810;
var G__23816 = (i__23789_23811 + (1));
seq__23786_23808 = G__23813;
chunk__23787_23809 = G__23814;
count__23788_23810 = G__23815;
i__23789_23811 = G__23816;
continue;
} else {
var temp__4657__auto___23817 = cljs.core.seq(seq__23786_23808);
if(temp__4657__auto___23817){
var seq__23786_23818__$1 = temp__4657__auto___23817;
if(cljs.core.chunked_seq_QMARK_(seq__23786_23818__$1)){
var c__7220__auto___23819 = cljs.core.chunk_first(seq__23786_23818__$1);
var G__23820 = cljs.core.chunk_rest(seq__23786_23818__$1);
var G__23821 = c__7220__auto___23819;
var G__23822 = cljs.core.count(c__7220__auto___23819);
var G__23823 = (0);
seq__23786_23808 = G__23820;
chunk__23787_23809 = G__23821;
count__23788_23810 = G__23822;
i__23789_23811 = G__23823;
continue;
} else {
var f_23824 = cljs.core.first(seq__23786_23818__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_23824], 0));

var G__23825 = cljs.core.next(seq__23786_23818__$1);
var G__23826 = null;
var G__23827 = (0);
var G__23828 = (0);
seq__23786_23808 = G__23825;
chunk__23787_23809 = G__23826;
count__23788_23810 = G__23827;
i__23789_23811 = G__23828;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23829 = cljs.core.cst$kw$arglists.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6409__auto__ = cljs.core.cst$kw$macro.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return cljs.core.cst$kw$repl_DASH_special_DASH_function.cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_23829], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,cljs.core.first(arglists_23829)))?cljs.core.second(arglists_23829):arglists_23829)], 0));
}
} else {
}
}

if(cljs.core.truth_(cljs.core.cst$kw$special_DASH_form.cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",cljs.core.cst$kw$doc.cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,cljs.core.cst$kw$url)){
if(cljs.core.truth_(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
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
var seq__23790_23830 = cljs.core.seq(cljs.core.cst$kw$methods.cljs$core$IFn$_invoke$arity$1(m));
var chunk__23791_23831 = null;
var count__23792_23832 = (0);
var i__23793_23833 = (0);
while(true){
if((i__23793_23833 < count__23792_23832)){
var vec__23794_23834 = chunk__23791_23831.cljs$core$IIndexed$_nth$arity$2(null,i__23793_23833);
var name_23835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23794_23834,(0),null);
var map__23797_23836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23794_23834,(1),null);
var map__23797_23837__$1 = ((((!((map__23797_23836 == null)))?((((map__23797_23836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23797_23836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23797_23836):map__23797_23836);
var doc_23838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23797_23837__$1,cljs.core.cst$kw$doc);
var arglists_23839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23797_23837__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_23835], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_23839], 0));

if(cljs.core.truth_(doc_23838)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_23838], 0));
} else {
}

var G__23840 = seq__23790_23830;
var G__23841 = chunk__23791_23831;
var G__23842 = count__23792_23832;
var G__23843 = (i__23793_23833 + (1));
seq__23790_23830 = G__23840;
chunk__23791_23831 = G__23841;
count__23792_23832 = G__23842;
i__23793_23833 = G__23843;
continue;
} else {
var temp__4657__auto___23844 = cljs.core.seq(seq__23790_23830);
if(temp__4657__auto___23844){
var seq__23790_23845__$1 = temp__4657__auto___23844;
if(cljs.core.chunked_seq_QMARK_(seq__23790_23845__$1)){
var c__7220__auto___23846 = cljs.core.chunk_first(seq__23790_23845__$1);
var G__23847 = cljs.core.chunk_rest(seq__23790_23845__$1);
var G__23848 = c__7220__auto___23846;
var G__23849 = cljs.core.count(c__7220__auto___23846);
var G__23850 = (0);
seq__23790_23830 = G__23847;
chunk__23791_23831 = G__23848;
count__23792_23832 = G__23849;
i__23793_23833 = G__23850;
continue;
} else {
var vec__23799_23851 = cljs.core.first(seq__23790_23845__$1);
var name_23852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23799_23851,(0),null);
var map__23802_23853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23799_23851,(1),null);
var map__23802_23854__$1 = ((((!((map__23802_23853 == null)))?((((map__23802_23853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23802_23853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23802_23853):map__23802_23853);
var doc_23855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23802_23854__$1,cljs.core.cst$kw$doc);
var arglists_23856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23802_23854__$1,cljs.core.cst$kw$arglists);
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name_23852], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists_23856], 0));

if(cljs.core.truth_(doc_23855)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc_23855], 0));
} else {
}

var G__23857 = cljs.core.next(seq__23790_23845__$1);
var G__23858 = null;
var G__23859 = (0);
var G__23860 = (0);
seq__23790_23830 = G__23857;
chunk__23791_23831 = G__23858;
count__23792_23832 = G__23859;
i__23793_23833 = G__23860;
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
var temp__4657__auto__ = cljs.spec.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Spec"], 0));

var seq__23804 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$args,cljs.core.cst$kw$ret,cljs.core.cst$kw$fn], null));
var chunk__23805 = null;
var count__23806 = (0);
var i__23807 = (0);
while(true){
if((i__23807 < count__23806)){
var role = chunk__23805.cljs$core$IIndexed$_nth$arity$2(null,i__23807);
var temp__4657__auto___23861__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___23861__$1)){
var spec_23862 = temp__4657__auto___23861__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n "),cljs.core.str(cljs.core.name(role)),cljs.core.str(":")].join(''),cljs.spec.describe(spec_23862)], 0));
} else {
}

var G__23863 = seq__23804;
var G__23864 = chunk__23805;
var G__23865 = count__23806;
var G__23866 = (i__23807 + (1));
seq__23804 = G__23863;
chunk__23805 = G__23864;
count__23806 = G__23865;
i__23807 = G__23866;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq(seq__23804);
if(temp__4657__auto____$1){
var seq__23804__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__23804__$1)){
var c__7220__auto__ = cljs.core.chunk_first(seq__23804__$1);
var G__23867 = cljs.core.chunk_rest(seq__23804__$1);
var G__23868 = c__7220__auto__;
var G__23869 = cljs.core.count(c__7220__auto__);
var G__23870 = (0);
seq__23804 = G__23867;
chunk__23805 = G__23868;
count__23806 = G__23869;
i__23807 = G__23870;
continue;
} else {
var role = cljs.core.first(seq__23804__$1);
var temp__4657__auto___23871__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__4657__auto___23871__$2)){
var spec_23872 = temp__4657__auto___23871__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n "),cljs.core.str(cljs.core.name(role)),cljs.core.str(":")].join(''),cljs.spec.describe(spec_23872)], 0));
} else {
}

var G__23873 = cljs.core.next(seq__23804__$1);
var G__23874 = null;
var G__23875 = (0);
var G__23876 = (0);
seq__23804 = G__23873;
chunk__23805 = G__23874;
count__23806 = G__23875;
i__23807 = G__23876;
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
