import React from 'react'
import QuoteImg from '../../../image/quote.svg'

const TestCard = ({ quote, avatar, name, position }) => {
  return (
    <div className="o-test-item">
      <p className="item-feedback">
        <img src={QuoteImg} />
        {quote}
      </p>
      <div className="item-client">
        <div
          className="item-client-photo"
          style={{ backgroundImage: `url(${avatar})` }}
        ></div>
        <div className="client-info">
          <p className="client-name">{name}</p>
          <p className="client-position">{position}</p>
        </div>
      </div>
    </div>
  )
}

export default TestCard
