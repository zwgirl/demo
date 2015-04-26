(function(){ 
  function DD(){
    var args = Array.prototype.slice.call(arguments);
    return DD.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  DD.__f = {
    "null" : function() {    
  }, 
    "null" : function(value) {    
  }
  };
  DD.prototype.__proto__ = Object.prototype;
  __cache["org.bark.test.DD"] = DD;
  DD.prototype.dd = function(){
    __lc("org.bark.test.FirstService").prototype.sayHello("21212", null, null, "org.bark.test.FirstService");
  };
  DD.prototype.__class = new (__lc('java.lang.Class'))("org.bark.test.DD", DD, Object.prototype.__class, [], 1);
  return  DD;
})();