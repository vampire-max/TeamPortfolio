import React from 'react'
import { Link } from 'react-router-dom'
import { SectionTitle, Typography } from '../../UI/Typography'
import '../../styles/projects.scss'
import ProjectsItem from './item'

const Projects = ({ hasSecond, divider, projectsData }) => {
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
        {projectsData.map((item, index) => (
          <ProjectsItem
            item={item}
            index={index}
            key={index}
            hasSecond={hasSecond}
          />
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
        {!divider && <div className="o-divider o-projects-divider"></div>}
      </div>
    </div>
  )
}

export default Projects
