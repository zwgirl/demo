(function(){ 
  __cache["org.w3c.html.HTMLHtmlElement"] = HTMLHtmlElement;
  HTMLHtmlElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLHtmlElement", HTMLHtmlElement, Object.prototype.__class, [HTMLHtmlElement.prototype.__class], 2);
  return  HTMLHtmlElement;
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
  HTMLElement.prototype.attach = function(binding){
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
  HTMLElement.prototype.detach = function(binding){
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
  HTMLElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLElement", HTMLElement, Object.prototype.__class, [HTMLElement.prototype.__class, HTMLElement.prototype.__class], 2);
  return  HTMLElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLBaseElement"] = HTMLBaseElement;
  HTMLBaseElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLBaseElement", HTMLBaseElement, Object.prototype.__class, [HTMLBaseElement.prototype.__class], 2);
  return  HTMLBaseElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLLinkElement"] = HTMLLinkElement;
  HTMLLinkElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLLinkElement", HTMLLinkElement, Object.prototype.__class, [HTMLLinkElement.prototype.__class], 2);
  return  HTMLLinkElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLMetaElement"] = HTMLMetaElement;
  HTMLMetaElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLMetaElement", HTMLMetaElement, Object.prototype.__class, [HTMLMetaElement.prototype.__class], 2);
  return  HTMLMetaElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLStyleElement"] = HTMLStyleElement;
  HTMLStyleElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLStyleElement", HTMLStyleElement, Object.prototype.__class, [HTMLStyleElement.prototype.__class], 2);
  return  HTMLStyleElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLScriptElement"] = HTMLScriptElement;
  HTMLScriptElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLScriptElement", HTMLScriptElement, Object.prototype.__class, [HTMLScriptElement.prototype.__class], 2);
  return  HTMLScriptElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLBodyElement"] = HTMLBodyElement;
  HTMLBodyElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLBodyElement", HTMLBodyElement, Object.prototype.__class, [HTMLBodyElement.prototype.__class], 2);
  return  HTMLBodyElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLHeadElement"] = HTMLHeadElement;
  HTMLHeadElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLHeadElement", HTMLHeadElement, Object.prototype.__class, [HTMLHeadElement.prototype.__class], 2);
  return  HTMLHeadElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLTitleElement"] = HTMLTitleElement;
  HTMLTitleElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLTitleElement", HTMLTitleElement, Object.prototype.__class, [HTMLTitleElement.prototype.__class], 2);
  return  HTMLTitleElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLQuoteElement"] = HTMLQuoteElement;
  HTMLQuoteElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLQuoteElement", HTMLQuoteElement, Object.prototype.__class, [HTMLQuoteElement.prototype.__class], 2);
  return  HTMLQuoteElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLOListElement"] = HTMLOListElement;
  HTMLOListElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLOListElement", HTMLOListElement, Object.prototype.__class, [HTMLOListElement.prototype.__class], 2);
  return  HTMLOListElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLLIElement"] = HTMLLIElement;
  HTMLLIElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLLIElement", HTMLLIElement, Object.prototype.__class, [HTMLLIElement.prototype.__class], 2);
  return  HTMLLIElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLAnchorElement"] = HTMLAnchorElement;
  Object.defineProperty(HTMLAnchorElement.prototype, "route", {
    get : function() {
      return this["__route"];
    }, 
    set : function(value) {
      this["__route"] = value;
    }
  });
  HTMLAnchorElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLAnchorElement", HTMLAnchorElement, Object.prototype.__class, [HTMLAnchorElement.prototype.__class], 2);
  return  HTMLAnchorElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLTimeElement"] = HTMLTimeElement;
  HTMLTimeElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLTimeElement", HTMLTimeElement, Object.prototype.__class, [HTMLTimeElement.prototype.__class], 2);
  return  HTMLTimeElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLProgressElement"] = HTMLProgressElement;
  HTMLProgressElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLProgressElement", HTMLProgressElement, Object.prototype.__class, [HTMLProgressElement.prototype.__class], 2);
  return  HTMLProgressElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLMeterElement"] = HTMLMeterElement;
  HTMLMeterElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLMeterElement", HTMLMeterElement, Object.prototype.__class, [HTMLMeterElement.prototype.__class], 2);
  return  HTMLMeterElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLModElement"] = HTMLModElement;
  HTMLModElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLModElement", HTMLModElement, Object.prototype.__class, [HTMLModElement.prototype.__class], 2);
  return  HTMLModElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLImageElement"] = HTMLImageElement;
  HTMLImageElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLImageElement", HTMLImageElement, Object.prototype.__class, [HTMLImageElement.prototype.__class], 2);
  return  HTMLImageElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLIFrameElement"] = HTMLIFrameElement;
  HTMLIFrameElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLIFrameElement", HTMLIFrameElement, Object.prototype.__class, [HTMLIFrameElement.prototype.__class], 2);
  return  HTMLIFrameElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLEmbedElement"] = HTMLEmbedElement;
  HTMLEmbedElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLEmbedElement", HTMLEmbedElement, Object.prototype.__class, [HTMLEmbedElement.prototype.__class], 2);
  return  HTMLEmbedElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLObjectElement"] = HTMLObjectElement;
  Object.defineProperty(HTMLObjectElement.prototype, "validationMessage", {

  });
  HTMLObjectElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLObjectElement", HTMLObjectElement, Object.prototype.__class, [HTMLObjectElement.prototype.__class], 2);
  return  HTMLObjectElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLParamElement"] = HTMLParamElement;
  HTMLParamElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLParamElement", HTMLParamElement, Object.prototype.__class, [HTMLParamElement.prototype.__class], 2);
  return  HTMLParamElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLSourceElement"] = HTMLSourceElement;
  HTMLSourceElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLSourceElement", HTMLSourceElement, Object.prototype.__class, [HTMLSourceElement.prototype.__class], 2);
  return  HTMLSourceElement;
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
  __cache["org.w3c.html.HTMLVideoElement"] = HTMLVideoElement;
  HTMLVideoElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLVideoElement", HTMLVideoElement, Object.prototype.__class, [HTMLVideoElement.prototype.__class], 2);
  return  HTMLVideoElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLAudioElement"] = HTMLAudioElement;
  HTMLAudioElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLAudioElement", HTMLAudioElement, Object.prototype.__class, [HTMLAudioElement.prototype.__class], 2);
  return  HTMLAudioElement;
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
  __cache["org.w3c.html.HTMLCanvasElement"] = HTMLCanvasElement;
  HTMLCanvasElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLCanvasElement", HTMLCanvasElement, Object.prototype.__class, [HTMLCanvasElement.prototype.__class], 2);
  return  HTMLCanvasElement;
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
  __cache["org.w3c.html.HTMLMapElement"] = HTMLMapElement;
  HTMLMapElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLMapElement", HTMLMapElement, Object.prototype.__class, [HTMLMapElement.prototype.__class], 2);
  return  HTMLMapElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLAreaElement"] = HTMLAreaElement;
  Object.defineProperty(HTMLAreaElement.prototype, "relList", {

  });
  HTMLAreaElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLAreaElement", HTMLAreaElement, Object.prototype.__class, [HTMLAreaElement.prototype.__class], 2);
  return  HTMLAreaElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLTableElement"] = HTMLTableElement;
  Object.defineProperty(HTMLTableElement.prototype, "tHead", {

  });
  Object.defineProperty(HTMLTableElement.prototype, "tFoot", {

  });
  HTMLTableElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLTableElement", HTMLTableElement, Object.prototype.__class, [HTMLTableElement.prototype.__class], 2);
  return  HTMLTableElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLTableCaptionElement"] = HTMLTableCaptionElement;
  HTMLTableCaptionElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLTableCaptionElement", HTMLTableCaptionElement, Object.prototype.__class, [HTMLTableCaptionElement.prototype.__class], 2);
  return  HTMLTableCaptionElement;
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
  __cache["org.w3c.html.HTMLTableRowElement"] = HTMLTableRowElement;
  HTMLTableRowElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLTableRowElement", HTMLTableRowElement, Object.prototype.__class, [HTMLTableRowElement.prototype.__class], 2);
  return  HTMLTableRowElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLTableCellElement"] = HTMLTableCellElement;
  HTMLTableCellElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLTableCellElement", HTMLTableCellElement, Object.prototype.__class, [HTMLTableCellElement.prototype.__class], 2);
  return  HTMLTableCellElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLTableDataCellElement"] = HTMLTableDataCellElement;
  HTMLTableDataCellElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLTableDataCellElement", HTMLTableDataCellElement, Object.prototype.__class, [HTMLTableDataCellElement.prototype.__class], 2);
  return  HTMLTableDataCellElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLTableHeaderCellElement"] = HTMLTableHeaderCellElement;
  HTMLTableHeaderCellElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLTableHeaderCellElement", HTMLTableHeaderCellElement, Object.prototype.__class, [HTMLTableHeaderCellElement.prototype.__class], 2);
  return  HTMLTableHeaderCellElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLFormElement"] = HTMLFormElement;
  HTMLFormElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLFormElement", HTMLFormElement, Object.prototype.__class, [HTMLFormElement.prototype.__class], 2);
  return  HTMLFormElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLFieldSetElement"] = HTMLFieldSetElement;
  Object.defineProperty(HTMLFieldSetElement.prototype, "form", {

  });
  HTMLFieldSetElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLFieldSetElement", HTMLFieldSetElement, Object.prototype.__class, [HTMLFieldSetElement.prototype.__class], 2);
  return  HTMLFieldSetElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLLabelElement"] = HTMLLabelElement;
  HTMLLabelElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLLabelElement", HTMLLabelElement, Object.prototype.__class, [HTMLLabelElement.prototype.__class], 2);
  return  HTMLLabelElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLInputElement"] = HTMLInputElement;
  HTMLInputElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLInputElement", HTMLInputElement, Object.prototype.__class, [HTMLInputElement.prototype.__class], 2);
  return  HTMLInputElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLButtonElement"] = HTMLButtonElement;
  HTMLButtonElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLButtonElement", HTMLButtonElement, Object.prototype.__class, [HTMLButtonElement.prototype.__class], 2);
  return  HTMLButtonElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLSelectElement"] = HTMLSelectElement;
  HTMLSelectElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLSelectElement", HTMLSelectElement, Object.prototype.__class, [HTMLSelectElement.prototype.__class], 2);
  return  HTMLSelectElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLDataListElement"] = HTMLDataListElement;
  HTMLDataListElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLDataListElement", HTMLDataListElement, Object.prototype.__class, [HTMLDataListElement.prototype.__class], 2);
  return  HTMLDataListElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLOptGroupElement"] = HTMLOptGroupElement;
  HTMLOptGroupElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLOptGroupElement", HTMLOptGroupElement, Object.prototype.__class, [HTMLOptGroupElement.prototype.__class], 2);
  return  HTMLOptGroupElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLOptionElement"] = HTMLOptionElement;
  HTMLOptionElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLOptionElement", HTMLOptionElement, Object.prototype.__class, [HTMLOptionElement.prototype.__class], 2);
  return  HTMLOptionElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLTextAreaElement"] = HTMLTextAreaElement;
  HTMLTextAreaElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLTextAreaElement", HTMLTextAreaElement, Object.prototype.__class, [HTMLTextAreaElement.prototype.__class], 2);
  return  HTMLTextAreaElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLOutputElement"] = HTMLOutputElement;
  HTMLOutputElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLOutputElement", HTMLOutputElement, Object.prototype.__class, [HTMLOutputElement.prototype.__class], 2);
  return  HTMLOutputElement;
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
  __cache["org.w3c.html.HTMLLegendElement"] = HTMLLegendElement;
  HTMLLegendElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLLegendElement", HTMLLegendElement, Object.prototype.__class, [HTMLLegendElement.prototype.__class], 2);
  return  HTMLLegendElement;
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
  __cache["org.w3c.html.HTMLDivElement"] = HTMLDivElement;
  HTMLDivElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLDivElement", HTMLDivElement, Object.prototype.__class, [HTMLDivElement.prototype.__class], 2);
  return  HTMLDivElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLSpanElement"] = HTMLSpanElement;
  HTMLSpanElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLSpanElement", HTMLSpanElement, Object.prototype.__class, [HTMLSpanElement.prototype.__class], 2);
  return  HTMLSpanElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLPreElement"] = HTMLPreElement;
  HTMLPreElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLPreElement", HTMLPreElement, Object.prototype.__class, [HTMLPreElement.prototype.__class], 2);
  return  HTMLPreElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLHRElement"] = HTMLHRElement;
  HTMLHRElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLHRElement", HTMLHRElement, Object.prototype.__class, [HTMLHRElement.prototype.__class], 2);
  return  HTMLHRElement;
})();
(function(){ 
  __cache["org.w3c.html.HTMLParagraphElement"] = HTMLParagraphElement;
  HTMLParagraphElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLParagraphElement", HTMLParagraphElement, Object.prototype.__class, [HTMLParagraphElement.prototype.__class], 2);
  return  HTMLParagraphElement;
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
  function HTMLBRElement(){ };
  __cache["org.w3c.html.HTMLBRElement"] = HTMLBRElement;
  HTMLBRElement.prototype.__class = new (__lc('java.lang.Class'))("org.w3c.html.HTMLBRElement", HTMLBRElement, Object.prototype.__class, [HTMLBRElement.prototype.__class], 2);
  return  HTMLBRElement;
})();
