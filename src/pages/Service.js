import React from 'react'
import Articles from '../components/Articles'
import { SectionTitle } from '../UI/Typography'
import { ProjectsBtn } from '../UI/Btn'
import '../styles/service.scss'
import sp1 from '../image/special/special1.png'
import sp2 from '../image/special/special2.png'
import sp3 from '../image/special/special3.png'
import sp4 from '../image/special/special4.png'
import TopBlock from '../components/TopBlock'

const industryItem = [
  {
    img: sp1,
    title: 'Product Design',
    desc:
      'Great ideas attract users, but thoughtful designs make them stay. We create products your customers will love.',
  },
  {
    img: sp2,
    title: 'Product Development.',
    desc:
      'Transform your vision into a strong, efficient product. With the right product development services, your software can become your competitive advantage.',
  },
  {
    img: sp3,
    title: 'IoT Software Development.',
    desc:
      'We build smart IoT solutions that live up to the market standards and stay relevant over time.',
  },
  {
    img: sp4,
    title: 'Digital Transformation',
    desc:
      'Technology is evolving, so should your business. Transform your non-digital processes and services to stay competitive and meet ever-changing customer expectations.',
  },
]

const ServicePage = () => (
  <div className="expertiService">
    <div className="container">
      <TopBlock />
      <SectionTitle>Services we offer</SectionTitle>
      <div className="industries-block">
        {industryItem.map((item, index) => (
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
        ))}
      </div>
    </div>
    <Articles title={'Recent articles'} />
  </div>
)

export default ServicePage
