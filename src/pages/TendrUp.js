import React, {useState} from 'react'
import { StyledButton } from '../stylez'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignTable from '../components/SignTable';
import DynamicSelect from '../components/DynamicSelect';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

import {Modal, Button} from "react-bootstrap";

function DoSomethin(a) {
     return alert(a)
  }


function TendrUp() {
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
      const dataSig = {
        products: [
          {
            id: '1',
            signatory: 'J Mapepa',
            position: "Project Eng",
            signed: "No",
          },
          {
            id: '2',
            signatory: 'K Chirashe',
            position: "Financial Director",
            signed: "No",
          },
          {
            id: '3',
            signatory: 'K Masewa',
            position: "Managing Director",
            signed: "No",
          },
        ],
      }; 

      const [modalInfo, setModalInfo] = useState([]);
      const [showModal, setShowModal] = useState(false);
    const [vals,setVals] = useState('');
    const  [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


      const rowEvents ={
        onClick: (e,row)=>  {
           console.log(row)
           setModalInfo(row);
           toggleTrueFalse();
        }
    }
    const toggleTrueFalse = () => {
        setShowModal(handleShow);
    }
    const ModalContent = () => {
        // setVals(modalInfo.comment)
        const handleSelect=(e)=>{
            setVals(e);
            console.log(vals);
    
          }
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Tender named XXXXXXXXXXXXX</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Update Status of Signatory</h5>
                    <DropdownButton
            as={ButtonGroup}
            key='primary'
            id={`dropdown-variants-primary`}
            variant='primary'
            title='Status List'
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="To Buy">To Buy</Dropdown.Item>
            <Dropdown.Item eventKey="Bought, En Route">Bought, En Route</Dropdown.Item>
            <Dropdown.Item eventKey="Awaiting Delivery" active>
              Awaiting Delivery
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="Delivered">Delivered</Dropdown.Item>
          </DropdownButton>
          <p>Set Status to: {vals}</p>
                    {/* <Button onClick={() => UpdateDeliv(vals, modalInfo.id)}>Update Delivery</Button>
                    <Button variant='danger' onClick={() => UpdateDeliv('canceled', modalInfo.id)}>Cancel Order</Button> */}
                    {/* <h4>Invoice: {modalInfo.Invoice}</h4>
                    <h4>Salesperson: {modalInfo.Salesperson}</h4>
                    <h4>Tax: {modalInfo.Tax}</h4>
                    <h4>Pay Status: {modalInfo.Status}</h4>
                    <h4>Date: {modalInfo.Date}</h4>
    
                    <h2>Amount: {modalInfo.Amount}</h2> */}
    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
    let tendercode = 1
  return (
    <>
    <Row>
    <h1>something happens</h1>
    </Row>
    <Row>
    <Col>C1</Col>
    <Col>
    <StyledButton bg = "aquamarine" type="button" onClick={(e,row)=>  {
           setModalInfo(tendercode);
           toggleTrueFalse();
        }}>Update Initiation Details</StyledButton>
    </Col>
    <Col>C3</Col>
    </Row>

    <Row>
        R2
    </Row>
    <Row>
        <Col> Update Signed Parties</Col>
        <Col><SignTable dataa={dataSig} rowEvents={rowEvents}/></Col>
        <Col>C3</Col>
    </Row>

    <Row>. R3</Row>
    <Row>
        <Col>Set Float Date</Col>
        <Col>
        <Form.Control type="date" onSelect={(e) => console.log(e.target.value)}></Form.Control>
        
        </Col>
    </Row>

    <Row> R4</Row>
    <Row>
        <Col>Set Close Date</Col>
        <Col>
        <Form.Control type="date" onSelect={(e) => console.log(e.target.value)}></Form.Control>
        </Col>
    </Row>

    <Row> R5</Row>
    <Row>
        <Col>Set Bidders</Col>
        <Col>dynamic listview adding widget like kudala</Col>
    </Row>

    <Row> R6</Row>
    <Row>
        <Col>Award Bidder</Col>
        <Col><DynamicSelect dataa={data}/></Col>
    </Row>

    <Row> R6</Row>
    <Row>
        <Col>
    <StyledButton bg = "purple" type="button" onClick={()=> DoSomethin('Receive Deliverable')}>Receive Deliverable</StyledButton>
        
         </Col>
        <Col>
        
        </Col>
        <Col>
    <StyledButton bg = "white" type="button" onClick={()=> DoSomethin('Closed Tender')}>Close Tender</StyledButton>
        
         </Col>

    </Row>
    {show ? <ModalContent/> : null}

    </>
  )
}

export default TendrUp