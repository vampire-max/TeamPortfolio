import React, { useEffect, useState } from 'react'
import ProjectsItem from '../components/Projects/item'
import '../styles/portfolio.scss'
import pr1 from '../image/projects/pr1.png'
import pr2 from '../image/projects/pr2.png'
import pr3 from '../image/projects/pr3.png'
import pr4 from '../image/projects/pr4.png'
import pr5 from '../image/projects/pr5.png'
import pr6 from '../image/projects/pr6.png'
import pr7 from '../image/projects/pr7.png'
import pr8 from '../image/projects/pr8.png'
import pr9 from '../image/projects/pr9.png'
import pr10 from '../image/projects/pr10.png'
import pr11 from '../image/projects/pr11.png'
import person1 from '../image/projects/person1.png'
import person2 from '../image/projects/person2.jpg'
import person3 from '../image/projects/person3.jpeg'
import { H1, SectionTitle } from '../UI/Typography'

const portfolioItem = [
  {
    imgSrc: pr2,
    title: 'LACED',
    tags: ['#Auction', '#MobileApp', '#UI/UX Design'],
    desc:
      'A mobile app for online sneaker auctions where you can buy and place bids to participate and claim a reward in the loyalty section. Bid small and win big.',
    CliImage: person2,
    name: 'Sean Lozano ',
    position: 'CEO, LACED',
    quote:
      'The team has been extremely responsive and has used their best efforts to offer solutions, workarounds, and options. Communication is key and the team values close communication with the client. We are very much looking forward to the ongoing development of future features with the team.',
    alt: 'proptech',
  },
  {
    imgSrc: pr1,
    title: 'LUCA App',
    tags: [
      '#HealthTech',
      '#MobileApp',
      '#Platform',
      '#UI/UX Design',
      '#WebApp',
    ],
    desc:
      'Medibio is a mental health technology company pioneering the use of objective measures to aid in the early detection and screening of mental health conditions. They offer mental wellbeing solutions for individuals through their new consumer app, LUCA and for businesses through our Corporate Health product, Ilumen. Medibio is also developing products to serve the healthcare provider market.',
    CliImage: person1,
    name: 'Jennifer Solitario ',
    position: 'Senior Vice President, Medibio Limitedh',
    quote:
      'The team has been extremely responsive and has used their best efforts to offer solutions, workarounds, and options. Communication is key and the team values close communication with the client. We are very much looking forward to the ongoing development of future features with the team.',
    alt: 'FineTech',
  },
  {
    imgSrc: pr3,
    title: 'Automatic Web Platform',
    tags: ['#FineTech', '#Platform', '#UI/UX Design', '#WebApp'],
    desc:
      'Automatic platform is a paradigm shift for used car financing companies and auto dealerships, which streamlines the entire loan process, helps dealerships boost vehicle sales by reducing the funding and titling, and maintains transparency at every step.',
    CliImage: person3,
    name: 'John Liu ',
    position: 'Co-founder, Automatic',
    quote:
      'ORIL has been a great partner in our digital transformation. They are always responsive and attentive to details.                      ',
    alt: '',
  },
  {
    imgSrc: pr4,
    title: 'Automatic Web Platform',
    tags: ['#FineTech', '#Platform', '#UI/UX Design', '#WebApp'],
    desc:
      'Automatic platform is a paradigm shift for used car financing companies and auto dealerships, which streamlines the entire loan process, helps dealerships boost vehicle sales by reducing the funding and titling, and maintains transparency at every step.',
    CliImage: person3,
    name: 'John Liu ',
    position: 'Co-founder, Automatic',
    quote:
      'ORIL has been a great partner in our digital transformation. They are always responsive and attentive to details.                      ',
    alt: 'Health',
  },
  {
    imgSrc: pr5,
    title: 'Automatic Web Platform',
    tags: ['#FineTech', '#Platform', '#UI/UX Design', '#IoT'],
    desc:
      'Automatic platform is a paradigm shift for used car financing companies and auto dealerships, which streamlines the entire loan process, helps dealerships boost vehicle sales by reducing the funding and titling, and maintains transparency at every step.',
    CliImage: person3,
    name: 'John Liu ',
    position: 'Co-founder, Automatic',
    quote:
      'ORIL has been a great partner in our digital transformation. They are always responsive and attentive to details.                      ',
    alt: 'Marketplatform',
  },
  {
    imgSrc: pr6,
    title: 'Automatic Web Platform',
    tags: ['#FineTech', '#Platform', '#UI/UX Design', '#WebApp'],
    desc:
      'Automatic platform is a paradigm shift for used car financing companies and auto dealerships, which streamlines the entire loan process, helps dealerships boost vehicle sales by reducing the funding and titling, and maintains transparency at every step.',
    CliImage: person3,
    name: 'John Liu ',
    position: 'Co-founder, Automatic',
    quote:
      'ORIL has been a great partner in our digital transformation. They are always responsive and attentive to details.                      ',
    alt: '',
  },
  {
    imgSrc: pr7,
    title: 'Automatic Web Platform',
    tags: ['#FineTech', '#Platform', '#UI/UX Design', '#WebApp'],
    desc:
      'Automatic platform is a paradigm shift for used car financing companies and auto dealerships, which streamlines the entire loan process, helps dealerships boost vehicle sales by reducing the funding and titling, and maintains transparency at every step.',
    CliImage: person3,
    name: 'John Liu ',
    position: 'Co-founder, Automatic',
    quote:
      'ORIL has been a great partner in our digital transformation. They are always responsive and attentive to details.                      ',
    alt: '',
  },
  {
    imgSrc: pr8,
    title: 'Automatic Web Platform',
    tags: ['#FineTech', '#Platform', '#UI/UX Design', '#WebApp'],
    desc:
      'Automatic platform is a paradigm shift for used car financing companies and auto dealerships, which streamlines the entire loan process, helps dealerships boost vehicle sales by reducing the funding and titling, and maintains transparency at every step.',
    CliImage: person3,
    name: 'John Liu ',
    position: 'Co-founder, Automatic',
    quote:
      'ORIL has been a great partner in our digital transformation. They are always responsive and attentive to details.                      ',
    alt: '',
  },
  {
    imgSrc: pr9,
    title: 'Automatic Web Platform',
    tags: ['#FineTech', '#Platform', '#UI/UX Design', '#WebApp'],
    desc:
      'Automatic platform is a paradigm shift for used car financing companies and auto dealerships, which streamlines the entire loan process, helps dealerships boost vehicle sales by reducing the funding and titling, and maintains transparency at every step.',
    CliImage: person3,
    name: 'John Liu ',
    position: 'Co-founder, Automatic',
    quote:
      'ORIL has been a great partner in our digital transformation. They are always responsive and attentive to details.                      ',
    alt: '',
  },
  {
    imgSrc: pr10,
    title: 'Automatic Web Platform',
    tags: ['#FineTech', '#Platform', '#UI/UX Design', '#WebApp'],
    desc:
      'Automatic platform is a paradigm shift for used car financing companies and auto dealerships, which streamlines the entire loan process, helps dealerships boost vehicle sales by reducing the funding and titling, and maintains transparency at every step.',
  },
  {
    imgSrc: pr11,
    title: 'Automatic Web Platform',
    tags: ['#Health', '#Platform', '#UI/UX Design', '#WebApp'],
    desc:
      'Automatic platform is a paradigm shift for used car financing companies and auto dealerships, which streamlines the entire loan process, helps dealerships boost vehicle sales by reducing the funding and titling, and maintains transparency at every step.',
    CliImage: person3,
    name: 'John Liu ',
    position: 'Co-founder, Automatic',
    quote:
      'ORIL has been a great partner in our digital transformation. They are always responsive and attentive to details.                      ',
    alt: '',
  },
]

