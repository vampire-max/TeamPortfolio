import { Link } from 'react-router-dom'

export function ProjectsBtn({ children }) {
  return (
    <div className="col-12 o_projects_item-link">
      <a href="#" className="o-btn o-projects-btn">
        {children}
      </a>
    </div>
  )
}

export function PrimaryBtn({ className, children }) {
  return <a className={`o-btn o-btn-primary ${className}`}>{children}</a>
}

export function WhiteBtn({ path, children }) {
  return (
    <Link to={path} class="o-btn o-btn-white o-cta__button">
      {children}
    </Link>
  )
}
