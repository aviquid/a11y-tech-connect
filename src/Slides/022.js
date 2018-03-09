import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import styled from 'styled-components';
import money from '../images/money.jpg';

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;

const slide = () => (
  <ContentSlide>
    <Container className="container-avi width-25">
        <h1>Improving Site Accessibility</h1>
        <ol>
            <li>
                External Audits
            </li>
            <li>
                Customer Research
            </li>
        </ol>
        <Step index={1}>
            <img className="money" src={money} alt=""/>
        </Step>
       
    </Container>
  </ContentSlide>
);


export default slide;