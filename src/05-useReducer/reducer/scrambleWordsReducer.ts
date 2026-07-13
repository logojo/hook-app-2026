
const GAME_WORDS = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'HTML',
  'ANGULAR',
  'SOLID',
  'NODE',
  'VUEJS',
  'SVELTE',
  'EXPRESS',
  'MONGODB',
  'POSTGRES',
  'DOCKER',
  'KUBERNETES',
  'WEBPACK',
  'VITE',
  'TAILWIND',
];

export interface ScrambleWordsState {
    currentWord: string;
    errorCounter: number;
    guess: string,
    isGameOver: boolean
    maxAllowErrors: number;
    maxSkips: number;
    points: number;
    scrambledWord: string;
    skipCounter: number;
    words: string[];
    totalWords: number,
}

export type ScrambleWordsAction = 
| { type: 'SET_GUESS', payload: string }
| { type: 'SEND_GUESS' }
| { type: 'SKIP_WORD' }
| { type: 'PLAY_AGAIN', payload: ScrambleWordsState };

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  //return array.sort(() => Math.random() - 0.5); //formula anterior

  //implementado funsuón Fisher-Yates   que es mejor que sort
  const copy=[...array];

    for(let i=copy.length-1; i>0; i-- ) {
        const j=Math.floor(Math.random()*(i+1));
        [copy[i],copy[j]]=[copy[j],copy[i]];
    }

    return copy;
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
  // return word
  //   .split('')
  //   .sort(() => Math.random() - 0.5)
  //   .join('');

  //implementado funsuón Fisher-Yates   que es mejor que sort
  const letters = word.split('');

  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }

  return letters.join('');
};

export const getInitialState = () : ScrambleWordsState => {
  const suffleWords = ( shuffleArray([ ...GAME_WORDS ]));

  return {
    currentWord: suffleWords[0],
    errorCounter: 0,
    guess: '',
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(suffleWords[0]),
    skipCounter: 0,
    words: suffleWords,
    totalWords: suffleWords.length,
  }
}

export const scrambleWordsreducer = ( 
  state: ScrambleWordsState, 
  action: ScrambleWordsAction 
) : ScrambleWordsState =>  {
  switch( action.type ) {
         case 'SET_GUESS': 
          return {
            ...state,
            guess: action.payload
          }
         case 'SEND_GUESS': {
          const newWords = state.words.slice(1);

          if( state.guess === state.currentWord ) { 
              return {
                ...state,
                points: state.points + 1, 
                guess: '',
                words: newWords,
                currentWord: newWords[0],
                scrambledWord: scrambleWord( newWords[0] ), //! esto se considera mala practica
              }
          }

          return  {
                ...state,
                errorCounter: state.errorCounter + 1,
                isGameOver: (state.errorCounter + 1)  >=  state.maxAllowErrors,              
                guess: '',
              };
          }
        case 'SKIP_WORD': {
            const newWords = state.words.slice(1);

            return {
              ...state,        
              skipCounter: state.skipCounter + 1,
              words: newWords,
              guess: '',
              currentWord: newWords[0],
              scrambledWord: scrambleWord( newWords[0] ),
            }
          
        }
        case 'PLAY_AGAIN': 
         return action.payload;
        default:
          return state;
  }
}