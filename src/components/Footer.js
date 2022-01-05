import React from 'react'
import '../styles/footer.scss'
import footerLogo from '../image/footer-logo.svg'
import Award from './award'

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
                <ul class="nav-item-menu">
                  <li>
                    <a href="https://oril.co/services/ui-ux-design/">
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a href="https://oril.co/services/product-development/">
                      Product Development
                    </a>
                  </li>
                  <li>
                    <a href="https://oril.co/services/iot-software-development/">
                      IoT Software Development
                    </a>
                  </li>
                  <li>
                    <a href="https://oril.co/services/digital-transformation/">
                      Digital Transformation
                    </a>
                  </li>
                </ul>
              </div>
              <div class="nav-item">
                <p>
                  <b>Industries</b>
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

                <ul class="nav-item-menu">
                  <li class="">
                    <a class="" href="https://oril.co/industries/fintech/">
                      FinTech
                    </a>
                  </li>
                  <li class="">
                    <a class="" href="https://oril.co/industries/proptech/">
                      PropTech
                    </a>
                  </li>
                  <li class="">
                    <a class="" href="https://oril.co/industries/marketplace/">
                      Marketplace
                    </a>
                  </li>
                  <li class="">
                    <a
                      class=""
                      href="https://oril.co/industries/health-fitness/"
                    >
                      Health &amp; Fitness
                    </a>
                  </li>
                </ul>
              </div>
              <div class="nav-item">
                <p>
                  <b>Company</b>
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

                <ul class="nav-item-menu">
                  <li class="">
                    <a class="" href="https://oril.co/about-us/">
                      About Us
                    </a>
                  </li>
                  <li class="">
                    <a class="" href="https://oril.co/careers/">
                      Careers
                    </a>
                  </li>
                  <li class="">
                    <a class="" href="https://oril.co/blog/">
                      Blog
                    </a>
                  </li>
                  <li class="hide_on_mobile">
                    <a class="highlighted" href="https://oril.co/contact-us/">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12">
            <Award />
          </div>
          <div className="col-12"></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
