import '../styles/App.css';
import React, { Component } from 'react';
import PersonalInfoDisplay from './PersonalDisplay';
import ExperienceDisplay from './ExperienceDisplay';
import EducationDisplay from './EducationDisplay';
export default class Display extends Component {
    
    render(){
        const eduDiv = [];
        const expDiv=[];
        try{
            this.props.education.forEach((item) =>{
                eduDiv.push(
                <div key={`edu${item.id}`}>
                    <div className='display-section-wrapper'> 
                        <EducationDisplay key={`uni${item.id}`} varName="University" eduInfoVar={item.university} />
                        <EducationDisplay key={`degree${item.id}`} varName="Degree" eduInfoVar={item.degree} />
                        <EducationDisplay key={`subject${item.id}`} varName="Subject" eduInfoVar={item.subject} />
                        <EducationDisplay key={`eduFrom${item.id}`} varName="From" eduInfoVar={item.eduFrom} />
                        <EducationDisplay key={`eduTo${item.id}`} varName="To" eduInfoVar={item.eduTo} />

                    </div>
                    <hr/>
                </div>)
            })
        }catch(error){
            if (error.message === 'this.props.education.forEach is not a function'){
                this.props.education.eduObj.forEach((item) =>{
                    eduDiv.push(
                    <div key={`edu${item.id}`}>
                        <div className='display-section-wrapper'> 
                            <EducationDisplay key={`uni${item.id}`} varName="University" eduInfoVar={item.university} />
                            <EducationDisplay key={`degree${item.id}`} varName="Degree" eduInfoVar={item.degree} />
                            <EducationDisplay key={`subject${item.id}`} varName="Subject" eduInfoVar={item.subject} />
                            <EducationDisplay key={`eduFrom${item.id}`} varName="From" eduInfoVar={item.eduFrom} />
                            <EducationDisplay key={`eduTo${item.id}`} varName="To" eduInfoVar={item.eduTo} />
    
                        </div>
                        <hr/>
                    </div>)
                })
            }
        }
        try{
            this.props.experience.forEach((item) => {
                expDiv.push(
                <div key={`exp${item.id}`}>
                    <div className='display-section-wrapper'> 
                        <ExperienceDisplay key={`company${item.id}`} varName='Company' expInfoVar={item.company} />
                        <ExperienceDisplay key={`role${item.id}`} varName='Role' expInfoVar={item.role} />
                        <ExperienceDisplay key={`expFrom${item.id}`} varName='From' expInfoVar={item.from} />
                        <ExperienceDisplay key={`expTo${item.id}`} varName='To' expInfoVar={item.to} />
                    </div>
                    <ExperienceDisplay key={`expJobDesc${item.id}`} varName='Job Description' expInfoVar={item.jobDescription} /><hr/>
                </div>
                )
            })
        }catch(error){
            if (error.message === 'this.props.experience.forEach is not a function'){
                this.props.experience.expObj.forEach((item) => {
                    expDiv.push(
                    <div key={`exp${item.id}`}>
                        <div className='display-section-wrapper'> 
                            <ExperienceDisplay key={`company${item.id}`} varName='Company' expInfoVar={item.company} />
                            <ExperienceDisplay key={`role${item.id}`} varName='Role' expInfoVar={item.role} />
                            <ExperienceDisplay key={`expFrom${item.id}`} varName='From' expInfoVar={item.from} />
                            <ExperienceDisplay key={`expTo${item.id}`} varName='To' expInfoVar={item.to} />
                        </div>
                        <ExperienceDisplay key={`expJobDesc${item.id}`} varName='Job Description' expInfoVar={item.jobDescription} /><hr/>
                    </div>
                    )
                })
            }
        }
        
        return (
            <section className='resume-display-wrapper'>
                    <h2 className='display-header'>{this.props.person.fName}'s Resume</h2>
                    <div className='personal-info-display'>
                        <h3>Personal Info</h3>
                        <div className='name-display-wrapper'>
                            <PersonalInfoDisplay className='fName-display' pInfoVar={this.props.person.fName} />
                            <PersonalInfoDisplay className='lName-display' pInfoVar={this.props.person.lName} /> 
                        </div>
                        <hr/>
                        <PersonalInfoDisplay className='address-display' varName='Address' pInfoVar={this.props.person.address} />
                        <hr/>
                        <PersonalInfoDisplay className='pNumber-display' varName='Phone Number'  pInfoVar={this.props.person.pNumber} />
                        <hr/>
                        <PersonalInfoDisplay className='email-display' varName='Email' pInfoVar={this.props.person.email} />
                    </div>
                    <div className='desc-wrapper'>
                        <hr/>
                        <PersonalInfoDisplay className='description-display'varName='Bio'  pInfoVar={this.props.person.description} />
                        <hr/>
                    {eduDiv}
                    
                    {expDiv}
                    
                    </div>
                    
                </section>
        )
    }
}
