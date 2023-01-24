// import { NavLink } from "react-router-dom";

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const HeaderComponent = () => {

    return (
        <div>
            <nav className="nav">
                <ul>
                    <li><HomeIcon sx={{ fontSize: 15 }} />HOME</li>
                    <li><SearchIcon sx={{ fontSize: 15 }} /> SEARCH</li>
                    <li><FavoriteIcon sx={{ fontSize: 15 }} />FAVOURITE</li>
                </ul>
            </nav>
        </div>
    );
}