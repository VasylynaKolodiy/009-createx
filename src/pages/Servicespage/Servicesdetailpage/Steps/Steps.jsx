import React from "react";
import './Steps.scss';


const data = [
  {
    title: 'Work Estimate',
    description: 'Culpa nostrud commodo ea consequat aliquip reprehenderit.',
  },
  {
    title: 'Contract',
    description: 'Laoreet ultrices curabitur luctus quisque consequat. Leo lorem velit imperdiet auctor et tempor.',
  },
  {
    title: 'Mobilization ',
    description: 'Odio massa scelerisque purus arcu sed velit eleifend cursus leo.',
  },
  {
    title: 'Construction Work',
    description: 'Adipisicing esse aliqua aliquip qui amet. Aute eiusmod dolore dolore et ad et veniam ad deserunt.',
  },
]

const Steps = () => {
  return (
    <section className="steps">
      <div className="steps__container container">
        <h1 className="steps__title">
          That’s how we do it
        </h1>
        <ul className="steps__list">
          {data.map((item, i) =>
          <li className="steps__item" key={i}>
            <div className="steps__item-number-wrapper">
              <h1 className="steps__item-number">
                {`0${i+1}`}
              </h1>
              <div className="steps__item-line"></div>
            </div>
            <p className="steps__item-title">
              {item.title}
            </p>
            <p className="steps__item-description">
              {item.description}
            </p>
          </li>
          )}
        </ul>

      </div> {/*steps__container*/}
    </section>
  )
};
export default Steps


