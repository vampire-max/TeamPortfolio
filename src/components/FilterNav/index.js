import React, { useState, useEffect } from 'react'

const FilterNav = ({ filterOptions, initData, renderItem }) => {
  const [filterOption, setFilterOption] = useState([])
  const [filteredItems, setFilteredItems] = useState(initData)

  const handleClick = (tagname) => (e) => {
    setFilterOption(tagname)
  }

  useEffect(() => {
    if (filterOption.length === 0) {
      setFilteredItems(initData)
    } else {
      const filtered = initData.filter((item) => {
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
    console.log(filterOption.length)
  }, [filterOption])

  return (
    <>
      <ul className="p-filter">
        {filterOptions.map((item, index) => (
          <li key={index}>
            <button className="filter-btn" onClick={handleClick(item.tag)}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      {filteredItems.map((item, index) => (
        <div key={index}>{renderItem(item, index)}</div>
      ))}
    </>
  )
}

export default FilterNav
