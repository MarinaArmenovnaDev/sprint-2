import type {FilterValues, Todolist} from "../App.tsx";
import {v1} from "uuid";

const initialState: Todolist[] = []


export const deleteTodolistAC = (id: string) => {
    return {type: 'delete_todolist', payload: {id}} as const
}
export const createTodolistAC = (title: string) => {
    const id = v1()
    return {type: 'create_todolist', payload: {id, title}} as const
}
export const changeTodolistTitleAC = (payload: {id: string, title: string}) => {
    return  {type: 'change_todolistTitle', payload} as const
}

export const changeTodolistFilterAC = (payload: {id: string, filter: FilterValues}) => {
    return {type: "change_todolist_filter", payload} as const
}

export type DeleteTodolistAction = ReturnType<typeof deleteTodolistAC>
export type CreateTodolistAction = ReturnType<typeof createTodolistAC>
export type ChangeTodolistTitleAction = ReturnType<typeof changeTodolistTitleAC>
export type ChangeTodolistFilterAction = ReturnType<typeof changeTodolistFilterAC>

export const todolistsReducer = (state: Todolist[] = initialState, action: Actions): Todolist[] => {
    switch (action.type) {
        case 'delete_todolist' : {
            return state.filter(tl => tl.id !== action.payload.id)
        }
        case "create_todolist": {
            const newTodolist: Todolist = {id: action.payload.id , title: action.payload.title, filter: 'all'}
            return [...state, newTodolist,]
        }
        case 'change_todolistTitle': {
            return state.map(tl => tl.id === action.payload.id ? {...tl, title: action.payload.title} : tl)
        }
        case "change_todolist_filter" : {
            return state.map(tl => tl.id === action.payload.id ? {...tl, filter: action.payload.filter} : tl)
        }
        default:
            return state
    }
}


type Actions = DeleteTodolistAction | CreateTodolistAction | ChangeTodolistTitleAction | ChangeTodolistFilterAction
