import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';


function DynamicSelect(props) { 

  function onSel(e) {
    props.addval(e.target.value)
    console.log(e.target.value)
  }
    console.log(props.dataa.id)
    if (props.dataa.id == 0){
      return (
        <Form.Select aria-label="Pick Awarded " onChange={onSel}>
        <option key={0} value='none'
            onClick={()=> console.log('none')}>
            Open this select menu</option>
            </Form.Select>
      )
    }
  const { products } = props.dataa;


  return (
    <Form.Select aria-label="Pick Awarded " onChange={onSel}>
      <option key={0} value='none'
          onClick={()=> console.log('none')}>
          Open this select menu</option>

      {products.map((product, index) => {
                    return (
        <option key={product.id} value={product.text} 
          onClick={()=> console.log(product.text)}> 
                {product.text} 
        </option>
                    )
                })}
    </Form.Select>
  )
}

export default DynamicSelect