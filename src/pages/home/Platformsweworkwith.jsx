import React from 'react'
import './Home.scss'
import { Gpstab, bluestar, elldone, tteld } from '../../assets'
const Platformsweworkwith = () => {
  return (
    <div className='platform'>
      <div className="container">
        <div className="platforms">
          <div className="platformalar">
            <div className="DIV">
              <h1>Platforms we work with:</h1>
            </div>
            <div className='logos'>
              <div className='bluestar'>
                <img src={bluestar} alt="" />
                <h2>Blue Star ELD</h2>
              </div>
              <div className='bluestar'>
                <img src={tteld} alt="" />
                <h2>TT ELD</h2>
              </div>
              <div className='bluestar'>
                <img src={Gpstab} alt="" />
                <h2>GPS TAB</h2>
              </div>
              <div className='bluestar'>
                <img className='eldone' src={elldone} alt="" />
                <h2>ELD ONE</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Platformsweworkwith