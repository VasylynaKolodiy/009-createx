import React from "react";
import './Newsitem.scss';


const Newsitem = ({item}) => {

  return (
    <div className="newsitem__item">
      <img className="newsitem__item-img" src={item.image} alt="Newsitem image"/>

      <div className="newsitem__item-info">
        <a className="newsitem__item-title" href={item.link}>
          {item.title}
        </a>

        <div className="newsitem__item-meta">
          <a className="newsitem__item-meta-category" href={item.linkCategory}>
            {item.category}
          </a>
          <a className="newsitem__item-meta-data" href={item.linkData}>
            {item.data}
          </a>
          <a className="newsitem__item-meta-comments" href={item.linkComments}>
            {item.comments}
          </a>
        </div>

        {item.description && (
          <p className="newsitem__item-description">
            {item.description}
          </p>
        )}

      </div>
    </div>
  )
};

export default Newsitem


