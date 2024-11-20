import React from 'react'
import playStore from "../assets/icons/googleplay.webp"
import appstore from "../assets/icons/appstore.webp"

export default function PlaystoreBanner() {
    return (
        <div className='flex-row banner-container'>
            <a href='https://www.exion.finance'>
                <img src={playStore} alt='Playstore' style={{ width: '170px', marginRight: '30px' }} />
            </a>
            <img src={appstore} alt='Appstore' style={{ width: '150px' }} />
        </div>
    )
}
