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
