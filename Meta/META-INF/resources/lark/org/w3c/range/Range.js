(function(){ 
  function RangeException() {    
  __lc("java.lang.Exception", "java.lang.buildins").call(this, "1");
  }
  RangeException.prototype.__proto__ = __lc("java.lang.Exception").prototype;
  __cache["org.w3c.range.RangeException"] = RangeException;
  Object.defineProperty(RangeException.prototype, "code", {

  });
  RangeException.BAD_BOUNDARYPOINTS_ERR = 1;
  RangeException.INVALID_NODE_TYPE_ERR = 2;
  RangeException.__class = new (__lc('java.lang.Class'))("org.w3c.range.RangeException", RangeException, __lc("java.lang.Exception").prototype.__class, [], 1);
  return  RangeException;
})();
(function(){ 
  __cache["org.w3c.range.Range"] = Range;
  Object.defineProperty(Range.prototype, "startContainer", {

  });
  Object.defineProperty(Range.prototype, "startOffset", {

  });
  Object.defineProperty(Range.prototype, "endContainer", {

  });
  Object.defineProperty(Range.prototype, "endOffset", {

  });
  Object.defineProperty(Range.prototype, "collapsed", {

  });
  Object.defineProperty(Range.prototype, "commonAncestorContainer", {

  });
  Range.START_TO_START = 0;
  Range.START_TO_END = 1;
  Range.END_TO_END = 2;
  Range.END_TO_START = 3;
  Range.__class = new (__lc('java.lang.Class'))("org.w3c.range.Range", Range, Object.prototype.__class, [], 2);
  return  Range;
})();
