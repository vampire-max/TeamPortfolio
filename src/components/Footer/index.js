import React, { useEffect, useState, useRef } from 'react'
import '../../styles/footer.scss'
import footerLogo from '../../image/footer-logo.svg'
import Award from '../Awards'

import { Link } from 'react-router-dom'
import { logoImgTwo } from '../../data/constant'
import { linkItem } from '../../data/constant'

const Footer = () => {
  const [opened, setOpened] = useState('')
  const [isMobile, setIsMobile] = useState(false)
  const handleClick = (title) => {
    setOpened(title)

    if (opened === title) setOpened('')
  }

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    console.log('empty array')
  }, [])

  useEffect(() => {
    const resizeListener = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [window.innerWidth])

  useEffect(() => {
    console.log(isMobile, 'isMObile')
    console.log('width', window.innerWidth < 768)
  }, [isMobile])

  return (
    <div className="o-footer">
      <div className="container">
        <div className="row footer-section">
          <div className="col-lg-3">
            <a href="#" className="footer-logo">
              <img src={footerLogo} />
            </a>

            {!isMobile && (
              <div className="o-footer-info-wrapper">
                <div className="o-footer-info">
                  <p className="info-label">
                    <b>Email</b>
                  </p>
                  <a className="info-link" href="#">
                    contact@oril.co
                  </a>
                </div>
                <div className="o-footer-info">
                  <p className="info-label">
                    <b>Address</b>
                  </p>
                  <a className="info-link" href="#">
                    68 Jay Street Brooklyn, NY, 11201
                  </a>
                </div>
                <div className="o-footer-info">
                  <p className="info-label">
                    <b>Phone</b>
                  </p>
                  <a className="info-link" href="#">
                    +1-(347)-854-7585
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-8 offset-lg-1">
            <div className="footer-nav">
              {isMobile && (
                <div
                  class="o-footer__info-mobile"
                  onClick={() => handleClick('Contacts')}
                >
                  <p class="o-footer__nav-item-name">
                    <b>Contacts</b>
                    <svg
                      class="mod-mobile"
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.61679 10.71L11.2068 13.3C11.5968 13.69 12.2268 13.69 12.6168 13.3L15.2068 10.71C15.8368 10.08 15.3868 9 14.4968 9H9.31679C8.42679 9 7.98679 10.08 8.61679 10.71Z"
                        fill="#FFB248"
                      ></path>
                    </svg>
                  </p>
                  <ul
                    className={`o-footer__nav-item-menu ${
                      opened === 'Contacts' && 'opened'
                    }`}
                  >
                    <li>
                      <a href="mailto:contact@oril.co" target="_blank">
                        contact@oril.co
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://maps.google.com/?q=68 Jay Street Brooklyn, NY, 11201"
                        target="_blank"
                      >
                        68 Jay Street Brooklyn, NY, 11201
                      </a>
                    </li>

                    <li>
                      <a href="tel:+1-(347)-854-7585" target="_blank">
                        +1-(347)-854-7585
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              <div className="nav-item" onClick={() => handleClick('Service')}>
                <p className="o-footer__nav-item-name">
                  <b>Service</b>
                  <svg
                    class="mod-mobile"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.61679 10.71L11.2068 13.3C11.5968 13.69 12.2268 13.69 12.6168 13.3L15.2068 10.71C15.8368 10.08 15.3868 9 14.4968 9H9.31679C8.42679 9 7.98679 10.08 8.61679 10.71Z"
                      fill="#FFB248"
                    ></path>
                  </svg>
                </p>
                <ul
                  className={`o-footer__nav-item-menu ${
                    opened === 'Service' && 'opened'
                  }`}
                >
                  <li>
                    <Link to="/service/ui-ux-design">UI/UX Design</Link>
                  </li>
                  <li>
                    <Link to="/service/product-development">
                      Product Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/ioT-software-development">
                      IoT Software Development
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/digital-transformation">
                      Digital Transformation
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="nav-item"
                onClick={() => handleClick('Industries')}
              >
                <p className="o-footer__nav-item-name">
                  <b>Industries</b>
                  <svg
                    className="mod-mobile"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.61679 10.71L11.2068 13.3C11.5968 13.69 12.2268 13.69 12.6168 13.3L15.2068 10.71C15.8368 10.08 15.3868 9 14.4968 9H9.31679C8.42679 9 7.98679 10.08 8.61679 10.71Z"
                      fill="#FFB248"
                    ></path>
                  </svg>
                </p>

                <ul
                  className={`o-footer__nav-item-menu ${
                    opened === 'Industries' && 'opened'
                  }`}
                >
                  <li className="">
                    <a className="" href="https://oril.co/industries/fintech/">
                      FinTech
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="https://oril.co/industries/proptech/">
                      PropTech
                    </a>
                  </li>
                  <li className="">
                    <a
                      className=""
                      href="https://oril.co/industries/marketplace/"
                    >
                      Marketplace
                    </a>
                  </li>
                  <li className="">
                    <a
                      className=""
                      href="https://oril.co/industries/health-fitness/"
                    >
                      Health &amp; Fitness
                    </a>
                  </li>
                </ul>
              </div>
              <div className="nav-item" onClick={() => handleClick('Company')}>
                <p className="o-footer__nav-item-name">
                  <b>Company</b>
                  <svg
                    className="mod-mobile"
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.61679 10.71L11.2068 13.3C11.5968 13.69 12.2268 13.69 12.6168 13.3L15.2068 10.71C15.8368 10.08 15.3868 9 14.4968 9H9.31679C8.42679 9 7.98679 10.08 8.61679 10.71Z"
                      fill="#FFB248"
                    ></path>
                  </svg>
                </p>

                <ul
                  className={`o-footer__nav-item-menu ${
                    opened === 'Company' && 'opened'
                  }`}
                >
                  <li className="">
                    <a className="" href="https://oril.co/about-us/">
                      About Us
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="https://oril.co/careers/">
                      Careers
                    </a>
                  </li>
                  <li className="">
                    <a className="" href="https://oril.co/blog/">
                      Blog
                    </a>
                  </li>
                  <li className="hide_on_mobile">
                    <a
                      className="highlighted"
                      href="https://oril.co/contact-us/"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12">
            <Award logoitem={logoImgTwo} />
          </div>
          <div className="o-divider o-footer-divider"></div>
          <div className="o-footer__bottom">
            <p className="o-footer__copyright">
              ©All rights reserved. ORIL Inc 2021.
            </p>

            <ul className="o-footer__additional-nav">
              <li>
                <a href="https://oril.co/privacy-policy/">Privacy Policy</a>
              </li>
              <li>
                <a href="https://oril.co/cookie-policy/">Cookie Policy</a>
              </li>
            </ul>

            <ul className="o-footer__socials">
              {linkItem.map((item, index) => (
                <li key={index}>
                  <a href={item.url} target="_blank">
                    <img src={item.linkImg} alt={item.alt} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
