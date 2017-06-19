// Compiled by ClojureScript 1.9.518 {}
goog.provide('datascript.db');
goog.require('cljs.core');
goog.require('goog.array');
goog.require('clojure.walk');
goog.require('datascript.arrays');
goog.require('datascript.btset');
datascript.db.Exception = Error;

datascript.db.IllegalArgumentException = Error;

datascript.db.UnsupportedOperationException = Error;
datascript.db.tx0 = (536870912);
datascript.db.default_schema = null;
datascript.db.seqable_QMARK_ = cljs.core.seqable_QMARK_;
datascript.db.neg_number_QMARK_ = (function datascript$db$neg_number_QMARK_(x){
return (typeof x === 'number') && ((x < (0)));
});
/**
 * Take the &env from a macro, and tell whether we are expanding into cljs.
 */
datascript.db.cljs_env_QMARK_ = (function datascript$db$cljs_env_QMARK_(env){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
datascript.db.combine_hashes = (function datascript$db$combine_hashes(x,y){
return cljs.core.hash_combine.call(null,x,y);
});






/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
datascript.db.Datom = (function (e,a,v,tx,added){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this.added = added;
this.cljs$lang$protocol_mask$partition0$ = 2162164496;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
datascript.db.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
var or__28749__auto__ = d__$1.__hash;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return d__$1.__hash = datascript.db.hash_datom.call(null,d__$1);
}
});

datascript.db.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){
var self__ = this;
var d__$1 = this;
var and__28737__auto__ = (o instanceof datascript.db.Datom);
if(and__28737__auto__){
return datascript.db.equiv_datom.call(null,d__$1,o);
} else {
return and__28737__auto__;
}
});

datascript.db.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){
var self__ = this;
var d__$1 = this;
return datascript.db.seq_datom.call(null,d__$1);
});

datascript.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (d,k){
var self__ = this;
var d__$1 = this;
return datascript.db.val_at_datom.call(null,d__$1,k,null);
});

datascript.db.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (d,k,nf){
var self__ = this;
var d__$1 = this;
return datascript.db.val_at_datom.call(null,d__$1,k,nf);
});

datascript.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,i){
var self__ = this;
var this$__$1 = this;
return datascript.db.nth_datom.call(null,this$__$1,i);
});

datascript.db.Datom.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,i,not_found){
var self__ = this;
var this$__$1 = this;
return datascript.db.nth_datom.call(null,this$__$1,i,not_found);
});

datascript.db.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (d,k,v__$1){
var self__ = this;
var d__$1 = this;
return datascript.db.assoc_datom.call(null,d__$1,k,v__$1);
});

datascript.db.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,writer,opts){
var self__ = this;
var d__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.tx,d__$1.added], null));
});

datascript.db.Datom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"e","e",-1273166571,null),new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"tx","tx",2107161945,null),new cljs.core.Symbol(null,"added","added",-596784081,null)], null);
});

datascript.db.Datom.cljs$lang$type = true;

datascript.db.Datom.cljs$lang$ctorStr = "datascript.db/Datom";

datascript.db.Datom.cljs$lang$ctorPrWriter = (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"datascript.db/Datom");
});

datascript.db.__GT_Datom = (function datascript$db$__GT_Datom(e,a,v,tx,added){
return (new datascript.db.Datom(e,a,v,tx,added));
});

datascript.db.datom = (function datascript$db$datom(var_args){
var args33297 = [];
var len__29970__auto___33300 = arguments.length;
var i__29971__auto___33301 = (0);
while(true){
if((i__29971__auto___33301 < len__29970__auto___33300)){
args33297.push((arguments[i__29971__auto___33301]));

var G__33302 = (i__29971__auto___33301 + (1));
i__29971__auto___33301 = G__33302;
continue;
} else {
}
break;
}

var G__33299 = args33297.length;
switch (G__33299) {
case 3:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.db.datom.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33297.length)].join('')));

}
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$3 = (function (e,a,v){
return (new datascript.db.Datom(e,a,v,datascript.db.tx0,true));
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$4 = (function (e,a,v,tx){
return (new datascript.db.Datom(e,a,v,tx,true));
});

datascript.db.datom.cljs$core$IFn$_invoke$arity$5 = (function (e,a,v,tx,added){
return (new datascript.db.Datom(e,a,v,tx,added));
});

datascript.db.datom.cljs$lang$maxFixedArity = 5;

datascript.db.datom_QMARK_ = (function datascript$db$datom_QMARK_(x){
return (x instanceof datascript.db.Datom);
});
datascript.db.hash_datom = (function datascript$db$hash_datom(d){
return datascript.db.combine_hashes.call(null,datascript.db.combine_hashes.call(null,cljs.core.hash.call(null,d.e),cljs.core.hash.call(null,d.a)),cljs.core.hash.call(null,d.v));
});
datascript.db.equiv_datom = (function datascript$db$equiv_datom(d,o){
return (cljs.core._EQ_.call(null,d.e,o.e)) && (cljs.core._EQ_.call(null,d.a,o.a)) && (cljs.core._EQ_.call(null,d.v,o.v));
});
datascript.db.seq_datom = (function datascript$db$seq_datom(d){
var x__29683__auto__ = d.e;
return cljs.core._conj.call(null,(function (){var x__29683__auto____$1 = d.a;
return cljs.core._conj.call(null,(function (){var x__29683__auto____$2 = d.v;
return cljs.core._conj.call(null,(function (){var x__29683__auto____$3 = d.tx;
return cljs.core._conj.call(null,(function (){var x__29683__auto____$4 = d.added;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29683__auto____$4);
})(),x__29683__auto____$3);
})(),x__29683__auto____$2);
})(),x__29683__auto____$1);
})(),x__29683__auto__);
});
datascript.db.val_at_datom = (function datascript$db$val_at_datom(d,k,not_found){
var G__33305 = k;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"v","v",21465059),G__33305)){
return d.v;
} else {
if(cljs.core._EQ_.call(null,"e",G__33305)){
return d.e;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"added","added",2057651688),G__33305)){
return d.added;
} else {
if(cljs.core._EQ_.call(null,"v",G__33305)){
return d.v;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"e","e",1381269198),G__33305)){
return d.e;
} else {
if(cljs.core._EQ_.call(null,"a",G__33305)){
return d.a;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tx","tx",466630418),G__33305)){
return d.tx;
} else {
if(cljs.core._EQ_.call(null,"added",G__33305)){
return d.added;
} else {
if(cljs.core._EQ_.call(null,"tx",G__33305)){
return d.tx;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),G__33305)){
return d.a;
} else {
return not_found;

}
}
}
}
}
}
}
}
}
}
});
datascript.db.nth_datom = (function datascript$db$nth_datom(var_args){
var args33306 = [];
var len__29970__auto___33311 = arguments.length;
var i__29971__auto___33312 = (0);
while(true){
if((i__29971__auto___33312 < len__29970__auto___33311)){
args33306.push((arguments[i__29971__auto___33312]));

var G__33313 = (i__29971__auto___33312 + (1));
i__29971__auto___33312 = G__33313;
continue;
} else {
}
break;
}

var G__33308 = args33306.length;
switch (G__33308) {
case 2:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33306.length)].join('')));

}
});

datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$2 = (function (d,i){
var G__33309 = i;
switch (G__33309) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return d.tx;

break;
case (4):
return d.added;

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Datom/-nth: Index out of bounds: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')));

}
});

datascript.db.nth_datom.cljs$core$IFn$_invoke$arity$3 = (function (d,i,not_found){
var G__33310 = i;
switch (G__33310) {
case (0):
return d.e;

break;
case (1):
return d.a;

break;
case (2):
return d.v;

break;
case (3):
return d.tx;

break;
case (4):
return d.added;

break;
default:
return not_found;

}
});

datascript.db.nth_datom.cljs$lang$maxFixedArity = 3;

datascript.db.assoc_datom = (function datascript$db$assoc_datom(d,k,v){
var G__33318 = (((k instanceof cljs.core.Keyword))?k.fqn:null);
switch (G__33318) {
case "e":
return (new datascript.db.Datom(v,d.a,d.v,d.tx,d.added));

break;
case "a":
return (new datascript.db.Datom(d.e,v,d.v,d.tx,d.added));

break;
case "v":
return (new datascript.db.Datom(d.e,d.a,v,d.tx,d.added));

break;
case "tx":
return (new datascript.db.Datom(d.e,d.a,d.v,v,d.added));

break;
case "added":
return (new datascript.db.Datom(d.e,d.a,d.v,d.tx,v));

break;
default:
throw (new datascript.db.IllegalArgumentException([cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid key for #datascript/Datom: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')));

}
});
datascript.db.datom_from_reader = (function datascript$db$datom_from_reader(vec){
return cljs.core.apply.call(null,datascript.db.datom,vec);
});
datascript.db.cmp = (function datascript$db$cmp(o1,o2){
if(cljs.core.truth_((function (){var and__28737__auto__ = o1;
if(cljs.core.truth_(and__28737__auto__)){
return o2;
} else {
return and__28737__auto__;
}
})())){
return cljs.core.compare.call(null,o1,o2);
} else {
return (0);
}
});
datascript.db.cmp_num = (function datascript$db$cmp_num(n1,n2){
if(cljs.core.truth_((function (){var and__28737__auto__ = n1;
if(cljs.core.truth_(and__28737__auto__)){
return n2;
} else {
return and__28737__auto__;
}
})())){
return (n1 - n2);
} else {
return (0);
}
});
datascript.db.cmp_val = (function datascript$db$cmp_val(o1,o2){
if((!((o1 == null))) && (!((o2 == null)))){
return cljs.core.compare.call(null,o1,o2);
} else {
return (0);
}
});
datascript.db.cmp_datoms_eavt = (function datascript$db$cmp_datoms_eavt(d1,d2){
var c__32749__auto__ = datascript.db.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__32749__auto__)){
var c__32749__auto____$1 = datascript.db.cmp.call(null,d1.a,d2.a);
if(((0) === c__32749__auto____$1)){
var c__32749__auto____$2 = datascript.db.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__32749__auto____$2)){
var c__32749__auto____$3 = datascript.db.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__32749__auto____$3)){
return (0);
} else {
return c__32749__auto____$3;
}
} else {
return c__32749__auto____$2;
}
} else {
return c__32749__auto____$1;
}
} else {
return c__32749__auto__;
}
});
datascript.db.cmp_datoms_aevt = (function datascript$db$cmp_datoms_aevt(d1,d2){
var c__32749__auto__ = datascript.db.cmp.call(null,d1.a,d2.a);
if(((0) === c__32749__auto__)){
var c__32749__auto____$1 = datascript.db.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__32749__auto____$1)){
var c__32749__auto____$2 = datascript.db.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__32749__auto____$2)){
var c__32749__auto____$3 = datascript.db.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__32749__auto____$3)){
return (0);
} else {
return c__32749__auto____$3;
}
} else {
return c__32749__auto____$2;
}
} else {
return c__32749__auto____$1;
}
} else {
return c__32749__auto__;
}
});
datascript.db.cmp_datoms_avet = (function datascript$db$cmp_datoms_avet(d1,d2){
var c__32749__auto__ = datascript.db.cmp.call(null,d1.a,d2.a);
if(((0) === c__32749__auto__)){
var c__32749__auto____$1 = datascript.db.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__32749__auto____$1)){
var c__32749__auto____$2 = datascript.db.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__32749__auto____$2)){
var c__32749__auto____$3 = datascript.db.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__32749__auto____$3)){
return (0);
} else {
return c__32749__auto____$3;
}
} else {
return c__32749__auto____$2;
}
} else {
return c__32749__auto____$1;
}
} else {
return c__32749__auto__;
}
});
datascript.db.cmp_attr_quick = (function datascript$db$cmp_attr_quick(a1,a2){
if((a1 instanceof cljs.core.Keyword)){
return cljs.core._compare.call(null,a1,a2);
} else {
return goog.array.defaultCompare(a1,a2);
}
});
datascript.db.cmp_datoms_eavt_quick = (function datascript$db$cmp_datoms_eavt_quick(d1,d2){
var c__32749__auto__ = (d1.e - d2.e);
if(((0) === c__32749__auto__)){
var c__32749__auto____$1 = datascript.db.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__32749__auto____$1)){
var c__32749__auto____$2 = cljs.core.compare.call(null,d1.v,d2.v);
if(((0) === c__32749__auto____$2)){
var c__32749__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__32749__auto____$3)){
return (0);
} else {
return c__32749__auto____$3;
}
} else {
return c__32749__auto____$2;
}
} else {
return c__32749__auto____$1;
}
} else {
return c__32749__auto__;
}
});
datascript.db.cmp_datoms_aevt_quick = (function datascript$db$cmp_datoms_aevt_quick(d1,d2){
var c__32749__auto__ = datascript.db.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__32749__auto__)){
var c__32749__auto____$1 = (d1.e - d2.e);
if(((0) === c__32749__auto____$1)){
var c__32749__auto____$2 = cljs.core.compare.call(null,d1.v,d2.v);
if(((0) === c__32749__auto____$2)){
var c__32749__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__32749__auto____$3)){
return (0);
} else {
return c__32749__auto____$3;
}
} else {
return c__32749__auto____$2;
}
} else {
return c__32749__auto____$1;
}
} else {
return c__32749__auto__;
}
});
datascript.db.cmp_datoms_avet_quick = (function datascript$db$cmp_datoms_avet_quick(d1,d2){
var c__32749__auto__ = datascript.db.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__32749__auto__)){
var c__32749__auto____$1 = cljs.core.compare.call(null,d1.v,d2.v);
if(((0) === c__32749__auto____$1)){
var c__32749__auto____$2 = (d1.e - d2.e);
if(((0) === c__32749__auto____$2)){
var c__32749__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__32749__auto____$3)){
return (0);
} else {
return c__32749__auto____$3;
}
} else {
return c__32749__auto____$2;
}
} else {
return c__32749__auto____$1;
}
} else {
return c__32749__auto__;
}
});

