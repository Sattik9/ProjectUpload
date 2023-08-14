import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
 const {Comps}=props;
 const token=sessionStorage.getItem("token");
 let history=useNavigate();
 useEffect(()=>{
    if(token==="" || token===null){
       history("/login");
    }
 },[]);
  return (
    <>
    <Comps/>
    </>
  )
}

export default Protected