var __cache = {};
var __lc = function(cls, file){
	var c = __cache[cls];
	if(c) return c;
	
	file = file ? file : cls;
	var xhr = new XMLHttpRequest();
	console.log(window.location.pathname);
//	console.log(file.split('.').join('/').concat(".js"));
//	xhr.open('get', '/' + file.split('.').join('/').concat(".js"), false);
	xhr.open('get', '/lark/' + file.split('.').join('/').concat(".js"), false);
//	xhr.open('get', '/' + file.concat(".lc"), false);
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
//			array[i] = this.writeObject0(references[i++], referenceProcessor);
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
	} else if(clazz.name === "java.lang.Byte"){
		r["value"] = obj;
	} else if(clazz.name === "java.lang.Sort"){
		r["value"] = obj;
	} else if(clazz.name === "java.lang.Character"){
		r["value"] = obj;
	} else if(clazz.name === "java.lang.Integer"){
		r["value"] = obj;
	} else if(clazz.name === "java.lang.Long"){
		r["value"] = obj;
	} else if(clazz.name === "java.lang.Float"){
		r["value"] = obj;
	} else if(clazz.name === "java.lang.Double"){
		r["value"] = obj;
	} else if(clazz.name === "java.lang.Boolean"){
		r["value"] = obj;
	} else if(clazz.name === "java.lang.Class"){
		var r = {"__clazz":"java.lang.Class"};
		r["value"] = obj.name;
	} else if(clazz.isEnum){
		r["value"] = obj == null ? null : obj.name;
	} else if(clazz.isArray){
		r["value"] = obj == null ? null : handlers.shared(obj);
	} else if(clazz === Object.prototype.__class){
		r["value"] = obj == null ? null : handlers.shared(obj);
	} else {
		return obj.__proto__.__writeObject(obj, handlers);
	}
	return r;
};

LarkOutput.prototype.writeArray = function(array, handler){
	var r = {"__clazz":"[Ljava.lang.Object;"};
	var data = [];
	for(var i = 0, length = array.length; i<length; i++){
		var element = array[i];
		if(element == null){
			data[i] = null;
		} else {
			data[i] = handler.shared(element);
		}
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
			done[i] == Array;
		} else {
			var clazz = __lc(clazzName);
			if(clazz === Number){
				references[i] = array[i]["value"];
			} else if(clazz == String){
				references[i] = array[i]["value"];
			} else if(clazz == Date){
				references[i] = new Date(array[i]["value"]);
			} else if(clazz.name === "java.lang.Byte"){
				references[i] = new (__lc("java.lang.Byte"))(array[i]["value"]);
			} else if(clazz.name === "java.lang.Short"){
				references[i] = new (__lc("java.lang.Short"))(array[i]["value"]);
			} else if(clazz.name === "java.lang.Character"){
				references[i] = new (__lc("java.lang.Character"))(array[i]["value"]);
			} else if(clazz.name === "java.lang.Integer"){
				references[i] = new (__lc("java.lang.Integer"))(array[i]["value"]);
			} else if(clazz.name === "java.lang.Long"){
				references[i] = new (__lc("java.lang.Long"))(array[i]["value"]);
			} else if(clazz.name === "java.lang.Float"){
				references[i] = new (__lc("java.lang.Float"))(array[i]["value"]);
			} else if(clazz.name === "java.lang.Double"){
				references[i] = new (__lc("java.lang.Double"))(array[i]["value"]);
			} else if(clazz.name === "java.lang.Boolean"){
				references[i] = new Boolean(array[i]["value"]);
			} else if(clazz.name === "java.lang.Class"){
				references[i] = __lc(array[i]["value"]).prototype.__class;
			} else if(clazz.prototype.__class.isArray){
				references[i] = [];
			} else if(clazz.prototype.__class.isEnum){
				references[i] = clazz.factory.valueOf(array[i]["value"]);
			} else {
				var ref = new clazz();
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
		
		if(done[i].isArray){
			this.readArray(array[i], references, references[i]);
		} else{
			done[i].prototype.__readObject(array[i], references, references[i]);
		}
	}
	
	return references[0];
};

//Array
LarkInput.prototype.readArray = function(object, references, array){
	var data = object["value"];
	for(var i=0; i<array.length; i++){
		array[i] = references[data[i]];
	}
	
	return array;
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
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("rpc="+rpc);
	
//	xhr.send(formdata);
	var json = xhr.responseText;
	var li = new LarkInput();
	return li.readObject(json);
}
