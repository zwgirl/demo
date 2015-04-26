(function(){ 
  __cache["org.w3c.html.html"] = html;
  html.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.html", html, Object.prototype.__class, [html.prototype.__class], 2);
  return  html;
})();
(function(){ 
  __cache["org.w3c.html.HTMLCollection"] = HTMLCollection;
  Object.defineProperty(HTMLCollection.prototype, "length", {

  });
  HTMLCollection.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLCollection", HTMLCollection, Object.prototype.__class, [], 2);
  return  HTMLCollection;
})();
(function(){ 
  __cache["org.w3c.html.HTMLFormControlsCollection"] = HTMLFormControlsCollection;
  Object.defineProperty(HTMLFormControlsCollection.prototype, "length", {

  });
  HTMLFormControlsCollection.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLFormControlsCollection", HTMLFormControlsCollection, Object.prototype.__class, [], 2);
  return  HTMLFormControlsCollection;
})();
(function(){ 
  __cache["org.w3c.html.HTMLOptionsCollection"] = HTMLOptionsCollection;
  HTMLOptionsCollection.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLOptionsCollection", HTMLOptionsCollection, Object.prototype.__class, [], 2);
  return  HTMLOptionsCollection;
})();
(function(){ 
  __cache["org.w3c.html.DOMTokenList"] = DOMTokenList;
  DOMTokenList.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.DOMTokenList", DOMTokenList, Object.prototype.__class, [], 2);
  return  DOMTokenList;
})();
(function(){ 
  __cache["org.w3c.html.DOMStringMap"] = DOMStringMap;
  DOMStringMap.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.DOMStringMap", DOMStringMap, Object.prototype.__class, [], 2);
  return  DOMStringMap;
})();
(function(){ 
  __cache["org.w3c.html.HTMLDocument"] = HTMLDocument;
  HTMLDocument.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLDocument", HTMLDocument, Object.prototype.__class, [HTMLDocument.prototype.__class], 2);
  return  HTMLDocument;
})();
(function(){ 
  __cache["org.w3c.html.HTMLElement"] = HTMLElement;
  Object.defineProperty(HTMLElement.prototype, "template", {
    get : function() {
      return this["__template"] == undefined ? null : this["__template"];
    }, 
    set : function(value) {
      this["__template"] = value;
    }
  });
  Object.defineProperty(HTMLElement.prototype, "itemTemplate", {
    get : function() {
      return this["__itemTemplate"] == undefined ? null : this["__itemTemplate"];
    }, 
    set : function(value) {
      this["__itemTemplate"] = value;
    }
  });
  Object.defineProperty(HTMLElement.prototype, "dataContext", {
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
      if(this["__dataContext"] == value)
      {
        return;
      }
      this["__dataContext"] = value;
    }
  });
  HTMLElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLElement", HTMLElement, Object.prototype.__class, [HTMLElement.prototype.__class, HTMLElement.prototype.__class], 2);
  return  HTMLElement;
})();
(function(){ 
  __cache["org.w3c.html.base"] = base;
  base.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.base", base, Object.prototype.__class, [base.prototype.__class], 2);
  return  base;
})();
(function(){ 
  __cache["org.w3c.html.link"] = link;
  link.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.link", link, Object.prototype.__class, [link.prototype.__class], 2);
  return  link;
})();
(function(){ 
  __cache["org.w3c.html.meta"] = meta;
  meta.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.meta", meta, Object.prototype.__class, [meta.prototype.__class], 2);
  return  meta;
})();
(function(){ 
  __cache["org.w3c.html.style"] = style;
  style.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.style", style, Object.prototype.__class, [style.prototype.__class], 2);
  return  style;
})();
(function(){ 
  __cache["org.w3c.html.script"] = script;
  script.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.script", script, Object.prototype.__class, [script.prototype.__class], 2);
  return  script;
})();
(function(){ 
  __cache["org.w3c.html.body"] = body;
  body.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.body", body, Object.prototype.__class, [body.prototype.__class], 2);
  return  body;
})();
(function(){ 
  __cache["org.w3c.html.head"] = head;
  head.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.head", head, Object.prototype.__class, [head.prototype.__class], 2);
  return  head;
})();
(function(){ 
  __cache["org.w3c.html.title"] = title;
  title.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.title", title, Object.prototype.__class, [title.prototype.__class], 2);
  return  title;
})();
(function(){ 
  __cache["org.w3c.html.blockquote"] = blockquote;
  blockquote.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.blockquote", blockquote, Object.prototype.__class, [blockquote.prototype.__class], 2);
  return  blockquote;
})();
(function(){ 
  __cache["org.w3c.html.ul"] = ul;
  ul.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.ul", ul, Object.prototype.__class, [ul.prototype.__class], 2);
  return  ul;
})();
(function(){ 
  __cache["org.w3c.html.ol"] = ol;
  ol.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.ol", ol, Object.prototype.__class, [ol.prototype.__class], 2);
  return  ol;
})();
(function(){ 
  __cache["org.w3c.html.li"] = li;
  li.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.li", li, Object.prototype.__class, [li.prototype.__class], 2);
  return  li;
})();
(function(){ 
  __cache["org.w3c.html.a"] = a;
  Object.defineProperty(a.prototype, "page", {
    get : function() {
      return this["__page"];
    }, 
    set : function(value) {
      this["__page"] = value;
    }
  });
  a.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.a", a, Object.prototype.__class, [a.prototype.__class], 2);
  return  a;
})();
(function(){ 
  __cache["org.w3c.html.time"] = time;
  time.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.time", time, Object.prototype.__class, [time.prototype.__class], 2);
  return  time;
})();
(function(){ 
  __cache["org.w3c.html.progress"] = progress;
  progress.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.progress", progress, Object.prototype.__class, [progress.prototype.__class], 2);
  return  progress;
})();
(function(){ 
  __cache["org.w3c.html.meter"] = meter;
  meter.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.meter", meter, Object.prototype.__class, [meter.prototype.__class], 2);
  return  meter;
})();
(function(){ 
  __cache["org.w3c.html.HTMLModElement"] = HTMLModElement;
  HTMLModElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLModElement", HTMLModElement, Object.prototype.__class, [HTMLModElement.prototype.__class], 2);
  return  HTMLModElement;
})();
(function(){ 
  __cache["org.w3c.html.img"] = img;
  img.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.img", img, Object.prototype.__class, [img.prototype.__class], 2);
  return  img;
})();
(function(){ 
  __cache["org.w3c.html.iframe"] = iframe;
  iframe.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.iframe", iframe, Object.prototype.__class, [iframe.prototype.__class], 2);
  return  iframe;
})();
(function(){ 
  __cache["org.w3c.html.embed"] = embed;
  embed.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.embed", embed, Object.prototype.__class, [embed.prototype.__class], 2);
  return  embed;
})();
(function(){ 
  __cache["org.w3c.html.object"] = object;
  Object.defineProperty(object.prototype, "validationMessage", {

  });
  object.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.object", object, Object.prototype.__class, [object.prototype.__class], 2);
  return  object;
})();
(function(){ 
  __cache["org.w3c.html.param"] = param;
  param.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.param", param, Object.prototype.__class, [param.prototype.__class], 2);
  return  param;
})();
(function(){ 
  __cache["org.w3c.html.source"] = source;
  source.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.source", source, Object.prototype.__class, [source.prototype.__class], 2);
  return  source;
})();
(function(){ 
  __cache["org.w3c.html.HTMLMediaElement"] = HTMLMediaElement;
  HTMLMediaElement.NETWORK_EMPTY = 0;
  HTMLMediaElement.NETWORK_IDLE = 1;
  HTMLMediaElement.NETWORK_LOADING = 2;
  HTMLMediaElement.NETWORK_LOADED = 3;
  HTMLMediaElement.NETWORK_NO_SOURCE = 4;
  HTMLMediaElement.HAVE_NOTHING = 0;
  HTMLMediaElement.HAVE_METADATA = 1;
  HTMLMediaElement.HAVE_CURRENT_DATA = 2;
  HTMLMediaElement.HAVE_FUTURE_DATA = 3;
  HTMLMediaElement.HAVE_ENOUGH_DATA = 4;
  HTMLMediaElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLMediaElement", HTMLMediaElement, Object.prototype.__class, [HTMLMediaElement.prototype.__class], 2);
  return  HTMLMediaElement;
})();
(function(){ 
  __cache["org.w3c.html.video"] = video;
  video.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.video", video, Object.prototype.__class, [video.prototype.__class], 2);
  return  video;
})();
(function(){ 
  __cache["org.w3c.html.audio"] = audio;
  audio.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.audio", audio, Object.prototype.__class, [audio.prototype.__class], 2);
  return  audio;
})();
(function(){ 
  __cache["org.w3c.html.CueRangeCallback"] = CueRangeCallback;
  CueRangeCallback.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.CueRangeCallback", CueRangeCallback, Object.prototype.__class, [], 2);
  return  CueRangeCallback;
})();
(function(){ 
  __cache["org.w3c.html.MediaError"] = MediaError;
  Object.defineProperty(MediaError.prototype, "code", {

  });
  MediaError.MEDIA_ERR_ABORTED = 1;
  MediaError.MEDIA_ERR_NETWORK = 2;
  MediaError.MEDIA_ERR_DECODE = 3;
  MediaError.MEDIA_ERR_NONE_SUPPORTED = 4;
  MediaError.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.MediaError", MediaError, Object.prototype.__class, [], 2);
  return  MediaError;
})();
(function(){ 
  __cache["org.w3c.html.TimeRanges"] = TimeRanges;
  TimeRanges.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.TimeRanges", TimeRanges, Object.prototype.__class, [], 2);
  return  TimeRanges;
})();
(function(){ 
  __cache["org.w3c.html.canvas"] = canvas;
  canvas.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.canvas", canvas, Object.prototype.__class, [canvas.prototype.__class], 2);
  return  canvas;
})();
(function(){ 
  function FileCallback(){};
  __cache["org.w3c.html.FileCallback"] = FileCallback;
  FileCallback.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.FileCallback", FileCallback, Object.prototype.__class, [], 2);
  return  FileCallback;
})();
(function(){ 
  __cache["org.w3c.html.CanvasRenderingContext2D"] = CanvasRenderingContext2D;
  Object.defineProperty(CanvasRenderingContext2D.prototype, "canvas", {

  });
  CanvasRenderingContext2D.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.CanvasRenderingContext2D", CanvasRenderingContext2D, Object.prototype.__class, [], 2);
  return  CanvasRenderingContext2D;
})();
(function(){ 
  __cache["org.w3c.html.CanvasGradient"] = CanvasGradient;
  CanvasGradient.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.CanvasGradient", CanvasGradient, Object.prototype.__class, [], 2);
  return  CanvasGradient;
})();
(function(){ 
  __cache["org.w3c.html.CanvasPattern"] = CanvasPattern;
  CanvasPattern.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.CanvasPattern", CanvasPattern, Object.prototype.__class, [], 2);
  return  CanvasPattern;
})();
(function(){ 
  __cache["org.w3c.html.TextMetrics"] = TextMetrics;
  Object.defineProperty(TextMetrics.prototype, "width", {

  });
  TextMetrics.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.TextMetrics", TextMetrics, Object.prototype.__class, [], 2);
  return  TextMetrics;
})();
(function(){ 
  __cache["org.w3c.html.ImageData"] = ImageData;
  ImageData.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.ImageData", ImageData, Object.prototype.__class, [], 2);
  return  ImageData;
})();
(function(){ 
  __cache["org.w3c.html.CanvasPixelArray"] = CanvasPixelArray;
  CanvasPixelArray.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.CanvasPixelArray", CanvasPixelArray, Object.prototype.__class, [], 2);
  return  CanvasPixelArray;
})();
(function(){ 
  __cache["org.w3c.html.map"] = map;
  map.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.map", map, Object.prototype.__class, [map.prototype.__class], 2);
  return  map;
})();
(function(){ 
  __cache["org.w3c.html.area"] = area;
  Object.defineProperty(area.prototype, "relList", {

  });
  area.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.area", area, Object.prototype.__class, [area.prototype.__class], 2);
  return  area;
})();
(function(){ 
  __cache["org.w3c.html.table"] = table;
  Object.defineProperty(table.prototype, "tHead", {

  });
  Object.defineProperty(table.prototype, "tFoot", {

  });
  table.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.table", table, Object.prototype.__class, [table.prototype.__class], 2);
  return  table;
})();
(function(){ 
  __cache["org.w3c.html.caption"] = caption;
  caption.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.caption", caption, Object.prototype.__class, [caption.prototype.__class], 2);
  return  caption;
})();
(function(){ 
  __cache["org.w3c.html.HTMLTableColElement"] = HTMLTableColElement;
  HTMLTableColElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLTableColElement", HTMLTableColElement, Object.prototype.__class, [HTMLTableColElement.prototype.__class], 2);
  return  HTMLTableColElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLTableSectionElement"] = HTMLTableSectionElement;
  HTMLTableSectionElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLTableSectionElement", HTMLTableSectionElement, Object.prototype.__class, [HTMLTableSectionElement.prototype.__class], 2);
  return  HTMLTableSectionElement;
})();
(function(){ 
  __cache["org.w3c.html.tr"] = tr;
  tr.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.tr", tr, Object.prototype.__class, [tr.prototype.__class], 2);
  return  tr;
})();
(function(){ 
  __cache["org.w3c.html.HTMLTableCellElement"] = HTMLTableCellElement;
  HTMLTableCellElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLTableCellElement", HTMLTableCellElement, Object.prototype.__class, [HTMLTableCellElement.prototype.__class], 2);
  return  HTMLTableCellElement;
})();
(function(){ 
  __cache["org.w3c.html.td"] = td;
  td.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.td", td, Object.prototype.__class, [td.prototype.__class], 2);
  return  td;
})();
(function(){ 
  __cache["org.w3c.html.th"] = th;
  th.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.th", th, Object.prototype.__class, [th.prototype.__class], 2);
  return  th;
})();
(function(){ 
  __cache["org.w3c.html.form"] = form;
  form.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.form", form, Object.prototype.__class, [form.prototype.__class], 2);
  return  form;
})();
(function(){ 
  __cache["org.w3c.html.fieldset"] = fieldset;
  Object.defineProperty(fieldset.prototype, "form", {

  });
  fieldset.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.fieldset", fieldset, Object.prototype.__class, [fieldset.prototype.__class], 2);
  return  fieldset;
})();
(function(){ 
  __cache["org.w3c.html.label"] = label;
  label.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.label", label, Object.prototype.__class, [label.prototype.__class], 2);
  return  label;
})();
(function(){ 
  __cache["org.w3c.html.input"] = input;
  input.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.input", input, Object.prototype.__class, [input.prototype.__class], 2);
  return  input;
})();
(function(){ 
  __cache["org.w3c.html.button"] = button;
  button.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.button", button, Object.prototype.__class, [button.prototype.__class], 2);
  return  button;
})();
(function(){ 
  __cache["org.w3c.html.select"] = select;
  select.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.select", select, Object.prototype.__class, [select.prototype.__class], 2);
  return  select;
})();
(function(){ 
  __cache["org.w3c.html.datalist"] = datalist;
  datalist.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.datalist", datalist, Object.prototype.__class, [datalist.prototype.__class], 2);
  return  datalist;
})();
(function(){ 
  __cache["org.w3c.html.optgroup"] = optgroup;
  optgroup.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.optgroup", optgroup, Object.prototype.__class, [optgroup.prototype.__class], 2);
  return  optgroup;
})();
(function(){ 
  __cache["org.w3c.html.option"] = option;
  option.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.option", option, Object.prototype.__class, [option.prototype.__class], 2);
  return  option;
})();
(function(){ 
  __cache["org.w3c.html.textarea"] = textarea;
  textarea.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.textarea", textarea, Object.prototype.__class, [textarea.prototype.__class], 2);
  return  textarea;
})();
(function(){ 
  __cache["org.w3c.html.output"] = output;
  output.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.output", output, Object.prototype.__class, [output.prototype.__class], 2);
  return  output;
})();
(function(){ 
  __cache["org.w3c.html.ValidityState"] = ValidityState;
  ValidityState.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.ValidityState", ValidityState, Object.prototype.__class, [], 2);
  return  ValidityState;
})();
(function(){ 
  __cache["org.w3c.html.HTMLDetailsElement"] = HTMLDetailsElement;
  HTMLDetailsElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLDetailsElement", HTMLDetailsElement, Object.prototype.__class, [HTMLDetailsElement.prototype.__class], 2);
  return  HTMLDetailsElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLCommandElement"] = HTMLCommandElement;
  HTMLCommandElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLCommandElement", HTMLCommandElement, Object.prototype.__class, [HTMLCommandElement.prototype.__class], 2);
  return  HTMLCommandElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLBrowserButtonElement"] = HTMLBrowserButtonElement;
  HTMLBrowserButtonElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLBrowserButtonElement", HTMLBrowserButtonElement, Object.prototype.__class, [HTMLBrowserButtonElement.prototype.__class], 2);
  return  HTMLBrowserButtonElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLMenuElement"] = HTMLMenuElement;
  HTMLMenuElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLMenuElement", HTMLMenuElement, Object.prototype.__class, [HTMLMenuElement.prototype.__class], 2);
  return  HTMLMenuElement;
})();
(function(){ 
  __cache["org.w3c.html.Command"] = Command;
  Command.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.Command", Command, Object.prototype.__class, [], 2);
  return  Command;
})();
(function(){ 
  __cache["org.w3c.html.legend"] = legend;
  legend.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.legend", legend, Object.prototype.__class, [legend.prototype.__class], 2);
  return  legend;
})();
(function(){ 
  __cache["org.w3c.html.BarProp"] = BarProp;
  Object.defineProperty(BarProp.prototype, "visible", {

  });
  BarProp.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.BarProp", BarProp, Object.prototype.__class, [], 2);
  return  BarProp;
})();
(function(){ 
  function WindowModal(){};
  __cache["org.w3c.html.WindowModal"] = WindowModal;
  WindowModal.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.WindowModal", WindowModal, Object.prototype.__class, [], 2);
  return  WindowModal;
})();
(function(){ 
  __cache["org.w3c.html.Navigator"] = Navigator;
  Navigator.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.Navigator", Navigator, Object.prototype.__class, [], 2);
  return  Navigator;
})();
(function(){ 
  __cache["org.w3c.html.NavigatorID"] = NavigatorID;
  NavigatorID.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.NavigatorID", NavigatorID, Object.prototype.__class, [], 2);
  return  NavigatorID;
})();
(function(){ 
  __cache["org.w3c.html.NavigatorOnLine"] = NavigatorOnLine;
  NavigatorOnLine.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.NavigatorOnLine", NavigatorOnLine, Object.prototype.__class, [], 2);
  return  NavigatorOnLine;
})();
(function(){ 
  __cache["org.w3c.html.NavigatorAbilities"] = NavigatorAbilities;
  NavigatorAbilities.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.NavigatorAbilities", NavigatorAbilities, Object.prototype.__class, [], 2);
  return  NavigatorAbilities;
})();
(function(){ 
  __cache["org.w3c.html.ApplicationCache"] = ApplicationCache;
  ApplicationCache.UNCACHED = 0;
  ApplicationCache.IDLE = 1;
  ApplicationCache.CHECKING = 2;
  ApplicationCache.DOWNLOADING = 3;
  ApplicationCache.UPDATEREADY = 4;
  ApplicationCache.OBSOLETE = 5;
  ApplicationCache.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.ApplicationCache", ApplicationCache, Object.prototype.__class, [], 2);
  return  ApplicationCache;
})();
(function(){ 
  __cache["org.w3c.html.History"] = History;
  History.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.History", History, Object.prototype.__class, [], 2);
  return  History;
})();
(function(){ 
  __cache["org.w3c.html.PopStateEvent"] = PopStateEvent;
  PopStateEvent.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.PopStateEvent", PopStateEvent, Object.prototype.__class, [PopStateEvent.prototype.__class], 2);
  return  PopStateEvent;
})();
(function(){ 
  __cache["org.w3c.html.Location"] = Location;
  Location.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.Location", Location, Object.prototype.__class, [], 2);
  return  Location;
})();
(function(){ 
  __cache["org.w3c.html.BeforeUnloadEvent"] = BeforeUnloadEvent;
  BeforeUnloadEvent.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.BeforeUnloadEvent", BeforeUnloadEvent, Object.prototype.__class, [BeforeUnloadEvent.prototype.__class], 2);
  return  BeforeUnloadEvent;
})();
(function(){ 
  __cache["org.w3c.html.Selection"] = Selection;
  Object.defineProperty(Selection.prototype, "focusNode", {

  });
  Object.defineProperty(Selection.prototype, "rangeCount", {

  });
  Selection.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.Selection", Selection, Object.prototype.__class, [], 2);
  return  Selection;
})();
(function(){ 
  __cache["org.w3c.html.UndoManager"] = UndoManager;
  Object.defineProperty(UndoManager.prototype, "length", {

  });
  Object.defineProperty(UndoManager.prototype, "position", {

  });
  UndoManager.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.UndoManager", UndoManager, Object.prototype.__class, [], 2);
  return  UndoManager;
})();
(function(){ 
  __cache["org.w3c.html.UndoManagerEvent"] = UndoManagerEvent;
  UndoManagerEvent.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.UndoManagerEvent", UndoManagerEvent, Object.prototype.__class, [UndoManagerEvent.prototype.__class], 2);
  return  UndoManagerEvent;
})();
(function(){ 
  __cache["org.w3c.html.MessageEvent"] = MessageEvent;
  MessageEvent.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.MessageEvent", MessageEvent, Object.prototype.__class, [MessageEvent.prototype.__class], 2);
  return  MessageEvent;
})();
(function(){ 
  __cache["org.w3c.html.MessageChannel"] = MessageChannel;
  MessageChannel.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.MessageChannel", MessageChannel, Object.prototype.__class, [], 2);
  return  MessageChannel;
})();
(function(){ 
  __cache["org.w3c.html.MessagePort"] = MessagePort;
  Object.defineProperty(MessagePort.prototype, "onmessage", {

  });
  MessagePort.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.MessagePort", MessagePort, Object.prototype.__class, [], 2);
  return  MessagePort;
})();
(function(){ 
  __cache["org.w3c.html.WindowTimers"] = WindowTimers;
  WindowTimers.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.WindowTimers", WindowTimers, Object.prototype.__class, [], 2);
  return  WindowTimers;
})();
(function(){ 
  __cache["org.w3c.html.TimeoutHandler"] = TimeoutHandler;
  TimeoutHandler.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.TimeoutHandler", TimeoutHandler, Object.prototype.__class, [], 2);
  return  TimeoutHandler;
})();
(function(){ 
  __cache["org.w3c.html.MediaModeAbstractView"] = MediaModeAbstractView;
  MediaModeAbstractView.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.MediaModeAbstractView", MediaModeAbstractView, Object.prototype.__class, [], 2);
  return  MediaModeAbstractView;
})();
(function(){ 
  __cache["org.w3c.html.div"] = div;
  div.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.div", div, Object.prototype.__class, [div.prototype.__class], 2);
  return  div;
})();
(function(){ 
  __cache["org.w3c.html.span"] = span;
  span.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.span", span, Object.prototype.__class, [span.prototype.__class], 2);
  return  span;
})();
(function(){ 
  __cache["org.w3c.html.pre"] = pre;
  pre.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.pre", pre, Object.prototype.__class, [pre.prototype.__class], 2);
  return  pre;
})();
(function(){ 
  __cache["org.w3c.html.hr"] = hr;
  hr.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.hr", hr, Object.prototype.__class, [hr.prototype.__class], 2);
  return  hr;
})();
(function(){ 
  __cache["org.w3c.html.p"] = p;
  p.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.p", p, Object.prototype.__class, [p.prototype.__class], 2);
  return  p;
})();
(function(){ 
  __cache["org.w3c.html.HTMLDListElement"] = HTMLDListElement;
  HTMLDListElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLDListElement", HTMLDListElement, Object.prototype.__class, [HTMLDListElement.prototype.__class], 2);
  return  HTMLDListElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLHeadingElement"] = HTMLHeadingElement;
  HTMLHeadingElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLHeadingElement", HTMLHeadingElement, Object.prototype.__class, [HTMLHeadingElement.prototype.__class], 2);
  return  HTMLHeadingElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLDataElement"] = HTMLDataElement;
  HTMLDataElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLDataElement", HTMLDataElement, Object.prototype.__class, [HTMLDataElement.prototype.__class], 2);
  return  HTMLDataElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLTrackElement"] = HTMLTrackElement;
  HTMLTrackElement.NONE = 0;
  HTMLTrackElement.LOADING = 1;
  HTMLTrackElement.LOADED = 2;
  HTMLTrackElement.ERROR = 3;
  HTMLTrackElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLTrackElement", HTMLTrackElement, Object.prototype.__class, [HTMLTrackElement.prototype.__class], 2);
  return  HTMLTrackElement;
})();
(function(){ 
  function TextTrackMode() {    
  }
  TextTrackMode.prototype.__proto__ = Object.prototype;
  __cache["org.w3c.html.TextTrackMode"] = TextTrackMode;
  TextTrackMode.disabled = "disabled";
  TextTrackMode.hidden = "hidden";
  TextTrackMode.showing = "showing";
  TextTrackMode.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.TextTrackMode", TextTrackMode, Object.prototype.__class, [], 1);
  return  TextTrackMode;
})();
(function(){ 
  function TextTrackKind() {    
  }
  TextTrackKind.prototype.__proto__ = Object.prototype;
  __cache["org.w3c.html.TextTrackKind"] = TextTrackKind;
  TextTrackKind.subtitles = "subtitles";
  TextTrackKind.captions = "captions";
  TextTrackKind.descriptions = "descriptions";
  TextTrackKind.chapters = "chapters";
  TextTrackKind.metadata = "metadata";
  TextTrackKind.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.TextTrackKind", TextTrackKind, Object.prototype.__class, [], 1);
  return  TextTrackKind;
})();
(function(){ 
  function TextTrack(){};
  __cache["org.w3c.html.TextTrack"] = TextTrack;
  TextTrack.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.TextTrack", TextTrack, Object.prototype.__class, [TextTrack.prototype.__class], 2);
  return  TextTrack;
})();
(function(){ 
  function TextTrackCueList(){};
  __cache["org.w3c.html.TextTrackCueList"] = TextTrackCueList;
  TextTrackCueList.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.TextTrackCueList", TextTrackCueList, Object.prototype.__class, [], 2);
  return  TextTrackCueList;
})();
(function(){ 
  function TextTrackCue(){};
  __cache["org.w3c.html.TextTrackCue"] = TextTrackCue;
  TextTrackCue.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.TextTrackCue", TextTrackCue, Object.prototype.__class, [TextTrackCue.prototype.__class], 2);
  return  TextTrackCue;
})();
(function(){ 
  __cache["org.w3c.html.keygen"] = keygen;
  Object.defineProperty(keygen.prototype, "form", {

  });
  keygen.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.keygen", keygen, Object.prototype.__class, [keygen.prototype.__class], 2);
  return  keygen;
})();
(function(){ 
  __cache["org.w3c.html.template"] = template;
  template.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.template", template, Object.prototype.__class, [template.prototype.__class], 2);
  return  template;
})();
(function(){ 
  function br(){ };
  __cache["org.w3c.html.br"] = br;
  br.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.br", br, Object.prototype.__class, [br.prototype.__class], 2);
  return  br;
})();
(function(){ 
  function wbr(){ };
  __cache["org.w3c.html.wbr"] = wbr;
  wbr.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.wbr", wbr, Object.prototype.__class, [wbr.prototype.__class], 2);
  return  wbr;
})();
(function(){ 
  function dd(){ };
  __cache["org.w3c.html.dd"] = dd;
  dd.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.dd", dd, Object.prototype.__class, [dd.prototype.__class], 2);
  return  dd;
})();
(function(){ 
  function dl(){ };
  __cache["org.w3c.html.dl"] = dl;
  dl.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.dl", dl, Object.prototype.__class, [dl.prototype.__class], 2);
  return  dl;
})();
(function(){ 
  function dt(){ };
  __cache["org.w3c.html.dt"] = dt;
  dt.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.dt", dt, Object.prototype.__class, [dt.prototype.__class], 2);
  return  dt;
})();
(function(){ 
  function figure(){ };
  __cache["org.w3c.html.figure"] = figure;
  figure.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.figure", figure, Object.prototype.__class, [figure.prototype.__class], 2);
  return  figure;
})();
(function(){ 
  function figcaption(){ };
  __cache["org.w3c.html.figcaption"] = figcaption;
  figcaption.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.figcaption", figcaption, Object.prototype.__class, [figcaption.prototype.__class], 2);
  return  figcaption;
})();
(function(){ 
  function main(){ };
  __cache["org.w3c.html.main"] = main;
  main.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.main", main, Object.prototype.__class, [main.prototype.__class], 2);
  return  main;
})();
(function(){ 
  function article(){ };
  __cache["org.w3c.html.article"] = article;
  article.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.article", article, Object.prototype.__class, [article.prototype.__class], 2);
  return  article;
})();
(function(){ 
  function section(){ };
  __cache["org.w3c.html.section"] = section;
  section.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.section", section, Object.prototype.__class, [section.prototype.__class], 2);
  return  section;
})();
(function(){ 
  function nav(){ };
  __cache["org.w3c.html.nav"] = nav;
  nav.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.nav", nav, Object.prototype.__class, [nav.prototype.__class], 2);
  return  nav;
})();
(function(){ 
  function aside(){ };
  __cache["org.w3c.html.aside"] = aside;
  aside.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.aside", aside, Object.prototype.__class, [aside.prototype.__class], 2);
  return  aside;
})();
(function(){ 
  function header(){ };
  __cache["org.w3c.html.header"] = header;
  header.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.header", header, Object.prototype.__class, [header.prototype.__class], 2);
  return  header;
})();
(function(){ 
  function footer(){ };
  __cache["org.w3c.html.footer"] = footer;
  footer.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.footer", footer, Object.prototype.__class, [footer.prototype.__class], 2);
  return  footer;
})();
(function(){ 
  function address(){ };
  __cache["org.w3c.html.address"] = address;
  address.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.address", address, Object.prototype.__class, [address.prototype.__class], 2);
  return  address;
})();
(function(){ 
  function em(){ };
  __cache["org.w3c.html.em"] = em;
  em.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.em", em, Object.prototype.__class, [em.prototype.__class], 2);
  return  em;
})();
(function(){ 
  function strong(){ };
  __cache["org.w3c.html.strong"] = strong;
  strong.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.strong", strong, Object.prototype.__class, [strong.prototype.__class], 2);
  return  strong;
})();
(function(){ 
  function small(){ };
  __cache["org.w3c.html.small"] = small;
  small.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.small", small, Object.prototype.__class, [small.prototype.__class], 2);
  return  small;
})();
(function(){ 
  function s(){ };
  __cache["org.w3c.html.s"] = s;
  s.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.s", s, Object.prototype.__class, [s.prototype.__class], 2);
  return  s;
})();
(function(){ 
  function cite(){ };
  __cache["org.w3c.html.cite"] = cite;
  cite.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.cite", cite, Object.prototype.__class, [cite.prototype.__class], 2);
  return  cite;
})();
(function(){ 
  function q(){ };
  __cache["org.w3c.html.q"] = q;
  q.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.q", q, Object.prototype.__class, [q.prototype.__class], 2);
  return  q;
})();
(function(){ 
  function dfn(){ };
  __cache["org.w3c.html.dfn"] = dfn;
  dfn.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.dfn", dfn, Object.prototype.__class, [dfn.prototype.__class], 2);
  return  dfn;
})();
(function(){ 
  function abbr(){ };
  __cache["org.w3c.html.abbr"] = abbr;
  abbr.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.abbr", abbr, Object.prototype.__class, [abbr.prototype.__class], 2);
  return  abbr;
})();
(function(){ 
  function code(){ };
  __cache["org.w3c.html.code"] = code;
  code.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.code", code, Object.prototype.__class, [code.prototype.__class], 2);
  return  code;
})();
(function(){ 
  function var(){ };
  __cache["org.w3c.html.var"] = var;
  var.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.var", var, Object.prototype.__class, [var.prototype.__class], 2);
  return  var;
})();
(function(){ 
  function samp(){ };
  __cache["org.w3c.html.samp"] = samp;
  samp.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.samp", samp, Object.prototype.__class, [samp.prototype.__class], 2);
  return  samp;
})();
(function(){ 
  function kbd(){ };
  __cache["org.w3c.html.kbd"] = kbd;
  kbd.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.kbd", kbd, Object.prototype.__class, [kbd.prototype.__class], 2);
  return  kbd;
})();
(function(){ 
  function sub(){ };
  __cache["org.w3c.html.sub"] = sub;
  sub.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.sub", sub, Object.prototype.__class, [sub.prototype.__class], 2);
  return  sub;
})();
(function(){ 
  function sup(){ };
  __cache["org.w3c.html.sup"] = sup;
  sup.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.sup", sup, Object.prototype.__class, [sup.prototype.__class], 2);
  return  sup;
})();
(function(){ 
  function i(){ };
  __cache["org.w3c.html.i"] = i;
  i.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.i", i, Object.prototype.__class, [i.prototype.__class], 2);
  return  i;
})();
(function(){ 
  function b(){ };
  __cache["org.w3c.html.b"] = b;
  b.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.b", b, Object.prototype.__class, [b.prototype.__class], 2);
  return  b;
})();
(function(){ 
  function u(){ };
  __cache["org.w3c.html.u"] = u;
  u.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.u", u, Object.prototype.__class, [u.prototype.__class], 2);
  return  u;
})();
(function(){ 
  function mark(){ };
  __cache["org.w3c.html.mark"] = mark;
  mark.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.mark", mark, Object.prototype.__class, [mark.prototype.__class], 2);
  return  mark;
})();
(function(){ 
  function ruby(){ };
  __cache["org.w3c.html.ruby"] = ruby;
  ruby.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.ruby", ruby, Object.prototype.__class, [ruby.prototype.__class], 2);
  return  ruby;
})();
(function(){ 
  function rb(){ };
  __cache["org.w3c.html.rb"] = rb;
  rb.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.rb", rb, Object.prototype.__class, [rb.prototype.__class], 2);
  return  rb;
})();
(function(){ 
  function rt(){ };
  __cache["org.w3c.html.rt"] = rt;
  rt.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.rt", rt, Object.prototype.__class, [rt.prototype.__class], 2);
  return  rt;
})();
(function(){ 
  function rtc(){ };
  __cache["org.w3c.html.rtc"] = rtc;
  rtc.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.rtc", rtc, Object.prototype.__class, [rtc.prototype.__class], 2);
  return  rtc;
})();
(function(){ 
  function rp(){ };
  __cache["org.w3c.html.rp"] = rp;
  rp.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.rp", rp, Object.prototype.__class, [rp.prototype.__class], 2);
  return  rp;
})();
(function(){ 
  function bdi(){ };
  __cache["org.w3c.html.bdi"] = bdi;
  bdi.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.bdi", bdi, Object.prototype.__class, [bdi.prototype.__class], 2);
  return  bdi;
})();
(function(){ 
  function bdo(){ };
  __cache["org.w3c.html.bdo"] = bdo;
  bdo.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.bdo", bdo, Object.prototype.__class, [bdo.prototype.__class], 2);
  return  bdo;
})();
(function(){ 
  function ins(){ };
  __cache["org.w3c.html.ins"] = ins;
  ins.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.ins", ins, Object.prototype.__class, [ins.prototype.__class], 2);
  return  ins;
})();
(function(){ 
  function del(){ };
  __cache["org.w3c.html.del"] = del;
  del.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.del", del, Object.prototype.__class, [del.prototype.__class], 2);
  return  del;
})();
(function(){ 
  function tbody(){ };
  __cache["org.w3c.html.tbody"] = tbody;
  tbody.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.tbody", tbody, Object.prototype.__class, [tbody.prototype.__class], 2);
  return  tbody;
})();
(function(){ 
  function thead(){ };
  __cache["org.w3c.html.thead"] = thead;
  thead.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.thead", thead, Object.prototype.__class, [thead.prototype.__class], 2);
  return  thead;
})();
(function(){ 
  function tfoot(){ };
  __cache["org.w3c.html.tfoot"] = tfoot;
  tfoot.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.tfoot", tfoot, Object.prototype.__class, [tfoot.prototype.__class], 2);
  return  tfoot;
})();
(function(){ 
  function colgroup(){ };
  __cache["org.w3c.html.colgroup"] = colgroup;
  colgroup.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.colgroup", colgroup, Object.prototype.__class, [colgroup.prototype.__class], 2);
  return  colgroup;
})();
(function(){ 
  function col(){ };
  __cache["org.w3c.html.col"] = col;
  col.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.col", col, Object.prototype.__class, [col.prototype.__class], 2);
  return  col;
})();
(function(){ 
  function h1(){ };
  __cache["org.w3c.html.h1"] = h1;
  h1.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.h1", h1, Object.prototype.__class, [h1.prototype.__class], 2);
  return  h1;
})();
(function(){ 
  function h2(){ };
  __cache["org.w3c.html.h2"] = h2;
  h2.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.h2", h2, Object.prototype.__class, [h2.prototype.__class], 2);
  return  h2;
})();
(function(){ 
  function h3(){ };
  __cache["org.w3c.html.h3"] = h3;
  h3.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.h3", h3, Object.prototype.__class, [h3.prototype.__class], 2);
  return  h3;
})();
(function(){ 
  function h4(){ };
  __cache["org.w3c.html.h4"] = h4;
  h4.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.h4", h4, Object.prototype.__class, [h4.prototype.__class], 2);
  return  h4;
})();
(function(){ 
  function h5(){ };
  __cache["org.w3c.html.h5"] = h5;
  h5.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.h5", h5, Object.prototype.__class, [h5.prototype.__class], 2);
  return  h5;
})();
(function(){ 
  function h6(){ };
  __cache["org.w3c.html.h6"] = h6;
  h6.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.h6", h6, Object.prototype.__class, [h6.prototype.__class], 2);
  return  h6;
})();
