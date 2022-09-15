import React from "react";
import './Modal.scss';
import Button from "../../../../components/Button/Button";
import {ReactComponent as Cross} from '../../../../assets/img/contactspage/cross.svg';

const Modal = ({close, title, children}) => {

  return (
    <section className="modal">
      <div className="modal__overlay" onClick={close}>
      </div>

      <div className="modal__content">
        <button className="modal__closebtn" onClick={close}>
          <Cross/>
        </button>

        <h3 className="modal__title">
          {title}
        </h3>

        <form className="modal__form" action="#">
          <div className="modal__inputs">
            {children}
          </div>

          <div className="modal__button">
            <Button
              title='send'
              type='submit'
              color='primary'
              length='regular'
            />
          </div>
        </form>
      </div>
    </section>
  )
};

export default Modal;

