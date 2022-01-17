import React from 'react'
import '../../styles/about.scss'

const About = ({ desc, data, itemClass }) => {
  return (
    <div className="about row">
      <div className="col-md-11">
        <p className="about-desc">{desc}</p>
      </div>
      <div className="row">
        {data.map((item, index) => {
          return (
            <div className={itemClass} key={index}>
              <div className="about-item">
                <img src={item.img} />
                <div className="item-info">
                  <h3 className="title">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default About
