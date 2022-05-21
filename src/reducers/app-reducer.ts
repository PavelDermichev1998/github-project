
const initialState: initialStateType = {
    searchValue: '',
    isError: false,
    initialized: false,
    isLoading: false
}

export const appReducer = (state: initialStateType = initialState, action: AppActionsType): initialStateType => {
    switch (action.type) {
        case "SET-ERROR":
            return {...state, isError: action.isError}
        case "SET-INITIALIZED":
            return {...state, initialized: action.initialized}
        case "SET-IS-LOADING":
            return {...state, isLoading: action.isLoading}
        case "SET-SEARCH-VALUE":
            return {...state, searchValue: action.searchValue}
        default:
            return state
    }
}

// actions
export const setErrorAC = (isError: boolean) => ({type: 'SET-ERROR', isError} as const)
export const setInitializedAC = (initialized: boolean) => ({type: 'SET-INITIALIZED', initialized} as const)
export const setIsLoadingAC = (isLoading: boolean) => ({type: 'SET-IS-LOADING', isLoading} as const)
export const setSearchValueAC = (searchValue: string) => ({type: 'SET-SEARCH-VALUE', searchValue} as const)


// types
export type initialStateType = {
    searchValue: string
    isError: boolean
    initialized: boolean
    isLoading: boolean
}

export type AppActionsType =
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setInitializedAC>
    | ReturnType<typeof setIsLoadingAC>
    | ReturnType<typeof setSearchValueAC>
