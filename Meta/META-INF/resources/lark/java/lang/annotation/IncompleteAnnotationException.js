(function(){ 
  function IncompleteAnnotationException(annotationType, elementName) {    
  __lc('java.lang.RuntimeException').call(thisannotationType.name.toString() + " missing element " + elementName.toString(), "2");
    this.annotationType = null;
    this.elementName = null;
    this.annotationType = annotationType;
    this.elementName = elementName;
  }
  IncompleteAnnotationException.prototype.__proto__ = __lc("java.lang.RuntimeException").prototype;
  __cache["java.lang.annotation.IncompleteAnnotationException"] = IncompleteAnnotationException;
  IncompleteAnnotationException.prototype.annotationType = function(){
    return this.annotationType;
  };
  IncompleteAnnotationException.prototype.elementName = function(){
    return this.elementName;
  };
  IncompleteAnnotationException.prototype.__class = new (__lc('java.lang.Class'))("java.lang.annotation.IncompleteAnnotationException", IncompleteAnnotationException, __lc("java.lang.RuntimeException").prototype.__class, [], 1);
  return  IncompleteAnnotationException;
})();