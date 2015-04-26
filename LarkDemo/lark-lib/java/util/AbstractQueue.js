(function(){ 
  function AbstractQueue() {    
  __lc('java.util.AbstractCollection').call(this);
  }
  AbstractQueue.prototype.__proto__ = __lc("java.util.AbstractCollection").prototype;
  __cache["java.util.AbstractQueue"] = AbstractQueue;
  AbstractQueue.prototype.add = function(e){
    if(this.offer(e)) return true;
    else throw new (__lc('java.lang.IllegalStateException'))("Queue full")
  };
  AbstractQueue.prototype.remove = function(){
    var x = this.poll();
    if(x != null) return x;
    else throw new (__lc('java.util.NoSuchElementException'))()
  };
  AbstractQueue.prototype.element = function(){
    var x = this.peek();
    if(x != null) return x;
    else throw new (__lc('java.util.NoSuchElementException'))()
  };
  AbstractQueue.prototype.clear = function(){
    while (this.poll() != null)
      ;
  };
  AbstractQueue.prototype.addAll = function(c){
    if(c == null) throw new (__lc('java.lang.NullPointerException'))()
    if(c == this) throw new (__lc('java.lang.IllegalArgumentException'))()
    var modified = false;
    var __coll = c, __i = __coll.iterator();
    while(__i.hasNext()) {
      var e = __i.next();
      if(this.add(e)) modified = true;
    }
    return modified;
  };
  AbstractQueue.prototype.__class = new (__lc('java.lang.Class'))("java.util.AbstractQueue", AbstractQueue, __lc("java.util.AbstractCollection").prototype.__class, [__lc("java.util.Queue").prototype.__class], 1);
  return  AbstractQueue;
})();