import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Stylist.css'
import ProgTable from '../components/ProgTable';
import DynamicSelect from '../components/DynamicSelect'


  // USEEFFECT FOR LOADING DATA FROM AN API AT INITIATION OF THE PAGE . TO GET DATA POSSIBLY FOR INITIAL DROPDOWNS
 



function TenderV() {
  const [count, setCount] = useState("none");
  const [projs, setProjs] = useState([]);
  console.log('given value is', count)
  useEffect(()=>{
    fetch("http://localhost:5000/quipro").then(
        res => res.json()
    ).then(
        data=> {
            setProjs(data)
            console.log(data)
            
        }
    )
},[])

  function responding(itm){
    setCount(itm)
    console.log("wordsin ",count)
  }
  
    const data2 = {'id':'0','name':'please select a project'}
  
    const data = {
        products: [
          {
            id: '1',
            text: 'Pimpasd ',
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


      if (Object.keys(projs).length === 0) {
        return(
<Container fluid>
        <Row>
        <Col md={{ span: 2, offset: 2 }}> <h2> SELECT PROJECT </h2> </Col>
            <Col><DynamicSelect dataa = {data2} addval={responding}/>
            </Col>
            <Col md={{ span: 1, offset: 2 }}></Col>
        </Row>
        </Container>
        )
        
      }else if (count === 'none') {
        return(
          <Container fluid>
          <Row>
          <Col md={{ span: 2, offset: 2 }}> <h2> SELECT PROJECT </h2> </Col>
              <Col><DynamicSelect dataa = {projs} addval={responding}/>
              </Col>
              <Col md={{ span: 1, offset: 2 }}></Col>
          </Row>
          </Container>

        )

      }

        return (
    
    
          <Container fluid>
              <Row>
              <Col md={{ span: 2, offset: 2 }}> <h2> SELECT PROJECT </h2> </Col>
                  <Col><DynamicSelect dataa = {projs} addval={responding}/>
                  </Col>
                  <Col md={{ span: 1, offset: 2 }}></Col>
              </Row>
              
            <Row>
              <Col className='pimpin'>
                <Row> <h1>Project Name
                  </h1> </Row>
                <Row> {count} </Row>
      
                </Col>
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