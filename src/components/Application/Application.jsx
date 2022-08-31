import React from "react";
import './Application.scss';
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Textarea from "../Textarea/Textarea";
import Checkbox from "../Checkbox/Checkbox";


const Application = () => {
  return (
    <section className="application">
      <div className="application__container container">
        <form className="application__form" action='#'>
          <h3 className="application__form-title">
            A quick way to discuss details
          </h3>
          <Input
            id = "application__input-name"
            placeholder = "Your name"
            type = "text"
            length = "default"
            color = "light"
            label= "Name*"
          />
          <Input
            id = "application__input-phone"
            placeholder = "Your phone number"
            type = "tel"
            length = "default"
            color = "light"
            label= "Phone*"
          />
          <Input
            id = "application__input-email"
            placeholder = "Your working email"
            type = "email"
            length = "default"
            color = "light"
            label= "Email"
          />

          <Textarea
            id = "application__textarea-message"
            placeholder = "Your message"
            length = "default"
            color = "light"
            rows = "2"
            label= "Message*"
          />

          <Checkbox
            id = "application__checkbox"
            value = "yes"
            label = "I agree to receive communications from Createx Construction Bureau."
          />

          <Button
            title='Send request'
            type='submit'
            color='primary'
            length='regular'
          />




        </form>





      </div> {/*application__container*/}
    </section>
  )
};

export default Application


