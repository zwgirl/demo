(function(){ 
  function Date(){
    var args = Array.prototype.slice.call(arguments);
    return Date.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  Date.__f = {
    "null" : function() {    
  Date.call(this);
    this.fastTime = 0;
  }, 
    "null" : function(fastTime) {    
  Date.call(this);
    this.fastTime = 0;
  }
  };
  Date.prototype.__proto__ = Date.prototype;
  __cache["java.sql.Date"] = Date;
  Date.prototype.__class = new (__lc('java.lang.Class'))("java.sql.Date", Date, Date.prototype.__class, [], 1);
  return  Date;
})();
(function(){ 
  function Time(){
    var args = Array.prototype.slice.call(arguments);
    return Time.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  Time.__f = {
    "null" : function() {    
  Date.call(this);
    this.fastTime = 0;
    this.nanos = 0;
  }, 
    "null" : function(fastTime) {    
  Date.call(this);
    this.fastTime = 0;
    this.nanos = 0;
  }
  };
  Time.prototype.__proto__ = Date.prototype;
  __cache["java.sql.Time"] = Time;
  Time.prototype.__class = new (__lc('java.lang.Class'))("java.sql.Time", Time, Date.prototype.__class, [], 1);
  return  Time;
})();
(function(){ 
  function Timestamp(){
    var args = Array.prototype.slice.call(arguments);
    return Timestamp.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  Timestamp.__f = {
    "null" : function() {    
  Date.call(this);
    this.fastTime = 0;
  }, 
    "null" : function(fastTime) {    
  Date.call(this);
    this.fastTime = 0;
  }
  };
  Timestamp.prototype.__proto__ = Date.prototype;
  __cache["java.sql.Timestamp"] = Timestamp;
  Timestamp.prototype.__class = new (__lc('java.lang.Class'))("java.sql.Timestamp", Timestamp, Date.prototype.__class, [], 1);
  return  Timestamp;
})();
