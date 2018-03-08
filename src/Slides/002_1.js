import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const slide = () => (
  <ContentSlide>
    <Container>
        <h1 dangerouslySetInnerHTML={{__html: slide.title}} />
        <p>-Laura Carvajal</p>
    </Container>
  </ContentSlide>
);

slide.title = `Beyond <strong>not denying</strong> access, it's ensuring that access is <strong>fair</strong> for everyone!`;

export default slide;