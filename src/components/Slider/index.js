import React from 'react'
import Slider from 'react-slick'
import { SectionTitle } from '../../UI/Typography'

const ServiceSlider = ({ progressData }) => {
  const setting = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots slick-thumb',
    width: 670,

    customPaging: function (i) {
      return (
        <a>
          <span>{`0${i}`}</span>
        </a>
      )
    },
    responsive: [
      {
        width: 530,
      },
    ],
  }
  return (
    <div className="o-progress">
      <SectionTitle className={'text-start progress-title'}>
        {progressData.title}
      </SectionTitle>
      <p className="progress-desc">{progressData.desc}</p>

      <Slider {...setting}>
        {progressData.progress.map((item, index) => (
          <div key={index} style={{ width: 760 }}>
            {item}
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ServiceSlider
