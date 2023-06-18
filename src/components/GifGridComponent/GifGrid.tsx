import React, { useEffect, useState } from 'react'

import { GifGridItem } from './GifGridItemComponent/GifGridItem'

import '../../styles/GifGrid.css'
import { getGifs } from '../../helpers/getGifs'

export interface GifGridProps {
  category: string
}

export interface GifAPIData {
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
    getGifs( category )
      .then( setGifImages );
  }, [ category ] )

  return (
    <>
      <h3> { category } </h3>
      <div className='card-grid'>
        {
          gifImages.map( (  img: GifImage ) => (
            <GifGridItem key={ img.id } gif={ img }/>
          ))
        }
      </div>    
    </>
  )
}
