import React from 'react'
import { Form, Col } from 'react-bootstrap'
import '../App.css';

export default function SearchPage({ params, onParamChange }) {
    
    return (
        <Form className="mb-4">
            <Form.Row style={{ display: 'flex' }}>
                <Form.Group as={Col}>
                    <Form.Label style={{ color: 'white' }}>Description</Form.Label>
                    <Form.Control
                        onChange={onParamChange}
                        value={params.description}
                        name="description"
                        type="text"
                    />
                </Form.Group>
                <Form.Group as={Col} style={{marginLeft: '10px'}}>
                    <Form.Label style={{ color: 'white' }}>Location</Form.Label>
                    <Form.Control
                        onChange={onParamChange}
                        value={params.location}
                        name="location"
                        type="text"
                    />
                </Form.Group>
                <Form.Group as={Col} xs="auto" className="ml-2">
                    <Form.Check style={{ color: 'white' }}
                        onChange={onParamChange}
                        value="Full Time"
                        name="type"
                        id="full-time"
                        label="Only Full Time"
                        type="checkbox"
                        className="group" />
                </Form.Group>
            </Form.Row>
        </Form>
        )
}