/**
 * @interface
 */
datascript.db.ISearch = function(){};

datascript.db._search = (function datascript$db$_search(data,pattern){
if((!((data == null))) && (!((data.datascript$db$ISearch$_search$arity$2 == null)))){
return data.datascript$db$ISearch$_search$arity$2(data,pattern);
} else {
var x__29467__auto__ = (((data == null))?null:data);
var m__29468__auto__ = (datascript.db._search[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,data,pattern);
} else {
var m__29468__auto____$1 = (datascript.db._search["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,data,pattern);
} else {
throw cljs.core.missing_protocol.call(null,"ISearch.-search",data);
}
}
}
});


/**
 * @interface
 */
datascript.db.IIndexAccess = function(){};

datascript.db._datoms = (function datascript$db$_datoms(db,index,components){
if((!((db == null))) && (!((db.datascript$db$IIndexAccess$_datoms$arity$3 == null)))){
return db.datascript$db$IIndexAccess$_datoms$arity$3(db,index,components);
} else {
var x__29467__auto__ = (((db == null))?null:db);
var m__29468__auto__ = (datascript.db._datoms[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,db,index,components);
} else {
var m__29468__auto____$1 = (datascript.db._datoms["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,db,index,components);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-datoms",db);
}
}
}
});

datascript.db._seek_datoms = (function datascript$db$_seek_datoms(db,index,components){
if((!((db == null))) && (!((db.datascript$db$IIndexAccess$_seek_datoms$arity$3 == null)))){
return db.datascript$db$IIndexAccess$_seek_datoms$arity$3(db,index,components);
} else {
var x__29467__auto__ = (((db == null))?null:db);
var m__29468__auto__ = (datascript.db._seek_datoms[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,db,index,components);
} else {
var m__29468__auto____$1 = (datascript.db._seek_datoms["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,db,index,components);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-seek-datoms",db);
}
}
}
});

datascript.db._index_range = (function datascript$db$_index_range(db,attr,start,end){
if((!((db == null))) && (!((db.datascript$db$IIndexAccess$_index_range$arity$4 == null)))){
return db.datascript$db$IIndexAccess$_index_range$arity$4(db,attr,start,end);
} else {
var x__29467__auto__ = (((db == null))?null:db);
var m__29468__auto__ = (datascript.db._index_range[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,db,attr,start,end);
} else {
var m__29468__auto____$1 = (datascript.db._index_range["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,db,attr,start,end);
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-index-range",db);
}
}
}
});


/**
 * @interface
 */
datascript.db.IDB = function(){};

datascript.db._schema = (function datascript$db$_schema(db){
if((!((db == null))) && (!((db.datascript$db$IDB$_schema$arity$1 == null)))){
return db.datascript$db$IDB$_schema$arity$1(db);
} else {
var x__29467__auto__ = (((db == null))?null:db);
var m__29468__auto__ = (datascript.db._schema[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,db);
} else {
var m__29468__auto____$1 = (datascript.db._schema["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,db);
} else {
throw cljs.core.missing_protocol.call(null,"IDB.-schema",db);
}
}
}
});

datascript.db._attrs_by = (function datascript$db$_attrs_by(db,property){
if((!((db == null))) && (!((db.datascript$db$IDB$_attrs_by$arity$2 == null)))){
return db.datascript$db$IDB$_attrs_by$arity$2(db,property);
} else {
var x__29467__auto__ = (((db == null))?null:db);
var m__29468__auto__ = (datascript.db._attrs_by[goog.typeOf(x__29467__auto__)]);
if(!((m__29468__auto__ == null))){
return m__29468__auto__.call(null,db,property);
} else {
var m__29468__auto____$1 = (datascript.db._attrs_by["_"]);
if(!((m__29468__auto____$1 == null))){
return m__29468__auto____$1.call(null,db,property);
} else {
throw cljs.core.missing_protocol.call(null,"IDB.-attrs-by",db);
}
}
}
});










/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.db.DB = (function (schema,eavt,aevt,avet,max_eid,max_tx,rschema,hash,__meta,__extmap,__hash){
this.schema = schema;
this.eavt = eavt;
this.aevt = aevt;
this.avet = avet;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.rschema = rschema;
this.hash = hash;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.db.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29424__auto__,k__29425__auto__){
var self__ = this;
var this__29424__auto____$1 = this;
return this__29424__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29425__auto__,null);
});

datascript.db.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29426__auto__,k33323,else__29427__auto__){
var self__ = this;
var this__29426__auto____$1 = this;
var G__33325 = (((k33323 instanceof cljs.core.Keyword))?k33323.fqn:null);
switch (G__33325) {
case "schema":
return self__.schema;

break;
case "eavt":
return self__.eavt;

break;
case "aevt":
return self__.aevt;

break;
case "avet":
return self__.avet;

break;
case "max-eid":
return self__.max_eid;

break;
case "max-tx":
return self__.max_tx;

break;
case "rschema":
return self__.rschema;

break;
case "hash":
return self__.hash;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33323,else__29427__auto__);

}
});

datascript.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29438__auto__,writer__29439__auto__,opts__29440__auto__){
var self__ = this;
var this__29438__auto____$1 = this;
var pr_pair__29441__auto__ = ((function (this__29438__auto____$1){
return (function (keyval__29442__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29439__auto__,cljs.core.pr_writer,""," ","",opts__29440__auto__,keyval__29442__auto__);
});})(this__29438__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29439__auto__,pr_pair__29441__auto__,"#datascript.db.DB{",", ","}",opts__29440__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rschema","rschema",-1196134054),self__.rschema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash],null))], null),self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33322){
var self__ = this;
var G__33322__$1 = this;
return (new cljs.core.RecordIter((0),G__33322__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"rschema","rschema",-1196134054),new cljs.core.Keyword(null,"hash","hash",-13781596)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.db.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29422__auto__){
var self__ = this;
var this__29422__auto____$1 = this;
return self__.__meta;
});

datascript.db.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29418__auto__){
var self__ = this;
var this__29418__auto____$1 = this;
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29428__auto__){
var self__ = this;
var this__29428__auto____$1 = this;
return (8 + cljs.core.count.call(null,self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29419__auto__){
var self__ = this;
var this__29419__auto____$1 = this;
var h__29191__auto__ = self__.__hash;
if(!((h__29191__auto__ == null))){
return h__29191__auto__;
} else {
var h__29191__auto____$1 = cljs.core.hash_imap.call(null,this__29419__auto____$1);
self__.__hash = h__29191__auto____$1;

return h__29191__auto____$1;
}
});

datascript.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__29420__auto__,other__29421__auto__){
var self__ = this;
var this__29420__auto____$1 = this;
if(cljs.core.truth_((function (){var and__28737__auto__ = other__29421__auto__;
if(cljs.core.truth_(and__28737__auto__)){
return ((this__29420__auto____$1.constructor === other__29421__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__29420__auto____$1,other__29421__auto__));
} else {
return and__28737__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.db.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29433__auto__,k__29434__auto__){
var self__ = this;
var this__29433__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),null,new cljs.core.Keyword(null,"hash","hash",-13781596),null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),null,new cljs.core.Keyword(null,"avet","avet",1383857032),null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),null], null), null),k__29434__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29433__auto____$1),self__.__meta),k__29434__auto__);
} else {
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29434__auto__)),null));
}
});

datascript.db.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29431__auto__,k__29432__auto__,G__33322){
var self__ = this;
var this__29431__auto____$1 = this;
var pred__33326 = cljs.core.keyword_identical_QMARK_;
var expr__33327 = k__29432__auto__;
if(cljs.core.truth_(pred__33326.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__33327))){
return (new datascript.db.DB(G__33322,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33326.call(null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),expr__33327))){
return (new datascript.db.DB(self__.schema,G__33322,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33326.call(null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),expr__33327))){
return (new datascript.db.DB(self__.schema,self__.eavt,G__33322,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33326.call(null,new cljs.core.Keyword(null,"avet","avet",1383857032),expr__33327))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,G__33322,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33326.call(null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),expr__33327))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__33322,self__.max_tx,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33326.call(null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),expr__33327))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__33322,self__.rschema,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33326.call(null,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),expr__33327))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__33322,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33326.call(null,new cljs.core.Keyword(null,"hash","hash",-13781596),expr__33327))){
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,G__33322,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29432__auto__,G__33322),null));
}
}
}
}
}
}
}
}
});

datascript.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29436__auto__){
var self__ = this;
var this__29436__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rschema","rschema",-1196134054),self__.rschema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash],null))], null),self__.__extmap));
});

datascript.db.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29423__auto__,G__33322){
var self__ = this;
var this__29423__auto____$1 = this;
return (new datascript.db.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.rschema,self__.hash,G__33322,self__.__extmap,self__.__hash));
});

datascript.db.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29429__auto__,entry__29430__auto__){
var self__ = this;
var this__29429__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29430__auto__)){
return this__29429__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29430__auto__,(0)),cljs.core._nth.call(null,entry__29430__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29429__auto____$1,entry__29430__auto__);
}
});

datascript.db.DB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"eavt","eavt",974094454,null),new cljs.core.Symbol(null,"aevt","aevt",1055383468,null),new cljs.core.Symbol(null,"avet","avet",-1270578737,null),new cljs.core.Symbol(null,"max-eid","max-eid",-519567694,null),new cljs.core.Symbol(null,"max-tx","max-tx",-1534877430,null),new cljs.core.Symbol(null,"rschema","rschema",444397473,null),new cljs.core.Symbol(null,"hash","hash",1626749931,null)], null);
});

datascript.db.DB.cljs$lang$type = true;

datascript.db.DB.cljs$lang$ctorPrSeq = (function (this__29460__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.db/DB");
});

datascript.db.DB.cljs$lang$ctorPrWriter = (function (this__29460__auto__,writer__29461__auto__){
return cljs.core._write.call(null,writer__29461__auto__,"datascript.db/DB");
});

datascript.db.__GT_DB = (function datascript$db$__GT_DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema,hash){
return (new datascript.db.DB(schema,eavt,aevt,avet,max_eid,max_tx,rschema,hash,null,null,null));
});

datascript.db.map__GT_DB = (function datascript$db$map__GT_DB(G__33324){
return (new datascript.db.DB(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__33324),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(G__33324),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(G__33324),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(G__33324),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(G__33324),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(G__33324),new cljs.core.Keyword(null,"rschema","rschema",-1196134054).cljs$core$IFn$_invoke$arity$1(G__33324),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(G__33324),null,cljs.core.dissoc.call(null,G__33324,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"rschema","rschema",-1196134054),new cljs.core.Keyword(null,"hash","hash",-13781596)),null));
});


datascript.db.DB.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datascript.db.pr_db.call(null,db__$1,w,opts);
});

