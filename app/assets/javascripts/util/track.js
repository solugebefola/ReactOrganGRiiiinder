(function(){

  var Track = window.Track = function (attr){
    this.roll = attr.roll || [];
    this.name = attr.name;
    this.currentTime = Date.now();

    this.startRecording = function () {
      this.roll = [];
      this.currentTime = Date.now();
      KeyStore.addChangeHandler(this.addNotes);
    };

    this.addNotes = function (notes) {
      var timeSlice = Date.now() - this.currentTime;
      var newNotes = notes || KeyStore.currentKeys().filter(function (el){
        return (typeof el !=="undefined");
      });
      debugger
      this.chord = {timeslice: timeSlice, notes: newNotes};
      this.roll.push(this.chord);
    }.bind(this);

    this.stopRecording = function () {
      this.addNotes([]);
      KeyStore.removeChangeHandler(this.addNotes);
    };

    this.play = function(){
      var playbackStartTime = Date.now();
      var currentNote = 0;
      var deltaT = 0;
      var nextNote;

      if (this.interval){
        return;
      } else {
        this.interval = setInterval(function(){
          while ( currentNote < this.roll.length ){
            deltaT = Date.now() - playbackStartTime;
            nextNote = this.roll[currentNote];

            if (nextNote.timeSlice < deltaT) {
              debugger
              KeyActions.changeAllKeys(nextNote.notes);
              currentNote += 1;
            }
          }
          clearInterval(this.interval);
          delete this.interval;

        }.bind(this), 100);
      }
    };
  };

})();
