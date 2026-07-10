import * as z from "zod"; 

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
 todos: Todo[];
 lenght: number;
 completed: number;
 pending: number;
}

export type TaskAction = 
| { type: 'ADD_TODO',    payload: string }
| { type: 'TOOGLE_TODO', payload: number }
| { type: 'DELETE_TODO', payload: number}

//creando esquema para validacion del Todo
const TodoSchema = z.object({
  id: z.number(),
  text: z.string(),
  completed: z.boolean(),
});

//creando esquema para validacion del TaskState
const TaskStateSchema = z.object({
  todos: z.array(TodoSchema),
  lenght: z.number(),
  completed: z.number(),
  pending: z.number(),
});


export const getTaskInitialState = () : TaskState => {
  const storageState  =  JSON.parse(localStorage.getItem('state') ?? '');

  //validando que los datos del storage cumplan con lo definido en el esquema
  const result = TaskStateSchema.safeParse( storageState );


  if( result.error  )  {
      return  {
        todos: [],
        lenght: 0,
        completed: 0,
        pending: 0,
      }
  }

  return  result.data;


}

export const taskReducer = ( 
   state : TaskState = getTaskInitialState(), 
   action: TaskAction  
) : TaskState => {

    switch( action.type ) {
      case 'ADD_TODO': {

        const newTodo: Todo = {
           id: Date.now(),
           text: action.payload,
           completed: false
         }
  
         
         return {
            ...state,
            todos: [ ...state.todos, newTodo],
            lenght: state.todos.length + 1,
            pending: state.pending + 1,
            
         }
      }

      case 'TOOGLE_TODO': {
        const updated = state.todos.map((todo) => {
            if ( todo.id === action.payload )
                return { ...todo, completed: !todo.completed }
            return todo;
        })

        return {
            ...state,
            todos: updated,
            completed: updated.filter((todo) => todo.completed).length,
            pending: updated.filter((todo) => !todo.completed).length,
         };
      }
      case 'DELETE_TODO':{
        const currentTodos = state.todos.filter((todo) => todo.id !== action.payload)
        return {
            todos: currentTodos,
            lenght: currentTodos.length,
            completed: currentTodos.filter((todo) => todo.completed).length,
            pending: currentTodos.filter((todo) => !todo.completed).length,
        }
      }
      default:
        return state;
    }
}