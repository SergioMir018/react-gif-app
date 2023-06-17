import React, { useState } from 'react'

import "../../styles/AddCategory.css"

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ( e:React.ChangeEvent<HTMLInputElement> ) => {
    setInputValue( e.target.value );
  }

  return (
    <div className='searchBar'>
      <input 
      type='text' 
      placeholder='Search gif' 
      value={ inputValue }
      onChange={ handleInputChange }></input>
      <button className="search-button"></button>
    </div>
  )
}