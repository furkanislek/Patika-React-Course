import { useEffect } from "react";
import { useState } from "react";
import {useContext} from "react";
import WeatherContext from "./Weather";
import App from '../../src/App.css';

function Button() {

    const {data, setData} = useContext(WeatherContext) 
    const [coord, setCoord] = useState(null)
    const [current, setCurrent] = useState({
        temp_c:``,
        icon:``,
        feelslike_c:``
    })
    const [location,setLocation] = useState({
        name:``,
        country:``,
        region:``,
        localtime:``
    })

const konum = () => {
    if(!navigator.geolocation){
        alert("lokasyon bilgisi bulanamadi")
    }  
        else {
            navigator.geolocation.getCurrentPosition((lokasyon) =>{
              setCoord(`${lokasyon.coords.latitude},${lokasyon.coords.longitude}`);
                           
            })
        }
}

 useEffect(()=>{
    const Url = `http://api.weatherapi.com/v1/current.json?key=44d589eb85f244b4950144426221606 &q=37.0376704,35.2813056&aqi=no
    `
    fetch(Url).then(res => res.json().then((data)=>{
        setCurrent({
            temp:data.current.temp_c,
            icon:data.current.condition.icon,
            feelslike_c:data.current.feelslike_c
        })
        setLocation({
            name: data.location.name,
            region: data.location.region,
            country: data.location.country,
            localtime: data.location.localtime
        })
        
    }))
     
 },[coord]  )

    return(

        <div className="App">

        <button onClick={konum}>Hava durumunu gor</button>
    <br/>

{/* Bu div üstte actıgım setCurrent icerisindeki veriler icin */}
        <div className="App">             
        <img src={current.icon}/>
        <br/>
        <div>{current.temp}  (Sıcaklık)</div>
        <div>{current.feelslike_c}   (Hissedilen)</div>
        <br/>
        <br/>
        </div>

{/* Açtığım ikinci div ise SetLocation bilgileri icin */}

        <div className="App">
         {location.country}
         <br/>
         {location.region}
         <br/>
         {location.name}
         <br/>
         {location.localtime}
        </div>

        </div>    
    )

}

export default Button;