import React from "react"

interface Props {
    title: string
}

//memo se utiliza pora memorizar componetnes evita que se renderice todo el componente si ya no cambia
//*Esto ya no es importante ya que a partir de la versión 19.2 react metio el compilador el cual se encarga de esto
//* solo en ocaciones o casos muy especificos se puede seguir usando
export const MyTitle = React.memo(({ title } : Props) => {
  console.log('re-render')
  return (
    <h1 className="text-3xl">{title}</h1>
  )
})
