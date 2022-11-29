import logo from './logo.svg';
import Login from './login';
import Employees from './employees';
//import EditEmployee from './editEmployee';
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
                {/* The next line is very important for the Navigate component to work */}
                <Route
                    path="/employees"
                    element={ <Employees /> }
                />
               
            </Routes>
        </BrowserRouter>
  );
}

export default App;
