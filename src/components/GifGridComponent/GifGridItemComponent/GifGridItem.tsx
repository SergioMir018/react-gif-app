import React from 'react'
import PropTypes from 'prop-types'

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

GifGridItem.propTypes = {
  gif: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}).isRequired
};