import '../styles/App.css';
import React, { Component } from 'react';
import ExperienceDisplay from './ExperienceDisplay';
export default class ExperienceForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            company: '',
            role: '',
            jobDescription: '',
            from: '',
            to: ''
        }
        this.userTyping = this.userTyping.bind(this);
    }
    userTyping(e, stateVar) {
        switch(stateVar){
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
            default:
                alert('You seem to have summoned a bug refreshing and trying again should clear it up')
        }
    }
    render() {
        return (
            <div>
                <section>
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
                <section className='experience-display-wrapper'>
                    <ExperienceDisplay varName='Company' expInfoVar={this.state.company} />
                    <ExperienceDisplay varName='Role' expInfoVar={this.state.role} />
                    <ExperienceDisplay varName='Job Description' expInfoVar={this.state.jobDescription} />
                    <ExperienceDisplay varName='From' expInfoVar={this.state.from} />
                    <ExperienceDisplay varName='To' expInfoVar={this.state.to} />
                </section>
            </div>
        )
    }
}
