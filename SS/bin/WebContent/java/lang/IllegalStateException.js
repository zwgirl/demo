(function(){ 
  function IllegalStateException(){
    var args = Array.prototype.slice.call(arguments);
    return IllegalStateException.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  IllegalStateException.__f = {
    "null" : function() {    
  __lc('java.lang.RuntimeException').call(this, "1");
  }, 
    "null" : function(s) {    
  __lc('java.lang.RuntimeException').call(thiss, "2");
  }
  };
  IllegalStateException.prototype.__proto__ = __lc("java.lang.RuntimeException").prototype;
  __cache["java.lang.IllegalStateException"] = IllegalStateException;
  IllegalStateException.serialVersionUID = - 1848914673093119416;
  IllegalStateException.prototype.__class = new (__lc('java.lang.Class'))("java.lang.IllegalStateException", IllegalStateException, __lc("java.lang.RuntimeException").prototype.__class, [], 1);
  return  IllegalStateException;
})();