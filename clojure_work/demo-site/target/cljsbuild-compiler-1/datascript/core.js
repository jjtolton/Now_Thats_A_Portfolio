// Compiled by ClojureScript 1.9.518 {:static-fns true, :optimize-constants true}
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('datascript.db');
goog.require('datascript.pull_api');
goog.require('datascript.query');
goog.require('datascript.impl.entity');
goog.require('datascript.btset');
datascript.core.q = datascript.query.q;
goog.exportSymbol('datascript.core.q', datascript.core.q);
datascript.core.entity = datascript.impl.entity.entity;
goog.exportSymbol('datascript.core.entity', datascript.core.entity);
datascript.core.entity_db = (function datascript$core$entity_db(entity){
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_(entity))){
} else {
throw (new Error("Assert failed: (de/entity? entity)"));
}

return entity.db;
});
goog.exportSymbol('datascript.core.entity_db', datascript.core.entity_db);
datascript.core.datom = datascript.db.datom;
goog.exportSymbol('datascript.core.datom', datascript.core.datom);
datascript.core.pull = datascript.pull_api.pull;
goog.exportSymbol('datascript.core.pull', datascript.core.pull);
datascript.core.pull_many = datascript.pull_api.pull_many;
goog.exportSymbol('datascript.core.pull_many', datascript.core.pull_many);
datascript.core.touch = datascript.impl.entity.touch;
goog.exportSymbol('datascript.core.touch', datascript.core.touch);
datascript.core.empty_db = datascript.db.empty_db;
goog.exportSymbol('datascript.core.empty_db', datascript.core.empty_db);
datascript.core.init_db = datascript.db.init_db;
goog.exportSymbol('datascript.core.init_db', datascript.core.init_db);
datascript.core.datom_QMARK_ = datascript.db.datom_QMARK_;
goog.exportSymbol('datascript.core.datom_QMARK_', datascript.core.datom_QMARK_);
datascript.core.db_QMARK_ = datascript.db.db_QMARK_;
goog.exportSymbol('datascript.core.db_QMARK_', datascript.core.db_QMARK_);
datascript.core.tx0 = datascript.db.tx0;
goog.exportSymbol('datascript.core.tx0', datascript.core.tx0);
datascript.core.is_filtered = (function datascript$core$is_filtered(x){
return (x instanceof datascript.db.FilteredDB);
});
goog.exportSymbol('datascript.core.is_filtered', datascript.core.is_filtered);
datascript.core.filter = (function datascript$core$filter(db,pred){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered(db))){
var fdb = db;
var orig_pred = fdb.pred;
var orig_db = fdb.unfiltered_db;
return (new datascript.db.FilteredDB(orig_db,((function (fdb,orig_pred,orig_db){
return (function (p1__38501_SHARP_){
var and__7589__auto__ = (orig_pred.cljs$core$IFn$_invoke$arity$1 ? orig_pred.cljs$core$IFn$_invoke$arity$1(p1__38501_SHARP_) : orig_pred.call(null,p1__38501_SHARP_));
if(cljs.core.truth_(and__7589__auto__)){
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(orig_db,p1__38501_SHARP_) : pred.call(null,orig_db,p1__38501_SHARP_));
} else {
return and__7589__auto__;
}
});})(fdb,orig_pred,orig_db))
,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__38502_SHARP_){
return (pred.cljs$core$IFn$_invoke$arity$2 ? pred.cljs$core$IFn$_invoke$arity$2(db,p1__38502_SHARP_) : pred.call(null,db,p1__38502_SHARP_));
}),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),null,null,null));
}
});
goog.exportSymbol('datascript.core.filter', datascript.core.filter);
datascript.core.with$ = (function datascript$core$with(var_args){
var args38503 = [];
var len__8822__auto___38506 = arguments.length;
var i__8823__auto___38507 = (0);
while(true){
if((i__8823__auto___38507 < len__8822__auto___38506)){
args38503.push((arguments[i__8823__auto___38507]));

var G__38508 = (i__8823__auto___38507 + (1));
i__8823__auto___38507 = G__38508;
continue;
} else {
}
break;
}

var G__38505 = args38503.length;
switch (G__38505) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38503.length)].join('')));

}
});
goog.exportSymbol('datascript.core.with$', datascript.core.with$);

