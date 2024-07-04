# React Constructor

The `constructor` is only needed when there is a need to change state on initial setup.

The `constructor` is it's own method and goes at the top of the class component. Not inside `render()`.

    import React, { Component } from 'react';
    
    class App extends Component {
    
    constructor(props) {
    
        // Calling super class constructor
        super(props);
        
        // Creating state
        this.state = {
        data: 'My name is User'
        }
        
        // Binding event handler
        this.handleEvent = this.handleEvent.bind(this);
    }
    
    handleEvent() {
        console.log(this.props);
    }
    
    render() {
        return (
        <div >
            <input type="text" value={this.state.data} />
            <br></br> <br></br>
            <button onClick={this.handleEvent}>Please Click</button>
        </div>
        );
    }
    }
    
    export default App;