import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
//import { TrafficLight } from './01-useState/TrafficLight'
//import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect'
//import { PokemonPage } from './03-examples/PokemonPage'
//import { FocusScreen } from './01-useState/FocusScreen'
//import { TasksApp } from './05-useReducer/TanskApp'
import { ScrambleWords } from './05-useReducer/ScrambleWords'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ScrambleWords />
  </StrictMode>,
)
