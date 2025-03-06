import React from 'react'
import './footer.css'
import youtube from '../../assets/youtube_icon.png'
import twitter from '../../assets/twitter_icon.png'
import facebook from '../../assets/facebook_icon.png'
import instagram from '../../assets/instagram_icon.png'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icons">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
                <img src={youtube} alt="" />



            </div>
                <ul>        
                    <li>Audio Description</li>
                    <li>Help Centre</li>
                    <li>Gift Cards</li>
                    <li>Media Centre</li>
                    <li>Investor Relations</li>
                    <li>Jobs</li>
                    <li>Terms of Use</li>
                    <li>Privacy</li>
                    <li>Legal Notices</li>
                    <li>Cookie Preferences</li>
                    <li>Corporate Info</li>
                    <li>Contact Us</li>

                </ul>
                <p className='copyright'>© 2025 Crimehouse, Inc.</p>
        </div>
    )
}

export default Footer
