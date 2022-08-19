import React, { Component } from 'react'

export default class Password extends Component {
constructor() {
    super();

    this.state = { password:"" , isValid:false}
}

updatePassword = e => {
  this.setState({password:e.target.value})
}

componentDidUpdate(previousProp, previousState) { 
  if(previousState.password !== this.state.password){

if(this.state.password.length > 6 && this.state.password.includes("&")) {
  this.setState({isValid:true});
} else {
  this.setState({isValid:false});
}

  }

}
  render() {
    return (
      <div>
        
        <h5> Password</h5>
        
        <input type="password" placeholder="Enter Password" onKeyUp={this.updatePassword}/>
        <p>Password - {(this.state.isValid == true) ? "Valid" : "Invalid"}</p>
        </div>
    )
  }
}
