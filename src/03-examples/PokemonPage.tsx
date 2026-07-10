import { useCounter } from "../hooks/useCounter";
import { usePokemon } from "../hooks/usePokemon";

export const PokemonPage = () => {
  const { counter, increment, decrement} = useCounter( 1 )
  const { pokemon, loading, formattedId } = usePokemon({ id: counter });


  return (
    <div className="bg-gradient flex flex-col items-center">
      <h1 className="text-2xl font-thin text-white">Pokémon</h1>
      <h3 className="text-xl font-bold text-white">#{formattedId} {pokemon?.name}</h3>
      {
        loading ? (
            <h3 className="text-xl font-bold text-white h-25 flex items-center ">
                Cargando...
            </h3>
        ) : (
                <img
                  src={pokemon?.imageUrl}
                  alt={pokemon?.name}
                />

        )

      }

      <div className="flex gap-2">

        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={decrement}>
          Anterior
        </button>
        
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={increment}>
          Siguiente
        </button>
       
      </div>
    </div>
  );
};