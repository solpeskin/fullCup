import React from 'react'
import cafeImg from '../img/cafe-top.png'

const Introduction = () => {
  document.addEventListener("scroll", coffeeScroll)

  function coffeeScroll (){
    let y = window.scrollY
    document.querySelector(".coffeImg").style.transform = `translateX(-${y*0.8}px) rotate(${y * 0.25}deg)`
  }

  return (
    <section id='introduction'>
      <h2>Nada más dulce, </h2>
      <img className="coffeImg" src={cafeImg}/>
      <h2 className='contorn-text'>que un café amargo </h2>
    </section>
  )
}

export default Introduction