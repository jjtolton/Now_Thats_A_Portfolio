// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('ezq.core');
goog.require('cljs.core');
goog.require('quiescent.core');
goog.require('figwheel.client');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clojure.string');
ezq.core.init_state = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$show_DASH_state,true,cljs.core.cst$kw$tick,true,cljs.core.cst$kw$turn,cljs.core.cst$kw$x,cljs.core.cst$kw$board,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$winner,null], null);
if(typeof ezq.core.world !== 'undefined'){
} else {
ezq.core.world = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(ezq.core.init_state) : cljs.core.atom.call(null,ezq.core.init_state));
}
var render_pending_QMARK__25131 = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
ezq.core.request_render = ((function (render_pending_QMARK__25131){
return (function ezq$core$request_render(data){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(render_pending_QMARK__25131,false,true))){
return window.requestAnimationFrame(((function (render_pending_QMARK__25131){
return (function (){
quiescent.core.render((ezq.core.root.cljs$core$IFn$_invoke$arity$1 ? ezq.core.root.cljs$core$IFn$_invoke$arity$1(data) : ezq.core.root.call(null,data)),document.getElementById("main"));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(render_pending_QMARK__25131,false) : cljs.core.reset_BANG_.call(null,render_pending_QMARK__25131,false));
});})(render_pending_QMARK__25131))
);
} else {
return null;
}
});})(render_pending_QMARK__25131))
;
cljs.core.add_watch(ezq.core.world,cljs.core.cst$kw$ezq$core_SLASH_render,(function (_,___$1,___$2,data){
return ezq.core.request_render(data);
}));
ezq.core.winner = (function ezq$core$winner(p__25135){
var map__25198 = p__25135;
var map__25198__$1 = ((((!((map__25198 == null)))?((((map__25198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25198):map__25198);
var data = map__25198__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25198__$1,cljs.core.cst$kw$board);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(board),(9))){
return cljs.core.cst$kw$tie;
} else {
var rows = (function (){var iter__7189__auto__ = ((function (map__25198,map__25198__$1,data,board){
return (function ezq$core$winner_$_iter__25200(s__25201){
return (new cljs.core.LazySeq(null,((function (map__25198,map__25198__$1,data,board){
return (function (){
var s__25201__$1 = s__25201;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__25201__$1);
if(temp__4657__auto__){
var s__25201__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25201__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__25201__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__25203 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__25202 = (0);
while(true){
if((i__25202 < size__7188__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__25202);
cljs.core.chunk_append(b__25203,(function (){var iter__7189__auto__ = ((function (i__25202,x,c__7187__auto__,size__7188__auto__,b__25203,s__25201__$2,temp__4657__auto__,map__25198,map__25198__$1,data,board){
return (function ezq$core$winner_$_iter__25200_$_iter__25218(s__25219){
return (new cljs.core.LazySeq(null,((function (i__25202,x,c__7187__auto__,size__7188__auto__,b__25203,s__25201__$2,temp__4657__auto__,map__25198,map__25198__$1,data,board){
return (function (){
var s__25219__$1 = s__25219;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__25219__$1);
if(temp__4657__auto____$1){
var s__25219__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25219__$2)){
var c__7187__auto____$1 = cljs.core.chunk_first(s__25219__$2);
var size__7188__auto____$1 = cljs.core.count(c__7187__auto____$1);
var b__25221 = cljs.core.chunk_buffer(size__7188__auto____$1);
if((function (){var i__25220 = (0);
while(true){
if((i__25220 < size__7188__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto____$1,i__25220);
cljs.core.chunk_append(b__25221,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__25260 = (i__25220 + (1));
i__25220 = G__25260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25221),ezq$core$winner_$_iter__25200_$_iter__25218(cljs.core.chunk_rest(s__25219__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25221),null);
}
} else {
var y = cljs.core.first(s__25219__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),ezq$core$winner_$_iter__25200_$_iter__25218(cljs.core.rest(s__25219__$2)));
}
} else {
return null;
}
break;
}
});})(i__25202,x,c__7187__auto__,size__7188__auto__,b__25203,s__25201__$2,temp__4657__auto__,map__25198,map__25198__$1,data,board))
,null,null));
});})(i__25202,x,c__7187__auto__,size__7188__auto__,b__25203,s__25201__$2,temp__4657__auto__,map__25198,map__25198__$1,data,board))
;
return iter__7189__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})());

var G__25261 = (i__25202 + (1));
i__25202 = G__25261;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25203),ezq$core$winner_$_iter__25200(cljs.core.chunk_rest(s__25201__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25203),null);
}
} else {
var x = cljs.core.first(s__25201__$2);
return cljs.core.cons((function (){var iter__7189__auto__ = ((function (x,s__25201__$2,temp__4657__auto__,map__25198,map__25198__$1,data,board){
return (function ezq$core$winner_$_iter__25200_$_iter__25224(s__25225){
return (new cljs.core.LazySeq(null,((function (x,s__25201__$2,temp__4657__auto__,map__25198,map__25198__$1,data,board){
return (function (){
var s__25225__$1 = s__25225;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__25225__$1);
if(temp__4657__auto____$1){
var s__25225__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25225__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__25225__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__25227 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__25226 = (0);
while(true){
if((i__25226 < size__7188__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__25226);
cljs.core.chunk_append(b__25227,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__25262 = (i__25226 + (1));
i__25226 = G__25262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25227),ezq$core$winner_$_iter__25200_$_iter__25224(cljs.core.chunk_rest(s__25225__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25227),null);
}
} else {
var y = cljs.core.first(s__25225__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),ezq$core$winner_$_iter__25200_$_iter__25224(cljs.core.rest(s__25225__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__25201__$2,temp__4657__auto__,map__25198,map__25198__$1,data,board))
,null,null));
});})(x,s__25201__$2,temp__4657__auto__,map__25198,map__25198__$1,data,board))
;
return iter__7189__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})(),ezq$core$winner_$_iter__25200(cljs.core.rest(s__25201__$2)));
}
} else {
return null;
}
break;
}
});})(map__25198,map__25198__$1,data,board))
,null,null));
});})(map__25198,map__25198__$1,data,board))
;
return iter__7189__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})();
var diags = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))),cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)))], null);
var cols = (function (){var iter__7189__auto__ = ((function (rows,diags,map__25198,map__25198__$1,data,board){
return (function ezq$core$winner_$_iter__25230(s__25231){
return (new cljs.core.LazySeq(null,((function (rows,diags,map__25198,map__25198__$1,data,board){
return (function (){
var s__25231__$1 = s__25231;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__25231__$1);
if(temp__4657__auto__){
var s__25231__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25231__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__25231__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__25233 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__25232 = (0);
while(true){
if((i__25232 < size__7188__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__25232);
cljs.core.chunk_append(b__25233,(function (){var iter__7189__auto__ = ((function (i__25232,x,c__7187__auto__,size__7188__auto__,b__25233,s__25231__$2,temp__4657__auto__,rows,diags,map__25198,map__25198__$1,data,board){
return (function ezq$core$winner_$_iter__25230_$_iter__25248(s__25249){
return (new cljs.core.LazySeq(null,((function (i__25232,x,c__7187__auto__,size__7188__auto__,b__25233,s__25231__$2,temp__4657__auto__,rows,diags,map__25198,map__25198__$1,data,board){
return (function (){
var s__25249__$1 = s__25249;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__25249__$1);
if(temp__4657__auto____$1){
var s__25249__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25249__$2)){
var c__7187__auto____$1 = cljs.core.chunk_first(s__25249__$2);
var size__7188__auto____$1 = cljs.core.count(c__7187__auto____$1);
var b__25251 = cljs.core.chunk_buffer(size__7188__auto____$1);
if((function (){var i__25250 = (0);
while(true){
if((i__25250 < size__7188__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto____$1,i__25250);
cljs.core.chunk_append(b__25251,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__25263 = (i__25250 + (1));
i__25250 = G__25263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25251),ezq$core$winner_$_iter__25230_$_iter__25248(cljs.core.chunk_rest(s__25249__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25251),null);
}
} else {
var y = cljs.core.first(s__25249__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),ezq$core$winner_$_iter__25230_$_iter__25248(cljs.core.rest(s__25249__$2)));
}
} else {
return null;
}
break;
}
});})(i__25232,x,c__7187__auto__,size__7188__auto__,b__25233,s__25231__$2,temp__4657__auto__,rows,diags,map__25198,map__25198__$1,data,board))
,null,null));
});})(i__25232,x,c__7187__auto__,size__7188__auto__,b__25233,s__25231__$2,temp__4657__auto__,rows,diags,map__25198,map__25198__$1,data,board))
;
return iter__7189__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})());

var G__25264 = (i__25232 + (1));
i__25232 = G__25264;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25233),ezq$core$winner_$_iter__25230(cljs.core.chunk_rest(s__25231__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25233),null);
}
} else {
var x = cljs.core.first(s__25231__$2);
return cljs.core.cons((function (){var iter__7189__auto__ = ((function (x,s__25231__$2,temp__4657__auto__,rows,diags,map__25198,map__25198__$1,data,board){
return (function ezq$core$winner_$_iter__25230_$_iter__25254(s__25255){
return (new cljs.core.LazySeq(null,((function (x,s__25231__$2,temp__4657__auto__,rows,diags,map__25198,map__25198__$1,data,board){
return (function (){
var s__25255__$1 = s__25255;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__25255__$1);
if(temp__4657__auto____$1){
var s__25255__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25255__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__25255__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__25257 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__25256 = (0);
while(true){
if((i__25256 < size__7188__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__25256);
cljs.core.chunk_append(b__25257,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__25265 = (i__25256 + (1));
i__25256 = G__25265;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25257),ezq$core$winner_$_iter__25230_$_iter__25254(cljs.core.chunk_rest(s__25255__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25257),null);
}
} else {
var y = cljs.core.first(s__25255__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),ezq$core$winner_$_iter__25230_$_iter__25254(cljs.core.rest(s__25255__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__25231__$2,temp__4657__auto__,rows,diags,map__25198,map__25198__$1,data,board))
,null,null));
});})(x,s__25231__$2,temp__4657__auto__,rows,diags,map__25198,map__25198__$1,data,board))
;
return iter__7189__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})(),ezq$core$winner_$_iter__25230(cljs.core.rest(s__25231__$2)));
}
} else {
return null;
}
break;
}
});})(rows,diags,map__25198,map__25198__$1,data,board))
,null,null));
});})(rows,diags,map__25198,map__25198__$1,data,board))
;
return iter__7189__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})();
var all = (new cljs.core.LazySeq(null,((function (rows,diags,cols,map__25198,map__25198__$1,data,board){
return (function (){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(rows,diags,cljs.core.array_seq([cols], 0));
});})(rows,diags,cols,map__25198,map__25198__$1,data,board))
,null,null));
var seqs = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (rows,diags,cols,all,map__25198,map__25198__$1,data,board){
return (function (row){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (rows,diags,cols,all,map__25198,map__25198__$1,data,board){
return (function (p1__25132_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(board,p1__25132_SHARP_,(-1));
});})(rows,diags,cols,all,map__25198,map__25198__$1,data,board))
,row));
});})(rows,diags,cols,all,map__25198,map__25198__$1,data,board))
,all));
var fseqs = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (rows,diags,cols,all,seqs,map__25198,map__25198__$1,data,board){
return (function (p1__25133_SHARP_){
return (cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(-1),null], null), null),p1__25133_SHARP_) == null);
});})(rows,diags,cols,all,seqs,map__25198,map__25198__$1,data,board))
,seqs));
var wseqs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (rows,diags,cols,all,seqs,fseqs,map__25198,map__25198__$1,data,board){
return (function (p1__25134_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.set(p1__25134_SHARP_)));
});})(rows,diags,cols,all,seqs,fseqs,map__25198,map__25198__$1,data,board))
,fseqs);
var winner__$1 = ((cljs.core.seq(wseqs))?cljs.core.ffirst(wseqs):null);
return winner__$1;
}
});
ezq.core.update_turn = (function ezq$core$update_turn(p__25266){
var map__25269 = p__25266;
var map__25269__$1 = ((((!((map__25269 == null)))?((((map__25269.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25269.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25269):map__25269);
var data = map__25269__$1;
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25269__$1,cljs.core.cst$kw$turn);
return cljs.core.assoc_in(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$turn], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,cljs.core.cst$kw$o,cljs.core.cst$kw$o,cljs.core.cst$kw$x], null),turn));
});
ezq.core.update_board = (function ezq$core$update_board(p__25271,x,y){
var map__25274 = p__25271;
var map__25274__$1 = ((((!((map__25274 == null)))?((((map__25274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25274):map__25274);
var data = map__25274__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25274__$1,cljs.core.cst$kw$board);
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25274__$1,cljs.core.cst$kw$turn);
return cljs.core.assoc_in(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),turn);
});
ezq.core.update_winner = (function ezq$core$update_winner(p__25276){
var map__25279 = p__25276;
var map__25279__$1 = ((((!((map__25279 == null)))?((((map__25279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25279):map__25279);
var data = map__25279__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25279__$1,cljs.core.cst$kw$board);
var the_winner = ezq.core.winner(data);
var ws = (((the_winner == null))?"none":the_winner);
if(cljs.core.truth_(the_winner)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$winner,the_winner);
} else {
return data;
}
});
ezq.core.update_board_state_BANG_ = (function ezq$core$update_board_state_BANG_(data,x,y){
console.log([cljs.core.str(data),cljs.core.str(" "),cljs.core.str(x),cljs.core.str(" "),cljs.core.str(y)].join(''));

var G__25283 = ezq.core.world;
var G__25284 = ezq.core.update_winner(ezq.core.update_turn(ezq.core.update_board(data,x,y)));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25283,G__25284) : cljs.core.reset_BANG_.call(null,G__25283,G__25284));
});
ezq.core.restart = (function ezq$core$restart(){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ezq.core.world,ezq.core.init_state) : cljs.core.reset_BANG_.call(null,ezq.core.world,ezq.core.init_state));
});
goog.exportSymbol('ezq.core.restart', ezq.core.restart);
ezq.core.turn_status = (function ezq$core$turn_status(p__25285){
var map__25291 = p__25285;
var map__25291__$1 = ((((!((map__25291 == null)))?((((map__25291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25291):map__25291);
var data = map__25291__$1;
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25291__$1,cljs.core.cst$kw$turn);
var winner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25291__$1,cljs.core.cst$kw$winner);
var Turn = /**
 * 
 */
ezq.core.Turn = quiescent.core.component.cljs$core$IFn$_invoke$arity$2(((function (map__25291,map__25291__$1,data,turn,winner){
return (function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(winner,cljs.core.cst$kw$tie)){
var attrs25293 = [cljs.core.str("Game is tied!")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs25293))?sablono.interpreter.attributes(attrs25293):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs25293))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25293)], null))));
} else {
if(cljs.core.truth_(winner)){
var attrs25294 = [cljs.core.str(winner),cljs.core.str(" is the winner")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs25294))?sablono.interpreter.attributes(attrs25294):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs25294))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25294)], null))));
} else {
var attrs25295 = [cljs.core.str(turn),cljs.core.str("'s turn to play")].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs25295))?sablono.interpreter.attributes(attrs25295):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs25295))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs25295)], null))));

}
}
});})(map__25291,map__25291__$1,data,turn,winner))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"Turn"], null));
return (Turn.cljs$core$IFn$_invoke$arity$0 ? Turn.cljs$core$IFn$_invoke$arity$0() : Turn.call(null));
});
ezq.core.cell = (function ezq$core$cell(p__25296,x,y){
var map__25300 = p__25296;
var map__25300__$1 = ((((!((map__25300 == null)))?((((map__25300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25300):map__25300);
var data = map__25300__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25300__$1,cljs.core.cst$kw$board);
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25300__$1,cljs.core.cst$kw$turn);
var winner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25300__$1,cljs.core.cst$kw$winner);
var cell_status = cljs.core.get.cljs$core$IFn$_invoke$arity$3(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),null);
var style = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin,cljs.core.cst$kw$auto], null)], null);
var span = ((function (cell_status,style,map__25300,map__25300__$1,data,board,turn,winner){
return (function (x__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,style,x__$1], null);
});})(cell_status,style,map__25300,map__25300__$1,data,board,turn,winner))
;
var cell_out = sablono.interpreter.interpret((function (){var G__25302 = (((cell_status instanceof cljs.core.Keyword))?cell_status.fqn:null);
switch (G__25302) {
case "x":
return span("X");

break;
case "o":
return span("O");

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,(cljs.core.truth_(winner)?null:new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (G__25302,cell_status,style,span,map__25300,map__25300__$1,data,board,turn,winner){
return (function (){
return ezq.core.update_board_state_BANG_(data,x,y);
});})(G__25302,cell_status,style,span,map__25300,map__25300__$1,data,board,turn,winner))
], null)),"[ ]"], null);

}
})());
var Cell = /**
 * 
 */
