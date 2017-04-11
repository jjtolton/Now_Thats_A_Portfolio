// Compiled by ClojureScript 1.9.229 {}
goog.provide('sablono.util');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('clojure.string');
sablono.util._STAR_base_url_STAR_ = null;

/**
 * @interface
 */
sablono.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
sablono.util.to_str = (function sablono$util$to_str(x){
if((!((x == null))) && (!((x.sablono$util$ToString$to_str$arity$1 == null)))){
return x.sablono$util$ToString$to_str$arity$1(x);
} else {
var x__7072__auto__ = (((x == null))?null:x);
var m__7073__auto__ = (sablono.util.to_str[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,x);
} else {
var m__7073__auto____$1 = (sablono.util.to_str["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",x);
}
}
}
});


/**
 * @interface
 */
sablono.util.ToURI = function(){};

/**
 * Convert a value into a URI.
 */
sablono.util.to_uri = (function sablono$util$to_uri(x){
if((!((x == null))) && (!((x.sablono$util$ToURI$to_uri$arity$1 == null)))){
return x.sablono$util$ToURI$to_uri$arity$1(x);
} else {
var x__7072__auto__ = (((x == null))?null:x);
var m__7073__auto__ = (sablono.util.to_uri[goog.typeOf(x__7072__auto__)]);
if(!((m__7073__auto__ == null))){
return m__7073__auto__.call(null,x);
} else {
var m__7073__auto____$1 = (sablono.util.to_uri["_"]);
if(!((m__7073__auto____$1 == null))){
return m__7073__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"ToURI.to-uri",x);
}
}
}
});

/**
 * Converts its arguments into a string using to-str.
 */
sablono.util.as_str = (function sablono$util$as_str(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12707 = arguments.length;
var i__7485__auto___12708 = (0);
while(true){
if((i__7485__auto___12708 < len__7484__auto___12707)){
args__7491__auto__.push((arguments[i__7485__auto___12708]));

var G__12709 = (i__7485__auto___12708 + (1));
i__7485__auto___12708 = G__12709;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,sablono.util.to_str,xs));
});

sablono.util.as_str.cljs$lang$maxFixedArity = (0);

sablono.util.as_str.cljs$lang$applyTo = (function (seq12706){
return sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12706));
});

/**
 * Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv.
 */
sablono.util.camel_case = (function sablono$util$camel_case(k){
if(cljs.core.truth_(k)){
var vec__12713 = clojure.string.split.call(null,cljs.core.name.call(null,k),/-/);
var seq__12714 = cljs.core.seq.call(null,vec__12713);
var first__12715 = cljs.core.first.call(null,seq__12714);
var seq__12714__$1 = cljs.core.next.call(null,seq__12714);
var first_word = first__12715;
var words = seq__12714__$1;
if((cljs.core.empty_QMARK_.call(null,words)) || (cljs.core._EQ_.call(null,"aria",first_word)) || (cljs.core._EQ_.call(null,"data",first_word))){
return k;
} else {
return cljs.core.keyword.call(null,clojure.string.join.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,clojure.string.capitalize,words),first_word)));
}
} else {
return null;
}
});
/**
 * Recursively transforms all map keys into camel case.
 */
sablono.util.camel_case_keys = (function sablono$util$camel_case_keys(m){
if(cljs.core.map_QMARK_.call(null,m)){
var ks = cljs.core.keys.call(null,m);
var kmap = cljs.core.zipmap.call(null,ks,cljs.core.map.call(null,sablono.util.camel_case,ks));
var G__12717 = clojure.set.rename_keys.call(null,m,kmap);
if(cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.update_in.call(null,G__12717,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736)], null),sablono$util$camel_case_keys);
} else {
return G__12717;
}
} else {
return m;
}
});
/**
 * Converts all HTML attributes to their DOM equivalents.
 */
sablono.util.html_to_dom_attrs = (function sablono$util$html_to_dom_attrs(attrs){
return clojure.set.rename_keys.call(null,sablono.util.camel_case_keys.call(null,attrs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720)], null));
});
/**
 * Removes all map entries where the value of the entry is empty.
 */
