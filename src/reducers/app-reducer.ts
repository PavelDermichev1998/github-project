
const initialState: initialStateType = {
    searchValue: '',
    isError: false,
    initialized: false
}

export const appReducer = (state: initialStateType = initialState, action: AppActionsType): initialStateType => {
    switch (action.type) {
        case "SET-ERROR":
            return {...state, isError: action.isError}
        case "SET-INITIALIZED":
            return {...state, initialized: action.initialized}
        default:
            return state
    }
}

// actions
export const setErrorAC = (isError: boolean) => ({type: 'SET-ERROR', isError} as const)
export const setInitializedAC = (initialized: boolean) => ({type: 'SET-INITIALIZED', initialized} as const)


// types
export type initialStateType = {
    searchValue: string
    isError: boolean
    initialized: boolean
}

export type AppActionsType =
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setInitializedAC>
