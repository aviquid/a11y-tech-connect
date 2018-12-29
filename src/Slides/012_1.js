
import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;
const slide = () => (
  <ContentSlide>
    <Container className="container-avi width-25">
      <h1>{slide.title}</h1>
      <Step index={1}>
        <a className="bookmyshow-a" 
        href="https://in.bookmyshow.com/" 
        target="_blank" rel="noopener noreferrer">Let's book a movie ticket</a>
      </Step>
    </Container>
  </ContentSlide>
);

slide.title = 'Manage focus efficiently.';

export default slide;