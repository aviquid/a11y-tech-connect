import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;
const colorSwatches = {
  label: "colors",
  listElement: [{
    value: "Gold",
    bgColor: "rgb(207, 190, 169)"
  }, {
    value: "Silver",
    bgColor: "rgb(215, 215, 215)"
  }, {
    value: "Gray",
    bgColor: "rgb(102, 102, 102)"
  }, {
    value: "Space Gray",
    bgColor: "rgb(128, 127, 132)"
  }]
}
const colorSwatches2 = {
  label: "colors2",
  listElement: [{
    value: "red",
    bgColor: "red"
  }, {
    value: "green",
    bgColor: "green"
  }, {
    value: "blue",
    bgColor: "blue"
  }, {
    value: "yellow",
    bgColor: "yellow"
  }]
}
const slide = () => (
  <ContentSlide>
    <Container>
      <h1>{slide.title}</h1>
      <Step index={1}>
        <h2>Heading</h2>
      </Step>
      <Step index={2}>
        <ul className="colorList">
          {colorSwatches.listElement.map((value, index) => {
            return (
              <li key={index}>
                <input type="radio" name="colors" value={value.value} id={colorSwatches.label+index} className="colorList-input" />
                <div className="colorList-dot" style={{ "backgroundColor": value.bgColor }}></div>
                <label htmlFor={colorSwatches.label+index} className="colorList-label">{value.value}</label>
              </li>
            )
          })}
        </ul>
      </Step>
      <Step index={3}>
        <h2>Ensure meaning is not conveyed by color alone</h2>
      </Step>
      <Step index={3}>
        <ul className="colorList">
          {colorSwatches2.listElement.map((value, index) => {
            return (
              <li key={index}>
                <input type="radio" name="colors" value={value.value} id={colorSwatches2.label+index} className="colorList-input hide" />
                <div className="colorList-dot" style={{ "backgroundColor": value.bgColor }}></div>
                <label htmlFor={colorSwatches2.label+index} className="colorList-label noText">{value.value}</label>
              </li>
            )
          })}
        </ul>
      </Step>
    </Container>
  </ContentSlide>
);

slide.title = 'Using semantic tags';

export default slide;