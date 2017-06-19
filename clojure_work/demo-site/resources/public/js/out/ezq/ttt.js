// Compiled by ClojureScript 1.9.518 {}
goog.provide('ezq.ttt');
goog.require('cljs.core');
goog.require('ezq.render');
ezq.ttt.winner = (function ezq$ttt$winner(p__41153){
var map__41196 = p__41153;
var map__41196__$1 = ((((!((map__41196 == null)))?((((map__41196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41196):map__41196);
var data = map__41196__$1;
var board = cljs.core.get.call(null,map__41196__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var rows = (function (){var iter__29611__auto__ = ((function (map__41196,map__41196__$1,data,board){
return (function ezq$ttt$winner_$_iter__41198(s__41199){
return (new cljs.core.LazySeq(null,((function (map__41196,map__41196__$1,data,board){
return (function (){
var s__41199__$1 = s__41199;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__41199__$1);
if(temp__6738__auto__){
var s__41199__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41199__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__41199__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__41201 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__41200 = (0);
while(true){
if((i__41200 < size__29610__auto__)){
var x = cljs.core._nth.call(null,c__29609__auto__,i__41200);
cljs.core.chunk_append.call(null,b__41201,(function (){var iter__29611__auto__ = ((function (i__41200,x,c__29609__auto__,size__29610__auto__,b__41201,s__41199__$2,temp__6738__auto__,map__41196,map__41196__$1,data,board){
return (function ezq$ttt$winner_$_iter__41198_$_iter__41210(s__41211){
return (new cljs.core.LazySeq(null,((function (i__41200,x,c__29609__auto__,size__29610__auto__,b__41201,s__41199__$2,temp__6738__auto__,map__41196,map__41196__$1,data,board){
return (function (){
var s__41211__$1 = s__41211;
while(true){
var temp__6738__auto____$1 = cljs.core.seq.call(null,s__41211__$1);
if(temp__6738__auto____$1){
var s__41211__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41211__$2)){
var c__29609__auto____$1 = cljs.core.chunk_first.call(null,s__41211__$2);
var size__29610__auto____$1 = cljs.core.count.call(null,c__29609__auto____$1);
var b__41213 = cljs.core.chunk_buffer.call(null,size__29610__auto____$1);
if((function (){var i__41212 = (0);
while(true){
if((i__41212 < size__29610__auto____$1)){
var y = cljs.core._nth.call(null,c__29609__auto____$1,i__41212);
cljs.core.chunk_append.call(null,b__41213,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__41238 = (i__41212 + (1));
i__41212 = G__41238;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41213),ezq$ttt$winner_$_iter__41198_$_iter__41210.call(null,cljs.core.chunk_rest.call(null,s__41211__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41213),null);
}
} else {
var y = cljs.core.first.call(null,s__41211__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),ezq$ttt$winner_$_iter__41198_$_iter__41210.call(null,cljs.core.rest.call(null,s__41211__$2)));
}
} else {
return null;
}
break;
}
});})(i__41200,x,c__29609__auto__,size__29610__auto__,b__41201,s__41199__$2,temp__6738__auto__,map__41196,map__41196__$1,data,board))
,null,null));
});})(i__41200,x,c__29609__auto__,size__29610__auto__,b__41201,s__41199__$2,temp__6738__auto__,map__41196,map__41196__$1,data,board))
;
return iter__29611__auto__.call(null,cljs.core.range.call(null,(3)));
})());

var G__41239 = (i__41200 + (1));
i__41200 = G__41239;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41201),ezq$ttt$winner_$_iter__41198.call(null,cljs.core.chunk_rest.call(null,s__41199__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41201),null);
}
} else {
var x = cljs.core.first.call(null,s__41199__$2);
return cljs.core.cons.call(null,(function (){var iter__29611__auto__ = ((function (x,s__41199__$2,temp__6738__auto__,map__41196,map__41196__$1,data,board){
return (function ezq$ttt$winner_$_iter__41198_$_iter__41214(s__41215){
return (new cljs.core.LazySeq(null,((function (x,s__41199__$2,temp__6738__auto__,map__41196,map__41196__$1,data,board){
return (function (){
var s__41215__$1 = s__41215;
while(true){
var temp__6738__auto____$1 = cljs.core.seq.call(null,s__41215__$1);
if(temp__6738__auto____$1){
var s__41215__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41215__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__41215__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__41217 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__41216 = (0);
while(true){
if((i__41216 < size__29610__auto__)){
var y = cljs.core._nth.call(null,c__29609__auto__,i__41216);
cljs.core.chunk_append.call(null,b__41217,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__41240 = (i__41216 + (1));
i__41216 = G__41240;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41217),ezq$ttt$winner_$_iter__41198_$_iter__41214.call(null,cljs.core.chunk_rest.call(null,s__41215__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41217),null);
}
} else {
var y = cljs.core.first.call(null,s__41215__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),ezq$ttt$winner_$_iter__41198_$_iter__41214.call(null,cljs.core.rest.call(null,s__41215__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__41199__$2,temp__6738__auto__,map__41196,map__41196__$1,data,board))
,null,null));
});})(x,s__41199__$2,temp__6738__auto__,map__41196,map__41196__$1,data,board))
;
return iter__29611__auto__.call(null,cljs.core.range.call(null,(3)));
})(),ezq$ttt$winner_$_iter__41198.call(null,cljs.core.rest.call(null,s__41199__$2)));
}
} else {
return null;
}
break;
}
});})(map__41196,map__41196__$1,data,board))
,null,null));
});})(map__41196,map__41196__$1,data,board))
;
return iter__29611__auto__.call(null,cljs.core.range.call(null,(3)));
})();
var diags = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(3)),cljs.core.range.call(null,(3))),cljs.core.map.call(null,cljs.core.vector,cljs.core.reverse.call(null,cljs.core.range.call(null,(3))),cljs.core.range.call(null,(3)))], null);
var cols = (function (){var iter__29611__auto__ = ((function (rows,diags,map__41196,map__41196__$1,data,board){
return (function ezq$ttt$winner_$_iter__41218(s__41219){
return (new cljs.core.LazySeq(null,((function (rows,diags,map__41196,map__41196__$1,data,board){
return (function (){
var s__41219__$1 = s__41219;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__41219__$1);
if(temp__6738__auto__){
var s__41219__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41219__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__41219__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__41221 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__41220 = (0);
while(true){
if((i__41220 < size__29610__auto__)){
var x = cljs.core._nth.call(null,c__29609__auto__,i__41220);
cljs.core.chunk_append.call(null,b__41221,(function (){var iter__29611__auto__ = ((function (i__41220,x,c__29609__auto__,size__29610__auto__,b__41221,s__41219__$2,temp__6738__auto__,rows,diags,map__41196,map__41196__$1,data,board){
return (function ezq$ttt$winner_$_iter__41218_$_iter__41230(s__41231){
return (new cljs.core.LazySeq(null,((function (i__41220,x,c__29609__auto__,size__29610__auto__,b__41221,s__41219__$2,temp__6738__auto__,rows,diags,map__41196,map__41196__$1,data,board){
return (function (){
var s__41231__$1 = s__41231;
while(true){
var temp__6738__auto____$1 = cljs.core.seq.call(null,s__41231__$1);
if(temp__6738__auto____$1){
var s__41231__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41231__$2)){
var c__29609__auto____$1 = cljs.core.chunk_first.call(null,s__41231__$2);
var size__29610__auto____$1 = cljs.core.count.call(null,c__29609__auto____$1);
var b__41233 = cljs.core.chunk_buffer.call(null,size__29610__auto____$1);
if((function (){var i__41232 = (0);
while(true){
if((i__41232 < size__29610__auto____$1)){
var y = cljs.core._nth.call(null,c__29609__auto____$1,i__41232);
cljs.core.chunk_append.call(null,b__41233,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__41241 = (i__41232 + (1));
i__41232 = G__41241;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41233),ezq$ttt$winner_$_iter__41218_$_iter__41230.call(null,cljs.core.chunk_rest.call(null,s__41231__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41233),null);
}
} else {
var y = cljs.core.first.call(null,s__41231__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),ezq$ttt$winner_$_iter__41218_$_iter__41230.call(null,cljs.core.rest.call(null,s__41231__$2)));
}
} else {
return null;
}
break;
}
});})(i__41220,x,c__29609__auto__,size__29610__auto__,b__41221,s__41219__$2,temp__6738__auto__,rows,diags,map__41196,map__41196__$1,data,board))
,null,null));
});})(i__41220,x,c__29609__auto__,size__29610__auto__,b__41221,s__41219__$2,temp__6738__auto__,rows,diags,map__41196,map__41196__$1,data,board))
;
return iter__29611__auto__.call(null,cljs.core.range.call(null,(3)));
})());

var G__41242 = (i__41220 + (1));
i__41220 = G__41242;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41221),ezq$ttt$winner_$_iter__41218.call(null,cljs.core.chunk_rest.call(null,s__41219__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41221),null);
}
} else {
var x = cljs.core.first.call(null,s__41219__$2);
return cljs.core.cons.call(null,(function (){var iter__29611__auto__ = ((function (x,s__41219__$2,temp__6738__auto__,rows,diags,map__41196,map__41196__$1,data,board){
return (function ezq$ttt$winner_$_iter__41218_$_iter__41234(s__41235){
return (new cljs.core.LazySeq(null,((function (x,s__41219__$2,temp__6738__auto__,rows,diags,map__41196,map__41196__$1,data,board){
return (function (){
var s__41235__$1 = s__41235;
while(true){
var temp__6738__auto____$1 = cljs.core.seq.call(null,s__41235__$1);
if(temp__6738__auto____$1){
var s__41235__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41235__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__41235__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__41237 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__41236 = (0);
while(true){
if((i__41236 < size__29610__auto__)){
var y = cljs.core._nth.call(null,c__29609__auto__,i__41236);
cljs.core.chunk_append.call(null,b__41237,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__41243 = (i__41236 + (1));
i__41236 = G__41243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41237),ezq$ttt$winner_$_iter__41218_$_iter__41234.call(null,cljs.core.chunk_rest.call(null,s__41235__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41237),null);
}
} else {
var y = cljs.core.first.call(null,s__41235__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),ezq$ttt$winner_$_iter__41218_$_iter__41234.call(null,cljs.core.rest.call(null,s__41235__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__41219__$2,temp__6738__auto__,rows,diags,map__41196,map__41196__$1,data,board))
,null,null));
});})(x,s__41219__$2,temp__6738__auto__,rows,diags,map__41196,map__41196__$1,data,board))
;
return iter__29611__auto__.call(null,cljs.core.range.call(null,(3)));
})(),ezq$ttt$winner_$_iter__41218.call(null,cljs.core.rest.call(null,s__41219__$2)));
}
} else {
return null;
}
break;
}
});})(rows,diags,map__41196,map__41196__$1,data,board))
,null,null));
});})(rows,diags,map__41196,map__41196__$1,data,board))
;
return iter__29611__auto__.call(null,cljs.core.range.call(null,(3)));
})();
var all = (new cljs.core.LazySeq(null,((function (rows,diags,cols,map__41196,map__41196__$1,data,board){
return (function (){
return cljs.core.concat.call(null,rows,diags,cols);
});})(rows,diags,cols,map__41196,map__41196__$1,data,board))
,null,null));
var seqs = cljs.core.vec.call(null,cljs.core.map.call(null,((function (rows,diags,cols,all,map__41196,map__41196__$1,data,board){
return (function (row){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (rows,diags,cols,all,map__41196,map__41196__$1,data,board){
return (function (p1__41150_SHARP_){
return cljs.core.get.call(null,board,p1__41150_SHARP_,(-1));
});})(rows,diags,cols,all,map__41196,map__41196__$1,data,board))
,row));
});})(rows,diags,cols,all,map__41196,map__41196__$1,data,board))
,all));
var fseqs = cljs.core.vec.call(null,cljs.core.filter.call(null,((function (rows,diags,cols,all,seqs,map__41196,map__41196__$1,data,board){
return (function (p1__41151_SHARP_){
return (cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(-1),null], null), null),p1__41151_SHARP_) == null);
});})(rows,diags,cols,all,seqs,map__41196,map__41196__$1,data,board))
,seqs));
var wseqs = cljs.core.filter.call(null,((function (rows,diags,cols,all,seqs,fseqs,map__41196,map__41196__$1,data,board){
return (function (p1__41152_SHARP_){
return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.set.call(null,p1__41152_SHARP_)));
});})(rows,diags,cols,all,seqs,fseqs,map__41196,map__41196__$1,data,board))
,fseqs);
var winner = ((cljs.core.seq.call(null,wseqs))?cljs.core.ffirst.call(null,wseqs):null);
var tie = cljs.core._EQ_.call(null,(9),cljs.core.count.call(null,board));
if(cljs.core.truth_(winner)){
return winner;
} else {
if(cljs.core.truth_((function (){var and__28737__auto__ = winner;
if(cljs.core.truth_(and__28737__auto__)){
return tie;
} else {
return and__28737__auto__;
}
})())){
return new cljs.core.Keyword(null,"tie","tie",-487201694);
} else {
if(tie){
return new cljs.core.Keyword(null,"tie","tie",-487201694);
} else {
return null;
}
}
}
});
ezq.ttt.ai_move = (function ezq$ttt$ai_move(var_args){
var args41244 = [];
var len__29970__auto___41251 = arguments.length;
var i__29971__auto___41252 = (0);
while(true){
if((i__29971__auto___41252 < len__29970__auto___41251)){
args41244.push((arguments[i__29971__auto___41252]));

var G__41253 = (i__29971__auto___41252 + (1));
i__29971__auto___41252 = G__41253;
continue;
} else {
}
break;
}

var G__41246 = args41244.length;
switch (G__41246) {
case 1:
return ezq.ttt.ai_move.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return ezq.ttt.ai_move.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args41244.length)].join('')));

}
});

