import React from 'react';
 


// Hook to change state with onClick
function App() {

    // 
    const [count, setCount] = React.useState(0);

    function handleClick() {
    setCount(count + 1);
    }

    return (
    <div>
        Count: {count}

        <button type="button" onClick={handleClick}>
        Increase Count
        </button>
    </div>
    );
}


// Hook to change state onChange
function App() {
    const [text, setText] = React.useState('');
   
    function handleChange(event) {
      setText(event.target.value);
    }
   
    return (
      <div>
        <input type="text" onChange={handleChange} />
   
        {text}
      </div>
    );
  }

export default App