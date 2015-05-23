var __cache = {};
var __lc = function(cls, file){
	var c = __cache[cls];
	if(c) return c;
	
	file = file ? file : cls;
	var xhr = new XMLHttpRequest();
	xhr.open('get', '/lark/' + file.split('.').join('/').concat(".js"), false);
	xhr.send(null);
	var node = document.createElement('script');
	node.type = 'text/javascript'; 
	node.text = xhr.responseText;
	var scripts = document.getElementsByTagName("script"), i = 0, isb = null, script;
	while(!isb){
		if(!/^stub/.test((script = scripts[i++]) && script.type)){
			isb= script;
		}
	}
	(isb.parentNode === undefined ? isb : isb.parentNode).insertBefore(node, isb);
	
	return __cache[cls];
};

function __getService(serviceName, fileName){
	return __lc(service, fileService).prototype;
}

//LarkInput
function LarkOutput(){
	
}

LarkOutput.prototype.write = function(obj){
	if(obj == null){
		return [{"__clazz": "java.lang.Object", "value" : null}];
	} else {
		var array = [];
		var referenceProcessor = new ReferenceProcessor();
		referenceProcessor.shared(obj);
		if(obj.getClass().isArray){
			array[0] = this.writeArray(obj, referenceProcessor);
		} else {
			array[0] = this.writeObject0(obj, referenceProcessor);
		}
		
		var references = referenceProcessor.references();
		var length = references.length, i = 1;
		while(i < references.length){
			var other = references[i];
			if(other.getClass().isArray){
				array[i++] = this.writeArray(other, referenceProcessor);
			} else {
				array[i++] = this.writeObject0(other, referenceProcessor);
			}
		}
		
		return JSON.stringify(array);
	}
};

LarkOutput.prototype.writeObject0 = function(obj, handlers){
	var clazz = obj.getClass();
	var r = {"__clazz":clazz.name};
	if(clazz === Number.prototype.__class){
		r["value"] = obj;
	} else if(clazz === String.prototype.__class){
		r["value"] = obj;
	} else if(clazz === Date.prototype.__class){
		r["value"] = obj;
	} else if(clazz === Number.prototype.__class){
		r["value"] = obj;
	} else if(clazz.name == "java.lang.Byte"){
		r["value"] = obj;
	} else if(clazz.name == "java.lang.Sort"){
		r["value"] = obj;
	} else if(clazz.name == "java.lang.Character"){
		r["value"] = obj;
	} else if(clazz.name == "java.lang.Integer"){
		r["value"] = obj;
	} else if(clazz.name == "java.lang.Long"){
		r["value"] = obj;
	} else if(clazz.name == "java.lang.Float"){
		r["value"] = obj;
	} else if(clazz.name == "java.lang.Double"){
		r["value"] = obj;
	} else if(clazz.name == "java.lang.Boolean"){
		r["value"] = obj;
	} else if(clazz.name == "java.lang.Class"){
		r["value"] = obj.name;
	} else if(clazz.name == "java.util.HashSet"){
		this.writeHashSet(r, obj, handlers);
	} else if(clazz.name == "java.util.HashMap"){
		this.writeHashMap(r, obj, handlers);
	} else if(clazz.name == "java.util.ArrayList"){
		this.writeArrayList(r, obj, handlers);
	} else if(clazz.isEnum){
		r["value"] = obj == null ? null : obj.name;
	} else if(clazz.isArray){
		r["value"] = obj == null ? null : handlers.shared(obj);
		element
	} else if(clazz === Object.prototype.__class){
		r["value"] = obj == null ? null : handlers.shared(obj);
	} else {
		return obj.__proto__.__writeObject(obj, handlers);
	}
	return r;
};

LarkOutput.prototype.writeArray = function(array, handlers){
	var r = {"__clazz":"[Ljava.lang.Object;"};
	var data = [];
	for(var i = 0, length = array.length; i<length; i++){
		var element = array[i];
		if(element == null){
			data[i] = null;
			continue;
		} 
		
		data[i] = handlers.shared(element);
	}
	r["value"] = data;
	return r;
};

function ReferenceProcessor(){
	this._references = [];
}

ReferenceProcessor.prototype.shared = function(handler){
	var length = this._references.length;
	for(var i = 0; i<length; i++){
		if(this._references[i] === handler){
			return i;
		}
	}
	this._references.push(handler);
	return length;
};

ReferenceProcessor.prototype.references = function(){
	return this._references;
};

//LarkInput
function LarkInput(data){
}

