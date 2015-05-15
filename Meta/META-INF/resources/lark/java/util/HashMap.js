(function(){ 
  function HashMap() {    
    this._map = new Map();
  }
  HashMap.prototype.__proto__ = Object.prototype;
  __cache["java.util.HashMap"] = HashMap;
  Object.defineProperty(HashMap.prototype, "size", {
    get : function() {
      return this._map.size;
    }
  });
  HashMap.prototype.isEmpty = function(){
    return this._map.size == 0;
  };
  HashMap.prototype.get = function(key){
    return this._map.get(key);
  };
  HashMap.prototype.containsKey = function(key){
    return this._map.has(key);
  };
  HashMap.prototype.put = function(key, value){
    this._map.set(key, value);
  };
  HashMap.prototype.remove = function(key){
    return this._map.delete(key);
  };
  HashMap.prototype.clear = function(){
    this._map.clear();
  };
  HashMap.prototype.__readObject = function(json, handlers, obj) {
    var __propVal = null;
        __propVal = json["_map"];
    obj["_map"] = __propVal == null ? null : handlers[__propVal];
  };
  HashMap.prototype.__writeObject = function(obj, handlers) {
    var __r = {"__clazz" : "java.util.HashMap"};
    var __propVal = null;
    __propVal = obj["_map"];
    __r["_map"] = __propVal == null ? null : handlers.shared(__propVal);
    return __r;
  };
  HashMap.prototype.__class = new (__lc('java.lang.Class'))("java.util.HashMap", HashMap, Object.prototype.__class, [__lc("java.util.Map", "java.util.Map").prototype.__class], 1);
  return  HashMap;
})();