import React, { useState } from 'react'
import '../styles/contact.scss'
import { Link } from 'react-router-dom'
import flag1 from '../image/flag.png'

const ContactUs = () => {
  const [isInvalidEmail, setIsInvalidEmail] = useState(false)
  const [value, setValue] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const value = e.target.value
    setValue({ ...value, [e.target.value]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="o-contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <h1 className="o-header mark-wrapper">
              Drop Us a line<mark>.</mark>
            </h1>
            <p className="desc">
              We will contact you within 1 business day to discuss your needs
              and plans.
            </p>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="input-control"
                name="Name"
                onChange={handleChange}
                value={value.name}
              />
              <input
                type="email"
                placeholder="Email*"
                className={`input-control ${isInvalidEmail && 'error-control'}`}
                name="Email*"
                onChange={handleChange}
                value={value.email}
              />
              <textarea
                type="text"
                placeholder="Message"
                name="Message"
                className="input-control"
                rows={6}
                cols="7"
                onChange={handleChange}
                value={value.message}
              />
              <div className="d-flex flex-wrap send-btn-wrapper">
                <p className="policy">
                  I have read and accepted the <a href="#">Privacy Policy</a> &
                  <a href="#"> Cookie Policy</a>
                </p>
                <button className="send-btn" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col-md-4 contact-item">
              <Link
                to="mailto:miyashitakoki719@gmail.com"
                className="contact-item-email"
              >
                miyashitakoki719@gmail.com
              </Link>
            </div>
            <div className="col-md-4 contact-item">
              <Link to="#" className="contact-item-email"></Link>
            </div>
            <div className="col-md-4 contact-item">
              <Link to="#" className="contact-item-email">
                Dreamhigh!#4890
              </Link>
            </div>
          </div>
          <div className="contact-us-person">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="contact-us-person-item">
                  <img src={flag1} className="item-flag" />
                  <h3 className="item-location">Japan</h3>
                  <div className="item-person">
                    <img />
                  </div>
                  <button className="item-btn">Message me</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
