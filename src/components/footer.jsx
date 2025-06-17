import React from 'react'
import ExionLogo from '../assets/icons/exionLogo'
import PlaystoreBanner from './playstoreBanner'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='wave-background'></div>
            <div className='footer-text-div'>
                <a href='https://www.exion.finance'>
                    <ExionLogo/>
                </a>
                <p className='connecting-text'>Connecting African communities to a secure, stable and accessible financial ecosystem</p>
                <PlaystoreBanner />

                <div style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
                <Link style={{fontSize: '17px', color: '#00C48F', textDecoration: 'none'}} to='/terms-of-use'>Terms of use</Link>
                <Link style={{fontSize: '17px', marginLeft: '25px', color: '#00C48F', textDecoration: 'none'}} to='/privacy-policy'>Privacy policy</Link>
                </div>

                <a href="mailto:exionfinance@gmail.com" style={{fontSize: '16px', marginTop: '30px', textDecoration: 'none', color: 'white'}}>exionfinance@gmail.com</a>

                <div className='copyright-div flex-row'>
                    <p>Exion-All rights reserved { new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    )
}
