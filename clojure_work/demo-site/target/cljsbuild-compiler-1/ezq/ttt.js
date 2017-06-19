// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('ezq.ttt');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ezq.render');
ezq.ttt.winner = (function ezq$ttt$winner(p__21678){
var map__21741 = p__21678;
var map__21741__$1 = ((((!((map__21741 == null)))?((((map__21741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21741):map__21741);
var data = map__21741__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21741__$1,cljs.core.cst$kw$board);
var rows = (function (){var iter__8463__auto__ = ((function (map__21741,map__21741__$1,data,board){
return (function ezq$ttt$winner_$_iter__21743(s__21744){
return (new cljs.core.LazySeq(null,((function (map__21741,map__21741__$1,data,board){
return (function (){
var s__21744__$1 = s__21744;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__21744__$1);
if(temp__6738__auto__){
var s__21744__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21744__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__21744__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__21746 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__21745 = (0);
while(true){
if((i__21745 < size__8462__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__21745);
cljs.core.chunk_append(b__21746,(function (){var iter__8463__auto__ = ((function (i__21745,x,c__8461__auto__,size__8462__auto__,b__21746,s__21744__$2,temp__6738__auto__,map__21741,map__21741__$1,data,board){
return (function ezq$ttt$winner_$_iter__21743_$_iter__21761(s__21762){
return (new cljs.core.LazySeq(null,((function (i__21745,x,c__8461__auto__,size__8462__auto__,b__21746,s__21744__$2,temp__6738__auto__,map__21741,map__21741__$1,data,board){
return (function (){
var s__21762__$1 = s__21762;
while(true){
var temp__6738__auto____$1 = cljs.core.seq(s__21762__$1);
if(temp__6738__auto____$1){
var s__21762__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21762__$2)){
var c__8461__auto____$1 = cljs.core.chunk_first(s__21762__$2);
var size__8462__auto____$1 = cljs.core.count(c__8461__auto____$1);
var b__21764 = cljs.core.chunk_buffer(size__8462__auto____$1);
if((function (){var i__21763 = (0);
while(true){
if((i__21763 < size__8462__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto____$1,i__21763);
cljs.core.chunk_append(b__21764,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__21803 = (i__21763 + (1));
i__21763 = G__21803;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21764),ezq$ttt$winner_$_iter__21743_$_iter__21761(cljs.core.chunk_rest(s__21762__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21764),null);
}
} else {
var y = cljs.core.first(s__21762__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),ezq$ttt$winner_$_iter__21743_$_iter__21761(cljs.core.rest(s__21762__$2)));
}
} else {
return null;
}
break;
}
});})(i__21745,x,c__8461__auto__,size__8462__auto__,b__21746,s__21744__$2,temp__6738__auto__,map__21741,map__21741__$1,data,board))
,null,null));
});})(i__21745,x,c__8461__auto__,size__8462__auto__,b__21746,s__21744__$2,temp__6738__auto__,map__21741,map__21741__$1,data,board))
;
return iter__8463__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})());

var G__21804 = (i__21745 + (1));
i__21745 = G__21804;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21746),ezq$ttt$winner_$_iter__21743(cljs.core.chunk_rest(s__21744__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21746),null);
}
} else {
var x = cljs.core.first(s__21744__$2);
return cljs.core.cons((function (){var iter__8463__auto__ = ((function (x,s__21744__$2,temp__6738__auto__,map__21741,map__21741__$1,data,board){
return (function ezq$ttt$winner_$_iter__21743_$_iter__21767(s__21768){
return (new cljs.core.LazySeq(null,((function (x,s__21744__$2,temp__6738__auto__,map__21741,map__21741__$1,data,board){
return (function (){
var s__21768__$1 = s__21768;
while(true){
var temp__6738__auto____$1 = cljs.core.seq(s__21768__$1);
if(temp__6738__auto____$1){
var s__21768__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21768__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__21768__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__21770 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__21769 = (0);
while(true){
if((i__21769 < size__8462__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__21769);
cljs.core.chunk_append(b__21770,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__21805 = (i__21769 + (1));
i__21769 = G__21805;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21770),ezq$ttt$winner_$_iter__21743_$_iter__21767(cljs.core.chunk_rest(s__21768__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21770),null);
}
} else {
var y = cljs.core.first(s__21768__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),ezq$ttt$winner_$_iter__21743_$_iter__21767(cljs.core.rest(s__21768__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__21744__$2,temp__6738__auto__,map__21741,map__21741__$1,data,board))
,null,null));
});})(x,s__21744__$2,temp__6738__auto__,map__21741,map__21741__$1,data,board))
;
return iter__8463__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})(),ezq$ttt$winner_$_iter__21743(cljs.core.rest(s__21744__$2)));
}
} else {
return null;
}
break;
}
});})(map__21741,map__21741__$1,data,board))
,null,null));
});})(map__21741,map__21741__$1,data,board))
;
return iter__8463__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})();
var diags = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))),cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)))], null);
var cols = (function (){var iter__8463__auto__ = ((function (rows,diags,map__21741,map__21741__$1,data,board){
return (function ezq$ttt$winner_$_iter__21773(s__21774){
return (new cljs.core.LazySeq(null,((function (rows,diags,map__21741,map__21741__$1,data,board){
return (function (){
var s__21774__$1 = s__21774;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__21774__$1);
if(temp__6738__auto__){
var s__21774__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21774__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__21774__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__21776 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__21775 = (0);
while(true){
if((i__21775 < size__8462__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__21775);
cljs.core.chunk_append(b__21776,(function (){var iter__8463__auto__ = ((function (i__21775,x,c__8461__auto__,size__8462__auto__,b__21776,s__21774__$2,temp__6738__auto__,rows,diags,map__21741,map__21741__$1,data,board){
return (function ezq$ttt$winner_$_iter__21773_$_iter__21791(s__21792){
return (new cljs.core.LazySeq(null,((function (i__21775,x,c__8461__auto__,size__8462__auto__,b__21776,s__21774__$2,temp__6738__auto__,rows,diags,map__21741,map__21741__$1,data,board){
return (function (){
var s__21792__$1 = s__21792;
while(true){
var temp__6738__auto____$1 = cljs.core.seq(s__21792__$1);
if(temp__6738__auto____$1){
var s__21792__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21792__$2)){
var c__8461__auto____$1 = cljs.core.chunk_first(s__21792__$2);
var size__8462__auto____$1 = cljs.core.count(c__8461__auto____$1);
var b__21794 = cljs.core.chunk_buffer(size__8462__auto____$1);
if((function (){var i__21793 = (0);
while(true){
if((i__21793 < size__8462__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto____$1,i__21793);
cljs.core.chunk_append(b__21794,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__21806 = (i__21793 + (1));
i__21793 = G__21806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21794),ezq$ttt$winner_$_iter__21773_$_iter__21791(cljs.core.chunk_rest(s__21792__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21794),null);
}
} else {
var y = cljs.core.first(s__21792__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),ezq$ttt$winner_$_iter__21773_$_iter__21791(cljs.core.rest(s__21792__$2)));
}
} else {
return null;
}
break;
}
});})(i__21775,x,c__8461__auto__,size__8462__auto__,b__21776,s__21774__$2,temp__6738__auto__,rows,diags,map__21741,map__21741__$1,data,board))
,null,null));
});})(i__21775,x,c__8461__auto__,size__8462__auto__,b__21776,s__21774__$2,temp__6738__auto__,rows,diags,map__21741,map__21741__$1,data,board))
;
return iter__8463__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})());

var G__21807 = (i__21775 + (1));
i__21775 = G__21807;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21776),ezq$ttt$winner_$_iter__21773(cljs.core.chunk_rest(s__21774__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21776),null);
}
} else {
var x = cljs.core.first(s__21774__$2);
return cljs.core.cons((function (){var iter__8463__auto__ = ((function (x,s__21774__$2,temp__6738__auto__,rows,diags,map__21741,map__21741__$1,data,board){
return (function ezq$ttt$winner_$_iter__21773_$_iter__21797(s__21798){
return (new cljs.core.LazySeq(null,((function (x,s__21774__$2,temp__6738__auto__,rows,diags,map__21741,map__21741__$1,data,board){
return (function (){
var s__21798__$1 = s__21798;
while(true){
var temp__6738__auto____$1 = cljs.core.seq(s__21798__$1);
if(temp__6738__auto____$1){
var s__21798__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21798__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__21798__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__21800 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__21799 = (0);
while(true){
if((i__21799 < size__8462__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__21799);
cljs.core.chunk_append(b__21800,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__21808 = (i__21799 + (1));
i__21799 = G__21808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21800),ezq$ttt$winner_$_iter__21773_$_iter__21797(cljs.core.chunk_rest(s__21798__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21800),null);
}
} else {
var y = cljs.core.first(s__21798__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),ezq$ttt$winner_$_iter__21773_$_iter__21797(cljs.core.rest(s__21798__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__21774__$2,temp__6738__auto__,rows,diags,map__21741,map__21741__$1,data,board))
,null,null));
});})(x,s__21774__$2,temp__6738__auto__,rows,diags,map__21741,map__21741__$1,data,board))
;
return iter__8463__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})(),ezq$ttt$winner_$_iter__21773(cljs.core.rest(s__21774__$2)));
}
} else {
return null;
}
break;
}
});})(rows,diags,map__21741,map__21741__$1,data,board))
,null,null));
});})(rows,diags,map__21741,map__21741__$1,data,board))
;
return iter__8463__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
})();
var all = (new cljs.core.LazySeq(null,((function (rows,diags,cols,map__21741,map__21741__$1,data,board){
return (function (){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(rows,diags,cljs.core.array_seq([cols], 0));
});})(rows,diags,cols,map__21741,map__21741__$1,data,board))
,null,null));
var seqs = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (rows,diags,cols,all,map__21741,map__21741__$1,data,board){
return (function (row){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (rows,diags,cols,all,map__21741,map__21741__$1,data,board){
return (function (p1__21675_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(board,p1__21675_SHARP_,(-1));
});})(rows,diags,cols,all,map__21741,map__21741__$1,data,board))
,row));
});})(rows,diags,cols,all,map__21741,map__21741__$1,data,board))
,all));
var fseqs = cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (rows,diags,cols,all,seqs,map__21741,map__21741__$1,data,board){
return (function (p1__21676_SHARP_){
return (cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(-1),null], null), null),p1__21676_SHARP_) == null);
});})(rows,diags,cols,all,seqs,map__21741,map__21741__$1,data,board))
,seqs));
var wseqs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (rows,diags,cols,all,seqs,fseqs,map__21741,map__21741__$1,data,board){
return (function (p1__21677_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.set(p1__21677_SHARP_)));
});})(rows,diags,cols,all,seqs,fseqs,map__21741,map__21741__$1,data,board))
,fseqs);
var winner = ((cljs.core.seq(wseqs))?cljs.core.ffirst(wseqs):null);
var tie = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((9),cljs.core.count(board));
if(cljs.core.truth_(winner)){
return winner;
} else {
if(cljs.core.truth_((function (){var and__7589__auto__ = winner;
if(cljs.core.truth_(and__7589__auto__)){
return tie;
} else {
return and__7589__auto__;
}
})())){
return cljs.core.cst$kw$tie;
} else {
if(tie){
return cljs.core.cst$kw$tie;
} else {
return null;
}
}
}
});
ezq.ttt.ai_move = (function ezq$ttt$ai_move(var_args){
var args21809 = [];
var len__8822__auto___21818 = arguments.length;
var i__8823__auto___21819 = (0);
while(true){
if((i__8823__auto___21819 < len__8822__auto___21818)){
args21809.push((arguments[i__8823__auto___21819]));

var G__21820 = (i__8823__auto___21819 + (1));
i__8823__auto___21819 = G__21820;
continue;
} else {
}
break;
}

var G__21811 = args21809.length;
switch (G__21811) {
case 1:
return ezq.ttt.ai_move.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return ezq.ttt.ai_move.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21809.length)].join('')));

}
});

