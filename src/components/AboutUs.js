import React from 'react'
import "../css/AboutUs.css"
import linkedIn from "../assets/linkedin.png"
import instagram from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import boy from "../assets/boy.png"
import girl from "../assets/girl.png"

const AboutUs = () => {
  return (
    <div className='about-us'>
        <div className='heading'>Our Team</div>
        <div className='members'>
        <div className='member'>
            {/* <img className='blob' src={Blob} alt=" " /> */}
            <img className='img' src={girl} alt=" " />
            <div className='name'>Saumya Dubey</div>
            <div className='position'>Co-Founder</div>
            <div className='socials'>
                <img src={linkedIn} alt=" " />
                <img src={instagram} alt=" " />
                <img src={twitter} alt=" " />
            </div>
        </div>
        <div className='member'>
            {/* <img className='blob' src={Blob} alt=" " /> */}
            <img className='img' src={boy} alt=" " />
            <div className='name'>Yash Dixit</div>
            <div className='position'>Co-Founder</div>
            <div className='socials'>
                <img src={linkedIn} alt=" " />
                <img src={instagram} alt=" " />
                <img src={twitter} alt=" " />
            </div>
        </div>
        <div className='member'>
            {/* <img className='blob' src={Blob} alt=" " /> */}
            <img className='img' src={boy} alt=" " />
            <div className='name'>Chinmay Upadhyay</div>
            <div className='position'>Tech Lead</div>
            <div className='socials'>
                <img src={linkedIn} alt=" " />
                <img src={instagram} alt=" " />
                <img src={twitter} alt=" " />
            </div>
        </div>
        <div className='member'>
            {/* <img className='blob' src={Blob} alt=" " /> */}
            <img className='img' src={boy} alt=" " />
            <div className='name'>Ankit Khandey</div>
            <div className='position'>Head of Operations</div>
            <div className='socials'>
                <img src={linkedIn} alt=" " />
                <img src={instagram} alt=" " />
                <img src={twitter} alt=" " />
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutUs