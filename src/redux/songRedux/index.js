import {createSlice} from "@reduxjs/toolkit";
import {addSong, getSongs} from "../../service/songService";


const initialState = {
    songs: [],
    song: {},
    topVnSongs : []
}
const songSlice = createSlice({
    name: 'songs',
    loading: true,
    initialState,
    reducers: {
        updateTopVnSongs: (state , action) => {
          state.topVnSongs = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(getSongs.fulfilled,(state,action)=>{
            state.songs = action.payload
            state.loading = false
        });
        builder.addCase(addSong.fulfilled,(state,action)=>{
            state.songs.push(action.payload)
            console.log(state)
        });
    }

})

export const { updateTopVnSongs } = songSlice.actions

export default songSlice.reducer;