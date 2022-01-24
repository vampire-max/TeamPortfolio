import React from 'react'
import '../../styles/feedback.scss'
import FeedbackForm from '../FeedbackForm'

const Feedback = () => {
  return (
    <div id="feedback">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1">
            <p className="o-feedback-desc">
              {
                'Subscribe to our blog to learn about tech trends and innovative solutions.'
              }
            </p>
            <FeedbackForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
