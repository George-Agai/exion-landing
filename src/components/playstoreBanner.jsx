import React from 'react'
import playStore from "../assets/icons/googleplay.webp"
import appstore from "../assets/icons/appstore.webp"

export default function PlaystoreBanner() {
    return (
        <div className='flex-row banner-container'>
            <a href='https://www.exion.finance'>
                <img src={playStore} alt='Playstore' className='playstore'/>
            </a>
            <img src={appstore} alt='Appstore' className='appstore' />
        </div>
    )
}
