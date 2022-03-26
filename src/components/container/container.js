import React from 'react'
import './container.css'
import apple from './myappstore.png'
import google from './google.png'


function Container() {
  return (
    <div className='main-container'>
      <div className="first-text">
        <h2>Find your ideal driving instructor.</h2>
        <h2 style={{color:'black'}}>In minutes.</h2>
        <p style={{color:'white'}}>Compare independent driving instructions in your area 
        Find your ideal driving instructor .In minutes.Book, reshedule and cancel lessions on the go</p>
      </div>
      <div className="stores">
      <div  className='play_store'> <img  className="apple_logo" src={apple} /></div>
      <div className='play_store'> <img className="google_logo" src={google}/></div>
      </div>
    </div>
  )
}

export default Container;