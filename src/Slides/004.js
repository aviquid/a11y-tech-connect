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
        <h1>{slide.title}</h1>
        <ol>
            <Step index={1}>
                <li>
                    No onclick Div and Span
                </li>
            </Step>
            <Step index={2}>
            <li>
                Make sure parts of controls are grouped together in the DOM.
                <ul>
                    <li>
                        The drop-down menu button and the drop-down menu itself.
                    </li>
                </ul>
            </li>
            </Step>
            <Step index={3}>
                <li>
                    Use CSS for layout, Noooo Tables!
                </li>
            </Step>
            <Step index={4}>
                <li>
                    {`All <img> tags should have an alt attribute. If its only for decorational purposes,
                        include them in the page as CSS background images`}
                </li>
            </Step>
        </ol>
        
    </Container>
  </ContentSlide>
);

slide.title = 'DOM best practices';

export default slide;