(function(){ 
  function NoSuchElementException(){
    var args = Array.prototype.slice.call(arguments);
    return NoSuchElementException.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  NoSuchElementException.__f = {
    "null" : function() {    
  __lc("java.lang.RuntimeException", "java.lang.buildins").call(this, "1");
  }, 
    "null" : function(s) {    
  __lc("java.lang.RuntimeException", "java.lang.buildins").call(this, s, "2");
  }
  };
  NoSuchElementException.prototype.__proto__ = __lc("java.lang.RuntimeException").prototype;
  __cache["java.util.NoSuchElementException"] = NoSuchElementException;
  NoSuchElementException.__class = new (__lc('java.lang.Class'))("java.util.NoSuchElementException", NoSuchElementException, __lc("java.lang.RuntimeException").__class, [], 1);
  return  NoSuchElementException;
})();