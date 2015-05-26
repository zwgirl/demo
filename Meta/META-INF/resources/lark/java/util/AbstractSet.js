(function(){ 
  function AbstractSet() {    
  __lc("java.util.AbstractCollection", "java.util.AbstractCollection").call(this);
  }
  AbstractSet.prototype.__proto__ = __lc("java.util.AbstractCollection").prototype;
  __cache["java.util.AbstractSet"] = AbstractSet;
  AbstractSet.prototype.equals = function(o){
    if(o == this) return true
    if(! __lc("java.util.Set").__class.isInstance(o)) return false
    var c = o;
    if(c.size != this.size) return false
    try
    {
      return this.containsAll(c);
    }catch(unused)
    {
      return false;
    }
  };
  AbstractSet.prototype.removeAll = function(c){
    if(this.size > c.size)
    {
      for (var i = c.iterator(); i.hasNext(); ) 
        this.remove(i.next());
    }
    else
    {
      for (var i = this.iterator(); i.hasNext(); ) 
      {
        if(c.contains(i.next()))
        {
          __lc("java.util.Iterator").prototype.remove.call(i);
        }
      }
    }
  };
  AbstractSet.prototype.__readObject = function(json, handlers, obj) {
    __lc("java.util.AbstractCollection").prototype.__readObject(json, handlers, obj);};
  AbstractSet.prototype.__writeObject = function(obj, handlers) {
    __lc("java.util.AbstractCollection").prototype.__writeObject(obj, handlers);};
  AbstractSet.__class = new (__lc('java.lang.Class'))("java.util.AbstractSet", AbstractSet, __lc("java.util.AbstractCollection").__class, [__lc("java.util.Set").__class], 1);
  return  AbstractSet;
})();