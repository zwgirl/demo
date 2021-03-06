(function(){ 
  DOMException.prototype.__proto__ = __lc("java.lang.RuntimeException").prototype;
  __cache["org.w3c.dom.DOMException"] = DOMException;
  DOMException.__class = new (__lc('java.lang.Class'))("org.w3c.dom.DOMException", DOMException, __lc("java.lang.RuntimeException").prototype.__class, [], 1);
  return  DOMException;
})();
(function(){ 
  __cache["org.w3c.dom.DOMStringList"] = DOMStringList;
  DOMStringList.__class = new (__lc('java.lang.Class'))("org.w3c.dom.DOMStringList", DOMStringList, Object.prototype.__class, [], 2);
  return  DOMStringList;
})();
(function(){ 
  __cache["org.w3c.dom.DOMImplementation"] = DOMImplementation;
  DOMImplementation.__class = new (__lc('java.lang.Class'))("org.w3c.dom.DOMImplementation", DOMImplementation, Object.prototype.__class, [], 2);
  return  DOMImplementation;
})();
(function(){ 
  __cache["org.w3c.dom.DocumentFragment"] = DocumentFragment;
  DocumentFragment.__class = new (__lc('java.lang.Class'))("org.w3c.dom.DocumentFragment", DocumentFragment, Object.prototype.__class, [DocumentFragment.prototype.__class], 2);
  return  DocumentFragment;
})();
(function(){ 
  __cache["org.w3c.dom.Node"] = Node;
  Object.defineProperty(Node.prototype, "dataContext", {
    get : function() {
      return this["__context"];
    }, 
    set : function(value) {
      this["__context"] = value;
      Node.prototype.addDataContext.call(this, value);
    }
  });
  Object.defineProperty(Node.prototype, "logicParent", {
    get : function() {
      return this["_logicParent"];
    }, 
    set : function(value) {
      this["_logicParent"] = value;
    }
  });
  Node.prototype.getBinding = function(properties){
    var bindings = this["__bindings"];
    if(bindings == null)
    {
      return null;
    }
    return bindings.get(properties.join("."));
  };
  Node.prototype.setBinding = function(properties, binding){
    var bindings = this["__bindings"];
    if(bindings == null)
    {
      this["__bindings"] = bindings = new Map();
    }
    var old = bindings.get(properties.join("."));
    if(old === binding)
    {
      return;
    }
    if(old != null)
    {
      old.unInject(this);
    }
    bindings.set(properties.join("."), binding);
    binding.inject(this, properties);
  };
  Node.prototype.removeBinding = function(properties){
    var bindings = this["__bindings"];
    if(bindings == null)
    {
      return false;
    }
    var old = bindings.get(properties.join("."));
    if(old == null)
    {
      return false;
    }
    if(old != null)
    {
      old.unInject(this);
    }
    bindings.delete(properties.join("."));
    return true;
  };
  Node.prototype.attach = function(binding){
    switch (binding.trigger) {
    case __lc("java.lang.UpdateSourceTrigger").LostFocus :
        this.addEventListener("blur", binding.updateSource, false);
        break;
    case __lc("java.lang.UpdateSourceTrigger").PropertyChanged :
        this.addEventListener("input", binding.updateSource, false);
        this.addEventListener("change", binding.updateSource, false);
        break;
    default :
    }
  };
  Node.prototype.detach = function(binding){
    switch (binding.trigger) {
    case __lc("java.lang.UpdateSourceTrigger").LostFocus :
        this.removeEventListener("blur", binding.updateSource, false);
        break;
    case __lc("java.lang.UpdateSourceTrigger").PropertyChanged :
        this.removeEventListener("input", binding.updateSource, false);
        this.removeEventListener("change", binding.updateSource, false);
        break;
    default :
    }
  };
  Node.prototype.update = function(binding){
    var dc = Node.prototype.getDataContext.call(this, binding.context);
    if(dc == null)
    {
      console.log("the binding context[" + binding.context + "] in target[" + binding["_target"]["nodeName"] + "] with property[" + binding.targetProperties.join("-") + "] does not exists");
      return;
    }
    var data = dc.dataItem;
    if(! String.isNullOrEmpty(binding.property))
    {
      data = data == null ? null : data[binding.property];
    }
    var tag = this;
    var properties = binding.targetProperties;
    var length = properties.length;
    for (var i = 0; i < length - 1; i ++) 
    {
      if(binding.attribute)
      {
        tag = tag.getAttribute(properties[i]);
      }
      else
      {
        tag = tag[properties[i]];
      }
      if(tag == null) return
    }
    if(binding.converteTo != null)
    {
      data = binding.converteTo(data);
    }
    var oldValue = binding.attribute ? tag.getAttribute(properties[length - 1]) : tag[properties[length - 1]];
    if(data === oldValue)
    {
      return;
    }
    if(binding.updateTargetCallback != null)
    {
      binding.updateTargetCallback(this, properties[0], properties[1], data);
    }
    else
    {
      if(binding.attribute)
      {
        tag.setAttribute(properties[length - 1], data);
      }
      else
      {
        tag[properties[length - 1]] = data;
      }
    }
  };
  Node.prototype.getDataContext = function(name){
    if(String.isNullOrEmpty(name))
    {
      return null;
    }
    var contexts = this["__contexts"];
    if(contexts != null)
    {
      var result = contexts.get(name);
      if(result != null)
      {
        return result;
      }
    }
    if(this.logicParent != null)
    {
      return this.logicParent.getDataContext(name);
    }
    else if(this.parentNode != null)
    {
      return Node.prototype.getDataContext.call(this.parentNode, name);
    }
    return null;
  };
  Node.prototype.addDataContext = function(context){
    var contexts = this["__contexts"];
    if(contexts == null)
    {
      this["__contexts"] = contexts = new Map();
    }
    var old = contexts.get(context.name);
    if(old != null)
    {
      old.moveDependentTo(context);
    }
    contexts.set(context.name, context);
    if(context["_standalone"])
    {
      return;
    }
    if(this.logicParent != null)
    {
      var parent = this.logicParent.getDataContext(context.ancestor);
      if(parent != null)
      {
        parent.addDependent(context);
      }
      else
      {
        console.log("the ancestor DataContext with [" + context.ancestor + "] in DataContext[" + context.name + "] does not exists!");
      }
    }
    else if(this.parentNode != null)
    {
      var parent = Node.prototype.getDataContext.call(this.parentNode, context.ancestor);
      if(parent != null)
      {
        parent.addDependent(context);
      }
      else
      {
        console.log("the ancestor DataContext with [" + context.ancestor + "] in DataContext[" + context.name + "] does not exists!");
      }
    }
  };
  Node.prototype.removeDataContext = function(name){
    if(String.isNullOrEmpty(name))
    {
      return;
    }
    var contexts = this["__contexts"];
    if(contexts == null)
    {
      return;
    }
    var context = contexts.get(name);
    if(context != null)
    {
      context.clearDependents();
      if(! context["_standalone"])
      {
        if(this.logicParent != null)
        {
          var parent = this.logicParent.getDataContext(context.ancestor);
          if(parent != null)
          {
            parent.addDependent(context);
          }
          else
          {
            console.log("ancestor of DataContext[" + context.ancestor + "] does not exists!");
          }
        }
        else if(this.parentNode != null)
        {
          var parent = Node.prototype.getDataContext.call(this.parentNode, context.ancestor);
          if(parent != null)
          {
            parent.addDependent(context);
          }
          else
          {
            console.log("ancestor of DataContext[" + context.ancestor + "] does not exists!");
          }
        }
      }
      contexts.delete(name);
    }
  };
  Node.prototype.addLogicChild = function(child){
    var tags = this["_logicChilds"];
    if(tags == null)
    {
      this["_logicChilds"] = tags = new Array();
    }
    tags.push(child);
  };
  Node.prototype.remmoveLogicChild = function(child){
    var tags = this["_logicChilds"];
    if(tags != null)
    {
      tags.forEach((function(tag, index, array){
        if(tag == child)
        {
          tags.splice(index, 1);
        }
      }).bind(this));
    }
  };
  Node.prototype.reset = function(){
    while (this.firstChild != null)

    {
      Node.prototype.reset.call(this.firstChild);
    }
    var bindings = this["__bindings"];
    if(bindings != null)
    {
      bindings.forEach((function(binding, key, map){
        binding.reset();
      }).bind(this));
    }
    var contexts = this["__contexts"];
    if(contexts != null)
    {
      contexts.forEach((function(context, key, mapObj){
        context.reset(this);
      }).bind(this));
    }
    var tags = this["_logicChilds"];
    if(tags != null)
    {
      tags.forEach((function(tag, index, array){
        tag.reset();
      }).bind(this));
    }
    this.parentNode.removeChild(this);
  };
  Node.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Node", Node, Object.prototype.__class, [Node.prototype.__class, __lc("java.lang.Bindable").prototype.__class], 2);
  return  Node;
})();
(function(){ 
  __cache["org.w3c.dom.NodeList"] = NodeList;
  NodeList.__class = new (__lc('java.lang.Class'))("org.w3c.dom.NodeList", NodeList, Object.prototype.__class, [], 2);
  return  NodeList;
})();
(function(){ 
  __cache["org.w3c.dom.NamedNodeMap"] = NamedNodeMap;
  NamedNodeMap.__class = new (__lc('java.lang.Class'))("org.w3c.dom.NamedNodeMap", NamedNodeMap, Object.prototype.__class, [], 2);
  return  NamedNodeMap;
})();
(function(){ 
  __cache["org.w3c.dom.CharacterData"] = CharacterData;
  CharacterData.__class = new (__lc('java.lang.Class'))("org.w3c.dom.CharacterData", CharacterData, Object.prototype.__class, [CharacterData.prototype.__class], 2);
  return  CharacterData;
})();
(function(){ 
  __cache["org.w3c.dom.Attr"] = Attr;
  Object.defineProperty(Attr.prototype, "ownerElement", {

  });
  Attr.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Attr", Attr, Object.prototype.__class, [Attr.prototype.__class], 2);
  return  Attr;
})();
(function(){ 
  __cache["org.w3c.dom.Element"] = Element;
  Element.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Element", Element, Object.prototype.__class, [Element.prototype.__class], 2);
  return  Element;
})();
(function(){ 
  __cache["org.w3c.dom.Text"] = Text;
  Text.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Text", Text, Object.prototype.__class, [Text.prototype.__class], 2);
  return  Text;
})();
(function(){ 
  __cache["org.w3c.dom.Comment"] = Comment;
  Comment.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Comment", Comment, Object.prototype.__class, [Comment.prototype.__class], 2);
  return  Comment;
})();
(function(){ 
  __cache["org.w3c.dom.CDATASection"] = CDATASection;
  CDATASection.__class = new (__lc('java.lang.Class'))("org.w3c.dom.CDATASection", CDATASection, Object.prototype.__class, [CDATASection.prototype.__class], 2);
  return  CDATASection;
})();
(function(){ 
  function DocumentType(){};
  __cache["org.w3c.dom.DocumentType"] = DocumentType;
  DocumentType.__class = new (__lc('java.lang.Class'))("org.w3c.dom.DocumentType", DocumentType, Object.prototype.__class, [DocumentType.prototype.__class], 2);
  return  DocumentType;
})();
(function(){ 
  function Notation(){};
  __cache["org.w3c.dom.Notation"] = Notation;
  Notation.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Notation", Notation, Object.prototype.__class, [Notation.prototype.__class], 2);
  return  Notation;
})();
(function(){ 
  function Entity(){};
  __cache["org.w3c.dom.Entity"] = Entity;
  Entity.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Entity", Entity, Object.prototype.__class, [Entity.prototype.__class], 2);
  return  Entity;
})();
(function(){ 
  function EntityReference(){ };
  __cache["org.w3c.dom.EntityReference"] = EntityReference;
  EntityReference.__class = new (__lc('java.lang.Class'))("org.w3c.dom.EntityReference", EntityReference, Object.prototype.__class, [EntityReference.prototype.__class], 2);
  return  EntityReference;
})();
(function(){ 
  __cache["org.w3c.dom.ProcessingInstruction"] = ProcessingInstruction;
  ProcessingInstruction.__class = new (__lc('java.lang.Class'))("org.w3c.dom.ProcessingInstruction", ProcessingInstruction, Object.prototype.__class, [ProcessingInstruction.prototype.__class], 2);
  return  ProcessingInstruction;
})();
(function(){ 
  __cache["org.w3c.dom.Document"] = Document;
  Document.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Document", Document, Object.prototype.__class, [Document.prototype.__class, Document.prototype.__class], 2);
  return  Document;
})();
