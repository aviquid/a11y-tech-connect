import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;
const NoSenseArticle = styled.article`
  position: relative;
`;
const NoSenseSpan = styled.span`
  position: absolute;
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
        <Step index={3}>
            <NoSenseArticle>
                The
                <NoSenseSpan id="avinash"> Avinash </NoSenseSpan>
                <NoSenseSpan id="class"> Class </NoSenseSpan>
            </NoSenseArticle>
        </Step>
    </Container>
  </ContentSlide>
);

slide.title = 'Breaking the eyes!';

export default slide;