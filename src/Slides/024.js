import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import styled from 'styled-components';
import LoveKeyboard from '../images/loveKeyboard.jpg';

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 300px;
  height: 200px;
  margin-bottom: 20px;
  display:block;
`;

const slide = () => (
  <ContentSlide>
    <Container>
        <ol>
            <li>
                External Audits
            </li>
            <li>
                Customer Research
            </li>
           
            
            <li>
                <Step index={1}>
                    <Image src={LoveKeyboard} alt=""/>
                    DIY - 
                </Step>
                <Step index={2}>
                    "Tools are valuable, but they're no replacement for knowledgeable practitioners."
                </Step>
            </li>
            
        </ol>
       
    </Container>
  </ContentSlide>
);


export default slide;