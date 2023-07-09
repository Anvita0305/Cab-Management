import React from 'react'
import { Link } from 'react-router-dom';
import "./Footer.css"



export default function Footer() {
  return (
    <div>
            <footer className="footer-distributed">

    <div className="footer-left">

        <h3>Go Ahead<span> With Afourathon</span></h3>

        <p className="footer-links">
            <Link to="/" className="link-1">Home</Link>
            
            <Link to="/about">About</Link>
            
            <Link to="/contact">Contact</Link>
        </p>

        <p className="footer-company-name">Afourathon © 2023</p>
        
    </div>

    <div className="footer-center">

        <div>
            <i className="fa fa-map-marker"></i>
            <p><span>Office 501, 5th Floor, Sterling Tower, </span>Pan Card Club Road, Baner, Pune 411045,</p>
        </div>

        <div>
            <i className="fa fa-phone"></i>
            <p>+919999999999</p>
        </div>

        <div>
            <i className="fa fa-envelope"></i>
            <p>hackathon@afourtech.com</p>
        </div>

    </div>

    <div className="footer-right">

        <p className="footer-company-about">
            <span>About the company</span>
            Hackathon le rahe ho..!
        </p>
    </div>

    </footer>

    </div>
  )
}
