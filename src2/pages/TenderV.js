import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Stylist.css'
import ProgTable from '../components/ProgTable';
import DynamicSelect from '../components/DynamicSelect'

function TenderV() {

    const data = {
        products: [
          {
            id: '1',
            text: 'Pimp Manufacturing',
            price: 9,
            src: "./assets/pizza.png",
          },
          {
            id: '2',
            text: 'Gang Designs',
            price: 6,
            src: './assets/braai.jfif',
          },
          {
            id: '3',
            text: 'Peng Tings',
            price: 6,
            src: './assets/street5.jfif',
          },
        ],
      }; 

  return (
    
    
    <Container fluid>
        <Row>
        <Col md={{ span: 2, offset: 2 }}> <h2> SELECT PROJECT </h2> </Col>
            <Col><DynamicSelect dataa = {data}/>
            </Col>
            <Col md={{ span: 1, offset: 2 }}></Col>
        </Row>
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
  

  )
}

export default TenderV