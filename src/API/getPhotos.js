export const getPhotos = async () => {
    const today = new Date();
    const now = today.toLocaleString();

    const response = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}`);

    const data = await response.json();

    const photos = data.map((photo) => ({
        id: photo.id,
        src: photo.urls.thumb,
        name: photo.user.name,
        description: photo.alt_description,
        date: now,
        width: photo.width,
        height: photo.height,
        likes: photo.likes,
        descarga: photo.small_s3

    }))

    return photos;
}

// export const getPhotos = async () => {
//     const response = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}`);

//     const data = await response.json();

//     return data;
// }




