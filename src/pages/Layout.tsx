import { Link, Outlet } from 'react-router-dom'

type Props = {}

const Layout = (props: Props) => {
  return (
    <div>
        <Link to="/" >Inicio</Link>{" "}
        <Link to="/products">Productos</Link>
        <Outlet/>
    </div>
  )
}

export default Layout