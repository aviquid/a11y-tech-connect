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
            <li>
                Make sure parts of controls are grouped together in the DOM.
                <ul>
                    <li>
                        The drop-down menu button and the drop-down menu itself.
                    </li>
                </ul>
            </li>
            </Step>
            <Step index={2}>
                <li>
                    Use CSS for layout, Noooo Tables!
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

slide.title = 'DOM best practices';

export default slide;