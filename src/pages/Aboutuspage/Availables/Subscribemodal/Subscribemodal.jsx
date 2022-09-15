import React from "react";
import './Subscribemodal.scss';
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import {ReactComponent as Cross} from '../../../../assets/img/contactspage/cross.svg';

const Subscribemodal = ({isOpenSubscribeModal, setIsOpenSubscribeModal}) => {
  return (
    <section className="subscribemodal">
      <div className="subscribemodal__overlay" onClick={() => setIsOpenSubscribeModal(!isOpenSubscribeModal)}>

      </div>
      <div className="subscribemodal__content">

        <button className="subscribemodal__closebtn" onClick={() => setIsOpenSubscribeModal(!isOpenSubscribeModal)}>
          <Cross/>
        </button>

        <h3 className="subscribemodal__title">
          Subscribe to our newsletter
        </h3>


        <form className="subscribemodal__form" action="#" onSubmit="return validateForm()" >
          <div className="subscribemodal__inputs">
            <Input
              id="subscribemodal__input-name"
              placeholder="Your name"
              type="text"
              length="default"
              color="light"
              label="Name*"
            />

            <Input
              id="subscribemodal__input-email"
              placeholder="Your working email"
              type="email"
              length="default"
              color="light"
              label="Email*"
            />
          </div>


          <div className="subscribemodal__button">
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

export default Subscribemodal;
