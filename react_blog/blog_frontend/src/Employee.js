import "./Employee.css";
import ListEmployeeComponent from "./component/ListEmployeeComponent";//list
import HeaderComponent from "./component/HeaderComponent";//header
import FooterComponent from "./component/FooterComponent";//footer

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //path
import CreateEmployeeComponent from "./component/CreateEmployeeComponent"; //ekleme

function EmployeeComponentFunction() {
  return (
    <div>
      <Router>
    
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListEmployeeComponent}></Route>
              <Route path="/anasayfa" component={ListEmployeeComponent}></Route>
              <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
              <ListEmployeeComponent />
            </Switch>
          </div>
          <FooterComponent />
        
      </Router>
    </div>
  );
}

export default EmployeeComponentFunction;
