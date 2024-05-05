import React from 'react'
import './Footer.css'
import imgF from '../images/green-solid.jpg'
import NavBar from './NavBar'
import img1 from '../images/logo.png'
import { FaDiscord, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className="containerF">
        <img src= {imgF} alt="" className='imgF'/>
        <div class="centeredF">
            <NavBar/>
            <img src= {img1} alt="" className='image01'/>
            <div className='Fcont'>The metaverse</div>
        </div>
        <div class="centeredF1">
            <span className='Fspan'>Copyrights © 2021 SPNV</span>
            <div className='Fdiv'></div>
            <span className='Fspan1'>Privacy Policy-Cookies Policy</span>
            <span className='Fspan2'>Feedback</span>
        </div>
        <div class="centeredF2">
            <button className='twitter'><FaTwitter/></button>
            <button className='discord'><FaDiscord/></button>
        </div>
    </div>
  )
}
