//import '../styles/App.css';
//import '../styles/PersonalInfoDisplay.css';
//import React, { Component } from 'react';
//import Display from './Display'
//import 'bootstrap/dist/css/bootstrap.css';
//
//export default class PersonalInfoForm extends Component {
//    constructor() {
//        super();
//        this.state = {
//            fName:'',
//            lName:'',
//            address:'',
//            pNumber:'',
//            email:'',
//            description:'',
//            company: [],
//            role: [],
//            jobDescription: [],
//            from: [],
//            to: [],
//            expNest: [],
//            university: [],
//            degree: [],
//            subject: [],
//            eduFrom: [],
//            eduTo: [],
//            eduNest: []
//        }
//        this.userTyping = this.userTyping.bind(this);
//        this.addNewEdu = this.addNewEdu.bind(this);
//        this.addNewExp = this.addNewExp.bind(this);
//    }
//    addNewExp(e){
//        this.setState({
//            expNest: this.state.expNest.concat({
//                id: this.state.expNest.length,
//                company: this.state.company,
//                role: this.state.role,
//                jobDescription: this.state.jobDescription,
//                from: this.state.from,
//                to: this.state.to
//            })
//        })
//        e.target.parentElement.childNodes.forEach((item, index) => {
//            if (index <= 4){
//                item.lastChild.value = ''
//            } 
//        })
//        
//    }
//    addNewEdu(e){
//        this.setState({
//            eduNest: this.state.eduNest.concat({
//                id: this.state.eduNest.length,
//                university: this.state.university,
//                degree: this.state.degree,
//                subject: this.state.subject,
//                eduFrom : this.state.eduFrom,
//                eduTo: this.state.eduTo
//            })
//        })
//        e.target.parentElement.childNodes.forEach((item, index) => {
//            if (index <= 4){
//                item.lastChild.value = ''
//            } 
//        })
//    }
//
//    userTyping(e, stateVar) {
//        switch(stateVar){
//            case 'fName':
//                this.setState({
//                    fName: e.target.value
//                });
//                break;
//            case 'lName':
//                this.setState({
//                    lName: e.target.value
//                });
//                break;
//            case 'address':
//                this.setState({
//                    address: e.target.value
//                });
//                break;
//            case 'pNumber':
//                this.setState({
//                    pNumber: e.target.value
//                });
//                break;
//            case 'email':
//                this.setState({
//                    email: e.target.value
//                });
//                break;
//            case 'description':
//                this.setState({
//                    description: e.target.value
//                });
//                break;
//            case 'company':
//                let compArr = [e.target.value];
//                this.setState({
//                    company: compArr
//                });
//                break;
//            case 'role':
//                let roleArr = [e.target.value]
//                this.setState({
//                    role: roleArr
//                });
//                break;
//            case 'jobDescription':
//                let jobDescArr= [e.target.value]
//                this.setState({
//                    jobDescription: jobDescArr
//                });
//                break;
//            case 'from':
//                let jobFromArr = [e.target.value]
//                
//                this.setState({
//                    from: jobFromArr
//                });
//                break;
//            case 'to':
//                let jobToArr = [e.target.value]
//                this.setState({
//                    to: jobToArr
//                });
//                break;
//            case 'university':
//                let uniArr = [e.target.value]
//                this.setState({
//                    university: uniArr
//                });
//                break;
//            case 'degree':
//                let degreeArr = [e.target.value]
//                this.setState({
//                    degree: degreeArr
//                });
//                    break;
//            case 'subject':
//                let subArr = [e.target.value]
//                this.setState({
//                    subject: subArr
//                });
//                    break;
//            case 'eduFrom':
//                let eduFromArr = [e.target.value]
//                this.setState({
//                    eduFrom: eduFromArr
//                });
//                    break;
//            case 'eduTo':
//                let eduToArr = [e.target.value]
//                this.setState({
//                    eduTo: eduToArr
//                });
//                break;
//            default:
//                alert('You seem to have summoned a bug refreshing and trying again should clear it up')
//        }
//    }
//    render(){
//        return(
//            <div className='personal-wrapper'>
//                <div className='form-wrapper'>
//                    <h4>Your Info</h4>
//                    <form>
//                        <label className='pInfo-input'>First Name:
//                        <input type='text' className='form-control' placeholder='First Name' onChange={(event) => {this.userTyping(event, 'fName')}}></input>
//                        </label>
//                        <label className='pInfo-input'>Last Name:
//                        <input type='text' className='form-control' placeholder='Last Name' onChange={(event) => {this.userTyping(event, 'lName')}}></input>
//                        </label>
//                        <label className='pInfo-input'>Address:
//                        <input type='text' className='form-control' placeholder='Address' onChange={(event) => {this.userTyping(event, 'address')}}></input>
//                        </label>
//                        <label className='pInfo-input'>Phone Number:
//                        <input type='tel' className='form-control' placeholder='Phone Number' onChange={(event) => {this.userTyping(event, 'pNumber')}}></input>
//                        </label>
//                        <label className='pInfo-input'>Email: 
//                        <input type='email' className='form-control' placeholder='Email' onChange={(event) => {this.userTyping(event, 'email')}}></input>
//                        </label>
//                        <label className='pInfo-input'>Description:
//                        <input type='text' className='form-control' placeholder='Desciption' onChange={(event) => {this.userTyping(event, 'description')}}></input>
//                        </label>
//                    </form>
//                    <hr/>
//                <section className='form-wrapper'>
//                    <h4>Experience</h4>
//                    <form>
//                        <label className='pInfo-input'>Company:
//                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'company')}} placeholder='Company'></input>
//                        </label>
//                        <label className='pInfo-input'>Role:
//                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'role')}} placeholder='Role'></input>
//                        </label>
//                        <label className='pInfo-input'>Job Desciption:
//                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'jobDescription')}} placeholder='Description'></input>
//                        </label>
//                        <label className='pInfo-input'>From:
//                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'from')}} placeholder='Year'></input>
//                        </label>
//                        <label className='pInfo-input'>To:
//                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'to')}} placeholder='Year'></input>
//                        </label>
//                        <button type='button'className='addNewExperience btn btn-success' onClick={(e) => {this.addNewExp(e)}}>Add Experience</button>
//                    <hr/></form>
//                    
//                </section>
//                <section className='form-wrapper'>
//                    <h4>Education</h4>
//                    <form>
//                        <label className='pInfo-input'>University Name:
//                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'university')}} placeholder='University'></input>
//                        </label>
//                        <label className='pInfo-input'>Degree:
//                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'degree')}} placeholder='Degree'></input>
//                        </label>
//                        <label className='pInfo-input'>Subject:
//                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'subject')}} placeholder='Subject'></input>
//                        </label>
//                        <label className='pInfo-input'>From:
//                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'eduFrom')}} placeholder='Year'></input>
//                        </label>
//                        <label className='pInfo-input'>To:
//                        <input type='text' className='form-control' onChange={(event) => {this.userTyping(event, 'eduTo')}} placeholder='Year'></input>
//                        </label>
//                        <button type='button' className='addNewEducation btn btn-success' onClick={(e) => {this.addNewEdu(e)}}>Add Education</button>
//                    </form>
//                </section>
//                </div>
//                <Display pInfoObj={this.state} />
//            </div>
//        );
//    }
//}

