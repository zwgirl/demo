(function(){ 
  function Class(name, factory, superClass, interfaces, flags) {    
    this._name = null;
    this._id = 0;
    this._interfaces = null;
    this._superClass = null;
    this._flags = 0;
    this._factory = null;
    this._name = name;
    this._factory = factory;
    this._id = Class.__index ++;
    this._flags = flags;
    this._interfaces = interfaces;
    this._superClass = superClass;
  }
  Class.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Class"] = Class;
  Object.defineProperty(Class.prototype, "superClass", {
    get : function() {
      return this._superClass;
    }
  });
  Object.defineProperty(Class.prototype, "factory", {
    get : function() {
      return this._factory;
    }
  });
  Object.defineProperty(Class.prototype, "interfaces", {
    get : function() {
      return this._interfaces;
    }
  });
  Object.defineProperty(Class.prototype, "name", {
    get : function() {
      return this._name;
    }
  });
  Object.defineProperty(Class.prototype, "id", {
    get : function() {
      return this._id;
    }
  });
  Object.defineProperty(Class.prototype, "isInterface", {
    get : function() {
      return (this._flags & Class.INTERFACE) != 0;
    }
  });
  Object.defineProperty(Class.prototype, "isArray", {
    get : function() {
      return (this._flags & Class.ARRAY) != 0;
    }
  });
  Object.defineProperty(Class.prototype, "isEnum", {
    get : function() {
      return (this._flags & Class.ENUM) != 0;
    }
  });
  Object.defineProperty(Class.prototype, "isPrimitive", {
    get : function() {
      return (this._flags & Class.PRIMITIVE) != 0;
    }
  });
  Class.prototype.toString = function(){
    return (this.isInterface ? "interface " : (this.isPrimitive ? "" : "class ")) + this.name;
  };
  Class.prototype.isInstance = function(obj){
    if(obj == null) return false;
    return this.isAssignableFrom(obj.getClass());
  };
  Class.prototype.isAssignableFrom = function(cls){
    if(cls == null) return false;
    if(this == cls) return true;
    if(cls.isSubclassOf(this)) return true;
    if(this.isInterface)
    {
      return cls.implementInterface(this);
    }
    return false;
  };
  Class.prototype.isSubclassOf = function(c){
    var p = this;
    if(p == c) return false;
    while (p != null)

    {
      if(p == c) return true;
      p = p.superClass;
    }
    return false;
  };
  Class.prototype.implementInterface = function(ifaceType){
    var t = this;
    while (t != null)

    {
      var interfaces = t.interfaces;
      if(interfaces != null)
      {
        for (var i = 0; i < interfaces.length; i ++) 
        {
          if(interfaces[i] == ifaceType || (interfaces[i] != null && interfaces[i].implementInterface(ifaceType))) return true;
        }
      }
      t = t.superClass;
    }
    return false;
  };
  Class.prototype.hashCode = function(){
    return this._id;
  };
  Class.prototype.newInstance = function(){
	  	return new (this._factory)();
  	};
  Class.serialVersionUID = 1;
  Class.CLASS = 0x1;
  Class.INTERFACE = 0x2;
  Class.ENUM = 0x4;
  Class.ARRAY = 0x10;
  Class.PRIMITIVE = 0x20;
  Class.__index = 0;
  Class.prototype.__class = new Class("java.lang.Class", Class, Object.prototype.__class, [__lc("java.io.Serializable").prototype.__class], 1);
  return  Class;
})();
(function(){ 
  __cache["java.lang.Object"] = Object;
  Object.registerPrimitiveClass = function(){
		var c = __lc('java.lang.Class');
		__cache["<B"] = new c("<B", null, Object.prototype.__class, [], 0x21);
		__cache["<C"] = new c("<C", null, Object.prototype.__class, [], 0x21);
		__cache["<S"] = new c("<B", null, Object.prototype.__class, [], 0x21);
		__cache["<I"] = new c("<B", null, Object.prototype.__class, [], 0x21);
		__cache["<L"] = new c("<B", null, Object.prototype.__class, [], 0x21);
		__cache["<F"] = new c("<B", null, Object.prototype.__class, [], 0x21);
		__cache["<D"] = new c("<B", null, Object.prototype.__class, [], 0x21);
		__cache["<Z"] = new c("<B", null, Object.prototype.__class, [], 0x21);
		
	}
  Object.prototype.hashCode = function(){
    return 0;
  };
  Object.prototype.getClass = function()
	{
		return this.__class; 
	}
	;
  Object.prototype.equals = function(that){
    if(this == that)
    {
      return true;
    }
    return false;
  };
  Object.prototype.clone = function(){
    return this.__proto__;
  };
  Object.equals = function(left, right){
    return false;
  };
  {
    Object.registerPrimitiveClass.call(this);
  }
  Object.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Object", Object, null, [], 1);
  return  Object;
})();
(function(){ 
  function Throwable() {    
  }
  Throwable.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Throwable"] = Throwable;
  Object.defineProperty(Throwable.prototype, "message", {

  });
  Object.defineProperty(Throwable.prototype, "description", {

  });
  Throwable.serialVersionUID = 1;
  Throwable.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Throwable", Throwable, Object.prototype.__class, [__lc("java.io.Serializable").prototype.__class], 1);
  return  Throwable;
})();
(function(){ 
  Error.prototype.__proto__ = __lc("java.lang.Throwable").prototype;
  __cache["java.lang.Error"] = Error;
  Error.serialVersionUID = 1;
  Error.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Error", Error, __lc("java.lang.Throwable").prototype.__class, [], 1);
  return  Error;
})();
(function(){ 
  Array.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Array"] = Array;
  Array.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Array", Array, Object.prototype.__class, [], 17);
  return  Array;
})();
(function(){ 
  Boolean.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Boolean"] = Boolean;
  Boolean.prototype.toString = function(){
		return this.value;
	};
  Boolean.prototype.valueOf = function(){
    return this.value;
  };
  Boolean.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Boolean", Boolean, Object.prototype.__class, [], 1);
  return  Boolean;
})();
(function(){ 
  function Byte(value)
	{
		this.value = value;
	} 
  Byte.prototype.__proto__ = Number.prototype;
  __cache["java.lang.Byte"] = Byte;
  Byte.prototype.toString = function(){
		return this.value;
	};
  Byte.prototype.valueOf = function(){
    return this.value;
  };
  Byte.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Byte", Byte, Number.prototype.__class, [], 1);
  return  Byte;
})();
(function(){ 
  function Double(value)
	{
		this.value = value;
	} 
  Double.prototype.__proto__ = Number.prototype;
  __cache["java.lang.Double"] = Double;
  Double.prototype.toString = function(){
		return this.value;
	};
  Double.prototype.valueOf = function(){
    return this.value;
  };
  Double.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Double", Double, Number.prototype.__class, [], 1);
  return  Double;
})();
(function(){ 
  function Float(value)
	{
		this.value = value;
	} 
  Float.prototype.__proto__ = Number.prototype;
  __cache["java.lang.Float"] = Float;
  Float.prototype.toString = function(){
		return this.value;
	};
  Float.prototype.valueOf = function(){
    return this.value;
  };
  Float.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Float", Float, Number.prototype.__class, [], 1);
  return  Float;
})();
(function(){ 
  Function.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Function"] = Function;
  Function.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Function", Function, Object.prototype.__class, [], 1);
  return  Function;
})();
(function(){ 
//  Math.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Math"] = Math;
  Object.defineProperty(Math, "SQRT2", {

  });
//  Math.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Math", Math, Object.prototype.__class, [], 1);
  return  Math;
})();
(function(){ 
  Number.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Number"] = Number;
  Number.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Number", Number, Object.prototype.__class, [], 1);
  return  Number;
})();
(function(){ 
  String.prototype.__proto__ = Object.prototype;
  __cache["java.lang.String"] = String;
  String.prototype.isWhiteSpace = function(){
    var whitespaceChars = " \t\n\r\f";
    return whitespaceChars.indexOf(this) != - 1;
  };
  String.isNullOrEmpty = function(str){
    if(str == null || str == String.Empty)
    {
      return true;
    }
    return false;
  };
  String.Empty = "";
  String.prototype.__class = new (__lc('java.lang.Class'))("java.lang.String", String, Object.prototype.__class, [], 1);
  return  String;
})();
(function(){ 
  RegExp.prototype.__proto__ = Object.prototype;
  __cache["java.lang.RegExp"] = RegExp;
  RegExp.prototype.__class = new (__lc('java.lang.Class'))("java.lang.RegExp", RegExp, Object.prototype.__class, [], 1);
  return  RegExp;
})();
(function(){ 
  function Short(value)
	{
		this.value = value;
	} 
  Short.prototype.__proto__ = Number.prototype;
  __cache["java.lang.Short"] = Short;
  Short.prototype.toString = function(){
		return this.value;
	};
  Short.prototype.valueOf = function(){
    return this.value;
  };
  Short.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Short", Short, Number.prototype.__class, [], 1);
  return  Short;
})();
(function(){ 
  function Character(value) {    
    this.value = 0;
    this.value = value;
  }
  Character.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Character"] = Character;
  Character.prototype.toString = function(){
		return this.value;
	};
  Character.prototype.valueOf = function(){
    return this.value;
  };
  Character.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Character", Character, Object.prototype.__class, [], 1);
  return  Character;
})();
(function(){ 
  function Long(value)
	{
		this.value = value;
	} 
  Long.prototype.__proto__ = Number.prototype;
  __cache["java.lang.Long"] = Long;
  Long.prototype.toString = function(){
		return this.value;
	};
  Long.prototype.valueOf = function(){
    return this.value;
  };
  Long.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Long", Long, Number.prototype.__class, [], 1);
  return  Long;
})();
(function(){ 
  function Integer(value)
	{
		this.value = value;
	} 
  Integer.prototype.__proto__ = Number.prototype;
  __cache["java.lang.Integer"] = Integer;
  Integer.prototype.toString = function(){
		return this.value;
	};
  Integer.prototype.valueOf = function(){
    return this.value;
  };
  Integer.MIN_VALUE = 0x80000000;
  Integer.MAX_VALUE = 0x7fffffff;
  Integer.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Integer", Integer, Number.prototype.__class, [], 1);
  return  Integer;
})();
(function(){ 
  function Exception(){
    var args = Array.prototype.slice.call(arguments);
    return Exception.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  Exception.__f = {
    "1" : function() {    
  __lc('java.lang.Throwable').call(this);
    this._message = null;
  }, 
    "2" : function(message) {    
  __lc('java.lang.Throwable').call(this);
    this._message = null;
    this._message = message;
  }
  };
  Exception.prototype.__proto__ = __lc("java.lang.Throwable").prototype;
  __cache["java.lang.Exception"] = Exception;
  Exception.prototype.getMessage = function(){
    return this._message;
  };
  Exception.prototype.getLocalizedMessage = function(){
    return this._message;
  };
  Exception.serialVersionUID = - 3387516993124229948;
  Exception.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Exception", Exception, __lc("java.lang.Throwable").prototype.__class, [], 1);
  return  Exception;
})();
(function(){ 
  function RuntimeException(){
    var args = Array.prototype.slice.call(arguments);
    return RuntimeException.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  RuntimeException.__f = {
    "1" : function() {    
  __lc('java.lang.Exception').call(this, "1");
  }, 
    "2" : function(message) {    
  __lc('java.lang.Exception').call(thismessage, "2");
  }
  };
  RuntimeException.prototype.__proto__ = __lc("java.lang.Exception").prototype;
  __cache["java.lang.RuntimeException"] = RuntimeException;
  RuntimeException.serialVersionUID = - 7034897190745766939;
  RuntimeException.prototype.__class = new (__lc('java.lang.Class'))("java.lang.RuntimeException", RuntimeException, __lc("java.lang.Exception").prototype.__class, [], 1);
  return  RuntimeException;
})();
(function(){ 
  function NullPointerException(){
    var args = Array.prototype.slice.call(arguments);
    return NullPointerException.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  NullPointerException.__f = {
    "null" : function() {    
  __lc('java.lang.RuntimeException').call(this, "1");
  }, 
    "null" : function(s) {    
  __lc('java.lang.RuntimeException').call(thiss, "2");
  }
  };
  NullPointerException.prototype.__proto__ = __lc("java.lang.RuntimeException").prototype;
  __cache["java.lang.NullPointerException"] = NullPointerException;
  NullPointerException.serialVersionUID = 5162710183389028792;
  NullPointerException.prototype.__class = new (__lc('java.lang.Class'))("java.lang.NullPointerException", NullPointerException, __lc("java.lang.RuntimeException").prototype.__class, [], 1);
  return  NullPointerException;
})();
(function(){ 
  function ClassNotFoundException(){
    var args = Array.prototype.slice.call(arguments);
    return ClassNotFoundException.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  ClassNotFoundException.__f = {
    "null" : function() {    
  __lc('java.lang.RuntimeException').call(this, "1");
  }, 
    "null" : function(s) {    
  __lc('java.lang.RuntimeException').call(thiss, "2");
  }
  };
  ClassNotFoundException.prototype.__proto__ = __lc("java.lang.RuntimeException").prototype;
  __cache["java.lang.ClassNotFoundException"] = ClassNotFoundException;
  ClassNotFoundException.serialVersionUID = 9176873029745254542;
  ClassNotFoundException.prototype.__class = new (__lc('java.lang.Class'))("java.lang.ClassNotFoundException", ClassNotFoundException, __lc("java.lang.RuntimeException").prototype.__class, [], 1);
  return  ClassNotFoundException;
})();
(function(){ 
  function CloneNotSupportedException(){
    var args = Array.prototype.slice.call(arguments);
    return CloneNotSupportedException.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  CloneNotSupportedException.__f = {
    "null" : function() {    
  __lc('java.lang.Exception').call(this, "1");
  }, 
    "null" : function(s) {    
  __lc('java.lang.Exception').call(thiss, "2");
  }
  };
  CloneNotSupportedException.prototype.__proto__ = __lc("java.lang.Exception").prototype;
  __cache["java.lang.CloneNotSupportedException"] = CloneNotSupportedException;
  CloneNotSupportedException.serialVersionUID = 5195511250079656443;
  CloneNotSupportedException.prototype.__class = new (__lc('java.lang.Class'))("java.lang.CloneNotSupportedException", CloneNotSupportedException, __lc("java.lang.Exception").prototype.__class, [], 1);
  return  CloneNotSupportedException;
})();
(function(){ 
//  arguments.prototype.__proto__ = Object.prototype;
  __cache["java.lang.arguments"] = arguments;
//  arguments.prototype.__class = new (__lc('java.lang.Class'))("java.lang.arguments", arguments, Object.prototype.__class, [], 1);
  return  arguments;
})();
(function(){ 
  Set.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Set"] = Set;
  Set.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Set", Set, Object.prototype.__class, [], 1);
  return  Set;
})();
(function(){ 
  Map.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Map"] = Map;
  Map.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Map", Map, Object.prototype.__class, [], 1);
  return  Map;
})();
(function(){ 
  function Template() {    
  }
  Template.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Template"] = Template;
  Template.prototype.create = function(parent){
    return this.doCreate(parent);
  };
  Template.prototype.doCreate = function(parent){
    throw new Error(0, "illegal call!");
  };
  Template.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Template", Template, Object.prototype.__class, [], 1);
  return  Template;
})();
(function(){ 
  function ItemTemplate() {    
  }
  ItemTemplate.prototype.__proto__ = Object.prototype;
  __cache["java.lang.ItemTemplate"] = ItemTemplate;
  ItemTemplate.prototype.create = function(parent, item){
    var root = this.createRoot(parent, item);
    this.createChild(root);
    return root;
  };
  ItemTemplate.prototype.createChild = function(parent){
    throw new Error(0, "illegal call!");
  };
  ItemTemplate.prototype.createRoot = function(parent, item){
    throw new Error(0, "illegal call!");
  };
  ItemTemplate.prototype.__class = new (__lc('java.lang.Class'))("java.lang.ItemTemplate", ItemTemplate, Object.prototype.__class, [], 1);
  return  ItemTemplate;
})();
(function(){ 
  function Component() {    
  }
  Component.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Component"] = Component;
  Component.prototype.create = function(parent){
    this.doCreate(parent);
  };
  Component.prototype.doCreate = function(parent){
    throw new Error(0, "illegal call!");
  };
  Component.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Component", Component, Object.prototype.__class, [], 1);
  return  Component;
})();
(function(){ 
  function Iterable(){};
  Iterable.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Iterable"] = Iterable;
  Iterable.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Iterable", Iterable, Object.prototype.__class, [], 2);
  return  Iterable;
})();
