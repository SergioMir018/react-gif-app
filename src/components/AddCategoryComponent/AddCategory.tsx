import React from 'react'

import "../../styles/AddCategory.css"

export const AddCategory = () => {
  return (
    <div className='searchBar'>
      <input type='text' placeholder='Search gif'></input>
      <button className="search-button"></button>
    </div>
  )
}