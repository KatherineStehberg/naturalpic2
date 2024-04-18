import { createContext, useState, useEffect } from 'react';

const API_URL = 'https://api.pexels.com/v1/search?query=nature&per_page=15';
const API_KEY = 'EzHKcEck65pKLLO37YvQSw8uEjY9IL78SbWVMwZK1sI3dDB8WlBYOajI';


    export const GalleryContext = createContext();

    export function GalleryProvider({ children }) {
    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        fetchData();
      }, []);
    
    const fetchData = async () => {
        const res = await fetch(API_URL, {
        headers: {
            Authorization: API_KEY,
        },
        });
        const data = await res.json();
        const photos = data.photos.map((photo) => {
        return {
            id: photo.id,
            src: photo.src.tiny,
            alt: photo.alt,
            liked: false,
        };
        });

        setGallery(photos);
    };

    return (
        <GalleryContext.Provider 
            value={{
                gallery, 
                setGallery 
            }}> 
        {children} 
        </GalleryContext.Provider>
    );
    
}