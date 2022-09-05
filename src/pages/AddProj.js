import React from 'react'
import Listers from '../components/Listers'
import { useState } from 'react'
import ListThings from '../components/ListThings';
import Button from 'react-bootstrap/esm/Button';
import BasicExample from '../components/BasicForm';

async function AddProject(values) {
  fetch('https://localhost:5000/projpost',{method: 'POST',
  body: JSON.stringify({
    name:values.name,
    bus_case:values.bus_case,
    background:values.background,
    justification:values.justification,
    proj_goals:values.proj_goals,
    proj_team:values.proj_team,
    
  }),
  headers:{
    "Content-type":"application/json; charset=UTF-8"
  }}).then(response => response.json()).then(
    message => {console.log(message)}
  )
}


function AddProj() {


  return (
    <>
    <BasicExample/>

    </>
    
  )
}

export default AddProj