ezq.ttt.ai_move.cljs$core$IFn$_invoke$arity$1 = (function (board){
return ezq.ttt.ai_move.call(null,board,cljs.core.rand_int.call(null,(3)),cljs.core.rand_int.call(null,(3)));
});

ezq.ttt.ai_move.cljs$core$IFn$_invoke$arity$3 = (function (board,x,y){
console.log("Attempting robo-move: ",x," ",y);

console.log("Current board spots: ",cljs.core.pr_str.call(null,(function (){var iter__29611__auto__ = (function ezq$ttt$iter__41247(s__41248){
return (new cljs.core.LazySeq(null,(function (){
var s__41248__$1 = s__41248;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__41248__$1);
if(temp__6738__auto__){
var s__41248__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41248__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__41248__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__41250 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__41249 = (0);
while(true){
if((i__41249 < size__29610__auto__)){
var k = cljs.core._nth.call(null,c__29609__auto__,i__41249);
cljs.core.chunk_append.call(null,b__41250,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__41255 = (i__41249 + (1));
i__41249 = G__41255;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41250),ezq$ttt$iter__41247.call(null,cljs.core.chunk_rest.call(null,s__41248__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41250),null);
}
} else {
var k = cljs.core.first.call(null,s__41248__$2);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),ezq$ttt$iter__41247.call(null,cljs.core.rest.call(null,s__41248__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29611__auto__.call(null,cljs.core.keys.call(null,board));
})()));

if(cljs.core.truth_(cljs.core.get.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return ezq.ttt.ai_move.call(null,board);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}
});

ezq.ttt.ai_move.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=ttt.js.map