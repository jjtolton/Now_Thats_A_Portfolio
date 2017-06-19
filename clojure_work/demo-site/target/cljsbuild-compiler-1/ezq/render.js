// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('ezq.render');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
goog.require('quiescent.core');
goog.require('quiescent.dom');
goog.require('sablono.core');
goog.require('ezq.css');
goog.require('ezq.channeler');
cljs.core.enable_console_print_BANG_();
ezq.render.ticker = /**
 * 
 */
ezq.render.ticker = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (p__21343){
var map__21344 = p__21343;
var map__21344__$1 = ((((!((map__21344 == null)))?((((map__21344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21344.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21344):map__21344);
var ticker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21344__$1,cljs.core.cst$kw$ticker);
var attrs21346 = ticker;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs21346))?sablono.interpreter.attributes(attrs21346):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21346))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21346)], null))));
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"ticker"], null));
ezq.render.circle = (function ezq$render$circle(v){
var G__21349 = ({"style": ({"color": "white", "borderRadius": "50%", "width": "25px", "textAlign": "center", "display": "block", "lineHeight": "16px", "fontSize": "20px", "boxSizing": "border-box", "border": "2px solid red", "backgroundColor": "red", "height": "25px"})});
var G__21350 = sablono.interpreter.interpret(v);
return React.DOM.span(G__21349,G__21350);
});
ezq.render.turn_status = (function ezq$render$turn_status(p__21351){
var map__21354 = p__21351;
var map__21354__$1 = ((((!((map__21354 == null)))?((((map__21354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21354.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21354):map__21354);
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21354__$1,cljs.core.cst$kw$turn);
var winner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21354__$1,cljs.core.cst$kw$winner);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(winner,cljs.core.cst$kw$tie)){
return "Game is tied!";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(winner,cljs.core.cst$kw$x)){
return "You won!";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(winner,cljs.core.cst$kw$o)){
return ":o is the winner";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(turn,cljs.core.cst$kw$o)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(turn),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'s turn to play!")].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(turn,cljs.core.cst$kw$x)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Your turn to play!")].join('');
} else {
return null;
}
}
}
}
}
});
ezq.render.cell = /**
 * 
 */
ezq.render._ = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (p__21356,channels,x,y){
var map__21357 = p__21356;
var map__21357__$1 = ((((!((map__21357 == null)))?((((map__21357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21357.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21357):map__21357);
var board = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21357__$1,cljs.core.cst$kw$board);
var turn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21357__$1,cljs.core.cst$kw$turn);
var winner = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21357__$1,cljs.core.cst$kw$winner);
var cell_status = cljs.core.get.cljs$core$IFn$_invoke$arity$3(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),null);
var color = (function (){var G__21359 = cell_status;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$x,G__21359)){
return "btn btn-primary";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$o,G__21359)){
return "btn btn-danger";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__21359)){
return "btn btn-default";
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_status)].join('')));

}
}
}
})();
var style = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,(50),cljs.core.cst$kw$height,(50),cljs.core.cst$kw$display,"flex","justify-content","center"], null);
var opts = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,color,cljs.core.cst$kw$style,style], null);
var span = ((function (cell_status,color,style,opts,map__21357,map__21357__$1,board,turn,winner){
return (function (x__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,x__$1], null)], null);
});})(cell_status,color,style,opts,map__21357,map__21357__$1,board,turn,winner))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,color,cljs.core.cst$kw$style,style,cljs.core.cst$kw$on_DASH_click,((function (cell_status,color,style,opts,span,map__21357,map__21357__$1,board,turn,winner){
return (function (){
return ezq.channeler.cell_handler(winner,x,y,channels);
});})(cell_status,color,style,opts,span,map__21357,map__21357__$1,board,turn,winner))
], null),""], null);
var x__$1 = span("X");
var o = span("O");
var cell_out = sablono.interpreter.interpret((function (){var G__21360 = cell_status;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$x,G__21360)){
return x__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$o,G__21360)){
return o;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__21360)){
return default$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_status)].join('')));

}
}
}
})());
return cell_out;
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"_"], null));
ezq.render.Root = /**
 * 
 */
ezq.render._ = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (data,channels){
return (ezq.render.app.cljs$core$IFn$_invoke$arity$2 ? ezq.render.app.cljs$core$IFn$_invoke$arity$2(data,channels) : ezq.render.app.call(null,data,channels));
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"_"], null));
/**
 * Given an Element, immediately render it, rooted to the
 * specified DOM node.
 */
ezq.render.render = (function ezq$render$render(element,node){
return ReactDOM.render(element,node);
});
var render_pending_QMARK__21367 = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
/**
 * Render the given application state tree.
 */
ezq.render.request_render = ((function (render_pending_QMARK__21367){
return (function ezq$render$request_render(app){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(render_pending_QMARK__21367,false,true))){
return window.requestAnimationFrame(((function (render_pending_QMARK__21367){
return (function (){
return ezq.render.render((function (){var G__21364 = (function (){var G__21366 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(app);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21366) : cljs.core.deref.call(null,G__21366));
})();
var G__21365 = cljs.core.cst$kw$channels.cljs$core$IFn$_invoke$arity$1(app);
return (ezq.render.Root.cljs$core$IFn$_invoke$arity$2 ? ezq.render.Root.cljs$core$IFn$_invoke$arity$2(G__21364,G__21365) : ezq.render.Root.call(null,G__21364,G__21365));
})(),document.getElementById("main"));
});})(render_pending_QMARK__21367))
,(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(render_pending_QMARK__21367,false) : cljs.core.reset_BANG_.call(null,render_pending_QMARK__21367,false)));
} else {
return null;
}
});})(render_pending_QMARK__21367))
;
goog.exportSymbol('ezq.render.request_render', ezq.render.request_render);
/**
 * 
 */
