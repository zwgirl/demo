(function(){ 
  function ArrayList(){
    var args = Array.prototype.slice.call(arguments);
    return ArrayList.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  ArrayList.__f = {
    "1" : function(initialCapacity) {    
  __lc('java.util.AbstractList').call(this);
    this.elementData = null;
    this._size = 0;
    if(initialCapacity < 0) throw new (__lc('java.lang.IllegalArgumentException'))("Illegal Capacity: " + initialCapacity)
    this.elementData = new Array();
  }, 
    "2" : function() {    
  __lc('java.util.AbstractList').call(this);
    this.elementData = null;
    this._size = 0;
    this.elementData = new Array();
  }, 
    "3" : function(c) {    
  __lc('java.util.AbstractList').call(this);
    this.elementData = null;
    this._size = 0;
    this.elementData = c.toArray();
    this._size = this.elementData.length;
  }
  };
  ArrayList.prototype.__proto__ = __lc("java.util.AbstractList", "java.util.AbstractList").prototype;
  __cache["java.util.ArrayList"] = ArrayList;
  Object.defineProperty(ArrayList.prototype, "size", {
    get : function() {
      return this._size;
    }, 
    set : function(value) {
      this._size = value;
    }
  });
  ArrayList.prototype.isEmpty = function(){
    return this._size == 0;
  };
  ArrayList.prototype.contains = function(o){
    return this.indexOf(o) >= 0;
  };
  ArrayList.prototype.indexOf = function(o){
    if(o == null)
    {
      for (var i = 0; i < this._size; i ++) 
        if(this.elementData[i] == null) return i;
    }
    else
    {
      for (var i = 0; i < this._size; i ++) 
        if(o === this.elementData[i]) return i;
    }
    return - 1;
  };
  ArrayList.prototype.lastIndexOf = function(o){
    if(o == null)
    {
      for (var i = this._size - 1; i >= 0; i --) 
        if(this.elementData[i] == null) return i;
    }
    else
    {
      for (var i = this._size - 1; i >= 0; i --) 
        if(o === this.elementData[i]) return i;
    }
    return - 1;
  };
  ArrayList.prototype.clone = function(){
    throw new Error();
  };
  ArrayList.prototype.toArray = function(){
    return this.elementData.slice();
  };
  ArrayList.prototype.get = function(index){
    rangeCheck.call(this, index);
    return this.elementData[index];
  };
  ArrayList.prototype.set = function(index, element){
    rangeCheck.call(this, index);
    var oldValue = this.elementData[index];
    this.elementData[index] = element;
    return oldValue;
  };
  ArrayList.prototype.add = function(e){
    this.elementData[this._size ++] = e;
    return true;
  };
  ArrayList.prototype.addAt = function(index, element){
    rangeCheckForAdd.call(this, index);
    this.elementData.splice(index, 0, element);
    this.size ++;
  };
  ArrayList.prototype.removeAt = function(index){
    rangeCheck.call(this, index);
    var oldValue = this.elementData[index];
    this.elementData.splice(index, 1);
    this._size --;
    return oldValue;
  };
  ArrayList.prototype.remove = function(o){
    if(o == null)
    {
      for (var index = 0; index < this._size; index ++) 
        if(this.elementData[index] == null)
        {
          fastRemove.call(this, index);
          return true;
        }
    }
    else
    {
      for (var index = 0; index < this._size; index ++) 
        if(o === this.elementData[index])
        {
          fastRemove.call(this, index);
          return true;
        }
    }
    return false;
  };
  function fastRemove(index){
    this._size --;
    this.elementData.splice(index, 1);
  }
  ArrayList.prototype.clear = function(){
    this.elementData.length = 0;
    this._size = 0;
  };
  ArrayList.prototype.addAll = function(c){
    return internalAddAllAt.call(this, 0, c.toArray());
  };
  ArrayList.prototype.addAllAt = function(index, c){
    rangeCheckForAdd.call(this, index);
    return internalAddAllAt.call(this, index, c.toArray());
  };
  function internalAddAllAt(index, a){
    var t1 = this.elementData.slice(0, index);
    var t2 = this.elementData.slice(index);
    this.elementData = t1.concat(a).concat(t2);
    this._size = a.length;
    return a.length != 0;
  }
  ArrayList.prototype.removeRange = function(fromIndex, toIndex){
    this.elementData.splice(fromIndex, toIndex - fromIndex);
    this._size = toIndex - fromIndex;
  };
  function rangeCheck(index){
    if(index >= this._size) throw new Error(0, "Index out of boundsException! " + outOfBoundsMsg.call(this, index))
  }
  function rangeCheckForAdd(index){
    if(index > this._size || index < 0) throw new Error(0, "Index out of boundsException! " + outOfBoundsMsg.call(this, index))
  }
  function outOfBoundsMsg(index){
    return "Index: " + index + ", Size: " + this._size;
  }
  ArrayList.prototype.removeAll = function(c){
    if(c == null) throw new Error(0, "c may not be null!")
    return batchRemove.call(this, c, false);
  };
  ArrayList.prototype.retainAll = function(c){
    if(c == null) throw new Error(0, "c may not be null!")
    return batchRemove.call(this, c, true);
  };
  function batchRemove(c, complement){
    var elementData = this.elementData;
    var r = 0;
    var w = 0;
    var modified = false;
    try
    {
      for (; r < this._size; r ++) 
        if(c.contains(elementData[r]) == complement) elementData[w ++] = elementData[r]
    }
    finally
    {
      if(r != this._size)
      {
        elementData.concat(elementData.slice(r, this._size));
        w = this._size - r;
      }
      if(w != this._size)
      {
        for (var i = w; i < this._size; i ++) 
          elementData[i] = null;
        this._size = w;
        modified = true;
      }
    }
    return modified;
  }
  ArrayList.prototype.listIteratorAt = function(index){
    if(index < 0 || index > this._size) throw new Error(0, "Index out of boundsException! " + outOfBoundsMsg.call(this, index))
    return (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.ArrayList$ListItr').prototype};
      __lc('java.util.ArrayList$ListItr').apply(r, arguments);
      return r;
    }).call(this, index);
  };
  ArrayList.prototype.listIterator = function(){
    return (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.ArrayList$ListItr').prototype};
      __lc('java.util.ArrayList$ListItr').apply(r, arguments);
      return r;
    }).call(this, 0);
  };
  ArrayList.prototype.iterator = function(){
    return (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.ArrayList$Itr').prototype};
      __lc('java.util.ArrayList$Itr').apply(r, arguments);
      return r;
    }).call(this);
  };
  ArrayList.prototype.subList = function(fromIndex, toIndex){
    ArrayList.subListRangeCheck(fromIndex, toIndex, this._size);
    return (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.ArrayList$SubList').prototype};
      __lc('java.util.ArrayList$SubList').apply(r, arguments);
      return r;
    }).call(this, this, 0, fromIndex, toIndex);
  };
  ArrayList.subListRangeCheck = function(fromIndex, toIndex, size){
    if(fromIndex < 0) throw new Error(0, "fromIndex out of boundsException! ")
    if(toIndex > size) throw new Error(0, "toIndex out of boundsException! ")
    if(fromIndex > toIndex) throw new (__lc('java.lang.IllegalArgumentException'))("fromIndex(" + fromIndex + ") > toIndex(" + toIndex + ")")
  };
  ArrayList.prototype.forEach = function(action){
    var size = this._size;
    for (var i = 0; i < size; i ++) 
    {
      action(this.elementData[i]);
    }
  };
  ArrayList.prototype.removeIf = function(filter){
    var removeCount = 0;
    var removeSet = new (__lc('java.util.BitSet'))(this.size);
    var size = this._size;
    for (var i = 0; i < size; i ++) 
    {
      var element = this.elementData[i];
      if(filter(element))
      {
        removeSet.set(i);
        removeCount ++;
      }
    }
    var anyToRemove = removeCount > 0;
    if(anyToRemove)
    {
      var newSize = size - removeCount;
      for (var i = 0, j = 0; (i < size) && (j < newSize); i ++, j ++) 
      {
        i = removeSet.nextClearBit(i);
        this.elementData[j] = this.elementData[i];
      }
      for (var k = newSize; k < size; k ++) 
      {
        this.elementData[k] = null;
      }
      this.size = newSize;
    }
    return anyToRemove;
  };
  ArrayList.prototype.replaceAll = function(operator){
    var size = this._size;
    for (var i = 0; i < size; i ++) 
    {
      this.elementData[i] = operator(this.elementData[i]);
    }
  };
  ArrayList.prototype.sort = function(c){
    this.elementData.sort(c);
  };
  ArrayList.serialVersionUID = 8683452581122892189;
  ArrayList.Itr = (function(){
    function Itr() {      
      this.cursor = 0;
      this.lastRet = - 1;
    }
    Itr.prototype.__proto__ = Object.prototype;
    __cache["java.util.ArrayList$Itr"] = Itr;
    Itr.prototype.hasNext = function(){
      return this.cursor != this.__enclosing._size;
    };
    Itr.prototype.next = function(){
      var i = this.cursor;
      if(i >= this.__enclosing._size) throw new (__lc('java.util.NoSuchElementException'))()
      var elementData = this.__enclosing.elementData;
      this.cursor = i + 1;
      return elementData[this.lastRet = i];
    };
    Itr.prototype.remove = function(){
      if(this.lastRet < 0) throw new (__lc('java.lang.IllegalStateException'))()
      this.__enclosing.remove(this.lastRet);
      this.cursor = this.lastRet;
      this.lastRet = - 1;
    };
    Itr.prototype.forEachRemaining = function(consumer){
      if(consumer == null) throw new Error(1, "consumer may not be null!")
      var size = this.__enclosing._size;
      var i = this.cursor;
      if(i >= size)
      {
        return;
      }
      var elementData = this.__enclosing.elementData;
      while (i != size)

      {
        consumer(elementData[i ++]);
      }
      this.cursor = i;
      this.lastRet = i - 1;
    };
    Itr.prototype.__class = new (__lc('java.lang.Class'))("java.util.ArrayList$Itr", Itr, Object.prototype.__class, [__lc("java.util.Iterator").prototype.__class], 1);
    return  Itr;
    return Itr;
  })();
  ArrayList.ListItr = (function(){
    function ListItr(index) {      
    (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.ArrayList').Itr.prototype};
      Itr.apply(r, arguments);
      return r;
    }).call(this);
      this.cursor = index;
    }
    ListItr.prototype.__proto__ = __lc("java.util.ArrayList").Itr.prototype;
    __cache["java.util.ArrayList$ListItr"] = ListItr;
    ListItr.prototype.hasPrevious = function(){
      return this.cursor != 0;
    };
    ListItr.prototype.nextIndex = function(){
      return this.cursor;
    };
    ListItr.prototype.previousIndex = function(){
      return this.cursor - 1;
    };
    ListItr.prototype.previous = function(){
      var i = this.cursor - 1;
      if(i < 0) throw new (__lc('java.util.NoSuchElementException'))()
      var elementData = this.__enclosing.elementData;
      this.cursor = i;
      return elementData[this.lastRet = i];
    };
    ListItr.prototype.set = function(e){
      if(this.lastRet < 0) throw new (__lc('java.lang.IllegalStateException'))()
      this.__enclosing.set(this.lastRet, e);
    };
    ListItr.prototype.add = function(e){
      var i = this.cursor;
      this.__enclosing.addAt(i, e);
      this.cursor = i + 1;
      this.lastRet = - 1;
    };
    ListItr.prototype.__class = new (__lc('java.lang.Class'))("java.util.ArrayList$ListItr", ListItr, __lc("java.util.ArrayList").Itr.prototype.__class, [__lc("java.util.ListIterator").prototype.__class], 1);
    return  ListItr;
    return ListItr;
  })();
  ArrayList.SubList = (function(){
    function SubList(parent, offset, fromIndex, toIndex) {      
    __lc('java.util.AbstractList').call(this);
      this.parent = null;
      this.parentOffset = 0;
      this.offset = 0;
      this._size = 0;
      this.parent = parent;
      this.parentOffset = fromIndex;
      this.offset = offset + fromIndex;
      this._size = toIndex - fromIndex;
    }
    SubList.prototype.__proto__ = __lc("java.util.AbstractList", "java.util.AbstractList").prototype;
    __cache["java.util.ArrayList$SubList"] = SubList;
    Object.defineProperty(SubList.prototype, "size", {
      get : function() {
        return this._size;
      }
    });
    SubList.prototype.set = function(index, e){
      rangeCheck.call(this, index);
      var oldValue = this.__enclosing.elementData[this.offset + index];
      this.__enclosing.elementData[this.offset + index] = e;
      return oldValue;
    };
    SubList.prototype.get = function(index){
      rangeCheck.call(this, index);
      return this.__enclosing.elementData[this.offset + index];
    };
    SubList.prototype.add = function(index, e){
      rangeCheckForAdd.call(this, index);
      this.parent.addAt(this.parentOffset + index, e);
      this._size ++;
    };
    SubList.prototype.remove = function(index){
      rangeCheck.call(this, index);
      var result = this.parent.removeAt(this.parentOffset + index);
      this._size --;
      return result;
    };
    SubList.prototype.removeRange = function(fromIndex, toIndex){
      this.parent.removeRange(this.parentOffset + fromIndex, this.parentOffset + toIndex);
      this._size = toIndex - fromIndex;
    };
    SubList.prototype.addAll = function(c){
      return this.addAllAt(this.size, c);
    };
    SubList.prototype.addAllAt = function(index, c){
      rangeCheckForAdd.call(this, index);
      var cSize = c.size;
      if(cSize == 0) return false;
      this.parent.addAllAt(this.parentOffset + index, c);
      this._size = cSize;
      return true;
    };
    SubList.prototype.iterator = function(){
      return this.listIterator();
    };
    SubList.prototype.listIteratorAt = function(index){
      rangeCheckForAdd.call(this, index);
      var offset = this.offset;
      return new ((function() {
        function Anonym() {          
          this.cursor = index;
          this.lastRet = - 1;
        }
        Anonym.prototype.__proto__ = Object.prototype;
        __cache["java.util.ArrayList$SubList$1"] = Anonym;
        Anonym.prototype.hasNext = function(){
          return this.cursor != this.__enclosing.size;
        };
        Anonym.prototype.next = function(){
          var i = this.cursor;
          if(i >= this.__enclosing.size) throw new (__lc('java.util.NoSuchElementException'))()
          var elementData = this.__enclosing__enclosing.elementData;
          this.cursor = i + 1;
          return elementData[offset + (this.lastRet = i)];
        };
        Anonym.prototype.hasPrevious = function(){
          return this.cursor != 0;
        };
        Anonym.prototype.previous = function(){
          var i = this.cursor - 1;
          if(i < 0) throw new (__lc('java.util.NoSuchElementException'))()
          var elementData = this.__enclosing__enclosing.elementData;
          this.cursor = i;
          return elementData[offset + (this.lastRet = i)];
        };
        Anonym.prototype.forEachRemaining = function(consumer){
          if(consumer == null) throw new Error(0, "consumer may not be null!")
          var size = this.__enclosing._size;
          var i = this.cursor;
          if(i >= size)
          {
            return;
          }
          var elementData = this.__enclosing__enclosing.elementData;
          while (i != size)

          {
            consumer(elementData[offset + (i ++)]);
          }
          this.lastRet = this.cursor = i;
        };
        Anonym.prototype.nextIndex = function(){
          return this.cursor;
        };
        Anonym.prototype.previousIndex = function(){
          return this.cursor - 1;
        };
        Anonym.prototype.remove = function(){
          if(this.lastRet < 0) throw new (__lc('java.lang.IllegalStateException'))()
          this.__enclosing.remove(this.lastRet);
          this.cursor = this.lastRet;
          this.lastRet = - 1;
        };
        Anonym.prototype.set = function(e){
          if(this.lastRet < 0) throw new (__lc('java.lang.IllegalStateException'))()
          this.__enclosing__enclosing.set(offset + this.lastRet, e);
        };
        Anonym.prototype.add = function(e){
          var i = this.cursor;
          this.__enclosing.add(i, e);
          this.cursor = i + 1;
          this.lastRet = - 1;
        };
        Anonym.prototype.__class = new (__lc('java.lang.Class'))("java.util.ArrayList$SubList$1", Anonym, Object.prototype.__class, [__lc("java.util.ListIterator").prototype.__class], 1);
        return  Anonym;
        return ;
      })())();
    };
    SubList.prototype.subList = function(fromIndex, toIndex){
      __lc("java.util.ArrayList").subListRangeCheck(fromIndex, toIndex, this._size);
      return (function(){
        var r = {__enclosing : this, __proto__: __lc('java.util.ArrayList$SubList').prototype};
        __lc('java.util.ArrayList$SubList').apply(r, arguments);
        return r;
      }).call(this, this, this.offset, fromIndex, toIndex);
    };
    function rangeCheck(index){
      if(index < 0 || index >= this._size) throw new Error(0, "Index out of boundsException! " + outOfBoundsMsg.call(this, index))
    }
    function rangeCheckForAdd(index){
      if(index < 0 || index > this._size) throw new Error(0, "Index out of boundsException! " + outOfBoundsMsg.call(this, index))
    }
    function outOfBoundsMsg(index){
      return "Index: " + index + ", Size: " + this._size;
    }
    SubList.prototype.__class = new (__lc('java.lang.Class'))("java.util.ArrayList$SubList", SubList, __lc("java.util.AbstractList", "java.util.AbstractList").prototype.__class, [], 1);
    return  SubList;
    return SubList;
  })();
  ArrayList.prototype.__class = new (__lc('java.lang.Class'))("java.util.ArrayList", ArrayList, __lc("java.util.AbstractList", "java.util.AbstractList").prototype.__class, [__lc("java.util.List").prototype.__class, __lc("java.lang.Cloneable").prototype.__class, __lc("java.io.Serializable").prototype.__class], 1);
  return  ArrayList;
})();