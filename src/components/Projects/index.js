import React from 'react'
import { Link } from 'react-router-dom'
import { SectionTitle, Typography } from '../../UI/Typography'
import '../../styles/projects.scss'
import pr1 from '../../image/projects/pr1.png'
import pr2 from '../../image/projects/pr2.png'
import pr3 from '../../image/projects/pr3.png'
import person1 from '../../image/projects/person1.png'
import person2 from '../../image/projects/person2.jpg'
import person3 from '../../image/projects/person3.jpeg'

import ProjectsItem from './item'

const projects_data = [
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

const Projects = () => {
  return (
    <div id="o-projects" className="o_projects section">
      <div className="container">
        <SectionTitle className="o-projects-title">
          Building Solutions that Work
        </SectionTitle>
        <Typography className="o_projects_desc">
          We make things happen. Always. Our high-powered tech experts set up
          the entire development processes, detect problems, and solve them.
        </Typography>
        {projects_data.map((item, index) => (
          <ProjectsItem item={item} index={index} key={index} />
        ))}
        <Link to="portfolio" className="o-projects-inks">
          See all projects
          <svg
            width="33"
            height="32"
            viewBox="0 0 33 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5054 5.33337L23.172 16L12.5054 26.6667L9.83203 24L17.8387 16L9.83203 8.00004L12.5054 5.33337Z"
              fill="#FFB248"
            ></path>
          </svg>
        </Link>
        <div className="o-divider o-projects-divider"></div>
      </div>
    </div>
  )
}

export default Projects
