import React from 'react'
import Award from '../../components/Awards'
import { H1 } from '../../UI/Typography'
import { PrimaryBtn } from '../../UI/Btn'
import logo1 from '../../image/logos/logo1.png'
import logo1_2 from '../../image/logos/logo1_2.png'
import logo2 from '../../image/logos/logo2.png'
import logo2_2 from '../../image/logos/logo2_2.png'
import logo3 from '../../image/logos/logo3.png'
import logo3_2 from '../../image/logos/logo3_2.png'
import logo4 from '../../image/logos/logo4.png'
import logo4_2 from '../../image/logos/logo4_2.png'
import logo5 from '../../image/logos/logo5.png'
import logo5_2 from '../../image/logos/logo5_2.png'

const logoImgThree = [
  {
    url: 'https://clutch.co/profile/oril',
    img: logo1_2,
    hover: logo1,
    alt: 'clutch-1',
  },
  {
    url: 'https://www.upwork.com/o/companies/~0165fed1df7da21a1d/',
    img: logo2_2,
    hover: logo2,
    alt: 'upwork-2-1',
  },
  {
    url: 'https://youteam.io/partners/oril-inc',
    img: logo3_2,
    hover: logo3,
    alt: 'You team',
  },
  {
    url: 'https://jobs.dou.ua/companies/oril/',
    img: logo4_2,
    hover: logo4,
    alt: 'DOU',
  },
  {
    url: 'https://jobs.dou.ua/companies/oril/',
    img: logo5_2,
    hover: logo5,
    alt: 'DOU',
  },
]

const TopBlock = () => {
  return (
    <div className="top-block e-service">
      <div className="left">
        <H1 className={'text-uppercase'}>
          A one-stop shop for your digital product.
        </H1>
        <p>
          We help our clients at each stage of the product life cycle: from
          ideation and product strategy to architecture and design, to
          development, QA, release and maintenance.
        </p>
        <PrimaryBtn>{'Get in touch'}</PrimaryBtn>
      </div>
      <div className="right">
        <Award logoitem={logoImgThree}></Award>
      </div>
    </div>
  )
}

export default TopBlock
