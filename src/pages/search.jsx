import { useState, useEffect } from "react";
import { ImageComponent } from "../components/images";
import { ErrorComponent } from "../components/error";
import { getPhotoApi } from '../features/photosSlice';
import { useDispatch, useSelector } from 'react-redux';

import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';import 
TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';


export const SearchComponent = () => {
    
    const [ input, setInput ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput(e.target.search.value)
    }

    const [ page, setPage ] = useState(1);

    const handleChangePage = (e, value) => {
        setPage(value);
    }

    // Importamos del estado la lista de fotos traidas de la API
    const { list, loading, error } = useSelector(state => state.photos)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPhotoApi(input, page))

    }, [input, page, dispatch])
    
    return (
        <div>
            <section className="search">
                <div className="search__header">
                    <div className="header__title">
                        <h2>FIND</h2>
                        <h2>YOUR</h2>
                        <h2>PHOTO</h2>
                    </div>

                    <form className="search__form" onSubmit={handleSubmit}>
                        <TextField className="header__input"
                            name='search'
                            placeholder="Search"
                            InputProps={{ startAdornment: (
                                <InputAdornment position="start">
                                <SearchIcon />
                                </InputAdornment>
                            ),}}
                            variant="standard"
                        />

                        <Button variant="contained" type="submit">
                            <ImageSearchIcon />
                        </Button>
                    </form>
                </div>

                <div className="search__btn">
                    <Button onClick={() => setInput('nature')} variant="contained">NATURE</Button>
                    <Button onClick={() => setInput('animals')} variant="contained">ANIMALS</Button>
                    <Button onClick={() => setInput('space')} variant="contained">SPACE</Button>
                    <Button onClick={() => setInput('cities')} variant="contained">CITIES</Button>
                    <Button onClick={() => setInput('colors')} variant="contained">COLORS</Button>
                </div>
                
                { loading && !error ? 
                    <div className='loading'>
                        <CircularProgress color="info" size={150} />
                    </div>
                    : !loading && error ?
                    <ErrorComponent />
                    :
                    <div className="search__images">
                        {list.map((item) => (
                            <ImageComponent key={item.id} 
                                id={item.id}
                                name={item.user.name}
                                description={item.alt_description}
                                src={item.urls.regular}
                                likes={item.likes}
                                width={item.width}
                                height={item.height} 
                                donwload={item.urls.small_s3}
                                list={list}
                            />
                        ))}
                    </div>
                }

                <div className="search__pages">
                    <Pagination page={page} onChange={handleChangePage} count={10} variant="outlined" color="primary" />
                </div>
            </section>
        </div>
    )
};