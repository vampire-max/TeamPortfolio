import React from 'react'
import { SectionTitle } from '../../UI/Typography'
import ServiceItem from './item'
import '../../styles/service.scss'
import { ourServices } from '../../data/constant'

const Services = () => {
  return (
    <div id="o_service" className="o-service section">
      <div className="container">
        <SectionTitle className="o-service-title">
          Services We Deliver
        </SectionTitle>
        <div className="row o_service_row">
          {ourServices.map((item, index) => (
            <ServiceItem item={item} key={index} index={index} />
          ))}
        </div>
        <div className="o-divider"></div>
      </div>
    </div>
  )
}

export default Services
