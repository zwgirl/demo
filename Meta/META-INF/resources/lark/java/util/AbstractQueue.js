(function(){ 
  function AbstractQueue() {    
  __lc("java.util.AbstractCollection", "java.util.AbstractCollection").call(this);
  }
  AbstractQueue.prototype.__proto__ = __lc("java.util.AbstractCollection").prototype;
  __cache["java.util.AbstractQueue"] = AbstractQueue;
  AbstractQueue.prototype.add = function(e){
    this.offer(e);
  };
  AbstractQueue.prototype.remove = function(){
    var x = this.poll();
    if(x != null) return x
    else throw new (__lc("java.util.NoSuchElementException"))()
  };
  AbstractQueue.prototype.element = function(){
    var x = this.peek();
    if(x != null) return x
    else throw new (__lc("java.util.NoSuchElementException"))()
  };
  AbstractQueue.prototype.clear = function(){
    while (this.poll() != null)
      ;
  };
  AbstractQueue.prototype.addAll = function(c){
    if(c == null) throw new (__lc("java.lang.NullPointerException"))()
    if(c == this) throw new (__lc("java.lang.IllegalArgumentException"))()
    var __coll = c, __i = __coll.iterator();
    while(__i.hasNext()) {
      var e = __i.next();
      this.add(e);
    }
  };
  AbstractQueue.prototype.__readObject = function(json, handlers, obj) {
    __lc("java.util.AbstractCollection").prototype.__readObject(json, handlers, obj);};
  AbstractQueue.prototype.__writeObject = function(obj, handlers) {
    __lc("java.util.AbstractCollection").prototype.__writeObject(obj, handlers);};
  AbstractQueue.__class = new (__lc('java.lang.Class'))("java.util.AbstractQueue", AbstractQueue, __lc("java.util.AbstractCollection").__class, [__lc("java.util.Queue").__class], 1);
  return  AbstractQueue;
})();