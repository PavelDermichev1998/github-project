import {gitAPI, UserType} from "./api/gti-api";
import {AppThunk} from "./Store";


const initialState: initialStateType = {
    searchValue: '',
    login: '',
    name: '',
    avatar_url: '',
    followers: 0,
    following: 0,
    html_url: ''
}

export const userReducer = (state: initialStateType = initialState, action: UsersActionsType): initialStateType => {
    switch (action.type) {
        case 'GET-USER':
            return {...state,
                login: action.data.login,
                name: action.data.name,
                avatar_url: action.data.avatar_url,
                followers: action.data.followers,
                following: action.data.following,
                html_url: action.data.html_url
            }
        default:
            return state
    }
}

// actions
export const getUserAC = (data: UserType) => ({type: 'GET-USER', data} as const)

// thunks
export const getUserTC = (login: string) : AppThunk => (dispatch) => {
        gitAPI.getUser(login)
            .then((res) => {
                dispatch(getUserAC(res.data))
            })
    }


// types
export type initialStateType = {
    searchValue: string
    login: string
    name: string
    avatar_url: string
    followers: number
    following: number
    html_url: string
}

export type UsersActionsType =
    | ReturnType<typeof getUserAC>
