import React from 'react';
import { TitleSlide } from 'react-presents';

const slide = () => (
  <TitleSlide>
    <h1>{slide.title}</h1>
    <h2>{`"For people without disabilities, technology makes things convenient, whereas for people 
        with disabilities, it makes things possible"`}</h2>
    <h3>- Judy Heuman</h3>
  </TitleSlide>
);

slide.title = 'Wrap up quote!';

export default slide;