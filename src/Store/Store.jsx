import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "../Slice/AuthSlice";
import { CrudSlice } from "../Slice/CrudSlice";

const Store=configureStore({
    reducer:{
        Authss:AuthSlice.reducer,
        Crudss:CrudSlice.reducer
    }
})

export default Store;