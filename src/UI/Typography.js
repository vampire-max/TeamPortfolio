import '../styles/typography.scss'

export function Typography({ className, children, ...rest }) {
  return <p className={`${className}`}>{children}</p>
}

export function H1({ className, children, ...rest }) {
  return <h1 className={`${className}`}>{children}</h1>
}

export function SectionTitle({ className, children }) {
  return (
    <h2 className={`o-section-title mark-wrapper ${className}`}>{children}</h2>
  )
}
