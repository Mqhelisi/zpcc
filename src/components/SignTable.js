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

  );
}

export default SignTable;