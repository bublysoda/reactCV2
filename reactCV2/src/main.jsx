import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { FormPersonal } from './App'
import { FormSchool } from './App'
import { FormWork } from './App'
import { PersonalInfoResume } from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormPersonal />
    <FormSchool />
    <FormWork />
    <PersonalInfoResume />
  </StrictMode>,
)
