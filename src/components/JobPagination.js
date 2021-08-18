import React from 'react'
import '../App.css';

export default function JobPagination({ jobSearch, jobsPerPage, setCurrentPage }) {
   
    function handleClick(event) {
        setCurrentPage(event.target.id)
    }

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(jobSearch.length / jobsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li style={{ paddingLeft: '10px' }}
                key={number}
                id={number}
                onClick={handleClick}
            >
                {number}
            </li>
        )
    })


    return (
        <ul id="page-numbers" className="ba">
            {renderPageNumbers}
        </ul>
        )
}