import { BrowserRouter as Router, Route, Routes }
  from "react-router-dom"
import React from 'react';
import Navbarheader from './components/navbar';
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import "../src/App.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DetailStudens from "./components/DetailStudens";
import UpdateStudents from "./components/updateStudent";
import Delete from "./components/deleteStudent";


function App() {

  return (
      <Router>
      <Navbarheader />
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          {/* <Route path="/contact" component={Contact} /> */}
          <Route path="/detail/:id" element={<DetailStudens/>}/>
          <Route path="/update/:id" element={<UpdateStudents/>} />
          <Route path="/delete/:id" element={<Delete/>} />
        </Routes>

      </Router>
  )
}

export default App
