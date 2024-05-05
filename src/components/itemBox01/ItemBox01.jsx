import React, { Component } from 'react'
import './ItemBox01.css'
import { FaFlag } from 'react-icons/fa'

export default class ItemBox01 extends Component {
  render() {
    return (
        <div>
            <h3 className='date'>{this.props.date}</h3>
            <div style={{display: 'flex'}}>
                <FaFlag className='flag'/>
                <h2 className='heading'>{this.props.heading}</h2>
            </div>
            <ul className='list1'>
              <li className='listItem'><span className='span1'>{this.props.list1}</span></li>
              <li className='listItem'><span className='span1'>{this.props.list2}</span></li>
              <li className='listItem'><span className='span1'>{this.props.list3}</span></li>
            </ul>  
        </div>
    )
  }
}
