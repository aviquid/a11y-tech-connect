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
        <h2>"It's the right thing to do." => Never gets you a budget.</h2>
        <Step index={1}>
            <h2><strong>"Avoiding Litigation"</strong> is your only weapon ¯\_(ツ)_/¯ *wink wink*</h2>
            
        </Step>
    </Container>
  </ContentSlide>
);


export default slide;