datascript.db.DB.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count.call(null,db__$1.eavt);
});

datascript.db.DB.prototype.cljs$core$IReversible$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._rseq.call(null,db__$1.eavt);
});

datascript.db.DB.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.hash_db.call(null,db__$1);
});

datascript.db.DB.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return datascript.db.equiv_db.call(null,db__$1,other);
});

datascript.db.DB.prototype.cljs$core$IEmptyableCollection$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.empty_db.call(null,db__$1.schema);
});

datascript.db.DB.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return cljs.core._seq.call(null,db__$1.eavt);
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.datascript$db$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return datascript.btset.slice.call(null,cljs.core.get.call(null,db__$1,index),datascript.db.components__GT_pattern.call(null,db__$1,index,cs));
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return datascript.btset.slice.call(null,cljs.core.get.call(null,db__$1,index),datascript.db.components__GT_pattern.call(null,db__$1,index,cs),(new datascript.db.Datom(null,null,null,null,null)));
});

datascript.db.DB.prototype.datascript$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
if(cljs.core.truth_(datascript.db.indexing_QMARK_.call(null,db__$1,attr))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Attribute"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,attr))].join(''),"should be marked as :db/index true");
}

datascript.db.validate_attr.call(null,attr,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29683__auto__ = attr;
return cljs.core._conj.call(null,(function (){var x__29683__auto____$1 = start;
return cljs.core._conj.call(null,(function (){var x__29683__auto____$2 = end;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29683__auto____$2);
})(),x__29683__auto____$1);
})(),x__29683__auto__);
})(),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"-index-range","-index-range",898114142,null)));

return datascript.btset.slice.call(null,db__$1.avet,datascript.db.resolve_datom.call(null,db__$1,null,attr,start,null),datascript.db.resolve_datom.call(null,db__$1,null,attr,end,null));
});

datascript.db.DB.prototype.datascript$db$IDB$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.datascript$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return db__$1.schema;
});

datascript.db.DB.prototype.datascript$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return db__$1.rschema.call(null,property);
});

datascript.db.DB.prototype.datascript$db$ISearch$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.DB.prototype.datascript$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
var vec__33329 = pattern;
var e = cljs.core.nth.call(null,vec__33329,(0),null);
var a = cljs.core.nth.call(null,vec__33329,(1),null);
var v = cljs.core.nth.call(null,vec__33329,(2),null);
var tx = cljs.core.nth.call(null,vec__33329,(3),null);
var eavt = db__$1.eavt;
var aevt = db__$1.aevt;
var avet = db__$1.avet;
if(cljs.core.truth_(e)){
if(cljs.core.truth_(a)){
if(!((v == null))){
if(cljs.core.truth_(tx)){
return datascript.btset.slice.call(null,eavt,(new datascript.db.Datom(e,a,v,tx,null)));
} else {
return datascript.btset.slice.call(null,eavt,(new datascript.db.Datom(e,a,v,null,null)));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,eavt,(new datascript.db.Datom(e,a,null,null,null))));
} else {
return datascript.btset.slice.call(null,eavt,(new datascript.db.Datom(e,a,null,null,null)));
}
}
} else {
if(!((v == null))){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return (cljs.core._EQ_.call(null,v,d.v)) && (cljs.core._EQ_.call(null,tx,d.tx));
});})(vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,eavt,(new datascript.db.Datom(e,null,null,null,null))));
} else {
return cljs.core.filter.call(null,((function (vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,v,d.v);
});})(vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,eavt,(new datascript.db.Datom(e,null,null,null,null))));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,eavt,(new datascript.db.Datom(e,null,null,null,null))));
} else {
return datascript.btset.slice.call(null,eavt,(new datascript.db.Datom(e,null,null,null,null)));
}
}
}
} else {
if(cljs.core.truth_(a)){
if(!((v == null))){
if(cljs.core.truth_(tx)){
if(cljs.core.truth_(datascript.db.indexing_QMARK_.call(null,db__$1,a))){
return cljs.core.filter.call(null,((function (vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,avet,(new datascript.db.Datom(null,a,v,null,null))));
} else {
return cljs.core.filter.call(null,((function (vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return (cljs.core._EQ_.call(null,v,d.v)) && (cljs.core._EQ_.call(null,tx,d.tx));
});})(vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,aevt,(new datascript.db.Datom(null,a,null,null,null))));
}
} else {
if(cljs.core.truth_(datascript.db.indexing_QMARK_.call(null,db__$1,a))){
return datascript.btset.slice.call(null,avet,(new datascript.db.Datom(null,a,v,null,null)));
} else {
return cljs.core.filter.call(null,((function (vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,v,d.v);
});})(vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,aevt,(new datascript.db.Datom(null,a,null,null,null))));
}
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1))
,datascript.btset.slice.call(null,aevt,(new datascript.db.Datom(null,a,null,null,null))));
} else {
return datascript.btset.slice.call(null,aevt,(new datascript.db.Datom(null,a,null,null,null)));
}
}
} else {
if(!((v == null))){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return (cljs.core._EQ_.call(null,v,d.v)) && (cljs.core._EQ_.call(null,tx,d.tx));
});})(vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
} else {
return cljs.core.filter.call(null,((function (vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,v,d.v);
});})(vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1){
return (function (d){
return cljs.core._EQ_.call(null,tx,d.tx);
});})(vec__33329,e,a,v,tx,eavt,aevt,avet,db__$1))
,eavt);
} else {
return eavt;
}
}
}
}
});
datascript.db.db_QMARK_ = (function datascript$db$db_QMARK_(x){
var and__28737__auto__ = ((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$ISearch$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.ISearch,x):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.ISearch,x));
if(and__28737__auto__){
var and__28737__auto____$1 = ((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$IIndexAccess$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IIndexAccess,x):false)):cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IIndexAccess,x));
if(and__28737__auto____$1){
if(!((x == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === x.datascript$db$IDB$))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,datascript.db.IDB,x);
}
} else {
return and__28737__auto____$1;
}
} else {
return and__28737__auto__;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.db.FilteredDB = (function (unfiltered_db,pred,hash,__meta,__extmap,__hash){
this.unfiltered_db = unfiltered_db;
this.pred = pred;
this.hash = hash;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29424__auto__,k__29425__auto__){
var self__ = this;
var this__29424__auto____$1 = this;
return this__29424__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29425__auto__,null);
});

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29426__auto__,k33347,else__29427__auto__){
var self__ = this;
var this__29426__auto____$1 = this;
var G__33349 = (((k33347 instanceof cljs.core.Keyword))?k33347.fqn:null);
switch (G__33349) {
case "unfiltered-db":
return self__.unfiltered_db;

break;
case "pred":
return self__.pred;

break;
case "hash":
return self__.hash;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33347,else__29427__auto__);

}
});

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29438__auto__,writer__29439__auto__,opts__29440__auto__){
var self__ = this;
var this__29438__auto____$1 = this;
var pr_pair__29441__auto__ = ((function (this__29438__auto____$1){
return (function (keyval__29442__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29439__auto__,cljs.core.pr_writer,""," ","",opts__29440__auto__,keyval__29442__auto__);
});})(this__29438__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29439__auto__,pr_pair__29441__auto__,"#datascript.db.FilteredDB{",", ","}",opts__29440__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash],null))], null),self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33346){
var self__ = this;
var G__33346__$1 = this;
return (new cljs.core.RecordIter((0),G__33346__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"hash","hash",-13781596)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.db.FilteredDB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29422__auto__){
var self__ = this;
var this__29422__auto____$1 = this;
return self__.__meta;
});

datascript.db.FilteredDB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29418__auto__){
var self__ = this;
var this__29418__auto____$1 = this;
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29428__auto__){
var self__ = this;
var this__29428__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29419__auto__){
var self__ = this;
var this__29419__auto____$1 = this;
var h__29191__auto__ = self__.__hash;
if(!((h__29191__auto__ == null))){
return h__29191__auto__;
} else {
var h__29191__auto____$1 = cljs.core.hash_imap.call(null,this__29419__auto____$1);
self__.__hash = h__29191__auto____$1;

return h__29191__auto____$1;
}
});

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__29420__auto__,other__29421__auto__){
var self__ = this;
var this__29420__auto____$1 = this;
if(cljs.core.truth_((function (){var and__28737__auto__ = other__29421__auto__;
if(cljs.core.truth_(and__28737__auto__)){
return ((this__29420__auto____$1.constructor === other__29421__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__29420__auto____$1,other__29421__auto__));
} else {
return and__28737__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.db.FilteredDB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29433__auto__,k__29434__auto__){
var self__ = this;
var this__29433__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hash","hash",-13781596),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),null], null), null),k__29434__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29433__auto____$1),self__.__meta),k__29434__auto__);
} else {
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29434__auto__)),null));
}
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29431__auto__,k__29432__auto__,G__33346){
var self__ = this;
var this__29431__auto____$1 = this;
var pred__33350 = cljs.core.keyword_identical_QMARK_;
var expr__33351 = k__29432__auto__;
if(cljs.core.truth_(pred__33350.call(null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),expr__33351))){
return (new datascript.db.FilteredDB(G__33346,self__.pred,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33350.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397),expr__33351))){
return (new datascript.db.FilteredDB(self__.unfiltered_db,G__33346,self__.hash,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33350.call(null,new cljs.core.Keyword(null,"hash","hash",-13781596),expr__33351))){
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,G__33346,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29432__auto__,G__33346),null));
}
}
}
});

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29436__auto__){
var self__ = this;
var this__29436__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hash","hash",-13781596),self__.hash],null))], null),self__.__extmap));
});

datascript.db.FilteredDB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29423__auto__,G__33346){
var self__ = this;
var this__29423__auto____$1 = this;
return (new datascript.db.FilteredDB(self__.unfiltered_db,self__.pred,self__.hash,G__33346,self__.__extmap,self__.__hash));
});

datascript.db.FilteredDB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29429__auto__,entry__29430__auto__){
var self__ = this;
var this__29429__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29430__auto__)){
return this__29429__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29430__auto__,(0)),cljs.core._nth.call(null,entry__29430__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29429__auto____$1,entry__29430__auto__);
}
});

datascript.db.FilteredDB.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unfiltered-db","unfiltered-db",276811136,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"hash","hash",1626749931,null)], null);
});

datascript.db.FilteredDB.cljs$lang$type = true;

datascript.db.FilteredDB.cljs$lang$ctorPrSeq = (function (this__29460__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.db/FilteredDB");
});

datascript.db.FilteredDB.cljs$lang$ctorPrWriter = (function (this__29460__auto__,writer__29461__auto__){
return cljs.core._write.call(null,writer__29461__auto__,"datascript.db/FilteredDB");
});

datascript.db.__GT_FilteredDB = (function datascript$db$__GT_FilteredDB(unfiltered_db,pred,hash){
return (new datascript.db.FilteredDB(unfiltered_db,pred,hash,null,null,null));
});

datascript.db.map__GT_FilteredDB = (function datascript$db$map__GT_FilteredDB(G__33348){
return (new datascript.db.FilteredDB(new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391).cljs$core$IFn$_invoke$arity$1(G__33348),new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(G__33348),new cljs.core.Keyword(null,"hash","hash",-13781596).cljs$core$IFn$_invoke$arity$1(G__33348),null,cljs.core.dissoc.call(null,G__33348,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Keyword(null,"hash","hash",-13781596)),null));
});


datascript.db.FilteredDB.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-lookup is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datascript.db.pr_db.call(null,db__$1,w,opts);
});

datascript.db.FilteredDB.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (db){
var db__$1 = this;
return cljs.core.count.call(null,datascript.db._datoms.call(null,db__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
});

datascript.db.FilteredDB.prototype.cljs$core$IHash$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (db){
var db__$1 = this;
return datascript.db.hash_fdb.call(null,db__$1);
});

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (db,other){
var db__$1 = this;
return datascript.db.equiv_db.call(null,db__$1,other);
});

datascript.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var ___$1 = this;
throw (new Error("-empty is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,___$1){
var ___$2 = this;
throw (new Error("-contains-key? is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,___$1,___$2){
var ___$3 = this;
throw (new Error("-assoc is not supported on FilteredDB"));
});

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (db){
var db__$1 = this;
return datascript.db._datoms.call(null,db__$1,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY);
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.db._datoms.call(null,db__$1.unfiltered_db,index,cs));
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_seek_datoms$arity$3 = (function (db,index,cs){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.db._seek_datoms.call(null,db__$1.unfiltered_db,index,cs));
});

datascript.db.FilteredDB.prototype.datascript$db$IIndexAccess$_index_range$arity$4 = (function (db,attr,start,end){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.db._index_range.call(null,db__$1.unfiltered_db,attr,start,end));
});

