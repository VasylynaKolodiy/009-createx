import React from "react";
import './News.scss';

import image1 from "../../../assets/img/homepage/news/image1.jpg";
import image2 from "../../../assets/img/homepage/news/image2.jpg";
import image3 from "../../../assets/img/homepage/news/image3.jpg";
import Button from "../../../components/Button/Button";

const news = [
  {
    image: image1,
    link: "#",
    title: 'How to Build Climate Change-Resilient Infrastructure',
    category: 'Industry News',
    linkCategory: "#",
    data: 'June 24, 2020',
    linkData: "#",
    comments: '4 comments',
    linkComments: "#",
    description: 'Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer bibendum turpis convallis enim, nibh convallis...'
  },

  {
    image: image2,
    link: "#",
    title: 'How Construction Can Help Itself',
    category: 'Innovation',
    linkCategory: "#",
    data: 'June 12, 2020',
    linkData: "#",
    comments: 'No comments',
    linkComments: "#",
    description: ''
  },

  {
    image: image3,
    link: "#",
    title: 'Types of Flooring Materials',
    category: 'Company News',
    linkCategory: "#",
    data: 'December 1, 2019',
    linkData: "#",
    comments: 'No comments',
    linkComments: "#",
    description: ''
  },
]

const News = () => {



  return (
    <section className="news">
      <div className="news__container container">
        <h1 className="news__title">
          Recent news
        </h1>
        <ul className="news__list">
          {news.map((item, i) =>
          <li className="news__item" key={i}>
            <img className="news__item-img" src={item.image} alt="News image"/>

            <div className="news__item-info">
              <a className="news__item-title" href={item.link}>
                {item.title}
              </a>

              <div className="news__item-meta">
                <a className="news__item-meta-category" href={item.linkCategory}>
                  {item.category}
                </a>
                <a className="news__item-meta-data" href={item.linkData}>
                  {item.data}
                </a>
                <a className="news__item-meta-comments" href={item.linkComments}>
                  {item.comments}
                </a>
              </div>

              {item.description && (
                <p className="news__item-description">
                  {item.description}
                </p>
              )}

            </div>

          </li>
          )}

        </ul>

        <div className="explore">
          <h3 className="explore-title">
            Explore all our news posts
          </h3>
          <Button
            title='View all news'
            type='button'
            color='primary'
            length='large'
            link='http://localhost:3000/news'
          />
        </div>
       
      </div> {/*news__container*/}
    </section>
  )
};

export default News


