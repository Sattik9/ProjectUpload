import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


const getRegister=createAsyncThunk("Register",async(data)=>{
    const response=await axios.post(`https://restapinodejs.onrender.com/api/register`,data);
    return response?.data;
})



const AuthSlice=createSlice({
    name:"USER",
    initialState:{
        Userdata:[],
        loading:false
    },
    extraReducers:{
         [getRegister.pending]:(state)=>{
            state.loading=true
         },
         [getRegister.fulfilled]:(state,action)=>{
            state.loading=false
            state.Userdata.push(action.payload)
            console.log(action.payload);
         },
         [getRegister.rejected]:(state,action)=>{
            state.loading=false;
         }
         
    }
})
export {getRegister,AuthSlice};