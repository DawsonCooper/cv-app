import '../styles/App.css';
import '../styles/PersonalInfoDisplay.css';
import React, { Component } from 'react';
import PersonalInfoDisplay from './PersonalDisplay'
import 'bootstrap/dist/css/bootstrap.css';
import ExperienceForm from './ExperienceForm' 
export default class PersonalInfoForm extends Component {
    constructor() {
        super();
        this.state = {
            fName:'',
            lName:'',
            address:'',
            pNumber:'',
            email:'',
            description:'',
        }
        this.userTyping = this.userTyping.bind(this);
    }

    userTyping(e, stateVar) {
        switch(stateVar){
            case 'fName':
                this.setState({
                    fName: e.target.value
                });
                break;
            case 'lName':
                this.setState({
                    lName: e.target.value
                });
                break;
            case 'address':
                this.setState({
                    address: e.target.value
                });
                break;
            case 'pNumber':
                console.log(e.target)
                this.setState({
                    pNumber: e.target.value
                });
                break;
            case 'email':
                this.setState({
                    email: e.target.value
                });
                break;
            case 'description':
                console.log(e.target)
                this.setState({
                    description: e.target.value
                });
                break;
            default:
                alert('You seem to have summoned a bug refreshing and trying again should clear it up')
        }
    }
    render(){
        return(
            <div className='personal-wrapper'>
                <section className='form-wrapper'>
                    <h4>Your Info</h4>
                    <form>
                        <label className='pInfo-input'>First Name:
                        <input type='text' className='form-control' placeholder='First Name' onChange={(event) => {this.userTyping(event, 'fName')}}></input>
                        </label>
                        <label className='pInfo-input'>Last Name:
                        <input type='text' className='form-control' placeholder='Last Name' onChange={(event) => {this.userTyping(event, 'lName')}}></input>
                        </label>
                        <label className='pInfo-input'>Address:
                        <input type='text' className='form-control' placeholder='Address' onChange={(event) => {this.userTyping(event, 'address')}}></input>
                        </label>
                        <label className='pInfo-input'>Phone Number:
                        <input type='tel' className='form-control' placeholder='Phone Number' onChange={(event) => {this.userTyping(event, 'pNumber')}}></input>
                        </label>
                        <label className='pInfo-input'>Email: 
                        <input type='email' className='form-control' placeholder='Email' onChange={(event) => {this.userTyping(event, 'email')}}></input>
                        </label>
                        <label className='pInfo-input'>Description:
                        <input type='text' className='form-control' placeholder='Desciption' onChange={(event) => {this.userTyping(event, 'description')}}></input>
                        </label>
                    </form>
                    <ExperienceForm />
                </section>
                <section className='resume-display-wrapper'>
                    <h2 className='display-header'>{this.state.fName}'s Resume</h2>
                    <div className='personal-info-display'>
                        <h3>Personal Info</h3>
                        <div className='name-display-wrapper'>
                            <PersonalInfoDisplay className='fName-display' pInfoVar={this.state.fName} />
                            <PersonalInfoDisplay className='lName-display' pInfoVar={this.state.lName} /> 
                        </div>
                        <hr/>
                        <PersonalInfoDisplay className='address-display' varName='Address' pInfoVar={this.state.address} />
                        <hr/>
                        <PersonalInfoDisplay className='pNumber-display' varName='Phone Number'  pInfoVar={this.state.pNumber} />
                        <hr/>
                        <PersonalInfoDisplay className='email-display' varName='Email' pInfoVar={this.state.email} />
                    </div>
                    <div className='desc-wrapper'>
                        <hr/>
                        <PersonalInfoDisplay className='description-display'varName='Description'  pInfoVar={this.state.description} />
                        <hr/>
                    </div>
                </section>
            </div>
        );
    }
}