datascript.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,null);
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered(db))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,cljs.core.cst$kw$transaction_SLASH_filtered], null));
} else {
return datascript.db.transact_tx_data(datascript.db.map__GT_TxReport(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$db_DASH_before,db,cljs.core.cst$kw$db_DASH_after,db,cljs.core.cst$kw$tx_DASH_data,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$tempids,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$tx_DASH_meta,tx_meta], null)),tx_data);
}
});

datascript.core.with$.cljs$lang$maxFixedArity = 3;

datascript.core.db_with = (function datascript$core$db_with(db,tx_data){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(datascript.core.with$.cljs$core$IFn$_invoke$arity$2(db,tx_data));
});
goog.exportSymbol('datascript.core.db_with', datascript.core.db_with);
datascript.core.datoms = (function datascript$core$datoms(var_args){
var args38510 = [];
var len__8822__auto___38513 = arguments.length;
var i__8823__auto___38514 = (0);
while(true){
if((i__8823__auto___38514 < len__8822__auto___38513)){
args38510.push((arguments[i__8823__auto___38514]));

var G__38515 = (i__8823__auto___38514 + (1));
i__8823__auto___38514 = G__38515;
continue;
} else {
}
break;
}

var G__38512 = args38510.length;
switch (G__38512) {
case 2:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38510.length)].join('')));

}
});
goog.exportSymbol('datascript.core.datoms', datascript.core.datoms);

datascript.core.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms(db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms(db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms(db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms(db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms(db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.datoms.cljs$lang$maxFixedArity = 6;

datascript.core.seek_datoms = (function datascript$core$seek_datoms(var_args){
var args38517 = [];
var len__8822__auto___38520 = arguments.length;
var i__8823__auto___38521 = (0);
while(true){
if((i__8823__auto___38521 < len__8822__auto___38520)){
args38517.push((arguments[i__8823__auto___38521]));

var G__38522 = (i__8823__auto___38521 + (1));
i__8823__auto___38521 = G__38522;
continue;
} else {
}
break;
}

var G__38519 = args38517.length;
switch (G__38519) {
case 2:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38517.length)].join('')));

}
});
goog.exportSymbol('datascript.core.seek_datoms', datascript.core.seek_datoms);

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms(db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms(db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms(db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms(db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms(db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.seek_datoms.cljs$lang$maxFixedArity = 6;

datascript.core.index_range = (function datascript$core$index_range(db,attr,start,end){
if(cljs.core.truth_(datascript.db.db_QMARK_(db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._index_range(db,attr,start,end);
});
goog.exportSymbol('datascript.core.index_range', datascript.core.index_range);
datascript.core.entid = datascript.db.entid;
goog.exportSymbol('datascript.core.entid', datascript.core.entid);
datascript.core.conn_QMARK_ = (function datascript$core$conn_QMARK_(conn){
var and__7589__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === conn.cljs$core$IDeref$)))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,conn));
if(and__7589__auto__){
return datascript.db.db_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conn) : cljs.core.deref.call(null,conn)));
} else {
return and__7589__auto__;
}
});
goog.exportSymbol('datascript.core.conn_QMARK_', datascript.core.conn_QMARK_);
datascript.core.conn_from_db = (function datascript$core$conn_from_db(db){
var G__38532 = db;
var G__38533 = cljs.core.cst$kw$meta;
var G__38534 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$listeners,(function (){var G__38535 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__38535) : cljs.core.atom.call(null,G__38535));
})()], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$3 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$3(G__38532,G__38533,G__38534) : cljs.core.atom.call(null,G__38532,G__38533,G__38534));
});
goog.exportSymbol('datascript.core.conn_from_db', datascript.core.conn_from_db);
datascript.core.conn_from_datoms = (function datascript$core$conn_from_datoms(var_args){
var args38536 = [];
var len__8822__auto___38539 = arguments.length;
var i__8823__auto___38540 = (0);
while(true){
if((i__8823__auto___38540 < len__8822__auto___38539)){
args38536.push((arguments[i__8823__auto___38540]));

var G__38541 = (i__8823__auto___38540 + (1));
i__8823__auto___38540 = G__38541;
continue;
} else {
}
break;
}

var G__38538 = args38536.length;
switch (G__38538) {
case 1:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38536.length)].join('')));

}
});
goog.exportSymbol('datascript.core.conn_from_datoms', datascript.core.conn_from_datoms);

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.core.conn_from_db((datascript.core.init_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.init_db.cljs$core$IFn$_invoke$arity$1(datoms) : datascript.core.init_db.call(null,datoms)));
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.core.conn_from_db((datascript.core.init_db.cljs$core$IFn$_invoke$arity$2 ? datascript.core.init_db.cljs$core$IFn$_invoke$arity$2(datoms,schema) : datascript.core.init_db.call(null,datoms,schema)));
});

