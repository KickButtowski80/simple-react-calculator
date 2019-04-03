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
  
  addToInputResult  = val =>{
    this.setState({
      result: this.state.result + val
    })
  }
  onClick = button_value => {
    console.log("I am click" + button_value)
    if(button_value === "="){
      this.calculate();
    } else if (button_value === 'C'){
      this.reset();
    } else if(button_value === "CE"){
      this.backspace()
     } else if(button_value === "Cos"){
       this.cos_cal();
     }    
    else {
      this.setState({
        result: this.state.result.concat(button_value)
      })
    }  

  }
  cos_cal = () =>{
    alert(`Cos${this.state.result}`)
    this.setState({
      result: (Math.cos(this.state.result))
    })
  }

  reset = () => {
    this.setState({
        result: ""
    })
   };
  calculate = () => {
    try {
        this.setState({ 
            result: (eval(this.state.result) || "0" ) + ""
        })
    } catch (e) {
        this.setState({
            result: "error"
        })

    }
};

backspace = () => {
  this.setState({
      result: this.state.result.slice(0, -1)
  })
};
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
