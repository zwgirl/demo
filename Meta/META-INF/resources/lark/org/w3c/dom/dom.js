(function(){ 
  DOMException.prototype.__proto__ = __lc("java.lang.RuntimeException").prototype;
  __cache["org.w3c.dom.DOMException"] = DOMException;
  DOMException.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.DOMException", DOMException, __lc("java.lang.RuntimeException").prototype.__class, [], 1);
  return  DOMException;
})();
(function(){ 
  __cache["org.w3c.dom.DOMStringList"] = DOMStringList;
  DOMStringList.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.DOMStringList", DOMStringList, Object.prototype.__class, [], 2);
  return  DOMStringList;
})();
(function(){ 
  __cache["org.w3c.dom.DOMImplementation"] = DOMImplementation;
  DOMImplementation.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.DOMImplementation", DOMImplementation, Object.prototype.__class, [], 2);
  return  DOMImplementation;
})();
(function(){ 
  __cache["org.w3c.dom.DocumentFragment"] = DocumentFragment;
  DocumentFragment.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.DocumentFragment", DocumentFragment, Object.prototype.__class, [DocumentFragment.prototype.__class], 2);
  return  DocumentFragment;
})();
(function(){ 
  __cache["org.w3c.dom.Node"] = Node;
  Object.defineProperty(Node.prototype, "template", {
    get : function() {
      return this["__template"] == undefined ? null : this["__template"];
    }, 
    set : function(value) {
      var old = this["__template"];
      if(old == value)
      {
        return;
      }
      if(old != null)
      {
        old.undoTemplate();
        old.unInject();
        this.dataContext.removeTemplateSetting(value);
      }
      this["__template"] = value;
      this.dataContext.addTemplateSetting(value);
    }
  });
  Object.defineProperty(Node.prototype, "dataContext", {
    get : function() {
      if(this["__dataContext"] === undefined)
      {
        return this.parentNode.dataContext;
      }
      else
      {
        return this["__dataContext"];
      }
    }, 
    set : function(value) {
      var old = this["__dataContext"];
      if(old === value)
      {
        return;
      }
      var pDc = this.parentNode.dataContext;
      if(old != null)
      {
        pDc.removeDependent(old);
      }
      this["__dataContext"] = value;
      switch (value.mode) {
      case __lc("java.lang.DataContextMode").Ancestor :
          break;
      case __lc("java.lang.DataContextMode").Root :
          document.documentElement.dataContext.addDependent(value);
          return;
      case __lc("java.lang.DataContextMode").Standalone :
          return;
      case __lc("java.lang.DataContextMode").Template :
          return;
      }
      if(value == null)
      {
        return;
      }
      pDc.addDependent(value);
      if(pDc.dataItem != null)
      {
        value.dataItem = pDc.dataItem[value.property];
      }
    }
  });
  Node.prototype.getBinding = function(prop1, prop2){
    if(this["__bindings"] == null)
    {
      return null;
    }
    return this["__bindings"][prop1 + "." + prop2];
  };
  Node.prototype.setBinding = function(roperties, binding){
    if(this["__bindings"] != null)
    {
      this["__bindings"] = new Array();
    }
    var old = this["__bindings"][roperties.join(".")];
    if(old === binding)
    {
      return;
    }
    if(old != null)
    {
      old.unInject();
    }
    this["__bindings"][roperties.join(".")] = binding;
    if(binding != null)
    {
      binding.inject(this, roperties);
    }
  };
  Node.prototype.addTemplate = function(template){
    var templates = this["__templates"];
    if(templates == null)
    {
      this["__templates"] = templates = new Map();
    }
    template["_container"] = this;
    templates.set(template.name, template);
    this.dataContext.addTemplateSetting(template);
  };
  Node.prototype.removeTemplate = function(name){
    var templates = this["__templates"];
    if(templates != null)
    {
      this.dataContext.removeTemplateSetting(this.template);
      return templates.delete(name);
    }
    return false;
  };
  Node.prototype.reset = function(){
    var children = this.childNodes;
    for (var i = 0, len = children.length; i < len; i ++) 
    {
      Node.prototype.reset.call(children[i]);
    }
    var dc = this["__dataContext"];
    if(dc != null)
    {
      dc.reset();
    }
  };
  Node.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Node", Node, Object.prototype.__class, [], 2);
  return  Node;
})();
(function(){ 
  function NodeList(){};
  __cache["org.w3c.dom.NodeList"] = NodeList;
  NodeList.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.NodeList", NodeList, Object.prototype.__class, [], 2);
  return  NodeList;
})();
(function(){ 
  function NamedNodeMap(){};
  __cache["org.w3c.dom.NamedNodeMap"] = NamedNodeMap;
  NamedNodeMap.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.NamedNodeMap", NamedNodeMap, Object.prototype.__class, [], 2);
  return  NamedNodeMap;
})();
(function(){ 
  __cache["org.w3c.dom.CharacterData"] = CharacterData;
  CharacterData.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.CharacterData", CharacterData, Object.prototype.__class, [CharacterData.prototype.__class], 2);
  return  CharacterData;
})();
(function(){ 
  __cache["org.w3c.dom.Attr"] = Attr;
  Object.defineProperty(Attr.prototype, "ownerElement", {

  });
  Attr.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Attr", Attr, Object.prototype.__class, [Attr.prototype.__class], 2);
  return  Attr;
})();
(function(){ 
  __cache["org.w3c.dom.Element"] = Element;
  Element.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Element", Element, Object.prototype.__class, [Element.prototype.__class], 2);
  return  Element;
})();
(function(){ 
  __cache["org.w3c.dom.Text"] = Text;
  Text.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Text", Text, Object.prototype.__class, [Text.prototype.__class], 2);
  return  Text;
})();
(function(){ 
  __cache["org.w3c.dom.Comment"] = Comment;
  Comment.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Comment", Comment, Object.prototype.__class, [Comment.prototype.__class], 2);
  return  Comment;
})();
(function(){ 
  __cache["org.w3c.dom.CDATASection"] = CDATASection;
  CDATASection.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.CDATASection", CDATASection, Object.prototype.__class, [CDATASection.prototype.__class], 2);
  return  CDATASection;
})();
(function(){ 
  function DocumentType(){};
  __cache["org.w3c.dom.DocumentType"] = DocumentType;
  DocumentType.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.DocumentType", DocumentType, Object.prototype.__class, [DocumentType.prototype.__class], 2);
  return  DocumentType;
})();
(function(){ 
  function Notation(){};
  __cache["org.w3c.dom.Notation"] = Notation;
  Notation.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Notation", Notation, Object.prototype.__class, [Notation.prototype.__class], 2);
  return  Notation;
})();
(function(){ 
  function Entity(){};
  __cache["org.w3c.dom.Entity"] = Entity;
  Entity.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Entity", Entity, Object.prototype.__class, [Entity.prototype.__class], 2);
  return  Entity;
})();
(function(){ 
  function EntityReference(){ };
  __cache["org.w3c.dom.EntityReference"] = EntityReference;
  EntityReference.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.EntityReference", EntityReference, Object.prototype.__class, [EntityReference.prototype.__class], 2);
  return  EntityReference;
})();
(function(){ 
  __cache["org.w3c.dom.ProcessingInstruction"] = ProcessingInstruction;
  ProcessingInstruction.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.ProcessingInstruction", ProcessingInstruction, Object.prototype.__class, [ProcessingInstruction.prototype.__class], 2);
  return  ProcessingInstruction;
})();
(function(){ 
  __cache["org.w3c.dom.Document"] = Document;
  Document.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Document", Document, Object.prototype.__class, [Document.prototype.__class, Document.prototype.__class], 2);
  return  Document;
})();
