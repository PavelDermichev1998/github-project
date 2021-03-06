import {gitAPI, RepositoryType} from '../api/gti-api';
import {setErrorAC, setIsLoadingAC} from './app-reducer';
import {AppThunk} from '../store';

const initialState: initialStateType = []

export const reposReducer = (state: initialStateType = initialState, action: ReposActionsType): initialStateType => {
    switch (action.type) {
        case 'SET-REPOS': {
            return action.repositories.map(rep => ({...rep}))
        }
        default:
            return state
    }
}

// actions
export const getReposAC = (repositories: Array<RepositoryType>) => ({type: 'SET-REPOS', repositories} as const)

// thunks
export const getReposTC = (login: string): AppThunk  => {
    return (dispatch) => {
        dispatch(setIsLoadingAC(true))
        gitAPI.getRepositories(login)
            .then((res) => {
                dispatch(setErrorAC(false))
                dispatch(getReposAC(res.data))
            })
            .catch(() => {
                dispatch(setErrorAC(true))
            })
            .finally(() => {
                dispatch(setIsLoadingAC(false))
            })
    }
}


// types
export type initialStateType = Array<ReposType>
export type ReposType = {
    name: string
    description: string | null
    html_url: string
    id: number
}

export type ReposActionsType =
    | ReturnType<typeof getReposAC>
