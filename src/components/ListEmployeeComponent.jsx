import React, {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.log(error);
        })
    },[])

    const dummyData = [
        {
            "id": 1,
            "firstName": "Telmen",
            "lastName": "Burgedbaatar",
            "email": "teke@gmail.com"
        },
        {
            "id": 2,
            "firstName": "Telmen02",
            "lastName": "Burgedbaatar02",
            "email": "teke02@gmail.com"
        },
        {
            "id": 3,
            "firstName": "Telmen03",
            "lastName": "Burgedbaatar03",
            "email": "teke03@gmail.com"
        },
    ]

  return (
    <div className='container'>
        <h2>List of Employees</h2>
        <table className='table table-striped'>
            <thead className='table-dark'>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                        </tr>
                    )
                }
                <tr>

                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent