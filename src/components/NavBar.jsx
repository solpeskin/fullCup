import Logo from '../img/logo.svg'
import ItemListContainer from './ItemListContainer';
import CardWidget from './CardWidget'


const NavBar = () => {
  
  return (
    <header>
      <ul className='menu-list'>
        <li><a>Inicio</a></li>
        <li><a>Shop</a></li>
        <li><a>Nosotros</a></li>
      </ul>
      
      <img src={Logo} className="logo-fullCap"/>

      <div className="cart">
        <div>
          <CardWidget/>
          <ItemListContainer productsNum={0}/>
        </div>
      </div>
    </header>
  )
}

export default NavBar