ezq.render.board = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (data,channels,n,m){
var G__21368 = ({"style": ({"border": (0)})});
var G__21369 = (function (){var G__21370 = null;
var G__21371 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__8463__auto__ = ((function (G__21370,G__21368){
return (function ezq$render$iter__21372(s__21373){
return (new cljs.core.LazySeq(null,((function (G__21370,G__21368){
return (function (){
var s__21373__$1 = s__21373;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__21373__$1);
if(temp__6738__auto__){
var s__21373__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21373__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__21373__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__21375 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__21374 = (0);
while(true){
if((i__21374 < size__8462__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__21374);
cljs.core.chunk_append(b__21375,(function (){var G__21410 = null;
var G__21411 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__8463__auto__ = ((function (i__21374,G__21410,x,c__8461__auto__,size__8462__auto__,b__21375,s__21373__$2,temp__6738__auto__,G__21370,G__21368){
return (function ezq$render$iter__21372_$_iter__21412(s__21413){
return (new cljs.core.LazySeq(null,((function (i__21374,G__21410,x,c__8461__auto__,size__8462__auto__,b__21375,s__21373__$2,temp__6738__auto__,G__21370,G__21368){
return (function (){
var s__21413__$1 = s__21413;
while(true){
var temp__6738__auto____$1 = cljs.core.seq(s__21413__$1);
if(temp__6738__auto____$1){
var s__21413__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21413__$2)){
var c__8461__auto____$1 = cljs.core.chunk_first(s__21413__$2);
var size__8462__auto____$1 = cljs.core.count(c__8461__auto____$1);
var b__21415 = cljs.core.chunk_buffer(size__8462__auto____$1);
if((function (){var i__21414 = (0);
while(true){
if((i__21414 < size__8462__auto____$1)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto____$1,i__21414);
cljs.core.chunk_append(b__21415,(function (){var G__21422 = ({"style": ({"height": (30), "width": (30)})});
var G__21423 = sablono.interpreter.interpret((ezq.render.cell.cljs$core$IFn$_invoke$arity$4 ? ezq.render.cell.cljs$core$IFn$_invoke$arity$4(data,channels,x,y) : ezq.render.cell.call(null,data,channels,x,y)));
return React.DOM.td(G__21422,G__21423);
})());

var G__21442 = (i__21414 + (1));
i__21414 = G__21442;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21415),ezq$render$iter__21372_$_iter__21412(cljs.core.chunk_rest(s__21413__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21415),null);
}
} else {
var y = cljs.core.first(s__21413__$2);
return cljs.core.cons((function (){var G__21424 = ({"style": ({"height": (30), "width": (30)})});
var G__21425 = sablono.interpreter.interpret((ezq.render.cell.cljs$core$IFn$_invoke$arity$4 ? ezq.render.cell.cljs$core$IFn$_invoke$arity$4(data,channels,x,y) : ezq.render.cell.call(null,data,channels,x,y)));
return React.DOM.td(G__21424,G__21425);
})(),ezq$render$iter__21372_$_iter__21412(cljs.core.rest(s__21413__$2)));
}
} else {
return null;
}
break;
}
});})(i__21374,G__21410,x,c__8461__auto__,size__8462__auto__,b__21375,s__21373__$2,temp__6738__auto__,G__21370,G__21368))
,null,null));
});})(i__21374,G__21410,x,c__8461__auto__,size__8462__auto__,b__21375,s__21373__$2,temp__6738__auto__,G__21370,G__21368))
;
return iter__8463__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(m));
})());
return React.DOM.tr(G__21410,G__21411);
})());

var G__21443 = (i__21374 + (1));
i__21374 = G__21443;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21375),ezq$render$iter__21372(cljs.core.chunk_rest(s__21373__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21375),null);
}
} else {
var x = cljs.core.first(s__21373__$2);
return cljs.core.cons((function (){var G__21426 = null;
var G__21427 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__8463__auto__ = ((function (G__21426,x,s__21373__$2,temp__6738__auto__,G__21370,G__21368){
return (function ezq$render$iter__21372_$_iter__21428(s__21429){
return (new cljs.core.LazySeq(null,((function (G__21426,x,s__21373__$2,temp__6738__auto__,G__21370,G__21368){
return (function (){
var s__21429__$1 = s__21429;
while(true){
var temp__6738__auto____$1 = cljs.core.seq(s__21429__$1);
if(temp__6738__auto____$1){
var s__21429__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21429__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__21429__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__21431 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__21430 = (0);
while(true){
if((i__21430 < size__8462__auto__)){
var y = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__21430);
cljs.core.chunk_append(b__21431,(function (){var G__21438 = ({"style": ({"height": (30), "width": (30)})});
var G__21439 = sablono.interpreter.interpret((ezq.render.cell.cljs$core$IFn$_invoke$arity$4 ? ezq.render.cell.cljs$core$IFn$_invoke$arity$4(data,channels,x,y) : ezq.render.cell.call(null,data,channels,x,y)));
return React.DOM.td(G__21438,G__21439);
})());

var G__21444 = (i__21430 + (1));
i__21430 = G__21444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21431),ezq$render$iter__21372_$_iter__21428(cljs.core.chunk_rest(s__21429__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21431),null);
}
} else {
var y = cljs.core.first(s__21429__$2);
return cljs.core.cons((function (){var G__21440 = ({"style": ({"height": (30), "width": (30)})});
var G__21441 = sablono.interpreter.interpret((ezq.render.cell.cljs$core$IFn$_invoke$arity$4 ? ezq.render.cell.cljs$core$IFn$_invoke$arity$4(data,channels,x,y) : ezq.render.cell.call(null,data,channels,x,y)));
return React.DOM.td(G__21440,G__21441);
})(),ezq$render$iter__21372_$_iter__21428(cljs.core.rest(s__21429__$2)));
}
} else {
return null;
}
break;
}
});})(G__21426,x,s__21373__$2,temp__6738__auto__,G__21370,G__21368))
,null,null));
});})(G__21426,x,s__21373__$2,temp__6738__auto__,G__21370,G__21368))
;
return iter__8463__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(m));
})());
return React.DOM.tr(G__21426,G__21427);
})(),ezq$render$iter__21372(cljs.core.rest(s__21373__$2)));
}
} else {
return null;
}
break;
}
});})(G__21370,G__21368))
,null,null));
});})(G__21370,G__21368))
;
return iter__8463__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(n));
})());
return React.DOM.tbody(G__21370,G__21371);
})();
return React.DOM.table(G__21368,G__21369);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"board"], null));
var package_21488 = (function (p1__21445_SHARP_){
return ezq.css.flex_box(ezq.css.flex_item(p1__21445_SHARP_));
});
ezq.render.panel_id = ((function (package_21488){
return (function ezq$render$panel_id(panel_id){
var panel = ((function (package_21488){
return (function() {
var G__21489 = null;
var G__21489__1 = (function (body){
return (function (){var G__21467 = null;
var G__21468 = (function (){var G__21469 = ({"className": "panel panel-info"});
var G__21470 = (function (){var G__21471 = ({"className": "panel-body"});
var G__21472 = sablono.interpreter.interpret(body);
return React.DOM.div(G__21471,G__21472);
})();
return React.DOM.div(G__21469,G__21470);
})();
return React.DOM.div(G__21467,G__21468);
})().call(null);
});
var G__21489__2 = (function (header,body){
var G__21473 = null;
var G__21474 = (function (){var G__21475 = ({"className": "panel panel-info"});
var G__21476 = (function (){var G__21478 = ({"id": panel_id, "className": "panel-heading"});
var G__21479 = (function (){var G__21480 = ({"data-toggle": "collapse", "href": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(panel_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("1")].join('')});
var G__21481 = sablono.interpreter.interpret(header);
return React.DOM.div(G__21480,G__21481);
})();
return React.DOM.div(G__21478,G__21479);
})();
var G__21477 = (function (){var G__21482 = ({"id": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(panel_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("1")].join(''), "className": "panel-collapse collapse in"});
var G__21483 = sablono.interpreter.interpret(package_21488(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,"ticker",cljs.core.cst$kw$class,"panel-body"], null),body], null)));
return React.DOM.div(G__21482,G__21483);
})();
return React.DOM.div(G__21475,G__21476,G__21477);
})();
return React.DOM.div(G__21473,G__21474);
});
var G__21489__3 = (function (header,body,footer){
var heading = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"panel-heading"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$data_DASH_toggle,"collapse",cljs.core.cst$kw$href,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(panel_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("1")].join('')], null),header], null)], null);
var panel_body = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(panel_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("1")].join(''),cljs.core.cst$kw$class,"panel-collapse collapse in"], null),package_21488(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,panel_id,cljs.core.cst$kw$class,"panel-body"], null),body], null))], null);
var panel_booter = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,panel_id,cljs.core.cst$kw$class,"panel-footer"], null),footer], null);
var G__21484 = ({"className": "panel panel-info"});
var G__21485 = sablono.interpreter.interpret(heading);
var G__21486 = sablono.interpreter.interpret(panel_body);
var G__21487 = sablono.interpreter.interpret(panel_booter);
return React.DOM.div(G__21484,G__21485,G__21486,G__21487);
});
G__21489 = function(header,body,footer){
switch(arguments.length){
case 1:
return G__21489__1.call(this,header);
case 2:
return G__21489__2.call(this,header,body);
case 3:
return G__21489__3.call(this,header,body,footer);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__21489.cljs$core$IFn$_invoke$arity$1 = G__21489__1;
G__21489.cljs$core$IFn$_invoke$arity$2 = G__21489__2;
G__21489.cljs$core$IFn$_invoke$arity$3 = G__21489__3;
return G__21489;
})()
;})(package_21488))
;
return panel;
});})(package_21488))
;
ezq.render.show_panel = /**
 * 
 */
