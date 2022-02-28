import React from 'react'
import { Link } from 'react-router-dom'

const SpecialCard = ({ item }) => {
  return (
    <div className="slider-container">
      <div className="o-slider-item">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-md-9 col-10">
            <img className="o-special_item_img" src={item.image} />
            <h3 className="o_special_item_title">{item.title}</h3>
            <p className="o_special_item_desc">{item.desc}</p>
            <Link
              to={item.path}
              className={`o-btn o-btn-primary o_special_item_btn`}
            >
              'Learn more'
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialCard
