import React from 'react'
import person1 from '../image/projects/person1.png'
import person2 from '../image/projects/person2.jpg'
import person3 from '../image/projects/person3.jpeg'

const Feedback = () => {
  const feedbackItem = [
    {
      image: person1,
      name: 'Jennifer Solitario ',
      position: 'Senior Vice President, Medibio Limitedh',
      quote:
        'The team has been extremely responsive and has used their best efforts to offer solutions, workarounds, and options. Communication is key and the team values close communication with the client. We are very much looking forward to the ongoing development of future features with the team.',
    },
  ]

  return (
    <div className="col-lg-10 offset-lg-1">
      <div className="o-projects_feedback">
        <div
          className="o-projects__feedback-client-photo s-back-switch"
          style={{ backgroundImage: `url("../image/projects/person1"` }}
        >
          <img
            className="s-img-switch"
            src={person1}
            alt="Jennifer Solitario"
          />
        </div>
        <div className="o-projects_feedback-client-info">
          <p className="o-projects_feedback-client-name">{feedbackItem.name}</p>
          <p className="o-projects_feedback-client-position">
            {feedbackItem.position}
          </p>
        </div>
      </div>
      <p
        className="o-projects__feedback-text wow fadeInRight"
        style="visibility: visible; animation-name: fadeInRight;"
      >
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
      </p>
    </div>
  )
}
