(function(){ 
  function HashSet() {    
    this.map = null;
    this.map = new Set();
  }
  HashSet.prototype.__proto__ = Object.prototype;
  __cache["java.util.HashSet"] = HashSet;
  Object.defineProperty(HashSet.prototype, "size", {
    get : function() {
      return this.map.size;
    }
  });
  HashSet.prototype.isEmpty = function(){
    return this.map.size == 0;
  };
  HashSet.prototype.contains = function(o){
    return this.map.has(o);
  };
  HashSet.prototype.add = function(e){
    this.map.add(e);
  };
  HashSet.prototype.remove = function(o){
    return this.map.delete(o);
  };
  HashSet.prototype.clear = function(){
    this.map.clear();
  };
  HashSet.prototype.toArray = function(){
    return null;
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
        __propVal = json["map"];
    obj["map"] = __propVal == null ? null : handlers[__propVal];
  };
  HashSet.prototype.__writeObject = function(obj, handlers) {
    var __r = {"__clazz" : "java.util.HashSet"};
    var __propVal = null;
    __propVal = obj["map"];
    __r["map"] = __propVal == null ? null : handlers.shared(__propVal);
    return __r;
  };
  HashSet.prototype.__class = new (__lc('java.lang.Class'))("java.util.HashSet", HashSet, Object.prototype.__class, [__lc("java.util.Set", "java.util.Set").prototype.__class], 1);
  return  HashSet;
})();