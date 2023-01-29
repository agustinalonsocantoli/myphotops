import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { collageImg } from '../JSON/collage';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
};
}

export const CollageComponent = () => {
  return (
    <ImageList  
        className='home__collage'
        variant="quilted"
        cols={4}
        rowHeight={121}
    >
        {collageImg.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
            />
        </ImageListItem>
        ))}
    </ImageList>
  );
}