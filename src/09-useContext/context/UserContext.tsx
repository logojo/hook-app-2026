
import { createContext, useEffect, useState, type PropsWithChildren } from "react"
import type { User } from "../interfaces/auth.interface";
import { users } from "../data/user-mock.data";


type AutStatus = 'checking' | 'autheticathed' | 'not-autheticathed'

interface UserContextProps {
    authStatus: AutStatus;
    user: User | null;
    //methods
    login: ( userId: number) => boolean
    logout: () => void
}

export const UserContext = createContext({} as UserContextProps) 

export const UserContextProvider = ({ children } : PropsWithChildren) => {
  const [authStatus, setAuthStatus] = useState<AutStatus>('checking');
  const [user, setUser] = useState<User|null>(null);

  const handleLogin = (userId : number) : boolean => {
    const user = users.find((user) => user.id === userId);

    if( user ) {
        setUser( user);
        localStorage.setItem('userId', userId.toString())
        setAuthStatus('autheticathed')
        return true;

    }

    setUser( null );
    setAuthStatus('not-autheticathed')
    return false;
  }

  const handleLogout = ()=> {
    setUser( null );
    setAuthStatus('not-autheticathed');
    localStorage.removeItem('userId')
  }

  useEffect(() => {
    const  userId = localStorage.getItem('userId')
    
    if( userId ) {
        handleLogin( +userId );
        return;
    }

    handleLogout();
  }, [])
  

  return  <UserContext value={{
    authStatus: authStatus,
    user      : user,
    login     : handleLogin,
    logout    : handleLogout,
  }}>
     { children }
  </UserContext>;
  
}
