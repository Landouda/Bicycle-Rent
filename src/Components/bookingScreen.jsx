import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Container , Dropdown} from 'react-bootstrap';  
import "bootstrap/dist/css/bootstrap.min.css";

function BookingScreen() {
  const days_of_week = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "50vh",
      }}
    >
      {/* <Form style={{ 
                width: "80%",
                border: "1rem"
            }}>
                <Form.Label>Select Bicycle:</Form.Label>
                <Form.Control type="select" size="lg">
                    <option>001</option>
                    <option>002</option>
                    <option>003</option>
                    <option>004</option>
                </Form.Control>
            </Form>
            <br></br>
            <Form> 
                <Form.Label>From:</Form.Label>
                <Form.Control type="select" size="lg">
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                </Form.Control>
            </Form>
            <Form> 
                <Form.Label>To:</Form.Label>
                <Form.Control type="select" size="lg">
                    <option>Monday</option>
                    <option>Tuesday</option>
                    <option>Wednesday</option>
                    <option>Thursday</option>
                    <option>Friday</option>
                    <option>Saturday</option>
                    <option>Sunday</option>
                </Form.Control>
            </Form>
            <Button type="primary">Submit Request</Button> */}
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Select Bicycle
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Bicycle 001</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Bicycle 002</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Bicycle 003</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Start Date
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Monday</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Tuesday</Dropdown.Item>
            <Dropdown.Item href="#/action-3">wednesday</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Thursday</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Friday</Dropdown.Item>
            <Dropdown.Item href="#/action-6">Saturday</Dropdown.Item>
            <Dropdown.Item href="#/action-7">Sunday</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            End Date
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Monday</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Tuesday</Dropdown.Item>
            <Dropdown.Item href="#/action-3">wednesday</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Thursday</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Friday</Dropdown.Item>
            <Dropdown.Item href="#/action-6">Saturday</Dropdown.Item>
            <Dropdown.Item href="#/action-7">Sunday</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
    </div>
  );
}

export default BookingScreen;
