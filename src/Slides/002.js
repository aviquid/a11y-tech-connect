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
        <ul>
            <Step index={1}>
                <li>Keyboard only users navigate the page in DOM order.</li>
            </Step>
            <Step index={2}>
                <li>
                    So the DOM is the user's mental image of the document structure.
                    <ul>
                        <li>No left or right, only up and down the DOM</li>
                    </ul>
                </li>
            </Step>
        </ul>
    </Container>
  </ContentSlide>
);

slide.title = 'Breaking the eyes!';

export default slide;