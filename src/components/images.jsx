import { useState, useEffect } from 'react';
// import { getPhotos } from '../API/getPhotos'
import { getPhotoApi } from '../features/photosSlice';

import { useDispatch, useSelector } from 'react-redux';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export const ImageComponent = ({ query }) => {

    const { list } = useSelector(state => state.photos)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPhotoApi(query))
    }, [query, dispatch])




    // const [ photos, setPhotos ] = useState([]);

    // useEffect(() => {
    //     const setAllPhotos = async () => {
    //         const allPhotos = await getPhotos(query)

    //         setPhotos(allPhotos)
    //     }

    //     setAllPhotos();
    // }, [query])


    const [ favorite, setFavorite ] = useState(false);
    const [ confirm, setConfirm] = useState(false);
    const [ loading, setLoading ] = useState(false);

    const handleFavorite = () => {
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
            {loading ? 
                <Box sx={{ width: '100%' }}>
                    <LinearProgress />
                </Box>
                :
                <ImageList cols={5} style={{gap: 10}}>

                    {list.map((item) => (

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
                                    {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                                    </IconButton>
                                }
                            />
                        </ImageListItem>
                    ))}

                </ImageList>
            }

            {confirm && 
                <div className='save__fav'>
                    <span>SAVED PHOTO</span>
                    <DoneAllIcon sx={{color: '#6EC7B3', fontSize: 60}}/>
                </div>
            }
            
        </section>
    );
}