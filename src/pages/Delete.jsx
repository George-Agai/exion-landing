import React, { useState, useEffect } from 'react'
import sad from '../assets/images/sad.png'
import ExionLogo from '../assets/icons/exionLogo'

function Delete() {

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };
        window.scrollTo(0, 0)

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className='delete-container'>
            <nav className={`navbar  scrolled `} style={{ border: 'none' }}>
                <section className='nav-section'>
                    <a href='https://www.exion.finance'>
                        <ExionLogo />
                    </a>
                    <button className={`download-button flex-row scrolled-download-button`}>Download App</button>
                </section>
            </nav>

            <img src={sad} alt='sad' style={{ width: '150px' }} />
            <h1 style={{ color: '#333', marginTop: '0px', paddingInline: '10px', textAlign: 'center' }}>Sad to see you go</h1>
            <p style={{ color: '#888', marginTop: '-10px', paddingInline: '30px', textAlign: 'center' }}>Request the deletion of your account and data</p>
            <a href='https://docs.google.com/forms/d/e/1FAIpQLSfzOVFXY0exEsPXtfc41aziRZooDMg4cCSN3q7_BF0GEfcuuQ/viewform?usp=dialog' className='delete-button'>Delete Account</a>
        </div>
    )
}

export default Delete