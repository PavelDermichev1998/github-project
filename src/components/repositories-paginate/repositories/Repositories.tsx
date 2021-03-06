import React from 'react';
import {useSelector} from 'react-redux';
import style from './Repositories.module.scss';
import {AppRootStateType} from '../../../store';
import {ReposType} from '../../../reducers/repos-reducer';
import {Repository} from './repository/Repository';

export function Repositories(props: RepositoriesPropsType) {

    const repositories = useSelector<AppRootStateType, Array<ReposType>>((state) => state.repos)

    return (
        <div className={style.repositories_container}>
            <div className={style.repositories_text}>Repositories ({repositories.length})</div>
            {props.currentRepos.map((rep: ReposType) => {
                return <Repository
                    key={rep.id}
                    name={rep.name}
                    description={rep.description}
                    htmlUrl={rep.html_url}
                />
            })}
        </div>
    );
}

//types
type RepositoriesPropsType = {
    currentRepos: Array<ReposType>
}