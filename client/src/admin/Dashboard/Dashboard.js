import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import { Col, Row } from 'react-bootstrap';
import Layouts from '../../layouts/Layouts';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const navigate = useNavigate();
  if (localStorage.getItem('token') || localStorage.getItem('email')) {
    return (
      <>
        <Row>
          <Layouts />
          <Col sm={8} md={8} lg={9} >
            
          </Col>
        </Row>
      </>
    )
  } else {
   navigate('/');
  }
}
export default Dashboard;