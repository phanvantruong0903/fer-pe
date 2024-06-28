import { BrowserRouter as Router, Route, Routes }
  from "react-router-dom"
import React from 'react';
import Navbarheader from './components/navbar';
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import "../src/App.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
      <Router>
      <Navbarheader />
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Routes>

      </Router>
  )
}

export default App
