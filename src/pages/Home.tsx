import { useNavigate } from "react-router-dom"


function Home() {
  const navigate = useNavigate();
 const moveToHome = () => {
  navigate('/home')
 }

  return (
    <div onClick={() => moveToHome()} style={{cursor:'pointer'}}>Home</div>
  )
}

export default Home