import React from 'react'

import { GifImage} from '../GifGrid'

import '../../../styles/GifGridItem.css'

export const GifGridItem = ( { gif }: { gif: GifImage } ) => {

  const { title, url } = gif;

  return (
    <div className='card'>
      <img src={ url } alt={ title } />
      <p> { title } </p> 
    </div>
  )
}
