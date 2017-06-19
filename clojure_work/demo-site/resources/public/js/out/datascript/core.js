// Compiled by ClojureScript 1.9.518 {}
goog.provide('datascript.core');
goog.require('cljs.core');
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
if(cljs.core.truth_(datascript.impl.entity.entity_QMARK_.call(null,entity))){
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
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
var fdb = db;
var orig_pred = fdb.pred;
var orig_db = fdb.unfiltered_db;
return (new datascript.db.FilteredDB(orig_db,((function (fdb,orig_pred,orig_db){
return (function (p1__36536_SHARP_){
var and__28737__auto__ = orig_pred.call(null,p1__36536_SHARP_);
if(cljs.core.truth_(and__28737__auto__)){
return pred.call(null,orig_db,p1__36536_SHARP_);
} else {
return and__28737__auto__;
}
});})(fdb,orig_pred,orig_db))
,cljs.core.atom.call(null,(0)),null,null,null));
} else {
return (new datascript.db.FilteredDB(db,(function (p1__36537_SHARP_){
return pred.call(null,db,p1__36537_SHARP_);
}),cljs.core.atom.call(null,(0)),null,null,null));
}
});
goog.exportSymbol('datascript.core.filter', datascript.core.filter);
datascript.core.with$ = (function datascript$core$with(var_args){
var args36538 = [];
var len__29970__auto___36541 = arguments.length;
var i__29971__auto___36542 = (0);
while(true){
if((i__29971__auto___36542 < len__29970__auto___36541)){
args36538.push((arguments[i__29971__auto___36542]));

var G__36543 = (i__29971__auto___36542 + (1));
i__29971__auto___36542 = G__36543;
continue;
} else {
}
break;
}

var G__36540 = args36538.length;
switch (G__36540) {
case 2:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36538.length)].join('')));

}
});
goog.exportSymbol('datascript.core.with$', datascript.core.with$);

datascript.core.with$.cljs$core$IFn$_invoke$arity$2 = (function (db,tx_data){
return datascript.core.with$.call(null,db,tx_data,null);
});

datascript.core.with$.cljs$core$IFn$_invoke$arity$3 = (function (db,tx_data,tx_meta){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

if(cljs.core.truth_(datascript.core.is_filtered.call(null,db))){
throw cljs.core.ex_info.call(null,"Filtered DB cannot be modified",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword("transaction","filtered","transaction/filtered",1699706605)], null));
} else {
return datascript.db.transact_tx_data.call(null,datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
});

datascript.core.with$.cljs$lang$maxFixedArity = 3;

datascript.core.db_with = (function datascript$core$db_with(db,tx_data){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.core.with$.call(null,db,tx_data));
});
goog.exportSymbol('datascript.core.db_with', datascript.core.db_with);
datascript.core.datoms = (function datascript$core$datoms(var_args){
var args36545 = [];
var len__29970__auto___36548 = arguments.length;
var i__29971__auto___36549 = (0);
while(true){
if((i__29971__auto___36549 < len__29970__auto___36548)){
args36545.push((arguments[i__29971__auto___36549]));

var G__36550 = (i__29971__auto___36549 + (1));
i__29971__auto___36549 = G__36550;
continue;
} else {
}
break;
}

var G__36547 = args36545.length;
switch (G__36547) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36545.length)].join('')));

}
});
goog.exportSymbol('datascript.core.datoms', datascript.core.datoms);

datascript.core.datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.datoms.cljs$lang$maxFixedArity = 6;

