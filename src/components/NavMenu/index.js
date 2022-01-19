import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { dropdownItems } from '../../data/constant'

const NavMenu = ({ navClass }) => {
  const [opened, setOpened] = useState('')

  const handleClick = (title) => {
    setOpened(title)

    if (opened === title) setOpened('')
  }

  return (
    <div className={navClass}>
      {dropdownItems.service.map((item, index) => (
        <div
          className="nav-item"
          onClick={() => handleClick(item.title)}
          key={index}
        >
          <p className="o-footer__nav-item-name">
            <b>{item.title}</b>
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
              opened === item.title && 'opened'
            }`}
          >
            <li>
              <Link to="/service/ui-ux-design">UI/UX Design</Link>
            </li>
            <li>
              <Link to="/service/product-development">Product Development</Link>
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
      ))}
      <div className="nav-item" onClick={() => handleClick('Industries')}>
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
            <a className="" href="https://oril.co/industries/marketplace/">
              Marketplace
            </a>
          </li>
          <li className="">
            <a className="" href="https://oril.co/industries/health-fitness/">
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
            <a className="highlighted" href="https://oril.co/contact-us/">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavMenu
