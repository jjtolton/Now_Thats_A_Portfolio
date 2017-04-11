// Compiled by ClojureScript 1.9.229 {:static-fns true, :optimize-constants true}
goog.provide('quiescent.core');
goog.require('cljs.core');
/**
 * Within a component lifecycle function, is be bound to the underlying ReactJS instance.
 */
quiescent.core._STAR_component_STAR_ = null;
/**
 * Mapping of public lifecycle API to internal ReactJS API.
 */
quiescent.core.lifecycle_impls = (function (){var basic = (function (impl){
return (function (){
var this__17331__auto__ = this;
var _STAR_component_STAR_17353 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__17331__auto__;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(impl,ReactDOM.findDOMNode(quiescent.core._STAR_component_STAR_),quiescent.core._STAR_component_STAR_.props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_17353;
}});
});
var with_old_value = ((function (basic){
return (function (impl){
return ((function (basic){
return (function (prev_props,_){
var this__17331__auto__ = this;
var _STAR_component_STAR_17354 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__17331__auto__;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(impl,ReactDOM.findDOMNode(quiescent.core._STAR_component_STAR_),quiescent.core._STAR_component_STAR_.props.value,prev_props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_17354;
}});
;})(basic))
});})(basic))
;
var with_nil_old_value = ((function (basic,with_old_value){
return (function (impl){
return ((function (basic,with_old_value){
return (function (){
var this__17331__auto__ = this;
var _STAR_component_STAR_17355 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__17331__auto__;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(impl,ReactDOM.findDOMNode(quiescent.core._STAR_component_STAR_),quiescent.core._STAR_component_STAR_.props.value,null,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_17355;
}});
;})(basic,with_old_value))
});})(basic,with_old_value))
;
var with_callback = ((function (basic,with_old_value,with_nil_old_value){
return (function (impl){
return ((function (basic,with_old_value,with_nil_old_value){
return (function (cb){
var this__17331__auto__ = this;
var _STAR_component_STAR_17356 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__17331__auto__;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(impl,ReactDOM.findDOMNode(quiescent.core._STAR_component_STAR_),cb,quiescent.core._STAR_component_STAR_.props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_17356;
}});
;})(basic,with_old_value,with_nil_old_value))
});})(basic,with_old_value,with_nil_old_value))
;
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$on_DASH_mount,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$componentDidMount,basic], null),cljs.core.cst$kw$on_DASH_update,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$componentDidUpdate,with_old_value], null),cljs.core.cst$kw$on_DASH_unmount,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$componentWillUnmount,basic], null),cljs.core.cst$kw$on_DASH_render,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$componentDidUpdate,with_old_value,cljs.core.cst$kw$componentDidMount,with_nil_old_value], null),cljs.core.cst$kw$will_DASH_enter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$componentWillEnter,with_callback], null),cljs.core.cst$kw$did_DASH_enter,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$componentDidEnter,basic], null),cljs.core.cst$kw$will_DASH_leave,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$componentWillLeave,with_callback], null),cljs.core.cst$kw$did_DASH_leave,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$componentDidLeave,basic], null)], null);
})();
quiescent.core.build_lifecycle_impls = (function quiescent$core$build_lifecycle_impls(opts_map){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,(function (_,___$1){
throw "Component definition should not provide handlers for both :on-render and (:on-mount | :on-update).";
})),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17379){
var vec__17380 = p__17379;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17380,(0),null);
var impl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17380,(1),null);
var temp__4657__auto__ = (quiescent.core.lifecycle_impls.cljs$core$IFn$_invoke$arity$1 ? quiescent.core.lifecycle_impls.cljs$core$IFn$_invoke$arity$1(key) : quiescent.core.lifecycle_impls.call(null,key));
if(cljs.core.truth_(temp__4657__auto__)){
var impl_map = temp__4657__auto__;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7189__auto__ = ((function (impl_map,temp__4657__auto__,vec__17380,key,impl){
return (function quiescent$core$build_lifecycle_impls_$_iter__17383(s__17384){
return (new cljs.core.LazySeq(null,((function (impl_map,temp__4657__auto__,vec__17380,key,impl){
return (function (){
var s__17384__$1 = s__17384;
while(true){
var temp__4657__auto____$1 = cljs.core.seq(s__17384__$1);
if(temp__4657__auto____$1){
var s__17384__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17384__$2)){
var c__7187__auto__ = cljs.core.chunk_first(s__17384__$2);
var size__7188__auto__ = cljs.core.count(c__7187__auto__);
var b__17386 = cljs.core.chunk_buffer(size__7188__auto__);
if((function (){var i__17385 = (0);
while(true){
if((i__17385 < size__7188__auto__)){
var vec__17395 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7187__auto__,i__17385);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17395,(0),null);
var impl_ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17395,(1),null);
cljs.core.chunk_append(b__17386,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [method,(impl_ctor.cljs$core$IFn$_invoke$arity$1 ? impl_ctor.cljs$core$IFn$_invoke$arity$1(impl) : impl_ctor.call(null,impl))], null));

var G__17401 = (i__17385 + (1));
i__17385 = G__17401;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17386),quiescent$core$build_lifecycle_impls_$_iter__17383(cljs.core.chunk_rest(s__17384__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17386),null);
}
} else {
var vec__17398 = cljs.core.first(s__17384__$2);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17398,(0),null);
var impl_ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17398,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [method,(impl_ctor.cljs$core$IFn$_invoke$arity$1 ? impl_ctor.cljs$core$IFn$_invoke$arity$1(impl) : impl_ctor.call(null,impl))], null),quiescent$core$build_lifecycle_impls_$_iter__17383(cljs.core.rest(s__17384__$2)));
}
} else {
return null;
}
break;
}
});})(impl_map,temp__4657__auto__,vec__17380,key,impl))
,null,null));
});})(impl_map,temp__4657__auto__,vec__17380,key,impl))
;
return iter__7189__auto__(impl_map);
})());
} else {
return null;
}
}),opts_map));
});
/**
 * Return a factory function that will create a ReactElement, using the provided function as the
 *   'render' method for a ReactJS component, which is created and instantiated behind-the-scenes.
 * 
 *   The given render function should take a single immutable value as its first argument, and return
 *   a single ReactElement. Additional arguments to the returned factory function are
 *   /constant arguments/  which will be passed on as additional arguments to the  supplied render
 *   function, but will *not* be included in any calculations regarding whether the element should
 *   re-render. As such, they are suitable for values that will remain constant for  the lifetime of
 *   the rendered element, such as message channels and configuration objects.
 * 
 *   The optional 'opts' argument is a map which contains additional configuration keys:
 * 
 *   :keyfn - a single-argument function which is invoked at component construction time. It is
 *   passed the component's value, and returns the ReactJS key used to uniquely identify this
 *   component among its children.
 * 
 *   :name - the name of the element, used for debugging purposes.
 * 
 *   :on-mount - A function which will be invoked once, immediately after initial rendering occurs.
 *   It is passed the DOM node, the value and any constant args passed to the render fn. This maps
 *   to the 'componentDidMount' lifecycle method in ReactJS.
 * 
 *   :on-update - A function which will be invoked immediately after an update is flushed to the DOM,
 *   but not on the initial render. It is is passed the underlying DOM node, the value,
 *   the _old_ value, and any constant args passed to the render fn. This maps to the
 *   'componentDidUpdate' lifecycle method in ReactJS.
 * 
 *   :on-unmount - A function which will be invoked immediately before a the component is unmounted
 *   from the DOM. It is passed the underlying DOM node, the most recent value and the most recent
 *   constant args passed to the render fn. This maps to the 'componentWillUnmmount' lifecycle
 *   method in ReactJS.
 * 
 *   :on-render - A function which will be invoked immediately after the DOM is updated, both on the
 *   initial render and any subsequent updates. It is is passed the underlying DOM node, the
 *   value, the _old_  value (which will be nil in the case of the initial render) and any constant
 *   args passed to the render fn. This maps to both the 'componentDidMount' and
 *   'componentDidUpdate' lifecycle methods in ReactJS.
 * 
 *   :will-enter - A function invoked whenever this component is added to a ReactTransitionGroup.
 *   Invoked at the same time as :onMount. Is passed the underlying DOM node, a callback
 *   function, the value and any constant args passed to the render fn. Maps to the
 *   'componentWillEnter' lifecycle  method in ReactJS. See the ReactJS documentation at
 *   http://facebook.github.io/react/docs/animation.html for full documentation of the behavior.
 * 
 *   :did-enter - A function invoked after the callback provided to :willEnter is called. It is
 *   passed the underlying DOM node, the value and any constant args passed to the render fn. Maps
 *   to the 'componentDidEnter' lifecycle method in ReactJS. See the ReactJS documentation at
 *   http://facebook.github.io/react/docs/animation.html for full documentation of the behavior.
 * 
 *   :will-leave - A function invoked whenever this component is removed from a ReactTransitionGroup.
 *   Is passed the underlying DOM node, a callback function, the most recent value and the most
 *   recent constant args passed to the render fn. The DOM node will not be removed until the
 *   callback is called. Maps to the 'componentWillEnter' lifecycle method in ReactJS. See the
 *   ReactJS documentation at http://facebook.github.io/react/docs/animation.html for full
 *   documentation of the behavior.
 * 
 *   :did-leave - A function invoked after the callback provided to :willLeave is called (at the same
 *   time as :onUnMount). Is passed the underlying DOM node, the most recent value and the most
 *   recent constant args passed to the render fn. Maps to the 'componentDidLeave' lifecycle method
 *   in ReactJS. See the ReactJS  documentation at
 *   http://facebook.github.io/react/docs/animation.html for full documentation of the behavior.
 * 
 *   The *component* dynamic var will be bound to the underlying ReactJS component for all invocations
 *   of the render function and invocations of functions defined in the opts map.
 */
