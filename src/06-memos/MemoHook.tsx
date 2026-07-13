import { Button } from '@/components/ui/button';
import { MyTitle } from './ui/MyTitle';
import { MySubtitle } from './ui/MySubtitle';
import { useCallback, useState } from 'react';


export const MemoHook = () => {
const [title, setTitle] = useState('Hola');
const [subtitle, setSubtitle] = useState('Mundo');

//la funsion callback se usa memorizar funsiones y evitar re-render
//* en la versión 19.2 react metio el compilador el cual se encarga de esto
const callMyAPI = useCallback (() => {
    console.log('llamando api', subtitle);
},[subtitle])

  return (
    <div className='bg-gradient flex-col gap-4'>
        <h1 className='text-2xl font-thin'>Memo App</h1>

        <MyTitle title={title }/>
        <MySubtitle subtitle={subtitle} callMyAPI={callMyAPI}/>
  

        <Button variant="secondary"
                onClick={() => setTitle('Hello, ' + new Date().getTime()) }
        >
            Cambiar titulo
        </Button>

        <Button variant="secondary" 
                onClick={() => setSubtitle('World') }
        >
            Cambiar subtitulo
        </Button>
    </div>
  )
}
