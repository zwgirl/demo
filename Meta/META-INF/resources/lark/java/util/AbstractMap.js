(function(){ 
  function AbstractMap() {    
    this.keySet = null;
    this.values = null;
  }
  AbstractMap.prototype.__proto__ = Object.prototype;
  __cache["java.util.AbstractMap"] = AbstractMap;
  Object.defineProperty(AbstractMap.prototype, "size", {
    get : function() {
      return this.entrySet().size;
    }
  });
  AbstractMap.prototype.isEmpty = function(){
    return this.size == 0;
  };
  AbstractMap.prototype.containsValue = function(value){
    var i = this.entrySet().iterator();
    if(value == null)
    {
      while (i.hasNext())

      {
        var e = i.next();
        if(e.getValue() == null) return true
      }
    }
    else
    {
      while (i.hasNext())

      {
        var e = i.next();
        if(value.equals(e.getValue())) return true
      }
    }
    return false;
  };
  AbstractMap.prototype.containsKey = function(key){
    var i = this.entrySet().iterator();
    if(key == null)
    {
      while (i.hasNext())

      {
        var e = i.next();
        if(e.getKey() == null) return true
      }
    }
    else
    {
      while (i.hasNext())

      {
        var e = i.next();
        if(key.equals(e.getKey())) return true
      }
    }
    return false;
  };
  AbstractMap.prototype.get = function(key){
    var i = this.entrySet().iterator();
    if(key == null)
    {
      while (i.hasNext())

      {
        var e = i.next();
        if(e.getKey() == null) return e.getValue()
      }
    }
    else
    {
      while (i.hasNext())

      {
        var e = i.next();
        if(key.equals(e.getKey())) return e.getValue()
      }
    }
    return null;
  };
  AbstractMap.prototype.put = function(key, value){
    throw new (__lc("java.lang.UnsupportedOperationException", "java.lang.buildins"))();
  };
  AbstractMap.prototype.remove = function(key){
    var i = this.entrySet().iterator();
    var correctEntry = null;
    if(key == null)
    {
      while (correctEntry == null && i.hasNext())

      {
        var e = i.next();
        if(e.getKey() == null) correctEntry = e
      }
    }
    else
    {
      while (correctEntry == null && i.hasNext())

      {
        var e = i.next();
        if(key.equals(e.getKey())) correctEntry = e
      }
    }
    var oldValue = null;
    if(correctEntry != null)
    {
      oldValue = correctEntry.getValue();
      __lc("java.util.Iterator", "java.util.Iterator").prototype.remove.call(i);
    }
    return oldValue;
  };
  AbstractMap.prototype.putAll = function(m){
    var __coll = m.entrySet(), __i = __coll.iterator();
    while(__i.hasNext()) {
      var e = __i.next();
      this.put(e.getKey(), e.getValue());
    }
  };
  AbstractMap.prototype.clear = function(){
    this.entrySet().clear();
  };
  AbstractMap.prototype.keySet = function(){
    if(this.keySet == null)
    {
      this.keySet = new ((function() {
        function Anonym() {          
        __lc("java.util.AbstractSet", "java.util.AbstractSet").call(this);
        }
        Anonym.prototype.__proto__ = __lc("java.util.AbstractSet", "java.util.AbstractSet").prototype;
        __cache["java.util.AbstractMap$1"] = Anonym;
        Object.defineProperty(Anonym.prototype, "size", {
          get : function() {
            return this.__enclosing.size;
          }
        });
        Anonym.prototype.iterator = function(){
          return new ((function() {
            function Anonym() {              
              this.i = this.__enclosing.__enclosing.entrySet().iterator();
            }
            Anonym.prototype.__proto__ = Object.prototype;
            __cache["java.util.AbstractMap$1$1"] = Anonym;
            Anonym.prototype.hasNext = function(){
              return this.i.hasNext();
            };
            Anonym.prototype.next = function(){
              return this.i.next().getKey();
            };
            Anonym.prototype.remove = function(){
              __lc("java.util.Iterator", "java.util.Iterator").prototype.remove.call(this.i);
            };
            Anonym.prototype.__class = new (__lc('java.lang.Class'))("java.util.AbstractMap$1$1", Anonym, Object.prototype.__class, [__lc("java.util.Iterator", "java.util.Iterator").prototype.__class], 1);
            return  Anonym;
            return ;
          })())();
        };
        Anonym.prototype.isEmpty = function(){
          return this.__enclosing.isEmpty();
        };
        Anonym.prototype.clear = function(){
          this.__enclosing.clear();
        };
        Anonym.prototype.contains = function(k){
          return this.__enclosing.containsKey(k);
        };
        Anonym.prototype.__class = new (__lc('java.lang.Class'))("java.util.AbstractMap$1", Anonym, __lc("java.util.AbstractSet", "java.util.AbstractSet").prototype.__class, [], 1);
        return  Anonym;
        return ;
      })())();
    }
    return this.keySet;
  };
  AbstractMap.prototype.values = function(){
    if(this.values == null)
    {
      this.values = new ((function() {
        function Anonym() {          
        __lc("java.util.AbstractCollection", "java.util.AbstractCollection").call(this);
        }
        Anonym.prototype.__proto__ = __lc("java.util.AbstractCollection", "java.util.AbstractCollection").prototype;
        __cache["java.util.AbstractMap$2"] = Anonym;
        Object.defineProperty(Anonym.prototype, "size", {
          get : function() {
            return this.__enclosing.size;
          }
        });
        Anonym.prototype.iterator = function(){
          return new ((function() {
            function Anonym() {              
              this.i = this.__enclosing.__enclosing.entrySet().iterator();
            }
            Anonym.prototype.__proto__ = Object.prototype;
            __cache["java.util.AbstractMap$2$1"] = Anonym;
            Anonym.prototype.hasNext = function(){
              return this.i.hasNext();
            };
            Anonym.prototype.next = function(){
              return this.i.next().getValue();
            };
            Anonym.prototype.remove = function(){
              __lc("java.util.Iterator", "java.util.Iterator").prototype.remove.call(this.i);
            };
            Anonym.prototype.__class = new (__lc('java.lang.Class'))("java.util.AbstractMap$2$1", Anonym, Object.prototype.__class, [__lc("java.util.Iterator", "java.util.Iterator").prototype.__class], 1);
            return  Anonym;
            return ;
          })())();
        };
        Anonym.prototype.isEmpty = function(){
          return this.__enclosing.isEmpty();
        };
        Anonym.prototype.clear = function(){
          this.__enclosing.clear();
        };
        Anonym.prototype.contains = function(v){
          return this.__enclosing.containsValue(v);
        };
        Anonym.prototype.__class = new (__lc('java.lang.Class'))("java.util.AbstractMap$2", Anonym, __lc("java.util.AbstractCollection", "java.util.AbstractCollection").prototype.__class, [], 1);
        return  Anonym;
        return ;
      })())();
    }
    return this.values;
  };
  AbstractMap.prototype.entrySet = function(){
  };
  AbstractMap.prototype.equals = function(o){
    if(o == this) return true
    if(! __lc("java.util.Map", "java.util.Map").prototype.__class.isInstance(o)) return false
    var m = o;
    if(m.size != this.size) return false
    try
    {
      var i = this.entrySet().iterator();
      while (i.hasNext())

      {
        var e = i.next();
        var key = e.getKey();
        var value = e.getValue();
        if(value == null)
        {
          if(! m.get(key) == null && m.containsKey(key)) return false
        }
        else
        {
          if(! value.equals(m.get(key))) return false
        }
      }
    }catch(unused)
    {
      return false;
    }
    return true;
  };
  AbstractMap.prototype.hashCode = function(){
    var h = 0;
    var i = this.entrySet().iterator();
    while (i.hasNext())
      h+=i.next().hashCode();
    return h;
  };
  AbstractMap.prototype.toString = function(){
    var i = this.entrySet().iterator();
    if(! i.hasNext()) return "{}"
    var sb = new Array();
    sb.push("{");
    for (; ; ) 
    {
      var e = i.next();
      var key = e.getKey();
      var value = e.getValue();
      sb.push(key == this ? "(this Map)" : key);
      sb.push("=");
      sb.push(value == this ? "(this Map)" : value);
      if(! i.hasNext())
      {
        sb.push("}");
        return sb.toString();
      }
      sb.push(",");
      sb.push(" ");
    }
  };
  AbstractMap.prototype.clone = function(){
    var result = Object.prototype.clone.call(this);
    result.keySet = null;
    result.values = null;
    return result;
  };
  AbstractMap.eq = function(o1, o2){
    return o1 == null ? o2 == null : o1.equals(o2);
  }
  AbstractMap.SimpleEntry = (function(){
    function SimpleEntry(){
      var args = Array.prototype.slice.call(arguments);
      return SimpleEntry.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
    }
    SimpleEntry.__f = {
      "null" : function(key, value) {      
      this.key = null;
      this.value = null;
      this.key = key;
      this.value = value;
    }, 
      "null" : function(entry) {      
      this.key = null;
      this.value = null;
      this.key = entry.getKey();
      this.value = entry.getValue();
    }
    };
    SimpleEntry.prototype.__proto__ = Object.prototype;
    __cache["java.util.AbstractMap$SimpleEntry"] = SimpleEntry;
    SimpleEntry.prototype.getKey = function(){
      return this.key;
    };
    SimpleEntry.prototype.getValue = function(){
      return this.value;
    };
    SimpleEntry.prototype.setValue = function(value){
      var oldValue = this.value;
      this.value = value;
      return oldValue;
    };
    SimpleEntry.prototype.equals = function(o){
      if(! Map.Entry.prototype.__class.isInstance(o)) return false
      var e = o;
      return __lc("java.util.AbstractMap", "java.util.AbstractMap").eq.call(this, this.key, e.getKey()) && __lc("java.util.AbstractMap", "java.util.AbstractMap").eq.call(this, this.value, e.getValue());
    };
    SimpleEntry.prototype.hashCode = function(){
      return (this.key == null ? 0 : this.key.hashCode()) ^ (this.value == null ? 0 : this.value.hashCode());
    };
    SimpleEntry.prototype.toString = function(){
      return this.key + "=" + this.value;
    };
    SimpleEntry.prototype.__class = new (__lc('java.lang.Class'))("java.util.AbstractMap$SimpleEntry", SimpleEntry, Object.prototype.__class, [__lc("java.util.Map").Entry.prototype.__class], 1);
    return  SimpleEntry;
    return SimpleEntry;
  })();
  AbstractMap.SimpleImmutableEntry = (function(){
    function SimpleImmutableEntry(){
      var args = Array.prototype.slice.call(arguments);
      return SimpleImmutableEntry.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
    }
    SimpleImmutableEntry.__f = {
      "null" : function(key, value) {      
      this.key = null;
      this.value = null;
      this.key = key;
      this.value = value;
    }, 
      "null" : function(entry) {      
      this.key = null;
      this.value = null;
      this.key = entry.getKey();
      this.value = entry.getValue();
    }
    };
    SimpleImmutableEntry.prototype.__proto__ = Object.prototype;
    __cache["java.util.AbstractMap$SimpleImmutableEntry"] = SimpleImmutableEntry;
    SimpleImmutableEntry.prototype.getKey = function(){
      return this.key;
    };
    SimpleImmutableEntry.prototype.getValue = function(){
      return this.value;
    };
    SimpleImmutableEntry.prototype.setValue = function(value){
      throw new (__lc("java.lang.UnsupportedOperationException", "java.lang.buildins"))();
    };
    SimpleImmutableEntry.prototype.equals = function(o){
      if(! Map.Entry.prototype.__class.isInstance(o)) return false
      var e = o;
      return __lc("java.util.AbstractMap", "java.util.AbstractMap").eq.call(this, this.key, e.getKey()) && __lc("java.util.AbstractMap", "java.util.AbstractMap").eq.call(this, this.value, e.getValue());
    };
    SimpleImmutableEntry.prototype.hashCode = function(){
      return (this.key == null ? 0 : this.key.hashCode()) ^ (this.value == null ? 0 : this.value.hashCode());
    };
    SimpleImmutableEntry.prototype.toString = function(){
      return this.key + "=" + this.value;
    };
    SimpleImmutableEntry.prototype.__class = new (__lc('java.lang.Class'))("java.util.AbstractMap$SimpleImmutableEntry", SimpleImmutableEntry, Object.prototype.__class, [__lc("java.util.Map").Entry.prototype.__class], 1);
    return  SimpleImmutableEntry;
    return SimpleImmutableEntry;
  })();
  AbstractMap.prototype.__readObject = function(json, handlers, obj) {
    var __propVal = null;
  };
  AbstractMap.prototype.__writeObject = function(obj, handlers) {
    var __r = {"__clazz" : "java.util.AbstractMap"};
    var __propVal = null;
    return __r;
  };
  AbstractMap.prototype.__class = new (__lc('java.lang.Class'))("java.util.AbstractMap", AbstractMap, Object.prototype.__class, [__lc("java.util.Map", "java.util.Map").prototype.__class], 1);
  return  AbstractMap;
})();