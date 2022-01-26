import React from 'react'
import Articles from '../components/Articles'
import { H1, Typography, SectionTitle } from '../UI/Typography'
import '../styles/blog.scss'
import { Link } from 'react-router-dom'
import blogBannerImg from '../image/blog/blog-banner.png'
import avatar from '../image/post/avatar.png'
import { popularData, technologyData, newsData } from '../data/constant'
import ArticleItem from '../components/Articles/item'
import FeedbackForm from '../components/FeedbackForm'
import feedbackImg from '../image/feedback.svg'
import Banner from '../components/Banner'

const Blog = () => {
  return (
    <div className="o-blog">
      <div className="container">
        <Banner title={'OUR Blog'} link={' Subscribe to our blog'} />

        <div className="row o-blog-main">
          <div className="col-lg-7">
            <Link to="/blog">
              <img src={blogBannerImg} />
            </Link>
          </div>
          <div className="col-lg-5">
            <SectionTitle>
              {'How to Create a Real Estate Listing Platform'}
            </SectionTitle>
            <p>
              The primary focus is often on the product itself, and the
              development process comes second when it comes to innovation and
              digital product development. Product managers must strike a
              careful balance between quality and how long it takes to develop.
              Moving too slowly and the consumer demand could wane. With
              relentless competition, time criticality, and […]
            </p>
            <div className="o-single-info">
              <img src={avatar} className="avatar" />
              <div className="o-post-right-info">
                <b className="author-name">Roman Havrylyuk</b>
                <p className="date">
                  6 Dec, 2021 ·<span className="time">16 min read</span>
                </p>
              </div>
            </div>
          </div>
          <div className="o-divider o-post-divider"></div>
        </div>
        <div className="row o-popular">
          <SectionTitle className={'text-start'}>
            Popular
            <mark>:</mark>{' '}
          </SectionTitle>
          {popularData.map((item, index) => (
            <ArticleItem item={item} key={index} />
          ))}
          <div className="o-divider"></div>
        </div>
        <div className="o-subscribe">
          <img src={feedbackImg} />
          <div className="row">
            <div className="col-xl-7 col-lg-8 offset-lg-3 col-md-10 offset-md-2">
              <div className="o-subscribe-inner">
                <h3 className="title">
                  Let's learn together technology trends, tips, and tricks.
                </h3>
                <FeedbackForm />
              </div>
            </div>
          </div>
        </div>
        <Articles title={'Recent articles'} />

        <div className="row o-popular">
          <SectionTitle className={'text-start'}>
            Technology
            <mark>:</mark>{' '}
          </SectionTitle>
          {technologyData.map((item, index) => (
            <ArticleItem item={item} key={index} />
          ))}
          <div className="o-divider o-article-divider"></div>
        </div>
        <div className="row o-popular">
          <SectionTitle className={'text-start'}>
            News
            <mark>:</mark>{' '}
          </SectionTitle>
          {newsData.map((item, index) => (
            <ArticleItem item={item} key={index} />
          ))}
          <div className="o-divider o-article-divider"></div>
          <Articles title={'Real Estate | PropTech | CREtech'} />
        </div>
      </div>
    </div>
  )
}

export default Blog
