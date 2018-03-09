import React from 'react';
import { ContentSlide } from 'react-presents';
import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const slide = () => (
  <ContentSlide>
    <Container className="container-avi laura" >
        <h1>
          Beyond <strong>not denying</strong> access, it's ensuring that access is <strong>fair</strong> for everyone!
          <span>-Laura Carvajal</span>
        </h1>
        
    </Container>
  </ContentSlide>
);

slide.title = `Beyond <strong>not denying</strong> access, it's ensuring that access is <strong>fair</strong> for everyone!`;

export default slide;