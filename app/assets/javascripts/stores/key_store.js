(function (){
  var _keys = [];
  var CHANGE_EVENT = 'change';

  var KeyStore = window.KeyStore = $.extend({}, EventEmitter.prototype);

  KeyStore.addChangeHandler = function(callback){
    this.on(CHANGE_EVENT, callback);
  };

  KeyStore.removeChangeHandler = function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  };

  KeyStore.changed = function () {
    this.emit(CHANGE_EVENT);
  };

  KeyStore.addKey = function (key) {
    _keys.push(key);
  };

  KeyStore.removeKey = function (key) {
    var keyIdx = _keys.indexOf(key);
    if (keyIdx === -1){
    }else{
      _keys.splice(keyIdx, 1);
    }
  };

  
})();
