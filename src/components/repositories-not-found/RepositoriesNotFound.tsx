import React from 'react';
import style from "./RepositoriesNotFound.module.scss";
import reposImg from "../../assets/img/rep.svg";

export function RepositoriesNotFound() {
    return (
        <div className={style.repositories_not_found_container}>
            <div className={style.repositories_not_found_block}>
                <img src={reposImg} alt="icon search" className={style.repositories_not_found_img}/>
                <div className={style.repositories_not_found_text}>
                    Repository list is empty
                </div>
            </div>
        </div>
    );
}