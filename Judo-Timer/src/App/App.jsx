import { useState } from 'react'
import './App.css';
import Timer from '../Timer/Timer';
import Control from '../Control/Control';
import { addPadTime } from '../Functions/Functions';

function App() {
  const [Time, setTime] = useState(2 * 60);
  const minutes = addPadTime(Math.floor(Time / 60));
  const seconds = addPadTime(Time - minutes * 60);

  return (
    <div className='Judo-container'>
      <Timer minutes = {minutes} seconds = {seconds}/>
      <Control/>
    </div>
  )
}

export default App
