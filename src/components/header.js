import React from 'react'
import '../styles/header.scss'
import logo from '../image/logo.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row position-relative">
          <div className="col-12">
            <div className="header_wrap">
              <a href="#">
                <img src={logo} />
              </a>
              <div className="header_button_mobile">
                <a href="#" className="header_link_mobile">
                  Contact Us
                </a>
                <a href="#" className="header_burger">
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              <nav className="header_nav">
                <ul id="header_menu" className="header_menu">
                  <li className="header_menu_item current_menu">
                    <a href="#">Home</a>
                  </li>
                  <li className="header_menu_item">
                    <a href="#">Service</a>
                  </li>
                  <li className="header_menu_item">
                    <a href="#">Expertise</a>
                  </li>
                  <li className="header_menu_item">
                    <a href="#">Portfolio</a>
                  </li>
                  <li className="header_menu_item">
                    <a href="#">Company</a>
                  </li>
                  <li className="header_menu_item">
                    <a href="#">Blog</a>
                  </li>
                </ul>
                <div className="header_nav_btn">
                  <a href="#" className="o-btn btn-contact header-btn-contact">
                    Contact Us
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
