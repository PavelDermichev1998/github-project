import React from 'react';
import style from "./InitialState.module.scss";

export function InitialState(props: InitialStatePropsType) {
    return (
        <div className={style.container}>

            <img src={props.img} alt="icon" className={style.img}/>

            <div className={style.text}>
                {props.text}<br/>
                {props.secondText}
            </div>

        </div>
    );
}

//types
type InitialStatePropsType = {
    img: string
    text: string
    secondText?: string
}