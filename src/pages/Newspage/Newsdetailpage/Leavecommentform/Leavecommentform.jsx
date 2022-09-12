import React from "react";
import './Leavecommentform.scss';
import Input from "../../../../components/Input/Input";
import Textarea from "../../../../components/Textarea/Textarea";
import Button from "../../../../components/Button/Button";

const Leavecommentform = () => {
  return (
    <section className="leavecommentform">
      <div className="leavecommentform__container smallcontainer">
        <h1 className="leavecommentform__title">
          Leave your comment
        </h1>

        <form className="leavecommentform__form" action="#">

          <div className="leavecommentform__inputs">
            <Input
              id="leavecommentform__input-name"
              placeholder="Your name"
              type="text"
              length="large"
              color="light"
              label="Name*"
            />
            <Input
              id="leavecommentform__input-email"
              placeholder="Your working email"
              type="email"
              length="large"
              color="light"
              label="Email*"
            />
          </div>

          <Textarea
            id="leavecommentform__textarea-comment"
            placeholder="Type comment here"
            length="large"
            color="light"
            rows="2"
            label="Your comment*"
          />

          <Button
            title='Post comment'
            type='submit'
            color='primary'
            length='large'
          />
        </form>


      </div>
    </section>
  )
};

export default Leavecommentform