datascript.core.conn_from_datoms.cljs$lang$maxFixedArity = 2;

datascript.core.create_conn = (function datascript$core$create_conn(var_args){
var args38543 = [];
var len__8822__auto___38546 = arguments.length;
var i__8823__auto___38547 = (0);
while(true){
if((i__8823__auto___38547 < len__8822__auto___38546)){
args38543.push((arguments[i__8823__auto___38547]));

var G__38548 = (i__8823__auto___38547 + (1));
i__8823__auto___38547 = G__38548;
continue;
} else {
}
break;
}

var G__38545 = args38543.length;
switch (G__38545) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38543.length)].join('')));

}
});
goog.exportSymbol('datascript.core.create_conn', datascript.core.create_conn);

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.conn_from_db((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0() : datascript.core.empty_db.call(null)));
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.core.conn_from_db((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(schema) : datascript.core.empty_db.call(null,schema)));
});

datascript.core.create_conn.cljs$lang$maxFixedArity = 1;

datascript.core._transact_BANG_ = (function datascript$core$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(conn,((function (report){
return (function (db){
var r = datascript.core.with$.cljs$core$IFn$_invoke$arity$3(db,tx_data,tx_meta);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(report,r) : cljs.core.reset_BANG_.call(null,report,r));

return cljs.core.cst$kw$db_DASH_after.cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(report) : cljs.core.deref.call(null,report));
});
datascript.core.transact_BANG_ = (function datascript$core$transact_BANG_(var_args){
var args38550 = [];
var len__8822__auto___38564 = arguments.length;
var i__8823__auto___38565 = (0);
while(true){
if((i__8823__auto___38565 < len__8822__auto___38564)){
args38550.push((arguments[i__8823__auto___38565]));

var G__38566 = (i__8823__auto___38565 + (1));
i__8823__auto___38565 = G__38566;
continue;
} else {
}
break;
}

var G__38552 = args38550.length;
switch (G__38552) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38550.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_BANG_', datascript.core.transact_BANG_);

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,null);
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.core._transact_BANG_(conn,tx_data,tx_meta);
var seq__38553_38568 = cljs.core.seq((function (){var G__38557 = cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38557) : cljs.core.deref.call(null,G__38557));
})());
var chunk__38554_38569 = null;
var count__38555_38570 = (0);
var i__38556_38571 = (0);
while(true){
if((i__38556_38571 < count__38555_38570)){
var vec__38558_38572 = chunk__38554_38569.cljs$core$IIndexed$_nth$arity$2(null,i__38556_38571);
var __38573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38558_38572,(0),null);
var callback_38574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38558_38572,(1),null);
(callback_38574.cljs$core$IFn$_invoke$arity$1 ? callback_38574.cljs$core$IFn$_invoke$arity$1(report) : callback_38574.call(null,report));

var G__38575 = seq__38553_38568;
var G__38576 = chunk__38554_38569;
var G__38577 = count__38555_38570;
var G__38578 = (i__38556_38571 + (1));
seq__38553_38568 = G__38575;
chunk__38554_38569 = G__38576;
count__38555_38570 = G__38577;
i__38556_38571 = G__38578;
continue;
} else {
var temp__6738__auto___38579 = cljs.core.seq(seq__38553_38568);
if(temp__6738__auto___38579){
var seq__38553_38580__$1 = temp__6738__auto___38579;
if(cljs.core.chunked_seq_QMARK_(seq__38553_38580__$1)){
var c__8512__auto___38581 = cljs.core.chunk_first(seq__38553_38580__$1);
var G__38582 = cljs.core.chunk_rest(seq__38553_38580__$1);
var G__38583 = c__8512__auto___38581;
var G__38584 = cljs.core.count(c__8512__auto___38581);
var G__38585 = (0);
seq__38553_38568 = G__38582;
chunk__38554_38569 = G__38583;
count__38555_38570 = G__38584;
i__38556_38571 = G__38585;
continue;
} else {
var vec__38561_38586 = cljs.core.first(seq__38553_38580__$1);
var __38587 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38561_38586,(0),null);
var callback_38588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38561_38586,(1),null);
(callback_38588.cljs$core$IFn$_invoke$arity$1 ? callback_38588.cljs$core$IFn$_invoke$arity$1(report) : callback_38588.call(null,report));

var G__38589 = cljs.core.next(seq__38553_38580__$1);
var G__38590 = null;
var G__38591 = (0);
var G__38592 = (0);
seq__38553_38568 = G__38589;
chunk__38554_38569 = G__38590;
count__38555_38570 = G__38591;
i__38556_38571 = G__38592;
continue;
}
} else {
}
}
break;
}

