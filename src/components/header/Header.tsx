import React, {ChangeEvent, KeyboardEvent, useCallback} from 'react';
import style from './Header.module.scss';
import gitImg from '../../assets/img/Vector.svg'
import searchImg from '../../assets/img/image.svg'
import {getUserTC} from "../../users-reducer";
import {useSelector} from "react-redux";
import {AppRootStateType, useTypedDispatch} from "../../Store";
import {getReposTC} from "../../repos-reducer";

export function Header() {

    let searchValue = useSelector<AppRootStateType, string>((state) => state.user.searchValue)
    const dispatch = useTypedDispatch()

    const addItemHandler = useCallback((searchValue: string) => {
        dispatch(getUserTC(searchValue))
        dispatch(getReposTC(searchValue))
    },[searchValue])

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        searchValue = e.currentTarget.value
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addItemHandler(searchValue);
        }
    }

    return (
        <div className={style.headerContainer}>
            <img src={gitImg} alt="git-icon" className={style.gitImg}/>
            <div className={style.searchContainer}>
                <img src={searchImg} alt="icon search" className={style.searchIcon}/>
                <input
                    type='search'
                    placeholder='Enter GitHub username'
                    className={style.input}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                />
            </div>
        </div>
    )
}
