import { StrictMode } from 'react'
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
import { InstagromApp } from './07-useOptimistic/InstagromApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Toaster />
   <InstagromApp />
  </StrictMode>,
)
