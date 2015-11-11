var Key = React.createClass({

  getInitialState: function () {
    return {pressed: false};
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
      this.setState({pressed: true});
    }else{
      this.note.stop();
      this.setState({pressed: false});
    }
  },

  render: function () {
    return <div className={this.state.pressed + " key"}>{this.props.noteName}</div>;
  }
});