datascript.core.seek_datoms = (function datascript$core$seek_datoms(var_args){
var args36552 = [];
var len__29970__auto___36555 = arguments.length;
var i__29971__auto___36556 = (0);
while(true){
if((i__29971__auto___36556 < len__29970__auto___36555)){
args36552.push((arguments[i__29971__auto___36556]));

var G__36557 = (i__29971__auto___36556 + (1));
i__29971__auto___36556 = G__36557;
continue;
} else {
}
break;
}

var G__36554 = args36552.length;
switch (G__36554) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36552.length)].join('')));

}
});
goog.exportSymbol('datascript.core.seek_datoms', datascript.core.seek_datoms);

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$2 = (function (db,index){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,cljs.core.PersistentVector.EMPTY);
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$3 = (function (db,index,c1){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$4 = (function (db,index,c1,c2){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$5 = (function (db,index,c1,c2,c3){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3], null));
});

datascript.core.seek_datoms.cljs$core$IFn$_invoke$arity$6 = (function (db,index,c1,c2,c3,c4){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._seek_datoms.call(null,db,index,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [c1,c2,c3,c4], null));
});

datascript.core.seek_datoms.cljs$lang$maxFixedArity = 6;

datascript.core.index_range = (function datascript$core$index_range(db,attr,start,end){
if(cljs.core.truth_(datascript.db.db_QMARK_.call(null,db))){
} else {
throw (new Error("Assert failed: (db/db? db)"));
}

return datascript.db._index_range.call(null,db,attr,start,end);
});
goog.exportSymbol('datascript.core.index_range', datascript.core.index_range);
datascript.core.entid = datascript.db.entid;
goog.exportSymbol('datascript.core.entid', datascript.core.entid);
datascript.core.conn_QMARK_ = (function datascript$core$conn_QMARK_(conn){
var and__28737__auto__ = ((!((conn == null)))?((((conn.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === conn.cljs$core$IDeref$)))?true:(((!conn.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,conn));
if(and__28737__auto__){
return datascript.db.db_QMARK_.call(null,cljs.core.deref.call(null,conn));
} else {
return and__28737__auto__;
}
});
goog.exportSymbol('datascript.core.conn_QMARK_', datascript.core.conn_QMARK_);
datascript.core.conn_from_db = (function datascript$core$conn_from_db(db){
return cljs.core.atom.call(null,db,new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
});
goog.exportSymbol('datascript.core.conn_from_db', datascript.core.conn_from_db);
datascript.core.conn_from_datoms = (function datascript$core$conn_from_datoms(var_args){
var args36563 = [];
var len__29970__auto___36566 = arguments.length;
var i__29971__auto___36567 = (0);
while(true){
if((i__29971__auto___36567 < len__29970__auto___36566)){
args36563.push((arguments[i__29971__auto___36567]));

var G__36568 = (i__29971__auto___36567 + (1));
i__29971__auto___36567 = G__36568;
continue;
} else {
}
break;
}

var G__36565 = args36563.length;
switch (G__36565) {
case 1:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36563.length)].join('')));

}
});
goog.exportSymbol('datascript.core.conn_from_datoms', datascript.core.conn_from_datoms);

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$1 = (function (datoms){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms));
});

datascript.core.conn_from_datoms.cljs$core$IFn$_invoke$arity$2 = (function (datoms,schema){
return datascript.core.conn_from_db.call(null,datascript.core.init_db.call(null,datoms,schema));
});

datascript.core.conn_from_datoms.cljs$lang$maxFixedArity = 2;

datascript.core.create_conn = (function datascript$core$create_conn(var_args){
var args36570 = [];
var len__29970__auto___36573 = arguments.length;
var i__29971__auto___36574 = (0);
while(true){
if((i__29971__auto___36574 < len__29970__auto___36573)){
args36570.push((arguments[i__29971__auto___36574]));

var G__36575 = (i__29971__auto___36574 + (1));
i__29971__auto___36574 = G__36575;
continue;
} else {
}
break;
}

var G__36572 = args36570.length;
switch (G__36572) {
case 0:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36570.length)].join('')));

}
});
goog.exportSymbol('datascript.core.create_conn', datascript.core.create_conn);

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null));
});

datascript.core.create_conn.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return datascript.core.conn_from_db.call(null,datascript.core.empty_db.call(null,schema));
});

