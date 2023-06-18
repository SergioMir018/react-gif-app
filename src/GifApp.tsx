import React, { useState } from 'react';
import { AddCategory } from './components/AddCategoryComponent/AddCategory.tsx';
import { GifGrid } from './components/GifGridComponent/GifGrid.tsx';

export const GifApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']);

  return (
    <>
      <h2 className='GifApp-main-title'> GifApp </h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />

      <ol>
        {
          categories.map( ( category: string ) => (
            <GifGrid key={ category } category={ category }/>
          ))
        }
      </ol>
    </>
  );
}