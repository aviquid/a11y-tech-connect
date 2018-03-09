import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import styled from 'styled-components';
import TitleImage from '../images/rampFunny.jpg';

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;

const slide = () => (
  <ContentSlide>
    <Container>
        <h1>{slide.title}</h1>
        <ol>
            <Step index={1}>
                <li>
                    Integrate a11y naturally and beautifully into your application.
                </li>
            </Step>
            <Step index={2}>
                <li>
                    <img src={TitleImage} alt=""/>
                </li>
            </Step>
            <Step index={3}>
                <li>
                    <strong>"Chunk"</strong> and simplify content.
                </li>
            </Step>
            <Step index={4}>
                <li>
                    Balance cognitive load Vs functionality.
                </li>
            </Step>
        </ol>
        
    </Container>
  </ContentSlide>
);

slide.title = 'An Accessible web app:';

export default slide;