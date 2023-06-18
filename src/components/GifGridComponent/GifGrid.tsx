import React, { useEffect, useState } from 'react'

import { GifGridItem } from './GifGridItemComponent/GifGridItem'

import '../../styles/GifGrid.css'

interface GifGridProps {
  category: string
}

interface GifAPIData {
  id: string,
  title: string,
  images: {
      downsized_medium: {
        url: string
      }
    }
}

export interface GifImage {
  id: string,
  title: string,
  url: string
}

export const GifGrid = ( { category }: GifGridProps ) => {

  const [gifImages, setGifImages] = useState< GifImage[] >( [] );

  useEffect( () => {
    getGifs();
  }, [] )
  

  const getGifs = async() => {
    
    const url = 'https://api.giphy.com/v1/gifs/search?q=One+Piece&limit=10&api_key=D8H1MJ9wPYEBqN3JyTB8fLKyGwXI0LUD';

    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( ( img: GifAPIData ) => {
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
    <div className='card-grid'>
      <h3> { category } </h3>
      {
        gifImages.map( (  img: GifImage ) => (
          <GifGridItem key={ img.id } gif={ img }/>
        ))
      }
    </div>
  )
}
