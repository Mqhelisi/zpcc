import React from 'react'
import Form from 'react-bootstrap/Form';

function DynamicSelect(props) { 


  const { products } = props.dataa;

  return (
    <Form.Select aria-label="Pick Awarded ">
      <option>Open this select menu</option>
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