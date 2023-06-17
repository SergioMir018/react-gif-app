import React, { FormEvent, useState } from 'react'
import PropTypes from 'prop-types';

import "../../styles/AddCategory.css"
interface AddCategoryProps {
  setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AddCategory = ( { setCategories }: AddCategoryProps ) => {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ( e:React.ChangeEvent<HTMLInputElement> ) => {
    setInputValue( e.target.value );
  }

  const handleSubmit = ( e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if ( inputValue.length > 2 ) {
      setCategories( categories => [...categories, inputValue]);
      setInputValue("");
    }
  }

  return (
    <div className='searchBar'>
      <form className='searchBar-form' onSubmit={ handleSubmit }>
        <input 
        type='text' 
        placeholder='Search gif' 
        value={ inputValue }
        onChange={ handleInputChange }></input>
        <button className="search-button"></button>
      </form>
    </div>
  )
}

AddCategory.protoTypes = {
  setCategories : PropTypes.func.isRequired
}