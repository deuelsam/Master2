import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

    ChildInputChanged = value => {
        console.log(value);

    }
  render() {
    return (
      <div>

        <p>HERE </p>
        <Child inputChangeFn={this.ChildInputChanged} />
      </div>
    )
  }
}
