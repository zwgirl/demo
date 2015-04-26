(function(){ 
  function Iterator(){};
  __cache["java.util.Iterator"] = Iterator;
  Iterator.prototype.remove = function(){
    throw new (__lc('java.lang.UnsupportedOperationException'))("remove");
  };
  Iterator.prototype.forEachRemaining = function(action){
    __lc("java.util.Objects").requireNonNull(action);
    while (this.hasNext())
      action(this.next());
  };
  Iterator.prototype.__class = new (__lc('java.lang.Class'))("java.util.Iterator", Iterator, Object.prototype.__class, [], 2);
  return  Iterator;
})();