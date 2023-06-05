import React from 'react'
//react-router-dom
import { Link } from 'react-router-dom'
//imagens
import Banner from '../assets/pizza.jpeg'
//css
import '../styles/Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="cabecalho-titulo" style={{ backgroundImage: `url(${Banner})`}}>
        <h1>Pizzaria do GG</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, placeat!</p>
        <Link to='/menu'>
          <button className='buy'>Peça Agora</button>
        </Link>
      </div>
    </div>
  )
}

export default Home