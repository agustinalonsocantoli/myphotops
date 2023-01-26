import { configureStore } from "@reduxjs/toolkit";
import photos from '../features/photosSlice';

export const store = configureStore({
    reducer: {
        photos
    }
});