datascript.core.create_conn.cljs$lang$maxFixedArity = 1;

datascript.core._transact_BANG_ = (function datascript$core$_transact_BANG_(conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datascript.core.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
datascript.core.transact_BANG_ = (function datascript$core$transact_BANG_(var_args){
var args36577 = [];
var len__29970__auto___36590 = arguments.length;
var i__29971__auto___36591 = (0);
while(true){
if((i__29971__auto___36591 < len__29970__auto___36590)){
args36577.push((arguments[i__29971__auto___36591]));

var G__36592 = (i__29971__auto___36591 + (1));
i__29971__auto___36591 = G__36592;
continue;
} else {
}
break;
}

var G__36579 = args36577.length;
switch (G__36579) {
case 2:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36577.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_BANG_', datascript.core.transact_BANG_);

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_BANG_.call(null,conn,tx_data,null);
});

datascript.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var report = datascript.core._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__36580_36594 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__36581_36595 = null;
var count__36582_36596 = (0);
var i__36583_36597 = (0);
while(true){
if((i__36583_36597 < count__36582_36596)){
var vec__36584_36598 = cljs.core._nth.call(null,chunk__36581_36595,i__36583_36597);
var __36599 = cljs.core.nth.call(null,vec__36584_36598,(0),null);
var callback_36600 = cljs.core.nth.call(null,vec__36584_36598,(1),null);
callback_36600.call(null,report);

var G__36601 = seq__36580_36594;
var G__36602 = chunk__36581_36595;
var G__36603 = count__36582_36596;
var G__36604 = (i__36583_36597 + (1));
seq__36580_36594 = G__36601;
chunk__36581_36595 = G__36602;
count__36582_36596 = G__36603;
i__36583_36597 = G__36604;
continue;
} else {
var temp__6738__auto___36605 = cljs.core.seq.call(null,seq__36580_36594);
if(temp__6738__auto___36605){
var seq__36580_36606__$1 = temp__6738__auto___36605;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36580_36606__$1)){
var c__29660__auto___36607 = cljs.core.chunk_first.call(null,seq__36580_36606__$1);
var G__36608 = cljs.core.chunk_rest.call(null,seq__36580_36606__$1);
var G__36609 = c__29660__auto___36607;
var G__36610 = cljs.core.count.call(null,c__29660__auto___36607);
var G__36611 = (0);
seq__36580_36594 = G__36608;
chunk__36581_36595 = G__36609;
count__36582_36596 = G__36610;
i__36583_36597 = G__36611;
continue;
} else {
var vec__36587_36612 = cljs.core.first.call(null,seq__36580_36606__$1);
var __36613 = cljs.core.nth.call(null,vec__36587_36612,(0),null);
var callback_36614 = cljs.core.nth.call(null,vec__36587_36612,(1),null);
callback_36614.call(null,report);

var G__36615 = cljs.core.next.call(null,seq__36580_36606__$1);
var G__36616 = null;
var G__36617 = (0);
var G__36618 = (0);
seq__36580_36594 = G__36615;
chunk__36581_36595 = G__36616;
count__36582_36596 = G__36617;
i__36583_36597 = G__36618;
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
var args36620 = [];
var len__29970__auto___36633 = arguments.length;
var i__29971__auto___36634 = (0);
while(true){
if((i__29971__auto___36634 < len__29970__auto___36633)){
args36620.push((arguments[i__29971__auto___36634]));

var G__36635 = (i__29971__auto___36634 + (1));
i__29971__auto___36634 = G__36635;
continue;
} else {
}
break;
}

var G__36622 = args36620.length;
switch (G__36622) {
case 2:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36620.length)].join('')));

}
});
goog.exportSymbol('datascript.core.reset_conn_BANG_', datascript.core.reset_conn_BANG_);

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,db){
return datascript.core.reset_conn_BANG_.call(null,conn,db,null);
});

datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,db,tx_meta){
var report = datascript.db.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__36619_SHARP_){
return cljs.core.assoc.call(null,p1__36619_SHARP_,new cljs.core.Keyword(null,"added","added",2057651688),false);
}),datascript.core.datoms.call(null,cljs.core.deref.call(null,conn),new cljs.core.Keyword(null,"eavt","eavt",-666437073))),datascript.core.datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073))),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null));
cljs.core.reset_BANG_.call(null,conn,db);

var seq__36623_36637 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__36624_36638 = null;
var count__36625_36639 = (0);
var i__36626_36640 = (0);
while(true){
if((i__36626_36640 < count__36625_36639)){
var vec__36627_36641 = cljs.core._nth.call(null,chunk__36624_36638,i__36626_36640);
var __36642 = cljs.core.nth.call(null,vec__36627_36641,(0),null);
var callback_36643 = cljs.core.nth.call(null,vec__36627_36641,(1),null);
callback_36643.call(null,report);

var G__36644 = seq__36623_36637;
var G__36645 = chunk__36624_36638;
var G__36646 = count__36625_36639;
var G__36647 = (i__36626_36640 + (1));
seq__36623_36637 = G__36644;
chunk__36624_36638 = G__36645;
count__36625_36639 = G__36646;
i__36626_36640 = G__36647;
continue;
} else {
var temp__6738__auto___36648 = cljs.core.seq.call(null,seq__36623_36637);
if(temp__6738__auto___36648){
var seq__36623_36649__$1 = temp__6738__auto___36648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36623_36649__$1)){
var c__29660__auto___36650 = cljs.core.chunk_first.call(null,seq__36623_36649__$1);
var G__36651 = cljs.core.chunk_rest.call(null,seq__36623_36649__$1);
var G__36652 = c__29660__auto___36650;
var G__36653 = cljs.core.count.call(null,c__29660__auto___36650);
var G__36654 = (0);
seq__36623_36637 = G__36651;
chunk__36624_36638 = G__36652;
count__36625_36639 = G__36653;
i__36626_36640 = G__36654;
continue;
} else {
var vec__36630_36655 = cljs.core.first.call(null,seq__36623_36649__$1);
var __36656 = cljs.core.nth.call(null,vec__36630_36655,(0),null);
var callback_36657 = cljs.core.nth.call(null,vec__36630_36655,(1),null);
callback_36657.call(null,report);

var G__36658 = cljs.core.next.call(null,seq__36623_36649__$1);
var G__36659 = null;
var G__36660 = (0);
var G__36661 = (0);
seq__36623_36637 = G__36658;
chunk__36624_36638 = G__36659;
count__36625_36639 = G__36660;
i__36626_36640 = G__36661;
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
var args36662 = [];
var len__29970__auto___36665 = arguments.length;
var i__29971__auto___36666 = (0);
while(true){
if((i__29971__auto___36666 < len__29970__auto___36665)){
args36662.push((arguments[i__29971__auto___36666]));

var G__36667 = (i__29971__auto___36666 + (1));
i__29971__auto___36666 = G__36667;
continue;
} else {
}
break;
}

var G__36664 = args36662.length;
switch (G__36664) {
case 2:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36662.length)].join('')));

}
});
goog.exportSymbol('datascript.core.listen_BANG_', datascript.core.listen_BANG_);

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (conn,callback){
return datascript.core.listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});

datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (conn,key,callback){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});

datascript.core.listen_BANG_.cljs$lang$maxFixedArity = 3;