const Portfolio = () => {
  const [filterOption, setFilterOption] = useState([])
  const [filteredItems, setFilteredItems] = useState(portfolioItem)
  // const [items, setItems] = useState(portfolioItem)

  const handleClick = (tagname) => (e) => {
    // console.log('....')
    setFilterOption(tagname)
  }

  useEffect(() => {
    if (filterOption.length === 0) {
      setFilteredItems(portfolioItem)
      console.log('length', filterOption.length)
    } else {
      console.log('filtering')
      console.log('length', filterOption.length)

      const filtered = portfolioItem.filter((item) => {
        let isIncluded = false
        filterOption.forEach((tag) => {
          if (item.tags.includes(tag)) {
            isIncluded = true
          }
        })

        console.log('isIncluded: ', isIncluded)
        return isIncluded
      })

      setFilteredItems(filtered)
    }
  }, [filterOption])

  return (
    <div className="container">
      <div className="portfolio-top">
        {/* <SectionTitle>Portfolio</SectionTitle> */}
        <H1 className={'o-projects-title mark-wrapper'}>
          Portfolio<mark>.</mark>
        </H1>

        <p className="o_projects_desc">
          See how ORIL has helped its clients achieve their vision of digital
          innovation.
        </p>
      </div>
      <div className="col-12 p-nav">
        <ul className="p-filter">
          <li>
            <button className="filter-btn" onClick={handleClick('')}>
              All
            </button>
          </li>
          <li>
            <button
              className="filter-btn"
              onClick={handleClick(['#proptech', '#WebApp'])}
            >
              PropTech
            </button>
          </li>
          <li>
            <button
              className="filter-btn"
              onClick={handleClick(['#FineTech', '#BlockChain'])}
            >
              FineTech
            </button>
          </li>
          <li>
            <button
              className="filter-btn"
              onClick={handleClick(['#HealthTech', '#Healthcare', '#Fitness'])}
            >
              Health&Fitness
            </button>
          </li>
          <li>
            <button
              className="filter-btn"
              onClick={handleClick(['#Auction', '#RealEstate', '#Social'])}
            >
              Marketplace
            </button>
          </li>
          <li>
            <button
              className="filter-btn"
              onClick={handleClick(['#Web', '#WebApp'])}
            >
              Web
            </button>
          </li>
          <li>
            <button
              className="filter-btn"
              onClick={handleClick(['#MobileApp', '#WebApp'])}
            >
              Mobile
            </button>
          </li>
          <li>
            <button className="filter-btn" onClick={handleClick(['#IoT'])}>
              IoT
            </button>
          </li>
        </ul>
      </div>
      {filteredItems.map((item, index) => (
        <>
          <ProjectsItem item={item} index={index} key={index} />
          <div className="o-divider"></div>
        </>
      ))}
    </div>
  )
}

export default Portfolio
