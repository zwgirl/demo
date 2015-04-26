(function(){ 
  function RemotingModel(className, methodName, _parameterTypes, parameters) {    
    this._className = null;
    this._methodName = null;
    this._parameters = null;
    this._parameterTypes = null;
    this._className = className;
    this._methodName = methodName;
    this._parameterTypes = _parameterTypes;
    this._parameters = parameters;
  }
  RemotingModel.prototype.__proto__ = Object.prototype;
  __cache["org.bark.remoting.RemotingModel"] = RemotingModel;
  Object.defineProperty(RemotingModel.prototype, "className", {
    get : function() {
      return this._className;
    }, 
    set : function(value) {
      this._className = value;
    }
  });
  Object.defineProperty(RemotingModel.prototype, "methodName", {
    get : function() {
      return this._methodName;
    }, 
    set : function(value) {
      this._methodName = value;
    }
  });
  Object.defineProperty(RemotingModel.prototype, "parameters", {
    get : function() {
      return this._parameters;
    }, 
    set : function(value) {
      this._parameters = value;
    }
  });
  Object.defineProperty(RemotingModel.prototype, "parameterTypes", {
    get : function() {
      return this._parameterTypes;
    }, 
    set : function(value) {
      this._parameterTypes = value;
    }
  });
  RemotingModel.prototype.__readObject = function(json, handlers, obj) {
    var __propVal = null;
    obj["_className"] = json["_className"];
    obj["_methodName"] = json["_methodName"];
    
    __propVal = json["_parameters"];
    obj["_parameters"] = __propVal == null ? null : handlers[__propVal];
    
    __propVal = json["_parameterTypes"];
    obj["_parameterTypes"] = __propVal == null ? null : handlers[__propVal];
  };
  RemotingModel.prototype.__writeObject = function(obj, handlers) {
    var __r = {"__clazz" : "org.bark.remoting.RemotingModel"};
    var __propVal = null;
    __r["_className"] = obj["_className"];
    __r["_methodName"] = obj["_methodName"];
    __propVal = obj["_parameters"];
    __r["_parameters"] = __propVal == null ? null : handlers.shared(__propVal);
    __propVal = obj["_parameterTypes"];
    __r["_parameterTypes"] = __propVal == null ? null : handlers.shared(__propVal);
    return __r;
  };
  RemotingModel.prototype.__class = new (__lc('java.lang.Class'))("org.bark.remoting.RemotingModel", RemotingModel, Object.prototype.__class, [], 1);
  return  RemotingModel;
})();