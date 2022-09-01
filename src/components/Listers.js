import React from 'react'
import Form from 'react-bootstrap/Form';
import { useState } from "react"; // import useState
import ListThings from './ListThings';
import Button from 'react-bootstrap/esm/Button';
import './Designer.css'
//create object
// var myObj = {
//     "artist" : artist,    //your artist variable
//     "song_name" : title   //your title variable
// };
// //push the object to your array
// favorites.push( myObj );

function Listers(props) {
  const [keys, setKeys] = useState(""); // useState hook
  const [values, setValues] = useState(""); // useState hook
      // handle change event
  let updatedValue = {};
  let button;

  const handleChange = (e) => {
    e.preventDefault(); // prevent the default action
    

    updatedValue = {[keys]: values}
    // console.log(updatedValue)
    
    props.updater({
      ...props.arrayy,
      ...updatedValue
    });
    // console.log(keys.length === 0)
    if(props.arrayy.hasOwnProperty([keys])){
      return alert('key exists already')
    }else if (keys.length === 0 ) {
      return alert('key is empty')    }
     // set name to e.target.value (event)
  };
    
  if (Object.keys(props.arrayy).length === 0) {
  } else {
    button = <Button variant='danger'>Add this {Object.keys(props.arrayy).length} item list</Button>;
  }


  return (
    
    <Form className='bordered'>
        <Form.Group className='mb-3'>
            <Form.Label>Key</Form.Label>
            <Form.Control type='text' placeholder='enter data' onChange={(e) => setKeys(e.target.value)}/>



        </Form.Group>

        <Form.Group className='mb-3'>
            <Form.Label>Value</Form.Label>
            <Form.Control type = 'text' placeholder='enter value' onChange={(e) => setValues(e.target.value)}/>
        </Form.Group>
        <Button variant='warning' type='submit' onClick={handleChange}>
            add to list
        </Button>
        <ListThings numbers={props.arrayy}/>
        {button}
    </Form>

  )
}

export default Listers