import React from 'react'
import '../../styles/footer.scss'
import footerLogo from '../../image/footer-logo.svg'
import Award from '../Awards'

import logo1 from '../../image/logos/logo1.png'
import logo1_3 from '../../image/logos/logo1_3.png'
import logo2 from '../../image/logos/logo2.png'
import logo2_3 from '../../image/logos/logo2_3.png'
import logo3 from '../../image/logos/logo3.png'
import logo3_3 from '../../image/logos/logo3_3.png'
import logo4 from '../../image/logos/logo4.png'
import logo4_3 from '../../image/logos/logo4_3.png'
import logo5 from '../../image/logos/logo5.png'
import logo5_3 from '../../image/logos/logo5_3.png'
import facebook from '../../image/links/facebook.svg'
import linkedin from '../../image/links/linkedin.svg'
import twitter from '../../image/links/twitter.svg'
import behance from '../../image/links/behance.svg'
import instagram from '../../image/links/instagram.svg'
import { Link } from 'react-router-dom'

const logoImgTwo = [
  {
    url: 'https://clutch.co/profile/oril',
    img: logo1_3,
    hover: logo1,
    alt: 'clutch-1',
  },
  {
    url: 'https://www.upwork.com/o/companies/~0165fed1df7da21a1d/',
    img: logo2_3,
    hover: logo2,
    alt: 'upwork-2-1',
  },
  {
    url: 'https://youteam.io/partners/oril-inc',
    img: logo3_3,
    hover: logo3,
    alt: 'You team',
  },
  {
    url: 'https://jobs.dou.ua/companies/oril/',
    img: logo4_3,
    hover: logo4,
    alt: 'DOU',
  },
  {
    url: 'https://jobs.dou.ua/companies/oril/',
    img: logo5_3,
    hover: logo5,
    alt: 'DOU',
  },
]

const linkItem = [
  {
    url: '#',
    linkImg: facebook,
    alt: 'facebook',
  },
  {
    url: '#',
    linkImg: linkedin,
    alt: 'linkedin',
  },
  {
    url: '#',
    linkImg: twitter,
    alt: 'twitter',
  },
  {
    url: '#',
    linkImg: behance,
    alt: 'behance',
  },
  {
    url: '#',
    linkImg: instagram,
    alt: 'instagram',
  },
]

const Footer = () => {
  return (
    <div className="o-footer">
      <div className="container">
        <div className="row footer-section">
          <div className="col-lg-3">
            <a href="#" className="footer-logo">
              <img src={footerLogo} />
            </a>
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
          </div>
          <div className="col-lg-8 offset-lg-1">
            <div className="footer-nav">
              <div className="nav-item">
                <p>
                  <b>Service</b>
                </p>
                <ul className="nav-item-menu">
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
              <div className="nav-item">
                <p>
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

                <ul className="nav-item-menu">
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
              <div className="nav-item">
                <p>
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

                <ul className="nav-item-menu">
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
