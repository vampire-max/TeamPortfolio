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
  }

  return (
    <div className="container">
      <SectionTitle className="o-test-title">Testimonials</SectionTitle>
      <p className="o-test-desc">
        Trusted Worldwide: Our Partner's Success Stories.
      </p>
      <div className="CarouselContainer">
        <Slider {...settings}>
          {itemData.map((item) => (
            <TestCard {...item} />
          ))}
        </Slider>
      </div>
      <div className="o-divider o-test-divider"></div>
    </div>
  )
}

export default CardCarousel
