import '../styles/App.css';
import '../styles/PersonalInfoDisplay.css';
import React, { Component } from 'react';
import PersonalInfoDisplay from './PersonalDisplay'
import 'bootstrap/dist/css/bootstrap.css';
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
        
        console.log(this.state.fName)
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
                </section>
                <section className='resume-display-wrapper'>
                    <h2 className='display-header'>{this.state.fName}'s Resume</h2>
                    <div className='personal-info-display'>
                        <h3>Personal Info</h3>
                        <div className='name-display-wrapper'>
                            <PersonalInfoDisplay className='fName-display' pInfoVar={this.state.fName} />
                            <PersonalInfoDisplay className='lName-display' pInfoVar={this.state.lName} />
                        </div>
                        <h5>Address</h5>
                        <PersonalInfoDisplay className='address-display' pInfoVar={this.state.address} />
                        <h5>Phone Number</h5>
                        <PersonalInfoDisplay className='pNumber-display' pInfoVar={this.state.pNumber} />
                        <h5>Email</h5>
                        <PersonalInfoDisplay className='email-display' pInfoVar={this.state.email} />
                        
                    </div>
                    <div className='desc-wrapper'>
                        <hr/>
                        <h3>Desciption</h3>
                        <PersonalInfoDisplay className='description-display' pInfoVar={this.state.description} />
                        <hr/>
                    </div>
                </section>
            </div>
        );
    }
}