ezq.render._ = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (p__21490,child){
var map__21491 = p__21490;
var map__21491__$1 = ((((!((map__21491 == null)))?((((map__21491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21491.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21491):map__21491);
var show_ticker = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21491__$1,cljs.core.cst$kw$show_DASH_ticker);
var attrs21493 = child;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs21493))?sablono.interpreter.attributes(attrs21493):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21493))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21493)], null))));
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"_"], null));
ezq.render.title_btn = /**
 * 
 */
ezq.render._ = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (data,channels){
var G__21494 = ({"onClick": (function (){
var seq__21496 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$show_DASH_ticker,cljs.core.cst$kw$show_DASH_ticker_DASH_msg], null));
var chunk__21497 = null;
var count__21498 = (0);
var i__21499 = (0);
while(true){
if((i__21499 < count__21498)){
var c = chunk__21497.cljs$core$IIndexed$_nth$arity$2(null,i__21499);
var c__16369__auto___21526 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__21496,chunk__21497,count__21498,i__21499,c__16369__auto___21526,c){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (seq__21496,chunk__21497,count__21498,i__21499,c__16369__auto___21526,c){
return (function (state_21504){
var state_val_21505 = (state_21504[(1)]);
if((state_val_21505 === (1))){
var inst_21500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(channels,c);
var state_21504__$1 = state_21504;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21504__$1,(2),inst_21500,true);
} else {
if((state_val_21505 === (2))){
var inst_21502 = (state_21504[(2)]);
var state_21504__$1 = state_21504;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21504__$1,inst_21502);
} else {
return null;
}
}
});})(seq__21496,chunk__21497,count__21498,i__21499,c__16369__auto___21526,c))
;
return ((function (seq__21496,chunk__21497,count__21498,i__21499,switch__16243__auto__,c__16369__auto___21526,c){
return (function() {
var ezq$render$state_machine__16244__auto__ = null;
var ezq$render$state_machine__16244__auto____0 = (function (){
var statearr_21509 = [null,null,null,null,null,null,null];
(statearr_21509[(0)] = ezq$render$state_machine__16244__auto__);

(statearr_21509[(1)] = (1));

return statearr_21509;
});
var ezq$render$state_machine__16244__auto____1 = (function (state_21504){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_21504);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e21510){if((e21510 instanceof Object)){
var ex__16247__auto__ = e21510;
var statearr_21511_21527 = state_21504;
(statearr_21511_21527[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21504);

return cljs.core.cst$kw$recur;
} else {
throw e21510;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__21528 = state_21504;
state_21504 = G__21528;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
ezq$render$state_machine__16244__auto__ = function(state_21504){
switch(arguments.length){
case 0:
return ezq$render$state_machine__16244__auto____0.call(this);
case 1:
return ezq$render$state_machine__16244__auto____1.call(this,state_21504);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$render$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$render$state_machine__16244__auto____0;
ezq$render$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$render$state_machine__16244__auto____1;
return ezq$render$state_machine__16244__auto__;
})()
;})(seq__21496,chunk__21497,count__21498,i__21499,switch__16243__auto__,c__16369__auto___21526,c))
})();
var state__16371__auto__ = (function (){var statearr_21512 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_21512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___21526);

return statearr_21512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(seq__21496,chunk__21497,count__21498,i__21499,c__16369__auto___21526,c))
);


var G__21529 = seq__21496;
var G__21530 = chunk__21497;
var G__21531 = count__21498;
var G__21532 = (i__21499 + (1));
seq__21496 = G__21529;
chunk__21497 = G__21530;
count__21498 = G__21531;
i__21499 = G__21532;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq(seq__21496);
if(temp__6738__auto__){
var seq__21496__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21496__$1)){
var c__8512__auto__ = cljs.core.chunk_first(seq__21496__$1);
var G__21533 = cljs.core.chunk_rest(seq__21496__$1);
var G__21534 = c__8512__auto__;
var G__21535 = cljs.core.count(c__8512__auto__);
var G__21536 = (0);
seq__21496 = G__21533;
chunk__21497 = G__21534;
count__21498 = G__21535;
i__21499 = G__21536;
continue;
} else {
var c = cljs.core.first(seq__21496__$1);
var c__16369__auto___21537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (seq__21496,chunk__21497,count__21498,i__21499,c__16369__auto___21537,c,seq__21496__$1,temp__6738__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (seq__21496,chunk__21497,count__21498,i__21499,c__16369__auto___21537,c,seq__21496__$1,temp__6738__auto__){
return (function (state_21517){
var state_val_21518 = (state_21517[(1)]);
if((state_val_21518 === (1))){
var inst_21513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(channels,c);
var state_21517__$1 = state_21517;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21517__$1,(2),inst_21513,true);
} else {
if((state_val_21518 === (2))){
var inst_21515 = (state_21517[(2)]);
var state_21517__$1 = state_21517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21517__$1,inst_21515);
} else {
return null;
}
}
});})(seq__21496,chunk__21497,count__21498,i__21499,c__16369__auto___21537,c,seq__21496__$1,temp__6738__auto__))
;
return ((function (seq__21496,chunk__21497,count__21498,i__21499,switch__16243__auto__,c__16369__auto___21537,c,seq__21496__$1,temp__6738__auto__){
return (function() {
var ezq$render$state_machine__16244__auto__ = null;
var ezq$render$state_machine__16244__auto____0 = (function (){
var statearr_21522 = [null,null,null,null,null,null,null];
(statearr_21522[(0)] = ezq$render$state_machine__16244__auto__);

(statearr_21522[(1)] = (1));

return statearr_21522;
});
var ezq$render$state_machine__16244__auto____1 = (function (state_21517){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_21517);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e21523){if((e21523 instanceof Object)){
var ex__16247__auto__ = e21523;
var statearr_21524_21538 = state_21517;
(statearr_21524_21538[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21517);

return cljs.core.cst$kw$recur;
} else {
throw e21523;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__21539 = state_21517;
state_21517 = G__21539;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
ezq$render$state_machine__16244__auto__ = function(state_21517){
switch(arguments.length){
case 0:
return ezq$render$state_machine__16244__auto____0.call(this);
case 1:
return ezq$render$state_machine__16244__auto____1.call(this,state_21517);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$render$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$render$state_machine__16244__auto____0;
ezq$render$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$render$state_machine__16244__auto____1;
return ezq$render$state_machine__16244__auto__;
})()
;})(seq__21496,chunk__21497,count__21498,i__21499,switch__16243__auto__,c__16369__auto___21537,c,seq__21496__$1,temp__6738__auto__))
})();
var state__16371__auto__ = (function (){var statearr_21525 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_21525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto___21537);

return statearr_21525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(seq__21496,chunk__21497,count__21498,i__21499,c__16369__auto___21537,c,seq__21496__$1,temp__6738__auto__))
);


var G__21540 = cljs.core.next(seq__21496__$1);
var G__21541 = null;
var G__21542 = (0);
var G__21543 = (0);
seq__21496 = G__21540;
chunk__21497 = G__21541;
count__21498 = G__21542;
i__21499 = G__21543;
continue;
}
} else {
return null;
}
}
break;
}
}), "className": "btn btn-primary"});
var G__21495 = sablono.interpreter.interpret(cljs.core.cst$kw$show_DASH_ticker_DASH_msg.cljs$core$IFn$_invoke$arity$1(data));
return React.DOM.button(G__21494,G__21495);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"_"], null));
ezq.render.show_state = /**
 * 
 */
