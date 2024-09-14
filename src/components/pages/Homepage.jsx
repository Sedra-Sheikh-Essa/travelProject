import React from 'react'
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import Section_1 from '../Section_1/Section_1'
import Section_2 from '../Section_2/Section_2'
import Card from '../Card/Card'
import headbg from './../../images/header-bg.png'
import e1 from './../../images/e1.png'
import e2 from './../../images/e2.png'
import logo from './../../images/logo.png'
import Section_3 from '../Section_3/Section_3'
import CardSec_3 from '../CardSec_3/CardSec_3'
import img1  from './../../images/n1.png'
import img2  from './../../images/n2.png'
import img3  from './../../images/n3.png'
import flag1  from './../../images/flag-1.png'
import flag2  from './../../images/flag-2.png'
import flag3  from './../../images/flag-3.png'
import calender  from './../../images/uil_calender.svg'
import user  from './../../images/user-avatar.svg'
import star  from './../../images/star.svg'
import Footer from '../footer/footer'
import linkedin from './../../images/052-linkedin.svg'
import messenger from './../../images/025-messenger.svg'
import twitter from './../../images/twitter.svg'
import twoo from './../../images/twoo.svg'
import logo2 from './../../images/Group 1000001807.png'

const Homepage = () => {
  return (
    <div>
        <NavBar menu={[{ title:"Home" , path:'/'} , {title:"About" , path:'/About'} , {title:"Packages" , path:'/Packages'} , {title:"Services" , path:'/Homepage'}]} logo={logo} btn="Get in Touch" />
        <Hero titleclass="titleHome" img={headbg} title="No Matter Where Youre Going To, Well Take You There" />
        <Section_1 />
        <Section_2>
          <Card img={e1} p1="Promotion" p2="Explore Nature" p3="View Packages" />
          <Card img={e2} p1="Promotion" p2="Explore Cities" p3="View Packages" />
        </Section_2> 
        <Section_3>
            <CardSec_3 img={img1} flag={flag1} calender={calender} day="8 days" user={user} people="30 People going" title="Switzerland" star={star} p="Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos." btn="Explore Now"  />
            <CardSec_3 img={img2} flag={flag2} calender={calender} day="8 days" user={user} people="60 People going" title="Amazon" star={star} p="Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos." btn="Explore Now"  />
            <CardSec_3 img={img3} flag={flag3} calender={calender} day="8 days" user={user} people="120 People going" title="Giza" star={star} p="Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos." btn="Explore Now"  />
        </Section_3>
        <Footer logo={logo2} par="Travel helps companies manage payments easily." linkedin={linkedin} messenger={messenger} twitter={twitter} twoo={twoo} title1="Company"  p1="About Us" p2="Careers" p3="Blog" p4="Pricing" title2="Destinations" p5="Maldives" p6="Los Angelas" p7="Las Vegas" p8="Torronto" end="Copyright @ Xpro 2023 All Rights Reserved." />
    </div>
  )
}

export default Homepage