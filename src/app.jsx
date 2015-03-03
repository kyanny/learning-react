window.addEventListener('load', function() {

  var App = React.createClass({
    getInitialState: function() {
      return {
        name: "KUMAO"
      }
    },

    changeName: function(){
      if (this.state.name.match(/^[A-Z]/)) {
        this.setState({name: this.state.name.toLowerCase()});
      } else {
        this.setState({name: this.state.name.toUpperCase()});
      }
    },
    
    render: function(){
      return (
        <div>
          <h1>Hello {this.state.name}!</h1>
          <p>{this.props.text}</p>
          <button onClick={this.changeName}>Change</button>
        </div>
      )
    }
  });

  React.render(
    <App text="fooo"></App>, document.getElementById('body')
  );

});
