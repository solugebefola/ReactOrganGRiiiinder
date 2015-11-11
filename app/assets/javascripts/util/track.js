(function(){

  var Track = window.Track = function (attr){
    this.roll = attr.roll || [];
    this.name = attr.name;
    this.currentTime = new Date();

    this.startRecording = function () {
      this.roll = [];
      this.currentTime = (new Date()).getTime();
      KeyStore.addChangeHandler(this.addNotes);
    };

    this.addNotes = function (notes) {
      var timeSlice = (new Date()).getTime() - this.currentTime;
      var newNotes = notes || KeyStore.currentKeys();

      this.chord = {timeslice: timeSlice, notes: newNotes};
      this.roll.push(this.chord);
    }.bind(this);

    this.stopRecording = function () {
      this.addNotes([]);
      KeyStore.removeChangeHandler(this.addNotes);
    };
  };

})();
