import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Stylist.css'
import ProgTable from '../components/ProgTable';

function TenderV() {
  return (
    
    <>
    <Container fluid>
      <Row>
        <Col className='pimpin'><h1>Project Name
            </h1></Col>
        <Col xs lg="2"></Col>
        <Col className='pimpin2'>
        <Row>start at <h3>X</h3></Row>
        <Row>end at <h3>X</h3></Row>
        <Row>stages at <h3>X</h3></Row>
        
        </Col>

      </Row>
    <Row>
        <Col className='pimpin3'>Pimpin</Col>
    </Row>
      <Row>
        <Col>
        <ProgTable/>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    </>


  )
}

export default TenderV