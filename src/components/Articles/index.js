import React from 'react'
import '../../styles/articles.scss'
import { SectionTitle } from '../../UI/Typography'
import ArticleItem from './item'
import { article } from '../../data/constant'

const Articles = ({ title }) => {
  return (
    <div className="container">
      <div className="o-article-title-wrapper">
        <SectionTitle className="o-article-section-title">
          {title}
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