sablono.util.compact_map = (function sablono$util$compact_map(m){
return cljs.core.reduce.call(null,(function (m__$1,k){
var v = cljs.core.get.call(null,m__$1,k);
if(cljs.core.empty_QMARK_.call(null,v)){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,cljs.core.keys.call(null,m));
});
/**
 * Like clojure.core/merge but concatenate :class entries.
 */
sablono.util.merge_with_class = (function sablono$util$merge_with_class(var_args){
var args__7491__auto__ = [];
var len__7484__auto___12720 = arguments.length;
var i__7485__auto___12721 = (0);
while(true){
if((i__7485__auto___12721 < len__7484__auto___12720)){
args__7491__auto__.push((arguments[i__7485__auto___12721]));

var G__12722 = (i__7485__auto___12721 + (1));
i__7485__auto___12721 = G__12722;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((0) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((0)),(0),null)):null);
return sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(argseq__7492__auto__);
});

sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var classes = cljs.core.vec.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.mapcat.call(null,(function (p1__12718_SHARP_){
if(cljs.core.list_QMARK_.call(null,p1__12718_SHARP_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12718_SHARP_], null);
} else {
if(cljs.core.sequential_QMARK_.call(null,p1__12718_SHARP_)){
return p1__12718_SHARP_;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12718_SHARP_], null);

}
}
}),cljs.core.map.call(null,new cljs.core.Keyword(null,"class","class",-2030961996),maps))));
var maps__$1 = cljs.core.apply.call(null,cljs.core.merge,maps);
if(cljs.core.empty_QMARK_.call(null,classes)){
return maps__$1;
} else {
return cljs.core.assoc.call(null,maps__$1,new cljs.core.Keyword(null,"class","class",-2030961996),classes);
}
});

sablono.util.merge_with_class.cljs$lang$maxFixedArity = (0);

sablono.util.merge_with_class.cljs$lang$applyTo = (function (seq12719){
return sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12719));
});

/**
 * Strip the # and . characters from the beginning of `s`.
 */
sablono.util.strip_css = (function sablono$util$strip_css(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,s,/^[.#]/,"");
} else {
return null;
}
});
/**
 * Match `s` as a CSS tag and return a vector of tag name, CSS id and
 *   CSS classes.
 */
sablono.util.match_tag = (function sablono$util$match_tag(s){
var matches = cljs.core.re_seq.call(null,/[#.]?[^#.]+/,cljs.core.name.call(null,s));
var vec__12728 = ((cljs.core.empty_QMARK_.call(null,matches))?(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Can't match CSS tag: "),cljs.core.str(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),s], null))})():(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null).call(null,cljs.core.ffirst.call(null,matches)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,matches),cljs.core.rest.call(null,matches)], null)
));
var tag_name = cljs.core.nth.call(null,vec__12728,(0),null);
var names = cljs.core.nth.call(null,vec__12728,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag_name,cljs.core.first.call(null,cljs.core.map.call(null,sablono.util.strip_css,cljs.core.filter.call(null,((function (matches,vec__12728,tag_name,names){
return (function (p1__12723_SHARP_){
return cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,p1__12723_SHARP_));
});})(matches,vec__12728,tag_name,names))
,names))),cljs.core.vec.call(null,cljs.core.map.call(null,sablono.util.strip_css,cljs.core.filter.call(null,((function (matches,vec__12728,tag_name,names){
return (function (p1__12724_SHARP_){
return cljs.core._EQ_.call(null,".",cljs.core.first.call(null,p1__12724_SHARP_));
});})(matches,vec__12728,tag_name,names))
,names)))], null);
});
/**
 * Ensure an element vector is of the form [tag-name attrs content].
 */
sablono.util.normalize_element = (function sablono$util$normalize_element(p__12731){
var vec__12738 = p__12731;
var seq__12739 = cljs.core.seq.call(null,vec__12738);
var first__12740 = cljs.core.first.call(null,seq__12739);
var seq__12739__$1 = cljs.core.next.call(null,seq__12739);
var tag = first__12740;
var content = seq__12739__$1;
if(!(((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))){
throw cljs.core.ex_info.call(null,[cljs.core.str(tag),cljs.core.str(" is not a valid element name.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"content","content",15833224),content], null));
} else {
}

var vec__12741 = sablono.util.match_tag.call(null,tag);
var tag__$1 = cljs.core.nth.call(null,vec__12741,(0),null);
var id = cljs.core.nth.call(null,vec__12741,(1),null);
var class$ = cljs.core.nth.call(null,vec__12741,(2),null);
var tag_attrs = sablono.util.compact_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null));
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,sablono.util.merge_with_class.call(null,tag_attrs,map_attrs),cljs.core.next.call(null,content)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,tag_attrs,content], null);
}
});
/**
 * Join the `classes` with a whitespace.
 */
