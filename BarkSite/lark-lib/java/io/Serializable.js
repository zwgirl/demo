(function(){ 

  function Serializable(){ };
  Serializable.prototype.__proto__ = Object.prototype;
  Serializable.prototype.__class = new (__lc('java.lang.Class'))("java.io.Serializable", Serializable, Object, [], 2);
  return  __cache["java.io.Serializable"] = Serializable;
})()