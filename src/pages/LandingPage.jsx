import React from 'react'
import { useState, useEffect } from "react"
import PlaystoreBanner from '../components/playstoreBanner'
import landingImage from '../assets/images/landingImage.webp'
import ExionLogo from '../assets/icons/exionLogo'
import SectionImageRight from '../components/sectionImageRight'
import SectionImageLeft from '../components/sectionImageLeft'
import sectionOneImage from '../assets/images/sectionOneImage.webp'
import sectionTwoImage from '../assets/images/sectionTwoImage.webp'
import sectionThreeImage from '../assets/images/sectionThreeImage.webp'
import sectionFourImage from '../assets/images/sectionFourImage.webp'
import mento from '../assets/icons/mento.svg'
import celo from '../assets/icons/celo.png'
import circle from '../assets/icons/circle.png'
import prezenti from '../assets/icons/prezenti.png'
import appImage from '../assets/images/appImage.webp'
import Footer from '../components/footer'

export default function LandingPage() {

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
    <div className='main-container'>

      <nav className={`navbar ${scrolling ? 'scrolled' : ''}`} style={{ border: 'none' }}>
        <section className='nav-section'>
          <a className='nav-section-logo' href='https://www.exion.finance'>
            <ExionLogo />
          </a>
          <a
            className={`download-button flex-row ${scrolling ? 'scrolled-download-button' : ''}`}
            href='https://play.google.com/store/apps/details?id=com.exion.app'
            target='new'
          >
            Download App
          </a>
        </section>
      </nav>

      <div className='first-page' loading='lazy'>
        <div className='first-page-content'>
          <h1>Crypto Payments made Easy✨</h1>
          <p>Buy, send and spend your stablecoins on day to day utilities and transactions all from your wallet</p>
          <div>
            <PlaystoreBanner />
          </div>
        </div>
        <img src={landingImage} alt='Landing Image' className='landing-image' loading='lazy' />
      </div>

      <div className='section1'>
        <SectionImageRight
          image={sectionOneImage}
          header={'Simple, fast, secure'}
          description={'Simple to use, lightning-fast transactions protected by blockchain security. —Buy, pay, send, and manage your stablecoins effortlessly wherever life takes you🤙'}
        />
      </div>
      <div className='section2'>
        <SectionImageLeft
          image={sectionTwoImage}
          header={'Direct Crypto-to-mobile integration'}
          description={'Send money from your wallet to a friend’s phone number and they receive the money instantly in their mobile money account. Simple with no third party complexities😌'}
        />
      </div>
      <div className='section3'>
        <SectionImageRight
          image={sectionThreeImage}
          header={'Localized stablecoins for everyday transactions'}
          description={'With localized stablecoins like CKES which align with local currencies, we make everyday transactions easy and familiar✨'}
        />
      </div>
      <div className='section4'>
        <SectionImageLeft
          image={sectionFourImage}
          header={'Cross-border payments'}
          description={'Send money effortlessly across Africa at close to no transaction cost and with lightning speed⚡️'}
        />
      </div>

      {/* <div className="partners-div">
        <div className='divider'></div>
        <div style={{ width: '100%' }} className='flex-column'>
          <h1>Our Partners</h1>
          <div className='flex-row' style={{ width: '80%', justifyContent: 'space-around' }}>
            <img src={mento} alt='mento' className='mento-logo' />
            <img src={celo} alt='celo' className='celo-logo' />
          </div>
        </div>
      </div> */}

      <div className="partners-div">
        <div className="divider"></div>

        <div className="partners-content">
          <h1>Our Partners</h1>

          <div className="partners-grid">
            <img src={mento} alt="mento" className="partner-logo" />
            <img src={celo} alt="celo" className="partner-logo" />
            <img src={circle} alt="circle" className="partner-logo" />
            <img src={prezenti} alt="prezenti" className="partner-logo" />
          </div>
        </div>
      </div>


      <div className='bottom-container'>
        <div className='bottom-section'>
          <div className='left-section'>
            <h1>Exion - Empowering Africa’s financial future with blockchain</h1>
            <PlaystoreBanner />
          </div>
          <img src={appImage} alt='Exion' className='exion-img' />
        </div>


        <Footer />
      </div>

    </div>
  )
}
