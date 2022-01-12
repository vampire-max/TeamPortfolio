import React from 'react'
import Articles from '../components/Articles'
import { WhiteBtn } from '../UI/Btn'
import { SectionTitle } from '../UI/Typography'
import '../styles/service.scss'
import sp1 from '../image/special/special1.png'
import sp2 from '../image/special/special2.png'
import sp3 from '../image/special/special3.png'
import sp4 from '../image/special/special4.png'
import TopBlock from '../components/TopBlock'
import adsBanner from '../image/ads-banner.png'
import Industry from '../components/Industry'

const serviceItem = [
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
  </div>
)

export default ServicePage
