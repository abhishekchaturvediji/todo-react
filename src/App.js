import logo from "./logo.svg";
import {useState} from 'react'
import axios from 'axios';

import "./App.css";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

let baseUrl = 'http://localhost:4040/'


function App() {

  const [task,setTask] = useState({
    taskName: "",
    taskType : ""
  })

  const handleOnchange = (data) =>{
    setTask({
      ...task,
      [data.target.name] : data.target.value
    })
   
    console.log("task : ", task);
  }


  const handleSubmit = async() =>{
    console.log(" handleSubmit clicked :");
    let data = await axios.post(`${baseUrl}create-task`,{...task})

    setTask({
      taskName: "",
      taskType : ""
    })

    console.log("data : ", data);

  }

  return (
    <div className="App h-100">
      <div  className="App-header">
        <h2 className="mb-5">Create Tasks</h2>
        <Form>
          <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlInput1">
            <Form.Label>Task Name</Form.Label>
            <Form.Control name="taskName" type="email" placeholder="Study"  onChange={handleOnchange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Task Status</Form.Label>
            <Form.Select name="taskType" aria-label="Default select example"  onChange={handleOnchange}>
              <option>Select Status</option>
              <option value="1">Pending</option>
              <option value="2">Completed</option>
            </Form.Select>
          </Form.Group>

          <Button onClick={handleSubmit} variant="success">Create Task</Button>

        </Form>
      </div>
    </div>
  );
}

export default App;
