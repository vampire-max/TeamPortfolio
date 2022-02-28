import React from 'react'
import Articles from '../components/Articles'
import TopBlock from '../components/TopBlock'
import Industry from '../components/Industry'
import { SectionTitle } from '../UI/Typography'
import { expertiseItem } from '../data/constant'

const Expertise = () => {
  return (
    <div className="expertise">
      <div className="container">
        <TopBlock
          title={'Domain and technical Expertise that you can rely on'}
          desc={
            'DreamHighTech’s deep technology and domain knowledge allows you to rely on us to deliver a great technological solution while you can continue focusing on your business.'
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
