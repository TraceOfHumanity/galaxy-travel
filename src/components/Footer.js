import React from 'react'
import './Footer.scss'
import { FaLinkedinIn, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />
            <div>
              <p>123 Acme Sr.</p>
              <h4>Houston, Tx</h4>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> 1-800-123-1234</h4>
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> 1-800-123-1234</h4>
          </div>
        </div>
        <div className="right">
          <h4>About company</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium a, earum nostrum aliquam suscipit ratione. Inventore autem ex optio modi animi repellendus impedit necessitatibus, sunt, nostrum nam quae nemo culpa!</p>
          <div className="social">
            <FaMailBulk size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
            <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
            <FaLinkedinIn size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