ezq.core.Cell = quiescent.core.component.cljs$core$IFn$_invoke$arity$2(((function (cell_status,style,span,cell_out,map__25300,map__25300__$1,data,board,turn,winner){
return (function (){
return cell_out;
});})(cell_status,style,span,cell_out,map__25300,map__25300__$1,data,board,turn,winner))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"Cell"], null));
return (Cell.cljs$core$IFn$_invoke$arity$0 ? Cell.cljs$core$IFn$_invoke$arity$0() : Cell.call(null));
});
ezq.core.board = (function ezq$core$board(data,n,m){
var _board = (function (){var G__25378 = null;
var G__25379 = (function (){var G__25380 = null;
var G__25381 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__7189__auto__ = ((function (G__25380,G__25378){
return (function ezq$core$board_$_iter__25382(s__25383){
return (new cljs.core.LazySeq(null,((function (G__25380,G__25378){
return (function (){
var s__25383__$1 = s__25383;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__25383__$1);
if(temp__4657__auto__){
var s__25383__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25383__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__25383__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__25385 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__25384 = (0);
while(true){
if((i__25384 < size__7188__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__25384);
cljs.core.chunk_append(b__25385,(function (){var G__25420 = null;
var G__25421 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__7189__auto__ = ((function (i__25384,G__25420,x,c__7187__auto__,size__7188__auto__,b__25385,s__25383__$2,temp__4657__auto__,G__25380,G__25378){
return (function ezq$core$board_$_iter__25382_$_iter__25422(s__25423){
return (new cljs.core.LazySeq(null,((function (i__25384,G__25420,x,c__7187__auto__,size__7188__auto__,b__25385,s__25383__$2,temp__4657__auto__,G__25380,G__25378){
return (function (){
var s__25423__$1 = s__25423;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__25423__$1);
if(temp__4657__auto____$1){
var s__25423__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25423__$2)){
var c__7187__auto____$1 = cljs.core.chunk_first(s__25423__$2);
var size__7188__auto____$1 = cljs.core.count(c__7187__auto____$1);
var b__25425 = cljs.core.chunk_buffer(size__7188__auto____$1);
if((function (){var i__25424 = (0);
while(true){
if((i__25424 < size__7188__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto____$1,i__25424);
cljs.core.chunk_append(b__25425,(function (){var G__25432 = ({"style": ({"height": (30), "width": (30)})});
var G__25433 = sablono.interpreter.interpret(ezq.core.cell(data,x,y));
return React.DOM.td(G__25432,G__25433);
})());

var G__25452 = (i__25424 + (1));
i__25424 = G__25452;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25425),ezq$core$board_$_iter__25382_$_iter__25422(cljs.core.chunk_rest(s__25423__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25425),null);
}
} else {
var y = cljs.core.first(s__25423__$2);
return cljs.core.cons((function (){var G__25434 = ({"style": ({"height": (30), "width": (30)})});
var G__25435 = sablono.interpreter.interpret(ezq.core.cell(data,x,y));
return React.DOM.td(G__25434,G__25435);
})(),ezq$core$board_$_iter__25382_$_iter__25422(cljs.core.rest(s__25423__$2)));
}
} else {
return null;
}
break;
}
});})(i__25384,G__25420,x,c__7187__auto__,size__7188__auto__,b__25385,s__25383__$2,temp__4657__auto__,G__25380,G__25378))
,null,null));
});})(i__25384,G__25420,x,c__7187__auto__,size__7188__auto__,b__25385,s__25383__$2,temp__4657__auto__,G__25380,G__25378))
;
return iter__7189__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(m));
})());
return React.DOM.tr(G__25420,G__25421);
})());

var G__25453 = (i__25384 + (1));
i__25384 = G__25453;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25385),ezq$core$board_$_iter__25382(cljs.core.chunk_rest(s__25383__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25385),null);
}
} else {
var x = cljs.core.first(s__25383__$2);
return cljs.core.cons((function (){var G__25436 = null;
var G__25437 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__7189__auto__ = ((function (G__25436,x,s__25383__$2,temp__4657__auto__,G__25380,G__25378){
return (function ezq$core$board_$_iter__25382_$_iter__25438(s__25439){
return (new cljs.core.LazySeq(null,((function (G__25436,x,s__25383__$2,temp__4657__auto__,G__25380,G__25378){
return (function (){
var s__25439__$1 = s__25439;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__25439__$1);
if(temp__4657__auto____$1){
var s__25439__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25439__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__25439__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__25441 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__25440 = (0);
while(true){
if((i__25440 < size__7188__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__25440);
cljs.core.chunk_append(b__25441,(function (){var G__25448 = ({"style": ({"height": (30), "width": (30)})});
var G__25449 = sablono.interpreter.interpret(ezq.core.cell(data,x,y));
return React.DOM.td(G__25448,G__25449);
})());

var G__25454 = (i__25440 + (1));
i__25440 = G__25454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25441),ezq$core$board_$_iter__25382_$_iter__25438(cljs.core.chunk_rest(s__25439__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25441),null);
}
} else {
var y = cljs.core.first(s__25439__$2);
return cljs.core.cons((function (){var G__25450 = ({"style": ({"height": (30), "width": (30)})});
var G__25451 = sablono.interpreter.interpret(ezq.core.cell(data,x,y));
return React.DOM.td(G__25450,G__25451);
})(),ezq$core$board_$_iter__25382_$_iter__25438(cljs.core.rest(s__25439__$2)));
}
} else {
return null;
}
break;
}
});})(G__25436,x,s__25383__$2,temp__4657__auto__,G__25380,G__25378))
,null,null));
});})(G__25436,x,s__25383__$2,temp__4657__auto__,G__25380,G__25378))
;
return iter__7189__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(m));
})());
return React.DOM.tr(G__25436,G__25437);
})(),ezq$core$board_$_iter__25382(cljs.core.rest(s__25383__$2)));
}
} else {
return null;
}
break;
}
});})(G__25380,G__25378))
,null,null));
});})(G__25380,G__25378))
;
return iter__7189__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
})());
return React.DOM.tbody(G__25380,G__25381);
})();
return React.DOM.table(G__25378,G__25379);
})();
var Board = /**
 * 
 */
