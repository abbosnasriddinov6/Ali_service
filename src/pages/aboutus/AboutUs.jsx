import React from 'react'
import './AboutUs.scss'
import AboutUss from './AboutUss'
const AboutUS = () => {
  return (
   <>
   <AboutUss/>
      <div className='Home'>
        <div className='container'>
          <div className='home'>
            <div className='h1'>
              <h1>What are our responsibilities?</h1>
            </div>
            <div className='cards'>
              <div className='card'>
                <h3>Consulting</h3>
                <p>We will help you choose the right ELD platform depending on your needs</p>
              </div>
              <div className='card'>
                <h3>Consulting</h3>
                <p>Through online video calls, we instruct drivers on how to properly install the device and send the prepared manuals in video and file format</p>
              </div>
              <div className='card'>
                <h3>Consulting</h3>
                <p>you can get high-quality support from our specialists</p>
              </div>
              <div className='card'>
                <h3>Consulting</h3>
                <p>We will order the device,sticker and cable that fits driver's truck model to a convenient location</p>
              </div>
              <div className='card'>
                <h3>Consulting</h3>
                <p>If Safety Audit comes to the company, based on their requirements, the driver’s logs will be prepared to match BOL and Fuel Receipts</p>
              </div>
              <div className='card'>
                <h3>Consulting</h3>
                <p>All FMCSA-related parameters are monitored. Driver's current status, logs, location, odometers, engine hours, profile form and etc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default AboutUS