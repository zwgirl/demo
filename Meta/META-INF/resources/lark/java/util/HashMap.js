(function(){ 
  function HashMap(){
    var args = Array.prototype.slice.call(arguments);
    return HashMap.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  HashMap.__f = {
    "null" : function(initialCapacity, loadFactor) {    
  __lc('java.util.AbstractMap').call(this);
    this._table = new Array();
    this._size = 0;
    this._threshold = 0;
    this._loadFactor = 0;
    this._hashSeed = 0;
    this.entrySet = null;
    if(initialCapacity < 0) throw new (__lc('java.lang.IllegalArgumentException'))("Illegal initial capacity: " + initialCapacity)
    if(initialCapacity > HashMap.MAXIMUM_CAPACITY) initialCapacity = HashMap.MAXIMUM_CAPACITY
    if(loadFactor <= 0 || isNaN(loadFactor)) throw new (__lc('java.lang.IllegalArgumentException'))("Illegal load factor: " + loadFactor)
    this._loadFactor = loadFactor;
    this._threshold = initialCapacity;
    this.init();
  }, 
    "null" : function(initialCapacity) {    
HashMap.call(this, initialCapacity, HashMap.DEFAULT_LOAD_FACTOR);
    this._table = new Array();
    this._size = 0;
    this._threshold = 0;
    this._loadFactor = 0;
    this._hashSeed = 0;
    this.entrySet = null;
  }, 
    "null" : function() {    
HashMap.call(this, HashMap.DEFAULT_INITIAL_CAPACITY, HashMap.DEFAULT_LOAD_FACTOR);
    this._table = new Array();
    this._size = 0;
    this._threshold = 0;
    this._loadFactor = 0;
    this._hashSeed = 0;
    this.entrySet = null;
  }, 
    "null" : function(m) {    
HashMap.call(this, Math.max(m.size / HashMap.DEFAULT_LOAD_FACTOR + 1, HashMap.DEFAULT_INITIAL_CAPACITY), HashMap.DEFAULT_LOAD_FACTOR);
    this._table = new Array();
    this._size = 0;
    this._threshold = 0;
    this._loadFactor = 0;
    this._hashSeed = 0;
    this.entrySet = null;
    inflateTable.call(this, this._threshold);
    putAllForCreate.call(this, m);
  }
  };
  HashMap.prototype.__proto__ = __lc("java.util.AbstractMap").prototype;
  __cache["java.util.HashMap"] = HashMap;
  Object.defineProperty(HashMap.prototype, "size", {
    get : function() {
      return this._size;
    }
  });
  function inflateTable(toSize){
    this._threshold = Math.min(toSize * this._loadFactor, HashMap.MAXIMUM_CAPACITY + 1);
    this._table = new Array(toSize);
    this.initHashSeedAsNeeded(toSize);
  }
  HashMap.prototype.init = function(){
  };
  HashMap.prototype.initHashSeedAsNeeded = function(capacity){
    var currentAltHashing = this._hashSeed != 0;
    var useAltHashing = false;
    var switching = currentAltHashing ^ useAltHashing;
    if(switching)
    {
      this._hashSeed = useAltHashing ? Math.random() : 0;
    }
    return switching;
  };
  HashMap.prototype.hash = function(k){
    var h = this._hashSeed;
    h = k.hashCode();
    h = (h >>> 20) ^ (h >>> 12);
    return h ^ (h >>> 7) ^ (h >>> 4);
  };
  HashMap.indexFor = function(h, length){
    return h & (length - 1);
  };
  HashMap.prototype.isEmpty = function(){
    return this._size == 0;
  };
  HashMap.prototype.get = function(key){
    if(key == null) return getForNullKey.call(this);
    var entry = this.getEntry(key);
    return null == entry ? null : entry.getValue();
  };
  function getForNullKey(){
    if(this._size == 0)
    {
      return null;
    }
    for (var e = this._table[0]; e != null; e = e.next) 
    {
      if(e.key == null) return e.value;
    }
    return null;
  }
  HashMap.prototype.containsKey = function(key){
    return this.getEntry(key) != null;
  };
  HashMap.prototype.getEntry = function(key){
    if(this._size == 0)
    {
      return null;
    }
    var hash = (key == null) ? 0 : this.hash(key);
    for (var e = this._table[HashMap.indexFor(hash, this._table.length)]; e != null; e = e.next) 
    {
      var k;
      if(e.hash == hash && ((k = e.key) == key || (key != null && key.equals(k)))) return e;
    }
    return null;
  };
  HashMap.prototype.put = function(key, value){
    if(key == null) return putForNullKey.call(this, value);
    var hash = this.hash(key);
    var i = HashMap.indexFor(hash, this._table.length);
    for (var e = this._table[i]; e != null; e = e.next) 
    {
      var k;
      if(e.hash == hash && ((k = e.key) == key || key.equals(k)))
      {
        var oldValue = e.value;
        e.value = value;
        e.recordAccess(this);
        return oldValue;
      }
    }
    this.addEntry(hash, key, value, i);
    return null;
  };
  function putForNullKey(value){
    for (var e = this._table[0]; e != null; e = e.next) 
    {
      if(e.key == null)
      {
        var oldValue = e.value;
        e.value = value;
        e.recordAccess(this);
        return oldValue;
      }
    }
    this.addEntry(0, null, value, 0);
    return null;
  }
  function putForCreate(key, value){
    var hash = null == key ? 0 : this.hash(key);
    var i = HashMap.indexFor(hash, this._table.length);
    for (var e = this._table[i]; e != null; e = e.next) 
    {
      var k;
      if(e.hash == hash && ((k = e.key) == key || (key != null && key.equals(k))))
      {
        e.value = value;
        return;
      }
    }
    this.createEntry(hash, key, value, i);
  }
  function putAllForCreate(m){
    var __coll = m.entrySet(), __i = __coll.iterator();
    while(__i.hasNext()) {
      var e = __i.next();
      putForCreate.call(this, e.getKey(), e.getValue());
    }
  }
  HashMap.prototype.resize = function(newCapacity){
    var oldTable = this._table;
    var oldCapacity = oldTable.length;
    if(oldCapacity == HashMap.MAXIMUM_CAPACITY)
    {
      this._threshold = __lc("java.lang.Integer").MAX_VALUE;
      return;
    }
    var newTable = new Array(newCapacity);
    this.transfer(newTable, this.initHashSeedAsNeeded(newCapacity));
    this._table = newTable;
    this._threshold = Math.min(newCapacity * this._loadFactor, HashMap.MAXIMUM_CAPACITY + 1);
  };
  HashMap.prototype.transfer = function(newTable, rehash){
    var newCapacity = newTable.length;
    var __coll = this._table
    for(var __i = 0; __i < __coll.length; __i++) {
      var e = __coll[__i];
      while (null != e)

      {
        var next = e.next;
        if(rehash)
        {
          e.hash = null == e.key ? 0 : this.hash(e.key);
        }
        var i = HashMap.indexFor(e.hash, newCapacity);
        e.next = newTable[i];
        newTable[i] = e;
        e = next;
      }
    }
  };
  HashMap.prototype.putAll = function(m){
    var numKeysToBeAdded = m.size;
    if(numKeysToBeAdded == 0) return;
    if(numKeysToBeAdded > this._threshold)
    {
      var targetCapacity = numKeysToBeAdded / this._loadFactor + 1;
      if(targetCapacity > HashMap.MAXIMUM_CAPACITY) targetCapacity = HashMap.MAXIMUM_CAPACITY
      var newCapacity = this._table.length;
      while (newCapacity < targetCapacity)
        newCapacity = 1;
      if(newCapacity > this._table.length) this.resize(newCapacity)
    }
    var __coll = m.entrySet(), __i = __coll.iterator();
    while(__i.hasNext()) {
      var e = __i.next();
      this.put(e.getKey(), e.getValue());
    }
  };
  HashMap.prototype.remove = function(key){
    var e = this.removeEntryForKey(key);
    return e == null ? null : e.value;
  };
  HashMap.prototype.removeEntryForKey = function(key){
    if(this._size == 0)
    {
      return null;
    }
    var hash = (key == null) ? 0 : this.hash(key);
    var i = HashMap.indexFor(hash, this._table.length);
    var prev = this._table[i];
    var e = prev;
    while (e != null)

    {
      var next = e.next;
      var k;
      if(e.hash == hash && ((k = e.key) == key || (key != null && key.equals(k))))
      {
        this._size --;
        if(prev == e) this._table[i] = next
        else prev.next = next
        e.recordRemoval(this);
        return e;
      }
      prev = e;
      e = next;
    }
    return e;
  };
  HashMap.prototype.removeMapping = function(o){
    if(this._size == 0 || ! Map.Entry.prototype.__class.isInstance(o)) return null;
    var entry = o;
    var key = entry.getKey();
    var hash = (key == null) ? 0 : this.hash(key);
    var i = HashMap.indexFor(hash, this._table.length);
    var prev = this._table[i];
    var e = prev;
    while (e != null)

    {
      var next = e.next;
      if(e.hash == hash && e.equals(entry))
      {
        this._size --;
        if(prev == e) this._table[i] = next
        else prev.next = next
        e.recordRemoval(this);
        return e;
      }
      prev = e;
      e = next;
    }
    return e;
  };
  HashMap.prototype.clear = function(){
    this._table.length = 0;
    this._size = 0;
  };
  HashMap.prototype.containsValue = function(value){
    if(value == null) return containsNullValue.call(this);
    var tab = this._table;
    for (var i = 0; i < tab.length; i ++) 
      for (var e = tab[i]; e != null; e = e.next) 
        if(value.equals(e.value)) return true;
    return false;
  };
  function containsNullValue(){
    var tab = this._table;
    for (var i = 0; i < tab.length; i ++) 
      for (var e = tab[i]; e != null; e = e.next) 
        if(e.value == null) return true;
    return false;
  }
  HashMap.prototype.clone = function(){
    var result = null;
    try
    {
      result = __lc("java.util.AbstractMap").prototype.clone.call(this);
    }catch(e)
    {
    }
    if(result._table.length != 0)
    {
      inflateTable.call(result, Math.min(Math.min(this._size * Math.min(1 / this._loadFactor, 4.0), HashMap.MAXIMUM_CAPACITY), this._table.length));
    }
    result.entrySet = null;
    result._size = 0;
    result.init();
    putAllForCreate.call(result, this);
    return result;
  };
  HashMap.prototype.addEntry = function(hash, key, value, bucketIndex){
    if((this._size >= this._threshold) && (null != this._table[bucketIndex]))
    {
      this.resize(2 * this._table.length);
      hash = (null != key) ? this.hash(key) : 0;
      bucketIndex = HashMap.indexFor(hash, this._table.length);
    }
    this.createEntry(hash, key, value, bucketIndex);
  };
  HashMap.prototype.createEntry = function(hash, key, value, bucketIndex){
    var e = this._table[bucketIndex];
    this._table[bucketIndex] = (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.HashMap$Entry').prototype};
      __lc('java.util.HashMap$Entry').apply(r, arguments);
      return r;
    }).call(this, hash, key, value, e);
    this._size ++;
  };
  HashMap.prototype.newKeyIterator = function(){
    return (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.HashMap$KeyIterator').prototype};
      __lc('java.util.HashMap$KeyIterator').apply(r, arguments);
      return r;
    }).call(this);
  };
  HashMap.prototype.newValueIterator = function(){
    return (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.HashMap$ValueIterator').prototype};
      __lc('java.util.HashMap$ValueIterator').apply(r, arguments);
      return r;
    }).call(this);
  };
  HashMap.prototype.newEntryIterator = function(){
    return (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.HashMap$EntryIterator').prototype};
      __lc('java.util.HashMap$EntryIterator').apply(r, arguments);
      return r;
    }).call(this);
  };
  HashMap.prototype.keySet = function(){
    var ks = this.keySet;
    return ks != null ? ks : (this.keySet = (function(){
  var r = {__enclosing : this, __proto__: __lc('java.util.HashMap$KeySet').prototype};
  __lc('java.util.HashMap$KeySet').apply(r, arguments);
  return r;
}).call(this));
  };
  HashMap.prototype.values = function(){
    var vs = this.values;
    return vs != null ? vs : (this.values = (function(){
  var r = {__enclosing : this, __proto__: __lc('java.util.HashMap$Values').prototype};
  __lc('java.util.HashMap$Values').apply(r, arguments);
  return r;
}).call(this));
  };
  HashMap.prototype.entrySet = function(){
    return entrySet0.call(this);
  };
  function entrySet0(){
    var es = this.entrySet;
    return es != null ? es : (this.entrySet = (function(){
  var r = {__enclosing : this, __proto__: __lc('java.util.HashMap$EntrySet').prototype};
  __lc('java.util.HashMap$EntrySet').apply(r, arguments);
  return r;
}).call(this));
  }
  HashMap.prototype.capacity = function(){
    return this._table.length;
  };
  HashMap.prototype.loadFactor = function(){
    return this._loadFactor;
  };
  HashMap.DEFAULT_INITIAL_CAPACITY = 1 << 4;
  HashMap.MAXIMUM_CAPACITY = 1 << 30;
  HashMap.DEFAULT_LOAD_FACTOR = 0.75;
  HashMap.ALTERNATIVE_HASHING_THRESHOLD_DEFAULT = __lc("java.lang.Integer").MAX_VALUE;
  HashMap.Entry = (function(){
    function Entry(h, k, v, n) {      
      this.key = null;
      this.value = null;
      this.next = null;
      this.hash = 0;
      this.value = v;
      this.next = n;
      this.key = k;
      this.hash = h;
    }
    Entry.prototype.__proto__ = Object.prototype;
    __cache["java.util.HashMap$Entry"] = Entry;
    Entry.prototype.getKey = function(){
      return this.key;
    };
    Entry.prototype.getValue = function(){
      return this.value;
    };
    Entry.prototype.setValue = function(newValue){
      var oldValue = this.value;
      this.value = newValue;
      return oldValue;
    };
    Entry.prototype.equals = function(o){
      if(! Map.Entry.prototype.__class.isInstance(o)) return false;
      var e = o;
      var k1 = this.getKey();
      var k2 = e.getKey();
      if(k1 == k2 || (k1 != null && k1.equals(k2)))
      {
        var v1 = this.getValue();
        var v2 = e.getValue();
        if(v1 == v2 || (v1 != null && v1.equals(v2))) return true;
      }
      return false;
    };
    Entry.prototype.hashCode = function(){
      return __lc("java.util.Objects").hashCode(this.getKey()) ^ __lc("java.util.Objects").hashCode(this.getValue());
    };
    Entry.prototype.toString = function(){
      return this.getKey() + "=" + this.getValue();
    };
    Entry.prototype.recordAccess = function(m){
    };
    Entry.prototype.recordRemoval = function(m){
    };
    Entry.prototype.__class = new (__lc('java.lang.Class'))("java.util.HashMap$Entry", Entry, Object.prototype.__class, [__lc("java.util.Map").Entry.prototype.__class], 1);
    return  Entry;
    return Entry;
  })();
  HashMap.HashIterator = (function(){
    function HashIterator() {      
      this.next = null;
      this.expectedModCount = 0;
      this.index = 0;
      this.current = null;
      if(this.__enclosing._size > 0)
      {
        var t = this.__enclosing._table;
        while (this.index < t.length && (this.next = t[this.index ++]) == null)
          ;
      }
    }
    HashIterator.prototype.__proto__ = Object.prototype;
    __cache["java.util.HashMap$HashIterator"] = HashIterator;
    HashIterator.prototype.hasNext = function(){
      return this.next != null;
    };
    HashIterator.prototype.nextEntry = function(){
      var e = this.next;
      if(e == null) throw new (__lc('java.util.NoSuchElementException'))()
      if((this.next = e.next) == null)
      {
        var t = this.__enclosing._table;
        while (this.index < t.length && (this.next = t[this.index ++]) == null)
          ;
      }
      this.current = e;
      return e;
    };
    HashIterator.prototype.remove = function(){
      if(this.current == null) throw new (__lc('java.lang.IllegalStateException'))()
      var k = this.current.key;
      this.current = null;
      this.__enclosing.removeEntryForKey(k);
    };
    HashIterator.prototype.__class = new (__lc('java.lang.Class'))("java.util.HashMap$HashIterator", HashIterator, Object.prototype.__class, [__lc("java.util.Iterator").prototype.__class], 1);
    return  HashIterator;
    return HashIterator;
  })();
  HashMap.ValueIterator = (function(){
    function ValueIterator() {      
    (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.HashMap').HashIterator.prototype};
      HashIterator.apply(r, arguments);
      return r;
    }).call(this);
    }
    ValueIterator.prototype.__proto__ = __lc("java.util.HashMap").HashIterator.prototype;
    __cache["java.util.HashMap$ValueIterator"] = ValueIterator;
    ValueIterator.prototype.next = function(){
      return this.nextEntry().value;
    };
    ValueIterator.prototype.__class = new (__lc('java.lang.Class'))("java.util.HashMap$ValueIterator", ValueIterator, __lc("java.util.HashMap").HashIterator.prototype.__class, [], 1);
    return  ValueIterator;
    return ValueIterator;
  })();
  HashMap.KeyIterator = (function(){
    function KeyIterator() {      
    (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.HashMap').HashIterator.prototype};
      HashIterator.apply(r, arguments);
      return r;
    }).call(this);
    }
    KeyIterator.prototype.__proto__ = __lc("java.util.HashMap").HashIterator.prototype;
    __cache["java.util.HashMap$KeyIterator"] = KeyIterator;
    KeyIterator.prototype.next = function(){
      return this.nextEntry().getKey();
    };
    KeyIterator.prototype.__class = new (__lc('java.lang.Class'))("java.util.HashMap$KeyIterator", KeyIterator, __lc("java.util.HashMap").HashIterator.prototype.__class, [], 1);
    return  KeyIterator;
    return KeyIterator;
  })();
  HashMap.EntryIterator = (function(){
    function EntryIterator() {      
    (function(){
      var r = {__enclosing : this, __proto__: __lc('java.util.HashMap').HashIterator.prototype};
      HashIterator.apply(r, arguments);
      return r;
    }).call(this);
    }
    EntryIterator.prototype.__proto__ = __lc("java.util.HashMap").HashIterator.prototype;
    __cache["java.util.HashMap$EntryIterator"] = EntryIterator;
    EntryIterator.prototype.next = function(){
      return this.nextEntry();
    };
    EntryIterator.prototype.__class = new (__lc('java.lang.Class'))("java.util.HashMap$EntryIterator", EntryIterator, __lc("java.util.HashMap").HashIterator.prototype.__class, [], 1);
    return  EntryIterator;
    return EntryIterator;
  })();
  HashMap.KeySet = (function(){
    function KeySet() {      
    __lc('java.util.AbstractSet').call(this);
    }
    KeySet.prototype.__proto__ = __lc("java.util.AbstractSet").prototype;
    __cache["java.util.HashMap$KeySet"] = KeySet;
    KeySet.prototype.iterator = function(){
      return this.__enclosing.newKeyIterator();
    };
    KeySet.prototype.size = function(){
      return this.size;
    };
    KeySet.prototype.contains = function(o){
      return this.__enclosing.containsKey(o);
    };
    KeySet.prototype.remove = function(o){
      return this.__enclosing.removeEntryForKey(o) != null;
    };
    KeySet.prototype.clear = function(){
      this.__enclosing.clear();
    };
    KeySet.prototype.__class = new (__lc('java.lang.Class'))("java.util.HashMap$KeySet", KeySet, __lc("java.util.AbstractSet").prototype.__class, [], 1);
    return  KeySet;
    return KeySet;
  })();
  HashMap.Values = (function(){
    function Values() {      
    __lc('java.util.AbstractCollection').call(this);
    }
    Values.prototype.__proto__ = __lc("java.util.AbstractCollection").prototype;
    __cache["java.util.HashMap$Values"] = Values;
    Values.prototype.iterator = function(){
      return this.__enclosing.newValueIterator();
    };
    Values.prototype.size = function(){
      return this.size;
    };
    Values.prototype.contains = function(o){
      return this.__enclosing.containsValue(o);
    };
    Values.prototype.clear = function(){
      this.__enclosing.clear();
    };
    Values.prototype.__class = new (__lc('java.lang.Class'))("java.util.HashMap$Values", Values, __lc("java.util.AbstractCollection").prototype.__class, [], 1);
    return  Values;
    return Values;
  })();
  HashMap.EntrySet = (function(){
    function EntrySet() {      
    __lc('java.util.AbstractSet').call(this);
    }
    EntrySet.prototype.__proto__ = __lc("java.util.AbstractSet").prototype;
    __cache["java.util.HashMap$EntrySet"] = EntrySet;
    EntrySet.prototype.iterator = function(){
      return this.__enclosing.newEntryIterator();
    };
    EntrySet.prototype.contains = function(o){
      if(! Map.Entry.prototype.__class.isInstance(o)) return false;
      var e = o;
      var candidate = this.__enclosing.getEntry(e.getKey());
      return candidate != null && candidate.equals(e);
    };
    EntrySet.prototype.remove = function(o){
      return this.__enclosing.removeMapping(o) != null;
    };
    EntrySet.prototype.size = function(){
      return this.size;
    };
    EntrySet.prototype.clear = function(){
      this.__enclosing.clear();
    };
    EntrySet.prototype.__class = new (__lc('java.lang.Class'))("java.util.HashMap$EntrySet", EntrySet, __lc("java.util.AbstractSet").prototype.__class, [], 1);
    return  EntrySet;
    return EntrySet;
  })();
  HashMap.prototype.__class = new (__lc('java.lang.Class'))("java.util.HashMap", HashMap, __lc("java.util.AbstractMap").prototype.__class, [__lc("java.util.Map").prototype.__class, __lc("java.lang.Cloneable").prototype.__class], 1);
  return  HashMap;
})();