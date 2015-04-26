(function(){ 
  function Collection(){};
  __cache["java.util.Collection"] = Collection;
  Object.defineProperty(Collection.prototype, "size", {

  });
  Collection.prototype.removeIf = function(filter){
    __lc("java.util.Objects").requireNonNull(filter);
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
  Collection.prototype.__class = new (__lc('java.lang.Class'))("java.util.Collection", Collection, Object.prototype.__class, [__lc("java.lang.Iterable").prototype.__class], 2);
  return  Collection;
})();