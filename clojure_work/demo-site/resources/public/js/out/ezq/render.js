// Compiled by ClojureScript 1.9.518 {}
goog.provide('ezq.render');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('quiescent.core');
goog.require('quiescent.dom');
goog.require('sablono.core');
goog.require('ezq.css');
goog.require('ezq.channeler');
cljs.core.enable_console_print_BANG_.call(null);
ezq.render.ticker = /**
 * 
 */
ezq.render.ticker = quiescent.core.component.call(null,(function (p__40964){
var map__40965 = p__40964;
var map__40965__$1 = ((((!((map__40965 == null)))?((((map__40965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40965.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40965):map__40965);
var ticker = cljs.core.get.call(null,map__40965__$1,new cljs.core.Keyword(null,"ticker","ticker",214613162));
var attrs40967 = ticker;
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs40967))?sablono.interpreter.attributes.call(null,attrs40967):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40967))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40967)], null))));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"ticker"], null));
ezq.render.circle = (function ezq$render$circle(v){
return React.DOM.span(({"style": ({"color": "white", "borderRadius": "50%", "width": "25px", "textAlign": "center", "display": "block", "lineHeight": "16px", "fontSize": "20px", "boxSizing": "border-box", "border": "2px solid red", "backgroundColor": "red", "height": "25px"})}),sablono.interpreter.interpret.call(null,v));
});
ezq.render.turn_status = (function ezq$render$turn_status(p__40968){
var map__40971 = p__40968;
var map__40971__$1 = ((((!((map__40971 == null)))?((((map__40971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40971):map__40971);
var turn = cljs.core.get.call(null,map__40971__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var winner = cljs.core.get.call(null,map__40971__$1,new cljs.core.Keyword(null,"winner","winner",714604679));
if(cljs.core._EQ_.call(null,winner,new cljs.core.Keyword(null,"tie","tie",-487201694))){
return "Game is tied!";
} else {
if(cljs.core._EQ_.call(null,winner,new cljs.core.Keyword(null,"x","x",2099068185))){
return "You won!";
} else {
if(cljs.core._EQ_.call(null,winner,new cljs.core.Keyword(null,"o","o",-1350007228))){
return ":o is the winner";
} else {
if(cljs.core._EQ_.call(null,turn,new cljs.core.Keyword(null,"o","o",-1350007228))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(turn),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'s turn to play!")].join('');
} else {
if(cljs.core._EQ_.call(null,turn,new cljs.core.Keyword(null,"x","x",2099068185))){
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
ezq.render._ = quiescent.core.component.call(null,(function (p__40973,channels,x,y){
var map__40974 = p__40973;
var map__40974__$1 = ((((!((map__40974 == null)))?((((map__40974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40974):map__40974);
var board = cljs.core.get.call(null,map__40974__$1,new cljs.core.Keyword(null,"board","board",-1907017633));
var turn = cljs.core.get.call(null,map__40974__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var winner = cljs.core.get.call(null,map__40974__$1,new cljs.core.Keyword(null,"winner","winner",714604679));
var cell_status = cljs.core.get.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),null);
var color = (function (){var G__40976 = cell_status;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185),G__40976)){
return "btn btn-primary";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),G__40976)){
return "btn btn-danger";
} else {
if(cljs.core._EQ_.call(null,null,G__40976)){
return "btn btn-default";
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_status)].join('')));

}
}
}
})();
var style = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(50),new cljs.core.Keyword(null,"height","height",1025178622),(50),new cljs.core.Keyword(null,"display","display",242065432),"flex","justify-content","center"], null);
var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),color,new cljs.core.Keyword(null,"style","style",-496642736),style], null);
var span = ((function (cell_status,color,style,opts,map__40974,map__40974__$1,board,turn,winner){
return (function (x__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),x__$1], null)], null);
});})(cell_status,color,style,opts,map__40974,map__40974__$1,board,turn,winner))
;
var default$ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),color,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cell_status,color,style,opts,span,map__40974,map__40974__$1,board,turn,winner){
return (function (){
return ezq.channeler.cell_handler.call(null,winner,x,y,channels);
});})(cell_status,color,style,opts,span,map__40974,map__40974__$1,board,turn,winner))
], null),""], null);
var x__$1 = span.call(null,"X");
var o = span.call(null,"O");
var cell_out = sablono.interpreter.interpret.call(null,(function (){var G__40977 = cell_status;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"x","x",2099068185),G__40977)){
return x__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"o","o",-1350007228),G__40977)){
return o;
} else {
if(cljs.core._EQ_.call(null,null,G__40977)){
return default$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cell_status)].join('')));

}
}
}
})());
return cell_out;
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"_"], null));
ezq.render.Root = /**
 * 
 */
ezq.render._ = quiescent.core.component.call(null,(function (data,channels){
return ezq.render.app.call(null,data,channels);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"_"], null));
/**
 * Given an Element, immediately render it, rooted to the
 * specified DOM node.
 */
ezq.render.render = (function ezq$render$render(element,node){
return ReactDOM.render(element,node);
});
var render_pending_QMARK__40978 = cljs.core.atom.call(null,false);
/**
 * Render the given application state tree.
 */
ezq.render.request_render = ((function (render_pending_QMARK__40978){
return (function ezq$render$request_render(app){
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,render_pending_QMARK__40978,false,true))){
return window.requestAnimationFrame(((function (render_pending_QMARK__40978){
return (function (){
return ezq.render.render.call(null,ezq.render.Root.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(app)),new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(app)),document.getElementById("main"));
});})(render_pending_QMARK__40978))
,cljs.core.reset_BANG_.call(null,render_pending_QMARK__40978,false));
} else {
return null;
}
});})(render_pending_QMARK__40978))
;
goog.exportSymbol('ezq.render.request_render', ezq.render.request_render);
/**
 * 
 */
