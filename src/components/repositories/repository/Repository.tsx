import React from 'react';
import style from './Repository.module.scss';

export function Repository(props: ReposPropsType) {
    return (
        <div className={style.repositoryContainer}>
            <a href={props.htmlUrl} className={style.repositoryName} target="_blank">{props.name}</a>
            <div className={style.repositoryDescription}>{props.description}</div>
        </div>
    )
}

//types
type ReposPropsType = {
    name: string
    description: string | null
    htmlUrl: string
}