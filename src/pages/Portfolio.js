import React, { useEffect, useState } from 'react'
import ProjectsItem from '../components/Projects/item'
import '../styles/portfolio.scss'
import { H1 } from '../UI/Typography'
import { portfolioItem } from '../data/constant'

const Portfolio = () => {
  const [filterOption, setFilterOption] = useState([])
  const [filteredItems, setFilteredItems] = useState(portfolioItem)

  const handleClick = (tagname) => (e) => {
    setFilterOption(tagname)
  }

  useEffect(() => {
    if (filterOption.length === 0) {
      setFilteredItems(portfolioItem)
    } else {
      const filtered = portfolioItem.filter((item) => {
        let isIncluded = false
        filterOption.forEach((tag) => {
          if (item.tags.includes(tag)) {
            isIncluded = true
          }
        })

        return isIncluded
      })

      setFilteredItems(filtered)
    }
  }, [filterOption])

  return (
    <div className="container">
      <div className="portfolio-top">
        <H1 className={'o-projects-title mark-wrapper'}>
          Portfolio<mark>.</mark>
        </H1>

        <p className="o_projects_desc">
          See how ORIL has helped its clients achieve their vision of digital
          innovation.
        </p>
      </div>
      <div className="col-12 p-nav">
        <ul className="p-filter">
          <li>
            <button className="filter-btn" onClick={handleClick('')}>
              All
            </button>
          </li>
          <li>
            <button
              className="filter-btn"
              onClick={handleClick(['#proptech', '#WebApp'])}
            >
              PropTech
            </button>
          </li>
          <li>
            <button
              className="filter-btn"
              onClick={handleClick(['#FineTech', '#BlockChain'])}
            >
              FineTech
            </button>
          </li>
          <li>
            <button
              className="filter-btn"
              onClick={handleClick(['#HealthTech', '#Healthcare', '#Fitness'])}
            >
              Health&Fitness
            </button>
          </li>
          <li>
            <button
              className="filter-btn"
              onClick={handleClick(['#Auction', '#RealEstate', '#Social'])}
            >
              Marketplace
            </button>
          </li>
          <li>
            <button
              className="filter-btn"
              onClick={handleClick(['#Web', '#WebApp'])}
            >
              Web
            </button>
          </li>
          <li>
            <button
              className="filter-btn"
              onClick={handleClick(['#MobileApp', '#WebApp'])}
            >
              Mobile
            </button>
          </li>
          <li>
            <button className="filter-btn" onClick={handleClick(['#IoT'])}>
              IoT
            </button>
          </li>
        </ul>
      </div>
      {filteredItems.map((item, index) => (
        <div key={index}>
          <ProjectsItem item={item} index={index} />
          <div className="o-divider p-divider"></div>
        </div>
      ))}
    </div>
  )
}

export default Portfolio
