(function(){ 
  function List(){};
  __cache["java.util.List"] = List;
  List.prototype.replaceAll = function(operator){
    var li = this.listIterator();
    while (li.hasNext())

    {
      li.set(operator(li.next()));
    }
  };
  List.prototype.sort = function(c){
  };
  List.prototype.__readObject = function(json, handlers, obj) {};
  List.prototype.__writeObject = function(obj, handlers) {};
  List.prototype.__class = new (__lc('java.lang.Class'))("java.util.List", List, Object.prototype.__class, [__lc("java.util.Collection", "java.util.Collection").prototype.__class], 2);
  return  List;
})();