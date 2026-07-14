import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { Toaster } from 'sonner'
//import { TrafficLight } from './01-useState/TrafficLight'
//import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
//import { PokemonPage } from './03-examples/PokemonPage'
//import { FocusScreen } from './01-useState/FocusScreen'
//import { TasksApp } from './05-useReducer/TanskApp'
//import { ScrambleWords } from './05-useReducer/ScrambleWords'
//import { MemoHook } from './06-memos/MemoHook'
//import { MemoCounter } from './06-memos/MemoCounter'
//import { InstagromApp } from './07-useOptimistic/InstagromApp';

// import { ClienteInformation } from './08-use-suspense/ClienteInformation';
// import { SkeletonText } from './08-use-suspense/SkeletonText';
// import { getUserAction } from './08-use-suspense/api/get-user-action';

import { ProfesionalApp } from './09-useContext/ProfesionalApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Toaster />

   {/* 
   //* ejercicio con api use y cmponente suspense
   <Suspense fallback={<SkeletonText />}>
    <ClienteInformation getUser={ getUserAction(1004) } />
   </Suspense> 
   */}

   <ProfesionalApp />

  </StrictMode>,
)
