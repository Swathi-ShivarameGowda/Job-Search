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
    const [params, setParams] = useState({})
    const [searchResult, setSearchResult] = useState()
    const [currentPage, setCurrentPage]= useState(1)
    let jobsPerPage= 5

    useEffect(() => {
        dispatch(getApiResults());
    }, [])


    function handleParamChange(e) {
        console.log("e value is>>>", e.target)
        const param = e.target.name
        const value = e.target.value

        let descriptionSearch = jobSearch.filter(data => data.description.includes(e.target.value) ? data.description : "")
        
        let locationSearch = jobSearch.filter(data => data.location.includes(e.target.value) ? data.location : "")
        
        let typeSearch = jobSearch.filter(data => data.type.includes(e.target.value) ? data.type : "")

        const result = descriptionSearch.concat(locationSearch, typeSearch)
        setSearchResult(result)

        console.log("search is>>>", searchResult)
        
        setCurrentPage(1)
        setParams(prevParams => {
            return { ...prevParams, [param]: value }
        })
    }

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobSearch.slice(indexOfFirstJob, indexOfLastJob);
  
   
    return (
        <Container className="my-4">
            <h1 className="mb-4" style={{ color: 'white' }}>Your jobs</h1>
            <SearchPage params={params} onParamChange={handleParamChange} />
            <JobPagination jobSearch={jobSearch} jobsPerPage={jobsPerPage} setCurrentPage={setCurrentPage} />
            {jobSearch && !searchResult && currentJobs.map(job => {
                return <Job key={job.id} job={job} />
            })}
            {searchResult && searchResult.map(job => {
                return <Job key={job.id} job={job} />
            })}
            
        </Container>
    );
}


