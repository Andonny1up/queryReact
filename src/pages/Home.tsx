import { useNavigate } from "react-router-dom"


function Home() {
  const navigate = useNavigate()
  return <>
    <h2>HOLA MUNDO</h2>
    <button onClick={() => navigate("/products")}>Enviar</button>
  </>
}

export default Home
