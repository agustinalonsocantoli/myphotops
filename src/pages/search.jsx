import { ImageComponent } from "../components/images";
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import CheckIcon from '@mui/icons-material/Check';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export const SearchComponent = () => {
    return (
        <div>
            <section className="search">
                <div className="search__header">
                    <div className="header__title">
                        <h2>FIND</h2>
                        <h2>YOUR</h2>
                        <h2>PHOTO</h2>
                    </div>

                    <TextField className="header__input"
                        placeholder="Search"
                        InputProps={{ startAdornment: (
                            <InputAdornment position="start">
                            <SearchIcon />
                            </InputAdornment>
                        ),}}
                        variant="standard"
                    />

                    <Button variant="contained">
                        <CheckIcon/>
                    </Button>
                </div>

                <div className="search__btn">
                    <Button variant="contained">NATURE</Button>
                    <Button variant="contained">ANIMALS</Button>
                    <Button variant="contained">SPACE</Button>
                    <Button variant="contained">CITIES</Button>
                    <Button variant="contained">COLORS</Button>
                </div>

                <div className="search__images">
                    <ImageComponent />
                </div>

                <div className="search__pages">
                    <Pagination count={10} variant="outlined" color="primary" />
                </div>
            </section>
        </div>
    )
};