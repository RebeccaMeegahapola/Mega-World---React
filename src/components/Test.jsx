import React from 'react'
import './Test.css'
import imgCheck from '../images/check.png'


export default function Test() {
  return (
    <div className='itemflex'>
      <div className='inline'><img src= {imgCheck} alt="" className='Check'/></div>
      <div class="line"></div>
      <div className='inline'><img src= {imgCheck} alt="" className='Check'/></div>
      <div class="line"></div>
      <div className='inline'><img src= {imgCheck} alt="" className='Check'/></div>
      <div class="line"></div>
      <div className='inline'><img src= {imgCheck} alt="" className='Check'/></div>
      <div class="line"></div>
      <div className='inline'><img src= {imgCheck} alt="" className='Check'/></div>
    </div>
  )
}
