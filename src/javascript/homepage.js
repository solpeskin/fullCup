document.addEventListener("mousemove", parallaxCoffee)
document.addEventListener("scroll", parallaxScroll)

function parallaxCoffee (e){
    let children = [].slice.call(document.querySelector(".cafeImages").children);
    children.forEach((move)=>{ 
        let movingValue = move.getAttribute("data-value")
        let x = (e.clientX * movingValue) / 250
        let y = (e.clientY * movingValue) /250

        if (move == document.querySelector(".coffe5") || move == document.querySelector(".coffe6") || move == document.querySelector(".coffe7") || move == document.querySelector(".coffe8")){
            move.style.transform = `translateX(${x}px) translateY(${y}px) rotate(90deg)`
        }

        else {
            move.style.transform = `translateX(${x}px) translateY(${y}px)`
        }
    })
}

function parallaxScroll (){
    let y = window.scrollY

    if (y > 450) {
        document.querySelector(".App").classList.add("turn-black")
    }

    else {
        document.querySelector(".App").classList.remove("turn-black")
    }

    if (y > 1000){
        document.querySelector(".App").classList.add("turn-green")
    }

    else {
        document.querySelector(".App").classList.remove("turn-green")
    }
}