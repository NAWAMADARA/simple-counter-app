import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Simple Counter App
      </header>
      <CounterBox />
    </div>
  );
}
function CounterBox() {
  const [counter, setCounter] = useState(0);
  function Increment () {
    setCounter(counter + 1);
  }
  function Decrement () {
    setCounter(counter - 1);
  }
  return (
    <div className='Counter-Div'>
      <h2>{counter}</h2>
      <div className='Counter-Buttons'>
        <button className='Increment' onClick={Increment}>+</button>
        <button className='Decrement' onClick={Decrement}>-</button>
      </div>
    </div>
  )
}
export default App;