datascript.db.FilteredDB.prototype.datascript$db$IDB$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.datascript$db$IDB$_schema$arity$1 = (function (db){
var db__$1 = this;
return datascript.db._schema.call(null,db__$1.unfiltered_db);
});

datascript.db.FilteredDB.prototype.datascript$db$IDB$_attrs_by$arity$2 = (function (db,property){
var db__$1 = this;
return datascript.db._attrs_by.call(null,db__$1.unfiltered_db,property);
});

datascript.db.FilteredDB.prototype.datascript$db$ISearch$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.FilteredDB.prototype.datascript$db$ISearch$_search$arity$2 = (function (db,pattern){
var db__$1 = this;
return cljs.core.filter.call(null,db__$1.pred,datascript.db._search.call(null,db__$1.unfiltered_db,pattern));
});
datascript.db.attr__GT_properties = (function datascript$db$attr__GT_properties(k,v){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),true], null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null);
} else {
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);
} else {
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234)], null);
} else {
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);
} else {
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),new cljs.core.Keyword("db","index","db/index",-1531680669)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","index","db/index",-1531680669),true], null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","index","db/index",-1531680669)], null);
} else {
return null;
}
}
}
}
}
}
});
datascript.db.multimap = (function datascript$db$multimap(e,m){
return cljs.core.reduce.call(null,(function (acc,p__33358){
var vec__33359 = p__33358;
var k = cljs.core.nth.call(null,vec__33359,(0),null);
var v = cljs.core.nth.call(null,vec__33359,(1),null);
return cljs.core.update_in.call(null,acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.fnil.call(null,cljs.core.conj,e),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
datascript.db.rschema = (function datascript$db$rschema(schema){
return datascript.db.multimap.call(null,cljs.core.PersistentHashSet.EMPTY,(function (){var iter__29611__auto__ = (function datascript$db$rschema_$_iter__33388(s__33389){
return (new cljs.core.LazySeq(null,(function (){
var s__33389__$1 = s__33389;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__33389__$1);
if(temp__6738__auto__){
var xs__7294__auto__ = temp__6738__auto__;
var vec__33405 = cljs.core.first.call(null,xs__7294__auto__);
var a = cljs.core.nth.call(null,vec__33405,(0),null);
var kv = cljs.core.nth.call(null,vec__33405,(1),null);
var iterys__29607__auto__ = ((function (s__33389__$1,vec__33405,a,kv,xs__7294__auto__,temp__6738__auto__){
return (function datascript$db$rschema_$_iter__33388_$_iter__33390(s__33391){
return (new cljs.core.LazySeq(null,((function (s__33389__$1,vec__33405,a,kv,xs__7294__auto__,temp__6738__auto__){
return (function (){
var s__33391__$1 = s__33391;
while(true){
var temp__6738__auto____$1 = cljs.core.seq.call(null,s__33391__$1);
if(temp__6738__auto____$1){
var xs__7294__auto____$1 = temp__6738__auto____$1;
var vec__33411 = cljs.core.first.call(null,xs__7294__auto____$1);
var k = cljs.core.nth.call(null,vec__33411,(0),null);
var v = cljs.core.nth.call(null,vec__33411,(1),null);
var iterys__29607__auto__ = ((function (s__33391__$1,s__33389__$1,vec__33411,k,v,xs__7294__auto____$1,temp__6738__auto____$1,vec__33405,a,kv,xs__7294__auto__,temp__6738__auto__){
return (function datascript$db$rschema_$_iter__33388_$_iter__33390_$_iter__33392(s__33393){
return (new cljs.core.LazySeq(null,((function (s__33391__$1,s__33389__$1,vec__33411,k,v,xs__7294__auto____$1,temp__6738__auto____$1,vec__33405,a,kv,xs__7294__auto__,temp__6738__auto__){
return (function (){
var s__33393__$1 = s__33393;
while(true){
var temp__6738__auto____$2 = cljs.core.seq.call(null,s__33393__$1);
if(temp__6738__auto____$2){
var s__33393__$2 = temp__6738__auto____$2;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33393__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__33393__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__33395 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__33394 = (0);
while(true){
if((i__33394 < size__29610__auto__)){
var prop = cljs.core._nth.call(null,c__29609__auto__,i__33394);
cljs.core.chunk_append.call(null,b__33395,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,a], null));

var G__33414 = (i__33394 + (1));
i__33394 = G__33414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33395),datascript$db$rschema_$_iter__33388_$_iter__33390_$_iter__33392.call(null,cljs.core.chunk_rest.call(null,s__33393__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33395),null);
}
} else {
var prop = cljs.core.first.call(null,s__33393__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prop,a], null),datascript$db$rschema_$_iter__33388_$_iter__33390_$_iter__33392.call(null,cljs.core.rest.call(null,s__33393__$2)));
}
} else {
return null;
}
break;
}
});})(s__33391__$1,s__33389__$1,vec__33411,k,v,xs__7294__auto____$1,temp__6738__auto____$1,vec__33405,a,kv,xs__7294__auto__,temp__6738__auto__))
,null,null));
});})(s__33391__$1,s__33389__$1,vec__33411,k,v,xs__7294__auto____$1,temp__6738__auto____$1,vec__33405,a,kv,xs__7294__auto__,temp__6738__auto__))
;
var fs__29608__auto__ = cljs.core.seq.call(null,iterys__29607__auto__.call(null,datascript.db.attr__GT_properties.call(null,k,v)));
if(fs__29608__auto__){
return cljs.core.concat.call(null,fs__29608__auto__,datascript$db$rschema_$_iter__33388_$_iter__33390.call(null,cljs.core.rest.call(null,s__33391__$1)));
} else {
var G__33415 = cljs.core.rest.call(null,s__33391__$1);
s__33391__$1 = G__33415;
continue;
}
} else {
return null;
}
break;
}
});})(s__33389__$1,vec__33405,a,kv,xs__7294__auto__,temp__6738__auto__))
,null,null));
});})(s__33389__$1,vec__33405,a,kv,xs__7294__auto__,temp__6738__auto__))
;
var fs__29608__auto__ = cljs.core.seq.call(null,iterys__29607__auto__.call(null,kv));
if(fs__29608__auto__){
return cljs.core.concat.call(null,fs__29608__auto__,datascript$db$rschema_$_iter__33388.call(null,cljs.core.rest.call(null,s__33389__$1)));
} else {
var G__33416 = cljs.core.rest.call(null,s__33389__$1);
s__33389__$1 = G__33416;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29611__auto__.call(null,schema);
})());
});
datascript.db.validate_schema_key = (function datascript$db$validate_schema_key(a,k,v,expected){
if(((v == null)) || (cljs.core.contains_QMARK_.call(null,expected,v))){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad attribute specification for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([a,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v])]))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected one of "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(expected)].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"value","value",305978217),v], null));
}
});
datascript.db.validate_schema = (function datascript$db$validate_schema(schema){
var seq__33427_33437 = cljs.core.seq.call(null,schema);
var chunk__33428_33438 = null;
var count__33429_33439 = (0);
var i__33430_33440 = (0);
while(true){
if((i__33430_33440 < count__33429_33439)){
var vec__33431_33441 = cljs.core._nth.call(null,chunk__33428_33438,i__33430_33440);
var a_33442 = cljs.core.nth.call(null,vec__33431_33441,(0),null);
var kv_33443 = cljs.core.nth.call(null,vec__33431_33441,(1),null);
var comp_QMARK__33444 = new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$2(kv_33443,false);
datascript.db.validate_schema_key.call(null,a_33442,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$1(kv_33443),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__28737__auto__ = comp_QMARK__33444;
if(cljs.core.truth_(and__28737__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_33443),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
} else {
return and__28737__auto__;
}
})())){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad attribute specification for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_33442),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": {:db/isComponent true} should also have {:db/valueType :db.type/ref}")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a_33442,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null));
} else {
}

datascript.db.validate_schema_key.call(null,a_33442,new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","unique","db/unique",329396388).cljs$core$IFn$_invoke$arity$1(kv_33443),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),null,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),null], null), null));

datascript.db.validate_schema_key.call(null,a_33442,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_33443),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),null], null), null));

datascript.db.validate_schema_key.call(null,a_33442,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv_33443),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),null,new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),null], null), null));

var G__33445 = seq__33427_33437;
var G__33446 = chunk__33428_33438;
var G__33447 = count__33429_33439;
var G__33448 = (i__33430_33440 + (1));
seq__33427_33437 = G__33445;
chunk__33428_33438 = G__33446;
count__33429_33439 = G__33447;
i__33430_33440 = G__33448;
continue;
} else {
var temp__6738__auto___33449 = cljs.core.seq.call(null,seq__33427_33437);
if(temp__6738__auto___33449){
var seq__33427_33450__$1 = temp__6738__auto___33449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33427_33450__$1)){
var c__29660__auto___33451 = cljs.core.chunk_first.call(null,seq__33427_33450__$1);
var G__33452 = cljs.core.chunk_rest.call(null,seq__33427_33450__$1);
var G__33453 = c__29660__auto___33451;
var G__33454 = cljs.core.count.call(null,c__29660__auto___33451);
var G__33455 = (0);
seq__33427_33437 = G__33452;
chunk__33428_33438 = G__33453;
count__33429_33439 = G__33454;
i__33430_33440 = G__33455;
continue;
} else {
var vec__33434_33456 = cljs.core.first.call(null,seq__33427_33450__$1);
var a_33457 = cljs.core.nth.call(null,vec__33434_33456,(0),null);
var kv_33458 = cljs.core.nth.call(null,vec__33434_33456,(1),null);
var comp_QMARK__33459 = new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$2(kv_33458,false);
datascript.db.validate_schema_key.call(null,a_33457,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398).cljs$core$IFn$_invoke$arity$1(kv_33458),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [true,null,false,null], null), null));

if(cljs.core.truth_((function (){var and__28737__auto__ = comp_QMARK__33459;
if(cljs.core.truth_(and__28737__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_33458),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
} else {
return and__28737__auto__;
}
})())){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad attribute specification for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a_33457),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": {:db/isComponent true} should also have {:db/valueType :db.type/ref}")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("schema","validation","schema/validation",1178447161),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a_33457,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword("db","isComponent","db/isComponent",423352398)], null));
} else {
}

datascript.db.validate_schema_key.call(null,a_33457,new cljs.core.Keyword("db","unique","db/unique",329396388),new cljs.core.Keyword("db","unique","db/unique",329396388).cljs$core$IFn$_invoke$arity$1(kv_33458),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722),null,new cljs.core.Keyword("db.unique","value","db.unique/value",276903088),null], null), null));

datascript.db.validate_schema_key.call(null,a_33457,new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(kv_33458),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079),null], null), null));

datascript.db.validate_schema_key.call(null,a_33457,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659),new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659).cljs$core$IFn$_invoke$arity$1(kv_33458),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234),null,new cljs.core.Keyword("db.cardinality","one","db.cardinality/one",1428352190),null], null), null));

var G__33460 = cljs.core.next.call(null,seq__33427_33450__$1);
var G__33461 = null;
var G__33462 = (0);
var G__33463 = (0);
seq__33427_33437 = G__33460;
chunk__33428_33438 = G__33461;
count__33429_33439 = G__33462;
i__33430_33440 = G__33463;
continue;
}
} else {
}
}
break;
}

return schema;
});
datascript.db.empty_db = (function datascript$db$empty_db(var_args){
var args33464 = [];
var len__29970__auto___33467 = arguments.length;
var i__29971__auto___33468 = (0);
while(true){
if((i__29971__auto___33468 < len__29970__auto___33467)){
args33464.push((arguments[i__29971__auto___33468]));

var G__33469 = (i__29971__auto___33468 + (1));
i__29971__auto___33468 = G__33469;
continue;
} else {
}
break;
}

var G__33466 = args33464.length;
switch (G__33466) {
case 0:
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33464.length)].join('')));

}
});

datascript.db.empty_db.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.db.empty_db.call(null,datascript.db.default_schema);
});

