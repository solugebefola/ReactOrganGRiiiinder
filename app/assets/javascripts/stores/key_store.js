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
    KeyStore.changed();
  };

  KeyStore.removeKey = function (key) {
    var keyIdx = _keys.indexOf(key);
    if (keyIdx === -1){
    }else{
      _keys.splice(keyIdx, 1);
    }
    KeyStore.changed();
  };

  KeyStore.keyIn = function (key) {
    if (_keys.indexOf(key) !== -1){
      return true;
    }else{
      return false;
    }
  };

  KeyStore.currentKeys = function () {
    return _keys.slice();
  };

  KeyStore.registerId = AppDispatcher.register(function(payload){
    switch (payload.eventType){
      case KeyConstants.PRESSKEY:
        KeyStore.addKey(payload.noteName);
        break;
      case KeyConstants.RELEASEKEY:
        KeyStore.removeKey(payload.noteName);
        break;
      }
  });

})();
