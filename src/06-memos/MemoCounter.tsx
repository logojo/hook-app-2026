
import { Button } from '@/components/ui/button';
import { useCounter } from "@/hooks/useCounter";
import { useMemo } from 'react';


 const heavyStuff = ( iteracionNumber: number ) => {
        console.time('Heavy_stuff_started');
        for (let i = 0; i < iteracionNumber; i++) {
             console.log('pensando......');
             
            
        }
        console.timeEnd('Heavy_stuff_started');

        return `${ iteracionNumber } iteracione realizadas`
 }

export const MemoCounter = () => {
 const { counter, increment } = useCounter(20_000);
 const { counter :  counter2, increment:  increment2 } = useCounter(10_000);


 //useMemo memoriza el valor de retorno del proceso computado
 //* en la versión 19.2 react metio el compilador el cual se encarga de esto
 const myHeavyValue = useMemo ( () =>  heavyStuff( counter ), [ counter ] )

  return (
    <div className='bg-gradient flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Memo - useMemo - { myHeavyValue }</h1>
        <hr />

        <h4>Counter: { counter }</h4>
        <h4>Counter: { counter2 }</h4>

        <Button variant="destructive"
                onClick={increment }
        >
            Incrementar 1
        </Button>

        <Button variant="destructive"
                onClick={increment2 }
        >
            Incrementar 2
        </Button>
    </div>
  )
}
