import React, { useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const[users,setUsers]=useState({});
    const getUser=(e)=>{
        setUsers({...users,[e.target.name]:e.target.value});
    }
    
    let history=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
       axios.post(`https://restapinodejs.onrender.com/api/login`,users)
       .then((response)=>{
        sessionStorage.setItem("token",response?.data?.token);
        sessionStorage.setItem("name",response?.data?.user?.name);
        toast("Login is Successful!")
        history("/");
       })
       .catch((error)=>{
        console.log(error);
       })
    }
  return (
    <>
     <div className='container'>
        <div className='row mt-5'>
            <div className='col-4'></div>
            <div className='col-4'>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className='card shadow p-3'>
                        <div className='card-header'>
                            <h4 className='text-center'>User Login Form</h4>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-12'>
                                    
                                </div>
                               
                               
                                <div className='col-12'>
                                        <label className='form-label'>Email <span className='err-msg'>*</span></label>
                                        <input  type="email" name="email" className='form-control' onChange={getUser} required/>
                                </div>
                                <div className='col-12'>
                                        <label className='form-label'>Password <span className='err-msg'>*</span></label>
                                        <input  type="password" name="password" className='form-control' onChange={getUser} required/>
                                </div>
                                
                                
                            </div>
                        </div>
                        <div className='card-footer'>
                        <button className='btn btn-info btn-sm'>Login</button>
                        <Link to="/register"><button className='btn btn-secondary btn-sm ' style={{marginLeft:"10px"}}>Register</button></Link>
                        </div>
                    </div>
                </form>
            </div>
            <div className='col-4'></div>
        </div>
    </div>
    
    </>
  )
}

export default Login