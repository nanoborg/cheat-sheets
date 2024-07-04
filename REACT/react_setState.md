# React setState()

`setState()` is the method used to update the state of the component. This will update the `this.state` object `{}`and will cause the component to be flagged and trigger the `render()`.

* React will compile JSX into JavaScript elements. 
* The virtual DOM will be updated and compared to the existing DOM.
* Only the changed elements will be updated.

## Never!!
Never try update the state directly from a method. It will change the state and not trigger the `render()` method.

## State Initialization
States need to be declared before they can be used. So before updating a value they need to be initialized first.

## State Duration
State represents the data on the page, if the page is refreshed the state will be reset.

If data is to be retained it will need to be stored locally or on a database and then the state can be updated from the database.



        class Count extends Component {

        constructor(props) {
            super(props) 
            
            this.state = {
                count: 0
            }

        }
        
        increment = () => {
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)

            // Not !!!!
            // this.state.count = this.state.count + 1
        }
        

        render() {
            return (
                <div>
                    <div>Count - {this.state.count}</div>
                    <button onClick={() => this.increment()}>Increment</button>
                </div>
            );
        }
        }   