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
        <ol>
            <Step index={1}>
                <li>Blind users</li>
            </Step>
            <Step index={2}>
                <li>Users with low vision </li>
            </Step>
            <Step index={3}>
                <li>Motor impaired users</li>
            </Step>
        </ol>
        <Step index={4}>
            <p>One thing in common - No Mouse!</p>
        </Step>
        <Step index={5}>
            <h2>Disability</h2>
            <h2>15% of the population</h2>
        </Step>
    </Container>
  </ContentSlide>
);

slide.title = `Beyond <strong>not denying</strong> access, it's ensuring that access is <strong>fair</strong> for everyone!`;

export default slide;