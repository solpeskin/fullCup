import React from 'react'
import coffe1 from '../img/coffe1.png'
import coffe2 from '../img/coffe2.png'
import coffe3 from '../img/coffe3.png'
import coffe4 from '../img/coffe4.png'
import coffe5 from '../img/coffe5.png'
import background from '../img/cafe.png'

import  '../javascript/homepage.js'

const HomePage = () => {
  return (
    <section id='homePage'>
        <img className='background' src={background}/>
        <div>
            <h1>FullCup</h1>
            <p>Hecho a mano</p>
        </div>

        <div className='cafeImages'>
          <img src={coffe1} className="coffe1" data-value="-2"/>
          <img src={coffe2} className="coffe2" data-value="6"/>
          <img src={coffe3} className="coffe3" data-value="-6"/>
          <img src={coffe4} className="coffe4" data-value="8"/>
          <img src={coffe5} className="coffe5" data-value="-4"/>
          <img src={coffe3} className="coffe6" data-value="5"/>
          <img src={coffe4} className="coffe7" data-value="-9"/>
          <img src={coffe2} className="coffe8" data-value="-5"/>
        </div>
    </section>
  )
}

export default HomePage