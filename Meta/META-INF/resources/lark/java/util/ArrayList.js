(function(){ 
  function ArrayList(){
    var args = Array.prototype.slice.call(arguments);
    return ArrayList.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  ArrayList.__f = {
    "0" : function() {    
    this.elements = null;
    this.elements = new Array();
  }, 
    "2" : function(c) {    
    this.elements = null;
    this.elements = c.toArray();
  }
  };
  ArrayList.prototype.__proto__ = Object.prototype;
  __cache["java.util.ArrayList"] = ArrayList;
  Object.defineProperty(ArrayList.prototype, "size", {
    get : function() {
      return this.elements.length;
    }
  });
  ArrayList.prototype.isEmpty = function(){
    return this.elements.length == 0;
  };
  ArrayList.prototype.contains = function(o){
    return this.indexOf(o) >= 0;
  };
  ArrayList.prototype.indexOf = function(o){
    if(o == null)
    {
      for (var i = 0; i < this.elements.length; i ++) 
        if(this.elements[i] == null) return i
    }
    else
    {
      for (var i = 0; i < this.elements.length; i ++) 
        if(o === this.elements[i]) return i
    }
    return - 1;
  };
  ArrayList.prototype.lastIndexOf = function(o){
    if(o == null)
    {
      for (var i = this.elements.length - 1; i >= 0; i --) 
        if(this.elements[i] == null) return i
    }
    else
    {
      for (var i = this.elements.length - 1; i >= 0; i --) 
        if(o === this.elements[i]) return i
    }
    return - 1;
  };
  ArrayList.prototype.clone = function(){
    throw new Error();
  };
  ArrayList.prototype.toArray = function(){
    return this.elements.slice();
  };
  ArrayList.prototype.get = function(index){
    rangeCheck.call(this, index);
    return this.elements[index];
  };
  ArrayList.prototype.set = function(index, element){
    rangeCheck.call(this, index);
    var oldValue = this.elements[index];
    this.elements[index] = element;
    return oldValue;
  };
  ArrayList.prototype.add = function(e){
    this.elements[this.elements.length ++] = e;
  };
  ArrayList.prototype.addAt = function(index, element){
    rangeCheckForAdd.call(this, index);
    this.elements.splice(index, 0, element);
  };
  ArrayList.prototype.removeAt = function(index){
    rangeCheck.call(this, index);
    var oldValue = this.elements[index];
    this.elements.splice(index, 1);
    return oldValue;
  };
  ArrayList.prototype.remove = function(o){
    if(o == null)
    {
      for (var index = 0; index < this.elements.length; index ++) 
        if(this.elements[index] == null)
        {
          fastRemove.call(this, index);
          return true;
        }
    }
    else
    {
      for (var index = 0; index < this.elements.length; index ++) 
        if(o === this.elements[index])
        {
          fastRemove.call(this, index);
          return true;
        }
    }
    return false;
  };
  function fastRemove(index){
    this.elements.splice(index, 1);
  }
  ArrayList.prototype.clear = function(){
    this.elements.length = 0;
  };
  ArrayList.prototype.addAll = function(c){
    internalAddAllAt.call(this, 0, c.toArray());
  };
  ArrayList.prototype.addAllAt = function(index, c){
    rangeCheckForAdd.call(this, index);
    internalAddAllAt.call(this, index, c.toArray());
  };
  function internalAddAllAt(index, a){
    var t1 = this.elements.slice(0, index);
    var t2 = this.elements.slice(index);
    this.elements = t1.concat(a).concat(t2);
    return a.length != 0;
  }
  ArrayList.prototype.removeRange = function(fromIndex, toIndex){
    this.elements.splice(fromIndex, toIndex - fromIndex);
  };
  function rangeCheck(index){
    if(index >= this.elements.length) throw new Error(0, "Index out of boundsException! " + outOfBoundsMsg.call(this, index))
  }
  function rangeCheckForAdd(index){
    if(index > this.elements.length || index < 0) throw new Error(0, "Index out of boundsException! " + outOfBoundsMsg.call(this, index))
  }
  function outOfBoundsMsg(index){
    return "Index: " + index + ", Size: " + this.elements.length;
  }
  ArrayList.prototype.removeAll = function(c){
    if(c == null) throw new Error(0, "c may not be null!")
    batchRemove.call(this, c, false);
  };
  ArrayList.prototype.retainAll = function(c){
    if(c == null) throw new Error(0, "c may not be null!")
    return batchRemove.call(this, c, true);
  };
  function batchRemove(c, complement){
    var elementData = this.elements;
    var r = 0;
    var w = 0;
    var modified = false;
    var targets = c["elements"];
    for (var i = 0; i < targets.length; i ++) 
    {
      for (var j = 0; j < elementData.length; j ++) 
      {
        if(targets[i] === elementData[j])
        {
          elementData.splice(j, 1);
          break;
        }
      }
    }
    return modified;
  }
  ArrayList.prototype.listIteratorAt = function(index){
    if(index < 0 || index > this.elements.length) throw new Error(0, "Index out of boundsException! " + outOfBoundsMsg.call(this, index))
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
    ArrayList.subListRangeCheck(fromIndex, toIndex, this.elements.length);
    var r = new (ArrayList)("0");
    r["elements"] = this.elements.slice(fromIndex, toIndex);
    return r;
  };
  ArrayList.subListRangeCheck = function(fromIndex, toIndex, size){
    if(fromIndex < 0) throw new Error(0, "fromIndex out of boundsException! ")
    if(toIndex > size) throw new Error(0, "toIndex out of boundsException! ")
    if(fromIndex > toIndex) throw new (__lc("java.lang.IllegalArgumentException"))("fromIndex(" + fromIndex + ") > toIndex(" + toIndex + ")")
  };
  ArrayList.prototype.replaceAll = function(operator){
    var size = this.elements.length;
    for (var i = 0; i < size; i ++) 
    {
      this.elements[i] = operator(this.elements[i]);
    }
  };
  ArrayList.prototype.sort = function(c){
    this.elements.sort(c);
  };
  ArrayList.prototype.containsAll = function(c){
    return false;
  };
  ArrayList.prototype.equals = function(o){
    return false;
  };
  ArrayList.Itr = (function(){
    function Itr() {      
      this.cursor = 0;
      this.lastRet = - 1;
    }
    Itr.prototype.__proto__ = Object.prototype;
    __cache["java.util.ArrayList$Itr"] = Itr;
    Itr.prototype.hasNext = function(){
      return this.cursor != this.__enclosing.elements.length;
    };
    Itr.prototype.next = function(){
      var i = this.cursor;
      if(i >= this.__enclosing.elements.length) throw new (__lc("java.util.NoSuchElementException", "java.util.NoSuchElementException"))()
      var elements = this.__enclosing.elements;
      this.cursor = i + 1;
      return elements[this.lastRet = i];
    };
    Itr.prototype.remove = function(){
      if(this.lastRet < 0) throw new (__lc("java.lang.IllegalStateException"))()
      this.__enclosing.remove(this.lastRet);
      this.cursor = this.lastRet;
      this.lastRet = - 1;
    };
    Itr.prototype.forEachRemaining = function(consumer){
      if(consumer == null) throw new Error(1, "consumer may not be null!")
      var size = this.__enclosing.elements.length;
      var i = this.cursor;
      if(i >= size)
      {
        return;
      }
      var elements = this.__enclosing.elements;
      while (i != size)

      {
        consumer(elements[i ++]);
      }
      this.cursor = i;
      this.lastRet = i - 1;
    };
    Itr.__class = new (__lc('java.lang.Class'))("java.util.ArrayList$Itr", Itr, Object.__class, [__lc("java.util.Iterator").__class], 1);
    return  Itr;
    return Itr;
  })();
  ArrayList.ListItr = (function(){
    function ListItr(index) {      
    __lc("java.util.ArrayList$Itr", "java.util.ArrayList").call(this);
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
      if(i < 0) throw new (__lc("java.util.NoSuchElementException", "java.util.NoSuchElementException"))()
      var elementData = this.__enclosing.elements;
      this.cursor = i;
      return elementData[this.lastRet = i];
    };
    ListItr.prototype.set = function(e){
      if(this.lastRet < 0) throw new (__lc("java.lang.IllegalStateException"))()
      this.__enclosing.set(this.lastRet, e);
    };
    ListItr.prototype.add = function(e){
      var i = this.cursor;
      this.__enclosing.addAt(i, e);
      this.cursor = i + 1;
      this.lastRet = - 1;
    };
    ListItr.__class = new (__lc('java.lang.Class'))("java.util.ArrayList$ListItr", ListItr, __lc("java.util.ArrayList").Itr.__class, [__lc("java.util.ListIterator").__class], 1);
    return  ListItr;
    return ListItr;
  })();
  ArrayList.prototype.__readObject = function(json, handlers, obj) {
    var __propVal = null;
        __propVal = json["elements"];
    obj["elements"] = __propVal == null ? null : handlers[__propVal];
  };
  ArrayList.prototype.__writeObject = function(obj, handlers) {
    var __r = {"__clazz" : "java.util.ArrayList"};
    var __propVal = null;
    __propVal = obj["elements"];
    __r["elements"] = __propVal == null ? null : handlers.shared(__propVal);
    return __r;
  };
  ArrayList.__class = new (__lc('java.lang.Class'))("java.util.ArrayList", ArrayList, Object.__class, [__lc("java.util.List").__class], 1);
  return  ArrayList;
})();