import { use, type Usable } from "react"
import type { User } from "./api/get-user-action";

interface Props {
    getUser: Usable<User>;
}

export const ClienteInformation = ({ getUser } : Props) => {

    //* use me permite obtener el valor de funsiones asincronas como peticiones
    //* Es importante usar el componete Suspense para que todo funsione correctamente
  const user = use( getUser );

  return (
    <div className='bg-gradient flex-col gap-2'>
        <h1 className="text-4xl font-thin">{user.name} - #{user.id}</h1>
        <p className="text-2xl">{user.location}</p>
        <p className="text-2xl">{user.role}</p>
    </div>
  )
}
