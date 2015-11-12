var Key = React.createClass({

  getInitialState: function () {
    return {pressed: "unpressed"};
  },

  componentDidMount: function () {
    var noteName = this.props.noteName;
    this.note = new Note(NOTE[noteName]);
    KeyStore.addChangeHandler(this.keyListener);
   },

   componentWillUnmount: function () {
     KeyStore.removeChangeHandler(this.keyListener);
   },

  keyListener: function () {
    if (KeyStore.keyIn(this.props.noteName)){
      this.note.start();
      this.setState({pressed: "pressed"});
    }else{
      this.note.stop();
      this.setState({pressed: "unpressed"});
    }
  },

  render: function () {
    return <div className={this.state.pressed + " key"}>{this.props.noteName}</div>;
  }
});
