// Compiled by ClojureScript 0.0-2371
goog.provide('freactive.experimental.dom2');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('freactive.core');
goog.require('freactive.core');
if(typeof freactive.experimental.dom2.element_state_lookup !== 'undefined')
{} else
{freactive.experimental.dom2.element_state_lookup = cljs.core.PersistentArrayMap.EMPTY;
}
freactive.experimental.dom2.IElementSpec = (function (){var obj130481 = {};return obj130481;
})();
freactive.experimental.dom2._get_virtual_dom = (function _get_virtual_dom(x){if((function (){var and__11485__auto__ = x;if(and__11485__auto__)
{return x.freactive$experimental$dom2$IElementSpec$_get_virtual_dom$arity$1;
} else
{return and__11485__auto__;
}
})())
{return x.freactive$experimental$dom2$IElementSpec$_get_virtual_dom$arity$1(x);
} else
{var x__12134__auto__ = (((x == null))?null:x);return (function (){var or__11497__auto__ = (freactive.experimental.dom2._get_virtual_dom[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.experimental.dom2._get_virtual_dom["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IElementSpec.-get-virtual-dom",x);
}
}
})().call(null,x);
}
});

/**
* @constructor
* @param {*} spec
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
freactive.experimental.dom2.ElementSpec = (function (spec,__meta,__extmap){
this.spec = spec;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__12093__auto__,k__12094__auto__){var self__ = this;
var this__12093__auto____$1 = this;return cljs.core._lookup.call(null,this__12093__auto____$1,k__12094__auto__,null);
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__12095__auto__,k130483,else__12096__auto__){var self__ = this;
var this__12095__auto____$1 = this;var G__130485 = (((k130483 instanceof cljs.core.Keyword))?k130483.fqn:null);switch (G__130485) {
case "spec":
return self__.spec;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k130483,else__12096__auto__);

}
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__12107__auto__,writer__12108__auto__,opts__12109__auto__){var self__ = this;
var this__12107__auto____$1 = this;var pr_pair__12110__auto__ = ((function (this__12107__auto____$1){
return (function (keyval__12111__auto__){return cljs.core.pr_sequential_writer.call(null,writer__12108__auto__,cljs.core.pr_writer,""," ","",opts__12109__auto__,keyval__12111__auto__);
});})(this__12107__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__12108__auto__,pr_pair__12110__auto__,"#freactive.experimental.dom2.ElementSpec{",", ","}",opts__12109__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spec","spec",347520401),self__.spec],null))], null),self__.__extmap));
});
freactive.experimental.dom2.ElementSpec.prototype.freactive$experimental$dom2$IElementSpec$ = true;
freactive.experimental.dom2.ElementSpec.prototype.freactive$experimental$dom2$IElementSpec$_get_virtual_dom$arity$1 = (function (x){var self__ = this;
var x__$1 = this;return self__.spec;
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__12091__auto__){var self__ = this;
var this__12091__auto____$1 = this;return self__.__meta;
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__12087__auto__){var self__ = this;
var this__12087__auto____$1 = this;return (new freactive.experimental.dom2.ElementSpec(self__.spec,self__.__meta,self__.__extmap,self__.__hash));
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__12097__auto__){var self__ = this;
var this__12097__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__12088__auto__){var self__ = this;
var this__12088__auto____$1 = this;var h__11908__auto__ = self__.__hash;if(!((h__11908__auto__ == null)))
{return h__11908__auto__;
} else
{var h__11908__auto____$1 = cljs.core.hash_imap.call(null,this__12088__auto____$1);self__.__hash = h__11908__auto____$1;
return h__11908__auto____$1;
}
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__12089__auto__,other__12090__auto__){var self__ = this;
var this__12089__auto____$1 = this;if(cljs.core.truth_((function (){var and__11485__auto__ = other__12090__auto__;if(cljs.core.truth_(and__11485__auto__))
{return ((this__12089__auto____$1.constructor === other__12090__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__12089__auto____$1,other__12090__auto__));
} else
{return and__11485__auto__;
}
})()))
{return true;
} else
{return false;
}
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__12102__auto__,k__12103__auto__){var self__ = this;
var this__12102__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"spec","spec",347520401),null], null), null),k__12103__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__12102__auto____$1),self__.__meta),k__12103__auto__);
} else
{return (new freactive.experimental.dom2.ElementSpec(self__.spec,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__12103__auto__)),null));
}
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__12100__auto__,k__12101__auto__,G__130482){var self__ = this;
var this__12100__auto____$1 = this;var pred__130486 = cljs.core.keyword_identical_QMARK_;var expr__130487 = k__12101__auto__;if(cljs.core.truth_(pred__130486.call(null,new cljs.core.Keyword(null,"spec","spec",347520401),expr__130487)))
{return (new freactive.experimental.dom2.ElementSpec(G__130482,self__.__meta,self__.__extmap,null));
} else
{return (new freactive.experimental.dom2.ElementSpec(self__.spec,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__12101__auto__,G__130482),null));
}
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__12105__auto__){var self__ = this;
var this__12105__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"spec","spec",347520401),self__.spec],null))], null),self__.__extmap));
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__12092__auto__,G__130482){var self__ = this;
var this__12092__auto____$1 = this;return (new freactive.experimental.dom2.ElementSpec(self__.spec,G__130482,self__.__extmap,self__.__hash));
});
freactive.experimental.dom2.ElementSpec.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__12098__auto__,entry__12099__auto__){var self__ = this;
var this__12098__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__12099__auto__))
{return cljs.core._assoc.call(null,this__12098__auto____$1,cljs.core._nth.call(null,entry__12099__auto__,(0)),cljs.core._nth.call(null,entry__12099__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__12098__auto____$1,entry__12099__auto__);
}
});
freactive.experimental.dom2.ElementSpec.cljs$lang$type = true;
freactive.experimental.dom2.ElementSpec.cljs$lang$ctorPrSeq = (function (this__12127__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"freactive.experimental.dom2/ElementSpec");
});
freactive.experimental.dom2.ElementSpec.cljs$lang$ctorPrWriter = (function (this__12127__auto__,writer__12128__auto__){return cljs.core._write.call(null,writer__12128__auto__,"freactive.experimental.dom2/ElementSpec");
});
freactive.experimental.dom2.__GT_ElementSpec = (function __GT_ElementSpec(spec){return (new freactive.experimental.dom2.ElementSpec(spec));
});
freactive.experimental.dom2.map__GT_ElementSpec = (function map__GT_ElementSpec(G__130484){return (new freactive.experimental.dom2.ElementSpec(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(G__130484),null,cljs.core.dissoc.call(null,G__130484,new cljs.core.Keyword(null,"spec","spec",347520401))));
});
freactive.experimental.dom2.dom_node_QMARK_ = (function dom_node_QMARK_(x){return (x.nodeType > (0));
});
freactive.experimental.dom2.get_element_state = (function get_element_state(x){return cljs.core.get.call(null,freactive.experimental.dom2.element_state_lookup,x);
});
freactive.experimental.dom2.get_virtual_dom = (function get_virtual_dom(x){if(cljs.core.truth_(x))
{if(freactive.experimental.dom2.dom_node_QMARK_.call(null,x))
{var temp__4388__auto__ = freactive.experimental.dom2.get_element_state.call(null,x);if(cljs.core.truth_(temp__4388__auto__))
{var state = temp__4388__auto__;return get_virtual_dom.call(null,state.element_spec);
} else
{return null;
}
} else
{if(typeof x === 'string')
{return x;
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return x;
} else
{return freactive.experimental.dom2._get_virtual_dom.call(null,x);

}
}
}
} else
{return null;
}
});
freactive.experimental.dom2.reset_element_spec_BANG_ = (function reset_element_spec_BANG_(dom_node,spec){return freactive.experimental.dom2.get_element_state.call(null,dom_node).element_spec = spec;
});

/**
* @constructor
*/
freactive.experimental.dom2.ElementState = (function (disposed,element_spec,childstates){
this.disposed = disposed;
this.element_spec = element_spec;
this.childstates = childstates;
})
freactive.experimental.dom2.ElementState.cljs$lang$type = true;
freactive.experimental.dom2.ElementState.cljs$lang$ctorStr = "freactive.experimental.dom2/ElementState";
freactive.experimental.dom2.ElementState.cljs$lang$ctorPrWriter = (function (this__12077__auto__,writer__12078__auto__,opts__12079__auto__){return cljs.core._write.call(null,writer__12078__auto__,"freactive.experimental.dom2/ElementState");
});
freactive.experimental.dom2.__GT_ElementState = (function __GT_ElementState(disposed,element_spec,childstates){return (new freactive.experimental.dom2.ElementState(disposed,element_spec,childstates));
});
freactive.experimental.dom2.init_element_state_BANG_ = (function init_element_state_BANG_(dom_node,element_spec){var state = (new freactive.experimental.dom2.ElementState(false,element_spec,cljs.core.PersistentArrayMap.EMPTY));freactive.experimental.dom2.element_state_lookup = cljs.core.assoc.call(null,freactive.experimental.dom2.element_state_lookup,dom_node,state);
return state;
});
freactive.experimental.dom2.register_with_parent_state = (function register_with_parent_state(parent_state,child,state){return parent_state.childstates = cljs.core.assoc.call(null,parent_state.childstates,child,state);
});
freactive.experimental.dom2.unregister_from_parent_state = (function unregister_from_parent_state(parent_state,child){return parent_state.childstates = cljs.core.dissoc.call(null,parent_state.childstates,child);
});
freactive.experimental.dom2.get_element_spec = (function get_element_spec(x){if(freactive.experimental.dom2.dom_node_QMARK_.call(null,x))
{var temp__4388__auto__ = freactive.experimental.dom2.get_element_state.call(null,x);if(cljs.core.truth_(temp__4388__auto__))
{var state = temp__4388__auto__;return state.element_spec;
} else
{return null;
}
} else
{return x;
}
});
freactive.experimental.dom2.IHasDOMNode = (function (){var obj130491 = {};return obj130491;
})();
freactive.experimental.dom2._get_dom_node = (function _get_dom_node(x){if((function (){var and__11485__auto__ = x;if(and__11485__auto__)
{return x.freactive$experimental$dom2$IHasDOMNode$_get_dom_node$arity$1;
} else
{return and__11485__auto__;
}
})())
{return x.freactive$experimental$dom2$IHasDOMNode$_get_dom_node$arity$1(x);
} else
{var x__12134__auto__ = (((x == null))?null:x);return (function (){var or__11497__auto__ = (freactive.experimental.dom2._get_dom_node[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.experimental.dom2._get_dom_node["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IHasDOMNode.-get-dom-node",x);
}
}
})().call(null,x);
}
});
freactive.experimental.dom2.get_dom_node = (function get_dom_node(x){if(freactive.experimental.dom2.dom_node_QMARK_.call(null,x))
{return x;
} else
{return freactive.experimental.dom2._get_dom_node.call(null,x);
}
});
freactive.experimental.dom2.IRemove = (function (){var obj130493 = {};return obj130493;
})();
freactive.experimental.dom2._remove_BANG_ = (function _remove_BANG_(x){if((function (){var and__11485__auto__ = x;if(and__11485__auto__)
{return x.freactive$experimental$dom2$IRemove$_remove_BANG_$arity$1;
} else
{return and__11485__auto__;
}
})())
{return x.freactive$experimental$dom2$IRemove$_remove_BANG_$arity$1(x);
} else
{var x__12134__auto__ = (((x == null))?null:x);return (function (){var or__11497__auto__ = (freactive.experimental.dom2._remove_BANG_[goog.typeOf(x__12134__auto__)]);if(or__11497__auto__)
{return or__11497__auto__;
} else
{var or__11497__auto____$1 = (freactive.experimental.dom2._remove_BANG_["_"]);if(or__11497__auto____$1)
{return or__11497__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRemove.-remove!",x);
}
}
})().call(null,x);
}
});
freactive.experimental.dom2.dispose_node = (function() {
var dispose_node = null;
var dispose_node__1 = (function (dom_node){return dispose_node.call(null,dom_node,freactive.experimental.dom2.get_element_state.call(null,dom_node));
});
var dispose_node__2 = (function (dom_node,state){if(cljs.core.truth_(state))
{state.disposed = true;
delete freactive.experimental.dom2.element_state_lookup[dom_node];
var seq__130500 = cljs.core.seq.call(null,state.childstates);var chunk__130501 = null;var count__130502 = (0);var i__130503 = (0);while(true){
if((i__130503 < count__130502))
{var vec__130504 = cljs.core._nth.call(null,chunk__130501,i__130503);var child = cljs.core.nth.call(null,vec__130504,(0),null);var state__$1 = cljs.core.nth.call(null,vec__130504,(1),null);dispose_node.call(null,child,state__$1);
{
var G__130506 = seq__130500;
var G__130507 = chunk__130501;
var G__130508 = count__130502;
var G__130509 = (i__130503 + (1));
seq__130500 = G__130506;
chunk__130501 = G__130507;
count__130502 = G__130508;
i__130503 = G__130509;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__130500);if(temp__4388__auto__)
{var seq__130500__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__130500__$1))
{var c__12267__auto__ = cljs.core.chunk_first.call(null,seq__130500__$1);{
var G__130510 = cljs.core.chunk_rest.call(null,seq__130500__$1);
var G__130511 = c__12267__auto__;
var G__130512 = cljs.core.count.call(null,c__12267__auto__);
var G__130513 = (0);
seq__130500 = G__130510;
chunk__130501 = G__130511;
count__130502 = G__130512;
i__130503 = G__130513;
continue;
}
} else
{var vec__130505 = cljs.core.first.call(null,seq__130500__$1);var child = cljs.core.nth.call(null,vec__130505,(0),null);var state__$1 = cljs.core.nth.call(null,vec__130505,(1),null);dispose_node.call(null,child,state__$1);
{
var G__130514 = cljs.core.next.call(null,seq__130500__$1);
var G__130515 = null;
var G__130516 = (0);
var G__130517 = (0);
seq__130500 = G__130514;
chunk__130501 = G__130515;
count__130502 = G__130516;
i__130503 = G__130517;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});
dispose_node = function(dom_node,state){
switch(arguments.length){
case 1:
return dispose_node__1.call(this,dom_node);
case 2:
return dispose_node__2.call(this,dom_node,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispose_node.cljs$core$IFn$_invoke$arity$1 = dispose_node__1;
dispose_node.cljs$core$IFn$_invoke$arity$2 = dispose_node__2;
return dispose_node;
})()
;
freactive.experimental.dom2.remove_dom_node = (function remove_dom_node(dom_node){var state = (freactive.experimental.dom2.element_state_lookup[dom_node]);freactive.experimental.dom2.dispose_node.call(null,dom_node,state);
var temp__4388__auto__ = dom_node.parentNode;if(cljs.core.truth_(temp__4388__auto__))
{var parent = temp__4388__auto__;parent.removeChild(dom_node);
if(cljs.core.truth_(state))
{return delete state.parent_state[state];
} else
{return null;
}
} else
{return null;
}
});
freactive.experimental.dom2.remove_BANG_ = (function remove_BANG_(x){if(freactive.experimental.dom2.dom_node_QMARK_.call(null,x))
{return freactive.experimental.dom2.remove_dom_node.call(null,x);
} else
{return freactive.experimental.dom2._remove_BANG_.call(null,x);
}
});
freactive.experimental.dom2.wrap_element_spec = (function wrap_element_spec(elem_spec){if(typeof elem_spec === 'string')
{return (new freactive.experimental.dom2.ElementSpec(elem_spec));
} else
{return elem_spec;
}
});
freactive.experimental.dom2.with_transitions = (function with_transitions(elem_spec,transitions){if((function (){var G__130519 = elem_spec;if(G__130519)
{var bit__12161__auto__ = (G__130519.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12161__auto__) || (G__130519.cljs$core$IDeref$))
{return true;
} else
{if((!G__130519.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__130519);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__130519);
}
})())
{return freactive.core.rx_STAR_.call(null,(function (){return with_transitions.call(null,cljs.core.deref.call(null,elem_spec),transitions);
}),false);
} else
{return cljs.core.vary_meta.call(null,freactive.experimental.dom2.wrap_element_spec.call(null,elem_spec),cljs.core.merge,transitions);
}
});
freactive.experimental.dom2.get_transition = (function get_transition(x,transition_name){var spec = freactive.experimental.dom2.get_element_spec.call(null,x);if(typeof spec === 'string')
{return null;
} else
{return cljs.core.get.call(null,cljs.core.meta.call(null,spec),transition_name);
}
});
freactive.experimental.dom2.chain_transition = (function chain_transition(elem_spec,transition_name,transition_fn,chain_fn){if((function (){var G__130521 = elem_spec;if(G__130521)
{var bit__12161__auto__ = (G__130521.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12161__auto__) || (G__130521.cljs$core$IDeref$))
{return true;
} else
{if((!G__130521.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__130521);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__130521);
}
})())
{return freactive.core.rx_STAR_.call(null,(function (){return chain_transition.call(null,cljs.core.deref.call(null,elem_spec),transition_name,transition_fn,chain_fn);
}),false);
} else
{var cur_transition_fn = freactive.experimental.dom2.get_transition.call(null,elem_spec,transition_name);var transition_fn__$1 = (cljs.core.truth_(cur_transition_fn)?chain_fn.call(null,cur_transition_fn,transition_fn):transition_fn);return freactive.experimental.dom2.with_transitions.call(null,elem_spec,new cljs.core.PersistentArrayMap.fromArray([transition_name,transition_fn__$1], true, false));
}
});
freactive.experimental.dom2.prepend_transition = (function prepend_transition(elem_spec,transition_name,transition_fn){return freactive.experimental.dom2.chain_transition.call(null,elem_spec,transition_name,transition_fn,(function (cur_tx,new_tx){return (function (elem,on_complete){return new_tx.call(null,elem,(function (elem__$1,_){return cur_tx.call(null,elem__$1,on_complete);
}));
});
}));
});
freactive.experimental.dom2.append_transition = (function append_transition(elem_spec,transition_name,transition_fn){return freactive.experimental.dom2.chain_transition.call(null,elem_spec,transition_name,transition_fn,(function (cur_tx,new_tx){return (function (elem,on_complete){return cur_tx.call(null,elem,(function (elem__$1,_){return new_tx.call(null,elem__$1,on_complete);
}));
});
}));
});
freactive.experimental.dom2.request_animation_frame = (function request_animation_frame(f){return window.requestAnimationFrame(f);
});
if(typeof freactive.experimental.dom2.render_queue !== 'undefined')
{} else
{freactive.experimental.dom2.render_queue = [];
}
freactive.experimental.dom2.enable_instrumentation = true;
freactive.experimental.dom2.instrumentation_i = (-1);
freactive.experimental.dom2.fps = freactive.core.atom.call(null,null);
freactive.experimental.dom2.frame_time = freactive.core.atom.call(null,null);
if(typeof freactive.experimental.dom2.render_loop !== 'undefined')
{} else
{freactive.experimental.dom2.render_loop = freactive.experimental.dom2.request_animation_frame.call(null,(function render(frame_ms){cljs.core.reset_BANG_.call(null,freactive.experimental.dom2.frame_time,frame_ms);
if(cljs.core.truth_(freactive.experimental.dom2.enable_instrumentation))
{if(cljs.core._EQ_.call(null,freactive.experimental.dom2.instrumentation_i,(10)))
{cljs.core.reset_BANG_.call(null,freactive.experimental.dom2.fps,((1000) * ((10) / (frame_ms - freactive.experimental.dom2.last_instrumentation_time))));
freactive.experimental.dom2.instrumentation_i = (0);
} else
{freactive.experimental.dom2.instrumentation_i = (freactive.experimental.dom2.instrumentation_i + (1));
}
if(cljs.core._EQ_.call(null,(0),freactive.experimental.dom2.instrumentation_i))
{freactive.experimental.dom2.last_instrumentation_time = frame_ms;
} else
{}
} else
{}
var queue_130522 = freactive.experimental.dom2.render_queue;var n_130523 = queue_130522.length;if((n_130523 > (0)))
{freactive.experimental.dom2.render_queue = [];
var i_130524 = (0);while(true){
if((i_130524 < n_130523))
{(queue_130522[i_130524]).call(null);
{
var G__130525 = (i_130524 + (1));
i_130524 = G__130525;
continue;
}
} else
{}
break;
}
} else
{}
return freactive.experimental.dom2.request_animation_frame.call(null,render);
}));
}
freactive.experimental.dom2.queue_animation = (function queue_animation(f){return freactive.experimental.dom2.render_queue.push(f);
});
freactive.experimental.dom2.set_style_prop_BANG_ = (function set_style_prop_BANG_(elem,prop_name,prop_value){var prop_name__$1 = cljs.core.name.call(null,prop_name);return (elem.style[prop_name__$1] = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop_value)));
});
freactive.experimental.dom2.set_attr_BANG_ = (function set_attr_BANG_(elem,attr_name,attr_value){var attr_name__$1 = cljs.core.name.call(null,attr_name);return elem.setAttribute(attr_name__$1,attr_value);
});
freactive.experimental.dom2.on_value_ref_invalidated_STAR_ = (function on_value_ref_invalidated_STAR_(set_fn,element,attr_name,ref,node_state){var temp__4388__auto___130528 = freactive.core.get_add_remove_watch_STAR_.call(null,ref);if(cljs.core.truth_(temp__4388__auto___130528))
{var vec__130527_130529 = temp__4388__auto___130528;var add_watch_STAR__130530 = cljs.core.nth.call(null,vec__130527_130529,(0),null);var remove_watch_STAR__130531 = cljs.core.nth.call(null,vec__130527_130529,(1),null);var f_130532 = ((function (vec__130527_130529,add_watch_STAR__130530,remove_watch_STAR__130531,temp__4388__auto___130528){
return (function() {
var on_value_ref_invalidated = null;
var on_value_ref_invalidated__2 = (function (key,ref__$1){remove_watch_STAR__130531.call(null,ref__$1,key);
return freactive.experimental.dom2.queue_animation.call(null,((function (vec__130527_130529,add_watch_STAR__130530,remove_watch_STAR__130531,temp__4388__auto___130528){
return (function (_){if(cljs.core.truth_(node_state.disposed))
{return null;
} else
{add_watch_STAR__130530.call(null,ref__$1,key,on_value_ref_invalidated);
return set_fn.call(null,element,attr_name,freactive.core._raw_deref.call(null,ref__$1));
}
});})(vec__130527_130529,add_watch_STAR__130530,remove_watch_STAR__130531,temp__4388__auto___130528))
);
});
var on_value_ref_invalidated__4 = (function (key,ref__$1,_,___$1){return on_value_ref_invalidated.call(null,key,ref__$1);
});
on_value_ref_invalidated = function(key,ref__$1,_,___$1){
switch(arguments.length){
case 2:
return on_value_ref_invalidated__2.call(this,key,ref__$1);
case 4:
return on_value_ref_invalidated__4.call(this,key,ref__$1,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
on_value_ref_invalidated.cljs$core$IFn$_invoke$arity$2 = on_value_ref_invalidated__2;
on_value_ref_invalidated.cljs$core$IFn$_invoke$arity$4 = on_value_ref_invalidated__4;
return on_value_ref_invalidated;
})()
;})(vec__130527_130529,add_watch_STAR__130530,remove_watch_STAR__130531,temp__4388__auto___130528))
;add_watch_STAR__130530.call(null,ref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element,attr_name], null),f_130532);
} else
{}
return set_fn.call(null,element,attr_name,cljs.core.deref.call(null,ref));
});
freactive.experimental.dom2.bind_style_prop_BANG_ = (function bind_style_prop_BANG_(element,attr_name,attr_value,node_state){if((function (){var G__130534 = attr_value;if(G__130534)
{var bit__12161__auto__ = (G__130534.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12161__auto__) || (G__130534.cljs$core$IDeref$))
{return true;
} else
{if((!G__130534.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__130534);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__130534);
}
})())
{return freactive.experimental.dom2.on_value_ref_invalidated_STAR_.call(null,freactive.experimental.dom2.set_style_prop_BANG_,element,attr_name,attr_value,node_state);
} else
{return freactive.experimental.dom2.set_style_prop_BANG_.call(null,element,attr_name,attr_value);
}
});
freactive.experimental.dom2.listen_BANG_ = (function listen_BANG_(element,evt_name,handler){return element.addEventListener(evt_name,handler);
});
freactive.experimental.dom2.bind_attr_BANG_ = (function bind_attr_BANG_(element,attr_name,attr_value,node_state){var attr_name__$1 = cljs.core.name.call(null,attr_name);if(cljs.core._EQ_.call(null,"style",attr_name__$1))
{if(cljs.core.map_QMARK_.call(null,attr_value))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"attr-value","attr-value",-561203417,null)))))));
}
var seq__130542 = cljs.core.seq.call(null,attr_value);var chunk__130543 = null;var count__130544 = (0);var i__130545 = (0);while(true){
if((i__130545 < count__130544))
{var vec__130546 = cljs.core._nth.call(null,chunk__130543,i__130545);var p = cljs.core.nth.call(null,vec__130546,(0),null);var v = cljs.core.nth.call(null,vec__130546,(1),null);freactive.experimental.dom2.bind_style_prop_BANG_.call(null,element,p,v,node_state);
{
var G__130549 = seq__130542;
var G__130550 = chunk__130543;
var G__130551 = count__130544;
var G__130552 = (i__130545 + (1));
seq__130542 = G__130549;
chunk__130543 = G__130550;
count__130544 = G__130551;
i__130545 = G__130552;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__130542);if(temp__4388__auto__)
{var seq__130542__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__130542__$1))
{var c__12267__auto__ = cljs.core.chunk_first.call(null,seq__130542__$1);{
var G__130553 = cljs.core.chunk_rest.call(null,seq__130542__$1);
var G__130554 = c__12267__auto__;
var G__130555 = cljs.core.count.call(null,c__12267__auto__);
var G__130556 = (0);
seq__130542 = G__130553;
chunk__130543 = G__130554;
count__130544 = G__130555;
i__130545 = G__130556;
continue;
}
} else
{var vec__130547 = cljs.core.first.call(null,seq__130542__$1);var p = cljs.core.nth.call(null,vec__130547,(0),null);var v = cljs.core.nth.call(null,vec__130547,(1),null);freactive.experimental.dom2.bind_style_prop_BANG_.call(null,element,p,v,node_state);
{
var G__130557 = cljs.core.next.call(null,seq__130542__$1);
var G__130558 = null;
var G__130559 = (0);
var G__130560 = (0);
seq__130542 = G__130557;
chunk__130543 = G__130558;
count__130544 = G__130559;
i__130545 = G__130560;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["o","n","-"], null),cljs.core.take.call(null,(3),attr_name__$1)))
{return freactive.experimental.dom2.listen_BANG_.call(null,element,attr_name__$1.substring((3)),attr_value);
} else
{if((function (){var G__130548 = attr_value;if(G__130548)
{var bit__12161__auto__ = (G__130548.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12161__auto__) || (G__130548.cljs$core$IDeref$))
{return true;
} else
{if((!G__130548.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__130548);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__130548);
}
})())
{return freactive.experimental.dom2.on_value_ref_invalidated_STAR_.call(null,freactive.experimental.dom2.set_attr_BANG_,element,attr_name__$1,attr_value,node_state);
} else
{return freactive.experimental.dom2.set_attr_BANG_.call(null,element,attr_name__$1,attr_value);
}

}
}
});
/**
* Regular expression that parses a CSS-style id and class from an element name.
*/
freactive.experimental.dom2.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
freactive.experimental.dom2.create_dom_node = (function create_dom_node(kw){var tag_ns = cljs.core.namespace.call(null,kw);var vec__130563 = cljs.core.re_matches.call(null,freactive.experimental.dom2.re_tag,cljs.core.name.call(null,kw));var _ = cljs.core.nth.call(null,vec__130563,(0),null);var tag = cljs.core.nth.call(null,vec__130563,(1),null);var id = cljs.core.nth.call(null,vec__130563,(2),null);var class$ = cljs.core.nth.call(null,vec__130563,(3),null);var node = (function (){var G__130564 = tag_ns;if(cljs.core._EQ_.call(null,null,G__130564))
{return document.createElement(tag);
} else
{if(cljs.core._EQ_.call(null,"svg",G__130564))
{return document.createElementNS("http://www.w3.org/2000/svg",tag);
} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Don't know how to handle tag ns "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag_ns)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,false)))));


}
}
})();if(cljs.core.truth_(id))
{node.id = id;
} else
{}
if(cljs.core.truth_(class$))
{node.className = class$;
} else
{}
return node;
});
freactive.experimental.dom2.replace_child = (function replace_child(parent,new_elem_spec,cur_elem){var cur_dom_node = freactive.experimental.dom2.get_dom_node.call(null,cur_elem);var new_virtual_dom = freactive.experimental.dom2.get_virtual_dom.call(null,new_elem_spec);if((typeof new_virtual_dom === 'string') && (cljs.core._EQ_.call(null,cur_dom_node.nodeType,(3))))
{cur_dom_node.textContent = new_virtual_dom;
freactive.experimental.dom2.reset_element_spec_BANG_.call(null,cur_dom_node,new_elem_spec);
return cur_elem;
} else
{var new_elem = freactive.experimental.dom2.build_element.call(null,new_elem_spec);freactive.experimental.dom2.get_dom_node.call(null,parent).replaceChild(freactive.experimental.dom2.get_dom_node.call(null,new_elem),cur_dom_node);
freactive.experimental.dom2.dispose_node.call(null,cur_dom_node);
return new_elem;
}
});
freactive.experimental.dom2.append_child = (function append_child(parent,new_elem){var new_elem__$1 = freactive.experimental.dom2.build_element.call(null,new_elem);freactive.experimental.dom2.get_dom_node.call(null,parent).appendChild(new_elem__$1);
return new_elem__$1;
});
freactive.experimental.dom2.replace_or_append_child = (function replace_or_append_child(parent,new_elem,cur_elem){var new_elem__$1 = (cljs.core.truth_(cur_elem)?freactive.experimental.dom2.replace_child.call(null,parent,new_elem,cur_elem):freactive.experimental.dom2.append_child.call(null,parent,new_elem));var temp__4388__auto___130565 = freactive.experimental.dom2.get_element_state.call(null,parent);if(cljs.core.truth_(temp__4388__auto___130565))
{var parent_state_130566 = temp__4388__auto___130565;var state_130567 = freactive.experimental.dom2.get_element_state.call(null,new_elem__$1);state_130567.parent_state = parent_state_130566;
freactive.experimental.dom2.register_with_parent_state.call(null,parent_state_130566,new_elem__$1,state_130567);
} else
{}
return new_elem__$1;
});
freactive.experimental.dom2.do_show_element = (function do_show_element(parent,new_elem,cur_elem){if(cljs.core.truth_(new_elem))
{var show = freactive.experimental.dom2.get_transition.call(null,new_elem,new cljs.core.Keyword(null,"on-show","on-show",-1100796727));var new_elem__$1 = freactive.experimental.dom2.replace_or_append_child.call(null,parent,new_elem,cur_elem);if(cljs.core.truth_(show))
{show.call(null,new_elem__$1,null);
} else
{}
return new_elem__$1;
} else
{return null;
}
});
freactive.experimental.dom2.transition_element = (function transition_element(parent,new_elem,cur_elem){if(cljs.core.truth_(cur_elem))
{var temp__4386__auto__ = freactive.experimental.dom2.get_transition.call(null,cur_elem,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709));if(cljs.core.truth_(temp__4386__auto__))
{var hide = temp__4386__auto__;return hide.call(null,cur_elem,freactive.experimental.dom2.do_show_element.call(null,parent,new_elem,cur_elem));
} else
{return freactive.experimental.dom2.do_show_element.call(null,parent,new_elem,cur_elem);
}
} else
{return freactive.experimental.dom2.do_show_element.call(null,parent,new_elem,cur_elem);
}
});
freactive.experimental.dom2.clear_children_BANG_ = (function clear_children_BANG_(parent){var dom_node = freactive.experimental.dom2.get_dom_node.call(null,parent);while(true){
var last_child = dom_node.lastChild;if(cljs.core.truth_(last_child))
{dom_node.removeChild(last_child);
{
continue;
}
} else
{return null;
}
break;
}
});
freactive.experimental.dom2.exec_transition = (function exec_transition(node,transition_name,callback){var temp__4386__auto__ = freactive.experimental.dom2.get_transition.call(null,node,transition_name);if(cljs.core.truth_(temp__4386__auto__))
{var transition = temp__4386__auto__;return transition.call(null,node,callback);
} else
{if(cljs.core.truth_(callback))
{return callback.call(null);
} else
{return null;
}
}
});
freactive.experimental.dom2.hide_node = (function hide_node(node,callback){return freactive.experimental.dom2.exec_transition.call(null,node,new cljs.core.Keyword(null,"on-hide","on-hide",1263105709),callback);
});
freactive.experimental.dom2.show_node = (function show_node(node,callback){return freactive.experimental.dom2.exec_transition.call(null,node,new cljs.core.Keyword(null,"on-show","on-show",-1100796727),callback);
});

