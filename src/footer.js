import React, { Component } from 'react';
import './footer.css';




class footer extends Component {
    render(){
        return (
            <div className='f3 tc' id='footer'>
            <h4>This is my footer</h4>
            <p>{this.props.social}</p>
            </div>
        );
    }
}

export default footer;