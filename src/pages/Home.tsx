import { useNavigate } from "react-router-dom"


function Home() {
  throw new Error("Error! Chanchito triste :(")
  const navigate = useNavigate()
  return <>
    <h2>HOLA MUNDO</h2>
    <button onClick={() => navigate("/products")}>Enviar</button>
  </>
}

export default Home
