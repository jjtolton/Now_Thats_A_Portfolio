// Compiled by ClojureScript 1.9.518 {}
goog.provide('ezq.data');
goog.require('cljs.core');
goog.require('ezq.ttt');
cljs.core.enable_console_print_BANG_.call(null);
ezq.data.pause_ticker_msg = (function ezq$data$pause_ticker_msg(p__41258){
var map__41262 = p__41258;
var map__41262__$1 = ((((!((map__41262 == null)))?((((map__41262.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41262.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41262):map__41262);
var data = map__41262__$1;
var tick = cljs.core.get.call(null,map__41262__$1,new cljs.core.Keyword(null,"tick","tick",-835886976));
var ticker_switch = cljs.core.get.call(null,map__41262__$1,new cljs.core.Keyword(null,"ticker-switch","ticker-switch",-364567782));
var value = (function (){var G__41264 = tick;
if(cljs.core._EQ_.call(null,true,G__41264)){
return "Pause Ticker";
} else {
if(cljs.core._EQ_.call(null,false,G__41264)){
return "Start Ticker";
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tick)].join('')));

}
}
})();
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"ticker-switch","ticker-switch",-364567782),value);
});
ezq.data.show_ticker = (function ezq$data$show_ticker(data){
return cljs.core.update.call(null,data,new cljs.core.Keyword(null,"show-ticker","show-ticker",1941385823),cljs.core.not);
});
ezq.data.update_turn = (function ezq$data$update_turn(p__41265){
var map__41268 = p__41265;
var map__41268__$1 = ((((!((map__41268 == null)))?((((map__41268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41268.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41268):map__41268);
var data = map__41268__$1;
var turn = cljs.core.get.call(null,map__41268__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
return cljs.core.assoc_in.call(null,data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"turn","turn",75759344)], null),cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"o","o",-1350007228),new cljs.core.Keyword(null,"x","x",2099068185)], null),turn));
});
ezq.data.update_winner = (function ezq$data$update_winner(p__41270){
var map__41273 = p__41270;
var map__41273__$1 = ((((!((map__41273 == null)))?((((map__41273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41273.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41273):map__41273);
var data = map__41273__$1;
var board = cljs.core.get.call(null,map__41273__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var the_winner = ezq.ttt.winner.call(null,data);
var ws = (((the_winner == null))?"none":the_winner);
if(cljs.core._EQ_.call(null,the_winner,new cljs.core.Keyword(null,"x","x",2099068185))){
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"winner","winner",714604679),the_winner),new cljs.core.Keyword(null,"game-over","game-over",-607322695),cljs.core.not),new cljs.core.Keyword(null,"wins","wins",1850756412),cljs.core.inc);
} else {
if(cljs.core._EQ_.call(null,the_winner,new cljs.core.Keyword(null,"o","o",-1350007228))){
return cljs.core.update.call(null,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"winner","winner",714604679),the_winner),new cljs.core.Keyword(null,"game-over","game-over",-607322695),cljs.core.not);
} else {
return data;

}
}
});
ezq.data.update_board = (function ezq$data$update_board(data,p__41275){
var vec__41279 = p__41275;
var x = cljs.core.nth.call(null,vec__41279,(0),null);
var y = cljs.core.nth.call(null,vec__41279,(1),null);
var new_board = ezq.data.update_turn.call(null,ezq.data.update_winner.call(null,cljs.core.assoc_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null),new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(data))));
if(cljs.core.truth_((function (){var and__28737__auto__ = new cljs.core.Keyword(null,"ai","ai",760454697).cljs$core$IFn$_invoke$arity$1(new_board);
if(cljs.core.truth_(and__28737__auto__)){
var and__28737__auto____$1 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(new_board),new cljs.core.Keyword(null,"o","o",-1350007228));
if(and__28737__auto____$1){
var and__28737__auto____$2 = cljs.core.not.call(null,new cljs.core.Keyword(null,"winner","winner",714604679).cljs$core$IFn$_invoke$arity$1(new_board));
if(and__28737__auto____$2){
var and__28737__auto____$3 = true;
if(and__28737__auto____$3){
return (9);
} else {
return and__28737__auto____$3;
}
} else {
return and__28737__auto____$2;
}
} else {
return and__28737__auto____$1;
}
} else {
return and__28737__auto__;
}
})())){
var robo_move = ezq.ttt.ai_move.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(new_board));
return ezq.data.update_board.call(null,new_board,robo_move);
} else {
return new_board;
}
});
ezq.data.show_state = (function ezq$data$show_state(data){
return cljs.core.update.call(null,data,new cljs.core.Keyword(null,"show-state","show-state",-733141016),cljs.core.not);
});
ezq.data.tick = (function ezq$data$tick(data){
return cljs.core.update.call(null,data,new cljs.core.Keyword(null,"tick","tick",-835886976),cljs.core.not);
});
ezq.data.ticker = (function ezq$data$ticker(data){
return cljs.core.update.call(null,data,new cljs.core.Keyword(null,"ticker","ticker",214613162),cljs.core.inc);
});
ezq.data.next_tick = (function ezq$data$next_tick(p__41282){
var map__41285 = p__41282;
var map__41285__$1 = ((((!((map__41285 == null)))?((((map__41285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41285):map__41285);
var data = map__41285__$1;
var tick = cljs.core.get.call(null,map__41285__$1,new cljs.core.Keyword(null,"tick","tick",-835886976));
if(cljs.core.truth_(tick)){
return cljs.core.update.call(null,data,new cljs.core.Keyword(null,"tick","tick",-835886976),cljs.core.not);
} else {
return data;
}
});
ezq.data.add_blog_entry = (function ezq$data$add_blog_entry(p__41287,entry){
var map__41290 = p__41287;
var map__41290__$1 = ((((!((map__41290 == null)))?((((map__41290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41290):map__41290);
var data = map__41290__$1;
var blog_entries = cljs.core.get.call(null,map__41290__$1,new cljs.core.Keyword(null,"blog-entries","blog-entries",-1298904592));
return cljs.core.update.call(null,data,new cljs.core.Keyword(null,"blog-entries","blog-entries",-1298904592),cljs.core.conj,entry);
});
ezq.data.edit_blog_entry = (function ezq$data$edit_blog_entry(p__41292,idx,field,content){
var map__41295 = p__41292;
var map__41295__$1 = ((((!((map__41295 == null)))?((((map__41295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41295):map__41295);
var data = map__41295__$1;
var blog_entries = cljs.core.get.call(null,map__41295__$1,new cljs.core.Keyword(null,"blog-entries","blog-entries",-1298904592));
return cljs.core.assoc_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blog-entries","blog-entries",-1298904592),idx,field], null),content);
});
var swap_status_41303 = (function (p1__41297_SHARP_){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"display","display",242065432)], null),p1__41297_SHARP_);
});
ezq.data.update_edit_status = ((function (swap_status_41303){
return (function ezq$data$update_edit_status(p__41298,idx,field,field_status){
var map__41301 = p__41298;
var map__41301__$1 = ((((!((map__41301 == null)))?((((map__41301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41301):map__41301);
var data = map__41301__$1;
var blog_entries = cljs.core.get.call(null,map__41301__$1,new cljs.core.Keyword(null,"blog-entries","blog-entries",-1298904592));
return cljs.core.update_in.call(null,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blog-entries","blog-entries",-1298904592),idx,field], null),swap_status_41303);
});})(swap_status_41303))
;
ezq.data.blog_entry = (function ezq$data$blog_entry(data,p__41304){
var vec__41309 = p__41304;
var idx = cljs.core.nth.call(null,vec__41309,(0),null);
var field = cljs.core.nth.call(null,vec__41309,(1),null);
var field_status = cljs.core.nth.call(null,vec__41309,(2),null);
var message = cljs.core.nth.call(null,vec__41309,(3),null);
var G__41312 = (((field_status instanceof cljs.core.Keyword))?field_status.fqn:null);
switch (G__41312) {
case "display":
return ezq.data.update_edit_status.call(null,data,idx,field,field_status);

break;
case "edit":
return ezq.data.edit_blog_entry.call(null,data,idx,field,message);

break;
case "done":
return ezq.data.update_edit_status.call(null,data,idx,field,field_status);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(field_status)].join('')));

}
});
ezq.data.new_entry = (function ezq$data$new_entry(data,_){
return cljs.core.update.call(null,data,new cljs.core.Keyword(null,"blog-entries","blog-entries",-1298904592),(function (p1__41314_SHARP_){
return cljs.core.conj.call(null,p1__41314_SHARP_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"idx","idx",1053688473),cljs.core.count.call(null,new cljs.core.Keyword(null,"blog-entries","blog-entries",-1298904592).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"title","title",636505583),"Edit-me",new cljs.core.Keyword(null,"content","content",15833224),"Edit-me",new cljs.core.Keyword(null,"title-status","title-status",-626947331),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"content-status","content-status",1626020723),new cljs.core.Keyword(null,"edit","edit",-1641834166)], null));
}));
});
ezq.data.new_game = (function ezq$data$new_game(p__41315){
var map__41318 = p__41315;
var map__41318__$1 = ((((!((map__41318 == null)))?((((map__41318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41318.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41318):map__41318);
var data = map__41318__$1;
var new_game = cljs.core.get.call(null,map__41318__$1,new cljs.core.Keyword(null,"new-game","new-game",167241648));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.update.call(null,data,new cljs.core.Keyword(null,"new-game","new-game",167241648),cljs.core.inc),new cljs.core.Keyword(null,"board","board",-1907017633),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"winner","winner",714604679),null),new cljs.core.Keyword(null,"game-over","game-over",-607322695),false);
});
ezq.data.wins = (function ezq$data$wins(data){
return cljs.core.update.call(null,cljs.core.update.call(null,data,new cljs.core.Keyword(null,"new-game","new-game",167241648),cljs.core.inc),new cljs.core.Keyword(null,"wins","wins",1850756412),cljs.core.inc);
});
ezq.data.game_over = (function ezq$data$game_over(data){
return cljs.core.update.call(null,data,new cljs.core.Keyword(null,"game-over","game-over",-607322695),cljs.core.not);
});
ezq.data.restart = (function ezq$data$restart(){
return ezq.data.fresh.call(null);
});
goog.exportSymbol('ezq.data.restart', ezq.data.restart);
ezq.data.ai = (function ezq$data$ai(data){
return cljs.core.update.call(null,data,new cljs.core.Keyword(null,"ai","ai",760454697),cljs.core.not);
});
ezq.data.world = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tick","tick",-835886976),new cljs.core.Keyword(null,"restart","restart",-1779883612),new cljs.core.Keyword(null,"winner","winner",714604679),new cljs.core.Keyword(null,"show-state","show-state",-733141016),new cljs.core.Keyword(null,"ai","ai",760454697),new cljs.core.Keyword(null,"ticker","ticker",214613162),new cljs.core.Keyword(null,"blog-entries","blog-entries",-1298904592),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"new-game","new-game",167241648),new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"ticker-switch","ticker-switch",-364567782),new cljs.core.Keyword(null,"wins","wins",1850756412),new cljs.core.Keyword(null,"board","board",-1907017633),new cljs.core.Keyword(null,"show-ticker","show-ticker",1941385823)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ezq.data.tick], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ezq.data.restart], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,ezq.data.update_winner], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,ezq.data.show_state], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,ezq.data.ai], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),ezq.data.ticker], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"idx","idx",1053688473),(0),new cljs.core.Keyword(null,"title","title",636505583),"Hello World",new cljs.core.Keyword(null,"content","content",15833224),"First post!",new cljs.core.Keyword(null,"title-status","title-status",-626947331),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"content-status","content-status",1626020723),new cljs.core.Keyword(null,"display","display",242065432)], null)], null),ezq.data.blog_entry], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),ezq.data.update_turn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),ezq.data.new_game], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ezq.data.game_over], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",ezq.data.pause_ticker_msg], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),ezq.data.wins], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,ezq.data.update_board], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,ezq.data.show_ticker], null)]);
ezq.data.fresh = (function ezq$data$fresh(){
return ezq.data.pause_ticker_msg.call(null,cljs.core.zipmap.call(null,cljs.core.keys.call(null,ezq.data.world),cljs.core.map.call(null,cljs.core.first,cljs.core.vals.call(null,ezq.data.world))));
});
ezq.data.handlers = (function ezq$data$handlers(){
return cljs.core.assoc.call(null,cljs.core.zipmap.call(null,cljs.core.keys.call(null,ezq.data.world),cljs.core.map.call(null,cljs.core.second,cljs.core.vals.call(null,ezq.data.world))),new cljs.core.Keyword(null,"new-entry","new-entry",1329281287),ezq.data.new_entry);
});

//# sourceMappingURL=data.js.map