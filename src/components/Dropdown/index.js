import React, { useState } from 'react'
import { NavDropdown, Dropdown } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom'
import { dropdownItems } from '../../data/constant'

const CustomDropdown = ({ title, url }) => {
  const [show, setShow] = useState('')
  const navigate = useNavigate()

  return (
    <NavDropdown
      title={title}
      id="collasible-nav-dropdown"
      show={show === { title } ? true : false}
      onMouseEnter={() => setShow('Service')}
      onMouseLeave={() => setShow('')}
      onClick={(e) => navigate(url)}
    >
      {dropdownItems.service.map((item, index) => {
        return (
          <Dropdown.Item eventKey={index}>
            <Link to={item.url} onClick={(e) => e.stopPropagation()}>
              {item.title}
            </Link>
          </Dropdown.Item>
        )
      })}
    </NavDropdown>
  )
}

export default CustomDropdown
