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
      var newNotes = notes || KeyStore.currentKeys();

      this.chord = {timeslice: timeSlice, notes: newNotes};
      this.roll.push(this.chord);
    }.bind(this);

    this.stopRecording = function () {
      this.addNotes([]);
      KeyStore.removeChangeHandler(this.addNotes);
    };

    this.play = function(){
      if (this.interval){
        return;
      } else {
        var playbackStartTime = Date.now();
        var currentNote = 0;
        this.interval = setInterval(function(){
          var currentTrackTime = Date.now();
          var deltaT = currentTrackTime - playbackStartTime ;
          var laterNotes = this.roll.filter(function(el){
            debugger
            return (el.timeSlice > deltaT);
          });
          var notesToPlay = laterNotes[0].notes;
          KeyStore.currentKeys = notesToPlay;
          KeyStore.changed();
        }.bind(this), 100);
      }
    };
  };

})();
