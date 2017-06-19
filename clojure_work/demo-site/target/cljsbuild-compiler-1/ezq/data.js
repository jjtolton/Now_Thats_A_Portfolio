// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('ezq.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ezq.ttt');
cljs.core.enable_console_print_BANG_();
ezq.data.pause_ticker_msg = (function ezq$data$pause_ticker_msg(p__21825){
var map__21829 = p__21825;
var map__21829__$1 = ((((!((map__21829 == null)))?((((map__21829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21829):map__21829);
var data = map__21829__$1;
var tick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21829__$1,cljs.core.cst$kw$tick);
var ticker_switch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21829__$1,cljs.core.cst$kw$ticker_DASH_switch);
var value = (function (){var G__21831 = tick;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__21831)){
return "Pause Ticker";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__21831)){
return "Start Ticker";
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tick)].join('')));

}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$ticker_DASH_switch,value);
});
ezq.data.show_ticker = (function ezq$data$show_ticker(data){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$show_DASH_ticker,cljs.core.not);
});
ezq.data.update_turn = (function ezq$data$update_turn(p__21832){
var map__21835 = p__21832;
var map__21835__$1 = ((((!((map__21835 == null)))?((((map__21835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21835.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21835):map__21835);
var data = map__21835__$1;
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21835__$1,cljs.core.cst$kw$turn);
return cljs.core.assoc_in(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$turn], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x,cljs.core.cst$kw$o,cljs.core.cst$kw$o,cljs.core.cst$kw$x], null),turn));
});
ezq.data.update_winner = (function ezq$data$update_winner(p__21837){
var map__21840 = p__21837;
var map__21840__$1 = ((((!((map__21840 == null)))?((((map__21840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21840.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21840):map__21840);
var data = map__21840__$1;
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21840__$1,cljs.core.cst$kw$board);
var the_winner = ezq.ttt.winner(data);
var ws = (((the_winner == null))?"none":the_winner);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(the_winner,cljs.core.cst$kw$x)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$winner,the_winner),cljs.core.cst$kw$game_DASH_over,cljs.core.not),cljs.core.cst$kw$wins,cljs.core.inc);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(the_winner,cljs.core.cst$kw$o)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$winner,the_winner),cljs.core.cst$kw$game_DASH_over,cljs.core.not);
} else {
return data;

}
}
});
ezq.data.update_board = (function ezq$data$update_board(data,p__21842){
var vec__21846 = p__21842;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21846,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21846,(1),null);
var new_board = ezq.data.update_turn(ezq.data.update_winner(cljs.core.assoc_in(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),cljs.core.cst$kw$turn.cljs$core$IFn$_invoke$arity$1(data))));
if(cljs.core.truth_((function (){var and__7589__auto__ = cljs.core.cst$kw$ai.cljs$core$IFn$_invoke$arity$1(new_board);
if(cljs.core.truth_(and__7589__auto__)){
var and__7589__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$turn.cljs$core$IFn$_invoke$arity$1(new_board),cljs.core.cst$kw$o);
if(and__7589__auto____$1){
var and__7589__auto____$2 = cljs.core.not(cljs.core.cst$kw$winner.cljs$core$IFn$_invoke$arity$1(new_board));
if(and__7589__auto____$2){
var and__7589__auto____$3 = true;
if(and__7589__auto____$3){
return (9);
} else {
return and__7589__auto____$3;
}
} else {
return and__7589__auto____$2;
}
} else {
return and__7589__auto____$1;
}
} else {
return and__7589__auto__;
}
})())){
var robo_move = ezq.ttt.ai_move.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$board.cljs$core$IFn$_invoke$arity$1(new_board));
return (ezq.data.update_board.cljs$core$IFn$_invoke$arity$2 ? ezq.data.update_board.cljs$core$IFn$_invoke$arity$2(new_board,robo_move) : ezq.data.update_board.call(null,new_board,robo_move));
} else {
return new_board;
}
});
ezq.data.show_state = (function ezq$data$show_state(data){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$show_DASH_state,cljs.core.not);
});
ezq.data.tick = (function ezq$data$tick(data){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$tick,cljs.core.not);
});
ezq.data.ticker = (function ezq$data$ticker(data){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$ticker,cljs.core.inc);
});
ezq.data.next_tick = (function ezq$data$next_tick(p__21849){
var map__21852 = p__21849;
var map__21852__$1 = ((((!((map__21852 == null)))?((((map__21852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21852.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21852):map__21852);
var data = map__21852__$1;
var tick = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21852__$1,cljs.core.cst$kw$tick);
if(cljs.core.truth_(tick)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$tick,cljs.core.not);
} else {
return data;
}
});
ezq.data.add_blog_entry = (function ezq$data$add_blog_entry(p__21854,entry){
var map__21857 = p__21854;
var map__21857__$1 = ((((!((map__21857 == null)))?((((map__21857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21857):map__21857);
var data = map__21857__$1;
var blog_entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21857__$1,cljs.core.cst$kw$blog_DASH_entries);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(data,cljs.core.cst$kw$blog_DASH_entries,cljs.core.conj,entry);
});
ezq.data.edit_blog_entry = (function ezq$data$edit_blog_entry(p__21859,idx,field,content){
var map__21862 = p__21859;
var map__21862__$1 = ((((!((map__21862 == null)))?((((map__21862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21862.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21862):map__21862);
var data = map__21862__$1;
var blog_entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21862__$1,cljs.core.cst$kw$blog_DASH_entries);
return cljs.core.assoc_in(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$blog_DASH_entries,idx,field], null),content);
});
var swap_status_21870 = (function (p1__21864_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$edit,cljs.core.cst$kw$edit,cljs.core.cst$kw$display], null),p1__21864_SHARP_);
});
ezq.data.update_edit_status = ((function (swap_status_21870){
return (function ezq$data$update_edit_status(p__21865,idx,field,field_status){
var map__21868 = p__21865;
var map__21868__$1 = ((((!((map__21868 == null)))?((((map__21868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21868):map__21868);
var data = map__21868__$1;
var blog_entries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21868__$1,cljs.core.cst$kw$blog_DASH_entries);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$blog_DASH_entries,idx,field], null),swap_status_21870);
});})(swap_status_21870))
;
ezq.data.blog_entry = (function ezq$data$blog_entry(data,p__21871){
var vec__21876 = p__21871;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21876,(0),null);
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21876,(1),null);
var field_status = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21876,(2),null);
var message = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21876,(3),null);
var G__21879 = (((field_status instanceof cljs.core.Keyword))?field_status.fqn:null);
switch (G__21879) {
case "display":
return ezq.data.update_edit_status(data,idx,field,field_status);

break;
case "edit":
return ezq.data.edit_blog_entry(data,idx,field,message);

break;
case "done":
return ezq.data.update_edit_status(data,idx,field,field_status);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_status)].join('')));

}
});
ezq.data.new_entry = (function ezq$data$new_entry(data,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$blog_DASH_entries,(function (p1__21881_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__21881_SHARP_,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$idx,cljs.core.count(cljs.core.cst$kw$blog_DASH_entries.cljs$core$IFn$_invoke$arity$1(data)),cljs.core.cst$kw$title,"Edit-me",cljs.core.cst$kw$content,"Edit-me",cljs.core.cst$kw$title_DASH_status,cljs.core.cst$kw$edit,cljs.core.cst$kw$content_DASH_status,cljs.core.cst$kw$edit], null));
}));
});
ezq.data.new_game = (function ezq$data$new_game(p__21882){
var map__21885 = p__21882;
var map__21885__$1 = ((((!((map__21885 == null)))?((((map__21885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21885):map__21885);
var data = map__21885__$1;
var new_game = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21885__$1,cljs.core.cst$kw$new_DASH_game);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$new_DASH_game,cljs.core.inc),cljs.core.cst$kw$board,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$winner,null),cljs.core.cst$kw$game_DASH_over,false);
});
ezq.data.wins = (function ezq$data$wins(data){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$new_DASH_game,cljs.core.inc),cljs.core.cst$kw$wins,cljs.core.inc);
});
ezq.data.game_over = (function ezq$data$game_over(data){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$game_DASH_over,cljs.core.not);
});
ezq.data.restart = (function ezq$data$restart(){
return (ezq.data.fresh.cljs$core$IFn$_invoke$arity$0 ? ezq.data.fresh.cljs$core$IFn$_invoke$arity$0() : ezq.data.fresh.call(null));
});
goog.exportSymbol('ezq.data.restart', ezq.data.restart);
ezq.data.ai = (function ezq$data$ai(data){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,cljs.core.cst$kw$ai,cljs.core.not);
});
ezq.data.world = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$tick,cljs.core.cst$kw$restart,cljs.core.cst$kw$winner,cljs.core.cst$kw$show_DASH_state,cljs.core.cst$kw$ai,cljs.core.cst$kw$ticker,cljs.core.cst$kw$blog_DASH_entries,cljs.core.cst$kw$turn,cljs.core.cst$kw$new_DASH_game,cljs.core.cst$kw$game_DASH_over,cljs.core.cst$kw$ticker_DASH_switch,cljs.core.cst$kw$wins,cljs.core.cst$kw$board,cljs.core.cst$kw$show_DASH_ticker],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ezq.data.tick], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ezq.data.restart], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ezq.data.update_winner], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,ezq.data.show_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,ezq.data.ai], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),ezq.data.ticker], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$idx,(0),cljs.core.cst$kw$title,"Hello World",cljs.core.cst$kw$content,"First post!",cljs.core.cst$kw$title_DASH_status,cljs.core.cst$kw$display,cljs.core.cst$kw$content_DASH_status,cljs.core.cst$kw$display], null)], null),ezq.data.blog_entry], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,ezq.data.update_turn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),ezq.data.new_game], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ezq.data.game_over], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",ezq.data.pause_ticker_msg], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),ezq.data.wins], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,ezq.data.update_board], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,ezq.data.show_ticker], null)]);
ezq.data.fresh = (function ezq$data$fresh(){
return ezq.data.pause_ticker_msg(cljs.core.zipmap(cljs.core.keys(ezq.data.world),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.vals(ezq.data.world))));
});
ezq.data.handlers = (function ezq$data$handlers(){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.zipmap(cljs.core.keys(ezq.data.world),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.vals(ezq.data.world))),cljs.core.cst$kw$new_DASH_entry,ezq.data.new_entry);
});
