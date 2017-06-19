// Compiled by ClojureScript 1.9.518 {}
goog.provide('posh.reagent');
goog.require('cljs.core');
goog.require('posh.core');
goog.require('posh.stateful');
goog.require('posh.lib.db');
goog.require('posh.lib.update');
goog.require('datascript.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
posh.reagent.missing_pull_result = (function posh$reagent$missing_pull_result(pull_expr){
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null), null),pull_expr))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),null], null);
} else {
return null;
}
});
posh.reagent.safe_pull = (function posh$reagent$safe_pull(db,query,id){
if(cljs.core.integer_QMARK_.call(null,id)){
return datascript.core.pull.call(null,db,query,id);
} else {
if(cljs.core.vector_QMARK_.call(null,id)){
var temp__6736__auto__ = datascript.core.entid.call(null,db,id);
if(cljs.core.truth_(temp__6736__auto__)){
var eid = temp__6736__auto__;
return datascript.core.pull.call(null,db,query,eid);
} else {
return posh.reagent.missing_pull_result.call(null,query);
}
} else {
if((id == null)){
return posh.reagent.missing_pull_result.call(null,query);
} else {
return null;
}
}
}
});
posh.reagent.dcfg = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"db","db",993250759),datascript.core.db,new cljs.core.Keyword(null,"pull","pull",-860544805),posh.reagent.safe_pull,new cljs.core.Keyword(null,"q","q",689001697),datascript.core.q,new cljs.core.Keyword(null,"filter","filter",-948537934),datascript.core.filter,new cljs.core.Keyword(null,"with","with",-1536296876),datascript.core.with$,new cljs.core.Keyword(null,"entid","entid",1720688982),datascript.core.entid,new cljs.core.Keyword(null,"transact!","transact!",-822725810),datascript.core.transact_BANG_], null);
posh.reagent.set_conn_listener_BANG_ = (function posh$reagent$set_conn_listener_BANG_(posh_atom,conn,db_id){
var posh_vars = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810),posh_atom,new cljs.core.Keyword(null,"db-id","db-id",747248515),db_id], null);
datascript.core.listen_BANG_.call(null,conn,new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766),((function (posh_vars){
return (function (var$){
if((var$ instanceof cljs.core.Keyword)){
return cljs.core.get.call(null,posh_vars,var$);
} else {
return null;
}
});})(posh_vars))
);

cljs.core.add_watch.call(null,conn,new cljs.core.Keyword(null,"posh-schema-listener","posh-schema-listener",-158129486),((function (posh_vars){
return (function (_,___$1,old_state,new_state){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state))){
return cljs.core.swap_BANG_.call(null,posh_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),db_id], null),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(new_state));
} else {
return null;
}
});})(posh_vars))
);

datascript.core.listen_BANG_.call(null,conn,new cljs.core.Keyword(null,"posh-listener","posh-listener",-6636061),((function (posh_vars){
return (function (tx_report){
var map__39144 = cljs.core.swap_BANG_.call(null,posh_atom,posh.core.after_transact,cljs.core.PersistentArrayMap.createAsIfByAssoc([conn,tx_report]));
var map__39144__$1 = ((((!((map__39144 == null)))?((((map__39144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39144):map__39144);
var ratoms = cljs.core.get.call(null,map__39144__$1,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364));
var changed = cljs.core.get.call(null,map__39144__$1,new cljs.core.Keyword(null,"changed","changed",570724917));
var seq__39146 = cljs.core.seq.call(null,changed);
var chunk__39147 = null;
var count__39148 = (0);
var i__39149 = (0);
while(true){
if((i__39149 < count__39148)){
var vec__39150 = cljs.core._nth.call(null,chunk__39147,i__39149);
var k = cljs.core.nth.call(null,vec__39150,(0),null);
var v = cljs.core.nth.call(null,vec__39150,(1),null);
cljs.core.reset_BANG_.call(null,cljs.core.get.call(null,ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));

var G__39156 = seq__39146;
var G__39157 = chunk__39147;
var G__39158 = count__39148;
var G__39159 = (i__39149 + (1));
seq__39146 = G__39156;
chunk__39147 = G__39157;
count__39148 = G__39158;
i__39149 = G__39159;
continue;
} else {
var temp__6738__auto__ = cljs.core.seq.call(null,seq__39146);
if(temp__6738__auto__){
var seq__39146__$1 = temp__6738__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39146__$1)){
var c__29660__auto__ = cljs.core.chunk_first.call(null,seq__39146__$1);
var G__39160 = cljs.core.chunk_rest.call(null,seq__39146__$1);
var G__39161 = c__29660__auto__;
var G__39162 = cljs.core.count.call(null,c__29660__auto__);
var G__39163 = (0);
seq__39146 = G__39160;
chunk__39147 = G__39161;
count__39148 = G__39162;
i__39149 = G__39163;
continue;
} else {
var vec__39153 = cljs.core.first.call(null,seq__39146__$1);
var k = cljs.core.nth.call(null,vec__39153,(0),null);
var v = cljs.core.nth.call(null,vec__39153,(1),null);
cljs.core.reset_BANG_.call(null,cljs.core.get.call(null,ratoms,k),new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(v));

var G__39164 = cljs.core.next.call(null,seq__39146__$1);
var G__39165 = null;
var G__39166 = (0);
var G__39167 = (0);
seq__39146 = G__39164;
chunk__39147 = G__39165;
count__39148 = G__39166;
i__39149 = G__39167;
continue;
}
} else {
return null;
}
}
break;
}
});})(posh_vars))
);

return conn;
});
posh.reagent.posh_BANG_ = (function posh$reagent$posh_BANG_(var_args){
var args__29977__auto__ = [];
var len__29970__auto___39169 = arguments.length;
var i__29971__auto___39170 = (0);
while(true){
if((i__29971__auto___39170 < len__29970__auto___39169)){
args__29977__auto__.push((arguments[i__29971__auto___39170]));

var G__39171 = (i__29971__auto___39170 + (1));
i__29971__auto___39170 = G__39171;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((0) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((0)),(0),null)):null);
return posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__29978__auto__);
});

posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (conns){
var posh_atom = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return cljs.core.reset_BANG_.call(null,posh_atom,(function (){var n = (0);
var conns__$1 = conns;
var posh_tree = cljs.core.assoc.call(null,posh.core.empty_tree.call(null,posh.reagent.dcfg,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113)], null)),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.PersistentArrayMap.EMPTY);
while(true){
if(cljs.core.empty_QMARK_.call(null,conns__$1)){
return posh_tree;
} else {
var G__39172 = (n + (1));
var G__39173 = cljs.core.rest.call(null,conns__$1);
var G__39174 = (function (){var db_id = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("conn"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
return posh.core.add_db.call(null,posh_tree,db_id,posh.reagent.set_conn_listener_BANG_.call(null,posh_atom,cljs.core.first.call(null,conns__$1),db_id),new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.first.call(null,conns__$1))));
})();
n = G__39172;
conns__$1 = G__39173;
posh_tree = G__39174;
continue;
}
break;
}
})());
});

posh.reagent.posh_BANG_.cljs$lang$maxFixedArity = (0);

posh.reagent.posh_BANG_.cljs$lang$applyTo = (function (seq39168){
return posh.reagent.posh_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39168));
});

