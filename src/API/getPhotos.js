export const getPhotos = async (query, page = 1) => {

    try{
        if(!query || query === "") {
            const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=10&page=${page}`);
            const data = await response.json();
        
            return data

        } else {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=10&page=${page}`);
            const data = await response.json();
        
            return data.results
        }

    } catch(err) {
        console.log(err);
    }
}