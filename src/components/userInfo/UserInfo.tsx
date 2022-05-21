import React from 'react';
import style from './UserInfo.module.scss';
import groupImg from './../../assets/img/group_24px.svg'
import personImg from './../../assets/img/person_24px.svg'
import {UserDomainType} from '../../reducers/users-reducer';

export const UserInfo = React.memo(function (props: UserInfoPropsType) {

    function toFix (fixNumber: number) {
        if (fixNumber >= 1000) {
            let newFixedNumber = (fixNumber/1000).toFixed(1)
            return newFixedNumber + 'k';
        }
        return fixNumber
    }

    return (
        <span className={style.user_info_container}>
            <img src={props.user.avatar_url} alt="user" className={style.user_photo}/>
            <h2 className={style.user_name}>{props.user.name}</h2>
            <a href={props.user.html_url} className={style.user_nick_name} target="_blank" rel="noreferrer">{props.user.login}</a>
            <div className={style.followers}>
                <img src={groupImg} alt="groupImg"/>
                <span>{toFix(props.user.followers)} followers</span>
            </div>
            <div className={style.following}>
                <img src={personImg} alt="personImg"/>
                <span>{toFix(props.user.following)} following</span>
            </div>
        </span>
    )
})

//types
type UserInfoPropsType = {
   user: UserDomainType
}
