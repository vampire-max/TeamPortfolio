import React from 'react'
import Articles from '../components/Articles'
import { SectionTitle } from '../UI/Typography'
import '../styles/service.scss'
import TopBlock from '../components/TopBlock'
import Industry from '../components/Industry'
import { serviceItem } from '../data/constant'
import Ads from '../components/Ads'
import adsBanner from '../image/ads-banner.png'

const ServicePage = () => (
  <div className="expertiService">
    <div className="container">
      <TopBlock
        title={'A one-stop shop for your digital product.'}
        desc={
          ' We help our clients at each stage of the product life cycle: from ideation and product strategy to architecture and design, to development, QA, release and maintenance.'
        }
        path={'Get in touch'}
      />
      <SectionTitle>Services we offer</SectionTitle>
      <Industry industryItem={serviceItem} />
    </div>
    <Ads bgImage={`url(${adsBanner})`} title={'Bring your vision to life!'} />
    <Articles title={'Recent articles'} />
  </div>
)

export default ServicePage
