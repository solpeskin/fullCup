import ItemCount from '../Items/ItemCount'
import CardWidget from './CardWidget'

const NavBar = () => {
  
  return (
    <header>
      <ul className='menu-list'>
        <li><a href='#homePage'>Inicio</a></li>
        <li><a href='#products'>Shop</a></li>
        <li><a>Nosotros</a></li>
      </ul>
      
      <CardWidget productsNum="0"/>
    </header>
  )
}

export default NavBar

