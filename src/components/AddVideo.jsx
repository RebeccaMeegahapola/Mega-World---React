import React from 'react'
import './AddVideo.css'
import imgDog from '../images/dog.png'
import imgCar from '../images/car.png'
import imgBuilding from '../images/building.png'
import imgMetal from '../images/metal.png'
import ReactPlayer from 'react-player'

export default function AddVideo() {
  return (
    <div class="containerTest" id='video'>
        <div class="bottom-left">
            <img src= {imgDog} alt=""/>
        </div>
        <div class="top-left">
            <img src= {imgCar} alt=""/>
        </div>
        <div class="top-right">
            <img src= {imgBuilding} alt=""/>
        </div>
        <div class="bottom-right">
            <img src= {imgMetal} alt=""/> 
        </div>
        <div className='centeredVideo'>
            <ReactPlayer width='800px' height='360px' clear='both' controls url='https://youtu.be/grwcIdBFzAQ'/>   
        </div>
    </div>
  )
}