posh.reagent.get_conn_var = (function posh$reagent$get_conn_var(conn,var$){
return new cljs.core.Keyword(null,"posh-dispenser","posh-dispenser",-482466766).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)))).call(null,var$);
});
posh.reagent.get_posh_atom = (function posh$reagent$get_posh_atom(poshdb_or_conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,poshdb_or_conn))){
return posh.reagent.get_conn_var.call(null,poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810));
} else {
return posh.stateful.get_posh_atom.call(null,poshdb_or_conn);
}
});
posh.reagent.get_db = (function posh$reagent$get_db(poshdb_or_conn){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,poshdb_or_conn))){
return cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759),posh.reagent.get_conn_var.call(null,poshdb_or_conn,new cljs.core.Keyword(null,"db-id","db-id",747248515))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"posh","posh",-1205664462),posh.reagent.get_conn_var.call(null,poshdb_or_conn,new cljs.core.Keyword(null,"posh-atom","posh-atom",-510480810))], null));
} else {
return poshdb_or_conn;
}
});
posh.reagent.rm_posh_item = (function posh$reagent$rm_posh_item(posh_atom,storage_key){
return cljs.core.swap_BANG_.call(null,posh_atom,(function (posh_atom_val){
return cljs.core.assoc.call(null,posh.core.remove_item.call(null,posh_atom_val,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key),new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val),storage_key));
}));
});
posh.reagent.make_query_reaction = (function posh$reagent$make_query_reaction(var_args){
var args39175 = [];
var len__29970__auto___39178 = arguments.length;
var i__29971__auto___39179 = (0);
while(true){
if((i__29971__auto___39179 < len__29970__auto___39178)){
args39175.push((arguments[i__29971__auto___39179]));

var G__39180 = (i__29971__auto___39179 + (1));
i__29971__auto___39179 = G__39180;
continue;
} else {
}
break;
}

var G__39177 = args39175.length;
switch (G__39177) {
case 4:
return posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39175.length)].join('')));

}
});

posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$4 = (function (posh_atom,storage_key,add_query_fn,options){
var temp__6736__auto__ = cljs.core.get_in.call(null,cljs.core.deref.call(null,posh_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reactions","reactions",2029850654),storage_key], null));
if(cljs.core.truth_(temp__6736__auto__)){
var r = temp__6736__auto__;
return r;
} else {
return cljs.core.get.call(null,new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(cljs.core.swap_BANG_.call(null,posh_atom,((function (temp__6736__auto__){
return (function (posh_atom_val){
var posh_atom_with_query = add_query_fn.call(null,posh_atom_val);
var query_result = new cljs.core.Keyword(null,"results","results",-1134170113).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key));
var query_ratom = (function (){var or__28749__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key);
if(cljs.core.truth_(or__28749__auto__)){
return or__28749__auto__;
} else {
return reagent.core.atom.call(null,query_result);
}
})();
var query_reaction = reagent.ratom.make_reaction.call(null,((function (posh_atom_with_query,query_result,query_ratom,temp__6736__auto__){
return (function (){
return cljs.core.deref.call(null,query_ratom);
});})(posh_atom_with_query,query_result,query_ratom,temp__6736__auto__))
,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),((function (posh_atom_with_query,query_result,query_ratom,temp__6736__auto__){
return (function (_,___$1){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cache","cache",-1237023054).cljs$core$IFn$_invoke$arity$1(options),new cljs.core.Keyword(null,"forever","forever",2103455015))){
return null;
} else {
return cljs.core.swap_BANG_.call(null,posh_atom,((function (posh_atom_with_query,query_result,query_ratom,temp__6736__auto__){
return (function (posh_atom_val__$1){
return cljs.core.assoc.call(null,posh.core.remove_item.call(null,posh_atom_val__$1,storage_key),new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key),new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_val__$1),storage_key));
});})(posh_atom_with_query,query_result,query_ratom,temp__6736__auto__))
);
}
});})(posh_atom_with_query,query_result,query_ratom,temp__6736__auto__))
);
return cljs.core.assoc.call(null,posh_atom_with_query,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"ratoms","ratoms",1900437364).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_ratom),new cljs.core.Keyword(null,"reactions","reactions",2029850654),cljs.core.assoc.call(null,new cljs.core.Keyword(null,"reactions","reactions",2029850654).cljs$core$IFn$_invoke$arity$1(posh_atom_with_query),storage_key,query_reaction));
});})(temp__6736__auto__))
)),storage_key);
}
});

