import '../styles/App.css';
import React, { Component } from 'react';


export default class ExperienceDisplay extends Component {
    
    render() {
        return(
            <div className='experience-display-div'>
                <h5>{this.props.varName}</h5>
                {this.props.expInfoVar}
            </div>
        )
    }
}
