import React from 'react';
import style from './Repositories.module.scss';
import {Repository} from "./repository/Repository";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../Store";
import {ReposType} from "../../repos-reducer";

export function Repositories() {


    const repositories = useSelector<AppRootStateType, Array<ReposType>>((state) => state.repos)

    return (
        <div className={style.repositoriesContainer}>
            <div className={style.repositories}>Repositories ({repositories.length})</div>
            {
                repositories.map(rep => {
                    return <Repository
                        key={rep.id}
                        name={rep.name}
                        description={rep.description}
                        htmlUrl={rep.html_url}
                    />

                })
            }
        </div>

    )
}