window.KeyActions = {

  keyPressed: function(key){
    AppDispatcher.dispatch({
      eventType: KeyConstants.PRESSKEY,
      key: key
    });

  },


};