datascript.core.unlisten_BANG_ = (function datascript$core$unlisten_BANG_(conn,key){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
goog.exportSymbol('datascript.core.unlisten_BANG_', datascript.core.unlisten_BANG_);
datascript.core.data_readers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("datascript","Datom","datascript/Datom",-901340080,null),datascript.db.datom_from_reader,new cljs.core.Symbol("datascript","DB","datascript/DB",-487332776,null),datascript.db.db_from_reader], null);
var seq__36669_36679 = cljs.core.seq.call(null,datascript.core.data_readers);
var chunk__36670_36680 = null;
var count__36671_36681 = (0);
var i__36672_36682 = (0);
while(true){
if((i__36672_36682 < count__36671_36681)){
var vec__36673_36683 = cljs.core._nth.call(null,chunk__36670_36680,i__36672_36682);
var tag_36684 = cljs.core.nth.call(null,vec__36673_36683,(0),null);
var cb_36685 = cljs.core.nth.call(null,vec__36673_36683,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_36684,cb_36685);

var G__36686 = seq__36669_36679;
var G__36687 = chunk__36670_36680;
var G__36688 = count__36671_36681;
var G__36689 = (i__36672_36682 + (1));
seq__36669_36679 = G__36686;
chunk__36670_36680 = G__36687;
count__36671_36681 = G__36688;
i__36672_36682 = G__36689;
continue;
} else {
var temp__6738__auto___36690 = cljs.core.seq.call(null,seq__36669_36679);
if(temp__6738__auto___36690){
var seq__36669_36691__$1 = temp__6738__auto___36690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36669_36691__$1)){
var c__29660__auto___36692 = cljs.core.chunk_first.call(null,seq__36669_36691__$1);
var G__36693 = cljs.core.chunk_rest.call(null,seq__36669_36691__$1);
var G__36694 = c__29660__auto___36692;
var G__36695 = cljs.core.count.call(null,c__29660__auto___36692);
var G__36696 = (0);
seq__36669_36679 = G__36693;
chunk__36670_36680 = G__36694;
count__36671_36681 = G__36695;
i__36672_36682 = G__36696;
continue;
} else {
var vec__36676_36697 = cljs.core.first.call(null,seq__36669_36691__$1);
var tag_36698 = cljs.core.nth.call(null,vec__36676_36697,(0),null);
var cb_36699 = cljs.core.nth.call(null,vec__36676_36697,(1),null);
cljs.reader.register_tag_parser_BANG_.call(null,tag_36698,cb_36699);

var G__36700 = cljs.core.next.call(null,seq__36669_36691__$1);
var G__36701 = null;
var G__36702 = (0);
var G__36703 = (0);
seq__36669_36679 = G__36700;
chunk__36670_36680 = G__36701;
count__36671_36681 = G__36702;
i__36672_36682 = G__36703;
continue;
}
} else {
}
}
break;
}
datascript.core.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.core.tempid = (function datascript$core$tempid(var_args){
var args36704 = [];
var len__29970__auto___36707 = arguments.length;
var i__29971__auto___36708 = (0);
while(true){
if((i__29971__auto___36708 < len__29970__auto___36707)){
args36704.push((arguments[i__29971__auto___36708]));

var G__36709 = (i__29971__auto___36708 + (1));
i__29971__auto___36708 = G__36709;
continue;
} else {
}
break;
}

var G__36706 = args36704.length;
switch (G__36706) {
case 1:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return datascript.core.tempid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36704.length)].join('')));

}
});
goog.exportSymbol('datascript.core.tempid', datascript.core.tempid);

datascript.core.tempid.cljs$core$IFn$_invoke$arity$1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datascript.core.last_tempid,cljs.core.dec);
}
});

datascript.core.tempid.cljs$core$IFn$_invoke$arity$2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});

datascript.core.tempid.cljs$lang$maxFixedArity = 2;

