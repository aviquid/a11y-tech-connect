import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;
const slide = () => (
  <ContentSlide>
    <Container>
        <h1>{slide.title}</h1>
        <Step index={1}>
            <ul>
                <li>
                    Make sure parts of controls are grouped together in the DOM.
                    <ul>
                        <li>
                            The drop-down menu button and the drop-down menu itself.
                        </li>
                    </ul>
                </li>
            </ul>
        </Step>
    </Container>
  </ContentSlide>
);

slide.title = 'DOM best practices';

export default slide;