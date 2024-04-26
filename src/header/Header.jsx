import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/App.sass'
import icons from '../assets/logo.svg'
import callIcon from '../assets/call.png'
import loop from '../assets/loop.png'
import facebook from '../assets/social_icons/facebook.svg'
import youtube from '../assets/social_icons/youtube.svg'
import instagram from '../assets/social_icons/instagram.svg'
const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='header-block'>
        <Link className='logo_kai' to='/main'><img src={icons} alt="" /></Link>
        <Link to='/'>КАИ</Link>
        <Link to='/'>Стркутура</Link>
        <Link to='/'>Советы</Link>
        <Link to='/'>Колледж</Link>
        <Link to='/'>Наука</Link>
        <Link to='/'>Бакалавр</Link>
        <Link to='/'>Магситратура</Link>
        <Link to='/'>Абитуриенту</Link>
        <div className='header-icons'>
        <Link to='/'><img src={callIcon} alt='number'/></Link>
        <Link to='/'><img src={loop} alt=''/></Link>
        </div>
        </div>
    </div>
    <div className="social_icons_switch_lang">
        <div className="kai-text">
        <h1>Кыргызский авиационный институт</h1>
        <p>Имени И.Абдраимова</p>
        </div>
        <div className='social_icons'>
        <a href="https://facebook.com/"><img src={facebook} alt="facebook"/></a>
        <a href="https://youtube.com/"><img src={youtube} alt="yotube"/></a>
        <a href="https://instagram.com/"><img src={instagram} alt="facebook"/></a>
        </div>
    </div>
    </>
  )
}

export default Header