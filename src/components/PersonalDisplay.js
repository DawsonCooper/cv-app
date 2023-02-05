import '../styles/App.css';
import React, { Component } from 'react';

export default class PersonalDisplay extends Component {
    
    render(){
        return (
            <div className='personal-info-display-div'>
                <h5>{this.props.varName}</h5>
                {this.props.pInfoVar}
            </div>
        )
    }
}
