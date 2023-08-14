import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const getCreate=createAsyncThunk("CREATE",async(data)=>{
    const response=await axios.post(`https://649837819543ce0f49e1c205.mockapi.io/pracapi`,data);
    return response?.data;
})

const getRead=createAsyncThunk("READ",async(data)=>{
    const response=await axios.get(`https://649837819543ce0f49e1c205.mockapi.io/pracapi`,data);
    return response?.data;
})

const CrudSlice=createSlice({
    name:"CRUD",
    initialState:{
        User:[],
        loading:false
    },
    extraReducers:{
        [getCreate.pending]:(state)=>{
            state.loading=true
        },
        [getCreate.fulfilled]:(state,action)=>{
            state.laoding=false
            state.User.push(action.payload)
        },
        [getCreate.rejected]:(state,action)=>{
            state.loading=false
        },
        [getRead.pending]:(state)=>{
            state.loading=true
        },
        [getRead.fulfilled]:(state,action)=>{
            state.laoding=false
            state.User=action.payload
        },
        [getRead.rejected]:(state,action)=>{
            state.loading=false
        }
    }
})

export {getCreate,getRead,CrudSlice};