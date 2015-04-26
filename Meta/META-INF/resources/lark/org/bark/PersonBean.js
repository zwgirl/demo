(function(){ 
  function PersonBean() {    
  }
  PersonBean.prototype.__proto__ = Object.prototype;
  __cache["org.bark.PersonBean"] = PersonBean;
  PersonBean.prototype.__readObject = function(json, handlers, obj) {};
  PersonBean.prototype.__writeObject = function(obj, handlers) {};
  PersonBean.prototype.__class = new (__lc('java.lang.Class'))("org.bark.PersonBean", PersonBean, Object.prototype.__class, [], 1);
  return  PersonBean;
})();