datascript.core.resolve_tempid = (function datascript$core$resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
goog.exportSymbol('datascript.core.resolve_tempid', datascript.core.resolve_tempid);
datascript.core.db = (function datascript$core$db(conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return cljs.core.deref.call(null,conn);
});
goog.exportSymbol('datascript.core.db', datascript.core.db);
datascript.core.transact = (function datascript$core$transact(var_args){
var args36711 = [];
var len__29970__auto___36717 = arguments.length;
var i__29971__auto___36718 = (0);
while(true){
if((i__29971__auto___36718 < len__29970__auto___36717)){
args36711.push((arguments[i__29971__auto___36718]));

var G__36719 = (i__29971__auto___36718 + (1));
i__29971__auto___36718 = G__36719;
continue;
} else {
}
break;
}

var G__36713 = args36711.length;
switch (G__36713) {
case 2:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36711.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact', datascript.core.transact);

datascript.core.transact.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact.call(null,conn,tx_data,null);
});

datascript.core.transact.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

var res = datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datascript.core.t_datascript$core36714 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core36714 = (function (conn,tx_data,tx_meta,res,meta36715){
this.conn = conn;
this.tx_data = tx_data;
this.tx_meta = tx_meta;
this.res = res;
this.meta36715 = meta36715;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core36714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res){
return (function (_36716,meta36715__$1){
var self__ = this;
var _36716__$1 = this;
return (new datascript.core.t_datascript$core36714(self__.conn,self__.tx_data,self__.tx_meta,self__.res,meta36715__$1));
});})(res))
;

datascript.core.t_datascript$core36714.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res){
return (function (_36716){
var self__ = this;
var _36716__$1 = this;
return self__.meta36715;
});})(res))
;

datascript.core.t_datascript$core36714.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core36714.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res))
;

datascript.core.t_datascript$core36714.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res))
;

datascript.core.t_datascript$core36714.getBasis = ((function (res){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"conn","conn",1918841190,null),new cljs.core.Symbol(null,"tx-data","tx-data",-1720276008,null),new cljs.core.Symbol(null,"tx-meta","tx-meta",-1495152575,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"meta36715","meta36715",-2019334521,null)], null);
});})(res))
;

datascript.core.t_datascript$core36714.cljs$lang$type = true;

datascript.core.t_datascript$core36714.cljs$lang$ctorStr = "datascript.core/t_datascript$core36714";

datascript.core.t_datascript$core36714.cljs$lang$ctorPrWriter = ((function (res){
return (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"datascript.core/t_datascript$core36714");
});})(res))
;

datascript.core.__GT_t_datascript$core36714 = ((function (res){
return (function datascript$core$__GT_t_datascript$core36714(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta36715){
return (new datascript.core.t_datascript$core36714(conn__$1,tx_data__$1,tx_meta__$1,res__$1,meta36715));
});})(res))
;

}

return (new datascript.core.t_datascript$core36714(conn,tx_data,tx_meta,res,cljs.core.PersistentArrayMap.EMPTY));
});

datascript.core.transact.cljs$lang$maxFixedArity = 3;

datascript.core.future_call = (function datascript$core$future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datascript.core.t_datascript$core36724 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IDerefWithTimeout}
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
datascript.core.t_datascript$core36724 = (function (f,res,realized,meta36725){
this.f = f;
this.res = res;
this.realized = realized;
this.meta36725 = meta36725;
this.cljs$lang$protocol_mask$partition0$ = 491520;
this.cljs$lang$protocol_mask$partition1$ = 1;
})
datascript.core.t_datascript$core36724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_36726,meta36725__$1){
var self__ = this;
var _36726__$1 = this;
return (new datascript.core.t_datascript$core36724(self__.f,self__.res,self__.realized,meta36725__$1));
});})(res,realized))
;

datascript.core.t_datascript$core36724.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_36726){
var self__ = this;
var _36726__$1 = this;
return self__.meta36725;
});})(res,realized))
;

datascript.core.t_datascript$core36724.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.core.t_datascript$core36724.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized))){
return cljs.core.deref.call(null,self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.core.t_datascript$core36724.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.core.t_datascript$core36724.getBasis = ((function (res,realized){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"res","res",245523648,null),new cljs.core.Symbol(null,"realized","realized",1487343404,null),new cljs.core.Symbol(null,"meta36725","meta36725",1223748639,null)], null);
});})(res,realized))
;

datascript.core.t_datascript$core36724.cljs$lang$type = true;

