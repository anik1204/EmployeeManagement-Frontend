import { useState } from 'react';
//import EditEmployee from './editEmployee';

export default function Employees() {
    const [empData, setEmpData] = useState([]);
    const [aEmpData, setAEmpData] = useState([]);
    const getEmployees = async() => {
        const response = await fetch('https://101295960-comp-3123-assignment1-o3o554exa-anik1204.vercel.app/api/employees', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            setEmpData(data);
        }).catch(error => console.error('Error:', error));
    };

    const getEmp = async (e) => {
        const response = await fetch("https://101295960-comp-3123-assignment1-o3o554exa-anik1204.vercel.app/api/employees/"+e, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            setAEmpData(data);
        }).catch(error => console.error('Error:', error));
    }

const editEmp = (e) => {
    console.log(e);
   // return <EditEmployee emObj = {e}></EditEmployee>
}

    getEmployees();
return (
    <>
        <h1>Employee List</h1>
    <body>
    
    <table align='center'>
    <button className="button" id="addemp" type="submit" >Add Employee</button>
    <tbody id="emptbl">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Salary</th>
            <th>Actions</th>
        </tr>
    {
         empData.map( (emp,key) =>
         <tr key={key}>
             <td>{emp.first_name}</td>
              <td>{emp.last_name}</td>
             <td>{emp.email}</td>
              <td>{emp.gender}</td>
              <td>{emp.salary}</td>
             <td><button onClick={() => editEmp(emp)} className="button" type="submit" >Edit Employee</button></td>
         </tr>
         )
       }
       
    </tbody>
    
    </table>
    </body>
    </>

);
}

