(function(){ 
  function SubList(list, fromIndex, toIndex) {    
  __lc("java.util.AbstractList", "java.util.AbstractList").call(this);
    this.l = null;
    this.offset = 0;
    this._size = 0;
    if(fromIndex < 0) throw new Error(0, "from index out of boundsException! ")
    if(toIndex > list.size) throw new Error(0, "toIndex out of boundsException! ")
    if(fromIndex > toIndex) throw new (__lc("java.lang.IllegalArgumentException", "java.lang.buildins"))("fromIndex(" + fromIndex + ") > toIndex(" + toIndex + ")")
    this.l = list;
    this.offset = fromIndex;
    this._size = toIndex - fromIndex;
  }
  SubList.prototype.__proto__ = __lc("java.util.AbstractList", "java.util.AbstractList").prototype;
  __cache["java.util.SubList"] = SubList;
  Object.defineProperty(SubList.prototype, "size", {
    get : function() {
      return this._size;
    }
  });
  SubList.prototype.set = function(index, element){
    rangeCheck.call(this, index);
    return this.l.set(index + this.offset, element);
  };
  SubList.prototype.get = function(index){
    rangeCheck.call(this, index);
    return this.l.get(index + this.offset);
  };
  SubList.prototype.addAt = function(index, element){
    rangeCheckForAdd.call(this, index);
    this.l.addAt(index + this.offset, element);
    this._size ++;
  };
  SubList.prototype.removeAt = function(index){
    rangeCheck.call(this, index);
    var result = this.l.removeAt(index + this.offset);
    this._size --;
    return result;
  };
  SubList.prototype.removeRange = function(fromIndex, toIndex){
    this.l.removeRange(fromIndex + this.offset, toIndex + this.offset);
    this._size-=(toIndex - fromIndex);
  };
  SubList.prototype.addAll = function(c){
    this.addAllAt(this._size, c);
  };
  SubList.prototype.addAllAt = function(index, c){
    rangeCheckForAdd.call(this, index);
    this.l.addAllAt(this.offset + index, c);
  };
  SubList.prototype.iterator = function(){
    return this.listIterator();
  };
  SubList.prototype.listIterator = function(index){
    rangeCheckForAdd.call(this, index);
    return new ((function() {
      function Anonym() {        
        this.i = this.__enclosing.l.listIteratorAt(index + this.__enclosing.offset);
      }
      Anonym.prototype.__proto__ = Object.prototype;
      __cache["java.util.SubList$1"] = Anonym;
      Anonym.prototype.hasNext = function(){
        return this.nextIndex() < this.__enclosing.size;
      };
      Anonym.prototype.next = function(){
        if(this.hasNext()) return this.i.next()
        else throw new (__lc("java.util.NoSuchElementException", "java.util.NoSuchElementException"))()
      };
      Anonym.prototype.hasPrevious = function(){
        return this.previousIndex() >= 0;
      };
      Anonym.prototype.previous = function(){
        if(this.hasPrevious()) return this.i.previous()
        else throw new (__lc("java.util.NoSuchElementException", "java.util.NoSuchElementException"))()
      };
      Anonym.prototype.nextIndex = function(){
        return this.i.nextIndex() - this.__enclosing.offset;
      };
      Anonym.prototype.previousIndex = function(){
        return this.i.previousIndex() - this.__enclosing.offset;
      };
      Anonym.prototype.remove = function(){
        __lc("java.util.Iterator", "java.util.Iterator").prototype.remove.call(this.i);
        this.__enclosing._size --;
      };
      Anonym.prototype.set = function(e){
        this.i.set(e);
      };
      Anonym.prototype.add = function(e){
        this.i.add(e);
        this.__enclosing._size ++;
      };
      Anonym.prototype.__class = new (__lc('java.lang.Class'))("java.util.SubList$1", Anonym, Object.prototype.__class, [__lc("java.util.ListIterator", "java.util.ListIterator").prototype.__class], 1);
      return  Anonym;
      return ;
    })())();
  };
  SubList.prototype.subList = function(fromIndex, toIndex){
    return new (__lc("java.util.SubList", "java.util.AbstractList"))(this, fromIndex, toIndex);
  };
  function rangeCheck(index){
    if(index < 0 || index >= this.size) throw new Error(0, "index out of bounds" + outOfBoundsMsg.call(this, index))
  }
  function rangeCheckForAdd(index){
    if(index < 0 || index > this.size) throw new Error(0, "index out of bounds" + outOfBoundsMsg.call(this, index))
  }
  function outOfBoundsMsg(index){
    return "Index: " + index + ", Size: " + this.size;
  }
  SubList.prototype.__class = new (__lc('java.lang.Class'))("java.util.SubList", SubList, __lc("java.util.AbstractList", "java.util.AbstractList").prototype.__class, [], 1);
  return  SubList;
})();