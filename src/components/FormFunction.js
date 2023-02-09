import '../styles/App.css';
import '../styles/PersonalInfoDisplay.css';
import Display from './Display'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';

function Form (props){
    const [eduObj, addEdu] = useState([{
        id: 0,
        university: 'example',
        degree: 'example',
        subject: 'example',
        eduFrom: 'example',
        eduTo: 'example'
    }])
    const [expObj, addExp] = useState([{
        id: 0,
        company: 'example',
        role: 'example',
        jobDescription: 'example',
        from: 'example',
        to: 'example'}])
    const [person, modPerson] = useState({
        fName:'',
        lName:'',
        address:'',
        pNumber:'',
        email:'',
        description:'',
    })
    const [experience, modExperience] = useState({
        id: expObj.length,
        company: [],
        role: [],
        jobDescription: [],
        from: [],
        to: [],
    })
    const [education, modEducation] = useState({
        id: eduObj.length,
        university: [],
        degree: [],
        subject: [],
        eduFrom: [],
        eduTo: [],
    })
    

    const userTyping = (e, stateVar) => {
        switch(stateVar){
            case 'fName':
                modPerson({...person, fName: e.target.value});
                break;
            case 'lName':
                modPerson({...person, lName: e.target.value});
                break;
            case 'address':
                modPerson({...person, address: e.target.value});
                break;
            case 'pNumber':
                modPerson({...person, pNumber: e.target.value});
                break;
            case 'email':
                modPerson({...person, email: e.target.value});
                break;
            case 'description':
                modPerson({...person, description: e.target.value});
                break;
            case 'company':
                modExperience({...experience,company: e.target.value});
                break;
            case 'role':
                modExperience({...experience,role: e.target.value});
                break;
            case 'jobDescription':
                modExperience({...experience,jobDescription: e.target.value});
                break;
            case 'from':
                modExperience({...experience, from: e.target.value});
                break;
            case 'to':
                modExperience({...experience, to: e.target.value});
                break;
            case 'university':
                modEducation({...education,university: e.target.value});
                break;
            case 'degree':
                modEducation({...education,degree: e.target.value});
                    break;
            case 'subject':
                modEducation({...education, subject: e.target.value});
                    break;
            case 'eduFrom':
                modEducation({...education,eduFrom: e.target.value});
                    break;
            case 'eduTo':
                modEducation({...education,eduTo: e.target.value});
                break;
            default:
                alert('You seem to have summoned a bug refreshing and trying again should clear it up')
        }
    }

    const addNewEdu = (e) => {
        let temp = [...eduObj];
        let newObj = temp.concat(education);
        addEdu({eduObj: newObj});
        e.target.parentElement.childNodes.forEach((item, index) => {
            if (index <= 4){
                item.lastChild.value = '';
            } 
        })

    }

    const addNewExp = (e) => {
        let temp = [...expObj];
        let newObj = temp.concat(experience)
        addExp({expObj: newObj});
        e.target.parentElement.childNodes.forEach((item, index) => {
            if (index <= 4){
                item.lastChild.value = '';
            } 
        })

    }

    return(
        <div className='personal-wrapper'>
            <div className='form-wrapper'>
                <h4>Your Info</h4>
                <form>
                    <label className='pInfo-input'>First Name:
                    <input type='text' className='form-control' placeholder='First Name' onChange={(event) => {userTyping(event, 'fName')}}></input>
                    </label>
                    <label className='pInfo-input'>Last Name:
                    <input type='text' className='form-control' placeholder='Last Name' onChange={(event) => {userTyping(event, 'lName')}}></input>
                    </label>
                    <label className='pInfo-input'>Address:
                    <input type='text' className='form-control' placeholder='Address' onChange={(event) => {userTyping(event, 'address')}}></input>
                    </label>
                    <label className='pInfo-input'>Phone Number:
                    <input type='tel' className='form-control' placeholder='Phone Number' onChange={(event) => {userTyping(event, 'pNumber')}}></input>
                    </label>
                    <label className='pInfo-input'>Email: 
                    <input type='email' className='form-control' placeholder='Email' onChange={(event) => {userTyping(event, 'email')}}></input>
                    </label>
                    <label className='pInfo-input'>Description:
                    <input type='text' className='form-control' placeholder='Desciption' onChange={(event) => {userTyping(event, 'description')}}></input>
                    </label>
                </form>
                <hr/>
            <section className='form-wrapper'>
                <h4>Experience</h4>
                <form>
                    <label className='pInfo-input'>Company:
                    <input type='text' className='form-control' onChange={(event) => {userTyping(event, 'company')}} placeholder='Company'></input>
                    </label>
                    <label className='pInfo-input'>Role:
                    <input type='text' className='form-control' onChange={(event) => {userTyping(event, 'role')}} placeholder='Role'></input>
                    </label>
                    <label className='pInfo-input'>Job Desciption:
                    <input type='text' className='form-control' onChange={(event) => {userTyping(event, 'jobDescription')}} placeholder='Description'></input>
                    </label>
                    <label className='pInfo-input'>From:
                    <input type='text' className='form-control' onChange={(event) => {userTyping(event, 'from')}} placeholder='Year'></input>
                    </label>
                    <label className='pInfo-input'>To:
                    <input type='text' className='form-control' onChange={(event) => {userTyping(event, 'to')}} placeholder='Year'></input>
                    </label>
                    <button type='button'className='addNewExperience btn btn-success' onClick={(e) => {addNewExp(e)}}>Add Experience</button>
                <hr/></form>
                
            </section>
            <section className='form-wrapper'>
                <h4>Education</h4>
                <form>
                    <label className='pInfo-input'>University Name:
                    <input type='text' className='form-control' onChange={(event) => {userTyping(event, 'university')}} placeholder='University'></input>
                    </label>
                    <label className='pInfo-input'>Degree:
                    <input type='text' className='form-control' onChange={(event) => {userTyping(event, 'degree')}} placeholder='Degree'></input>
                    </label>
                    <label className='pInfo-input'>Subject:
                    <input type='text' className='form-control' onChange={(event) => {userTyping(event, 'subject')}} placeholder='Subject'></input>
                    </label>
                    <label className='pInfo-input'>From:
                    <input type='text' className='form-control' onChange={(event) => {userTyping(event, 'eduFrom')}} placeholder='Year'></input>
                    </label>
                    <label className='pInfo-input'>To:
                    <input type='text' className='form-control' onChange={(event) => {userTyping(event, 'eduTo')}} placeholder='Year'></input>
                    </label>
                    <button type='button' className='addNewEducation btn btn-success' onClick={(e) => {addNewEdu(e)}}>Add Education</button>
                </form>
            </section>
            </div>
            <Display person={person} experience={expObj} education={eduObj} />
        </div>
    );
}

export default Form