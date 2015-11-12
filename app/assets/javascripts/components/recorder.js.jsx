var Recorder = React.createClass({

  getInitialState: function(){
    var track = new Track({name: ""});
    return { isRecording: false, track: track, input: "" };
  },

  recordHandler: function(e){
    e.preventDefault();
    this.state.track.name = this.state.input;
    this.setState({ isRecording: true });
    this.state.track.startRecording();
  },

  stopHandler: function (e) {
    e.preventDefault();
    this.state.track.stopRecording();
    this.setState({ isRecording: false, input: "" });
  },

  trackNameHandler: function (e) {
    e.preventDefault();
    this.setState({ input: e.currentTarget.value });
  },

  playHandler: function (e) {
    e.preventDefault();
    this.stopHandler();
    this.state.track.play();
  },

  render: function(){
    return(
      <div className="recorder group">
        <input type="text" className="trackNamer" onChange={this.trackNameHandler} value={this.state.input}></input>
        <button className="record" onClick={this.recordHandler}>Record</button>
        <button className="stop" onClick={this.stopHandler}>Stop Recording</button>
        <button className="play" onClick={this.playHandler}>Play Track</button>
      </div>
    );
  }

});
