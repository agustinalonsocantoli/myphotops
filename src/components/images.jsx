import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPhoto } from '../features/favoritePhotosSlice';

import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DoneAllIcon from '@mui/icons-material/DoneAll';


export const ImageComponent = (props) => {
    const dispatch = useDispatch();

    // Importamos acction para agregar a favoritos
    const today = new Date();
    const date = today.toLocaleString();

    const addPhotoFav = () => {
        dispatch(addPhoto({
            id: props.id,
            name: props.name,
            description: props.description,
            src: props.src,
            likes: props.likes,
            width: props.width,
            height: props.height,
            donwload: props.donwload,
            date: date
        }))
    };

    // Confirmacion de guardado en favoritos 
    const [ confirm, setConfirm ] = useState(false);

    const handleFavorite = () => {
        setConfirm(true)
        addPhotoFav()
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setConfirm(false)
        }, 1000)

        return () => {
            clearTimeout(timeout)
        }
    }, [confirm])

    return (
        <section className='images'>
            <img
                src={`${props.src}`}
                srcSet={`${props.src}`}
                alt={props.name}
                loading="lazy"
                style={{borderRadius: 20}}
            />

            <IconButton
            className='btn__img'
                sx={{ color: 'red' }}
                onClick={handleFavorite}
            >
                <FavoriteBorderIcon />
            </IconButton>
            
            {confirm && 
                <div className='save__fav'>
                    <span>SAVED PHOTO</span>
                    <DoneAllIcon sx={{color: '#6EC7B3', fontSize: 60}}/>
                </div>
            }
            
        </section>
    );
}