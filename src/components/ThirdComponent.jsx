import React from 'react'
import './ThirdComponent.css'
import imgT from '../images/apartment.jpg'
import { FaDiscord } from 'react-icons/fa'
import imgCitizens from '../images/citizens.png'

export default function ThirdComponent() {
  return (
    <div className="containerT" id='demo'>
        <img src= {imgT} alt="" className='imgThree'/>
        <div class="centered">Welcome to the club</div>
        <input type='text' placeholder='Your e-mail'/>
        <button type='button' className='Ibtn1'>I'M IN</button>
        <button type='button' className='Ibtn2'><FaDiscord className='Idiscord'/><span className='Ispan'>Join the community</span></button>
        <img src= {imgCitizens} alt="" className='imgCitizens'/>
    </div>
  )
}
