import { useState } from "react";
import { ImageComponent } from "../components/images";
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export const SearchComponent = () => {

    const [ input, setInput ] = useState('');

    const handleChangeInput = ({target}) => {
        setInput(target.value);
    }

    const [ page, setPage ] = useState(1);

    const handleChangePage = (e, value) => {
        setPage(value);
    }
    
    return (
        <div>
            <section className="search">
                <div className="search__header">
                    <div className="header__title">
                        <h2>FIND</h2>
                        <h2>YOUR</h2>
                        <h2>PHOTO</h2>
                    </div>

                    <form className="search__form">
                        <TextField className="header__input"
                            onChange={handleChangeInput}
                            value={input}
                            placeholder="Search"
                            InputProps={{ startAdornment: (
                                <InputAdornment position="start">
                                <SearchIcon />
                                </InputAdornment>
                            ),}}
                            variant="standard"
                        />

                        <Button variant="contained">
                            <ClearIcon onClick={() => setInput('')} />
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

                <div className="search__images">
                    <ImageComponent query={input} page={page} />
                </div>

                <div className="search__pages">
                    <Pagination page={page} onChange={handleChangePage} count={10} variant="outlined" color="primary" />
                </div>
            </section>
        </div>
    )
};