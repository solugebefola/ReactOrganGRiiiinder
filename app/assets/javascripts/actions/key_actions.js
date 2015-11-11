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
  }




};
