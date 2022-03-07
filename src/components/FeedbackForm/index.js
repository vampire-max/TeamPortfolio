import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import validator from 'validator'

const FeedbackForm = () => {
  const [emailError, setEmailError] = useState('')
  const [value, setValue] = useState('')

  const validateEmail = (e) => {
    var email = e.target.value

    if (!validator.isEmail(email)) {
      setEmailError('The e-mail address entered is invalid.')
    }
  }

  const router = useLocation()
  const pathname = router.pathname

  useEffect(() => {
    setValue('')
    setEmailError('')
  }, [pathname])

  return (
    <div>
      <div className="footer-form-wrapper">
        <form className="footer-form" action="" noValidate="novalidate">
          <input
            type="email"
            placeholder="Email"
            required={true}
            className={emailError ? 'red-line' : ''}
            onChange={(e) => {
              validateEmail(e)
              setValue(e.target.value)
            }}
            value={value}
          />
          <button type="button" onClick={(e) => validateEmail(e)}>
            <span>Subscribe</span>
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
  )
}

export default FeedbackForm
