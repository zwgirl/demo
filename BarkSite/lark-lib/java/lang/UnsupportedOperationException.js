(function(){ 
  function UnsupportedOperationException(){
    var args = Array.prototype.slice.call(arguments);
    return UnsupportedOperationException.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  UnsupportedOperationException.__f = {
    "null" : function() {    
  __lc('java.lang.RuntimeException').call(this, "1");
  }, 
    "null" : function(message) {    
  __lc('java.lang.RuntimeException').call(thismessage, "2");
  }
  };
  UnsupportedOperationException.prototype.__proto__ = __lc("java.lang.RuntimeException").prototype;
  __cache["java.lang.UnsupportedOperationException"] = UnsupportedOperationException;
  UnsupportedOperationException.serialVersionUID = - 1242599979055084673;
  UnsupportedOperationException.prototype.__class = new (__lc('java.lang.Class'))("java.lang.UnsupportedOperationException", UnsupportedOperationException, __lc("java.lang.RuntimeException").prototype.__class, [], 1);
  return  UnsupportedOperationException;
})();