import React from 'react'

const DefaultPagination = ({ paginationNumber, currentPage, paginateCurrentData }) => {
    return (
        <>
            {paginationNumber.map(number => {
                return currentPage === number ?
                    (<span
                        key={number}
                        style={{ width: '20px', padding: "10px", background: '#63f1d6', cursor: 'pointer', marginRight: '10px' }}
                        onClick={() => paginateCurrentData(number)}>{number}</span>
                    ) : (<span
                        key={number}
                        style={{ width: '20px', padding: "10px", cursor: 'pointer', marginRight: '10px' }}
                        onClick={() => paginateCurrentData(number)}>{number}</span>)
            })}
        </>
    )
}

export default DefaultPagination
