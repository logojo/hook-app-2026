import { useEffect, useState } from "react";

interface Props {
    id: number;
}

interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
}


export const usePokemon = ({ id } : Props) => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);

  
  const getPokemonById = async( id: number ) => {
    setLoading( true );
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json();

    setPokemon({
        id: id,
        name: data.name,
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    });

    setLoading( false );
  }

  useEffect(() => {
     getPokemonById(id);
  }, [id])
  
 
  return {
    loading,
    pokemon,

    //computed: formatea el numero añadiendo 0 a la izquiera manteniendo siempre 3 caracteres
    formattedId: id.toString().padStart(3,'0')
  }
}
