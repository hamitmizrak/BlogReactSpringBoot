import logo from './component/logo.svg';
import './Employee.css';
import ListEmployeeComponent from './component/ListEmployeeComponent';

function EmployeeComponentFunction() {
    return (
        <div className="container">
            <ListEmployeeComponent />
        </div>
    );
}

export default EmployeeComponentFunction;
