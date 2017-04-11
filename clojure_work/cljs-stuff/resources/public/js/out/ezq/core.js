// Compiled by ClojureScript 1.9.229 {}
goog.provide('ezq.core');
goog.require('cljs.core');
goog.require('quiescent.core');
goog.require('figwheel.client');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clojure.string');
ezq.core.init_state = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"show-state","show-state",-733141016),true,new cljs.core.Keyword(null,"tick","tick",-835886976),true,new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"winner","winner",714604679),null], null);
if(typeof ezq.core.world !== 'undefined'){
} else {
ezq.core.world = cljs.core.atom.call(null,ezq.core.init_state);
}
var render_pending_QMARK__19587 = cljs.core.atom.call(null,false);
ezq.core.request_render = ((function (render_pending_QMARK__19587){
return (function ezq$core$request_render(data){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,render_pending_QMARK__19587,false,true))){
return window.requestAnimationFrame(((function (render_pending_QMARK__19587){
return (function (){
quiescent.core.render.call(null,ezq.core.root.call(null,data),document.getElementById("main"));

return cljs.core.reset_BANG_.call(null,render_pending_QMARK__19587,false);
});})(render_pending_QMARK__19587))
);
} else {
return null;
}
});})(render_pending_QMARK__19587))
;
cljs.core.add_watch.call(null,ezq.core.world,new cljs.core.Keyword("ezq.core","render","ezq.core/render",-1225480889),(function (_,___$1,___$2,data){
return ezq.core.request_render.call(null,data);
}));
ezq.core.winner = (function ezq$core$winner(p__19591){
var map__19634 = p__19591;
var map__19634__$1 = ((((!((map__19634 == null)))?((((map__19634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19634):map__19634);
var data = map__19634__$1;
var board = cljs.core.get.call(null,map__19634__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,board),(9))){
return new cljs.core.Keyword(null,"tie","tie",-487201694);
} else {
var rows = (function (){var iter__7189__auto__ = ((function (map__19634,map__19634__$1,data,board){
return (function ezq$core$winner_$_iter__19636(s__19637){
return (new cljs.core.LazySeq(null,((function (map__19634,map__19634__$1,data,board){
return (function (){
var s__19637__$1 = s__19637;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19637__$1);
if(temp__4657__auto__){
var s__19637__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19637__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__19637__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__19639 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__19638 = (0);
while(true){
if((i__19638 < size__7188__auto__)){
var x = cljs.core._nth.call(null,c__7187__auto__,i__19638);
cljs.core.chunk_append.call(null,b__19639,(function (){var iter__7189__auto__ = ((function (i__19638,x,c__7187__auto__,size__7188__auto__,b__19639,s__19637__$2,temp__4657__auto__,map__19634,map__19634__$1,data,board){
return (function ezq$core$winner_$_iter__19636_$_iter__19648(s__19649){
return (new cljs.core.LazySeq(null,((function (i__19638,x,c__7187__auto__,size__7188__auto__,b__19639,s__19637__$2,temp__4657__auto__,map__19634,map__19634__$1,data,board){
return (function (){
var s__19649__$1 = s__19649;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__19649__$1);
if(temp__4657__auto____$1){
var s__19649__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19649__$2)){
var c__7187__auto____$1 = cljs.core.chunk_first.call(null,s__19649__$2);
var size__7188__auto____$1 = cljs.core.count.call(null,c__7187__auto____$1);
var b__19651 = cljs.core.chunk_buffer.call(null,size__7188__auto____$1);
if((function (){var i__19650 = (0);
while(true){
if((i__19650 < size__7188__auto____$1)){
var y = cljs.core._nth.call(null,c__7187__auto____$1,i__19650);
cljs.core.chunk_append.call(null,b__19651,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__19676 = (i__19650 + (1));
i__19650 = G__19676;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19651),ezq$core$winner_$_iter__19636_$_iter__19648.call(null,cljs.core.chunk_rest.call(null,s__19649__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19651),null);
}
} else {
var y = cljs.core.first.call(null,s__19649__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),ezq$core$winner_$_iter__19636_$_iter__19648.call(null,cljs.core.rest.call(null,s__19649__$2)));
}
} else {
return null;
}
break;
}
});})(i__19638,x,c__7187__auto__,size__7188__auto__,b__19639,s__19637__$2,temp__4657__auto__,map__19634,map__19634__$1,data,board))
,null,null));
});})(i__19638,x,c__7187__auto__,size__7188__auto__,b__19639,s__19637__$2,temp__4657__auto__,map__19634,map__19634__$1,data,board))
;
return iter__7189__auto__.call(null,cljs.core.range.call(null,(3)));
})());

var G__19677 = (i__19638 + (1));
i__19638 = G__19677;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19639),ezq$core$winner_$_iter__19636.call(null,cljs.core.chunk_rest.call(null,s__19637__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19639),null);
}
} else {
var x = cljs.core.first.call(null,s__19637__$2);
return cljs.core.cons.call(null,(function (){var iter__7189__auto__ = ((function (x,s__19637__$2,temp__4657__auto__,map__19634,map__19634__$1,data,board){
return (function ezq$core$winner_$_iter__19636_$_iter__19652(s__19653){
return (new cljs.core.LazySeq(null,((function (x,s__19637__$2,temp__4657__auto__,map__19634,map__19634__$1,data,board){
return (function (){
var s__19653__$1 = s__19653;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__19653__$1);
if(temp__4657__auto____$1){
var s__19653__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19653__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__19653__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__19655 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__19654 = (0);
while(true){
if((i__19654 < size__7188__auto__)){
var y = cljs.core._nth.call(null,c__7187__auto__,i__19654);
cljs.core.chunk_append.call(null,b__19655,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__19678 = (i__19654 + (1));
i__19654 = G__19678;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19655),ezq$core$winner_$_iter__19636_$_iter__19652.call(null,cljs.core.chunk_rest.call(null,s__19653__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19655),null);
}
} else {
var y = cljs.core.first.call(null,s__19653__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),ezq$core$winner_$_iter__19636_$_iter__19652.call(null,cljs.core.rest.call(null,s__19653__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__19637__$2,temp__4657__auto__,map__19634,map__19634__$1,data,board))
,null,null));
});})(x,s__19637__$2,temp__4657__auto__,map__19634,map__19634__$1,data,board))
;
return iter__7189__auto__.call(null,cljs.core.range.call(null,(3)));
})(),ezq$core$winner_$_iter__19636.call(null,cljs.core.rest.call(null,s__19637__$2)));
}
} else {
return null;
}
break;
}
});})(map__19634,map__19634__$1,data,board))
,null,null));
});})(map__19634,map__19634__$1,data,board))
;
return iter__7189__auto__.call(null,cljs.core.range.call(null,(3)));
})();
var diags = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(3)),cljs.core.range.call(null,(3))),cljs.core.map.call(null,cljs.core.vector,cljs.core.reverse.call(null,cljs.core.range.call(null,(3))),cljs.core.range.call(null,(3)))], null);
var cols = (function (){var iter__7189__auto__ = ((function (rows,diags,map__19634,map__19634__$1,data,board){
return (function ezq$core$winner_$_iter__19656(s__19657){
return (new cljs.core.LazySeq(null,((function (rows,diags,map__19634,map__19634__$1,data,board){
return (function (){
var s__19657__$1 = s__19657;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19657__$1);
if(temp__4657__auto__){
var s__19657__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19657__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__19657__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__19659 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__19658 = (0);
while(true){
if((i__19658 < size__7188__auto__)){
var x = cljs.core._nth.call(null,c__7187__auto__,i__19658);
cljs.core.chunk_append.call(null,b__19659,(function (){var iter__7189__auto__ = ((function (i__19658,x,c__7187__auto__,size__7188__auto__,b__19659,s__19657__$2,temp__4657__auto__,rows,diags,map__19634,map__19634__$1,data,board){
return (function ezq$core$winner_$_iter__19656_$_iter__19668(s__19669){
return (new cljs.core.LazySeq(null,((function (i__19658,x,c__7187__auto__,size__7188__auto__,b__19659,s__19657__$2,temp__4657__auto__,rows,diags,map__19634,map__19634__$1,data,board){
return (function (){
var s__19669__$1 = s__19669;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__19669__$1);
if(temp__4657__auto____$1){
var s__19669__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19669__$2)){
var c__7187__auto____$1 = cljs.core.chunk_first.call(null,s__19669__$2);
var size__7188__auto____$1 = cljs.core.count.call(null,c__7187__auto____$1);
var b__19671 = cljs.core.chunk_buffer.call(null,size__7188__auto____$1);
if((function (){var i__19670 = (0);
while(true){
if((i__19670 < size__7188__auto____$1)){
var y = cljs.core._nth.call(null,c__7187__auto____$1,i__19670);
cljs.core.chunk_append.call(null,b__19671,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__19679 = (i__19670 + (1));
i__19670 = G__19679;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19671),ezq$core$winner_$_iter__19656_$_iter__19668.call(null,cljs.core.chunk_rest.call(null,s__19669__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19671),null);
}
} else {
var y = cljs.core.first.call(null,s__19669__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),ezq$core$winner_$_iter__19656_$_iter__19668.call(null,cljs.core.rest.call(null,s__19669__$2)));
}
} else {
return null;
}
break;
}
});})(i__19658,x,c__7187__auto__,size__7188__auto__,b__19659,s__19657__$2,temp__4657__auto__,rows,diags,map__19634,map__19634__$1,data,board))
,null,null));
});})(i__19658,x,c__7187__auto__,size__7188__auto__,b__19659,s__19657__$2,temp__4657__auto__,rows,diags,map__19634,map__19634__$1,data,board))
;
return iter__7189__auto__.call(null,cljs.core.range.call(null,(3)));
})());

var G__19680 = (i__19658 + (1));
i__19658 = G__19680;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19659),ezq$core$winner_$_iter__19656.call(null,cljs.core.chunk_rest.call(null,s__19657__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19659),null);
}
} else {
var x = cljs.core.first.call(null,s__19657__$2);
return cljs.core.cons.call(null,(function (){var iter__7189__auto__ = ((function (x,s__19657__$2,temp__4657__auto__,rows,diags,map__19634,map__19634__$1,data,board){
return (function ezq$core$winner_$_iter__19656_$_iter__19672(s__19673){
return (new cljs.core.LazySeq(null,((function (x,s__19657__$2,temp__4657__auto__,rows,diags,map__19634,map__19634__$1,data,board){
return (function (){
var s__19673__$1 = s__19673;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__19673__$1);
if(temp__4657__auto____$1){
var s__19673__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19673__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__19673__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__19675 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__19674 = (0);
while(true){
if((i__19674 < size__7188__auto__)){
var y = cljs.core._nth.call(null,c__7187__auto__,i__19674);
cljs.core.chunk_append.call(null,b__19675,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));

var G__19681 = (i__19674 + (1));
i__19674 = G__19681;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19675),ezq$core$winner_$_iter__19656_$_iter__19672.call(null,cljs.core.chunk_rest.call(null,s__19673__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19675),null);
}
} else {
var y = cljs.core.first.call(null,s__19673__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),ezq$core$winner_$_iter__19656_$_iter__19672.call(null,cljs.core.rest.call(null,s__19673__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__19657__$2,temp__4657__auto__,rows,diags,map__19634,map__19634__$1,data,board))
,null,null));
});})(x,s__19657__$2,temp__4657__auto__,rows,diags,map__19634,map__19634__$1,data,board))
;
return iter__7189__auto__.call(null,cljs.core.range.call(null,(3)));
})(),ezq$core$winner_$_iter__19656.call(null,cljs.core.rest.call(null,s__19657__$2)));
}
} else {
return null;
}
break;
}
});})(rows,diags,map__19634,map__19634__$1,data,board))
,null,null));
});})(rows,diags,map__19634,map__19634__$1,data,board))
;
return iter__7189__auto__.call(null,cljs.core.range.call(null,(3)));
})();
var all = (new cljs.core.LazySeq(null,((function (rows,diags,cols,map__19634,map__19634__$1,data,board){
return (function (){
return cljs.core.concat.call(null,rows,diags,cols);
});})(rows,diags,cols,map__19634,map__19634__$1,data,board))
,null,null));
var seqs = cljs.core.vec.call(null,cljs.core.map.call(null,((function (rows,diags,cols,all,map__19634,map__19634__$1,data,board){
return (function (row){
return cljs.core.vec.call(null,cljs.core.map.call(null,((function (rows,diags,cols,all,map__19634,map__19634__$1,data,board){
return (function (p1__19588_SHARP_){
return cljs.core.get.call(null,board,p1__19588_SHARP_,(-1));
});})(rows,diags,cols,all,map__19634,map__19634__$1,data,board))
,row));
});})(rows,diags,cols,all,map__19634,map__19634__$1,data,board))
,all));
var fseqs = cljs.core.vec.call(null,cljs.core.filter.call(null,((function (rows,diags,cols,all,seqs,map__19634,map__19634__$1,data,board){
return (function (p1__19589_SHARP_){
return (cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(-1),null], null), null),p1__19589_SHARP_) == null);
});})(rows,diags,cols,all,seqs,map__19634,map__19634__$1,data,board))
,seqs));
var wseqs = cljs.core.filter.call(null,((function (rows,diags,cols,all,seqs,fseqs,map__19634,map__19634__$1,data,board){
return (function (p1__19590_SHARP_){
return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.set.call(null,p1__19590_SHARP_)));
});})(rows,diags,cols,all,seqs,fseqs,map__19634,map__19634__$1,data,board))
,fseqs);
var winner__$1 = ((cljs.core.seq.call(null,wseqs))?cljs.core.ffirst.call(null,wseqs):null);
return winner__$1;
}
});
ezq.core.update_turn = (function ezq$core$update_turn(p__19682){
var map__19685 = p__19682;
var map__19685__$1 = ((((!((map__19685 == null)))?((((map__19685.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19685.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19685):map__19685);
var data = map__19685__$1;
var turn = cljs.core.get.call(null,map__19685__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
return cljs.core.assoc_in.call(null,data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"turn","turn",75759344)], null),cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),turn));
});
ezq.core.update_board = (function ezq$core$update_board(p__19687,x,y){
var map__19690 = p__19687;
var map__19690__$1 = ((((!((map__19690 == null)))?((((map__19690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19690):map__19690);
var data = map__19690__$1;
var board = cljs.core.get.call(null,map__19690__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var turn = cljs.core.get.call(null,map__19690__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
return cljs.core.assoc_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),turn);
});
ezq.core.update_winner = (function ezq$core$update_winner(p__19692){
var map__19695 = p__19692;
var map__19695__$1 = ((((!((map__19695 == null)))?((((map__19695.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19695.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19695):map__19695);
var data = map__19695__$1;
var board = cljs.core.get.call(null,map__19695__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var the_winner = ezq.core.winner.call(null,data);
var ws = (((the_winner == null))?"none":the_winner);
if(cljs.core.truth_(the_winner)){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"winner","winner",714604679),the_winner);
} else {
return data;
}
});
ezq.core.update_board_state_BANG_ = (function ezq$core$update_board_state_BANG_(data,x,y){
console.log([cljs.core.str(data),cljs.core.str(" "),cljs.core.str(x),cljs.core.str(" "),cljs.core.str(y)].join(''));

return cljs.core.reset_BANG_.call(null,ezq.core.world,ezq.core.update_winner.call(null,ezq.core.update_turn.call(null,ezq.core.update_board.call(null,data,x,y))));
});
ezq.core.restart = (function ezq$core$restart(){
return cljs.core.reset_BANG_.call(null,ezq.core.world,ezq.core.init_state);
});
goog.exportSymbol('ezq.core.restart', ezq.core.restart);
ezq.core.turn_status = (function ezq$core$turn_status(p__19697){
var map__19703 = p__19697;
var map__19703__$1 = ((((!((map__19703 == null)))?((((map__19703.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19703.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19703):map__19703);
var data = map__19703__$1;
var turn = cljs.core.get.call(null,map__19703__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var winner = cljs.core.get.call(null,map__19703__$1,new cljs.core.Keyword(null,"winner","winner",714604679));
var Turn = /**
 * 
 */
ezq.core.Turn = quiescent.core.component.call(null,((function (map__19703,map__19703__$1,data,turn,winner){
return (function (){
if(cljs.core._EQ_.call(null,winner,new cljs.core.Keyword(null,"tie","tie",-487201694))){
var attrs19705 = [cljs.core.str("Game is tied!")].join('');
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs19705))?sablono.interpreter.attributes.call(null,attrs19705):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs19705))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs19705)], null))));
} else {
if(cljs.core.truth_(winner)){
var attrs19706 = [cljs.core.str(winner),cljs.core.str(" is the winner")].join('');
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs19706))?sablono.interpreter.attributes.call(null,attrs19706):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs19706))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs19706)], null))));
} else {
var attrs19707 = [cljs.core.str(turn),cljs.core.str("'s turn to play")].join('');
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs19707))?sablono.interpreter.attributes.call(null,attrs19707):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs19707))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs19707)], null))));

}
}
});})(map__19703,map__19703__$1,data,turn,winner))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Turn"], null));
return Turn.call(null);
});
ezq.core.cell = (function ezq$core$cell(p__19708,x,y){
var map__19712 = p__19708;
var map__19712__$1 = ((((!((map__19712 == null)))?((((map__19712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19712):map__19712);
var data = map__19712__$1;
var board = cljs.core.get.call(null,map__19712__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var turn = cljs.core.get.call(null,map__19712__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var winner = cljs.core.get.call(null,map__19712__$1,new cljs.core.Keyword(null,"winner","winner",714604679));
var cell_status = cljs.core.get.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),null);
var style = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], null);
var span = ((function (cell_status,style,map__19712,map__19712__$1,data,board,turn,winner){
return (function (x__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),style,x__$1], null);
});})(cell_status,style,map__19712,map__19712__$1,data,board,turn,winner))
;
var cell_out = sablono.interpreter.interpret.call(null,(function (){var G__19714 = (((cell_status instanceof cljs.core.Keyword))?cell_status.fqn:null);
switch (G__19714) {
case "x":
return span.call(null,"X");

break;
case "o":
return span.call(null,"O");

break;
default:
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),(cljs.core.truth_(winner)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__19714,cell_status,style,span,map__19712,map__19712__$1,data,board,turn,winner){
return (function (){
return ezq.core.update_board_state_BANG_.call(null,data,x,y);
});})(G__19714,cell_status,style,span,map__19712,map__19712__$1,data,board,turn,winner))
], null)),"[ ]"], null);

}
})());
var Cell = /**
 * 
 */