posh.reagent.make_query_reaction.cljs$core$IFn$_invoke$arity$3 = (function (posh_atom,storage_key,add_query_fn){
return posh.reagent.make_query_reaction.call(null,posh_atom,storage_key,add_query_fn,cljs.core.PersistentArrayMap.EMPTY);
});

posh.reagent.make_query_reaction.cljs$lang$maxFixedArity = 4;

/**
 * Returns a reaction of a pull expression. The options argument may specify `:cache :forever`, which keeps query results
 *   cached indefinitely, even if the reaction is disposed.
 */
posh.reagent.pull = (function posh$reagent$pull(var_args){
var args39183 = [];
var len__29970__auto___39186 = arguments.length;
var i__29971__auto___39187 = (0);
while(true){
if((i__29971__auto___39187 < len__29970__auto___39186)){
args39183.push((arguments[i__29971__auto___39187]));

var G__39188 = (i__29971__auto___39187 + (1));
i__29971__auto___39187 = G__39188;
continue;
} else {
}
break;
}

var G__39185 = args39183.length;
switch (G__39185) {
case 4:
return posh.reagent.pull.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return posh.reagent.pull.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args39183.length)].join('')));

}
});

posh.reagent.pull.cljs$core$IFn$_invoke$arity$4 = (function (poshdb,pull_pattern,eid,options){
var true_poshdb = posh.reagent.get_db.call(null,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.reagent.get_posh_atom.call(null,poshdb);
return posh.reagent.make_query_reaction.call(null,posh_atom,storage_key,((function (true_poshdb,storage_key,posh_atom){
return (function (p1__39182_SHARP_){
return posh.core.add_pull.call(null,p1__39182_SHARP_,true_poshdb,pull_pattern,eid);
});})(true_poshdb,storage_key,posh_atom))
,options);
});

posh.reagent.pull.cljs$core$IFn$_invoke$arity$3 = (function (poshdb,pull_pattern,eid){
return posh.reagent.pull.call(null,poshdb,pull_pattern,eid,cljs.core.PersistentArrayMap.EMPTY);
});

posh.reagent.pull.cljs$lang$maxFixedArity = 4;

posh.reagent.pull_info = (function posh$reagent$pull_info(poshdb,pull_pattern,eid){
var true_poshdb = posh.reagent.get_db.call(null,poshdb);
var storage_key = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pull","pull",-860544805),true_poshdb,pull_pattern,eid], null);
var posh_atom = posh.reagent.get_posh_atom.call(null,poshdb);
return cljs.core.dissoc.call(null,posh.lib.update.update_pull.call(null,cljs.core.deref.call(null,posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
});
posh.reagent.pull_tx = (function posh$reagent$pull_tx(tx_patterns,poshdb,pull_pattern,eid){
cljs.core.println.call(null,"pull-tx is deprecated. Calling pull without your tx-patterns.");

return posh.reagent.pull.call(null,poshdb,pull_pattern,eid);
});
posh.reagent.parse_q_query = (function posh$reagent$parse_q_query(query){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__39194,query_item){
var vec__39195 = p__39194;
var parsed_query = cljs.core.nth.call(null,vec__39195,(0),null);
var last_key = cljs.core.nth.call(null,vec__39195,(1),null);
if((query_item instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,parsed_query,query_item,cljs.core.PersistentVector.EMPTY),query_item], null);
} else {
if(cljs.core.truth_(last_key)){
} else {
throw (new Error("Assert failed: last-key"));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update.call(null,parsed_query,last_key,cljs.core.conj,query_item),last_key], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,null], null),query));
});
posh.reagent.q_args_count = (function posh$reagent$q_args_count(query){
var parsed_query = posh.reagent.parse_q_query.call(null,query);
var temp__6736__auto__ = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(parsed_query);
if(cljs.core.truth_(temp__6736__auto__)){
var in_clause = temp__6736__auto__;
return cljs.core.count.call(null,in_clause);
} else {
return (1);
}
});
/**
 * Returns a datalog query reaction. If args count doens't match the query's input count, a final options map argument
 *   is accepted. This options map may specify `:cache :forever`, which keeps query results cached even if the reaction is
 *   disposed.
 */
