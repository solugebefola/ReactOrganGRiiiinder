var Key = React.createClass({

  componentDidMount: function () {
    var noteName = this.props.noteName;
    this.note = new Note(NOTE[noteName]);
    KeyStore.addChangeHandler(this.keyListener);
  },

  keyListener: function () {
    if (KeyStore.keyIn(this.props.noteName)){
      this.note.start();
    }else{
      this.note.stop();
    }
  },

  render: function () {
    return <div>{this.props.noteName}</div>;
  }
});
