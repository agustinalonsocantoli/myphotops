import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favoritePhotos: JSON.parse(localStorage.getItem('photos')) || [],
}

const setLocalStorage = (photo) => {
    localStorage.setItem('photos', JSON.stringify(photo));
}

const favoritePhotoSlice = createSlice({
    name: 'favoritePhotos',
    initialState,
    reducers: {
        addPhoto: (state, action) => {
            if([...state.favoritePhotos].every(item => item.id !== action.payload.id)) {
                state.favoritePhotos = [...state.favoritePhotos, action.payload]
                setLocalStorage(state.favoritePhotos);
            }
        },

        removePhoto: (state, action) => {
            state.favoritePhotos = state.favoritePhotos.filter(item => item.id !== action.payload);
            setLocalStorage(state.favoritePhotos);
        },

        editPhotoDescription: (state, action) => {
            state.favoritePhotos = state.favoritePhotos.map((item) => {
                if(item.id === action.payload.id) {
                    item.description = action.payload.description
                }

                return item
            });

            setLocalStorage(state.favoritePhotos);
        },
    }
});


export const { addPhoto, removePhoto, editPhotoDescription } = favoritePhotoSlice.actions;

export default favoritePhotoSlice.reducer;