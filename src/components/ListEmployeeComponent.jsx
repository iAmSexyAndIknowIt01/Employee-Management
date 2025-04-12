import React, {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
import { deleteEmployeeWithId } from '../services/EmployeeService';

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    // const {id} = useParams();

    const navigator = useNavigate();
    useEffect(() => {
        getAllEmployees();
    },[])
    
    function getAllEmployees(){
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function deleteEmployee(id){
        deleteEmployeeWithId(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.log(error);
        })
    }

  return (
    <div className='container'>
        <h2>List of Employees</h2>
        <button type="button" class="btn btn-primary mb-2" onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-light table-hover'>
            <thead className='table-dark'>
                <tr>
                    <th>Employee ID</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
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
                            <td>
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger ms-1' onClick={() => deleteEmployee(employee.id)}>Delete</button>
                            </td>
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