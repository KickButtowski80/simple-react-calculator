import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import InputResult from './components/InputResult'
import KeyPadComponent from './components/KeyPadComponent'
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      result: ""
    }
  }

  onClick = button => {
    console.log("I am click" + button)
    this.setState({
      result: this.state.result.concat(button)
    })

  }
  render() {
    return ( 
      <div class="container">
         <div class="calculator-frame">
            <Title />
            <InputResult result={this.state.result}/>   
            <KeyPadComponent onClick={this.onClick}/>          
      </div>
      </div>
    );
  }
}

export default App;
