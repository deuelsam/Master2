import React, { Component } from 'react'

export default class APICall extends Component {

    constructor(){
        super();

        this.state={ users:[]};
    }

componentDidMount(){
   const fetch_promise=  fetch("https://jsonplaceholder.typicode.com/users").then(response =>{

    response.json().then(data =>  {
        this.setState({users:data});
       
    })
   })
}

  render() {
    return (
      <div>
        <p>APICall</p>
<ul>
{this.state.users.map((single_user,idx) =>{
    return<li key = {idx}> {single_user.name} - {single_user.email} -  <a href={single_user.website}> - {single_user.website} </a></li>
})}
</ul>
</div>

    )
  }
}
