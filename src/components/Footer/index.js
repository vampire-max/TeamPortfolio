import React, { useEffect, useState } from 'react'
import '../../styles/footer.scss'
import footerLogo from '../../image/logo.png'
import { dropdownItems } from '../../data/constant'
import { Link } from 'react-router-dom'

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
          <a href="#" className="footer-logo">
            <img src={footerLogo} />
          </a>
          {!isMobile && (
            <div className="o-footer-info-wrapper row">
              <div className="col-lg-3 o-footer-info">
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
              <div className="col-lg-3 o-footer-info">
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
              <div className="col-lg-3 o-footer-info">
                <p className="info-label">
                  <b>Skype</b>
                </p>
                <a className="info-link" href="#"></a>
              </div>
              <div className="col-lg-3 o-footer-info">
                <p className="info-label">
                  <b>Discord</b>
                </p>
                <a
                  className="info-link"
                  href="https://discord.com/invite/9SSgzzme"
                >
                  DreamHigh!#4890
                </a>
              </div>
            </div>
          )}
          {/* <div className="col-lg-8 offset-lg-1">
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
                      <a href="#" target="_blank">
                        Dreamhigh!#4890
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div> */}
          <div className="o-divider o-footer-divider"></div>
          <div className="o-footer__bottom">
            <p className="o-footer__copyright">
              ??All rights reserved. DreamHighTech Inc 2021.
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
