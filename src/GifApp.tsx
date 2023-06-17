import React, { useState } from 'react';
import { AddCategory } from './components/AddCategoryComponent/AddCategory.tsx';

export const GifApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball', 'The Boys', 'Breaking Bad']);

  return (
    <>
      <h2 className='GifApp-main-title'> GifApp </h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />

      <ol>
        {
          categories.map( ( category: string ) => {
            return <li key= { category }> { category } </li>
          } )
        }
      </ol>
    </>
  );
}