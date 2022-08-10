import { Link } from 'react-router-dom'
import CardWidget from './CardWidget'

const NavBar = () => {
  
  return (
    <header>
      <ul className='menu-list'>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/products'>Productos</Link></li>
        <li>Nosotros</li>
      </ul>
      
      <CardWidget/>
    </header>
  )
}

export default NavBar

