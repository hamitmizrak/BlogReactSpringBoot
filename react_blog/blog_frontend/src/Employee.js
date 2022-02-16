import "./Employee.css";
import ListEmployeeComponent from "./component/ListEmployeeComponent";
import HeaderComponent from "./component/HeaderComponent";
import FooterComponent from "./component/FooterComponent";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function EmployeeComponentFunction() {
  return (
    <div>
      <Router>
    
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" component={ListEmployeeComponent}></Route>
              <Route path="/anasayfa" component={ListEmployeeComponent}></Route>
              <ListEmployeeComponent />
            </Switch>
          </div>
          <FooterComponent />
        
      </Router>
    </div>
  );
}

export default EmployeeComponentFunction;
