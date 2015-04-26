(function(){ 

//  DOMException.prototype.__proto__ = __lc("java.lang.RuntimeException", "java.lang.buildins").prototype;
  __cache["org.w3c.dom.DOMException"] = DOMException;
  DOMException.serialVersionUID = 1;
  DOMException.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.DOMException", DOMException, __lc("java.lang.RuntimeException", "java.lang.buildins").prototype.__class, [], 1);
  return  DOMException;
})();
(function(){ 

//  DOMStringList.prototype.__proto__ = Object.prototype;
  __cache["org.w3c.dom.DOMStringList"] = DOMStringList;
  DOMStringList.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.DOMStringList", DOMStringList, Object.prototype.__class, [], 2);
  return  DOMStringList;
})();
(function(){ 

//  DOMImplementation.prototype.__proto__ = Object.prototype;
  __cache["org.w3c.dom.DOMImplementation"] = DOMImplementation;
  DOMImplementation.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.DOMImplementation", DOMImplementation, Object.prototype.__class, [], 2);
  return  DOMImplementation;
})();
(function(){ 

//  DocumentFragment.prototype.__proto__ = Object.prototype;
  __cache["org.w3c.dom.DocumentFragment"] = DocumentFragment;
  DocumentFragment.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.DocumentFragment", DocumentFragment, Object.prototype.__class, [DocumentFragment.prototype.__class], 2);
  return  DocumentFragment;
})();
(function(){ 

//  Node.prototype.__proto__ = Object.prototype;
  __cache["org.w3c.dom.Node"] = Node;
  Object.defineProperty(Node.prototype, "template", {
    get : function() {
      return this["__template"] == undefined ? null : this["__template"];
    }, 
    set : function(value) {
      this["__template"] = value;
    }
  });
  Object.defineProperty(Node.prototype, "itemsConfig", {
	    get : function() {
	      return this["__itemsConfig"] == undefined ? null : this["__itemsConfig"];
	    }, 
	    set : function(value) {
	      this["__itemsConfig"] = value;
	    }
	  });
  Object.defineProperty(Node.prototype, "dataContext", {
	    get : function() {
	      if (this["__dataContext"] === undefined)
	      {
	        if (this.parentNode == null)
	        {
	          return this["__dataContext"] = new (__lc('java.lang.DataContext'))('0');
	        }
	        else
	        {
	          return this.parentNode.dataContext;
	        }
	      }
	      else
	      {
	        return this["__dataContext"];
	      }
	    }, 
	    set : function(value) {
	      var old = this["__dataContext"];
	      if (old === value)
	      {
	        return ;
	      }
	      var parentDc = this.parentNode.dataContext;
	      this["__dataContext"] = value;
	      if (old != null && old.isRelative)
	      {
	        parentDc.removeDependent(old);
	      }
	      if (value == null)
	      {
	        return ;
	      }
	      if (value.isRelative)
	      {
	        parentDc.addDependent(value);
	        if (parentDc.dataItem != null)
	        {
	          value.dataItem = parentDc.dataItem[value.property];
	        }
	      }
	    }
	  });
  Node.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Node", Node, Object.prototype.__class, [], 2);
  return  Node;
})();
(function(){ 

  function NodeList(){};
//  NodeList.prototype.__proto__ = Object.prototype;
  __cache["org.w3c.dom.NodeList"] = NodeList;
  NodeList.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.NodeList", NodeList, Object.prototype.__class, [], 2);
  return  NodeList;
})();
(function(){ 

  function NamedNodeMap(){};
//  NamedNodeMap.prototype.__proto__ = Object.prototype;
  __cache["org.w3c.dom.NamedNodeMap"] = NamedNodeMap;
  NamedNodeMap.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.NamedNodeMap", NamedNodeMap, Object.prototype.__class, [], 2);
  return  NamedNodeMap;
})();
(function(){ 

//  CharacterData.prototype.__proto__ = Object.prototype;
  __cache["org.w3c.dom.CharacterData"] = CharacterData;
  CharacterData.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.CharacterData", CharacterData, Object.prototype.__class, [CharacterData.prototype.__class], 2);
  return  CharacterData;
})();
(function(){ 

//  Attr.prototype.__proto__ = Object.prototype;
  __cache["org.w3c.dom.Attr"] = Attr;
  Object.defineProperty(Attr.prototype, "ownerElement", {

  });
  Attr.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Attr", Attr, Object.prototype.__class, [Attr.prototype.__class], 2);
  return  Attr;
})();
(function(){ 

//  Element.prototype.__proto__ = Object.prototype;
  __cache["org.w3c.dom.Element"] = Element;
  Element.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Element", Element, Object.prototype.__class, [Element.prototype.__class], 2);
  return  Element;
})();
(function(){ 

//  Text.prototype.__proto__ = Object.prototype;
  __cache["org.w3c.dom.Text"] = Text;
  Text.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Text", Text, Object.prototype.__class, [Text.prototype.__class], 2);
  return  Text;
})();
(function(){ 

//  Comment.prototype.__proto__ = Object.prototype;
  __cache["org.w3c.dom.Comment"] = Comment;
  Comment.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Comment", Comment, Object.prototype.__class, [Comment.prototype.__class], 2);
  return  Comment;
})();
(function(){ 

//  CDATASection.prototype.__proto__ = Object.prototype;
  __cache["org.w3c.dom.CDATASection"] = CDATASection;
  CDATASection.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.CDATASection", CDATASection, Object.prototype.__class, [CDATASection.prototype.__class], 2);
  return  CDATASection;
})();
(function(){ 

  function DocumentType(){};
//  DocumentType.prototype.__proto__ = Object.prototype;
  __cache["org.w3c.dom.DocumentType"] = DocumentType;
  DocumentType.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.DocumentType", DocumentType, Object.prototype.__class, [DocumentType.prototype.__class], 2);
  return  DocumentType;
})();
//(function(){ 
//
////  Notation.prototype.__proto__ = Object.prototype;
//  __cache["org.w3c.dom.Notation"] = Notation;
//  Notation.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Notation", Notation, Object.prototype.__class, [Notation.prototype.__class], 2);
//  return  Notation;
//})();
//(function(){ 
//
////  Entity.prototype.__proto__ = Object.prototype;
//  __cache["org.w3c.dom.Entity"] = Entity;
//  Entity.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Entity", Entity, Object.prototype.__class, [Entity.prototype.__class], 2);
//  return  Entity;
//})();
//(function(){ 
//
////  EntityReference.prototype.__proto__ = Object.prototype;
//  __cache["org.w3c.dom.EntityReference"] = EntityReference;
//  EntityReference.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.EntityReference", EntityReference, Object.prototype.__class, [EntityReference.prototype.__class], 2);
//  return  EntityReference;
//})();
//(function(){ 
//
////  ProcessingInstruction.prototype.__proto__ = Object.prototype;
//  __cache["org.w3c.dom.ProcessingInstruction"] = ProcessingInstruction;
//  ProcessingInstruction.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.ProcessingInstruction", ProcessingInstruction, Object.prototype.__class, [ProcessingInstruction.prototype.__class], 2);
//  return  ProcessingInstruction;
//})();
(function(){ 

//  Document.prototype.__proto__ = Object.prototype;
  __cache["org.w3c.dom.Document"] = Document;
  Document.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.dom.Document", Document, Object.prototype.__class, [Document.prototype.__class], 2);
  return  Document;
})();
