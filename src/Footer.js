import React from 'react'
import "./App.css"

const Footer = () => {
  return (
    <div class="footer-basic">
        <footer>
            <div class="social">
                <a href="www.instagram.com"><i class="icon ion-social-instagram"></i>
                </a><a href="#"><i class="icon ion-social-snapchat"></i>
                </a><a href="#"><i class="icon ion-social-twitter"></i>
                </a><a href="#"><i class="icon ion-social-facebook"></i></a>
                </div>
            <div class="location">
            <h1 class="tex-center">Location</h1>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.905610478285!2d77.5944702696415!3d27.60523278695033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39736ce354785707%3A0x2289afb1a0c4cea7!2sGLA%20Rd%2C%20Bharthia%2C%20Uttar%20Pradesh%20281406!5e0!3m2!1sen!2sin!4v1694495762661!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>            
        </footer>
            <p class="copyright">Vaibhav Chauhan © 2023</p>
    </div>
  )
}

export default Footer
