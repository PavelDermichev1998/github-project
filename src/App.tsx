import React from 'react';
import style from "./App.module.scss";
import {Header} from "./components/header/Header";
import {UserInfo} from "./components/userInfo/UserInfo";
import {RepositoriesNotFound} from "./components/repositories-not-found/RepositoriesNotFound";
import {InitialState} from './components/initial-state/InitialState';
import {RepositoryPaginate} from "./components/repositories-paginate/RepositoryPaginate";
import searchImg from "./assets/img/search.svg";
import userNotFoundImg from "./assets/img/user-not-found.svg";
import {useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {ReposType} from "./reducers/repos-reducer";



function App() {

    const repos = useSelector<AppRootStateType, Array<ReposType>>(state => state.repos)
    const error = useSelector<AppRootStateType, boolean>((state) => state.app.isError)
    const initialized = useSelector<AppRootStateType, boolean>((state) => state.app.initialized)

    return (
        <div className={style.app}>
            <Header/>
            {!initialized && <InitialState img={searchImg} text={'Start with searching'} secondText={'a GitHub user'}/>}
            {error && <InitialState img={userNotFoundImg} text={`User not found`}/>}
            {!error && initialized && <UserInfo/>}
            {!error && initialized && repos.length > 4 && <RepositoryPaginate pageCount={4}/>}
            {!error && initialized && repos.length === 0 && <RepositoriesNotFound/>}
        </div>
    );
}

export default App;
