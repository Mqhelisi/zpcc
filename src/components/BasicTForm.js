import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { OneLineCont } from '../stylez';
import Listers from './Listers';
import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';


function handleClick() {
    return alert('words i bever said')
}
function handleSum() {
    
}


function TenderForm() {
const [myArray, updateMyArray] = useState({});
const [myArray2, updateMyArray2] = useState({});


  return (
    <OneLineCont>


    <Form>
      <h1> Add Tender to System</h1>
      <Form.Group className="mb-2" controlId="formProjName">
        
      <Form.Select aria-label="Default select example" onChange={() => handleSum()}>
      <option>Select a Project</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
      </Form.Group>

      <Form.Group className="mb-2" controlId="formBusinessCase">
        <Form.Label>Business Case</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Outline Business Case for embarking on project" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBgnd">
        <Form.Label>Background</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Project Background" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formJusti">
        <Form.Label>Justification</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Justification For Project" />
      </Form.Group>
      {/* <Form.Group className="mb-2" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Form.Group className="mb-2" controlId="formJusti">
        <Form.Label style={{fontWeight: 'bold'}}>Goals</Form.Label>
        <Listers arrayy = {myArray} updater={updateMyArray}/>
      </Form.Group>
      <Form.Group className="mb-2" controlId="formJusti">
        <Form.Label style={{fontWeight: 'bold'}}>Project Team</Form.Label>
        <Listers arrayy = {myArray2} updater={updateMyArray2}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={ () => handleClick()}>
        Submit
      </Button>

    </Form>
    </OneLineCont>

  );
}

export default TenderForm;