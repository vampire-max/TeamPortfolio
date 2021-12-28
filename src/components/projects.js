import React from 'react'
import { SectionTitle, Typography } from '../UI/Typography'
import '../styles/projects.scss'
import { motion } from 'framer-motion'
import pr1 from '../image/projects/pr1.png'
import pr2 from '../image/projects/pr2.png'
import pr3 from '../image/projects/pr3.png'

import ProjectsBtn from './projectsBtn'

const Projects = () => {
  const variants = {
    offscreen: {
      x: '100%',
    },
    onscreen: {
      x: 0,
      transition: {
        type: 'spring',
        duration: 0.7,
      },
    },
  }

  const variantsTwo = {
    offscreen: {
      x: '-100%',
    },
    onscreen: {
      x: 0,
      transition: {
        type: 'spring',
        duration: 0.7,
      },
    },
  }

  return (
    <div id="o-projects" className="o_projects section">
      <div className="container">
        <SectionTitle>
          Building Solutions that Work
          <Typography className="o_projects_desc">
            We make things happen. Always. Our high-powered tech experts set up
            the entire development processes, detect problems, and solve them.
          </Typography>
        </SectionTitle>
        <div className="o_projects_list">
          <div className="o_projects_item row">
            <div className="col-md-6">
              <motion.div
                viewport={{ once: true, amount: 0.2 }}
                whileInView="onscreen"
                initial="offscreen"
                variants={variants}
              >
                <img src={pr1} />
              </motion.div>
            </div>
            <div className="col-md-6">
              <motion.div
                viewport={{ once: true, amount: 0.2 }}
                whileInView="onscreen"
                initial="offscreen"
                variants={variantsTwo}
              >
                <h2 className="o_projects_item-title mb-24">LUCA App</h2>
                <div className="o_projects_item-tags">
                  <p className="o_projects_item-tag">#HealthTech</p>
                  <p className="o_projects_item-tag">#MobileApp</p>
                  <p className="o_projects_item-tag">#Platform</p>
                  <p className="o_projects_item-tag">#UI/UX Design</p>
                  <p className="o_projects_item-tag">#WebApp</p>
                </div>
                <p className="o_projects_item-desc mb-24">
                  Medibio is a mental health technology company pioneering the
                  use of objective measures to aid in the early detection and
                  screening of mental health conditions. They offer mental
                  wellbeing solutions for individuals through their new consumer
                  app, LUCA and for businesses through our Corporate Health
                  product, Ilumen. Medibio is also developing products to serve
                  the healthcare provider market.
                </p>
                <ProjectsBtn />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="o-divider"></div>
      </div>
    </div>
  )
}

export default Projects
