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
                  <a
                    className="info-link"
                    href="mailto:miyashitakoki719@gmail.com"
                  >
                    miyashitakoki719@gmail.com
                  </a>
                </div>
                <div className="o-footer-info">
                  <p className="info-label">
                    <b>Address</b>
                  </p>
                  <a
                    className="info-link"
                    href="https://maps.google.com/?q=298 Shomen-cho, Higashiyama Ward, Kyoto, Japan"
                  >
                    298 Shomen-cho, Higashiyama Ward, Kyoto, Japan
                  </a>
                </div>
                <div className="o-footer-info">
                  <p className="info-label">
                    <b>Skype</b>
                  </p>
                  <a className="info-link" href="#"></a>
                </div>
                <div className="o-footer-info">
                  <p className="info-label">
                    <b>Discord</b>
                  </p>
                  <a className="info-link" href="#"></a>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-8 offset-lg-1">
            <div className="footer-nav">
              {isMobile && (
                <div
                  className="o-footer__info-mobile"
                  onClick={() => handleClick('Contacts')}
                >
                  <p className="o-footer__nav-item-name">
                    <b>Contacts</b>
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
                      opened === 'Contacts' && 'opened'
                    }`}
                  >
                    <li>
                      <a
                        href="mailto:miyashitakoki719@gmail.com"
                        target="_blank"
                      >
                        miyashitakoki719@gmail.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://maps.google.com/?q=298 Shomen-cho, Higashiyama Ward, Kyoto, Japan"
                        target="_blank"
                      >
                        298 Shomen-cho, Higashiyama Ward, Kyoto, Japan
                      </a>
                    </li>
                    <li>
                      <a href="#" target="_blank"></a>
                    </li>
                    <li>
                      <a href="#" target="_blank"></a>
                    </li>
                  </ul>
                </div>
              )}
              <div className="nav-item" onClick={() => handleClick('Service')}>
                <p className="o-footer__nav-item-name">
                  <b>Service</b>
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
                  <li>
                    <Link to="/service/game-development">Game Development</Link>
                  </li>
                  <li>
                    <Link to="/service/blockchain-technology">
                      Blockchain Technology
                    </Link>
                  </li>
                  <li>
                    <Link to="/service/sass-web-app">SASS Web Application</Link>
                  </li>
                  <li>
                    <Link to="/service/mobile-development">
                      Native Desktop - Mobile Application Development
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
                  <li>
                    <Link to="industries/fintech">FinTech</Link>
                  </li>
                  <li>
                    <Link to="industries/PropTech">PropTech</Link>
                  </li>
                  <li>
                    <Link to="industries/Marketplace">Marketplace</Link>
                  </li>
                  <li>
                    <Link to="industries/Health">Health &amp; Fitness</Link>
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
                  <li>
                    <Link to="/">About Us</Link>
                  </li>
                  <li className="hide_on_mobile">
                    <Link className="highlighted" to="/">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="o-divider o-footer-divider"></div>
          <div className="o-footer__bottom">
            <p className="o-footer__copyright">
              ©All rights reserved. DreamHighTech Inc 2021.
            </p>

            <ul className="o-footer__additional-nav">
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
