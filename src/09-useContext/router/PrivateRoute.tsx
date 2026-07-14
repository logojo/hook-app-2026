import { use } from "react"
import { UserContext } from "../context/UserContext"
import { Spinner } from "@/components/ui/spinner";
import { Navigate } from "react-router";

interface Props {
  element: React.ReactNode
}

export const PrivateRoute = ({ element } : Props ) => {
  const { authStatus } = use(UserContext);

  if( authStatus === 'checking' ) {
    return  <Spinner className="size-8" /> 
   
  }

  if( authStatus === 'autheticathed' ) {
    return  element; 
  }

  return <Navigate to='login' replace />
}

export const PublicRoute = ({ element } : Props ) => {
  const { authStatus } = use(UserContext);

  if( authStatus === 'checking' ) {
    return  <Spinner className="size-8" /> 
  }

  if( authStatus === 'not-autheticathed' ) {
    return  element; 
  }

  return <Navigate to='profile' replace />
}
