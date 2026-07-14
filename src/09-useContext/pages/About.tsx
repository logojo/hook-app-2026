import { Navigation } from "./components/Navigation"


export const About = () => {
  return (
    <div className="flex-col min-h-screen">
      <h1 className="text-4xl font-bold">Acerca de nosotros</h1>
      <hr />

      {/* <div className="flex gap-2 mt-5">
        <Link to="/profile" className="hover:text-blue-500 underline text-xl">Perfil</Link>
        <Link to="/login" className="hover:text-blue-500 underline text-xl">iniciar sesión</Link>
      </div> */}
      <div className="flex justify-center mt-5">
        <Navigation />
      </div>
    </div>
  )
}
