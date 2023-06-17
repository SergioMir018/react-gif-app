import React, { useState } from 'react';
import { AddCategory } from './components/AddCategoryComponent/AddCategory.tsx';

export const GifApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball', 'The Boys', 'Breaking Bad']);


  // const handleAddCategory = () => {
  //   const newCategory: string = 'Thing 1';
  //   setCategories( categories.concat( newCategory ) );
  // }

  return (
    <>
      <h2 className='GifApp-main-title'> GifApp </h2>
      <AddCategory />
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