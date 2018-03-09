import React from 'react';
import { ContentSlide } from 'react-presents';
import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: column;
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
        </ol>
       
    </Container>
  </ContentSlide>
);


export default slide;