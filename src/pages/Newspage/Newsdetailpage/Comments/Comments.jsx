import React from "react";
import './Comments.scss';

import {ReactComponent as ArrowReply} from '../../../../assets/img/newspage/newsdetailpage/reply.svg';

const dataComment = [
  {
    name: 'Devon Lane',
    linkUser: '#',
    data: 'July 15, 2020',
    comment: 'Phasellus varius faucibus ultrices odio in. Massa neque dictum natoque ornare rutrum malesuada et phasellus. Viverra natoque nulla cras vel nisl proin senectus. Tortor sed eleifend ante tristique felis sed urna aliquet. Suspendisse fames egestas sed duis purus diam et.',
    linkReply: '#',
  },
  {
    name: 'Annette Black',
    linkUser: '#',
    data: '1 day ago',
    comment: '@Devon Lane Egestas fermentum natoque sollicitudin mauris. Facilisis praesent urna sed rhoncus quis pharetra pellentesque erat sagittis.',
    linkReply: '#',
  },

  {
    name: 'Albert Flores',
    linkUser: '#',
    data: 'July 7, 2020',
    comment: 'Libero commodo sit dui ac proin. Penatibus ultricies at adipiscing mauris nunc. Fames faucibus nisl duis id diam.',
    linkReply: '#',
  },

  {
    name: 'Marvin McKinney',
    linkUser: '#',
    data: 'June 28, 2020',
    comment: 'Ullamcorper nibh sed ac ipsum nunc imperdiet rhoncus. Quam donec habitant nibh sit consequat erat libero, tincidunt. Eros ut aliquam proin et duis. Mauris, egestas congue nibh dui a nulla.',
    linkReply: '#',
  },
]


const Comments = () => {
  return (
    <section className="comments">
      <div className="comments__container smallcontainer">
        <h1 className="comments__title">
          4 comments
        </h1>
        <ul className="comments__list">
          {dataComment.map((item, i) =>
            <li className="comments__item" key={i}>
              <div className="comments__item-leftpart">
                <a className="comments__item-name" href={item.linkUser}>
                  {item.name}
                </a>
                <div className="comments__item-data">
                  {item.data}
                </div>
              </div>

              <div className="comments__item-rightpart">
                <p className="comments__item-text">
                  {item.comment}
                </p>

                <a className="comments__item-reply" href={item.linkReply}>
                  <ArrowReply/>
                  Reply
                </a>
              </div>
            </li>
          )}
        </ul>
      </div>
    </section>
  )
};

export default Comments