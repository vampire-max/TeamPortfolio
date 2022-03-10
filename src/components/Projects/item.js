import React from 'react'
import { motion } from 'framer-motion'
import { ProjectsBtn } from '../../UI/Btn'
import '../../styles/projects.scss'

const ProjectsItem = ({ item, index, hasSecond }) => {
  const isMobile = window.innerWidth < 768

  const variants = {
    offscreen: {
      x: isMobile ? '50%' : '100%',
    },
    onscreen: {
      x: 0,
      transition: {
        type: 'spring',
        duration: 1.2,
      },
    },
  }

  const variantsTwo = {
    offscreen: {
      x: isMobile ? '-50%' : '-100%',
    },
    onscreen: {
      x: 0,
      transition: {
        type: 'spring',
        duration: 1.2,
      },
    },
  }

  return (
    <div className="o_projects_list">
      <div
        className={`o_projects_item row ${
          index % 2 === 0 ? 'flex-row-reverse' : ''
        }`}
      >
        <div className="col-md-6">
          <motion.div
            viewport={{ once: true, amount: 0.2 }}
            whileInView="onscreen"
            initial="offscreen"
            variants={index % 2 === 0 ? variants : variantsTwo}
          >
            <img className="o-projects-item-image" src={item.imgSrc} />
          </motion.div>
        </div>
        <div className="col-md-6">
          <motion.div
            viewport={{ once: true, amount: 0.2 }}
            whileInView="onscreen"
            initial="offscreen"
            variants={index % 2 === 1 ? variantsTwo : variants}
          >
            <h2 className="o_projects_item-title mb-24">{item.title}</h2>
            <div className="o_projects_item-tags">
              {item.tags.map((tag, idx) => (
                <p className="o_projects_item-tag" key={idx}>
                  {tag}
                </p>
              ))}
            </div>
            <p className="o_projects_item-desc mb-24">{item.desc}</p>
            <ProjectsBtn>{'View project'}</ProjectsBtn>
          </motion.div>
        </div>
      </div>
      {!hasSecond && (
        <div className="col-lg-10 offset-lg-1 o-projects_feedback">
          <motion.div
            viewport={{ once: true, amount: 0.2 }}
            whileInView="onscreen"
            initial="offscreen"
            variants={variantsTwo}
          >
            <div className="o-projects-feedback-info d-flex align-items-center">
              <div
                className="o-projects_feedback-client-photo s-back-switch"
                style={{ backgroundImage: `url(${item.CliImage})` }}
              ></div>
              <div className="o-projects_feedback-client-info">
                <p className="o-projects_feedback-client-name">{item.name}</p>
                <p className="o-projects_feedback-client-position">
                  {item.position}
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            viewport={{ once: true, amount: 0.2 }}
            whileInView="onscreen"
            initial="offscreen"
            variants={variants}
          >
            <p className="o-projects__feedback-text">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 8H19V20.7692L13.3859 31H6.40704L11.993 20.7692H5V8Z"
                  fill="#FFB248"
                ></path>
                <path
                  d="M21 8H35V20.7692L29.3859 31H22.407L27.993 20.7692H21V8Z"
                  fill="#FFB248"
                ></path>
              </svg>{' '}
              {item.quote}
            </p>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default ProjectsItem