ezq.render._ = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (data,p__21544){
var map__21545 = p__21544;
var map__21545__$1 = ((((!((map__21545 == null)))?((((map__21545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21545.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21545):map__21545);
var channels = map__21545__$1;
var show_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21545__$1,cljs.core.cst$kw$show_DASH_state);
var G__21547 = ({"onClick": ezq.channeler.show_state, "className": "btn btn-success"});
var G__21548 = "Show State";
return React.DOM.button(G__21547,G__21548);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"_"], null));
ezq.render.ticker_button = /**
 * 
 */
ezq.render._ = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (p__21549,channels){
var map__21550 = p__21549;
var map__21550__$1 = ((((!((map__21550 == null)))?((((map__21550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21550.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21550):map__21550);
var ticker_switch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21550__$1,cljs.core.cst$kw$ticker_DASH_switch);
var G__21552 = ({"onClick": cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ezq.channeler.ticker_button,channels), "className": "btn btn-default"});
var G__21553 = sablono.interpreter.interpret(ticker_switch);
return React.DOM.button(G__21552,G__21553);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"_"], null));
ezq.render.db = /**
 * 
 */
ezq.render._ = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (data){
var header = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"2em"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Key"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,"Value"], null)], null)], null);
var body = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody], null),(function (){var iter__8463__auto__ = ((function (header){
return (function ezq$render$iter__21554(s__21555){
return (new cljs.core.LazySeq(null,((function (header){
return (function (){
var s__21555__$1 = s__21555;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__21555__$1);
if(temp__6738__auto__){
var s__21555__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21555__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__21555__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__21557 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__21556 = (0);
while(true){
if((i__21556 < size__8462__auto__)){
var vec__21566 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__21556);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21566,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21566,(1),null);
cljs.core.chunk_append(b__21557,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v], 0))], null)], null));

var G__21577 = (i__21556 + (1));
i__21556 = G__21577;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21557),ezq$render$iter__21554(cljs.core.chunk_rest(s__21555__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21557),null);
}
} else {
var vec__21569 = cljs.core.first(s__21555__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21569,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([k], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v], 0))], null)], null),ezq$render$iter__21554(cljs.core.rest(s__21555__$2)));
}
} else {
return null;
}
break;
}
});})(header))
,null,null));
});})(header))
;
return iter__8463__auto__(data);
})());
var db = (function (){var G__21572 = ({"style": ({"maxWidth": "400px", "width": "100% !important"}), "className": "container"});
var G__21573 = (function (){var G__21574 = ({"className": "col-lg-3 table table-bordered table-striped table-hover"});
var G__21575 = sablono.interpreter.interpret(header);
var G__21576 = sablono.interpreter.interpret(body);
return React.DOM.table(G__21574,G__21575,G__21576);
})();
return React.DOM.div(G__21572,G__21573);
})();
if(cljs.core.truth_(cljs.core.cst$kw$show_DASH_state.cljs$core$IFn$_invoke$arity$1(data))){
return db;
} else {
return null;
}
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"_"], null));
ezq.render.input_field = /**
 * 
 */
