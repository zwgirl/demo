(function(){ 
  function HashSet(){
    var args = Array.prototype.slice.call(arguments);
    return HashSet.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  HashSet.__f = {
    "null" : function() {    
  __lc('java.util.AbstractSet').call(this);
    this.map = null;
    this.map = new (__lc('java.util.HashMap'))();
  }, 
    "null" : function(c) {    
  __lc('java.util.AbstractSet').call(this);
    this.map = null;
    this.map = new (__lc('java.util.HashMap'))(Math.max(c.size / 0.75 + 1, 16));
    this.addAll(c);
  }, 
    "null" : function(initialCapacity, loadFactor) {    
  __lc('java.util.AbstractSet').call(this);
    this.map = null;
    this.map = new (__lc('java.util.HashMap'))(initialCapacity, loadFactor);
  }, 
    "null" : function(initialCapacity) {    
  __lc('java.util.AbstractSet').call(this);
    this.map = null;
    this.map = new (__lc('java.util.HashMap'))(initialCapacity);
  }, 
    "null" : function(initialCapacity, loadFactor, dummy) {    
  __lc('java.util.AbstractSet').call(this);
    this.map = null;
    this.map = new (__lc('java.util.LinkedHashMap'))(initialCapacity, loadFactor);
  }
  };
  HashSet.prototype.__proto__ = __lc("java.util.AbstractSet").prototype;
  __cache["java.util.HashSet"] = HashSet;
  Object.defineProperty(HashSet.prototype, "size", {
    get : function() {
      return this.map.size;
    }
  });
  HashSet.prototype.iterator = function(){
    return this.map.keySet().iterator();
  };
  HashSet.prototype.isEmpty = function(){
    return this.map.isEmpty();
  };
  HashSet.prototype.contains = function(o){
    return this.map.containsKey(o);
  };
  HashSet.prototype.add = function(e){
    return this.map.put(e, HashSet.PRESENT) == null;
  };
  HashSet.prototype.remove = function(o){
    return this.map.remove(o) == HashSet.PRESENT;
  };
  HashSet.prototype.clear = function(){
    this.map.clear();
  };
  HashSet.PRESENT = new Object();
  HashSet.prototype.__class = new (__lc('java.lang.Class'))("java.util.HashSet", HashSet, __lc("java.util.AbstractSet").prototype.__class, [__lc("java.util.Set").prototype.__class, __lc("java.lang.Cloneable").prototype.__class], 1);
  return  HashSet;
})();