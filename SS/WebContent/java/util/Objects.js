(function(){ 
  function Objects() {    
  }
  Objects.prototype.__proto__ = Object.prototype;
  __cache["java.util.Objects"] = Objects;
  Objects.equals = function(a, b){
    return (a == b) || (a != null && a.equals(b));
  };
  Objects.deepEquals = function(a, b){
    if(a == b) return true;
    else if(a == null || b == null) return false;
    else return __lc("java.util.Arrays").deepEquals0(a, b);
  };
  Objects.hashCode = function(o){
    return o != null ? o.hashCode() : 0;
  };
  Objects.toString = function(o, nullDefault){
    return (o != null) ? o.toString() : nullDefault;
  };
  Objects.requireNonNull = function(obj){
    if(obj == null) throw new (__lc('java.lang.NullPointerException'))()
    return obj;
  };
  Objects.requireNonNull = function(obj, message){
    if(obj == null) throw new (__lc('java.lang.NullPointerException'))(message)
    return obj;
  };
  Objects.isNull = function(obj){
    return obj == null;
  };
  Objects.nonNull = function(obj){
    return obj != null;
  };
  Objects.prototype.__class = new (__lc('java.lang.Class'))("java.util.Objects", Objects, Object.prototype.__class, [], 1);
  return  Objects;
})();