import React from 'react'
import { WhiteBtn } from '../../UI/Btn'

const Ads = ({ title, bgImage }) => {
  return (
    <section className="o-ads">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="o-ads-banner s-back-switch"
              style={{
                backgroundImage: bgImage,
              }}
            >
              <h2 className="text-white mb-24">{title}</h2>
              <WhiteBtn path={'/contact-us'}>{'Get started'}</WhiteBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ads
