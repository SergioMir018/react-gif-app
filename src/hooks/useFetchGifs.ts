import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category: string ) => {

  const [gifs, setGifs] = useState({
    data: [],
    loading: true
  });

  useEffect( () => {

    getGifs( category )
      .then( img => {
        setGifs({
          data: img,
          loading: false
        })
      });

  }, [ category ]);

return gifs;

}
