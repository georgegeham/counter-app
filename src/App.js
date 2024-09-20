import './App.css';
import { useState } from 'react';
function App() {
  const [number, setNumber] = useState(0);
  function plus() {
    setNumber(number => number + 1);
  }
  function minus() {
    setNumber(number => number - 1);
  }

  return (
    <div className="App">
      <main>
        <div className='number'>{number}
        </div>
        <div className='plus' onClick={plus}>+</div>
        <div className='minus' onClick={minus}>-</div>
      </main>
    </div>
  );
}

export default App;
