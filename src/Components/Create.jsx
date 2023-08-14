import React, { useState } from 'react'
import { getCreate, getRead } from '../Slice/CrudSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Create = () => {
  const[users,setUsers]=useState({});
    const getUser=(e)=>{
        setUsers({...users,[e.target.name]:e.target.value});
    }
    const dispatch=useDispatch();
    let history=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(getCreate(users));
        toast("Creation is Successful!")
        history("/")

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
                            <h4 className='text-center'>User Creation Form</h4>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='form-group'>
                                        <label className='form-label'>Name <span className='err-msg'>*</span></label>
                                        <input type="text" name="name" className='form-control' onChange={getUser}  pattern=".{3,}" title="three or more characters" required/>
                                    </div>
                                </div>
                               
                               
                                <div className='col-12'>
                                        <label className='form-label'>Email <span className='err-msg'>*</span></label>
                                        <input  type="email" name="email" className='form-control' onChange={getUser} required/>
                                </div>
                                <div className='col-12'>
                                        <label className='form-label'>Phone <span className='err-msg'>*</span></label>
                                        <input type="tel" id="phone" name="phone" className='form-control'  onChange={getUser}  pattern=".{8,}" title="Eight or more characters" required/>

                                </div>
                                
                            </div>
                        </div>
                        <div className='card-footer'>
                        <button className='btn btn-info btn-sm'>Create</button>
                       
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

export default Create