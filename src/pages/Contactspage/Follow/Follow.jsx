import React from "react";
import './Follow.scss';
import {ReactComponent as Facebook} from "../../../assets/img/contactspage/facebook.svg";
import {ReactComponent as Twitter} from "../../../assets/img/contactspage/twitter.svg";
import {ReactComponent as Messanger} from "../../../assets/img/contactspage/messanger.svg";
import {ReactComponent as Youtube} from "../../../assets/img/contactspage/youtube.svg";
import {ReactComponent as Whatsapp} from "../../../assets/img/contactspage/whatsapp.svg";

const dataFollow = [
  {
    link: "#",
    icon: <Whatsapp/>
  },
  {
    link: "#",
    icon: <Messanger/>
  },
  {
    link: "#",
    icon: <Facebook/>
  },
  {
    link: "#",
    icon: <Twitter/>
  },
  {
    link: "#",
    icon: <Youtube/>
  },
]

const Follow = () => {
  return (
    <section className="follow">
      <div className="follow__container container">
        <h1 className="follow__title">
          Find us at
        </h1>

        <div className="follow__social">
          {dataFollow.map((item, i) =>
          <a className="follow__social-link" href={item.link}  key={i}>
            {item.icon}
          </a>
          )}
        </div>
        
        
        
        
        
      </div>
    </section>
  )
};

export default Follow