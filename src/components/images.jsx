import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPhoto } from '../features/favoritePhotosSlice';


import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
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
            <ImageList cols={5} style={{gap: 10}}>
                {props.list.map((item) => (
                <ImageListItem key={item.id}>
                    <img
                        src={`${item.urls.regular}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.urls.regular}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.user.name}
                        loading="lazy"
                        style={{borderRadius: 20}}
                    />

                    <ImageListItemBar
                        sx={{
                            background:
                            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
                            'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                            borderRadius: '0px 0px 20px 20px'
                        }}
                        actionIcon={
                            <IconButton
                            sx={{ color: 'red' }}
                            onClick={handleFavorite}
                            >
                            <FavoriteIcon />
                            </IconButton>
                        }
                    />
                </ImageListItem>
                ))}
            </ImageList>
            
            {confirm && 
                <div className='save__fav'>
                    <span>SAVED PHOTO</span>
                    <DoneAllIcon sx={{color: '#6EC7B3', fontSize: 60}}/>
                </div>
            }
            
        </section>
    );
}