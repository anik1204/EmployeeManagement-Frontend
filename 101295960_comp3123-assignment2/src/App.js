import logo from './logo.svg';
import Login from './login';
import Employees from './employees';
import EditEmployee from './editEmployee';
import AddEmployee from './addEmployee';
import Signup from './signup';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
  
import './App.css';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={ <Login /> }
                />
                <Route
                    path="/employees"
                    element={ <Employees /> }
                />
               <Route
                    path="/employees/edit"
                    element={ <EditEmployee /> }
                />
               <Route
                    path="/employees/add"
                    element={ <AddEmployee /> }
                />
               <Route
                    path="/signup"
                    element={ <Signup /> }
                />
               
            </Routes>
        </BrowserRouter>
  );
}

export default App;
