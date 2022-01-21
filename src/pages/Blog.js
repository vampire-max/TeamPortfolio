import React from 'react'
import Articles from '../components/Articles'
import { H1, Typography, SectionTitle } from '../UI/Typography'
import '../styles/blog.scss'
import { Link } from 'react-router-dom'
import blogBannerImg from '../image/blog/blog-banner.png'
import avatar from '../image/post/avatar.png'
import { popularData } from '../data/constant'
import ArticleItem from '../components/Articles/item'

const Blog = () => {
  return (
    <div className="o-blog">
      <div className="container">
        <div className="d-lg-flex justify-content-lg-between">
          <H1>
            OUR Blog
            <mark>.</mark>
          </H1>
          <Typography className="o-banner__description">
            Subscribe to our blog
          </Typography>
        </div>
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
          <div className="o-divider"></div>
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
        <Articles title={'Real Estate | PropTech | CREtech'} />
      </div>
    </div>
  )
}

export default Blog
