import React from 'react'
import '../styles/articles.scss'
import { SectionTitle } from '../UI/Typography'
import ArticleItem from './articleItem'
import post1 from '../image/post/post1.png'
import post2 from '../image/post/post2.png'
import post3 from '../image/post/post3.png'
import avatar from '../image/post/avatar.png'

const article = [
  {
    img: post1,
    title: 'Time to Market: Ways to Accelerate Digital Product Development',
    avatar: avatar,
    name: 'Roman Havrylyuk',
    date: '20 Dec, 2021 -',
    time: '7 min read',
  },
  {
    img: post2,
    title: 'How digital transformation can benefit your real estate business',
    avatar: avatar,
    name: 'Roman Havrylyuk',
    date: '20 Dec, 2021 -',
    time: '7 min read',
  },
  {
    img: post3,
    title:
      'Features you might miss while creating a real estate listing platform',
    avatar: avatar,
    name: 'Roman Havrylyuk',
    date: '20 Dec, 2021 -',
    time: '7 min read',
  },
]

const Articles = () => {
  return (
    <div className="container">
      <div className="o-article-title-wrapper">
        <SectionTitle className="o-article-section-title">
          Recent articles
          <mark>:</mark>
        </SectionTitle>
        <a href="/blog/" className="o-article-post-link">
          See all
        </a>
      </div>
      <div className="row">
        {article.map((item, index) => (
          <ArticleItem item={item} key={index} />
        ))}
      </div>
      <div className="o-divider o-article-divider"></div>
    </div>
  )
}

export default Articles
