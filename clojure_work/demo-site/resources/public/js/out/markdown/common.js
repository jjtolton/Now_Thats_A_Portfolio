// Compiled by ClojureScript 1.9.518 {}
goog.provide('markdown.common');
goog.require('cljs.core');
goog.require('clojure.string');
markdown.common.escape_delimiter = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(254))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(491)))].join('');
markdown.common.gen_token = (function markdown$common$gen_token(n){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_delimiter),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_delimiter)].join('');
});
/**
 * Freezes an output string.  Converts to a placeholder token and puts that into the output.
 *   Returns the [text, state] pair.  Adds it into the state, the 'frozen-strings' hashmap
 *   So that it can be unfrozen later.
 */
markdown.common.freeze_string = (function markdown$common$freeze_string(var_args){
var args__29977__auto__ = [];
var len__29970__auto___53269 = arguments.length;
var i__29971__auto___53270 = (0);
while(true){
if((i__29971__auto___53270 < len__29970__auto___53269)){
args__29977__auto__.push((arguments[i__29971__auto___53270]));

var G__53271 = (i__29971__auto___53270 + (1));
i__29971__auto___53270 = G__53271;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var state = cljs.core.last.call(null,args);
var token = markdown.common.gen_token.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),token], null),cljs.core.reduce.call(null,cljs.core.str,cljs.core.flatten.call(null,cljs.core.drop_last.call(null,args))))], null);
});

markdown.common.freeze_string.cljs$lang$maxFixedArity = (0);

markdown.common.freeze_string.cljs$lang$applyTo = (function (seq53268){
return markdown.common.freeze_string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53268));
});

/**
 * Recursively replaces the frozen strings in the output with the original text.
 */
markdown.common.thaw_string = (function markdown$common$thaw_string(text,state){
while(true){
var temp__6736__auto__ = cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_delimiter),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\\d+"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(markdown.common.escape_delimiter)].join('')),text);
if(cljs.core.truth_(temp__6736__auto__)){
var matches = temp__6736__auto__;
var G__53274 = cljs.core.reduce.call(null,((function (text,state,matches,temp__6736__auto__){
return (function (s,r){
return clojure.string.replace.call(null,s,cljs.core.re_pattern.call(null,r),((function (text,state,matches,temp__6736__auto__){
return (function (p1__53272_SHARP_){
return cljs.core.get.call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state),p1__53272_SHARP_,p1__53272_SHARP_);
});})(text,state,matches,temp__6736__auto__))
);
});})(text,state,matches,temp__6736__auto__))
,text,matches);
var G__53275 = cljs.core.update.call(null,state,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560),((function (text,state,matches,temp__6736__auto__){
return (function (p1__53273_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__53273_SHARP_,matches);
});})(text,state,matches,temp__6736__auto__))
);
text = G__53274;
state = G__53275;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
break;
}
});
/**
 * Terminally encoded strings are ones that we've determined should no longer be processed or evaluated
 */
