import React from "react";
import './Weoffer.scss';
import weOfferImg from "../../../../assets/img/servicespage/weoffer/weofferimg.jpg";


const data = [
  {
    summary: 'Interior design of apartments',
    description: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
  },
  {
    summary: 'Interior design of private houses',
    description: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
  }
]

const Weoffer = () => {
  return (
    <section className="weoffer">
      <div className="weoffer__container container">

        <div className="weoffer__imgwrapper">
          <img className="weoffer__img" src={weOfferImg} alt="We offer image"/>
        </div>

        <div className="weoffer__info">
          <h1 className="weoffer__title">
            We offer
          </h1>
          {data.map((item, i) =>
          <details open={i === 0} className="weoffer__details"  key={i}>
            <summary className="weoffer__summary">
              <h4 className="weoffer__summary-title">
                {item.summary}
              </h4>
            </summary>
            <p className="weoffer__description">{item.description}</p>
          </details>
          )}
        </div>
      </div> {/*weoffer__container*/}
    </section>
  )
};

export default Weoffer


