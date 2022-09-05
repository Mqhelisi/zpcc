import React, {useEffect, useState} from 'react'
import BasicExample from '../components/BasicForm';
import ProtoTable from '../components/ProtoTable';
import { StyledContainer2 } from '../stylez';
import { StyledButton } from '../stylez';
import './AppRun.css'
function DoSomethin(a) {
  console.log('asdlnasndkasdklasmdlksamdlksamdklsamdklsam')
  return alert(a)
}






function Home() {

  const [proj, setProj] = useState([]);
  const stats = 2;
  // USEEFFECT FOR LOADING DATA FROM AN API AT INITIATION OF THE PAGE . TO GET DATA POSSIBLY FOR INITIAL DROPDOWNS
  useEffect(()=>{
    fetch("http://localhost:5000/onepro/" + stats).then(
        res => res.json()
    ).then(
        data=> {
          setProj(data)
            console.log(data)
        }
    )
},[])


    return (

      <>
    
      <StyledContainer2 bg="#9a363e">
        <h1>section Project {proj.name} </h1>
        
      {/* <StyledButton bg = "black" type="button" onClick={()=> DoSomethin('somebajdksnjkndkjaddasnsadnksan')}>Login</StyledButton> */}

      </StyledContainer2 >
      
      <StyledContainer2 bg="green">
        <h1> 2 {proj.bus_case}</h1>
      </StyledContainer2>
      <StyledContainer2 bg="blue">

        {/* <ProtoTable/> */}
        <h1>3 {proj.background}</h1>
      </StyledContainer2>
      <StyledContainer2>
        <h1> 4 {proj.justification}</h1>
      </StyledContainer2>
      <StyledContainer2 bg="purple">
        <h4>proj goals</h4>
        {/* <h1> section 5 {proj.proj_goals}</h1> */}
      </StyledContainer2>
      <StyledContainer2 bg='gray'>
        <h1>Project Team</h1>
      </StyledContainer2>
      <StyledContainer2 bg='brown'>
        <h1> Project Documentation</h1>
      </StyledContainer2>
      </>
      
    );
  }

export default Home