ezq.render._ = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (v){
return quiescent.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,v], null)], 0));
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"_"], null));
ezq.render.blog_post = (function ezq$render$blog_post(p__21578,channels){
var map__21589 = p__21578;
var map__21589__$1 = ((((!((map__21589 == null)))?((((map__21589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21589):map__21589);
var entry = map__21589__$1;
var idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21589__$1,cljs.core.cst$kw$idx);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21589__$1,cljs.core.cst$kw$title);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21589__$1,cljs.core.cst$kw$content);
var title_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21589__$1,cljs.core.cst$kw$title_DASH_status);
var content_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21589__$1,cljs.core.cst$kw$content_DASH_status);
var G__21591 = null;
var G__21592 = (function (){var G__21594 = ({"onClick": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$display,title_status))?((function (G__21591,map__21589,map__21589__$1,entry,idx,title,content,title_status,content_status){
return (function (){
return ezq.channeler.blog_post.cljs$core$IFn$_invoke$arity$5(idx,cljs.core.cst$kw$title_DASH_status,title_status,title_status,channels);
});})(G__21591,map__21589,map__21589__$1,entry,idx,title,content,title_status,content_status))
:cljs.core.identity), "onChange": ((function (G__21591,map__21589,map__21589__$1,entry,idx,title,content,title_status,content_status){
return (function (e){
var t = e.target;
var v = t.value;
return ezq.channeler.blog_post.cljs$core$IFn$_invoke$arity$5(idx,cljs.core.cst$kw$title,title_status,v,channels);
});})(G__21591,map__21589,map__21589__$1,entry,idx,title,content,title_status,content_status))
});
var G__21595 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$display,title_status))?sablono.interpreter.interpret(ezq.css.bold.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([title], 0))):sablono.interpreter.interpret(ezq.css.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ezq.css.col_md((8),(ezq.render.input_field.cljs$core$IFn$_invoke$arity$1 ? ezq.render.input_field.cljs$core$IFn$_invoke$arity$1(title) : ezq.render.input_field.call(null,title))),ezq.css.col_md((1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"btn btn-primary",cljs.core.cst$kw$on_DASH_click,((function (G__21594,G__21591,map__21589,map__21589__$1,entry,idx,title,content,title_status,content_status){
return (function (){
return ezq.channeler.blog_post.cljs$core$IFn$_invoke$arity$5(idx,cljs.core.cst$kw$title_DASH_status,cljs.core.cst$kw$done,title_status,channels);
});})(G__21594,G__21591,map__21589,map__21589__$1,entry,idx,title,content,title_status,content_status))
], null),"Save"], null))], 0))));
return React.DOM.div(G__21594,G__21595);
})();
var G__21593 = (function (){var G__21596 = ({"onClick": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$display,content_status))?((function (G__21591,G__21592,map__21589,map__21589__$1,entry,idx,title,content,title_status,content_status){
return (function (){
return ezq.channeler.blog_post.cljs$core$IFn$_invoke$arity$5(idx,cljs.core.cst$kw$content_DASH_status,content_status,content_status,channels);
});})(G__21591,G__21592,map__21589,map__21589__$1,entry,idx,title,content,title_status,content_status))
:cljs.core.identity), "onChange": ((function (G__21591,G__21592,map__21589,map__21589__$1,entry,idx,title,content,title_status,content_status){
return (function (e){
var t = e.target;
var v = t.value;
return ezq.channeler.blog_post.cljs$core$IFn$_invoke$arity$5(idx,cljs.core.cst$kw$content,content_status,v,channels);
});})(G__21591,G__21592,map__21589,map__21589__$1,entry,idx,title,content,title_status,content_status))
});
var G__21597 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$display,content_status))?(function (){var attrs21598 = content;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.p,((cljs.core.map_QMARK_(attrs21598))?sablono.interpreter.attributes(attrs21598):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21598))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21598)], null))));
})():sablono.interpreter.interpret(ezq.css.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ezq.css.col_md((8),(ezq.render.input_field.cljs$core$IFn$_invoke$arity$1 ? ezq.render.input_field.cljs$core$IFn$_invoke$arity$1(content) : ezq.render.input_field.call(null,content))),ezq.css.col_md((1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"btn btn-primary",cljs.core.cst$kw$on_DASH_click,((function (G__21596,G__21591,G__21592,map__21589,map__21589__$1,entry,idx,title,content,title_status,content_status){
return (function (){
return ezq.channeler.blog_post.cljs$core$IFn$_invoke$arity$5(idx,cljs.core.cst$kw$content_DASH_status,cljs.core.cst$kw$done,content_status,channels);
});})(G__21596,G__21591,G__21592,map__21589,map__21589__$1,entry,idx,title,content,title_status,content_status))
], null),"Save"], null))], 0))));
return React.DOM.div(G__21596,G__21597);
})();
return React.DOM.div(G__21591,G__21592,G__21593);
});
ezq.render.blog = (function ezq$render$blog(data,channels){
var iter__8463__auto__ = (function ezq$render$blog_$_iter__21605(s__21606){
return (new cljs.core.LazySeq(null,(function (){
var s__21606__$1 = s__21606;
while(true){
var temp__6738__auto__ = cljs.core.seq(s__21606__$1);
if(temp__6738__auto__){
var s__21606__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_(s__21606__$2)){
var c__8461__auto__ = cljs.core.chunk_first(s__21606__$2);
var size__8462__auto__ = cljs.core.count(c__8461__auto__);
var b__21608 = cljs.core.chunk_buffer(size__8462__auto__);
if((function (){var i__21607 = (0);
while(true){
if((i__21607 < size__8462__auto__)){
var entry = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__8461__auto__,i__21607);
cljs.core.chunk_append(b__21608,ezq.render.blog_post(entry,channels));

var G__21611 = (i__21607 + (1));
i__21607 = G__21611;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21608),ezq$render$blog_$_iter__21605(cljs.core.chunk_rest(s__21606__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21608),null);
}
} else {
var entry = cljs.core.first(s__21606__$2);
return cljs.core.cons(ezq.render.blog_post(entry,channels),ezq$render$blog_$_iter__21605(cljs.core.rest(s__21606__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8463__auto__(cljs.core.cst$kw$blog_DASH_entries.cljs$core$IFn$_invoke$arity$1(data));
});
ezq.render.reset_button = /**
 * 
 */
ezq.render._ = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (channels){
var G__21612 = ({"onClick": cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ezq.channeler.reset_button,channels), "className": "btn btn-danger"});
var G__21613 = "Reset State";
return React.DOM.button(G__21612,G__21613);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"_"], null));
ezq.render.game_msg = /**
 * 
 */
ezq.render._ = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (data,channels){
var attrs21614 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Game: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ezq.render.turn_status(data))].join('');
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs21614))?sablono.interpreter.attributes(attrs21614):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs21614))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs21614)], null))));
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"_"], null));
ezq.render.new_game_btn = /**
 * 
 */
