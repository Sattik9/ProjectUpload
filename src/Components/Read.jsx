import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRead } from '../Slice/CrudSlice'
import { Link} from 'react-router-dom'
import axios from 'axios'
import './Table.css'
import './Buttons.css'
import { toast } from 'react-toastify'
const Read = () => {
  const {User}=useSelector((state)=>{
    return state.Crudss
  })
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(getRead());
  },[])
  
const handleDelete=(ID)=>{
  axios.delete(`https://649837819543ce0f49e1c205.mockapi.io/pracapi/${ID}`)
  .then(()=>{
    dispatch(getRead())
    toast("Deletion is Successful!")
  })
}

const handleEdit=(Name,Email,Phone)=>{
  localStorage.setItem("name",Name);
  localStorage.setItem("email",Email);
  localStorage.setItem("phone",Phone);
}
  return (
    <>
    <div className="table-wrapper">
    <table className="fl-table">
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Operations</th>
        </tr>
        </thead>
        <tbody>
      {User?.map((item,index)=>{
        return(
          <>
          <tr>
            <th>{index+1}</th>
            <th>{item.name}</th>
            <th>{item.email}</th>
            <th>{item.phone}</th>
            <th><Link to={`/edit/${item.id}`}><button onClick={()=>handleEdit(item.name,item.email,item.phone)} className='button-1'>Edit</button></Link><button onClick={()=>handleDelete(item.id)}  style={{marginLeft:"20px"}} className='button-2'>Delete</button></th>
        </tr>
           
          
          </>
        )
      })}
      </tbody>
      </table>
   </div>
    
    </>
  )
}

export default Read