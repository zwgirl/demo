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
    if(obj == null) return false
    return this.isAssignableFrom(obj.constructor["__class"]);
  };
  Class.prototype.isAssignableFrom = function(cls){
    if(cls == null) return false
    if(this == cls) return true
    if(cls.isSubclassOf(this)) return true
    if(this.isInterface)
    {
      return cls.implementInterface(this);
    }
    return false;
  };
  Class.prototype.isSubclassOf = function(c){
    var p = this;
    if(p == c) return false
    while (p != null)

    {
      if(p == c) return true
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
          if(interfaces[i] == ifaceType || (interfaces[i] != null && interfaces[i].implementInterface(ifaceType))) return true
        }
      }
      t = t.superClass;
    }
    return false;
  };
  Class.prototype.newInstance = function(){
	  	return new (this._factory)();
  	};
  Class.prototype.toURL = function(){
    return "/lark/" + this._name.split(".").join("/").concat(".html");
  };
  Class.CLASS = 0x1;
  Class.INTERFACE = 0x2;
  Class.ENUM = 0x4;
  Class.ARRAY = 0x10;
  Class.PRIMITIVE = 0x20;
  Class.__index = 0;
  Class.__class = new Class("java.lang.Class", Class, Object.__class, [], 1);
  return  Class;
})();
(function(){ 
  __cache["java.lang.Object"] = Object;
  Object.equals = function(left, right){
    return false;
  };
  Object.__class = new (__lc('java.lang.Class'))("java.lang.Object", Object, null, [], 1);
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
  Throwable.__class = new (__lc('java.lang.Class'))("java.lang.Throwable", Throwable, Object.__class, [], 1);
  return  Throwable;
})();
(function(){ 
  Error.prototype.__proto__ = __lc("java.lang.Throwable").prototype;
  __cache["java.lang.Error"] = Error;
  Error.__class = new (__lc('java.lang.Class'))("java.lang.Error", Error, __lc("java.lang.Throwable").__class, [], 1);
  return  Error;
})();
(function(){ 
  Array.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Array"] = Array;
  Array.__class = new (__lc('java.lang.Class'))("java.lang.Array", Array, Object.__class, [], 17);
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
  Boolean.__class = new (__lc('java.lang.Class'))("java.lang.Boolean", Boolean, Object.__class, [], 1);
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
  Byte.__class = new (__lc('java.lang.Class'))("java.lang.Byte", Byte, Number.__class, [], 1);
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
  Double.__class = new (__lc('java.lang.Class'))("java.lang.Double", Double, Number.__class, [], 1);
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
  Float.__class = new (__lc('java.lang.Class'))("java.lang.Float", Float, Number.__class, [], 1);
  return  Float;
})();
(function(){ 
  Function.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Function"] = Function;
  Function.__class = new (__lc('java.lang.Class'))("java.lang.Function", Function, Object.__class, [], 1);
  return  Function;
})();
(function(){ 
  __cache["java.lang.Math"] = Math;
  Object.defineProperty(Math, "SQRT2", {

  });

})();
(function(){ 
  Number.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Number"] = Number;
  Number.__class = new (__lc('java.lang.Class'))("java.lang.Number", Number, Object.__class, [], 1);
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
  String.__class = new (__lc('java.lang.Class'))("java.lang.String", String, Object.__class, [], 1);
  return  String;
})();
(function(){ 
  RegExp.prototype.__proto__ = Object.prototype;
  __cache["java.lang.RegExp"] = RegExp;
  RegExp.__class = new (__lc('java.lang.Class'))("java.lang.RegExp", RegExp, Object.__class, [], 1);
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
  Short.__class = new (__lc('java.lang.Class'))("java.lang.Short", Short, Number.__class, [], 1);
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
  Character.__class = new (__lc('java.lang.Class'))("java.lang.Character", Character, Object.__class, [], 1);
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
  Long.__class = new (__lc('java.lang.Class'))("java.lang.Long", Long, Number.__class, [], 1);
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
  Integer.__class = new (__lc('java.lang.Class'))("java.lang.Integer", Integer, Number.__class, [], 1);
  return  Integer;
})();
(function(){ 
  function Exception(){
    var args = Array.prototype.slice.call(arguments);
    return Exception.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  Exception.__f = {
    "1" : function() {    
  __lc("java.lang.Throwable", "java.lang.buildins").call(this);
    this._message = null;
  }, 
    "2" : function(message) {    
  __lc("java.lang.Throwable", "java.lang.buildins").call(this);
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
  Exception.__class = new (__lc('java.lang.Class'))("java.lang.Exception", Exception, __lc("java.lang.Throwable").__class, [], 1);
  return  Exception;
})();
(function(){ 
  function RuntimeException(){
    var args = Array.prototype.slice.call(arguments);
    return RuntimeException.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  RuntimeException.__f = {
    "1" : function() {    
  __lc("java.lang.Exception", "java.lang.buildins").call(this, "1");
  }, 
    "2" : function(message) {    
  __lc("java.lang.Exception", "java.lang.buildins").call(this, message, "2");
  }
  };
  RuntimeException.prototype.__proto__ = __lc("java.lang.Exception").prototype;
  __cache["java.lang.RuntimeException"] = RuntimeException;
  RuntimeException.__class = new (__lc('java.lang.Class'))("java.lang.RuntimeException", RuntimeException, __lc("java.lang.Exception").__class, [], 1);
  return  RuntimeException;
})();
(function(){ 
  function NullPointerException(){
    var args = Array.prototype.slice.call(arguments);
    return NullPointerException.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  NullPointerException.__f = {
    "null" : function() {    
  __lc("java.lang.RuntimeException", "java.lang.buildins").call(this, "1");
  }, 
    "null" : function(s) {    
  __lc("java.lang.RuntimeException", "java.lang.buildins").call(this, s, "2");
  }
  };
  NullPointerException.prototype.__proto__ = __lc("java.lang.RuntimeException").prototype;
  __cache["java.lang.NullPointerException"] = NullPointerException;
  NullPointerException.__class = new (__lc('java.lang.Class'))("java.lang.NullPointerException", NullPointerException, __lc("java.lang.RuntimeException").__class, [], 1);
  return  NullPointerException;
})();
(function(){ 
  function ClassNotFoundException(){
    var args = Array.prototype.slice.call(arguments);
    return ClassNotFoundException.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  ClassNotFoundException.__f = {
    "null" : function() {    
  __lc("java.lang.RuntimeException", "java.lang.buildins").call(this, "1");
  }, 
    "null" : function(s) {    
  __lc("java.lang.RuntimeException", "java.lang.buildins").call(this, s, "2");
  }
  };
  ClassNotFoundException.prototype.__proto__ = __lc("java.lang.RuntimeException").prototype;
  __cache["java.lang.ClassNotFoundException"] = ClassNotFoundException;
  ClassNotFoundException.__class = new (__lc('java.lang.Class'))("java.lang.ClassNotFoundException", ClassNotFoundException, __lc("java.lang.RuntimeException").__class, [], 1);
  return  ClassNotFoundException;
})();
(function(){ 
  function CloneNotSupportedException(){
    var args = Array.prototype.slice.call(arguments);
    return CloneNotSupportedException.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  CloneNotSupportedException.__f = {
    "null" : function() {    
  __lc("java.lang.Exception", "java.lang.buildins").call(this, "1");
  }, 
    "null" : function(s) {    
  __lc("java.lang.Exception", "java.lang.buildins").call(this, s, "2");
  }
  };
  CloneNotSupportedException.prototype.__proto__ = __lc("java.lang.Exception").prototype;
  __cache["java.lang.CloneNotSupportedException"] = CloneNotSupportedException;
  CloneNotSupportedException.__class = new (__lc('java.lang.Class'))("java.lang.CloneNotSupportedException", CloneNotSupportedException, __lc("java.lang.Exception").__class, [], 1);
  return  CloneNotSupportedException;
})();
(function(){ 
  __cache["java.lang.arguments"] = arguments;

})();
(function(){ 
  Set.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Set"] = Set;
  Set.__class = new (__lc('java.lang.Class'))("java.lang.Set", Set, Object.__class, [], 1);
  return  Set;
})();
(function(){ 
  Map.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Map"] = Map;
  Map.__class = new (__lc('java.lang.Class'))("java.lang.Map", Map, Object.__class, [], 1);
  return  Map;
})();
(function(){ 
  function Iterable(){};
  __cache["java.lang.Iterable"] = Iterable;
  Iterable.prototype.forEach = function(action){
    var __coll = this, __i = __coll.iterator();
    while(__i.hasNext()) {
      var t = __i.next();
      action(t);
    }
  };
  Iterable.prototype.__readObject = function(json, handlers, obj) {};
  Iterable.prototype.__writeObject = function(obj, handlers) {};
  Iterable.__class = new (__lc('java.lang.Class'))("java.lang.Iterable", Iterable, Object.__class, [], 2);
  return  Iterable;
})();
(function(){ 
  function Enum(name, ordinal) {    
    this._name = null;
    this._ordinal = 0;
    this._name = name;
    this._ordinal = ordinal;
  }
  Enum.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Enum"] = Enum;
  Object.defineProperty(Enum.prototype, "name", {
    get : function() {
      return this._name;
    }
  });
  Object.defineProperty(Enum.prototype, "ordinal", {
    get : function() {
      return this._ordinal;
    }
  });
  Enum.prototype.toString = function(){
    return this.name;
  };
  Enum.prototype.equals = function(other){
    return this === other;
  };
  Enum.__class = new (__lc('java.lang.Class'))("java.lang.Enum", Enum, Object.__class, [], 1);
  return  Enum;
})();
(function(){ 
  function IllegalArgumentException(){
    var args = Array.prototype.slice.call(arguments);
    return IllegalArgumentException.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  IllegalArgumentException.__f = {
    "null" : function() {    
  __lc("java.lang.RuntimeException", "java.lang.buildins").call(this, "1");
  }, 
    "null" : function(s) {    
  __lc("java.lang.RuntimeException", "java.lang.buildins").call(this, s, "2");
  }
  };
  IllegalArgumentException.prototype.__proto__ = __lc("java.lang.RuntimeException").prototype;
  __cache["java.lang.IllegalArgumentException"] = IllegalArgumentException;
  IllegalArgumentException.__class = new (__lc('java.lang.Class'))("java.lang.IllegalArgumentException", IllegalArgumentException, __lc("java.lang.RuntimeException").__class, [], 1);
  return  IllegalArgumentException;
})();
(function(){ 
  function IllegalStateException(){
    var args = Array.prototype.slice.call(arguments);
    return IllegalStateException.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  IllegalStateException.__f = {
    "null" : function() {    
  __lc("java.lang.RuntimeException", "java.lang.buildins").call(this, "1");
  }, 
    "null" : function(s) {    
  __lc("java.lang.RuntimeException", "java.lang.buildins").call(this, s, "2");
  }
  };
  IllegalStateException.prototype.__proto__ = __lc("java.lang.RuntimeException").prototype;
  __cache["java.lang.IllegalStateException"] = IllegalStateException;
  IllegalStateException.__class = new (__lc('java.lang.Class'))("java.lang.IllegalStateException", IllegalStateException, __lc("java.lang.RuntimeException").__class, [], 1);
  return  IllegalStateException;
})();
(function(){ 
  function UnsupportedOperationException(){
    var args = Array.prototype.slice.call(arguments);
    return UnsupportedOperationException.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  UnsupportedOperationException.__f = {
    "null" : function() {    
  __lc("java.lang.RuntimeException", "java.lang.buildins").call(this, "1");
  }, 
    "null" : function(message) {    
  __lc("java.lang.RuntimeException", "java.lang.buildins").call(this, message, "2");
  }
  };
  UnsupportedOperationException.prototype.__proto__ = __lc("java.lang.RuntimeException").prototype;
  __cache["java.lang.UnsupportedOperationException"] = UnsupportedOperationException;
  UnsupportedOperationException.__class = new (__lc('java.lang.Class'))("java.lang.UnsupportedOperationException", UnsupportedOperationException, __lc("java.lang.RuntimeException").__class, [], 1);
  return  UnsupportedOperationException;
})();
(function(){ 
  function Comparable(){};
  __cache["java.lang.Comparable"] = Comparable;
  Comparable.__class = new (__lc('java.lang.Class'))("java.lang.Comparable", Comparable, Object.__class, [], 2);
  return  Comparable;
})();
(function(){ 
  function Cloneable(){ };
  __cache["java.lang.Cloneable"] = Cloneable;
  Cloneable.__class = new (__lc('java.lang.Class'))("java.lang.Cloneable", Cloneable, Object.__class, [], 2);
  return  Cloneable;
})();
(function(){ 
  function JSON() {    
  }
  JSON.prototype.__proto__ = Object.prototype;
  __cache["java.lang.JSON"] = JSON;
  JSON.__class = new (__lc('java.lang.Class'))("java.lang.JSON", JSON, Object.__class, [], 1);
  return  JSON;
})();
(function(){ 
  Date.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Date"] = Date;
  Date.__class = new (__lc('java.lang.Class'))("java.lang.Date", Date, Object.__class, [], 1);
  return  Date;
})();
(function(){ 
  function xlink() {    
  }
  xlink.prototype.__proto__ = Object.prototype;
  __cache["java.lang.xlink"] = xlink;
  Object.defineProperty(xlink, "href", {

  });
  Object.defineProperty(xlink, "type", {

  });
  Object.defineProperty(xlink, "role", {

  });
  Object.defineProperty(xlink, "show", {

  });
  xlink.xmlns = "http://www.w3.org/1999/xlink";
  xlink.__class = new (__lc('java.lang.Class'))("java.lang.xlink", xlink, Object.__class, [], 1);
  return  xlink;
})();
(function(){ 
  function lark() {    
  }
  lark.prototype.__proto__ = Object.prototype;
  __cache["java.lang.lark"] = lark;
  Object.defineProperty(lark, "name", {

  });
  lark.xmlns = "http://www.lark.org/2015/x";
  lark.__class = new (__lc('java.lang.Class'))("java.lang.lark", lark, Object.__class, [], 1);
  return  lark;
})();
(function(){ 
  function xml() {    
  }
  xml.prototype.__proto__ = Object.prototype;
  __cache["java.lang.xml"] = xml;
  Object.defineProperty(xml, "lang", {

  });
  Object.defineProperty(xml, "space", {

  });
  xml.xmlns = "http://www.w3c.org/xml";
  xml.__class = new (__lc('java.lang.Class'))("java.lang.xml", xml, Object.__class, [], 1);
  return  xml;
})();
