import React from 'react'
import './SecondComponent.css'
import imgTwo from '../images/skyscrapers.jpg'
import img01 from '../images/citizens2.png'
import img02 from '../images/frontman.png'

export default function SecondComponent() {
  return (
        <div class="containerTwo">
            <img src= {imgTwo} alt="" className='imgTwo'/>
            <div class="centeredtwo">Life the way you want it</div>
            <p className='Bpara'>Try yourself in various activities and businesses, and when <br/> you don’t feel like it - simply change the direction, there is <br/> always someone willing to take a niche. </p>
            <img src= {img01} alt="" className='imgOne'/>
            <img src= {img02} alt="" className='imgMan'/>
        </div>   
  )
}
