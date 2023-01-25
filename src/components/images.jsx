import { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { itemLoad } from '../JSON/img';

export const ImageComponent = () => {
    const [ favorite, setFavorite ] = useState(false);
    const [ confirm, setConfirm] = useState(false);

    const handleClick = () => {
        setFavorite(prev => !prev);
        setConfirm(true)
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
            <ImageList cols={4} style={{gap: 10}}>
                {itemLoad.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
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
                                onClick={handleClick}
                                >
                                {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
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