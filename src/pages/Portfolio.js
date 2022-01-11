import React from 'react'
import ProjectsItem from '../components/Projects/item'
import pr1 from '../image/projects/pr1.png'
import pr2 from '../image/projects/pr2.png'
import pr3 from '../image/projects/pr3.png'
import person1 from '../image/projects/person1.png'
import person2 from '../image/projects/person2.jpg'
import person3 from '../image/projects/person3.jpeg'

const portfolioItem = [
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
  },
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
  },
]

const Portfolio = () => {
  return (
    <div className="container">
      {portfolioItem.map((item, index) => (
        <>
          <ProjectsItem item={item} index={index} key={index} />
          <div className="o-divider"></div>
        </>
      ))}
    </div>
  )
}

export default Portfolio