ezq.core.Board = quiescent.core.component.cljs$core$IFn$_invoke$arity$2(((function (_board){
return (function (){
return _board;
});})(_board))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"Board"], null));
return (Board.cljs$core$IFn$_invoke$arity$0 ? Board.cljs$core$IFn$_invoke$arity$0() : Board.call(null));
});
ezq.core.show_state = (function ezq$core$show_state(data){
var Show_state = /**
 * 
 */
ezq.core.Show_state = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (){
var G__25457 = ({"onClick": (function (){
var state_truth = cljs.core.cst$kw$show_DASH_state.cljs$core$IFn$_invoke$arity$1(data);
var state_map = new cljs.core.PersistentArrayMap(null, 2, [true,false,false,true], null);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,state_truth);
var update = ((function (state_truth,state_map,value){
return (function (){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$show_DASH_state,value);
});})(state_truth,state_map,value))
;
var doit = ((function (state_truth,state_map,value,update){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ezq.core.world,update);
});})(state_truth,state_map,value,update))
;
var newval = doit();
return newval;
})});
var G__25458 = "Show State";
return React.DOM.button(G__25457,G__25458);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"Show-state"], null));
return (Show_state.cljs$core$IFn$_invoke$arity$0 ? Show_state.cljs$core$IFn$_invoke$arity$0() : Show_state.call(null));
});
ezq.core.root = (function ezq$core$root(data){
var Root = /**
 * 
 */
ezq.core.Root = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (){
var title = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"The Rise and Fall of Ferengal"], null);
var subtitle = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$offset,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x,(-10)], null)], null)], null),"Intestinal Intentionality"], null);
var tbutton = (ezq.core.ticker_button.cljs$core$IFn$_invoke$arity$1 ? ezq.core.ticker_button.cljs$core$IFn$_invoke$arity$1(data) : ezq.core.ticker_button.call(null,data));
var br = React.DOM.br(null);
var stbtn = ezq.core.show_state(data);
var state = (cljs.core.truth_(cljs.core.cst$kw$show_DASH_state.cljs$core$IFn$_invoke$arity$1(data))?(ezq.core.db.cljs$core$IFn$_invoke$arity$1 ? ezq.core.db.cljs$core$IFn$_invoke$arity$1(data) : ezq.core.db.call(null,data)):null);
var G__25478 = null;
var G__25479 = React.DOM.h1(null,"The Rise and Fall of Ferengal");
var G__25480 = sablono.interpreter.interpret(subtitle);
var G__25481 = sablono.interpreter.interpret(ezq.core.turn_status(data));
var G__25482 = sablono.interpreter.interpret(ezq.core.board(data,(3),(3)));
var G__25483 = sablono.interpreter.interpret((ezq.core.reset_button.cljs$core$IFn$_invoke$arity$0 ? ezq.core.reset_button.cljs$core$IFn$_invoke$arity$0() : ezq.core.reset_button.call(null)));
var G__25484 = sablono.interpreter.interpret(br);
var G__25485 = sablono.interpreter.interpret(tbutton);
var G__25486 = sablono.interpreter.interpret(br);
var G__25487 = sablono.interpreter.interpret(stbtn);
var G__25488 = sablono.interpreter.interpret(state);
return React.DOM.div(G__25478,G__25479,G__25480,G__25481,G__25482,G__25483,G__25484,G__25485,G__25486,G__25487,G__25488);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"Root"], null));
return (Root.cljs$core$IFn$_invoke$arity$1 ? Root.cljs$core$IFn$_invoke$arity$1(data) : Root.call(null,data));
});
ezq.core.ticker_button = (function ezq$core$ticker_button(data){
var TickerBtn = /**
 * 
 */
ezq.core.TickerBtn = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (){
var G__25491 = ({"onClick": (function (){
var vals = new cljs.core.PersistentArrayMap(null, 2, [true,false,false,true], null);
var cval = cljs.core.get.cljs$core$IFn$_invoke$arity$2(vals,cljs.core.cst$kw$tick.cljs$core$IFn$_invoke$arity$1(data));
var nval = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ezq.core.world,cljs.core.assoc,cljs.core.cst$kw$tick,cval);
return nval;
})});
var G__25492 = "Ticker On";
return React.DOM.button(G__25491,G__25492);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"TickerBtn"], null));
return (TickerBtn.cljs$core$IFn$_invoke$arity$0 ? TickerBtn.cljs$core$IFn$_invoke$arity$0() : TickerBtn.call(null));
});
ezq.core.db = (function ezq$core$db(data){
var Db = /**
 * 
 */
ezq.core.Db = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (data__$1){
var G__25495 = ({"style": ({"fontSize": "2em"})});
var G__25496 = sablono.interpreter.interpret(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([data__$1], 0)));
return React.DOM.div(G__25495,G__25496);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"Db"], null));
return (Db.cljs$core$IFn$_invoke$arity$1 ? Db.cljs$core$IFn$_invoke$arity$1(data) : Db.call(null,data));
});
ezq.core.reset_button = (function ezq$core$reset_button(){
var btn = (function (){var G__25499 = ({"onClick": ezq.core.restart});
var G__25500 = "reset!";
return React.DOM.button(G__25499,G__25500);
})();
var Reset = /**
 * 
 */
ezq.core.Reset = quiescent.core.component.cljs$core$IFn$_invoke$arity$2(((function (btn){
return (function (){
return btn;
});})(btn))
,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"Reset"], null));
return (Reset.cljs$core$IFn$_invoke$arity$0 ? Reset.cljs$core$IFn$_invoke$arity$0() : Reset.call(null));
});
ezq.core.start = (function ezq$core$start(){
return ezq.core.request_render((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ezq.core.world) : cljs.core.deref.call(null,ezq.core.world)));
});
if(typeof ezq.core.app !== 'undefined'){
} else {
ezq.core.app = ezq.core.start();
}
figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$jsload_DASH_callback,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ezq.core.world,cljs.core.identity);
})], 0));
ezq.core.jsx__GT_clj = (function ezq$core$jsx__GT_clj(x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7189__auto__ = (function ezq$core$jsx__GT_clj_$_iter__25507(s__25508){
return (new cljs.core.LazySeq(null,(function (){
var s__25508__$1 = s__25508;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__25508__$1);
if(temp__4657__auto__){
var s__25508__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25508__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__25508__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__25510 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__25509 = (0);
while(true){
if((i__25509 < size__7188__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__25509);
cljs.core.chunk_append(b__25510,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(x[k])], null));

var G__25513 = (i__25509 + (1));
i__25509 = G__25513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25510),ezq$core$jsx__GT_clj_$_iter__25507(cljs.core.chunk_rest(s__25508__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25510),null);
}
} else {
var k = cljs.core.first(s__25508__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(x[k])], null),ezq$core$jsx__GT_clj_$_iter__25507(cljs.core.rest(s__25508__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__(Object.keys(x));
})());
});
ezq.core.mapalert = (function ezq$core$mapalert(jsmap){
console.log(jsmap);

console.log(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(jsmap)], 0)));

var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ezq.core.jsx__GT_clj(jsmap),"thing");
return alert(data);
});
goog.exportSymbol('ezq.core.mapalert', ezq.core.mapalert);
ezq.core.get_response = (function ezq$core$get_response(){
return cljs_http.client.get("www.google.com");
});
goog.exportSymbol('ezq.core.get_response', ezq.core.get_response);