return report;
});

datascript.core.transact_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.reset_conn_BANG_ = (function datascript$core$reset_conn_BANG_(var_args){
var args38594 = [];
var len__8822__auto___38608 = arguments.length;
var i__8823__auto___38609 = (0);
while(true){
if((i__8823__auto___38609 < len__8822__auto___38608)){
args38594.push((arguments[i__8823__auto___38609]));

var G__38610 = (i__8823__auto___38609 + (1));
i__8823__auto___38609 = G__38610;
continue;
} else {
}
break;
}

var G__38596 = args38594.length;
switch (G__38596) {
case 2:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38594.length)].join('')));

}
});
goog.exportSymbol('datascript.core.reset_conn_BANG_', datascript.core.reset_conn_BANG_);

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3(conn,db,null);
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datascript.db.map__GT_TxReport(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$db_DASH_before,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conn) : cljs.core.deref.call(null,conn)),cljs.core.cst$kw$db_DASH_after,db,cljs.core.cst$kw$tx_DASH_data,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38593_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38593_SHARP_,cljs.core.cst$kw$added,false);
}),datascript.core.datoms.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conn) : cljs.core.deref.call(null,conn)),cljs.core.cst$kw$eavt)),datascript.core.datoms.cljs$core$IFn$_invoke$arity$2(db,cljs.core.cst$kw$eavt)),cljs.core.cst$kw$tx_DASH_meta,tx_meta], null));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(conn,db) : cljs.core.reset_BANG_.call(null,conn,db));

var seq__38597_38612 = cljs.core.seq((function (){var G__38601 = cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__38601) : cljs.core.deref.call(null,G__38601));
})());
var chunk__38598_38613 = null;
var count__38599_38614 = (0);
var i__38600_38615 = (0);
while(true){
if((i__38600_38615 < count__38599_38614)){
var vec__38602_38616 = chunk__38598_38613.cljs$core$IIndexed$_nth$arity$2(null,i__38600_38615);
var __38617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38602_38616,(0),null);
var callback_38618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38602_38616,(1),null);
(callback_38618.cljs$core$IFn$_invoke$arity$1 ? callback_38618.cljs$core$IFn$_invoke$arity$1(report) : callback_38618.call(null,report));

var G__38619 = seq__38597_38612;
var G__38620 = chunk__38598_38613;
var G__38621 = count__38599_38614;
var G__38622 = (i__38600_38615 + (1));
seq__38597_38612 = G__38619;
chunk__38598_38613 = G__38620;
count__38599_38614 = G__38621;
i__38600_38615 = G__38622;
continue;
} else {
var temp__6738__auto___38623 = cljs.core.seq(seq__38597_38612);
if(temp__6738__auto___38623){
var seq__38597_38624__$1 = temp__6738__auto___38623;
if(cljs.core.chunked_seq_QMARK_(seq__38597_38624__$1)){
var c__8512__auto___38625 = cljs.core.chunk_first(seq__38597_38624__$1);
var G__38626 = cljs.core.chunk_rest(seq__38597_38624__$1);
var G__38627 = c__8512__auto___38625;
var G__38628 = cljs.core.count(c__8512__auto___38625);
var G__38629 = (0);
seq__38597_38612 = G__38626;
chunk__38598_38613 = G__38627;
count__38599_38614 = G__38628;
i__38600_38615 = G__38629;
continue;
} else {
var vec__38605_38630 = cljs.core.first(seq__38597_38624__$1);
var __38631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38605_38630,(0),null);
var callback_38632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38605_38630,(1),null);
(callback_38632.cljs$core$IFn$_invoke$arity$1 ? callback_38632.cljs$core$IFn$_invoke$arity$1(report) : callback_38632.call(null,report));

var G__38633 = cljs.core.next(seq__38597_38624__$1);
var G__38634 = null;
var G__38635 = (0);
var G__38636 = (0);
seq__38597_38612 = G__38633;
chunk__38598_38613 = G__38634;
count__38599_38614 = G__38635;
i__38600_38615 = G__38636;
continue;
}
} else {
}
}
break;
}

