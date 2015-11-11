(function(){

  $(document).on("keydown", function(event) {
    KeyActions.keyPressed(KeyConstants[event.keyCode]);
  });

  $(document).on("keyup", function(event) {
    KeyActions.keyReleased(KeyConstants[event.keyCode]);
  });

})();