markdown.common.thaw_strings = (function markdown$common$thaw_strings(text,state){
if(!(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"frozen-strings","frozen-strings",-1410661560).cljs$core$IFn$_invoke$arity$1(state)))){
return markdown.common.thaw_string.call(null,text,state);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
}
});
markdown.common.escape_code = (function markdown$common$escape_code(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,s,/&/,"&amp;"),/\*/,"&#42;"),/\^/,"&#94;"),/\_/,"&#95;"),/\~/,"&#126;"),/\</,"&lt;"),/\>/,"&gt;"),/\[/,"&#91;"),/\]/,"&#93;"),/\(/,"&#40;"),/\)/,"&#41;"),/\"/,"&quot;");
});
markdown.common.escaped_chars = (function markdown$common$escaped_chars(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__28749__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,text,/\\\\/,"&#92;"),/\\`/,"&#8216;"),/\\\*/,"&#42;"),/\\_/,"&#95;"),/\\\{/,"&#123;"),/\\\}/,"&#125;"),/\\\[/,"&#91;"),/\\\]/,"&#93;"),/\\\(/,"&#40;"),/\\\)/,"&#41;"),/\\#/,"&#35;"),/\\\+/,"&#43;"),/\\-/,"&#45;"),/\\\./,"&#46;"),/\\!/,"&#33;")),state], null);
});
markdown.common.separator = (function markdown$common$separator(escape_QMARK_,text,open,close,separator,state){
if(cljs.core.truth_(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var buf = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.partition_by.call(null,cljs.core.partial.call(null,cljs.core._EQ_,cljs.core.first.call(null,separator)),cljs.core.seq.call(null,text));
var cur_state = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"found-token","found-token",113525576),false);
while(true){
if(cljs.core.empty_QMARK_.call(null,tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,cljs.core.into.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",113525576).cljs$core$IFn$_invoke$arity$1(cur_state))?cljs.core.into.call(null,out,separator):out),buf)),cljs.core.dissoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576))], null);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"found-token","found-token",113525576).cljs$core$IFn$_invoke$arity$1(cur_state))){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,tokens),separator)){
var G__53276 = cljs.core.vec.call(null,cljs.core.concat.call(null,out,cljs.core.seq.call(null,open),(cljs.core.truth_(escape_QMARK_)?cljs.core.seq.call(null,markdown.common.escape_code.call(null,clojure.string.join.call(null,buf))):buf),cljs.core.seq.call(null,close)));
var G__53277 = cljs.core.PersistentVector.EMPTY;
var G__53278 = cljs.core.rest.call(null,tokens);
var G__53279 = cljs.core.assoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576),false);
out = G__53276;
buf = G__53277;
tokens = G__53278;
cur_state = G__53279;
continue;
} else {
var G__53280 = out;
var G__53281 = cljs.core.into.call(null,buf,cljs.core.first.call(null,tokens));
var G__53282 = cljs.core.rest.call(null,tokens);
var G__53283 = cur_state;
out = G__53280;
buf = G__53281;
tokens = G__53282;
cur_state = G__53283;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,tokens),separator)){
var G__53284 = out;
var G__53285 = buf;
var G__53286 = cljs.core.rest.call(null,tokens);
var G__53287 = cljs.core.assoc.call(null,cur_state,new cljs.core.Keyword(null,"found-token","found-token",113525576),true);
out = G__53284;
buf = G__53285;
tokens = G__53286;
cur_state = G__53287;
continue;
} else {
var G__53288 = cljs.core.into.call(null,out,cljs.core.first.call(null,tokens));
var G__53289 = buf;
var G__53290 = cljs.core.rest.call(null,tokens);
var G__53291 = cur_state;
out = G__53288;
buf = G__53289;
tokens = G__53290;
cur_state = G__53291;
continue;

}
}
}
break;
}
}
});
markdown.common.strong = (function markdown$common$strong(text,state){
return markdown.common.separator.call(null,false,text,"<strong>","</strong>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","*"], null),state);
});
markdown.common.bold = (function markdown$common$bold(text,state){
return markdown.common.separator.call(null,false,text,"<b>","</b>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_","_"], null),state);
});
markdown.common.em = (function markdown$common$em(text,state){
return markdown.common.separator.call(null,false,text,"<em>","</em>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*"], null),state);
});
markdown.common.italics = (function markdown$common$italics(text,state){
return markdown.common.separator.call(null,false,text,"<i>","</i>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["_"], null),state);
});
markdown.common.strikethrough = (function markdown$common$strikethrough(text,state){
return markdown.common.separator.call(null,false,text,"<del>","</del>",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~","~"], null),state);
});
markdown.common.inline_code = (function markdown$common$inline_code(text,state){
return markdown.common.separator.call(null,true,text,"<code>","</code>",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`"], null),state);
});
markdown.common.heading_text = (function markdown$common$heading_text(text){
return clojure.string.trim.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,text,/^([ ]+)?[#]+/,""),/[#]+$/,""));
});
markdown.common.heading_level = (function markdown$common$heading_level(text){
var num_hashes = cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__53292_SHARP_){
return cljs.core.not_EQ_.call(null," ",p1__53292_SHARP_);
}),cljs.core.take_while.call(null,(function (p1__53293_SHARP_){
return (cljs.core._EQ_.call(null,"#",p1__53293_SHARP_)) || (cljs.core._EQ_.call(null," ",p1__53293_SHARP_));
}),cljs.core.seq.call(null,text))));
if((num_hashes > (0))){
return num_hashes;
} else {
return null;
}
});
markdown.common.make_heading = (function markdown$common$make_heading(text,heading_anchors){
var temp__6738__auto__ = markdown.common.heading_level.call(null,text);
if(cljs.core.truth_(temp__6738__auto__)){
var heading = temp__6738__auto__;
var text__$1 = markdown.common.heading_text.call(null,text);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(heading_anchors)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,clojure.string.lower_case.call(null,text__$1)," ","&#95;")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"></a>")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</h"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(heading),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">")].join('');
} else {
return null;
}
});
markdown.common.dashes = (function markdown$common$dashes(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__28749__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})())?text:clojure.string.replace.call(null,clojure.string.replace.call(null,text,/\-\-\-/,"&mdash;"),/\-\-/,"&ndash;")),state], null);
});

//# sourceMappingURL=common.js.map