LarkInput.prototype.readObject = function (json){
	var array = JSON.parse(json), done = [], references = [];
	for(var i=0, length = array.length; i<length; i++){
		done[i] = null;
		var clazzName = array[i]["__clazz"];
		if(clazzName[0] == '['){
			references[i] = [];
			done[i] = Array;
		} else {
			var clazz = __lc(clazzName);
			if(clazz.prototype.__class.name == "java.util.HashMap"){
				done[i] = clazz;
				references[i] = new clazz();
			} else if(clazz.prototype.__class.name == "java.util.HashSet"){
				done[i] = clazz;
				references[i] = new clazz();
			} else if(clazz === Number){
				references[i] = array[i]["value"];
			} else if(clazz == String){
				references[i] = array[i]["value"];
			} else if(clazz == Date){
				references[i] = new Date(array[i]["value"]);
			} else if(clazz.prototype.__class.name == "java.lang.Byte"){
				references[i] = new (__lc("java.lang.Byte"))(array[i]["value"]);
			} else if(clazz.prototype.__class.name == "java.lang.Short"){
				references[i] = new (__lc("java.lang.Short"))(array[i]["value"]);
			} else if(clazz.prototype.__class.name == "java.lang.Character"){
				references[i] = new (__lc("java.lang.Character"))(array[i]["value"]);
			} else if(clazz.prototype.__class.name == "java.lang.Integer"){
				references[i] = new (__lc("java.lang.Integer"))(array[i]["value"]);
			} else if(clazz.prototype.__class.name == "java.lang.Long"){
				references[i] = new (__lc("java.lang.Long"))(array[i]["value"]);
			} else if(clazz.prototype.__class.name == "java.lang.Float"){
				references[i] = new (__lc("java.lang.Float"))(array[i]["value"]);
			} else if(clazz.prototype.__class.name == "java.lang.Double"){
				references[i] = new (__lc("java.lang.Double"))(array[i]["value"]);
			} else if(clazz.prototype.__class.name == "java.lang.Boolean"){
				references[i] = new Boolean(array[i]["value"]);
			} else if(clazz.prototype.__class.name == "java.lang.Class"){
				references[i] = __lc(array[i]["value"]).prototype.__class;
			} else if(clazz.prototype.__class.isArray){
				references[i] = [];
			} else if(clazz.prototype.__class.isEnum){
				references[i] = clazz.factory.valueOf(array[i]["value"]);
			} else {
				var ref = new clazz(0);
				ref.__proto__ = clazz.prototype;
				done[i] = clazz;
				references[i] = ref;
			}
		}
	}
		
	for(var i=0, length = array.length; i<length; i++){
		if(!done[i]){
			continue;
		}
		
		if(done[i] === Array){
			this.readArray(array[i], references, references[i]);
			done[i] = null;
		}
	}
	
	for(var i=0, length = array.length; i<length; i++){
		if(!done[i]){
			continue;
		}
		
		if(done[i].prototype.__class.name == "java.util.HashMap"){
			this.readHashMap(array[i], references, references[i]);
		} else if(done[i].prototype.__class.name == "java.util.HashSet"){
			this.readHashSet(array[i], references, references[i]);
		} else if(done[i].prototype.__class.name == "java.util.ArrayList"){
			this.readArrayList(array[i], references, references[i]);
		} else {
			done[i].prototype.__readObject(array[i], references, references[i]);
		}
	}
	
	return references[0];
};

//Array
LarkInput.prototype.readArray = function(object, references, array){
	var data = object["value"];
	for(var i=0, length = (data == null ? 0 : data.length); i<length; i++){
		array[i] = references[data[i]];
	}
	
	return array;
};
//HashMap
//{__class : "java.util.HashMap", value=[[kRef1,vRef1], [kRef2, vRef2]...]
LarkInput.prototype.readHashMap = function(json, handlers, obj) {
	var entries = json["value"]
	if(entries){
		for(var i = 0,length=entries.length;i<length;i++){
			obj.put(handlers[entries[i][0]], handlers[entries[i][1]]);
		}
	}
};
LarkOutput.prototype.writeHashMap = function(json, obj, handlers) {
    var map = obj["_map"];
    var entries = [];
	map.forEach(function(value, key, mapObj){
		var entry = [
			         key == null ? null : handlers.shared(key),
			         value == null ? null : handlers.shared(value)
			        ];
		entries.push(entry);
	});
	json["value"] = entries;
};

//ArrayList
//{__class : "java.util.ArrayList", value=[[kRef1,vRef1], [kRef2, vRef2]...]
LarkInput.prototype.readArrayList = function(json, handlers, obj) {
	var array = json["value"]
	if(array){
		var elements = [];
		for(var i = 0,length=array.length;i<length;i++){
			elements.push(handlers[array[i]]);
		}
		obj["elements"] = elements;
	}
};
LarkOutput.prototype.writeArrayList = function(json, obj, handlers) {
  var array = obj["elements"];
  var elements = [];
  array.forEach(function(value, i){
		elements.push(value == null ? null : handlers.shared(value));
  });
  json["value"] = elements;
};

LarkOutput.prototype.writeHashSet = function(json, obj, handlers) {
    var items = [];
	var set = obj["_set"];
	set.forEach(function(value, index, array){
		items.push(handlers.shared(value));
	});
	json["value"] = items;
};

//HashSet
//{__class : "java.util.HashSet", value=[ref1,...refn]}
LarkInput.prototype.readHashSet = function(json, handlers, obj) {
	var items = json["value"]
	if(items){
		for(var i = 0,length=items.length;i<length;i++){
			obj.add(handlers[items[i]]);
		}
	}
};


function __invoke(remotingModel){
	var xhr = new XMLHttpRequest();
	xhr.open('post', "/rpc", false);
//	xhr.overrideMimeType("application/x-www-form-urlencoded");   
//	xhr.overrideMimeType("multipart/form-data");
	
	var lo = new LarkOutput();
	var rpc = lo.write(remotingModel);
	
//	var formdata = new FormData();
//	formdata.append("rpc", "11111111111111"); 
//	xhr.setRequestHeder("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
//	xhr.setRequestHeader("Content-type:"application/x-www-form-urlencoded; charset=utf-8",
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
	xhr.send("rpc="+rpc);
	
//	xhr.send(formdata);
	var json = xhr.responseText;
	var li = new LarkInput();
	return li.readObject(json);
}

var _$ = window._$ = function(id){ 
	return document.getElementById(id);
};

_$.n = function(type){
	return document.createElement(type)
}
_$.ns = function(ns, type){
	return document.createElementNS(ns, type)
}
_$.svg = function(type){
	return document.createElementNS("http://www.w3.org/2000/svg", type)
}
_$.t = function(text){
	return document.createTextNode(text);
}
_$.a = function(p,c){
	return p.appendChild(c);
}
_$.attr = function(n,attr,value){
	n.setAttribute(attr, value);
}
_$.attrNS = function(ns,n,attr,value){
	n.setAttributeNS(ns,attr,value);
}