posh.reagent.q = (function posh$reagent$q(var_args){
var args__29977__auto__ = [];
var len__29970__auto___39205 = arguments.length;
var i__29971__auto___39206 = (0);
while(true){
if((i__29971__auto___39206 < len__29970__auto___39205)){
args__29977__auto__.push((arguments[i__29971__auto___39206]));

var G__39207 = (i__29971__auto___39206 + (1));
i__29971__auto___39206 = G__39207;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var n_query_args = posh.reagent.q_args_count.call(null,query);
var vec__39202 = ((cljs.core._EQ_.call(null,n_query_args,cljs.core.count.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [args,cljs.core.PersistentArrayMap.EMPTY], null):((cljs.core._EQ_.call(null,(n_query_args + (1)),cljs.core.count.call(null,args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)], null):(function(){throw "Incorrect number of args passed to posh query"})()
));
var args__$1 = cljs.core.nth.call(null,vec__39202,(0),null);
var options = cljs.core.nth.call(null,vec__39202,(1),null);
var true_poshdb_args = cljs.core.map.call(null,((function (n_query_args,vec__39202,args__$1,options){
return (function (p1__39198_SHARP_){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,p1__39198_SHARP_))){
return posh.reagent.get_db.call(null,p1__39198_SHARP_);
} else {
return p1__39198_SHARP_;
}
});})(n_query_args,vec__39202,args__$1,options))
,args__$1);
var posh_atom = cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,posh.reagent.get_posh_atom,args__$1)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return posh.reagent.make_query_reaction.call(null,posh_atom,storage_key,((function (n_query_args,vec__39202,args__$1,options,true_poshdb_args,posh_atom,storage_key){
return (function (p1__39199_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,posh.core.add_q,p1__39199_SHARP_,query),true_poshdb_args);
});})(n_query_args,vec__39202,args__$1,options,true_poshdb_args,posh_atom,storage_key))
,options);
});

posh.reagent.q.cljs$lang$maxFixedArity = (1);

posh.reagent.q.cljs$lang$applyTo = (function (seq39200){
var G__39201 = cljs.core.first.call(null,seq39200);
var seq39200__$1 = cljs.core.next.call(null,seq39200);
return posh.reagent.q.cljs$core$IFn$_invoke$arity$variadic(G__39201,seq39200__$1);
});

posh.reagent.q_info = (function posh$reagent$q_info(var_args){
var args__29977__auto__ = [];
var len__29970__auto___39211 = arguments.length;
var i__29971__auto___39212 = (0);
while(true){
if((i__29971__auto___39212 < len__29970__auto___39211)){
args__29977__auto__.push((arguments[i__29971__auto___39212]));

var G__39213 = (i__29971__auto___39212 + (1));
i__29971__auto___39212 = G__39213;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return posh.reagent.q_info.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

posh.reagent.q_info.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var true_poshdb_args = cljs.core.map.call(null,(function (p1__39208_SHARP_){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,p1__39208_SHARP_))){
return posh.reagent.get_db.call(null,p1__39208_SHARP_);
} else {
return p1__39208_SHARP_;
}
}),args);
var posh_atom = cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,posh.reagent.get_posh_atom,args)));
var storage_key = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"q","q",689001697),query,true_poshdb_args], null);
return cljs.core.dissoc.call(null,posh.lib.update.update_q.call(null,cljs.core.deref.call(null,posh_atom),storage_key),new cljs.core.Keyword(null,"reload-fn","reload-fn",-1150160860));
});

posh.reagent.q_info.cljs$lang$maxFixedArity = (1);

posh.reagent.q_info.cljs$lang$applyTo = (function (seq39209){
var G__39210 = cljs.core.first.call(null,seq39209);
var seq39209__$1 = cljs.core.next.call(null,seq39209);
return posh.reagent.q_info.cljs$core$IFn$_invoke$arity$variadic(G__39210,seq39209__$1);
});

