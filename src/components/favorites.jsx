import { useState } from 'react';
import { itemFav } from '../JSON/fav'
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InfoIcon from '@mui/icons-material/Info';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

export const MyFavoritesComponent = () => {
    const [ confirmDelete, setConfirmDelete ] = useState(false);
    const [ edit, setEdit ] = useState(false);

    const deleteImage = () => {
        setConfirmDelete(true)
    }

    const deleteTrue = () => {
        setConfirmDelete(false)
    }

    const deleteFalse = () => {
        setConfirmDelete(false)
    }

    const editImage = () => {
        setEdit(true)
    }

    const editSave = () => {
        setEdit(false)
    }

    const editCancel = () => {
        setEdit(false)
    }

    const donwloadImage = () => {
        alert('DESCARGANDO')
    }

    return (
        <div>
            <section className="favorite">
                    {itemFav.map((image) => (
                        <div className='favorite__container'>
                            <img
                            src={`${image.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${image.img}?w=248&fit=crop&auto=format&dpr=2 1.6x`}
                            alt={image.title}
                            loading="lazy"
                            />

                            <div className='favorite__detail'>
                                <div className='favorite__text'>
                                    <p>{image.desciption}</p>
                                    <p>{image.time}</p>
                                    <p>{image.width}</p>
                                    <p>{image.height}</p>
                                    <p>{image.likes} <FavoriteIcon sx={{fontSize: 10}}/></p>
                                </div>

                                <div className='favorite__icons'>
                                    <IconButton sx={{ color: 'black' }}>
                                        <ArrowCircleDownIcon sx={{fontSize: 20}}
                                        onClick={donwloadImage}/>
                                    </IconButton>

                                    <IconButton sx={{ color: 'black'}}>
                                        <InfoIcon sx={{fontSize: 20}}
                                        onClick={editImage}/>
                                    </IconButton>
                                    
                                    <IconButton sx={{ color: 'black' }}>
                                        <DeleteForeverIcon sx={{fontSize: 20}}
                                        onClick={deleteImage}/>
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

                        <textarea></textarea>

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