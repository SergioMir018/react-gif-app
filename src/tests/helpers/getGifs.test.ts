import { getGifs } from '../../helpers/getGifs';


describe('Tests with getGifs.ts', () => {
  test('should fetch 10 elements', async() => {
    const gifs = await getGifs('dragonfly');
  
    expect( gifs.length ).toBe( 10 );
  });
  
  test('should fetch 0 elements', async() => {
    const gifs = await getGifs('');
  
    expect( gifs.length ).toBe( 0 );
  });
});
