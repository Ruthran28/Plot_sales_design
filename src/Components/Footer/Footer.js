import React from 'react';
import './Footer.css';
import logo from '../logo1.png';
import footerImg from '../footer.png';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="footer-logo-container">
                        <img src={logo} alt="Logo" className="footer-logo" />
                    </div>
                    <div className="footer-contact-info">
                        <p>Rera Number: TN/xx/Building/xxxx/xxxx</p>
                        <p>Number: 044 - 4393 7979</p>
                        <p>Email: sales@vgnhomes.com</p>
                    </div>
                </div>
                <div className="footer-right">
                    <ul className="footer-links">
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#gallery">Our Gallery</a></li>
                        <li><a href="#features">Salient Features</a></li>
                        <li><a href="#agents">Agents</a></li>
                        <li><a href="#locations">Our Locations</a></li>
                    </ul>
                    <div className="footer-image-container">
                        <img src={footerImg} alt="Footer graphic" className="footer-bottom-image" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;