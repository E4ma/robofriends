import React, { Component } from 'react';
import './hello.css';

class hello extends Component {
    render(){
        return(
            <div className='f1 tc'>
             <h1>Hello World</h1>
             <p>{this.props.greeting}</p>
             </div>
        );
    }
}

//if we want another file to use it and want to export only one thing

export default hello;

