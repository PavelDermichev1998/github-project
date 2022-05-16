import React from 'react';
import style from './UserInfo.module.scss';
import groupImg from './../../assets/img/group_24px.svg'
import personImg from './../../assets/img/person_24px.svg'

export function UserInfo() {
    return (
        <div className={style.userInfoContainer}>
            <img src="https://avatarko.ru/img/kartinka/1/avatarko_anonim.jpg" alt="user" className={style.userPhoto}/>

            <h2 className={style.userName}>UserName</h2>
            <span className={style.userNick}>username</span>

            <div className={style.followers}>
                <img src={groupImg} alt="groupImg"/>
                <span>12 followers</span>
            </div>

            <div className={style.following}>
                <img src={personImg} alt="personImg"/>
                <span>10 following</span>
            </div>
        </div>
    )
}