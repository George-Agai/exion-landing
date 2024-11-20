import React from 'react'
import PlaystoreBanner from './playstoreBanner'

export default function SectionImageLeft({ image, header, description }) {
    return (
        <div className='section-right-container'>
            <img src={image} style={{ width: '430px', paddingRight: '80px' }} loading='lazy' />
            <div className='text-side'>
                <h1>{header}</h1>
                <p>{description}</p>
                <PlaystoreBanner />
            </div>

        </div>
    )
}