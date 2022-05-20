import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';
import style from "./RepositoryPaginate.module.scss";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store";
import {ReposType} from "../../reducers/repos-reducer";
import {Repositories} from "./repositories/Repositories";

export function RepositoryPaginate(props: { pageCount: number }) {

    const [currentPage, setCurrentPage] = useState(1)
    const repos = useSelector<AppRootStateType, Array<ReposType>>(state => state.repos)

    const pageCount = Math.ceil(repos.length / props.pageCount)
    const lastPageIndex = currentPage * props.pageCount
    const firstPageIndex = lastPageIndex - props.pageCount
    const currentRepos = repos.slice(firstPageIndex, lastPageIndex)

    const onPageChange = (e: { selected: number }) => {
        setCurrentPage(e.selected + 1);
    };

    const pageRangeRepos = () => {
        if (currentPage === pageCount) {
            if (currentRepos.length === 1) {
                return `${firstPageIndex + 1}`
            } else if (currentRepos.length === 2) {
                return `${firstPageIndex + 1} - ${lastPageIndex - 2}`
            } else if (currentRepos.length === 3) {
                return `${firstPageIndex + 1} - ${lastPageIndex - 3}`
            }
        }
        return `${firstPageIndex + 1} - ${lastPageIndex}`
    }

    return (
        <div>
            <Repositories currentRepos={currentRepos}/>
            <div>
                <div>
                    {pageRangeRepos()} of {repos.length} items
                </div>
                <ReactPaginate
                    onPageChange={onPageChange}
                    pageCount={pageCount}
                    breakLabel="..."
                    nextLabel=">"
                    previousLabel="<"
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    containerClassName={style.paginator_container}
                    pageClassName={style.paginator_container_number}
                    pageLinkClassName={style.paginator_container_link}
                    activeLinkClassName={style.paginator_container_active}
                    breakClassName={style.paginator_container_dotes}
                />
            </div>
        </div>
    );
}

//                nextLinkClassName={style.pageNumber === pageCount ? style.}
//                previousLinkClassName={style.pageNumber === startOfPage ?}
