import React, {Component} from 'react';


class Button extends Component  {
    constructor(props){
        super(props)
      
    }
 
    render(){
        console.log(this.props)
        return(
            <button type='button' onClick={() => this.props.onAddToInputResult(this.props.children)}> {this.props.name}</button>
        )
    }

}

export default Button; 