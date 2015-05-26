(function(){ 
  File.prototype.__proto__ = Blob.prototype;
  __cache["org.w3c.file.File"] = File;
  File.__class = new (__lc('java.lang.Class'))("org.w3c.file.File", File, Blob.prototype.__class, [], 1);
  return  File;
})();
(function(){ 
  __cache["org.w3c.file.FileList"] = FileList;
  FileList.__class = new (__lc('java.lang.Class'))("org.w3c.file.FileList", FileList, Object.prototype.__class, [], 2);
  return  FileList;
})();
(function(){ 
  Blob.prototype.__proto__ = Object.prototype;
  __cache["org.w3c.file.Blob"] = Blob;
  Blob.__class = new (__lc('java.lang.Class'))("org.w3c.file.Blob", Blob, Object.prototype.__class, [], 1);
  return  Blob;
})();
(function(){ 
  FileReader.prototype.__proto__ = Object.prototype;
  __cache["org.w3c.file.FileReader"] = FileReader;
  FileReader.EMPTY = 0;
  FileReader.LOADING = 1;
  FileReader.DONE = 2;
  FileReader.__class = new (__lc('java.lang.Class'))("org.w3c.file.FileReader", FileReader, Object.prototype.__class, [FileReader.prototype.__class], 1);
  return  FileReader;
})();
