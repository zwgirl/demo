(function(){ 
  function AbstractCollection() {    
  }
  AbstractCollection.prototype.__proto__ = Object.prototype;
  __cache["java.util.AbstractCollection"] = AbstractCollection;
  AbstractCollection.prototype.iterator = function(){
  };
  AbstractCollection.prototype.isEmpty = function(){
    return this.size == 0;
  };
  AbstractCollection.prototype.toArray = function(){
    var r = new Array();
    var it = this.iterator();
    var i = 0;
    while (it.hasNext())

    {
      r[i ++] = it.next();
    }
    return r;
  };
  AbstractCollection.prototype.add = function(e){
    throw new (__lc("java.lang.UnsupportedOperationException"))();
  };
  AbstractCollection.prototype.containsAll = function(c){
    var __coll = c, __i = __coll.iterator();
    while(__i.hasNext()) {
      var e = __i.next();
      if(! this.contains(e)) return false;
    }
    return true;
  };
  AbstractCollection.prototype.addAll = function(c){
    var __coll = c, __i = __coll.iterator();
    while(__i.hasNext()) {
      var e = __i.next();
      this.add(e);
    }
  };
  AbstractCollection.prototype.removeAll = function(c){
    var it = this.iterator();
    while (it.hasNext())

    {
      if(c.contains(it.next()))
      {
        __lc("java.util.Iterator").prototype.remove.call(it);
      }
    }
  };
  AbstractCollection.prototype.retainAll = function(c){
    var modified = false;
    var it = this.iterator();
    while (it.hasNext())

    {
      if(! c.contains(it.next()))
      {
        __lc("java.util.Iterator").prototype.remove.call(it);
        modified = true;
      }
    }
    return modified;
  };
  AbstractCollection.prototype.clear = function(){
    var it = this.iterator();
    while (it.hasNext())

    {
      it.next();
      __lc("java.util.Iterator").prototype.remove.call(it);
    }
  };
  AbstractCollection.prototype.toString = function(){
    var it = this.iterator();
    if(! it.hasNext()) return "[]"
    var sb = new Array();
    sb.push("[");
    for (; ; ) 
    {
      var e = it.next();
      sb.push(e == this ? "(this Collection)" : e);
      if(! it.hasNext())
      {
        sb.push("]");
        return sb.join();
      }
      sb.push(",");
      sb.push(" ");
    }
  };
  AbstractCollection.prototype.__readObject = function(json, handlers, obj) {};
  AbstractCollection.prototype.__writeObject = function(obj, handlers) {};
  AbstractCollection.__class = new (__lc('java.lang.Class'))("java.util.AbstractCollection", AbstractCollection, Object.__class, [__lc("java.util.Collection").__class], 1);
  return  AbstractCollection;
})();