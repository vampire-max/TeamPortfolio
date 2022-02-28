import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../../styles/feedback.scss'
import FeedbackForm from '../FeedbackForm'

const Feedback = () => {
  const route = useLocation()
  const path = route.pathname

  const [isBlog, setIsBlog] = useState(false)

  useEffect(() => {
    if (path.includes('/blog')) {
      setIsBlog(true)
    } else {
      setIsBlog(false)
    }
  }, [path])

  return (
    <div className={`feedback ${!isBlog && 'article'}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1">
            <h2 className="o-feedback-title">DreamHighTech Blog</h2>
            <p className="o-feedback-desc">
              {
                'Subscribe to our blog to learn about tech trends and innovative solutions.'
              }
            </p>
            <FeedbackForm />
          </div>
        </div>
        <div className="o-divider o-feedback-divider"></div>
      </div>
    </div>
  )
}

export default Feedback
