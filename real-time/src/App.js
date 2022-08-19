import './App.css';
import Palette from './components/Palette';
import { useEffect } from 'react';
import {changeColor, init} from "./socketApi"

function App() {

  useEffect(() => {
    init();
    changeColor('#fffff');
  },[])

  return (
    <div className="App">
     <Palette/>
    </div>
  );
}

export default App;
