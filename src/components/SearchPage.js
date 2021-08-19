import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import '../App.css';

export default function SearchPage({ setSearchResult, setCurrentPage, jobSearch }) {

    
    const [description, setDescription] = useState()
    const [location, setLocation] = useState()
    const [type, setType] = useState()

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value

        name === "description" ? setDescription(value) : setDescription()
        name === "location" ? setLocation(value) : setLocation()
        name === "type" ? setType(value) : setType()

    }

    function onParamChange(e) {
        e.preventDefault()
       
        if (!description && !location && !type) {
            setSearchResult("")
        } else {
            let descriptionSearch = jobSearch.filter(data => data.description.includes(description) ? data.description : "")

            let locationSearch = jobSearch.filter(data => data.location.includes(location) ? data.location : "")

            let typeSearch = jobSearch.filter(data => data.type.includes(type) ? data.type : "")

            const result = descriptionSearch.concat(locationSearch, typeSearch)
            setSearchResult(result)
        }

        setCurrentPage(1)
    }

    function onClearSearch(e) {
        setDescription("")
        setLocation("")
        setType("")
        setSearchResult(jobSearch)
    }

    return (
        <Form className="mb-4" onSubmit={onParamChange}>
            <Form.Row style={{ display: 'flex' }}>
                <Form.Group as={Col}>
                    <Form.Label style={{ color: 'white' }}>Description</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        value={description}
                        name="description"
                        type="text"
                    />
                </Form.Group>
                <Form.Group as={Col} style={{marginLeft: '10px'}}>
                    <Form.Label style={{ color: 'white' }}>Location</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        value={location}
                        name="location"
                        type="text"
                    />
                </Form.Group>
                <Form.Group as={Col} xs="auto" className="ml-2">
                    <Form.Check style={{ color: 'white' }}
                        onChange={handleChange}
                        value="Full Time"
                        name="type"
                        id="full-time"
                        label="Only Full Time"
                        type="checkbox"
                        className="group" />
                </Form.Group>
                <Button style={{ marginLeft: '10px', marginTop: '38px' }} variant="primary" type="submit">
                    Find Jobs
                </Button>
            </Form.Row>
            <Form.Row>
                <Form.Group as={Col} xs="auto" className="ml-2">
                    <Form.Check style={{ color: 'white' }}
                        onChange={onClearSearch}
                        value={true}
                        name="Clear Search"
                        id="clear-search"
                        label="Clear Search"
                        type="checkbox"
                    />
                </Form.Group>
            </Form.Row>
        </Form>
        )
}