return db;
});

datascript.core.reset_conn_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.listen_BANG_ = (function datascript$core$listen_BANG_(var_args){
var args38637 = [];
var len__8822__auto___38640 = arguments.length;
var i__8823__auto___38641 = (0);
while(true){
if((i__8823__auto___38641 < len__8822__auto___38640)){
args38637.push((arguments[i__8823__auto___38641]));

var G__38642 = (i__8823__auto___38641 + (1));
i__8823__auto___38641 = G__38642;
continue;
} else {
}
break;
}

var G__38639 = args38637.length;
switch (G__38639) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38637.length)].join('')));

}
});
goog.exportSymbol('datascript.core.listen_BANG_', datascript.core.listen_BANG_);

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(conn,cljs.core.rand.cljs$core$IFn$_invoke$arity$0(),callback);
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.core.listen_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.unlisten_BANG_ = (function datascript$core$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$listeners.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(conn)),cljs.core.dissoc,key);
});
goog.exportSymbol('datascript.core.unlisten_BANG_', datascript.core.unlisten_BANG_);
datascript.core.data_readers = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$sym$datascript_SLASH_Datom,datascript.db.datom_from_reader,cljs.core.cst$sym$datascript_SLASH_DB,datascript.db.db_from_reader], null);
var seq__38644_38654 = cljs.core.seq(datascript.core.data_readers);
var chunk__38645_38655 = null;
var count__38646_38656 = (0);
var i__38647_38657 = (0);
while(true){
if((i__38647_38657 < count__38646_38656)){
var vec__38648_38658 = chunk__38645_38655.cljs$core$IIndexed$_nth$arity$2(null,i__38647_38657);
var tag_38659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38648_38658,(0),null);
var cb_38660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38648_38658,(1),null);
cljs.reader.register_tag_parser_BANG_(tag_38659,cb_38660);

var G__38661 = seq__38644_38654;
var G__38662 = chunk__38645_38655;
var G__38663 = count__38646_38656;
var G__38664 = (i__38647_38657 + (1));
seq__38644_38654 = G__38661;
chunk__38645_38655 = G__38662;
count__38646_38656 = G__38663;
i__38647_38657 = G__38664;
continue;
} else {
var temp__6738__auto___38665 = cljs.core.seq(seq__38644_38654);
if(temp__6738__auto___38665){
var seq__38644_38666__$1 = temp__6738__auto___38665;
if(cljs.core.chunked_seq_QMARK_(seq__38644_38666__$1)){
var c__8512__auto___38667 = cljs.core.chunk_first(seq__38644_38666__$1);
var G__38668 = cljs.core.chunk_rest(seq__38644_38666__$1);
var G__38669 = c__8512__auto___38667;
var G__38670 = cljs.core.count(c__8512__auto___38667);
var G__38671 = (0);
seq__38644_38654 = G__38668;
chunk__38645_38655 = G__38669;
count__38646_38656 = G__38670;
i__38647_38657 = G__38671;
continue;
} else {
var vec__38651_38672 = cljs.core.first(seq__38644_38666__$1);
var tag_38673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38651_38672,(0),null);
var cb_38674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38651_38672,(1),null);
cljs.reader.register_tag_parser_BANG_(tag_38673,cb_38674);

var G__38675 = cljs.core.next(seq__38644_38666__$1);
var G__38676 = null;
var G__38677 = (0);
var G__38678 = (0);
seq__38644_38654 = G__38675;
chunk__38645_38655 = G__38676;
count__38646_38656 = G__38677;
i__38647_38657 = G__38678;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1000000)) : cljs.core.atom.call(null,(-1000000)));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args38679 = [];
var len__8822__auto___38682 = arguments.length;
var i__8823__auto___38683 = (0);
while(true){
if((i__8823__auto___38683 < len__8822__auto___38682)){
args38679.push((arguments[i__8823__auto___38683]));

var G__38684 = (i__8823__auto___38683 + (1));
i__8823__auto___38683 = G__38684;
continue;
} else {
}
break;
}

