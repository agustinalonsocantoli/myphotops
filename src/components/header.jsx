import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const HeaderComponent = () => {

    return (
        <div>
            <nav className="nav">
                <ul>
                    <li><NavLink style={{color:"black"}} to={'/'}><HomeIcon sx={{ fontSize: 15 }} />HOME</NavLink></li>
                    <li><NavLink style={{color:"black"}} to={'/search'}><SearchIcon sx={{ fontSize: 15 }} /> SEARCH</NavLink></li>
                    <li><NavLink style={{color:"black"}} to={'/favorite'}><FavoriteIcon sx={{ fontSize: 15 }} />FAVOURITE</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}