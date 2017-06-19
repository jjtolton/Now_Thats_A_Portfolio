// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__8829__auto__ = [];
var len__8822__auto___42104 = arguments.length;
var i__8823__auto___42105 = (0);
while(true){
if((i__8823__auto___42105 < len__8822__auto___42104)){
args__8829__auto__.push((arguments[i__8823__auto___42105]));

var G__42106 = (i__8823__auto___42105 + (1));
i__8823__auto___42105 = G__42106;
continue;
} else {
}
break;
}

var argseq__8830__auto__ = ((((2) < args__8829__auto__.length))?(new cljs.core.IndexedSeq(args__8829__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8830__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name(t));
var seq__42096_42107 = cljs.core.seq(cljs.core.keys(attrs));
var chunk__42097_42108 = null;
var count__42098_42109 = (0);
var i__42099_42110 = (0);
while(true){
if((i__42099_42110 < count__42098_42109)){
var k_42111 = chunk__42097_42108.cljs$core$IIndexed$_nth$arity$2(null,i__42099_42110);
e.setAttribute(cljs.core.name(k_42111),cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,k_42111));

var G__42112 = seq__42096_42107;
var G__42113 = chunk__42097_42108;
var G__42114 = count__42098_42109;
var G__42115 = (i__42099_42110 + (1));
seq__42096_42107 = G__42112;
chunk__42097_42108 = G__42113;
count__42098_42109 = G__42114;
i__42099_42110 = G__42115;
continue;
} else {
var temp__6738__auto___42116 = cljs.core.seq(seq__42096_42107);
if(temp__6738__auto___42116){
var seq__42096_42117__$1 = temp__6738__auto___42116;
if(cljs.core.chunked_seq_QMARK_(seq__42096_42117__$1)){
var c__8512__auto___42118 = cljs.core.chunk_first(seq__42096_42117__$1);
var G__42119 = cljs.core.chunk_rest(seq__42096_42117__$1);
var G__42120 = c__8512__auto___42118;
var G__42121 = cljs.core.count(c__8512__auto___42118);
var G__42122 = (0);
seq__42096_42107 = G__42119;
chunk__42097_42108 = G__42120;
count__42098_42109 = G__42121;
i__42099_42110 = G__42122;
continue;
} else {
var k_42123 = cljs.core.first(seq__42096_42117__$1);
e.setAttribute(cljs.core.name(k_42123),cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,k_42123));

var G__42124 = cljs.core.next(seq__42096_42117__$1);
var G__42125 = null;
var G__42126 = (0);
var G__42127 = (0);
seq__42096_42107 = G__42124;
chunk__42097_42108 = G__42125;
count__42098_42109 = G__42126;
i__42099_42110 = G__42127;
continue;
}
} else {
}
}
break;
}

