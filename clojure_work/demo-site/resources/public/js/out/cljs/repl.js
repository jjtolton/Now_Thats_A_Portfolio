// Compiled by ClojureScript 1.9.518 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__61127){
var map__61152 = p__61127;
var map__61152__$1 = ((((!((map__61152 == null)))?((((map__61152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61152.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61152):map__61152);
var m = map__61152__$1;
var n = cljs.core.get.call(null,map__61152__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__61152__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6738__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__6738__auto__)){
var ns = temp__6738__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__61154_61176 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61155_61177 = null;
var count__61156_61178 = (0);
var i__61157_61179 = (0);
while(true){
if((i__61157_61179 < count__61156_61178)){
var f_61180 = cljs.core._nth.call(null,chunk__61155_61177,i__61157_61179);
cljs.core.println.call(null,"  ",f_61180);

var G__61181 = seq__61154_61176;
var G__61182 = chunk__61155_61177;
var G__61183 = count__61156_61178;
var G__61184 = (i__61157_61179 + (1));
seq__61154_61176 = G__61181;
chunk__61155_61177 = G__61182;
count__61156_61178 = G__61183;
i__61157_61179 = G__61184;
continue;
} else {
var temp__6738__auto___61185 = cljs.core.seq.call(null,seq__61154_61176);
if(temp__6738__auto___61185){
var seq__61154_61186__$1 = temp__6738__auto___61185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61154_61186__$1)){
var c__29660__auto___61187 = cljs.core.chunk_first.call(null,seq__61154_61186__$1);
var G__61188 = cljs.core.chunk_rest.call(null,seq__61154_61186__$1);
var G__61189 = c__29660__auto___61187;
var G__61190 = cljs.core.count.call(null,c__29660__auto___61187);
var G__61191 = (0);
seq__61154_61176 = G__61188;
chunk__61155_61177 = G__61189;
count__61156_61178 = G__61190;
i__61157_61179 = G__61191;
continue;
} else {
var f_61192 = cljs.core.first.call(null,seq__61154_61186__$1);
cljs.core.println.call(null,"  ",f_61192);

var G__61193 = cljs.core.next.call(null,seq__61154_61186__$1);
var G__61194 = null;
var G__61195 = (0);
var G__61196 = (0);
seq__61154_61176 = G__61193;
chunk__61155_61177 = G__61194;
count__61156_61178 = G__61195;
i__61157_61179 = G__61196;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_61197 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28749__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_61197);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_61197)))?cljs.core.second.call(null,arglists_61197):arglists_61197));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__61158_61198 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61159_61199 = null;
var count__61160_61200 = (0);
var i__61161_61201 = (0);
while(true){
if((i__61161_61201 < count__61160_61200)){
var vec__61162_61202 = cljs.core._nth.call(null,chunk__61159_61199,i__61161_61201);
var name_61203 = cljs.core.nth.call(null,vec__61162_61202,(0),null);
var map__61165_61204 = cljs.core.nth.call(null,vec__61162_61202,(1),null);
var map__61165_61205__$1 = ((((!((map__61165_61204 == null)))?((((map__61165_61204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61165_61204.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61165_61204):map__61165_61204);
var doc_61206 = cljs.core.get.call(null,map__61165_61205__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61207 = cljs.core.get.call(null,map__61165_61205__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_61203);

cljs.core.println.call(null," ",arglists_61207);

if(cljs.core.truth_(doc_61206)){
cljs.core.println.call(null," ",doc_61206);
} else {
}

var G__61208 = seq__61158_61198;
var G__61209 = chunk__61159_61199;
var G__61210 = count__61160_61200;
var G__61211 = (i__61161_61201 + (1));
seq__61158_61198 = G__61208;
chunk__61159_61199 = G__61209;
count__61160_61200 = G__61210;
i__61161_61201 = G__61211;
continue;
} else {
var temp__6738__auto___61212 = cljs.core.seq.call(null,seq__61158_61198);
if(temp__6738__auto___61212){
var seq__61158_61213__$1 = temp__6738__auto___61212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61158_61213__$1)){
var c__29660__auto___61214 = cljs.core.chunk_first.call(null,seq__61158_61213__$1);
var G__61215 = cljs.core.chunk_rest.call(null,seq__61158_61213__$1);
var G__61216 = c__29660__auto___61214;
var G__61217 = cljs.core.count.call(null,c__29660__auto___61214);
var G__61218 = (0);
seq__61158_61198 = G__61215;
chunk__61159_61199 = G__61216;
count__61160_61200 = G__61217;
i__61161_61201 = G__61218;
continue;
} else {
var vec__61167_61219 = cljs.core.first.call(null,seq__61158_61213__$1);
var name_61220 = cljs.core.nth.call(null,vec__61167_61219,(0),null);
var map__61170_61221 = cljs.core.nth.call(null,vec__61167_61219,(1),null);
var map__61170_61222__$1 = ((((!((map__61170_61221 == null)))?((((map__61170_61221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61170_61221.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61170_61221):map__61170_61221);
var doc_61223 = cljs.core.get.call(null,map__61170_61222__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_61224 = cljs.core.get.call(null,map__61170_61222__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_61220);

cljs.core.println.call(null," ",arglists_61224);

if(cljs.core.truth_(doc_61223)){
cljs.core.println.call(null," ",doc_61223);
} else {
}

var G__61225 = cljs.core.next.call(null,seq__61158_61213__$1);
var G__61226 = null;
var G__61227 = (0);
var G__61228 = (0);
seq__61158_61198 = G__61225;
chunk__61159_61199 = G__61226;
count__61160_61200 = G__61227;
i__61161_61201 = G__61228;
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
var temp__6738__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__6738__auto__)){
var fnspec = temp__6738__auto__;
cljs.core.print.call(null,"Spec");

var seq__61172 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__61173 = null;
var count__61174 = (0);
var i__61175 = (0);
while(true){
if((i__61175 < count__61174)){
var role = cljs.core._nth.call(null,chunk__61173,i__61175);
var temp__6738__auto___61229__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___61229__$1)){
var spec_61230 = temp__6738__auto___61229__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_61230));
} else {
}

var G__61231 = seq__61172;
var G__61232 = chunk__61173;
var G__61233 = count__61174;
var G__61234 = (i__61175 + (1));
seq__61172 = G__61231;
chunk__61173 = G__61232;
count__61174 = G__61233;
i__61175 = G__61234;
continue;
} else {
var temp__6738__auto____$1 = cljs.core.seq.call(null,seq__61172);
if(temp__6738__auto____$1){
var seq__61172__$1 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61172__$1)){
var c__29660__auto__ = cljs.core.chunk_first.call(null,seq__61172__$1);
var G__61235 = cljs.core.chunk_rest.call(null,seq__61172__$1);
var G__61236 = c__29660__auto__;
var G__61237 = cljs.core.count.call(null,c__29660__auto__);
var G__61238 = (0);
seq__61172 = G__61235;
chunk__61173 = G__61236;
count__61174 = G__61237;
i__61175 = G__61238;
continue;
} else {
var role = cljs.core.first.call(null,seq__61172__$1);
var temp__6738__auto___61239__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__6738__auto___61239__$2)){
var spec_61240 = temp__6738__auto___61239__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.describe.call(null,spec_61240));
} else {
}

var G__61241 = cljs.core.next.call(null,seq__61172__$1);
var G__61242 = null;
var G__61243 = (0);
var G__61244 = (0);
seq__61172 = G__61241;
chunk__61173 = G__61242;
count__61174 = G__61243;
i__61175 = G__61244;
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