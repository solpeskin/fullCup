import React, { useEffect } from 'react'
import coffe1 from '../img/coffe1.png'
import coffe2 from '../img/coffe2.png'
import coffe3 from '../img/coffe3.png'
import coffe4 from '../img/coffe4.png'
import coffe5 from '../img/coffe5.png'
import background from '../img/cafe.png'

import cafeImg from '../img/cafe-top.png'

// import  '../javascript/homepage.js'
import FeaturedProducts from './FeaturedProducts'

const HomePage = () => {  
  useEffect(()=>{
    document.addEventListener("scroll", coffeeScroll)
    document.addEventListener("scroll", colorScroll)
    document.addEventListener("mousemove", parallaxCoffee)

    return () => {
      document.removeEventListener('scroll', coffeeScroll)
      document.removeEventListener('scroll', colorScroll)
      document.removeEventListener('mousemove', parallaxCoffee)
    }
    
  },[])

  function coffeeScroll (){
    let y = window.scrollY
    document.querySelector(".coffeImg").style.transform = `translateX(-${y*0.8}px) rotate(${y * 0.25}deg)`
  }

  function colorScroll (){
    let y = window.scrollY

    if (y > 450) {
      document.querySelector(".home").classList.add("turn-black")
    }

    else {
      document.querySelector(".home").classList.remove("turn-black")
    }
  }

  function parallaxCoffee (e){
    let children = [].slice.call(document.querySelector(".cafeImages")?.children);
    children.forEach((move)=>{ 
      let movingValue = move.getAttribute("data-value")
      let x = (e.clientX * movingValue) / 250
      let y = (e.clientY * movingValue) /250

      if (move === document.querySelector(".coffe5") || move === document.querySelector(".coffe6") || move === document.querySelector(".coffe7") || move === document.querySelector(".coffe8")){
        move.style.transform = `translateX(${x}px) translateY(${y}px) rotate(90deg)`
      }

      else {
        move.style.transform = `translateX(${x}px) translateY(${y}px)`
      }
    })
  }

  return (
    <section className='home' >

      <div id='homePage'>
        <img className='background' src={background} alt="granos de café"/>
        <div>
          <h1>FullCup</h1>
          <p>Hecho a mano</p>
        </div>

        <div className='cafeImages'>
          <img src={coffe1} className="coffe1" data-value="-2" alt='grano de café' />
          <img src={coffe2} className="coffe2" data-value="6" alt='grano de café'/>
          <img src={coffe3} className="coffe3" data-value="-6" alt='grano de café'/>
          <img src={coffe4} className="coffe4" data-value="8" alt='grano de café'/>
          <img src={coffe5} className="coffe5" data-value="-4" alt='grano de café'/>
          <img src={coffe3} className="coffe6" data-value="5" alt='grano de café'/>
          <img src={coffe4} className="coffe7" data-value="-9" alt='grano de café'/>
          <img src={coffe2} className="coffe8" data-value="-5" alt='grano de café'/>
        </div>
      </div>

      <div id='introduction'>
        <h2>Nada más dulce, </h2>
        <img className="coffeImg" src={cafeImg} alt="imagen café"/>
        <h2 className='contorn-text'>que un café amargo </h2>
      </div>

      <FeaturedProducts />
    </section>
  )
}

export default HomePage