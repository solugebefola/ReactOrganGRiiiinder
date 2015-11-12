window.KeyActions = {

  keyPressed: function(note){
    AppDispatcher.dispatch({
      eventType: KeyConstants.PRESSKEY,
      noteName: note
    });
  },

  keyReleased: function(note){
    AppDispatcher.dispatch({
      eventType: KeyConstants.RELEASEKEY,
      noteName: note
    });
  },

  changeAllKeys: function(newKeys){
    AppDispatcher.dispatch({
      eventType: KeyConstants.CHANGE_ALL_KEYS,
      newKeys: newKeys
    });
  }

};
