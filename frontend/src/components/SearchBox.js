import React, { useState } from 'react'
import { Button, Col, Form, Row, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            navigate(`/?keyword=${keyword}&page=1`)
        } else {
            navigate(navigate(navigate.location.pathname))
        }
    }
    return (
        <Form onSubmit={submitHandler} inline>
        <Form.Group as={Row} className="mb-3">
        <Col md={8}>
            <Form.Control
                type='text'
                name='q'
                onChange={(e) => setKeyword(e.target.value)}
                className='mr-sm-2 ml-sm-5'
            ></Form.Control></Col>
            
            <Col md={4}>
            <Button
                type='submit'
                variant='outline-success'
                className='p-2'
                // className='mt-2'
                // className="mb-2"
            >
                Submit
            </Button></Col>
            </Form.Group>
        </Form>    

    )
}

export default SearchBox