datascript.db.empty_db.cljs$core$IFn$_invoke$arity$1 = (function (schema){
if(((schema == null)) || (cljs.core.map_QMARK_.call(null,schema))){
} else {
throw (new Error("Assert failed: (or (nil? schema) (map? schema))"));
}

return datascript.db.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"schema","schema",-1582001791),datascript.db.validate_schema.call(null,schema),new cljs.core.Keyword(null,"eavt","eavt",-666437073),datascript.btset.btset_by.call(null,datascript.db.cmp_datoms_eavt),new cljs.core.Keyword(null,"aevt","aevt",-585148059),datascript.btset.btset_by.call(null,datascript.db.cmp_datoms_aevt),new cljs.core.Keyword(null,"avet","avet",1383857032),datascript.btset.btset_by.call(null,datascript.db.cmp_datoms_avet),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),(0),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),datascript.db.tx0,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),datascript.db.rschema.call(null,schema),new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.atom.call(null,(0))], null));
});

datascript.db.empty_db.cljs$lang$maxFixedArity = 1;

datascript.db.init_max_eid = (function datascript$db$init_max_eid(eavt){
var temp__6736__auto__ = datascript.btset.slice.call(null,eavt,(new datascript.db.Datom(null,null,null,null,null)),(new datascript.db.Datom((datascript.db.tx0 - (1)),null,null,null,null)));
if(cljs.core.truth_(temp__6736__auto__)){
var slice = temp__6736__auto__;
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.rseq.call(null,slice)));
} else {
return (0);
}
});
datascript.db.init_db = (function datascript$db$init_db(var_args){
var args33471 = [];
var len__29970__auto___33474 = arguments.length;
var i__29971__auto___33475 = (0);
while(true){
if((i__29971__auto___33475 < len__29970__auto___33474)){
args33471.push((arguments[i__29971__auto___33475]));

var G__33476 = (i__29971__auto___33475 + (1));
i__29971__auto___33475 = G__33476;
continue;
} else {
}
break;
}

var G__33473 = args33471.length;
switch (G__33473) {
case 1:
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.db.init_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33471.length)].join('')));

}
});

datascript.db.init_db.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.db.init_db.call(null,datoms,datascript.db.default_schema);
});

datascript.db.init_db.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
if(cljs.core.empty_QMARK_.call(null,datoms)){
return datascript.db.empty_db.call(null,schema);
} else {
var _ = datascript.db.validate_schema.call(null,schema);
var rschema = datascript.db.rschema.call(null,schema);
var indexed = new cljs.core.Keyword("db","index","db/index",-1531680669).cljs$core$IFn$_invoke$arity$1(rschema);
var ds_arr = datascript.arrays.into_array.call(null,datoms);
var eavt = datascript.btset._btset_from_sorted_arr.call(null,ds_arr.sort(datascript.db.cmp_datoms_eavt_quick),datascript.db.cmp_datoms_eavt);
var aevt = datascript.btset._btset_from_sorted_arr.call(null,ds_arr.sort(datascript.db.cmp_datoms_aevt_quick),datascript.db.cmp_datoms_aevt);
var avet_datoms = cljs.core.reduce.call(null,((function (_,rschema,indexed,ds_arr,eavt,aevt){
return (function (arr,d){
if(cljs.core.contains_QMARK_.call(null,indexed,d.a)){
arr.push(d);
} else {
}

return arr;
});})(_,rschema,indexed,ds_arr,eavt,aevt))
,[],datoms).sort(datascript.db.cmp_datoms_avet_quick);
var avet = datascript.btset._btset_from_sorted_arr.call(null,avet_datoms,datascript.db.cmp_datoms_avet);
var max_eid = datascript.db.init_max_eid.call(null,eavt);
var max_tx = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (_,rschema,indexed,ds_arr,eavt,aevt,avet_datoms,avet,max_eid){
return (function (d){
return d.tx;
});})(_,rschema,indexed,ds_arr,eavt,aevt,avet_datoms,avet,max_eid))
),cljs.core.max,datascript.db.tx0,eavt);
return datascript.db.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"eavt","eavt",-666437073),eavt,new cljs.core.Keyword(null,"aevt","aevt",-585148059),aevt,new cljs.core.Keyword(null,"avet","avet",1383857032),avet,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),max_eid,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),max_tx,new cljs.core.Keyword(null,"rschema","rschema",-1196134054),rschema,new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.atom.call(null,(0))], null));
}
});

datascript.db.init_db.cljs$lang$maxFixedArity = 2;

datascript.db.equiv_db_index = (function datascript$db$equiv_db_index(x,y){
var xs = cljs.core.seq.call(null,x);
var ys = cljs.core.seq.call(null,y);
while(true){
if((xs == null)){
return (ys == null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys))){
var G__33478 = cljs.core.next.call(null,xs);
var G__33479 = cljs.core.next.call(null,ys);
xs = G__33478;
ys = G__33479;
continue;
} else {
return false;

}
}
break;
}
});
datascript.db.hash_db = (function datascript$db$hash_db(db){
var h = cljs.core.deref.call(null,db.hash);
if((h === (0))){
return cljs.core.reset_BANG_.call(null,db.hash,datascript.db.combine_hashes.call(null,cljs.core.hash.call(null,db.schema),cljs.core.hash.call(null,db.eavt)));
} else {
return h;
}
});
datascript.db.hash_fdb = (function datascript$db$hash_fdb(db){
var h = cljs.core.deref.call(null,db.hash);
var datoms = (function (){var or__28749__auto__ = datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if((h === (0))){
var datoms__$1 = (function (){var or__28749__auto__ = datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
return cljs.core.reset_BANG_.call(null,db.hash,datascript.db.combine_hashes.call(null,cljs.core.hash.call(null,datascript.db._schema.call(null,db)),cljs.core.hash_unordered_coll.call(null,datoms__$1)));
} else {
return h;
}
});
datascript.db.equiv_db = (function datascript$db$equiv_db(db,other){
var and__28737__auto__ = ((other instanceof datascript.db.DB)) || ((other instanceof datascript.db.FilteredDB));
if(and__28737__auto__){
var and__28737__auto____$1 = cljs.core._EQ_.call(null,datascript.db._schema.call(null,db),datascript.db._schema.call(null,other));
if(and__28737__auto____$1){
return datascript.db.equiv_db_index.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY),datascript.db._datoms.call(null,other,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
} else {
return and__28737__auto____$1;
}
} else {
return and__28737__auto__;
}
});
datascript.db.pr_db = (function datascript$db$pr_db(db,w,opts){
cljs.core._write.call(null,w,"#datascript/DB {");

cljs.core._write.call(null,w,":schema ");

cljs.core.pr_writer.call(null,datascript.db._schema.call(null,db),w,opts);

cljs.core._write.call(null,w,", :datoms ");

cljs.core.pr_sequential_writer.call(null,w,(function (d,w__$1,opts__$1){
return cljs.core.pr_sequential_writer.call(null,w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,d.tx], null));
}),"["," ","]",opts,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));

return cljs.core._write.call(null,w,"}");
});
datascript.db.db_from_reader = (function datascript$db$db_from_reader(p__33480){
var map__33487 = p__33480;
var map__33487__$1 = ((((!((map__33487 == null)))?((((map__33487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33487):map__33487);
var schema = cljs.core.get.call(null,map__33487__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var datoms = cljs.core.get.call(null,map__33487__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
return datascript.db.init_db.call(null,cljs.core.map.call(null,((function (map__33487,map__33487__$1,schema,datoms){
return (function (p__33489){
var vec__33490 = p__33489;
var e = cljs.core.nth.call(null,vec__33490,(0),null);
var a = cljs.core.nth.call(null,vec__33490,(1),null);
var v = cljs.core.nth.call(null,vec__33490,(2),null);
var tx = cljs.core.nth.call(null,vec__33490,(3),null);
return (new datascript.db.Datom(e,a,v,tx,true));
});})(map__33487,map__33487__$1,schema,datoms))
,datoms),schema);
});


datascript.db.resolve_datom = (function datascript$db$resolve_datom(db,e,a,v,t){
if(cljs.core.truth_(a)){
datascript.db.validate_attr.call(null,a,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__29683__auto__ = e;
return cljs.core._conj.call(null,(function (){var x__29683__auto____$1 = a;
return cljs.core._conj.call(null,(function (){var x__29683__auto____$2 = v;
return cljs.core._conj.call(null,(function (){var x__29683__auto____$3 = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__29683__auto____$3);
})(),x__29683__auto____$2);
})(),x__29683__auto____$1);
})(),x__29683__auto__);
})(),new cljs.core.Symbol(null,"db","db",-1661185010,null)),new cljs.core.Symbol(null,"resolve-datom","resolve-datom",-294110827,null)));
} else {
}

return (new datascript.db.Datom(datascript.db.entid_some.call(null,db,e),a,(cljs.core.truth_((function (){var and__28737__auto__ = !((v == null));
if(and__28737__auto__){
return datascript.db.ref_QMARK_.call(null,db,a);
} else {
return and__28737__auto__;
}
})())?datascript.db.entid_strict.call(null,db,v):v),datascript.db.entid_some.call(null,db,t),null));
});
datascript.db.components__GT_pattern = (function datascript$db$components__GT_pattern(db,index,p__33493){
var vec__33498 = p__33493;
var c0 = cljs.core.nth.call(null,vec__33498,(0),null);
var c1 = cljs.core.nth.call(null,vec__33498,(1),null);
var c2 = cljs.core.nth.call(null,vec__33498,(2),null);
var c3 = cljs.core.nth.call(null,vec__33498,(3),null);
var G__33501 = (((index instanceof cljs.core.Keyword))?index.fqn:null);
switch (G__33501) {
case "eavt":
return datascript.db.resolve_datom.call(null,db,c0,c1,c2,c3);

break;
case "aevt":
return datascript.db.resolve_datom.call(null,db,c1,c0,c2,c3);

break;
case "avet":
return datascript.db.resolve_datom.call(null,db,c2,c0,c1,c3);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')));

}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
datascript.db.TxReport = (function (db_before,db_after,tx_data,tempids,tx_meta,__meta,__extmap,__hash){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.tx_meta = tx_meta;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__29424__auto__,k__29425__auto__){
var self__ = this;
var this__29424__auto____$1 = this;
return this__29424__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__29425__auto__,null);
});

datascript.db.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__29426__auto__,k33504,else__29427__auto__){
var self__ = this;
var this__29426__auto____$1 = this;
var G__33506 = (((k33504 instanceof cljs.core.Keyword))?k33504.fqn:null);
switch (G__33506) {
case "db-before":
return self__.db_before;

break;
case "db-after":
return self__.db_after;

break;
case "tx-data":
return self__.tx_data;

break;
case "tempids":
return self__.tempids;

break;
case "tx-meta":
return self__.tx_meta;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33504,else__29427__auto__);

}
});

datascript.db.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__29438__auto__,writer__29439__auto__,opts__29440__auto__){
var self__ = this;
var this__29438__auto____$1 = this;
var pr_pair__29441__auto__ = ((function (this__29438__auto____$1){
return (function (keyval__29442__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__29439__auto__,cljs.core.pr_writer,""," ","",opts__29440__auto__,keyval__29442__auto__);
});})(this__29438__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__29439__auto__,pr_pair__29441__auto__,"#datascript.db.TxReport{",", ","}",opts__29440__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

datascript.db.TxReport.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33503){
var self__ = this;
var G__33503__$1 = this;
return (new cljs.core.RecordIter((0),G__33503__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

datascript.db.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__29422__auto__){
var self__ = this;
var this__29422__auto____$1 = this;
return self__.__meta;
});

datascript.db.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__29418__auto__){
var self__ = this;
var this__29418__auto____$1 = this;
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.db.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__29428__auto__){
var self__ = this;
var this__29428__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__29419__auto__){
var self__ = this;
var this__29419__auto____$1 = this;
var h__29191__auto__ = self__.__hash;
if(!((h__29191__auto__ == null))){
return h__29191__auto__;
} else {
var h__29191__auto____$1 = cljs.core.hash_imap.call(null,this__29419__auto____$1);
self__.__hash = h__29191__auto____$1;

return h__29191__auto____$1;
}
});

