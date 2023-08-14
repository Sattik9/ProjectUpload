import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edit = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const {id}=useParams();
    let history=useNavigate();
    useEffect(()=>{
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
        setPhone(localStorage.getItem("phone"));
    },[])
    const handleSubmit=(e)=>{
        e.preventDefault();
       axios.put(`https://649837819543ce0f49e1c205.mockapi.io/pracapi/${id}`,{name,email,phone});
       history("/");
       toast("Updated Successfully!");
      
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
                            <h4 className='text-center'>User Edit Form</h4>
                        </div>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='form-group'>
                                        <label className='form-label'>Name <span className='err-msg'>*</span></label>
                                        <input type="text" className='form-control' value={name} onChange={(e)=>setName(e.target.value)} pattern=".{3,}" title="three or more characters" required/>
                                    </div>
                                </div>
                               
                               
                                <div className='col-12'>
                                        <label className='form-label'>Email <span className='err-msg'>*</span></label>
                                        <input  type="email"  className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                                </div>
                                <div className='col-12'>
                                        <label className='form-label'>Phone <span className='err-msg'>*</span></label>
                                        <input type="tel" id="phone"  className='form-control' value={phone}  onChange={(e)=>setPhone(e.target.value)} pattern="[0-9]{10}" title="Ten characters" required/>

                                </div>
                                
                            </div>
                        </div>
                        <div className='card-footer'>
                        <button className='btn btn-info btn-sm'>Edit</button>
                       
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

export default Edit