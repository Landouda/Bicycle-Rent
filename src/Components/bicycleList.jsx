import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function BicycleList(Bicycle){
    return (
        <Table style={{
            border: "1px gray",

        }}>
            <tr>
                <th>Bicycle ID</th>
                <th>Availability</th>
                <th>Make Request</th>
            </tr>
            {Bicycle.map((elt) => (
                <tr>
                    <td>id={elt.id}</td>
                    <td>availability={elt.available}</td>
                    <td>{elt.available==true ? 
                        <Button variant="primary" style = {{backgroundColor:"blue", color:"white"}}>Make Request</Button> : 
                        <Button variant="primary" disabled></Button>}
                    </td>
                </tr>)
            )}
        </Table>
    );
}

export default BicycleList;