datascript.db.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__29420__auto__,other__29421__auto__){
var self__ = this;
var this__29420__auto____$1 = this;
if(cljs.core.truth_((function (){var and__28737__auto__ = other__29421__auto__;
if(cljs.core.truth_(and__28737__auto__)){
return ((this__29420__auto____$1.constructor === other__29421__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__29420__auto____$1,other__29421__auto__));
} else {
return and__28737__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.db.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__29433__auto__,k__29434__auto__){
var self__ = this;
var this__29433__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),null], null), null),k__29434__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__29433__auto____$1),self__.__meta),k__29434__auto__);
} else {
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__29434__auto__)),null));
}
});

datascript.db.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__29431__auto__,k__29432__auto__,G__33503){
var self__ = this;
var this__29431__auto____$1 = this;
var pred__33507 = cljs.core.keyword_identical_QMARK_;
var expr__33508 = k__29432__auto__;
if(cljs.core.truth_(pred__33507.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),expr__33508))){
return (new datascript.db.TxReport(G__33503,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33507.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),expr__33508))){
return (new datascript.db.TxReport(self__.db_before,G__33503,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33507.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),expr__33508))){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,G__33503,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33507.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),expr__33508))){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__33503,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33507.call(null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),expr__33508))){
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__33503,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__29432__auto__,G__33503),null));
}
}
}
}
}
});

datascript.db.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__29436__auto__){
var self__ = this;
var this__29436__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});

datascript.db.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__29423__auto__,G__33503){
var self__ = this;
var this__29423__auto____$1 = this;
return (new datascript.db.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,G__33503,self__.__extmap,self__.__hash));
});

datascript.db.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__29429__auto__,entry__29430__auto__){
var self__ = this;
var this__29429__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__29430__auto__)){
return this__29429__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__29430__auto__,(0)),cljs.core._nth.call(null,entry__29430__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__29429__auto____$1,entry__29430__auto__);
}
});

datascript.db.TxReport.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db-before","db-before",1086839991,null),new cljs.core.Symbol(null,"db-after","db-after",1068646861,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tempids","tempids",-886926680,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null)], null);
});

datascript.db.TxReport.cljs$lang$type = true;

datascript.db.TxReport.cljs$lang$ctorPrSeq = (function (this__29460__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.db/TxReport");
});

datascript.db.TxReport.cljs$lang$ctorPrWriter = (function (this__29460__auto__,writer__29461__auto__){
return cljs.core._write.call(null,writer__29461__auto__,"datascript.db/TxReport");
});

datascript.db.__GT_TxReport = (function datascript$db$__GT_TxReport(db_before,db_after,tx_data,tempids,tx_meta){
return (new datascript.db.TxReport(db_before,db_after,tx_data,tempids,tx_meta,null,null,null));
});

datascript.db.map__GT_TxReport = (function datascript$db$map__GT_TxReport(G__33505){
return (new datascript.db.TxReport(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(G__33505),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(G__33505),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(G__33505),new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(G__33505),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(G__33505),null,cljs.core.dissoc.call(null,G__33505,new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194)),null));
});

datascript.db.is_attr_QMARK_ = (function datascript$db$is_attr_QMARK_(db,attr,property){
return cljs.core.contains_QMARK_.call(null,datascript.db._attrs_by.call(null,db,property),attr);
});
datascript.db.multival_QMARK_ = (function datascript$db$multival_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
datascript.db.ref_QMARK_ = (function datascript$db$ref_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
datascript.db.component_QMARK_ = (function datascript$db$component_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db","isComponent","db/isComponent",423352398));
});
datascript.db.indexing_QMARK_ = (function datascript$db$indexing_QMARK_(db,attr){
return datascript.db.is_attr_QMARK_.call(null,db,attr,new cljs.core.Keyword("db","index","db/index",-1531680669));
});
datascript.db.entid = (function datascript$db$entid(db,eid){
while(true){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db? db)"));
}

if(typeof eid === 'number'){
return eid;
} else {
if(cljs.core.sequential_QMARK_.call(null,eid)){
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,eid),(2))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Lookup ref should contain 2 elements: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("lookup-ref","syntax","lookup-ref/syntax",-317304012),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
} else {
if(!(datascript.db.is_attr_QMARK_.call(null,db,cljs.core.first.call(null,eid),new cljs.core.Keyword("db","unique","db/unique",329396388)))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Lookup ref attribute should be marked as :db/unique: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("lookup-ref","unique","lookup-ref/unique",-960647710),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
} else {
if((cljs.core.second.call(null,eid) == null)){
return null;
} else {
return new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),eid)));

}
}
}
} else {
if(cljs.core.array_QMARK_.call(null,eid)){
var G__33511 = db;
var G__33512 = cljs.core.array_seq.call(null,eid);
db = G__33511;
eid = G__33512;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expected number or lookup ref for entity id, got "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","syntax","entity-id/syntax",1921317045),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));

}
}
}
break;
}
});
datascript.db.entid_strict = (function datascript$db$entid_strict(db,eid){
var or__28749__auto__ = datascript.db.entid.call(null,db,eid);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Nothing found for entity id "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","missing","entity-id/missing",1234588374),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid], null));
}
});
datascript.db.entid_some = (function datascript$db$entid_some(db,eid){
if(cljs.core.truth_(eid)){
return datascript.db.entid_strict.call(null,db,eid);
} else {
return null;
}
});
datascript.db.validate_datom = (function datascript$db$validate_datom(db,datom){
if(cljs.core.truth_((function (){var and__28737__auto__ = datom.added;
if(cljs.core.truth_(and__28737__auto__)){
return datascript.db.is_attr_QMARK_.call(null,db,datom.a,new cljs.core.Keyword("db","unique","db/unique",329396388));
} else {
return and__28737__auto__;
}
})())){
var temp__6738__auto__ = cljs.core.not_empty.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.a,datom.v], null)));
if(cljs.core.truth_(temp__6738__auto__)){
var found = temp__6738__auto__;
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot add "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,datom)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" because of unique constraint: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,found))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","unique","transact/unique",-940992320),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),datom.a,new cljs.core.Keyword(null,"datom","datom",-371556090),datom], null));
} else {
return null;
}
} else {
return null;
}
});
datascript.db.validate_eid = (function datascript$db$validate_eid(eid,at){
if(typeof eid === 'number'){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad entity id "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,eid)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,at)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected number")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"entity-id","entity-id",1485898093),eid,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
}
});
datascript.db.validate_attr = (function datascript$db$validate_attr(attr,at){
if(((attr instanceof cljs.core.Keyword)) || (typeof attr === 'string')){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad entity attribute "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,at)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
}
});
datascript.db.validate_val = (function datascript$db$validate_val(v,at){
if((v == null)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Cannot store nil as a value at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,at))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"context","context",-830191113),at], null));
} else {
return null;
}
});
datascript.db.current_tx = (function datascript$db$current_tx(report){
return (cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null)) + (1));
});
datascript.db.next_eid = (function datascript$db$next_eid(db){
return (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.db.tx_id_QMARK_ = (function datascript$db$tx_id_QMARK_(e){
return (cljs.core._EQ_.call(null,e,new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132))) || (cljs.core._EQ_.call(null,e,":db/current-tx"));
});
datascript.db.advance_max_eid = (function datascript$db$advance_max_eid(db,eid){
var G__33514 = db;
if(((eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db))) && ((eid < datascript.db.tx0))){
return cljs.core.assoc.call(null,G__33514,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),eid);
} else {
return G__33514;
}
});
datascript.db.allocate_eid = (function datascript$db$allocate_eid(var_args){
var args33515 = [];
var len__29970__auto___33519 = arguments.length;
var i__29971__auto___33520 = (0);
while(true){
if((i__29971__auto___33520 < len__29970__auto___33519)){
args33515.push((arguments[i__29971__auto___33520]));

var G__33521 = (i__29971__auto___33520 + (1));
i__29971__auto___33520 = G__33521;
continue;
} else {
}
break;
}

var G__33517 = args33515.length;
switch (G__33517) {
case 2:
return datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args33515.length)].join('')));

}
});

datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$2 = (function (report,eid){
return cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.db.advance_max_eid,eid);
});

datascript.db.allocate_eid.cljs$core$IFn$_invoke$arity$3 = (function (report,e,eid){
var G__33518 = report;
var G__33518__$1 = ((datascript.db.neg_number_QMARK_.call(null,e))?cljs.core.assoc_in.call(null,G__33518,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null),eid):G__33518);
var G__33518__$2 = ((datascript.db.tx_id_QMARK_.call(null,e))?cljs.core.assoc_in.call(null,G__33518__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null),eid):G__33518__$1);
return cljs.core.update_in.call(null,G__33518__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.db.advance_max_eid,eid);

});

datascript.db.allocate_eid.cljs$lang$maxFixedArity = 3;

