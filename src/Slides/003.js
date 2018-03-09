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
    <Container className="container-avi width-25">
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
                Our
                <NoSenseSpan id="awesome" tabIndex="0">awesome</NoSenseSpan>
                <NoSenseSpan id="XT" tabIndex="0">XT</NoSenseSpan>
                <NoSenseSpan id="team" tabIndex="0">team</NoSenseSpan>
                <NoSenseSpan id="is" tabIndex="0">is</NoSenseSpan>
                <NoSenseSpan id="now" tabIndex="0">now</NoSenseSpan>
                <NoSenseSpan id="freaking" tabIndex="0">freaking</NoSenseSpan>
            </NoSenseArticle>
        </Step>
    </Container>
  </ContentSlide>
);

slide.title = 'Breaking the eyes!';

export default slide;