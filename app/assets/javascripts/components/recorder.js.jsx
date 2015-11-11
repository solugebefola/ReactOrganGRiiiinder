var Recorder = React.createClass({

  getInitialState: function(){
    var track = new Track({name: ""});
    return { isRecording: false, track: track, input: "" };
  },

  recordHandler: function(){
    this.state.track.name = this.state.input;
    this.state.track.startRecording();
  },

  stopHandler: function () {
    this.state.track.stopRecording();
    this.setState({input: ""});
  },

  trackNameHandler: function (e) {
    e.preventDefault();
    this.setState({ input: e.currentTarget.value });
  },

  render: function(){
    return(
      <div className="recorder group">
        <input type="text" className="trackNamer" onChange={this.trackNameHandler} value={this.state.input}></input>
        <button className="record" onClick={this.recordHandler}>Record</button>
        <button className="stop" onClick={this.stopHandler}>Stop Recording</button>
      </div>
    );
  }

});
