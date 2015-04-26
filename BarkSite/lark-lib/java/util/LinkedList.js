(function(){ 
  function LinkedList(){
    var args = Array.prototype.slice.call(arguments);
    return LinkedList.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  LinkedList.__f = {
    "null" : function() {    
  __lc('java.util.AbstractSequentialList').call(this);
    this._size = 0;
    this.first = null;
    this.last = null;
  }, 
    "null" : function(c) {    
LinkedList.call(this);
    this._size = 0;
    this.first = null;
    this.last = null;
    this.addAll(c);
  }
  };
  LinkedList.prototype.__proto__ = __lc("java.util.AbstractSequentialList").prototype;
  __cache["java.util.LinkedList"] = LinkedList;
  Object.defineProperty(LinkedList.prototype, "size", {
    get : function() {
      return this._size;
    }
  });
  function linkFirst(e){
    var f = this.first;
    var newNode = (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.LinkedList$Node').prototype};
      __lc('java.util.LinkedList$Node').apply(r, arguments);
      return r;
    }).call(this, null, e, f);
    this.first = newNode;
    if(f == null) this.last = newNode
    else f.prev = newNode
    this._size ++;
  }
  LinkedList.prototype.linkLast = function(e){
    var l = this.last;
    var newNode = (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.LinkedList$Node').prototype};
      __lc('java.util.LinkedList$Node').apply(r, arguments);
      return r;
    }).call(this, l, e, null);
    this.last = newNode;
    if(l == null) this.first = newNode
    else l.next = newNode
    this._size ++;
  };
  LinkedList.prototype.linkBefore = function(e, succ){
    var pred = succ.prev;
    var newNode = (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.LinkedList$Node').prototype};
      __lc('java.util.LinkedList$Node').apply(r, arguments);
      return r;
    }).call(this, pred, e, succ);
    succ.prev = newNode;
    if(pred == null) this.first = newNode
    else pred.next = newNode
    this._size ++;
  };
  function unlinkFirst(f){
    var element = f.item;
    var next = f.next;
    f.item = null;
    f.next = null;
    this.first = next;
    if(next == null) this.last = null
    else next.prev = null
    this._size --;
    return element;
  }
  function unlinkLast(l){
    var element = l.item;
    var prev = l.prev;
    l.item = null;
    l.prev = null;
    this.last = prev;
    if(prev == null) this.first = null
    else prev.next = null
    this._size --;
    return element;
  }
  LinkedList.prototype.unlink = function(x){
    var element = x.item;
    var next = x.next;
    var prev = x.prev;
    if(prev == null)
    {
      this.first = next;
    }
    else
    {
      prev.next = next;
      x.prev = null;
    }
    if(next == null)
    {
      this.last = prev;
    }
    else
    {
      next.prev = prev;
      x.next = null;
    }
    x.item = null;
    this._size --;
    return element;
  };
  LinkedList.prototype.getFirst = function(){
    var f = this.first;
    if(f == null) throw new (__lc('java.util.NoSuchElementException'))()
    return f.item;
  };
  LinkedList.prototype.getLast = function(){
    var l = this.last;
    if(l == null) throw new (__lc('java.util.NoSuchElementException'))()
    return l.item;
  };
  LinkedList.prototype.removeFirst = function(){
    var f = this.first;
    if(f == null) throw new (__lc('java.util.NoSuchElementException'))()
    return unlinkFirst.call(this, f);
  };
  LinkedList.prototype.removeLast = function(){
    var l = this.last;
    if(l == null) throw new (__lc('java.util.NoSuchElementException'))()
    return unlinkLast.call(this, l);
  };
  LinkedList.prototype.addFirst = function(e){
    linkFirst.call(this, e);
  };
  LinkedList.prototype.addLast = function(e){
    this.linkLast(e);
  };
  LinkedList.prototype.contains = function(o){
    return this.indexOf(o) != - 1;
  };
  LinkedList.prototype.size = function(){
    return this.size;
  };
  LinkedList.prototype.add = function(e){
    this.linkLast(e);
    return true;
  };
  LinkedList.prototype.remove = function(o){
    if(o == null)
    {
      for (var x = this.first; x != null; x = x.next) 
      {
        if(x.item == null)
        {
          this.unlink(x);
          return true;
        }
      }
    }
    else
    {
      for (var x = this.first; x != null; x = x.next) 
      {
        if(o.equals(x.item))
        {
          this.unlink(x);
          return true;
        }
      }
    }
    return false;
  };
  LinkedList.prototype.addAll = function(c){
    return this.addAll(this.size, c);
  };
  LinkedList.prototype.addAllAt = function(index, c){
    checkPositionIndex.call(this, index);
    var a = c.toArray();
    var numNew = a.length;
    if(numNew == 0) return false;
    var pred;
    var succ;
    if(index == this.size)
    {
      succ = null;
      pred = this.last;
    }
    else
    {
      succ = this.node(index);
      pred = succ.prev;
    }
    var __coll = a
    for(var __i = 0; __i < __coll.length; __i++) {
      var o = __coll[__i];
      var e = o;
      var newNode = (function(){
        var r = {__enclosing : this, __proto__: __lc('java.util.LinkedList$Node').prototype};
        __lc('java.util.LinkedList$Node').apply(r, arguments);
        return r;
      }).call(this, pred, e, null);
      if(pred == null) this.first = newNode
      else pred.next = newNode
      pred = newNode;
    }
    if(succ == null)
    {
      this.last = pred;
    }
    else
    {
      pred.next = succ;
      succ.prev = pred;
    }
    this._size = numNew;
    return true;
  };
  LinkedList.prototype.clear = function(){
    for (var x = this.first; x != null; ) 
    {
      var next = x.next;
      x.item = null;
      x.next = null;
      x.prev = null;
      x = next;
    }
    this.first = this.last = null;
    this._size = 0;
  };
  LinkedList.prototype.get = function(index){
    checkElementIndex.call(this, index);
    return this.node(index).item;
  };
  LinkedList.prototype.set = function(index, element){
    checkElementIndex.call(this, index);
    var x = this.node(index);
    var oldVal = x.item;
    x.item = element;
    return oldVal;
  };
  LinkedList.prototype.add = function(index, element){
    checkPositionIndex.call(this, index);
    if(index == this.size) this.linkLast(element)
    else this.linkBefore(element, this.node(index))
  };
  LinkedList.prototype.remove = function(index){
    checkElementIndex.call(this, index);
    return this.unlink(this.node(index));
  };
  function isElementIndex(index){
    return index >= 0 && index < this.size;
  }
  function isPositionIndex(index){
    return index >= 0 && index <= this.size;
  }
  function outOfBoundsMsg(index){
    return "Index: " + index + ", Size: " + this.size;
  }
  function checkElementIndex(index){
    if(! isElementIndex.call(this, index)) throw new Error(0, "Index out of boundsException" + outOfBoundsMsg.call(this, index))
  }
  function checkPositionIndex(index){
    if(! isPositionIndex.call(this, index)) throw new Error(0, "Index out of boundsException" + outOfBoundsMsg.call(this, index))
  }
  LinkedList.prototype.node = function(index){
    if(index < (this.size >> 1))
    {
      var x = this.first;
      for (var i = 0; i < index; i ++) 
        x = x.next;
      return x;
    }
    else
    {
      var x = this.last;
      for (var i = this.size - 1; i > index; i --) 
        x = x.prev;
      return x;
    }
  };
  LinkedList.prototype.indexOf = function(o){
    var index = 0;
    if(o == null)
    {
      for (var x = this.first; x != null; x = x.next) 
      {
        if(x.item == null) return index;
        index ++;
      }
    }
    else
    {
      for (var x = this.first; x != null; x = x.next) 
      {
        if(o.equals(x.item)) return index;
        index ++;
      }
    }
    return - 1;
  };
  LinkedList.prototype.lastIndexOf = function(o){
    var index = this.size;
    if(o == null)
    {
      for (var x = this.last; x != null; x = x.prev) 
      {
        index --;
        if(x.item == null) return index;
      }
    }
    else
    {
      for (var x = this.last; x != null; x = x.prev) 
      {
        index --;
        if(o.equals(x.item)) return index;
      }
    }
    return - 1;
  };
  LinkedList.prototype.peek = function(){
    var f = this.first;
    return (f == null) ? null : f.item;
  };
  LinkedList.prototype.element = function(){
    return this.getFirst();
  };
  LinkedList.prototype.poll = function(){
    var f = this.first;
    return (f == null) ? null : unlinkFirst.call(this, f);
  };
  LinkedList.prototype.removeHead = function(){
    return this.removeFirst();
  };
  LinkedList.prototype.offer = function(e){
    return this.add(e);
  };
  LinkedList.prototype.offerFirst = function(e){
    this.addFirst(e);
    return true;
  };
  LinkedList.prototype.offerLast = function(e){
    this.addLast(e);
    return true;
  };
  LinkedList.prototype.peekFirst = function(){
    var f = this.first;
    return (f == null) ? null : f.item;
  };
  LinkedList.prototype.peekLast = function(){
    var l = this.last;
    return (l == null) ? null : l.item;
  };
  LinkedList.prototype.pollFirst = function(){
    var f = this.first;
    return (f == null) ? null : unlinkFirst.call(this, f);
  };
  LinkedList.prototype.pollLast = function(){
    var l = this.last;
    return (l == null) ? null : unlinkLast.call(this, l);
  };
  LinkedList.prototype.push = function(e){
    this.addFirst(e);
  };
  LinkedList.prototype.pop = function(){
    return this.removeFirst();
  };
  LinkedList.prototype.removeFirstOccurrence = function(o){
    return this.remove(o);
  };
  LinkedList.prototype.removeLastOccurrence = function(o){
    if(o == null)
    {
      for (var x = this.last; x != null; x = x.prev) 
      {
        if(x.item == null)
        {
          this.unlink(x);
          return true;
        }
      }
    }
    else
    {
      for (var x = this.last; x != null; x = x.prev) 
      {
        if(o.equals(x.item))
        {
          this.unlink(x);
          return true;
        }
      }
    }
    return false;
  };
  LinkedList.prototype.listIteratorAt = function(index){
    checkPositionIndex.call(this, index);
    return (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.LinkedList$ListItr').prototype};
      __lc('java.util.LinkedList$ListItr').apply(r, arguments);
      return r;
    }).call(this, index);
  };
  LinkedList.prototype.descendingIterator = function(){
    return (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.LinkedList$DescendingIterator').prototype};
      __lc('java.util.LinkedList$DescendingIterator').apply(r, arguments);
      return r;
    }).call(this);
  };
  function superClone(){
    try
    {
      return __lc("java.util.AbstractSequentialList").prototype.clone.call(this);
    }catch(e)
    {
      throw new Error();
    }
  }
  LinkedList.prototype.clone = function(){
    var clone = superClone.call(this);
    clone.first = clone.last = null;
    clone.size = 0;
    for (var x = this.first; x != null; x = x.next) 
      clone.add(x.item);
    return clone;
  };
  LinkedList.prototype.toArray = function(){
    var result = new Array(this.size);
    var i = 0;
    for (var x = this.first; x != null; x = x.next) 
      result[i ++] = x.item;
    return result;
  };
  LinkedList.serialVersionUID = 876323262645176354;
  LinkedList.ListItr = (function(){
    function ListItr(index) {      
      this.lastReturned = null;
      this.next = null;
      this.nextIndex = 0;
      this.next = (index == this.__enclosing.size) ? null : this.__enclosing.node(index);
      this.nextIndex = index;
    }
    ListItr.prototype.__proto__ = Object.prototype;
    __cache["java.util.LinkedList$ListItr"] = ListItr;
    ListItr.prototype.hasNext = function(){
      return this.nextIndex < this.__enclosing.size;
    };
    ListItr.prototype.next = function(){
      if(! this.hasNext()) throw new (__lc('java.util.NoSuchElementException'))()
      this.lastReturned = this.next;
      this.next = this.next.next;
      this.nextIndex ++;
      return this.lastReturned.item;
    };
    ListItr.prototype.hasPrevious = function(){
      return this.nextIndex > 0;
    };
    ListItr.prototype.previous = function(){
      if(! this.hasPrevious()) throw new (__lc('java.util.NoSuchElementException'))()
      this.lastReturned = this.next = (this.next == null) ? this.__enclosing.last : this.next.prev;
      this.nextIndex --;
      return this.lastReturned.item;
    };
    ListItr.prototype.nextIndex = function(){
      return this.nextIndex;
    };
    ListItr.prototype.previousIndex = function(){
      return this.nextIndex - 1;
    };
    ListItr.prototype.remove = function(){
      if(this.lastReturned == null) throw new (__lc('java.lang.IllegalStateException'))()
      var lastNext = this.lastReturned.next;
      this.__enclosing.unlink(this.lastReturned);
      if(this.next == this.lastReturned) this.next = lastNext
      else this.nextIndex --
      this.lastReturned = null;
    };
    ListItr.prototype.set = function(e){
      if(this.lastReturned == null) throw new (__lc('java.lang.IllegalStateException'))()
      this.lastReturned.item = e;
    };
    ListItr.prototype.add = function(e){
      this.lastReturned = null;
      if(this.next == null) this.__enclosing.linkLast(e)
      else this.__enclosing.linkBefore(e, this.next)
      this.nextIndex ++;
    };
    ListItr.prototype.__class = new (__lc('java.lang.Class'))("java.util.LinkedList$ListItr", ListItr, Object.prototype.__class, [__lc("java.util.ListIterator").prototype.__class], 1);
    return  ListItr;
    return ListItr;
  })();
  LinkedList.Node = (function(){
    function Node(prev, element, next) {      
      this.item = null;
      this.next = null;
      this.prev = null;
      this.item = element;
      this.next = next;
      this.prev = prev;
    }
    Node.prototype.__proto__ = Object.prototype;
    __cache["java.util.LinkedList$Node"] = Node;
    Node.prototype.__class = new (__lc('java.lang.Class'))("java.util.LinkedList$Node", Node, Object.prototype.__class, [], 1);
    return  Node;
    return Node;
  })();
  LinkedList.DescendingIterator = (function(){
    function DescendingIterator() {      
      this.itr = (function(){
        var r = {__enclosing : this, __proto__: __lc('java.util.LinkedList$ListItr').prototype};
        __lc('java.util.LinkedList$ListItr').apply(r, arguments);
        return r;
      }).call(this, this.__enclosing.size());
    }
    DescendingIterator.prototype.__proto__ = Object.prototype;
    __cache["java.util.LinkedList$DescendingIterator"] = DescendingIterator;
    DescendingIterator.prototype.hasNext = function(){
      return this.itr.hasPrevious();
    };
    DescendingIterator.prototype.next = function(){
      return this.itr.previous();
    };
    DescendingIterator.prototype.remove = function(){
      this.itr.remove();
    };
    DescendingIterator.prototype.__class = new (__lc('java.lang.Class'))("java.util.LinkedList$DescendingIterator", DescendingIterator, Object.prototype.__class, [__lc("java.util.Iterator").prototype.__class], 1);
    return  DescendingIterator;
    return DescendingIterator;
  })();
  LinkedList.prototype.__class = new (__lc('java.lang.Class'))("java.util.LinkedList", LinkedList, __lc("java.util.AbstractSequentialList").prototype.__class, [__lc("java.util.List").prototype.__class, __lc("java.util.Deque").prototype.__class, __lc("java.lang.Cloneable").prototype.__class, __lc("java.io.Serializable").prototype.__class], 1);
  return  LinkedList;
})();