import React from 'react'
import './FirstComponent.css'
import imgUmbrella from '../images/umbrella.png'
import imgIce from '../images/icecream.png'
import imgBeer from '../images/beer.png'
import img01 from '../images/explore.jpg'
import imgNail from '../images/nails.png'
import imgGlue from '../images/glue.png'
import imgText from '../images/textiles.png'
import img02 from '../images/craft.png'
import imgBricks from '../images/bricks.png'
import img03 from '../images/build.jpg'
import imgTool from '../images/cost-tooltip.png'
import imgCoin from '../images/coin.png'
import imgCoins from '../images/coins.png'
import imgWallet from '../images/wallet.png'
import img04 from '../images/trade.jpg'

export default function FirstComponent() {
  return (
    <div>
        <div id='explore'>
            <h1 className='head headO'>Open platform. <br/> No objectives.</h1>
            <img src= {imgUmbrella} alt="" className='umbrella'/>
            <img src= {imgIce} alt="" className='ice'/>
            <img src= {imgBeer} alt="" className='beer'/> 
            <div className='CompOne'>
                <img src= {img01} alt="" className='imageOne'/>
                <div className='divOne'>
                    <h1 className='head1'>Explore</h1>
                    <p className='para1'>New realm for everyone — from casual visitors to ambitious entrepreneurs. </p>
                    <ul className='list'>
                        <li className='listIt'>User-generated gaming map</li>
                        <li className='listIt'>Daily interactive quests</li>
                        <li className='listIt'>Thousands of Citizens</li>
                        <li className='listIt'>Unlimited strategies</li>
                    </ul>
                    <p className='para2'>Just take a stroll.</p>
                </div>
            </div>
        </div>
        <div id='craft'>
            <h1 className='head headT'>Built by players. <br/> Owned by players.</h1>
            <img src= {imgNail} alt="" className='Nails'/> 
            <img src= {imgGlue} alt="" className='Glue'/>
            <img src= {imgText} alt="" className='Textile'/>  
            <div className='CompTwo'>
                <div className='div2'>
                    <h1 className='head1 craft'>Craft</h1>
                    <p className='para1 craft'>There is nothing better than something you’ve created yourself. Roll up your sleeves — handcraft is always <br/> valuable. </p>
                    <ul className='list'>
                        <li className='listIt craft'>High-tech devices</li>
                        <li className='listIt craft'>Cars and Helicopters</li>
                        <li className='listIt craft'>Artworks and Sculpture</li>
                        <li className='listIt craft'>Furniture and Decorations</li>
                        <li className='listIt craft'>Tools to Accomplish Missions</li>
                    </ul>
                </div>
                <img src= {img02} alt="" className='imageTwo'/>
            </div>
        </div>
        <div id='build'>
            <h1 className='head headTh'>Get creative. <br/> Attend events.</h1>
            <img src= {imgBricks} alt="" className='bricks'/>
            <div className='CompOne'>
                <img src= {img03} alt="" className='imageOne'/>
                <div className='divOne'>
                    <h1 className='head1'>Build</h1>
                    <p className='para1 paraOne'>Are you brave enough to open the construction site? Hop in the virtual real estate business! </p>
                    <p className='para1 paraOne'>Bring to life unique architectural projects, private apartments decorated to your taste, offices with a magnificent view for your corporation. </p>
                    <p className='para2'>Open museums or art galleries, just don’t forget to charge admissions! </p>
                </div>
            </div>
        </div>
        <div id='trade'>
            <h1 className='head headT'>Sell goods. <br/> Make friends. </h1>
            <img src= {imgTool} alt="" className='Tool'/>
            <img src= {imgCoin} alt="" className='Coin'/>
            <img src= {imgCoins} alt="" className='Coins'/>
            <img src= {imgWallet} alt="" className='Wallet'/>
            <div className='CompTwo'>
                <div className='div2'>
                    <h1 className='head1 craft'>Trade</h1>
                    <p className='para1 craft'>The core of the metaverse is the vibrant player-driven economics. Offer services and goods on the open market: </p>
                    <ul className='list'>
                        <li className='listIt craft'>Sell your crafts</li>
                        <li className='listIt craft'>Flip land plots and apartments</li>
                        <li className='listIt craft'>Rent out buildings</li>
                        <li className='listIt craft'>Govern a whole city district</li>
                        <li className='listIt craft'>Collect taxes</li>
                    </ul>
                </div>
                <img src= {img04} alt="" className='imageThree'/>
            </div>
        </div>
        
        
    </div>
  )
}
