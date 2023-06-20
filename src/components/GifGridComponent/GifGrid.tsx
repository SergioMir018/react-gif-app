import React, { useEffect, useState } from 'react'

import { GifGridItem } from './GifGridItemComponent/GifGridItem'

import '../../styles/GifGrid.css'
import { useFetchGifs } from '../../hooks/useFetchGifs';

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

  const {  data ,loading } = useFetchGifs( category );

  return (
    <>
      <h3> { category } </h3>

      <div className='card-grid'>
        {
          data.map( (  img: GifImage ) => (
            <GifGridItem key={ img.id } gif={ img }/>
          ))
        }
      </div>    
    </>
  )
}
