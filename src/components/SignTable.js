// import Table from 'react-bootstrap/Table';
import BootstrapTable from "react-bootstrap-table-next"
    
function SignTable(props) {

  const { products } = props.dataa;
  const columns =[
    {dataField: "signatory", sort: true, text: "Delivery"},
    {dataField: "position", sort: true, text: "Address"},
    {dataField: "signed", sort: true, text: "Order ID"},
    

]
  return (

    <BootstrapTable class="table table-dark"
        keyField="name"
        data={products}
        columns={columns}
        // pagination={paginationFactory()}
        // rowEvents={props.rowEvents}
        />
    // <Table striped bordered hover variant="dark">
    //   <thead>
    //     <tr>
    //       <th>Signatory</th>
    //       <th>Position</th>
    //       <th>Signed?</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //   {products.map((product, index) => {
    //                 return (
    //                     <tr key = {product.id}>
    //                     <td>{product.signatory}</td>
    //                     <td>{product.position}</td>
    //                     <td>{product.signed}</td>
              
    //                   </tr>
    //                 )
    //             })}
      
    //   </tbody>
    // </Table>
  );
}

export default SignTable;