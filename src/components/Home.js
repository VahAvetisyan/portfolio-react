import React from 'react'
import "../styles/home.css"
import me from '../assets/me.png';

export default function Home() {
  return (
    <div id='home'>
      <div id='info'>
        <h1>
        I'm a Web Front-End Developer 
        </h1>
        <h5>Currently, I love to work on web application using technologies like HTML, CSS, JS and React JS.</h5>
        <a href='about'><button>About Me</button></a>
      </div>
      <div id='photo'>
        <img src={me} alt='avatar'/>
      </div>
    </div>
  )
}
