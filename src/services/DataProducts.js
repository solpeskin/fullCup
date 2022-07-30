
const products = [
  {id: "01" , name: "Black cacao" , description: "Rico café a base de hojas de te negro, canela y por supuesto cacao." , stock: "30", price:"1000", img:"/img/products/black-cacao-sin-fondo.png", color: "#8c775e"},
  {id: "02" , name: "Black cacao XXL" , description: "El mismo Black cacao de siempre pero el doble de tamaño para disfrutarlo el doble." , stock: "15", price:"150", img:"/img/products/black-cacao-xxl-sin-fondo.png", color: "#8c775e"},
  {id: "03" , name: "Clasic" , description: "El café de siempre pero más rico." , stock: "20", price: "1000", img:"/img/products/clasic-sin-fondo.png", color:"#039577"},
  {id: "04" , name: "Green cáspsula" , description: "Capsula de un café delicioso a base de hojas (10 unidades)." , stock: "30", price:"800",  img:"/img/products/green-capsula-sin-fondo.png", color:"#795e44"},
  {id: "05" , name: "Taza FullCup" , description: "Nada mejor que una taza de café pero FullCup." , stock: "54", price: "1000", img:"/img/products/cup-sin-fondo.png", color:"#23634f"},
  {id: "06" , name: "Taza FullCup" , description: "Nada mejor que una taza de café pero FullCup." , stock: "54", price: "1000", img:"/img/products/cup-sin-fondo.png", color:"#23634f"}

]

export const data = new Promise ((resolve, reject)=>{
    let conditions = true

    setTimeout(()=>{
      if(conditions){
        resolve(products)
      }

      else {
        reject("algo salió mal")
      }
    }, 2000)
  })
