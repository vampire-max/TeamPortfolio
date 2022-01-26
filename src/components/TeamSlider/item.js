import React from 'react'
import { teamData } from '../../data/constant'

const TeamCard = () => {
  return (
    <div className="container">
      <div className="d-flex flex-wrap">
        {teamData.map((item, index) => (
          <div className="team-management" key={index}>
            <div
              className="team-item"
              style={{ backgroundImage: `url(${item.hoverImg})` }}
            >
              <div className="team-info">
                <p>{item.name}</p>
                <small>{item.position}</small>
              </div>
              <div className="img-overlay">
                <img src={item.img} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TeamCard
