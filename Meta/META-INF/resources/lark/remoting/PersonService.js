(function(){ 
  function PersonService(){}
  PersonService.prototype.__proto__ = Object.prototype;
  __cache["remoting.PersonService"] = PersonService;
  PersonService.prototype.sayHello = function(name){
    try{
      return __invoke(new (__lc("org.bark.remoting.RemotingModel"))(arguments[arguments.length-1], "sayHello", [String.prototype.__class], [name]));
    }catch(e){
      throw e;
    }
  };
  PersonService.prototype.__class = new (__lc('java.lang.Class'))("remoting.PersonService", PersonService, Object.prototype.__class, [], 2);
  return  PersonService;
})();