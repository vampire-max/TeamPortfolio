import React from 'react'
import '../../styles/awards.scss'

const Award = ({ logoitem }) => {
  return (
    <div className="o-banner__awards">
      {logoitem.map((item, index) => (
        <div className="o-banner__awards-item" key={index}>
          <a href={item.url} target="_blank">
            <img src={item.img} alt={item.alt} />
            <img className="active" src={item.hover} alt={item.alt} />
          </a>
        </div>
      ))}
    </div>
  )
}

export default Award
