import {useState} from 'react'


function App() {

  const [name, setName] = useState("Furkan");
  const [age, setAge] = useState(24);
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);
  const [address, setAddress] = useState({title: "Gaziantep", zip: 27100})

  return (
    <div className="App">
      <h1>Merhaba {name} !</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ahmet")}>Change Name</button>
      <button onClick={() => setAge(26)}>Change Age</button>

      <br/>
      <br/>
      <hr/>
      <br/>

      <h2>Friends</h2>
      {
        friends.map((friend, index) => (<div key={index}>{friend}</div>
        ))
      }

      <br/>

      <button onClick={() => setFriends(["Ayşe", ...friends, "Hakan"])}>Add New Friend</button>


      <br/>
      <hr/>
      <br/>

      <h2>Address</h2>
      <div >{address.title} {address.zip} </div>

      <br/>

      <button onClick={() => setAddress({...address, zip:32342})}>Change Address</button>

    </div>
  );
}

export default App;
