import React from 'react'
import  {WeatherProvider}  from './components/Weather'
import Button from './components/Button'


function App() {
  return (
    <div>
      <WeatherProvider>
      <Button/>
      </WeatherProvider>
    </div>
  )
}

export default App