var G__38681 = args38679.length;
switch (G__38681) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38679.length)].join('')));

}
});
goog.exportSymbol('datascript.core.tempid', datascript.core.tempid);

datascript.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(part,cljs.core.cst$kw$db$part_SLASH_tx)){
return cljs.core.cst$kw$db_SLASH_current_DASH_tx;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(datascript.core.last_tempid,cljs.core.dec);
}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(part,cljs.core.cst$kw$db$part_SLASH_tx)){
return cljs.core.cst$kw$db_SLASH_current_DASH_tx;
} else {
return x;
}
});

datascript.core.tempid.cljs$lang$maxFixedArity = 2;

datascript.core.resolve_tempid = (function datascript$core$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(tempids,tempid);
});
goog.exportSymbol('datascript.core.resolve_tempid', datascript.core.resolve_tempid);
datascript.core.db = (function datascript$core$db(conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(conn) : cljs.core.deref.call(null,conn));
});
goog.exportSymbol('datascript.core.db', datascript.core.db);
datascript.core.transact = (function datascript$core$transact(var_args){
var args38686 = [];
var len__8822__auto___38692 = arguments.length;
var i__8823__auto___38693 = (0);
while(true){
if((i__8823__auto___38693 < len__8822__auto___38692)){
args38686.push((arguments[i__8823__auto___38693]));

var G__38694 = (i__8823__auto___38693 + (1));
i__8823__auto___38693 = G__38694;
continue;
} else {
}
break;
}

var G__38688 = args38686.length;
switch (G__38688) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38686.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact', datascript.core.transact);

datascript.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3(conn,tx_data,null);
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var res = datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,tx_meta);
if(typeof datascript.core.t_datascript$core38689 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core38689 = (function (conn,tx_data,tx_meta,res,meta38690){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta38690 = meta38690;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core38689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_38691,meta38690__$1){
var self__ = this;
var _38691__$1 = this;
return (new datascript.core.t_datascript$core38689(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta38690__$1));
});})(res))
;

datascript.core.t_datascript$core38689.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_38691){
var self__ = this;
var _38691__$1 = this;
return self__.meta38690;
});})(res))
;

datascript.core.t_datascript$core38689.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core38689.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core38689.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core38689.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$conn,cljs.core.cst$sym$tx_DASH_data,cljs.core.cst$sym$tx_DASH_meta,cljs.core.cst$sym$res,cljs.core.cst$sym$meta38690], null);
});})(res))
;

datascript.core.t_datascript$core38689.cljs$lang$type = true;

datascript.core.t_datascript$core38689.cljs$lang$ctorStr = "datascript.core/t_datascript$core38689";

datascript.core.t_datascript$core38689.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"datascript.core/t_datascript$core38689");
});})(res))
;

datascript.core.__GT_t_datascript$core38689 = ((function (res){
return (function datascript$core$__GT_t_datascript$core38689(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta38690){
return (new datascript.core.t_datascript$core38689(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta38690));
});})(res))
;

}

return (new datascript.core.t_datascript$core38689(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.core.transact.cljs$lang$maxFixedArity = 3;

datascript.core.future_call = (function datascript$core$future_call(f){
var res = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var realized = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
var G__38703_38710 = ((function (res,realized){
return (function (){
var G__38705_38712 = res;
var G__38706_38713 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__38705_38712,G__38706_38713) : cljs.core.reset_BANG_.call(null,G__38705_38712,G__38706_38713));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(realized,true) : cljs.core.reset_BANG_.call(null,realized,true));
});})(res,realized))
;
var G__38704_38711 = (0);
setTimeout(G__38703_38710,G__38704_38711);

if(typeof datascript.core.t_datascript$core38707 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core38707 = (function (f,res,realized,meta38708){
this.f = f;
this.res = res;
this.realized = realized;
this.meta38708 = meta38708;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core38707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_38709,meta38708__$1){
var self__ = this;
var _38709__$1 = this;
return (new datascript.core.t_datascript$core38707(self__.f,self__.res,self__.realized,meta38708__$1));
});})(res,realized))
;

