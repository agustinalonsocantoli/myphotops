import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPhotos } from '../API/getPhotos'

export const getPhotoApi = createAsyncThunk(
    'photos/getPhotos', 
    async (query, page) => {
        return await getPhotos(query, page);
});

const initialState = {
    list: [],
    loading: false,
    error: false
}

export const photosSlice = createSlice({
    name: 'photos',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getPhotoApi.pending, (state, action) => {
            console.log('Loading photos...');
            state.loading = true;
            state.error = false;
        })
        .addCase(getPhotoApi.fulfilled, (state, action) => {
            console.log('Load success!');
            state.list = action.payload;
            state.loading = false;
            state.error = false;
        })
        .addCase(getPhotoApi.rejected, (state, action) => {
            console.log('Load failed');
            state.loading = false;
            state.error = true;
        });
    }
});

export default photosSlice.reducer;


// extraReducers: {
//     [getPhotoApi.pending]: (state, action) => {
//         console.log('Loading photos...');
//         state.loading = true;
//         state.error = false;
//     },
//     [getPhotoApi.fulfilled]: (state, action) => {
//         console.log('Load success!');
//         state.list = action.payload;
//         state.loading = false;
//         state.error = false;
//     },
//     [getPhotoApi.rejected]: (state, action) => {
//         console.log('Load failed');
//         state.loading = false;
//         state.error = true;
//     }
// }