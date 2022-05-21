import React, {ChangeEvent, KeyboardEvent} from 'react';
import style from './Header.module.scss';
import gitImg from '../../assets/img/Vector.svg'
import searchImg from '../../assets/img/search.svg'
import {getUserTC} from '../../reducers/users-reducer';
import {useTypedDispatch} from '../../store';
import {getReposTC} from '../../reducers/repos-reducer';
import {setSearchValueAC} from '../../reducers/app-reducer';

export const Header = React.memo(function (props: {searchValue: string}) {

    const dispatch = useTypedDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValueAC(e.currentTarget.value))
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            dispatch(getUserTC(props.searchValue))
            dispatch(getReposTC(props.searchValue))
        }
    }

    return (
        <div className={style.headerContainer}>
            <img src={gitImg} alt="git-icon" className={style.gitImg}/>
            <div className={style.searchContainer}>
                <img src={searchImg} alt="icon search" className={style.searchIcon}/>
                <input
                    type='text'
                    placeholder='Enter GitHub username'
                    className={style.input}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                />
            </div>
        </div>
    )
})