ezq.render.board = quiescent.core.component.call(null,(function (data,channels,n,m){
return React.DOM.table(({"style": ({"border": (0)})}),React.DOM.tbody(null,cljs.core.into_array.call(null,(function (){var iter__29611__auto__ = (function ezq$render$iter__40979(s__40980){
return (new cljs.core.LazySeq(null,(function (){
var s__40980__$1 = s__40980;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__40980__$1);
if(temp__6738__auto__){
var s__40980__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40980__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__40980__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__40982 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__40981 = (0);
while(true){
if((i__40981 < size__29610__auto__)){
var x = cljs.core._nth.call(null,c__29609__auto__,i__40981);
cljs.core.chunk_append.call(null,b__40982,React.DOM.tr(null,cljs.core.into_array.call(null,(function (){var iter__29611__auto__ = ((function (i__40981,x,c__29609__auto__,size__29610__auto__,b__40982,s__40980__$2,temp__6738__auto__){
return (function ezq$render$iter__40979_$_iter__40991(s__40992){
return (new cljs.core.LazySeq(null,((function (i__40981,x,c__29609__auto__,size__29610__auto__,b__40982,s__40980__$2,temp__6738__auto__){
return (function (){
var s__40992__$1 = s__40992;
while(true){
var temp__6738__auto____$1 = cljs.core.seq.call(null,s__40992__$1);
if(temp__6738__auto____$1){
var s__40992__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40992__$2)){
var c__29609__auto____$1 = cljs.core.chunk_first.call(null,s__40992__$2);
var size__29610__auto____$1 = cljs.core.count.call(null,c__29609__auto____$1);
var b__40994 = cljs.core.chunk_buffer.call(null,size__29610__auto____$1);
if((function (){var i__40993 = (0);
while(true){
if((i__40993 < size__29610__auto____$1)){
var y = cljs.core._nth.call(null,c__29609__auto____$1,i__40993);
cljs.core.chunk_append.call(null,b__40994,React.DOM.td(({"style": ({"height": (30), "width": (30)})}),sablono.interpreter.interpret.call(null,ezq.render.cell.call(null,data,channels,x,y))));

var G__40999 = (i__40993 + (1));
i__40993 = G__40999;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40994),ezq$render$iter__40979_$_iter__40991.call(null,cljs.core.chunk_rest.call(null,s__40992__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40994),null);
}
} else {
var y = cljs.core.first.call(null,s__40992__$2);
return cljs.core.cons.call(null,React.DOM.td(({"style": ({"height": (30), "width": (30)})}),sablono.interpreter.interpret.call(null,ezq.render.cell.call(null,data,channels,x,y))),ezq$render$iter__40979_$_iter__40991.call(null,cljs.core.rest.call(null,s__40992__$2)));
}
} else {
return null;
}
break;
}
});})(i__40981,x,c__29609__auto__,size__29610__auto__,b__40982,s__40980__$2,temp__6738__auto__))
,null,null));
});})(i__40981,x,c__29609__auto__,size__29610__auto__,b__40982,s__40980__$2,temp__6738__auto__))
;
return iter__29611__auto__.call(null,cljs.core.range.call(null,m));
})())));

var G__41000 = (i__40981 + (1));
i__40981 = G__41000;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40982),ezq$render$iter__40979.call(null,cljs.core.chunk_rest.call(null,s__40980__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40982),null);
}
} else {
var x = cljs.core.first.call(null,s__40980__$2);
return cljs.core.cons.call(null,React.DOM.tr(null,cljs.core.into_array.call(null,(function (){var iter__29611__auto__ = ((function (x,s__40980__$2,temp__6738__auto__){
return (function ezq$render$iter__40979_$_iter__40995(s__40996){
return (new cljs.core.LazySeq(null,((function (x,s__40980__$2,temp__6738__auto__){
return (function (){
var s__40996__$1 = s__40996;
while(true){
var temp__6738__auto____$1 = cljs.core.seq.call(null,s__40996__$1);
if(temp__6738__auto____$1){
var s__40996__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40996__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__40996__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__40998 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__40997 = (0);
while(true){
if((i__40997 < size__29610__auto__)){
var y = cljs.core._nth.call(null,c__29609__auto__,i__40997);
cljs.core.chunk_append.call(null,b__40998,React.DOM.td(({"style": ({"height": (30), "width": (30)})}),sablono.interpreter.interpret.call(null,ezq.render.cell.call(null,data,channels,x,y))));

var G__41001 = (i__40997 + (1));
i__40997 = G__41001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40998),ezq$render$iter__40979_$_iter__40995.call(null,cljs.core.chunk_rest.call(null,s__40996__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40998),null);
}
} else {
var y = cljs.core.first.call(null,s__40996__$2);
return cljs.core.cons.call(null,React.DOM.td(({"style": ({"height": (30), "width": (30)})}),sablono.interpreter.interpret.call(null,ezq.render.cell.call(null,data,channels,x,y))),ezq$render$iter__40979_$_iter__40995.call(null,cljs.core.rest.call(null,s__40996__$2)));
}
} else {
return null;
}
break;
}
});})(x,s__40980__$2,temp__6738__auto__))
,null,null));
});})(x,s__40980__$2,temp__6738__auto__))
;
return iter__29611__auto__.call(null,cljs.core.range.call(null,m));
})())),ezq$render$iter__40979.call(null,cljs.core.rest.call(null,s__40980__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29611__auto__.call(null,cljs.core.range.call(null,n));
})())));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"board"], null));
var package_41003 = (function (p1__41002_SHARP_){
return ezq.css.flex_box.call(null,ezq.css.flex_item.call(null,p1__41002_SHARP_));
});
ezq.render.panel_id = ((function (package_41003){
return (function ezq$render$panel_id(panel_id){
var panel = ((function (package_41003){
return (function() {
var G__41004 = null;
var G__41004__1 = (function (body){
return React.DOM.div(null,React.DOM.div(({"className": "panel panel-info"}),React.DOM.div(({"className": "panel-body"}),sablono.interpreter.interpret.call(null,body)))).call(null);
});
var G__41004__2 = (function (header,body){
return React.DOM.div(null,React.DOM.div(({"className": "panel panel-info"}),React.DOM.div(({"id": panel_id, "className": "panel-heading"}),React.DOM.div(({"data-toggle": "collapse", "href": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(panel_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("1")].join('')}),sablono.interpreter.interpret.call(null,header))),React.DOM.div(({"id": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(panel_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("1")].join(''), "className": "panel-collapse collapse in"}),sablono.interpreter.interpret.call(null,package_41003.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"ticker",new cljs.core.Keyword(null,"class","class",-2030961996),"panel-body"], null),body], null))))));
});
var G__41004__3 = (function (header,body,footer){
var heading = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"panel-heading"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-toggle","data-toggle",436966687),"collapse",new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(panel_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("1")].join('')], null),header], null)], null);
var panel_body = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(panel_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("1")].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),"panel-collapse collapse in"], null),package_41003.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),panel_id,new cljs.core.Keyword(null,"class","class",-2030961996),"panel-body"], null),body], null))], null);
var panel_booter = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),panel_id,new cljs.core.Keyword(null,"class","class",-2030961996),"panel-footer"], null),footer], null);
return React.DOM.div(({"className": "panel panel-info"}),sablono.interpreter.interpret.call(null,heading),sablono.interpreter.interpret.call(null,panel_body),sablono.interpreter.interpret.call(null,panel_booter));
});
G__41004 = function(header,body,footer){
switch(arguments.length){
case 1:
return G__41004__1.call(this,header);
case 2:
return G__41004__2.call(this,header,body);
case 3:
return G__41004__3.call(this,header,body,footer);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__41004.cljs$core$IFn$_invoke$arity$1 = G__41004__1;
G__41004.cljs$core$IFn$_invoke$arity$2 = G__41004__2;
G__41004.cljs$core$IFn$_invoke$arity$3 = G__41004__3;
return G__41004;
})()
;})(package_41003))
;
return panel;
});})(package_41003))
;
ezq.render.show_panel = /**
 * 
 */
