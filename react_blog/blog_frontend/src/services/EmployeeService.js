import axios from "axios";


const EMPLOYEE_API_BASE_URL="/api/v1/employees/list";

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  createEmployes(employees) {
    return axios.post(EMPLOYEE_API_BASE_URL, employees);
  }
}

export default new EmployeeService()