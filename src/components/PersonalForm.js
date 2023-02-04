import '../styles/App.css';
import React, { Component } from 'react';

export default class PersonalInfoForm extends Component {
    constructor() {
        super();
    }
    render(){
        return(
            <div className='personal-form-wrapper'>
                <form>
                    <input type='text' className='' placeholder='First Name'></input>
                </form>
            </div>
        );
    }
}