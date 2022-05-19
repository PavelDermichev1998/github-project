import React from 'react';
import style from "./App.module.scss";
import {UserInfo} from "./components/userInfo/UserInfo";
import {Repositories} from "./components/repositories/Repositories";
import {Header} from "./components/header/Header";
import { PaginatedItems } from './components/paginate/Paginate';

function App() {
    return (
        <div className={style.app}>
            <Header/>
            <UserInfo/>
            <Repositories/>
            <PaginatedItems itemsPerPage={4} />
        </div>
    );
}

export default App;
