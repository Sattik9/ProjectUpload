import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getRegister } from '../Slice/AuthSlice';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const[users,setUsers]=useState({});
    const getUser=(e)=>{
        setUsers({...users,[e.target.name]:e.target.value});
    }
    const dispatch=useDispatch();
    let history=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(getRegister(users));
        toast("Registration is successful!")
        history("/login")

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
                            <h4 className='text-center'>User Registration Form</h4>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='form-group'>
                                        <label className='form-label'>Name <span className='err-msg'>*</span></label>
                                        <input type="text" name="name" className='form-control' onChange={getUser} pattern=".{3,}" title="three or more characters" required/>
                                    </div>
                                </div>
                               
                               
                                <div className='col-12'>
                                        <label className='form-label'>Email <span className='err-msg'>*</span></label>
                                        <input  type="email" name="email" className='form-control' onChange={getUser} required/>
                                </div>
                                <div className='col-12'>
                                        <label className='form-label'>Password <span className='err-msg'>*</span></label>
                                        <input  type="password" name="password" className='form-control' onChange={getUser}  pattern=".{8,}" title="Eight or more characters" required/>
                                </div>
                                <div className='col-12'>
                                        <label className='form-label'>Mobile<span className='err-msg'>*</span></label>
                                        <input  type="tel" name="mobile" className='form-control' onChange={getUser}  pattern="[0-9]{10}" title="Ten characters" required/>
                                </div>
                                
                            </div>
                        </div>
                        <div className='card-footer'>
                        <button className='btn btn-info btn-sm'>Register</button>
                        <Link to="/login"><button className='btn btn-secondary btn-sm 'style={{marginLeft:"10px"}}>Back</button></Link>
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

export default Register