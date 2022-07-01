import './App.css';
import User from "./components/User.js"

const friends = [

  {
    id:1,
    name:"Hannan",
  },

  {
    id:2,
    name:"Ate",
  },

  {
    id:3,
    name:"Mehmet Ali",
  },

];

function App(){
  return(
    <>



    <User 
    // name="Furkan" 
    surname="İşlek" 
    age={"24"} 
    job="Mühendis" 
    isLoggedIn={true} 
    friends={friends} 
    address={{
      title: "Ataşehir/İstanbul",
      zip: 34120
    }}
    />


    
    
    
    </>
  );
}

export default App;

