import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Employeelist from './components/Employeelist';
import Employeeinput from './components/Employeeinput';
import Employeeupdate from './components/Employeeupdate';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Employeelist} />
          <Route exact path='/add' component={Employeeinput} />
          <Route exact path='/update/:id' component={Employeeupdate} />
        </Switch>
      </div >
    </Router>
  );
}

export default App;
