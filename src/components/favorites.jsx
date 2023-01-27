import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removePhoto, editPhotoDescription } from '../features/favoritePhotosSlice';
import { setOrder } from '../function/setOrder';

import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InfoIcon from '@mui/icons-material/Info';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

export const MyFavoritesComponent = ({ order }) => {
    const dispatch = useDispatch();
    const { favoritePhotos } = useSelector(state => state.favoritePhotos)

    const [ confirmDelete, setConfirmDelete ] = useState(false);
    const [ edit, setEdit ] = useState(false);
    const [ newDescription, setNewDescription ] = useState('')
    const [ id, setId ] = useState('');

    const deleteFav = (value) => {
        setConfirmDelete(true)
        setId(value)
    }

    const deleteTrue = () => {

        setConfirmDelete(false)
        dispatch(removePhoto(id))
    }

    const deleteFalse = () => {
        setConfirmDelete(false)
    }

    const editImage = (value) => {
        setEdit(true)
        setId(value)
    }

    const handleChange = ({target}) => {
        setNewDescription(target.value)
    }

    const editSave = () => {
        dispatch(editPhotoDescription({
            id: id,
            description: newDescription
        }))

        setEdit(false)
    }

    const editCancel = () => {
        setEdit(false)
    }

    // Primer letra en mayuscula
    const setCapitalize = (text) => {
        if(typeof(text) === 'string') {
            return text.charAt(0).toUpperCase() + text.slice(1);
        } else {
            return text
        }
    }

    //Ordenar favoritos
    const [ orderList, setOrderList] = useState(favoritePhotos);

    useEffect(() => {
        setOrderList(setOrder(favoritePhotos, order))

    }, [favoritePhotos, order])

    return (
        <div>
            <section className="favorite">
                    {orderList.map((image) => (
                        <div className='favorite__container' key={image.id}>
                            <div className='favorite__img'>
                                <img
                                    src={`${image.src}&w=248&fit=crop&auto=format`}
                                    srcSet={`${image.src}&w=248&fit=crop&auto=format&dpr=2 1.6x`}
                                    alt={image.name}
                                    loading="lazy"
                                />
                            </div>

                            <div className='favorite__detail'>
                                <div className='favorite__text'>
                                    <p>Description: {image.description === '' ? '- - - -' : setCapitalize(image.description)}</p>
                                    <p>{image.date}</p>
                                    <p>Widhth: {image.width}px</p>
                                    <p>Height: {image.height}px</p>
                                    <p>Likes: {image.likes} <FavoriteIcon sx={{fontSize: 10}}/></p>
                                </div>

                                <div className='favorite__icons'>
                                    <IconButton>
                                        <a href={image.donwload} target='_blank' rel='noopener noreferrer' style={{ color: 'black' }}>
                                            <ArrowCircleDownIcon sx={{fontSize: 20}} />
                                        </a>
                                    </IconButton>

                                    <IconButton onClick={() => editImage(image.id)} sx={{ color: 'black'}}>
                                        <InfoIcon sx={{fontSize: 20}}/>
                                    </IconButton>
                                    
                                    <IconButton onClick={() => deleteFav(image.id)} sx={{ color: 'black' }}>
                                        <DeleteForeverIcon sx={{fontSize: 20}}/>
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    ))}

                {confirmDelete && 
                    <div className='favorite__delete'>
                        <span>DELETE IMAGE</span>

                        <div className='icons'>
                            <DoneIcon onClick={deleteTrue} className='done' sx={{color: '#6EC7B3', fontSize: 60}}/>
                            <ClearIcon onClick={deleteFalse} className='clear' sx={{color: '#DC2121', fontSize: 60}}/>
                        </div>
                    </div>
                }

                {edit && 
                    <div className='edit__description'>
                        <h4>New Description</h4>

                        <textarea value={newDescription} onChange={handleChange}></textarea>

                        <div className='edit__btn'>
                            <span onClick={editCancel}>Cancel</span>
                            <span onClick={editSave}>Save</span>
                        </div>
                    </div>
                }
            </section>
        </div>
    )
}