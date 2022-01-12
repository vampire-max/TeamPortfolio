import React from 'react'
import { ProjectsBtn } from '../../UI/Btn'

const IndustryItem = ({ item, index }) => {
  return (
    <div
      className={`row industry-block ${
        index % 2 === 0 ? '' : 'flex-row-reverse'
      }`}
      key={index}
    >
      <div className="industry-img">
        <img src={item.img} />
      </div>
      <div className="industry-content">
        <h2 className="industry-title">{item.title}</h2>
        <p className="industry-desc">{item.desc}</p>
        <ProjectsBtn>{'Learn more'}</ProjectsBtn>
      </div>
    </div>
  )
}

export default IndustryItem
