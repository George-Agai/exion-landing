import React from 'react'
import PlaystoreBanner from './playstoreBanner'

export default function SectionImageRight({ image, header, description }) {
    return (
        <div className='section-right-container'>
            <div className='text-side'>
                <h1>{header}</h1>
                <p>{description}</p>
                <PlaystoreBanner />
            </div>
            <img src={image} loading='lazy' className='image-right'/>
        </div>
    )
}