import React from 'react'
import './NavBar.css'
import { FaArrowRight, FaFlag, FaHome, FaVideo } from 'react-icons/fa';
import { BrowserRouter } from 'react-router-dom';
import {HashLink as  Link } from 'react-router-hash-link';

export default function NavBar() {
  return (
    <BrowserRouter>
        <nav>
            <div className='nav'>
                <ul className='nav_menu'>
                    <p className='sect01'>
                        <li class='icon01'>
                            <button className='button01'><Link to='#home' className='buttonHome'><FaHome/></Link></button>
                        </li>
                        <li class='icon01'>
                            <button className='Nvideo'><Link to='#video' className='Nvideo'><FaVideo/></Link></button>
                        </li>
                    </p>                 
                        <p className='sect02'>
                            <li className='nav_item item01'><Link to='#explore' className='nav_link nav_link_hover'>EXPLORE</Link></li>
                            <li className='nav_item item01'><a href='#' className='nav_link'><FaArrowRight/></a></li>
                            <li className='nav_item item01'><Link to='#craft' className='nav_link nav_link_hover'>CRAFT</Link></li>
                            <li className='nav_item item01'><a href='#' className='nav_link'><FaArrowRight/></a></li>
                            <li className='nav_item item01'><Link to='#build' className='nav_link nav_link_hover'>BUILD</Link></li>
                            <li className='nav_item item01'><a href='#' className='nav_link'><FaArrowRight/></a></li>
                            <li className='nav_item item01'><Link to='#trade' className='nav_link nav_link_hover'>TRADE</Link></li>
                        </p>                  
                    <p className='sect03'>
                        <li class='icon01'>
                            <button className='Nvideo'><Link to='#flag' className='Nvideo'><FaFlag/></Link></button>
                        </li>
                        <li class='nav_item item01'>
                            <button className='button'><Link to='#demo' className='buttonDemo'>DEMO</Link></button>            
                        </li> 
                    </p>
                </ul>
            </div>
        </nav>
    </BrowserRouter>
  )
}

