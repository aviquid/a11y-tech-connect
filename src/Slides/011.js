import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;
const slide = () => (
  <ContentSlide>
    <Container className="textAlign-center semantic-tags">
      <h1>{slide.title}</h1>
      <div className="sub-heading-benefits">
        <Step index={1}>
          <h2>1. Good for SEO </h2>
          <ul>
            <li>Use only one h1 tag in a entire page</li>
          </ul>
        </Step>
        <Step index={2}>
          <h2>2. Translation tool</h2>
          <ul>
            <li>Language  attribute</li>
          </ul>
        </Step>
        <Step index={3}>
          <h2>3. Screen reader </h2>
          <ul>
            <li>NVDA </li>
            <li>Apple VoiceOver </li>
            <li>WebAnywhere  </li>
            <li><strong>Chromevox </strong></li>
          </ul>
        </Step>
      </div>
    </Container>
  </ContentSlide>
);

slide.title = 'Few more benefits';

export default slide;