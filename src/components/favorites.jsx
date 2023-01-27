import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removePhoto, editPhotoDescription } from '../features/favoritePhotosSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InfoIcon from '@mui/icons-material/Info';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

export const MyFavoritesComponent = () => {
    const dispatch = useDispatch();
    const { favoritePhotos } = useSelector(state => state.favoritePhotos)

    const [ confirmDelete, setConfirmDelete ] = useState(false);
    const [ edit, setEdit ] = useState(false);
    const [ newDescription, setNewDescription ] = useState('')

    const deleteFav = () => {
        setConfirmDelete(true)
    }

    const deleteTrue = () => {
        setConfirmDelete(false)
        
        favoritePhotos.map(item => (
            dispatch(removePhoto(item.id))
        ))
    }

    const deleteFalse = () => {
        setConfirmDelete(false)
    }

    const editImage = () => {
        setEdit(true)
    }

    const handleChange = ({target}) => {
        setNewDescription(target.value)
    }

    const editSave = () => {
        dispatch(editPhotoDescription({
            id: favoritePhotos.id,
            description: newDescription
        }))

        setEdit(false)
    }

    const editCancel = () => {
        setEdit(false)
    }

    // Primer letra en mayuscula
    const setCapitalize = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    return (
        <div>
            <section className="favorite">
                    {favoritePhotos.map((image) => (
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
                                    <p>{setCapitalize(image.description)}</p>
                                    <p>{image.date}</p>
                                    <p>{image.width}</p>
                                    <p>{image.height}</p>
                                    <p>{image.likes} <FavoriteIcon sx={{fontSize: 10}}/></p>
                                </div>

                                <div className='favorite__icons'>
                                    <IconButton>
                                        <a href={image.donwload} target='_blank' rel='noopener noreferrer' style={{ color: 'black' }}>
                                            <ArrowCircleDownIcon sx={{fontSize: 20}} />
                                        </a>
                                    </IconButton>

                                    <IconButton onClick={editImage} sx={{ color: 'black'}}>
                                        <InfoIcon sx={{fontSize: 20}}/>
                                    </IconButton>
                                    
                                    <IconButton onClick={deleteFav} sx={{ color: 'black' }}>
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