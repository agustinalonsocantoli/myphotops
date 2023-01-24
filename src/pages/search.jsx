import { ImageComponent } from "../components/images";
import Pagination from '@mui/material/Pagination';

export const SearchComponent = () => {
    return (
        <div>
            <section className="search">
                <div className="search__header">

                </div>

                <div className="search__input">
                    <input type="text" />
                    <button>Search</button>
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