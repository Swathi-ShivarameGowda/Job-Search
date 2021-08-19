import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import './App.css';
import {getApiResults} from './actions/JobSearchAction'
import { Container } from 'react-bootstrap';
import Job from './components/Job'
import JobPagination from './components/JobPagination'
import SearchPage from './components/SearchPage'


export default function App() {
    const dispatch = useDispatch()

    const jobSearch = useSelector(state => state.jobSearchReducer.data)
    const [searchResult, setSearchResult] = useState()
    const [currentPage, setCurrentPage]= useState(1)
    let jobsPerPage= 5

    useEffect(() => {
        dispatch(getApiResults());
    }, [])


    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = searchResult ? searchResult.slice(indexOfFirstJob, indexOfLastJob) : jobSearch.slice(indexOfFirstJob, indexOfLastJob);
  
   
    return (
        <Container className="my-4">
            <h1 className="mb-4" style={{ color: 'white' }}>Your jobs</h1>
            <SearchPage
                setSearchResult={setSearchResult}
                setCurrentPage={setCurrentPage}
                jobSearch={jobSearch}
            />
            <JobPagination
                jobSearch={jobSearch}
                searchResult={searchResult}
                jobsPerPage={jobsPerPage}
                setCurrentPage={setCurrentPage}
            />
            
            {jobSearch && !searchResult && currentJobs.map(job => {
                return <Job key={job.id} job={job} />
            })}
            {searchResult && searchResult.map(job => {
                return <Job key={job.id} job={job} />
            })}
            
        </Container>
    );
}


