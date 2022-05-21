import React from 'react';
import style from './App.module.scss';
import {Header} from './components/header/Header';
import {UserInfo} from './components/userInfo/UserInfo';
import {RepositoriesNotFound} from './components/repositories-not-found/RepositoriesNotFound';
import {InitialState} from './components/initial-state/InitialState';
import {RepositoryPaginate} from './components/repositories-paginate/RepositoryPaginate';
import searchImg from './assets/img/search.svg';
import userNotFoundImg from './assets/img/user-not-found.svg';
import {useSelector} from 'react-redux';
import {AppRootStateType} from './store';
import {ReposType} from './reducers/repos-reducer';
import CircularProgress from '@mui/material/CircularProgress';
import {UserDomainType} from './reducers/users-reducer';


function App() {

    const user = useSelector<AppRootStateType, UserDomainType>((state) => state.user)
    const repos = useSelector<AppRootStateType, Array<ReposType>>(state => state.repos)
    const searchValue = useSelector<AppRootStateType, string>((state) => state.app.searchValue)
    const error = useSelector<AppRootStateType, boolean>((state) => state.app.isError)
    const initialized = useSelector<AppRootStateType, boolean>((state) => state.app.initialized)
    const isLoading = useSelector<AppRootStateType, boolean>((state) => state.app.isLoading)

    if (isLoading) {
        return <div
            style={{position: 'fixed', top: '30%', textAlign: 'center', width: '100%'}}>
            <CircularProgress/>
        </div>
    }
    return (
        <div  className={`${!initialized && style.app_not_initialized} ${error && style.app_not_initialized} ${style.app}`}>
            <Header searchValue={searchValue}/>
            {!initialized && <InitialState img={searchImg} text={'Start with searching'} secondText={'a GitHub user'}/>}
            {error && <InitialState img={userNotFoundImg} text={`User not found`}/>}
            {!error && initialized && <UserInfo user={user}/>}
            {!error && initialized && repos.length > 4 && <RepositoryPaginate pageCount={4}/>}
            {!error && initialized && repos.length === 0 && <RepositoriesNotFound/>}
        </div>
    );
}

export default App;
