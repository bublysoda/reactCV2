import { useState } from 'react'

import './App.css'

export function formBlank(){
  return <div className="form">
    <label htmlFor="fName">Enter your first name:</label>
    <input type='text' id='fName' placeholder='John'/>
    <label htmlFor="lName">Enter your last name:</label>
    <input type='text' id='lName' placeholder='Smith'/>
    <label htmlFor="email">Enter your email:</label>
    <input type='email' id='email' placeholder='johnsmith@gmail.com'/>
    <label htmlFor="phone">Enter your phone number:</label>
    <input type='tel' id='phone' placeholder='123-456-7890'/>
  </div>
}
