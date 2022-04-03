import React from 'react'
import "../css/Homepage.css"
import Wohoo from "../assets/wohoo.png"
import BabyStages from "../assets/babystages.jpg"
import try1 from "../assets/1.png"
import try2 from "../assets/2.png"
import try3 from "../assets/3.png"

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className='main-text'>
            Tired of your kids growing out of their clothes every few months?
            <br/><i>Well, we have a solution for you!</i>
            <div className='text'>Presenting <span className='wear-it'><span style={{color: "#F5A123"}}>wear</span>It</span><sub><img className='wohoo' src={Wohoo}  alt=" " /></sub></div>
        </div>
        <img className='baby-stages' src={BabyStages} alt=" " />
        <div className='heading'>What do we provide?</div>
        {/* <img className='blob' src={Blob} alt=" " /> */}
        <div className='features'>
            <div>
                <div className='feature'>
                    <span style={{color: "#F5A123"}}>wear</span>It aims to provide clothes on rent on a subscription basis. 
                </div>
                <div className='feature'>
                    Customers can subscribe to clothes for as much time as they need, and pay for the period of time they use the   subscribed items. 
                </div>
                <div className='feature'>
                    Wide variety of items available for subscription.
                </div>
                <div className='feature'>
                    Subscription can be extended or reduced as per convinience.
                </div>
                <div className='feature'>
                    After return of subscibed items, the clothing will be washed and cleaned to be reused by other customers.
                </div>
                <div className='feature'>
                    This service targets all kinds of customers and all of their needs for special occasions.
                </div>
            </div>
        </div>
        <div className='try-wear-it'>
            <div className='try-text'>
                Try <span className='wear-it'><span style={{color: "#F5A123"}}>wear</span>It</span>
                <br /><span className='try-sub-text'>Enjoy a delightful experience, every time.</span>
            </div>
            <div className='try-list'>
                <div className='try'>
                    <img src={try1} alt=" " />
                    <div className='title'>Wide Variety to choose from</div>
                    <div className='desc'>
                        <span className='wear-it'><span style={{color: "#F5A123"}}>wear</span>It</span> provides clothing items, but also wearable items of any kind, be it jewellery, footwear, accessories, etc
                    </div>
                </div>
                <div className='try'>
                    <img src={try2} alt=" " />
                    <div className='title'>Utmost cleanliness maintained</div>
                    <div className='desc'>
                        After a customer returns their subscribed items, the items are cleaned, washed, dry-cleaned to maintain utmost cleanliness for the next user.
                    </div>
                </div>
                <div className='try'>
                    <img src={try3} alt=" " />
                    <div className='title'>convinience all the way</div>
                    <div className='desc'>
                        Our website is hassle-free and customer-friendly all the way! Sit back, and scroll through the amazing collection we provide.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Homepage