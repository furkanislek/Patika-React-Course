import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'


function Home() {

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("blog",)
    },3000)
  }, [navigate])

  return (
    <div>
        <h1>
            Home
        </h1>
        <p style={{color : "pink", fontSize : 20}}>You Will Go Blog Page in 3 Seconds</p>
    </div>
  )
}

export default Home