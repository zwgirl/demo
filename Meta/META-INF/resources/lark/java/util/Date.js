(function(){ 
  Date.prototype.__proto__ = Object.prototype;
  __cache["java.util.Date"] = Date;
  Date.prototype.__class = new (__lc('java.lang.Class'))("java.util.Date", Date, Object.prototype.__class, [], 1);
  return  Date;
})();