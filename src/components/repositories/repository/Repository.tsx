import React from 'react';
import style from './Header.module.scss';
import gitImg from '../../assets/img/Vector.svg'
import searchImg from '../../assets/img/image.svg'

export function Header() {
    return (
        <div className={style.headerContainer}>
            <img src={gitImg} alt="git-icon" className={style.gitImg}/>
            <div className={style.searchContainer}>
                <img src={searchImg} alt="icon search" className={style.searchIcon}/>
                <input
                    type='search'
                    placeholder='Enter GitHub username'
                    className={style.input}
                />
            </div>
        </div>
    )
}