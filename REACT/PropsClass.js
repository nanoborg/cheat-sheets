import React, { Component } from 'react'

export class PropsClass extends Component {
  render() {
    return (
      // this, referring to the instance of the class
      // this.props, referring to this.object being passed in
      <div>{this.props.obj}</div>
    )
  }
}

export default PropsClass


