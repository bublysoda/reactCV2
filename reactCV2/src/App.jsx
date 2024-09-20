import { useState } from 'react'

import './App.css'

export function FormPersonal(){
  return <div className="formPersonal">
    <h3>Personal Info</h3>
    <label htmlFor="fName">Enter your first name:</label>
    <input type='text' id='fName' placeholder='John'/>
    <br></br>
    <label htmlFor="lName">Enter your last name:</label>
    <input type='text' id='lName' placeholder='Smith'/>
    <br></br>
    <label htmlFor="email">Enter your email:</label>
    <input type='email' id='email' placeholder='johnsmith@gmail.com'/>
    <br></br>
    <label htmlFor="phone">Enter your phone number:</label>
    <input type='tel' id='phone' placeholder='123-456-7890'/>
    <br></br>
  </div>
}

export function FormSchool(){
  return <div className="formEducation">
    <h3>Education</h3>
    <label htmlFor="school">Enter the name of your educational institution:</label>
    <input type='text' id='school' placeholder='Donda Academy'/>
    <br></br>
    <label htmlFor="level">Enter the level of education obtained here:</label>
    <input type='text' id='level' placeholder='Bachelors'/>
    <br></br>
    <label htmlFor="completeDay">Enter when you finished attending here:</label>
    <input type='month' id='completeDay' placeholder='September 2001'/>
    <br></br>
  </div>
}

export function FormWork(){
  return <div className="formWork">
    <h3>Prior Work Experience</h3>
    <label htmlFor="job">Enter the company and position at your prior job:</label>
    <input type='text' id='job' placeholder='Janitor at Hotel California'/>
    <br></br>
    <label htmlFor="startDay">Enter the day you started working here:</label>
    <input type='month' id='startDay' placeholder='September 2002'/>
    <br></br>
    <label htmlFor="endDay">Enter the day you stopped working here, or the current day if you still work here:</label>
    <input type='month' id='endDay' placeholder='September 2003'/>
    <br></br>
  </div>
}
