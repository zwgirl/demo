(function(){ 
  function RemotingDemo() {    
    this.onClick = (function(e){
      alert(__lc("remoting.PersonService").prototype.sayHello("Lark", "remoting.PersonService"));
    }).bind(this);
  }
  RemotingDemo.prototype.__proto__ = Object.prototype;
  __cache["remoting.RemotingDemo"] = RemotingDemo;
  RemotingDemo.prototype.__class = new (__lc('java.lang.Class'))("remoting.RemotingDemo", RemotingDemo, Object.prototype.__class, [], 1);
  return  RemotingDemo;
})();