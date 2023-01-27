import { configureStore } from "@reduxjs/toolkit";
import photos from '../features/photosSlice';
import favoritePhotos from "../features/favoritePhotosSlice";

export const store = configureStore({
    reducer: {
        photos,
        favoritePhotos
    }
});