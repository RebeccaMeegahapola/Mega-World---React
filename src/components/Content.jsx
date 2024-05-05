import React from 'react'
import './Content.css'
import imgb from '../images/image01.jpg'
import img1 from '../images/logo.png'
import imgcross from '../images/cross.webp'
import imgP from '../images/citizen.png'
import NavBar from './NavBar'
import AddVideo from './AddVideo'
import FirstComponent from './FirstComponent'
import Test from './Test'
import ItemBox01Component from './ItemBox01Component'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'
import Footer from './Footer'
import About from './About'

export default function Content() {
  return ( 
        <div class="container">
            <img src= {imgb} alt="" className='imageb'/>
            <div className='main' id='home'>
                <NavBar/>
                <img src= {img1} alt="" className='image01'/>
                <div className='cont01'>The metaverse</div>
                <div className='cont02'>
                    <p className='topic01'>virtual <br/> city</p>
                    <p className='ticon'><img src= {imgcross} alt="" className='cross'/></p>
                    <p className='topic01'>real <br/> economics</p>
                </div>
                <div className='cont03'>Comming 2022</div> 
                <div className='cont04'>
                    <p className='para01'>
                        <p className='subpara01'>Request early access</p>
                        <p className='subpara02'>Claim your invitation to the Mega <br/> World metaverse demo today. </p>
                    </p>
                    <p className='para02'>
                        <img src= {imgP} alt="" className='imageP'/>
                    </p>
                    <p className='para03'>
                        <input type='text' placeholder='Your e-mail' className='input01'/>
                        <button type='button' className='btn01'>Send</button>
                        <p className='subpara03'>The invitation link will be delivered shortly. </p>
                    </p>
                </div>  
                <div className='cont05'>Collection of original assets owned by users to be transferred to the metaverse: </div>
                <div className='cont06'>
                    <p className='subcont06'>
                        <p className='parag1'>113’652</p>
                        <p className='parag2'>Land Plots</p>
                    </p>
                    <p className='subcont06'>
                        <p className='parag1'>39,299</p>
                        <p className='parag2'>Buildings</p>
                    </p>
                    <p className='subcont06'>
                        <p className='parag1'>83 105</p>
                        <p className='parag2'>Districts</p>
                    </p>
                    <p className='subcont06'>
                        <p className='parag1'>94’140</p>
                        <p className='parag2'>Citizens</p>
                    </p>
                </div> 
                <AddVideo/>
                <FirstComponent/>
                <div  id='flag'>
                    <h1 className='head Topic1'>Development <br/> milestones</h1>
                    <Test/>
                </div>       
            </div>
            <ItemBox01Component/>
            <SecondComponent/>
            <ThirdComponent/>
            <Footer/>         
        </div>       
  )
}
