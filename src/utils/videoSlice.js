import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        videoList: [],
        selectedVideo: {},
    },
    reducers: {
        updateVideoList: (state, action) => {
            state.videoList = action.payload;
        },
        updateSelectedVideo: (state, action) => {
            state.selectedVideo = action.payload;
        },
    }
})

export const {updateVideoList, updateSelectedVideo} = videoSlice.actions;
export default videoSlice.reducer;