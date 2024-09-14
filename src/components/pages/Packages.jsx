import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import bgpackage from './../../images/packages-bg.png'
import logo from './../../images/logo.png'
import Section_1Package from '../Section_1Package/Section_1Package'
import CardSec_1Package from '../CardSec_1Package/CardSec_1Package'
import city1 from './../../images/city-1.png'
import city2 from './../../images/city-2.png'
import city3 from './../../images/city-3.png'
import city4 from './../../images/city-4.png'
import city5 from './../../images/city-5.png'
import city6 from './../../images/city-6.png'
import star from './../../images/star_2.svg'
import Footer from '../footer/footer'
import linkedin from './../../images/052-linkedin.svg'
import messenger from './../../images/025-messenger.svg'
import twitter from './../../images/twitter.svg'
import twoo from './../../images/twoo.svg'
import logo2 from './../../images/Group 1000001807.png'

const Packages = () => {
  return (
    <div>
        <NavBar menu={[{ title:"Home" , path:'/'} , {title:"About" , path:'/About'} , {title:"Packages" , path:'/Packages'} , {title:"Services" , path:'/'}]} logo={logo} btn="Get in Touch" />
        <Hero titleclass="titleAbout" img={bgpackage} title="Travel With Us" />
        <Section_1Package >
          <CardSec_1Package img={city1} date1="27, September 2023" people="30+ People" title="Maldives" paragragh="Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et." price="3000 $" star={star} num="5.0" />
          <CardSec_1Package img={city2} date1="13, October 2023" people="120+ People" title="Switzerland" paragragh="Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et." price="1290 $" star={star} num="4.9" />
          <CardSec_1Package img={city3} date1="2, November 2022" people="139+ People" title="Berlin" paragragh="Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et." price="2790 $" star={star} num="5.0" />
          <CardSec_1Package img={city4} date1="14, December 2022" people="50+ People" title="Torronto" paragragh="Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et." price="1110 $" star={star} num="4.0" />
          <CardSec_1Package img={city5} date1="20, September 2022" people="80+ People" title="Baku" paragragh="Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et." price="1220 $" star={star} num="4.5" />
          <CardSec_1Package img={city6} date1="27, August 2022" people="100+ People" title="Chinese" paragragh="Qui Tempore Voluptate Qui Quia Commodi Rem Praesentium Alias Et." price="2500 $" star={star} num="5.0" />
        </Section_1Package>
        <Footer logo={logo2} par="Travel helps companies manage payments easily." linkedin={linkedin} messenger={messenger} twitter={twitter} twoo={twoo} title1="Company"  p1="About Us" p2="Careers" p3="Blog" p4="Pricing" title2="Destinations" p5="Maldives" p6="Los Angelas" p7="Las Vegas" p8="Torronto" end="Copyright @ Xpro 2023 All Rights Reserved." />
    </div>
  )
}

export default Packages