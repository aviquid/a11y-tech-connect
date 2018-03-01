import React from 'react';
import { TitleSlide } from 'react-presents';
import styled from 'styled-components';

const Container = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Spacer = styled.span`
  width: 3rem;
`;

const Icon = styled.i`
  font-size: 2rem !important;
  line-height: 2rem !important;
  margin: 0 0.5rem;
  color: #777872;
`;

const slide = () => (
  <TitleSlide>
    <h1>{slide.title}</h1>
    <h2>
      <a href='https://www.github.com/aviquid/a11y-tech-connect'>github.com/aviquid/a11y-tech-connect</a>
    </h2>
    <Container>
      <Icon className='fa fa-github' /> <a href='https://www.github.com/aviquid'>@aviquid</a>
      <Spacer />
      <Icon className='fa fa-github' /> <a href='https://www.github.com/arkadyuti'>@arkadyuti</a>
    </Container>
  </TitleSlide>
);

slide.title = 'Breaking the eyes!';

export default slide;