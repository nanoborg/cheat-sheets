# The Render () Method

Every component has at a minimum a `render()` method. `render ()` generates a virtual DOM node to be added to the actual DOM.

    ReactDOM.render(<Hello/>, 
    document,getElementById('root')
    )

The render function takes 2 arguments, the first is the component with the content written in JSX. The second find the DOM element to which the content will be appended. This can be any element, it comes set up out of the box to `#root`

