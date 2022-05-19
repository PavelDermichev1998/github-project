import React from 'react';
import style from './UserInfo.module.scss';
import groupImg from './../../assets/img/group_24px.svg'
import personImg from './../../assets/img/person_24px.svg'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../Store";

export function UserInfo() {

    const login = useSelector<AppRootStateType, string>((state) => state.user.login)
    const name = useSelector<AppRootStateType, string>((state) => state.user.name)
    const avatar = useSelector<AppRootStateType, string>((state) => state.user.avatar_url)
    const followers = useSelector<AppRootStateType, number>((state) => state.user.followers)
    const following = useSelector<AppRootStateType, number>((state) => state.user.following)
    const htmlUrl = useSelector<AppRootStateType, string>((state) => state.user.html_url)

    return (
        <div className={style.userInfoContainer}>
            <img src={avatar} alt="user" className={style.userPhoto}/>

            <h2 className={style.userName}>{name}</h2>
            <a href={htmlUrl} className={style.userNick} target="_blank">{login}</a>

            <div className={style.followers}>
                <img src={groupImg} alt="groupImg"/>
                <span>{followers} followers</span>
            </div>

            <div className={style.following}>
                <img src={personImg} alt="personImg"/>
                <span>{following} following</span>
            </div>
        </div>
    )
}