quiescent.core.component = (function quiescent$core$component(var_args){
var args17402 = [];
var len__7484__auto___17409 = arguments.length;
var i__7485__auto___17410 = (0);
while(true){
if((i__7485__auto___17410 < len__7484__auto___17409)){
args17402.push((arguments[i__7485__auto___17410]));

var G__17411 = (i__7485__auto___17410 + (1));
i__7485__auto___17410 = G__17411;
continue;
} else {
}
break;
}

var G__17404 = args17402.length;
switch (G__17404) {
case 1:
return quiescent.core.component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quiescent.core.component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17402.length)].join('')));

}
});

quiescent.core.component.cljs$core$IFn$_invoke$arity$1 = (function (renderer){
return quiescent.core.component.cljs$core$IFn$_invoke$arity$2(renderer,cljs.core.PersistentArrayMap.EMPTY);
});

quiescent.core.component.cljs$core$IFn$_invoke$arity$2 = (function (renderer,opts){
var impl = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$displayName,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(opts)], null):null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$shouldComponentUpdate,(function (next_props,_){
var this__17331__auto__ = this;
var _STAR_component_STAR_17405 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__17331__auto__;

try{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(quiescent.core._STAR_component_STAR_.props.value,next_props.value);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_17405;
}}),cljs.core.cst$kw$render,(function (){
var this__17331__auto__ = this;
var _STAR_component_STAR_17406 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__17331__auto__;

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(renderer,quiescent.core._STAR_component_STAR_.props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_17406;
}})], null),quiescent.core.build_lifecycle_impls(opts)], 0));
var react_component = React.createClass(cljs.core.clj__GT_js(impl));
return ((function (impl,react_component){
return (function() { 
var G__17413__delegate = function (value,constant_args){
var props = {};
props.value = value;

props.constants = constant_args;

var temp__4657__auto___17414 = cljs.core.cst$kw$keyfn.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4657__auto___17414)){
var keyfn_17415 = temp__4657__auto___17414;
props.key = (keyfn_17415.cljs$core$IFn$_invoke$arity$1 ? keyfn_17415.cljs$core$IFn$_invoke$arity$1(value) : keyfn_17415.call(null,value));
} else {
}

return React.createElement(react_component,props);
};
var G__17413 = function (value,var_args){
var constant_args = null;
if (arguments.length > 1) {
var G__17416__i = 0, G__17416__a = new Array(arguments.length -  1);
while (G__17416__i < G__17416__a.length) {G__17416__a[G__17416__i] = arguments[G__17416__i + 1]; ++G__17416__i;}
  constant_args = new cljs.core.IndexedSeq(G__17416__a,0);
} 
return G__17413__delegate.call(this,value,constant_args);};
G__17413.cljs$lang$maxFixedArity = 1;
G__17413.cljs$lang$applyTo = (function (arglist__17417){
var value = cljs.core.first(arglist__17417);
var constant_args = cljs.core.rest(arglist__17417);
return G__17413__delegate(value,constant_args);
});
G__17413.cljs$core$IFn$_invoke$arity$variadic = G__17413__delegate;
return G__17413;
})()
;
;})(impl,react_component))
});