ezq.render._ = quiescent.core.component.call(null,(function (p__41005,child){
var map__41006 = p__41005;
var map__41006__$1 = ((((!((map__41006 == null)))?((((map__41006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41006.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41006):map__41006);
var show_ticker = cljs.core.get.call(null,map__41006__$1,new cljs.core.Keyword(null,"show-ticker","show-ticker",1941385823));
var attrs41008 = child;
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs41008))?sablono.interpreter.attributes.call(null,attrs41008):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs41008))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41008)], null))));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"_"], null));
ezq.render.title_btn = /**
 * 
 */
ezq.render._ = quiescent.core.component.call(null,(function (data,channels){
return React.DOM.button(({"onClick": (function (){
var seq__41009 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-ticker","show-ticker",1941385823),new cljs.core.Keyword(null,"show-ticker-msg","show-ticker-msg",773920191)], null));
var chunk__41010 = null;
var count__41011 = (0);
var i__41012 = (0);
while(true){
if((i__41012 < count__41011)){
var c = cljs.core._nth.call(null,chunk__41010,i__41012);
var c__31293__auto___41039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__41009,chunk__41010,count__41011,i__41012,c__31293__auto___41039,c){
return (function (){
var f__31294__auto__ = (function (){var switch__31270__auto__ = ((function (seq__41009,chunk__41010,count__41011,i__41012,c__31293__auto___41039,c){
return (function (state_41017){
var state_val_41018 = (state_41017[(1)]);
if((state_val_41018 === (1))){
var inst_41013 = cljs.core.get.call(null,channels,c);
var state_41017__$1 = state_41017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41017__$1,(2),inst_41013,true);
} else {
if((state_val_41018 === (2))){
var inst_41015 = (state_41017[(2)]);
var state_41017__$1 = state_41017;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41017__$1,inst_41015);
} else {
return null;
}
}
});})(seq__41009,chunk__41010,count__41011,i__41012,c__31293__auto___41039,c))
;
return ((function (seq__41009,chunk__41010,count__41011,i__41012,switch__31270__auto__,c__31293__auto___41039,c){
return (function() {
var ezq$render$state_machine__31271__auto__ = null;
var ezq$render$state_machine__31271__auto____0 = (function (){
var statearr_41022 = [null,null,null,null,null,null,null];
(statearr_41022[(0)] = ezq$render$state_machine__31271__auto__);

(statearr_41022[(1)] = (1));

return statearr_41022;
});
var ezq$render$state_machine__31271__auto____1 = (function (state_41017){
while(true){
var ret_value__31272__auto__ = (function (){try{while(true){
var result__31273__auto__ = switch__31270__auto__.call(null,state_41017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31273__auto__;
}
break;
}
}catch (e41023){if((e41023 instanceof Object)){
var ex__31274__auto__ = e41023;
var statearr_41024_41040 = state_41017;
(statearr_41024_41040[(5)] = ex__31274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41041 = state_41017;
state_41017 = G__41041;
continue;
} else {
return ret_value__31272__auto__;
}
break;
}
});
ezq$render$state_machine__31271__auto__ = function(state_41017){
switch(arguments.length){
case 0:
return ezq$render$state_machine__31271__auto____0.call(this);
case 1:
return ezq$render$state_machine__31271__auto____1.call(this,state_41017);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$render$state_machine__31271__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$render$state_machine__31271__auto____0;
ezq$render$state_machine__31271__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$render$state_machine__31271__auto____1;
return ezq$render$state_machine__31271__auto__;
})()
;})(seq__41009,chunk__41010,count__41011,i__41012,switch__31270__auto__,c__31293__auto___41039,c))
})();
var state__31295__auto__ = (function (){var statearr_41025 = f__31294__auto__.call(null);
(statearr_41025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31293__auto___41039);

return statearr_41025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31295__auto__);
});})(seq__41009,chunk__41010,count__41011,i__41012,c__31293__auto___41039,c))
);


var G__41042 = seq__41009;
var G__41043 = chunk__41010;
var G__41044 = count__41011;
var G__41045 = (i__41012 + (1));
seq__41009 = G__41042;
chunk__41010 = G__41043;
count__41011 = G__41044;
i__41012 = G__41045;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__41009);
if(temp__6738__auto__){
var seq__41009__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41009__$1)){
var c__29660__auto__ = cljs.core.chunk_first.call(null,seq__41009__$1);
var G__41046 = cljs.core.chunk_rest.call(null,seq__41009__$1);
var G__41047 = c__29660__auto__;
var G__41048 = cljs.core.count.call(null,c__29660__auto__);
var G__41049 = (0);
seq__41009 = G__41046;
chunk__41010 = G__41047;
count__41011 = G__41048;
i__41012 = G__41049;
continue;
} else {
var c = cljs.core.first.call(null,seq__41009__$1);
var c__31293__auto___41050 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__41009,chunk__41010,count__41011,i__41012,c__31293__auto___41050,c,seq__41009__$1,temp__6738__auto__){
return (function (){
var f__31294__auto__ = (function (){var switch__31270__auto__ = ((function (seq__41009,chunk__41010,count__41011,i__41012,c__31293__auto___41050,c,seq__41009__$1,temp__6738__auto__){
return (function (state_41030){
var state_val_41031 = (state_41030[(1)]);
if((state_val_41031 === (1))){
var inst_41026 = cljs.core.get.call(null,channels,c);
var state_41030__$1 = state_41030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41030__$1,(2),inst_41026,true);
} else {
if((state_val_41031 === (2))){
var inst_41028 = (state_41030[(2)]);
var state_41030__$1 = state_41030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41030__$1,inst_41028);
} else {
return null;
}
}
});})(seq__41009,chunk__41010,count__41011,i__41012,c__31293__auto___41050,c,seq__41009__$1,temp__6738__auto__))
;
return ((function (seq__41009,chunk__41010,count__41011,i__41012,switch__31270__auto__,c__31293__auto___41050,c,seq__41009__$1,temp__6738__auto__){
return (function() {
var ezq$render$state_machine__31271__auto__ = null;
var ezq$render$state_machine__31271__auto____0 = (function (){
var statearr_41035 = [null,null,null,null,null,null,null];
(statearr_41035[(0)] = ezq$render$state_machine__31271__auto__);

(statearr_41035[(1)] = (1));

return statearr_41035;
});
var ezq$render$state_machine__31271__auto____1 = (function (state_41030){
while(true){
var ret_value__31272__auto__ = (function (){try{while(true){
var result__31273__auto__ = switch__31270__auto__.call(null,state_41030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31273__auto__;
}
break;
}
}catch (e41036){if((e41036 instanceof Object)){
var ex__31274__auto__ = e41036;
var statearr_41037_41051 = state_41030;
(statearr_41037_41051[(5)] = ex__31274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41052 = state_41030;
state_41030 = G__41052;
continue;
} else {
return ret_value__31272__auto__;
}
break;
}
});
ezq$render$state_machine__31271__auto__ = function(state_41030){
switch(arguments.length){
case 0:
return ezq$render$state_machine__31271__auto____0.call(this);
case 1:
return ezq$render$state_machine__31271__auto____1.call(this,state_41030);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$render$state_machine__31271__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$render$state_machine__31271__auto____0;
ezq$render$state_machine__31271__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$render$state_machine__31271__auto____1;
return ezq$render$state_machine__31271__auto__;
})()
;})(seq__41009,chunk__41010,count__41011,i__41012,switch__31270__auto__,c__31293__auto___41050,c,seq__41009__$1,temp__6738__auto__))
})();
var state__31295__auto__ = (function (){var statearr_41038 = f__31294__auto__.call(null);
(statearr_41038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31293__auto___41050);

return statearr_41038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31295__auto__);
});})(seq__41009,chunk__41010,count__41011,i__41012,c__31293__auto___41050,c,seq__41009__$1,temp__6738__auto__))
);


var G__41053 = cljs.core.next.call(null,seq__41009__$1);
var G__41054 = null;
var G__41055 = (0);
var G__41056 = (0);
seq__41009 = G__41053;
chunk__41010 = G__41054;
count__41011 = G__41055;
i__41012 = G__41056;
continue;
}
} else {
return null;
}
}
break;
}
}), "className": "btn btn-primary"}),sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"show-ticker-msg","show-ticker-msg",773920191).cljs$core$IFn$_invoke$arity$1(data)));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"_"], null));
ezq.render.show_state = /**
 * 
 */
