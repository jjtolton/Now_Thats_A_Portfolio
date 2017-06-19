// Compiled by ClojureScript 1.9.518 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__53649){
var map__53660 = p__53649;
var map__53660__$1 = ((((!((map__53660 == null)))?((((map__53660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53660.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53660):map__53660);
var replacement_transformers = cljs.core.get.call(null,map__53660__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__53660__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__53660,map__53660__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_53662 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__53663 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_53662,map__53660,map__53660__$1,replacement_transformers,custom_transformers){
return (function (p__53666,transformer){
var vec__53667 = p__53666;
var text = cljs.core.nth.call(null,vec__53667,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__53667,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_53662,map__53660,map__53660__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__28749__auto__ = replacement_transformers;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__53663,(0),null);
var new_state = cljs.core.nth.call(null,vec__53663,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_53662;
}});
;})(map__53660,map__53660__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__29977__auto__ = [];
var len__29970__auto___53672 = arguments.length;
var i__29971__auto___53673 = (0);
while(true){
if((i__29971__auto___53673 < len__29970__auto___53672)){
args__29977__auto__.push((arguments[i__29971__auto___53673]));

var G__53674 = (i__29971__auto___53673 + (1));
i__29971__auto___53673 = G__53674;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq53670){
var G__53671 = cljs.core.first.call(null,seq53670);
var seq53670__$1 = cljs.core.next.call(null,seq53670);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__53671,seq53670__$1);
});

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__53679_53683 = cljs.core.seq.call(null,lines);
var chunk__53680_53684 = null;
var count__53681_53685 = (0);
var i__53682_53686 = (0);
while(true){
if((i__53682_53686 < count__53681_53685)){
var line_53687 = cljs.core._nth.call(null,chunk__53680_53684,i__53682_53686);
markdown.links.parse_reference_link.call(null,line_53687,references);

var G__53688 = seq__53679_53683;
var G__53689 = chunk__53680_53684;
var G__53690 = count__53681_53685;
var G__53691 = (i__53682_53686 + (1));
seq__53679_53683 = G__53688;
chunk__53680_53684 = G__53689;
count__53681_53685 = G__53690;
i__53682_53686 = G__53691;
continue;
} else {
var temp__6738__auto___53692 = cljs.core.seq.call(null,seq__53679_53683);
if(temp__6738__auto___53692){
var seq__53679_53693__$1 = temp__6738__auto___53692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53679_53693__$1)){
var c__29660__auto___53694 = cljs.core.chunk_first.call(null,seq__53679_53693__$1);
var G__53695 = cljs.core.chunk_rest.call(null,seq__53679_53693__$1);
var G__53696 = c__29660__auto___53694;
var G__53697 = cljs.core.count.call(null,c__29660__auto___53694);
var G__53698 = (0);
seq__53679_53683 = G__53695;
chunk__53680_53684 = G__53696;
count__53681_53685 = G__53697;
i__53682_53686 = G__53698;
continue;
} else {
var line_53699 = cljs.core.first.call(null,seq__53679_53693__$1);
markdown.links.parse_reference_link.call(null,line_53699,references);

var G__53700 = cljs.core.next.call(null,seq__53679_53693__$1);
var G__53701 = null;
var G__53702 = (0);
var G__53703 = (0);
seq__53679_53683 = G__53700;
chunk__53680_53684 = G__53701;
count__53681_53685 = G__53702;
i__53682_53686 = G__53703;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__53708_53712 = cljs.core.seq.call(null,lines);
var chunk__53709_53713 = null;
var count__53710_53714 = (0);
var i__53711_53715 = (0);
while(true){
if((i__53711_53715 < count__53710_53714)){
var line_53716 = cljs.core._nth.call(null,chunk__53709_53713,i__53711_53715);
markdown.links.parse_footnote_link.call(null,line_53716,footnotes);

var G__53717 = seq__53708_53712;
var G__53718 = chunk__53709_53713;
var G__53719 = count__53710_53714;
var G__53720 = (i__53711_53715 + (1));
seq__53708_53712 = G__53717;
chunk__53709_53713 = G__53718;
count__53710_53714 = G__53719;
i__53711_53715 = G__53720;
continue;
} else {
var temp__6738__auto___53721 = cljs.core.seq.call(null,seq__53708_53712);
if(temp__6738__auto___53721){
var seq__53708_53722__$1 = temp__6738__auto___53721;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53708_53722__$1)){
var c__29660__auto___53723 = cljs.core.chunk_first.call(null,seq__53708_53722__$1);
var G__53724 = cljs.core.chunk_rest.call(null,seq__53708_53722__$1);
var G__53725 = c__29660__auto___53723;
var G__53726 = cljs.core.count.call(null,c__29660__auto___53723);
var G__53727 = (0);
seq__53708_53712 = G__53724;
chunk__53709_53713 = G__53725;
count__53710_53714 = G__53726;
i__53711_53715 = G__53727;
continue;
} else {
var line_53728 = cljs.core.first.call(null,seq__53708_53722__$1);
markdown.links.parse_footnote_link.call(null,line_53728,footnotes);

var G__53729 = cljs.core.next.call(null,seq__53708_53722__$1);
var G__53730 = null;
var G__53731 = (0);
var G__53732 = (0);
seq__53708_53712 = G__53729;
chunk__53709_53713 = G__53730;
count__53710_53714 = G__53731;
i__53711_53715 = G__53732;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__53737 = cljs.core.split_with.call(null,(function (p1__53733_SHARP_){
return cljs.core.not_empty.call(null,p1__53733_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__53737,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__53737,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_53755 = markdown.common._STAR_substring_STAR_;
var formatter53756 = markdown.transformers.formatter;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_53755,formatter53756){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_53755,formatter53756))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__53757 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__53757,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__53757,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__53763_53770 = lines__$1;
var vec__53764_53771 = G__53763_53770;
var seq__53765_53772 = cljs.core.seq.call(null,vec__53764_53771);
var first__53766_53773 = cljs.core.first.call(null,seq__53765_53772);
var seq__53765_53774__$1 = cljs.core.next.call(null,seq__53765_53772);
var line_53775 = first__53766_53773;
var more_53776 = seq__53765_53774__$1;
var state_53777 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__53763_53778__$1 = G__53763_53770;
var state_53779__$1 = state_53777;
while(true){
var vec__53767_53780 = G__53763_53778__$1;
var seq__53768_53781 = cljs.core.seq.call(null,vec__53767_53780);
var first__53769_53782 = cljs.core.first.call(null,seq__53768_53781);
var seq__53768_53783__$1 = cljs.core.next.call(null,seq__53768_53781);
var line_53784__$1 = first__53769_53782;
var more_53785__$1 = seq__53768_53783__$1;
var state_53786__$2 = state_53779__$1;
var state_53787__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_53786__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_53786__$2),cljs.core.first.call(null,more_53785__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_53786__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_53786__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_53785__$1))){
var G__53788 = more_53785__$1;
var G__53789 = cljs.core.assoc.call(null,transformer.call(null,html,line_53784__$1,cljs.core.first.call(null,more_53785__$1),state_53787__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_53784__$1));
G__53763_53778__$1 = G__53788;
state_53779__$1 = G__53789;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_53787__$3))),line_53784__$1,"",cljs.core.assoc.call(null,state_53787__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers.formatter = formatter53756;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_53755;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__29977__auto__ = [];
var len__29970__auto___53792 = arguments.length;
var i__29971__auto___53793 = (0);
while(true){
if((i__29971__auto___53793 < len__29970__auto___53792)){
args__29977__auto__.push((arguments[i__29971__auto___53793]));

var G__53794 = (i__29971__auto___53793 + (1));
i__29971__auto___53793 = G__53794;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq53790){
var G__53791 = cljs.core.first.call(null,seq53790);
var seq53790__$1 = cljs.core.next.call(null,seq53790);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__53791,seq53790__$1);
});

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__29977__auto__ = [];
var len__29970__auto___53797 = arguments.length;
var i__29971__auto___53798 = (0);
while(true){
if((i__29971__auto___53798 < len__29970__auto___53797)){
args__29977__auto__.push((arguments[i__29971__auto___53798]));

var G__53799 = (i__29971__auto___53798 + (1));
i__29971__auto___53798 = G__53799;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq53795){
var G__53796 = cljs.core.first.call(null,seq53795);
var seq53795__$1 = cljs.core.next.call(null,seq53795);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__53796,seq53795__$1);
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__29977__auto__ = [];
var len__29970__auto___53801 = arguments.length;
var i__29971__auto___53802 = (0);
while(true){
if((i__29971__auto___53802 < len__29970__auto___53801)){
args__29977__auto__.push((arguments[i__29971__auto___53802]));

var G__53803 = (i__29971__auto___53802 + (1));
i__29971__auto___53802 = G__53803;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq53800){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53800));
});

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__29977__auto__ = [];
var len__29970__auto___53805 = arguments.length;
var i__29971__auto___53806 = (0);
while(true){
if((i__29971__auto___53806 < len__29970__auto___53805)){
args__29977__auto__.push((arguments[i__29971__auto___53806]));

var G__53807 = (i__29971__auto___53806 + (1));
i__29971__auto___53806 = G__53807;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq53804){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53804));
});


//# sourceMappingURL=core.js.map