ezq.render._ = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (data,channels){
var G__21615 = ({"onClick": ((((2) >= cljs.core.cst$kw$wins.cljs$core$IFn$_invoke$arity$1(data)))?(function (){
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__){
return (function (state_21621){
var state_val_21622 = (state_21621[(1)]);
if((state_val_21622 === (1))){
var inst_21617 = cljs.core.cst$kw$new_DASH_game.cljs$core$IFn$_invoke$arity$1(channels);
var state_21621__$1 = state_21621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21621__$1,(2),inst_21617,true);
} else {
if((state_val_21622 === (2))){
var inst_21619 = (state_21621[(2)]);
var state_21621__$1 = state_21621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21621__$1,inst_21619);
} else {
return null;
}
}
});})(c__16369__auto__))
;
return ((function (switch__16243__auto__,c__16369__auto__){
return (function() {
var ezq$render$state_machine__16244__auto__ = null;
var ezq$render$state_machine__16244__auto____0 = (function (){
var statearr_21626 = [null,null,null,null,null,null,null];
(statearr_21626[(0)] = ezq$render$state_machine__16244__auto__);

(statearr_21626[(1)] = (1));

return statearr_21626;
});
var ezq$render$state_machine__16244__auto____1 = (function (state_21621){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_21621);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e21627){if((e21627 instanceof Object)){
var ex__16247__auto__ = e21627;
var statearr_21628_21645 = state_21621;
(statearr_21628_21645[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21621);

return cljs.core.cst$kw$recur;
} else {
throw e21627;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__21646 = state_21621;
state_21621 = G__21646;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
ezq$render$state_machine__16244__auto__ = function(state_21621){
switch(arguments.length){
case 0:
return ezq$render$state_machine__16244__auto____0.call(this);
case 1:
return ezq$render$state_machine__16244__auto____1.call(this,state_21621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$render$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$render$state_machine__16244__auto____0;
ezq$render$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$render$state_machine__16244__auto____1;
return ezq$render$state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__))
})();
var state__16371__auto__ = (function (){var statearr_21629 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_21629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_21629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__))
);

return c__16369__auto__;
}):(function (){
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__){
return (function (state_21635){
var state_val_21636 = (state_21635[(1)]);
if((state_val_21636 === (1))){
var inst_21630 = cljs.core.cst$kw$restart.cljs$core$IFn$_invoke$arity$1(channels);
var state_21635__$1 = state_21635;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21635__$1,(2),inst_21630,true);
} else {
if((state_val_21636 === (2))){
var inst_21632 = (state_21635[(2)]);
var inst_21633 = window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
var state_21635__$1 = (function (){var statearr_21637 = state_21635;
(statearr_21637[(7)] = inst_21632);

return statearr_21637;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21635__$1,inst_21633);
} else {
return null;
}
}
});})(c__16369__auto__))
;
return ((function (switch__16243__auto__,c__16369__auto__){
return (function() {
var ezq$render$state_machine__16244__auto__ = null;
var ezq$render$state_machine__16244__auto____0 = (function (){
var statearr_21641 = [null,null,null,null,null,null,null,null];
(statearr_21641[(0)] = ezq$render$state_machine__16244__auto__);

(statearr_21641[(1)] = (1));

return statearr_21641;
});
var ezq$render$state_machine__16244__auto____1 = (function (state_21635){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_21635);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e21642){if((e21642 instanceof Object)){
var ex__16247__auto__ = e21642;
var statearr_21643_21647 = state_21635;
(statearr_21643_21647[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21635);

return cljs.core.cst$kw$recur;
} else {
throw e21642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__21648 = state_21635;
state_21635 = G__21648;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
ezq$render$state_machine__16244__auto__ = function(state_21635){
switch(arguments.length){
case 0:
return ezq$render$state_machine__16244__auto____0.call(this);
case 1:
return ezq$render$state_machine__16244__auto____1.call(this,state_21635);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$render$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$render$state_machine__16244__auto____0;
ezq$render$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$render$state_machine__16244__auto____1;
return ezq$render$state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__))
})();
var state__16371__auto__ = (function (){var statearr_21644 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_21644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_21644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__))
);

return c__16369__auto__;
})), "className": "btn btn-success"});
var G__21616 = ((((2) >= cljs.core.cst$kw$wins.cljs$core$IFn$_invoke$arity$1(data)))?"New Game":"You're on a roll!");
return React.DOM.button(G__21615,G__21616);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"_"], null));
ezq.render.wins = /**
 * 
 */
ezq.render._ = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (data){
return ezq.css.bold.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Games won: ",cljs.core.cst$kw$wins.cljs$core$IFn$_invoke$arity$1(data)], 0));
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"_"], null));
ezq.render.ai_btn = /**
 * 
 */
