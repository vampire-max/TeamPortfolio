import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../styles/header.scss'
import logo from '../../image/logo.svg'
import { Dropdown, NavDropdown } from 'react-bootstrap'

const Header = () => {
  const router = useLocation()
  const pathname = router.pathname
  const [show, setShow] = useState(false)
  const showDropdown = (e) => {
    setShow(!show)
  }

  const hideDropdown = (e) => {
    setShow(false)
  }

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
                  <li
                    className={`header_menu_item ${
                      pathname === '/' ? 'current_menu' : ''
                    }`}
                  >
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className={`header_menu_item ${
                      pathname === '/service' ? 'current_menu' : ''
                    }`}
                  >
                    <Link to="/service">
                      service
                      {/* <NavDropdown
                        title="Service"
                        id="collasible-nav-dropdown"
                        show={show}
                        onMouseEnter={showDropdown}
                        onMouseLeave={hideDropdown}
                        // onClick={}
                      >
                        <Dropdown.Item eventKey="1">UI/UX Design</Dropdown.Item>
                      </NavDropdown> */}
                    </Link>
                  </li>
                  <li
                    className={`header_menu_item ${
                      pathname === '/expertise' ? 'current_menu' : ''
                    }`}
                  >
                    <Link to="/expertise">Expertise</Link>
                  </li>
                  <li
                    className={`header_menu_item ${
                      pathname === '/portfolio' ? 'current_menu' : ''
                    }`}
                  >
                    <Link to="/portfolio">Portfolio</Link>
                  </li>
                  <li
                    className={`header_menu_item ${
                      pathname === '/portfolio/#' ? 'current_menu' : ''
                    }`}
                  >
                    <Link to="/portfolio/#">Company</Link>
                  </li>
                  <li
                    className={`header_menu_item ${
                      pathname === '/blog' ? 'current_menu' : ''
                    }`}
                  >
                    <Link to="/blog">Blog</Link>
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
