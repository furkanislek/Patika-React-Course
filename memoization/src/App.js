import './App.css';
import {useState} from 'react'
import Header from './components/Header';


function App() {

  const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <Header number={number<5 ? null : number}/>
      <hr/> 
      <h1>{number}</h1>,
      <button onClick={() => setNumber(number+1)} >click</button>
      
    </div>
  );
}

export default App;
