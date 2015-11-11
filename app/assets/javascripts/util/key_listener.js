(function(){

  $(document).on("keydown", function() {
    KeyActions.keyPressed(event.currentTarget);
  });

  $(document).on("keyup", function() {
    KeyActions.keyReleased(event.currentTarget);
  });

})();