/**
* @constructor
*/
freactive.experimental.dom2.ReactiveElement = (function (parent,cur_element,dirty,updating,disposed,invalidate){
this.parent = parent;
this.cur_element = cur_element;
this.dirty = dirty;
this.updating = updating;
this.disposed = disposed;
this.invalidate = invalidate;
})
freactive.experimental.dom2.ReactiveElement.cljs$lang$type = true;
freactive.experimental.dom2.ReactiveElement.cljs$lang$ctorStr = "freactive.experimental.dom2/ReactiveElement";
freactive.experimental.dom2.ReactiveElement.cljs$lang$ctorPrWriter = (function (this__12074__auto__,writer__12075__auto__,opt__12076__auto__){return cljs.core._write.call(null,writer__12075__auto__,"freactive.experimental.dom2/ReactiveElement");
});
freactive.experimental.dom2.ReactiveElement.prototype.freactive$experimental$dom2$IRemove$ = true;
freactive.experimental.dom2.ReactiveElement.prototype.freactive$experimental$dom2$IRemove$_remove_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;this$__$1.disposed = true;
if(cljs.core.truth_(self__.updating))
{} else
{freactive.experimental.dom2.remove_BANG_.call(null,cljs.core.deref.call(null,self__.cur_element));
}
var temp__4388__auto__ = freactive.experimental.dom2.get_element_state.call(null,self__.parent);if(cljs.core.truth_(temp__4388__auto__))
{var parent_state = temp__4388__auto__;return freactive.experimental.dom2.unregister_from_parent_state.call(null,parent_state,this$__$1);
} else
{return null;
}
});
freactive.experimental.dom2.__GT_ReactiveElement = (function __GT_ReactiveElement(parent,cur_element,dirty,updating,disposed,invalidate){return (new freactive.experimental.dom2.ReactiveElement(parent,cur_element,dirty,updating,disposed,invalidate));
});
freactive.experimental.dom2.append_deref_child = (function append_deref_child(parent,child_ref){var temp__4386__auto__ = freactive.core.get_add_remove_watch_STAR_.call(null,child_ref);if(cljs.core.truth_(temp__4386__auto__))
{var vec__130569 = temp__4386__auto__;var add_watch_STAR_ = cljs.core.nth.call(null,vec__130569,(0),null);var remove_watch_STAR_ = cljs.core.nth.call(null,vec__130569,(1),null);var state = (new freactive.experimental.dom2.ReactiveElement(parent,null,false,false,false,null));var animate = ((function (state,vec__130569,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__){
return (function animate(x){if(cljs.core.truth_(state.disposed))
{return freactive.experimental.dom2.remove_BANG_.call(null,state.cur_element);
} else
{state.dirty = false;
add_watch_STAR_.call(null,child_ref,state,state.invalidate);
var new_elem = cljs.core.deref.call(null,child_ref);var cur = state.cur_element;var new_elem__$1 = (function (){var or__11497__auto__ = new_elem;if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
}
})();if(cljs.core.not_EQ_.call(null,freactive.experimental.dom2.get_virtual_dom.call(null,cur),freactive.experimental.dom2.get_virtual_dom.call(null,new_elem__$1)))
{return freactive.experimental.dom2.hide_node.call(null,cur,((function (new_elem,cur,new_elem__$1,state,vec__130569,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__){
return (function (){state.updating = false;
if(cljs.core.truth_(state.disposed))
{return freactive.experimental.dom2.remove_dom_node.call(null,cur);
} else
{var new_elem__$2 = (cljs.core.truth_(state.dirty)?(function (){false.dirty = null;
add_watch_STAR_.call(null,child_ref,state,state.invalidate);
return cljs.core.deref.call(null,child_ref);
})():new_elem__$1);var new_node = freactive.experimental.dom2.replace_child.call(null,parent,new_elem__$2,cur);state.cur_element = new_node;
return freactive.experimental.dom2.show_node.call(null,new_node,null);
}
});})(new_elem,cur,new_elem__$1,state,vec__130569,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__))
);
} else
{return null;
}
}
});})(state,vec__130569,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__))
;var invalidate = ((function (state,animate,vec__130569,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__){
return (function() {
var on_child_ref_invalidated = null;
var on_child_ref_invalidated__2 = (function (cur_elem,child_ref__$1){remove_watch_STAR_.call(null,child_ref__$1,cur_elem);
if(cljs.core.truth_(state.disposed))
{return null;
} else
{state.dirty = true;
if(cljs.core.truth_(state.updating))
{return null;
} else
{state.updating = true;
return freactive.experimental.dom2.queue_animation.call(null,animate);
}
}
});
var on_child_ref_invalidated__4 = (function (key,child_ref__$1,_,___$1){return on_child_ref_invalidated.call(null,key,child_ref__$1);
});
on_child_ref_invalidated = function(key,child_ref__$1,_,___$1){
switch(arguments.length){
case 2:
return on_child_ref_invalidated__2.call(this,key,child_ref__$1);
case 4:
return on_child_ref_invalidated__4.call(this,key,child_ref__$1,_,___$1);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
on_child_ref_invalidated.cljs$core$IFn$_invoke$arity$2 = on_child_ref_invalidated__2;
on_child_ref_invalidated.cljs$core$IFn$_invoke$arity$4 = on_child_ref_invalidated__4;
return on_child_ref_invalidated;
})()
;})(state,animate,vec__130569,add_watch_STAR_,remove_watch_STAR_,temp__4386__auto__))
;state.invalidate = invalidate;
state.cur_element = freactive.experimental.dom2.transition_element.call(null,parent,(function (){var or__11497__auto__ = freactive.core._raw_deref.call(null,child_ref);if(cljs.core.truth_(or__11497__auto__))
{return or__11497__auto__;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
}
})(),null);
var temp__4388__auto___130570 = freactive.experimental.dom2.get_element_state.call(null,parent);if(cljs.core.truth_(temp__4388__auto___130570))
{var parent_state_130571 = temp__4388__auto___130570;freactive.experimental.dom2.register_with_parent_state.call(null,parent_state_130571,state,state);
} else
{}
add_watch_STAR_.call(null,child_ref,state,invalidate);
return state;
} else
{return freactive.experimental.dom2.transition_element.call(null,parent,cljs.core.deref.call(null,child_ref),null);
}
});
freactive.experimental.dom2.append_child_BANG_ = (function append_child_BANG_(parent,child){if((function (){var G__130573 = child;if(G__130573)
{var bit__12161__auto__ = (G__130573.cljs$lang$protocol_mask$partition0$ & (32768));if((bit__12161__auto__) || (G__130573.cljs$core$IDeref$))
{return true;
} else
{if((!G__130573.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__130573);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__130573);
}
})())
{return freactive.experimental.dom2.append_deref_child.call(null,parent,child);
} else
{return freactive.experimental.dom2.transition_element.call(null,parent,child,null);

}
});
freactive.experimental.dom2.append_children_BANG_ = (function append_children_BANG_(elem,children){var seq__130578 = cljs.core.seq.call(null,children);var chunk__130579 = null;var count__130580 = (0);var i__130581 = (0);while(true){
if((i__130581 < count__130580))
{var ch = cljs.core._nth.call(null,chunk__130579,i__130581);if(cljs.core.sequential_QMARK_.call(null,ch))
{if((cljs.core.first.call(null,ch) instanceof cljs.core.Keyword))
{freactive.experimental.dom2.append_child_BANG_.call(null,elem,ch);
} else
{append_children_BANG_.call(null,elem,ch);
}
} else
{freactive.experimental.dom2.append_child_BANG_.call(null,elem,ch);
}
{
var G__130582 = seq__130578;
var G__130583 = chunk__130579;
var G__130584 = count__130580;
var G__130585 = (i__130581 + (1));
seq__130578 = G__130582;
chunk__130579 = G__130583;
count__130580 = G__130584;
i__130581 = G__130585;
continue;
}
} else
{var temp__4388__auto__ = cljs.core.seq.call(null,seq__130578);if(temp__4388__auto__)
{var seq__130578__$1 = temp__4388__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__130578__$1))
{var c__12267__auto__ = cljs.core.chunk_first.call(null,seq__130578__$1);{
var G__130586 = cljs.core.chunk_rest.call(null,seq__130578__$1);
var G__130587 = c__12267__auto__;
var G__130588 = cljs.core.count.call(null,c__12267__auto__);
var G__130589 = (0);
seq__130578 = G__130586;
chunk__130579 = G__130587;
count__130580 = G__130588;
i__130581 = G__130589;
continue;
}
} else
{var ch = cljs.core.first.call(null,seq__130578__$1);if(cljs.core.sequential_QMARK_.call(null,ch))
{if((cljs.core.first.call(null,ch) instanceof cljs.core.Keyword))
{freactive.experimental.dom2.append_child_BANG_.call(null,elem,ch);
} else
{append_children_BANG_.call(null,elem,ch);
}
} else
{freactive.experimental.dom2.append_child_BANG_.call(null,elem,ch);
}
{
var G__130590 = cljs.core.next.call(null,seq__130578__$1);
var G__130591 = null;
var G__130592 = (0);
var G__130593 = (0);
seq__130578 = G__130590;
chunk__130579 = G__130591;
count__130580 = G__130592;
i__130581 = G__130593;
continue;
}
}
} else
{return null;
}
}
break;
}
});
freactive.experimental.dom2.build_element = (function build_element(elem_spec){var virtual_dom = freactive.experimental.dom2.get_virtual_dom.call(null,elem_spec);var node = ((typeof virtual_dom === 'string')?(function (){var node = document.createTextNode(virtual_dom);freactive.experimental.dom2.init_element_state_BANG_.call(null,node,elem_spec);
return node;
})():(function (){var node = freactive.experimental.dom2.create_dom_node.call(null,cljs.core.first.call(null,virtual_dom));var state = freactive.experimental.dom2.init_element_state_BANG_.call(null,node,elem_spec);var attrs_QMARK_ = cljs.core.second.call(null,virtual_dom);var attrs = ((cljs.core.map_QMARK_.call(null,attrs_QMARK_))?attrs_QMARK_:null);var children = (cljs.core.truth_(attrs)?cljs.core.nnext.call(null,virtual_dom):cljs.core.next.call(null,virtual_dom));var seq__130600_130606 = cljs.core.seq.call(null,attrs);var chunk__130601_130607 = null;var count__130602_130608 = (0);var i__130603_130609 = (0);while(true){
if((i__130603_130609 < count__130602_130608))
{var vec__130604_130610 = cljs.core._nth.call(null,chunk__130601_130607,i__130603_130609);var k_130611 = cljs.core.nth.call(null,vec__130604_130610,(0),null);var v_130612 = cljs.core.nth.call(null,vec__130604_130610,(1),null);freactive.experimental.dom2.bind_attr_BANG_.call(null,node,k_130611,v_130612,state);
{
var G__130613 = seq__130600_130606;
var G__130614 = chunk__130601_130607;
var G__130615 = count__130602_130608;
var G__130616 = (i__130603_130609 + (1));
seq__130600_130606 = G__130613;
chunk__130601_130607 = G__130614;
count__130602_130608 = G__130615;
i__130603_130609 = G__130616;
continue;
}
} else
{var temp__4388__auto___130617 = cljs.core.seq.call(null,seq__130600_130606);if(temp__4388__auto___130617)
{var seq__130600_130618__$1 = temp__4388__auto___130617;if(cljs.core.chunked_seq_QMARK_.call(null,seq__130600_130618__$1))
{var c__12267__auto___130619 = cljs.core.chunk_first.call(null,seq__130600_130618__$1);{
var G__130620 = cljs.core.chunk_rest.call(null,seq__130600_130618__$1);
var G__130621 = c__12267__auto___130619;
var G__130622 = cljs.core.count.call(null,c__12267__auto___130619);
var G__130623 = (0);
seq__130600_130606 = G__130620;
chunk__130601_130607 = G__130621;
count__130602_130608 = G__130622;
i__130603_130609 = G__130623;
continue;
}
} else
{var vec__130605_130624 = cljs.core.first.call(null,seq__130600_130618__$1);var k_130625 = cljs.core.nth.call(null,vec__130605_130624,(0),null);var v_130626 = cljs.core.nth.call(null,vec__130605_130624,(1),null);freactive.experimental.dom2.bind_attr_BANG_.call(null,node,k_130625,v_130626,state);
{
var G__130627 = cljs.core.next.call(null,seq__130600_130618__$1);
var G__130628 = null;
var G__130629 = (0);
var G__130630 = (0);
seq__130600_130606 = G__130627;
chunk__130601_130607 = G__130628;
count__130602_130608 = G__130629;
i__130603_130609 = G__130630;
continue;
}
}
} else
{}
}
break;
}
if(children)
{freactive.experimental.dom2.append_children_BANG_.call(null,node,children);
} else
{}
return node;
})());return node;
});
freactive.experimental.dom2.mount_BANG_ = (function mount_BANG_(element,child){var temp__4388__auto___130631 = freactive.experimental.dom2.get_dom_node.call(null,element).lastChild;if(cljs.core.truth_(temp__4388__auto___130631))
{var last_child_130632 = temp__4388__auto___130631;freactive.experimental.dom2.remove_BANG_.call(null,last_child_130632);
} else
{}
return freactive.experimental.dom2.append_child_BANG_.call(null,element,child);
});

//# sourceMappingURL=dom2.js.map