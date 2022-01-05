import React from 'react'
import '../styles/feedback.scss'
import validator from 'validator'
import { useState } from 'react'

const Feedback = () => {
  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if (!validator.isEmail(email)) {
      setEmailError('The e-mail address entered is invalid.')
    }
  }

  return (
    <div id="feedback">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1">
            <p className="o-feedback-desc">
              Subscribe to our blog to learn about tech trends and innovative
              solutions.
            </p>
            <div className="footer-form-wrapper">
              <form
                className="footer-form"
                action=""
                // method="post"
                noValidate="novalidate"
              >
                <input
                  type="email"
                  placeholder="Email"
                  required="true"
                  className={emailError ? 'red-line' : ''}
                  onChange={(e) => validateEmail(e)}
                />
                <button type="button" onClick={(e) => validateEmail(e)}>
                  Subscribe
                </button>
              </form>
            </div>
            <span className="validate-tip">{emailError}</span>
            <div className="footer-form-info">
              <p>
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.99997 8.58597L1.70697 5.29297L0.292969 6.70697L4.99997 11.414L14.707 1.70697L13.293 0.292969L4.99997 8.58597Z"
                    fill="#FFB248"
                  ></path>
                </svg>
                no spam
              </p>
              <p>
                <svg
                  width="15"
                  height="12"
                  viewBox="0 0 15 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.99997 8.58597L1.70697 5.29297L0.292969 6.70697L4.99997 11.414L14.707 1.70697L13.293 0.292969L4.99997 8.58597Z"
                    fill="#FFB248"
                  ></path>
                </svg>
                100% Useful content, always
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
