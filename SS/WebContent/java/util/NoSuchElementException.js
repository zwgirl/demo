(function(){ 
  function NoSuchElementException(){
    var args = Array.prototype.slice.call(arguments);
    return NoSuchElementException.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  NoSuchElementException.__f = {
    "null" : function() {    
  __lc('java.lang.RuntimeException').call(this, "1");
  }, 
    "null" : function(s) {    
  __lc('java.lang.RuntimeException').call(thiss, "2");
  }
  };
  NoSuchElementException.prototype.__proto__ = __lc("java.lang.RuntimeException").prototype;
  __cache["java.util.NoSuchElementException"] = NoSuchElementException;
  NoSuchElementException.serialVersionUID = 6769829250639411880;
  NoSuchElementException.prototype.__class = new (__lc('java.lang.Class'))("java.util.NoSuchElementException", NoSuchElementException, __lc("java.lang.RuntimeException").prototype.__class, [], 1);
  return  NoSuchElementException;
})();