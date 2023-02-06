import '../styles/App.css';
import React, { Component } from 'react';
import PersonalInfoDisplay from './PersonalDisplay';
import ExperienceDisplay from './ExperienceDisplay';
import EducationDisplay from './EducationDisplay';
export default class Display extends Component {
    
    render(){
        return <section className='resume-display-wrapper'>
                    <h2 className='display-header'>{this.props.pInfoObj.fName}'s Resume</h2>
                    <div className='personal-info-display'>
                        <h3>Personal Info</h3>
                        <div className='name-display-wrapper'>
                            <PersonalInfoDisplay className='fName-display' pInfoVar={this.props.pInfoObj.fName} />
                            <PersonalInfoDisplay className='lName-display' pInfoVar={this.props.pInfoObj.lName} /> 
                        </div>
                        <hr/>
                        <PersonalInfoDisplay className='address-display' varName='Address' pInfoVar={this.props.pInfoObj.address} />
                        <hr/>
                        <PersonalInfoDisplay className='pNumber-display' varName='Phone Number'  pInfoVar={this.props.pInfoObj.pNumber} />
                        <hr/>
                        <PersonalInfoDisplay className='email-display' varName='Email' pInfoVar={this.props.pInfoObj.email} />
                    </div>
                    <div className='desc-wrapper'>
                        <hr/>
                        <PersonalInfoDisplay className='description-display'varName='Description'  pInfoVar={this.props.pInfoObj.description} />
                        <hr/>
                    <div className='display-section-wrapper'>
                        <ExperienceDisplay varName='Company' expInfoVar={this.props.pInfoObj.company} />
                        <ExperienceDisplay varName='Role' expInfoVar={this.props.pInfoObj.role} />

                        <ExperienceDisplay varName='From' expInfoVar={this.props.pInfoObj.from} />
                        <ExperienceDisplay varName='To' expInfoVar={this.props.pInfoObj.to} />
                    </div>
                    <ExperienceDisplay varName='Job Description' expInfoVar={this.props.pInfoObj.jobDescription} />
                    <hr/>
                    
                    
                    <div className='display-section-wrapper'>
                        <EducationDisplay varName="University" eduInfoVar={this.props.pInfoObj.university} />
                        <EducationDisplay varName="Degree" eduInfoVar={this.props.pInfoObj.degree} />
                        <EducationDisplay varName="Subject" eduInfoVar={this.props.pInfoObj.subject} />
                        <EducationDisplay varName="From" eduInfoVar={this.props.pInfoObj.eduFrom} />
                        <EducationDisplay varName="To" eduInfoVar={this.props.pInfoObj.eduTo} />
                        
                    </div>
                    <hr/>
                    </div>

                </section>


    }
}
