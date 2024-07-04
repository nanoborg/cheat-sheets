# Reach Props

## Component Data

The React framework has been designed to facilitate the changing of data over time.

So far, Created a **_Class_** Component in App.js, The `render()` method with in the **_Component_** returns a `div` which is written in JSX.

In `index.js` the `App.js` component has been **_imported_**

## What are React Props?

With **_Props_** react components become dynamic and reusable by passing new values through a render call into a component.

    class CallKitty extends React.Component {
        render() {
            return (
            <h1>Here {this.props.catName}!</h1>
            )
        }
    }
    

    // Call From ReactDOM.rendercall()
    React.render(<CallKitty catName={"Meowser"}/>, document.getElementById('app'));

## Looking Closer at props

*  `this` refers to the specific component instance
* `this.props` will collect all the props for `this` component instance
* `this.props.name` pulls the `catName` property from `this.props`

## JSX Syntax

anything code with in `{}` will act as if its in a JavaScript environment, loops, if statements etc.

## Multiple props

Often more than one piece of data is needed. So to do this multiple props can be passed in.

    ReactDOM.render(
    <React.StrictMode>
        <Hello name={"Nick"} age={24}/>
    </React.StrictMode>,
    document.getElementById('root')
    );

## Multiple Props Passed From an Object

Having too many props can be hard to keep track of. Best practice is to:

* Organize values in some kind of object
* Pass props to the component from the object

