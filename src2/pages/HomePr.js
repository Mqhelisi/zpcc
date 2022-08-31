import React from 'react'
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
    return (

      <>
    
      <StyledContainer2 bg="#9a363e">
        <h1>section Project Name</h1>
        
      {/* <StyledButton bg = "black" type="button" onClick={()=> DoSomethin('somebajdksnjkndkjaddasnsadnksan')}>Login</StyledButton> */}

      </StyledContainer2 >
      
      <StyledContainer2 bg="green">
        <h1> Section 2 Business Case</h1>
      </StyledContainer2>
      <StyledContainer2 bg="blue">

        <ProtoTable/>
        <h1>Section 3 Background</h1>
      </StyledContainer2>
      <StyledContainer2>
        <h1> Section 4 Justification</h1>
      </StyledContainer2>
      <StyledContainer2 bg="purple">
        <h1> section 5 goals</h1>
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