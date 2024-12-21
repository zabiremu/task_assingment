import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import { Col } from 'react-bootstrap'

const Layouts = ({content}) => {
    return (
        <Col sm={4} md={3} lg={2} className="p-0">
            <Sidebar /> 
        </Col>
    )
}

export default Layouts