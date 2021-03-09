import React from 'react'
import '../../Styles/Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';

const Footer = () => {
    return (
        <div className="footer">

            <div className="footer_info">
                {/* Headline */}
                <div className="footer_headline">
                    <h1>Did you Know?</h1>
                </div>
                {/* Description */}
                <div className="footer_description">
                    <p>
                        One person using reusable bags over their lifetime
                        would remove more than 22,000 plastic bags from the
                        environment.You can help change the world!
                    </p>
                    {/* Read More */}
                    <div className="footer_description_readMore">
                        <p>
                            Read about more easy ways you can help the earth —‣
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div className="footer_contact">
                {/* Social Media Icons */}
                <p>Connect With Us</p>
                <div className="footer_social">
                    <InstagramIcon/>
                    <TwitterIcon/>
                    <FacebookIcon/>
                    <PinterestIcon/>
                </div>
            </div>
        </div>
    )
}

export default Footer
