import React, { useEffect, useState } from 'react'
import ProjectsItem from '../components/Projects/item'
import '../styles/portfolio.scss'
import { H1 } from '../UI/Typography'
import { portfolioItem, projectFilterMenu } from '../data/constant'
import FilterNav from '../components/FilterNav'

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
          See how DreamHighTech has helped its clients achieve their vision of
          digital innovation.
        </p>
      </div>
      <div className="col-12 p-nav">
        <FilterNav
          initData={portfolioItem}
          filterOptions={projectFilterMenu}
          renderItem={(item, index) => {
            return (
              <div>
                <ProjectsItem item={item} index={index} />
                <div className="o-divider p-divider"></div> )
              </div>
            )
          }}
        />
      </div>
    </div>
  )
}

export default Portfolio
