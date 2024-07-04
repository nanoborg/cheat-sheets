// import react and destructure component.

// This imports React methods and the Component class from the React library 
import React, { Component } from 'react'


// class - This is the component that we are reassigning to ClassName
// extends Component - inherit from the react library which will enable ClassName to reuse the capabilities from React.Component

class ClassState extends Component {

    // object to hold data
    constructor(props) {
        // super calls the constructor of it's parent class
      super(props)
    
      this.state = {
         hello: this.props.obj.key,
         count: 0
      }
    }
    // update the changes to virtual DOM
    render() {
        // returns JSX which JavaScript meant to look like HTML
        return (
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
}

// export - expose the ClassState to different files when imported
// default - if Components has not been na it will default to x
export default ClassState