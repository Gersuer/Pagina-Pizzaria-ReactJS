import React from 'react'
import '../styles/Footer.css'

import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="icons">
                <Link className='contact-links'>
                    <BsWhatsapp className='contact-icons' />
                </Link>
                <Link className='contact-links'>
                    <BsInstagram className='contact-icons' />
                </Link>
            </div>
            <div className="footer-txt">
                <p> &copy; 2023 projeto@estudos.com</p>
            </div>
        </div>
    )
}

export default Footer