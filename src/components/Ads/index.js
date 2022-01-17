import React from 'react'
import adsBanner from '../../image/ads-banner.png'
import { WhiteBtn } from '../../UI/Btn'

const Ads = ({ title }) => {
  return (
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
              <h2 class="text-white mb-24">{title}</h2>
              <WhiteBtn path={'/contact-us'}>{'Get started'}</WhiteBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ads
