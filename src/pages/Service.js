import React from 'react'
import Articles from '../components/Articles'
import { WhiteBtn } from '../UI/Btn'
import { SectionTitle } from '../UI/Typography'
import '../styles/service.scss'

import TopBlock from '../components/TopBlock'
import adsBanner from '../image/ads-banner.png'
import Industry from '../components/Industry'
import { serviceItem } from '../data/constant'
import Dropdown from '../components/Dropdown'

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
      <section class="o-ads">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div
                class="o-ads-banner s-back-switch"
                style={{
                  backgroundImage: `url(${adsBanner})`,
                }}
              >
                <h2 class="text-white mb-24">Bring your vision to life!</h2>
                <WhiteBtn path={'/contact-us'}>{'Get started'}</WhiteBtn>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Articles title={'Recent articles'} />
    <Dropdown title={'title'} />
  </div>
)

export default ServicePage
