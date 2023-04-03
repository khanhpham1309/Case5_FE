import {createSlice} from "@reduxjs/toolkit";
import {createAlbum, editAlbum, getAll, removeAlbum} from "../../../services/albumService";


const initialState = {
    albums: [],
    album:{},
}

const albumSlice = createSlice({
        name: 'albums',
        initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getAll.fulfilled, (state, action) => {
                state.products = action.payload
            });

            builder.addCase(createAlbum.fulfilled, (state, action) => {
                state.products = action.payload

            });

            builder.addCase(removeAlbum.fulfilled, (state, action) => {
                state.products = action.payload

            });
            builder.addCase(editAlbum.fulfilled, (state, action) => {
                state.products = action.payload
            })
        }
    }
)

export default albumSlice.reducer;