var seq__42100_42128 = cljs.core.seq(children);
var chunk__42101_42129 = null;
var count__42102_42130 = (0);
var i__42103_42131 = (0);
while(true){
if((i__42103_42131 < count__42102_42130)){
var ch_42132 = chunk__42101_42129.cljs$core$IIndexed$_nth$arity$2(null,i__42103_42131);
e.appendChild(ch_42132);

var G__42133 = seq__42100_42128;
var G__42134 = chunk__42101_42129;
var G__42135 = count__42102_42130;
var G__42136 = (i__42103_42131 + (1));
seq__42100_42128 = G__42133;
chunk__42101_42129 = G__42134;
count__42102_42130 = G__42135;
i__42103_42131 = G__42136;
continue;
} else {
var temp__6738__auto___42137 = cljs.core.seq(seq__42100_42128);
if(temp__6738__auto___42137){
var seq__42100_42138__$1 = temp__6738__auto___42137;
if(cljs.core.chunked_seq_QMARK_(seq__42100_42138__$1)){
var c__8512__auto___42139 = cljs.core.chunk_first(seq__42100_42138__$1);
var G__42140 = cljs.core.chunk_rest(seq__42100_42138__$1);
var G__42141 = c__8512__auto___42139;
var G__42142 = cljs.core.count(c__8512__auto___42139);
var G__42143 = (0);
seq__42100_42128 = G__42140;
chunk__42101_42129 = G__42141;
count__42102_42130 = G__42142;
i__42103_42131 = G__42143;
continue;
} else {
var ch_42144 = cljs.core.first(seq__42100_42138__$1);
e.appendChild(ch_42144);

var G__42145 = cljs.core.next(seq__42100_42138__$1);
var G__42146 = null;
var G__42147 = (0);
var G__42148 = (0);
seq__42100_42128 = G__42145;
chunk__42101_42129 = G__42146;
count__42102_42130 = G__42147;
i__42103_42131 = G__42148;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq42093){
var G__42094 = cljs.core.first(seq42093);
var seq42093__$1 = cljs.core.next(seq42093);
var G__42095 = cljs.core.first(seq42093__$1);
var seq42093__$2 = cljs.core.next(seq42093__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__42094,G__42095,seq42093__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__8632__auto__ = (function (){var G__42149 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42149) : cljs.core.atom.call(null,G__42149));
})();
var prefer_table__8633__auto__ = (function (){var G__42150 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42150) : cljs.core.atom.call(null,G__42150));
})();
var method_cache__8634__auto__ = (function (){var G__42151 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42151) : cljs.core.atom.call(null,G__42151));
})();
var cached_hierarchy__8635__auto__ = (function (){var G__42152 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__42152) : cljs.core.atom.call(null,G__42152));
})();
var hierarchy__8636__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__8632__auto__,prefer_table__8633__auto__,method_cache__8634__auto__,cached_hierarchy__8635__auto__,hierarchy__8636__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__8632__auto__,prefer_table__8633__auto__,method_cache__8634__auto__,cached_hierarchy__8635__auto__,hierarchy__8636__auto__))
,cljs.core.cst$kw$default,hierarchy__8636__auto__,method_table__8632__auto__,prefer_table__8633__auto__,method_cache__8634__auto__,cached_hierarchy__8635__auto__));
})();
}
figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$figwheel_DASH_event,"file-selected",cljs.core.cst$kw$file_DASH_name,dataset.fileName,cljs.core.cst$kw$file_DASH_line,dataset.fileLine,cljs.core.cst$kw$file_DASH_column,dataset.fileColumn], null));
}));
figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IMultiFn$_add_method$arity$3(null,"close-heads-up",(function (dataset){
return (figwheel.client.heads_up.clear.cljs$core$IFn$_invoke$arity$0 ? figwheel.client.heads_up.clear.cljs$core$IFn$_invoke$arity$0() : figwheel.client.heads_up.clear.call(null));
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate((function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),figwheel.client.heads_up.ancestor_nodes(el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset(event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return (figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IFn$_invoke$arity$1 ? figwheel.client.heads_up.heads_up_event_dispatch.cljs$core$IFn$_invoke$arity$1(dataset) : figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset));
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not(document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_42153 = figwheel.client.heads_up.node(cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cont_id,cljs.core.cst$kw$style,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: left;")].join('')], null));
el_42153.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_42153.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_42153.appendChild(figwheel.client.heads_up.node(cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,content_id], null)));

document.body.appendChild(el_42153);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$container_DASH_el,document.getElementById(cont_id),cljs.core.cst$kw$content_DASH_area_DASH_el,document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__42154,st_map){
var map__42161 = p__42154;
var map__42161__$1 = ((((!((map__42161 == null)))?((((map__42161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42161.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42161):map__42161);
var container_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42161__$1,cljs.core.cst$kw$container_DASH_el);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__42161,map__42161__$1,container_el){
return (function (p__42163){
var vec__42164 = p__42163;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42164,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42164,(1),null);
return (container_el.style[cljs.core.name(k)] = v);
});})(map__42161,map__42161__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__42167,dom_str){
var map__42170 = p__42167;
var map__42170__$1 = ((((!((map__42170 == null)))?((((map__42170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42170.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42170):map__42170);
var c = map__42170__$1;
var content_area_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42170__$1,cljs.core.cst$kw$content_DASH_area_DASH_el);
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__42172){
var map__42175 = p__42172;
var map__42175__$1 = ((((!((map__42175 == null)))?((((map__42175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42175.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42175):map__42175);
var content_area_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42175__$1,cljs.core.cst$kw$content_DASH_area_DASH_el);
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__){
return (function (state_42218){
var state_val_42219 = (state_42218[(1)]);
if((state_val_42219 === (1))){
var inst_42203 = (state_42218[(7)]);
var inst_42203__$1 = figwheel.client.heads_up.ensure_container();
var inst_42204 = [cljs.core.cst$kw$paddingTop,cljs.core.cst$kw$paddingBottom,cljs.core.cst$kw$width,cljs.core.cst$kw$minHeight,cljs.core.cst$kw$opacity];
var inst_42205 = ["10px","10px","100%","68px","1.0"];
var inst_42206 = cljs.core.PersistentHashMap.fromArrays(inst_42204,inst_42205);
var inst_42207 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_42206,style], 0));
var inst_42208 = figwheel.client.heads_up.set_style_BANG_(inst_42203__$1,inst_42207);
var inst_42209 = figwheel.client.heads_up.set_content_BANG_(inst_42203__$1,msg);
var inst_42210 = cljs.core.async.timeout((300));
var state_42218__$1 = (function (){var statearr_42220 = state_42218;
(statearr_42220[(7)] = inst_42203__$1);

(statearr_42220[(8)] = inst_42209);

(statearr_42220[(9)] = inst_42208);

return statearr_42220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42218__$1,(2),inst_42210);
} else {
if((state_val_42219 === (2))){
var inst_42203 = (state_42218[(7)]);
var inst_42212 = (state_42218[(2)]);
var inst_42213 = [cljs.core.cst$kw$height];
var inst_42214 = ["auto"];
var inst_42215 = cljs.core.PersistentHashMap.fromArrays(inst_42213,inst_42214);
var inst_42216 = figwheel.client.heads_up.set_style_BANG_(inst_42203,inst_42215);
var state_42218__$1 = (function (){var statearr_42221 = state_42218;
(statearr_42221[(10)] = inst_42212);

return statearr_42221;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42218__$1,inst_42216);
} else {
return null;
}
}
});})(c__16369__auto__))
;
return ((function (switch__16243__auto__,c__16369__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__16244__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__16244__auto____0 = (function (){
var statearr_42225 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42225[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__16244__auto__);

(statearr_42225[(1)] = (1));

return statearr_42225;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__16244__auto____1 = (function (state_42218){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_42218);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e42226){if((e42226 instanceof Object)){
var ex__16247__auto__ = e42226;
var statearr_42227_42229 = state_42218;
(statearr_42227_42229[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42218);

return cljs.core.cst$kw$recur;
} else {
throw e42226;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__42230 = state_42218;
state_42218 = G__42230;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__16244__auto__ = function(state_42218){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__16244__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__16244__auto____1.call(this,state_42218);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__16244__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__16244__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__))
})();
var state__16371__auto__ = (function (){var statearr_42228 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_42228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_42228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__))
);

return c__16369__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args42231 = [];
var len__8822__auto___42234 = arguments.length;
var i__8823__auto___42235 = (0);
while(true){
if((i__8823__auto___42235 < len__8822__auto___42234)){
args42231.push((arguments[i__8823__auto___42235]));

var G__42236 = (i__8823__auto___42235 + (1));
i__8823__auto___42235 = G__42236;
continue;
} else {
}
break;
}

var G__42233 = args42231.length;
switch (G__42233) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42231.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2(s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__42238){
var map__42241 = p__42238;
var map__42241__$1 = ((((!((map__42241 == null)))?((((map__42241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42241.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42241):map__42241);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42241__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42241__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42241__$1,cljs.core.cst$kw$column);
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__7601__auto__ = file;
if(cljs.core.truth_(or__7601__auto__)){
return or__7601__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div(file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count(cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape(line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__42243){
var vec__42256 = p__42243;
var typ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42256,(0),null);
var line_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42256,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42256,(2),null);
var pred__42259 = cljs.core._EQ_;
var expr__42260 = typ;
if(cljs.core.truth_((function (){var G__42262 = cljs.core.cst$kw$code_DASH_line;
var G__42263 = expr__42260;
return (pred__42259.cljs$core$IFn$_invoke$arity$2 ? pred__42259.cljs$core$IFn$_invoke$arity$2(G__42262,G__42263) : pred__42259.call(null,G__42262,G__42263));
})())){
return figwheel.client.heads_up.inline_error_line("color: #999;",line_number,line);
} else {
if(cljs.core.truth_((function (){var G__42264 = cljs.core.cst$kw$error_DASH_in_DASH_code;
var G__42265 = expr__42260;
return (pred__42259.cljs$core$IFn$_invoke$arity$2 ? pred__42259.cljs$core$IFn$_invoke$arity$2(G__42264,G__42265) : pred__42259.call(null,G__42264,G__42265));
})())){
return figwheel.client.heads_up.inline_error_line("color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_((function (){var G__42266 = cljs.core.cst$kw$error_DASH_message;
var G__42267 = expr__42260;
return (pred__42259.cljs$core$IFn$_invoke$arity$2 ? pred__42259.cljs$core$IFn$_invoke$arity$2(G__42266,G__42267) : pred__42259.call(null,G__42266,G__42267));
})())){
return figwheel.client.heads_up.inline_error_line("color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line("color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,inline_error)))].join(''));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (max_line_number_length){
return (function (p1__42268_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__42268_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2(figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers(inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__42269_SHARP_){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.iterate(cljs.core.cst$kw$cause,p1__42269_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__42272){
var map__42275 = p__42272;
var map__42275__$1 = ((((!((map__42275 == null)))?((((map__42275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42275):map__42275);
var exception = map__42275__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42275__$1,cljs.core.cst$kw$message);
var failed_loading_clj_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42275__$1,cljs.core.cst$kw$failed_DASH_loading_DASH_clj_DASH_file);
var reader_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42275__$1,cljs.core.cst$kw$reader_DASH_exception);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42275__$1,cljs.core.cst$kw$file);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42275__$1,cljs.core.cst$kw$column);
var failed_compiling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42275__$1,cljs.core.cst$kw$failed_DASH_compiling);
var error_inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42275__$1,cljs.core.cst$kw$error_DASH_inline);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42275__$1,cljs.core.cst$kw$line);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42275__$1,cljs.core.cst$kw$class);
var analysis_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42275__$1,cljs.core.cst$kw$analysis_DASH_exception);
var display_ex_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42275__$1,cljs.core.cst$kw$display_DASH_ex_DASH_data);
var last_message = (cljs.core.truth_((function (){var and__7589__auto__ = file;
if(cljs.core.truth_(and__7589__auto__)){
return line;
} else {
return and__7589__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$head,(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),cljs.core.cst$kw$sub_DASH_head,file,cljs.core.cst$kw$messages,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (last_message,map__42275,map__42275__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__42270_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42270_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__42275,map__42275__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape(class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string(display_ex_data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join(''):null),(((cljs.core.count(error_inline) > (0)))?figwheel.client.heads_up.format_inline_error(error_inline):null)], null):cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (last_message,map__42275,map__42275__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__42271_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(p1__42271_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(p1__42271_SHARP_)))].join('');
});})(last_message,map__42275,map__42275__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception(cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape(last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),cljs.core.cst$kw$file,file,cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__42277){
var map__42280 = p__42277;
var map__42280__$1 = ((((!((map__42280 == null)))?((((map__42280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42280):map__42280);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42280__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42280__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42280__$1,cljs.core.cst$kw$column);
return figwheel.client.socket.send_BANG_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$figwheel_DASH_event,"file-selected",cljs.core.cst$kw$file_DASH_name,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),cljs.core.cst$kw$file_DASH_line,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),cljs.core.cst$kw$file_DASH_column,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__42285 = figwheel.client.heads_up.exception__GT_display_data(exception_data);
var map__42285__$1 = ((((!((map__42285 == null)))?((((map__42285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42285.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42285):map__42285);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42285__$1,cljs.core.cst$kw$head);
var sub_head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42285__$1,cljs.core.cst$kw$sub_DASH_head);
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42285__$1,cljs.core.cst$kw$messages);
var last_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42285__$1,cljs.core.cst$kw$last_DASH_message);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42285__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42285__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42285__$1,cljs.core.cst$kw$column);
var msg = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2(head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div(file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__42288){
var map__42291 = p__42288;
var map__42291__$1 = ((((!((map__42291 == null)))?((((map__42291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42291.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42291):map__42291);
var warning_data = map__42291__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42291__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42291__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42291__$1,cljs.core.cst$kw$column);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42291__$1,cljs.core.cst$kw$message);
var error_inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42291__$1,cljs.core.cst$kw$error_DASH_inline);
var last_message = (cljs.core.truth_((function (){var and__7589__auto__ = file;
if(cljs.core.truth_(and__7589__auto__)){
return line;
} else {
return and__7589__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$head,"Compile Warning",cljs.core.cst$kw$sub_DASH_head,file,cljs.core.cst$kw$messages,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (last_message,map__42291,map__42291__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__42287_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42287_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__42291,map__42291__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count(error_inline) > (0)))?figwheel.client.heads_up.format_inline_error(error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape(last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),cljs.core.cst$kw$file,file,cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1(header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__42295 = figwheel.client.heads_up.warning_data__GT_display_data(warning_data);
var map__42295__$1 = ((((!((map__42295 == null)))?((((map__42295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42295):map__42295);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42295__$1,cljs.core.cst$kw$head);
var sub_head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42295__$1,cljs.core.cst$kw$sub_DASH_head);
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42295__$1,cljs.core.cst$kw$messages);
var last_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42295__$1,cljs.core.cst$kw$last_DASH_message);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42295__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42295__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42295__$1,cljs.core.cst$kw$column);
var msg = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2(head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div(file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__42297){
var map__42301 = p__42297;
var map__42301__$1 = ((((!((map__42301 == null)))?((((map__42301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42301):map__42301);
var warning_data = map__42301__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42301__$1,cljs.core.cst$kw$message);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42301__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42301__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42301__$1,cljs.core.cst$kw$column);
var G__42303 = message;
var G__42303__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42303),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42303);
var G__42303__$2 = (cljs.core.truth_((function (){var and__7589__auto__ = line;
if(cljs.core.truth_(and__7589__auto__)){
return column;
} else {
return and__7589__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42303__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__42303__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42303__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__42303__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__42304){
var map__42314 = p__42304;
var map__42314__$1 = ((((!((map__42314 == null)))?((((map__42314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42314.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42314):map__42314);
var warning_data = map__42314__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42314__$1,cljs.core.cst$kw$message);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42314__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42314__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42314__$1,cljs.core.cst$kw$column);
if(cljs.core.truth_(message)){
var map__42316 = figwheel.client.heads_up.ensure_container();
var map__42316__$1 = ((((!((map__42316 == null)))?((((map__42316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42316):map__42316);
var content_area_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42316__$1,cljs.core.cst$kw$content_DASH_area_DASH_el);
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line(figwheel.client.heads_up.format_warning_message(warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__6738__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__6738__auto__)){
var last_child = temp__6738__auto__;
var temp__6736__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__6736__auto__)){
var message_count = temp__6736__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
var G__42318 = content_area_el;
var G__42319 = (function (){var G__42320 = "div";
var G__42321 = ({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"});
var G__42322 = "1 more warning that has not been displayed ...";
return goog.dom.createDom(G__42320,G__42321,G__42322);
})();
return goog.dom.append(G__42318,G__42319);
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__){
return (function (state_42369){
var state_val_42370 = (state_42369[(1)]);
if((state_val_42370 === (1))){
var inst_42352 = (state_42369[(7)]);
var inst_42352__$1 = figwheel.client.heads_up.ensure_container();
var inst_42353 = [cljs.core.cst$kw$opacity];
var inst_42354 = ["0.0"];
var inst_42355 = cljs.core.PersistentHashMap.fromArrays(inst_42353,inst_42354);
var inst_42356 = figwheel.client.heads_up.set_style_BANG_(inst_42352__$1,inst_42355);
var inst_42357 = cljs.core.async.timeout((300));
var state_42369__$1 = (function (){var statearr_42371 = state_42369;
(statearr_42371[(7)] = inst_42352__$1);

(statearr_42371[(8)] = inst_42356);

return statearr_42371;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42369__$1,(2),inst_42357);
} else {
if((state_val_42370 === (2))){
var inst_42352 = (state_42369[(7)]);
var inst_42359 = (state_42369[(2)]);
var inst_42360 = [cljs.core.cst$kw$width,cljs.core.cst$kw$height,cljs.core.cst$kw$minHeight,cljs.core.cst$kw$padding,cljs.core.cst$kw$borderRadius,cljs.core.cst$kw$backgroundColor];
var inst_42361 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_42362 = cljs.core.PersistentHashMap.fromArrays(inst_42360,inst_42361);
var inst_42363 = figwheel.client.heads_up.set_style_BANG_(inst_42352,inst_42362);
var inst_42364 = cljs.core.async.timeout((200));
var state_42369__$1 = (function (){var statearr_42372 = state_42369;
(statearr_42372[(9)] = inst_42359);

(statearr_42372[(10)] = inst_42363);

return statearr_42372;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42369__$1,(3),inst_42364);
} else {
if((state_val_42370 === (3))){
var inst_42352 = (state_42369[(7)]);
var inst_42366 = (state_42369[(2)]);
var inst_42367 = figwheel.client.heads_up.set_content_BANG_(inst_42352,"");
var state_42369__$1 = (function (){var statearr_42373 = state_42369;
(statearr_42373[(11)] = inst_42366);

return statearr_42373;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42369__$1,inst_42367);
} else {
return null;
}
}
}
});})(c__16369__auto__))
;
return ((function (switch__16243__auto__,c__16369__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__16244__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__16244__auto____0 = (function (){
var statearr_42377 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42377[(0)] = figwheel$client$heads_up$clear_$_state_machine__16244__auto__);

(statearr_42377[(1)] = (1));

return statearr_42377;
});
var figwheel$client$heads_up$clear_$_state_machine__16244__auto____1 = (function (state_42369){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_42369);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e42378){if((e42378 instanceof Object)){
var ex__16247__auto__ = e42378;
var statearr_42379_42381 = state_42369;
(statearr_42379_42381[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42369);

return cljs.core.cst$kw$recur;
} else {
throw e42378;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__42382 = state_42369;
state_42369 = G__42382;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__16244__auto__ = function(state_42369){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__16244__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__16244__auto____1.call(this,state_42369);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__16244__auto____0;
figwheel$client$heads_up$clear_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__16244__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__))
})();
var state__16371__auto__ = (function (){var statearr_42380 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_42380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_42380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__))
);

return c__16369__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$backgroundColor,"rgba(211,234,172,1.0)",cljs.core.cst$kw$width,"68px",cljs.core.cst$kw$height,"68px",cljs.core.cst$kw$paddingLeft,"0px",cljs.core.cst$kw$paddingRight,"0px",cljs.core.cst$kw$borderRadius,"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__16369__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16369__auto__){
return (function (){
var f__16370__auto__ = (function (){var switch__16243__auto__ = ((function (c__16369__auto__){
return (function (state_42414){
var state_val_42415 = (state_42414[(1)]);
if((state_val_42415 === (1))){
var inst_42404 = figwheel.client.heads_up.display_loaded_start();
var state_42414__$1 = state_42414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42414__$1,(2),inst_42404);
} else {
if((state_val_42415 === (2))){
var inst_42406 = (state_42414[(2)]);
var inst_42407 = cljs.core.async.timeout((400));
var state_42414__$1 = (function (){var statearr_42416 = state_42414;
(statearr_42416[(7)] = inst_42406);

return statearr_42416;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42414__$1,(3),inst_42407);
} else {
if((state_val_42415 === (3))){
var inst_42409 = (state_42414[(2)]);
var inst_42410 = figwheel.client.heads_up.clear();
var state_42414__$1 = (function (){var statearr_42417 = state_42414;
(statearr_42417[(8)] = inst_42409);

return statearr_42417;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42414__$1,(4),inst_42410);
} else {
if((state_val_42415 === (4))){
var inst_42412 = (state_42414[(2)]);
var state_42414__$1 = state_42414;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42414__$1,inst_42412);
} else {
return null;
}
}
}
}
});})(c__16369__auto__))
;
return ((function (switch__16243__auto__,c__16369__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__16244__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__16244__auto____0 = (function (){
var statearr_42421 = [null,null,null,null,null,null,null,null,null];
(statearr_42421[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__16244__auto__);

(statearr_42421[(1)] = (1));

return statearr_42421;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__16244__auto____1 = (function (state_42414){
while(true){
var ret_value__16245__auto__ = (function (){try{while(true){
var result__16246__auto__ = switch__16243__auto__(state_42414);
if(cljs.core.keyword_identical_QMARK_(result__16246__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16246__auto__;
}
break;
}
}catch (e42422){if((e42422 instanceof Object)){
var ex__16247__auto__ = e42422;
var statearr_42423_42425 = state_42414;
(statearr_42423_42425[(5)] = ex__16247__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42414);

return cljs.core.cst$kw$recur;
} else {
throw e42422;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16245__auto__,cljs.core.cst$kw$recur)){
var G__42426 = state_42414;
state_42414 = G__42426;
continue;
} else {
return ret_value__16245__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__16244__auto__ = function(state_42414){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__16244__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__16244__auto____1.call(this,state_42414);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__16244__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__16244__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__16244__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__16244__auto__;
})()
;})(switch__16243__auto__,c__16369__auto__))
})();
var state__16371__auto__ = (function (){var statearr_42424 = (f__16370__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16370__auto__.cljs$core$IFn$_invoke$arity$0() : f__16370__auto__.call(null));
(statearr_42424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16369__auto__);

return statearr_42424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16371__auto__);
});})(c__16369__auto__))
);

return c__16369__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__6738__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__6738__auto__)){
var el = temp__6738__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen();

var G__42449 = body;
var G__42450 = (function (){var G__42451 = "div";
var G__42452 = ({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')});
var G__42453 = (function (){var G__42454 = "div";
var G__42455 = ({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')});
var G__42456 = (function (){var G__42459 = "a";
var G__42460 = ({"onclick": ((function (G__42459,G__42454,G__42455,G__42451,G__42452,G__42449,body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen();
});})(G__42459,G__42454,G__42455,G__42451,G__42452,G__42449,body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"});
var G__42461 = "X";
return goog.dom.createDom(G__42459,G__42460,G__42461);
})();
var G__42457 = (function (){var G__42462 = "h2";
var G__42463 = ({"style": "color: #FFF5DB"});
var G__42464 = "Figwheel Says: Your code didn't compile.";
return goog.dom.createDom(G__42462,G__42463,G__42464);
})();
var G__42458 = (function (){var G__42465 = "div";
var G__42466 = ({"style": "font-size: 12px"});
var G__42467 = (function (){var G__42468 = "p";
var G__42469 = ({"style": "color: #D07D7D;"});
var G__42470 = "Keep trying. This page will auto-refresh when your code compiles successfully.";
return goog.dom.createDom(G__42468,G__42469,G__42470);
})();
return goog.dom.createDom(G__42465,G__42466,G__42467);
})();
return goog.dom.createDom(G__42454,G__42455,G__42456,G__42457,G__42458);
})();
return goog.dom.createDom(G__42451,G__42452,G__42453);
})();
return goog.dom.append(G__42449,G__42450);
});
