import {Dispatch} from 'redux'
import {gitAPI, RepositoryType} from "./api/gti-api";

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
export const getReposTC = (login: string) => {
    return (dispatch: Dispatch<ReposActionsType>) => {
        gitAPI.getRepositories(login)
            .then((res) => {
                dispatch(getReposAC(res.data))
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
