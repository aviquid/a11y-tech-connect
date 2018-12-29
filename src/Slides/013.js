import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;
class slide extends React.Component {
  constructor() {
    super();
    this.state = {
      overlay: false,
      value: "",
      message: null
    }
  }
  handleModalOpen = () => {
    this.setState({ overlay: true }, function () {
      document.querySelector("#overlayClose").focus()
    });

  }
  handleModalClose = () => {
    this.setState({ overlay: false }, function () {
      document.querySelector(".open-modal-button").focus()
    })
  }
  handleTrapTabKey() {
    document.querySelector("#overlayClose").focus();
  }
  handleChange = ({ target: { value } }) => {
    let message;
    const length = value.length;
    if (length < 5) {
      message = "Bad password";
    } else if (length >= 5 && length < 12) {
      message = "Moderate password";
    } else {
      message = "Good password";
    }
    this.setState({
      value,
      message
    })
  }
  render() {
    return (
      <ContentSlide>
        <Container className="textAlign-center modal-or-overlay">
          <h1>{slide.title}</h1>
          <Step index={1}>
            <h2>Accessible Modal</h2>
            <button className="open-modal-button" onClick={this.handleModalOpen} aria-label="Open overlay modal">Open Modal</button>
            <div className={`overlay-container ${this.state.overlay ? "show" : "hide"}`}>
              <div className="overlay-modal">
                <div className="overlay-wrapper">
                  <button id="overlayClose" className="modal-close" aria-label="Close modal" onClick={this.handleModalClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="square"><path d="M.665.833l18.82 18.821M.665 19.654L19.485.834"></path></g></svg>
                  </button>
                  <h2 className="heading">I'm a accessible Modal</h2>
                  <div className="sub-heading">
                    <ul>
                      <li>
                        <label className="sample-input-label" htmlFor="sampleInput">Sample Input</label>
                        <input className="sampleInput" id="sampleInput" type="text" />
                      </li>
                      <li>
                        <span className="sample-input-label">Sample Anchor</span>
                        <a href="https://webaim.org/" 
                        target="_blank" rel="noopener noreferrer" >Click Here</a>
                      </li>
                    </ul>
                    <p></p>
                  </div>
                  <span tabIndex="0" onFocus={this.handleTrapTabKey}></span>
                </div>
              </div>
            </div>
          </Step>
          <Step index={2}>
            <div className="aria-live">
              <h2>Aria live</h2>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <div tabIndex="0" aria-live="polite">
                {this.state.message}
              </div>
            </div>
          </Step>
        </Container>
      </ContentSlide>
    )
  }
}


slide.title = 'Modal or Overlay';

export default slide;