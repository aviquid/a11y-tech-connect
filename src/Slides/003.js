import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;
const NoSenseArticle = styled.article`
    display: flex;
    flex-flow: row nowrap;
`;
const NoSenseSpan = styled.span`
  padding-right: 5px;
  order: ${props => props.order};
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
            <NoSenseArticle tabIndex="0">
                <NoSenseSpan order="1" >Our</NoSenseSpan>
                <NoSenseSpan order="7" >awesome.</NoSenseSpan>
                <NoSenseSpan order="2" >XT</NoSenseSpan>
                <NoSenseSpan order="3" >team</NoSenseSpan>
                <NoSenseSpan order="4" >is</NoSenseSpan>
                <NoSenseSpan order="5" >now</NoSenseSpan>
                <NoSenseSpan order="6" >freaking</NoSenseSpan>
            </NoSenseArticle>
        </Step>
    </Container>
  </ContentSlide>
);

slide.title = 'Breaking the eyes!';

export default slide;