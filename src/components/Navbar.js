import Logo from '../assets/pizzaLogo.png'
//css
import '../styles/Navbar.css'
//react-router-dom
import { Link } from 'react-router-dom'
//icon
import { CgMenu } from 'react-icons/cg'
//hooks
import { useState } from 'react'
const Navbar = () => {
  const [abrirMenu, setAbrirMenu] = useState(false);
  const toggleNabar = ()=>{
    setAbrirMenu(!abrirMenu);
  }
  return (
    <div className='navbar'>
      <div className='ladoEsquerdo' id={abrirMenu ? 'abrir' : 'fechar'}>
        <img src={Logo} alt='logo' />
        <div className="linksEscondidos">
          <Link to='/'>Página inicial</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/about'>Sobre</Link>
          <Link to='/contact'>Contato</Link>
        </div>
      </div>
      <div className='ladoDireito'>
        <Link to='/'>Página inicial</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>Sobre</Link>
        <Link to='/contact'>Contato</Link>
        <button onClick={toggleNabar}>
          <CgMenu className='menu-icon' />
        </button>
      </div>
    </div>
  )
}

export default Navbar