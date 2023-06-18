import React, { useEffect, useState } from 'react'

interface GifGridProps {
  category: string
}

interface GifData {
  id: string,
  title: string,
  images: {
      downsized_medium: {
        url: string
      }
    }
}

export const GifGrid = ( { category }: GifGridProps ) => {

  const [gifImages, setGifImages] = useState< GifData[] >( [] );

  useEffect( () => {
    getGifs();
  }, [] )
  

  const getGifs = async() => {
    
    const url = 'https://api.giphy.com/v1/gifs/search?q=One+Piece&limit=10&api_key=D8H1MJ9wPYEBqN3JyTB8fLKyGwXI0LUD';

    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( ( img: GifData ) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    } );

    console.log( gifs );
    setGifImages( gifs );
  }

  return (
    <div>
      <h3> { category } </h3>
      <ul>
        {
          gifImages.map( (gif: GifData ) => {
            return <li> { gif.title } </li>
          } )
        }
      </ul>
    </div>
  )
}
