// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.dataset');
goog.require('goog.string');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__7491__auto__ = [];
var len__7484__auto___23905 = arguments.length;
var i__7485__auto___23906 = (0);
while(true){
if((i__7485__auto___23906 < len__7484__auto___23905)){
args__7491__auto__.push((arguments[i__7485__auto___23906]));

var G__23907 = (i__7485__auto___23906 + (1));
i__7485__auto___23906 = G__23907;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((2) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7492__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name(t));
var seq__23897_23908 = cljs.core.seq(cljs.core.keys(attrs));
var chunk__23898_23909 = null;
var count__23899_23910 = (0);
var i__23900_23911 = (0);
while(true){
if((i__23900_23911 < count__23899_23910)){
var k_23912 = chunk__23898_23909.cljs$core$IIndexed$_nth$arity$2(null,i__23900_23911);
e.setAttribute(cljs.core.name(k_23912),cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,k_23912));

var G__23913 = seq__23897_23908;
var G__23914 = chunk__23898_23909;
var G__23915 = count__23899_23910;
var G__23916 = (i__23900_23911 + (1));
seq__23897_23908 = G__23913;
chunk__23898_23909 = G__23914;
count__23899_23910 = G__23915;
i__23900_23911 = G__23916;
continue;
} else {
var temp__4657__auto___23917 = cljs.core.seq(seq__23897_23908);
if(temp__4657__auto___23917){
var seq__23897_23918__$1 = temp__4657__auto___23917;
if(cljs.core.chunked_seq_QMARK_(seq__23897_23918__$1)){
var c__7220__auto___23919 = cljs.core.chunk_first(seq__23897_23918__$1);
var G__23920 = cljs.core.chunk_rest(seq__23897_23918__$1);
var G__23921 = c__7220__auto___23919;
var G__23922 = cljs.core.count(c__7220__auto___23919);
var G__23923 = (0);
seq__23897_23908 = G__23920;
chunk__23898_23909 = G__23921;
count__23899_23910 = G__23922;
i__23900_23911 = G__23923;
continue;
} else {
var k_23924 = cljs.core.first(seq__23897_23918__$1);
e.setAttribute(cljs.core.name(k_23924),cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,k_23924));

var G__23925 = cljs.core.next(seq__23897_23918__$1);
var G__23926 = null;
var G__23927 = (0);
var G__23928 = (0);
seq__23897_23908 = G__23925;
chunk__23898_23909 = G__23926;
count__23899_23910 = G__23927;
i__23900_23911 = G__23928;
continue;
}
} else {
}
}
break;
}