sablono.util.join_classes = (function sablono$util$join_classes(classes){
return clojure.string.join.call(null," ",cljs.core.flatten.call(null,classes));
});
/**
 * Returns the React function to render `tag` as a symbol.
 */
sablono.util.react_symbol = (function sablono$util$react_symbol(tag){
return cljs.core.symbol.call(null,"js",[cljs.core.str("React.DOM."),cljs.core.str(cljs.core.name.call(null,tag))].join(''));
});
/**
 * Same as `react-symbol` but wrap input and text elements.
 */
sablono.util.react_fn = (function sablono$util$react_fn(tag){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),null,new cljs.core.Keyword(null,"option","option",65132272),null,new cljs.core.Keyword(null,"input","input",556931961),null], null), null),cljs.core.keyword.call(null,tag))){
return cljs.core.symbol.call(null,"sablono.interpreter",cljs.core.name.call(null,tag));
} else {
return sablono.util.react_symbol.call(null,tag);
}
});
/**
 * Returns a regular expression that matches the HTML attribute `attr`
 *   and it's value.
 */
sablono.util.attr_pattern = (function sablono$util$attr_pattern(attr){
return cljs.core.re_pattern.call(null,[cljs.core.str("\\s+"),cljs.core.str(cljs.core.name.call(null,attr)),cljs.core.str("\\s*=\\s*['\"][^\"']+['\"]")].join(''));
});
/**
 * Strip the HTML attribute `attr` and it's value from the string `s`.
 */
sablono.util.strip_attr = (function sablono$util$strip_attr(s,attr){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,s,sablono.util.attr_pattern.call(null,attr),"");
} else {
return null;
}
});
/**
 * Strip the outer HTML tag from the string `s`.
 */
sablono.util.strip_outer = (function sablono$util$strip_outer(s){
if(cljs.core.truth_(s)){
return clojure.string.replace.call(null,clojure.string.replace.call(null,s,/^\s*<[^>]+>\s*/,""),/\s*<\/[^>]+>\s*$/,"");
} else {
return null;
}
});
cljs.core.Keyword.prototype.sablono$util$ToString$ = true;

cljs.core.Keyword.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
return cljs.core.name.call(null,x__$1);
});

goog.Uri.prototype.sablono$util$ToString$ = true;

goog.Uri.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
if(cljs.core.truth_((function (){var or__6409__auto__ = x__$1.hasDomain();
if(cljs.core.truth_(or__6409__auto__)){
return or__6409__auto__;
} else {
return ((x__$1.getPath() == null)) || (cljs.core.not.call(null,cljs.core.re_matches.call(null,/^\/.*/,x__$1.getPath())));
}
})())){
return [cljs.core.str(x__$1)].join('');
} else {
var base = [cljs.core.str(sablono.util._STAR_base_url_STAR_)].join('');
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*\/$/,base))){
return [cljs.core.str(cljs.core.subs.call(null,base,(0),(cljs.core.count.call(null,base) - (1)))),cljs.core.str(x__$1)].join('');
} else {
return [cljs.core.str(base),cljs.core.str(x__$1)].join('');
}
}
});

(sablono.util.ToString["null"] = true);

(sablono.util.to_str["null"] = (function (_){
return "";
}));

(sablono.util.ToString["number"] = true);

(sablono.util.to_str["number"] = (function (x){
return [cljs.core.str(x)].join('');
}));

(sablono.util.ToString["_"] = true);

(sablono.util.to_str["_"] = (function (x){
return [cljs.core.str(x)].join('');
}));
goog.Uri.prototype.sablono$util$ToURI$ = true;

goog.Uri.prototype.sablono$util$ToURI$to_uri$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
});

(sablono.util.ToURI["_"] = true);

(sablono.util.to_uri["_"] = (function (x){
return (new goog.Uri([cljs.core.str(x)].join('')));
}));

//# sourceMappingURL=util.js.map