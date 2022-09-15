import React from "react";
import './Cta.scss';
import Button from "../../../../components/Button/Button";

const Cta = ({isOpenSubscribeModal, setIsOpenSubscribeModal, isOpenCVModal, setIsOpenCVModal}) => {

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
            onClick={() => setIsOpenSubscribeModal(!isOpenSubscribeModal)}
          />
          <Button
            title='send cv'
            type='button'
            color='primary'
            length='large'
            link='#'
            onClick={() => setIsOpenCVModal(!isOpenCVModal)}
          />
        </p>
      </div>
    </section>
  )
};

export default Cta