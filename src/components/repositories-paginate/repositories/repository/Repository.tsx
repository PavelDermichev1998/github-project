import React from 'react';
import style from './Repository.module.scss';

export function Repository(props: RepositoryPropsType) {
    return (
        <div className={style.repository_container}>
            <a href={props.htmlUrl} className={style.repository_name} target="_blank" rel="noreferrer">{props.name}</a>
            <div className={style.repository_description}>{props.description}</div>
        </div>
    )
}

//types
type RepositoryPropsType = {
    name: string
    description: string | null
    htmlUrl: string
}