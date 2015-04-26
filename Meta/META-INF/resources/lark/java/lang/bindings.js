(function(){ 
  function PropertyChangeListener(){};
  __cache["java.lang.PropertyChangeListener"] = PropertyChangeListener;
  Object.defineProperty(PropertyChangeListener.prototype, "propertyChange", {

  });PropertyChangeListener.prototype.doApplyTemplate = function(parent, data, index) {};
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
  INotifyPropertyChanged.prototype.addPropertyChangeListener1 = function(handler){
    var _listeners = this["__listeners"];
    if(_listeners == null)
    {
      this["__listeners"] = _listeners = new Array();
    }
    _listeners.push(handler);
  };
  INotifyPropertyChanged.prototype.removePropertyChangeListener1 = function(handler){
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
  };INotifyPropertyChanged.prototype.doApplyTemplate = function(parent, data, index) {};
  INotifyPropertyChanged.prototype.__class = new (__lc('java.lang.Class'))("java.lang.INotifyPropertyChanged", INotifyPropertyChanged, Object.prototype.__class, [], 2);
  return  INotifyPropertyChanged;
})();
(function(){ 
  function INotifyCollectionChanged(){};
  __cache["java.lang.INotifyCollectionChanged"] = INotifyCollectionChanged;
  INotifyCollectionChanged.prototype.onCollectionChanged = function(e){
    var listeners = this["__colListeners"];
    if(listeners == null) return;
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
    if(listeners == null) return;
    listeners.forEach((function(listener1, index, array){
      if(listener1 === listener)
      {
        array.splice(index, 1);
      }
    }).bind(this));
  };INotifyCollectionChanged.prototype.doApplyTemplate = function(parent, data, index) {};
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
  CollectionChangedAction.Reset = new (__lc('java.lang.CollectionChangedAction'))("Reset", 4);CollectionChangedAction.prototype.doApplyTemplate = function(parent, data, index) {};
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
    this._newItems = (newItems == null) ? null : newItems;
    this._newStartingIndex = newStartingIndex;
  }
  function initializeRemove(action, oldItems, oldStartingIndex){
    this._action = action;
    this._oldItems = (oldItems == null) ? null : oldItems;
    this._oldStartingIndex = oldStartingIndex;
  }
  function initializeMoveOrReplace(action, newItems, oldItems, startingIndex, oldStartingIndex){
    initializeAdd.call(this, action, newItems, startingIndex);
    initializeRemove.call(this, action, oldItems, oldStartingIndex);
  }CollectionChangedEvent.prototype.doApplyTemplate = function(parent, data, index) {};
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
  });PropertyChangeEvent.prototype.doApplyTemplate = function(parent, data, index) {};
  PropertyChangeEvent.prototype.__class = new (__lc('java.lang.Class'))("java.lang.PropertyChangeEvent", PropertyChangeEvent, Object.prototype.__class, [], 1);
  return  PropertyChangeEvent;
})();
(function(){ 
  function MarkupExtension(){};
  __cache["java.lang.MarkupExtension"] = MarkupExtension;MarkupExtension.prototype.doApplyTemplate = function(parent, data, index) {};
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
  UpdateSourceTrigger.Explicit = new (__lc('java.lang.UpdateSourceTrigger'))("Explicit", 2);UpdateSourceTrigger.prototype.doApplyTemplate = function(parent, data, index) {};
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
  BindingMode.OneTime = new (__lc('java.lang.BindingMode'))("OneTime", 2);BindingMode.prototype.doApplyTemplate = function(parent, data, index) {};
  BindingMode.prototype.__class = new (__lc('java.lang.Class'))("java.lang.BindingMode", BindingMode, __lc("java.lang.Enum").prototype.__class, [], 3);
  return  BindingMode;
})();
(function(){ 
  function Binding(options) {    
    this._mode = null;
    this._trigger = null;
    this._property = null;
    this._target = null;
    this._trace = false;
    this._targetProperties = null;
    this._updateTargetCallback = null;
    this._updateSourceCallback = null;
    this._converterTo = null;
    this._converterFrom = null;
    this._propertyChange = (function(source, evt){
      var data = source;
      if(! String.isNullOrEmpty(this._property))
      {
        data = source[evt.property];
      }
      this.setTargetProperty(this._targetProperties, data);
    }).bind(this);
    this.updateSource = (function(event){
      var value = this.getProperty(event.target, this._targetProperties);
      if(this._converterFrom != null)
      {
        value = this._converterFrom(value);
      }
      return this._target.dataContext.updateSource(this._property, value, this._updateSourceCallback);
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
    if(options["converterTo"] != undefined)
    {
      this._converterTo = (options["converterTo"]);
    }
    if(options["converterFrom"] != undefined)
    {
      this._converterFrom = (options["converterFrom"]);
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
  Object.defineProperty(Binding.prototype, "converterTo", {
    get : function() {
      return this._converterTo;
    }, 
    set : function(value) {
      this._converterTo = value;
    }
  });
  Object.defineProperty(Binding.prototype, "converterFrom", {
    get : function() {
      return this._converterFrom;
    }, 
    set : function(value) {
      this._converterFrom = value;
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
        if(HTMLElement.prototype.__class.isInstance(target))
        {
          this.attachTarget(this._target);
        }
    case __lc("java.lang.BindingMode").OneWay :
        this._target.dataContext.addBinding(this);
    case __lc("java.lang.BindingMode").OneTime :
        this.updateTarget(this._target, targetProperties, this._target.dataContext.dataItem);
    }
  };
  Binding.prototype.unInject = function(){
    switch (this._mode) {
    case __lc("java.lang.BindingMode").TwoWay :
        if(HTMLElement.prototype.__class.isInstance(this._target))
        {
          this.detachTarget(this._target);
        }
    case __lc("java.lang.BindingMode").OneWay :
        this._target.dataContext.removeBinding(this);
    case __lc("java.lang.BindingMode").OneTime :
    }
  };
  Binding.prototype.updateTarget = function(target, properties, data){
    if(! String.isNullOrEmpty(this.property))
    {
      data = data == null ? null : data[this.property];
    }
    this.setTargetProperty(this._targetProperties, data);
  };
  Binding.prototype.setTargetProperty = function(properties, data){
    var tag = this._target;
    var length = properties.length;
    for (var i = 0; i < length - 1; i ++) 
    {
      if(tag == null) return;
      tag = tag[properties[i]];
    }
    if(this._converterTo != null)
    {
      data = this._converterTo(data);
    }
    var oldValue = tag[properties[length - 1]];
    if(data == oldValue)
    {
      return;
    }
    if(this._updateTargetCallback != null)
    {
      this._updateTargetCallback(this._target, properties, data);
    }
    else
    {
      tag[properties[length - 1]] = data;
    }
  };
  Binding.prototype.getProperty = function(target, properties){
    var result = target;
    var length = properties.length;
    for (var index = 0; index < length - 1; index ++) 
    {
      if(result == null) return null;
      result = result[properties[index]];
    }
    return result[properties[length - 1]];
  };
  Binding.prototype.attachTarget = function(target){
    switch (this._trigger) {
    case __lc("java.lang.UpdateSourceTrigger").LostFocus :
        target.addEventListener("blur", this.updateSource, false);
        break;
    case __lc("java.lang.UpdateSourceTrigger").PropertyChanged :
        target.addEventListener("input", this.updateSource, false);
        target.addEventListener("change", this.updateSource, false);
        break;
    default :
    }
  };
  Binding.prototype.detachTarget = function(target){
    switch (this._trigger) {
    case __lc("java.lang.UpdateSourceTrigger").LostFocus :
        target.removeEventListener("blur", this.updateSource, false);
        break;
    case __lc("java.lang.UpdateSourceTrigger").PropertyChanged :
        target.removeEventListener("input", this.updateSource, false);
        target.removeEventListener("change", this.updateSource, false);
        break;
    default :
    }
  };Binding.prototype.doApplyTemplate = function(parent, data, index) {};
  Binding.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Binding", Binding, Object.prototype.__class, [__lc("java.lang.MarkupExtension").prototype.__class, __lc("java.lang.PropertyChangeListener").prototype.__class], 1);
  return  Binding;
})();
(function(){ 
  function DataContextMode() {    
  __lc('java.lang.Enum').call(this, arguments[arguments.length-2], arguments[arguments.length-1]);
  }
  DataContextMode.prototype.__proto__ = __lc("java.lang.Enum").prototype;
  __cache["java.lang.DataContextMode"] = DataContextMode;
  DataContextMode.valueOf = function(name) { return DataContextMode[name]; };
  DataContextMode.values = function() { return [DataContextMode.Root, DataContextMode.Template, DataContextMode.Standalone, DataContextMode.Ancestor]; };
  DataContextMode.Root = new (__lc('java.lang.DataContextMode'))("Root", 0);
  DataContextMode.Template = new (__lc('java.lang.DataContextMode'))("Template", 1);
  DataContextMode.Standalone = new (__lc('java.lang.DataContextMode'))("Standalone", 2);
  DataContextMode.Ancestor = new (__lc('java.lang.DataContextMode'))("Ancestor", 3);DataContextMode.prototype.doApplyTemplate = function(parent, data, index) {};
  DataContextMode.prototype.__class = new (__lc('java.lang.Class'))("java.lang.DataContextMode", DataContextMode, __lc("java.lang.Enum").prototype.__class, [], 3);
  return  DataContextMode;
})();
(function(){ 
  function DataContext(){
    var args = Array.prototype.slice.call(arguments);
    return DataContext.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  DataContext.__f = {
    "0" : function(){
		this._mode = __lc("java.lang.DataContextMode").Root;
		this._dataItem = __this; 
		this._bindings = [];
		this._dependents = [];
		this._templates = [];
	}, 
    "1" : function(property) {    
    this._mode = null;
    this._property = null;
    this._bindings = [];
    this._dependents = [];
    this._templates = [];
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
    this._mode = __lc("java.lang.DataContextMode").Ancestor;
    this._property = property;
  }, 
    "2" : function(property, dataItem, mode) {    
    this._mode = null;
    this._property = null;
    this._bindings = [];
    this._dependents = [];
    this._templates = [];
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
    this._mode = mode;
    this._property = property;
    this._dataItem = dataItem;
  }
  };
  DataContext.prototype.__proto__ = Object.prototype;
  __cache["java.lang.DataContext"] = DataContext;
  Object.defineProperty(DataContext.prototype, "property", {
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
      if(value === this._dataItem) return;
      this.replaceDataItem(value);
      this._dataItem = value;
      this.dirty(value);
    }
  });
  Object.defineProperty(DataContext.prototype, "mode", {
    get : function() {
      return this._mode;
    }, 
    set : function(value) {
      if(value === this._mode) return;
      this._mode = value;
    }
  });
  Object.defineProperty(DataContext.prototype, "propertyChange", {
    get : function() {
      return this._propertyChange;
    }
  });
  DataContext.prototype.inject = function(target, targetProperty, targetProperty1){
    target.dataContext = this;
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
          __lc("java.lang.INotifyPropertyChanged").prototype.addPropertyChangeListener1.call(this._dataItem, binding.propertyChange);
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
        __lc("java.lang.INotifyPropertyChanged").prototype.removePropertyChangeListener1.call(this, binding.propertyChange);
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
  DataContext.prototype.addTemplateSetting = function(ts){
    this._templates.push(ts);
    if(String.isNullOrEmpty(ts.property))
    {
      __lc("java.lang.INotifyPropertyChanged").prototype.addPropertyChangeListener.call(this, "dataItem", ts.propertyChange);
      ts.dataItem = this._dataItem;
    }
    else
    {
      if(__lc("java.lang.INotifyPropertyChanged").prototype.__class.isInstance(this._dataItem))
      {
        __lc("java.lang.INotifyPropertyChanged").prototype.addPropertyChangeListener.call(this._dataItem, ts.property, ts.propertyChange);
      }
      ts.dataItem = this._dataItem != null ? this._dataItem[ts.property] : null;
    }
  };
  DataContext.prototype.removeTemplateSetting = function(ts){
    this._templates.forEach((function(ts1, index, array){
      if(ts == ts1)
      {
        this._templates.splice(index, 1);
        return;
      }
    }).bind(this));
    if(String.isNullOrEmpty(ts.property))
    {
      __lc("java.lang.INotifyPropertyChanged").prototype.removePropertyChangeListener.call(this, "dataItem", ts.propertyChange);
    }
    else
    {
      if(__lc("java.lang.INotifyPropertyChanged").prototype.__class.isInstance(this._dataItem))
      {
        __lc("java.lang.INotifyPropertyChanged").prototype.removePropertyChangeListener.call(this._dataItem, ts.property, ts.propertyChange);
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
      if(dc === dependent)
      {
        this._dependents.splice(index, 1);
        return;
      }
    }).bind(this));
  };
  DataContext.prototype.dirty = function(data){
    this._bindings.forEach((function(binding, index, array){
      binding.propertyChange(this.dataItem, new (__lc('java.lang.PropertyChangeEvent'))(binding.property));
    }).bind(this));
    this._dependents.forEach((function(dc, index, array){
      dc.propertyChange(this.dataItem, new (__lc('java.lang.PropertyChangeEvent'))(dc.property));
    }).bind(this));
    this._templates.forEach((function(ts, index, array){
      ts.propertyChange(this.dataItem, new (__lc('java.lang.PropertyChangeEvent'))(ts.property));
    }).bind(this));
  };
  DataContext.prototype.replaceDataItem = function(newDataItem){
    if(this._dataItem != null && __lc("java.lang.INotifyPropertyChanged").prototype.__class.isInstance(this._dataItem))
    {
      var oldPc = this._dataItem;
      for (var i = 0, length = this._dependents.length; i < length; i ++) 
      {
        __lc("java.lang.INotifyPropertyChanged").prototype.removePropertyChangeListener.call(oldPc, this._dependents[i].property, this._dependents[i].propertyChange);
      }
      for (var i = 0, length = this._bindings.length; i < length; i ++) 
      {
        __lc("java.lang.INotifyPropertyChanged").prototype.removePropertyChangeListener.call(oldPc, this._bindings[i].property, this._bindings[i].propertyChange);
      }
      for (var i = 0, length = this._templates.length; i < length; i ++) 
      {
        __lc("java.lang.INotifyPropertyChanged").prototype.removePropertyChangeListener.call(oldPc, this._templates[i].property, this._templates[i].propertyChange);
      }
    }
    if(newDataItem != null && __lc("java.lang.INotifyPropertyChanged").prototype.__class.isInstance(newDataItem))
    {
      var newPc = newDataItem;
      for (var i = 0, length = this._dependents.length; i < length; i ++) 
      {
        __lc("java.lang.INotifyPropertyChanged").prototype.addPropertyChangeListener.call(newPc, this._dependents[i].property, this._dependents[i].propertyChange);
      }
      for (var i = 0, length = this._bindings.length; i < length; i ++) 
      {
        __lc("java.lang.INotifyPropertyChanged").prototype.addPropertyChangeListener.call(newPc, this._bindings[i].property, this._bindings[i].propertyChange);
      }
      for (var i = 0, length = this._templates.length; i < length; i ++) 
      {
        __lc("java.lang.INotifyPropertyChanged").prototype.addPropertyChangeListener.call(newPc, this._templates[i].property, this._templates[i].propertyChange);
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
  DataContext.prototype.reset = function(){
    this._templates.forEach((function(ts, index, array){
      if(String.isNullOrEmpty(ts.property))
      {
        __lc("java.lang.INotifyPropertyChanged").prototype.removePropertyChangeListener.call(this, "dataItem", ts.propertyChange);
      }
      else
      {
        if(__lc("java.lang.INotifyPropertyChanged").prototype.__class.isInstance(this._dataItem))
        {
          __lc("java.lang.INotifyPropertyChanged").prototype.removePropertyChangeListener.call(this._dataItem, ts.property, ts.propertyChange);
        }
      }
    }).bind(this));
    this._templates.length = 0;
    this._bindings.forEach((function(binding, index, array){
      if(String.isNullOrEmpty(binding.property))
      {
        __lc("java.lang.INotifyPropertyChanged").prototype.removePropertyChangeListener.call(this, "dataItem", binding.propertyChange);
      }
      else
      {
        if(__lc("java.lang.INotifyPropertyChanged").prototype.__class.isInstance(this._dataItem))
        {
          __lc("java.lang.INotifyPropertyChanged").prototype.removePropertyChangeListener.call(this._dataItem, binding.property, binding.propertyChange);
        }
      }
    }).bind(this));
    this._bindings.length = 0;
    this._dependents.forEach((function(dataContext, index, array){
      if(String.isNullOrEmpty(dataContext.property))
      {
        __lc("java.lang.INotifyPropertyChanged").prototype.removePropertyChangeListener.call(this, "dataItem", dataContext.propertyChange);
      }
      else
      {
        if(__lc("java.lang.INotifyPropertyChanged").prototype.__class.isInstance(this._dataItem))
        {
          __lc("java.lang.INotifyPropertyChanged").prototype.removePropertyChangeListener.call(this._dataItem, dataContext.property, dataContext.propertyChange);
        }
      }
    }).bind(this));
    this._dependents.length = 0;
  };DataContext.prototype.doApplyTemplate = function(parent, data, index) {};
  DataContext.prototype.__class = new (__lc('java.lang.Class'))("java.lang.DataContext", DataContext, Object.prototype.__class, [__lc("java.lang.PropertyChangeListener").prototype.__class, __lc("java.lang.INotifyPropertyChanged").prototype.__class], 1);
  return  DataContext;
})();
(function(){ 
  function Template() {    
    this._rootNodes = [];
    this._data = null;
    this._dataContextCallback = null;
  }
  Template.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Template"] = Template;
  Object.defineProperty(Template.prototype, "dataContextCallback", {
    get : function() {
      return this._dataContextCallback;
    }, 
    set : function(value) {
      this._dataContextCallback = value;
    }
  });
  Object.defineProperty(Template.prototype, "rootNodes", {
    get : function() {
      return this._rootNodes;
    }
  });
  Object.defineProperty(Template.prototype, "data", {
    get : function() {
      return this._data;
    }, 
    set : function(value) {
      this._data = value;
    }
  });
  Template.prototype.applyTemplate = function(parent, data, index){
    this.doApplyTemplate(parent, data, index);
  };
  Template.prototype.doApplyTemplate = function(parent, data, index){
    throw new Error(0, "illegal call!");
  };
  Template.prototype.undoTemplate = function(parent){
    this._rootNodes.forEach((function(node, index, array){
      parent.removeChild(node);
    }).bind(this));
  };
  Template.prototype.setupDataContext = function(node, data, index){
    if(this._dataContextCallback != null)
    {
      return this._dataContextCallback(node, data, index);
    }
    return node;
  };
  Template.prototype.before = function(data, index){
  };
  Template.prototype.after = function(node, data, index){
    return node;
  };Template.prototype.doApplyTemplate = function(parent, data, index) {};
  Template.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Template", Template, Object.prototype.__class, [], 1);
  return  Template;
})();
(function(){ 
  function TemplateSelector() {    
  }
  TemplateSelector.prototype.__proto__ = Object.prototype;
  __cache["java.lang.TemplateSelector"] = TemplateSelector;
  TemplateSelector.prototype.select = function(data){
    return this.doSelect(data);
  };
  TemplateSelector.prototype.doSelect = function(data){
  };TemplateSelector.prototype.doApplyTemplate = function(parent, data, index) {};
  TemplateSelector.prototype.__class = new (__lc('java.lang.Class'))("java.lang.TemplateSelector", TemplateSelector, Object.prototype.__class, [], 1);
  return  TemplateSelector;
})();
(function(){ 
  function BaseTemplateSetting(option) {    
    this._template = null;
    this._selector = null;
    this._selectorInstance = null;
    this._property = null;
    this._container = null;
    this._invariant = false;
    this._dataItem = null;
    this._dataContextCalback = null;
    this._propertyChange = (function(source, event){
      var data = source[event.property];
      if(data != null)
      {
        if(String.isNullOrEmpty(this.property))
        {
          this._dataItem = data;
        }
        else
        {
          this.dataItem = data[this.property];
        }
      }
      else
      {
        this._dataItem = null;
      }
    }).bind(this);
    if(option["template"] != null)
    {
      this._template = option["template"];
    }
    if(option["selector"] != null)
    {
      this.selector = option["selector"];
      this._selectorInstance = this._selector.newInstance();
    }
    if(option["property"] != null)
    {
      this._property = option["property"];
    }
    if(option["invariant"] != null)
    {
      this._invariant = option["invariant"];
    }
    if(option["property"] != null)
    {
      this._property = option["property"];
    }
    if(option["dataContextCalback"] != null)
    {
      this._dataContextCalback = option["dataContextCalback"];
    }
  }
  BaseTemplateSetting.prototype.__proto__ = Object.prototype;
  __cache["java.lang.BaseTemplateSetting"] = BaseTemplateSetting;
  Object.defineProperty(BaseTemplateSetting.prototype, "template", {
    get : function() {
      return this._template;
    }, 
    set : function(value) {
      this._template = value;
    }
  });
  Object.defineProperty(BaseTemplateSetting.prototype, "selector", {
    get : function() {
      return this._selector;
    }, 
    set : function(value) {
      this._selector = value;
    }
  });
  Object.defineProperty(BaseTemplateSetting.prototype, "property", {
    get : function() {
      return this._property;
    }, 
    set : function(value) {
      this._property = value;
    }
  });
  Object.defineProperty(BaseTemplateSetting.prototype, "invariant", {
    get : function() {
      return this._invariant;
    }, 
    set : function(value) {
      this._invariant = value;
    }
  });
  Object.defineProperty(BaseTemplateSetting.prototype, "container", {
    get : function() {
      return this._container;
    }
  });
  Object.defineProperty(BaseTemplateSetting.prototype, "dataItem", {
    get : function() {
      return this._dataItem;
    }, 
    set : function(value) {
      if(this._dataItem === value)
      {
        return;
      }
      this._dataItem = value;
      this.dirty();
    }
  });
  Object.defineProperty(BaseTemplateSetting.prototype, "dataContextCalback", {
    get : function() {
      return this._dataContextCalback;
    }, 
    set : function(value) {
      this._dataContextCalback = value;
    }
  });
  Object.defineProperty(BaseTemplateSetting.prototype, "propertyChange", {
    get : function() {
      return this._propertyChange;
    }
  });
  BaseTemplateSetting.prototype.dirty = function(){
  };
  BaseTemplateSetting.prototype.applyTemplate = function(){
    this.internalApplyTemplate(this._dataItem, - 1);
  };
  BaseTemplateSetting.prototype.setupDataContext = function(current, data, index){
    return current;
  };
  BaseTemplateSetting.prototype.internalApplyTemplate = function(data, index){
  };
  BaseTemplateSetting.prototype.undoTemplate = function(){
  };
  BaseTemplateSetting.prototype.inject = function(node, properties){
    this._container = node;
    node[properties[0]] = this;
  };
  BaseTemplateSetting.prototype.unInject = function(){
  };BaseTemplateSetting.prototype.doApplyTemplate = function(parent, data, index) {};
  BaseTemplateSetting.prototype.__class = new (__lc('java.lang.Class'))("java.lang.BaseTemplateSetting", BaseTemplateSetting, Object.prototype.__class, [__lc("java.lang.MarkupExtension").prototype.__class, __lc("java.lang.PropertyChangeListener").prototype.__class], 1);
  return  BaseTemplateSetting;
})();
(function(){ 
  function TemplateSetting(option) {    
  __lc('java.lang.BaseTemplateSetting').call(this, option);
    this._templateInstance = null;
    this._setupDataContext = (function(node, data, index){
      if(String.isNullOrEmpty(this._property))
      {
        node.dataContext = new (__lc('java.lang.DataContext'))(this._property, data, __lc("java.lang.DataContextMode").Ancestor, "2");
      }
      return node;
    }).bind(this);
    if(this._dataContextCalback == null)
    {
      this._dataContextCalback = this._setupDataContext;
    }
  }
  TemplateSetting.prototype.__proto__ = __lc("java.lang.BaseTemplateSetting").prototype;
  __cache["java.lang.TemplateSetting"] = TemplateSetting;
  TemplateSetting.prototype.applyTemplate = function(){
    this.internalApplyTemplate(this._dataItem, - 1);
  };
  TemplateSetting.prototype.internalApplyTemplate = function(data, index){
    if(this._templateInstance == null)
    {
      this._templateInstance = createTemplate.call(this, data);
    }
    else
    {
      if(this._selectorInstance != null)
      {
        var newTemp = createTemplate.call(this, data);
        if(newTemp.getClass().id == this._templateInstance.getClass().id)
        {
          return;
        }
        this.undoTemplate();
        this._templateInstance = newTemp;
      }
      else
      {
        return;
      }
    }
    if(this._templateInstance != null) this._templateInstance.applyTemplate(this.container, data, index)
  };
  TemplateSetting.prototype.undoTemplate = function(){
    if(this._templateInstance != null) this._templateInstance.undoTemplate(this.container)
  };
  function createTemplate(data){
    var result = null;
    if(this._selectorInstance != null)
    {
      result = this._selectorInstance.select(data);
    }
    else
    {
      result = this.template.newInstance();
    }
    if(result != null)
    {
      result._dataContextCallback = this._setupDataContext;
    }
    return result;
  }
  TemplateSetting.prototype.dirty = function(){
  };TemplateSetting.prototype.doApplyTemplate = function(parent, data, index) {};
  TemplateSetting.prototype.__class = new (__lc('java.lang.Class'))("java.lang.TemplateSetting", TemplateSetting, __lc("java.lang.BaseTemplateSetting").prototype.__class, [__lc("java.lang.MarkupExtension").prototype.__class, __lc("java.lang.PropertyChangeListener").prototype.__class], 1);
  return  TemplateSetting;
})();
(function(){ 
  function CollectionTemplateSetting(option) {    
  __lc('java.lang.TemplateSetting').call(this, option);
    this._applyTemplateCallback = null;
    this.itemsMap = new Map();
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
            var item = __coll[__i];
            var template = this.createTemplate(item);
            template.applyTemplate(this._container, item, start ++);
            this.itemsMap.set(item, template);
          }
          break;
      case __lc("java.lang.CollectionChangedAction").Reset :
          this.undoTemplate();
          break;
      case __lc("java.lang.CollectionChangedAction").Remove :
          var toBeRemoved = [];
          var __coll0 = event.oldItems
          for(var __i0 = 0; __i0 < __coll0.length; __i0++) {
            var item = __coll0[__i0];
            var temp = this.itemsMap.get(item);
            temp.undoTemplate(this._container);
            this.itemsMap.delete(item);
          }
          break;
      case __lc("java.lang.CollectionChangedAction").Replace :
          var newItem = event.newItems[0];
          var old = event.oldItems[0];
          var oldTemp = this.itemsMap.get(old);
          var newTemp = this.createTemplate(newItem);
          if(newTemp == null || newTemp.getClass().id != oldTemp.getClass().id)
          {
            oldTemp.undoTemplate(this._container);
            newTemp.applyTemplate(this._container, newItem, event.newStartingIndex);
          }
      case __lc("java.lang.CollectionChangedAction").Move :
      }
    }).bind(this);
    this._setupDataContext = (function(n, d, index){
      n.dataContext = new (__lc('java.lang.DataContext'))(null, d, __lc("java.lang.DataContextMode").Standalone, "2");
      return n;
    }).bind(this);
    if(this._dataContextCalback == null)
    {
      this._dataContextCalback = this._setupDataContext;
    }
    if(option["applyTemplateCallback"] != null)
    {
      this._applyTemplateCallback = option["applyTemplateCallback"];
    }
  }
  CollectionTemplateSetting.prototype.__proto__ = __lc("java.lang.TemplateSetting").prototype;
  __cache["java.lang.CollectionTemplateSetting"] = CollectionTemplateSetting;
  Object.defineProperty(CollectionTemplateSetting.prototype, "applyTemplateCallback", {
    get : function() {
      return this._applyTemplateCallback;
    }, 
    set : function(value) {
      this._applyTemplateCallback = value;
    }
  });
  CollectionTemplateSetting.prototype.dirty = function(){
    this.undoTemplate();
    if(this._dataItem != null)
    {
      if(__lc("java.lang.INotifyCollectionChanged").prototype.__class.isInstance(this._dataItem))
      {
        __lc("java.lang.INotifyCollectionChanged").prototype.removeCollectionChangedListener.call(this._dataItem, this.onCollectionChanged);
      }
    }
    if(this._dataItem != null)
    {
      if(__lc("java.lang.INotifyCollectionChanged").prototype.__class.isInstance(this._dataItem))
      {
        __lc("java.lang.INotifyCollectionChanged").prototype.addCollectionChangedListener.call(this._dataItem, this.onCollectionChanged);
      }
      this.applyTemplate();
    }
  };
  CollectionTemplateSetting.prototype.applyTemplate = function(){
    if(this._applyTemplateCallback != null)
    {
      this._applyTemplateCallback(this._dataItem);
    }
    else
    {
      if(__lc("java.util.Collection").prototype.__class.isInstance(this._dataItem))
      {
        var index = 0;
        var __coll = this._dataItem, __i = __coll.iterator();
        while(__i.hasNext()) {
          var item = __i.next();
          this.internalApplyTemplate(item, index ++);
        }
      }
    }
  };
  CollectionTemplateSetting.prototype.internalApplyTemplate = function(data, index){
    var template = this.createTemplate(data);
    if(template == null)
    {
      return;
    }
    template.applyTemplate(this.container, data, index);
    this.itemsMap.set(data, template);
  };
  CollectionTemplateSetting.prototype.undoTemplate = function(){
    this.itemsMap.forEach((function(temp, data, map){
      temp.undoTemplate(this.container);
    }).bind(this));
    this.itemsMap.clear();
  };
  CollectionTemplateSetting.prototype.createTemplate = function(data){
    var result = null;
    if(this._selectorInstance != null)
    {
      result = this._selectorInstance.select(data);
    }
    else
    {
      if(this.template != null) result = this.template.newInstance()
    }
    if(result != null)
    {
      result._dataContextCallback = this._setupDataContext;
    }
    return result;
  };CollectionTemplateSetting.prototype.doApplyTemplate = function(parent, data, index) {};
  CollectionTemplateSetting.prototype.__class = new (__lc('java.lang.Class'))("java.lang.CollectionTemplateSetting", CollectionTemplateSetting, __lc("java.lang.TemplateSetting").prototype.__class, [__lc("java.lang.MarkupExtension").prototype.__class, __lc("java.lang.PropertyChangeListener").prototype.__class], 1);
  return  CollectionTemplateSetting;
})();
