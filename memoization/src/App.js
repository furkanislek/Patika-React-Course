import './App.css';
import {useState, useMemo} from 'react'
import Header from './components/Header';


function App() {

  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const data = useMemo(() => {
    return calculateObject(number);
  }, [number])

  return (
    <div className="App">
      <Header number={number<5 ? null : number} data={data}/>
      <hr/> 
      <h1>{number}</h1>,
      <button onClick={() => setNumber(number+1)} >click</button>
      <br/><br/>
      <input value={text} onChange={({target}) => setText(target.value) }/>
    </div>
  );
}

function calculateObject(number){
  console.log("Calculating...");
  for(var i=0; i<100000; i++){}
  console.log("Calculating Completed!");

  return {name: "Furkan", number}
}

export default App;
