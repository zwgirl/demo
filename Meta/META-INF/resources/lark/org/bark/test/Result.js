(function(){ 
  function Result() {    
    this._content = null;
  }
  Result.prototype.__proto__ = Object.prototype;
  __cache["org.bark.test.Result"] = Result;
  Object.defineProperty(Result.prototype, "content", {
    get : function() {
      return this._content;
    }, 
    set : function(value) {
      this._content = value;
    }
  });
  Result.prototype.__readObject = function(json, handlers, obj) {
    var __propVal = null;
    obj["_content"] = json["_content"];
  };
  Result.prototype.__writeObject = function(obj, handlers) {
    var __r = {"__clazz" : "org.bark.test.Result"};
    var __propVal = null;
    __r["_content"] = obj["_content"];
    return __r;
  };
  Result.prototype.__class = new (__lc('java.lang.Class'))("org.bark.test.Result", Result, Object.prototype.__class, [], 1);
  return  Result;
})();