ezq.render._ = quiescent.core.component.call(null,(function (data,p__41057){
var map__41058 = p__41057;
var map__41058__$1 = ((((!((map__41058 == null)))?((((map__41058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41058.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41058):map__41058);
var channels = map__41058__$1;
var show_state = cljs.core.get.call(null,map__41058__$1,new cljs.core.Keyword(null,"show-state","show-state",-733141016));
return React.DOM.button(({"onClick": ezq.channeler.show_state, "className": "btn btn-success"}),"Show State");
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"_"], null));
ezq.render.ticker_button = /**
 * 
 */
ezq.render._ = quiescent.core.component.call(null,(function (p__41060,channels){
var map__41061 = p__41060;
var map__41061__$1 = ((((!((map__41061 == null)))?((((map__41061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41061.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41061):map__41061);
var ticker_switch = cljs.core.get.call(null,map__41061__$1,new cljs.core.Keyword(null,"ticker-switch","ticker-switch",-364567782));
return React.DOM.button(({"onClick": cljs.core.partial.call(null,ezq.channeler.ticker_button,channels), "className": "btn btn-default"}),sablono.interpreter.interpret.call(null,ticker_switch));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"_"], null));
ezq.render.db = /**
 * 
 */
ezq.render._ = quiescent.core.component.call(null,(function (data){
var header = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2em"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Key"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"Value"], null)], null)], null);
var body = cljs.core.apply.call(null,cljs.core.conj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__29611__auto__ = ((function (header){
return (function ezq$render$iter__41063(s__41064){
return (new cljs.core.LazySeq(null,((function (header){
return (function (){
var s__41064__$1 = s__41064;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__41064__$1);
if(temp__6738__auto__){
var s__41064__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41064__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__41064__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__41066 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__41065 = (0);
while(true){
if((i__41065 < size__29610__auto__)){
var vec__41073 = cljs.core._nth.call(null,c__29609__auto__,i__41065);
var k = cljs.core.nth.call(null,vec__41073,(0),null);
var v = cljs.core.nth.call(null,vec__41073,(1),null);
cljs.core.chunk_append.call(null,b__41066,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.call(null,k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.call(null,v)], null)], null));

var G__41079 = (i__41065 + (1));
i__41065 = G__41079;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41066),ezq$render$iter__41063.call(null,cljs.core.chunk_rest.call(null,s__41064__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41066),null);
}
} else {
var vec__41076 = cljs.core.first.call(null,s__41064__$2);
var k = cljs.core.nth.call(null,vec__41076,(0),null);
var v = cljs.core.nth.call(null,vec__41076,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.call(null,k)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),cljs.core.pr_str.call(null,v)], null)], null),ezq$render$iter__41063.call(null,cljs.core.rest.call(null,s__41064__$2)));
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
return iter__29611__auto__.call(null,data);
})());
var db = React.DOM.div(({"style": ({"maxWidth": "400px", "width": "100% !important"}), "className": "container"}),React.DOM.table(({"className": "col-lg-3 table table-bordered table-striped table-hover"}),sablono.interpreter.interpret.call(null,header),sablono.interpreter.interpret.call(null,body)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"show-state","show-state",-733141016).cljs$core$IFn$_invoke$arity$1(data))){
return db;
} else {
return null;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"_"], null));
ezq.render.input_field = /**
 * 
 */
ezq.render._ = quiescent.core.component.call(null,(function (v){
return quiescent.dom.textarea.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),v], null));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"_"], null));
ezq.render.blog_post = (function ezq$render$blog_post(p__41080,channels){
var map__41084 = p__41080;
var map__41084__$1 = ((((!((map__41084 == null)))?((((map__41084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41084.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41084):map__41084);
var entry = map__41084__$1;
var idx = cljs.core.get.call(null,map__41084__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var title = cljs.core.get.call(null,map__41084__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content = cljs.core.get.call(null,map__41084__$1,new cljs.core.Keyword(null,"content","content",15833224));
var title_status = cljs.core.get.call(null,map__41084__$1,new cljs.core.Keyword(null,"title-status","title-status",-626947331));
var content_status = cljs.core.get.call(null,map__41084__$1,new cljs.core.Keyword(null,"content-status","content-status",1626020723));
return React.DOM.div(null,React.DOM.div(({"onClick": ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"display","display",242065432),title_status))?((function (map__41084,map__41084__$1,entry,idx,title,content,title_status,content_status){
return (function (){
return ezq.channeler.blog_post.call(null,idx,new cljs.core.Keyword(null,"title-status","title-status",-626947331),title_status,title_status,channels);
});})(map__41084,map__41084__$1,entry,idx,title,content,title_status,content_status))
:cljs.core.identity), "onChange": ((function (map__41084,map__41084__$1,entry,idx,title,content,title_status,content_status){
return (function (e){
var t = e.target;
var v = t.value;
return ezq.channeler.blog_post.call(null,idx,new cljs.core.Keyword(null,"title","title",636505583),title_status,v,channels);
});})(map__41084,map__41084__$1,entry,idx,title,content,title_status,content_status))
}),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"display","display",242065432),title_status))?sablono.interpreter.interpret.call(null,ezq.css.bold.call(null,title)):sablono.interpreter.interpret.call(null,ezq.css.row.call(null,ezq.css.col_md.call(null,(8),ezq.render.input_field.call(null,title)),ezq.css.col_md.call(null,(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__41084,map__41084__$1,entry,idx,title,content,title_status,content_status){
return (function (){
return ezq.channeler.blog_post.call(null,idx,new cljs.core.Keyword(null,"title-status","title-status",-626947331),new cljs.core.Keyword(null,"done","done",-889844188),title_status,channels);
});})(map__41084,map__41084__$1,entry,idx,title,content,title_status,content_status))
], null),"Save"], null)))))),React.DOM.div(({"onClick": ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"display","display",242065432),content_status))?((function (map__41084,map__41084__$1,entry,idx,title,content,title_status,content_status){
return (function (){
return ezq.channeler.blog_post.call(null,idx,new cljs.core.Keyword(null,"content-status","content-status",1626020723),content_status,content_status,channels);
});})(map__41084,map__41084__$1,entry,idx,title,content,title_status,content_status))
:cljs.core.identity), "onChange": ((function (map__41084,map__41084__$1,entry,idx,title,content,title_status,content_status){
return (function (e){
var t = e.target;
var v = t.value;
return ezq.channeler.blog_post.call(null,idx,new cljs.core.Keyword(null,"content","content",15833224),content_status,v,channels);
});})(map__41084,map__41084__$1,entry,idx,title,content,title_status,content_status))
}),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"display","display",242065432),content_status))?(function (){var attrs41086 = content;
return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs41086))?sablono.interpreter.attributes.call(null,attrs41086):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs41086))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41086)], null))));
})():sablono.interpreter.interpret.call(null,ezq.css.row.call(null,ezq.css.col_md.call(null,(8),ezq.render.input_field.call(null,content)),ezq.css.col_md.call(null,(1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__41084,map__41084__$1,entry,idx,title,content,title_status,content_status){
return (function (){
return ezq.channeler.blog_post.call(null,idx,new cljs.core.Keyword(null,"content-status","content-status",1626020723),new cljs.core.Keyword(null,"done","done",-889844188),content_status,channels);
});})(map__41084,map__41084__$1,entry,idx,title,content,title_status,content_status))
], null),"Save"], null)))))));
});
ezq.render.blog = (function ezq$render$blog(data,channels){
var iter__29611__auto__ = (function ezq$render$blog_$_iter__41091(s__41092){
return (new cljs.core.LazySeq(null,(function (){
var s__41092__$1 = s__41092;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__41092__$1);
if(temp__6738__auto__){
var s__41092__$2 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41092__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__41092__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__41094 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__41093 = (0);
while(true){
if((i__41093 < size__29610__auto__)){
var entry = cljs.core._nth.call(null,c__29609__auto__,i__41093);
cljs.core.chunk_append.call(null,b__41094,ezq.render.blog_post.call(null,entry,channels));

var G__41095 = (i__41093 + (1));
i__41093 = G__41095;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41094),ezq$render$blog_$_iter__41091.call(null,cljs.core.chunk_rest.call(null,s__41092__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41094),null);
}
} else {
var entry = cljs.core.first.call(null,s__41092__$2);
return cljs.core.cons.call(null,ezq.render.blog_post.call(null,entry,channels),ezq$render$blog_$_iter__41091.call(null,cljs.core.rest.call(null,s__41092__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29611__auto__.call(null,new cljs.core.Keyword(null,"blog-entries","blog-entries",-1298904592).cljs$core$IFn$_invoke$arity$1(data));
});
ezq.render.reset_button = /**
 * 
 */
ezq.render._ = quiescent.core.component.call(null,(function (channels){
return React.DOM.button(({"onClick": cljs.core.partial.call(null,ezq.channeler.reset_button,channels), "className": "btn btn-danger"}),"Reset State");
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"_"], null));
ezq.render.game_msg = /**
 * 
 */
ezq.render._ = quiescent.core.component.call(null,(function (data,channels){
var attrs41096 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Game: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ezq.render.turn_status.call(null,data))].join('');
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs41096))?sablono.interpreter.attributes.call(null,attrs41096):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs41096))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs41096)], null))));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"_"], null));
ezq.render.new_game_btn = /**
 * 
 */
