import React, { Component } from 'react';
import spinnerImage from '../spinnerImage.gif';

export class Spinner extends Component {
    render() {
        return (
            <div>
             <img src={spinnerImage} alt="spinner"></img>
            </div>
        )
    }
}

export default Spinner
