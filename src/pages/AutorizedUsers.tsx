import { Navigate, Outlet } from 'react-router-dom';

type Props = {}

const useUser = () => 1;

const AutorizedUsers = (props: Props) => {
    const user = useUser();

    if (!user){
      return <Navigate to="/"/>
    }
    return (
    <Outlet/>
  )
}

export default AutorizedUsers