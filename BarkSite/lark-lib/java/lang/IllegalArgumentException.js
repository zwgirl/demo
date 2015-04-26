(function(){ 
  function IllegalArgumentException(){
    var args = Array.prototype.slice.call(arguments);
    return IllegalArgumentException.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  IllegalArgumentException.__f = {
    "null" : function() {    
  __lc('java.lang.RuntimeException').call(this, "1");
  }, 
    "null" : function(s) {    
  __lc('java.lang.RuntimeException').call(thiss, "2");
  }
  };
  IllegalArgumentException.prototype.__proto__ = __lc("java.lang.RuntimeException").prototype;
  __cache["java.lang.IllegalArgumentException"] = IllegalArgumentException;
  IllegalArgumentException.serialVersionUID = - 5365630128856068164;
  IllegalArgumentException.prototype.__class = new (__lc('java.lang.Class'))("java.lang.IllegalArgumentException", IllegalArgumentException, __lc("java.lang.RuntimeException").prototype.__class, [], 1);
  return  IllegalArgumentException;
})();