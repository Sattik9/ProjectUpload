import React from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Read from '../Components/Read'
import Create from '../Components/Create'
import Login from '../Components/Login'
import Register from '../Components/Register'
import Protected from './Protected'
import Header from '../Components/Header'
import Edit from '../Components/Edit'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Routing = () => {
  return (
    <>
    <ToastContainer/>
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Protected  Comps={Read}/>}/>
            <Route path="/create" element={<Protected Comps={Create}/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default Routing