ezq.render._ = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (data,channels){
var G__21649 = ({"onClick": (function (){
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__){
return (function (state_21655){
var state_val_21656 = (state_21655[(1)]);
if((state_val_21656 === (1))){
var inst_21651 = cljs.core.cst$kw$ai.cljs$core$IFn$_invoke$arity$1(channels);
var state_21655__$1 = state_21655;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21655__$1,(2),inst_21651,true);
} else {
if((state_val_21656 === (2))){
var inst_21653 = (state_21655[(2)]);
var state_21655__$1 = state_21655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21655__$1,inst_21653);
} else {
return null;
}
}
});})(c__16369__auto__))
;
return ((function (switch__16243__auto__,c__16369__auto__){
return (function() {
var ezq$render$state_machine__16244__auto__ = null;
var ezq$render$state_machine__16244__auto____0 = (function (){
var statearr_21660 = [null,null,null,null,null,null,null];
(statearr_21660[(0)] = ezq$render$state_machine__16244__auto__);

(statearr_21660[(1)] = (1));

return statearr_21660;
});
var ezq$render$state_machine__16244__auto____1 = (function (state_21655){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_21655);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e21661){if((e21661 instanceof Object)){
var ex__16247__auto__ = e21661;
var statearr_21662_21664 = state_21655;
(statearr_21662_21664[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21655);

return cljs.core.cst$kw$recur;
} else {
throw e21661;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__21665 = state_21655;
state_21655 = G__21665;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
ezq$render$state_machine__16244__auto__ = function(state_21655){
switch(arguments.length){
case 0:
return ezq$render$state_machine__16244__auto____0.call(this);
case 1:
return ezq$render$state_machine__16244__auto____1.call(this,state_21655);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$render$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$render$state_machine__16244__auto____0;
ezq$render$state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$render$state_machine__16244__auto____1;
return ezq$render$state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__))
})();
var state__16371__auto__ = (function (){var statearr_21663 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_21663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_21663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__))
);

return c__16369__auto__;
}), "className": (cljs.core.truth_(cljs.core.cst$kw$ai.cljs$core$IFn$_invoke$arity$1(data))?"btn btn-primary":"btn btn-danger")});
var G__21650 = (cljs.core.truth_(cljs.core.cst$kw$ai.cljs$core$IFn$_invoke$arity$1(data))?"Disable AI":"Engage AI");
return React.DOM.button(G__21649,G__21650);
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"_"], null));
ezq.render.app = /**
 * 
 */