datascript.core.t_datascript$core38707.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_38709){
var self__ = this;
var _38709__$1 = this;
return self__.meta38708;
});})(res,realized))
;

datascript.core.t_datascript$core38707.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.res) : cljs.core.deref.call(null,self__.res));
});})(res,realized))
;

datascript.core.t_datascript$core38707.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.realized) : cljs.core.deref.call(null,self__.realized)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.res) : cljs.core.deref.call(null,self__.res));
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.core.t_datascript$core38707.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.realized) : cljs.core.deref.call(null,self__.realized));
});})(res,realized))
;

datascript.core.t_datascript$core38707.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$res,cljs.core.cst$sym$realized,cljs.core.cst$sym$meta38708], null);
});})(res,realized))
;

datascript.core.t_datascript$core38707.cljs$lang$type = true;

datascript.core.t_datascript$core38707.cljs$lang$ctorStr = "datascript.core/t_datascript$core38707";

datascript.core.t_datascript$core38707.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__8258__auto__,writer__8259__auto__,opt__8260__auto__){
return cljs.core._write(writer__8259__auto__,"datascript.core/t_datascript$core38707");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core38707 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core38707(f__$1,res__$1,realized__$1,meta38708){
return (new datascript.core.t_datascript$core38707(f__$1,res__$1,realized__$1,meta38708));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core38707(f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args38714 = [];
var len__8822__auto___38717 = arguments.length;
var i__8823__auto___38718 = (0);
while(true){
if((i__8823__auto___38718 < len__8822__auto___38717)){
args38714.push((arguments[i__8823__auto___38718]));

var G__38719 = (i__8823__auto___38718 + (1));
i__8823__auto___38718 = G__38719;
continue;
} else {
}
break;
}

var G__38716 = args38714.length;
switch (G__38716) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38714.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_async', datascript.core.transact_async);

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3(conn,tx_data,null);
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_(conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return datascript.core.future_call((function (){
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3(conn,tx_data,tx_meta);
}));
});

datascript.core.transact_async.cljs$lang$maxFixedArity = 3;

datascript.core.rand_bits = (function datascript$core$rand_bits(pow){
return cljs.core.rand_int(((1) << pow));
});
datascript.core.to_hex_string = (function datascript$core$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count(s);
if((c > l)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),l);
} else {
if((c < l)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((l - c),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return s;

}
}
});
datascript.core.squuid = (function datascript$core$squuid(var_args){
var args38721 = [];
var len__8822__auto___38724 = arguments.length;
var i__8823__auto___38725 = (0);
while(true){
if((i__8823__auto___38725 < len__8822__auto___38724)){
args38721.push((arguments[i__8823__auto___38725]));

var G__38726 = (i__8823__auto___38725 + (1));
i__8823__auto___38725 = G__38726;
continue;
} else {
}
break;
}

var G__38723 = args38721.length;
switch (G__38723) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args38721.length)].join('')));

}
});
goog.exportSymbol('datascript.core.squuid', datascript.core.squuid);

datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((new Date()).getTime());
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid([cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string(((msec / (1000)) | (0)),(8))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string(datascript.core.rand_bits((16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string(((datascript.core.rand_bits((16)) & (4095)) | (16384)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string(((datascript.core.rand_bits((16)) & (16383)) | (32768)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string(datascript.core.rand_bits((16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string(datascript.core.rand_bits((16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string(datascript.core.rand_bits((16)),(4)))].join(''));
});

datascript.core.squuid.cljs$lang$maxFixedArity = 1;

datascript.core.squuid_time_millis = (function datascript$core$squuid_time_millis(uuid){
return ((function (){var G__38730 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''),(0),(8));
var G__38731 = (16);
return parseInt(G__38730,G__38731);
})() * (1000));
});
goog.exportSymbol('datascript.core.squuid_time_millis', datascript.core.squuid_time_millis);
