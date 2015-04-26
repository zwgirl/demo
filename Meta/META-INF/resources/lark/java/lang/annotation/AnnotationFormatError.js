(function(){ 
  function AnnotationFormatError(){
    var args = Array.prototype.slice.call(arguments);
    return AnnotationFormatError.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  AnnotationFormatError.__f = {
    "null" : function(message) {    
  .call(this);
  }, 
    "null" : function(message, cause) {    
  .call(this);
  }, 
    "null" : function(cause) {    
  .call(this);
  }
  };
  AnnotationFormatError.prototype.__proto__ = Error.prototype;
  __cache["java.lang.annotation.AnnotationFormatError"] = AnnotationFormatError;
  AnnotationFormatError.prototype.__class = new (__lc('java.lang.Class'))("java.lang.annotation.AnnotationFormatError", AnnotationFormatError, Error.prototype.__class, [], 1);
  return  AnnotationFormatError;
})();