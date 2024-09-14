import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import headbgAbout from './../../images/about-bg.png'
import logo from './../../images/logo.png'
import Section_1About from '../Section_1About/Section_1About'
import imgSec1 from'./../../images/promotion_img.png'
import Section_2About from '../Section_2About/Section_2About'
import imgSec2 from './../../images/video-banner.png'
import Section_3About from '../Section_3About/Section_3About'
import imgSec_3 from './../../images/TourPlans-img.png'
import Footer from '../footer/footer'
import linkedin from './../../images/052-linkedin.svg'
import messenger from './../../images/025-messenger.svg'
import twitter from './../../images/twitter.svg'
import twoo from './../../images/twoo.svg'
import logo2 from './../../images/Group 1000001807.png'

const About = () => {
  return (
    <div>
        <NavBar menu={[{ title:"Home" , path:'/'} , {title:"About" , path:'/About'} , {title:"Packages" , path:'/Packages'} , {title:"Services" , path:'/'}]} logo={logo} btn="Get in Touch" />
        <Hero titleclass="titleAbout" img={headbgAbout} title="About Us" />
        <Section_1About cName="Section_1About" p1="Promotion" p2="We Provide You Best Europe Sightseeing Tours" p3="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!" img={imgSec1} btn="View Packages" />
        <Section_2About>
          <Hero titleclass="titleAbout" img={imgSec2} title="Wanderlust" />
        </Section_2About>
        <Section_3About >
          <Section_1About cName="Section_1About3" p1="Trend" p2="Our Popular Tour Plans" p3="Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium." percent1="78%" titlepercent1="Vacations" percent2="55%" titlepercent2="Honeymoon" img={imgSec_3} />
        </Section_3About>
        <Footer logo={logo2} par="Travel helps companies manage payments easily." linkedin={linkedin} messenger={messenger} twitter={twitter} twoo={twoo} title1="Company"  p1="About Us" p2="Careers" p3="Blog" p4="Pricing" title2="Destinations" p5="Maldives" p6="Los Angelas" p7="Las Vegas" p8="Torronto" end="Copyright @ Xpro 2023 All Rights Reserved." />
    
    </div>
  )
}

export default About