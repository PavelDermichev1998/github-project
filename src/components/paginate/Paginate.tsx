import React from 'react';
import ReactPaginate from 'react-paginate';
import style from "./Paginate.module.scss";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../Store";
import {ReposType} from "../../repos-reducer";



function Items({ currentItems }: any) {
    return (
        <>
            {currentItems &&
            currentItems.map((item: any) => (
                <div>
                    <h3>Item #{item}</h3>
                </div>
            ))}
        </>
    );
}

export function PaginatedItems({ itemsPerPage }:any) {


    const repos = useSelector<AppRootStateType, Array<ReposType>>(state => state.repos)
    let pageCount = Math.ceil(repos.length / 4)

    return (
        <>
            <Items currentItems={repos} />
            <ReactPaginate
                //                pageCount={pageCount}
                pageCount={12}
                //              onPageChange = {onPageChange}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                containerClassName={style.paginator_container}
                pageClassName={style.paginator_container_number}
                pageLinkClassName={style.paginator_container_link}
                activeLinkClassName={style.paginator_container_active}
                //                nextLinkClassName={style.pageNumber === pageCount ? style.}
                //                previousLinkClassName={style.pageNumber === startOfPage ?}
                breakClassName={style.paginator_container_dotes}
            />
        </>
    );
}