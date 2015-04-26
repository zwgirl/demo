(function(){ 
  function RegisterService(){}
  RegisterService.prototype.__proto__ = Object.prototype;
  __cache["org.bark.RegisterService"] = RegisterService;
  RegisterService.prototype.save = function(person){
    try{
      return __invoke(new (__lc("org.bark.remoting.RemotingModel"))(arguments[arguments.length-1], "save", [__lc("org.bark.PersonBean").prototype.__class], [person]));
    }catch(e){
      throw e;
    }
  };
  RegisterService.prototype.delete = function(pid){
    try{
      return __invoke(new (__lc("org.bark.remoting.RemotingModel"))(arguments[arguments.length-1], "delete", [String.prototype.__class], [pid]));
    }catch(e){
      throw e;
    }
  };
  RegisterService.prototype.update = function(person){
    try{
      return __invoke(new (__lc("org.bark.remoting.RemotingModel"))(arguments[arguments.length-1], "update", [__lc("org.bark.PersonBean").prototype.__class], [person]));
    }catch(e){
      throw e;
    }
  };
  RegisterService.prototype.get = function(pid){
    try{
      return __invoke(new (__lc("org.bark.remoting.RemotingModel"))(arguments[arguments.length-1], "get", [String.prototype.__class], [pid]));
    }catch(e){
      throw e;
    }
  };
  RegisterService.prototype.__class = new (__lc('java.lang.Class'))("org.bark.RegisterService", RegisterService, Object.prototype.__class, [], 2);
  return  RegisterService;
})();