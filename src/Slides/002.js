import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;
const slide = () => (
  <ContentSlide>
    <Container>
        <h1>{slide.title}</h1>
        <Step index={1}>
            <ul>
                <li>Keyboard only users navigate the page in DOM order.</li>
                <li>So the dom is the user's mental image of the document structure.</li>
            </ul>
        </Step>
        <Step index={2}>
            <ul>
                <li>No left or right, only up and down the DOM.</li>
            </ul>
        </Step>
    </Container>
  </ContentSlide>
);

slide.title = 'Breaking the eyes!';

export default slide;