ezq.render._ = quiescent.core.component.cljs$core$IFn$_invoke$arity$2((function (data,channels){
var ticker_btn = (ezq.render.ticker_button.cljs$core$IFn$_invoke$arity$2 ? ezq.render.ticker_button.cljs$core$IFn$_invoke$arity$2(data,channels) : ezq.render.ticker_button.call(null,data,channels));
var ticker = (ezq.render.ticker.cljs$core$IFn$_invoke$arity$1 ? ezq.render.ticker.cljs$core$IFn$_invoke$arity$1(data) : ezq.render.ticker.call(null,data));
var db = (ezq.render.db.cljs$core$IFn$_invoke$arity$1 ? ezq.render.db.cljs$core$IFn$_invoke$arity$1(data) : ezq.render.db.call(null,data));
var board = (ezq.render.board.cljs$core$IFn$_invoke$arity$4 ? ezq.render.board.cljs$core$IFn$_invoke$arity$4(data,channels,(3),(3)) : ezq.render.board.call(null,data,channels,(3),(3)));
var reset_button = (ezq.render.reset_button.cljs$core$IFn$_invoke$arity$1 ? ezq.render.reset_button.cljs$core$IFn$_invoke$arity$1(channels) : ezq.render.reset_button.call(null,channels));
var show_state = (ezq.render.show_state.cljs$core$IFn$_invoke$arity$2 ? ezq.render.show_state.cljs$core$IFn$_invoke$arity$2(data,channels) : ezq.render.show_state.call(null,data,channels));
var game_msg = (ezq.render.game_msg.cljs$core$IFn$_invoke$arity$2 ? ezq.render.game_msg.cljs$core$IFn$_invoke$arity$2(data,channels) : ezq.render.game_msg.call(null,data,channels));
var new_game_btn = (ezq.render.new_game_btn.cljs$core$IFn$_invoke$arity$2 ? ezq.render.new_game_btn.cljs$core$IFn$_invoke$arity$2(data,channels) : ezq.render.new_game_btn.call(null,data,channels));
var ai_btn = (ezq.render.ai_btn.cljs$core$IFn$_invoke$arity$2 ? ezq.render.ai_btn.cljs$core$IFn$_invoke$arity$2(data,channels) : ezq.render.ai_btn.call(null,data,channels));
var top_panel = ezq.css.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ezq.css.col_lg((12),ezq.render.panel_id("top-panel").call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,"Timer (click me!)"], null),ticker,ticker_btn))], 0));
var mid_panel = ezq.css.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ezq.css.col_lg((12),ezq.render.panel_id("mid-panel").call(null,ezq.css.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,game_msg,(ezq.render.wins.cljs$core$IFn$_invoke$arity$1 ? ezq.render.wins.cljs$core$IFn$_invoke$arity$1(data) : ezq.render.wins.call(null,data))], null)], 0)),board,ezq.css.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ezq.css.col_sm((2),new_game_btn),ezq.css.col_sm((3),ai_btn)], 0))))], 0));
var bottom_panel = ezq.css.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ezq.css.col_lg((12),ezq.render.panel_id("bottom-panel").call(null,React.DOM.h3(null,"App State (click me!)"),db,reset_button))], 0));
var blog_panel = ezq.css.row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ezq.css.col_lg((12),ezq.render.panel_id("blog-panel").call(null,React.DOM.h3(null,"Blog (click me!)"),ezq.render.blog(data,channels)))], 0));
var left_col = ezq.css.col_lg((6),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,top_panel,mid_panel,ezq.css.col_md((1),(function (){var G__21670 = ({"className": "btn btn-danger"});
var G__21671 = (function (){var G__21672 = ({"onClick": ((function (G__21670,ticker_btn,ticker,db,board,reset_button,show_state,game_msg,new_game_btn,ai_btn,top_panel,mid_panel,bottom_panel,blog_panel){
return (function (){
return ezq.channeler.blog_post.cljs$core$IFn$_invoke$arity$1(channels);
});})(G__21670,ticker_btn,ticker,db,board,reset_button,show_state,game_msg,new_game_btn,ai_btn,top_panel,mid_panel,bottom_panel,blog_panel))
, "className": "glyphicon glyphicon-plus"});
return React.DOM.span(G__21672);
})();
return React.DOM.button(G__21670,G__21671);
})()),ezq.css.col_md((11),blog_panel)], null));
var right_col = ezq.css.col_lg((6),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,bottom_panel], null));
var row = ezq.css.container(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,left_col,right_col], null));
var res = row;
return res;
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"_"], null));
