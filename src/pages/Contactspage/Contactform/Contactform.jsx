import React from "react";
import './Contactform.scss';
import formImg from '../../../assets/img/contactspage/form-image.jpg';
import Input from "../../../components/Input/Input";
import Textarea from "../../../components/Textarea/Textarea";
import Button from "../../../components/Button/Button";

const Contactform = () => {
  return (
    <section className="contactform">
      <div className="contactform__container container">
        <h1 className="contactform__title">
          Contact us
        </h1>
        <p className="contactform__description">
          Please complete the form. Detailed information will help us to make a tuned offer.
        </p>
        <div className="contactform__inner">
          <div className="contactform__inner-lefrtpart">
            <img className="contactform__inner-img" src={formImg} alt="Contactform"/>
          </div>


          <div className="contactform__inner-rightpart">

            <form className="contactform__inner-form" action="#">
              <div className="contactform__top">
                <div className="contactform__top-leftpart">
                  <Input
                    id="contactform__input-name"
                    placeholder="Your name"
                    type="text"
                    length="large"
                    color="light"
                    label="Name*"
                  />
                  <Input
                    id="contactform__input-phone"
                    placeholder="Your phone number"
                    type="tel"
                    length="large"
                    color="light"
                    label="Phone*"
                  />
                  <Input
                    id="contactform__input-email"
                    placeholder="Your working email"
                    type="email"
                    length="large"
                    color="light"
                    label="Email"
                  />
                </div>

                <div className="contactform__top-rightpart">
                  <Input
                    id="contactform__input-interested"
                    placeholder="Interior Design"
                    type="text"
                    length="large"
                    color="light"
                    label="I am interested in"
                  />
                  <Input
                    id="contactform__input-location"
                    placeholder="New York"
                    type="text"
                    length="large"
                    color="light"
                    label="Location*"
                  />
                  <fieldset className="contactform__radio">
                    <p className="contactform__radio-legend">Preferred contact method</p>
                    <input className="contactform__radio-btn" type="radio" id="phone" name="radio" value="Phone"/>
                    <label className="contactform__radio-btn-label" htmlFor="phone">Phone</label>

                    <input className="contactform__radio-btn" type="radio" id="email" name="radio" value="Email"/>
                    <label className="contactform__radio-btn-label" htmlFor="email">Email</label>

                    <input className="contactform__radio-btn" type="radio" id="viber" name="radio" value="Viber"/>
                    <label className="contactform__radio-btn-label" htmlFor="viber">Viber</label>
                  </fieldset>
                </div>
              </div>

              <div className="contactform__bottom">
                <Textarea
                  id="contactform__textarea-message"
                  placeholder="Your message"
                  length="large"
                  color="light"
                  rows="4"
                  label="Message*"
                />
              </div>

              <div className="contactform__check-btn">


                <div className="contactform__checkboxWrapper">
                  <input className="contactform__check-checkbox" type="checkbox" id="contactform__check" value="yes"/>
                  <label className="contactform__check-label" htmlFor="contactform__check">
                    I agree to receive communications from Createx Construction Bureau.
                  </label>
                </div>


                <Button
                  title='send request'
                  type='submit'
                  color='primary'
                  length='large'
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Contactform