ezq.render._ = quiescent.core.component.call(null,(function (data,channels){
return React.DOM.button(({"onClick": ((((2) >= new cljs.core.Keyword(null,"wins","wins",1850756412).cljs$core$IFn$_invoke$arity$1(data)))?(function (){
var c__31293__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31293__auto__){
return (function (){
var f__31294__auto__ = (function (){var switch__31270__auto__ = ((function (c__31293__auto__){
return (function (state_41101){
var state_val_41102 = (state_41101[(1)]);
if((state_val_41102 === (1))){
var inst_41097 = new cljs.core.Keyword(null,"new-game","new-game",167241648).cljs$core$IFn$_invoke$arity$1(channels);
var state_41101__$1 = state_41101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41101__$1,(2),inst_41097,true);
} else {
if((state_val_41102 === (2))){
var inst_41099 = (state_41101[(2)]);
var state_41101__$1 = state_41101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41101__$1,inst_41099);
} else {
return null;
}
}
});})(c__31293__auto__))
;
return ((function (switch__31270__auto__,c__31293__auto__){
return (function() {
var ezq$render$state_machine__31271__auto__ = null;
var ezq$render$state_machine__31271__auto____0 = (function (){
var statearr_41106 = [null,null,null,null,null,null,null];
(statearr_41106[(0)] = ezq$render$state_machine__31271__auto__);

(statearr_41106[(1)] = (1));

return statearr_41106;
});
var ezq$render$state_machine__31271__auto____1 = (function (state_41101){
while(true){
var ret_value__31272__auto__ = (function (){try{while(true){
var result__31273__auto__ = switch__31270__auto__.call(null,state_41101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31273__auto__;
}
break;
}
}catch (e41107){if((e41107 instanceof Object)){
var ex__31274__auto__ = e41107;
var statearr_41108_41125 = state_41101;
(statearr_41108_41125[(5)] = ex__31274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41126 = state_41101;
state_41101 = G__41126;
continue;
} else {
return ret_value__31272__auto__;
}
break;
}
});
ezq$render$state_machine__31271__auto__ = function(state_41101){
switch(arguments.length){
case 0:
return ezq$render$state_machine__31271__auto____0.call(this);
case 1:
return ezq$render$state_machine__31271__auto____1.call(this,state_41101);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$render$state_machine__31271__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$render$state_machine__31271__auto____0;
ezq$render$state_machine__31271__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$render$state_machine__31271__auto____1;
return ezq$render$state_machine__31271__auto__;
})()
;})(switch__31270__auto__,c__31293__auto__))
})();
var state__31295__auto__ = (function (){var statearr_41109 = f__31294__auto__.call(null);
(statearr_41109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31293__auto__);

return statearr_41109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31295__auto__);
});})(c__31293__auto__))
);

return c__31293__auto__;
}):(function (){
var c__31293__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31293__auto__){
return (function (){
var f__31294__auto__ = (function (){var switch__31270__auto__ = ((function (c__31293__auto__){
return (function (state_41115){
var state_val_41116 = (state_41115[(1)]);
if((state_val_41116 === (1))){
var inst_41110 = new cljs.core.Keyword(null,"restart","restart",-1779883612).cljs$core$IFn$_invoke$arity$1(channels);
var state_41115__$1 = state_41115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41115__$1,(2),inst_41110,true);
} else {
if((state_val_41116 === (2))){
var inst_41112 = (state_41115[(2)]);
var inst_41113 = window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
var state_41115__$1 = (function (){var statearr_41117 = state_41115;
(statearr_41117[(7)] = inst_41112);

return statearr_41117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41115__$1,inst_41113);
} else {
return null;
}
}
});})(c__31293__auto__))
;
return ((function (switch__31270__auto__,c__31293__auto__){
return (function() {
var ezq$render$state_machine__31271__auto__ = null;
var ezq$render$state_machine__31271__auto____0 = (function (){
var statearr_41121 = [null,null,null,null,null,null,null,null];
(statearr_41121[(0)] = ezq$render$state_machine__31271__auto__);

(statearr_41121[(1)] = (1));

return statearr_41121;
});
var ezq$render$state_machine__31271__auto____1 = (function (state_41115){
while(true){
var ret_value__31272__auto__ = (function (){try{while(true){
var result__31273__auto__ = switch__31270__auto__.call(null,state_41115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31273__auto__;
}
break;
}
}catch (e41122){if((e41122 instanceof Object)){
var ex__31274__auto__ = e41122;
var statearr_41123_41127 = state_41115;
(statearr_41123_41127[(5)] = ex__31274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41128 = state_41115;
state_41115 = G__41128;
continue;
} else {
return ret_value__31272__auto__;
}
break;
}
});
ezq$render$state_machine__31271__auto__ = function(state_41115){
switch(arguments.length){
case 0:
return ezq$render$state_machine__31271__auto____0.call(this);
case 1:
return ezq$render$state_machine__31271__auto____1.call(this,state_41115);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$render$state_machine__31271__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$render$state_machine__31271__auto____0;
ezq$render$state_machine__31271__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$render$state_machine__31271__auto____1;
return ezq$render$state_machine__31271__auto__;
})()
;})(switch__31270__auto__,c__31293__auto__))
})();
var state__31295__auto__ = (function (){var statearr_41124 = f__31294__auto__.call(null);
(statearr_41124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31293__auto__);

return statearr_41124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31295__auto__);
});})(c__31293__auto__))
);

return c__31293__auto__;
})), "className": "btn btn-success"}),((((2) >= new cljs.core.Keyword(null,"wins","wins",1850756412).cljs$core$IFn$_invoke$arity$1(data)))?"New Game":"You're on a roll!"));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"_"], null));
ezq.render.wins = /**
 * 
 */
ezq.render._ = quiescent.core.component.call(null,(function (data){
return ezq.css.bold.call(null,"Games won: ",new cljs.core.Keyword(null,"wins","wins",1850756412).cljs$core$IFn$_invoke$arity$1(data));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"_"], null));
ezq.render.ai_btn = /**
 * 
 */
ezq.render._ = quiescent.core.component.call(null,(function (data,channels){
return React.DOM.button(({"onClick": (function (){
var c__31293__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__31293__auto__){
return (function (){
var f__31294__auto__ = (function (){var switch__31270__auto__ = ((function (c__31293__auto__){
return (function (state_41133){
var state_val_41134 = (state_41133[(1)]);
if((state_val_41134 === (1))){
var inst_41129 = new cljs.core.Keyword(null,"ai","ai",760454697).cljs$core$IFn$_invoke$arity$1(channels);
var state_41133__$1 = state_41133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41133__$1,(2),inst_41129,true);
} else {
if((state_val_41134 === (2))){
var inst_41131 = (state_41133[(2)]);
var state_41133__$1 = state_41133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41133__$1,inst_41131);
} else {
return null;
}
}
});})(c__31293__auto__))
;
return ((function (switch__31270__auto__,c__31293__auto__){
return (function() {
var ezq$render$state_machine__31271__auto__ = null;
var ezq$render$state_machine__31271__auto____0 = (function (){
var statearr_41138 = [null,null,null,null,null,null,null];
(statearr_41138[(0)] = ezq$render$state_machine__31271__auto__);

(statearr_41138[(1)] = (1));

return statearr_41138;
});
var ezq$render$state_machine__31271__auto____1 = (function (state_41133){
while(true){
var ret_value__31272__auto__ = (function (){try{while(true){
var result__31273__auto__ = switch__31270__auto__.call(null,state_41133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__31273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31273__auto__;
}
break;
}
}catch (e41139){if((e41139 instanceof Object)){
var ex__31274__auto__ = e41139;
var statearr_41140_41142 = state_41133;
(statearr_41140_41142[(5)] = ex__31274__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__31272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41143 = state_41133;
state_41133 = G__41143;
continue;
} else {
return ret_value__31272__auto__;
}
break;
}
});
ezq$render$state_machine__31271__auto__ = function(state_41133){
switch(arguments.length){
case 0:
return ezq$render$state_machine__31271__auto____0.call(this);
case 1:
return ezq$render$state_machine__31271__auto____1.call(this,state_41133);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
ezq$render$state_machine__31271__auto__.cljs$core$IFn$_invoke$arity$0 = ezq$render$state_machine__31271__auto____0;
ezq$render$state_machine__31271__auto__.cljs$core$IFn$_invoke$arity$1 = ezq$render$state_machine__31271__auto____1;
return ezq$render$state_machine__31271__auto__;
})()
;})(switch__31270__auto__,c__31293__auto__))
})();
var state__31295__auto__ = (function (){var statearr_41141 = f__31294__auto__.call(null);
(statearr_41141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__31293__auto__);

return statearr_41141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__31295__auto__);
});})(c__31293__auto__))
);

return c__31293__auto__;
}), "className": (cljs.core.truth_(new cljs.core.Keyword(null,"ai","ai",760454697).cljs$core$IFn$_invoke$arity$1(data))?"btn btn-primary":"btn btn-danger")}),(cljs.core.truth_(new cljs.core.Keyword(null,"ai","ai",760454697).cljs$core$IFn$_invoke$arity$1(data))?"Disable AI":"Engage AI"));
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"_"], null));
ezq.render.app = /**
 * 
 */
ezq.render._ = quiescent.core.component.call(null,(function (data,channels){
var ticker_btn = ezq.render.ticker_button.call(null,data,channels);
var ticker = ezq.render.ticker.call(null,data);
var db = ezq.render.db.call(null,data);
var board = ezq.render.board.call(null,data,channels,(3),(3));
var reset_button = ezq.render.reset_button.call(null,channels);
var show_state = ezq.render.show_state.call(null,data,channels);
var game_msg = ezq.render.game_msg.call(null,data,channels);
var new_game_btn = ezq.render.new_game_btn.call(null,data,channels);
var ai_btn = ezq.render.ai_btn.call(null,data,channels);
var top_panel = ezq.css.row.call(null,ezq.css.col_lg.call(null,(12),ezq.render.panel_id.call(null,"top-panel").call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Timer (click me!)"], null),ticker,ticker_btn)));
var mid_panel = ezq.css.row.call(null,ezq.css.col_lg.call(null,(12),ezq.render.panel_id.call(null,"mid-panel").call(null,ezq.css.row.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),game_msg,ezq.render.wins.call(null,data)], null)),board,ezq.css.row.call(null,ezq.css.col_sm.call(null,(2),new_game_btn),ezq.css.col_sm.call(null,(3),ai_btn)))));
var bottom_panel = ezq.css.row.call(null,ezq.css.col_lg.call(null,(12),ezq.render.panel_id.call(null,"bottom-panel").call(null,React.DOM.h3(null,"App State (click me!)"),db,reset_button)));
var blog_panel = ezq.css.row.call(null,ezq.css.col_lg.call(null,(12),ezq.render.panel_id.call(null,"blog-panel").call(null,React.DOM.h3(null,"Blog (click me!)"),ezq.render.blog.call(null,data,channels))));
var left_col = ezq.css.col_lg.call(null,(6),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),top_panel,mid_panel,ezq.css.col_md.call(null,(1),React.DOM.button(({"className": "btn btn-danger"}),React.DOM.span(({"onClick": ((function (ticker_btn,ticker,db,board,reset_button,show_state,game_msg,new_game_btn,ai_btn,top_panel,mid_panel,bottom_panel,blog_panel){
return (function (){
return ezq.channeler.blog_post.call(null,channels);
});})(ticker_btn,ticker,db,board,reset_button,show_state,game_msg,new_game_btn,ai_btn,top_panel,mid_panel,bottom_panel,blog_panel))
, "className": "glyphicon glyphicon-plus"})))),ezq.css.col_md.call(null,(11),blog_panel)], null));
var right_col = ezq.css.col_lg.call(null,(6),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),bottom_panel], null));
var row = ezq.css.container.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),left_col,right_col], null));
var res = row;
return res;
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"_"], null));

//# sourceMappingURL=render.js.map