import { Button } from '@/components/ui/button';
import React from 'react';

interface Props {
    subtitle: string
    callMyAPI: () => void
}

//memo se utiliza pora memorizar componetnes evita que se renderice todo el componente si ya no cambia
//*Esto ya no es importante ya que a partir de la versión 19.2 react metio el compilador el cual se encarga de esto
//* solo en ocaciones o casos muy especificos se puede seguir usando
export const MySubtitle = React.memo(({ subtitle, callMyAPI } : Props) => {
        
  console.log('subtitle re-render')
  return (
    <>
        <h6 className='text-2xl font-bold'>{subtitle}</h6>
         <Button variant="destructive" onClick={callMyAPI}>Llamar funsion</Button>
    </>
  )
})
