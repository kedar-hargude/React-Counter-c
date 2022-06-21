import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function increment(){
    setCount(prevCount => prevCount+1);
  }

  
  function decrement(){
    setCount(prevCount => prevCount-1);
  }
  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