posh.reagent.q_tx = (function posh$reagent$q_tx(var_args){
var args__29977__auto__ = [];
var len__29970__auto___39217 = arguments.length;
var i__29971__auto___39218 = (0);
while(true){
if((i__29971__auto___39218 < len__29970__auto___39217)){
args__29977__auto__.push((arguments[i__29971__auto___39218]));

var G__39219 = (i__29971__auto___39218 + (1));
i__29971__auto___39218 = G__39219;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((2) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((2)),(0),null)):null);
return posh.reagent.q_tx.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29978__auto__);
});

posh.reagent.q_tx.cljs$core$IFn$_invoke$arity$variadic = (function (tx_patterns,query,args){
cljs.core.println.call(null,"q-tx is deprecated. Calling q without your tx-patterns.");

return cljs.core.apply.call(null,posh.reagent.q,query,args);
});

posh.reagent.q_tx.cljs$lang$maxFixedArity = (2);

posh.reagent.q_tx.cljs$lang$applyTo = (function (seq39214){
var G__39215 = cljs.core.first.call(null,seq39214);
var seq39214__$1 = cljs.core.next.call(null,seq39214);
var G__39216 = cljs.core.first.call(null,seq39214__$1);
var seq39214__$2 = cljs.core.next.call(null,seq39214__$1);
return posh.reagent.q_tx.cljs$core$IFn$_invoke$arity$variadic(G__39215,G__39216,seq39214__$2);
});

posh.reagent.filter_tx = (function posh$reagent$filter_tx(poshdb,tx_patterns){
return posh.stateful.add_filter_tx.call(null,posh.reagent.get_db.call(null,poshdb),tx_patterns);
});
posh.reagent.filter_pull = (function posh$reagent$filter_pull(poshdb,pull_pattern,eid){
return posh.stateful.add_filter_pull.call(null,posh.reagent.get_db.call(null,poshdb),pull_pattern,eid);
});
posh.reagent.filter_q = (function posh$reagent$filter_q(var_args){
var args__29977__auto__ = [];
var len__29970__auto___39223 = arguments.length;
var i__29971__auto___39224 = (0);
while(true){
if((i__29971__auto___39224 < len__29970__auto___39223)){
args__29977__auto__.push((arguments[i__29971__auto___39224]));

var G__39225 = (i__29971__auto___39224 + (1));
i__29971__auto___39224 = G__39225;
continue;
} else {
}
break;
}

var argseq__29978__auto__ = ((((1) < args__29977__auto__.length))?(new cljs.core.IndexedSeq(args__29977__auto__.slice((1)),(0),null)):null);
return posh.reagent.filter_q.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29978__auto__);
});

posh.reagent.filter_q.cljs$core$IFn$_invoke$arity$variadic = (function (query,args){
var true_poshdb_args = cljs.core.map.call(null,(function (p1__39220_SHARP_){
if(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,p1__39220_SHARP_))){
return posh.reagent.get_db.call(null,p1__39220_SHARP_);
} else {
return p1__39220_SHARP_;
}
}),args);
return cljs.core.apply.call(null,posh.stateful.add_filter_q,query,true_poshdb_args);
});

posh.reagent.filter_q.cljs$lang$maxFixedArity = (1);

posh.reagent.filter_q.cljs$lang$applyTo = (function (seq39221){
var G__39222 = cljs.core.first.call(null,seq39221);
var seq39221__$1 = cljs.core.next.call(null,seq39221);
return posh.reagent.filter_q.cljs$core$IFn$_invoke$arity$variadic(G__39222,seq39221__$1);
});

posh.reagent.transact_BANG_ = (function posh$reagent$transact_BANG_(poshdb_or_conn,txs){
return datascript.core.transact_BANG_.call(null,(cljs.core.truth_(datascript.core.conn_QMARK_.call(null,poshdb_or_conn))?poshdb_or_conn:posh.stateful.poshdb__GT_conn.call(null,poshdb_or_conn)),txs);
});

//# sourceMappingURL=reagent.js.map