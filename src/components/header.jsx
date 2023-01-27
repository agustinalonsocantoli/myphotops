import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export const HeaderComponent = () => {
    const [ menu, setMenu ] = useState(true);
    const resposive = window.innerWidth < 992 ? true : false;


    if (!resposive) {
        return (
            <div>
                <nav className="nav__desktop">
                    <ul>
                        <li><NavLink style={{color:"black"}} to={'/'}><HomeIcon sx={{ fontSize: 15 }} />HOME</NavLink></li>
                        <li><NavLink style={{color:"black"}} to={'/search'}><SearchIcon sx={{ fontSize: 15 }} /> SEARCH</NavLink></li>
                        <li><NavLink style={{color:"black"}} to={'/favorite'}><FavoriteIcon sx={{ fontSize: 15 }} />FAVOURITE</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    } else {
        return (
            <div>
                { menu ? 
                <nav className="nav__close">
                    <MenuIcon onClick={() => setMenu(false)} /> 
                </nav>
                :
                <nav className="nav__open">
                    <div className="icon-container">
                        <CloseIcon onClick={() => setMenu(true)} className="icon-close"/>
                    </div>
                    

                    <ul>
                        <li><NavLink style={{color:"black"}} to={'/'}><HomeIcon sx={{ fontSize: 15, marginRight: 2 }} />HOME</NavLink></li>
                        <li><NavLink style={{color:"black"}} to={'/search'}><SearchIcon sx={{ fontSize: 15, marginRight: 2 }} /> SEARCH</NavLink></li>
                        <li><NavLink style={{color:"black"}} to={'/favorite'}><FavoriteIcon sx={{ fontSize: 15, marginRight: 2 }} />FAVOURITE</NavLink></li>
                    </ul>
                </nav>
                }
            </div>
        );
    }
}