ezq.core.Cell = quiescent.core.component.call(null,((function (cell_status,style,span,cell_out,map__19712,map__19712__$1,data,board,turn,winner){
return (function (){
return cell_out;
});})(cell_status,style,span,cell_out,map__19712,map__19712__$1,data,board,turn,winner))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Cell"], null));
return Cell.call(null);
});
ezq.core.board = (function ezq$core$board(data,n,m){
var _board = React.DOM.table(null,React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__7189__auto__ = (function ezq$core$board_$_iter__19736(s__19737){
return (new cljs.core.LazySeq(null,(function (){
var s__19737__$1 = s__19737;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19737__$1);
if(temp__4657__auto__){
var s__19737__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19737__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__19737__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__19739 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__19738 = (0);
while(true){
if((i__19738 < size__7188__auto__)){
var x = cljs.core._nth.call(null,c__7187__auto__,i__19738);
cljs.core.chunk_append.call(null,b__19739,React.DOM.tr(null,cljs.core.into_array.call(null,(function (){var iter__7189__auto__ = ((function (i__19738,x,c__7187__auto__,size__7188__auto__,b__19739,s__19737__$2,temp__4657__auto__){
return (function ezq$core$board_$_iter__19736_$_iter__19748(s__19749){
return (new cljs.core.LazySeq(null,((function (i__19738,x,c__7187__auto__,size__7188__auto__,b__19739,s__19737__$2,temp__4657__auto__){
return (function (){
var s__19749__$1 = s__19749;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__19749__$1);
if(temp__4657__auto____$1){
var s__19749__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19749__$2)){
var c__7187__auto____$1 = cljs.core.chunk_first.call(null,s__19749__$2);
var size__7188__auto____$1 = cljs.core.count.call(null,c__7187__auto____$1);
var b__19751 = cljs.core.chunk_buffer.call(null,size__7188__auto____$1);
if((function (){var i__19750 = (0);
while(true){
if((i__19750 < size__7188__auto____$1)){
var y = cljs.core._nth.call(null,c__7187__auto____$1,i__19750);
cljs.core.chunk_append.call(null,b__19751,React.DOM.td(({"style": ({"height": (30), "width": (30)})}),sablono.interpreter.interpret.call(null,ezq.core.cell.call(null,data,x,y))));

var G__19756 = (i__19750 + (1));
i__19750 = G__19756;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19751),ezq$core$board_$_iter__19736_$_iter__19748.call(null,cljs.core.chunk_rest.call(null,s__19749__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19751),null);
}
} else {
var y = cljs.core.first.call(null,s__19749__$2);
return cljs.core.cons.call(null,React.DOM.td(({"style": ({"height": (30), "width": (30)})}),sablono.interpreter.interpret.call(null,ezq.core.cell.call(null,data,x,y))),ezq$core$board_$_iter__19736_$_iter__19748.call(null,cljs.core.rest.call(null,s__19749__$2)));
}
} else {
return null;
}
break;
}
});})(i__19738,x,c__7187__auto__,size__7188__auto__,b__19739,s__19737__$2,temp__4657__auto__))
,null,null));
});})(i__19738,x,c__7187__auto__,size__7188__auto__,b__19739,s__19737__$2,temp__4657__auto__))
;
return iter__7189__auto__.call(null,cljs.core.range.call(null,m));
})())));

var G__19757 = (i__19738 + (1));
i__19738 = G__19757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19739),ezq$core$board_$_iter__19736.call(null,cljs.core.chunk_rest.call(null,s__19737__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19739),null);
}
} else {
var x = cljs.core.first.call(null,s__19737__$2);
return cljs.core.cons.call(null,React.DOM.tr(null,cljs.core.into_array.call(null,(function (){var iter__7189__auto__ = ((function (x,s__19737__$2,temp__4657__auto__){
return (function ezq$core$board_$_iter__19736_$_iter__19752(s__19753){
return (new cljs.core.LazySeq(null,((function (x,s__19737__$2,temp__4657__auto__){
return (function (){
var s__19753__$1 = s__19753;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__19753__$1);
if(temp__4657__auto____$1){
var s__19753__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19753__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__19753__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__19755 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__19754 = (0);
while(true){
if((i__19754 < size__7188__auto__)){
var y = cljs.core._nth.call(null,c__7187__auto__,i__19754);
cljs.core.chunk_append.call(null,b__19755,React.DOM.td(({"style": ({"height": (30), "width": (30)})}),sablono.interpreter.interpret.call(null,ezq.core.cell.call(null,data,x,y))));

var G__19758 = (i__19754 + (1));
i__19754 = G__19758;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19755),ezq$core$board_$_iter__19736_$_iter__19752.call(null,cljs.core.chunk_rest.call(null,s__19753__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19755),null);
}
} else {
var y = cljs.core.first.call(null,s__19753__$2);
return cljs.core.cons.call(null,React.DOM.td(({"style": ({"height": (30), "width": (30)})}),sablono.interpreter.interpret.call(null,ezq.core.cell.call(null,data,x,y))),ezq$core$board_$_iter__19736_$_iter__19752.call(null,cljs.core.rest.call(null,s__19753__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__19737__$2,temp__4657__auto__))
,null,null));
});})(x,s__19737__$2,temp__4657__auto__))
;
return iter__7189__auto__.call(null,cljs.core.range.call(null,m));
})())),ezq$core$board_$_iter__19736.call(null,cljs.core.rest.call(null,s__19737__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__.call(null,cljs.core.range.call(null,n));
})())));
var Board = /**
 * 
 */
ezq.core.Board = quiescent.core.component.call(null,((function (_board){
return (function (){
return _board;
});})(_board))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Board"], null));
return Board.call(null);
});
ezq.core.show_state = (function ezq$core$show_state(data){
var Show_state = /**
 * 
 */
ezq.core.Show_state = quiescent.core.component.call(null,(function (){
return React.DOM.button(({"onClick": (function (){
var state_truth = new cljs.core.Keyword(null,"show-state","show-state",-733141016).cljs$core$IFn$_invoke$arity$1(data);
var state_map = new cljs.core.PersistentArrayMap(null, 2, [true,false,false,true], null);
var value = cljs.core.get.call(null,state_map,state_truth);
var update = ((function (state_truth,state_map,value){
return (function (){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"show-state","show-state",-733141016),value);
});})(state_truth,state_map,value))
;
var doit = ((function (state_truth,state_map,value,update){
return (function (){
return cljs.core.swap_BANG_.call(null,ezq.core.world,update);
});})(state_truth,state_map,value,update))
;
var newval = doit.call(null);
return newval;
})}),"Show State");
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Show-state"], null));
return Show_state.call(null);
});
ezq.core.root = (function ezq$core$root(data){
var Root = /**
 * 
 */
ezq.core.Root = quiescent.core.component.call(null,(function (){
var title = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"The Rise and Fall of Ferengal"], null);
var subtitle = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),(-10)], null)], null)], null),"Intestinal Intentionality"], null);
var tbutton = ezq.core.ticker_button.call(null,data);
var br = React.DOM.br(null);
var stbtn = ezq.core.show_state.call(null,data);
var state = (cljs.core.truth_(new cljs.core.Keyword(null,"show-state","show-state",-733141016).cljs$core$IFn$_invoke$arity$1(data))?ezq.core.db.call(null,data):null);
return React.DOM.div(null,React.DOM.h1(null,"The Rise and Fall of Ferengal"),sablono.interpreter.interpret.call(null,subtitle),sablono.interpreter.interpret.call(null,ezq.core.turn_status.call(null,data)),sablono.interpreter.interpret.call(null,ezq.core.board.call(null,data,(3),(3))),sablono.interpreter.interpret.call(null,ezq.core.reset_button.call(null)),sablono.interpreter.interpret.call(null,br),sablono.interpreter.interpret.call(null,tbutton),sablono.interpreter.interpret.call(null,br),sablono.interpreter.interpret.call(null,stbtn),sablono.interpreter.interpret.call(null,state));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Root"], null));
return Root.call(null,data);
});
ezq.core.ticker_button = (function ezq$core$ticker_button(data){
var TickerBtn = /**
 * 
 */
ezq.core.TickerBtn = quiescent.core.component.call(null,(function (){
return React.DOM.button(({"onClick": (function (){
var vals = new cljs.core.PersistentArrayMap(null, 2, [true,false,false,true], null);
var cval = cljs.core.get.call(null,vals,new cljs.core.Keyword(null,"tick","tick",-835886976).cljs$core$IFn$_invoke$arity$1(data));
var nval = cljs.core.swap_BANG_.call(null,ezq.core.world,cljs.core.assoc,new cljs.core.Keyword(null,"tick","tick",-835886976),cval);
return nval;
})}),"Ticker On");
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"TickerBtn"], null));
return TickerBtn.call(null);
});
ezq.core.db = (function ezq$core$db(data){
var Db = /**
 * 
 */
ezq.core.Db = quiescent.core.component.call(null,(function (data__$1){
return React.DOM.div(({"style": ({"fontSize": "2em"})}),sablono.interpreter.interpret.call(null,cljs.core.pr_str.call(null,data__$1)));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Db"], null));
return Db.call(null,data);
});
ezq.core.reset_button = (function ezq$core$reset_button(){
var btn = React.DOM.button(({"onClick": ezq.core.restart}),"reset!");
var Reset = /**
 * 
 */
ezq.core.Reset = quiescent.core.component.call(null,((function (btn){
return (function (){
return btn;
});})(btn))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"Reset"], null));
return Reset.call(null);
});
ezq.core.start = (function ezq$core$start(){
return ezq.core.request_render.call(null,cljs.core.deref.call(null,ezq.core.world));
});
if(typeof ezq.core.app !== 'undefined'){
} else {
ezq.core.app = ezq.core.start.call(null);
}
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){
return cljs.core.swap_BANG_.call(null,ezq.core.world,cljs.core.identity);
}));
ezq.core.jsx__GT_clj = (function ezq$core$jsx__GT_clj(x){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7189__auto__ = (function ezq$core$jsx__GT_clj_$_iter__19771(s__19772){
return (new cljs.core.LazySeq(null,(function (){
var s__19772__$1 = s__19772;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__19772__$1);
if(temp__4657__auto__){
var s__19772__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__19772__$2)){
var c__7187__auto__ = cljs.core.chunk_first.call(null,s__19772__$2);
var size__7188__auto__ = cljs.core.count.call(null,c__7187__auto__);
var b__19774 = cljs.core.chunk_buffer.call(null,size__7188__auto__);
if((function (){var i__19773 = (0);
while(true){
if((i__19773 < size__7188__auto__)){
var k = cljs.core._nth.call(null,c__7187__auto__,i__19773);
cljs.core.chunk_append.call(null,b__19774,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(x[k])], null));

var G__19775 = (i__19773 + (1));
i__19773 = G__19775;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19774),ezq$core$jsx__GT_clj_$_iter__19771.call(null,cljs.core.chunk_rest.call(null,s__19772__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__19774),null);
}
} else {
var k = cljs.core.first.call(null,s__19772__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(x[k])], null),ezq$core$jsx__GT_clj_$_iter__19771.call(null,cljs.core.rest.call(null,s__19772__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7189__auto__.call(null,Object.keys(x));
})());
});
ezq.core.mapalert = (function ezq$core$mapalert(jsmap){
console.log(jsmap);

console.log(cljs.core.pr_str.call(null,cljs.core.js__GT_clj.call(null,jsmap)));

var data = cljs.core.get.call(null,ezq.core.jsx__GT_clj.call(null,jsmap),"thing");
return alert(data);
});
goog.exportSymbol('ezq.core.mapalert', ezq.core.mapalert);
ezq.core.get_response = (function ezq$core$get_response(){
return cljs_http.client.get.call(null,"www.google.com");
});
goog.exportSymbol('ezq.core.get_response', ezq.core.get_response);

//# sourceMappingURL=core.js.map