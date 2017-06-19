// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('dirac.runtime.output');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.array');
goog.require('clojure.string');
goog.require('dirac.runtime.prefs');
dirac.runtime.output.re_split = (new RegExp("(---<.*?>---)","g"));
dirac.runtime.output.re_style = (new RegExp("---<(.*?)>---"));
dirac.runtime.output.re_code = (new RegExp("`(.*?)`","g"));
dirac.runtime.output.mark_code = (function dirac$runtime$output$mark_code(text){
var code_style = dirac.runtime.prefs.pref(cljs.core.cst$kw$rich_DASH_text_DASH_code_DASH_style);
var reset_style = dirac.runtime.prefs.pref(cljs.core.cst$kw$rich_DASH_text_DASH_reset_DASH_style);
return text.replace(dirac.runtime.output.re_code,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("---<"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(code_style),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">---$1---<"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(reset_style),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">---")].join(''));
});
dirac.runtime.output.CSI = "\u001B\\[";
dirac.runtime.output.re_ansi = (new RegExp([cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirac.runtime.output.CSI),cljs.core.str.cljs$core$IFn$_invoke$arity$1("([0-9;]+)"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("m")].join(''),"g"));
dirac.runtime.output.parse_int = (function dirac$runtime$output$parse_int(v){
var res = parseInt(v,(10));
if(cljs.core.not(isNaN(res))){
return res;
} else {
return null;
}
});
dirac.runtime.output.command_to_style = (function dirac$runtime$output$command_to_style(command){
var pref_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("rich-text-ansi-style-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(command)].join(''));
return dirac.runtime.prefs.pref(pref_key);
});
dirac.runtime.output.ansi_code_to_style = (function dirac$runtime$output$ansi_code_to_style(sgr_code){
var commands = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(dirac.runtime.output.parse_int,sgr_code.split(";"));
var sanitized_commands = ((cljs.core.empty_QMARK_(commands))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null):commands);
var styles = cljs.core.map.cljs$core$IFn$_invoke$arity$2(dirac.runtime.output.command_to_style,sanitized_commands);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",styles);
});
dirac.runtime.output.mark_ansi = (function dirac$runtime$output$mark_ansi(text){
return text.replace(dirac.runtime.output.re_ansi,(function (match,sgr_code){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("---<"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(dirac.runtime.output.ansi_code_to_style(sgr_code)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(">---")].join('');
}));
});
dirac.runtime.output.style_QMARK_ = (function dirac$runtime$output$style_QMARK_(s){
return dirac.runtime.output.re_style.test(s);
});
dirac.runtime.output.build_format_string = (function dirac$runtime$output$build_format_string(soup){
return clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__32951_SHARP_){
if(cljs.core.truth_(dirac.runtime.output.style_QMARK_(p1__32951_SHARP_))){
return "%c";
} else {
return "%s";
}
}),soup));
});
dirac.runtime.output.boil_soup = (function dirac$runtime$output$boil_soup(soup){
var _STAR_ = (function (x){
if(cljs.core.truth_(dirac.runtime.output.style_QMARK_(x))){
return cljs.core.second(x.match(dirac.runtime.output.re_style));
} else {
return x;
}
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(_STAR_,soup);
});
dirac.runtime.output.boil_rich_text = (function dirac$runtime$output$boil_rich_text(text){
var marked_text = dirac.runtime.output.mark_ansi(dirac.runtime.output.mark_code(text));
var soup = marked_text.split(dirac.runtime.output.re_split);
var format_string = dirac.runtime.output.build_format_string(soup);
var boiled_soup = dirac.runtime.output.boil_soup(soup);
return cljs.core.cons(format_string,boiled_soup);
});
