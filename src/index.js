import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import './index.css';



class Number extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  increment = () => {
    if (this.state.number === 10) {
      return;
    }
    this.setState({
      number: this.state.number + 1
    });
  };

  decrement = () => {
    if (this.state.number === 0) {
    	alert("Number cannot be decremented more");
      return;
    }
    this.setState({
      number: this.state.number - 1
    });
  };

  render() {
    return (
    	<div id = "container">
	 	<h1> Decrement or Increment?</h1>

 		<div id = "container1">
 		<h2> {this.state.number}</h2>


        <button id ="left" className = "btn" onClick={this.decrement}>
          -</button>

        <button id ="right" className ="btn" onClick={this.increment}>
          +</button>

         </div>
      
      </div>
    );
  }
}

render(<Number />, document.getElementById("root"));








