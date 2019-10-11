import React from 'react'
import PageNeighbours from "./PageNeighbours/PageNeighbours"
import DefaultPagination from './PageNeighbours/DefaultPagination';

import LeftArrow from 'common/Pagination/Arrows/LeftArrow'
import RightArrow from 'common/Pagination/Arrows/RightArrow'

import './Pagination.scss'

const Pagination = ({ indexOfLastPage, indexOfFirstPage, postsPerPage, totalPost, paginateCurrentData, paginatePerData, currentPage, nextPage, prePage }) => {
    const paginationNumber = []
    for (let i = 1; i <= Math.ceil(totalPost / postsPerPage); i++) {
        paginationNumber.push(i);
    }


    const pgEnd = Math.ceil(totalPost / postsPerPage)

    const pagePerData = [1, 2, 3, 5, 10, 20]
    return (
        <div className='pagination'>

            {
                currentPage === 1
                    ? (<span
                        className="arrow left-arrow disable"
                        aria-hidden="true"
                    ><LeftArrow /></span>)
                    : (<span
                        className="arrow left-arrow"
                        aria-hidden="true"
                        onClick={() => prePage(currentPage)}

                    >
                        <LeftArrow />
                    </span>)
            }
            {paginationNumber.length > 5 ? (
                <PageNeighbours
                    paginationNumber={paginationNumber}
                    currentPage={currentPage}
                    pgEnd={pgEnd}
                    paginateCurrentData={paginateCurrentData} />)
                : (<DefaultPagination
                    paginationNumber={paginationNumber}
                    currentPage={currentPage}
                    paginateCurrentData={paginateCurrentData} />)}
            {
                currentPage === Math.ceil(totalPost / postsPerPage)
                    ? (<span
                        className="arrow right-arrow disable"
                        aria-hidden="true"

                    ><RightArrow /></span>)
                    : (<span

                        className="arrow right-arrow "
                        aria-hidden="true"
                        onClick={() => nextPage(currentPage)}
                    ><RightArrow /></span>)
            }


        </div >
    )
}

export default Pagination
