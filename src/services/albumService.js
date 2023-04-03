import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getAll = createAsyncThunk(
    'albums/getAll',
    async (page)=>{
        const res = await customAxios.get('albums');
        return res.data;
    }
)

export const createAlbum = createAsyncThunk(
    'albums/createAlbum',
    async (data)=>{
        await customAxios.post('albums',data);
        const res = await customAxios.get('albums');
        return res.data;
    }
)

export const editAlbum = createAsyncThunk(
    'albums/editAlbum',
    async (data)=>{
        await customAxios.put('albums/' + data.idAlbum,data);
        const res = await customAxios.get('albums');
        return res.data;
    }
)

export const removeAlbum = createAsyncThunk(
    'albums/removeAlbum',
    async (data)=>{
        await customAxios.delete('albums/'+data);
        const res = await customAxios.get('albums');
        return res.data;
    }
)