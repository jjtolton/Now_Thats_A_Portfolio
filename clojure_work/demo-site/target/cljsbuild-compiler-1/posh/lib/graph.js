// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('posh.lib.graph');
goog.require('cljs.core');
goog.require('cljs.core.constants');
posh.lib.graph.new_graph = (function posh$lib$graph$new_graph(){
return cljs.core.PersistentArrayMap.EMPTY;
});
posh.lib.graph.add_item = (function posh$lib$graph$add_item(graph,item_k){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.createAsIfByAssoc([item_k,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inputs,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$outputs,cljs.core.PersistentHashSet.EMPTY], null)]),graph], 0));
});
posh.lib.graph.add_input = (function posh$lib$graph$add_input(graph,item_k,input){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_k,cljs.core.cst$kw$inputs], null),cljs.core.conj,input);
});
posh.lib.graph.add_output = (function posh$lib$graph$add_output(graph,item_k,output){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_k,cljs.core.cst$kw$outputs], null),cljs.core.conj,output);
});
posh.lib.graph.add_item_full = (function posh$lib$graph$add_item_full(graph,item_k,inputs,outputs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (gr,input){
return posh.lib.graph.add_input(gr,item_k,input);
}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (gr,output){
return posh.lib.graph.add_output(gr,item_k,output);
}),posh.lib.graph.add_item(graph,item_k),outputs),inputs);
});
posh.lib.graph.add_item_connect = (function posh$lib$graph$add_item_connect(graph,item_k,inputs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (gr,input){
return posh.lib.graph.add_output(posh.lib.graph.add_input(gr,item_k,input),input,item_k);
}),posh.lib.graph.add_item(graph,item_k),inputs);
});
posh.lib.graph.remove_input = (function posh$lib$graph$remove_input(graph,item_k,input){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_k,cljs.core.cst$kw$inputs], null),cljs.core.disj,input);
});
posh.lib.graph.remove_output = (function posh$lib$graph$remove_output(graph,item_k,output){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(graph,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_k,cljs.core.cst$kw$outputs], null),cljs.core.disj,output);
});
posh.lib.graph.remove_dep = (function posh$lib$graph$remove_dep(graph,k,dep_k){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(graph,k,(function (p1__45745_SHARP_){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__45745_SHARP_,dep_k);
}));
});
posh.lib.graph.remove_item = (function posh$lib$graph$remove_item(graph,item_k){
var temp__6736__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph,item_k);
if(cljs.core.truth_(temp__6736__auto__)){
var map__45748 = temp__6736__auto__;
var map__45748__$1 = ((((!((map__45748 == null)))?((((map__45748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45748):map__45748);
var inputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45748__$1,cljs.core.cst$kw$inputs);
var outputs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45748__$1,cljs.core.cst$kw$outputs);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__45748,map__45748__$1,inputs,outputs,temp__6736__auto__){
return (function (gr,output_k){
return posh.lib.graph.remove_output(gr,output_k,item_k);
});})(map__45748,map__45748__$1,inputs,outputs,temp__6736__auto__))
,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(posh.lib.graph.remove_item,graph,outputs),inputs),item_k);
} else {
return graph;
}
});
