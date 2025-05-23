import axios from "axios";

// const ws = new WebSocket("wss://" + location.host + "/")

const REST_API_BASE_URL = 'http://localhost:8080/api/employees';

export const listEmployees = () => axios.get(REST_API_BASE_URL);

export const createEmployee = (employee) => axios.post(REST_API_BASE_URL,employee);
export const getEmployee = (employeeId) => axios.get(REST_API_BASE_URL + '/' + employeeId);
export const updateEmployee = (employee) => axios.put(REST_API_BASE_URL + '/' + employee.id, employee)

export const deleteEmployeeWithId = (employeeId) => axios.delete(REST_API_BASE_URL + '/' + employeeId)