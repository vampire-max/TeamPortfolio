import React from 'react'
import '../../styles/articles.scss'

const ArticleItem = ({ item }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="o-article-item">
        <a href="/blog/">
          <img src={item.img} className="img-link" />
        </a>
        <h3 className="o-article-title">
          <a className="">{item.title}</a>
        </h3>
        <div className="o-post-info">
          <img src={item.avatar} className="avatar" />
          <div className="o-post-right-info">
            <b className="author-name">{item.name}</b>
            <p className="date">
              {item.date}
              <span className="time">{item.time}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleItem
