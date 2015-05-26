(function(){ 
  function HashSet() {    
    this._set = null;
    this._set = new Set();
  }
  HashSet.prototype.__proto__ = Object.prototype;
  __cache["java.util.HashSet"] = HashSet;
  Object.defineProperty(HashSet.prototype, "size", {
    get : function() {
      return this._set.size;
    }
  });
  HashSet.prototype.isEmpty = function(){
    return this._set.size == 0;
  };
  HashSet.prototype.contains = function(o){
    return this._set.has(o);
  };
  HashSet.prototype.add = function(e){
    this._set.add(e);
  };
  HashSet.prototype.remove = function(o){
    return this._set.delete(o);
  };
  HashSet.prototype.clear = function(){
    this._set.clear();
  };
  HashSet.prototype.toArray = function(){
    var array = new Array();
    this._set.forEach((function(item, sameItem, s){
      array.push(item);
    }).bind(this));
    return array;
  };
  HashSet.prototype.containsAll = function(c){
    return false;
  };
  HashSet.prototype.addAll = function(c){
  };
  HashSet.prototype.removeAll = function(c){
  };
  HashSet.prototype.retainAll = function(c){
    return false;
  };
  HashSet.prototype.iterator = function(){
    return null;
  };
  HashSet.prototype.__readObject = function(json, handlers, obj) {
    var __propVal = null;
        __propVal = json["_set"];
    obj["_set"] = __propVal == null ? null : handlers[__propVal];
  };
  HashSet.prototype.__writeObject = function(obj, handlers) {
    var __r = {"__clazz" : "java.util.HashSet"};
    var __propVal = null;
    __propVal = obj["_set"];
    __r["_set"] = __propVal == null ? null : handlers.shared(__propVal);
    return __r;
  };
  HashSet.__class = new (__lc('java.lang.Class'))("java.util.HashSet", HashSet, Object.__class, [__lc("java.util.Set").__class], 1);
  return  HashSet;
})();