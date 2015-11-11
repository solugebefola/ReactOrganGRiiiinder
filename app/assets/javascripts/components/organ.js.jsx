var Organ = React.createClass({

  render: function(){
    var noteList = [];
    for (var prop in this.props.noteList) {
      noteList.push(prop);
    }
    return (
      <div>
        {
          noteList.map(function (el) {
              return <Key noteName={el} />;
          })
        }
      </div>
    );
  }
});
