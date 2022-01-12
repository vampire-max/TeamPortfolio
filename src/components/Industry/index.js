import React from 'react'
import IndustryItem from './item'

const Industry = ({ industryItem }) => {
  return (
    <div className="industries-block">
      {industryItem.map((item, index) => (
        <IndustryItem item={item} key={index} index={index} />
      ))}
    </div>
  )
}

export default Industry