quiescent.core.component.cljs$lang$maxFixedArity = 2;

/**
 * Remove a mounted Element from the given DOM node.
 */
quiescent.core.unmount = (function quiescent$core$unmount(node){
return ReactDOM.unmountComponentAtNode(node);
});
var factory_17420 = React.createFactory(React.addons.CSSTransitionGroup);
/**
 * Return a CSSTransitionGroup ReactElement, with the specified transition options and children.
 *  Options must contain at least a :transitionName key.
 * 
 *  Note that unlike DOM factories, children is a single argument containing a seq of children, not
 *  a vararg.
 * 
 *  See http://facebook.github.io/react/docs/animation.html for details on how CSSTransitionGroup
 *  works.
 */
quiescent.core.CSSTransitionGroup = ((function (factory_17420){
return (function quiescent$core$CSSTransitionGroup(opts,children){
var G__17419 = cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,cljs.core.cst$kw$children,children));
return (factory_17420.cljs$core$IFn$_invoke$arity$1 ? factory_17420.cljs$core$IFn$_invoke$arity$1(G__17419) : factory_17420.call(null,G__17419));
});})(factory_17420))
;
var factory_17423 = React.createFactory(React.addons.TransitionGroup);
/**
 * Return a TransitionGroup ReactElement, with the specified properties and children.
 * 
 *  Note that unlike DOM factories, children is a single argument containing a seq of children, not
 *  a vararg.
 * 
 *  See http://facebook.github.io/react/docs/animation.html for details on how TransitionGroup
 *  works.
 */
