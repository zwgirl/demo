(function(){ 
  function MarkupExtension(){};
  MarkupExtension.prototype.__proto__ = Object.prototype;
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
    this._mode = null;
    this._updateSourceTrigger = null;
    this._property = null;
    this._callback = null;
    if(options["property"] != undefined)
    {
      this._property = options["property"];
    }
    if(options["mode"] != undefined)
    {
      this._mode = options["mode"];
    }
    if(options["updateSourceTrigger"] != undefined)
    {
      this._updateSourceTrigger = options["updateSourceTrigger"];
    }
    if(options["callback"] != undefined)
    {
      this._callback = options["callback"];
    }
  }
  Binding.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Binding"] = Binding;
  Object.defineProperty(Binding.prototype, "callback", {
    get : function() {
      return this._callback;
    }, 
    set : function(value) {
      this._callback = value;
    }
  });
  Object.defineProperty(Binding.prototype, "property", {
    get : function() {
      return this._property;
    }, 
    set : function(value) {
      this._property = value;
    }
  });
  Object.defineProperty(Binding.prototype, "isDirectBinding", {
    get : function() {
      return String.isNullOrEmpty(this.property);
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
  Object.defineProperty(Binding.prototype, "updateSourceTrigger", {
    get : function() {
      return this._updateSourceTrigger;
    }, 
    set : function(value) {
      this._updateSourceTrigger = value;
    }
  });
  Binding.prototype.provideValue = function(target, targetProperty, targetProperty1){
		  var bindingExp = new (__lc('java.lang.BindingExpression'))(target, targetProperty, targetProperty1, this);
		  return bindingExp.value;
	  };
  Binding.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Binding", Binding, Object.prototype.__class, [__lc("java.lang.MarkupExtension").prototype.__class], 1);
  return  Binding;
})();
(function(){ 
  function BindingExpression(target, targetProperty, targetProperty1, binding) {    
    this._binding = null;
    this._target = null;
    this._targetProperty = null;
    this._targetProperty1 = null;
    this.handle = (function(e){
      this.updateSource();
    }).bind(this);
    this.propertyChange = (function(source, e){
      this.updateTarget();
    }).bind(this);
    this._binding = binding;
    this._targetProperty = targetProperty;
    this._targetProperty1 = targetProperty1;
    this._target = target;
    switch (this._binding.mode) {
    case __lc("java.lang.BindingMode").TwoWay :
        if(HTMLElement.prototype.__class.isInstance(target))
        {
          this.attachTarget(this._target, this._targetProperty);
        }
    case __lc("java.lang.BindingMode").OneWay :
        this._target.dataContext.addBinding(this);
    case __lc("java.lang.BindingMode").OneTime :
        this.updateTarget();
    }
  }
  BindingExpression.prototype.__proto__ = Object.prototype;
  __cache["java.lang.BindingExpression"] = BindingExpression;
  Object.defineProperty(BindingExpression.prototype, "binding", {
    get : function() {
      return this._binding;
    }
  });
  Object.defineProperty(BindingExpression.prototype, "value", {
    get : function() {
      if(this._target.dataContext.dataItem == null)
      {
        return null;
      }
      else
      {
        if(this._binding.isDirectBinding)
        {
          return this._target.dataContext.dataItem;
        }
        else
        {
          return this._target.dataContext.dataItem[this._binding.property];
        }
      }
    }
  });
  BindingExpression.prototype.updateSource = function(){
    if(this._binding.isDirectBinding)
    {
      this._target.dataContext.dataItem = this._target[this._targetProperty];
    }
    else
    {
      this._target.dataContext.dataItem[this._binding.property] = this._target[this._targetProperty];
    }
  };
  BindingExpression.prototype.updateTarget = function(){
    if(this._binding.isDirectBinding)
    {
      if(this._binding.callback != null)
      {
        this._binding.callback(this._target, this._targetProperty, this._targetProperty1, this._target.dataContext.dataItem);
      }
      else
      {
        if(this._target.dataContext.dataItem != null)
        {
          if(this._targetProperty1 == null)
          {
            this._target[this._targetProperty] = this._target.dataContext.dataItem;
          }
          else
          {
            this._target[this._targetProperty][this._targetProperty1] = this._target.dataContext.dataItem;
          }
        }
        else
        {
          if(this._targetProperty1 == null)
          {
            this._target[this._targetProperty] = null;
          }
          else
          {
            this._target[this._targetProperty][this._targetProperty1] = null;
          }
        }
      }
    }
    else
    {
      if(this._target.dataContext.dataItem != null)
      {
        if(this._binding.callback != null)
        {
          this._binding.callback(this._target, this._targetProperty, this._targetProperty1, this._target.dataContext.dataItem[this._binding.property]);
        }
        else
        {
          if(this._targetProperty1 == null)
          {
            this._target[this._targetProperty] = this._target.dataContext.dataItem[this._binding.property];
          }
          else
          {
            this._target[this._targetProperty][this._targetProperty1] = this._target.dataContext.dataItem[this._binding.property];
          }
        }
      }
      else
      {
        if(this._binding.callback != null)
        {
          this._binding.callback(this._target, this._targetProperty, this._targetProperty1, null);
        }
        else
        {
          if(this._targetProperty1 == null)
          {
            this._target[this._targetProperty] = null;
          }
          else
          {
            this._target[this._targetProperty][this._targetProperty1] = null;
          }
        }
      }
    }
  };
  BindingExpression.prototype.attachTarget = function(target, property){
    switch (this._binding.updateSourceTrigger) {
    case __lc("java.lang.UpdateSourceTrigger").LostFocus :
        target.addEventListener("blur", this.handle, false);
        break;
    case __lc("java.lang.UpdateSourceTrigger").PropertyChanged :
        target.addEventListener("input", this.handle, false);
        target.addEventListener("change", this.handle, false);
        break;
    default :
    }
  };
  BindingExpression.prototype.invalidate = function(data){
    this.updateTarget();
  };
  BindingExpression.prototype.__class = new (__lc('java.lang.Class'))("java.lang.BindingExpression", BindingExpression, Object.prototype.__class, [], 1);
  return  BindingExpression;
})();
(function(){ 
  function DataContext(){
    var args = Array.prototype.slice.call(arguments);
    return DataContext.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  DataContext.__f = {
    "0" : function(){
		this._mode = __lc("java.lang.PathMode", "java.lang.bindings").Absolute;
//		this._property = null;
		this._bindings = [];
		this._dependents = [];
		this._itemControls = [];
		this._dataItem = __this; 
	}, 
    "11" : function(property){
		this._mode = __lc("java.lang.PathMode", "java.lang.bindings").Relative;
		this._property = property;
		this._bindings = [];
		this._dependents = [];
		this._itemControls = [];
//		this._dataItem = __this; 
	}, 
    "12" : function(dataItem){
		this._mode = __lc("java.lang.PathMode", "java.lang.bindings").Absolute;
		this._property = null;
		this._bindings = [];
		this._dependents = [];
		this._itemControls = [];
		this._dataItem = dataItem; 
	}, 
    "2" : function(property, mode) {    
    this._mode = null;
    this._property = null;
    this._bindings = null;
    this._dependents = null;
    this._itemControls = null;
    this._dataItem = null;
    this._mode = mode;
    this._property = property;
    this._bindings = new Array();
    this._dependents = new Array();
    this._itemControls = new Array();
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
  Object.defineProperty(DataContext.prototype, "isRelative", {
    get : function() {
      return this._mode === __lc("java.lang.PathMode").Relative;
    }
  });
  Object.defineProperty(DataContext.prototype, "dataItem", {
    get : function() {
      return this._dataItem;
    }, 
    set : function(value) {
      if(value === this._dataItem) return;
      replaceDataItem.call(this, value);
      this._dataItem = value;
      dirty.call(this, value);
    }
  });
  DataContext.prototype.addBinding = function(be){
    this._bindings.push(be);
    if(__lc("java.lang.INotifyPropertyChanged").prototype.__class.isInstance(this._dataItem))
    {
      if(! be.binding.isDirectBinding)
      {
        this._dataItem.addPropertyChangeListener(be.binding.property, be.propertyChange);
      }
    }
  };
  DataContext.prototype.removeBinding = function(dependent){
    this._bindings.forEach((function(be, index, array){
      if(be == dependent)
      {
        this._bindings.splice(index, 1);
        return;
      }
    }).bind(this));
  };
  DataContext.prototype.addItemsControl = function(ic){
    this._itemControls.push(ic);
    if(__lc("java.lang.INotifyPropertyChanged").prototype.__class.isInstance(this._dataItem))
    {
      this._dataItem.addPropertyChangeListener(ic.path, ic.propertyChange);
    }
  };
  DataContext.prototype.removeItemsControl = function(dependent){
    this._itemControls.forEach((function(ic, index, array){
      if(ic == dependent)
      {
        this._itemControls.splice(index, 1);
        return;
      }
    }).bind(this));
  };
  DataContext.prototype.addDependent = function(dependent){
    this._dependents.push(dependent);
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
  function dirty(data){
    this._bindings.forEach((function(be, index, array){
      be.invalidate(data);
    }).bind(this));
    this._dependents.forEach((function(dc, index, array){
      dc.invalidate(data);
    }).bind(this));
  }
  function replaceDataItem(newDataItem){
    if(this._dataItem != null && __lc("java.lang.INotifyPropertyChanged").prototype.__class.isInstance(this._dataItem))
    {
      var oldPc = this._dataItem;
      for (var i = 0, length = this._dependents.length; i < length; i ++) 
      {
        oldPc.removePropertyChangeListener(this._dependents[i].property, this._dependents[i].propertyChange.bind(this));
      }
      for (var i = 0, length = this._bindings.length; i < length; i ++) 
      {
        oldPc.removePropertyChangeListener(this._bindings[i].binding.property, this._bindings[i].propertyChange);
      }
    }
    if(newDataItem != null && __lc("java.lang.INotifyPropertyChanged").prototype.__class.isInstance(newDataItem))
    {
      var newPc = newDataItem;
      for (var i = 0, length = this._dependents.length; i < length; i ++) 
      {
        newPc.addPropertyChangeListener(this._dependents[i].property, this._dependents[i].propertyChange.bind(this));
      }
      for (var i = 0, length = this._bindings.length; i < length; i ++) 
      {
        newPc.addPropertyChangeListener(this._bindings[i].binding.property, this._bindings[i].propertyChange);
      }
    }
  }
  DataContext.prototype.propertyChange = function(source, e){
    this.dataItem = source[e.propertyName];
  };
  DataContext.prototype.invalidate = function(data){
    if(data == null)
    {
      this.dataItem = null;
    }
    else
    {
      this.dataItem = data[this.property];
    }
  };
  DataContext.prototype.__class = new (__lc('java.lang.Class'))("java.lang.DataContext", DataContext, Object.prototype.__class, [], 1);
  return  DataContext;
})();
(function(){ 
  function PathMode() {    
  __lc('java.lang.Enum').call(this, arguments[arguments.length-2], arguments[arguments.length-1]);
  }
  PathMode.prototype.__proto__ = __lc("java.lang.Enum").prototype;
  __cache["java.lang.PathMode"] = PathMode;
  PathMode.valueOf = function(name) { return PathMode[name]; };
  PathMode.values = function() { return [PathMode.Relative, PathMode.Absolute]; };
  PathMode.Relative = new (__lc('java.lang.PathMode'))("Relative", 0);
  PathMode.Absolute = new (__lc('java.lang.PathMode'))("Absolute", 1);
  PathMode.prototype.__class = new (__lc('java.lang.Class'))("java.lang.PathMode", PathMode, __lc("java.lang.Enum").prototype.__class, [], 3);
  return  PathMode;
})();
(function(){ 
  function DataPath(options) {    
    this._mode = null;
    this._property = null;
    if(options["property"] != undefined)
    {
      this._property = options["property"];
    }
    if(options["mode"] != undefined)
    {
      this._mode = options["mode"];
    }
  }
  DataPath.prototype.__proto__ = Object.prototype;
  __cache["java.lang.DataPath"] = DataPath;
  Object.defineProperty(DataPath.prototype, "mode", {
    get : function() {
      return this._mode;
    }, 
    set : function(value) {
      this._mode = value;
    }
  });
  Object.defineProperty(DataPath.prototype, "property", {
    get : function() {
      return this._property;
    }, 
    set : function(value) {
      this._property = value;
    }
  });
  DataPath.prototype.provideValue = function(target, property, targetProperty){
		return new (__lc("java.lang.DataContext"))(this._property, this._mode, '2');
	} ;
  DataPath.prototype.__class = new (__lc('java.lang.Class'))("java.lang.DataPath", DataPath, Object.prototype.__class, [__lc("java.lang.MarkupExtension").prototype.__class], 1);
  return  DataPath;
})();
(function(){ 
  function ItemsConfig(option) {    
    this._itemControlClazz = null;
    this._template = null;
    this._path = null;
    if(option["clazz"] != null)
    {
      this._itemControlClazz = option["clazz"];
    }
    else
    {
      this._itemControlClazz = __lc("java.lang.ItemsControl").prototype.__class;
    }
    if(option["itemTemplate"] != null)
    {
      this._template = option["itemTemplate"];
    }
    if(option["path"] != null)
    {
      this._path = option["path"];
    }
  }
  ItemsConfig.prototype.__proto__ = Object.prototype;
  __cache["java.lang.ItemsConfig"] = ItemsConfig;
  Object.defineProperty(ItemsConfig.prototype, "clazz", {
    get : function() {
      return this._itemControlClazz;
    }, 
    set : function(value) {
      this._itemControlClazz = value;
    }
  });
  Object.defineProperty(ItemsConfig.prototype, "itemTemplate", {
    get : function() {
      return this._template;
    }, 
    set : function(value) {
      this._template = value;
    }
  });
  Object.defineProperty(ItemsConfig.prototype, "path", {
    get : function() {
      return this._path;
    }, 
    set : function(value) {
      this._path = value;
    }
  });
  ItemsConfig.prototype.provideValue = function(target, property, targetProperty1){
		var r = new (this._itemControlClazz.factory)(target, this._path, this._template);
		return r;
	};
  ItemsConfig.prototype.__class = new (__lc('java.lang.Class'))("java.lang.ItemsConfig", ItemsConfig, Object.prototype.__class, [__lc("java.lang.MarkupExtension").prototype.__class], 1);
  return  ItemsConfig;
})();
(function(){ 
  function ItemsControl(container, path, itemTemplate) {    
    this.itemTemplate = null;
    this.container = null;
    this._path = null;
    this._dataItem = null;
    this.nodesMap = new Map();
    this.onCollectionChanged = (function(sender, event){
      switch (event.Action) {
      case __lc("java.lang.CollectionChangedAction").Add :
          var items = event.NewItems;
          var __coll = items
          for(var __i = 0; __i < __coll.length; __i++) {
            var item = __coll[__i];
            var template = this.itemTemplate.newInstance();
            var root = template.create(this.container, item);
            this.nodesMap.set(item, root);
          }
          break;
      case __lc("java.lang.CollectionChangedAction").Reset :
          this.nodesMap.forEach((function(node, key, mapObj){
            this.container.removeChild(node);
            this.nodesMap.delete(key);
          }).bind(this));
          break;
      case __lc("java.lang.CollectionChangedAction").Remove :
          var __coll0 = event.OldItems
          for(var __i0 = 0; __i0 < __coll0.length; __i0++) {
            var item = __coll0[__i0];
            var child = this.nodesMap.get(item);
            this.container.removeChild(child);
            this.nodesMap.delete(item);
          }
          break;
      case __lc("java.lang.CollectionChangedAction").Replace :
      case __lc("java.lang.CollectionChangedAction").Move :
      }
    }).bind(this);
    this.propertyChange = (function(source, event){
      this.dataItem = source[event.propertyName];
    }).bind(this);
    this.itemTemplate = itemTemplate;
    this.container = container;
    this._path = path;
    container.dataContext.addItemsControl(this);
    if(container.dataContext.dataItem == null)
    {
      this.dataItem = null;
    }
    else
    {
      this.dataItem = container.dataContext.dataItem[path];
    }
  }
  ItemsControl.prototype.__proto__ = Object.prototype;
  __cache["java.lang.ItemsControl"] = ItemsControl;
  Object.defineProperty(ItemsControl.prototype, "path", {
    get : function() {
      return this._path;
    }
  });
  Object.defineProperty(ItemsControl.prototype, "dataItem", {
    get : function() {
      return this._dataItem;
    }, 
    set : function(value) {
      if(this._dataItem === value)
      {
        return;
      }
      this.nodesMap.forEach((function(node, item, mapObj){
        this.container.removeChild(node);
      }).bind(this));
      this.nodesMap.clear();
      if(this._dataItem != null)
      {
        if(__lc("java.lang.INotifyCollectionChanged").prototype.__class.isInstance(this._dataItem))
        {
          this._dataItem.removeCollectionChangedListener(this.onCollectionChanged);
        }
      }
      this._dataItem = value;
      if(this._dataItem != null)
      {
        if(__lc("java.lang.INotifyCollectionChanged").prototype.__class.isInstance(this._dataItem))
        {
          this._dataItem.addCollectionChangedListener(this.onCollectionChanged);
        }
        this.expand();
      }
    }
  });
  ItemsControl.prototype.expand = function(){
    if(__lc("java.util.Collection").prototype.__class.isInstance(this._dataItem))
    {
      var __coll = this._dataItem, __i = __coll.iterator();
      while(__i.hasNext()) {
        var obj = __i.next();
        var template = this.itemTemplate.newInstance();
        var node = template.create(this.container, obj);
        this.nodesMap.set(obj, node);
      }
    }
  };
  ItemsControl.prototype.invalidate = function(){
    if(this.container.dataContext.dataItem == null)
    {
      this.dataItem = null;
    }
    else
    {
      this.dataItem = this.container.dataContext.dataItem[this._path];
    }
  };
  ItemsControl.prototype.__class = new (__lc('java.lang.Class'))("java.lang.ItemsControl", ItemsControl, Object.prototype.__class, [], 1);
  return  ItemsControl;
})();
(function(){ 
  function Page() {    
    this.pageClass = null;
  }
  Page.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Page"] = Page;
  Page.prototype.provideValue = function(target, property, targetProperty1){
    return null;
  };
  Page.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Page", Page, Object.prototype.__class, [__lc("java.lang.MarkupExtension").prototype.__class], 1);
  return  Page;
})();
