(function(){ 
  function Person() {    
    this.p = null;
    this.p1 = null;
    this._name = null;
    this._age = 0;
    this._address = null;
    this._photoPath = null;
  }
  Person.prototype.__proto__ = Object.prototype;
  __cache["remoting.Person"] = Person;
  Object.defineProperty(Person.prototype, "name", {
    get : function() {
      return this._name;
    }, 
    set : function(value) {
      if(this._name === value)
      {
        return;
      }
      this._name = value;
    }
  });
  Object.defineProperty(Person.prototype, "age", {
    get : function() {
      return this._age;
    }, 
    set : function(value) {
      if(this._age === value)
      {
        return;
      }
      this._age = value;
    }
  });
  Object.defineProperty(Person.prototype, "address", {
    get : function() {
      return this._address;
    }, 
    set : function(value) {
      if(this._address === value)
      {
        return;
      }
      this._address = value;
    }
  });
  Object.defineProperty(Person.prototype, "photoPath", {
    get : function() {
      return this._photoPath;
    }, 
    set : function(value) {
      if(this._photoPath === value)
      {
        return;
      }
      this._photoPath = value;
    }
  });
  Person.prototype.__readObject = function(json, handlers, obj) {
    var __propVal = null;
        __propVal = json["p"];
    obj["p"] = __propVal == null ? null : handlers[__propVal];
        __propVal = json["p1"];
    obj["p1"] = __propVal == null ? null : handlers[__propVal];
    obj["_name"] = json["_name"];
    obj["_age"] = json["_age"];
    obj["_address"] = json["_address"];
    obj["_photoPath"] = json["_photoPath"];
  };
  Person.prototype.__writeObject = function(obj, handlers) {
    var __r = {"__clazz" : "remoting.Person"};
    var __propVal = null;
    __propVal = obj["p"];
    __r["p"] = __propVal == null ? null : handlers.shared(__propVal);
    __propVal = obj["p1"];
    __r["p1"] = __propVal == null ? null : handlers.shared(__propVal);
    __r["_name"] = obj["_name"];
    __r["_age"] = obj["_age"];
    __r["_address"] = obj["_address"];
    __r["_photoPath"] = obj["_photoPath"];
    return __r;
  };
  Person.prototype.__class = new (__lc('java.lang.Class'))("remoting.Person", Person, Object.prototype.__class, [], 1);
  return  Person;
})();