quiescent.core.TransitionGroup = ((function (factory_17423){
return (function quiescent$core$TransitionGroup(props,children){
var G__17422 = cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$children,children));
return (factory_17423.cljs$core$IFn$_invoke$arity$1 ? factory_17423.cljs$core$IFn$_invoke$arity$1(G__17422) : factory_17423.call(null,G__17422));
});})(factory_17423))
;
/**
 * Wrapper component used to mix-in lifecycle access
 */
quiescent.core.WrapperComponent = React.createClass(({"render": (function (){
var this$ = this;
return (this$.props["wrappee"]);
}), "componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
var temp__4657__auto__ = (this$.props["onUpdate"]);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
var _STAR_component_STAR_17424 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{var G__17425 = ReactDOM.findDOMNode(this$);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17425) : f.call(null,G__17425));
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_17424;
}} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
var temp__4657__auto__ = (this$.props["onMount"]);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
var _STAR_component_STAR_17426 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{var G__17427 = ReactDOM.findDOMNode(this$);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17427) : f.call(null,G__17427));
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_17426;
}} else {
return null;
}
}), "componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = (this$.props["onWillMount"]);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
var _STAR_component_STAR_17428 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_17428;
}} else {
return null;
}
}), "componentWillUpdate": (function (_,___$1){
var this$ = this;
var temp__4657__auto__ = (this$.props["onWillUpdate"]);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
var _STAR_component_STAR_17429 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_17429;
}} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = (this$.props["onWillUnmount"]);
if(cljs.core.truth_(temp__4657__auto__)){
var f = temp__4657__auto__;
var _STAR_component_STAR_17430 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{var G__17431 = ReactDOM.findDOMNode(this$);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__17431) : f.call(null,G__17431));
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_17430;
}} else {
return null;
}
})}));
var did_warn_17434 = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 *  methods at component creation time.
 * 
 *  Create a wrapper function for a compoment implementing multiple
 *  lifecycle functions. Lifecycle functions are specified as any number
 *  of additional key-value pairs passed as arguments to this function.
 * 
 *  Valid keys and values include:
 * 
 *  :onUpdate - will call the provided function,
 *              passing the rendered DOM node as a single arg
 *  :onMount - will call the provided function,
 *             passing the rendered DOM node as a single arg
 *  :onWillUpdate - will call the provided function with no arguments
 *  :onWillMount - will call the provided function with no arguments
 *  :onWillUnmount - will call the provided function with no arguments
 */