ezq.ttt.ai_move.cljs$core$IFn$_invoke$arity$1 = (function (board){
return ezq.ttt.ai_move.cljs$core$IFn$_invoke$arity$3(board,cljs.core.rand_int((3)),cljs.core.rand_int((3)));
});

ezq.ttt.ai_move.cljs$core$IFn$_invoke$arity$3 = (function (board,x,y){
console.log("Attempting robo-move: ",x," ",y);

console.log("Current board spots: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var iter__8463__auto__ = (function ezq$ttt$iter__21812(s__21813){
return (new cljs.core.LazySeq(null,(function (){
var s__21813__$1 = s__21813;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__21813__$1);
if(temp__6738__auto__){
var s__21813__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21813__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__21813__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__21815 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__21814 = (0);
while(true){
if((i__21814 < size__8462__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__21814);
cljs.core.chunk_append(b__21815,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__21822 = (i__21814 + (1));
i__21814 = G__21822;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21815),ezq$ttt$iter__21812(cljs.core.chunk_rest(s__21813__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21815),null);
}
} else {
var k = cljs.core.first(s__21813__$2);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),ezq$ttt$iter__21812(cljs.core.rest(s__21813__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8463__auto__(cljs.core.keys(board));
})()], 0)));

if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
return ezq.ttt.ai_move.cljs$core$IFn$_invoke$arity$1(board);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}
});

ezq.ttt.ai_move.cljs$lang$maxFixedArity = 3;

