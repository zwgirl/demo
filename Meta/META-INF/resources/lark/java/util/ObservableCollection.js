(function(){ 
  function ObservableCollection(){
    var args = Array.prototype.slice.call(arguments);
    return ObservableCollection.__f[args[args.length-1]].apply(this, args.slice(0, args.length-1));
  }
  ObservableCollection.__f = {
    "1" : function() {    
  __lc('java.util.ArrayList').call(this, "2");
  }, 
    "2" : function(list) {    
  __lc('java.util.ArrayList').call(this, "2");
    copyFrom.call(this, list);
  }, 
    "3" : function(collection) {    
  __lc('java.util.ArrayList').call(this, "2");
    if(collection == null) throw new Error(0, "collection may not be null!")
    copyFrom.call(this, collection);
  }
  };
  ObservableCollection.prototype.__proto__ = __lc("java.util.ArrayList", "java.util.ArrayList").prototype;
  __cache["java.util.ObservableCollection"] = ObservableCollection;
  function copyFrom(collection){
    if(collection != null)
    {
      var enumerator = collection.iterator();
      while (enumerator.hasNext())

      {
        this.add(enumerator.next());
      }
    }
  }
  ObservableCollection.prototype.move = function(oldIndex, newIndex){
    this.moveItem(oldIndex, newIndex);
  };
  ObservableCollection.prototype.clear = function(){
    __lc("java.util.ArrayList", "java.util.ArrayList").prototype.clear.call(this);
    __lc("java.lang.INotifyPropertyChanged").prototype.notifyChanged.call(this, ObservableCollection.SIZE);
    onCollectionReset.call(this);
  };
  ObservableCollection.prototype.removeAt = function(index){
    var removedItem = this.get(index);
    __lc("java.util.ArrayList", "java.util.ArrayList").prototype.removeAt.call(this, index);
    __lc("java.lang.INotifyPropertyChanged").prototype.notifyChanged.call(this, ObservableCollection.SIZE);
    onCollectionChanged3.call(this, __lc("java.lang.CollectionChangedAction").Remove, removedItem, index);
    return removedItem;
  };
  ObservableCollection.prototype.remove = function(o){
    if(__lc("java.util.ArrayList", "java.util.ArrayList").prototype.remove.call(this, o))
    {
      __lc("java.lang.INotifyPropertyChanged").prototype.notifyChanged.call(this, ObservableCollection.SIZE);
      onCollectionChanged3.call(this, __lc("java.lang.CollectionChangedAction").Remove, o, - 1);
      return true;
    }
    ;
    return false;
  };
  ObservableCollection.prototype.add = function(t){
    if(__lc("java.util.ArrayList", "java.util.ArrayList").prototype.add.call(this, t))
    {
      var i = this.size;
      __lc("java.lang.INotifyPropertyChanged").prototype.notifyChanged.call(this, ObservableCollection.SIZE);
      onCollectionChanged3.call(this, __lc("java.lang.CollectionChangedAction").Add, t, - 1);
      return true;
    }
    return false;
  };
  ObservableCollection.prototype.addAt = function(index, item){
    __lc("java.util.ArrayList", "java.util.ArrayList").prototype.addAt.call(this, index, item);
    __lc("java.lang.INotifyPropertyChanged").prototype.notifyChanged.call(this, ObservableCollection.SIZE);
    onCollectionChanged3.call(this, __lc("java.lang.CollectionChangedAction").Add, item, index);
  };
  ObservableCollection.prototype.addAll = function(c){
    return this.addAllAt(0, c);
  };
  ObservableCollection.prototype.addAllAt = function(index, c){
    var result = __lc("java.util.ArrayList", "java.util.ArrayList").prototype.addAllAt.call(this, index, c);
    __lc("java.lang.INotifyCollectionChanged").prototype.onCollectionChanged.call(this, new (__lc('java.lang.CollectionChangedEvent'))(__lc("java.lang.CollectionChangedAction").Add, c.toArray(), index, "5"));
    return result;
  };
  ObservableCollection.prototype.removeAll = function(c){
    var result = __lc("java.util.ArrayList", "java.util.ArrayList").prototype.removeAll.call(this, c);
    __lc("java.lang.INotifyCollectionChanged").prototype.onCollectionChanged.call(this, new (__lc('java.lang.CollectionChangedEvent'))(__lc("java.lang.CollectionChangedAction").Remove, c.toArray(), 0, "5"));
    return result;
  };
  ObservableCollection.prototype.set = function(index, item){
    var originalItem = this.get(index);
    __lc("java.util.ArrayList", "java.util.ArrayList").prototype.set.call(this, index, item);
    __lc("java.lang.INotifyPropertyChanged").prototype.notifyChanged.call(this, ObservableCollection.SIZE);
    onCollectionChanged41.call(this, __lc("java.lang.CollectionChangedAction").Replace, originalItem, item, index);
    return originalItem;
  };
  ObservableCollection.prototype.moveItem = function(oldIndex, newIndex){
    var removedItem = __lc("java.util.ArrayList", "java.util.ArrayList").prototype.removeAt.call(this, oldIndex);
    __lc("java.util.ArrayList", "java.util.ArrayList").prototype.addAt.call(this, newIndex, removedItem);
    onCollectionChanged4.call(this, __lc("java.lang.CollectionChangedAction").Move, removedItem, newIndex, oldIndex);
  };
  function onCollectionChanged3(action, item, index){
    __lc("java.lang.INotifyCollectionChanged").prototype.onCollectionChanged.call(this, new (__lc('java.lang.CollectionChangedEvent'))(action, item, index, "3"));
  }
  function onCollectionChanged4(action, item, index, oldIndex){
    __lc("java.lang.INotifyCollectionChanged").prototype.onCollectionChanged.call(this, new (__lc('java.lang.CollectionChangedEvent'))(action, item, index, oldIndex, "10"));
  }
  function onCollectionChanged41(action, oldItem, newItem, index){
    __lc("java.lang.INotifyCollectionChanged").prototype.onCollectionChanged.call(this, new (__lc('java.lang.CollectionChangedEvent'))(action, newItem, oldItem, index, "7"));
  }
  function onCollectionReset(){
    __lc("java.lang.INotifyCollectionChanged").prototype.onCollectionChanged.call(this, new (__lc('java.lang.CollectionChangedEvent'))(__lc("java.lang.CollectionChangedAction").Reset, "1"));
  }
  ObservableCollection.SIZE = "size";ObservableCollection.prototype.doApplyTemplate = function(parent, data, index) {};
  ObservableCollection.prototype.__class = new (__lc('java.lang.Class'))("java.util.ObservableCollection", ObservableCollection, __lc("java.util.ArrayList", "java.util.ArrayList").prototype.__class, [__lc("java.lang.INotifyCollectionChanged").prototype.__class, __lc("java.util.List").prototype.__class, __lc("java.lang.INotifyPropertyChanged").prototype.__class], 1);
  return  ObservableCollection;
})();
