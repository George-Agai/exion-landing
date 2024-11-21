import React from 'react'
import PlaystoreBanner from './playstoreBanner'

export default function SectionImageLeft({ image, header, description }) {
    return (
        <div className='section-right-container'>
            <img src={image} loading='lazy' className='image-left' />
            <div className='text-side'>
                <h1>{header}</h1>
                <p>{description}</p>
                <PlaystoreBanner />
            </div>
        </div>
    )
}