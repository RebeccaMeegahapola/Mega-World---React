import React, { Component } from 'react'
import './ItemBox01Component.css'
import ItemBox01 from './itemBox01/ItemBox01'


export default class ItemBox01Component extends Component {
  render() {
    return (
      <div className='wrapper'>
        <div className='item'>
          <ItemBox01 date='Mar 15, 2021' heading='Mega World DEMO' list1='Main Tower Lobby' list2='Mayor’s Office' list3='Storefronts'/>
        </div>
        <div className='item'>
          <ItemBox01 date='Q4 2021' heading='Mega World INTRO' list1='Walking Down the Streets with a Citizen as an Avatar' list2='Entering Buildings' list3='Public Transport Map with Subways and Bus Stops'/>
        </div>
        <div className='item'>
          <ItemBox01 date='Q2 2022' heading='Mega World TOUR' list1='Meet other Citizens' list2='Real Citizens as Avatars' list3='Custom Outfits for Citizens'/>
        </div>
        <div className='item'>
          <ItemBox01 date='TBA' heading='Mega World ALPHA' list1='Missions for Citizens' list2='Unique and Special Citizens' list3='A series of adjustments for the Microeconomics (“The Metaverse Impact”)'/>
        </div>
        <div className='item'>
          <ItemBox01 date='TBA' heading='Mega World BUILDER' list1='Custom Buildings Constructor' list2='Architectural Projects catalog' list3='Discover Projects made by other players'/>
        </div>
        <div className='item'>
          <ItemBox01 date='TBA' heading='Mega World Release' list1='Deploy Custom Buildings on the gaming map' list2='Craft Unique Items' list3='Customize Interiors'/>
        </div>
      </div>
    )
  }
}