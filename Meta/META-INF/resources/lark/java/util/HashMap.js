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
  HashMap.prototype.iterator = function(){
    return (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.HashMap$Itr').prototype};
      __lc('java.util.HashMap$Itr').apply(r, arguments);
      return r;
    }).call(this);
  };
  HashMap.Itr = (function(){
    function Itr() {      
      this.entries = new Array();
      this.cursor = 0;
      this.lastRet = - 1;
      this.__enclosing._map.forEach((function(value, key, map){
        this.entries.push((function(){
          var r = {__enclosing : this, __proto__: __lc('java.util.Map$Entry').prototype};
          __lc('java.util.Map$Entry').apply(r, arguments);
          return r;
        }).call(this, key, value));
      }).bind(this));
    }
    Itr.prototype.__proto__ = Object.prototype;
    __cache["java.util.HashMap$Itr"] = Itr;
    Itr.prototype.hasNext = function(){
      return this.cursor != this.entries.length;
    };
    Itr.prototype.next = function(){
      var i = this.cursor;
      if(i >= this.entries.length) throw new (__lc("java.util.NoSuchElementException"))()
      this.cursor = i + 1;
      return this.entries[this.lastRet = i];
    };
    Itr.__class = new (__lc('java.lang.Class'))("java.util.HashMap$Itr", Itr, Object.__class, [__lc("java.util.Iterator").__class], 1);
    return  Itr;
    return Itr;
  })();
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
  HashMap.__class = new (__lc('java.lang.Class'))("java.util.HashMap", HashMap, Object.__class, [__lc("java.util.Map").__class], 1);
  return  HashMap;
})();