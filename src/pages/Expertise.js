import React from 'react'
import Articles from '../components/Articles'
import TopBlock from '../components/TopBlock'
import Industry from '../components/Industry'
import { SectionTitle } from '../UI/Typography'
import sp1 from '../image/special/special1.png'
import sp2 from '../image/special/special2.png'
import sp3 from '../image/special/special3.png'
import sp4 from '../image/special/special4.png'

const expertiseItem = [
  {
    img: sp1,
    title: 'Health & Fitness',
    desc:
      'Leveraging human-centered digital tools to create better experiences in the health and fitness industry.',
  },
  {
    img: sp2,
    title: 'Product Development',
    desc:
      'Easy-to-use and functional solutions that meet market demand and address the industry’s rising technology needs.',
  },
  {
    img: sp3,
    title: 'FinTech',
    desc:
      'Providing businesses with cutting-edge financial solutions that keep them on top of their game.',
  },
  {
    img: sp4,
    title: 'Marketplaces',
    desc:
      'Ride a wave of shared economy as a powerful engine that connects clients with products and services.',
  },
]

const Expertise = () => {
  return (
    <div className="expertise">
      <div className="container">
        <TopBlock
          title={'Domain and technical Expertise that you can rely on'}
          desc={
            'ORIL’s deep technology and domain knowledge allows you to rely on us to deliver a great technological solution while you can continue focusing on your business.'
          }
          path={'Get in touch'}
        />
        <SectionTitle>Industries we excel in</SectionTitle>
        <Industry industryItem={expertiseItem} />
        <Articles title={'Recent articles'} />
      </div>
    </div>
  )
}

export default Expertise
