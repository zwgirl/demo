(function(){ 
  function AbstractSequentialList() {    
  __lc('java.util.AbstractList').call(this);
  }
  AbstractSequentialList.prototype.__proto__ = __lc("java.util.AbstractList", "java.util.AbstractList").prototype;
  __cache["java.util.AbstractSequentialList"] = AbstractSequentialList;
  AbstractSequentialList.prototype.get = function(index){
    try
    {
      return this.listIteratorAt(index).next();
    }catch(exc)
    {
      throw new Error(0, "index out of bound !");
    }
  };
  AbstractSequentialList.prototype.set = function(index, element){
    try
    {
      var e = this.listIteratorAt(index);
      var oldVal = e.next();
      e.set(element);
      return oldVal;
    }catch(exc)
    {
      throw new Error(0, "index out of bound !");
    }
  };
  AbstractSequentialList.prototype.addAt = function(index, element){
    try
    {
      this.listIteratorAt(index).add(element);
    }catch(exc)
    {
      throw new Error(0, "index out of bound !");
    }
  };
  AbstractSequentialList.prototype.removeAt = function(index){
    try
    {
      var e = this.listIteratorAt(index);
      var outCast = e.next();
      Iterator.prototype.remove();
      return outCast;
    }catch(exc)
    {
      throw new Error(0, "index out of bound !");
    }
  };
  AbstractSequentialList.prototype.addAllAt = function(index, c){
    try
    {
      var modified = false;
      var e1 = this.listIteratorAt(index);
      var e2 = c.iterator();
      while (e2.hasNext())

      {
        e1.add(e2.next());
        modified = true;
      }
      return modified;
    }catch(exc)
    {
      throw new Error(0, "index out of bound !");
    }
  };
  AbstractSequentialList.prototype.iterator = function(){
    return this.listIterator();
  };
  AbstractSequentialList.prototype.listIteratorAt = function(index){
  };
  AbstractSequentialList.prototype.__class = new (__lc('java.lang.Class'))("java.util.AbstractSequentialList", AbstractSequentialList, __lc("java.util.AbstractList", "java.util.AbstractList").prototype.__class, [], 1);
  return  AbstractSequentialList;
})();