import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../../styles/header.scss'
import '../../styles/dropdown.scss'
import logo from '../../image/logo.png'
import { Dropdown, NavDropdown } from 'react-bootstrap'
import { dropdownItems } from '../../data/constant'

const Header = () => {
  const [opened, setOpened] = useState(false)
  const router = useLocation()
  const navigate = useNavigate()
  const pathname = router.pathname
  const [show, setShow] = useState('')

  useEffect(() => {
    setOpened(false)
  }, [pathname])

  return (
    <div className={`header ${opened && 'opened'}`}>
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
                <a
                  className={`header_burger ${opened && 'opened'}`}
                  onClick={(e) => {
                    setOpened(!opened)
                  }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
              <nav className={`header_nav ${opened && 'opened'}`}>
                <ul id="header_menu" className="header_menu">
                  <li
                    className={`header_menu_item ${
                      pathname === '/' && 'current_menu'
                    }`}
                  >
                    <Link
                      className="header-menu-tag"
                      to="/"
                      onClick={(e) => setOpened(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className={`header_menu_item ${
                      pathname.includes('/service') && 'current_menu'
                    }`}
                  >
                    <NavDropdown
                      title="Service"
                      id="collasible-nav-dropdown"
                      show={show === 'Service' ? true : false}
                      onMouseEnter={() => setShow('Service')}
                      onMouseLeave={() => setShow('')}
                      onClick={(e) => {
                        setOpened(false)
                      }}
                    >
                      {dropdownItems.service.map((item, index) => {
                        return (
                          <Dropdown.Item
                            key={index}
                            eventKey={index}
                            onClick={(e) => {
                              e.stopPropagation()
                              navigate(item.url)
                              setOpened(false)
                            }}
                          >
                            {item.title}
                          </Dropdown.Item>
                        )
                      })}
                    </NavDropdown>
                  </li>
                  <li
                    className={`header_menu_item ${
                      pathname === '/portfolio' && 'current_menu'
                    }`}
                  >
                    <Link
                      className="header-menu-tag"
                      to="/portfolio"
                      onClick={(e) => setOpened(false)}
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li
                    className={`header_menu_item ${
                      pathname.includes('/blog/') && 'current_menu'
                    }`}
                  >
                    <NavDropdown
                      title="Company"
                      id="collasible-nav-dropdown"
                      show={show === 'Company' ? true : false}
                      onMouseEnter={() => setShow('Company')}
                      onMouseLeave={() => setShow('')}
                      onClick={(e) => {
                        setOpened(false)
                      }}
                    >
                      {dropdownItems.company.map((item, index) => {
                        return (
                          <Dropdown.Item
                            key={index}
                            eventKey={index}
                            className="h-dropdown"
                            onClick={(e) => {
                              e.stopPropagation()
                              navigate(item.url)
                              setOpened(false)
                            }}
                          >
                            {item.title}
                          </Dropdown.Item>
                        )
                      })}
                    </NavDropdown>
                  </li>
                </ul>
                <div className="header_nav_btn">
                  <Link
                    to="/contact-us"
                    className="o-btn btn-contact header-btn-contact"
                  >
                    Contact Us
                  </Link>
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