datascript.core.t_datascript$core36724.cljs$lang$ctorStr = "datascript.core/t_datascript$core36724";

datascript.core.t_datascript$core36724.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__29406__auto__,writer__29407__auto__,opt__29408__auto__){
return cljs.core._write.call(null,writer__29407__auto__,"datascript.core/t_datascript$core36724");
});})(res,realized))
;

datascript.core.__GT_t_datascript$core36724 = ((function (res,realized){
return (function datascript$core$future_call_$___GT_t_datascript$core36724(f__$1,res__$1,realized__$1,meta36725){
return (new datascript.core.t_datascript$core36724(f__$1,res__$1,realized__$1,meta36725));
});})(res,realized))
;

}

return (new datascript.core.t_datascript$core36724(f,res,realized,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.core.transact_async = (function datascript$core$transact_async(var_args){
var args36727 = [];
var len__29970__auto___36730 = arguments.length;
var i__29971__auto___36731 = (0);
while(true){
if((i__29971__auto___36731 < len__29970__auto___36730)){
args36727.push((arguments[i__29971__auto___36731]));

var G__36732 = (i__29971__auto___36731 + (1));
i__29971__auto___36731 = G__36732;
continue;
} else {
}
break;
}

var G__36729 = args36727.length;
switch (G__36729) {
case 2:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36727.length)].join('')));

}
});
goog.exportSymbol('datascript.core.transact_async', datascript.core.transact_async);

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$2 = (function (conn,tx_data){
return datascript.core.transact_async.call(null,conn,tx_data,null);
});

datascript.core.transact_async.cljs$core$IFn$_invoke$arity$3 = (function (conn,tx_data,tx_meta){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,conn))){
} else {
throw (new Error("Assert failed: (conn? conn)"));
}

return datascript.core.future_call.call(null,(function (){
return datascript.core.transact_BANG_.call(null,conn,tx_data,tx_meta);
}));
});

datascript.core.transact_async.cljs$lang$maxFixedArity = 3;

datascript.core.rand_bits = (function datascript$core$rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.core.to_hex_string = (function datascript$core$to_hex_string(n,l){
var s = n.toString((16));
var c = cljs.core.count.call(null,s);
if((c > l)){
return cljs.core.subs.call(null,s,(0),l);
} else {
if((c < l)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(l - c),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return s;

}
}
});
datascript.core.squuid = (function datascript$core$squuid(var_args){
var args36734 = [];
var len__29970__auto___36737 = arguments.length;
var i__29971__auto___36738 = (0);
while(true){
if((i__29971__auto___36738 < len__29970__auto___36737)){
args36734.push((arguments[i__29971__auto___36738]));

var G__36739 = (i__29971__auto___36738 + (1));
i__29971__auto___36738 = G__36739;
continue;
} else {
}
break;
}

var G__36736 = args36734.length;
switch (G__36736) {
case 0:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return datascript.core.squuid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36734.length)].join('')));

}
});
goog.exportSymbol('datascript.core.squuid', datascript.core.squuid);

datascript.core.squuid.cljs$core$IFn$_invoke$arity$0 = (function (){
return datascript.core.squuid.call(null,(new Date()).getTime());
});

datascript.core.squuid.cljs$core$IFn$_invoke$arity$1 = (function (msec){
return cljs.core.uuid.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,((msec / (1000)) | (0)),(8))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (4095)) | (16384)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,((datascript.core.rand_bits.call(null,(16)) & (16383)) | (32768)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(datascript.core.to_hex_string.call(null,datascript.core.rand_bits.call(null,(16)),(4)))].join(''));
});

datascript.core.squuid.cljs$lang$maxFixedArity = 1;

datascript.core.squuid_time_millis = (function datascript$core$squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid)].join(''),(0),(8)),(16)) * (1000));
});
goog.exportSymbol('datascript.core.squuid_time_millis', datascript.core.squuid_time_millis);

//# sourceMappingURL=core.js.map