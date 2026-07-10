import { useEffect, useState } from 'react'

export const colors = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
}

//type lightColor = 'red' | 'yellow' | 'green';
type LightColor = keyof typeof colors;

export const useTrafficLight = () => {
  const [light, setLight] = useState<LightColor>('red');
  const [timer, setTimer] = useState<number>(5);

  useEffect(() => { 
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          return 5; // Reinicia el temporizador a 5 segundos
        }
        return prevTimer - 1; // Decrementa el temporizador en 1 segundo
      });
    }, 1000);

    return () => clearInterval(countdown);
  },[timer]);

  useEffect(() => {
      if(timer === 5) {
        setLight((prevLight) => {
          if (prevLight === 'red') return 'green';
          if (prevLight === 'green') return 'yellow';
          return 'red';
        });
      }

  }, [timer]);
  
    return {
        // Props
        light,
        timer,

        // Computed
        percentaje: (timer / 5) * 100,
        greenLight: light === 'green' ? colors.green : 'bg-gray-500',
        yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
        redLight: light === 'red' ? colors.red : 'bg-gray-500',

        // Methods
        setLight
    }
}

