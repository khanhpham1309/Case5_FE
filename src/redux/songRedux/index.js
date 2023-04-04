import {createSlice} from "@reduxjs/toolkit";
import {addSong, getSongs} from "../../service/songService";


const initialState = {
    songs: [],
    song: {}
}
const songSlice = createSlice({
    name: 'songs',
    loading: true,
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getSongs.fulfilled,(state,action)=>{
            state.songs = action.payload
            state.loading = false
        });
        builder.addCase(addSong.fulfilled,(state,action)=>{
            state.songs.push(action.payload)

        });
    }

})
export default songSlice.reducer;