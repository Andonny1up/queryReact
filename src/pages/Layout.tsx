import { NavLink, Outlet } from 'react-router-dom'

type Props = {}

const Layout = ({}: Props) => {
  return (
    <div>
        <NavLink className={({isActive})=> isActive ? 'enabled': ""} to="/" >Inicio</NavLink>{" "}
        <NavLink to="/products">Productos</NavLink>
        <Outlet/>
    </div>
  )
}

export default Layout