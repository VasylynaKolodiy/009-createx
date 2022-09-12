import React from "react";
import './Cta.scss';
import Button from "../../../../components/Button/Button";
import Subscribemodal from "../../Subscribemodal/Subscribemodal";


// const container = () => {
//   document.querySelector('.inverse');
// }
// const signUpButton = () => {
//   container.classList.add('right-panel-active');
// };

const Cta = () => {

  return (
    <section className="cta">
      <div className="cta__container container">
        <h3 className="cta__title">
          Didn’t find what you were looking for?
        </h3>
        <p className="cta__description">
          Send your CV or subscribe to our newsletter to receive information about new vacancies.
        </p>

        <p className="cta__buttons">
          <Button
            title='subscribe'
            type='submit'
            color='inverse'
            length='large'
            link='#'
          />
          <Button
            title='send cv'
            type='button'
            color='primary'
            length='large'
            link='#'
          />
        </p>
      </div>

      <div className="App">
        <Subscribemodal openButtonText="subscribe">
          <form>
            <div>
              <label htmlFor="email-input">Email:</label>
              <input type="email" id="email-input" name="email"/>
            </div>
            <div>
              <label htmlFor="password-input">Password:</label>
              <input type="password" id="password-input" name="password"/>
            </div>
          </form>
        </Subscribemodal>
      </div>
    </section>
  )
};

export default Cta