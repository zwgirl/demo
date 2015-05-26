(function(){ 
  function Collection(){};
  __cache["java.util.Collection"] = Collection;
  Object.defineProperty(Collection.prototype, "size", {

  });
  Collection.prototype.removeIf = function(filter){
    var removed = false;
    var each = this.iterator();
    while (each.hasNext())

    {
      if(filter(each.next()))
      {
        __lc("java.util.Iterator").prototype.remove.call(each);
        removed = true;
      }
    }
    return removed;
  };
  Collection.prototype.__readObject = function(json, handlers, obj) {
    var __propVal = null;
  };
  Collection.prototype.__writeObject = function(obj, handlers) {
    var __r = {"__clazz" : "java.util.Collection"};
    var __propVal = null;
    return __r;
  };
  Collection.__class = new (__lc('java.lang.Class'))("java.util.Collection", Collection, Object.__class, [__lc("java.lang.Iterable").__class], 2);
  return  Collection;
})();