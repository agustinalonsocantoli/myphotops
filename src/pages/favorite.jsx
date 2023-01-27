import { useState } from "react";
import { MyFavoritesComponent } from "../components/favorites"

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const FavoriteComponent = () => {
    const [order, setOrder] = useState('');

    const selectChange = ({target}) => {
      setOrder(target.value);
    };

    return (
        <section>
            <div className="order">
                <Box>
                    <FormControl sx={{width: '70%'}}>
                        <InputLabel>Order By</InputLabel>
                        <Select
                            value={order}
                            label="Order By"
                            onChange={selectChange}
                            >   
                            <MenuItem value={'maxW'}>Max Width</MenuItem>
                            <MenuItem value={'minW'}>Min Width</MenuItem>
                            <MenuItem value={'maxH'}>Max Heigth</MenuItem>
                            <MenuItem value={'minH'}>Min Heigth</MenuItem>
                            <MenuItem value={'maxL'}>Max Likes</MenuItem>
                            <MenuItem value={'minL'}>Min Likes</MenuItem>
                            <MenuItem value={'newer'}>Older</MenuItem>
                            <MenuItem value={'older'}>Newer</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>

            <div>
                <MyFavoritesComponent order={order}/>
            </div>
        </section>
    )  
}