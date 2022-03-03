import React from 'react'
import { Link } from 'react-router-dom'
import { positionData } from '../../data/constant'
import { SectionTitle } from '../../UI/Typography'

const Position = () => {
  return (
    <div className="o-position row">
      <SectionTitle className={'text-start'}>
        Open Position<mark>:</mark>
      </SectionTitle>
      <div className="row">
        {positionData.map((item, index) => (
          <div className="col-lg-4 col-md-6 position-item" key={index}>
            <div className="item-inner" key={index}>
              <h3 className="item-title">{item.title}</h3>
              <ul className="item-tags">
                {item.tags.map((tag, idx) => (
                  <li key={idx}>{tag}</li>
                ))}
              </ul>
              <Link to={'/'} className="item-link">
                See more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Position
