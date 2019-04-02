import React, { Component } from 'react'
 
class InputResult extends Component {
    constructor(){
        super()
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress = (e) => {
        // var code = (e.which) ? e.which : e.keyCode;
        // console.log(e.which)
        // if (code > 31 && (code < 45 || code > 57) ){        
        //     console.log("you cannot enter letter just numbers")
        //     e.preventDefault();
        // }      
    }

    handleChange = (e) => {
        
    }
    render(){
        let {result} = this.props;
        return( 
            <input id= 'input-number' type="text" name="input-number"  value={result} onChange={result} onKeyPress={this.handleKeyPress} />
        )
    }

}

export default InputResult;