(function(){ 
  function Bindable(){};
  __cache["java.lang.Bindable"] = Bindable;
  Object.defineProperty(Bindable.prototype, "parentNode", {
    get : function() {
    }, 
    set : function(value) {
    }
  });
  Object.defineProperty(Bindable.prototype, "logicParent", {
    get : function() {
    }, 
    set : function(value) {
    }
  });
  Bindable.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Bindable", Bindable, Object.prototype.__class, [], 2);
  return  Bindable;
})();
(function(){ 
  function Tag(){};
  __cache["java.lang.Tag"] = Tag;
  Object.defineProperty(Tag.prototype, "bodyHandler", {
    get : function() {
    }, 
    set : function(value) {
    }
  });
  Tag.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Tag", Tag, Object.prototype.__class, [], 2);
  return  Tag;
})();
(function(){ 
  function AbstractBindable(parent) {    
    this._childs = null;
    this._parent = null;
    this._parent = parent;
  }
  AbstractBindable.prototype.__proto__ = Object.prototype;
  __cache["java.lang.AbstractBindable"] = AbstractBindable;
  Object.defineProperty(AbstractBindable.prototype, "parentNode", {
    get : function() {
      return this._parent;
    }, 
    set : function(value) {
      this._parent = value;
    }
  });
  Object.defineProperty(AbstractBindable.prototype, "logicParent", {
    get : function() {
      return this["_logicParent"];
    }, 
    set : function(value) {
      this["_logicParent"] = value;
    }
  });
  Object.defineProperty(AbstractBindable.prototype, "bodyHandler", {
    get : function() {
      return this["_bodyHandler"];
    }, 
    set : function(value) {
      this["_bodyHandler"] = value;
    }
  });
  AbstractBindable.prototype.appendChild = function(child){
    this.processChild(child);
    return this.parentNode.appendChild(child);
  };
  AbstractBindable.prototype.processChild = function(child){
    if(this._childs == null)
    {
      this._childs = [];
    }
    this._childs.push(child);
    child["_logicParent"] = this;
    return child;
  };
  AbstractBindable.prototype.getBinding = function(properties){
    var bindings = this["__bindings"];
    if(bindings == null)
    {
      return null;
    }
    return bindings.get(properties.join("."));
  };
  AbstractBindable.prototype.setBinding = function(properties, binding){
    var bindings = this["__bindings"];
    if(bindings == null)
    {
      this["__bindings"] = bindings = new Map();
    }
    var old = bindings.get(properties.join("."));
    if(old === binding)
    {
      return;
    }
    if(old != null)
    {
      old.unInject(this);
    }
    bindings.set(properties.join("."), binding);
    binding.inject(this, properties);
  };
  AbstractBindable.prototype.removeBinding = function(properties){
    var bindings = this["__bindings"];
    if(bindings == null)
    {
      return false;
    }
    var old = bindings.get(properties.join("."));
    if(old == null)
    {
      return false;
    }
    if(old != null)
    {
      old.unInject(this);
    }
    bindings.delete(properties.join("."));
    return true;
  };
  AbstractBindable.prototype.attach = function(binding){
  };
  AbstractBindable.prototype.detach = function(binding){
  };
  AbstractBindable.prototype.update = function(binding){
    var data = this.getDataContext(binding.context).dataItem;
    if(! String.isNullOrEmpty(binding.property))
    {
      data = data == null ? null : data[binding.property];
    }
    var tag = this;
    var properties = binding.targetProperties;
    var length = properties.length;
    for (var i = 0; i < length - 1; i ++) 
    {
      if(tag == null) return
      tag = tag[properties[i]];
    }
    if(binding.converteTo != null)
    {
      data = binding.converteTo(data);
    }
    var oldValue = tag[properties[length - 1]];
    if(data === oldValue)
    {
      return;
    }
    if(binding.updateTargetCallback != null)
    {
      binding.updateTargetCallback(this, properties, data);
    }
    else
    {
      tag[properties[length - 1]] = data;
    }
  };
  AbstractBindable.prototype.getDataContext = function(name){
    if(String.isNullOrEmpty(name))
    {
      return null;
    }
    var contexts = this["__contexts"];
    if(contexts != null)
    {
      var result = contexts.get(name);
      if(result != null)
      {
        return result;
      }
    }
    if(this.logicParent != null)
    {
      return this.logicParent.getDataContext(name);
    }
    else if(this.parentNode != null)
    {
      return this.parentNode.getDataContext(name);
    }
    return null;
  };
  AbstractBindable.prototype.addDataContext = function(context){
    var contexts = this["__contexts"];
    if(contexts == null)
    {
      this["__contexts"] = contexts = new Map();
    }
    var old = contexts.get(name);
    if(old != null)
    {
      old.moveDependentTo(context);
    }
    contexts.set(context.name, context);
    if(context.name == "ROOT" || context.name == "TEMPLATE")
    {
      return;
    }
    if(this.logicParent != null)
    {
      var parent = this.logicParent.getDataContext(context.ancestor);
      if(parent != null)
      {
        parent.addDependent(context);
      }
      else
      {
        console.log("ancestor of DataContext[" + context.ancestor + "] does not exists!");
      }
    }
    else if(this.parentNode != null)
    {
      var parent = this.parentNode.getDataContext(context.ancestor);
      if(parent != null)
      {
        parent.addDependent(context);
      }
      else
      {
        console.log("ancestor of DataContext[" + context.ancestor + "] does not exists!");
      }
    }
  };
  AbstractBindable.prototype.removeDataContext = function(name){
    if(String.isNullOrEmpty(name))
    {
      return;
    }
    var contexts = this["__contexts"];
    if(contexts == null)
    {
      return;
    }
    var context = contexts.get(name);
    if(context != null)
    {
      context.clearDependents();
      if(this.logicParent != null)
      {
        var parent = this.logicParent.getDataContext(context.ancestor);
        if(parent != null)
        {
          parent.addDependent(context);
        }
        else
        {
          console.log("ancestor of DataContext[" + context.ancestor + "] does not exists!");
        }
      }
      else if(this.parentNode != null)
      {
        var parent = this.parentNode.getDataContext(context.ancestor);
        if(parent != null)
        {
          parent.addDependent(context);
        }
        else
        {
          console.log("ancestor of DataContext[" + context.ancestor + "] does not exists!");
        }
      }
      contexts.delete(name);
    }
  };
  AbstractBindable.prototype.reset = function(){
    if(this._childs != null)
    {
      this._childs.forEach((function(child, index, array){
        child.reset();
      }).bind(this));
    }
    var bindings = this["__bindings"];
    if(bindings != null)
    {
      bindings.forEach((function(binding, key, map){
        binding.reset();
      }).bind(this));
    }
    var contexts = this["__contexts"];
    contexts.forEach((function(context, key, mapObj){
      context.reset(this);
    }).bind(this));
  };
  AbstractBindable.prototype.body = function(){
    this.doBody();
  };
  AbstractBindable.prototype.doBody = function(){
    this.bodyHandler();
  };
  AbstractBindable.prototype.setAttribute = function(name, value){
    this[name] = value;
  };
  AbstractBindable.prototype.setAttributeNS = function(namespaceURI, qualifiedName, value){
    this[name] = value;
  };
  AbstractBindable.prototype.__class = new (__lc('java.lang.Class'))("java.lang.AbstractBindable", AbstractBindable, Object.prototype.__class, [__lc("java.lang.Bindable").prototype.__class, __lc("java.lang.Tag").prototype.__class], 1);
  return  AbstractBindable;
})();
(function(){ 
  function PropertyChangeListener(){};
  __cache["java.lang.PropertyChangeListener"] = PropertyChangeListener;
  Object.defineProperty(PropertyChangeListener.prototype, "propertyChange", {

  });
  PropertyChangeListener.prototype.__class = new (__lc('java.lang.Class'))("java.lang.PropertyChangeListener", PropertyChangeListener, Object.prototype.__class, [], 2);
  return  PropertyChangeListener;
})();
(function(){ 
  function INotifyPropertyChanged(){};
  __cache["java.lang.INotifyPropertyChanged"] = INotifyPropertyChanged;
  INotifyPropertyChanged.prototype.notifyChanged = function(property){
    var event = new (__lc('java.lang.PropertyChangeEvent'))(property);
    var _listeners = this["__listeners"];
    if(_listeners != null)
    {
      _listeners.forEach((function(h, index, array){
        h(this, event);
      }).bind(this));
    }
    var _propListeners = this["__propListeners"];
    if(_propListeners != null)
    {
      _listeners = _propListeners.get(property);
      if(_listeners != null)
      {
        _listeners.forEach((function(h, index, array){
          h(this, event);
        }).bind(this));
      }
    }
    var _pListeners = this["__pListeners"];
    if(_pListeners != null)
    {
      _pListeners.forEach((function(pp, index, array){
        var pd = pp[0];
        if(pd(this, property))
        {
          var pc = pp[1];
          pc(this, event);
        }
      }).bind(this));
    }
  };
  INotifyPropertyChanged.prototype.addAllPropertyChangeListener = function(handler){
    var _listeners = this["__listeners"];
    if(_listeners == null)
    {
      this["__listeners"] = _listeners = new Array();
    }
    _listeners.push(handler);
  };
  INotifyPropertyChanged.prototype.removeAllPropertyChangeListener = function(handler){
    var _listeners = this["__listeners"];
    if(_listeners == null)
    {
      return;
    }
    _listeners.forEach((function(h, index, array){
      if(handler === h)
      {
        _listeners.splice(index, 1);
        return;
      }
    }).bind(this));
  };
  INotifyPropertyChanged.prototype.addPropertyChangeListener = function(propName, handler){
    var _propertyListeners = this["__propListeners"];
    if(_propertyListeners == null)
    {
      this["__propListeners"] = _propertyListeners = new Map();
    }
    var listeners = _propertyListeners.get(propName);
    if(listeners == null)
    {
      listeners = new Array();
      _propertyListeners.set(propName, listeners);
    }
    listeners.push(handler);
  };
  INotifyPropertyChanged.prototype.removePropertyChangeListener = function(propName, handler){
    var _propertyListeners = this["__propListeners"];
    if(_propertyListeners == null)
    {
      return;
    }
    var listeners = _propertyListeners.get(propName);
    if(listeners == null)
    {
      return;
    }
    listeners.forEach((function(h, index, array){
      if(handler === h)
      {
        listeners.splice(index, 1);
        if(listeners.length == 0)
        {
          _propertyListeners.delete(propName);
        }
        return;
      }
    }).bind(this));
  };
  INotifyPropertyChanged.prototype.addPropertyChangeListeners = function(propNames, handler){
    var _propertyListeners = this["__propListeners"];
    if(_propertyListeners == null)
    {
      this["__propListeners"] = _propertyListeners = new Map();
    }
    var __coll = propNames
    for(var __i = 0; __i < __coll.length; __i++) {
      var propName = __coll[__i];
      var listeners = _propertyListeners.get(propName);
      if(listeners == null)
      {
        listeners = new Array();
        _propertyListeners.set(propName, listeners);
      }
      listeners.push(handler);
    }
  };
  INotifyPropertyChanged.prototype.removePropertyChangeListeners = function(handler){
    var _propertyListeners = this["__propListeners"];
    if(_propertyListeners == null)
    {
      return;
    }
    _propertyListeners.forEach((function(listeners, key, context){
      listeners.forEach((function(h, index, array){
        if(handler === h)
        {
          listeners.splice(index, 1);
          if(listeners.length == 0)
          {
            _propertyListeners.delete(key);
          }
          return;
        }
      }).bind(this));
    }).bind(this));
  };
  INotifyPropertyChanged.prototype.addPropertyChangeListener3 = function(predicate, handler){
    var _listeners = this["__pListeners"];
    if(_listeners == null)
    {
      this["__pListeners"] = _listeners = new Array();
    }
    _listeners.push([predicate, handler]);
  };
  INotifyPropertyChanged.prototype.removePropertyChangeListener3 = function(predicate, handler){
    var _listeners = this["__pListeners"];
    if(_listeners == null)
    {
      return;
    }
    _listeners.forEach((function(pp, index, array){
      if(pp[0] === predicate && pp[1] == handler)
      {
        _listeners.splice(index, 1);
        return;
      }
    }).bind(this));
  };
  INotifyPropertyChanged.prototype.__class = new (__lc('java.lang.Class'))("java.lang.INotifyPropertyChanged", INotifyPropertyChanged, Object.prototype.__class, [], 2);
  return  INotifyPropertyChanged;
})();
(function(){ 
  function INotifyCollectionChanged(){};
  __cache["java.lang.INotifyCollectionChanged"] = INotifyCollectionChanged;
  INotifyCollectionChanged.prototype.onCollectionChanged = function(e){
    var listeners = this["__colListeners"];
    if(listeners == null) return
    listeners.forEach((function(callback, index, array){
      callback(this, e);
    }).bind(this));
  };
  INotifyCollectionChanged.prototype.addCollectionChangedListener = function(listener){
    var listeners = this["__colListeners"];
    if(listeners == null)
    {
      this["__colListeners"] = listeners = new Array();
    }
    listeners.push(listener);
  };
  INotifyCollectionChanged.prototype.removeCollectionChangedListener = function(listener){
    var listeners = this["__colListeners"];
    if(listeners == null) return
    listeners.forEach((function(listener1, index, array){
      if(listener1 === listener)
      {
        array.splice(index, 1);
      }
    }).bind(this));
  };
  INotifyCollectionChanged.prototype.__class = new (__lc('java.lang.Class'))("java.lang.INotifyCollectionChanged", INotifyCollectionChanged, Object.prototype.__class, [], 2);
  return  INotifyCollectionChanged;
})();
(function(){ 
  function CollectionChangedAction() {    
  __lc('java.lang.Enum').call(this, arguments[arguments.length-2], arguments[arguments.length-1]);
  }
  CollectionChangedAction.prototype.__proto__ = __lc("java.lang.Enum").prototype;
  __cache["java.lang.CollectionChangedAction"] = CollectionChangedAction;
  CollectionChangedAction.valueOf = function(name) { return CollectionChangedAction[name]; };
  CollectionChangedAction.values = function() { return [CollectionChangedAction.Add, CollectionChangedAction.Move, CollectionChangedAction.Remove, CollectionChangedAction.Replace, CollectionChangedAction.Reset]; };
  CollectionChangedAction.Add = new (__lc('java.lang.CollectionChangedAction'))("Add", 0);
  CollectionChangedAction.Move = new (__lc('java.lang.CollectionChangedAction'))("Move", 1);
  CollectionChangedAction.Remove = new (__lc('java.lang.CollectionChangedAction'))("Remove", 2);
  CollectionChangedAction.Replace = new (__lc('java.lang.CollectionChangedAction'))("Replace", 3);
  CollectionChangedAction.Reset = new (__lc('java.lang.CollectionChangedAction'))("Reset", 4);
  CollectionChangedAction.prototype.__class = new (__lc('java.lang.Class'))("java.lang.CollectionChangedAction", CollectionChangedAction, __lc("java.lang.Enum").prototype.__class, [], 3);
  return  CollectionChangedAction;
})();
(function(){ 
  function CollectionChangedEvent(){
    var args = Array.prototype.slice.call(arguments);
    return CollectionChangedEvent.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  CollectionChangedEvent.__f = {
    "1" : function(action) {    
    this._action = null;
    this._newItems = null;
    this._oldItems = null;
    this._newStartingIndex = - 1;
    this._oldStartingIndex = - 1;
    if(action != __lc("java.lang.CollectionChangedAction").Reset) throw new Error(0, "Action must be CollectionChangedAction.Reset")
    initializeAdd.call(this, action, null, - 1);
  }, 
    "2" : function(action, changedItem) {    
    this._action = null;
    this._newItems = null;
    this._oldItems = null;
    this._newStartingIndex = - 1;
    this._oldStartingIndex = - 1;
    if((action != __lc("java.lang.CollectionChangedAction").Add) && (action != __lc("java.lang.CollectionChangedAction").Remove) && (action != __lc("java.lang.CollectionChangedAction").Reset)) throw new Error(0, "Action must be CollectionChangedAction.Reset or CollectionChangedAction.Remove")
    if(action == __lc("java.lang.CollectionChangedAction").Reset)
    {
      if(changedItem != null) throw new Error(0, "ResetAction requires null changedItems")
      initializeAdd.call(this, action, null, - 1);
    }
    else
    {
      initializeAddOrRemove.call(this, action, [changedItem], - 1);
    }
  }, 
    "3" : function(action, changedItem, index) {    
    this._action = null;
    this._newItems = null;
    this._oldItems = null;
    this._newStartingIndex = - 1;
    this._oldStartingIndex = - 1;
    if((action != __lc("java.lang.CollectionChangedAction").Add) && (action != __lc("java.lang.CollectionChangedAction").Remove) && (action != __lc("java.lang.CollectionChangedAction").Reset)) throw new Error(0, "Action must be CollectionChangedAction.Add or CollectionChangedAction.Remove or CollectionChangedAction.Reset")
    if(action == __lc("java.lang.CollectionChangedAction").Reset)
    {
      if(changedItem != null) throw new Error(0, "ResetAction requires null changedItems")
      if(index != - 1) throw new Error(0, "ResetAction requires index minus 1")
      initializeAdd.call(this, action, null, - 1);
    }
    else
    {
      initializeAddOrRemove.call(this, action, [changedItem], index);
    }
  }, 
    "4" : function(action, changedItems) {    
    this._action = null;
    this._newItems = null;
    this._oldItems = null;
    this._newStartingIndex = - 1;
    this._oldStartingIndex = - 1;
    if((action != __lc("java.lang.CollectionChangedAction").Add) && (action != __lc("java.lang.CollectionChangedAction").Remove) && (action != __lc("java.lang.CollectionChangedAction").Reset)) throw new Error(0, "Action must be CollectionChangedAction.Add or CollectionChangedAction.Remove or CollectionChangedAction.Reset")
    if(action == __lc("java.lang.CollectionChangedAction").Reset)
    {
      if(changedItems != null) throw new Error(0, "ResetAction requires null changedItems")
      initializeAdd.call(this, action, null, - 1);
    }
    else
    {
      if(changedItems == null) throw new Error(0, "ResetAction requires null changedItems")
      initializeAddOrRemove.call(this, action, changedItems, - 1);
    }
  }, 
    "5" : function(action, changedItems, startingIndex) {    
    this._action = null;
    this._newItems = null;
    this._oldItems = null;
    this._newStartingIndex = - 1;
    this._oldStartingIndex = - 1;
    if((action != __lc("java.lang.CollectionChangedAction").Add) && (action != __lc("java.lang.CollectionChangedAction").Remove) && (action != __lc("java.lang.CollectionChangedAction").Reset)) throw new Error(0, "Action must be NotifyCollectionChangedAction.Add or CollectionChangedAction.Remove or CollectionChangedAction.Reset")
    if(action == __lc("java.lang.CollectionChangedAction").Reset)
    {
      if(changedItems != null) throw new Error(0, "ResetAction requires null changedItems")
      if(startingIndex != - 1) throw new Error(0, "ResetAction requires index minus 1")
      initializeAdd.call(this, action, null, - 1);
    }
    else
    {
      if(changedItems == null) throw new Error(0, "changedItems may not be null!")
      if(startingIndex < - 1) throw new Error(0, "Index cannot be negative")
      initializeAddOrRemove.call(this, action, changedItems, startingIndex);
    }
  }, 
    "6" : function(action, newItem, oldItem) {    
    this._action = null;
    this._newItems = null;
    this._oldItems = null;
    this._newStartingIndex = - 1;
    this._oldStartingIndex = - 1;
    if(action != __lc("java.lang.CollectionChangedAction").Replace) throw new Error(0, "Action must be NotifyCollectionChangedAction.Replace")
    initializeMoveOrReplace.call(this, action, [newItem], [oldItem], - 1, - 1);
  }, 
    "7" : function(action, newItem, oldItem, index) {    
    this._action = null;
    this._newItems = null;
    this._oldItems = null;
    this._newStartingIndex = - 1;
    this._oldStartingIndex = - 1;
    if(action != __lc("java.lang.CollectionChangedAction").Replace) throw new Error(0, "Action must be CollectionChangedAction.Replace")
    initializeMoveOrReplace.call(this, action, [newItem], [oldItem], index, index);
  }, 
    "8" : function(action, newItems, oldItems) {    
    this._action = null;
    this._newItems = null;
    this._oldItems = null;
    this._newStartingIndex = - 1;
    this._oldStartingIndex = - 1;
    if(action != __lc("java.lang.CollectionChangedAction").Replace) throw new Error(0, "Action must be CollectionChangedAction.Replace")
    if(newItems == null) throw new Error(0, "changedItems may not be null!")
    if(oldItems == null) throw new Error(0, "oldItems may not be null!")
    initializeMoveOrReplace.call(this, action, newItems, oldItems, - 1, - 1);
  }, 
    "9" : function(action, newItems, oldItems, startingIndex) {    
    this._action = null;
    this._newItems = null;
    this._oldItems = null;
    this._newStartingIndex = - 1;
    this._oldStartingIndex = - 1;
    if(action != __lc("java.lang.CollectionChangedAction").Replace) throw new Error(0, "Action must be CollectionChangedAction.Replace")
    if(newItems == null) throw new Error(0, "changedItems may not be null!")
    if(oldItems == null) throw new Error(0, "oldItems may not be null!")
    initializeMoveOrReplace.call(this, action, newItems, oldItems, startingIndex, startingIndex);
  }, 
    "10" : function(action, changedItem, index, oldIndex) {    
    this._action = null;
    this._newItems = null;
    this._oldItems = null;
    this._newStartingIndex = - 1;
    this._oldStartingIndex = - 1;
    if(action != __lc("java.lang.CollectionChangedAction").Move) throw new Error(0, "Action must be CollectionChangedAction.Move")
    if(index < 0) throw new Error(0, "Index cannot be negative")
    var changedItems = new Array(changedItem);
    initializeMoveOrReplace.call(this, action, changedItems, changedItems, index, oldIndex);
  }, 
    "11" : function(action, changedItems, index, oldIndex) {    
    this._action = null;
    this._newItems = null;
    this._oldItems = null;
    this._newStartingIndex = - 1;
    this._oldStartingIndex = - 1;
    if(action != __lc("java.lang.CollectionChangedAction").Move) throw new Error(0, "Action must be CollectionChangedAction.Move")
    if(index < 0) throw new Error(0, "Index cannot be negative")
    initializeMoveOrReplace.call(this, action, changedItems, changedItems, index, oldIndex);
  }, 
    "12" : function(action, newItems, oldItems, newIndex, oldIndex) {    
    this._action = null;
    this._newItems = null;
    this._oldItems = null;
    this._newStartingIndex = - 1;
    this._oldStartingIndex = - 1;
    this._action = action;
    this._newItems = (newItems == null) ? null : newItems;
    this._oldItems = (oldItems == null) ? null : oldItems;
    this._newStartingIndex = newIndex;
    this._oldStartingIndex = oldIndex;
  }
  };
  CollectionChangedEvent.prototype.__proto__ = Object.prototype;
  __cache["java.lang.CollectionChangedEvent"] = CollectionChangedEvent;
  Object.defineProperty(CollectionChangedEvent.prototype, "action", {
    get : function() {
      return this._action;
    }
  });
  Object.defineProperty(CollectionChangedEvent.prototype, "newItems", {
    get : function() {
      return this._newItems;
    }
  });
  Object.defineProperty(CollectionChangedEvent.prototype, "oldItems", {
    get : function() {
      return this._oldItems;
    }
  });
  Object.defineProperty(CollectionChangedEvent.prototype, "newStartingIndex", {
    get : function() {
      return this._newStartingIndex;
    }
  });
  Object.defineProperty(CollectionChangedEvent.prototype, "oldStartingIndex", {
    get : function() {
      return this._oldStartingIndex;
    }
  });
  function initializeAddOrRemove(action, changedItems, startingIndex){
    if(action == __lc("java.lang.CollectionChangedAction").Add) initializeAdd.call(this, action, changedItems, startingIndex)
    else if(action == __lc("java.lang.CollectionChangedAction").Remove) initializeRemove.call(this, action, changedItems, startingIndex)
  }
  function initializeAdd(action, newItems, newStartingIndex){
    this._action = action;
    this._newItems = newItems;
    this._newStartingIndex = newStartingIndex;
  }
  function initializeRemove(action, oldItems, oldStartingIndex){
    this._action = action;
    this._oldItems = oldItems;
    this._oldStartingIndex = oldStartingIndex;
  }
  function initializeMoveOrReplace(action, newItems, oldItems, startingIndex, oldStartingIndex){
    initializeAdd.call(this, action, newItems, startingIndex);
    initializeRemove.call(this, action, oldItems, oldStartingIndex);
  }
  CollectionChangedEvent.prototype.__class = new (__lc('java.lang.Class'))("java.lang.CollectionChangedEvent", CollectionChangedEvent, Object.prototype.__class, [], 1);
  return  CollectionChangedEvent;
})();
(function(){ 
  function PropertyChangeEvent(property) {    
    this._property = null;
    this._property = property;
  }
  PropertyChangeEvent.prototype.__proto__ = Object.prototype;
  __cache["java.lang.PropertyChangeEvent"] = PropertyChangeEvent;
  Object.defineProperty(PropertyChangeEvent.prototype, "property", {
    get : function() {
      return this._property;
    }
  });
  PropertyChangeEvent.prototype.__class = new (__lc('java.lang.Class'))("java.lang.PropertyChangeEvent", PropertyChangeEvent, Object.prototype.__class, [], 1);
  return  PropertyChangeEvent;
})();
(function(){ 
  function MarkupExtension(){};
  __cache["java.lang.MarkupExtension"] = MarkupExtension;
  MarkupExtension.prototype.__class = new (__lc('java.lang.Class'))("java.lang.MarkupExtension", MarkupExtension, Object.prototype.__class, [], 2);
  return  MarkupExtension;
})();
(function(){ 
  function UpdateSourceTrigger() {    
  __lc('java.lang.Enum').call(this, arguments[arguments.length-2], arguments[arguments.length-1]);
  }
  UpdateSourceTrigger.prototype.__proto__ = __lc("java.lang.Enum").prototype;
  __cache["java.lang.UpdateSourceTrigger"] = UpdateSourceTrigger;
  UpdateSourceTrigger.valueOf = function(name) { return UpdateSourceTrigger[name]; };
  UpdateSourceTrigger.values = function() { return [UpdateSourceTrigger.PropertyChanged, UpdateSourceTrigger.LostFocus, UpdateSourceTrigger.Explicit]; };
  UpdateSourceTrigger.PropertyChanged = new (__lc('java.lang.UpdateSourceTrigger'))("PropertyChanged", 0);
  UpdateSourceTrigger.LostFocus = new (__lc('java.lang.UpdateSourceTrigger'))("LostFocus", 1);
  UpdateSourceTrigger.Explicit = new (__lc('java.lang.UpdateSourceTrigger'))("Explicit", 2);
  UpdateSourceTrigger.prototype.__class = new (__lc('java.lang.Class'))("java.lang.UpdateSourceTrigger", UpdateSourceTrigger, __lc("java.lang.Enum").prototype.__class, [], 3);
  return  UpdateSourceTrigger;
})();
(function(){ 
  function BindingMode() {    
  __lc('java.lang.Enum').call(this, arguments[arguments.length-2], arguments[arguments.length-1]);
  }
  BindingMode.prototype.__proto__ = __lc("java.lang.Enum").prototype;
  __cache["java.lang.BindingMode"] = BindingMode;
  BindingMode.valueOf = function(name) { return BindingMode[name]; };
  BindingMode.values = function() { return [BindingMode.TwoWay, BindingMode.OneWay, BindingMode.OneTime]; };
  BindingMode.TwoWay = new (__lc('java.lang.BindingMode'))("TwoWay", 0);
  BindingMode.OneWay = new (__lc('java.lang.BindingMode'))("OneWay", 1);
  BindingMode.OneTime = new (__lc('java.lang.BindingMode'))("OneTime", 2);
  BindingMode.prototype.__class = new (__lc('java.lang.Class'))("java.lang.BindingMode", BindingMode, __lc("java.lang.Enum").prototype.__class, [], 3);
  return  BindingMode;
})();
(function(){ 
  function Binding(options) {    
    this._context = null;
    this._property = null;
    this._target = null;
    this._mode = null;
    this._trigger = null;
    this._trace = false;
    this._targetProperties = null;
    this._updateTargetCallback = null;
    this._updateSourceCallback = null;
    this._converteTo = null;
    this._converteFrom = null;
    this._propertyChange = (function(source, evt){
      this._target.update(this);
    }).bind(this);
    this.updateSource = (function(event){
      var value = this.getProperty(event.target, this._targetProperties);
      if(this._converteFrom != null)
      {
        value = this._converteFrom(value);
      }
      return this._target.getDataContext(this._context).updateSource(this._property, value, this._updateSourceCallback);
    }).bind(this);
    if(options["property"] != undefined)
    {
      this._property = options["property"];
    }
    if(options["trace"] != undefined)
    {
      this._trace = options["trace"];
    }
    if(options["mode"] != undefined)
    {
      this._mode = options["mode"];
    }
    else
    {
      this._mode = __lc("java.lang.BindingMode").OneTime;
    }
    if(options["context"] != undefined)
    {
      this._context = options["context"];
    }
    else
    {
      this._context = "ROOT";
    }
    if(options["trigger"] != undefined)
    {
      this._trigger = options["trigger"];
    }
    else
    {
      this._trigger = __lc("java.lang.UpdateSourceTrigger").LostFocus;
    }
    if(options["updateTargetCallback"] != undefined)
    {
      this._updateTargetCallback = options["updateTargetCallback"];
    }
    if(options["updateSourceCallback"] != undefined)
    {
      this._updateSourceCallback = options["updateSourceCallback"];
    }
    if(options["converteTo"] != undefined)
    {
      this._converteTo = (options["converteTo"]);
    }
    if(options["converteFrom"] != undefined)
    {
      this._converteFrom = (options["converteFrom"]);
    }
  }
  Binding.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Binding"] = Binding;
  Object.defineProperty(Binding.prototype, "property", {
    get : function() {
      return this._property;
    }, 
    set : function(value) {
      this._property = value;
    }
  });
  Object.defineProperty(Binding.prototype, "targetProperties", {
    get : function() {
      return this._targetProperties;
    }, 
    set : function(value) {
      this._targetProperties = value;
    }
  });
  Object.defineProperty(Binding.prototype, "trace", {
    get : function() {
      return this._trace;
    }, 
    set : function(value) {
      this._trace = value;
    }
  });
  Object.defineProperty(Binding.prototype, "mode", {
    get : function() {
      return this._mode;
    }, 
    set : function(value) {
      this._mode = value;
    }
  });
  Object.defineProperty(Binding.prototype, "trigger", {
    get : function() {
      return this._trigger;
    }, 
    set : function(value) {
      this._trigger = value;
    }
  });
  Object.defineProperty(Binding.prototype, "updateTargetCallback", {
    get : function() {
      return this._updateTargetCallback;
    }, 
    set : function(value) {
      this._updateTargetCallback = value;
    }
  });
  Object.defineProperty(Binding.prototype, "updateSourceCallback", {
    get : function() {
      return this._updateSourceCallback;
    }, 
    set : function(value) {
      this._updateSourceCallback = value;
    }
  });
  Object.defineProperty(Binding.prototype, "converteTo", {
    get : function() {
      return this._converteTo;
    }, 
    set : function(value) {
      this._converteTo = value;
    }
  });
  Object.defineProperty(Binding.prototype, "converteFrom", {
    get : function() {
      return this._converteFrom;
    }, 
    set : function(value) {
      this._converteFrom = value;
    }
  });
  Object.defineProperty(Binding.prototype, "context", {
    get : function() {
      return this._context;
    }, 
    set : function(value) {
      this._context = value;
    }
  });
  Object.defineProperty(Binding.prototype, "propertyChange", {
    get : function() {
      return this._propertyChange;
    }
  });
  Binding.prototype.inject = function(target, targetProperties){
    this._target = target;
    this._targetProperties = targetProperties;
    switch (this._mode) {
    case __lc("java.lang.BindingMode").TwoWay :
        target.attach(this);
    case __lc("java.lang.BindingMode").OneWay :
        target.getDataContext(this.context).addBinding(this);
        target.setBinding(targetProperties, this);
    case __lc("java.lang.BindingMode").OneTime :
        target.update(this);
    }
  };
  Binding.prototype.unInject = function(target){
    switch (this._mode) {
    case __lc("java.lang.BindingMode").TwoWay :
        target.detach(this);
    case __lc("java.lang.BindingMode").OneWay :
        target.removeBinding(this._targetProperties);
    case __lc("java.lang.BindingMode").OneTime :
    }
  };
  Binding.prototype.getProperty = function(target, properties){
    var result = target;
    var length = properties.length;
    for (var index = 0; index < length - 1; index ++) 
    {
      if(result == null) return null
      result = result[properties[index]];
    }
    return result[properties[length - 1]];
  };
  Binding.prototype.reset = function(){
    if(this.context != null)
    {
      var ancestor = this._target.getDataContext(this.context);
      if(ancestor != null)
      {
        ancestor.removeBinding(this);
      }
    }
    else
    {
      var ancestor = this._target.getDataContext("ROOT");
      if(ancestor != null)
      {
        ancestor.removeBinding(this);
      }
    }
    this._target.detach(this);
  };
  Binding.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Binding", Binding, Object.prototype.__class, [__lc("java.lang.MarkupExtension").prototype.__class, __lc("java.lang.PropertyChangeListener").prototype.__class], 1);
  return  Binding;
})();
(function(){ 
  function DataContext(options) {    
    this._name = null;
    this._property = null;
    this._ancestor = null;
    this._bindings = [];
    this._dependents = new Array();
    this._dataItem = null;
    this._propertyChange = (function(source, e){
      var superior = source[e.property];
      if(superior == null)
      {
        this.dataItem = null;
      }
      else
      {
        this.dataItem = superior[this.property];
      }
    }).bind(this);
    if(options["property"] != undefined)
    {
      this._property = options["property"];
    }
    if(options["dataItem"] != undefined)
    {
      this._dataItem = options["dataItem"];
    }
    if(options["name"] != undefined)
    {
      this._name = options["name"];
    }
    else
    {
      throw new Error(0, "DataContext name may not be null!");
    }
    if(options["ancestor"] != undefined)
    {
      this._ancestor = options["ancestor"];
    }
    else
    {
      if(this._name != "ROOT") this._ancestor = "ROOT"
    }
  }
  DataContext.prototype.__proto__ = Object.prototype;
  __cache["java.lang.DataContext"] = DataContext;
  Object.defineProperty(DataContext.prototype, "name", {
    get : function() {
      return this._name;
    }, 
    set : function(value) {
      if(value === this._name) return
      this._name = value;
    }
  });
  Object.defineProperty(DataContext.prototype, "property", {
    get : function() {
      return this._ancestor;
    }, 
    set : function(value) {
      this._ancestor = value;
    }
  });
  Object.defineProperty(DataContext.prototype, "ancestor", {
    get : function() {
      return this._property;
    }, 
    set : function(value) {
      this._property = value;
    }
  });
  Object.defineProperty(DataContext.prototype, "dataItem", {
    get : function() {
      return this._dataItem;
    }, 
    set : function(value) {
      if(value === this._dataItem) return
      this.replaceDataItem(value);
      this._dataItem = value;
      this.dirty(value);
    }
  });
  Object.defineProperty(DataContext.prototype, "propertyChange", {
    get : function() {
      return this._propertyChange;
    }
  });
  DataContext.prototype.inject = function(target, properties){
    target.addDataContext(this);
  };
  DataContext.prototype.addBinding = function(binding){
    this._bindings.push(binding);
    if(String.isNullOrEmpty(binding.property))
    {
      __lc("java.lang.INotifyPropertyChanged").prototype.addPropertyChangeListener.call(this, "dataItem", binding.propertyChange);
      if(binding.trace)
      {
        if(__lc("java.lang.INotifyPropertyChanged").prototype.__class.isInstance(this._dataItem))
        {
          __lc("java.lang.INotifyPropertyChanged").prototype.addAllPropertyChangeListener.call(this._dataItem, binding.propertyChange);
        }
      }
    }
    else
    {
      if(__lc("java.lang.INotifyPropertyChanged").prototype.__class.isInstance(this._dataItem))
      {
        __lc("java.lang.INotifyPropertyChanged").prototype.addPropertyChangeListener.call(this._dataItem, binding.property, binding.propertyChange);
      }
    }
  };
  DataContext.prototype.removeBinding = function(binding){
    this._bindings.forEach((function(be, index, array){
      if(be == binding)
      {
        this._bindings.splice(index, 1);
        return;
      }
    }).bind(this));
    if(String.isNullOrEmpty(binding.property))
    {
      __lc("java.lang.INotifyPropertyChanged").prototype.removePropertyChangeListener.call(this, "dataItem", binding.propertyChange);
      if(binding.trace)
      {
        __lc("java.lang.INotifyPropertyChanged").prototype.removeAllPropertyChangeListener.call(this, binding.propertyChange);
      }
    }
    else
    {
      if(__lc("java.lang.INotifyPropertyChanged").prototype.__class.isInstance(this._dataItem))
      {
        __lc("java.lang.INotifyPropertyChanged").prototype.removePropertyChangeListener.call(this._dataItem, binding.property, binding.propertyChange);
      }
    }
  };
  DataContext.prototype.addDependent = function(dependent){
    this._dependents.push(dependent);
    if(this._dataItem != null)
    {
      dependent.dataItem = this.dataItem[dependent.property];
    }
    else
    {
      dependent.dataItem = null;
    }
  };
  DataContext.prototype.removeDependent = function(dependent){
    this._dependents.forEach((function(dc, index, array){
      if(dc == dependent)
      {
        this._dependents.splice(index, 1);
      }
    }).bind(this));
  };
  DataContext.prototype.moveDependentTo = function(target){
  };
  DataContext.prototype.clearDependents = function(){
  };
  DataContext.prototype.dirty = function(data){
    this._bindings.forEach((function(binding, index, array){
      binding.propertyChange(this.dataItem, new (__lc('java.lang.PropertyChangeEvent'))(binding.property));
    }).bind(this));
    this._dependents.forEach((function(dc, index, array){
      dc.propertyChange(this.dataItem, new (__lc('java.lang.PropertyChangeEvent'))(dc.property));
    }).bind(this));
  };
  DataContext.prototype.replaceDataItem = function(newDataItem){
    if(this._dataItem != null && __lc("java.lang.INotifyPropertyChanged").prototype.__class.isInstance(this._dataItem))
    {
      var oldPc = this._dataItem;
      this._dependents.forEach((function(dc, index, array){
        __lc("java.lang.INotifyPropertyChanged").prototype.removePropertyChangeListener.call(oldPc, dc.property, dc.propertyChange);
      }).bind(this));
      for (var i = 0, length = this._bindings.length; i < length; i ++) 
      {
        __lc("java.lang.INotifyPropertyChanged").prototype.removePropertyChangeListener.call(oldPc, this._bindings[i].property, this._bindings[i].propertyChange);
      }
    }
    if(newDataItem != null && __lc("java.lang.INotifyPropertyChanged").prototype.__class.isInstance(newDataItem))
    {
      var newPc = newDataItem;
      this._dependents.forEach((function(dc, index, array){
        __lc("java.lang.INotifyPropertyChanged").prototype.addPropertyChangeListener.call(newPc, dc.property, dc.propertyChange);
      }).bind(this));
      for (var i = 0, length = this._bindings.length; i < length; i ++) 
      {
        __lc("java.lang.INotifyPropertyChanged").prototype.addPropertyChangeListener.call(newPc, this._bindings[i].property, this._bindings[i].propertyChange);
      }
    }
  };
  DataContext.prototype.updateSource = function(property, data, callback){
    if(this.dataItem === data)
    {
      return true;
    }
    if(callback != null)
    {
      callback(this._dataItem, property, data);
    }
    else
    {
      if(this._dataItem == null)
      {
        return true;
      }
      this._dataItem[property] = data;
    }
    return true;
  };
  DataContext.prototype.reset = function(target){
    if(this.ancestor != null)
    {
      var ancestor = target.getDataContext(this.ancestor);
      if(ancestor != null)
      {
        ancestor.removeDependent(this);
      }
    }
    else
    {
      var ancestor = target.getDataContext("ROOT");
      if(ancestor != null)
      {
        ancestor.removeDependent(this);
      }
    }
  };
  DataContext.prototype.__class = new (__lc('java.lang.Class'))("java.lang.DataContext", DataContext, Object.prototype.__class, [__lc("java.lang.PropertyChangeListener").prototype.__class, __lc("java.lang.INotifyPropertyChanged").prototype.__class, __lc("java.lang.MarkupExtension").prototype.__class], 1);
  return  DataContext;
})();
(function(){ 
  function Template(parent) {    
  __lc('java.lang.AbstractBindable').call(this, parent);
    var options = new Object();
    options["name"] = "TEMPLATE";
    options["dataItem"] = this;
    this.addDataContext(new (__lc('java.lang.DataContext'))(options));
  }
  Template.prototype.__proto__ = __lc("java.lang.AbstractBindable").prototype;
  __cache["java.lang.Template"] = Template;
  Template.prototype.body = function(){
    this.doBody();
  };
  Template.prototype.doBody = function(){
  };
  Template.prototype.removeBody = function(parent){
    this._childs.forEach((function(node, index, array){
    }).bind(this));
  };
  Template.prototype.before = function(){
  };
  Template.prototype.after = function(node){
    return node;
  };Template.prototype.doBody = function() {};
  Template.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Template", Template, __lc("java.lang.AbstractBindable").prototype.__class, [], 1);
  return  Template;
})();
(function(){ 
  function Router(options) {    
    this._page = null;
    if(options["page"] != undefined)
    {
      this._page = options["page"];
    }
  }
  Router.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Router"] = Router;
  Object.defineProperty(Router.prototype, "page", {
    get : function() {
      return this._page;
    }, 
    set : function(value) {
      this._page = value;
    }
  });
  Router.prototype.inject = function(target, properties){
  };
  Router.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Router", Router, Object.prototype.__class, [__lc("java.lang.MarkupExtension").prototype.__class], 1);
  return  Router;
})();
(function(){ 
  function Iterator(parent) {    
  __lc('java.lang.AbstractBindable').call(this, parent);
    this._items = null;
    this._datas = new Array();
    this._status = null;
    this._begin = 0;
    this._end = 0;
    this._step = 0;
    this._trace = false;
    this.onCollectionChanged = (function(sender, event){
      switch (event.action) {
      case __lc("java.lang.CollectionChangedAction").Add :
          var items = event.newItems;
          if(items == null || items.length <= 0)
          {
            break;
          }
          var start = event.newStartingIndex;
          var __coll = items
          for(var __i = 0; __i < __coll.length; __i++) {
            var obj = __coll[__i];
            var item = createItem.call(this, obj);
            this.processChild(item);
            this._status.count ++;
            this._status.index ++;
            this._status.current = obj;
            this.bodyHandler.call(item);
          }
          break;
      case __lc("java.lang.CollectionChangedAction").Remove :
          items = event.oldItems;
          if(items == null || items.length <= 0)
          {
            break;
          }
          var toBeRemove = new Array();
          for (var i = 0, length = items.length; i < length; i ++) 
          {
            for (var j = 0, size = this._childs.length; j < size; j ++) 
            {
              if(this._childs[j].getDataContext("current").dataItem == items[i])
              {
                toBeRemove.push(this._childs[j]);
              }
            }
          }
          for (var i = 0, lengt = toBeRemove.length; i < length; i ++) 
          {
            this._status.count --;
            this._status._index --;
            toBeRemove[i].reset();
          }
          break;
      }
    }).bind(this);
    this._status = (function(){
      var r = {__enclosing : this, __proto__: __lc('java.lang.Iterator$LoopStatus').prototype};
      __lc('java.lang.Iterator$LoopStatus').apply(r, arguments);
      return r;
    }).call(this);
    var options = new Object();
    options["name"] = "status";
    options["dataItem"] = this._status;
    this.addDataContext(new (__lc('java.lang.DataContext'))(options));
  }
  Iterator.prototype.__proto__ = __lc("java.lang.AbstractBindable").prototype;
  __cache["java.lang.Iterator"] = Iterator;
  Object.defineProperty(Iterator.prototype, "begin", {
    get : function() {
      return this._begin;
    }, 
    set : function(value) {
      this._begin = value;
    }
  });
  Object.defineProperty(Iterator.prototype, "end", {
    get : function() {
      return this._end;
    }, 
    set : function(value) {
      this._end = value;
    }
  });
  Object.defineProperty(Iterator.prototype, "step", {
    get : function() {
      return this._step;
    }, 
    set : function(value) {
      this._step = value;
    }
  });
  Object.defineProperty(Iterator.prototype, "items", {
    get : function() {
      return this._items;
    }, 
    set : function(value) {
      this._items = value;
    }
  });
  function createItem(data){
    var item = (function(){
      var r = {__enclosing : this, __proto__: __lc('java.lang.Iterator$Item').prototype};
      __lc('java.lang.Iterator$Item').apply(r, arguments);
      return r;
    }).call(this, this.parentNode);
    var options = new Object();
    options["name"] = "current";
    options["dataItem"] = data;
    item.addDataContext(new (__lc('java.lang.DataContext'))(options));
    return item;
  }
  Iterator.prototype.doBody = function(){
    if(this.items != null)
    {
      if(__lc("java.util.Collection").prototype.__class.isInstance(this.items))
      {
        var index = 0;
        var size = this.items.size;
        var __coll = this.items, __i = __coll.iterator();
        while(__i.hasNext()) {
          var obj = __i.next();
          this._datas.push(obj);
          var item = createItem.call(this, obj);
          this.processChild(item);
          this._status.index = index;
          if(index ++ < this._begin)
          {
                        continue ;;
          }
          if(! this._status._first)
          {
            this._status._first = true;
          }
          else
          {
            this._status._first = false;
          }
          this._status.count ++;
          this._status.current = obj;
          if(index == this.end || index == size)
          {
            this._status._last = true;
          }
          this.bodyHandler.call(item);
          if(index == this.end)
          {
            break;
          }
        }
        if(__lc("java.util.ObservableCollection", "java.util.ObservableCollection").prototype.__class.isInstance(this.items))
        {
          __lc("java.lang.INotifyCollectionChanged").prototype.addCollectionChangedListener.call(this.items, this.onCollectionChanged);
        }
      }
    }
    else if(this._end > - 1)
    {
      for (var i = this._begin, index = 0; i < this._end; i+=this._step) 
      {
        var item = createItem.call(this, null);
        this.processChild(item);
        this._status.index = index ++;
        if(i == this._begin)
        {
          this._status.first = true;
        }
        else
        {
          this._status.first = false;
        }
        if(i + this._step > this._end)
        {
          this._status.last = true;
        }
        else
        {
          this._status.last = false;
        }
        this._status.count ++;
        this.bodyHandler.call(item);
      }
    }
  };
  Iterator.LoopStatus = (function(){
    function LoopStatus() {      
      this._current = null;
      this._index = 0;
      this._first = false;
      this._last = false;
      this._count = 1;
    }
    LoopStatus.prototype.__proto__ = Object.prototype;
    __cache["java.lang.Iterator$LoopStatus"] = LoopStatus;
    Object.defineProperty(LoopStatus.prototype, "current", {
      get : function() {
        return this._current;
      }, 
      set : function(value) {
        this._current = value;
      }
    });
    Object.defineProperty(LoopStatus.prototype, "index", {
      get : function() {
        return this._index;
      }, 
      set : function(value) {
        this._index = value;
      }
    });
    Object.defineProperty(LoopStatus.prototype, "count", {
      get : function() {
        return this._count;
      }, 
      set : function(value) {
        this._count = value;
      }
    });
    Object.defineProperty(LoopStatus.prototype, "first", {
      get : function() {
        return this._first;
      }, 
      set : function(value) {
        this._first = value;
      }
    });
    Object.defineProperty(LoopStatus.prototype, "last", {
      get : function() {
        return this._last;
      }, 
      set : function(value) {
        this._last = value;
      }
    });
    Object.defineProperty(LoopStatus.prototype, "begin", {
      get : function() {
        return this.__enclosing._begin;
      }
    });
    Object.defineProperty(LoopStatus.prototype, "end", {
      get : function() {
        return this.__enclosing._end;
      }
    });
    Object.defineProperty(LoopStatus.prototype, "step", {
      get : function() {
        return this.__enclosing._step;
      }
    });
    LoopStatus.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Iterator$LoopStatus", LoopStatus, Object.prototype.__class, [], 1);
    return  LoopStatus;
    return LoopStatus;
  })();
  Iterator.Item = (function(){
    function Item(parent) {      
    __lc('java.lang.AbstractBindable').call(this, parent);
    }
    Item.prototype.__proto__ = __lc("java.lang.AbstractBindable").prototype;
    __cache["java.lang.Iterator$Item"] = Item;
    Item.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Iterator$Item", Item, __lc("java.lang.AbstractBindable").prototype.__class, [], 1);
    return  Item;
    return Item;
  })();
  Iterator.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Iterator", Iterator, __lc("java.lang.AbstractBindable").prototype.__class, [], 1);
  return  Iterator;
})();
(function(){ 
  function Choose(parent) {    
  __lc('java.lang.AbstractBindable').call(this, parent);
    this._data = null;
    this._converter = null;
    this._otherwise = true;
  }
  Choose.prototype.__proto__ = __lc("java.lang.AbstractBindable").prototype;
  __cache["java.lang.Choose"] = Choose;
  Object.defineProperty(Choose.prototype, "data", {
    get : function() {
      return this._data;
    }, 
    set : function(value) {
      this._data = value;
    }
  });
  Object.defineProperty(Choose.prototype, "converter", {
    get : function() {
      return this._converter;
    }, 
    set : function(value) {
      this._converter = value;
    }
  });
  Choose.prototype.test = function(value){
    if(this._data == null)
    {
      return false;
    }
    var result = false;
    if(this._converter != null)
    {
      result = this._converter(this._data) == value;
    }
    else
    {
      result = this._data == value;
    }
    if(result)
    {
      this._otherwise = false;
    }
    return result;
  };
  Choose.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Choose", Choose, __lc("java.lang.AbstractBindable").prototype.__class, [], 1);
  return  Choose;
})();
(function(){ 
  function When(parent) {    
  __lc('java.lang.AbstractBindable').call(this, parent);
    this._value = null;
  }
  When.prototype.__proto__ = __lc("java.lang.AbstractBindable").prototype;
  __cache["java.lang.When"] = When;
  Object.defineProperty(When.prototype, "value", {
    get : function() {
      return this._value;
    }, 
    set : function(value) {
      this._value = value;
    }
  });
  When.prototype.doBody = function(){
    if(this._value == null)
    {
      return;
    }
    if(! __lc("java.lang.Choose").prototype.__class.isInstance(this.logicParent))
    {
      return;
    }
    var choose = this.logicParent;
    if(choose.test(this.value))
    {
      this.bodyHandler(parent);
    }
  };
  When.prototype.__class = new (__lc('java.lang.Class'))("java.lang.When", When, __lc("java.lang.AbstractBindable").prototype.__class, [], 1);
  return  When;
})();
(function(){ 
  function Otherwise(parent) {    
  __lc('java.lang.AbstractBindable').call(this, parent);
  }
  Otherwise.prototype.__proto__ = __lc("java.lang.AbstractBindable").prototype;
  __cache["java.lang.Otherwise"] = Otherwise;
  Otherwise.prototype.doBody = function(){
    if(! __lc("java.lang.Choose").prototype.__class.isInstance(this.logicParent))
    {
      return;
    }
    var choose = this.logicParent;
    if(choose["_otherwise"])
    {
      this.bodyHandler(parent);
    }
  };
  Otherwise.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Otherwise", Otherwise, __lc("java.lang.AbstractBindable").prototype.__class, [], 1);
  return  Otherwise;
})();
(function(){ 
  function If(parent) {    
  __lc('java.lang.AbstractBindable').call(this, parent);
    this._data = null;
    this._test = null;
  }
  If.prototype.__proto__ = __lc("java.lang.AbstractBindable").prototype;
  __cache["java.lang.If"] = If;
  Object.defineProperty(If.prototype, "data", {
    get : function() {
      return this._data;
    }, 
    set : function(value) {
      this._data = value;
    }
  });
  Object.defineProperty(If.prototype, "test", {
    get : function() {
      return this._test;
    }, 
    set : function(value) {
      this._test = value;
    }
  });
  If.prototype.doBody = function(){
    if(this._test == null)
    {
      if(this._data)
      {
        this.bodyHandler(parent);
      }
    }
    else
    {
      if(this._test())
      {
        this.bodyHandler(parent);
      }
    }
  };
  If.prototype.__class = new (__lc('java.lang.Class'))("java.lang.If", If, __lc("java.lang.AbstractBindable").prototype.__class, [], 1);
  return  If;
})();
(function(){ 
  function ParameterBinding() {    
    this._context = null;
    this._property = null;
  }
  ParameterBinding.prototype.__proto__ = Object.prototype;
  __cache["java.lang.ParameterBinding"] = ParameterBinding;
  Object.defineProperty(ParameterBinding.prototype, "context", {
    get : function() {
      return this._context;
    }, 
    set : function(value) {
      this._context = value;
    }
  });
  Object.defineProperty(ParameterBinding.prototype, "property", {
    get : function() {
      return this._property;
    }, 
    set : function(value) {
      this._property = value;
    }
  });
  ParameterBinding.prototype.inject = function(target, properties){
  };
  ParameterBinding.prototype.__class = new (__lc('java.lang.Class'))("java.lang.ParameterBinding", ParameterBinding, Object.prototype.__class, [__lc("java.lang.MarkupExtension").prototype.__class], 1);
  return  ParameterBinding;
})();
(function(){ 
  function Parameters(){};
  __cache["java.lang.Parameters"] = Parameters;
  Parameters.prototype.URL = function(){
    return "";
  };
  Parameters.prototype.inject = function(a, property, bindings){
  };
  Parameters.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Parameters", Parameters, Object.prototype.__class, [], 2);
  return  Parameters;
})();
(function(){ 
  function ProxyPrrameter(bindings) {    
    this._page = null;
    this._target = null;
    this._parameters = new Map();
    if(bindings != null)
    {
      bindings.forEach((function(value, index, array){
      }).bind(this));
    }
  }
  ProxyPrrameter.prototype.__proto__ = Object.prototype;
  __cache["java.lang.ProxyPrrameter"] = ProxyPrrameter;
  ProxyPrrameter.prototype.URL = function(){
    var r = "";
    var and = false;
    this._parameters.forEach((function(value, key, _this){
      if(and)
      {
        key+='&';
      }
      key = key + '=' + encodeURIComponent(value);
      and = true;
    }).bind(this));
    return r;
  };
  ProxyPrrameter.prototype.inject = function(a, prop, bindings){
    this._target = a;
    if(bindings != null)
    {
      bindings.forEach((function(binding, index, array){
        update.call(this, binding);
      }).bind(this));
    }
  };
  function update(binding){
    var context = Node.prototype.getDataContext.call(this._target, binding.context);
    this._parameters.set(binding.context, context[binding.property]);
  }
  ProxyPrrameter.prototype.__class = new (__lc('java.lang.Class'))("java.lang.ProxyPrrameter", ProxyPrrameter, Object.prototype.__class, [__lc("java.lang.Parameters").prototype.__class], 1);
  return  ProxyPrrameter;
})();
(function(){ 
  function Page(){};
  __cache["java.lang.Page"] = Page;
  Page.prototype.encodeRequest = function(parameters){
    var r = "";
    var and = false;
    parameters.forEach((function(value, key, _this){
      if(and)
      {
        key+='&';
      }
      key = key + '=' + encodeURIComponent(value);
      and = true;
    }).bind(this));
    return r;
  };
  Page.prototype.getRequestParameter = function(search){
    var result = new Map();
    if(String.isNullOrEmpty(location.search))
    {
      return null;
    }
    var parts = search.split("&");
    parts.forEach((function(value, index, _this){
      var assign = value.split("=");
      result.set(assign[0], assign[1]);
    }).bind(this));
    return result;
  };
  Page.prototype.toURL = function(){
    return this.getClass().toURL();
  };
  Page.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Page", Page, Object.prototype.__class, [__lc("java.lang.Parameters").prototype.__class], 2);
  return  Page;
})();
