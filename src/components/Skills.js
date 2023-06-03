import React from 'react'
import "../styles/skills.css"

export default function Skills() {
const skills = ['HTML', 'CSS', 'JS', 'React JS', 'Redux', 'Redux Toolkit', 'Material UI', 'Firebase', 'Trello', 'Jira', 'React Router Dom', 'Git', 'Github']

  return (
    <div id='skills-component'>
    <div id='skills'>     
       {skills.map((skill)=>(
        <div className='skills'>
          {skill}
        </div>
       ))}
       </div>
       </div>
  )
}
