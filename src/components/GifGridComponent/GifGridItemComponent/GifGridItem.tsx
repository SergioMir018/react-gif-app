import React from 'react'

import { GifImage} from '../GifGrid'

export const GifGridItem = ( { gif }: { gif: GifImage } ) => {

  const { title, url } = gif;

  return (
    <div>
      <img src={ url } alt={ title } />
      <p> { title } </p> 
    </div>
  )
}
