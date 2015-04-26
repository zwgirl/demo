(function(){ 
  function RetentionPolicy() {    
  __lc('java.lang.Enum').call(this, arguments[arguments.length-2], arguments[arguments.length-1]);
  }
  RetentionPolicy.prototype.__proto__ = __lc("java.lang.Enum").prototype;
  __cache["java.lang.annotation.RetentionPolicy"] = RetentionPolicy;
  RetentionPolicy.valueOf = function(name) { return RetentionPolicy[name]; };
  RetentionPolicy.values = function() { return [RetentionPolicy.SOURCE, RetentionPolicy.CLASS, RetentionPolicy.RUNTIME]; };
  RetentionPolicy.SOURCE = new (__lc('java.lang.annotation.RetentionPolicy'))("SOURCE", 0);
  RetentionPolicy.CLASS = new (__lc('java.lang.annotation.RetentionPolicy'))("CLASS", 1);
  RetentionPolicy.RUNTIME = new (__lc('java.lang.annotation.RetentionPolicy'))("RUNTIME", 2);
  RetentionPolicy.prototype.__class = new (__lc('java.lang.Class'))("java.lang.annotation.RetentionPolicy", RetentionPolicy, __lc("java.lang.Enum").prototype.__class, [], 3);
  return  RetentionPolicy;
})();