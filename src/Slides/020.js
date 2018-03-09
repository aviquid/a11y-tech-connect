import React, { Component } from 'react';
import { ContentSlide } from 'react-presents';
import styled from 'styled-components';

const Container = styled.article`
  display: flex;
  flex-direction: column;
`;


class slide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            message: null
        }
    }

    handleChange = ({target : {value}}) => {
        let message;
        const length = value.length;
        if(length < 5) {
            message = "Bad password";
        } else if(length >= 5 && length < 12) {
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
                <Container>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <div tabIndex="0" aria-live="polite"> 
                        {this.state.message}
                    </div>
                </Container>
            </ContentSlide>
        )
    }
}

export default slide;