import '../styles/App.css';
import React, { Component } from 'react';

export default class EducationDisplay extends Component {
    render (){
        return (
            <div className='education-display-div'>
                <h5>{this.props.varName}</h5>
                {this.props.eduInfoVar}
            </div>
        )
    }
    
}
