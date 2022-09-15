import React from "react";
import './News.scss';

import image1 from "../../../assets/img/homepage/news/image1.jpg";
import image2 from "../../../assets/img/homepage/news/image2.jpg";
import image3 from "../../../assets/img/homepage/news/image3.jpg";
import Button from "../../../components/Button/Button";
import Newsitem from "./Newsitem/Newsitem";


const dataNews = [
  {
    image: image1,
    link: "/news/how-to-build-climate-change-resilient-infrastructure",
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
    link: "/news/how-construction-can-help-itself",
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
    link: "/news/types-of-flooring-materials",
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
        <div className="news__list">
          {dataNews.map((item, i) =>
            <Newsitem item={item} key={i}/>
          )}
        </div>

        <div className="explore">
          <h3 className="explore-title">
            Explore all our news posts
          </h3>
          <Button
            title='View all news'
            type='button'
            color='primary'
            length='large'
            link='/news'
          />
        </div>
       
      </div> {/*news__container*/}
    </section>
  )
};

export default News


