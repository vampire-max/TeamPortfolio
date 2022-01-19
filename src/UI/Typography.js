import '../styles/UI.scss'

export function Typography({ className, children }) {
  return <p className={`${className}`}>{children}</p>
}

export function H1({ className, children }) {
  return (
    <h1 className={`o-banner__title mark-wrapper ${className}`}>{children}</h1>
  )
}

export function SectionTitle({ className, children }) {
  return (
    <h2 className={`o-section-title mark-wrapper ${className}`}>{children}</h2>
  )
}
