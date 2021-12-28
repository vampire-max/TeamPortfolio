import React, { useEffect, useState } from 'react'
import { SectionTitle } from '../../UI/Typography'
import ServiceItem from './serviceItem'
import '../../styles/service.scss'
import service1 from '../../image/service/service1.png'
import service2 from '../../image/service/service2.png'
import service3 from '../../image/service/service3.png'
import service4 from '../../image/service/service4.png'

const ourServices = [
  {
    name: 'UI/UX Design',
    img: service1,
    desc:
      'Intuitive design is vital for the success of any digital product. You can improve conversions with the help of our UI/UX design and development services ‒ by turning complex interactions into simple flows.',
  },
  {
    name: 'Product Development',
    img: service2,
    desc:
      'ORIL develops secure, robust, and scalable solutions across multiple industries. From market research and design to development, launch, and support, we provide full-cycle product development services.',
  },
  {
    name: 'IoT Development',
    img: service3,
    desc:
      'We provide a full spectrum of services: design, development, and launching the connected IoT solutions. We believe that the future holds big promise for IoT and companies embracing it!',
  },
  {
    name: 'Digital Transformation',
    img: service4,
    desc:
      'The modern world offers unique strategic opportunities for lots of businesses. The key is to capture the ones that matter most and execute them. Digital transformation will completely shift the way you deliver value to customers, solve problems, and support your team.',
  },
]

const Service = () => {
  const [direction, setDirection] = useState('false')
  useEffect(() => {
    console.log('direction', direction)
  })

  return (
    <div id="o_service" className="o-service section">
      <div className="container">
        <SectionTitle>Services We Deliver</SectionTitle>
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

export default Service
