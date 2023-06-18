import { GifAPIData, GifGridProps } from "../components/GifGridComponent/GifGrid";


export const getGifs = async( gifSearch: string ) => {
  
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( gifSearch ) }{}&limit=10&api_key=D8H1MJ9wPYEBqN3JyTB8fLKyGwXI0LUD`;

  const resp = await fetch( url );
  const { data } = await resp.json();
  
  const gifs = data.map( ( img: GifAPIData ) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  } );
  
  return gifs;
}