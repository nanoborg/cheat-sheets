import React from 'react'


// Need to pass props in as an argument.
// As props is an argument in the form of an object there is no need to for this.props like a class component
// Need to write less code to get the same thing done.
function PropsFunction(props) {
  return (


    <div>{props.obj}</div>
  )
}

export default PropsFunction