import React from "react";
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridComponent/GifGridItemComponent/GifGridItem';

describe('Tests in <GifGridItem />', () => {
  const gif = { 
    title: 'Test GIF', 
    url: 'https://example.com/image.gif', 
    id: 'some-id' 
  };
  
  const wrapper = shallow(<GifGridItem gif={gif} />);

  test('should show the component correctly', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('should have a paragraph in the title', () => {
    const paragraph = wrapper.find('p');

    expect(paragraph.text().trim()).toBe( gif.title );  
  });
  
  test('should have an image equal to the url and alt of the props', () => {
    const img = wrapper.find('img');
    
    const { src, alt } = img.props();

    expect( src ).toBe( gif.url );
    expect( alt ).toBe( gif.title );
  });
});

