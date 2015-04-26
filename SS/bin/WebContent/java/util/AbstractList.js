(function(){ 
  function AbstractList() {    
  __lc('java.util.AbstractCollection').call(this);
  }
  AbstractList.prototype.__proto__ = __lc("java.util.AbstractCollection", "java.util.AbstractCollection").prototype;
  __cache["java.util.AbstractList"] = AbstractList;
  AbstractList.prototype.add = function(e){
    this.addAt(this.size, e);
    return true;
  };
  AbstractList.prototype.addAt = function(index, element){
    throw new (__lc('java.lang.UnsupportedOperationException'))();
  };
  AbstractList.prototype.get = function(index){
  };
  AbstractList.prototype.set = function(index, element){
    throw new (__lc('java.lang.UnsupportedOperationException'))();
  };
  AbstractList.prototype.removeAt = function(index){
    throw new (__lc('java.lang.UnsupportedOperationException'))();
  };
  AbstractList.prototype.indexOf = function(o){
    var it = this.listIterator();
    if(o == null)
    {
      while (it.hasNext())
        if(it.next() == null) return it.previousIndex();
    }
    else
    {
      while (it.hasNext())
        if(o.equals(it.next())) return it.previousIndex();
    }
    return - 1;
  };
  AbstractList.prototype.lastIndexOf = function(o){
    var it = this.listIteratorAt(this.size);
    if(o == null)
    {
      while (it.hasPrevious())
        if(it.previous() == null) return it.nextIndex();
    }
    else
    {
      while (it.hasPrevious())
        if(o.equals(it.previous())) return it.nextIndex();
    }
    return - 1;
  };
  AbstractList.prototype.clear = function(){
    this.removeRange(0, this.size);
  };
  AbstractList.prototype.addAllAt = function(index, c){
    rangeCheckForAdd.call(this, index);
    var modified = false;
    var __coll = c, __i = __coll.iterator();
    while(__i.hasNext()) {
      var e = __i.next();
      this.addAt(index ++, e);
      modified = true;
    }
    return modified;
  };
  AbstractList.prototype.iterator = function(){
    return (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.AbstractList$Itr').prototype};
      __lc('java.util.AbstractList$Itr').apply(r, arguments);
      return r;
    }).call(this);
  };
  AbstractList.prototype.listIterator = function(){
    return this.listIteratorAt(0);
  };
  AbstractList.prototype.listIteratorAt = function(index){
    rangeCheckForAdd.call(this, index);
    return (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.AbstractList$ListItr').prototype};
      __lc('java.util.AbstractList$ListItr').apply(r, arguments);
      return r;
    }).call(this, index);
  };
  AbstractList.prototype.subList = function(fromIndex, toIndex){
    return new (__lc('java.util.SubList'))(this, fromIndex, toIndex);
  };
  AbstractList.prototype.equals = function(o){
    if(o == this) return true;
    if(! __lc("java.util.List").prototype.__class.isInstance(o)) return false;
    var e1 = this.listIterator();
    var e2 = o.listIterator();
    while (e1.hasNext() && e2.hasNext())

    {
      var o1 = e1.next();
      var o2 = e2.next();
      if(! o1 == null ? o2 == null : o1.equals(o2)) return false;
    }
    return ! e1.hasNext() || e2.hasNext();
  };
  AbstractList.prototype.hashCode = function(){
    var hashCode = 1;
    var __coll = this, __i = __coll.iterator();
    while(__i.hasNext()) {
      var e = __i.next();
      hashCode = 31 * hashCode + (e == null ? 0 : e.hashCode());
    }
    return hashCode;
  };
  AbstractList.prototype.removeRange = function(fromIndex, toIndex){
    var it = this.listIteratorAt(fromIndex);
    for (var i = 0, n = toIndex - fromIndex; i < n; i ++) 
    {
      it.next();
      Iterator.prototype.remove();
    }
  };
  function rangeCheckForAdd(index){
    if(index < 0 || index > this.size) throw new Error(0, "Index out of boundsException" + outOfBoundsMsg.call(this, index))
  }
  function outOfBoundsMsg(index){
    return "Index: " + index + ", Size: " + this.size;
  }
  AbstractList.Itr = (function(){
    function Itr() {      
      this.cursor = 0;
      this.lastRet = - 1;
    }
    Itr.prototype.__proto__ = Object.prototype;
    __cache["java.util.AbstractList$Itr"] = Itr;
    Itr.prototype.hasNext = function(){
      return this.cursor != this.__enclosing.size;
    };
    Itr.prototype.next = function(){
      var i = this.cursor;
      var next = this.__enclosing.get(i);
      this.lastRet = i;
      this.cursor = i + 1;
      return next;
    };
    Itr.prototype.remove = function(){
      if(this.lastRet < 0) throw new (__lc('java.lang.IllegalStateException'))()
      this.__enclosing.remove(this.lastRet);
      if(this.lastRet < this.cursor) this.cursor --
      this.lastRet = - 1;
    };
    Itr.prototype.__class = new (__lc('java.lang.Class'))("java.util.AbstractList$Itr", Itr, Object.prototype.__class, [__lc("java.util.Iterator").prototype.__class], 1);
    return  Itr;
    return Itr;
  })();
  AbstractList.ListItr = (function(){
    function ListItr(index) {      
    (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.AbstractList').Itr.prototype};
      Itr.apply(r, arguments);
      return r;
    }).call(this);
      this.cursor = index;
    }
    ListItr.prototype.__proto__ = __lc("java.util.AbstractList").Itr.prototype;
    __cache["java.util.AbstractList$ListItr"] = ListItr;
    ListItr.prototype.hasPrevious = function(){
      return this.cursor != 0;
    };
    ListItr.prototype.previous = function(){
      try
      {
        var i = this.cursor - 1;
        var previous = this.__enclosing.get(i);
        this.lastRet = this.cursor = i;
        return previous;
      }catch(e)
      {
        throw new (__lc('java.util.NoSuchElementException'))();
      }
    };
    ListItr.prototype.nextIndex = function(){
      return this.cursor;
    };
    ListItr.prototype.previousIndex = function(){
      return this.cursor - 1;
    };
    ListItr.prototype.set = function(e){
      if(this.lastRet < 0) throw new (__lc('java.lang.IllegalStateException'))()
      this.__enclosing.set(this.lastRet, e);
    };
    ListItr.prototype.add = function(e){
      var i = this.cursor;
      this.__enclosing.addAt(i, e);
      this.lastRet = - 1;
      this.cursor = i + 1;
    };
    ListItr.prototype.__class = new (__lc('java.lang.Class'))("java.util.AbstractList$ListItr", ListItr, __lc("java.util.AbstractList").Itr.prototype.__class, [__lc("java.util.ListIterator").prototype.__class], 1);
    return  ListItr;
    return ListItr;
  })();
  AbstractList.prototype.__class = new (__lc('java.lang.Class'))("java.util.AbstractList", AbstractList, __lc("java.util.AbstractCollection", "java.util.AbstractCollection").prototype.__class, [__lc("java.util.List").prototype.__class], 1);
  return  AbstractList;
})();