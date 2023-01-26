import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPhotos } from '../API/getPhotos'

export const getPhotoApi = createAsyncThunk(
    'photos/getPhotos', 
    async (query) => {
        return await getPhotos(query);
});

const initialState = {
    list: []
}

export const photosSlice = createSlice({
    name: 'photos',
    initialState,
    extraReducers: {
        [getPhotoApi.pending]: () => {
            console.log('Loading photos...');
        },
        [getPhotoApi.fulfilled]: (state, action) => {
            console.log('Load success!');
            state.list = action.payload;
        },
        [getPhotoApi.rejected]: () => {
            console.log('Load failed');
        }
    }
});

export default photosSlice.reducer;