import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const login = createAsyncThunk(
    'users/login',
    async (data)=>{
        return await customAxios.post('users/login', data);
    }
)

export const register = createAsyncThunk(
    'users/register',
    async (data)=>{
        return await customAxios.post('users/register', data);
    }
)