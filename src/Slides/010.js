import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import styled from 'styled-components';

import TitleImage from '../images/why.jpg';
import mouse from '../images/mouse-stick.jpg';
import googleSearch from '../images/google-search.PNG';

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;
const slide = () => (
  <ContentSlide>
    <Container className="textAlign-center semantic-tags">
      <h1>{slide.title}</h1>
      <div className="sub-heading-benefits">
        <Step index={1}>
          <h2>1. Chrome Extension </h2>
          <ul>
            <li>NoCoffee</li>
            <li>aXe-Coconut</li>
          </ul>
        </Step>
        <Step index={2}>
          <h2>2. Proper semantic</h2>
          <ul className="meme-why-img">
            <li>div div div all the way</li>
            <li>USe aria for extra info</li>
            <li><img src={TitleImage} alt="" /></li>
          </ul>
        </Step>
        <Step index={3}>
          <h2>3. Proper labeling </h2>
        </Step>
        <Step index={4}>
          <ul className="google-search">
            <li><img src={googleSearch} alt="" /> </li>
          </ul>
        </Step>
        <Step index={5}>
          <h2>4. Chrome audit </h2>
          <ul className="meme-why-img">
            <li>Accessibility audit</li>
          </ul>
        </Step>
        <Step index={6}>
          <h2>5. Font-size </h2>
          <ul className="meme-why-img">
            <li>Google Settings - Appearance</li>
          </ul>
        </Step>
      </div>
    </Container>
  </ContentSlide>
);

slide.title = 'Good to know';

export default slide;