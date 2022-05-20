import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import {userReducer, UsersActionsType} from "./reducers/users-reducer";
import {ReposActionsType, reposReducer} from "./reducers/repos-reducer";
import {useDispatch} from "react-redux";
import {AppActionsType, appReducer} from "./reducers/app-reducer";

const rootReducer = combineReducers({
    user: userReducer,
    repos: reposReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>


export type AllActionType = ReposActionsType | UsersActionsType | AppActionsType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AllActionType>
//@ts-ignore
window.store = store

export type AppDispatch = typeof store.dispatch;
export type TypedDispatch = ThunkDispatch<AppRootStateType, any, AllActionType>;
export const useTypedDispatch = () => useDispatch<TypedDispatch>();

