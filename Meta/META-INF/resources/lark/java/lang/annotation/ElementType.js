(function(){ 
  function ElementType() {    
  __lc('java.lang.Enum').call(this, arguments[arguments.length-2], arguments[arguments.length-1]);
  }
  ElementType.prototype.__proto__ = __lc("java.lang.Enum").prototype;
  __cache["java.lang.annotation.ElementType"] = ElementType;
  ElementType.valueOf = function(name) { return ElementType[name]; };
  ElementType.values = function() { return [ElementType.TYPE, ElementType.FIELD, ElementType.METHOD, ElementType.PARAMETER, ElementType.CONSTRUCTOR, ElementType.LOCAL_VARIABLE, ElementType.ANNOTATION_TYPE, ElementType.PACKAGE, ElementType.TYPE_PARAMETER, ElementType.TYPE_USE]; };
  ElementType.TYPE = new (__lc('java.lang.annotation.ElementType'))("TYPE", 0);
  ElementType.FIELD = new (__lc('java.lang.annotation.ElementType'))("FIELD", 1);
  ElementType.METHOD = new (__lc('java.lang.annotation.ElementType'))("METHOD", 2);
  ElementType.PARAMETER = new (__lc('java.lang.annotation.ElementType'))("PARAMETER", 3);
  ElementType.CONSTRUCTOR = new (__lc('java.lang.annotation.ElementType'))("CONSTRUCTOR", 4);
  ElementType.LOCAL_VARIABLE = new (__lc('java.lang.annotation.ElementType'))("LOCAL_VARIABLE", 5);
  ElementType.ANNOTATION_TYPE = new (__lc('java.lang.annotation.ElementType'))("ANNOTATION_TYPE", 6);
  ElementType.PACKAGE = new (__lc('java.lang.annotation.ElementType'))("PACKAGE", 7);
  ElementType.TYPE_PARAMETER = new (__lc('java.lang.annotation.ElementType'))("TYPE_PARAMETER", 8);
  ElementType.TYPE_USE = new (__lc('java.lang.annotation.ElementType'))("TYPE_USE", 9);
  ElementType.prototype.__class = new (__lc('java.lang.Class'))("java.lang.annotation.ElementType", ElementType, __lc("java.lang.Enum").prototype.__class, [], 3);
  return  ElementType;
})();