datascript.db.with_datom = (function datascript$db$with_datom(db,datom){
datascript.db.validate_datom.call(null,db,datom);

var indexing_QMARK_ = datascript.db.indexing_QMARK_.call(null,db,datom.a);
if(cljs.core.truth_(datom.added)){
var G__33525 = db;
var G__33525__$1 = cljs.core.update_in.call(null,G__33525,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),datascript.btset.btset_conj,datom,datascript.db.cmp_datoms_eavt_quick)
;
var G__33525__$2 = cljs.core.update_in.call(null,G__33525__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),datascript.btset.btset_conj,datom,datascript.db.cmp_datoms_aevt_quick)
;
var G__33525__$3 = ((indexing_QMARK_)?cljs.core.update_in.call(null,G__33525__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),datascript.btset.btset_conj,datom,datascript.db.cmp_datoms_avet_quick):G__33525__$2);
var G__33525__$4 = datascript.db.advance_max_eid.call(null,G__33525__$3,datom.e)
;
return cljs.core.assoc.call(null,G__33525__$4,new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.atom.call(null,(0)));

} else {
var temp__6736__auto__ = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v], null)));
if(cljs.core.truth_(temp__6736__auto__)){
var removing = temp__6736__auto__;
var G__33526 = db;
var G__33526__$1 = cljs.core.update_in.call(null,G__33526,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),datascript.btset.btset_disj,removing,datascript.db.cmp_datoms_eavt_quick)
;
var G__33526__$2 = cljs.core.update_in.call(null,G__33526__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),datascript.btset.btset_disj,removing,datascript.db.cmp_datoms_aevt_quick)
;
var G__33526__$3 = ((indexing_QMARK_)?cljs.core.update_in.call(null,G__33526__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),datascript.btset.btset_disj,removing,datascript.db.cmp_datoms_avet_quick):G__33526__$2);
return cljs.core.assoc.call(null,G__33526__$3,new cljs.core.Keyword(null,"hash","hash",-13781596),cljs.core.atom.call(null,(0)));

} else {
return db;
}
}
});
datascript.db.transact_report = (function datascript$db$transact_report(report,datom){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.db.with_datom,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761)], null),cljs.core.conj,datom);
});
datascript.db.reverse_ref_QMARK_ = (function datascript$db$reverse_ref_QMARK_(attr){
if((attr instanceof cljs.core.Keyword)){
return cljs.core._EQ_.call(null,"_",cljs.core.nth.call(null,cljs.core.name.call(null,attr),(0)));
} else {
if(typeof attr === 'string'){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/(?:([^\/]+)\/)?_([^\/]+)/,attr));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad attribute type: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr], null));

}
}
});
datascript.db.reverse_ref = (function datascript$db$reverse_ref(attr){
if((attr instanceof cljs.core.Keyword)){
if(datascript.db.reverse_ref_QMARK_.call(null,attr)){
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,attr),cljs.core.subs.call(null,cljs.core.name.call(null,attr),(1)));
} else {
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,attr),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,attr))].join(''));
}
} else {
if(typeof attr === 'string'){
var vec__33530 = cljs.core.re_matches.call(null,/(?:([^\/]+)\/)?([^\/]+)/,attr);
var _ = cljs.core.nth.call(null,vec__33530,(0),null);
var ns = cljs.core.nth.call(null,vec__33530,(1),null);
var name = cljs.core.nth.call(null,vec__33530,(2),null);
if(cljs.core._EQ_.call(null,"_",cljs.core.nth.call(null,name,(0)))){
if(cljs.core.truth_(ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,name,(1)))].join('');
} else {
return cljs.core.subs.call(null,name,(1));
}
} else {
if(cljs.core.truth_(ns)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
}
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad attribute type: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,attr)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected keyword or string")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),attr], null));

}
}
});
datascript.db.check_upsert_conflict = (function datascript$db$check_upsert_conflict(entity,acc){
var vec__33536 = acc;
var e = cljs.core.nth.call(null,vec__33536,(0),null);
var a = cljs.core.nth.call(null,vec__33536,(1),null);
var v = cljs.core.nth.call(null,vec__33536,(2),null);
var _e = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
if(((_e == null)) || ((_e < (0))) || ((acc == null)) || ((_e === e))){
return acc;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Conflicting upsert: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" resolves to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", but entity already has :db/id "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,_e))].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078),new cljs.core.Keyword(null,"entity","entity",-450970276),entity,new cljs.core.Keyword(null,"assertion","assertion",-1645134882),acc], null));
}
});
datascript.db.upsert_eid = (function datascript$db$upsert_eid(db,entity){
var temp__6738__auto__ = cljs.core.not_empty.call(null,datascript.db._attrs_by.call(null,db,new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)));
if(cljs.core.truth_(temp__6738__auto__)){
var idents = temp__6738__auto__;
return cljs.core.first.call(null,datascript.db.check_upsert_conflict.call(null,entity,cljs.core.reduce_kv.call(null,((function (idents,temp__6738__auto__){
return (function (acc,a,v){
if(cljs.core.contains_QMARK_.call(null,idents,a)){
var temp__6736__auto__ = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null))));
if(cljs.core.truth_(temp__6736__auto__)){
var e = temp__6736__auto__;
if((acc == null)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null);
} else {
if(cljs.core._EQ_.call(null,cljs.core.get.call(null,acc,(0)),e)){
return acc;
} else {
var vec__33542 = acc;
var _e = cljs.core.nth.call(null,vec__33542,(0),null);
var _a = cljs.core.nth.call(null,vec__33542,(1),null);
var _v = cljs.core.nth.call(null,vec__33542,(2),null);
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Conflicting upserts: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_a,_v], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" resolves to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,_e)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", but "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" resolves to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,e))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078),new cljs.core.Keyword(null,"entity","entity",-450970276),entity,new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null),new cljs.core.Keyword(null,"conflict","conflict",1978796605),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [_e,_a,_v], null)], null));

}
}
} else {
return acc;
}
} else {
return acc;
}
});})(idents,temp__6738__auto__))
,null,entity)));
} else {
return null;
}
});
datascript.db.maybe_wrap_multival = (function datascript$db$maybe_wrap_multival(db,a,vs){
if(!((datascript.db.reverse_ref_QMARK_.call(null,a)) || (datascript.db.multival_QMARK_.call(null,db,a)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if(cljs.core.not.call(null,(function (){var or__28749__auto__ = datascript.arrays.array_QMARK_.call(null,vs);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return (cljs.core.coll_QMARK_.call(null,vs)) && (!(cljs.core.map_QMARK_.call(null,vs)));
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
if((cljs.core._EQ_.call(null,cljs.core.count.call(null,vs),(2))) && (datascript.db.is_attr_QMARK_.call(null,db,cljs.core.first.call(null,vs),new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null);
} else {
return vs;

}
}
}
});
datascript.db.explode = (function datascript$db$explode(db,entity){
var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
var iter__29611__auto__ = ((function (eid){
return (function datascript$db$explode_$_iter__33557(s__33558){
return (new cljs.core.LazySeq(null,((function (eid){
return (function (){
var s__33558__$1 = s__33558;
while(true){
var temp__6738__auto__ = cljs.core.seq.call(null,s__33558__$1);
if(temp__6738__auto__){
var xs__7294__auto__ = temp__6738__auto__;
var vec__33566 = cljs.core.first.call(null,xs__7294__auto__);
var a = cljs.core.nth.call(null,vec__33566,(0),null);
var vs = cljs.core.nth.call(null,vec__33566,(1),null);
if(cljs.core.not_EQ_.call(null,a,new cljs.core.Keyword("db","id","db/id",-1388397098))){
var _ = datascript.db.validate_attr.call(null,a,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","id","db/id",-1388397098),eid,a,vs]));
var reverse_QMARK_ = datascript.db.reverse_ref_QMARK_.call(null,a);
var straight_a = ((reverse_QMARK_)?datascript.db.reverse_ref.call(null,a):a);
var ___$1 = (((reverse_QMARK_) && (!(datascript.db.ref_QMARK_.call(null,db,straight_a))))?(function(){throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad attribute "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,a)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": reverse attribute name requires {:db/valueType :db.type/ref} in schema")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"attribute","attribute",-2074029119),a,new cljs.core.Keyword(null,"context","context",-830191113),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword("db","id","db/id",-1388397098),eid,a,vs])], null))})():null);
var iterys__29607__auto__ = ((function (s__33558__$1,_,reverse_QMARK_,straight_a,___$1,vec__33566,a,vs,xs__7294__auto__,temp__6738__auto__,eid){
return (function datascript$db$explode_$_iter__33557_$_iter__33559(s__33560){
return (new cljs.core.LazySeq(null,((function (s__33558__$1,_,reverse_QMARK_,straight_a,___$1,vec__33566,a,vs,xs__7294__auto__,temp__6738__auto__,eid){
return (function (){
var s__33560__$1 = s__33560;
while(true){
var temp__6738__auto____$1 = cljs.core.seq.call(null,s__33560__$1);
if(temp__6738__auto____$1){
var s__33560__$2 = temp__6738__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33560__$2)){
var c__29609__auto__ = cljs.core.chunk_first.call(null,s__33560__$2);
var size__29610__auto__ = cljs.core.count.call(null,c__29609__auto__);
var b__33562 = cljs.core.chunk_buffer.call(null,size__29610__auto__);
if((function (){var i__33561 = (0);
while(true){
if((i__33561 < size__29610__auto__)){
var v = cljs.core._nth.call(null,c__29609__auto__,i__33561);
cljs.core.chunk_append.call(null,b__33562,(((datascript.db.ref_QMARK_.call(null,db,straight_a)) && (cljs.core.map_QMARK_.call(null,v)))?cljs.core.assoc.call(null,v,datascript.db.reverse_ref.call(null,a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,straight_a,v], null))));

var G__33569 = (i__33561 + (1));
i__33561 = G__33569;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33562),datascript$db$explode_$_iter__33557_$_iter__33559.call(null,cljs.core.chunk_rest.call(null,s__33560__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33562),null);
}
} else {
var v = cljs.core.first.call(null,s__33560__$2);
return cljs.core.cons.call(null,(((datascript.db.ref_QMARK_.call(null,db,straight_a)) && (cljs.core.map_QMARK_.call(null,v)))?cljs.core.assoc.call(null,v,datascript.db.reverse_ref.call(null,a),eid):((reverse_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,straight_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,straight_a,v], null))),datascript$db$explode_$_iter__33557_$_iter__33559.call(null,cljs.core.rest.call(null,s__33560__$2)));
}
} else {
return null;
}
break;
}
});})(s__33558__$1,_,reverse_QMARK_,straight_a,___$1,vec__33566,a,vs,xs__7294__auto__,temp__6738__auto__,eid))
,null,null));
});})(s__33558__$1,_,reverse_QMARK_,straight_a,___$1,vec__33566,a,vs,xs__7294__auto__,temp__6738__auto__,eid))
;
var fs__29608__auto__ = cljs.core.seq.call(null,iterys__29607__auto__.call(null,datascript.db.maybe_wrap_multival.call(null,db,a,vs)));
if(fs__29608__auto__){
return cljs.core.concat.call(null,fs__29608__auto__,datascript$db$explode_$_iter__33557.call(null,cljs.core.rest.call(null,s__33558__$1)));
} else {
var G__33570 = cljs.core.rest.call(null,s__33558__$1);
s__33558__$1 = G__33570;
continue;
}
} else {
var G__33571 = cljs.core.rest.call(null,s__33558__$1);
s__33558__$1 = G__33571;
continue;
}
} else {
return null;
}
break;
}
});})(eid))
,null,null));
});})(eid))
;
return iter__29611__auto__.call(null,entity);
});
datascript.db.transact_add = (function datascript$db$transact_add(report,p__33572){
var vec__33576 = p__33572;
var _ = cljs.core.nth.call(null,vec__33576,(0),null);
var e = cljs.core.nth.call(null,vec__33576,(1),null);
var a = cljs.core.nth.call(null,vec__33576,(2),null);
var v = cljs.core.nth.call(null,vec__33576,(3),null);
var tx = cljs.core.nth.call(null,vec__33576,(4),null);
var ent = vec__33576;
datascript.db.validate_attr.call(null,a,ent);

datascript.db.validate_val.call(null,v,ent);

var tx__$1 = (function (){var or__28749__auto__ = tx;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return datascript.db.current_tx.call(null,report);
}
})();
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
var e__$1 = datascript.db.entid_strict.call(null,db,e);
var v__$1 = ((datascript.db.ref_QMARK_.call(null,db,a))?datascript.db.entid_strict.call(null,db,v):v);
var datom = (new datascript.db.Datom(e__$1,a,v__$1,tx__$1,true));
if(datascript.db.multival_QMARK_.call(null,db,a)){
if(cljs.core.empty_QMARK_.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)))){
return datascript.db.transact_report.call(null,report,datom);
} else {
return report;
}
} else {
var temp__6736__auto__ = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null)));
if(cljs.core.truth_(temp__6736__auto__)){
var old_datom = temp__6736__auto__;
if(cljs.core._EQ_.call(null,old_datom.v,v__$1)){
return report;
} else {
return datascript.db.transact_report.call(null,datascript.db.transact_report.call(null,report,(new datascript.db.Datom(e__$1,a,old_datom.v,tx__$1,false))),datom);
}
} else {
return datascript.db.transact_report.call(null,report,datom);
}
}
});
datascript.db.transact_retract_datom = (function datascript$db$transact_retract_datom(report,d){
var tx = datascript.db.current_tx.call(null,report);
return datascript.db.transact_report.call(null,report,(new datascript.db.Datom(d.e,d.a,d.v,tx,false)));
});
datascript.db.retract_components = (function datascript$db$retract_components(db,datoms){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.call(null,cljs.core.filter.call(null,(function (d){
return datascript.db.component_QMARK_.call(null,db,d.a);
})),cljs.core.map.call(null,(function (d){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),d.v], null);
}))),datoms);
});
datascript.db.retry_with_tempid = (function datascript$db$retry_with_tempid(report,es,tempid,upserted_eid){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report),tempid)){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Conflicting upsert: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,tempid)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" resolves"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" both to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,upserted_eid)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" and "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report),tempid)))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","upsert","transact/upsert",412688078)], null));
} else {
return datascript.db.transact_tx_data.call(null,cljs.core.assoc_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),tempid], null),upserted_eid),es);
}
});
datascript.db.transact_tx_data = (function datascript$db$transact_tx_data(initial_report,initial_es){
if(((initial_es == null)) || (cljs.core.sequential_QMARK_.call(null,initial_es))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad transaction data "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,initial_es)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected sequential collection")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),initial_es], null));
}

