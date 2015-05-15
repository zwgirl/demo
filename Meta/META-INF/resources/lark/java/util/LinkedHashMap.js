(function(){ 
  function LinkedHashMap(){
    var args = Array.prototype.slice.call(arguments);
    return LinkedHashMap.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  LinkedHashMap.__f = {
    "null" : function(initialCapacity, loadFactor) {    
  __lc("java.util.HashMap", "java.util.HashMap").call(this, initialCapacity, loadFactor);
    this.header = null;
    this.accessOrder = false;
    this.accessOrder = false;
  }, 
    "null" : function(initialCapacity) {    
  __lc("java.util.HashMap", "java.util.HashMap").call(this, initialCapacity);
    this.header = null;
    this.accessOrder = false;
    this.accessOrder = false;
  }, 
    "null" : function() {    
  __lc("java.util.HashMap", "java.util.HashMap").call(this);
    this.header = null;
    this.accessOrder = false;
    this.accessOrder = false;
  }, 
    "null" : function(m) {    
  __lc("java.util.HashMap", "java.util.HashMap").call(this, m);
    this.header = null;
    this.accessOrder = false;
    this.accessOrder = false;
  }, 
    "null" : function(initialCapacity, loadFactor, accessOrder) {    
  __lc("java.util.HashMap", "java.util.HashMap").call(this, initialCapacity, loadFactor);
    this.header = null;
    this.accessOrder = false;
    this.accessOrder = accessOrder;
  }
  };
  LinkedHashMap.prototype.__proto__ = __lc("java.util.HashMap", "java.util.HashMap").prototype;
  __cache["java.util.LinkedHashMap"] = LinkedHashMap;
  LinkedHashMap.prototype.init = function(){
    this.header = ;
    this.header.before = this.header.after = this.header;
  };
  LinkedHashMap.prototype.containsValue = function(value){
    if(value == null)
    {
      for (var e = this.header.after; e != this.header; e = e.after) 
        if(e.value == null) return true
    }
    else
    {
      for (var e = this.header.after; e != this.header; e = e.after) 
        if(value.equals(e.value)) return true
    }
    return false;
  };
  LinkedHashMap.prototype.get = function(key){
    var e = this.getEntry(key);
    if(e == null) return null
    e.recordAccess(this);
    return e.value;
  };
  LinkedHashMap.prototype.clear = function(){
    __lc("java.util.HashMap", "java.util.HashMap").prototype.clear.call(this);
    this.header.before = this.header.after = this.header;
  };
  LinkedHashMap.prototype.newKeyIterator = function(){
    return (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.LinkedHashMap$KeyIterator').prototype};
      __lc('java.util.LinkedHashMap$KeyIterator').apply(r, arguments);
      return r;
    }).call(this);
  };
  LinkedHashMap.prototype.newValueIterator = function(){
    return (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.LinkedHashMap$ValueIterator').prototype};
      __lc('java.util.LinkedHashMap$ValueIterator').apply(r, arguments);
      return r;
    }).call(this);
  };
  LinkedHashMap.prototype.addEntry = function(hash, key, value, bucketIndex){
    __lc("java.util.HashMap", "java.util.HashMap").prototype.addEntry.call(this, hash, key, value, bucketIndex);
    var eldest = this.header.after;
    if(this.removeEldestEntry(eldest))
    {
      this.removeEntryForKey(eldest.key);
    }
  };
  LinkedHashMap.prototype.createEntry = function(hash, key, value, bucketIndex){
    var old = _table[bucketIndex];
    var e = ;
    _table[bucketIndex] = e;
    addBefore.call(e, this.header);
  };
  LinkedHashMap.Entry = (function(){
    function Entry(hash, key, value, next) {      
      this.before = null;
      this.after = null;
    }
    Entry.prototype.__proto__ = Object.prototype;
    __cache["java.util.LinkedHashMap$Entry"] = Entry;
    function remove(){
      this.before.after = this.after;
      this.after.before = this.before;
    }
    function addBefore(existingEntry){
      this.after = existingEntry;
      this.before = existingEntry.before;
      this.before.after = this;
      this.after.before = this;
    }
    Entry.prototype.recordAccess = function(m){
      var lm = m;
      if(lm.accessOrder)
      {
        remove.call(this);
        addBefore.call(this, lm.header);
      }
    };
    Entry.prototype.recordRemoval = function(m){
      remove.call(this);
    };
    Entry.prototype.__class = new (__lc('java.lang.Class'))("java.util.LinkedHashMap$Entry", Entry, Object.prototype.__class, [], 1);
    return  Entry;
    return Entry;
  })();
  LinkedHashMap.LinkedHashIterator = (function(){
    function LinkedHashIterator() {      
      this.nextEntry = this.__enclosing.header.after;
      this.lastReturned = null;
    }
    LinkedHashIterator.prototype.__proto__ = Object.prototype;
    __cache["java.util.LinkedHashMap$LinkedHashIterator"] = LinkedHashIterator;
    LinkedHashIterator.prototype.hasNext = function(){
      return this.nextEntry != this.__enclosing.header;
    };
    LinkedHashIterator.prototype.remove = function(){
      if(this.lastReturned == null) throw new (__lc("java.lang.IllegalStateException", "java.lang.buildins"))()
      this.__enclosing.remove(this.lastReturned.key);
      this.lastReturned = null;
    };
    LinkedHashIterator.prototype.nextEntry = function(){
      if(this.nextEntry == this.__enclosing.header) throw new (__lc("java.util.NoSuchElementException", "java.util.NoSuchElementException"))()
      var e = this.lastReturned = this.nextEntry;
      this.nextEntry = e.after;
      return e;
    };
    LinkedHashIterator.prototype.__class = new (__lc('java.lang.Class'))("java.util.LinkedHashMap$LinkedHashIterator", LinkedHashIterator, Object.prototype.__class, [__lc("java.util.Iterator", "java.util.Iterator").prototype.__class], 1);
    return  LinkedHashIterator;
    return LinkedHashIterator;
  })();
  LinkedHashMap.KeyIterator = (function(){
    function KeyIterator() {      
    __lc("java.util.LinkedHashMap$LinkedHashIterator", "java.util.LinkedHashMap").call(this);
    }
    KeyIterator.prototype.__proto__ = __lc("java.util.LinkedHashMap").LinkedHashIterator.prototype;
    __cache["java.util.LinkedHashMap$KeyIterator"] = KeyIterator;
    KeyIterator.prototype.next = function(){
      return this.nextEntry().getKey();
    };
    KeyIterator.prototype.__class = new (__lc('java.lang.Class'))("java.util.LinkedHashMap$KeyIterator", KeyIterator, __lc("java.util.LinkedHashMap").LinkedHashIterator.prototype.__class, [], 1);
    return  KeyIterator;
    return KeyIterator;
  })();
  LinkedHashMap.ValueIterator = (function(){
    function ValueIterator() {      
    __lc("java.util.LinkedHashMap$LinkedHashIterator", "java.util.LinkedHashMap").call(this);
    }
    ValueIterator.prototype.__proto__ = __lc("java.util.LinkedHashMap").LinkedHashIterator.prototype;
    __cache["java.util.LinkedHashMap$ValueIterator"] = ValueIterator;
    ValueIterator.prototype.next = function(){
      return this.nextEntry().value;
    };
    ValueIterator.prototype.__class = new (__lc('java.lang.Class'))("java.util.LinkedHashMap$ValueIterator", ValueIterator, __lc("java.util.LinkedHashMap").LinkedHashIterator.prototype.__class, [], 1);
    return  ValueIterator;
    return ValueIterator;
  })();
  LinkedHashMap.EntryIterator = (function(){
    function EntryIterator() {      
    }
    EntryIterator.prototype.__proto__ = Object.prototype;
    __cache["java.util.LinkedHashMap$EntryIterator"] = EntryIterator;
    EntryIterator.prototype.__class = new (__lc('java.lang.Class'))("java.util.LinkedHashMap$EntryIterator", EntryIterator, Object.prototype.__class, [], 1);
    return  EntryIterator;
    return EntryIterator;
  })();
  LinkedHashMap.prototype.__readObject = function(json, handlers, obj) {
    __lc("java.util.HashMap", "java.util.HashMap").prototype.__readObject(json, handlers, obj);
    var __propVal = null;
    obj["accessOrder"] = json["accessOrder"];
  };
  LinkedHashMap.prototype.__writeObject = function(obj, handlers) {
    __lc("java.util.HashMap", "java.util.HashMap").prototype.__writeObject(obj, handlers);
    var __r = {"__clazz" : "java.util.LinkedHashMap"};
    var __propVal = null;
    __r["accessOrder"] = obj["accessOrder"];
    return __r;
  };
  LinkedHashMap.prototype.__class = new (__lc('java.lang.Class'))("java.util.LinkedHashMap", LinkedHashMap, __lc("java.util.HashMap", "java.util.HashMap").prototype.__class, [__lc("java.util.Map", "java.util.Map").prototype.__class], 1);
  return  LinkedHashMap;
})();