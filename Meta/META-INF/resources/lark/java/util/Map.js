(function(){ 
  function Map(){};
  __cache["java.util.Map"] = Map;
  Object.defineProperty(Map.prototype, "size", {

  });
  Map.Entry = (function(){
    function Entry(key, value) {      
      this._key = null;
      this._value = null;
      this._key = key;
      this._value = value;
    }
    Entry.prototype.__proto__ = Object.prototype;
    __cache["java.util.Map$Entry"] = Entry;
    Object.defineProperty(Entry.prototype, "key", {
      get : function() {
        return this._key;
      }
    });
    Object.defineProperty(Entry.prototype, "value", {
      get : function() {
        return this._value;
      }
    });
    Entry.__class = new (__lc('java.lang.Class'))("java.util.Map$Entry", Entry, Object.__class, [], 1);
    return  Entry;
    return Entry;
  })();
  Map.prototype.__readObject = function(json, handlers, obj) {
    var __propVal = null;
  };
  Map.prototype.__writeObject = function(obj, handlers) {
    var __r = {"__clazz" : "java.util.Map"};
    var __propVal = null;
    return __r;
  };
  Map.__class = new (__lc('java.lang.Class'))("java.util.Map", Map, Object.__class, [__lc("java.lang.Iterable").__class], 2);
  return  Map;
})();