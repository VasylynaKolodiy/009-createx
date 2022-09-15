import React from "react";
import './Cvmodal.scss';
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import {ReactComponent as Cross} from '../../../../assets/img/contactspage/cross.svg';
import Textarea from "../../../../components/Textarea/Textarea";

const Cvmodal = ({isOpenCVModal, setIsOpenCVModal}) => {
  return (
    <section className="cvmodal">
      <div className="cvmodal__content">

        <button className="cvmodal__closebtn" onClick={() => setIsOpenCVModal(!isOpenCVModal)}>
          <Cross/>
        </button>

        <h3 className="cvmodal__title">
          Send your CV
        </h3>

        <form className="cvmodal__form" action="#">

          <div className="cvmodal__inputs">
            <Input
              id="cvmodal__input-name"
              placeholder="Your name"
              type="text"
              length="default"
              color="light"
              label="Name*"
            />

            <Input
              id="cvmodal__input-location"
              placeholder="Choose your location"
              type="text"
              length="default"
              color="light"
              label="Location*"
            />

            <Input
              id="cvmodal__input-phone"
              placeholder="Your phone number"
              type="tel"
              length="default"
              color="light"
              label="Phone*"
            />

            <Input
              id="cvmodal__input-email"
              placeholder="Your working email"
              type="email"
              length="default"
              color="light"
              label="Email*"
            />

            <Textarea
              id="cvmodal__textarea"
              placeholder="Your covering letter"
              length="default"
              color="light"
              rows="3"
              label="Сovering letter"
            />

            <div className="cvmodal__file">
              <label className="cvmodal__file-label" htmlFor="cv">Attach your CV*</label>
              <input className="cvmodal__file-input" type="file" id="cv" name="cv" accept="image/png, image/jpeg"/>
            </div>
          </div>


          <div className="cvmodal__button">
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

export default Cvmodal;
