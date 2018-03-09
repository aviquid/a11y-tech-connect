import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import styled from 'styled-components';
import TitleImage from '../images/train.jpg';

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 600px;
  height: 500px;
  margin-bottom: 20px;
`;
const slide = () => (
  <ContentSlide>
    <Container className="container-avi">
        <Step index={1}>
          <h1>{slide.title}</h1>
        </Step>
        <Step index={2}>
            <h2>Accessibility in Web development means enabling as many people as possible to use the Web, even when those people's abilities are limited in some way</h2>
        </Step>
        <Step index={3}>
          <Image src={TitleImage} alt=""/>
        </Step>
    </Container>
  </ContentSlide>
);

slide.title = 'What is accessibility?';

export default slide;