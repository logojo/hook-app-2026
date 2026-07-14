import { use } from "react";

import { UserContext } from "@/09-useContext/context/UserContext";
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

import { Link } from "react-router"

export function Navigation() {
  //* aqui se esta usando el use en lugar de useContext
  const { user, logout } = use( UserContext );

  return (
    <div className="flex flex-col items-start gap-8">
      <ButtonGroup>

        {
          user ? (
              <>
                <Button variant="outline" size="sm" className='text-black'>
                  <Link to="/profile">Perfil</Link>
                </Button>

                <Button variant="outline" 
                        size="sm" 
                        className='text-black'
                        onClick={logout}>
                        Cerrar sesión
                </Button>
              </> 
          ) :
          (
               <Button variant="outline" size="sm" className='text-black'>
                <Link  to="/login">Iniciar sesión</Link>
              </Button>
          ) 
        }

       
      </ButtonGroup>
    </div>
  )
}