var report = initial_report;
var es = initial_es;
while(true){
var vec__33594 = es;
var seq__33595 = cljs.core.seq.call(null,vec__33594);
var first__33596 = cljs.core.first.call(null,seq__33595);
var seq__33595__$1 = cljs.core.next.call(null,seq__33595);
var entity = first__33596;
var entities = seq__33595__$1;
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
if((entity == null)){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132)], null),datascript.db.current_tx.call(null,report)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null),cljs.core.inc);
} else {
if(cljs.core.map_QMARK_.call(null,entity)){
var old_eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
if(datascript.db.tx_id_QMARK_.call(null,old_eid)){
var id = datascript.db.current_tx.call(null,report);
var G__33609 = datascript.db.allocate_eid.call(null,report,old_eid,id);
var G__33610 = cljs.core.cons.call(null,cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),id),entities);
report = G__33609;
es = G__33610;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,old_eid)){
var id = datascript.db.entid_strict.call(null,db,old_eid);
var G__33611 = report;
var G__33612 = cljs.core.cons.call(null,cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),id),entities);
report = G__33611;
es = G__33612;
continue;
} else {
var temp__6736__auto__ = datascript.db.upsert_eid.call(null,db,entity);
if(cljs.core.truth_(temp__6736__auto__)){
var upserted_eid = temp__6736__auto__;
if((datascript.db.neg_number_QMARK_.call(null,old_eid)) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report),old_eid)) && (cljs.core.not_EQ_.call(null,upserted_eid,cljs.core.get.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report),old_eid)))){
return datascript.db.retry_with_tempid.call(null,initial_report,initial_es,old_eid,upserted_eid);
} else {
var G__33613 = datascript.db.allocate_eid.call(null,report,old_eid,upserted_eid);
var G__33614 = cljs.core.concat.call(null,datascript.db.explode.call(null,db,cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),upserted_eid)),entities);
report = G__33613;
es = G__33614;
continue;
}
} else {
if((typeof old_eid === 'number') || ((old_eid == null))){
var new_eid = (((old_eid == null))?datascript.db.next_eid.call(null,db):(((old_eid < (0)))?(function (){var or__28749__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report),old_eid);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return datascript.db.next_eid.call(null,db);
}
})():old_eid
));
var new_entity = cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),new_eid);
var G__33615 = datascript.db.allocate_eid.call(null,report,old_eid,new_eid);
var G__33616 = cljs.core.concat.call(null,datascript.db.explode.call(null,db,new_entity),entities);
report = G__33615;
es = G__33616;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Expected number or lookup ref for :db/id, got "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,old_eid))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("entity-id","syntax","entity-id/syntax",1921317045),new cljs.core.Keyword(null,"entity","entity",-450970276),entity], null));

}
}
}
}
} else {
if(cljs.core.sequential_QMARK_.call(null,entity)){
var vec__33597 = entity;
var op = cljs.core.nth.call(null,vec__33597,(0),null);
var e = cljs.core.nth.call(null,vec__33597,(1),null);
var a = cljs.core.nth.call(null,vec__33597,(2),null);
var v = cljs.core.nth.call(null,vec__33597,(3),null);
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418))){
var vec__33600 = entity;
var seq__33601 = cljs.core.seq.call(null,vec__33600);
var first__33602 = cljs.core.first.call(null,seq__33601);
var seq__33601__$1 = cljs.core.next.call(null,seq__33601);
var _ = first__33602;
var first__33602__$1 = cljs.core.first.call(null,seq__33601__$1);
var seq__33601__$2 = cljs.core.next.call(null,seq__33601__$1);
var f = first__33602__$1;
var args = seq__33601__$2;
var G__33617 = report;
var G__33618 = cljs.core.concat.call(null,cljs.core.apply.call(null,f,db,args),entities);
report = G__33617;
es = G__33618;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","cas","db.fn/cas",-379352172))){
var vec__33603 = entity;
var _ = cljs.core.nth.call(null,vec__33603,(0),null);
var e__$1 = cljs.core.nth.call(null,vec__33603,(1),null);
var a__$1 = cljs.core.nth.call(null,vec__33603,(2),null);
var ov = cljs.core.nth.call(null,vec__33603,(3),null);
var nv = cljs.core.nth.call(null,vec__33603,(4),null);
var e__$2 = datascript.db.entid_strict.call(null,db,e__$1);
var ___$1 = datascript.db.validate_attr.call(null,a__$1,entity);
var ov__$1 = ((datascript.db.ref_QMARK_.call(null,db,a__$1))?datascript.db.entid_strict.call(null,db,ov):ov);
var nv__$1 = ((datascript.db.ref_QMARK_.call(null,db,a__$1))?datascript.db.entid_strict.call(null,db,nv):nv);
var ___$2 = datascript.db.validate_val.call(null,nv__$1,entity);
var datoms = datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$2,a__$1], null));
if(datascript.db.multival_QMARK_.call(null,db,a__$1)){
if(cljs.core.truth_(cljs.core.some.call(null,((function (report,es,vec__33603,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__33597,op,e,a,v,vec__33594,seq__33595,first__33596,seq__33595__$1,entity,entities,db){
return (function (d){
return cljs.core._EQ_.call(null,d.v,ov__$1);
});})(report,es,vec__33603,_,e__$1,a__$1,ov,nv,e__$2,___$1,ov__$1,nv__$1,___$2,datoms,vec__33597,op,e,a,v,vec__33594,seq__33595,first__33596,seq__33595__$1,entity,entities,db))
,datoms))){
var G__33619 = datascript.db.transact_add.call(null,report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$2,a__$1,nv__$1], null));
var G__33620 = entities;
report = G__33619;
es = G__33620;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":db.fn/cas failed on datom ["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,e__$2)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,a__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",21465059),datoms))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("], expected "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,ov__$1))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","cas","transact/cas",816687170),new cljs.core.Keyword(null,"old","old",-1825222690),datoms,new cljs.core.Keyword(null,"expected","expected",1583670997),ov__$1,new cljs.core.Keyword(null,"new","new",-2085437848),nv__$1], null));
}
} else {
var v__$1 = new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datoms));
if(cljs.core._EQ_.call(null,v__$1,ov__$1)){
var G__33621 = datascript.db.transact_add.call(null,report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$2,a__$1,nv__$1], null));
var G__33622 = entities;
report = G__33621;
es = G__33622;
continue;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(":db.fn/cas failed on datom ["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,e__$2)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,a__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,v__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("], expected "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,ov__$1))].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","cas","transact/cas",816687170),new cljs.core.Keyword(null,"old","old",-1825222690),cljs.core.first.call(null,datoms),new cljs.core.Keyword(null,"expected","expected",1583670997),ov__$1,new cljs.core.Keyword(null,"new","new",-2085437848),nv__$1], null));
}
}
} else {
if(datascript.db.tx_id_QMARK_.call(null,e)){
var G__33623 = report;
var G__33624 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,datascript.db.current_tx.call(null,report),a,v], null),entities);
report = G__33623;
es = G__33624;
continue;
} else {
if((datascript.db.ref_QMARK_.call(null,db,a)) && (datascript.db.tx_id_QMARK_.call(null,v))){
var G__33625 = report;
var G__33626 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,datascript.db.current_tx.call(null,report)], null),entities);
report = G__33625;
es = G__33626;
continue;
} else {
if(datascript.db.neg_number_QMARK_.call(null,e)){
if(cljs.core.not_EQ_.call(null,op,new cljs.core.Keyword("db","add","db/add",235286841))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Negative entity ids are resolved for :db/add only")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"op","op",-1882987955),entity], null));
} else {
var upserted_eid = ((datascript.db.is_attr_QMARK_.call(null,db,a,new cljs.core.Keyword("db.unique","identity","db.unique/identity",1675950722)))?new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,datascript.db._datoms.call(null,db,new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)))):null);
var allocated_eid = cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null));
if(cljs.core.truth_((function (){var and__28737__auto__ = upserted_eid;
if(cljs.core.truth_(and__28737__auto__)){
var and__28737__auto____$1 = allocated_eid;
if(cljs.core.truth_(and__28737__auto____$1)){
return cljs.core.not_EQ_.call(null,upserted_eid,allocated_eid);
} else {
return and__28737__auto____$1;
}
} else {
return and__28737__auto__;
}
})())){
return datascript.db.retry_with_tempid.call(null,initial_report,initial_es,e,upserted_eid);
} else {
var eid = (function (){var or__28749__auto__ = upserted_eid;
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
var or__28749__auto____$1 = allocated_eid;
if(cljs.core.truth_(or__28749__auto____$1)){
return or__28749__auto____$1;
} else {
return datascript.db.next_eid.call(null,db);
}
}
})();
var G__33627 = datascript.db.allocate_eid.call(null,report,e,eid);
var G__33628 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null),entities);
report = G__33627;
es = G__33628;
continue;
}
}
} else {
if((datascript.db.ref_QMARK_.call(null,db,a)) && (datascript.db.neg_number_QMARK_.call(null,v))){
var temp__6736__auto__ = cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),v], null));
if(cljs.core.truth_(temp__6736__auto__)){
var vid = temp__6736__auto__;
var G__33629 = report;
var G__33630 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null),entities);
report = G__33629;
es = G__33630;
continue;
} else {
var G__33631 = datascript.db.allocate_eid.call(null,report,v,datascript.db.next_eid.call(null,db));
var G__33632 = es;
report = G__33631;
es = G__33632;
continue;
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","add","db/add",235286841))){
var G__33633 = datascript.db.transact_add.call(null,report,entity);
var G__33634 = entities;
report = G__33633;
es = G__33634;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","retract","db/retract",-1549825231))){
var temp__6736__auto__ = datascript.db.entid.call(null,db,e);
if(cljs.core.truth_(temp__6736__auto__)){
var e__$1 = temp__6736__auto__;
var v__$1 = ((datascript.db.ref_QMARK_.call(null,db,a))?datascript.db.entid_strict.call(null,db,v):v);
datascript.db.validate_attr.call(null,a,entity);

datascript.db.validate_val.call(null,v__$1,entity);

var temp__6736__auto____$1 = cljs.core.first.call(null,datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a,v__$1], null)));
if(cljs.core.truth_(temp__6736__auto____$1)){
var old_datom = temp__6736__auto____$1;
var G__33635 = datascript.db.transact_retract_datom.call(null,report,old_datom);
var G__33636 = entities;
report = G__33635;
es = G__33636;
continue;
} else {
var G__33637 = report;
var G__33638 = entities;
report = G__33637;
es = G__33638;
continue;
}
} else {
var G__33639 = report;
var G__33640 = entities;
report = G__33639;
es = G__33640;
continue;
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164))){
var temp__6736__auto__ = datascript.db.entid.call(null,db,e);
if(cljs.core.truth_(temp__6736__auto__)){
var e__$1 = temp__6736__auto__;
var _ = datascript.db.validate_attr.call(null,a,entity);
var datoms = datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a], null));
var G__33641 = cljs.core.reduce.call(null,datascript.db.transact_retract_datom,report,datoms);
var G__33642 = cljs.core.concat.call(null,datascript.db.retract_components.call(null,db,datoms),entities);
report = G__33641;
es = G__33642;
continue;
} else {
var G__33643 = report;
var G__33644 = entities;
report = G__33643;
es = G__33644;
continue;
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441))){
var temp__6736__auto__ = datascript.db.entid.call(null,db,e);
if(cljs.core.truth_(temp__6736__auto__)){
var e__$1 = temp__6736__auto__;
var e_datoms = datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1], null));
var v_datoms = cljs.core.mapcat.call(null,((function (report,es,e_datoms,e__$1,temp__6736__auto__,vec__33597,op,e,a,v,vec__33594,seq__33595,first__33596,seq__33595__$1,entity,entities,db){
return (function (a__$1){
return datascript.db._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,a__$1,e__$1], null));
});})(report,es,e_datoms,e__$1,temp__6736__auto__,vec__33597,op,e,a,v,vec__33594,seq__33595,first__33596,seq__33595__$1,entity,entities,db))
,datascript.db._attrs_by.call(null,db,new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)));
var G__33645 = cljs.core.reduce.call(null,datascript.db.transact_retract_datom,report,cljs.core.concat.call(null,e_datoms,v_datoms));
var G__33646 = cljs.core.concat.call(null,datascript.db.retract_components.call(null,db,e_datoms),entities);
report = G__33645;
es = G__33646;
continue;
} else {
var G__33647 = report;
var G__33648 = entities;
report = G__33647;
es = G__33648;
continue;
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unknown operation at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,entity)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected :db/add, :db/retract, :db.fn/call, :db.fn/retractAttribute or :db.fn/retractEntity")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"operation","operation",-1267664310),op,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));

}
}
}
}
}
}
}
}
}
}
} else {
if(cljs.core.truth_(datascript.db.datom_QMARK_.call(null,entity))){
var vec__33606 = entity;
var e = cljs.core.nth.call(null,vec__33606,(0),null);
var a = cljs.core.nth.call(null,vec__33606,(1),null);
var v = cljs.core.nth.call(null,vec__33606,(2),null);
var tx = cljs.core.nth.call(null,vec__33606,(3),null);
var added = cljs.core.nth.call(null,vec__33606,(4),null);
if(cljs.core.truth_(added)){
var G__33649 = datascript.db.transact_add.call(null,report,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e,a,v,tx], null));
var G__33650 = entities;
report = G__33649;
es = G__33650;
continue;
} else {
var G__33651 = report;
var G__33652 = cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","retract","db/retract",-1549825231),e,a,v], null),entities);
report = G__33651;
es = G__33652;
continue;
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Bad entity type at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,entity)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected map or vector")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transact","syntax","transact/syntax",-299207078),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),entity], null));

}
}
}
}
break;
}
});

//# sourceMappingURL=db.js.map