quiescent.core.wrapper = ((function (did_warn_17434){
return (function quiescent$core$wrapper(var_args){
var args__7491__auto__ = [];
var len__7484__auto___17435 = arguments.length;
var i__7485__auto___17436 = (0);
while(true){
if((i__7485__auto___17436 < len__7484__auto___17435)){
args__7491__auto__.push((arguments[i__7485__auto___17436]));

var G__17437 = (i__7485__auto___17436 + (1));
i__7485__auto___17436 = G__17437;
continue;
} else {
}
break;
}

var argseq__7492__auto__ = ((((1) < args__7491__auto__.length))?(new cljs.core.IndexedSeq(args__7491__auto__.slice((1)),(0),null)):null);
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7492__auto__);
});})(did_warn_17434))
;

quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic = ((function (did_warn_17434){
return (function (child,kvs){
if(cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(did_warn_17434) : cljs.core.deref.call(null,did_warn_17434)))){
} else {
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(did_warn_17434,true) : cljs.core.reset_BANG_.call(null,did_warn_17434,true));

console.log("WARNING: Quiescent's wrapping functionality is deprecated. Please see the\n      release notes for v0.2. Instead, define lifecycle hooks at component creation time.");
}

var props = cljs.core.clj__GT_js(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.array_map,cljs.core.cst$kw$wrappee,child,kvs));
var temp__4657__auto___17438 = (child.props["key"]);
if(cljs.core.truth_(temp__4657__auto___17438)){
var key_17439 = temp__4657__auto___17438;
(props["key"] = key_17439);
} else {
}

return React.createElement(quiescent.core.WrapperComponent,props);
});})(did_warn_17434))
;

quiescent.core.wrapper.cljs$lang$maxFixedArity = (1);

quiescent.core.wrapper.cljs$lang$applyTo = ((function (did_warn_17434){
return (function (seq17432){
var G__17433 = cljs.core.first(seq17432);
var seq17432__$1 = cljs.core.next(seq17432);
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic(G__17433,seq17432__$1);
});})(did_warn_17434))
;

/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentDidUpdate lifecycle event.
 * 
 * The function will be passed the rendered DOM node.
 */
quiescent.core.on_update = (function quiescent$core$on_update(child,f){
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.cst$kw$onUpdate,f], 0));
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentDidMount lifecycle event.
 * 
 * The function will be passed the rendered DOM node.
 */
quiescent.core.on_mount = (function quiescent$core$on_mount(child,f){
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.cst$kw$onMount,f], 0));
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentDidMount AND the componentDidUpdate lifecycle events.
 * 
 *   The function will be passed the rendered DOM node.
 */
quiescent.core.on_render = (function quiescent$core$on_render(child,f){
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.cst$kw$onMount,f,cljs.core.cst$kw$onUpdate,f], 0));
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentWillMount lifecycle event.
 * 
 * The function will be called with no arguments.
 */
quiescent.core.on_will_mount = (function quiescent$core$on_will_mount(child,f){
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.cst$kw$onWillMount,f], 0));
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentWillUpdate lifecycle event.
 * 
 * The function will be called with no arguments.
 */
quiescent.core.on_will_update = (function quiescent$core$on_will_update(child,f){
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.cst$kw$onWillUpdate,f], 0));
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentWillMount AND the componentWillUpdate lifecycle events.
 * 
 * The function will be called with no arguments.
 */
quiescent.core.on_will_render = (function quiescent$core$on_will_render(child,f){
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.cst$kw$onWillMount,f,cljs.core.cst$kw$onWillUpdate,f], 0));
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentWillUnmount lifecycle event.
 * 
 * The function will be called with no arguments.
 */
quiescent.core.on_will_unmount = (function quiescent$core$on_will_unmount(child,f){
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic(child,cljs.core.array_seq([cljs.core.cst$kw$onWillUnmount,f], 0));
});
/**
 * Given an Element, immediately render it, rooted to the
 * specified DOM node.
 */
quiescent.core.render = (function quiescent$core$render(element,node){
return ReactDOM.render(element,node);
});
/**
 * DEPRECATED: Use 'unmount' instead.
 */
quiescent.core.unmount_at_node = (function quiescent$core$unmount_at_node(node){
return quiescent.core.unmount(node);
});