var seq__23901_23929 = cljs.core.seq(children);
var chunk__23902_23930 = null;
var count__23903_23931 = (0);
var i__23904_23932 = (0);
while(true){
if((i__23904_23932 < count__23903_23931)){
var ch_23933 = chunk__23902_23930.cljs$core$IIndexed$_nth$arity$2(null,i__23904_23932);
e.appendChild(ch_23933);

var G__23934 = seq__23901_23929;
var G__23935 = chunk__23902_23930;
var G__23936 = count__23903_23931;
var G__23937 = (i__23904_23932 + (1));
seq__23901_23929 = G__23934;
chunk__23902_23930 = G__23935;
count__23903_23931 = G__23936;
i__23904_23932 = G__23937;
continue;
} else {
var temp__4657__auto___23938 = cljs.core.seq(seq__23901_23929);
if(temp__4657__auto___23938){
var seq__23901_23939__$1 = temp__4657__auto___23938;
if(cljs.core.chunked_seq_QMARK_(seq__23901_23939__$1)){
var c__7220__auto___23940 = cljs.core.chunk_first(seq__23901_23939__$1);
var G__23941 = cljs.core.chunk_rest(seq__23901_23939__$1);
var G__23942 = c__7220__auto___23940;
var G__23943 = cljs.core.count(c__7220__auto___23940);
var G__23944 = (0);
seq__23901_23929 = G__23941;
chunk__23902_23930 = G__23942;
count__23903_23931 = G__23943;
i__23904_23932 = G__23944;
continue;
} else {
var ch_23945 = cljs.core.first(seq__23901_23939__$1);
e.appendChild(ch_23945);

var G__23946 = cljs.core.next(seq__23901_23939__$1);
var G__23947 = null;
var G__23948 = (0);
var G__23949 = (0);
seq__23901_23929 = G__23946;
chunk__23902_23930 = G__23947;
count__23903_23931 = G__23948;
i__23904_23932 = G__23949;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq23894){
var G__23895 = cljs.core.first(seq23894);
var seq23894__$1 = cljs.core.next(seq23894);
var G__23896 = cljs.core.first(seq23894__$1);
var seq23894__$2 = cljs.core.next(seq23894__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__23895,G__23896,seq23894__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__7334__auto__ = (function (){var G__23950 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23950) : cljs.core.atom.call(null,G__23950));
})();
var prefer_table__7335__auto__ = (function (){var G__23951 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23951) : cljs.core.atom.call(null,G__23951));
})();
var method_cache__7336__auto__ = (function (){var G__23952 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23952) : cljs.core.atom.call(null,G__23952));
})();
var cached_hierarchy__7337__auto__ = (function (){var G__23953 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23953) : cljs.core.atom.call(null,G__23953));
})();
var hierarchy__7338__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__,hierarchy__7338__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__,hierarchy__7338__auto__))
,cljs.core.cst$kw$default,hierarchy__7338__auto__,method_table__7334__auto__,prefer_table__7335__auto__,method_cache__7336__auto__,cached_hierarchy__7337__auto__));
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
if(cljs.core.not(document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_23954 = figwheel.client.heads_up.node(cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cont_id,cljs.core.cst$kw$style,[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;"),cljs.core.str("text-align: left;")].join('')], null));
el_23954.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_23954.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_23954.appendChild(figwheel.client.heads_up.node(cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,content_id], null)));

document.body.appendChild(el_23954);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$container_DASH_el,document.getElementById(cont_id),cljs.core.cst$kw$content_DASH_area_DASH_el,document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__23955,st_map){
var map__23962 = p__23955;
var map__23962__$1 = ((((!((map__23962 == null)))?((((map__23962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23962):map__23962);
var container_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23962__$1,cljs.core.cst$kw$container_DASH_el);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__23962,map__23962__$1,container_el){
return (function (p__23964){
var vec__23965 = p__23964;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23965,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23965,(1),null);
return (container_el.style[cljs.core.name(k)] = v);
});})(map__23962,map__23962__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__23968,dom_str){
var map__23971 = p__23968;
var map__23971__$1 = ((((!((map__23971 == null)))?((((map__23971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23971):map__23971);
var c = map__23971__$1;
var content_area_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23971__$1,cljs.core.cst$kw$content_DASH_area_DASH_el);
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__23973){
var map__23976 = p__23973;
var map__23976__$1 = ((((!((map__23976 == null)))?((((map__23976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23976):map__23976);
var content_area_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23976__$1,cljs.core.cst$kw$content_DASH_area_DASH_el);
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__14088__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto__){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto__){
return (function (state_24019){
var state_val_24020 = (state_24019[(1)]);
if((state_val_24020 === (1))){
var inst_24004 = (state_24019[(7)]);
var inst_24004__$1 = figwheel.client.heads_up.ensure_container();
var inst_24005 = [cljs.core.cst$kw$paddingTop,cljs.core.cst$kw$paddingBottom,cljs.core.cst$kw$width,cljs.core.cst$kw$minHeight,cljs.core.cst$kw$opacity];
var inst_24006 = ["10px","10px","100%","68px","1.0"];
var inst_24007 = cljs.core.PersistentHashMap.fromArrays(inst_24005,inst_24006);
var inst_24008 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_24007,style], 0));
var inst_24009 = figwheel.client.heads_up.set_style_BANG_(inst_24004__$1,inst_24008);
var inst_24010 = figwheel.client.heads_up.set_content_BANG_(inst_24004__$1,msg);
var inst_24011 = cljs.core.async.timeout((300));
var state_24019__$1 = (function (){var statearr_24021 = state_24019;
(statearr_24021[(8)] = inst_24010);

(statearr_24021[(9)] = inst_24009);

(statearr_24021[(7)] = inst_24004__$1);

return statearr_24021;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24019__$1,(2),inst_24011);
} else {
if((state_val_24020 === (2))){
var inst_24004 = (state_24019[(7)]);
var inst_24013 = (state_24019[(2)]);
var inst_24014 = [cljs.core.cst$kw$height];
var inst_24015 = ["auto"];
var inst_24016 = cljs.core.PersistentHashMap.fromArrays(inst_24014,inst_24015);
var inst_24017 = figwheel.client.heads_up.set_style_BANG_(inst_24004,inst_24016);
var state_24019__$1 = (function (){var statearr_24022 = state_24019;
(statearr_24022[(10)] = inst_24013);

return statearr_24022;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24019__$1,inst_24017);
} else {
return null;
}
}
});})(c__14088__auto__))
;
return ((function (switch__13964__auto__,c__14088__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__13965__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__13965__auto____0 = (function (){
var statearr_24026 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24026[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__13965__auto__);

(statearr_24026[(1)] = (1));

return statearr_24026;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__13965__auto____1 = (function (state_24019){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_24019);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e24027){if((e24027 instanceof Object)){
var ex__13968__auto__ = e24027;
var statearr_24028_24030 = state_24019;
(statearr_24028_24030[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24019);

return cljs.core.cst$kw$recur;
} else {
throw e24027;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__24031 = state_24019;
state_24019 = G__24031;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__13965__auto__ = function(state_24019){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__13965__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__13965__auto____1.call(this,state_24019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__13965__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__13965__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto__))
})();
var state__14090__auto__ = (function (){var statearr_24029 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_24029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto__);

return statearr_24029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto__))
);

return c__14088__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args24032 = [];
var len__7484__auto___24035 = arguments.length;
var i__7485__auto___24036 = (0);
while(true){
if((i__7485__auto___24036 < len__7484__auto___24035)){
args24032.push((arguments[i__7485__auto___24036]));

var G__24037 = (i__7485__auto___24036 + (1));
i__7485__auto___24036 = G__24037;
continue;
} else {
}
break;
}

var G__24034 = args24032.length;
switch (G__24034) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24032.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2(s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str(" <span style=\""),cljs.core.str("display: inline-block;"),cljs.core.str("font-size: 13px;"),cljs.core.str("\">"),cljs.core.str(sub_head),cljs.core.str("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\" data-file-column=\""),cljs.core.str(column_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__24039){
var map__24042 = p__24039;
var map__24042__$1 = ((((!((map__24042 == null)))?((((map__24042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24042):map__24042);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24042__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24042__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24042__$1,cljs.core.cst$kw$column);
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__6409__auto__ = file;
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div(file,line,column,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count(cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.str,"").call(null,line_number));
return [cljs.core.str((((len < n))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - len)," ")):"")),cljs.core.str(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str("<span style='"),cljs.core.str(style),cljs.core.str("'>"),cljs.core.str("<span style='color: #757575;'>"),cljs.core.str(line_number),cljs.core.str("  </span>"),cljs.core.str(figwheel.client.heads_up.escape(line)),cljs.core.str("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__24044){
var vec__24057 = p__24044;
var typ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24057,(0),null);
var line_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24057,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24057,(2),null);
var pred__24060 = cljs.core._EQ_;
var expr__24061 = typ;
if(cljs.core.truth_((function (){var G__24063 = cljs.core.cst$kw$code_DASH_line;
var G__24064 = expr__24061;
return (pred__24060.cljs$core$IFn$_invoke$arity$2 ? pred__24060.cljs$core$IFn$_invoke$arity$2(G__24063,G__24064) : pred__24060.call(null,G__24063,G__24064));
})())){
return figwheel.client.heads_up.inline_error_line("color: #999;",line_number,line);
} else {
if(cljs.core.truth_((function (){var G__24065 = cljs.core.cst$kw$error_DASH_in_DASH_code;
var G__24066 = expr__24061;
return (pred__24060.cljs$core$IFn$_invoke$arity$2 ? pred__24060.cljs$core$IFn$_invoke$arity$2(G__24065,G__24066) : pred__24060.call(null,G__24065,G__24066));
})())){
return figwheel.client.heads_up.inline_error_line("color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_((function (){var G__24067 = cljs.core.cst$kw$error_DASH_message;
var G__24068 = expr__24061;
return (pred__24060.cljs$core$IFn$_invoke$arity$2 ? pred__24060.cljs$core$IFn$_invoke$arity$2(G__24067,G__24068) : pred__24060.call(null,G__24067,G__24068));
})())){
return figwheel.client.heads_up.inline_error_line("color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line("color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count([cljs.core.str(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,inline_error)))].join(''));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (max_line_number_length){
return (function (p1__24069_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__24069_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.cljs$core$IFn$_invoke$arity$2(figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers(inline_error));
return [cljs.core.str("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines)),cljs.core.str("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__24070_SHARP_){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.iterate(cljs.core.cst$kw$cause,p1__24070_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__24073){
var map__24076 = p__24073;
var map__24076__$1 = ((((!((map__24076 == null)))?((((map__24076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24076):map__24076);
var exception = map__24076__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24076__$1,cljs.core.cst$kw$message);
var failed_loading_clj_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24076__$1,cljs.core.cst$kw$failed_DASH_loading_DASH_clj_DASH_file);
var reader_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24076__$1,cljs.core.cst$kw$reader_DASH_exception);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24076__$1,cljs.core.cst$kw$file);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24076__$1,cljs.core.cst$kw$column);
var failed_compiling = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24076__$1,cljs.core.cst$kw$failed_DASH_compiling);
var error_inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24076__$1,cljs.core.cst$kw$error_DASH_inline);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24076__$1,cljs.core.cst$kw$line);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24076__$1,cljs.core.cst$kw$class);
var analysis_exception = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24076__$1,cljs.core.cst$kw$analysis_DASH_exception);
var display_ex_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24076__$1,cljs.core.cst$kw$display_DASH_ex_DASH_data);
var last_message = (cljs.core.truth_((function (){var and__6397__auto__ = file;
if(cljs.core.truth_(and__6397__auto__)){
return line;
} else {
return and__6397__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$head,(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),cljs.core.cst$kw$sub_DASH_head,file,cljs.core.cst$kw$messages,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (last_message,map__24076,map__24076__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__24071_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__24071_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__24076,map__24076__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape(class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape(message)),cljs.core.str("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str("<pre>"),cljs.core.str(figwheel.client.utils.pprint_to_string(display_ex_data)),cljs.core.str("</pre>")].join(''):null),(((cljs.core.count(error_inline) > (0)))?figwheel.client.heads_up.format_inline_error(error_inline):null)], null):cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (last_message,map__24076,map__24076__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__24072_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape(cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(p1__24072_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape(cljs.core.cst$kw$message.cljs$core$IFn$_invoke$arity$1(p1__24072_SHARP_)))].join('');
});})(last_message,map__24076,map__24076__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception(cljs.core.cst$kw$exception_DASH_data.cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape(last_message)),cljs.core.str("</div>")].join('')], null):null)),cljs.core.cst$kw$file,file,cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__24078){
var map__24081 = p__24078;
var map__24081__$1 = ((((!((map__24081 == null)))?((((map__24081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24081):map__24081);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24081__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24081__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24081__$1,cljs.core.cst$kw$column);
return figwheel.client.socket.send_BANG_(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$figwheel_DASH_event,"file-selected",cljs.core.cst$kw$file_DASH_name,[cljs.core.str(file)].join(''),cljs.core.cst$kw$file_DASH_line,[cljs.core.str(line)].join(''),cljs.core.cst$kw$file_DASH_column,[cljs.core.str(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__24086 = figwheel.client.heads_up.exception__GT_display_data(exception_data);
var map__24086__$1 = ((((!((map__24086 == null)))?((((map__24086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24086):map__24086);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24086__$1,cljs.core.cst$kw$head);
var sub_head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24086__$1,cljs.core.cst$kw$sub_DASH_head);
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24086__$1,cljs.core.cst$kw$messages);
var last_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24086__$1,cljs.core.cst$kw$last_DASH_message);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24086__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24086__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24086__$1,cljs.core.cst$kw$column);
var msg = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link()),cljs.core.str(figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2(head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div(file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__24089){
var map__24092 = p__24089;
var map__24092__$1 = ((((!((map__24092 == null)))?((((map__24092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24092):map__24092);
var warning_data = map__24092__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24092__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24092__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24092__$1,cljs.core.cst$kw$column);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24092__$1,cljs.core.cst$kw$message);
var error_inline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24092__$1,cljs.core.cst$kw$error_DASH_inline);
var last_message = (cljs.core.truth_((function (){var and__6397__auto__ = file;
if(cljs.core.truth_(and__6397__auto__)){
return line;
} else {
return and__6397__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$head,"Compile Warning",cljs.core.cst$kw$sub_DASH_head,file,cljs.core.cst$kw$messages,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (last_message,map__24092,map__24092__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__24088_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__24088_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__24092,map__24092__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape(message)),cljs.core.str("</span>")].join(''):null),(((cljs.core.count(error_inline) > (0)))?figwheel.client.heads_up.format_inline_error(error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str(figwheel.client.heads_up.escape(last_message)),cljs.core.str("</div>")].join('')], null):null)),cljs.core.cst$kw$file,file,cljs.core.cst$kw$line,line,cljs.core.cst$kw$column,column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link()),cljs.core.str(figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1(header)),cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__24096 = figwheel.client.heads_up.warning_data__GT_display_data(warning_data);
var map__24096__$1 = ((((!((map__24096 == null)))?((((map__24096.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24096.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24096):map__24096);
var head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24096__$1,cljs.core.cst$kw$head);
var sub_head = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24096__$1,cljs.core.cst$kw$sub_DASH_head);
var messages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24096__$1,cljs.core.cst$kw$messages);
var last_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24096__$1,cljs.core.cst$kw$last_DASH_message);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24096__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24096__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24096__$1,cljs.core.cst$kw$column);
var msg = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$backgroundColor,"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link()),cljs.core.str(figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2(head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div(file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__24098){
var map__24102 = p__24098;
var map__24102__$1 = ((((!((map__24102 == null)))?((((map__24102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24102):map__24102);
var warning_data = map__24102__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24102__$1,cljs.core.cst$kw$message);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24102__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24102__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24102__$1,cljs.core.cst$kw$column);
var G__24104 = message;
var G__24104__$1 = (cljs.core.truth_(line)?[cljs.core.str(G__24104),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__24104);
var G__24104__$2 = (cljs.core.truth_((function (){var and__6397__auto__ = line;
if(cljs.core.truth_(and__6397__auto__)){
return column;
} else {
return and__6397__auto__;
}
})())?[cljs.core.str(G__24104__$1),cljs.core.str(", column "),cljs.core.str(column)].join(''):G__24104__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str(G__24104__$2),cljs.core.str(" in file "),cljs.core.str(file)].join('');
} else {
return G__24104__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__24105){
var map__24115 = p__24105;
var map__24115__$1 = ((((!((map__24115 == null)))?((((map__24115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24115):map__24115);
var warning_data = map__24115__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24115__$1,cljs.core.cst$kw$message);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24115__$1,cljs.core.cst$kw$file);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24115__$1,cljs.core.cst$kw$line);
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24115__$1,cljs.core.cst$kw$column);
if(cljs.core.truth_(message)){
var map__24117 = figwheel.client.heads_up.ensure_container();
var map__24117__$1 = ((((!((map__24117 == null)))?((((map__24117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24117):map__24117);
var content_area_el = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24117__$1,cljs.core.cst$kw$content_DASH_area_DASH_el);
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line(figwheel.client.heads_up.format_warning_message(warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str(message_count__$1),cljs.core.str(" more warnings have not been displayed ...")].join('');
} else {
var G__24119 = content_area_el;
var G__24120 = (function (){var G__24121 = "div";
var G__24122 = ({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"});
var G__24123 = "1 more warning that has not been displayed ...";
return goog.dom.createDom(G__24121,G__24122,G__24123);
})();
return goog.dom.append(G__24119,G__24120);
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
var c__14088__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto__){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto__){
return (function (state_24170){
var state_val_24171 = (state_24170[(1)]);
if((state_val_24171 === (1))){
var inst_24153 = (state_24170[(7)]);
var inst_24153__$1 = figwheel.client.heads_up.ensure_container();
var inst_24154 = [cljs.core.cst$kw$opacity];
var inst_24155 = ["0.0"];
var inst_24156 = cljs.core.PersistentHashMap.fromArrays(inst_24154,inst_24155);
var inst_24157 = figwheel.client.heads_up.set_style_BANG_(inst_24153__$1,inst_24156);
var inst_24158 = cljs.core.async.timeout((300));
var state_24170__$1 = (function (){var statearr_24172 = state_24170;
(statearr_24172[(7)] = inst_24153__$1);

(statearr_24172[(8)] = inst_24157);

return statearr_24172;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24170__$1,(2),inst_24158);
} else {
if((state_val_24171 === (2))){
var inst_24153 = (state_24170[(7)]);
var inst_24160 = (state_24170[(2)]);
var inst_24161 = [cljs.core.cst$kw$width,cljs.core.cst$kw$height,cljs.core.cst$kw$minHeight,cljs.core.cst$kw$padding,cljs.core.cst$kw$borderRadius,cljs.core.cst$kw$backgroundColor];
var inst_24162 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_24163 = cljs.core.PersistentHashMap.fromArrays(inst_24161,inst_24162);
var inst_24164 = figwheel.client.heads_up.set_style_BANG_(inst_24153,inst_24163);
var inst_24165 = cljs.core.async.timeout((200));
var state_24170__$1 = (function (){var statearr_24173 = state_24170;
(statearr_24173[(9)] = inst_24164);

(statearr_24173[(10)] = inst_24160);

return statearr_24173;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24170__$1,(3),inst_24165);
} else {
if((state_val_24171 === (3))){
var inst_24153 = (state_24170[(7)]);
var inst_24167 = (state_24170[(2)]);
var inst_24168 = figwheel.client.heads_up.set_content_BANG_(inst_24153,"");
var state_24170__$1 = (function (){var statearr_24174 = state_24170;
(statearr_24174[(11)] = inst_24167);

return statearr_24174;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24170__$1,inst_24168);
} else {
return null;
}
}
}
});})(c__14088__auto__))
;
return ((function (switch__13964__auto__,c__14088__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__13965__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__13965__auto____0 = (function (){
var statearr_24178 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24178[(0)] = figwheel$client$heads_up$clear_$_state_machine__13965__auto__);

(statearr_24178[(1)] = (1));

return statearr_24178;
});
var figwheel$client$heads_up$clear_$_state_machine__13965__auto____1 = (function (state_24170){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_24170);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e24179){if((e24179 instanceof Object)){
var ex__13968__auto__ = e24179;
var statearr_24180_24182 = state_24170;
(statearr_24180_24182[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24170);

return cljs.core.cst$kw$recur;
} else {
throw e24179;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__24183 = state_24170;
state_24170 = G__24183;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__13965__auto__ = function(state_24170){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__13965__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__13965__auto____1.call(this,state_24170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__13965__auto____0;
figwheel$client$heads_up$clear_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__13965__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto__))
})();
var state__14090__auto__ = (function (){var statearr_24181 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_24181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto__);

return statearr_24181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto__))
);

return c__14088__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$backgroundColor,"rgba(211,234,172,1.0)",cljs.core.cst$kw$width,"68px",cljs.core.cst$kw$height,"68px",cljs.core.cst$kw$paddingLeft,"0px",cljs.core.cst$kw$paddingRight,"0px",cljs.core.cst$kw$borderRadius,"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__14088__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__14088__auto__){
return (function (){
var f__14089__auto__ = (function (){var switch__13964__auto__ = ((function (c__14088__auto__){
return (function (state_24215){
var state_val_24216 = (state_24215[(1)]);
if((state_val_24216 === (1))){
var inst_24205 = figwheel.client.heads_up.display_loaded_start();
var state_24215__$1 = state_24215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24215__$1,(2),inst_24205);
} else {
if((state_val_24216 === (2))){
var inst_24207 = (state_24215[(2)]);
var inst_24208 = cljs.core.async.timeout((400));
var state_24215__$1 = (function (){var statearr_24217 = state_24215;
(statearr_24217[(7)] = inst_24207);

return statearr_24217;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24215__$1,(3),inst_24208);
} else {
if((state_val_24216 === (3))){
var inst_24210 = (state_24215[(2)]);
var inst_24211 = figwheel.client.heads_up.clear();
var state_24215__$1 = (function (){var statearr_24218 = state_24215;
(statearr_24218[(8)] = inst_24210);

return statearr_24218;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24215__$1,(4),inst_24211);
} else {
if((state_val_24216 === (4))){
var inst_24213 = (state_24215[(2)]);
var state_24215__$1 = state_24215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24215__$1,inst_24213);
} else {
return null;
}
}
}
}
});})(c__14088__auto__))
;
return ((function (switch__13964__auto__,c__14088__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__13965__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__13965__auto____0 = (function (){
var statearr_24222 = [null,null,null,null,null,null,null,null,null];
(statearr_24222[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__13965__auto__);

(statearr_24222[(1)] = (1));

return statearr_24222;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__13965__auto____1 = (function (state_24215){
while(true){
var ret_value__13966__auto__ = (function (){try{while(true){
var result__13967__auto__ = switch__13964__auto__(state_24215);
if(cljs.core.keyword_identical_QMARK_(result__13967__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__13967__auto__;
}
break;
}
}catch (e24223){if((e24223 instanceof Object)){
var ex__13968__auto__ = e24223;
var statearr_24224_24226 = state_24215;
(statearr_24224_24226[(5)] = ex__13968__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24215);

return cljs.core.cst$kw$recur;
} else {
throw e24223;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13966__auto__,cljs.core.cst$kw$recur)){
var G__24227 = state_24215;
state_24215 = G__24227;
continue;
} else {
return ret_value__13966__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__13965__auto__ = function(state_24215){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__13965__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__13965__auto____1.call(this,state_24215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__13965__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__13965__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__13965__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__13965__auto__;
})()
;})(switch__13964__auto__,c__14088__auto__))
})();
var state__14090__auto__ = (function (){var statearr_24225 = (f__14089__auto__.cljs$core$IFn$_invoke$arity$0 ? f__14089__auto__.cljs$core$IFn$_invoke$arity$0() : f__14089__auto__.call(null));
(statearr_24225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__14088__auto__);

return statearr_24225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14090__auto__);
});})(c__14088__auto__))
);

return c__14088__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen();

var G__24250 = body;
var G__24251 = (function (){var G__24252 = "div";
var G__24253 = ({"id": "figwheelFailScreen", "style": [cljs.core.str("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str("position: absolute;"),cljs.core.str("z-index: 9000;"),cljs.core.str("width: 100vw;"),cljs.core.str("height: 100vh;"),cljs.core.str("top: 0px; left: 0px;"),cljs.core.str("font-family: monospace")].join('')});
var G__24254 = (function (){var G__24255 = "div";
var G__24256 = ({"class": "message", "style": [cljs.core.str("color: #FFF5DB;"),cljs.core.str("width: 100vw;"),cljs.core.str("margin: auto;"),cljs.core.str("margin-top: 10px;"),cljs.core.str("text-align: center; "),cljs.core.str("padding: 2px 0px;"),cljs.core.str("font-size: 13px;"),cljs.core.str("position: relative")].join('')});
var G__24257 = (function (){var G__24260 = "a";
var G__24261 = ({"onclick": ((function (G__24260,G__24255,G__24256,G__24252,G__24253,G__24250,body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen();
});})(G__24260,G__24255,G__24256,G__24252,G__24253,G__24250,body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"});
var G__24262 = "X";
return goog.dom.createDom(G__24260,G__24261,G__24262);
})();
var G__24258 = (function (){var G__24263 = "h2";
var G__24264 = ({"style": "color: #FFF5DB"});
var G__24265 = "Figwheel Says: Your code didn't compile.";
return goog.dom.createDom(G__24263,G__24264,G__24265);
})();
var G__24259 = (function (){var G__24266 = "div";
var G__24267 = ({"style": "font-size: 12px"});
var G__24268 = (function (){var G__24269 = "p";
var G__24270 = ({"style": "color: #D07D7D;"});
var G__24271 = "Keep trying. This page will auto-refresh when your code compiles successfully.";
return goog.dom.createDom(G__24269,G__24270,G__24271);
})();
return goog.dom.createDom(G__24266,G__24267,G__24268);
})();
return goog.dom.createDom(G__24255,G__24256,G__24257,G__24258,G__24259);
})();
return goog.dom.createDom(G__24252,G__24253,G__24254);
})();
return goog.dom.append(G__24250,G__24251);
});
