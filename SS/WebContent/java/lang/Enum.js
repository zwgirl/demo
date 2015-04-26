(function(){ 
  function Enum(name, ordinal) {    
    this._name = null;
    this._ordinal = 0;
    this._name = name;
    this._ordinal = ordinal;
  }
  Enum.prototype.__proto__ = Object.prototype;
  __cache["java.lang.Enum"] = Enum;
  Object.defineProperty(Enum.prototype, "name", {
    get : function() {
      return this._name;
    }
  });
  Object.defineProperty(Enum.prototype, "ordinal", {
    get : function() {
      return this._ordinal;
    }
  });
  Enum.prototype.toString = function(){
    return this.name;
  };
  Enum.prototype.equals = function(other){
    return this === other;
  };
  Enum.prototype.hashCode = function(){
    return Object.prototype.hashCode.call(this);
  };
  Enum.prototype.clone = function(){
    throw new (__lc('java.lang.CloneNotSupportedException'))();
  };
  Enum.prototype.compareTo = function(o){
    var other = o;
    var self = this;
    if(self.getClass() != other.getClass() && self.getDeclaringClass() != other.getDeclaringClass()) throw new Error()
    return self.ordinal - other.ordinal;
  };
  Enum.prototype.getDeclaringClass = function(){
    var clazz = this.getClass();
    var zuper = clazz.superClass;
    return (zuper == __lc("java.lang.Enum").prototype.__class) ? clazz : zuper;
  };
  Enum.serialVersionUID = 1;
  Enum.prototype.__class = new (__lc('java.lang.Class'))("java.lang.Enum", Enum, Object.prototype.__class, [__lc("java.lang.Comparable").prototype.__class, __lc("java.io.Serializable").prototype.__class], 1);
  return  Enum;
})();