import React from 'react'
import avatar1 from '../../../image/test/avatar1.jpeg'
import TestCard from '../testCard'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../../styles/carousel.scss'
import { SectionTitle } from '../../../UI/Typography'

const itemData = [
  {
    quote:
      'Their dedication to the partnership, coupled with their professionalism and attention to detail, set them apart.',
    avatar: avatar1,
    name: 'Lauren Kuntz',
    position: 'CEO, GreenVision',
  },
  {
    quote:
      'Their dedication to the partnership, coupled with their professionalism and attention to detail, set them apart.',
    avatar: avatar1,
    name: 'Lauren Kuntz',
    position: 'CEO, GreenVision',
  },
  {
    quote:
      'Their dedication to the partnership, coupled with their professionalism and attention to detail, set them apart.',
    avatar: avatar1,
    name: 'Lauren Kuntz',
    position: 'CEO, GreenVision',
  },
  {
    quote:
      'Their dedication to the partnership, coupled with their professionalism and attention to detail, set them apart.',
    avatar: avatar1,
    name: 'Lauren Kuntz',
    position: 'CEO, GreenVision',
  },
  {
    quote:
      'Their dedication to the partnership, coupled with their professionalism and attention to detail, set them apart.',
    avatar: avatar1,
    name: 'Lauren Kuntz',
    position: 'CEO, GreenVision',
  },
  {
    quote:
      'Their dedication to the partnership, coupled with their professionalism and attention to detail, set them apart.',
    avatar: avatar1,
    name: 'Lauren Kuntz',
    position: 'CEO, GreenVision',
  },
]

const CardCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <button className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '40px', height: '35px' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
    ),
    prevArrow: (
      <button style={{}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '40px', height: '35px' }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
      </button>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrow: false,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrow: false,
          dots: true,
        },
      },
    ],
  }

  return (
    <div className="o-testimonial">
      <div className="container">
        <SectionTitle className="o-test-title">Testimonials</SectionTitle>

        <p className="o-test-desc">
          Trusted Worldwide: Our Partner's Success Stories.
        </p>
        <div className="CarouselContainer">
          <Slider {...settings}>
            {itemData.map((item, index) => (
              <TestCard {...item} key={index} />
            ))}
          </Slider>
        </div>
        <div className="o-divider o-test-divider"></div>
      </div>
    </div>
  )
}

export default CardCarousel
