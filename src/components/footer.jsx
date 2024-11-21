import React from 'react'
import ExionLogo from '../assets/icons/exionLogo'
import PlaystoreBanner from './playstoreBanner'

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
                <p style={{fontSize: '20px', paddingTop: '20px'}}>support@exion.com</p>
                <div className='copyright-div flex-row'>
                    <p>Exion-All rights reserved { new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    )
}
