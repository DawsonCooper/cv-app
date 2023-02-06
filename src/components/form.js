import '../styles/App.css';
import '../styles/PersonalInfoDisplay.css';
import React, { Component } from 'react';
import Display from './Display'
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
            company: '',
            role: '',
            jobDescription: '',
            from: '',
            to: '',
            university: '',
            degree: '',
            subject: '',
            eduFrom: '',
            eduTo: ''
        }
        this.userTyping = this.userTyping.bind(this);
    }

    userTyping(e, stateVar) {
        console.log(this.state)
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
            case 'company':
                this.setState({
                    company: e.target.value
                });
                break;
            case 'role':
                this.setState({
                    role: e.target.value
                });
                break;
            case 'jobDescription':
                this.setState({
                    jobDescription: e.target.value
                });
                break;
            case 'from':
                console.log(e.target)
                this.setState({
                    from: e.target.value
                });
                break;
            case 'to':
                this.setState({
                    to: e.target.value
                });
                break;
            case 'university':
                this.setState({
                    university: e.target.value
                });
                break;
            case 'degree':
                this.setState({
                    degree: e.target.value
                });
                    break;
            case 'subject':
                this.setState({
                    subject: e.target.value
                });
                    break;
            case 'eduFrom':
                this.setState({
                    eduFrom: e.target.value
                });
                    break;
            case 'eduTo':
                this.setState({
                    eduTo: e.target.value
                });
                break;
            default:
                alert('You seem to have summoned a bug refreshing and trying again should clear it up')
        }
    }
    render(){
        return(
            <div className='personal-wrapper'>
                <div className='form-wrapper'>
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
                <section className='form-wrapper'>
                    <h4>Experience</h4>
                    <form>
                        <label className='pInfo-input'>Company:
                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'company')}} placeholder='Company'></input>
                        </label>
                        <label className='pInfo-input'>Role:
                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'role')}} placeholder='Role'></input>
                        </label>
                        <label className='pInfo-input'>Job Desciption:
                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'jobDescription')}} placeholder='Description'></input>
                        </label>
                        <label className='pInfo-input'>From:
                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'from')}} placeholder='Year'></input>
                        </label>
                        <label className='pInfo-input'>To:
                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'to')}} placeholder='Year'></input>
                        </label>
                    </form>
                </section>
                <section className='form-wrapper'>
                    <h4>Education</h4>
                    <form>
                        <label className='pInfo-input'>University Name:
                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'university')}} placeholder='University'></input>
                        </label>
                        <label className='pInfo-input'>Degree:
                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'degree')}} placeholder='Degree'></input>
                        </label>
                        <label className='pInfo-input'>Subject:
                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'subject')}} placeholder='Subject'></input>
                        </label>
                        <label className='pInfo-input'>From:
                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'eduFrom')}} placeholder='Year'></input>
                        </label>
                        <label className='pInfo-input'>To:
                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'eduTo')}} placeholder='Year'></input>
                        </label>
                    </form>
                </section>
                </div>
                <Display pInfoObj={this.state} />
            </div>
        );
    }
}

