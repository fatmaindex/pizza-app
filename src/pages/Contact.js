import React from 'react'
import "../styles/Contact.css"


function Contact() {
  return (
 <div className="contact">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p>Email: info@pizzashop.com</p>
          <p>Phone: 123-456-7890</p>
          <p>Address: 123 Pizza St, City, Country</p>
        </div>
        <div className="contact-image">
          <img src="https://via.placeholder.com/400x300" alt="Contact Us" />
        </div>
      </div>
    
    </div>

  )
}

export default Contact
