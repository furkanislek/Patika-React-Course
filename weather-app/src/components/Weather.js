import { createContext, useState } from "react";

const WeatherContext = createContext()

export const WeatherProvider = ({children}) => {

    const [data,setData] = useState([])

    return  <WeatherContext.Provider value={data}>{children}</WeatherContext.Provider>
    
}

export default WeatherContext