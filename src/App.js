import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Presentation, Slide, DropDownNav } from 'react-presents'

// Load all slides in the Slides folder
const slides = require.context('./Slides/', false, /\.js$/)
  .keys()
  .map((filename) => filename.replace('./', ''))
  .map((filename) => require(`./Slides/${filename}`).default);
class App extends Component {
  render() {
    return (
      <Presentation>
        {slides.map((Component, index) => (
          <Slide
            component={Component}
            key={index}
          />
        ))}
      </Presentation>
    );
  }
}

export default App;
